import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Oc as ee,Uu as i,Vr as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{Et as c}from"./build-module-l8c-_EUg2.js";import{Et as l,fn as te,m as u}from"./hooks-CjfhbFCd.js";import{t as ne}from"./src-CUa-8SMj.js";import{K as re,r as d,tn as f}from"./date-period-dropdown-DPK-saGw.js";import"./constants-B1kGztHF.js";import{r as ie,t as ae}from"./leaderboard-skeleton-PFIQKu4M.js";import{i as p,r as m,t as h}from"./register-report-mocks-D5m2tI0t.js";import{S as oe,j as se,v as ce}from"./report-metric-yKrjF6nK.js";import{t as g}from"./widget-state-BwuUm-vL.js";import{t as _}from"./src-B8Xxe6r6.js";import{a as v,c as y,d as b,i as x,l as S,n as C,o as le,r as w,s as ue,u as de}from"./with-widget-canvas-xUGZqhxz.js";var T,E,D,O=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function k(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:o,refetch:s}=re({group:`authors`,max:10}),u=(0,i.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,...se({label:e.label,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}}),currentValue:e.value,currentShare:te(e.value,t)}))},[e]);return(0,j.jsxs)(c,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(g,{isLoading:n,isFetching:r,isError:a,isEmpty:e.length===0,error:l(o,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),empty:{icon:ee,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ae,{rows:10}),children:(0,j.jsx)(ie,{data:u,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),(0,j.jsx)(oe,{children:(0,j.jsx)(ce,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})]})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{d(),_(),o(),n(),s(),ne(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F=e((()=>{s(),P={icon:a,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/most-commented-authors`,L=`All-time most commented authors`,R=`The people who comment the most on your site.`,z={content:`The people who left the most comments on your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(A,{attributes:{reportParams:f()}})}function pe(e){return(0,W.jsx)(ue,{...e,widgetType:x(H,P),renderModule:G,renderComponent:A,attributes:{reportParams:f(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),y(),v(),de(),C(),m(),N(),F(),fe(),W=r(),p(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "All-time most commented posts" covers the other.`}}}},q={render:U,decorators:[w,b]},J={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:h(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:h(`error`)},X={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:h(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[w,b],beforeEach:h(`empty`)},Q={render:e=>(0,W.jsx)(pe,{...e}),args:{...le},argTypes:{...S},decorators:[b]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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