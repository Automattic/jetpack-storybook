import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{I as a,Rt as o,Vt as ee,gt as s}from"./charts-provider-C9ojlUj8.js";import{Zr as c}from"./build-module-BEvijrel.js";import{t as l}from"./src-DwJsks-j.js";import{o as u,t as d}from"./src-M-MiwiMQ.js";import{f,i as p,t as m}from"./src-Dn7O-lFZ.js";import{$t as te,Qt as ne,Sn as h,Un as g,t as _}from"./src-BcILQ8ng.js";import{n as v}from"./abbreviated-value-ByCB1kqt.js";import{t as re}from"./widget-state-DnbF8hrz.js";import{t as ie}from"./src-DPkpeJi9.js";import{n as ae,r as oe,s as y}from"./register-report-mocks-DEKgkFm4.js";import{n as se,t as b}from"./highlight-group-sjd2j0V4.js";import{a as x,c as S,i as C,l as w,o as T,r as E,s as ce,u as le}from"./with-widget-canvas-Cwe-ucMl.js";var D,O,k,ue=e((()=>{D=`_root_cmi9g_3`,O=`_content_cmi9g_9`,k={root:D,content:O}}));function de(e){return u(e?.views_best_day)}function fe(){let{data:e,isLoading:t,isFetching:r,isError:i,error:a,refetch:s}=ne({stat_fields:te}),l=e?.stats,u=de(l),d=o(l,`views_best_day_total`),f=o(l,`views`),p=u===void 0||!d;return(0,j.jsx)(c,{className:k.root,direction:`column`,children:(0,j.jsx)(`div`,{className:k.content,children:(0,j.jsx)(re,{isLoading:t,isFetching:r,isError:i&&p,isEmpty:p,error:ee(a,{retryDescription:n(`We couldn't load your most popular day. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:()=>void s()}),empty:{description:n(`Your best day for traffic will show here once visitors start arriving.`,`jetpack-premium-analytics-pkg`)},children:u!==void 0&&d!==void 0&&(0,j.jsx)(M,{date:u,views:d,share:f?d/f:void 0})})})})}function A({attributes:e={}}){return(0,j.jsx)(a,{attributes:e,children:(0,j.jsx)(fe,{})})}var j,M,pe=e((()=>{_(),d(),m(),ie(),r(),l(),ue(),j=i(),M=({date:e,views:r,share:i})=>(0,j.jsxs)(se,{children:[(0,j.jsx)(b,{label:n(`Day`,`jetpack-premium-analytics-pkg`),value:f(e,`short`),caption:f(e,`year`)}),(0,j.jsx)(b,{label:n(`Views`,`jetpack-premium-analytics-pkg`),value:(0,j.jsx)(v,{value:r,dataFormat:s}),caption:i===void 0?void 0:t(n(`%s of views`,`jetpack-premium-analytics-pkg`),p(i,`percentage`,{decimals:2,signDisplay:`never`}))})]})})),N,P,F,I,L,R,z,B,me=e((()=>{N=`jpa/most-popular-day`,P=`jpa/calendar`,F=`Most popular day`,I=`The day your site received the most views.`,L={content:`The single day your site drew the most views since you started tracking, and how much of your all-time views it accounts for.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return g.removeQueries({queryKey:[`stats`,`site`]}),y(G,e),()=>{y(G,null),g.removeQueries({queryKey:[`stats`,`site`]})}}function H(){return(0,U.jsx)(A,{attributes:{reportParams:h()}})}function he(e){return(0,U.jsx)(S,{...e,widgetType:x(B),renderModule:W,renderComponent:A,attributes:{reportParams:h(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),w(),T(),E(),ae(),pe(),me(),U=i(),oe(),W=`storybook/most-popular-day`,G=`proxy/v1.1/stats`,K={title:`Packages/Premium Analytics/Widgets/MostPopularDay`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular day" widget ports the Jetpack Stats all-time highlight: the single day your site drew the most views, with that day's view count and its share of all views. The value comes from a site-wide summary that does not depend on the dashboard date range.`}}}},q={render:H,decorators:[C]},J={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`error`)},X={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`empty`)},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(he,{...e}),args:{...ce},argTypes:{...le}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
  render: args => <MostPopularDayDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};