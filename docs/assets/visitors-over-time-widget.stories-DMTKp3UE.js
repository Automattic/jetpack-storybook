import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{R as a,W as o}from"./charts-provider-BXqhfUep.js";import{a as s,c,i as l,s as u,u as d}from"./with-widget-canvas-GOKy81gT.js";import{C as f,_ as p,b as m,r as h,t as g,v as _,x as v}from"./reports-BV_fXYE0.js";import{n as y,t as b}from"./report-metric-chart-DnzkNB0Q.js";function x({chartType:e}){let{reportParams:n}=o();return(0,C.jsx)(b,{report:h(n),chartType:e,field:`visitors`,label:t(`Store visitors`,`jetpack-woocommerce-stats-pkg`),countLabel:w,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}},errorText:t(`We couldn't load store visitors. Please try again in a moment.`,`jetpack-woocommerce-stats-pkg`)})}function S({attributes:e={}}){return(0,C.jsx)(a,{attributes:e,children:(0,C.jsx)(x,{chartType:e.chartType})})}var C,w,T=e((()=>{p(),r(),y(),g(),C=i(),w=e=>n(`%s Store visitor`,`%s Store visitors`,e,`jetpack-woocommerce-stats-pkg`)})),E,D,O,k,A,j,M,N,P,F,I=e((()=>{E=`woocommerce-analytics/visitors-over-time`,D=`jpa/seen`,O=`Store visitors over time`,k=`Track how many people visit your store over time.`,A={content:`Store visitors recorded through WooCommerce sessions. Jetpack Stats measures visitors separately, so totals may differ.`},j=`visitors`,M=`framed`,N=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],P=`jetpack-woocommerce-stats-pkg`,F={name:E,icon:D,title:O,description:k,help:A,category:j,presentation:M,attributes:N,textdomain:P}}));function L({withComparison:e,chartType:t}){return(0,R.jsx)(S,{attributes:{reportParams:m({withComparison:e}),chartType:t}})}function ee({withComparison:e,chartType:t,...n}){return(0,R.jsx)(c,{...n,widgetType:U,renderModule:V,renderComponent:S,attributes:{reportParams:m({withComparison:e}),chartType:t}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),T(),I(),R=i(),{expect:z,within:B}=__STORYBOOK_MODULE_TEST__,f(),V=`storybook/visitors-over-time`,H=`analytics/reports/sessions/by-date`,U=s(F),W={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},chartType:{control:`inline-radio`,options:[`line`,`bar`],description:`How the series is drawn.`}},G={title:`Packages/WooCommerce Stats/Widgets/VisitorsOverTime`,component:S,tags:[`autodocs`],argTypes:W,parameters:{docs:{description:{component:`The "Store visitors over time" widget. Track how many people visit your store over time, with an optional previous-period comparison.`}}}},K={render:L,args:{withComparison:!1,chartType:`line`},decorators:[l],play:async({canvasElement:e})=>{let t=B(e);await z(await t.findByText(`58.6K`)).toBeVisible()}},q={render:L,args:{withComparison:!0,chartType:`line`},decorators:[l]},J={render:L,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(H,`loading`)},Y={render:L,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(H,`empty`)},X={render:L,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(H,`error`)},Z={render:L,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(H,`error-retryable`)},Q={tags:[`widget-dashboard`],render:e=>(0,R.jsx)(ee,{...e}),args:{...u,withComparison:!0,chartType:`line`},argTypes:{...d,...W}},$=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('58.6K')).toBeVisible();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsOverTimeWidget,
  args: {
    withComparison: true,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(VISITORS_REPORT_PATH, 'loading')
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(VISITORS_REPORT_PATH, 'empty')
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(VISITORS_REPORT_PATH, 'error')
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderVisitorsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(VISITORS_REPORT_PATH, 'error-retryable')
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <VisitorsOverTimeDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true,
    chartType: 'line'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...storyControlArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,Y as Empty,Z as ErrorRetryable,X as ErrorState,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};