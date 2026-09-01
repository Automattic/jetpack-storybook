import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,o as i,t as a}from"./build-module-DyKOxfM8.js";import{n as o,t as s}from"./clsx-SUvPW2lx.js";import{t as c}from"./jsx-runtime-D2pHJD-r.js";import{Xc as l,el as u,il as d,t as f}from"./build-module-CR6EsQjA.js";import{Tn as p,l as m,r as ee,t as h}from"./src-DUEinqsR.js";import{i as te,t as g}from"./use-paginated-view-XxTmpdyO.js";function _(e){return e?.toString()}function ne(e,t,n){let r=e.map(e=>({item:e,id:t(e)})),i=new Map(r.map(e=>[e.id,e])),a=[],o=new Map;for(let e of r){let t=_(n(e.item)),r=t&&t!==e.id?i.get(t):void 0;if(!r){a.push(e);continue}let s=o.get(r.id)??[];s.push(e),o.set(r.id,s)}let s=[],c=new Map,l=new Set,u=(e,t)=>{for(let n of e)l.has(n)||(l.add(n),c.set(n.id,t),s.push(n.item),u(o.get(n.id)??[],t+1))};u(a,0);for(let e of r)l.has(e)||u([e],0);return{data:s,levelById:c}}function re(e,t,n,r){let i=new Map(e.map(e=>[n(e),e])),a=new Set(t);for(let e of t){let t=i.get(e);for(;t;){let e=_(r(t));if(!e||e===n(t)||a.has(e))break;let o=i.get(e);if(!o)break;a.add(e),t=o}}let o=new Map;for(let t of e){let e=n(t),i=_(r(t));if(!i||i===e)continue;let a=o.get(i)??[];a.push(e),o.set(i,a)}let s=[...t],c=new Set;for(;s.length;){let e=s.pop();if(!c.has(e)){c.add(e);for(let t of o.get(e)??[])a.add(t),s.push(t)}}return e.filter(e=>a.has(n(e)))}var v=t((()=>{}));function ie(e,t,n,r){let i=[],a=null;for(let o of e){let e=t(o),s=n.get(e)??0;a!==null&&s>a||(a=r(e)?null:s,i.push(o))}return i}function ae(e,t,n){let r=new Set(e.map(t)),i=new Set;for(let a of e){let e=_(n(a));e!==void 0&&e!==t(a)&&r.has(e)&&i.add(e)}return i}function oe(e,t,n,r){let i=new Map(e.map(e=>[n(e),e])),a=new Set;for(let e of t){let t=i.get(e);for(;t;){let e=_(r(t));if(!e||e===n(t)||a.has(e))break;let o=i.get(e);if(!o)break;a.add(e),t=o}}return a}var y=t((()=>{v()})),b,x,S,C,w=t((()=>{b=`_root_1rqls_2`,x=`_hideLevelMarkers_1rqls_2470`,S=`_titleCell_1rqls_2475`,C={root:b,hideLevelMarkers:x,titleCell:S,"dataviews-pulse":`_dataviews-pulse_1rqls_1`,"dataviews-validated-control__indicator-jump":`_dataviews-validated-control__indicator-jump_1rqls_1`}})),T,E,D=t((()=>{T=`_slot_1ejv0_2`,E={slot:T}}));function se({label:e,expanded:t,disabled:n=!1,onToggle:r}){if(!r)return(0,O.jsx)(`span`,{className:E.slot,"aria-hidden":`true`});let a=i()?u:l;return(0,O.jsx)(p,{className:E.slot,variant:`minimal`,tone:`neutral`,size:`small`,"aria-label":e,"aria-expanded":t,disabled:n,onClick:n?void 0:r,children:(0,O.jsx)(p.Icon,{icon:t?d:a,size:16})})}var O,ce=t((()=>{h(),a(),f(),D(),O=c()}));function le(e){let t=(0,k.useContext)(M);if(!t)throw Error(`CollapsibleTitleCell must be rendered within CollapseContext.`);let{titleField:n,getItemId:i}=t,a=i(e.item),o=e.field.getValue({item:e.item}),s=n?.render;return(0,A.jsxs)(`span`,{className:C.titleCell,children:[(0,A.jsx)(se,{label:o?String(o):r(`Toggle group`,`jetpack-premium-analytics-pkg`),expanded:t.isExpanded(a),disabled:t.forcedIds.has(a),onToggle:t.parentIds.has(a)?()=>t.onToggle(a):void 0}),s?(0,A.jsx)(s,{...e}):String(o??``)]})}function ue({data:e,fields:t,getItemId:n,getItemParentId:r,initialView:i,hideLevelMarkers:a=!1,collapsible:o=!1,defaultExpanded:c=`all`,isLoading:l=!1,searchLabel:u,empty:d,perPageSizes:f=de}){let[p,m]=(0,k.useState)(()=>{let{fields:e,...n}=i??{},[r,...a]=e??t.map(e=>e.id);return{page:1,perPage:f[0]??10,search:``,...n,type:`table`,showLevels:!0,titleField:r,fields:a}}),[h,g]=(0,k.useState)(()=>new Set),_=c!==`none`,{effectiveView:v,pageData:y,levelById:b,paginationInfo:x,parentIds:S,forcedIds:w,isExpanded:T}=(0,k.useMemo)(()=>{let i=ee(e,{...p,sort:void 0,page:1,perPage:Math.max(e.length,1)},t).data,a=new Set(i.map(n)),s=re(e,a,n,r),c=ee(s,{...p,search:``,filters:[],page:1,perPage:Math.max(s.length,1)},t).data,{data:l,levelById:u}=ne(c,n,r),d=i.length!==e.length,f=o&&d?oe(l,a,n,r):j,m=e=>_!==h.has(e)||f.has(e),g=o?ie(l,n,u,m):l,v=o?ae(l,n,r):j,y=p.perPage??10,b=Math.max(1,Math.ceil(g.length/y)),x=te(p.page??1,b),S=(x-1)*y;return{effectiveView:x===(p.page??1)?p:{...p,page:x},pageData:g.slice(S,S+y),levelById:u,paginationInfo:{totalItems:g.length,totalPages:b},parentIds:v,forcedIds:f,isExpanded:m}},[e,p,t,n,r,o,_,h]),E=(0,k.useCallback)(e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),D=(0,k.useMemo)(()=>t.find(e=>e.id===p.titleField),[t,p.titleField]),se=(0,k.useMemo)(()=>({isExpanded:T,parentIds:S,forcedIds:w,onToggle:E,titleField:D,getItemId:n}),[T,S,w,E,D,n]),O=(0,k.useMemo)(()=>o?t.map(e=>e.id===p.titleField?{...e,render:le}:e):t,[o,t,p.titleField]),ce=(0,k.useCallback)(e=>b.get(n(e))??0,[b,n]),ue=(0,k.useCallback)(e=>m({...e,showLevels:!0}),[]);return(0,k.useEffect)(()=>{v!==p&&m(v)},[v,p]),(0,A.jsx)(M.Provider,{value:se,children:(0,A.jsx)(`div`,{className:s(C.root,a&&C.hideLevelMarkers),children:(0,A.jsx)(N,{view:v,onChangeView:ue,fields:O,data:y,getItemId:n,getItemLevel:ce,isLoading:l,paginationInfo:x,defaultLayouts:{table:{}},empty:d,searchLabel:u,config:{perPageSizes:f}})})})}var k,A,de,j,M,N,fe=t((()=>{h(),a(),o(),k=e(n(),1),g(),y(),w(),ce(),v(),A=c(),de=[10,25,50,100],j=new Set,M=(0,k.createContext)(null),N=m}));function pe(){let e=[];for(let t=1;t<=12;t++){let n=`referrer-${String(t).padStart(2,`0`)}`,r=`Referrer ${String(t).padStart(2,`0`)}`;if(e.push({id:n,referrer:r,views:(13-t)*10}),t===1)for(let t=1;t<=15;t++)e.push({id:`${n}-source-${String(t).padStart(2,`0`)}`,parentId:n,referrer:`${r} / Source ${String(t).padStart(2,`0`)}`,views:16-t})}return e}function me({item:e}){let t=Te.has(e.id)?(0,P.jsx)(`strong`,{children:e.referrer}):(0,P.jsx)(P.Fragment,{children:e.referrer});return e.href?(0,P.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:t}):t}function he({item:e}){let t=Ee.has(e.id)?(0,P.jsx)(`strong`,{children:e.title}):(0,P.jsx)(P.Fragment,{children:e.title});return e.href?(0,P.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:t}):t}function ge(e){return new Date(e).toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})}function _e({item:e}){return e.date?(0,P.jsx)(P.Fragment,{children:ge(e.date)}):(0,P.jsx)(P.Fragment,{})}function ve({item:e}){return(0,P.jsx)(P.Fragment,{children:e.views.toLocaleString()})}function ye({item:e}){return(0,P.jsx)(P.Fragment,{children:e.views.toLocaleString()})}function be(e){return e.id}function xe(e){return e.parentId}function Se(e){return e.id}function Ce(e){return e.parentId}var P,F,I,L,we,Te,Ee,De,R,Oe,z,B,V,ke,Ae,je,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{fe(),P=c(),F=[{id:`search`,referrer:`Search Engines`,medium:`organic`,views:625},{id:`google`,parentId:`search`,referrer:`Google`,date:`2026-06-30`,href:`https://google.com`,views:485},{id:`google-search`,parentId:`google`,referrer:`Google Search`,date:`2026-06-30`,href:`https://google.com/search`,views:420},{id:`google-images`,parentId:`google`,referrer:`Google Images`,date:`2026-06-30`,href:`https://images.google.com`,views:65},{id:`bing`,parentId:`search`,referrer:`Bing`,date:`2026-06-29`,href:`https://bing.com`,views:86},{id:`duckduckgo`,parentId:`search`,referrer:`DuckDuckGo`,date:`2026-06-28`,href:`https://duckduckgo.com`,views:39},{id:`yahoo`,parentId:`search`,referrer:`Yahoo`,date:`2026-06-27`,href:`https://yahoo.com`,views:14},{id:`social`,referrer:`Social`,medium:`social`,views:345},{id:`facebook`,parentId:`social`,referrer:`Facebook`,date:`2026-06-26`,href:`https://facebook.com`,views:210},{id:`x`,parentId:`social`,referrer:`X`,date:`2026-06-25`,href:`https://x.com`,views:135},{id:`direct`,referrer:`Direct`,medium:`direct`,views:251}],I=[{id:`tags`,title:`Tags (44)`,views:44},{id:`tag-performance`,parentId:`tags`,title:`/tag/performance`,href:`https://example.com/tag/performance`,views:18},{id:`tag-analytics`,parentId:`tags`,title:`/tag/analytics`,href:`https://example.com/tag/analytics`,views:12},{id:`tag-jetpack`,parentId:`tags`,title:`/tag/jetpack`,href:`https://example.com/tag/jetpack`,views:8},{id:`tag-wordpress`,parentId:`tags`,title:`/tag/wordpress`,href:`https://example.com/tag/wordpress`,views:6},{id:`categories`,title:`Categories (33)`,views:33},{id:`category-news`,parentId:`categories`,title:`/category/news`,href:`https://example.com/category/news`,views:21},{id:`category-reviews`,parentId:`categories`,title:`/category/reviews`,href:`https://example.com/category/reviews`,views:12},{id:`dates`,title:`Dates (7)`,views:7},{id:`date-2026-06`,parentId:`dates`,title:`/2026/06`,href:`https://example.com/2026/06`,views:4},{id:`date-2026-05`,parentId:`dates`,title:`/2026/05`,href:`https://example.com/2026/05`,views:3}],L=pe(),we=[{value:`organic`,label:`Organic`},{value:`social`,label:`Social`},{value:`direct`,label:`Direct`}],Te=new Set([...F,...L].map(e=>e.parentId).filter(Boolean)),Ee=new Set(I.map(e=>e.parentId).filter(Boolean)),De=[{id:`referrer`,label:`Referrer`,enableGlobalSearch:!0,render:me},{id:`date`,label:`Date`,render:_e},{id:`views`,label:`Views`,render:ve},{id:`medium`,label:`Medium`,elements:we,filterBy:{operators:[`isAny`]}}],R={referrer:{width:`100%`},date:{align:`end`},views:{align:`end`}},Oe={title:{width:`100%`},views:{align:`end`}},z={fields:[`referrer`,`views`],layout:{styles:R}},B={fields:[`referrer`,`date`,`views`],layout:{styles:R}},V={sort:{field:`views`,direction:`desc`},fields:[`referrer`,`views`],layout:{styles:R}},ke={fields:[`title`,`views`],layout:{styles:Oe}},Ae=[{id:`title`,label:`Title`,enableGlobalSearch:!0,render:he},{id:`views`,label:`Views`,render:ye}],je={title:`Packages/Premium Analytics/UI/DataViewsDrilldownNative`,component:ue,tags:[`autodocs`],argTypes:{hideLevelMarkers:{control:`boolean`}},args:{hideLevelMarkers:!1}},H={args:{data:F,fields:De,getItemId:be,getItemParentId:xe,initialView:z},parameters:{docs:{description:{story:"DataViews' native hierarchy rendering: `view.showLevels` plus `getItemLevel`, with levels drawn as em-dash markers on the title field. Search and filter keep matches under their ancestors, and sort orders within each level. The hidden Medium field is filterable so the default DataViews filter control appears next to search."}}}},U={args:{...H.args,hideLevelMarkers:!0},parameters:{docs:{description:{story:`The one-line CSS override the native rendering leaves room for: the em-dash marker span is hidden but keeps its layout box, so rows indent by depth with plain whitespace.`}}}},W={args:{...H.args,initialView:B}},G={args:{...H.args,initialView:{...z,search:`Google`}},parameters:{docs:{description:{story:`Search keeps matches under their ancestors instead of orphaning them: searching "Google" surfaces Google, Google Search, and Google Images, still nested under Search Engines. Clear the search to see the full tree.`}}}},K={args:{...H.args,initialView:V},parameters:{docs:{description:{story:`Sorting orders within each level, not globally: top-level rows sort against each other and children sort within their parent, so the tree stays intact. Sorted by Views (desc) here.`}}}},q={args:{...H.args,isLoading:!0}},J={args:{...H.args,data:[],empty:(0,P.jsx)(`div`,{children:`No referrers found.`})}},Y={args:{data:I,fields:Ae,getItemId:Se,getItemParentId:Ce,initialView:ke}},X={args:{...H.args,data:L,hideLevelMarkers:!0},parameters:{docs:{description:{story:`Pagination counts every row and slices the hierarchy-ordered list. Until the parent-on-page-boundary refinement lands, a deep subtree can still span pages (its child rows appear on the next page without their parent).`}}}},Z={args:{...H.args,collapsible:!0,hideLevelMarkers:!0},parameters:{docs:{description:{story:`The local collapse layer over the static native rendering: rows with children get a chevron, and folding one drops its whole subtree from the table — including from the pagination count. Sits behind a prop so it can be dropped once core ships native collapse (WordPress/gutenberg#80360).`}}}},Q={args:{...Z.args,defaultExpanded:`none`},parameters:{docs:{description:{story:`Opening on the top level only, for a report whose groups are long. Searching still answers: the matches’ ancestors unfold for as long as the search is on, then fold back when it clears.`}}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    data: rows,
    fields,
    getItemId,
    getItemParentId,
    initialView
  },
  parameters: {
    docs: {
      description: {
        story: "DataViews' native hierarchy rendering: \`view.showLevels\` plus \`getItemLevel\`, with levels drawn as em-dash markers on the title field. Search and filter keep matches under their ancestors, and sort orders within each level. The hidden Medium field is filterable so the default DataViews filter control appears next to search."
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hideLevelMarkers: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The one-line CSS override the native rendering leaves room for: the em-dash marker span is hidden but keeps its layout box, so rows indent by depth with plain whitespace.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    initialView: multipleColumnsInitialView
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    initialView: {
      ...initialView,
      search: 'Google'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Search keeps matches under their ancestors instead of orphaning them: searching "Google" surfaces Google, Google Search, and Google Images, still nested under Search Engines. Clear the search to see the full tree.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    initialView: sortedInitialView
  },
  parameters: {
    docs: {
      description: {
        story: 'Sorting orders within each level, not globally: top-level rows sort against each other and children sort within their parent, so the tree stays intact. Sorted by Views (desc) here.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [],
    empty: <div>No referrers found.</div>
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    data: archiveRows,
    fields: archiveFields,
    getItemId: getArchiveItemId,
    getItemParentId: getArchiveItemParentId,
    initialView: archiveInitialView
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: PAGINATED_ROWS,
    hideLevelMarkers: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination counts every row and slices the hierarchy-ordered list. Until the parent-on-page-boundary refinement lands, a deep subtree can still span pages (its child rows appear on the next page without their parent).'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true,
    hideLevelMarkers: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The local collapse layer over the static native rendering: rows with children get a chevron, and folding one drops its whole subtree from the table — including from the pagination count. Sits behind a prop so it can be dropped once core ships native collapse (WordPress/gutenberg#80360).'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Collapsible.args,
    defaultExpanded: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: 'Opening on the top level only, for a report whose groups are long. Searching still answers: the matches’ ancestors unfold for as long as the search is on, then fold back when it clears.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`HiddenLevelMarkers`,`MultipleColumns`,`Search`,`Sorted`,`Loading`,`Empty`,`Archives`,`Paginated`,`Collapsible`,`CollapsedByDefault`]}))();export{Y as Archives,Q as CollapsedByDefault,Z as Collapsible,H as Default,J as Empty,U as HiddenLevelMarkers,q as Loading,W as MultipleColumns,X as Paginated,G as Search,K as Sorted,$ as __namedExportsOrder,je as default};