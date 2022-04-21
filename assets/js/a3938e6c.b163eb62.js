"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[762],{6127:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),l=["components"],i={id:"resolver",title:"Resolver"},p=void 0,s={unversionedId:"api/view-model/resolver",id:"api/view-model/resolver",title:"Resolver",description:"A view model resolver object has an associated TypeScript type:",source:"@site/../docs/api/view-model/resolver.md",sourceDirName:"api/view-model",slug:"/api/view-model/resolver",permalink:"/resolve/docs/api/view-model/resolver",tags:[],version:"current",frontMatter:{id:"resolver",title:"Resolver"},sidebar:"docs",previous:{title:"Projection",permalink:"/resolve/docs/api/view-model/projection"},next:{title:"Query",permalink:"/resolve/docs/api/view-model/query"}},c=[{value:"API",id:"api",children:[],level:2},{value:"Query",id:"query",children:[],level:2},{value:"Context",id:"context",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TypeScript Support")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A view model resolver object has an associated TypeScript type:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Type Name - ",(0,o.kt)("inlineCode",{parentName:"li"},"ViewModelResolver")),(0,o.kt)("li",{parentName:"ul"},"Package - ",(0,o.kt)("inlineCode",{parentName:"li"},"@resolve-js/core"))))),(0,o.kt)("p",null,"A view model resolver function has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nasync(api, query, context) => {\n    ...\n    return {\n        data, // Built view model data.\n        meta: {  // Metadata about the resolver execution results.\n          cursor, // The data cursor used to traverse the events included into the query result set.\n          eventTypes, // The list of event types available to the client.\n          aggregateIds, // List of aggregate IDs available to the client.\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," argument is an object that contains the following API:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"buildViewModel"),(0,o.kt)("td",{parentName:"tr",align:null},"Runs a projection for the view model")))),(0,o.kt)("h2",{id:"query"},"Query"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," argument is an object with the following fields:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateIds"),(0,o.kt)("td",{parentName:"tr",align:null},"An array of aggregate IDs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateArgs"),(0,o.kt)("td",{parentName:"tr",align:null},"An object that contains arguments attached to the query.")))),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," argument is an object of the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  jwt, // Optional. The JSON web token attached to the request.\n  viewModel: {\n    name, // The name of the view model.\n    eventTypes // The event types available to the view model.\n  }\n}\n")))}u.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);