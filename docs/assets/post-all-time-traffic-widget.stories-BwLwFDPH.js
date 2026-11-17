import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{d as o,f as s,o as c,t as l}from"./src-BIdiSPkW.js";import{Ht as u,_n as d,jn as f,t as p,yn as m}from"./src-CTnVA6RL.js";import{H as h,I as g,Ut as ee,_t as _,dt as te,f as ne,ft as v,gt as y,ht as b,lt as x,ot as re,st as ie}from"./charts-provider-BAFiN0iK.js";import{t as ae}from"./widget-state-CKBw0Wsm.js";import{W as oe,i as S,n as se,r as ce}from"./with-story-router-HS7sp9gh.js";import{r as le}from"./month-calendar-heatmap-skeleton-AsX8xYg0.js";import{n as ue,r as de,s as C}from"./register-report-mocks-BmyM1Sys.js";import{t as fe}from"./monthly-heatmap-CAjYamrw.js";import{a as pe,c as me,i as w,l as he,o as ge,r as _e,s as ve,u as ye}from"./with-widget-canvas-DUlik4bI.js";import{n as be,t as xe}from"./with-story-period-host-J0fGaUq9.js";function Se(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>y({year:Number(e),month:Number(t)-1})))}function Ce(e,t,n,r){let i=e?.years??{},a=Se(i);if(a.length===0||t===`average`&&!e?.averages)return{rows:[],partialMonths:[]};let o=t===`average`?e.averages:i,s=Math.min(...a,r?y(r):1/0),c=Math.max(y(_(n)),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=r&&y(r)===s?r:void 0,f=[],p=[];for(let e=u;e>=l;e--){let r=o[String(e)],i=Array.from({length:12},(i,a)=>{let o={year:e,month:a},l=y(o);return l<s?`before`:l>c?`after`:(b(o,t,n,d)&&p.push(o),r?.months[String(a+1)]??0)}),a=(t===`average`?r?.overall:r?.total)??null;f.push({year:e,months:i,total:a})}return{rows:f,partialMonths:p}}var we=e((()=>{S()}));function Te(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,isPlaceholderData:l,error:d,refetch:f}=u({postId:e,fields:[`years`,`averages`,`post`]}),p=(0,T.useMemo)(()=>{let e=n?.post;return c(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:m,partialMonths:h,lifeStartsAt:g}=(0,T.useMemo)(()=>{let e=o(),r=p?o(p):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Ce(n,t,e,i);return{rows:a.rows,partialMonths:a.partialMonths,lifeStartsAt:x(a.rows,p,s())}},[n,t,p]);return{rows:m,partialMonths:h,lifeStartsAt:g,isLoading:r,isFetching:i,isError:a,isPlaceholderData:l,error:d,refetch:f}}var T,Ee=e((()=>{p(),l(),S(),T=t(n(),1),we()}));function De({metric:e}){let{reportParams:t}=h(),n=d(t.post_id),{rows:i,partialMonths:a,lifeStartsAt:o,isLoading:c,isFetching:l,isError:u,isPlaceholderData:p,error:m,refetch:g}=Te(n,e),{openPeriod:_}=f(),v=s(),y=(0,D.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]);ne({csv:{...(0,D.useMemo)(()=>oe(y.some(e=>e.months.some(e=>(e??0)>0))?y:[]),[y]),filenamePrefix:e===`average`?`post-${n}-daily-average-all-time-traffic`:`post-${n}-all-time-traffic`,hasDateRange:!1,status:{isLoading:c,isFetching:l,isError:u,isPlaceholderData:p}}});let b=(0,D.useMemo)(()=>{if(_)return({year:e,month:t})=>{let n={lifeStartsAt:o,timeZone:v},r=t===void 0?ie(e,n):re({year:e,month:t},n);r&&_(r)}},[o,v,_]),x=u&&i.length===0;return(0,O.jsx)(ae,{isLoading:c,isFetching:l,isError:x,isEmpty:n<=0||i.length===0,error:x?ee(m,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(le,{}),children:(0,O.jsx)(fe,{rows:y,partialMonths:a,...te(e),scale:`log`,onSelect:b})})}function E({attributes:e={}}){return(0,O.jsx)(g,{attributes:e,children:(0,O.jsx)(De,{metric:v(e.metric)})})}var D,O,Oe=e((()=>{p(),l(),S(),i(),D=t(n(),1),Ee(),O=a()})),k,ke=e((()=>{k={example:{attributes:{metric:`total`}}}})),Ae,je,A,j,M,N,P,F,I,Me=e((()=>{Ae=`jpa/post-all-time-traffic`,je=`jpa/calendar`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],I={name:Ae,icon:je,title:A,description:j,help:M,category:N,presentation:P,attributes:F}}));function L({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...m(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(E,{attributes:L(e)})}function Ne({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(me,{...n,widgetType:pe(I,k),renderModule:V,renderComponent:E,attributes:L({hasPostScope:e,metric:t},!0)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Pe;e((()=>{p(),ue(),he(),ge(),xe(),se(),_e(),Oe(),ke(),Me(),z=a(),de(),B=779,V=`storybook/post-all-time-traffic`,H=`stats/post/${B}`,U={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},G={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:E,tags:[`autodocs`],decorators:[be,ce],argTypes:{hasPostScope:U,metric:W},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},K={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[w]},q={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[w]},J={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[w]},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(H,`loading`),()=>C(H,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(H,`error`),()=>C(H,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(H,`error-retryable`),()=>C(H,null))},Q={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(H,`empty`),()=>C(H,null))},$={tags:[`widget-dashboard`],render:e=>(0,z.jsx)(Ne,{...e}),args:{...ve,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...ye,hasPostScope:U,metric:W}},Pe=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}}}))();export{q as DailyAverage,K as Default,Q as Empty,X as Error,Z as ErrorRetryable,Y as Loading,J as NoPostScope,$ as WidgetDashboardWithWidget,Pe as __namedExportsOrder,G as default};