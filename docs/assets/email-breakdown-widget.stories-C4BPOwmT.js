import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{t as i,y as a}from"./build-module-CT-mI-B8.js";import{Mu as o,bu as s}from"./build-module-BI3_PVVO.js";import{t as c}from"./geo-chart-Bkox9Iya.js";import{Jt as l,U as u,W as d,dn as f,pn as p,t as m}from"./src-5g9sGwvT.js";import{F as h,Ft as g,X as _,qt as v,z as y}from"./charts-provider-bUtI3a4j.js";import{a as b}from"./src-DwJ-Sp05.js";import{t as ee}from"./widget-state-DmJn3qOC.js";import{n as x,t as te}from"./with-chart-theme-CsFKsjnW.js";import"./rows-DoJXoHhN.js";import{r as ne}from"./leaderboard-skeleton-C5ZIz2fL.js";import{a as re,o as ie,u as S}from"./widget-state-QAs2RT9y.js";import{i as ae}from"./build-leaderboard-chart-data-DKIdE2af.js";import{A as oe,H as se,M as ce,N as le,U as ue,V as de,W as fe,j as C,k as pe,t as me}from"./src-8B4VP-Wm.js";var he,ge,w,T,E,D,_e=e((()=>{he=`_root_g10fy_1`,ge=`_content_g10fy_10`,w=`_locationContent_g10fy_20`,T=`_leaderboard_g10fy_29`,E=`_map_g10fy_36`,D={root:he,content:ge,locationContent:w,leaderboard:T,map:E}}));function O(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ve({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:k[t],s=d(e,a,{enabled:!i&&n===`opens`}),c=u(e,a,{enabled:!i&&n===`clicks`}),f=u(e,`link`,{enabled:i}),p=u(e,`user-content-link`,{enabled:i}),m=n===`clicks`?c:s,h=i?[f,p]:[m],g=f.data,_=p.data,v=m.data,y=(0,o.useMemo)(()=>(i?[...O(g).filter(e=>!e.link),...O(_).filter(e=>!!e.link)].sort(l):O(v)).map((e,t)=>({...e,id:t})),[i,g,_,v]);return{allRows:y,rows:(0,o.useMemo)(()=>y.slice(0,r>0?r:void 0),[y,r]),isLoading:h.some(e=>e.isLoading),isFetching:h.some(e=>e.isFetching),isError:h.some(e=>e.isError&&e.data===void 0),refetch:()=>h.forEach(e=>e.refetch())}}var k,ye=e((()=>{m(),s(),k={countries:`country`,devices:`device`,clients:`client`}}));function be(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function xe(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?v(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?b(e.link):null;return{id:String(e.id),...ae({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:g(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Se(e){switch(e){case`devices`:return t(`Devices`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`Email clients`,`jetpack-premium-analytics-pkg`);case`links`:return t(`Links`,`jetpack-premium-analytics-pkg`);default:return t(`Countries`,`jetpack-premium-analytics-pkg`)}}function Ce(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function we({view:e,metric:t,showMap:n}){let{reportParams:r}=y(),i=f(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ve({postId:i,view:e,metric:t,max:10});return(0,j.jsx)(N,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function A({attributes:e={}}){return(0,j.jsx)(h,{attributes:e,children:(0,j.jsx)(we,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var j,M,N,Te=e((()=>{m(),me(),i(),s(),n(),_e(),ye(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:s=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:p})=>{let m=t(`Email breakdown`,`jetpack-premium-analytics-pkg`),h=(0,o.useMemo)(()=>xe(e,r),[e,r]),g=(0,o.useMemo)(()=>be(n,s),[n,s]),[v,y]=(0,o.useState)(),b=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);y(t=>t===e?t:e)}}),x=i&&r===`countries`&&g.length>1&&(v??0)>=720;return(0,j.jsx)(`div`,{ref:b,className:D.root,children:(0,j.jsx)(ee,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{description:f?Ce(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsxs)(`div`,{className:x?D.locationContent:D.content,children:[(0,j.jsx)(ne,{className:D.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:Se(r),metric:r===`links`?`clicks`:s},chartTitle:m}),x&&(0,j.jsx)(`div`,{className:D.map,"data-testid":`email-breakdown-map`,children:(0,j.jsx)(c,{data:g,ariaLabel:_(m)})})]})})})}})),P,Ee=e((()=>{P={attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),F,I,L,R,z,B,De,Oe,ke=e((()=>{F=`jpa/email-breakdown`,I=`jpa/envelope`,L=`Email breakdown`,R=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,z={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},B=`stats`,De=`framed`,Oe={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:De}}));function Ae({view:e,metric:t,showMap:n}){return(0,H.jsx)(A,{attributes:{reportParams:{...p(),post_id:U},view:e,metric:t,showMap:n}})}function V(e){return(0,H.jsx)(A,{attributes:{reportParams:{...p(!1),post_id:e},view:`countries`,metric:`opens`}})}function je({view:e,metric:t,showMap:n,...r}){return(0,H.jsx)(se,{...r,widgetType:ce(Oe,P),renderModule:Me,renderComponent:A,attributes:{reportParams:{...p(!0),post_id:U},view:e,metric:t,showMap:n}})}var H,Me,U,W,G,Ne,K,Pe,q,J,Y,X,Z,Q,$,Fe;e((()=>{m(),re(),te(),ue(),le(),oe(),Te(),Ee(),ke(),H=r(),ie(),Me=`storybook/email-breakdown`,U=1234,W=[`countries`,`devices`,`clients`,`links`],G=[`opens`,`clicks`],Ne=`802px`,K=(e,{args:t})=>(0,H.jsx)(pe,{width:t.showMap&&t.view===`countries`?Ne:void 0,children:(0,H.jsx)(e,{})}),Pe={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:A,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[x]},q={render:Ae,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:Ae,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>V(5601),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(`stats/opens/emails`,`loading`),()=>S(`stats/opens/emails`,null))},X={render:()=>V(5602),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(`stats/opens/emails`,`error`),()=>S(`stats/opens/emails`,null))},Z={render:()=>V(5603),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(`stats/opens/emails`,`empty`),()=>S(`stats/opens/emails`,null))},Q={render:()=>(0,H.jsx)(A,{attributes:{reportParams:p(!1),view:`countries`}}),decorators:[C]},$={render:e=>(0,H.jsx)(je,{...e}),args:{...de,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...fe,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},Fe=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'opens',
    showMap: false
  },
  decorators: [withMapAwareWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default populated state — the selected email broken down by country.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'clicks',
    showMap: true
  },
  decorators: [withMapAwareWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The country map beside the countries leaderboard, as the two-column
"Locations" card on the post detail Email clicks tab renders it. The
widget only mounts the map at container widths of 720px and up, so the canvas
widens to a two-column card while \`showMap\` is on for the countries view.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as LocationClicksWithMap,Q as NoEmailSelected,$ as WidgetDashboardWithWidget,Fe as __namedExportsOrder,Pe as default};