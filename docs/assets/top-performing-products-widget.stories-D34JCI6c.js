import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{H as ee,I as o,Ut as te}from"./charts-provider-DD0V80Cw.js";import{G as s,r as c}from"./with-story-router-B5SlLlCs.js";import{a as l,c as u,i as d,s as f,u as p}from"./with-widget-canvas-3tpJ9fHI.js";import{a as m,f as h,g,h as _,p as ne,s as re,t as v,u as ie,v as ae}from"./reports-DArEUZRd.js";function oe({filter:e,errorText:t}){let{reportParams:n}=ee(),r=(0,y.useMemo)(()=>({...n,filters:[e]}),[n,e]),{primary:i,comparison:a,hasComparison:o,isLoading:c,isFetching:l,hasData:u,isError:d,error:f,refetch:p}=re(r,x),h=m((0,y.useMemo)(()=>(i.data?.data??[]).map(e=>e.product_id),[i.data]),r),g=(0,y.useMemo)(()=>{let e=new Map((a.data?.data??[]).map(e=>[e.product_id,e.product_net_revenue])),t=h.primary.data??{};return(i.data?.data??[]).map((n,r)=>{let i=t[n.product_id];return{id:String(n.product_id||r),label:n.product_name,value:n.product_net_revenue,previousValue:e.get(n.product_id),media:{kind:`thumbnail`,url:i?.image.url||void 0,alt:i?.image.alt||n.product_name},action:i&&{kind:`postLink`,id:n.product_id,href:i.permalink}}})},[i.data,a.data,h.primary.data]),_=o&&g.some(e=>e.previousValue!==void 0);return(0,b.jsx)(s,{rows:g,status:{isLoading:c,isFetching:l||h.isFetching,isError:d&&!u,hasComparison:_,refetch:p},error:te(f,{retryDescription:t,onRetry:p}),maxRows:x,format:S})}var y,b,x,S,C=e((()=>{h(),y=t(n(),1),v(),b=a(),x=5,S={type:`currency`,options:{useMultipliers:!0}}}));function w({attributes:e={}}){return(0,T.jsx)(o,{attributes:e,children:(0,T.jsx)(oe,{filter:ie,errorText:r(`We couldn't load product data. Please try again in a moment.`,`jetpack-woocommerce-stats-pkg`)})})}var T,se=e((()=>{h(),i(),C(),v(),T=a()})),E,D,O,k,A,j,M,N,P,ce=e((()=>{E=`woocommerce-analytics/top-performing-products`,D=`jpa/chart-bar`,O=`Top performing products`,k=`Shows the top products by net revenue over the selected time period.`,A={content:`Your best-selling products by revenue over the selected time period.`},j=`store`,M=`framed`,N=`jetpack-woocommerce-stats-pkg`,P={name:E,icon:D,title:O,description:k,help:A,category:j,presentation:M,textdomain:N}}));function F({withComparison:e}){return(0,L.jsx)(w,{attributes:{reportParams:_({withComparison:e})}})}function I({withComparison:e,...t}){return(0,L.jsx)(u,{...t,widgetType:U,renderModule:V,renderComponent:w,attributes:{reportParams:_({withComparison:e})}})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{ne(),se(),ce(),L=a(),{expect:R,waitFor:z,within:B}=__STORYBOOK_MODULE_TEST__,ae(),V=`storybook/top-performing-products`,H=`analytics/reports/products`,U=l(P),W={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},G={title:`Packages/WooCommerce Stats/Widgets/TopPerformingProducts`,component:w,tags:[`autodocs`],argTypes:W,parameters:{docs:{description:{component:`The "Top performing products" widget. Ranks the top physical products of the period by net revenue, with thumbnails and links to each product, and an optional previous-period comparison.`}}}},K={render:F,args:{withComparison:!1},decorators:[d,c],play:async({canvasElement:e})=>{let t=B(e);await t.findAllByRole(`listitem`),await z(()=>R(t.getAllByRole(`listitem`).filter(e=>B(e).queryAllByRole(`link`).length===0)).toHaveLength(1))}},q={render:F,args:{withComparison:!0},decorators:[d,c]},J={render:F,args:{withComparison:!1},tags:[`!autodocs`],decorators:[d],beforeEach:g(H,`loading`)},Y={render:F,args:{withComparison:!1},tags:[`!autodocs`],decorators:[d],beforeEach:g(H,`empty`)},X={render:F,args:{withComparison:!1},tags:[`!autodocs`],decorators:[d],beforeEach:g(H,`error`)},Z={render:F,args:{withComparison:!1},tags:[`!autodocs`],decorators:[d],beforeEach:g(H,`error-retryable`)},Q={tags:[`widget-dashboard`],render:e=>(0,L.jsx)(I,{...e}),args:{...f,withComparison:!0},argTypes:{...p,...W}},$=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingProductsWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findAllByRole('listitem');
    await waitFor(() => expect(canvas.getAllByRole('listitem').filter(row => within(row).queryAllByRole('link').length === 0)).toHaveLength(1));
  }
}`,...K.parameters?.docs?.source},description:{story:`The details mock answers one product fewer than the report ranks, so one row has no
thumbnail and no link, as a product the store deleted does.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingProductsWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingProductsWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(PRODUCTS_REPORT_PATH, 'loading')
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingProductsWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(PRODUCTS_REPORT_PATH, 'empty')
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingProductsWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(PRODUCTS_REPORT_PATH, 'error')
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingProductsWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(PRODUCTS_REPORT_PATH, 'error-retryable')
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <TopPerformingProductsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...storyControlArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,Y as Empty,Z as ErrorRetryable,X as ErrorState,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};