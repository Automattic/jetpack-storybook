import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,s as i,t as a}from"./build-module-sy00sX6O.js";import{n as o,t as s}from"./clsx-DtTNkXd0.js";import{t as c}from"./jsx-runtime-CFwixLRt.js";import{Bc as l,Ic as u,Mc as d,t as f}from"./build-module-CPdP9iK8.js";import{ra as p}from"./build-module-CCbOH6zx.js";import{c as m,n as h}from"./build-module-C_3ml3mK.js";import{t as g}from"./src-C8BpF6tC.js";function _(e){return e?.toString()}function ee(e,t,n){let r=e.map(e=>({item:e,id:t(e)})),i=new Map(r.map(e=>[e.id,e])),a=[],o=new Map;for(let e of r){let t=_(n(e.item)),r=t&&t!==e.id?i.get(t):void 0;if(!r){a.push(e);continue}let s=o.get(r.id)??[];s.push(e),o.set(r.id,s)}let s=[],c=new Map,l=new Set,u=(e,t)=>{for(let n of e)l.has(n)||(l.add(n),c.set(n.id,t),s.push(n.item),u(o.get(n.id)??[],t+1))};u(a,0);for(let e of r)l.has(e)||u([e],0);return{data:s,levelById:c}}function te(e,t,n,r){let i=new Map(e.map(e=>[n(e),e])),a=new Set(t);for(let e of t){let t=i.get(e);for(;t;){let e=_(r(t));if(!e||e===n(t)||a.has(e))break;let o=i.get(e);if(!o)break;a.add(e),t=o}}let o=new Map;for(let t of e){let e=n(t),i=_(r(t));if(!i||i===e)continue;let a=o.get(i)??[];a.push(e),o.set(i,a)}let s=[...t],c=new Set;for(;s.length;){let e=s.pop();if(!c.has(e)){c.add(e);for(let t of o.get(e)??[])a.add(t),s.push(t)}}return e.filter(e=>a.has(n(e)))}var v=e((()=>{}));function ne(e,t,n,r){let i=[],a=null;for(let o of e){let e=t(o),s=n.get(e)??0;a!==null&&s>a||(a=r(e)?null:s,i.push(o))}return i}function re(e,t,n){let r=new Set(e.map(t)),i=new Set;for(let a of e){let e=_(n(a));e!==void 0&&e!==t(a)&&r.has(e)&&i.add(e)}return i}function ie(e,t,n,r){let i=new Map(e.map(e=>[n(e),e])),a=new Set;for(let e of t){let t=i.get(e);for(;t;){let e=_(r(t));if(!e||e===n(t)||a.has(e))break;let o=i.get(e);if(!o)break;a.add(e),t=o}}return a}var y=e((()=>{v()})),b,x,S,C,w,T=e((()=>{b=`_root_1nr2x_2`,x=`_hideLevelMarkers_1nr2x_2449`,S=`_titleCell_1nr2x_2454`,C=`_titleContent_1nr2x_2464`,w={root:b,hideLevelMarkers:x,titleCell:S,titleContent:C,"dataviews-pulse":`_dataviews-pulse_1nr2x_1`}})),E,D,ae=e((()=>{E=`_toggle_q2g5r_1`,D={toggle:E}}));function oe({label:e,expanded:t,disabled:n=!1,onToggle:r}){let a=i()?u:d;return(0,O.jsx)(p,{className:D.toggle,variant:`minimal`,tone:`neutral`,size:`small`,"aria-label":e,"aria-expanded":t,disabled:n,onClick:n?void 0:r,children:(0,O.jsx)(p.Icon,{icon:t?l:a,size:16})})}var O,se=e((()=>{g(),a(),f(),ae(),O=c()}));function ce(e){let t=(0,k.useContext)(M);if(!t)throw Error(`CollapsibleTitleCell must be rendered within CollapseContext.`);let{titleField:n,getItemId:i}=t,a=i(e.item),o=e.field.getValue({item:e.item}),s=n?.render,c=s?(0,A.jsx)(s,{...e}):String(o??``);return t.parentIds.has(a)?(0,A.jsxs)(`span`,{className:w.titleCell,children:[(0,A.jsx)(`span`,{className:w.titleContent,children:c}),(0,A.jsx)(oe,{label:o?String(o):r(`Toggle group`,`jetpack-premium-analytics-pkg`),expanded:t.isExpanded(a),disabled:t.forcedIds.has(a),onToggle:()=>t.onToggle(a)})]}):(0,A.jsx)(A.Fragment,{children:c})}function le({data:e,fields:t,getItemId:n,getItemParentId:r,initialView:i,actions:a,hideLevelMarkers:o=!1,collapsible:c=!1,defaultExpanded:l=`all`,isLoading:u=!1,searchLabel:d,empty:f}){let[p,m]=(0,k.useState)(()=>{let{fields:e,...n}=i??{},[r,...a]=e??t.map(e=>e.id);return{page:1,search:``,...n,type:`table`,showLevels:!0,titleField:r,fields:a}}),[g,_]=(0,k.useState)(()=>new Set),v=l!==`none`,{rows:y,levelById:b,paginationInfo:x,parentIds:S,forcedIds:C,isExpanded:T}=(0,k.useMemo)(()=>{let i=h(e,{...p,sort:void 0,page:1,perPage:Math.max(e.length,1)},t).data,a=new Set(i.map(n)),o=te(e,a,n,r),s=h(o,{...p,search:``,filters:[],page:1,perPage:Math.max(o.length,1)},t).data,{data:l,levelById:u}=ee(s,n,r),d=i.length!==e.length,f=c&&d?ie(l,a,n,r):j,m=e=>v!==g.has(e)||f.has(e),_=c?ne(l,n,u,m):l,y=c?re(l,n,r):j;return{rows:_,levelById:u,paginationInfo:{totalItems:_.length,totalPages:1},parentIds:y,forcedIds:f,isExpanded:m}},[e,p,t,n,r,c,v,g]),E=(0,k.useCallback)(e=>{_(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),D=(0,k.useMemo)(()=>t.find(e=>e.id===p.titleField),[t,p.titleField]),ae=(0,k.useMemo)(()=>({isExpanded:T,parentIds:S,forcedIds:C,onToggle:E,titleField:D,getItemId:n}),[T,S,C,E,D,n]),oe=(0,k.useMemo)(()=>c?t.map(e=>e.id===p.titleField?{...e,render:ce}:e):t,[c,t,p.titleField]),O=(0,k.useCallback)(e=>b.get(n(e))??0,[b,n]),se=(0,k.useCallback)(e=>m({...e,showLevels:!0}),[]);return(0,A.jsx)(M.Provider,{value:ae,children:(0,A.jsx)(`div`,{className:s(w.root,o&&w.hideLevelMarkers),children:(0,A.jsx)(de,{view:p,onChangeView:se,fields:oe,data:y,getItemId:n,getItemLevel:O,actions:a,isLoading:u,paginationInfo:x,defaultLayouts:{table:{}},empty:f,searchLabel:d,config:{perPageSizes:ue}})})})}var k,A,ue,j,M,de,fe=e((()=>{g(),a(),o(),k=t(n(),1),y(),T(),se(),v(),A=c(),ue=[],j=new Set,M=(0,k.createContext)(null),de=m}));function pe({item:e}){return e.href?(0,N.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:e.referrer}):(0,N.jsx)(N.Fragment,{children:e.referrer})}function me({item:e}){return(0,N.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,N.jsx)(`span`,{"aria-hidden":`true`,style:{flexShrink:0,inlineSize:16,blockSize:16,background:`#c3c4c7`}}),(0,N.jsx)(`span`,{style:{overflow:`hidden`,whiteSpace:`nowrap`,textOverflow:`ellipsis`},children:e.referrer})]})}function he({item:e}){return e.href?(0,N.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:e.title}):(0,N.jsx)(N.Fragment,{children:e.title})}function ge(e){return new Date(e).toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})}function _e({item:e}){return e.date?(0,N.jsx)(N.Fragment,{children:ge(e.date)}):(0,N.jsx)(N.Fragment,{})}function ve({item:e}){return(0,N.jsx)(N.Fragment,{children:e.views.toLocaleString()})}function ye({item:e}){return(0,N.jsx)(N.Fragment,{children:e.views.toLocaleString()})}function be(e){return e.id}function xe(e){return e.parentId}function Se(e){return e.id}function Ce(e){return e.parentId}var N,P,we,Te,F,I,Ee,L,De,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Oe;e((()=>{fe(),N=c(),P=[{id:`search`,referrer:`Search Engines`,medium:`organic`,views:625},{id:`google`,parentId:`search`,referrer:`Google`,date:`2026-06-30`,href:`https://google.com`,views:485},{id:`google-search`,parentId:`google`,referrer:`Google Search`,date:`2026-06-30`,href:`https://google.com/search`,views:420},{id:`google-images`,parentId:`google`,referrer:`Google Images`,date:`2026-06-30`,href:`https://images.google.com`,views:65},{id:`bing`,parentId:`search`,referrer:`Bing`,date:`2026-06-29`,href:`https://bing.com`,views:86},{id:`duckduckgo`,parentId:`search`,referrer:`DuckDuckGo`,date:`2026-06-28`,href:`https://duckduckgo.com`,views:39},{id:`yahoo`,parentId:`search`,referrer:`Yahoo`,date:`2026-06-27`,href:`https://yahoo.com`,views:14},{id:`social`,referrer:`Social`,medium:`social`,views:345},{id:`facebook`,parentId:`social`,referrer:`Facebook`,date:`2026-06-26`,href:`https://facebook.com`,views:210},{id:`x`,parentId:`social`,referrer:`X`,date:`2026-06-25`,href:`https://x.com`,views:135},{id:`direct`,referrer:`Direct`,medium:`direct`,views:251}],we=[{id:`tags`,title:`Tags (44)`,views:44},{id:`tag-performance`,parentId:`tags`,title:`/tag/performance`,href:`https://example.com/tag/performance`,views:18},{id:`tag-analytics`,parentId:`tags`,title:`/tag/analytics`,href:`https://example.com/tag/analytics`,views:12},{id:`tag-jetpack`,parentId:`tags`,title:`/tag/jetpack`,href:`https://example.com/tag/jetpack`,views:8},{id:`tag-wordpress`,parentId:`tags`,title:`/tag/wordpress`,href:`https://example.com/tag/wordpress`,views:6},{id:`categories`,title:`Categories (33)`,views:33},{id:`category-news`,parentId:`categories`,title:`/category/news`,href:`https://example.com/category/news`,views:21},{id:`category-reviews`,parentId:`categories`,title:`/category/reviews`,href:`https://example.com/category/reviews`,views:12},{id:`dates`,title:`Dates (7)`,views:7},{id:`date-2026-06`,parentId:`dates`,title:`/2026/06`,href:`https://example.com/2026/06`,views:4},{id:`date-2026-05`,parentId:`dates`,title:`/2026/05`,href:`https://example.com/2026/05`,views:3}],Te=[{value:`organic`,label:`Organic`},{value:`social`,label:`Social`},{value:`direct`,label:`Direct`}],F=[{id:`referrer`,label:`Referrer`,enableGlobalSearch:!0,render:pe},{id:`date`,label:`Date`,render:_e},{id:`views`,label:`Views`,render:ve},{id:`medium`,label:`Medium`,elements:Te,filterBy:{operators:[`isAny`]}}],I={referrer:{width:`100%`},date:{align:`end`},views:{align:`end`}},Ee={title:{width:`100%`},views:{align:`end`}},L={fields:[`referrer`,`views`],layout:{styles:I}},De={fields:[`referrer`,`date`,`views`],layout:{styles:I}},R={sort:{field:`views`,direction:`desc`},fields:[`referrer`,`views`],layout:{styles:I}},z={fields:[`title`,`views`],layout:{styles:Ee}},B=[{id:`title`,label:`Title`,enableGlobalSearch:!0,render:he},{id:`views`,label:`Views`,render:ye}],V={title:`Packages/Premium Analytics/UI/DataViewsDrilldownNative`,component:le,tags:[`autodocs`],argTypes:{hideLevelMarkers:{control:`boolean`}},args:{hideLevelMarkers:!1}},H={args:{data:P,fields:F,getItemId:be,getItemParentId:xe,initialView:L},parameters:{docs:{description:{story:"DataViews' native hierarchy rendering: `view.showLevels` plus `getItemLevel`, with levels drawn as em-dash markers on the title field. Search and filter keep matches under their ancestors, and sort orders within each level. The hidden Medium field is filterable so the default DataViews filter control appears next to search."}}}},U={args:{...H.args,hideLevelMarkers:!0},parameters:{docs:{description:{story:`The one-line CSS override the native rendering leaves room for: the em-dash marker span is hidden but keeps its layout box, so rows indent by depth with plain whitespace.`}}}},W={args:{...H.args,initialView:De}},G={args:{...H.args,initialView:{...L,search:`Google`}},parameters:{docs:{description:{story:`Search keeps matches under their ancestors instead of orphaning them: searching "Google" surfaces Google, Google Search, and Google Images, still nested under Search Engines. Clear the search to see the full tree.`}}}},K={args:{...H.args,initialView:R},parameters:{docs:{description:{story:`Sorting orders within each level, not globally: top-level rows sort against each other and children sort within their parent, so the tree stays intact. Sorted by Views (desc) here.`}}}},q={args:{...H.args,isLoading:!0}},J={args:{...H.args,data:[],empty:(0,N.jsx)(`div`,{children:`No referrers found.`})}},Y={args:{data:we,fields:B,getItemId:Se,getItemParentId:Ce,initialView:z,hideLevelMarkers:!0,collapsible:!0,defaultExpanded:`none`},parameters:{docs:{description:{story:`The Posts & Pages › Archives tab: archive pages grouped under their type, folded like the other drilldown reports, every row at the title weight.`}}}},X={args:{...H.args,collapsible:!0,hideLevelMarkers:!0},parameters:{docs:{description:{story:`The local collapse layer over the static native rendering: rows with children get a chevron, and folding one drops its whole subtree from the table. Sits behind a prop so it can be dropped once core ships native collapse (WordPress/gutenberg#80360).`}}}},Z={args:{...X.args,defaultExpanded:`none`},parameters:{docs:{description:{story:`Opening on the top level only, for a report whose groups are long. Searching still answers: the matches’ ancestors unfold for as long as the search is on, then fold back when it clears.`}}}},Q={args:{...Z.args,data:P.map(e=>e.id===`search`?{...e,referrer:`${e.referrer} and Aggregators, Syndication Partners and Every Other Long-Winded Category Name a Site Might Report`}:e)},parameters:{docs:{description:{story:`A group label wider than the title column. The title has to give way rather than carry the chevron out of the report card, which clips its overflow — a chevron pushed past that edge cannot be reached with a mouse at all, leaving the group unopenable.`}}}},$={args:{...Q.args,fields:F.map(e=>e.id===`referrer`?{...e,render:me}:e)},parameters:{docs:{description:{story:`The same over-long label, rendered the way the report pages render theirs: a thumbnail beside the text. The cell clips a flex row without ellipsizing it, so the consumer puts the ellipsis on its own label — the rule the Authors and Referrers reports each carry.`}}}},Oe=[`Default`,`HiddenLevelMarkers`,`MultipleColumns`,`Search`,`Sorted`,`Loading`,`Empty`,`Archives`,`Collapsible`,`CollapsedByDefault`,`LongGroupTitle`,`LongGroupTitleWithThumbnail`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
    initialView: archiveInitialView,
    hideLevelMarkers: true,
    collapsible: true,
    defaultExpanded: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: 'The Posts & Pages › Archives tab: archive pages grouped under their type, folded like the other drilldown reports, every row at the title weight.'
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
        story: 'The local collapse layer over the static native rendering: rows with children get a chevron, and folding one drops its whole subtree from the table. Sits behind a prop so it can be dropped once core ships native collapse (WordPress/gutenberg#80360).'
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
}`,...$.parameters?.docs?.source}}}}))();export{Y as Archives,Z as CollapsedByDefault,X as Collapsible,H as Default,J as Empty,U as HiddenLevelMarkers,q as Loading,Q as LongGroupTitle,$ as LongGroupTitleWithThumbnail,W as MultipleColumns,G as Search,K as Sorted,Oe as __namedExportsOrder,V as default};