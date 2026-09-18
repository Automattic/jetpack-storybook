import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Sl as o,t as s}from"./build-module-2iv4IIRq.js";import{B as c,Ct as l,F as u,H as d,I as ee,R as f,V as p,W as m,ct as h,ft as te,m as g,v as ne}from"./hooks-DdF28_1d.js";import{M as re,t as _}from"./src-C-E2d-Lb.js";import{G as ie,m as v,p as y,t as b,u as ae}from"./src-CJGEmgc4.js";import{Mn as oe,bt as se,r as x,tn as ce,vn as le,yn as ue}from"./date-period-dropdown-CZwIt_5b.js";import{a as de}from"./metric-sparkline-skeleton-XxvETfWd.js";import{t as fe}from"./monthly-heatmap-BprRasXT.js";import{c as S,i as pe,r as me}from"./register-report-mocks-Cw2A-C3P.js";import{t as he}from"./widget-state-B0pqRS5j.js";import{t as C}from"./src-CGLakvit.js";import{a as ge,c as _e,d as ve,i as ye,l as be,n as xe,o as Se,r as w,s as Ce,u as we}from"./with-widget-canvas-BAViGL9e.js";function Te(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>m({year:Number(e),month:Number(t)-1})))}function Ee(e,t,n,r){let i=e?.years??{},a=Te(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?m(r):1/0),c=Math.max(m(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=m({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var De=t((()=>{C()}));function Oe(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=se({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,T.useMemo)(()=>{let e=n?.post;return ae(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:u}=(0,T.useMemo)(()=>{let e=y(),r=c?y(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=Ee(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:f(a,c,v())}},[n,t,c]);return{rows:l,lifeStartsAt:u,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var T,ke=t((()=>{x(),b(),C(),T=e(n(),1),De()}));function Ae({metric:e}){let{reportParams:t}=ne(),n=oe(t.post_id),{rows:i,lifeStartsAt:a,isLoading:o,isFetching:s,isError:d,error:f,refetch:p}=Oe(n,e),{onChange:m,onApply:h,timeZone:g}=te(),_=ue(),v=(0,D.useMemo)(()=>i.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[i]),y=(0,D.useCallback)(({year:e,month:t})=>{let r={lifeStartsAt:a,timeZone:g},i=t===void 0?ee(e,r):u({year:e,month:t},r);i&&(_(le(n),i),m(i,ie,{exactRange:!0}),h())},[a,g,m,h,n,_]),b=d&&i.length===0;return(0,O.jsx)(he,{isLoading:o,isFetching:s,isError:b,isEmpty:n<=0||i.length===0,error:b?l(f,{retryDescription:r(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}):null,empty:{icon:re,description:r(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(de,{}),children:(0,O.jsx)(fe,{rows:v,...c(e),onSelect:y})})}function E({attributes:e={}}){return(0,O.jsx)(g,{attributes:e,children:(0,O.jsx)(Ae,{metric:d(e.metric)})})}var D,O,je=t((()=>{x(),b(),_(),h(),C(),i(),D=e(n(),1),ke(),O=a()})),k,Me=t((()=>{C(),s(),k={icon:o,attributes:[p()],example:{attributes:{metric:`total`}}}})),A,j,M,N,P,F,I,Ne=t((()=>{A=`jpa/post-all-time-traffic`,j=`All-time traffic`,M=`Every month of views for the post or page being viewed, across its whole life.`,N={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},P=`stats`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...ce(n),...e?{post_id:B}:{}}}}function R(e){return(0,z.jsx)(E,{attributes:L(e)})}function Pe({hasPostScope:e,metric:t,...n}){return(0,z.jsx)(Ce,{...n,widgetType:ye(I,k),renderModule:V,renderComponent:E,attributes:L({hasPostScope:e,metric:t},!0)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Fe;t((()=>{x(),me(),_e(),ge(),we(),xe(),je(),Me(),Ne(),z=a(),pe(),B=779,V=`storybook/post-all-time-traffic`,H=`stats/post/${B}`,U={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},G={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:E,tags:[`autodocs`],decorators:[ve],argTypes:{hasPostScope:U,metric:W},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},K={render:R,args:{hasPostScope:!0,metric:`total`},decorators:[w]},q={render:R,args:{hasPostScope:!0,metric:`average`},decorators:[w]},J={render:R,args:{hasPostScope:!1,metric:`total`},decorators:[w]},Y={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(H,`loading`),()=>S(H,null))},X={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(H,`error`),()=>S(H,null))},Z={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(H,`error-retryable`),()=>S(H,null))},Q={render:R,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(H,`empty`),()=>S(H,null))},$={render:e=>(0,z.jsx)(Pe,{...e}),args:{...Se,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...be,hasPostScope:U,metric:W}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...$.parameters?.docs?.description}}},Fe=[`Default`,`DailyAverage`,`NoPostScope`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Q as Empty,X as Error,Z as ErrorRetryable,Y as Loading,J as NoPostScope,$ as WidgetDashboardWithWidget,Fe as __namedExportsOrder,G as default};