import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{j as a,t as o}from"./build-module-Dxhc9xxH.js";import{_ as s,h as ee,t as c}from"./src-CFLkDNMV.js";import{G as te,In as l,Pn as ne,U as re,V as ie,W as ae,q as u,t as d}from"./src-l1BVQSEn.js";import{It as oe,Jt as se,R as f,W as ce,m as le,wt as ue}from"./charts-provider-CztY3Jeb.js";import{t as de}from"./widget-state-CqPm5upe.js";import{i as p}from"./with-story-router-B4g1hwKi.js";import{n as fe,t as pe}from"./with-chart-theme-NKMNP6iq.js";import{t as me}from"./chart-empty-state-a7XVUn1s.js";import{n as m,r as h,s as g}from"./register-report-mocks-CDOnqFid.js";import{r as he,t as ge}from"./metric-tabs-chart-skeleton-B8pkrxfR.js";import{a as _,c as v,i as y,l as _e,o as ve,r as ye,s as be,u as xe}from"./with-widget-canvas-6h2CritM.js";import{n as Se,r as Ce,t as we}from"./with-site-time-zone-Bh39N5LR.js";var b,x,Te=e((()=>{b=`_root_3q2cr_1`,x={root:b}}));function Ee(e){return t(e===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)}function De(e){return e===`clicks`?e=>n(`%s Click`,`%s Clicks`,e,`jetpack-premium-analytics-pkg`):e=>n(`%s Open`,`%s Opens`,e,`jetpack-premium-analytics-pkg`)}function Oe({metric:e,chartType:n,sendWindow:r,sentAt:i}){let{reportParams:o}=ce(),c=ne(o.post_id),l=c>0,u=ie(),d=(0,a.useMemo)(()=>te(r,{day:o.from,sentAt:i},ee()),[r,o.from,i,u]),f=d?.interval??`day`,p=(0,a.useMemo)(()=>d?{...o,preset:void 0,...d}:{...o,interval:f},[o,d,f]),fe=ae(c,p,{enabled:l&&e===`opens`}),pe=re(c,p,{enabled:l&&e===`clicks`}),m=e===`clicks`?pe:fe,h=(0,a.useCallback)(()=>{m.refetch()},[m]),g=m.data,_=w[e],v=(0,a.useMemo)(()=>{let t=(g?.data??[]).flatMap(e=>{let t=s(e.date_start,m.timezone),n=s(e.date_end,m.timezone),r=Number(e[_]??0);return t?[n?{date:t,endDate:n,value:r}:{date:t,value:r}]:[]});return[{key:_,label:Ee(e),countLabel:De(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[g,_,e,m.timezone]);return le({csv:{...(0,a.useMemo)(()=>oe(v[0].current.some(e=>(e.value??0)>0)?v:[],{zone:m.timezone,withTime:f===`hour`,dateLabel:t(`Date`,`jetpack-premium-analytics-pkg`)}),[v,m.timezone,f]),filenamePrefix:`email-${c}-${e}`,...d?{range:{from:d.from,to:d.to}}:{hasDateRange:!0},status:{isLoading:m.isLoading,isError:m.isError,isPlaceholderData:m.isPlaceholderData}}}),(0,C.jsx)(`div`,{className:x.root,children:(0,C.jsx)(de,{isLoading:m.isLoading,isFetching:m.isFetching,isError:m.isError,isEmpty:!l,error:se(m.error,{retryDescription:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),empty:{description:t(`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,C.jsx)(ge,{}),children:(0,C.jsx)(he,{metrics:v,dataFormat:ue,chartType:n,tickResolution:f,empty:(0,C.jsx)(me,{}),hideSingleMetricLabel:!0})})})}function S({attributes:e={}}){return(0,C.jsx)(f,{attributes:e,children:(0,C.jsx)(Oe,{metric:e.metric??`opens`,chartType:e.chartType===`bar`?`bar`:`line`,sendWindow:u(e.sendWindow),sentAt:e.reportParams?.sent_at})})}var C,w,ke=e((()=>{d(),c(),p(),o(),r(),Te(),C=i(),w={opens:`opens_count`,clicks:`clicks_count`}})),T,Ae=e((()=>{d(),T={attributes:[{id:`sendWindow`,getValue:({item:e})=>u(e.sendWindow)}],example:{attributes:{metric:`opens`,chartType:`line`}}}})),E,D,O,k,A,j,M,N,P,je=e((()=>{E=`jpa/email-time-series`,D=`jpa/envelope`,O=`Email performance`,k=`A single email's opens or clicks over time since it was sent.`,A={content:`How a single email performed since it was sent: opens or clicks by the hour over the first 24 hours, by the day over the first week or the first 30 days, or by the month over all time.`},j=`stats`,M=`framed`,N=[{id:`sendWindow`,type:`jpa/select`,label:`Time since send`,relevance:`high`,elements:[{value:`first-24-hours`,label:`First 24 hours`},{value:`first-week`,label:`First week`},{value:`first-30-days`,label:`First 30 days`},{value:`all-time`,label:`All time`}]},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],P={name:E,icon:D,title:O,description:k,help:A,category:j,presentation:M,attributes:N}}));function F({metric:e,sendWindow:t,chartType:n},r=!1){return{reportParams:{...l(r),post_id:B},metric:e,sendWindow:t,chartType:n}}function I(e){return(0,R.jsx)(S,{attributes:F(e)})}function L(e){return(0,R.jsx)(S,{attributes:{reportParams:{...l(!1),post_id:e},metric:`opens`}})}function Me({metric:e,sendWindow:t,chartType:n,...r}){return(0,R.jsx)(v,{...r,widgetType:_(P,T),renderModule:z,renderComponent:S,attributes:F({metric:e,sendWindow:t,chartType:n},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),m(),pe(),_e(),ve(),ye(),we(),ke(),Ae(),je(),R=i(),h(),z=`storybook/email-time-series`,B=1234,V=[`opens`,`clicks`],H=P.attributes[0].elements.map(e=>e.value),U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:S,tags:[`autodocs`],argTypes:{...Se,metric:{control:`select`,options:V},sendWindow:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:`The "Email performance" widget. Draws a single sent email's opens or clicks since it was sent — the chart section of the legacy email detail page. Its own "Time since send" control picks the window and with it the bucket: the first 24 hours by the hour, the first week or first 30 days by the day, all time by the month, each as the endpoint returns it. The window is counted from the start of the host's range, which the post page pins to the send day. Scoped to one email via a mocked \`reportParams.post_id\`. The post detail page has no comparison control, so comparison report params are ignored.`}}},decorators:[fe,Ce]},W={render:I,args:{metric:`opens`,sendWindow:`first-30-days`,chartType:`line`},decorators:[y]},G={render:I,args:{metric:`clicks`,sendWindow:`first-30-days`,chartType:`line`},decorators:[y]},K={render:I,args:{metric:`opens`,sendWindow:`all-time`,chartType:`line`},decorators:[y]},q={render:I,args:{metric:`opens`,sendWindow:`first-24-hours`,chartType:`line`},decorators:[y]},J={render:()=>L(5701),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/opens/emails`,`loading`),()=>g(`stats/opens/emails`,null))},Y={render:()=>L(5702),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/opens/emails`,`error`),()=>g(`stats/opens/emails`,null))},X={render:()=>L(5703),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/opens/emails`,`empty`),()=>g(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(S,{attributes:{reportParams:l(!1),metric:`opens`}}),decorators:[y]},Q={tags:[`widget-dashboard`],render:e=>(0,R.jsx)(Me,{...e}),args:{...be,metric:`opens`,sendWindow:`first-30-days`,chartType:`line`},argTypes:{...xe,metric:{control:`select`,options:V},sendWindow:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}}},$=[`Default`,`Clicks`,`AllTime`,`FirstTwentyFourHours`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    sendWindow: 'first-30-days',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`Default populated state — the selected email's opens per day over its first 30 days.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'clicks',
    sendWindow: 'first-30-days',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The clicks timeline used by the fixed Email clicks composition.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    sendWindow: 'all-time',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`All time: one bucket per calendar month, from the month of the send.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    sendWindow: 'first-24-hours',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The first 24 hours. The endpoint anchors its hourly buckets on the start
day's midnight, so the mock returns buckets from before the window opens and
the data layer trims them (WOOA7S-1840).`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
  render: args => <EmailTimeSeriesDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    metric: 'opens',
    sendWindow: 'first-30-days',
    chartType: 'line'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    metric: {
      control: 'select',
      options: METRIC_OPTIONS
    },
    sendWindow: {
      control: 'select',
      options: SEND_WINDOW_OPTIONS
    },
    chartType: {
      control: 'radio',
      options: ['line', 'bar']
    }
  }
}`,...Q.parameters?.docs?.source}}}}))();export{K as AllTime,G as Clicks,W as Default,X as Empty,Y as Error,q as FirstTwentyFourHours,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,U as default};