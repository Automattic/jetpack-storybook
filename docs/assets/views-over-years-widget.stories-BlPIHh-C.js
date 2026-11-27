import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Gt as o,Ht as s,t as c,y as l}from"./date-fns-BUjRnB2M.js";import{r as u,t as d}from"./src-BubUAxKj.js";import{In as f,Jn as p,Nn as m,Q as h,St as g,t as _}from"./src-BVv1R588.js";import{h as v,m as y,o as b,t as x}from"./src-CFLkDNMV.js";import{Jt as ee,R as S,W as te,_t as ne,bt as C,dt as re,gt as w,ht as ie,m as ae,pt as T,ut as oe,xt as E,yt as se}from"./charts-provider-DVBrFPaa.js";import{t as ce}from"./widget-state-CqPm5upe.js";import{K as le,i as D,n as ue,r as de}from"./with-story-router-Buc1zMFG.js";import{r as fe}from"./month-calendar-heatmap-skeleton-CYAG3eeL.js";import{n as pe,r as me,s as O}from"./register-report-mocks-Dzl9RUVR.js";import{t as he}from"./monthly-heatmap-BsBo9RSa.js";import{a as ge,c as _e,i as k,l as ve,o as ye,r as be,s as xe,u as Se}from"./with-widget-canvas-BqMy9p20.js";function Ce(e,t,n,r){let i=new Map;for(let{month:t,views:n}of e){let e=C(t);i.set(e,(i.get(e)??0)+n)}let a=[...i.entries()].filter(([,e])=>e>0),o=Math.min(C(E(n)),...a.map(([e])=>e)),s=Math.max(C(E(n)),...a.map(([e])=>e)),c=Math.floor(o/12),l=Math.floor(s/12),u=r&&C(r)===o?r:void 0,d=[],f=[];for(let e=l;e>=c;e--){let r=0,a=0,c=Array.from({length:12},(c,l)=>{let d={year:e,month:l},p=C(d);if(p<o||p>s)return null;let m=i.get(p)??0,h=ne(d,n,u);return r+=m,a+=h,se(d,t,n,u)&&f.push(d),t===`average`?m/h:m});d.push({year:e,months:c,total:t===`average`?r/a:r})}return{rows:d,partialMonths:f}}var we=e((()=>{D()}));function A(e){let t=l(e);return o(t)?{year:t.getFullYear(),month:t.getMonth()}:null}function j(e,t,n,r){let i=r&&{year:r.getFullYear(),month:r.getMonth(),day:r.getDate()},{rows:a,partialMonths:o}=Ce(e,t,l(n),i);return{rows:a,partialMonths:o,lifeStartsAt:T(a,r,v())}}function M(){return s(y(),F)}function Te(e,t){let n=M(),{primary:r,isLoading:i,isFetching:a,isError:o,error:c,refetch:l}=g((0,N.useMemo)(()=>({from:P,to:n,interval:`month`,period:`month`,stat_fields:`views`}),[n]),{enabled:t}),u=(0,N.useMemo)(()=>(r.data?.data??[]).flatMap(e=>{let t=A(e.time_interval);return t?[{month:t,views:Number(e.views??0)}]:[]}),[r.data]),d=(0,N.useMemo)(()=>u.find(({views:e})=>e>0)?.month,[u]),f=g((0,N.useMemo)(()=>{let e=d?new Date(d.year,d.month,1):void 0,t=d?new Date(d.year,d.month+1,0):void 0,r=t?s(t,F):n;return{from:e?s(e,F):n,to:r<n?r:n,interval:`day`,period:`day`,stat_fields:`views`}},[d,n]),{enabled:t&&!!d}),p=(0,N.useMemo)(()=>b((f.primary.data?.data??[]).find(e=>Number(e.views??0)>0)?.time_interval),[f.primary.data]),{rows:m,partialMonths:h,lifeStartsAt:_}=(0,N.useMemo)(()=>r.data?j(u,e,n,p):I,[r.data,u,e,n,p]),v=e===`average`&&!!d&&f.isLoading&&!f.primary.isFetched;return{rows:m,partialMonths:h,lifeStartsAt:_,isLoading:i||v,isFetching:a||f.isFetching,isError:o,csvIsError:o||e===`average`&&(f.isError||f.isFetching&&!f.primary.data),isPlaceholderData:r.isPlaceholderData,error:c,refetch:l}}function Ee(e,t,n){let r=M(),{data:i,isLoading:a,isFetching:o,isError:s,isPlaceholderData:c,error:l,refetch:u}=h(t,{enabled:n&&t>0}),{rows:d,partialMonths:f,lifeStartsAt:p}=(0,N.useMemo)(()=>i?j(i.data.flatMap(e=>{let t=A(e.period);return t?[{month:t,views:e.views}]:[]}),e,r,b(i.startDate??void 0)):I,[i,e,r]);return{rows:d,partialMonths:f,lifeStartsAt:p,isLoading:a,isFetching:o,isError:s,csvIsError:s,isPlaceholderData:c,error:l,refetch:u}}function De(e,t){let n=t!==void 0,r=Te(e,!n),i=Ee(e,t??0,n);return n?i:r}var N,P,F,I,Oe=e((()=>{_(),x(),D(),c(),N=t(n(),1),we(),P=`2005-01-01`,F=`yyyy-MM-dd`,I={rows:[],partialMonths:[],lifeStartsAt:void 0}}));function ke({metric:e,authorScoped:t}){let{reportParams:n}=te(),i=t?m(n.author_id):void 0,{rows:a,partialMonths:o,lifeStartsAt:s,isLoading:c,isFetching:l,isError:d,csvIsError:f,isPlaceholderData:h,error:g,refetch:_}=De(e,i),y=u(),{openPeriod:b}=p(),x=v(),S=(0,R.useCallback)(({year:e,month:n})=>{let r={lifeStartsAt:s,timeZone:x},i=n===void 0?re(e,r):oe({year:e,month:n},r);if(!i)return;let{range:a,step:o}=i;t?b?.(a,{step:o}):y(B,a,{step:o})},[t,s,x,b,y]),ne=(0,R.useMemo)(()=>le(a.some(e=>e.months.some(e=>(e??0)>0))?a:[]),[a]),C=(0,R.useMemo)(()=>a.map(e=>({...e,months:e.months.map(e=>typeof e==`number`?Math.round(e):e),total:typeof e.total==`number`?Math.round(e.total):e.total})),[a]),w=e===`average`?`daily-average-views-over-years`:`views-over-years`;if(ae({csv:{...ne,filenamePrefix:i?`author-${i}-${w}`:w,hasDateRange:!1,status:{isLoading:c,isError:f,isPlaceholderData:h}}}),i!==void 0&&i<=0)return(0,z.jsx)(ce,{isLoading:!1,isError:!1,isEmpty:!0,empty:{description:r(`Open an author to see their all-time traffic here.`,`jetpack-premium-analytics-pkg`)},children:null});let T=d&&a.length===0;return(0,z.jsx)(ce,{isLoading:c,isFetching:l,isError:T,error:T?ee(g,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}):null,renderLoading:(0,z.jsx)(fe,{}),children:(0,z.jsx)(he,{rows:C,partialMonths:o,...ie(e),scale:`buckets`,onSelect:S})})}function L({attributes:e={}}){return(0,z.jsx)(S,{attributes:e,children:(0,z.jsx)(ke,{metric:w(e.metric),authorScoped:e.authorScoped===!0})})}var R,z,B,Ae=e((()=>{_(),x(),d(),D(),i(),R=t(n(),1),Oe(),z=a(),B=`traffic`})),je,Me=e((()=>{je={example:{attributes:{metric:`total`}}}})),Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He=e((()=>{Ne=`jpa/views-over-years`,Pe=`jpa/seen`,Fe=`Views over years`,Ie=`Every month of views across the whole site, one row per year.`,Le={content:`Every month of your site's views, shaded by how it compares to the rest, with each year's total beside it. Always the full history: the year above doesn't narrow it. Pick a month to read the Traffic tab over it. Daily average divides a month's views by its days: the first month starts on its first day with views, and the current month stops at today.`},Re=`stats`,ze=`framed`,Be=[{id:`metric`,type:`jpa/toggle-group`,label:`Metric`,relevance:`high`,elements:[{value:`total`,label:`Total views`},{value:`average`,label:`Daily average`}]}],Ve={name:Ne,icon:Pe,title:Fe,description:Ie,help:Le,category:Re,presentation:ze,attributes:Be}}));function Ue({metric:e},t=!1){return{metric:e,reportParams:f(t)}}function V(e){return(0,H.jsx)(L,{attributes:Ue(e)})}function We({metric:e,...t}){return(0,H.jsx)(_e,{...t,widgetType:ge(Ve,je),renderModule:U,renderComponent:L,attributes:Ue({metric:e},!0)})}var H,U,W,G,Ge,K,q,J,Y,X,Z,Q,$;e((()=>{_(),pe(),ve(),ye(),ue(),be(),Ae(),Me(),He(),H=a(),me(),U=`storybook/views-over-years`,W=`stats/visits`,G={control:`radio`,options:[`total`,`average`],description:"The `metric` attribute: the month's views, or its views per day."},Ge={title:`Packages/Premium Analytics/Widgets/ViewsOverYears`,component:L,tags:[`autodocs`],decorators:[de],argTypes:{metric:G},parameters:{docs:{description:{component:"The \"Views over years\" widget: every month of the site's views, one row per year closed by a Totals column outside the colour scale, as total views or views per day. The `metric` attribute has `relevance: 'high'`, so the framed host renders its select in the header; the close-up stories set it as an arg. It always covers the site's whole history, whatever year the Insights tab shows, and picking a month opens the Traffic tab over that month."}}}},K={render:V,args:{metric:`total`},decorators:[k]},q={render:V,args:{metric:`average`},decorators:[k]},J={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(W,`loading`),()=>O(W,null))},Y={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(W,`error`),()=>O(W,null))},X={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(W,`error-retryable`),()=>O(W,null))},Z={render:V,args:{metric:`total`},tags:[`!autodocs`],decorators:[k],beforeEach:()=>(O(W,`empty`),()=>O(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(We,{...e}),args:{...xe,widgetWidth:3,widgetHeight:2,metric:`total`},argTypes:{...Se,metric:G}},$=[`Default`,`DailyAverage`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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