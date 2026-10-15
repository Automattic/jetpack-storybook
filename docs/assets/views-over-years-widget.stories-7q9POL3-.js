import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Zt as s,nt as c,t as l}from"./date-fns-I6jayRk5.js";import{d as u,h as d,m as f,t as p}from"./src-THTTC13f.js";import{Cn as m,L as h,cn as g,dn as _,it as v,t as y}from"./src-DwLKyoSZ.js";import{B as ee,F as te,L as ne,P as re,U as b,V as ie,m as ae,ut as oe,v as se,z as ce}from"./charts-provider-BtLSU6mr.js";import{a as le,r as ue}from"./use-track-event-X9b8nVTH.js";import{a as de}from"./metric-sparkline-skeleton-DW_94ev7.js";import{n as fe,r as pe,s as x}from"./register-report-mocks-YrYIgYKe.js";import{t as S}from"./widget-state-GeZtCpUY.js";import{n as me,r as he}from"./with-story-router-Czpt5vw_.js";import{t as ge}from"./monthly-heatmap-B0Q2fuVe.js";import{t as C}from"./src-CvSNkshm.js";import{a as _e,g as ve,h as ye,i as be,m as xe,n as Se,p as Ce,r as w}from"./with-widget-canvas-CY1Rv3CC.js";function we(e,t,n){let r=n&&T(e,n)?n.day:1,i=T(e,E(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Te(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=b(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(b(E(n)),...a.map(([e])=>e)),s=Math.max(b(E(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&b(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=b(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=we(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var T,E,Ee=t((()=>{C(),T=(e,t)=>e.year===t.year&&e.month===t.month,E=e=>({year:e.getFullYear(),month:e.getMonth()})}));function D(e){let t=o(e);return s(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function O(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Te(e,t,o(n),i);return{rows:a,lifeStartsAt:ne(a,r,d())}}function k(){return c(f(),M)}function De(e,t){let n=k(),{primary:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:l}=v((0,A.useMemo)(()=>({from:j,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),d=(0,A.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=D(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),f=(0,A.useMemo)(()=>d.find(({views:e})=>e>0)?.month,[d]),p=v((0,A.useMemo)(()=>{let e=f?new Date(f.year,f.month,1):void 0,t=f?new Date(f.year,f.month+1,0):void 0,r=t?c(t,M):n;return{from:e?c(e,M):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[f,n]),{enabled:t&&!!f}),m=(0,A.useMemo)(()=>u((p.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[p.primary.data]),{rows:h,lifeStartsAt:g}=(0,A.useMemo)(()=>r.data?O(d,e,n,m):N,[r.data,d,e,n,m]),_=e===`average`&&!!f&&p.isLoading&&!p.primary.isFetched;return{rows:h,lifeStartsAt:g,isLoading:i||_,isFetching:a||p.isFetching,isError:o,error:s,refetch:l}}function Oe(e,t,n){let r=k(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=h(t,{enabled:n&&t>0}),{rows:d,lifeStartsAt:f}=(0,A.useMemo)(()=>i?O(i.data.flatMap(e=>{let t=D(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,u(i.startDate??void 0)):N,[i,e,r]);return{rows:d,lifeStartsAt:f,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function ke(e,t){let n=t!==void 0,r=De(e,!n),i=Oe(e,t??0,n);return n?i:r}var A,j,M,N,Ae=t((()=>{y(),p(),C(),l(),A=e(n(),1),Ee(),j=`2005-01-01`,M=`yyyy-MM-dd`,N={rows:[],lifeStartsAt:void 0}}));function je({metric:e,authorScoped:t}){let{reportParams:n}=se(),i=t?g(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:u,refetch:f}=ke(e,i),p=le(),{openPeriod:h}=m(),_=d(),v=(0,F.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:_},i=n===void 0?te(e,r):re({year:e,month:n},r);!i?.from||!i.to||(t?h?.(i):p(L,{from:i.from,to:i.to}))},[t,o,_,h,p]);if(i!==void 0&&i<=0)return(0,I.jsx)(S,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let y=l&&a.length===0;return(0,I.jsx)(S,{isLoading:s,isFetching:c,isError:y,error:y?oe(u,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}):null,renderLoading:(0,I.jsx)(de,{}),children:(0,I.jsx)(ge,{rows:a,...ce(e),onSelect:v})})}function P({attributes:e={}}){return(0,I.jsx)(ae,{attributes:e,children:(0,I.jsx)(je,{metric:ie(e.metric),authorScoped:e.authorScoped===!0})})}var F,I,L,Me=t((()=>{y(),p(),ue(),C(),i(),F=e(n(),1),Ae(),I=a(),L=`traffic`})),R,Ne=t((()=>{C(),R={attributes:[ee()],example:{attributes:{metric:`total`}}}})),z,B,V,Pe,Fe,Ie,Le,Re,ze=t((()=>{z=`jpa/views-over-years`,B=`jpa/seen`,V=`Views over years`,Pe=`Every month of views across the whole site, one row per year.`,Fe={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Ie=`stats`,Le=`framed`,Re={name:z,icon:B,title:V,description:Pe,help:Fe,category:Ie,presentation:Le}}));function Be({metric:e},t=!1){return{metric:e,reportParams:_(t)}}function H(e){return(0,U.jsx)(P,{attributes:Be(e)})}function Ve({metric:e,...t}){return(0,U.jsx)(xe,{...t,widgetType:be(Re,R),renderModule:He,renderComponent:P,attributes:Be({metric:e},!0)})}var U,He,W,G,Ue,K,q,J,Y,X,Z,Q,$;t((()=>{y(),fe(),ye(),_e(),me(),Se(),Me(),Ne(),ze(),U=a(),pe(),He=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ue={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:P,tags:[`autodocs`],decorators:[he],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:H,args:{metric:`total`},decorators:[w]},q={render:H,args:{metric:`average`},decorators:[w]},J={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(x(W,`loading`),()=>x(W,null))},Y={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(x(W,`error`),()=>x(W,null))},X={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(x(W,`error-retryable`),()=>x(W,null))},Z={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(x(W,`empty`),()=>x(W,null))},Q={render:e=>(0,U.jsx)(Ve,{...e}),args:{...Ce,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...ve,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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