import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as ee,n as r,t as i}from"./build-module-sy00sX6O.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{ou as o,vu as s}from"./build-module-CPdP9iK8.js";import{B as te,I as c,Lt as l,f as ne,o as re}from"./charts-provider-DsX-Fp7L.js";import{f as ie}from"./library-CCRxvLCm.js";import{t as u}from"./src-Bh4Rgv_G.js";import{t as d,tt as f,vn as p}from"./src-eG9MNHBB.js";import{t as ae}from"./widget-state-EVLgG9Ub.js";import{a as oe,k as se,n as ce,r as le,t as m,x as ue,z as de}from"./src-DDRGoopA.js";import"./constants-DF4Qoi8L.js";import{r as fe,t as pe}from"./leaderboard-skeleton-C6WqtTfZ.js";import{n as me,r as h}from"./register-report-mocks-4SvdwSTg.js";import{l as he,s as ge}from"./locations-geo-chart-CigMr60a.js";import{n as g,r as _}from"./with-story-router-CsJFVsVX.js";import{a as _e,c as ve,i as v,l as y,n as b,o as x,r as S,s as C}from"./with-widget-canvas-36u0dStu.js";import{n as w,t as ye}from"./register-stats-mocks-Cy5KDOyv.js";import{n as be,t as T}from"./force-stats-mock-state-C0IYZ2Zb.js";var E,D,O,k,xe=e((()=>{E=`_root_xmjm2_1`,D=`_content_xmjm2_9`,O=`_backLink_xmjm2_16`,k={root:E,content:D,backLink:O}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function Se(e){return{postId:e.id,label:A(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ce(e){return{label:A(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Se),childrenHaveComparison:e.childrenHaveComparison}}function we({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:te}=f({...e,utmParam:t,max:n},{maxRows:n}),c=(ee?.rows??[]).map(Ce),l=c.length===0&&o;return{data:c,hasComparison:r,isLoading:i,isFetching:a,isError:l,error:l?s:null,refetch:te}}var Te=e((()=>{d()}));function Ee({utmDimension:e,showReportLink:t}){let{reportParams:n}=te(),[i,a]=(0,s.useState)(!1),o=(0,s.useCallback)(()=>a(!0),[]),c=(0,s.useCallback)(()=>a(!1),[]),u=le(e),{drillDownItem:d,drillDown:f,resetDrillDown:p}=re();(0,s.useEffect)(()=>{p()},[p,e]);let{data:m,hasComparison:me,isLoading:h,isFetching:g,isError:_,error:_e,refetch:ve}=we({reportParams:n,utmParam:e,max:10}),v=(0,s.useMemo)(()=>m.find(e=>e.label===d)??null,[m,d]),y=!!v?.children?.length,b=(0,s.useMemo)(()=>y?v?.children??[]:m,[m,y,v]),x=y?!!v?.childrenHaveComparison:me;(0,s.useEffect)(()=>{d&&!y&&!h&&!g&&!_&&p()},[d,y,h,g,_,p]);let S=(0,s.useMemo)(()=>b.map((e,t)=>{let n=`postId`in e?e:null,i=!y&&`children`in e&&!!e.children?.length;return{id:`${t}-${e.label}`,...n?{label:(0,M.jsx)(se,{id:n.postId,label:n.label,link:n.href,origin:{report:`utm`,section:u}})}:ge({label:e.label,media:{kind:`none`},action:he({hasChildren:i,drillDown:{onClick:()=>f(e.label),ariaLabel:ee(r(`View posts for %s`,`jetpack-premium-analytics-pkg`),e.label)}})}),currentValue:e.value,previousValue:e.previousValue}}),[b,y,u,f]),C=y?(0,M.jsx)(de,{label:r(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:p,className:k.backLink}):null,w=!h&&(_||m.length>0);return ne({...t&&{report:`utm`,section:u,csv:{exporter:oe[u],status:{isLoading:h,isFetching:g,isError:_},rowCount:m.length}},actions:w?[{id:`build-url`,label:r(`Build URL`,`jetpack-premium-analytics-pkg`),relevance:`medium`,callback:o}]:[]}),(0,M.jsxs)(M.Fragment,{children:[C,(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(ae,{isLoading:h,isFetching:g,isError:_,isEmpty:m.length===0,empty:{icon:ie,description:r(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:o}},error:l(_e,{retryDescription:r(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:ve}),renderLoading:(0,M.jsx)(pe,{rows:10}),children:(0,M.jsx)(fe,{chartTitle:r(`Top UTM`,`jetpack-premium-analytics-pkg`),data:S,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:N,columns:{label:y?r(`Posts`,`jetpack-premium-analytics-pkg`):ce(u),metric:`views`}})})}),i&&(0,M.jsx)(ue,{onClose:c})]})}function j({attributes:e={}}){let t=e.utmDimension??De,n=e.showReportLink??!0;return(0,M.jsx)(c,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Ee,{utmDimension:t,showReportLink:n})})})}var M,N,De,Oe=e((()=>{u(),o(),i(),m(),xe(),Te(),M=a(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},De=`utm_source,utm_medium`})),P,ke=e((()=>{P={example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),F,I,L,R,z,B,V,Ae,je,Me=e((()=>{F=`jpa/utm-insights`,I=`jpa/megaphone`,L=`Top UTM`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,Ae=[{id:`utmDimension`,type:`jpa/select`,label:`UTM parameter`,relevance:`high`,elements:[{value:`utm_source,utm_medium`,label:`Source / Medium`},{value:`utm_campaign,utm_source,utm_medium`,label:`Campaign / Source / Medium`},{value:`utm_source`,label:`Source`},{value:`utm_medium`,label:`Medium`},{value:`utm_campaign`,label:`Campaign`}]}],je={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V,attributes:Ae}}));function H(e){return(0,U.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(!1,e)}})}function Ne({withComparison:e,dataState:t,...n}){return(0,Pe.useEffect)(()=>{if(t!==`data`)return T(`stats/utm`,t),()=>T(`stats/utm`,null)},[t]),(0,U.jsx)(C,{...n,widgetType:Ie,renderModule:Fe,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}})}var Pe,U,Fe,Ie,W,Le,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ve(),g(),_e(),b(),me(),ye(),be(),Oe(),ke(),Me(),Pe=t(n(),1),U=a(),h(),w(),Fe=`storybook/utm-insights`,Ie=v(je,P),W=[`data`,`loading`,`empty`,`error`,`error-retryable`],Le={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[S,_]},K={render:({withComparison:e})=>(0,U.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!0},decorators:[S,_]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S,_],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(j,{attributes:{utmDimension:`utm_campaign`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[S,_]},Q={render:e=>(0,U.jsx)(Ne,{...e}),args:{...x,withComparison:!1,dataState:`data`},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},dataState:{control:`radio`,options:W,description:"What the UTM report request does: serve rows, never settle, resolve with none, or fail with a permission (`error`) or connection (`error-retryable`) 403."}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Le as default};