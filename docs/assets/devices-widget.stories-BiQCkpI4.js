import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{W as o,dn as s,t as c}from"./src-BNPDUHdJ.js";import{bt as l,m as u,ut as d,v as f}from"./charts-provider-QX_cDkPR.js";import"./rows-DAmD2BmE.js";import{n as ee,r as p}from"./register-report-mocks-tkkzGlZI.js";import{t as te}from"./donut-IjpVncX8.js";import{t as m}from"./src-DsL5qN0o.js";import{a as ne,g as re,h as ie,i as h,m as ae,n as oe,p as se,r as g}from"./with-widget-canvas-CrEvoCWk.js";import{n as ce,t as le}from"./use-no-views-empty-state-BxfePYVK.js";import{n as ue,t as _}from"./register-stats-mocks-DnIL7yWb.js";import{n as v,t as y}from"./force-stats-mock-state-DUN9QKoK.js";function de(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:l(t,S),percentage:e.value,previousPercentage:e.previousValue}}function b({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:s,isError:c,error:l,refetch:u}=o({...e,deviceProperty:n},{maxRows:t}),d=(0,x.useMemo)(()=>(r?.rows??[]).map(de),[r]),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:a,isFetching:s,isError:f,error:f?l:null,refetch:u}}var x,S,C=t((()=>{i(),x=e(n(),1),c(),m(),S={desktop:r(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:r(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:r(`Tablet`,`jetpack-premium-analytics-pkg`),phone:r(`Phone`,`jetpack-premium-analytics-pkg`),unknown:r(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function w(e){return e/100}function fe(){let{reportParams:e}=f(),{data:t,hasComparison:n,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=b({reportParams:e,max:10,deviceProperty:`screensize`}),l=(0,E.useMemo)(()=>t.map(e=>({label:e.displayLabel,value:w(e.percentage),previousValue:e.previousPercentage===void 0?void 0:w(e.previousPercentage)})),[t]),u=ce({isLoading:i,isError:o,isEmpty:l.every(e=>!e.value)},r(`You don’t have devices recorded yet.`,`jetpack-premium-analytics-pkg`));return(0,D.jsx)(te,{segments:l,status:{isLoading:u.isLoading,isFetching:a,isError:o,hasComparison:n,refetch:c},error:d(s,{retryDescription:r(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:u.empty,format:O,variant:`half-ring`,withTotal:!1})}function T({attributes:e={}}){return(0,D.jsx)(u,{attributes:e,children:(0,D.jsx)(fe,{})})}var E,D,O,k=t((()=>{i(),m(),E=e(n(),1),le(),C(),D=a(),O={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),A,pe=t((()=>{A={attributes:[],example:{attributes:{}}}})),j,M,N,P,F,I,L,R,z=t((()=>{j=`jpa/devices`,M=`jpa/mobile`,N=`Devices`,P=`Top device types and screen sizes for your visitors.`,F={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`traffic`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function B({withComparison:e}){return(0,H.jsx)(T,{attributes:{reportParams:s(e)}})}function V(e){return(0,H.jsx)(T,{attributes:{reportParams:s(!1,e)}})}function me(e){return(0,H.jsx)(T,{...e})}function he({withComparison:e,...t}){return(0,H.jsx)(ae,{...t,widgetType:W,renderModule:U,renderComponent:me,attributes:{reportParams:s(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{c(),ie(),ne(),oe(),ee(),_(),v(),k(),pe(),z(),H=a(),p(),ue(),U=`storybook/devices`,W=h(R,A),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[g]},q={render:B,args:{withComparison:!0},decorators:[g]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(y(`stats/devices/screensize`,`loading`),()=>y(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(y(`stats/devices/screensize`,`error`),()=>y(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(y(`stats/devices/screensize`,`error-retryable`),()=>y(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(y(`stats/devices/screensize`,`empty`),()=>y(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(he,{...e}),args:{...se,withComparison:!0},argTypes:{...re,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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