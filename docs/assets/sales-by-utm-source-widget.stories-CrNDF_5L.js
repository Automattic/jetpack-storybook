import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{dn as o,n as s}from"./build-module-h3iDQ_Ze.js";import{$ as c,J as l,a as u,l as d,r as f,u as p}from"./hooks-Cqz32HTh.js";import{o as m,t as h}from"./src-ibDQyZry.js";import{l as g,t as _}from"./src-BlU2m1VV.js";import{R as v,h as y}from"./chart-tooltip-BDcFIYyg.js";import{t as b}from"./leaderboard-chart-BqSZ6fs8.js";import{i as x}from"./metric-tabs-chart-qLhhJNPe.js";import{n as S,t as C}from"./register-report-mocks-DMbFVDEU.js";import{t as w}from"./src-Y0XL3ReI.js";import{i as T,n as E,r as D,t as O}from"./widget-dashboard-with-widget-BeYITzpe.js";function k(e,t=4){if(!e?.data||e.data.length===0)return[];let{data:n}=e,i=Math.max(...n.map(e=>Math.max(e.current_period.value||0,e.previous_period?.value||0)),1);return n.slice(0,t).map((e,t)=>{let n=e.current_period.value||0,a=e.previous_period?.value??0,o=y(n,a);return{id:e.item?String(e.item):String(t),label:e.item||r(`Unassigned`,`jetpack-premium-analytics`),currentValue:n,previousValue:a,currentShare:n/i*100,previousShare:a/i*100,delta:o}})}var A=t((()=>{i(),w()}));function j(){let{reportParams:e}=d(),{primary:t,hasComparison:n,isLoading:r,isFetching:i,hasData:a,isError:o,error:s,refetch:c}=l((0,N.useMemo)(()=>({...e,view:`source`}),[e])),u=r&&!a,p=i&&a,h=(0,N.useMemo)(()=>k(t.data),[t.data]),g=(0,N.useMemo)(()=>v(e),[e]);return f(o,s,c)?null:u?(0,P.jsx)(x,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{data:h,withComparison:n,legendLabels:g,emptyStateIcon:m,style:{"--a8c--charts--leaderboard--bar--border-radius":`0 1px 1px 0`}}),p&&(0,P.jsx)(x,{})]})}function M({attributes:e={},setError:t}){return(0,P.jsx)(u,{attributes:e,setError:t,options:{from:`/`},children:(0,P.jsx)(j,{})})}var N,P,F=t((()=>{p(),h(),w(),N=e(n(),1),A(),P=a()})),I,L=t((()=>{i(),s(),I={name:`jpa/sales-by-utm-source`,title:r(`Sales by UTM source`,`jetpack-premium-analytics`),description:r(`Shows the top UTM sources by order revenue over the selected time period.`,`jetpack-premium-analytics`),icon:o}}));function R(e=!1,t=G){return{reportParams:c(e,t)}}function z({withComparison:e,preset:t}){let n=!!e,r=t??G;return!n&&r===G?`getDefaultQueryParams()`:n&&r===G?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function B(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<SalesByUtmSourceRender
\tattributes={ {
\t\treportParams: ${z(e)},
\t} }
/>`}function V({withComparison:e,preset:t}){return(0,U.jsx)(M,{attributes:R(e,t)})}function H({withComparison:e,preset:t,...n}){return(0,U.jsx)(E,{...n,widgetType:I,renderModule:W,renderComponent:M,attributes:R(e,t)})}var U,W,G,K,q,J,Y,X,Z,Q;t((()=>{p(),_(),D(),C(),F(),L(),U=a(),S(),W=`storybook/sales-by-utm-source`,G=`last-30-days`,K=g,q=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,U.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/SalesByUtmSource`,component:M,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top UTM sources by order revenue for the selected period.`}}}},Y={render:V,args:{preset:G,withComparison:!1},decorators:[q],parameters:{docs:{source:{transform:(e,t)=>B(t.args)}}}},X={render:V,args:{preset:G,withComparison:!0},decorators:[q],parameters:{docs:{source:{transform:(e,t)=>B(t.args)}}}},Z={render:e=>(0,U.jsx)(H,{...e}),args:{...O,preset:G,withComparison:!0},argTypes:{...T,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/sales-by-utm-source"
	renderComponent={ SalesByUtmSourceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmSource,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByUtmSourceStoryControls>;
        }) => getSalesByUtmSourceSource(storyContext.args)
      }
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderSalesByUtmSource,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<SalesByUtmSourceStoryControls>;
        }) => getSalesByUtmSourceSource(storyContext.args)
      }
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change and trend data.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <SalesByUtmSourceDashboardStory {...args} />,
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
\\trenderModule="storybook/sales-by-utm-source"
\\trenderComponent={ SalesByUtmSourceRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Z as WidgetDashboardWithWidget,X as WithComparison,Q as __namedExportsOrder,J as default};