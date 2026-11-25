import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{H as o,I as s,Ut as ee}from"./charts-provider-Bk_WeVSh.js";import{t as te}from"./donut-DLTPW52m.js";import{a as c,c as l,i as u,s as d,u as f}from"./with-widget-canvas-wY4pBWZv.js";import{C as p,_ as ne,a as re,b as m,t as h,v as g,x as _}from"./reports-Bip0sZAr.js";function v(e){let t=new Map;for(let n of e?.data??[]){let e=t.get(S(n));t.set(S(n),{device_type:e?.device_type??n.device_type,active_sessions:(e?.active_sessions??0)+n.active_sessions})}return t}function y(e,t){let n=v(e),r=v(t),i=[...n].map(([e,n])=>({label:x(n.device_type),value:n.active_sessions,previousValue:t?r.get(e)?.active_sessions??0:void 0}));for(let[e,t]of r)n.has(e)||i.push({label:x(t.device_type),value:0,previousValue:t.active_sessions});return i}var b,x,S,ie=e((()=>{i(),b={mobile:r(`Mobile`,`jetpack-woocommerce-stats-pkg`),desktop:r(`Desktop`,`jetpack-woocommerce-stats-pkg`),tablet:r(`Tablet`,`jetpack-woocommerce-stats-pkg`)},x=e=>b[e.toLowerCase()]||e||r(`Unknown`,`jetpack-woocommerce-stats-pkg`),S=e=>e.device_type.toLowerCase()}));function ae(){let{reportParams:e}=o(),{primary:t,comparison:n,hasComparison:i,isLoading:a,isFetching:s,hasData:c,isError:l,error:u,refetch:d}=re(e);return(0,T.jsx)(te,{segments:(0,w.useMemo)(()=>y(t.data,n.data),[t.data,n.data]),status:{isLoading:a,isFetching:s,isError:l&&!c,hasComparison:i,refetch:d},error:ee(u,{retryDescription:r(`We couldn't load sessions data. Please try again in a moment.`,`jetpack-woocommerce-stats-pkg`),onRetry:d}),variant:`half-ring`,total:t.data?.summary.total_sessions,previousTotal:n.data?.summary.total_sessions})}function C({attributes:e={}}){return(0,T.jsx)(s,{attributes:e,children:(0,T.jsx)(ae,{})})}var w,T,E=e((()=>{ne(),i(),w=t(n(),1),h(),ie(),T=a()})),D,O,k,A,j,M,N,P,F,I=e((()=>{D=`woocommerce-analytics/sessions-by-device`,O=`jpa/chart-bar`,k=`Sessions by device`,A=`Shows the sessions breakdown by device type over the selected time period.`,j={content:`See how store sessions are split by device type.`},M=`store`,N=`framed`,P=`jetpack-woocommerce-stats-pkg`,F={name:D,icon:O,title:k,description:A,help:j,category:M,presentation:N,textdomain:P}}));function L({withComparison:e}){return(0,R.jsx)(C,{attributes:{reportParams:m({withComparison:e})}})}function oe({withComparison:e,...t}){return(0,R.jsx)(l,{...t,widgetType:U,renderModule:V,renderComponent:C,attributes:{reportParams:m({withComparison:e})}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),E(),I(),R=a(),{expect:z,within:B}=__STORYBOOK_MODULE_TEST__,p(),V=`storybook/sessions-by-device`,H=`analytics/reports/sessions/by-device`,U=c(F),W={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},G={title:`Packages/WooCommerce Stats/Widgets/SessionsByDevice`,component:C,tags:[`autodocs`],argTypes:W,parameters:{docs:{description:{component:`The "Sessions by device" widget. Splits the sessions of the period by device category as a half ring, with the total the report states under the arc and an optional previous-period comparison.`}}}},K={render:L,args:{withComparison:!1},decorators:[u],play:async({canvasElement:e})=>{let t=B(e);await z(await t.findByText(`Mobile`)).toBeVisible(),await z(await t.findByText(`Unknown`)).toBeVisible()}},q={render:L,args:{withComparison:!0},decorators:[u]},J={render:L,args:{withComparison:!1},tags:[`!autodocs`],decorators:[u],beforeEach:_(H,`loading`)},Y={render:L,args:{withComparison:!1},tags:[`!autodocs`],decorators:[u],beforeEach:_(H,`empty`)},X={render:L,args:{withComparison:!1},tags:[`!autodocs`],decorators:[u],beforeEach:_(H,`error`)},Z={render:L,args:{withComparison:!1},tags:[`!autodocs`],decorators:[u],beforeEach:_(H,`error-retryable`)},Q={tags:[`widget-dashboard`],render:e=>(0,R.jsx)(oe,{...e}),args:{...d,withComparison:!0},argTypes:{...f,...W}},$=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderSessionsByDeviceWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Mobile')).toBeVisible();
    await expect(await canvas.findByText('Unknown')).toBeVisible();
  }
}`,...K.parameters?.docs?.source},description:{story:`The report includes sessions with no device type, which the legend names "Unknown", and states
a total above the sum of its rows, as the real report can.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSessionsByDeviceWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSessionsByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(SESSIONS_REPORT_PATH, 'loading')
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderSessionsByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(SESSIONS_REPORT_PATH, 'empty')
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderSessionsByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(SESSIONS_REPORT_PATH, 'error')
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderSessionsByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(SESSIONS_REPORT_PATH, 'error-retryable')
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <SessionsByDeviceDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...storyControlArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,Y as Empty,Z as ErrorRetryable,X as ErrorState,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};