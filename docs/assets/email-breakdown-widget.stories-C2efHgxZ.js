import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-DUOOv4sd.js";import{Gu as o,Nu as s}from"./build-module-Cm3Kd3py.js";import{t as c}from"./geo-chart-Cuchj1qR.js";import{R as l,Ut as u,cn as d,on as f,t as p,z as ee}from"./src-CRO_I5he.js";import{jt as m,m as h,qt as g,v as _}from"./charts-provider-C1StHlgN.js";import{a as v}from"./src-DSXELYHv.js";import{n as te,t as ne}from"./with-chart-theme-DhPHk_nH.js";import"./rows-DAmD2BmE.js";import{r as re}from"./leaderboard-skeleton-B0Outcuj.js";import{n as ie,r as ae,s as y}from"./register-report-mocks-62J3WC_l.js";import{t as oe}from"./widget-state-BTSHomY4.js";import{i as se}from"./build-leaderboard-chart-data-DbugCWta.js";import{t as ce}from"./src-DgqMapCf.js";import{a as le,g as ue,h as de,i as fe,m as pe,n as me,p as he,r as b,t as ge}from"./with-widget-canvas-Cq3FFtld.js";var x,S,C,w,T,E,_e=e((()=>{x=`_root_g10fy_1`,S=`_content_g10fy_10`,C=`_locationContent_g10fy_20`,w=`_leaderboard_g10fy_29`,T=`_map_g10fy_36`,E={root:x,content:S,locationContent:C,leaderboard:w,map:T}}));function D(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ve({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:O[t],s=ee(e,a,{enabled:!i&&n===`opens`}),c=l(e,a,{enabled:!i&&n===`clicks`}),d=l(e,`link`,{enabled:i}),f=l(e,`user-content-link`,{enabled:i}),p=n===`clicks`?c:s,m=i?[d,f]:[p],h=d.data,g=f.data,_=p.data,v=(0,o.useMemo)(()=>(i?[...D(h).filter(e=>!e.link),...D(g).filter(e=>!!e.link)].sort(u):D(_)).map((e,t)=>({...e,id:t})),[i,h,g,_]);return{allRows:v,rows:(0,o.useMemo)(()=>v.slice(0,r>0?r:void 0),[v,r]),isLoading:m.some(e=>e.isLoading),isFetching:m.some(e=>e.isFetching),isError:m.some(e=>e.isError&&e.data===void 0),refetch:()=>m.forEach(e=>e.refetch())}}var O,ye=e((()=>{p(),s(),O={countries:`country`,devices:`device`,clients:`client`}}));function be(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function xe(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?g(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?v(e.link):null;return{id:String(e.id),...se({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:m(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Se(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Ce({view:e,metric:t,showMap:n}){let{reportParams:r}=_(),i=f(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ve({postId:i,view:e,metric:t,max:10});return(0,A.jsx)(M,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function k({attributes:e={}}){return(0,A.jsx)(h,{attributes:e,children:(0,A.jsx)(Ce,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var A,j,M,we=e((()=>{p(),ce(),i(),s(),n(),_e(),ye(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:s=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:p})=>{let ee=(0,o.useMemo)(()=>xe(e,r),[e,r]),m=(0,o.useMemo)(()=>be(n,s),[n,s]),[h,g]=(0,o.useState)(),_=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);g(t=>t===e?t:e)}}),v=i&&r===`countries`&&m.length>1&&(h??0)>=720;return(0,A.jsx)(`div`,{ref:_,className:E.root,children:(0,A.jsx)(oe,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{description:f?Se(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsxs)(`div`,{className:v?E.locationContent:E.content,children:[(0,A.jsx)(re,{className:E.leaderboard,data:ee,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:j}),v&&(0,A.jsx)(`div`,{className:E.map,"data-testid":`email-breakdown-map`,children:(0,A.jsx)(c,{data:m})})]})})})}})),N,Te=e((()=>{N={attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),P,F,I,L,R,z,Ee,De,Oe=e((()=>{P=`jpa/email-breakdown`,F=`jpa/envelope`,I=`Email breakdown`,L=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,R={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},z=`stats`,Ee=`framed`,De={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:Ee}}));function ke({view:e,metric:t,showMap:n}){return(0,V.jsx)(k,{attributes:{reportParams:{...d(),post_id:H},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(k,{attributes:{reportParams:{...d(!1),post_id:e},view:`countries`,metric:`opens`}})}function Ae({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(pe,{...r,widgetType:fe(De,N),renderModule:je,renderComponent:k,attributes:{reportParams:{...d(!0),post_id:H},view:e,metric:t,showMap:n}})}var V,je,H,U,W,Me,G,Ne,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ie(),ne(),de(),le(),me(),we(),Te(),Oe(),V=r(),ae(),je=`storybook/email-breakdown`,H=1234,U=[`countries`,`devices`,`clients`,`links`],W=[`opens`,`clicks`],Me=`802px`,G=(e,{args:t})=>(0,V.jsx)(ge,{width:t.showMap&&t.view===`countries`?Me:void 0,children:(0,V.jsx)(e,{})}),Ne={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:k,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[te]},K={render:ke,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[G]},q={render:ke,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[G]},J={render:()=>B(5601),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`loading`),()=>y(`stats/opens/emails`,null))},Y={render:()=>B(5602),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`error`),()=>y(`stats/opens/emails`,null))},X={render:()=>B(5603),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`empty`),()=>y(`stats/opens/emails`,null))},Z={render:()=>(0,V.jsx)(k,{attributes:{reportParams:d(!1),view:`countries`}}),decorators:[b]},Q={render:e=>(0,V.jsx)(Ae,{...e}),args:{...he,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...ue,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,q as LocationClicksWithMap,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Ne as default};