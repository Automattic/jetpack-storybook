import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Ja as o,Ya as s}from"./iframe-De-JfGxq.js";import{J as c,t as l}from"./src-DMtd_Zub.js";import{E as u,Nt as d,T as f,Tt as p,an as m,cn as h,ht as g,jt as ee,rn as _,t as v}from"./src-DlOhFBY4.js";import{S as y,_t as b,ft as te,m as ne,ut as re,v as x}from"./charts-provider-lCLBOjqt.js";import{n as ie,o as ae,r as oe}from"./register-report-mocks-Bp1DihwJ.js";import{t as se}from"./widget-state-DvIGzej3.js";import{n as ce,r as S}from"./with-story-router-TjVyBU09.js";import{t as le}from"./post-highlight-card-skeleton-mTn-eQdh.js";import{t as ue,z as de}from"./src-O51n_cga.js";import{a as fe,g as C,h as pe,i as me,m as he,n as ge,p as w,r as T}from"./with-widget-canvas-Ducumtdh.js";import{n as _e,t as ve}from"./register-stats-mocks-B3m7wcpI.js";import{n as ye,t as E}from"./force-stats-mock-state-Cut8E_Zz.js";import{n as be,t as xe}from"./use-no-published-posts-BIQff1N9.js";function Se(e,t){let n=p((0,D.useMemo)(()=>({...e,max:k}),[e]),{maxRows:1,postTypes:O,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=d(f(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function Ce(e,t,n){let r=g((0,D.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,D.useMemo)(()=>n?_(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,D.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=d(u(a)),s=(0,D.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,f=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||f,error:r.error??(f?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var D,O,k,we=t((()=>{v(),D=e(n(),1),O=[`post`],k=20}));function Te(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:h(!1,j),o=(0,A.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,A.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=Se(s,!t),l=Ce(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=ee({postId:p,fields:[`views`,`like_count`,`post`]}),g=m.data,_=g?.post?.ID,v=g&&(_===void 0||_===p)?g:void 0,y=p>0&&!v&&!m.isError,b=u.isLoading||p>0&&(m.isLoading||y),te=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:v?.views,likeCount:v?.like_count,commentCount:v?.post?.comment_count}:null,range:o,isLoading:b,isFetching:te,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var A,j,Ee=t((()=>{v(),l(),A=e(n(),1),we(),j=c}));function De({authorScoped:e}){let{reportParams:t}=x(),n=e?m(t.author_id):0;return e&&!n?(0,N.jsx)(se,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,N.jsx)(Oe,{authorId:n})}function Oe({authorId:e}){let{reportParams:t}=x(),n=y(),{post:i,range:a,isLoading:o,isFetching:c,isError:l,error:u,refetch:d}=Te(e?{authorId:e,reportParams:t}:void 0),{noPublishedPosts:f,isChecking:p}=be(!e&&!o&&!l&&!i),m=i?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:i.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:i.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:i.commentCount}]:[],h={...a,...n,...b(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,N.jsx)(se,{isLoading:o||p,isFetching:c,isError:l,isEmpty:!i,error:re(u,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:e?void 0:{description:r(f?`Your most-read post will show here once you've published one.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`),action:f?{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:s(`post-new.php`)}:void 0},renderLoading:(0,N.jsx)(le,{}),children:i&&(0,N.jsx)(de,{title:i.title,url:i.url,postId:i.id,detailSearch:h,date:i.date,imageUrl:i.imageUrl,imageAlt:i.imageAlt,metrics:m})})}function M({attributes:e={}}){return(0,N.jsx)(ne,{attributes:e,children:(0,N.jsx)(De,{authorScoped:e.authorScoped===!0})})}var N,ke=t((()=>{o(),v(),te(),ue(),i(),Ee(),xe(),N=a()})),P,Ae=t((()=>{P={attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,je,Me,Ne=t((()=>{F=`jpa/popular-post`,I=`jpa/trending-up`,L=`Most popular in the last year`,R=`Your most-viewed post of the last 12 months, with its all-time stats.`,z={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},B=`stats`,je=`framed`,Me={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:je}}));function V(){return(0,U.jsx)(M,{attributes:{reportParams:h()}})}function H(e){return(0,U.jsx)(he,{...e,widgetType:me(Me,P),renderModule:Pe,renderComponent:M,attributes:{reportParams:h(!0)}})}var U,Pe,Fe,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),ie(),ve(),fe(),ye(),pe(),ce(),ge(),ke(),Ae(),Ne(),U=a(),oe(),_e(),Pe=`storybook/popular-post`,Fe={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},W={render:V,decorators:[T,S]},G={render:V,tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(E(`stats/top-posts`,`loading`),()=>E(`stats/top-posts`,null))},K={render:V,tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(E(`stats/top-posts`,`error`),()=>E(`stats/top-posts`,null))},q={render:V,tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(E(`stats/top-posts`,`error-retryable`),()=>E(`stats/top-posts`,null))},J={render:V,tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>(E(`stats/top-posts`,`empty`),ae(`/wp/v2/posts`,[{id:1}]),()=>{E(`stats/top-posts`,null),ae(`/wp/v2/posts`,null)})},Y={render:V,tags:[`!autodocs`],decorators:[T,S],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},E(`stats/top-posts`,`empty`),E(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,E(`stats/top-posts`,null),E(`/wp/v2/posts`,null)}}},X={render:e=>(0,U.jsx)(H,{...e}),args:{...w,widgetWidth:2,widgetHeight:2},argTypes:{...C}},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...w,widgetWidth:2,widgetHeight:1},argTypes:{...C}},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...w,widgetWidth:1,widgetHeight:1},argTypes:{...C}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
metric row — every label with its value — stays inside the card.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`]}))();export{W as Default,J as Empty,Y as EmptyNoPosts,K as Error,q as ErrorRetryable,G as Loading,Z as ShortCell,Q as ShortNarrowCell,X as WidgetDashboardWithWidget,$ as __namedExportsOrder,Fe as default};