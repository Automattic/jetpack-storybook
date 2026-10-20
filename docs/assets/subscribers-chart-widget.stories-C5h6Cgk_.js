import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{Y as s,Z as c,_ as ee,q as te,t as l}from"./src-BGYQLfcD.js";import{_n as ne,a as re,ct as ie,dn as u,t as d,ut as ae}from"./src-D2IHjuoj.js";import{ct as oe,m as se,v as ce}from"./charts-provider-B4DO9Yxs.js";import{n as le,r as ue,s as f}from"./register-report-mocks-na9LuJMa.js";import{t as de}from"./widget-state-DSKZ3UcR.js";import{r as fe,t as pe}from"./metric-tabs-chart-skeleton-DJ8eGrnM.js";import{t as p}from"./src-CCmGlWg_.js";import{a as me,g as he,h as ge,i as _e,l as ve,m as ye,n as be,o as m,p as xe,r as h,s as Se}from"./with-widget-canvas-DUlnAQvU.js";import{n as Ce,r as we,t as Te}from"./with-site-time-zone-Cv62QLkb.js";import{n as g,r as Ee,t as De}from"./with-paid-subscribers-CyLxdR0S.js";var _,v=e((()=>{l(),_={presetIds:[c,s,te],periods:[`day`,`week`,`month`]}})),y,b=e((()=>{m(),v(),y=()=>Se(_)})),x,S,C,Oe=e((()=>{x=`_root_79bqb_1`,S=`_emptyState_79bqb_9`,C={root:x,emptyState:S}}));function ke(e,t){return(e?.data??[]).flatMap(e=>{let n=ee(e.date_start,t);return n?[{date:n,subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function Ae(e,t){let n=ae((0,a.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,a.useMemo)(()=>ke(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,refetch:n.refetch}}var je=e((()=>{d(),l(),o()})),w,T,E=e((()=>{r(),m(),p(),b(),v(),w=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],T={attributes:[ve({grain:_,offersComparison:!1}),{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:oe,relevance:`high`}],example:{get attributes(){return{reportParams:y(),chartType:`line`}}}}}));function Me(e,t){return e.length?t(e[e.length-1])??0:0}function Ne(e){return w.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=A[t];return{key:t,label:n,countLabel:r,value:Me(e.current,i),current:e.current.map(e=>({date:e.date,value:i(e)}))}})}function Pe({chartType:e}){let{reportParams:n}=ce(),r=Ae(n,re(n,_.periods)),i=!r.isLoading&&!r.isError&&r.current.every(e=>!e.subscribers),o=ie(void 0,{enabled:i}),s=o.data?.total_subscribers===0,c=(0,a.useMemo)(()=>Ne(r),[r]),ee=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,O.jsx)(`div`,{className:C.root,children:(0,O.jsx)(de,{isLoading:r.isLoading||i&&o.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:i,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},empty:s?{description:t(`You don’t have subscribers yet. Newsletter can help you turn readers into an audience.`,`jetpack-premium-analytics-pkg`),action:{label:t(`Learn more`,`jetpack-premium-analytics-pkg`),href:`https://jetpack.com/support/newsletter/`,openInNewTab:!0}}:void 0,renderLoading:(0,O.jsx)(pe,{}),children:(0,O.jsx)(fe,{metrics:c,dataFormat:k,chartType:e,groupLabel:ee,baseline:`padded`,chartTitle:t(`Subscriber summary`,`jetpack-premium-analytics-pkg`)})})})}function D({attributes:e={},setError:t}){let n=e.reportParams??y();return(0,O.jsx)(ne,{offersComparison:!1,children:(0,O.jsx)(se,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,O.jsx)(Pe,{chartType:e.chartType})})})}var O,k,A,Fe=e((()=>{d(),p(),o(),r(),b(),v(),Oe(),je(),E(),O=i(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A={subscribers:e=>e.subscribers,paid:e=>e.paid}})),j,M,N,P,F,I,L,R,Ie=e((()=>{j=`jpa/subscribers-chart`,M=`jpa/people`,N=`Subscriber summary`,P=`Track subscriber growth over the selected period.`,F={content:`A summary of your subscriber growth over time.`},I=`subscribers`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({chartType:e}){return(0,V.jsx)(D,{attributes:{reportParams:u(!1),chartType:e}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:u(!1,e)}})}function Le({chartType:e,...t}){return(0,V.jsx)(ye,{...t,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:u(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ge(),me(),be(),Te(),De(),le(),Fe(),E(),Ie(),V=i(),ue(),H=`storybook/subscribers-chart`,U=_e(R,T),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:D,tags:[`autodocs`],decorators:[we],beforeEach:Ee,argTypes:{...Ce,...g,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[h]},J={render:z,args:{chartType:`bar`},decorators:[h]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(f(`stats/subscribers`,`loading`),()=>f(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(f(`stats/subscribers`,`error`),()=>f(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(f(`stats/subscribers`,`empty`),()=>f(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(Le,{...e}),args:{...xe,widgetWidth:3,...G},argTypes:{...he,...g,...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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