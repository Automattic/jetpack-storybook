import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-BXPCp--5.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-D50o9sls.js";import{Gu as o,Nu as s}from"./build-module-CDZL_1rk.js";import{t as c}from"./geo-chart-BhpQGIA8.js";import{H as l,Kt as u,V as d,dn as f,ln as p,t as m}from"./src-CL-148gV.js";import{Pt as h,m as g,v as _,vt as v}from"./charts-provider-D-jGTIjN.js";import{a as y}from"./src-CVwcDaBN.js";import{n as ee,t as te}from"./with-chart-theme-CNrPfHkx.js";import"./rows-DAmD2BmE.js";import{r as ne}from"./leaderboard-skeleton-DwNVFfDy.js";import{n as re,r as ie,s as b}from"./register-report-mocks-D-NrjWza.js";import{t as ae}from"./widget-state-BIinig0i.js";import{i as oe}from"./build-leaderboard-chart-data-C86qYhko.js";import{t as se}from"./src-CHzXL-sY.js";import{a as ce,g as le,h as ue,i as de,m as fe,n as pe,p as me,r as x,t as he}from"./with-widget-canvas-Cbeh4Be7.js";var ge,_e,ve,S,C,w,ye=e((()=>{ge=`_root_g10fy_1`,_e=`_content_g10fy_10`,ve=`_locationContent_g10fy_20`,S=`_leaderboard_g10fy_29`,C=`_map_g10fy_36`,w={root:ge,content:_e,locationContent:ve,leaderboard:S,map:C}}));function T(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function be({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:E[t],s=l(e,a,{enabled:!i&&n===`opens`}),c=d(e,a,{enabled:!i&&n===`clicks`}),f=d(e,`link`,{enabled:i}),p=d(e,`user-content-link`,{enabled:i}),m=n===`clicks`?c:s,h=i?[f,p]:[m],g=f.data,_=p.data,v=m.data,y=(0,o.useMemo)(()=>(i?[...T(g).filter(e=>!e.link),...T(_).filter(e=>!!e.link)].sort(u):T(v)).map((e,t)=>({...e,id:t})),[i,g,_,v]);return{allRows:y,rows:(0,o.useMemo)(()=>y.slice(0,r>0?r:void 0),[y,r]),isLoading:h.some(e=>e.isLoading),isFetching:h.some(e=>e.isFetching),isError:h.some(e=>e.isError&&e.data===void 0),refetch:()=>h.forEach(e=>e.refetch())}}var E,xe=e((()=>{m(),s(),E={countries:`country`,devices:`device`,clients:`client`}}));function Se(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Ce(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?h(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?y(e.link):null;return{id:String(e.id),...oe({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:v(e.value,n),previousValue:0,previousShare:0,delta:0}})}function we(e){switch(e){case`devices`:return t(`Devices`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`Email clients`,`jetpack-premium-analytics-pkg`);case`links`:return t(`Links`,`jetpack-premium-analytics-pkg`);default:return t(`Countries`,`jetpack-premium-analytics-pkg`)}}function Te(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Ee({view:e,metric:t,showMap:n}){let{reportParams:r}=_(),i=p(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=be({postId:i,view:e,metric:t,max:10});return(0,O.jsx)(A,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function D({attributes:e={}}){return(0,O.jsx)(g,{attributes:e,children:(0,O.jsx)(Ee,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var O,k,A,De=e((()=>{m(),se(),i(),s(),n(),ye(),xe(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:s=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:p})=>{let m=(0,o.useMemo)(()=>Ce(e,r),[e,r]),h=(0,o.useMemo)(()=>Se(n,s),[n,s]),[g,_]=(0,o.useState)(),v=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);_(t=>t===e?t:e)}}),y=i&&r===`countries`&&h.length>1&&(g??0)>=720;return(0,O.jsx)(`div`,{ref:v,className:w.root,children:(0,O.jsx)(ae,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{description:f?Te(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsxs)(`div`,{className:y?w.locationContent:w.content,children:[(0,O.jsx)(ne,{className:w.leaderboard,data:m,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:k,columns:{label:we(r),metric:r===`links`?`clicks`:s}}),y&&(0,O.jsx)(`div`,{className:w.map,"data-testid":`email-breakdown-map`,children:(0,O.jsx)(c,{data:h})})]})})})}})),j,Oe=e((()=>{j={attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),M,N,P,F,I,L,R,z,ke=e((()=>{M=`jpa/email-breakdown`,N=`jpa/envelope`,P=`Email breakdown`,F=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,I={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({view:e,metric:t,showMap:n}){return(0,H.jsx)(D,{attributes:{reportParams:{...f(),post_id:U},view:e,metric:t,showMap:n}})}function V(e){return(0,H.jsx)(D,{attributes:{reportParams:{...f(!1),post_id:e},view:`countries`,metric:`opens`}})}function Ae({view:e,metric:t,showMap:n,...r}){return(0,H.jsx)(fe,{...r,widgetType:de(z,j),renderModule:je,renderComponent:D,attributes:{reportParams:{...f(!0),post_id:U},view:e,metric:t,showMap:n}})}var H,je,U,W,G,Me,K,Ne,q,J,Y,X,Z,Q,$,Pe;e((()=>{m(),re(),te(),ue(),ce(),pe(),De(),Oe(),ke(),H=r(),ie(),je=`storybook/email-breakdown`,U=1234,W=[`countries`,`devices`,`clients`,`links`],G=[`opens`,`clicks`],Me=`802px`,K=(e,{args:t})=>(0,H.jsx)(he,{width:t.showMap&&t.view===`countries`?Me:void 0,children:(0,H.jsx)(e,{})}),Ne={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:D,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[ee]},q={render:B,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:B,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>V(5601),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`loading`),()=>b(`stats/opens/emails`,null))},X={render:()=>V(5602),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`error`),()=>b(`stats/opens/emails`,null))},Z={render:()=>V(5603),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`empty`),()=>b(`stats/opens/emails`,null))},Q={render:()=>(0,H.jsx)(D,{attributes:{reportParams:f(!1),view:`countries`}}),decorators:[x]},$={render:e=>(0,H.jsx)(Ae,{...e}),args:{...me,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...le,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Pe=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as LocationClicksWithMap,Q as NoEmailSelected,$ as WidgetDashboardWithWidget,Pe as __namedExportsOrder,Ne as default};