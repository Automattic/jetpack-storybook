import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{C as ee,n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{Mu as o,bu as s}from"./build-module-BI3_PVVO.js";import{B as te,Ft as c,I as l,f as ne,o as re}from"./charts-provider-CJceu84j.js";import{f as ie}from"./library-Djn3c8VE.js";import{t as u}from"./src-Dklj63E7.js";import{t as d,tt as f,vn as p}from"./src-DvzWgCqE.js";import{t as ae}from"./widget-state-BygCceVJ.js";import{V as oe,a as se,c as ce,i as m,j as le,n as h,o as ue,r as g,w as de}from"./with-story-router-Bl7d_9HM.js";import"./constants-B9OTkkI1.js";import{r as fe,t as pe}from"./leaderboard-skeleton-9Ba15YQj.js";import{n as _,r as v}from"./register-report-mocks-CI2bPEM7.js";import{l as me,s as he}from"./locations-geo-chart-CRxPU1Bn.js";import{a as ge,g as _e,h as y,i as b,m as x,n as S,p as C,r as w}from"./with-widget-canvas-BX79mBf6.js";import{n as T,t as ve}from"./register-stats-mocks-Nvcu00DF.js";import{n as ye,t as E}from"./force-stats-mock-state-B0U9Dr7D.js";var D,O,k,A,be=e((()=>{D=`_root_xmjm2_1`,O=`_content_xmjm2_9`,k=`_backLink_xmjm2_16`,A={root:D,content:O,backLink:k}}));function j(e){return typeof e.label==`string`?e.label:String(e.label)}function xe(e){return{postId:e.id,label:j(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Se(e){return{label:j(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(xe),childrenHaveComparison:e.childrenHaveComparison}}function Ce({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:te}=f({...e,utmParam:t,max:n},{maxRows:n}),c=(ee?.rows??[]).map(Se),l=c.length===0&&o;return{data:c,hasComparison:r,isLoading:i,isFetching:a,isError:l,error:l?s:null,refetch:te}}var we=e((()=>{d()}));function Te({utmDimension:e,showReportLink:t}){let{reportParams:n}=te(),[i,a]=(0,o.useState)(!1),s=(0,o.useCallback)(()=>a(!0),[]),l=(0,o.useCallback)(()=>a(!1),[]),u=ue(e),{drillDownItem:d,drillDown:f,resetDrillDown:p}=re();(0,o.useEffect)(()=>{p()},[p,e]);let{data:m,hasComparison:h,isLoading:g,isFetching:_,isError:v,error:ge,refetch:_e}=Ce({reportParams:n,utmParam:e,max:10}),y=(0,o.useMemo)(()=>m.find(e=>e.label===d)??null,[m,d]),b=!!y?.children?.length,x=(0,o.useMemo)(()=>b?y?.children??[]:m,[m,b,y]),S=b?!!y?.childrenHaveComparison:h;(0,o.useEffect)(()=>{d&&!b&&!g&&!_&&!v&&p()},[d,b,g,_,v,p]);let C=(0,o.useMemo)(()=>x.map((e,t)=>{let n=`postId`in e?e:null,i=!b&&`children`in e&&!!e.children?.length;return{id:`${t}-${e.label}`,...n?{label:(0,N.jsx)(le,{id:n.postId,label:n.label,link:n.href,origin:{report:`utm`,section:u}})}:he({label:e.label,media:{kind:`none`},action:me({hasChildren:i,drillDown:{onClick:()=>f(e.label),ariaLabel:ee(r(`View posts for %s`,`jetpack-premium-analytics-pkg`),e.label)}})}),currentValue:e.value,previousValue:e.previousValue}}),[x,b,u,f]),w=b?(0,N.jsx)(oe,{label:r(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:r(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:p,className:A.backLink}):null,T=!g&&(v||m.length>0);return ne({...t&&{report:`utm`,section:u,csv:{exporter:ce[u],status:{isLoading:g,isFetching:_,isError:v},rowCount:m.length}},actions:T?[{id:`build-url`,label:r(`Build URL`,`jetpack-premium-analytics-pkg`),relevance:`medium`,callback:s}]:[]}),(0,N.jsxs)(N.Fragment,{children:[w,(0,N.jsx)(`div`,{className:A.content,children:(0,N.jsx)(ae,{isLoading:g,isFetching:_,isError:v,isEmpty:m.length===0,empty:{icon:ie,description:r(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:r(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:s}},error:c(ge,{retryDescription:r(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_e}),renderLoading:(0,N.jsx)(pe,{rows:10}),children:(0,N.jsx)(fe,{chartTitle:r(`Top UTM`,`jetpack-premium-analytics-pkg`),data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:P,columns:{label:b?r(`Posts`,`jetpack-premium-analytics-pkg`):se(u),metric:`views`}})})}),i&&(0,N.jsx)(de,{onClose:l})]})}function M({attributes:e={}}){let t=e.utmDimension??Ee,n=e.showReportLink??!0;return(0,N.jsx)(l,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(Te,{utmDimension:t,showReportLink:n})})})}var N,P,Ee,De=e((()=>{u(),s(),i(),m(),be(),we(),N=a(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},Ee=`utm_source,utm_medium`})),F,Oe=e((()=>{F={example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),I,L,R,z,B,V,ke,Ae,je,Me=e((()=>{I=`jpa/utm-insights`,L=`jpa/megaphone`,R=`Top UTM`,z=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,B={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`traffic`,ke=`framed`,Ae=[{id:`utmDimension`,type:`jpa/select`,label:`UTM parameter`,relevance:`high`,elements:[{value:`utm_source,utm_medium`,label:`Source / Medium`},{value:`utm_campaign,utm_source,utm_medium`,label:`Campaign / Source / Medium`},{value:`utm_source`,label:`Source`},{value:`utm_medium`,label:`Medium`},{value:`utm_campaign`,label:`Campaign`}]}],je={name:I,icon:L,title:R,description:z,help:B,category:V,presentation:ke,attributes:Ae}}));function H(e){return(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(!1,e)}})}function Ne({withComparison:e,dataState:t,...n}){return(0,Pe.useEffect)(()=>{if(t!==`data`)return E(`stats/utm`,t),()=>E(`stats/utm`,null)},[t]),(0,U.jsx)(x,{...n,widgetType:Ie,renderModule:Fe,renderComponent:M,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}})}var Pe,U,Fe,Ie,W,Le,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),y(),h(),ge(),S(),_(),ve(),ye(),De(),Oe(),Me(),Pe=t(n(),1),U=a(),v(),T(),Fe=`storybook/utm-insights`,Ie=b(je,F),W=[`data`,`loading`,`empty`,`error`,`error-retryable`],Le={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[w,g]},K={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!0},decorators:[w,g]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(E(`stats/utm`,`loading`),()=>E(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(E(`stats/utm`,`error`),()=>E(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(E(`stats/utm`,`error-retryable`),()=>E(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(E(`stats/utm`,`empty`),()=>E(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_campaign`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[w,g]},Q={render:e=>(0,U.jsx)(Ne,{...e}),args:{...C,withComparison:!1,dataState:`data`},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`},dataState:{control:`radio`,options:W,description:"What the UTM report request does: serve rows, never settle, resolve with none, or fail with a permission (`error`) or connection (`error-retryable`) 403."}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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