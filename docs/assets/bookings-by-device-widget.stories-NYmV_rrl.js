import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{c as o,t as s}from"./src-DN9VFS2M.js";import{$ as c,Yn as l,ut as u}from"./chart-tooltip-DMgEXtyG.js";import{C as d,S as f,T as p,k as m}from"./report-metric-BmlYe5tZ.js";import{t as h}from"./sales-by-device-widget-BBs4hNlA.js";import{S as g,b as _,t as v,x as y,y as b}from"./src-B_XkmHiU.js";import{n as x,r as S}from"./with-widget-canvas-Dz43KNHY.js";function C(){return(0,T.jsx)(h,{filter:c,emptyStateText:t(`No booking data in this period.`,`jetpack-premium-analytics`),errorText:t(`We couldn't load booking data by device. Please try again in a moment.`,`jetpack-premium-analytics`)})}function w({attributes:e={},setError:t}){return(0,T.jsx)(m,{attributes:e,setError:t,options:{from:`/`},children:(0,T.jsx)(C,{})})}var T,E=e((()=>{v(),n(),T=r()})),D,O=e((()=>{n(),a(),D={name:`jpa/bookings-by-device`,title:t(`Bookings by device`,`jetpack-premium-analytics`),help:{content:t(`See which devices your customers are using to make bookings in your store.`,`jetpack-premium-analytics`)},icon:i}}));function k(e=!1,t=L){return{reportParams:l(e,t)}}function A({withComparison:e,preset:t}){let n=!!e,r=t??L;return!n&&r===L?`getDefaultQueryParams()`:n&&r===L?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function j(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsByDeviceRender
\tattributes={ {
\t\treportParams: ${A(e)},
\t} }
/>`}function M({withComparison:e,preset:t}){return(0,F.jsx)(w,{attributes:k(e,t)})}function N(e){return(0,F.jsx)(w,{attributes:k(!1,e)})}function P({withComparison:e,preset:t,...n}){return(0,F.jsx)(_,{...n,widgetType:D,renderModule:I,renderComponent:w,attributes:k(e,t)})}var F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{u(),s(),y(),x(),f(),E(),O(),F=r(),d(),I=`storybook/bookings-by-device`,L=`last-30-days`,R=o,z={title:`Packages/Premium Analytics/Widgets/BookingsByDevice`,component:w,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:R,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays which devices customers use to make bookings.`}}}},B={render:M,args:{preset:L,withComparison:!1},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>j(t.args)}}}},V={render:M,args:{preset:L,withComparison:!0},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>j(t.args)}}}},H={render:()=>N(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(`order-attribution-by-product/device/summary`,`loading`),()=>p(`order-attribution-by-product/device/summary`,null))},U={render:()=>N(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(`order-attribution-by-product/device/summary`,`error`),()=>p(`order-attribution-by-product/device/summary`,null))},W={render:()=>N(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(`order-attribution-by-product/device/summary`,`empty`),()=>p(`order-attribution-by-product/device/summary`,null))},G={render:e=>(0,F.jsx)(P,{...e}),args:{...b,preset:L,withComparison:!0},argTypes:{...g,preset:{control:`select`,options:R,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/bookings-by-device"
	renderComponent={ BookingsByDeviceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDevice,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<BookingsByDeviceStoryControls>;
        }) => getBookingsByDeviceSource(storyContext.args)
      }
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDevice,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<BookingsByDeviceStoryControls>;
        }) => getBookingsByDeviceSource(storyContext.args)
      }
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and sparkline data.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByDeviceOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution-by-product/device/summary', 'loading');
    return () => setReportMockState('order-attribution-by-product/device/summary', null);
  }
}`,...H.parameters?.docs?.source},description:{story:`First load: the filtered order-attribution report is in flight, so the widget
shows its loading state. The mock is forced to never resolve for the duration
of this story.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByDeviceOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution-by-product/device/summary', 'error');
    return () => setReportMockState('order-attribution-by-product/device/summary', null);
  }
}`,...U.parameters?.docs?.source},description:{story:`The filtered order-attribution report failed: the widget shows its error state
with a Retry action (which re-runs the query — still mocked as failing while
this story is active).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByDeviceOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution-by-product/device/summary', 'empty');
    return () => setReportMockState('order-attribution-by-product/device/summary', null);
  }
}`,...W.parameters?.docs?.source},description:{story:`Resolved with no order-attribution rows: the widget shows its empty state (the
neutral device glyph and "No booking data in this period.").`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <BookingsByDeviceDashboardStory {...args} />,
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
\\trenderModule="storybook/bookings-by-device"
\\trenderComponent={ BookingsByDeviceRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...G.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...G.parameters?.docs?.description}}},K=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{B as Default,W as Empty,U as Error,H as Loading,G as WidgetDashboardWithWidget,V as WithComparison,K as __namedExportsOrder,z as default};