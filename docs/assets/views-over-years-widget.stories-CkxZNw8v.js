import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-DNhkEVJn.js";import{C as c,Zt as l,nt as u,t as d}from"./date-fns-I6jayRk5.js";import{$ as f,E as p,O as m,_ as h,at as g,ct as _,et as ee,it as te,kt as ne,nt as re,ot as ie}from"./charts-provider-i3ilDE6i.js";import{m as ae,p as oe,t as se,u as ce}from"./src-ClJ6D7Xj.js";import{J as le,fn as ue,t as v}from"./src-sapT-gA9.js";import{a as de}from"./metric-sparkline-skeleton-ChjNp2tv.js";import{n as fe,r as pe}from"./with-story-router-thBJi0Jx.js";import{n as me,r as he,s as y}from"./register-report-mocks-C7K6kQVR.js";import{t as ge}from"./widget-state-BVHHQlNQ.js";import{t as _e}from"./monthly-heatmap-DMKxTxzn.js";import{t as b}from"./src-BD0Zo-vQ.js";import{a as ve,d as ye,f as be,i as xe,n as Se,p as Ce,r as x,u as we}from"./with-widget-canvas-BOQ7NWrR.js";function Te(e,t,n){let r=n&&S(e,n)?n.day:1,i=S(e,C(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function Ee(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=_(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(_(C(n)),...a.map(([e])=>e)),s=Math.max(_(C(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&_(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=_(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Te(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var S,C,De=t((()=>{b(),S=(e,t)=>e.year===t.year&&e.month===t.month,C=e=>({year:e.getFullYear(),month:e.getMonth()})}));function Oe(e){let t=c(e);return l(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function ke(e){let t=u(oe(),E),{primary:n,isLoading:r,isFetching:i,isError:a,error:o,refetch:s}=le((0,w.useMemo)(()=>({from:T,to:t,interval:`month`,period:`month`,stat_fields:`views`}),[t])),l=(0,w.useMemo)(()=>(n.data?.data??[]).flatMap(e=>{let t=Oe(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[n.data]),d=(0,w.useMemo)(()=>l.find(({views:e})=>e>0)?.month,[l]),f=le((0,w.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,n=d?new Date(d.year,d.month+1,0):void 0,r=n?u(n,E):t;return{from:e?u(e,E):t,to:r<t?r:t,interval:`day`,period:`day`,stat_fields:`views`}},[d,t]),{enabled:!!d}),p=(0,w.useMemo)(()=>ce((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:m,lifeStartsAt:h}=(0,w.useMemo)(()=>{if(!n.data)return{rows:[],lifeStartsAt:void 0};let r=p&&{year:p.getFullYear(),month:p.getMonth(),day:p.getDate()},i=Ee(l,e,c(t),r);return{rows:i,lifeStartsAt:re(i,p,ae())}},[n.data,l,e,t,p]),g=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:m,lifeStartsAt:h,isLoading:r||g,isFetching:i||f.isFetching,isError:a,error:o,refetch:s}}var w,T,E,Ae=t((()=>{v(),se(),b(),d(),w=e(n(),1),De(),T=`2005-01-01`,E=`yyyy-MM-dd`}));function je({metric:e}){let{rows:t,lifeStartsAt:n,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=ke(e),l=m(),u=ae(),d=(0,O.useCallback)(({year:e,month:t})=>{let r={lifeStartsAt:n,timeZone:u},i=t===void 0?ee(e,r):f({year:e,month:t},r);i?.from&&i.to&&l(A,{from:i.from,to:i.to})},[n,u,l]),p=o&&t.length===0;return(0,k.jsx)(ge,{isLoading:i,isFetching:a,isError:p,isEmpty:!1,error:p?ne(s,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,renderLoading:(0,k.jsx)(de,{}),children:(0,k.jsx)(_e,{rows:t,...te(e),onSelect:d})})}function D({attributes:e={}}){return(0,k.jsx)(h,{attributes:e,children:(0,k.jsx)(je,{metric:ie(e.metric)})})}var O,k,A,Me=t((()=>{se(),p(),b(),i(),O=e(n(),1),Ae(),k=a(),A=`traffic`})),j,Ne=t((()=>{b(),s(),j={icon:o,attributes:[g()],example:{attributes:{metric:`total`}}}})),M,N,P,F,I,L,R,Pe=t((()=>{M=`jpa/views-over-years`,N=`Views over years`,P=`Every month of views across the whole site, one row per year.`,F={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({metric:e},t=!1){return{metric:e,reportParams:ue(t)}}function B(e){return(0,V.jsx)(D,{attributes:z(e)})}function Fe({metric:e,...t}){return(0,V.jsx)(ye,{...t,widgetType:xe(R,j),renderModule:H,renderComponent:D,attributes:z({metric:e},!0)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),me(),be(),ve(),fe(),Se(),Me(),Ne(),Pe(),V=a(),he(),H=`storybook/views-over-years`,U=`stats/visits`,W={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},G={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:D,tags:[`autodocs`],decorators:[pe],argTypes:{metric:W},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:B,args:{metric:`total`},decorators:[x]},q={render:B,args:{metric:`average`},decorators:[x]},J={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(y(U,`loading`),()=>y(U,null))},Y={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(y(U,`error`),()=>y(U,null))},X={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(y(U,`error-retryable`),()=>y(U,null))},Z={render:B,args:{metric:`total`},tags:[`!autodocs`],decorators:[x],beforeEach:()=>(y(U,`empty`),()=>y(U,null))},Q={render:e=>(0,V.jsx)(Fe,{...e}),args:{...we,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...Ce,metric:W}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (full width × 2 rows).`,...Q.parameters?.docs?.description}}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as DailyAverage,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};