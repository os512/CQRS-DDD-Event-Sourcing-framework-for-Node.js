"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3378],{3245:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7378);const n=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5433:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(2685),n=a(7378),l=a(362),o=a(6751),i=a(8944);const d="tabItem_WhCL";function p(e){var t,a,l,p=e.lazy,s=e.block,m=e.defaultValue,u=e.values,c=e.groupId,k=e.className,N=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=N[0])?void 0:l.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),y=b.tabGroupChoices,f=b.setTabGroupChoices,j=(0,n.useState)(h),w=j[0],C=j[1],T=[],R=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var S=y[c];null!=S&&S!==w&&v.some((function(e){return e.value===S}))&&C(S)}var M=function(e){var t=e.currentTarget,a=T.indexOf(t),r=v[a].value;r!==w&&(R(t),C(r),null!=c&&f(c,r))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;a=T[r]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;a=T[n]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},k)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:M,onClick:M},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),p?(0,n.cloneElement)(N.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function s(e){var t=(0,l.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},3193:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>m,toc:()=>u,default:()=>k});var r=a(2685),n=a(1244),l=(a(7378),a(5318)),o=a(5433),i=a(3245),d=["components"],p={id:"typescript-support",title:"TypeScript Support"},s=void 0,m={unversionedId:"typescript-support",id:"typescript-support",title:"TypeScript Support",description:"Overview",source:"@site/../docs/typescript-support.md",sourceDirName:".",slug:"/typescript-support",permalink:"/resolve/docs/typescript-support",tags:[],version:"current",frontMatter:{id:"typescript-support",title:"TypeScript Support"},sidebar:"docs",previous:{title:"reSolve App Structure",permalink:"/resolve/docs/app-structure"},next:{title:"Manage an Application",permalink:"/resolve/docs/manage-application"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Creating a TypeScript Application",id:"creating-a-typescript-application",children:[],level:2},{value:"Developing With reSolve Types",id:"developing-with-resolve-types",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Type Correspondence Tables",id:"type-correspondence-tables",children:[{value:"Write Side",id:"write-side",children:[],level:3},{value:"Read Side",id:"read-side",children:[{value:"Read Models",id:"read-models",children:[],level:4},{value:"View Models",id:"view-models",children:[],level:4},{value:"Saga",id:"saga",children:[],level:4}],level:3},{value:"Middleware",id:"middleware",children:[],level:3},{value:"API Handlers",id:"api-handlers",children:[],level:3},{value:"Monitoring",id:"monitoring",children:[],level:3}],level:2}],c={toc:u};function k(e){var t=e.components,a=(0,n.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"ReSolve is written in TypeScript and its packages export type declarations for all building blocks of a reSolve application.\nThis article describes how to develop a reSolve application with TypeScript and lists types that you need to use in the application code."),(0,l.kt)("h2",{id:"creating-a-typescript-application"},"Creating a TypeScript Application"),(0,l.kt)("p",null,"All ",(0,l.kt)("a",{parentName:"p",href:"/resolve/docs/#examples-and-template-projects"},"template and example projects")," are available both in JavaScript and TypeScript variations. When you use the ",(0,l.kt)("inlineCode",{parentName:"p"},"create-resolve-app")," tool, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"-t")," flag to the command input to specify that a TypeScript application should be created:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn create resolve-app hello-world-react -e react -t\n")),(0,l.kt)("h2",{id:"developing-with-resolve-types"},"Developing With reSolve Types"),(0,l.kt)("p",null,"When you develop a reSolve application with TypeScript, you need to assign correct types to all of the application's building blocks (",(0,l.kt)("a",{parentName:"p",href:"/resolve/docs/write-side"},"aggregates"),", ",(0,l.kt)("a",{parentName:"p",href:"/resolve/docs/read-side"},"read model projections and resolvers"),", ",(0,l.kt)("a",{parentName:"p",href:"/resolve/docs/sagas"},"sagas"),", and so on). Refer to the resources listed below for information on the type scheme that you should follow:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"#type-correspondence-tables"},"Type Correspondence Tables")," list the available types in a single document section."),(0,l.kt)("li",{parentName:"ul"},"All TypeScript ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/reimagined/resolve/tree/master/examples"},"example")," and ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/reimagined/resolve/tree/dev/templates"},"template")," projects are correctly typed and can be used for reference."),(0,l.kt)("li",{parentName:"ul"},"The API Reference articles contain information on the types associated with the described API members.")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"The code below demonstrates a correctly typed read model implementation:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"projection",label:"Projection",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { ReadModel } from '@resolve-js/core'\nimport { ResolveStore } from '@resolve-js/readmodel-base'\n...\n\nconst projection: ReadModel<ResolveStore> = {\n  Init: async (store) => {\n    await store.defineTable('ShoppingLists', {\n      indexes: {\n        id: 'string',\n      },\n      fields: ['createdAt', 'name'],\n    })\n  },\n\n  [SHOPPING_LIST_CREATED]: async (\n    store,\n    { aggregateId, timestamp, payload: { name } }\n  ) => {\n    const shoppingList = {\n      id: aggregateId,\n      name,\n      createdAt: timestamp,\n    }\n\n    await store.insert('ShoppingLists', shoppingList)\n  },\n  ...\n}\nexport default projection\n"))),(0,l.kt)(i.Z,{value:"resolvers",label:"Resolvers",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { ReadModelResolvers } from '@resolve-js/core'\nimport { ResolveStore } from '@resolve-js/readmodel-base'\n\nconst resolvers: ReadModelResolvers<ResolveStore> = {\n  all: async (store) => {\n    return await store.find('ShoppingLists', {}, null, { createdAt: 1 })\n  },\n}\n\nexport default resolvers\n")))),(0,l.kt)("p",null,"For more information on the types used in the above code sample, refer to the following API reference articles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/resolve/docs/api/read-model/projection"},(0,l.kt)("inlineCode",{parentName:"a"},"ReadModel"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/resolve/docs/api/read-model/resolver"},(0,l.kt)("inlineCode",{parentName:"a"},"ReadModelResolvers"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/resolve/docs/api/read-model/store"},(0,l.kt)("inlineCode",{parentName:"a"},"ResolveStore")))),(0,l.kt)("h2",{id:"type-correspondence-tables"},"Type Correspondence Tables"),(0,l.kt)("p",null,"The tables below list the available TypeScript types and the packages that export these types."),(0,l.kt)("h3",{id:"write-side"},"Write Side"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Object"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Package"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/aggregate/command-handler"},"Aggregate Command Handlers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Aggregate")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/aggregate/projection"},"Aggregate Projection")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AggregateProjection")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/command"},"Command")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Command")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/event"},"Event")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))))),(0,l.kt)("h3",{id:"read-side"},"Read Side"),(0,l.kt)("h4",{id:"read-models"},"Read Models"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Object"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Package"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/projection"},"Projection")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReadModel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/resolver"},"Resolvers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReadModelResolvers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/resolver"},"Resolver")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReadModelResolver")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/store"},"Store")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ResolveStore")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/readmodel-base"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/query#query-object"},"Query")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReadModelQuery")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/read-model/query#query-result"},"Query Result")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReadModelQueryResult")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))))),(0,l.kt)("h4",{id:"view-models"},"View Models"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Object"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Package"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/view-model/projection"},"View Model Projection")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ViewModelProjection")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/view-model/resolver"},"Read Model Resolvers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ViewModelResolver")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/view-model/query#query-object"},"Query")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ViewModelQuery")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/view-model/query#result-object"},"Query Result")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ViewModelQueryResult")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))))),(0,l.kt)("h4",{id:"saga"},"Saga"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Object"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Package"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/saga"},"Saga")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Saga")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))))),(0,l.kt)("h3",{id:"middleware"},"Middleware"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Object"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Package"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/middleware#command-middleware"},"Command Middleware")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CommandMiddleware")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/middleware#read-model-projection-middleware"},"Read Model Projection Middleware")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReadModelProjectionMiddleware")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/middleware#read-model-projection-middleware"},"Read Model Resolver Middleware")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReadModelResolverMiddleware")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))))),(0,l.kt)("h3",{id:"api-handlers"},"API Handlers"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Object"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Package"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/api-handler/#request"},"Request")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ResolveRequest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/runtime-base"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/api-handler/#response"},"Response")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ResolveResponse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/runtime-base"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/api-handler/resolve-context"},"Context")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UserBackendResolve")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/runtime-base"))))),(0,l.kt)("h3",{id:"monitoring"},"Monitoring"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Object"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Package"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/monitoring/metric#metric-object"},"Metric")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MonitoringMetric")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/monitoring/metric#custom-metric-object"},"Custom Metric")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MonitoringCustomMetric")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/monitoring/monitoring-adapter"},"Adapter")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MonitoringAdapter")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/resolve/docs/api/monitoring/"},"Monitoring Object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Monitoring")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@resolve-js/core"))))))}k.isMDXComponent=!0},5318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(k,o(o({ref:t},s),{},{components:a})):r.createElement(k,o({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);