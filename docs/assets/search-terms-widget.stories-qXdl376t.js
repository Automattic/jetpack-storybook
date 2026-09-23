import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Dn as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{Et as c}from"./build-module-l8c-_EUg2.js";import{Ot as l,_n as u,hn as d,m as f,mn as p,v as ee}from"./hooks-D2-uOzcc.js";import{t as m,u as h}from"./src-C-E2d-Lb.js";import{t as g}from"./src-Dg9rrzZN.js";import{$t as _,ot as te,t as v}from"./src-0ge7d6kt.js";import"./constants-B1kGztHF.js";import{r as ne,t as re}from"./leaderboard-skeleton-CDMNyzgV.js";import{c as y,i as ie,r as ae}from"./register-report-mocks-DAHzORiq.js";import{S as oe,j as b,v as x}from"./report-metric--Et_iyvv.js";import{t as S}from"./widget-state-BlFCjv4l.js";import{t as se}from"./src-Ddik3icB.js";import{a as ce,d as le,f as ue,h as C,i as de,m as fe,n as pe,p as me,r as w,u as he}from"./with-widget-canvas-q45aoI9y.js";var T,E,D,ge=e((()=>{T=`_root_19tfr_1`,E=`_content_19tfr_9`,D={root:T,content:E}}));function _e({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=te(e,{maxRows:t}),u=i&&!r.isError,d=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:u?e.previousViews:void 0})),f=d.length===0&&s;return{data:d,isLoading:a,isFetching:o,isError:f,error:f?c:null,hasComparison:u,refetch:l}}var ve=e((()=>{v()}));function ye(){let{reportParams:e}=ee(),{data:n,isLoading:r,isFetching:i,isError:o,error:s,hasComparison:f,refetch:m}=_e({reportParams:e,max:10}),g=(0,a.useMemo)(()=>{let e=d(n.map(e=>e.views),f?n.map(e=>e.previousViews):[]);return n.map((t,n)=>{let r=t.previousViews;return{id:`${n}-${t.label}`,...b({label:t.label,media:{kind:`none`},action:{kind:`static`}}),currentValue:t.views,previousValue:r,currentShare:p(t.views,e),previousShare:f&&r!==void 0?p(r,e):void 0,delta:f&&r!==void 0?u(t.views,r):void 0}})},[n,f]);return(0,k.jsxs)(c,{className:D.root,children:[(0,k.jsx)(`div`,{className:D.content,children:(0,k.jsx)(S,{isLoading:r,isFetching:i,isError:o,isEmpty:n.length===0,error:l(s,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}),empty:{icon:h,description:t(`No search terms in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(re,{rows:10}),children:(0,k.jsx)(ne,{data:g,withComparison:f,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,k.jsx)(oe,{children:(0,k.jsx)(x,{report:`search-terms`})})]})}function O({attributes:e={}}){return(0,k.jsx)(f,{attributes:e,children:(0,k.jsx)(ye,{})})}var k,A=e((()=>{se(),m(),o(),n(),g(),ge(),ve(),k=r()})),j,M=e((()=>{s(),j={icon:i,attributes:[],example:{attributes:{}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/search-terms`,P=`Top searched terms`,F=`The search terms visitors use to find your site.`,I={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{reportParams:_(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:_(!1,e)}})}function xe(e){return(0,H.jsx)(O,{...e})}function Se({withComparison:e,...t}){return(0,H.jsx)(le,{...t,widgetType:W,renderModule:U,renderComponent:xe,attributes:{reportParams:_(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),ue(),fe(),ce(),pe(),ae(),A(),M(),be(),H=r(),ie(),U=`storybook/search-terms`,W=de(z,j),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:B,args:{withComparison:!1},decorators:[w,C]},q={render:B,args:{withComparison:!0},decorators:[w,C]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(y(`stats/search-terms`,`loading`),()=>y(`stats/search-terms`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(y(`stats/search-terms`,`error`),()=>y(`stats/search-terms`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(y(`stats/search-terms`,`error-retryable`),()=>y(`stats/search-terms`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(y(`stats/search-terms`,`empty`),()=>y(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(Se,{...e}),args:{...he,withComparison:!0},argTypes:{...me,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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