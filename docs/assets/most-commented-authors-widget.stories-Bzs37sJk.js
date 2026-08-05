import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as ee,t as i}from"./build-module-DrryaqBL.js";import{ln as a,n as o}from"./build-module-DoJYX5DX.js";import{A as te,G as s,H as c,S as ne,W as l,Z as re,w as ie}from"./report-metric-D1vALTh_.js";import{B as ae,t as oe}from"./src-CzEubFCT.js";import{$t as u,d,m as se,q as f,ur as p,xt as m}from"./chart-tooltip-BA4nt7Vv.js";import{t as ce}from"./leaderboard-chart-DEBReCRO.js";import{C as le,D as ue,E as h,O as g,S as _,T as v,b as y,k as b,t as x,w as S,x as C}from"./src-BHsXmrzc.js";import{t as w}from"./widget-state-BfeOVzR1.js";var T,E,D,de=e((()=>{T=`_root_1hs5m_1`,E=`_content_1hs5m_11`,D={root:T,content:E}}));function O({max:e}){let{rows:n,isLoading:r,isFetching:i,isError:o,error:s,refetch:c}=u({group:`authors`,max:e}),l=(0,ee.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map(t=>({id:t.id,...te({label:t.label,media:{kind:`avatar`,url:t.avatarUrl,name:t.label},action:t.link?{kind:`link`,href:t.link}:{kind:`static`}}),currentValue:t.value,currentShare:f(t.value,e)}))},[n]);return(0,A.jsxs)(ae,{className:D.root,children:[(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(w,{isLoading:r,isFetching:i,isError:o,isEmpty:n.length===0,error:d(s,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:a,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(ce,{data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(ie,{children:(0,A.jsx)(ne,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(re,{attributes:e,children:(0,A.jsx)(O,{max:se(e.max,M)})})}var A,j,M,N=e((()=>{m(),x(),i(),n(),o(),oe(),de(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=10})),P,F=e((()=>{n(),o(),P={icon:a,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/most-commented-authors`,L=`Most commented authors`,R=`The people who comment the most on your site.`,z={content:`Your most active commenters, ranked by the number of comments they have left.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:p()}})}function pe(e){return(0,W.jsx)(v,{...e,widgetType:_(H,P),renderModule:G,renderComponent:k,attributes:{reportParams:p(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),h(),le(),g(),y(),l(),N(),F(),fe(),W=r(),s(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "Most commented posts" covers the other.`}}}},q={render:U,decorators:[C,b]},J={render:U,tags:[`!autodocs`],decorators:[C,b],beforeEach:c(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[C,b],beforeEach:c(`error`)},X={render:U,tags:[`!autodocs`],decorators:[C,b],beforeEach:c(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[C,b],beforeEach:c(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...S},argTypes:{...ue},decorators:[b]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('loading')
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error')
}`,...Y.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error-retryable')
}`,...X.parameters?.docs?.source},description:{story:`The proxy's \`no_connection\` 403: a broken Jetpack connection can heal, so this
one keeps its Retry action (which re-runs the query — still mocked as failing
while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral comment
author glyph and "No one has commented on your site yet.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostCommentedAuthorsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};