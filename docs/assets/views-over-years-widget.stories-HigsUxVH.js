import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-DNhkEVJn.js";import{C as c,Zt as l,nt as u,t as d}from"./date-fns-I6jayRk5.js";import{M as f,t as p}from"./src-DzwlO62w.js";import{m,p as h,t as g,u as _}from"./src-rrY7vAoW.js";import{$ as v,In as ee,Jn as te,Nn as ne,P as re,t as y}from"./src-ckB9686_.js";import{B as ie,F as ae,H as oe,I as se,R as ce,V as le,W as b,_ as ue,dt as de,ht as fe,pt as pe,x as me}from"./charts-provider-BXXbDOcW.js";import{a as he}from"./metric-sparkline-skeleton-Df9G0o8S.js";import{n as ge,r as _e,s as x}from"./register-report-mocks-DbShhgbf.js";import{t as S}from"./widget-state-nG6fVhyr.js";import{n as ve,r as ye}from"./with-story-router-Beljd9ki.js";import{t as be}from"./monthly-heatmap-CbDstBWc.js";import{t as C}from"./src-BJHZQ68Y.js";import{a as xe,g as Se,h as Ce,i as we,m as Te,n as Ee,p as De,r as w}from"./with-widget-canvas-BuSIbRsU.js";function Oe(e,t,n){let r=n&&T(e,n)?n.day:1,i=T(e,E(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function ke(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=b(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(b(E(n)),...a.map(([e])=>e)),s=Math.max(b(E(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&b(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=b(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Oe(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var T,E,Ae=t((()=>{C(),T=(e,t)=>e.year===t.year&&e.month===t.month,E=e=>({year:e.getFullYear(),month:e.getMonth()})}));function D(e){let t=c(e);return l(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function O(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=ke(e,t,c(n),i);return{rows:a,lifeStartsAt:ce(a,r,m())}}function k(){return u(h(),M)}function je(e,t){let n=k(),{primary:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=v((0,A.useMemo)(()=>({from:j,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),l=(0,A.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=D(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,A.useMemo)(()=>l.find(({views:e})=>e>0)?.month,[l]),f=v((0,A.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?u(t,M):n;return{from:e?u(e,M):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,A.useMemo)(()=>_((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:m,lifeStartsAt:h}=(0,A.useMemo)(()=>r.data?O(l,e,n,p):N,[r.data,l,e,n,p]),g=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:m,lifeStartsAt:h,isLoading:i||g,isFetching:a||f.isFetching,isError:o,error:s,refetch:c}}function Me(e,t,n){let r=k(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=re(t,{enabled:n&&t>0}),{rows:u,lifeStartsAt:d}=(0,A.useMemo)(()=>i?O(i.data.flatMap(e=>{let t=D(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,_(i.startDate??void 0)):N,[i,e,r]);return{rows:u,lifeStartsAt:d,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function Ne(e,t){let n=t!==void 0,r=je(e,!n),i=Me(e,t??0,n);return n?i:r}var A,j,M,N,Pe=t((()=>{y(),g(),C(),d(),A=e(n(),1),Ae(),j=`2005-01-01`,M=`yyyy-MM-dd`,N={rows:[],lifeStartsAt:void 0}}));function Fe({metric:e,authorScoped:t}){let{reportParams:n}=me(),i=t?ne(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=Ne(e,i),p=fe(),{openPeriod:h}=te(),g=m(),_=(0,F.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:g},i=n===void 0?se(e,r):ae({year:e,month:n},r);!i?.from||!i.to||(t?h?.(i):p(L,{from:i.from,to:i.to}))},[t,o,g,h,p]);if(i!==void 0&&i<=0)return(0,I.jsx)(S,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:f,description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let v=l&&a.length===0;return(0,I.jsx)(S,{isLoading:s,isFetching:c,isError:v,error:v?de(u,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}):null,renderLoading:(0,I.jsx)(he,{}),children:(0,I.jsx)(be,{rows:a,...ie(e),onSelect:_})})}function P({attributes:e={}}){return(0,I.jsx)(ue,{attributes:e,children:(0,I.jsx)(Fe,{metric:oe(e.metric),authorScoped:e.authorScoped===!0})})}var F,I,L,Ie=t((()=>{y(),g(),p(),pe(),C(),i(),F=e(n(),1),Pe(),I=a(),L=`traffic`})),R,Le=t((()=>{C(),s(),R={icon:o,attributes:[le()],example:{attributes:{metric:`total`}}}})),z,B,V,Re,ze,Be,Ve,He=t((()=>{z=`jpa/views-over-years`,B=`Views over years`,V=`Every month of views across the whole site, one row per year.`,Re={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},ze=`stats`,Be=`framed`,Ve={name:z,title:B,description:V,help:Re,category:ze,presentation:Be}}));function Ue({metric:e},t=!1){return{metric:e,reportParams:ee(t)}}function H(e){return(0,U.jsx)(P,{attributes:Ue(e)})}function We({metric:e,...t}){return(0,U.jsx)(Te,{...t,widgetType:we(Ve,R),renderModule:Ge,renderComponent:P,attributes:Ue({metric:e},!0)})}var U,Ge,W,G,Ke,K,q,J,Y,X,Z,Q,$;t((()=>{y(),ge(),Ce(),xe(),ve(),Ee(),Ie(),Le(),He(),U=a(),_e(),Ge=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ke={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:P,tags:[`autodocs`],decorators:[ye],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:H,args:{metric:`total`},decorators:[w]},q={render:H,args:{metric:`average`},decorators:[w]},J={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(x(W,`loading`),()=>x(W,null))},Y={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(x(W,`error`),()=>x(W,null))},X={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(x(W,`error-retryable`),()=>x(W,null))},Z={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(x(W,`empty`),()=>x(W,null))},Q={render:e=>(0,U.jsx)(We,{...e}),args:{...De,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...Se,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ke as default};