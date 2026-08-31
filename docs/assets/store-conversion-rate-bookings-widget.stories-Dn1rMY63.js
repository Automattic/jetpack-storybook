import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{cl as n,t as r}from"./build-module-CR6EsQjA.js";import{g as ee}from"./hooks-D2_2euez.js";import{n as i,t as a}from"./build-module-Bag1E7xM.js";import{C as o,t as s}from"./src-D4zdPfMV.js";import{qt as c,t as l}from"./src-CAMj6IP6.js";import{G as te,K as ne}from"./report-metric-Cd1wYzm4.js";import{C as re,D as ie,E as ae,S as oe,T as u,b as d,m as f,t as p,w as m,x as h}from"./src-BXmpvoIw.js";import{n as g,t as _}from"./force-stats-mock-state-Co4_zNyV.js";function v({attributes:e={},setError:t}){return(0,y.jsx)(ee,{attributes:e,setError:t,options:{from:`/`},children:(0,y.jsx)(f,{})})}var y,b=e((()=>{p(),y=t()})),x,S=e((()=>{r(),x={icon:n}})),C,w,T,E,D,O,k,A=e((()=>{C=`jpa/store-conversion-rate-bookings`,w=`Store conversion rate - Bookings`,T=`Store conversion rate for booking products over the selected time period.`,E={content:`Track your booking conversion funnel from sessions to completed bookings over the selected time period.`},D=`bookings`,O=`framed`,k={name:C,title:w,description:T,help:E,category:D,presentation:O}}));function j(e){let t={active_sessions:String(e?4860:5480),visitors:String(e?3920:4410),with_cart_addition:String(e?970:1215),reached_checkout:String(e?430:560),completed_checkout:String(e?218:310),date_start:`2026-05-01T00:00:00.000Z`,date_end:`2026-05-31T23:59:59.999Z`};return{summary:t,data:[t]}}function M(){W||(W=!0,a.use(async(e,t)=>{if(!String(e.path??e.url??``).startsWith(B))return t(e);let n=G%2==1;return G+=1,j(n)}))}function N(e=!1,t=H){return{reportParams:c(e,t)}}function P({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function F(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StoreConversionRateBookingsRender
\tattributes={ {
\t\treportParams: ${P(e)},
\t} }
/>`}function I({withComparison:e,preset:t}){return(0,z.jsx)(v,{attributes:N(e,t)})}function L(e){return(0,z.jsx)(v,{attributes:N(!1,e)})}function R({withComparison:e,preset:t,...n}){return(0,z.jsx)(u,{...n,widgetType:oe(k,x),renderModule:V,renderComponent:v,attributes:N(e,t)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),s(),i(),te(),ae(),re(),d(),g(),b(),S(),A(),z=t(),B=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/sessions/by-conversion-rate`,V=`storybook/store-conversion-rate-bookings`,H=`last-30-days`,U=o,W=!1,G=0,ne(),M(),K={title:`Packages/Premium Analytics/Widgets/StoreConversionRateBookings`,component:v,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays the booking product conversion funnel for the selected period.`}}}},q={render:I,args:{preset:H,withComparison:!1},decorators:[h],parameters:{docs:{source:{transform:(e,t)=>F(t.args)}}}},J={render:I,args:{preset:H,withComparison:!0},decorators:[h],parameters:{docs:{source:{transform:(e,t)=>F(t.args)}}}},Y={render:()=>L(`last-90-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(_(`sessions/by-conversion-rate`,`loading`),()=>_(`sessions/by-conversion-rate`,null))},X={render:()=>L(`last-7-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(_(`sessions/by-conversion-rate`,`error`),()=>_(`sessions/by-conversion-rate`,null))},Z={render:()=>L(`last-365-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(_(`sessions/by-conversion-rate`,`empty`),()=>_(`sessions/by-conversion-rate`,null))},Q={render:e=>(0,z.jsx)(R,{...e}),args:{...m,preset:H,withComparison:!0},argTypes:{...ie,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/store-conversion-rate-bookings"
	renderComponent={ StoreConversionRateBookingsRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period conversion change.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderStoreConversionRateBookingsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'loading');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.

The story's own conversion-rate mock middleware (registered above) would
otherwise shadow \`setReportMockState\` — it always answers
\`sessions/by-conversion-rate\` with canned data and never falls through.
\`forceStatsMockState\` re-registers its shared override when this story sets a
forced state, keeping it ahead of story-local middleware even if Storybook
lazy-loads another story module later.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderStoreConversionRateBookingsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'error');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderStoreConversionRateBookingsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('sessions/by-conversion-rate', 'empty');
    return () => forceStatsMockState('sessions/by-conversion-rate', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no active sessions: the widget shows its empty state ("No
conversion data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};