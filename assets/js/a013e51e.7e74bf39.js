"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8461],{5318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,k=c["".concat(i,".").concat(u)]||c[u]||s[u]||l;return a?r.createElement(k,d(d({ref:t},p),{},{components:a})):r.createElement(k,d({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,d=new Array(l);d[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,d[1]=o;for(var m=2;m<l;m++)d[m]=a[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1293:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>m,toc:()=>p,default:()=>c});var r=a(2685),n=a(1244),l=(a(7378),a(5318)),d=["components"],o={id:"middleware",title:"Middleware",description:"This document describes API used by Aggregate and Read Model middleware."},i=void 0,m={unversionedId:"api/middleware",id:"api/middleware",isDocsHomePage:!1,title:"Middleware",description:"This document describes API used by Aggregate and Read Model middleware.",source:"@site/../docs/api/middleware.md",sourceDirName:"api",slug:"/api/middleware",permalink:"/resolve/docs/api/middleware",tags:[],version:"current",frontMatter:{id:"middleware",title:"Middleware",description:"This document describes API used by Aggregate and Read Model middleware."},sidebar:"docs",previous:{title:"Event Store Adapter",permalink:"/resolve/docs/api/event-store-adapter"},next:{title:"API Handler",permalink:"/resolve/docs/api/api-handler"}},p=[{value:"Command Middleware",id:"command-middleware",children:[{value:"middlewareContext",id:"middlewarecontext",children:[],level:3}],level:2},{value:"Read Model Projection Middleware",id:"read-model-projection-middleware",children:[{value:"middlewareContext",id:"middlewarecontext-1",children:[],level:3}],level:2},{value:"Read Model Resolver Middleware",id:"read-model-resolver-middleware",children:[{value:"middlewareContext",id:"middlewarecontext-2",children:[],level:3}],level:2}],s={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"command-middleware"},"Command Middleware"),(0,l.kt)("p",null,"A command middleware function has the following structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const commandMiddleware = (next) => (\n  middlewareContext,\n  state,\n  command,\n  context\n) => {\n  ...\n  state,\n  return next(middlewareContext, state, command, context)\n}\n")),(0,l.kt)("p",null,"The middleware handler function receives the following arguments:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewareContext"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains data that describes the currently processed operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"The state object built by the aggregate ",(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/write-side#aggregate-projection-function"},"projection"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"command"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains data about the incoming command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"The command ",(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/aggregate/command-handler#context"},"context")," object.")))),(0,l.kt)("h3",{id:"middlewarecontext"},"middlewareContext"),(0,l.kt)("p",null,"A command middleware handler's ",(0,l.kt)("inlineCode",{parentName:"p"},"middlewareContext")," argument is an object with the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"req"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores data that describes the currently processed HTTP request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the function used to configure the server's response.")))),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"res")," fields are included only if the client sends the command. If the command is generated on the server (for example, by a saga or API handler), these fields are omitted."),(0,l.kt)("h2",{id:"read-model-projection-middleware"},"Read Model Projection Middleware"),(0,l.kt)("p",null,"A read model projection middleware function has the following structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const projectionMiddleware = (next) => (\n  middlewareContext,\n  store,\n  event,\n  context\n) => {\n  ...\n  return next(middlewareContext, store, event, context)\n}\n")),(0,l.kt)("p",null,"The middleware handler function receives the following arguments:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewareContext"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains data that describes the currently processed operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"store"),(0,l.kt)("td",{parentName:"tr",align:null},"Exposes ",(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/store"},"API")," used to communicate with the read model's persistent data storage.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event"),(0,l.kt)("td",{parentName:"tr",align:null},"The incoming event object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"The read model projection ",(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/projection#context"},"context")," object.")))),(0,l.kt)("h3",{id:"middlewarecontext-1"},"middlewareContext"),(0,l.kt)("p",null,"A projection middleware handler's ",(0,l.kt)("inlineCode",{parentName:"p"},"middlewareContext")," argument is an object with the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"req"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores data that describes the currently processed HTTP request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the function used to configure the server's response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readModelName"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the processed read model.")))),(0,l.kt)("h2",{id:"read-model-resolver-middleware"},"Read Model Resolver Middleware"),(0,l.kt)("p",null,"A read model resolver middleware function has the following structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const resolverMiddleware = (next) => (\n  middlewareContext,\n  store,\n  params,\n  context\n) => {\n  ...\n  return next(middlewareContext, store, params, context)\n}\n")),(0,l.kt)("p",null,"The middleware handler function receives the following arguments:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewareContext"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains data that describes the currently processed operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"store"),(0,l.kt)("td",{parentName:"tr",align:null},"Exposes ",(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/store"},"API")," used to communicate with the read model's persistent data storage.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the request parameters as key-value pairs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"The read model resolver ",(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/resolver#context"},"context")," object.")))),(0,l.kt)("h3",{id:"middlewarecontext-2"},"middlewareContext"),(0,l.kt)("p",null,"A projection middleware handler's ",(0,l.kt)("inlineCode",{parentName:"p"},"middlewareContext")," argument is an object with the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"req"),(0,l.kt)("td",{parentName:"tr",align:null},"Stores data that describes the currently processed HTTP request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"res"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the function used to configure the server's response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readModelName"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the processed read model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resolverName"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the queried resolver.")))))}c.isMDXComponent=!0}}]);