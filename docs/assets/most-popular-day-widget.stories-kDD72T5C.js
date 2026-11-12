import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Zr as ee}from"./build-module-BEvijrel.js";import{t as a}from"./src-DwJsks-j.js";import{o,t as s}from"./src-M-MiwiMQ.js";import{f as c,i as l,t as u}from"./src-BDgIJ5V6.js";import{$t as te,Qt as ne,Sn as d,Un as f,t as p}from"./src-BcILQ8ng.js";import{n as re}from"./abbreviated-value--Y_VcBK0.js";import{I as ie,Rt as m,Vt as ae,gt as oe}from"./charts-provider-LX5TXgKz.js";import{t as se}from"./widget-state-DnbF8hrz.js";import{i as ce}from"./with-story-router-CD_EU9Hw.js";import{n as h,r as g,s as _}from"./register-report-mocks-DEKgkFm4.js";import{n as le,t as v}from"./highlight-group-sjd2j0V4.js";import{a as y,c as b,i as x,l as ue,o as de,r as S,s as C,u as w}from"./with-widget-canvas-4KOQfMrY.js";var T,E,D,O=e((()=>{T=`_root_cmi9g_3`,E=`_content_cmi9g_9`,D={root:T,content:E}}));function fe(e){return o(e?.views_best_day)}function pe(){let{data:e,isLoading:t,isFetching:r,isError:i,error:a,refetch:o}=ne({stat_fields:te}),s=e?.stats,c=fe(s),l=m(s,`views_best_day_total`),u=m(s,`views`),d=c===void 0||!l;return(0,A.jsx)(ee,{className:D.root,direction:`column`,children:(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(se,{isLoading:t,isFetching:r,isError:i&&d,isEmpty:d,error:ae(a,{retryDescription:n(`We couldn't load your most popular day. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:()=>void o()}),empty:{description:n(`Your best day for traffic will show here once visitors start arriving.`,`jetpack-premium-analytics-pkg`)},children:c!==void 0&&l!==void 0&&(0,A.jsx)(j,{date:c,views:l,share:u?l/u:void 0})})})})}function k({attributes:e={}}){return(0,A.jsx)(ie,{attributes:e,children:(0,A.jsx)(pe,{})})}var A,j,me=e((()=>{p(),s(),u(),ce(),r(),a(),O(),A=i(),j=({date:e,views:r,share:i})=>(0,A.jsxs)(le,{children:[(0,A.jsx)(v,{label:n(`Day`,`jetpack-premium-analytics-pkg`),value:c(e,`short`),caption:c(e,`year`)}),(0,A.jsx)(v,{label:n(`Views`,`jetpack-premium-analytics-pkg`),value:(0,A.jsx)(re,{value:r,dataFormat:oe}),caption:i===void 0?void 0:t(n(`%s of views`,`jetpack-premium-analytics-pkg`),l(i,`percentage`,{decimals:2,signDisplay:`never`}))})]})})),M,N,P,F,I,L,R,z,he=e((()=>{M=`jpa/most-popular-day`,N=`jpa/calendar`,P=`Most popular day`,F=`The day your site received the most views.`,I={content:`The single day your site drew the most views since you started tracking, and how much of your all-time views it accounts for.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e){return f.removeQueries({queryKey:[`stats`,`site`]}),_(G,e),()=>{_(G,null),f.removeQueries({queryKey:[`stats`,`site`]})}}function V(){return(0,U.jsx)(k,{attributes:{reportParams:d()}})}function H(e){return(0,U.jsx)(b,{...e,widgetType:y(z),renderModule:W,renderComponent:k,attributes:{reportParams:d(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ue(),de(),S(),h(),me(),he(),U=i(),g(),W=`storybook/most-popular-day`,G=`proxy/v1.1/stats`,K={title:`Packages/Premium Analytics/Widgets/MostPopularDay`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular day" widget ports the Jetpack Stats all-time highlight: the single day your site drew the most views, with that day's view count and its share of all views. The value comes from a site-wide summary that does not depend on the dashboard date range.`}}}},q={render:V,decorators:[x]},J={render:V,tags:[`!autodocs`],decorators:[x],beforeEach:()=>B(`loading`)},Y={render:V,tags:[`!autodocs`],decorators:[x],beforeEach:()=>B(`error`)},X={render:V,tags:[`!autodocs`],decorators:[x],beforeEach:()=>B(`error-retryable`)},Z={render:V,tags:[`!autodocs`],decorators:[x],beforeEach:()=>B(`empty`)},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(H,{...e}),args:{...C},argTypes:{...w}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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