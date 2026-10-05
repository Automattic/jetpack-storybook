import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-C3v6-Qcj.js";import{As as o,Vu as s,ku as c,t as l}from"./build-module-DNhkEVJn.js";import{m as u,v as d}from"./hooks-ClsQtfpb.js";import{t as f}from"./geo-chart-DktVnyKh.js";import{M as p,j as m,qn as h,t as g,un as _,yn as ee}from"./src-_4LH7wEz.js";import{Tt as v,ot as y}from"./helpers-BnJOytVM.js";import{n as te,t as ne}from"./with-chart-theme-B21QubYs.js";import"./rows-DAmD2BmE.js";import{r as re}from"./leaderboard-skeleton-CeUqDUbV.js";import{n as ie,r as ae,s as b}from"./register-report-mocks-wnfofAHq.js";import{i as oe}from"./leaderboard-BWWGxZQb.js";import{t as se}from"./widget-state-gC__Igre.js";import{a as ce}from"./src-7I-Dox8D.js";import{t as le}from"./src-CTENDgIn.js";import{a as ue,d as de,f as fe,i as pe,n as me,p as he,r as x,t as ge,u as _e}from"./with-widget-canvas-DFuFKYLE.js";var S,C,w,T,E,D,ve=e((()=>{S=`_root_g10fy_1`,C=`_content_g10fy_10`,w=`_locationContent_g10fy_20`,T=`_leaderboard_g10fy_29`,E=`_map_g10fy_36`,D={root:S,content:C,locationContent:w,leaderboard:T,map:E}}));function O(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ye({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:k[t],o=p(e,a,{enabled:!i&&n===`opens`}),c=m(e,a,{enabled:!i&&n===`clicks`}),l=m(e,`link`,{enabled:i}),u=m(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:o,f=i?[l,u]:[d],h=l.data,g=u.data,_=d.data,v=(0,s.useMemo)(()=>(i?[...O(h).filter(e=>!e.link),...O(g).filter(e=>!!e.link)].sort(ee):O(_)).map((e,t)=>({...e,id:t})),[i,h,g,_]);return{allRows:v,rows:(0,s.useMemo)(()=>v.slice(0,r>0?r:void 0),[v,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var k,be=e((()=>{g(),c(),k={countries:`country`,devices:`device`,clients:`client`}}));function xe(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Se(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?y(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?ce(e.link):null;return{id:String(e.id),...oe({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:v(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Ce(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function we({view:e,metric:t,showMap:n}){let{reportParams:r}=d(),i=h(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ye({postId:i,view:e,metric:t,max:10});return(0,j.jsx)(Ee,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(we,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var j,Te,Ee,De=e((()=>{g(),le(),i(),c(),n(),l(),ve(),be(),j=r(),Te={type:`number`,options:{useMultipliers:!0,decimals:0}},Ee=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:c=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:p=!0,onRetry:m})=>{let h=(0,s.useMemo)(()=>Se(e,r),[e,r]),g=(0,s.useMemo)(()=>xe(n,c),[n,c]),[_,ee]=(0,s.useState)(),v=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);ee(t=>t===e?t:e)}}),y=i&&r===`countries`&&g.length>1&&(_??0)>=720;return(0,j.jsx)(`div`,{ref:v,className:D.root,children:(0,j.jsx)(se,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]:void 0},empty:{icon:o,description:p?Ce(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsxs)(`div`,{className:y?D.locationContent:D.content,children:[(0,j.jsx)(re,{className:D.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:Te}),y&&(0,j.jsx)(`div`,{className:D.map,"data-testid":`email-breakdown-map`,children:(0,j.jsx)(f,{data:g})})]})})})}})),Oe,ke=e((()=>{l(),Oe={icon:o,attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),M,Ae,N,P,F,I,L,je=e((()=>{M=`jpa/email-breakdown`,Ae=`Email breakdown`,N=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,P={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},F=`stats`,I=`framed`,L={name:M,title:Ae,description:N,help:P,category:F,presentation:I}}));function R({view:e,metric:t,showMap:n}){return(0,B.jsx)(A,{attributes:{reportParams:{..._(),post_id:H},view:e,metric:t,showMap:n}})}function z(e){return(0,B.jsx)(A,{attributes:{reportParams:{..._(!1),post_id:e},view:`countries`,metric:`opens`}})}function Me({view:e,metric:t,showMap:n,...r}){return(0,B.jsx)(de,{...r,widgetType:pe(L,Oe),renderModule:V,renderComponent:A,attributes:{reportParams:{..._(!0),post_id:H},view:e,metric:t,showMap:n}})}var B,V,H,U,W,G,K,Ne,q,J,Y,X,Z,Q,$,Pe;e((()=>{g(),ie(),ne(),fe(),ue(),me(),De(),ke(),je(),B=r(),ae(),V=`storybook/email-breakdown`,H=1234,U=[`countries`,`devices`,`clients`,`links`],W=[`opens`,`clicks`],G=`802px`,K=(e,{args:t})=>(0,B.jsx)(ge,{width:t.showMap&&t.view===`countries`?G:void 0,children:(0,B.jsx)(e,{})}),Ne={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:A,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[te]},q={render:R,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:R,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>z(5601),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`loading`),()=>b(`stats/opens/emails`,null))},X={render:()=>z(5602),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`error`),()=>b(`stats/opens/emails`,null))},Z={render:()=>z(5603),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`empty`),()=>b(`stats/opens/emails`,null))},Q={render:()=>(0,B.jsx)(A,{attributes:{reportParams:_(!1),view:`countries`}}),decorators:[x]},$={render:e=>(0,B.jsx)(Me,{...e}),args:{..._e,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...he,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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