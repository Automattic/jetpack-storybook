import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-DNhkEVJn.js";import{C as c,Zt as l,nt as u,t as d}from"./date-fns-I6jayRk5.js";import{m as f,p,t as m,u as ee}from"./src-CrSiwkkp.js";import{Nn as h,X as g,t as _}from"./src-BT9tCNp8.js";import{B as v,H as y,I as te,N as ne,P as re,R as ie,_ as ae,dt as oe,lt as se,pt as ce,z as le}from"./charts-provider-8h1UQtIx.js";import{a as ue}from"./metric-sparkline-skeleton-CGDJbI_R.js";import{n as de,r as fe}from"./with-story-router-Beljd9ki.js";import{n as pe,r as me,s as b}from"./register-report-mocks-LFrkCoXx.js";import{t as he}from"./widget-state-D_ZEN0cC.js";import{t as ge}from"./monthly-heatmap-BCNq4jlX.js";import{t as x}from"./src-9kE5Mz9H.js";import{a as _e,g as ve,h as ye,i as be,m as xe,n as Se,p as Ce,r as S}from"./with-widget-canvas-Bo43tA2D.js";function we(e,t,n){let r=n&&C(e,n)?n.day:1,i=C(e,w(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Te(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=y(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(y(w(n)),...a.map(([e])=>e)),s=Math.max(y(w(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&y(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=y(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=we(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var C,w,Ee=t((()=>{x(),C=(e,t)=>e.year===t.year&&e.month===t.month,w=e=>({year:e.getFullYear(),month:e.getMonth()})}));function De(e){let t=c(e);return l(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function Oe(e){let t=u(p(),D),{primary:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=g((0,T.useMemo)(()=>({from:E,to:t,interval:`month`,period:`month`,stat_fields:`views`}),[t])),l=(0,T.useMemo)(()=>(n.data?.data??[]).flatMap(e=>{let t=De(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[n.data]),d=(0,T.useMemo)(()=>l.find(({views:e})=>e>0)?.month,[l]),m=g((0,T.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,n=d?new Date(d.year,d.month+1,0):void 0,r=n?u(n,D):t;return{from:e?u(e,D):t,to:r<t?r:t,interval:`day`,period:`day`,stat_fields:`views`}},[d,t]),{enabled:!!d}),h=(0,T.useMemo)(()=>ee((m.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[m.primary.data]),{rows:_,lifeStartsAt:v}=(0,T.useMemo)(()=>{if(!n.data)return{rows:[],lifeStartsAt:void 0};let r=h&&{year:h.getFullYear(),month:h.getMonth(),day:h.getDate()},i=Te(l,e,c(t),r);return{rows:i,lifeStartsAt:te(i,h,f())}},[n.data,l,e,t,h]),y=e===`average`&&!!d&&m.isLoading&&!m.primary.isFetched;return{rows:_,lifeStartsAt:v,isLoading:r||y,isFetching:i||m.isFetching,isError:a,error:o,refetch:s}}var T,E,D,ke=t((()=>{_(),m(),x(),d(),T=e(n(),1),Ee(),E=`2005-01-01`,D=`yyyy-MM-dd`}));function Ae({metric:e}){let{rows:t,lifeStartsAt:n,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=Oe(e),l=ce(),u=f(),d=(0,k.useCallback)(({year:e,month:t})=>{let r={lifeStartsAt:n,timeZone:u},i=t===void 0?re(e,r):ne({year:e,month:t},r);i?.from&&i.to&&l(j,{from:i.from,to:i.to})},[n,u,l]),p=o&&t.length===0;return(0,A.jsx)(he,{isLoading:i,isFetching:a,isError:p,isEmpty:!1,error:p?se(s,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,renderLoading:(0,A.jsx)(ue,{}),children:(0,A.jsx)(ge,{rows:t,...ie(e),onSelect:d})})}function O({attributes:e={}}){return(0,A.jsx)(ae,{attributes:e,children:(0,A.jsx)(Ae,{metric:v(e.metric)})})}var k,A,j,je=t((()=>{m(),oe(),x(),i(),k=e(n(),1),ke(),A=a(),j=`traffic`})),M,Me=t((()=>{x(),s(),M={icon:o,attributes:[le()],example:{attributes:{metric:`total`}}}})),N,P,F,I,L,R,z,Ne=t((()=>{N=`jpa/views-over-years`,P=`Views over years`,F=`Every month of views across the whole site, one row per year.`,I={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metric:e},t=!1){return{metric:e,reportParams:h(t)}}function V(e){return(0,H.jsx)(O,{attributes:B(e)})}function Pe({metric:e,...t}){return(0,H.jsx)(xe,{...t,widgetType:be(z,M),renderModule:U,renderComponent:O,attributes:B({metric:e},!0)})}var H,U,W,G,Fe,K,q,J,Y,X,Z,Q,$;t((()=>{_(),pe(),ye(),_e(),de(),Se(),je(),Me(),Ne(),H=a(),me(),U=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Fe={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:O,tags:[`autodocs`],decorators:[fe],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:V,args:{metric:`total`},decorators:[S]},q={render:V,args:{metric:`average`},decorators:[S]},J={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`loading`),()=>b(W,null))},Y={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`error`),()=>b(W,null))},X={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`error-retryable`),()=>b(W,null))},Z={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`empty`),()=>b(W,null))},Q={render:e=>(0,H.jsx)(Pe,{...e}),args:{...Ce,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...ve,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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