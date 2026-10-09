import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-Cs7QYUGY.js";import{Gu as o,Ms as s,Nu as c,t as l}from"./build-module-Cm3Kd3py.js";import{t as u}from"./geo-chart-2-hMR0CW.js";import{En as d,On as f,R as p,ln as m,t as h,z as g}from"./src-EFVFQWJ1.js";import{Jt as _,Ut as v,_ as y,x as b}from"./charts-provider-BcXi6Auj.js";import{a as ee}from"./src-BRGs5Z50.js";import{n as te,t as ne}from"./with-chart-theme-De7GND5P.js";import"./rows-DAmD2BmE.js";import{r as re}from"./leaderboard-skeleton-j9kb6SMG.js";import{n as ie,r as ae,s as x}from"./register-report-mocks-ByCR7QC_.js";import{t as oe}from"./widget-state-DFLDEYqh.js";import{i as se}from"./leaderboard-Czv2wTZh.js";import{t as ce}from"./src-CCU8io4M.js";import{a as le,g as ue,h as de,i as fe,m as pe,n as me,p as he,r as S,t as ge}from"./with-widget-canvas-CuaJpnBg.js";var C,w,T,E,D,O,_e=e((()=>{C=`_root_g10fy_1`,w=`_content_g10fy_10`,T=`_locationContent_g10fy_20`,E=`_leaderboard_g10fy_29`,D=`_map_g10fy_36`,O={root:C,content:w,locationContent:T,leaderboard:E,map:D}}));function k(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ve({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:A[t],s=g(e,a,{enabled:!i&&n===`opens`}),c=p(e,a,{enabled:!i&&n===`clicks`}),l=p(e,`link`,{enabled:i}),u=p(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:s,f=i?[l,u]:[d],h=l.data,_=u.data,v=d.data,y=(0,o.useMemo)(()=>(i?[...k(h).filter(e=>!e.link),...k(_).filter(e=>!!e.link)].sort(m):k(v)).map((e,t)=>({...e,id:t})),[i,h,_,v]);return{allRows:y,rows:(0,o.useMemo)(()=>y.slice(0,r>0?r:void 0),[y,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var A,ye=e((()=>{h(),c(),A={countries:`country`,devices:`device`,clients:`client`}}));function be(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function xe(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?v(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?ee(e.link):null;return{id:String(e.id),...se({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:_(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Se(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Ce({view:e,metric:t,showMap:n}){let{reportParams:r}=b(),i=d(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ve({postId:i,view:e,metric:t,max:10});return(0,M.jsx)(P,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function j({attributes:e={}}){return(0,M.jsx)(y,{attributes:e,children:(0,M.jsx)(Ce,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var M,N,P,we=e((()=>{h(),ce(),i(),c(),n(),l(),_e(),ye(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:c=`opens`,isLoading:l=!1,isFetching:d=!1,isError:f=!1,hasEmail:p=!0,onRetry:m})=>{let h=(0,o.useMemo)(()=>xe(e,r),[e,r]),g=(0,o.useMemo)(()=>be(n,c),[n,c]),[_,v]=(0,o.useState)(),y=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);v(t=>t===e?t:e)}}),b=i&&r===`countries`&&g.length>1&&(_??0)>=720;return(0,M.jsx)(`div`,{ref:y,className:O.root,children:(0,M.jsx)(oe,{isLoading:l,isFetching:d,isError:f,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]:void 0},empty:{icon:s,description:p?Se(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsxs)(`div`,{className:b?O.locationContent:O.content,children:[(0,M.jsx)(re,{className:O.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:N}),b&&(0,M.jsx)(`div`,{className:O.map,"data-testid":`email-breakdown-map`,children:(0,M.jsx)(u,{data:g})})]})})})}})),F,Te=e((()=>{F={attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),I,L,R,z,Ee,De,Oe,ke,Ae=e((()=>{I=`jpa/email-breakdown`,L=`jpa/envelope`,R=`Email breakdown`,z=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,Ee={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},De=`stats`,Oe=`framed`,ke={name:I,icon:L,title:R,description:z,help:Ee,category:De,presentation:Oe}}));function je({view:e,metric:t,showMap:n}){return(0,V.jsx)(j,{attributes:{reportParams:{...f(),post_id:H},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(j,{attributes:{reportParams:{...f(!1),post_id:e},view:`countries`,metric:`opens`}})}function Me({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(pe,{...r,widgetType:fe(ke,F),renderModule:Ne,renderComponent:j,attributes:{reportParams:{...f(!0),post_id:H},view:e,metric:t,showMap:n}})}var V,Ne,H,U,W,Pe,G,Fe,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ie(),ne(),de(),le(),me(),we(),Te(),Ae(),V=r(),ae(),Ne=`storybook/email-breakdown`,H=1234,U=[`countries`,`devices`,`clients`,`links`],W=[`opens`,`clicks`],Pe=`802px`,G=(e,{args:t})=>(0,V.jsx)(ge,{width:t.showMap&&t.view===`countries`?Pe:void 0,children:(0,V.jsx)(e,{})}),Fe={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:j,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[te]},K={render:je,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[G]},q={render:je,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[G]},J={render:()=>B(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`loading`),()=>x(`stats/opens/emails`,null))},Y={render:()=>B(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`error`),()=>x(`stats/opens/emails`,null))},X={render:()=>B(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`empty`),()=>x(`stats/opens/emails`,null))},Z={render:()=>(0,V.jsx)(j,{attributes:{reportParams:f(!1),view:`countries`}}),decorators:[S]},Q={render:e=>(0,V.jsx)(Me,{...e}),args:{...he,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...ue,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'opens',
    showMap: false
  },
  decorators: [withMapAwareWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default populated state — the selected email broken down by country.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'clicks',
    showMap: true
  },
  decorators: [withMapAwareWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The country map beside the countries leaderboard, as the two-column
"Locations" card on the post detail Email clicks tab renders it. The
widget only mounts the map at container widths of 720px and up, so the canvas
widens to a two-column card while \`showMap\` is on for the countries view.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailBreakdownForState(5601),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'loading');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailBreakdownForState(5602),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'error');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailBreakdownForState(5603),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'empty');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the envelope glyph
and the per-view "no data yet" copy).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <EmailBreakdownRender attributes={{
    reportParams: getDefaultQueryParams(false),
    view: 'countries'
  }} />,
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:'No email selected: `reportParams.post_id` is unset, so no request is made and\nthe empty state prompts to select an email instead of "no data yet".',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,q as LocationClicksWithMap,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Fe as default};