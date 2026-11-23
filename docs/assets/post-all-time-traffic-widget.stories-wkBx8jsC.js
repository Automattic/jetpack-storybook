import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{d as o,f as s,o as c,t as l}from"./src-CUJg-cBz.js";import{Cn as u,Fn as d,Gt as f,t as p,xn as m}from"./src-DYUzie_4.js";import{H as h,I as g,Ut as ee,_t as _,dt as te,f as ne,ft as v,gt as y,ht as re,lt as b,ot as ie,st as ae}from"./charts-provider-DeX_gl6N.js";import{t as oe}from"./widget-state-DFMNGNCy.js";import{W as se,i as x,n as ce,r as le}from"./with-story-router-Ci_Y71LM.js";import{r as ue}from"./month-calendar-heatmap-skeleton-B3ojrfAQ.js";import{n as de,r as fe,s as S}from"./register-report-mocks-BeYde27u.js";import{t as pe}from"./monthly-heatmap-BypSkf_d.js";import{a as me,c as he,i as C,l as ge,o as _e,r as ve,s as ye,u as be}from"./with-widget-canvas-CewkIfWt.js";import{n as xe,t as Se}from"./with-story-period-host-CAp90QIc.js";function Ce(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>y({year:Number(e),month:Number(t)-1})))}function we(e,t,n,r){let i=e?.years??{},a=Ce(i);if(a.length===0||t===`average`&&!e?.averages)return{rows:[],partialMonths:[]};let o=t===`average`?e.averages:i,s=Math.min(...a,r?y(r):1/0),c=Math.max(y(_(n)),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=r&&y(r)===s?r:void 0,f=[],p=[];for(let e=u;e>=l;e--){let r=o[String(e)],i=Array.from({length:12},(i,a)=>{let o={year:e,month:a},l=y(o);return l<s?`before`:l>c?`after`:(re(o,t,n,d)&&p.push(o),r?.months[String(a+1)]??0)}),a=(t===`average`?r?.overall:r?.total)??null;f.push({year:e,months:i,total:a})}return{rows:f,partialMonths:p}}var Te=e((()=>{x()}));function Ee(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,isPlaceholderData:l,error:u,refetch:d}=f({postId:e,fields:[`years`,`averages`,`post`]}),p=(0,w.useMemo)(()=>{let e=n?.post;return c(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:m,partialMonths:h,lifeStartsAt:g}=(0,w.useMemo)(()=>{let e=o(),r=p?o(p):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=we(n,t,e,i);return{rows:a.rows,partialMonths:a.partialMonths,lifeStartsAt:b(a.rows,p,s())}},[n,t,p]);return{rows:m,partialMonths:h,lifeStartsAt:g,isLoading:r,isFetching:i,isError:a,isPlaceholderData:l,error:u,refetch:d}}var w,De=e((()=>{p(),l(),x(),w=t(n(),1),Te()}));function Oe({metric:e}){let{reportParams:t}=h(),n=m(t.post_id),{rows:i,partialMonths:a,lifeStartsAt:o,isLoading:c,isFetching:l,isError:u,isPlaceholderData:f,error:p,refetch:g}=Ee(n,e),{openPeriod:_}=d(),v=s(),y=(0,E.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]);ne({csv:{...(0,E.useMemo)(()=>se(y.some(e=>e.months.some(e=>(e??0)>0))?y:[]),[y]),filenamePrefix:e===`average`?`post-${n}-daily-average-all-time-traffic`:`post-${n}-all-time-traffic`,hasDateRange:!1,status:{isLoading:c,isFetching:l,isError:u,isPlaceholderData:f}}});let re=(0,E.useMemo)(()=>{if(_)return({year:e,month:t})=>{let n={lifeStartsAt:o,timeZone:v},r=t===void 0?ae(e,n):ie({year:e,month:t},n);r&&_(r.range,{step:r.step})}},[o,v,_]),b=u&&i.length===0;return(0,D.jsx)(oe,{isLoading:c,isFetching:l,isError:b,isEmpty:n<=0||i.length===0,error:b?ee(p,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(ue,{}),children:(0,D.jsx)(pe,{rows:y,partialMonths:a,...te(e),scale:`log`,onSelect:re})})}function T({attributes:e={}}){return(0,D.jsx)(g,{attributes:e,children:(0,D.jsx)(Oe,{metric:v(e.metric)})})}var E,D,ke=e((()=>{p(),l(),x(),i(),E=t(n(),1),De(),D=a()})),Ae,je=e((()=>{Ae={example:{attributes:{metric:`total`}}}})),O,k,A,j,M,N,P,F,I,Me=e((()=>{O=`jpa/post-all-time-traffic`,k=`jpa/calendar`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],I={name:O,icon:k,title:A,description:j,help:M,category:N,presentation:P,attributes:F}}));function L({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...u(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(T,{attributes:L(e)})}function Ne({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(he,{...n,widgetType:me(I,Ae),renderModule:V,renderComponent:T,attributes:L({hasPostScope:e,metric:t},!0)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Pe;e((()=>{p(),de(),ge(),_e(),Se(),ce(),ve(),ke(),je(),Me(),z=a(),fe(),B=779,V=`storybook/post-all-time-traffic`,H=`stats/post/${B}`,U={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},G={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:T,tags:[`autodocs`],decorators:[xe,le],argTypes:{hasPostScope:U,metric:W},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},K={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[C]},q={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[C]},J={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[C]},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`loading`),()=>S(H,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`error`),()=>S(H,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`error-retryable`),()=>S(H,null))},Q={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`empty`),()=>S(H,null))},$={tags:[`widget-dashboard`],render:e=>(0,z.jsx)(Ne,{...e}),args:{...ye,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...be,hasPostScope:U,metric:W}},Pe=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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