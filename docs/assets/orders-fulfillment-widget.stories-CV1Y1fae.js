import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ll as n,n as r}from"./build-module-CDRs4YxF.js";import{g as i}from"./hooks-xxVzjUoJ.js";import{C as a,t as o}from"./src-B7lQjZr3.js";import{qt as s,t as c}from"./src-SOjeTdvv.js";import{G as l,K as u,Y as d}from"./report-metric-6rVF2bW5.js";import{C as f,D as p,E as m,S as h,T as g,b as _,n as v,t as y,w as b,x}from"./src-CPMt0aCw.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(i,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(v,{})})}var C,w=e((()=>{y(),C=t()})),T,E=e((()=>{r(),T={icon:n}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/orders-fulfillment`,O=`Orders fulfillment`,k=`Shows the breakdown of fulfilled vs unfulfilled order counts over the selected time period.`,A={content:`Shows the breakdown of fulfilled vs unfulfilled order counts over the selected time period.`},j=`store`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=U){return{reportParams:s(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<OrdersFulfillmentRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return(0,V.jsx)(S,{attributes:F(e,t)})}function z(e){return(0,V.jsx)(S,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return(0,V.jsx)(g,{...n,widgetType:h(N,T),renderModule:H,renderComponent:S,attributes:F(e,t)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{c(),o(),m(),f(),_(),l(),w(),E(),P(),V=t(),u(),H=`storybook/orders-fulfillment`,U=`last-30-days`,W=a,G={title:`Packages/Premium Analytics/Widgets/OrdersFulfillment`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays fulfilled and unfulfilled orders for the selected period.`}}}},K={render:R,args:{preset:U,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},q={render:R,args:{preset:U,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`orders/by-date`,`loading`),()=>d(`orders/by-date`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`orders/by-date`,`error`),()=>d(`orders/by-date`,null))},X={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`orders/by-date`,`empty`),()=>d(`orders/by-date`,null))},Z={render:e=>(0,V.jsx)(B,{...e}),args:{...b,preset:U,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/orders-fulfillment"
	renderComponent={ OrdersFulfillmentRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period fulfilled and unfulfilled totals.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderOrdersFulfillmentOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'loading');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: both fulfillment reports (fulfilled and unfulfilled) are in
flight, so the widget shows its loading state. The mock is forced to never
resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderOrdersFulfillmentOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'error');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Both fulfillment reports failed: the widget shows its error state with a
Retry action (which re-runs both queries — still mocked as failing while
this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderOrdersFulfillmentOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'empty');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no fulfilled or unfulfilled orders: the widget shows its empty
state ("No orders in this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};