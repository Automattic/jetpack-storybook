import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a}from"./build-module-Cm3Kd3py.js";import{Mn as o,t as s,xt as c}from"./src-CTpdfVFW.js";import{_ as l,dt as u,x as d}from"./charts-provider-BA6IhbKQ.js";import"./rows-DAmD2BmE.js";import{n as f,r as p,s as m}from"./register-report-mocks-CW1VdKfU.js";import{n as h,r as g}from"./with-story-router-Beljd9ki.js";import{t as _,y as ee}from"./leaderboard-DAHzFJpq.js";import{a as te,n as ne}from"./components-BfTAYn2q.js";import{t as re}from"./src-C8uiRrOG.js";import{a as ie,g as ae,h as oe,i as v,m as y,n as b,p as x,r as S}from"./with-widget-canvas-uks1OQ01.js";function C({reportParams:e,max:t}){let{primary:n,comparisonRows:r,comparison:i,hasComparison:a,isLoading:o,isFetching:s,isError:l,error:u,refetch:d}=c(e,{maxRows:t}),f=a&&!i.isError,p=(r?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:f?e.previousViews:void 0})),m=p.length===0&&l;return{data:p,isLoading:o,isFetching:s,isError:m,isPrimaryError:n.isError,error:m?u:null,hasComparison:f,refetch:d}}var w=e((()=>{s()}));function T(){let{reportParams:e}=d(),{data:n,isLoading:r,isFetching:a,isError:o,isPrimaryError:s,error:c,hasComparison:l,refetch:f}=C({reportParams:e,max:10}),p=(0,i.useMemo)(()=>n.map((e,t)=>({id:`${t}-${e.label}`,label:e.label,value:e.views,previousValue:e.previousViews})),[n]);return(0,D.jsx)(_,{rows:p,status:{isLoading:r,isFetching:a,isError:o,hasComparison:l,refetch:f},error:u(c,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),footer:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ee,{report:`search-terms`}),(0,D.jsx)(ne,{exporter:te,status:{isLoading:r,isFetching:a,isError:s},rowCount:p.length})]})})}function E({attributes:e={}}){return(0,D.jsx)(l,{attributes:e,children:(0,D.jsx)(T,{})})}var D,se=e((()=>{re(),a(),n(),w(),D=r()})),O,ce=e((()=>{O={attributes:[],example:{attributes:{}}}})),k,A,j,M,N,P,F,I,L=e((()=>{k=`jpa/search-terms`,A=`jpa/search`,j=`Top searched terms`,M=`The search terms visitors use to find your site.`,N={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`stats`,F=`framed`,I={name:k,icon:A,title:j,description:M,help:N,category:P,presentation:F}}));function R({withComparison:e}){return(0,H.jsx)(E,{attributes:{reportParams:o(e)}})}function z(e){return(0,H.jsx)(E,{attributes:{reportParams:o(!1,e)}})}function B(e){return(0,H.jsx)(E,{...e})}function V({withComparison:e,...t}){return(0,H.jsx)(y,{...t,widgetType:W,renderModule:U,renderComponent:B,attributes:{reportParams:o(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{s(),oe(),h(),ie(),b(),f(),se(),ce(),L(),H=r(),p(),U=`storybook/search-terms`,W=v(I,O),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:R,args:{withComparison:!1},decorators:[S,g]},q={render:R,args:{withComparison:!0},decorators:[S,g]},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[S,g],beforeEach:()=>(m(`stats/search-terms`,`loading`),()=>m(`stats/search-terms`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[S,g],beforeEach:()=>(m(`stats/search-terms`,`error`),()=>m(`stats/search-terms`,null))},X={render:()=>z(`last-12-months`),tags:[`!autodocs`],decorators:[S,g],beforeEach:()=>(m(`stats/search-terms`,`error-retryable`),()=>m(`stats/search-terms`,null))},Z={render:()=>z(`last-year`),tags:[`!autodocs`],decorators:[S,g],beforeEach:()=>(m(`stats/search-terms`,`empty`),()=>m(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...x,withComparison:!0},argTypes:{...ae,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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