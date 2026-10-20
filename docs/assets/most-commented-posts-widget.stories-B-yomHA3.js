import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as ee,Nu as i}from"./build-module-CDZL_1rk.js";import{an as te}from"./build-module-CAFOM4b7.js";import{t as a}from"./src-BhzPmRJD.js";import{mt as ne,pn as o,t as s}from"./src-CwgS6DbJ.js";import{gt as re,m as c,xt as l}from"./charts-provider-B52lxlWo.js";import"./rows-DAmD2BmE.js";import{r as ie,t as ae}from"./leaderboard-skeleton-CgMCjix4.js";import{n as oe,r as se,t as u}from"./register-report-mocks-iOc7n2pO.js";import{t as ce}from"./widget-state-DUREPpgs.js";import{n as le,r as d}from"./with-story-router-B8AmDh4M.js";import{f,o as p}from"./leaderboard-BX9l8C4b.js";import{C as ue,W as de,t as m,y as h}from"./src-BSYJYqKj.js";import{a as g,g as _,h as v,i as y,m as b,n as x,p as S,r as C}from"./with-widget-canvas-CdrRGt-_.js";var w,T,E,D=e((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function O(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=ne({group:`posts`,max:10}),s=(0,ee.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,A.jsx)(de,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value,currentShare:l(e.value,t)}))},[e]);return(0,A.jsxs)(te,{className:E.root,children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(ce,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:re(a,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:o}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ae,{rows:10}),children:(0,A.jsx)(ie,{chartTitle:t(`All-time most commented posts`,`jetpack-premium-analytics-pkg`),data:s,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})}),(0,A.jsxs)(p,{children:[(0,A.jsx)(f,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)}),(0,A.jsx)(ue,{exporter:h,status:{isLoading:n,isFetching:r,isError:i},rowCount:e.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j,M=e((()=>{s(),m(),i(),n(),a(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P=e((()=>{N={attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H,fe=e((()=>{F=`jpa/most-commented-posts`,I=`jpa/comment`,L=`All-time most commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:o()}})}function pe(e){return(0,W.jsx)(b,{...e,widgetType:y(H,N),renderModule:G,renderComponent:k,attributes:{reportParams:o(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),v(),g(),le(),x(),oe(),M(),P(),fe(),W=r(),se(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:U,decorators:[C,d]},J={render:U,tags:[`!autodocs`],decorators:[C,d],beforeEach:u(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[C,d],beforeEach:u(`error`)},X={render:U,tags:[`!autodocs`],decorators:[C,d],beforeEach:u(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[C,d],beforeEach:u(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...S},argTypes:{..._},decorators:[d]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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