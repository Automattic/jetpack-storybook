import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-CWVSa17D.js";import{R as ee,W as te,t as u}from"./build-module-BCI4ly35.js";import{t as d,v as ne}from"./src-B3le4dug.js";import{At as f,L as p,R as re,dt as m,er as h}from"./chart-tooltip-n6Tv2X_4.js";import{t as ie}from"./leaderboard-chart-B2AM1EFw.js";import{H as ae,M as g,R as _,b as oe,g as se,j as v,v as ce}from"./report-metric-Bj6E0k7I.js";import{t as le}from"./widget-state-BYd-Spjo.js";import{C as y,D as b,E as x,S as ue,T as de,b as fe,t as S,w as pe,x as C}from"./src-DknkQpM4.js";import{n as me,t as he}from"./src-CLyOPBKU.js";import{n as ge,t as _e}from"./register-stats-mocks-CdwiDKzS.js";import{n as w,t as T}from"./force-stats-mock-state-gwqggrLG.js";var E,D,O,k,A,j,M=e((()=>{E=`_root_1c7ar_1`,D=`_content_1c7ar_9`,O=`_backLink_1c7ar_17`,k=`_itemLabel_1c7ar_23`,A=`_itemLabelText_1c7ar_30`,j={root:E,content:D,backLink:O,itemLabel:k,itemLabelText:A}}));function N(e){return typeof e.label==`string`?e.label:String(e.label)}function P(e){return{label:N(e),value:e.value,previousValue:e.previousValue,href:e.href}}function F(e){return{label:N(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(P),childrenHaveComparison:e.childrenHaveComparison}}function ve({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=f({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(F);return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:l.length===0&&s,refetch:c}}var ye=e((()=>{m()}));function be(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function xe({utmDimension:e,max:r}){let{reportParams:i}=ae(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=l();(0,a.useEffect)(()=>{c()},[c,e]);let{data:u,hasComparison:d,isLoading:f,isFetching:m,isError:h,refetch:g}=ve({reportParams:i,utmParam:e,max:r}),_=(0,a.useMemo)(()=>u.find(e=>e.label===o)??null,[u,o]),v=!!_?.children?.length,y=(0,a.useMemo)(()=>v?_?.children??[]:u,[u,v,_]),b=v?!!_?.childrenHaveComparison:d;(0,a.useEffect)(()=>{o&&!v&&!f&&!m&&!h&&c()},[o,v,f,m,h,c]);let x=(0,a.useMemo)(()=>{let e=Math.max(...y.map(e=>e.value),1),r=Math.max(...y.map(e=>e.previousValue??0),1);return y.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,L.jsx)(ee,{align:`center`,className:j.itemLabel,children:(0,L.jsx)(te,{className:j.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:p(i.value,e),previousValue:o,previousShare:b&&o!==void 0?p(o,r):void 0,delta:b&&o!==void 0?re(i.value,o):void 0,...!v&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[y,v,s,b]);return(0,L.jsxs)(L.Fragment,{children:[v?(0,L.jsx)(oe,{label:n(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:j.backLink}):null,(0,L.jsx)(`div`,{className:j.content,children:(0,L.jsx)(le,{isLoading:f,isFetching:m,isError:h,isEmpty:u.length===0,error:{description:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:g}]},empty:{icon:ne,description:n(`No UTM data in this period.`,`jetpack-premium-analytics`)},children:(0,L.jsx)(ie,{data:x,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:R})})}),(0,L.jsx)(ce,{children:(0,L.jsx)(se,{report:`utm`,section:be(e)})})]})}function I({attributes:e={}}){let t=e.utmDimension??z,n=e.max??10;return(0,L.jsx)(_,{attributes:e,children:(0,L.jsx)(`div`,{className:j.root,children:(0,L.jsx)(xe,{utmDimension:t,max:n})})})}var L,R,z,Se=e((()=>{o(),r(),u(),S(),d(),M(),ye(),L=i(),R={type:`number`,options:{useMultipliers:!0,decimals:0}},z=`utm_source,utm_medium`})),B,Ce=e((()=>{r(),c(),he(),B={name:`jpa/utm-insights`,title:n(`UTM Insights`,`jetpack-premium-analytics`),help:{content:n(`Your top UTM campaigns, sorted by views.`,`jetpack-premium-analytics`),links:[{label:n(`Learn more`,`jetpack-premium-analytics`),href:`https://jetpack.com/support/jetpack-stats/`}]},icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,Edit:me,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}}));function V(e){return(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(!1,e)}})}function we({withComparison:e,...t}){return(0,H.jsx)(y,{...t,widgetType:W,renderModule:U,renderComponent:I,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),pe(),x(),fe(),v(),_e(),w(),Se(),Ce(),H=i(),g(),ge(),U=`storybook/utm-insights`,W={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,b]},q={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!0},decorators:[C,b]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[C,b],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[C,b],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},X={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[C,b],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,b]},Q={render:e=>(0,H.jsx)(we,{...e}),args:{...ue,withComparison:!1},argTypes:{...de,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_source,utm_medium',
    max: 10,
    reportParams: getDefaultQueryParams(withComparison)
  }} />,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_source,utm_medium',
    max: 10,
    reportParams: getDefaultQueryParams(withComparison)
  }} />,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'loading');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'empty');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral megaphone
glyph and "No UTM data in this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_campaign',
    max: 10,
    reportParams: getDefaultQueryParams(withComparison)
  }} />,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <UtmInsightsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: false
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params and deltas.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,K as Default,X as Empty,Y as Error,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};