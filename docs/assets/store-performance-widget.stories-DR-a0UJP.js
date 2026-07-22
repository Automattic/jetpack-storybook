import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,w as s}from"./build-module-DmVuor49.js";import{n as c,r as l}from"./line-chart-BtYwhIAG.js";import{c as u,t as d}from"./src-DN9VFS2M.js";import{Ln as ee,Yn as f,dt as p,er as m,et as te,jn as ne,lt as re,st as h,zn as ie}from"./chart-tooltip-Dp0VEc09.js";import{t as ae}from"./metric-tabs-chart-CXg3H0QM.js";import{F as g,M as _,N as v,U as oe,z as y}from"./report-metric-4C1kNKUT.js";import{t as se}from"./widget-state-CGtL2PSn.js";import{C as b,S as x,T as S,b as ce,t as le,w as C,x as w}from"./src-B0pFHV8V.js";import{i as T,t as ue}from"./src-Vm-o0sC9.js";var E,D,O=t((()=>{i(),E=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics`),metricType:`customers`,metricKey:`customers`}],D=E.map(e=>e.id)})),de,fe,pe=t((()=>{de=`_widgetRoot_8wi56_1`,fe={widgetRoot:de}}));function k(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function A(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function me(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function he(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function ge(e,t){if(e.metricType===`visitors`)return h({primary:t.visitors.primary.data??A(),comparison:t.visitors.comparison.data??A(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return h({primary:t.conversion.primary.data??me(),comparison:t.conversion.comparison.data??me(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return h({primary:t.customers.primary.data??he(),comparison:t.customers.comparison.data??he(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return h({primary:n.primary.data??k(),comparison:n.comparison.data??k(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function _e({metricIds:e=D}){let{reportParams:t}=oe(),n=(0,M.useMemo)(()=>{let t=new Set(e);return E.filter(e=>t.has(e.id))},[e]),i=(0,M.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=f(t,{enabled:i.has(`general`)}),{primary:o,comparison:c}=a,l=f({...t,filters:[te]},{enabled:i.has(`booking`)}),{primary:u,comparison:d}=l,p=ne(t,{enabled:i.has(`visitors`)}),{primary:m,comparison:h}=p,g=ee(t,{enabled:i.has(`conversion`)}),{primary:_,comparison:v}=g,y=ie(t,{enabled:i.has(`customers`)}),{primary:b,comparison:x}=y,S=(0,M.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?l:null,i.has(`visitors`)?p:null,i.has(`conversion`)?g:null,i.has(`customers`)?y:null].filter(e=>e!==null),[i,a,l,p,g,y]),ce=S.some(e=>e.isError&&!e.hasData),le=(0,M.useCallback)(()=>Promise.all(S.map(e=>e.refetch())),[S]),C=(0,M.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[u.data?.summary??{},d.data?.summary??{}]:e.metricType===`visitors`?[m.data?.summary??{},h.data?.summary??{}]:e.metricType===`conversion`?[_.data?.summary??{},v.data?.summary??{}]:e.metricType===`customers`?[b.data?.summary??{},x.data?.summary??{}]:[o.data?.summary??{},c.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,u.data,d.data,m.data,h.data,_.data,v.data,b.data,x.data,o.data,c.data]),w=(0,M.useMemo)(()=>({general:{primary:o,comparison:c},booking:{primary:u,comparison:d},visitors:{primary:m,comparison:h},conversion:{primary:_,comparison:v},customers:{primary:b,comparison:x}}),[o,c,u,d,m,h,_,v,b,x]),T=(0,M.useMemo)(()=>C.map(e=>{let t=ge(e,w);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:re(e.metricKey),description:e.description}}),[C,w]),ue=S.some(e=>e.isLoading&&!e.hasData),O=S.some(e=>e.isFetching);return(0,N.jsx)(`div`,{className:fe.widgetRoot,children:(0,N.jsx)(se,{isLoading:ue,isError:ce,isEmpty:!T.length,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:le}]},empty:{icon:s,description:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)},renderLoading:(0,N.jsx)(ae,{metrics:T,dataFormat:P,loading:!0,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)}),children:(0,N.jsx)(ae,{metrics:T,dataFormat:P,loading:O,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)})})})}function j({attributes:e={}}){return(0,N.jsx)(y,{attributes:e,options:{from:`/`},children:(0,N.jsx)(_e,{metricIds:e.metrics})})}var M,N,P,ve=t((()=>{p(),le(),i(),o(),M=e(n(),1),O(),pe(),N=a(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,ye=t((()=>{i(),o(),ue(),O(),F={name:`jpa/store-performance`,title:r(`Store performance`,`jetpack-premium-analytics`),help:{content:r(`Shows key store performance metrics at a glance.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:T,elements:E.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:D}}}}));function I({withComparison:e=!1,preset:t=U,metrics:n=D}){return{reportParams:m(e,t),metrics:n}}function be({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function L(e=D){return`[ ${e.map(e=>`'${e}'`).join(`, `)} ]`}function R(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${be(e)},
\t\tmetrics: ${L(e.metrics)},
\t} }
/>`}function z({withComparison:e,preset:t,metrics:n}){return G(),(0,H.jsx)(j,{attributes:I({withComparison:e,preset:t,metrics:n})})}function B(e,t=D){return G(),(0,H.jsx)(j,{attributes:I({withComparison:!1,preset:e,metrics:t})})}function V(e){we.forEach(t=>g(t,e))}function xe({withComparison:e,preset:t,metrics:n,...r}){return G(),(0,H.jsx)(b,{...r,widgetType:Ce,renderModule:Se,renderComponent:j,attributes:I({withComparison:e,preset:t,metrics:n})})}var H,Se,U,W,G,Ce,K,we,Te,q,J,Y,X,Z,Q,$;t((()=>{p(),d(),l(),_(),C(),ce(),O(),ve(),ye(),H=a(),v(),Se=`storybook/store-performance`,U=`last-30-days`,W=u,G=()=>c.Legend,Ce={name:F.name,title:F.title,help:F.help,icon:F.icon,attributes:F.attributes,example:F.example},K={metrics:{control:`check`,options:D,description:`Store metrics to show as selectable tabs in the widget body.`}},we=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Te={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:j,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...K},parameters:{docs:{description:{component:"Dashboard widget that displays key store performance metrics at a glance. Which metrics render as tabs is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer."}}}},q={render:z,args:{preset:U,withComparison:!1,metrics:D},decorators:[w],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},J={render:z,args:{preset:U,withComparison:!0,metrics:D},decorators:[w],parameters:{docs:{source:{transform:(e,t)=>R(t.args)}}}},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(V(`loading`),()=>V(null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(V(`error`),()=>V(null))},Z={render:()=>B(`last-365-days`,[]),tags:[`!autodocs`],decorators:[w]},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{...x,preset:U,withComparison:!0,metrics:D},argTypes:{...S,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...K},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
\twidgetType={ widgetDefinition }
\trenderModule="storybook/store-performance"
\trenderComponent={ StorePerformanceRender }
\tattributes={ {
\t\treportParams: getDefaultQueryParams( true ),
\t\tmetrics: ${L()},
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