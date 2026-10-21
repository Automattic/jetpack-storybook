import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as ee,Nu as i}from"./build-module-CDZL_1rk.js";import{an as te}from"./build-module-BEFTr2Ar.js";import{t as a}from"./src-C7jfdnb_.js";import{mt as ne,pn as o,t as s}from"./src-Dr6kG9oF.js";import{m as c,pt as l,vt as u}from"./charts-provider-BOeb4D5x.js";import"./rows-DAmD2BmE.js";import{r as re,t as ie}from"./leaderboard-skeleton-rzdwhklS.js";import{n as ae,r as oe,t as d}from"./register-report-mocks-lXl1wVId.js";import{t as se}from"./widget-state-BjLlcwFv.js";import{n as ce,r as f}from"./with-story-router-B8AmDh4M.js";import{f as p,o as m}from"./leaderboard-CCakycuB.js";import{H as le,_ as ue,t as h,x as g}from"./src-CmNnPPrI.js";import{a as _,g as v,h as y,i as b,m as x,n as S,p as C,r as w}from"./with-widget-canvas-BEQRzKqn.js";var T,E,D,O=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function k(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=ne({group:`posts`,max:10}),s=(0,ee.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,j.jsx)(le,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value,currentShare:u(e.value,t)}))},[e]);return(0,j.jsxs)(te,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(se,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:l(a,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:o}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ie,{rows:10}),children:(0,j.jsx)(re,{chartTitle:t(`All-time most commented posts`,`jetpack-premium-analytics-pkg`),data:s,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})}),(0,j.jsxs)(m,{children:[(0,j.jsx)(p,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)}),(0,j.jsx)(g,{exporter:ue,status:{isLoading:n,isFetching:r,isError:i},rowCount:e.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(c,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{s(),h(),i(),n(),a(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F,I,L,R,z,B,V,H=e((()=>{P=`jpa/most-commented-posts`,F=`jpa/comment`,I=`All-time most commented posts`,L=`The posts and pages that receive the most comments.`,R={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function U(){return(0,W.jsx)(A,{attributes:{reportParams:o()}})}function de(e){return(0,W.jsx)(x,{...e,widgetType:b(V),renderModule:G,renderComponent:A,attributes:{reportParams:o(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),y(),_(),ce(),S(),ae(),N(),H(),W=r(),oe(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:U,decorators:[w,f]},J={render:U,tags:[`!autodocs`],decorators:[w,f],beforeEach:d(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,f],beforeEach:d(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,f],beforeEach:d(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,f],beforeEach:d(`empty`)},Q={render:e=>(0,W.jsx)(de,{...e}),args:{...C},argTypes:{...v},decorators:[f]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};