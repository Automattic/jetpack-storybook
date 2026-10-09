import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{Y as ee,Z as te,g as ne,q as re,t as s}from"./src-rrY7vAoW.js";import{On as c,Rn as ie,at as ae,n as l,t as u}from"./src-eFflVWkb.js";import{_ as oe,rt as se,x as ce}from"./charts-provider-CG5jlyMR.js";import{t as le}from"./chart-empty-state-CSZ-Fk5p.js";import{n as ue,r as de,s as d}from"./register-report-mocks-CaddGZDb.js";import{t as fe}from"./widget-state-Dy1Xd117.js";import{r as pe,t as me}from"./metric-tabs-chart-skeleton-CxZsbkWQ.js";import{t as f}from"./src-B1RxCXze.js";import{a as he,g as ge,h as _e,i as ve,l as ye,m as be,n as xe,o as p,p as Se,r as m,s as Ce}from"./with-widget-canvas-fJNR6VE0.js";import{n as we,r as Te,t as Ee}from"./with-site-time-zone-rx7NXQ-3.js";import{n as h,r as De,t as Oe}from"./with-paid-subscribers-BuVM1w0O.js";var g,_=e((()=>{s(),g={presetIds:[te,ee,re],periods:[`day`,`week`,`month`]}})),v,y=e((()=>{p(),_(),v=()=>Ce(g)})),b,x,S,ke=e((()=>{b=`_root_79bqb_1`,x=`_emptyState_79bqb_9`,S={root:b,emptyState:x}}));function Ae(e,t){return(e?.data??[]).flatMap(e=>{let n=ne(e.date_start,t);return n?[{date:n,subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function C(e,t){let n=ae((0,a.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,a.useMemo)(()=>Ae(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,refetch:n.refetch}}var je=e((()=>{u(),s(),o()})),w,T,E=e((()=>{r(),p(),f(),y(),_(),w=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],T={attributes:[ye({grain:g,offersComparison:!1}),{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:se,relevance:`high`}],example:{get attributes(){return{reportParams:v(),chartType:`line`}}}}}));function Me(e,t){return e.length?t(e[e.length-1])??0:0}function Ne(e){return w.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=A[t];return{key:t,label:n,countLabel:r,value:Me(e.current,i),current:e.current.map(e=>({date:e.date,value:i(e)}))}})}function Pe({chartType:e}){let{reportParams:n}=ce(),r=C(n,l(n,g.periods)),i=(0,a.useMemo)(()=>Ne(r),[r]),o=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,O.jsx)(`div`,{className:S.root,children:(0,O.jsx)(fe,{isLoading:r.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},renderLoading:(0,O.jsx)(me,{}),children:(0,O.jsx)(pe,{metrics:i,dataFormat:k,chartType:e,groupLabel:o,baseline:`padded`,empty:(0,O.jsx)(le,{})})})})}function D({attributes:e={},setError:t}){let n=e.reportParams??v();return(0,O.jsx)(ie,{offersComparison:!1,children:(0,O.jsx)(oe,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,O.jsx)(Pe,{chartType:e.chartType})})})}var O,k,A,Fe=e((()=>{u(),f(),o(),r(),y(),_(),ke(),je(),E(),O=i(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A={subscribers:e=>e.subscribers,paid:e=>e.paid}})),j,M,N,P,F,I,L,R,Ie=e((()=>{j=`jpa/subscribers-chart`,M=`jpa/people`,N=`Subscriber summary`,P=`Track subscriber growth over the selected period.`,F={content:`A summary of your subscriber growth over time.`},I=`subscribers`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({chartType:e}){return(0,V.jsx)(D,{attributes:{reportParams:c(!1),chartType:e}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:c(!1,e)}})}function Le({chartType:e,...t}){return(0,V.jsx)(be,{...t,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:c(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),_e(),he(),xe(),Ee(),Oe(),ue(),Fe(),E(),Ie(),V=i(),de(),H=`storybook/subscribers-chart`,U=ve(R,T),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:D,tags:[`autodocs`],decorators:[Te],beforeEach:De,argTypes:{...we,...h,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[m]},J={render:z,args:{chartType:`bar`},decorators:[m]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(d(`stats/subscribers`,`loading`),()=>d(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(d(`stats/subscribers`,`error`),()=>d(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(d(`stats/subscribers`,`empty`),()=>d(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(Le,{...e}),args:{...Se,widgetWidth:3,...G},argTypes:{...ge,...h,...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, on the range its header control defaults to. Turn on
"Has paid subscribers" to add the Paid subscribers metric beside Subscribers.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersChartOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/subscribers', 'loading');
    return () => setReportMockState('stats/subscribers', null);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersChartOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/subscribers', 'error');
    return () => setReportMockState('stats/subscribers', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersChartOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/subscribers', 'empty');
    return () => setReportMockState('stats/subscribers', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no points: the widget shows the generic empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <SubscribersChartDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 3,
    ...DEFAULT_CHART_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...paidSubscribersArgTypes,
    ...CHART_TYPE_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness,
including the date control the widget declares in its own header.

Full width, as the Subscribers default layout places it: narrower than that and
the host collapses the header controls behind the settings icon.`,...Q.parameters?.docs?.description}}},$=[`Default`,`BarChart`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as BarChart,q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};