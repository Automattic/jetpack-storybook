import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Sl as o,t as s}from"./build-module-2iv4IIRq.js";import{C as c,m as l,v as u,y as d}from"./hooks-BmueE48X.js";import{M as ee,t as f}from"./src-C-E2d-Lb.js";import{G as te,m as p,p as m,t as h,u as g}from"./src-BNPYbbO9.js";import{$t as _,Mn as ne,_n as re,t as v,vn as ie,vt as y}from"./src-m1TSlLiq.js";import{B as ae,_ as oe,f as se,h as ce,p as le,v as ue,x as b,y as de}from"./helpers-UQLafHns.js";import{a as fe}from"./metric-sparkline-skeleton-J9huP5q4.js";import{t as pe}from"./monthly-heatmap-BUfBnvpA.js";import{c as x,i as me,r as he}from"./register-report-mocks-CgxliRIY.js";import{t as ge}from"./widget-state-DU1neUbV.js";import{t as S}from"./src-CjyGnNqZ.js";import{a as _e,d as ve,f as ye,h as be,i as xe,m as Se,n as Ce,p as we,r as C,u as Te}from"./with-widget-canvas-C6LC8p6k.js";function Ee(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>b({year:Number(e),month:Number(t)-1})))}function De(e,t,n,r){let i=e?.years??{},a=Ee(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?b(r):1/0),c=Math.max(b(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=b({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var Oe=t((()=>{S()}));function ke(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=y({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,w.useMemo)(()=>{let e=n?.post;return g(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:u}=(0,w.useMemo)(()=>{let e=m(),r=c?m(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=De(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:ce(a,c,p())}},[n,t,c]);return{rows:l,lifeStartsAt:u,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var w,Ae=t((()=>{v(),h(),S(),w=e(n(),1),Oe()}));function je({metric:e}){let{reportParams:t}=u(),n=ne(t.post_id),{rows:i,lifeStartsAt:a,isLoading:o,isFetching:s,isError:l,error:d,refetch:f}=ke(n,e),{onChange:p,onApply:m,timeZone:h}=c(),g=ie(),_=(0,E.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),v=(0,E.useCallback)(({year:e,month:t})=>{let r={lifeStartsAt:a,timeZone:h},i=t===void 0?le(e,r):se({year:e,month:t},r);i&&(g(re(n),i),p(i,te,{exactRange:!0}),m())},[a,h,p,m,n,g]),y=l&&i.length===0;return(0,D.jsx)(ge,{isLoading:o,isFetching:s,isError:y,isEmpty:n<=0||i.length===0,error:y?ae(d,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}):null,empty:{icon:ee,description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(fe,{}),children:(0,D.jsx)(pe,{rows:_,...oe(e),onSelect:v})})}function T({attributes:e={}}){return(0,D.jsx)(l,{attributes:e,children:(0,D.jsx)(je,{metric:de(e.metric)})})}var E,D,Me=t((()=>{v(),h(),f(),d(),S(),i(),E=e(n(),1),Ae(),D=a()})),O,Ne=t((()=>{S(),s(),O={icon:o,attributes:[ue()],example:{attributes:{metric:`total`}}}})),k,A,j,M,N,P,F,Pe=t((()=>{k=`jpa/post-all-time-traffic`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function I({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{..._(n),...e?{post_id:z}:{}}}}function L(e){return(0,R.jsx)(T,{attributes:I(e)})}function Fe({hasPostScope:e,metric:t,...n}){return(0,R.jsx)(ve,{...n,widgetType:xe(F,O),renderModule:B,renderComponent:T,attributes:I({hasPostScope:e,metric:t},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),he(),ye(),_e(),Se(),Ce(),Me(),Ne(),Pe(),R=a(),me(),z=779,B=`storybook/post-all-time-traffic`,V=`stats/post/${z}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:T,tags:[`autodocs`],decorators:[be],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:L,args:{hasPostScope:!0,metric:`total`},decorators:[C]},K={render:L,args:{hasPostScope:!0,metric:`average`},decorators:[C]},q={render:L,args:{hasPostScope:!1,metric:`total`},decorators:[C]},J={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(V,`loading`),()=>x(V,null))},Y={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(V,`error`),()=>x(V,null))},X={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(V,`error-retryable`),()=>x(V,null))},Z={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(V,`empty`),()=>x(V,null))},Q={render:e=>(0,R.jsx)(Fe,{...e}),args:{...Te,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...we,hasPostScope:H,metric:U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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