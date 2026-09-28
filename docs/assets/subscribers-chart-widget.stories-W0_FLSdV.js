import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,ku as o,si as ee,t as te}from"./build-module-DNhkEVJn.js";import{m as ne,v as re}from"./hooks-Cw5CpI3k.js";import{J as ie,K as ae,X as oe,g as se,t as s}from"./src-BNPYbbO9.js";import{$t as c,n as ce,t as l,yn as le,z as ue}from"./src-BZURFkTw.js";import{A as de}from"./helpers-CCZ8U_L6.js";import{r as fe,t as u}from"./metric-tabs-chart-skeleton-Bfq_c1Nb.js";import{n as pe,r as me,s as d}from"./register-report-mocks-CzXkOQK-.js";import{t as he}from"./widget-state-BNqjlPyJ.js";import{t as f}from"./src-CkRwhFw7.js";import{a as ge,d as _e,f as ve,i as ye,l as be,n as xe,o as p,p as Se,r as m,s as Ce,u as we}from"./with-widget-canvas-DcRdgFop.js";import{n as Te,r as Ee,t as De}from"./with-site-time-zone-ngtW_VDw.js";import{n as h,r as Oe,t as ke}from"./with-paid-subscribers-DFDjoIrQ.js";var g,_=e((()=>{s(),g={presetIds:[oe,ie,ae],periods:[`day`,`week`,`month`]}})),v,y=e((()=>{p(),_(),v=Ce(g)})),b,x,S,C=e((()=>{b=`_root_79bqb_1`,x=`_emptyState_79bqb_9`,S={root:b,emptyState:x}}));function w(e,t){return(e?.data??[]).flatMap(e=>{let n=se(e.date_start,t);return n?[{date:n,subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function Ae(e,t){let n=ue((0,a.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,a.useMemo)(()=>w(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,refetch:n.refetch}}var je=e((()=>{l(),s(),o()})),T,E,D=e((()=>{r(),te(),p(),f(),y(),_(),T=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],E={icon:ee,attributes:[be({grain:g,offersComparison:!1}),de()],example:{attributes:{reportParams:v,chartType:`line`}}}}));function Me(e,t){return e.length?t(e[e.length-1])??0:0}function Ne(e){return T.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=j[t];return{key:t,label:n,countLabel:r,value:Me(e.current,i),current:e.current.map(e=>({date:e.date,value:i(e)}))}})}function Pe({chartType:e}){let{reportParams:n}=re(),r=Ae(n,ce(n,g.periods)),i=(0,a.useMemo)(()=>Ne(r),[r]),o=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(he,{isLoading:r.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:r.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},renderLoading:(0,k.jsx)(u,{}),children:(0,k.jsx)(fe,{metrics:i,dataFormat:A,chartType:e,groupLabel:o,baseline:`padded`})})})}function O({attributes:e={},setError:t}){let n=e.reportParams??v;return(0,k.jsx)(le,{offersComparison:!1,children:(0,k.jsx)(ne,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,k.jsx)(Pe,{chartType:e.chartType})})})}var k,A,j,Fe=e((()=>{l(),f(),o(),r(),y(),_(),C(),je(),D(),k=i(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={subscribers:e=>e.subscribers,paid:e=>e.paid}})),M,N,P,F,I,L,R,Ie=e((()=>{M=`jpa/subscribers-chart`,N=`Subscriber summary`,P=`Track subscriber growth over the selected period.`,F={content:`A summary of your subscriber growth over time.`},I=`subscribers`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({chartType:e}){return(0,V.jsx)(O,{attributes:{reportParams:c(!1),chartType:e}})}function B(e){return(0,V.jsx)(O,{attributes:{reportParams:c(!1,e)}})}function Le({chartType:e,...t}){return(0,V.jsx)(_e,{...t,widgetType:U,renderModule:H,renderComponent:O,attributes:{reportParams:c(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),ve(),ge(),xe(),De(),ke(),pe(),Fe(),D(),Ie(),V=i(),me(),H=`storybook/subscribers-chart`,U=ye(R,E),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:O,tags:[`autodocs`],decorators:[Ee],beforeEach:Oe,argTypes:{...Te,...h,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[m]},J={render:z,args:{chartType:`bar`},decorators:[m]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(d(`stats/subscribers`,`loading`),()=>d(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(d(`stats/subscribers`,`error`),()=>d(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(d(`stats/subscribers`,`empty`),()=>d(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(Le,{...e}),args:{...we,widgetWidth:3,...G},argTypes:{...Se,...h,...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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