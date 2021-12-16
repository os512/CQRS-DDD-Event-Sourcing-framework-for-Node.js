"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[210],{8313:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>p,toc:()=>d,default:()=>u});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),s=["components"],l={id:"api-handlers",title:"API Handlers",description:"Use API Handlers to provide your reSolve server with the capability to handle arbitrary HTTP requests."},i=void 0,p={unversionedId:"api-handlers",id:"api-handlers",isDocsHomePage:!1,title:"API Handlers",description:"Use API Handlers to provide your reSolve server with the capability to handle arbitrary HTTP requests.",source:"@site/../docs/api-handlers.md",sourceDirName:".",slug:"/api-handlers",permalink:"/resolve/docs/api-handlers",tags:[],version:"current",frontMatter:{id:"api-handlers",title:"API Handlers",description:"Use API Handlers to provide your reSolve server with the capability to handle arbitrary HTTP requests."},sidebar:"docs",previous:{title:"Adapters",permalink:"/resolve/docs/adapters"},next:{title:"Middleware",permalink:"/resolve/docs/middleware"}},d=[{value:"common/api-handlers/my-api-handler.js:",id:"commonapi-handlersmy-api-handlerjs",children:[],level:5},{value:"Request",id:"request",children:[],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"config.app.js:",id:"configappjs",children:[],level:5}],level:2},{value:"Implementation Examples",id:"implementation-examples",children:[{value:"Send Text",id:"send-text",children:[],level:5},{value:"Send JSON",id:"send-json",children:[],level:5},{value:"Send File",id:"send-file",children:[],level:5},{value:"Set Cookies",id:"set-cookies",children:[],level:5},{value:"Redirect",id:"redirect",children:[],level:5},{value:"Custom status",id:"custom-status",children:[],level:5}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use API Handlers to provide your reSolve server with the capability to handle arbitrary HTTP requests. ReSolve API handlers have the following general structure:"),(0,o.kt)("h5",{id:"commonapi-handlersmy-api-handlerjs"},"common/api-handlers/my-api-handler.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default async (req, res) => {\n  // ...\n}\n")),(0,o.kt)("p",null,"The handler function takes two parameters - the ",(0,o.kt)("a",{parentName:"p",href:"#request"},"request")," and ",(0,o.kt)("a",{parentName:"p",href:"#response"},"response"),"."),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"req")," object represents the HTTP request. This object exposes properties that provide access to the request query string, parameters, body, HTTP headers, etc."),(0,o.kt)("p",null,"The request provides the following interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  adapter: "express" | "awslambda",\n  method: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH",\n  path: String,\n  body: String,\n  cookies: Object<key, value>,cd\n  <key, value>,\n  query: Object<key, value>,\n  resolve: Object<key, value>\n}\n')),(0,o.kt)("p",null,"The request's ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," field is a reSolve context object that provides access to reSolve API and metadata. Through this object, you can use reSolve-specific API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const getPersonalKey = async (req, res) => {\n    await req.resolve.executeCommand({\n      ...\n    });\n    res.end();\n  }\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," object contains resources, such as database connections, that are disposed after the API handler completes to prevent leaks. For this reason, you should not use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," object in code with delayed execution that may run after the API handler completes.")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," object represents the server's response to the HTTP request."),(0,o.kt)("p",null,"The response object provides the following interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  status(code),\n  getHeader(key),\n  setHeader(key, value),\n  text([content] [, encoding]),\n  json([content]),\n  end([content] [, encoding]),\n  file(content, filename [, encoding]),\n  redirect([status,] path),\n  cookie(name, value [, options]),\n  clearCookie(name [, options])\n}\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"An API handler should be registered in the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiHandlers")," section of the application's configuration file."),(0,o.kt)("h5",{id:"configappjs"},"config.app.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const appConfig = {\n  ...\n  apiHandlers: [\n    {\n      path: 'my-api-handler',\n      handler: 'common/api-handlers/my-api-handler.js',\n      method: 'GET'\n    }\n  ]\n}\nexport default appConfig\n")),(0,o.kt)("p",null,"The configuration object specifies the following options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Path"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL path for which the handler is invoked. The path is specified in the ",(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/route-trie"},"route-trie")," router's format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Handler"),(0,o.kt)("td",{parentName:"tr",align:null},"The path to the file that contains the handler's definition.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Method"),(0,o.kt)("td",{parentName:"tr",align:null},"The HTTP method to handle.")))),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/resolve/docs/application-configuration"},"Application Configuration")," topic for more information."),(0,o.kt)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,o.kt)("h5",{id:"send-text"},"Send Text"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default async (req, res) => {\n  const { username } = JSON.parse(req.body)\n\n  res.text(`Hello ${username}!`)\n}\n")),(0,o.kt)("h5",{id:"send-json"},"Send JSON"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default async (req, res) => {\n  const { username } = JSON.parse(req.body)\n\n  res.json({\n    id: uuid(),\n    username,\n  })\n}\n")),(0,o.kt)("h5",{id:"send-file"},"Send File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default async (req, res) => {\n  const { id } = req.query\n\n  const user = await getUserById(id)\n\n  res.file(JSON.stringify(user), 'user.json')\n}\n")),(0,o.kt)("h5",{id:"set-cookies"},"Set Cookies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default async (req, res) => {\n  res.cookie('expireTime', Date.now() + 1000 * 60 * 60)\n\n  res.end()\n}\n")),(0,o.kt)("h5",{id:"redirect"},"Redirect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default async (req, res) => {\n  res.redirect('/settings')\n}\n")),(0,o.kt)("h5",{id:"custom-status"},"Custom status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default async (req, res) => {\n  if (!checkAccess(req.query)) {\n    res.status(401)\n    res.end('Access denied')\n    return\n  }\n\n  res.end('Ok')\n}\n")))}u.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(i,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);