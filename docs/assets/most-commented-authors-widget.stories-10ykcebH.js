import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{Dc as te,Wr as a,n as o}from"./build-module-CDRs4YxF.js";import{lr as s,t as c}from"./src-B-cUg7xA.js";import{E as ne,K as l,M as re,W as u,et as ie,q as ae,w as oe}from"./report-metric-DykAMe7x.js";import{Tt as d,Z as se,g as f,hr as p,p as ce,rn as le}from"./chart-tooltip-KET-sEal.js";import{t as ue}from"./leaderboard-chart-DTmdBqtb.js";import{t as m}from"./widget-state-BlpU-WUj.js";import{C as h,D as g,E as _,O as v,S as y,T as b,b as x,k as S,t as de,w as fe,x as C}from"./src-Bhzo9Aci.js";var w,T,E,D=e((()=>{w=`_root_1hs5m_1`,T=`_content_1hs5m_11`,E={root:w,content:T}}));function O({max:e}){let{rows:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:c}=le({group:`authors`,max:e}),l=(0,ee.useMemo)(()=>{let e=Math.max(...n.map(e=>e.value),0);return n.map(t=>({id:t.id,...re({label:t.label,media:{kind:`avatar`,url:t.avatarUrl,name:t.label},action:t.link?{kind:`link`,href:t.link}:{kind:`static`}}),currentValue:t.value,currentShare:se(t.value,e)}))},[n]);return(0,A.jsxs)(s,{className:E.root,children:[(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(m,{isLoading:r,isFetching:i,isError:a,isEmpty:n.length===0,error:ce(o,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:te,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(ue,{data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),(0,A.jsx)(ne,{children:(0,A.jsx)(oe,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})]})}function k({attributes:e={}}){return(0,A.jsx)(ie,{attributes:e,children:(0,A.jsx)(O,{max:f(e.max,M)})})}var A,j,M,N=e((()=>{d(),de(),i(),n(),o(),c(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=10})),P,F=e((()=>{n(),o(),P={icon:a,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),I,L,R,z,B,V,H,pe=e((()=>{I=`jpa/most-commented-authors`,L=`Top commented authors`,R=`The people who comment the most on your site.`,z={content:`Your most active commenters, ranked by the number of comments they have left.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(){return(0,W.jsx)(k,{attributes:{reportParams:p()}})}function me(e){return(0,W.jsx)(b,{...e,widgetType:y(H,P),renderModule:G,renderComponent:k,attributes:{reportParams:p(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),_(),h(),v(),x(),l(),N(),F(),pe(),W=r(),ae(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Top commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "Top commented posts" covers the other.`}}}},q={render:U,decorators:[C,S]},J={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:u(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:u(`error`)},X={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:u(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[C,S],beforeEach:u(`empty`)},Q={render:e=>(0,W.jsx)(me,{...e}),args:{...fe},argTypes:{...g},decorators:[S]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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