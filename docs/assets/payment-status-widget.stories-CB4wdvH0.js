import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,rl as s}from"./build-module-Bt8gOW8e.js";import{T as c,a as l,d as ee,in as u,s as d,tn as f,y as p}from"./hooks-CarZ30eZ.js";import{R as m,t as h}from"./build-module-BAze1CUO.js";import{o as g,t as _}from"./src-CaCJrOts.js";import{l as v,t as y}from"./src-DsEGMN_I.js";import{G as b,S as x}from"./chart-tooltip-Bnt9K7ZC.js";import{t as te}from"./donut-chart-_HcRP_1T.js";import{n as S}from"./widget-loading-overlay-CZo6ZUln.js";import{n as C,t as w}from"./register-report-mocks-Kc4EQ2dV.js";import{S as ne,b as T,t as E,x as D,y as O}from"./src-B4R7bqCJ.js";var k,A,j=t((()=>{k=`_container_18scw_1`,A={container:k}}));function re(){let{reportParams:e}=ee(),{primary:t,comparison:n,hasComparison:r,isLoading:i,isFetching:a,hasData:o,isError:s,error:c,refetch:u}=f({...e,filters:b}),d=i&&!o,h=a&&o,{chartData:_,total:v,comparisonTotal:y,legendData:C}=(0,M.useMemo)(()=>x(t.data,n.data),[t.data,n.data]),w=p(_);return l(s,c,u)?null:d?(0,N.jsx)(S,{}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(m,{className:A.container,direction:`column`,align:`center`,justify:`center`,children:(0,N.jsx)(te,{chartData:_,value:v,styles:w,comparisonValue:r?y:null,legendData:C,showLegend:!0,dataFormat:{type:`currency`,options:{useMultipliers:!0,decimals:1}},maxSize:null,emptyStateIcon:g,withTooltips:!0})}),h&&(0,N.jsx)(S,{})]})}var M,N,ie=t((()=>{c(),_(),E(),h(),M=e(n(),1),j(),N=a()}));function P({attributes:e={},setError:t}){return(0,F.jsx)(d,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(re,{})})}var F,I=t((()=>{E(),ie(),F=a()})),L,R=t((()=>{i(),o(),L={name:`jpa/payment-status`,title:r(`Payment status`,`jetpack-premium-analytics`),description:r(`Shows the breakdown of paid vs unpaid order revenue over the selected time period.`,`jetpack-premium-analytics`),icon:s}}));function z(e=!1,t=K){return{reportParams:u(e,t)}}function B({withComparison:e,preset:t}){let n=!!e,r=t??K;return!n&&r===K?`getDefaultQueryParams()`:n&&r===K?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function V(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<PaymentStatusRender
\tattributes={ {
\t\treportParams: ${B(e)},
\t} }
/>`}function H({withComparison:e,preset:t}){return(0,W.jsx)(P,{attributes:z(e,t)})}function U({withComparison:e,preset:t,...n}){return(0,W.jsx)(T,{...n,widgetType:L,renderModule:G,renderComponent:P,attributes:z(e,t)})}var W,G,K,q,J,Y,X,Z,Q,$;t((()=>{c(),y(),D(),w(),I(),R(),W=a(),C(),G=`storybook/payment-status`,K=`last-30-days`,q=v,J=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),Y={title:`Packages/Premium Analytics/Widgets/PaymentStatus`,component:P,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays paid and unpaid order revenue for the selected period.`}}}},X={render:H,args:{preset:K,withComparison:!1},decorators:[J],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Z={render:H,args:{preset:K,withComparison:!0},decorators:[J],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...O,preset:K,withComparison:!0},argTypes:{...ne,preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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