import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{F as o,Mt as s,z as c}from"./charts-provider-CXD9czsp.js";import{n as l}from"./sparkline-yMoyP2py.js";import{pr as ee}from"./build-module-BN2Djb9A.js";import{t as u}from"./src-D1epzAXu.js";import{ct as te,hn as d,k as ne,t as f}from"./src-BEwaewMJ.js";import{n as re}from"./abbreviated-value-BGOJYS1x.js";import{t as ie}from"./widget-state-BHtIizq9.js";import{i as p}from"./with-story-router-DxdHc1hO.js";import{t as ae}from"./metric-sparkline-skeleton-PRcvatnq.js";import{n as oe,r as m,s as h}from"./register-report-mocks-D47Rougd.js";import{a as g,g as _,h as se,i as ce,m as v,n as y,p as b,r as x}from"./with-widget-canvas-DLx8XNU3.js";var S,C,w,T,le=e((()=>{S=`_root_1sfkc_1`,C=`_body_1sfkc_8`,w=`_chart_1sfkc_20`,T={root:S,body:C,chart:w}}));function ue(){let{reportParams:e}=c(),{primary:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:u}=te((0,D.useMemo)(()=>ne({...e,stat_fields:`views,visitors`,period:k}),[e])),d=t.data,f=Number(d?.summary?.views??0),p=(0,D.useMemo)(()=>(d?.data??[]).map(e=>Number(e.views??0)),[d]);return(0,O.jsx)(`div`,{className:T.root,children:(0,O.jsx)(ie,{isLoading:n,isFetching:i,isError:a&&p.length===0,isEmpty:!p.some(e=>e>0),error:s(o,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:u}),renderLoading:(0,O.jsx)(ae,{}),children:(0,O.jsxs)(`div`,{className:T.body,children:[(0,O.jsx)(ee,{variant:`heading-2xl`,children:(0,O.jsx)(re,{value:f,dataFormat:A})}),(0,O.jsx)(`div`,{className:T.chart,children:(0,O.jsx)(l,{data:p,maxWidth:1/0})})]})})})}function E({attributes:e={},setError:t}){return(0,O.jsx)(o,{attributes:e,setError:t,children:(0,O.jsx)(ue,{})})}var D,O,k,A,j=e((()=>{f(),u(),p(),i(),D=t(n(),1),le(),O=a(),k=`day`,A={type:`number`,options:{useMultipliers:!0}}})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/total-views`,N=`jpa/seen`,P=`Total views`,F=`Total views for the selected period, with the trend over time.`,I={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(){return(0,U.jsx)(E,{attributes:{reportParams:d(!1)}})}function H(e){return(0,U.jsx)(E,{attributes:{reportParams:d(!1,e)}})}function de(e){return(0,U.jsx)(v,{...e,widgetType:G,renderModule:W,renderComponent:E,attributes:{reportParams:d(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),oe(),se(),g(),y(),j(),B(),U=a(),m(),W=`storybook/total-views`,G=ce(z),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:V,decorators:[x]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`loading`),()=>h(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error`),()=>h(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error-retryable`),()=>h(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`empty`),()=>h(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(de,{...e}),args:{...b},argTypes:{..._}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTotalViews,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the period total over its trend sparkline.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-90-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: neutral copy and no Retry
action, since retrying cannot clear a permission gate.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error-retryable');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
retryable copy with a Retry action, which re-runs the query (still mocked as
failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no buckets: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TotalViewsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};