import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Ja as o,Ya as s}from"./iframe-VXK775qI.js";import{q as c,t as l}from"./src-D_42x9vz.js";import{Dt as u,E as d,Ft as f,Nt as p,T as m,_t as h,an as g,cn as _,rn as v,t as y}from"./src-BYBpxsXD.js";import{S as b,_t as x,ft as ee,m as te,ut as ne,v as S}from"./charts-provider-VtFr6s1_.js";import{n as re,o as ie,r as ae}from"./register-report-mocks-SMhb2vLM.js";import{t as oe}from"./widget-state-CwRrBJ3B.js";import{n as se,r as C}from"./with-story-router-TjVyBU09.js";import{t as ce}from"./post-highlight-card-skeleton-DSULYONf.js";import{t as le,z as ue}from"./src-4Q3FPo-S.js";import{a as de,g as w,h as fe,i as pe,m as me,n as he,p as T,r as E}from"./with-widget-canvas-BTOTLZTr.js";import{n as ge,t as _e}from"./register-stats-mocks-BdAc6NBt.js";import{n as ve,t as D}from"./force-stats-mock-state-BHMeSblu.js";import{n as ye,t as be}from"./use-no-published-posts-CKe4H20D.js";function xe(e,t){let n=u((0,O.useMemo)(()=>({...e,max:A}),[e]),{maxRows:1,postTypes:k,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=f(m(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function Se(e,t,n){let r=h((0,O.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,O.useMemo)(()=>n?v(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,O.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=f(d(a)),s=(0,O.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var O,k,A,Ce=t((()=>{y(),O=e(n(),1),k=[`post`],A=20}));function we(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:_(!1,M),o=(0,j.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,j.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=xe(s,!t),l=Se(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,m=Number(d?.id??0)||0,h=p({postId:m,fields:[`views`,`like_count`,`post`]}),g=h.data,v=g?.post?.ID,y=g&&(v===void 0||v===m)?g:void 0,b=m>0&&!y&&!h.isError,x=u.isLoading||m>0&&(h.isLoading||b),ee=u.isFetching||h.isFetching;return{post:d?{id:m,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:y?.views,likeCount:y?.like_count,commentCount:y?.post?.comment_count}:null,range:o,isLoading:x,isFetching:ee,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),m>0&&h.refetch()}}}var j,M,Te=t((()=>{y(),l(),j=e(n(),1),Ce(),M=c}));function Ee({authorScoped:e}){let{reportParams:t}=S(),n=e?g(t.author_id):0;return e&&!n?(0,P.jsx)(oe,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,P.jsx)(De,{authorId:n})}function De({authorId:e}){let{reportParams:t}=S(),n=b(),{post:i,range:a,isLoading:o,isFetching:c,isError:l,error:u,refetch:d}=we(e?{authorId:e,reportParams:t}:void 0),{noPublishedPosts:f,isChecking:p}=ye(!e&&!o&&!l&&!i),m=i?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:i.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:i.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:i.commentCount}]:[],h={...a,...n,...x(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,P.jsx)(oe,{isLoading:o||p,isFetching:c,isError:l,isEmpty:!i,error:ne(u,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:e?void 0:{description:r(f?`Your most-read post will show here once you've published one.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`),action:f?{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:s(`post-new.php`)}:void 0},renderLoading:(0,P.jsx)(ce,{}),children:i&&(0,P.jsx)(ue,{title:i.title,url:i.url,postId:i.id,detailSearch:h,date:i.date,imageUrl:i.imageUrl,imageAlt:i.imageAlt,metrics:m})})}function N({attributes:e={}}){return(0,P.jsx)(te,{attributes:e,children:(0,P.jsx)(Ee,{authorScoped:e.authorScoped===!0})})}var P,Oe=t((()=>{o(),y(),ee(),le(),i(),Te(),be(),P=a()})),F,ke=t((()=>{F={attributes:[],example:{attributes:{}}}})),I,L,R,z,B,Ae,je,Me,Ne=t((()=>{I=`jpa/popular-post`,L=`jpa/trending-up`,R=`Most popular in the last year`,z=`Your most-viewed post of the last 12 months, with its all-time stats.`,B={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},Ae=`stats`,je=`framed`,Me={name:I,icon:L,title:R,description:z,help:B,category:Ae,presentation:je}}));function V(){return(0,U.jsx)(N,{attributes:{reportParams:_()}})}function H(e){return(0,U.jsx)(me,{...e,widgetType:pe(Me,F),renderModule:Pe,renderComponent:N,attributes:{reportParams:_(!0)}})}var U,Pe,Fe,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{y(),re(),_e(),de(),ve(),fe(),se(),he(),Oe(),ke(),Ne(),U=a(),ae(),ge(),Pe=`storybook/popular-post`,Fe={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},W={render:V,decorators:[E,C]},G={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(D(`stats/top-posts`,`loading`),()=>D(`stats/top-posts`,null))},K={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(D(`stats/top-posts`,`error`),()=>D(`stats/top-posts`,null))},q={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(D(`stats/top-posts`,`error-retryable`),()=>D(`stats/top-posts`,null))},J={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(D(`stats/top-posts`,`empty`),ie(`/wp/v2/posts`,[{id:1}]),()=>{D(`stats/top-posts`,null),ie(`/wp/v2/posts`,null)})},Y={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},D(`stats/top-posts`,`empty`),D(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,D(`stats/top-posts`,null),D(`/wp/v2/posts`,null)}}},X={render:e=>(0,U.jsx)(H,{...e}),args:{...T,widgetWidth:2,widgetHeight:2},argTypes:{...w}},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...T,widgetWidth:2,widgetHeight:1},argTypes:{...w}},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...T,widgetWidth:1,widgetHeight:1},argTypes:{...w}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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