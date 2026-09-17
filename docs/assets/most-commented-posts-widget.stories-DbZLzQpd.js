import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Uu as ee,ju as i,t as a,vc as o,wc as te}from"./build-module-2iv4IIRq.js";import{vt as s}from"./build-module-BX6MUpOQ2.js";import{St as c,an as ne,g as l}from"./hooks-M-E34Ffd.js";import{t as re}from"./src-X8LsuMeJ.js";import{G as ie,en as u,r as d}from"./date-period-dropdown-B7cnUgNF.js";import"./constants-B1kGztHF.js";import{r as ae,t as oe}from"./leaderboard-skeleton-C9NOvztS.js";import{i as f,r as p,t as m}from"./register-report-mocks-B7i-hB1u.js";import{S as h,b as se,w as ce}from"./report-metric-CqC4Xe7H.js";import{t as g}from"./widget-state-m68sfvpV.js";import{t as _}from"./src-CeJib-HQ.js";import{a as v,c as y,d as b,i as x,l as S,n as C,o as le,r as w,s as ue,u as de}from"./with-widget-canvas-DKFoIKhQ.js";var T,E,D,O=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function k(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=ie({group:`posts`,max:10}),l=(0,ee.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,j.jsx)(se,{id:e.postId,label:e.label,link:e.link}),currentValue:e.value,currentShare:ne(e.value,t)}))},[e]);return(0,j.jsxs)(s,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(g,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:c(a,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:o}),empty:{icon:te,description:t(`None of your posts or pages have comments yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(oe,{rows:10}),children:(0,j.jsx)(ae,{data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),(0,j.jsx)(ce,{children:(0,j.jsx)(h,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)})})]})}function A({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{d(),_(),i(),n(),a(),re(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F=e((()=>{a(),P={icon:o,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/most-commented-posts`,L=`All-time most commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(A,{attributes:{reportParams:u()}})}function pe(e){return(0,W.jsx)(ue,{...e,widgetType:x(H,P),renderModule:G,renderComponent:A,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),y(),v(),de(),C(),p(),N(),F(),fe(),W=r(),f(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:U,decorators:[w,b]},J={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:m(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:m(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:m(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:m(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...le},argTypes:{...S},decorators:[b]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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