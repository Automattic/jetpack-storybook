import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{Y as s,t as c}from"./build-module-D50o9sls.js";import{Gu as l,Nu as u}from"./build-module-CDZL_1rk.js";import{$t as d,Cn as f,Ut as p,Vt as ee,Yt as m,Z as h,pr as g,q as _,qt as te,tn as v,zt as y}from"./build-module-kaUg7Nct.js";import{f as b}from"./library-BaZ90bK7.js";import{t as x}from"./src-DZQPY6UA.js";import{t as S}from"./src-D_mi6p4G.js";import{J as C,dn as w,t as T}from"./src-BNPDUHdJ.js";import{Nt as ne,ft as re,ht as E,m as ie,o as ae,ut as oe,v as se}from"./charts-provider-QX_cDkPR.js";import"./rows-DAmD2BmE.js";import{r as ce,t as le}from"./leaderboard-skeleton-zdHECiDZ.js";import{n as ue,r as de}from"./register-report-mocks-tkkzGlZI.js";import{t as fe}from"./widget-state-MuQaaV71.js";import{n as pe,r as D}from"./with-story-router-B8AmDh4M.js";import{i as me,o as he}from"./build-leaderboard-chart-data-CX1qZXgJ.js";import{f as ge,l as _e,o as ve}from"./leaderboard-CixVvPZC.js";import{V as ye,a as be,b as xe,n as Se,r as Ce,t as O}from"./src-DsL5qN0o.js";import{a as we,g as Te,h as Ee,i as De,m as Oe,n as ke,p as Ae,r as k}from"./with-widget-canvas-CrEvoCWk.js";import{n as je,t as Me}from"./register-stats-mocks-DnIL7yWb.js";import{n as Ne,t as A}from"./force-stats-mock-state-DUN9QKoK.js";var j,M,N,P,Pe=t((()=>{j=`_root_xmjm2_1`,M=`_content_xmjm2_9`,N=`_backLink_xmjm2_16`,P={root:j,content:M,backLink:N}}));function F(e){return typeof e.label==`string`?e.label:String(e.label)}function Fe(e){return{postId:e.id,label:F(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ie(e){return{label:F(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Fe),childrenHaveComparison:e.childrenHaveComparison}}function Le({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=C({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ie),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Re=t((()=>{T()})),I,L,ze,Be,Ve,R,He=t((()=>{I=`_layout_10ym5_1`,L=`_form_10ym5_7`,ze=`_result_10ym5_14`,Be=`_resultValue_10ym5_18`,Ve=`_help_10ym5_28`,R={layout:I,form:L,result:ze,resultValue:Be,help:Ve}}));function Ue(e){let t=e.trim();if(!/^https?:\/\//i.test(t))return null;try{return new URL(t)}catch{return null}}function We(e,{campaign:t,source:n,medium:r}){if(!e)return null;let i={utm_campaign:t.trim(),utm_source:n.trim(),utm_medium:r.trim()};if(!Object.values(i).some(Boolean))return null;for(let[t,n]of Object.entries(i))e.searchParams.delete(t),n&&e.searchParams.set(t,n);return e.toString()}function Ge({onClose:e}){let[t,n]=(0,z.useState)({destination:``,campaign:``,source:``,medium:``}),[r,a]=(0,z.useState)(null),o=(0,z.useRef)(),c=Ue(t.destination),l=t.destination.trim()!==``&&!c,u=(0,z.useMemo)(()=>l?{type:`invalid`,message:i(`Enter a full URL that starts with https:// or http://.`,`jetpack-premium-analytics-pkg`)}:void 0,[l]),b=We(c,t),x=[t.campaign,t.source,t.medium].some(e=>e.trim()),S=(0,z.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),C=(0,z.useCallback)(e=>S(`destination`,e),[S]),w=(0,z.useCallback)(e=>S(`campaign`,e),[S]),T=(0,z.useCallback)(e=>S(`source`,e),[S]),ne=(0,z.useCallback)(e=>S(`medium`,e),[S]),re=(0,z.useCallback)(t=>{t||e()},[e]),E=s(b??``,()=>{a(b),clearTimeout(o.current),o.current=setTimeout(()=>a(null),Ke)});(0,z.useEffect)(()=>()=>clearTimeout(o.current),[]);let ie=r!==null&&r===b;return(0,B.jsx)(ee,{open:!0,onOpenChange:re,children:(0,B.jsxs)(p,{size:`large`,children:[(0,B.jsxs)(te,{children:[(0,B.jsx)(y,{children:i(`Build URL`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(v,{})]}),(0,B.jsx)(d,{children:(0,B.jsxs)(`div`,{className:R.layout,children:[(0,B.jsxs)(`div`,{className:R.form,children:[(0,B.jsx)(g,{render:(0,B.jsx)(`p`,{}),children:i(`Generate URLs to share and track UTM parameters.`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(_,{label:i(`Destination URL`,`jetpack-premium-analytics-pkg`),type:`url`,value:t.destination,onValueChange:C,customValidity:u}),(0,B.jsx)(h,{label:i(`UTM campaign`,`jetpack-premium-analytics-pkg`),value:t.campaign,onValueChange:w,placeholder:i(`e.g. promotion`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(h,{label:i(`UTM source`,`jetpack-premium-analytics-pkg`),value:t.source,onValueChange:T,placeholder:i(`e.g. newsletter`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(h,{label:i(`UTM medium`,`jetpack-premium-analytics-pkg`),value:t.medium,onValueChange:ne,placeholder:i(`e.g. email, social`,`jetpack-premium-analytics-pkg`)}),(0,B.jsxs)(`div`,{className:R.result,children:[(0,B.jsx)(g,{variant:`heading-md`,render:(0,B.jsx)(`h3`,{}),children:i(`Your URL to share`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(`div`,{className:R.resultValue,children:b??i(x?`Enter a destination URL to see the URL`:`Fill out campaign parameters to see the URL`,`jetpack-premium-analytics-pkg`)})]})]}),(0,B.jsxs)(`aside`,{className:R.help,children:[(0,B.jsx)(g,{variant:`heading-md`,render:(0,B.jsx)(`h3`,{}),children:i(`Why should I use this?`,`jetpack-premium-analytics-pkg`)}),(0,B.jsx)(g,{render:(0,B.jsx)(`p`,{}),children:i(`UTM codes help track where your traffic comes from. Adding them to your URLs gives you insights into what works and where to optimize.`,`jetpack-premium-analytics-pkg`)}),(0,B.jsxs)(`dl`,{children:[(0,B.jsx)(`dt`,{children:(0,B.jsx)(`code`,{children:`utm_campaign`})}),(0,B.jsxs)(`dd`,{children:[i(`Name your campaign`,`jetpack-premium-analytics-pkg`),(0,B.jsx)(`em`,{children:i(`Example: christmas, flash-sale`,`jetpack-premium-analytics-pkg`)})]}),(0,B.jsx)(`dt`,{children:(0,B.jsx)(`code`,{children:`utm_source`})}),(0,B.jsxs)(`dd`,{children:[i(`Define where traffic originates`,`jetpack-premium-analytics-pkg`),(0,B.jsx)(`em`,{children:i(`Example: newsletter, facebook, google`,`jetpack-premium-analytics-pkg`)})]}),(0,B.jsx)(`dt`,{children:(0,B.jsx)(`code`,{children:`utm_medium`})}),(0,B.jsxs)(`dd`,{children:[i(`Define the channel type`,`jetpack-premium-analytics-pkg`),(0,B.jsx)(`em`,{children:i(`Example: email, social, cpc`,`jetpack-premium-analytics-pkg`)})]})]}),(0,B.jsx)(g,{render:(0,B.jsx)(`p`,{}),children:i(`Use your generated URLs in social posts, emails, or ads. Jetpack Stats will track UTM codes, giving you accurate insights into your traffic.`,`jetpack-premium-analytics-pkg`)})]})]})}),(0,B.jsx)(m,{children:(0,B.jsx)(f,{ref:b?E:void 0,variant:`solid`,size:`compact`,disabled:!b,children:i(ie?`Copied!`:`Copy to clipboard`,`jetpack-premium-analytics-pkg`)})})]})})}var z,B,Ke,qe=t((()=>{S(),c(),a(),z=e(n(),1),He(),B=o(),Ke=4e3}));function Je({utmDimension:e,showReportLink:t}){let{reportParams:n}=se(),[a,o]=(0,l.useState)(!1),s=(0,l.useCallback)(()=>o(!1),[]),c=Ce(e),{drillDownItem:u,drillDown:d,resetDrillDown:f}=ae();(0,l.useEffect)(()=>{f()},[f,e]);let{data:p,hasComparison:ee,isLoading:m,isFetching:h,isError:g,error:_,refetch:te}=Le({reportParams:n,utmParam:e,max:10}),v=(0,l.useMemo)(()=>p.find(e=>e.label===u)??null,[p,u]),y=!!v?.children?.length,x=(0,l.useMemo)(()=>y?v?.children??[]:p,[p,y,v]),S=y?!!v?.childrenHaveComparison:ee;(0,l.useEffect)(()=>{u&&!y&&!m&&!h&&!g&&f()},[u,y,m,h,g,f]);let C=(0,l.useMemo)(()=>{let e=re(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map((t,n)=>{let a=t.previousValue,o=`postId`in t?t:null,s=!y&&`children`in t&&!!t.children?.length;return{id:`${n}-${t.label}`,...o?{label:(0,H.jsx)(ye,{id:o.postId,label:o.label,link:o.href,origin:{report:`utm`,section:c}})}:me({label:t.label,media:{kind:`none`},action:he({hasChildren:s,drillDown:{onClick:()=>d(t.label),ariaLabel:r(i(`View posts for %s`,`jetpack-premium-analytics-pkg`),t.label)}})}),currentValue:t.value,currentShare:E(t.value,e),previousValue:a,previousShare:S&&a!==void 0?E(a,e):void 0,delta:S&&a!==void 0?ne(t.value,a):void 0}})},[x,y,c,d,S]);return(0,H.jsxs)(H.Fragment,{children:[y?(0,H.jsx)(_e,{label:i(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:i(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:f,className:P.backLink}):null,(0,H.jsx)(`div`,{className:P.content,children:(0,H.jsx)(fe,{isLoading:m,isFetching:h,isError:g,isEmpty:p.length===0,empty:{icon:b,description:i(`You don’t have UTM visits for this period. Build a URL to start tracking a campaign.`,`jetpack-premium-analytics-pkg`),action:{label:i(`Build URL`,`jetpack-premium-analytics-pkg`),onClick:()=>o(!0)}},error:oe(_,{retryDescription:i(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:te}),renderLoading:(0,H.jsx)(le,{rows:10}),children:(0,H.jsx)(ce,{data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:Ye})})}),t&&(0,H.jsxs)(ve,{children:[(0,H.jsx)(ge,{report:`utm`,section:c}),(0,H.jsx)(xe,{exporter:be[c],status:{isLoading:m,isFetching:h,isError:g},rowCount:p.length})]}),a&&(0,H.jsx)(Ge,{onClose:s})]})}function V({attributes:e={}}){let t=e.utmDimension??Xe,n=e.showReportLink??!0;return(0,H.jsx)(ie,{attributes:e,children:(0,H.jsx)(`div`,{className:P.root,children:(0,H.jsx)(Je,{utmDimension:t,showReportLink:n})})})}var H,Ye,Xe,Ze=t((()=>{x(),u(),a(),O(),Pe(),Re(),qe(),H=o(),Ye={type:`number`,options:{useMultipliers:!0,decimals:0}},Xe=`utm_source,utm_medium`})),Qe,$e=t((()=>{a(),O(),Qe={attributes:[{id:`utmDimension`,label:i(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:Se(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),et,tt,nt,rt,it,at,ot,st,ct=t((()=>{et=`jpa/utm-insights`,tt=`jpa/megaphone`,nt=`Top UTM`,rt=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,it={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},at=`traffic`,ot=`framed`,st={name:et,icon:tt,title:nt,description:rt,help:it,category:at,presentation:ot}}));function U(e){return(0,W.jsx)(V,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:w(!1,e)}})}function lt({withComparison:e,...t}){return(0,W.jsx)(Oe,{...t,widgetType:dt,renderModule:ut,renderComponent:V,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:w(e)}})}var W,ut,dt,ft,G,K,q,J,Y,X,Z,Q,$;t((()=>{T(),Ee(),pe(),we(),ke(),ue(),Me(),Ne(),Ze(),$e(),ct(),W=o(),de(),je(),ut=`storybook/utm-insights`,dt=De(st,Qe),ft={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:V,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,W.jsx)(V,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:w(e)}}),args:{withComparison:!1},decorators:[k,D]},K={render:({withComparison:e})=>(0,W.jsx)(V,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:w(e)}}),args:{withComparison:!0},decorators:[k,D]},q={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[k,D],beforeEach:()=>(A(`stats/utm`,`loading`),()=>A(`stats/utm`,null))},J={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[k,D],beforeEach:()=>(A(`stats/utm`,`error`),()=>A(`stats/utm`,null))},Y={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[k,D],beforeEach:()=>(A(`stats/utm`,`error-retryable`),()=>A(`stats/utm`,null))},X={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[k,D],beforeEach:()=>(A(`stats/utm`,`empty`),()=>A(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,W.jsx)(V,{attributes:{utmDimension:`utm_campaign`,reportParams:w(e)}}),args:{withComparison:!1},decorators:[k,D]},Q={render:e=>(0,W.jsx)(lt,{...e}),args:{...Ae,withComparison:!1},argTypes:{...Te,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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