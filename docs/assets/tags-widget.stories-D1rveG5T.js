import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{h as a,t as o}from"./build-module-DuNGIx6S.js";import{Y as s,ml as c,t as l}from"./build-module-CR6EsQjA.js";import{pn as u,t as d}from"./src-BnlbLa7i.js";import{g as f,r as p}from"./hooks-CHniCUra.js";import{o as ee,t as m}from"./src-CldFJNXL.js";import{T as te,Zt as h,t as g}from"./src-DPMzKwgm.js";import"./constants-B1kGztHF.js";import{pt as ne}from"./chart-tooltip-tfgIVqia.js";import{r as _}from"./src-BARi3glv2.js";import{r as re,t as ie}from"./leaderboard-skeleton-Bz9LRTuS.js";import{F as v,G as ae,K as oe,M as y,N as b,S as se,Y as x,b as ce,w as le}from"./report-metric-CdnGUq3r.js";import{t as ue}from"./widget-state-m0sNKTRN.js";import{C as de,D as fe,E as pe,O as me,S as he,T as ge,b as _e,k as S,t as ve,w as ye,x as C}from"./src-n-09rV5E.js";var w,T,E,D,be=e((()=>{w=`_root_15if1_1`,T=`_content_15if1_9`,E=`_childList_15if1_19`,D={root:w,content:T,childList:E}}));function O({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=te({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var k=e((()=>{o(),g()}));function A({members:e}){return(0,N.jsx)(u,{direction:`column`,className:D.childList,children:e.map(e=>(0,N.jsx)(y,{label:e.label,media:{kind:`icon`,icon:P(e.labelIcon)},action:v({href:_(e.link)??void 0,hasChildren:!1})},e.id))})}function j(){let{data:e,isLoading:r,isFetching:i,isError:o,refetch:s}=O({max:10}),{drillDownItem:c,drillDown:l,resetDrillDown:d}=p(),f=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!f&&d()},[c,f,d]);let m=(0,a.useMemo)(()=>{let r=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:ne(e.value,r),...b({label:e.label,media:{kind:`icon`,icon:P(e.labelIcon)},action:v({href:_(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>l(e.label),ariaLabel:t(n(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,l]);return(0,N.jsxs)(u,{className:D.root,children:[(0,N.jsxs)(`div`,{className:D.content,children:[f&&(0,N.jsx)(le,{label:n(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:d}),(0,N.jsx)(ue,{isLoading:r,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:n(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:n(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ee,description:n(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:f?void 0:(0,N.jsx)(ie,{rows:10}),children:f?(0,N.jsx)(A,{members:f.children}):(0,N.jsx)(re,{data:m,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,N.jsx)(se,{children:(0,N.jsx)(ce,{report:`tags`})})]})}function M({attributes:e={}}){return(0,N.jsx)(f,{attributes:e,children:(0,N.jsx)(j,{})})}var N,P,xe=e((()=>{ve(),m(),o(),r(),l(),d(),be(),k(),N=i(),P=e=>e===`folder`?c:s})),F,Se=e((()=>{l(),F={icon:c,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,Ce=e((()=>{I=`jpa/tags`,L=`Top tags & categories`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(M,{attributes:{reportParams:h()}})}function we(e){return(0,W.jsx)(M,{...e})}function Te(e){return(0,W.jsx)(ge,{...e,widgetType:K,renderModule:G,renderComponent:we,attributes:{reportParams:h(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),pe(),me(),de(),_e(),ae(),xe(),Se(),Ce(),W=i(),oe(),G=`storybook/tags`,K=he(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[C,S]},Y={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(x(`stats/tags`,`loading`),()=>x(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(x(`stats/tags`,`error`),()=>x(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(x(`stats/tags`,`empty`),()=>x(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{...ye},argTypes:{...fe},decorators:[S]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/tags', 'loading');
    return () => setReportMockState('stats/tags', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/tags', 'error');
    return () => setReportMockState('stats/tags', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderTags,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/tags', 'empty');
    return () => setReportMockState('stats/tags', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral tag glyph
and "Learn about your most visited tags & categories to track engaging topics.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TagsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};