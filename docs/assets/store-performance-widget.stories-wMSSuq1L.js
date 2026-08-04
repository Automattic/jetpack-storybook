import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,w as ee}from"./build-module-DoJYX5DX.js";import{G as s,W as c,Z as l,q as u,tt as te}from"./report-metric-CRKJqdHE.js";import{n as d,r as f}from"./line-chart-B0jXHQ87.js";import{t as p,x as m}from"./src-Dven8apX.js";import{Mr as ne,Vn as re,Yn as ie,ar as h,ft as ae,qn as oe,ur as g,xt as _,yt as v}from"./chart-tooltip-DSIbITsl.js";import{t as se}from"./metric-tabs-chart-B6zWhJOz.js";import{t as ce}from"./widget-state-DOG7yoq9.js";import{C as y,D as b,E as x,S,T as le,b as C,t as w,w as T,x as E}from"./src-DXL-E_J3.js";import{i as ue,t as de}from"./src-DpOnc3LU.js";var D,O,k=t((()=>{i(),D=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`}],O=D.map(e=>e.id)})),fe,pe,me=t((()=>{fe=`_widgetRoot_8wi56_1`,pe={widgetRoot:fe}}));function he(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function ge(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function _e(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function A(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function ve(e,t){if(e.metricType===`visitors`)return v({primary:t.visitors.primary.data??ge(),comparison:t.visitors.comparison.data??ge(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return v({primary:t.conversion.primary.data??_e(),comparison:t.conversion.comparison.data??_e(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return v({primary:t.customers.primary.data??A(),comparison:t.customers.comparison.data??A(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return v({primary:n.primary.data??he(),comparison:n.comparison.data??he(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function ye({metricIds:e=O}){let{reportParams:t}=te(),n=(0,M.useMemo)(()=>{let t=new Set(e);return D.filter(e=>t.has(e.id))},[e]),i=(0,M.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=h(t,{enabled:i.has(`general`)}),{primary:o,comparison:s}=a,c=h({...t,filters:[ae]},{enabled:i.has(`booking`)}),{primary:l,comparison:u}=c,d=re(t,{enabled:i.has(`visitors`)}),{primary:f,comparison:p}=d,m=oe(t,{enabled:i.has(`conversion`)}),{primary:g,comparison:_}=m,v=ie(t,{enabled:i.has(`customers`)}),{primary:y,comparison:b}=v,x=(0,M.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?c:null,i.has(`visitors`)?d:null,i.has(`conversion`)?m:null,i.has(`customers`)?v:null].filter(e=>e!==null),[i,a,c,d,m,v]),S=x.some(e=>e.isError&&!e.hasData),le=(0,M.useCallback)(()=>Promise.all(x.map(e=>e.refetch())),[x]),C=(0,M.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`visitors`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`conversion`?[g.data?.summary??{},_.data?.summary??{}]:e.metricType===`customers`?[y.data?.summary??{},b.data?.summary??{}]:[o.data?.summary??{},s.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,l.data,u.data,f.data,p.data,g.data,_.data,y.data,b.data,o.data,s.data]),w=(0,M.useMemo)(()=>({general:{primary:o,comparison:s},booking:{primary:l,comparison:u},visitors:{primary:f,comparison:p},conversion:{primary:g,comparison:_},customers:{primary:y,comparison:b}}),[o,s,l,u,f,p,g,_,y,b]),T=(0,M.useMemo)(()=>C.map(e=>{let t=ve(e,w);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:ne(e.metricKey),description:e.description}}),[C,w]),E=x.some(e=>e.isLoading&&!e.hasData),ue=x.some(e=>e.isFetching);return(0,N.jsx)(`div`,{className:pe.widgetRoot,children:(0,N.jsx)(ce,{isLoading:E,isError:S,isEmpty:!T.length,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:le}]},empty:{icon:ee,description:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(se,{metrics:T,dataFormat:P,loading:!0,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)}),children:(0,N.jsx)(se,{metrics:T,dataFormat:P,loading:ue,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)})})})}function j({attributes:e={}}){return(0,N.jsx)(l,{attributes:e,options:{from:`/`},children:(0,N.jsx)(ye,{metricIds:e.metrics})})}var M,N,P,be=t((()=>{_(),w(),i(),o(),M=e(n(),1),k(),me(),N=a(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,xe=t((()=>{i(),o(),de(),k(),F={icon:ee,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ue,elements:D.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:O}}}})),I,L,R,z,Se,Ce,we=t((()=>{I=`jpa/store-performance`,L=`Store performance`,R=`Shows key store performance metrics at a glance.`,z={content:`Shows key store performance metrics at a glance.`},Se=`store`,Ce={name:I,title:L,description:R,help:z,category:Se}}));function B({withComparison:e=!1,preset:t=W,metrics:n=O}){return{reportParams:g(e,t),metrics:n}}function Te({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function Ee(e=O){return`[ ${e.map(e=>`'${e}'`).join(`, `)} ]`}function De(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${Te(e)},
\t\tmetrics: ${Ee(e.metrics)},
\t} }
/>`}function Oe({withComparison:e,preset:t,metrics:n}){return K(),(0,U.jsx)(j,{attributes:B({withComparison:e,preset:t,metrics:n})})}function V(e,t=O){return K(),(0,U.jsx)(j,{attributes:B({withComparison:!1,preset:e,metrics:t})})}function H(e){Me.forEach(t=>u(t,e))}function ke({withComparison:e,preset:t,metrics:n,...r}){return K(),(0,U.jsx)(le,{...r,widgetType:je,renderModule:Ae,renderComponent:j,attributes:B({withComparison:e,preset:t,metrics:n})})}var U,Ae,W,G,K,je,q,Me,Ne,J,Y,X,Z,Q,$,Pe;t((()=>{_(),p(),f(),c(),x(),y(),C(),k(),be(),xe(),we(),U=a(),s(),Ae=`storybook/store-performance`,W=`last-30-days`,G=m,K=()=>d.Legend,je=S(Ce,F),q={metrics:{control:`check`,options:O,description:`Store metrics to show as selectable tabs in the widget body.`}},Me=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Ne={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:j,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...q},parameters:{docs:{description:{component:"Dashboard widget that displays key store performance metrics at a glance. Which metrics render as tabs is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer."}}}},J={render:Oe,args:{preset:W,withComparison:!1,metrics:O},decorators:[E],parameters:{docs:{source:{transform:(e,t)=>De(t.args)}}}},Y={render:Oe,args:{preset:W,withComparison:!0,metrics:O},decorators:[E],parameters:{docs:{source:{transform:(e,t)=>De(t.args)}}}},X={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(H(`loading`),()=>H(null))},Z={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(H(`error`),()=>H(null))},Q={render:()=>V(`last-365-days`,[]),tags:[`!autodocs`],decorators:[E]},$={render:e=>(0,U.jsx)(ke,{...e}),args:{...T,preset:W,withComparison:!0,metrics:O},argTypes:{...b,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...q},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
\twidgetType={ widgetDefinition }
\trenderModule="storybook/store-performance"
\trenderComponent={ StorePerformanceRender }
\tattributes={ {
\t\treportParams: getDefaultQueryParams( true ),
\t\tmetrics: ${Ee()},
\t} }
/>`}}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period changes and chart data.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderStorePerformanceOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setAllReportMockStates('loading');
    return () => setAllReportMockStates(null);
  }
}`,...X.parameters?.docs?.source},description:{story:`First load: every metric report is in flight, so the widget shows its loading
state. The mocks are forced to never resolve for the duration of this story.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderStorePerformanceOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setAllReportMockStates('error');
    return () => setAllReportMockStates(null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Every metric report failed: the widget shows its error state with a Retry
action (which re-runs all queries — still mocked as failing while this story
is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderStorePerformanceOnPreset('last-365-days', []),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas]
}`,...Q.parameters?.docs?.source},description:{story:`No metrics selected: the widget has no tabs to show, so it renders its empty
state before fetching reports.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Pe=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,Y as WithComparison,Pe as __namedExportsOrder,Ne as default};