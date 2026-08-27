import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Rt as o,n as s}from"./build-module-CDRs4YxF.js";import{b as ee,g as c}from"./hooks-DLRnGdxm.js";import{n as l,r as u}from"./line-chart-Cor5bjfL.js";import{C as d,t as f}from"./src-DBzYcJQe.js";import{At as te,Ht as p,Mt as ne,qt as m,t as h,wt as re}from"./src-mgRI7HQW.js";import{Ht as ie,Rt as g,jt as ae}from"./chart-tooltip-C2xsGLGS.js";import{r as oe,t as se}from"./metric-tabs-chart-skeleton-BaTYOBKK.js";import{K as _,X as v,q as ce}from"./report-metric-C6krLLgS.js";import{t as le}from"./widget-state-vh7fsUwi.js";import{C as y,D as b,E as x,S,T as ue,b as de,t as fe,w as pe,x as C}from"./src-CeTeJJrY.js";var w,me=t((()=>{i(),w=[{id:`net-sales`,label:r(`Net sales`,`jetpack-premium-analytics-pkg`),description:r(`Monitor your total revenue — after any discounts, returns, or adjustments — over a set period of time.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_value_net`},{id:`orders`,label:r(`Orders`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when orders are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`general`,metricKey:`orders_no`},{id:`bookings`,label:r(`Bookings`,`jetpack-premium-analytics-pkg`),description:r(`See a breakdown of when bookings are placed to identify peak selling periods.`,`jetpack-premium-analytics-pkg`),metricType:`booking`,metricKey:`orders_no`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),description:r(`Track website visitor trends and monitor traffic patterns over time.`,`jetpack-premium-analytics-pkg`),metricType:`visitors`,metricKey:`visitors`},{id:`conversion-rate`,label:r(`Store conversion rate`,`jetpack-premium-analytics-pkg`),description:r(`Track your store's conversion funnel from sessions to completed orders.`,`jetpack-premium-analytics-pkg`),metricType:`conversion`,metricKey:`conversion_rate`},{id:`customers`,label:r(`Customers`,`jetpack-premium-analytics-pkg`),description:r(`Track the total number of customers (new and returning) who placed orders during the selected time period.`,`jetpack-premium-analytics-pkg`),metricType:`customers`,metricKey:`customers`}]})),T,E,he=t((()=>{T=`_widgetRoot_8wi56_1`,E={widgetRoot:T}}));function D(){return{summary:{date_start:``,date_end:``,total_sales:0,orders_no:0,avg_items:0,average_order_value:0,orders_value_net:0,orders_value_gross:0,product_net_revenue:0,profit_margin:0,cogs_amount:0,coupons:0,refunds:0,paid_orders_count:0,paid_net_sales:0,unpaid_orders_count:0,unpaid_net_sales:0},data:[]}}function O(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0},data:[]}}function k(){return{summary:{date_start:``,date_end:``,active_sessions:0,visitors:0,with_cart_addition:0,reached_checkout:0,completed_checkout:0,conversion_rate:0},data:[],steps:[],overallRate:0}}function A(){return{summary:{total_net_sales:0,total_gross_sales:0,total_discounts:0,total_refunds:0,total_orders:0,total_average_order_value:0,total_avg_items_per_order:0,total_customers:0,new_customers:0,returning_customers:0,new_customer_sales:0,new_customer_gross_sales:0,new_customer_discounts:0,new_customer_refunds:0,new_customer_orders:0,new_customer_avg_order_value:0,new_customer_avg_items_per_order:0,returning_customer_sales:0,returning_customer_gross_sales:0,returning_customer_discounts:0,returning_customer_refunds:0,returning_customer_orders:0,returning_customer_avg_order_value:0,returning_customer_avg_items_per_order:0,date_start:``,date_end:``,customers:0},data:[]}}function ge(e,t){if(e.metricType===`visitors`)return g({primary:t.visitors.primary.data??O(),comparison:t.visitors.comparison.data??O(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`conversion`)return g({primary:t.conversion.primary.data??k(),comparison:t.conversion.comparison.data??k(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});if(e.metricType===`customers`)return g({primary:t.customers.primary.data??A(),comparison:t.customers.comparison.data??A(),metricKey:e.metricKey,emptyDataFallback:`empty-array`});let n=e.metricType===`booking`?t.booking:t.general;return g({primary:n.primary.data??D(),comparison:n.comparison.data??D(),metricKey:e.metricKey,emptyDataFallback:`empty-array`})}function _e(){let{reportParams:e}=ee(),t=p(e),{primary:n,comparison:i}=t,a=p({...e,filters:[ae]}),{primary:o,comparison:s}=a,c=re(e),{primary:l,comparison:u}=c,d=te(e),{primary:f,comparison:m}=d,h=ne(e),{primary:g,comparison:_}=h,v=(0,M.useMemo)(()=>[t,a,c,d,h],[t,a,c,d,h]),ce=v.some(e=>e.isError&&!e.hasData),y=(0,M.useCallback)(()=>Promise.all(v.map(e=>e.refetch())),[v]),b=(0,M.useMemo)(()=>w.map(e=>{let[t,r]=e.metricType===`booking`?[o.data?.summary??{},s.data?.summary??{}]:e.metricType===`visitors`?[l.data?.summary??{},u.data?.summary??{}]:e.metricType===`conversion`?[f.data?.summary??{},m.data?.summary??{}]:e.metricType===`customers`?[g.data?.summary??{},_.data?.summary??{}]:[n.data?.summary??{},i.data?.summary??{}];return{...e,primary:Number(t[e.metricKey]??0),comparison:r[e.metricKey]===void 0?null:Number(r[e.metricKey])}}),[o.data,s.data,l.data,u.data,f.data,m.data,g.data,_.data,n.data,i.data]),x=(0,M.useMemo)(()=>({general:{primary:n,comparison:i},booking:{primary:o,comparison:s},visitors:{primary:l,comparison:u},conversion:{primary:f,comparison:m},customers:{primary:g,comparison:_}}),[n,i,o,s,l,u,f,m,g,_]),S=(0,M.useMemo)(()=>b.map(e=>{let t=ge(e,x);return{key:e.id,label:e.label,value:e.primary,previousValue:e.comparison,current:t[0]?.data??[],previous:t[1]?.data,dataFormat:ie(e.metricKey),description:e.description}}),[b,x]),ue=v.some(e=>e.isLoading),de=v.some(e=>e.isFetching);return(0,N.jsx)(`div`,{className:E.widgetRoot,children:(0,N.jsx)(le,{isLoading:ue,isFetching:de,isError:ce,isEmpty:!1,error:{description:r(`We couldn't load store performance data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:y}]},renderLoading:(0,N.jsx)(se,{}),children:(0,N.jsx)(oe,{metrics:S,dataFormat:P,groupLabel:r(`Store metric`,`jetpack-premium-analytics-pkg`)})})})}function j({attributes:e={}}){return(0,N.jsx)(c,{attributes:e,options:{from:`/`},children:(0,N.jsx)(_e,{})})}var M,N,P,ve=t((()=>{h(),fe(),i(),M=e(n(),1),me(),he(),N=a(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,ye=t((()=>{s(),F={icon:o}})),I,L,R,z,B,V,be=t((()=>{I=`jpa/store-performance`,L=`Store performance`,R=`Shows key store performance metrics at a glance.`,z={content:`Shows key store performance metrics at a glance.`},B=`store`,V={name:I,title:L,description:R,help:z,category:B}}));function H({withComparison:e=!1,preset:t=G}){return{reportParams:m(e,t)}}function xe({withComparison:e,preset:t}){let n=!!e,r=t??G;return!n&&r===G?`getDefaultQueryParams()`:n&&r===G?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function Se(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<StorePerformanceRender
\tattributes={ {
\t\treportParams: ${xe(e)},
\t} }
/>`}function Ce({withComparison:e,preset:t}){return q(),(0,W.jsx)(j,{attributes:H({withComparison:e,preset:t})})}function we(e){return q(),(0,W.jsx)(j,{attributes:H({withComparison:!1,preset:e})})}function U(e){Oe.forEach(t=>v(t,e))}function Te({withComparison:e,preset:t,...n}){return q(),(0,W.jsx)(ue,{...n,widgetType:De,renderModule:Ee,renderComponent:j,attributes:H({withComparison:e,preset:t})})}var W,Ee,G,K,q,De,Oe,ke,J,Y,X,Z,Q,$;t((()=>{h(),f(),u(),_(),x(),y(),de(),ve(),ye(),be(),W=a(),ce(),Ee=`storybook/store-performance`,G=`last-30-days`,K=d,q=()=>l.Legend,De=S(V,F),Oe=[`orders/by-date`,`orders-by-product-type/by-date`,`sessions/by-date`,`sessions/by-conversion-rate`,`customers/by-date`],ke={title:`Packages/Premium Analytics/Widgets/StorePerformance`,component:j,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays key store performance metrics at a glance as selectable tabs — net sales, orders, bookings, visitors, conversion rate, and customers — over a comparison line chart.`}}}},J={render:Ce,args:{preset:G,withComparison:!1},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>Se(t.args)}}}},Y={render:Ce,args:{preset:G,withComparison:!0},decorators:[C],parameters:{docs:{source:{transform:(e,t)=>Se(t.args)}}}},X={render:()=>we(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(U(`loading`),()=>U(null))},Z={render:()=>we(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(U(`error`),()=>U(null))},Q={render:e=>(0,W.jsx)(Te,{...e}),args:{...pe,preset:G,withComparison:!0},argTypes:{...b,preset:{control:`select`,options:K,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Error,X as Loading,Q as WidgetDashboardWithWidget,Y as WithComparison,$ as __namedExportsOrder,ke as default};