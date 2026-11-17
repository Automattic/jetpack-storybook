import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{it as s,m as c,nt as l,st as u,t as d}from"./src-BIdiSPkW.js";import{gt as ee,kn as te,mt as ne,t as f,u as re,yn as p}from"./src-52cnEbCc.js";import{H as ie,I as ae,Mt as oe,bt as se,f as ce}from"./charts-provider-B10_pjMZ.js";import{t as le}from"./widget-state-Cz_ihWJK.js";import{i as ue}from"./with-story-router-DpdqfJKY.js";import{n as de,r as fe,s as m}from"./register-report-mocks-BlzsUi-e.js";import{r as pe,t as me}from"./metric-tabs-chart-skeleton-D5DnBJve.js";import{l as he,s as ge,t as h}from"./src-jn2HAyn8.js";import{a as _e,c as ve,i as g,l as ye,o as be,r as xe,s as Se,u as Ce}from"./with-widget-canvas-UNZVTmJn.js";import{n as we,r as Te,t as Ee}from"./with-site-time-zone-RgAxKbai.js";import{n as _,r as De,t as Oe}from"./with-paid-subscribers-DQ-u18OM.js";var v,y=e((()=>{d(),v={presetIds:[u,s,l],periods:[`day`,`week`,`month`]}})),b,ke=e((()=>{h(),y(),b=()=>ge(v)})),x,S,C,Ae=e((()=>{x=`_root_79bqb_1`,S=`_emptyState_79bqb_9`,C={root:x,emptyState:S}}));function je(e,t){return(e?.data??[]).flatMap(e=>{let n=c(e.date_start,t);return n?[{date:n,subscribers:e.subscribers===null?null:Number(e.subscribers??e.value??0),paid:e.subscribers_paid===null?null:Number(e.subscribers_paid??0)}]:[]})}function Me(e,t){let n=ee((0,o.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,i=(0,o.useMemo)(()=>je(n.primary.data,r),[n.primary.data,r]);return{current:i,hasPaid:i.some(e=>(e.paid??0)>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:i.length===0&&n.isError,csvIsError:n.primary.isError,csvIsPlaceholderData:n.primary.isPlaceholderData,timezone:r,refetch:n.refetch}}var Ne=e((()=>{f(),d(),a()})),w,T,E=e((()=>{r(),h(),ke(),y(),w=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Subscriber`,`%s Subscribers`,e,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Paid subscriber`,`%s Paid subscribers`,e,`jetpack-premium-analytics-pkg`)}],T={attributes:[he({grain:v,offersComparison:!1})],example:{get attributes(){return{reportParams:b(),chartType:`line`}}}}}));function Pe(e,t){return e.length?t(e[e.length-1])??0:0}function Fe(e){return w.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n,countLabel:r})=>{let i=k[t];return{key:t,label:n,countLabel:r,value:Pe(e.current,i),current:e.current.map(e=>({date:e.date,value:i(e)}))}})}function Ie({chartType:e}){let{reportParams:n}=ie(),r=re(n,v.periods),i=Me(n,r),a=!i.isLoading&&!i.isError&&i.current.every(e=>!e.subscribers),s=ne(void 0,{enabled:a}),c=s.data?.total_subscribers===0,l=(0,o.useMemo)(()=>Fe(i),[i]);ce({csv:{...(0,o.useMemo)(()=>oe(a?[]:l,{zone:i.timezone,withTime:!1,dateLabel:t(`Date`,`jetpack-premium-analytics-pkg`)}),[a,l,i.timezone]),filenamePrefix:`subscriber-summary`,hasDateRange:!0,status:{isLoading:i.isLoading,isFetching:i.isFetching,isError:i.csvIsError,isPlaceholderData:i.csvIsPlaceholderData}}});let u=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,O.jsx)(`div`,{className:C.root,children:(0,O.jsx)(le,{isLoading:i.isLoading||a&&s.isLoading,isFetching:i.isFetching,isError:i.current.length===0&&i.isError,isEmpty:a,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:i.refetch}]},empty:c?{description:t(`You don’t have subscribers yet. Newsletter can help you turn readers into an audience.`,`jetpack-premium-analytics-pkg`),action:{label:t(`Learn more`,`jetpack-premium-analytics-pkg`),href:`https://jetpack.com/support/newsletter/`,openInNewTab:!0}}:void 0,renderLoading:(0,O.jsx)(me,{}),children:(0,O.jsx)(pe,{metrics:l,dataFormat:se,chartType:e,tickResolution:r,groupLabel:u,baseline:`padded`})})})}function D({attributes:e={},setError:t}){let n=e.reportParams??b();return(0,O.jsx)(te,{offersComparison:!1,children:(0,O.jsx)(ae,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,O.jsx)(Ie,{chartType:e.chartType})})})}var O,k,Le=e((()=>{f(),ue(),a(),r(),ke(),y(),Ae(),Ne(),E(),O=i(),k={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,L,R,Re=e((()=>{A=`jpa/subscribers-chart`,j=`jpa/people`,M=`Subscriber summary`,N=`Track subscriber growth over the selected period.`,P={content:`A summary of your subscriber growth over time.`},F=`subscribers`,I=`framed`,L=[{id:`reportParams`},{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],R={name:A,icon:j,title:M,description:N,help:P,category:F,presentation:I,attributes:L}}));function z({chartType:e}){return(0,V.jsx)(D,{attributes:{reportParams:p(!1),chartType:e}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:p(!1,e)}})}function ze({chartType:e,...t}){return(0,V.jsx)(ve,{...t,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:p(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),ye(),be(),xe(),Ee(),Oe(),de(),Le(),E(),Re(),V=i(),fe(),H=`storybook/subscribers-chart`,U=_e(R,T),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:D,tags:[`autodocs`],decorators:[Te],beforeEach:De,argTypes:{...we,..._,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[g]},J={render:z,args:{chartType:`bar`},decorators:[g]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(m(`stats/subscribers`,`loading`),()=>m(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(m(`stats/subscribers`,`error`),()=>m(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(m(`stats/subscribers`,`empty`),()=>m(`stats/subscribers`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(ze,{...e}),args:{...Se,widgetWidth:3,...G},argTypes:{...Ce,..._,...W}},$=[`Default`,`BarChart`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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