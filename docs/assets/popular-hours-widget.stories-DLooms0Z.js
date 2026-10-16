import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{c as o,t as s}from"./src-DBIwok0l.js";import{Dn as c,T as l,dn as u,nt as d,t as f}from"./src-CzTj1AN7.js";import{m as ee,pt as te,v as ne}from"./charts-provider-BDh1sWsP.js";import{n as p,o as m,r as re,s as h}from"./register-report-mocks-BbX2qmCy.js";import{t as ie}from"./widget-state-K4CASAiO.js";import{G as ae,t as g}from"./src-ByXSKbSc.js";import{a as oe,g as se,h as ce,i as _,m as le,n as v,p as y,r as b}from"./with-widget-canvas-DKudguXy.js";var x,S,C=t((()=>{x=`_root_1j6if_1`,S={root:x}}));function ue(e){let t=e.reduce((e,t)=>!e||t.total>e.total?t:e,void 0);return t&&t.total>0?t:void 0}function de(){let{reportParams:e}=ne(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:s}=d((0,w.useMemo)(()=>l({...e}),[e])),c=t.data,u=(0,w.useMemo)(()=>c?c.buckets.map(({hour:e,views:t})=>({hour:e,total:t,average:t/c.days})):[],[c]);return{buckets:u,peak:(0,w.useMemo)(()=>{let e=ue(u);return e&&{...e,label:o(e.hour)}},[u]),isLoading:n,isFetching:r,isError:i,error:a,refetch:s}}var w,T=t((()=>{f(),s(),g(),w=e(n(),1)}));function E(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=de(),l=(0,O.useMemo)(()=>e.map(e=>e.average),[e]),u=a&&(!t||o instanceof c),d=t&&t.average<10&&!Number.isInteger(t.average)?1:0;return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(ie,{isLoading:n,isFetching:i,isError:u,isEmpty:!t,error:u?te(o,{retryDescription:r(`We couldn't load your popular hours. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,children:(0,k.jsx)(ae,{label:t?.label??``,value:t?.average??0,points:l,valueDecimals:d,valueUnit:`views-per-day`})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(ee,{attributes:e,setError:t,children:(0,k.jsx)(E,{})})}var O,k,fe=t((()=>{f(),g(),i(),O=e(n(),1),C(),T(),k=a()})),A,pe=t((()=>{A={}})),j,M,N,P,F,I,L,R,z=t((()=>{j=`jpa/popular-hours`,M=`jpa/scheduled`,N=`Popular hours`,P=`The hour of the day that draws the most views, with the distribution across the day.`,F={content:`The hours of the day when your site received the most views on average. Ranges longer than a year show the most recent 12 months.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},I=`stats`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function me(){return(0,V.jsx)(D,{attributes:{reportParams:u(!1)}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:u(!1,e)}})}function he(e){return(0,V.jsx)(le,{...e,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:u(!0)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),p(),ce(),oe(),v(),fe(),pe(),z(),V=a(),re(),H=`storybook/popular-hours`,U=_(R,A),W={title:`Packages/Premium Analytics/Widgets/PopularHours`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Popular hours\" card: the busiest hour of the day for the selected range, as a site-format hour label and its mean daily views, over an area chart of the whole day's distribution. Data comes from `stats/views-by/hour-of-day`, which folds the range into 24 buckets in the site's own timezone; `stats/insights` also reports an hours map, but keyed in UTC while its `highest_hour` is offset-applied, so its chart and headline disagree. Because the endpoint rejects ranges longer than 366 days, the client limits `all time` and long custom ranges to the most recent 12 months. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default."}}}},G={render:me,decorators:[b]},K={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/views-by/hour-of-day`,`loading`),()=>h(`stats/views-by/hour-of-day`,null))},q={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/views-by/hour-of-day`,`error`),()=>h(`stats/views-by/hour-of-day`,null))},J={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/views-by/hour-of-day`,`error-retryable`),()=>h(`stats/views-by/hour-of-day`,null))},Y={render:()=>B(`last-30-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(m(`stats/views-by/hour-of-day`,{date:`2026-01-01`,start_date:`2025-12-03`,days:30,dimension:`day-of-week`,fields:[`period`,`views`],data:[[`Mon`,100]]}),()=>m(`stats/views-by/hour-of-day`,null))},X={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(m(`stats/views-by/hour-of-day`,{date:`2026-01-01`,start_date:`2025-01-01`,days:366,dimension:`hour-of-day`,fields:[`period`,`views`],data:[[`7`,4],[`19`,18]]}),()=>m(`stats/views-by/hour-of-day`,null))},Z={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/views-by/hour-of-day`,`empty`),()=>h(`stats/views-by/hour-of-day`,null))},Q={render:e=>(0,V.jsx)(he,{...e}),args:{...y},argTypes:{...se}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`UnsupportedResponse`,`LowTraffic`,`Empty`,`WidgetDashboardWithWidget`]}))();export{G as Default,Z as Empty,q as Error,J as ErrorRetryable,K as Loading,X as LowTraffic,Y as UnsupportedResponse,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};