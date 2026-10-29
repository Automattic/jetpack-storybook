import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Mu as i,bu as a}from"./build-module-BI3_PVVO.js";import{F as o,Pt as s,f as c,on as ee}from"./charts-provider-DWkxm3u5.js";import{an as te}from"./build-module-BN2Djb9A.js";import{t as l}from"./src-C0nwXc6l.js";import{gt as ne,hn as u,t as d}from"./src-DfQ3R5pV.js";import{t as re}from"./widget-state-B-3KFlZy.js";import{b as f,i as p,j as ie,n as m,r as h}from"./with-story-router-lCcAreTD.js";import"./constants-B9OTkkI1.js";import{r as ae,t as oe}from"./leaderboard-skeleton-COjQurU9.js";import{n as se,r as g,t as _}from"./register-report-mocks-xm2nLXrN.js";import{a as v,g as y,h as b,i as x,m as S,n as C,p as w,r as T}from"./with-widget-canvas-DXflARoK.js";var E,D,O,ce=e((()=>{E=`_root_19tfr_1`,D=`_content_19tfr_9`,O={root:E,content:D}}));function le(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:o,refetch:l}=ne({group:`posts`,max:10}),u=(0,i.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,A.jsx)(ie,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value,currentShare:ee(e.value,t)}))},[e]);return c({csv:{exporter:f,status:{isLoading:n,isFetching:r,isError:a},rowCount:e.length}}),(0,A.jsx)(te,{className:O.root,children:(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(re,{isLoading:n,isFetching:r,isError:a,isEmpty:e.length===0,error:s(o,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(ae,{chartTitle:t(`All-time most commented posts`,`jetpack-premium-analytics-pkg`),data:u,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})})})}function k({attributes:e={}}){return(0,A.jsx)(o,{attributes:e,children:(0,A.jsx)(le,{})})}var A,j,M=e((()=>{d(),p(),a(),n(),l(),ce(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P,F,I,L,R,z,B,V,H=e((()=>{N=`jpa/most-commented-posts`,P=`jpa/comment`,F=`All-time most commented posts`,I=`The posts and pages that receive the most comments.`,L={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fcomments%3Fsection%3Dposts`}],V={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z,actions:B}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:u()}})}function ue(e){return(0,W.jsx)(S,{...e,widgetType:x(V),renderModule:G,renderComponent:k,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),b(),v(),m(),C(),se(),M(),H(),W=r(),g(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:U,decorators:[T,h]},J={render:U,tags:[`!autodocs`],decorators:[T,h],beforeEach:_(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[T,h],beforeEach:_(`error`)},X={render:U,tags:[`!autodocs`],decorators:[T,h],beforeEach:_(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[T,h],beforeEach:_(`empty`)},Q={render:e=>(0,W.jsx)(ue,{...e}),args:{...w},argTypes:{...y},decorators:[h]},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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