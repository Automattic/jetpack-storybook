import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Lt as o,Pt as s,t as c,y as l}from"./date-fns-V6dsVcup.js";import{r as u,t as d}from"./src-DYJxaWiw.js";import{d as f,h as p,m,t as h}from"./src-DFqe9oto.js";import{ot as g,pn as _,t as v,un as ee,xn as te,z as ne}from"./src-5g9sGwvT.js";import{I as re,N as ie,P as ae,R as oe,V as y,lt as se,m as ce,v as le,z as ue}from"./charts-provider-Dz_9KfQe.js";import{Q as de,X as b,Y as fe,Z as pe,ct as me,lt as he,ot as ge,st as _e,t as x}from"./src-CwWcdYh9.js";import{t as S}from"./widget-state-CgiqWOxt.js";import{a as ve}from"./metric-sparkline-skeleton-BmLQ7bjI.js";import{a as ye,o as be,u as C}from"./widget-state-B6SJsJzX.js";import{n as xe,r as Se}from"./with-story-router-Bwg0edRp.js";import{t as Ce}from"./monthly-heatmap-Hb_Cjsie.js";function we(e,t,n){let r=n&&w(e,n)?n.day:1,i=w(e,T(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Te(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=y(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(y(T(n)),...a.map(([e])=>e)),s=Math.max(y(T(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&y(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=y(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=we(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var w,T,Ee=e((()=>{x(),w=(e,t)=>e.year===t.year&&e.month===t.month,T=e=>({year:e.getFullYear(),month:e.getMonth()})}));function E(e){let t=l(e);return o(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function D(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Te(e,t,l(n),i);return{rows:a,lifeStartsAt:re(a,r,p())}}function O(){return s(m(),j)}function De(e,t){let n=O(),{primary:r,isLoading:i,isFetching:a,isError:o,error:c,refetch:l}=g((0,k.useMemo)(()=>({from:A,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,k.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=E(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,k.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),p=g((0,k.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?s(t,j):n;return{from:e?s(e,j):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),m=(0,k.useMemo)(()=>f((p.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[p.primary.data]),{rows:h,lifeStartsAt:_}=(0,k.useMemo)(()=>r.data?D(u,e,n,m):M,[r.data,u,e,n,m]),v=e===`average`&&!!d&&p.isLoading&&!p.primary.isFetched;return{rows:h,lifeStartsAt:_,isLoading:i||v,isFetching:a||p.isFetching,isError:o,error:c,refetch:l}}function Oe(e,t,n){let r=O(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=ne(t,{enabled:n&&t>0}),{rows:u,lifeStartsAt:d}=(0,k.useMemo)(()=>i?D(i.data.flatMap(e=>{let t=E(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,f(i.startDate??void 0)):M,[i,e,r]);return{rows:u,lifeStartsAt:d,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function ke(e,t){let n=t!==void 0,r=De(e,!n),i=Oe(e,t??0,n);return n?i:r}var k,A,j,M,Ae=e((()=>{v(),h(),x(),c(),k=t(n(),1),Ee(),A=`2005-01-01`,j=`yyyy-MM-dd`,M={rows:[],lifeStartsAt:void 0}}));function je({metric:e,authorScoped:t}){let{reportParams:n}=le(),i=t?ee(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:d,refetch:f}=ke(e,i),m=u(),{openPeriod:h}=te(),g=p(),_=(0,P.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:g},i=n===void 0?ae(e,r):ie({year:e,month:n},r);!i?.from||!i.to||(t?h?.(i):m(I,{from:i.from,to:i.to}))},[t,o,g,h,m]);if(i!==void 0&&i<=0)return(0,F.jsx)(S,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let v=l&&a.length===0;return(0,F.jsx)(S,{isLoading:s,isFetching:c,isError:v,error:v?se(d,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}):null,renderLoading:(0,F.jsx)(ve,{}),children:(0,F.jsx)(Ce,{chartTitle:r(`Views over years`,`jetpack-premium-analytics-pkg`),rows:a,...oe(e),onSelect:_})})}function N({attributes:e={}}){return(0,F.jsx)(ce,{attributes:e,children:(0,F.jsx)(je,{metric:ue(e.metric),authorScoped:e.authorScoped===!0})})}var P,F,I,Me=e((()=>{v(),h(),d(),x(),i(),P=t(n(),1),Ae(),F=a(),I=`traffic`})),L,Ne=e((()=>{L={example:{attributes:{metric:`total`}}}})),R,z,B,V,Pe,Fe,Ie,Le,Re,ze=e((()=>{R=`jpa/views-over-years`,z=`jpa/seen`,B=`Views over years`,V=`Every month of views across the whole site, one row per year.`,Pe={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Fe=`stats`,Ie=`framed`,Le=[{id:`metric`,type:`jpa/select`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],Re={name:R,icon:z,title:B,description:V,help:Pe,category:Fe,presentation:Ie,attributes:Le}}));function Be({metric:e},t=!1){return{metric:e,reportParams:_(t)}}function H(e){return(0,U.jsx)(N,{attributes:Be(e)})}function Ve({metric:e,...t}){return(0,U.jsx)(_e,{...t,widgetType:pe(Re,L),renderModule:He,renderComponent:N,attributes:Be({metric:e},!0)})}var U,He,W,G,Ue,K,q,J,Y,X,Z,Q,$;e((()=>{v(),ye(),me(),de(),xe(),fe(),Me(),Ne(),ze(),U=a(),be(),He=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ue={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:N,tags:[`autodocs`],decorators:[Se],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:H,args:{metric:`total`},decorators:[b]},q={render:H,args:{metric:`average`},decorators:[b]},J={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(C(W,`loading`),()=>C(W,null))},Y={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(C(W,`error`),()=>C(W,null))},X={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(C(W,`error-retryable`),()=>C(W,null))},Z={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[b],beforeEach:()=>(C(W,`empty`),()=>C(W,null))},Q={render:e=>(0,U.jsx)(Ve,{...e}),args:{...ge,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...he,metric:G}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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