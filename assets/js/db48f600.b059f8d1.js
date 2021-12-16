"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5322],{3848:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>d});var r=t(2685),o=t(1244),i=(t(7378),t(5318)),a=["components"],p={id:"preparing-to-production",title:"Preparing to Production",description:"This document describes how to prepare a reSolve application for deployment to a production server environment."},s=void 0,c={unversionedId:"preparing-to-production",id:"preparing-to-production",isDocsHomePage:!1,title:"Preparing to Production",description:"This document describes how to prepare a reSolve application for deployment to a production server environment.",source:"@site/../docs/preparing-to-production.md",sourceDirName:".",slug:"/preparing-to-production",permalink:"/resolve/docs/preparing-to-production",tags:[],version:"current",frontMatter:{id:"preparing-to-production",title:"Preparing to Production",description:"This document describes how to prepare a reSolve application for deployment to a production server environment."},sidebar:"docs",previous:{title:"Event Export and Import",permalink:"/resolve/docs/export-import"},next:{title:"Code Splitting",permalink:"/resolve/docs/code-splitting"}},l=[{value:"Configuration Options",id:"configuration-options",children:[],level:2},{value:"Configuring Adapters",id:"configuring-adapters",children:[],level:2},{value:"Using Environment Variables",id:"using-environment-variables",children:[],level:2}],u={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("p",null,"When you move your application to production, you need to perform all required configurations according to your production environment's specifics."),(0,i.kt)("p",null,"An application is built for production using the ",(0,i.kt)("strong",{parentName:"p"},"build")," script, and run in the production mode using the ",(0,i.kt)("strong",{parentName:"p"},"start")," script. By default, an application that runs in the production mode takes into account settings specifies in the ",(0,i.kt)("strong",{parentName:"p"},"prodConfig")," configuration object (the ",(0,i.kt)("strong",{parentName:"p"},"config.prod.js")," file). However, you can use other config structure as long as you properly register it in the ",(0,i.kt)("strong",{parentName:"p"},"run.js")," file."),(0,i.kt)("p",null,"An example ",(0,i.kt)("strong",{parentName:"p"},"config.prod.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// config.prod.js\nconst prodConfig = {\n  port: 3000,\n  mode: 'production',\n  readModelConnectors: {\n    HackerNews: {\n      module: '@resolve-js/readmodel-lite',\n      options: {},\n    },\n  },\n  jwtCookie: {\n    name: 'jwt',\n    maxAge: 31536000000,\n  },\n}\n\nexport default prodConfig\n")),(0,i.kt)("h2",{id:"configuring-adapters"},"Configuring Adapters"),(0,i.kt)("p",null,"Before you move your app into production, specify all required ",(0,i.kt)("a",{parentName:"p",href:"/resolve/docs/adapters"},"adapters")," in the production config."),(0,i.kt)("p",null,"Depending on your requirements, you may want to specify storage adapters for events, Read Model data and View Model snapshots."),(0,i.kt)("p",null,"The code below demonstrates how to set up a storage adapter on the example of an in-memory Read Model storage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// config.prod.js\nconst prodConfig = {\n  readModelConnectors: {\n    HackerNews: {\n      module: '@resolve-js/readmodel-lite',\n      options: {},\n    },\n  },\n  ...\n}\n")),(0,i.kt)("h2",{id:"using-environment-variables"},"Using Environment Variables"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("strong",{parentName:"p"},"declareRuntimeEnv")," function from the ",(0,i.kt)("strong",{parentName:"p"},"@resolve-js/scripts")," library to bind a configuration setting value to an environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// config.prod.js\nimport { declareRuntimeEnv } from '@resolve-js/scripts'\nexport default {\n  readModelsConnectors: {\n    HackerNews: {\n      module: '@resolve-js/readmodel-postgresql',\n      options: {\n        databaseName: declareRuntimeEnv('RESOLVE_READMODEL_DATABASE_NAME'),\n        host: declareRuntimeEnv('RESOLVE_READMODEL_CLUSTER_HOST'),\n        port: declareRuntimeEnv('RESOLVE_READMODEL_CLUSTER_PORT'),\n        user: declareRuntimeEnv('RESOLVE_USER_ID'),\n        password: declareRuntimeEnv('RESOLVE_USER_PASSWORD'),\n        database: 'postgres',\n      },\n    },\n  },\n  ...\n}\nexport default prodConfig\n")),(0,i.kt)("p",null,"This approach is useful when you need to assign settings that should not be included in application sources (e.g., authentication credentials or secret keys) or settings that should be defined by a server instance."))}d.isMDXComponent=!0},5318:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);