import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Mu as i,bu as a}from"./build-module-BI3_PVVO.js";import{Et as o,pn as s,t as c}from"./src-5g9sGwvT.js";import{lt as l,m as u,v as d}from"./charts-provider-Dz_9KfQe.js";import{Q as f,X as p,Y as m,Z as h,ct as g,lt as ee,ot as te,st as ne,t as re,w as ie,x as ae}from"./src-CwWcdYh9.js";import"./rows-DoJXoHhN.js";import{a as _,o as v,u as y}from"./widget-state-B6SJsJzX.js";import{n as b,r as x}from"./with-story-router-Bwg0edRp.js";import{f as S,t as C}from"./leaderboard-bG98GUJZ.js";import{n as w,t as T}from"./use-no-views-empty-state-BMJXzusd.js";function E({reportParams:e,max:t}){let{primary:n,comparisonRows:r,comparison:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=o(e,{maxRows:t}),f=a&&!i.isError,p=(r?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:f?e.previousViews:void 0})),m=p.length===0&&l;return{data:p,isLoading:s,isFetching:c,isError:m,isPrimaryError:n.isError,error:m?u:null,hasComparison:f,refetch:d}}var oe=e((()=>{c()}));function se(){let{reportParams:e}=d(),{data:n,isLoading:r,isFetching:a,isError:o,isPrimaryError:s,error:c,hasComparison:u,refetch:f}=E({reportParams:e,max:10}),p=(0,i.useMemo)(()=>n.map((e,t)=>({id:`${t}-${e.label}`,label:e.label,value:e.views,previousValue:e.previousViews})),[n]),m=w({isLoading:r,isError:o,isEmpty:p.length===0},t(`You don’t have search terms recorded yet.`,`jetpack-premium-analytics-pkg`));return(0,O.jsx)(C,{chartTitle:t(`Top searched terms`,`jetpack-premium-analytics-pkg`),rows:p,columns:{label:t(`Search terms`,`jetpack-premium-analytics-pkg`),metric:`views`},status:{isLoading:m.isLoading,isFetching:a,isError:o,hasComparison:u,refetch:f},error:l(c,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:m.empty,footer:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(S,{report:`search-terms`}),(0,O.jsx)(ae,{exporter:ie,status:{isLoading:r,isFetching:a,isError:s},rowCount:p.length})]})})}function D({attributes:e={}}){return(0,O.jsx)(u,{attributes:e,children:(0,O.jsx)(se,{})})}var O,ce=e((()=>{re(),a(),n(),T(),oe(),O=r()})),k,A,j,M,N,P,F,I,L=e((()=>{k=`jpa/search-terms`,A=`jpa/search`,j=`Top searched terms`,M=`The search terms visitors use to find your site.`,N={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`stats`,F=`framed`,I={name:k,icon:A,title:j,description:M,help:N,category:P,presentation:F}}));function R({withComparison:e}){return(0,H.jsx)(D,{attributes:{reportParams:s(e)}})}function z(e){return(0,H.jsx)(D,{attributes:{reportParams:s(!1,e)}})}function B(e){return(0,H.jsx)(D,{...e})}function V({withComparison:e,...t}){return(0,H.jsx)(ne,{...t,widgetType:W,renderModule:U,renderComponent:B,attributes:{reportParams:s(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),g(),b(),f(),m(),_(),ce(),L(),H=r(),v(),U=`storybook/search-terms`,W=h(I),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:R,args:{withComparison:!1},decorators:[p,x]},q={render:R,args:{withComparison:!0},decorators:[p,x]},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[p,x],beforeEach:()=>(y(`stats/search-terms`,`loading`),()=>y(`stats/search-terms`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[p,x],beforeEach:()=>(y(`stats/search-terms`,`error`),()=>y(`stats/search-terms`,null))},X={render:()=>z(`last-12-months`),tags:[`!autodocs`],decorators:[p,x],beforeEach:()=>(y(`stats/search-terms`,`error-retryable`),()=>y(`stats/search-terms`,null))},Z={render:()=>z(`last-year`),tags:[`!autodocs`],decorators:[p,x],beforeEach:()=>(y(`stats/search-terms`,`empty`),()=>y(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...te,withComparison:!0},argTypes:{...ee,withComparison:{control:`boolean`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};