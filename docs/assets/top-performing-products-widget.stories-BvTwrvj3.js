import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{al as i,n as a}from"./build-module-C6Ow06jV.js";import{n as o,t as s}from"./build-module-uriXW5xv.js";import{l as c,t as l}from"./src-B6u8f4D0.js";import{qn as u,ut as ee}from"./chart-tooltip-UsOM9nrJ.js";import{C as d,S as f,k as p}from"./report-metric-BAoGgSI-.js";import{S as m,b as h,c as g,t as _,x as v,y}from"./src-BMGro9H1.js";import{n as b,r as x}from"./with-widget-canvas-Dz43KNHY.js";import{n as S,t as C}from"./force-stats-mock-state-fdpR5QpQ.js";function w({attributes:e={},setError:t}){return(0,T.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,T.jsx)(g,{limit:5})})}var T,E=e((()=>{_(),T=r()})),D,O=e((()=>{n(),a(),D={name:`jpa/top-performing-products`,title:t(`Top performing products`,`jetpack-premium-analytics`),help:{content:t(`Your best-selling products by revenue over the selected time period.`,`jetpack-premium-analytics`)},icon:i}}));function k(e){let t=e.reduce((e,t)=>({total_orders:e.total_orders+Number(t.orders_count),total_quantity:e.total_quantity+Number(t.total_quantity),total_revenue:e.total_revenue+Number(t.product_net_revenue)}),{total_orders:0,total_quantity:0,total_revenue:0});return{data:e,summary:{total_orders:String(t.total_orders),total_products:String(e.length),total_quantity:String(t.total_quantity),total_revenue:t.total_revenue.toFixed(2)}}}function A(e){V||(V=!0,s.use(async(t,n)=>{let r=t.path??t.url??``;return r.startsWith(R)?k(e):r.startsWith(z)?e.map(e=>({id:Number(e.product_id),name:e.product_name,images:[]})):n(t)}))}function j(e=!1,t=U){return{reportParams:u(e,t)}}function M({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function N(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<TopPerformingProductsRender
\tattributes={ {
\t\treportParams: ${M(e)},
\t} }
\tsetError={ () => undefined }
/>`}function P({withComparison:e,preset:t}){return(0,L.jsx)(w,{attributes:j(e,t),setError:G})}function F(e){return(0,L.jsx)(w,{attributes:j(!1,e),setError:G})}function I({withComparison:e,preset:t,...n}){return(0,L.jsx)(h,{...n,widgetType:D,renderModule:H,renderComponent:w,attributes:j(e,t)})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{o(),ee(),l(),f(),v(),b(),S(),E(),O(),L=r(),d(),R=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/products`,z=`/wc/v3/products`,B=[{product_id:`701`,product_name:`Performance hoodie`,product_net_revenue:`24880.00`,product_gross_revenue:`27620.00`,product_type:`simple`,orders_count:`212`,sku:`APP-HOODIE`,total_quantity:`254`,stock_status:`instock`},{product_id:`702`,product_name:`Merino travel tee`,product_net_revenue:`18240.00`,product_gross_revenue:`20480.00`,product_type:`variation`,orders_count:`175`,sku:`APP-TEE`,total_quantity:`220`,stock_status:`instock`},{product_id:`703`,product_name:`Canvas weekender`,product_net_revenue:`13650.00`,product_gross_revenue:`15120.00`,product_type:`variable`,orders_count:`91`,sku:`ACC-BAG`,total_quantity:`102`,stock_status:`instock`},{product_id:`704`,product_name:`Insulated bottle`,product_net_revenue:`7425.00`,product_gross_revenue:`8125.00`,product_type:`simple`,orders_count:`148`,sku:`ACC-BOTTLE`,total_quantity:`180`,stock_status:`instock`}],V=!1,A(B),H=`storybook/top-performing-products`,U=`last-30-days`,W=c,G=()=>void 0,K={title:`Packages/Premium Analytics/Widgets/TopPerformingProducts`,component:w,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top products by net revenue for the selected period.`}}}},q={render:P,args:{preset:U,withComparison:!1},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>N(t.args)}}}},J={render:P,args:{preset:U,withComparison:!0},decorators:[x],parameters:{docs:{source:{transform:(e,t)=>N(t.args)}}}},Y={render:()=>F(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(C(`reports/products`,`loading`),()=>C(`reports/products`,null))},X={render:()=>F(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(C(`reports/products`,`error`),()=>C(`reports/products`,null))},Z={render:()=>F(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(C(`reports/products`,`empty`),()=>C(`reports/products`,null))},Q={render:e=>(0,L.jsx)(I,{...e}),args:{...y,preset:U,withComparison:!0},argTypes:{...m,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/top-performing-products"
	renderComponent={ TopPerformingProductsRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingProducts,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<TopPerformingProductsStoryControls>;
        }) => getTopPerformingProductsSource(storyContext.args)
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingProducts,
  args: {
    preset: DEFAULT_PRESET,
    withComparison: true
  },
  decorators: [withWidgetCanvas],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, storyContext: {
          args: Partial<TopPerformingProductsStoryControls>;
        }) => getTopPerformingProductsSource(storyContext.args)
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period product revenue changes.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPerformingProductsOnPreset('last-90-days'),
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
  render: () => renderTopPerformingProductsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('reports/products', 'error');
    return () => forceStatsMockState('reports/products', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTopPerformingProductsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('reports/products', 'empty');
    return () => forceStatsMockState('reports/products', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state ("No product sales in
this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TopPerformingProductsDashboardStory {...args} />,
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
\\trenderModule="storybook/top-performing-products"
\\trenderComponent={ TopPerformingProductsRender }
\\tattributes={ {
\\t\\treportParams: getDefaultQueryParams( true ),
\\t} }
/>\`
      }
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};