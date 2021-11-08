"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},563:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>u});var a=n(2685),o=n(1244),r=(n(7378),n(5318)),l=["components"],i={id:"read-side",title:"Read Side",description:"The reSolve framework's read side listens to events that the write side produces. Based on these events, the read side updates the read models that provide data to the queries."},s=void 0,d={unversionedId:"read-side",id:"read-side",isDocsHomePage:!1,title:"Read Side",description:"The reSolve framework's read side listens to events that the write side produces. Based on these events, the read side updates the read models that provide data to the queries.",source:"@site/../docs/read-side.md",sourceDirName:".",slug:"/read-side",permalink:"/resolve/docs/read-side",tags:[],version:"current",frontMatter:{id:"read-side",title:"Read Side",description:"The reSolve framework's read side listens to events that the write side produces. Based on these events, the read side updates the read models that provide data to the queries."},sidebar:"docs",previous:{title:"Write Side",permalink:"/resolve/docs/write-side"},next:{title:"Sagas",permalink:"/resolve/docs/sagas"}},p=[{value:"Read Models",id:"read-models",children:[],level:2},{value:"Configuring Read Models and View Models",id:"configuring-read-models-and-view-models",children:[{value:"Configuring Read Models",id:"configuring-read-models",children:[{value:"config.dev.js:",id:"configdevjs",children:[],level:5},{value:"config.cloud.js:",id:"configcloudjs",children:[],level:5}],level:3},{value:"Configuring View Models",id:"configuring-view-models",children:[],level:3}],level:2},{value:"Initialize a Read Model",id:"initialize-a-read-model",children:[],level:2},{value:"Updating a Read Model via Projection Functions",id:"updating-a-read-model-via-projection-functions",children:[],level:2},{value:"Resolvers",id:"resolvers",children:[],level:2},{value:"View Model Specifics",id:"view-model-specifics",children:[],level:2},{value:"View Model Resolver",id:"view-model-resolver",children:[],level:2},{value:"Performing Queries Using HTTP API",id:"performing-queries-using-http-api",children:[{value:"Query a Read Model",id:"query-a-read-model",children:[{value:"URL Parameters:",id:"url-parameters",children:[],level:5}],level:3},{value:"Query a View Model",id:"query-a-view-model",children:[{value:"URL Parameters",id:"url-parameters-1",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"read-models"},"Read Models"),(0,r.kt)("p",null,"The reSolve framework's read side listens to events that the write side produces. Based on ",(0,r.kt)("strong",{parentName:"p"},"these")," events, the read side updates the ",(0,r.kt)("strong",{parentName:"p"},"Read Models"),", and these models provide data to the queries."),(0,r.kt)("p",null,"A Read Model is defined by a set of projection functions and query resolver functions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#updating-a-read-model-via-projection-functions"},"Projection functions"))," build a Read Models state based on incoming events."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#resolvers"},"Query resolvers"))," use data from the accumulated state to answer queries.")),(0,r.kt)("p",null,"ReSolve also supports ",(0,r.kt)("strong",{parentName:"p"},"View Models"),". A View Model is a Read Model that can be built on the fly, sent to the client and kept there up-to-date. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#view-model-specifics"},"View Model Specifics")," section for more information."),(0,r.kt)("h2",{id:"configuring-read-models-and-view-models"},"Configuring Read Models and View Models"),(0,r.kt)("h3",{id:"configuring-read-models"},"Configuring Read Models"),(0,r.kt)("p",null,"All of the application's Read Models should be registered in the ",(0,r.kt)("strong",{parentName:"p"},"config.app.js")," file's ",(0,r.kt)("strong",{parentName:"p"},"readModels")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const appConfig = {\n  ...\n  readModels: [\n    {\n      name: 'default',\n      projection: 'common/read-models/default.projection.js',\n      resolvers: 'common/read-models/default.resolvers.js',\n      connectorName: 'default'\n    }\n  ],\n}\n")),(0,r.kt)("p",null,"In the configuration object, specify the Read Model's name and the paths to the files containing projections, resolvers, and the Read Model connector's name."),(0,r.kt)("p",null,"A Read Model connector defines how a Read Model's data should be stored. You can define the available connectors in the ",(0,r.kt)("strong",{parentName:"p"},"readModelConnectors")," section:"),(0,r.kt)("h5",{id:"configdevjs"},"config.dev.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const devConfig = {\n  ...\n  readModelConnectors: {\n    default: {\n      module: '@resolve-js/readmodel-lite',\n      options: {}\n    }\n  },\n}\n")),(0,r.kt)("h5",{id:"configcloudjs"},"config.cloud.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { declareRuntimeEnv } from '@resolve-js/scripts'\nconst prodConfig = {\n  ...\n  readModelConnectors: {\n    default: {\n      module: '@resolve-js/readmodel-postgresql',\n      options: {\n        databaseName: declareRuntimeEnv('RESOLVE_READMODEL_DATABASE_NAME'),\n        host: declareRuntimeEnv('RESOLVE_READMODEL_CLUSTER_HOST'),\n        port: declareRuntimeEnv('RESOLVE_READMODEL_CLUSTER_PORT'),\n        user: declareRuntimeEnv('RESOLVE_USER_ID'),\n        password: declareRuntimeEnv('RESOLVE_USER_PASSWORD'),\n        database: 'postgres',\n      }\n    }\n  },\n}\n")),(0,r.kt)("h3",{id:"configuring-view-models"},"Configuring View Models"),(0,r.kt)("p",null,"Register your View Models in the ",(0,r.kt)("strong",{parentName:"p"},"viewModels")," configuration section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const appConfig = {\n  ...\n  viewModels: [\n    {\n      name: 'storyDetails',\n      projection: 'common/view-models/story_details.projection.js',\n      serializeState: 'common/view-models/story_details.serialize_state.js',\n      deserializeState: 'common/view-models/story_details.deserialize_state.js',\n      resolver: 'common/view-models/story-details.validator.js'\n    }\n  ]\n}\n")),(0,r.kt)("p",null,"In the configuration object, specify the View Model's name and the path to the file containing projection definition. Use the ",(0,r.kt)("strong",{parentName:"p"},"serializeState")," and ",(0,r.kt)("strong",{parentName:"p"},"deserializeState")," options to specify paths to a View Model's serializer and deserializer functions. Specify the ",(0,r.kt)("strong",{parentName:"p"},"resolver")," option to add a ",(0,r.kt)("a",{parentName:"p",href:"#view-model-resolver"},"View Model resolver")," to the View Model."),(0,r.kt)("h2",{id:"initialize-a-read-model"},"Initialize a Read Model"),(0,r.kt)("p",null,"Each Read Model projection object should define an ",(0,r.kt)("strong",{parentName:"p"},"Init")," function that initializes the Read Model storage."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},"defineTable")," method to add tables to the storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  Init: async store => {\n    ...\n    await store.defineTable('Comments', {\n      indexes: { id: 'string' },\n      fields: [\n        'text',\n        'parentId',\n        'comments',\n        'storyId',\n        'createdAt',\n        'createdBy',\n        'createdByName'\n      ]\n    })\n  }\n")),(0,r.kt)("p",null,"ReSolve provides a unified API to manage data in storage (this code works with any supported storage type). ",(0,r.kt)("strong",{parentName:"p"},"Read Model Adapters")," provide the internal logic a Read Model uses to communicate with DBMSs."),(0,r.kt)("p",null,"We recommend that you store Read Model data in a denormalized form so that your Read Models are optimized for query performance."),(0,r.kt)("h2",{id:"updating-a-read-model-via-projection-functions"},"Updating a Read Model via Projection Functions"),(0,r.kt)("p",null,"A projection function is used to accumulate the event data in a ",(0,r.kt)("strong",{parentName:"p"},"Read Model storage"),". Each projection function receives the storage object and event information. The event information includes the aggregateID, timestamp, and payload."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/resolve/docs/api/read-model/store"},"standard API")," to communicate with the store. The code sample below demonstrates a Read Model projection function's implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[STORY_COMMENTED]: async (\n  store, { aggregateId, timestamp, payload: { parentId, userId, userName, commentId, text } }\n) => {\n  const comment = { id: commentId, text, parentId, comments: [], storyId: aggregateId,\n    createdAt: timestamp, createdBy: userId, createdByName: userName }\n\n  await store.insert('Comments', comment)\n  await store.update(\n    'Stories',\n    { id: aggregateId },\n    { $inc: { commentCount: 1 } }\n  )\n}\n...\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"#resolvers"},"resolver")," then uses the data from the store to prepare final data samples for data requests."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A Read Model's projection should only use tables that were created in this Read Model's ",(0,r.kt)("inlineCode",{parentName:"p"},"Init")," handler. If you try to access tables created in other Read Models, a \u201cTable does not exist\u201d error is generated.")),(0,r.kt)("p",null,"Note that you can add additional logic to a projection function. For instance, you can perform SQL queries, update Elastic Search indexes, write arbitrary data to files, etc."),(0,r.kt)("p",null,"If you delete the Read Model storage, the framework re-populates the store based on all the events. This can be useful in the development environment and when you deploy an updated version of the application."),(0,r.kt)("h2",{id:"resolvers"},"Resolvers"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"resolver")," is the part of a Read Model that handles data requests. A resolver function receives the store and request parameters. Based on the parameters, the resolver function pulls data from the store and processes it to prepare the response object."),(0,r.kt)("p",null,"The code sample below demonstrates a Read Model implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"comments: async (store, { first, offset }) => {\n  const skip = first || 0\n  const comments = await store.find(\n    'Comments',\n    {},\n    null,\n    { createdAt: -1 },\n    skip,\n    skip + offset\n  )\n  return Array.isArray(comments) ? comments : []\n}\n")),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#query-a-read-model"},"Query a Read Model")," section for information on how to send a request to a Read Model resolver."),(0,r.kt)("h2",{id:"view-model-specifics"},"View Model Specifics"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"View Models")," are ephemeral Read Models that are queried based on aggregate ID. They have the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View Models are rebuilt on every request. They do not store persistent state and do not use the Read Model store."),(0,r.kt)("li",{parentName:"ul"},"View Models are queried based on aggregate ID and can maintain a WebSocket connection to push data updates to the client."),(0,r.kt)("li",{parentName:"ul"},"View Model projections are defined in a format that is isomorphic with Redux reducers so their code can also be used on the client side to define reducer logic.")),(0,r.kt)("p",null,"Use View Models in the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To create aggregate-centric views that request relatively small portions of data based on aggregate IDs."),(0,r.kt)("li",{parentName:"ul"},"To create reactive components, whose state is kept up-to date on the client.")),(0,r.kt)("p",null,"A View Model's projection function receives a state and an event object, and returns an updated state. A projection function runs for every event with the specified aggregate ID from the beginning of the history on every request so it is important to keep View Models small. You can also store snapshots of the View Model state to optimize system resource consumption."),(0,r.kt)("p",null,"The code sample below demonstrates a View Model projection function:"),(0,r.kt)("p",null,"[embedmd]",":# (../examples/js/shopping-list/common/view-models/shopping_list.projection.js /^[","[:blank:]","]+","[","SHOPPING_ITEM_CREATED/ /","}",")",",/)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  [SHOPPING_ITEM_CREATED]: (state, { payload: { id, text } }) => ({\n    ...state,\n    list: [\n      ...state.list,\n      {\n        id,\n        text,\n        checked: false\n      }\n    ]\n  }),\n")),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#query-a-view-model"},"Query a View Model")," section, for information on how to query a View Model."),(0,r.kt)("h2",{id:"view-model-resolver"},"View Model Resolver"),(0,r.kt)("p",null,"A View Model's ",(0,r.kt)("strong",{parentName:"p"},"resolver")," allows you to restrict a user's access to the View Model's data. A resolver function receives the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The reSolve context object;"),(0,r.kt)("li",{parentName:"ul"},"The query object that contains a list of aggregate IDs;"),(0,r.kt)("li",{parentName:"ul"},"An object that contains a JSON Web Token and View Model settings. The View Model settings object contains the View Model's name and a list of available event types.")),(0,r.kt)("p",null,"In the resolver's code, you can use arbitrary logic to check a user's access permissions and either throw an exception to indicate an access error or filter the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventTypes")," list to specify what events are available to the user."),(0,r.kt)("p",null,"The resolver function should return a built View Model data object and a meta object that contains the following data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data cursor used to traverse the events included into the query result set. The initial cursor is returned by the ",(0,r.kt)("inlineCode",{parentName:"li"},"buildViewModel")," function;"),(0,r.kt)("li",{parentName:"ul"},"A list of event types available to the client;"),(0,r.kt)("li",{parentName:"ul"},"A list of aggregate IDs available to the client.")),(0,r.kt)("p",null,"The code sample below demonstrates a View Model resolver implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// common/view-models/story-details.validator.js\nimport jwt from 'jsonwebtoken'\nimport jwtSecret from '../../auth/jwt-secret'\n\nexport default async (resolve, query, { jwt: token, viewModel }) => {\n  try {\n    jwt.verify(token, jwtSecret)\n  } catch (error) {\n    throw new Error('Permission denied')\n  }\n\n  const { data, cursor } = await resolve.buildViewModel(viewModel.name, query)\n\n  return {\n    data,\n    meta: {\n      cursor,\n      eventTypes: viewModel.eventTypes,\n      aggregateIds: query.aggregateIds,\n    },\n  }\n}\n")),(0,r.kt)("p",null,"Use a View Model's ",(0,r.kt)("inlineCode",{parentName:"p"},"resolver")," configuration option to register a resolver:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// config.app.js\nconst appConfig = {\n  ...\n  viewModels: [\n    {\n      name: 'storyDetails',\n      ...\n      resolver: 'common/view-models/story-details.validator.js'\n    }\n  ]\n}\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"#configuring-view-models"},"Configuring View Models")," section for more information."),(0,r.kt)("h2",{id:"performing-queries-using-http-api"},"Performing Queries Using HTTP API"),(0,r.kt)("h3",{id:"query-a-read-model"},"Query a Read Model"),(0,r.kt)("p",null,"To query a Read Model from the client side, send a POST request to the following URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://{host}:{port}/api/query/{readModel}/{resolver}\n")),(0,r.kt)("h5",{id:"url-parameters"},"URL Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"readModel")),(0,r.kt)("td",{parentName:"tr",align:null},"The Read Model name as defined in the application's configuration file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"resolver")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of a ",(0,r.kt)("a",{parentName:"td",href:"#resolvers"},"resolver defined in the Read Model"))))),(0,r.kt)("p",null,"The request body should have the ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")," content type and the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  param1: value1,\n  param2: value2,\n  // ...\n  paramN: valueN\n}\n")),(0,r.kt)("p",null,"The object contains the parameters that the resolver accepts."),(0,r.kt)("h3",{id:"query-a-view-model"},"Query a View Model"),(0,r.kt)("p",null,"To query a View Model from the client side, send a GET request to the following URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://{host}:{port}/api/query/{viewModel}/{aggregateIds}\n")),(0,r.kt)("h5",{id:"url-parameters-1"},"URL Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewModel"),(0,r.kt)("td",{parentName:"tr",align:null},"The View Model name as defined in the application's configuration file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aggregateIds"),(0,r.kt)("td",{parentName:"tr",align:null},"The comma-separated list of Aggregate IDs to include in the View Model. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," to include all Aggregates")))),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("p",null,"Use the following command to get the current ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reimagined/resolve/tree/master/examples/js/shopping-list"},"shopping-list")," example application's state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -g -X GET "http://localhost:3000/api/query/Default/shoppingLists"\n')))}u.isMDXComponent=!0}}]);