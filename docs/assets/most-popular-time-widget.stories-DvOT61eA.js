import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{i as a,m as o,p as s,t as c}from"./src-DfZ_1B12.js";import{Sn as l,Un as u,at as d,t as f}from"./src-CU_16BOb.js";import{I as p,Wt as ee}from"./charts-provider-DOirnpAA.js";import{t as te}from"./widget-state-DnbF8hrz.js";import{i as m}from"./with-story-router-CI3ZTRlv.js";import{n as h,r as g,s as _}from"./register-report-mocks-C2D4cGS-.js";import{n as ne,t as v}from"./highlight-group-sjd2j0V4.js";import{a as re,c as ie,i as y,l as b,o as x,r as S,s as C,u as w}from"./with-widget-canvas-_EJfaAe7.js";var T,E,D=e((()=>{T=`_content_1c7kx_3`,E={content:T}}));function O(e){if(e!==void 0)return t(n(`%s of views`,`jetpack-premium-analytics-pkg`),a(e/100,`percentage`,{decimals:0,signDisplay:`never`}))}function k(){let{data:e,isLoading:t,isFetching:r,isError:i,error:a,refetch:c}=d(),{dayOfWeek:l,hourOfDay:u,percent:f,hourPercent:p}=e??{},m=l===void 0,h=i&&m;return(0,j.jsx)(`div`,{className:E.content,children:(0,j.jsx)(te,{isLoading:t,isFetching:r,isError:h,isEmpty:m,error:h?ee(a,{retryDescription:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}):null,empty:{description:n(`Your busiest day and hour will show here once visitors start arriving.`,`jetpack-premium-analytics-pkg`)},children:l!==void 0&&(0,j.jsxs)(ne,{children:[(0,j.jsx)(v,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:o(l),caption:O(f)}),u!==void 0&&(0,j.jsx)(v,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:s(u),caption:O(p)})]})})})}function A({attributes:e={}}){return(0,j.jsx)(p,{attributes:e,children:(0,j.jsx)(k,{})})}var j,ae=e((()=>{f(),c(),m(),r(),D(),j=i()})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/most-popular-time`,N=`jpa/scheduled`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of the week and the hour of the day when your site is viewed most, with each one's share of your views.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return u.removeQueries({queryKey:[`stats`,`insights`]}),_(K,e),()=>{_(K,null),u.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(A,{attributes:{reportParams:l()}})}function U(e){return(0,W.jsx)(ie,{...e,widgetType:re(z),renderModule:G,renderComponent:A,attributes:{reportParams:l(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),h(),b(),x(),S(),ae(),B(),W=i(),g(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports over a fixed server-side window, so there is no date range or comparison period.`}}}},J={render:H,decorators:[y]},Y={render:H,tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`empty`)},Q={tags:[`widget-dashboard`],render:e=>(0,W.jsx)(U,{...e}),args:{...C},argTypes:{...w}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
  render: args => <MostPopularTimeDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};