import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{u as ee}from"./hooks-CnnHZnMK.js";import{W as te,t as c}from"./build-module-CmLNfGpc.js";import{o as l,t as u}from"./src-B3le4dug.js";import{c as d,t as f}from"./src-DN9VFS2M.js";import{Gn as p,J as m,T as h,Xn as g,ut as _}from"./chart-tooltip-sEsOeFfr.js";import{t as ne}from"./donut-chart-B_hAV_E3.js";import{C as v,N as re,S as ie,T as y,k as ae}from"./report-metric-CMHQ4oKU.js";import{t as oe}from"./widget-state-BKSbgDEe.js";import{C as b,S as x,T as se,b as ce,t as S,w as C,x as w}from"./src-C6SuNyKS.js";var T,E,D=t((()=>{T=`_container_18scw_1`,E={container:T}}));function O(){let{reportParams:e}=re(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:u}=p({...e,filters:m}),{chartData:d,total:f,comparisonTotal:g,legendData:_}=(0,k.useMemo)(()=>h(t.data,n.data),[t.data,n.data]),v=ee(d);return(0,A.jsx)(oe,{isLoading:a&&!s,isFetching:o,isError:c&&!s,isEmpty:d.length===0,error:{description:r(`We couldn't load payment data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:l,description:r(`No order revenue in this period.`,`jetpack-premium-analytics`)},children:(0,A.jsx)(te,{className:E.container,direction:`column`,align:`center`,justify:`center`,children:(0,A.jsx)(ne,{chartData:d,value:f,styles:v,comparisonValue:i?g:null,legendData:_,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,withTooltips:!0})})})}var k,A,le=t((()=>{_(),u(),S(),i(),c(),k=e(n(),1),D(),A=a()}));function j({attributes:e={}}){return(0,M.jsx)(ae,{attributes:e,options:{from:`/`},children:(0,M.jsx)(O,{})})}var M,N=t((()=>{S(),le(),M=a()})),P,F=t((()=>{i(),s(),P={name:`jpa/payment-status`,title:r(`Payment status`,`jetpack-premium-analytics`),help:{content:r(`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,`jetpack-premium-analytics`)},icon:o}}));function I(e=!1,t=W){return{reportParams:g(e,t)}}function L({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function R(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${L(e)},
\t} }
/>`}function z({withComparison:e,preset:t}){return(0,H.jsx)(j,{attributes:I(e,t)})}function B(e){return(0,H.jsx)(j,{attributes:I(!1,e)})}function V({withComparison:e,preset:t,...n}){return(0,H.jsx)(b,{...n,widgetType:P,renderModule:U,renderComponent:j,attributes:I(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{_(),f(),C(),ce(),ie(),N(),F(),H=a(),v(),U=`storybook/payment-status`,W=`last-30-days`,G=d,K={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:j,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},q={render:z,args:{preset:W,withComparison:!1},decorators:[w],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},J={render:z,args:{preset:W,withComparison:!0},decorators:[w],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(y(`orders/by-date`,`loading`),()=>y(`orders/by-date`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(y(`orders/by-date`,`error`),()=>y(`orders/by-date`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(y(`orders/by-date`,`empty`),()=>y(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...x,preset:W,withComparison:!0},argTypes:{...se,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/payment-status"
	renderComponent={ PaymentStatusRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPaymentStatus,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<PaymentStatusStoryControls>;
        }) => getPaymentStatusSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderPaymentStatus,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<PaymentStatusStoryControls>;
        }) => getPaymentStatusSource(storyContext.args)
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing paid and unpaid order revenue for the
selected period and previous period.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderPaymentStatusOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'loading');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderPaymentStatusOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'error');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderPaymentStatusOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('orders/by-date', 'empty');
    return () => setReportMockState('orders/by-date', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no order revenue: the widget shows its empty state (the neutral
payment glyph and "No order revenue in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PaymentStatusDashboardStory {...args} />,
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
\\trenderModule="storybook/payment-status"
\\trenderComponent={ PaymentStatusRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};