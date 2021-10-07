"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[124],{5318:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3545:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>s,toc:()=>p,default:()=>u});var n=a(2685),r=a(1244),l=(a(7378),a(5318)),i=["components"],o={id:"store",title:"Store",description:"This document describes functions that you can use to communicate with a Read Model store through a `store` object."},d=void 0,s={unversionedId:"api/read-model/store",id:"api/read-model/store",isDocsHomePage:!1,title:"Store",description:"This document describes functions that you can use to communicate with a Read Model store through a `store` object.",source:"@site/../docs/api/read-model/store.md",sourceDirName:"api/read-model",slug:"/api/read-model/store",permalink:"/resolve/docs/api/read-model/store",tags:[],version:"current",frontMatter:{id:"store",title:"Store",description:"This document describes functions that you can use to communicate with a Read Model store through a `store` object."},sidebar:"docs",previous:{title:"Resolver",permalink:"/resolve/docs/api/read-model/resolver"},next:{title:"Connector",permalink:"/resolve/docs/api/read-model/connector"}},p=[{value:"defineTable",id:"definetable",children:[]},{value:"find",id:"find",children:[]},{value:"findOne",id:"findone",children:[]},{value:"count",id:"count",children:[]},{value:"insert",id:"insert",children:[]},{value:"update",id:"update",children:[]},{value:"delete",id:"delete",children:[]},{value:"Search Expression Operators",id:"search-expression-operators",children:[]}],m={toc:p};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The table below lists functions that you can use to communicate with a read model store through a ",(0,l.kt)("inlineCode",{parentName:"p"},"store")," object."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#definetable"},"defineTable")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines a new table within the store.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#find"},"find")),(0,l.kt)("td",{parentName:"tr",align:null},"Searches for data items.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#findone"},"findOne")),(0,l.kt)("td",{parentName:"tr",align:null},"Searches for a single data item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#count"},"count")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the number of items that meet a condition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#insert"},"insert")),(0,l.kt)("td",{parentName:"tr",align:null},"Inserts an item into a table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#update"},"update")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates data items.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#delete"},"delete")),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes data items.")))),(0,l.kt)("h3",{id:"definetable"},"defineTable"),(0,l.kt)("p",null,"Defines a new table within the store."),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},"The new table's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableDeclaration"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that defines the new table's structure.")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Init: async store => {\n  await store.defineTable('Stories', {\n    indexes: { id: 'string', type: 'string' },\n    fields: [\n      'title',\n      'text',\n      'link',\n      'commentCount',\n      'votes',\n      'createdAt',\n      'createdBy',\n      'createdByName'\n    ]\n  })\n")),(0,l.kt)("h3",{id:"find"},"find"),(0,l.kt)("p",null,"Searches for data items based on the specified expression."),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},"A table name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"searchCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that defines a search expression.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"projectionCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which fields should be included into the resulting data sample.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sortCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines how to sort the resulting data sample.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip"),(0,l.kt)("td",{parentName:"tr",align:null},"A number of data items to skip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of data items to fetch.")))),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const getStories = async (type, store, { first, offset }) => {\n  try {\n    const search = type && type.constructor === String ? { type } : {}\n    const skip = first || 0\n    const stories = await store.find(\n      'Stories',\n      search,\n      null,\n      { createdAt: -1 },\n      skip,\n      offset\n    )\n    return Array.isArray(stories) ? stories : []\n  } catch (error) {\n    ...\n    throw error\n  }\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"projection")," argument should be an object, in which keys are field names and values are either ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 - specifies that the field should be included into the resulting data sample;"),(0,l.kt)("li",{parentName:"ul"},"0 - specifies that a field should be excluded from the resulting sample.")),(0,l.kt)("p",null,"The first field in a projection object defines how the projection is interpreted:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the first field's value is ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),", the projection works in inclusive mode. In this mode, you only need to specify included fields. All omitted fields are excluded."),(0,l.kt)("li",{parentName:"ul"},"If the first field's value is ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),", the projection works in exclusive mode. In this mode, only excluded fields should be specified explicitly and all omitted fields are included.")),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const findResult = await store.find(\n  'TestTable',\n  searchCondition,\n  { field1: 1, field2: 1, field3: 1 }, // Return the specified fields\n  //{ field1: 0, field2: 0, field3: 0 }, // Return all but the specified fields\n  { id: sortOrder },\n  skip,\n  limit\n)\n")),(0,l.kt)("h3",{id:"findone"},"findOne"),(0,l.kt)("p",null,"Searches for a data item based on the specified expression."),(0,l.kt)("h4",{id:"arguments-2"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},"A table name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"searchCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that defines a search expression.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"projectionCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which fields should be included into the resulting data sample.")))),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[STORY_UPVOTED]: async (store, { aggregateId, payload: { userId } }) => {\n  const story = await store.findOne(\n    'Stories',\n    { id: aggregateId },\n    { votes: 1 }\n  )\n  await store.update(\n    'Stories',\n    { id: aggregateId },\n    { $set: { votes: story.votes.concat(userId) } }\n  )\n},\n")),(0,l.kt)("h3",{id:"count"},"count"),(0,l.kt)("p",null,"Returns the number of items that meet the specified condition."),(0,l.kt)("h4",{id:"arguments-3"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},"A table name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"searchCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that defines a search expression.")))),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const getStoryCount = async (type, store) =>\n  const count = await store.count('Stories', {})\n  return count\n}\n")),(0,l.kt)("h3",{id:"insert"},"insert"),(0,l.kt)("p",null,"Inserts an item into the specified table."),(0,l.kt)("h4",{id:"arguments-4"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},"A table name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"document"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that is an item to insert.")))),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[STORY_CREATED]: async (\n    store, { aggregateId, timestamp, payload: { title, link, userId, userName, text } }\n  ) => {\n    const isAsk = link == null || link === ''\n    const type = isAsk ? 'ask' : /^(Show HN)/.test(title) ? 'show' : 'story'\n\n    const story = {\n      id: aggregateId,\n      type,\n      title,\n      text,\n      link: !isAsk ? link : '',\n      commentCount: 0,\n      votes: [],\n      createdAt: timestamp,\n      createdBy: userId,\n      createdByName: userName\n    }\n\n    await store.insert('Stories', story)\n  },\n")),(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("p",null,"Searches for data items and updates them based on the specified update expression."),(0,l.kt)("h4",{id:"arguments-5"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to update.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"searchCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that defines a search expression.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that defines an update expression.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies additional options for the update operation.")))),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[STORY_UPVOTED]: async (store, { aggregateId, payload: { userId } }) => {\n  const story = await store.findOne(\n    'Stories',\n    { id: aggregateId },\n    { votes: 1 }\n  )\n  await store.update(\n    'Stories',\n    { id: aggregateId },\n    { $set: { votes: story.votes.concat(userId) } }\n  )\n},\n")),(0,l.kt)("h3",{id:"delete"},"delete"),(0,l.kt)("p",null,"Deletes data items based on the specified search expression."),(0,l.kt)("h4",{id:"arguments-6"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},"A table name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"searchCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that defines a search expression.")))),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[SHOPPING_LIST_REMOVED]: async (store, { aggregateId }) => {\n  await store.delete('ShoppingLists', { id: aggregateId })\n}\n")),(0,l.kt)("h3",{id:"search-expression-operators"},"Search Expression Operators"),(0,l.kt)("p",null,"Search expression use operators to compare values and group expression clauses."),(0,l.kt)("p",null,"The following operators are supported:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Comparison operators:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$eq"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are equal to the specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$ne"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are not equal to the specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$lt"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are less then the specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$lte"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are less then or equal to the specified values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$gt"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are greater then the specified value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$gte"),(0,l.kt)("td",{parentName:"tr",align:null},"Matches values that are greater then or equal to the specified value.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Logical Operators:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$and"),(0,l.kt)("td",{parentName:"tr",align:null},"Joins two expressions with an AND operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$or"),(0,l.kt)("td",{parentName:"tr",align:null},"Joins two expressions with an OR operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\$not"),(0,l.kt)("td",{parentName:"tr",align:null},"Applies a NOT operation to invert an expression.")))),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const data = await store.find('Entries', {\n  $or: [\n    { $and: [{ name: 'Second entry', id: 'id-2' }] },\n    { $not: { id: { $gte: 'id-1' } } },\n  ],\n})\n")))}u.isMDXComponent=!0}}]);