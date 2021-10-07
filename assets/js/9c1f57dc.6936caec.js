"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5602],{5318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1987:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var n=r(2685),a=r(1244),o=(r(7378),r(5318)),i=["components"],s={id:"app-structure",title:"reSolve App Structure",description:"This article describes the typical structure of a reSolve application."},l=void 0,p={unversionedId:"app-structure",id:"app-structure",isDocsHomePage:!1,title:"reSolve App Structure",description:"This article describes the typical structure of a reSolve application.",source:"@site/../docs/resolve-app-structure.md",sourceDirName:".",slug:"/app-structure",permalink:"/resolve/docs/app-structure",tags:[],version:"current",frontMatter:{id:"app-structure",title:"reSolve App Structure",description:"This article describes the typical structure of a reSolve application."},sidebar:"docs",previous:{title:"Frontend",permalink:"/resolve/docs/frontend"},next:{title:"Manage an Application",permalink:"/resolve/docs/manage-application"}},c=[{value:"Configuration",id:"configuration",children:[]},{value:"Write and Read Sides",id:"write-and-read-sides",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]}],d={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"A reSolve application's main entry point is the ",(0,o.kt)("strong",{parentName:"p"},"run.js")," file. Code in this file assembles the app configuration object from several config files."),(0,o.kt)("p",null,"Configuration settings are split across the following files by default:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"config.app.js")," - Contains general app configuration settings. In this file, you should register the application's aggregates, Read Models and View Models."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"config.dev.js")," - Contains configuration settings that target the development server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"config.prod.js")," - Contains configuration settings that target the production server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"config.test_functional.js")," - Contains configuration settings that target the test environment.")),(0,o.kt)("h2",{id:"write-and-read-sides"},"Write and Read Sides"),(0,o.kt)("p",null,"In accordance with the CQRS paradigm, a reSolve application is divided into the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/resolve/docs/write-side"},"write"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/resolve/docs/read-side"},"read"))," sides."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/resolve/docs/write-side"},"write side"))," is represented by a set of aggregates. The aggregates receive commands and emit events in response. The events are then saved to the event store."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/resolve/docs/read-side"},"read side"))," is used to query the application's data. The read side is represented by a set of ",(0,o.kt)("strong",{parentName:"li"},"Read Models"),".")),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Read Model")," gradually accumulates event data in a storage based on the logic defined by the ",(0,o.kt)("strong",{parentName:"p"},"projection"),". When the client queries the data, the data is pulled from the storage by the ",(0,o.kt)("strong",{parentName:"p"},"resolver"),", processed based on the provided arguments and sent to the client in the required form."),(0,o.kt)("p",null,"ReSolve provides one special kind of Read Models - ",(0,o.kt)("strong",{parentName:"p"},"View Models"),". Instead of mutating some store, a View Model is assembled on the fly. View Models are compatible with Redux, so their data can be reactively updated on the client."),(0,o.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("p",null,"A typical reSolve applications has the following general structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\ud83d\udcc1 resolve-app\n    \ud83d\udcc1 client\n    \ud83d\udcc1 common\n        \ud83d\udcc1 aggregates\n        \ud83d\udcc1 read-models\n        \ud83d\udcc1 view-models\n        \ud83d\udcc1 sagas\n")),(0,o.kt)("p",null,"The root folder contains the ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," files."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"client")," folder contains all client code and markup."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"common")," folder contains sources for the reSolve application. This folder typically contains the following subfolders:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"aggregates")," - Contains source files for aggregate projections and command handlers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"read-models")," - Contains source files for read model projections and resolvers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"view-models")," - Contains source files for view model projections."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sagas")," - Contains source files for sagas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"api-handlers")," - Contains source files for API handlers.")),(0,o.kt)("p",null,"Note, that this is the default and recommended folder structure. You are free to rearrange files as you like, provided that you adjust the app configurations accordingly."))}u.isMDXComponent=!0}}]);