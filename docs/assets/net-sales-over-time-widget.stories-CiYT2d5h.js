import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_n as i,n as a}from"./build-module-DwipKI4I.js";import{a as o,pt as s,u as c}from"./hooks-CodIn1za.js";import{n as l,r as u}from"./line-chart-CibRgN3o.js";import{l as d,t as f}from"./src-CT8Z3786.js";import{n as p,t as m}from"./register-report-mocks-WXCLQQX2.js";import{i as h,n as g,r as _,t as v}from"./widget-dashboard-with-widget-BjH19Q1Y.js";import{_ as y,t as b}from"./src-BnDWPiqr.js";function x({attributes:e={},setError:t}){return(0,S.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,S.jsx)(y,{metricKey:`orders_value_net`})})}var S,C=e((()=>{b(),S=r()})),w,T=e((()=>{n(),a(),w={name:`jpa/net-sales-over-time`,title:t(`Net sales over time`,`jetpack-premium-analytics`),description:t(`Monitor your total revenue after discounts, returns, or adjustments over a set period of time.`,`jetpack-premium-analytics`),icon:i}}));function E(e=!1,t=N){return{reportParams:s(e,t)}}function D({withComparison:e,preset:t}){let n=!!e,r=t??N;return!n&&r===N?`getDefaultQueryParams()`:n&&r===N?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function O(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<NetSalesOverTimeRender
\tattributes={ {
\t\treportParams: ${D(e)},
\t} }
/>`}function k({withComparison:e,preset:t}){return F(),(0,j.jsx)(x,{attributes:E(e,t)})}function A({withComparison:e,preset:t,...n}){return F(),(0,j.jsx)(g,{...n,widgetType:w,renderModule:M,renderComponent:x,attributes:E(e,t)})}var j,M,N,P,F,I,L,R,z,B,V;e((()=>{c(),f(),_(),u(),m(),C(),T(),j=r(),p(),M=`storybook/net-sales-over-time`,N=`last-30-days`,P=d,F=()=>l.Legend,I=e=>(0,j.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,j.jsx)(e,{})}),L={title:`Packages/Premium Analytics/Widgets/NetSalesOverTime`,component:x,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Net sales over time" widget. Fetches the orders report and displays net sales for the selected period with optional period-over-period comparison and a line chart.`}}}},R={render:k,args:{preset:N,withComparison:!1},decorators:[I],parameters:{docs:{source:{transform:(e,t)=>O(t.args)}}}},z={render:k,args:{preset:N,withComparison:!0},decorators:[I],parameters:{docs:{source:{transform:(e,t)=>O(t.args)}}}},B={render:e=>(0,j.jsx)(A,{...e}),args:{...v,preset:N,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/net-sales-over-time"
	renderComponent={ NetSalesOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderNetSalesOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<NetSalesOverTimeStoryControls>;
        }) => getNetSalesOverTimeSource(storyContext.args)
      }
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: renderNetSalesOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<NetSalesOverTimeStoryControls>;
        }) => getNetSalesOverTimeSource(storyContext.args)
      }
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <NetSalesOverTimeDashboardStory {...args} />,
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
\\trenderModule="storybook/net-sales-over-time"
\\trenderComponent={ NetSalesOverTimeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...B.parameters?.docs?.description}}},V=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{R as Default,B as WidgetDashboardWithWidget,z as WithComparison,V as __namedExportsOrder,L as default};