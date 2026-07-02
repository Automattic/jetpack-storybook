import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{dn as i,n as a}from"./build-module-h3iDQ_Ze.js";import{$ as o,a as s,u as c}from"./hooks-CR82_Xvw.js";import{l,t as u}from"./src-BlU2m1VV.js";import{n as d,t as f}from"./register-report-mocks-CFV9Ttlf.js";import{o as p,t as m}from"./src-b2AfogN6.js";import{i as h,n as g,r as _,t as v}from"./widget-dashboard-with-widget-cKFOFnJg.js";function y({attributes:e={},setError:t}){return(0,b.jsx)(s,{attributes:e,setError:t,options:{from:`/`},children:(0,b.jsx)(p,{metricKey:`avg_items`})})}var b,x=e((()=>{m(),b=r()})),S,C=e((()=>{n(),a(),S={name:`jpa/average-items-per-order`,title:t(`Average items per order`,`jetpack-premium-analytics`),description:t(`Show the average number of products per order over a set period of time.`,`jetpack-premium-analytics`),icon:i}}));function w(e=!1,t=j){return{reportParams:o(e,t)}}function T({withComparison:e,preset:t}){let n=!!e,r=t??j;return!n&&r===j?`getDefaultQueryParams()`:n&&r===j?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function E(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<AverageItemsPerOrderRender
\tattributes={ {
\t\treportParams: ${T(e)},
\t} }
/>`}function D({withComparison:e,preset:t}){return(0,k.jsx)(y,{attributes:w(e,t)})}function O({withComparison:e,preset:t,...n}){return(0,k.jsx)(g,{...n,widgetType:S,renderModule:A,renderComponent:y,attributes:w(e,t)})}var k,A,j,M,N,P,F,I,L,R;e((()=>{c(),u(),_(),f(),x(),C(),k=r(),d(),A=`storybook/average-items-per-order`,j=`last-30-days`,M=l,N=e=>(0,k.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,k.jsx)(e,{})}),P={title:`Packages/Premium Analytics/Widgets/AverageItemsPerOrder`,component:y,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:M,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Average items per order" widget. Fetches the orders report and displays the average number of items per order with optional period-over-period comparison and a sparkline.`}}}},F={render:D,args:{preset:j,withComparison:!1},decorators:[N],parameters:{docs:{source:{transform:(e,t)=>E(t.args)}}}},I={render:D,args:{preset:j,withComparison:!0},decorators:[N],parameters:{docs:{source:{transform:(e,t)=>E(t.args)}}}},L={render:e=>(0,k.jsx)(O,{...e}),args:{...v,preset:j,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:M,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/average-items-per-order"
	renderComponent={ AverageItemsPerOrderRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: renderAverageItemsPerOrder,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<AverageItemsPerOrderStoryControls>;
        }) => getAverageItemsPerOrderSource(storyContext.args)
      }
    }
  }
}`,...F.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: renderAverageItemsPerOrder,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<AverageItemsPerOrderStoryControls>;
        }) => getAverageItemsPerOrderSource(storyContext.args)
      }
    }
  }
}`,...I.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and sparkline data.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <AverageItemsPerOrderDashboardStory {...args} />,
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
\\trenderModule="storybook/average-items-per-order"
\\trenderComponent={ AverageItemsPerOrderRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...L.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...L.parameters?.docs?.description}}},R=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{F as Default,L as WidgetDashboardWithWidget,I as WithComparison,R as __namedExportsOrder,P as default};