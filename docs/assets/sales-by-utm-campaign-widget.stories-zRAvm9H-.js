import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{c as o,t as s}from"./src-DN9VFS2M.js";import{dt as c,er as l}from"./chart-tooltip-Dp0VEc09.js";import{F as u,M as d,N as f,z as p}from"./report-metric-4C1kNKUT.js";import{C as m,S as h,T as g,b as _,f as v,t as y,w as b,x}from"./src-B0pFHV8V.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(v,{view:`campaign`})})}var C,w=e((()=>{y(),C=r()})),T,E=e((()=>{n(),a(),T={name:`jpa/sales-by-utm-campaign`,title:t(`Sales by UTM campaign`,`jetpack-premium-analytics`),help:{content:t(`See which marketing campaigns are driving sales in your store.`,`jetpack-premium-analytics`)},icon:i}}));function D(e=!1,t=F){return{reportParams:l(e,t)}}function O({withComparison:e,preset:t}){let n=!!e,r=t??F;return!n&&r===F?`getDefaultQueryParams()`:n&&r===F?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function k(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<SalesByUtmCampaignRender
\tattributes={ {
\t\treportParams: ${O(e)},
\t} }
/>`}function A({withComparison:e,preset:t}){return(0,N.jsx)(S,{attributes:D(e,t)})}function j(e){return(0,N.jsx)(S,{attributes:D(!1,e)})}function M({withComparison:e,preset:t,...n}){return(0,N.jsx)(m,{...n,widgetType:T,renderModule:P,renderComponent:S,attributes:D(e,t)})}var N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{c(),s(),d(),b(),_(),w(),E(),N=r(),f(),P=`storybook/sales-by-utm-campaign`,F=`last-30-days`,I=o,L={title:`Packages/Premium Analytics/Widgets/SalesByUtmCampaign`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM campaigns by order revenue for the selected period.`}}}},R={render:A,args:{preset:F,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},z={render:A,args:{preset:F,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},B={render:()=>j(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`order-attribution/campaign/summary`,`loading`),()=>u(`order-attribution/campaign/summary`,null))},V={render:()=>j(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`order-attribution/campaign/summary`,`error`),()=>u(`order-attribution/campaign/summary`,null))},H={render:()=>j(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`order-attribution/campaign/summary`,`empty`),()=>u(`order-attribution/campaign/summary`,null))},U={render:e=>(0,N.jsx)(M,{...e}),args:{...h,preset:F,withComparison:!0},argTypes:{...g,preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-campaign"
	renderComponent={ SalesByUtmCampaignRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmCampaign,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByUtmCampaignStoryControls>;
        }) => getSalesByUtmCampaignSource(storyContext.args)
      }
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmCampaign,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByUtmCampaignStoryControls>;
        }) => getSalesByUtmCampaignSource(storyContext.args)
      }
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and sparkline data.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmCampaignOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/campaign/summary', 'loading');
    return () => setReportMockState('order-attribution/campaign/summary', null);
  }
}`,...B.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmCampaignOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/campaign/summary', 'error');
    return () => setReportMockState('order-attribution/campaign/summary', null);
  }
}`,...V.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmCampaignOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/campaign/summary', 'empty');
    return () => setReportMockState('order-attribution/campaign/summary', null);
  }
}`,...H.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No attribution data
in this period.").`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <SalesByUtmCampaignDashboardStory {...args} />,
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
\\trenderModule="storybook/sales-by-utm-campaign"
\\trenderComponent={ SalesByUtmCampaignRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...U.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...U.parameters?.docs?.description}}},W=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{R as Default,H as Empty,V as Error,B as Loading,U as WidgetDashboardWithWidget,z as WithComparison,W as __namedExportsOrder,L as default};