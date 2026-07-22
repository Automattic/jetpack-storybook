import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,tn as a}from"./build-module-DmVuor49.js";import{u as o}from"./hooks-6AFKnQdU.js";import{C as s,t as c}from"./src-B3le4dug.js";import{n as l,t as u}from"./src-3Lv7Etdm.js";import{At as d,g as f,ht as p,ir as m,wr as h}from"./chart-tooltip-BvKnA4Ej.js";import{t as ee}from"./semi-circle-chart-ByBIUXRV.js";import{M as g,N as te,U as _,k as ne,z as v}from"./report-metric-BBgOiYJZ.js";import{t as y}from"./widget-state-Dq0PZ7To.js";import{C as b,S as x,T as re,b as ie,t as S,w as ae,x as C}from"./src-Vd2hm5Bb.js";import{n as w,t as T}from"./register-stats-mocks-Dq9_UdMK.js";import{n as oe,t as E}from"./force-stats-mock-state-hPxGaJ3I.js";var D,O,k,A,j,se=e((()=>{D=`_root_8laf6_1`,O=`_content_8laf6_9`,k=`_chartWrap_8laf6_17`,A=`_chartShell_8laf6_25`,j={root:D,content:O,chartWrap:k,chartShell:A}}));function ce(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:f(t,M),percentage:e.value,previousPercentage:e.previousValue}}function le({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=d({...e,deviceProperty:n},{maxRows:t}),u=h(c),f=(r?.rows??[]).map(ce);return{data:f,hasComparison:i,isLoading:a,isFetching:o,isError:f.length===0&&s,errorReason:u,refetch:l}}var M,ue=e((()=>{n(),p(),S(),M={desktop:t(`Desktop`,`jetpack-premium-analytics`),mobile:t(`Mobile`,`jetpack-premium-analytics`),tablet:t(`Tablet`,`jetpack-premium-analytics`),phone:t(`Phone`,`jetpack-premium-analytics`),unknown:t(`Unknown`,`jetpack-premium-analytics`)}}));function N(e){return e/100}function P({max:e}){let{reportParams:n}=_(),{data:r,hasComparison:i,isLoading:a,isFetching:c,isError:u,errorReason:d,refetch:f}=le({reportParams:n,max:e,deviceProperty:`screensize`}),p=r.map(e=>({label:e.displayLabel,value:N(e.percentage)})),m=o(p),h=r.map(e=>({label:e.displayLabel,value:N(e.percentage),displayValue:l(N(e.percentage),L.type,L.options),comparison:i&&e.previousPercentage!==void 0?N(e.previousPercentage):void 0})).map((e,t)=>({...e,color:m[t]?.color})),g=d===`upgrade-required`;return(0,I.jsx)(`div`,{className:j.content,children:(0,I.jsx)(y,{isLoading:a,isFetching:c,isError:u,isEmpty:r.length===0,error:{description:t(g?`Device stats are not included in your current plan.`:`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:g?void 0:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:s,description:t(`No device data in this period.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(`div`,{className:j.chartWrap,children:(0,I.jsxs)(`div`,{className:j.chartShell,children:[(0,I.jsx)(ee,{chartData:p,styles:m,showLegend:!1,showMetric:!1,dataFormat:L}),(0,I.jsx)(ne,{items:h,withComparison:i})]})})})})}function F({attributes:e={}}){let t=e?.max??5;return(0,I.jsx)(v,{attributes:e,children:(0,I.jsx)(`div`,{className:j.root,children:(0,I.jsx)(P,{max:t})})})}var I,L,R=e((()=>{u(),c(),n(),S(),se(),ue(),I=r(),L={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),z,B=e((()=>{n(),i(),z={name:`jpa/devices`,title:t(`Devices`,`jetpack-premium-analytics`),help:{content:t(`A breakdown of the device types your visitors used, sorted by views.`,`jetpack-premium-analytics`),links:[{label:t(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:a,attributes:[{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{max:5}}}}));function V({withComparison:e}){return(0,U.jsx)(F,{attributes:{max:5,reportParams:m(e)}})}function H(e){return(0,U.jsx)(F,{attributes:{max:5,reportParams:m(!1,e)}})}function de(e){return(0,U.jsx)(F,{...e})}function fe({withComparison:e,...t}){return(0,U.jsx)(b,{...t,widgetType:G,renderModule:W,renderComponent:de,attributes:{max:5,reportParams:m(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ae(),ie(),g(),T(),oe(),R(),B(),U=r(),te(),w(),W=`storybook/devices`,G={name:z.name,title:z.title,icon:z.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/Devices`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},q={render:V,args:{withComparison:!1},decorators:[C]},J={render:V,args:{withComparison:!0},decorators:[C]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(E(`stats/devices/screensize`,`loading`),()=>E(`stats/devices/screensize`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(E(`stats/devices/screensize`,`error`),()=>E(`stats/devices/screensize`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(E(`stats/devices/screensize`,`empty`),()=>E(`stats/devices/screensize`,null))},Q={render:e=>(0,U.jsx)(fe,{...e}),args:{...x,withComparison:!0},argTypes:{...re,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderDevicesWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderDevicesWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderDevicesOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices/screensize', 'loading');
    return () => forceStatsMockState('stats/devices/screensize', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderDevicesOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/devices/screensize', 'error');
    return () => forceStatsMockState('stats/devices/screensize', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};