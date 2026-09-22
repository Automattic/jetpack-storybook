import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{t as n,ul as r}from"./build-module-2iv4IIRq.js";import{m as i}from"./hooks-D9eY1Npf.js";import{rt as a,t as o}from"./src-CJGEmgc4.js";import{r as s,tn as c}from"./date-period-dropdown-CALLsuAv.js";import{c as l,i as u,r as d}from"./register-report-mocks-Ckv-v5iJ.js";import{f,t as p}from"./src-jOwZhRqr.js";import{a as m,c as h,i as g,l as _,n as v,o as y,r as b,s as x}from"./with-widget-canvas-CEiRs97e.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(i,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(f,{view:`channel`})})}var C,w=e((()=>{p(),C=t()})),T,E=e((()=>{n(),T={icon:r}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/sales-by-utm-channel`,O=`Sales by UTM channel`,k=`Shows the top UTM channels by order revenue over the selected time period.`,A={content:`See which marketing channels are driving sales in your store.`},j=`store`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=V){return{reportParams:c(e,t)}}function I({withComparison:e,preset:t}){return(0,z.jsx)(S,{attributes:F(e,t)})}function L(e){return(0,z.jsx)(S,{attributes:F(!1,e)})}function R({withComparison:e,preset:t,...n}){return(0,z.jsx)(x,{...n,widgetType:g(N,T),renderModule:B,renderComponent:S,attributes:F(e,t)})}var z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{s(),o(),h(),m(),v(),d(),w(),E(),P(),z=t(),u(),B=`storybook/sales-by-utm-channel`,V=`last-30-days`,H=a,U={title:`Packages/Premium Analytics/Widgets/SalesByUtmChannel`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:H,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM channels by order revenue for the selected period.`}}}},W={render:I,args:{preset:V,withComparison:!1},decorators:[b]},G={render:I,args:{preset:V,withComparison:!0},decorators:[b]},K={render:()=>L(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`order-attribution/channel/summary`,`loading`),()=>l(`order-attribution/channel/summary`,null))},q={render:()=>L(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`order-attribution/channel/summary`,`error`),()=>l(`order-attribution/channel/summary`,null))},J={render:()=>L(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`order-attribution/channel/summary`,`empty`),()=>l(`order-attribution/channel/summary`,null))},Y={render:e=>(0,z.jsx)(R,{...e}),args:{...y,preset:V,withComparison:!0},argTypes:{..._,preset:{control:`select`,options:H,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-channel"
	renderComponent={ SalesByUtmChannelRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period UTM channel changes.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmChannelOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/channel/summary', 'loading');
    return () => setReportMockState('order-attribution/channel/summary', null);
  }
}`,...K.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmChannelOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/channel/summary', 'error');
    return () => setReportMockState('order-attribution/channel/summary', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmChannelOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/channel/summary', 'empty');
    return () => setReportMockState('order-attribution/channel/summary', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No attribution data
in this period.").`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Y.parameters?.docs?.description}}},X=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{W as Default,J as Empty,q as Error,K as Loading,Y as WidgetDashboardWithWidget,G as WithComparison,X as __namedExportsOrder,U as default};