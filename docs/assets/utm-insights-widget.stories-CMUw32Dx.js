import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-BzjiFeg5.js";import{R as ee,W as te,t as u}from"./build-module-Cn1Un7go.js";import{t as d,v as ne}from"./src-B3le4dug.js";import{G as re,K as ie,Rt as f,cr as p,yt as m}from"./chart-tooltip-sTMsgHbZ.js";import{t as ae}from"./leaderboard-chart-BPTqMFhB.js";import{M as h,N as g,U as oe,b as se,g as ce,v as le,z as _}from"./report-metric-D5hry_ac.js";import{t as ue}from"./widget-state-CSKYcGm6.js";import{C as v,D as y,E as b,O as de,S as fe,T as pe,b as me,k as x,t as he,w as ge,x as S}from"./src-7Fe8UaL9.js";import{n as _e,t as ve}from"./src-BVWKjBqx.js";import{n as ye,t as be}from"./register-stats-mocks-D_Ft4UVJ.js";import{n as xe,t as C}from"./force-stats-mock-state-BybZpunD.js";var w,T,E,D,O,k,Se=e((()=>{w=`_root_1c7ar_1`,T=`_content_1c7ar_9`,E=`_backLink_1c7ar_17`,D=`_itemLabel_1c7ar_23`,O=`_itemLabelText_1c7ar_30`,k={root:w,content:T,backLink:E,itemLabel:D,itemLabelText:O}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function Ce(e){return{label:A(e),value:e.value,previousValue:e.previousValue,href:e.href}}function we(e){return{label:A(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ce),childrenHaveComparison:e.childrenHaveComparison}}function Te({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=f({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(we);return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:l.length===0&&s,refetch:c}}var Ee=e((()=>{m()}));function De(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Oe({utmDimension:e,max:r}){let{reportParams:i}=oe(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=l();(0,a.useEffect)(()=>{c()},[c,e]);let{data:u,hasComparison:d,isLoading:f,isFetching:p,isError:m,refetch:h}=Te({reportParams:i,utmParam:e,max:r}),g=(0,a.useMemo)(()=>u.find(e=>e.label===o)??null,[u,o]),_=!!g?.children?.length,v=(0,a.useMemo)(()=>_?g?.children??[]:u,[u,_,g]),y=_?!!g?.childrenHaveComparison:d;(0,a.useEffect)(()=>{o&&!_&&!f&&!p&&!m&&c()},[o,_,f,p,m,c]);let b=(0,a.useMemo)(()=>{let e=Math.max(...v.map(e=>e.value),1),r=Math.max(...v.map(e=>e.previousValue??0),1);return v.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,M.jsx)(ee,{align:`center`,className:k.itemLabel,children:(0,M.jsx)(te,{className:k.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:re(i.value,e),previousValue:o,previousShare:y&&o!==void 0?re(o,r):void 0,delta:y&&o!==void 0?ie(i.value,o):void 0,...!_&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[v,_,s,y]);return(0,M.jsxs)(M.Fragment,{children:[_?(0,M.jsx)(se,{label:n(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:k.backLink}):null,(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(ue,{isLoading:f,isFetching:p,isError:m,isEmpty:u.length===0,error:{description:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:h}]},empty:{icon:ne,description:n(`No UTM data in this period.`,`jetpack-premium-analytics`)},children:(0,M.jsx)(ae,{data:b,withComparison:y,withOverlayLabel:!0,showLegend:!1,dataFormat:N})})}),(0,M.jsx)(le,{children:(0,M.jsx)(ce,{report:`utm`,section:De(e)})})]})}function j({attributes:e={}}){let t=e.utmDimension??P,n=e.max??10;return(0,M.jsx)(_,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Oe,{utmDimension:t,max:n})})})}var M,N,P,ke=e((()=>{o(),r(),u(),he(),d(),Se(),Ee(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=`utm_source,utm_medium`})),F,Ae=e((()=>{r(),c(),ve(),F={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,Edit:_e,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),I,L,R,z,B,V,H,je=e((()=>{I=`jpa/utm-insights`,L=`UTM Insights`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(e){return(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:p(!1,e)}})}function Me({withComparison:e,...t}){return(0,W.jsx)(pe,{...t,widgetType:Ne,renderModule:G,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:p(e)}})}var W,G,Ne,Pe,K,q,J,Y,X,Z,Q,$;e((()=>{m(),b(),de(),v(),me(),h(),be(),xe(),ke(),Ae(),je(),W=i(),g(),ye(),G=`storybook/utm-insights`,Ne=fe(H,F),Pe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:p(e)}}),args:{withComparison:!1},decorators:[S,x]},q={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:p(e)}}),args:{withComparison:!0},decorators:[S,x]},J={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},Y={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},X={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:p(e)}}),args:{withComparison:!1},decorators:[S,x]},Q={render:e=>(0,W.jsx)(Me,{...e}),args:{...ge,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,K as Default,X as Empty,Y as Error,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Pe as default};