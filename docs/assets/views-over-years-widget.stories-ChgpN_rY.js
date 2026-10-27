import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Lt as o,Pt as s,t as c,y as l}from"./date-fns-V6dsVcup.js";import{F as u,It as d,Pt as f,Rt as p,at as m,ct as h,nt as g,rt as ee,st as te,ut as _,z as ne}from"./charts-provider-DvCItWWe.js";import{_ as v,d as y,g as b,t as re}from"./src-IVwX_Vnu.js";import{Cn as ie,V as ae,ct as oe,fn as se,hn as ce,t as x}from"./src-DfQ3R5pV.js";import{t as le}from"./widget-state-CzEbVQbD.js";import{i as S,n as ue,r as de}from"./with-story-router-DWKuzvXm.js";import{a as fe}from"./metric-sparkline-skeleton-BJHDL68Q.js";import{n as pe,r as me,s as C}from"./register-report-mocks-xm2nLXrN.js";import{t as he}from"./monthly-heatmap-Cxc_C-EJ.js";import{a as ge,g as _e,h as ve,i as ye,m as be,n as xe,p as Se,r as w}from"./with-widget-canvas-6gZbeYrd.js";function Ce(e,t,n){let r=n&&T(e,n)?n.day:1,i=T(e,E(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function we(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=_(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(_(E(n)),...a.map(([e])=>e)),s=Math.max(_(E(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&_(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=_(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Ce(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var T,E,Te=e((()=>{S(),T=(e,t)=>e.year===t.year&&e.month===t.month,E=e=>({year:e.getFullYear(),month:e.getMonth()})}));function D(e){let t=l(e);return o(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function O(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=we(e,t,l(n),i);return{rows:a,lifeStartsAt:m(a,r,v())}}function k(){return s(b(),M)}function Ee(e,t){let n=k(),{primary:r,isLoading:i,isFetching:a,isError:o,error:c,refetch:l}=oe((0,A.useMemo)(()=>({from:j,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,A.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=D(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,A.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=oe((0,A.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?s(t,M):n;return{from:e?s(e,M):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,A.useMemo)(()=>y((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:m,lifeStartsAt:h}=(0,A.useMemo)(()=>r.data?O(u,e,n,p):N,[r.data,u,e,n,p]),g=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:m,lifeStartsAt:h,isLoading:i||g,isFetching:a||f.isFetching,isError:o,error:c,refetch:l}}function De(e,t,n){let r=k(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=ae(t,{enabled:n&&t>0}),{rows:u,lifeStartsAt:d}=(0,A.useMemo)(()=>i?O(i.data.flatMap(e=>{let t=D(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,y(i.startDate??void 0)):N,[i,e,r]);return{rows:u,lifeStartsAt:d,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function Oe(e,t){let n=t!==void 0,r=Ee(e,!n),i=De(e,t??0,n);return n?i:r}var A,j,M,N,ke=e((()=>{x(),re(),S(),c(),A=t(n(),1),Te(),j=`2005-01-01`,M=`yyyy-MM-dd`,N={rows:[],lifeStartsAt:void 0}}));function Ae({metric:e,authorScoped:t}){let{reportParams:n}=ne(),i=t?se(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=Oe(e,i),m=p(),{openPeriod:h}=ie(),_=v(),y=(0,F.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:_},i=n===void 0?ee(e,r):g({year:e,month:n},r);!i?.from||!i.to||(t?h?.(i):m(L,{from:i.from,to:i.to}))},[t,o,_,h,m]);if(i!==void 0&&i<=0)return(0,I.jsx)(le,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let b=l&&a.length===0;return(0,I.jsx)(le,{isLoading:s,isFetching:c,isError:b,error:b?f(u,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}):null,renderLoading:(0,I.jsx)(fe,{}),children:(0,I.jsx)(he,{chartTitle:r(`Views over years`,`jetpack-premium-analytics-pkg`),rows:a,...te(e),onSelect:y})})}function P({attributes:e={}}){return(0,I.jsx)(u,{attributes:e,children:(0,I.jsx)(Ae,{metric:h(e.metric),authorScoped:e.authorScoped===!0})})}var F,I,L,je=e((()=>{x(),re(),d(),S(),i(),F=t(n(),1),ke(),I=a(),L=`traffic`})),R,Me=e((()=>{R={example:{attributes:{metric:`total`}}}})),z,B,V,Ne,Pe,Fe,Ie,Le,Re,ze=e((()=>{z=`jpa/views-over-years`,B=`jpa/seen`,V=`Views over years`,Ne=`Every month of views across the whole site, one row per year.`,Pe={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Fe=`stats`,Ie=`framed`,Le=[{id:`metric`,type:`jpa/select`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],Re={name:z,icon:B,title:V,description:Ne,help:Pe,category:Fe,presentation:Ie,attributes:Le}}));function Be({metric:e},t=!1){return{metric:e,reportParams:ce(t)}}function H(e){return(0,U.jsx)(P,{attributes:Be(e)})}function Ve({metric:e,...t}){return(0,U.jsx)(be,{...t,widgetType:ye(Re,R),renderModule:He,renderComponent:P,attributes:Be({metric:e},!0)})}var U,He,W,G,Ue,K,q,J,Y,X,Z,Q,$;e((()=>{x(),pe(),ve(),ge(),ue(),xe(),je(),Me(),ze(),U=a(),me(),He=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ue={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:P,tags:[`autodocs`],decorators:[de],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:H,args:{metric:`total`},decorators:[w]},q={render:H,args:{metric:`average`},decorators:[w]},J={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(W,`loading`),()=>C(W,null))},Y={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(W,`error`),()=>C(W,null))},X={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(W,`error-retryable`),()=>C(W,null))},Z={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(W,`empty`),()=>C(W,null))},Q={render:e=>(0,U.jsx)(Ve,{...e}),args:{...Se,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{..._e,metric:G}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}}}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ue as default};