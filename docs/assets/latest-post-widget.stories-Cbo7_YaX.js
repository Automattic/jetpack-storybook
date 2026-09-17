import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Cr as i,Uu as a,ju as o,t as s,yr as c}from"./build-module-2iv4IIRq.js";import{b as l,g as u,pt as ee,st as d}from"./hooks-CeZpaSFt.js";import{n as f,t as te}from"./build-module-DULjaUdK.js";import{An as ne,En as p,en as m,l as re,r as h,xt as ie,yt as ae}from"./date-period-dropdown-DyvZcpbK.js";import{t as g}from"./post-highlight-card-skeleton-C1L_VCc1.js";import{i as _,r as oe}from"./register-report-mocks-C-2QUOMy.js";import{v as se}from"./report-metric-SeO2swvL.js";import{t as v}from"./widget-state-D0U2ysk4.js";import{t as ce}from"./src-EUoSq9oM.js";import{a as le,c as ue,d as y,i as de,l as b,n as fe,o as x,r as S,s as pe,u as me}from"./with-widget-canvas-Dl4Y6cIp.js";import{n as he,t as C}from"./force-stats-mock-state-Cr-WTm26.js";function w(e=0){let t=ie(re({authorId:e})),n=t.data??null,r=n?.id??0,i=ae({postId:r,fields:[`views`,`like_count`,`post`]}),a=t.isLoading||r>0&&i.isLoading,o=t.isFetching||i.isFetching,s=t.isError,c=()=>{t.refetch(),r>0&&i.refetch()};return{post:n?{...n,views:i.data?.views,likeCount:i.data?.like_count,commentCount:i.data?.post?.comment_count}:null,isLoading:a,isFetching:o,isError:s,refetch:c}}var ge=e((()=>{h()}));function _e({authorScoped:e}){let{reportParams:n}=l(),r=e?ne(n.author_id):0;return e&&!r?(0,E.jsx)(v,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:i,description:t(`Open an author to see their latest post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,E.jsx)(ve,{authorId:r})}function ve({authorId:e}){let{reportParams:n}=l(),{post:r,isLoading:o,isFetching:s,isError:c,refetch:u}=w(e),d=(0,a.useMemo)(()=>ee(n),[n]),f=r?[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:r.views},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),value:r.likeCount},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),value:r.commentCount}]:[];return(0,E.jsx)(v,{isLoading:o,isFetching:s,isError:c,isEmpty:!r,error:{description:t(`We couldn't load your latest post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:i,description:t(e?`This author has not published a post yet.`:`Publish a post to see its stats here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(g,{}),children:r&&(0,E.jsx)(se,{title:r.title,url:r.url,postId:r.id,detailSearch:d,date:r.date,imageUrl:r.imageUrl,imageAlt:r.imageAlt,metrics:f})})}function T({attributes:e={}}){return(0,E.jsx)(u,{attributes:e,children:(0,E.jsx)(_e,{authorScoped:e.authorScoped===!0})})}var E,ye=e((()=>{h(),d(),ce(),o(),n(),s(),ge(),E=r()})),D,be=e((()=>{s(),D={icon:c,attributes:[],example:{attributes:{}}}})),O,k,A,j,M,N,P,xe=e((()=>{O=`jpa/latest-post`,k=`Latest post`,A=`Your most recently published post with its views, likes, and comments.`,j={content:`Your most recently published post, with its headline views, likes, and comments.`},M=`stats`,N=`framed`,P={name:O,title:k,description:A,help:j,category:M,presentation:N}}));function Se(){U||(U=!0,te.use((e,t)=>{let n=e.path??e.url??``;return n.startsWith(B)?Promise.resolve(H):n.startsWith(z)?Promise.resolve(V):t(e)}))}function Ce(){return(0,R.jsx)(T,{attributes:{reportParams:m()}})}function F(e){return(0,R.jsx)(T,{attributes:{reportParams:m(!1,e)}})}function I(e){let t=e=>{C(z,e),C(B,e)},n=()=>{p.removeQueries({queryKey:[`latest-post`]}),p.removeQueries({queryKey:[`stats`,`post`]})};return t(e),n(),()=>{t(null),n()}}function L(e){return(0,R.jsx)(pe,{...e,widgetType:de(P,D),renderModule:W,renderComponent:T,attributes:{reportParams:m(!0)}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),f(),oe(),he(),ue(),me(),le(),fe(),ye(),be(),xe(),R=r(),_(),z=`/wp/v2/posts`,B=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/post/`,V=[{id:779,title:{rendered:`Ten things I learned building my first WordPress theme`},link:`https://example.com/2026/06/22/ten-things-i-learned/`,date:`2026-06-22T10:00:00`,featured_media:42,_embedded:{"wp:featuredmedia":[{source_url:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23334155'/%3E%3Cstop offset='1' stop-color='%2394a3b8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3C/svg%3E`,alt_text:`Featured image`}]}}],H={views:3820,like_count:24,post:{comment_count:8}},U=!1,Se(),W=`storybook/latest-post`,G={title:`Packages/Premium Analytics/Widgets/LatestPost`,component:T,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Latest post" widget shows the site's most recently published post with its all-time views, likes, and comments.`}}}},K={render:Ce,decorators:[S,y]},q={render:()=>F(`last-90-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>I(`loading`)},J={render:()=>F(`last-7-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>I(`error`)},Y={render:()=>F(`last-365-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>I(`empty`)},X={render:e=>(0,R.jsx)(L,{...e}),args:{...x,widgetWidth:2,widgetHeight:2},argTypes:{...b}},Z={render:e=>(0,R.jsx)(L,{...e}),args:{...x,widgetWidth:2,widgetHeight:1},argTypes:{...b}},Q={render:e=>(0,R.jsx)(L,{...e}),args:{...x,widgetWidth:1,widgetHeight:1},argTypes:{...b}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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