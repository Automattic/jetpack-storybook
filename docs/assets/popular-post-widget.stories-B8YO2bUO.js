import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,t as s}from"./build-module-zwSmKorH.js";import{K as c,g as l}from"./hooks-dVxqulUD.js";import{K as u,t as d}from"./src-B5nbkiw8.js";import{d as ee,en as f,i as p,pt as te,xt as ne,yt as re}from"./date-filters-panel-Od08dTjM.js";import{t as m}from"./post-highlight-card-skeleton-rqpE1g33.js";import{G as h,K as g,g as _}from"./report-metric-Dypubo6m.js";import{t as v}from"./widget-state-BRknrLau.js";import{C as y,D as b,E as ie,O as ae,S as oe,T as se,b as ce,k as x,t as le,w as S,x as C}from"./src-6zuI8JRZ.js";import{n as ue,t as de}from"./register-stats-mocks-B9UE5MwZ.js";import{n as fe,t as w}from"./force-stats-mock-state-BQwo2NuI.js";function pe(){let{preset:e,from:t,to:n,interval:r}=f(!1,O),i=(0,T.useMemo)(()=>({preset:e,from:t,to:n,interval:r}),[e,t,n,r]),a=te((0,T.useMemo)(()=>({from:t,to:n,interval:r,max:D}),[t,n,r]),{maxRows:1,postTypes:E}),o=a.comparisonRows?.rows[0],s=Number(o?.id??0)||0,c=ne(ee(s)),l=re({postId:s,fields:[`views`,`like_count`,`post`]}),u=l.data,d=u?.post?.ID,p=u&&(d===void 0||d===s)?u:void 0,m=s>0&&!p&&!l.isError,h=a.isLoading||s>0&&(c.isLoading||l.isLoading||m),g=a.isFetching||c.isFetching||l.isFetching,_=a.isError,v=()=>{a.refetch(),s>0&&(c.refetch(),l.refetch())},y=c.data??null;return{post:o?{id:s,title:y?.title||String(o.label??``),url:y?.url||o.link||``,date:y?.date||(typeof o.date==`string`?o.date:``),imageUrl:y?.imageUrl??``,imageAlt:y?.imageAlt??``,views:p?.views,likeCount:p?.like_count,commentCount:p?.post?.comment_count}:null,range:i,isLoading:h,isFetching:g,isError:_,error:a.error,refetch:v}}var T,E,D,O,me=t((()=>{p(),d(),T=e(n(),1),E=[`post`],D=20,O=u}));function he(){let{post:e,range:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:l}=pe(),u=e?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:e.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:e.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:e.commentCount}]:[];return(0,A.jsx)(v,{isLoading:n,isFetching:i,isError:a,isEmpty:!e,error:c(s,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{icon:o,description:r(`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(m,{}),children:e&&(0,A.jsx)(_,{title:e.title,url:e.url,postId:e.id,detailSearch:t,date:e.date,imageUrl:e.imageUrl,imageAlt:e.imageAlt,metrics:u})})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(he,{})})}var A,j=t((()=>{le(),i(),s(),me(),A=a()})),M,ge=t((()=>{s(),M={icon:o,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,_e=t((()=>{N=`jpa/popular-post`,P=`Popular post (12 months)`,F=`Your most-viewed post of the last 12 months, with its all-time stats.`,I={content:`Your most viewed post of the last 12 months, with its all-time views, likes, and comments.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(){return(0,H.jsx)(k,{attributes:{reportParams:f()}})}function V(e){return(0,H.jsx)(se,{...e,widgetType:oe(z,M),renderModule:U,renderComponent:k,attributes:{reportParams:f(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{p(),h(),de(),y(),fe(),ie(),ae(),ce(),j(),ge(),_e(),H=a(),g(),ue(),U=`storybook/popular-post`,W={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Popular post (12 months)\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},G={render:B,decorators:[C,x]},K={render:B,tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(w(`stats/top-posts`,`loading`),()=>w(`stats/top-posts`,null))},q={render:B,tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(w(`stats/top-posts`,`error`),()=>w(`stats/top-posts`,null))},J={render:B,tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(w(`stats/top-posts`,`error-retryable`),()=>w(`stats/top-posts`,null))},Y={render:B,tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(w(`stats/top-posts`,`empty`),()=>w(`stats/top-posts`,null))},X={render:e=>(0,H.jsx)(V,{...e}),args:{...S,widgetWidth:2,widgetHeight:2},argTypes:{...b}},Z={render:e=>(0,H.jsx)(V,{...e}),args:{...S,widgetWidth:2,widgetHeight:1},argTypes:{...b}},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...S,widgetWidth:1,widgetHeight:1},argTypes:{...b}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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