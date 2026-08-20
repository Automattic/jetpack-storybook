import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{Cc as te,_c as a,n as o}from"./build-module-CDRs4YxF.js";import{ln as ne,t as s}from"./src-CkePhtYg.js";import{$ as c,G as re,K as ie,S as ae,U as l,b as oe,w as se}from"./report-metric-CPA6R3m5.js";import{Gt as u,N as ce,t as d}from"./src-Cmxy-Z5o.js";import{at as f,w as le,x as ue}from"./chart-tooltip-DowEDPST.js";import{r as de,t as p}from"./leaderboard-skeleton-262W4iHj.js";import{t as m}from"./widget-state-CJmMNZzn.js";import{C as h,D as g,E as _,O as v,S as y,T as b,b as x,k as S,t as fe,w as pe,x as C}from"./src-Oqkq0snT.js";var w,T,E,D=e((()=>{w=`_root_jzzhc_1`,T=`_content_jzzhc_9`,E={root:w,content:T}}));function O({max:e}){let{rows:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=ce({group:`posts`,max:e}),c=(0,ee.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map(t=>({id:t.id,label:(0,A.jsx)(oe,{id:t.postId,label:t.label,link:t.link}),currentValue:t.value,currentShare:f(t.value,e)}))},[n]);return(0,A.jsxs)(ne,{className:E.root,children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(m,{isLoading:r,isFetching:i,isError:a,isEmpty:n.length===0,error:ue(o,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),empty:{icon:te,description:t(`None of your posts or pages have comments yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(p,{rows:e}),children:(0,A.jsx)(de,{data:c,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(se,{children:(0,A.jsx)(ae,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(O,{max:le(e.max,M)})})}var A,j,M,N=e((()=>{d(),fe(),i(),n(),o(),s(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=10})),P,F=e((()=>{n(),o(),P={icon:a,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),I,L,R,z,B,V,H,me=e((()=>{I=`jpa/most-commented-posts`,L=`Top commented posts`,R=`The posts and pages that receive the most comments.`,z={content:`Your posts and pages, ranked by the number of comments they have received.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:u()}})}function he(e){return(0,W.jsx)(b,{...e,widgetType:y(H,P),renderModule:G,renderComponent:k,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),_(),h(),v(),x(),re(),N(),F(),me(),W=r(),ie(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "Top commented authors" covers the other.`}}}},q={render:U,decorators:[C,S]},J={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:l(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:l(`error`)},X={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:l(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:l(`empty`)},Q={render:e=>(0,W.jsx)(he,{...e}),args:{...pe},argTypes:{...g},decorators:[S]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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