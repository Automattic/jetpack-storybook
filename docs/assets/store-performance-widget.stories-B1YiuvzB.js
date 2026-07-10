import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Rt as o,n as s}from"./build-module-_6UNQmiR.js";import{Dt as c,a as ee,d as te,ft as ne,mt as re,ot as ie,p as l,s as u,wt as d}from"./hooks-XZUPBmeq.js";import{n as f,r as p}from"./line-chart-D6GEWJYm.js";import{l as m,t as h}from"./src-nQqIBmxK.js";import{it as ae,nt as g}from"./chart-tooltip-C7V29gQ5.js";import{n as oe}from"./widget-loading-overlay-D21I_rx2.js";import{t as se}from"./metric-tabs-chart-Bxk4ZLc0.js";import{n as _,t as v}from"./register-report-mocks-CGlJYMZt.js";import{i as y,n as b,r as x,t as S}from"./widget-dashboard-with-widget-Mtwv8mAB.js";import{t as C,y as w}from"./src-Mil1VHBf.js";var T,E,D,O=t((()=>{T=`_widgetRoot_142ux_1`,E=`_emptyState_142ux_5`,D={widgetRoot:T,emptyState:E}}));function k(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function A(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function j(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function M(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function N(e,t){if(!e)return[];if(e.metricType===`visitors`)return g({primary:t.visitors.primary.data??A(),comparison:t.visitors.comparison.data??A(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return g({primary:t.conversion.primary.data??j(),comparison:t.conversion.comparison.data??j(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return g({primary:t.customers.primary.data??M(),comparison:t.customers.comparison.data??M(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return g({primary:n.primary.data??k(),comparison:n.comparison.data??k(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function P({metrics:e=w}){let{reportParams:t}=te(),n=(0,I.useMemo)(()=>e.filter(e=>e.enabled),[e]),i=(0,I.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=d(t,{enabled:i.has(`general`)}),{primary:o,comparison:s}=a,c=d({...t,filters:[{compare:`IN`,key:`product_type`,value:[`booking`,`bookable-event`,`bookable-service`]}]},{enabled:i.has(`booking`)}),{primary:l,comparison:u}=c,f=ie(t,{enabled:i.has(`visitors`)}),{primary:p,comparison:m}=f,h=ne(t,{enabled:i.has(`conversion`)}),{primary:g,comparison:_}=h,v=re(t,{enabled:i.has(`customers`)}),{primary:y,comparison:b}=v,x=(0,I.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?c:null,i.has(`visitors`)?f:null,i.has(`conversion`)?h:null,i.has(`customers`)?v:null].filter(e=>e!==null),[i,a,c,f,h,v]),S=ee(x.some(e=>e.isError),x.map(e=>e.error).find(Boolean)??null,(0,I.useCallback)(()=>Promise.all(x.map(e=>e.refetch())),[x])),C=(0,I.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`visitors`?[p.data?.summary??{},m.data?.summary??{}]:e.metricType===`conversion`?[g.data?.summary??{},_.data?.summary??{}]:e.metricType===`customers`?[y.data?.summary??{},b.data?.summary??{}]:[o.data?.summary??{},s.data?.summary??{}];return{...e,id:`${e.metricType}-${e.metricKey}`,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,l.data,u.data,p.data,m.data,g.data,_.data,y.data,b.data,o.data,s.data]),T=(0,I.useMemo)(()=>({general:{primary:o,comparison:s},booking:{primary:l,comparison:u},visitors:{primary:p,comparison:m},conversion:{primary:g,comparison:_},customers:{primary:y,comparison:b}}),[o,s,l,u,p,m,g,_,y,b]),E=(0,I.useMemo)(()=>C.map(e=>{let t=N(e,T);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:ae(e.metricKey),description:e.description}}),[C,T]);if(S)return null;if(x.some(e=>e.isLoading&&!e.hasData))return(0,L.jsx)(oe,{});if(!E.length)return(0,L.jsx)(`div`,{className:D.emptyState,children:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)});let O=x.some(e=>e.isFetching&&e.hasData);return(0,L.jsx)(`div`,{className:D.widgetRoot,children:(0,L.jsx)(se,{metrics:E,dataFormat:R,loading:O,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)})})}function F({attributes:e={},setError:t}){return(0,L.jsx)(u,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(P,{})})}var I,L,R,ce=t((()=>{l(),C(),i(),I=e(n(),1),O(),L=a(),R={type:`number`,options:{useMultipliers:!0,decimals:0}}})),z,le=t((()=>{i(),s(),z={name:`jpa/store-performance`,title:r(`Store performance`,`jetpack-premium-analytics`),description:r(`Shows key store performance metrics at a glance.`,`jetpack-premium-analytics`),icon:o}}));function B(e=!1,t=G){return{reportParams:c(e,t)}}function ue({withComparison:e,preset:t}){let n=!!e,r=t??G;return!n&&r===G?`getDefaultQueryParams()`:n&&r===G?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function V(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${ue(e)},
\t} }
/>`}function H({withComparison:e,preset:t}){return q(),(0,U.jsx)(F,{attributes:B(e,t)})}function de({withComparison:e,preset:t,...n}){return q(),(0,U.jsx)(b,{...n,widgetType:z,renderModule:W,renderComponent:F,attributes:B(e,t)})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{l(),h(),p(),v(),x(),ce(),le(),U=a(),_(),W=`storybook/store-performance`,G=`last-30-days`,K=m,q=()=>f.Legend,J=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`420px`},children:(0,U.jsx)(e,{})}),Y={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:F,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays key store performance metrics at a glance.`}}}},X={render:H,args:{preset:G,withComparison:!1},decorators:[J],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Z={render:H,args:{preset:G,withComparison:!0},decorators:[J],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Q={render:e=>(0,U.jsx)(de,{...e}),args:{...S,preset:G,withComparison:!0},argTypes:{...y,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/store-performance"
	renderComponent={ StorePerformanceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderStorePerformance,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<StorePerformanceStoryControls>;
        }) => getStorePerformanceSource(storyContext.args)
      }
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderStorePerformance,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<StorePerformanceStoryControls>;
        }) => getStorePerformanceSource(storyContext.args)
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period changes and chart data.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <StorePerformanceDashboardStory {...args} />,
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
\\trenderModule="storybook/store-performance"
\\trenderComponent={ StorePerformanceRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{X as Default,Q as WidgetDashboardWithWidget,Z as WithComparison,$ as __namedExportsOrder,Y as default};