import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a,Oc as o,t as s}from"./build-module-Cm3Kd3py.js";import{Mn as c,st as l,t as u}from"./src-DQYt8jCH.js";import{_ as d,dt as f}from"./charts-provider-THvfZibh.js";import"./rows-DAmD2BmE.js";import{n as p,r as m,t as h}from"./register-report-mocks-CKRy3LZg.js";import{n as g,r as _}from"./with-story-router-Beljd9ki.js";import{t as ee,y as te}from"./leaderboard-B3gqTzsi.js";import{n as v}from"./components-Bh7_pEK4.js";import{t as y,w as ne}from"./src-C7ZjB0TJ.js";import{a as b,g as x,h as S,i as C,m as w,n as T,p as E,r as D}from"./with-widget-canvas-Cr9xwJOJ.js";function O(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:s,refetch:c}=l({group:`authors`,max:10});return(0,A.jsx)(ee,{rows:(0,i.useMemo)(()=>e.map(e=>({id:e.id,label:e.label,value:e.value,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}})),[e]),status:{isLoading:n,isFetching:r,isError:a,refetch:c},error:f(s,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:o,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},footer:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(te,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)}),(0,A.jsx)(v,{exporter:ne,status:{isLoading:n,isFetching:r,isError:a},rowCount:e.length})]})})}function k({attributes:e={}}){return(0,A.jsx)(d,{attributes:e,children:(0,A.jsx)(O,{})})}var A,re=e((()=>{u(),y(),a(),n(),s(),A=r()})),j,M=e((()=>{j={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,V=e((()=>{N=`jpa/most-commented-authors`,P=`jpa/post-author`,F=`All-time most commented authors`,I=`The people who comment the most on your site.`,L={content:`The people who left the most comments on your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function H(){return(0,W.jsx)(k,{attributes:{reportParams:c()}})}function U(e){return(0,W.jsx)(w,{...e,widgetType:C(B,j),renderModule:G,renderComponent:k,attributes:{reportParams:c(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),S(),b(),g(),T(),p(),re(),M(),V(),W=r(),m(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "All-time most commented posts" covers the other.`}}}},q={render:H,decorators:[D,_]},J={render:H,tags:[`!autodocs`],decorators:[D,_],beforeEach:h(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[D,_],beforeEach:h(`error`)},X={render:H,tags:[`!autodocs`],decorators:[D,_],beforeEach:h(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[D,_],beforeEach:h(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...E},argTypes:{...x},decorators:[_]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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