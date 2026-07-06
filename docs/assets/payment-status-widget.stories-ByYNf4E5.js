import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{_n as o,n as s}from"./build-module-DwipKI4I.js";import{Ct as c,Lt as l,a as u,bt as ee,d,f,s as p}from"./hooks-Bj33T6YD.js";import{S as m,t as h}from"./build-module-Bc-hhxRA.js";import{i as g,t as _}from"./src-bXrQRSkF.js";import{l as v,t as y}from"./src-CT8Z3786.js";import{R as b,h as x}from"./chart-tooltip-B1fPmvxS.js";import{t as te}from"./donut-chart-BnPjQVvE.js";import{i as S}from"./metric-tabs-chart-Bb4uLBwZ.js";import{n as C,t as w}from"./register-report-mocks-BcMXdo50.js";import{i as T,n as E,r as D,t as O}from"./widget-dashboard-with-widget-MySvZ8Mk.js";import{t as k}from"./src-DrDmia-9.js";var A,j,ne=t((()=>{A=`_container_18scw_1`,j={container:A}}));function re(){let{reportParams:e}=d(),{primary:t,comparison:n,hasComparison:r,isLoading:i,isFetching:a,hasData:o,isError:s,error:c,refetch:f}=ee({...e,filters:b}),p=i&&!o,h=a&&o,{chartData:_,total:v,comparisonTotal:y,legendData:C}=(0,M.useMemo)(()=>x(t.data,n.data),[t.data,n.data]),w=l(_);return u(s,c,f)?null:p?(0,N.jsx)(S,{}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(m,{className:j.container,direction:`column`,align:`center`,justify:`center`,children:(0,N.jsx)(te,{chartData:_,value:v,styles:w,comparisonValue:r?y:null,legendData:C,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,emptyStateIcon:g,withTooltips:!0})}),h&&(0,N.jsx)(S,{})]})}var M,N,ie=t((()=>{f(),_(),k(),h(),M=e(n(),1),ne(),N=a()}));function P({attributes:e={},setError:t}){return(0,F.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(re,{})})}var F,I=t((()=>{k(),ie(),F=a()})),L,R=t((()=>{i(),s(),L={name:`jpa/payment-status`,title:r(`Payment status`,`jetpack-premium-analytics`),description:r(`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,`jetpack-premium-analytics`),icon:o}}));function z(e=!1,t=K){return{reportParams:c(e,t)}}function B({withComparison:e,preset:t}){let n=!!e,r=t??K;return!n&&r===K?`getDefaultQueryParams()`:n&&r===K?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function V(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${B(e)},
\t} }
/>`}function H({withComparison:e,preset:t}){return(0,W.jsx)(P,{attributes:z(e,t)})}function U({withComparison:e,preset:t,...n}){return(0,W.jsx)(E,{...n,widgetType:L,renderModule:G,renderComponent:P,attributes:z(e,t)})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),y(),D(),w(),I(),R(),W=a(),C(),G=`storybook/payment-status`,K=`last-30-days`,q=v,J=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),Y={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:P,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},X={render:H,args:{preset:K,withComparison:!1},decorators:[J],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Z={render:H,args:{preset:K,withComparison:!0},decorators:[J],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...O,preset:K,withComparison:!0},argTypes:{...T,preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/payment-status"
	renderComponent={ PaymentStatusRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Comparison period enabled, showing paid and unpaid order revenue for the
selected period and previous period.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{X as Default,Q as WidgetDashboardWithWidget,Z as WithComparison,$ as __namedExportsOrder,Y as default};