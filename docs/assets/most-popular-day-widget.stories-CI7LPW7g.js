import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{an as a}from"./build-module-CQU8Y-qt.js";import{t as o}from"./src-7kDQKmrA.js";import{d as s,t as c}from"./src-BGYQLfcD.js";import{n as l,s as u,t as d}from"./src-DT0aOK6x.js";import{En as f,Ut as ee,dn as p,t as m}from"./src-DBz8z7eI.js";import{n as te}from"./abbreviated-value-JdmMZGvb.js";import{gt as ne,ht as h,m as re}from"./charts-provider-No68O0pU.js";import{n as ie,r as ae,s as g}from"./register-report-mocks-BP1jYNOr.js";import{t as oe}from"./widget-state-CS3s8mfV.js";import{n as se,t as _}from"./highlight-group-Dfb1ocvp.js";import{t as v}from"./src-C9swWz9N.js";import{a as y,g as b,h as ce,i as le,m as ue,n as de,p as x,r as S}from"./with-widget-canvas-e842QHTf.js";var C,w,T,E=e((()=>{C=`_root_cmi9g_3`,w=`_content_cmi9g_9`,T={root:C,content:w}}));function fe(e){return s(e?.views_best_day)}function pe(){let{data:e,isLoading:t,isFetching:r,isError:i,error:o,refetch:s}=ee(),c=e?.stats,l=fe(c),u=h(c,`views_best_day_total`),d=h(c,`views`),f=l===void 0||!u;return(0,O.jsx)(a,{className:T.root,direction:`column`,children:(0,O.jsx)(`div`,{className:T.content,children:(0,O.jsx)(oe,{isLoading:t,isFetching:r,isError:i&&f,isEmpty:f,error:ne(o,{retryDescription:n(`We couldn't load your most popular day. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:()=>void s()}),empty:{description:n(`Your best day for traffic will show here once visitors start arriving.`,`jetpack-premium-analytics-pkg`)},children:l!==void 0&&u!==void 0&&(0,O.jsx)(A,{date:l,views:u,share:d?u/d:void 0})})})})}function D({attributes:e={}}){return(0,O.jsx)(re,{attributes:e,children:(0,O.jsx)(pe,{})})}var O,k,A,me=e((()=>{m(),c(),d(),v(),r(),o(),E(),O=i(),k={type:`number`,options:{useMultipliers:!0}},A=({date:e,views:r,share:i})=>(0,O.jsxs)(se,{children:[(0,O.jsx)(_,{label:n(`Day`,`jetpack-premium-analytics-pkg`),value:u(e,`short`),caption:u(e,`year`)}),(0,O.jsx)(_,{label:n(`Views`,`jetpack-premium-analytics-pkg`),value:(0,O.jsx)(te,{value:r,dataFormat:k}),caption:i===void 0?void 0:t(n(`%s of views`,`jetpack-premium-analytics-pkg`),l(i,`percentage`,{decimals:2,signDisplay:`never`}))})]})})),j,M=e((()=>{j={}})),N,P,F,I,L,R,z,B,he=e((()=>{N=`jpa/most-popular-day`,P=`jpa/calendar`,F=`Most popular day`,I=`The day your site received the most views.`,L={content:`The single day your site drew the most views since you started tracking, and how much of your all-time views it accounts for.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return f.removeQueries({queryKey:[`stats`,`site`]}),g(G,e),()=>{g(G,null),f.removeQueries({queryKey:[`stats`,`site`]})}}function H(){return(0,U.jsx)(D,{attributes:{reportParams:p()}})}function ge(e){return(0,U.jsx)(ue,{...e,widgetType:le(B,j),renderModule:W,renderComponent:D,attributes:{reportParams:p(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ce(),y(),de(),ie(),me(),M(),he(),U=i(),ae(),W=`storybook/most-popular-day`,G=`proxy/v1.1/stats`,K={title:`Packages/Premium Analytics/Widgets/MostPopularDay`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular day" widget ports the Jetpack Stats all-time highlight: the single day your site drew the most views, with that day's view count and its share of all views. The value comes from a site-wide summary that does not depend on the dashboard date range.`}}}},q={render:H,decorators:[S]},J={render:H,tags:[`!autodocs`],decorators:[S],beforeEach:()=>V(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[S],beforeEach:()=>V(`error`)},X={render:H,tags:[`!autodocs`],decorators:[S],beforeEach:()=>V(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[S],beforeEach:()=>V(`empty`)},Q={render:e=>(0,U.jsx)(ge,{...e}),args:{...x},argTypes:{...b}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};