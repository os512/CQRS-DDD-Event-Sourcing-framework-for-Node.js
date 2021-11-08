"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8794],{4142:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(1244),o=t(7378),i=t(1896),a=t(353),u=t(5626),c=t(161),s=(0,o.createContext)({collectLink:function(){}}),l=t(8948),f=t(1721),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var n,t,v=e.isNavLink,g=e.to,m=e.href,p=e.activeClassName,h=e.isActive,b=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,E=(0,r.Z)(e,d),L=(0,a.Z)().siteConfig,P=L.trailingSlash,C=L.baseUrl,S=(0,l.C)().withBaseUrl,k=(0,o.useContext)(s),A=g||m,D=(0,u.Z)(A),x=null==A?void 0:A.replace("pathname://",""),R=void 0!==x?(t=x,y&&function(e){return e.startsWith("/")}(t)?S(t):t):void 0;R&&D&&(R=(0,f.applyTrailingSlash)(R,{trailingSlash:P,baseUrl:C}));var O,M=(0,o.useRef)(!1),V=v?i.OL:i.rU,I=c.default.canUseIntersectionObserver;(0,o.useEffect)((function(){return!I&&D&&null!=R&&window.docusaurus.prefetch(R),function(){I&&O&&O.disconnect()}}),[R,I,D]);var _=null!==(n=null==R?void 0:R.startsWith("#"))&&void 0!==n&&n,T=!R||!D||_;return R&&D&&!_&&!b&&k.collectLink(R),T?o.createElement("a",Object.assign({href:R},A&&!D&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(V,Object.assign({},E,{onMouseEnter:function(){M.current||null==R||(window.docusaurus.preload(R),M.current=!0)},innerRef:function(e){var n,t;I&&e&&D&&(n=e,t=function(){null!=R&&window.docusaurus.prefetch(R)},(O=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(n),O.disconnect(),t())}))}))).observe(n))},to:R||""},v&&{isActive:h,activeClassName:p}))}},1787:(e,n,t)=>{t.d(n,{Z:()=>l,I:()=>s});var r=t(7378),o=/{\w+}/g,i="{}";function a(e,n){var t=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==n?void 0:n[o];if(void 0!==a){var u=r.isValidElement(a)?a:String(a);return t.push(u),i}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?a.split(i).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var u=t(7529);function c(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=u[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function s(e,n){return a(c({message:e.message,id:e.id}),n)}function l(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return a(c({message:n,id:t}),r)}},5626:(e,n,t)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>o})},8613:(e,n,t)=>{t.r(n),t.d(n,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=t(1896)},8948:(e,n,t)=>{t.d(n,{C:()=>i,Z:()=>a});var r=t(353),o=t(5626);function i(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(u)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(i,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},1869:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o,useAllPluginInstancesData:()=>i,usePluginData:()=>a});var r=t(353);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var n=o()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function a(e,n){void 0===n&&(n="default");var t=i(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},6457:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7378),o=t(1260);function i(){return(0,r.useContext)(o._)}},9686:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(8613);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return i};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,i,a=(0,n.getActiveVersion)(e,t),u=null==a?void 0:a.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:u,alternateDocVersions:u?(o=u.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(i[e.name]=n)}))})),i):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},2720:(e,n,t)=>{n.Jo=n.Iw=n.zu=n.yW=n.gB=n.WS=n.gA=n.zh=n._r=void 0;var r=t(2217),o=t(8613),i=(0,r.__importStar)(t(1869)),a=t(9686),u={};n._r=function(){var e;return null!==(e=(0,i.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:u};n.zh=function(e){return(0,i.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,a.getActivePlugin)(t,r,e)};n.WS=function(e){void 0===e&&(e={});var t=(0,n.gA)(e),r=(0,o.useLocation)().pathname;if(t)return{activePlugin:t,activeVersion:(0,a.getActiveVersion)(t.pluginData,r)}};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,a.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,a.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,a.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,a.getDocVersionSuggestions)(t,r)}},1956:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(7378),o=t(5361),i=t(9953),a=t(8948);function u(e){var n=e.title,t=e.description,u=e.keywords,c=e.image,s=e.children,l=(0,i.pe)(n),f=(0,a.C)().withBaseUrl,d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,n&&r.createElement("title",null,l),n&&r.createElement("meta",{property:"og:title",content:l}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),u&&r.createElement("meta",{name:"keywords",content:Array.isArray(u)?u.join(","):u}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},6889:(e,n,t)=>{t.d(n,{Iw:()=>r.Iw,gA:()=>r.gA,WS:()=>r.WS,zu:()=>r.zu,_r:()=>r._r,Jo:()=>r.Jo,zh:()=>r.zh,yW:()=>r.yW,gB:()=>r.gB});var r=t(2720)},8245:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(7378),o=t(161),i="desktop",a="mobile",u="ssr";function c(){return o.default.canUseDOM?window.innerWidth>996?i:a:u}const s=function(){var e=(0,r.useState)((function(){return c()})),n=e[0],t=e[1];return(0,r.useEffect)((function(){function e(){t(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),n}},9953:(e,n,t)=>{t.d(n,{pl:()=>be,zF:()=>H,HX:()=>m,PO:()=>G,L5:()=>ue,Cv:()=>ne,Cn:()=>Q,OC:()=>xe,kM:()=>de,WA:()=>s,os:()=>p,Mg:()=>w,_f:()=>l,bc:()=>g,l5:()=>d,nT:()=>we,uR:()=>V,J:()=>le,Oh:()=>fe,Rb:()=>Ee,be:()=>ye,SL:()=>D,g8:()=>ee,c2:()=>k,D9:()=>A,RF:()=>Me,DA:()=>Ae,Si:()=>Se,LU:()=>o,pe:()=>y});var r=t(353);function o(){return(0,r.Z)().siteConfig.themeConfig}var i="localStorage";function a(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),u=!0),null}var n}var u=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=a(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function l(e){void 0===e&&(e=i);var n=a(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(4981);function d(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,i=e.i18n,a=i.defaultLocale,u=i.currentLocale,c=(0,f.TH)().pathname,s=u===a?t:t.replace("/"+u+"/","/"),l=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===a?""+s:""+s+e+"/"}(n)+l}}}var v=/title=(["'])(.*?)\1/;function g(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var m="default";function p(e,n){return"docs-"+e+"-"+n}var h=t(6889),b=!!h._r,w=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},y=function(e){var n=(0,r.Z)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},E=t(7378),L=["zero","one","two","few","many","other"];function P(e){return L.filter((function(n){return e.includes(n)}))}var C={locale:"en",pluralForms:P(["one","other"]),select:function(e){return 1===e?"one":"other"}};function S(){var e=(0,r.Z)().i18n.currentLocale;return(0,E.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),C;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:P(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),C}var n,t}),[e])}function k(){var e=S();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),i=t.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(t,n,e)}}}function A(e){var n=(0,E.useRef)();return(0,E.useEffect)((function(){n.current=e})),n.current}function D(e){var n=(0,f.TH)(),t=A(n);(0,E.useEffect)((function(){e({location:n,previousLocation:t})}),[n])}var x=t(1244),R=t(161),O=["collapsed"],M=["lazy"];function V(e){var n=e.initialState,t=(0,E.useState)(null!=n&&n),r=t[0],o=t[1],i=(0,E.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:i}}var I={display:"none",overflow:"hidden",height:"0px"},_={display:"block",overflow:"visible",height:"auto"};function T(e,n){var t=n?I:_;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function N(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,E.useRef)(!1);(0,E.useEffect)((function(){var e,i=n.current;function a(){var e,n,t=i.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function u(){var e=a();i.style.transition=e.transition,i.style.height=e.height}if(!o.current)return T(i,t),void(o.current=!0);return i.style.willChange="height",e=requestAnimationFrame((function(){t?(u(),requestAnimationFrame((function(){i.style.height=I.height,i.style.overflow=I.overflow}))):(i.style.display="block",requestAnimationFrame((function(){u()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function B(e){if(!R.default.canUseDOM)return e?I:_}function U(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,i=e.animation,a=e.onCollapseTransitionEnd,u=e.className,c=e.disableSSRStyle,s=(0,E.useRef)(null);return N({collapsibleRef:s,collapsed:r,animation:i}),E.createElement(t,{ref:s,style:c?void 0:B(r),onTransitionEnd:function(e){"height"===e.propertyName&&(T(s.current,r),null==a||a(r))},className:u},o)}function j(e){var n=e.collapsed,t=(0,x.Z)(e,O),r=(0,E.useState)(!n),o=r[0],i=r[1];(0,E.useLayoutEffect)((function(){n||i(!0)}),[n]);var a=(0,E.useState)(n),u=a[0],c=a[1];return(0,E.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?E.createElement(U,Object.assign({},t,{collapsed:u})):null}function H(e){var n=e.lazy,t=(0,x.Z)(e,M),r=n?j:U;return E.createElement(r,Object.assign({},t))}var Z=t(6457),z=t(8944);const F="details_7wHz",W="isBrowser_1sIc",q="collapsibleContent_30_r";var J=["summary","children"];function X(e){return!!e&&("SUMMARY"===e.tagName||X(e.parentElement))}function Y(e,n){return!!e&&(e===n||Y(e.parentElement,n))}const G=function(e){var n,t=e.summary,r=e.children,o=(0,x.Z)(e,J),i=(0,Z.Z)(),a=(0,E.useRef)(null),u=V({initialState:!o.open}),c=u.collapsed,s=u.setCollapsed,l=(0,E.useState)(o.open),f=l[0],d=l[1];return E.createElement("details",Object.assign({},o,{ref:a,open:f,"data-collapsed":c,className:(0,z.Z)(F,(n={},n[W]=i,n),o.className),onMouseDown:function(e){X(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;X(n)&&Y(n,a.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t,E.createElement(H,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),d(!e)}},E.createElement("div",{className:q},r)))};var K=(0,E.createContext)(null);function Q(e){var n=e.children;return E.createElement(K.Provider,{value:(0,E.useState)(null)},n)}function $(){var e=(0,E.useContext)(K);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function ee(){var e=$()[0];if(e){var n=e.component;return function(t){return E.createElement(n,Object.assign({},e.props,t))}}return function(){}}function ne(e){var n,t=e.component,r=e.props,o=$()[1],i=(n=r,(0,E.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,E.useEffect)((function(){o({component:t,props:i})}),[o,t,i]),(0,E.useEffect)((function(){return function(){return o(null)}}),[o]),null}var te=function(e){return"docs-preferred-version-"+e};const re={save:function(e,n,t){s(te(e),{persistence:n}).set(t)},read:function(e,n){return s(te(e),{persistence:n}).get()},clear:function(e,n){s(te(e),{persistence:n}).del()}};function oe(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=re.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(re.clear(e,t),{preferredVersionName:null})}(e)})),o}function ie(){var e=(0,h._r)(),n=o().docs.versionPersistence,t=(0,E.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,E.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),i=r[0],a=r[1];return(0,E.useEffect)((function(){a(oe({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[i,(0,E.useMemo)((function(){return{savePreferredVersion:function(e,t){re.save(e,n,t),a((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[a])]}var ae=(0,E.createContext)(null);function ue(e){var n=e.children;return b?E.createElement(ce,null,n):E.createElement(E.Fragment,null,n)}function ce(e){var n=e.children,t=ie();return E.createElement(ae.Provider,{value:t},n)}function se(){var e=(0,E.useContext)(ae);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}function le(e){void 0===e&&(e="default");var n=(0,h.zh)(e),t=se(),r=t[0],o=t[1],i=r[e].preferredVersionName;return{preferredVersion:i?n.versions.find((function(e){return e.name===i})):null,savePreferredVersionName:(0,E.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o])}}function fe(){var e=(0,h._r)(),n=se()[0];var t=Object.keys(e),r={};return t.forEach((function(t){r[t]=function(t){var r=e[t],o=n[t].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(t)})),r}var de={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},ve=s("docusaurus.announcement.dismiss"),ge=s("docusaurus.announcement.id"),me=function(){return"true"===ve.get()},pe=function(e){return ve.set(String(e))},he=(0,E.createContext)(null),be=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,Z.Z)(),t=(0,E.useState)((function(){return!!n&&me()})),r=t[0],i=t[1];(0,E.useEffect)((function(){i(me())}),[]);var a=(0,E.useCallback)((function(){pe(!0),i(!0)}),[]);return(0,E.useEffect)((function(){if(e){var n=e.id,t=ge.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;ge.set(n),r&&pe(!1),!r&&me()||i(!1)}}),[]),(0,E.useMemo)((function(){return{isActive:!!e&&!r,close:a}}),[r])}();return E.createElement(he.Provider,{value:t},n)},we=function(){var e=(0,E.useContext)(he);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function ye(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}t(1787);function Ee(e){!function(e){var n=(0,f.k6)().block,t=(0,E.useRef)(e);(0,E.useEffect)((function(){t.current=e}),[e]),(0,E.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function Le(e){var n=e.getBoundingClientRect();return n.top===n.bottom?Le(e.parentNode):n}function Pe(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return Le(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Le(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function Ce(){var e=(0,E.useRef)(0),n=o().navbar.hideOnScroll;return(0,E.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}const Se=function(e){var n=(0,E.useRef)(void 0),t=Ce();(0,E.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,i=e.minHeadingLevel,a=e.maxHeadingLevel;function u(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),u=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),c=Pe(u,{anchorTopOffset:t.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",u),document.addEventListener("resize",u),u(),function(){document.removeEventListener("scroll",u),document.removeEventListener("resize",u)}}),[e,t])};function ke(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=ke({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function Ae(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,E.useMemo)((function(){return ke({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var De=(0,E.createContext)(void 0);function xe(e){var n,t=e.children;return E.createElement(De.Provider,{value:(n=(0,E.useRef)(!0),(0,E.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function Re(){var e=(0,E.useContext)(De);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var Oe=function(){return R.default.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function Me(e,n){void 0===n&&(n=[]);var t=Re().scrollEventsEnabledRef,r=(0,E.useRef)(Oe()),o=function(){if(t.current){var n=Oe();e&&e(n,r.current),r.current=n}};(0,E.useEffect)((function(){var e={passive:!0};return o(),window.addEventListener("scroll",o,e),function(){return window.removeEventListener("scroll",o,e)}}),n)}},2520:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,i=e.split(/[#?]/)[0],a="/"===i||i===r?i:(o=i,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,a)}},1721:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(2520);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=t(9219);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9219:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},8944:(e,n,t)=>{function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:()=>o})}}]);