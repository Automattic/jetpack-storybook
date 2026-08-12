import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{ll as i,n as a}from"./build-module-CDRs4YxF.js";import{$ as o,K as s,Y as c,q as l}from"./report-metric-B_XzB90i.js";import{n as u,r as d}from"./line-chart-KNuuN-21.js";import{t as ee,x as te}from"./src-DhTT1cTw.js";import{Tt as ne,hr as f}from"./chart-tooltip-C8ZGvC-d.js";import{t as p}from"./booking-order-metric-widget-xJe0Pro6.js";import{C as m,D as re,E as h,S as g,T as _,b as v,t as y,w as b,x}from"./src-CsviWOIg.js";function S({attributes:e={},setError:n}){return(0,C.jsx)(o,{attributes:e,setError:n,options:{from:`/`},children:(0,C.jsx)(p,{metricKey:`orders_no`,emptyStateText:t(`No bookings in this period.`,`jetpack-premium-analytics-pkg`),errorText:t(`We couldn't load bookings. Please try again in a moment.`,`jetpack-premium-analytics-pkg`)})})}var C,w=e((()=>{y(),n(),C=r()})),T,E=e((()=>{a(),T={icon:i}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/bookings-over-time`,O=`Bookings over time`,k=`See a breakdown of when bookings are placed to identify peak selling periods.`,A={content:`See a breakdown of when bookings are placed to identify peak selling periods.`},j=`bookings`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=U){return{reportParams:f(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsOverTimeRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return G(),(0,V.jsx)(S,{attributes:F(e,t)})}function z(e){return G(),(0,V.jsx)(S,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return G(),(0,V.jsx)(_,{...n,widgetType:g(N,T),renderModule:H,renderComponent:S,attributes:F(e,t)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{ne(),ee(),h(),m(),v(),d(),s(),w(),E(),P(),V=r(),l(),H=`storybook/bookings-over-time`,U=`last-30-days`,W=te,G=()=>u.Legend,K={title:`Packages/Premium Analytics/Widgets/BookingsOverTime`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays bookings over time for the selected period.`}}}},q={render:R,args:{preset:U,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:R,args:{preset:U,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(c(`orders-by-product-type/by-date`,`loading`),()=>c(`orders-by-product-type/by-date`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(c(`orders-by-product-type/by-date`,`error`),()=>c(`orders-by-product-type/by-date`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(c(`orders-by-product-type/by-date`,`empty`),()=>c(`orders-by-product-type/by-date`,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...b,preset:U,withComparison:!0},argTypes:{...re,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/bookings-over-time"
	renderComponent={ BookingsOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderBookingsOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<BookingsOverTimeStoryControls>;
        }) => getBookingsOverTimeSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderBookingsOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<BookingsOverTimeStoryControls>;
        }) => getBookingsOverTimeSource(storyContext.args)
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsOverTimeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders-by-product-type/by-date', 'loading');
    return () => setReportMockState('orders-by-product-type/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.

Bookings are order data filtered to booking product types, so this widget's
report goes through the \`orders-by-product-type/by-date\` endpoint rather than
the plain \`orders/by-date\` endpoint the other order-metric widgets use.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsOverTimeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders-by-product-type/by-date', 'error');
    return () => setReportMockState('orders-by-product-type/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsOverTimeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders-by-product-type/by-date', 'empty');
    return () => setReportMockState('orders-by-product-type/by-date', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no booking data: the widget shows its empty state ("No bookings
in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <BookingsOverTimeDashboardStory {...args} />,
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
\\trenderModule="storybook/bookings-over-time"
\\trenderComponent={ BookingsOverTimeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};