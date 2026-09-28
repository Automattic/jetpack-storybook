import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,gl as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as l}from"./build-module-CfSFqaK72.js";import{m as u,r as ee}from"./hooks-C6uC8D6p.js";import{o as te,t as d}from"./src-C-E2d-Lb.js";import{t as f}from"./src-BTWI2D1R.js";import{E as p,nn as m,t as h}from"./src-C9rlvqIx.js";import{Et as ne}from"./helpers-C3PYD0ul.js";import"./constants-B1kGztHF.js";import{r as re,t as ie}from"./leaderboard-skeleton-Bj8f8psN.js";import{c as g,i as ae,r as oe}from"./register-report-mocks-jOVWgqW2.js";import{A as se,N as _,S as v,j as ce,v as le,w as ue}from"./report-metric-8GVNWEP9.js";import{a as y,r as b}from"./src-C0yLGSLB.js";import{t as de}from"./widget-state-DFM0RGEq.js";import{t as fe}from"./src-BYRMloPq.js";import{a as x,d as pe,f as me,h as S,i as he,m as ge,n as _e,p as ve,r as C,u as ye}from"./with-widget-canvas-Co9pnelY.js";var w,T,E,D,be=e((()=>{w=`_root_15if1_1`,T=`_content_15if1_9`,E=`_childList_15if1_19`,D={root:w,content:T,childList:E}}));function O({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=p({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var k=e((()=>{s(),h()}));function A({members:e}){return(0,N.jsx)(l,{direction:`column`,className:D.childList,children:e.map(e=>(0,N.jsx)(se,{label:e.label,media:{kind:`icon`,icon:b(e.labelIcon)},action:_({href:y(e.link)??void 0,hasChildren:!1})},e.id))})}function j(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=O({max:10}),{drillDownItem:c,drillDown:u,resetDrillDown:d}=ee(),f=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!f&&d()},[c,f,d]);let p=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:ne(e.value,n),...ce({label:e.label,media:{kind:`icon`,icon:b(e.labelIcon)},action:_({href:y(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>u(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,u]);return(0,N.jsxs)(l,{className:D.root,children:[(0,N.jsxs)(`div`,{className:D.content,children:[f&&(0,N.jsx)(ue,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:d}),(0,N.jsx)(de,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:te,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:f?void 0:(0,N.jsx)(ie,{rows:10}),children:f?(0,N.jsx)(A,{members:f.children}):(0,N.jsx)(re,{data:p,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,N.jsx)(v,{children:(0,N.jsx)(le,{report:`tags`})})]})}function M({attributes:e={}}){return(0,N.jsx)(u,{attributes:e,children:(0,N.jsx)(j,{})})}var N,xe=e((()=>{fe(),d(),s(),n(),f(),be(),k(),N=i()})),P,Se=e((()=>{c(),P={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,Ce=e((()=>{F=`jpa/tags`,I=`Top tags & categories in the last 7 days`,L=`Your most visited tags and categories, ranked by views.`,R={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(){return(0,W.jsx)(M,{attributes:{reportParams:m()}})}function U(e){return(0,W.jsx)(M,{...e})}function we(e){return(0,W.jsx)(pe,{...e,widgetType:K,renderModule:G,renderComponent:U,attributes:{reportParams:m(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),me(),ge(),x(),_e(),oe(),xe(),Se(),Ce(),W=i(),ae(),G=`storybook/tags`,K=he(V,P),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:H,decorators:[C,S]},Y={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(g(`stats/tags`,`loading`),()=>g(`stats/tags`,null))},X={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(g(`stats/tags`,`error`),()=>g(`stats/tags`,null))},Z={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(g(`stats/tags`,`empty`),()=>g(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...ye},argTypes:{...ve},decorators:[S]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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