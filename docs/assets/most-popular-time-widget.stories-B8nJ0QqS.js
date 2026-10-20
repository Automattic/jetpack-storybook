import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{c as ee,l as a,n as o,t as s}from"./src-B3by1uT8.js";import{Q as c,kn as l,pn as u,t as d}from"./src-oBqoEV9n.js";import{gt as te,m as f}from"./charts-provider-DIMYBOsS.js";import{n as p,r as m,s as h}from"./register-report-mocks-B5NW5Ctv.js";import{t as ne}from"./widget-state-1xFE4TA5.js";import{n as re,t as g}from"./highlight-group-X96Icji3.js";import{t as ie}from"./src-D4uzv82S.js";import{a as _,g as v,h as y,i as b,m as x,n as ae,p as oe,r as S}from"./with-widget-canvas-CALdA6ku.js";var C,w,T=e((()=>{C=`_content_1c7kx_3`,w={content:C}}));function E(e){if(e!==void 0)return t(n(`%s of views`,`jetpack-premium-analytics-pkg`),o(e/100,`percentage`,{decimals:0,signDisplay:`never`}))}function D(){let{data:e,isLoading:t,isFetching:r,isError:i,error:o,refetch:s}=c(),{dayOfWeek:l,hourOfDay:u,percent:d,hourPercent:f}=e??{},p=l===void 0,m=i&&p;return(0,k.jsx)(`div`,{className:w.content,children:(0,k.jsx)(ne,{isLoading:t,isFetching:r,isError:m,isEmpty:p,error:m?te(o,{retryDescription:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,empty:{description:n(`Your busiest day and hour will show here once visitors start arriving.`,`jetpack-premium-analytics-pkg`)},children:l!==void 0&&(0,k.jsxs)(re,{children:[(0,k.jsx)(g,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:a(l),caption:E(d)}),u!==void 0&&(0,k.jsx)(g,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:ee(u),caption:E(f)})]})})})}function O({attributes:e={}}){return(0,k.jsx)(f,{attributes:e,children:(0,k.jsx)(D,{})})}var k,A=e((()=>{d(),s(),ie(),r(),T(),k=i()})),j,se=e((()=>{j={}})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/most-popular-time`,N=`jpa/scheduled`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of the week and the hour of the day when your site is viewed most, with each one's share of your views.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return l.removeQueries({queryKey:[`stats`,`insights`]}),h(K,e),()=>{h(K,null),l.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(O,{attributes:{reportParams:u()}})}function U(e){return(0,W.jsx)(x,{...e,widgetType:b(z,j),renderModule:G,renderComponent:O,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),p(),y(),_(),ae(),A(),se(),B(),W=i(),m(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports over a fixed server-side window, so there is no date range or comparison period.`}}}},J={render:H,decorators:[S]},Y={render:H,tags:[`!autodocs`],decorators:[S],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[S],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[S],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...oe},argTypes:{...v}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Default state — the peak day and hour highlights.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularTime,
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved without peak day/hour data: the widget shows its empty state, not
the error state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostPopularTimeDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};