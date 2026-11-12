import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{B as o,I as s,Vt as c,at as l,ct as u,dt as d,ot as ee,pt as f,ut as te}from"./charts-provider-BmHzZhpi.js";import{d as p,f as m,o as h,t as g}from"./src-M-MiwiMQ.js";import{Gt as _,Pn as ne,Sn as v,bn as re,t as y}from"./src-BcILQ8ng.js";import{t as ie}from"./widget-state-DnbF8hrz.js";import{t as b}from"./src-CInHWJwC.js";import{a as ae}from"./metric-sparkline-skeleton-D--yuw66.js";import{n as oe,r as se,s as x}from"./register-report-mocks-DEKgkFm4.js";import{t as ce}from"./monthly-heatmap-BXqhWW5O.js";import{n as le,r as ue}from"./with-story-router-BH93zMbL.js";import{a as de,c as fe,i as S,l as pe,o as me,r as he,s as ge,u as _e}from"./with-widget-canvas-C4Pi56Ui.js";import{n as ve,t as ye}from"./with-story-period-host-DKBpfBGf.js";function be(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>f({year:Number(e),month:Number(t)-1})))}function xe(e,t,n,r){let i=e?.years??{},a=be(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?f(r):1/0),c=Math.max(f(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=f({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var Se=e((()=>{b()}));function Ce(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=_({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,C.useMemo)(()=>{let e=n?.post;return h(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:d}=(0,C.useMemo)(()=>{let e=p(),r=c?p(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=xe(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:u(a,c,m())}},[n,t,c]);return{rows:l,lifeStartsAt:d,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var C,we=e((()=>{y(),g(),b(),C=t(n(),1),Se()}));function Te({metric:e}){let{reportParams:t}=o(),n=re(t.post_id),{rows:i,lifeStartsAt:a,isLoading:s,isFetching:u,isError:d,error:f,refetch:p}=Ce(n,e),{openPeriod:h}=ne(),g=m(),_=(0,T.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),v=(0,T.useMemo)(()=>{if(h)return({year:e,month:t})=>{let n={lifeStartsAt:a,timeZone:g},r=t===void 0?ee(e,n):l({year:e,month:t},n);r&&h(r)}},[a,g,h]),y=d&&i.length===0;return(0,E.jsx)(ie,{isLoading:s,isFetching:u,isError:y,isEmpty:n<=0||i.length===0,error:y?c(f,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(ae,{}),children:(0,E.jsx)(ce,{rows:_,...te(e),onSelect:v})})}function w({attributes:e={}}){return(0,E.jsx)(s,{attributes:e,children:(0,E.jsx)(Te,{metric:d(e.metric)})})}var T,E,Ee=e((()=>{y(),g(),b(),i(),T=t(n(),1),we(),E=a()})),D,De=e((()=>{D={example:{attributes:{metric:`total`}}}})),O,k,A,Oe,j,M,N,P,F,ke=e((()=>{O=`jpa/post-all-time-traffic`,k=`jpa/calendar`,A=`All-time traffic`,Oe=`Every month of views for the post or page being viewed, across its whole life.`,j={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},M=`stats`,N=`framed`,P=[{id:`metric`,type:`jpa/select`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],F={name:O,icon:k,title:A,description:Oe,help:j,category:M,presentation:N,attributes:P}}));function I({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...v(n),...e?{post_id:z}:{}}}}function L(e){return(0,R.jsx)(w,{attributes:I(e)})}function Ae({hasPostScope:e,metric:t,...n}){return(0,R.jsx)(fe,{...n,widgetType:de(F,D),renderModule:B,renderComponent:w,attributes:I({hasPostScope:e,metric:t},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{y(),oe(),pe(),me(),ye(),le(),he(),Ee(),De(),ke(),R=a(),se(),z=779,B=`storybook/post-all-time-traffic`,V=`stats/post/${z}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:w,tags:[`autodocs`],decorators:[ve,ue],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:L,args:{hasPostScope:!0,metric:`total`},decorators:[S]},K={render:L,args:{hasPostScope:!0,metric:`average`},decorators:[S]},q={render:L,args:{hasPostScope:!1,metric:`total`},decorators:[S]},J={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(V,`loading`),()=>x(V,null))},Y={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(V,`error`),()=>x(V,null))},X={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(V,`error-retryable`),()=>x(V,null))},Z={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(V,`empty`),()=>x(V,null))},Q={tags:[`widget-dashboard`],render:e=>(0,R.jsx)(Ae,{...e}),args:{...ge,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{..._e,hasPostScope:H,metric:U}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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