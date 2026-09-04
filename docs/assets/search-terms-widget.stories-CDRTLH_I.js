import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a,kn as o,t as s}from"./build-module-zwSmKorH.js";import{Kt as c}from"./build-module-DkueWSrd.js";import{At as l,K as u,Mt as d,b as f,g as p,kt as m}from"./hooks-B-btgGBm.js";import{t as h,u as ee}from"./src-DFNM1k7F.js";import{t as g}from"./src-BWy2h2l_.js";import{en as _,i as v,st as te}from"./date-filters-panel-B8opo2uL.js";import"./constants-B1kGztHF.js";import{r as y,t as ne}from"./leaderboard-skeleton-DGDpEg9w.js";import{G as re,K as ie,N as ae,S as oe,Y as b,b as se}from"./report-metric-KGnB9vhe.js";import{t as x}from"./widget-state-Dqefb49q.js";import{C as ce,D as le,E as ue,O as de,S,T as C,b as fe,k as w,t as pe,w as me,x as T}from"./src-0dZ7sF1j.js";var E,D,O,he=e((()=>{E=`_root_19tfr_1`,D=`_content_19tfr_9`,O={root:E,content:D}}));function ge({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=te(e,{maxRows:t}),u=i&&!r.isError,d=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:u?e.previousViews:void 0})),f=d.length===0&&s;return{data:d,isLoading:a,isFetching:o,isError:f,error:f?c:null,hasComparison:u,refetch:l}}var _e=e((()=>{v()}));function ve(){let{reportParams:e}=f(),{data:n,isLoading:r,isFetching:a,isError:o,error:s,hasComparison:p,refetch:h}=ge({reportParams:e,max:10}),g=(0,i.useMemo)(()=>{let e=l(n.map(e=>e.views),p?n.map(e=>e.previousViews):[]);return n.map((t,n)=>{let r=t.previousViews;return{id:`${n}-${t.label}`,...ae({label:t.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:t.views,previousValue:r,currentShare:m(t.views,e),previousShare:p&&r!==void 0?m(r,e):void 0,delta:p&&r!==void 0?d(t.views,r):void 0}})},[n,p]);return(0,A.jsxs)(c,{className:O.root,children:[(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(x,{isLoading:r,isFetching:a,isError:o,isEmpty:n.length===0,error:u(s,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),empty:{icon:ee,description:t(`No search terms in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ne,{rows:10}),children:(0,A.jsx)(y,{data:g,withComparison:p,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,A.jsx)(oe,{children:(0,A.jsx)(se,{report:`search-terms`})})]})}function k({attributes:e={}}){return(0,A.jsx)(p,{attributes:e,children:(0,A.jsx)(ve,{})})}var A,ye=e((()=>{pe(),h(),a(),n(),g(),he(),_e(),A=r()})),j,M=e((()=>{s(),j={icon:o,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/search-terms`,P=`Top searched terms`,F=`The search terms visitors use to find your site.`,I={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(k,{attributes:{reportParams:_(e)}})}function V(e){return(0,H.jsx)(k,{attributes:{reportParams:_(!1,e)}})}function xe(e){return(0,H.jsx)(k,{...e})}function Se({withComparison:e,...t}){return(0,H.jsx)(C,{...t,widgetType:W,renderModule:U,renderComponent:xe,attributes:{reportParams:_(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),ue(),de(),ce(),fe(),re(),ye(),M(),be(),H=r(),ie(),U=`storybook/search-terms`,W=S(z,j),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:B,args:{withComparison:!1},decorators:[T,w]},q={render:B,args:{withComparison:!0},decorators:[T,w]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(b(`stats/search-terms`,`loading`),()=>b(`stats/search-terms`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(b(`stats/search-terms`,`error`),()=>b(`stats/search-terms`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(b(`stats/search-terms`,`error-retryable`),()=>b(`stats/search-terms`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(b(`stats/search-terms`,`empty`),()=>b(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(Se,{...e}),args:{...me,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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