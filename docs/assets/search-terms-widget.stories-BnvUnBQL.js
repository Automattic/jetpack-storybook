import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{An as o,n as s}from"./build-module-Bt8gOW8e.js";import{Ht as c,d as l,p as u,s as d,tt as f}from"./hooks-CHN5wrZW.js";import{K as p,R as m,t as h}from"./build-module-BAze1CUO.js";import{c as g,t as _}from"./src-CaCJrOts.js";import{F as v,u as y}from"./chart-tooltip-BSuZZS-i.js";import{t as b}from"./leaderboard-chart-C-5XAZ-c.js";import{i as x,n as ee,t as te}from"./register-report-mocks-BGVQ2Y9e.js";import{t as ne}from"./widget-state-CAj0GftY.js";import{i as re,n as S,r as C,t as w}from"./widget-dashboard-with-widget-FacHxCFZ.js";import{t as T}from"./src-_BA8_HWt.js";var E,D,O,k,A,j=e((()=>{E=`_root_19s7c_1`,D=`_content_19s7c_9`,O=`_itemLabel_19s7c_17`,k=`_itemLabelText_19s7c_23`,A={root:E,content:D,itemLabel:O,itemLabelText:k}}));function ie({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=f(e,{maxRows:t}),l=i&&!r.isError,u=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:l?e.previousViews:void 0}));return{data:u,isLoading:a,isFetching:o,isError:u.length===0&&s,hasComparison:l,refetch:c}}var ae=e((()=>{u()}));function M({max:e=10}){let{reportParams:n}=l(),{data:r,isLoading:a,isFetching:o,isError:s,hasComparison:c,refetch:u}=ie({reportParams:n,max:e}),d=(0,i.useMemo)(()=>{let e=Math.max(...r.map(e=>e.views),0),t=Math.max(...r.map(e=>e.previousViews??0),0);return r.map((n,r)=>{let i=n.previousViews;return{id:`${r}-${n.label}`,label:(0,P.jsx)(m,{align:`center`,className:A.itemLabel,children:(0,P.jsx)(p,{className:A.itemLabelText,children:n.label})}),currentValue:n.views,previousValue:i,currentShare:e>0?n.views/e*100:0,previousShare:c&&i!==void 0?y(i,t):void 0,delta:c&&i!==void 0?v(n.views,i):void 0}})},[r,c]);return(0,P.jsx)(m,{className:A.root,children:(0,P.jsx)(`div`,{className:A.content,children:(0,P.jsx)(ne,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:{description:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:g,description:t(`No search terms in this period.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(b,{data:d,withComparison:c,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})})})}function N({attributes:e={}}){return(0,P.jsx)(d,{attributes:e,children:(0,P.jsx)(M,{max:e.max})})}var P,F=e((()=>{T(),_(),a(),n(),h(),j(),ae(),P=r()})),I,L=e((()=>{n(),s(),I={name:`jpa/search-terms`,title:t(`Search Terms`,`jetpack-premium-analytics`),icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function R({withComparison:e}){return(0,H.jsx)(N,{attributes:{max:10,reportParams:c(e)}})}function z(e){return(0,H.jsx)(N,{attributes:{max:10,reportParams:c(!1,e)}})}function B(e){return(0,H.jsx)(N,{...e})}function V({withComparison:e,...t}){return(0,H.jsx)(S,{...t,widgetType:W,renderModule:U,renderComponent:B,attributes:{max:10,reportParams:c(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),C(),te(),F(),L(),H=r(),ee(),U=`storybook/search-terms`,W={name:I.name,title:I.title,icon:I.icon,presentation:`framed`},G=e=>(0,H.jsx)(`div`,{style:{width:`380px`,height:`520px`,margin:`0 auto`,padding:`16px`,boxSizing:`border-box`,background:`#fff`,border:`1px solid #e0e0e0`,borderRadius:`8px`,overflow:`hidden`},children:(0,H.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},q={render:R,args:{withComparison:!1},decorators:[G]},J={render:R,args:{withComparison:!0},decorators:[G]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(x(`stats/search-terms`,`loading`),()=>x(`stats/search-terms`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(x(`stats/search-terms`,`error`),()=>x(`stats/search-terms`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(x(`stats/search-terms`,`empty`),()=>x(`stats/search-terms`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...w,withComparison:!0},argTypes:{...re,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSearchTerms,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSearchTerms,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-90-days'),
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'loading');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'error');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};