import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{b as t,n,t as r}from"./build-module-sy00sX6O.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{I as a,Vt as ee}from"./charts-provider-ARR6XQI-.js";import{i as o,m as te,p as ne,t as s}from"./src-B1VHSDBi.js";import{Ln as c,rt as l,t as u,vn as d}from"./src-CRoMOZVt.js";import{t as f}from"./widget-state-BXwwUN1D.js";import{t as p}from"./src-CYAbiDlj.js";import{n as m,r as h,s as g}from"./register-report-mocks-AdY-3qvh.js";import{n as _,t as v}from"./highlight-group-B_99_7QB.js";import{a as y,c as b,i as x,l as re,n as ie,o as S,r as C,s as w}from"./with-widget-canvas-Byxvvc4f.js";var T,E,ae=e((()=>{T=`_content_1c7kx_3`,E={content:T}}));function D(e){if(e!==void 0)return t(n(`%s of views`,`jetpack-premium-analytics-pkg`),o(e/100,`percentage`,{decimals:0,signDisplay:`never`}))}function O(){let{data:e,isLoading:t,isFetching:r,isError:i,error:a,refetch:o}=l(),{dayOfWeek:s,hourOfDay:c,percent:u,hourPercent:d}=e??{},p=s===void 0,m=i&&p;return(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(f,{isLoading:t,isFetching:r,isError:m,isEmpty:p,error:m?ee(a,{retryDescription:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:o}):null,empty:{description:n(`Your busiest day and hour will show here once visitors start arriving.`,`jetpack-premium-analytics-pkg`)},children:s!==void 0&&(0,A.jsxs)(_,{children:[(0,A.jsx)(v,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:te(s),caption:D(u)}),c!==void 0&&(0,A.jsx)(v,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:ne(c),caption:D(d)})]})})})}function k({attributes:e={}}){return(0,A.jsx)(a,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j=e((()=>{u(),s(),p(),r(),ae(),A=i()})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/most-popular-time`,N=`jpa/scheduled`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of the week and the hour of the day when your site is viewed most, with each one's share of your views.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return c.removeQueries({queryKey:[`stats`,`insights`]}),g(K,e),()=>{g(K,null),c.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(k,{attributes:{reportParams:d()}})}function U(e){return(0,W.jsx)(w,{...e,widgetType:x(z),renderModule:G,renderComponent:k,attributes:{reportParams:d(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),m(),b(),y(),ie(),j(),B(),W=i(),h(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports over a fixed server-side window, so there is no date range or comparison period.`}}}},J={render:H,decorators:[C]},Y={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[C],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...S},argTypes:{...re}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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