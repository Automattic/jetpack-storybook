import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{d as o,f as s,o as c,t as l}from"./src-BIdiSPkW.js";import{Ht as u,_n as d,jn as f,t as p,yn as m}from"./src-52cnEbCc.js";import{H as h,I as g,Ut as ee,_t as _,dt as te,ft as ne,gt as v,ht as y,lt as re,ot as ie,st as ae}from"./charts-provider-8iSbd7Wu.js";import{t as oe}from"./widget-state-CJYDRMPt.js";import{i as b,n as se,r as ce}from"./with-story-router-ytULxVcN.js";import{r as le}from"./month-calendar-heatmap-skeleton-CsrDqU-N.js";import{n as ue,r as de,s as x}from"./register-report-mocks-BlzsUi-e.js";import{t as fe}from"./monthly-heatmap-R9EnblgM.js";import{a as pe,c as me,i as S,l as he,o as ge,r as _e,s as ve,u as ye}from"./with-widget-canvas-mtPFqW2o.js";import{n as be,t as xe}from"./with-story-period-host-DCZ_a8W3.js";function Se(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>v({year:Number(e),month:Number(t)-1})))}function Ce(e,t,n,r){let i=e?.years??{},a=Se(i);if(a.length===0||t===`average`&&!e?.averages)return{rows:[],partialMonths:[]};let o=t===`average`?e.averages:i,s=Math.min(...a,r?v(r):1/0),c=Math.max(v(_(n)),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=r&&v(r)===s?r:void 0,f=[],p=[];for(let e=u;e>=l;e--){let r=o[String(e)],i=Array.from({length:12},(i,a)=>{let o={year:e,month:a},l=v(o);return l<s?`before`:l>c?`after`:(y(o,t,n,d)&&p.push(o),r?.months[String(a+1)]??0)}),a=(t===`average`?r?.overall:r?.total)??null;f.push({year:e,months:i,total:a})}return{rows:f,partialMonths:p}}var we=e((()=>{b()}));function Te(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:l,refetch:d}=u({postId:e,fields:[`years`,`averages`,`post`]}),f=(0,C.useMemo)(()=>{let e=n?.post;return c(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:p,partialMonths:m,lifeStartsAt:h}=(0,C.useMemo)(()=>{let e=o(),r=f?o(f):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Ce(n,t,e,i);return{rows:a.rows,partialMonths:a.partialMonths,lifeStartsAt:re(a.rows,f,s())}},[n,t,f]);return{rows:p,partialMonths:m,lifeStartsAt:h,isLoading:r,isFetching:i,isError:a,error:l,refetch:d}}var C,Ee=e((()=>{p(),l(),b(),C=t(n(),1),we()}));function De({metric:e}){let{reportParams:t}=h(),n=d(t.post_id),{rows:i,partialMonths:a,lifeStartsAt:o,isLoading:c,isFetching:l,isError:u,error:p,refetch:m}=Te(n,e),{openPeriod:g}=f(),_=s(),ne=(0,T.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),v=(0,T.useMemo)(()=>{if(g)return({year:e,month:t})=>{let n={lifeStartsAt:o,timeZone:_},r=t===void 0?ae(e,n):ie({year:e,month:t},n);r&&g(r)}},[o,_,g]),y=u&&i.length===0;return(0,E.jsx)(oe,{isLoading:c,isFetching:l,isError:y,isEmpty:n<=0||i.length===0,error:y?ee(p,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(le,{}),children:(0,E.jsx)(fe,{rows:ne,partialMonths:a,...te(e),scale:`log`,onSelect:v})})}function w({attributes:e={}}){return(0,E.jsx)(g,{attributes:e,children:(0,E.jsx)(De,{metric:ne(e.metric)})})}var T,E,Oe=e((()=>{p(),l(),b(),i(),T=t(n(),1),Ee(),E=a()})),D,ke=e((()=>{D={example:{attributes:{metric:`total`}}}})),O,k,A,j,M,N,P,F,I,Ae=e((()=>{O=`jpa/post-all-time-traffic`,k=`jpa/calendar`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],I={name:O,icon:k,title:A,description:j,help:M,category:N,presentation:P,attributes:F}}));function L({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...m(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(w,{attributes:L(e)})}function je({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(me,{...n,widgetType:pe(I,D),renderModule:Me,renderComponent:w,attributes:L({hasPostScope:e,metric:t},!0)})}var z,B,Me,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ue(),he(),ge(),xe(),se(),_e(),Oe(),ke(),Ae(),z=a(),de(),B=779,Me=`storybook/post-all-time-traffic`,V=`stats/post/${B}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:w,tags:[`autodocs`],decorators:[be,ce],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[S]},K={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[S]},q={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[S]},J={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(V,`loading`),()=>x(V,null))},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(V,`error`),()=>x(V,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(V,`error-retryable`),()=>x(V,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(V,`empty`),()=>x(V,null))},Q={tags:[`widget-dashboard`],render:e=>(0,z.jsx)(je,{...e}),args:{...ve,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...ye,hasPostScope:H,metric:U}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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