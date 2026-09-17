import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Sl as o,t as s}from"./build-module-2iv4IIRq.js";import{B as c,H as l,L as u,R as d,V as f,W as p,at as m,b as ee,bt as te,g as h,lt as ne}from"./hooks-B4xWNSo3.js";import{M as re,t as g}from"./src-C-E2d-Lb.js";import{G as ie,j as _,m as v,p as y,t as b,u as ae}from"./src-D1E5MwTJ.js";import{$t as oe,_n as se,gn as ce,kn as le,r as x,vt as ue}from"./date-period-dropdown-DFFxSAbH.js";import{r as de}from"./metric-sparkline-skeleton-DRtOuiKF.js";import{t as fe}from"./monthly-heatmap-CVjyWBpC.js";import{i as pe,r as me,s as S}from"./register-report-mocks-Ddv1-acm.js";import{t as he}from"./widget-state-CHDb_lmp.js";import{t as C}from"./src-CWyhsZxW.js";import{a as ge,c as _e,d as ve,i as ye,l as be,n as xe,o as Se,r as w,s as Ce,u as we}from"./with-widget-canvas-B0lPgXMt.js";function Te(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>p({year:Number(e),month:Number(t)-1})))}function Ee(e,t,n,r){let i=e?.years??{},a=Te(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?p(r):1/0),c=Math.max(p(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=p({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var De=t((()=>{C()}));function Oe(e,t,n){let r=e[e.length-1],i=r?.months.findIndex(e=>typeof e==`number`)??-1;return!r||i<0||n&&r.year===n.year&&i===n.month?t:new Date(_([r.year,i,1],v()).getTime())}function ke(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=ue({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,T.useMemo)(()=>{let e=n?.post;return ae(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:u}=(0,T.useMemo)(()=>{let e=y(),r=c?y(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=Ee(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:Oe(a,c,i)}},[n,t,c]);return{rows:l,lifeStartsAt:u,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var T,Ae=t((()=>{x(),b(),T=e(n(),1),De()}));function je({metric:e}){let{reportParams:t}=ee(),n=le(t.post_id),{rows:i,lifeStartsAt:a,isLoading:o,isFetching:s,isError:l,error:f,refetch:p}=ke(n,e),{onChange:m,onApply:h,timeZone:g}=ne(),_=se(),v=(0,D.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),y=(0,D.useCallback)(({year:e,month:t})=>{let r={lifeStartsAt:a,timeZone:g},i=t===void 0?d(e,r):u({year:e,month:t},r);i&&(_(ce(n),i),m(i,ie,{exactRange:!0}),h())},[a,g,m,h,n,_]),b=l&&i.length===0;return(0,O.jsx)(he,{isLoading:o,isFetching:s,isError:b,isEmpty:n<=0||i.length===0,error:b?te(f,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}):null,empty:{icon:re,description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(de,{}),children:(0,O.jsx)(fe,{rows:v,...c(e),onSelect:y})})}function E({attributes:e={}}){return(0,O.jsx)(h,{attributes:e,children:(0,O.jsx)(je,{metric:l(e.metric)})})}var D,O,Me=t((()=>{x(),b(),g(),m(),C(),i(),D=e(n(),1),Ae(),O=a()})),k,Ne=t((()=>{C(),s(),k={icon:o,attributes:[f()],example:{attributes:{metric:`total`}}}})),A,j,M,N,P,F,I,Pe=t((()=>{A=`jpa/post-all-time-traffic`,j=`All-time traffic`,M=`Every month of views for the post or page being viewed, across its whole life.`,N={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},P=`stats`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...oe(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(E,{attributes:L(e)})}function Fe({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(Ce,{...n,widgetType:ye(I,k),renderModule:Ie,renderComponent:E,attributes:L({hasPostScope:e,metric:t},!0)})}var z,B,Ie,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{x(),me(),_e(),ge(),we(),xe(),Me(),Ne(),Pe(),z=a(),pe(),B=779,Ie=`storybook/post-all-time-traffic`,V=`stats/post/${B}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:E,tags:[`autodocs`],decorators:[ve],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[w]},K={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[w]},q={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[w]},J={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(V,`loading`),()=>S(V,null))},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(V,`error`),()=>S(V,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(V,`error-retryable`),()=>S(V,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(V,`empty`),()=>S(V,null))},Q={render:e=>(0,z.jsx)(Fe,{...e}),args:{...Se,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...be,hasPostScope:H,metric:U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as DailyAverage,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,q as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};