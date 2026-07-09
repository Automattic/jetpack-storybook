import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{$c as i,n as a}from"./build-module-_6UNQmiR.js";import{Dt as o,p as s,s as c}from"./hooks-B-Yl5ZSO.js";import{l,t as u}from"./src-nQqIBmxK.js";import{n as d,t as f}from"./register-report-mocks-Dpi3lzNi.js";import{i as p,n as m,r as h,t as g}from"./widget-dashboard-with-widget-qTTFaW62.js";import{f as _,t as v}from"./src-CXc1BBq1.js";function y({attributes:e={},setError:t}){return(0,b.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,b.jsx)(_,{view:`channel`})})}var b,x=e((()=>{v(),b=r()})),S,C=e((()=>{n(),a(),S={name:`jpa/sales-by-utm-channel`,title:t(`Sales by UTM channel`,`jetpack-premium-analytics`),description:t(`Shows the top UTM channels by order revenue over the selected time period.`,`jetpack-premium-analytics`),icon:i}}));function w(e=!1,t=k){return{reportParams:o(e,t)}}function T({withComparison:e,preset:t}){return(0,D.jsx)(y,{attributes:w(e,t)})}function E({withComparison:e,preset:t,...n}){return(0,D.jsx)(m,{...n,widgetType:S,renderModule:O,renderComponent:y,attributes:w(e,t)})}var D,O,k,A,j,M,N,P,F,I;e((()=>{s(),u(),h(),f(),x(),C(),D=r(),d(),O=`storybook/sales-by-utm-channel`,k=`last-30-days`,A=l,j=e=>(0,D.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,D.jsx)(e,{})}),M={title:`Packages/Premium Analytics/Widgets/SalesByUtmChannel`,component:y,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:A,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM channels by order revenue for the selected period.`}}}},N={render:T,args:{preset:k,withComparison:!1},decorators:[j]},P={render:T,args:{preset:k,withComparison:!0},decorators:[j]},F={render:e=>(0,D.jsx)(E,{...e}),args:{...g,preset:k,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:A,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-channel"
	renderComponent={ SalesByUtmChannelRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...N.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...P.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period UTM channel changes.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <SalesByUtmChannelDashboardStory {...args} />,
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
  },
  parameters: {
    docs: {
      source: {
        code: \`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
\\twidgetType={ widgetDefinition }
\\trenderModule="storybook/sales-by-utm-channel"
\\trenderComponent={ SalesByUtmChannelRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...F.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...F.parameters?.docs?.description}}},I=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{N as Default,F as WidgetDashboardWithWidget,P as WithComparison,I as __namedExportsOrder,M as default};