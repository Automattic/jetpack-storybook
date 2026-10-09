import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Cr as i,t as a}from"./build-module-Cm3Kd3py.js";import{n as o,t as s}from"./build-module-BoKohM9F.js";import{Ft as c,Mn as l,Nt as u,kn as ee,qn as d,t as f,w as te}from"./src-CTpdfVFW.js";import{_ as p,h as m,x as ne}from"./charts-provider-BA6IhbKQ.js";import{n as re,r as ie}from"./register-report-mocks-CW1VdKfU.js";import{t as h}from"./widget-state--3z8khIa.js";import{n as ae,r as g}from"./with-story-router-Beljd9ki.js";import{t as oe}from"./post-highlight-card-skeleton-BJ5TpPnH.js";import{b as se}from"./components-BfTAYn2q.js";import{t as ce}from"./src-C8uiRrOG.js";import{a as le,g as _,h as ue,i as de,m as fe,n as pe,p as v,r as y}from"./with-widget-canvas-uks1OQ01.js";import{n as me,t as b}from"./force-stats-mock-state-DIdlHRtP.js";function he(e=0){let t=c(te({authorId:e})),n=t.data??null,r=n?.id??0,i=u({postId:r,fields:[`views`,`like_count`,`post`]}),a=t.isLoading||r>0&&i.isLoading,o=t.isFetching||i.isFetching,s=t.isError,l=()=>{t.refetch(),r>0&&i.refetch()};return{post:n?{...n,views:i.data?.views,likeCount:i.data?.like_count,commentCount:i.data?.post?.comment_count}:null,isLoading:a,isFetching:o,isError:s,refetch:l}}var ge=e((()=>{f()}));function x({authorScoped:e}){let{reportParams:n}=ne(),r=e?ee(n.author_id):0;return e&&!r?(0,w.jsx)(h,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:i,description:t(`Open an author to see their latest post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,w.jsx)(S,{authorId:r})}function S({authorId:e}){let{post:n,isLoading:r,isFetching:a,isError:o,refetch:s}=he(e),c=m({origin:e?{report:`authors`}:{report:`posts`,section:`posts-pages`}}),l=n?[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:n.views},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),value:n.likeCount},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),value:n.commentCount}]:[];return(0,w.jsx)(h,{isLoading:r,isFetching:a,isError:o,isEmpty:!n,error:{description:t(`We couldn't load your latest post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:i,description:t(e?`This author has not published a post yet.`:`Publish a post to see its stats here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,w.jsx)(oe,{}),children:n&&(0,w.jsx)(se,{title:n.title,url:n.url,postId:n.id,detailSearch:c,date:n.date,imageUrl:n.imageUrl,imageAlt:n.imageAlt,metrics:l})})}function C({attributes:e={}}){return(0,w.jsx)(p,{attributes:e,children:(0,w.jsx)(x,{authorScoped:e.authorScoped===!0})})}var w,_e=e((()=>{f(),ce(),n(),a(),ge(),w=r()})),T,ve=e((()=>{T={attributes:[],example:{attributes:{}}}})),E,D,O,k,A,j,M,N,P=e((()=>{E=`jpa/latest-post`,D=`jpa/post`,O=`Latest post`,k=`Your most recently published post with its views, likes, and comments.`,A={content:`Your most recently published post, with its headline views, likes, and comments.`},j=`stats`,M=`framed`,N={name:E,icon:D,title:O,description:k,help:A,category:j,presentation:M}}));function ye(){U||(U=!0,s.use((e,t)=>{let n=e.path??e.url??``;return n.startsWith(B)?Promise.resolve(H):n.startsWith(z)?Promise.resolve(V):t(e)}))}function be(){return(0,R.jsx)(C,{attributes:{reportParams:l()}})}function F(e){return(0,R.jsx)(C,{attributes:{reportParams:l(!1,e)}})}function I(e){let t=e=>{b(z,e),b(B,e)},n=()=>{d.removeQueries({queryKey:[`latest-post`]}),d.removeQueries({queryKey:[`stats`,`post`]})};return t(e),n(),()=>{t(null),n()}}function L(e){return(0,R.jsx)(fe,{...e,widgetType:de(N,T),renderModule:W,renderComponent:C,attributes:{reportParams:l(!0)}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),o(),re(),me(),ue(),ae(),le(),pe(),_e(),ve(),P(),R=r(),ie(),z=`/wp/v2/posts`,B=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/post/`,V=[{id:779,title:{rendered:`Ten things I learned building my first WordPress theme`},link:`https://example.com/2026/06/22/ten-things-i-learned/`,date:`2026-06-22T10:00:00`,featured_media:42,_embedded:{"wp:featuredmedia":[{source_url:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23334155'/%3E%3Cstop offset='1' stop-color='%2394a3b8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3C/svg%3E`,alt_text:`Featured image`}]}}],H={views:3820,like_count:24,post:{comment_count:8}},U=!1,ye(),W=`storybook/latest-post`,G={title:`Packages/Premium Analytics/Widgets/LatestPost`,component:C,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Latest post" widget shows the site's most recently published post with its all-time views, likes, and comments.`}}}},K={render:be,decorators:[y,g]},q={render:()=>F(`last-90-days`),tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>I(`loading`)},J={render:()=>F(`last-7-days`),tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>I(`error`)},Y={render:()=>F(`last-365-days`),tags:[`!autodocs`],decorators:[y,g],beforeEach:()=>I(`empty`)},X={render:e=>(0,R.jsx)(L,{...e}),args:{...v,widgetWidth:2,widgetHeight:2},argTypes:{..._}},Z={render:e=>(0,R.jsx)(L,{...e}),args:{...v,widgetWidth:2,widgetHeight:1},argTypes:{..._}},Q={render:e=>(0,R.jsx)(L,{...e}),args:{...v,widgetWidth:1,widgetHeight:1},argTypes:{..._}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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