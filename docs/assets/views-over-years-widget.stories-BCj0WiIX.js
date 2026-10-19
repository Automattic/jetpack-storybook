import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Lt as o,Pt as s,t as c,y as l}from"./date-fns-CHwAqcMr.js";import{d as u,h as d,m as f,t as p}from"./src-BGYQLfcD.js";import{L as m,cn as ee,dn as h,it as g,t as _,yn as te}from"./src-BE2RxwT8.js";import{B as ne,H as re,K as v,L as ie,R as ae,U as oe,W as se,gt as ce,m as le,v as ue}from"./charts-provider-BeJ3bTFr.js";import{a as de,r as fe}from"./use-track-event-C1CDxHsi.js";import{a as pe}from"./metric-sparkline-skeleton-DSwWkF9Y.js";import{n as me,r as he,s as y}from"./register-report-mocks-C9HMC87W.js";import{t as b}from"./widget-state-CaMvP3kz.js";import{n as ge,r as _e}from"./with-story-router-B8AmDh4M.js";import{t as ve}from"./monthly-heatmap-DYSuvEQg.js";import{t as x}from"./src-CrQaC0Kl.js";import{a as ye,g as be,h as xe,i as Se,m as Ce,n as we,p as Te,r as S}from"./with-widget-canvas-C89hLCT2.js";function Ee(e,t,n){let r=n&&C(e,n)?n.day:1,i=C(e,w(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function De(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=v(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(v(w(n)),...a.map(([e])=>e)),s=Math.max(v(w(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&v(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=v(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Ee(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var C,w,Oe=t((()=>{x(),C=(e,t)=>e.year===t.year&&e.month===t.month,w=e=>({year:e.getFullYear(),month:e.getMonth()})}));function T(e){let t=l(e);return o(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function E(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=De(e,t,l(n),i);return{rows:a,lifeStartsAt:ne(a,r,d())}}function D(){return s(f(),A)}function ke(e,t){let n=D(),{primary:r,isLoading:i,isFetching:a,isError:o,error:c,refetch:l}=g((0,O.useMemo)(()=>({from:k,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),d=(0,O.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=T(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),f=(0,O.useMemo)(()=>d.find(({views:e})=>e>0)?.month,[d]),p=g((0,O.useMemo)(()=>{let e=f?new Date(f.year,f.month,1):void 0,t=f?new Date(f.year,f.month+1,0):void 0,r=t?s(t,A):n;return{from:e?s(e,A):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[f,n]),{enabled:t&&!!f}),m=(0,O.useMemo)(()=>u((p.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[p.primary.data]),{rows:ee,lifeStartsAt:h}=(0,O.useMemo)(()=>r.data?E(d,e,n,m):j,[r.data,d,e,n,m]),_=e===`average`&&!!f&&p.isLoading&&!p.primary.isFetched;return{rows:ee,lifeStartsAt:h,isLoading:i||_,isFetching:a||p.isFetching,isError:o,error:c,refetch:l}}function Ae(e,t,n){let r=D(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=m(t,{enabled:n&&t>0}),{rows:d,lifeStartsAt:f}=(0,O.useMemo)(()=>i?E(i.data.flatMap(e=>{let t=T(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,u(i.startDate??void 0)):j,[i,e,r]);return{rows:d,lifeStartsAt:f,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function je(e,t){let n=t!==void 0,r=ke(e,!n),i=Ae(e,t??0,n);return n?i:r}var O,k,A,j,Me=t((()=>{_(),p(),x(),c(),O=e(n(),1),Oe(),k=`2005-01-01`,A=`yyyy-MM-dd`,j={rows:[],lifeStartsAt:void 0}}));function Ne({metric:e,authorScoped:t}){let{reportParams:n}=ue(),i=t?ee(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:u,refetch:f}=je(e,i),p=de(),{openPeriod:m}=te(),h=d(),g=(0,N.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:h},i=n===void 0?ae(e,r):ie({year:e,month:n},r);!i?.from||!i.to||(t?m?.(i):p(F,{from:i.from,to:i.to}))},[t,o,h,m,p]);if(i!==void 0&&i<=0)return(0,P.jsx)(b,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let _=l&&a.length===0;return(0,P.jsx)(b,{isLoading:s,isFetching:c,isError:_,error:_?ce(u,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}):null,renderLoading:(0,P.jsx)(pe,{}),children:(0,P.jsx)(ve,{chartTitle:r(`Views over years`,`jetpack-premium-analytics-pkg`),rows:a,...re(e),onSelect:g})})}function M({attributes:e={}}){return(0,P.jsx)(le,{attributes:e,children:(0,P.jsx)(Ne,{metric:se(e.metric),authorScoped:e.authorScoped===!0})})}var N,P,F,Pe=t((()=>{_(),p(),fe(),x(),i(),N=e(n(),1),Me(),P=a(),F=`traffic`})),I,Fe=t((()=>{x(),I={attributes:[oe()],example:{attributes:{metric:`total`}}}})),L,R,z,B,V,Ie,Le,Re,ze=t((()=>{L=`jpa/views-over-years`,R=`jpa/seen`,z=`Views over years`,B=`Every month of views across the whole site, one row per year.`,V={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Ie=`stats`,Le=`framed`,Re={name:L,icon:R,title:z,description:B,help:V,category:Ie,presentation:Le}}));function Be({metric:e},t=!1){return{metric:e,reportParams:h(t)}}function H(e){return(0,U.jsx)(M,{attributes:Be(e)})}function Ve({metric:e,...t}){return(0,U.jsx)(Ce,{...t,widgetType:Se(Re,I),renderModule:He,renderComponent:M,attributes:Be({metric:e},!0)})}var U,He,W,G,Ue,K,q,J,Y,X,Z,Q,$;t((()=>{_(),me(),xe(),ye(),ge(),we(),Pe(),Fe(),ze(),U=a(),he(),He=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ue={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:M,tags:[`autodocs`],decorators:[_e],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:H,args:{metric:`total`},decorators:[S]},q={render:H,args:{metric:`average`},decorators:[S]},J={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`loading`),()=>y(W,null))},Y={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`error`),()=>y(W,null))},X={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`error-retryable`),()=>y(W,null))},Z={render:H,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(W,`empty`),()=>y(W,null))},Q={render:e=>(0,U.jsx)(Ve,{...e}),args:{...Te,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...be,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ue as default};