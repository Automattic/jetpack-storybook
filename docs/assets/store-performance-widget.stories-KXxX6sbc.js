import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Lt as s,t as c}from"./build-module-DNhkEVJn.js";import{m as l,v as ee}from"./hooks-H2YJR3XP.js";import{n as u,r as d}from"./line-chart-DNKIi89J.js";import{rt as f,t as p}from"./src-ClJ6D7Xj.js";import{Ut as te,Yt as ne,Zt as re,fn as m,sn as ie,t as h}from"./src-BcWXjvol.js";import{Wt as ae,Zt as g,tn as oe}from"./helpers-DbUsf4uI.js";import{t as se}from"./chart-empty-state-DOJAbjF1.js";import{n as _,r as v,s as y}from"./register-report-mocks-e7cVqHDo.js";import{t as ce}from"./widget-state-CXzmrrd7.js";import{r as le,t as ue}from"./metric-tabs-chart-skeleton-CZ-qd7kP.js";import{t as b}from"./src-CyrW0w-t.js";import{a as x,d as de,f as fe,i as pe,n as me,p as he,r as S,u as ge}from"./with-widget-canvas-oSVceFUR.js";import{n as _e,r as ve,t as ye}from"./with-site-time-zone-rx7NXQ-3.js";var C,be=t((()=>{a(),C=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`,countLabel:e=>i(`%s Order`,`%s Orders`,e,`jetpack-premium-analytics-pkg`)},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`,countLabel:e=>i(`%s Booking`,`%s Bookings`,e,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`,countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`)},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`,countLabel:e=>i(`%s Customer`,`%s Customers`,e,`jetpack-premium-analytics-pkg`)}]})),w,T,xe=t((()=>{w=`_widgetRoot_8wi56_1`,T={widgetRoot:w}}));function E(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function D(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function O(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function k(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function Se(e,t){if(e.metricType===`visitors`)return g({primary:t.visitors.primary.data??D(),comparison:t.visitors.comparison.data??D(),metricKey:e.metricKey,zone:t.visitors.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return g({primary:t.conversion.primary.data??O(),comparison:t.conversion.comparison.data??O(),metricKey:e.metricKey,zone:t.conversion.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return g({primary:t.customers.primary.data??k(),comparison:t.customers.comparison.data??k(),metricKey:e.metricKey,zone:t.customers.timezone,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return g({primary:n.primary.data??E(),comparison:n.comparison.data??E(),metricKey:e.metricKey,zone:n.timezone,emptyDataFallback:`empty-array`})}function Ce(){let{reportParams:e}=ee(),t=ie(e),{primary:n,comparison:i}=t,a=ie({...e,filters:[ae]}),{primary:o,comparison:s}=a,c=te(e),{primary:l,comparison:u}=c,d=ne(e),{primary:f,comparison:p}=d,m=re(e),{primary:h,comparison:g}=m,_=(0,j.useMemo)(()=>[t,a,c,d,m],[t,a,c,d,m]),v=_.some(e=>e.isError&&!e.hasData),y=(0,j.useCallback)(()=>Promise.all(_.map(e=>e.refetch())),[_]),b=(0,j.useMemo)(()=>C.map(e=>{let[t,r]=e.metricType===`booking`?[o.data?.summary??{},s.data?.summary??{}]:e.metricType===`visitors`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`conversion`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`customers`?[h.data?.summary??{},g.data?.summary??{}]:[n.data?.summary??{},i.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:r[e.metricKey]===void 0?null:Number(r[e.metricKey])}}),[o.data,s.data,l.data,u.data,f.data,p.data,h.data,g.data,n.data,i.data]),x=(0,j.useMemo)(()=>({general:{primary:n,comparison:i,timezone:t.timezone},booking:{primary:o,comparison:s,timezone:a.timezone},visitors:{primary:l,comparison:u,timezone:c.timezone},conversion:{primary:f,comparison:p,timezone:d.timezone},customers:{primary:h,comparison:g,timezone:m.timezone}}),[n,i,t.timezone,a.timezone,c.timezone,d.timezone,m.timezone,o,s,l,u,f,p,h,g]),de=(0,j.useMemo)(()=>b.map(e=>{let t=Se(e,x);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:oe(e.metricKey),description:e.description,countLabel:e.countLabel}}),[b,x]),fe=_.some(e=>e.isLoading),pe=_.some(e=>e.isFetching);return(0,M.jsx)(`div`,{className:T.widgetRoot,children:(0,M.jsx)(ce,{isLoading:fe,isFetching:pe,isError:v,isEmpty:!1,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},renderLoading:(0,M.jsx)(ue,{}),children:(0,M.jsx)(le,{metrics:de,dataFormat:N,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`),empty:(0,M.jsx)(se,{})})})})}function A({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,options:{from:`/`},children:(0,M.jsx)(Ce,{})})}var j,M,N,we=t((()=>{h(),b(),a(),j=e(n(),1),be(),xe(),M=o(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,Te=t((()=>{c(),P={icon:s}})),F,I,L,R,z,B,Ee=t((()=>{F=`jpa/store-performance`,I=`Store performance`,L=`Shows key store performance metrics at a glance.`,R={content:`Shows key store performance metrics at a glance.`},z=`store`,B={name:F,title:I,description:L,help:R,category:z}}));function V({withComparison:e=!1,preset:t=G}){return{reportParams:m(e,t)}}function De({withComparison:e,preset:t}){let n=!!e,r=t??G;return!n&&r===G?`getDefaultQueryParams()`:n&&r===G?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function H(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${De(e)},
\t} }
/>`}function Oe({withComparison:e,preset:t}){return q(),(0,W.jsx)(A,{attributes:V({withComparison:e,preset:t})})}function ke(e){return q(),(0,W.jsx)(A,{attributes:V({withComparison:!1,preset:e})})}function U(e){Ne.forEach(t=>y(t,e))}function Ae({withComparison:e,preset:t,...n}){return q(),(0,W.jsx)(de,{...n,widgetType:Me,renderModule:je,renderComponent:A,attributes:V({withComparison:e,preset:t})})}var W,je,G,K,q,Me,Ne,Pe,J,Y,X,Z,Q,$;t((()=>{h(),p(),d(),_(),fe(),x(),me(),ye(),we(),Te(),Ee(),W=o(),v(),je=`storybook/store-performance`,G=`last-30-days`,K=f,q=()=>u.Legend,Me=pe(B,P),Ne=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Pe={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:A,tags:[`autodocs`],decorators:[ve],argTypes:{..._e,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays key store performance metrics at a glance as selectable tabs — net sales, orders, bookings, visitors, conversion rate, and customers — over a comparison line chart.`}}}},J={render:Oe,args:{preset:G,withComparison:!1},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>H(t.args)}}}},Y={render:Oe,args:{preset:G,withComparison:!0},decorators:[S],parameters:{docs:{source:{transform:(e,t)=>H(t.args)}}}},X={render:()=>ke(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(U(`loading`),()=>U(null))},Z={render:()=>ke(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(U(`error`),()=>U(null))},Q={render:e=>(0,W.jsx)(Ae,{...e}),args:{...ge,preset:G,withComparison:!0},argTypes:{...he,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Error,X as Loading,Q as WidgetDashboardWithWidget,Y as WithComparison,$ as __namedExportsOrder,Pe as default};