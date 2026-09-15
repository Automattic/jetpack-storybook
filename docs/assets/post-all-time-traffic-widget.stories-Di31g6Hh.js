import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{i as r,n as i,t as a}from"./build-module-yGZutq_9.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s,wl as c}from"./build-module-zwSmKorH.js";import{B as l,C as u,J as d,L as ee,R as te,U as f,V as p,Y as m,mt as ne,rt as re,tt as h,y as g}from"./wp-date-settings-CN8mn237.js";import{M as ie,t as _}from"./src-DFNM1k7F.js";import{G as ae,j as v,m as oe,p as y,t as se,u as ce}from"./src-B477hvom.js";import{Dn as le,en as ue,i as b,yt as de}from"./date-filters-panel-BM7elUQQ.js";import{r as fe}from"./metric-sparkline-skeleton-DWGgUhb3.js";import{t as pe}from"./monthly-heatmap-8e-h165_.js";import{U as me,W as he,q as x}from"./report-metric-C_1X86OB.js";import{t as ge}from"./widget-state-CLnA8k9l.js";import{C as _e,D as ve,E as ye,O as be,S as xe,T as Se,b as Ce,k as we,t as S,w as Te,x as C}from"./src-C3Fov9jC.js";function Ee(e){return Object.entries(e).flatMap(([e,t])=>Object.keys(t.months).map(t=>f({year:Number(e),month:Number(t)-1})))}function De(e,t,n,r){let i=e?.years??{},a=Ee(i);if(a.length===0||t===`average`&&!e?.averages)return[];let o=t===`average`?e.averages:i,s=Math.min(...a,r?f(r):1/0),c=Math.max(f(n),...a),l=Math.floor(s/12),u=Math.floor(c/12),d=[];for(let e=u;e>=l;e--){let n=o[String(e)],r=Array.from({length:12},(t,r)=>{let i=f({year:e,month:r});return i<s?`before`:i>c?`after`:n?.months[String(r+1)]??0}),i=(t===`average`?n?.overall:n?.total)??null;d.push({year:e,months:r,total:i})}return d}var Oe=t((()=>{S()}));function ke(e,t,n){let r=e[e.length-1],i=r?.months.findIndex(e=>typeof e==`number`)??-1;return!r||i<0||n&&r.year===n.year&&i===n.month?t:new Date(v([r.year,i,1],oe()).getTime())}function Ae(e,t){let{data:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=de({postId:e,fields:[`years`,`averages`,`post`]}),c=(0,w.useMemo)(()=>{let e=n?.post;return ce(e?.post_date??(e?.post_date_gmt?`${e.post_date_gmt}Z`:void 0))},[n]),{rows:l,lifeStartsAt:u}=(0,w.useMemo)(()=>{let e=y(),r=c?y(c):void 0,i=r&&{year:r.getFullYear(),month:r.getMonth()},a=De(n,t,{year:e.getFullYear(),month:e.getMonth()},i);return{rows:a,lifeStartsAt:ke(a,c,i)}},[n,t,c]);return{rows:l,lifeStartsAt:u,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var w,je=t((()=>{b(),se(),w=e(n(),1),Oe()}));function Me({metric:e}){let{reportParams:t}=u(),n=le(t.post_id),{rows:r,lifeStartsAt:a,isLoading:o,isFetching:s,isError:c,error:d,refetch:f}=Ae(n,e),{onChange:p,onApply:m,timeZone:h}=re(),g=(0,E.useMemo)(()=>r.map(e=>({year:e.year,months:e.months.map(e=>typeof e==`number`?e:null),total:e.total})),[r]),_=(0,E.useCallback)(({year:e,month:t})=>{let n={lifeStartsAt:a,timeZone:h},r=t===void 0?te(e,n):ee({year:e,month:t},n);r&&(p(r,ae),m())},[a,h,p,m]),v=c&&r.length===0;return(0,D.jsx)(ge,{isLoading:o,isFetching:s,isError:v,isEmpty:n<=0||r.length===0,error:v?ne(d,{retryDescription:i(`We couldn't load this post's traffic. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}):null,empty:{icon:ie,description:i(n>0?`No views yet.`:`Open a post or page report to see its all-time traffic here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(fe,{}),children:(0,D.jsx)(pe,{rows:g,...l(e),onSelect:_})})}function T({attributes:e={}}){return(0,D.jsx)(g,{attributes:e,children:(0,D.jsx)(Me,{metric:p(e.metric)})})}var E,D,Ne=t((()=>{b(),se(),_(),h(),S(),a(),E=e(n(),1),je(),D=o()})),O,Pe=t((()=>{d(),a(),s(),O={icon:c,attributes:[{id:`metric`,label:r(`Metric`,`label for the views metric selector`,`jetpack-premium-analytics-pkg`),type:`text`,relevance:`high`,Edit:m,elements:[{value:`total`,label:i(`Total views`,`jetpack-premium-analytics-pkg`)},{value:`average`,label:i(`Daily average`,`jetpack-premium-analytics-pkg`)}]}],example:{attributes:{metric:`total`}}}})),k,A,j,M,N,P,F,Fe=t((()=>{k=`jpa/post-all-time-traffic`,A=`All-time traffic`,j=`Every month of views for the post or page being viewed, across its whole life.`,M={content:`Every month of views for the post or page being viewed, shaded by how it compares to the rest. Always the full history: the period above doesn't narrow it. Pick a month to read the rest of the page over it. Daily average leaves the current day out, as the classic Stats table does.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function I({hasPostScope:e,metric:t},n=!1){return{metric:t,reportParams:{...ue(n),...e?{post_id:z}:{}}}}function L(e){return(0,R.jsx)(T,{attributes:I(e)})}function Ie({hasPostScope:e,metric:t,...n}){return(0,R.jsx)(Se,{...n,widgetType:xe(F,O),renderModule:B,renderComponent:T,attributes:I({hasPostScope:e,metric:t},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{b(),me(),ye(),_e(),be(),Ce(),Ne(),Pe(),Fe(),R=o(),he(),z=779,B=`storybook/post-all-time-traffic`,V=`stats/post/${z}`,H={control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},U={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},W={title:`Packages/Premium Analytics/Widgets/PostAllTimeTraffic`,component:T,tags:[`autodocs`],decorators:[we],argTypes:{hasPostScope:H,metric:U},parameters:{docs:{description:{component:"The \"All-time traffic\" widget: every month of the scoped post's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the post's whole life, whatever period the page shows, and picking a month applies that month to the page. Without a post scope the widget renders a scopeless empty state."}}}},G={render:L,args:{hasPostScope:!0,metric:`total`},decorators:[C]},K={render:L,args:{hasPostScope:!0,metric:`average`},decorators:[C]},q={render:L,args:{hasPostScope:!1,metric:`total`},decorators:[C]},J={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(V,`loading`),()=>x(V,null))},Y={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(V,`error`),()=>x(V,null))},X={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(V,`error-retryable`),()=>x(V,null))},Z={render:L,args:{hasPostScope:!0,metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(V,`empty`),()=>x(V,null))},Q={render:e=>(0,R.jsx)(Ie,{...e}),args:{...Te,widgetWidth:3,widgetHeight:2,hasPostScope:!0,metric:`total`},argTypes:{...ve,hasPostScope:H,metric:U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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