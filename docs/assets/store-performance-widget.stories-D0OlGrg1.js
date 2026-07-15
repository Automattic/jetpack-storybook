import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Rt as o,n as s}from"./build-module-C6Ow06jV.js";import{n as c,r as l}from"./line-chart-C5USRItk.js";import{l as u,t as d}from"./src-B6u8f4D0.js";import{$ as ee,Nn as te,Tn as ne,Un as f,ct as re,jn as ie,ot as p,qn as m,ut as h}from"./chart-tooltip-BIiKhH0l.js";import{t as g}from"./metric-tabs-chart-CVuzXJyj.js";import{C as _,N as ae,S as v,T as y,k as b}from"./report-metric-D7PFtooA.js";import{t as oe}from"./widget-state-CsCQdmg9.js";import{S as x,b as S,t as C,x as w,y as T}from"./src-DMKl_JFZ.js";import{n as E,r as D}from"./with-widget-canvas-Dz43KNHY.js";import{n as O,t as se}from"./src-DHVerfrF.js";var k,A,j=t((()=>{i(),k=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics`),metricType:`customers`,metricKey:`customers`}],A=k.map(e=>e.id)})),ce,M,le=t((()=>{ce=`_widgetRoot_8wi56_1`,M={widgetRoot:ce}}));function ue(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function de(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function fe(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function pe(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function me(e,t){if(e.metricType===`visitors`)return p({primary:t.visitors.primary.data??de(),comparison:t.visitors.comparison.data??de(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return p({primary:t.conversion.primary.data??fe(),comparison:t.conversion.comparison.data??fe(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return p({primary:t.customers.primary.data??pe(),comparison:t.customers.comparison.data??pe(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return p({primary:n.primary.data??ue(),comparison:n.comparison.data??ue(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function he({metricIds:e=A}){let{reportParams:t}=ae(),n=(0,P.useMemo)(()=>{let t=new Set(e);return k.filter(e=>t.has(e.id))},[e]),i=(0,P.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=f(t,{enabled:i.has(`general`)}),{primary:s,comparison:c}=a,l=f({...t,filters:[ee]},{enabled:i.has(`booking`)}),{primary:u,comparison:d}=l,p=ne(t,{enabled:i.has(`visitors`)}),{primary:m,comparison:h}=p,_=ie(t,{enabled:i.has(`conversion`)}),{primary:v,comparison:y}=_,b=te(t,{enabled:i.has(`customers`)}),{primary:x,comparison:S}=b,C=(0,P.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?l:null,i.has(`visitors`)?p:null,i.has(`conversion`)?_:null,i.has(`customers`)?b:null].filter(e=>e!==null),[i,a,l,p,_,b]),w=C.some(e=>e.isError&&!e.hasData),T=(0,P.useCallback)(()=>Promise.all(C.map(e=>e.refetch())),[C]),E=(0,P.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[u.data?.summary??{},d.data?.summary??{}]:e.metricType===`visitors`?[m.data?.summary??{},h.data?.summary??{}]:e.metricType===`conversion`?[v.data?.summary??{},y.data?.summary??{}]:e.metricType===`customers`?[x.data?.summary??{},S.data?.summary??{}]:[s.data?.summary??{},c.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,u.data,d.data,m.data,h.data,v.data,y.data,x.data,S.data,s.data,c.data]),D=(0,P.useMemo)(()=>({general:{primary:s,comparison:c},booking:{primary:u,comparison:d},visitors:{primary:m,comparison:h},conversion:{primary:v,comparison:y},customers:{primary:x,comparison:S}}),[s,c,u,d,m,h,v,y,x,S]),O=(0,P.useMemo)(()=>E.map(e=>{let t=me(e,D);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:re(e.metricKey),description:e.description}}),[E,D]),se=C.some(e=>e.isLoading&&!e.hasData),j=C.some(e=>e.isFetching);return(0,F.jsx)(`div`,{className:M.widgetRoot,children:(0,F.jsx)(oe,{isLoading:se,isError:w,isEmpty:!O.length,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:T}]},empty:{icon:o,description:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)},renderLoading:(0,F.jsx)(g,{metrics:O,dataFormat:I,loading:!0,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)}),children:(0,F.jsx)(g,{metrics:O,dataFormat:I,loading:j,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)})})})}function N({attributes:e={}}){return(0,F.jsx)(b,{attributes:e,options:{from:`/`},children:(0,F.jsx)(he,{metricIds:e.metrics})})}var P,F,I,ge=t((()=>{h(),C(),i(),s(),P=e(n(),1),j(),le(),F=a(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),L,_e=t((()=>{i(),s(),se(),j(),L={name:`jpa/store-performance`,title:r(`Store performance`,`jetpack-premium-analytics`),help:{content:r(`Shows key store performance metrics at a glance.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:O,elements:k.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:A}}}}));function R({withComparison:e=!1,preset:t=U,metrics:n=A}){return{reportParams:m(e,t),metrics:n}}function ve({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function z(e=A){return`[ ${e.map(e=>`'${e}'`).join(`, `)} ]`}function ye(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${ve(e)},
\t\tmetrics: ${z(e.metrics)},
\t} }
/>`}function be({withComparison:e,preset:t,metrics:n}){return G(),(0,H.jsx)(N,{attributes:R({withComparison:e,preset:t,metrics:n})})}function B(e,t=A){return G(),(0,H.jsx)(N,{attributes:R({withComparison:!1,preset:e,metrics:t})})}function V(e){we.forEach(t=>y(t,e))}function xe({withComparison:e,preset:t,metrics:n,...r}){return G(),(0,H.jsx)(S,{...r,widgetType:Ce,renderModule:Se,renderComponent:N,attributes:R({withComparison:e,preset:t,metrics:n})})}var H,Se,U,W,G,Ce,K,we,Te,q,J,Y,X,Z,Q,$;t((()=>{h(),d(),l(),v(),w(),E(),j(),ge(),_e(),H=a(),_(),Se=`storybook/store-performance`,U=`last-30-days`,W=u,G=()=>c.Legend,Ce={name:L.name,title:L.title,help:L.help,icon:L.icon,attributes:L.attributes,example:L.example},K={metrics:{control:`check`,options:A,description:`Store metrics to show as selectable tabs in the widget body.`}},we=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Te={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:N,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...K},parameters:{docs:{description:{component:"Dashboard widget that displays key store performance metrics at a glance. Which metrics render as tabs is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer."}}}},q={render:be,args:{preset:U,withComparison:!1,metrics:A},decorators:[D],parameters:{docs:{source:{transform:(e,t)=>ye(t.args)}}}},J={render:be,args:{preset:U,withComparison:!0,metrics:A},decorators:[D],parameters:{docs:{source:{transform:(e,t)=>ye(t.args)}}}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(V(`loading`),()=>V(null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(V(`error`),()=>V(null))},Z={render:()=>B(`last-365-days`,[]),tags:[`!autodocs`],decorators:[D]},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{...T,preset:U,withComparison:!0,metrics:A},argTypes:{...x,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...K},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
\twidgetType={ widgetDefinition }
\trenderModule="storybook/store-performance"
\trenderComponent={ StorePerformanceRender }
\tattributes={ {
\t\treportParams: getDefaultQueryParams( true ),
\t\tmetrics: ${z()},
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