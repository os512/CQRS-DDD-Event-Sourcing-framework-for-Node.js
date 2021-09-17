import { getLog } from '../common/utils/get-log'
import type {
  EventSubscriberNotification,
  EventSubscriberNotifier,
} from '../common'
import { createEventSubscriberNotification } from '../common'
import { getAccountIdFromLambdaContext } from 'resolve-cloud-common/utils'
import {
  createEventSourceMapping,
  deleteEventSourceMapping,
  getEventSourceMapping,
  getFunctionTags,
  invokeFunction,
  setFunctionTags,
} from 'resolve-cloud-common/lambda'
import {
  deleteSqsQueue,
  ensureSqsQueue,
  sendMessage,
} from 'resolve-cloud-common/sqs'
import { getCallerIdentity } from 'resolve-cloud-common/sts'

type NotifierRuntime = {
  //TODO: types
  sendSqsMessage: Function
  invokeLambdaAsync: Function
}

export const checkError = (error: any, value: string) =>
  error != null &&
  ((error.message != null &&
    error.message.constructor === String &&
    error.message.indexOf(`${value}`) > -1) ||
    (error.stack != null &&
      error.stack.constructor === String &&
      error.stack.indexOf(`${value}`) > -1) ||
    error.name === `${value}` ||
    error.code === `${value}`)

export const isRetryableServiceError = (error: any) =>
  checkError(error, 'TooManyRequestsException') ||
  checkError(error, 'ServiceException')

// TODO: unnecessary destination round trip
const notifyEventSubscriber: (
  runtime: NotifierRuntime,
  ...args: Parameters<EventSubscriberNotifier>
) => Promise<void> = async (
  runtime: NotifierRuntime,
  destination,
  eventSubscriber,
  event?
) => {
  const log = getLog(`notifyEventSubscriber:${eventSubscriber}`)
  if (/^arn:aws:sqs:/.test(destination)) {
    const queueFullName = destination.split(':')[5]
    await runtime.sendSqsMessage(
      queueFullName,
      createEventSubscriberNotification(eventSubscriber, event, true)
    )
  } else if (/^arn:aws:lambda:/.test(destination)) {
    const lambdaFullName = destination.split(':')[6]
    await runtime.invokeLambdaAsync(lambdaFullName, {
      resolveSource: 'BuildEventSubscriber',
      ...createEventSubscriberNotification(eventSubscriber, event, true),
    })
  } else {
    log.warn(
      `event subscriber destination not supported by runtime: ${destination}`
    )
  }
}

type EventSubscriberNotifierFactoryParameters = {
  lambdaContext: {
    invokedFunctionArn: string
    functionName: string
  }
  eventSubscriberScope: string
}

export type EventSubscriberInterface = {
  notifyEventSubscriber: EventSubscriberNotifier
  invokeBuildAsync: (params: EventSubscriberNotification) => Promise<void>
  getEventSubscriberDestination: (name: string) => string
  ensureQueue: (name?: string) => Promise<void>
  deleteQueue: (name?: string) => Promise<void>
}

