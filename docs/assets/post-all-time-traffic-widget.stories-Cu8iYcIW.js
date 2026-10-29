import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{B as o,Ft as s,I as c,ct as l,dt as u,it as d,lt as f,ot as p,rt as ee}from"./charts-provider-BXWttMH6.js";import{_ as m,d as h,g,t as _}from"./src-IVwX_Vnu.js";import{En as te,Ut as ne,gn as re,t as v,vn as y}from"./src-DvzWgCqE.js";import{t as ie}from"./widget-state-B-3KFlZy.js";import{i as b,n as ae,r as oe}from"./with-story-router-TeMi98u_.js";import{a as se}from"./metric-sparkline-skeleton-DGO_ybnP.js";import{n as ce,r as le,s as x}from"./register-report-mocks-CI2bPEM7.js";import{t as ue}from"./monthly-heatmap-DMlL7qxZ.js";import{a as de,g as fe,h as pe,i as me,m as he,n as ge,p as _e,r as S}from"./with-widget-canvas-ke8j5asA.js";import{n as ve,t as ye}from"./with-story-period-host-BDfkHJ4O.js";function be(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>u({year:Number(e),month:Number(t)-1})))}function xe(e,t,n,r){let i=e?.years??{},a=be(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?u(r):1/0),c=Math.max(u(n),...a),l=Math.floor(s/12),d=Math.floor(c/12),f=[];for(let e=d;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=u({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;f.push({year:e,months:r,total:i})}return f}var Se=e((()=>{b()}));function Ce(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=ne({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,C.useMemo)(()=>{let e=n?.post;return h(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:u}=(0,C.useMemo)(()=>{let e=g(),r=c?g(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=xe(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:p(a,c,m())}},[n,t,c]);return{rows:l,lifeStartsAt:u,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var C,we=e((()=>{v(),_(),b(),C=t(n(),1),Se()}));function Te({metric:e}){let{reportParams:t}=o(),n=re(t.post_id),{rows:i,lifeStartsAt:a,isLoading:c,isFetching:u,isError:f,error:p,refetch:h}=Ce(n,e),{openPeriod:g}=te(),_=m(),ne=(0,T.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),v=(0,T.useMemo)(()=>{if(g)return({year:e,month:t})=>{let n={lifeStartsAt:a,timeZone:_},r=t===void 0?d(e,n):ee({year:e,month:t},n);r&&g(r)}},[a,_,g]),y=f&&i.length===0;return(0,E.jsx)(ie,{isLoading:c,isFetching:u,isError:y,isEmpty:n<=0||i.length===0,error:y?s(p,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(se,{}),children:(0,E.jsx)(ue,{chartTitle:r(`All-time traffic`,`jetpack-premium-analytics-pkg`),rows:ne,...l(e),onSelect:v})})}function w({attributes:e={}}){return(0,E.jsx)(c,{attributes:e,children:(0,E.jsx)(Te,{metric:f(e.metric)})})}var T,E,Ee=e((()=>{v(),_(),b(),i(),T=t(n(),1),we(),E=a()})),D,De=e((()=>{D={example:{attributes:{metric:`total`}}}})),O,k,A,j,M,N,P,F,I,Oe=e((()=>{O=`jpa/post-all-time-traffic`,k=`jpa/calendar`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F=[{id:`metric`,type:`jpa/select`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],I={name:O,icon:k,title:A,description:j,help:M,category:N,presentation:P,attributes:F}}));function L({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...y(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(w,{attributes:L(e)})}function ke({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(he,{...n,widgetType:me(I,D),renderModule:V,renderComponent:w,attributes:L({hasPostScope:e,metric:t},!0)})}var z,B,V,H,U,W,Ae,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),ce(),pe(),de(),ye(),ae(),ge(),Ee(),De(),Oe(),z=a(),le(),B=779,V=`storybook/post-all-time-traffic`,H=`stats/post/${B}`,U={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ae={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:w,tags:[`autodocs`],decorators:[ve,oe],argTypes:{hasPostScope:U,metric:W},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[S]},K={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[S]},q={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[S]},J={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`loading`),()=>x(H,null))},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`error`),()=>x(H,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`error-retryable`),()=>x(H,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`empty`),()=>x(H,null))},Q={render:e=>(0,z.jsx)(ke,{...e}),args:{..._e,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...fe,hasPostScope:U,metric:W}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}}}))();export{K as DailyAverage,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,q as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ae as default};