"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6209],{6354:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>u});var a=n(2685),r=n(1244),l=(n(7378),n(5318)),i=["components"],o={id:"resolve-scripts",title:"reSolve Scripts",description:"This document describes service scripts used to configure, build, and run reSolve applications."},s=void 0,p={unversionedId:"api/resolve-scripts",id:"api/resolve-scripts",isDocsHomePage:!1,title:"reSolve Scripts",description:"This document describes service scripts used to configure, build, and run reSolve applications.",source:"@site/../docs/api/resolve-scripts.md",sourceDirName:"api",slug:"/api/resolve-scripts",permalink:"/resolve/docs/api/resolve-scripts",tags:[],version:"current",frontMatter:{id:"resolve-scripts",title:"reSolve Scripts",description:"This document describes service scripts used to configure, build, and run reSolve applications."},sidebar:"docs",previous:{title:"API Handler",permalink:"/resolve/docs/api/api-handler"},next:{title:"HTTP API",permalink:"/resolve/docs/api/client/http-api"}},c=[{value:"build",id:"build",children:[{value:"Example",id:"example",children:[],level:4},{value:"build",id:"build-1",children:[],level:4}],level:3},{value:"start",id:"start",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"watch",id:"watch",children:[{value:"Example",id:"example-2",children:[],level:4}],level:3},{value:"runTestcafe",id:"runtestcafe",children:[{value:"Example",id:"example-3",children:[],level:4}],level:3},{value:"merge",id:"merge",children:[{value:"Example",id:"example-4",children:[],level:4}],level:3},{value:"reset",id:"reset",children:[{value:"Example",id:"example-5",children:[],level:4}],level:3},{value:"importEventStore",id:"importeventstore",children:[{value:"Example",id:"example-6",children:[],level:4}],level:3},{value:"exportEventStore",id:"exporteventstore",children:[{value:"Example",id:"example-7",children:[],level:4}],level:3},{value:"validateConfig",id:"validateconfig",children:[{value:"Example",id:"example-8",children:[],level:4}],level:3}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reimagined/resolve/tree/master/packages/tools/scripts"},"@resolve-js/scripts")," package contains service scripts used to configure, build, and run reSolve applications. The package contains the following scripts:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Script"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#build"},"build")),(0,l.kt)("td",{parentName:"tr",align:null},"Builds an application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#start"},"start")),(0,l.kt)("td",{parentName:"tr",align:null},"Runs an application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#watch"},"watch")),(0,l.kt)("td",{parentName:"tr",align:null},"Runs an application in ",(0,l.kt)("strong",{parentName:"td"},"watch")," mode. (Watch application files for changes.)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#runtestcafe"},"runTestcafe")),(0,l.kt)("td",{parentName:"tr",align:null},"Runs TestCafe tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#merge"},"merge")),(0,l.kt)("td",{parentName:"tr",align:null},"Merges modules and application configurations into a single object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#stop"},"stop")),(0,l.kt)("td",{parentName:"tr",align:null},"Stops an application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#reset"},"reset")),(0,l.kt)("td",{parentName:"tr",align:null},"Resets an application's persistent storages and snapshots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#importeventstore"},"importEventStore")),(0,l.kt)("td",{parentName:"tr",align:null},"Imports events from a file to an application's event store.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#exporteventstore"},"exportEventStore")),(0,l.kt)("td",{parentName:"tr",align:null},"Exports events from an application's event store to a file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#validateconfig"},"validateConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"Validates a configuration object.")))),(0,l.kt)("p",null,"The @resolve-js/scripts library also exports a ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultResolveConfig")," object that contains default configuration settings. This object is merged with an application's configuration objects to receive a global configuration object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// run.js\nconst resolveConfig = merge(defaultResolveConfig, appConfig, devConfig)\n")),(0,l.kt)("h3",{id:"build"},"build"),(0,l.kt)("p",null,"Builds an application."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("h4",{id:"build-1"},"build"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  build,\n  ...\n} from '@resolve-js/scripts'\n    ...\n    switch (launchMode) {\n    ...\n      case 'build': {\n        const resolveConfig = merge(baseConfig, prodConfig)\n        await build(resolveConfig)\n        break\n      }\n      ...\n    }\n")),(0,l.kt)("h3",{id:"start"},"start"),(0,l.kt)("p",null,"Runs a built application."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ...\n  start,\n  ...\n} from '@resolve-js/scripts'\n    ...\n    switch (launchMode) {\n      ...\n      case 'start': {\n        await start(merge(baseConfig, prodConfig))\n        break\n      }\n      ...\n    }\n")),(0,l.kt)("h3",{id:"watch"},"watch"),(0,l.kt)("p",null,"Runs an application in ",(0,l.kt)("strong",{parentName:"p"},"watch")," mode. (Watch application files for changes.)"),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ...\n  watch,\n  ...\n} from '@resolve-js/scripts'\n    ...\n    switch (launchMode) {\n      ...\n      case 'dev': {\n        const resolveConfig = merge(baseConfig, devConfig)\n        await watch(resolveConfig)\n        break\n      }\n      ...\n    }\n")),(0,l.kt)("h3",{id:"runtestcafe"},"runTestcafe"),(0,l.kt)("p",null,"Runs TestCafe tests."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ...\n  runTestcafe,\n  ...\n} from '@resolve-js/scripts'\n    ...\n    switch (launchMode) {\n      ...\n      case 'test:e2e': {\n        const resolveConfig = merge(baseConfig, testFunctionalConfig)\n        await runTestcafe({\n          resolveConfig,\n          functionalTestsDir: 'test/functional',\n          browser: process.argv[3],\n        })\n        break\n      }\n      ...\n    }\n")),(0,l.kt)("h3",{id:"merge"},"merge"),(0,l.kt)("p",null,"Merges modules and application configs into a single object."),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ...\n  merge,\n  ...\n} from '@resolve-js/scripts'\n  ...\n    const resolveConfig = merge(defaultResolveConfig, appConfig, devConfig)\n")),(0,l.kt)("h3",{id:"reset"},"reset"),(0,l.kt)("p",null,"Resets an application's persistent storages and snapshots."),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ...\n  reset,\n  ...\n} from '@resolve-js/scripts'\n    ...\n    switch (launchMode) {\n      ...\n      case 'reset': {\n        const resolveConfig = merge(baseConfig, devConfig)\n        await reset(resolveConfig, {\n          dropEventStore: true,\n          dropEventSubscriber: true,\n          dropReadModels: true,\n          dropSagas: true,\n        })\n        break\n      }\n      ...\n    }\n")),(0,l.kt)("h3",{id:"importeventstore"},"importEventStore"),(0,l.kt)("p",null,"Imports events from a file to an application's event store."),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ...\n  importEventStore,\n  ...\n} from '@resolve-js/scripts'\n    ...\n    switch (launchMode) {\n      ...\n      case 'import-event-store': {\n        const resolveConfig = merge(baseConfig, devConfig)\n\n        const importFile = process.argv[3]\n        await importEventStore(resolveConfig, { importFile })\n        break\n      }\n      ...\n    }\n")),(0,l.kt)("h3",{id:"exporteventstore"},"exportEventStore"),(0,l.kt)("p",null,"Exports events from an application's event store to a file."),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ...\n  exportEventStore,\n  ...\n} from '@resolve-js/scripts'\n    ...\n    switch (launchMode) {\n      ...\n      case 'export-event-store': {\n        const resolveConfig = merge(baseConfig, devConfig)\n\n        const exportFile = process.argv[3]\n        await exportEventStore(resolveConfig, { exportFile })\n        break\n      }\n      ...\n    }\n")),(0,l.kt)("h3",{id:"validateconfig"},"validateConfig"),(0,l.kt)("p",null,"Validates a configuration object."),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  ...\n  validateConfig,\n  ...\n} from '@resolve-js/scripts'\n    ...\n    validateConfig(config)\n")))}u.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);