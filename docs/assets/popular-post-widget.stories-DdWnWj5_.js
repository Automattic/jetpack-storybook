import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Xa as o,Ya as s}from"./iframe-B2fWnsa4.js";import{q as c,t as l}from"./src-BGYQLfcD.js";import{A as u,Bt as d,Mt as f,Rt as ee,St as p,cn as m,j as h,pn as g,t as _,un as v}from"./src-CFs84l7c.js";import{S as te,m as ne,mt as re,v as ie}from"./charts-provider-DwDs1k0n.js";import{c as ae,r as oe}from"./use-track-event-DyHjDrE7.js";import{n as se,o as y,r as ce}from"./register-report-mocks-CUUO0DYG.js";import{t as b}from"./widget-state-HGsnRJAb.js";import{n as le,r as x}from"./with-story-router-B8AmDh4M.js";import{t as ue}from"./post-highlight-card-skeleton-D3jyMAtr.js";import{H as de,t as fe}from"./src-BcJ3rA0v.js";import{a as pe,g as S,h as me,i as he,m as ge,n as _e,p as C,r as w}from"./with-widget-canvas-BX31JTd0.js";import{n as ve,t as ye}from"./register-stats-mocks-DeGOo2e_.js";import{n as be,t as T}from"./force-stats-mock-state-Bd8fyjOy.js";import{n as xe,t as Se}from"./use-no-published-posts-D_UfbnfZ.js";function Ce(e,t){let n=f((0,E.useMemo)(()=>({...e,max:O}),[e]),{maxRows:1,postTypes:D,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=d(u(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function we(e,t,n){let r=p((0,E.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,E.useMemo)(()=>n?m(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,E.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=d(h(a)),s=(0,E.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var E,D,O,Te=t((()=>{_(),E=e(n(),1),D=[`post`],O=20}));function Ee(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:g(!1,A),o=(0,k.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,k.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=Ce(s,!t),l=we(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=ee({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,_=h?.post?.ID,v=h&&(_===void 0||_===p)?h:void 0,te=p>0&&!v&&!m.isError,ne=u.isLoading||p>0&&(m.isLoading||te),re=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:v?.views,likeCount:v?.like_count,commentCount:v?.post?.comment_count}:null,range:o,isLoading:ne,isFetching:re,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var k,A,De=t((()=>{_(),l(),k=e(n(),1),Te(),A=c}));function Oe({authorScoped:e}){let{reportParams:t}=ie(),n=e?v(t.author_id):0;return e&&!n?(0,M.jsx)(b,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,M.jsx)(ke,{authorId:n})}function ke({authorId:e}){let{reportParams:t}=ie(),n=te(),{post:i,range:a,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=Ee(e?{authorId:e,reportParams:t}:void 0),{noPublishedPosts:f,isChecking:ee}=xe(!e&&!s&&!l&&!i),p=i?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:i.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:i.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:i.commentCount}]:[],m={...a,...n,...ae(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,M.jsx)(b,{isLoading:s||ee,isFetching:c,isError:l,isEmpty:!i,error:re(u,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:e?void 0:{description:r(f?`Your most-read post will show here once you've published one.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`),action:f?{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:o(`post-new.php`)}:void 0},renderLoading:(0,M.jsx)(ue,{}),children:i&&(0,M.jsx)(de,{title:i.title,url:i.url,postId:i.id,detailSearch:m,date:i.date,imageUrl:i.imageUrl,imageAlt:i.imageAlt,metrics:p})})}function j({attributes:e={}}){return(0,M.jsx)(ne,{attributes:e,children:(0,M.jsx)(Oe,{authorScoped:e.authorScoped===!0})})}var M,Ae=t((()=>{s(),_(),oe(),fe(),i(),De(),Se(),M=a()})),je,Me=t((()=>{je={attributes:[],example:{attributes:{}}}})),N,Ne,P,F,I,L,R,z,Pe=t((()=>{N=`jpa/popular-post`,Ne=`jpa/trending-up`,P=`Most popular in the last year`,F=`Your most-viewed post of the last 12 months, with its all-time stats.`,I={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},L=`stats`,R=`framed`,z={name:N,icon:Ne,title:P,description:F,help:I,category:L,presentation:R}}));function B(){return(0,H.jsx)(j,{attributes:{reportParams:g()}})}function V(e){return(0,H.jsx)(ge,{...e,widgetType:he(z,je),renderModule:U,renderComponent:j,attributes:{reportParams:g(!0)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$,Fe;t((()=>{_(),se(),ye(),pe(),be(),me(),le(),_e(),Ae(),Me(),Pe(),H=a(),ce(),ve(),U=`storybook/popular-post`,W={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},G={render:B,decorators:[w,x]},K={render:B,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`loading`),()=>T(`stats/top-posts`,null))},q={render:B,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error`),()=>T(`stats/top-posts`,null))},J={render:B,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error-retryable`),()=>T(`stats/top-posts`,null))},Y={render:B,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`empty`),y(`/wp/v2/posts`,[{id:1}]),()=>{T(`stats/top-posts`,null),y(`/wp/v2/posts`,null)})},X={render:B,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},T(`stats/top-posts`,`empty`),T(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,T(`stats/top-posts`,null),T(`/wp/v2/posts`,null)}}},Z={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:2,widgetHeight:2},argTypes:{...S}},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:2,widgetHeight:1},argTypes:{...S}},$={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:1,widgetHeight:1},argTypes:{...S}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
    setReportMockResponse('/wp/v2/posts', [{
      id: 1
    }]);
    return () => {
      forceStatsMockState('stats/top-posts', null);
      setReportMockResponse('/wp/v2/posts', null);
    };
  }
}`,...Y.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    const scriptData = window.JetpackScriptData;
    window.JetpackScriptData = {
      ...scriptData,
      site: {
        ...scriptData?.site,
        admin_url: 'https://example.com/blog/wp-admin/'
      }
    } as typeof window.JetpackScriptData;
    forceStatsMockState('stats/top-posts', 'empty');
    forceStatsMockState('/wp/v2/posts', 'empty');
    return () => {
      window.JetpackScriptData = scriptData;
      forceStatsMockState('stats/top-posts', null);
      forceStatsMockState('/wp/v2/posts', null);
    };
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
metric row — every label with its value — stays inside the card.`,...$.parameters?.docs?.description}}},Fe=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{G as Default,Y as Empty,X as EmptyNoPosts,q as Error,J as ErrorRetryable,K as Loading,Q as ShortCell,$ as ShortNarrowCell,Z as WidgetDashboardWithWidget,Fe as __namedExportsOrder,W as default};