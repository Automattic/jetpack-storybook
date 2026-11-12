import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{r as o,t as s}from"./src-BgnB_EuX.js";import{B as c,I as l,Vt as u,m as d}from"./charts-provider-BmHzZhpi.js";import{t as f,tt as p}from"./src-M-MiwiMQ.js";import{Gt as m,M as h,N as g,Sn as _,_n as v,kt as y,qt as b,t as x,yn as ee,zt as te}from"./src-BcILQ8ng.js";import{t as S}from"./widget-state-DnbF8hrz.js";import{j as ne,t as re}from"./src-BXUpbDcT.js";import{n as ie,o as C,r as ae}from"./register-report-mocks-DEKgkFm4.js";import{t as oe}from"./post-highlight-card-skeleton-BQHMVx4K.js";import{n as se,r as w}from"./with-story-router-CceBZUiL.js";import{a as ce,c as le,i as T,l as ue,o as de,r as fe,s as pe,u as me}from"./with-widget-canvas-BXILxgDl.js";import{n as he,t as ge}from"./register-stats-mocks-BLfWbTqK.js";import{n as _e,t as E}from"./force-stats-mock-state-CZ4B651-.js";import{n as ve,t as ye}from"./use-no-published-posts-BsH8zm-d.js";function be(e,t){let n=te((0,D.useMemo)(()=>({...e,max:k}),[e]),{maxRows:1,postTypes:O,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=b(h(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function xe(e,t,n){let r=y((0,D.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,D.useMemo)(()=>n?v(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,D.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=b(g(a)),s=(0,D.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var D,O,k,Se=e((()=>{x(),D=t(n(),1),O=[`post`],k=20}));function Ce(e){let t=!!e&&e.authorId>0,{from:n,to:r,interval:i}=t?e.reportParams:_(!1,j),a=(0,A.useMemo)(()=>({from:n,to:r,interval:i}),[n,r,i]),o=be(a,!t),s=xe(e?.authorId??0,a,t),c=t?s:o,{topRow:l,content:u}=c,d=Number(l?.id??0)||0,f=m({postId:d,fields:[`views`,`like_count`,`post`]}),p=f.data,h=p?.post?.ID,g=p&&(h===void 0||h===d)?p:void 0,v=d>0&&!g&&!f.isError,y=c.isLoading||d>0&&(f.isLoading||v),b=c.isFetching||f.isFetching;return{post:l?{id:d,title:u?.title||String(l.label??``),url:u?.url||l.link||``,date:u?.date||(typeof l.date==`string`?l.date:``),imageUrl:u?.imageUrl??``,imageAlt:u?.imageAlt??``,views:g?.views,likeCount:g?.like_count,commentCount:g?.post?.comment_count}:null,isLoading:y,isFetching:b,isError:c.isError,error:c.error,refetch:()=>{c.refetch(),d>0&&f.refetch()}}}var A,j,we=e((()=>{x(),f(),A=t(n(),1),Se(),j=p}));function Te({authorScoped:e}){let{reportParams:t}=c(),n=e?ee(t.author_id):0;return e&&!n?(0,N.jsx)(S,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,N.jsx)(Ee,{authorId:n})}function Ee({authorId:e}){let{reportParams:t}=c(),{post:n,isLoading:i,isFetching:a,isError:s,error:l,refetch:f}=Ce(e?{authorId:e,reportParams:t}:void 0),{noPublishedPosts:p,isChecking:m}=ve(!e&&!i&&!s&&!n),h=n?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:n.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:n.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:n.commentCount}]:[],g=d({origin:e?{report:`authors`}:{report:`posts`,section:`posts-pages`}});return(0,N.jsx)(S,{isLoading:i||m,isFetching:a,isError:s,isEmpty:!n,error:u(l,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:e?void 0:{description:r(p?`Your most-read post will show here once you've published one.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`),action:p?{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:o(`post-new.php`)}:void 0},renderLoading:(0,N.jsx)(oe,{}),children:n&&(0,N.jsx)(ne,{title:n.title,url:n.url,postId:n.id,detailSearch:g,date:n.date,imageUrl:n.imageUrl,imageAlt:n.imageAlt,metrics:h})})}function M({attributes:e={}}){return(0,N.jsx)(l,{attributes:e,children:(0,N.jsx)(Te,{authorScoped:e.authorScoped===!0})})}var N,De=e((()=>{s(),x(),re(),i(),we(),ye(),N=a()})),P,F,I,L,R,z,B,V,Oe=e((()=>{P=`jpa/popular-post`,F=`jpa/trending-up`,I=`Most popular in the last year`,L=`Your most-viewed post of the last 12 months, with its all-time stats.`,R={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},z=`stats`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(){return(0,U.jsx)(M,{attributes:{reportParams:_()}})}function ke(e){return(0,U.jsx)(le,{...e,widgetType:ce(V),renderModule:W,renderComponent:M,attributes:{reportParams:_(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{x(),ie(),ge(),de(),_e(),ue(),se(),fe(),De(),Oe(),U=a(),ae(),he(),W=`storybook/popular-post`,G={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},K={render:H,decorators:[T,w]},q={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/top-posts`,`loading`),()=>E(`stats/top-posts`,null))},J={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/top-posts`,`error`),()=>E(`stats/top-posts`,null))},Y={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/top-posts`,`error-retryable`),()=>E(`stats/top-posts`,null))},X={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/top-posts`,`empty`),C(`/wp/v2/posts`,[{id:1}]),()=>{E(`stats/top-posts`,null),C(`/wp/v2/posts`,null)})},Z={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},E(`stats/top-posts`,`empty`),E(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,E(`stats/top-posts`,null),E(`/wp/v2/posts`,null)}}},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(ke,{...e}),args:{...pe,widgetWidth:2,widgetHeight:2},argTypes:{...me}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source},description:{story:`Default — the last 12 months' most-viewed post with its all-time views, likes, and comments.

The shared close-up canvas is the width of a width-1 dashboard cell, which is
below the card's 520px wide breakpoint: the featured image is dropped and the
metric row wraps. \`WidgetDashboardWithWidget\` below shows the default width-2
placement, where the image sits in a trailing column.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'loading');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`First load: the ranking request is in flight, so the widget shows its loading
state. The mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...J.parameters?.docs?.source},description:{story:"A permission-gated 403: `describeError` maps it to neutral copy with no Retry\naction, because the failure is deterministic.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPopularPost,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/top-posts', 'error-retryable');
    return () => forceStatsMockState('stats/top-posts', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:"The proxy's `no_connection` 403: a broken Jetpack connection can heal, so\n`describeError` keeps this one retryable.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
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
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,X as Empty,Z as EmptyNoPosts,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};