import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-DNhkEVJn.js";import{C as c,Zt as l,nt as u,t as d}from"./date-fns-I6jayRk5.js";import{m as f,p,t as m,u as ee}from"./src-rrY7vAoW.js";import{Nn as h,X as g,t as _}from"./src-C_KeOQYD.js";import{B as v,F as y,H as te,I as ne,R as re,V as ie,W as b,_ as ae,dt as oe,ht as se,pt as ce}from"./charts-provider-DjW8Od2B.js";import{a as le}from"./metric-sparkline-skeleton-hL3A_DWE.js";import{n as ue,r as de,s as x}from"./register-report-mocks-1Nkj1Xmy.js";import{t as fe}from"./widget-state-owXXqNbb.js";import{n as pe,r as me}from"./with-story-router-Beljd9ki.js";import{t as he}from"./monthly-heatmap-LeBf5UFR.js";import{t as S}from"./src-ChEy9vGC.js";import{a as ge,g as _e,h as ve,i as ye,m as be,n as xe,p as Se,r as C}from"./with-widget-canvas-B0M4Zjjl.js";function Ce(e,t,n){let r=n&&w(e,n)?n.day:1,i=w(e,T(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function we(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=b(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(b(T(n)),...a.map(([e])=>e)),s=Math.max(b(T(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&b(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=b(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Ce(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var w,T,Te=t((()=>{S(),w=(e,t)=>e.year===t.year&&e.month===t.month,T=e=>({year:e.getFullYear(),month:e.getMonth()})}));function Ee(e){let t=c(e);return l(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function De(e){let t=u(p(),O),{primary:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=g((0,E.useMemo)(()=>({from:D,to:t,interval:`month`,period:`month`,stat_fields:`views`}),[t])),l=(0,E.useMemo)(()=>(n.data?.data??[]).flatMap(e=>{let t=Ee(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[n.data]),d=(0,E.useMemo)(()=>l.find(({views:e})=>e>0)?.month,[l]),m=g((0,E.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,n=d?new Date(d.year,d.month+1,0):void 0,r=n?u(n,O):t;return{from:e?u(e,O):t,to:r<t?r:t,interval:`day`,period:`day`,stat_fields:`views`}},[d,t]),{enabled:!!d}),h=(0,E.useMemo)(()=>ee((m.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[m.primary.data]),{rows:_,lifeStartsAt:v}=(0,E.useMemo)(()=>{if(!n.data)return{rows:[],lifeStartsAt:void 0};let r=h&&{year:h.getFullYear(),month:h.getMonth(),day:h.getDate()},i=we(l,e,c(t),r);return{rows:i,lifeStartsAt:re(i,h,f())}},[n.data,l,e,t,h]),y=e===`average`&&!!d&&m.isLoading&&!m.primary.isFetched;return{rows:_,lifeStartsAt:v,isLoading:r||y,isFetching:i||m.isFetching,isError:a,error:o,refetch:s}}var E,D,O,Oe=t((()=>{_(),m(),S(),d(),E=e(n(),1),Te(),D=`2005-01-01`,O=`yyyy-MM-dd`}));function ke({metric:e}){let{rows:t,lifeStartsAt:n,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=De(e),l=se(),u=f(),d=(0,A.useCallback)(({year:e,month:t})=>{let r={lifeStartsAt:n,timeZone:u},i=t===void 0?ne(e,r):y({year:e,month:t},r);i?.from&&i.to&&l(M,{from:i.from,to:i.to})},[n,u,l]),p=o&&t.length===0;return(0,j.jsx)(fe,{isLoading:i,isFetching:a,isError:p,isEmpty:!1,error:p?oe(s,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,renderLoading:(0,j.jsx)(le,{}),children:(0,j.jsx)(he,{rows:t,...v(e),onSelect:d})})}function k({attributes:e={}}){return(0,j.jsx)(ae,{attributes:e,children:(0,j.jsx)(ke,{metric:te(e.metric)})})}var A,j,M,Ae=t((()=>{m(),ce(),S(),i(),A=e(n(),1),Oe(),j=a(),M=`traffic`})),N,je=t((()=>{S(),s(),N={icon:o,attributes:[ie()],example:{attributes:{metric:`total`}}}})),P,F,I,L,R,z,B,Me=t((()=>{P=`jpa/views-over-years`,F=`Views over years`,I=`Every month of views across the whole site, one row per year.`,L={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({metric:e},t=!1){return{metric:e,reportParams:h(t)}}function H(e){return(0,U.jsx)(k,{attributes:V(e)})}function Ne({metric:e,...t}){return(0,U.jsx)(be,{...t,widgetType:ye(B,N),renderModule:Pe,renderComponent:k,attributes:V({metric:e},!0)})}var U,Pe,W,G,Fe,K,q,J,Y,X,Z,Q,$;t((()=>{_(),ue(),ve(),ge(),pe(),xe(),Ae(),je(),Me(),U=a(),de(),Pe=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Fe={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:k,tags:[`autodocs`],decorators:[me],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:H,args:{metric:`total`},decorators:[C]},q={render:H,args:{metric:`average`},decorators:[C]},J={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(W,`loading`),()=>x(W,null))},Y={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(W,`error`),()=>x(W,null))},X={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(W,`error-retryable`),()=>x(W,null))},Z={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(W,`empty`),()=>x(W,null))},Q={render:e=>(0,U.jsx)(Ne,{...e}),args:{...Se,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{..._e,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderViewsOverYears,
  args: {
    metric: 'total'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default — the site's monthly views across its history.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderViewsOverYears,
  args: {
    metric: 'average'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`DailyAverage — the same table under the Daily average metric: each cell is
the month's views per day, and the scale and tooltips say so.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderViewsOverYears,
  args: {
    metric: 'total'
  },
  // The forced states are off the shared autodocs page: setReportMockState is
  // path-keyed, so they would bleed into the sibling stories.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(VISITS_REQUEST_PATH, 'loading');
    return () => setReportMockState(VISITS_REQUEST_PATH, null);
  }
}`,...J.parameters?.docs?.source},description:{story:`Loading — the first fetch is still in flight, so the widget shows its
heatmap skeleton. The mock is forced to never resolve for this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderViewsOverYears,
  args: {
    metric: 'total'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(VISITS_REQUEST_PATH, 'error');
    return () => setReportMockState(VISITS_REQUEST_PATH, null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Error — the fetch failed with a permission 403: neutral copy, no retry.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderViewsOverYears,
  args: {
    metric: 'total'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(VISITS_REQUEST_PATH, 'error-retryable');
    return () => setReportMockState(VISITS_REQUEST_PATH, null);
  }
}`,...X.parameters?.docs?.source},description:{story:"ErrorRetryable — the proxy's `no_connection` 403, which can heal after\nreconnecting, so the widget offers a Retry action.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderViewsOverYears,
  args: {
    metric: 'total'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState(VISITS_REQUEST_PATH, 'empty');
    return () => setReportMockState(VISITS_REQUEST_PATH, null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a site the endpoint has no views for: the current month alone, at zero.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <ViewsOverYearsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 3,
    widgetHeight: 2,
    metric: 'total'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    metric: metricArgType
  }
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Fe as default};