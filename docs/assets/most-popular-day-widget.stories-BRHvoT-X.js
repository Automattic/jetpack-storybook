import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{F as a,Mt as ee,jt as o}from"./charts-provider-CXD9czsp.js";import{an as te}from"./build-module-BN2Djb9A.js";import{t as s}from"./src-D1epzAXu.js";import{d as c,t as l}from"./src-DFqe9oto.js";import{n as u,s as d,t as f}from"./src-B296hTeo.js";import{Mn as p,hn as m,qt as ne,t as h}from"./src-BEwaewMJ.js";import{n as re}from"./abbreviated-value-BGOJYS1x.js";import{t as ie}from"./widget-state-BHtIizq9.js";import{i as g}from"./with-story-router-DxdHc1hO.js";import{n as ae,r as oe,s as _}from"./register-report-mocks-D47Rougd.js";import{n as v,t as y}from"./highlight-group-r71VgkIp.js";import{a as b,g as x,h as S,i as se,m as ce,n as C,p as w,r as T}from"./with-widget-canvas-DLx8XNU3.js";var E,D,O,le=e((()=>{E=`_root_cmi9g_3`,D=`_content_cmi9g_9`,O={root:E,content:D}}));function ue(e){return c(e?.views_best_day)}function de(){let{data:e,isLoading:t,isFetching:r,isError:i,error:a,refetch:s}=ne(),c=e?.stats,l=ue(c),u=o(c,`views_best_day_total`),d=o(c,`views`),f=l===void 0||!u;return(0,A.jsx)(te,{className:O.root,direction:`column`,children:(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(ie,{isLoading:t,isFetching:r,isError:i&&f,isEmpty:f,error:ee(a,{retryDescription:n(`We couldn't load your most popular day. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:()=>void s()}),empty:{description:n(`Your best day for traffic will show here once visitors start arriving.`,`jetpack-premium-analytics-pkg`)},children:l!==void 0&&u!==void 0&&(0,A.jsx)(M,{date:l,views:u,share:d?u/d:void 0})})})})}function k({attributes:e={}}){return(0,A.jsx)(a,{attributes:e,children:(0,A.jsx)(de,{})})}var A,j,M,fe=e((()=>{h(),l(),f(),g(),r(),s(),le(),A=i(),j={type:`number`,options:{useMultipliers:!0}},M=({date:e,views:r,share:i})=>(0,A.jsxs)(v,{children:[(0,A.jsx)(y,{label:n(`Day`,`jetpack-premium-analytics-pkg`),value:d(e,`short`),caption:d(e,`year`)}),(0,A.jsx)(y,{label:n(`Views`,`jetpack-premium-analytics-pkg`),value:(0,A.jsx)(re,{value:r,dataFormat:j}),caption:i===void 0?void 0:t(n(`%s of views`,`jetpack-premium-analytics-pkg`),u(i,`percentage`,{decimals:2,signDisplay:`never`}))})]})})),N,P,F,I,L,R,z,B,pe=e((()=>{N=`jpa/most-popular-day`,P=`jpa/calendar`,F=`Most popular day`,I=`The day your site received the most views.`,L={content:`The single day your site drew the most views since you started tracking, and how much of your all-time views it accounts for.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return p.removeQueries({queryKey:[`stats`,`site`]}),_(G,e),()=>{_(G,null),p.removeQueries({queryKey:[`stats`,`site`]})}}function H(){return(0,U.jsx)(k,{attributes:{reportParams:m()}})}function me(e){return(0,U.jsx)(ce,{...e,widgetType:se(B),renderModule:W,renderComponent:k,attributes:{reportParams:m(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),S(),b(),C(),ae(),fe(),pe(),U=i(),oe(),W=`storybook/most-popular-day`,G=`proxy/v1.1/stats`,K={title:`Packages/Premium Analytics/Widgets/MostPopularDay`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular day" widget ports the Jetpack Stats all-time highlight: the single day your site drew the most views, with that day's view count and its share of all views. The value comes from a site-wide summary that does not depend on the dashboard date range.`}}}},q={render:H,decorators:[T]},J={render:H,tags:[`!autodocs`],decorators:[T],beforeEach:()=>V(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[T],beforeEach:()=>V(`error`)},X={render:H,tags:[`!autodocs`],decorators:[T],beforeEach:()=>V(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[T],beforeEach:()=>V(`empty`)},Q={render:e=>(0,U.jsx)(me,{...e}),args:{...w},argTypes:{...x}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularDay,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the best day for views and its share of all views.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularDay,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('loading')
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularDay,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('error')
}`,...Y.parameters?.docs?.source},description:{story:`The reader cannot see this site's stats — a permission-gated 403. The widget
states that neutrally and offers no Retry, which could not help.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularDay,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('error-retryable')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
widget shows its retryable copy with a Retry action, which re-runs the query
(still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularDay,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('empty')
}`,...Z.parameters?.docs?.source},description:{story:"Resolved without a usable `views_best_day`: the widget shows its empty state.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostPopularDayDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};