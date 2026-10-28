import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{F as o,Pt as s,at as c,ct as l,nt as u,rt as d,st as ee,ut as f,z as te}from"./charts-provider-CYqb6BOr.js";import{_ as p,d as m,g as h,t as g}from"./src-IVwX_Vnu.js";import{Bt as _,Cn as ne,hn as v,pn as re,t as y}from"./src-DfQ3R5pV.js";import{t as ie}from"./widget-state-BBdc069e.js";import{i as b,n as ae,r as oe}from"./with-story-router-Bo0YjvIH.js";import{a as se}from"./metric-sparkline-skeleton-C91qQTjg.js";import{n as ce,r as le,s as x}from"./register-report-mocks-xm2nLXrN.js";import{t as ue}from"./monthly-heatmap-BusxwORi.js";import{a as de,g as fe,h as pe,i as me,m as he,n as ge,p as _e,r as S}from"./with-widget-canvas-CQ23aStp.js";import{n as ve,t as ye}from"./with-story-period-host-D9SqITo1.js";function be(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>f({year:Number(e),month:Number(t)-1})))}function xe(e,t,n,r){let i=e?.years??{},a=be(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?f(r):1/0),c=Math.max(f(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=f({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var Se=e((()=>{b()}));function Ce(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=_({postId:e,fields:[`years`,`averages`,`post`]}),l=(0,C.useMemo)(()=>{let e=n?.post;return m(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:u,lifeStartsAt:d}=(0,C.useMemo)(()=>{let e=h(),r=l?h(l):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=xe(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:c(a,l,p())}},[n,t,l]);return{rows:u,lifeStartsAt:d,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var C,we=e((()=>{y(),g(),b(),C=t(n(),1),Se()}));function Te({metric:e}){let{reportParams:t}=te(),n=re(t.post_id),{rows:i,lifeStartsAt:a,isLoading:o,isFetching:c,isError:l,error:f,refetch:m}=Ce(n,e),{openPeriod:h}=ne(),g=p(),_=(0,T.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),v=(0,T.useMemo)(()=>{if(h)return({year:e,month:t})=>{let n={lifeStartsAt:a,timeZone:g},r=t===void 0?d(e,n):u({year:e,month:t},n);r&&h(r)}},[a,g,h]),y=l&&i.length===0;return(0,E.jsx)(ie,{isLoading:o,isFetching:c,isError:y,isEmpty:n<=0||i.length===0,error:y?s(f,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(se,{}),children:(0,E.jsx)(ue,{chartTitle:r(`All-time traffic`,`jetpack-premium-analytics-pkg`),rows:_,...ee(e),onSelect:v})})}function w({attributes:e={}}){return(0,E.jsx)(o,{attributes:e,children:(0,E.jsx)(Te,{metric:l(e.metric)})})}var T,E,Ee=e((()=>{y(),g(),b(),i(),T=t(n(),1),we(),E=a()})),D,De=e((()=>{D={example:{attributes:{metric:`total`}}}})),O,k,A,j,M,N,P,F,I,Oe=e((()=>{O=`jpa/post-all-time-traffic`,k=`jpa/calendar`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F=[{id:`metric`,type:`jpa/select`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],I={name:O,icon:k,title:A,description:j,help:M,category:N,presentation:P,attributes:F}}));function L({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...v(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(w,{attributes:L(e)})}function ke({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(he,{...n,widgetType:me(I,D),renderModule:V,renderComponent:w,attributes:L({hasPostScope:e,metric:t},!0)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ae;e((()=>{y(),ce(),pe(),de(),ye(),ae(),ge(),Ee(),De(),Oe(),z=a(),le(),B=779,V=`storybook/post-all-time-traffic`,H=`stats/post/${B}`,U={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},G={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:w,tags:[`autodocs`],decorators:[ve,oe],argTypes:{hasPostScope:U,metric:W},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},K={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[S]},q={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[S]},J={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[S]},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`loading`),()=>x(H,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`error`),()=>x(H,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`error-retryable`),()=>x(H,null))},Q={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`empty`),()=>x(H,null))},$={render:e=>(0,z.jsx)(ke,{...e}),args:{..._e,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...fe,hasPostScope:U,metric:W}},Ae=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'total'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default — the scoped post's monthly views across its life.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: true,
    metric: 'average'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`DailyAverage — the same table under the Daily average metric: each cell is
the month's views per day, and the scale and tooltips say so.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPostAllTimeTraffic,
  args: {
    hasPostScope: false,
    metric: 'total'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the widget shows its
heatmap skeleton. The mock is forced to never resolve for this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Error — the fetch failed with a permission 403: neutral copy, no retry.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"ErrorRetryable — the proxy's `no_connection` 403, which can heal after\nreconnecting, so the widget offers a Retry action.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Empty — a scoped post the endpoint has no yearly stats for.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}}}))();export{q as DailyAverage,K as Default,Q as Empty,X as Error,Z as ErrorRetryable,Y as Loading,J as NoPostScope,$ as WidgetDashboardWithWidget,Ae as __namedExportsOrder,G as default};