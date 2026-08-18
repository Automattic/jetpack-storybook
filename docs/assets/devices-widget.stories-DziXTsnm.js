import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Bi as i,n as a}from"./build-module-CDRs4YxF.js";import{$ as o,G as s,K as c,V as l,rt as u}from"./report-metric-Dz3em6CM.js";import{C as d,t as f}from"./src-Cvyt29m2.js";import{n as ee,t as p}from"./src-CsA_y1X9.js";import{f as te}from"./hooks-88RoXHx4.js";import{C as ne,Ft as m,P as h,Tr as g,Xt as re}from"./chart-tooltip-DGQJWSQ2.js";import{t as ie}from"./semi-circle-chart-B1bDVu4Z.js";import{t as ae}from"./widget-state-BprMqkpZ.js";import{C as oe,D as se,E as ce,S as le,T as ue,b as _,t as v,w as de,x as y}from"./src-BS0I80cP.js";import{n as b,t as fe}from"./register-stats-mocks-DYx4ZwRW.js";import{n as pe,t as x}from"./force-stats-mock-state-DHGUHVJB.js";var S,C,w,T,E,me=e((()=>{S=`_root_8laf6_1`,C=`_content_8laf6_9`,w=`_chartWrap_8laf6_17`,T=`_chartShell_8laf6_25`,E={root:S,content:C,chartWrap:w,chartShell:T}}));function he(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:h(t,D),percentage:e.value,previousPercentage:e.previousValue}}function ge({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=re({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(he),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var D,_e=e((()=>{n(),m(),v(),D={desktop:t(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:t(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:t(`Tablet`,`jetpack-premium-analytics-pkg`),phone:t(`Phone`,`jetpack-premium-analytics-pkg`),unknown:t(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function O(e){return e/100}function ve({max:e}){let{reportParams:n}=u(),{data:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:f}=ge({reportParams:n,max:e,deviceProperty:`screensize`}),p=r.map(e=>({label:e.displayLabel,value:O(e.percentage)})),m=te(p),h=r.map(e=>({label:e.displayLabel,value:O(e.percentage),displayValue:ee(O(e.percentage),j.type,j.options),comparison:i&&e.previousPercentage!==void 0?O(e.previousPercentage):void 0})).map((e,t)=>({...e,color:m[t]?.color}));return(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(ae,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:ne(c,{retryDescription:t(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:d,description:t(`No device data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(`div`,{className:E.chartWrap,children:(0,A.jsxs)(`div`,{className:E.chartShell,children:[(0,A.jsx)(ie,{chartData:p,styles:m,showLegend:!1,showMetric:!1,withTooltips:!0,dataFormat:j}),(0,A.jsx)(l,{items:h,withComparison:i})]})})})})}function k({attributes:e={}}){let t=e?.max??5;return(0,A.jsx)(o,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:(0,A.jsx)(ve,{max:t})})})}var A,j,ye=e((()=>{p(),f(),n(),v(),me(),_e(),A=r(),j={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),M,be=e((()=>{n(),a(),M={icon:i,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:5}}}})),N,P,F,I,L,R,z,xe=e((()=>{N=`jpa/devices`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(k,{attributes:{max:5,reportParams:g(e)}})}function V(e){return(0,H.jsx)(k,{attributes:{max:5,reportParams:g(!1,e)}})}function Se(e){return(0,H.jsx)(k,{...e})}function Ce({withComparison:e,...t}){return(0,H.jsx)(ue,{...t,widgetType:W,renderModule:U,renderComponent:Se,attributes:{max:5,reportParams:g(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ce(),oe(),_(),s(),fe(),pe(),ye(),be(),xe(),H=r(),c(),b(),U=`storybook/devices`,W=le(z,M),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[y]},q={render:B,args:{withComparison:!0},decorators:[y]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(x(`stats/devices/screensize`,`loading`),()=>x(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(x(`stats/devices/screensize`,`error`),()=>x(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(x(`stats/devices/screensize`,`error-retryable`),()=>x(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(x(`stats/devices/screensize`,`empty`),()=>x(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(Ce,{...e}),args:{...de,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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