import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{R as o,n as s}from"./build-module-DmVuor49.js";import{R as c,W as l,t as u}from"./build-module-f6nw9llR.js";import{c as ee,t as d}from"./src-B3le4dug.js";import{G as f,K as p,cr as m,pn as te,yt as h}from"./chart-tooltip-Bng5hHZ0.js";import{t as ne}from"./leaderboard-chart-BVBM0scS.js";import{F as re,G as ie,L as g,P as ae,V as oe,b as se,v as ce}from"./report-metric-BNxHdhqI.js";import{t as le}from"./widget-state-eiZxw_lk.js";import{C as _,D as v,E as y,O as ue,S as de,T as fe,b as pe,k as b,t as x,w as S,x as C}from"./src-DM6U6HKv.js";var w,T,E,D,O,me=e((()=>{w=`_root_19s7c_1`,T=`_content_19s7c_9`,E=`_itemLabel_19s7c_17`,D=`_itemLabelText_19s7c_23`,O={root:w,content:T,itemLabel:E,itemLabelText:D}}));function he({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=te(e,{maxRows:t}),l=i&&!r.isError,u=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:l?e.previousViews:void 0}));return{data:u,isLoading:a,isFetching:o,isError:u.length===0&&s,hasComparison:l,refetch:c}}var ge=e((()=>{h()}));function _e({max:e=10}){let{reportParams:n}=ie(),{data:r,isLoading:a,isFetching:o,isError:s,hasComparison:u,refetch:d}=he({reportParams:n,max:e}),m=(0,i.useMemo)(()=>{let e=Math.max(...r.map(e=>e.views),0),t=Math.max(...r.map(e=>e.previousViews??0),0);return r.map((n,r)=>{let i=n.previousViews;return{id:`${r}-${n.label}`,label:(0,A.jsx)(c,{align:`center`,className:O.itemLabel,children:(0,A.jsx)(l,{className:O.itemLabelText,children:n.label})}),currentValue:n.views,previousValue:i,currentShare:f(n.views,e),previousShare:u&&i!==void 0?f(i,t):void 0,delta:u&&i!==void 0?p(n.views,i):void 0}})},[r,u]);return(0,A.jsxs)(c,{className:O.root,children:[(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(le,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:{description:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:ee,description:t(`No search terms in this period.`,`jetpack-premium-analytics`)},children:(0,A.jsx)(ne,{data:m,withComparison:u,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,A.jsx)(se,{children:(0,A.jsx)(ce,{report:`search-terms`})})]})}function k({attributes:e={}}){return(0,A.jsx)(oe,{attributes:e,children:(0,A.jsx)(_e,{max:e.max})})}var A,j=e((()=>{x(),d(),a(),n(),u(),me(),ge(),A=r()})),M,N=e((()=>{n(),s(),M={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}})),P,F,I,L,R,z,B,ve=e((()=>{P=`jpa/search-terms`,F=`Search Terms`,I=`The search terms visitors use to find your site.`,L={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{max:10,reportParams:m(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{max:10,reportParams:m(!1,e)}})}function ye(e){return(0,U.jsx)(k,{...e})}function be({withComparison:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:G,renderModule:W,renderComponent:ye,attributes:{max:10,reportParams:m(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),y(),ue(),_(),pe(),ae(),j(),N(),ve(),U=r(),re(),W=`storybook/search-terms`,G=de(B,M),K={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,b]},J={render:V,args:{withComparison:!0},decorators:[C,b]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,b],beforeEach:()=>(g(`stats/search-terms`,`loading`),()=>g(`stats/search-terms`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,b],beforeEach:()=>(g(`stats/search-terms`,`error`),()=>g(`stats/search-terms`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,b],beforeEach:()=>(g(`stats/search-terms`,`empty`),()=>g(`stats/search-terms`,null))},Q={render:e=>(0,U.jsx)(be,{...e}),args:{...S,withComparison:!0},argTypes:{...v,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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