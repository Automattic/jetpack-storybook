import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{j as a,t as o}from"./build-module-Dxhc9xxH.js";import{_ as s,ct as c,dt as l,ot as ee,t as u}from"./src-CFLkDNMV.js";import{Et as te,In as d,Kn as ne,Ot as re,f as ie,t as f}from"./src-l1BVQSEn.js";import{It as ae,R as oe,W as se,m as ce,wt as le}from"./charts-provider-BxV5fIk2.js";import{t as ue}from"./widget-state-DErObxxB.js";import{i as de}from"./with-story-router-C5pyPMeP.js";import{n as fe,r as pe,s as p}from"./register-report-mocks-CDOnqFid.js";import{r as me,t as he}from"./metric-tabs-chart-skeleton-QeegELkc.js";import{l as ge,s as _e,t as m}from"./src-CvZeDhlH.js";import{a as ve,c as ye,i as h,l as be,o as xe,r as Se,s as Ce,u as we}from"./with-widget-canvas-DAMYEHpX.js";import{n as Te,r as Ee,t as De}from"./with-site-time-zone-Bh39N5LR.js";import{n as g,r as Oe,t as ke}from"./with-paid-subscribers-Bsp-AqP6.js";var _,v=e((()=>{u(),_={presetIds:[l,c,ee],periods:[`day`,`week`,`month`]}})),y,b=e((()=>{m(),v(),y=()=>_e(_)})),x,S,C,Ae=e((()=>{x=`_root_79bqb_1`,S=`_emptyState_79bqb_9`,C={root:x,emptyState:S}}));function je(e,t){return(e?.data??[]).flatMap(e=>{let n=s(e.date_start,t),r=s(e.date_end,t);return n?[{date:n,...r?{endDate:r}:{},subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function Me(e,t){let n=re((0,a.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,a.useMemo)(()=>je(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,csvIsError:n.primary.isError,csvIsPlaceholderData:n.primary.isPlaceholderData,timezone:r,refetch:n.refetch}}var Ne=e((()=>{f(),u(),o()})),w,T,E=e((()=>{r(),m(),b(),v(),w=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],T={attributes:[ge({grain:_,offersComparison:!1})],example:{get attributes(){return{reportParams:y(),chartType:`line`}}}}}));function Pe(e,t){return e.length?t(e[e.length-1])??0:0}function Fe(e){return w.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=k[t];return{key:t,label:n,countLabel:r,value:Pe(e.current,i),current:e.current.map(e=>({date:e.date,endDate:e.endDate,value:i(e)}))}})}function Ie({chartType:e}){let{reportParams:n}=se(),r=ie(n,_.periods),i=Me(n,r),o=!i.isLoading&&!i.isError&&i.current.every(e=>!e.subscribers),s=te(void 0,{enabled:o}),c=s.data?.total_subscribers===0,l=(0,a.useMemo)(()=>Fe(i),[i]);ce({csv:{...(0,a.useMemo)(()=>ae(o?[]:l,{zone:i.timezone,withTime:!1,dateLabel:t(`Date`,`jetpack-premium-analytics-pkg`)}),[o,l,i.timezone]),filenamePrefix:`subscriber-summary`,hasDateRange:!0,status:{isLoading:i.isLoading,isError:i.csvIsError,isPlaceholderData:i.csvIsPlaceholderData}}});let ee=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,O.jsx)(`div`,{className:C.root,children:(0,O.jsx)(ue,{isLoading:i.isLoading||o&&s.isLoading,isFetching:i.isFetching,isError:i.current.length===0&&i.isError,isEmpty:o,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:i.refetch}]},empty:c?{description:t(`You don’t have subscribers yet. Newsletter can help you turn readers into an audience.`,`jetpack-premium-analytics-pkg`),action:{label:t(`Learn more`,`jetpack-premium-analytics-pkg`),href:`https://jetpack.com/support/newsletter/`,openInNewTab:!0}}:void 0,renderLoading:(0,O.jsx)(he,{}),children:(0,O.jsx)(me,{metrics:l,dataFormat:le,chartType:e,tickResolution:r,groupLabel:ee,baseline:`padded`})})})}function D({attributes:e={},setError:t}){let n=e.reportParams??y();return(0,O.jsx)(ne,{offersComparison:!1,children:(0,O.jsx)(oe,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,O.jsx)(Ie,{chartType:e.chartType})})})}var O,k,Le=e((()=>{f(),de(),o(),r(),b(),v(),Ae(),Ne(),E(),O=i(),k={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,L,R,Re=e((()=>{A=`jpa/subscribers-chart`,j=`jpa/people`,M=`Subscriber summary`,N=`Track subscriber growth over the selected period.`,P={content:`A summary of your subscriber growth over time.`},F=`subscribers`,I=`framed`,L=[{id:`reportParams`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],R={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I,attributes:L}}));function z({chartType:e}){return(0,V.jsx)(D,{attributes:{reportParams:d(!1),chartType:e}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:d(!1,e)}})}function ze({chartType:e,...t}){return(0,V.jsx)(ye,{...t,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:d(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),be(),xe(),Se(),De(),ke(),fe(),Le(),E(),Re(),V=i(),pe(),H=`storybook/subscribers-chart`,U=ve(R,T),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:D,tags:[`autodocs`],decorators:[Ee],beforeEach:Oe,argTypes:{...Te,...g,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[h]},J={render:z,args:{chartType:`bar`},decorators:[h]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(p(`stats/subscribers`,`loading`),()=>p(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(p(`stats/subscribers`,`error`),()=>p(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(p(`stats/subscribers`,`empty`),()=>p(`stats/subscribers`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(ze,{...e}),args:{...Ce,widgetWidth:3,...G},argTypes:{...we,...g,...W}},$=[`Default`,`BarChart`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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