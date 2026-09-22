import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Sl as a,t as o}from"./build-module-2iv4IIRq.js";import{Et as ee}from"./build-module-l8c-_EUg2.js";import{Ct as s,m as c,wt as te}from"./hooks-D_R3QS6O.js";import{t as l,x as ne}from"./src-C-E2d-Lb.js";import{t as u}from"./src-Cm5g6meW.js";import{t as d,u as f}from"./src-CJGEmgc4.js";import{n as re,s as p,t as ie}from"./src-C1JS2_CO.js";import{Dn as m,r as h,tn as g,wt as ae}from"./date-period-dropdown-vHTUvO8h.js";import{n as oe}from"./abbreviated-value-CL9nnQ3l.js";import{n as se,t as _}from"./highlight-group-DU_2OKT3.js";import{c as v,i as ce,r as le}from"./register-report-mocks-D03YAGqA.js";import{t as ue}from"./widget-state-DdTpFy_m.js";import{t as de}from"./src-DlrgbfLC.js";import{a as fe,c as y,i as b,l as x,n as S,o as pe,r as C,s as me}from"./with-widget-canvas-CGTmPkuu.js";var w,T,E,he=e((()=>{w=`_root_cmi9g_3`,T=`_content_cmi9g_9`,E={root:w,content:T}}));function ge(e){return f(e?.views_best_day)}function _e(){let{data:e,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=ae(),c=e?.stats,l=ge(c),u=s(c,`views_best_day_total`),d=s(c,`views`),f=l===void 0||!u;return(0,O.jsx)(ee,{className:E.root,direction:`column`,children:(0,O.jsx)(`div`,{className:E.content,children:(0,O.jsx)(ue,{isLoading:n,isFetching:r,isError:i&&f,isEmpty:f,error:te(a,{retryDescription:t(`We couldn't load your most popular day. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:()=>void o()}),empty:{icon:ne,description:t(`Not enough views yet to pick a most popular day.`,`jetpack-premium-analytics-pkg`)},children:l!==void 0&&u!==void 0&&(0,O.jsx)(A,{date:l,views:u,share:d?u/d:void 0})})})})}function D({attributes:e={}}){return(0,O.jsx)(c,{attributes:e,children:(0,O.jsx)(_e,{})})}var O,k,A,j=e((()=>{h(),d(),ie(),l(),de(),n(),u(),he(),O=i(),k={type:`number`,options:{useMultipliers:!0}},A=({date:e,views:n,share:i})=>(0,O.jsxs)(se,{children:[(0,O.jsx)(_,{label:t(`Day`,`jetpack-premium-analytics-pkg`),value:p(e,`short`),caption:p(e,`year`)}),(0,O.jsx)(_,{label:t(`Views`,`jetpack-premium-analytics-pkg`),value:(0,O.jsx)(oe,{value:n,dataFormat:k}),caption:i===void 0?void 0:r(t(`%s of views`,`jetpack-premium-analytics-pkg`),re(i,`percentage`,{decimals:2,signDisplay:`never`}))})]})})),M,N=e((()=>{o(),M={icon:a}})),P,F,I,L,R,z,B,ve=e((()=>{P=`jpa/most-popular-day`,F=`Most popular day`,I=`The day your site received the most views.`,L={content:`The single day your site drew the most views since you started tracking, and how much of your all-time views it accounts for.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return m.removeQueries({queryKey:[`stats`,`site`]}),v(G,e),()=>{v(G,null),m.removeQueries({queryKey:[`stats`,`site`]})}}function H(){return(0,U.jsx)(D,{attributes:{reportParams:g()}})}function ye(e){return(0,U.jsx)(me,{...e,widgetType:b(B,M),renderModule:W,renderComponent:D,attributes:{reportParams:g(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),y(),fe(),S(),le(),j(),N(),ve(),U=i(),ce(),W=`storybook/most-popular-day`,G=`proxy/v1.1/stats`,K={title:`Packages/Premium Analytics/Widgets/MostPopularDay`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular day" widget ports the Jetpack Stats all-time highlight: the single day your site drew the most views, with that day's view count and its share of all views. The value comes from a site-wide summary that does not depend on the dashboard date range.`}}}},q={render:H,decorators:[C]},J={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`error`)},X={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`empty`)},Q={render:e=>(0,U.jsx)(ye,{...e}),args:{...pe},argTypes:{...x}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:'Resolved without a usable `views_best_day`: the widget shows its empty state\n(the neutral calendar glyph and the "not enough views" message).',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostPopularDayDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};