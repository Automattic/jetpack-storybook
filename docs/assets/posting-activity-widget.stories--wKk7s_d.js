import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{hl as o,n as s}from"./build-module-Bt8gOW8e.js";import{$t as c,R as l,t as ee,x as te}from"./date-fns-BnBPtwu2.js";import{n as ne,t as re}from"./build-module-DZHUqpPN.js";import{a as ie,n as u}from"./heatmap-chart-D5_rtGUw.js";import{t as ae,y as d}from"./src-CT5b53ej.js";import{Kn as f,Nt as p,ut as m}from"./chart-tooltip-Cd6R28vB.js";import{C as h,N as g,S as oe,k as se}from"./report-metric-BSkCvVUy.js";import{t as _}from"./widget-state-CqW7LysR.js";import{S as v,b as y,t as ce,x as le,y as b}from"./src-ZlSzubd8.js";import{n as x,r as S}from"./with-widget-canvas-Dz43KNHY.js";import{n as C,t as w}from"./force-stats-mock-state-CQT0C_sO.js";var T,E,D,O,ue=t((()=>{T=`_root_1x7au_1`,E=`_content_1x7au_9`,D=`_heatmap_1x7au_24`,O={root:T,content:E,heatmap:D}}));function de(){let{reportParams:e}=g(),{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=p(e),{data:s,rowLabels:c}=(0,A.useMemo)(()=>ie(Object.entries(t??{}).map(([e,t])=>({dateString:e,value:t}))),[t]),l=s.length>0;return(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(_,{isLoading:n,isFetching:i,isError:a&&!l,isEmpty:!l,error:{description:r(`We couldn't load posting activity. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:()=>void o()}]},empty:{icon:d,description:r(`No posts published in this period.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(u,{data:s,rowLabels:c,compact:!0,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,className:O.heatmap,children:(0,j.jsx)(u.Legend,{lessLabel:r(`Fewer Posts`,`jetpack-premium-analytics`),moreLabel:r(`More Posts`,`jetpack-premium-analytics`)})})})})}function k({attributes:e={}}){return(0,j.jsx)(se,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(de,{})})})}var A,j,M=t((()=>{m(),ae(),ce(),i(),A=e(n(),1),ue(),j=a()})),N,P=t((()=>{i(),s(),N={name:`jpa/posting-activity`,title:r(`Posting activity`,`jetpack-premium-analytics`),help:{content:r(`How often you publish — a calendar heatmap of posts per day.`,`jetpack-premium-analytics`)},icon:o}}));function F(e){return w(H,e),()=>{w(H,null)}}function I(){let e=c(new Date),t={},n=1337,r=()=>(n=n*16807%2147483647,n/2147483647);for(let n=0;n<U;n++){let i=te(e,n);if(r()<.55)continue;let a=1+Math.floor(r()*5);t[String(l(i))]=a}return{data:t}}function L({withComparison:e}){return(0,B.jsx)(k,{attributes:{reportParams:f(e)}})}function R(e){return(0,B.jsx)(k,{attributes:{reportParams:f(!1,e)}})}function z({withComparison:e,...t}){return(0,B.jsx)(y,{...t,widgetType:N,renderModule:G,renderComponent:k,attributes:{reportParams:f(e)}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),ne(),ee(),oe(),C(),le(),x(),M(),P(),B=a(),h(),V=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/streak`,H=`stats/streak`,U=365,W=async(e,t)=>{if(!(e.path??e.url??``).startsWith(V))return t(e);let n=I();return e.parse===!1?new Response(JSON.stringify(n),{status:200,headers:{"Content-Type":`application/json`}}):n},re.use(W),G=`storybook/posting-activity`,K={title:`Packages/Premium Analytics/Widgets/PostingActivity`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:'The "Posting activity" widget. Renders a calendar (contribution-style) heatmap of the number of posts published per day for the dashboard date range. The `stats/streak` endpoint has no comparison period, so the WithComparison story renders identically to Default — no deltas are shown.'}}}},q={render:L,args:{withComparison:!1},decorators:[S]},J={render:L,args:{withComparison:!0},decorators:[S]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>F(`loading`)},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>F(`error`)},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>F(`empty`)},Q={render:e=>(0,B.jsx)(z,{...e}),args:{...b,withComparison:!0},argTypes:{...v,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostingActivity,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default populated state — a year of posting activity for the current period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostingActivity,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Comparison state — the date range picker's comparison params are present, but
\`stats/streak\` has no comparison data, so the heatmap renders normally without
fabricated deltas.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderPostingActivityOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceStreakState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderPostingActivityOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceStreakState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderPostingActivityOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceStreakState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no posts in the range: the widget shows its empty state (the
neutral calendar glyph and the "posts will appear here" message).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostingActivityDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};