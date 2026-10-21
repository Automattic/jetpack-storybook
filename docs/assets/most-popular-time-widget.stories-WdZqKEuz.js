import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,n,t as r}from"./build-module-DQe4AOzJ.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{c as a,l as o,n as s,t as c}from"./src-BjbRKINU.js";import{On as l,Q as u,pn as d,t as f}from"./src-5g9sGwvT.js";import{lt as p,m}from"./charts-provider-Dz_9KfQe.js";import{Q as h,X as g,Y as _,Z as ee,ct as te,lt as ne,ot as re,st as ie,t as v}from"./src-CwWcdYh9.js";import{t as y}from"./widget-state-CgiqWOxt.js";import{a as b,o as x,u as S}from"./widget-state-B6SJsJzX.js";import{n as C,t as w}from"./highlight-group-DVA1PaIT.js";var T,E,D=e((()=>{T=`_content_1c7kx_3`,E={content:T}}));function O(e){if(e!==void 0)return t(n(`%s of views`,`jetpack-premium-analytics-pkg`),s(e/100,`percentage`,{decimals:0,signDisplay:`never`}))}function k(){let{data:e,isLoading:t,isFetching:r,isError:i,error:s,refetch:c}=u(),{dayOfWeek:l,hourOfDay:d,percent:f,hourPercent:m}=e??{},h=l===void 0,g=i&&h;return(0,j.jsx)(`div`,{className:E.content,children:(0,j.jsx)(y,{isLoading:t,isFetching:r,isError:g,isEmpty:h,error:g?p(s,{retryDescription:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,empty:{description:n(`Your busiest day and hour will show here once visitors start arriving.`,`jetpack-premium-analytics-pkg`)},children:l!==void 0&&(0,j.jsxs)(C,{children:[(0,j.jsx)(w,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:o(l),caption:O(f)}),d!==void 0&&(0,j.jsx)(w,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:a(d),caption:O(m)})]})})})}function A({attributes:e={}}){return(0,j.jsx)(m,{attributes:e,children:(0,j.jsx)(k,{})})}var j,ae=e((()=>{f(),c(),v(),r(),D(),j=i()})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/most-popular-time`,N=`jpa/scheduled`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of the week and the hour of the day when your site is viewed most, with each one's share of your views.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return l.removeQueries({queryKey:[`stats`,`insights`]}),S(K,e),()=>{S(K,null),l.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(A,{attributes:{reportParams:d()}})}function U(e){return(0,W.jsx)(ie,{...e,widgetType:ee(z),renderModule:G,renderComponent:A,attributes:{reportParams:d(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),b(),te(),h(),_(),ae(),B(),W=i(),x(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports over a fixed server-side window, so there is no date range or comparison period.`}}}},J={render:H,decorators:[g]},Y={render:H,tags:[`!autodocs`],decorators:[g],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[g],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[g],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...re},argTypes:{...ne}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};