import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,rl as a}from"./build-module-Bt8gOW8e.js";import{T as o,in as s,s as c}from"./hooks-xowkbuRy.js";import{l,t as u}from"./src-DsEGMN_I.js";import{n as d,t as f}from"./register-report-mocks-5xYGiEkf.js";import{S as p,b as m,i as h,t as g,x as _,y as v}from"./src-tKspr99X.js";function y({attributes:e={},setError:t}){return(0,b.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,b.jsx)(h,{})})}var b,x=e((()=>{g(),b=r()})),S,C=e((()=>{n(),i(),S={name:`jpa/coupon-usage-over-time`,title:t(`Coupon usage over time`,`jetpack-premium-analytics`),help:{content:t(`Track how effective your discounts and promotions have been over a set period of time.`,`jetpack-premium-analytics`)},icon:a}}));function w(e=!1,t=j){return{reportParams:s(e,t)}}function T({withComparison:e,preset:t}){let n=!!e,r=t??j;return!n&&r===j?`getDefaultQueryParams()`:n&&r===j?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function E(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<CouponUsageOverTimeRender
\tattributes={ {
\t\treportParams: ${T(e)},
\t} }
/>`}function D({withComparison:e,preset:t}){return(0,k.jsx)(y,{attributes:w(e,t)})}function O({withComparison:e,preset:t,...n}){return(0,k.jsx)(m,{...n,widgetType:S,renderModule:A,renderComponent:y,attributes:w(e,t)})}var k,A,j,M,N,P,F,I,L,R;e((()=>{o(),u(),_(),f(),x(),C(),k=r(),d(),A=`storybook/coupon-usage-over-time`,j=`last-30-days`,M=l,N=e=>(0,k.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,k.jsx)(e,{})}),P={title:`Packages/Premium Analytics/Widgets/CouponUsageOverTime`,component:y,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:M,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`The "Coupon usage over time" widget. Fetches coupon usage for the selected period and displays sales with and without coupons in a donut chart.`}}}},F={render:D,args:{preset:j,withComparison:!1},decorators:[N],parameters:{docs:{source:{transform:(e,t)=>E(t.args)}}}},I={render:D,args:{preset:j,withComparison:!0},decorators:[N],parameters:{docs:{source:{transform:(e,t)=>E(t.args)}}}},L={render:e=>(0,k.jsx)(O,{...e}),args:{...v,preset:j,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:M,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/coupon-usage-over-time"
	renderComponent={ CouponUsageOverTimeRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{F as Default,L as WidgetDashboardWithWidget,I as WithComparison,R as __namedExportsOrder,P as default};