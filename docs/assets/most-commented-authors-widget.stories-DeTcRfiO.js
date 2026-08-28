import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as ee,t as i}from"./build-module-DuNGIx6S.js";import{Ec as a,Ur as o,t as s}from"./build-module-CR6EsQjA.js";import{pn as te,t as c}from"./src-DP9FTGOl.js";import{g as ne}from"./hooks-DQ6nefdN.js";import{R as re,qt as l,t as u}from"./src-BhqLv2Qs.js";import"./constants-B1kGztHF.js";import{M as ie,mt as d}from"./chart-tooltip-Cs6aY16U.js";import{r as f,t as ae}from"./leaderboard-skeleton-Bst614vA.js";import{G as oe,K as se,N as ce,S as p,U as m,b as h}from"./report-metric-rVorpHdP.js";import{t as g}from"./widget-state-DzPu21wk.js";import{C as _,D as v,E as y,O as b,S as x,T as le,b as ue,k as S,t as de,w as fe,x as C}from"./src-B-BRmvFx.js";var w,T,E,D=e((()=>{w=`_root_jzzhc_1`,T=`_content_jzzhc_9`,E={root:w,content:T}}));function O(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:o,refetch:s}=re({group:`authors`,max:10}),c=(0,ee.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,...ce({label:e.label,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}}),currentValue:e.value,currentShare:d(e.value,t)}))},[e]);return(0,A.jsxs)(te,{className:E.root,children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(g,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:ie(o,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),empty:{icon:a,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ae,{rows:10}),children:(0,A.jsx)(f,{data:c,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(p,{children:(0,A.jsx)(h,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(ne,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j,M=e((()=>{u(),de(),i(),n(),s(),c(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P=e((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,pe=e((()=>{F=`jpa/most-commented-authors`,I=`Top commented authors`,L=`The people who comment the most on your site.`,R={content:`Your most active commenters, ranked by the number of comments they have left.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(){return(0,W.jsx)(k,{attributes:{reportParams:l()}})}function U(e){return(0,W.jsx)(le,{...e,widgetType:x(V,N),renderModule:G,renderComponent:k,attributes:{reportParams:l(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),y(),_(),b(),ue(),oe(),M(),P(),pe(),W=r(),se(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "Top commented posts" covers the other.`}}}},q={render:H,decorators:[C,S]},J={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:m(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:m(`error`)},X={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:m(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:m(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...fe},argTypes:{...v},decorators:[S]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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