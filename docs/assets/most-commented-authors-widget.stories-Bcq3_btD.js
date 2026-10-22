import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Mu as i,bu as a}from"./build-module-BI3_PVVO.js";import{mt as o,pn as s,t as c}from"./src-5g9sGwvT.js";import{At as l,F as u,f as d}from"./charts-provider-C2bmnNI1.js";import"./rows-DoJXoHhN.js";import{a as f,i as p,o as m}from"./widget-state-HqBH4bUi.js";import{n as h,r as g}from"./with-story-router-CyVN4A4U.js";import{t as _}from"./leaderboard-NceDp_-s.js";import{A as v,H as y,M as b,N as x,U as S,V as C,W as w,g as T,j as E,t as D}from"./src-CIYxOsiD.js";function O(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:s,refetch:c}=o({group:`authors`,max:10}),u=(0,i.useMemo)(()=>e.map(e=>({id:e.id,label:e.label,value:e.value,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}})),[e]);return d({report:`comments`,section:`authors`,csv:{exporter:T,status:{isLoading:n,isFetching:r,isError:a},rowCount:e.length}}),(0,A.jsx)(_,{chartTitle:t(`All-time most commented authors`,`jetpack-premium-analytics-pkg`),rows:u,columns:{label:t(`Authors`,`jetpack-premium-analytics-pkg`),metric:`comments`},status:{isLoading:n,isFetching:r,isError:a,refetch:c},error:l(s,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)}})}function k({attributes:e={}}){return(0,A.jsx)(u,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j=e((()=>{c(),D(),a(),n(),A=r()})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/most-commented-authors`,N=`jpa/post-author`,P=`All-time most commented authors`,F=`The people who comment the most on your site.`,I={content:`The people who left the most comments on your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(){return(0,U.jsx)(k,{attributes:{reportParams:s()}})}function H(e){return(0,U.jsx)(y,{...e,widgetType:b(z),renderModule:W,renderComponent:k,attributes:{reportParams:s(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q;e((()=>{c(),S(),x(),h(),v(),f(),j(),B(),U=r(),m(),W=`storybook/most-commented-authors`,G={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "All-time most commented posts" covers the other.`}}}},K={render:V,decorators:[E,g]},q={render:V,tags:[`!autodocs`],decorators:[E,g],beforeEach:p(`loading`)},J={render:V,tags:[`!autodocs`],decorators:[E,g],beforeEach:p(`error`)},Y={render:V,tags:[`!autodocs`],decorators:[E,g],beforeEach:p(`error-retryable`)},X={render:V,tags:[`!autodocs`],decorators:[E,g],beforeEach:p(`empty`)},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...C},argTypes:{...w},decorators:[g]},Q=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('loading')
}`,...q.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error')
}`,...J.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error-retryable')
}`,...Y.parameters?.docs?.source},description:{story:`The proxy's \`no_connection\` 403: a broken Jetpack connection can heal, so this
one keeps its Retry action (which re-runs the query — still mocked as failing
while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedAuthors,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('empty')
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <MostCommentedAuthorsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Z.parameters?.docs?.source}}}}))();export{K as Default,X as Empty,J as ErrorState,q as Loading,Y as RetryableErrorState,Z as WidgetDashboardWithWidget,Q as __namedExportsOrder,G as default};