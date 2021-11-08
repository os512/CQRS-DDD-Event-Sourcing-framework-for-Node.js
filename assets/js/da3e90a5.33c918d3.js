"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9574],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,v=d["".concat(p,".").concat(u)]||d[u]||s[u]||o;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8560:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>m,toc:()=>c,default:()=>d});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),l=["components"],i={id:"export-import",title:"Event Export and Import"},p=void 0,m={unversionedId:"export-import",id:"export-import",isDocsHomePage:!1,title:"Event Export and Import",description:"Each event store adapter exposes the following API used for event export and import:",source:"@site/../docs/export-import.md",sourceDirName:".",slug:"/export-import",permalink:"/resolve/docs/export-import",tags:[],version:"current",frontMatter:{id:"export-import",title:"Event Export and Import"},sidebar:"docs",previous:{title:"File Upload",permalink:"/resolve/docs/file-upload"},next:{title:"Preparing to Production",permalink:"/resolve/docs/preparing-to-production"}},c=[{value:"Example",id:"example",children:[],level:5},{value:"Incremental import",id:"incremental-import",children:[{value:"Basic Incremental Import",id:"basic-incremental-import",children:[{value:"Example API handler",id:"example-api-handler",children:[],level:5}],level:3},{value:"Advanced Incremental import",id:"advanced-incremental-import",children:[{value:"Example",id:"example-1",children:[],level:5}],level:3}],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each event store adapter exposes the following API used for event export and import:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"export"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a readable stream used to export events from an event store.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"import"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a writeable stream used to import events into an event store.")))),(0,o.kt)("p",null,"In the code sample below, a readable stream returned by an event store's ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," method is pipelined directly into a writable stream returned by a recipient event store's ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," method."),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Readable, pipeline as pipelineC } from 'stream'\n\nimport createEventStoreAdapter from '@resolve-js/eventstore-lite'\n\nconst pipeline = promisify(pipelineC)\n\nconst eventStore1 = createEventStoreAdapter({\n  databaseFile: './data/event-store-1.db',\n})\n\nconst eventStore2 = createEventStoreAdapter({\n  databaseFile: './data/event-store-2.db',\n})\n\nawait pipeline(eventStore1.export(), eventStore2.import())\n")),(0,o.kt)("h2",{id:"incremental-import"},"Incremental import"),(0,o.kt)("p",null,"Incremental import allows you to import into an event store only those events that do not already exist in this event store. Incremental import also skips events that are older (i.e., have an older timestamp) than the latest event in the recipient event store."),(0,o.kt)("h3",{id:"basic-incremental-import"},"Basic Incremental Import"),(0,o.kt)("p",null,"To import events incrementally, pass an array of events to an event store adapter's ",(0,o.kt)("a",{parentName:"p",href:"/resolve/docs/api/event-store-adapter#incrementalimport"},"incrementalImport")," method."),(0,o.kt)("p",null,"The code sample below implements an API endpoint that incrementally imports events into the application's event store."),(0,o.kt)("h5",{id:"example-api-handler"},"Example API handler"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import iconv from 'iconv-lite'\n\nasync function handler(req, res) {\n  const bodyCharset = (\n    bodyOptions.find((option) => option.startsWith('charset=')) ||\n    'charset=utf-8'\n  ).substring(8)\n\n  if (bodyCharset !== 'utf-8') {\n    bodyContent = iconv.decode(iconv.encode(bodyContent, 'utf-8'), bodyCharset)\n  }\n\n  const events = JSON.parse(body)\n\n  await req.resolve.eventstoreAdapter.incrementalImport(events)\n}\n\nexport default handler\n")),(0,o.kt)("h3",{id:"advanced-incremental-import"},"Advanced Incremental import"),(0,o.kt)("p",null,"The following methods give you additional control over the incremental import process:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/resolve/docs/api/event-store-adapter#beginincrementalimport"},"beginIncrementalImport")),(0,o.kt)("td",{parentName:"tr",align:null},"Starts to accumulate events for incremental import.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/resolve/docs/api/event-store-adapter#pushincrementalimport"},"pushIncrementalImport")),(0,o.kt)("td",{parentName:"tr",align:null},"Accumulates events for incremental import.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/resolve/docs/api/event-store-adapter#commitincrementalimport"},"commitIncrementalImport")),(0,o.kt)("td",{parentName:"tr",align:null},"Commits the accumulated events to the event store.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/resolve/docs/api/event-store-adapter#rollbackincrementaiImport"},"rollbackIncrementalImport")),(0,o.kt)("td",{parentName:"tr",align:null},"Drops the accumulated events.")))),(0,o.kt)("p",null,"The code sample below demonstrates how to use advanced incremental import in a try-catch block to roll back in case of errors."),(0,o.kt)("h5",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  const importId = await eventStoreAdapter.beginIncrementalImport()\n  await eventStoreAdapter.pushIncrementalImport(events, importId)\n  await eventStoreAdapter.commitIncrementalImport(importId)\n} catch (error) {\n  await eventStoreAdapter.rollbackIncrementalImport()\n  throw error\n}\n")))}d.isMDXComponent=!0}}]);