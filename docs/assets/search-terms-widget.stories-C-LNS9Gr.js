import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{R as o,n as s}from"./build-module-DmVuor49.js";import{R as c,W as l,t as u}from"./build-module-BpP47RQa.js";import{c as d,t as f}from"./src-B3le4dug.js";import{Ct as p,J as ee,X as te,_n as m,d as ne,fr as h,q as g}from"./chart-tooltip-CeiMNXLc.js";import{t as re}from"./leaderboard-chart-Ba2DY8LN.js";import{I as ie,L as ae,S as _,U as oe,b as se,q as ce,z as v}from"./report-metric-CFAQl3C_.js";import{t as le}from"./widget-state-BvtCTXPP.js";import{C as ue,D as y,E as de,O as fe,S as pe,T as me,b as he,k as b,t as x,w as ge,x as S}from"./src-D0JWR9jZ.js";var C,w,T,E,D,_e=e((()=>{C=`_root_19s7c_1`,w=`_content_19s7c_9`,T=`_itemLabel_19s7c_17`,E=`_itemLabelText_19s7c_23`,D={root:C,content:w,itemLabel:T,itemLabelText:E}}));function ve({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=m(e,{maxRows:t}),u=i&&!r.isError,d=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:u?e.previousViews:void 0})),f=d.length===0&&s;return{data:d,isLoading:a,isFetching:o,isError:f,error:f?c:null,hasComparison:u,refetch:l}}var ye=e((()=>{p()}));function be({max:e=10}){let{reportParams:n}=ce(),{data:r,isLoading:a,isFetching:o,isError:s,error:u,hasComparison:f,refetch:p}=ve({reportParams:n,max:e}),m=(0,i.useMemo)(()=>{let e=ee(r.map(e=>e.views),f?r.map(e=>e.previousViews):[]);return r.map((t,n)=>{let r=t.previousViews;return{id:`${n}-${t.label}`,label:(0,k.jsx)(c,{align:`center`,className:D.itemLabel,children:(0,k.jsx)(l,{className:D.itemLabelText,children:t.label})}),currentValue:t.views,previousValue:r,currentShare:g(t.views,e),previousShare:f&&r!==void 0?g(r,e):void 0,delta:f&&r!==void 0?te(t.views,r):void 0}})},[r,f]);return(0,k.jsxs)(c,{className:D.root,children:[(0,k.jsx)(`div`,{className:D.content,children:(0,k.jsx)(le,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:ne(u,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics`),onRetry:p}),empty:{icon:d,description:t(`No search terms in this period.`,`jetpack-premium-analytics`)},children:(0,k.jsx)(re,{data:m,withComparison:f,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,k.jsx)(_,{children:(0,k.jsx)(se,{report:`search-terms`})})]})}function O({attributes:e={}}){return(0,k.jsx)(oe,{attributes:e,children:(0,k.jsx)(be,{max:e.max})})}var k,A=e((()=>{x(),f(),a(),n(),u(),_e(),ye(),k=r()})),j,M=e((()=>{n(),s(),j={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}})),N,P,F,I,L,R,z,xe=e((()=>{N=`jpa/search-terms`,P=`Search Terms`,F=`The search terms visitors use to find your site.`,I={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(O,{attributes:{max:10,reportParams:h(e)}})}function V(e){return(0,H.jsx)(O,{attributes:{max:10,reportParams:h(!1,e)}})}function Se(e){return(0,H.jsx)(O,{...e})}function Ce({withComparison:e,...t}){return(0,H.jsx)(me,{...t,widgetType:W,renderModule:U,renderComponent:Se,attributes:{max:10,reportParams:h(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),de(),fe(),ue(),he(),ie(),A(),M(),xe(),H=r(),ae(),U=`storybook/search-terms`,W=pe(z,j),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:B,args:{withComparison:!1},decorators:[S,b]},q={render:B,args:{withComparison:!0},decorators:[S,b]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/search-terms`,`loading`),()=>v(`stats/search-terms`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/search-terms`,`error`),()=>v(`stats/search-terms`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/search-terms`,`error-retryable`),()=>v(`stats/search-terms`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[S,b],beforeEach:()=>(v(`stats/search-terms`,`empty`),()=>v(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(Ce,{...e}),args:{...ge,withComparison:!0},argTypes:{...y,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  render: () => renderSearchTermsOnPreset('last-365-days'),
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