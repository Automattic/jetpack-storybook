import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Y as s,t as c}from"./build-module-DUOOv4sd.js";import{Gu as l,Nu as u}from"./build-module-Cm3Kd3py.js";import{B as d,Et as f,Jn as p,Mt as ee,Ot as m,Pt as h,St as g,W as _,bt as v,on as y,wt as b}from"./build-module-YF-BmBv-.js";import{f as x}from"./library-DCBMvom7.js";import{t as S}from"./src-C8wGjm3_.js";import{t as C}from"./src-C21ZZq-k.js";import{G as w,cn as T,t as E}from"./src-BqfXY_wk.js";import{Ot as te,Yt as ne,jt as D,m as re,o as ie,ut as ae,v as oe}from"./charts-provider-BvR5nti6.js";import"./rows-DAmD2BmE.js";import{r as se,t as ce}from"./leaderboard-skeleton-CZmrU4qT.js";import{n as le,r as ue}from"./register-report-mocks-BJlDJK33.js";import{t as de}from"./widget-state-BwdY17Yp.js";import{n as fe,r as O}from"./with-story-router-TjVyBU09.js";import{i as pe,o as me}from"./build-leaderboard-chart-data-Bf_D7YYa.js";import{f as he,l as ge,o as _e}from"./leaderboard-BinkOoGd.js";import{V as ve,a as ye,b as be,n as xe,r as Se,t as k}from"./src-D855Vxdn.js";import{a as Ce,g as we,h as Te,i as Ee,m as De,n as Oe,p as ke,r as A}from"./with-widget-canvas-B8slpzlh.js";import{n as Ae,t as je}from"./register-stats-mocks-B_P3-wjl.js";import{n as Me,t as j}from"./force-stats-mock-state-OrucCY2W.js";var M,N,P,F,Ne=t((()=>{M=`_root_xmjm2_1`,N=`_content_xmjm2_9`,P=`_backLink_xmjm2_16`,F={root:M,content:N,backLink:P}}));function I(e){return typeof e.label==`string`?e.label:String(e.label)}function Pe(e){return{postId:e.id,label:I(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Fe(e){return{label:I(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Pe),childrenHaveComparison:e.childrenHaveComparison}}function Ie({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=w({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Fe),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Le=t((()=>{E()})),L,Re,ze,Be,Ve,R,He=t((()=>{L=`_layout_10ym5_1`,Re=`_form_10ym5_7`,ze=`_result_10ym5_14`,Be=`_resultValue_10ym5_18`,Ve=`_help_10ym5_28`,R={layout:L,form:Re,result:ze,resultValue:Be,help:Ve}}));function Ue(e){let t=e.trim();if(!/^https?:\/\//i.test(t))return null;try{return new URL(t)}catch{return null}}function We(e,{campaign:t,source:n,medium:r}){if(!e)return null;let i={utm_campaign:t.trim(),utm_source:n.trim(),utm_medium:r.trim()};if(!Object.values(i).some(Boolean))return null;for(let[t,n]of Object.entries(i))e.searchParams.delete(t),n&&e.searchParams.set(t,n);return e.toString()}function Ge({onClose:e}){let[t,n]=(0,z.useState)({destination:``,campaign:``,source:``,medium:``}),[r,a]=(0,z.useState)(null),o=(0,z.useRef)(),c=Ue(t.destination),l=t.destination.trim()!==``&&!c,u=(0,z.useMemo)(()=>l?{type:`invalid`,message:i(`Enter a full URL that starts with https:// or http://.`,`jetpack-premium-analytics-pkg`)}:void 0,[l]),x=We(c,t),S=[t.campaign,t.source,t.medium].some(e=>e.trim()),C=(0,z.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),w=(0,z.useCallback)(e=>C(`destination`,e),[C]),T=(0,z.useCallback)(e=>C(`campaign`,e),[C]),E=(0,z.useCallback)(e=>C(`source`,e),[C]),te=(0,z.useCallback)(e=>C(`medium`,e),[C]),ne=(0,z.useCallback)(t=>{t||e()},[e]),D=s(x??``,()=>{a(x),clearTimeout(o.current),o.current=setTimeout(()=>a(null),Ke)});(0,z.useEffect)(()=>()=>clearTimeout(o.current),[]);let re=r!==null&&r===x;return(0,B.jsx)(g,{open:!0,onOpenChange:ne,children:(0,B.jsxs)(b,{size:`large`,children:[(0,B.jsxs)(f,{children:[(0,B.jsx)(v,{children:i(`Build URL`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(h,{})]}),(0,B.jsx)(ee,{children:(0,B.jsxs)(`div`,{className:R.layout,children:[(0,B.jsxs)(`div`,{className:R.form,children:[(0,B.jsx)(p,{render:(0,B.jsx)(`p`,{}),children:i(`Generate URLs to share and track UTM parameters.`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(d,{label:i(`Destination URL`,`jetpack-premium-analytics-pkg`),type:`url`,value:t.destination,onValueChange:w,customValidity:u}),(0,B.jsx)(_,{label:i(`UTM campaign`,`jetpack-premium-analytics-pkg`),value:t.campaign,onValueChange:T,placeholder:i(`e.g. promotion`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(_,{label:i(`UTM source`,`jetpack-premium-analytics-pkg`),value:t.source,onValueChange:E,placeholder:i(`e.g. newsletter`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(_,{label:i(`UTM medium`,`jetpack-premium-analytics-pkg`),value:t.medium,onValueChange:te,placeholder:i(`e.g. email, social`,`jetpack-premium-analytics-pkg`)}),(0,B.jsxs)(`div`,{className:R.result,children:[(0,B.jsx)(p,{variant:`heading-md`,render:(0,B.jsx)(`h3`,{}),children:i(`Your URL to share`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(`div`,{className:R.resultValue,children:x??i(S?`Enter a destination URL to see the URL`:`Fill out campaign parameters to see the URL`,`jetpack-premium-analytics-pkg`)})]})]}),(0,B.jsxs)(`aside`,{className:R.help,children:[(0,B.jsx)(p,{variant:`heading-md`,render:(0,B.jsx)(`h3`,{}),children:i(`Why should I use this?`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(p,{render:(0,B.jsx)(`p`,{}),children:i(`UTM codes help track where your traffic comes from. Adding them to your URLs gives you insights into what works and where to optimize.`,`jetpack-premium-analytics-pkg`)}),(0,B.jsxs)(`dl`,{children:[(0,B.jsx)(`dt`,{children:(0,B.jsx)(`code`,{children:`utm_campaign`})}),(0,B.jsxs)(`dd`,{children:[i(`Name your campaign`,`jetpack-premium-analytics-pkg`),(0,B.jsx)(`em`,{children:i(`Example: christmas, flash-sale`,`jetpack-premium-analytics-pkg`)})]}),(0,B.jsx)(`dt`,{children:(0,B.jsx)(`code`,{children:`utm_source`})}),(0,B.jsxs)(`dd`,{children:[i(`Define where traffic originates`,`jetpack-premium-analytics-pkg`),(0,B.jsx)(`em`,{children:i(`Example: newsletter, facebook, google`,`jetpack-premium-analytics-pkg`)})]}),(0,B.jsx)(`dt`,{children:(0,B.jsx)(`code`,{children:`utm_medium`})}),(0,B.jsxs)(`dd`,{children:[i(`Define the channel type`,`jetpack-premium-analytics-pkg`),(0,B.jsx)(`em`,{children:i(`Example: email, social, cpc`,`jetpack-premium-analytics-pkg`)})]})]}),(0,B.jsx)(p,{render:(0,B.jsx)(`p`,{}),children:i(`Use your generated URLs in social posts, emails, or ads. Jetpack Stats will track UTM codes, giving you accurate insights into your traffic.`,`jetpack-premium-analytics-pkg`)})]})]})}),(0,B.jsx)(m,{children:(0,B.jsx)(y,{ref:x?D:void 0,variant:`solid`,size:`compact`,disabled:!x,children:i(re?`Copied!`:`Copy to clipboard`,`jetpack-premium-analytics-pkg`)})})]})})}var z,B,Ke,qe=t((()=>{C(),c(),a(),z=e(n(),1),He(),B=o(),Ke=4e3}));function Je({utmDimension:e,showReportLink:t}){let{reportParams:n}=oe(),[a,o]=(0,l.useState)(!1),s=(0,l.useCallback)(()=>o(!1),[]),c=Se(e),{drillDownItem:u,drillDown:d,resetDrillDown:f}=ie();(0,l.useEffect)(()=>{f()},[f,e]);let{data:p,hasComparison:ee,isLoading:m,isFetching:h,isError:g,error:_,refetch:v}=Ie({reportParams:n,utmParam:e,max:10}),y=(0,l.useMemo)(()=>p.find(e=>e.label===u)??null,[p,u]),b=!!y?.children?.length,S=(0,l.useMemo)(()=>b?y?.children??[]:p,[p,b,y]),C=b?!!y?.childrenHaveComparison:ee;(0,l.useEffect)(()=>{u&&!b&&!m&&!h&&!g&&f()},[u,b,m,h,g,f]);let w=(0,l.useMemo)(()=>{let e=te(S.map(e=>e.value),C?S.map(e=>e.previousValue):[]);return S.map((t,n)=>{let a=t.previousValue,o=`postId`in t?t:null,s=!b&&`children`in t&&!!t.children?.length;return{id:`${n}-${t.label}`,...o?{label:(0,H.jsx)(ve,{id:o.postId,label:o.label,link:o.href,origin:{report:`utm`,section:c}})}:pe({label:t.label,media:{kind:`none`},action:me({hasChildren:s,drillDown:{onClick:()=>d(t.label),ariaLabel:r(i(`View posts for %s`,`jetpack-premium-analytics-pkg`),t.label)}})}),currentValue:t.value,currentShare:D(t.value,e),previousValue:a,previousShare:C&&a!==void 0?D(a,e):void 0,delta:C&&a!==void 0?ne(t.value,a):void 0}})},[S,b,c,d,C]);return(0,H.jsxs)(H.Fragment,{children:[b?(0,H.jsx)(ge,{label:i(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:f,className:F.backLink}):null,(0,H.jsx)(`div`,{className:F.content,children:(0,H.jsx)(de,{isLoading:m,isFetching:h,isError:g,isEmpty:p.length===0,empty:{icon:x,description:i(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:()=>o(!0)}},error:ae(_,{retryDescription:i(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:v}),renderLoading:(0,H.jsx)(ce,{rows:10}),children:(0,H.jsx)(se,{data:w,withComparison:C,withOverlayLabel:!0,showLegend:!1,dataFormat:Ye})})}),t&&(0,H.jsxs)(_e,{children:[(0,H.jsx)(he,{report:`utm`,section:c}),(0,H.jsx)(be,{exporter:ye[c],status:{isLoading:m,isFetching:h,isError:g},rowCount:p.length})]}),a&&(0,H.jsx)(Ge,{onClose:s})]})}function V({attributes:e={}}){let t=e.utmDimension??Xe,n=e.showReportLink??!0;return(0,H.jsx)(re,{attributes:e,children:(0,H.jsx)(`div`,{className:F.root,children:(0,H.jsx)(Je,{utmDimension:t,showReportLink:n})})})}var H,Ye,Xe,Ze=t((()=>{S(),u(),a(),k(),Ne(),Le(),qe(),H=o(),Ye={type:`number`,options:{useMultipliers:!0,decimals:0}},Xe=`utm_source,utm_medium`})),Qe,$e=t((()=>{a(),k(),Qe={attributes:[{id:`utmDimension`,label:i(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:xe(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),et,tt,nt,rt,it,at,ot,st,ct=t((()=>{et=`jpa/utm-insights`,tt=`jpa/megaphone`,nt=`Top UTM`,rt=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,it={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},at=`traffic`,ot=`framed`,st={name:et,icon:tt,title:nt,description:rt,help:it,category:at,presentation:ot}}));function U(e){return(0,W.jsx)(V,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:T(!1,e)}})}function lt({withComparison:e,...t}){return(0,W.jsx)(De,{...t,widgetType:dt,renderModule:ut,renderComponent:V,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:T(e)}})}var W,ut,dt,ft,G,K,q,J,Y,X,Z,Q,$;t((()=>{E(),Te(),fe(),Ce(),Oe(),le(),je(),Me(),Ze(),$e(),ct(),W=o(),ue(),Ae(),ut=`storybook/utm-insights`,dt=Ee(st,Qe),ft={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:V,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,W.jsx)(V,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:T(e)}}),args:{withComparison:!1},decorators:[A,O]},K={render:({withComparison:e})=>(0,W.jsx)(V,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:T(e)}}),args:{withComparison:!0},decorators:[A,O]},q={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[A,O],beforeEach:()=>(j(`stats/utm`,`loading`),()=>j(`stats/utm`,null))},J={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[A,O],beforeEach:()=>(j(`stats/utm`,`error`),()=>j(`stats/utm`,null))},Y={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[A,O],beforeEach:()=>(j(`stats/utm`,`error-retryable`),()=>j(`stats/utm`,null))},X={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[A,O],beforeEach:()=>(j(`stats/utm`,`empty`),()=>j(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,W.jsx)(V,{attributes:{utmDimension:`utm_campaign`,reportParams:T(e)}}),args:{withComparison:!1},decorators:[A,O]},Q={render:e=>(0,W.jsx)(lt,{...e}),args:{...ke,withComparison:!1},argTypes:{...we,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
    withComparison: false
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params and deltas.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,ft as default};