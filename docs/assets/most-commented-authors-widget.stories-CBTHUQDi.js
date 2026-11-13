import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{ou as i,vu as a}from"./build-module-D8x1-0PG.js";import{Cn as o,St as s,t as c}from"./src-Bm9MmJNJ.js";import{I as l,Wt as u,f as d}from"./charts-provider-iKLRcVDw.js";import{U as f,i as p,n as m,r as h,y as g}from"./with-story-router-B_cck7yz.js";import"./constants-Cx6tCf49.js";import{n as _,r as v,t as y}from"./register-report-mocks-D3lWkH8m.js";import{a as b,c as x,i as S,l as C,o as w,r as T,s as E,u as D}from"./with-widget-canvas-BhyYVwV4.js";function O(){let{rows:e,isLoading:n,isFetching:r,isError:i,error:o,refetch:c}=s({group:`authors`,max:10}),l=(0,a.useMemo)(()=>e.map(e=>({id:e.id,label:e.label,value:e.value,media:{kind:`avatar`,url:e.avatarUrl,name:e.label},action:e.link?{kind:`link`,href:e.link}:{kind:`static`}})),[e]);return d({csv:{exporter:g,status:{isLoading:n,isFetching:r,isError:i},rowCount:e.length}}),(0,A.jsx)(f,{rows:l,columns:{label:t(`Authors`,`jetpack-premium-analytics-pkg`),metric:`comments`},status:{isLoading:n,isFetching:r,isError:i,refetch:c},error:u(o,{retryDescription:t(`We couldn't load comment authors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)}})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j=e((()=>{c(),p(),i(),n(),A=r()})),M,N,P,F,I,L,R,z,B,V=e((()=>{M=`jpa/most-commented-authors`,N=`jpa/post-author`,P=`All-time most commented authors`,F=`The people who comment the most on your site.`,I={content:`The people who left the most comments on your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fcomments%3Fsection%3Dauthors`}],B={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R,actions:z}}));function H(){return(0,W.jsx)(k,{attributes:{reportParams:o()}})}function U(e){return(0,W.jsx)(x,{...e,widgetType:b(B),renderModule:G,renderComponent:k,attributes:{reportParams:o(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),C(),w(),m(),T(),_(),j(),V(),W=r(),v(),G=`storybook/most-commented-authors`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedAuthors`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented authors" widget. Ranks the people who comment most on the site by comment count, linking each guest commenter to the comment management screen filtered to them. One half of the Jetpack Stats Comments module; "All-time most commented posts" covers the other.`}}}},q={render:H,decorators:[S,h]},J={render:H,tags:[`!autodocs`],decorators:[S,h],beforeEach:y(`loading`)},Y={render:H,tags:[`!autodocs`],decorators:[S,h],beforeEach:y(`error`)},X={render:H,tags:[`!autodocs`],decorators:[S,h],beforeEach:y(`error-retryable`)},Z={render:H,tags:[`!autodocs`],decorators:[S,h],beforeEach:y(`empty`)},Q={tags:[`widget-dashboard`],render:e=>(0,W.jsx)(U,{...e}),args:{...E},argTypes:{...D},decorators:[h]},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
  render: args => <MostCommentedAuthorsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};