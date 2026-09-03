import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ac as ee,Gu as i,Nu as a,Ur as o,t as s}from"./build-module-zwSmKorH.js";import{Bt as te}from"./build-module-D5hqcG7F.js";import{K as ne,g as c,kt as re}from"./hooks-DAk3lrqM.js";import{t as ie}from"./src-LHtjE2ZJ.js";import{G as ae,en as l,i as u}from"./date-filters-panel-CCl4aujk.js";import"./constants-B1kGztHF.js";import{r as d,t as oe}from"./leaderboard-skeleton-BR1qK5D_.js";import{G as se,K as ce,N as f,S as p,U as m,b as h}from"./report-metric-BCvdZklk.js";import{t as g}from"./widget-state-DIwZlBu4.js";import{C as _,D as v,E as y,O as b,S as x,T as le,b as ue,k as S,t as de,w as fe,x as C}from"./src-CNm0tv7X.js";var w,T,E,D=e((()=>{w=`_root_19tfr_1`,T=`_content_19tfr_9`,E={root:w,content:T}}));function O(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:o,refetch:s}=ae({group:`authors`,max:10}),c=(0,i.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,...f({label:e.label,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}}),currentValue:e.value,currentShare:re(e.value,t)}))},[e]);return(0,A.jsxs)(te,{className:E.root,children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(g,{isLoading:n,isFetching:r,isError:a,isEmpty:e.length===0,error:ne(o,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),empty:{icon:ee,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(d,{data:c,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(p,{children:(0,A.jsx)(h,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j,M=e((()=>{u(),de(),a(),n(),s(),ie(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,P=e((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,pe=e((()=>{F=`jpa/most-commented-authors`,I=`Top commented authors`,L=`The people who comment the most on your site.`,R={content:`Your most active commenters, ranked by the number of comments they have left.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(){return(0,W.jsx)(k,{attributes:{reportParams:l()}})}function U(e){return(0,W.jsx)(le,{...e,widgetType:x(V,N),renderModule:G,renderComponent:k,attributes:{reportParams:l(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),y(),_(),b(),ue(),se(),M(),P(),pe(),W=r(),ce(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "Top commented posts" covers the other.`}}}},q={render:H,decorators:[C,S]},J={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:m(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:m(`error`)},X={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:m(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[C,S],beforeEach:m(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...fe},argTypes:{...v},decorators:[S]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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