import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{ou as i,vu as a}from"./build-module-D8x1-0PG.js";import{Nt as o,Sn as s,t as c}from"./src-BcILQ8ng.js";import{B as l,I as u,Vt as d,f,g as p}from"./charts-provider-LX5TXgKz.js";import{U as m,i as h,n as g,r as _}from"./with-story-router-CD_EU9Hw.js";import"./constants-JU419spr.js";import{n as v,r as ee,s as y}from"./register-report-mocks-DEKgkFm4.js";import{a as b,c as te,i as x,l as ne,o as re,r as ie,s as ae,u as oe}from"./with-widget-canvas-4KOQfMrY.js";import{n as se,t as ce}from"./use-no-views-empty-state-CqdKW2DJ.js";function S({reportParams:e,max:t}){let{primary:n,comparisonRows:r,comparison:i,hasComparison:a,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=o(e,{maxRows:t}),f=a&&!i.isError,p=(r?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:f?e.previousViews:void 0})),m=p.length===0&&l;return{data:p,isLoading:s,isFetching:c,isError:m,isPrimaryError:n.isError,error:m?u:null,hasComparison:f,refetch:d}}var C=e((()=>{c()}));function w(){let{reportParams:e}=l(),{data:n,isLoading:r,isFetching:i,isError:o,isPrimaryError:s,error:c,hasComparison:u,refetch:h}=S({reportParams:e,max:10}),g=(0,a.useMemo)(()=>n.map((e,t)=>({id:`${t}-${e.label}`,label:e.label,value:e.views,previousValue:e.previousViews})),[n]),_=se({isLoading:r,isError:o,isEmpty:g.length===0},t(`You don’t have search terms recorded yet.`,`jetpack-premium-analytics-pkg`));return f({csv:{exporter:p,status:{isLoading:r,isFetching:i,isError:s},rowCount:g.length}}),(0,E.jsx)(m,{rows:g,columns:{label:t(`Search terms`,`jetpack-premium-analytics-pkg`),metric:`views`},status:{isLoading:_.isLoading,isFetching:i,isError:o,hasComparison:u,refetch:h},error:d(c,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),empty:_.empty})}function T({attributes:e={}}){return(0,E.jsx)(u,{attributes:e,children:(0,E.jsx)(w,{})})}var E,D=e((()=>{h(),i(),n(),ce(),C(),E=r()})),O,k,A,j,M,N,P,F,I,L=e((()=>{O=`jpa/search-terms`,k=`jpa/search`,A=`Top searched terms`,j=`The search terms visitors use to find your site.`,M={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},N=`stats`,P=`framed`,F=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fsearch-terms`}],I={name:O,icon:k,title:A,description:j,help:M,category:N,presentation:P,actions:F}}));function R({withComparison:e}){return(0,H.jsx)(T,{attributes:{reportParams:s(e)}})}function z(e){return(0,H.jsx)(T,{attributes:{reportParams:s(!1,e)}})}function B(e){return(0,H.jsx)(T,{...e})}function V({withComparison:e,...t}){return(0,H.jsx)(te,{...t,widgetType:W,renderModule:U,renderComponent:B,attributes:{reportParams:s(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),ne(),g(),re(),ie(),v(),D(),L(),H=r(),ee(),U=`storybook/search-terms`,W=b(I),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:R,args:{withComparison:!1},decorators:[x,_]},q={render:R,args:{withComparison:!0},decorators:[x,_]},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(y(`stats/search-terms`,`loading`),()=>y(`stats/search-terms`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(y(`stats/search-terms`,`error`),()=>y(`stats/search-terms`,null))},X={render:()=>z(`last-12-months`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(y(`stats/search-terms`,`error-retryable`),()=>y(`stats/search-terms`,null))},Z={render:()=>z(`last-year`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(y(`stats/search-terms`,`empty`),()=>y(`stats/search-terms`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(V,{...e}),args:{...ae,withComparison:!0},argTypes:{...oe,withComparison:{control:`boolean`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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