import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as ee,n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{ou as o,vu as s}from"./build-module-D8x1-0PG.js";import{f as c}from"./library-CQwI0SXA.js";import{t as l}from"./src-LMMGtvdu2.js";import{Cn as u,it as d,t as f}from"./src-Bm9MmJNJ.js";import{H as te,I as p,Wt as ne,f as re,o as ie}from"./charts-provider-iKLRcVDw.js";import{t as ae}from"./widget-state-BC9EBmmc.js";import{E as m,F as oe,G as se,O as ce,a as le,c as ue,i as h,n as g,o as de,r as _,w as v}from"./with-story-router-B_cck7yz.js";import"./constants-Cx6tCf49.js";import{r as fe,t as pe}from"./leaderboard-skeleton-DcPZprAW.js";import{n as me,r as he}from"./register-report-mocks-D3lWkH8m.js";import{l as ge,s as _e}from"./locations-geo-chart-Bi_QuuG5.js";import{a as y,c as b,i as x,l as S,o as C,r as w,s as T,u as ve}from"./with-widget-canvas-BhyYVwV4.js";import{n as ye,t as be}from"./register-stats-mocks-BLfWbTqK.js";import{n as xe,t as E}from"./force-stats-mock-state-fgUq0aLM.js";var D,O,k,A,Se=e((()=>{D=`_root_xmjm2_1`,O=`_content_xmjm2_9`,k=`_backLink_xmjm2_16`,A={root:D,content:O,backLink:k}}));function j(e){return typeof e.label==`string`?e.label:String(e.label)}function Ce(e){return{postId:e.id,label:j(e),value:e.value,previousValue:e.previousValue,href:e.href,urlBuilder:v(e.actions)}}function we(e){return{label:j(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ce),childrenHaveComparison:e.childrenHaveComparison}}function Te({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=d({...e,utmParam:t,max:n},{maxRows:n}),l=(ee?.rows??[]).map(we),u=l.length===0&&o;return{data:l,hasComparison:r,isLoading:i,isFetching:a,isError:u,error:u?s:null,refetch:c}}var Ee=e((()=>{f(),h()}));function De({label:e,values:t,onOpen:n}){return(0,N.jsx)(m,{label:e,onClick:(0,s.useCallback)(()=>n(t),[n,t])})}function Oe({utmDimension:e,showReportLink:t}){let{reportParams:n}=te(),[i,a]=(0,s.useState)(null),o=(0,s.useCallback)(()=>a({}),[]),l=(0,s.useCallback)(()=>a(null),[]),u=de(e),{drillDownItem:d,drillDown:f,resetDrillDown:p}=ie();(0,s.useEffect)(()=>{p()},[p,e]);let{data:m,hasComparison:h,isLoading:g,isFetching:_,isError:v,error:me,refetch:he}=Te({reportParams:n,utmParam:e,max:10}),y=(0,s.useMemo)(()=>m.find(e=>e.label===d)??null,[m,d]),b=!!y?.children?.length,x=(0,s.useMemo)(()=>b?y?.children??[]:m,[m,b,y]),S=b?!!y?.childrenHaveComparison:h;(0,s.useEffect)(()=>{d&&!b&&!g&&!_&&!v&&p()},[d,b,g,_,v,p]);let C=(0,s.useMemo)(()=>x.map((e,t)=>{let n=`postId`in e?e:null,i=!b&&`children`in e&&!!e.children?.length;return{id:`${t}-${e.label}`,...n?{label:(0,N.jsx)(oe,{id:n.postId,label:n.label,link:n.href,origin:{report:`utm`,section:u},trailingAction:n.urlBuilder?(0,N.jsx)(De,{label:n.label,values:n.urlBuilder,onOpen:a}):void 0})}:_e({label:e.label,media:{kind:`none`},action:ge({hasChildren:i,drillDown:{onClick:()=>f(e.label),ariaLabel:ee(r(`View posts for %s`,`jetpack-premium-analytics-pkg`),e.label)}})}),currentValue:e.value,previousValue:e.previousValue}}),[x,b,u,f]),w=b?(0,N.jsx)(se,{label:r(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:p,className:A.backLink}):null,T=!g&&(v||m.length>0);return re({...t&&{report:`utm`,section:u,csv:{exporter:ue[u],status:{isLoading:g,isFetching:_,isError:v},rowCount:m.length}},actions:T?[{id:`build-url`,label:r(`Build URL`,`jetpack-premium-analytics-pkg`),relevance:`medium`,callback:o}]:[]}),(0,N.jsxs)(N.Fragment,{children:[w,(0,N.jsx)(`div`,{className:A.content,children:(0,N.jsx)(ae,{isLoading:g,isFetching:_,isError:v,isEmpty:m.length===0,empty:{icon:c,description:r(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:o}},error:ne(me,{retryDescription:r(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:he}),renderLoading:(0,N.jsx)(pe,{rows:10}),children:(0,N.jsx)(fe,{data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:P,columns:{label:b?r(`Posts`,`jetpack-premium-analytics-pkg`):le(u),metric:`views`}})})}),i&&(0,N.jsx)(ce,{initialValues:i,onClose:l})]})}function M({attributes:e={}}){let t=e.utmDimension??ke,n=e.showReportLink??!0;return(0,N.jsx)(p,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(Oe,{utmDimension:t,showReportLink:n})})})}var N,P,ke,Ae=e((()=>{l(),o(),i(),h(),Se(),Ee(),N=a(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},ke=`utm_source,utm_medium`})),F,je=e((()=>{F={example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),I,L,R,z,B,V,Me,Ne,Pe,Fe=e((()=>{I=`jpa/utm-insights`,L=`jpa/megaphone`,R=`Top UTM`,z=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,B={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`traffic`,Me=`framed`,Ne=[{id:`utmDimension`,type:`jpa/select`,label:`UTM parameter`,relevance:`high`,elements:[{value:`utm_source,utm_medium`,label:`Source / Medium`},{value:`utm_campaign,utm_source,utm_medium`,label:`Campaign / Source / Medium`},{value:`utm_source`,label:`Source`},{value:`utm_medium`,label:`Medium`},{value:`utm_campaign`,label:`Campaign`}]}],Pe={name:I,icon:L,title:R,description:z,help:B,category:V,presentation:Me,attributes:Ne}}));function H(e){return(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:u(!1,e)}})}function Ie({withComparison:e,dataState:t,...n}){return(0,Le.useEffect)(()=>{if(t!==`data`)return E(`stats/utm`,t),()=>E(`stats/utm`,null)},[t]),(0,U.jsx)(b,{...n,widgetType:ze,renderModule:Re,renderComponent:M,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:u(e)}})}var Le,U,Re,ze,W,Be,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),S(),g(),C(),w(),me(),be(),xe(),Ae(),je(),Fe(),Le=t(n(),1),U=a(),he(),ye(),Re=`storybook/utm-insights`,ze=y(Pe,F),W=[`data`,`loading`,`empty`,`error`,`error-retryable`],Be={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:u(e)}}),args:{withComparison:!1},decorators:[x,_]},K={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:u(e)}}),args:{withComparison:!0},decorators:[x,_]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(E(`stats/utm`,`loading`),()=>E(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(E(`stats/utm`,`error`),()=>E(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(E(`stats/utm`,`error-retryable`),()=>E(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x,_],beforeEach:()=>(E(`stats/utm`,`empty`),()=>E(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_campaign`,reportParams:u(e)}}),args:{withComparison:!1},decorators:[x,_]},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(Ie,{...e}),args:{...T,withComparison:!1,dataState:`data`},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},dataState:{control:`radio`,options:W,description:"What the UTM report request does: serve rows, never settle, resolve with none, or fail with a permission (`error`) or connection (`error-retryable`) 403."}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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