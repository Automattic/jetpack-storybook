import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{B as ee,I as s,gt as te}from"./charts-provider-BaKpscx5.js";import{at as c,m as l,rt as u,t as d,tt as ne}from"./src-DMeLrrCy.js";import{On as re,_t as ie,bn as f,ht as ae,l as oe,t as p}from"./src-CJxWIdUQ.js";import{t as se}from"./widget-state-it4WpRiv.js";import{t as ce}from"./src-0zKXRbIa.js";import{n as le,r as ue,s as m}from"./register-report-mocks-DpRCW8_j.js";import{r as de,t as fe}from"./metric-tabs-chart-skeleton-DDmYD-De.js";import{l as pe,s as me,t as h}from"./src-8v32eFMs.js";import{a as he,c as ge,i as _e,l as ve,n as ye,o as be,r as g,s as xe}from"./with-widget-canvas-Dk_Kvc08.js";import{n as Se,r as Ce,t as we}from"./with-site-time-zone-RgAxKbai.js";import{n as _,r as Te,t as Ee}from"./with-paid-subscribers-B05RaXzy.js";var v,y=e((()=>{d(),v={presetIds:[c,u,ne],periods:[`day`,`week`,`month`]}})),b,x=e((()=>{h(),y(),b=()=>me(v)})),S,C,w,De=e((()=>{S=`_root_79bqb_1`,C=`_emptyState_79bqb_9`,w={root:S,emptyState:C}}));function Oe(e,t){return(e?.data??[]).flatMap(e=>{let n=l(e.date_start,t);return n?[{date:n,subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function ke(e,t){let n=ie((0,o.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,o.useMemo)(()=>Oe(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,refetch:n.refetch}}var Ae=e((()=>{p(),d(),a()})),T,E,D=e((()=>{r(),h(),x(),y(),T=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],E={attributes:[pe({grain:v,offersComparison:!1})],example:{get attributes(){return{reportParams:b(),chartType:`line`}}}}}));function je(e,t){return e.length?t(e[e.length-1])??0:0}function Me(e){return T.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=Pe[t];return{key:t,label:n,countLabel:r,value:je(e.current,i),current:e.current.map(e=>({date:e.date,value:i(e)}))}})}function Ne({chartType:e}){let{reportParams:n}=ee(),r=oe(n,v.periods),i=ke(n,r),a=!i.isLoading&&!i.isError&&i.current.every(e=>!e.subscribers),s=ae(void 0,{enabled:a}),c=s.data?.total_subscribers===0,l=(0,o.useMemo)(()=>Me(i),[i]),u=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(se,{isLoading:i.isLoading||a&&s.isLoading,isFetching:i.isFetching,isError:i.current.length===0&&i.isError,isEmpty:a,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:i.refetch}]},empty:c?{description:t(`You don’t have subscribers yet. Newsletter can help you turn readers into an audience.`,`jetpack-premium-analytics-pkg`),action:{label:t(`Learn more`,`jetpack-premium-analytics-pkg`),href:`https://jetpack.com/support/newsletter/`,openInNewTab:!0}}:void 0,renderLoading:(0,k.jsx)(fe,{}),children:(0,k.jsx)(de,{metrics:l,dataFormat:te,chartType:e,tickResolution:r,groupLabel:u,baseline:`padded`})})})}function O({attributes:e={},setError:t}){let n=e.reportParams??b();return(0,k.jsx)(re,{offersComparison:!1,children:(0,k.jsx)(s,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,k.jsx)(Ne,{chartType:e.chartType})})})}var k,Pe,Fe=e((()=>{p(),ce(),a(),r(),x(),y(),De(),Ae(),D(),k=i(),Pe={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,L,R,Ie=e((()=>{A=`jpa/subscribers-chart`,j=`jpa/people`,M=`Subscriber summary`,N=`Track subscriber growth over the selected period.`,P={content:`A summary of your subscriber growth over time.`},F=`subscribers`,I=`framed`,L=[{id:`reportParams`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],R={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I,attributes:L}}));function z({chartType:e}){return(0,V.jsx)(O,{attributes:{reportParams:f(!1),chartType:e}})}function B(e){return(0,V.jsx)(O,{attributes:{reportParams:f(!1,e)}})}function Le({chartType:e,...t}){return(0,V.jsx)(xe,{...t,widgetType:U,renderModule:H,renderComponent:O,attributes:{reportParams:f(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ge(),he(),ye(),we(),Ee(),le(),Fe(),D(),Ie(),V=i(),ue(),H=`storybook/subscribers-chart`,U=_e(R,E),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:O,tags:[`autodocs`],decorators:[Ce],beforeEach:Te,argTypes:{...Se,..._,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[g]},J={render:z,args:{chartType:`bar`},decorators:[g]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(m(`stats/subscribers`,`loading`),()=>m(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(m(`stats/subscribers`,`error`),()=>m(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(m(`stats/subscribers`,`empty`),()=>m(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(Le,{...e}),args:{...be,widgetWidth:3,...G},argTypes:{...ve,..._,...W}},$=[`Default`,`BarChart`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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