import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{R as o,n as s}from"./build-module-DmVuor49.js";import{R as c,W as l,t as u}from"./build-module-WNS23NaA.js";import{c as ee,t as d}from"./src-B3le4dug.js";import{L as te,S as f,Yn as p,tn as ne,ut as m}from"./chart-tooltip-DMgEXtyG.js";import{t as re}from"./leaderboard-chart-DV6psgvz.js";import{C as ie,N as ae,S as h,T as g,k as _}from"./report-metric-BmlYe5tZ.js";import{t as v}from"./widget-state-CPJBhgdL.js";import{S as y,b,t as x,x as S,y as C}from"./src-B_XkmHiU.js";import{n as w,r as T}from"./with-widget-canvas-Dz43KNHY.js";var E,D,O,k,A,oe=e((()=>{E=`_root_19s7c_1`,D=`_content_19s7c_9`,O=`_itemLabel_19s7c_17`,k=`_itemLabelText_19s7c_23`,A={root:E,content:D,itemLabel:O,itemLabelText:k}}));function j({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=ne(e,{maxRows:t}),l=i&&!r.isError,u=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:l?e.previousViews:void 0}));return{data:u,isLoading:a,isFetching:o,isError:u.length===0&&s,hasComparison:l,refetch:c}}var M=e((()=>{m()}));function N({max:e=10}){let{reportParams:n}=ae(),{data:r,isLoading:a,isFetching:o,isError:s,hasComparison:u,refetch:d}=j({reportParams:n,max:e}),p=(0,i.useMemo)(()=>{let e=Math.max(...r.map(e=>e.views),0),t=Math.max(...r.map(e=>e.previousViews??0),0);return r.map((n,r)=>{let i=n.previousViews;return{id:`${r}-${n.label}`,label:(0,F.jsx)(c,{align:`center`,className:A.itemLabel,children:(0,F.jsx)(l,{className:A.itemLabelText,children:n.label})}),currentValue:n.views,previousValue:i,currentShare:e>0?n.views/e*100:0,previousShare:u&&i!==void 0?f(i,t):void 0,delta:u&&i!==void 0?te(n.views,i):void 0}})},[r,u]);return(0,F.jsx)(c,{className:A.root,children:(0,F.jsx)(`div`,{className:A.content,children:(0,F.jsx)(v,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:{description:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:ee,description:t(`No search terms in this period.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(re,{data:p,withComparison:u,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})})})}function P({attributes:e={}}){return(0,F.jsx)(_,{attributes:e,children:(0,F.jsx)(N,{max:e.max})})}var F,I=e((()=>{x(),d(),a(),n(),u(),oe(),M(),F=r()})),L,R=e((()=>{n(),s(),L={name:`jpa/search-terms`,title:t(`Search Terms`,`jetpack-premium-analytics`),help:{content:t(`Learn about popular terms visitors use to find your site content on search engines.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function z({withComparison:e}){return(0,U.jsx)(P,{attributes:{max:10,reportParams:p(e)}})}function B(e){return(0,U.jsx)(P,{attributes:{max:10,reportParams:p(!1,e)}})}function V(e){return(0,U.jsx)(P,{...e})}function H({withComparison:e,...t}){return(0,U.jsx)(b,{...t,widgetType:G,renderModule:W,renderComponent:V,attributes:{max:10,reportParams:p(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),S(),w(),h(),I(),R(),U=r(),ie(),W=`storybook/search-terms`,G={name:L.name,title:L.title,icon:L.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},q={render:z,args:{withComparison:!1},decorators:[T]},J={render:z,args:{withComparison:!0},decorators:[T]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(g(`stats/search-terms`,`loading`),()=>g(`stats/search-terms`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(g(`stats/search-terms`,`error`),()=>g(`stats/search-terms`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(g(`stats/search-terms`,`empty`),()=>g(`stats/search-terms`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...C,withComparison:!0},argTypes:{...y,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
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