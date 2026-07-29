import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,w as s}from"./build-module-DmVuor49.js";import{n as c,r as l}from"./line-chart-CExzlTbm.js";import{l as u,t as d}from"./src-WOZhCJE0.js";import{Ct as f,Un as ee,Yn as te,Zn as ne,fr as p,ft as re,sr as m,xt as ie,yt as h}from"./chart-tooltip-D7plKCxf.js";import{t as g}from"./metric-tabs-chart-BQCMl8SD.js";import{I as _,L as v,U as y,q as ae,z as b}from"./report-metric-8obpPIEQ.js";import{t as oe}from"./widget-state-BOgQwd_o.js";import{C as x,D as S,E as C,S as w,T as se,b as T,t as E,w as D,x as O}from"./src-BYeXAbTX.js";import{i as ce,t as le}from"./src-KfxXDCVU.js";var k,A,j=t((()=>{i(),k=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`}],A=k.map(e=>e.id)})),ue,de,fe=t((()=>{ue=`_widgetRoot_8wi56_1`,de={widgetRoot:ue}}));function pe(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function me(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function he(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function M(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function ge(e,t){if(e.metricType===`visitors`)return h({primary:t.visitors.primary.data??me(),comparison:t.visitors.comparison.data??me(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return h({primary:t.conversion.primary.data??he(),comparison:t.conversion.comparison.data??he(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return h({primary:t.customers.primary.data??M(),comparison:t.customers.comparison.data??M(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return h({primary:n.primary.data??pe(),comparison:n.comparison.data??pe(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function _e({metricIds:e=A}){let{reportParams:t}=ae(),n=(0,P.useMemo)(()=>{let t=new Set(e);return k.filter(e=>t.has(e.id))},[e]),i=(0,P.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=m(t,{enabled:i.has(`general`)}),{primary:o,comparison:c}=a,l=m({...t,filters:[re]},{enabled:i.has(`booking`)}),{primary:u,comparison:d}=l,f=ee(t,{enabled:i.has(`visitors`)}),{primary:p,comparison:h}=f,_=te(t,{enabled:i.has(`conversion`)}),{primary:v,comparison:y}=_,b=ne(t,{enabled:i.has(`customers`)}),{primary:x,comparison:S}=b,C=(0,P.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?l:null,i.has(`visitors`)?f:null,i.has(`conversion`)?_:null,i.has(`customers`)?b:null].filter(e=>e!==null),[i,a,l,f,_,b]),w=C.some(e=>e.isError&&!e.hasData),se=(0,P.useCallback)(()=>Promise.all(C.map(e=>e.refetch())),[C]),T=(0,P.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[u.data?.summary??{},d.data?.summary??{}]:e.metricType===`visitors`?[p.data?.summary??{},h.data?.summary??{}]:e.metricType===`conversion`?[v.data?.summary??{},y.data?.summary??{}]:e.metricType===`customers`?[x.data?.summary??{},S.data?.summary??{}]:[o.data?.summary??{},c.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,u.data,d.data,p.data,h.data,v.data,y.data,x.data,S.data,o.data,c.data]),E=(0,P.useMemo)(()=>({general:{primary:o,comparison:c},booking:{primary:u,comparison:d},visitors:{primary:p,comparison:h},conversion:{primary:v,comparison:y},customers:{primary:x,comparison:S}}),[o,c,u,d,p,h,v,y,x,S]),D=(0,P.useMemo)(()=>T.map(e=>{let t=ge(e,E);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:ie(e.metricKey),description:e.description}}),[T,E]),O=C.some(e=>e.isLoading&&!e.hasData),ce=C.some(e=>e.isFetching);return(0,F.jsx)(`div`,{className:de.widgetRoot,children:(0,F.jsx)(oe,{isLoading:O,isError:w,isEmpty:!D.length,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:se}]},empty:{icon:s,description:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,F.jsx)(g,{metrics:D,dataFormat:I,loading:!0,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)}),children:(0,F.jsx)(g,{metrics:D,dataFormat:I,loading:ce,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)})})})}function N({attributes:e={}}){return(0,F.jsx)(y,{attributes:e,options:{from:`/`},children:(0,F.jsx)(_e,{metricIds:e.metrics})})}var P,F,I,ve=t((()=>{f(),E(),i(),o(),P=e(n(),1),j(),fe(),F=a(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),L,ye=t((()=>{i(),o(),le(),j(),L={icon:s,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ce,elements:k.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:A}}}})),R,z,be,xe,Se,Ce,we=t((()=>{R=`jpa/store-performance`,z=`Store performance`,be=`Shows key store performance metrics at a glance.`,xe={content:`Shows key store performance metrics at a glance.`},Se=`store`,Ce={name:R,title:z,description:be,help:xe,category:Se}}));function B({withComparison:e=!1,preset:t=W,metrics:n=A}){return{reportParams:p(e,t),metrics:n}}function Te({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function Ee(e=A){return`[ ${e.map(e=>`'${e}'`).join(`, `)} ]`}function De(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${Te(e)},
\t\tmetrics: ${Ee(e.metrics)},
\t} }
/>`}function Oe({withComparison:e,preset:t,metrics:n}){return K(),(0,U.jsx)(N,{attributes:B({withComparison:e,preset:t,metrics:n})})}function V(e,t=A){return K(),(0,U.jsx)(N,{attributes:B({withComparison:!1,preset:e,metrics:t})})}function H(e){Me.forEach(t=>b(t,e))}function ke({withComparison:e,preset:t,metrics:n,...r}){return K(),(0,U.jsx)(se,{...r,widgetType:je,renderModule:Ae,renderComponent:N,attributes:B({withComparison:e,preset:t,metrics:n})})}var U,Ae,W,G,K,je,q,Me,Ne,J,Y,X,Z,Q,$,Pe;t((()=>{f(),d(),l(),_(),C(),x(),T(),j(),ve(),ye(),we(),U=a(),v(),Ae=`storybook/store-performance`,W=`last-30-days`,G=u,K=()=>c.Legend,je=w(Ce,L),q={metrics:{control:`check`,options:A,description:`Store metrics to show as selectable tabs in the widget body.`}},Me=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Ne={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:N,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...q},parameters:{docs:{description:{component:"Dashboard widget that displays key store performance metrics at a glance. Which metrics render as tabs is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer."}}}},J={render:Oe,args:{preset:W,withComparison:!1,metrics:A},decorators:[O],parameters:{docs:{source:{transform:(e,t)=>De(t.args)}}}},Y={render:Oe,args:{preset:W,withComparison:!0,metrics:A},decorators:[O],parameters:{docs:{source:{transform:(e,t)=>De(t.args)}}}},X={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(H(`loading`),()=>H(null))},Z={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[O],beforeEach:()=>(H(`error`),()=>H(null))},Q={render:()=>V(`last-365-days`,[]),tags:[`!autodocs`],decorators:[O]},$={render:e=>(0,U.jsx)(ke,{...e}),args:{...D,preset:W,withComparison:!0,metrics:A},argTypes:{...S,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...q},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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