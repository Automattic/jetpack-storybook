import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{kn as ee,t as a}from"./build-module-Cm3Kd3py.js";import{c as te,l as o,n as s,t as c}from"./src-DONsbwfd.js";import{Tn as l,q as ne,t as u,un as d}from"./src-U-sDMJfd.js";import{m as f,ut as re}from"./charts-provider-BuTg1Ngr.js";import{n as p,r as m,s as h}from"./register-report-mocks-CuD7zNat.js";import{t as ie}from"./widget-state-COGLon3H.js";import{n as ae,t as g}from"./highlight-group-CZDJnR1X.js";import{t as _}from"./src-aK2isfTX.js";import{a as v,g as y,h as b,i as x,m as oe,n as se,p as S,r as C}from"./with-widget-canvas-XGsf17xH.js";var w,T,E=e((()=>{w=`_content_1c7kx_3`,T={content:w}}));function D(e){if(e!==void 0)return t(n(`%s of views`,`jetpack-premium-analytics-pkg`),s(e/100,`percentage`,{decimals:0,signDisplay:`never`}))}function O(){let{data:e,isLoading:t,isFetching:r,isError:i,error:a,refetch:s}=ne(),{dayOfWeek:c,hourOfDay:l,percent:u,hourPercent:d}=e??{},f=c===void 0,p=i&&f;return(0,A.jsx)(`div`,{className:T.content,children:(0,A.jsx)(ie,{isLoading:t,isFetching:r,isError:p,isEmpty:f,error:p?re(a,{retryDescription:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,empty:{icon:ee,description:n(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics-pkg`)},children:c!==void 0&&(0,A.jsxs)(ae,{children:[(0,A.jsx)(g,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:o(c),caption:D(u)}),l!==void 0&&(0,A.jsx)(g,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:te(l),caption:D(d)})]})})})}function k({attributes:e={}}){return(0,A.jsx)(f,{attributes:e,children:(0,A.jsx)(O,{})})}var A,ce=e((()=>{u(),c(),_(),r(),a(),E(),A=i()})),j,le=e((()=>{j={}})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/most-popular-time`,N=`jpa/scheduled`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of the week and the hour of the day when your site is viewed most, with each one's share of your views.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return l.removeQueries({queryKey:[`stats`,`insights`]}),h(K,e),()=>{h(K,null),l.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(k,{attributes:{reportParams:d()}})}function U(e){return(0,W.jsx)(oe,{...e,widgetType:x(z,j),renderModule:G,renderComponent:k,attributes:{reportParams:d(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),p(),b(),v(),se(),ce(),le(),B(),W=i(),m(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports over a fixed server-side window, so there is no date range or comparison period.`}}}},J={render:H,decorators:[C]},Y={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...S},argTypes:{...y}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"Resolved without peak day/hour data: the widget shows its empty state, under\nthe widget's own `scheduled` glyph rather than the error state's icon.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostPopularTimeDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};