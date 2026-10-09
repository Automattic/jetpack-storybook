import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{kn as a,t as o}from"./build-module-Cm3Kd3py.js";import{c as s,l as ee,n as c,t as l}from"./src-DWPFNEYF.js";import{On as u,Un as d,q as te,t as f}from"./src-EFVFQWJ1.js";import{_ as p,dt as ne}from"./charts-provider-BcXi6Auj.js";import{n as m,r as h,s as g}from"./register-report-mocks-ByCR7QC_.js";import{t as re}from"./widget-state-DFLDEYqh.js";import{n as ie,t as _}from"./highlight-group-Ntg4i2T2.js";import{t as v}from"./src-CCU8io4M.js";import{a as y,g as b,h as ae,i as oe,m as se,n as x,p as S,r as C}from"./with-widget-canvas-CuaJpnBg.js";var w,T,E=e((()=>{w=`_content_1c7kx_3`,T={content:w}}));function D(e){if(e!==void 0)return r(t(`%s of views`,`jetpack-premium-analytics-pkg`),c(e/100,`percentage`,{decimals:0,signDisplay:`never`}))}function ce(){let{data:e,isLoading:n,isFetching:r,isError:i,error:o,refetch:c}=te(),{dayOfWeek:l,hourOfDay:u,percent:d,hourPercent:f}=e??{},p=l===void 0,m=i&&p;return(0,k.jsx)(`div`,{className:T.content,children:(0,k.jsx)(re,{isLoading:n,isFetching:r,isError:m,isEmpty:p,error:m?ne(o,{retryDescription:t(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,empty:{icon:a,description:t(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics-pkg`)},children:l!==void 0&&(0,k.jsxs)(ie,{children:[(0,k.jsx)(_,{label:t(`Best day`,`jetpack-premium-analytics-pkg`),value:ee(l),caption:D(d)}),u!==void 0&&(0,k.jsx)(_,{label:t(`Best hour`,`jetpack-premium-analytics-pkg`),value:s(u),caption:D(f)})]})})})}function O({attributes:e={}}){return(0,k.jsx)(p,{attributes:e,children:(0,k.jsx)(ce,{})})}var k,le=e((()=>{f(),l(),v(),n(),o(),E(),k=i()})),A,j=e((()=>{A={}})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/most-popular-time`,N=`jpa/scheduled`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of the week and the hour of the day when your site is viewed most, with each one's share of your views.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return d.removeQueries({queryKey:[`stats`,`insights`]}),g(K,e),()=>{g(K,null),d.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(O,{attributes:{reportParams:u()}})}function U(e){return(0,W.jsx)(se,{...e,widgetType:oe(z,A),renderModule:G,renderComponent:O,attributes:{reportParams:u(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),m(),ae(),y(),x(),le(),j(),B(),W=i(),h(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports over a fixed server-side window, so there is no date range or comparison period.`}}}},J={render:H,decorators:[C]},Y={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...S},argTypes:{...b}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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