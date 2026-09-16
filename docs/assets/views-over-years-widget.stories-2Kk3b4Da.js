import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-2iv4IIRq.js";import{Gt as c,X as l,t as u,y as d}from"./date-fns-CeH7Uo-X.js";import{B as f,H as p,L as m,R as ee,V as h,W as g,_t as te,g as ne,it as re,nt as ie}from"./hooks-C9p05baR.js";import{m as ae,p as oe,t as _}from"./src-D1E5MwTJ.js";import{$t as se,L as ce,r as v}from"./date-period-dropdown-DhYs-jiH.js";import{r as le}from"./metric-sparkline-skeleton-xgPHO3-M.js";import{t as ue}from"./monthly-heatmap-XPK_zAbC.js";import{i as de,r as fe,s as y}from"./register-report-mocks-BhZr3yws.js";import{t as b}from"./widget-state-D2_lXJyG.js";import{t as x}from"./src-Ba76_uoB.js";import{a as pe,c as me,d as he,i as ge,l as _e,n as ve,o as ye,r as S,s as be,u as xe}from"./with-widget-canvas-DAzmZ2YF.js";function Se(e,t){return e.year===t.getFullYear()&&e.month===t.getMonth()?t.getDate():new Date(e.year,e.month+1,0).getDate()}function Ce(e,t,n){let r=new Map;for(let{month:t,views:n}of e){let e=g(t);r.set(e,(r.get(e)??0)+n)}let i=[...r.entries()].filter(([,e])=>e>0);if(i.length===0)return[];let a={year:n.getFullYear(),month:n.getMonth()},o=Math.min(...i.map(([e])=>e)),s=Math.max(g(a),...i.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=[];for(let e=l;e>=c;e--){let i=0,a=0,c=Array.from({length:12},(c,l)=>{let u={year:e,month:l},d=g(u);if(d<o||d>s)return null;let f=r.get(d)??0,p=Se(u,n);return i+=f,a+=p,t===`average`?Math.round(f/p):f});u.push({year:e,months:c,total:t===`average`?Math.round(i/a):i})}return u}var we=t((()=>{x()}));function Te(e){let t=d(e);return c(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function Ee(e){let t=l(oe(),`yyyy-MM-dd`),{primary:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=ce((0,C.useMemo)(()=>({from:w,to:t,interval:`month`,period:`month`,stat_fields:`views`}),[t]));return{rows:(0,C.useMemo)(()=>Ce((n.data?.data??[]).flatMap(e=>{let t=Te(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),e,d(t)),[n.data,e,t]),isLoading:r,isFetching:i,isError:a,error:o,refetch:s}}var C,w,T=t((()=>{v(),_(),u(),C=e(n(),1),we(),w=`2005-01-01`}));function E({metric:e}){let{rows:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:c}=Ee(e),l=re(),u=ae(),d=(0,O.useCallback)(({year:e,month:t})=>{let n={timeZone:u},r=t===void 0?ee(e,n):m({year:e,month:t},n);r?.from&&r.to&&l(A,{from:r.from,to:r.to})},[u,l]),p=a&&t.length===0;return(0,k.jsx)(b,{isLoading:n,isFetching:i,isError:p,isEmpty:t.length===0,error:p?te(s,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,empty:{icon:o,description:r(`No views yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(le,{}),children:(0,k.jsx)(ue,{rows:t,...f(e),onSelect:d})})}function D({attributes:e={}}){return(0,k.jsx)(ne,{attributes:e,children:(0,k.jsx)(E,{metric:p(e.metric)})})}var O,k,A,De=t((()=>{_(),ie(),x(),i(),s(),O=e(n(),1),T(),k=a(),A=`traffic`})),j,Oe=t((()=>{x(),s(),j={icon:o,attributes:[h()],example:{attributes:{metric:`total`}}}})),M,N,P,F,I,L,R,ke=t((()=>{M=`jpa/views-over-years`,N=`Views over years`,P=`Every month of views across the whole site, one row per year.`,F={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days, counting the current month up to today.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({metric:e},t=!1){return{metric:e,reportParams:se(t)}}function B(e){return(0,V.jsx)(D,{attributes:z(e)})}function Ae({metric:e,...t}){return(0,V.jsx)(be,{...t,widgetType:ge(R,j),renderModule:H,renderComponent:D,attributes:z({metric:e},!0)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),fe(),me(),pe(),xe(),ve(),De(),Oe(),ke(),V=a(),de(),H=`storybook/views-over-years`,U=`stats/visits`,W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},G={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:D,tags:[`autodocs`],decorators:[he],argTypes:{metric:W},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:B,args:{metric:`total`},decorators:[S]},q={render:B,args:{metric:`average`},decorators:[S]},J={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(U,`loading`),()=>y(U,null))},Y={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(U,`error`),()=>y(U,null))},X={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(U,`error-retryable`),()=>y(U,null))},Z={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(U,`empty`),()=>y(U,null))},Q={render:e=>(0,V.jsx)(Ae,{...e}),args:{...ye,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{..._e,metric:W}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};