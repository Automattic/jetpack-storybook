import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Uu as i,ju as a,li as o,t as ee}from"./build-module-2iv4IIRq.js";import{ct as te,m as ne,rt as s,tt as re,ut as ie,v as ae}from"./hooks-Ofn0_bvh.js";import{p as c,t as oe}from"./src-C-E2d-Lb.js";import{J as se,K as ce,X as le,g as ue,t as l}from"./src-CJGEmgc4.js";import{W as de,bn as fe,i as pe,r as u,tn as d}from"./date-period-dropdown-DhhPpENn.js";import{r as me,t as he}from"./metric-tabs-chart-skeleton-B-TUxbre.js";import{c as f,i as ge,r as _e}from"./register-report-mocks-CzXaY-E0.js";import{t as ve}from"./widget-state-YaJf-SYE.js";import{t as p}from"./src-1s2pM8AK.js";import{a as ye,c as m,i as be,l as xe,n as Se,o as Ce,r as h,s as we}from"./with-widget-canvas-Bb3tCRA8.js";import{n as Te,r as Ee,t as De}from"./with-site-time-zone-ngtW_VDw.js";import{n as g,r as Oe,t as ke}from"./with-paid-subscribers-Dq89jl15.js";var _,v=e((()=>{l(),_={presetIds:[le,se,ce],periods:[`day`,`week`,`month`]}})),y,b=e((()=>{s(),v(),y=te(_)})),x,S,C,w=e((()=>{x=`_root_79bqb_1`,S=`_emptyState_79bqb_9`,C={root:x,emptyState:S}}));function Ae(e,t){return(e?.data??[]).flatMap(e=>{let n=ue(e.date_start,t);return n?[{date:n,subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}]:[]})}function je(e,t){let n=de((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,a=(0,i.useMemo)(()=>Ae(n.primary.data,r),[n.primary.data,r]);return{current:a,hasPaid:a.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:a.length===0&&n.isError,refetch:n.refetch}}var Me=e((()=>{u(),l(),a()})),T,E,D=e((()=>{n(),ee(),s(),p(),b(),v(),T=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],E={icon:o,attributes:[ie({grain:_,offersComparison:!1}),re()],example:{attributes:{reportParams:y,chartType:`line`}}}}));function Ne(e,t){return e.length?t(e[e.length-1]):0}function Pe(e){return T.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n})=>{let r=j[t];return{key:t,label:n,value:Ne(e.current,r),current:e.current.map(e=>({date:e.date,value:r(e)}))}})}function Fe({chartType:e}){let{reportParams:n}=ae(),r=je(n,pe(n,_.periods)),a=(0,i.useMemo)(()=>Pe(r),[r]),o=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(`div`,{className:C.root,children:(0,k.jsx)(ve,{isLoading:r.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:r.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},empty:{icon:c,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(he,{}),children:(0,k.jsx)(me,{metrics:a,dataFormat:A,chartType:e,groupLabel:o})})})}function O({attributes:e={},setError:t}){let n=e.reportParams??y;return(0,k.jsx)(fe,{offersComparison:!1,children:(0,k.jsx)(ne,{attributes:{...e,reportParams:n},setError:t,options:{from:`/`},children:(0,k.jsx)(Fe,{chartType:e.chartType})})})}var k,A,j,Ie=e((()=>{u(),p(),oe(),a(),n(),b(),v(),w(),Me(),D(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j={subscribers:e=>e.subscribers,paid:e=>e.paid}})),M,N,P,F,I,L,R,Le=e((()=>{M=`jpa/subscribers-chart`,N=`Subscriber summary`,P=`Track subscriber growth over the selected period.`,F={content:`A summary of your subscriber growth over time.`},I=`subscribers`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({chartType:e}){return(0,V.jsx)(O,{attributes:{reportParams:d(!1),chartType:e}})}function B(e){return(0,V.jsx)(O,{attributes:{reportParams:d(!1,e)}})}function Re({chartType:e,...t}){return(0,V.jsx)(we,{...t,widgetType:U,renderModule:H,renderComponent:O,attributes:{reportParams:d(!1),chartType:e}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),m(),ye(),Se(),De(),ke(),_e(),Ie(),D(),Le(),V=r(),ge(),H=`storybook/subscribers-chart`,U=be(R,E),W={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={chartType:`line`},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:O,tags:[`autodocs`],decorators:[Ee],beforeEach:Oe,argTypes:{...Te,...g,...W},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window, and the control offers no comparison, matching the Ads chart. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{...G},decorators:[h]},J={render:z,args:{chartType:`bar`},decorators:[h]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(f(`stats/subscribers`,`loading`),()=>f(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(f(`stats/subscribers`,`error`),()=>f(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(f(`stats/subscribers`,`empty`),()=>f(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(Re,{...e}),args:{...Ce,widgetWidth:3,...G},argTypes:{...xe,...g,...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no points: the widget shows its empty state (the neutral
customer glyph and "No subscriber data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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