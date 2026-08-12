import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{js as c,n as l}from"./build-module-CDRs4YxF.js";import{K as u,M as d,X as f,et as p,it as m,q as h}from"./report-metric-Ca_kXAW3.js";import{t as g}from"./geo-chart-ChY-rxrv.js";import{n as _,t as v}from"./with-chart-theme-CCn8USpE.js";import{Ft as y,M as b,Nr as ee,Pt as x,Tt as S,Z as te,hr as C,yr as ne}from"./chart-tooltip-BQsM5vre.js";import{t as re}from"./leaderboard-chart-ZvS0pTLH.js";import{r as ie}from"./src-DvFw5nMf.js";import{t as ae}from"./widget-state-CXHVbl5s.js";import{C as oe,D as se,E as ce,S as le,T as ue,b as de,t as fe,w as pe,x as w}from"./src-C9i3aD_R.js";import{n as me,t as he}from"./src-CTnjs8Hu.js";var T,E,D,O,k,A,ge=e((()=>{T=`_root_g10fy_1`,E=`_content_g10fy_10`,D=`_locationContent_g10fy_20`,O=`_leaderboard_g10fy_29`,k=`_map_g10fy_36`,A={root:T,content:E,locationContent:D,leaderboard:O,map:k}}));function j(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function _e({postId:e,view:t,metric:n,max:r}){let a=t===`links`,o=a?`country`:M[t],s=y(e,o,{enabled:!a&&n===`opens`}),c=x(e,o,{enabled:!a&&n===`clicks`}),l=x(e,`link`,{enabled:a}),u=x(e,`user-content-link`,{enabled:a}),d=n===`clicks`?c:s,f=a?[l,u]:[d],p=l.data,m=u.data,h=d.data,g=(0,i.useMemo)(()=>(a?[...j(p).filter(e=>!e.link),...j(m).filter(e=>!!e.link)].sort(ne):j(h)).map((e,t)=>({...e,id:t})),[a,p,m,h]);return{allRows:g,rows:(0,i.useMemo)(()=>g.slice(0,r>0?r:void 0),[g,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var M,ve=e((()=>{S(),a(),M={countries:`country`,devices:`device`,clients:`client`}}));function ye(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function be(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?b(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?ie(e.link):null;return{id:String(e.id),...d({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:te(e.value,n),previousValue:0,previousShare:0,delta:0}})}function xe(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Se({view:e,metric:t,max:n,showMap:r}){let{reportParams:i}=m(),a=ee(i.post_id),{allRows:o,rows:s,isLoading:c,isFetching:l,isError:u,refetch:d}=_e({postId:a,view:e,metric:t,max:n});return(0,P.jsx)(L,{rows:s,mapRows:o,view:e,showMap:r,metric:t,isLoading:c,isFetching:l,isError:u,hasEmail:a>0,onRetry:d})}function N({attributes:e={}}){return(0,P.jsx)(p,{attributes:e,children:(0,P.jsx)(Se,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10,showMap:e.showMap??!1})})}var P,F,I,L,Ce=e((()=>{S(),fe(),o(),a(),n(),l(),ge(),ve(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I=720,L=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:a=!1,metric:o=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:p})=>{let m=(0,i.useMemo)(()=>be(e,r),[e,r]),h=(0,i.useMemo)(()=>ye(n,o),[n,o]),[_,v]=(0,i.useState)(),y=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);v(t=>t===e?t:e)}}),b=a&&r===`countries`&&h.length>1&&(_??0)>=I;return(0,P.jsx)(`div`,{ref:y,className:A.root,children:(0,P.jsx)(ae,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{icon:c,description:f?xe(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsxs)(`div`,{className:b?A.locationContent:A.content,children:[(0,P.jsx)(re,{className:A.leaderboard,data:m,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:F}),b&&(0,P.jsx)(`div`,{className:A.map,"data-testid":`email-breakdown-map`,children:(0,P.jsx)(g,{data:h})})]})})})}})),R,we=e((()=>{n(),l(),he(),R={icon:c,attributes:[{id:`view`,label:t(`Break down by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:me,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`countries`},{label:t(`Devices`,`jetpack-premium-analytics-pkg`),value:`devices`},{label:t(`Email clients`,`jetpack-premium-analytics-pkg`),value:`clients`},{label:t(`Links`,`jetpack-premium-analytics-pkg`),value:`links`}]},{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:me,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}})),z,B,Te,Ee,De,Oe,ke,Ae=e((()=>{z=`jpa/email-breakdown`,B=`Email breakdown`,Te=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,Ee={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},De=`stats`,Oe=`framed`,ke={name:z,title:B,description:Te,help:Ee,category:De,presentation:Oe}}));function je(e){return R.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function Me({view:e,metric:t,showMap:n}){return(0,H.jsx)(N,{attributes:{reportParams:{...C(),post_id:U},view:e,metric:t,showMap:n}})}function V(e){return(0,H.jsx)(N,{attributes:{reportParams:{...C(!1),post_id:e},view:`countries`,metric:`opens`}})}function Ne({view:e,metric:t,showMap:n,...r}){return(0,H.jsx)(ue,{...r,widgetType:le(ke,R),renderModule:Pe,renderComponent:N,attributes:{reportParams:{...C(!0),post_id:U},view:e,metric:t,showMap:n}})}var H,Pe,U,W,G,K,q,J,Y,X,Z,Q,$,Fe;e((()=>{S(),u(),v(),ce(),oe(),de(),Ce(),we(),Ae(),H=r(),h(),Pe=`storybook/email-breakdown`,U=1234,W=je(`view`),G=je(`metric`),K={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:N,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas."}}},decorators:[_]},q={render:Me,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[w]},J={render:Me,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[w]},Y={render:()=>V(5601),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(f(`stats/opens/emails`,`loading`),()=>f(`stats/opens/emails`,null))},X={render:()=>V(5602),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(f(`stats/opens/emails`,`error`),()=>f(`stats/opens/emails`,null))},Z={render:()=>V(5603),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(f(`stats/opens/emails`,`empty`),()=>f(`stats/opens/emails`,null))},Q={render:()=>(0,H.jsx)(N,{attributes:{reportParams:C(!1),view:`countries`}}),decorators:[w]},$={render:e=>(0,H.jsx)(Ne,{...e}),args:{...pe,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...se,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'opens',
    showMap: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default populated state — the selected email broken down by country.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'clicks',
    showMap: true
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The optional map beside the countries leaderboard. No fixed composition
enables it anymore (the Email clicks Locations card is a plain leaderboard
per the design mocks); the story keeps the capability covered.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailBreakdownForState(5601),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'loading');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailBreakdownForState(5602),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'error');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailBreakdownForState(5603),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'empty');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the envelope glyph
and the per-view "no data yet" copy).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <EmailBreakdownRender attributes={{
    reportParams: getDefaultQueryParams(false),
    view: 'countries'
  }} />,
  decorators: [withWidgetCanvas]
}`,...Q.parameters?.docs?.source},description:{story:'No email selected: `reportParams.post_id` is unset, so no request is made and\nthe empty state prompts to select an email instead of "no data yet".',...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <EmailBreakdownDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    view: 'countries',
    metric: 'opens',
    showMap: false
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    view: {
      control: 'select',
      options: VIEW_OPTIONS
    },
    metric: {
      control: 'select',
      options: METRIC_OPTIONS
    },
    showMap: {
      control: 'boolean'
    }
  }
}`,...$.parameters?.docs?.source}}},Fe=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as LocationClicksWithMap,Q as NoEmailSelected,$ as WidgetDashboardWithWidget,Fe as __namedExportsOrder,K as default};