import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Lt as s,t as c}from"./build-module-DNhkEVJn.js";import{n as l,r as u}from"./line-chart-WSKHBvne.js";import{ot as d,t as f}from"./src-rrY7vAoW.js";import{In as p,Jt as ee,en as te,fn as m,nn as ne,t as h}from"./src-_wTDHkE8.js";import{On as re,_ as g,_n as ie,wn as _,x as ae}from"./charts-provider-CPgWmhOr.js";import{t as oe}from"./chart-empty-state-DK6m4Slg.js";import{n as v,r as y,s as b}from"./register-report-mocks-fOQNujTE.js";import{t as se}from"./widget-state-C5IkqyiU.js";import{r as ce,t as le}from"./metric-tabs-chart-skeleton-BayI2ZYR.js";import{t as x}from"./src-CUJR2JZN.js";import{a as S,g as ue,h as de,i as C,m as fe,n as pe,p as me,r as w}from"./with-widget-canvas-87_awOfE.js";import{n as he,r as ge,t as _e}from"./with-site-time-zone-rx7NXQ-3.js";var T,ve=t((()=>{a(),T=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`,countLabel:e=>i(`%s Order`,`%s Orders`,e,`jetpack-premium-analytics-pkg`)},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`,countLabel:e=>i(`%s Booking`,`%s Bookings`,e,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Store visitors`,`jetpack-premium-analytics-pkg`),description:r(`Store visitors recorded through WooCommerce sessions. Jetpack Stats measures visitors separately, so totals may differ.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`,countLabel:e=>i(`%s Store Visitor`,`%s Store Visitors`,e,`jetpack-premium-analytics-pkg`)},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`,countLabel:e=>i(`%s Customer`,`%s Customers`,e,`jetpack-premium-analytics-pkg`)}]})),E,D,ye=t((()=>{E=`_widgetRoot_8wi56_1`,D={widgetRoot:E}}));function O(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function be(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function xe(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function Se(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function Ce(e,t){if(e.metricType===`visitors`)return _({primary:t.visitors.primary.data??be(),comparison:t.visitors.comparison.data??be(),metricKey:e.metricKey,zone:t.visitors.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return _({primary:t.conversion.primary.data??xe(),comparison:t.conversion.comparison.data??xe(),metricKey:e.metricKey,zone:t.conversion.timezone,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return _({primary:t.customers.primary.data??Se(),comparison:t.customers.comparison.data??Se(),metricKey:e.metricKey,zone:t.customers.timezone,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return _({primary:n.primary.data??O(),comparison:n.comparison.data??O(),metricKey:e.metricKey,zone:n.timezone,emptyDataFallback:`empty-array`})}function we(){let{reportParams:e}=ae(),t=m(e),{primary:n,comparison:i}=t,a=m({...e,filters:[ie]}),{primary:o,comparison:s}=a,c=ee(e),{primary:l,comparison:u}=c,d=te(e),{primary:f,comparison:p}=d,h=ne(e),{primary:g,comparison:_}=h,v=(0,A.useMemo)(()=>[t,a,c,d,h],[t,a,c,d,h]),y=v.some(e=>e.isError&&!e.hasData),b=(0,A.useCallback)(()=>Promise.all(v.map(e=>e.refetch())),[v]),x=(0,A.useMemo)(()=>T.map(e=>{let[t,r]=e.metricType===`booking`?[o.data?.summary??{},s.data?.summary??{}]:e.metricType===`visitors`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`conversion`?[f.data?.summary??{},p.data?.summary??{}]:e.metricType===`customers`?[g.data?.summary??{},_.data?.summary??{}]:[n.data?.summary??{},i.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:r[e.metricKey]===void 0?null:Number(r[e.metricKey])}}),[o.data,s.data,l.data,u.data,f.data,p.data,g.data,_.data,n.data,i.data]),S=(0,A.useMemo)(()=>({general:{primary:n,comparison:i,timezone:t.timezone},booking:{primary:o,comparison:s,timezone:a.timezone},visitors:{primary:l,comparison:u,timezone:c.timezone},conversion:{primary:f,comparison:p,timezone:d.timezone},customers:{primary:g,comparison:_,timezone:h.timezone}}),[n,i,t.timezone,a.timezone,c.timezone,d.timezone,h.timezone,o,s,l,u,f,p,g,_]),ue=(0,A.useMemo)(()=>x.map(e=>{let t=Ce(e,S);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:re(e.metricKey),description:e.description,countLabel:e.countLabel}}),[x,S]),de=v.some(e=>e.isLoading),C=v.some(e=>e.isFetching);return(0,j.jsx)(`div`,{className:D.widgetRoot,children:(0,j.jsx)(se,{isLoading:de,isFetching:C,isError:y,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:b}]},renderLoading:(0,j.jsx)(le,{}),children:(0,j.jsx)(ce,{metrics:ue,dataFormat:M,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`),empty:(0,j.jsx)(oe,{})})})})}function k({attributes:e={}}){return(0,j.jsx)(g,{attributes:e,options:{from:`/`},children:(0,j.jsx)(we,{})})}var A,j,M,Te=t((()=>{h(),x(),a(),A=e(n(),1),ve(),ye(),j=o(),M={type:`number`,options:{useMultipliers:!0,decimals:0}}})),N,Ee=t((()=>{c(),N={icon:s}})),P,F,I,L,R,z,De=t((()=>{P=`jpa/store-performance`,F=`Store performance`,I=`Shows key store performance metrics at a glance.`,L={content:`Shows key store performance metrics at a glance.`},R=`store`,z={name:P,title:F,description:I,help:L,category:R}}));function B({withComparison:e=!1,preset:t=K}){return{reportParams:p(e,t)}}function Oe({withComparison:e,preset:t}){let n=!!e,r=t??K;return!n&&r===K?`getDefaultQueryParams()`:n&&r===K?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function V(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${Oe(e)},
\t} }
/>`}function H({withComparison:e,preset:t}){return J(),(0,G.jsx)(k,{attributes:B({withComparison:e,preset:t})})}function U(e){return J(),(0,G.jsx)(k,{attributes:B({withComparison:!1,preset:e})})}function W(e){Me.forEach(t=>b(t,e))}function ke({withComparison:e,preset:t,...n}){return J(),(0,G.jsx)(fe,{...n,widgetType:je,renderModule:Ae,renderComponent:k,attributes:B({withComparison:e,preset:t})})}var G,Ae,K,q,J,je,Me,Ne,Y,X,Z,Q,$,Pe;t((()=>{h(),f(),u(),v(),de(),S(),pe(),_e(),Te(),Ee(),De(),G=o(),y(),Ae=`storybook/store-performance`,K=`last-30-days`,q=d,J=()=>l.Legend,je=C(z,N),Me=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],Ne={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:k,tags:[`autodocs`],decorators:[ge],argTypes:{...he,preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays key store performance metrics at a glance as selectable tabs — net sales, orders, bookings, visitors, conversion rate, and customers — over a comparison line chart.`}}}},Y={render:H,args:{preset:K,withComparison:!1},decorators:[w],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},X={render:H,args:{preset:K,withComparison:!0},decorators:[w],parameters:{docs:{source:{transform:(e,t)=>V(t.args)}}}},Z={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(W(`loading`),()=>W(null))},Q={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(W(`error`),()=>W(null))},$={render:e=>(0,G.jsx)(ke,{...e}),args:{...me,preset:K,withComparison:!0},argTypes:{...ue,preset:{control:`select`,options:q,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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