import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Mu as i,bu as a}from"./build-module-BI3_PVVO.js";import{Ft as o,I as s,f as c}from"./charts-provider-CJceu84j.js";import{t as l,vn as u,yt as d}from"./src-DvzWgCqE.js";import{i as f,n as p,r as m,y as h,z as g}from"./with-story-router-Bl7d_9HM.js";import"./constants-B9OTkkI1.js";import{n as _,r as v,t as y}from"./register-report-mocks-CI2bPEM7.js";import{a as b,g as x,h as S,i as C,m as w,n as T,p as E,r as D}from"./with-widget-canvas-BX79mBf6.js";function O(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:s,refetch:l}=d({group:`authors`,max:10}),u=(0,i.useMemo)(()=>e.map(e=>({id:e.id,label:e.label,value:e.value,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}})),[e]);return c({csv:{exporter:h,status:{isLoading:n,isFetching:r,isError:a},rowCount:e.length}}),(0,A.jsx)(g,{chartTitle:t(`All-time most commented authors`,`jetpack-premium-analytics-pkg`),rows:u,columns:{label:t(`Authors`,`jetpack-premium-analytics-pkg`),metric:`comments`},status:{isLoading:n,isFetching:r,isError:a,refetch:l},error:o(s,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)}})}function k({attributes:e={}}){return(0,A.jsx)(s,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j=e((()=>{l(),f(),a(),n(),A=r()})),M,N,P,F,I,L,R,z,B,V=e((()=>{M=`jpa/most-commented-authors`,N=`jpa/post-author`,P=`All-time most commented authors`,F=`The people who comment the most on your site.`,I={content:`The people who left the most comments on your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fcomments%3Fsection%3Dauthors`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function H(){return(0,W.jsx)(k,{attributes:{reportParams:u()}})}function U(e){return(0,W.jsx)(w,{...e,widgetType:C(B),renderModule:G,renderComponent:k,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),S(),b(),p(),T(),_(),j(),V(),W=r(),v(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "All-time most commented posts" covers the other.`}}}},q={render:H,decorators:[D,m]},J={render:H,tags:[`!autodocs`],decorators:[D,m],beforeEach:y(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[D,m],beforeEach:y(`error`)},X={render:H,tags:[`!autodocs`],decorators:[D,m],beforeEach:y(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[D,m],beforeEach:y(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...E},argTypes:{...x},decorators:[m]},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};