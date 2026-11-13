import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{et as o,t as s,yn as c}from"./src-52cnEbCc.js";import{Bt as l,H as u,Ht as d,I as f,f as p}from"./charts-provider-BoFsWvxX.js";import{i as m}from"./with-story-router-Cr63Gky7.js";import"./constants-CLfWT2xO.js";import{n as h,r as g}from"./register-report-mocks-BlzsUi-e.js";import{t as ee}from"./donut-BtoN4yRx.js";import{a as te,c as ne,i as _,l as re,o as ie,r as ae,s as v,u as oe}from"./with-widget-canvas-DeHA7jRZ.js";import{n as se,t as ce}from"./use-no-views-empty-state-C_3guSfd.js";import{n as le,t as ue}from"./register-stats-mocks-BLfWbTqK.js";import{n as y,t as b}from"./force-stats-mock-state-CxetyxVt.js";function de(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:d(t,S),percentage:e.value,previousPercentage:e.previousValue}}function fe({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{primary:r,comparisonRows:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=o({...e,deviceProperty:n},{maxRows:t}),f=(0,x.useMemo)(()=>(i?.rows??[]).map(de),[i]),p=f.length===0&&l;return{data:f,hasComparison:a,isLoading:s,isFetching:c,isError:p,csvIsError:r.isError,csvIsPlaceholderData:r.isPlaceholderData,error:p?u:null,refetch:d}}var x,S,pe=e((()=>{i(),x=t(n(),1),s(),m(),S={desktop:r(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:r(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:r(`Tablet`,`jetpack-premium-analytics-pkg`),phone:r(`Phone`,`jetpack-premium-analytics-pkg`),unknown:r(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function C(e){return e/100}function w(){let{reportParams:e}=u(),{data:t,hasComparison:n,isLoading:i,isFetching:a,isError:o,csvIsError:s,csvIsPlaceholderData:c,error:d,refetch:f}=fe({reportParams:e,max:10,deviceProperty:`screensize`}),m=(0,E.useMemo)(()=>t.map(e=>({label:e.displayLabel,value:C(e.percentage),previousValue:e.previousPercentage===void 0?void 0:C(e.previousPercentage)})),[t]),h=m.every(e=>!e.value),g=se({isLoading:i,isError:o,isEmpty:h},r(`You don’t have devices recorded yet.`,`jetpack-premium-analytics-pkg`));return p({csv:{rows:h?[]:t,columns:k,filenamePrefix:`devices`,hasDateRange:!0,status:{isLoading:i,isFetching:a,isError:s,isPlaceholderData:c}}}),(0,D.jsx)(ee,{segments:m,status:{isLoading:g.isLoading,isFetching:a,isError:o,hasComparison:n,refetch:f},error:l(d,{retryDescription:r(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:g.empty,format:O,variant:`half-ring`,withTotal:!1})}function T({attributes:e={}}){return(0,D.jsx)(f,{attributes:e,children:(0,D.jsx)(w,{})})}var E,D,O,k,A=e((()=>{i(),m(),E=t(n(),1),ce(),pe(),D=a(),O={type:`percentage`,options:{decimals:1,signDisplay:`auto`}},k=[{label:r(`Screen size`,`jetpack-premium-analytics-pkg`),getValue:e=>e.displayLabel},{label:r(`Share (%)`,`jetpack-premium-analytics-pkg`),getValue:e=>e.percentage}]})),j,M,N,P,F,I,L,R,z=e((()=>{j=`jpa/devices`,M=`jpa/mobile`,N=`Devices`,P=`Top device types and screen sizes for your visitors.`,F={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`traffic`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function B({withComparison:e}){return(0,H.jsx)(T,{attributes:{reportParams:c(e)}})}function V(e){return(0,H.jsx)(T,{attributes:{reportParams:c(!1,e)}})}function me(e){return(0,H.jsx)(T,{...e})}function he({withComparison:e,...t}){return(0,H.jsx)(ne,{...t,widgetType:W,renderModule:U,renderComponent:me,attributes:{reportParams:c(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),re(),ie(),ae(),h(),ue(),y(),A(),z(),H=a(),g(),le(),U=`storybook/devices`,W=te(R),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[_]},q={render:B,args:{withComparison:!0},decorators:[_]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(b(`stats/devices/screensize`,`loading`),()=>b(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(b(`stats/devices/screensize`,`error`),()=>b(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(b(`stats/devices/screensize`,`error-retryable`),()=>b(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(b(`stats/devices/screensize`,`empty`),()=>b(`stats/devices/screensize`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(he,{...e}),args:{...v,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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