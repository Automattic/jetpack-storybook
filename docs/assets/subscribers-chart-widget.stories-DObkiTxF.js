import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{li as o,t as ee}from"./build-module-CR6EsQjA.js";import{b as te,g as ne}from"./hooks-BOSX0qnL.js";import{p as re,t as ie}from"./src-CldFJNXL.js";import{B as ae,Zt as s,r as oe,t as c}from"./src-M3AFHjew.js";import{T as se,u as ce}from"./chart-tooltip-CQAApVjM.js";import{r as l,t as le}from"./metric-tabs-chart-skeleton-CNK_IYe_.js";import{G as ue,K as de,Y as u}from"./report-metric-C1NcLIB1.js";import{t as d}from"./widget-state-Bfey9yIj.js";import{C as f,D as fe,E as pe,S as me,T as he,b as ge,t as p,w as _e,x as m}from"./src-BTucwn2d.js";var h,g,_,ve=e((()=>{h=`_root_79bqb_1`,g=`_emptyState_79bqb_9`,_={root:h,emptyState:g}}));function v(e){return(e?.data??[]).map(e=>({date:se(e.date_start),subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}))}function ye(e,t){let n=ae((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>v(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>v(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var be=e((()=>{c(),p(),a()})),y,b,x=e((()=>{n(),ee(),p(),y=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],b={icon:o,attributes:[ce()],example:{attributes:{chartType:`line`}}}}));function S(e,t){return e.length?t(e[e.length-1]):0}function xe(e){return y.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n})=>{let r=O[t];return{key:t,label:n,value:S(e.current,r),previousValue:e.previous.length?S(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function C({chartType:e}){let{reportParams:n}=te(),r=ye(n,oe(n.interval,D)),a=(0,i.useMemo)(()=>xe(r),[r]),o=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,T.jsx)(`div`,{className:_.root,children:(0,T.jsx)(d,{isLoading:r.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:r.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},empty:{icon:re,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,T.jsx)(le,{}),children:(0,T.jsx)(l,{metrics:a,dataFormat:E,chartType:e,groupLabel:o,pointsAreWallClocks:!0})})})}function w({attributes:e={},setError:t}){return(0,T.jsx)(ne,{attributes:e,setError:t,options:{from:`/`},children:(0,T.jsx)(C,{chartType:e.chartType})})}var T,E,D,O,k=e((()=>{p(),ie(),a(),n(),ve(),be(),x(),T=r(),E={type:`number`,options:{useMultipliers:!0,decimals:0}},D=[`day`,`week`,`month`],O={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,Se=e((()=>{A=`jpa/subscribers-chart`,j=`Subscribers summary`,M=`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,N={content:`A summary of your subscriber growth over time.`},P=`subscribers`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(w,{attributes:{reportParams:s(e),chartType:t}})}function R(e){return(0,z.jsx)(w,{attributes:{reportParams:s(!1,e)}})}function Ce({withComparison:e,chartType:t,...n}){return(0,z.jsx)(he,{...n,widgetType:V,renderModule:B,renderComponent:w,attributes:{reportParams:s(e),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),pe(),f(),ge(),ue(),k(),x(),Se(),z=r(),de(),B=`storybook/subscribers-chart`,V=me(I,b),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:w,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Subscriber growth over time. The date range, previous-period comparison, and bucket size follow the dashboard controls; the \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},G={render:L,args:{withComparison:!1,...U},decorators:[m]},K={render:L,args:{withComparison:!0,...U},decorators:[m]},q={render:L,args:{withComparison:!1,chartType:`bar`},decorators:[m]},J={render:L,args:{withComparison:!0,chartType:`bar`},decorators:[m]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(u(`stats/subscribers`,`loading`),()=>u(`stats/subscribers`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(u(`stats/subscribers`,`error`),()=>u(`stats/subscribers`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(u(`stats/subscribers`,`empty`),()=>u(`stats/subscribers`,null))},Q={render:e=>(0,z.jsx)(Ce,{...e}),args:{..._e,withComparison:!0,...U},argTypes:{...fe,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Same close-up with the dashboard comparison range applied, so the previous
period is overlaid as a dashed line and the headline shows the delta.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: false,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: true,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Bars with comparison on: the previous period renders as the translucent
shadow bar behind each current-period bar, and its value joins the tooltip.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no points: the widget shows its empty state (the neutral
customer glyph and "No subscriber data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <SubscribersChartDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...CHART_TYPE_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};