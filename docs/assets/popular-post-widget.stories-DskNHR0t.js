import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,t as s}from"./build-module-DNhkEVJn.js";import{A as c,C as l,S as u,m as d,v as f}from"./hooks-DTO7E4cv.js";import{K as p,t as m}from"./src-ClJ6D7Xj.js";import{$ as h,$t as g,_t as _,c as v,ht as ee,jn as y,kn as te,l as ne,lt as re,t as b}from"./src-sR_H3c_O.js";import{B as ie}from"./helpers-CwshzIKl.js";import{n as ae,r as x}from"./with-story-router-X3Hq7Fyb.js";import{n as oe,r as se}from"./register-report-mocks-DVfD4054.js";import{t as ce}from"./widget-state-DLY8xMIS.js";import{t as le}from"./post-highlight-card-skeleton-C_6dW6Wt.js";import{u as ue}from"./report-metric-BVnLVoVP.js";import{t as de}from"./src-DhWKuaPt.js";import{a as fe,d as pe,f as me,i as he,n as ge,p as S,r as C,u as w}from"./with-widget-canvas-C5LtvyaT.js";import{n as _e,t as ve}from"./register-stats-mocks-DRsDgy2H.js";import{n as ye,t as T}from"./force-stats-mock-state-D8M27rPb.js";function be(e,t){let n=re((0,E.useMemo)(()=>({...e,max:O}),[e]),{maxRows:1,postTypes:D,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=_(v(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function xe(e,t,n){let r=h((0,E.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,E.useMemo)(()=>n?te(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,E.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=_(ne(a)),s=(0,E.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var E,D,O,Se=t((()=>{b(),E=e(n(),1),D=[`post`],O=20}));function Ce(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:g(!1,A),o=(0,k.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,k.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=be(s,!t),l=xe(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=ee({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,_=h?.post?.ID,v=h&&(_===void 0||_===p)?h:void 0,y=p>0&&!v&&!m.isError,te=u.isLoading||p>0&&(m.isLoading||y),ne=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:v?.views,likeCount:v?.like_count,commentCount:v?.post?.comment_count}:null,range:o,isLoading:te,isFetching:ne,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var k,A,we=t((()=>{b(),m(),k=e(n(),1),Se(),A=p}));function Te({authorScoped:e}){let{reportParams:t}=f(),n=e?y(t.author_id):0;return e&&!n?(0,M.jsx)(ce,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:o,description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,M.jsx)(Ee,{authorId:n})}function Ee({authorId:e}){let{reportParams:t}=f(),n=u(),{post:i,range:a,isLoading:s,isFetching:l,isError:d,error:p,refetch:m}=Ce(e?{authorId:e,reportParams:t}:void 0),h=i?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:i.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:i.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:i.commentCount}]:[],g={...a,...n,...c(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,M.jsx)(ce,{isLoading:s,isFetching:l,isError:d,isEmpty:!i,error:ie(p,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}),empty:e?void 0:{icon:o,description:r(`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(le,{}),children:i&&(0,M.jsx)(ue,{title:i.title,url:i.url,postId:i.id,detailSearch:g,date:i.date,imageUrl:i.imageUrl,imageAlt:i.imageAlt,metrics:h})})}function j({attributes:e={}}){return(0,M.jsx)(d,{attributes:e,children:(0,M.jsx)(Te,{authorScoped:e.authorScoped===!0})})}var M,De=t((()=>{b(),l(),de(),i(),s(),we(),M=a()})),N,Oe=t((()=>{s(),N={icon:o,attributes:[],example:{attributes:{}}}})),P,F,I,L,R,z,B,ke=t((()=>{P=`jpa/popular-post`,F=`Most popular in the last year`,I=`Your most-viewed post of the last 12 months, with its all-time stats.`,L={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(){return(0,U.jsx)(j,{attributes:{reportParams:g()}})}function H(e){return(0,U.jsx)(pe,{...e,widgetType:he(B,N),renderModule:W,renderComponent:j,attributes:{reportParams:g(!0)}})}var U,W,Ae,G,K,q,J,Y,X,Z,Q,$;t((()=>{b(),oe(),ve(),fe(),ye(),me(),ae(),ge(),De(),Oe(),ke(),U=a(),se(),_e(),W=`storybook/popular-post`,Ae={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},G={render:V,decorators:[C,x]},K={render:V,tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(T(`stats/top-posts`,`loading`),()=>T(`stats/top-posts`,null))},q={render:V,tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(T(`stats/top-posts`,`error`),()=>T(`stats/top-posts`,null))},J={render:V,tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(T(`stats/top-posts`,`error-retryable`),()=>T(`stats/top-posts`,null))},Y={render:V,tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(T(`stats/top-posts`,`empty`),()=>T(`stats/top-posts`,null))},X={render:e=>(0,U.jsx)(H,{...e}),args:{...w,widgetWidth:2,widgetHeight:2},argTypes:{...S}},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...w,widgetWidth:2,widgetHeight:1},argTypes:{...S}},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...w,widgetWidth:1,widgetHeight:1},argTypes:{...S}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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