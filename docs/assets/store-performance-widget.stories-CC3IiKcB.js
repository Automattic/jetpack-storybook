import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Lt as o,t as s}from"./build-module-2iv4IIRq.js";import{Fn as c,On as ee,m as l,v as te,zn as ne}from"./hooks-BiEmYekM.js";import{n as u,r as d}from"./line-chart-7TkKUbIi.js";import{rt as f,t as p}from"./src-CJGEmgc4.js";import{Bt as re,Mt as ie,Rt as ae,Xt as m,r as h,tn as g}from"./date-period-dropdown-BoWuZT_G.js";import{r as oe,t as se}from"./metric-tabs-chart-skeleton-BOdOZ1-i.js";import{c as _,i as v,r as ce}from"./register-report-mocks-D4_lv8Td.js";import{t as le}from"./widget-state-DNQRRIdK.js";import{t as ue}from"./src-hbqw4B8Y.js";import{a as y,c as b,i as de,l as fe,n as pe,o as me,r as x,s as he}from"./with-widget-canvas-B6U5wbFT.js";import{n as ge,r as _e,t as ve}from"./with-site-time-zone-ngtW_VDw.js";var S,ye=t((()=>{i(),S=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`}]})),C,w,be=t((()=>{C=`_widgetRoot_8wi56_1`,w={widgetRoot:C}}));function T(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function E(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function D(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function O(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function xe(e,t){if(e.metricType===`visitors`)return c({primary:t.visitors.primary.data??E(),comparison:t.visitors.comparison.data??E(),metricKey:e.metricKey,zone:t.visitors.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return c({primary:t.conversion.primary.data??D(),comparison:t.conversion.comparison.data??D(),metricKey:e.metricKey,zone:t.conversion.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return c({primary:t.customers.primary.data??O(),comparison:t.customers.comparison.data??O(),metricKey:e.metricKey,zone:t.customers.timezone,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return c({primary:n.primary.data??T(),comparison:n.comparison.data??T(),metricKey:e.metricKey,zone:n.timezone,emptyDataFallback:`empty-array`})}function Se(){let{reportParams:e}=te(),t=m(e),{primary:n,comparison:i}=t,a=m({...e,filters:[ee]}),{primary:o,comparison:s}=a,c=ie(e),{primary:l,comparison:u}=c,d=ae(e),{primary:f,comparison:p}=d,h=re(e),{primary:g,comparison:_}=h,v=(0,A.useMemo)(()=>[t,a,c,d,h],[t,a,c,d,h]),ce=v.some(e=>e.isError&&!e.hasData),ue=(0,A.useCallback)(()=>Promise.all(v.map(e=>e.refetch())),[v]),y=(0,A.useMemo)(()=>S.map(e=>{let[t,r]=e.metricType===`booking`?[o.data?.summary??{},s.data?.summary??{}]:e.metricType===`visitors`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`conversion`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`customers`?[g.data?.summary??{},_.data?.summary??{}]:[n.data?.summary??{},i.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:r[e.metricKey]===void 0?null:Number(r[e.metricKey])}}),[o.data,s.data,l.data,u.data,f.data,p.data,g.data,_.data,n.data,i.data]),b=(0,A.useMemo)(()=>({general:{primary:n,comparison:i,timezone:t.timezone},booking:{primary:o,comparison:s,timezone:a.timezone},visitors:{primary:l,comparison:u,timezone:c.timezone},conversion:{primary:f,comparison:p,timezone:d.timezone},customers:{primary:g,comparison:_,timezone:h.timezone}}),[n,i,t.timezone,a.timezone,c.timezone,d.timezone,h.timezone,o,s,l,u,f,p,g,_]),de=(0,A.useMemo)(()=>y.map(e=>{let t=xe(e,b);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:ne(e.metricKey),description:e.description}}),[y,b]),fe=v.some(e=>e.isLoading),pe=v.some(e=>e.isFetching);return(0,j.jsx)(`div`,{className:w.widgetRoot,children:(0,j.jsx)(le,{isLoading:fe,isFetching:pe,isError:ce,isEmpty:!1,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ue}]},renderLoading:(0,j.jsx)(se,{}),children:(0,j.jsx)(oe,{metrics:de,dataFormat:M,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)})})})}function k({attributes:e={}}){return(0,j.jsx)(l,{attributes:e,options:{from:`/`},children:(0,j.jsx)(Se,{})})}var A,j,M,Ce=t((()=>{h(),ue(),i(),A=e(n(),1),ye(),be(),j=a(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,we=t((()=>{s(),N={icon:o}})),P,Te,F,I,L,R,Ee=t((()=>{P=`jpa/store-performance`,Te=`Store performance`,F=`Shows key store performance metrics at a glance.`,I={content:`Shows key store performance metrics at a glance.`},L=`store`,R={name:P,title:Te,description:F,help:I,category:L}}));function z({withComparison:e=!1,preset:t=G}){return{reportParams:g(e,t)}}function De({withComparison:e,preset:t}){let n=!!e,r=t??G;return!n&&r===G?`getDefaultQueryParams()`:n&&r===G?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function B(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${De(e)},
\t} }
/>`}function V({withComparison:e,preset:t}){return q(),(0,U.jsx)(k,{attributes:z({withComparison:e,preset:t})})}function Oe(e){return q(),(0,U.jsx)(k,{attributes:z({withComparison:!1,preset:e})})}function H(e){je.forEach(t=>_(t,e))}function ke({withComparison:e,preset:t,...n}){return q(),(0,U.jsx)(he,{...n,widgetType:Ae,renderModule:W,renderComponent:k,attributes:z({withComparison:e,preset:t})})}var U,W,G,K,q,Ae,je,Me,J,Y,X,Z,Q,$;t((()=>{h(),p(),d(),ce(),b(),y(),pe(),ve(),Ce(),we(),Ee(),U=a(),v(),W=`storybook/store-performance`,G=`last-30-days`,K=f,q=()=>u.Legend,Ae=de(R,N),je=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Me={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:k,tags:[`autodocs`],decorators:[_e],argTypes:{...ge,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays key store performance metrics at a glance as selectable tabs — net sales, orders, bookings, visitors, conversion rate, and customers — over a comparison line chart.`}}}},J={render:V,args:{preset:G,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>B(t.args)}}}},Y={render:V,args:{preset:G,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>B(t.args)}}}},X={render:()=>Oe(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(H(`loading`),()=>H(null))},Z={render:()=>Oe(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(H(`error`),()=>H(null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{...me,preset:G,withComparison:!0},argTypes:{...fe,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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