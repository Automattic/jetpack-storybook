import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{Tc as a,n as o}from"./build-module-Bb7IR3OP.js";import{lr as te,t as s}from"./src-BST8U9f2.js";import{$ as c,E as ne,K as l,M as re,W as u,q as ie,w as ae}from"./report-metric-pGC7wSeO.js";import{Ct as d,Y as oe,g as f,p,pr as m,tn as se}from"./chart-tooltip-roGgFx5z.js";import{t as ce}from"./leaderboard-chart-QFtk9a8B.js";import{C as le,D as h,E as g,O as _,S as v,T as y,b,k as x,t as S,w as C,x as w}from"./src-BcfC3my1.js";import{t as ue}from"./widget-state--89R8sKt.js";var T,E,D,de=e((()=>{T=`_root_1hs5m_1`,E=`_content_1hs5m_11`,D={root:T,content:E}}));function O({max:e}){let{rows:n,isLoading:r,isFetching:i,isError:o,error:s,refetch:c}=se({group:`authors`,max:e}),l=(0,ee.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map(t=>({id:t.id,...re({label:t.label,media:{kind:`avatar`,url:t.avatarUrl,name:t.label},action:t.link?{kind:`link`,href:t.link}:{kind:`static`}}),currentValue:t.value,currentShare:oe(t.value,e)}))},[n]);return(0,A.jsxs)(te,{className:D.root,children:[(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(ue,{isLoading:r,isFetching:i,isError:o,isEmpty:n.length===0,error:p(s,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:a,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(ce,{data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(ne,{children:(0,A.jsx)(ae,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(O,{max:f(e.max,M)})})}var A,j,M,N=e((()=>{d(),S(),i(),n(),o(),s(),de(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=10})),P,F=e((()=>{n(),o(),P={icon:a,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/most-commented-authors`,L=`Most commented authors`,R=`The people who comment the most on your site.`,z={content:`Your most active commenters, ranked by the number of comments they have left.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:m()}})}function pe(e){return(0,W.jsx)(y,{...e,widgetType:v(H,P),renderModule:G,renderComponent:k,attributes:{reportParams:m(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),g(),le(),_(),b(),l(),N(),F(),fe(),W=r(),ie(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "Most commented posts" covers the other.`}}}},q={render:U,decorators:[w,x]},J={render:U,tags:[`!autodocs`],decorators:[w,x],beforeEach:u(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,x],beforeEach:u(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,x],beforeEach:u(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,x],beforeEach:u(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...C},argTypes:{...h},decorators:[x]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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