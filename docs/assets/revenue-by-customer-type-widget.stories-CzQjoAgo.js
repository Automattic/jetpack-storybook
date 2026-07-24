import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{Nn as n,n as r}from"./build-module-DmVuor49.js";import{c as i,t as a}from"./src-DN9VFS2M.js";import{cr as o,yt as s}from"./chart-tooltip-CrpYpY42.js";import{F as c,L as l,P as u,V as d}from"./report-metric-BcpzVrHe.js";import{C as f,D as p,E as m,S as h,T as g,b as _,t as v,w as y,x as b}from"./src-CWJoV6Hq.js";import{n as x}from"./revenue-by-customer-type-widget-CoU6mu6z.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(d,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(x,{})})}var C,w=e((()=>{v(),C=t()})),T,E=e((()=>{r(),T={icon:n}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/revenue-by-customer-type`,O=`Revenue by customer type`,k=`Shows the breakdown of order revenue from new and returning customers over the selected time period.`,A={content:`Revenue breakdown from new customers vs returning customers over the selected time period.`},j=`store`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=U){return{reportParams:o(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<RevenueByCustomerTypeRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return(0,V.jsx)(S,{attributes:F(e,t)})}function z(e){return(0,V.jsx)(S,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return(0,V.jsx)(g,{...n,widgetType:h(N,T),renderModule:H,renderComponent:S,attributes:F(e,t)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{s(),a(),m(),f(),_(),u(),w(),E(),P(),V=t(),c(),H=`storybook/revenue-by-customer-type`,U=`last-30-days`,W=i,G={title:`Packages/Premium Analytics/Widgets/RevenueByCustomerType`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays new and returning customer revenue for the selected period.`}}}},K={render:R,args:{preset:U,withComparison:!1},decorators:[b],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},q={render:R,args:{preset:U,withComparison:!0},decorators:[b],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`customers/new-returning`,`loading`),()=>l(`customers/new-returning`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`customers/new-returning`,`error`),()=>l(`customers/new-returning`,null))},X={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`customers/new-returning`,`empty`),()=>l(`customers/new-returning`,null))},Z={render:e=>(0,V.jsx)(B,{...e}),args:{...y,preset:U,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/revenue-by-customer-type"
	renderComponent={ RevenueByCustomerTypeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderRevenueByCustomerType,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<RevenueByCustomerTypeStoryControls>;
        }) => getRevenueByCustomerTypeSource(storyContext.args)
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderRevenueByCustomerType,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<RevenueByCustomerTypeStoryControls>;
        }) => getRevenueByCustomerTypeSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period revenue changes.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderRevenueByCustomerTypeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('customers/new-returning', 'loading');
    return () => setReportMockState('customers/new-returning', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the customers report is in flight, so the widget shows its
loading state. The mock is forced to never resolve for the duration of this
story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderRevenueByCustomerTypeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('customers/new-returning', 'error');
    return () => setReportMockState('customers/new-returning', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The customers report failed: the widget shows its error state with a Retry
action (which re-runs the query — still mocked as failing while this story is
active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderRevenueByCustomerTypeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('customers/new-returning', 'empty');
    return () => setReportMockState('customers/new-returning', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The customers report resolved with no revenue in the period: the widget shows
its empty state.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <RevenueByCustomerTypeDashboardStory {...args} />,
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
\\trenderModule="storybook/revenue-by-customer-type"
\\trenderComponent={ RevenueByCustomerTypeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};