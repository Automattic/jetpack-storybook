import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Cr as i,t as a,yr as o}from"./build-module-2iv4IIRq.js";import{f as s,m as c,v as l}from"./hooks-0ig0jk9L.js";import{n as u,t as ee}from"./build-module-BNOD_hdY.js";import{Dn as d,Mn as te,St as ne,bt as re,l as f,r as p,tn as m}from"./date-period-dropdown-BaZvdv-r.js";import{t as ie}from"./post-highlight-card-skeleton-Df_Gf3x-.js";import{i as ae,r as oe}from"./register-report-mocks-a2mNypAk.js";import{m as se}from"./report-metric-DxgcqYxJ.js";import{t as h}from"./widget-state-NK8J_PdB.js";import{t as ce}from"./src-DjU8zK6c.js";import{a as le,c as ue,d as g,i as _,l as v,n as y,o as b,r as x,s as de,u as fe}from"./with-widget-canvas-BOsmhEvJ.js";import{n as pe,t as S}from"./force-stats-mock-state-1H1dRA0Z.js";function me(e=0){let t=ne(f({authorId:e})),n=t.data??null,r=n?.id??0,i=re({postId:r,fields:[`views`,`like_count`,`post`]}),a=t.isLoading||r>0&&i.isLoading,o=t.isFetching||i.isFetching,s=t.isError,c=()=>{t.refetch(),r>0&&i.refetch()};return{post:n?{...n,views:i.data?.views,likeCount:i.data?.like_count,commentCount:i.data?.post?.comment_count}:null,isLoading:a,isFetching:o,isError:s,refetch:c}}var he=e((()=>{p()}));function ge({authorScoped:e}){let{reportParams:n}=l(),r=e?te(n.author_id):0;return e&&!r?(0,w.jsx)(h,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:i,description:t(`Open an author to see their latest post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,w.jsx)(_e,{authorId:r})}function _e({authorId:e}){let{post:n,isLoading:r,isFetching:a,isError:o,refetch:c}=me(e),l=s({origin:e?{report:`authors`}:{report:`posts`,section:`posts-pages`}}),u=n?[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:n.views},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),value:n.likeCount},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),value:n.commentCount}]:[];return(0,w.jsx)(h,{isLoading:r,isFetching:a,isError:o,isEmpty:!n,error:{description:t(`We couldn't load your latest post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:i,description:t(e?`This author has not published a post yet.`:`Publish a post to see its stats here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,w.jsx)(ie,{}),children:n&&(0,w.jsx)(se,{title:n.title,url:n.url,postId:n.id,detailSearch:l,date:n.date,imageUrl:n.imageUrl,imageAlt:n.imageAlt,metrics:u})})}function C({attributes:e={}}){return(0,w.jsx)(c,{attributes:e,children:(0,w.jsx)(ge,{authorScoped:e.authorScoped===!0})})}var w,T=e((()=>{p(),ce(),n(),a(),he(),w=r()})),E,ve=e((()=>{a(),E={icon:o,attributes:[],example:{attributes:{}}}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/latest-post`,O=`Latest post`,k=`Your most recently published post with its views, likes, and comments.`,A={content:`Your most recently published post, with its headline views, likes, and comments.`},j=`stats`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function ye(){U||(U=!0,ee.use((e,t)=>{let n=e.path??e.url??``;return n.startsWith(B)?Promise.resolve(H):n.startsWith(z)?Promise.resolve(V):t(e)}))}function be(){return(0,R.jsx)(C,{attributes:{reportParams:m()}})}function F(e){return(0,R.jsx)(C,{attributes:{reportParams:m(!1,e)}})}function I(e){let t=e=>{S(z,e),S(B,e)},n=()=>{d.removeQueries({queryKey:[`latest-post`]}),d.removeQueries({queryKey:[`stats`,`post`]})};return t(e),n(),()=>{t(null),n()}}function L(e){return(0,R.jsx)(de,{...e,widgetType:_(N,E),renderModule:W,renderComponent:C,attributes:{reportParams:m(!0)}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),u(),oe(),pe(),ue(),fe(),le(),y(),T(),ve(),P(),R=r(),ae(),z=`/wp/v2/posts`,B=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/post/`,V=[{id:779,title:{rendered:`Ten things I learned building my first WordPress theme`},link:`https://example.com/2026/06/22/ten-things-i-learned/`,date:`2026-06-22T10:00:00`,featured_media:42,_embedded:{"wp:featuredmedia":[{source_url:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23334155'/%3E%3Cstop offset='1' stop-color='%2394a3b8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3C/svg%3E`,alt_text:`Featured image`}]}}],H={views:3820,like_count:24,post:{comment_count:8}},U=!1,ye(),W=`storybook/latest-post`,G={title:`Packages/Premium Analytics/Widgets/LatestPost`,component:C,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Latest post" widget shows the site's most recently published post with its all-time views, likes, and comments.`}}}},K={render:be,decorators:[x,g]},q={render:()=>F(`last-90-days`),tags:[`!autodocs`],decorators:[x,g],beforeEach:()=>I(`loading`)},J={render:()=>F(`last-7-days`),tags:[`!autodocs`],decorators:[x,g],beforeEach:()=>I(`error`)},Y={render:()=>F(`last-365-days`),tags:[`!autodocs`],decorators:[x,g],beforeEach:()=>I(`empty`)},X={render:e=>(0,R.jsx)(L,{...e}),args:{...b,widgetWidth:2,widgetHeight:2},argTypes:{...v}},Z={render:e=>(0,R.jsx)(L,{...e}),args:{...b,widgetWidth:2,widgetHeight:1},argTypes:{...v}},Q={render:e=>(0,R.jsx)(L,{...e}),args:{...b,widgetWidth:1,widgetHeight:1},argTypes:{...v}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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