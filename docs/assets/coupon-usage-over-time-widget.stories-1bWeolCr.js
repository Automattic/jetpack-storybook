import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Nn as i,n as a}from"./build-module-DmVuor49.js";import{c as o,t as s}from"./src-DN9VFS2M.js";import{Xn as c,ut as l}from"./chart-tooltip-sEsOeFfr.js";import{C as u,S as d,T as f,k as p}from"./report-metric-CMHQ4oKU.js";import{C as m,S as h,T as g,b as _,i as v,t as y,w as b,x}from"./src-C6SuNyKS.js";function S({attributes:e={},setError:t}){return(0,C.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,C.jsx)(v,{})})}var C,w=e((()=>{y(),C=r()})),T,E=e((()=>{n(),a(),T={name:`jpa/coupon-usage-over-time`,title:t(`Coupon usage over time`,`jetpack-premium-analytics`),help:{content:t(`Track how effective your discounts and promotions have been over a set period of time.`,`jetpack-premium-analytics`)},icon:i}}));function D(e=!1,t=F){return{reportParams:c(e,t)}}function O({withComparison:e,preset:t}){let n=!!e,r=t??F;return!n&&r===F?`getDefaultQueryParams()`:n&&r===F?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function k(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<CouponUsageOverTimeRender
\tattributes={ {
\t\treportParams: ${O(e)},
\t} }
/>`}function A({withComparison:e,preset:t}){return(0,N.jsx)(S,{attributes:D(e,t)})}function j(e){return(0,N.jsx)(S,{attributes:D(!1,e)})}function M({withComparison:e,preset:t,...n}){return(0,N.jsx)(m,{...n,widgetType:T,renderModule:P,renderComponent:S,attributes:D(e,t)})}var N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{l(),s(),b(),_(),d(),w(),E(),N=r(),u(),P=`storybook/coupon-usage-over-time`,F=`last-30-days`,I=o,L={title:`Packages/Premium Analytics/Widgets/CouponUsageOverTime`,component:S,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Coupon usage over time" widget. Fetches coupon usage for the selected period and displays sales with and without coupons in a donut chart.`}}}},R={render:A,args:{preset:F,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},z={render:A,args:{preset:F,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>k(t.args)}}}},B={render:()=>j(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`coupons/by-date`,`loading`),()=>f(`coupons/by-date`,null))},V={render:()=>j(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`coupons/by-date`,`error`),()=>f(`coupons/by-date`,null))},H={render:()=>j(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(f(`coupons/by-date`,`empty`),()=>f(`coupons/by-date`,null))},U={render:e=>(0,N.jsx)(M,{...e}),args:{...h,preset:F,withComparison:!0},argTypes:{...g,preset:{control:`select`,options:I,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/coupon-usage-over-time"
	renderComponent={ CouponUsageOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderCouponUsageOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<CouponUsageOverTimeStoryControls>;
        }) => getCouponUsageOverTimeSource(storyContext.args)
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: renderCouponUsageOverTime,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<CouponUsageOverTimeStoryControls>;
        }) => getCouponUsageOverTimeSource(storyContext.args)
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => renderCouponUsageOverTimeOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('coupons/by-date', 'loading');
    return () => setReportMockState('coupons/by-date', null);
  }
}`,...B.parameters?.docs?.source},description:{story:`First load: the coupons-by-date report is in flight, so the widget shows its
loading state. The mock is forced to never resolve for the duration of this
story.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => renderCouponUsageOverTimeOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('coupons/by-date', 'error');
    return () => setReportMockState('coupons/by-date', null);
  }
}`,...V.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action
(which re-runs the query — still mocked as failing while this story is
active).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderCouponUsageOverTimeOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('coupons/by-date', 'empty');
    return () => setReportMockState('coupons/by-date', null);
  }
}`,...H.parameters?.docs?.source},description:{story:`Resolved with no coupon usage: the widget shows its empty state ("No coupon
usage in this period.").`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <CouponUsageOverTimeDashboardStory {...args} />,
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
\\trenderModule="storybook/coupon-usage-over-time"
\\trenderComponent={ CouponUsageOverTimeRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{R as Default,H as Empty,V as Error,B as Loading,U as WidgetDashboardWithWidget,z as WithComparison,W as __namedExportsOrder,L as default};