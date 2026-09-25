import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Lt as s,t as c}from"./build-module-2iv4IIRq.js";import{m as l,v as ee}from"./hooks-D_UZA9NN.js";import{n as u,r as d}from"./line-chart-CBBIfM_z.js";import{rt as f,t as p}from"./src-BNPYbbO9.js";import{$t as m,At as te,It as ne,Jt as h,Rt as re,t as g}from"./src-BnhNRK52.js";import{Gt as ie,Qt as _,nn as ae}from"./helpers-rGxbeDtb.js";import{r as oe,t as se}from"./metric-tabs-chart-skeleton-BVDio9l0.js";import{c as v,i as ce,r as le}from"./register-report-mocks-CzMv0d-q.js";import{t as ue}from"./widget-state-jfpGof-q.js";import{t as y}from"./src-CJpycVbx.js";import{a as b,d as x,f as de,i as S,n as fe,p as pe,r as C,u as me}from"./with-widget-canvas-ByAq9_97.js";import{n as he,r as ge,t as _e}from"./with-site-time-zone-ngtW_VDw.js";var w,ve=t((()=>{a(),w=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`,countLabel:e=>i(`%s Order`,`%s Orders`,e,`jetpack-premium-analytics-pkg`)},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`,countLabel:e=>i(`%s Booking`,`%s Bookings`,e,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`,countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`)},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`,countLabel:e=>i(`%s Customer`,`%s Customers`,e,`jetpack-premium-analytics-pkg`)}]})),T,E,ye=t((()=>{T=`_widgetRoot_8wi56_1`,E={widgetRoot:T}}));function D(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function O(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function k(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function A(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function be(e,t){if(e.metricType===`visitors`)return _({primary:t.visitors.primary.data??O(),comparison:t.visitors.comparison.data??O(),metricKey:e.metricKey,zone:t.visitors.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return _({primary:t.conversion.primary.data??k(),comparison:t.conversion.comparison.data??k(),metricKey:e.metricKey,zone:t.conversion.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return _({primary:t.customers.primary.data??A(),comparison:t.customers.comparison.data??A(),metricKey:e.metricKey,zone:t.customers.timezone,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return _({primary:n.primary.data??D(),comparison:n.comparison.data??D(),metricKey:e.metricKey,zone:n.timezone,emptyDataFallback:`empty-array`})}function xe(){let{reportParams:e}=ee(),t=h(e),{primary:n,comparison:i}=t,a=h({...e,filters:[ie]}),{primary:o,comparison:s}=a,c=te(e),{primary:l,comparison:u}=c,d=ne(e),{primary:f,comparison:p}=d,m=re(e),{primary:g,comparison:_}=m,v=(0,M.useMemo)(()=>[t,a,c,d,m],[t,a,c,d,m]),ce=v.some(e=>e.isError&&!e.hasData),le=(0,M.useCallback)(()=>Promise.all(v.map(e=>e.refetch())),[v]),y=(0,M.useMemo)(()=>w.map(e=>{let[t,r]=e.metricType===`booking`?[o.data?.summary??{},s.data?.summary??{}]:e.metricType===`visitors`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`conversion`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`customers`?[g.data?.summary??{},_.data?.summary??{}]:[n.data?.summary??{},i.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:r[e.metricKey]===void 0?null:Number(r[e.metricKey])}}),[o.data,s.data,l.data,u.data,f.data,p.data,g.data,_.data,n.data,i.data]),b=(0,M.useMemo)(()=>({general:{primary:n,comparison:i,timezone:t.timezone},booking:{primary:o,comparison:s,timezone:a.timezone},visitors:{primary:l,comparison:u,timezone:c.timezone},conversion:{primary:f,comparison:p,timezone:d.timezone},customers:{primary:g,comparison:_,timezone:m.timezone}}),[n,i,t.timezone,a.timezone,c.timezone,d.timezone,m.timezone,o,s,l,u,f,p,g,_]),x=(0,M.useMemo)(()=>y.map(e=>{let t=be(e,b);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:ae(e.metricKey),description:e.description,countLabel:e.countLabel}}),[y,b]),de=v.some(e=>e.isLoading),S=v.some(e=>e.isFetching);return(0,N.jsx)(`div`,{className:E.widgetRoot,children:(0,N.jsx)(ue,{isLoading:de,isFetching:S,isError:ce,isEmpty:!1,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:le}]},renderLoading:(0,N.jsx)(se,{}),children:(0,N.jsx)(oe,{metrics:x,dataFormat:P,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)})})})}function j({attributes:e={}}){return(0,N.jsx)(l,{attributes:e,options:{from:`/`},children:(0,N.jsx)(xe,{})})}var M,N,P,Se=t((()=>{g(),y(),a(),M=e(n(),1),ve(),ye(),N=o(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,Ce=t((()=>{c(),F={icon:s}})),I,L,R,z,B,V,we=t((()=>{I=`jpa/store-performance`,L=`Store performance`,R=`Shows key store performance metrics at a glance.`,z={content:`Shows key store performance metrics at a glance.`},B=`store`,V={name:I,title:L,description:R,help:z,category:B}}));function H({withComparison:e=!1,preset:t=K}){return{reportParams:m(e,t)}}function Te({withComparison:e,preset:t}){let n=!!e,r=t??K;return!n&&r===K?`getDefaultQueryParams()`:n&&r===K?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function U(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${Te(e)},
\t} }
/>`}function Ee({withComparison:e,preset:t}){return J(),(0,G.jsx)(j,{attributes:H({withComparison:e,preset:t})})}function De(e){return J(),(0,G.jsx)(j,{attributes:H({withComparison:!1,preset:e})})}function W(e){je.forEach(t=>v(t,e))}function Oe({withComparison:e,preset:t,...n}){return J(),(0,G.jsx)(x,{...n,widgetType:Ae,renderModule:ke,renderComponent:j,attributes:H({withComparison:e,preset:t})})}var G,ke,K,q,J,Ae,je,Me,Y,X,Z,Q,$,Ne;t((()=>{g(),p(),d(),le(),de(),b(),fe(),_e(),Se(),Ce(),we(),G=o(),ce(),ke=`storybook/store-performance`,K=`last-30-days`,q=f,J=()=>u.Legend,Ae=S(V,F),je=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Me={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:j,tags:[`autodocs`],decorators:[ge],argTypes:{...he,preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays key store performance metrics at a glance as selectable tabs — net sales, orders, bookings, visitors, conversion rate, and customers — over a comparison line chart.`}}}},Y={render:Ee,args:{preset:K,withComparison:!1},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>U(t.args)}}}},X={render:Ee,args:{preset:K,withComparison:!0},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>U(t.args)}}}},Z={render:()=>De(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(W(`loading`),()=>W(null))},Q={render:()=>De(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(W(`error`),()=>W(null))},$={render:e=>(0,G.jsx)(Oe,{...e}),args:{...me,preset:K,withComparison:!0},argTypes:{...pe,preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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
}`,...$.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Ne=[`Default`,`WithComparison`,`Loading`,`Error`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Q as Error,Z as Loading,$ as WidgetDashboardWithWidget,X as WithComparison,Ne as __namedExportsOrder,Me as default};