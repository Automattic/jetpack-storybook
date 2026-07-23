import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as ee}from"./build-module-DmVuor49.js";import{c as a,t as o}from"./src-DN9VFS2M.js";import{cr as s,yt as c}from"./chart-tooltip-Bng5hHZ0.js";import{F as l,L as u,P as d,V as f}from"./report-metric-BNxHdhqI.js";import{C as p,D as m,E as h,S as g,T as _,_ as v,b as y,t as b,w as x,x as S}from"./src-DM6U6HKv.js";function C({attributes:e={},setError:n}){return(0,w.jsx)(f,{attributes:e,setError:n,options:{from:`/`},children:(0,w.jsx)(v,{metricKey:`avg_items`,emptyStateText:t(`No orders in this period.`,`jetpack-premium-analytics`),errorText:t(`We couldn't load average items per order. Please try again in a moment.`,`jetpack-premium-analytics`)})})}var w,T=e((()=>{b(),n(),w=r()})),E,D=e((()=>{ee(),E={icon:i}})),O,k,A,j,M,N,P,F=e((()=>{O=`jpa/average-items-per-order`,k=`Average items per order`,A=`Show the average number of products per order over a set period of time.`,j={content:`Show the average number of products per order over a set period of time.`},M=`orders`,N=`framed`,P={name:O,title:k,description:A,help:j,category:M,presentation:N}}));function I(e=!1,t=W){return{reportParams:s(e,t)}}function L({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function R(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<AverageItemsPerOrderRender
\tattributes={ {
\t\treportParams: ${L(e)},
\t} }
/>`}function z({withComparison:e,preset:t}){return(0,H.jsx)(C,{attributes:I(e,t)})}function B(e){return(0,H.jsx)(C,{attributes:I(!1,e)})}function V({withComparison:e,preset:t,...n}){return(0,H.jsx)(_,{...n,widgetType:g(P,E),renderModule:U,renderComponent:C,attributes:I(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),o(),h(),p(),y(),d(),T(),D(),F(),H=r(),l(),U=`storybook/average-items-per-order`,W=`last-30-days`,G=a,K={title:`Packages/Premium Analytics/Widgets/AverageItemsPerOrder`,component:C,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Average items per order" widget. Fetches the orders report and displays the average number of items per order with optional period-over-period comparison and a sparkline.`}}}},q={render:z,args:{preset:W,withComparison:!1},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},J={render:z,args:{preset:W,withComparison:!0},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`orders/by-date`,`loading`),()=>u(`orders/by-date`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`orders/by-date`,`error`),()=>u(`orders/by-date`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`orders/by-date`,`empty`),()=>u(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...x,preset:W,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/average-items-per-order"
	renderComponent={ AverageItemsPerOrderRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderAverageItemsPerOrder,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<AverageItemsPerOrderStoryControls>;
        }) => getAverageItemsPerOrderSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderAverageItemsPerOrder,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<AverageItemsPerOrderStoryControls>;
        }) => getAverageItemsPerOrderSource(storyContext.args)
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and sparkline data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderAverageItemsPerOrderOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'loading');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderAverageItemsPerOrderOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'error');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderAverageItemsPerOrderOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'empty');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no order data: the widget shows its empty state ("No orders in
this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <AverageItemsPerOrderDashboardStory {...args} />,
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
\\trenderModule="storybook/average-items-per-order"
\\trenderComponent={ AverageItemsPerOrderRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};