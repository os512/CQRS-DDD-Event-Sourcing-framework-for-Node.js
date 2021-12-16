"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{7537:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(1244),n=a(7378),r=a(8944),i=a(5598),s=a(1191);const m="sidebar_drON",o="sidebarItemTitle_+zDs",c="sidebarItemList_L38e",d="sidebarItem_iLZw",g="sidebarItemLink_Y3HD",u="sidebarItemLinkActive_Ycqn";var p=a(7419);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var h=["sidebar","toc","children"];const E=function(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,l.Z)(e,h),o=t&&t.items.length>0;return n.createElement(i.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},7349:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(7378),n=a(8944),r=a(5318),i=a(7419),s=a(1191),m=a(1847),o=a(5430),c=a(8513),d=a(4391);const g="blogPostTitle_XRV4",u="blogPostData_cftJ",p="blogPostDetailsFull_GzFC";var v=a(3289);const h="image_dLSm";const E=function(e){var t=e.author,a=t.name,n=t.title,r=t.url,i=t.imageURL;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:h,src:i,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_qo3C";function N(e){var t=e.authors,a=e.assets;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return l.createElement("div",{className:(0,n.Z)("col col--6",b),key:t},l.createElement(E,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}const _=function(e){var t,a,h,E,b=(h=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,m.C)().withBaseUrl,f=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,L=e.truncated,C=e.isBlogPostPage,w=void 0!==C&&C,T=P.date,y=P.formattedDate,I=P.permalink,x=P.tags,H=P.readingTime,A=P.title,M=P.editUrl,B=P.authors,R=null!=(t=k.image)?t:Z.image,U=!w&&L,O=x.length>0;return l.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=w?"h1":"h2",l.createElement("header",null,l.createElement(E,{className:g,itemProp:"headline"},w?A:l.createElement(s.Z,{itemProp:"url",to:I},A)),l.createElement("div",{className:(0,n.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:T,itemProp:"datePublished"},y),void 0!==H&&l.createElement(l.Fragment,null," \xb7 ",b(H))),l.createElement(N,{authors:B,assets:k}))),R&&l.createElement("meta",{itemProp:"image",content:_(R,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:c.Z},f)),(O||L)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[p]=w,a))},O&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":U})},l.createElement(v.Z,{tags:x})),w&&M&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:M})),U&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":O})},l.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+A},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},211:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(7378),n=a(7165),r=a(7537),i=a(7349),s=a(7419),m=a(1191);const o=function(e){var t=e.nextItem,a=e.prevItem;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(5430),d=a(1193);const g=function(e){var t,a=e.content,s=e.sidebar,m=a.frontMatter,g=a.assets,u=a.metadata,p=u.title,v=u.description,h=u.nextItem,E=u.prevItem,b=u.date,N=u.tags,_=u.authors,f=m.hide_table_of_contents,Z=m.keywords,k=m.toc_min_heading_level,P=m.toc_max_heading_level,L=null!=(t=g.image)?t:m.image;return l.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:s,toc:!f&&a.toc&&a.toc.length>0?l.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},l.createElement(n.Z,{title:p,description:v,keywords:Z,image:L},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:b}),_.some((function(e){return e.url}))&&l.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),N.length>0&&l.createElement("meta",{property:"article:tag",content:N.map((function(e){return e.label})).join(",")})),l.createElement(i.Z,{frontMatter:m,assets:g,metadata:u,isBlogPostPage:!0},l.createElement(a,null)),(h||E)&&l.createElement(o,{nextItem:h,prevItem:E}))}},4391:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(7378),n=a(7419),r=a(2685),i=a(1244),s=a(8944);const m="iconEdit_glMr";var o=["className"];const c=function(e){var t=e.className,a=(0,i.Z)(e,o);return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var d=a(5430);function g(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},l.createElement(c,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1988:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(2685),n=a(1244),r=a(7378),i=a(5430),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var t=e.toc,a=e.className,l=e.linkClassName,n=e.isChild;return t.length?r.createElement("ul",{className:n?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(m,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,g=e.linkActiveClassName,u=void 0===g?void 0:g,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,n.Z)(e,s),E=(0,i.LU)(),b=null!=p?p:E.tableOfContents.minHeadingLevel,N=null!=v?v:E.tableOfContents.maxHeadingLevel,_=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:N}),f=(0,r.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:b,maxHeadingLevel:N}}),[d,u,b,N]);return(0,i.Si)(f),r.createElement(m,(0,l.Z)({toc:_,className:o,linkClassName:d},h))}},1193:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(2685),n=a(1244),r=a(7378),i=a(8944),s=a(1988);const m="tableOfContents_thVJ";var o=["className"];const c=function(e){var t=e.className,a=(0,n.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(m,"thin-scrollbar",t)},r.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3289:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(7378),n=a(8944),r=a(7419),i=a(1191);const s="tag_JoRF",m="tagRegular_BENv",o="tagWithCount_3p8+";const c=function(e){var t,a=e.permalink,r=e.name,c=e.count;return l.createElement(i.Z,{href:a,className:(0,n.Z)(s,(t={},t[m]=!c,t[o]=c,t))},r,c&&l.createElement("span",null,c))},d="tags_5N4j",g="tag_LKyA";function u(e){var t=e.tags;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(d,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return l.createElement("li",{key:a,className:g},l.createElement(c,{name:t,permalink:a}))}))))}}}]);