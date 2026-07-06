import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_n as i,n as a}from"./build-module-DwipKI4I.js";import{f as o,s,xt as c}from"./hooks-75Q8jkhI.js";import{n as l,t as u}from"./build-module-BIOdYLM6.js";import{l as d,t as f}from"./src-CT8Z3786.js";import{n as p,t as m}from"./register-report-mocks-DzHzl9P_.js";import{i as h,n as g,r as _,t as v}from"./widget-dashboard-with-widget-DWH13qgv.js";import{o as y,t as b}from"./src-D5yM6NHG.js";function x({attributes:e={},setError:t}){return(0,S.jsx)(s,{attributes:e,setError:t,options:{from:`/`},children:(0,S.jsx)(y,{limit:5})})}var S,C=e((()=>{b(),S=r()})),w,T=e((()=>{n(),a(),w={name:`jpa/top-performing-bookings`,title:t(`Top performing bookings`,`jetpack-premium-analytics`),description:t(`Shows the top booking products by net revenue over the selected time period.`,`jetpack-premium-analytics`),icon:i}}));function E(e){let t=e.reduce((e,t)=>({total_orders:e.total_orders+Number(t.orders_count),total_quantity:e.total_quantity+Number(t.total_quantity),total_revenue:e.total_revenue+Number(t.product_net_revenue)}),{total_orders:0,total_quantity:0,total_revenue:0});return{data:e,summary:{total_orders:String(t.total_orders),total_products:String(e.length),total_quantity:String(t.total_quantity),total_revenue:t.total_revenue.toFixed(2)}}}function D(e){L||(L=!0,u.use(async(t,n)=>{let r=t.path??t.url??``;return r.startsWith(P)?E(e):r.startsWith(F)?e.map(e=>({id:Number(e.product_id),name:e.product_name,images:[]})):n(t)}))}function O(e=!1,t=z){return{reportParams:c(e,t)}}function k({withComparison:e,preset:t}){let n=!!e,r=t??z;return!n&&r===z?`getDefaultQueryParams()`:n&&r===z?`getDefaultQueryParams( true )`:`getDefaultQueryParams( ${n?`true`:`false`}, '${r}' )`}function A(e){return`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<TopPerformingBookingsRender
\tattributes={ {
\t\treportParams: ${k(e)},
\t} }
/>`}function j({withComparison:e,preset:t}){return(0,N.jsx)(x,{attributes:O(e,t)})}function M({withComparison:e,preset:t,...n}){return(0,N.jsx)(g,{...n,widgetType:w,renderModule:R,renderComponent:x,attributes:{reportParams:c(e,t)}})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{l(),o(),f(),m(),_(),C(),T(),N=r(),p(),P=`/jetpack-premium-analytics/v1/proxy/v2/analytics/reports/products`,F=`/wc/v3/products`,I=[{product_id:`801`,product_name:`City tasting tour`,product_net_revenue:`18640.00`,product_gross_revenue:`21320.00`,product_type:`booking`,orders_count:`84`,sku:`BOOK-CITY`,total_quantity:`112`,stock_status:`instock`},{product_id:`802`,product_name:`Private lesson`,product_net_revenue:`14220.00`,product_gross_revenue:`15960.00`,product_type:`bookable-service`,orders_count:`61`,sku:`BOOK-LESSON`,total_quantity:`73`,stock_status:`instock`},{product_id:`803`,product_name:`Weekend retreat`,product_net_revenue:`9350.00`,product_gross_revenue:`10450.00`,product_type:`bookable-event`,orders_count:`38`,sku:`BOOK-RETREAT`,total_quantity:`46`,stock_status:`instock`},{product_id:`804`,product_name:`Strategy session`,product_net_revenue:`5125.00`,product_gross_revenue:`5900.00`,product_type:`booking`,orders_count:`22`,sku:`BOOK-STRATEGY`,total_quantity:`27`,stock_status:`instock`}],L=!1,D(I),R=`storybook/top-performing-bookings`,z=`last-30-days`,B=d,V=e=>(0,N.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,N.jsx)(e,{})}),H={title:`Packages/Premium Analytics/Widgets/TopPerformingBookings`,component:x,tags:[`autodocs`],argTypes:{preset:{control:`select`,options:B,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{description:{component:`Dashboard widget that displays top booking products by net revenue for the selected period.`}}}},U={render:j,args:{preset:z,withComparison:!1},decorators:[V],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},W={render:j,args:{preset:z,withComparison:!0},decorators:[V],parameters:{docs:{source:{transform:(e,t)=>A(t.args)}}}},G={render:e=>(0,N.jsx)(M,{...e}),args:{...v,preset:z,withComparison:!0},argTypes:{...h,preset:{control:`select`,options:B,description:`Date-range preset used to generate the widget report params.`},withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},parameters:{docs:{source:{code:`import { getDefaultQueryParams } from '@jetpack-premium-analytics/data';

<WidgetDashboardWithWidget
	widgetType={ widgetDefinition }
	renderModule="storybook/top-performing-bookings"
	renderComponent={ TopPerformingBookingsRender }
	attributes={ {
		reportParams: getDefaultQueryParams( true ),
	} }
/>`}}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Default state for the current report period.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Comparison period enabled, showing period-over-period change for each booking product.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Renders the widget through the shared dashboard harness.`,...G.parameters?.docs?.description}}},K=[`Default`,`WithComparison`,`WidgetDashboardWithWidget`]}))();export{U as Default,G as WidgetDashboardWithWidget,W as WithComparison,K as __namedExportsOrder,H as default};