import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Li as i,t as a}from"./build-module-DNhkEVJn.js";import{Ft as o,_ as s,kt as c,p as l,x as u}from"./charts-provider-BdME75-o.js";import{n as d,t as f}from"./src-Cb6MltZg.js";import{I as p,fn as m,t as h}from"./src-rfo0sAv_.js";import"./rows-DAmD2BmE.js";import{t as ee}from"./donut-chart-skeleton-BCqRrjbs.js";import{t as te}from"./semi-circle-chart-kK-IF2JY.js";import{n as ne,r as re}from"./register-report-mocks-C_NZW4bT.js";import{t as ie}from"./widget-state-Dbjbf2k6.js";import{M as ae}from"./report-metric-mlNAn3-h.js";import{t as g}from"./src-DR0p1hHQ.js";import{a as oe,d as se,f as ce,i as le,n as ue,p as de,r as _,u as fe}from"./with-widget-canvas-BIO8a09x.js";import{n as v,t as pe}from"./register-stats-mocks-CWDCRsUy.js";import{n as me,t as y}from"./force-stats-mock-state-CSZCKXcI.js";var b,x,S,C,w,T=e((()=>{b=`_root_1ego9_1`,x=`_content_1ego9_9`,S=`_chartWrap_1ego9_16`,C=`_chartShell_1ego9_24`,w={root:b,content:x,chartWrap:S,chartShell:C}}));function he(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:o(t,E),percentage:e.value,previousPercentage:e.previousValue}}function ge({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=p({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(he),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var E,_e=e((()=>{n(),h(),g(),E={desktop:t(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:t(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:t(`Tablet`,`jetpack-premium-analytics-pkg`),phone:t(`Phone`,`jetpack-premium-analytics-pkg`),unknown:t(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function D(e){return e/100}function ve(){let{reportParams:e}=u(),{data:n,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:f}=ge({reportParams:e,max:10,deviceProperty:`screensize`}),p=n.map(e=>({label:e.displayLabel,value:D(e.percentage)})),m=l(p),h=n.map(e=>({label:e.displayLabel,value:D(e.percentage),displayValue:d(D(e.percentage),A.type,A.options),comparison:r&&e.previousPercentage!==void 0?D(e.previousPercentage):void 0})).map((e,t)=>({...e,color:m[t]?.color}));return(0,k.jsx)(`div`,{className:w.content,children:(0,k.jsx)(ie,{isLoading:i,isFetching:a,isError:o,isEmpty:n.length===0,error:c(s,{retryDescription:t(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),renderLoading:(0,k.jsx)(ee,{}),children:(0,k.jsx)(`div`,{className:w.chartWrap,children:(0,k.jsxs)(`div`,{className:w.chartShell,children:[(0,k.jsx)(te,{chartData:p,styles:m,showLegend:!1,showMetric:!1,withTooltips:!0,dataFormat:A}),(0,k.jsx)(ae,{items:h,withComparison:r})]})})})})}function O({attributes:e={}}){return(0,k.jsx)(s,{attributes:e,children:(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(ve,{})})})}var k,A,j=e((()=>{f(),n(),g(),T(),_e(),k=r(),A={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),M,ye=e((()=>{a(),M={icon:i,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/devices`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{reportParams:m(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:m(!1,e)}})}function xe(e){return(0,H.jsx)(O,{...e})}function Se({withComparison:e,...t}){return(0,H.jsx)(se,{...t,widgetType:W,renderModule:U,renderComponent:xe,attributes:{reportParams:m(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ce(),oe(),ue(),ne(),pe(),me(),j(),ye(),be(),H=r(),re(),v(),U=`storybook/devices`,W=le(z,M),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[_]},q={render:B,args:{withComparison:!0},decorators:[_]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(y(`stats/devices/screensize`,`loading`),()=>y(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(y(`stats/devices/screensize`,`error`),()=>y(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(y(`stats/devices/screensize`,`error-retryable`),()=>y(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(y(`stats/devices/screensize`,`empty`),()=>y(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(Se,{...e}),args:{...fe,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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