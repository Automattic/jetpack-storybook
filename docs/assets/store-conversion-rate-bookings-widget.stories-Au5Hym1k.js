import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{$c as i,n as a}from"./build-module-_6UNQmiR.js";import{Dt as o,p as s,s as c}from"./hooks-DRMkUwGe.js";import{n as l,t as u}from"./build-module-8WgUXRrQ.js";import{l as d,t as f}from"./src-nQqIBmxK.js";import{n as p,t as m}from"./register-report-mocks-Co1DncRa.js";import{i as h,n as g,r as _,t as v}from"./widget-dashboard-with-widget-uXb8aZkj.js";import{m as y,t as b}from"./src-C8i09LlU.js";function x({attributes:e={},setError:t}){return(0,S.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,S.jsx)(y,{})})}var S,C=e((()=>{b(),S=r()})),w,T=e((()=>{n(),a(),w={name:`jpa/store-conversion-rate-bookings`,title:t(`Store conversion rate - Bookings`,`jetpack-premium-analytics`),description:t(`Store conversion rate for booking products over the selected time period.`,`jetpack-premium-analytics`),icon:i}}));function E(e){let t={active_sessions:String(e?4860:5480),visitors:String(e?3920:4410),with_cart_addition:String(e?970:1215),reached_checkout:String(e?430:560),completed_checkout:String(e?218:310),date_start:`2026-05-01T00:00:00.000Z`,date_end:`2026-05-31T23:59:59.999Z`};return{summary:t,data:[t]}}function D(){R||(R=!0,u.use(async(e,t)=>{if(!String(e.path??e.url??``).startsWith(P))return t(e);let n=z%2==1;return z+=1,E(n)}))}function O(e=!1,t=I){return{reportParams:o(e,t)}}function k({withComparison:e,preset:t}){let n=!!e,r=t??I;return!n&&r===I?`getDefaultQueryParams()`:n&&r===I?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function A(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StoreConversionRateBookingsRender
\tattributes={ {
\t\treportParams: ${k(e)},
\t} }
/>`}function j({withComparison:e,preset:t}){return(0,N.jsx)(x,{attributes:O(e,t)})}function M({withComparison:e,preset:t,...n}){return(0,N.jsx)(g,{...n,widgetType:w,renderModule:F,renderComponent:x,attributes:O(e,t)})}var N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{s(),f(),l(),m(),_(),C(),T(),N=r(),P=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/sessions/by-conversion-rate`,F=`storybook/store-conversion-rate-bookings`,I=`last-30-days`,L=d,R=!1,z=0,B=e=>(0,N.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,N.jsx)(e,{})}),p(),D(),V={title:`Packages/Premium Analytics/Widgets/StoreConversionRateBookings`,component:x,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:L,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays the booking product conversion funnel for the selected period.`}}}},H={render:j,args:{preset:I,withComparison:!1},decorators:[B],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},U={render:j,args:{preset:I,withComparison:!0},decorators:[B],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},W={render:e=>(0,N.jsx)(M,{...e}),args:{...v,preset:I,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:L,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/store-conversion-rate-bookings"
	renderComponent={ StoreConversionRateBookingsRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: renderStoreConversionRateBookings,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<StoreConversionRateBookingsStoryControls>;
        }) => getStoreConversionRateBookingsSource(storyContext.args)
      }
    }
  }
}`,...H.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: renderStoreConversionRateBookings,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<StoreConversionRateBookingsStoryControls>;
        }) => getStoreConversionRateBookingsSource(storyContext.args)
      }
    }
  }
}`,...U.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period conversion change.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <StoreConversionRateBookingsDashboardStory {...args} />,
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
\\trenderModule="storybook/store-conversion-rate-bookings"
\\trenderComponent={ StoreConversionRateBookingsRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...W.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...W.parameters?.docs?.description}}},G=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{H as Default,W as WidgetDashboardWithWidget,U as WithComparison,G as __namedExportsOrder,V as default};