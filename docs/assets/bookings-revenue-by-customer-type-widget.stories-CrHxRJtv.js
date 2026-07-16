import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{al as i,n as a}from"./build-module-C6Ow06jV.js";import{c as o,t as s}from"./src-AIpdnvxP.js";import{Yn as c,ut as l}from"./chart-tooltip-DjozNI1k.js";import{C as u,S as d,T as f,k as p}from"./report-metric-BDvGeXwR.js";import{t as m}from"./revenue-by-customer-type-widget-BA_OLDVL.js";import{S as h,b as g,t as _,x as v,y}from"./src-Dl15LA5n.js";import{n as b,r as x}from"./with-widget-canvas-Dz43KNHY.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(m,{})})}var C,w=e((()=>{_(),C=r()})),T,E=e((()=>{n(),a(),T={name:`jpa/bookings-revenue-by-customer-type`,title:t(`Bookings revenue by customer type`,`jetpack-premium-analytics`),help:{content:t(`Revenue breakdown from new customers vs returning customers for bookings over the selected time period.`,`jetpack-premium-analytics`)},icon:i}}));function D(e=!1,t=F){return{reportParams:c(e,t)}}function O({withComparison:e,preset:t}){let n=!!e,r=t??F;return!n&&r===F?`getDefaultQueryParams()`:n&&r===F?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function k(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsRevenueByCustomerTypeRender
\tattributes={ {
\t\treportParams: ${O(e)},
\t} }
/>`}function A({withComparison:e,preset:t}){return(0,N.jsx)(S,{attributes:D(e,t)})}function j(e){return(0,N.jsx)(S,{attributes:D(!1,e)})}function M({withComparison:e,preset:t,...n}){return(0,N.jsx)(g,{...n,widgetType:T,renderModule:P,renderComponent:S,attributes:D(e,t)})}var N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{l(),s(),v(),b(),d(),w(),E(),N=r(),u(),P=`storybook/bookings-revenue-by-customer-type`,F=`last-30-days`,I=o,L={title:`Packages/Premium Analytics/Widgets/BookingsRevenueByCustomerType`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays booking revenue from new customers versus returning customers.`}}}},R={render:A,args:{preset:F,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},z={render:A,args:{preset:F,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},B={render:()=>j(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`customers/new-returning`,`loading`),()=>f(`customers/new-returning`,null))},V={render:()=>j(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`customers/new-returning`,`error`),()=>f(`customers/new-returning`,null))},H={render:()=>j(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`customers/new-returning`,`empty`),()=>f(`customers/new-returning`,null))},U={render:e=>(0,N.jsx)(M,{...e}),args:{...y,preset:F,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/bookings-revenue-by-customer-type"
	renderComponent={ BookingsRevenueByCustomerTypeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderBookingsRevenueByCustomerType,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<BookingsRevenueByCustomerTypeStoryControls>;
        }) => getBookingsRevenueByCustomerTypeSource(storyContext.args)
      }
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: renderBookingsRevenueByCustomerType,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<BookingsRevenueByCustomerTypeStoryControls>;
        }) => getBookingsRevenueByCustomerTypeSource(storyContext.args)
      }
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period revenue changes.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsRevenueByCustomerTypeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('customers/new-returning', 'loading');
    return () => setReportMockState('customers/new-returning', null);
  }
}`,...B.parameters?.docs?.source},description:{story:`First load: the filtered customers report is in flight, so the widget shows
its loading state. The mock is forced to never resolve for the duration of
this story.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsRevenueByCustomerTypeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('customers/new-returning', 'error');
    return () => setReportMockState('customers/new-returning', null);
  }
}`,...V.parameters?.docs?.source},description:{story:`The filtered customers report failed: the widget shows its error state with a
Retry action (which re-runs the query — still mocked as failing while this
story is active).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderBookingsRevenueByCustomerTypeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('customers/new-returning', 'empty');
    return () => setReportMockState('customers/new-returning', null);
  }
}`,...H.parameters?.docs?.source},description:{story:`The filtered customers report resolved with no booking revenue in the period:
the widget shows its empty state.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <BookingsRevenueByCustomerTypeDashboardStory {...args} />,
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
\\trenderModule="storybook/bookings-revenue-by-customer-type"
\\trenderComponent={ BookingsRevenueByCustomerTypeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...U.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...U.parameters?.docs?.description}}},W=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{R as Default,H as Empty,V as Error,B as Loading,U as WidgetDashboardWithWidget,z as WithComparison,W as __namedExportsOrder,L as default};