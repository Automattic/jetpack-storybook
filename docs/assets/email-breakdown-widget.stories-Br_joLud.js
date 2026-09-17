import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Ms as o,Uu as s,ju as c,t as l}from"./build-module-2iv4IIRq.js";import{Bt as u,an as d,b as f,g as p}from"./hooks-BbU-VvfV.js";import{t as m}from"./geo-chart-C-trj4Qm.js";import{b as h,en as g,jn as _,r as v,sn as ee,x as y}from"./date-period-dropdown-Q0Iyrwt6.js";import{a as te}from"./src-TAKXa7ft.js";import{n as ne,t as re}from"./with-chart-theme-CO8zenmS.js";import"./constants-B1kGztHF.js";import{r as ie}from"./leaderboard-skeleton-DHB6PQdv.js";import{i as ae,r as oe,s as b}from"./register-report-mocks-D0VbbC-L.js";import{N as se}from"./report-metric-C49wvYrF.js";import{t as ce}from"./widget-state-iplORbvs.js";import{t as le}from"./src-BDjmkBrq.js";import{a as ue,c as de,i as fe,l as pe,n as me,o as he,r as x,s as ge,t as _e}from"./with-widget-canvas-DaC2KPG_.js";var S,C,w,ve,ye,T,be=e((()=>{S=`_root_g10fy_1`,C=`_content_g10fy_10`,w=`_locationContent_g10fy_20`,ve=`_leaderboard_g10fy_29`,ye=`_map_g10fy_36`,T={root:S,content:C,locationContent:w,leaderboard:ve,map:ye}}));function E(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function xe({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:D[t],o=y(e,a,{enabled:!i&&n===`opens`}),c=h(e,a,{enabled:!i&&n===`clicks`}),l=h(e,`link`,{enabled:i}),u=h(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:o,f=i?[l,u]:[d],p=l.data,m=u.data,g=d.data,_=(0,s.useMemo)(()=>(i?[...E(p).filter(e=>!e.link),...E(m).filter(e=>!!e.link)].sort(ee):E(g)).map((e,t)=>({...e,id:t})),[i,p,m,g]);return{allRows:_,rows:(0,s.useMemo)(()=>_.slice(0,r>0?r:void 0),[_,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var D,Se=e((()=>{v(),c(),D={countries:`country`,devices:`device`,clients:`client`}}));function Ce(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function we(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?u(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?te(e.link):null;return{id:String(e.id),...se({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:d(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Te(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Ee({view:e,metric:t,showMap:n}){let{reportParams:r}=f(),i=_(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=xe({postId:i,view:e,metric:t,max:10});return(0,k.jsx)(j,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function O({attributes:e={}}){return(0,k.jsx)(p,{attributes:e,children:(0,k.jsx)(Ee,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var k,A,j,De=e((()=>{v(),le(),i(),c(),n(),l(),be(),Se(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:c=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:p})=>{let h=(0,s.useMemo)(()=>we(e,r),[e,r]),g=(0,s.useMemo)(()=>Ce(n,c),[n,c]),[_,v]=(0,s.useState)(),ee=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);v(t=>t===e?t:e)}}),y=i&&r===`countries`&&g.length>1&&(_??0)>=720;return(0,k.jsx)(`div`,{ref:ee,className:T.root,children:(0,k.jsx)(ce,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{icon:o,description:f?Te(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsxs)(`div`,{className:y?T.locationContent:T.content,children:[(0,k.jsx)(ie,{className:T.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:A}),y&&(0,k.jsx)(`div`,{className:T.map,"data-testid":`email-breakdown-map`,children:(0,k.jsx)(m,{data:g})})]})})})}})),M,Oe=e((()=>{l(),M={icon:o,attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),N,P,F,I,L,R,z,ke=e((()=>{N=`jpa/email-breakdown`,P=`Email breakdown`,F=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,I={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({view:e,metric:t,showMap:n}){return(0,H.jsx)(O,{attributes:{reportParams:{...g(),post_id:U},view:e,metric:t,showMap:n}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:{...g(!1),post_id:e},view:`countries`,metric:`opens`}})}function Ae({view:e,metric:t,showMap:n,...r}){return(0,H.jsx)(ge,{...r,widgetType:fe(z,M),renderModule:je,renderComponent:O,attributes:{reportParams:{...g(!0),post_id:U},view:e,metric:t,showMap:n}})}var H,je,U,W,G,Me,K,Ne,q,J,Y,X,Z,Q,$,Pe;e((()=>{v(),oe(),re(),de(),ue(),me(),De(),Oe(),ke(),H=r(),ae(),je=`storybook/email-breakdown`,U=1234,W=[`countries`,`devices`,`clients`,`links`],G=[`opens`,`clicks`],Me=`802px`,K=(e,{args:t})=>(0,H.jsx)(_e,{width:t.showMap&&t.view===`countries`?Me:void 0,children:(0,H.jsx)(e,{})}),Ne={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:O,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[ne]},q={render:B,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:B,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>V(5601),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`loading`),()=>b(`stats/opens/emails`,null))},X={render:()=>V(5602),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`error`),()=>b(`stats/opens/emails`,null))},Z={render:()=>V(5603),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`empty`),()=>b(`stats/opens/emails`,null))},Q={render:()=>(0,H.jsx)(O,{attributes:{reportParams:g(!1),view:`countries`}}),decorators:[x]},$={render:e=>(0,H.jsx)(Ae,{...e}),args:{...he,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...pe,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Pe=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as LocationClicksWithMap,Q as NoEmailSelected,$ as WidgetDashboardWithWidget,Pe as __namedExportsOrder,Ne as default};