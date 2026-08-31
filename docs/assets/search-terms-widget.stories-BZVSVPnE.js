import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{kn as o,t as s}from"./build-module-CR6EsQjA.js";import{pn as c,t as l}from"./src-DNxY8Wb4.js";import{b as u,g as d}from"./hooks-BWcn0vi0.js";import{t as f,u as ee}from"./src-CldFJNXL.js";import{et as te,qt as p,t as m}from"./src-FsWZnx8G.js";import"./constants-B1kGztHF.js";import{M as ne,_t as re,ht as ie,mt as h}from"./chart-tooltip-BeJF71cy.js";import{r as ae,t as oe}from"./leaderboard-skeleton-CCi0UEy6.js";import{G as g,K as se,N as ce,S as le,Y as _,b as ue}from"./report-metric-mdJlOfac.js";import{t as de}from"./widget-state-DGlWUhZs.js";import{C as v,D as y,E as b,O as x,S as fe,T as pe,b as me,k as S,t as he,w as ge,x as C}from"./src-CVfVeNRU.js";var w,T,E,_e=e((()=>{w=`_root_jzzhc_1`,T=`_content_jzzhc_9`,E={root:w,content:T}}));function ve({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=te(e,{maxRows:t}),u=i&&!r.isError,d=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:u?e.previousViews:void 0})),f=d.length===0&&s;return{data:d,isLoading:a,isFetching:o,isError:f,error:f?c:null,hasComparison:u,refetch:l}}var D=e((()=>{m()}));function ye(){let{reportParams:e}=u(),{data:n,isLoading:r,isFetching:a,isError:o,error:s,hasComparison:l,refetch:d}=ve({reportParams:e,max:10}),f=(0,i.useMemo)(()=>{let e=ie(n.map(e=>e.views),l?n.map(e=>e.previousViews):[]);return n.map((t,n)=>{let r=t.previousViews;return{id:`${n}-${t.label}`,...ce({label:t.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:t.views,previousValue:r,currentShare:h(t.views,e),previousShare:l&&r!==void 0?h(r,e):void 0,delta:l&&r!==void 0?re(t.views,r):void 0}})},[n,l]);return(0,k.jsxs)(c,{className:E.root,children:[(0,k.jsx)(`div`,{className:E.content,children:(0,k.jsx)(de,{isLoading:r,isFetching:a,isError:o,isEmpty:n.length===0,error:ne(s,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:{icon:ee,description:t(`No search terms in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(oe,{rows:10}),children:(0,k.jsx)(ae,{data:f,withComparison:l,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,k.jsx)(le,{children:(0,k.jsx)(ue,{report:`search-terms`})})]})}function O({attributes:e={}}){return(0,k.jsx)(d,{attributes:e,children:(0,k.jsx)(ye,{})})}var k,A=e((()=>{he(),f(),a(),n(),l(),_e(),D(),k=r()})),j,M=e((()=>{s(),j={icon:o,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/search-terms`,P=`Top searched terms`,F=`The search terms visitors use to find your site.`,I={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{reportParams:p(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:p(!1,e)}})}function xe(e){return(0,H.jsx)(O,{...e})}function Se({withComparison:e,...t}){return(0,H.jsx)(pe,{...t,widgetType:W,renderModule:U,renderComponent:xe,attributes:{reportParams:p(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),b(),x(),v(),me(),g(),A(),M(),be(),H=r(),se(),U=`storybook/search-terms`,W=fe(z,j),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:B,args:{withComparison:!1},decorators:[C,S]},q={render:B,args:{withComparison:!0},decorators:[C,S]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(_(`stats/search-terms`,`loading`),()=>_(`stats/search-terms`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(_(`stats/search-terms`,`error`),()=>_(`stats/search-terms`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(_(`stats/search-terms`,`error-retryable`),()=>_(`stats/search-terms`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(_(`stats/search-terms`,`empty`),()=>_(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(Se,{...e}),args:{...ge,withComparison:!0},argTypes:{...y,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderSearchTerms,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSearchTerms,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'loading');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'error');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: the widget shows the neutral
"You don't have access to this data." copy and no Retry action, since a
permission gate is deterministic and retrying cannot clear it.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'error-retryable');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
widget shows its retryable copy with a Retry action, which re-runs the query
(still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'empty');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral search
glyph and "No search terms in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <SearchTermsDashboardStory {...args} />,
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};