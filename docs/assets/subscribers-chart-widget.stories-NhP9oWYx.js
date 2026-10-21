import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{Mu as a,bu as o}from"./build-module-BI3_PVVO.js";import{Y as s,Z as c,_ as ee,q as te,t as l}from"./src-DFqe9oto.js";import{ft as ne,pn as u,s as re,t as d,ut as ie,yn as ae}from"./src-5g9sGwvT.js";import{m as oe,v as se}from"./charts-provider-Dz_9KfQe.js";import{$ as f,Q as ce,X as p,Y as le,Z as ue,ct as de,et as fe,lt as pe,nt as me,ot as he,st as ge,t as _e}from"./src-CwWcdYh9.js";import{t as ve}from"./widget-state-CgiqWOxt.js";import{a as ye,o as be,u as m}from"./widget-state-B6SJsJzX.js";import{r as xe,t as Se}from"./metric-tabs-chart-skeleton-B3VCQA7R.js";import{n as Ce,r as we,t as Te}from"./with-site-time-zone-B0D8ga1m.js";import{n as h,r as Ee,t as De}from"./with-paid-subscribers-CMO-lcJL.js";var g,_=e((()=>{l(),g={presetIds:[c,s,te],periods:[`day`,`week`,`month`]}})),v,y=e((()=>{f(),_(),v=()=>fe(g)})),b,x,S,Oe=e((()=>{b=`_root_79bqb_1`,x=`_emptyState_79bqb_9`,S={root:b,emptyState:x}}));function ke(e,t){return(e?.data??[]).flatMap(e=>{let n=ee(e.date_start,t);return n?[{date:n,subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function Ae(e,t){let n=ne((0,a.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,a.useMemo)(()=>ke(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,refetch:n.refetch}}var je=e((()=>{d(),l(),o()})),C,w,T=e((()=>{r(),f(),y(),_(),C=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],w={attributes:[me({grain:g,offersComparison:!1})],example:{get attributes(){return{reportParams:v(),chartType:`line`}}}}}));function Me(e,t){return e.length?t(e[e.length-1])??0:0}function Ne(e){return C.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=k[t];return{key:t,label:n,countLabel:r,value:Me(e.current,i),current:e.current.map(e=>({date:e.date,value:i(e)}))}})}function Pe({chartType:e}){let{reportParams:n}=se(),r=Ae(n,re(n,g.periods)),i=!r.isLoading&&!r.isError&&r.current.every(e=>!e.subscribers),o=ie(void 0,{enabled:i}),s=o.data?.total_subscribers===0,c=(0,a.useMemo)(()=>Ne(r),[r]),ee=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,D.jsx)(`div`,{className:S.root,children:(0,D.jsx)(ve,{isLoading:r.isLoading||i&&o.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:i,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},empty:s?{description:t(`You don’t have subscribers yet. Newsletter can help you turn readers into an audience.`,`jetpack-premium-analytics-pkg`),action:{label:t(`Learn more`,`jetpack-premium-analytics-pkg`),href:`https://jetpack.com/support/newsletter/`,openInNewTab:!0}}:void 0,renderLoading:(0,D.jsx)(Se,{}),children:(0,D.jsx)(xe,{metrics:c,dataFormat:O,chartType:e,groupLabel:ee,baseline:`padded`,chartTitle:t(`Subscriber summary`,`jetpack-premium-analytics-pkg`)})})})}function E({attributes:e={},setError:t}){let n=e.reportParams??v();return(0,D.jsx)(ae,{offersComparison:!1,children:(0,D.jsx)(oe,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,D.jsx)(Pe,{chartType:e.chartType})})})}var D,O,k,Fe=e((()=>{d(),_e(),o(),r(),y(),_(),Oe(),je(),T(),D=i(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,L,R,Ie=e((()=>{A=`jpa/subscribers-chart`,j=`jpa/people`,M=`Subscriber summary`,N=`Track subscriber growth over the selected period.`,P={content:`A summary of your subscriber growth over time.`},F=`subscribers`,I=`framed`,L=[{id:`reportParams`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],R={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I,attributes:L}}));function z({chartType:e}){return(0,V.jsx)(E,{attributes:{reportParams:u(!1),chartType:e}})}function B(e){return(0,V.jsx)(E,{attributes:{reportParams:u(!1,e)}})}function Le({chartType:e,...t}){return(0,V.jsx)(ge,{...t,widgetType:U,renderModule:H,renderComponent:E,attributes:{reportParams:u(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),de(),ce(),le(),Te(),De(),ye(),Fe(),T(),Ie(),V=i(),be(),H=`storybook/subscribers-chart`,U=ue(R,w),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:E,tags:[`autodocs`],decorators:[we],beforeEach:Ee,argTypes:{...Ce,...h,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[p]},J={render:z,args:{chartType:`bar`},decorators:[p]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(m(`stats/subscribers`,`loading`),()=>m(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(m(`stats/subscribers`,`error`),()=>m(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(m(`stats/subscribers`,`empty`),()=>m(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(Le,{...e}),args:{...he,widgetWidth:3,...G},argTypes:{...pe,...h,...W}},$=[`Default`,`BarChart`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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