import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Zt as s,nt as c,t as l}from"./date-fns-I6jayRk5.js";import{P as u}from"./library-DTloIBum.js";import{t as d}from"./src-fQR6rGKL.js";import{m as f,p,t as m,u as h}from"./src-rrY7vAoW.js";import{$ as g,In as _,P as v,t as y,wn as ee,xn as te}from"./src-BXGbBQuk.js";import{B as ne,H as re,K as b,L as ie,R as ae,U as oe,W as se,_ as ce,_t as le,ht as ue,pt as de,x as fe}from"./charts-provider-CPqqWd8T.js";import{a as pe}from"./metric-sparkline-skeleton-DJZdvG2u.js";import{n as me,r as he,s as x}from"./register-report-mocks-HpcX_mM9.js";import{t as ge}from"./widget-state-Ct82KwxU.js";import{n as _e,r as ve}from"./with-story-router-Beljd9ki.js";import{t as ye}from"./monthly-heatmap-CV9fUYgo.js";import{t as S}from"./src-BO6UD8Zu.js";import{a as be,g as xe,h as Se,i as Ce,m as we,n as Te,p as Ee,r as C}from"./with-widget-canvas-Bkxis0Y9.js";function De(e,t,n){let r=n&&w(e,n)?n.day:1,i=w(e,T(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Oe(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=b(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(b(T(n)),...a.map(([e])=>e)),s=Math.max(b(T(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&b(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=b(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=De(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var w,T,ke=t((()=>{S(),w=(e,t)=>e.year===t.year&&e.month===t.month,T=e=>({year:e.getFullYear(),month:e.getMonth()})}));function E(e){let t=o(e);return s(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function D(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=Oe(e,t,o(n),i);return{rows:a,lifeStartsAt:ne(a,r,f())}}function O(){return c(p(),j)}function Ae(e,t){let n=O(),{primary:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:l}=g((0,k.useMemo)(()=>({from:A,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,k.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=E(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,k.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=g((0,k.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?c(t,j):n;return{from:e?c(e,j):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,k.useMemo)(()=>h((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:m,lifeStartsAt:_}=(0,k.useMemo)(()=>r.data?D(u,e,n,p):M,[r.data,u,e,n,p]),v=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:m,lifeStartsAt:_,isLoading:i||v,isFetching:a||f.isFetching,isError:o,error:s,refetch:l}}function je(e,t,n){let r=O(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=v(t,{enabled:n&&t>0}),{rows:u,lifeStartsAt:d}=(0,k.useMemo)(()=>i?D(i.data.flatMap(e=>{let t=E(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,h(i.startDate??void 0)):M,[i,e,r]);return{rows:u,lifeStartsAt:d,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function Me(e,t){let n=t!==void 0,r=Ae(e,!n),i=je(e,t??0,n);return n?i:r}var k,A,j,M,Ne=t((()=>{y(),m(),S(),l(),k=e(n(),1),ke(),A=`2005-01-01`,j=`yyyy-MM-dd`,M={rows:[],lifeStartsAt:void 0}}));function Pe({metric:e,authorScoped:t}){let{reportParams:n}=fe(),i=t?te(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:d,refetch:p}=Me(e,i),m=le(),{openPeriod:h}=_(),g=f(),v=(0,P.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:g},i=n===void 0?ae(e,r):ie({year:e,month:n},r);!i?.from||!i.to||(t?h?.(i):m(I,{from:i.from,to:i.to}))},[t,o,g,h,m]);if(i!==void 0&&i<=0)return(0,F.jsx)(ge,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:u,description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let y=l&&a.length===0;return(0,F.jsx)(ge,{isLoading:s,isFetching:c,isError:y,error:y?de(d,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}):null,renderLoading:(0,F.jsx)(pe,{}),children:(0,F.jsx)(ye,{rows:a,...re(e),onSelect:v})})}function N({attributes:e={}}){return(0,F.jsx)(ce,{attributes:e,children:(0,F.jsx)(Pe,{metric:se(e.metric),authorScoped:e.authorScoped===!0})})}var P,F,I,Fe=t((()=>{y(),m(),d(),ue(),S(),i(),P=e(n(),1),Ne(),F=a(),I=`traffic`})),L,Ie=t((()=>{S(),L={attributes:[oe()],example:{attributes:{metric:`total`}}}})),R,z,B,Le,Re,ze,Be,Ve,He=t((()=>{R=`jpa/views-over-years`,z=`jpa/seen`,B=`Views over years`,Le=`Every month of views across the whole site, one row per year.`,Re={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},ze=`stats`,Be=`framed`,Ve={name:R,icon:z,title:B,description:Le,help:Re,category:ze,presentation:Be}}));function Ue({metric:e},t=!1){return{metric:e,reportParams:ee(t)}}function V(e){return(0,H.jsx)(N,{attributes:Ue(e)})}function We({metric:e,...t}){return(0,H.jsx)(we,{...t,widgetType:Ce(Ve,L),renderModule:U,renderComponent:N,attributes:Ue({metric:e},!0)})}var H,U,W,G,Ge,K,q,J,Y,X,Z,Q,$;t((()=>{y(),me(),Se(),be(),_e(),Te(),Fe(),Ie(),He(),H=a(),he(),U=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ge={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:N,tags:[`autodocs`],decorators:[ve],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:V,args:{metric:`total`},decorators:[C]},q={render:V,args:{metric:`average`},decorators:[C]},J={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(W,`loading`),()=>x(W,null))},Y={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(W,`error`),()=>x(W,null))},X={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(W,`error-retryable`),()=>x(W,null))},Z={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(W,`empty`),()=>x(W,null))},Q={render:e=>(0,H.jsx)(We,{...e}),args:{...Ee,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...xe,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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