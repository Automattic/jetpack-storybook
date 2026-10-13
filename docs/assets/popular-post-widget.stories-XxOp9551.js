import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,t as s}from"./build-module-Cm3Kd3py.js";import{Ja as c,Ya as l}from"./iframe-Cz3Qwseo.js";import{f as u}from"./library-DTloIBum.js";import{t as d}from"./src-fQR6rGKL.js";import{J as f,t as p}from"./src-DHlripjL.js";import{E as m,Nt as h,T as g,Tt as _,an as ee,ht as te,jt as ne,sn as re,t as v,un as y}from"./src-U-sDMJfd.js";import{S as ie,_t as ae,ft as oe,m as se,ut as ce,v as b}from"./charts-provider-BuTg1Ngr.js";import{n as le,o as ue,r as de}from"./register-report-mocks-CuD7zNat.js";import{t as fe}from"./widget-state-COGLon3H.js";import{n as pe,r as x}from"./with-story-router-TjVyBU09.js";import{t as me}from"./post-highlight-card-skeleton-BpOwfVDc.js";import{R as he,t as ge}from"./src-aK2isfTX.js";import{a as _e,g as S,h as ve,i as ye,m as be,n as xe,p as C,r as w}from"./with-widget-canvas-XGsf17xH.js";import{n as Se,t as Ce}from"./register-stats-mocks-BdDTjpz_.js";import{n as we,t as T}from"./force-stats-mock-state-CEP-7s0q.js";import{n as Te,t as Ee}from"./use-no-published-posts-DbHyihpB.js";function De(e,t){let n=_((0,E.useMemo)(()=>({...e,max:D}),[e]),{maxRows:1,postTypes:ke,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=h(g(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function Oe(e,t,n){let r=te((0,E.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,E.useMemo)(()=>n?ee(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,E.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=h(m(a)),s=(0,E.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var E,ke,D,Ae=t((()=>{v(),E=e(n(),1),ke=[`post`],D=20}));function je(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:y(!1,k),o=(0,O.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,O.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=De(s,!t),l=Oe(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=ne({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,g=h?.post?.ID,_=h&&(g===void 0||g===p)?h:void 0,ee=p>0&&!_&&!m.isError,te=u.isLoading||p>0&&(m.isLoading||ee),re=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:_?.views,likeCount:_?.like_count,commentCount:_?.post?.comment_count}:null,range:o,isLoading:te,isFetching:re,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var O,k,Me=t((()=>{v(),p(),O=e(n(),1),Ae(),k=f}));function Ne({authorScoped:e}){let{reportParams:t}=b(),n=e?re(t.author_id):0;return e&&!n?(0,j.jsx)(fe,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:o,description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,j.jsx)(Pe,{authorId:n})}function Pe({authorId:e}){let{reportParams:t}=b(),n=ie(),{post:i,range:a,isLoading:s,isFetching:c,isError:d,error:f,refetch:p}=je(e?{authorId:e,reportParams:t}:void 0),{noPublishedPosts:m,isChecking:h}=Te(!e&&!s&&!d&&!i),g=i?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:i.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:i.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:i.commentCount}]:[],_={...a,...n,...ae(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,j.jsx)(fe,{isLoading:s||h,isFetching:c,isError:d,isEmpty:!i,error:ce(f,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:e?void 0:{icon:m?u:o,description:r(m?`Your most-read post will show here once you've published one.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`),action:m?{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:l(`post-new.php`)}:void 0},renderLoading:(0,j.jsx)(me,{}),children:i&&(0,j.jsx)(he,{title:i.title,url:i.url,postId:i.id,detailSearch:_,date:i.date,imageUrl:i.imageUrl,imageAlt:i.imageAlt,metrics:g})})}function A({attributes:e={}}){return(0,j.jsx)(se,{attributes:e,children:(0,j.jsx)(Ne,{authorScoped:e.authorScoped===!0})})}var j,Fe=t((()=>{c(),v(),d(),oe(),ge(),i(),s(),Me(),Ee(),j=a()})),M,Ie=t((()=>{M={attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,B,Le=t((()=>{N=`jpa/popular-post`,P=`jpa/trending-up`,F=`Most popular in the last year`,I=`Your most-viewed post of the last 12 months, with its all-time stats.`,L={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(){return(0,U.jsx)(A,{attributes:{reportParams:y()}})}function H(e){return(0,U.jsx)(be,{...e,widgetType:ye(B,M),renderModule:Re,renderComponent:A,attributes:{reportParams:y(!0)}})}var U,Re,ze,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),le(),Ce(),_e(),we(),ve(),pe(),xe(),Fe(),Ie(),Le(),U=a(),de(),Se(),Re=`storybook/popular-post`,ze={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},W={render:V,decorators:[w,x]},G={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`loading`),()=>T(`stats/top-posts`,null))},K={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error`),()=>T(`stats/top-posts`,null))},q={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`error-retryable`),()=>T(`stats/top-posts`,null))},J={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>(T(`stats/top-posts`,`empty`),ue(`/wp/v2/posts`,[{id:1}]),()=>{T(`stats/top-posts`,null),ue(`/wp/v2/posts`,null)})},Y={render:V,tags:[`!autodocs`],decorators:[w,x],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},T(`stats/top-posts`,`empty`),T(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,T(`stats/top-posts`,null),T(`/wp/v2/posts`,null)}}},X={render:e=>(0,U.jsx)(H,{...e}),args:{...C,widgetWidth:2,widgetHeight:2},argTypes:{...S}},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...C,widgetWidth:2,widgetHeight:1},argTypes:{...S}},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...C,widgetWidth:1,widgetHeight:1},argTypes:{...S}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...W.parameters?.docs?.source},description:{story:`Default — the last 12 months' most-viewed post with its all-time views, likes, and comments.

The shared close-up canvas is the width of a width-1 dashboard cell, which is
below the card's 520px wide breakpoint: the featured image is dropped and the
metric row wraps. \`WidgetDashboardWithWidget\` below shows the default width-2
placement, where the image sits in a trailing column.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'loading');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...G.parameters?.docs?.source},description:{story:`First load: the ranking request is in flight, so the widget shows its loading
state. The mock is forced to never resolve for the duration of this story.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...K.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error-retryable');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...q.parameters?.docs?.source},description:{story:"The proxy's `no_connection` 403: a broken Jetpack connection can heal, so\n`describeError` keeps this one retryable.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
metric row — every label with its value — stays inside the card.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{W as Default,J as Empty,Y as EmptyNoPosts,K as Error,q as ErrorRetryable,G as Loading,Z as ShortCell,Q as ShortNarrowCell,X as WidgetDashboardWithWidget,$ as __namedExportsOrder,ze as default};