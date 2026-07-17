import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{u as ee}from"./hooks-Bsiig_bf.js";import{R as te,t as c}from"./build-module-Co71Jhbm.js";import{o as l,t as u}from"./src-B3le4dug.js";import{c as d,t as f}from"./src-DN9VFS2M.js";import{$n as p,J as m,Jn as h,T as ne,ut as g}from"./chart-tooltip-C4NUtjXe.js";import{t as re}from"./donut-chart-CUfKtB5_.js";import{D as _,F as ie,T as ae,j as oe,w as se}from"./report-metric-DerWADBf.js";import{t as ce}from"./widget-state-B76seV2w.js";import{C as v,S as y,T as le,b,t as x,w as S,x as C}from"./src-0WK5HJj0.js";var w,T,E=t((()=>{w=`_container_18scw_1`,T={container:w}}));function D(){let{reportParams:e}=ie(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:u}=h({...e,filters:m}),{chartData:d,total:f,comparisonTotal:p,legendData:g}=(0,O.useMemo)(()=>ne(t.data,n.data),[t.data,n.data]),_=ee(d);return(0,k.jsx)(ce,{isLoading:a&&!s,isFetching:o,isError:c&&!s,isEmpty:d.length===0,error:{description:r(`We couldn't load payment data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:l,description:r(`No order revenue in this period.`,`jetpack-premium-analytics`)},children:(0,k.jsx)(te,{className:T.container,direction:`column`,align:`center`,justify:`center`,children:(0,k.jsx)(re,{chartData:d,value:f,styles:_,comparisonValue:i?p:null,legendData:g,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,withTooltips:!0})})})}var O,k,A=t((()=>{g(),u(),x(),i(),c(),O=e(n(),1),E(),k=a()}));function j({attributes:e={}}){return(0,M.jsx)(oe,{attributes:e,options:{from:`/`},children:(0,M.jsx)(D,{})})}var M,N=t((()=>{x(),A(),M=a()})),P,F=t((()=>{i(),s(),P={name:`jpa/payment-status`,title:r(`Payment status`,`jetpack-premium-analytics`),help:{content:r(`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,`jetpack-premium-analytics`)},icon:o}}));function I(e=!1,t=W){return{reportParams:p(e,t)}}function L({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function R(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${L(e)},
\t} }
/>`}function z({withComparison:e,preset:t}){return(0,H.jsx)(j,{attributes:I(e,t)})}function B(e){return(0,H.jsx)(j,{attributes:I(!1,e)})}function V({withComparison:e,preset:t,...n}){return(0,H.jsx)(v,{...n,widgetType:P,renderModule:U,renderComponent:j,attributes:I(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),f(),S(),b(),se(),N(),F(),H=a(),ae(),U=`storybook/payment-status`,W=`last-30-days`,G=d,K={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:j,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},q={render:z,args:{preset:W,withComparison:!1},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},J={render:z,args:{preset:W,withComparison:!0},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`orders/by-date`,`loading`),()=>_(`orders/by-date`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`orders/by-date`,`error`),()=>_(`orders/by-date`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`orders/by-date`,`empty`),()=>_(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...y,preset:W,withComparison:!0},argTypes:{...le,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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