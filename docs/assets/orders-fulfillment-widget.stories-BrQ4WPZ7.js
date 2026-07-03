import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_n as i,n as a}from"./build-module-DwipKI4I.js";import{a as o,pt as s,u as c}from"./hooks-CodIn1za.js";import{l,t as u}from"./src-CT8Z3786.js";import{n as d,t as f}from"./register-report-mocks-WXCLQQX2.js";import{i as p,n as m,r as h,t as g}from"./widget-dashboard-with-widget-BjH19Q1Y.js";import{n as _,t as v}from"./src-BnDWPiqr.js";function y({attributes:e={},setError:t}){return(0,b.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,b.jsx)(_,{})})}var b,x=e((()=>{v(),b=r()})),S,C=e((()=>{n(),a(),S={name:`jpa/orders-fulfillment`,title:t(`Orders fulfillment`,`jetpack-premium-analytics`),description:t(`Shows the breakdown of fulfilled vs unfulfilled order counts over the selected time period.`,`jetpack-premium-analytics`),icon:i}}));function w(e=!1,t=j){return{reportParams:s(e,t)}}function T({withComparison:e,preset:t}){let n=!!e,r=t??j;return!n&&r===j?`getDefaultQueryParams()`:n&&r===j?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function E(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<OrdersFulfillmentRender
\tattributes={ {
\t\treportParams: ${T(e)},
\t} }
/>`}function D({withComparison:e,preset:t}){return(0,k.jsx)(y,{attributes:w(e,t)})}function O({withComparison:e,preset:t,...n}){return(0,k.jsx)(m,{...n,widgetType:S,renderModule:A,renderComponent:y,attributes:w(e,t)})}var k,A,j,M,N,P,F,I,L,R;e((()=>{c(),u(),h(),f(),x(),C(),k=r(),d(),A=`storybook/orders-fulfillment`,j=`last-30-days`,M=l,N=e=>(0,k.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,k.jsx)(e,{})}),P={title:`Packages/Premium Analytics/Widgets/OrdersFulfillment`,component:y,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:M,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays fulfilled and unfulfilled orders for the selected period.`}}}},F={render:D,args:{preset:j,withComparison:!1},decorators:[N],parameters:{docs:{source:{transform:(e,t)=>E(t.args)}}}},I={render:D,args:{preset:j,withComparison:!0},decorators:[N],parameters:{docs:{source:{transform:(e,t)=>E(t.args)}}}},L={render:e=>(0,k.jsx)(O,{...e}),args:{...g,preset:j,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:M,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/orders-fulfillment"
	renderComponent={ OrdersFulfillmentRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: renderOrdersFulfillment,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<OrdersFulfillmentStoryControls>;
        }) => getOrdersFulfillmentSource(storyContext.args)
      }
    }
  }
}`,...F.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: renderOrdersFulfillment,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<OrdersFulfillmentStoryControls>;
        }) => getOrdersFulfillmentSource(storyContext.args)
      }
    }
  }
}`,...I.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period fulfilled and unfulfilled totals.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <OrdersFulfillmentDashboardStory {...args} />,
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
\\trenderModule="storybook/orders-fulfillment"
\\trenderComponent={ OrdersFulfillmentRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...L.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...L.parameters?.docs?.description}}},R=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{F as Default,L as WidgetDashboardWithWidget,I as WithComparison,R as __namedExportsOrder,P as default};