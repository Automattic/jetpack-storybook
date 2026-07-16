import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{al as i,n as a}from"./build-module-C6Ow06jV.js";import{n as o,t as s}from"./build-module-Dwe2XBoe.js";import{c,t as l}from"./src-AIpdnvxP.js";import{Yn as u,ut as d}from"./chart-tooltip-9LAfP_cV.js";import{C as f,S as p,k as m}from"./report-metric-DGejQO1_.js";import{S as h,b as g,m as _,t as v,x as y,y as b}from"./src-D_idzdSs.js";import{n as x,r as S}from"./with-widget-canvas-Dz43KNHY.js";import{n as C,t as w}from"./force-stats-mock-state-DW_I4FhX.js";function T({attributes:e={},setError:t}){return(0,E.jsx)(m,{attributes:e,setError:t,options:{from:`/`},children:(0,E.jsx)(_,{})})}var E,D=e((()=>{v(),E=r()})),O,k=e((()=>{n(),a(),O={name:`jpa/store-conversion-rate-bookings`,title:t(`Store conversion rate - Bookings`,`jetpack-premium-analytics`),help:{content:t(`Track your booking conversion funnel from sessions to completed bookings over the selected time period.`,`jetpack-premium-analytics`)},icon:i}}));function A(e){let t={active_sessions:String(e?4860:5480),visitors:String(e?3920:4410),with_cart_addition:String(e?970:1215),reached_checkout:String(e?430:560),completed_checkout:String(e?218:310),date_start:`2026-05-01T00:00:00.000Z`,date_end:`2026-05-31T23:59:59.999Z`};return{summary:t,data:[t]}}function j(){U||(U=!0,s.use(async(e,t)=>{if(!String(e.path??e.url??``).startsWith(z))return t(e);let n=W%2==1;return W+=1,A(n)}))}function M(e=!1,t=V){return{reportParams:u(e,t)}}function N({withComparison:e,preset:t}){let n=!!e,r=t??V;return!n&&r===V?`getDefaultQueryParams()`:n&&r===V?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function P(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StoreConversionRateBookingsRender
\tattributes={ {
\t\treportParams: ${N(e)},
\t} }
/>`}function F({withComparison:e,preset:t}){return(0,R.jsx)(T,{attributes:M(e,t)})}function I(e){return(0,R.jsx)(T,{attributes:M(!1,e)})}function L({withComparison:e,preset:t,...n}){return(0,R.jsx)(g,{...n,widgetType:O,renderModule:B,renderComponent:T,attributes:M(e,t)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{d(),l(),o(),p(),y(),x(),C(),D(),k(),R=r(),z=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/sessions/by-conversion-rate`,B=`storybook/store-conversion-rate-bookings`,V=`last-30-days`,H=c,U=!1,W=0,f(),j(),G={title:`Packages/Premium Analytics/Widgets/StoreConversionRateBookings`,component:T,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:H,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays the booking product conversion funnel for the selected period.`}}}},K={render:F,args:{preset:V,withComparison:!1},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>P(t.args)}}}},q={render:F,args:{preset:V,withComparison:!0},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>P(t.args)}}}},J={render:()=>I(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(w(`sessions/by-conversion-rate`,`loading`),()=>w(`sessions/by-conversion-rate`,null))},Y={render:()=>I(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(w(`sessions/by-conversion-rate`,`error`),()=>w(`sessions/by-conversion-rate`,null))},X={render:()=>I(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(w(`sessions/by-conversion-rate`,`empty`),()=>w(`sessions/by-conversion-rate`,null))},Z={render:e=>(0,R.jsx)(L,{...e}),args:{...b,preset:V,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:H,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/store-conversion-rate-bookings"
	renderComponent={ StoreConversionRateBookingsRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period conversion change.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderStoreConversionRateBookingsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'loading');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.

The story's own conversion-rate mock middleware (registered above) would
otherwise shadow \`setReportMockState\` — it always answers
\`sessions/by-conversion-rate\` with canned data and never falls through.
\`forceStatsMockState\` re-registers its shared override when this story sets a
forced state, keeping it ahead of story-local middleware even if Storybook
lazy-loads another story module later.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderStoreConversionRateBookingsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'error');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderStoreConversionRateBookingsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'empty');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no active sessions: the widget shows its empty state ("No
conversion data in this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};