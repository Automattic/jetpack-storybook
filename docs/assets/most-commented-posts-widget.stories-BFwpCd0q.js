import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Uu as ee,ju as i,t as a,vc as o,wc as te}from"./build-module-2iv4IIRq.js";import{Et as s}from"./build-module-l8c-_EUg2.js";import{m as c}from"./hooks-DhzBV_ZP.js";import{t as ne}from"./src-Dc35GFlo.js";import{$t as l,W as u,t as d}from"./src-Dje-JtJM.js";import{B as re,Et as ie}from"./helpers-WpzWo0Yj.js";import"./constants-B1kGztHF.js";import{r as ae,t as oe}from"./leaderboard-skeleton-4SxmWzYj.js";import{i as se,r as f,t as p}from"./register-report-mocks-BIaauk3d.js";import{S as m,g as ce,v as le}from"./report-metric-BhIPdF3v.js";import{t as h}from"./widget-state-DnbigfFx.js";import{t as g}from"./src-DJOS8unC.js";import{a as _,d as v,f as y,h as b,i as x,m as S,n as C,p as ue,r as w,u as de}from"./with-widget-canvas-B1v2H8hA.js";var T,E,D,O=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function k(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=u({group:`posts`,max:10}),c=(0,ee.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,j.jsx)(ce,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value,currentShare:ie(e.value,t)}))},[e]);return(0,j.jsxs)(s,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(h,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:re(a,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:o}),empty:{icon:te,description:t(`None of your posts or pages have comments yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(oe,{rows:10}),children:(0,j.jsx)(ae,{data:c,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),(0,j.jsx)(m,{children:(0,j.jsx)(le,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)})})]})}function A({attributes:e={}}){return(0,j.jsx)(c,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{d(),g(),i(),n(),a(),ne(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F=e((()=>{a(),P={icon:o,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/most-commented-posts`,L=`All-time most commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(A,{attributes:{reportParams:l()}})}function pe(e){return(0,W.jsx)(v,{...e,widgetType:x(H,P),renderModule:G,renderComponent:A,attributes:{reportParams:l(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),y(),_(),S(),C(),f(),N(),F(),fe(),W=r(),se(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:U,decorators:[w,b]},J={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:p(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:p(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:p(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:p(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...de},argTypes:{...ue},decorators:[b]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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