import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{Dc as a,Wr as o,n as s}from"./build-module-CDRs4YxF.js";import{ln as te,t as c}from"./src-DmC7tgZ0.js";import{$ as ne,G as re,K as ie,M as ae,S as oe,U as l,w as se}from"./report-metric-C-MAjk9L.js";import{Gt as u,N as ce,t as d}from"./src-DX7BtHAj.js";import"./constants-B1kGztHF.js";import{rt as le,x as f}from"./chart-tooltip-_HXMDMVm.js";import{r as p,t as m}from"./leaderboard-skeleton-DtnB6anW.js";import{t as h}from"./widget-state-vjdqmUgg.js";import{C as g,D as _,E as v,O as y,S as b,T as x,b as ue,k as S,t as de,w as fe,x as C}from"./src-PGZkd58g.js";var w,T,E,D=e((()=>{w=`_root_jzzhc_1`,T=`_content_jzzhc_9`,E={root:w,content:T}}));function O(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:o,refetch:s}=ce({group:`authors`,max:10}),c=(0,ee.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,...ae({label:e.label,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}}),currentValue:e.value,currentShare:le(e.value,t)}))},[e]);return(0,A.jsxs)(te,{className:E.root,children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(h,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:f(o,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),empty:{icon:a,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(m,{rows:10}),children:(0,A.jsx)(p,{data:c,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(se,{children:(0,A.jsx)(oe,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(ne,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j,M=e((()=>{d(),de(),i(),n(),s(),c(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P=e((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,pe=e((()=>{F=`jpa/most-commented-authors`,I=`Top commented authors`,L=`The people who comment the most on your site.`,R={content:`Your most active commenters, ranked by the number of comments they have left.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(){return(0,W.jsx)(k,{attributes:{reportParams:u()}})}function U(e){return(0,W.jsx)(x,{...e,widgetType:b(V,N),renderModule:G,renderComponent:k,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),v(),g(),y(),ue(),re(),M(),P(),pe(),W=r(),ie(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "Top commented posts" covers the other.`}}}},q={render:H,decorators:[C,S]},J={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:l(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:l(`error`)},X={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:l(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:l(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...fe},argTypes:{..._},decorators:[S]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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