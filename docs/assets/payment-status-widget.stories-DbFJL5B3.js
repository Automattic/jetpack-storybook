import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{ll as o,n as s}from"./build-module-CDRs4YxF.js";import{ln as c,t as l}from"./src-CkePhtYg.js";import{$ as u,G as d,K as f,Y as p,rt as ee}from"./report-metric-CPA6R3m5.js";import{c as m,t as h}from"./src-BKLK-O8P.js";import{t as g,x as te}from"./src-CTZFYwrN.js";import{Bt as ne,Gt as re,t as _}from"./src-Cmxy-Z5o.js";import{f as ie}from"./hooks-zOtleBXS.js";import{K as ae,yt as v}from"./chart-tooltip-DowEDPST.js";import{r as y,t as b}from"./donut-chart-skeleton-BaV3ez29.js";import{t as oe}from"./widget-state-CJmMNZzn.js";import{C as se,D as ce,E as le,S as ue,T as de,b as fe,t as x,w as S,x as C}from"./src-Oqkq0snT.js";var w,T,pe=t((()=>{w=`_container_18scw_1`,T={container:w}}));function me(){let{reportParams:e}=ee(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:l,refetch:u}=ne({...e,filters:v}),{chartData:d,total:f,comparisonTotal:p,legendData:h}=(0,E.useMemo)(()=>ae(t.data,n.data),[t.data,n.data]),g=ie(d);return(0,D.jsx)(oe,{isLoading:a,isFetching:o,isError:l&&!s,isEmpty:d.length===0,error:{description:r(`We couldn't load payment data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:m,description:r(`No order revenue in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(b,{}),children:(0,D.jsx)(c,{className:T.container,direction:`column`,align:`center`,justify:`center`,children:(0,D.jsx)(y,{chartData:d,value:f,styles:g,comparisonValue:i?p:null,legendData:h,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,withTooltips:!0})})})}var E,D,he=t((()=>{_(),h(),x(),i(),l(),E=e(n(),1),pe(),D=a()}));function O({attributes:e={}}){return(0,k.jsx)(u,{attributes:e,options:{from:`/`},children:(0,k.jsx)(me,{})})}var k,ge=t((()=>{x(),he(),k=a()})),A,_e=t((()=>{s(),A={icon:o}})),j,M,N,P,F,I,L,ve=t((()=>{j=`jpa/payment-status`,M=`Payment status`,N=`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,P={content:`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`},F=`store`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R(e=!1,t=W){return{reportParams:re(e,t)}}function ye({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function z(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${ye(e)},
\t} }
/>`}function B({withComparison:e,preset:t}){return(0,H.jsx)(O,{attributes:R(e,t)})}function V(e){return(0,H.jsx)(O,{attributes:R(!1,e)})}function be({withComparison:e,preset:t,...n}){return(0,H.jsx)(de,{...n,widgetType:ue(L,A),renderModule:U,renderComponent:O,attributes:R(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{_(),g(),le(),se(),fe(),d(),ge(),_e(),ve(),H=a(),f(),U=`storybook/payment-status`,W=`last-30-days`,G=te,K={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:O,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},q={render:B,args:{preset:W,withComparison:!1},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},J={render:B,args:{preset:W,withComparison:!0},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(p(`orders/by-date`,`loading`),()=>p(`orders/by-date`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(p(`orders/by-date`,`error`),()=>p(`orders/by-date`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(p(`orders/by-date`,`empty`),()=>p(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(be,{...e}),args:{...S,preset:W,withComparison:!0},argTypes:{...ce,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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