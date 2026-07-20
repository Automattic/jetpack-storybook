import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{n as o,r as s}from"./line-chart-nTlRSw_r.js";import{c,t as l}from"./src-DN9VFS2M.js";import{dt as u,er as d}from"./chart-tooltip-BXDnGPby.js";import{M as f,P as p,R as m,f as h,j as g,v as _}from"./report-metric-HIq6UNa0.js";import{C as v,S as y,T as b,_ as x,b as S,t as C,w,x as T}from"./src-CKZJ5Ebh.js";var E,D,O=e((()=>{E=`_root_73shm_1`,D={root:E}}));function k({attributes:e={},setError:n}){return(0,A.jsx)(m,{attributes:e,setError:n,options:{from:`/`},children:(0,A.jsxs)(`div`,{className:D.root,children:[(0,A.jsx)(x,{metricKey:`orders_no`,emptyStateText:t(`No orders in this period.`,`jetpack-premium-analytics`),errorText:t(`We couldn't load orders. Please try again in a moment.`,`jetpack-premium-analytics`)}),(0,A.jsx)(_,{children:(0,A.jsx)(h,{reportType:`ordersovertime`})})]})})}var A,j=e((()=>{C(),n(),O(),A=r()})),M,N=e((()=>{n(),a(),M={name:`jpa/orders-over-time`,title:t(`Orders over time`,`jetpack-premium-analytics`),help:{content:t(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics`)},icon:i}}));function P(e=!1,t=H){return{reportParams:d(e,t)}}function F({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function I(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<OrdersOverTimeRender
\tattributes={ {
\t\treportParams: ${F(e)},
\t} }
/>`}function L({withComparison:e,preset:t}){return W(),(0,B.jsx)(k,{attributes:P(e,t)})}function R(e){return W(),(0,B.jsx)(k,{attributes:P(!1,e)})}function z({withComparison:e,preset:t,...n}){return W(),(0,B.jsx)(v,{...n,widgetType:M,renderModule:V,renderComponent:k,attributes:P(e,t)})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{u(),l(),w(),S(),s(),g(),j(),N(),B=r(),f(),V=`storybook/orders-over-time`,H=`last-30-days`,U=c,W=()=>o.Legend,G={title:`Packages/Premium Analytics/Widgets/OrdersOverTime`,component:k,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays order counts over time for the selected period.`}}}},K={render:L,args:{preset:H,withComparison:!1},decorators:[T],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},q={render:L,args:{preset:H,withComparison:!0},decorators:[T],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},J={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(p(`orders/by-date`,`loading`),()=>p(`orders/by-date`,null))},Y={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(p(`orders/by-date`,`error`),()=>p(`orders/by-date`,null))},X={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(p(`orders/by-date`,`empty`),()=>p(`orders/by-date`,null))},Z={render:e=>(0,B.jsx)(z,{...e}),args:{...y,preset:H,withComparison:!0},argTypes:{...b,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/orders-over-time"
	renderComponent={ OrdersOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderOrdersOverTimeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'loading');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderOrdersOverTimeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'error');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderOrdersOverTimeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'empty');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no order data: the widget shows its empty state ("No orders in
this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};