import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{dn as i,n as a}from"./build-module-h3iDQ_Ze.js";import{Z as o,a as s,tt as c,u as l}from"./hooks-sPUwCaet.js";import{n as u,r as d}from"./line-chart-DbSXSkrT.js";import{l as f,t as p}from"./src-BlU2m1VV.js";import{n as m,t as h}from"./register-report-mocks-GBemjfom.js";import{i as g,t as _}from"./src-DdiGA6D-.js";import{i as v,n as y,r as b,t as x}from"./widget-dashboard-with-widget-CLyherUm.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(s,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(g,{metricKey:`total_sales`})})}var C,w=e((()=>{_(),C=r()})),T,E=e((()=>{n(),a(),T={name:`jpa/total-sales-over-time`,title:t(`Total sales over time`,`jetpack-premium-analytics`),description:t(`Track total sales including all orders and transactions.`,`jetpack-premium-analytics`),icon:i}}));function D(e=!1,t=F){return{reportParams:o(e,t)}}function O({withComparison:e,preset:t}){let n=!!e,r=t??F;return!n&&r===F?`getDefaultQueryParams()`:n&&r===F?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function k(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<TotalSalesOverTimeRender
\tattributes={ {
\t\treportParams: ${O(e)},
\t} }
/>`}function A({withComparison:e,preset:t}){return P(),(0,M.jsx)(c,{children:(0,M.jsx)(S,{attributes:D(e,t)})})}function j({withComparison:e,preset:t,...n}){return P(),(0,M.jsx)(c,{children:(0,M.jsx)(y,{...n,widgetType:T,renderModule:N,renderComponent:S,attributes:{reportParams:o(e,t)}})})}var M,N,P,F,I,L,R,z,B,V,H;e((()=>{l(),p(),b(),h(),d(),w(),E(),M=r(),m(),N=`storybook/total-sales-over-time`,P=()=>u.Legend,F=`last-30-days`,I=f,L=e=>(0,M.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,M.jsx)(e,{})}),R={title:`Packages/Premium Analytics/Widgets/TotalSalesOverTime`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays total sales over time for the selected period.`}}}},z={render:A,args:{preset:F,withComparison:!1},decorators:[L],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},B={render:A,args:{preset:F,withComparison:!0},decorators:[L],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},V={render:e=>(0,M.jsx)(j,{...e}),args:{...x,preset:F,withComparison:!0},argTypes:{...v,preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/total-sales-over-time"
	renderComponent={ TotalSalesOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<TotalSalesOverTimeStoryControls>;
        }) => getTotalSalesOverTimeSource(storyContext.args)
      }
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<TotalSalesOverTimeStoryControls>;
        }) => getTotalSalesOverTimeSource(storyContext.args)
      }
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <TotalSalesOverTimeDashboardStory {...args} />,
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
\\trenderModule="storybook/total-sales-over-time"
\\trenderComponent={ TotalSalesOverTimeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...V.parameters?.docs?.description}}},H=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{z as Default,V as WidgetDashboardWithWidget,B as WithComparison,H as __namedExportsOrder,R as default};