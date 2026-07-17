import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{R as o,n as s}from"./build-module-DmVuor49.js";import{R as c,W as l,t as u}from"./build-module-DDqx0wZ2.js";import{c as d,t as f}from"./src-B3le4dug.js";import{L as p,S as ee,Yn as m,tn as te,ut as h}from"./chart-tooltip-DUOQnnpM.js";import{t as ne}from"./leaderboard-chart-Dxg9Q5pJ.js";import{C as re,N as ie,S as g,T as _,c as v,k as y,u as b}from"./report-metric-Be4IoNDv.js";import{t as x}from"./widget-state-CBUdyb6n.js";import{C as S,S as ae,b as oe,t as se,w as C,x as ce,y as le}from"./src-wcUSVDu7.js";import{n as ue,r as w}from"./with-widget-canvas-Dz43KNHY.js";var T,E,D,O,k,A=e((()=>{T=`_root_19s7c_1`,E=`_content_19s7c_9`,D=`_itemLabel_19s7c_17`,O=`_itemLabelText_19s7c_23`,k={root:T,content:E,itemLabel:D,itemLabelText:O}}));function j({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=te(e,{maxRows:t}),l=i&&!r.isError,u=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:l?e.previousViews:void 0}));return{data:u,isLoading:a,isFetching:o,isError:u.length===0&&s,hasComparison:l,refetch:c}}var M=e((()=>{h()}));function N({max:e=10}){let{reportParams:n}=ie(),{data:r,isLoading:a,isFetching:o,isError:s,hasComparison:u,refetch:f}=j({reportParams:n,max:e}),m=(0,i.useMemo)(()=>{let e=Math.max(...r.map(e=>e.views),0),t=Math.max(...r.map(e=>e.previousViews??0),0);return r.map((n,r)=>{let i=n.previousViews;return{id:`${r}-${n.label}`,label:(0,F.jsx)(c,{align:`center`,className:k.itemLabel,children:(0,F.jsx)(l,{className:k.itemLabelText,children:n.label})}),currentValue:n.views,previousValue:i,currentShare:e>0?n.views/e*100:0,previousShare:u&&i!==void 0?ee(i,t):void 0,delta:u&&i!==void 0?p(n.views,i):void 0}})},[r,u]);return(0,F.jsxs)(c,{className:k.root,children:[(0,F.jsx)(`div`,{className:k.content,children:(0,F.jsx)(x,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:{description:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:d,description:t(`No search terms in this period.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(ne,{data:m,withComparison:u,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,F.jsx)(b,{children:(0,F.jsx)(v,{report:`search-terms`})})]})}function P({attributes:e={}}){return(0,F.jsx)(y,{attributes:e,children:(0,F.jsx)(N,{max:e.max})})}var F,I=e((()=>{se(),f(),a(),n(),u(),A(),M(),F=r()})),L,R=e((()=>{n(),s(),L={name:`jpa/search-terms`,title:t(`Search Terms`,`jetpack-premium-analytics`),help:{content:t(`Learn about popular terms visitors use to find your site content on search engines.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}}));function z({withComparison:e}){return(0,U.jsx)(P,{attributes:{max:10,reportParams:m(e)}})}function B(e){return(0,U.jsx)(P,{attributes:{max:10,reportParams:m(!1,e)}})}function V(e){return(0,U.jsx)(P,{...e})}function H({withComparison:e,...t}){return(0,U.jsx)(oe,{...t,widgetType:G,renderModule:W,renderComponent:V,attributes:{max:10,reportParams:m(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ce(),S(),ue(),g(),I(),R(),U=r(),re(),W=`storybook/search-terms`,G={name:L.name,title:L.title,icon:L.icon,presentation:`framed`},K={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},q={render:z,args:{withComparison:!1},decorators:[w,C]},J={render:z,args:{withComparison:!0},decorators:[w,C]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(_(`stats/search-terms`,`loading`),()=>_(`stats/search-terms`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(_(`stats/search-terms`,`error`),()=>_(`stats/search-terms`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(_(`stats/search-terms`,`empty`),()=>_(`stats/search-terms`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...le,withComparison:!0},argTypes:{...ae,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSearchTerms,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSearchTerms,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'loading');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSearchTermsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    setReportMockState('stats/search-terms', 'error');
    return () => setReportMockState('stats/search-terms', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};