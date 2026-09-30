import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Li as i,t as a}from"./build-module-DNhkEVJn.js";import{m as o,u as s,v as c}from"./hooks-BYJH6ekG.js";import{n as l,t as u}from"./src-CAfXasaD.js";import{$t as d,t as f,x as p}from"./src-Bf16ODWV.js";import{B as ee,X as m}from"./helpers-BkkO2kdn.js";import"./constants-B1kGztHF.js";import{t as te}from"./donut-chart-skeleton-C95P7pSP.js";import{t as ne}from"./semi-circle-chart-9E55oVKf.js";import{n as re,r as ie}from"./register-report-mocks-DK9m6xI3.js";import{N as ae}from"./report-metric-BRpFN9HD.js";import{t as oe}from"./widget-state-CZ5G72Gn.js";import{t as h}from"./src-4rVG_T5E.js";import{a as se,d as ce,f as le,i as ue,n as de,p as g,r as _,u as v}from"./with-widget-canvas-DmPr-A-w.js";import{n as y,t as fe}from"./register-stats-mocks-JBWs61w_.js";import{n as pe,t as b}from"./force-stats-mock-state-DtfMyVW9.js";var x,S,C,w,T,me=e((()=>{x=`_root_1ego9_1`,S=`_content_1ego9_9`,C=`_chartWrap_1ego9_16`,w=`_chartShell_1ego9_24`,T={root:x,content:S,chartWrap:C,chartShell:w}}));function he(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:m(t,E),percentage:e.value,previousPercentage:e.previousValue}}function ge({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=p({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(he),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var E,_e=e((()=>{n(),f(),h(),E={desktop:t(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:t(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:t(`Tablet`,`jetpack-premium-analytics-pkg`),phone:t(`Phone`,`jetpack-premium-analytics-pkg`),unknown:t(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function D(e){return e/100}function ve(){let{reportParams:e}=c(),{data:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:u,refetch:d}=ge({reportParams:e,max:10,deviceProperty:`screensize`}),f=n.map(e=>({label:e.displayLabel,value:D(e.percentage)})),p=s(f),m=n.map(e=>({label:e.displayLabel,value:D(e.percentage),displayValue:l(D(e.percentage),A.type,A.options),comparison:r&&e.previousPercentage!==void 0?D(e.previousPercentage):void 0})).map((e,t)=>({...e,color:p[t]?.color}));return(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(oe,{isLoading:i,isFetching:a,isError:o,isEmpty:n.length===0,error:ee(u,{retryDescription:t(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),renderLoading:(0,k.jsx)(te,{}),children:(0,k.jsx)(`div`,{className:T.chartWrap,children:(0,k.jsxs)(`div`,{className:T.chartShell,children:[(0,k.jsx)(ne,{chartData:f,styles:p,showLegend:!1,showMetric:!1,withTooltips:!0,dataFormat:A}),(0,k.jsx)(ae,{items:m,withComparison:r})]})})})})}function O({attributes:e={}}){return(0,k.jsx)(o,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(ve,{})})})}var k,A,ye=e((()=>{u(),n(),h(),me(),_e(),k=r(),A={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),j,M=e((()=>{a(),j={icon:i,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/devices`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{reportParams:d(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:d(!1,e)}})}function xe(e){return(0,H.jsx)(O,{...e})}function Se({withComparison:e,...t}){return(0,H.jsx)(ce,{...t,widgetType:W,renderModule:U,renderComponent:xe,attributes:{reportParams:d(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),le(),se(),de(),re(),fe(),pe(),ye(),M(),be(),H=r(),ie(),y(),U=`storybook/devices`,W=ue(z,j),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[_]},q={render:B,args:{withComparison:!0},decorators:[_]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(b(`stats/devices/screensize`,`loading`),()=>b(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(b(`stats/devices/screensize`,`error`),()=>b(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(b(`stats/devices/screensize`,`error-retryable`),()=>b(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(b(`stats/devices/screensize`,`empty`),()=>b(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(Se,{...e}),args:{...v,withComparison:!0},argTypes:{...g,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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