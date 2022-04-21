"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6095],{6990:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>m});var a=n(2685),r=n(1244),l=(n(7378),n(5318)),i=["components"],o={id:"secrets-manager",title:"Secrets Manager"},s=void 0,p={unversionedId:"api/encryption/secrets-manager",id:"api/encryption/secrets-manager",title:"Secrets Manager",description:"A Secrets Manager object exposes API used to save and load cryptographic secrets to/from the event store database. An encryption factory function can access this object through it's context parameter:",source:"@site/../docs/api/encryption/secrets-manager.md",sourceDirName:"api/encryption",slug:"/api/encryption/secrets-manager",permalink:"/resolve/docs/api/encryption/secrets-manager",tags:[],version:"current",frontMatter:{id:"secrets-manager",title:"Secrets Manager"},sidebar:"docs",previous:{title:"Factory Function",permalink:"/resolve/docs/api/encryption/factory-function"},next:{title:"Monitoring Interface",permalink:"/resolve/docs/api/monitoring/"}},c=[{value:"<code>getSecret</code>",id:"getsecret",children:[],level:2},{value:"<code>setSecret</code>",id:"setsecret",children:[],level:2},{value:"<code>deleteSecret</code>",id:"deletesecret",children:[],level:2},{value:"See Also",id:"see-also",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Secrets Manager object exposes API used to save and load cryptographic secrets to/from the event store database. An ",(0,l.kt)("a",{parentName:"p",href:"/resolve/docs/api/encryption/factory-function"},"encryption factory function")," can access this object through it's ",(0,l.kt)("inlineCode",{parentName:"p"},"context")," parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// common/aggregates/encryption.js\nimport { generate } from 'generate-password'\n\nconst createEncryption = (aggregateId, context) => {\n  const { secretsManager } = context\n  let aggregateKey = await secretsManager.getSecret(aggregateId)\n  if (!aggregateKey) {\n    aggregateKey = generate({\n      length: 20,\n      numbers: true,\n    })\n    await secretsManager.setSecret(aggregateId, aggregateKey)\n  }\n  ...\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"secretsManager")," object contains the following functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getsecret"},(0,l.kt)("inlineCode",{parentName:"a"},"getSecret"))),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a unique ID as an argument and returns a promise that resolves to a string if a secret was found or ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," if a secret was not found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#setsecret"},(0,l.kt)("inlineCode",{parentName:"a"},"setSecret"))),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a unique ID and a secret string as arguments and returns a promise that resolves if the secret was successfully saved.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#deletesecret"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteSecret"))),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a unique ID as an argument and returns a promise that resolves if the secret was successfully deleted.")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The unique ID of an existing or deleted secret cannot be reused. If you pass a previously used ID to the ",(0,l.kt)("a",{parentName:"p",href:"#setsecret"},(0,l.kt)("inlineCode",{parentName:"a"},"setSecret"))," function, an exception is raised."))),(0,l.kt)("h2",{id:"getsecret"},(0,l.kt)("inlineCode",{parentName:"h2"},"getSecret")),(0,l.kt)("p",null,"Get a stored secret from the event store."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const secret = await secretManager.getSecret(id)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The secret's unique identifier within the event store.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result")),(0,l.kt)("p",null,"A promise that resolves to either the loaded secret or ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if the secret with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," was not found."),(0,l.kt)("h2",{id:"setsecret"},(0,l.kt)("inlineCode",{parentName:"h2"},"setSecret")),(0,l.kt)("p",null,"Saves the specified secret to the event store."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await secretManager.setSecret(id, secret)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The secret's unique identifier within the event store.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"secret")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The secret to save.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"promise")," that resolves when the secret has been successfully saved to the event store."),(0,l.kt)("h2",{id:"deletesecret"},(0,l.kt)("inlineCode",{parentName:"h2"},"deleteSecret")),(0,l.kt)("p",null,"Deletes a secret from the event store."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const isDeleted = await secretManager.deleteSecret(id)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The secret's unique identifier within the event store.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result")),(0,l.kt)("p",null,"A promise that resolves to a ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," value. The value indicates whether or not a secret with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," has been found and successfully deleted."),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/resolve/docs/encryption"},"Encryption")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/resolve/docs/api/encryption/factory-function"},"Encryption Factory Function"))))}m.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);