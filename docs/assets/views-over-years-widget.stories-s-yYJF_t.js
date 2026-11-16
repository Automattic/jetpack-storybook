import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Bt as o,Ut as s,t as c,y as l}from"./date-fns-CnA56WYe.js";import{r as u,t as d}from"./src-DOjbQ12R.js";import{d as f,f as p,o as m,t as h}from"./src-BIdiSPkW.js";import{W as g,gn as _,jn as ee,t as v,ut as y,yn as b}from"./src-52cnEbCc.js";import{H as te,I as ne,Ut as re,_t as ie,dt as ae,ft as oe,gt as x,ht as se,lt as ce,ot as le,pt as ue,st as de}from"./charts-provider-8iSbd7Wu.js";import{t as fe}from"./widget-state-CJYDRMPt.js";import{i as S,n as pe,r as me}from"./with-story-router-ytULxVcN.js";import{r as he}from"./month-calendar-heatmap-skeleton-CsrDqU-N.js";import{n as ge,r as _e,s as C}from"./register-report-mocks-BlzsUi-e.js";import{t as ve}from"./monthly-heatmap-R9EnblgM.js";import{a as ye,c as be,i as w,l as xe,o as Se,r as Ce,s as we,u as Te}from"./with-widget-canvas-mtPFqW2o.js";function Ee(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=x(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(x(ie(n)),...a.map(([e])=>e)),s=Math.max(x(ie(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&x(r)===o?r:void 0,d=[],f=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},p=x(d);if(p<o||p>s)return null;let m=i.get(p)??0,h=ue(d,n,u);return r+=m,a+=h,se(d,t,n,u)&&f.push(d),t===`average`?Math.round(m/h):m});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return{rows:d,partialMonths:f}}var De=e((()=>{S()}));function T(e){let t=l(e);return s(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function E(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},{rows:a,partialMonths:o}=Ee(e,t,l(n),i);return{rows:a,partialMonths:o,lifeStartsAt:ce(a,r,p())}}function D(){return o(f(),A)}function Oe(e,t){let n=D(),{primary:r,isLoading:i,isFetching:a,isError:s,error:c,refetch:l}=y((0,O.useMemo)(()=>({from:k,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,O.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=T(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,O.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=y((0,O.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?o(t,A):n;return{from:e?o(e,A):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,O.useMemo)(()=>m((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:h,partialMonths:g,lifeStartsAt:_}=(0,O.useMemo)(()=>r.data?E(u,e,n,p):j,[r.data,u,e,n,p]),ee=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:h,partialMonths:g,lifeStartsAt:_,isLoading:i||ee,isFetching:a||f.isFetching,isError:s,error:c,refetch:l}}function ke(e,t,n){let r=D(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=g(t,{enabled:n&&t>0}),{rows:u,partialMonths:d,lifeStartsAt:f}=(0,O.useMemo)(()=>i?E(i.data.flatMap(e=>{let t=T(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,m(i.startDate??void 0)):j,[i,e,r]);return{rows:u,partialMonths:d,lifeStartsAt:f,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function Ae(e,t){let n=t!==void 0,r=Oe(e,!n),i=ke(e,t??0,n);return n?i:r}var O,k,A,j,je=e((()=>{v(),h(),S(),c(),O=t(n(),1),De(),k=`2005-01-01`,A=`yyyy-MM-dd`,j={rows:[],partialMonths:[],lifeStartsAt:void 0}}));function Me({metric:e,authorScoped:t}){let{reportParams:n}=te(),i=t?_(n.author_id):void 0,{rows:a,partialMonths:o,lifeStartsAt:s,isLoading:c,isFetching:l,isError:d,error:f,refetch:m}=Ae(e,i),h=u(),{openPeriod:g}=ee(),v=p(),y=(0,N.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:s,timeZone:v},i=n===void 0?de(e,r):le({year:e,month:n},r);!i?.from||!i.to||(t?g?.(i):h(F,{from:i.from,to:i.to}))},[t,s,v,g,h]);if(i!==void 0&&i<=0)return(0,P.jsx)(fe,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let b=d&&a.length===0;return(0,P.jsx)(fe,{isLoading:c,isFetching:l,isError:b,error:b?re(f,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}):null,renderLoading:(0,P.jsx)(he,{}),children:(0,P.jsx)(ve,{rows:a,partialMonths:o,...ae(e),scale:`buckets`,onSelect:y})})}function M({attributes:e={}}){return(0,P.jsx)(ne,{attributes:e,children:(0,P.jsx)(Me,{metric:oe(e.metric),authorScoped:e.authorScoped===!0})})}var N,P,F,Ne=e((()=>{v(),h(),d(),S(),i(),N=t(n(),1),je(),P=a(),F=`traffic`})),I,Pe=e((()=>{I={example:{attributes:{metric:`total`}}}})),L,R,z,B,V,Fe,Ie,Le,Re,ze=e((()=>{L=`jpa/views-over-years`,R=`jpa/seen`,z=`Views over years`,B=`Every month of views across the whole site, one row per year.`,V={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Fe=`stats`,Ie=`framed`,Le=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],Re={name:L,icon:R,title:z,description:B,help:V,category:Fe,presentation:Ie,attributes:Le}}));function Be({metric:e},t=!1){return{metric:e,reportParams:b(t)}}function H(e){return(0,U.jsx)(M,{attributes:Be(e)})}function Ve({metric:e,...t}){return(0,U.jsx)(be,{...t,widgetType:ye(Re,I),renderModule:He,renderComponent:M,attributes:Be({metric:e},!0)})}var U,He,W,G,Ue,K,q,J,Y,X,Z,Q,$;e((()=>{v(),ge(),xe(),Se(),pe(),Ce(),Ne(),Pe(),ze(),U=a(),_e(),He=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ue={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:M,tags:[`autodocs`],decorators:[me],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:H,args:{metric:`total`},decorators:[w]},q={render:H,args:{metric:`average`},decorators:[w]},J={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(W,`loading`),()=>C(W,null))},Y={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(W,`error`),()=>C(W,null))},X={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(W,`error-retryable`),()=>C(W,null))},Z={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(C(W,`empty`),()=>C(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(Ve,{...e}),args:{...we,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...Te,metric:G}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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