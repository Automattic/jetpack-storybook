import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{c as o,t as s}from"./src-DN9VFS2M.js";import{cr as c,ct as l,yt as u}from"./chart-tooltip-CgoJ0b1f.js";import{F as d,L as f,P as p,V as m}from"./report-metric-wiNZkTvH.js";import{C as h,D as g,E as _,S as ee,T as te,b as v,t as y,w as b,x}from"./src-B9qAQjkO.js";import{t as S}from"./sales-by-device-widget-BknMkOZ1.js";function ne(){return(0,w.jsx)(S,{filter:l,emptyStateText:t(`No booking data in this period.`,`jetpack-premium-analytics`),errorText:t(`We couldn't load booking data by device. Please try again in a moment.`,`jetpack-premium-analytics`)})}function C({attributes:e={},setError:t}){return(0,w.jsx)(m,{attributes:e,setError:t,options:{from:`/`},children:(0,w.jsx)(ne,{})})}var w,T=e((()=>{y(),n(),w=r()})),E,D=e((()=>{a(),E={icon:i}})),O,k,A,j,M,N,P,F=e((()=>{O=`jpa/bookings-by-device`,k=`Bookings by device`,A=`See which devices your customers are using to make bookings in your store.`,j={content:`See which devices your customers are using to make bookings in your store.`},M=`bookings`,N=`framed`,P={name:O,title:k,description:A,help:j,category:M,presentation:N}}));function I(e=!1,t=W){return{reportParams:c(e,t)}}function L({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function R(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsByDeviceRender
\tattributes={ {
\t\treportParams: ${L(e)},
\t} }
/>`}function z({withComparison:e,preset:t}){return(0,H.jsx)(C,{attributes:I(e,t)})}function B(e){return(0,H.jsx)(C,{attributes:I(!1,e)})}function V({withComparison:e,preset:t,...n}){return(0,H.jsx)(te,{...n,widgetType:ee(P,E),renderModule:U,renderComponent:C,attributes:I(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),s(),_(),h(),v(),p(),T(),D(),F(),H=r(),d(),U=`storybook/bookings-by-device`,W=`last-30-days`,G=o,K={title:`Packages/Premium Analytics/Widgets/BookingsByDevice`,component:C,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays which devices customers use to make bookings.`}}}},q={render:z,args:{preset:W,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},J={render:z,args:{preset:W,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`order-attribution-by-product/device/summary`,`loading`),()=>f(`order-attribution-by-product/device/summary`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`order-attribution-by-product/device/summary`,`error`),()=>f(`order-attribution-by-product/device/summary`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`order-attribution-by-product/device/summary`,`empty`),()=>f(`order-attribution-by-product/device/summary`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...b,preset:W,withComparison:!0},argTypes:{...g,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/bookings-by-device"
	renderComponent={ BookingsByDeviceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and sparkline data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByDeviceOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution-by-product/device/summary', 'loading');
    return () => setReportMockState('order-attribution-by-product/device/summary', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the filtered order-attribution report is in flight, so the widget
shows its loading state. The mock is forced to never resolve for the duration
of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByDeviceOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution-by-product/device/summary', 'error');
    return () => setReportMockState('order-attribution-by-product/device/summary', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The filtered order-attribution report failed: the widget shows its error state
with a Retry action (which re-runs the query — still mocked as failing while
this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsByDeviceOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution-by-product/device/summary', 'empty');
    return () => setReportMockState('order-attribution-by-product/device/summary', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no order-attribution rows: the widget shows its empty state (the
neutral device glyph and "No booking data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};