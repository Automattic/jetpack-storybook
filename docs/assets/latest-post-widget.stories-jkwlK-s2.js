import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Er as a,n as o}from"./build-module-C6Ow06jV.js";import{C as s,X as ee,t as te}from"./date-fns-B2pKki1V.js";import{n as ne,t as re}from"./build-module-rGceznHE.js";import{W as c,t as ie,u as ae}from"./build-module-JNPAD9ni.js";import{Yn as l,_n as oe,ar as u,hn as se,ln as ce,ut as d}from"./chart-tooltip-DrAq1LVG.js";import{t as le}from"./metric-value-ve7qhs8-.js";import{C as ue,S as de,k as fe}from"./report-metric-Bfw2Qau8.js";import{t as pe}from"./widget-state-D0lsq5zu.js";import{S as me,b as he,t as f,x as ge,y as _e}from"./src-Du6qR1VH.js";import{n as ve,r as p}from"./with-widget-canvas-Dz43KNHY.js";import{n as ye,t as m}from"./force-stats-mock-state-BObaWjku.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,be=e((()=>{h=`_root_1gl0x_1`,g=`_content_1gl0x_13`,_=`_header_1gl0x_23`,v=`_titleLink_1gl0x_30`,y=`_title_1gl0x_30`,b=`_date_1gl0x_48`,x=`_metrics_1gl0x_52`,S=`_metric_1gl0x_52`,C=`_metricLabel_1gl0x_65`,w=`_metricValue_1gl0x_70`,T=`_media_1gl0x_76`,E=`_image_1gl0x_80`,D={root:h,content:g,header:_,titleLink:v,title:y,date:b,metrics:x,metric:S,metricLabel:C,metricValue:w,media:T,image:E}}));function xe(){let e=oe(ce()),t=e.data??null,n=t?.id??0,r=se({postId:n,fields:[`views`,`like_count`,`post`]}),i=e.isLoading||n>0&&r.isLoading,a=e.isFetching||r.isFetching,o=e.isError&&!t,s=()=>{e.refetch(),n>0&&r.refetch()};return{post:t?{...t,views:r.data?.views??0,likeCount:r.data?.like_count??0,commentCount:Number(r.data?.post?.comment_count)||0}:null,isLoading:i,isFetching:a,isError:o,refetch:s}}var Se=e((()=>{d()}));function O(e){if(!e)return``;let n=s(e),i=Number.isNaN(n.getTime())?e:ee(n,`PP`);return r(t(`Published %s`,`jetpack-premium-analytics`),i)}function k({label:e,value:t}){return(0,M.jsxs)(`div`,{className:D.metric,children:[(0,M.jsx)(c,{className:D.metricLabel,variant:`body-md`,children:e}),(0,M.jsx)(le,{className:D.metricValue,value:t,dataFormat:N})]})}function A(){let{post:e,isLoading:n,isFetching:r,isError:i,refetch:o}=xe();return(0,M.jsx)(pe,{isLoading:n,isFetching:r,isError:i,isEmpty:!e,error:{description:t(`We couldn't load your latest post. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:a,description:t(`Publish a post to see its stats here.`,`jetpack-premium-analytics`)},children:e&&(0,M.jsx)(P,{post:e})})}function j({attributes:e={}}){return(0,M.jsx)(fe,{attributes:e,children:(0,M.jsx)(A,{})})}var M,N,P,Ce=e((()=>{f(),n(),o(),ie(),te(),be(),Se(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=({post:e})=>{let n=O(e.date);return(0,M.jsxs)(`div`,{className:D.root,children:[(0,M.jsxs)(`div`,{className:D.content,children:[(0,M.jsxs)(`div`,{className:D.header,children:[(0,M.jsx)(c,{className:D.title,variant:`heading-2xl`,render:(0,M.jsx)(`h3`,{}),children:(0,M.jsx)(ae,{className:D.titleLink,href:e.url,variant:`unstyled`,openInNewTab:!0,title:e.title,children:e.title})}),n&&(0,M.jsx)(c,{className:D.date,variant:`body-md`,children:n})]}),(0,M.jsxs)(`div`,{className:D.metrics,children:[(0,M.jsx)(k,{label:t(`Views`,`jetpack-premium-analytics`),value:e.views}),(0,M.jsx)(k,{label:t(`Likes`,`jetpack-premium-analytics`),value:e.likeCount}),(0,M.jsx)(k,{label:t(`Comments`,`jetpack-premium-analytics`),value:e.commentCount})]})]}),e.imageUrl&&(0,M.jsx)(`div`,{className:D.media,children:(0,M.jsx)(`img`,{className:D.image,src:e.imageUrl,alt:e.imageAlt})})]})}})),F,we=e((()=>{n(),o(),F={name:`jpa/latest-post`,title:t(`Latest post`,`jetpack-premium-analytics`),help:{content:t(`Your most recently published post with its views, likes, and comments.`,`jetpack-premium-analytics`)},icon:a,attributes:[],example:{attributes:{}}}}));function Te(){W||(W=!0,re.use((e,t)=>{let n=e.path??e.url??``;return n.startsWith(V)?Promise.resolve(U):n.startsWith(B)?Promise.resolve(H):t(e)}))}function I({withComparison:e}){return(0,z.jsx)(j,{attributes:{reportParams:l(e)}})}function L(e){return(0,z.jsx)(j,{attributes:{reportParams:l(!1,e)}})}function R(e){let t=e=>{m(B,e),m(V,e)},n=()=>{u.removeQueries({queryKey:[`latest-post`]}),u.removeQueries({queryKey:[`stats`,`post`]})};return t(e),n(),()=>{t(null),n()}}function Ee({withComparison:e,...t}){return(0,z.jsx)(he,{...t,widgetType:{...F,presentation:`framed`},renderModule:G,renderComponent:j,attributes:{reportParams:l(e)}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ne(),de(),ye(),ge(),ve(),Ce(),we(),z=i(),ue(),B=`/wp/v2/posts`,V=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/post/`,H=[{id:779,title:{rendered:`Ten things I learned building my first WordPress theme`},link:`https://example.com/2026/06/22/ten-things-i-learned/`,date:`2026-06-22T10:00:00`,featured_media:42,_embedded:{"wp:featuredmedia":[{source_url:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23334155'/%3E%3Cstop offset='1' stop-color='%2394a3b8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3C/svg%3E`,alt_text:`Featured image`}]}}],U={views:3820,like_count:24,post:{comment_count:8}},W=!1,Te(),G=`storybook/latest-post`,K={title:`Packages/Premium Analytics/Widgets/LatestPost`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:'The "Latest post" widget shows the site\'s most recently published post with its all-time views, likes, and comments. The metrics are lifetime totals, so there is no comparison period — the `WithComparison` story renders identically to `Default`.'}}}},q={render:I,args:{withComparison:!1},decorators:[p]},J={render:I,args:{withComparison:!0},decorators:[p]},Y={render:()=>L(`last-90-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>R(`loading`)},X={render:()=>L(`last-7-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>R(`error`)},Z={render:()=>L(`last-365-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>R(`empty`)},Q={render:e=>(0,z.jsx)(Ee,{...e}),args:{..._e,widgetWidth:2,widgetHeight:2,withComparison:!0},argTypes:{...me,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderLatestPost,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default — the latest post with its lifetime views, likes, and comments.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderLatestPost,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:"WithComparison — comparison `reportParams` are supplied by the date range\npicker, but this module has no comparison data, so the widget renders\nidentically to `Default` (no deltas).",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderLatestPostOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceLatestPostState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderLatestPostOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceLatestPostState('error')
}`,...X.parameters?.docs?.source},description:{story:`The content fetch failed: the widget shows its error state with a Retry
action (which re-runs the query — still mocked as failing while this story is
active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderLatestPostOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceLatestPostState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no published posts: the widget shows its empty state (the
neutral post-list glyph and "Publish a post to see its stats here.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <LatestPostDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    // Latest post is a landscape widget: content left, featured image right.
    widgetWidth: 2,
    widgetHeight: 2,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};