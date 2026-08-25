import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{ll as n,n as r}from"./build-module-CDRs4YxF.js";import{g as ee}from"./hooks-CZXBZb9T.js";import{n as i,t as a}from"./build-module-CwBehiyn.js";import{t as o,x as s}from"./src-Cd0g8CQG.js";import{qt as c,t as l}from"./src-DGH0uIKs.js";import{K as u,q as d}from"./report-metric-B5QafvOJ.js";import{C as f,D as p,E as te,S as ne,T as m,b as re,c as ie,t as ae,w as oe,x as h}from"./src-BAKQbBc-.js";import{n as g,t as _}from"./force-stats-mock-state-QbrLznei.js";function v({attributes:e={},setError:t}){return(0,y.jsx)(ee,{attributes:e,setError:t,options:{from:`/`},children:(0,y.jsx)(ie,{limit:5})})}var y,b=e((()=>{ae(),y=t()})),x,S=e((()=>{r(),x={icon:n}})),C,w,T,E,D,O,k,se=e((()=>{C=`jpa/top-performing-products`,w=`Top performing products`,T=`Shows the top products by net revenue over the selected time period.`,E={content:`Your best-selling products by revenue over the selected time period.`},D=`store`,O=`framed`,k={name:C,title:w,description:T,help:E,category:D,presentation:O}}));function ce(e){let t=e.reduce((e,t)=>({total_orders:e.total_orders+Number(t.orders_count),total_quantity:e.total_quantity+Number(t.total_quantity),total_revenue:e.total_revenue+Number(t.product_net_revenue)}),{total_orders:0,total_quantity:0,total_revenue:0});return{data:e,summary:{total_orders:String(t.total_orders),total_products:String(e.length),total_quantity:String(t.total_quantity),total_revenue:t.total_revenue.toFixed(2)}}}function A(e){V||(V=!0,a.use(async(t,n)=>{let r=t.path??t.url??``;return r.startsWith(R)?ce(e):r.startsWith(z)?e.map(e=>({id:Number(e.product_id),name:e.product_name,images:[]})):n(t)}))}function j(e=!1,t=U){return{reportParams:c(e,t)}}function M({withComparison:e,preset:t}){let n=!!e,r=t??U;return!n&&r===U?`getDefaultQueryParams()`:n&&r===U?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function N(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<TopPerformingProductsRender
\tattributes={ {
\t\treportParams: ${M(e)},
\t} }
\tsetError={ () => undefined }
/>`}function P({withComparison:e,preset:t}){return(0,L.jsx)(v,{attributes:j(e,t),setError:G})}function F(e){return(0,L.jsx)(v,{attributes:j(!1,e),setError:G})}function I({withComparison:e,preset:t,...n}){return(0,L.jsx)(m,{...n,widgetType:ne(k,x),renderModule:H,renderComponent:v,attributes:j(e,t)})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{i(),l(),o(),u(),te(),f(),re(),g(),b(),S(),se(),L=t(),d(),R=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/products`,z=`/wc/v3/products`,B=[{product_id:`701`,product_name:`Performance hoodie`,product_net_revenue:`24880.00`,product_gross_revenue:`27620.00`,product_type:`simple`,orders_count:`212`,sku:`APP-HOODIE`,total_quantity:`254`,stock_status:`instock`},{product_id:`702`,product_name:`Merino travel tee`,product_net_revenue:`18240.00`,product_gross_revenue:`20480.00`,product_type:`variation`,orders_count:`175`,sku:`APP-TEE`,total_quantity:`220`,stock_status:`instock`},{product_id:`703`,product_name:`Canvas weekender`,product_net_revenue:`13650.00`,product_gross_revenue:`15120.00`,product_type:`variable`,orders_count:`91`,sku:`ACC-BAG`,total_quantity:`102`,stock_status:`instock`},{product_id:`704`,product_name:`Insulated bottle`,product_net_revenue:`7425.00`,product_gross_revenue:`8125.00`,product_type:`simple`,orders_count:`148`,sku:`ACC-BOTTLE`,total_quantity:`180`,stock_status:`instock`}],V=!1,A(B),H=`storybook/top-performing-products`,U=`last-30-days`,W=s,G=()=>void 0,K={title:`Packages/Premium Analytics/Widgets/TopPerformingProducts`,component:v,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top products by net revenue for the selected period.`}}}},q={render:P,args:{preset:U,withComparison:!1},decorators:[h],parameters:{docs:{source:{transform:(e,t)=>N(t.args)}}}},J={render:P,args:{preset:U,withComparison:!0},decorators:[h],parameters:{docs:{source:{transform:(e,t)=>N(t.args)}}}},Y={render:()=>F(`last-90-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(_(`reports/products`,`loading`),()=>_(`reports/products`,null))},X={render:()=>F(`last-7-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(_(`reports/products`,`error`),()=>_(`reports/products`,null))},Z={render:()=>F(`last-365-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(_(`reports/products`,`empty`),()=>_(`reports/products`,null))},Q={render:e=>(0,L.jsx)(I,{...e}),args:{...oe,preset:U,withComparison:!0},argTypes:{...p,preset:{control:`select`,options:W,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

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