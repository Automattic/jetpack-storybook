import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,t as s}from"./build-module-2iv4IIRq.js";import{E as c,m as l,v as u,y as d}from"./hooks-C6uC8D6p.js";import{K as f,t as p}from"./src-BNPYbbO9.js";import{Mn as m,Pn as h,bt as g,c as _,ft as v,l as y,nn as b,nt as ee,t as x,vt as te}from"./src-C9rlvqIx.js";import{B as ne}from"./helpers-C3PYD0ul.js";import{t as re}from"./post-highlight-card-skeleton-CcOE5Uxv.js";import{i as ie,r as ae}from"./register-report-mocks-jOVWgqW2.js";import{m as oe}from"./report-metric-8GVNWEP9.js";import{t as S}from"./widget-state-DFM0RGEq.js";import{t as se}from"./src-BYRMloPq.js";import{a as ce,d as le,f as ue,h as C,i as de,m as fe,n as pe,p as w,r as T,u as E}from"./with-widget-canvas-Co9pnelY.js";import{n as me,t as he}from"./register-stats-mocks-C1ifviXU.js";import{n as ge,t as D}from"./force-stats-mock-state-CJWb8B2c.js";function _e(e,t){let n=v((0,O.useMemo)(()=>({...e,max:A}),[e]),{maxRows:1,postTypes:k,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=g(_(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function ve(e,t,n){let r=ee((0,O.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,O.useMemo)(()=>n?m(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,O.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=g(y(a)),s=(0,O.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var O,k,A,ye=t((()=>{x(),O=e(n(),1),k=[`post`],A=20}));function be(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:b(!1,M),o=(0,j.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,j.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=_e(s,!t),l=ve(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=te({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,g=h?.post?.ID,_=h&&(g===void 0||g===p)?h:void 0,v=p>0&&!_&&!m.isError,y=u.isLoading||p>0&&(m.isLoading||v),ee=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:_?.views,likeCount:_?.like_count,commentCount:_?.post?.comment_count}:null,range:o,isLoading:y,isFetching:ee,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var j,M,xe=t((()=>{x(),p(),j=e(n(),1),ye(),M=f}));function Se({authorScoped:e}){let{reportParams:t}=u(),n=e?h(t.author_id):0;return e&&!n?(0,P.jsx)(S,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:o,description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,P.jsx)(Ce,{authorId:n})}function Ce({authorId:e}){let{reportParams:t}=u(),{post:n,range:i,isLoading:a,isFetching:s,isError:l,error:d,refetch:f}=be(e?{authorId:e,reportParams:t}:void 0),p=n?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:n.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:n.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:n.commentCount}]:[],m={...i,...c(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,P.jsx)(S,{isLoading:a,isFetching:s,isError:l,isEmpty:!n,error:ne(d,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:e?void 0:{icon:o,description:r(`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(re,{}),children:n&&(0,P.jsx)(oe,{title:n.title,url:n.url,postId:n.id,detailSearch:m,date:n.date,imageUrl:n.imageUrl,imageAlt:n.imageAlt,metrics:p})})}function N({attributes:e={}}){return(0,P.jsx)(l,{attributes:e,children:(0,P.jsx)(Se,{authorScoped:e.authorScoped===!0})})}var P,we=t((()=>{x(),d(),se(),i(),s(),xe(),P=a()})),F,Te=t((()=>{s(),F={icon:o,attributes:[],example:{attributes:{}}}})),I,L,Ee,De,R,z,B,Oe=t((()=>{I=`jpa/popular-post`,L=`Most popular in the last year`,Ee=`Your most-viewed post of the last 12 months, with its all-time stats.`,De={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},R=`stats`,z=`framed`,B={name:I,title:L,description:Ee,help:De,category:R,presentation:z}}));function V(){return(0,U.jsx)(N,{attributes:{reportParams:b()}})}function H(e){return(0,U.jsx)(le,{...e,widgetType:de(B,F),renderModule:W,renderComponent:N,attributes:{reportParams:b(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$,ke;t((()=>{x(),ae(),he(),ce(),ge(),ue(),fe(),pe(),we(),Te(),Oe(),U=a(),ie(),me(),W=`storybook/popular-post`,G={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},K={render:V,decorators:[T,C]},q={render:V,tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(D(`stats/top-posts`,`loading`),()=>D(`stats/top-posts`,null))},J={render:V,tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(D(`stats/top-posts`,`error`),()=>D(`stats/top-posts`,null))},Y={render:V,tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(D(`stats/top-posts`,`error-retryable`),()=>D(`stats/top-posts`,null))},X={render:V,tags:[`!autodocs`],decorators:[T,C],beforeEach:()=>(D(`stats/top-posts`,`empty`),()=>D(`stats/top-posts`,null))},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...E,widgetWidth:2,widgetHeight:2},argTypes:{...w}},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...E,widgetWidth:2,widgetHeight:1},argTypes:{...w}},$={render:e=>(0,U.jsx)(H,{...e}),args:{...E,widgetWidth:1,widgetHeight:1},argTypes:{...w}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
metric row — every label with its value — stays inside the card.`,...$.parameters?.docs?.description}}},ke=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{K as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as ShortCell,$ as ShortNarrowCell,Z as WidgetDashboardWithWidget,ke as __namedExportsOrder,G as default};