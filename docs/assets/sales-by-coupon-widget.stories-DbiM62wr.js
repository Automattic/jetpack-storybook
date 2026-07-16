import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{al as i,n as a}from"./build-module-C6Ow06jV.js";import{c as o,t as s}from"./src-AIpdnvxP.js";import{Yn as c,ut as l}from"./chart-tooltip-DqNxd0Qa.js";import{C as u,S as d,T as f,k as p}from"./report-metric-mJByfr0v.js";import{t as m}from"./sales-by-coupon-widget-Bfw8_CyC.js";import{S as h,b as g,t as _,x as v,y}from"./src-DJ22BSsE.js";import{n as b,r as x}from"./with-widget-canvas-Dz43KNHY.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(m,{})})}var C,w=e((()=>{_(),C=r()})),T,E=e((()=>{n(),a(),T={name:`jpa/sales-by-coupon`,title:t(`Sales by coupon`,`jetpack-premium-analytics`),help:{content:t(`Revenue from physical product sales using coupons over the selected time period.`,`jetpack-premium-analytics`)},icon:i}}));function D(e=!1,t=N){return{reportParams:c(e,t)}}function O({withComparison:e,preset:t}){return(0,j.jsx)(S,{attributes:D(e,t),setError:F})}function k(e){return(0,j.jsx)(S,{attributes:D(!1,e),setError:F})}function A({withComparison:e,preset:t,...n}){return(0,j.jsx)(g,{...n,widgetType:T,renderModule:M,renderComponent:S,attributes:D(e,t)})}var j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{l(),s(),v(),b(),d(),w(),E(),j=r(),u(),M=`storybook/sales-by-coupon`,N=`last-30-days`,P=o,F=()=>void 0,I={title:`Packages/Premium Analytics/Widgets/SalesByCoupon`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top coupon codes by order revenue for the selected period.`}}}},L={render:O,args:{preset:N,withComparison:!1},decorators:[x]},R={render:O,args:{preset:N,withComparison:!0},decorators:[x]},z={render:()=>k(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`coupons/`,`loading`),()=>f(`coupons/`,null))},B={render:()=>k(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`coupons/`,`error`),()=>f(`coupons/`,null))},V={render:()=>k(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`coupons/`,`empty`),()=>f(`coupons/`,null))},H={render:e=>(0,j.jsx)(A,{...e}),args:{...y,preset:N,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:P,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: renderSalesByCoupon,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...L.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderSalesByCoupon,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...R.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period coupon revenue.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByCouponOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('coupons/', 'loading');
    return () => setReportMockState('coupons/', null);
  }
}`,...z.parameters?.docs?.source},description:{story:`First load: the coupons report is in flight, so the widget shows its loading
state. The mock is forced to never resolve for the duration of this story.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByCouponOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('coupons/', 'error');
    return () => setReportMockState('coupons/', null);
  }
}`,...B.parameters?.docs?.source},description:{story:`The coupons report failed: the widget shows its error state with a Retry
action (which re-runs the query — still mocked as failing while this story is
active).`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByCouponOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('coupons/', 'empty');
    return () => setReportMockState('coupons/', null);
  }
}`,...V.parameters?.docs?.source},description:{story:`Resolved with no coupon rows: the widget shows its empty state (the neutral
coupon glyph and "No coupon sales in this period.").`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <SalesByCouponDashboardStory {...args} />,
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
  }
}`,...H.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...H.parameters?.docs?.description}}},U=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{L as Default,V as Empty,B as Error,z as Loading,H as WidgetDashboardWithWidget,R as WithComparison,U as __namedExportsOrder,I as default};