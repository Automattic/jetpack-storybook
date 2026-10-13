import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Zt as s,nt as c,t as l}from"./date-fns-I6jayRk5.js";import{P as u}from"./library-DTloIBum.js";import{t as d}from"./src-fQR6rGKL.js";import{m as f,p,t as m,u as h}from"./src-rrY7vAoW.js";import{$ as g,An as ee,P as _,hn as te,t as v,vn as ne}from"./src-DJLq5FfU.js";import{B as re,H as ie,K as y,L as ae,R as oe,U as se,W as ce,_ as le,_t as ue,ht as de,pt as fe,x as pe}from"./charts-provider-5dhg-4G-.js";import{a as me}from"./metric-sparkline-skeleton-Dp9nAk77.js";import{n as he,r as ge,s as b}from"./register-report-mocks-DGd-QrT6.js";import{t as _e}from"./widget-state-D7NW9qQa.js";import{n as ve,r as ye}from"./with-story-router-Beljd9ki.js";import{t as be}from"./monthly-heatmap-aIuONp_V.js";import{t as x}from"./src-BnaNdP7Y.js";import{a as xe,g as Se,h as Ce,i as we,m as Te,n as Ee,p as De,r as S}from"./with-widget-canvas-BZBBFW1C.js";function Oe(e,t,n){let r=n&&C(e,n)?n.day:1,i=C(e,w(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function ke(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=y(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(y(w(n)),...a.map(([e])=>e)),s=Math.max(y(w(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&y(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=y(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Oe(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var C,w,Ae=t((()=>{x(),C=(e,t)=>e.year===t.year&&e.month===t.month,w=e=>({year:e.getFullYear(),month:e.getMonth()})}));function T(e){let t=o(e);return s(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function E(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=ke(e,t,o(n),i);return{rows:a,lifeStartsAt:re(a,r,f())}}function D(){return c(p(),A)}function je(e,t){let n=D(),{primary:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:l}=g((0,O.useMemo)(()=>({from:k,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,O.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=T(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,O.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=g((0,O.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?c(t,A):n;return{from:e?c(e,A):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,O.useMemo)(()=>h((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:m,lifeStartsAt:ee}=(0,O.useMemo)(()=>r.data?E(u,e,n,p):j,[r.data,u,e,n,p]),_=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:m,lifeStartsAt:ee,isLoading:i||_,isFetching:a||f.isFetching,isError:o,error:s,refetch:l}}function Me(e,t,n){let r=D(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=_(t,{enabled:n&&t>0}),{rows:u,lifeStartsAt:d}=(0,O.useMemo)(()=>i?E(i.data.flatMap(e=>{let t=T(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,h(i.startDate??void 0)):j,[i,e,r]);return{rows:u,lifeStartsAt:d,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function Ne(e,t){let n=t!==void 0,r=je(e,!n),i=Me(e,t??0,n);return n?i:r}var O,k,A,j,Pe=t((()=>{v(),m(),x(),l(),O=e(n(),1),Ae(),k=`2005-01-01`,A=`yyyy-MM-dd`,j={rows:[],lifeStartsAt:void 0}}));function Fe({metric:e,authorScoped:t}){let{reportParams:n}=pe(),i=t?te(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:d,refetch:p}=Ne(e,i),m=ue(),{openPeriod:h}=ee(),g=f(),_=(0,N.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:g},i=n===void 0?oe(e,r):ae({year:e,month:n},r);!i?.from||!i.to||(t?h?.(i):m(F,{from:i.from,to:i.to}))},[t,o,g,h,m]);if(i!==void 0&&i<=0)return(0,P.jsx)(_e,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:u,description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let v=l&&a.length===0;return(0,P.jsx)(_e,{isLoading:s,isFetching:c,isError:v,error:v?fe(d,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}):null,renderLoading:(0,P.jsx)(me,{}),children:(0,P.jsx)(be,{rows:a,...ie(e),onSelect:_})})}function M({attributes:e={}}){return(0,P.jsx)(le,{attributes:e,children:(0,P.jsx)(Fe,{metric:ce(e.metric),authorScoped:e.authorScoped===!0})})}var N,P,F,Ie=t((()=>{v(),m(),d(),de(),x(),i(),N=e(n(),1),Pe(),P=a(),F=`traffic`})),I,Le=t((()=>{x(),I={attributes:[se()],example:{attributes:{metric:`total`}}}})),L,R,z,B,Re,ze,Be,Ve,He=t((()=>{L=`jpa/views-over-years`,R=`jpa/seen`,z=`Views over years`,B=`Every month of views across the whole site, one row per year.`,Re={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},ze=`stats`,Be=`framed`,Ve={name:L,icon:R,title:z,description:B,help:Re,category:ze,presentation:Be}}));function Ue({metric:e},t=!1){return{metric:e,reportParams:ne(t)}}function V(e){return(0,H.jsx)(M,{attributes:Ue(e)})}function We({metric:e,...t}){return(0,H.jsx)(Te,{...t,widgetType:we(Ve,I),renderModule:U,renderComponent:M,attributes:Ue({metric:e},!0)})}var H,U,W,G,Ge,K,q,J,Y,X,Z,Q,$;t((()=>{v(),he(),Ce(),xe(),ve(),Ee(),Ie(),Le(),He(),H=a(),ge(),U=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ge={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:M,tags:[`autodocs`],decorators:[ye],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:V,args:{metric:`total`},decorators:[S]},q={render:V,args:{metric:`average`},decorators:[S]},J={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`loading`),()=>b(W,null))},Y={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`error`),()=>b(W,null))},X={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`error-retryable`),()=>b(W,null))},Z={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`empty`),()=>b(W,null))},Q={render:e=>(0,H.jsx)(We,{...e}),args:{...De,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...Se,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ge as default};