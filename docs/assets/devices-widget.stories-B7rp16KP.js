import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,zi as a}from"./build-module-CR6EsQjA.js";import{b as o,f as s,g as c}from"./hooks-VffrD4_R.js";import{T as l,t as u}from"./src-CldFJNXL.js";import{C as d,Zt as f,t as p}from"./src-DmOy4CBU.js";import{n as ee,t as m}from"./src-DFiCItwW.js";import"./constants-B1kGztHF.js";import{A as h,B as te}from"./chart-tooltip-CU5xVDPU.js";import{t as ne}from"./donut-chart-skeleton-DpYwF3Io.js";import{t as re}from"./semi-circle-chart-DIgV8yLo.js";import{G as ie,K as ae,z as oe}from"./report-metric-BbViXf3b.js";import{t as se}from"./widget-state-CErRknDO.js";import{C as ce,D as le,E as ue,S as de,T as g,b as fe,t as _,w as pe,x as v}from"./src-B_lIgp61.js";import{n as me,t as he}from"./register-stats-mocks-D7WoIGZ2.js";import{n as y,t as b}from"./force-stats-mock-state-CyC51z8Y.js";var x,S,C,w,T,ge=e((()=>{x=`_root_1ego9_1`,S=`_content_1ego9_9`,C=`_chartWrap_1ego9_16`,w=`_chartShell_1ego9_24`,T={root:x,content:S,chartWrap:C,chartShell:w}}));function _e(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:te(t,E),percentage:e.value,previousPercentage:e.previousValue}}function ve({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=d({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(_e),f=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?c:null,refetch:l}}var E,ye=e((()=>{n(),p(),_(),E={desktop:t(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:t(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:t(`Tablet`,`jetpack-premium-analytics-pkg`),phone:t(`Phone`,`jetpack-premium-analytics-pkg`),unknown:t(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function D(e){return e/100}function be(){let{reportParams:e}=o(),{data:n,hasComparison:r,isLoading:i,isFetching:a,isError:c,error:u,refetch:d}=ve({reportParams:e,max:10,deviceProperty:`screensize`}),f=n.map(e=>({label:e.displayLabel,value:D(e.percentage)})),p=s(f),m=n.map(e=>({label:e.displayLabel,value:D(e.percentage),displayValue:ee(D(e.percentage),A.type,A.options),comparison:r&&e.previousPercentage!==void 0?D(e.previousPercentage):void 0})).map((e,t)=>({...e,color:p[t]?.color}));return(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(se,{isLoading:i,isFetching:a,isError:c,isEmpty:n.length===0,error:h(u,{retryDescription:t(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:{icon:l,description:t(`No device data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(ne,{}),children:(0,k.jsx)(`div`,{className:T.chartWrap,children:(0,k.jsxs)(`div`,{className:T.chartShell,children:[(0,k.jsx)(re,{chartData:f,styles:p,showLegend:!1,showMetric:!1,withTooltips:!0,dataFormat:A}),(0,k.jsx)(oe,{items:m,withComparison:r})]})})})})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(be,{})})})}var k,A,j=e((()=>{m(),u(),n(),_(),ge(),ye(),k=r(),A={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),M,xe=e((()=>{i(),M={icon:a,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,Se=e((()=>{N=`jpa/devices`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{reportParams:f(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:f(!1,e)}})}function Ce(e){return(0,H.jsx)(O,{...e})}function we({withComparison:e,...t}){return(0,H.jsx)(g,{...t,widgetType:W,renderModule:U,renderComponent:Ce,attributes:{reportParams:f(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ue(),ce(),fe(),ie(),he(),y(),j(),xe(),Se(),H=r(),ae(),me(),U=`storybook/devices`,W=de(z,M),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[v]},q={render:B,args:{withComparison:!0},decorators:[v]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`loading`),()=>b(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`error`),()=>b(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`error-retryable`),()=>b(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`empty`),()=>b(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(we,{...e}),args:{...pe,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral device
glyph and "No device data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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