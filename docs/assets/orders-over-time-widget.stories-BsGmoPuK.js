import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,rl as a}from"./build-module-Bt8gOW8e.js";import{Rt as o,p as s,s as c}from"./hooks-B0Tnfz3u.js";import{n as l,r as u}from"./line-chart-CkheHgAu.js";import{l as d,t as f}from"./src-nQqIBmxK.js";import{n as p,t as m}from"./register-report-mocks-3dyANX1F.js";import{i as h,n as g,r as _,t as v}from"./widget-dashboard-with-widget-Db_3tSu9.js";import{_ as y,t as b}from"./src-C65iDVFp.js";function x({attributes:e={},setError:t}){return(0,S.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,S.jsx)(y,{metricKey:`orders_no`})})}var S,C=e((()=>{b(),S=r()})),w,T=e((()=>{n(),i(),w={name:`jpa/orders-over-time`,title:t(`Orders over time`,`jetpack-premium-analytics`),description:t(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics`),icon:a}}));function E(e=!1,t=N){return{reportParams:o(e,t)}}function D({withComparison:e,preset:t}){let n=!!e,r=t??N;return!n&&r===N?`getDefaultQueryParams()`:n&&r===N?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function O(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<OrdersOverTimeRender
\tattributes={ {
\t\treportParams: ${D(e)},
\t} }
/>`}function k({withComparison:e,preset:t}){return F(),(0,j.jsx)(x,{attributes:E(e,t)})}function A({withComparison:e,preset:t,...n}){return F(),(0,j.jsx)(g,{...n,widgetType:w,renderModule:M,renderComponent:x,attributes:E(e,t)})}var j,M,N,P,F,I,L,R,z,B,V;e((()=>{s(),f(),_(),u(),m(),C(),T(),j=r(),p(),M=`storybook/orders-over-time`,N=`last-30-days`,P=d,F=()=>l.Legend,I=e=>(0,j.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,j.jsx)(e,{})}),L={title:`Packages/Premium Analytics/Widgets/OrdersOverTime`,component:x,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays order counts over time for the selected period.`}}}},R={render:k,args:{preset:N,withComparison:!1},decorators:[I],parameters:{docs:{source:{transform:(e,t)=>O(t.args)}}}},z={render:k,args:{preset:N,withComparison:!0},decorators:[I],parameters:{docs:{source:{transform:(e,t)=>O(t.args)}}}},B={render:e=>(0,j.jsx)(A,{...e}),args:{...v,preset:N,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/orders-over-time"
	renderComponent={ OrdersOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderOrdersOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<OrdersOverTimeStoryControls>;
        }) => getOrdersOverTimeSource(storyContext.args)
      }
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: renderOrdersOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<OrdersOverTimeStoryControls>;
        }) => getOrdersOverTimeSource(storyContext.args)
      }
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <OrdersOverTimeDashboardStory {...args} />,
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
\\trenderModule="storybook/orders-over-time"
\\trenderComponent={ OrdersOverTimeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...B.parameters?.docs?.description}}},V=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{R as Default,B as WidgetDashboardWithWidget,z as WithComparison,V as __namedExportsOrder,L as default};