import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ll as n,n as r}from"./build-module-CDRs4YxF.js";import{J as i,Z as a,q as o,tt as s}from"./report-metric-CG4McNXT.js";import{t as c,x as l}from"./src-CTZFYwrN.js";import{Gt as u,t as d}from"./src-Boe-c6TP.js";import{t as f}from"./new-vs-returning-customer-widget-D4J-r7Xv.js";import{C as p,D as m,E as h,S as g,T as _,b as v,t as y,w as b,x}from"./src-D-0P4cBO.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(s,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(f,{})})}var C,w=e((()=>{y(),C=t()})),T,E=e((()=>{r(),T={icon:n}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/new-vs-returning-customer`,O=`New vs returning customer`,k=`Unique customer counts broken down by new vs returning customers over the selected time period.`,A={content:`Unique customer counts broken down by new vs returning customers over the selected time period.`},j=`store`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=U){return{reportParams:u(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<NewVsReturningCustomerRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return(0,V.jsx)(S,{attributes:F(e,t)})}function z(e){return(0,V.jsx)(S,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return(0,V.jsx)(_,{...n,widgetType:g(N,T),renderModule:H,renderComponent:S,attributes:F(e,t)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{d(),c(),h(),p(),v(),o(),w(),E(),P(),V=t(),i(),H=`storybook/new-vs-returning-customer`,U=`last-30-days`,W=l,G={title:`Packages/Premium Analytics/Widgets/NewVsReturningCustomer`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays new and returning customer counts for the selected period.`}}}},K={render:R,args:{preset:U,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},q={render:R,args:{preset:U,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(a(`customers/by-date`,`loading`),()=>a(`customers/by-date`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(a(`customers/by-date`,`error`),()=>a(`customers/by-date`,null))},X={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(a(`customers/by-date`,`empty`),()=>a(`customers/by-date`,null))},Z={render:e=>(0,V.jsx)(B,{...e}),args:{...b,preset:U,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/new-vs-returning-customer"
	renderComponent={ NewVsReturningCustomerRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderNewVsReturningCustomer,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<NewVsReturningCustomerStoryControls>;
        }) => getNewVsReturningCustomerSource(storyContext.args)
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderNewVsReturningCustomer,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<NewVsReturningCustomerStoryControls>;
        }) => getNewVsReturningCustomerSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period customer deltas.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderNewVsReturningCustomerOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('customers/by-date', 'loading');
    return () => setReportMockState('customers/by-date', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the customers-by-date report is in flight, so the widget shows
its loading state. The mock is forced to never resolve for the duration of
this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderNewVsReturningCustomerOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('customers/by-date', 'error');
    return () => setReportMockState('customers/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action
(which re-runs the query — still mocked as failing while this story is
active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderNewVsReturningCustomerOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('customers/by-date', 'empty');
    return () => setReportMockState('customers/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no customers: the widget shows its empty state ("No customer
data in this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <NewVsReturningCustomerDashboardStory {...args} />,
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
\\trenderModule="storybook/new-vs-returning-customer"
\\trenderComponent={ NewVsReturningCustomerRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};