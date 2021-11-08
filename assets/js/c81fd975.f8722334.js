"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9310],{5318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1295:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>c});var n=a(2685),r=a(1244),l=(a(7378),a(5318)),i=["components"],o={id:"testing",title:"Testing",description:"This document describes how to write tests for a reSolve application."},s=void 0,d={unversionedId:"testing",id:"testing",isDocsHomePage:!1,title:"Testing",description:"This document describes how to write tests for a reSolve application.",source:"@site/../docs/testing.md",sourceDirName:".",slug:"/testing",permalink:"/resolve/docs/testing",tags:[],version:"current",frontMatter:{id:"testing",title:"Testing",description:"This document describes how to write tests for a reSolve application."},sidebar:"docs",previous:{title:"Debugging",permalink:"/resolve/docs/debugging"},next:{title:"Contributing",permalink:"/resolve/docs/contributing"}},p=[{value:"Testing Tools",id:"testing-tools",children:[],level:2},{value:"Testing Aggregates",id:"testing-aggregates",children:[{value:"Chainable Functions",id:"chainable-functions",children:[],level:3},{value:"Assertions",id:"assertions",children:[],level:3}],level:2},{value:"Testing Read Models",id:"testing-read-models",children:[{value:"Chainable Functions",id:"chainable-functions-1",children:[],level:3},{value:"Assertions",id:"assertions-1",children:[],level:3}],level:2},{value:"Testing Sagas",id:"testing-sagas",children:[{value:"Chainable Functions",id:"chainable-functions-2",children:[],level:3},{value:"Assertions",id:"assertions-2",children:[],level:3}],level:2}],m={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"testing-tools"},"Testing Tools"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"@resolve-js/testing-tools")," package contains utilities that allow you write BDD-style tests for reSolve aggregates, read models and sagas. The provided tools reproduce a read model's full lifecycle in the testing environment."),(0,l.kt)("p",null,"To write a test, call the ",(0,l.kt)("inlineCode",{parentName:"p"},"givenEvents")," function. This function takes an array of events and gives access to a number of chainable functions and assertions that you can combine to describe a test case."),(0,l.kt)("h2",{id:"testing-aggregates"},"Testing Aggregates"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},".aggregate")," function to add an aggregate to a test case. Use the following API to describe the test case for an aggregate:"),(0,l.kt)("h3",{id:"chainable-functions"},"Chainable Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"as(jwt)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a JSON Web Token used for authentication.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"command(name, payload?)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a command to pass to the Aggregate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"withSecretsManager(manager)")),(0,l.kt)("td",{parentName:"tr",align:null},"Assigns a secrets manager to the aggregate")))),(0,l.kt)("h3",{id:"assertions"},"Assertions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Assertion"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shouldProduceEvent(event)")),(0,l.kt)("td",{parentName:"tr",align:null},"Succeeds if the specified event was produced in the given test case.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shouldThrow(error)")),(0,l.kt)("td",{parentName:"tr",align:null},"Succeeds if the Aggregate throws an exception.")))),(0,l.kt)("p",null,"The code sample below demonstrates a ",(0,l.kt)("strong",{parentName:"p"},"jest")," test for an Aggregate:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"test('expecting success command execution', () =>\n  givenEvents([])\n    .aggregate(aggregate)\n    .command('create', {})\n    .as('valid-user')\n    .shouldProduceEvent({\n      type: 'TEST_COMMAND_EXECUTED',\n      payload: {},\n    }))\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"aggregate")," function's parameter should be an object with the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"The Aggregate's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projection")),(0,l.kt)("td",{parentName:"tr",align:null},"The projection definition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"commands")),(0,l.kt)("td",{parentName:"tr",align:null},"The definition of command handlers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"encryption"),(0,l.kt)("em",{parentName:"td"},"(optional)")),(0,l.kt)("td",{parentName:"tr",align:null},"An encryption factory function.")))),(0,l.kt)("h2",{id:"testing-read-models"},"Testing Read Models"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},".readModel")," function to add a read model to a test case. Use the following API to describe a test case for a read model:"),(0,l.kt)("h3",{id:"chainable-functions-1"},"Chainable Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"as(jwt)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a JSON Web Token used for authentication.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not()")),(0,l.kt)("td",{parentName:"tr",align:null},"Invers the assertions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"query(resolver, args?)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a query to send to the read model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"withAdapter(adapter)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a read model adapter to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"withEncryption(encryption)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies an encryption factory function to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"withSecretsManager(manager)")),(0,l.kt)("td",{parentName:"tr",align:null},"Assigns a secrets manager to the aggregate")))),(0,l.kt)("h3",{id:"assertions-1"},"Assertions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Assertion"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shouldReturn(expectedResult)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the result that should be return by a query defined in the test case.")))),(0,l.kt)("p",null,"The code sample below demonstrates a ",(0,l.kt)("strong",{parentName:"p"},"jest")," test for a read model:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"test('shouldReturn assertion', async () => {\n  await givenEvents([\n    { aggregateId: 'id2', type: 'TEST2', payload: { name: 'test-name' } },\n  ])\n    .readModel(readModel)\n    .query('get', { id: 2 })\n    .shouldReturn({ name: 'test-name' })\n})\n")),(0,l.kt)("p",null,"In this example, the ",(0,l.kt)("inlineCode",{parentName:"p"},".all")," function called at the end of the call chain is the ",(0,l.kt)("inlineCode",{parentName:"p"},"ShoppingLists")," read model's resolver function. It returns a promise that resolves to the resolver's response object."),(0,l.kt)("h2",{id:"testing-sagas"},"Testing Sagas"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},".saga")," function to add a saga to a test case. Use the following API to describe a test case for a saga:"),(0,l.kt)("h3",{id:"chainable-functions-2"},"Chainable Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowSideEffects()")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies that saga side effects are allowed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"startSideEffectsFrom(date)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the date time from which to start to execute side effects.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"withAdapter(adapter)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a read model adapter to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"withEncryption(encryption)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies an encryption factory function to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"withSecretsManager(manager)")),(0,l.kt)("td",{parentName:"tr",align:null},"Assigns a secrets manager to the aggregate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mockCommandImplementation(aggregateName, type, implementation)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a mock function to be called with the saga's commands.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mockQueryImplementation(modelName, resolverName, implementation)")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies a mock function to be called with the saga's queries.")))),(0,l.kt)("h3",{id:"assertions-2"},"Assertions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Assertion"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shouldExecuteCommand(command)")),(0,l.kt)("td",{parentName:"tr",align:null},"Succeeds if the saga executes the specified command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shouldExecuteQuery(query)")),(0,l.kt)("td",{parentName:"tr",align:null},"Succeeds if the saga executes the specified query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shouldExecuteSideEffect(name, ...args)")),(0,l.kt)("td",{parentName:"tr",align:null},"Succeeds if the saga calls the specified side effect function with the specified arguments.")))),(0,l.kt)("p",null,"The code sample below demonstrates a ",(0,l.kt)("strong",{parentName:"p"},"jest")," test for a saga:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"test('shouldExecuteSideEffect & shouldExecuteCommand', async () => {\n  await givenEvents([\n    {\n      type: 'CommandSideEffect',\n      aggregateId: 'aggregate-id',\n    },\n  ])\n    .saga(saga)\n    .shouldExecuteSideEffect('email', 'test', 'aggregate-id')\n    .shouldExecuteCommand({\n      type: 'create',\n      aggregateName: 'user',\n      aggregateId: 'id',\n      payload: {\n        item: 'aggregate-id',\n      },\n    })\n})\n")))}c.isMDXComponent=!0}}]);