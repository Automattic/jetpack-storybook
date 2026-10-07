import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{bl as o,t as s}from"./build-module-DNhkEVJn.js";import{M as c,t as l}from"./src-DzwlO62w.js";import{m as u,p as d,t as f,u as p}from"./src-Cy3h3SBR.js";import{At as m,Nn as h,jn as ee,qn as te,t as g}from"./src-DVobsUWB.js";import{B as _,H as v,I as ne,N as re,P as y,R as ie,_ as ae,lt as oe,x as se,z as ce}from"./charts-provider-Ba7-MfTB.js";import{a as le}from"./metric-sparkline-skeleton-BrqC0Msi.js";import{n as ue,r as de}from"./with-story-router-Beljd9ki.js";import{n as fe,r as pe,s as b}from"./register-report-mocks-DEvSHXrv.js";import{t as me}from"./widget-state-Df2lxMgN.js";import{t as he}from"./monthly-heatmap-hXvTwG3V.js";import{t as x}from"./src-pqY9ulgy.js";import{a as ge,g as _e,h as ve,i as ye,m as be,n as xe,p as Se,r as S}from"./with-widget-canvas-CtZ9m63t.js";import{n as Ce,t as we}from"./with-story-period-host-DDfG7YQJ.js";function Te(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>v({year:Number(e),month:Number(t)-1})))}function Ee(e,t,n,r){let i=e?.years??{},a=Te(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?v(r):1/0),c=Math.max(v(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=v({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var De=t((()=>{x()}));function Oe(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=m({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,C.useMemo)(()=>{let e=n?.post;return p(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:f}=(0,C.useMemo)(()=>{let e=d(),r=c?d(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=Ee(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:ne(a,c,u())}},[n,t,c]);return{rows:l,lifeStartsAt:f,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var C,ke=t((()=>{g(),f(),x(),C=e(n(),1),De()}));function w({metric:e}){let{reportParams:t}=se(),n=ee(t.post_id),{rows:i,lifeStartsAt:a,isLoading:o,isFetching:s,isError:l,error:d,refetch:f}=Oe(n,e),{openPeriod:p}=te(),m=u(),h=(0,E.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),g=(0,E.useMemo)(()=>{if(p)return({year:e,month:t})=>{let n={lifeStartsAt:a,timeZone:m},r=t===void 0?y(e,n):re({year:e,month:t},n);r&&p(r)}},[a,m,p]),_=l&&i.length===0;return(0,D.jsx)(me,{isLoading:o,isFetching:s,isError:_,isEmpty:n<=0||i.length===0,error:_?oe(d,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}):null,empty:{icon:c,description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(le,{}),children:(0,D.jsx)(he,{rows:h,...ie(e),onSelect:g})})}function T({attributes:e={}}){return(0,D.jsx)(ae,{attributes:e,children:(0,D.jsx)(w,{metric:_(e.metric)})})}var E,D,Ae=t((()=>{g(),f(),l(),x(),i(),E=e(n(),1),ke(),D=a()})),O,je=t((()=>{x(),s(),O={icon:o,attributes:[ce()],example:{attributes:{metric:`total`}}}})),k,A,j,M,N,P,F,Me=t((()=>{k=`jpa/post-all-time-traffic`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function I({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...h(n),...e?{post_id:z}:{}}}}function L(e){return(0,R.jsx)(T,{attributes:I(e)})}function Ne({hasPostScope:e,metric:t,...n}){return(0,R.jsx)(be,{...n,widgetType:ye(F,O),renderModule:B,renderComponent:T,attributes:I({hasPostScope:e,metric:t},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),fe(),ve(),ge(),we(),ue(),xe(),Ae(),je(),Me(),R=a(),pe(),z=779,B=`storybook/post-all-time-traffic`,V=`stats/post/${z}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:T,tags:[`autodocs`],decorators:[Ce,de],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:L,args:{hasPostScope:!0,metric:`total`},decorators:[S]},K={render:L,args:{hasPostScope:!0,metric:`average`},decorators:[S]},q={render:L,args:{hasPostScope:!1,metric:`total`},decorators:[S]},J={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(V,`loading`),()=>b(V,null))},Y={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(V,`error`),()=>b(V,null))},X={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(V,`error-retryable`),()=>b(V,null))},Z={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(V,`empty`),()=>b(V,null))},Q={render:e=>(0,R.jsx)(Ne,{...e}),args:{...Se,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{..._e,hasPostScope:H,metric:U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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