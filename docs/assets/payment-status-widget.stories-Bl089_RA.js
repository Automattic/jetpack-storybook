import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{ll as o,n as s}from"./build-module-CDRs4YxF.js";import{sn as ee,t as c}from"./src-Du1NNcpU.js";import{$ as l,G as u,K as d,Y as f,rt as te}from"./report-metric-BKwjdeE_.js";import{o as ne,t as p}from"./src-Cvyt29m2.js";import{t as m,x as re}from"./src-CtNOjlNY.js";import{f as ie}from"./hooks-DAGON-ot.js";import{Ft as h,J as g,Tr as ae,br as oe,xt as se}from"./chart-tooltip-BeT-x7uk.js";import{t as ce}from"./donut-chart-lTdc6CEp.js";import{t as le}from"./widget-state-CTEdNW-p.js";import{C as ue,D as de,E as fe,S as _,T as v,b as y,t as b,w as x,x as S}from"./src-Bq-o1bYq.js";var C,w,pe=t((()=>{C=`_container_18scw_1`,w={container:C}}));function me(){let{reportParams:e}=te(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:l}=oe({...e,filters:se}),{chartData:u,total:d,comparisonTotal:f,legendData:p}=(0,T.useMemo)(()=>g(t.data,n.data),[t.data,n.data]),m=ie(u);return(0,E.jsx)(le,{isLoading:a&&!s,isFetching:o,isError:c&&!s,isEmpty:u.length===0,error:{description:r(`We couldn't load payment data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:ne,description:r(`No order revenue in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,E.jsx)(ee,{className:w.container,direction:`column`,align:`center`,justify:`center`,children:(0,E.jsx)(ce,{chartData:u,value:d,styles:m,comparisonValue:i?f:null,legendData:p,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,withTooltips:!0})})})}var T,E,he=t((()=>{h(),p(),b(),i(),c(),T=e(n(),1),pe(),E=a()}));function D({attributes:e={}}){return(0,O.jsx)(l,{attributes:e,options:{from:`/`},children:(0,O.jsx)(me,{})})}var O,ge=t((()=>{b(),he(),O=a()})),k,_e=t((()=>{s(),k={icon:o}})),A,j,M,N,P,F,I,ve=t((()=>{A=`jpa/payment-status`,j=`Payment status`,M=`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,N={content:`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`},P=`store`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L(e=!1,t=W){return{reportParams:ae(e,t)}}function ye({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function R(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${ye(e)},
\t} }
/>`}function z({withComparison:e,preset:t}){return(0,H.jsx)(D,{attributes:L(e,t)})}function B(e){return(0,H.jsx)(D,{attributes:L(!1,e)})}function V({withComparison:e,preset:t,...n}){return(0,H.jsx)(v,{...n,widgetType:_(I,k),renderModule:U,renderComponent:D,attributes:L(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),m(),fe(),ue(),y(),u(),ge(),_e(),ve(),H=a(),d(),U=`storybook/payment-status`,W=`last-30-days`,G=re,K={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:D,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},q={render:z,args:{preset:W,withComparison:!1},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},J={render:z,args:{preset:W,withComparison:!0},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(f(`orders/by-date`,`loading`),()=>f(`orders/by-date`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(f(`orders/by-date`,`error`),()=>f(`orders/by-date`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(f(`orders/by-date`,`empty`),()=>f(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...x,preset:W,withComparison:!0},argTypes:{...de,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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