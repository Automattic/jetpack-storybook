import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{C as a,Ut as o,t as s}from"./date-fns-B2pKki1V.js";import{Un as c,n as l}from"./build-module-DmVuor49.js";import{R as u,W as d,t as f}from"./build-module-8J9jVgyz.js";import{t as p,y as ee}from"./src-B3le4dug.js";import{n as m,o as h,t as g}from"./src-3Lv7Etdm.js";import{Yn as _,ar as v,ut as y,yn as te}from"./chart-tooltip-DBv7LA1C.js";import{C as ne,S as re,T as b,k as ie}from"./report-metric-Db_B5iSk.js";import{t as ae}from"./widget-state-BjOTAdtj.js";import{S as oe,b as x,t as S,x as se,y as C}from"./src-D7XBPU8G.js";import{n as w,r as T}from"./with-widget-canvas-Dz43KNHY.js";var E,D,O,k,A,j=e((()=>{E=`_root_pa277_1`,D=`_content_pa277_7`,O=`_highlight_pa277_16`,k=`_caption_pa277_20`,A={root:E,content:D,highlight:O,caption:k}}));function M(e,t){let n=e?.[t],r=typeof n==`string`?Number(n):n;return typeof r==`number`&&Number.isFinite(r)?r:void 0}function ce(e){let t=e?.views_best_day;if(typeof t!=`string`||t===``)return;let n=a(t);return o(n)?n:void 0}function le(){let{data:e,isLoading:t,isFetching:r,isError:i,refetch:a}=te(),o=e?.stats,s=ce(o),c=M(o,`views_best_day_total`),l=M(o,`views`),d=s===void 0||c===void 0;return(0,P.jsx)(u,{className:A.root,direction:`column`,children:(0,P.jsx)(`div`,{className:A.content,children:(0,P.jsx)(ae,{isLoading:t,isFetching:r,isError:i&&d,isEmpty:d,error:{description:n(`We couldn't load your most popular day. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:()=>void a()}]},empty:{icon:ee,description:n(`Not enough views yet to pick a most popular day.`,`jetpack-premium-analytics`)},children:s!==void 0&&c!==void 0&&(0,P.jsx)(I,{date:s,views:c,share:l?c/l:0})})})})}function N({attributes:e={}}){return(0,P.jsx)(ie,{attributes:e,children:(0,P.jsx)(le,{})})}var P,F,I,L=e((()=>{y(),g(),p(),S(),r(),f(),s(),j(),P=i(),F=({label:e,value:t,caption:n})=>(0,P.jsxs)(u,{direction:`column`,gap:`xs`,children:[(0,P.jsx)(d,{variant:`body-md`,children:e}),(0,P.jsx)(d,{variant:`heading-2xl`,children:t}),(0,P.jsx)(d,{variant:`body-md`,className:A.caption,children:n})]}),I=({date:e,views:r,share:i=0})=>(0,P.jsxs)(u,{className:A.highlight,direction:`column`,gap:`xl`,justify:`center`,children:[(0,P.jsx)(F,{label:n(`Day`,`jetpack-premium-analytics`),value:h(e,`MMMM d`),caption:h(e,`year`)}),(0,P.jsx)(F,{label:n(`Views`,`jetpack-premium-analytics`),value:m(r,`number`,{useMultipliers:!0,decimals:1}),caption:t(n(`%s of views`,`jetpack-premium-analytics`),m(i,`percentage`,{decimals:2,signDisplay:`never`}))})]})})),R,z=e((()=>{r(),l(),R={name:`jpa/most-popular-day`,title:n(`Most popular day`,`jetpack-premium-analytics`),help:{content:n(`The day your site received the most views.`,`jetpack-premium-analytics`)},icon:c}}));function B(e){return v.removeQueries({queryKey:[`stats`,`site`]}),b(G,e),()=>{b(G,null),v.removeQueries({queryKey:[`stats`,`site`]})}}function V({withComparison:e}){return(0,U.jsx)(N,{attributes:{reportParams:_(e)}})}function H({withComparison:e,...t}){return(0,U.jsx)(x,{...t,widgetType:R,renderModule:W,renderComponent:N,attributes:{reportParams:_(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{y(),se(),w(),re(),L(),z(),U=i(),ne(),W=`storybook/most-popular-day`,G=`proxy/v1.1/stats`,K={title:`Packages/Premium Analytics/Widgets/MostPopularDay`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:'The "Most popular day" widget ports the Jetpack Stats all-time highlight: the single day your site drew the most views, with that day\'s view count and its share of all views. The value comes from a site-wide summary that has no comparison period and does not depend on the dashboard date range, so `WithComparison` renders identically to `Default`.'}}}},q={render:V,args:{withComparison:!1},decorators:[T]},J={render:V,args:{withComparison:!0},decorators:[T]},Y={render:()=>V({withComparison:!1}),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`loading`)},X={render:()=>V({withComparison:!1}),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`error`)},Z={render:()=>V({withComparison:!1}),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`empty`)},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...C,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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