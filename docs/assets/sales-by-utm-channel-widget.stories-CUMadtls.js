import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{dn as o,n as s}from"./build-module-h3iDQ_Ze.js";import{H as c,a as l,l as u,q as d,r as f,u as p}from"./hooks-C_BMnavd.js";import{d as m,t as h}from"./src-D_tiyCb3.js";import{l as g,t as _}from"./src-BlU2m1VV.js";import{P as v,p as y}from"./chart-tooltip-SFDsVpfA.js";import{t as b}from"./leaderboard-chart-GQZKG7UH.js";import{i as x}from"./metric-tabs-chart-0js_gHTZ.js";import{n as S,t as C}from"./register-report-mocks-B9FFFxoJ.js";import{t as w}from"./src-Chf94r58.js";import{i as T,n as E,r as D,t as O}from"./widget-dashboard-with-widget-CspsApdb.js";function k(e,t=4){if(!e?.data||e.data.length===0)return[];let{data:n}=e,i=Math.max(...n.map(e=>Math.max(e.current_period.value||0,e.previous_period?.value||0)),1);return n.slice(0,t).map((e,t)=>{let n=e.current_period.value||0,a=e.previous_period?.value??0,o=y(n,a);return{id:e.item?String(e.item):String(t),label:e.item||r(`Unassigned`,`jetpack-premium-analytics`),currentValue:n,previousValue:a,currentShare:n/i*100,previousShare:a/i*100,delta:o}})}var A=t((()=>{i(),w()}));function j(){let{reportParams:e}=u(),{primary:t,hasComparison:n,isLoading:r,isFetching:i,hasData:a,isError:o,error:s,refetch:l}=c((0,N.useMemo)(()=>({...e,view:`channel`}),[e])),d=r&&!a,p=i&&a,h=(0,N.useMemo)(()=>k(t.data),[t.data]),g=(0,N.useMemo)(()=>v(e),[e]);return f(o,s,l)?null:d?(0,P.jsx)(x,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{data:h,withComparison:n,legendLabels:g,emptyStateIcon:m,style:{"--a8c--charts--leaderboard--bar--border-radius":`0 1px 1px 0`}}),p&&(0,P.jsx)(x,{})]})}function M({attributes:e={},setError:t}){return(0,P.jsx)(l,{attributes:e,setError:t,options:{from:`/`},children:(0,P.jsx)(j,{})})}var N,P,F=t((()=>{p(),h(),w(),N=e(n(),1),A(),P=a()})),I,L=t((()=>{i(),s(),I={name:`jpa/sales-by-utm-channel`,title:r(`Sales by UTM channel`,`jetpack-premium-analytics`),description:r(`Shows the top UTM channels by order revenue over the selected time period.`,`jetpack-premium-analytics`),icon:o}}));function R(e=!1,t=U){return{reportParams:d(e,t)}}function z({withComparison:e,preset:t}){return(0,V.jsx)(M,{attributes:R(e,t)})}function B({withComparison:e,preset:t,...n}){return(0,V.jsx)(E,{...n,widgetType:I,renderModule:H,renderComponent:M,attributes:R(e,t)})}var V,H,U,W,G,K,q,J,Y,X;t((()=>{p(),_(),D(),C(),F(),L(),V=a(),S(),H=`storybook/sales-by-utm-channel`,U=`last-30-days`,W=g,G=e=>(0,V.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,V.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/SalesByUtmChannel`,component:M,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM channels by order revenue for the selected period.`}}}},q={render:z,args:{preset:U,withComparison:!1},decorators:[G]},J={render:z,args:{preset:U,withComparison:!0},decorators:[G]},Y={render:e=>(0,V.jsx)(B,{...e}),args:{...O,preset:U,withComparison:!0},argTypes:{...T,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-channel"
	renderComponent={ SalesByUtmChannelRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmChannel,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period UTM channel changes.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <SalesByUtmChannelDashboardStory {...args} />,
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
\\trenderModule="storybook/sales-by-utm-channel"
\\trenderComponent={ SalesByUtmChannelRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Y.parameters?.docs?.description}}},X=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{q as Default,Y as WidgetDashboardWithWidget,J as WithComparison,X as __namedExportsOrder,K as default};