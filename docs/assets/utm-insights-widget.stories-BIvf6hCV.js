import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as ee,n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{ou as o,vu as s}from"./build-module-D8x1-0PG.js";import{B as te,I as c,Vt as l,f as ne,o as re}from"./charts-provider-BmHzZhpi.js";import{f as ie}from"./library-CQwI0SXA.js";import{t as u}from"./src-LMMGtvdu2.js";import{Sn as d,rt as f,t as p}from"./src-BcILQ8ng.js";import{t as ae}from"./widget-state-DnbF8hrz.js";import{C as m,N as oe,T as se,U as ce,a as le,n as ue,r as de,t as h,x as g}from"./src-BXUpbDcT.js";import"./constants-JU419spr.js";import{r as fe,t as pe}from"./leaderboard-skeleton-BYzOIm-8.js";import{n as _,r as v}from"./register-report-mocks-DEKgkFm4.js";import{l as me,s as he}from"./locations-geo-chart-Cn5rUZiD.js";import{n as ge,r as y}from"./with-story-router-CceBZUiL.js";import{a as b,c as x,i as S,l as C,o as w,r as T,s as E,u as _e}from"./with-widget-canvas-BXILxgDl.js";import{n as ve,t as ye}from"./register-stats-mocks-BLfWbTqK.js";import{n as be,t as D}from"./force-stats-mock-state-CZ4B651-.js";var O,k,A,j,xe=e((()=>{O=`_root_xmjm2_1`,k=`_content_xmjm2_9`,A=`_backLink_xmjm2_16`,j={root:O,content:k,backLink:A}}));function M(e){return typeof e.label==`string`?e.label:String(e.label)}function Se(e){return{postId:e.id,label:M(e),value:e.value,previousValue:e.previousValue,href:e.href,urlBuilder:g(e.actions)}}function Ce(e){return{label:M(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Se),childrenHaveComparison:e.childrenHaveComparison}}function we({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:te}=f({...e,utmParam:t,max:n},{maxRows:n}),c=(ee?.rows??[]).map(Ce),l=c.length===0&&o;return{data:c,hasComparison:r,isLoading:i,isFetching:a,isError:l,error:l?s:null,refetch:te}}var Te=e((()=>{p(),h()}));function Ee({label:e,values:t,onOpen:n}){return(0,P.jsx)(m,{label:e,onClick:(0,s.useCallback)(()=>n(t),[n,t])})}function De({utmDimension:e,showReportLink:t}){let{reportParams:n}=te(),[i,a]=(0,s.useState)(null),o=(0,s.useCallback)(()=>a({}),[]),c=(0,s.useCallback)(()=>a(null),[]),u=de(e),{drillDownItem:d,drillDown:f,resetDrillDown:p}=re();(0,s.useEffect)(()=>{p()},[p,e]);let{data:m,hasComparison:h,isLoading:g,isFetching:_,isError:v,error:ge,refetch:y}=we({reportParams:n,utmParam:e,max:10}),b=(0,s.useMemo)(()=>m.find(e=>e.label===d)??null,[m,d]),x=!!b?.children?.length,S=(0,s.useMemo)(()=>x?b?.children??[]:m,[m,x,b]),C=x?!!b?.childrenHaveComparison:h;(0,s.useEffect)(()=>{d&&!x&&!g&&!_&&!v&&p()},[d,x,g,_,v,p]);let w=(0,s.useMemo)(()=>S.map((e,t)=>{let n=`postId`in e?e:null,i=!x&&`children`in e&&!!e.children?.length;return{id:`${t}-${e.label}`,...n?{label:(0,P.jsx)(oe,{id:n.postId,label:n.label,link:n.href,origin:{report:`utm`,section:u},trailingAction:n.urlBuilder?(0,P.jsx)(Ee,{label:n.label,values:n.urlBuilder,onOpen:a}):void 0})}:he({label:e.label,media:{kind:`none`},action:me({hasChildren:i,drillDown:{onClick:()=>f(e.label),ariaLabel:ee(r(`View posts for %s`,`jetpack-premium-analytics-pkg`),e.label)}})}),currentValue:e.value,previousValue:e.previousValue}}),[S,x,u,f]),T=x?(0,P.jsx)(ce,{label:r(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:p,className:j.backLink}):null,E=!g&&(v||m.length>0);return ne({...t&&{report:`utm`,section:u,csv:{exporter:le[u],status:{isLoading:g,isFetching:_,isError:v},rowCount:m.length}},actions:E?[{id:`build-url`,label:r(`Build URL`,`jetpack-premium-analytics-pkg`),relevance:`medium`,callback:o}]:[]}),(0,P.jsxs)(P.Fragment,{children:[T,(0,P.jsx)(`div`,{className:j.content,children:(0,P.jsx)(ae,{isLoading:g,isFetching:_,isError:v,isEmpty:m.length===0,empty:{icon:ie,description:r(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:o}},error:l(ge,{retryDescription:r(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:y}),renderLoading:(0,P.jsx)(pe,{rows:10}),children:(0,P.jsx)(fe,{data:w,withComparison:C,withOverlayLabel:!0,showLegend:!1,dataFormat:F,columns:{label:x?r(`Posts`,`jetpack-premium-analytics-pkg`):ue(u),metric:`views`}})})}),i&&(0,P.jsx)(se,{initialValues:i,onClose:c})]})}function N({attributes:e={}}){let t=e.utmDimension??I,n=e.showReportLink??!0;return(0,P.jsx)(c,{attributes:e,children:(0,P.jsx)(`div`,{className:j.root,children:(0,P.jsx)(De,{utmDimension:t,showReportLink:n})})})}var P,F,I,Oe=e((()=>{u(),o(),i(),h(),xe(),Te(),P=a(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I=`utm_source,utm_medium`})),L,ke=e((()=>{L={example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),R,z,B,V,Ae,je,Me,Ne,Pe,Fe=e((()=>{R=`jpa/utm-insights`,z=`jpa/megaphone`,B=`Top UTM`,V=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,Ae={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},je=`traffic`,Me=`framed`,Ne=[{id:`utmDimension`,type:`jpa/select`,label:`UTM parameter`,relevance:`high`,elements:[{value:`utm_source,utm_medium`,label:`Source / Medium`},{value:`utm_campaign,utm_source,utm_medium`,label:`Campaign / Source / Medium`},{value:`utm_source`,label:`Source`},{value:`utm_medium`,label:`Medium`},{value:`utm_campaign`,label:`Campaign`}]}],Pe={name:R,icon:z,title:B,description:V,help:Ae,category:je,presentation:Me,attributes:Ne}}));function H(e){return(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:d(!1,e)}})}function Ie({withComparison:e,dataState:t,...n}){return(0,Le.useEffect)(()=>{if(t!==`data`)return D(`stats/utm`,t),()=>D(`stats/utm`,null)},[t]),(0,U.jsx)(x,{...n,widgetType:ze,renderModule:Re,renderComponent:N,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:d(e)}})}var Le,U,Re,ze,W,Be,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),C(),ge(),w(),T(),_(),ye(),be(),Oe(),ke(),Fe(),Le=t(n(),1),U=a(),v(),ve(),Re=`storybook/utm-insights`,ze=b(Pe,L),W=[`data`,`loading`,`empty`,`error`,`error-retryable`],Be={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:d(e)}}),args:{withComparison:!1},decorators:[S,y]},K={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:d(e)}}),args:{withComparison:!0},decorators:[S,y]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(D(`stats/utm`,`loading`),()=>D(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(D(`stats/utm`,`error`),()=>D(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(D(`stats/utm`,`error-retryable`),()=>D(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S,y],beforeEach:()=>(D(`stats/utm`,`empty`),()=>D(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_campaign`,reportParams:d(e)}}),args:{withComparison:!1},decorators:[S,y]},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(Ie,{...e}),args:{...E,withComparison:!1,dataState:`data`},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},dataState:{control:`radio`,options:W,description:"What the UTM report request does: serve rows, never settle, resolve with none, or fail with a permission (`error`) or connection (`error-retryable`) 403."}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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