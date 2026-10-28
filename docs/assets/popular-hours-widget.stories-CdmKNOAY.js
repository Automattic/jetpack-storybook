import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{F as o,Pt as s,z as c}from"./charts-provider-CYqb6BOr.js";import{d as l,t as u}from"./src-S3NAzjzZ.js";import{Nn as d,hn as f,k as ee,ot as te,t as p}from"./src-DfQ3R5pV.js";import{t as ne}from"./widget-state-BBdc069e.js";import{L as re,i as m}from"./with-story-router-Bo0YjvIH.js";import{n as h,o as g,r as _,s as v}from"./register-report-mocks-xm2nLXrN.js";import{a as ie,g as y,h as ae,i as oe,m as se,n as b,p as ce,r as x}from"./with-widget-canvas-CQ23aStp.js";var S,C,le=e((()=>{S=`_root_1j6if_1`,C={root:S}}));function ue(e){let t=e.reduce((e,t)=>!e||t.total>e.total?t:e,void 0);return t&&t.total>0?t:void 0}function de(){let{reportParams:e}=c(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=te((0,w.useMemo)(()=>ee({...e}),[e])),s=t.data,u=(0,w.useMemo)(()=>s?s.buckets.map(({hour:e,views:t})=>({hour:e,total:t,average:t/s.days})):[],[s]);return{buckets:u,peak:(0,w.useMemo)(()=>{let e=ue(u);return e&&{...e,label:l(e.hour)}},[u]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var w,T=e((()=>{p(),u(),m(),w=t(n(),1)}));function E(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:c}=de(),l=(0,O.useMemo)(()=>e.map(e=>e.average),[e]),u=a&&(!t||o instanceof d),f=t&&t.average<10&&!Number.isInteger(t.average)?1:0;return(0,k.jsx)(`div`,{className:C.root,children:(0,k.jsx)(ne,{isLoading:n,isFetching:i,isError:u,isEmpty:!t,error:u?s(o,{retryDescription:r(`We couldn't load your popular hours. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,children:(0,k.jsx)(re,{label:t?.label??``,value:t?.average??0,points:l,valueDecimals:f,valueUnit:`views-per-day`})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(o,{attributes:e,setError:t,children:(0,k.jsx)(E,{})})}var O,k,fe=e((()=>{p(),m(),i(),O=t(n(),1),le(),T(),k=a()})),A,j,M,N,P,F,I,L,R=e((()=>{A=`jpa/popular-hours`,j=`jpa/scheduled`,M=`Popular hours`,N=`The hour of the day that draws the most views, with the distribution across the day.`,P={content:`The hours of the day when your site received the most views on average. Ranges longer than a year show the most recent 12 months.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},F=`stats`,I=`framed`,L={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I}}));function z(){return(0,V.jsx)(D,{attributes:{reportParams:f(!1)}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:f(!1,e)}})}function pe(e){return(0,V.jsx)(se,{...e,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:f(!0)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),h(),ae(),ie(),b(),fe(),R(),V=a(),_(),H=`storybook/popular-hours`,U=oe(L),W={title:`Packages/Premium Analytics/Widgets/PopularHours`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Popular hours\" card: the busiest hour of the day for the selected range, as a site-format hour label and its mean daily views, over an area chart of the whole day's distribution. Data comes from `stats/views-by/hour-of-day`, which folds the range into 24 buckets in the site's own timezone; `stats/insights` also reports an hours map, but keyed in UTC while its `highest_hour` is offset-applied, so its chart and headline disagree. Because the endpoint rejects ranges longer than 366 days, the client limits `all time` and long custom ranges to the most recent 12 months. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default."}}}},G={render:z,decorators:[x]},K={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(v(`stats/views-by/hour-of-day`,`loading`),()=>v(`stats/views-by/hour-of-day`,null))},q={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(v(`stats/views-by/hour-of-day`,`error`),()=>v(`stats/views-by/hour-of-day`,null))},J={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(v(`stats/views-by/hour-of-day`,`error-retryable`),()=>v(`stats/views-by/hour-of-day`,null))},Y={render:()=>B(`last-30-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/views-by/hour-of-day`,{date:`2026-01-01`,start_date:`2025-12-03`,days:30,dimension:`day-of-week`,fields:[`period`,`views`],data:[[`Mon`,100]]}),()=>g(`stats/views-by/hour-of-day`,null))},X={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/views-by/hour-of-day`,{date:`2026-01-01`,start_date:`2025-01-01`,days:366,dimension:`hour-of-day`,fields:[`period`,`views`],data:[[`7`,4],[`19`,18]]}),()=>g(`stats/views-by/hour-of-day`,null))},Z={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(v(`stats/views-by/hour-of-day`,`empty`),()=>v(`stats/views-by/hour-of-day`,null))},Q={render:e=>(0,V.jsx)(pe,{...e}),args:{...ce},argTypes:{...y}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`UnsupportedResponse`,`LowTraffic`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPopularHours,
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The peak hour over the day's distribution.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularHoursOnPreset('last-90-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/views-by/hour-of-day', 'loading');
    return () => setReportMockState('stats/views-by/hour-of-day', null);
  }
}`,...K.parameters?.docs?.source},description:{story:`The initial loading state.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularHoursOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/views-by/hour-of-day', 'error');
    return () => setReportMockState('stats/views-by/hour-of-day', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`A non-retryable permission error.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularHoursOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/views-by/hour-of-day', 'error-retryable');
    return () => setReportMockState('stats/views-by/hour-of-day', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`A retryable connection error.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularHoursOnPreset('last-30-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockResponse('stats/views-by/hour-of-day', {
      date: '2026-01-01',
      start_date: '2025-12-03',
      days: 30,
      dimension: 'day-of-week',
      fields: ['period', 'views'],
      data: [['Mon', 100]]
    });
    return () => setReportMockResponse('stats/views-by/hour-of-day', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`A successful response folded into a dimension other than hour-of-day.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularHoursOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    // 18 views over a year is 0.049 a day, which one decimal rounds to zero.
    setReportMockResponse('stats/views-by/hour-of-day', {
      date: '2026-01-01',
      start_date: '2025-01-01',
      days: 366,
      dimension: 'hour-of-day',
      fields: ['period', 'views'],
      data: [['7', 4], ['19', 18]]
    });
    return () => setReportMockResponse('stats/views-by/hour-of-day', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`A daily average too small to render at the card's precision.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  // Avoid presenting the same date range as ErrorRetryable in most years.
  render: () => renderPopularHoursOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/views-by/hour-of-day', 'empty');
    return () => setReportMockState('stats/views-by/hour-of-day', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`A report with no views.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PopularHoursDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{G as Default,Z as Empty,q as Error,J as ErrorRetryable,K as Loading,X as LowTraffic,Y as UnsupportedResponse,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};