"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{6540:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var n=a(7378),l=a(8944),s=a(2685),i=a(7419),r=a(9982);const o=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(r.Z,(0,s.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(r.Z,(0,s.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))};var c=a(9939),d=a(1191),m=a(8949),u=a(6751);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,s=e.versionMetadata,i=(0,c.Z)().siteConfig.title,r=(0,m.useActivePlugin)({failfast:!0}).pluginId,o=(0,u.J)(r).savePreferredVersionName,d=(0,m.useDocVersionSuggestions)(r),v=d.latestDocSuggestion,p=d.latestVersionSuggestion,b=null!=v?v:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:i,versionMetadata:s})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:b.path,onClick:function(){return o(p.name)}})))}function b(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function E(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var f=a(7165);function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function Z(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(Z,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(4391),_=a(3289);const C="lastUpdated_vA0S";function U(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_.Z,e)))}function T(e){var t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",C)},(a||s)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function y(e){var t=e.content.metadata,a=t.editUrl,s=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,r=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||s||r);return c||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(U,{tags:o}),d&&n.createElement(T,{editUrl:a,lastUpdatedAt:s,lastUpdatedBy:r,formattedLastUpdatedAt:i})):null}var A=a(1193);const w="tocCollapsible_aX8Q",M="tocCollapsibleButton_Va7b",H="tocCollapsibleContent_EOAA",x="tocCollapsibleExpanded_mrpG";var B=a(1988);function V(e){var t,a=e.toc,s=e.className,r=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),d=c.collapsed,m=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(w,(t={},t[x]=!d,t),s)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",M),onClick:m},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:H,collapsed:d},n.createElement(B.Z,{toc:a,minHeadingLevel:r,maxHeadingLevel:o})))}var S=a(4900);const D="docItemContainer_yJzi",O="docItemCol_ygLL",I="tocMobile_By44";function F(e){var t,a=e.content,s=a.metadata,i=a.frontMatter,r=i.image,c=i.keywords,d=i.hide_title,m=i.hide_table_of_contents,v=i.toc_min_heading_level,g=i.toc_max_heading_level,h=s.description,p=s.title,N=!d&&void 0===a.contentTitle,Z=(0,u.iP)(),k=!m&&a.toc&&a.toc.length>0,L=k&&("desktop"===Z||"ssr"===Z);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:p,description:h,keywords:c,image:r}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[O]=!m,t))},n.createElement(b,null),n.createElement("div",{className:D},n.createElement("article",null,n.createElement(E,null),k&&n.createElement(V,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:g,className:(0,l.Z)(u.kM.docs.docTocMobile,I)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement("header",null,n.createElement(S.Z,{as:"h1"},p)),n.createElement(a,null)),n.createElement(y,e)),n.createElement(o,{previous:s.previous,next:s.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(A.Z,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:g,className:u.kM.docs.docTocDesktop}))))}},4391:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7378),l=a(7419),s=a(2685),i=a(1244),r=a(8944);const o="iconEdit_OMbO";var c=["className"];const d=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var m=a(6751);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4900:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(2685),l=a(1244),s=a(7378),i=a(8944),r=a(7419),o=a(6751);const c="anchorWithStickyNavbar_YDjN",d="anchorWithHideOnScrollNavbar_c5FC";var m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?s.createElement(a,(0,n.Z)({},v,{className:(0,i.Z)("anchor",(t={},t[d]=g,t[c]=!g,t)),id:u}),v.children,s.createElement("a",{className:"hash-link",href:"#"+u,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):s.createElement(a,v)}function g(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?s.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):s.createElement(v,(0,n.Z)({as:t},a))}},9982:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7378),l=a(1191);const s=function(e){var t=e.permalink,a=e.title,s=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},1988:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(2685),l=a(1244),s=a(7378),i=a(6751),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?s.createElement("ul",{className:l?void 0:a},t.map((function(e){return s.createElement("li",{key:e.id},s.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),s.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,h=e.maxHeadingLevel,p=(0,l.Z)(e,r),b=(0,i.LU)(),E=null!=g?g:b.tableOfContents.minHeadingLevel,f=null!=h?h:b.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),Z=(0,s.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:E,maxHeadingLevel:f}}),[m,v,E,f]);return(0,i.Si)(Z),s.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},p))}},1193:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(2685),l=a(1244),s=a(7378),i=a(8944),r=a(1988);const o="tableOfContents_jWtb";var c=["className"];const d=function(e){var t=e.className,a=(0,l.Z)(e,c);return s.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},s.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3289:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7378),l=a(8944),s=a(7419),i=a(1191);const r="tag_VWGF",o="tagRegular_sIPu",c="tagWithCount_YgKf";const d=function(e){var t,a=e.permalink,s=e.name,d=e.count;return n.createElement(i.Z,{href:a,className:(0,l.Z)(r,(t={},t[o]=!d,t[c]=d,t))},s,d&&n.createElement("span",null,d))},m="tags_WPdo",u="tag_XHyC";function v(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u},n.createElement(d,{name:t,permalink:a}))}))))}}}]);