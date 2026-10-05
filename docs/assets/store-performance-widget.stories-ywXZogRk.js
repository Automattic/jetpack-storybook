import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Lt as s,t as c}from"./build-module-DNhkEVJn.js";import{m as l,v as ee}from"./hooks-ClsQtfpb.js";import{n as u,r as d}from"./line-chart-BQ6wMpaA.js";import{rt as f,t as p}from"./src-ClJ6D7Xj.js";import{Vt as te,Yt as ne,an as re,qt as ie,t as m,un as h}from"./src-_4LH7wEz.js";import{Wt as ae,Zt as g,tn as oe}from"./helpers-BnJOytVM.js";import{t as se}from"./chart-empty-state-DBJdJi3U.js";import{n as _,r as v,s as ce}from"./register-report-mocks-wnfofAHq.js";import{t as le}from"./widget-state-gC__Igre.js";import{r as ue,t as de}from"./metric-tabs-chart-skeleton-IhpY5RSc.js";import{t as y}from"./src-CTENDgIn.js";import{a as b,d as fe,f as x,i as S,n as pe,p as me,r as C,u as he}from"./with-widget-canvas-DFuFKYLE.js";import{n as ge,r as _e,t as ve}from"./with-site-time-zone-rx7NXQ-3.js";var w,ye=t((()=>{a(),w=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`,countLabel:e=>i(`%s Order`,`%s Orders`,e,`jetpack-premium-analytics-pkg`)},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`,countLabel:e=>i(`%s Booking`,`%s Bookings`,e,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`,countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`)},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`,countLabel:e=>i(`%s Customer`,`%s Customers`,e,`jetpack-premium-analytics-pkg`)}]})),T,E,be=t((()=>{T=`_widgetRoot_8wi56_1`,E={widgetRoot:T}}));function xe(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function Se(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function Ce(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function D(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function we(e,t){if(e.metricType===`visitors`)return g({primary:t.visitors.primary.data??Se(),comparison:t.visitors.comparison.data??Se(),metricKey:e.metricKey,zone:t.visitors.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return g({primary:t.conversion.primary.data??Ce(),comparison:t.conversion.comparison.data??Ce(),metricKey:e.metricKey,zone:t.conversion.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return g({primary:t.customers.primary.data??D(),comparison:t.customers.comparison.data??D(),metricKey:e.metricKey,zone:t.customers.timezone,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return g({primary:n.primary.data??xe(),comparison:n.comparison.data??xe(),metricKey:e.metricKey,zone:n.timezone,emptyDataFallback:`empty-array`})}function Te(){let{reportParams:e}=ee(),t=re(e),{primary:n,comparison:i}=t,a=re({...e,filters:[ae]}),{primary:o,comparison:s}=a,c=te(e),{primary:l,comparison:u}=c,d=ie(e),{primary:f,comparison:p}=d,m=ne(e),{primary:h,comparison:g}=m,_=(0,k.useMemo)(()=>[t,a,c,d,m],[t,a,c,d,m]),v=_.some(e=>e.isError&&!e.hasData),ce=(0,k.useCallback)(()=>Promise.all(_.map(e=>e.refetch())),[_]),y=(0,k.useMemo)(()=>w.map(e=>{let[t,r]=e.metricType===`booking`?[o.data?.summary??{},s.data?.summary??{}]:e.metricType===`visitors`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`conversion`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`customers`?[h.data?.summary??{},g.data?.summary??{}]:[n.data?.summary??{},i.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:r[e.metricKey]===void 0?null:Number(r[e.metricKey])}}),[o.data,s.data,l.data,u.data,f.data,p.data,h.data,g.data,n.data,i.data]),b=(0,k.useMemo)(()=>({general:{primary:n,comparison:i,timezone:t.timezone},booking:{primary:o,comparison:s,timezone:a.timezone},visitors:{primary:l,comparison:u,timezone:c.timezone},conversion:{primary:f,comparison:p,timezone:d.timezone},customers:{primary:h,comparison:g,timezone:m.timezone}}),[n,i,t.timezone,a.timezone,c.timezone,d.timezone,m.timezone,o,s,l,u,f,p,h,g]),fe=(0,k.useMemo)(()=>y.map(e=>{let t=we(e,b);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:oe(e.metricKey),description:e.description,countLabel:e.countLabel}}),[y,b]),x=_.some(e=>e.isLoading),S=_.some(e=>e.isFetching);return(0,A.jsx)(`div`,{className:E.widgetRoot,children:(0,A.jsx)(le,{isLoading:x,isFetching:S,isError:v,isEmpty:!1,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ce}]},renderLoading:(0,A.jsx)(de,{}),children:(0,A.jsx)(ue,{metrics:fe,dataFormat:j,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`),empty:(0,A.jsx)(se,{})})})})}function O({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,options:{from:`/`},children:(0,A.jsx)(Te,{})})}var k,A,j,Ee=t((()=>{m(),y(),a(),k=e(n(),1),ye(),be(),A=o(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,De=t((()=>{c(),M={icon:s}})),N,P,F,I,L,R,Oe=t((()=>{N=`jpa/store-performance`,P=`Store performance`,F=`Shows key store performance metrics at a glance.`,I={content:`Shows key store performance metrics at a glance.`},L=`store`,R={name:N,title:P,description:F,help:I,category:L}}));function z({withComparison:e=!1,preset:t=K}){return{reportParams:h(e,t)}}function ke({withComparison:e,preset:t}){let n=!!e,r=t??K;return!n&&r===K?`getDefaultQueryParams()`:n&&r===K?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function B(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${ke(e)},
\t} }
/>`}function V({withComparison:e,preset:t}){return J(),(0,W.jsx)(O,{attributes:z({withComparison:e,preset:t})})}function H(e){return J(),(0,W.jsx)(O,{attributes:z({withComparison:!1,preset:e})})}function U(e){Me.forEach(t=>ce(t,e))}function Ae({withComparison:e,preset:t,...n}){return J(),(0,W.jsx)(fe,{...n,widgetType:je,renderModule:G,renderComponent:O,attributes:z({withComparison:e,preset:t})})}var W,G,K,q,J,je,Me,Ne,Y,X,Z,Q,$,Pe;t((()=>{m(),p(),d(),_(),x(),b(),pe(),ve(),Ee(),De(),Oe(),W=o(),v(),G=`storybook/store-performance`,K=`last-30-days`,q=f,J=()=>u.Legend,je=S(R,M),Me=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Ne={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:O,tags:[`autodocs`],decorators:[_e],argTypes:{...ge,preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays key store performance metrics at a glance as selectable tabs — net sales, orders, bookings, visitors, conversion rate, and customers — over a comparison line chart.`}}}},Y={render:V,args:{preset:K,withComparison:!1},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>B(t.args)}}}},X={render:V,args:{preset:K,withComparison:!0},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>B(t.args)}}}},Z={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(U(`loading`),()=>U(null))},Q={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(U(`error`),()=>U(null))},$={render:e=>(0,W.jsx)(Ae,{...e}),args:{...he,preset:K,withComparison:!0},argTypes:{...me,preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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
}`,...$.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Pe=[`Default`,`WithComparison`,`Loading`,`Error`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Q as Error,Z as Loading,$ as WidgetDashboardWithWidget,X as WithComparison,Pe as __namedExportsOrder,Ne as default};