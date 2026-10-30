import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{B as o,Ft as s,I as c,in as l}from"./charts-provider-UiamKIev.js";import{Z as u,t as d,vn as f}from"./src-DvzWgCqE.js";import{i as p}from"./with-story-router-C2MqLvGw.js";import"./constants-B9OTkkI1.js";import{n as ee,r as te}from"./register-report-mocks-CI2bPEM7.js";import{t as ne}from"./donut-CpQ2yPs_.js";import{a as re,g as m,h,i as g,m as ie,n as _,p as ae,r as v}from"./with-widget-canvas-CwZSCNTH.js";import{n as oe,t as y}from"./use-no-views-empty-state-Dj1uwv2M.js";import{n as se,t as ce}from"./register-stats-mocks-Nvcu00DF.js";import{n as le,t as b}from"./force-stats-mock-state-B0U9Dr7D.js";function x(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:l(t,w),percentage:e.value,previousPercentage:e.previousValue}}function S({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=u({...e,deviceProperty:n},{maxRows:t}),d=(0,C.useMemo)(()=>(r?.rows??[]).map(x),[r]),f=d.length===0&&s;return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?c:null,refetch:l}}var C,w,ue=e((()=>{i(),C=t(n(),1),d(),p(),w={desktop:r(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:r(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:r(`Tablet`,`jetpack-premium-analytics-pkg`),phone:r(`Phone`,`jetpack-premium-analytics-pkg`),unknown:r(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function T(e){return e/100}function E(){let{reportParams:e}=o(),{data:t,hasComparison:n,isLoading:i,isFetching:a,isError:c,error:l,refetch:u}=S({reportParams:e,max:10,deviceProperty:`screensize`}),d=(0,O.useMemo)(()=>t.map(e=>({label:e.displayLabel,value:T(e.percentage),previousValue:e.previousPercentage===void 0?void 0:T(e.previousPercentage)})),[t]),f=oe({isLoading:i,isError:c,isEmpty:d.every(e=>!e.value)},r(`You don’t have devices recorded yet.`,`jetpack-premium-analytics-pkg`));return(0,k.jsx)(ne,{segments:d,status:{isLoading:f.isLoading,isFetching:a,isError:c,hasComparison:n,refetch:u},error:s(l,{retryDescription:r(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:u}),empty:f.empty,format:A,variant:`half-ring`,withTotal:!1,chartTitle:r(`Devices`,`jetpack-premium-analytics-pkg`)})}function D({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(E,{})})}var O,k,A,de=e((()=>{i(),p(),O=t(n(),1),y(),ue(),k=a(),A={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),j,M,N,P,F,I,L,R,z=e((()=>{j=`jpa/devices`,M=`jpa/mobile`,N=`Devices`,P=`Top device types and screen sizes for your visitors.`,F={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`traffic`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function B({withComparison:e}){return(0,H.jsx)(D,{attributes:{reportParams:f(e)}})}function V(e){return(0,H.jsx)(D,{attributes:{reportParams:f(!1,e)}})}function fe(e){return(0,H.jsx)(D,{...e})}function pe({withComparison:e,...t}){return(0,H.jsx)(ie,{...t,widgetType:W,renderModule:U,renderComponent:fe,attributes:{reportParams:f(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),h(),re(),_(),ee(),ce(),le(),de(),z(),H=a(),te(),se(),U=`storybook/devices`,W=g(R),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[v]},q={render:B,args:{withComparison:!0},decorators:[v]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`loading`),()=>b(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`error`),()=>b(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`error-retryable`),()=>b(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`empty`),()=>b(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(pe,{...e}),args:{...ae,withComparison:!0},argTypes:{...m,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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