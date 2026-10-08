import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{cl as o,t as s}from"./build-module-DNhkEVJn.js";import{c as ee,t as c}from"./src-DzwlO62w.js";import{ot as l,t as u}from"./src-rrY7vAoW.js";import{In as d,fn as f,t as p}from"./src-_wTDHkE8.js";import{_ as te,dt as ne,fn as m,x as re}from"./charts-provider-CPgWmhOr.js";import{n as ie,r as ae,s as h}from"./register-report-mocks-fOQNujTE.js";import{t as oe}from"./donut-Bti_vFKB.js";import{t as g}from"./src-CUJR2JZN.js";import{a as se,g as _,h as v,i as ce,m as le,n as ue,p as de,r as y}from"./with-widget-canvas-87_awOfE.js";function b(){let{reportParams:e}=re(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c,error:l,refetch:u}=f({...e,filters:m}),d=t.data?.summary,p=n.data?.summary;return(0,S.jsx)(oe,{segments:(0,x.useMemo)(()=>d?[{label:r(`Paid`,`jetpack-premium-analytics-pkg`),value:d.paid_net_sales,previousValue:p?.paid_net_sales},{label:r(`Unpaid`,`jetpack-premium-analytics-pkg`),value:d.unpaid_net_sales,previousValue:p?.unpaid_net_sales}]:[],[d,p]),status:{isLoading:a,isFetching:o,isError:c&&!s,hasComparison:i,refetch:u},error:ne(l,{retryDescription:r(`We couldn't load payment data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:u}),empty:{icon:ee,description:r(`No order revenue in this period.`,`jetpack-premium-analytics-pkg`)},format:C})}var x,S,C,fe=t((()=>{p(),c(),g(),i(),x=e(n(),1),S=a(),C={type:`currency`,options:{useMultipliers:!0}}}));function w({attributes:e={}}){return(0,T.jsx)(te,{attributes:e,options:{from:`/`},children:(0,T.jsx)(b,{})})}var T,E=t((()=>{g(),fe(),T=a()})),D,O=t((()=>{s(),D={icon:o}})),k,A,j,M,N,P,F,I=t((()=>{k=`jpa/payment-status`,A=`Payment status`,j=`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,M={content:`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`},N=`store`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function L(e=!1,t=W){return{reportParams:d(e,t)}}function R({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function z(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${R(e)},
\t} }
/>`}function B({withComparison:e,preset:t}){return(0,H.jsx)(w,{attributes:L(e,t)})}function V(e){return(0,H.jsx)(w,{attributes:L(!1,e)})}function pe({withComparison:e,preset:t,...n}){return(0,H.jsx)(le,{...n,widgetType:ce(F,D),renderModule:U,renderComponent:w,attributes:L(e,t)})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{p(),u(),v(),se(),ue(),ie(),E(),O(),I(),H=a(),ae(),U=`storybook/payment-status`,W=`last-30-days`,G=l,K={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:w,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},q={render:B,args:{preset:W,withComparison:!1},decorators:[y],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},J={render:B,args:{preset:W,withComparison:!0},decorators:[y],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`orders/by-date`,`loading`),()=>h(`orders/by-date`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`orders/by-date`,`error`),()=>h(`orders/by-date`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`orders/by-date`,`empty`),()=>h(`orders/by-date`,null))},Q={render:e=>(0,H.jsx)(pe,{...e}),args:{...de,preset:W,withComparison:!0},argTypes:{..._,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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