import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Dn as i,Vu as a,ku as o,t as s}from"./build-module-DNhkEVJn.js";import{Mn as c,t as l,xt as u}from"./src-DAkE86O4.js";import{_ as d,dt as f,x as p}from"./charts-provider-Dj3sbVcf.js";import"./rows-DAmD2BmE.js";import{n as m,r as ee,s as h}from"./register-report-mocks-Q5pBCSAA.js";import{n as te,r as g}from"./with-story-router-Beljd9ki.js";import{t as _,y as v}from"./leaderboard-TectPZhh.js";import{a as y,n as ne}from"./components-umiXEkop.js";import{t as b}from"./src-Bm9lubnC.js";import{a as x,g as re,h as S,i as ie,m as ae,n as oe,p as se,r as C}from"./with-widget-canvas-BkhZusmL.js";function w({reportParams:e,max:t}){let{primary:n,comparisonRows:r,comparison:i,hasComparison:a,isLoading:o,isFetching:s,isError:c,error:l,refetch:d}=u(e,{maxRows:t}),f=a&&!i.isError,p=(r?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:f?e.previousViews:void 0})),m=p.length===0&&c;return{data:p,isLoading:o,isFetching:s,isError:m,isPrimaryError:n.isError,error:m?l:null,hasComparison:f,refetch:d}}var T=e((()=>{l()}));function E(){let{reportParams:e}=p(),{data:n,isLoading:r,isFetching:i,isError:o,isPrimaryError:s,error:c,hasComparison:l,refetch:u}=w({reportParams:e,max:10}),d=(0,a.useMemo)(()=>n.map((e,t)=>({id:`${t}-${e.label}`,label:e.label,value:e.views,previousValue:e.previousViews})),[n]);return(0,O.jsx)(_,{rows:d,status:{isLoading:r,isFetching:i,isError:o,hasComparison:l,refetch:u},error:f(c,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:u}),footer:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(v,{report:`search-terms`}),(0,O.jsx)(ne,{exporter:y,status:{isLoading:r,isFetching:i,isError:s},rowCount:d.length})]})})}function D({attributes:e={}}){return(0,O.jsx)(d,{attributes:e,children:(0,O.jsx)(E,{})})}var O,ce=e((()=>{b(),o(),n(),T(),O=r()})),k,le=e((()=>{s(),k={icon:i,attributes:[],example:{attributes:{}}}})),A,j,M,N,P,F,I,L=e((()=>{A=`jpa/search-terms`,j=`Top searched terms`,M=`The search terms visitors use to find your site.`,N={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},P=`stats`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function R({withComparison:e}){return(0,H.jsx)(D,{attributes:{reportParams:c(e)}})}function z(e){return(0,H.jsx)(D,{attributes:{reportParams:c(!1,e)}})}function B(e){return(0,H.jsx)(D,{...e})}function V({withComparison:e,...t}){return(0,H.jsx)(ae,{...t,widgetType:W,renderModule:U,renderComponent:B,attributes:{reportParams:c(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),S(),te(),x(),oe(),m(),ce(),le(),L(),H=r(),ee(),U=`storybook/search-terms`,W=ie(I,k),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:R,args:{withComparison:!1},decorators:[C,g]},q={render:R,args:{withComparison:!0},decorators:[C,g]},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(h(`stats/search-terms`,`loading`),()=>h(`stats/search-terms`,null))},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(h(`stats/search-terms`,`error`),()=>h(`stats/search-terms`,null))},X={render:()=>z(`last-12-months`),tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(h(`stats/search-terms`,`error-retryable`),()=>h(`stats/search-terms`,null))},Z={render:()=>z(`last-year`),tags:[`!autodocs`],decorators:[C,g],beforeEach:()=>(h(`stats/search-terms`,`empty`),()=>h(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...se,withComparison:!0},argTypes:{...re,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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