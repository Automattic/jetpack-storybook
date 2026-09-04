import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o,Y as s,t as c,vl as l}from"./build-module-zwSmKorH.js";import{Kt as u}from"./build-module-DkueWSrd.js";import{g as d,kt as ee,r as f}from"./hooks-B-btgGBm.js";import{o as te,t as p}from"./src-DFNM1k7F.js";import{t as m}from"./src-BWy2h2l_.js";import{O as ne,en as h,i as g}from"./date-filters-panel-B8opo2uL.js";import{r as _}from"./src-Bfcz4Eu-2.js";import"./constants-B1kGztHF.js";import{r as re,t as ie}from"./leaderboard-skeleton-DGDpEg9w.js";import{F as v,G as ae,K as oe,M as se,N as y,S as ce,Y as b,b as le,w as ue}from"./report-metric-KGnB9vhe.js";import{t as x}from"./widget-state-Dqefb49q.js";import{C as de,D as fe,E as pe,O as me,S as he,T as ge,b as _e,k as S,t as ve,w as ye,x as C}from"./src-0dZ7sF1j.js";var w,T,E,D,be=e((()=>{w=`_root_15if1_1`,T=`_content_15if1_9`,E=`_childList_15if1_19`,D={root:w,content:T,childList:E}}));function O({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=ne({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var k=e((()=>{o(),g()}));function A({members:e}){return(0,N.jsx)(u,{direction:`column`,className:D.childList,children:e.map(e=>(0,N.jsx)(se,{label:e.label,media:{kind:`icon`,icon:P(e.labelIcon)},action:v({href:_(e.link)??void 0,hasChildren:!1})},e.id))})}function j(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=O({max:10}),{drillDownItem:c,drillDown:l,resetDrillDown:d}=f(),p=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!p&&d()},[c,p,d]);let m=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:ee(e.value,n),...y({label:e.label,media:{kind:`icon`,icon:P(e.labelIcon)},action:v({href:_(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>l(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,l]);return(0,N.jsxs)(u,{className:D.root,children:[(0,N.jsxs)(`div`,{className:D.content,children:[p&&(0,N.jsx)(ue,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:d}),(0,N.jsx)(x,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:te,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:p?void 0:(0,N.jsx)(ie,{rows:10}),children:p?(0,N.jsx)(A,{members:p.children}):(0,N.jsx)(re,{data:m,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,N.jsx)(ce,{children:(0,N.jsx)(le,{report:`tags`})})]})}function M({attributes:e={}}){return(0,N.jsx)(d,{attributes:e,children:(0,N.jsx)(j,{})})}var N,P,xe=e((()=>{ve(),p(),o(),n(),c(),m(),be(),k(),N=i(),P=e=>e===`folder`?l:s})),F,Se=e((()=>{c(),F={icon:l,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,Ce=e((()=>{I=`jpa/tags`,L=`Top tags & categories`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(M,{attributes:{reportParams:h()}})}function we(e){return(0,W.jsx)(M,{...e})}function Te(e){return(0,W.jsx)(ge,{...e,widgetType:K,renderModule:G,renderComponent:we,attributes:{reportParams:h(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),pe(),me(),de(),_e(),ae(),xe(),Se(),Ce(),W=i(),oe(),G=`storybook/tags`,K=he(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[C,S]},Y={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(b(`stats/tags`,`loading`),()=>b(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(b(`stats/tags`,`error`),()=>b(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(b(`stats/tags`,`empty`),()=>b(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{...ye},argTypes:{...fe},decorators:[S]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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