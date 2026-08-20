import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{Dc as te,Wr as a,n as o}from"./build-module-CDRs4YxF.js";import{ln as s,t as c}from"./src-NeV_lg2z.js";import{E as l,G as u,J as ne,P as re,q as ie,tt as ae,w as oe}from"./report-metric-CG4McNXT.js";import{Gt as d,N as se,t as f}from"./src-Boe-c6TP.js";import{at as p,w as ce,x as le}from"./chart-tooltip-DEV3Aqbv.js";import{r as ue,t as m}from"./leaderboard-skeleton-CEZ8h0Q-.js";import{t as h}from"./widget-state-BsgP3UWI.js";import{C as g,D as _,E as v,O as y,S as b,T as x,b as de,k as S,t as fe,w as pe,x as C}from"./src-D-0P4cBO.js";var w,T,E,D=e((()=>{w=`_root_jzzhc_1`,T=`_content_jzzhc_9`,E={root:w,content:T}}));function O({max:e}){let{rows:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:c}=se({group:`authors`,max:e}),u=(0,ee.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map(t=>({id:t.id,...re({label:t.label,media:{kind:`avatar`,url:t.avatarUrl,name:t.label},action:t.link?{kind:`link`,href:t.link}:{kind:`static`}}),currentValue:t.value,currentShare:p(t.value,e)}))},[n]);return(0,A.jsxs)(s,{className:E.root,children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(h,{isLoading:r,isFetching:i,isError:a,isEmpty:n.length===0,error:le(o,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:te,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(m,{rows:e}),children:(0,A.jsx)(ue,{data:u,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(l,{children:(0,A.jsx)(oe,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(ae,{attributes:e,children:(0,A.jsx)(O,{max:ce(e.max,M)})})}var A,j,M,N=e((()=>{f(),fe(),i(),n(),o(),c(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=10})),P,F=e((()=>{n(),o(),P={icon:a,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),I,L,R,z,B,V,H,me=e((()=>{I=`jpa/most-commented-authors`,L=`Top commented authors`,R=`The people who comment the most on your site.`,z={content:`Your most active commenters, ranked by the number of comments they have left.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:d()}})}function he(e){return(0,W.jsx)(x,{...e,widgetType:b(H,P),renderModule:G,renderComponent:k,attributes:{reportParams:d(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),v(),g(),y(),de(),ie(),N(),F(),me(),W=r(),ne(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "Top commented posts" covers the other.`}}}},q={render:U,decorators:[C,S]},J={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:u(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:u(`error`)},X={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:u(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:u(`empty`)},Q={render:e=>(0,W.jsx)(he,{...e}),args:{...pe},argTypes:{..._},decorators:[S]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('loading')
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error')
}`,...Y.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error-retryable')
}`,...X.parameters?.docs?.source},description:{story:`The proxy's \`no_connection\` 403: a broken Jetpack connection can heal, so this
one keeps its Retry action (which re-runs the query — still mocked as failing
while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral comment
author glyph and "No one has commented on your site yet.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostCommentedAuthorsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};