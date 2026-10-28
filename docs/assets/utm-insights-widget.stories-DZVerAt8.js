import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as ee,n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Mu as o,bu as s}from"./build-module-BI3_PVVO.js";import{F as c,Pt as l,bn as u,f as te,o as ne,on as d,rn as re,z as ie}from"./charts-provider-POvp3ZLj.js";import{f as ae}from"./library-Djn3c8VE.js";import{t as f}from"./src-Dklj63E7.js";import{Q as p,hn as m,t as h}from"./src-DfQ3R5pV.js";import{t as oe}from"./widget-state-DujMDKy1.js";import{L as se,a as ce,c as le,i as g,j as ue,n as de,o as fe,r as _,w as pe}from"./with-story-router-CPbO1B-H.js";import"./constants-B9OTkkI1.js";import{r as me,t as he}from"./leaderboard-skeleton-7YKwGXg7.js";import{n as v,r as y}from"./register-report-mocks-xm2nLXrN.js";import{l as ge,s as _e}from"./locations-geo-chart-CRiYMmbv.js";import{a as ve,g as ye,h as b,i as x,m as S,n as C,p as w,r as T}from"./with-widget-canvas-CUlK31VQ.js";import{n as E,t as be}from"./register-stats-mocks-Nvcu00DF.js";import{n as xe,t as D}from"./force-stats-mock-state-rsmsojFj.js";var O,k,A,j,Se=e((()=>{O=`_root_xmjm2_1`,k=`_content_xmjm2_9`,A=`_backLink_xmjm2_16`,j={root:O,content:k,backLink:A}}));function M(e){return typeof e.label==`string`?e.label:String(e.label)}function Ce(e){return{postId:e.id,label:M(e),value:e.value,previousValue:e.previousValue,href:e.href}}function we(e){return{label:M(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ce),childrenHaveComparison:e.childrenHaveComparison}}function Te({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=p({...e,utmParam:t,max:n},{maxRows:n}),l=(ee?.rows??[]).map(we),u=l.length===0&&o;return{data:l,hasComparison:r,isLoading:i,isFetching:a,isError:u,error:u?s:null,refetch:c}}var Ee=e((()=>{h()}));function De({utmDimension:e,showReportLink:t}){let{reportParams:n}=ie(),[i,a]=(0,o.useState)(!1),s=(0,o.useCallback)(()=>a(!0),[]),c=(0,o.useCallback)(()=>a(!1),[]),f=fe(e),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ne();(0,o.useEffect)(()=>{h()},[h,e]);let{data:g,hasComparison:de,isLoading:_,isFetching:v,isError:y,error:ve,refetch:ye}=Te({reportParams:n,utmParam:e,max:10}),b=(0,o.useMemo)(()=>g.find(e=>e.label===p)??null,[g,p]),x=!!b?.children?.length,S=(0,o.useMemo)(()=>x?b?.children??[]:g,[g,x,b]),C=x?!!b?.childrenHaveComparison:de;(0,o.useEffect)(()=>{p&&!x&&!_&&!v&&!y&&h()},[p,x,_,v,y,h]);let w=(0,o.useMemo)(()=>{let e=re(S.map(e=>e.value),C?S.map(e=>e.previousValue):[]);return S.map((t,n)=>{let i=t.previousValue,a=`postId`in t?t:null,o=!x&&`children`in t&&!!t.children?.length;return{id:`${n}-${t.label}`,...a?{label:(0,P.jsx)(ue,{id:a.postId,label:a.label,link:a.href,origin:{report:`utm`,section:f}})}:_e({label:t.label,media:{kind:`none`},action:ge({hasChildren:o,drillDown:{onClick:()=>m(t.label),ariaLabel:ee(r(`View posts for %s`,`jetpack-premium-analytics-pkg`),t.label)}})}),currentValue:t.value,currentShare:d(t.value,e),previousValue:i,previousShare:C&&i!==void 0?d(i,e):void 0,delta:C&&i!==void 0?u(t.value,i):void 0}})},[S,x,f,m,C]),T=x?(0,P.jsx)(se,{label:r(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:h,className:j.backLink}):null,E=!_&&(y||g.length>0);return te({...t&&{report:`utm`,section:f,csv:{exporter:le[f],status:{isLoading:_,isFetching:v,isError:y},rowCount:g.length}},actions:E?[{id:`build-url`,label:r(`Build URL`,`jetpack-premium-analytics-pkg`),relevance:`medium`,callback:s}]:[]}),(0,P.jsxs)(P.Fragment,{children:[T,(0,P.jsx)(`div`,{className:j.content,children:(0,P.jsx)(oe,{isLoading:_,isFetching:v,isError:y,isEmpty:g.length===0,empty:{icon:ae,description:r(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:s}},error:l(ve,{retryDescription:r(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:ye}),renderLoading:(0,P.jsx)(he,{rows:10}),children:(0,P.jsx)(me,{chartTitle:r(`Top UTM`,`jetpack-premium-analytics-pkg`),data:w,withComparison:C,withOverlayLabel:!0,showLegend:!1,dataFormat:F,columns:{label:x?r(`Posts`,`jetpack-premium-analytics-pkg`):ce(f),metric:`views`}})})}),i&&(0,P.jsx)(pe,{onClose:c})]})}function N({attributes:e={}}){let t=e.utmDimension??I,n=e.showReportLink??!0;return(0,P.jsx)(c,{attributes:e,children:(0,P.jsx)(`div`,{className:j.root,children:(0,P.jsx)(De,{utmDimension:t,showReportLink:n})})})}var P,F,I,Oe=e((()=>{f(),s(),i(),g(),Se(),Ee(),P=a(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I=`utm_source,utm_medium`})),L,ke=e((()=>{L={example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),R,z,B,V,Ae,je,Me,Ne,Pe,Fe=e((()=>{R=`jpa/utm-insights`,z=`jpa/megaphone`,B=`Top UTM`,V=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,Ae={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},je=`traffic`,Me=`framed`,Ne=[{id:`utmDimension`,type:`jpa/select`,label:`UTM parameter`,relevance:`high`,elements:[{value:`utm_source,utm_medium`,label:`Source / Medium`},{value:`utm_campaign,utm_source,utm_medium`,label:`Campaign / Source / Medium`},{value:`utm_source`,label:`Source`},{value:`utm_medium`,label:`Medium`},{value:`utm_campaign`,label:`Campaign`}]}],Pe={name:R,icon:z,title:B,description:V,help:Ae,category:je,presentation:Me,attributes:Ne}}));function H(e){return(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(!1,e)}})}function Ie({withComparison:e,dataState:t,...n}){return(0,Le.useEffect)(()=>{if(t!==`data`)return D(`stats/utm`,t),()=>D(`stats/utm`,null)},[t]),(0,U.jsx)(S,{...n,widgetType:ze,renderModule:Re,renderComponent:N,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(e)}})}var Le,U,Re,ze,W,Be,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),b(),de(),ve(),C(),v(),be(),xe(),Oe(),ke(),Fe(),Le=t(n(),1),U=a(),y(),E(),Re=`storybook/utm-insights`,ze=x(Pe,L),W=[`data`,`loading`,`empty`,`error`,`error-retryable`],Be={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(e)}}),args:{withComparison:!1},decorators:[T,_]},K={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(e)}}),args:{withComparison:!0},decorators:[T,_]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[T,_],beforeEach:()=>(D(`stats/utm`,`loading`),()=>D(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[T,_],beforeEach:()=>(D(`stats/utm`,`error`),()=>D(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[T,_],beforeEach:()=>(D(`stats/utm`,`error-retryable`),()=>D(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[T,_],beforeEach:()=>(D(`stats/utm`,`empty`),()=>D(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_campaign`,reportParams:m(e)}}),args:{withComparison:!1},decorators:[T,_]},Q={render:e=>(0,U.jsx)(Ie,{...e}),args:{...w,withComparison:!1,dataState:`data`},argTypes:{...ye,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},dataState:{control:`radio`,options:W,description:"What the UTM report request does: serve rows, never settle, resolve with none, or fail with a permission (`error`) or connection (`error-retryable`) 403."}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_source,utm_medium',
    reportParams: getDefaultQueryParams(withComparison)
  }} />,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_source,utm_medium',
    reportParams: getDefaultQueryParams(withComparison)
  }} />,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'loading');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: the widget shows the neutral
"You don't have access to this data." copy and no Retry action, since a
permission gate is deterministic and retrying cannot clear it.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error-retryable');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
widget shows its retryable copy with a Retry action, which re-runs the query
(still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'empty');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget offers Build URL and keeps View all available.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_campaign',
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
    withComparison: false,
    dataState: 'data'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params and deltas.'
    },
    dataState: {
      control: 'radio',
      options: UTM_DATA_STATES,
      description: 'What the UTM report request does: serve rows, never settle, resolve with none, or fail with a permission (\`error\`) or connection (\`error-retryable\`) 403.'
    }
  }
}`,...Q.parameters?.docs?.source}}}}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Be as default};