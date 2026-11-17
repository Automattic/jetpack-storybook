import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{D as i,a}from"./build-module-Dl53h6H6.js";import{p as o,t as s}from"./build-module-nWjoY2Yf.js";import{t as c}from"./geo-chart-ByMa2-HX.js";import{J as l,Y as u,_n as d,en as f,t as p,yn as m}from"./src-CZL40WWg.js";import{H as h,I as g,Y as _,f as v,rn as y}from"./charts-provider-tm6f8w9R.js";import{a as ee}from"./src-BQJT9lIL.js";import{t as te}from"./widget-state-CKBw0Wsm.js";import{i as b}from"./with-story-router-Q554LWJ5.js";import{n as ne,t as re}from"./with-chart-theme-B1N_NgxT.js";import"./constants-C0J0AxbO.js";import{r as ie}from"./leaderboard-skeleton-CMcD99Nh.js";import{n as ae,r as oe,s as x}from"./register-report-mocks-DoU-6jmc.js";import{s as se}from"./locations-geo-chart-DZAB_0gM.js";import{a as ce,c as le,i as S,l as ue,n as de,o as fe,r as pe,s as me,t as he,u as ge}from"./with-widget-canvas-DJOx4lEW.js";var _e,C,w,T,E,D,ve=e((()=>{_e=`_root_g10fy_1`,C=`_content_g10fy_10`,w=`_locationContent_g10fy_20`,T=`_leaderboard_g10fy_29`,E=`_map_g10fy_36`,D={root:_e,content:C,locationContent:w,leaderboard:T,map:E}}));function O(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ye({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:k[t],s=u(e,a,{enabled:!i&&n===`opens`}),c=l(e,a,{enabled:!i&&n===`clicks`}),d=l(e,`link`,{enabled:i}),p=l(e,`user-content-link`,{enabled:i}),m=n===`clicks`?c:s,h=i?[d,p]:[m],g=d.data,_=p.data,v=m.data,y=(0,o.useMemo)(()=>(i?[...O(g).filter(e=>!e.link),...O(_).filter(e=>!!e.link)].sort(f):O(v)).map((e,t)=>({...e,id:t})),[i,g,_,v]);return{allRows:y,rows:(0,o.useMemo)(()=>y.slice(0,r>0?r:void 0),[y,r]),isLoading:h.some(e=>e.isLoading),isFetching:h.some(e=>e.isFetching),isError:h.some(e=>e.isError&&e.data===void 0),csvIsError:h.some(e=>e.isError),csvIsPlaceholderData:h.some(e=>e.isPlaceholderData),refetch:()=>h.forEach(e=>e.refetch())}}var k,be=e((()=>{p(),s(),k={countries:`country`,devices:`device`,clients:`client`}}));function xe(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Se(e,t){return e.map(e=>{let n=t===`countries`?{kind:`flag`,url:e.countryCode?y(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},r=t===`links`?ee(e.link):null;return{id:String(e.id),...se({label:e.label,media:n,action:r?{kind:`link`,href:r}:{kind:`static`}}),currentValue:e.value}})}function Ce(e){switch(e){case`devices`:return t(`Devices`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`Email clients`,`jetpack-premium-analytics-pkg`);case`links`:return t(`Links`,`jetpack-premium-analytics-pkg`);default:return t(`Countries`,`jetpack-premium-analytics-pkg`)}}function we(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Te(e,n){let r={countries:t(`Country`,`jetpack-premium-analytics-pkg`),devices:t(`Device`,`jetpack-premium-analytics-pkg`),clients:t(`Email client`,`jetpack-premium-analytics-pkg`),links:t(`Link`,`jetpack-premium-analytics-pkg`)},i=[{label:r[e]??r.countries,getValue:e=>e.label},{label:t(e===`links`||n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`),getValue:e=>e.value}];return e===`links`?[...i,{label:t(`URL`,`jetpack-premium-analytics-pkg`),getValue:e=>e.link??``}]:i}function Ee({view:e,metric:t,showMap:n}){let{reportParams:r}=h(),i=d(r.post_id),{allRows:a,rows:s,isLoading:c,isFetching:l,isError:u,csvIsError:f,csvIsPlaceholderData:p,refetch:m}=ye({postId:i,view:e,metric:t,max:10});return v({csv:{rows:a,columns:(0,o.useMemo)(()=>Te(e,t),[e,t]),filenamePrefix:`email-${i}-${e}-${e===`links`?`clicks`:t}`,hasDateRange:!1,status:{isLoading:c,isFetching:l,isError:f,isPlaceholderData:p}}}),(0,j.jsx)(N,{rows:s,mapRows:a,view:e,showMap:n,metric:t,isLoading:c,isFetching:l,isError:u,hasEmail:i>0,onRetry:m})}function A({attributes:e={}}){return(0,j.jsx)(g,{attributes:e,children:(0,j.jsx)(Ee,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var j,M,N,De=e((()=>{p(),b(),a(),s(),n(),ve(),be(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:a=!1,metric:s=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:p})=>{let m=_(),h=(0,o.useMemo)(()=>Se(e,r),[e,r]),g=(0,o.useMemo)(()=>xe(n,s),[n,s]),[v,y]=(0,o.useState)(),ee=i(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);y(t=>t===e?t:e)}}),b=a&&r===`countries`&&g.length>1&&(v??0)>=720;return(0,j.jsx)(`div`,{ref:ee,className:D.root,children:(0,j.jsx)(te,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{description:f?we(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsxs)(`div`,{className:b?D.locationContent:D.content,children:[(0,j.jsx)(ie,{className:D.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:M,columns:{label:Ce(r),metric:r===`links`?`clicks`:s}}),b&&(0,j.jsx)(`div`,{className:D.map,"data-testid":`email-breakdown-map`,children:(0,j.jsx)(c,{data:g,ariaLabel:m})})]})})})}})),P,Oe=e((()=>{P={attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),F,ke,I,L,R,z,Ae,je,Me=e((()=>{F=`jpa/email-breakdown`,ke=`jpa/envelope`,I=`Email breakdown`,L=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,R={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},z=`stats`,Ae=`framed`,je={name:F,icon:ke,title:I,description:L,help:R,category:z,presentation:Ae}}));function Ne({view:e,metric:t,showMap:n}){return(0,V.jsx)(A,{attributes:{reportParams:{...m(),post_id:H},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(A,{attributes:{reportParams:{...m(!1),post_id:e},view:`countries`,metric:`opens`}})}function Pe({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(le,{...r,widgetType:ce(je,P),renderModule:Fe,renderComponent:A,attributes:{reportParams:{...m(!0),post_id:H},view:e,metric:t,showMap:n}})}var V,Fe,H,U,W,G,K,Ie,q,J,Y,X,Z,Q,$,Le;e((()=>{p(),ae(),re(),ue(),fe(),pe(),De(),Oe(),Me(),V=r(),oe(),Fe=`storybook/email-breakdown`,H=1234,U=[`countries`,`devices`,`clients`,`links`],W=[`opens`,`clicks`],G=`802px`,K=(e,t)=>(0,V.jsx)(he,{mode:de(t),width:t.args.showMap&&t.args.view===`countries`?G:void 0,children:(0,V.jsx)(e,{})}),Ie={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:A,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[ne]},q={render:Ne,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:Ne,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>B(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`loading`),()=>x(`stats/opens/emails`,null))},X={render:()=>B(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`error`),()=>x(`stats/opens/emails`,null))},Z={render:()=>B(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`empty`),()=>x(`stats/opens/emails`,null))},Q={render:()=>(0,V.jsx)(A,{attributes:{reportParams:m(!1),view:`countries`}}),decorators:[S]},$={tags:[`widget-dashboard`],render:e=>(0,V.jsx)(Pe,{...e}),args:{...me,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...ge,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},Le=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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
}`,...$.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as LocationClicksWithMap,Q as NoEmailSelected,$ as WidgetDashboardWithWidget,Le as __namedExportsOrder,Ie as default};