import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{K as o,pn as s,t as c}from"./src-5g9sGwvT.js";import{At as l,F as u,It as d,z as f}from"./charts-provider-CBx594al.js";import"./rows-DoJXoHhN.js";import{a as ee,o as te}from"./widget-state-BN83rL3o.js";import{t as ne}from"./donut-C4k-HfcJ.js";import{A as re,H as p,M as m,N as h,U as g,V as ie,W as _,j as v,t as y}from"./src-BypXxmxa.js";import{n as ae,t as oe}from"./use-no-views-empty-state-C9ap2g2u.js";import{n as b,t as se}from"./register-stats-mocks-Nvcu00DF.js";import{n as ce,t as x}from"./force-stats-mock-state-BaVxOkfb.js";function S(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:d(t,w),percentage:e.value,previousPercentage:e.previousValue}}function le({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:s,isError:c,error:l,refetch:u}=o({...e,deviceProperty:n},{maxRows:t}),d=(0,C.useMemo)(()=>(r?.rows??[]).map(S),[r]),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:a,isFetching:s,isError:f,error:f?l:null,refetch:u}}var C,w,ue=e((()=>{i(),C=t(n(),1),c(),y(),w={desktop:r(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:r(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:r(`Tablet`,`jetpack-premium-analytics-pkg`),phone:r(`Phone`,`jetpack-premium-analytics-pkg`),unknown:r(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function T(e){return e/100}function E(){let{reportParams:e}=f(),{data:t,hasComparison:n,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=le({reportParams:e,max:10,deviceProperty:`screensize`}),u=(0,O.useMemo)(()=>t.map(e=>({label:e.displayLabel,value:T(e.percentage),previousValue:e.previousPercentage===void 0?void 0:T(e.previousPercentage)})),[t]),d=ae({isLoading:i,isError:o,isEmpty:u.every(e=>!e.value)},r(`You don’t have devices recorded yet.`,`jetpack-premium-analytics-pkg`));return(0,k.jsx)(ne,{segments:u,status:{isLoading:d.isLoading,isFetching:a,isError:o,hasComparison:n,refetch:c},error:l(s,{retryDescription:r(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:d.empty,format:A,variant:`half-ring`,withTotal:!1,chartTitle:r(`Devices`,`jetpack-premium-analytics-pkg`)})}function D({attributes:e={}}){return(0,k.jsx)(u,{attributes:e,children:(0,k.jsx)(E,{})})}var O,k,A,de=e((()=>{i(),y(),O=t(n(),1),oe(),ue(),k=a(),A={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),j,M,N,P,F,I,L,R,z=e((()=>{j=`jpa/devices`,M=`jpa/mobile`,N=`Devices`,P=`Top device types and screen sizes for your visitors.`,F={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`traffic`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function B({withComparison:e}){return(0,H.jsx)(D,{attributes:{reportParams:s(e)}})}function V(e){return(0,H.jsx)(D,{attributes:{reportParams:s(!1,e)}})}function fe(e){return(0,H.jsx)(D,{...e})}function pe({withComparison:e,...t}){return(0,H.jsx)(p,{...t,widgetType:W,renderModule:U,renderComponent:fe,attributes:{reportParams:s(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),g(),h(),re(),ee(),se(),ce(),de(),z(),H=a(),te(),b(),U=`storybook/devices`,W=m(R),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[v]},q={render:B,args:{withComparison:!0},decorators:[v]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(x(`stats/devices/screensize`,`loading`),()=>x(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(x(`stats/devices/screensize`,`error`),()=>x(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(x(`stats/devices/screensize`,`error-retryable`),()=>x(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(x(`stats/devices/screensize`,`empty`),()=>x(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(pe,{...e}),args:{...ie,withComparison:!0},argTypes:{..._,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};