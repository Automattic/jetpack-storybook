import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Li as i,t as a}from"./build-module-DNhkEVJn.js";import{n as o,t as s}from"./src-DvJKpa8O.js";import{Nn as c,R as l,t as u}from"./src-Zo99gLKt.js";import{At as d,_ as f,lt as ee,p as te,x as ne}from"./charts-provider-DpVvz7da.js";import"./rows-DAmD2BmE.js";import{t as re}from"./donut-chart-skeleton-BLXxoVtK.js";import{t as ie}from"./semi-circle-chart-Ca4DW8qc.js";import{n as ae,r as oe}from"./register-report-mocks-CYTjegco.js";import{t as se}from"./widget-state-TPA9IvjW.js";import{D as ce}from"./components-BHL0GXpC.js";import{t as p}from"./src-CZ4mN7nt.js";import{a as le,g as ue,h as de,i as fe,m as pe,n as m,p as h,r as g}from"./with-widget-canvas-CmZT9ovd.js";import{n as _,t as v}from"./register-stats-mocks-5t94xTq2.js";import{n as me,t as y}from"./force-stats-mock-state-D4WE7fMI.js";var b,x,S,C,w,he=e((()=>{b=`_root_1ego9_1`,x=`_content_1ego9_9`,S=`_chartWrap_1ego9_16`,C=`_chartShell_1ego9_24`,w={root:b,content:x,chartWrap:S,chartShell:C}}));function ge(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:d(t,T),percentage:e.value,previousPercentage:e.previousValue}}function _e({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:u}=l({...e,deviceProperty:n},{maxRows:t}),d=(r?.rows??[]).map(ge),f=d.length===0&&s;return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?c:null,refetch:u}}var T,ve=e((()=>{n(),u(),p(),T={desktop:t(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:t(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:t(`Tablet`,`jetpack-premium-analytics-pkg`),phone:t(`Phone`,`jetpack-premium-analytics-pkg`),unknown:t(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function E(e){return e/100}function ye(){let{reportParams:e}=ne(),{data:n,hasComparison:r,isLoading:i,isFetching:a,isError:s,error:c,refetch:l}=_e({reportParams:e,max:10,deviceProperty:`screensize`}),u=n.map(e=>({label:e.displayLabel,value:E(e.percentage)})),d=te(u),f=n.map(e=>({label:e.displayLabel,value:E(e.percentage),displayValue:o(E(e.percentage),k.type,k.options),comparison:r&&e.previousPercentage!==void 0?E(e.previousPercentage):void 0})).map((e,t)=>({...e,color:d[t]?.color}));return(0,O.jsx)(`div`,{className:w.content,children:(0,O.jsx)(se,{isLoading:i,isFetching:a,isError:s,isEmpty:n.length===0,error:ee(c,{retryDescription:t(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),renderLoading:(0,O.jsx)(re,{}),children:(0,O.jsx)(`div`,{className:w.chartWrap,children:(0,O.jsxs)(`div`,{className:w.chartShell,children:[(0,O.jsx)(ie,{chartData:u,styles:d,showLegend:!1,showMetric:!1,withTooltips:!0,dataFormat:k}),(0,O.jsx)(ce,{items:f,withComparison:r})]})})})})}function D({attributes:e={}}){return(0,O.jsx)(f,{attributes:e,children:(0,O.jsx)(`div`,{className:w.root,children:(0,O.jsx)(ye,{})})})}var O,k,A=e((()=>{s(),n(),p(),he(),ve(),O=r(),k={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),j,M=e((()=>{a(),j={icon:i,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/devices`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(D,{attributes:{reportParams:c(e)}})}function V(e){return(0,H.jsx)(D,{attributes:{reportParams:c(!1,e)}})}function xe(e){return(0,H.jsx)(D,{...e})}function Se({withComparison:e,...t}){return(0,H.jsx)(pe,{...t,widgetType:W,renderModule:U,renderComponent:xe,attributes:{reportParams:c(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),de(),le(),m(),ae(),v(),me(),A(),M(),be(),H=r(),oe(),_(),U=`storybook/devices`,W=fe(z,j),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[g]},q={render:B,args:{withComparison:!0},decorators:[g]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(y(`stats/devices/screensize`,`loading`),()=>y(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(y(`stats/devices/screensize`,`error`),()=>y(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(y(`stats/devices/screensize`,`error-retryable`),()=>y(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(y(`stats/devices/screensize`,`empty`),()=>y(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(Se,{...e}),args:{...h,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderDevicesWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderDevicesWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderDevicesOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices/screensize', 'loading');
    return () => forceStatsMockState('stats/devices/screensize', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderDevicesOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices/screensize', 'error');
    return () => forceStatsMockState('stats/devices/screensize', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: the widget shows the neutral
"You don't have access to this data." copy and no Retry action, since a
permission gate is deterministic and retrying cannot clear it.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderDevicesOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices/screensize', 'error-retryable');
    return () => forceStatsMockState('stats/devices/screensize', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
widget shows its retryable copy with a Retry action, which re-runs the query
(still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderDevicesOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices/screensize', 'empty');
    return () => forceStatsMockState('stats/devices/screensize', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <DevicesDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};