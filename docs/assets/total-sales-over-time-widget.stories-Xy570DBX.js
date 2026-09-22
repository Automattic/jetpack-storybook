import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,ul as a}from"./build-module-2iv4IIRq.js";import{m as o}from"./hooks-BGLv_fvZ.js";import{n as s,r as c}from"./line-chart-BTZcR5HF.js";import{rt as l,t as u}from"./src-CJGEmgc4.js";import{r as d,tn as f}from"./date-period-dropdown-Bc5yRpG3.js";import{c as p,i as ee,r as te}from"./register-report-mocks-D1d3-hOY.js";import{_ as ne,t as m}from"./src-idLAuj3E.js";import{a as h,c as re,i as g,l as _,n as v,o as y,r as b,s as x}from"./with-widget-canvas-Be9bTdp7.js";function S({attributes:e={},setError:n}){return(0,C.jsx)(o,{attributes:e,setError:n,options:{from:`/`},children:(0,C.jsx)(ne,{metricKey:`total_sales`,seriesLabel:t(`Total sales`,`jetpack-premium-analytics-pkg`),emptyStateText:t(`No sales in this period.`,`jetpack-premium-analytics-pkg`),errorText:t(`We couldn't load total sales. Please try again in a moment.`,`jetpack-premium-analytics-pkg`)})})}var C,w=e((()=>{m(),n(),C=r()})),T,E=e((()=>{i(),T={icon:a}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/total-sales-over-time`,O=`Total sales over time`,k=`Track total sales including all orders and transactions.`,A={content:`Track total sales including all orders and transactions.`},j=`store`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=W){return{reportParams:f(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<TotalSalesOverTimeRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return U(),(0,V.jsx)(S,{attributes:F(e,t)})}function z(e){return U(),(0,V.jsx)(S,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return U(),(0,V.jsx)(x,{...n,widgetType:g(N,T),renderModule:H,renderComponent:S,attributes:{reportParams:f(e,t)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),u(),re(),h(),v(),te(),c(),w(),E(),P(),V=r(),ee(),H=`storybook/total-sales-over-time`,U=()=>s.Legend,W=`last-30-days`,G=l,K={title:`Packages/Premium Analytics/Widgets/TotalSalesOverTime`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays total sales over time for the selected period.`}}}},q={render:R,args:{preset:W,withComparison:!1},decorators:[b],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:R,args:{preset:W,withComparison:!0},decorators:[b],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`orders/by-date`,`loading`),()=>p(`orders/by-date`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`orders/by-date`,`error`),()=>p(`orders/by-date`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`orders/by-date`,`empty`),()=>p(`orders/by-date`,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...y,preset:W,withComparison:!0},argTypes:{..._,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/total-sales-over-time"
	renderComponent={ TotalSalesOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<TotalSalesOverTimeStoryControls>;
        }) => getTotalSalesOverTimeSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<TotalSalesOverTimeStoryControls>;
        }) => getTotalSalesOverTimeSource(storyContext.args)
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalSalesOverTimeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'loading');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalSalesOverTimeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'error');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalSalesOverTimeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'empty');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no sales data: the widget shows its empty state ("No sales in
this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TotalSalesOverTimeDashboardStory {...args} />,
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
\\trenderModule="storybook/total-sales-over-time"
\\trenderComponent={ TotalSalesOverTimeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};