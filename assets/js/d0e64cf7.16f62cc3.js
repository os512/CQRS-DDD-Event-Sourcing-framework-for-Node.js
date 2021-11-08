"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2333],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5581:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>c});var r=n(2685),a=n(1244),l=(n(7378),n(5318)),o=["components"],i={id:"api-handler",title:"API Handler",description:"This document describes API used by API handlers."},p=void 0,s={unversionedId:"api/api-handler",id:"api/api-handler",isDocsHomePage:!1,title:"API Handler",description:"This document describes API used by API handlers.",source:"@site/../docs/api/api-handler.md",sourceDirName:"api",slug:"/api/api-handler",permalink:"/resolve/docs/api/api-handler",tags:[],version:"current",frontMatter:{id:"api-handler",title:"API Handler",description:"This document describes API used by API handlers."},sidebar:"docs",previous:{title:"Middleware",permalink:"/resolve/docs/api/middleware"},next:{title:"reSolve Scripts",permalink:"/resolve/docs/api/resolve-scripts"}},d=[{value:"Request",id:"request",children:[],level:3},{value:"Response",id:"response",children:[],level:3}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An API handler function has the following structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default async (req, res) => {\n  // ...\n}\n")),(0,l.kt)("p",null,"The handler receives a request and response objects. See the sections below for the information on the API exposed through these objects."),(0,l.kt)("h3",{id:"request"},"Request"),(0,l.kt)("p",null,"The request objects exposes the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resolve"),(0,l.kt)("td",{parentName:"tr",align:null},"The reSolve context object that provides access to reSolve API and metadata.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adapter"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the adapter used to handle the request (",(0,l.kt)("inlineCode",{parentName:"td"},'"express"')," or ",(0,l.kt)("inlineCode",{parentName:"td"},'"awslambda"'),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"The request's HTTP method.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"The request URL's path part.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"The request body.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookies"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains cookies as key-value pairs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the request's HTTP headers as key-value pairs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the request's query string parameters as key-value pairs.")))),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("p",null,"The request objects exposes the following functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"function"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status(code)"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifiers the response status code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getHeader(key)"),(0,l.kt)("td",{parentName:"tr",align:null},"Get a response header by key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setHeader(key, value)"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets a response header.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text(","[content][, encoding]",")"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies content for a text-type response")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json(","[content]",")"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies content for a JSON-type response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end(","[content][, encoding]",")"),(0,l.kt)("td",{parentName:"tr",align:null},"Ends the response process.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file(content, filename ","[, encoding]",")"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a file to write to response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirect(","[status,]"," path)"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the redirect path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookie(name, value ","[, options]",")"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies cookies to send to the client.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clearCookie(name ","[, options]",")"),(0,l.kt)("td",{parentName:"tr",align:null},"Clears a cookie from the response.")))))}c.isMDXComponent=!0}}]);