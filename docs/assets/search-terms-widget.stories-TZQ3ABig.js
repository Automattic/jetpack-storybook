import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Dn as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{Et as c}from"./build-module-l8c-_EUg2.js";import{Ct as l,ln as u,m as d,on as f,sn as ee,v as te}from"./hooks-D_-KwK9o.js";import{t as p,u as m}from"./src-C-E2d-Lb.js";import{t as h}from"./src-DvIRuH3Z.js";import{ct as ne,r as g,tn as _}from"./date-period-dropdown-G9YUPeqM.js";import"./constants-B1kGztHF.js";import{r as re,t as ie}from"./leaderboard-skeleton-B2KtRti_.js";import{c as v,i as ae,r as oe}from"./register-report-mocks-Bkj09xXC.js";import{b as se,k as y,v as b}from"./report-metric-u_zN298o.js";import{t as x}from"./widget-state-C7QUic5j.js";import{t as ce}from"./src-BJzObm5Z.js";import{a as le,c as S,d as C,i as ue,l as de,n as fe,o as pe,r as w,s as me,u as he}from"./with-widget-canvas-KqQDaNTN.js";var T,E,D,ge=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function _e({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=ne(e,{maxRows:t}),u=i&&!r.isError,d=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:u?e.previousViews:void 0})),f=d.length===0&&s;return{data:d,isLoading:a,isFetching:o,isError:f,error:f?c:null,hasComparison:u,refetch:l}}var ve=e((()=>{g()}));function ye(){let{reportParams:e}=te(),{data:n,isLoading:r,isFetching:i,isError:o,error:s,hasComparison:d,refetch:p}=_e({reportParams:e,max:10}),h=(0,a.useMemo)(()=>{let e=ee(n.map(e=>e.views),d?n.map(e=>e.previousViews):[]);return n.map((t,n)=>{let r=t.previousViews;return{id:`${n}-${t.label}`,...y({label:t.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:t.views,previousValue:r,currentShare:f(t.views,e),previousShare:d&&r!==void 0?f(r,e):void 0,delta:d&&r!==void 0?u(t.views,r):void 0}})},[n,d]);return(0,k.jsxs)(c,{className:D.root,children:[(0,k.jsx)(`div`,{className:D.content,children:(0,k.jsx)(x,{isLoading:r,isFetching:i,isError:o,isEmpty:n.length===0,error:l(s,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:m,description:t(`No search terms in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(ie,{rows:10}),children:(0,k.jsx)(re,{data:h,withComparison:d,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,k.jsx)(se,{children:(0,k.jsx)(b,{report:`search-terms`})})]})}function O({attributes:e={}}){return(0,k.jsx)(d,{attributes:e,children:(0,k.jsx)(ye,{})})}var k,A=e((()=>{ce(),p(),o(),n(),h(),ge(),ve(),k=r()})),j,M=e((()=>{s(),j={icon:i,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/search-terms`,P=`Top searched terms`,F=`The search terms visitors use to find your site.`,I={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{reportParams:_(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:_(!1,e)}})}function xe(e){return(0,H.jsx)(O,{...e})}function Se({withComparison:e,...t}){return(0,H.jsx)(me,{...t,widgetType:W,renderModule:U,renderComponent:xe,attributes:{reportParams:_(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),S(),he(),le(),fe(),oe(),A(),M(),be(),H=r(),ae(),U=`storybook/search-terms`,W=ue(z,j),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:B,args:{withComparison:!1},decorators:[w,C]},q={render:B,args:{withComparison:!0},decorators:[w,C]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/search-terms`,`loading`),()=>v(`stats/search-terms`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/search-terms`,`error`),()=>v(`stats/search-terms`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/search-terms`,`error-retryable`),()=>v(`stats/search-terms`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(v(`stats/search-terms`,`empty`),()=>v(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(Se,{...e}),args:{...pe,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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