import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{u as c}from"./hooks-BhE_AEI0.js";import{R as ee,t as l}from"./build-module-Cq3fcld0.js";import{o as te,t as u}from"./src-B3le4dug.js";import{l as d,t as f}from"./src-WOZhCJE0.js";import{Ct as p,P as ne,fr as m,sr as re,st as ie}from"./chart-tooltip-DFYNpcJf.js";import{t as h}from"./donut-chart-C70KPIk5.js";import{I as g,L as ae,U as _,q as oe,z as v}from"./report-metric-BUaneiYr.js";import{t as se}from"./widget-state-CkIY1A43.js";import{C as ce,D as le,E as ue,S as de,T as fe,b as y,t as b,w as x,x as S}from"./src-Dat9aWi5.js";var C,w,pe=t((()=>{C=`_container_18scw_1`,w={container:C}}));function me(){let{reportParams:e}=oe(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:l,refetch:u}=re({...e,filters:ie}),{chartData:d,total:f,comparisonTotal:p,legendData:m}=(0,T.useMemo)(()=>ne(t.data,n.data),[t.data,n.data]),g=c(d);return(0,E.jsx)(se,{isLoading:a&&!s,isFetching:o,isError:l&&!s,isEmpty:d.length===0,error:{description:r(`We couldn't load payment data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:te,description:r(`No order revenue in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,E.jsx)(ee,{className:w.container,direction:`column`,align:`center`,justify:`center`,children:(0,E.jsx)(h,{chartData:d,value:f,styles:g,comparisonValue:i?p:null,legendData:m,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,withTooltips:!0})})})}var T,E,he=t((()=>{p(),u(),b(),i(),l(),T=e(n(),1),pe(),E=a()}));function D({attributes:e={}}){return(0,O.jsx)(_,{attributes:e,options:{from:`/`},children:(0,O.jsx)(me,{})})}var O,ge=t((()=>{b(),he(),O=a()})),k,_e=t((()=>{s(),k={icon:o}})),A,j,M,N,P,F,I,ve=t((()=>{A=`jpa/payment-status`,j=`Payment status`,M=`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,N={content:`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`},P=`store`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L(e=!1,t=W){return{reportParams:m(e,t)}}function ye({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function R(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${ye(e)},
\t} }
/>`}function z({withComparison:e,preset:t}){return(0,H.jsx)(D,{attributes:L(e,t)})}function B(e){return(0,H.jsx)(D,{attributes:L(!1,e)})}function V({withComparison:e,preset:t,...n}){return(0,H.jsx)(fe,{...n,widgetType:de(I,k),renderModule:U,renderComponent:D,attributes:L(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{p(),f(),ue(),ce(),y(),g(),ge(),_e(),ve(),H=a(),ae(),U=`storybook/payment-status`,W=`last-30-days`,G=d,K={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:D,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},q={render:z,args:{preset:W,withComparison:!1},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},J={render:z,args:{preset:W,withComparison:!0},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`orders/by-date`,`loading`),()=>v(`orders/by-date`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`orders/by-date`,`error`),()=>v(`orders/by-date`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`orders/by-date`,`empty`),()=>v(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...x,preset:W,withComparison:!0},argTypes:{...le,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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