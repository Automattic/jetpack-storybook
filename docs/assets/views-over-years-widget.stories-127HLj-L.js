import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-2iv4IIRq.js";import{Gt as c,X as l,t as u,y as d}from"./date-fns-CeH7Uo-X.js";import{B as f,H as p,K as m,L as h,R as g,St as _,U as ee,W as te,g as ne,lt as re,st as ie}from"./hooks-EUr_ubjq.js";import{m as ae,p as oe,t as se,u as ce}from"./src-D1E5MwTJ.js";import{R as le,en as ue,r as v}from"./date-period-dropdown-DjMN-MzN.js";import{r as de}from"./metric-sparkline-skeleton-pcXVn2pV.js";import{t as fe}from"./monthly-heatmap-Cttf6Rmb.js";import{i as pe,r as me,s as y}from"./register-report-mocks-dZpieh6n.js";import{t as he}from"./widget-state-BMR2ZcPJ.js";import{t as b}from"./src-CfhPYP5S.js";import{a as ge,c as _e,d as ve,i as ye,l as be,n as xe,o as Se,r as x,s as Ce,u as we}from"./with-widget-canvas-B-6vwU3g.js";function Te(e,t,n){let r=n&&S(e,n)?n.day:1,i=S(e,C(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Ee(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=m(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0);if(a.length===0)return[];let o=Math.min(...a.map(([e])=>e)),s=Math.max(m(C(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&m(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=m(d);if(f<o||f>s)return null;let p=i.get(f)??0,h=Te(d,n,u);return r+=p,a+=h,t===`average`?Math.round(p/h):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var S,C,De=t((()=>{b(),S=(e,t)=>e.year===t.year&&e.month===t.month,C=e=>({year:e.getFullYear(),month:e.getMonth()})}));function Oe(e){let t=d(e);return c(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function ke(e){let t=l(oe(),E),{primary:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=le((0,w.useMemo)(()=>({from:T,to:t,interval:`month`,period:`month`,stat_fields:`views`}),[t])),c=(0,w.useMemo)(()=>(n.data?.data??[]).flatMap(e=>{let t=Oe(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[n.data]),u=(0,w.useMemo)(()=>c.find(({views:e})=>e>0)?.month,[c]),p=le((0,w.useMemo)(()=>{let e=u?new Date(u.year,u.month,1):void 0,n=u?new Date(u.year,u.month+1,0):void 0,r=n?l(n,E):t;return{from:e?l(e,E):t,to:r<t?r:t,interval:`day`,period:`day`,stat_fields:`views`}},[u,t]),{enabled:!!u}),m=(0,w.useMemo)(()=>ce((p.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[p.primary.data]),{rows:h,lifeStartsAt:g}=(0,w.useMemo)(()=>{let n=m&&{year:m.getFullYear(),month:m.getMonth(),day:m.getDate()},r=Ee(c,e,d(t),n);return{rows:r,lifeStartsAt:f(r,m,ae())}},[c,e,t,m]),_=e===`average`&&!!u&&p.isLoading&&!p.primary.isFetched;return{rows:h,lifeStartsAt:g,isLoading:r||_,isFetching:i||p.isFetching,isError:a,error:o,refetch:s}}var w,T,E,Ae=t((()=>{v(),se(),b(),u(),w=e(n(),1),De(),T=`2005-01-01`,E=`yyyy-MM-dd`}));function je({metric:e}){let{rows:t,lifeStartsAt:n,isLoading:i,isFetching:a,isError:s,error:c,refetch:l}=ke(e),u=re(),d=ae(),f=(0,O.useCallback)(({year:e,month:t})=>{let r={lifeStartsAt:n,timeZone:d},i=t===void 0?g(e,r):h({year:e,month:t},r);i?.from&&i.to&&u(A,{from:i.from,to:i.to})},[n,d,u]),m=s&&t.length===0;return(0,k.jsx)(he,{isLoading:i,isFetching:a,isError:m,isEmpty:t.length===0,error:m?_(c,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}):null,empty:{icon:o,description:r(`No views yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(de,{}),children:(0,k.jsx)(fe,{rows:t,...p(e),onSelect:f})})}function D({attributes:e={}}){return(0,k.jsx)(ne,{attributes:e,children:(0,k.jsx)(je,{metric:te(e.metric)})})}var O,k,A,Me=t((()=>{se(),ie(),b(),i(),s(),O=e(n(),1),Ae(),k=a(),A=`traffic`})),j,Ne=t((()=>{b(),s(),j={icon:o,attributes:[ee()],example:{attributes:{metric:`total`}}}})),M,N,P,F,I,L,R,Pe=t((()=>{M=`jpa/views-over-years`,N=`Views over years`,P=`Every month of views across the whole site, one row per year.`,F={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({metric:e},t=!1){return{metric:e,reportParams:ue(t)}}function B(e){return(0,V.jsx)(D,{attributes:z(e)})}function Fe({metric:e,...t}){return(0,V.jsx)(Ce,{...t,widgetType:ye(R,j),renderModule:H,renderComponent:D,attributes:z({metric:e},!0)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),me(),_e(),ge(),we(),xe(),Me(),Ne(),Pe(),V=a(),pe(),H=`storybook/views-over-years`,U=`stats/visits`,W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},G={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:D,tags:[`autodocs`],decorators:[ve],argTypes:{metric:W},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:B,args:{metric:`total`},decorators:[x]},q={render:B,args:{metric:`average`},decorators:[x]},J={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(y(U,`loading`),()=>y(U,null))},Y={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(y(U,`error`),()=>y(U,null))},X={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(y(U,`error-retryable`),()=>y(U,null))},Z={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(y(U,`empty`),()=>y(U,null))},Q={render:e=>(0,V.jsx)(Fe,{...e}),args:{...Se,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...be,metric:W}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a site the endpoint has no views for.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};