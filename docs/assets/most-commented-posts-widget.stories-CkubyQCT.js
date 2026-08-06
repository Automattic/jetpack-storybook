import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{n as a,xc as o}from"./build-module-Bb7IR3OP.js";import{lr as s,t as c}from"./src-BFGH4N7E.js";import{$ as l,E as te,K as u,S as ne,W as d,q as f,w as re}from"./report-metric-xq6OqjuW.js";import{$t as ie,d as ae,dr as p,m as oe,q as m,xt as h}from"./chart-tooltip-Q5Sl_tSg.js";import{t as g}from"./leaderboard-chart-D4_YH1Br.js";import{C as _,D as se,E as ce,O as le,S as v,T as y,b,k as x,t as S,w as C,x as w}from"./src-De7IKiMl.js";import{t as T}from"./widget-state-3HXTl1ey.js";var E,D,O,ue=e((()=>{E=`_root_1hs5m_1`,D=`_content_1hs5m_11`,O={root:E,content:D}}));function de({max:e}){let{rows:n,isLoading:r,isFetching:i,isError:a,error:c,refetch:l}=ie({group:`posts`,max:e}),u=(0,ee.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map(t=>({id:t.id,label:(0,A.jsx)(ne,{id:t.postId,label:t.label,link:t.link}),currentValue:t.value,currentShare:m(t.value,e)}))},[n]);return(0,A.jsxs)(s,{className:O.root,children:[(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(T,{isLoading:r,isFetching:i,isError:a,isEmpty:n.length===0,error:ae(c,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{icon:o,description:t(`None of your posts or pages have comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(g,{data:u,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(te,{children:(0,A.jsx)(re,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(de,{max:oe(e.max,M)})})}var A,j,M,N=e((()=>{h(),S(),i(),n(),a(),c(),ue(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=10})),P,F=e((()=>{n(),a(),P={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/most-commented-posts`,L=`Most commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`Your posts and pages, ranked by the number of comments they have received.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:p()}})}function pe(e){return(0,W.jsx)(y,{...e,widgetType:v(H,P),renderModule:G,renderComponent:k,attributes:{reportParams:p(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ce(),_(),le(),b(),u(),N(),F(),fe(),W=r(),f(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "Most commented authors" covers the other.`}}}},q={render:U,decorators:[w,x]},J={render:U,tags:[`!autodocs`],decorators:[w,x],beforeEach:d(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,x],beforeEach:d(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,x],beforeEach:d(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,x],beforeEach:d(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...C},argTypes:{...se},decorators:[x]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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