import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Zt as s,nt as c,t as l}from"./date-fns-I6jayRk5.js";import{d as u,h as d,m as f,t as p}from"./src-DHlripjL.js";import{$ as m,P as h,Sn as ee,sn as g,t as _,un as v}from"./src-Coriej0V.js";import{B as te,F as ne,L as re,P as ie,U as y,V as ae,ft as oe,m as se,mt as ce,ut as le,v as ue,z as de}from"./charts-provider-Cx31X0zK.js";import{a as fe}from"./metric-sparkline-skeleton-CObyrs43.js";import{n as pe,r as me,s as b}from"./register-report-mocks-BRxzgwOP.js";import{t as x}from"./widget-state-BEcWGQan.js";import{n as he,r as ge}from"./with-story-router-TjVyBU09.js";import{t as _e}from"./monthly-heatmap-ByrcGCDY.js";import{t as S}from"./src-DtqXi9T7.js";import{a as ve,g as ye,h as be,i as xe,m as Se,n as Ce,p as we,r as C}from"./with-widget-canvas-N6vYp7La.js";function Te(e,t,n){let r=n&&w(e,n)?n.day:1,i=w(e,T(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Ee(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=y(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(y(T(n)),...a.map(([e])=>e)),s=Math.max(y(T(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&y(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=y(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Te(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var w,T,De=t((()=>{S(),w=(e,t)=>e.year===t.year&&e.month===t.month,T=e=>({year:e.getFullYear(),month:e.getMonth()})}));function E(e){let t=o(e);return s(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function D(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Ee(e,t,o(n),i);return{rows:a,lifeStartsAt:re(a,r,d())}}function O(){return c(f(),j)}function Oe(e,t){let n=O(),{primary:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:l}=m((0,k.useMemo)(()=>({from:A,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),d=(0,k.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=E(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),f=(0,k.useMemo)(()=>d.find(({views:e})=>e>0)?.month,[d]),p=m((0,k.useMemo)(()=>{let e=f?new Date(f.year,f.month,1):void 0,t=f?new Date(f.year,f.month+1,0):void 0,r=t?c(t,j):n;return{from:e?c(e,j):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[f,n]),{enabled:t&&!!f}),h=(0,k.useMemo)(()=>u((p.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[p.primary.data]),{rows:ee,lifeStartsAt:g}=(0,k.useMemo)(()=>r.data?D(d,e,n,h):M,[r.data,d,e,n,h]),_=e===`average`&&!!f&&p.isLoading&&!p.primary.isFetched;return{rows:ee,lifeStartsAt:g,isLoading:i||_,isFetching:a||p.isFetching,isError:o,error:s,refetch:l}}function ke(e,t,n){let r=O(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=h(t,{enabled:n&&t>0}),{rows:d,lifeStartsAt:f}=(0,k.useMemo)(()=>i?D(i.data.flatMap(e=>{let t=E(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,u(i.startDate??void 0)):M,[i,e,r]);return{rows:d,lifeStartsAt:f,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function Ae(e,t){let n=t!==void 0,r=Oe(e,!n),i=ke(e,t??0,n);return n?i:r}var k,A,j,M,je=t((()=>{_(),p(),S(),l(),k=e(n(),1),De(),A=`2005-01-01`,j=`yyyy-MM-dd`,M={rows:[],lifeStartsAt:void 0}}));function Me({metric:e,authorScoped:t}){let{reportParams:n}=ue(),i=t?g(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:u,refetch:f}=Ae(e,i),p=ce(),{openPeriod:m}=ee(),h=d(),_=(0,P.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:h},i=n===void 0?ne(e,r):ie({year:e,month:n},r);!i?.from||!i.to||(t?m?.(i):p(I,{from:i.from,to:i.to}))},[t,o,h,m,p]);if(i!==void 0&&i<=0)return(0,F.jsx)(x,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let v=l&&a.length===0;return(0,F.jsx)(x,{isLoading:s,isFetching:c,isError:v,error:v?le(u,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}):null,renderLoading:(0,F.jsx)(fe,{}),children:(0,F.jsx)(_e,{rows:a,...de(e),onSelect:_})})}function N({attributes:e={}}){return(0,F.jsx)(se,{attributes:e,children:(0,F.jsx)(Me,{metric:ae(e.metric),authorScoped:e.authorScoped===!0})})}var P,F,I,Ne=t((()=>{_(),p(),oe(),S(),i(),P=e(n(),1),je(),F=a(),I=`traffic`})),L,Pe=t((()=>{S(),L={attributes:[te()],example:{attributes:{metric:`total`}}}})),R,z,B,V,Fe,Ie,Le,Re,ze=t((()=>{R=`jpa/views-over-years`,z=`jpa/seen`,B=`Views over years`,V=`Every month of views across the whole site, one row per year.`,Fe={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Ie=`stats`,Le=`framed`,Re={name:R,icon:z,title:B,description:V,help:Fe,category:Ie,presentation:Le}}));function Be({metric:e},t=!1){return{metric:e,reportParams:v(t)}}function H(e){return(0,U.jsx)(N,{attributes:Be(e)})}function Ve({metric:e,...t}){return(0,U.jsx)(Se,{...t,widgetType:xe(Re,L),renderModule:He,renderComponent:N,attributes:Be({metric:e},!0)})}var U,He,W,G,Ue,K,q,J,Y,X,Z,Q,$;t((()=>{_(),pe(),be(),ve(),he(),Ce(),Ne(),Pe(),ze(),U=a(),me(),He=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ue={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:N,tags:[`autodocs`],decorators:[ge],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:H,args:{metric:`total`},decorators:[C]},q={render:H,args:{metric:`average`},decorators:[C]},J={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(b(W,`loading`),()=>b(W,null))},Y={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(b(W,`error`),()=>b(W,null))},X={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(b(W,`error-retryable`),()=>b(W,null))},Z={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(b(W,`empty`),()=>b(W,null))},Q={render:e=>(0,U.jsx)(Ve,{...e}),args:{...we,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...ye,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ue as default};