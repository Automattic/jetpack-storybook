import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{_n as o,n as s}from"./build-module-DwipKI4I.js";import{Dt as ee,a as c,l as te,pt as l,r as u,u as d,ut as f}from"./hooks-BkMq8H4B.js";import{S as p,t as m}from"./build-module-BS7goqaJ.js";import{i as h,t as g}from"./src-bXrQRSkF.js";import{l as _,t as v}from"./src-CT8Z3786.js";import{R as y,h as b}from"./chart-tooltip-DIT8Fdq3.js";import{t as x}from"./donut-chart-CjcKsBg7.js";import{i as S}from"./metric-tabs-chart-Dx5A3qS6.js";import{n as C,t as w}from"./register-report-mocks-BIUjg-sg.js";import{i as ne,n as re,r as T,t as E}from"./widget-dashboard-with-widget-CDauWJqA.js";import{t as D}from"./src-BPYmK-P8.js";var O,k,A=t((()=>{O=`_container_18scw_1`,k={container:O}}));function j(){let{reportParams:e}=te(),{primary:t,comparison:n,hasComparison:r,isLoading:i,isFetching:a,hasData:o,isError:s,error:c,refetch:l}=f({...e,filters:y}),d=i&&!o,m=a&&o,{chartData:g,total:_,comparisonTotal:v,legendData:C}=(0,M.useMemo)(()=>b(t.data,n.data),[t.data,n.data]),w=ee(g);return u(s,c,l)?null:d?(0,N.jsx)(S,{}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(p,{className:k.container,direction:`column`,align:`center`,justify:`center`,children:(0,N.jsx)(x,{chartData:g,value:_,styles:w,comparisonValue:r?v:null,legendData:C,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,emptyStateIcon:h,withTooltips:!0})}),m&&(0,N.jsx)(S,{})]})}var M,N,ie=t((()=>{d(),g(),D(),m(),M=e(n(),1),A(),N=a()}));function P({attributes:e={},setError:t}){return(0,F.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(j,{})})}var F,I=t((()=>{D(),ie(),F=a()})),L,R=t((()=>{i(),s(),L={name:`jpa/payment-status`,title:r(`Payment status`,`jetpack-premium-analytics`),description:r(`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,`jetpack-premium-analytics`),icon:o}}));function z(e=!1,t=K){return{reportParams:l(e,t)}}function B({withComparison:e,preset:t}){let n=!!e,r=t??K;return!n&&r===K?`getDefaultQueryParams()`:n&&r===K?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function V(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${B(e)},
\t} }
/>`}function H({withComparison:e,preset:t}){return(0,W.jsx)(P,{attributes:z(e,t)})}function U({withComparison:e,preset:t,...n}){return(0,W.jsx)(re,{...n,widgetType:L,renderModule:G,renderComponent:P,attributes:z(e,t)})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),v(),T(),w(),I(),R(),W=a(),C(),G=`storybook/payment-status`,K=`last-30-days`,q=_,J=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),Y={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:P,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},X={render:H,args:{preset:K,withComparison:!1},decorators:[J],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Z={render:H,args:{preset:K,withComparison:!0},decorators:[J],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...E,preset:K,withComparison:!0},argTypes:{...ne,preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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