"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6809],{9765:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>d,default:()=>m});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),i=["components"],l={id:"projection",title:"Projection"},c=void 0,p={unversionedId:"api/read-model/projection",id:"api/read-model/projection",isDocsHomePage:!1,title:"Projection",description:"A read model projection is an object of the following structure:",source:"@site/../docs/api/read-model/projection.md",sourceDirName:"api/read-model",slug:"/api/read-model/projection",permalink:"/resolve/docs/api/read-model/projection",tags:[],version:"current",frontMatter:{id:"projection",title:"Projection"},sidebar:"docs",previous:{title:"Projection",permalink:"/resolve/docs/api/aggregate/projection"},next:{title:"Resolver",permalink:"/resolve/docs/api/read-model/resolver"}},d=[{value:"context",id:"context",children:[],level:2}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A read model projection is an object of the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const projection = {\n  // The *Init* function initializes the read model's persistent store.\n  Init: async (store) => { ... }\n  // An event handler function is associated with an event type.\n  // It receives the read model store and an incoming event\n  // and updates the store based on the event's data\n  [EVENT_TYPE1]: async (store, event, context) -> { ... }\n  [EVENT_TYPE2]: async (store, event, context) -> { ... }\n}\n")),(0,o.kt)("p",null,"An event handler implementation receives the following arguments:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"store"),(0,o.kt)("td",{parentName:"tr",align:null},"Exposes ",(0,o.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/store"},"API")," used to communicate with the read model's persistent data storage.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"event"),(0,o.kt)("td",{parentName:"tr",align:null},"An object that contains the incoming event's data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},"An object that contains data and functions related to the current operation.")))),(0,o.kt)("h2",{id:"context"},"context"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," argument is an object with the following fields:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"encrypt"),(0,o.kt)("td",{parentName:"tr",align:null},"The user-defined ",(0,o.kt)("a",{parentName:"td",href:"/resolve/docs/encryption"},"encrypt")," function.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"decrypt"),(0,o.kt)("td",{parentName:"tr",align:null},"The user-defined ",(0,o.kt)("a",{parentName:"td",href:"/resolve/docs/encryption"},"decrypt")," function.")))),(0,o.kt)("p",null,"This object can also contain additional fields added by ",(0,o.kt)("a",{parentName:"p",href:"/resolve/docs/middleware"},"middleware"),"."))}m.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);