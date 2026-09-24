import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Uu as a,gl as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as l}from"./build-module-l8c-_EUg2.js";import{m as u,r as ee}from"./hooks-w3fv1ge0.js";import{o as te,t as d}from"./src-C-E2d-Lb.js";import{t as f}from"./src-Dln62PI4.js";import{$t as p,E as m,t as h}from"./src-BEJvnCH-.js";import{Et as ne}from"./helpers-CGoL0sfo.js";import"./constants-B1kGztHF.js";import{r as re,t as ie}from"./leaderboard-skeleton-DuMkpEl6.js";import{c as g,i as ae,r as oe}from"./register-report-mocks-BUuguKfM.js";import{A as se,N as _,S as v,j as y,v as ce,w as le}from"./report-metric-B7coQtJX.js";import{a as b,r as x}from"./src-mKotuetb.js";import{t as ue}from"./widget-state-DuB2e-Jb.js";import{t as de}from"./src-CZ6cjag0.js";import{a as fe,d as pe,f as me,h as S,i as he,m as ge,n as _e,p as ve,r as C,u as ye}from"./with-widget-canvas-CEqENTSh.js";var w,T,E,D,O=e((()=>{w=`_root_15if1_1`,T=`_content_15if1_9`,E=`_childList_15if1_19`,D={root:w,content:T,childList:E}}));function k({max:e}){let{data:t,isLoading:n,isFetching:r,isError:i,refetch:o}=m({max:e}),s=(0,a.useMemo)(()=>(t?.data?.[0]?.items??[]).slice(0,e>0?e:void 0).map(e=>{let t=e.link??e.labelText,n=(e.children??[]).map(e=>({id:e.link??`${t}-${e.label}`,label:e.label,labelIcon:e.labelIcon,link:e.link}));return{id:t,label:e.labelText,labelIcon:e.label[0]?.labelIcon??``,value:e.value,link:e.link,children:n}}),[t,e]);return{data:s,isLoading:n,isFetching:r,isError:s.length===0&&i,refetch:o}}var A=e((()=>{s(),h()}));function j({members:e}){return(0,P.jsx)(l,{direction:`column`,className:D.childList,children:e.map(e=>(0,P.jsx)(se,{label:e.label,media:{kind:`icon`,icon:x(e.labelIcon)},action:_({href:b(e.link)??void 0,hasChildren:!1})},e.id))})}function M(){let{data:e,isLoading:n,isFetching:i,isError:o,refetch:s}=k({max:10}),{drillDownItem:c,drillDown:u,resetDrillDown:d}=ee(),f=(0,a.useMemo)(()=>c?e.find(e=>e.label===c)??null:null,[e,c]);(0,a.useEffect)(()=>{c&&!f&&d()},[c,f,d]);let p=(0,a.useMemo)(()=>{let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let i=e.children.length>0;return{id:e.id,currentValue:e.value,currentShare:ne(e.value,n),...y({label:e.label,media:{kind:`icon`,icon:x(e.labelIcon)},action:_({href:b(e.link)??void 0,hasChildren:i,drillDown:{onClick:()=>u(e.label),ariaLabel:r(t(`View the tags and categories in %s`,`jetpack-premium-analytics-pkg`),e.label)}})})}})},[e,u]);return(0,P.jsxs)(l,{className:D.root,children:[(0,P.jsxs)(`div`,{className:D.content,children:[f&&(0,P.jsx)(le,{label:t(`All tags & categories`,`jetpack-premium-analytics-pkg`),onClick:d}),(0,P.jsx)(ue,{isLoading:n,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load tags & categories. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:te,description:t(`Learn about your most visited tags & categories to track engaging topics.`,`jetpack-premium-analytics-pkg`)},renderLoading:f?void 0:(0,P.jsx)(ie,{rows:10}),children:f?(0,P.jsx)(j,{members:f.children}):(0,P.jsx)(re,{data:p,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!1,decimals:0}}})})]}),(0,P.jsx)(v,{children:(0,P.jsx)(ce,{report:`tags`})})]})}function N({attributes:e={}}){return(0,P.jsx)(u,{attributes:e,children:(0,P.jsx)(M,{})})}var P,be=e((()=>{de(),d(),s(),n(),f(),O(),A(),P=i()})),F,xe=e((()=>{c(),F={icon:o,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,Se=e((()=>{I=`jpa/tags`,L=`Top tags & categories in the last 7 days`,R=`Your most visited tags and categories, ranked by views.`,z={content:`The tags and categories associated with your most-viewed content, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(N,{attributes:{reportParams:p()}})}function Ce(e){return(0,W.jsx)(N,{...e})}function we(e){return(0,W.jsx)(pe,{...e,widgetType:K,renderModule:G,renderComponent:Ce,attributes:{reportParams:p(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),me(),ge(),fe(),_e(),oe(),be(),xe(),Se(),W=i(),ae(),G=`storybook/tags`,K=he(H,F),q={title:`Packages/Premium Analytics/Widgets/Tags`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Tags & categories" widget. Displays the site's most visited tags and categories over the seven days ending yesterday, ranked by views — the endpoint takes no date parameters, so the section's date filter does not reach it. Single tags/categories link to their archive; grouped rows (several tags/categories sharing posts) drill down to their members. Ported from the Jetpack Stats Tags & categories module.`}}}},J={render:U,decorators:[C,S]},Y={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(g(`stats/tags`,`loading`),()=>g(`stats/tags`,null))},X={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(g(`stats/tags`,`error`),()=>g(`stats/tags`,null))},Z={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(g(`stats/tags`,`empty`),()=>g(`stats/tags`,null))},Q={render:e=>(0,W.jsx)(we,{...e}),args:{...ye},argTypes:{...ve},decorators:[S]},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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