import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as ee,n as i}from"./build-module-DmVuor49.js";import{n as a,r as o}from"./line-chart-CuoIAcZw.js";import{c as s,t as c}from"./src-DN9VFS2M.js";import{cr as l,yt as u}from"./chart-tooltip-oGdCeVNL.js";import{F as te,L as d,P as ne,V as f}from"./report-metric-Bov3irZA.js";import{C as p,D as m,E as re,S as h,T as g,_,b as v,t as y,w as b,x}from"./src-DDBKoSc7.js";function S({attributes:e={},setError:n}){return(0,C.jsx)(f,{attributes:e,setError:n,options:{from:`/`},children:(0,C.jsx)(_,{metricKey:`orders_value_gross`,emptyStateText:t(`No sales in this period.`,`jetpack-premium-analytics`),errorText:t(`We couldn't load gross sales. Please try again in a moment.`,`jetpack-premium-analytics`)})})}var C,w=e((()=>{y(),n(),C=r()})),T,E=e((()=>{i(),T={icon:ee}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/gross-sales-over-time`,O=`Gross sales over time`,k=`Gross sales over the selected time period.`,A={content:`Monitor your total revenue — before any discounts, returns, or adjustments — over a set period of time.`},j=`store`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=U){return{reportParams:l(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<GrossSalesOverTimeRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return G(),(0,V.jsx)(S,{attributes:F(e,t)})}function z(e){return G(),(0,V.jsx)(S,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return G(),(0,V.jsx)(g,{...n,widgetType:h(N,T),renderModule:H,renderComponent:S,attributes:F(e,t)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),c(),re(),p(),v(),o(),ne(),w(),E(),P(),V=r(),te(),H=`storybook/gross-sales-over-time`,U=`last-30-days`,W=s,G=()=>a.Legend,K={title:`Packages/Premium Analytics/Widgets/GrossSalesOverTime`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays gross sales over time for the selected period.`}}}},q={render:R,args:{preset:U,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:R,args:{preset:U,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`orders/by-date`,`loading`),()=>d(`orders/by-date`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`orders/by-date`,`error`),()=>d(`orders/by-date`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`orders/by-date`,`empty`),()=>d(`orders/by-date`,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...b,preset:U,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/gross-sales-over-time"
	renderComponent={ GrossSalesOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderGrossSalesOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<GrossSalesOverTimeStoryControls>;
        }) => getGrossSalesOverTimeSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderGrossSalesOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<GrossSalesOverTimeStoryControls>;
        }) => getGrossSalesOverTimeSource(storyContext.args)
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and line chart data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderGrossSalesOverTimeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'loading');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderGrossSalesOverTimeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'error');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderGrossSalesOverTimeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'empty');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no gross sales data: the widget shows its empty state ("No sales
in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <GrossSalesOverTimeDashboardStory {...args} />,
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
\\trenderModule="storybook/gross-sales-over-time"
\\trenderComponent={ GrossSalesOverTimeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};