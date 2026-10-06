import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-C3v6-Qcj.js";import{As as o,Vu as s,ku as c,t as l}from"./build-module-DNhkEVJn.js";import{m as u,v as d}from"./hooks-H2YJR3XP.js";import{t as f}from"./geo-chart-BOlba9iX.js";import{Jn as p,N as m,P as ee,fn as h,t as g,xn as _}from"./src-BcWXjvol.js";import{Tt as v,ot as y}from"./helpers-DbUsf4uI.js";import{n as te,t as ne}from"./with-chart-theme-Cj6KiNhL.js";import"./rows-DAmD2BmE.js";import{r as re}from"./leaderboard-skeleton-CCJvkqU-.js";import{n as ie,r as ae,s as b}from"./register-report-mocks-e7cVqHDo.js";import{i as oe}from"./leaderboard-3ty2C_8p.js";import{t as se}from"./widget-state-CXzmrrd7.js";import{a as ce}from"./src-BCx3bC_l.js";import{t as le}from"./src-CyrW0w-t.js";import{a as ue,d as de,f as fe,i as pe,n as me,p as he,r as x,t as ge,u as _e}from"./with-widget-canvas-oSVceFUR.js";var S,C,w,T,E,D,ve=e((()=>{S=`_root_g10fy_1`,C=`_content_g10fy_10`,w=`_locationContent_g10fy_20`,T=`_leaderboard_g10fy_29`,E=`_map_g10fy_36`,D={root:S,content:C,locationContent:w,leaderboard:T,map:E}}));function O(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ye({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:k[t],o=ee(e,a,{enabled:!i&&n===`opens`}),c=m(e,a,{enabled:!i&&n===`clicks`}),l=m(e,`link`,{enabled:i}),u=m(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:o,f=i?[l,u]:[d],p=l.data,h=u.data,g=d.data,v=(0,s.useMemo)(()=>(i?[...O(p).filter(e=>!e.link),...O(h).filter(e=>!!e.link)].sort(_):O(g)).map((e,t)=>({...e,id:t})),[i,p,h,g]);return{allRows:v,rows:(0,s.useMemo)(()=>v.slice(0,r>0?r:void 0),[v,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var k,be=e((()=>{g(),c(),k={countries:`country`,devices:`device`,clients:`client`}}));function xe(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Se(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?y(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?ce(e.link):null;return{id:String(e.id),...oe({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:v(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Ce(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function we({view:e,metric:t,showMap:n}){let{reportParams:r}=d(),i=p(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ye({postId:i,view:e,metric:t,max:10});return(0,j.jsx)(N,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(we,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var j,M,N,Te=e((()=>{g(),le(),i(),c(),n(),l(),ve(),be(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:c=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:p=!0,onRetry:m})=>{let ee=(0,s.useMemo)(()=>Se(e,r),[e,r]),h=(0,s.useMemo)(()=>xe(n,c),[n,c]),[g,_]=(0,s.useState)(),v=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);_(t=>t===e?t:e)}}),y=i&&r===`countries`&&h.length>1&&(g??0)>=720;return(0,j.jsx)(`div`,{ref:v,className:D.root,children:(0,j.jsx)(se,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]:void 0},empty:{icon:o,description:p?Ce(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsxs)(`div`,{className:y?D.locationContent:D.content,children:[(0,j.jsx)(re,{className:D.leaderboard,data:ee,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:M}),y&&(0,j.jsx)(`div`,{className:D.map,"data-testid":`email-breakdown-map`,children:(0,j.jsx)(f,{data:h})})]})})})}})),P,Ee=e((()=>{l(),P={icon:o,attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),F,I,L,R,z,B,De,Oe=e((()=>{F=`jpa/email-breakdown`,I=`Email breakdown`,L=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,R={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},z=`stats`,B=`framed`,De={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function ke({view:e,metric:t,showMap:n}){return(0,H.jsx)(A,{attributes:{reportParams:{...h(),post_id:U},view:e,metric:t,showMap:n}})}function V(e){return(0,H.jsx)(A,{attributes:{reportParams:{...h(!1),post_id:e},view:`countries`,metric:`opens`}})}function Ae({view:e,metric:t,showMap:n,...r}){return(0,H.jsx)(de,{...r,widgetType:pe(De,P),renderModule:je,renderComponent:A,attributes:{reportParams:{...h(!0),post_id:U},view:e,metric:t,showMap:n}})}var H,je,U,W,G,Me,K,Ne,q,J,Y,X,Z,Q,$,Pe;e((()=>{g(),ie(),ne(),fe(),ue(),me(),Te(),Ee(),Oe(),H=r(),ae(),je=`storybook/email-breakdown`,U=1234,W=[`countries`,`devices`,`clients`,`links`],G=[`opens`,`clicks`],Me=`802px`,K=(e,{args:t})=>(0,H.jsx)(ge,{width:t.showMap&&t.view===`countries`?Me:void 0,children:(0,H.jsx)(e,{})}),Ne={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:A,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[te]},q={render:ke,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:ke,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>V(5601),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`loading`),()=>b(`stats/opens/emails`,null))},X={render:()=>V(5602),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`error`),()=>b(`stats/opens/emails`,null))},Z={render:()=>V(5603),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`empty`),()=>b(`stats/opens/emails`,null))},Q={render:()=>(0,H.jsx)(A,{attributes:{reportParams:h(!1),view:`countries`}}),decorators:[x]},$={render:e=>(0,H.jsx)(Ae,{...e}),args:{..._e,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...he,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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