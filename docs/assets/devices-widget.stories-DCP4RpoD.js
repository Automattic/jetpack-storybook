import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,tn as a}from"./build-module-DmVuor49.js";import{u as o}from"./hooks-KuDl5TKF.js";import{C as s,t as c}from"./src-B3le4dug.js";import{n as l,t as u}from"./src-3Lv7Etdm.js";import{Or as d,Pt as f,b as p,cr as m,yt as h}from"./chart-tooltip-Cd40q6p_.js";import{t as ee}from"./semi-circle-chart-BEthdRZK.js";import{F as g,G as te,P as ne,V as re,j as ie}from"./report-metric-B3b3UKzQ.js";import{t as ae}from"./widget-state-b1jukbpw.js";import{C as _,D as oe,E as se,S as ce,T as le,b as ue,t as v,w as de,x as y}from"./src-B7W5WdVS.js";import{n as fe,t as pe}from"./register-stats-mocks-BFGhe7Go.js";import{n as me,t as b}from"./force-stats-mock-state-fmKqTwLi.js";var x,S,C,w,T,he=e((()=>{x=`_root_8laf6_1`,S=`_content_8laf6_9`,C=`_chartWrap_8laf6_17`,w=`_chartShell_8laf6_25`,T={root:x,content:S,chartWrap:C,chartShell:w}}));function ge(e){let t=typeof e.label==`string`?e.label:String(e.label);return{label:t,displayLabel:p(t,E),percentage:e.value,previousPercentage:e.previousValue}}function _e({reportParams:e,max:t,deviceProperty:n=`screensize`}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=f({...e,deviceProperty:n},{maxRows:t}),u=d(c),p=(r?.rows??[]).map(ge);return{data:p,hasComparison:i,isLoading:a,isFetching:o,isError:p.length===0&&s,errorReason:u,refetch:l}}var E,ve=e((()=>{n(),h(),v(),E={desktop:t(`Desktop`,`jetpack-premium-analytics`),mobile:t(`Mobile`,`jetpack-premium-analytics`),tablet:t(`Tablet`,`jetpack-premium-analytics`),phone:t(`Phone`,`jetpack-premium-analytics`),unknown:t(`Unknown`,`jetpack-premium-analytics`)}}));function D(e){return e/100}function ye({max:e}){let{reportParams:n}=te(),{data:r,hasComparison:i,isLoading:a,isFetching:c,isError:u,errorReason:d,refetch:f}=_e({reportParams:n,max:e,deviceProperty:`screensize`}),p=r.map(e=>({label:e.displayLabel,value:D(e.percentage)})),m=o(p),h=r.map(e=>({label:e.displayLabel,value:D(e.percentage),displayValue:l(D(e.percentage),A.type,A.options),comparison:i&&e.previousPercentage!==void 0?D(e.previousPercentage):void 0})).map((e,t)=>({...e,color:m[t]?.color})),g=d===`upgrade-required`;return(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(ae,{isLoading:a,isFetching:c,isError:u,isEmpty:r.length===0,error:{description:t(g?`Device stats are not included in your current plan.`:`We couldn't load device data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:g?void 0:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:s,description:t(`No device data in this period.`,`jetpack-premium-analytics`)},children:(0,k.jsx)(`div`,{className:T.chartWrap,children:(0,k.jsxs)(`div`,{className:T.chartShell,children:[(0,k.jsx)(ee,{chartData:p,styles:m,showLegend:!1,showMetric:!1,dataFormat:A}),(0,k.jsx)(ie,{items:h,withComparison:i})]})})})})}function O({attributes:e={}}){let t=e?.max??5;return(0,k.jsx)(re,{attributes:e,children:(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(ye,{max:t})})})}var k,A,be=e((()=>{u(),c(),n(),v(),he(),ve(),k=r(),A={type:`percentage`,options:{decimals:1,signDisplay:`auto`}}})),j,M=e((()=>{n(),i(),j={icon:a,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:5}}}})),N,P,F,I,L,R,z,xe=e((()=>{N=`jpa/devices`,P=`Devices`,F=`Top device types and screen sizes for your visitors.`,I={content:`A breakdown of the device types your visitors used, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,U.jsx)(O,{attributes:{max:5,reportParams:m(e)}})}function V(e){return(0,U.jsx)(O,{attributes:{max:5,reportParams:m(!1,e)}})}function H(e){return(0,U.jsx)(O,{...e})}function Se({withComparison:e,...t}){return(0,U.jsx)(le,{...t,widgetType:G,renderModule:W,renderComponent:H,attributes:{max:5,reportParams:m(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),se(),_(),ue(),ne(),pe(),me(),be(),M(),xe(),U=r(),g(),fe(),W=`storybook/devices`,G=ce(z,j),K={title:`Packages/Premium Analytics/Widgets/Devices`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Devices" widget. Shows screen size breakdown (Desktop / Mobile / Tablet) as a semi-circle chart, using the global dashboard date range.`}}}},q={render:B,args:{withComparison:!1},decorators:[y]},J={render:B,args:{withComparison:!0},decorators:[y]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(`stats/devices/screensize`,`loading`),()=>b(`stats/devices/screensize`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(`stats/devices/screensize`,`error`),()=>b(`stats/devices/screensize`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(b(`stats/devices/screensize`,`empty`),()=>b(`stats/devices/screensize`,null))},Q={render:e=>(0,U.jsx)(Se,{...e}),args:{...de,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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