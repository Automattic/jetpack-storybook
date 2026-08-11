import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{ll as i,n as a}from"./build-module-CDRs4YxF.js";import{$ as o,E as s,K as c,Y as l,f as u,q as d}from"./report-metric-4jWKJgzb.js";import{n as f,r as p}from"./line-chart-KNuuN-21.js";import{t as ee,x as m}from"./src-DhTT1cTw.js";import{Tt as te,hr as ne}from"./chart-tooltip-D4zjxNqE.js";import{C as re,D as ie,E as ae,S as oe,T as h,_ as g,b as _,t as se,w as v,x as y}from"./src-Csln2ZSb.js";var b,x,S=e((()=>{b=`_root_73shm_1`,x={root:b}}));function C({attributes:e={},setError:n}){return(0,w.jsx)(o,{attributes:e,setError:n,options:{from:`/`},children:(0,w.jsxs)(`div`,{className:x.root,children:[(0,w.jsx)(g,{metricKey:`orders_no`,emptyStateText:t(`No orders in this period.`,`jetpack-premium-analytics-pkg`),errorText:t(`We couldn't load orders. Please try again in a moment.`,`jetpack-premium-analytics-pkg`)}),(0,w.jsx)(s,{children:(0,w.jsx)(u,{reportType:`ordersovertime`})})]})})}var w,T=e((()=>{se(),n(),S(),w=r()})),E,ce=e((()=>{a(),E={icon:i}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/orders-over-time`,O=`Orders over time`,k=`See a breakdown of when orders are placed to identify peak selling periods.`,A={content:`See a breakdown of when orders are placed to identify peak selling periods.`},j=`orders`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=U){return{reportParams:ne(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<OrdersOverTimeRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return G(),(0,V.jsx)(C,{attributes:F(e,t)})}function z(e){return G(),(0,V.jsx)(C,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return G(),(0,V.jsx)(h,{...n,widgetType:oe(N,E),renderModule:H,renderComponent:C,attributes:F(e,t)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{te(),ee(),ae(),re(),_(),p(),c(),T(),ce(),P(),V=r(),d(),H=`storybook/orders-over-time`,U=`last-30-days`,W=m,G=()=>f.Legend,K={title:`Packages/Premium Analytics/Widgets/OrdersOverTime`,component:C,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays order counts over time for the selected period.`}}}},q={render:R,args:{preset:U,withComparison:!1},decorators:[y],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:R,args:{preset:U,withComparison:!0},decorators:[y],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`orders/by-date`,`loading`),()=>l(`orders/by-date`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`orders/by-date`,`error`),()=>l(`orders/by-date`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`orders/by-date`,`empty`),()=>l(`orders/by-date`,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...v,preset:U,withComparison:!0},argTypes:{...ie,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/orders-over-time"
	renderComponent={ OrdersOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderOrdersOverTimeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'loading');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderOrdersOverTimeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'error');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderOrdersOverTimeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'empty');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no order data: the widget shows its empty state ("No orders in
this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};