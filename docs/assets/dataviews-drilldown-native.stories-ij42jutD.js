import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,o as i,t as a}from"./build-module-2QZQpBH2.js";import{n as o,t as s}from"./clsx-SUvPW2lx.js";import{t as c}from"./jsx-runtime-D2pHJD-r.js";import{Qc as l,nl as u,ol as d,t as f}from"./build-module-Cm3Kd3py.js";import{en as p}from"./build-module-D2aEjqke.js";import{l as m,r as ee,t as h}from"./src-eClfXXpQ.js";import{i as te,t as g}from"./use-paginated-view-DWbjZruO.js";function _(e){return e?.toString()}function ne(e,t,n){let r=e.map(e=>({item:e,id:t(e)})),i=new Map(r.map(e=>[e.id,e])),a=[],o=new Map;for(let e of r){let t=_(n(e.item)),r=t&&t!==e.id?i.get(t):void 0;if(!r){a.push(e);continue}let s=o.get(r.id)??[];s.push(e),o.set(r.id,s)}let s=[],c=new Map,l=new Set,u=(e,t)=>{for(let n of e)l.has(n)||(l.add(n),c.set(n.id,t),s.push(n.item),u(o.get(n.id)??[],t+1))};u(a,0);for(let e of r)l.has(e)||u([e],0);return{data:s,levelById:c}}function re(e,t,n,r){let i=new Map(e.map(e=>[n(e),e])),a=new Set(t);for(let e of t){let t=i.get(e);for(;t;){let e=_(r(t));if(!e||e===n(t)||a.has(e))break;let o=i.get(e);if(!o)break;a.add(e),t=o}}let o=new Map;for(let t of e){let e=n(t),i=_(r(t));if(!i||i===e)continue;let a=o.get(i)??[];a.push(e),o.set(i,a)}let s=[...t],c=new Set;for(;s.length;){let e=s.pop();if(!c.has(e)){c.add(e);for(let t of o.get(e)??[])a.add(t),s.push(t)}}return e.filter(e=>a.has(n(e)))}var v=t((()=>{}));function ie(e,t,n,r){let i=[],a=null;for(let o of e){let e=t(o),s=n.get(e)??0;a!==null&&s>a||(a=r(e)?null:s,i.push(o))}return i}function ae(e,t,n){let r=new Set(e.map(t)),i=new Set;for(let a of e){let e=_(n(a));e!==void 0&&e!==t(a)&&r.has(e)&&i.add(e)}return i}function oe(e,t,n,r){let i=new Map(e.map(e=>[n(e),e])),a=new Set;for(let e of t){let t=i.get(e);for(;t;){let e=_(r(t));if(!e||e===n(t)||a.has(e))break;let o=i.get(e);if(!o)break;a.add(e),t=o}}return a}var y=t((()=>{v()})),b,x,S,C,w,T=t((()=>{b=`_root_1j4nm_2`,x=`_hideLevelMarkers_1j4nm_2445`,S=`_titleCell_1j4nm_2450`,C=`_titleContent_1j4nm_2460`,w={root:b,hideLevelMarkers:x,titleCell:S,titleContent:C,"dataviews-pulse":`_dataviews-pulse_1j4nm_1`}})),E,D,O=t((()=>{E=`_toggle_q2g5r_1`,D={toggle:E}}));function se({label:e,expanded:t,disabled:n=!1,onToggle:r}){let a=i()?u:l;return(0,k.jsx)(p,{className:D.toggle,variant:`minimal`,tone:`neutral`,size:`small`,"aria-label":e,"aria-expanded":t,disabled:n,onClick:n?void 0:r,children:(0,k.jsx)(p.Icon,{icon:t?d:a,size:16})})}var k,ce=t((()=>{h(),a(),f(),O(),k=c()}));function le(e){let t=(0,A.useContext)(N);if(!t)throw Error(`CollapsibleTitleCell must be rendered within CollapseContext.`);let{titleField:n,getItemId:i}=t,a=i(e.item),o=e.field.getValue({item:e.item}),s=n?.render,c=s?(0,j.jsx)(s,{...e}):String(o??``);return t.parentIds.has(a)?(0,j.jsxs)(`span`,{className:w.titleCell,children:[(0,j.jsx)(`span`,{className:w.titleContent,children:c}),(0,j.jsx)(se,{label:o?String(o):r(`Toggle group`,`jetpack-premium-analytics-pkg`),expanded:t.isExpanded(a),disabled:t.forcedIds.has(a),onToggle:()=>t.onToggle(a)})]}):(0,j.jsx)(j.Fragment,{children:c})}function ue({data:e,fields:t,getItemId:n,getItemParentId:r,initialView:i,actions:a,hideLevelMarkers:o=!1,collapsible:c=!1,defaultExpanded:l=`all`,isLoading:u=!1,searchLabel:d,empty:f,perPageSizes:p=de}){let[m,h]=(0,A.useState)(()=>{let{fields:e,...n}=i??{},[r,...a]=e??t.map(e=>e.id);return{page:1,perPage:p[0]??10,search:``,...n,type:`table`,showLevels:!0,titleField:r,fields:a}}),[g,_]=(0,A.useState)(()=>new Set),v=l!==`none`,{effectiveView:y,pageData:b,levelById:x,paginationInfo:S,parentIds:C,forcedIds:T,isExpanded:E}=(0,A.useMemo)(()=>{let i=ee(e,{...m,sort:void 0,page:1,perPage:Math.max(e.length,1)},t).data,a=new Set(i.map(n)),o=re(e,a,n,r),s=ee(o,{...m,search:``,filters:[],page:1,perPage:Math.max(o.length,1)},t).data,{data:l,levelById:u}=ne(s,n,r),d=i.length!==e.length,f=c&&d?oe(l,a,n,r):M,p=e=>v!==g.has(e)||f.has(e),h=c?ie(l,n,u,p):l,_=c?ae(l,n,r):M,y=m.perPage??10,b=Math.max(1,Math.ceil(h.length/y)),x=te(m.page??1,b),S=(x-1)*y;return{effectiveView:x===(m.page??1)?m:{...m,page:x},pageData:h.slice(S,S+y),levelById:u,paginationInfo:{totalItems:h.length,totalPages:b},parentIds:_,forcedIds:f,isExpanded:p}},[e,m,t,n,r,c,v,g]),D=(0,A.useCallback)(e=>{_(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),O=(0,A.useMemo)(()=>t.find(e=>e.id===m.titleField),[t,m.titleField]),se=(0,A.useMemo)(()=>({isExpanded:E,parentIds:C,forcedIds:T,onToggle:D,titleField:O,getItemId:n}),[E,C,T,D,O,n]),k=(0,A.useMemo)(()=>c?t.map(e=>e.id===m.titleField?{...e,render:le}:e):t,[c,t,m.titleField]),ce=(0,A.useCallback)(e=>x.get(n(e))??0,[x,n]),ue=(0,A.useCallback)(e=>h({...e,showLevels:!0}),[]);return(0,A.useEffect)(()=>{y!==m&&h(y)},[y,m]),(0,j.jsx)(N.Provider,{value:se,children:(0,j.jsx)(`div`,{className:s(w.root,o&&w.hideLevelMarkers),children:(0,j.jsx)(fe,{view:y,onChangeView:ue,fields:k,data:b,getItemId:n,getItemLevel:ce,actions:a,isLoading:u,paginationInfo:S,defaultLayouts:{table:{}},empty:f,searchLabel:d,config:{perPageSizes:p}})})})}var A,j,de,M,N,fe,pe=t((()=>{h(),a(),o(),A=e(n(),1),g(),y(),T(),ce(),v(),j=c(),de=[10,25,50,100],M=new Set,N=(0,A.createContext)(null),fe=m}));function me(){let e=[];for(let t=1;t<=12;t++){let n=`referrer-${String(t).padStart(2,`0`)}`,r=`Referrer ${String(t).padStart(2,`0`)}`;if(e.push({id:n,referrer:r,views:(13-t)*10}),t===1)for(let t=1;t<=15;t++)e.push({id:`${n}-source-${String(t).padStart(2,`0`)}`,parentId:n,referrer:`${r} / Source ${String(t).padStart(2,`0`)}`,views:16-t})}return e}function he({item:e}){let t=De.has(e.id)?(0,P.jsx)(`strong`,{children:e.referrer}):(0,P.jsx)(P.Fragment,{children:e.referrer});return e.href?(0,P.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:t}):t}function ge({item:e}){return(0,P.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,P.jsx)(`span`,{"aria-hidden":`true`,style:{flexShrink:0,inlineSize:16,blockSize:16,background:`#c3c4c7`}}),(0,P.jsx)(`span`,{style:{overflow:`hidden`,whiteSpace:`nowrap`,textOverflow:`ellipsis`},children:e.referrer})]})}function _e({item:e}){let t=Oe.has(e.id)?(0,P.jsx)(`strong`,{children:e.title}):(0,P.jsx)(P.Fragment,{children:e.title});return e.href?(0,P.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:t}):t}function ve(e){return new Date(e).toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})}function ye({item:e}){return e.date?(0,P.jsx)(P.Fragment,{children:ve(e.date)}):(0,P.jsx)(P.Fragment,{})}function be({item:e}){return(0,P.jsx)(P.Fragment,{children:e.views.toLocaleString()})}function xe({item:e}){return(0,P.jsx)(P.Fragment,{children:e.views.toLocaleString()})}function Se(e){return e.id}function Ce(e){return e.parentId}function we(e){return e.id}function Te(e){return e.parentId}var P,F,I,L,Ee,De,Oe,R,z,ke,B,Ae,je,Me,Ne,Pe,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Fe;t((()=>{pe(),P=c(),F=[{id:`search`,referrer:`Search Engines`,medium:`organic`,views:625},{id:`google`,parentId:`search`,referrer:`Google`,date:`2026-06-30`,href:`https://google.com`,views:485},{id:`google-search`,parentId:`google`,referrer:`Google Search`,date:`2026-06-30`,href:`https://google.com/search`,views:420},{id:`google-images`,parentId:`google`,referrer:`Google Images`,date:`2026-06-30`,href:`https://images.google.com`,views:65},{id:`bing`,parentId:`search`,referrer:`Bing`,date:`2026-06-29`,href:`https://bing.com`,views:86},{id:`duckduckgo`,parentId:`search`,referrer:`DuckDuckGo`,date:`2026-06-28`,href:`https://duckduckgo.com`,views:39},{id:`yahoo`,parentId:`search`,referrer:`Yahoo`,date:`2026-06-27`,href:`https://yahoo.com`,views:14},{id:`social`,referrer:`Social`,medium:`social`,views:345},{id:`facebook`,parentId:`social`,referrer:`Facebook`,date:`2026-06-26`,href:`https://facebook.com`,views:210},{id:`x`,parentId:`social`,referrer:`X`,date:`2026-06-25`,href:`https://x.com`,views:135},{id:`direct`,referrer:`Direct`,medium:`direct`,views:251}],I=[{id:`tags`,title:`Tags (44)`,views:44},{id:`tag-performance`,parentId:`tags`,title:`/tag/performance`,href:`https://example.com/tag/performance`,views:18},{id:`tag-analytics`,parentId:`tags`,title:`/tag/analytics`,href:`https://example.com/tag/analytics`,views:12},{id:`tag-jetpack`,parentId:`tags`,title:`/tag/jetpack`,href:`https://example.com/tag/jetpack`,views:8},{id:`tag-wordpress`,parentId:`tags`,title:`/tag/wordpress`,href:`https://example.com/tag/wordpress`,views:6},{id:`categories`,title:`Categories (33)`,views:33},{id:`category-news`,parentId:`categories`,title:`/category/news`,href:`https://example.com/category/news`,views:21},{id:`category-reviews`,parentId:`categories`,title:`/category/reviews`,href:`https://example.com/category/reviews`,views:12},{id:`dates`,title:`Dates (7)`,views:7},{id:`date-2026-06`,parentId:`dates`,title:`/2026/06`,href:`https://example.com/2026/06`,views:4},{id:`date-2026-05`,parentId:`dates`,title:`/2026/05`,href:`https://example.com/2026/05`,views:3}],L=me(),Ee=[{value:`organic`,label:`Organic`},{value:`social`,label:`Social`},{value:`direct`,label:`Direct`}],De=new Set([...F,...L].map(e=>e.parentId).filter(Boolean)),Oe=new Set(I.map(e=>e.parentId).filter(Boolean)),R=[{id:`referrer`,label:`Referrer`,enableGlobalSearch:!0,render:he},{id:`date`,label:`Date`,render:ye},{id:`views`,label:`Views`,render:be},{id:`medium`,label:`Medium`,elements:Ee,filterBy:{operators:[`isAny`]}}],z={referrer:{width:`100%`},date:{align:`end`},views:{align:`end`}},ke={title:{width:`100%`},views:{align:`end`}},B={fields:[`referrer`,`views`],layout:{styles:z}},Ae={fields:[`referrer`,`date`,`views`],layout:{styles:z}},je={sort:{field:`views`,direction:`desc`},fields:[`referrer`,`views`],layout:{styles:z}},Me={fields:[`title`,`views`],layout:{styles:ke}},Ne=[{id:`title`,label:`Title`,enableGlobalSearch:!0,render:_e},{id:`views`,label:`Views`,render:xe}],Pe={title:`Packages/Premium Analytics/UI/DataViewsDrilldownNative`,component:ue,tags:[`autodocs`],argTypes:{hideLevelMarkers:{control:`boolean`}},args:{hideLevelMarkers:!1}},V={args:{data:F,fields:R,getItemId:Se,getItemParentId:Ce,initialView:B},parameters:{docs:{description:{story:"DataViews' native hierarchy rendering: `view.showLevels` plus `getItemLevel`, with levels drawn as em-dash markers on the title field. Search and filter keep matches under their ancestors, and sort orders within each level. The hidden Medium field is filterable so the default DataViews filter control appears next to search."}}}},H={args:{...V.args,hideLevelMarkers:!0},parameters:{docs:{description:{story:`The one-line CSS override the native rendering leaves room for: the em-dash marker span is hidden but keeps its layout box, so rows indent by depth with plain whitespace.`}}}},U={args:{...V.args,initialView:Ae}},W={args:{...V.args,initialView:{...B,search:`Google`}},parameters:{docs:{description:{story:`Search keeps matches under their ancestors instead of orphaning them: searching "Google" surfaces Google, Google Search, and Google Images, still nested under Search Engines. Clear the search to see the full tree.`}}}},G={args:{...V.args,initialView:je},parameters:{docs:{description:{story:`Sorting orders within each level, not globally: top-level rows sort against each other and children sort within their parent, so the tree stays intact. Sorted by Views (desc) here.`}}}},K={args:{...V.args,isLoading:!0}},q={args:{...V.args,data:[],empty:(0,P.jsx)(`div`,{children:`No referrers found.`})}},J={args:{data:I,fields:Ne,getItemId:we,getItemParentId:Te,initialView:Me}},Y={args:{...V.args,data:L,hideLevelMarkers:!0},parameters:{docs:{description:{story:`Pagination counts every row and slices the hierarchy-ordered list. Until the parent-on-page-boundary refinement lands, a deep subtree can still span pages (its child rows appear on the next page without their parent).`}}}},X={args:{...V.args,collapsible:!0,hideLevelMarkers:!0},parameters:{docs:{description:{story:`The local collapse layer over the static native rendering: rows with children get a chevron, and folding one drops its whole subtree from the table — including from the pagination count. Sits behind a prop so it can be dropped once core ships native collapse (WordPress/gutenberg#80360).`}}}},Z={args:{...X.args,defaultExpanded:`none`},parameters:{docs:{description:{story:`Opening on the top level only, for a report whose groups are long. Searching still answers: the matches’ ancestors unfold for as long as the search is on, then fold back when it clears.`}}}},Q={args:{...Z.args,data:F.map(e=>e.id===`search`?{...e,referrer:`${e.referrer} and Aggregators, Syndication Partners and Every Other Long-Winded Category Name a Site Might Report`}:e)},parameters:{docs:{description:{story:`A group label wider than the title column. The title has to give way rather than carry the chevron out of the report card, which clips its overflow — a chevron pushed past that edge cannot be reached with a mouse at all, leaving the group unopenable.`}}}},$={args:{...Q.args,fields:R.map(e=>e.id===`referrer`?{...e,render:ge}:e)},parameters:{docs:{description:{story:`The same over-long label, rendered the way the report pages render theirs: a thumbnail beside the text. The cell clips a flex row without ellipsizing it, so the consumer puts the ellipsis on its own label — the rule the Authors and Referrers reports each carry.`}}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    initialView: multipleColumnsInitialView
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [],
    empty: <div>No referrers found.</div>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    data: archiveRows,
    fields: archiveFields,
    getItemId: getArchiveItemId,
    getItemParentId: getArchiveItemParentId,
    initialView: archiveInitialView
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ...CollapsedByDefault.args,
    data: rows.map(row => row.id === 'search' ? {
      ...row,
      referrer: \`\${row.referrer} and Aggregators, Syndication Partners and Every Other Long-Winded Category Name a Site Might Report\`
    } : row)
  },
  parameters: {
    docs: {
      description: {
        story: 'A group label wider than the title column. The title has to give way rather than carry the chevron out of the report card, which clips its overflow — a chevron pushed past that edge cannot be reached with a mouse at all, leaving the group unopenable.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    ...LongGroupTitle.args,
    fields: fields.map(field => field.id === 'referrer' ? {
      ...field,
      render: ThumbnailReferrerField
    } : field)
  },
  parameters: {
    docs: {
      description: {
        story: 'The same over-long label, rendered the way the report pages render theirs: a thumbnail beside the text. The cell clips a flex row without ellipsizing it, so the consumer puts the ellipsis on its own label — the rule the Authors and Referrers reports each carry.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}},Fe=[`Default`,`HiddenLevelMarkers`,`MultipleColumns`,`Search`,`Sorted`,`Loading`,`Empty`,`Archives`,`Paginated`,`Collapsible`,`CollapsedByDefault`,`LongGroupTitle`,`LongGroupTitleWithThumbnail`]}))();export{J as Archives,Z as CollapsedByDefault,X as Collapsible,V as Default,q as Empty,H as HiddenLevelMarkers,K as Loading,Q as LongGroupTitle,$ as LongGroupTitleWithThumbnail,U as MultipleColumns,Y as Paginated,W as Search,G as Sorted,Fe as __namedExportsOrder,Pe as default};