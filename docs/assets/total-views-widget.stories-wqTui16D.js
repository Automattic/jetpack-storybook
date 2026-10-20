import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as ee,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{n as te}from"./sparkline-DITW2aLG.js";import{pr as a}from"./build-module-eJTjDfU6.js";import{t as o}from"./src-CII1QcxH.js";import{D as s,ot as ne,pn as c,t as l}from"./src-ZjHV2sqR.js";import{n as u}from"./abbreviated-value-q4STcyZA.js";import{m as d,mt as re,v as ie}from"./charts-provider-DmTfgW6u.js";import{t as ae}from"./metric-sparkline-skeleton-BIWL_TJW.js";import{n as f,r as oe,s as p}from"./register-report-mocks-BmL3qzYr.js";import{t as se}from"./widget-state-B6BF76Fg.js";import{t as m}from"./src-B0Rsgp69.js";import{a as h,g,h as _,i as ce,m as le,n as v,p as y,r as b}from"./with-widget-canvas-fgX8Iy8a.js";var x,S,C,w,T=t((()=>{x=`_root_1sfkc_1`,S=`_body_1sfkc_8`,C=`_chart_1sfkc_20`,w={root:x,body:S,chart:C}}));function ue(){let{reportParams:e}=ie(),{primary:t,isLoading:n,isFetching:r,isError:i,error:o,refetch:c}=ne((0,D.useMemo)(()=>s({...e,stat_fields:`views,visitors`,period:k}),[e])),l=t.data,d=Number(l?.summary?.views??0),f=(0,D.useMemo)(()=>(l?.data??[]).map(e=>Number(e.views??0)),[l]);return(0,O.jsx)(`div`,{className:w.root,children:(0,O.jsx)(se,{isLoading:n,isFetching:r,isError:i&&f.length===0,isEmpty:!f.some(e=>e>0),error:re(o,{retryDescription:ee(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),renderLoading:(0,O.jsx)(ae,{}),children:(0,O.jsxs)(`div`,{className:w.body,children:[(0,O.jsx)(a,{variant:`heading-2xl`,children:(0,O.jsx)(u,{value:d,dataFormat:A})}),(0,O.jsx)(`div`,{className:w.chart,children:(0,O.jsx)(te,{data:f,maxWidth:1/0})})]})})})}function E({attributes:e={},setError:t}){return(0,O.jsx)(d,{attributes:e,setError:t,children:(0,O.jsx)(ue,{})})}var D,O,k,A,j=t((()=>{l(),o(),m(),r(),D=e(n(),1),T(),O=i(),k=`day`,A={type:`number`,options:{useMultipliers:!0}}})),M,N,P,F,I,L,R,z,B=t((()=>{M=`jpa/total-views`,N=`jpa/seen`,P=`Total views`,F=`Total views for the selected period, with the trend over time.`,I={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(){return(0,U.jsx)(E,{attributes:{reportParams:c(!1)}})}function H(e){return(0,U.jsx)(E,{attributes:{reportParams:c(!1,e)}})}function de(e){return(0,U.jsx)(le,{...e,widgetType:G,renderModule:W,renderComponent:E,attributes:{reportParams:c(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{l(),f(),_(),h(),v(),j(),B(),U=i(),oe(),W=`storybook/total-views`,G=ce(z),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:V,decorators:[b]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/visits`,`loading`),()=>p(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/visits`,`error`),()=>p(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/visits`,`error-retryable`),()=>p(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/visits`,`empty`),()=>p(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(de,{...e}),args:{...y},argTypes:{...g}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};