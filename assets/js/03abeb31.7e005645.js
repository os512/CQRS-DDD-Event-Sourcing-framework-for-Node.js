"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1660],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(n),c=a,m=g["".concat(s,".").concat(c)]||g[c]||u[c]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3600:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>g});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),l=["components"],i={id:"debugging",title:"Debugging",description:"This document describes how to debug the reSolve framework and reSolve-based applications."},s=void 0,p={unversionedId:"debugging",id:"debugging",isDocsHomePage:!1,title:"Debugging",description:"This document describes how to debug the reSolve framework and reSolve-based applications.",source:"@site/../docs/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/resolve/docs/debugging",tags:[],version:"current",frontMatter:{id:"debugging",title:"Debugging",description:"This document describes how to debug the reSolve framework and reSolve-based applications."},sidebar:"docs",previous:{title:"Code Splitting",permalink:"/resolve/docs/code-splitting"},next:{title:"Testing",permalink:"/resolve/docs/testing"}},d=[{value:"Debug ReSolve",id:"debug-resolve",children:[],level:2},{value:"Debug a ReSolve Application",id:"debug-a-resolve-application",children:[],level:2}],u={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ReSolve uses the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@resolve-js/debug-levels"},"@resolve-js/debug-levels")," package to log debug information. This package extends the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/debug"},"debug")," library's functionality with the following logging levels:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Level"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"log"),(0,o.kt)("td",{parentName:"tr",align:null},"Messages that should always be displayed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"error"),(0,o.kt)("td",{parentName:"tr",align:null},"Errors that can prevent normal program execution")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"warn"),(0,o.kt)("td",{parentName:"tr",align:null},"Potential problems in the application's implementation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"debug"),(0,o.kt)("td",{parentName:"tr",align:null},"Information displayed for debugging purposes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"info"),(0,o.kt)("td",{parentName:"tr",align:null},"Messages that describe the current operation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"verbose"),(0,o.kt)("td",{parentName:"tr",align:null},"Extended descriptions to the previous message")))),(0,o.kt)("p",null,"The reSolve framework uses the ",(0,o.kt)("strong",{parentName:"p"},"debug")," logging level by default. Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG_LEVEL")," environment variable to use a different logging level."),(0,o.kt)("h2",{id:"debug-resolve"},"Debug ReSolve"),(0,o.kt)("p",null,"The reSolve framework uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," prefix for all its debugging namespaces. To enable the framework's debug output, assign ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve*")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DEBUG=resolve:* DEBUG_LEVEL=error yarn dev\n")),(0,o.kt)("h2",{id:"debug-a-resolve-application"},"Debug a ReSolve Application"),(0,o.kt)("p",null,"You can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@resolve-js/debug-levels")," package to your application's dependencies to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@resolve-js/debug-levels"},"@resolve-js/debug-levels")," to debug your reSolve application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @resolve-js/debug-levels\n")),(0,o.kt)("p",null,"To create a logger, pass your module's debugging namespace to the function the ",(0,o.kt)("inlineCode",{parentName:"p"},"@resolve-js/debug-levels")," module exposes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import debugLevels from '@resolve-js/debug-levels'\nconst log = debugLevels('myapp:api-handlers')\n...\n")),(0,o.kt)("p",null,"The logger object exposes methods that correspond to the available debug levels:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\nlog.debug('processing an API request')\nlog.verbose(`request body: ${JSON.stringify(req.body)}`)\nlog.verbose(`cookies: ${JSON.stringify(req.cookies)}`)\n...\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG_LEVEL")," environment variables to enable debug messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DEBUG=myapp:api-handlers DEBUG_LEVEL=verbose yarn dev\n")))}g.isMDXComponent=!0}}]);