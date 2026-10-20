import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{Y as s,Z as c,_ as ee,q as te,t as l}from"./src-BGYQLfcD.js";import{ft as ne,pn as u,s as re,t as d,ut as ie,yn as ae}from"./src-CQOn34Tf.js";import{m as oe,v as se}from"./charts-provider-cULIJt-Z.js";import{n as ce,r as le,s as f}from"./register-report-mocks-C5a5pleT.js";import{t as ue}from"./widget-state-BLnE7iqR.js";import{r as de,t as fe}from"./metric-tabs-chart-skeleton-BmGQVPRq.js";import{t as pe}from"./src-BIWXDbV5.js";import{a as me,g as he,h as ge,i as _e,l as ve,m as ye,n as be,o as p,p as xe,r as m,s as Se}from"./with-widget-canvas-BVoEAW_n.js";import{n as Ce,r as we,t as Te}from"./with-site-time-zone-Cv62QLkb.js";import{n as h,r as Ee,t as De}from"./with-paid-subscribers-DXmH_c5v.js";var g,_=e((()=>{l(),g={presetIds:[c,s,te],periods:[`day`,`week`,`month`]}})),v,y=e((()=>{p(),_(),v=()=>Se(g)})),b,x,S,Oe=e((()=>{b=`_root_79bqb_1`,x=`_emptyState_79bqb_9`,S={root:b,emptyState:x}}));function ke(e,t){return(e?.data??[]).flatMap(e=>{let n=ee(e.date_start,t);return n?[{date:n,subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function Ae(e,t){let n=ne((0,a.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,a.useMemo)(()=>ke(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,refetch:n.refetch}}var je=e((()=>{d(),l(),o()})),C,w,T=e((()=>{r(),p(),y(),_(),C=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],w={attributes:[ve({grain:g,offersComparison:!1})],example:{get attributes(){return{reportParams:v(),chartType:`line`}}}}}));function Me(e,t){return e.length?t(e[e.length-1])??0:0}function Ne(e){return C.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=k[t];return{key:t,label:n,countLabel:r,value:Me(e.current,i),current:e.current.map(e=>({date:e.date,value:i(e)}))}})}function Pe({chartType:e}){let{reportParams:n}=se(),r=Ae(n,re(n,g.periods)),i=!r.isLoading&&!r.isError&&r.current.every(e=>!e.subscribers),o=ie(void 0,{enabled:i}),s=o.data?.total_subscribers===0,c=(0,a.useMemo)(()=>Ne(r),[r]),ee=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,D.jsx)(`div`,{className:S.root,children:(0,D.jsx)(ue,{isLoading:r.isLoading||i&&o.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:i,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},empty:s?{description:t(`You don’t have subscribers yet. Newsletter can help you turn readers into an audience.`,`jetpack-premium-analytics-pkg`),action:{label:t(`Learn more`,`jetpack-premium-analytics-pkg`),href:`https://jetpack.com/support/newsletter/`,openInNewTab:!0}}:void 0,renderLoading:(0,D.jsx)(fe,{}),children:(0,D.jsx)(de,{metrics:c,dataFormat:O,chartType:e,groupLabel:ee,baseline:`padded`,chartTitle:t(`Subscriber summary`,`jetpack-premium-analytics-pkg`)})})})}function E({attributes:e={},setError:t}){let n=e.reportParams??v();return(0,D.jsx)(ae,{offersComparison:!1,children:(0,D.jsx)(oe,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,D.jsx)(Pe,{chartType:e.chartType})})})}var D,O,k,Fe=e((()=>{d(),pe(),o(),r(),y(),_(),Oe(),je(),T(),D=i(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,L,R,Ie=e((()=>{A=`jpa/subscribers-chart`,j=`jpa/people`,M=`Subscriber summary`,N=`Track subscriber growth over the selected period.`,P={content:`A summary of your subscriber growth over time.`},F=`subscribers`,I=`framed`,L=[{id:`reportParams`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],R={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I,attributes:L}}));function z({chartType:e}){return(0,V.jsx)(E,{attributes:{reportParams:u(!1),chartType:e}})}function B(e){return(0,V.jsx)(E,{attributes:{reportParams:u(!1,e)}})}function Le({chartType:e,...t}){return(0,V.jsx)(ye,{...t,widgetType:U,renderModule:H,renderComponent:E,attributes:{reportParams:u(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ge(),me(),be(),Te(),De(),ce(),Fe(),T(),Ie(),V=i(),le(),H=`storybook/subscribers-chart`,U=_e(R,w),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:E,tags:[`autodocs`],decorators:[we],beforeEach:Ee,argTypes:{...Ce,...h,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[m]},J={render:z,args:{chartType:`bar`},decorators:[m]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(f(`stats/subscribers`,`loading`),()=>f(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(f(`stats/subscribers`,`error`),()=>f(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(f(`stats/subscribers`,`empty`),()=>f(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(Le,{...e}),args:{...xe,widgetWidth:3,...G},argTypes:{...he,...h,...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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