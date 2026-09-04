import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Lt as o,t as s}from"./build-module-zwSmKorH.js";import{Jt as ee,an as te,b as ne,g as c,tn as l}from"./hooks-B9RSOm25.js";import{n as u,r as d}from"./line-chart-Dmugf4Im.js";import{rt as f,t as p}from"./src-pjTcHlnM.js";import{Lt as re,Yt as ie,en as m,i as h,jt as ae,zt as oe}from"./date-filters-panel-BR3Ij0-E.js";import{r as se,t as ce}from"./metric-tabs-chart-skeleton-BV6N6VDn.js";import{G as g,K as _,Y as le}from"./report-metric-DtXOQRR4.js";import{t as ue}from"./widget-state-CJ15p6AF.js";import{C as de,D as v,E as y,S as fe,T as pe,b as me,t as he,w as ge,x as b}from"./src-Cq2Kx3J7.js";import{n as _e,r as ve,t as ye}from"./with-site-time-zone-ChMEfdAF.js";var x,be=t((()=>{i(),x=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`}]})),S,C,xe=t((()=>{S=`_widgetRoot_8wi56_1`,C={widgetRoot:S}}));function w(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function T(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function E(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function D(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function Se(e,t){if(e.metricType===`visitors`)return l({primary:t.visitors.primary.data??T(),comparison:t.visitors.comparison.data??T(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return l({primary:t.conversion.primary.data??E(),comparison:t.conversion.comparison.data??E(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return l({primary:t.customers.primary.data??D(),comparison:t.customers.comparison.data??D(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return l({primary:n.primary.data??w(),comparison:n.comparison.data??w(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function Ce(){let{reportParams:e}=ne(),t=ie(e),{primary:n,comparison:i}=t,a=ie({...e,filters:[ee]}),{primary:o,comparison:s}=a,c=ae(e),{primary:l,comparison:u}=c,d=re(e),{primary:f,comparison:p}=d,m=oe(e),{primary:h,comparison:g}=m,_=(0,k.useMemo)(()=>[t,a,c,d,m],[t,a,c,d,m]),le=_.some(e=>e.isError&&!e.hasData),de=(0,k.useCallback)(()=>Promise.all(_.map(e=>e.refetch())),[_]),v=(0,k.useMemo)(()=>x.map(e=>{let[t,r]=e.metricType===`booking`?[o.data?.summary??{},s.data?.summary??{}]:e.metricType===`visitors`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`conversion`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`customers`?[h.data?.summary??{},g.data?.summary??{}]:[n.data?.summary??{},i.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:r[e.metricKey]===void 0?null:Number(r[e.metricKey])}}),[o.data,s.data,l.data,u.data,f.data,p.data,h.data,g.data,n.data,i.data]),y=(0,k.useMemo)(()=>({general:{primary:n,comparison:i},booking:{primary:o,comparison:s},visitors:{primary:l,comparison:u},conversion:{primary:f,comparison:p},customers:{primary:h,comparison:g}}),[n,i,o,s,l,u,f,p,h,g]),fe=(0,k.useMemo)(()=>v.map(e=>{let t=Se(e,y);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:te(e.metricKey),description:e.description}}),[v,y]),pe=_.some(e=>e.isLoading),me=_.some(e=>e.isFetching);return(0,A.jsx)(`div`,{className:C.widgetRoot,children:(0,A.jsx)(ue,{isLoading:pe,isFetching:me,isError:le,isEmpty:!1,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:de}]},renderLoading:(0,A.jsx)(ce,{}),children:(0,A.jsx)(se,{metrics:fe,dataFormat:j,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)})})})}function O({attributes:e={}}){return(0,A.jsx)(c,{attributes:e,options:{from:`/`},children:(0,A.jsx)(Ce,{})})}var k,A,j,we=t((()=>{h(),he(),i(),k=e(n(),1),be(),xe(),A=a(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,Te=t((()=>{s(),M={icon:o}})),N,Ee,P,F,I,L,De=t((()=>{N=`jpa/store-performance`,Ee=`Store performance`,P=`Shows key store performance metrics at a glance.`,F={content:`Shows key store performance metrics at a glance.`},I=`store`,L={name:N,title:Ee,description:P,help:F,category:I}}));function R({withComparison:e=!1,preset:t=G}){return{reportParams:m(e,t)}}function Oe({withComparison:e,preset:t}){let n=!!e,r=t??G;return!n&&r===G?`getDefaultQueryParams()`:n&&r===G?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function z(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${Oe(e)},
\t} }
/>`}function B({withComparison:e,preset:t}){return q(),(0,U.jsx)(O,{attributes:R({withComparison:e,preset:t})})}function V(e){return q(),(0,U.jsx)(O,{attributes:R({withComparison:!1,preset:e})})}function H(e){je.forEach(t=>le(t,e))}function ke({withComparison:e,preset:t,...n}){return q(),(0,U.jsx)(pe,{...n,widgetType:Ae,renderModule:W,renderComponent:O,attributes:R({withComparison:e,preset:t})})}var U,W,G,K,q,Ae,je,Me,J,Y,X,Z,Q,$;t((()=>{h(),p(),d(),g(),y(),de(),me(),ye(),we(),Te(),De(),U=a(),_(),W=`storybook/store-performance`,G=`last-30-days`,K=f,q=()=>u.Legend,Ae=fe(L,M),je=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Me={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:O,tags:[`autodocs`],decorators:[ve],argTypes:{..._e,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays key store performance metrics at a glance as selectable tabs — net sales, orders, bookings, visitors, conversion rate, and customers — over a comparison line chart.`}}}},J={render:B,args:{preset:G,withComparison:!1},decorators:[b],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},Y={render:B,args:{preset:G,withComparison:!0},decorators:[b],parameters:{docs:{source:{transform:(e,t)=>z(t.args)}}}},X={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(H(`loading`),()=>H(null))},Z={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(H(`error`),()=>H(null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{...ge,preset:G,withComparison:!0},argTypes:{...v,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/store-performance"
	renderComponent={ StorePerformanceRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Error,X as Loading,Q as WidgetDashboardWithWidget,Y as WithComparison,$ as __namedExportsOrder,Me as default};