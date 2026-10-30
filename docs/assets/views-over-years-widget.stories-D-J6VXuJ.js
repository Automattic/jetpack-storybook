import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-sy00sX6O.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Lt as o,Pt as s,t as c,y as l}from"./date-fns-V6dsVcup.js";import{B as u,Ft as d,I as f,Lt as p,ct as m,dt as h,it as g,lt as _,ot as v,rt as ee,zt as te}from"./charts-provider-CQF40eTg.js";import{_ as y,d as b,g as x,t as ne}from"./src-C7ZJjxnS.js";import{En as re,V as ie,dt as ae,hn as oe,t as S,vn as se}from"./src-BwEQ_OJQ.js";import{t as ce}from"./widget-state-C5-GuX-o.js";import{i as C,n as le,r as ue}from"./with-story-router-DkeR1qN6.js";import{a as de}from"./metric-sparkline-skeleton-D9sktiIx.js";import{n as fe,r as pe,s as w}from"./register-report-mocks-B-OTOegr.js";import{t as me}from"./monthly-heatmap-D3tKb-gZ.js";import{a as he,g as ge,h as _e,i as ve,m as ye,n as be,p as xe,r as T}from"./with-widget-canvas-8ry8XA2Z.js";function Se(e,t,n){let r=n&&E(e,n)?n.day:1,i=E(e,D(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Ce(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=h(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(h(D(n)),...a.map(([e])=>e)),s=Math.max(h(D(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&h(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=h(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Se(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var E,D,we=e((()=>{C(),E=(e,t)=>e.year===t.year&&e.month===t.month,D=e=>({year:e.getFullYear(),month:e.getMonth()})}));function O(e){let t=l(e);return o(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function k(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Ce(e,t,l(n),i);return{rows:a,lifeStartsAt:v(a,r,y())}}function A(){return s(x(),N)}function Te(e,t){let n=A(),{primary:r,isLoading:i,isFetching:a,isError:o,error:c,refetch:l}=ae((0,j.useMemo)(()=>({from:M,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,j.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=O(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,j.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=ae((0,j.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?s(t,N):n;return{from:e?s(e,N):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,j.useMemo)(()=>b((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:m,lifeStartsAt:h}=(0,j.useMemo)(()=>r.data?k(u,e,n,p):P,[r.data,u,e,n,p]),g=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:m,lifeStartsAt:h,isLoading:i||g,isFetching:a||f.isFetching,isError:o,error:c,refetch:l}}function Ee(e,t,n){let r=A(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=ie(t,{enabled:n&&t>0}),{rows:u,lifeStartsAt:d}=(0,j.useMemo)(()=>i?k(i.data.flatMap(e=>{let t=O(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,b(i.startDate??void 0)):P,[i,e,r]);return{rows:u,lifeStartsAt:d,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function De(e,t){let n=t!==void 0,r=Te(e,!n),i=Ee(e,t??0,n);return n?i:r}var j,M,N,P,Oe=e((()=>{S(),ne(),C(),c(),j=t(n(),1),we(),M=`2005-01-01`,N=`yyyy-MM-dd`,P={rows:[],lifeStartsAt:void 0}}));function ke({metric:e,authorScoped:t}){let{reportParams:n}=u(),i=t?oe(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:f,refetch:p}=De(e,i),h=te(),{openPeriod:_}=re(),v=y(),b=(0,I.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:v},i=n===void 0?g(e,r):ee({year:e,month:n},r);!i?.from||!i.to||(t?_?.(i):h(R,{from:i.from,to:i.to}))},[t,o,v,_,h]);if(i!==void 0&&i<=0)return(0,L.jsx)(ce,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let x=l&&a.length===0;return(0,L.jsx)(ce,{isLoading:s,isFetching:c,isError:x,error:x?d(f,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}):null,renderLoading:(0,L.jsx)(de,{}),children:(0,L.jsx)(me,{chartTitle:r(`Views over years`,`jetpack-premium-analytics-pkg`),rows:a,...m(e),onSelect:b})})}function F({attributes:e={}}){return(0,L.jsx)(f,{attributes:e,children:(0,L.jsx)(ke,{metric:_(e.metric),authorScoped:e.authorScoped===!0})})}var I,L,R,Ae=e((()=>{S(),ne(),p(),C(),i(),I=t(n(),1),Oe(),L=a(),R=`traffic`})),z,je=e((()=>{z={example:{attributes:{metric:`total`}}}})),B,V,Me,Ne,Pe,Fe,Ie,Le,Re,ze=e((()=>{B=`jpa/views-over-years`,V=`jpa/seen`,Me=`Views over years`,Ne=`Every month of views across the whole site, one row per year.`,Pe={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Fe=`stats`,Ie=`framed`,Le=[{id:`metric`,type:`jpa/select`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],Re={name:B,icon:V,title:Me,description:Ne,help:Pe,category:Fe,presentation:Ie,attributes:Le}}));function Be({metric:e},t=!1){return{metric:e,reportParams:se(t)}}function H(e){return(0,U.jsx)(F,{attributes:Be(e)})}function Ve({metric:e,...t}){return(0,U.jsx)(ye,{...t,widgetType:ve(Re,z),renderModule:He,renderComponent:F,attributes:Be({metric:e},!0)})}var U,He,W,G,Ue,K,q,J,Y,X,Z,Q,$;e((()=>{S(),fe(),_e(),he(),le(),be(),Ae(),je(),ze(),U=a(),pe(),He=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ue={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:F,tags:[`autodocs`],decorators:[ue],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:H,args:{metric:`total`},decorators:[T]},q={render:H,args:{metric:`average`},decorators:[T]},J={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(w(W,`loading`),()=>w(W,null))},Y={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(w(W,`error`),()=>w(W,null))},X={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(w(W,`error-retryable`),()=>w(W,null))},Z={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[T],beforeEach:()=>(w(W,`empty`),()=>w(W,null))},Q={render:e=>(0,U.jsx)(Ve,{...e}),args:{...xe,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...ge,metric:G}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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