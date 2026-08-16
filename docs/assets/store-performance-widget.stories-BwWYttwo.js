import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Rt as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,G as l,K as u,Y as d,rt as ee}from"./report-metric-DsD3ceyp.js";import{n as f,r as p}from"./line-chart-KNuuN-21.js";import{t as m,x as h}from"./src-CtNOjlNY.js";import{Et as te,Ft as g,Jr as ne,Nt as _,Tr as re,br as v,cr as ie,nr as ae,ur as oe}from"./chart-tooltip-Cb4-3-CU.js";import{t as y}from"./metric-tabs-chart-CY237Vpl.js";import{t as se}from"./widget-state-Czy7V3lh.js";import{C as ce,D as b,E as x,S,T as le,b as ue,t as de,w as fe,x as C}from"./src-BavIz3YP.js";var pe,me=t((()=>{i(),pe=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`}]})),w,T,he=t((()=>{w=`_widgetRoot_8wi56_1`,T={widgetRoot:w}}));function E(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function D(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function O(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function k(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function ge(e,t){if(e.metricType===`visitors`)return _({primary:t.visitors.primary.data??D(),comparison:t.visitors.comparison.data??D(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return _({primary:t.conversion.primary.data??O(),comparison:t.conversion.comparison.data??O(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return _({primary:t.customers.primary.data??k(),comparison:t.customers.comparison.data??k(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return _({primary:n.primary.data??E(),comparison:n.comparison.data??E(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function _e(){let{reportParams:e}=ee(),t=v(e),{primary:n,comparison:i}=t,a=v({...e,filters:[te]}),{primary:o,comparison:s}=a,c=ae(e),{primary:l,comparison:u}=c,d=ie(e),{primary:f,comparison:p}=d,m=oe(e),{primary:h,comparison:g}=m,_=(0,j.useMemo)(()=>[t,a,c,d,m],[t,a,c,d,m]),re=_.some(e=>e.isError&&!e.hasData),ce=(0,j.useCallback)(()=>Promise.all(_.map(e=>e.refetch())),[_]),b=(0,j.useMemo)(()=>pe.map(e=>{let[t,r]=e.metricType===`booking`?[o.data?.summary??{},s.data?.summary??{}]:e.metricType===`visitors`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`conversion`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`customers`?[h.data?.summary??{},g.data?.summary??{}]:[n.data?.summary??{},i.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:r[e.metricKey]===void 0?null:Number(r[e.metricKey])}}),[o.data,s.data,l.data,u.data,f.data,p.data,h.data,g.data,n.data,i.data]),x=(0,j.useMemo)(()=>({general:{primary:n,comparison:i},booking:{primary:o,comparison:s},visitors:{primary:l,comparison:u},conversion:{primary:f,comparison:p},customers:{primary:h,comparison:g}}),[n,i,o,s,l,u,f,p,h,g]),S=(0,j.useMemo)(()=>b.map(e=>{let t=ge(e,x);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:ne(e.metricKey),description:e.description}}),[b,x]),le=_.some(e=>e.isLoading&&!e.hasData),ue=_.some(e=>e.isFetching);return(0,M.jsx)(`div`,{className:T.widgetRoot,children:(0,M.jsx)(se,{isLoading:le,isError:re,isEmpty:!1,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ce}]},renderLoading:(0,M.jsx)(y,{metrics:S,dataFormat:N,loading:!0,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)}),children:(0,M.jsx)(y,{metrics:S,dataFormat:N,loading:ue,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)})})})}function A({attributes:e={}}){return(0,M.jsx)(c,{attributes:e,options:{from:`/`},children:(0,M.jsx)(_e,{})})}var j,M,N,ve=t((()=>{g(),de(),i(),j=e(n(),1),me(),he(),M=a(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,ye=t((()=>{s(),P={icon:o}})),F,I,L,R,z,B,be=t((()=>{F=`jpa/store-performance`,I=`Store performance`,L=`Shows key store performance metrics at a glance.`,R={content:`Shows key store performance metrics at a glance.`},z=`store`,B={name:F,title:I,description:L,help:R,category:z}}));function V({withComparison:e=!1,preset:t=G}){return{reportParams:re(e,t)}}function xe({withComparison:e,preset:t}){let n=!!e,r=t??G;return!n&&r===G?`getDefaultQueryParams()`:n&&r===G?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function H(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${xe(e)},
\t} }
/>`}function Se({withComparison:e,preset:t}){return q(),(0,W.jsx)(A,{attributes:V({withComparison:e,preset:t})})}function Ce(e){return q(),(0,W.jsx)(A,{attributes:V({withComparison:!1,preset:e})})}function U(e){Ee.forEach(t=>d(t,e))}function we({withComparison:e,preset:t,...n}){return q(),(0,W.jsx)(le,{...n,widgetType:J,renderModule:Te,renderComponent:A,attributes:V({withComparison:e,preset:t})})}var W,Te,G,K,q,J,Ee,De,Y,X,Z,Q,$,Oe;t((()=>{g(),m(),p(),l(),x(),ce(),ue(),ve(),ye(),be(),W=a(),u(),Te=`storybook/store-performance`,G=`last-30-days`,K=h,q=()=>f.Legend,J=S(B,P),Ee=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],De={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:A,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays key store performance metrics at a glance as selectable tabs — net sales, orders, bookings, visitors, conversion rate, and customers — over a comparison line chart.`}}}},Y={render:Se,args:{preset:G,withComparison:!1},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>H(t.args)}}}},X={render:Se,args:{preset:G,withComparison:!0},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>H(t.args)}}}},Z={render:()=>Ce(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(U(`loading`),()=>U(null))},Q={render:()=>Ce(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(U(`error`),()=>U(null))},$={render:e=>(0,W.jsx)(we,{...e}),args:{...fe,preset:G,withComparison:!0},argTypes:{...b,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/store-performance"
	renderComponent={ StorePerformanceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period changes and chart data.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderStorePerformanceOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setAllReportMockStates('loading');
    return () => setAllReportMockStates(null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`First load: every metric report is in flight, so the widget shows its loading
state. The mocks are forced to never resolve for the duration of this story.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderStorePerformanceOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setAllReportMockStates('error');
    return () => setAllReportMockStates(null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Every metric report failed: the widget shows its error state with a Retry
action (which re-runs all queries — still mocked as failing while this story
is active).`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Oe=[`Default`,`WithComparison`,`Loading`,`Error`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Q as Error,Z as Loading,$ as WidgetDashboardWithWidget,X as WithComparison,Oe as __namedExportsOrder,De as default};