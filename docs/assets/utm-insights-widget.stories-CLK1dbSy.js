import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as r,n as i,t as a}from"./build-module-DQe4AOzJ.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{Mu as s,bu as c}from"./build-module-BI3_PVVO.js";import{B as l,Ft as u,I as d,f as ee,in as te,o as ne,sn as re,xn as ie}from"./charts-provider-BXWttMH6.js";import{f as ae}from"./library-Djn3c8VE.js";import{t as f}from"./src-Dklj63E7.js";import{t as p,tt as m,vn as h}from"./src-DvzWgCqE.js";import{t as oe}from"./widget-state-B-3KFlZy.js";import{V as se,a as ce,c as le,i as g,j as ue,n as de,o as fe,r as _,w as pe}from"./with-story-router-TeMi98u_.js";import"./constants-B9OTkkI1.js";import{r as me,t as he}from"./leaderboard-skeleton-C-y8R1eG.js";import{n as v,r as y}from"./register-report-mocks-CI2bPEM7.js";import{l as ge,s as _e}from"./locations-geo-chart-C6hMt7oL.js";import{a as ve,g as b,h as x,i as S,m as C,n as w,p as T,r as E}from"./with-widget-canvas-ke8j5asA.js";import{n as D,t as ye}from"./register-stats-mocks-Nvcu00DF.js";import{n as be,t as O}from"./force-stats-mock-state-B0U9Dr7D.js";var k,A,j,M,xe=e((()=>{k=`_root_xmjm2_1`,A=`_content_xmjm2_9`,j=`_backLink_xmjm2_16`,M={root:k,content:A,backLink:j}}));function N(e){return typeof e.label==`string`?e.label:String(e.label)}function Se(e){return{postId:e.id,label:N(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ce(e){return{label:N(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Se),childrenHaveComparison:e.childrenHaveComparison}}function we({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=m({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ce),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Te=e((()=>{p()}));function Ee({utmDimension:e,showReportLink:t}){let{reportParams:n}=l(),[a,o]=(0,s.useState)(!1),c=(0,s.useCallback)(()=>o(!0),[]),d=(0,s.useCallback)(()=>o(!1),[]),f=fe(e),{drillDownItem:p,drillDown:m,resetDrillDown:h}=ne();(0,s.useEffect)(()=>{h()},[h,e]);let{data:g,hasComparison:de,isLoading:_,isFetching:v,isError:y,error:ve,refetch:b}=we({reportParams:n,utmParam:e,max:10}),x=(0,s.useMemo)(()=>g.find(e=>e.label===p)??null,[g,p]),S=!!x?.children?.length,C=(0,s.useMemo)(()=>S?x?.children??[]:g,[g,S,x]),w=S?!!x?.childrenHaveComparison:de;(0,s.useEffect)(()=>{p&&!S&&!_&&!v&&!y&&h()},[p,S,_,v,y,h]);let T=(0,s.useMemo)(()=>{let e=te(C.map(e=>e.value),w?C.map(e=>e.previousValue):[]);return C.map((t,n)=>{let a=t.previousValue,o=`postId`in t?t:null,s=!S&&`children`in t&&!!t.children?.length;return{id:`${n}-${t.label}`,...o?{label:(0,F.jsx)(ue,{id:o.postId,label:o.label,link:o.href,origin:{report:`utm`,section:f}})}:_e({label:t.label,media:{kind:`none`},action:ge({hasChildren:s,drillDown:{onClick:()=>m(t.label),ariaLabel:r(i(`View posts for %s`,`jetpack-premium-analytics-pkg`),t.label)}})}),currentValue:t.value,currentShare:re(t.value,e),previousValue:a,previousShare:w&&a!==void 0?re(a,e):void 0,delta:w&&a!==void 0?ie(t.value,a):void 0}})},[C,S,f,m,w]),E=S?(0,F.jsx)(se,{label:i(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:h,className:M.backLink}):null,D=!_&&(y||g.length>0);return ee({...t&&{report:`utm`,section:f,csv:{exporter:le[f],status:{isLoading:_,isFetching:v,isError:y},rowCount:g.length}},actions:D?[{id:`build-url`,label:i(`Build URL`,`jetpack-premium-analytics-pkg`),relevance:`medium`,callback:c}]:[]}),(0,F.jsxs)(F.Fragment,{children:[E,(0,F.jsx)(`div`,{className:M.content,children:(0,F.jsx)(oe,{isLoading:_,isFetching:v,isError:y,isEmpty:g.length===0,empty:{icon:ae,description:i(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:c}},error:u(ve,{retryDescription:i(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:b}),renderLoading:(0,F.jsx)(he,{rows:10}),children:(0,F.jsx)(me,{chartTitle:i(`Top UTM`,`jetpack-premium-analytics-pkg`),data:T,withComparison:w,withOverlayLabel:!0,showLegend:!1,dataFormat:I,columns:{label:S?i(`Posts`,`jetpack-premium-analytics-pkg`):ce(f),metric:`views`}})})}),a&&(0,F.jsx)(pe,{onClose:d})]})}function P({attributes:e={}}){let t=e.utmDimension??L,n=e.showReportLink??!0;return(0,F.jsx)(d,{attributes:e,children:(0,F.jsx)(`div`,{className:M.root,children:(0,F.jsx)(Ee,{utmDimension:t,showReportLink:n})})})}var F,I,L,De=e((()=>{f(),c(),a(),g(),xe(),Te(),F=o(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L=`utm_source,utm_medium`})),R,Oe=e((()=>{R={example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),z,B,V,H,ke,Ae,je,Me,Ne,Pe=e((()=>{z=`jpa/utm-insights`,B=`jpa/megaphone`,V=`Top UTM`,H=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,ke={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ae=`traffic`,je=`framed`,Me=[{id:`utmDimension`,type:`jpa/select`,label:`UTM parameter`,relevance:`high`,elements:[{value:`utm_source,utm_medium`,label:`Source / Medium`},{value:`utm_campaign,utm_source,utm_medium`,label:`Campaign / Source / Medium`},{value:`utm_source`,label:`Source`},{value:`utm_medium`,label:`Medium`},{value:`utm_campaign`,label:`Campaign`}]}],Ne={name:z,icon:B,title:V,description:H,help:ke,category:Ae,presentation:je,attributes:Me}}));function U(e){return(0,W.jsx)(P,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(!1,e)}})}function Fe({withComparison:e,dataState:t,...n}){return(0,Ie.useEffect)(()=>{if(t!==`data`)return O(`stats/utm`,t),()=>O(`stats/utm`,null)},[t]),(0,W.jsx)(C,{...n,widgetType:Re,renderModule:Le,renderComponent:P,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}})}var Ie,W,Le,Re,G,ze,K,q,J,Y,X,Z,Q,$,Be;e((()=>{p(),x(),de(),ve(),w(),v(),ye(),be(),De(),Oe(),Pe(),Ie=t(n(),1),W=o(),y(),D(),Le=`storybook/utm-insights`,Re=S(Ne,R),G=[`data`,`loading`,`empty`,`error`,`error-retryable`],ze={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,W.jsx)(P,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[E,_]},q={render:({withComparison:e})=>(0,W.jsx)(P,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!0},decorators:[E,_]},J={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[E,_],beforeEach:()=>(O(`stats/utm`,`loading`),()=>O(`stats/utm`,null))},Y={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[E,_],beforeEach:()=>(O(`stats/utm`,`error`),()=>O(`stats/utm`,null))},X={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[E,_],beforeEach:()=>(O(`stats/utm`,`error-retryable`),()=>O(`stats/utm`,null))},Z={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[E,_],beforeEach:()=>(O(`stats/utm`,`empty`),()=>O(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,W.jsx)(P,{attributes:{utmDimension:`utm_campaign`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[E,_]},$={render:e=>(0,W.jsx)(Fe,{...e}),args:{...T,withComparison:!1,dataState:`data`},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},dataState:{control:`radio`,options:G,description:"What the UTM report request does: serve rows, never settle, resolve with none, or fail with a permission (`error`) or connection (`error-retryable`) 403."}}},Be=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: the widget shows the neutral
"You don't have access to this data." copy and no Retry action, since a
permission gate is deterministic and retrying cannot clear it.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error-retryable');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
widget shows its retryable copy with a Retry action, which re-runs the query
(still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'empty');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget offers Build URL and keeps View all available.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Be as __namedExportsOrder,ze as default};