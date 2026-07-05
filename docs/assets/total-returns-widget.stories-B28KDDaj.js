import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_n as i,n as a}from"./build-module-DwipKI4I.js";import{f as o,ht as s,s as c}from"./hooks-BGJ4NAlr.js";import{l,t as u}from"./src-CT8Z3786.js";import{n as d,t as f}from"./register-report-mocks-Cp2SozBe.js";import{t as p}from"./total-returns-widget-gnaksPpK.js";import{i as m,n as h,r as g,t as _}from"./widget-dashboard-with-widget-1Gu_0bTv.js";import{t as v}from"./src-Br9sBVsJ.js";function y({attributes:e={},setError:t}){return(0,b.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,b.jsx)(p,{})})}var b,x=e((()=>{v(),b=r()})),S,C=e((()=>{n(),a(),S={name:`jpa/total-returns`,title:t(`Total returns`,`jetpack-premium-analytics`),description:t(`Shows refunds and net sales over the selected time period.`,`jetpack-premium-analytics`),icon:i}}));function w(e=!1,t=k){return{reportParams:s(e,t)}}function T({withComparison:e,preset:t}){return(0,D.jsx)(y,{attributes:w(e,t),setError:j})}function E({withComparison:e,preset:t,...n}){return(0,D.jsx)(h,{...n,widgetType:S,renderModule:O,renderComponent:y,attributes:w(e,t)})}var D,O,k,A,j,M,N,P,F,I,L;e((()=>{o(),u(),f(),g(),x(),C(),D=r(),d(),O=`storybook/total-returns`,k=`last-30-days`,A=l,j=()=>void 0,M=e=>(0,D.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,D.jsx)(e,{})}),N={title:`Packages/Premium Analytics/Widgets/TotalReturns`,component:y,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:A,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays refunds and net sales for the selected period.`}}}},P={render:T,args:{preset:k,withComparison:!1},decorators:[M]},F={render:T,args:{preset:k,withComparison:!0},decorators:[M]},I={render:e=>(0,D.jsx)(E,{...e}),args:{..._,preset:k,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:A,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: renderTotalReturns,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...P.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: renderTotalReturns,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...F.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change data.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <TotalReturnsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    preset: {
      control: 'select',
      options: PRESET_OPTIONS,
      description: 'Date-range preset used to generate the widget report params.'
    },
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    }
  }
}`,...I.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...I.parameters?.docs?.description}}},L=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{P as Default,I as WidgetDashboardWithWidget,F as WithComparison,L as __namedExportsOrder,N as default};