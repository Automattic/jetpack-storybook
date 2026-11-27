import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{h as o,m as s,o as c,t as l}from"./src-CFLkDNMV.js";import{In as u,Jn as d,Pn as f,en as p,t as m}from"./src-l1BVQSEn.js";import{Jt as ee,R as h,W as te,bt as g,dt as ne,gt as _,ht as re,m as ie,pt as v,ut as ae,xt as oe,yt as y}from"./charts-provider-CztY3Jeb.js";import{t as se}from"./widget-state-CqPm5upe.js";import{K as ce,i as b,n as le,r as ue}from"./with-story-router-B4g1hwKi.js";import{r as de}from"./month-calendar-heatmap-skeleton-CYAG3eeL.js";import{n as fe,r as pe,s as x}from"./register-report-mocks-CDOnqFid.js";import{t as me}from"./monthly-heatmap-DJJU5uFS.js";import{a as he,c as ge,i as S,l as _e,o as ve,r as ye,s as be,u as xe}from"./with-widget-canvas-6h2CritM.js";import{n as Se,t as Ce}from"./with-story-period-host-kUnrKA0I.js";function we(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>g({year:Number(e),month:Number(t)-1})))}function Te(e,t,n,r){let i=e?.years??{},a=we(i);if(a.length===0||t===`average`&&!e?.averages)return{rows:[],partialMonths:[]};let o=t===`average`?e.averages:i,s=Math.min(...a,r?g(r):1/0),c=Math.max(g(oe(n)),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=r&&g(r)===s?r:void 0,f=[],p=[];for(let e=u;e>=l;e--){let r=o[String(e)],i=Array.from({length:12},(i,a)=>{let o={year:e,month:a},l=g(o);return l<s?`before`:l>c?`after`:(y(o,t,n,d)&&p.push(o),r?.months[String(a+1)]??0)}),a=(t===`average`?r?.overall:r?.total)??null;f.push({year:e,months:i,total:a})}return{rows:f,partialMonths:p}}var Ee=e((()=>{b()}));function De(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,isPlaceholderData:l,error:u,refetch:d}=p({postId:e,fields:[`years`,`averages`,`post`]}),f=(0,C.useMemo)(()=>{let e=n?.post;return c(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:m,partialMonths:ee,lifeStartsAt:h}=(0,C.useMemo)(()=>{let e=s(),r=f?s(f):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Te(n,t,e,i);return{rows:a.rows,partialMonths:a.partialMonths,lifeStartsAt:v(a.rows,f,o())}},[n,t,f]);return{rows:m,partialMonths:ee,lifeStartsAt:h,isLoading:r,isFetching:i,isError:a,isPlaceholderData:l,error:u,refetch:d}}var C,Oe=e((()=>{m(),l(),b(),C=t(n(),1),Ee()}));function ke({metric:e}){let{reportParams:t}=te(),n=f(t.post_id),{rows:i,partialMonths:a,lifeStartsAt:s,isLoading:c,isFetching:l,isError:u,isPlaceholderData:p,error:m,refetch:h}=De(n,e),{openPeriod:g}=d(),_=o(),v=(0,T.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]);ie({csv:{...(0,T.useMemo)(()=>ce(v.some(e=>e.months.some(e=>(e??0)>0))?v:[]),[v]),filenamePrefix:e===`average`?`post-${n}-daily-average-all-time-traffic`:`post-${n}-all-time-traffic`,hasDateRange:!1,status:{isLoading:c,isError:u,isPlaceholderData:p}}});let oe=(0,T.useMemo)(()=>{if(g)return({year:e,month:t})=>{let n={lifeStartsAt:s,timeZone:_},r=t===void 0?ne(e,n):ae({year:e,month:t},n);r&&g(r.range,{step:r.step})}},[s,_,g]),y=u&&i.length===0;return(0,E.jsx)(se,{isLoading:c,isFetching:l,isError:y,isEmpty:n<=0||i.length===0,error:y?ee(m,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(de,{}),children:(0,E.jsx)(me,{rows:v,partialMonths:a,...re(e),scale:`log`,onSelect:oe})})}function w({attributes:e={}}){return(0,E.jsx)(h,{attributes:e,children:(0,E.jsx)(ke,{metric:_(e.metric)})})}var T,E,Ae=e((()=>{m(),l(),b(),i(),T=t(n(),1),Oe(),E=a()})),D,je=e((()=>{D={example:{attributes:{metric:`total`}}}})),O,k,A,j,M,N,P,F,I,Me=e((()=>{O=`jpa/post-all-time-traffic`,k=`jpa/calendar`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],I={name:O,icon:k,title:A,description:j,help:M,category:N,presentation:P,attributes:F}}));function L({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...u(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(w,{attributes:L(e)})}function Ne({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(ge,{...n,widgetType:he(I,D),renderModule:V,renderComponent:w,attributes:L({hasPostScope:e,metric:t},!0)})}var z,B,V,H,U,W,Pe,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),fe(),_e(),ve(),Ce(),le(),ye(),Ae(),je(),Me(),z=a(),pe(),B=779,V=`storybook/post-all-time-traffic`,H=`stats/post/${B}`,U={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Pe={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:w,tags:[`autodocs`],decorators:[Se,ue],argTypes:{hasPostScope:U,metric:W},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[S]},K={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[S]},q={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[S]},J={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`loading`),()=>x(H,null))},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`error`),()=>x(H,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`error-retryable`),()=>x(H,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(H,`empty`),()=>x(H,null))},Q={tags:[`widget-dashboard`],render:e=>(0,z.jsx)(Ne,{...e}),args:{...be,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...xe,hasPostScope:U,metric:W}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}}}))();export{K as DailyAverage,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,q as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Pe as default};