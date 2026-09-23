import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,t as s}from"./build-module-2iv4IIRq.js";import{Et as c,dt as l,gt as u,m as d,v as f}from"./hooks-bBMWaPgm.js";import{K as p,t as m}from"./src-CJGEmgc4.js";import{An as h,Mn as g,St as _,bt as ee,d as te,it as ne,mt as re,r as v,tn as y,u as ie}from"./date-period-dropdown-oPPJWPch.js";import{t as ae}from"./post-highlight-card-skeleton-YdzqXkuM.js";import{i as oe,r as se}from"./register-report-mocks-wFc8zVMO.js";import{m as ce}from"./report-metric-CL5SFWKM.js";import{t as b}from"./widget-state-wkABl1yN.js";import{t as le}from"./src-CHGatd6X.js";import{a as ue,c as de,d as x,i as fe,l as S,n as pe,o as C,r as w,s as me,u as he}from"./with-widget-canvas-CWdqxzTj.js";import{n as ge,t as _e}from"./register-stats-mocks-DS-BBXPs.js";import{n as ve,t as T}from"./force-stats-mock-state-j31-hcDJ.js";function ye(e,t){let n=re((0,E.useMemo)(()=>({...e,max:O}),[e]),{maxRows:1,postTypes:D,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=_(ie(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function be(e,t,n){let r=ne((0,E.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,E.useMemo)(()=>n?h(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,E.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=_(te(a)),s=(0,E.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var E,D,O,xe=t((()=>{v(),E=e(n(),1),D=[`post`],O=20}));function Se(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:y(!1,A),o=(0,k.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,k.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=ye(s,!t),l=be(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=ee({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,g=h?.post?.ID,_=h&&(g===void 0||g===p)?h:void 0,te=p>0&&!_&&!m.isError,ne=u.isLoading||p>0&&(m.isLoading||te),re=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:_?.views,likeCount:_?.like_count,commentCount:_?.post?.comment_count}:null,range:o,isLoading:ne,isFetching:re,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var k,A,Ce=t((()=>{v(),m(),k=e(n(),1),xe(),A=p}));function we({authorScoped:e}){let{reportParams:t}=f(),n=e?g(t.author_id):0;return e&&!n?(0,M.jsx)(b,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:o,description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,M.jsx)(Te,{authorId:n})}function Te({authorId:e}){let{reportParams:t}=f(),{post:n,range:i,isLoading:a,isFetching:s,isError:l,error:d,refetch:p}=Se(e?{authorId:e,reportParams:t}:void 0),m=n?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:n.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:n.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:n.commentCount}]:[],h={...i,...u(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,M.jsx)(b,{isLoading:a,isFetching:s,isError:l,isEmpty:!n,error:c(d,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:o,description:r(e?`No views recorded for this author’s posts in this period.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(ae,{}),children:n&&(0,M.jsx)(ce,{title:n.title,url:n.url,postId:n.id,detailSearch:h,date:n.date,imageUrl:n.imageUrl,imageAlt:n.imageAlt,metrics:m})})}function j({attributes:e={}}){return(0,M.jsx)(d,{attributes:e,children:(0,M.jsx)(we,{authorScoped:e.authorScoped===!0})})}var M,Ee=t((()=>{v(),l(),le(),i(),s(),Ce(),M=a()})),N,De=t((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,Oe=t((()=>{P=`jpa/popular-post`,F=`Most popular in the last year`,I=`Your most-viewed post of the last 12 months, with its all-time stats.`,L={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(){return(0,U.jsx)(j,{attributes:{reportParams:y()}})}function H(e){return(0,U.jsx)(me,{...e,widgetType:fe(B,N),renderModule:W,renderComponent:j,attributes:{reportParams:y(!0)}})}var U,W,ke,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),se(),_e(),ue(),ve(),de(),he(),pe(),Ee(),De(),Oe(),U=a(),oe(),ge(),W=`storybook/popular-post`,ke={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},G={render:V,decorators:[w,x]},K={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`loading`),()=>T(`stats/top-posts`,null))},q={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error`),()=>T(`stats/top-posts`,null))},J={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error-retryable`),()=>T(`stats/top-posts`,null))},Y={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`empty`),()=>T(`stats/top-posts`,null))},X={render:e=>(0,U.jsx)(H,{...e}),args:{...C,widgetWidth:2,widgetHeight:2},argTypes:{...S}},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...C,widgetWidth:2,widgetHeight:1},argTypes:{...S}},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...C,widgetWidth:1,widgetHeight:1},argTypes:{...S}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...G.parameters?.docs?.source},description:{story:`Default — the last 12 months' most-viewed post with its all-time views, likes, and comments.

The shared close-up canvas is the width of a width-1 dashboard cell, which is
below the card's 520px wide breakpoint: the featured image is dropped and the
metric row wraps. \`WidgetDashboardWithWidget\` below shows the default width-2
placement, where the image sits in a trailing column.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'loading');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...K.parameters?.docs?.source},description:{story:`First load: the ranking request is in flight, so the widget shows its loading
state. The mock is forced to never resolve for the duration of this story.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...q.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error-retryable');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...J.parameters?.docs?.source},description:{story:"The proxy's `no_connection` 403: a broken Jetpack connection can heal, so\n`describeError` keeps this one retryable.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'empty');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <PopularPostDashboardStory {...args} />,
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
  render: args => <PopularPostDashboardStory {...args} />,
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
metric row — every label with its value — stays inside the card.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{G as Default,Y as Empty,q as Error,J as ErrorRetryable,K as Loading,Z as ShortCell,Q as ShortNarrowCell,X as WidgetDashboardWithWidget,$ as __namedExportsOrder,ke as default};