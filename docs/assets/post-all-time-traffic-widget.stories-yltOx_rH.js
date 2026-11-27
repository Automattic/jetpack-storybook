import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{h as o,m as s,o as c,t as l}from"./src-CFLkDNMV.js";import{Kn as u,Mn as d,Pn as f,en as p,t as m}from"./src-CAeVry9S.js";import{Jt as h,R as g,W as ee,bt as _,dt as te,gt as v,ht as ne,m as re,pt as y,ut as ie,xt as ae,yt as b}from"./charts-provider-BXqhfUep.js";import{t as oe}from"./widget-state-DErObxxB.js";import{W as se,i as x,n as ce,r as le}from"./with-story-router-CNLqiCIG.js";import{r as ue}from"./month-calendar-heatmap-skeleton-BfDQDEqu.js";import{n as de,r as fe,s as S}from"./register-report-mocks-DkiLvmPg.js";import{t as pe}from"./monthly-heatmap-DREArcY8.js";import{a as me,c as he,i as C,l as ge,o as _e,r as ve,s as ye,u as be}from"./with-widget-canvas-GOKy81gT.js";import{n as xe,t as Se}from"./with-story-period-host-CH2g_nLa.js";function Ce(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>_({year:Number(e),month:Number(t)-1})))}function we(e,t,n,r){let i=e?.years??{},a=Ce(i);if(a.length===0||t===`average`&&!e?.averages)return{rows:[],partialMonths:[]};let o=t===`average`?e.averages:i,s=Math.min(...a,r?_(r):1/0),c=Math.max(_(ae(n)),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=r&&_(r)===s?r:void 0,f=[],p=[];for(let e=u;e>=l;e--){let r=o[String(e)],i=Array.from({length:12},(i,a)=>{let o={year:e,month:a},l=_(o);return l<s?`before`:l>c?`after`:(b(o,t,n,d)&&p.push(o),r?.months[String(a+1)]??0)}),a=(t===`average`?r?.overall:r?.total)??null;f.push({year:e,months:i,total:a})}return{rows:f,partialMonths:p}}var Te=e((()=>{x()}));function Ee(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,isPlaceholderData:l,error:u,refetch:d}=p({postId:e,fields:[`years`,`averages`,`post`]}),f=(0,w.useMemo)(()=>{let e=n?.post;return c(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:m,partialMonths:h,lifeStartsAt:g}=(0,w.useMemo)(()=>{let e=s(),r=f?s(f):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=we(n,t,e,i);return{rows:a.rows,partialMonths:a.partialMonths,lifeStartsAt:y(a.rows,f,o())}},[n,t,f]);return{rows:m,partialMonths:h,lifeStartsAt:g,isLoading:r,isFetching:i,isError:a,isPlaceholderData:l,error:u,refetch:d}}var w,De=e((()=>{m(),l(),x(),w=t(n(),1),Te()}));function Oe({metric:e}){let{reportParams:t}=ee(),n=d(t.post_id),{rows:i,partialMonths:a,lifeStartsAt:s,isLoading:c,isFetching:l,isError:f,isPlaceholderData:p,error:m,refetch:g}=Ee(n,e),{openPeriod:_}=u(),v=o(),y=(0,E.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]);re({csv:{...(0,E.useMemo)(()=>se(y.some(e=>e.months.some(e=>(e??0)>0))?y:[]),[y]),filenamePrefix:e===`average`?`post-${n}-daily-average-all-time-traffic`:`post-${n}-all-time-traffic`,hasDateRange:!1,status:{isLoading:c,isError:f,isPlaceholderData:p}}});let ae=(0,E.useMemo)(()=>{if(_)return({year:e,month:t})=>{let n={lifeStartsAt:s,timeZone:v},r=t===void 0?te(e,n):ie({year:e,month:t},n);r&&_(r.range,{step:r.step})}},[s,v,_]),b=f&&i.length===0;return(0,D.jsx)(oe,{isLoading:c,isFetching:l,isError:b,isEmpty:n<=0||i.length===0,error:b?h(m,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}):null,empty:{description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(ue,{}),children:(0,D.jsx)(pe,{rows:y,partialMonths:a,...ne(e),scale:`log`,onSelect:ae})})}function T({attributes:e={}}){return(0,D.jsx)(g,{attributes:e,children:(0,D.jsx)(Oe,{metric:v(e.metric)})})}var E,D,ke=e((()=>{m(),l(),x(),i(),E=t(n(),1),De(),D=a()})),O,Ae=e((()=>{O={example:{attributes:{metric:`total`}}}})),k,A,j,M,N,P,F,I,L,je=e((()=>{k=`jpa/post-all-time-traffic`,A=`jpa/calendar`,j=`All-time traffic`,M=`Every month of views for the post or page being viewed, across its whole life.`,N={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},P=`stats`,F=`framed`,I=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],L={name:k,icon:A,title:j,description:M,help:N,category:P,presentation:F,attributes:I}}));function R({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...f(n),...e?{post_id:V}:{}}}}function z(e){return(0,B.jsx)(T,{attributes:R(e)})}function Me({hasPostScope:e,metric:t,...n}){return(0,B.jsx)(he,{...n,widgetType:me(L,O),renderModule:Ne,renderComponent:T,attributes:R({hasPostScope:e,metric:t},!0)})}var B,V,Ne,H,U,W,Pe,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),de(),ge(),_e(),Se(),ce(),ve(),ke(),Ae(),je(),B=a(),fe(),V=779,Ne=`storybook/post-all-time-traffic`,H=`stats/post/${V}`,U={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Pe={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:T,tags:[`autodocs`],decorators:[xe,le],argTypes:{hasPostScope:U,metric:W},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:z,args:{hasPostScope:!0,metric:`total`},decorators:[C]},K={render:z,args:{hasPostScope:!0,metric:`average`},decorators:[C]},q={render:z,args:{hasPostScope:!1,metric:`total`},decorators:[C]},J={render:z,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`loading`),()=>S(H,null))},Y={render:z,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`error`),()=>S(H,null))},X={render:z,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`error-retryable`),()=>S(H,null))},Z={render:z,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(H,`empty`),()=>S(H,null))},Q={tags:[`widget-dashboard`],render:e=>(0,B.jsx)(Me,{...e}),args:{...ye,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...be,hasPostScope:U,metric:W}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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