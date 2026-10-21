import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CtMZ-PAS.js";import{Mu as i,bu as a}from"./build-module-CpZTxk98.js";import{an as o}from"./build-module-Dgt19C3i.js";import{t as s}from"./src-CKJlz8cP.js";import{mt as ee,pn as c,t as l}from"./src-CojPwECE.js";import{lt as u,m as d,mt as f}from"./charts-provider-CK79-TW3.js";import{H as te,Q as ne,X as p,Y as re,Z as ie,_ as ae,ct as oe,lt as se,ot as m,st as h,t as ce,x as le}from"./src-d03p2Njl.js";import{t as g}from"./widget-state-Bg8KvWWA.js";import"./rows-DoJXoHhN.js";import{r as _,t as v}from"./leaderboard-skeleton-DnV4GJxe.js";import{a as y,i as b,o as x}from"./widget-state-Doi_hyaL.js";import{n as S,r as C}from"./with-story-router-BuyPN5K2.js";import{f as w,o as ue}from"./leaderboard-B2VaSXfX.js";var T,E,D,O=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function k(){let{rows:e,isLoading:n,isFetching:r,isError:a,error:s,refetch:c}=ee({group:`posts`,max:10}),l=(0,i.useMemo)(()=>{let t=Math.max(...e.map(e=>e.value),0);return e.map(e=>({id:e.id,label:(0,j.jsx)(te,{id:e.postId,label:e.label,link:e.link,origin:{report:`comments`,section:`posts`}}),currentValue:e.value,currentShare:f(e.value,t)}))},[e]);return(0,j.jsxs)(o,{className:D.root,children:[(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(g,{isLoading:n,isFetching:r,isError:a,isEmpty:e.length===0,error:u(s,{retryDescription:t(`We couldn't load commented posts. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{description:t(`You don’t have comments recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(v,{rows:10}),children:(0,j.jsx)(_,{chartTitle:t(`All-time most commented posts`,`jetpack-premium-analytics-pkg`),data:l,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:t(`Posts`,`jetpack-premium-analytics-pkg`),metric:`comments`}})})}),(0,j.jsxs)(ue,{children:[(0,j.jsx)(w,{report:`comments`,section:`posts`,ariaLabel:t(`See the commented posts report`,`jetpack-premium-analytics-pkg`)}),(0,j.jsx)(le,{exporter:ae,status:{isLoading:n,isFetching:r,isError:a},rowCount:e.length})]})]})}function A({attributes:e={}}){return(0,j.jsx)(d,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{l(),ce(),a(),n(),s(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F,I,L,R,z,B,V,H=e((()=>{P=`jpa/most-commented-posts`,F=`jpa/comment`,I=`All-time most commented posts`,L=`The posts and pages that receive the most comments.`,R={content:`The posts and pages that received the most comments.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`stats`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function U(){return(0,W.jsx)(A,{attributes:{reportParams:c()}})}function de(e){return(0,W.jsx)(h,{...e,widgetType:ie(V),renderModule:G,renderComponent:A,attributes:{reportParams:c(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),oe(),ne(),S(),re(),y(),N(),H(),W=r(),x(),G=`storybook/most-commented-posts`,K={title:`Packages/Premium Analytics/Widgets/MostCommentedPosts`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "All-time most commented posts" widget. Ranks the posts and pages that receive the most comments, linking each row to the published post. One half of the Jetpack Stats Comments module; "All-time most commented authors" covers the other.`}}}},q={render:U,decorators:[p,C]},J={render:U,tags:[`!autodocs`],decorators:[p,C],beforeEach:b(`loading`)},Y={render:U,tags:[`!autodocs`],decorators:[p,C],beforeEach:b(`error`)},X={render:U,tags:[`!autodocs`],decorators:[p,C],beforeEach:b(`error-retryable`)},Z={render:U,tags:[`!autodocs`],decorators:[p,C],beforeEach:b(`empty`)},Q={render:e=>(0,W.jsx)(de,{...e}),args:{...m},argTypes:{...se},decorators:[C]},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('loading')
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error')
}`,...Y.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('error-retryable')
}`,...X.parameters?.docs?.source},description:{story:`The proxy's \`no_connection\` 403: a broken Jetpack connection can heal, so this
one keeps its Retry action (which re-runs the query — still mocked as failing
while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderMostCommentedPosts,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: forceStatsCommentsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostCommentedPostsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  },
  decorators: [withStoryRouter]
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`ErrorState`,`RetryableErrorState`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as ErrorState,J as Loading,X as RetryableErrorState,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};