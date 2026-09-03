import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ac as ee,Gu as i,Nu as a,Ur as o,t as s}from"./build-module-zwSmKorH.js";import{Bt as te}from"./build-module-D5hqcG7F.js";import{g as c}from"./hooks-9PWh__9i.js";import{t as ne}from"./src-DiWJo7-Y.js";import{H as re,Zt as l,t as u}from"./src-DOrTEoKe.js";import"./constants-B1kGztHF.js";import{A as ie,pt as d}from"./chart-tooltip-D2kxHGd3.js";import{r as f,t as ae}from"./leaderboard-skeleton-CFlstDda.js";import{G as oe,K as se,N as p,S as m,U as h,b as g}from"./report-metric-CaluDlNe.js";import{t as _}from"./widget-state-Ba0pg5Fh.js";import{C as v,D as y,E as b,O as x,S,T as ce,b as le,k as C,t as ue,w as de,x as w}from"./src-Cvmrr9ge.js";var T,E,D,O=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function k(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:o,refetch:s}=re({group:`authors`,max:10}),c=(0,i.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,...p({label:e.label,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}}),currentValue:e.value,currentShare:d(e.value,t)}))},[e]);return(0,j.jsxs)(te,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(_,{isLoading:n,isFetching:r,isError:a,isEmpty:e.length===0,error:ie(o,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),empty:{icon:ee,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ae,{rows:10}),children:(0,j.jsx)(f,{data:c,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),(0,j.jsx)(m,{children:(0,j.jsx)(g,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})]})}function A({attributes:e={}}){return(0,j.jsx)(c,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{u(),ue(),a(),n(),s(),ne(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F=e((()=>{s(),P={icon:o,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/most-commented-authors`,L=`Top commented authors`,R=`The people who comment the most on your site.`,z={content:`Your most active commenters, ranked by the number of comments they have left.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(A,{attributes:{reportParams:l()}})}function pe(e){return(0,W.jsx)(ce,{...e,widgetType:S(H,P),renderModule:G,renderComponent:A,attributes:{reportParams:l(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),b(),v(),x(),le(),oe(),N(),F(),fe(),W=r(),se(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "Top commented posts" covers the other.`}}}},q={render:U,decorators:[w,C]},J={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:h(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:h(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:h(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,C],beforeEach:h(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...de},argTypes:{...y},decorators:[C]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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