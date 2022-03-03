"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{7537:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(1244),n=a(7378),r=a(8944),i=a(9376),s=a(1191);const o="sidebar_k3AJ",m="sidebarItemTitle_KLf2",c="sidebarItemList_y0e6",d="sidebarItem_hZwW",g="sidebarItemLink_RCuc",u="sidebarItemLinkActive_wdkZ";var v=a(7419);function p(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var h=["sidebar","toc","children"];const b=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,l.Z)(e,h),m=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},7349:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(7378),n=a(8944),r=a(5318),i=a(7419),s=a(1191),o=a(1847),m=a(6751),c=a(2615),d=a(8629),g=a(4391);const u="blogPostTitle_wxyd",v="blogPostData_lXkG",p="blogPostDetailsFull_LFXV";var h=a(3289);const b="image_B1vt";const E=function(e){var t=e.author,a=t.name,n=t.title,r=t.url,i=t.imageURL;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:b,src:i,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},N="authorCol_wVxI",_="imageOnlyAuthorRow_azk4",f="imageOnlyAuthorCol_FeaY";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?_:"row")},t.map((function(e,t){var i;return l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?f:N),key:t},l.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}const k=function(e){var t,a,b,E=(b=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return b(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),N=(0,o.C)().withBaseUrl,_=e.children,f=e.frontMatter,k=e.assets,P=e.metadata,L=e.truncated,C=e.isBlogPostPage,w=void 0!==C&&C,y=P.date,T=P.formattedDate,I=P.permalink,x=P.tags,A=P.readingTime,H=P.title,M=P.editUrl,B=P.authors,O=null!=(t=k.image)?t:f.image,R=!w&&L,U=x.length>0,F=w?"h1":"h2";return l.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(F,{className:u,itemProp:"headline"},w?H:l.createElement(s.Z,{itemProp:"url",to:I},H)),l.createElement("div",{className:(0,n.Z)(v,"margin-vert--md")},l.createElement("time",{dateTime:y,itemProp:"datePublished"},T),void 0!==A&&l.createElement(l.Fragment,null," \xb7 ",E(A))),l.createElement(Z,{authors:B,assets:k})),O&&l.createElement("meta",{itemProp:"image",content:N(O,{absolute:!0})}),l.createElement("div",{id:w?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:d.Z},_)),(U||L)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[p]=w,a))},U&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":R})},l.createElement(h.Z,{tags:x})),w&&M&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:M})),R&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":U})},l.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+H},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},211:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(7378),n=a(7165),r=a(7537),i=a(7349),s=a(2685),o=a(7419),m=a(9982);const c=function(e){var t=e.nextItem,a=e.prevItem;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,(0,s.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,(0,s.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))};var d=a(6751),g=a(1193);const u=function(e){var t,a=e.content,s=e.sidebar,o=a.assets,m=a.metadata,u=m.title,v=m.description,p=m.nextItem,h=m.prevItem,b=m.date,E=m.tags,N=m.authors,_=m.frontMatter,f=_.hide_table_of_contents,Z=_.keywords,k=_.toc_min_heading_level,P=_.toc_max_heading_level,L=null!=(t=o.image)?t:_.image;return l.createElement(r.Z,{wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage,sidebar:s,toc:!f&&a.toc&&a.toc.length>0?l.createElement(g.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},l.createElement(n.Z,{title:u,description:v,keywords:Z,image:L},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:b}),N.some((function(e){return e.url}))&&l.createElement("meta",{property:"article:author",content:N.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&l.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),l.createElement(i.Z,{frontMatter:_,assets:o,metadata:m,isBlogPostPage:!0},l.createElement(a,null)),(p||h)&&l.createElement(c,{nextItem:p,prevItem:h}))}},4391:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(7378),n=a(7419),r=a(2685),i=a(1244),s=a(8944);const o="iconEdit_OMbO";var m=["className"];const c=function(e){var t=e.className,a=(0,i.Z)(e,m);return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var d=a(6751);function g(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},l.createElement(c,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9982:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7378),n=a(1191);const r=function(e){var t=e.permalink,a=e.title,r=e.subLabel;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},1988:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(2685),n=a(1244),r=a(7378),i=a(6751),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,l=e.linkClassName,n=e.isChild;return t.length?r.createElement("ul",{className:n?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,g=e.linkActiveClassName,u=void 0===g?void 0:g,v=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,n.Z)(e,s),b=(0,i.LU)(),E=null!=v?v:b.tableOfContents.minHeadingLevel,N=null!=p?p:b.tableOfContents.maxHeadingLevel,_=(0,i.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:N}),f=(0,r.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:E,maxHeadingLevel:N}}),[d,u,E,N]);return(0,i.Si)(f),r.createElement(o,(0,l.Z)({toc:_,className:m,linkClassName:d},h))}},1193:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(2685),n=a(1244),r=a(7378),i=a(8944),s=a(1988);const o="tableOfContents_jWtb";var m=["className"];const c=function(e){var t=e.className,a=(0,n.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},r.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3289:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(7378),n=a(8944),r=a(7419),i=a(1191);const s="tag_VWGF",o="tagRegular_sIPu",m="tagWithCount_YgKf";const c=function(e){var t,a=e.permalink,r=e.name,c=e.count;return l.createElement(i.Z,{href:a,className:(0,n.Z)(s,(t={},t[o]=!c,t[m]=c,t))},r,c&&l.createElement("span",null,c))},d="tags_WPdo",g="tag_XHyC";function u(e){var t=e.tags;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(d,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return l.createElement("li",{key:a,className:g},l.createElement(c,{name:t,permalink:a}))}))))}}}]);