import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Sc as ee,Vu as te,gc as i,ku as a,t as o}from"./build-module-DNhkEVJn.js";import{Ot as ne}from"./build-module-pI6Uihcg.js";import{t as s}from"./src-8XaIHcQk.js";import{Nn as c,it as l,t as u}from"./src-C-o_JghQ.js";import{_ as re,lt as ie,on as ae}from"./charts-provider-BZoar1tL.js";import"./rows-DAmD2BmE.js";import{r as oe,t as se}from"./leaderboard-skeleton-DuTKlhVk.js";import{n as ce,r as d}from"./with-story-router-Beljd9ki.js";import{n as f,r as p,t as m}from"./register-report-mocks-BPy3MDBB.js";import{b as h,m as g}from"./leaderboard-Ccd3SiY3.js";import{t as _}from"./widget-state-Dfcn9KE_.js";import{S as v,n as y}from"./components-DeSfO58P.js";import{j as b,t as x}from"./src-D13Udi0I.js";import{a as S,g as C,h as le,i as ue,m as de,n as fe,p as pe,r as w}from"./with-widget-canvas-BofJtD4d.js";var T,E,D,O=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function k(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=l({group:`posts`,max:10}),s=(0,te.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,j.jsx)(v,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value,currentShare:ae(e.value,t)}))},[e]);return(0,j.jsxs)(ne,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(_,{isLoading:n,isFetching:r,isError:i,isEmpty:e.length===0,error:ie(a,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:o}),empty:{icon:ee,description:t(`None of your posts or pages have comments yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(se,{rows:10}),children:(0,j.jsx)(oe,{data:s,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),(0,j.jsxs)(g,{children:[(0,j.jsx)(h,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)}),(0,j.jsx)(y,{exporter:b,status:{isLoading:n,isFetching:r,isError:i},rowCount:e.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(re,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{u(),x(),a(),n(),o(),s(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F=e((()=>{o(),P={icon:i,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,me=e((()=>{I=`jpa/most-commented-posts`,L=`All-time most commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(A,{attributes:{reportParams:c()}})}function he(e){return(0,W.jsx)(de,{...e,widgetType:ue(H,P),renderModule:G,renderComponent:A,attributes:{reportParams:c(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),le(),S(),ce(),fe(),f(),N(),F(),me(),W=r(),p(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:U,decorators:[w,d]},J={render:U,tags:[`!autodocs`],decorators:[w,d],beforeEach:m(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,d],beforeEach:m(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,d],beforeEach:m(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,d],beforeEach:m(`empty`)},Q={render:e=>(0,W.jsx)(he,{...e}),args:{...pe},argTypes:{...C},decorators:[d]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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