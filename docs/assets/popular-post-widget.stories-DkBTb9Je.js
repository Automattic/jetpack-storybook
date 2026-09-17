import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,t as s}from"./build-module-2iv4IIRq.js";import{bt as c,g as l}from"./hooks-B4xWNSo3.js";import{K as u,t as d}from"./src-D1E5MwTJ.js";import{$t as f,bt as ee,ft as p,r as m,u as te,vt as ne}from"./date-period-dropdown-DFFxSAbH.js";import{t as h}from"./post-highlight-card-skeleton-i2A645db.js";import{i as g,r as _}from"./register-report-mocks-Ddv1-acm.js";import{v}from"./report-metric-zEiCd1G1.js";import{t as y}from"./widget-state-CHDb_lmp.js";import{t as b}from"./src-CWyhsZxW.js";import{a as re,c as ie,d as x,i as ae,l as S,n as oe,o as C,r as w,s as se,u as ce}from"./with-widget-canvas-B0lPgXMt.js";import{n as le,t as ue}from"./register-stats-mocks-ChMBOls8.js";import{n as de,t as T}from"./force-stats-mock-state-De2lCh7D.js";function fe(){let{preset:e,from:t,to:n,interval:r}=f(!1,k),i=(0,E.useMemo)(()=>({preset:e,from:t,to:n,interval:r}),[e,t,n,r]),a=p((0,E.useMemo)(()=>({from:t,to:n,interval:r,max:O}),[t,n,r]),{maxRows:1,postTypes:D}),o=a.comparisonRows?.rows[0],s=Number(o?.id??0)||0,c=ee(te(s)),l=ne({postId:s,fields:[`views`,`like_count`,`post`]}),u=l.data,d=u?.post?.ID,m=u&&(d===void 0||d===s)?u:void 0,h=s>0&&!m&&!l.isError,g=a.isLoading||s>0&&(c.isLoading||l.isLoading||h),_=a.isFetching||c.isFetching||l.isFetching,v=a.isError,y=()=>{a.refetch(),s>0&&(c.refetch(),l.refetch())},b=c.data??null;return{post:o?{id:s,title:b?.title||String(o.label??``),url:b?.url||o.link||``,date:b?.date||(typeof o.date==`string`?o.date:``),imageUrl:b?.imageUrl??``,imageAlt:b?.imageAlt??``,views:m?.views,likeCount:m?.like_count,commentCount:m?.post?.comment_count}:null,range:i,isLoading:g,isFetching:_,isError:v,error:a.error,refetch:y}}var E,D,O,k,pe=t((()=>{m(),d(),E=e(n(),1),D=[`post`],O=20,k=u}));function me(){let{post:e,range:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:l}=fe(),u=e?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:e.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:e.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:e.commentCount}]:[];return(0,j.jsx)(y,{isLoading:n,isFetching:i,isError:a,isEmpty:!e,error:c(s,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{icon:o,description:r(`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(h,{}),children:e&&(0,j.jsx)(v,{title:e.title,url:e.url,postId:e.id,detailSearch:t,date:e.date,imageUrl:e.imageUrl,imageAlt:e.imageAlt,metrics:u})})}function A({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(me,{})})}var j,he=t((()=>{b(),i(),s(),pe(),j=a()})),M,ge=t((()=>{s(),M={icon:o,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,_e=t((()=>{N=`jpa/popular-post`,P=`Most popular in the last year`,F=`Your most-viewed post of the last 12 months, with its all-time stats.`,I={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(){return(0,H.jsx)(A,{attributes:{reportParams:f()}})}function V(e){return(0,H.jsx)(se,{...e,widgetType:ae(z,M),renderModule:U,renderComponent:A,attributes:{reportParams:f(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),_(),ue(),re(),de(),ie(),ce(),oe(),he(),ge(),_e(),H=a(),g(),le(),U=`storybook/popular-post`,W={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},G={render:B,decorators:[w,x]},K={render:B,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`loading`),()=>T(`stats/top-posts`,null))},q={render:B,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error`),()=>T(`stats/top-posts`,null))},J={render:B,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error-retryable`),()=>T(`stats/top-posts`,null))},Y={render:B,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`empty`),()=>T(`stats/top-posts`,null))},X={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:2,widgetHeight:2},argTypes:{...S}},Z={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:2,widgetHeight:1},argTypes:{...S}},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:1,widgetHeight:1},argTypes:{...S}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
metric row — every label with its value — stays inside the card.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{G as Default,Y as Empty,q as Error,J as ErrorRetryable,K as Loading,Z as ShortCell,Q as ShortNarrowCell,X as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};