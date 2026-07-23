import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{Nn as n,n as r}from"./build-module-DmVuor49.js";import{c as i,t as a}from"./src-DN9VFS2M.js";import{cr as o,yt as s}from"./chart-tooltip-DAiqbRTM.js";import{F as c,L as l,P as u,V as d}from"./report-metric-wuZqSGNR.js";import{C as f,D as p,E as m,S as h,T as g,b as _,t as v,w as y,x as b}from"./src-DfLVLj1U.js";import{t as x}from"./sales-by-coupon-widget-DVd8BQZK.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(d,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(x,{})})}var C,w=e((()=>{v(),C=t()})),T,E=e((()=>{r(),T={icon:n}})),D,O,k,A,j,M,N,P=e((()=>{D=`jpa/sales-by-coupon`,O=`Sales by coupon`,k=`Shows the top coupon codes by order revenue over the selected time period.`,A={content:`Revenue from physical product sales using coupons over the selected time period.`},j=`store`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function F(e=!1,t=V){return{reportParams:o(e,t)}}function I({withComparison:e,preset:t}){return(0,z.jsx)(S,{attributes:F(e,t),setError:U})}function L(e){return(0,z.jsx)(S,{attributes:F(!1,e),setError:U})}function R({withComparison:e,preset:t,...n}){return(0,z.jsx)(g,{...n,widgetType:h(N,T),renderModule:B,renderComponent:S,attributes:F(e,t)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z;e((()=>{s(),a(),m(),f(),_(),u(),w(),E(),P(),z=t(),c(),B=`storybook/sales-by-coupon`,V=`last-30-days`,H=i,U=()=>void 0,W={title:`Packages/Premium Analytics/Widgets/SalesByCoupon`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:H,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top coupon codes by order revenue for the selected period.`}}}},G={render:I,args:{preset:V,withComparison:!1},decorators:[b]},K={render:I,args:{preset:V,withComparison:!0},decorators:[b]},q={render:()=>L(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`coupons/`,`loading`),()=>l(`coupons/`,null))},J={render:()=>L(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`coupons/`,`error`),()=>l(`coupons/`,null))},Y={render:()=>L(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`coupons/`,`empty`),()=>l(`coupons/`,null))},X={render:e=>(0,z.jsx)(R,{...e}),args:{...y,preset:V,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:H,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderSalesByCoupon,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderSalesByCoupon,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period coupon revenue.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByCouponOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('coupons/', 'loading');
    return () => setReportMockState('coupons/', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`First load: the coupons report is in flight, so the widget shows its loading
state. The mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByCouponOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('coupons/', 'error');
    return () => setReportMockState('coupons/', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`The coupons report failed: the widget shows its error state with a Retry
action (which re-runs the query — still mocked as failing while this story is
active).`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSalesByCouponOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('coupons/', 'empty');
    return () => setReportMockState('coupons/', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`Resolved with no coupon rows: the widget shows its empty state (the neutral
coupon glyph and "No coupon sales in this period.").`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...X.parameters?.docs?.description}}},Z=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{G as Default,Y as Empty,J as Error,q as Loading,X as WidgetDashboardWithWidget,K as WithComparison,Z as __namedExportsOrder,W as default};