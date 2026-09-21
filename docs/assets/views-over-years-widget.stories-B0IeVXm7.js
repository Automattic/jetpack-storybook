import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-2iv4IIRq.js";import{C as c,Zt as l,nt as u,t as d}from"./date-fns-D_SPQh_w.js";import{B as f,Ct as p,F as m,H as h,I as g,R as _,V as ee,W as v,ct as te,m as ne,ut as re}from"./hooks-CwCHP3g5.js";import{m as ie,p as ae,t as oe,u as se}from"./src-CJGEmgc4.js";import{R as ce,r as y,tn as le}from"./date-period-dropdown-sX0CHHNB.js";import{a as ue}from"./metric-sparkline-skeleton-CGAKTFCF.js";import{t as de}from"./monthly-heatmap-VWBx1q_D.js";import{c as b,i as fe,r as pe}from"./register-report-mocks-RKfvsOAs.js";import{t as me}from"./widget-state-yuukNQwR.js";import{t as x}from"./src-CICWUK9_.js";import{a as he,c as ge,d as _e,i as ve,l as ye,n as be,o as xe,r as S,s as Se,u as Ce}from"./with-widget-canvas-DgSSAX4P.js";function we(e,t,n){let r=n&&C(e,n)?n.day:1,i=C(e,w(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Te(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=v(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0);if(a.length===0)return[];let o=Math.min(...a.map(([e])=>e)),s=Math.max(v(w(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&v(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=v(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=we(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var C,w,Ee=t((()=>{x(),C=(e,t)=>e.year===t.year&&e.month===t.month,w=e=>({year:e.getFullYear(),month:e.getMonth()})}));function De(e){let t=c(e);return l(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function Oe(e){let t=u(ae(),D),{primary:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=ce((0,T.useMemo)(()=>({from:E,to:t,interval:`month`,period:`month`,stat_fields:`views`}),[t])),l=(0,T.useMemo)(()=>(n.data?.data??[]).flatMap(e=>{let t=De(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[n.data]),d=(0,T.useMemo)(()=>l.find(({views:e})=>e>0)?.month,[l]),f=ce((0,T.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,n=d?new Date(d.year,d.month+1,0):void 0,r=n?u(n,D):t;return{from:e?u(e,D):t,to:r<t?r:t,interval:`day`,period:`day`,stat_fields:`views`}},[d,t]),{enabled:!!d}),p=(0,T.useMemo)(()=>se((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:m,lifeStartsAt:h}=(0,T.useMemo)(()=>{let n=p&&{year:p.getFullYear(),month:p.getMonth(),day:p.getDate()},r=Te(l,e,c(t),n);return{rows:r,lifeStartsAt:_(r,p,ie())}},[l,e,t,p]),g=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:m,lifeStartsAt:h,isLoading:r||g,isFetching:i||f.isFetching,isError:a,error:o,refetch:s}}var T,E,D,ke=t((()=>{y(),oe(),x(),d(),T=e(n(),1),Ee(),E=`2005-01-01`,D=`yyyy-MM-dd`}));function Ae({metric:e}){let{rows:t,lifeStartsAt:n,isLoading:i,isFetching:a,isError:s,error:c,refetch:l}=Oe(e),u=re(),d=ie(),h=(0,k.useCallback)(({year:e,month:t})=>{let r={lifeStartsAt:n,timeZone:d},i=t===void 0?g(e,r):m({year:e,month:t},r);i?.from&&i.to&&u(j,{from:i.from,to:i.to})},[n,d,u]),_=s&&t.length===0;return(0,A.jsx)(me,{isLoading:i,isFetching:a,isError:_,isEmpty:t.length===0,error:_?p(c,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}):null,empty:{icon:o,description:r(`No views yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ue,{}),children:(0,A.jsx)(de,{rows:t,...f(e),onSelect:h})})}function O({attributes:e={}}){return(0,A.jsx)(ne,{attributes:e,children:(0,A.jsx)(Ae,{metric:h(e.metric)})})}var k,A,j,je=t((()=>{oe(),te(),x(),i(),s(),k=e(n(),1),ke(),A=a(),j=`traffic`})),M,Me=t((()=>{x(),s(),M={icon:o,attributes:[ee()],example:{attributes:{metric:`total`}}}})),N,P,F,I,L,R,z,Ne=t((()=>{N=`jpa/views-over-years`,P=`Views over years`,F=`Every month of views across the whole site, one row per year.`,I={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({metric:e},t=!1){return{metric:e,reportParams:le(t)}}function V(e){return(0,H.jsx)(O,{attributes:B(e)})}function Pe({metric:e,...t}){return(0,H.jsx)(Se,{...t,widgetType:ve(z,M),renderModule:U,renderComponent:O,attributes:B({metric:e},!0)})}var H,U,W,G,Fe,K,q,J,Y,X,Z,Q,$;t((()=>{y(),pe(),ge(),he(),Ce(),be(),je(),Me(),Ne(),H=a(),fe(),U=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Fe={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:O,tags:[`autodocs`],decorators:[_e],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:V,args:{metric:`total`},decorators:[S]},q={render:V,args:{metric:`average`},decorators:[S]},J={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`loading`),()=>b(W,null))},Y={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`error`),()=>b(W,null))},X={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`error-retryable`),()=>b(W,null))},Z={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(b(W,`empty`),()=>b(W,null))},Q={render:e=>(0,H.jsx)(Pe,{...e}),args:{...xe,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...ye,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Empty — a site the endpoint has no views for.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Fe as default};