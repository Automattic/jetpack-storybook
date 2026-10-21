import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CtMZ-PAS.js";import{Mu as i,bu as a}from"./build-module-CpZTxk98.js";import{mt as o,pn as s,t as c}from"./src-CojPwECE.js";import{lt as l,m as u}from"./charts-provider-CK79-TW3.js";import{Q as d,X as f,Y as p,Z as m,ct as h,g,lt as _,ot as v,st as y,t as b,x}from"./src-d03p2Njl.js";import"./rows-DoJXoHhN.js";import{a as S,i as C,o as w}from"./widget-state-Doi_hyaL.js";import{n as T,r as E}from"./with-story-router-BuyPN5K2.js";import{f as D,t as O}from"./leaderboard-B2VaSXfX.js";function k(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:s,refetch:c}=o({group:`authors`,max:10}),u=(0,i.useMemo)(()=>e.map(e=>({id:e.id,label:e.label,value:e.value,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}})),[e]);return(0,j.jsx)(O,{chartTitle:t(`All-time most commented authors`,`jetpack-premium-analytics-pkg`),rows:u,columns:{label:t(`Authors`,`jetpack-premium-analytics-pkg`),metric:`comments`},status:{isLoading:n,isFetching:r,isError:a,refetch:c},error:l(s,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},footer:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{report:`comments`,section:`authors`,ariaLabel:t(`See the comment authors report`,`jetpack-premium-analytics-pkg`)}),(0,j.jsx)(x,{exporter:g,status:{isLoading:n,isFetching:r,isError:a},rowCount:e.length})]})})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M=e((()=>{c(),b(),a(),n(),j=r()})),N,P,F,I,L,R,z,B,V=e((()=>{N=`jpa/most-commented-authors`,P=`jpa/post-author`,F=`All-time most commented authors`,I=`The people who comment the most on your site.`,L={content:`The people who left the most comments on your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function H(){return(0,W.jsx)(A,{attributes:{reportParams:s()}})}function U(e){return(0,W.jsx)(y,{...e,widgetType:m(B),renderModule:G,renderComponent:A,attributes:{reportParams:s(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),h(),d(),T(),p(),S(),M(),V(),W=r(),w(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "All-time most commented posts" covers the other.`}}}},q={render:H,decorators:[f,E]},J={render:H,tags:[`!autodocs`],decorators:[f,E],beforeEach:C(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[f,E],beforeEach:C(`error`)},X={render:H,tags:[`!autodocs`],decorators:[f,E],beforeEach:C(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[f,E],beforeEach:C(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...v},argTypes:{..._},decorators:[E]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostCommentedAuthorsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};