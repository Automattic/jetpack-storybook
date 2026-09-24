import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{t as o,ul as s}from"./build-module-2iv4IIRq.js";import{Et as ee}from"./build-module-l8c-_EUg2.js";import{m as c,u as te,v as ne}from"./hooks-w3fv1ge0.js";import{c as re,t as l}from"./src-C-E2d-Lb.js";import{t as u}from"./src-Dln62PI4.js";import{rt as d,t as f}from"./src-CJGEmgc4.js";import{$t as p,Jt as ie,t as m}from"./src-BEJvnCH-.js";import{Bt as ae,pt as oe}from"./helpers-CGoL0sfo.js";import{r as se,t as ce}from"./donut-chart-skeleton-CSR5wuAs.js";import{c as h,i as g,r as le}from"./register-report-mocks-BUuguKfM.js";import{t as _}from"./widget-state-DuB2e-Jb.js";import{t as v}from"./src-CZ6cjag0.js";import{a as ue,d as de,f as fe,i as pe,n as y,p as b,r as x,u as S}from"./with-widget-canvas-CEqENTSh.js";var C,w,me=t((()=>{C=`_container_18scw_1`,w={container:C}}));function he(){let{reportParams:e}=ne(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,refetch:l}=ie({...e,filters:ae}),{chartData:u,total:d,comparisonTotal:f,legendData:p}=(0,T.useMemo)(()=>oe(t.data,n.data),[t.data,n.data]),m=te(u);return(0,E.jsx)(_,{isLoading:a,isFetching:o,isError:c&&!s,isEmpty:u.length===0,error:{description:r(`We couldn't load payment data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:re,description:r(`No order revenue in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(ce,{}),children:(0,E.jsx)(ee,{className:w.container,direction:`column`,align:`center`,justify:`center`,children:(0,E.jsx)(se,{chartData:u,value:d,styles:m,comparisonValue:i?f:null,legendData:p,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0}},maxSize:null,withTooltips:!0})})})}var T,E,ge=t((()=>{m(),l(),v(),i(),u(),T=e(n(),1),me(),E=a()}));function D({attributes:e={}}){return(0,O.jsx)(c,{attributes:e,options:{from:`/`},children:(0,O.jsx)(he,{})})}var O,_e=t((()=>{v(),ge(),O=a()})),k,A=t((()=>{o(),k={icon:s}})),j,M,N,P,F,I,L,ve=t((()=>{j=`jpa/payment-status`,M=`Payment status`,N=`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,P={content:`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`},F=`store`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R(e=!1,t=W){return{reportParams:p(e,t)}}function ye({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function z(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${ye(e)},
\t} }
/>`}function B({withComparison:e,preset:t}){return(0,H.jsx)(D,{attributes:R(e,t)})}function V(e){return(0,H.jsx)(D,{attributes:R(!1,e)})}function be({withComparison:e,preset:t,...n}){return(0,H.jsx)(de,{...n,widgetType:pe(L,k),renderModule:U,renderComponent:D,attributes:R(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),f(),fe(),ue(),y(),le(),_e(),A(),ve(),H=a(),g(),U=`storybook/payment-status`,W=`last-30-days`,G=d,K={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:D,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},q={render:B,args:{preset:W,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},J={render:B,args:{preset:W,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`orders/by-date`,`loading`),()=>h(`orders/by-date`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`orders/by-date`,`error`),()=>h(`orders/by-date`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`orders/by-date`,`empty`),()=>h(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(be,{...e}),args:{...S,preset:W,withComparison:!0},argTypes:{...b,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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