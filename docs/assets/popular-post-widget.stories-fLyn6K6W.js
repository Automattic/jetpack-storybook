import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{r as o,t as s}from"./src-BgnB_EuX.js";import{B as c,I as l,Jt as u,Ut as d,Vt as f,W as p}from"./charts-provider-Dywd-o-P.js";import{t as m,tt as h}from"./src-DMeLrrCy.js";import{Dt as g,Gt as _,Lt as v,M as y,N as ee,Ut as te,_n as ne,bn as b,hn as re,t as x}from"./src-BG_TKhyf.js";import{t as ie}from"./widget-state-Dbd-m3rt.js";import{j as ae,t as oe}from"./src-B5UWDf40.js";import{n as se,o as S,r as ce}from"./register-report-mocks-CisljdiM.js";import{t as le}from"./post-highlight-card-skeleton-dkhQGO2y.js";import{n as ue,r as C}from"./with-story-router-C-QssHt2.js";import{a as de,c as fe,i as pe,l as w,n as me,o as T,r as E,s as he}from"./with-widget-canvas-BmtrsUpz.js";import{n as ge,t as _e}from"./register-stats-mocks-BLfWbTqK.js";import{n as ve,t as D}from"./force-stats-mock-state-CiHtRTGa.js";import{n as ye,t as be}from"./use-no-published-posts-DMElMCeU.js";function xe(e,t){let n=v((0,O.useMemo)(()=>({...e,max:A}),[e]),{maxRows:1,postTypes:k,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=_(y(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function Se(e,t,n){let r=g((0,O.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,O.useMemo)(()=>n?re(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,O.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=_(ee(a)),s=(0,O.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var O,k,A,Ce=e((()=>{x(),O=t(n(),1),k=[`post`],A=20}));function we(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:b(!1,M),o=(0,j.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,j.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=xe(s,!t),l=Se(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=te({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,g=h?.post?.ID,_=h&&(g===void 0||g===p)?h:void 0,v=p>0&&!_&&!m.isError,y=u.isLoading||p>0&&(m.isLoading||v),ee=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:_?.views,likeCount:_?.like_count,commentCount:_?.post?.comment_count}:null,range:o,isLoading:y,isFetching:ee,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var j,M,Te=e((()=>{x(),m(),j=t(n(),1),Ce(),M=h}));function Ee({authorScoped:e}){let{reportParams:t}=c(),n=e?ne(t.author_id):0;return e&&!n?(0,P.jsx)(ie,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,P.jsx)(De,{authorId:n})}function De({authorId:e}){let{reportParams:t}=c(),n=p(),{post:i,range:a,isLoading:s,isFetching:l,isError:d,error:m,refetch:h}=we(e?{authorId:e,reportParams:t}:void 0),{noPublishedPosts:g,isChecking:_}=ye(!e&&!s&&!d&&!i),v=i?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:i.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:i.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:i.commentCount}]:[],y={...a,...n,...u(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,P.jsx)(ie,{isLoading:s||_,isFetching:l,isError:d,isEmpty:!i,error:f(m,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),empty:e?void 0:{description:r(g?`Your most-read post will show here once you've published one.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`),action:g?{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:o(`post-new.php`)}:void 0},renderLoading:(0,P.jsx)(le,{}),children:i&&(0,P.jsx)(ae,{title:i.title,url:i.url,postId:i.id,detailSearch:y,date:i.date,imageUrl:i.imageUrl,imageAlt:i.imageAlt,metrics:v})})}function N({attributes:e={}}){return(0,P.jsx)(l,{attributes:e,children:(0,P.jsx)(Ee,{authorScoped:e.authorScoped===!0})})}var P,Oe=e((()=>{s(),x(),d(),oe(),i(),Te(),be(),P=a()})),F,I,L,R,z,B,ke,Ae,je=e((()=>{F=`jpa/popular-post`,I=`jpa/trending-up`,L=`Most popular in the last year`,R=`Your most-viewed post of the last 12 months, with its all-time stats.`,z={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},B=`stats`,ke=`framed`,Ae={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:ke}}));function V(){return(0,U.jsx)(N,{attributes:{reportParams:b()}})}function H(e){return(0,U.jsx)(he,{...e,widgetType:pe(Ae),renderModule:Me,renderComponent:N,attributes:{reportParams:b(!0)}})}var U,Me,Ne,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{x(),se(),_e(),de(),ve(),fe(),ue(),me(),Oe(),je(),U=a(),ce(),ge(),Me=`storybook/popular-post`,Ne={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},W={render:V,decorators:[E,C]},G={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(D(`stats/top-posts`,`loading`),()=>D(`stats/top-posts`,null))},K={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(D(`stats/top-posts`,`error`),()=>D(`stats/top-posts`,null))},q={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(D(`stats/top-posts`,`error-retryable`),()=>D(`stats/top-posts`,null))},J={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>(D(`stats/top-posts`,`empty`),S(`/wp/v2/posts`,[{id:1}]),()=>{D(`stats/top-posts`,null),S(`/wp/v2/posts`,null)})},Y={render:V,tags:[`!autodocs`],decorators:[E,C],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},D(`stats/top-posts`,`empty`),D(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,D(`stats/top-posts`,null),D(`/wp/v2/posts`,null)}}},X={render:e=>(0,U.jsx)(H,{...e}),args:{...T,widgetWidth:2,widgetHeight:2},argTypes:{...w}},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...T,widgetWidth:2,widgetHeight:1},argTypes:{...w}},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...T,widgetWidth:1,widgetHeight:1},argTypes:{...w}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
metric row — every label with its value — stays inside the card.`,...Q.parameters?.docs?.description}}}}))();export{W as Default,J as Empty,Y as EmptyNoPosts,K as Error,q as ErrorRetryable,G as Loading,Z as ShortCell,Q as ShortNarrowCell,X as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ne as default};