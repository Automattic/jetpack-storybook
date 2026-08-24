import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{An as o,n as s}from"./build-module-CDRs4YxF.js";import{Tn as c,ln as l,t as u}from"./src-BkEEHFPD.js";import{b as d,g as f}from"./hooks-D72fqOk6.js";import{t as p,u as ee}from"./src-BKLK-O8P.js";import{Z as te,qt as m,t as h}from"./src-B6SykZ_w.js";import"./constants-B1kGztHF.js";import{dt as g,ft as ne,k as re,mt as ie}from"./chart-tooltip-CCn9LpKV.js";import{r as ae,t as oe}from"./leaderboard-skeleton-ClCYSNaF.js";import{K as se,S as ce,X as _,q as le,w as v}from"./report-metric-BvOBbBNn.js";import{t as y}from"./widget-state-BZM1sA2m.js";import{C as b,D as ue,E as de,O as fe,S as pe,T as me,b as x,k as S,t as he,w as ge,x as C}from"./src-ByxRpitB.js";var w,T,E,D,O,_e=e((()=>{w=`_root_19s7c_1`,T=`_content_19s7c_9`,E=`_itemLabel_19s7c_17`,D=`_itemLabelText_19s7c_23`,O={root:w,content:T,itemLabel:E,itemLabelText:D}}));function ve({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=te(e,{maxRows:t}),u=i&&!r.isError,d=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:u?e.previousViews:void 0})),f=d.length===0&&s;return{data:d,isLoading:a,isFetching:o,isError:f,error:f?c:null,hasComparison:u,refetch:l}}var ye=e((()=>{h()}));function be(){let{reportParams:e}=d(),{data:n,isLoading:r,isFetching:a,isError:o,error:s,hasComparison:u,refetch:f}=ve({reportParams:e,max:10}),p=(0,i.useMemo)(()=>{let e=ne(n.map(e=>e.views),u?n.map(e=>e.previousViews):[]);return n.map((t,n)=>{let r=t.previousViews;return{id:`${n}-${t.label}`,label:(0,A.jsx)(l,{align:`center`,className:O.itemLabel,children:(0,A.jsx)(c,{className:O.itemLabelText,children:t.label})}),currentValue:t.views,previousValue:r,currentShare:g(t.views,e),previousShare:u&&r!==void 0?g(r,e):void 0,delta:u&&r!==void 0?ie(t.views,r):void 0}})},[n,u]);return(0,A.jsxs)(l,{className:O.root,children:[(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(y,{isLoading:r,isFetching:a,isError:o,isEmpty:n.length===0,error:re(s,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:ee,description:t(`No search terms in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(ae,{data:p,withComparison:u,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,A.jsx)(v,{children:(0,A.jsx)(ce,{report:`search-terms`})})]})}function k({attributes:e={}}){return(0,A.jsx)(f,{attributes:e,children:(0,A.jsx)(be,{})})}var A,j=e((()=>{he(),p(),a(),n(),u(),_e(),ye(),A=r()})),M,xe=e((()=>{s(),M={icon:o,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,Se=e((()=>{N=`jpa/search-terms`,P=`Top searched terms`,F=`The search terms visitors use to find your site.`,I={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(k,{attributes:{reportParams:m(e)}})}function V(e){return(0,H.jsx)(k,{attributes:{reportParams:m(!1,e)}})}function Ce(e){return(0,H.jsx)(k,{...e})}function we({withComparison:e,...t}){return(0,H.jsx)(me,{...t,widgetType:W,renderModule:U,renderComponent:Ce,attributes:{reportParams:m(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),de(),fe(),b(),x(),se(),j(),xe(),Se(),H=r(),le(),U=`storybook/search-terms`,W=pe(z,M),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:B,args:{withComparison:!1},decorators:[C,S]},q={render:B,args:{withComparison:!0},decorators:[C,S]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(_(`stats/search-terms`,`loading`),()=>_(`stats/search-terms`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(_(`stats/search-terms`,`error`),()=>_(`stats/search-terms`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(_(`stats/search-terms`,`error-retryable`),()=>_(`stats/search-terms`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(_(`stats/search-terms`,`empty`),()=>_(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(we,{...e}),args:{...ge,withComparison:!0},argTypes:{...ue,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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