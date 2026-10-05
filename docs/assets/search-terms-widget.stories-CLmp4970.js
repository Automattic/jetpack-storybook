import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Dn as i,Vu as a,ku as o,t as s}from"./build-module-DNhkEVJn.js";import{m as c,v as l}from"./hooks-D4JKjoBV.js";import{on as u,t as d,ut as f}from"./src-DET7R-ZN.js";import{B as p}from"./helpers-DiXxdgqu.js";import"./rows-DAmD2BmE.js";import{n as m,r as h}from"./with-story-router-C9Mkrjt-.js";import{n as ee,r as te,s as g}from"./register-report-mocks-CeqHRuL3.js";import{b as ne,t as _}from"./leaderboard-DgU56Ubq.js";import{l as v,o as re}from"./report-metric-DZaraPBm.js";import{t as y}from"./src-CgrCAb16.js";import{a as b,d as ie,f as ae,i as oe,n as se,p as x,r as S,u as C}from"./with-widget-canvas-CTgxh6Qa.js";function w({reportParams:e,max:t}){let{primary:n,comparisonRows:r,comparison:i,hasComparison:a,isLoading:o,isFetching:s,isError:c,error:l,refetch:u}=f(e,{maxRows:t}),d=a&&!i.isError,p=(r?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:d?e.previousViews:void 0})),m=p.length===0&&c;return{data:p,isLoading:o,isFetching:s,isError:m,isPrimaryError:n.isError,error:m?l:null,hasComparison:d,refetch:u}}var ce=e((()=>{d()}));function le(){let{reportParams:e}=l(),{data:n,isLoading:r,isFetching:i,isError:o,isPrimaryError:s,error:c,hasComparison:u,refetch:d}=w({reportParams:e,max:10}),f=(0,a.useMemo)(()=>n.map((e,t)=>({id:`${t}-${e.label}`,label:e.label,value:e.views,previousValue:e.previousViews})),[n]);return(0,E.jsx)(_,{rows:f,status:{isLoading:r,isFetching:i,isError:o,hasComparison:u,refetch:d},error:p(c,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),footer:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(ne,{report:`search-terms`}),(0,E.jsx)(re,{exporter:v,status:{isLoading:r,isFetching:i,isError:s},rowCount:f.length})]})})}function T({attributes:e={}}){return(0,E.jsx)(c,{attributes:e,children:(0,E.jsx)(le,{})})}var E,D=e((()=>{y(),o(),n(),ce(),E=r()})),O,k=e((()=>{s(),O={icon:i,attributes:[],example:{attributes:{}}}})),A,j,M,N,P,F,I,L=e((()=>{A=`jpa/search-terms`,j=`Top searched terms`,M=`The search terms visitors use to find your site.`,N={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`stats`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function R({withComparison:e}){return(0,H.jsx)(T,{attributes:{reportParams:u(e)}})}function z(e){return(0,H.jsx)(T,{attributes:{reportParams:u(!1,e)}})}function B(e){return(0,H.jsx)(T,{...e})}function V({withComparison:e,...t}){return(0,H.jsx)(ie,{...t,widgetType:W,renderModule:U,renderComponent:B,attributes:{reportParams:u(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ae(),m(),b(),se(),ee(),D(),k(),L(),H=r(),te(),U=`storybook/search-terms`,W=oe(I,O),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:R,args:{withComparison:!1},decorators:[S,h]},q={render:R,args:{withComparison:!0},decorators:[S,h]},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(g(`stats/search-terms`,`loading`),()=>g(`stats/search-terms`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(g(`stats/search-terms`,`error`),()=>g(`stats/search-terms`,null))},X={render:()=>z(`last-12-months`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(g(`stats/search-terms`,`error-retryable`),()=>g(`stats/search-terms`,null))},Z={render:()=>z(`last-year`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(g(`stats/search-terms`,`empty`),()=>g(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...C,withComparison:!0},argTypes:{...x,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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