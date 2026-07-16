import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Rt as o,n as s}from"./build-module-C6Ow06jV.js";import{n as c,r as l}from"./line-chart-DiunzSjy.js";import{c as u,t as d}from"./src-AIpdnvxP.js";import{$ as ee,Dn as te,Fn as ne,Gn as re,Nn as ie,Yn as f,ct as ae,ot as p,ut as m}from"./chart-tooltip-BvA5_2yM.js";import{t as h}from"./metric-tabs-chart-C7woxnqE.js";import{C as g,N as oe,S as _,T as v,k as y}from"./report-metric-DCN8A8Hp.js";import{t as se}from"./widget-state-DxFYrYCq.js";import{S as b,b as x,t as S,x as C,y as ce}from"./src-Bepsc1lm.js";import{n as w,r as T}from"./with-widget-canvas-Dz43KNHY.js";import{n as E,t as D}from"./src-DHVerfrF.js";var O,k,A=t((()=>{i(),O=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics`),metricType:`customers`,metricKey:`customers`}],k=O.map(e=>e.id)})),j,le,ue=t((()=>{j=`_widgetRoot_8wi56_1`,le={widgetRoot:j}}));function de(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function fe(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function pe(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function me(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function he(e,t){if(e.metricType===`visitors`)return p({primary:t.visitors.primary.data??fe(),comparison:t.visitors.comparison.data??fe(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return p({primary:t.conversion.primary.data??pe(),comparison:t.conversion.comparison.data??pe(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return p({primary:t.customers.primary.data??me(),comparison:t.customers.comparison.data??me(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return p({primary:n.primary.data??de(),comparison:n.comparison.data??de(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function ge({metricIds:e=k}){let{reportParams:t}=oe(),n=(0,N.useMemo)(()=>{let t=new Set(e);return O.filter(e=>t.has(e.id))},[e]),i=(0,N.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=re(t,{enabled:i.has(`general`)}),{primary:s,comparison:c}=a,l=re({...t,filters:[ee]},{enabled:i.has(`booking`)}),{primary:u,comparison:d}=l,f=te(t,{enabled:i.has(`visitors`)}),{primary:p,comparison:m}=f,g=ie(t,{enabled:i.has(`conversion`)}),{primary:_,comparison:v}=g,y=ne(t,{enabled:i.has(`customers`)}),{primary:b,comparison:x}=y,S=(0,N.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?l:null,i.has(`visitors`)?f:null,i.has(`conversion`)?g:null,i.has(`customers`)?y:null].filter(e=>e!==null),[i,a,l,f,g,y]),C=S.some(e=>e.isError&&!e.hasData),ce=(0,N.useCallback)(()=>Promise.all(S.map(e=>e.refetch())),[S]),w=(0,N.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[u.data?.summary??{},d.data?.summary??{}]:e.metricType===`visitors`?[p.data?.summary??{},m.data?.summary??{}]:e.metricType===`conversion`?[_.data?.summary??{},v.data?.summary??{}]:e.metricType===`customers`?[b.data?.summary??{},x.data?.summary??{}]:[s.data?.summary??{},c.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,u.data,d.data,p.data,m.data,_.data,v.data,b.data,x.data,s.data,c.data]),T=(0,N.useMemo)(()=>({general:{primary:s,comparison:c},booking:{primary:u,comparison:d},visitors:{primary:p,comparison:m},conversion:{primary:_,comparison:v},customers:{primary:b,comparison:x}}),[s,c,u,d,p,m,_,v,b,x]),E=(0,N.useMemo)(()=>w.map(e=>{let t=he(e,T);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:ae(e.metricKey),description:e.description}}),[w,T]),D=S.some(e=>e.isLoading&&!e.hasData),A=S.some(e=>e.isFetching);return(0,P.jsx)(`div`,{className:le.widgetRoot,children:(0,P.jsx)(se,{isLoading:D,isError:C,isEmpty:!E.length,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:ce}]},empty:{icon:o,description:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)},renderLoading:(0,P.jsx)(h,{metrics:E,dataFormat:F,loading:!0,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)}),children:(0,P.jsx)(h,{metrics:E,dataFormat:F,loading:A,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)})})})}function M({attributes:e={}}){return(0,P.jsx)(y,{attributes:e,options:{from:`/`},children:(0,P.jsx)(ge,{metricIds:e.metrics})})}var N,P,F,_e=t((()=>{m(),S(),i(),s(),N=e(n(),1),A(),ue(),P=a(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,ve=t((()=>{i(),s(),D(),A(),I={name:`jpa/store-performance`,title:r(`Store performance`,`jetpack-premium-analytics`),help:{content:r(`Shows key store performance metrics at a glance.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:E,elements:O.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:k}}}}));function L({withComparison:e=!1,preset:t=U,metrics:n=k}){return{reportParams:f(e,t),metrics:n}}function ye({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function R(e=k){return`[ ${e.map(e=>`'${e}'`).join(`, `)} ]`}function z(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${ye(e)},
\t\tmetrics: ${R(e.metrics)},
\t} }
/>`}function be({withComparison:e,preset:t,metrics:n}){return G(),(0,H.jsx)(M,{attributes:L({withComparison:e,preset:t,metrics:n})})}function B(e,t=k){return G(),(0,H.jsx)(M,{attributes:L({withComparison:!1,preset:e,metrics:t})})}function V(e){we.forEach(t=>v(t,e))}function xe({withComparison:e,preset:t,metrics:n,...r}){return G(),(0,H.jsx)(x,{...r,widgetType:Ce,renderModule:Se,renderComponent:M,attributes:L({withComparison:e,preset:t,metrics:n})})}var H,Se,U,W,G,Ce,K,we,Te,q,J,Y,X,Z,Q,$;t((()=>{m(),d(),l(),_(),C(),w(),A(),_e(),ve(),H=a(),g(),Se=`storybook/store-performance`,U=`last-30-days`,W=u,G=()=>c.Legend,Ce={name:I.name,title:I.title,help:I.help,icon:I.icon,attributes:I.attributes,example:I.example},K={metrics:{control:`check`,options:k,description:`Store metrics to show as selectable tabs in the widget body.`}},we=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Te={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:M,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...K},parameters:{docs:{description:{component:"Dashboard widget that displays key store performance metrics at a glance. Which metrics render as tabs is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer."}}}},q={render:be,args:{preset:U,withComparison:!1,metrics:k},decorators:[T],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},J={render:be,args:{preset:U,withComparison:!0,metrics:k},decorators:[T],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(V(`loading`),()=>V(null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(V(`error`),()=>V(null))},Z={render:()=>B(`last-365-days`,[]),tags:[`!autodocs`],decorators:[T]},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{...ce,preset:U,withComparison:!0,metrics:k},argTypes:{...b,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...K},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
\twidgetType={ widgetDefinition }
\trenderModule="storybook/store-performance"
\trenderComponent={ StorePerformanceRender }
\tattributes={ {
\t\treportParams: getDefaultQueryParams( true ),
\t\tmetrics: ${R()},
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