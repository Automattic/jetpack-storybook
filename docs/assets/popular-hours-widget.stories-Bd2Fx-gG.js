import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{jn as o,t as s}from"./build-module-zwSmKorH.js";import{b as c,g as l}from"./hooks-NNFXJ3CF.js";import{c as u,t as d}from"./src-dBp1kBgf.js";import{An as ee,N as te,Sn as f,Zt as p,t as m}from"./src-Crpytpaj.js";import{A as ne}from"./chart-tooltip-Db29d_z8.js";import{G as re,J as h,K as ie,V as ae,Y as g}from"./report-metric-B_BSeytJ.js";import{t as oe}from"./widget-state-BoT5yRjo.js";import{C as _,D as se,E as v,S as ce,T as le,b as ue,t as y,w as de,x as b}from"./src-DalfvhF7.js";var x,S,C=t((()=>{x=`_root_1j6if_1`,S={root:x}}));function w(e){let t=e.reduce((e,t)=>!e||t.total>e.total?t:e,void 0);return t&&t.total>0?t:void 0}function T(){let{reportParams:e}=c(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=te((0,E.useMemo)(()=>f({...e}),[e])),s=t.data,l=(0,E.useMemo)(()=>s?s.buckets.map(({hour:e,views:t})=>({hour:e,total:t,average:t/s.days})):[],[s]);return{buckets:l,peak:(0,E.useMemo)(()=>{let e=w(l);return e&&{...e,label:u(e.hour)}},[l]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var E,D=t((()=>{m(),d(),y(),E=e(n(),1)}));function fe(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:c}=T(),l=(0,k.useMemo)(()=>e.map(e=>e.average),[e]),u=a&&(!t||s instanceof ee),d=t&&t.average<10&&!Number.isInteger(t.average)?1:0;return(0,A.jsx)(`div`,{className:S.root,children:(0,A.jsx)(oe,{isLoading:n,isFetching:i,isError:u,isEmpty:!t,error:u?ne(s,{retryDescription:r(`We couldn't load your popular hours. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,empty:{icon:o,description:r(`No views in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(ae,{label:t?.label??``,value:t?.average??0,points:l,valueDecimals:d,valueUnit:`views-per-day`})})})}function O({attributes:e={},setError:t}){return(0,A.jsx)(l,{attributes:e,setError:t,children:(0,A.jsx)(fe,{})})}var k,A,pe=t((()=>{m(),y(),i(),s(),k=e(n(),1),C(),D(),A=a()})),j,M=t((()=>{s(),j={icon:o}})),N,P,F,I,L,R,z,me=t((()=>{N=`jpa/popular-hours`,P=`Popular hours`,F=`The hour of the day that draws the most views, with the distribution across the day.`,I={content:`The hours of the day when your site received the most views on average. Ranges longer than a year show the most recent 12 months.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function he(){return(0,V.jsx)(O,{attributes:{reportParams:p(!1)}})}function B(e){return(0,V.jsx)(O,{attributes:{reportParams:p(!1,e)}})}function ge(e){return(0,V.jsx)(le,{...e,widgetType:U,renderModule:H,renderComponent:O,attributes:{reportParams:p(!0)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),re(),v(),_(),ue(),pe(),M(),me(),V=a(),ie(),H=`storybook/popular-hours`,U=ce(z,j),W={title:`Packages/Premium Analytics/Widgets/PopularHours`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:"The \"Popular hours\" card: the busiest hour of the day for the selected range, as a site-format hour label and its mean daily views, over an area chart of the whole day's distribution. Data comes from `stats/views-by/hour-of-day`, which folds the range into 24 buckets in the site's own timezone; `stats/insights` also reports an hours map, but keyed in UTC while its `highest_hour` is offset-applied, so its chart and headline disagree. Because the endpoint rejects ranges longer than 366 days, the client limits `all time` and long custom ranges to the most recent 12 months. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default."}}}},G={render:he,decorators:[b]},K={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/views-by/hour-of-day`,`loading`),()=>g(`stats/views-by/hour-of-day`,null))},q={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/views-by/hour-of-day`,`error`),()=>g(`stats/views-by/hour-of-day`,null))},J={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/views-by/hour-of-day`,`error-retryable`),()=>g(`stats/views-by/hour-of-day`,null))},Y={render:()=>B(`last-30-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/views-by/hour-of-day`,{date:`2026-01-01`,start_date:`2025-12-03`,days:30,dimension:`day-of-week`,fields:[`period`,`views`],data:[[`Mon`,100]]}),()=>h(`stats/views-by/hour-of-day`,null))},X={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/views-by/hour-of-day`,{date:`2026-01-01`,start_date:`2025-01-01`,days:366,dimension:`hour-of-day`,fields:[`period`,`views`],data:[[`7`,4],[`19`,18]]}),()=>h(`stats/views-by/hour-of-day`,null))},Z={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/views-by/hour-of-day`,`empty`),()=>g(`stats/views-by/hour-of-day`,null))},Q={render:e=>(0,V.jsx)(ge,{...e}),args:{...de},argTypes:{...se}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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