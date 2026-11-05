import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{ou as i,vu as a}from"./build-module-D8x1-0PG.js";import{I as o,Vt as s,f as c}from"./charts-provider-0igzEFa4.js";import{Zr as l}from"./build-module-d2u2hqwO.js";import{t as u}from"./src-CPjV9w9v.js";import{bn as d,t as f,yt as ee}from"./src-CzKIwJBE.js";import{t as te}from"./widget-state-CXQalhFB.js";import{N as ne,_ as re,t as ie}from"./src-CEYG5Tww.js";import"./constants-fgWwZmhw.js";import{r as ae,t as oe}from"./leaderboard-skeleton-4AdPdzoQ.js";import{n as se,r as p,t as m}from"./register-report-mocks-NHXSwhdT.js";import{n as h,r as g}from"./with-story-router-BLOWN_PJ.js";import{a as ce,c as _,i as v,l as y,n as b,o as x,r as S,s as C}from"./with-widget-canvas-B_UZeq6x.js";var w,T,E,D=e((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function le(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:o,refetch:u}=ee({group:`posts`,max:10}),d=(0,a.useMemo)(()=>e.map(e=>({id:e.id,label:(0,k.jsx)(ne,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value})),[e]);return c({csv:{exporter:re,status:{isLoading:n,isFetching:r,isError:i},rowCount:e.length}}),(0,k.jsx)(l,{className:E.root,children:(0,k.jsx)(`div`,{className:E.content,children:(0,k.jsx)(te,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:s(o,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:u}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(oe,{rows:10}),children:(0,k.jsx)(ae,{chartTitle:t(`All-time most commented posts`,`jetpack-premium-analytics-pkg`),data:d,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})})})}function O({attributes:e={}}){return(0,k.jsx)(o,{attributes:e,children:(0,k.jsx)(le,{})})}var k,A,j=e((()=>{f(),ie(),i(),n(),u(),D(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,R,z,B,V=e((()=>{M=`jpa/most-commented-posts`,N=`jpa/comment`,P=`All-time most commented posts`,F=`The posts and pages that receive the most comments.`,I={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fcomments%3Fsection%3Dposts`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function H(){return(0,W.jsx)(O,{attributes:{reportParams:d()}})}function U(e){return(0,W.jsx)(C,{...e,widgetType:v(B),renderModule:G,renderComponent:O,attributes:{reportParams:d(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),_(),ce(),h(),b(),se(),j(),V(),W=r(),p(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:H,decorators:[S,g]},J={render:H,tags:[`!autodocs`],decorators:[S,g],beforeEach:m(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[S,g],beforeEach:m(`error`)},X={render:H,tags:[`!autodocs`],decorators:[S,g],beforeEach:m(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[S,g],beforeEach:m(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...x},argTypes:{...y},decorators:[g]},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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