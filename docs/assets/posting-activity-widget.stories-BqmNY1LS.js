import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,r as a,t as o}from"./build-module-BXs6jvWf.js";import{t as s}from"./jsx-runtime-CFwixLRt.js";import{Cr as ee,t as c}from"./build-module-D8x1-0PG.js";import{Cn as l,M as u,t as d,x as f}from"./date-fns-BYhs6DQD.js";import{n as te,t as ne}from"./build-module-BZUlgugB2.js";import{t as re,tt as ie,v as p}from"./src-M-MiwiMQ.js";import{Sn as m,ht as ae,t as h}from"./src-BcILQ8ng.js";import{I as oe,Ut as se}from"./charts-provider-C5HA2SSg.js";import{t as g}from"./widget-state-DnbF8hrz.js";import{i as _}from"./with-story-router-C7WVHY_h.js";import{r as ce}from"./metric-sparkline-skeleton-D--yuw66.js";import{n as le,r as ue}from"./register-report-mocks-DEKgkFm4.js";import{t as de}from"./month-calendar-heatmap-CRvKah1v.js";import{a as v,c as y,i as b,l as x,o as S,r as fe,s as pe,u as me}from"./with-widget-canvas-DoZ3Ea1y.js";import{n as he,t as C}from"./force-stats-mock-state-CZ4B651-.js";import{n as ge,r as _e,t as ve}from"./with-site-locale-CDMmojck.js";function ye(){let{from:e,to:t,preset:n,interval:r}=m(!1,ie),a=(0,T.useMemo)(()=>({start:p(e),end:p(t)}),[e,t]),{data:o,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=ae((0,T.useMemo)(()=>({from:e,to:t,preset:n,interval:r,max:O}),[e,t,n,r])),f=o??D;return(0,E.jsx)(g,{isLoading:s,isFetching:c,isError:l&&!o,error:se(u,{retryDescription:i(`We couldn't load posting activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),renderLoading:(0,E.jsx)(ce,{}),children:(0,E.jsx)(de,{valueByDay:f,range:a,formatValue:k,emptyLabel:i(`No posts`,`jetpack-premium-analytics-pkg`),icon:ee,lessLabel:i(`Fewer posts`,`jetpack-premium-analytics-pkg`),moreLabel:i(`More posts`,`jetpack-premium-analytics-pkg`)})})}function w({attributes:e={}}){return(0,E.jsx)(oe,{attributes:e,children:(0,E.jsx)(ye,{})})}var T,E,D,O,k,A=e((()=>{h(),re(),_(),o(),c(),T=t(n(),1),E=s(),D={},O=3e3,k=e=>r(a(`%d post`,`%d posts`,e,`jetpack-premium-analytics-pkg`),e)})),j,M,N,P,F,I,L,R,be=e((()=>{j=`jpa/posting-activity`,M=`jpa/verse`,N=`Monthly posting activity`,P=`How often you publish — a calendar heatmap of posts per day.`,F={content:`The last 12 months only, one square per day — the darker the square, the more you published that day. Earlier months are not shown.`},I=`stats`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function z(e){return C(U,e),()=>{C(U,null)}}function xe(){let e=l(new Date),t={},n=1337,r=()=>(n=n*16807%2147483647,n/2147483647);for(let n=0;n<W;n++){let i=f(e,n);if(r()<.55)continue;let a=1+Math.floor(r()*5);t[String(u(i))]=a}return{data:t}}function B(){return(0,V.jsx)(w,{attributes:{reportParams:m()}})}function Se(e){return(0,V.jsx)(y,{...e,widgetType:v(R),renderModule:K,renderComponent:w,attributes:{reportParams:m(!0)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),te(),d(),le(),he(),x(),S(),ve(),fe(),A(),be(),V=s(),ue(),H=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/streak`,U=`stats/streak`,W=365,G=async(e,t)=>{if(!(e.path??e.url??``).startsWith(H))return t(e);let n=xe();return e.parse===!1?new Response(JSON.stringify(n),{status:200,headers:{"Content-Type":`application/json`}}):n},ne.use(G),K=`storybook/posting-activity`,q={title:`Packages/Premium Analytics/Widgets/PostingActivity`,component:w,tags:[`autodocs`],decorators:[_e],argTypes:{...ge},parameters:{docs:{description:{component:'The "Monthly posting activity" widget: one mini calendar per month of the last 12, shaded by the posts published each day, with the month names beneath. The window is the widget\'s own; the dashboard date range does not move it. The close-up canvas is a one-column cell, so the grid scrolls sideways there; `WidgetDashboardWithWidget` below shows the full-width placement, where the months spread out.'}}}},J={render:B,decorators:[b]},Y={render:B,tags:[`!autodocs`],decorators:[b],beforeEach:()=>z(`loading`)},X={render:B,tags:[`!autodocs`],decorators:[b],beforeEach:()=>z(`error`)},Z={render:B,tags:[`!autodocs`],decorators:[b],beforeEach:()=>z(`empty`)},Q={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(Se,{...e}),args:{...pe,widgetWidth:3,widgetHeight:1},argTypes:{...me}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostingActivity,
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Default populated state — the last 12 months of posting activity.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostingActivity,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceStreakState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostingActivity,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceStreakState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostingActivity,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceStreakState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no posts in the last 12 months: the calendar, every day empty.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <PostingActivityDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    // The Insights default: full width, one row.
    widgetWidth: 3,
    widgetHeight: 1
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};