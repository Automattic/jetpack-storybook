import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Mu as ee,bu as i}from"./build-module-BI3_PVVO.js";import{Ft as te,I as a,f as o}from"./charts-provider-UiamKIev.js";import{an as s}from"./build-module-BN2Djb9A.js";import{t as c}from"./src-COiyFcN1.js";import{t as l,vn as u,yt as ne}from"./src-DvzWgCqE.js";import{t as re}from"./widget-state-C45HZFu5.js";import{b as ie,i as ae,j as oe,n as se,r as d}from"./with-story-router-C2MqLvGw.js";import"./constants-B9OTkkI1.js";import{r as ce,t as f}from"./leaderboard-skeleton-TC1ofWBn.js";import{n as p,r as m,t as h}from"./register-report-mocks-CI2bPEM7.js";import{a as g,g as le,h as _,i as v,m as y,n as b,p as x,r as S}from"./with-widget-canvas-CwZSCNTH.js";var C,w,T,E=e((()=>{C=`_root_19tfr_1`,w=`_content_19tfr_9`,T={root:C,content:w}}));function D(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:a,refetch:c}=ne({group:`posts`,max:10}),l=(0,ee.useMemo)(()=>e.map(e=>({id:e.id,label:(0,k.jsx)(oe,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value})),[e]);return o({csv:{exporter:ie,status:{isLoading:n,isFetching:r,isError:i},rowCount:e.length}}),(0,k.jsx)(s,{className:T.root,children:(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(re,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:te(a,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(f,{rows:10}),children:(0,k.jsx)(ce,{chartTitle:t(`All-time most commented posts`,`jetpack-premium-analytics-pkg`),data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})})})}function O({attributes:e={}}){return(0,k.jsx)(a,{attributes:e,children:(0,k.jsx)(D,{})})}var k,A,j=e((()=>{l(),ae(),i(),n(),c(),E(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,V=e((()=>{M=`jpa/most-commented-posts`,N=`jpa/comment`,P=`All-time most commented posts`,F=`The posts and pages that receive the most comments.`,I={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fcomments%3Fsection%3Dposts`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function H(){return(0,W.jsx)(O,{attributes:{reportParams:u()}})}function U(e){return(0,W.jsx)(y,{...e,widgetType:v(B),renderModule:G,renderComponent:O,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),_(),g(),se(),b(),p(),j(),V(),W=r(),m(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:H,decorators:[S,d]},J={render:H,tags:[`!autodocs`],decorators:[S,d],beforeEach:h(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[S,d],beforeEach:h(`error`)},X={render:H,tags:[`!autodocs`],decorators:[S,d],beforeEach:h(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[S,d],beforeEach:h(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...x},argTypes:{...le},decorators:[d]},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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