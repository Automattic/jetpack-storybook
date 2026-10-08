import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vu as a,ku as o,si as ee,t as te}from"./build-module-DNhkEVJn.js";import{Y as ne,Z as re,g as ie,q as ae,t as s}from"./src-CrSiwkkp.js";import{Gn as oe,Nn as c,n as se,nt as ce,t as l}from"./src-ElEMIg0X.js";import{_ as le,tt as ue,x as de}from"./charts-provider-Ddn3RLVH.js";import{t as u}from"./chart-empty-state-DAqmv3bF.js";import{n as fe,r as pe,s as d}from"./register-report-mocks-BFHM8C1j.js";import{t as me}from"./widget-state-Dz9sEq7G.js";import{r as he,t as ge}from"./metric-tabs-chart-skeleton-DYGl-TkT.js";import{t as f}from"./src-CC-PC0nu.js";import{a as _e,g as ve,h as ye,i as be,l as xe,m as Se,n as p,o as m,p as Ce,r as h,s as we}from"./with-widget-canvas-BXgfJ-A4.js";import{n as Te,r as Ee,t as De}from"./with-site-time-zone-rx7NXQ-3.js";import{n as g,r as Oe,t as ke}from"./with-paid-subscribers-CidW67Oo.js";var _,v=e((()=>{s(),_={presetIds:[re,ne,ae],periods:[`day`,`week`,`month`]}})),y,b=e((()=>{m(),v(),y=we(_)})),x,S,C,w=e((()=>{x=`_root_79bqb_1`,S=`_emptyState_79bqb_9`,C={root:x,emptyState:S}}));function Ae(e,t){return(e?.data??[]).flatMap(e=>{let n=ie(e.date_start,t);return n?[{date:n,subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function je(e,t){let n=ce((0,a.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,a.useMemo)(()=>Ae(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,refetch:n.refetch}}var Me=e((()=>{l(),s(),o()})),T,E,D=e((()=>{r(),te(),m(),f(),b(),v(),T=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],E={icon:ee,attributes:[xe({grain:_,offersComparison:!1}),ue()],example:{attributes:{reportParams:y,chartType:`line`}}}}));function Ne(e,t){return e.length?t(e[e.length-1])??0:0}function Pe(e){return T.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=j[t];return{key:t,label:n,countLabel:r,value:Ne(e.current,i),current:e.current.map(e=>({date:e.date,value:i(e)}))}})}function Fe({chartType:e}){let{reportParams:n}=de(),r=je(n,se(n,_.periods)),i=(0,a.useMemo)(()=>Pe(r),[r]),o=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(`div`,{className:C.root,children:(0,k.jsx)(me,{isLoading:r.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:!1,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},renderLoading:(0,k.jsx)(ge,{}),children:(0,k.jsx)(he,{metrics:i,dataFormat:A,chartType:e,groupLabel:o,baseline:`padded`,empty:(0,k.jsx)(u,{})})})})}function O({attributes:e={},setError:t}){let n=e.reportParams??y;return(0,k.jsx)(oe,{offersComparison:!1,children:(0,k.jsx)(le,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,k.jsx)(Fe,{chartType:e.chartType})})})}var k,A,j,Ie=e((()=>{l(),f(),o(),r(),b(),v(),w(),Me(),D(),k=i(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={subscribers:e=>e.subscribers,paid:e=>e.paid}})),M,N,P,F,I,L,R,Le=e((()=>{M=`jpa/subscribers-chart`,N=`Subscriber summary`,P=`Track subscriber growth over the selected period.`,F={content:`A summary of your subscriber growth over time.`},I=`subscribers`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({chartType:e}){return(0,V.jsx)(O,{attributes:{reportParams:c(!1),chartType:e}})}function B(e){return(0,V.jsx)(O,{attributes:{reportParams:c(!1,e)}})}function Re({chartType:e,...t}){return(0,V.jsx)(Se,{...t,widgetType:U,renderModule:H,renderComponent:O,attributes:{reportParams:c(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),ye(),_e(),p(),De(),ke(),fe(),Ie(),D(),Le(),V=i(),pe(),H=`storybook/subscribers-chart`,U=be(R,E),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:O,tags:[`autodocs`],decorators:[Ee],beforeEach:Oe,argTypes:{...Te,...g,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[h]},J={render:z,args:{chartType:`bar`},decorators:[h]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(d(`stats/subscribers`,`loading`),()=>d(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(d(`stats/subscribers`,`error`),()=>d(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(d(`stats/subscribers`,`empty`),()=>d(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(Re,{...e}),args:{...Ce,widgetWidth:3,...G},argTypes:{...ve,...g,...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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