export const eventSubscriberNotifierFactory = async (
  params: EventSubscriberNotifierFactoryParameters
): Promise<EventSubscriberInterface> => {
  const { lambdaContext, eventSubscriberScope } = params

  const accountId = getAccountIdFromLambdaContext(lambdaContext)
  const { functionName } = lambdaContext
  const region = process.env.AWS_REGION as string
  const userId = process.env.RESOLVE_USER_ID as string
  const functionArn = `arn:aws:lambda:${region}:${accountId}:function:${functionName}`
  const useSqs = !!process.env.EXPERIMENTAL_SQS_TRANSPORT

  const invokeLambdaAsync = async (
    destination: string,
    parameters: Record<string, any>
  ) => {
    await invokeFunction({
      Region: region,
      FunctionName: destination,
      Payload: parameters,
      InvocationType: 'Event',
    })
  }

  const sendSqsMessage = async (
    destination: string,
    parameters: Record<string, any>
  ) => {
    const queueUrl = `https://sqs.${region}.amazonaws.com/${accountId}/${destination}`
    await sendMessage({
      Region: region,
      QueueUrl: queueUrl,
      MessageBody: JSON.stringify(parameters),
    })
  }

  const getEventSubscriberDestination = (eventSubscriber: string) =>
    useSqs
      ? `arn:aws:sqs:${region}:${accountId}:${userId}-${eventSubscriberScope}-${eventSubscriber}`
      : functionArn

  const invokeBuildAsync = async (parameters: { eventSubscriber: string }) =>
    useSqs
      ? await sendSqsMessage(
          `${userId}-${eventSubscriberScope}-${parameters.eventSubscriber}`,
          parameters
        )
      : await invokeLambdaAsync(functionName, {
          resolveSource: 'BuildEventSubscriber',
          ...parameters,
        })

  const ensureQueue = async (name?: string) => {
    if (!useSqs) {
      return
    }
    const getTags = () => {
      const tags = {
        'resolve-deployment-id': eventSubscriberScope,
        'resolve-function-name': functionName,
        'resolve-user-id': userId,
      }

      return tags
    }
    const errors = []
    let roleArn: string | null | undefined = null
    let UUID = null
    try {
      roleArn = (await getCallerIdentity({ Region: region })).Arn
    } catch (err) {
      errors.push(err)
    }

    try {
      while (true) {
        try {
          await ensureSqsQueue({
            QueueName: `${userId}-${eventSubscriberScope}-${name}`,
            Region: region,
            Policy: {
              Version: '2008-10-17',
              Statement: [
                {
                  Action: 'SQS:*',
                  Principal: {
                    AWS: [roleArn as string],
                  },
                  Effect: 'Allow',
                },
              ],
            },
            Tags: getTags(),
          })
          break
        } catch (error) {
          if (checkError(error, 'QueueAlreadyExists')) {
            break
          }
          if (
            !(
              isRetryableServiceError(error) ||
              checkError(
                error,
                'AWS.SimpleQueueService.QueueDeletedRecently'
              ) ||
              checkError(error, 'QueueDeletedRecently')
            )
          ) {
            throw error
          }
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      }
    } catch (err) {
      errors.push(err)
    }

    try {
      while (true) {
        try {
          void ({ UUID } = await createEventSourceMapping({
            Region: region,
            QueueName: `${userId}-${eventSubscriberScope}-${name}`,
            FunctionName: functionName,
            MaximumBatchingWindowInSeconds: 0,
            BatchSize: 10,
          }))
          break
        } catch (error) {
          if (checkError(error, 'ResourceConflictException')) {
            break
          }
          if (!isRetryableServiceError(error)) {
            throw error
          }
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      }
    } catch (err) {
      errors.push(err)
    }

    if (UUID != null) {
      try {
        while (true) {
          try {
            const { State } = await getEventSourceMapping({
              Region: region,
              UUID,
            })
            if (State === 'Enabled') {
              break
            }
          } catch (error) {
            if (!isRetryableServiceError(error)) {
              throw error
            }
          }
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      } catch (err) {
        errors.push(err)
      }

      try {
        await setFunctionTags({
          Region: region,
          FunctionName: functionArn,
          Tags: {
            [`SQS-${eventSubscriberScope}-${name}`]: UUID,
          },
        })
      } catch (err) {
        errors.push(err)
      }
    }

    if (errors.length > 0) {
      const summaryError = new Error(
        errors.map(({ message }) => message).join('\n')
      )
      summaryError.stack = errors.map(({ stack }) => stack).join('\n')
      throw summaryError
    }
  }

  const deleteQueue = async (name?: string) => {
    if (!useSqs) {
      return
    }
    const errors = []
    let functionTags = null
    let UUID = null
    let queueUrl: string | null = null

    try {
      functionTags = await getFunctionTags({
        Region: region,
        FunctionName: functionArn,
      })
      UUID = functionTags[`SQS-${eventSubscriberScope}-${name}`]
      queueUrl = `https://sqs.${region}.amazonaws.com/${accountId}/${userId}-${eventSubscriberScope}-${name}`
    } catch (err) {
      errors.push(err)
    }

    if (UUID != null) {
      try {
        while (true) {
          try {
            await deleteEventSourceMapping({
              Region: region,
              UUID,
            })
            break
          } catch (error) {
            if (checkError(error, 'ResourceNotFoundException')) {
              break
            }
            if (
              !(
                isRetryableServiceError(error) ||
                checkError(error, 'ResourceInUseException')
              )
            ) {
              throw error
            }
            await new Promise((resolve) => setTimeout(resolve, 1000))
          }
        }
      } catch (err) {
        errors.push(err)
      }

      try {
        while (true) {
          try {
            await getEventSourceMapping({ Region: region, UUID })
            const error = new Error('ResourceAlreadyExists')
            ;(error as any).code = 'ResourceAlreadyExists'
            throw error
          } catch (error) {
            if (checkError(error, 'ResourceNotFoundException')) {
              break
            }
            if (
              !(
                isRetryableServiceError(error) ||
                checkError(error, 'ResourceAlreadyExists')
              )
            ) {
              throw error
            }
          }
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      } catch (err) {
        errors.push(err)
      }

      try {
        while (true) {
          try {
            await deleteSqsQueue({
              Region: region,
              QueueName: `${userId}-${eventSubscriberScope}-${name}`,
              QueueUrl: queueUrl as string,
            })
            break
          } catch (error) {
            if (checkError(error, 'Failed to delete SQS queue')) {
              break
            }
            if (!isRetryableServiceError(error)) {
              throw error
            }
            await new Promise((resolve) => setTimeout(resolve, 1000))
          }
        }
      } catch (err) {
        errors.push(err)
      }
    }

    if (errors.length > 0) {
      const summaryError = new Error(
        errors.map(({ message }) => message).join('\n')
      )
      summaryError.stack = errors.map(({ stack }) => stack).join('\n')
      throw summaryError
    }
  }

  const notifier = async (...args: Parameters<EventSubscriberNotifier>) =>
    notifyEventSubscriber(
      {
        sendSqsMessage,
        invokeLambdaAsync,
      },
      ...args
    )

  return {
    notifyEventSubscriber: notifier,
    getEventSubscriberDestination,
    ensureQueue,
    deleteQueue,
    invokeBuildAsync,
  }
}