import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Bt as o,Ut as s,t as c,y as l}from"./date-fns-CnA56WYe.js";import{r as u,t as d}from"./src-r_vHvQoQ.js";import{d as f,f as p,o as m,t as h}from"./src-IF7Px86m.js";import{W as g,gn as _,jn as v,t as y,ut as b,yn as x}from"./src-CZL40WWg.js";import{H as ee,I as te,Ut as ne,_t as S,dt as re,f as ie,ft as C,gt as w,ht as T,lt as ae,ot as oe,pt as se,st as ce}from"./charts-provider-tm6f8w9R.js";import{t as le}from"./widget-state-CKBw0Wsm.js";import{W as ue,i as E,n as de,r as fe}from"./with-story-router-Q554LWJ5.js";import{r as pe}from"./month-calendar-heatmap-skeleton-AsX8xYg0.js";import{n as me,r as he,s as D}from"./register-report-mocks-DoU-6jmc.js";import{t as ge}from"./monthly-heatmap-CkOrlbiT.js";import{a as _e,c as ve,i as O,l as ye,o as be,r as xe,s as Se,u as Ce}from"./with-widget-canvas-DJOx4lEW.js";function we(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=w(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(w(S(n)),...a.map(([e])=>e)),s=Math.max(w(S(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&w(r)===o?r:void 0,d=[],f=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},p=w(d);if(p<o||p>s)return null;let m=i.get(p)??0,h=se(d,n,u);return r+=m,a+=h,T(d,t,n,u)&&f.push(d),t===`average`?m/h:m});d.push({year:e,months:c,total:t===`average`?r/a:r})}return{rows:d,partialMonths:f}}var Te=e((()=>{E()}));function k(e){let t=l(e);return s(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function A(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},{rows:a,partialMonths:o}=we(e,t,l(n),i);return{rows:a,partialMonths:o,lifeStartsAt:ae(a,r,p())}}function j(){return o(f(),P)}function Ee(e,t){let n=j(),{primary:r,isLoading:i,isFetching:a,isError:s,error:c,refetch:l}=b((0,M.useMemo)(()=>({from:N,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,M.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=k(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,M.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=b((0,M.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?o(t,P):n;return{from:e?o(e,P):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,M.useMemo)(()=>m((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:h,partialMonths:g,lifeStartsAt:_}=(0,M.useMemo)(()=>r.data?A(u,e,n,p):F,[r.data,u,e,n,p]),v=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:h,partialMonths:g,lifeStartsAt:_,isLoading:i||v,isFetching:a||f.isFetching,isError:s,csvIsError:s||e===`average`&&f.isError,isPlaceholderData:r.isPlaceholderData,error:c,refetch:l}}function De(e,t,n){let r=j(),{data:i,isLoading:a,isFetching:o,isError:s,isPlaceholderData:c,error:l,refetch:u}=g(t,{enabled:n&&t>0}),{rows:d,partialMonths:f,lifeStartsAt:p}=(0,M.useMemo)(()=>i?A(i.data.flatMap(e=>{let t=k(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,m(i.startDate??void 0)):F,[i,e,r]);return{rows:d,partialMonths:f,lifeStartsAt:p,isLoading:a,isFetching:o,isError:s,csvIsError:s,isPlaceholderData:c,error:l,refetch:u}}function Oe(e,t){let n=t!==void 0,r=Ee(e,!n),i=De(e,t??0,n);return n?i:r}var M,N,P,F,ke=e((()=>{y(),h(),E(),c(),M=t(n(),1),Te(),N=`2005-01-01`,P=`yyyy-MM-dd`,F={rows:[],partialMonths:[],lifeStartsAt:void 0}}));function Ae({metric:e,authorScoped:t}){let{reportParams:n}=ee(),i=t?_(n.author_id):void 0,{rows:a,partialMonths:o,lifeStartsAt:s,isLoading:c,isFetching:l,isError:d,csvIsError:f,isPlaceholderData:m,error:h,refetch:g}=Oe(e,i),y=u(),{openPeriod:b}=v(),x=p(),te=(0,L.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:s,timeZone:x},i=n===void 0?ce(e,r):oe({year:e,month:n},r);if(!i)return;let{range:a,step:o}=i;t?b?.(a,{step:o}):y(z,a,{step:o})},[t,s,x,b,y]),S=(0,L.useMemo)(()=>ue(a.some(e=>e.months.some(e=>(e??0)>0))?a:[]),[a]),C=(0,L.useMemo)(()=>a.map(e=>({...e,months:e.months.map(e=>typeof e==`number`?Math.round(e):e),total:typeof e.total==`number`?Math.round(e.total):e.total})),[a]),w=e===`average`?`daily-average-views-over-years`:`views-over-years`;if(ie({csv:{...S,filenamePrefix:i?`author-${i}-${w}`:w,hasDateRange:!1,status:{isLoading:c,isFetching:l,isError:f,isPlaceholderData:m}}}),i!==void 0&&i<=0)return(0,R.jsx)(le,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let T=d&&a.length===0;return(0,R.jsx)(le,{isLoading:c,isFetching:l,isError:T,error:T?ne(h,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}):null,renderLoading:(0,R.jsx)(pe,{}),children:(0,R.jsx)(ge,{rows:C,partialMonths:o,...re(e),scale:`buckets`,onSelect:te})})}function I({attributes:e={}}){return(0,R.jsx)(te,{attributes:e,children:(0,R.jsx)(Ae,{metric:C(e.metric),authorScoped:e.authorScoped===!0})})}var L,R,z,je=e((()=>{y(),h(),d(),E(),i(),L=t(n(),1),ke(),R=a(),z=`traffic`})),B,Me=e((()=>{B={example:{attributes:{metric:`total`}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Ne=`jpa/views-over-years`,Pe=`jpa/seen`,Fe=`Views over years`,Ie=`Every month of views across the whole site, one row per year.`,Le={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Re=`stats`,ze=`framed`,Be=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],Ve={name:Ne,icon:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze,attributes:Be}}));function Ue({metric:e},t=!1){return{metric:e,reportParams:x(t)}}function V(e){return(0,H.jsx)(I,{attributes:Ue(e)})}function We({metric:e,...t}){return(0,H.jsx)(ve,{...t,widgetType:_e(Ve,B),renderModule:U,renderComponent:I,attributes:Ue({metric:e},!0)})}var H,U,W,G,Ge,K,q,J,Y,X,Z,Q,$;e((()=>{y(),me(),ye(),be(),de(),xe(),je(),Me(),He(),H=a(),he(),U=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ge={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:I,tags:[`autodocs`],decorators:[fe],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:V,args:{metric:`total`},decorators:[O]},q={render:V,args:{metric:`average`},decorators:[O]},J={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(D(W,`loading`),()=>D(W,null))},Y={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(D(W,`error`),()=>D(W,null))},X={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(D(W,`error-retryable`),()=>D(W,null))},Z={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[O],beforeEach:()=>(D(W,`empty`),()=>D(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(We,{...e}),args:{...Se,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...Ce,metric:G}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}}}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ge as default};