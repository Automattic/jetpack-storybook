import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{n as o,t as s}from"./src-DpxsllRm.js";import{F as c,Mt as l,Pt as u,U as d,z as f,zt as p}from"./charts-provider-CHpSzGut.js";import{q as m,t as h}from"./src-DFqe9oto.js";import{Bt as g,Ht as _,M as v,N as y,Pt as ee,fn as te,hn as b,t as x,un as ne,wt as re}from"./src-BEwaewMJ.js";import{t as S}from"./widget-state-BwHOn80-.js";import{n as ie,o as C,r as ae}from"./register-report-mocks-D47Rougd.js";import{i as oe,n as se,r as w,w as ce}from"./with-story-router-B7u0fWxg.js";import{t as le}from"./post-highlight-card-skeleton-BW-i7v4n.js";import{a as ue,g as T,h as de,i as fe,m as pe,n as me,p as E,r as D}from"./with-widget-canvas-aKDVvh1v.js";import{n as he,t as ge}from"./register-stats-mocks-Nvcu00DF.js";import{n as _e,t as O}from"./force-stats-mock-state-BxPlbF2m.js";import{n as ve,t as ye}from"./use-no-published-posts-DFz_lR_x.js";function be(e,t){let n=ee((0,k.useMemo)(()=>({...e,max:j}),[e]),{maxRows:1,postTypes:A,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=_(v(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function xe(e,t,n){let r=re((0,k.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,k.useMemo)(()=>n?ne(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,k.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=_(y(a)),s=(0,k.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var k,A,j,Se=e((()=>{x(),k=t(n(),1),A=[`post`],j=20}));function Ce(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:b(!1,N),o=(0,M.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,M.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=be(s,!t),l=xe(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=g({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,_=h?.post?.ID,v=h&&(_===void 0||_===p)?h:void 0,y=p>0&&!v&&!m.isError,ee=u.isLoading||p>0&&(m.isLoading||y),te=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:v?.views,likeCount:v?.like_count,commentCount:v?.post?.comment_count}:null,range:o,isLoading:ee,isFetching:te,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var M,N,we=e((()=>{x(),h(),M=t(n(),1),Se(),N=m}));function Te({authorScoped:e}){let{reportParams:t}=f(),n=e?te(t.author_id):0;return e&&!n?(0,F.jsx)(S,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,F.jsx)(Ee,{authorId:n})}function Ee({authorId:e}){let{reportParams:t}=f(),n=d(),{post:i,range:a,isLoading:s,isFetching:c,isError:u,error:m,refetch:h}=Ce(e?{authorId:e,reportParams:t}:void 0),{noPublishedPosts:g,isChecking:_}=ve(!e&&!s&&!u&&!i),v=i?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:i.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:i.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:i.commentCount}]:[],y={...a,...n,...p(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,F.jsx)(S,{isLoading:s||_,isFetching:c,isError:u,isEmpty:!i,error:l(m,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),empty:e?void 0:{description:r(g?`Your most-read post will show here once you've published one.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`),action:g?{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:o(`post-new.php`)}:void 0},renderLoading:(0,F.jsx)(le,{}),children:i&&(0,F.jsx)(ce,{title:i.title,url:i.url,postId:i.id,detailSearch:y,date:i.date,imageUrl:i.imageUrl,imageAlt:i.imageAlt,metrics:v})})}function P({attributes:e={}}){return(0,F.jsx)(c,{attributes:e,children:(0,F.jsx)(Te,{authorScoped:e.authorScoped===!0})})}var F,De=e((()=>{s(),x(),u(),oe(),i(),we(),ye(),F=a()})),I,Oe,ke,Ae,je,Me,L,R,Ne=e((()=>{I=`jpa/popular-post`,Oe=`jpa/trending-up`,ke=`Most popular in the last year`,Ae=`Your most-viewed post of the last 12 months, with its all-time stats.`,je={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},Me=`stats`,L=`framed`,R={name:I,icon:Oe,title:ke,description:Ae,help:je,category:Me,presentation:L}}));function z(){return(0,V.jsx)(P,{attributes:{reportParams:b()}})}function B(e){return(0,V.jsx)(pe,{...e,widgetType:fe(R),renderModule:H,renderComponent:P,attributes:{reportParams:b(!0)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{x(),ie(),ge(),ue(),_e(),de(),se(),me(),De(),Ne(),V=a(),ae(),he(),H=`storybook/popular-post`,U={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:P,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},W={render:z,decorators:[D,w]},G={render:z,tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(O(`stats/top-posts`,`loading`),()=>O(`stats/top-posts`,null))},K={render:z,tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(O(`stats/top-posts`,`error`),()=>O(`stats/top-posts`,null))},q={render:z,tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(O(`stats/top-posts`,`error-retryable`),()=>O(`stats/top-posts`,null))},J={render:z,tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>(O(`stats/top-posts`,`empty`),C(`/wp/v2/posts`,[{id:1}]),()=>{O(`stats/top-posts`,null),C(`/wp/v2/posts`,null)})},Y={render:z,tags:[`!autodocs`],decorators:[D,w],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},O(`stats/top-posts`,`empty`),O(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,O(`stats/top-posts`,null),O(`/wp/v2/posts`,null)}}},X={render:e=>(0,V.jsx)(B,{...e}),args:{...E,widgetWidth:2,widgetHeight:2},argTypes:{...T}},Z={render:e=>(0,V.jsx)(B,{...e}),args:{...E,widgetWidth:2,widgetHeight:1},argTypes:{...T}},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...E,widgetWidth:1,widgetHeight:1},argTypes:{...T}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`,`ShortCell`,`ShortNarrowCell`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
metric row — every label with its value — stays inside the card.`,...Q.parameters?.docs?.description}}}}))();export{W as Default,J as Empty,Y as EmptyNoPosts,K as Error,q as ErrorRetryable,G as Loading,Z as ShortCell,Q as ShortNarrowCell,X as WidgetDashboardWithWidget,$ as __namedExportsOrder,U as default};