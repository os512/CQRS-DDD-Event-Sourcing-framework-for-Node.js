"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2175],{5318:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>c});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,u=m["".concat(l,".").concat(c)]||m[c]||p[c]||o;return a?n.createElement(u,i(i({ref:t},g),{},{components:a})):n.createElement(u,i({ref:t},g))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2011:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>g,default:()=>m});var n=a(2685),r=a(1244),o=(a(7378),a(5318)),i=["components"],s={id:"write-side",title:"Write Side",description:"An application's write side handles commands, validates input data, and emits events based on valid commands."},l=void 0,d={unversionedId:"write-side",id:"write-side",isDocsHomePage:!1,title:"Write Side",description:"An application's write side handles commands, validates input data, and emits events based on valid commands.",source:"@site/../docs/write-side.md",sourceDirName:".",slug:"/write-side",permalink:"/resolve/docs/write-side",tags:[],version:"current",frontMatter:{id:"write-side",title:"Write Side",description:"An application's write side handles commands, validates input data, and emits events based on valid commands."},sidebar:"docs",previous:{title:"Step-by-Step Tutorial",permalink:"/resolve/docs/tutorial"},next:{title:"Read Side",permalink:"/resolve/docs/read-side"}},g=[{value:"Aggregates",id:"aggregates",children:[]},{value:"Aggregate ID",id:"aggregate-id",children:[]},{value:"Configuring Aggregates",id:"configuring-aggregates",children:[]},{value:"Sending a Command",id:"sending-a-command",children:[{value:"Sending Commands From the Client",id:"sending-commands-from-the-client",children:[]},{value:"Emitting Commands on the Server",id:"emitting-commands-on-the-server",children:[]}]},{value:"Aggregate Command Handlers",id:"aggregate-command-handlers",children:[]},{value:"Aggregate Projection Function",id:"aggregate-projection-function",children:[]},{value:"Event Store",id:"event-store",children:[]}],p={toc:g};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"aggregates"},"Aggregates"),(0,o.kt)("p",null,"Commands are executed by objects that encapsulate domain logic. These objects are called Domain Objects.\nDomain Objects are grouped into Aggregates. In a CQRS/ES app, an aggregate is a transaction boundary. This means that any given aggregate should be able to execute its commands without communicating with other aggregates."),(0,o.kt)("p",null,"Since the write side is used only to perform commands, your aggregate can be compact, and only keep state required for command execution."),(0,o.kt)("p",null,"See Martin Fowler's definition for aggregates in the DDD paradigm: ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/DDD_Aggregate.html"},"https://martinfowler.com/bliki/DDD_Aggregate.html")),(0,o.kt)("p",null,"In reSolve, an aggregate is a static object that contains a set of functions of the following two kinds:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#aggregate-projection-function"},"Projections")," - build aggregate state base from events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#aggregate-command-handlers"},"Command Handlers")," - execute commands.")),(0,o.kt)("p",null,"Aggregate state is explicitly passed to all of these functions as an argument."),(0,o.kt)("h2",{id:"aggregate-id"},"Aggregate ID"),(0,o.kt)("p",null,"Each aggregate instance should have a unique immutable ID. You should generate an aggregate ID on the client and send it to reSolve with a command that creates a new aggregate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useCommand } from '@resolve-js/react-hooks'\n...\nconst createShoppingListCommand = useCommand(\n  {\n    type: 'createShoppingList',\n    aggregateId: uuid(),\n    aggregateName: 'ShoppingList',\n    payload: {\n      name: shoppingListName\n    },\n  },\n  (err, result) => {\n    ...\n  }\n)\n")),(0,o.kt)("p",null,"An Aggregate ID should stay unique across all aggregates in the given event store. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kelektiv/node-uuid#version-4"},"UUID v4")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ericelliott/cuid"},"cuid")," to generate aggregate IDs for scalable applications."),(0,o.kt)("h2",{id:"configuring-aggregates"},"Configuring Aggregates"),(0,o.kt)("p",null,"To configure aggregates in a reSolve app, provide an aggregates array in the application configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"aggregates: [\n    {\n      name: 'ShoppingList',\n      commands: 'common/aggregates/shopping_list.commands.js',\n      projection: 'common/aggregates/shopping_list.projection.js'\n    }\n  ]\n")),(0,o.kt)("h2",{id:"sending-a-command"},"Sending a Command"),(0,o.kt)("p",null,"You can emit aggregate commands in the following cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sending-commands-from-the-client"},"Sending commands from the client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#emitting-commands-on-the-server"},"Emitting commands on the server"))),(0,o.kt)("h3",{id:"sending-commands-from-the-client"},"Sending Commands From the Client"),(0,o.kt)("p",null,"The reSolve framework exposes an ",(0,o.kt)("a",{parentName:"p",href:"/resolve/docs/api/client/http-api"},"HTTP API")," that you can use to to send commands from the client side. Your application's frontend can use this API directly or through one of the available ",(0,o.kt)("a",{parentName:"p",href:"/resolve/docs/frontend"},"client libraries"),"."),(0,o.kt)("p",null,"You can send a command from the client side as a POST request to the following URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://{host}:{port}/api/commands\n")),(0,o.kt)("p",null,"The request body should have the ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json")," content type and contain a JSON representation of the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "aggregateName": aggregateName,\n  "type": commandType,\n  "aggregateId": aggregateID,\n  "payload": {\n    "param1": value1,\n    "param2": value2,\n    ...\n    "paramN": valueN\n  }\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"aggregateId")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of an aggregate that should handle the command")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"aggregateName")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The aggregate's name as defined in ",(0,o.kt)("strong",{parentName:"td"},"config.app.js"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"commandType")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The command type that the aggregate can handle")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"payload")),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"The parameters that the command accepts")))),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)("p",null,"Use the following command to add an item to the ",(0,o.kt)("strong",{parentName:"p"},"shopping-list")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -X POST "http://localhost:3000/api/commands"\n--header "Content-Type: application/json" \\\n--data \'\n{\n  "aggregateName":"Todo",\n  "type":"createItem",\n  "aggregateId":"root-id",\n  "payload": {\n    "id":`date +%s`,\n    "text":"Learn reSolve API"\n  }\n}\n\'\n')),(0,o.kt)("h3",{id:"emitting-commands-on-the-server"},"Emitting Commands on the Server"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("strong",{parentName:"p"},"resolve.executeCommand")," function to emit a command on the server side from a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/resolve/docs/sagas"},"Saga"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/resolve/docs/api-handlers"},"API Handler")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await resolve.executeCommand({\n  type: userWithSameEmail ? 'rejectUserCreation' : 'confirmUserCreation',\n  aggregateName: 'user',\n  payload: { createdUser },\n  aggregateId,\n})\n")),(0,o.kt)("h2",{id:"aggregate-command-handlers"},"Aggregate Command Handlers"),(0,o.kt)("p",null,"Aggregate command handlers are grouped into a static object. A command handler receives a command and a state object built by the aggregate ",(0,o.kt)("a",{parentName:"p",href:"#aggregate-projection-function"},"Projection"),". The command handler should return an event object that is then saved to the ",(0,o.kt)("a",{parentName:"p",href:"#event-store"},"event store"),". A returned object should specify an event type and a ",(0,o.kt)("strong",{parentName:"p"},"payload")," specific to this event type. Here you can also add arbitrary validation logic that throws an error if the validation fails."),(0,o.kt)("p",null,"A typical ",(0,o.kt)("strong",{parentName:"p"},"Commands")," object structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  // A command handler\n  createStory: (state, command) => {\n    const { title, link, text } = command.payload\n    // The validation logic\n    if (!text) {\n      throw new Error('The \"text\" field is required')\n    }\n    // The resulting event object\n    return {\n      type: 'StoryCreated',\n      payload: { title, text, link, userId, userName },\n    }\n  },\n  // ...\n}\n")),(0,o.kt)("h2",{id:"aggregate-projection-function"},"Aggregate Projection Function"),(0,o.kt)("p",null,"Projection functions are used to calculate an aggregate state based on the aggregate's events. A projection function receives the previous state and an event to be applied. It should return a new state based on the input."),(0,o.kt)("p",null,"Projection functions run for all events with the current aggregate ID. The resulting state is then passed to the corresponding ",(0,o.kt)("a",{parentName:"p",href:"#aggregate-command-handlers"},"command handler"),"."),(0,o.kt)("p",null,"In addition to projection functions, a projection object should define an ",(0,o.kt)("strong",{parentName:"p"},"Init")," function. This function returns the initial state of the aggregate."),(0,o.kt)("p",null,"A typical projection object structure is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  Init: () => ({}),\n  StoryCreated: (state, { timestamp, payload: { userId } }) => ({\n    ...state,\n    createdAt: timestamp,\n    createdBy: userId,\n    voted: [],\n    comments: {}\n  })\n  ...\n}\n")),(0,o.kt)("h2",{id:"event-store"},"Event Store"),(0,o.kt)("p",null,"All events returned by command handlers are saved to the event store. The reSolve framework uses one of the supported storage adapters to write events to the storage."),(0,o.kt)("p",null,"You can specify the storage adapter in the ",(0,o.kt)("strong",{parentName:"p"},"storageAdapter")," config section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"storageAdapter: {\n  module: '@resolve-js/eventstore-lite',\n  options: {\n    databaseFile: '../data/event-store.db'\n  }\n}\n")),(0,o.kt)("p",null,"Adapters for the following storage types are available out of the box:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reimagined/resolve/tree/master/packages/runtime/adapters/eventstore-adapters/eventstore-lite"},"File or memory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reimagined/resolve/tree/master/packages/runtime/adapters/eventstore-adapters/eventstore-postgresql"},"PostgreSQL"))),(0,o.kt)("p",null,"You can also add your own storage adapter to store events.\nRefer to the ",(0,o.kt)("a",{parentName:"p",href:"/resolve/docs/adapters"},"Adapters")," section of the reSolve documentation for more information about adapters."))}m.isMDXComponent=!0}}]);