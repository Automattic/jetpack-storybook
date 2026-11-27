import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{j as i,t as a}from"./build-module-Dxhc9xxH.js";import{Kn as o}from"./build-module-vwO17YW3.js";import{At as s,In as c,t as l}from"./src-BVv1R588.js";import{t as u}from"./src-DMHlbKtp.js";import{Jt as ee,R as te,m as ne}from"./charts-provider-DVBrFPaa.js";import{t as re}from"./widget-state-CqPm5upe.js";import{L as d,S as f,i as p,n as m,r as h}from"./with-story-router-Buc1zMFG.js";import"./constants-4LY2Ogim.js";import{r as g,t as _}from"./leaderboard-skeleton-BRgiGhSp.js";import{n as v,r as y,t as b}from"./register-report-mocks-Dzl9RUVR.js";import{a as x,c as S,i as C,l as ie,o as ae,r as oe,s as se,u as ce}from"./with-widget-canvas-BqMy9p20.js";var w,T,E,D=e((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function le(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:c,refetch:l}=s({group:`posts`,max:10}),u=(0,i.useMemo)(()=>e.map(e=>({id:e.id,label:(0,k.jsx)(d,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value})),[e]);return ne({csv:{exporter:f,status:{isLoading:n,isError:a},rowCount:e.length}}),(0,k.jsx)(o,{className:E.root,children:(0,k.jsx)(`div`,{className:E.content,children:(0,k.jsx)(re,{isLoading:n,isFetching:r,isError:a,isEmpty:e.length===0,error:ee(c,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(_,{rows:10}),children:(0,k.jsx)(g,{data:u,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})})})}function O({attributes:e={}}){return(0,k.jsx)(te,{attributes:e,children:(0,k.jsx)(le,{})})}var k,A,j=e((()=>{l(),p(),a(),n(),u(),D(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,V=e((()=>{M=`jpa/most-commented-posts`,N=`jpa/comment`,P=`All-time most commented posts`,F=`The posts and pages that receive the most comments.`,I={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fcomments%3Fsection%3Dposts`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function H(){return(0,W.jsx)(O,{attributes:{reportParams:c()}})}function U(e){return(0,W.jsx)(S,{...e,widgetType:x(B),renderModule:G,renderComponent:O,attributes:{reportParams:c(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),ie(),ae(),m(),oe(),v(),j(),V(),W=r(),y(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:H,decorators:[C,h]},J={render:H,tags:[`!autodocs`],decorators:[C,h],beforeEach:b(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[C,h],beforeEach:b(`error`)},X={render:H,tags:[`!autodocs`],decorators:[C,h],beforeEach:b(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[C,h],beforeEach:b(`empty`)},Q={tags:[`widget-dashboard`],render:e=>(0,W.jsx)(U,{...e}),args:{...se},argTypes:{...ce},decorators:[h]},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
  render: args => <MostCommentedPostsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};