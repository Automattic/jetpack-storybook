import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a,t as o,wc as ee}from"./build-module-Cm3Kd3py.js";import{At as te}from"./build-module-D2aEjqke.js";import{t as s}from"./src-DxplVuUa.js";import{st as c,t as l,wn as u}from"./src-C-EghbUA.js";import{Xt as ne,_ as d,pt as f}from"./charts-provider-DqwK50kj.js";import"./rows-DAmD2BmE.js";import{r as p,t as m}from"./leaderboard-skeleton-DAtYE-w1.js";import{n as h,r as g,t as _}from"./register-report-mocks-s-nppK1i.js";import{t as v}from"./widget-state-BV7A4dgE.js";import{n as y,r as b}from"./with-story-router-Beljd9ki.js";import{p as x,y as re}from"./leaderboard-DWybDTNC.js";import{S as ie,n as ae}from"./components-DWb0bf80.js";import{t as oe,y as se}from"./src-0KcSXslG.js";import{a as ce,g as le,h as ue,i as de,m as fe,n as pe,p as S,r as C}from"./with-widget-canvas-BbIjt46K.js";var w,T,E,D=e((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function O(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:o,refetch:s}=c({group:`posts`,max:10}),l=(0,i.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,A.jsx)(ie,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value,currentShare:ne(e.value,t)}))},[e]);return(0,A.jsxs)(te,{className:E.root,children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(v,{isLoading:n,isFetching:r,isError:a,isEmpty:e.length===0,error:f(o,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),empty:{icon:ee,description:t(`None of your posts or pages have comments yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(m,{rows:10}),children:(0,A.jsx)(p,{data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsxs)(x,{children:[(0,A.jsx)(re,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)}),(0,A.jsx)(ae,{exporter:se,status:{isLoading:n,isFetching:r,isError:a},rowCount:e.length})]})]})}function k({attributes:e={}}){return(0,A.jsx)(d,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j,M=e((()=>{l(),oe(),a(),n(),o(),s(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P=e((()=>{N={attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H,me=e((()=>{F=`jpa/most-commented-posts`,I=`jpa/comment`,L=`All-time most commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:u()}})}function he(e){return(0,W.jsx)(fe,{...e,widgetType:de(H,N),renderModule:G,renderComponent:k,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),ue(),ce(),y(),pe(),h(),M(),P(),me(),W=r(),g(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:U,decorators:[C,b]},J={render:U,tags:[`!autodocs`],decorators:[C,b],beforeEach:_(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[C,b],beforeEach:_(`error`)},X={render:U,tags:[`!autodocs`],decorators:[C,b],beforeEach:_(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[C,b],beforeEach:_(`empty`)},Q={render:e=>(0,W.jsx)(he,{...e}),args:{...S},argTypes:{...le},decorators:[b]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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