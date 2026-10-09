import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ot as n,t as r}from"./src-rrY7vAoW.js";import{Mn as i,t as a}from"./src-DQYt8jCH.js";import{_ as o}from"./charts-provider-THvfZibh.js";import{n as s,r as c,s as l}from"./register-report-mocks-CKRy3LZg.js";import{o as u,t as d}from"./src-C7ZjB0TJ.js";import{a as f,g as p,h as m,i as h,m as g,n as _,p as v,r as y}from"./with-widget-canvas-Cr9xwJOJ.js";function b({attributes:e={},setError:t}){return(0,x.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,x.jsx)(u,{view:`campaign`})})}var x,S=e((()=>{d(),x=t()})),C,w=e((()=>{C={}})),T,E,D,O,k,A,j,M,N=e((()=>{T=`jpa/sales-by-utm-campaign`,E=`jpa/chart-bar`,D=`Sales by UTM campaign`,O=`Shows the top UTM campaigns by order revenue over the selected time period.`,k={content:`See which marketing campaigns are driving sales in your store.`},A=`store`,j=`framed`,M={name:T,icon:E,title:D,description:O,help:k,category:A,presentation:j}}));function P(e=!1,t=H){return{reportParams:i(e,t)}}function F({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function I(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<SalesByUtmCampaignRender
\tattributes={ {
\t\treportParams: ${F(e)},
\t} }
/>`}function L({withComparison:e,preset:t}){return(0,B.jsx)(b,{attributes:P(e,t)})}function R(e){return(0,B.jsx)(b,{attributes:P(!1,e)})}function z({withComparison:e,preset:t,...n}){return(0,B.jsx)(g,{...n,widgetType:h(M,C),renderModule:V,renderComponent:b,attributes:P(e,t)})}var B,V,H,U,W,G,K,q,J,Y,X,Z;e((()=>{a(),r(),s(),m(),f(),_(),S(),w(),N(),B=t(),c(),V=`storybook/sales-by-utm-campaign`,H=`last-30-days`,U=n,W={title:`Packages/Premium Analytics/Widgets/SalesByUtmCampaign`,component:b,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM campaigns by order revenue for the selected period.`}}}},G={render:L,args:{preset:H,withComparison:!1},decorators:[y],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},K={render:L,args:{preset:H,withComparison:!0},decorators:[y],parameters:{docs:{source:{transform:(e,t)=>I(t.args)}}}},q={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`order-attribution/campaign/summary`,`loading`),()=>l(`order-attribution/campaign/summary`,null))},J={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`order-attribution/campaign/summary`,`error`),()=>l(`order-attribution/campaign/summary`,null))},Y={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`order-attribution/campaign/summary`,`empty`),()=>l(`order-attribution/campaign/summary`,null))},X={render:e=>(0,B.jsx)(z,{...e}),args:{...v,preset:H,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-campaign"
	renderComponent={ SalesByUtmCampaignRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and sparkline data.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmCampaignOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/campaign/summary', 'loading');
    return () => setReportMockState('order-attribution/campaign/summary', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmCampaignOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/campaign/summary', 'error');
    return () => setReportMockState('order-attribution/campaign/summary', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmCampaignOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/campaign/summary', 'empty');
    return () => setReportMockState('order-attribution/campaign/summary', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No attribution data
in this period.").`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...X.parameters?.docs?.description}}},Z=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{G as Default,Y as Empty,J as Error,q as Loading,X as WidgetDashboardWithWidget,K as WithComparison,Z as __namedExportsOrder,W as default};