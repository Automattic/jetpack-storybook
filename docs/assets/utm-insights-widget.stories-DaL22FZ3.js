import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Y as s,t as c}from"./build-module-D50o9sls.js";import{Gu as l,Nu as u}from"./build-module-CDZL_1rk.js";import{$t as d,Cn as f,Ut as p,Vt as ee,Yt as m,Z as h,pr as g,q as _,qt as te,tn as v,zt as y}from"./build-module-Cy6cjC1U.js";import{f as b}from"./library-BaZ90bK7.js";import{t as x}from"./src-DZQPY6UA.js";import{t as S}from"./src-Cx34uVJV.js";import{J as C,dn as w,t as T}from"./src-CzTj1AN7.js";import{It as ne,ht as re,m as ie,o as ae,pt as oe,v as se,vt as ce}from"./charts-provider-BDh1sWsP.js";import"./rows-DAmD2BmE.js";import{r as le,t as ue}from"./leaderboard-skeleton-Ct3kUiP-.js";import{n as de,r as fe}from"./register-report-mocks-BbX2qmCy.js";import{t as pe}from"./widget-state-K4CASAiO.js";import{n as me,r as E}from"./with-story-router-B8AmDh4M.js";import{i as he,o as ge}from"./build-leaderboard-chart-data-CGH0anTZ.js";import{f as _e,l as ve,o as ye}from"./leaderboard-B8WkyEId.js";import{V as be,a as xe,b as Se,n as Ce,r as we,t as D}from"./src-ByXSKbSc.js";import{a as Te,g as Ee,h as De,i as Oe,m as ke,n as Ae,p as je,r as O}from"./with-widget-canvas-DKudguXy.js";import{n as Me,t as Ne}from"./register-stats-mocks-Ppx33F-Y.js";import{n as Pe,t as k}from"./force-stats-mock-state-Cmxdw5BA.js";var A,j,M,N,Fe=t((()=>{A=`_root_xmjm2_1`,j=`_content_xmjm2_9`,M=`_backLink_xmjm2_16`,N={root:A,content:j,backLink:M}}));function P(e){return typeof e.label==`string`?e.label:String(e.label)}function Ie(e){return{postId:e.id,label:P(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Le(e){return{label:P(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ie),childrenHaveComparison:e.childrenHaveComparison}}function Re({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=C({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Le),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var ze=t((()=>{T()})),F,I,L,R,Be,z,Ve=t((()=>{F=`_layout_10ym5_1`,I=`_form_10ym5_7`,L=`_result_10ym5_14`,R=`_resultValue_10ym5_18`,Be=`_help_10ym5_28`,z={layout:F,form:I,result:L,resultValue:R,help:Be}}));function He(e){let t=e.trim();if(!/^https?:\/\//i.test(t))return null;try{return new URL(t)}catch{return null}}function Ue(e,{campaign:t,source:n,medium:r}){if(!e)return null;let i={utm_campaign:t.trim(),utm_source:n.trim(),utm_medium:r.trim()};if(!Object.values(i).some(Boolean))return null;for(let[t,n]of Object.entries(i))e.searchParams.delete(t),n&&e.searchParams.set(t,n);return e.toString()}function We({onClose:e}){let[t,n]=(0,B.useState)({destination:``,campaign:``,source:``,medium:``}),[r,a]=(0,B.useState)(null),o=(0,B.useRef)(),c=He(t.destination),l=t.destination.trim()!==``&&!c,u=(0,B.useMemo)(()=>l?{type:`invalid`,message:i(`Enter a full URL that starts with https:// or http://.`,`jetpack-premium-analytics-pkg`)}:void 0,[l]),b=Ue(c,t),x=[t.campaign,t.source,t.medium].some(e=>e.trim()),S=(0,B.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),C=(0,B.useCallback)(e=>S(`destination`,e),[S]),w=(0,B.useCallback)(e=>S(`campaign`,e),[S]),T=(0,B.useCallback)(e=>S(`source`,e),[S]),ne=(0,B.useCallback)(e=>S(`medium`,e),[S]),re=(0,B.useCallback)(t=>{t||e()},[e]),ie=s(b??``,()=>{a(b),clearTimeout(o.current),o.current=setTimeout(()=>a(null),Ge)});(0,B.useEffect)(()=>()=>clearTimeout(o.current),[]);let ae=r!==null&&r===b;return(0,V.jsx)(ee,{open:!0,onOpenChange:re,children:(0,V.jsxs)(p,{size:`large`,children:[(0,V.jsxs)(te,{children:[(0,V.jsx)(y,{children:i(`Build URL`,`jetpack-premium-analytics-pkg`)}),(0,V.jsx)(v,{})]}),(0,V.jsx)(d,{children:(0,V.jsxs)(`div`,{className:z.layout,children:[(0,V.jsxs)(`div`,{className:z.form,children:[(0,V.jsx)(g,{render:(0,V.jsx)(`p`,{}),children:i(`Generate URLs to share and track UTM parameters.`,`jetpack-premium-analytics-pkg`)}),(0,V.jsx)(_,{label:i(`Destination URL`,`jetpack-premium-analytics-pkg`),type:`url`,value:t.destination,onValueChange:C,customValidity:u}),(0,V.jsx)(h,{label:i(`UTM campaign`,`jetpack-premium-analytics-pkg`),value:t.campaign,onValueChange:w,placeholder:i(`e.g. promotion`,`jetpack-premium-analytics-pkg`)}),(0,V.jsx)(h,{label:i(`UTM source`,`jetpack-premium-analytics-pkg`),value:t.source,onValueChange:T,placeholder:i(`e.g. newsletter`,`jetpack-premium-analytics-pkg`)}),(0,V.jsx)(h,{label:i(`UTM medium`,`jetpack-premium-analytics-pkg`),value:t.medium,onValueChange:ne,placeholder:i(`e.g. email, social`,`jetpack-premium-analytics-pkg`)}),(0,V.jsxs)(`div`,{className:z.result,children:[(0,V.jsx)(g,{variant:`heading-md`,render:(0,V.jsx)(`h3`,{}),children:i(`Your URL to share`,`jetpack-premium-analytics-pkg`)}),(0,V.jsx)(`div`,{className:z.resultValue,children:b??i(x?`Enter a destination URL to see the URL`:`Fill out campaign parameters to see the URL`,`jetpack-premium-analytics-pkg`)})]})]}),(0,V.jsxs)(`aside`,{className:z.help,children:[(0,V.jsx)(g,{variant:`heading-md`,render:(0,V.jsx)(`h3`,{}),children:i(`Why should I use this?`,`jetpack-premium-analytics-pkg`)}),(0,V.jsx)(g,{render:(0,V.jsx)(`p`,{}),children:i(`UTM codes help track where your traffic comes from. Adding them to your URLs gives you insights into what works and where to optimize.`,`jetpack-premium-analytics-pkg`)}),(0,V.jsxs)(`dl`,{children:[(0,V.jsx)(`dt`,{children:(0,V.jsx)(`code`,{children:`utm_campaign`})}),(0,V.jsxs)(`dd`,{children:[i(`Name your campaign`,`jetpack-premium-analytics-pkg`),(0,V.jsx)(`em`,{children:i(`Example: christmas, flash-sale`,`jetpack-premium-analytics-pkg`)})]}),(0,V.jsx)(`dt`,{children:(0,V.jsx)(`code`,{children:`utm_source`})}),(0,V.jsxs)(`dd`,{children:[i(`Define where traffic originates`,`jetpack-premium-analytics-pkg`),(0,V.jsx)(`em`,{children:i(`Example: newsletter, facebook, google`,`jetpack-premium-analytics-pkg`)})]}),(0,V.jsx)(`dt`,{children:(0,V.jsx)(`code`,{children:`utm_medium`})}),(0,V.jsxs)(`dd`,{children:[i(`Define the channel type`,`jetpack-premium-analytics-pkg`),(0,V.jsx)(`em`,{children:i(`Example: email, social, cpc`,`jetpack-premium-analytics-pkg`)})]})]}),(0,V.jsx)(g,{render:(0,V.jsx)(`p`,{}),children:i(`Use your generated URLs in social posts, emails, or ads. Jetpack Stats will track UTM codes, giving you accurate insights into your traffic.`,`jetpack-premium-analytics-pkg`)})]})]})}),(0,V.jsx)(m,{children:(0,V.jsx)(f,{ref:b?ie:void 0,variant:`solid`,size:`compact`,disabled:!b,children:i(ae?`Copied!`:`Copy to clipboard`,`jetpack-premium-analytics-pkg`)})})]})})}var B,V,Ge,Ke=t((()=>{S(),c(),a(),B=e(n(),1),Ve(),V=o(),Ge=4e3}));function qe({utmDimension:e,showReportLink:t}){let{reportParams:n}=se(),[a,o]=(0,l.useState)(!1),s=(0,l.useCallback)(()=>o(!1),[]),c=we(e),{drillDownItem:u,drillDown:d,resetDrillDown:f}=ae();(0,l.useEffect)(()=>{f()},[f,e]);let{data:p,hasComparison:ee,isLoading:m,isFetching:h,isError:g,error:_,refetch:te}=Re({reportParams:n,utmParam:e,max:10}),v=(0,l.useMemo)(()=>p.find(e=>e.label===u)??null,[p,u]),y=!!v?.children?.length,x=(0,l.useMemo)(()=>y?v?.children??[]:p,[p,y,v]),S=y?!!v?.childrenHaveComparison:ee;(0,l.useEffect)(()=>{u&&!y&&!m&&!h&&!g&&f()},[u,y,m,h,g,f]);let C=(0,l.useMemo)(()=>{let e=re(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map((t,n)=>{let a=t.previousValue,o=`postId`in t?t:null,s=!y&&`children`in t&&!!t.children?.length;return{id:`${n}-${t.label}`,...o?{label:(0,U.jsx)(be,{id:o.postId,label:o.label,link:o.href,origin:{report:`utm`,section:c}})}:he({label:t.label,media:{kind:`none`},action:ge({hasChildren:s,drillDown:{onClick:()=>d(t.label),ariaLabel:r(i(`View posts for %s`,`jetpack-premium-analytics-pkg`),t.label)}})}),currentValue:t.value,currentShare:ce(t.value,e),previousValue:a,previousShare:S&&a!==void 0?ce(a,e):void 0,delta:S&&a!==void 0?ne(t.value,a):void 0}})},[x,y,c,d,S]);return(0,U.jsxs)(U.Fragment,{children:[y?(0,U.jsx)(ve,{label:i(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:f,className:N.backLink}):null,(0,U.jsx)(`div`,{className:N.content,children:(0,U.jsx)(pe,{isLoading:m,isFetching:h,isError:g,isEmpty:p.length===0,empty:{icon:b,description:i(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:()=>o(!0)}},error:oe(_,{retryDescription:i(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:te}),renderLoading:(0,U.jsx)(ue,{rows:10}),children:(0,U.jsx)(le,{data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:Je})})}),t&&(0,U.jsxs)(ye,{children:[(0,U.jsx)(_e,{report:`utm`,section:c}),(0,U.jsx)(Se,{exporter:xe[c],status:{isLoading:m,isFetching:h,isError:g},rowCount:p.length})]}),a&&(0,U.jsx)(We,{onClose:s})]})}function H({attributes:e={}}){let t=e.utmDimension??Ye,n=e.showReportLink??!0;return(0,U.jsx)(ie,{attributes:e,children:(0,U.jsx)(`div`,{className:N.root,children:(0,U.jsx)(qe,{utmDimension:t,showReportLink:n})})})}var U,Je,Ye,Xe=t((()=>{x(),u(),a(),D(),Fe(),ze(),Ke(),U=o(),Je={type:`number`,options:{useMultipliers:!0,decimals:0}},Ye=`utm_source,utm_medium`})),Ze,Qe=t((()=>{a(),D(),Ze={attributes:[{id:`utmDimension`,label:i(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:Ce(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),$e,et,tt,nt,rt,it,at,ot,st=t((()=>{$e=`jpa/utm-insights`,et=`jpa/megaphone`,tt=`Top UTM`,nt=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,rt={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},it=`traffic`,at=`framed`,ot={name:$e,icon:et,title:tt,description:nt,help:rt,category:it,presentation:at}}));function W(e){return(0,G.jsx)(H,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:w(!1,e)}})}function ct({withComparison:e,...t}){return(0,G.jsx)(ke,{...t,widgetType:ut,renderModule:lt,renderComponent:H,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:w(e)}})}var G,lt,ut,dt,K,q,J,Y,X,Z,Q,$,ft;t((()=>{T(),De(),me(),Te(),Ae(),de(),Ne(),Pe(),Xe(),Qe(),st(),G=o(),fe(),Me(),lt=`storybook/utm-insights`,ut=Oe(ot,Ze),dt={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:H,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,G.jsx)(H,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:w(e)}}),args:{withComparison:!1},decorators:[O,E]},q={render:({withComparison:e})=>(0,G.jsx)(H,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:w(e)}}),args:{withComparison:!0},decorators:[O,E]},J={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[O,E],beforeEach:()=>(k(`stats/utm`,`loading`),()=>k(`stats/utm`,null))},Y={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[O,E],beforeEach:()=>(k(`stats/utm`,`error`),()=>k(`stats/utm`,null))},X={render:()=>W(`last-12-months`),tags:[`!autodocs`],decorators:[O,E],beforeEach:()=>(k(`stats/utm`,`error-retryable`),()=>k(`stats/utm`,null))},Z={render:()=>W(`last-year`),tags:[`!autodocs`],decorators:[O,E],beforeEach:()=>(k(`stats/utm`,`empty`),()=>k(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,G.jsx)(H,{attributes:{utmDimension:`utm_campaign`,reportParams:w(e)}}),args:{withComparison:!1},decorators:[O,E]},$={render:e=>(0,G.jsx)(ct,{...e}),args:{...je,withComparison:!1},argTypes:{...Ee,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    withComparison: false
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params and deltas.'
    }
  }
}`,...$.parameters?.docs?.source}}},ft=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,ft as __namedExportsOrder,dt as default};