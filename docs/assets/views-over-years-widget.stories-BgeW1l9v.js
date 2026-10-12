import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Zt as s,nt as c,t as l}from"./date-fns-I6jayRk5.js";import{P as u}from"./library-DTloIBum.js";import{t as d}from"./src-fQR6rGKL.js";import{m as f,p,t as m,u as h}from"./src-rrY7vAoW.js";import{$ as g,P as _,Pn as v,Sn as y,t as b,yn as ee}from"./src-2a88cYSx.js";import{C as te,G as ne,H as re,J as ie,St as ae,U as oe,Y as se,Z as x,bt as ce,q as le,vt as ue,y as de}from"./charts-provider-Bk38zIJq.js";import{a as fe}from"./metric-sparkline-skeleton-BZyz2139.js";import{n as pe,r as me,s as S}from"./register-report-mocks-iviv8n0s.js";import{t as he}from"./widget-state-BlUbrcDn.js";import{n as ge,r as _e}from"./with-story-router-Beljd9ki.js";import{t as ve}from"./monthly-heatmap-B8K_RW9y.js";import{t as C}from"./src-ZGXLokk_.js";import{a as ye,g as be,h as xe,i as Se,m as Ce,n as we,p as Te,r as w}from"./with-widget-canvas-Agk44m9m.js";function Ee(e,t,n){let r=n&&T(e,n)?n.day:1,i=T(e,E(t))?t.getDate():new Date(e.year,e.month+1,0).getDate();return Math.max(i-r+1,1)}function De(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=x(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(x(E(n)),...a.map(([e])=>e)),s=Math.max(x(E(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&x(r)===o?r:void 0,d=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},f=x(d);if(f<o||f>s)return null;let p=i.get(f)??0,m=Ee(d,n,u);return r+=p,a+=m,t===`average`?Math.round(p/m):p});d.push({year:e,months:c,total:t===`average`?Math.round(r/a):r})}return d}var T,E,Oe=t((()=>{C(),T=(e,t)=>e.year===t.year&&e.month===t.month,E=e=>({year:e.getFullYear(),month:e.getMonth()})}));function D(e){let t=o(e);return s(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function O(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},a=De(e,t,o(n),i);return{rows:a,lifeStartsAt:ne(a,r,f())}}function k(){return c(p(),M)}function ke(e,t){let n=k(),{primary:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:l}=g((0,A.useMemo)(()=>({from:j,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,A.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=D(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,A.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=g((0,A.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?c(t,M):n;return{from:e?c(e,M):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,A.useMemo)(()=>h((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:m,lifeStartsAt:_}=(0,A.useMemo)(()=>r.data?O(u,e,n,p):N,[r.data,u,e,n,p]),v=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:m,lifeStartsAt:_,isLoading:i||v,isFetching:a||f.isFetching,isError:o,error:s,refetch:l}}function Ae(e,t,n){let r=k(),{data:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=_(t,{enabled:n&&t>0}),{rows:u,lifeStartsAt:d}=(0,A.useMemo)(()=>i?O(i.data.flatMap(e=>{let t=D(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,h(i.startDate??void 0)):N,[i,e,r]);return{rows:u,lifeStartsAt:d,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}}function je(e,t){let n=t!==void 0,r=ke(e,!n),i=Ae(e,t??0,n);return n?i:r}var A,j,M,N,Me=t((()=>{b(),m(),C(),l(),A=e(n(),1),Oe(),j=`2005-01-01`,M=`yyyy-MM-dd`,N={rows:[],lifeStartsAt:void 0}}));function Ne({metric:e,authorScoped:t}){let{reportParams:n}=te(),i=t?ee(n.author_id):void 0,{rows:a,lifeStartsAt:o,isLoading:s,isFetching:c,isError:l,error:d,refetch:p}=je(e,i),m=ae(),{openPeriod:h}=v(),g=f(),_=(0,F.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:o,timeZone:g},i=n===void 0?oe(e,r):re({year:e,month:n},r);!i?.from||!i.to||(t?h?.(i):m(L,{from:i.from,to:i.to}))},[t,o,g,h,m]);if(i!==void 0&&i<=0)return(0,I.jsx)(he,{isLoading:!1,isError:!1,isEmpty:!0,empty:{icon:u,description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let y=l&&a.length===0;return(0,I.jsx)(he,{isLoading:s,isFetching:c,isError:y,error:y?ue(d,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}):null,renderLoading:(0,I.jsx)(fe,{}),children:(0,I.jsx)(ve,{rows:a,...le(e),onSelect:_})})}function P({attributes:e={}}){return(0,I.jsx)(de,{attributes:e,children:(0,I.jsx)(Ne,{metric:se(e.metric),authorScoped:e.authorScoped===!0})})}var F,I,L,Pe=t((()=>{b(),m(),d(),ce(),C(),i(),F=e(n(),1),Me(),I=a(),L=`traffic`})),R,Fe=t((()=>{C(),R={attributes:[ie()],example:{attributes:{metric:`total`}}}})),z,B,Ie,Le,Re,ze,Be,Ve,He=t((()=>{z=`jpa/views-over-years`,B=`jpa/seen`,Ie=`Views over years`,Le=`Every month of views across the whole site, one row per year.`,Re={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},ze=`stats`,Be=`framed`,Ve={name:z,icon:B,title:Ie,description:Le,help:Re,category:ze,presentation:Be}}));function Ue({metric:e},t=!1){return{metric:e,reportParams:y(t)}}function V(e){return(0,H.jsx)(P,{attributes:Ue(e)})}function We({metric:e,...t}){return(0,H.jsx)(Ce,{...t,widgetType:Se(Ve,R),renderModule:U,renderComponent:P,attributes:Ue({metric:e},!0)})}var H,U,W,G,Ge,K,q,J,Y,X,Z,Q,$;t((()=>{b(),pe(),xe(),ye(),ge(),we(),Pe(),Fe(),He(),H=a(),me(),U=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ge={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:P,tags:[`autodocs`],decorators:[_e],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:V,args:{metric:`total`},decorators:[w]},q={render:V,args:{metric:`average`},decorators:[w]},J={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(W,`loading`),()=>S(W,null))},Y={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(W,`error`),()=>S(W,null))},X={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(W,`error-retryable`),()=>S(W,null))},Z={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(W,`empty`),()=>S(W,null))},Q={render:e=>(0,H.jsx)(We,{...e}),args:{...Te,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...be,metric:G}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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