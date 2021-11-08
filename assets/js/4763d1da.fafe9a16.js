"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2747],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2539:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>p,default:()=>u});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),s=["components"],i={id:"encryption",title:"Encryption"},c=void 0,l={unversionedId:"encryption",id:"encryption",isDocsHomePage:!1,title:"Encryption",description:"The reSolve framework includes a mechanism that allows you to use an arbitrary encryption algorithm to encrypt the stored events and Read Model state data. You can use this functionality to store user data in compliance with General Data Protection Regulation (GDPR).",source:"@site/../docs/encryption.md",sourceDirName:".",slug:"/encryption",permalink:"/resolve/docs/encryption",tags:[],version:"current",frontMatter:{id:"encryption",title:"Encryption"},sidebar:"docs",previous:{title:"Authentication and Authorization",permalink:"/resolve/docs/authentication-and-authorization"},next:{title:"Custom Read Model Connectors",permalink:"/resolve/docs/custom-read-model-connectors"}},p=[{value:"Aggregate Encryption:",id:"aggregate-encryption",children:[],level:5},{value:"Read Model Encryption:",id:"read-model-encryption",children:[],level:5},{value:"Storing Secrets",id:"storing-secrets",children:[{value:"Example",id:"example",children:[],level:4}],level:3}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The reSolve framework includes a mechanism that allows you to use an arbitrary encryption algorithm to encrypt the stored events and Read Model state data. You can use this functionality to store user data in compliance with General Data Protection Regulation (GDPR)."),(0,o.kt)("p",null,"Encryption is defined in a file that exports a factory function of the following format:"),(0,o.kt)("h5",{id:"aggregate-encryption"},"Aggregate Encryption:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// common/aggregates/encryption.js\nconst createEncryption = (aggregateId, context) => {\n  ...\n  // Returns an object that contains 'encrypt' and 'decrypt' functions\n  return {\n    encrypt: (data) => ..., // A function that takes data and returns its encrypted version\n    decrypt: (blob) => ..., // A function that takes an encrypted blob and returns unencrypted data\n  }\n}\nexport default createEncryption\n")),(0,o.kt)("h5",{id:"read-model-encryption"},"Read Model Encryption:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// common/read-models/encryption.js\nconst createEncryption = (event, context) => {\n  ...\n  // Returns an object that contains 'encrypt' and 'decrypt' functions\n  return {\n    encrypt: (data) => ..., // A function that takes data and returns its encrypted version\n    decrypt: (blob) => ..., // A function that takes an encrypted blob and returns unencrypted data\n  }\n}\nexport default createEncryption\n")),(0,o.kt)("p",null,"You can assign encryption to aggregates and read models in the application's configuration file as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const appConfig = {\n  aggregates: [\n    {\n      name: 'user-profile',\n      commands: 'common/aggregates/user-profile.commands.js',\n      projection: 'common/aggregates/user-profile.projection.js',\n      encryption: 'common/aggregates/encryption.js', // The path to a file that defines aggregate encryption\n    },\n    ...\n  ]\n  readModels: [\n    {\n      name: 'user-profiles',\n      connectorName: 'default',\n      projection: 'common/read-models/user-profiles.projection.js',\n      resolvers: 'common/read-models/user-profiles.resolvers.js',\n      encryption: 'common/read-models/encryption.js', // The path to a file that defines Read Model encryption\n    },\n    ...\n  ],\n  ...\n}\n")),(0,o.kt)("h3",{id:"storing-secrets"},"Storing Secrets"),(0,o.kt)("p",null,"The reSolve framework implements a ",(0,o.kt)("strong",{parentName:"p"},"secrets manager")," that you can use to get, set or delete secrets based on their unique IDs. In an encryption factory function, you can access the secrets manager through the reSolve context object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// common/aggregates/encryption.js\nimport { generate } from 'generate-password'\n\nconst createEncryption = (aggregateId, context) => {\n  const { secretsManager } = context\n  let aggregateKey = await secretsManager.getSecret(aggregateId)\n  if (!aggregateKey) {\n    aggregateKey = generate({\n      length: 20,\n      numbers: true,\n    })\n    await secretsManager.setSecret(aggregateId, aggregateKey)\n  }\n  ...\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"secretsManager")," object contains the following functions:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"getSecret")),(0,o.kt)("td",{parentName:"tr",align:null},"Takes a unique ID as an argument and returns a promise that resolves to a string if a secret was found or null if a secret was not found.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"setSecret")),(0,o.kt)("td",{parentName:"tr",align:null},"Takes a unique ID and a secret string as arguments and returns a promise that resolves if the secret was successfully saved.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"deleteSecret")),(0,o.kt)("td",{parentName:"tr",align:null},"Takes a unique ID as an argument and returns a promise that resolves if the secret was successfully deleted.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," The unique ID of an existing or deleted secret cannot be reused. If you pass a previously used ID to the ",(0,o.kt)("inlineCode",{parentName:"p"},"setSecret")," function, an exception is raised.")),(0,o.kt)("p",null,"The secrets manager stores secrets in the 'secrets' table within the event store. To change the table name, use the event store adapter's ",(0,o.kt)("inlineCode",{parentName:"p"},"secretsTableName")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// config.prod.js\nconst prodConfig = {\n  eventstoreAdapter: {\n    module: '@resolve-js/eventstore-lite',\n    options: {\n      databaseFile: 'data/event-store.db',\n      secretsTableName: 'usersecrets',\n    },\n  },\n}\n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"personal-data")," example demonstrates how to store encrypted user data. In this example, the encryption logic is implemented in a separate ",(0,o.kt)("inlineCode",{parentName:"p"},"common/encryption-factory.js")," file and reused on both the read and write sides."))}u.isMDXComponent=!0}}]);