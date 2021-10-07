"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6544],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8329:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>d});var a=n(2685),r=n(1244),l=(n(7378),n(5318)),i=["components"],o={id:"resolve-client",title:"@resolve-js/client",description:"The @resolve-js/client library provides an interface that you can use to communicate with the reSolve backend from JavaScript code."},c=void 0,s={unversionedId:"api/client/resolve-client",id:"api/client/resolve-client",isDocsHomePage:!1,title:"@resolve-js/client",description:"The @resolve-js/client library provides an interface that you can use to communicate with the reSolve backend from JavaScript code.",source:"@site/../docs/api/client/resolve-client.md",sourceDirName:"api/client",slug:"/api/client/resolve-client",permalink:"/resolve/docs/api/client/resolve-client",tags:[],version:"current",frontMatter:{id:"resolve-client",title:"@resolve-js/client",description:"The @resolve-js/client library provides an interface that you can use to communicate with the reSolve backend from JavaScript code."},sidebar:"docs",previous:{title:"@resolve-js/redux",permalink:"/resolve/docs/api/client/resolve-redux"},next:{title:"@resolve-js/react-hooks",permalink:"/resolve/docs/api/client/resolve-react-hooks"}},p=[{value:"command",id:"command",children:[]},{value:"query",id:"query",children:[]},{value:"getStaticAssetUrl",id:"getstaticasseturl",children:[]},{value:"getOriginPath",id:"getoriginpath",children:[]},{value:"subscribe",id:"subscribe",children:[]},{value:"unsubscribe",id:"unsubscribe",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"@resolve-js/client")," library provides an interface that you can use to communicate with the reSolve backend from JavaScript code. To initialize the client, call the library's ",(0,l.kt)("inlineCode",{parentName:"p"},"getClient")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { getClient } from '@resolve-js/client'\n\nconst main = async resolveContext => {\n  const client = getClient(resolveContext)\n  ...\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"getClient")," function takes a reSolve context as a parameter and returns an initialized client object. This object exposes the following functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#command"},"command")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends an aggregate command to the backend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#query"},"query")),(0,l.kt)("td",{parentName:"tr",align:null},"Queries a Read Model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getstaticasseturl"},"getStaticAssetUrl")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a static file's full URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getoriginpath"},"getOriginPath")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns an absolute URL within the application for the given relative path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#subscribe"},"subscribe")),(0,l.kt)("td",{parentName:"tr",align:null},"Subscribes to View Model updates.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#unsubscribe"},"unsubscribe")),(0,l.kt)("td",{parentName:"tr",align:null},"Unsubscribes from View Model updates.")))),(0,l.kt)("h3",{id:"command"},"command"),(0,l.kt)("p",null,"Sends an aggregate command to the backend."),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"client.command(\n  {\n    aggregateName: 'Chat',\n    type: 'postMessage',\n    aggregateId: userName,\n    payload: message,\n  },\n  (err) => {\n    if (err) {\n      console.warn(`Error while sending command: ${err}`)\n    }\n  }\n)\n")),(0,l.kt)("h3",{id:"query"},"query"),(0,l.kt)("p",null,"Queries a Read Model."),(0,l.kt)("h5",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { data } = await client.query({\n  name: 'chat',\n  aggregateIds: '*',\n})\n")),(0,l.kt)("h3",{id:"getstaticasseturl"},"getStaticAssetUrl"),(0,l.kt)("p",null,"Gets a static file's full URL."),(0,l.kt)("h5",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var imagePath = client.getStaticAssetUrl('/account/image.jpg')\n")),(0,l.kt)("h3",{id:"getoriginpath"},"getOriginPath"),(0,l.kt)("p",null,"Returns an absolute URL within the application for the given relative path."),(0,l.kt)("h5",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var commandsApiPath = client.getOriginPath('/api/commands')\n")),(0,l.kt)("h3",{id:"subscribe"},"subscribe"),(0,l.kt)("p",null,"Subscribes to View Model updates. Returns a promise that resolves to a ",(0,l.kt)("strong",{parentName:"p"},"subscription")," object."),(0,l.kt)("h5",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const chatViewModelUpdater = (event) => {\n  const eventType = event != null && event.type != null ? event.type : null\n  const eventHandler = chatViewModel.projection[eventType]\n\n  if (typeof eventHandler === 'function') {\n    chatViewModelState = eventHandler(chatViewModelState, event)\n  }\n\n  setImmediate(updateUI.bind(null, chatViewModelState))\n}\n\nawait client.subscribe('chat', '*', chatViewModelUpdater)\n")),(0,l.kt)("h3",{id:"unsubscribe"},"unsubscribe"),(0,l.kt)("p",null,"Unsubscribes from View Model updates."),(0,l.kt)("h5",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await client.unsubscribe(subscription)\n")))}d.isMDXComponent=!0}}]);