import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Y as s,t as c}from"./build-module-D50o9sls.js";import{Gu as l,Nu as u}from"./build-module-CDZL_1rk.js";import{$t as d,Cn as f,Ut as p,Vt as m,Yt as h,Z as g,pr as _,q as v,qt as ee,tn as y,zt as b}from"./build-module-TfO_FJU3.js";import{f as x}from"./library-BaZ90bK7.js";import{t as S}from"./src-DZQPY6UA.js";import{t as C}from"./src-C-3MWLvN.js";import{J as w,dn as T,t as E}from"./src-hJfttuzM.js";import{gt as D,m as te,o as ne,v as re,vt as ie,xt as ae,zt as oe}from"./charts-provider-DtMzsgV2.js";import"./rows-DAmD2BmE.js";import{r as se,t as ce}from"./leaderboard-skeleton-ChcA58x6.js";import{n as le,r as ue}from"./register-report-mocks-CDiWgFqy.js";import{t as de}from"./widget-state-i3-RAkgN.js";import{n as fe,r as O}from"./with-story-router-B8AmDh4M.js";import{i as pe,o as me}from"./build-leaderboard-chart-data-Ye9V1J-U.js";import{f as he,l as ge,o as _e}from"./leaderboard-DfSrb_Iw.js";import{C as ve,W as ye,i as be,n as xe,o as Se,r as Ce,t as k}from"./src-CkUrciEb.js";import{a as we,g as Te,h as Ee,i as De,m as Oe,n as ke,p as Ae,r as A}from"./with-widget-canvas-ixC2fu1y.js";import{n as je,t as Me}from"./register-stats-mocks-DbeEJSlI.js";import{n as Ne,t as j}from"./force-stats-mock-state-Cdq-Wrem.js";var M,N,P,F,Pe=t((()=>{M=`_root_xmjm2_1`,N=`_content_xmjm2_9`,P=`_backLink_xmjm2_16`,F={root:M,content:N,backLink:P}}));function I(e){return typeof e.label==`string`?e.label:String(e.label)}function Fe(e){return{postId:e.id,label:I(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ie(e){return{label:I(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Fe),childrenHaveComparison:e.childrenHaveComparison}}function Le({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=w({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ie),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Re=t((()=>{E()})),L,ze,Be,Ve,He,R,Ue=t((()=>{L=`_layout_10ym5_1`,ze=`_form_10ym5_7`,Be=`_result_10ym5_14`,Ve=`_resultValue_10ym5_18`,He=`_help_10ym5_28`,R={layout:L,form:ze,result:Be,resultValue:Ve,help:He}}));function We(e){let t=e.trim();if(!/^https?:\/\//i.test(t))return null;try{return new URL(t)}catch{return null}}function Ge(e,{campaign:t,source:n,medium:r}){if(!e)return null;let i={utm_campaign:t.trim(),utm_source:n.trim(),utm_medium:r.trim()};if(!Object.values(i).some(Boolean))return null;for(let[t,n]of Object.entries(i))e.searchParams.delete(t),n&&e.searchParams.set(t,n);return e.toString()}function Ke({onClose:e}){let[t,n]=(0,z.useState)({destination:``,campaign:``,source:``,medium:``}),[r,a]=(0,z.useState)(null),o=(0,z.useRef)(),c=We(t.destination),l=t.destination.trim()!==``&&!c,u=(0,z.useMemo)(()=>l?{type:`invalid`,message:i(`Enter a full URL that starts with https:// or http://.`,`jetpack-premium-analytics-pkg`)}:void 0,[l]),x=Ge(c,t),S=[t.campaign,t.source,t.medium].some(e=>e.trim()),C=(0,z.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),w=(0,z.useCallback)(e=>C(`destination`,e),[C]),T=(0,z.useCallback)(e=>C(`campaign`,e),[C]),E=(0,z.useCallback)(e=>C(`source`,e),[C]),D=(0,z.useCallback)(e=>C(`medium`,e),[C]),te=(0,z.useCallback)(t=>{t||e()},[e]),ne=s(x??``,()=>{a(x),clearTimeout(o.current),o.current=setTimeout(()=>a(null),qe)});(0,z.useEffect)(()=>()=>clearTimeout(o.current),[]);let re=r!==null&&r===x;return(0,B.jsx)(m,{open:!0,onOpenChange:te,children:(0,B.jsxs)(p,{size:`large`,children:[(0,B.jsxs)(ee,{children:[(0,B.jsx)(b,{children:i(`Build URL`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(y,{})]}),(0,B.jsx)(d,{children:(0,B.jsxs)(`div`,{className:R.layout,children:[(0,B.jsxs)(`div`,{className:R.form,children:[(0,B.jsx)(_,{render:(0,B.jsx)(`p`,{}),children:i(`Generate URLs to share and track UTM parameters.`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(v,{label:i(`Destination URL`,`jetpack-premium-analytics-pkg`),type:`url`,value:t.destination,onValueChange:w,customValidity:u}),(0,B.jsx)(g,{label:i(`UTM campaign`,`jetpack-premium-analytics-pkg`),value:t.campaign,onValueChange:T,placeholder:i(`e.g. promotion`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(g,{label:i(`UTM source`,`jetpack-premium-analytics-pkg`),value:t.source,onValueChange:E,placeholder:i(`e.g. newsletter`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(g,{label:i(`UTM medium`,`jetpack-premium-analytics-pkg`),value:t.medium,onValueChange:D,placeholder:i(`e.g. email, social`,`jetpack-premium-analytics-pkg`)}),(0,B.jsxs)(`div`,{className:R.result,children:[(0,B.jsx)(_,{variant:`heading-md`,render:(0,B.jsx)(`h3`,{}),children:i(`Your URL to share`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(`div`,{className:R.resultValue,children:x??i(S?`Enter a destination URL to see the URL`:`Fill out campaign parameters to see the URL`,`jetpack-premium-analytics-pkg`)})]})]}),(0,B.jsxs)(`aside`,{className:R.help,children:[(0,B.jsx)(_,{variant:`heading-md`,render:(0,B.jsx)(`h3`,{}),children:i(`Why should I use this?`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(_,{render:(0,B.jsx)(`p`,{}),children:i(`UTM codes help track where your traffic comes from. Adding them to your URLs gives you insights into what works and where to optimize.`,`jetpack-premium-analytics-pkg`)}),(0,B.jsxs)(`dl`,{children:[(0,B.jsx)(`dt`,{children:(0,B.jsx)(`code`,{children:`utm_campaign`})}),(0,B.jsxs)(`dd`,{children:[i(`Name your campaign`,`jetpack-premium-analytics-pkg`),(0,B.jsx)(`em`,{children:i(`Example: christmas, flash-sale`,`jetpack-premium-analytics-pkg`)})]}),(0,B.jsx)(`dt`,{children:(0,B.jsx)(`code`,{children:`utm_source`})}),(0,B.jsxs)(`dd`,{children:[i(`Define where traffic originates`,`jetpack-premium-analytics-pkg`),(0,B.jsx)(`em`,{children:i(`Example: newsletter, facebook, google`,`jetpack-premium-analytics-pkg`)})]}),(0,B.jsx)(`dt`,{children:(0,B.jsx)(`code`,{children:`utm_medium`})}),(0,B.jsxs)(`dd`,{children:[i(`Define the channel type`,`jetpack-premium-analytics-pkg`),(0,B.jsx)(`em`,{children:i(`Example: email, social, cpc`,`jetpack-premium-analytics-pkg`)})]})]}),(0,B.jsx)(_,{render:(0,B.jsx)(`p`,{}),children:i(`Use your generated URLs in social posts, emails, or ads. Jetpack Stats will track UTM codes, giving you accurate insights into your traffic.`,`jetpack-premium-analytics-pkg`)})]})]})}),(0,B.jsx)(h,{children:(0,B.jsx)(f,{ref:x?ne:void 0,variant:`solid`,size:`compact`,disabled:!x,children:i(re?`Copied!`:`Copy to clipboard`,`jetpack-premium-analytics-pkg`)})})]})})}var z,B,qe,Je=t((()=>{C(),c(),a(),z=e(n(),1),Ue(),B=o(),qe=4e3}));function Ye({utmDimension:e,showReportLink:t}){let{reportParams:n}=re(),[a,o]=(0,l.useState)(!1),s=(0,l.useCallback)(()=>o(!1),[]),c=be(e),{drillDownItem:u,drillDown:d,resetDrillDown:f}=ne();(0,l.useEffect)(()=>{f()},[f,e]);let{data:p,hasComparison:m,isLoading:h,isFetching:g,isError:_,error:v,refetch:ee}=Le({reportParams:n,utmParam:e,max:10}),y=(0,l.useMemo)(()=>p.find(e=>e.label===u)??null,[p,u]),b=!!y?.children?.length,S=(0,l.useMemo)(()=>b?y?.children??[]:p,[p,b,y]),C=b?!!y?.childrenHaveComparison:m;(0,l.useEffect)(()=>{u&&!b&&!h&&!g&&!_&&f()},[u,b,h,g,_,f]);let w=(0,l.useMemo)(()=>{let e=ie(S.map(e=>e.value),C?S.map(e=>e.previousValue):[]);return S.map((t,n)=>{let a=t.previousValue,o=`postId`in t?t:null,s=!b&&`children`in t&&!!t.children?.length;return{id:`${n}-${t.label}`,...o?{label:(0,H.jsx)(ye,{id:o.postId,label:o.label,link:o.href,origin:{report:`utm`,section:c}})}:pe({label:t.label,media:{kind:`none`},action:me({hasChildren:s,drillDown:{onClick:()=>d(t.label),ariaLabel:r(i(`View posts for %s`,`jetpack-premium-analytics-pkg`),t.label)}})}),currentValue:t.value,currentShare:ae(t.value,e),previousValue:a,previousShare:C&&a!==void 0?ae(a,e):void 0,delta:C&&a!==void 0?oe(t.value,a):void 0}})},[S,b,c,d,C]);return(0,H.jsxs)(H.Fragment,{children:[b?(0,H.jsx)(ge,{label:i(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:f,className:F.backLink}):null,(0,H.jsx)(`div`,{className:F.content,children:(0,H.jsx)(de,{isLoading:h,isFetching:g,isError:_,isEmpty:p.length===0,empty:{icon:x,description:i(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:()=>o(!0)}},error:D(v,{retryDescription:i(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:ee}),renderLoading:(0,H.jsx)(ce,{rows:10}),children:(0,H.jsx)(se,{chartTitle:i(`Top UTM`,`jetpack-premium-analytics-pkg`),data:w,withComparison:C,withOverlayLabel:!0,showLegend:!1,dataFormat:Xe,columns:{label:b?i(`Posts`,`jetpack-premium-analytics-pkg`):xe(c),metric:`views`}})})}),t&&(0,H.jsxs)(_e,{children:[(0,H.jsx)(he,{report:`utm`,section:c}),(0,H.jsx)(ve,{exporter:Se[c],status:{isLoading:h,isFetching:g,isError:_},rowCount:p.length})]}),a&&(0,H.jsx)(Ke,{onClose:s})]})}function V({attributes:e={}}){let t=e.utmDimension??Ze,n=e.showReportLink??!0;return(0,H.jsx)(te,{attributes:e,children:(0,H.jsx)(`div`,{className:F.root,children:(0,H.jsx)(Ye,{utmDimension:t,showReportLink:n})})})}var H,Xe,Ze,Qe=t((()=>{S(),u(),a(),k(),Pe(),Re(),Je(),H=o(),Xe={type:`number`,options:{useMultipliers:!0,decimals:0}},Ze=`utm_source,utm_medium`})),$e,et=t((()=>{a(),k(),$e={attributes:[{id:`utmDimension`,label:i(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:Ce(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),tt,nt,rt,it,at,ot,st,ct,lt=t((()=>{tt=`jpa/utm-insights`,nt=`jpa/megaphone`,rt=`Top UTM`,it=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,at={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},ot=`traffic`,st=`framed`,ct={name:tt,icon:nt,title:rt,description:it,help:at,category:ot,presentation:st}}));function U(e){return(0,W.jsx)(V,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:T(!1,e)}})}function ut({withComparison:e,...t}){return(0,W.jsx)(Oe,{...t,widgetType:ft,renderModule:dt,renderComponent:V,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:T(e)}})}var W,dt,ft,G,K,q,J,Y,X,Z,Q,$,pt;t((()=>{E(),Ee(),fe(),we(),ke(),le(),Me(),Ne(),Qe(),et(),lt(),W=o(),ue(),je(),dt=`storybook/utm-insights`,ft=De(ct,$e),G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:V,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,W.jsx)(V,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:T(e)}}),args:{withComparison:!1},decorators:[A,O]},q={render:({withComparison:e})=>(0,W.jsx)(V,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:T(e)}}),args:{withComparison:!0},decorators:[A,O]},J={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[A,O],beforeEach:()=>(j(`stats/utm`,`loading`),()=>j(`stats/utm`,null))},Y={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[A,O],beforeEach:()=>(j(`stats/utm`,`error`),()=>j(`stats/utm`,null))},X={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[A,O],beforeEach:()=>(j(`stats/utm`,`error-retryable`),()=>j(`stats/utm`,null))},Z={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[A,O],beforeEach:()=>(j(`stats/utm`,`empty`),()=>j(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,W.jsx)(V,{attributes:{utmDimension:`utm_campaign`,reportParams:T(e)}}),args:{withComparison:!1},decorators:[A,O]},$={render:e=>(0,W.jsx)(ut,{...e}),args:{...Ae,withComparison:!1},argTypes:{...Te,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},pt=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,pt as __namedExportsOrder,G as default};