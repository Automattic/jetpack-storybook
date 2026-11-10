import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{r as o,t as s}from"./src-BgnB_EuX.js";import{B as c,I as l,Jt as u,Ut as d,Vt as f,W as p}from"./charts-provider-L6kRC6Ms.js";import{t as m,tt as h}from"./src-DMeLrrCy.js";import{Dt as g,Gt as _,Lt as v,M as y,N as ee,Ut as te,_n as ne,bn as b,hn as re,t as x}from"./src-CJxWIdUQ.js";import{t as S}from"./widget-state-it4WpRiv.js";import{j as ie,t as ae}from"./src-Dx-QyCJc.js";import{n as oe,o as C,r as se}from"./register-report-mocks-DpRCW8_j.js";import{t as ce}from"./post-highlight-card-skeleton-D2Cgrd-8.js";import{n as le,r as w}from"./with-story-router-CvOuMtxV.js";import{a as ue,c as de,i as T,l as fe,o as pe,r as me,s as he,u as ge}from"./with-widget-canvas-9tn7CPz3.js";import{n as _e,t as ve}from"./register-stats-mocks-BLfWbTqK.js";import{n as ye,t as E}from"./force-stats-mock-state-BxqehQ73.js";import{n as be,t as xe}from"./use-no-published-posts-CtUScVc3.js";function Se(e,t){let n=v((0,D.useMemo)(()=>({...e,max:k}),[e]),{maxRows:1,postTypes:O,enabled:t}),r=t?n.comparisonRows?.rows[0]:void 0,i=Number(r?.id??0)||0,a=_(y(i));return{topRow:r,content:a.data??null,isLoading:n.isLoading||i>0&&a.isLoading,isFetching:n.isFetching||a.isFetching,isError:n.isError,error:n.error,refetch:()=>{n.refetch(),i>0&&a.refetch()}}}function Ce(e,t,n){let r=g((0,D.useMemo)(()=>({...t,max:0}),[t]),{enabled:n}),i=(0,D.useMemo)(()=>n?re(r.comparisonRows?.rows,e)?.children??[]:[],[n,r.comparisonRows,e]),a=(0,D.useMemo)(()=>i.map(e=>Number(e.id)||0).filter(Boolean),[i]),o=_(ee(a)),s=(0,D.useMemo)(()=>{let e=new Set((o.data??[]).map(e=>e.id));return i.find(t=>e.has(Number(t.id)))},[i,o.data]),c=Number(s?.id??0)||0,l=a.length>0,u=l&&o.isError;return{topRow:s,content:o.data?.find(e=>e.id===c)??null,isLoading:r.isLoading||l&&o.isLoading,isFetching:r.isFetching||o.isFetching,isError:r.isError||u,error:r.error??(u?o.error:null),refetch:()=>{r.refetch(),l&&o.refetch()}}}var D,O,k,we=e((()=>{x(),D=t(n(),1),O=[`post`],k=20}));function Te(e){let t=!!e&&e.authorId>0,{preset:n,from:r,to:i,interval:a}=t?e.reportParams:b(!1,j),o=(0,A.useMemo)(()=>({preset:n,from:r,to:i,interval:a}),[n,r,i,a]),s=(0,A.useMemo)(()=>({from:r,to:i,interval:a}),[r,i,a]),c=Se(s,!t),l=Ce(e?.authorId??0,s,t),u=t?l:c,{topRow:d,content:f}=u,p=Number(d?.id??0)||0,m=te({postId:p,fields:[`views`,`like_count`,`post`]}),h=m.data,g=h?.post?.ID,_=h&&(g===void 0||g===p)?h:void 0,v=p>0&&!_&&!m.isError,y=u.isLoading||p>0&&(m.isLoading||v),ee=u.isFetching||m.isFetching;return{post:d?{id:p,title:f?.title||String(d.label??``),url:f?.url||d.link||``,date:f?.date||(typeof d.date==`string`?d.date:``),imageUrl:f?.imageUrl??``,imageAlt:f?.imageAlt??``,views:_?.views,likeCount:_?.like_count,commentCount:_?.post?.comment_count}:null,range:o,isLoading:y,isFetching:ee,isError:u.isError,error:u.error,refetch:()=>{u.refetch(),p>0&&m.refetch()}}}var A,j,Ee=e((()=>{x(),m(),A=t(n(),1),we(),j=h}));function De({authorScoped:e}){let{reportParams:t}=c(),n=e?ne(t.author_id):0;return e&&!n?(0,N.jsx)(S,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their most viewed post here.`,`jetpack-premium-analytics-pkg`)},children:null}):(0,N.jsx)(Oe,{authorId:n})}function Oe({authorId:e}){let{reportParams:t}=c(),n=p(),{post:i,range:a,isLoading:s,isFetching:l,isError:d,error:m,refetch:h}=Te(e?{authorId:e,reportParams:t}:void 0),{noPublishedPosts:g,isChecking:_}=be(!e&&!s&&!d&&!i),v=i?[{key:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),value:i.views},{key:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),value:i.likeCount},{key:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),value:i.commentCount}]:[],y={...a,...n,...u(e?`authors`:`posts`,e?void 0:`posts-pages`)};return(0,N.jsx)(S,{isLoading:s||_,isFetching:l,isError:d,isEmpty:!i,error:f(m,{retryDescription:r(`We couldn't load your most popular post. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),empty:e?void 0:{description:r(g?`Your most-read post will show here once you've published one.`:`No post views in the last 12 months.`,`jetpack-premium-analytics-pkg`),action:g?{label:r(`Create post`,`jetpack-premium-analytics-pkg`),href:o(`post-new.php`)}:void 0},renderLoading:(0,N.jsx)(ce,{}),children:i&&(0,N.jsx)(ie,{title:i.title,url:i.url,postId:i.id,detailSearch:y,date:i.date,imageUrl:i.imageUrl,imageAlt:i.imageAlt,metrics:v})})}function M({attributes:e={}}){return(0,N.jsx)(l,{attributes:e,children:(0,N.jsx)(De,{authorScoped:e.authorScoped===!0})})}var N,ke=e((()=>{s(),x(),d(),ae(),i(),Ee(),xe(),N=a()})),P,F,I,L,R,z,B,V,Ae=e((()=>{P=`jpa/popular-post`,F=`jpa/trending-up`,I=`Most popular in the last year`,L=`Your most-viewed post of the last 12 months, with its all-time stats.`,R={content:`Your most-viewed post of the last 12 months, with its all-time views, likes, and comments.`},z=`stats`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(){return(0,U.jsx)(M,{attributes:{reportParams:b()}})}function je(e){return(0,U.jsx)(de,{...e,widgetType:ue(V),renderModule:W,renderComponent:M,attributes:{reportParams:b(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{x(),oe(),ve(),pe(),ye(),fe(),le(),me(),ke(),Ae(),U=a(),se(),_e(),W=`storybook/popular-post`,G={title:`Packages/Premium Analytics/Widgets/PopularPost`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Most popular in the last year\" widget shows the site's most-viewed post of the last 12 months, with its publish date and its all-time views, likes, and comments. The window is the widget's own — the dashboard date range does not change which post wins — and it only picks the winner: every tile comes from the all-time `stats/post` response, so the three cannot measure different periods. There is no `WithComparison` story: the card shows no period-over-period delta, so the dashboard story below carries the comparison report params instead."}}}},K={render:H,decorators:[T,w]},q={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/top-posts`,`loading`),()=>E(`stats/top-posts`,null))},J={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/top-posts`,`error`),()=>E(`stats/top-posts`,null))},Y={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/top-posts`,`error-retryable`),()=>E(`stats/top-posts`,null))},X={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/top-posts`,`empty`),C(`/wp/v2/posts`,[{id:1}]),()=>{E(`stats/top-posts`,null),C(`/wp/v2/posts`,null)})},Z={render:H,tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>{let e=window.JetpackScriptData;return window.JetpackScriptData={...e,site:{...e?.site,admin_url:`https://example.com/blog/wp-admin/`}},E(`stats/top-posts`,`empty`),E(`/wp/v2/posts`,`empty`),()=>{window.JetpackScriptData=e,E(`stats/top-posts`,null),E(`/wp/v2/posts`,null)}}},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(je,{...e}),args:{...he,widgetWidth:2,widgetHeight:2},argTypes:{...ge}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`EmptyNoPosts`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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