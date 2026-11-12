import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as ee,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{sa as a}from"./build-module-BEvijrel.js";import{n as te}from"./sparkline-DhnQ66vO.js";import{t as o}from"./src-DwJsks-j.js";import{Sn as s,k as ne,pt as re,t as c}from"./src-BcILQ8ng.js";import{n as l}from"./abbreviated-value--Y_VcBK0.js";import{B as ie,I as u,Vt as ae,gt as oe}from"./charts-provider-LX5TXgKz.js";import{t as se}from"./widget-state-DnbF8hrz.js";import{i as d}from"./with-story-router-CD_EU9Hw.js";import{t as ce}from"./metric-sparkline-skeleton-D--yuw66.js";import{n as f,r as p,s as m}from"./register-report-mocks-DEKgkFm4.js";import{a as h,c as g,i as _,l as v,o as y,r as b,s as x,u as S}from"./with-widget-canvas-4KOQfMrY.js";var C,w,T,E,le=e((()=>{C=`_root_1sfkc_1`,w=`_body_1sfkc_8`,T=`_chart_1sfkc_20`,E={root:C,body:w,chart:T}}));function ue(){let{reportParams:e}=ie(),{primary:t,isLoading:n,isFetching:r,isError:i,error:o,refetch:s}=re((0,O.useMemo)(()=>ne({...e,stat_fields:`views,visitors`,period:A}),[e])),c=t.data,u=Number(c?.summary?.views??0),d=(0,O.useMemo)(()=>(c?.data??[]).map(e=>Number(e.views??0)),[c]);return(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(se,{isLoading:n,isFetching:r,isError:i&&d.length===0,isEmpty:!d.some(e=>e>0),error:ae(o,{retryDescription:ee(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),renderLoading:(0,k.jsx)(ce,{}),children:(0,k.jsxs)(`div`,{className:E.body,children:[(0,k.jsx)(a,{variant:`heading-2xl`,children:(0,k.jsx)(l,{value:u,dataFormat:oe})}),(0,k.jsx)(`div`,{className:E.chart,children:(0,k.jsx)(te,{data:d,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(u,{attributes:e,setError:t,children:(0,k.jsx)(ue,{})})}var O,k,A,j=e((()=>{c(),o(),d(),r(),O=t(n(),1),le(),k=i(),A=`day`})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/total-views`,N=`jpa/seen`,P=`Total views`,F=`Total views for the selected period, with the trend over time.`,I={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(){return(0,U.jsx)(D,{attributes:{reportParams:s(!1)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:s(!1,e)}})}function de(e){return(0,U.jsx)(g,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:s(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),f(),v(),y(),b(),j(),B(),U=i(),p(),W=`storybook/total-views`,G=h(z),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:V,decorators:[_]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(m(`stats/visits`,`loading`),()=>m(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(m(`stats/visits`,`error`),()=>m(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(m(`stats/visits`,`error-retryable`),()=>m(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(m(`stats/visits`,`empty`),()=>m(`stats/visits`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(de,{...e}),args:{...x},argTypes:{...S}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
  render: args => <TotalViewsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};