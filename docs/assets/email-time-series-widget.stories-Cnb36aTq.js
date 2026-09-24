import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Ms as a,Uu as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{m as l,v as ee}from"./hooks-EqexNIS_.js";import{M as te,t as u}from"./src-C-E2d-Lb.js";import{g as ne,q as d,t as f}from"./src-BNPYbbO9.js";import{$t as p,Mn as re,cn as ie,d as ae,f as oe,ln as se,r as ce,t as m}from"./src-4QblZ5-B.js";import{A as h}from"./helpers-CSCeMBg5.js";import{n as g,t as le}from"./with-chart-theme-BH7xzuu8.js";import{r as ue,t as de}from"./metric-tabs-chart-skeleton-D4mi4aTZ.js";import{c as _,i as fe,r as v}from"./register-report-mocks-Zvgfz9a1.js";import{t as pe}from"./widget-state-JaaSW8Bs.js";import{t as y}from"./src-CQ6Dbsxx.js";import{a as me,d as he,f as ge,i as _e,n as ve,p as ye,r as b,u as be}from"./with-widget-canvas-CHaoTy9y.js";import{n as xe,t as Se}from"./preset-for-story-interval-BAw2k2Wx.js";import{n as Ce,r as we,t as Te}from"./with-site-time-zone-ngtW_VDw.js";var x,S,Ee=e((()=>{x=`_root_3q2cr_1`,S={root:x}}));function De(e){return t(e===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)}function Oe(e){return e===`clicks`?e=>n(`%s Click`,`%s Clicks`,e,`jetpack-premium-analytics-pkg`):e=>n(`%s Open`,`%s Opens`,e,`jetpack-premium-analytics-pkg`)}function ke({metric:e,chartType:n}){let{reportParams:r}=ee(),i=re(r.post_id),a=i>0,s=ce(r.interval,ie),c=oe(i,r,{enabled:a&&e===`opens`}),l=ae(i,r,{enabled:a&&e===`clicks`}),u=e===`clicks`?l:c,d=(0,o.useCallback)(()=>{u.refetch()},[u]),f=u.data,p=E[e],m=(0,o.useMemo)(()=>{if(f)return s===`day`?f:se(f,s,e=>{let t=Number(e[p]??0);return{value:t,[p]:t}})},[f,s,p]),h=(0,o.useMemo)(()=>{let t=(m?.data??[]).flatMap(e=>{let t=ne(e.date_start,u.timezone);return t?[{date:t,value:Number(e[p]??0)}]:[]});return[{key:p,label:De(e),countLabel:Oe(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[m,p,e,u.timezone]),g=(m?.data?.length??0)>0;return(0,w.jsx)(`div`,{className:S.root,children:(0,w.jsx)(pe,{isLoading:u.isLoading,isFetching:u.isFetching,isError:u.isError,isEmpty:!a||!g,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:te,description:t(a?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,w.jsx)(de,{}),children:(0,w.jsx)(ue,{metrics:h,dataFormat:T,chartType:n})})})}function C({attributes:e={}}){return(0,w.jsx)(l,{attributes:e,children:(0,w.jsx)(ke,{metric:e.metric??`opens`,chartType:e.chartType===`bar`?`bar`:`line`})})}var w,T,E,Ae=e((()=>{m(),f(),u(),y(),s(),r(),Ee(),w=i(),T={type:`number`,options:{useMultipliers:!0,decimals:0}},E={opens:`opens_count`,clicks:`clicks_count`}})),D,je=e((()=>{c(),y(),D={icon:a,attributes:[h()],example:{attributes:{metric:`opens`,chartType:`line`}}}})),O,k,A,j,M,N,P,Me=e((()=>{O=`jpa/email-time-series`,k=`Email performance`,A=`A single email's opens or clicks over time since it was sent.`,j={content:`How a single email performed over time: opens or clicks per day over the window the page reports — on the post detail page, the first 30 days after the send.`},M=`stats`,N=`framed`,P={name:O,title:k,description:A,help:j,category:M,presentation:N}}));function F({metric:e,interval:t,chartType:n},r=!1){return{reportParams:{...p(r,xe(t)),interval:t,post_id:B},metric:e,chartType:n}}function I(e){return(0,R.jsx)(C,{attributes:F(e)})}function L(e){return(0,R.jsx)(C,{attributes:{reportParams:{...p(!1),interval:`day`,post_id:e},metric:`opens`}})}function Ne({metric:e,interval:t,chartType:n,...r}){return(0,R.jsx)(he,{...r,widgetType:_e(P,D),renderModule:z,renderComponent:C,attributes:F({metric:e,interval:t,chartType:n},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),f(),v(),le(),ge(),me(),Se(),ve(),Te(),Ae(),je(),Me(),R=i(),fe(),z=`storybook/email-time-series`,B=1234,V=[`opens`,`clicks`],H=[`day`,`week`,`month`],U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:C,tags:[`autodocs`],argTypes:{...Ce,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:`The "Email performance" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The bucket size follows the page's chart interval control: an hourly window (the last-24-hours preset) draws the hourly buckets directly, while weekly and monthly grouping aggregate the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked \`reportParams.post_id\`. The post detail page has no comparison control, so comparison report params are ignored.`}}},decorators:[g,we]},W={render:I,args:{metric:`opens`,interval:`day`,chartType:`line`},decorators:[b]},G={render:I,args:{metric:`clicks`,interval:`day`,chartType:`line`},decorators:[b]},K={render:I,args:{metric:`opens`,interval:`week`,chartType:`line`},decorators:[b]},q={render:({metric:e,chartType:t})=>(0,R.jsx)(C,{attributes:{reportParams:{...p(!1,d),post_id:B},metric:e,chartType:t}}),args:{metric:`opens`,chartType:`line`},parameters:{controls:{exclude:[`interval`]}},decorators:[b]},J={render:()=>L(5701),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`stats/opens/emails`,`loading`),()=>_(`stats/opens/emails`,null))},Y={render:()=>L(5702),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`stats/opens/emails`,`error`),()=>_(`stats/opens/emails`,null))},X={render:()=>L(5703),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`stats/opens/emails`,`empty`),()=>_(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(C,{attributes:{reportParams:p(!1),metric:`opens`}}),decorators:[b]},Q={render:e=>(0,R.jsx)(Ne,{...e}),args:{...be,metric:`opens`,interval:`day`,chartType:`line`},argTypes:{...ye,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    interval: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`Default populated state — the selected email's opens per day.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'clicks',
    interval: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The clicks timeline used by the fixed Email clicks composition.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    interval: 'week',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Weekly grouping: the daily buckets aggregate client-side into ISO weeks.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: ({
    metric,
    chartType
  }) => <EmailTimeSeriesRender attributes={{
    reportParams: {
      ...getDefaultQueryParams(false, PRESET_LAST_24_HOURS),
      post_id: MOCK_EMAIL_ID
    },
    metric,
    chartType
  }} />,
  args: {
    metric: 'opens',
    chartType: 'line'
  },
  parameters: {
    controls: {
      exclude: ['interval']
    }
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The last-24-hours preset: an hourly window that usually spans two calendar
days. The endpoint anchors its hourly buckets on the start day's midnight,
so the mock returns buckets from before the window opens — the data layer
trims them, and the chart draws exactly the selected 24 hours (WOOA7S-1840).
The preset pins the page interval to \`hour\`, so the interval control is
hidden here and no interval arg is wired.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailTimeSeriesForState(5701),
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'loading');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailTimeSeriesForState(5702),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'error');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailTimeSeriesForState(5703),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'empty');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no buckets: the widget shows its empty state.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <EmailTimeSeriesRender attributes={{
    reportParams: getDefaultQueryParams(false),
    metric: 'opens'
  }} />,
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:'No email selected: `reportParams.post_id` is unset, so no request is made and\nthe empty state prompts to open an email report instead of "no activity".',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <EmailTimeSeriesDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    metric: 'opens',
    interval: 'day',
    chartType: 'line'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    metric: {
      control: 'select',
      options: METRIC_OPTIONS
    },
    interval: {
      control: 'select',
      options: INTERVAL_OPTIONS
    },
    chartType: {
      control: 'radio',
      options: ['line', 'bar']
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Clicks`,`ByWeeks`,`LastTwentyFourHours`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as ByWeeks,G as Clicks,W as Default,X as Empty,Y as Error,q as LastTwentyFourHours,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,U as default};