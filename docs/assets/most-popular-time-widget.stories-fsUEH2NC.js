import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{c as ee,l as a,n as o,t as s}from"./src-D999WZaQ.js";import{En as c,X as l,dn as u,t as d}from"./src-D2IHjuoj.js";import{gt as te,m as f}from"./charts-provider-B4DO9Yxs.js";import{n as p,r as m,s as h}from"./register-report-mocks-na9LuJMa.js";import{t as ne}from"./widget-state-DSKZ3UcR.js";import{n as re,t as g}from"./highlight-group-CesqXzPw.js";import{t as ie}from"./src-CCmGlWg_.js";import{a as _,g as ae,h as oe,i as v,m as y,n as b,p as se,r as x}from"./with-widget-canvas-DUlnAQvU.js";var S,C,w=e((()=>{S=`_content_1c7kx_3`,C={content:S}}));function T(e){if(e!==void 0)return t(n(`%s of views`,`jetpack-premium-analytics-pkg`),o(e/100,`percentage`,{decimals:0,signDisplay:`never`}))}function E(){let{data:e,isLoading:t,isFetching:r,isError:i,error:o,refetch:s}=l(),{dayOfWeek:c,hourOfDay:u,percent:d,hourPercent:f}=e??{},p=c===void 0,m=i&&p;return(0,O.jsx)(`div`,{className:C.content,children:(0,O.jsx)(ne,{isLoading:t,isFetching:r,isError:m,isEmpty:p,error:m?te(o,{retryDescription:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,empty:{description:n(`Your busiest day and hour will show here once visitors start arriving.`,`jetpack-premium-analytics-pkg`)},children:c!==void 0&&(0,O.jsxs)(re,{children:[(0,O.jsx)(g,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:a(c),caption:T(d)}),u!==void 0&&(0,O.jsx)(g,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:ee(u),caption:T(f)})]})})})}function D({attributes:e={}}){return(0,O.jsx)(f,{attributes:e,children:(0,O.jsx)(E,{})})}var O,k=e((()=>{d(),s(),ie(),r(),w(),O=i()})),A,j=e((()=>{A={}})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/most-popular-time`,N=`jpa/scheduled`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of the week and the hour of the day when your site is viewed most, with each one's share of your views.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return c.removeQueries({queryKey:[`stats`,`insights`]}),h(K,e),()=>{h(K,null),c.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(D,{attributes:{reportParams:u()}})}function U(e){return(0,W.jsx)(y,{...e,widgetType:v(z,A),renderModule:G,renderComponent:D,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),p(),oe(),_(),b(),k(),j(),B(),W=i(),m(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports over a fixed server-side window, so there is no date range or comparison period.`}}}},J={render:H,decorators:[x]},Y={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[x],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...se},argTypes:{...ae}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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