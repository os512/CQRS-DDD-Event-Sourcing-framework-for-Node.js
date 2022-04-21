"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6647],{9615:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>s,default:()=>u});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),i=["components"],p={id:"projection",title:"Projection"},l=void 0,c={unversionedId:"api/aggregate/projection",id:"api/aggregate/projection",title:"Projection",description:"An aggregate projection object has an associated TypeScript type:",source:"@site/../docs/api/aggregate/projection.md",sourceDirName:"api/aggregate",slug:"/api/aggregate/projection",permalink:"/resolve/docs/api/aggregate/projection",tags:[],version:"current",frontMatter:{id:"projection",title:"Projection"},sidebar:"docs",previous:{title:"Command Handler",permalink:"/resolve/docs/api/aggregate/command-handler"},next:{title:"Projection",permalink:"/resolve/docs/api/read-model/projection"}},s=[],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TypeScript Support")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"An aggregate projection object has an associated TypeScript type:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Type Name - ",(0,o.kt)("inlineCode",{parentName:"li"},"AggregateProjection")),(0,o.kt)("li",{parentName:"ul"},"Package - ",(0,o.kt)("inlineCode",{parentName:"li"},"@resolve-js/core"))))),(0,o.kt)("p",null,"An aggregate projection is an object of the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const projection = {\n  // The *Init* function creates the initial aggregate state object.\n  Init: () => initialState,\n  // An event handler function is associated with an event type.\n  // It receives the aggregate state and an incoming event\n  // and returns the updated state.\n  [EVENT_TYPE]: (state, event) => {\n    ...\n    return newState\n  }\n  [EVENT_TYPE2]: (state, event) => ...\n  [EVENT_TYPE3]: (state, event) => ...\n  ...\n}\n")),(0,o.kt)("p",null,"An event handler implementation receives the following arguments:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"state"),(0,o.kt)("td",{parentName:"tr",align:null},"The aggregate state that is an object of arbitrary structure.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"event"),(0,o.kt)("td",{parentName:"tr",align:null},"An ",(0,o.kt)("a",{parentName:"td",href:"/resolve/docs/api/event"},"event")," object.")))),(0,o.kt)("p",null,"An event handler should return a new state object."))}u.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);