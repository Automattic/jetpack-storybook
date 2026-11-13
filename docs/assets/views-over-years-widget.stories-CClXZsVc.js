import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Bt as o,Ut as s,t as c,y as l}from"./date-fns-CnA56WYe.js";import{r as u,t as d}from"./src-DOjbQ12R.js";import{d as f,f as p,o as m,t as h}from"./src-BIdiSPkW.js";import{W as g,gn as ee,jn as te,t as _,ut as v,yn as ne}from"./src-52cnEbCc.js";import{Bt as re,H as ie,I as ae,dt as oe,ft as se,lt as ce,mt as y,ot as le,st as ue}from"./charts-provider-QtJ9qbIH.js";import{t as de}from"./widget-state-CIbtadTL.js";import{i as b,n as fe,r as pe}from"./with-story-router-C_tyrWZj.js";import{r as me}from"./month-calendar-heatmap-skeleton-D17Jfy2W.js";import{n as he,r as ge,s as x}from"./register-report-mocks-BlzsUi-e.js";import{t as _e}from"./monthly-heatmap-BnXcQzXb.js";import{a as ve,c as ye,i as S,l as be,o as xe,r as Se,s as Ce,u as we}from"./with-widget-canvas-FKG_6qtM.js";function Te(e,t,n){let r=n&&C(e,n)?n.day:1,i=C(e,w(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Ee(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=y(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(y(w(n)),...a.map(([e])=>e)),s=Math.max(y(w(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&y(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=y(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Te(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var C,w,De=e((()=>{b(),C=(e,t)=>e.year===t.year&&e.month===t.month,w=e=>({year:e.getFullYear(),month:e.getMonth()})}));function T(e){let t=l(e);return s(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function E(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Ee(e,t,l(n),i);return{rows:a,lifeStartsAt:ce(a,r,p())}}function D(){return o(f(),A)}function Oe(e,t){let n=D(),{primary:r,isLoading:i,isFetching:a,isError:s,error:c,refetch:l}=v((0,O.useMemo)(()=>({from:k,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,O.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=T(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,O.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=v((0,O.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?o(t,A):n;return{from:e?o(e,A):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,O.useMemo)(()=>m((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:h,lifeStartsAt:g}=(0,O.useMemo)(()=>r.data?E(u,e,n,p):j,[r.data,u,e,n,p]),ee=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:h,lifeStartsAt:g,isLoading:i||ee,isFetching:a||f.isFetching,isError:s,error:c,refetch:l}}function ke(e,t,n){let r=D(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=g(t,{enabled:n&&t>0}),{rows:u,lifeStartsAt:d}=(0,O.useMemo)(()=>i?E(i.data.flatMap(e=>{let t=T(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,m(i.startDate??void 0)):j,[i,e,r]);return{rows:u,lifeStartsAt:d,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function Ae(e,t){let n=t!==void 0,r=Oe(e,!n),i=ke(e,t??0,n);return n?i:r}var O,k,A,j,je=e((()=>{_(),h(),b(),c(),O=t(n(),1),De(),k=`2005-01-01`,A=`yyyy-MM-dd`,j={rows:[],lifeStartsAt:void 0}}));function Me({metric:e,authorScoped:t}){let{reportParams:n}=ie(),i=t?ee(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:d,refetch:f}=Ae(e,i),m=u(),{openPeriod:h}=te(),g=p(),_=(0,N.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:g},i=n===void 0?ue(e,r):le({year:e,month:n},r);!i?.from||!i.to||(t?h?.(i):m(F,{from:i.from,to:i.to}))},[t,o,g,h,m]);if(i!==void 0&&i<=0)return(0,P.jsx)(de,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let v=l&&a.length===0;return(0,P.jsx)(de,{isLoading:s,isFetching:c,isError:v,error:v?re(d,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}):null,renderLoading:(0,P.jsx)(me,{}),children:(0,P.jsx)(_e,{rows:a,...oe(e),onSelect:_})})}function M({attributes:e={}}){return(0,P.jsx)(ae,{attributes:e,children:(0,P.jsx)(Me,{metric:se(e.metric),authorScoped:e.authorScoped===!0})})}var N,P,F,Ne=e((()=>{_(),h(),d(),b(),i(),N=t(n(),1),je(),P=a(),F=`traffic`})),Pe,Fe=e((()=>{Pe={example:{attributes:{metric:`total`}}}})),I,L,R,z,B,Ie,Le,Re,ze,Be=e((()=>{I=`jpa/views-over-years`,L=`jpa/seen`,R=`Views over years`,z=`Every month of views across the whole site, one row per year.`,B={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Ie=`stats`,Le=`framed`,Re=[{id:`metric`,type:`jpa/select`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],ze={name:I,icon:L,title:R,description:z,help:B,category:Ie,presentation:Le,attributes:Re}}));function Ve({metric:e},t=!1){return{metric:e,reportParams:ne(t)}}function V(e){return(0,H.jsx)(M,{attributes:Ve(e)})}function He({metric:e,...t}){return(0,H.jsx)(ye,{...t,widgetType:ve(ze,Pe),renderModule:U,renderComponent:M,attributes:Ve({metric:e},!0)})}var H,U,W,G,Ue,K,q,J,Y,X,Z,Q,$;e((()=>{_(),he(),be(),xe(),fe(),Se(),Ne(),Fe(),Be(),H=a(),ge(),U=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ue={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:M,tags:[`autodocs`],decorators:[pe],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:V,args:{metric:`total`},decorators:[S]},q={render:V,args:{metric:`average`},decorators:[S]},J={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(W,`loading`),()=>x(W,null))},Y={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(W,`error`),()=>x(W,null))},X={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(W,`error-retryable`),()=>x(W,null))},Z={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(W,`empty`),()=>x(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(He,{...e}),args:{...Ce,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...we,metric:G}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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