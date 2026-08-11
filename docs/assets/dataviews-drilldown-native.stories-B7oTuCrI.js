import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./clsx-SUvPW2lx.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{l as o,r as s,t as c}from"./src-DLdAW9Xe.js";var l,u,d,f=t((()=>{l=`_root_qg69x_2`,u=`_hideLevelMarkers_qg69x_2426`,d={root:l,hideLevelMarkers:u,"dataviews-pulse":`_dataviews-pulse_qg69x_1`}}));function p(e){return e?.toString()}function m(e,t,n){let r=e.map(e=>({item:e,id:t(e)})),i=new Map(r.map(e=>[e.id,e])),a=[],o=new Map;for(let e of r){let t=p(n(e.item)),r=t&&t!==e.id?i.get(t):void 0;if(!r){a.push(e);continue}let s=o.get(r.id)??[];s.push(e),o.set(r.id,s)}let s=[],c=new Map,l=new Set,u=(e,t)=>{for(let n of e)l.has(n)||(l.add(n),c.set(n.id,t),s.push(n.item),u(o.get(n.id)??[],t+1))};u(a,0);for(let e of r)l.has(e)||u([e],0);return{data:s,levelById:c}}function h(e,t,n,r){let i=new Map(e.map(e=>[n(e),e])),a=new Set(t);for(let e of t){let t=i.get(e);for(;t;){let e=p(r(t));if(!e||e===n(t)||a.has(e))break;let o=i.get(e);if(!o)break;a.add(e),t=o}}let o=new Map;for(let t of e){let e=n(t),i=p(r(t));if(!i||i===e)continue;let a=o.get(i)??[];a.push(e),o.set(i,a)}let s=[...t],c=new Set;for(;s.length;){let e=s.pop();if(!c.has(e)){c.add(e);for(let t of o.get(e)??[])a.add(t),s.push(t)}}return e.filter(e=>a.has(n(e)))}var g=t((()=>{}));function _({data:e,fields:t,getItemId:n,getItemParentId:r,initialView:a,hideLevelMarkers:o=!1,isLoading:c=!1,searchLabel:l,empty:u,perPageSizes:f=b}){let[p,g]=(0,v.useState)(()=>{let{fields:e,...n}=a??{},[r,...i]=e??t.map(e=>e.id);return{page:1,perPage:f[0]??10,search:``,...n,type:`table`,showLevels:!0,titleField:r,fields:i}}),{pageData:_,levelById:S,paginationInfo:C}=(0,v.useMemo)(()=>{let i=s(e,{...p,sort:void 0,page:1,perPage:Math.max(e.length,1)},t).data,a=h(e,new Set(i.map(n)),n,r),o=s(a,{...p,search:``,filters:[],page:1,perPage:Math.max(a.length,1)},t).data,{data:c,levelById:l}=m(o,n,r),u=p.perPage??10,d=((p.page??1)-1)*u;return{pageData:c.slice(d,d+u),levelById:l,paginationInfo:{totalItems:c.length,totalPages:Math.max(1,Math.ceil(c.length/u))}}},[e,p,t,n,r]),w=(0,v.useCallback)(e=>S.get(n(e))??0,[S,n]),T=(0,v.useCallback)(e=>g({...e,showLevels:!0}),[]);return(0,y.jsx)(`div`,{className:i(d.root,o&&d.hideLevelMarkers),children:(0,y.jsx)(x,{view:p,onChangeView:T,fields:t,data:_,getItemId:n,getItemLevel:w,isLoading:c,paginationInfo:C,defaultLayouts:{table:{}},empty:u,searchLabel:l,config:{perPageSizes:f}})})}var v,y,b,x,S=t((()=>{c(),r(),v=e(n(),1),f(),g(),y=a(),b=[10,25,50,100],x=o}));function C(){let e=[];for(let t=1;t<=12;t++){let n=`referrer-${String(t).padStart(2,`0`)}`,r=`Referrer ${String(t).padStart(2,`0`)}`;if(e.push({id:n,referrer:r,views:(13-t)*10}),t===1)for(let t=1;t<=15;t++)e.push({id:`${n}-source-${String(t).padStart(2,`0`)}`,parentId:n,referrer:`${r} / Source ${String(t).padStart(2,`0`)}`,views:16-t})}return e}function w({item:e}){let t=N.has(e.id)?(0,O.jsx)(`strong`,{children:e.referrer}):(0,O.jsx)(O.Fragment,{children:e.referrer});return e.href?(0,O.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:t}):t}function T({item:e}){let t=P.has(e.id)?(0,O.jsx)(`strong`,{children:e.title}):(0,O.jsx)(O.Fragment,{children:e.title});return e.href?(0,O.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:t}):t}function E(e){return new Date(e).toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})}function ee({item:e}){return e.date?(0,O.jsx)(O.Fragment,{children:E(e.date)}):(0,O.jsx)(O.Fragment,{})}function te({item:e}){return(0,O.jsx)(O.Fragment,{children:e.views.toLocaleString()})}function ne({item:e}){return(0,O.jsx)(O.Fragment,{children:e.views.toLocaleString()})}function re(e){return e.id}function ie(e){return e.parentId}function ae(e){return e.id}function D(e){return e.parentId}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{S(),O=a(),k=[{id:`search`,referrer:`Search Engines`,medium:`organic`,views:625},{id:`google`,parentId:`search`,referrer:`Google`,date:`2026-06-30`,href:`https://google.com`,views:485},{id:`google-search`,parentId:`google`,referrer:`Google Search`,date:`2026-06-30`,href:`https://google.com/search`,views:420},{id:`google-images`,parentId:`google`,referrer:`Google Images`,date:`2026-06-30`,href:`https://images.google.com`,views:65},{id:`bing`,parentId:`search`,referrer:`Bing`,date:`2026-06-29`,href:`https://bing.com`,views:86},{id:`duckduckgo`,parentId:`search`,referrer:`DuckDuckGo`,date:`2026-06-28`,href:`https://duckduckgo.com`,views:39},{id:`yahoo`,parentId:`search`,referrer:`Yahoo`,date:`2026-06-27`,href:`https://yahoo.com`,views:14},{id:`social`,referrer:`Social`,medium:`social`,views:345},{id:`facebook`,parentId:`social`,referrer:`Facebook`,date:`2026-06-26`,href:`https://facebook.com`,views:210},{id:`x`,parentId:`social`,referrer:`X`,date:`2026-06-25`,href:`https://x.com`,views:135},{id:`direct`,referrer:`Direct`,medium:`direct`,views:251}],A=[{id:`tags`,title:`Tags (44)`,views:44},{id:`tag-performance`,parentId:`tags`,title:`/tag/performance`,href:`https://example.com/tag/performance`,views:18},{id:`tag-analytics`,parentId:`tags`,title:`/tag/analytics`,href:`https://example.com/tag/analytics`,views:12},{id:`tag-jetpack`,parentId:`tags`,title:`/tag/jetpack`,href:`https://example.com/tag/jetpack`,views:8},{id:`tag-wordpress`,parentId:`tags`,title:`/tag/wordpress`,href:`https://example.com/tag/wordpress`,views:6},{id:`categories`,title:`Categories (33)`,views:33},{id:`category-news`,parentId:`categories`,title:`/category/news`,href:`https://example.com/category/news`,views:21},{id:`category-reviews`,parentId:`categories`,title:`/category/reviews`,href:`https://example.com/category/reviews`,views:12},{id:`dates`,title:`Dates (7)`,views:7},{id:`date-2026-06`,parentId:`dates`,title:`/2026/06`,href:`https://example.com/2026/06`,views:4},{id:`date-2026-05`,parentId:`dates`,title:`/2026/05`,href:`https://example.com/2026/05`,views:3}],j=C(),M=[{value:`organic`,label:`Organic`},{value:`social`,label:`Social`},{value:`direct`,label:`Direct`}],N=new Set([...k,...j].map(e=>e.parentId).filter(Boolean)),P=new Set(A.map(e=>e.parentId).filter(Boolean)),F=[{id:`referrer`,label:`Referrer`,enableGlobalSearch:!0,render:w},{id:`date`,label:`Date`,render:ee},{id:`views`,label:`Views`,render:te},{id:`medium`,label:`Medium`,elements:M,filterBy:{operators:[`isAny`]}}],I={referrer:{width:`100%`},date:{align:`end`},views:{align:`end`}},L={title:{width:`100%`},views:{align:`end`}},R={fields:[`referrer`,`views`],layout:{styles:I}},z={fields:[`referrer`,`date`,`views`],layout:{styles:I}},B={sort:{field:`views`,direction:`desc`},fields:[`referrer`,`views`],layout:{styles:I}},V={fields:[`title`,`views`],layout:{styles:L}},H=[{id:`title`,label:`Title`,enableGlobalSearch:!0,render:T},{id:`views`,label:`Views`,render:ne}],U={title:`Packages/Premium Analytics/UI/DataViewsDrilldownNative`,component:_,tags:[`autodocs`],argTypes:{hideLevelMarkers:{control:`boolean`}},args:{hideLevelMarkers:!1}},W={args:{data:k,fields:F,getItemId:re,getItemParentId:ie,initialView:R},parameters:{docs:{description:{story:"DataViews' native hierarchy rendering: `view.showLevels` plus `getItemLevel`, with levels drawn as em-dash markers on the title field. Search and filter keep matches under their ancestors, and sort orders within each level. The hidden Medium field is filterable so the default DataViews filter control appears next to search."}}}},G={args:{...W.args,hideLevelMarkers:!0},parameters:{docs:{description:{story:`The one-line CSS override the native rendering leaves room for: the em-dash marker span is hidden but keeps its layout box, so rows indent by depth with plain whitespace.`}}}},K={args:{...W.args,initialView:z}},q={args:{...W.args,initialView:{...R,search:`Google`}},parameters:{docs:{description:{story:`Search keeps matches under their ancestors instead of orphaning them: searching "Google" surfaces Google, Google Search, and Google Images, still nested under Search Engines. Clear the search to see the full tree.`}}}},J={args:{...W.args,initialView:B},parameters:{docs:{description:{story:`Sorting orders within each level, not globally: top-level rows sort against each other and children sort within their parent, so the tree stays intact. Sorted by Views (desc) here.`}}}},Y={args:{...W.args,isLoading:!0}},X={args:{...W.args,data:[],empty:(0,O.jsx)(`div`,{children:`No referrers found.`})}},Z={args:{data:A,fields:H,getItemId:ae,getItemParentId:D,initialView:V}},Q={args:{...W.args,data:j,hideLevelMarkers:!0},parameters:{docs:{description:{story:`Pagination counts every row and slices the hierarchy-ordered list. Until the parent-on-page-boundary refinement lands, a deep subtree can still span pages (its child rows appear on the next page without their parent).`}}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    initialView: multipleColumnsInitialView
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [],
    empty: <div>No referrers found.</div>
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    data: archiveRows,
    fields: archiveFields,
    getItemId: getArchiveItemId,
    getItemParentId: getArchiveItemParentId,
    initialView: archiveInitialView
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`HiddenLevelMarkers`,`MultipleColumns`,`Search`,`Sorted`,`Loading`,`Empty`,`Archives`,`Paginated`]}))();export{Z as Archives,W as Default,X as Empty,G as HiddenLevelMarkers,Y as Loading,K as MultipleColumns,Q as Paginated,q as Search,J as Sorted,$ as __namedExportsOrder,U as default};