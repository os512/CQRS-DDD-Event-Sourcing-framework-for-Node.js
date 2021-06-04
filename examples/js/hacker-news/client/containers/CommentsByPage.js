import React from 'react'
import { Redirect } from 'react-router-dom'
import { Comment } from '../components/Comment'
import { Pagination } from '../components/Pagination'
import { CommentsPaginateRenderless } from '@resolve-js/module-comments'
import { ITEMS_PER_PAGE } from '../constants'
const CommentsByPage = ({
  match: {
    params: { page },
  },
}) => {
  return page && !Number.isInteger(Number(page))
    ? React.createElement(Redirect, {
        push: true,
        to: `/error?text=No such page`,
      })
    : React.createElement(
        CommentsPaginateRenderless,
        { itemsOnPage: ITEMS_PER_PAGE, pageNumber: +page || 1 },
        ({ comments, paginationDone }) =>
          React.createElement(
            'div',
            null,
            comments &&
              comments.map((comment) =>
                React.createElement(Comment, {
                  key: comment.commentId,
                  id: comment.commentId,
                  storyId: comment.treeId,
                  text: comment.content.text,
                  createdBy: comment.content.createdBy,
                  createdByName: comment.content.createdByName,
                  createdAt: comment.content.createdAt,
                  parentId: comment.content.parentId,
                })
              ),
            React.createElement(Pagination, {
              page: page,
              hasNext: !paginationDone,
              location: '/comments',
            })
          )
      )
}
export { CommentsByPage }
