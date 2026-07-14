import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,rl as a}from"./build-module-Bt8gOW8e.js";import{T as o,in as s,s as c}from"./hooks-CuFQtcHB.js";import{n as l,t as u}from"./build-module--3XdSn0q.js";import{l as d,t as f}from"./src-DsEGMN_I.js";import{n as p,t as m}from"./register-report-mocks-BVUAUf2H.js";import{S as h,b as g,c as _,t as v,x as y,y as b}from"./src-DgQNROIn.js";function x({attributes:e={},setError:t}){return(0,S.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,S.jsx)(_,{limit:5})})}var S,C=e((()=>{v(),S=r()})),w,T=e((()=>{n(),i(),w={name:`jpa/top-performing-products`,title:t(`Top performing products`,`jetpack-premium-analytics`),help:{content:t(`Your best-selling products by revenue over the selected time period.`,`jetpack-premium-analytics`)},icon:a}}));function E(e){let t=e.reduce((e,t)=>({total_orders:e.total_orders+Number(t.orders_count),total_quantity:e.total_quantity+Number(t.total_quantity),total_revenue:e.total_revenue+Number(t.product_net_revenue)}),{total_orders:0,total_quantity:0,total_revenue:0});return{data:e,summary:{total_orders:String(t.total_orders),total_products:String(e.length),total_quantity:String(t.total_quantity),total_revenue:t.total_revenue.toFixed(2)}}}function D(e){L||(L=!0,u.use(async(t,n)=>{let r=t.path??t.url??``;return r.startsWith(P)?E(e):r.startsWith(F)?e.map(e=>({id:Number(e.product_id),name:e.product_name,images:[]})):n(t)}))}function O(e=!1,t=z){return{reportParams:s(e,t)}}function k({withComparison:e,preset:t}){let n=!!e,r=t??z;return!n&&r===z?`getDefaultQueryParams()`:n&&r===z?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function A(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<TopPerformingProductsRender
\tattributes={ {
\t\treportParams: ${k(e)},
\t} }
\tsetError={ () => undefined }
/>`}function j({withComparison:e,preset:t}){return(0,N.jsx)(x,{attributes:O(e,t),setError:V})}function M({withComparison:e,preset:t,...n}){return(0,N.jsx)(g,{...n,widgetType:w,renderModule:R,renderComponent:x,attributes:O(e,t)})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{l(),o(),f(),m(),y(),C(),T(),N=r(),p(),P=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/products`,F=`/wc/v3/products`,I=[{product_id:`701`,product_name:`Performance hoodie`,product_net_revenue:`24880.00`,product_gross_revenue:`27620.00`,product_type:`simple`,orders_count:`212`,sku:`APP-HOODIE`,total_quantity:`254`,stock_status:`instock`},{product_id:`702`,product_name:`Merino travel tee`,product_net_revenue:`18240.00`,product_gross_revenue:`20480.00`,product_type:`variation`,orders_count:`175`,sku:`APP-TEE`,total_quantity:`220`,stock_status:`instock`},{product_id:`703`,product_name:`Canvas weekender`,product_net_revenue:`13650.00`,product_gross_revenue:`15120.00`,product_type:`variable`,orders_count:`91`,sku:`ACC-BAG`,total_quantity:`102`,stock_status:`instock`},{product_id:`704`,product_name:`Insulated bottle`,product_net_revenue:`7425.00`,product_gross_revenue:`8125.00`,product_type:`simple`,orders_count:`148`,sku:`ACC-BOTTLE`,total_quantity:`180`,stock_status:`instock`}],L=!1,D(I),R=`storybook/top-performing-products`,z=`last-30-days`,B=d,V=()=>void 0,H=e=>(0,N.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,N.jsx)(e,{})}),U={title:`Packages/Premium Analytics/Widgets/TopPerformingProducts`,component:x,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:B,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top products by net revenue for the selected period.`}}}},W={render:j,args:{preset:z,withComparison:!1},decorators:[H],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},G={render:j,args:{preset:z,withComparison:!0},decorators:[H],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},K={render:e=>(0,N.jsx)(M,{...e}),args:{...b,preset:z,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:B,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/top-performing-products"
	renderComponent={ TopPerformingProductsRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period product revenue changes.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...K.parameters?.docs?.description}}},q=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{W as Default,K as WidgetDashboardWithWidget,G as WithComparison,q as __namedExportsOrder,U as default};