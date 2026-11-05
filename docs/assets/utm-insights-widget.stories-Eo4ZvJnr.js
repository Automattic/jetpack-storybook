import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{ou as s,vu as c}from"./build-module-D8x1-0PG.js";import{B as ee,I as l,Vt as u,f as te,o as ne}from"./charts-provider-Dywd-o-P.js";import{f as re}from"./library-DczT_xrY.js";import{t as d}from"./src-Dj0qyN782.js";import{bn as f,t as p,tt as m}from"./src-BG_TKhyf.js";import{t as ie}from"./widget-state-Dbd-m3rt.js";import{C as h,N as ae,T as oe,U as se,a as ce,n as le,r as ue,t as g,x as _}from"./src-B5UWDf40.js";import"./constants-Ds2Tofyv.js";import{r as de,t as fe}from"./leaderboard-skeleton-DKmoeqOa.js";import{n as v,r as y}from"./register-report-mocks-CisljdiM.js";import{l as pe,s as me}from"./locations-geo-chart-CiPZ6gVi.js";import{n as he,r as b}from"./with-story-router-C-QssHt2.js";import{a as x,c as S,i as C,l as w,n as T,o as E,r as D,s as ge}from"./with-widget-canvas-BmtrsUpz.js";import{n as _e,t as ve}from"./register-stats-mocks-BLfWbTqK.js";import{n as ye,t as O}from"./force-stats-mock-state-CiHtRTGa.js";var k,A,j,M,be=e((()=>{k=`_root_xmjm2_1`,A=`_content_xmjm2_9`,j=`_backLink_xmjm2_16`,M={root:k,content:A,backLink:j}}));function N(e){return typeof e.label==`string`?e.label:String(e.label)}function xe(e){return{postId:e.id,label:N(e),value:e.value,previousValue:e.previousValue,href:e.href,urlBuilder:_(e.actions)}}function Se(e){return{label:N(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(xe),childrenHaveComparison:e.childrenHaveComparison}}function Ce({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=m({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(Se),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var we=e((()=>{p(),g()}));function Te({label:e,values:t,onOpen:n}){return(0,F.jsx)(h,{label:e,onClick:(0,c.useCallback)(()=>n(t),[n,t])})}function Ee({utmDimension:e,showReportLink:t}){let{reportParams:n}=ee(),[a,o]=(0,c.useState)(null),s=(0,c.useCallback)(()=>o({}),[]),l=(0,c.useCallback)(()=>o(null),[]),d=ue(e),{drillDownItem:f,drillDown:p,resetDrillDown:m}=ne();(0,c.useEffect)(()=>{m()},[m,e]);let{data:h,hasComparison:g,isLoading:_,isFetching:v,isError:y,error:he,refetch:b}=Ce({reportParams:n,utmParam:e,max:10}),x=(0,c.useMemo)(()=>h.find(e=>e.label===f)??null,[h,f]),S=!!x?.children?.length,C=(0,c.useMemo)(()=>S?x?.children??[]:h,[h,S,x]),w=S?!!x?.childrenHaveComparison:g;(0,c.useEffect)(()=>{f&&!S&&!_&&!v&&!y&&m()},[f,S,_,v,y,m]);let T=(0,c.useMemo)(()=>C.map((e,t)=>{let n=`postId`in e?e:null,a=!S&&`children`in e&&!!e.children?.length;return{id:`${t}-${e.label}`,...n?{label:(0,F.jsx)(ae,{id:n.postId,label:n.label,link:n.href,origin:{report:`utm`,section:d},trailingAction:n.urlBuilder?(0,F.jsx)(Te,{label:n.label,values:n.urlBuilder,onOpen:o}):void 0})}:me({label:e.label,media:{kind:`none`},action:pe({hasChildren:a,drillDown:{onClick:()=>p(e.label),ariaLabel:r(i(`View posts for %s`,`jetpack-premium-analytics-pkg`),e.label)}})}),currentValue:e.value,previousValue:e.previousValue}}),[C,S,d,p]),E=S?(0,F.jsx)(se,{label:i(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:m,className:M.backLink}):null,D=!_&&(y||h.length>0);return te({...t&&{report:`utm`,section:d,csv:{exporter:ce[d],status:{isLoading:_,isFetching:v,isError:y},rowCount:h.length}},actions:D?[{id:`build-url`,label:i(`Build URL`,`jetpack-premium-analytics-pkg`),relevance:`medium`,callback:s}]:[]}),(0,F.jsxs)(F.Fragment,{children:[E,(0,F.jsx)(`div`,{className:M.content,children:(0,F.jsx)(ie,{isLoading:_,isFetching:v,isError:y,isEmpty:h.length===0,empty:{icon:re,description:i(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:s}},error:u(he,{retryDescription:i(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:b}),renderLoading:(0,F.jsx)(fe,{rows:10}),children:(0,F.jsx)(de,{chartTitle:i(`Top UTM`,`jetpack-premium-analytics-pkg`),data:T,withComparison:w,withOverlayLabel:!0,showLegend:!1,dataFormat:I,columns:{label:S?i(`Posts`,`jetpack-premium-analytics-pkg`):le(d),metric:`views`}})})}),a&&(0,F.jsx)(oe,{initialValues:a,onClose:l})]})}function P({attributes:e={}}){let t=e.utmDimension??L,n=e.showReportLink??!0;return(0,F.jsx)(l,{attributes:e,children:(0,F.jsx)(`div`,{className:M.root,children:(0,F.jsx)(Ee,{utmDimension:t,showReportLink:n})})})}var F,I,L,De=e((()=>{d(),s(),a(),g(),be(),we(),F=o(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L=`utm_source,utm_medium`})),R,Oe=e((()=>{R={example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),z,B,V,H,ke,Ae,je,Me,Ne,Pe=e((()=>{z=`jpa/utm-insights`,B=`jpa/megaphone`,V=`Top UTM`,H=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,ke={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ae=`traffic`,je=`framed`,Me=[{id:`utmDimension`,type:`jpa/select`,label:`UTM parameter`,relevance:`high`,elements:[{value:`utm_source,utm_medium`,label:`Source / Medium`},{value:`utm_campaign,utm_source,utm_medium`,label:`Campaign / Source / Medium`},{value:`utm_source`,label:`Source`},{value:`utm_medium`,label:`Medium`},{value:`utm_campaign`,label:`Campaign`}]}],Ne={name:z,icon:B,title:V,description:H,help:ke,category:Ae,presentation:je,attributes:Me}}));function U(e){return(0,W.jsx)(P,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:f(!1,e)}})}function Fe({withComparison:e,dataState:t,...n}){return(0,Ie.useEffect)(()=>{if(t!==`data`)return O(`stats/utm`,t),()=>O(`stats/utm`,null)},[t]),(0,W.jsx)(ge,{...n,widgetType:Re,renderModule:Le,renderComponent:P,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:f(e)}})}var Ie,W,Le,Re,G,ze,K,q,J,Y,X,Z,Q,$,Be;e((()=>{p(),S(),he(),x(),T(),v(),ve(),ye(),De(),Oe(),Pe(),Ie=t(n(),1),W=o(),y(),_e(),Le=`storybook/utm-insights`,Re=C(Ne,R),G=[`data`,`loading`,`empty`,`error`,`error-retryable`],ze={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,W.jsx)(P,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:f(e)}}),args:{withComparison:!1},decorators:[D,b]},q={render:({withComparison:e})=>(0,W.jsx)(P,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:f(e)}}),args:{withComparison:!0},decorators:[D,b]},J={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[D,b],beforeEach:()=>(O(`stats/utm`,`loading`),()=>O(`stats/utm`,null))},Y={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[D,b],beforeEach:()=>(O(`stats/utm`,`error`),()=>O(`stats/utm`,null))},X={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[D,b],beforeEach:()=>(O(`stats/utm`,`error-retryable`),()=>O(`stats/utm`,null))},Z={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[D,b],beforeEach:()=>(O(`stats/utm`,`empty`),()=>O(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,W.jsx)(P,{attributes:{utmDimension:`utm_campaign`,reportParams:f(e)}}),args:{withComparison:!1},decorators:[D,b]},$={render:e=>(0,W.jsx)(Fe,{...e}),args:{...E,withComparison:!1,dataState:`data`},argTypes:{...w,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},dataState:{control:`radio`,options:G,description:"What the UTM report request does: serve rows, never settle, resolve with none, or fail with a permission (`error`) or connection (`error-retryable`) 403."}}},Be=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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