import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_n as i,n as a}from"./build-module-DwipKI4I.js";import{f as o,s,xt as c}from"./hooks-CQ_ohRWZ.js";import{n as l,r as u}from"./line-chart-B3lUDvsv.js";import{l as d,t as f}from"./src-CT8Z3786.js";import{n as p,t as m}from"./register-report-mocks-DBI-jbM7.js";import{t as h}from"./booking-order-metric-widget-ZjP-0yjU.js";import{i as g,n as _,r as v,t as y}from"./widget-dashboard-with-widget-J54NnwKJ.js";import{t as b}from"./src-9IGza-Fx.js";function x({attributes:e={},setError:t}){return(0,S.jsx)(s,{attributes:e,setError:t,options:{from:`/`},children:(0,S.jsx)(h,{metricKey:`orders_no`})})}var S,C=e((()=>{b(),S=r()})),w,T=e((()=>{n(),a(),w={name:`jpa/bookings-over-time`,title:t(`Bookings over time`,`jetpack-premium-analytics`),description:t(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics`),icon:i}}));function E(e=!1,t=N){return{reportParams:c(e,t)}}function D({withComparison:e,preset:t}){let n=!!e,r=t??N;return!n&&r===N?`getDefaultQueryParams()`:n&&r===N?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function O(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<BookingsOverTimeRender
\tattributes={ {
\t\treportParams: ${D(e)},
\t} }
/>`}function k({withComparison:e,preset:t}){return F(),(0,j.jsx)(x,{attributes:E(e,t)})}function A({withComparison:e,preset:t,...n}){return F(),(0,j.jsx)(_,{...n,widgetType:w,renderModule:M,renderComponent:x,attributes:E(e,t)})}var j,M,N,P,F,I,L,R,z,B,V;e((()=>{o(),f(),v(),u(),m(),C(),T(),j=r(),p(),M=`storybook/bookings-over-time`,N=`last-30-days`,P=d,F=()=>l.Legend,I=e=>(0,j.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,j.jsx)(e,{})}),L={title:`Packages/Premium Analytics/Widgets/BookingsOverTime`,component:x,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays bookings over time for the selected period.`}}}},R={render:k,args:{preset:N,withComparison:!1},decorators:[I],parameters:{docs:{source:{transform:(e,t)=>O(t.args)}}}},z={render:k,args:{preset:N,withComparison:!0},decorators:[I],parameters:{docs:{source:{transform:(e,t)=>O(t.args)}}}},B={render:e=>(0,j.jsx)(A,{...e}),args:{...y,preset:N,withComparison:!0},argTypes:{...g,preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/bookings-over-time"
	renderComponent={ BookingsOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...B.parameters?.docs?.description}}},V=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{R as Default,B as WidgetDashboardWithWidget,z as WithComparison,V as __namedExportsOrder,L as default};