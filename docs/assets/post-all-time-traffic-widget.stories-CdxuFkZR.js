import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{P as o}from"./library-DTloIBum.js";import{t as s}from"./src-fQR6rGKL.js";import{m as c,p as l,t as u,u as d}from"./src-rrY7vAoW.js";import{Bn as f,En as ee,Nt as p,On as m,t as h}from"./src-eFflVWkb.js";import{B as te,F as ne,H as g,I as re,R as _,V as v,W as y,_ as ie,dt as ae,x as oe}from"./charts-provider-CG5jlyMR.js";import{a as se}from"./metric-sparkline-skeleton-COVMNACA.js";import{n as ce,r as le,s as b}from"./register-report-mocks-CaddGZDb.js";import{t as ue}from"./widget-state-Dy1Xd117.js";import{n as de,r as fe}from"./with-story-router-Beljd9ki.js";import{t as pe}from"./monthly-heatmap-BUe2Qdus.js";import{t as x}from"./src-B1RxCXze.js";import{a as me,g as he,h as ge,i as _e,m as ve,n as ye,p as be,r as S}from"./with-widget-canvas-fJNR6VE0.js";import{n as xe,t as Se}from"./with-story-period-host-DI8gjvGD.js";function Ce(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>y({year:Number(e),month:Number(t)-1})))}function we(e,t,n,r){let i=e?.years??{},a=Ce(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?y(r):1/0),c=Math.max(y(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=y({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var Te=t((()=>{x()}));function Ee(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=p({postId:e,fields:[`years`,`averages`,`post`]}),u=(0,C.useMemo)(()=>{let e=n?.post;return d(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:f,lifeStartsAt:ee}=(0,C.useMemo)(()=>{let e=l(),r=u?l(u):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=we(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:_(a,u,c())}},[n,t,u]);return{rows:f,lifeStartsAt:ee,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var C,De=t((()=>{h(),u(),x(),C=e(n(),1),Te()}));function Oe({metric:e}){let{reportParams:t}=oe(),n=ee(t.post_id),{rows:i,lifeStartsAt:a,isLoading:s,isFetching:l,isError:u,error:d,refetch:p}=Ee(n,e),{openPeriod:m}=f(),h=c(),g=(0,T.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),_=(0,T.useMemo)(()=>{if(m)return({year:e,month:t})=>{let n={lifeStartsAt:a,timeZone:h},r=t===void 0?re(e,n):ne({year:e,month:t},n);r&&m(r)}},[a,h,m]),v=u&&i.length===0;return(0,E.jsx)(ue,{isLoading:s,isFetching:l,isError:v,isEmpty:n<=0||i.length===0,error:v?ae(d,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}):null,empty:{icon:o,description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(se,{}),children:(0,E.jsx)(pe,{rows:g,...te(e),onSelect:_})})}function w({attributes:e={}}){return(0,E.jsx)(ie,{attributes:e,children:(0,E.jsx)(Oe,{metric:g(e.metric)})})}var T,E,ke=t((()=>{h(),u(),s(),x(),i(),T=e(n(),1),De(),E=a()})),D,Ae=t((()=>{x(),D={attributes:[v()],example:{attributes:{metric:`total`}}}})),O,k,A,j,M,N,P,F,je=t((()=>{O=`jpa/post-all-time-traffic`,k=`jpa/calendar`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F={name:O,icon:k,title:A,description:j,help:M,category:N,presentation:P}}));function I({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...m(n),...e?{post_id:z}:{}}}}function L(e){return(0,R.jsx)(w,{attributes:I(e)})}function Me({hasPostScope:e,metric:t,...n}){return(0,R.jsx)(ve,{...n,widgetType:_e(F,D),renderModule:B,renderComponent:w,attributes:I({hasPostScope:e,metric:t},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),ce(),ge(),me(),Se(),de(),ye(),ke(),Ae(),je(),R=a(),le(),z=779,B=`storybook/post-all-time-traffic`,V=`stats/post/${z}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:w,tags:[`autodocs`],decorators:[xe,fe],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:L,args:{hasPostScope:!0,metric:`total`},decorators:[S]},K={render:L,args:{hasPostScope:!0,metric:`average`},decorators:[S]},q={render:L,args:{hasPostScope:!1,metric:`total`},decorators:[S]},J={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(V,`loading`),()=>b(V,null))},Y={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(V,`error`),()=>b(V,null))},X={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(V,`error-retryable`),()=>b(V,null))},Z={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(V,`empty`),()=>b(V,null))},Q={render:e=>(0,R.jsx)(Me,{...e}),args:{...be,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...he,hasPostScope:H,metric:U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default — the scoped post's monthly views across its life.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'average'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`DailyAverage — the same table under the Daily average metric: each cell is
the month's views per day, and the scale and tooltips say so.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: false,
    metric: 'total'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'loading');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...J.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the widget shows its
heatmap skeleton. The mock is forced to never resolve for this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'error');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Error — the fetch failed with a permission 403: neutral copy, no retry.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'error-retryable');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...X.parameters?.docs?.source},description:{story:"ErrorRetryable — the proxy's `no_connection` 403, which can heal after\nreconnecting, so the widget offers a Retry action.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(POST_STATS_REQUEST_PATH, 'empty');
    return () => setReportMockState(POST_STATS_REQUEST_PATH, null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a scoped post the endpoint has no yearly stats for.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostAllTimeTrafficDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 3,
    widgetHeight: 2,
    hasPostScope: true,
    metric: 'total'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: hasPostScopeArgType,
    metric: metricArgType
  }
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as DailyAverage,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,q as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};