import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ll as n,n as r}from"./build-module-CDRs4YxF.js";import{g as i}from"./hooks-CmscThhc.js";import{C as a,t as o}from"./src-B7lQjZr3.js";import{qt as s,t as c}from"./src-B_6QRTjb.js";import{G as l,K as u,Y as d}from"./report-metric-BRA0n6TO.js";import{C as f,D as p,E as m,S as h,T as g,b as _,f as v,t as y,w as b,x}from"./src-CGXIFwHy.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(i,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(v,{view:`source`})})}var C,w=e((()=>{y(),C=t()})),T,E=e((()=>{r(),T={icon:n}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/sales-by-utm-source`,O=`Sales by UTM source`,k=`Shows the top UTM sources by order revenue over the selected time period.`,A={content:`See which referral sources are driving sales in your store.`},j=`store`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=U){return{reportParams:s(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<SalesByUtmSourceRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return(0,V.jsx)(S,{attributes:F(e,t)})}function z(e){return(0,V.jsx)(S,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return(0,V.jsx)(g,{...n,widgetType:h(N,T),renderModule:H,renderComponent:S,attributes:F(e,t)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{c(),o(),m(),f(),_(),l(),w(),E(),P(),V=t(),u(),H=`storybook/sales-by-utm-source`,U=`last-30-days`,W=a,G={title:`Packages/Premium Analytics/Widgets/SalesByUtmSource`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM sources by order revenue for the selected period.`}}}},K={render:R,args:{preset:U,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},q={render:R,args:{preset:U,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`order-attribution/source/summary`,`loading`),()=>d(`order-attribution/source/summary`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`order-attribution/source/summary`,`error`),()=>d(`order-attribution/source/summary`,null))},X={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`order-attribution/source/summary`,`empty`),()=>d(`order-attribution/source/summary`,null))},Z={render:e=>(0,V.jsx)(B,{...e}),args:{...b,preset:U,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-source"
	renderComponent={ SalesByUtmSourceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmSource,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByUtmSourceStoryControls>;
        }) => getSalesByUtmSourceSource(storyContext.args)
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmSource,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByUtmSourceStoryControls>;
        }) => getSalesByUtmSourceSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and trend data.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmSourceOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/source/summary', 'loading');
    return () => setReportMockState('order-attribution/source/summary', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmSourceOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/source/summary', 'error');
    return () => setReportMockState('order-attribution/source/summary', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmSourceOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/source/summary', 'empty');
    return () => setReportMockState('order-attribution/source/summary', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No attribution data
in this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <SalesByUtmSourceDashboardStory {...args} />,
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
\\trenderModule="storybook/sales-by-utm-source"
\\trenderComponent={ SalesByUtmSourceRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};