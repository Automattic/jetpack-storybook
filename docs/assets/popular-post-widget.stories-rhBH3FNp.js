import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{h as o,t as s}from"./build-module-DuNGIx6S.js";import{C as c,t as l}from"./build-module-CR6EsQjA.js";import{T as u,b as d,g as f,x as p}from"./hooks-DxBq46Zi.js";import{ft as ee,i as te,mt as ne,ot as m,qt as h,t as g}from"./src-CFg8Jt0o.js";import{M as _}from"./chart-tooltip-DdogxvbT.js";import{t as re}from"./post-highlight-card-skeleton-DkDgjIPR.js";import{G as v,K as ie,g as ae}from"./report-metric-ByE-o2cH.js";import{t as oe}from"./widget-state-DXp2EpWy.js";import{C as se,D as y,E as ce,O as le,S as ue,T as de,b as fe,k as b,t as pe,w as x,x as S}from"./src-az0C_L-w.js";import{n as C,t as me}from"./register-stats-mocks-B3kpDeUk.js";import{n as he,t as w}from"./force-stats-mock-state-BOg_27t9.js";function ge(e){let t=m((0,T.useMemo)(()=>{let t={...e,max:D};return delete t.comp,delete t.compare_from,delete t.compare_to,delete t.compare_preset,t},[e]),{maxRows:1,postTypes:E}),n=t.comparisonRows?.rows[0],r=Number(n?.id??0)||0,i=ne(te(r)),a=ee({postId:r,fields:[`views`,`like_count`,`post`]}),o=a.data,s=o?.post?.ID,c=o&&(s===void 0||s===r)?o:void 0,l=r>0&&!c&&!a.isError,u=t.isLoading||r>0&&(i.isLoading||a.isLoading||l),d=t.isFetching||i.isFetching||a.isFetching,f=t.isError,p=()=>{t.refetch(),r>0&&(i.refetch(),a.refetch())},h=i.data??null;return{post:n?{id:r,title:h?.title||String(n.label??``),url:h?.url||n.link||``,date:h?.date||(typeof n.date==`string`?n.date:``),imageUrl:h?.imageUrl??``,imageAlt:h?.imageAlt??``,views:c?.views,likeCount:c?.like_count,commentCount:c?.post?.comment_count}:null,isLoading:u,isFetching:d,isError:f,error:t.error,refetch:p}}var T,E,D,_e=t((()=>{g(),T=e(n(),1),E=[`post`],D=20}));function ve(){let{reportParams:e}=d(),{post:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:l}=ge(e),f=(0,o.useMemo)(()=>u(e),[e]),p=t?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:t.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:t.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:t.commentCount}]:[];return(0,k.jsx)(oe,{isLoading:n,isFetching:i,isError:a,isEmpty:!t,error:_(s,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{icon:c,description:r(`No post views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(re,{}),children:t&&(0,k.jsx)(ae,{title:t.title,url:t.url,postId:t.id,detailSearch:f,date:t.date,imageUrl:t.imageUrl,imageAlt:t.imageAlt,metrics:p})})}function O({attributes:e={}}){return(0,k.jsx)(f,{attributes:e,children:(0,k.jsx)(ve,{})})}var k,A=t((()=>{p(),pe(),s(),i(),l(),_e(),k=a()})),j,M=t((()=>{l(),j={icon:c,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,ye=t((()=>{N=`jpa/popular-post`,P=`Popular post`,F=`Your most-viewed post for the selected date range, with its all-time stats.`,I={content:`Your most viewed post in the selected date range, with its all-time views, likes, and comments.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function be(){return(0,H.jsx)(O,{attributes:{reportParams:h()}})}function B(e){return(0,H.jsx)(O,{attributes:{reportParams:h(!1,e)}})}function V(e){return(0,H.jsx)(de,{...e,widgetType:ue(z,j),renderModule:U,renderComponent:O,attributes:{reportParams:h(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),v(),me(),se(),he(),ce(),le(),fe(),A(),M(),ye(),H=a(),ie(),C(),U=`storybook/popular-post`,W={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Popular post\" widget shows the site's most-viewed post for the dashboard's date range, with its publish date and its all-time views, likes, and comments. Changing the date range changes which post wins, not the totals shown for it: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},G={render:be,decorators:[S,b]},K={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(w(`stats/top-posts`,`loading`),()=>w(`stats/top-posts`,null))},q={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(w(`stats/top-posts`,`error`),()=>w(`stats/top-posts`,null))},J={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(w(`stats/top-posts`,`error-retryable`),()=>w(`stats/top-posts`,null))},Y={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(w(`stats/top-posts`,`empty`),()=>w(`stats/top-posts`,null))},X={render:e=>(0,H.jsx)(V,{...e}),args:{...x,widgetWidth:2,widgetHeight:2},argTypes:{...y}},Z={render:e=>(0,H.jsx)(V,{...e}),args:{...x,widgetWidth:2,widgetHeight:1},argTypes:{...y}},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...x,widgetWidth:1,widgetHeight:1},argTypes:{...y}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
  // Avoid presenting the same date range as ErrorRetryable in most years.
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