import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{cl as n,t as r}from"./build-module-CR6EsQjA.js";import{g as i}from"./hooks-CHniCUra.js";import{S as a,t as o}from"./src-CgMmIcVH.js";import{Zt as s,t as c}from"./src-DPMzKwgm.js";import{G as l,K as u,Y as d}from"./report-metric-CdnGUq3r.js";import{t as f}from"./sales-by-device-widget-1XVTpqLJ.js";import{C as p,D as m,E as h,S as g,T as _,b as v,t as y,w as b,x}from"./src-n-09rV5E.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(i,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(f,{})})}var C,w=e((()=>{y(),C=t()})),T,E=e((()=>{r(),T={icon:n}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/sales-by-device`,O=`Sales by device`,k=`Shows the sales breakdown by device type over the selected time period.`,A={content:`See which devices your customers are using to make purchases in your store.`},j=`store`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=U){return{reportParams:s(e,t)}}function I({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<SalesByDeviceRender
\tattributes={ {
\t\treportParams: ${I(e)},
\t} }
/>`}function R({withComparison:e,preset:t}){return(0,V.jsx)(S,{attributes:F(e,t)})}function z(e){return(0,V.jsx)(S,{attributes:F(!1,e)})}function B({withComparison:e,preset:t,...n}){return(0,V.jsx)(_,{...n,widgetType:g(N,T),renderModule:H,renderComponent:S,attributes:F(e,t)})}var V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{c(),o(),l(),h(),p(),v(),w(),E(),P(),V=t(),u(),H=`storybook/sales-by-device`,U=`last-30-days`,W=a,G={title:`Packages/Premium Analytics/Widgets/SalesByDevice`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Sales by device" widget. Fetches the order-attribution report and displays the sales breakdown by device type for the selected period.`}}}},K={render:R,args:{preset:U,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},q={render:R,args:{preset:U,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`order-attribution/device/summary`,`loading`),()=>d(`order-attribution/device/summary`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`order-attribution/device/summary`,`error`),()=>d(`order-attribution/device/summary`,null))},X={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`order-attribution/device/summary`,`empty`),()=>d(`order-attribution/device/summary`,null))},Z={render:e=>(0,V.jsx)(B,{...e}),args:{...b,preset:U,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-device"
	renderComponent={ SalesByDeviceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderSalesByDevice,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByDeviceStoryControls>;
        }) => getSalesByDeviceSource(storyContext.args)
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSalesByDevice,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByDeviceStoryControls>;
        }) => getSalesByDeviceSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period sales breakdown.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByDeviceOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/device/summary', 'loading');
    return () => setReportMockState('order-attribution/device/summary', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the order-attribution report is in flight, so the widget shows its
loading state. The mock is forced to never resolve for the duration of this
story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByDeviceOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/device/summary', 'error');
    return () => setReportMockState('order-attribution/device/summary', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The order-attribution report failed: the widget shows its error state with a
Retry action (which re-runs the query — still mocked as failing while this
story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByDeviceOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('order-attribution/device/summary', 'empty');
    return () => setReportMockState('order-attribution/device/summary', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no order-attribution rows: the widget shows its empty state (the
neutral device glyph and "No sales data in this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <SalesByDeviceDashboardStory {...args} />,
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
\\trenderModule="storybook/sales-by-device"
\\trenderComponent={ SalesByDeviceRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as WidgetDashboardWithWidget,q as WithComparison,Q as __namedExportsOrder,G as default};