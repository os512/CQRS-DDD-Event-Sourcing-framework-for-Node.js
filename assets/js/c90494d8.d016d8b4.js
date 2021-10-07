"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3872],{5318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=o,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},142:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>m,default:()=>c});var n=a(2685),o=a(1244),r=(a(7378),a(5318)),l=["components"],i={id:"manage-application",title:"Manage an Application",description:"Use the module-admin CLI tool to manage a reSolve application's sagas and read models."},p=void 0,s={unversionedId:"manage-application",id:"manage-application",isDocsHomePage:!1,title:"Manage an Application",description:"Use the module-admin CLI tool to manage a reSolve application's sagas and read models.",source:"@site/../docs/manage-application.md",sourceDirName:".",slug:"/manage-application",permalink:"/resolve/docs/manage-application",tags:[],version:"current",frontMatter:{id:"manage-application",title:"Manage an Application",description:"Use the module-admin CLI tool to manage a reSolve application's sagas and read models."},sidebar:"docs",previous:{title:"reSolve App Structure",permalink:"/resolve/docs/app-structure"},next:{title:"Modules",permalink:"/resolve/docs/modules"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:m};function c(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reimagined/resolve/tree/master/packages/modules/module-admin/README.md"},"module-admin")," CLI tool to manage a reSolve application's sagas and read models. It includes the following functionality:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List application read models and sagas."),(0,r.kt)("li",{parentName:"ul"},"Pause and resume updates for read models and sagas."),(0,r.kt)("li",{parentName:"ul"},"Reset read model and saga persistent state."),(0,r.kt)("li",{parentName:"ul"},"Manage saga properties.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Use the steps below to add the ",(0,r.kt)("strong",{parentName:"p"},"module-admin")," tool to a reSolve application."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reimagined/resolve/tree/master/packages/modules/module-admin/README.md"},"module-admin")," NPM package:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @resolve-js/module-admin\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Register a script that runs the ",(0,r.kt)("strong",{parentName:"p"},"module-admin")," tool in the application's ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  ...\n  "module-admin": "module-admin",\n  ...\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Register ",(0,r.kt)("strong",{parentName:"p"},"module-admin")," as a module in the application's ",(0,r.kt)("strong",{parentName:"p"},"run.js")," file:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import resolveModuleAdmin from '@resolve-js/module-admin'\n...\nswitch (launchMode) {\n  case 'dev': {\n    const moduleAdmin = resolveModuleAdmin()\n    const resolveConfig = merge(\n      defaultResolveConfig,\n      appConfig,\n      devConfig,\n      moduleAdmin\n    )\n  }\n  case 'test:e2e': {\n    const moduleAdmin = resolveModuleAdmin()\n    const resolveConfig = merge(\n      defaultResolveConfig,\n      appConfig,\n      testFunctionalConfig,\n      moduleAdmin\n    )\n  }\n}\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"module-admin")," tool adds API handlers to a reSolve application and sends queries to these handlers to manage the application. To use the tool, you need to start your application. Then, you can execute ",(0,r.kt)("strong",{parentName:"p"},"module-admin")," with the required command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn module-admin read-models reset ShoppingList\n")),(0,r.kt)("p",null,"The default URL that ",(0,r.kt)("strong",{parentName:"p"},"module-admin")," uses to access an application's API is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api"),". Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--api-url")," option to specify another URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'yarn module-admin --api-url "https://127.0.0.1:2000/api" read-models reset ShoppingList\n')),(0,r.kt)("p",null,"For the full list of supported commands, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reimagined/resolve/tree/master/packages/modules/module-admin/README.md"},"NPM package's description")," or use the built-in help command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn module-admin --help\n")))}c.isMDXComponent=!0}}]);