import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ot as n,t as r}from"./src-rrY7vAoW.js";import{Mn as i,t as a}from"./src-CTpdfVFW.js";import{_ as o}from"./charts-provider-BA6IhbKQ.js";import{n as s,r as c,s as l}from"./register-report-mocks-CW1VdKfU.js";import{o as u,t as d}from"./src-C8uiRrOG.js";import{a as f,g as p,h as m,i as h,m as g,n as _,p as v,r as y}from"./with-widget-canvas-uks1OQ01.js";function b({attributes:e={},setError:t}){return(0,x.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,x.jsx)(u,{view:`channel`})})}var x,S=e((()=>{d(),x=t()})),C,w=e((()=>{C={}})),T,E,D,O,k,A,j,M,N=e((()=>{T=`jpa/sales-by-utm-channel`,E=`jpa/chart-bar`,D=`Sales by UTM channel`,O=`Shows the top UTM channels by order revenue over the selected time period.`,k={content:`See which marketing channels are driving sales in your store.`},A=`store`,j=`framed`,M={name:T,icon:E,title:D,description:O,help:k,category:A,presentation:j}}));function P(e=!1,t=B){return{reportParams:i(e,t)}}function F({withComparison:e,preset:t}){return(0,R.jsx)(b,{attributes:P(e,t)})}function I(e){return(0,R.jsx)(b,{attributes:P(!1,e)})}function L({withComparison:e,preset:t,...n}){return(0,R.jsx)(g,{...n,widgetType:h(M,C),renderModule:z,renderComponent:b,attributes:P(e,t)})}var R,z,B,V,H,U,W,G,K,q,J,Y;e((()=>{a(),r(),m(),f(),_(),s(),S(),w(),N(),R=t(),c(),z=`storybook/sales-by-utm-channel`,B=`last-30-days`,V=n,H={title:`Packages/Premium Analytics/Widgets/SalesByUtmChannel`,component:b,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:V,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM channels by order revenue for the selected period.`}}}},U={render:F,args:{preset:B,withComparison:!1},decorators:[y]},W={render:F,args:{preset:B,withComparison:!0},decorators:[y]},G={render:()=>I(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`order-attribution/channel/summary`,`loading`),()=>l(`order-attribution/channel/summary`,null))},K={render:()=>I(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`order-attribution/channel/summary`,`error`),()=>l(`order-attribution/channel/summary`,null))},q={render:()=>I(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`order-attribution/channel/summary`,`empty`),()=>l(`order-attribution/channel/summary`,null))},J={render:e=>(0,R.jsx)(L,{...e}),args:{...v,preset:B,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:V,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-channel"
	renderComponent={ SalesByUtmChannelRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...U.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period UTM channel changes.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmChannelOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/channel/summary', 'loading');
    return () => setReportMockState('order-attribution/channel/summary', null);
  }
}`,...G.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmChannelOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/channel/summary', 'error');
    return () => setReportMockState('order-attribution/channel/summary', null);
  }
}`,...K.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByUtmChannelOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/channel/summary', 'empty');
    return () => setReportMockState('order-attribution/channel/summary', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No attribution data
in this period.").`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...J.parameters?.docs?.description}}},Y=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{U as Default,q as Empty,K as Error,G as Loading,J as WidgetDashboardWithWidget,W as WithComparison,Y as __namedExportsOrder,H as default};