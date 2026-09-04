import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-yGZutq_9.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Vi as i,t as a}from"./build-module-zwSmKorH.js";import{K as o,b as s,f as c,g as l,nt as u}from"./hooks-D3eUZdyY.js";import{T as d,t as f}from"./src-DFNM1k7F.js";import{n as p,t as m}from"./src-70XJ1sgU.js";import{E as h,en as g,i as _}from"./date-filters-panel-CrhNlv77.js";import"./constants-B1kGztHF.js";import{t as ee}from"./donut-chart-skeleton-D4RpVqea.js";import{t as te}from"./semi-circle-chart-DzqUEPcc.js";import{G as ne,K as re,z as v}from"./report-metric-BHr783uf.js";import{t as ie}from"./widget-state-C_HSfUJR.js";import{C as ae,D as oe,E as se,S as ce,T as le,b as ue,t as y,w as de,x as b}from"./src-C0GFaqdP.js";import{n as fe,t as pe}from"./register-stats-mocks-CWx7RDKc.js";import{n as me,t as x}from"./force-stats-mock-state-JtOfppaw.js";var S,C,w,T,E,he=e((()=>{S=`_root_1ego9_1`,C=`_content_1ego9_9`,w=`_chartWrap_1ego9_16`,T=`_chartShell_1ego9_24`,E={root:S,content:C,chartWrap:w,chartShell:T}}));function ge(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:u(t,D),percentage:e.value,previousPercentage:e.previousValue}}function _e({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=h({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(ge),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var D,ve=e((()=>{n(),_(),y(),D={desktop:t(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:t(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:t(`Tablet`,`jetpack-premium-analytics-pkg`),phone:t(`Phone`,`jetpack-premium-analytics-pkg`),unknown:t(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function O(e){return e/100}function ye(){let{reportParams:e}=s(),{data:n,hasComparison:r,isLoading:i,isFetching:a,isError:l,error:u,refetch:f}=_e({reportParams:e,max:10,deviceProperty:`screensize`}),m=n.map(e=>({label:e.displayLabel,value:O(e.percentage)})),h=c(m),g=n.map(e=>({label:e.displayLabel,value:O(e.percentage),displayValue:p(O(e.percentage),j.type,j.options),comparison:r&&e.previousPercentage!==void 0?O(e.previousPercentage):void 0})).map((e,t)=>({...e,color:h[t]?.color}));return(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(ie,{isLoading:i,isFetching:a,isError:l,isEmpty:n.length===0,error:o(u,{retryDescription:t(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:d,description:t(`No device data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ee,{}),children:(0,A.jsx)(`div`,{className:E.chartWrap,children:(0,A.jsxs)(`div`,{className:E.chartShell,children:[(0,A.jsx)(te,{chartData:m,styles:h,showLegend:!1,showMetric:!1,withTooltips:!0,dataFormat:j}),(0,A.jsx)(v,{items:g,withComparison:r})]})})})})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:(0,A.jsx)(ye,{})})})}var A,j,be=e((()=>{m(),f(),n(),y(),he(),ve(),A=r(),j={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),M,xe=e((()=>{a(),M={icon:i,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,Se=e((()=>{N=`jpa/devices`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(k,{attributes:{reportParams:g(e)}})}function V(e){return(0,H.jsx)(k,{attributes:{reportParams:g(!1,e)}})}function Ce(e){return(0,H.jsx)(k,{...e})}function we({withComparison:e,...t}){return(0,H.jsx)(le,{...t,widgetType:W,renderModule:U,renderComponent:Ce,attributes:{reportParams:g(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),se(),ae(),ue(),ne(),pe(),me(),be(),xe(),Se(),H=r(),re(),fe(),U=`storybook/devices`,W=ce(z,M),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[b]},q={render:B,args:{withComparison:!0},decorators:[b]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(x(`stats/devices/screensize`,`loading`),()=>x(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(x(`stats/devices/screensize`,`error`),()=>x(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(x(`stats/devices/screensize`,`error-retryable`),()=>x(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(x(`stats/devices/screensize`,`empty`),()=>x(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(we,{...e}),args:{...de,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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