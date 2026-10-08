import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Sc as i,Vu as a,gc as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{Ot as ee}from"./build-module-pI6Uihcg.js";import{t as l}from"./src-Zd8DzAmX.js";import{In as u,st as d,t as f}from"./src-ckB9686_.js";import{_ as te,dt as ne,en as re}from"./charts-provider-BXXbDOcW.js";import"./rows-DAmD2BmE.js";import{r as ie,t as ae}from"./leaderboard-skeleton-CqvIykqc.js";import{n as oe,r as se,t as p}from"./register-report-mocks-DbShhgbf.js";import{t as m}from"./widget-state-nG6fVhyr.js";import{n as ce,r as h}from"./with-story-router-Beljd9ki.js";import{p as g,y as _}from"./leaderboard-C7oYGIac.js";import{S as v,n as y}from"./components-CFcuNqAa.js";import{j as b,t as x}from"./src-BJHZQ68Y.js";import{a as S,g as C,h as le,i as ue,m as de,n as fe,p as pe,r as w}from"./with-widget-canvas-BuSIbRsU.js";var T,E,D,O=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function k(){let{rows:e,isLoading:n,isFetching:r,isError:o,error:s,refetch:c}=d({group:`posts`,max:10}),l=(0,a.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,j.jsx)(v,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value,currentShare:re(e.value,t)}))},[e]);return(0,j.jsxs)(ee,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(m,{isLoading:n,isFetching:r,isError:o,isEmpty:e.length===0,error:ne(s,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:i,description:t(`None of your posts or pages have comments yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ae,{rows:10}),children:(0,j.jsx)(ie,{data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),(0,j.jsxs)(g,{children:[(0,j.jsx)(_,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)}),(0,j.jsx)(y,{exporter:b,status:{isLoading:n,isFetching:r,isError:o},rowCount:e.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(te,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{f(),x(),s(),n(),c(),l(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F=e((()=>{c(),P={icon:o,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,me=e((()=>{I=`jpa/most-commented-posts`,L=`All-time most commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(A,{attributes:{reportParams:u()}})}function he(e){return(0,W.jsx)(de,{...e,widgetType:ue(H,P),renderModule:G,renderComponent:A,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),le(),S(),ce(),fe(),oe(),N(),F(),me(),W=r(),se(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:U,decorators:[w,h]},J={render:U,tags:[`!autodocs`],decorators:[w,h],beforeEach:p(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,h],beforeEach:p(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,h],beforeEach:p(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,h],beforeEach:p(`empty`)},Q={render:e=>(0,W.jsx)(he,{...e}),args:{...pe},argTypes:{...C},decorators:[h]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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