import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{u as c}from"./hooks-CbYAaNZf.js";import{R as ee,t as l}from"./build-module-f6nw9llR.js";import{o as te,t as u}from"./src-B3le4dug.js";import{c as d,t as f}from"./src-DN9VFS2M.js";import{M as ne,cr as p,rr as re,rt as ie,yt as m}from"./chart-tooltip-Bng5hHZ0.js";import{t as h}from"./donut-chart-MocP38Gc.js";import{F as g,G as ae,L as _,P as oe,V as se}from"./report-metric-BNxHdhqI.js";import{t as v}from"./widget-state-eiZxw_lk.js";import{C as ce,D as y,E as b,S as le,T as ue,b as de,t as x,w as S,x as C}from"./src-DM6U6HKv.js";var w,T,fe=t((()=>{w=`_container_18scw_1`,T={container:w}}));function pe(){let{reportParams:e}=ae(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:l,refetch:u}=re({...e,filters:ie}),{chartData:d,total:f,comparisonTotal:p,legendData:m}=(0,E.useMemo)(()=>ne(t.data,n.data),[t.data,n.data]),g=c(d);return(0,D.jsx)(v,{isLoading:a&&!s,isFetching:o,isError:l&&!s,isEmpty:d.length===0,error:{description:r(`We couldn't load payment data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:te,description:r(`No order revenue in this period.`,`jetpack-premium-analytics`)},children:(0,D.jsx)(ee,{className:T.container,direction:`column`,align:`center`,justify:`center`,children:(0,D.jsx)(h,{chartData:d,value:f,styles:g,comparisonValue:i?p:null,legendData:m,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,withTooltips:!0})})})}var E,D,me=t((()=>{m(),u(),x(),i(),l(),E=e(n(),1),fe(),D=a()}));function O({attributes:e={}}){return(0,k.jsx)(se,{attributes:e,options:{from:`/`},children:(0,k.jsx)(pe,{})})}var k,he=t((()=>{x(),me(),k=a()})),A,ge=t((()=>{s(),A={icon:o}})),j,M,N,P,F,I,L,_e=t((()=>{j=`jpa/payment-status`,M=`Payment status`,N=`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,P={content:`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`},F=`store`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R(e=!1,t=W){return{reportParams:p(e,t)}}function ve({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function z(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${ve(e)},
\t} }
/>`}function B({withComparison:e,preset:t}){return(0,H.jsx)(O,{attributes:R(e,t)})}function V(e){return(0,H.jsx)(O,{attributes:R(!1,e)})}function ye({withComparison:e,preset:t,...n}){return(0,H.jsx)(ue,{...n,widgetType:le(L,A),renderModule:U,renderComponent:O,attributes:R(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),f(),b(),ce(),de(),oe(),he(),ge(),_e(),H=a(),g(),U=`storybook/payment-status`,W=`last-30-days`,G=d,K={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:O,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},q={render:B,args:{preset:W,withComparison:!1},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},J={render:B,args:{preset:W,withComparison:!0},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`orders/by-date`,`loading`),()=>_(`orders/by-date`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`orders/by-date`,`error`),()=>_(`orders/by-date`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`orders/by-date`,`empty`),()=>_(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(ye,{...e}),args:{...S,preset:W,withComparison:!0},argTypes:{...y,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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