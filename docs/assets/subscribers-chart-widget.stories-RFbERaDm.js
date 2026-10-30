import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-sy00sX6O.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-CPdP9iK8.js";import{B as ee,I as s}from"./charts-provider-CQF40eTg.js";import{$ as c,Z as l,t as u,tt as te,y as ne}from"./src-C7ZJjxnS.js";import{_t as re,ht as ie,l as ae,t as d,vn as f,wn as oe}from"./src-BwEQ_OJQ.js";import{t as se}from"./widget-state-C5-GuX-o.js";import{i as ce}from"./with-story-router-DkeR1qN6.js";import{n as le,r as ue,s as p}from"./register-report-mocks-B-OTOegr.js";import{r as de,t as fe}from"./metric-tabs-chart-skeleton-Duo87DW-.js";import{a as pe,f as me,g as he,h as ge,i as _e,m as ve,n as ye,o as m,p as be,r as h,u as xe}from"./with-widget-canvas-8ry8XA2Z.js";import{n as Se,r as Ce,t as we}from"./with-site-time-zone-B0D8ga1m.js";import{n as g,r as Te,t as Ee}from"./with-paid-subscribers-HyXsGrPi.js";var _,v=e((()=>{u(),_={presetIds:[te,c,l],periods:[`day`,`week`,`month`]}})),y,b=e((()=>{m(),v(),y=()=>xe(_)})),x,S,C,De=e((()=>{x=`_root_79bqb_1`,S=`_emptyState_79bqb_9`,C={root:x,emptyState:S}}));function Oe(e,t){return(e?.data??[]).flatMap(e=>{let n=ne(e.date_start,t);return n?[{date:n,subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function ke(e,t){let n=re((0,o.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,o.useMemo)(()=>Oe(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,refetch:n.refetch}}var Ae=e((()=>{d(),u(),a()})),w,T,E=e((()=>{r(),m(),b(),v(),w=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],T={attributes:[me({grain:_,offersComparison:!1})],example:{get attributes(){return{reportParams:y(),chartType:`line`}}}}}));function je(e,t){return e.length?t(e[e.length-1])??0:0}function Me(e){return w.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=A[t];return{key:t,label:n,countLabel:r,value:je(e.current,i),current:e.current.map(e=>({date:e.date,value:i(e)}))}})}function Ne({chartType:e}){let{reportParams:n}=ee(),r=ae(n,_.periods),i=ke(n,r),a=!i.isLoading&&!i.isError&&i.current.every(e=>!e.subscribers),s=ie(void 0,{enabled:a}),c=s.data?.total_subscribers===0,l=(0,o.useMemo)(()=>Me(i),[i]),u=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,O.jsx)(`div`,{className:C.root,children:(0,O.jsx)(se,{isLoading:i.isLoading||a&&s.isLoading,isFetching:i.isFetching,isError:i.current.length===0&&i.isError,isEmpty:a,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:i.refetch}]},empty:c?{description:t(`You don’t have subscribers yet. Newsletter can help you turn readers into an audience.`,`jetpack-premium-analytics-pkg`),action:{label:t(`Learn more`,`jetpack-premium-analytics-pkg`),href:`https://jetpack.com/support/newsletter/`,openInNewTab:!0}}:void 0,renderLoading:(0,O.jsx)(fe,{}),children:(0,O.jsx)(de,{metrics:l,dataFormat:k,chartType:e,tickResolution:r,groupLabel:u,baseline:`padded`,chartTitle:t(`Subscriber summary`,`jetpack-premium-analytics-pkg`)})})})}function D({attributes:e={},setError:t}){let n=e.reportParams??y();return(0,O.jsx)(oe,{offersComparison:!1,children:(0,O.jsx)(s,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,O.jsx)(Ne,{chartType:e.chartType})})})}var O,k,A,Pe=e((()=>{d(),ce(),a(),r(),b(),v(),De(),Ae(),E(),O=i(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A={subscribers:e=>e.subscribers,paid:e=>e.paid}})),j,M,N,P,F,I,L,R,z,Fe=e((()=>{j=`jpa/subscribers-chart`,M=`jpa/people`,N=`Subscriber summary`,P=`Track subscriber growth over the selected period.`,F={content:`A summary of your subscriber growth over time.`},I=`subscribers`,L=`framed`,R=[{id:`reportParams`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],z={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L,attributes:R}}));function B({chartType:e}){return(0,H.jsx)(D,{attributes:{reportParams:f(!1),chartType:e}})}function V(e){return(0,H.jsx)(D,{attributes:{reportParams:f(!1,e)}})}function Ie({chartType:e,...t}){return(0,H.jsx)(ve,{...t,widgetType:Le,renderModule:U,renderComponent:D,attributes:{reportParams:f(!1),chartType:e}})}var H,U,Le,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ge(),pe(),ye(),we(),Ee(),le(),Pe(),E(),Fe(),H=i(),ue(),U=`storybook/subscribers-chart`,Le=_e(z,T),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:D,tags:[`autodocs`],decorators:[Ce],beforeEach:Te,argTypes:{...Se,...g,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:B,args:{...G},decorators:[h]},J={render:B,args:{chartType:`bar`},decorators:[h]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(p(`stats/subscribers`,`loading`),()=>p(`stats/subscribers`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(p(`stats/subscribers`,`error`),()=>p(`stats/subscribers`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(p(`stats/subscribers`,`empty`),()=>p(`stats/subscribers`,null))},Q={render:e=>(0,H.jsx)(Ie,{...e}),args:{...be,widgetWidth:3,...G},argTypes:{...he,...g,...W}},$=[`Default`,`BarChart`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
the host collapses the header controls behind the settings icon.`,...Q.parameters?.docs?.description}}}}))();export{J as BarChart,q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};