import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{n as o,r as s}from"./line-chart-CMsDGLcD.js";import{c,t as l}from"./src-DN9VFS2M.js";import{Xn as u,ut as d}from"./chart-tooltip-sEsOeFfr.js";import{C as f,S as p,T as m,k as h}from"./report-metric-CMHQ4oKU.js";import{t as g}from"./booking-order-metric-widget-Cgr4FJ-j.js";import{C as _,S as v,T as y,b,t as x,w as S,x as C}from"./src-C6SuNyKS.js";function w({attributes:e={},setError:n}){return(0,T.jsx)(h,{attributes:e,setError:n,options:{from:`/`},children:(0,T.jsx)(g,{metricKey:`orders_no`,emptyStateText:t(`No bookings in this period.`,`jetpack-premium-analytics`),errorText:t(`We couldn't load bookings. Please try again in a moment.`,`jetpack-premium-analytics`)})})}var T,E=e((()=>{x(),n(),T=r()})),D,O=e((()=>{n(),a(),D={name:`jpa/bookings-over-time`,title:t(`Bookings over time`,`jetpack-premium-analytics`),help:{content:t(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics`)},icon:i}}));function k(e=!1,t=L){return{reportParams:u(e,t)}}function A({withComparison:e,preset:t}){let n=!!e,r=t??L;return!n&&r===L?`getDefaultQueryParams()`:n&&r===L?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function j(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsOverTimeRender
\tattributes={ {
\t\treportParams: ${A(e)},
\t} }
/>`}function M({withComparison:e,preset:t}){return z(),(0,F.jsx)(w,{attributes:k(e,t)})}function N(e){return z(),(0,F.jsx)(w,{attributes:k(!1,e)})}function P({withComparison:e,preset:t,...n}){return z(),(0,F.jsx)(_,{...n,widgetType:D,renderModule:I,renderComponent:w,attributes:k(e,t)})}var F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{d(),l(),S(),b(),s(),p(),E(),O(),F=r(),f(),I=`storybook/bookings-over-time`,L=`last-30-days`,R=c,z=()=>o.Legend,B={title:`Packages/Premium Analytics/Widgets/BookingsOverTime`,component:w,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:R,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays bookings over time for the selected period.`}}}},V={render:M,args:{preset:L,withComparison:!1},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>j(t.args)}}}},H={render:M,args:{preset:L,withComparison:!0},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>j(t.args)}}}},U={render:()=>N(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(m(`orders-by-product-type/by-date`,`loading`),()=>m(`orders-by-product-type/by-date`,null))},W={render:()=>N(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(m(`orders-by-product-type/by-date`,`error`),()=>m(`orders-by-product-type/by-date`,null))},G={render:()=>N(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(m(`orders-by-product-type/by-date`,`empty`),()=>m(`orders-by-product-type/by-date`,null))},K={render:e=>(0,F.jsx)(P,{...e}),args:{...v,preset:L,withComparison:!0},argTypes:{...y,preset:{control:`select`,options:R,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/bookings-over-time"
	renderComponent={ BookingsOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsOverTimeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders-by-product-type/by-date', 'loading');
    return () => setReportMockState('orders-by-product-type/by-date', null);
  }
}`,...U.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.

Bookings are order data filtered to booking product types, so this widget's
report goes through the \`orders-by-product-type/by-date\` endpoint rather than
the plain \`orders/by-date\` endpoint the other order-metric widgets use.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsOverTimeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders-by-product-type/by-date', 'error');
    return () => setReportMockState('orders-by-product-type/by-date', null);
  }
}`,...W.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsOverTimeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders-by-product-type/by-date', 'empty');
    return () => setReportMockState('orders-by-product-type/by-date', null);
  }
}`,...G.parameters?.docs?.source},description:{story:`Resolved with no booking data: the widget shows its empty state ("No bookings
in this period.").`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...K.parameters?.docs?.description}}},q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{V as Default,G as Empty,W as Error,U as Loading,K as WidgetDashboardWithWidget,H as WithComparison,q as __namedExportsOrder,B as default};