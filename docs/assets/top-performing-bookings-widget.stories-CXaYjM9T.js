import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{Fn as n,n as r}from"./build-module-DoJYX5DX.js";import{G as i,W as a,Z as o}from"./report-metric-D7ckCXfW.js";import{n as s,t as c}from"./build-module-B2T4BtR1.js";import{t as l,x as u}from"./src-B6ulckTz.js";import{ur as d,xt as f}from"./chart-tooltip-DU2Kl93e.js";import{C as p,D as m,E as ee,S as te,T as ne,b as re,o as ie,t as ae,w as h,x as g}from"./src-Cj1qWGZF.js";import{n as _,t as v}from"./force-stats-mock-state-mJD-UoEK.js";function y({attributes:e={},setError:t}){return(0,b.jsx)(o,{attributes:e,setError:t,options:{from:`/`},children:(0,b.jsx)(ie,{limit:5})})}var b,x=e((()=>{ae(),b=t()})),S,C=e((()=>{r(),S={icon:n}})),w,T,E,D,O,k,A,oe=e((()=>{w=`jpa/top-performing-bookings`,T=`Top performing bookings`,E=`Shows the top booking products by net revenue over the selected time period.`,D={content:`Your best-selling bookings by revenue over the selected time period.`},O=`bookings`,k=`framed`,A={name:w,title:T,description:E,help:D,category:O,presentation:k}}));function se(e){let t=e.reduce((e,t)=>({total_orders:e.total_orders+Number(t.orders_count),total_quantity:e.total_quantity+Number(t.total_quantity),total_revenue:e.total_revenue+Number(t.product_net_revenue)}),{total_orders:0,total_quantity:0,total_revenue:0});return{data:e,summary:{total_orders:String(t.total_orders),total_products:String(e.length),total_quantity:String(t.total_quantity),total_revenue:t.total_revenue.toFixed(2)}}}function j(e){H||(H=!0,c.use(async(t,n)=>{let r=t.path??t.url??``;return r.startsWith(z)?se(e):r.startsWith(B)?e.map(e=>({id:Number(e.product_id),name:e.product_name,images:[]})):n(t)}))}function M(e=!1,t=W){return{reportParams:d(e,t)}}function N({withComparison:e,preset:t}){let n=!!e,r=t??W;return!n&&r===W?`getDefaultQueryParams()`:n&&r===W?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function P(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<TopPerformingBookingsRender
\tattributes={ {
\t\treportParams: ${N(e)},
\t} }
/>`}function F({withComparison:e,preset:t}){return(0,R.jsx)(y,{attributes:M(e,t)})}function I(e){return(0,R.jsx)(y,{attributes:M(!1,e)})}function L({withComparison:e,preset:t,...n}){return(0,R.jsx)(ne,{...n,widgetType:te(A,S),renderModule:U,renderComponent:y,attributes:{reportParams:d(e,t)}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),f(),l(),a(),ee(),p(),re(),_(),x(),C(),oe(),R=t(),i(),z=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/products`,B=`/wc/v3/products`,V=[{product_id:`801`,product_name:`City tasting tour`,product_net_revenue:`18640.00`,product_gross_revenue:`21320.00`,product_type:`booking`,orders_count:`84`,sku:`BOOK-CITY`,total_quantity:`112`,stock_status:`instock`},{product_id:`802`,product_name:`Private lesson`,product_net_revenue:`14220.00`,product_gross_revenue:`15960.00`,product_type:`bookable-service`,orders_count:`61`,sku:`BOOK-LESSON`,total_quantity:`73`,stock_status:`instock`},{product_id:`803`,product_name:`Weekend retreat`,product_net_revenue:`9350.00`,product_gross_revenue:`10450.00`,product_type:`bookable-event`,orders_count:`38`,sku:`BOOK-RETREAT`,total_quantity:`46`,stock_status:`instock`},{product_id:`804`,product_name:`Strategy session`,product_net_revenue:`5125.00`,product_gross_revenue:`5900.00`,product_type:`booking`,orders_count:`22`,sku:`BOOK-STRATEGY`,total_quantity:`27`,stock_status:`instock`}],H=!1,j(V),U=`storybook/top-performing-bookings`,W=`last-30-days`,G=u,K={title:`Packages/Premium Analytics/Widgets/TopPerformingBookings`,component:y,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top booking products by net revenue for the selected period.`}}}},q={render:F,args:{preset:W,withComparison:!1},decorators:[g],parameters:{docs:{source:{transform:(e,t)=>P(t.args)}}}},J={render:F,args:{preset:W,withComparison:!0},decorators:[g],parameters:{docs:{source:{transform:(e,t)=>P(t.args)}}}},Y={render:()=>I(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`reports/products`,`loading`),()=>v(`reports/products`,null))},X={render:()=>I(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`reports/products`,`error`),()=>v(`reports/products`,null))},Z={render:()=>I(`last-365-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(v(`reports/products`,`empty`),()=>v(`reports/products`,null))},Q={render:e=>(0,R.jsx)(L,{...e}),args:{...h,preset:W,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:G,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/top-performing-bookings"
	renderComponent={ TopPerformingBookingsRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingBookings,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<TopPerformingBookingsStoryControls>;
        }) => getTopPerformingBookingsSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingBookings,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<TopPerformingBookingsStoryControls>;
        }) => getTopPerformingBookingsSource(storyContext.args)
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change for each booking product.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPerformingBookingsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('reports/products', 'loading');
    return () => forceStatsMockState('reports/products', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.

The story's own product/image mock middleware (registered above) would
otherwise shadow \`setReportMockState\` — it always answers \`reports/products\`
with canned data and never falls through. \`forceStatsMockState\` re-registers
its shared override when this story sets a forced state, keeping it ahead of
story-local middleware even if Storybook lazy-loads another story module
later.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPerformingBookingsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('reports/products', 'error');
    return () => forceStatsMockState('reports/products', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPerformingBookingsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('reports/products', 'empty');
    return () => forceStatsMockState('reports/products', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No booking sales in
this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TopPerformingBookingsDashboardStory {...args} />,
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
\\trenderModule="storybook/top-performing-bookings"
\\trenderComponent={ TopPerformingBookingsRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};