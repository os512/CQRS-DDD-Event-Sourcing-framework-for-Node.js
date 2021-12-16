"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4570],{6031:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>d,toc:()=>s,default:()=>u});var n=a(2685),r=a(1244),l=(a(7378),a(5318)),o=["components"],i={id:"http-api",title:"HTTP API",description:"ReSolve exposes an HTTP API that allows you to send aggregate commands, and query Read and View Models."},p=void 0,d={unversionedId:"api/client/http-api",id:"api/client/http-api",isDocsHomePage:!1,title:"HTTP API",description:"ReSolve exposes an HTTP API that allows you to send aggregate commands, and query Read and View Models.",source:"@site/../docs/api/client/http-api.md",sourceDirName:"api/client",slug:"/api/client/http-api",permalink:"/resolve/docs/api/client/http-api",tags:[],version:"current",frontMatter:{id:"http-api",title:"HTTP API",description:"ReSolve exposes an HTTP API that allows you to send aggregate commands, and query Read and View Models."},sidebar:"docs",previous:{title:"reSolve Scripts",permalink:"/resolve/docs/api/resolve-scripts"},next:{title:"Client Entry Point",permalink:"/resolve/docs/api/client/entry-point"}},s=[{value:"Command API",id:"command-api",children:[{value:"Example",id:"example",children:[],level:4}],level:2},{value:"Read Model API",id:"read-model-api",children:[{value:"URL Parameters:",id:"url-parameters",children:[],level:4},{value:"Example",id:"example-1",children:[],level:4}],level:2},{value:"View Model API",id:"view-model-api",children:[{value:"URL Parameters",id:"url-parameters-1",children:[],level:4},{value:"Example",id:"example-2",children:[],level:4}],level:2},{value:"Authorization",id:"authorization",children:[],level:2}],m={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ReSolve exposes an HTTP API that allows you to send aggregate commands, and query Read and View Models."),(0,l.kt)("h2",{id:"command-api"},"Command API"),(0,l.kt)("p",null,"You can send a command from the client side as a POST request to the following URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://{host}:{port}/api/commands\n")),(0,l.kt)("p",null,"The request body should have the ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")," content type and contain the command's JSON representation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "aggregateName": aggregateName,\n  "type": commandType,\n  "aggregateId": aggregateID,\n  "payload": {\n    "param1": value1,\n    "param2": value2,\n    ...\n    "paramN": valueN\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aggregateId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of an aggregate that should handle the command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aggregateName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The aggregate's name as defined in ",(0,l.kt)("strong",{parentName:"td"},"config.app.js"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"commandType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The command type that the aggregate can handle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"payload")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameters the command accepts.")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const apiCommandsUrl = '/api/commands'\n\nconst sendCommand = async ({\n  aggregateName,\n  aggregateId,\n  type,\n  payload,\n  jwt,\n}) => {\n  await fetch(apiCommandsUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      Authorization: `Bearer ${jwt}`,\n    },\n    body: JSON.stringify({\n      aggregateName,\n      aggregateId,\n      type,\n      payload,\n    }),\n  })\n}\n")),(0,l.kt)("h2",{id:"read-model-api"},"Read Model API"),(0,l.kt)("p",null,"To query a Read Model from the client side, send a POST request to the following URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://{host}:{port}/api/query/{readModel}/{resolver}\n")),(0,l.kt)("h4",{id:"url-parameters"},"URL Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"readModel")),(0,l.kt)("td",{parentName:"tr",align:null},"The Read Model name as defined in the application's configuration file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resolver")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of a ",(0,l.kt)("a",{parentName:"td",href:"#resolvers"},"resolver defined in the Read Model"),".")))),(0,l.kt)("p",null,"The request body should have the ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")," content type and the following structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  param1: value1,\n  param2: value2,\n  // ...\n  paramN: valueN\n}\n")),(0,l.kt)("p",null,"The object contains parameters that the resolver accepts."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const apiQueryUrl = '/api/query'\n\nconst queryReadModel = async (readModelName, resolver, parameters, jwt) => {\n  const requestUrl = `${apiQueryUrl}/${readModelName}/${resolver}`\n  const res = await fetch(requestUrl, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      Authorization: `Bearer ${jwt}`,\n    },\n    body: JSON.stringify(parameters),\n  })\n  return await res.json()\n}\n")),(0,l.kt)("h2",{id:"view-model-api"},"View Model API"),(0,l.kt)("p",null,"To query a View Model from the client side, send a GET request to the following URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://{host}:{port}/api/query/{viewModel}/{aggregateIds}\n")),(0,l.kt)("h4",{id:"url-parameters-1"},"URL Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"viewModel")),(0,l.kt)("td",{parentName:"tr",align:null},"The View Model name as defined in the application's configuration file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aggregateIds")),(0,l.kt)("td",{parentName:"tr",align:null},"The comma-separated list of Aggregate IDs to include in the View Model. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"*")," to include all Aggregates.")))),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const apiQueryUrl = '/api/query'\n\nconst queryViewModel = async (viewModelName, aggregateIds, jwt) => {\n  const requestUrl = `${apiQueryUrl}/${viewModelName}/${aggregateIds.join(',')}`\n  const res = await fetch(requestUrl, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${jwt}`,\n    },\n  })\n  return await res.json()\n}\n")),(0,l.kt)("h2",{id:"authorization"},"Authorization"),(0,l.kt)("p",null,"To authorize your request on a reSolve server, specify a Bearer Token in your request's Authorization header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await fetch(Url, {\n  ...\n  headers: {\n    Authorization: `Bearer ${jwt}`,\n    ...\n  },\n  ...\n})\n")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/resolve/docs/authentication-and-authorization"},"Authentication and Authorization")," topic for information on how authorization is handled on the server."))}u.isMDXComponent=!0},5318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);