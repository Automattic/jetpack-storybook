import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,t as s}from"./build-module-2iv4IIRq.js";import{Ct as c,ct as l,m as u,pt as d,v as f}from"./hooks-D_-KwK9o.js";import{K as p,t as m}from"./src-CJGEmgc4.js";import{St as h,bt as ee,d as g,it as _,jn as te,mt as v,r as y,tn as b,u as ne}from"./date-period-dropdown-G9YUPeqM.js";import{t as re}from"./post-highlight-card-skeleton-CP2j9_PC.js";import{i as ie,r as ae}from"./register-report-mocks-Bkj09xXC.js";import{m as oe}from"./report-metric-u_zN298o.js";import{t as x}from"./widget-state-C7QUic5j.js";import{t as se}from"./src-BJzObm5Z.js";import{a as ce,c as le,d as S,i as ue,l as C,n as de,o as w,r as T,s as fe,u as pe}from"./with-widget-canvas-KqQDaNTN.js";import{n as me,t as he}from"./register-stats-mocks-B2pF8ZUa.js";import{n as ge,t as E}from"./force-stats-mock-state-xVf5XKQQ.js";function _e(e,t){let n=v((0,D.useMemo)(()=>({...e,max:k}),[e]),{maxRows:1,postTypes:O,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=h(ne(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function ve(e,t,n){let r=_((0,D.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,D.useMemo)(()=>n?r.comparisonRows?.rows.find(t=>String(t.id)===String(e))?.children??[]:[],[n,r.comparisonRows,e]),a=(0,D.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=h(g(a)),s=(0,D.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var D,O,k,ye=t((()=>{y(),D=e(n(),1),O=[`post`],k=20}));function be(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:b(!1,j),o=(0,A.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,A.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=_e(s,!t),l=ve(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=ee({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,g=h?.post?.ID,_=h&&(g===void 0||g===p)?h:void 0,te=p>0&&!_&&!m.isError,v=u.isLoading||p>0&&(m.isLoading||te),y=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:_?.views,likeCount:_?.like_count,commentCount:_?.post?.comment_count}:null,range:o,isLoading:v,isFetching:y,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var A,j,xe=t((()=>{y(),m(),A=e(n(),1),ye(),j=p}));function Se({authorScoped:e}){let{reportParams:t}=f(),n=e?te(t.author_id):0;return e&&!n?(0,N.jsx)(x,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:o,description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,N.jsx)(Ce,{authorId:n})}function Ce({authorId:e}){let{reportParams:t}=f(),{post:n,range:i,isLoading:a,isFetching:s,isError:l,error:u,refetch:p}=be(e?{authorId:e,reportParams:t}:void 0),m=n?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:n.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:n.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:n.commentCount}]:[],h={...i,...d(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,N.jsx)(x,{isLoading:a,isFetching:s,isError:l,isEmpty:!n,error:c(u,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:o,description:r(e?`No views recorded for this author’s posts in this period.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(re,{}),children:n&&(0,N.jsx)(oe,{title:n.title,url:n.url,postId:n.id,detailSearch:h,date:n.date,imageUrl:n.imageUrl,imageAlt:n.imageAlt,metrics:m})})}function M({attributes:e={}}){return(0,N.jsx)(u,{attributes:e,children:(0,N.jsx)(Se,{authorScoped:e.authorScoped===!0})})}var N,we=t((()=>{y(),l(),se(),i(),s(),xe(),N=a()})),P,Te=t((()=>{s(),P={icon:o,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,Ee=t((()=>{F=`jpa/popular-post`,I=`Most popular in the last year`,L=`Your most-viewed post of the last 12 months, with its all-time stats.`,R={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(){return(0,W.jsx)(M,{attributes:{reportParams:b()}})}function U(e){return(0,W.jsx)(fe,{...e,widgetType:ue(V,P),renderModule:De,renderComponent:M,attributes:{reportParams:b(!0)}})}var W,De,Oe,G,K,q,J,Y,X,Z,Q,$;t((()=>{y(),ae(),he(),ce(),ge(),le(),pe(),de(),we(),Te(),Ee(),W=a(),ie(),me(),De=`storybook/popular-post`,Oe={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},G={render:H,decorators:[T,S]},K={render:H,tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(E(`stats/top-posts`,`loading`),()=>E(`stats/top-posts`,null))},q={render:H,tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(E(`stats/top-posts`,`error`),()=>E(`stats/top-posts`,null))},J={render:H,tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(E(`stats/top-posts`,`error-retryable`),()=>E(`stats/top-posts`,null))},Y={render:H,tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(E(`stats/top-posts`,`empty`),()=>E(`stats/top-posts`,null))},X={render:e=>(0,W.jsx)(U,{...e}),args:{...w,widgetWidth:2,widgetHeight:2},argTypes:{...C}},Z={render:e=>(0,W.jsx)(U,{...e}),args:{...w,widgetWidth:2,widgetHeight:1},argTypes:{...C}},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...w,widgetWidth:1,widgetHeight:1},argTypes:{...C}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
metric row — every label with its value — stays inside the card.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{G as Default,Y as Empty,q as Error,J as ErrorRetryable,K as Loading,Z as ShortCell,Q as ShortNarrowCell,X as WidgetDashboardWithWidget,$ as __namedExportsOrder,Oe as default};