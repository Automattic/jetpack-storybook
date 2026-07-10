import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Rt as o,n as s}from"./build-module-_6UNQmiR.js";import{Dt as c,a as ee,d as te,ft as ne,mt as re,ot as ie,p as l,s as u,wt as d}from"./hooks-D6hCAkf2.js";import{n as f,r as p}from"./line-chart-D6GEWJYm.js";import{l as m,t as h}from"./src-nQqIBmxK.js";import{Y as ae,it as oe,nt as g}from"./chart-tooltip-BbsSib7y.js";import{n as se}from"./widget-loading-overlay-D21I_rx2.js";import{t as ce}from"./metric-tabs-chart-BbxyMjAE.js";import{n as _,t as v}from"./register-report-mocks-DkrVC9w3.js";import{i as y,n as b,r as x,t as S}from"./widget-dashboard-with-widget-hi5wB5Sg.js";import{t as C}from"./src-CgKysIIZ.js";import{n as w,t as T}from"./src-C1ZRi4sr.js";var E,D,O=t((()=>{i(),E=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics`),metricType:`customers`,metricKey:`customers`}],D=E.map(e=>e.id)})),k,le,A,ue=t((()=>{k=`_widgetRoot_142ux_1`,le=`_emptyState_142ux_5`,A={widgetRoot:k,emptyState:le}}));function de(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function j(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function M(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function N(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function fe(e,t){if(e.metricType===`visitors`)return g({primary:t.visitors.primary.data??j(),comparison:t.visitors.comparison.data??j(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return g({primary:t.conversion.primary.data??M(),comparison:t.conversion.comparison.data??M(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return g({primary:t.customers.primary.data??N(),comparison:t.customers.comparison.data??N(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return g({primary:n.primary.data??de(),comparison:n.comparison.data??de(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function pe({metricIds:e=D}){let{reportParams:t}=te(),n=(0,F.useMemo)(()=>{let t=new Set(e);return E.filter(e=>t.has(e.id))},[e]),i=(0,F.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=d(t,{enabled:i.has(`general`)}),{primary:o,comparison:s}=a,c=d({...t,filters:[ae]},{enabled:i.has(`booking`)}),{primary:l,comparison:u}=c,f=ie(t,{enabled:i.has(`visitors`)}),{primary:p,comparison:m}=f,h=ne(t,{enabled:i.has(`conversion`)}),{primary:g,comparison:_}=h,v=re(t,{enabled:i.has(`customers`)}),{primary:y,comparison:b}=v,x=(0,F.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?c:null,i.has(`visitors`)?f:null,i.has(`conversion`)?h:null,i.has(`customers`)?v:null].filter(e=>e!==null),[i,a,c,f,h,v]),S=ee(x.some(e=>e.isError),x.map(e=>e.error).find(Boolean)??null,(0,F.useCallback)(()=>Promise.all(x.map(e=>e.refetch())),[x])),C=(0,F.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`visitors`?[p.data?.summary??{},m.data?.summary??{}]:e.metricType===`conversion`?[g.data?.summary??{},_.data?.summary??{}]:e.metricType===`customers`?[y.data?.summary??{},b.data?.summary??{}]:[o.data?.summary??{},s.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,l.data,u.data,p.data,m.data,g.data,_.data,y.data,b.data,o.data,s.data]),w=(0,F.useMemo)(()=>({general:{primary:o,comparison:s},booking:{primary:l,comparison:u},visitors:{primary:p,comparison:m},conversion:{primary:g,comparison:_},customers:{primary:y,comparison:b}}),[o,s,l,u,p,m,g,_,y,b]),T=(0,F.useMemo)(()=>C.map(e=>{let t=fe(e,w);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:oe(e.metricKey),description:e.description}}),[C,w]);if(S)return null;if(x.some(e=>e.isLoading&&!e.hasData))return(0,I.jsx)(se,{});if(!T.length)return(0,I.jsx)(`div`,{className:A.emptyState,children:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)});let O=x.some(e=>e.isFetching&&e.hasData);return(0,I.jsx)(`div`,{className:A.widgetRoot,children:(0,I.jsx)(ce,{metrics:T,dataFormat:L,loading:O,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)})})}function P({attributes:e={},setError:t}){return(0,I.jsx)(u,{attributes:e,setError:t,options:{from:`/`},children:(0,I.jsx)(pe,{metricIds:e.metrics})})}var F,I,L,me=t((()=>{l(),C(),i(),F=e(n(),1),O(),ue(),I=a(),L={type:`number`,options:{useMultipliers:!0,decimals:0}}})),R,he=t((()=>{i(),s(),T(),O(),R={name:`jpa/store-performance`,title:r(`Store performance`,`jetpack-premium-analytics`),description:r(`Shows key store performance metrics at a glance.`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:w,elements:E.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:D}}}}));function z({withComparison:e=!1,preset:t=G,metrics:n=D}){return{reportParams:c(e,t),metrics:n}}function ge({withComparison:e,preset:t}){let n=!!e,r=t??G;return!n&&r===G?`getDefaultQueryParams()`:n&&r===G?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function B(e=D){return`[ ${e.map(e=>`'${e}'`).join(`, `)} ]`}function V(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${ge(e)},
\t\tmetrics: ${B(e.metrics)},
\t} }
/>`}function H({withComparison:e,preset:t,metrics:n}){return q(),(0,U.jsx)(P,{attributes:z({withComparison:e,preset:t,metrics:n})})}function _e({withComparison:e,preset:t,metrics:n,...r}){return q(),(0,U.jsx)(b,{...r,widgetType:J,renderModule:W,renderComponent:P,attributes:z({withComparison:e,preset:t,metrics:n})})}var U,W,G,K,q,J,Y,X,ve,Z,Q,$,ye;t((()=>{l(),h(),p(),v(),x(),O(),me(),he(),U=a(),_(),W=`storybook/store-performance`,G=`last-30-days`,K=m,q=()=>f.Legend,J={name:R.name,title:R.title,description:R.description,icon:R.icon,attributes:R.attributes,example:R.example},Y={metrics:{control:`check`,options:D,description:`Store metrics to show as selectable tabs in the widget body.`}},X=e=>(0,U.jsx)(`div`,{style:{width:`100%`,height:`420px`},children:(0,U.jsx)(e,{})}),ve={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:P,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...Y},parameters:{docs:{description:{component:"Dashboard widget that displays key store performance metrics at a glance. Which metrics render as tabs is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer."}}}},Z={render:H,args:{preset:G,withComparison:!1,metrics:D},decorators:[X],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Q={render:H,args:{preset:G,withComparison:!0,metrics:D},decorators:[X],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},$={render:e=>(0,U.jsx)(_e,{...e}),args:{...S,preset:G,withComparison:!0,metrics:D},argTypes:{...y,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...Y},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
\twidgetType={ widgetDefinition }
\trenderModule="storybook/store-performance"
\trenderComponent={ StorePerformanceRender }
\tattributes={ {
\t\treportParams: getDefaultQueryParams( true ),
\t\tmetrics: ${B()},
\t} }
/>`}}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period changes and chart data.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},ye=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{Z as Default,$ as WidgetDashboardWithWidget,Q as WithComparison,ye as __namedExportsOrder,ve as default};