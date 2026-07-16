import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{al as i,n as a}from"./build-module-C6Ow06jV.js";import{c as o,t as s}from"./src-AIpdnvxP.js";import{Yn as c,ut as l}from"./chart-tooltip-nADfm_Mf.js";import{C as u,S as d,T as f,k as p}from"./report-metric-wrdm6Ope.js";import{S as m,b as h,f as g,t as _,x as v,y}from"./src-C53InzDV.js";import{n as b,r as x}from"./with-widget-canvas-Dz43KNHY.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(g,{view:`channel`})})}var C,w=e((()=>{_(),C=r()})),T,E=e((()=>{n(),a(),T={name:`jpa/sales-by-utm-channel`,title:t(`Sales by UTM channel`,`jetpack-premium-analytics`),help:{content:t(`See which marketing channels are driving sales in your store.`,`jetpack-premium-analytics`)},icon:i}}));function D(e=!1,t=N){return{reportParams:c(e,t)}}function O({withComparison:e,preset:t}){return(0,j.jsx)(S,{attributes:D(e,t)})}function k(e){return(0,j.jsx)(S,{attributes:D(!1,e)})}function A({withComparison:e,preset:t,...n}){return(0,j.jsx)(h,{...n,widgetType:T,renderModule:M,renderComponent:S,attributes:D(e,t)})}var j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{l(),s(),v(),b(),d(),w(),E(),j=r(),u(),M=`storybook/sales-by-utm-channel`,N=`last-30-days`,P=o,F={title:`Packages/Premium Analytics/Widgets/SalesByUtmChannel`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM channels by order revenue for the selected period.`}}}},I={render:O,args:{preset:N,withComparison:!1},decorators:[x]},L={render:O,args:{preset:N,withComparison:!0},decorators:[x]},R={render:()=>k(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`order-attribution/channel/summary`,`loading`),()=>f(`order-attribution/channel/summary`,null))},z={render:()=>k(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`order-attribution/channel/summary`,`error`),()=>f(`order-attribution/channel/summary`,null))},B={render:()=>k(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`order-attribution/channel/summary`,`empty`),()=>f(`order-attribution/channel/summary`,null))},V={render:e=>(0,j.jsx)(A,{...e}),args:{...y,preset:N,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-channel"
	renderComponent={ SalesByUtmChannelRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...I.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...L.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period UTM channel changes.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmChannelOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/channel/summary', 'loading');
    return () => setReportMockState('order-attribution/channel/summary', null);
  }
}`,...R.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmChannelOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/channel/summary', 'error');
    return () => setReportMockState('order-attribution/channel/summary', null);
  }
}`,...z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmChannelOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/channel/summary', 'empty');
    return () => setReportMockState('order-attribution/channel/summary', null);
  }
}`,...B.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No attribution data
in this period.").`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <SalesByUtmChannelDashboardStory {...args} />,
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
\\trenderModule="storybook/sales-by-utm-channel"
\\trenderComponent={ SalesByUtmChannelRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...V.parameters?.docs?.description}}},H=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{I as Default,B as Empty,z as Error,R as Loading,V as WidgetDashboardWithWidget,L as WithComparison,H as __namedExportsOrder,F as default};