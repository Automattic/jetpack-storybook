import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,t as s}from"./build-module-2iv4IIRq.js";import{St as c,b as l,ft as u,g as d,st as f}from"./hooks-DgXDBs_q.js";import{K as p,t as m}from"./src-D1E5MwTJ.js";import{St as h,bt as ee,d as g,it as _,jn as te,mt as v,r as y,tn as b,u as ne}from"./date-period-dropdown-CjSE2zp6.js";import{t as re}from"./post-highlight-card-skeleton-1xiqcwxV.js";import{i as ie,r as ae}from"./register-report-mocks--48klYMF.js";import{m as oe}from"./report-metric-e47inZvc.js";import{t as se}from"./widget-state-DqRjq7Um.js";import{t as ce}from"./src-n1S8Eumm.js";import{a as le,c as ue,d as x,i as de,l as S,n as fe,o as C,r as w,s as pe,u as me}from"./with-widget-canvas-Bk84zuqe.js";import{n as he,t as ge}from"./register-stats-mocks-EFHGjQBj.js";import{n as _e,t as T}from"./force-stats-mock-state-jNrrJ8wL.js";function ve(e,t){let n=v((0,E.useMemo)(()=>({...e,max:O}),[e]),{maxRows:1,postTypes:D,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=h(ne(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function ye(e,t,n){let r=_((0,E.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,E.useMemo)(()=>n?r.comparisonRows?.rows.find(t=>String(t.id)===String(e))?.children??[]:[],[n,r.comparisonRows,e]),a=(0,E.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=h(g(a)),s=(0,E.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var E,D,O,be=t((()=>{y(),E=e(n(),1),D=[`post`],O=20}));function xe(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:b(!1,A),o=(0,k.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,k.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=ve(s,!t),l=ye(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=ee({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,g=h?.post?.ID,_=h&&(g===void 0||g===p)?h:void 0,te=p>0&&!_&&!m.isError,v=u.isLoading||p>0&&(m.isLoading||te),y=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:_?.views,likeCount:_?.like_count,commentCount:_?.post?.comment_count}:null,range:o,isLoading:v,isFetching:y,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var k,A,Se=t((()=>{y(),m(),k=e(n(),1),be(),A=p}));function Ce({authorScoped:e}){let{reportParams:t}=l(),n=e?te(t.author_id):0;return e&&!n?(0,M.jsx)(se,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:o,description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,M.jsx)(we,{authorId:n})}function we({authorId:e}){let{reportParams:t}=l(),{post:n,range:i,isLoading:a,isFetching:s,isError:d,error:f,refetch:p}=xe(e?{authorId:e,reportParams:t}:void 0),m=n?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:n.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:n.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:n.commentCount}]:[],h={...i,...u(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,M.jsx)(se,{isLoading:a,isFetching:s,isError:d,isEmpty:!n,error:c(f,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:o,description:r(e?`No views recorded for this author’s posts in this period.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(re,{}),children:n&&(0,M.jsx)(oe,{title:n.title,url:n.url,postId:n.id,detailSearch:h,date:n.date,imageUrl:n.imageUrl,imageAlt:n.imageAlt,metrics:m})})}function j({attributes:e={}}){return(0,M.jsx)(d,{attributes:e,children:(0,M.jsx)(Ce,{authorScoped:e.authorScoped===!0})})}var M,Te=t((()=>{y(),f(),ce(),i(),s(),Se(),M=a()})),N,Ee=t((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,De=t((()=>{P=`jpa/popular-post`,F=`Most popular in the last year`,I=`Your most-viewed post of the last 12 months, with its all-time stats.`,L={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(){return(0,U.jsx)(j,{attributes:{reportParams:b()}})}function H(e){return(0,U.jsx)(pe,{...e,widgetType:de(B,N),renderModule:W,renderComponent:j,attributes:{reportParams:b(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$,Oe;t((()=>{y(),ae(),ge(),le(),_e(),ue(),me(),fe(),Te(),Ee(),De(),U=a(),ie(),he(),W=`storybook/popular-post`,G={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},K={render:V,decorators:[w,x]},q={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`loading`),()=>T(`stats/top-posts`,null))},J={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error`),()=>T(`stats/top-posts`,null))},Y={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error-retryable`),()=>T(`stats/top-posts`,null))},X={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`empty`),()=>T(`stats/top-posts`,null))},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...C,widgetWidth:2,widgetHeight:2},argTypes:{...S}},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...C,widgetWidth:2,widgetHeight:1},argTypes:{...S}},$={render:e=>(0,U.jsx)(H,{...e}),args:{...C,widgetWidth:1,widgetHeight:1},argTypes:{...S}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source},description:{story:`Default — the last 12 months' most-viewed post with its all-time views, likes, and comments.

The shared close-up canvas is the width of a width-1 dashboard cell, which is
below the card's 520px wide breakpoint: the featured image is dropped and the
metric row wraps. \`WidgetDashboardWithWidget\` below shows the default width-2
placement, where the image sits in a trailing column.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'loading');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`First load: the ranking request is in flight, so the widget shows its loading
state. The mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...J.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error-retryable');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:"The proxy's `no_connection` 403: a broken Jetpack connection can heal, so\n`describeError` keeps this one retryable.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'empty');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <PopularPostDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    // Popular post is a landscape widget: content left, featured image right.
    widgetWidth: 2,
    widgetHeight: 2
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PopularPostDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 2,
    widgetHeight: 1
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:`A short cell at the default width. Height, not just width, drives the card:
below 300px of body the type scale steps down and the featured image becomes a
centred square instead of a full-height panel.

This geometry regressed once — the metric row was pushed past the card's bottom
edge and silently clipped, leaving labels with no values — so it is covered
here to keep a height regression visible in review.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <PopularPostDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 1,
    widgetHeight: 1
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...$.parameters?.docs?.source},description:{story:`The smallest cell the dashboard grid produces: narrow *and* short. The featured
image drops out entirely and the headline clamps to one line, but the whole
metric row — every label with its value — stays inside the card.`,...$.parameters?.docs?.description}}},Oe=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{K as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as ShortCell,$ as ShortNarrowCell,Z as WidgetDashboardWithWidget,Oe as __namedExportsOrder,G as default};