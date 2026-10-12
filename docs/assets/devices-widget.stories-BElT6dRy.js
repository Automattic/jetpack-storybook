import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{V as o,t as s,vn as c}from"./src-CJ6kGqIy.js";import{Ft as l,_ as u,pt as d,x as f}from"./charts-provider-DuNfEky9.js";import"./rows-DAmD2BmE.js";import{n as ee,r as te}from"./register-report-mocks-DNccRvBI.js";import{t as p}from"./donut-C2lQLiUw.js";import{t as m}from"./src-CFxCfA-b.js";import{a as ne,g as h,h as g,i as _,m as re,n as ie,p as ae,r as v}from"./with-widget-canvas-vNoCnre1.js";import{n as y,t as oe}from"./register-stats-mocks-TY4wxfvK.js";import{n as se,t as b}from"./force-stats-mock-state-DIvgMDc8.js";function ce(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:l(t,C),percentage:e.value,previousPercentage:e.previousValue}}function x({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:s,isError:c,error:l,refetch:u}=o({...e,deviceProperty:n},{maxRows:t}),d=(0,S.useMemo)(()=>(r?.rows??[]).map(ce),[r]),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:a,isFetching:s,isError:f,error:f?l:null,refetch:u}}var S,C,le=t((()=>{i(),S=e(n(),1),s(),m(),C={desktop:r(`Desktop`,`jetpack-premium-analytics-pkg`),mobile:r(`Mobile`,`jetpack-premium-analytics-pkg`),tablet:r(`Tablet`,`jetpack-premium-analytics-pkg`),phone:r(`Phone`,`jetpack-premium-analytics-pkg`),unknown:r(`Unknown`,`jetpack-premium-analytics-pkg`)}}));function w(e){return e/100}function ue(){let{reportParams:e}=f(),{data:t,hasComparison:n,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=x({reportParams:e,max:10,deviceProperty:`screensize`});return(0,D.jsx)(p,{segments:(0,E.useMemo)(()=>t.map(e=>({label:e.displayLabel,value:w(e.percentage),previousValue:e.previousPercentage===void 0?void 0:w(e.previousPercentage)})),[t]),status:{isLoading:i,isFetching:a,isError:o,hasComparison:n,refetch:c},error:d(s,{retryDescription:r(`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),format:O,variant:`half-ring`,withTotal:!1})}function T({attributes:e={}}){return(0,D.jsx)(u,{attributes:e,children:(0,D.jsx)(ue,{})})}var E,D,O,k=t((()=>{i(),m(),E=e(n(),1),le(),D=a(),O={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),A,de=t((()=>{A={attributes:[],example:{attributes:{}}}})),j,M,N,P,F,I,L,R,z=t((()=>{j=`jpa/devices`,M=`jpa/mobile`,N=`Devices`,P=`Top device types and screen sizes for your visitors.`,F={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},I=`traffic`,L=`framed`,R={name:j,icon:M,title:N,description:P,help:F,category:I,presentation:L}}));function B({withComparison:e}){return(0,H.jsx)(T,{attributes:{reportParams:c(e)}})}function V(e){return(0,H.jsx)(T,{attributes:{reportParams:c(!1,e)}})}function fe(e){return(0,H.jsx)(T,{...e})}function pe({withComparison:e,...t}){return(0,H.jsx)(re,{...t,widgetType:W,renderModule:U,renderComponent:fe,attributes:{reportParams:c(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{s(),g(),ne(),ie(),ee(),oe(),se(),k(),de(),z(),H=a(),te(),y(),U=`storybook/devices`,W=_(R,A),G={title:`Packages/Premium Analytics/Widgets/Devices`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},K={render:B,args:{withComparison:!1},decorators:[v]},q={render:B,args:{withComparison:!0},decorators:[v]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`loading`),()=>b(`stats/devices/screensize`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`error`),()=>b(`stats/devices/screensize`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`error-retryable`),()=>b(`stats/devices/screensize`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(b(`stats/devices/screensize`,`empty`),()=>b(`stats/devices/screensize`,null))},Q={render:e=>(0,H.jsx)(pe,{...e}),args:{...ae,withComparison:!0},argTypes:{...h,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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