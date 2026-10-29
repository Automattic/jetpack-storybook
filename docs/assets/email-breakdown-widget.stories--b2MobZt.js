import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{t as i,y as a}from"./build-module-CT-mI-B8.js";import{Mu as o,bu as s}from"./build-module-BI3_PVVO.js";import{$ as c,B as l,I as u,sn as d,yn as f}from"./charts-provider-BXWttMH6.js";import{t as p}from"./geo-chart-BKrn1XdR.js";import{$t as m,G as h,K as ee,gn as g,t as _,vn as v}from"./src-DvzWgCqE.js";import{a as y}from"./src-CDsJ1V0E.js";import{t as te}from"./widget-state-B-3KFlZy.js";import{i as b}from"./with-story-router-TeMi98u_.js";import{n as ne,t as re}from"./with-chart-theme-afr1aZWu.js";import"./constants-B9OTkkI1.js";import{r as ie}from"./leaderboard-skeleton-C-y8R1eG.js";import{n as ae,r as oe,s as x}from"./register-report-mocks-CI2bPEM7.js";import{s as se}from"./locations-geo-chart-C6hMt7oL.js";import{a as ce,g as le,h as ue,i as de,m as fe,n as pe,p as me,r as S,t as he}from"./with-widget-canvas-ke8j5asA.js";var ge,_e,C,w,T,E,ve=e((()=>{ge=`_root_g10fy_1`,_e=`_content_g10fy_10`,C=`_locationContent_g10fy_20`,w=`_leaderboard_g10fy_29`,T=`_map_g10fy_36`,E={root:ge,content:_e,locationContent:C,leaderboard:w,map:T}}));function D(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ye({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:O[t],s=ee(e,a,{enabled:!i&&n===`opens`}),c=h(e,a,{enabled:!i&&n===`clicks`}),l=h(e,`link`,{enabled:i}),u=h(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:s,f=i?[l,u]:[d],p=l.data,g=u.data,_=d.data,v=(0,o.useMemo)(()=>(i?[...D(p).filter(e=>!e.link),...D(g).filter(e=>!!e.link)].sort(m):D(_)).map((e,t)=>({...e,id:t})),[i,p,g,_]);return{allRows:v,rows:(0,o.useMemo)(()=>v.slice(0,r>0?r:void 0),[v,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var O,be=e((()=>{_(),s(),O={countries:`country`,devices:`device`,clients:`client`}}));function xe(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Se(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?f(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?y(e.link):null;return{id:String(e.id),...se({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:d(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Ce(e){switch(e){case`devices`:return t(`Devices`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`Email clients`,`jetpack-premium-analytics-pkg`);case`links`:return t(`Links`,`jetpack-premium-analytics-pkg`);default:return t(`Countries`,`jetpack-premium-analytics-pkg`)}}function we(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Te({view:e,metric:t,showMap:n}){let{reportParams:r}=l(),i=g(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:u,refetch:d}=ye({postId:i,view:e,metric:t,max:10});return(0,A.jsx)(M,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:u,hasEmail:i>0,onRetry:d})}function k({attributes:e={}}){return(0,A.jsx)(u,{attributes:e,children:(0,A.jsx)(Te,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var A,j,M,Ee=e((()=>{_(),b(),i(),s(),n(),ve(),be(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:s=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:m})=>{let h=t(`Email breakdown`,`jetpack-premium-analytics-pkg`),ee=(0,o.useMemo)(()=>Se(e,r),[e,r]),g=(0,o.useMemo)(()=>xe(n,s),[n,s]),[_,v]=(0,o.useState)(),y=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);v(t=>t===e?t:e)}}),b=i&&r===`countries`&&g.length>1&&(_??0)>=720;return(0,A.jsx)(`div`,{ref:y,className:E.root,children:(0,A.jsx)(te,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]:void 0},empty:{description:f?we(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsxs)(`div`,{className:b?E.locationContent:E.content,children:[(0,A.jsx)(ie,{className:E.leaderboard,data:ee,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:j,columns:{label:Ce(r),metric:r===`links`?`clicks`:s},chartTitle:h}),b&&(0,A.jsx)(`div`,{className:E.map,"data-testid":`email-breakdown-map`,children:(0,A.jsx)(p,{data:g,ariaLabel:c(h)})})]})})})}})),N,De=e((()=>{N={attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),P,F,I,L,R,z,B,Oe,ke=e((()=>{P=`jpa/email-breakdown`,F=`jpa/envelope`,I=`Email breakdown`,L=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,R={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},z=`stats`,B=`framed`,Oe={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function Ae({view:e,metric:t,showMap:n}){return(0,H.jsx)(k,{attributes:{reportParams:{...v(),post_id:U},view:e,metric:t,showMap:n}})}function V(e){return(0,H.jsx)(k,{attributes:{reportParams:{...v(!1),post_id:e},view:`countries`,metric:`opens`}})}function je({view:e,metric:t,showMap:n,...r}){return(0,H.jsx)(fe,{...r,widgetType:de(Oe,N),renderModule:Me,renderComponent:k,attributes:{reportParams:{...v(!0),post_id:U},view:e,metric:t,showMap:n}})}var H,Me,U,W,G,Ne,K,Pe,q,J,Y,X,Z,Q,$,Fe;e((()=>{_(),ae(),re(),ue(),ce(),pe(),Ee(),De(),ke(),H=r(),oe(),Me=`storybook/email-breakdown`,U=1234,W=[`countries`,`devices`,`clients`,`links`],G=[`opens`,`clicks`],Ne=`802px`,K=(e,{args:t})=>(0,H.jsx)(he,{width:t.showMap&&t.view===`countries`?Ne:void 0,children:(0,H.jsx)(e,{})}),Pe={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:k,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[ne]},q={render:Ae,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:Ae,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>V(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`loading`),()=>x(`stats/opens/emails`,null))},X={render:()=>V(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`error`),()=>x(`stats/opens/emails`,null))},Z={render:()=>V(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`empty`),()=>x(`stats/opens/emails`,null))},Q={render:()=>(0,H.jsx)(k,{attributes:{reportParams:v(!1),view:`countries`}}),decorators:[S]},$={render:e=>(0,H.jsx)(je,{...e}),args:{...me,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...le,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},Fe=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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