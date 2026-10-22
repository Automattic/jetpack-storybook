import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Mu as i,bu as a}from"./build-module-BI3_PVVO.js";import{an as ee}from"./build-module-DhwsekaI.js";import{t as o}from"./src-Bm2XQLam.js";import{mt as s,pn as c,t as l}from"./src-5g9sGwvT.js";import{At as u,F as d,Ft as f,f as te}from"./charts-provider-C2bmnNI1.js";import{t as ne}from"./widget-state-C6PLa1kU.js";import"./rows-DoJXoHhN.js";import{r as re,t as ie}from"./leaderboard-skeleton-DDwAiv3t.js";import{a as ae,i as p,o as oe}from"./widget-state-HqBH4bUi.js";import{n as se,r as m}from"./with-story-router-CyVN4A4U.js";import{A as h,C as g,H as ce,M as _,N as v,U as y,V as b,W as x,_ as S,j as C,t as w}from"./src-CIYxOsiD.js";var T,E,D,le=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function O(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:o,refetch:c}=s({group:`posts`,max:10}),l=(0,i.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,A.jsx)(g,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value,currentShare:f(e.value,t)}))},[e]);return te({report:`comments`,section:`posts`,csv:{exporter:S,status:{isLoading:n,isFetching:r,isError:a},rowCount:e.length}}),(0,A.jsx)(ee,{className:D.root,children:(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(ne,{isLoading:n,isFetching:r,isError:a,isEmpty:e.length===0,error:u(o,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ie,{rows:10}),children:(0,A.jsx)(re,{chartTitle:t(`All-time most commented posts`,`jetpack-premium-analytics-pkg`),data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})})})}function k({attributes:e={}}){return(0,A.jsx)(d,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j,M=e((()=>{l(),w(),a(),n(),o(),le(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P,F,I,L,R,z,B,V=e((()=>{N=`jpa/most-commented-posts`,P=`jpa/comment`,F=`All-time most commented posts`,I=`The posts and pages that receive the most comments.`,L={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function H(){return(0,W.jsx)(k,{attributes:{reportParams:c()}})}function U(e){return(0,W.jsx)(ce,{...e,widgetType:_(B),renderModule:G,renderComponent:k,attributes:{reportParams:c(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),y(),v(),se(),h(),ae(),M(),V(),W=r(),oe(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:H,decorators:[C,m]},J={render:H,tags:[`!autodocs`],decorators:[C,m],beforeEach:p(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[C,m],beforeEach:p(`error`)},X={render:H,tags:[`!autodocs`],decorators:[C,m],beforeEach:p(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[C,m],beforeEach:p(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...b},argTypes:{...x},decorators:[m]},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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