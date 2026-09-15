import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,t as r}from"./build-module-yGZutq_9.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{jn as a,t as o}from"./build-module-zwSmKorH.js";import{mt as ee,y as s}from"./wp-date-settings-CfkuPjAL.js";import{c,l,n as u,t as d}from"./src-sylycxfK.js";import{Cn as f,M as te,en as p,i as m}from"./date-filters-panel-DG78FzsZ.js";import{n as h,t as g}from"./highlight-group-yzgMOUxQ.js";import{U as _,W as ne,q as v}from"./report-metric-24O_S2Ha.js";import{t as re}from"./widget-state-H35pymmC.js";import{C as ie,D as y,E as b,S as x,T as S,b as C,t as w,w as T,x as E}from"./src-BSh21kav.js";var D,O,ae=e((()=>{D=`_content_1c7kx_3`,O={content:D}}));function k(e){if(e!==void 0)return t(n(`%s of views`,`jetpack-premium-analytics-pkg`),u(e/100,`percentage`,{decimals:0,signDisplay:`never`}))}function oe(){let{data:e,isLoading:t,isFetching:r,isError:i,error:o,refetch:s}=te(),{dayOfWeek:u,hourOfDay:d,percent:f,hourPercent:p}=e??{},m=u===void 0,_=i&&m;return(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(re,{isLoading:t,isFetching:r,isError:_,isEmpty:m,error:_?ee(o,{retryDescription:n(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,empty:{icon:a,description:n(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics-pkg`)},children:u!==void 0&&(0,j.jsxs)(h,{children:[(0,j.jsx)(g,{label:n(`Best day`,`jetpack-premium-analytics-pkg`),value:l(u),caption:k(f)}),d!==void 0&&(0,j.jsx)(g,{label:n(`Best hour`,`jetpack-premium-analytics-pkg`),value:c(d),caption:k(p)})]})})})}function A({attributes:e={}}){return(0,j.jsx)(s,{attributes:e,children:(0,j.jsx)(oe,{})})}var j,se=e((()=>{m(),d(),w(),r(),o(),ae(),j=i()})),M,ce=e((()=>{o(),M={icon:a}})),N,P,F,I,L,R,z,B=e((()=>{N=`jpa/most-popular-time`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of the week and the hour of the day when your site is viewed most, with each one's share of your views.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return f.removeQueries({queryKey:[`stats`,`insights`]}),v(K,e),()=>{v(K,null),f.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(A,{attributes:{reportParams:p()}})}function U(e){return(0,W.jsx)(S,{...e,widgetType:x(z,M),renderModule:G,renderComponent:A,attributes:{reportParams:p(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),_(),b(),ie(),C(),se(),ce(),B(),W=i(),ne(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports over a fixed server-side window, so there is no date range or comparison period.`}}}},J={render:H,decorators:[E]},Y={render:H,tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...T},argTypes:{...y}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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