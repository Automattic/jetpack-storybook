import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{_ as o,t as s}from"./build-module-CbwHEf9N.js";import{n as c,w as l}from"./build-module-CDRs4YxF.js";import{$ as u,K as d,L as f,b as p,q as m,rt as ee,z as te}from"./report-metric-B_XzB90i.js";import{In as h,On as g,Pn as ne,Tn as re,Tt as _,hr as v,p as ie}from"./chart-tooltip-C8ZGvC-d.js";import{t as ae}from"./widget-state-DXH_sJfv.js";import{C as oe,D as y,E as se,O as ce,S as le,T as ue,b,k as x,t as S,w as C,x as w}from"./src-CsviWOIg.js";import{n as de,t as fe}from"./register-stats-mocks-E_Xodcr6.js";import{n as pe,t as T}from"./force-stats-mock-state-5_eW_cT_.js";function me(e){let t=re((0,E.useMemo)(()=>{let t={...e,max:O};return delete t.comp,delete t.compare_from,delete t.compare_to,delete t.compare_preset,t},[e]),{maxRows:1,postTypes:D}),n=t.comparisonRows?.rows[0],r=Number(n?.id??0)||0,i=h(g(r)),a=ne({postId:r,fields:[`views`,`like_count`,`post`]}),o=a.data,s=o?.post?.ID,c=o&&(s===void 0||s===r)?o:void 0,l=r>0&&!c&&!a.isError,u=t.isLoading||r>0&&(i.isLoading||a.isLoading||l),d=t.isFetching||i.isFetching||a.isFetching,f=t.isError,p=()=>{t.refetch(),r>0&&(i.refetch(),a.refetch())},m=i.data??null;return{post:n?{id:r,title:m?.title||String(n.label??``),url:m?.url||n.link||``,date:m?.date||(typeof n.date==`string`?n.date:``),imageUrl:m?.imageUrl??``,imageAlt:m?.imageAlt??``,views:c?.views,likeCount:c?.like_count,commentCount:c?.post?.comment_count}:null,isLoading:u,isFetching:d,isError:f,error:t.error,refetch:p}}var E,D,O,k=t((()=>{_(),E=e(n(),1),D=[`post`],O=20}));function he(){let{reportParams:e}=ee(),{post:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:c}=me(e),u=(0,o.useMemo)(()=>te(e),[e]),d=t?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:t.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:t.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:t.commentCount}]:[];return(0,j.jsx)(ae,{isLoading:n,isFetching:i,isError:a,isEmpty:!t,error:ie(s,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:l,description:r(`No post views in this period.`,`jetpack-premium-analytics-pkg`)},children:t&&(0,j.jsx)(p,{title:t.title,url:t.url,postId:t.id,detailSearch:u,date:t.date,imageUrl:t.imageUrl,imageAlt:t.imageAlt,metrics:d})})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(he,{})})}var j,ge=t((()=>{f(),S(),s(),i(),c(),k(),j=a()})),M,_e=t((()=>{c(),M={icon:l,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,ve=t((()=>{N=`jpa/popular-post`,P=`Popular post`,F=`Your most-viewed post for the selected date range, with its all-time stats.`,I={content:`Your most viewed post in the selected date range, with its all-time views, likes, and comments.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function ye(){return(0,H.jsx)(A,{attributes:{reportParams:v()}})}function B(e){return(0,H.jsx)(A,{attributes:{reportParams:v(!1,e)}})}function V(e){return(0,H.jsx)(ue,{...e,widgetType:le(z,M),renderModule:U,renderComponent:A,attributes:{reportParams:v(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{_(),d(),fe(),oe(),pe(),se(),ce(),b(),ge(),_e(),ve(),H=a(),m(),de(),U=`storybook/popular-post`,W={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Popular post\" widget shows the site's most-viewed post for the dashboard's date range, with its publish date and its all-time views, likes, and comments. Changing the date range changes which post wins, not the totals shown for it: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},G={render:ye,decorators:[w,x]},K={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`loading`),()=>T(`stats/top-posts`,null))},q={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error`),()=>T(`stats/top-posts`,null))},J={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error-retryable`),()=>T(`stats/top-posts`,null))},Y={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`empty`),()=>T(`stats/top-posts`,null))},X={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:2,widgetHeight:2},argTypes:{...y}},Z={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:2,widgetHeight:1},argTypes:{...y}},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:1,widgetHeight:1},argTypes:{...y}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...G.parameters?.docs?.source},description:{story:`Default — the period's most-viewed post with its all-time views, likes, and comments.

The shared close-up canvas is the width of a width-1 dashboard cell, which is
below the card's 520px wide breakpoint: the featured image is dropped and the
metric row wraps. \`WidgetDashboardWithWidget\` below shows the default width-2
placement, where the image sits in a trailing column.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularPostOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'loading');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...K.parameters?.docs?.source},description:{story:`First load: the ranking request is in flight, so the widget shows its loading
state. The mock is forced to never resolve for the duration of this story.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularPostOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...q.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularPostOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error-retryable');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...J.parameters?.docs?.source},description:{story:"The proxy's `no_connection` 403: a broken Jetpack connection can heal, so\n`describeError` keeps this one retryable.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // A calendar year, not a rolling window: \`last-365-days\` and \`last-12-months\`
  // resolve to the same dates most years, which would share ErrorRetryable's
  // query key and serve this story's cached empty result there instead.
  render: () => renderPopularPostOnPreset('last-year'),
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