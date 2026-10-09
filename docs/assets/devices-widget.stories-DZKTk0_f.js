import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,t as a}from"./src-Di154oa4.js";import{V as o,t as s,wn as c}from"./src-BXGbBQuk.js";import{Pt as l,_ as u,p as d,pt as f,x as ee}from"./charts-provider-CPqqWd8T.js";import"./rows-DAmD2BmE.js";import{t as te}from"./donut-chart-skeleton-x-9a_uHz.js";import{t as ne}from"./semi-circle-chart-ji3CKciU.js";import{n as p,r as m}from"./register-report-mocks-HpcX_mM9.js";import{t as re}from"./widget-state-Ct82KwxU.js";import{D as ie}from"./components-zhFTPI41.js";import{t as h}from"./src-BO6UD8Zu.js";import{a as ae,g as oe,h as se,i as ce,m as le,n as ue,p as de,r as g}from"./with-widget-canvas-Bkxis0Y9.js";import{n as fe,t as _}from"./register-stats-mocks-C8L9U9rH.js";import{n as pe,t as v}from"./force-stats-mock-state-CH1j2nnE.js";var y,b,x,S,C,me=e((()=>{y=`_root_1ego9_1`,b=`_content_1ego9_9`,x=`_chartWrap_1ego9_16`,S=`_chartShell_1ego9_24`,C={root:y,content:b,chartWrap:x,chartShell:S}}));function w(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:l(t,E),percentage:e.value,previousPercentage:e.previousValue}}function T({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:s,isError:c,error:l,refetch:u}=o({...e,deviceProperty:n},{maxRows:t}),d=(r?.rows??[]).map(w),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:a,isFetching:s,isError:f,error:f?l:null,refetch:u}}var E,he=e((()=>{n(),s(),h(),E={desktop:t(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:t(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:t(`Tablet`,`jetpack-premium-analytics-pkg`),phone:t(`Phone`,`jetpack-premium-analytics-pkg`),unknown:t(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function D(e){return e/100}function ge(){let{reportParams:e}=ee(),{data:n,hasComparison:r,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=T({reportParams:e,max:10,deviceProperty:`screensize`}),u=n.map(e=>({label:e.displayLabel,value:D(e.percentage)})),p=d(u),m=n.map(e=>({label:e.displayLabel,value:D(e.percentage),displayValue:i(D(e.percentage),A.type,A.options),comparison:r&&e.previousPercentage!==void 0?D(e.previousPercentage):void 0})).map((e,t)=>({...e,color:p[t]?.color}));return(0,k.jsx)(`div`,{className:C.content,children:(0,k.jsx)(re,{isLoading:a,isFetching:o,isError:s,isEmpty:n.length===0,error:f(c,{retryDescription:t(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),renderLoading:(0,k.jsx)(te,{}),children:(0,k.jsx)(`div`,{className:C.chartWrap,children:(0,k.jsxs)(`div`,{className:C.chartShell,children:[(0,k.jsx)(ne,{chartData:u,styles:p,showLegend:!1,showMetric:!1,withTooltips:!0,dataFormat:A}),(0,k.jsx)(ie,{items:m,withComparison:r})]})})})})}function O({attributes:e={}}){return(0,k.jsx)(u,{attributes:e,children:(0,k.jsx)(`div`,{className:C.root,children:(0,k.jsx)(ge,{})})})}var k,A,_e=e((()=>{a(),n(),h(),me(),he(),k=r(),A={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),j,ve=e((()=>{j={attributes:[],example:{attributes:{}}}})),M,N,P,F,I,L,R,z,ye=e((()=>{M=`jpa/devices`,N=`jpa/mobile`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{reportParams:c(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:c(!1,e)}})}function be(e){return(0,H.jsx)(O,{...e})}function xe({withComparison:e,...t}){return(0,H.jsx)(le,{...t,widgetType:W,renderModule:U,renderComponent:be,attributes:{reportParams:c(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),se(),ae(),ue(),p(),_(),pe(),_e(),ve(),ye(),H=r(),m(),fe(),U=`storybook/devices`,W=ce(z,j),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[g]},q={render:B,args:{withComparison:!0},decorators:[g]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`stats/devices/screensize`,`loading`),()=>v(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`stats/devices/screensize`,`error`),()=>v(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`stats/devices/screensize`,`error-retryable`),()=>v(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`stats/devices/screensize`,`empty`),()=>v(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{...de,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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