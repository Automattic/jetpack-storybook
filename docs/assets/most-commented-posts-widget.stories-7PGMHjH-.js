import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-sy00sX6O.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{ou as i,vu as a}from"./build-module-CPdP9iK8.js";import{I as o,Lt as ee,f as s}from"./charts-provider-qbRoexXF.js";import{Lr as te}from"./build-module-CCbOH6zx.js";import{t as c}from"./src-edoC-Qkm.js";import{t as l,vn as u,yt as ne}from"./src-eG9MNHBB.js";import{t as re}from"./widget-state-C3D1Qqri.js";import{b as ie,i as d,j as f,n as ae,r as p}from"./with-story-router-3SflDxTd.js";import"./constants-DF4Qoi8L.js";import{r as oe,t as se}from"./leaderboard-skeleton-DoSkPNlP.js";import{n as m,r as h,t as g}from"./register-report-mocks-4SvdwSTg.js";import{a as _,g as v,h as y,i as b,m as x,n as S,p as C,r as w}from"./with-widget-canvas-PzBc1vx1.js";var T,E,D,ce=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function le(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:o,refetch:c}=ne({group:`posts`,max:10}),l=(0,a.useMemo)(()=>e.map(e=>({id:e.id,label:(0,k.jsx)(f,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value})),[e]);return s({csv:{exporter:ie,status:{isLoading:n,isFetching:r,isError:i},rowCount:e.length}}),(0,k.jsx)(te,{className:D.root,children:(0,k.jsx)(`div`,{className:D.content,children:(0,k.jsx)(re,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:ee(o,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(se,{rows:10}),children:(0,k.jsx)(oe,{chartTitle:t(`All-time most commented posts`,`jetpack-premium-analytics-pkg`),data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})})})}function O({attributes:e={}}){return(0,k.jsx)(o,{attributes:e,children:(0,k.jsx)(le,{})})}var k,A,j=e((()=>{l(),d(),i(),n(),c(),ce(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,V=e((()=>{M=`jpa/most-commented-posts`,N=`jpa/comment`,P=`All-time most commented posts`,F=`The posts and pages that receive the most comments.`,I={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fcomments%3Fsection%3Dposts`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function H(){return(0,W.jsx)(O,{attributes:{reportParams:u()}})}function U(e){return(0,W.jsx)(x,{...e,widgetType:b(B),renderModule:G,renderComponent:O,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),y(),_(),ae(),S(),m(),j(),V(),W=r(),h(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:H,decorators:[w,p]},J={render:H,tags:[`!autodocs`],decorators:[w,p],beforeEach:g(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[w,p],beforeEach:g(`error`)},X={render:H,tags:[`!autodocs`],decorators:[w,p],beforeEach:g(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[w,p],beforeEach:g(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...C},argTypes:{...v},decorators:[p]},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostCommentedPostsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};