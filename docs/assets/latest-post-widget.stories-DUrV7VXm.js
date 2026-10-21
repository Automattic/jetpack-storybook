import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CtMZ-PAS.js";import{n as i,t as a}from"./build-module-DEu6GC4x.js";import{Bt as o,On as s,Rt as c,k as ee,pn as l,t as u,un as te}from"./src-CojPwECE.js";import{f as ne,m as d,v as re}from"./charts-provider-CK79-TW3.js";import{B as ie,Q as ae,X as f,Y as oe,Z as se,ct as ce,lt as p,ot as m,st as le,t as ue}from"./src-d03p2Njl.js";import{t as h}from"./widget-state-Bg8KvWWA.js";import{a as de,o as fe}from"./widget-state-Doi_hyaL.js";import{n as pe,r as g}from"./with-story-router-BuyPN5K2.js";import{t as me}from"./post-highlight-card-skeleton-uMf0TjKU.js";import{n as he,t as _}from"./force-stats-mock-state-BskQICvu.js";function v(e=0){let t=o(ee({authorId:e})),n=t.data??null,r=n?.id??0,i=c({postId:r,fields:[`views`,`like_count`,`post`]}),a=t.isLoading||r>0&&i.isLoading,s=t.isFetching||i.isFetching,l=t.isError,u=()=>{t.refetch(),r>0&&i.refetch()};return{post:n?{...n,views:i.data?.views,likeCount:i.data?.like_count,commentCount:i.data?.post?.comment_count}:null,isLoading:a,isFetching:s,isError:l,refetch:u}}var y=e((()=>{u()}));function b({authorScoped:e}){let{reportParams:n}=re(),r=e?te(n.author_id):0;return e&&!r?(0,C.jsx)(h,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:t(`Open an author to see their latest post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,C.jsx)(x,{authorId:r})}function x({authorId:e}){let{post:n,isLoading:r,isFetching:i,isError:a,refetch:o}=v(e),s=ne({origin:e?{report:`authors`}:{report:`posts`,section:`posts-pages`}}),c=n?[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:n.views},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),value:n.likeCount},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),value:n.commentCount}]:[];return(0,C.jsx)(h,{isLoading:r,isFetching:i,isError:a,isEmpty:!n,error:{description:t(`We couldn't load your latest post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{description:t(e?`This author has not published a post yet.`:`Your latest post will show here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,C.jsx)(me,{}),children:n&&(0,C.jsx)(ie,{title:n.title,url:n.url,postId:n.id,detailSearch:s,date:n.date,imageUrl:n.imageUrl,imageAlt:n.imageAlt,metrics:c})})}function S({attributes:e={}}){return(0,C.jsx)(d,{attributes:e,children:(0,C.jsx)(b,{authorScoped:e.authorScoped===!0})})}var C,ge=e((()=>{u(),ue(),n(),y(),C=r()})),w,T,E,D,O,k,A,j,M=e((()=>{w=`jpa/latest-post`,T=`jpa/post`,E=`Latest post`,D=`Your most recently published post with its views, likes, and comments.`,O={content:`Your most recently published post, with its headline views, likes, and comments.`},k=`stats`,A=`framed`,j={name:w,icon:T,title:E,description:D,help:O,category:k,presentation:A}}));function N(){U||(U=!0,a.use((e,t)=>{let n=e.path??e.url??``;return n.startsWith(B)?Promise.resolve(H):n.startsWith(z)?Promise.resolve(V):t(e)}))}function P(){return(0,R.jsx)(S,{attributes:{reportParams:l()}})}function F(e){return(0,R.jsx)(S,{attributes:{reportParams:l(!1,e)}})}function I(e){let t=e=>{_(z,e),_(B,e)},n=()=>{s.removeQueries({queryKey:[`latest-post`]}),s.removeQueries({queryKey:[`stats`,`post`]})};return t(e),n(),()=>{t(null),n()}}function L(e){return(0,R.jsx)(le,{...e,widgetType:se(j),renderModule:W,renderComponent:S,attributes:{reportParams:l(!0)}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),i(),de(),he(),ce(),pe(),ae(),oe(),ge(),M(),R=r(),fe(),z=`/wp/v2/posts`,B=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/post/`,V=[{id:779,title:{rendered:`Ten things I learned building my first WordPress theme`},link:`https://example.com/2026/06/22/ten-things-i-learned/`,date:`2026-06-22T10:00:00`,featured_media:42,_embedded:{"wp:featuredmedia":[{source_url:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23334155'/%3E%3Cstop offset='1' stop-color='%2394a3b8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3C/svg%3E`,alt_text:`Featured image`}]}}],H={views:3820,like_count:24,post:{comment_count:8}},U=!1,N(),W=`storybook/latest-post`,G={title:`Packages/Premium Analytics/Widgets/LatestPost`,component:S,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Latest post" widget shows the site's most recently published post with its all-time views, likes, and comments.`}}}},K={render:P,decorators:[f,g]},q={render:()=>F(`last-90-days`),tags:[`!autodocs`],decorators:[f,g],beforeEach:()=>I(`loading`)},J={render:()=>F(`last-7-days`),tags:[`!autodocs`],decorators:[f,g],beforeEach:()=>I(`error`)},Y={render:()=>F(`last-365-days`),tags:[`!autodocs`],decorators:[f,g],beforeEach:()=>I(`empty`)},X={render:e=>(0,R.jsx)(L,{...e}),args:{...m,widgetWidth:2,widgetHeight:2},argTypes:{...p}},Z={render:e=>(0,R.jsx)(L,{...e}),args:{...m,widgetWidth:2,widgetHeight:1},argTypes:{...p}},Q={render:e=>(0,R.jsx)(L,{...e}),args:{...m,widgetWidth:1,widgetHeight:1},argTypes:{...p}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Resolved with no published posts: the widget shows its empty state.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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