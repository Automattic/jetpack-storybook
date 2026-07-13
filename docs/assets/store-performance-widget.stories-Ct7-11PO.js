import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Rt as o,n as s}from"./build-module-Bt8gOW8e.js";import{Ct as ee,It as c,Nt as te,a as ne,d as re,ht as ie,p as l,s as u,xt as ae}from"./hooks-Dx9qiVYp.js";import{n as d,r as f}from"./line-chart-CkheHgAu.js";import{l as p,t as m}from"./src-nQqIBmxK.js";import{Z as oe,it as h,ot as se}from"./chart-tooltip-EvByNN3k.js";import{n as ce}from"./widget-loading-overlay-CIdE75ul.js";import{t as le}from"./metric-tabs-chart-BK6bbMMH.js";import{n as g,t as _}from"./register-report-mocks-B9W42EpJ.js";import{i as v,n as y,r as b,t as x}from"./widget-dashboard-with-widget-CdirjQwQ.js";import{t as S}from"./src-B46Irv8a.js";import{n as C,t as w}from"./src-ihE2fCEj.js";var T,E,D=t((()=>{i(),T=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics`),metricType:`customers`,metricKey:`customers`}],E=T.map(e=>e.id)})),O,ue,k,de=t((()=>{O=`_widgetRoot_142ux_1`,ue=`_emptyState_142ux_5`,k={widgetRoot:O,emptyState:ue}}));function fe(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function A(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function j(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function M(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function pe(e,t){if(e.metricType===`visitors`)return h({primary:t.visitors.primary.data??A(),comparison:t.visitors.comparison.data??A(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return h({primary:t.conversion.primary.data??j(),comparison:t.conversion.comparison.data??j(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return h({primary:t.customers.primary.data??M(),comparison:t.customers.comparison.data??M(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return h({primary:n.primary.data??fe(),comparison:n.comparison.data??fe(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function me({metricIds:e=E}){let{reportParams:t}=re(),n=(0,P.useMemo)(()=>{let t=new Set(e);return T.filter(e=>t.has(e.id))},[e]),i=(0,P.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=te(t,{enabled:i.has(`general`)}),{primary:o,comparison:s}=a,c=te({...t,filters:[oe]},{enabled:i.has(`booking`)}),{primary:l,comparison:u}=c,d=ie(t,{enabled:i.has(`visitors`)}),{primary:f,comparison:p}=d,m=ae(t,{enabled:i.has(`conversion`)}),{primary:h,comparison:g}=m,_=ee(t,{enabled:i.has(`customers`)}),{primary:v,comparison:y}=_,b=(0,P.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?c:null,i.has(`visitors`)?d:null,i.has(`conversion`)?m:null,i.has(`customers`)?_:null].filter(e=>e!==null),[i,a,c,d,m,_]),x=ne(b.some(e=>e.isError),b.map(e=>e.error).find(Boolean)??null,(0,P.useCallback)(()=>Promise.all(b.map(e=>e.refetch())),[b])),S=(0,P.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`visitors`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`conversion`?[h.data?.summary??{},g.data?.summary??{}]:e.metricType===`customers`?[v.data?.summary??{},y.data?.summary??{}]:[o.data?.summary??{},s.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,l.data,u.data,f.data,p.data,h.data,g.data,v.data,y.data,o.data,s.data]),C=(0,P.useMemo)(()=>({general:{primary:o,comparison:s},booking:{primary:l,comparison:u},visitors:{primary:f,comparison:p},conversion:{primary:h,comparison:g},customers:{primary:v,comparison:y}}),[o,s,l,u,f,p,h,g,v,y]),w=(0,P.useMemo)(()=>S.map(e=>{let t=pe(e,C);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:se(e.metricKey),description:e.description}}),[S,C]);if(x)return null;if(b.some(e=>e.isLoading&&!e.hasData))return(0,F.jsx)(ce,{});if(!w.length)return(0,F.jsx)(`div`,{className:k.emptyState,children:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)});let D=b.some(e=>e.isFetching&&e.hasData);return(0,F.jsx)(`div`,{className:k.widgetRoot,children:(0,F.jsx)(le,{metrics:w,dataFormat:I,loading:D,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)})})}function N({attributes:e={},setError:t}){return(0,F.jsx)(u,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(me,{metricIds:e.metrics})})}var P,F,I,he=t((()=>{l(),S(),i(),P=e(n(),1),D(),de(),F=a(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),L,ge=t((()=>{i(),s(),w(),D(),L={name:`jpa/store-performance`,title:r(`Store performance`,`jetpack-premium-analytics`),description:r(`Shows key store performance metrics at a glance.`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:C,elements:T.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:E}}}}));function R({withComparison:e=!1,preset:t=W,metrics:n=E}){return{reportParams:c(e,t),metrics:n}}function _e({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function z(e=E){return`[ ${e.map(e=>`'${e}'`).join(`, `)} ]`}function B(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${_e(e)},
\t\tmetrics: ${z(e.metrics)},
\t} }
/>`}function V({withComparison:e,preset:t,metrics:n}){return K(),(0,H.jsx)(N,{attributes:R({withComparison:e,preset:t,metrics:n})})}function ve({withComparison:e,preset:t,metrics:n,...r}){return K(),(0,H.jsx)(y,{...r,widgetType:q,renderModule:U,renderComponent:N,attributes:R({withComparison:e,preset:t,metrics:n})})}var H,U,W,G,K,q,J,Y,ye,X,Z,Q,$;t((()=>{l(),m(),f(),_(),b(),D(),he(),ge(),H=a(),g(),U=`storybook/store-performance`,W=`last-30-days`,G=p,K=()=>d.Legend,q={name:L.name,title:L.title,description:L.description,icon:L.icon,attributes:L.attributes,example:L.example},J={metrics:{control:`check`,options:E,description:`Store metrics to show as selectable tabs in the widget body.`}},Y=e=>(0,H.jsx)(`div`,{style:{width:`100%`,height:`420px`},children:(0,H.jsx)(e,{})}),ye={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:N,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...J},parameters:{docs:{description:{component:"Dashboard widget that displays key store performance metrics at a glance. Which metrics render as tabs is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer."}}}},X={render:V,args:{preset:W,withComparison:!1,metrics:E},decorators:[Y],parameters:{docs:{source:{transform:(e,t)=>B(t.args)}}}},Z={render:V,args:{preset:W,withComparison:!0,metrics:E},decorators:[Y],parameters:{docs:{source:{transform:(e,t)=>B(t.args)}}}},Q={render:e=>(0,H.jsx)(ve,{...e}),args:{...x,preset:W,withComparison:!0,metrics:E},argTypes:{...v,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...J},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
\twidgetType={ widgetDefinition }
\trenderModule="storybook/store-performance"
\trenderComponent={ StorePerformanceRender }
\tattributes={ {
\t\treportParams: getDefaultQueryParams( true ),
\t\tmetrics: ${z()},
\t} }
/>`}}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderStorePerformance,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false,
    metrics: DEFAULT_STORE_PERFORMANCE_METRICS
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
    withComparison: true,
    metrics: DEFAULT_STORE_PERFORMANCE_METRICS
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
    withComparison: true,
    metrics: DEFAULT_STORE_PERFORMANCE_METRICS
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
    },
    ...METRIC_ARG_TYPES
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
\\t\\tmetrics: \${getMetricsSource()},
\\t} }
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{X as Default,Q as WidgetDashboardWithWidget,Z as WithComparison,$ as __namedExportsOrder,ye as default};