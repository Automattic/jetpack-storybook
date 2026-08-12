import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as r,n as i,t as a}from"./build-module-DyKOxfM8.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{n as s,xl as c}from"./build-module-CDRs4YxF.js";import{F as ee,J as l,Yt as u,et as d,t as f}from"./date-fns-Bm9dQUxr.js";import{Tr as p,sn as te,t as m}from"./src-CVyoNBHH.js";import{$ as h,K as g,Y as _,q as ne,rt as re}from"./report-metric-DcvQRJSL.js";import{n as ie}from"./sparkline-DcZ1-6wt.js";import{t as ae,y as oe}from"./src-tEZrN6jJ.js";import{j as se,t as ce}from"./src-DhTT1cTw.js";import{f as le,n as ue,t as de}from"./src-CaR1T9Ff.js";import{Tt as fe,Xt as pe,hr as v,i as me,p as he}from"./chart-tooltip-JeJCERB4.js";import{t as ge}from"./widget-state-Dkv6b-_W.js";import{C as _e,D as ve,E as ye,S as be,T as xe,b as Se,t as y,w as Ce,x as b}from"./src-CatI5IZr.js";var x,S,C,w,T,E,we=t((()=>{x=`_root_1y5xx_1`,S=`_body_1y5xx_9`,C=`_headline_1y5xx_20`,w=`_views_1y5xx_27`,T=`_chart_1y5xx_35`,E={root:x,body:S,headline:C,views:w,chart:T}}));function Te(e){return le((e+1)%7)}function Ee(e){let t=se(e.date_start??e.time_interval??e.period);if(!t)return;let n=ee(t,D,O);return u(n)&&d(n,D)===t?n:void 0}function De(e){let t=e.views??e.value;return typeof t==`number`?t:Number(t??0)||0}function Oe(e){let t=Array.from({length:7},()=>({total:0,occurrences:0}));return e.forEach(e=>{let n=Ee(e);if(!n)return;let r=(l(n)+6)%7;t[r].total+=De(e),t[r].occurrences+=1}),t.map(({total:e,occurrences:t},n)=>({weekday:n,label:Te(n),total:e,occurrences:t,average:t?e/t:0}))}function ke(e){return e.filter(e=>e.occurrences>0).reduce((e,t)=>!e||t.average>e.average?t:e,void 0)}var D,O,Ae=t((()=>{ce(),de(),f(),D=`yyyy-MM-dd`,O=new Date(2001,0,1)}));function je(){let{reportParams:e}=re(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=pe((0,k.useMemo)(()=>me({...e,stat_fields:j,period:A}),[e])),s=t.data,c=(0,k.useMemo)(()=>Oe(s?.data??[]),[s]);return{buckets:c,peak:(0,k.useMemo)(()=>ke(c),[c]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var k,A,j,Me=t((()=>{fe(),y(),k=e(n(),1),Ae(),A=`day`,j=`views,visitors`}));function Ne(){let{buckets:e,peak:t,isLoading:n,isFetching:a,isError:o,error:s,refetch:c}=je(),ee=(0,N.useMemo)(()=>e.map(e=>e.average),[e]),l=o&&!t,u=t?.average??0,d=ue(u,`number`,I),f=ue(u,`number`,u>=1e3?F:I),m=i(`%s views`,`jetpack-premium-analytics-pkg`),h=r(m,f),g=r(m,d);return(0,P.jsx)(`div`,{className:E.root,children:(0,P.jsx)(ge,{isLoading:n,isFetching:a,isError:l,isEmpty:!t,error:l?he(s,{retryDescription:i(`We couldn't load your popular days. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,empty:{icon:oe,description:i(`No views in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsxs)(`div`,{className:E.body,children:[(0,P.jsxs)(`div`,{className:E.headline,children:[(0,P.jsx)(p,{variant:`heading-2xl`,children:t?.label}),(0,P.jsx)(p,{variant:`body-md`,className:E.views,title:d,children:h===g?h:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`span`,{"aria-hidden":`true`,children:h}),(0,P.jsx)(te,{children:g})]})})]}),(0,P.jsx)(`div`,{className:E.chart,children:(0,P.jsx)(ie,{data:ee,maxWidth:1/0})})]})})})}function M({attributes:e={},setError:t}){return(0,P.jsx)(h,{attributes:e,setError:t,children:(0,P.jsx)(Ne,{})})}var N,P,F,I,Pe=t((()=>{m(),de(),ae(),y(),a(),N=e(n(),1),we(),Me(),P=o(),F={useMultipliers:!0,decimals:1},I={decimals:0}})),L,Fe=t((()=>{s(),L={icon:c}})),R,z,B,V,H,U,Ie,Le=t((()=>{R=`jpa/popular-days`,z=`Popular days`,B=`The day of the week that draws the most views, with the distribution across the week.`,V={content:`The days of the week when your site received the most views on average.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#popular-hours`}]},H=`stats`,U=`framed`,Ie={name:R,title:z,description:B,help:V,category:H,presentation:U}}));function Re(){return(0,G.jsx)(M,{attributes:{reportParams:v(!1)}})}function W(e){return(0,G.jsx)(M,{attributes:{reportParams:v(!1,e)}})}function ze(e){return(0,G.jsx)(xe,{...e,widgetType:Ve,renderModule:Be,renderComponent:M,attributes:{reportParams:v(!0)}})}var G,Be,Ve,K,q,J,Y,X,Z,Q,$;t((()=>{fe(),g(),ye(),_e(),Se(),Pe(),Fe(),Le(),G=o(),ne(),Be=`storybook/popular-days`,Ve=be(Ie,L),K={title:`Packages/Premium Analytics/Widgets/PopularDays`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Popular days" card: the busiest day of the week for the selected range, as the weekday name and its mean views, over an area chart of the whole week\'s distribution. Both figures are means per occurrence of that weekday, not totals — a user-selected range rarely spans a whole number of weeks, so totals would let a weekday win on having occurred one extra time. Data comes from `stats/visits` at daily granularity, folded into seven buckets client-side; `stats/insights` also reports weekday views but over a window fixed at ten weeks, so it cannot follow the date picker. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.'}}}},q={render:Re,decorators:[b]},J={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`stats/visits`,`loading`),()=>_(`stats/visits`,null))},Y={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`stats/visits`,`error`),()=>_(`stats/visits`,null))},X={render:()=>W(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`stats/visits`,`error-retryable`),()=>_(`stats/visits`,null))},Z={render:()=>W(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`stats/visits`,`empty`),()=>_(`stats/visits`,null))},Q={render:e=>(0,G.jsx)(ze,{...e}),args:{...Ce},argTypes:{...ve}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPopularDays,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the peak weekday over the week's distribution.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularDaysOnPreset('last-90-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularDaysOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: neutral copy and no Retry
action, since retrying cannot clear a permission gate.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularDaysOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error-retryable');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
retryable copy with a Retry action, which re-runs the query (still mocked as
failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  // A calendar year, not a rolling window: \`last-365-days\` and \`last-12-months\`
  // resolve to the same dates most years, which would share ErrorRetryable's
  // query key and serve this story's cached empty result there instead.
  render: () => renderPopularDaysOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no buckets: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PopularDaysDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};