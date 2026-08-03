import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{n as o,sn as s}from"./build-module-DoJYX5DX.js";import{D as ee,G as c,H as l,S as u,W as d,Z as te,b as ne}from"./report-metric-WG7ZNOz1.js";import{R as f,t as re}from"./build-module-9_QNfiDl.js";import{$t as ie,d as ae,m as oe,q as se,ur as p,xt as m}from"./chart-tooltip-DL-4iUUY.js";import{t as h}from"./leaderboard-chart-B__t56Iv.js";import{t as ce}from"./widget-state-CrbkVDzl.js";import{C as le,D as g,E as _,O as v,S as y,T as b,b as x,k as S,t as C,w,x as T}from"./src-CqSb8IKj.js";var E,D,O,ue=e((()=>{E=`_root_1hs5m_1`,D=`_content_1hs5m_11`,O={root:E,content:D}}));function de({max:e}){let{rows:n,isLoading:r,isFetching:a,isError:o,error:c,refetch:l}=ie({group:`posts`,max:e}),d=(0,i.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map(t=>({id:t.id,label:(0,A.jsx)(ne,{id:t.postId,label:t.label,link:t.link}),currentValue:t.value,currentShare:se(t.value,e)}))},[n]);return(0,A.jsxs)(f,{className:O.root,children:[(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(ce,{isLoading:r,isFetching:a,isError:o,isEmpty:n.length===0,error:ae(c,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{icon:s,description:t(`None of your posts or pages have comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(h,{data:d,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(ee,{children:(0,A.jsx)(u,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(te,{attributes:e,children:(0,A.jsx)(de,{max:oe(e.max,M)})})}var A,j,M,N=e((()=>{m(),C(),a(),n(),o(),re(),ue(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=10})),P,F=e((()=>{n(),o(),P={icon:s,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/most-commented-posts`,L=`Most commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`Your posts and pages, ranked by the number of comments they have received.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:p()}})}function pe(e){return(0,W.jsx)(b,{...e,widgetType:y(H,P),renderModule:G,renderComponent:k,attributes:{reportParams:p(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),_(),le(),v(),x(),d(),N(),F(),fe(),W=r(),c(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "Most commented authors" covers the other.`}}}},q={render:U,decorators:[T,S]},J={render:U,tags:[`!autodocs`],decorators:[T,S],beforeEach:l(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[T,S],beforeEach:l(`error`)},X={render:U,tags:[`!autodocs`],decorators:[T,S],beforeEach:l(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[T,S],beforeEach:l(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...w},argTypes:{...g},decorators:[S]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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