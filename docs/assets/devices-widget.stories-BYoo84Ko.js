import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Bi as i,n as a}from"./build-module-CDRs4YxF.js";import{$ as o,H as s,K as c,q as l,rt as u}from"./report-metric-I3SWuSNy.js";import{C as d,t as f}from"./src-tEZrN6jJ.js";import{n as ee,t as p}from"./src-CaR1T9Ff.js";import{u as te}from"./hooks-D-fTiHVW.js";import{Bt as m,Tt as h,hr as g,p as ne,w as re}from"./chart-tooltip-CSGxnygQ.js";import{t as ie}from"./semi-circle-chart-CUZsxbK6.js";import{C as ae,D as oe,E as se,S as ce,T as le,b as ue,t as _,w as de,x as v}from"./src-Ds4jaArn.js";import{t as fe}from"./widget-state-OaOfTk3n.js";import{n as y,t as pe}from"./register-stats-mocks-Y5wOTvTf.js";import{n as me,t as b}from"./force-stats-mock-state-Cd61Fs1V.js";var x,S,C,w,T,he=e((()=>{x=`_root_8laf6_1`,S=`_content_8laf6_9`,C=`_chartWrap_8laf6_17`,w=`_chartShell_8laf6_25`,T={root:x,content:S,chartWrap:C,chartShell:w}}));function ge(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:re(t,E),percentage:e.value,previousPercentage:e.previousValue}}function _e({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=m({...e,deviceProperty:n},{maxRows:t}),u=(r?.rows??[]).map(ge),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var E,ve=e((()=>{n(),h(),_(),E={desktop:t(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:t(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:t(`Tablet`,`jetpack-premium-analytics-pkg`),phone:t(`Phone`,`jetpack-premium-analytics-pkg`),unknown:t(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function D(e){return e/100}function ye({max:e}){let{reportParams:n}=u(),{data:r,hasComparison:i,isLoading:a,isFetching:o,isError:c,error:l,refetch:f}=_e({reportParams:n,max:e,deviceProperty:`screensize`}),p=r.map(e=>({label:e.displayLabel,value:D(e.percentage)})),m=te(p),h=r.map(e=>({label:e.displayLabel,value:D(e.percentage),displayValue:ee(D(e.percentage),A.type,A.options),comparison:i&&e.previousPercentage!==void 0?D(e.previousPercentage):void 0})).map((e,t)=>({...e,color:m[t]?.color}));return(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(fe,{isLoading:a,isFetching:o,isError:c,isEmpty:r.length===0,error:ne(l,{retryDescription:t(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:d,description:t(`No device data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(`div`,{className:T.chartWrap,children:(0,k.jsxs)(`div`,{className:T.chartShell,children:[(0,k.jsx)(ie,{chartData:p,styles:m,showLegend:!1,showMetric:!1,dataFormat:A}),(0,k.jsx)(s,{items:h,withComparison:i})]})})})})}function O({attributes:e={}}){let t=e?.max??5;return(0,k.jsx)(o,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(ye,{max:t})})})}var k,A,j=e((()=>{p(),f(),n(),_(),he(),ve(),k=r(),A={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),M,be=e((()=>{n(),a(),M={icon:i,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:5}}}})),N,P,F,I,L,R,z,xe=e((()=>{N=`jpa/devices`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{max:5,reportParams:g(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{max:5,reportParams:g(!1,e)}})}function Se(e){return(0,H.jsx)(O,{...e})}function Ce({withComparison:e,...t}){return(0,H.jsx)(le,{...t,widgetType:W,renderModule:U,renderComponent:Se,attributes:{max:5,reportParams:g(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),se(),ae(),ue(),c(),pe(),me(),j(),be(),xe(),H=r(),l(),y(),U=`storybook/devices`,W=ce(z,M),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[v]},q={render:B,args:{withComparison:!0},decorators:[v]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`loading`),()=>b(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`error`),()=>b(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`error-retryable`),()=>b(`stats/devices/screensize`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`empty`),()=>b(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(Ce,{...e}),args:{...de,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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