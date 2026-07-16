import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{C as a,X as o,t as s}from"./date-fns-B2pKki1V.js";import{Q as c,n as l}from"./build-module-DmVuor49.js";import{n as ee,t as te}from"./build-module-jIw2aOFV.js";import{W as u,t as ne,u as re}from"./build-module-DokNvSv5.js";import{Yn as d,_n as ie,ar as f,hn as ae,ln as oe,ut as p}from"./chart-tooltip-B-p4R1ne.js";import{t as se}from"./metric-value-Bsxgg6sW.js";import{C as ce,S as le,k as ue}from"./report-metric-BEx9Ox4P.js";import{t as de}from"./widget-state-jmx0JXRV.js";import{S as fe,b as pe,t as me,x as he,y as ge}from"./src-bT7CpZTu.js";import{n as _e,r as m}from"./with-widget-canvas-Dz43KNHY.js";import{n as ve,t as h}from"./force-stats-mock-state-ORZ_zReY.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,ye=e((()=>{g=`_root_14xlt_1`,_=`_content_14xlt_13`,v=`_header_14xlt_23`,y=`_titleLink_14xlt_30`,b=`_title_14xlt_30`,x=`_date_14xlt_48`,S=`_metrics_14xlt_52`,C=`_metric_14xlt_52`,w=`_metricLabel_14xlt_65`,T=`_metricValue_14xlt_70`,E=`_media_14xlt_76`,D=`_image_14xlt_80`,O={root:g,content:_,header:v,titleLink:y,title:b,date:x,metrics:S,metric:C,metricLabel:w,metricValue:T,media:E,image:D}}));function be(){let e=ie(oe()),t=e.data??null,n=t?.id??0,r=ae({postId:n,fields:[`views`,`like_count`,`post`]}),i=e.isLoading||n>0&&r.isLoading,a=e.isFetching||r.isFetching,o=e.isError&&!t,s=()=>{e.refetch(),n>0&&r.refetch()};return{post:t?{...t,views:r.data?.views??0,likeCount:r.data?.like_count??0,commentCount:Number(r.data?.post?.comment_count)||0}:null,isLoading:i,isFetching:a,isError:o,refetch:s}}var k=e((()=>{p()}));function xe(e){if(!e)return``;let r=a(e),i=Number.isNaN(r.getTime())?e:o(r,`PP`);return t(n(`Published %s`,`jetpack-premium-analytics`),i)}function A({label:e,value:t}){return(0,M.jsxs)(`div`,{className:O.metric,children:[(0,M.jsx)(u,{className:O.metricLabel,variant:`body-md`,children:e}),(0,M.jsx)(se,{className:O.metricValue,value:t,dataFormat:N})]})}function Se(){let{post:e,isLoading:t,isFetching:r,isError:i,refetch:a}=be();return(0,M.jsx)(de,{isLoading:t,isFetching:r,isError:i,isEmpty:!e,error:{description:n(`We couldn't load your latest post. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:a}]},empty:{icon:c,description:n(`Publish a post to see its stats here.`,`jetpack-premium-analytics`)},children:e&&(0,M.jsx)(P,{post:e})})}function j({attributes:e={}}){return(0,M.jsx)(ue,{attributes:e,children:(0,M.jsx)(Se,{})})}var M,N,P,Ce=e((()=>{me(),r(),l(),ne(),s(),ye(),k(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=({post:e})=>{let t=xe(e.date);return(0,M.jsxs)(`div`,{className:O.root,children:[(0,M.jsxs)(`div`,{className:O.content,children:[(0,M.jsxs)(`div`,{className:O.header,children:[(0,M.jsx)(u,{className:O.title,variant:`heading-2xl`,render:(0,M.jsx)(`h3`,{}),children:(0,M.jsx)(re,{className:O.titleLink,href:e.url,variant:`unstyled`,openInNewTab:!0,title:e.title,children:e.title})}),t&&(0,M.jsx)(u,{className:O.date,variant:`body-md`,children:t})]}),(0,M.jsxs)(`div`,{className:O.metrics,children:[(0,M.jsx)(A,{label:n(`Views`,`jetpack-premium-analytics`),value:e.views}),(0,M.jsx)(A,{label:n(`Likes`,`jetpack-premium-analytics`),value:e.likeCount}),(0,M.jsx)(A,{label:n(`Comments`,`jetpack-premium-analytics`),value:e.commentCount})]})]}),e.imageUrl&&(0,M.jsx)(`div`,{className:O.media,children:(0,M.jsx)(`img`,{className:O.image,src:e.imageUrl,alt:e.imageAlt})})]})}})),F,we=e((()=>{r(),l(),F={name:`jpa/latest-post`,title:n(`Latest post`,`jetpack-premium-analytics`),help:{content:n(`Your most recently published post with its views, likes, and comments.`,`jetpack-premium-analytics`)},icon:c,attributes:[],example:{attributes:{}}}}));function Te(){W||(W=!0,te.use((e,t)=>{let n=e.path??e.url??``;return n.startsWith(V)?Promise.resolve(U):n.startsWith(B)?Promise.resolve(H):t(e)}))}function I({withComparison:e}){return(0,z.jsx)(j,{attributes:{reportParams:d(e)}})}function L(e){return(0,z.jsx)(j,{attributes:{reportParams:d(!1,e)}})}function R(e){let t=e=>{h(B,e),h(V,e)},n=()=>{f.removeQueries({queryKey:[`latest-post`]}),f.removeQueries({queryKey:[`stats`,`post`]})};return t(e),n(),()=>{t(null),n()}}function Ee({withComparison:e,...t}){return(0,z.jsx)(pe,{...t,widgetType:{...F,presentation:`framed`},renderModule:G,renderComponent:j,attributes:{reportParams:d(e)}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ee(),le(),ve(),he(),_e(),Ce(),we(),z=i(),ce(),B=`/wp/v2/posts`,V=`/jetpack-premium-analytics/v1/proxy/v1.1/stats/post/`,H=[{id:779,title:{rendered:`Ten things I learned building my first WordPress theme`},link:`https://example.com/2026/06/22/ten-things-i-learned/`,date:`2026-06-22T10:00:00`,featured_media:42,_embedded:{"wp:featuredmedia":[{source_url:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23334155'/%3E%3Cstop offset='1' stop-color='%2394a3b8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3C/svg%3E`,alt_text:`Featured image`}]}}],U={views:3820,like_count:24,post:{comment_count:8}},W=!1,Te(),G=`storybook/latest-post`,K={title:`Packages/Premium Analytics/Widgets/LatestPost`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:'The "Latest post" widget shows the site\'s most recently published post with its all-time views, likes, and comments. The metrics are lifetime totals, so there is no comparison period — the `WithComparison` story renders identically to `Default`.'}}}},q={render:I,args:{withComparison:!1},decorators:[m]},J={render:I,args:{withComparison:!0},decorators:[m]},Y={render:()=>L(`last-90-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>R(`loading`)},X={render:()=>L(`last-7-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>R(`error`)},Z={render:()=>L(`last-365-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>R(`empty`)},Q={render:e=>(0,z.jsx)(Ee,{...e}),args:{...ge,widgetWidth:2,widgetHeight:2,withComparison:!0},argTypes:{...fe,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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