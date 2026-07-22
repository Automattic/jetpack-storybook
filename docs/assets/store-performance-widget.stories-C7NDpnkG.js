import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,w as s}from"./build-module-DmVuor49.js";import{n as c,r as l}from"./line-chart-1E7neogU.js";import{c as u,t as d}from"./src-DN9VFS2M.js";import{Gn as ee,_t as te,cr as f,ct as ne,ht as p,qn as re,rr as ie,yt as m,zn as ae}from"./chart-tooltip-CzFmGXYY.js";import{t as oe}from"./metric-tabs-chart-BE9sf7ue.js";import{F as h,G as se,L as g,P as _,V as v}from"./report-metric-DKtqeETY.js";import{t as ce}from"./widget-state-BHDlAvDl.js";import{C as y,D as b,E as x,S as le,T as S,b as C,t as w,w as T,x as E}from"./src-jwuoScz5.js";import{i as D,t as ue}from"./src-CFWu1nXz.js";var O,k,A=t((()=>{i(),O=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics`),metricType:`customers`,metricKey:`customers`}],k=O.map(e=>e.id)})),de,fe,pe=t((()=>{de=`_widgetRoot_8wi56_1`,fe={widgetRoot:de}}));function me(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function he(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function ge(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function j(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function _e(e,t){if(e.metricType===`visitors`)return p({primary:t.visitors.primary.data??he(),comparison:t.visitors.comparison.data??he(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return p({primary:t.conversion.primary.data??ge(),comparison:t.conversion.comparison.data??ge(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return p({primary:t.customers.primary.data??j(),comparison:t.customers.comparison.data??j(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return p({primary:n.primary.data??me(),comparison:n.comparison.data??me(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function ve({metricIds:e=k}){let{reportParams:t}=se(),n=(0,N.useMemo)(()=>{let t=new Set(e);return O.filter(e=>t.has(e.id))},[e]),i=(0,N.useMemo)(()=>new Set(n.map(e=>e.metricType)),[n]),a=ie(t,{enabled:i.has(`general`)}),{primary:o,comparison:c}=a,l=ie({...t,filters:[ne]},{enabled:i.has(`booking`)}),{primary:u,comparison:d}=l,f=ae(t,{enabled:i.has(`visitors`)}),{primary:p,comparison:m}=f,h=ee(t,{enabled:i.has(`conversion`)}),{primary:g,comparison:_}=h,v=re(t,{enabled:i.has(`customers`)}),{primary:y,comparison:b}=v,x=(0,N.useMemo)(()=>[i.has(`general`)?a:null,i.has(`booking`)?l:null,i.has(`visitors`)?f:null,i.has(`conversion`)?h:null,i.has(`customers`)?v:null].filter(e=>e!==null),[i,a,l,f,h,v]),le=x.some(e=>e.isError&&!e.hasData),S=(0,N.useCallback)(()=>Promise.all(x.map(e=>e.refetch())),[x]),C=(0,N.useMemo)(()=>n.map(e=>{let[t,n]=e.metricType===`booking`?[u.data?.summary??{},d.data?.summary??{}]:e.metricType===`visitors`?[p.data?.summary??{},m.data?.summary??{}]:e.metricType===`conversion`?[g.data?.summary??{},_.data?.summary??{}]:e.metricType===`customers`?[y.data?.summary??{},b.data?.summary??{}]:[o.data?.summary??{},c.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:n[e.metricKey]===void 0?null:Number(n[e.metricKey])}}),[n,u.data,d.data,p.data,m.data,g.data,_.data,y.data,b.data,o.data,c.data]),w=(0,N.useMemo)(()=>({general:{primary:o,comparison:c},booking:{primary:u,comparison:d},visitors:{primary:p,comparison:m},conversion:{primary:g,comparison:_},customers:{primary:y,comparison:b}}),[o,c,u,d,p,m,g,_,y,b]),T=(0,N.useMemo)(()=>C.map(e=>{let t=_e(e,w);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:te(e.metricKey),description:e.description}}),[C,w]),E=x.some(e=>e.isLoading&&!e.hasData),D=x.some(e=>e.isFetching);return(0,P.jsx)(`div`,{className:fe.widgetRoot,children:(0,P.jsx)(ce,{isLoading:E,isError:le,isEmpty:!T.length,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:S}]},empty:{icon:s,description:r(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)},renderLoading:(0,P.jsx)(oe,{metrics:T,dataFormat:F,loading:!0,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)}),children:(0,P.jsx)(oe,{metrics:T,dataFormat:F,loading:D,groupLabel:r(`Store metric`,`jetpack-premium-analytics`)})})})}function M({attributes:e={}}){return(0,P.jsx)(v,{attributes:e,options:{from:`/`},children:(0,P.jsx)(ve,{metricIds:e.metrics})})}var N,P,F,ye=t((()=>{m(),w(),i(),o(),N=e(n(),1),A(),pe(),P=a(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,be=t((()=>{i(),o(),ue(),A(),I={icon:s,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:D,elements:O.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:k}}}})),L,R,z,xe,Se,Ce,we=t((()=>{L=`jpa/store-performance`,R=`Store performance`,z=`Shows key store performance metrics at a glance.`,xe={content:`Shows key store performance metrics at a glance.`},Se=`store`,Ce={name:L,title:R,description:z,help:xe,category:Se}}));function B({withComparison:e=!1,preset:t=W,metrics:n=k}){return{reportParams:f(e,t),metrics:n}}function Te({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function Ee(e=k){return`[ ${e.map(e=>`'${e}'`).join(`, `)} ]`}function De(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${Te(e)},
\t\tmetrics: ${Ee(e.metrics)},
\t} }
/>`}function Oe({withComparison:e,preset:t,metrics:n}){return K(),(0,U.jsx)(M,{attributes:B({withComparison:e,preset:t,metrics:n})})}function V(e,t=k){return K(),(0,U.jsx)(M,{attributes:B({withComparison:!1,preset:e,metrics:t})})}function H(e){Me.forEach(t=>g(t,e))}function ke({withComparison:e,preset:t,metrics:n,...r}){return K(),(0,U.jsx)(S,{...r,widgetType:je,renderModule:Ae,renderComponent:M,attributes:B({withComparison:e,preset:t,metrics:n})})}var U,Ae,W,G,K,je,q,Me,Ne,J,Y,X,Z,Q,$,Pe;t((()=>{m(),d(),l(),_(),x(),y(),C(),A(),ye(),be(),we(),U=a(),h(),Ae=`storybook/store-performance`,W=`last-30-days`,G=u,K=()=>c.Legend,je=le(Ce,I),q={metrics:{control:`check`,options:k,description:`Store metrics to show as selectable tabs in the widget body.`}},Me=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Ne={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:M,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...q},parameters:{docs:{description:{component:"Dashboard widget that displays key store performance metrics at a glance. Which metrics render as tabs is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer."}}}},J={render:Oe,args:{preset:W,withComparison:!1,metrics:k},decorators:[E],parameters:{docs:{source:{transform:(e,t)=>De(t.args)}}}},Y={render:Oe,args:{preset:W,withComparison:!0,metrics:k},decorators:[E],parameters:{docs:{source:{transform:(e,t)=>De(t.args)}}}},X={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(H(`loading`),()=>H(null))},Z={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(H(`error`),()=>H(null))},Q={render:()=>V(`last-365-days`,[]),tags:[`!autodocs`],decorators:[E]},$={render:e=>(0,U.jsx)(ke,{...e}),args:{...T,preset:W,withComparison:!0,metrics:k},argTypes:{...b,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},...q},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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