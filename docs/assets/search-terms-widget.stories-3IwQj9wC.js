import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{An as o,n as s}from"./build-module-Bb7IR3OP.js";import{Tr as c,lr as l,t as u}from"./src-yJrCN2ih.js";import{G as d,S as f,W as p,Z as m,q as h,tt as g,w as ee}from"./report-metric-CYHfdN1i.js";import{c as te,t as ne}from"./src-q13B8HIT.js";import{J as re,X as ie,d as ae,hn as _,q as v,ur as y,xt as b}from"./chart-tooltip-Cw816hJP.js";import{t as oe}from"./leaderboard-chart-BBj6qcqv.js";import{C as se,D as ce,E as le,O as ue,S as de,T as fe,b as pe,k as x,t as S,w as me,x as C}from"./src-DypA9rWg.js";import{t as he}from"./widget-state-Dxlsu1FD.js";var w,T,E,D,O,ge=e((()=>{w=`_root_19s7c_1`,T=`_content_19s7c_9`,E=`_itemLabel_19s7c_17`,D=`_itemLabelText_19s7c_23`,O={root:w,content:T,itemLabel:E,itemLabelText:D}}));function _e({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=_(e,{maxRows:t}),u=i&&!r.isError,d=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:u?e.previousViews:void 0})),f=d.length===0&&s;return{data:d,isLoading:a,isFetching:o,isError:f,error:f?c:null,hasComparison:u,refetch:l}}var ve=e((()=>{b()}));function ye({max:e=10}){let{reportParams:n}=g(),{data:r,isLoading:a,isFetching:o,isError:s,error:u,hasComparison:d,refetch:p}=_e({reportParams:n,max:e}),m=(0,i.useMemo)(()=>{let e=re(r.map(e=>e.views),d?r.map(e=>e.previousViews):[]);return r.map((t,n)=>{let r=t.previousViews;return{id:`${n}-${t.label}`,label:(0,A.jsx)(l,{align:`center`,className:O.itemLabel,children:(0,A.jsx)(c,{className:O.itemLabelText,children:t.label})}),currentValue:t.views,previousValue:r,currentShare:v(t.views,e),previousShare:d&&r!==void 0?v(r,e):void 0,delta:d&&r!==void 0?ie(t.views,r):void 0}})},[r,d]);return(0,A.jsxs)(l,{className:O.root,children:[(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(he,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:ae(u,{retryDescription:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:te,description:t(`No search terms in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(oe,{data:m,withComparison:d,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,A.jsx)(ee,{children:(0,A.jsx)(f,{report:`search-terms`})})]})}function k({attributes:e={}}){return(0,A.jsx)(m,{attributes:e,children:(0,A.jsx)(ye,{max:e.max})})}var A,be=e((()=>{S(),ne(),a(),n(),u(),ge(),ve(),A=r()})),j,M=e((()=>{n(),s(),j={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{max:10}}}})),N,P,F,I,L,R,z,xe=e((()=>{N=`jpa/search-terms`,P=`Top searched terms`,F=`The search terms visitors use to find your site.`,I={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e}){return(0,H.jsx)(k,{attributes:{max:10,reportParams:y(e)}})}function V(e){return(0,H.jsx)(k,{attributes:{max:10,reportParams:y(!1,e)}})}function Se(e){return(0,H.jsx)(k,{...e})}function Ce({withComparison:e,...t}){return(0,H.jsx)(fe,{...t,widgetType:W,renderModule:U,renderComponent:Se,attributes:{max:10,reportParams:y(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{b(),le(),ue(),se(),pe(),p(),be(),M(),xe(),H=r(),d(),U=`storybook/search-terms`,W=de(z,j),G={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},K={render:B,args:{withComparison:!1},decorators:[C,x]},q={render:B,args:{withComparison:!0},decorators:[C,x]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(h(`stats/search-terms`,`loading`),()=>h(`stats/search-terms`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(h(`stats/search-terms`,`error`),()=>h(`stats/search-terms`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(h(`stats/search-terms`,`error-retryable`),()=>h(`stats/search-terms`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(h(`stats/search-terms`,`empty`),()=>h(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(Ce,{...e}),args:{...me,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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