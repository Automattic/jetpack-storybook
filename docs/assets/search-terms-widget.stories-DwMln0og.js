import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{R as o,n as s}from"./build-module-DmVuor49.js";import{R as c,W as l,t as u}from"./build-module-iNgY12ZR.js";import{c as d,t as f}from"./src-B3le4dug.js";import{G as p,J as ee,K as te,hn as m,ur as h,xt as g}from"./chart-tooltip-BS0AHuyV.js";import{t as ne}from"./leaderboard-chart-CbpVeilC.js";import{I as re,L as ie,S as ae,U as oe,b as se,q as ce,z as _}from"./report-metric-CypFTt88.js";import{t as v}from"./widget-state-DnMIufY4.js";import{C as y,D as le,E as ue,O as de,S as fe,T as pe,b,k as x,t as S,w as me,x as C}from"./src-DxVm3OnV.js";var w,T,E,D,O,he=e((()=>{w=`_root_19s7c_1`,T=`_content_19s7c_9`,E=`_itemLabel_19s7c_17`,D=`_itemLabelText_19s7c_23`,O={root:w,content:T,itemLabel:E,itemLabelText:D}}));function ge({reportParams:e,max:t}){let{comparisonRows:n,comparison:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=m(e,{maxRows:t}),l=i&&!r.isError,u=(n?.rows??[]).map(e=>({label:typeof e.label==`string`?e.label:String(e.label),views:e.views,previousViews:l?e.previousViews:void 0}));return{data:u,isLoading:a,isFetching:o,isError:u.length===0&&s,hasComparison:l,refetch:c}}var _e=e((()=>{g()}));function ve({max:e=10}){let{reportParams:n}=ce(),{data:r,isLoading:a,isFetching:o,isError:s,hasComparison:u,refetch:f}=ge({reportParams:n,max:e}),m=(0,i.useMemo)(()=>{let e=te(r.map(e=>e.views),u?r.map(e=>e.previousViews):[]);return r.map((t,n)=>{let r=t.previousViews;return{id:`${n}-${t.label}`,label:(0,A.jsx)(c,{align:`center`,className:O.itemLabel,children:(0,A.jsx)(l,{className:O.itemLabelText,children:t.label})}),currentValue:t.views,previousValue:r,currentShare:p(t.views,e),previousShare:u&&r!==void 0?p(r,e):void 0,delta:u&&r!==void 0?ee(t.views,r):void 0}})},[r,u]);return(0,A.jsxs)(c,{className:O.root,children:[(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(v,{isLoading:a,isFetching:o,isError:s,isEmpty:r.length===0,error:{description:t(`We couldn't load search terms. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:f}]},empty:{icon:d,description:t(`No search terms in this period.`,`jetpack-premium-analytics`)},children:(0,A.jsx)(ne,{data:m,withComparison:u,withOverlayLabel:!0,showLegend:!1,dataFormat:{type:`number`,options:{useMultipliers:!0,decimals:0}}})})}),(0,A.jsx)(ae,{children:(0,A.jsx)(se,{report:`search-terms`})})]})}function k({attributes:e={}}){return(0,A.jsx)(oe,{attributes:e,children:(0,A.jsx)(ve,{max:e.max})})}var A,j=e((()=>{S(),f(),a(),n(),u(),he(),_e(),A=r()})),M,N=e((()=>{n(),s(),M={icon:o,attributes:[{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{max:10}}}})),P,F,I,L,R,z,B,ye=e((()=>{P=`jpa/search-terms`,F=`Search Terms`,I=`The search terms visitors use to find your site.`,L={content:`The most popular search terms visitors used to find your site.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,U.jsx)(k,{attributes:{max:10,reportParams:h(e)}})}function H(e){return(0,U.jsx)(k,{attributes:{max:10,reportParams:h(!1,e)}})}function be(e){return(0,U.jsx)(k,{...e})}function xe({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:G,renderModule:W,renderComponent:be,attributes:{max:10,reportParams:h(e)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),ue(),de(),y(),b(),re(),j(),N(),ye(),U=r(),ie(),W=`storybook/search-terms`,G=fe(B,M),K={title:`Packages/Premium Analytics/Widgets/SearchTerms`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:`The "Search Terms" widget. Displays the top search queries visitors used to reach the site, ranked by view count. Ported from the Jetpack Stats Search Terms module.`}}}},q={render:V,args:{withComparison:!1},decorators:[C,x]},J={render:V,args:{withComparison:!0},decorators:[C,x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(_(`stats/search-terms`,`loading`),()=>_(`stats/search-terms`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(_(`stats/search-terms`,`error`),()=>_(`stats/search-terms`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,x],beforeEach:()=>(_(`stats/search-terms`,`empty`),()=>_(`stats/search-terms`,null))},Q={render:e=>(0,U.jsx)(xe,{...e}),args:{...me,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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