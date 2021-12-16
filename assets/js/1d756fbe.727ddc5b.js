"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5680],{1969:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>d,toc:()=>c,default:()=>p});var n=t(2685),s=t(1244),i=(t(7378),t(5318)),r=["components"],o={id:"sagas",title:"Sagas",description:"A saga describes a long running process as a sequence of events."},l=void 0,d={unversionedId:"sagas",id:"sagas",isDocsHomePage:!1,title:"Sagas",description:"A saga describes a long running process as a sequence of events.",source:"@site/../docs/sagas.md",sourceDirName:".",slug:"/sagas",permalink:"/resolve/docs/sagas",tags:[],version:"current",frontMatter:{id:"sagas",title:"Sagas",description:"A saga describes a long running process as a sequence of events."},sidebar:"docs",previous:{title:"Read Side",permalink:"/resolve/docs/read-side"},next:{title:"Adapters",permalink:"/resolve/docs/adapters"}},c=[{value:"Sagas Overview",id:"sagas-overview",children:[],level:2},{value:"Define a Saga",id:"define-a-saga",children:[{value:"Add a Saga to the Application",id:"add-a-saga-to-the-application",children:[],level:3},{value:"Initialize the EventStore",id:"initialize-the-eventstore",children:[],level:3},{value:"Handle Events",id:"handle-events",children:[],level:3},{value:"Use Side Effects",id:"use-side-effects",children:[{value:"Side Effect Starting Timestamp",id:"side-effect-starting-timestamp",children:[],level:4}],level:3},{value:"Send Aggregate Commands",id:"send-aggregate-commands",children:[],level:3},{value:"Schedule Aggregate Commands",id:"schedule-aggregate-commands",children:[],level:3}],level:2},{value:"Register a Saga",id:"register-a-saga",children:[],level:2}],m={toc:c};function p(e){var a=e.components,t=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A saga describes a long running process as a sequence of events."),(0,i.kt)("h2",{id:"sagas-overview"},"Sagas Overview"),(0,i.kt)("p",null,"You can define a saga as a set of event handler functions. Each function runs in response to a specific event and can do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Send a command to an aggregate"),(0,i.kt)("li",{parentName:"ul"},"Schedule a command at the specified moment in time"),(0,i.kt)("li",{parentName:"ul"},"Store intermediate data in a persistent storage"),(0,i.kt)("li",{parentName:"ul"},"Trigger a side effect")),(0,i.kt)("p",null,"This functionality allows you to organize branched chains of events and side effects to describe processes of any complexity. For example, the code below demonstrates a saga that structures a web site's user registration process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable import/no-anonymous-default-export*/\n...\nexport default {\n  handlers: {\n    Init: async ({ store }) => {\n      await store.defineTable('users', {\n        indexes: { id: 'string' },\n        fields: ['mail'],\n      })\n    },\n    USER_CREATED: async ({ store, sideEffects }, event) => {\n      await store.insert('users', {\n        id: event.aggregateId,\n        mail: event.payload.mail,\n      })\n      await sideEffects.executeCommand({\n        aggregateName: 'User',\n        aggregateId: event.aggregateId,\n        type: 'requestConfirmUser',\n        payload: event.payload,\n      })\n    },\n    USER_CONFIRM_REQUESTED: async ({ sideEffects }, event) => {\n      await sideEffects.sendEmail(event.payload.mail, 'Confirm mail')\n      await sideEffects.scheduleCommand(\n        event.timestamp + 1000 * 60 * 60 * 24 * 7,\n        {\n          aggregateName: 'User',\n          aggregateId: event.aggregateId,\n          type: 'forgetUser',\n          payload: {},\n        }\n      )\n    },\n    USER_FORGOTTEN: async ({ store }, event) => {\n      await store.delete('users', {\n        id: event.aggregateId,\n      })\n    },\n  },\n  sideEffects: {\n    sendEmail: async (mail, content) => {\n      ...\n    },\n  },\n}\n")),(0,i.kt)("p",null,"The saga requests that a new user confirms his/her email address. If the user does not confirm the address within one week, the saga cancels the registration."),(0,i.kt)("h2",{id:"define-a-saga"},"Define a Saga"),(0,i.kt)("h3",{id:"add-a-saga-to-the-application"},"Add a Saga to the Application"),(0,i.kt)("p",null,"You can define a saga in one of the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In one source file as an object that contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"handlers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sideEffects")," objects."),(0,i.kt)("h5",{parentName:"li",id:"commonsagasuser-confirmationsagajs"},"common/sagas/user-confirmation.saga.js:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  handlers: {\n    // Event handlers implementation\n  }\n  sideEffects: {\n    // Side effects implementation\n  }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In two separate files."),(0,i.kt)("h5",{parentName:"li",id:"commonsagasuser-confirmationhandlersjs"},"common/sagas/user-confirmation.handlers.js:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  // Event handlers implementation\n}\n")),(0,i.kt)("h5",{parentName:"li",id:"commonsagasuser-confirmationside-effectsjs"},"common/sagas/user-confirmation.side-effects.js:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  // Side effects implementation\n}\n")))),(0,i.kt)("h3",{id:"initialize-the-eventstore"},"Initialize the EventStore"),(0,i.kt)("p",null,"Every saga should define an ",(0,i.kt)("inlineCode",{parentName:"p"},"Init")," function that initializes the saga's persistent storage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Init: async ({ store }) => {\n  await store.defineTable('users', {\n    indexes: { id: 'string' },\n    fields: ['mail'],\n  })\n},\n")),(0,i.kt)("h3",{id:"handle-events"},"Handle Events"),(0,i.kt)("p",null,"An event handler function runs for each occurrence of a specific event. It has the following general structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"EVENT_NAME: async ({ store, sideEffects }, event) => {\n  // Event handler logic\n}\n")),(0,i.kt)("p",null,"As a first argument, an event handler receives an object that provides access to the following API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"store")," - Provides access to the saga's persistent store (similar to the Read Model store)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sideEffects")," - Provides access to the saga's side effect functions.")),(0,i.kt)("h3",{id:"use-side-effects"},"Use Side Effects"),(0,i.kt)("p",null,"You should define all functions that have side effects in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sideEffects")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"sideEffects: {\n  sendEmail: async (mail, content) => {\n    ...\n  },\n},\n")),(0,i.kt)("p",null,"You can trigger the defined side effects from an event handler as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await sideEffects.sendEmail(event.payload.mail, 'Confirm mail')\n")),(0,i.kt)("p",null,"The following side effect functions are available by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executeCommand")," - Sends a command with the specified payload to an aggregate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scheduleCommand")," - Similar to ",(0,i.kt)("inlineCode",{parentName:"li"},"executeCommand"),", but delays command execution until a specified moment in time.")),(0,i.kt)("h4",{id:"side-effect-starting-timestamp"},"Side Effect Starting Timestamp"),(0,i.kt)("p",null,"Each saga stores a ",(0,i.kt)("inlineCode",{parentName:"p"},"RESOLVE_SIDE_EFFECTS_START_TIMESTAMP")," property. This property's value is a timestamp that defines the latest point in time for which side effects are allowed. If an event is older than this timestamp, all side effect functions for the current event handler are replaced with stub functions that do nothing. This is required to guarantee that side effect logic is never invoked more than once for a given event. Note that if you reset the Saga, the timestamp is preserved and side effects are not re-invoked as the saga rebuilds its state."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sideEffects")," object's ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," field indicates whether or not side effects are enabled for the processed event."),(0,i.kt)("p",null,"If your need to re-run side effects after you reset a saga's state, use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@resolve-js/module-admin"},"@resolve-js/module-admin")," CLI tool to assign the desired timestamp to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RESOLVE_SIDE_EFFECTS_START_TIMESTAMP")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npx @resolve-js/module-admin sagas properties set "UserConfirmation" "RESOLVE_SIDE_EFFECTS_START_TIMESTAMP" $(date +%s%3N -d "yesterday")\n')),(0,i.kt)("p",null,"You can also specify a new timestamp as an option for the ",(0,i.kt)("inlineCode",{parentName:"p"},"sagas reset")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx @resolve-js/module-admin sagas reset UserConfirmation --side-effects-start-timestamp 0000-00-0000:00:00.000\n")),(0,i.kt)("h3",{id:"send-aggregate-commands"},"Send Aggregate Commands"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeCommand")," side effect function to send aggregate commands as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await sideEffects.executeCommand({\n  aggregateName: 'User',\n  aggregateId: event.aggregateId,\n  type: 'requestConfirmUser',\n  payload: event.payload,\n})\n")),(0,i.kt)("h3",{id:"schedule-aggregate-commands"},"Schedule Aggregate Commands"),(0,i.kt)("p",null,"The code sample below demonstrates how the command executes at a specified point in time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await sideEffects.scheduleCommand(\n  event.timestamp + 1000 * 60 * 60 * 24 * 7,\n  {\n    aggregateName: 'User',\n    aggregateId: event.aggregateId,\n    type: 'forgetUser',\n    payload: {},\n  }\n)\n")),(0,i.kt)("h2",{id:"register-a-saga"},"Register a Saga"),(0,i.kt)("p",null,"To use a saga in your application, you need to register it in the application's configuration file. If a saga is defined in a single file, you can register it as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"sagas: [\n  {\n    name: 'UserConfirmation',\n    source: 'common/sagas/user-confirmation.saga.js',\n    connectorName: 'default',\n  },\n]\n")),(0,i.kt)("p",null,"If a saga is split between two files, register it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"sagas: [\n  {\n    name: 'UserConfirmation',\n    source: 'common/sagas/user-confirmation.handlers.js',\n    sideEffects: 'common/sagas/user-confirmation.side-effects.js',\n    connectorName: 'default',\n  },\n]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"connectorName")," option defines a Read Model storage used to store the saga's persistent data."))}p.isMDXComponent=!0},5318:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(7378);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),g=s,f=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return t?n.createElement(f,r(r({ref:a},c),{},{components:t})):n.createElement(f,r({ref:a},c))}));function g(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=p;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var d=2;d<i;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);