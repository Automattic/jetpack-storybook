import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,t as s}from"./build-module-DNhkEVJn.js";import{A as c,C as l,S as u,m as d,v as f}from"./hooks-BMFzqau9.js";import{K as p,t as m}from"./src-ClJ6D7Xj.js";import{C as h,Dt as g,Gn as _,S as v,dn as y,dt as ee,kt as b,qn as te,t as x,xt as ne}from"./src-Bq3Nn1OK.js";import{U as re}from"./helpers-CGi3ryra.js";import{n as ie,r as S}from"./with-story-router-CRSGw62n.js";import{n as ae,r as oe}from"./register-report-mocks-B8WrHl1u.js";import{t as se}from"./widget-state-CXfK5uTe.js";import{t as ce}from"./post-highlight-card-skeleton-Bud2T_Pj.js";import{v as le}from"./report-metric-zURqLYZQ.js";import{t as ue}from"./src-qKJmLfBY.js";import{a as de,d as fe,f as pe,i as me,n as he,p as C,r as w,u as T}from"./with-widget-canvas-BtQW7Y7E.js";import{n as ge,t as _e}from"./register-stats-mocks-D4Vyf9Li.js";import{n as ve,t as E}from"./force-stats-mock-state-SJrQsaS3.js";function ye(e,t){let n=ne((0,D.useMemo)(()=>({...e,max:k}),[e]),{maxRows:1,postTypes:O,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=b(v(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function be(e,t,n){let r=ee((0,D.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,D.useMemo)(()=>n?_(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,D.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=b(h(a)),s=(0,D.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var D,O,k,xe=t((()=>{x(),D=e(n(),1),O=[`post`],k=20}));function Se(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:y(!1,j),o=(0,A.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,A.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=ye(s,!t),l=be(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=g({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,_=h?.post?.ID,v=h&&(_===void 0||_===p)?h:void 0,ee=p>0&&!v&&!m.isError,b=u.isLoading||p>0&&(m.isLoading||ee),te=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:v?.views,likeCount:v?.like_count,commentCount:v?.post?.comment_count}:null,range:o,isLoading:b,isFetching:te,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var A,j,Ce=t((()=>{x(),m(),A=e(n(),1),xe(),j=p}));function we({authorScoped:e}){let{reportParams:t}=f(),n=e?te(t.author_id):0;return e&&!n?(0,N.jsx)(se,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:o,description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,N.jsx)(Te,{authorId:n})}function Te({authorId:e}){let{reportParams:t}=f(),n=u(),{post:i,range:a,isLoading:s,isFetching:l,isError:d,error:p,refetch:m}=Se(e?{authorId:e,reportParams:t}:void 0),h=i?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:i.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:i.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:i.commentCount}]:[],g={...a,...n,...c(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,N.jsx)(se,{isLoading:s,isFetching:l,isError:d,isEmpty:!i,error:re(p,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}),empty:e?void 0:{icon:o,description:r(`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(ce,{}),children:i&&(0,N.jsx)(le,{title:i.title,url:i.url,postId:i.id,detailSearch:g,date:i.date,imageUrl:i.imageUrl,imageAlt:i.imageAlt,metrics:h})})}function M({attributes:e={}}){return(0,N.jsx)(d,{attributes:e,children:(0,N.jsx)(we,{authorScoped:e.authorScoped===!0})})}var N,Ee=t((()=>{x(),l(),ue(),i(),s(),Ce(),N=a()})),P,De=t((()=>{s(),P={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,Oe,ke=t((()=>{F=`jpa/popular-post`,I=`Most popular in the last year`,L=`Your most-viewed post of the last 12 months, with its all-time stats.`,R={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},z=`stats`,B=`framed`,Oe={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function V(){return(0,U.jsx)(M,{attributes:{reportParams:y()}})}function H(e){return(0,U.jsx)(fe,{...e,widgetType:me(Oe,P),renderModule:W,renderComponent:M,attributes:{reportParams:y(!0)}})}var U,W,Ae,G,K,q,J,Y,X,Z,Q,$;t((()=>{x(),ae(),_e(),de(),ve(),pe(),ie(),he(),Ee(),De(),ke(),U=a(),oe(),ge(),W=`storybook/popular-post`,Ae={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},G={render:V,decorators:[w,S]},K={render:V,tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(E(`stats/top-posts`,`loading`),()=>E(`stats/top-posts`,null))},q={render:V,tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(E(`stats/top-posts`,`error`),()=>E(`stats/top-posts`,null))},J={render:V,tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(E(`stats/top-posts`,`error-retryable`),()=>E(`stats/top-posts`,null))},Y={render:V,tags:[`!autodocs`],decorators:[w,S],beforeEach:()=>(E(`stats/top-posts`,`empty`),()=>E(`stats/top-posts`,null))},X={render:e=>(0,U.jsx)(H,{...e}),args:{...T,widgetWidth:2,widgetHeight:2},argTypes:{...C}},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...T,widgetWidth:2,widgetHeight:1},argTypes:{...C}},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...T,widgetWidth:1,widgetHeight:1},argTypes:{...C}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
metric row — every label with its value — stays inside the card.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{G as Default,Y as Empty,q as Error,J as ErrorRetryable,K as Loading,Z as ShortCell,Q as ShortNarrowCell,X as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ae as default};