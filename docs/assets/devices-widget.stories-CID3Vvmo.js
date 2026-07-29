import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,tn as a}from"./build-module-DmVuor49.js";import{u as o}from"./hooks-DqCovpOj.js";import{C as s,t as c}from"./src-B3le4dug.js";import{n as l,t as u}from"./src-3Lv7Etdm.js";import{Ct as d,Rt as f,S as p,d as ee,fr as m}from"./chart-tooltip-Mn1p1GH5.js";import{t as te}from"./semi-circle-chart-BLNH82OW.js";import{I as h,L as ne,N as re,U as g,q as ie}from"./report-metric-DxWeCzOx.js";import{t as ae}from"./widget-state-Wz_xMv29.js";import{C as oe,D as se,E as ce,S as le,T as ue,b as de,t as _,w as fe,x as v}from"./src-4HO2JkEO.js";import{n as pe,t as me}from"./register-stats-mocks-DKSnuSRs.js";import{n as he,t as y}from"./force-stats-mock-state-DtNAvK2_.js";var b,x,S,C,w,ge=e((()=>{b=`_root_8laf6_1`,x=`_content_8laf6_9`,S=`_chartWrap_8laf6_17`,C=`_chartShell_8laf6_25`,w={root:b,content:x,chartWrap:S,chartShell:C}}));function _e(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:p(t,T),percentage:e.value,previousPercentage:e.previousValue}}function ve({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=f({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(_e),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var T,ye=e((()=>{n(),d(),_(),T={desktop:t(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:t(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:t(`Tablet`,`jetpack-premium-analytics-pkg`),phone:t(`Phone`,`jetpack-premium-analytics-pkg`),unknown:t(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function E(e){return e/100}function D({max:e}){let{reportParams:n}=ie(),{data:r,hasComparison:i,isLoading:a,isFetching:c,isError:u,error:d,refetch:f}=ve({reportParams:n,max:e,deviceProperty:`screensize`}),p=r.map(e=>({label:e.displayLabel,value:E(e.percentage)})),m=o(p),h=r.map(e=>({label:e.displayLabel,value:E(e.percentage),displayValue:l(E(e.percentage),A.type,A.options),comparison:i&&e.previousPercentage!==void 0?E(e.previousPercentage):void 0})).map((e,t)=>({...e,color:m[t]?.color}));return(0,k.jsx)(`div`,{className:w.content,children:(0,k.jsx)(ae,{isLoading:a,isFetching:c,isError:u,isEmpty:r.length===0,error:ee(d,{retryDescription:t(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:s,description:t(`No device data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(`div`,{className:w.chartWrap,children:(0,k.jsxs)(`div`,{className:w.chartShell,children:[(0,k.jsx)(te,{chartData:p,styles:m,showLegend:!1,showMetric:!1,dataFormat:A}),(0,k.jsx)(re,{items:h,withComparison:i})]})})})})}function O({attributes:e={}}){let t=e?.max??5;return(0,k.jsx)(g,{attributes:e,children:(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(D,{max:t})})})}var k,A,be=e((()=>{u(),c(),n(),_(),ge(),ye(),k=r(),A={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),j,M=e((()=>{n(),i(),j={icon:a,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:5}}}})),N,P,F,I,L,R,z,xe=e((()=>{N=`jpa/devices`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{max:5,reportParams:m(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{max:5,reportParams:m(!1,e)}})}function Se(e){return(0,H.jsx)(O,{...e})}function Ce({withComparison:e,...t}){return(0,H.jsx)(ue,{...t,widgetType:W,renderModule:U,renderComponent:Se,attributes:{max:5,reportParams:m(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ce(),oe(),de(),h(),me(),he(),be(),M(),xe(),H=r(),ne(),pe(),U=`storybook/devices`,W=le(z,j),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[v]},q={render:B,args:{withComparison:!0},decorators:[v]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices/screensize`,`loading`),()=>y(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices/screensize`,`error`),()=>y(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices/screensize`,`error-retryable`),()=>y(`stats/devices/screensize`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(`stats/devices/screensize`,`empty`),()=>y(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(Ce,{...e}),args:{...fe,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  render: () => renderDevicesOnPreset('last-365-days'),
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