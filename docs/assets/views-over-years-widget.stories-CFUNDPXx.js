import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Gt as o,Ht as s,t as c,y as l}from"./date-fns-BUjRnB2M.js";import{r as u,t as d}from"./src-CSgqZE6U.js";import{d as f,f as p,o as m,t as h}from"./src-CUJg-cBz.js";import{Nn as g,pt as _,q as v,t as y,vn as ee,xn as b}from"./src-DgrVShoY.js";import{H as te,I as ne,Ut as re,_t as x,dt as ie,f as ae,ft as S,gt as C,ht as w,lt as oe,ot as se,pt as ce,st as le}from"./charts-provider-CLocvFsk.js";import{t as ue}from"./widget-state-DFMNGNCy.js";import{W as de,i as T,n as fe,r as pe}from"./with-story-router-Dnw9-9Hh.js";import{r as me}from"./month-calendar-heatmap-skeleton-B3ojrfAQ.js";import{n as he,r as ge,s as E}from"./register-report-mocks-CrVN9qSY.js";import{t as _e}from"./monthly-heatmap-ClNP7BcZ.js";import{a as ve,c as ye,i as D,l as be,o as xe,r as Se,s as Ce,u as we}from"./with-widget-canvas-DXG0CNaW.js";function Te(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=C(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(C(x(n)),...a.map(([e])=>e)),s=Math.max(C(x(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&C(r)===o?r:void 0,d=[],f=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},p=C(d);if(p<o||p>s)return null;let m=i.get(p)??0,h=ce(d,n,u);return r+=m,a+=h,w(d,t,n,u)&&f.push(d),t===`average`?m/h:m});d.push({year:e,months:c,total:t===`average`?r/a:r})}return{rows:d,partialMonths:f}}var Ee=e((()=>{T()}));function O(e){let t=l(e);return o(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function k(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},{rows:a,partialMonths:o}=Te(e,t,l(n),i);return{rows:a,partialMonths:o,lifeStartsAt:oe(a,r,p())}}function A(){return s(f(),N)}function De(e,t){let n=A(),{primary:r,isLoading:i,isFetching:a,isError:o,error:c,refetch:l}=_((0,j.useMemo)(()=>({from:M,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,j.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=O(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,j.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=_((0,j.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?s(t,N):n;return{from:e?s(e,N):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,j.useMemo)(()=>m((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:h,partialMonths:g,lifeStartsAt:v}=(0,j.useMemo)(()=>r.data?k(u,e,n,p):P,[r.data,u,e,n,p]),y=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:h,partialMonths:g,lifeStartsAt:v,isLoading:i||y,isFetching:a||f.isFetching,isError:o,csvIsError:o||e===`average`&&f.isError,isPlaceholderData:r.isPlaceholderData,error:c,refetch:l}}function Oe(e,t,n){let r=A(),{data:i,isLoading:a,isFetching:o,isError:s,isPlaceholderData:c,error:l,refetch:u}=v(t,{enabled:n&&t>0}),{rows:d,partialMonths:f,lifeStartsAt:p}=(0,j.useMemo)(()=>i?k(i.data.flatMap(e=>{let t=O(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,m(i.startDate??void 0)):P,[i,e,r]);return{rows:d,partialMonths:f,lifeStartsAt:p,isLoading:a,isFetching:o,isError:s,csvIsError:s,isPlaceholderData:c,error:l,refetch:u}}function ke(e,t){let n=t!==void 0,r=De(e,!n),i=Oe(e,t??0,n);return n?i:r}var j,M,N,P,Ae=e((()=>{y(),h(),T(),c(),j=t(n(),1),Ee(),M=`2005-01-01`,N=`yyyy-MM-dd`,P={rows:[],partialMonths:[],lifeStartsAt:void 0}}));function je({metric:e,authorScoped:t}){let{reportParams:n}=te(),i=t?ee(n.author_id):void 0,{rows:a,partialMonths:o,lifeStartsAt:s,isLoading:c,isFetching:l,isError:d,csvIsError:f,isPlaceholderData:m,error:h,refetch:_}=ke(e,i),v=u(),{openPeriod:y}=g(),b=p(),ne=(0,I.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:s,timeZone:b},i=n===void 0?le(e,r):se({year:e,month:n},r);if(!i)return;let{range:a,step:o}=i;t?y?.(a,{step:o}):v(R,a,{step:o})},[t,s,b,y,v]),x=(0,I.useMemo)(()=>de(a.some(e=>e.months.some(e=>(e??0)>0))?a:[]),[a]),S=(0,I.useMemo)(()=>a.map(e=>({...e,months:e.months.map(e=>typeof e==`number`?Math.round(e):e),total:typeof e.total==`number`?Math.round(e.total):e.total})),[a]),C=e===`average`?`daily-average-views-over-years`:`views-over-years`;if(ae({csv:{...x,filenamePrefix:i?`author-${i}-${C}`:C,hasDateRange:!1,status:{isLoading:c,isFetching:l,isError:f,isPlaceholderData:m}}}),i!==void 0&&i<=0)return(0,L.jsx)(ue,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let w=d&&a.length===0;return(0,L.jsx)(ue,{isLoading:c,isFetching:l,isError:w,error:w?re(h,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}):null,renderLoading:(0,L.jsx)(me,{}),children:(0,L.jsx)(_e,{rows:S,partialMonths:o,...ie(e),scale:`buckets`,onSelect:ne})})}function F({attributes:e={}}){return(0,L.jsx)(ne,{attributes:e,children:(0,L.jsx)(je,{metric:S(e.metric),authorScoped:e.authorScoped===!0})})}var I,L,R,Me=e((()=>{y(),h(),d(),T(),i(),I=t(n(),1),Ae(),L=a(),R=`traffic`})),z,Ne=e((()=>{z={example:{attributes:{metric:`total`}}}})),B,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{B=`jpa/views-over-years`,Pe=`jpa/seen`,Fe=`Views over years`,Ie=`Every month of views across the whole site, one row per year.`,Le={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Re=`stats`,ze=`framed`,Be=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],Ve={name:B,icon:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze,attributes:Be}}));function Ue({metric:e},t=!1){return{metric:e,reportParams:b(t)}}function V(e){return(0,H.jsx)(F,{attributes:Ue(e)})}function We({metric:e,...t}){return(0,H.jsx)(ye,{...t,widgetType:ve(Ve,z),renderModule:U,renderComponent:F,attributes:Ue({metric:e},!0)})}var H,U,W,G,Ge,K,q,J,Y,X,Z,Q,$;e((()=>{y(),he(),be(),xe(),fe(),Se(),Me(),Ne(),He(),H=a(),ge(),U=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ge={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:F,tags:[`autodocs`],decorators:[pe],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:V,args:{metric:`total`},decorators:[D]},q={render:V,args:{metric:`average`},decorators:[D]},J={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(W,`loading`),()=>E(W,null))},Y={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(W,`error`),()=>E(W,null))},X={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(W,`error-retryable`),()=>E(W,null))},Z={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[D],beforeEach:()=>(E(W,`empty`),()=>E(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(We,{...e}),args:{...Ce,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...we,metric:G}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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