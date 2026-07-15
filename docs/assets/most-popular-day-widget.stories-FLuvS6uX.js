import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_l as a,n as o}from"./build-module-C6Ow06jV.js";import{C as s,Ut as c,t as l}from"./date-fns-B2pKki1V.js";import{R as u,W as d,t as f}from"./build-module-JNPAD9ni.js";import{t as p,y as ee}from"./src-Bf8IXmOS.js";import{n as m,o as h,t as g}from"./src-DQmpJRyV.js";import{_n as _,qn as v,rr as y,ut as b}from"./chart-tooltip-BIiKhH0l.js";import{C as te,S as ne,T as x,k as re}from"./report-metric-D7PFtooA.js";import{t as ie}from"./widget-state-CsCQdmg9.js";import{S as ae,b as S,t as C,x as oe,y as w}from"./src-DMKl_JFZ.js";import{n as T,r as E}from"./with-widget-canvas-Dz43KNHY.js";var D,O,k,A,j,se=e((()=>{D=`_root_pa277_1`,O=`_content_pa277_7`,k=`_highlight_pa277_16`,A=`_caption_pa277_20`,j={root:D,content:O,highlight:k,caption:A}}));function M(e,t){let n=e?.[t],r=typeof n==`string`?Number(n):n;return typeof r==`number`&&Number.isFinite(r)?r:void 0}function ce(e){let t=e?.views_best_day;if(typeof t!=`string`||t===``)return;let n=s(t);return c(n)?n:void 0}function le(){let{data:e,isLoading:n,isFetching:r,isError:i,refetch:a}=_(),o=e?.stats,s=ce(o),c=M(o,`views_best_day_total`),l=M(o,`views`),d=s===void 0||c===void 0;return(0,P.jsx)(u,{className:j.root,direction:`column`,children:(0,P.jsx)(`div`,{className:j.content,children:(0,P.jsx)(ie,{isLoading:n,isFetching:r,isError:i&&d,isEmpty:d,error:{description:t(`We couldn't load your most popular day. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>void a()}]},empty:{icon:ee,description:t(`Not enough views yet to pick a most popular day.`,`jetpack-premium-analytics`)},children:s!==void 0&&c!==void 0&&(0,P.jsx)(I,{date:s,views:c,share:l?c/l:0})})})})}function N({attributes:e={}}){return(0,P.jsx)(re,{attributes:e,children:(0,P.jsx)(le,{})})}var P,F,I,L=e((()=>{b(),g(),p(),C(),n(),f(),l(),se(),P=i(),F=({label:e,value:t,caption:n})=>(0,P.jsxs)(u,{direction:`column`,gap:`xs`,children:[(0,P.jsx)(d,{variant:`body-md`,children:e}),(0,P.jsx)(d,{variant:`heading-2xl`,children:t}),(0,P.jsx)(d,{variant:`body-md`,className:j.caption,children:n})]}),I=({date:e,views:n,share:i=0})=>(0,P.jsxs)(u,{className:j.highlight,direction:`column`,gap:`xl`,justify:`center`,children:[(0,P.jsx)(F,{label:t(`Day`,`jetpack-premium-analytics`),value:h(e,`MMMM d`),caption:h(e,`year`)}),(0,P.jsx)(F,{label:t(`Views`,`jetpack-premium-analytics`),value:m(n,`number`,{useMultipliers:!0,decimals:1}),caption:r(t(`%s of views`,`jetpack-premium-analytics`),m(i,`percentage`,{decimals:2,signDisplay:`never`}))})]})})),R,z=e((()=>{n(),o(),R={name:`jpa/most-popular-day`,title:t(`Most popular day`,`jetpack-premium-analytics`),help:{content:t(`The day your site received the most views.`,`jetpack-premium-analytics`)},icon:a}}));function B(e){return y.removeQueries({queryKey:[`stats`,`site`]}),x(G,e),()=>{x(G,null),y.removeQueries({queryKey:[`stats`,`site`]})}}function V({withComparison:e}){return(0,U.jsx)(N,{attributes:{reportParams:v(e)}})}function H({withComparison:e,...t}){return(0,U.jsx)(S,{...t,widgetType:R,renderModule:W,renderComponent:N,attributes:{reportParams:v(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{b(),oe(),T(),ne(),L(),z(),U=i(),te(),W=`storybook/most-popular-day`,G=`proxy/v1.1/stats`,K={title:`Packages/Premium Analytics/Widgets/MostPopularDay`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:'The "Most popular day" widget ports the Jetpack Stats all-time highlight: the single day your site drew the most views, with that day\'s view count and its share of all views. The value comes from a site-wide summary that has no comparison period and does not depend on the dashboard date range, so `WithComparison` renders identically to `Default`.'}}}},q={render:V,args:{withComparison:!1},decorators:[E]},J={render:V,args:{withComparison:!0},decorators:[E]},Y={render:()=>V({withComparison:!1}),tags:[`!autodocs`],decorators:[E],beforeEach:()=>B(`loading`)},X={render:()=>V({withComparison:!1}),tags:[`!autodocs`],decorators:[E],beforeEach:()=>B(`error`)},Z={render:()=>V({withComparison:!1}),tags:[`!autodocs`],decorators:[E],beforeEach:()=>B(`empty`)},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...w,withComparison:!0},argTypes:{...ae,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularDay,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the best day for views and its share of all views.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderMostPopularDay,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Comparison params from the date-range picker are passed through, but the
highlight has no comparison data, so the widget renders the same single value.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderMostPopularDay({
    withComparison: false
  }),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderMostPopularDay({
    withComparison: false
  }),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderMostPopularDay({
    withComparison: false
  }),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('empty')
}`,...Z.parameters?.docs?.source},description:{story:'Resolved without a usable `views_best_day`: the widget shows its empty state\n(the neutral calendar glyph and the "not enough views" message).',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MostPopularDayDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};