import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ec as i,Vu as a,ku as o,t as s,zr as c}from"./build-module-DNhkEVJn.js";import{m as l}from"./hooks-DTO7E4cv.js";import{$t as u,V as d,t as f}from"./src-sR_H3c_O.js";import{B as p}from"./helpers-CwshzIKl.js";import"./rows-DAmD2BmE.js";import{n as m,r as h}from"./with-story-router-X3Hq7Fyb.js";import{n as g,r as _,t as v}from"./register-report-mocks-DVfD4054.js";import{b as y,t as b}from"./leaderboard-Bqat6ZJD.js";import{t as x}from"./src-DhWKuaPt.js";import{a as ee,d as S,f as C,i as w,n as T,p as E,r as D,u as O}from"./with-widget-canvas-C5LtvyaT.js";function k(){let{rows:e,isLoading:n,isFetching:r,isError:o,error:s,refetch:c}=d({group:`authors`,max:10});return(0,j.jsx)(b,{rows:(0,a.useMemo)(()=>e.map(e=>({id:e.id,label:e.label,value:e.value,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}})),[e]),status:{isLoading:n,isFetching:r,isError:o,refetch:c},error:p(s,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:i,description:t(`No one has commented on your site yet.`,`jetpack-premium-analytics-pkg`)},footer:(0,j.jsx)(y,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)})})}function A({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(k,{})})}var j,te=e((()=>{f(),x(),o(),n(),s(),j=r()})),M,N=e((()=>{s(),M={icon:c,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,V=e((()=>{P=`jpa/most-commented-authors`,F=`All-time most commented authors`,I=`The people who comment the most on your site.`,L={content:`The people who left the most comments on your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function H(){return(0,W.jsx)(A,{attributes:{reportParams:u()}})}function U(e){return(0,W.jsx)(S,{...e,widgetType:w(B,M),renderModule:G,renderComponent:A,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),C(),ee(),m(),T(),g(),te(),N(),V(),W=r(),_(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "All-time most commented posts" covers the other.`}}}},q={render:H,decorators:[D,h]},J={render:H,tags:[`!autodocs`],decorators:[D,h],beforeEach:v(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[D,h],beforeEach:v(`error`)},X={render:H,tags:[`!autodocs`],decorators:[D,h],beforeEach:v(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[D,h],beforeEach:v(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...O},argTypes:{...E},decorators:[h]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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