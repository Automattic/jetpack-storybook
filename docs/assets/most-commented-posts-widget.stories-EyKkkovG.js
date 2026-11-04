import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-sy00sX6O.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{bu as i,cu as a}from"./build-module-DIcxAdIf.js";import{I as o,Vt as ee,f as te}from"./charts-provider-ARR6XQI-.js";import{Lr as s}from"./build-module-BtmadFOa.js";import{t as c}from"./src-BVLKL86t.js";import{t as l,vn as u,yt as ne}from"./src-CRoMOZVt.js";import{t as re}from"./widget-state-BXwwUN1D.js";import{N as ie,_ as ae,t as d}from"./src-CYAbiDlj.js";import"./constants-BZKbKOhZ.js";import{r as f,t as p}from"./leaderboard-skeleton-VB6oRNLC.js";import{n as m,r as h,t as g}from"./register-report-mocks-AdY-3qvh.js";import{n as _,r as v}from"./with-story-router-CnBcY6gb.js";import{a as y,c as b,i as x,l as S,n as oe,o as se,r as C,s as ce}from"./with-widget-canvas-Byxvvc4f.js";var w,T,E,D=e((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function le(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:o,refetch:c}=ne({group:`posts`,max:10}),l=(0,i.useMemo)(()=>e.map(e=>({id:e.id,label:(0,k.jsx)(ie,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value})),[e]);return te({csv:{exporter:ae,status:{isLoading:n,isFetching:r,isError:a},rowCount:e.length}}),(0,k.jsx)(s,{className:E.root,children:(0,k.jsx)(`div`,{className:E.content,children:(0,k.jsx)(re,{isLoading:n,isFetching:r,isError:a,isEmpty:e.length===0,error:ee(o,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(p,{rows:10}),children:(0,k.jsx)(f,{chartTitle:t(`All-time most commented posts`,`jetpack-premium-analytics-pkg`),data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})})})}function O({attributes:e={}}){return(0,k.jsx)(o,{attributes:e,children:(0,k.jsx)(le,{})})}var k,A,j=e((()=>{l(),d(),a(),n(),c(),D(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,V=e((()=>{M=`jpa/most-commented-posts`,N=`jpa/comment`,P=`All-time most commented posts`,F=`The posts and pages that receive the most comments.`,I={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fcomments%3Fsection%3Dposts`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function H(){return(0,W.jsx)(O,{attributes:{reportParams:u()}})}function U(e){return(0,W.jsx)(ce,{...e,widgetType:x(B),renderModule:G,renderComponent:O,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),b(),y(),_(),oe(),m(),j(),V(),W=r(),h(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:H,decorators:[C,v]},J={render:H,tags:[`!autodocs`],decorators:[C,v],beforeEach:g(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[C,v],beforeEach:g(`error`)},X={render:H,tags:[`!autodocs`],decorators:[C,v],beforeEach:g(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[C,v],beforeEach:g(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...se},argTypes:{...S},decorators:[v]},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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