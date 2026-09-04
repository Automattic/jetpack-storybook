import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{fl as o,t as s}from"./build-module-zwSmKorH.js";import{mt as c}from"./build-module-Cb539diK.js";import{Ut as l,b as ee,f as te,g as u,gt as ne}from"./hooks-DNZMHnxQ.js";import{c as re,t as d}from"./src-DFNM1k7F.js";import{t as f}from"./src-DyecqeLL.js";import{rt as p,t as m}from"./src-B5nbkiw8.js";import{Yt as ie,en as h,i as g}from"./date-filters-panel-Cw3UGjzx.js";import{r as ae,t as oe}from"./donut-chart-skeleton-CfRb0V0J.js";import{G as se,K as _,Y as v}from"./report-metric-De-Z_6bt.js";import{t as ce}from"./widget-state-BzKu7cft.js";import{C as le,D as ue,E as de,S as fe,T as pe,b as y,t as b,w as x,x as S}from"./src-CtAUGKfD.js";var C,w,me=t((()=>{C=`_container_18scw_1`,w={container:C}}));function he(){let{reportParams:e}=ee(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:u,refetch:d}=ie({...e,filters:l}),{chartData:f,total:p,comparisonTotal:m,legendData:h}=(0,T.useMemo)(()=>ne(t.data,n.data),[t.data,n.data]),g=te(f);return(0,E.jsx)(ce,{isLoading:a,isFetching:o,isError:u&&!s,isEmpty:f.length===0,error:{description:r(`We couldn't load payment data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:re,description:r(`No order revenue in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(oe,{}),children:(0,E.jsx)(c,{className:w.container,direction:`column`,align:`center`,justify:`center`,children:(0,E.jsx)(ae,{chartData:f,value:p,styles:g,comparisonValue:i?m:null,legendData:h,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,withTooltips:!0})})})}var T,E,ge=t((()=>{g(),d(),b(),i(),f(),T=e(n(),1),me(),E=a()}));function D({attributes:e={}}){return(0,O.jsx)(u,{attributes:e,options:{from:`/`},children:(0,O.jsx)(he,{})})}var O,_e=t((()=>{b(),ge(),O=a()})),k,A=t((()=>{s(),k={icon:o}})),j,M,N,P,F,I,L,ve=t((()=>{j=`jpa/payment-status`,M=`Payment status`,N=`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,P={content:`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`},F=`store`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R(e=!1,t=W){return{reportParams:h(e,t)}}function ye({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function z(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${ye(e)},
\t} }
/>`}function B({withComparison:e,preset:t}){return(0,H.jsx)(D,{attributes:R(e,t)})}function V(e){return(0,H.jsx)(D,{attributes:R(!1,e)})}function be({withComparison:e,preset:t,...n}){return(0,H.jsx)(pe,{...n,widgetType:fe(L,k),renderModule:U,renderComponent:D,attributes:R(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),m(),de(),le(),y(),se(),_e(),A(),ve(),H=a(),_(),U=`storybook/payment-status`,W=`last-30-days`,G=p,K={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:D,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},q={render:B,args:{preset:W,withComparison:!1},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},J={render:B,args:{preset:W,withComparison:!0},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`orders/by-date`,`loading`),()=>v(`orders/by-date`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`orders/by-date`,`error`),()=>v(`orders/by-date`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`orders/by-date`,`empty`),()=>v(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(be,{...e}),args:{...x,preset:W,withComparison:!0},argTypes:{...ue,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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