import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{In as o,Jn as s,Pn as c,en as l,t as u}from"./src-BVv1R588.js";import{h as d,m as f,o as p,t as m}from"./src-CFLkDNMV.js";import{Jt as h,R as g,W as ee,bt as _,dt as te,gt as v,ht as ne,m as re,pt as y,ut as ie,xt as b,yt as x}from"./charts-provider-DVBrFPaa.js";import{t as ae}from"./widget-state-CqPm5upe.js";import{K as oe,i as S,n as se,r as ce}from"./with-story-router-Buc1zMFG.js";import{r as le}from"./month-calendar-heatmap-skeleton-CYAG3eeL.js";import{n as ue,r as de,s as C}from"./register-report-mocks-Dzl9RUVR.js";import{t as fe}from"./monthly-heatmap-BsBo9RSa.js";import{a as pe,c as me,i as w,l as he,o as ge,r as _e,s as ve,u as ye}from"./with-widget-canvas-BqMy9p20.js";import{n as be,t as xe}from"./with-story-period-host-Dj-ArWj9.js";function Se(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>_({year:Number(e),month:Number(t)-1})))}function Ce(e,t,n,r){let i=e?.years??{},a=Se(i);if(a.length===0||t===`average`&&!e?.averages)return{rows:[],partialMonths:[]};let o=t===`average`?e.averages:i,s=Math.min(...a,r?_(r):1/0),c=Math.max(_(b(n)),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=r&&_(r)===s?r:void 0,f=[],p=[];for(let e=u;e>=l;e--){let r=o[String(e)],i=Array.from({length:12},(i,a)=>{let o={year:e,month:a},l=_(o);return l<s?`before`:l>c?`after`:(x(o,t,n,d)&&p.push(o),r?.months[String(a+1)]??0)}),a=(t===`average`?r?.overall:r?.total)??null;f.push({year:e,months:i,total:a})}return{rows:f,partialMonths:p}}var we=e((()=>{S()}));function Te(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,isPlaceholderData:o,error:s,refetch:c}=l({postId:e,fields:[`years`,`averages`,`post`]}),u=(0,T.useMemo)(()=>{let e=n?.post;return p(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:m,partialMonths:h,lifeStartsAt:g}=(0,T.useMemo)(()=>{let e=f(),r=u?f(u):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Ce(n,t,e,i);return{rows:a.rows,partialMonths:a.partialMonths,lifeStartsAt:y(a.rows,u,d())}},[n,t,u]);return{rows:m,partialMonths:h,lifeStartsAt:g,isLoading:r,isFetching:i,isError:a,isPlaceholderData:o,error:s,refetch:c}}var T,Ee=e((()=>{u(),m(),S(),T=t(n(),1),we()}));function De({metric:e}){let{reportParams:t}=ee(),n=c(t.post_id),{rows:i,partialMonths:a,lifeStartsAt:o,isLoading:l,isFetching:u,isError:f,isPlaceholderData:p,error:m,refetch:g}=Te(n,e),{openPeriod:_}=s(),v=d(),y=(0,D.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]);re({csv:{...(0,D.useMemo)(()=>oe(y.some(e=>e.months.some(e=>(e??0)>0))?y:[]),[y]),filenamePrefix:e===`average`?`post-${n}-daily-average-all-time-traffic`:`post-${n}-all-time-traffic`,hasDateRange:!1,status:{isLoading:l,isError:f,isPlaceholderData:p}}});let b=(0,D.useMemo)(()=>{if(_)return({year:e,month:t})=>{let n={lifeStartsAt:o,timeZone:v},r=t===void 0?te(e,n):ie({year:e,month:t},n);r&&_(r.range,{step:r.step})}},[o,v,_]),x=f&&i.length===0;return(0,O.jsx)(ae,{isLoading:l,isFetching:u,isError:x,isEmpty:n<=0||i.length===0,error:x?h(m,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(le,{}),children:(0,O.jsx)(fe,{rows:y,partialMonths:a,...ne(e),scale:`log`,onSelect:b})})}function E({attributes:e={}}){return(0,O.jsx)(g,{attributes:e,children:(0,O.jsx)(De,{metric:v(e.metric)})})}var D,O,Oe=e((()=>{u(),m(),S(),i(),D=t(n(),1),Ee(),O=a()})),k,ke=e((()=>{k={example:{attributes:{metric:`total`}}}})),A,j,M,N,P,F,I,L,Ae,je=e((()=>{A=`jpa/post-all-time-traffic`,j=`jpa/calendar`,M=`All-time traffic`,N=`Every month of views for the post or page being viewed, across its whole life.`,P={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},F=`stats`,I=`framed`,L=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],Ae={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I,attributes:L}}));function Me({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...o(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(E,{attributes:Me(e)})}function Ne({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(me,{...n,widgetType:pe(Ae,k),renderModule:Pe,renderComponent:E,attributes:Me({hasPostScope:e,metric:t},!0)})}var z,B,Pe,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),ue(),he(),ge(),xe(),se(),_e(),Oe(),ke(),je(),z=a(),de(),B=779,Pe=`storybook/post-all-time-traffic`,V=`stats/post/${B}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:E,tags:[`autodocs`],decorators:[be,ce],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[w]},K={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[w]},q={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[w]},J={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(V,`loading`),()=>C(V,null))},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(V,`error`),()=>C(V,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(V,`error-retryable`),()=>C(V,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(V,`empty`),()=>C(V,null))},Q={tags:[`widget-dashboard`],render:e=>(0,z.jsx)(Ne,{...e}),args:{...ve,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...ye,hasPostScope:H,metric:U}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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