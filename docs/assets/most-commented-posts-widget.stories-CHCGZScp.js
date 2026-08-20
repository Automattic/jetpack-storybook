import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{Cc as a,_c as o,n as s}from"./build-module-CDRs4YxF.js";import{ln as te,t as c}from"./src-B_CQrSgG.js";import{$ as ne,G as re,K as ie,S as ae,U as l,b as u,w as oe}from"./report-metric-BUoHKDb0.js";import{Gt as d,N as se,t as f}from"./src-DndNfqv8.js";import"./constants-B1kGztHF.js";import{rt as ce,x as le}from"./chart-tooltip-hTPvqu7H.js";import{r as p,t as m}from"./leaderboard-skeleton-aBcCdx10.js";import{t as h}from"./widget-state-4iGVY-lb.js";import{C as g,D as _,E as v,O as y,S as b,T as x,b as S,k as C,t as ue,w as de,x as w}from"./src-D55L5dnN.js";var T,E,D,O=e((()=>{T=`_root_jzzhc_1`,E=`_content_jzzhc_9`,D={root:T,content:E}}));function k(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:o,refetch:s}=se({group:`posts`,max:10}),c=(0,ee.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,j.jsx)(u,{id:e.postId,label:e.label,link:e.link}),currentValue:e.value,currentShare:ce(e.value,t)}))},[e]);return(0,j.jsxs)(te,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(h,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:le(o,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),empty:{icon:a,description:t(`None of your posts or pages have comments yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(m,{rows:10}),children:(0,j.jsx)(p,{data:c,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),(0,j.jsx)(oe,{children:(0,j.jsx)(ae,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)})})]})}function A({attributes:e={}}){return(0,j.jsx)(ne,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{f(),ue(),i(),n(),s(),c(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F=e((()=>{s(),P={icon:o,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/most-commented-posts`,L=`Top commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`Your posts and pages, ranked by the number of comments they have received.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(A,{attributes:{reportParams:d()}})}function pe(e){return(0,W.jsx)(x,{...e,widgetType:b(H,P),renderModule:G,renderComponent:A,attributes:{reportParams:d(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),v(),g(),y(),S(),re(),N(),F(),fe(),W=r(),ie(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "Top commented authors" covers the other.`}}}},q={render:U,decorators:[w,C]},J={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:l(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:l(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:l(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:l(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...de},argTypes:{..._},decorators:[C]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('loading')
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error')
}`,...Y.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error-retryable')
}`,...X.parameters?.docs?.source},description:{story:`The proxy's \`no_connection\` 403: a broken Jetpack connection can heal, so this
one keeps its Retry action (which re-runs the query — still mocked as failing
while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral comment
content glyph and "None of your posts or pages have comments yet.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostCommentedPostsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};