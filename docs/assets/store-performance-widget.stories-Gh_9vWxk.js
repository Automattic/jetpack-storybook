import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,w as ee}from"./build-module-DmVuor49.js";import{n as s,r as c}from"./line-chart-CUSffC0Z.js";import{c as l,t as u}from"./src-DN9VFS2M.js";import{$n as te,Fn as ne,Un as re,Vn as ie,dt as d,ht as f,ir as p,it as ae,pt as oe}from"./chart-tooltip-BvKnA4Ej.js";import{t as m}from"./metric-tabs-chart-DOxDeh8u.js";import{F as h,M as g,N as _,U as se,z as v}from"./report-metric-BBgOiYJZ.js";import{t as ce}from"./widget-state-Dq0PZ7To.js";import{C as y,S as b,T as x,b as S,t as C,w,x as T}from"./src-Vd2hm5Bb.js";import{i as E,t as le}from"./src-CPsF629a.js";var D,O,k=t((()=>{i(),D=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics`),metricType:`customers`,metricKey:`customers`}],O=D.map(e=>e.id)})),ue,de,fe=t((()=>{ue=`_widgetRoot_8wi56_1`,de={widgetRoot:ue}}));function pe(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function me(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function he(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function ge(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function _e(e,t){if(e.metricType===`visitors`)return d({primary:t.visitors.primary.data??me(),comparison:t.visitors.comparison.data??me(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return d({primary:t.conversion.primary.data??he(),comparison:t.conversion.comparison.data??he(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return d({primary:t.customers.primary.data??ge(),comparison:t.customers.comparison.data??ge(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return d({primary:n.primary.data??pe(),comparison:n.comparison.data??pe(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function ve({metricIds:e=O}){let{reportParams:t}=se(),n=(0,j.useMemo)(()=>{let t=new Set(e);return D.filter(e=>t.has(e.id))},[e]),i=(0,j.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=te(t,{enabled:i.has(`general`)}),{primary:o,comparison:s}=a,c=te({...t,filters:[ae]},{enabled:i.has(`booking`)}),{primary:l,comparison:u}=c,d=ne(t,{enabled:i.has(`visitors`)}),{primary:f,comparison:p}=d,h=ie(t,{enabled:i.has(`conversion`)}),{primary:g,comparison:_}=h,v=re(t,{enabled:i.has(`customers`)}),{primary:y,comparison:b}=v,x=(0,j.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?c:null,i.has(`visitors`)?d:null,i.has(`conversion`)?h:null,i.has(`customers`)?v:null].filter(e=>e!==null),[i,a,c,d,h,v]),S=x.some(e=>e.isError&&!e.hasData),C=(0,j.useCallback)(()=>Promise.all(x.map(e=>e.refetch())),[x]),w=(0,j.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`visitors`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`conversion`?[g.data?.summary??{},_.data?.summary??{}]:e.metricType===`customers`?[y.data?.summary??{},b.data?.summary??{}]:[o.data?.summary??{},s.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,l.data,u.data,f.data,p.data,g.data,_.data,y.data,b.data,o.data,s.data]),T=(0,j.useMemo)(()=>({general:{primary:o,comparison:s},booking:{primary:l,comparison:u},visitors:{primary:f,comparison:p},conversion:{primary:g,comparison:_},customers:{primary:y,comparison:b}}),[o,s,l,u,f,p,g,_,y,b]),E=(0,j.useMemo)(()=>w.map(e=>{let t=_e(e,T);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:oe(e.metricKey),description:e.description}}),[w,T]),le=x.some(e=>e.isLoading&&!e.hasData),k=x.some(e=>e.isFetching);return(0,M.jsx)(`div`,{className:de.widgetRoot,children:(0,M.jsx)(ce,{isLoading:le,isError:S,isEmpty:!E.length,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:C}]},empty:{icon:ee,description:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)},renderLoading:(0,M.jsx)(m,{metrics:E,dataFormat:N,loading:!0,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)}),children:(0,M.jsx)(m,{metrics:E,dataFormat:N,loading:k,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)})})})}function A({attributes:e={}}){return(0,M.jsx)(v,{attributes:e,options:{from:`/`},children:(0,M.jsx)(ve,{metricIds:e.metrics})})}var j,M,N,ye=t((()=>{f(),C(),i(),o(),j=e(n(),1),k(),fe(),M=a(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,be=t((()=>{i(),o(),le(),k(),P={name:`jpa/store-performance`,title:r(`Store performance`,`jetpack-premium-analytics`),help:{content:r(`Shows key store performance metrics at a glance.`,`jetpack-premium-analytics`)},icon:ee,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:E,elements:D.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:O}}}}));function F({withComparison:e=!1,preset:t=H,metrics:n=O}){return{reportParams:p(e,t),metrics:n}}function xe({withComparison:e,preset:t}){let n=!!e,r=t??H;return!n&&r===H?`getDefaultQueryParams()`:n&&r===H?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function I(e=O){return`[ ${e.map(e=>`'${e}'`).join(`, `)} ]`}function L(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${xe(e)},
\t\tmetrics: ${I(e.metrics)},
\t} }
/>`}function R({withComparison:e,preset:t,metrics:n}){return W(),(0,V.jsx)(A,{attributes:F({withComparison:e,preset:t,metrics:n})})}function z(e,t=O){return W(),(0,V.jsx)(A,{attributes:F({withComparison:!1,preset:e,metrics:t})})}function B(e){we.forEach(t=>h(t,e))}function Se({withComparison:e,preset:t,metrics:n,...r}){return W(),(0,V.jsx)(y,{...r,widgetType:G,renderModule:Ce,renderComponent:A,attributes:F({withComparison:e,preset:t,metrics:n})})}var V,Ce,H,U,W,G,K,we,Te,q,J,Y,X,Z,Q,$;t((()=>{f(),u(),c(),g(),w(),S(),k(),ye(),be(),V=a(),_(),Ce=`storybook/store-performance`,H=`last-30-days`,U=l,W=()=>s.Legend,G={name:P.name,title:P.title,help:P.help,icon:P.icon,attributes:P.attributes,example:P.example},K={metrics:{control:`check`,options:O,description:`Store metrics to show as selectable tabs in the widget body.`}},we=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Te={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:A,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...K},parameters:{docs:{description:{component:"Dashboard widget that displays key store performance metrics at a glance. Which metrics render as tabs is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer."}}}},q={render:R,args:{preset:H,withComparison:!1,metrics:O},decorators:[T],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},J={render:R,args:{preset:H,withComparison:!0,metrics:O},decorators:[T],parameters:{docs:{source:{transform:(e,t)=>L(t.args)}}}},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(B(`loading`),()=>B(null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(B(`error`),()=>B(null))},Z={render:()=>z(`last-365-days`,[]),tags:[`!autodocs`],decorators:[T]},Q={render:e=>(0,V.jsx)(Se,{...e}),args:{...b,preset:H,withComparison:!0,metrics:O},argTypes:{...x,preset:{control:`select`,options:U,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...K},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
\twidgetType={ widgetDefinition }
\trenderModule="storybook/store-performance"
\trenderComponent={ StorePerformanceRender }
\tattributes={ {
\t\treportParams: getDefaultQueryParams( true ),
\t\tmetrics: ${I()},
\t} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period changes and chart data.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderStorePerformanceOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setAllReportMockStates('loading');
    return () => setAllReportMockStates(null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: every metric report is in flight, so the widget shows its loading
state. The mocks are forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderStorePerformanceOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setAllReportMockStates('error');
    return () => setAllReportMockStates(null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Every metric report failed: the widget shows its error state with a Retry
action (which re-runs all queries — still mocked as failing while this story
is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderStorePerformanceOnPreset('last-365-days', []),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`No metrics selected: the widget has no tabs to show, so it renders its empty
state before fetching reports.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,Te as default};