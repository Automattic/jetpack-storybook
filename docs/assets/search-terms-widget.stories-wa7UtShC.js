import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-sy00sX6O.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{ou as i,vu as a}from"./build-module-CPdP9iK8.js";import{B as o,Ft as s,I as c,f as l,g as u}from"./charts-provider-CQF40eTg.js";import{jt as d,t as f,vn as p}from"./src-BwEQ_OJQ.js";import{i as m,n as h,r as g,z as _}from"./with-story-router-DkeR1qN6.js";import"./constants-B9OTkkI1.js";import{n as ee,r as v,s as y}from"./register-report-mocks-B-OTOegr.js";import{a as b,g as te,h as ne,i as re,m as ie,n as x,p as S,r as C}from"./with-widget-canvas-8ry8XA2Z.js";import{n as w,t as ae}from"./use-no-views-empty-state-DLccOkT0.js";function oe({reportParams:e,max:t}){let{primary:n,comparisonRows:r,comparison:i,hasComparison:a,isLoading:o,isFetching:s,isError:c,error:l,refetch:u}=d(e,{maxRows:t}),f=a&&!i.isError,p=(r?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:f?e.previousViews:void 0})),m=p.length===0&&c;return{data:p,isLoading:o,isFetching:s,isError:m,isPrimaryError:n.isError,error:m?l:null,hasComparison:f,refetch:u}}var se=e((()=>{f()}));function ce(){let{reportParams:e}=o(),{data:n,isLoading:r,isFetching:i,isError:c,isPrimaryError:d,error:f,hasComparison:p,refetch:m}=oe({reportParams:e,max:10}),h=(0,a.useMemo)(()=>n.map((e,t)=>({id:`${t}-${e.label}`,label:e.label,value:e.views,previousValue:e.previousViews})),[n]),g=w({isLoading:r,isError:c,isEmpty:h.length===0},t(`You don’t have search terms recorded yet.`,`jetpack-premium-analytics-pkg`));return l({csv:{exporter:u,status:{isLoading:r,isFetching:i,isError:d},rowCount:h.length}}),(0,E.jsx)(_,{chartTitle:t(`Top searched terms`,`jetpack-premium-analytics-pkg`),rows:h,columns:{label:t(`Search terms`,`jetpack-premium-analytics-pkg`),metric:`views`},status:{isLoading:g.isLoading,isFetching:i,isError:c,hasComparison:p,refetch:m},error:s(f,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}),empty:g.empty})}function T({attributes:e={}}){return(0,E.jsx)(c,{attributes:e,children:(0,E.jsx)(ce,{})})}var E,D=e((()=>{m(),i(),n(),ae(),se(),E=r()})),O,k,A,j,M,N,P,F,I,L=e((()=>{O=`jpa/search-terms`,k=`jpa/search`,A=`Top searched terms`,j=`The search terms visitors use to find your site.`,M={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},N=`stats`,P=`framed`,F=[{id:`view-all`,label:`View all`,relevance:`high`,href:`admin.php?page=jetpack-premium-analytics-wp-admin&p=%2Freports%2Fsearch-terms`}],I={name:O,icon:k,title:A,description:j,help:M,category:N,presentation:P,actions:F}}));function R({withComparison:e}){return(0,H.jsx)(T,{attributes:{reportParams:p(e)}})}function z(e){return(0,H.jsx)(T,{attributes:{reportParams:p(!1,e)}})}function B(e){return(0,H.jsx)(T,{...e})}function V({withComparison:e,...t}){return(0,H.jsx)(ie,{...t,widgetType:W,renderModule:U,renderComponent:B,attributes:{reportParams:p(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),ne(),h(),b(),x(),ee(),D(),L(),H=r(),v(),U=`storybook/search-terms`,W=re(I),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:R,args:{withComparison:!1},decorators:[C,g]},q={render:R,args:{withComparison:!0},decorators:[C,g]},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(y(`stats/search-terms`,`loading`),()=>y(`stats/search-terms`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(y(`stats/search-terms`,`error`),()=>y(`stats/search-terms`,null))},X={render:()=>z(`last-12-months`),tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(y(`stats/search-terms`,`error-retryable`),()=>y(`stats/search-terms`,null))},Z={render:()=>z(`last-year`),tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(y(`stats/search-terms`,`empty`),()=>y(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...S,withComparison:!0},argTypes:{...te,withComparison:{control:`boolean`}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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