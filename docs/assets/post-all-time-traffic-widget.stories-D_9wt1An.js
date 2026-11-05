import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{B as o,I as s,Vt as c,at as l,ct as u,dt as d,ot as ee,pt as f,ut as te}from"./charts-provider-Dywd-o-P.js";import{d as p,f as m,o as h,t as g}from"./src-DMeLrrCy.js";import{An as ne,Ut as _,bn as re,t as v,vn as ie}from"./src-BG_TKhyf.js";import{t as ae}from"./widget-state-Dbd-m3rt.js";import{t as y}from"./src-B5UWDf40.js";import{a as oe}from"./metric-sparkline-skeleton-BpRhw8c1.js";import{n as se,r as ce,s as b}from"./register-report-mocks-CisljdiM.js";import{t as le}from"./monthly-heatmap-D6qx97bz.js";import{n as ue,r as de}from"./with-story-router-C-QssHt2.js";import{a as fe,c as pe,i as me,l as he,n as ge,o as _e,r as x,s as ve}from"./with-widget-canvas-BmtrsUpz.js";import{n as ye,t as be}from"./with-story-period-host-BrxISUue.js";function xe(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>f({year:Number(e),month:Number(t)-1})))}function Se(e,t,n,r){let i=e?.years??{},a=xe(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?f(r):1/0),c=Math.max(f(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=f({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var Ce=e((()=>{y()}));function we(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=_({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,S.useMemo)(()=>{let e=n?.post;return h(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:d}=(0,S.useMemo)(()=>{let e=p(),r=c?p(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=Se(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:u(a,c,m())}},[n,t,c]);return{rows:l,lifeStartsAt:d,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var S,Te=e((()=>{v(),g(),y(),S=t(n(),1),Ce()}));function Ee({metric:e}){let{reportParams:t}=o(),n=ie(t.post_id),{rows:i,lifeStartsAt:a,isLoading:s,isFetching:u,isError:d,error:f,refetch:p}=we(n,e),{openPeriod:h}=ne(),g=m(),_=(0,w.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),re=(0,w.useMemo)(()=>{if(h)return({year:e,month:t})=>{let n={lifeStartsAt:a,timeZone:g},r=t===void 0?ee(e,n):l({year:e,month:t},n);r&&h(r)}},[a,g,h]),v=d&&i.length===0;return(0,T.jsx)(ae,{isLoading:s,isFetching:u,isError:v,isEmpty:n<=0||i.length===0,error:v?c(f,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,T.jsx)(oe,{}),children:(0,T.jsx)(le,{chartTitle:r(`All-time traffic`,`jetpack-premium-analytics-pkg`),rows:_,...te(e),onSelect:re})})}function C({attributes:e={}}){return(0,T.jsx)(s,{attributes:e,children:(0,T.jsx)(Ee,{metric:d(e.metric)})})}var w,T,De=e((()=>{v(),g(),y(),i(),w=t(n(),1),Te(),T=a()})),E,Oe=e((()=>{E={example:{attributes:{metric:`total`}}}})),D,O,k,A,j,M,N,P,F,ke=e((()=>{D=`jpa/post-all-time-traffic`,O=`jpa/calendar`,k=`All-time traffic`,A=`Every month of views for the post or page being viewed, across its whole life.`,j={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},M=`stats`,N=`framed`,P=[{id:`metric`,type:`jpa/select`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],F={name:D,icon:O,title:k,description:A,help:j,category:M,presentation:N,attributes:P}}));function I({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...re(n),...e?{post_id:z}:{}}}}function L(e){return(0,R.jsx)(C,{attributes:I(e)})}function Ae({hasPostScope:e,metric:t,...n}){return(0,R.jsx)(ve,{...n,widgetType:me(F,E),renderModule:B,renderComponent:C,attributes:I({hasPostScope:e,metric:t},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),se(),pe(),fe(),be(),ue(),ge(),De(),Oe(),ke(),R=a(),ce(),z=779,B=`storybook/post-all-time-traffic`,V=`stats/post/${z}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:C,tags:[`autodocs`],decorators:[ye,de],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:L,args:{hasPostScope:!0,metric:`total`},decorators:[x]},K={render:L,args:{hasPostScope:!0,metric:`average`},decorators:[x]},q={render:L,args:{hasPostScope:!1,metric:`total`},decorators:[x]},J={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(V,`loading`),()=>b(V,null))},Y={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(V,`error`),()=>b(V,null))},X={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(V,`error-retryable`),()=>b(V,null))},Z={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(V,`empty`),()=>b(V,null))},Q={render:e=>(0,R.jsx)(Ae,{...e}),args:{..._e,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...he,hasPostScope:H,metric:U}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}}}))();export{K as DailyAverage,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,q as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};