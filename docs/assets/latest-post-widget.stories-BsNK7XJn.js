import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{Er as o,Sr as s,n as c}from"./build-module-CDRs4YxF.js";import{J as l,V as ee,Y as u,b as te,nt as ne,ot as re,z as ie}from"./report-metric-BfYGxsdE.js";import{n as ae,t as oe}from"./build-module-Dvp63yDB.js";import{Dt as d,In as se,Nr as f,Rn as ce,_r as p,kn as m}from"./chart-tooltip-DuuBaBe_.js";import{t as le}from"./widget-state-B9J9IL__.js";import{C as ue,D as h,E as de,O as fe,S as g,T as _,b as pe,k as v,t as y,w as b,x}from"./src-DrAmzh1l.js";import{n as me,t as S}from"./force-stats-mock-state-i0zfI5zb.js";function he(){let e=ce(m()),t=e.data??null,n=t?.id??0,r=se({postId:n,fields:[`views`,`like_count`,`post`]}),i=e.isLoading||n>0&&r.isLoading,a=e.isFetching||r.isFetching,o=e.isError,s=()=>{e.refetch(),n>0&&r.refetch()};return{post:t?{...t,views:r.data?.views,likeCount:r.data?.like_count,commentCount:r.data?.post?.comment_count}:null,isLoading:i,isFetching:a,isError:o,refetch:s}}var ge=e((()=>{d()}));function _e(){let{post:e,isLoading:n,isFetching:r,isError:a,refetch:s}=he(),{reportParams:c}=re(),l=(0,i.useMemo)(()=>ee(c),[c]),u=e?[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:e.views},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),value:e.likeCount},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),value:e.commentCount}]:[];return(0,w.jsx)(le,{isLoading:n,isFetching:r,isError:a,isEmpty:!e,error:{description:t(`We couldn't load your latest post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:o,description:t(`Publish a post to see its stats here.`,`jetpack-premium-analytics-pkg`)},children:e&&(0,w.jsx)(te,{title:e.title,url:e.url,postId:e.id,detailSearch:l,date:e.date,imageUrl:e.imageUrl,imageAlt:e.imageAlt,metrics:u})})}function C({attributes:e={}}){return(0,w.jsx)(ne,{attributes:e,children:(0,w.jsx)(_e,{})})}var w,T=e((()=>{ie(),y(),a(),n(),c(),ge(),w=r()})),E,ve=e((()=>{c(),E={icon:s,attributes:[],example:{attributes:{}}}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/latest-post`,O=`Latest post`,k=`Your most recently published post with its views, likes, and comments.`,A={content:`Your most recently published post with its views, likes, and comments.`},j=`stats`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function ye(){U||(U=!0,oe.use((e,t)=>{let n=e.path??e.url??``;return n.startsWith(B)?Promise.resolve(H):n.startsWith(z)?Promise.resolve(V):t(e)}))}function be(){return(0,R.jsx)(C,{attributes:{reportParams:p()}})}function F(e){return(0,R.jsx)(C,{attributes:{reportParams:p(!1,e)}})}function I(e){let t=e=>{S(z,e),S(B,e)},n=()=>{f.removeQueries({queryKey:[`latest-post`]}),f.removeQueries({queryKey:[`stats`,`post`]})};return t(e),n(),()=>{t(null),n()}}function L(e){return(0,R.jsx)(_,{...e,widgetType:g(N,E),renderModule:W,renderComponent:C,attributes:{reportParams:p(!0)}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ae(),l(),me(),de(),fe(),ue(),pe(),T(),ve(),P(),R=r(),u(),z=`/wp/v2/posts`,B=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/post/`,V=[{id:779,title:{rendered:`Ten things I learned building my first WordPress theme`},link:`https://example.com/2026/06/22/ten-things-i-learned/`,date:`2026-06-22T10:00:00`,featured_media:42,_embedded:{"wp:featuredmedia":[{source_url:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23334155'/%3E%3Cstop offset='1' stop-color='%2394a3b8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3C/svg%3E`,alt_text:`Featured image`}]}}],H={views:3820,like_count:24,post:{comment_count:8}},U=!1,ye(),W=`storybook/latest-post`,G={title:`Packages/Premium Analytics/Widgets/LatestPost`,component:C,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Latest post" widget shows the site's most recently published post with its all-time views, likes, and comments.`}}}},K={render:be,decorators:[x,v]},q={render:()=>F(`last-90-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>I(`loading`)},J={render:()=>F(`last-7-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>I(`error`)},Y={render:()=>F(`last-365-days`),tags:[`!autodocs`],decorators:[x,v],beforeEach:()=>I(`empty`)},X={render:e=>(0,R.jsx)(L,{...e}),args:{...b,widgetWidth:2,widgetHeight:2},argTypes:{...h}},Z={render:e=>(0,R.jsx)(L,{...e}),args:{...b,widgetWidth:2,widgetHeight:1},argTypes:{...h}},Q={render:e=>(0,R.jsx)(L,{...e}),args:{...b,widgetWidth:1,widgetHeight:1},argTypes:{...h}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderLatestPost,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source},description:{story:`Default — the latest post with its lifetime views, likes, and comments.

The shared close-up canvas is the width of a width-1 dashboard cell, which is
below the card's 520px wide breakpoint: the featured image is dropped and the
metric row wraps. \`WidgetDashboardWithWidget\` below shows the default width-2
placement, where the image sits in a trailing column.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderLatestPostOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => forceLatestPostState('loading')
}`,...q.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderLatestPostOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => forceLatestPostState('error')
}`,...J.parameters?.docs?.source},description:{story:`The content fetch failed: the widget shows its error state with a Retry
action (which re-runs the query — still mocked as failing while this story is
active).`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderLatestPostOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => forceLatestPostState('empty')
}`,...Y.parameters?.docs?.source},description:{story:`Resolved with no published posts: the widget shows its empty state (the
neutral post-list glyph and "Publish a post to see its stats here.").`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <LatestPostDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    // Latest post is a landscape widget: content left, featured image right.
    widgetWidth: 2,
    widgetHeight: 2
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <LatestPostDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 2,
    widgetHeight: 1
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Z.parameters?.docs?.source},description:{story:`A short cell at the default width. Height, not just width, drives the card:
below 300px of body the type scale steps down and the featured image becomes a
centred square instead of a full-height panel.

This geometry regressed once — the metric row was pushed past the card's bottom
edge and silently clipped, leaving labels with no values — so it is covered
here to keep a height regression visible in review.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <LatestPostDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 1,
    widgetHeight: 1
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:`The smallest cell the dashboard grid produces: narrow *and* short. The featured
image drops out entirely and the headline clamps to one line, but the whole
metric row — every label with its value — stays inside the card.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{K as Default,Y as Empty,J as Error,q as Loading,Z as ShortCell,Q as ShortNarrowCell,X as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};