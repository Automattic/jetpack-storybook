import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{kn as a,t as o}from"./build-module-2iv4IIRq.js";import{St as ee,g as s}from"./hooks-CeZpaSFt.js";import{c,l,n as u,t as d}from"./src-DAg36rp3.js";import{En as f,M as te,en as p,r as m}from"./date-period-dropdown-DyvZcpbK.js";import{n as h,t as g}from"./highlight-group-zymPZr3x.js";import{i as _,r as ne,s as v}from"./register-report-mocks-C-2QUOMy.js";import{t as re}from"./widget-state-D0U2ysk4.js";import{t as ie}from"./src-EUoSq9oM.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E}from"./with-widget-canvas-Dl4Y6cIp.js";var D,O,ae=e((()=>{D=`_content_1c7kx_3`,O={content:D}}));function k(e){if(e!==void 0)return r(t(`%s of views`,`jetpack-premium-analytics-pkg`),u(e/100,`percentage`,{decimals:0,signDisplay:`never`}))}function oe(){let{data:e,isLoading:n,isFetching:r,isError:i,error:o,refetch:s}=te(),{dayOfWeek:u,hourOfDay:d,percent:f,hourPercent:p}=e??{},m=u===void 0,_=i&&m;return(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(re,{isLoading:n,isFetching:r,isError:_,isEmpty:m,error:_?ee(o,{retryDescription:t(`We couldn't load your most popular time. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,empty:{icon:a,description:t(`Not enough data to determine your most popular time yet.`,`jetpack-premium-analytics-pkg`)},children:u!==void 0&&(0,j.jsxs)(h,{children:[(0,j.jsx)(g,{label:t(`Best day`,`jetpack-premium-analytics-pkg`),value:l(u),caption:k(f)}),d!==void 0&&(0,j.jsx)(g,{label:t(`Best hour`,`jetpack-premium-analytics-pkg`),value:c(d),caption:k(p)})]})})})}function A({attributes:e={}}){return(0,j.jsx)(s,{attributes:e,children:(0,j.jsx)(oe,{})})}var j,se=e((()=>{m(),d(),ie(),n(),o(),ae(),j=i()})),M,ce=e((()=>{o(),M={icon:a}})),N,P,F,I,L,R,z,B=e((()=>{N=`jpa/most-popular-time`,P=`Most popular time`,F=`The day of week and hour of day when your site gets the most views.`,I={content:`The day of the week and the hour of the day when your site is viewed most, with each one's share of your views.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(e){return f.removeQueries({queryKey:[`stats`,`insights`]}),v(K,e),()=>{v(K,null),f.removeQueries({queryKey:[`stats`,`insights`]})}}function H(){return(0,W.jsx)(A,{attributes:{reportParams:p()}})}function U(e){return(0,W.jsx)(E,{...e,widgetType:x(z,M),renderModule:G,renderComponent:A,attributes:{reportParams:p(!0)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ne(),b(),y(),C(),se(),ce(),B(),W=i(),_(),G=`storybook/most-popular-time`,K=`stats/insights`,q={title:`Packages/Premium Analytics/Widgets/MostPopularTime`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Most popular time" widget. Shows the day of week and hour of day that draw the most views, each with its share of the total. The insights endpoint reports over a fixed server-side window, so there is no date range or comparison period.`}}}},J={render:H,decorators:[T]},Y={render:H,tags:[`!autodocs`],decorators:[T],beforeEach:()=>V(`loading`)},X={render:H,tags:[`!autodocs`],decorators:[T],beforeEach:()=>V(`error`)},Z={render:H,tags:[`!autodocs`],decorators:[T],beforeEach:()=>V(`empty`)},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...w},argTypes:{...S}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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