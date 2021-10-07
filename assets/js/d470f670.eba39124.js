"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6999],{5318:(e,n,o)=>{o.d(n,{Zo:()=>i,kt:()=>u});var t=o(7378);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),d=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},i=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=d(o),u=r,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return o?t.createElement(f,s(s({ref:n},i),{},{components:o})):t.createElement(f,s({ref:n},i))}));function u(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var d=2;d<a;d++)s[d]=o[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2911:(e,n,o)=>{o.r(n),o.d(n,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>d,toc:()=>i,default:()=>p});var t=o(2685),r=o(1244),a=(o(7378),o(5318)),s=["components"],c={id:"custom-read-model-connectors",title:"Custom Read Model Connectors"},l=void 0,d={unversionedId:"custom-read-model-connectors",id:"custom-read-model-connectors",isDocsHomePage:!1,title:"Custom Read Model Connectors",description:"You can implement a custom Read Model connector to define how a Read Model's data is stored. A connector implements the following functions:",source:"@site/../docs/custom-read-model-connectors.md",sourceDirName:".",slug:"/custom-read-model-connectors",permalink:"/resolve/docs/custom-read-model-connectors",tags:[],version:"current",frontMatter:{id:"custom-read-model-connectors",title:"Custom Read Model Connectors"},sidebar:"docs",previous:{title:"Encryption",permalink:"/resolve/docs/encryption"},next:{title:"File Upload",permalink:"/resolve/docs/file-upload"}},i=[],m={toc:i};function p(e){var n=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can implement a custom Read Model connector to define how a Read Model's data is stored. A connector implements the following functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"connect")," - Initializes a connection to a storage."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disconnect")," - Closes the storage connection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"drop")," - Removes the Read Model's data from storage."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dispose")," - Forcefully disposes all unmanaged resources used by Read Models served by this connector.")),(0,a.kt)("p",null,"The code sample below demonstrates how to implement a connector that provides a file-based storage for Read Models."),(0,a.kt)("h5",{id:"commonread-modelscustom-read-model-connectorjs"},"common/read-models/custom-read-model-connector.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import fs from 'fs'\n\nconst safeUnlinkSync = filename => {\n  if (fs.existsSync(filename)) {\n    fs.unlinkSync(filename)\n  }\n}\n\nexport default options => {\n  const prefix = String(options.prefix)\n  const readModels = new Set()\n  const connect = async readModelName => {\n    fs.writeFileSync(`${prefix}${readModelName}.lock`, true, { flag: 'wx' })\n    readModels.add(readModelName)\n    const store = {\n      get() {\n        return JSON.parse(String(fs.readFileSync(`${prefix}${readModelName}`)))\n      },\n      set(value) {\n        fs.writeFileSync(`${prefix}${readModelName}`, JSON.stringify(value))\n      }\n    }\n    return store\n  }\n  const disconnect = async (store, readModelName) => {\n    safeUnlinkSync(`${prefix}${readModelName}.lock`)\n    readModels.delete(readModelName)\n  }\n  const drop = async (store, readModelName) => {\n    safeUnlinkSync(`${prefix}${readModelName}.lock`)\n    safeUnlinkSync(`${prefix}${readModelName}`)\n  }\n  const dispose = async () => {\n    for (const readModelName of readModels) {\n      safeUnlinkSync(`${prefix}${readModelName}.lock`)\n    }\n    readModels.clear()\n  }\n  return {\n    connect,\n    disconnect,\n    drop,\n    dispose\n  }\n}\n")),(0,a.kt)("p",null,"A connector is defined as a function that receives an ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," argument. This argument contains a custom set of options that you can specify in the connector's configuration."),(0,a.kt)("p",null,"Register the connector in the application's configuration file."),(0,a.kt)("h5",{id:"configappjs"},"config.app.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"readModelConnectors: {\n  customReadModelConnector: {\n    module: 'common/read-models/custom-read-model-connector.js',\n    options: {\n      prefix: path.join(__dirname, 'data') + path.sep // Path to a folder that contains custom Read Model store files\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Now you can assign the custom connector to a Read Model by name as shown below."),(0,a.kt)("h5",{id:"configappjs-1"},"config.app.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  readModels: [\n    {\n      name: 'CustomReadModel',\n      projection: 'common/read-models/custom-read-model.projection.js',\n      resolvers: 'common/read-models/custom-read-model.resolvers.js',\n      connectorName: 'customReadModelConnector'\n    }\n    ...\n  ]\n")),(0,a.kt)("p",null,"The code sample below demonstrates how you can use the custom store's API in the Read Model's code."),(0,a.kt)("h5",{id:"commonread-modelscustom-read-modelprojectionjs"},"common/read-models/custom-read-model.projection.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const projection = {\n  Init: async store => {\n    await store.set(0)\n  },\n  INCREMENT: async (store, event) => {\n    await store.set((await store.get()) + event.payload)\n  },\n  DECREMENT: async (store, event) => {\n    await store.set((await store.get()) - event.payload)\n  }\n}\n\nexport default projection\n")),(0,a.kt)("h5",{id:"commonread-modelscustom-read-modelresolversjs"},"common/read-models/custom-read-model.resolvers.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const resolvers = {\n  read: async store => {\n    return await store.get()\n  }\n}\n\nexport default resolvers\n")))}p.isMDXComponent=!0}}]);