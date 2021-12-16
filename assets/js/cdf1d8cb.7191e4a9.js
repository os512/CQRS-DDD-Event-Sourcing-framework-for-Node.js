"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[621],{3396:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>s,toc:()=>m,default:()=>u});var n=a(2685),r=a(1244),l=(a(7378),a(5318)),i=["components"],p={id:"event-store-adapter",title:"Event Store Adapter",description:"This document describes the interface that an event store adapter should expose."},d=void 0,s={unversionedId:"api/event-store-adapter",id:"api/event-store-adapter",isDocsHomePage:!1,title:"Event Store Adapter",description:"This document describes the interface that an event store adapter should expose.",source:"@site/../docs/api/event-store-adapter.md",sourceDirName:"api",slug:"/api/event-store-adapter",permalink:"/resolve/docs/api/event-store-adapter",tags:[],version:"current",frontMatter:{id:"event-store-adapter",title:"Event Store Adapter",description:"This document describes the interface that an event store adapter should expose."},sidebar:"docs",previous:{title:"Event",permalink:"/resolve/docs/api/event"},next:{title:"Middleware",permalink:"/resolve/docs/api/middleware"}},m=[{value:"init",id:"init",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"drop",id:"drop",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"dispose",id:"dispose",children:[{value:"Example",id:"example-2",children:[],level:4}],level:3},{value:"saveEvent",id:"saveevent",children:[{value:"Example",id:"example-3",children:[],level:4}],level:3},{value:"loadEvents",id:"loadevents",children:[{value:"Arguments",id:"arguments",children:[],level:5},{value:"Result",id:"result",children:[],level:5},{value:"Example",id:"example-4",children:[],level:4}],level:3},{value:"getLatestEvent",id:"getlatestevent",children:[],level:3},{value:"import",id:"import",children:[{value:"Arguments",id:"arguments-1",children:[],level:5},{value:"Result",id:"result-1",children:[],level:5}],level:3},{value:"export",id:"export",children:[{value:"Arguments",id:"arguments-2",children:[],level:5},{value:"Result",id:"result-2",children:[],level:5},{value:"Example",id:"example-5",children:[],level:4}],level:3},{value:"freeze",id:"freeze",children:[{value:"Arguments",id:"arguments-3",children:[],level:5},{value:"Result",id:"result-3",children:[],level:5},{value:"Example",id:"example-6",children:[],level:4}],level:3},{value:"unfreeze",id:"unfreeze",children:[{value:"Arguments",id:"arguments-4",children:[],level:5},{value:"Result",id:"result-4",children:[],level:5},{value:"Example",id:"example-7",children:[],level:4}],level:3},{value:"isFrozen",id:"isfrozen",children:[{value:"Arguments",id:"arguments-5",children:[],level:5},{value:"Result",id:"result-5",children:[],level:5},{value:"Example",id:"example-8",children:[],level:4}],level:3},{value:"loadSnapshot",id:"loadsnapshot",children:[{value:"Arguments",id:"arguments-6",children:[],level:5},{value:"Result",id:"result-6",children:[],level:5},{value:"Example",id:"example-9",children:[],level:4}],level:3},{value:"saveSnapshot",id:"savesnapshot",children:[{value:"Arguments",id:"arguments-7",children:[],level:5},{value:"Result",id:"result-7",children:[],level:5},{value:"Example",id:"example-10",children:[],level:4}],level:3},{value:"dropSnapshot",id:"dropsnapshot",children:[{value:"Arguments",id:"arguments-8",children:[],level:5},{value:"Result",id:"result-8",children:[],level:5},{value:"Example",id:"example-11",children:[],level:4}],level:3},{value:"getSecret",id:"getsecret",children:[{value:"Arguments",id:"arguments-9",children:[],level:5},{value:"Result",id:"result-9",children:[],level:5},{value:"Example",id:"example-12",children:[],level:4}],level:3},{value:"setSecret",id:"setsecret",children:[{value:"Arguments",id:"arguments-10",children:[],level:5},{value:"Result",id:"result-10",children:[],level:5},{value:"Example",id:"example-13",children:[],level:4}],level:3},{value:"deleteSecret",id:"deletesecret",children:[{value:"Arguments",id:"arguments-11",children:[],level:5},{value:"Result",id:"result-11",children:[],level:5},{value:"Example",id:"example-14",children:[],level:4}],level:3},{value:"incrementalImport",id:"incrementalimport",children:[{value:"Arguments",id:"arguments-12",children:[],level:5},{value:"Result",id:"result-12",children:[],level:5},{value:"Example",id:"example-15",children:[],level:4}],level:3},{value:"beginIncrementalImport",id:"beginincrementalimport",children:[{value:"Arguments",id:"arguments-13",children:[],level:5},{value:"Result",id:"result-13",children:[],level:5}],level:3},{value:"pushIncrementalImport",id:"pushincrementalimport",children:[{value:"Arguments",id:"arguments-14",children:[],level:5},{value:"Result",id:"result-14",children:[],level:5}],level:3},{value:"commitIncrementalImport",id:"commitincrementalimport",children:[{value:"Arguments",id:"arguments-15",children:[],level:5},{value:"Result",id:"result-15",children:[],level:5}],level:3},{value:"rollbackIncrementalImport",id:"rollbackincrementalimport",children:[{value:"Arguments",id:"arguments-16",children:[],level:5},{value:"Result",id:"result-16",children:[],level:5}],level:3}],o={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An event store adapter defines how the reSolve framework stores events in the underlying event store. An event store adapter object must expose the following functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#init"},"init")),(0,l.kt)("td",{parentName:"tr",align:null},"Initializes a database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#drop"},"drop")),(0,l.kt)("td",{parentName:"tr",align:null},"Drops a database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dispose"},"dispose")),(0,l.kt)("td",{parentName:"tr",align:null},"Disconnects from a database and disposes unmanaged resources.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#saveevent"},"saveEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"Saves an event to the database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#loadEvents"},"loadEvents")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets an array of events and the next cursor from the store based on the specified filter criteria.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getlatestevent"},"getLatestEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the latest saved event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#import"},"import")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a writable stream used to save events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#export"},"export")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a readable stream used to load events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#freeze"},"freeze")),(0,l.kt)("td",{parentName:"tr",align:null},"Freezes the database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#unfreeze"},"unfreeze")),(0,l.kt)("td",{parentName:"tr",align:null},"Unfreezes the database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#isfrozen"},"isFrozen")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a Boolean value that indicates whether the database is frozen.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#loadsnapshot"},"loadSnapshot")),(0,l.kt)("td",{parentName:"tr",align:null},"Loads a snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#savesnapshot"},"saveSnapshot")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates or updates a snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#dropsnapshot"},"dropSnapshot")),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#getsecret"},"getSecret")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets a secret.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#setsecret"},"setSecret")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates or updates a secret.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#deletesecret"},"deleteSecret")),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a secret.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#incrementalimport"},"incrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Incrementally imports events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#beginincrementalimport"},"beginIncrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Starts to build a batch of events to import.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#pushincrementalimport"},"pushIncrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Adds events to an incremental import batch.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#commitincrementalimport"},"commitIncrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Commits an incremental import batch to the event store.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#rollbackincrementalimport"},"rollbackIncrementalImport")),(0,l.kt)("td",{parentName:"tr",align:null},"Drops an incremental import batch.")))),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("p",null,"Initializes the database."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import createEventStoreAdapter from '@resolve-js/eventstore-xxx'\n\nconst eventStoreAdapter = createEventStoreAdapter(options)\n\nawait eventStoreAdapter.init()\n")),(0,l.kt)("h3",{id:"drop"},"drop"),(0,l.kt)("p",null,"Drops the database."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.drop()\n")),(0,l.kt)("h3",{id:"dispose"},"dispose"),(0,l.kt)("p",null,"Disconnects from the database and disposes unmanaged resources."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.dispose()\n")),(0,l.kt)("h3",{id:"saveevent"},"saveEvent"),(0,l.kt)("p",null,"Saves an event to the database."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event"),(0,l.kt)("td",{parentName:"tr",align:null},"{ aggregateId: string, aggregateVersion: number, type: string, timestamp: number, payload: any }")))),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.saveEvent({\n  aggregateId: 'user-id',\n  aggregateVersion: 1,\n  type: 'USER_CREATED',\n  timestamp: Date.now(),\n  payload: {\n    name: 'user-name',\n  },\n})\n")),(0,l.kt)("h3",{id:"loadevents"},"loadEvents"),(0,l.kt)("p",null,"Gets an array of events and the next cursor from the store based on the specified filter criteria."),(0,l.kt)("h5",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"{ cursor: string or null, limit: number, eventsSizeLimit: number, eventTypes: Array","<","string",">",", aggregateIds: Array","<","string",">"," } ",(0,l.kt)("br",null)," or ",(0,l.kt)("br",null)," { startTime?: number, endTime?: number, limit: number, eventsSizeLimit: number, eventTypes: Array","<","string",">",", aggregateIds: Array","<","string",">"," }")))),(0,l.kt)("h5",{id:"result"},"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Promise<{\n  events: Array<{\n    threadId: number,\n    threadCounter: number,\n    aggregateId: string,\n    aggregateVersion: number,\n    type: string,\n    timestamp: number,\n    payload: any\n  }>,\n  cursor: string\n}>\n")),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { events, cursor: nextCursor } = await eventStoreAdapter.loadEvents(\n  eventFilter\n)\n")),(0,l.kt)("h3",{id:"getlatestevent"},"getLatestEvent"),(0,l.kt)("p",null,"Gets the latest saved event."),(0,l.kt)("h3",{id:"import"},"import"),(0,l.kt)("p",null,"Gets a writable stream used to save events."),(0,l.kt)("h5",{id:"arguments-1"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-1"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WritableStream")),(0,l.kt)("h3",{id:"export"},"export"),(0,l.kt)("p",null,"Gets a readable stream used to load events."),(0,l.kt)("h5",{id:"arguments-2"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-2"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ReadableStream")),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { pipeline as pipelineC } from 'stream'\nimport { promisify } from 'util'\n\nconst pipeline = promisify(pipelineC)\n\nawait pipeline(eventStoreAdapter1.import(), eventStoreAdapter2.export())\n")),(0,l.kt)("h3",{id:"freeze"},"freeze"),(0,l.kt)("p",null,"Freezes the database."),(0,l.kt)("h5",{id:"arguments-3"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-3"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.freeze()\n")),(0,l.kt)("h3",{id:"unfreeze"},"unfreeze"),(0,l.kt)("p",null,"Unfreezes the database."),(0,l.kt)("h5",{id:"arguments-4"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-4"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.unfreeze()\n")),(0,l.kt)("h3",{id:"isfrozen"},"isFrozen"),(0,l.kt)("p",null,"Gets a Boolean value that indicates whether the database is frozen."),(0,l.kt)("h5",{id:"arguments-5"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-5"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<boolean>")),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const frozen = await eventStoreAdapter.isFrozen()\n")),(0,l.kt)("h3",{id:"loadsnapshot"},"loadSnapshot"),(0,l.kt)("p",null,"Loads a snapshot."),(0,l.kt)("h5",{id:"arguments-6"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshotKey"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of snapshots.")))),(0,l.kt)("h5",{id:"result-6"},"Result"),(0,l.kt)("p",null,"content: ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<string | null>")),(0,l.kt)("h4",{id:"example-9"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const content = await eventStoreAdapter.loadSnapshot(snapshotKey)\nif (content == null) {\n  throw new Error('SnapshotNotFoundException')\n}\n")),(0,l.kt)("h3",{id:"savesnapshot"},"saveSnapshot"),(0,l.kt)("p",null,"Creates or updates a snapshot."),(0,l.kt)("h5",{id:"arguments-7"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshotKey"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of snapshots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"A snapshot in text format.")))),(0,l.kt)("h5",{id:"result-7"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-10"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.saveSnapshot(snapshotKey, content)\n")),(0,l.kt)("h3",{id:"dropsnapshot"},"dropSnapshot"),(0,l.kt)("p",null,"Deletes a snapshot."),(0,l.kt)("h5",{id:"arguments-8"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshotKey"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of snapshots")))),(0,l.kt)("h5",{id:"result-8"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-11"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.dropSnapshot(snapshotKey)\n")),(0,l.kt)("h3",{id:"getsecret"},"getSecret"),(0,l.kt)("p",null,"Gets a secret."),(0,l.kt)("h5",{id:"arguments-9"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of secrets")))),(0,l.kt)("h5",{id:"result-9"},"Result"),(0,l.kt)("p",null,"secret: ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<string | null>")),(0,l.kt)("h4",{id:"example-12"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const secret = await eventStoreAdapter.getSecret(selector)\nif (secret == null) {\n  throw new Error('SecretNotFoundException')\n}\n")),(0,l.kt)("h3",{id:"setsecret"},"setSecret"),(0,l.kt)("p",null,"Creates or updates a secret."),(0,l.kt)("h5",{id:"arguments-10"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of secrets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"A new encrypted secret value in the specified secret.")))),(0,l.kt)("h5",{id:"result-10"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-13"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.setSecret(selector, secret)\n")),(0,l.kt)("h3",{id:"deletesecret"},"deleteSecret"),(0,l.kt)("p",null,"Deletes a secret."),(0,l.kt)("h5",{id:"arguments-11"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key in the table of secrets.")))),(0,l.kt)("h5",{id:"result-11"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-14"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.deleteSecret(selector)\n")),(0,l.kt)("h3",{id:"incrementalimport"},"incrementalImport"),(0,l.kt)("p",null,"Incrementally imports events."),(0,l.kt)("h5",{id:"arguments-12"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("inlineCode",{parentName:"td"},"{ aggregateId: string, type: string, timestamp: number, payload: any }"),".")))),(0,l.kt)("h5",{id:"result-12"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h4",{id:"example-15"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await eventStoreAdapter.incrementalImport(events)\n")),(0,l.kt)("h3",{id:"beginincrementalimport"},"beginIncrementalImport"),(0,l.kt)("p",null,"Starts to build a batch of events to import."),(0,l.kt)("h5",{id:"arguments-13"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-13"},"Result"),(0,l.kt)("p",null,"importId: ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<string>")),(0,l.kt)("h3",{id:"pushincrementalimport"},"pushIncrementalImport"),(0,l.kt)("p",null,"Adds events to an incremental import batch."),(0,l.kt)("h5",{id:"arguments-14"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of ",(0,l.kt)("inlineCode",{parentName:"td"},"{ aggregateId: string, type: string, timestamp: number, payload: any }"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"importId"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key of an import batch.")))),(0,l.kt)("h5",{id:"result-14"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h3",{id:"commitincrementalimport"},"commitIncrementalImport"),(0,l.kt)("p",null,"Commits an incremental import batch to the event store."),(0,l.kt)("h5",{id:"arguments-15"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"importId"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique key of an import batch.")))),(0,l.kt)("h5",{id:"result-15"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("h3",{id:"rollbackincrementalimport"},"rollbackIncrementalImport"),(0,l.kt)("p",null,"Drops an incremental import batch."),(0,l.kt)("h5",{id:"arguments-16"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h5",{id:"result-16"},"Result"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")))}u.isMDXComponent=!0},5318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,c=u["".concat(d,".").concat(k)]||u[k]||o[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);