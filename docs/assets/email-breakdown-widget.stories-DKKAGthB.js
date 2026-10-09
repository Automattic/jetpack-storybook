import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-C3v6-Qcj.js";import{As as o,Vu as s,ku as c,t as l}from"./build-module-DNhkEVJn.js";import{t as u}from"./geo-chart-wvTjA9_U.js";import{An as d,Mn as f,R as p,pn as m,t as h,z as g}from"./src-DaK69sZi.js";import{Ut as _,_ as v,en as y,x as b}from"./charts-provider-NzRWn2Ym.js";import{a as ee}from"./src-CHbA2cqj.js";import{n as te,t as ne}from"./with-chart-theme-C-hU-GG7.js";import"./rows-DAmD2BmE.js";import{r as re}from"./leaderboard-skeleton-CW6B9hAw.js";import{n as ie,r as ae,s as x}from"./register-report-mocks-VJFbswj6.js";import{t as oe}from"./widget-state-B9pWNd0S.js";import{i as se}from"./leaderboard-D9cqX8_-.js";import{t as ce}from"./src-MCPGnmPw.js";import{a as le,g as ue,h as de,i as fe,m as pe,n as me,p as he,r as S,t as ge}from"./with-widget-canvas-CkfUJIiV.js";var C,w,T,_e,E,D,ve=e((()=>{C=`_root_g10fy_1`,w=`_content_g10fy_10`,T=`_locationContent_g10fy_20`,_e=`_leaderboard_g10fy_29`,E=`_map_g10fy_36`,D={root:C,content:w,locationContent:T,leaderboard:_e,map:E}}));function O(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ye({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:k[t],o=g(e,a,{enabled:!i&&n===`opens`}),c=p(e,a,{enabled:!i&&n===`clicks`}),l=p(e,`link`,{enabled:i}),u=p(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:o,f=i?[l,u]:[d],h=l.data,_=u.data,v=d.data,y=(0,s.useMemo)(()=>(i?[...O(h).filter(e=>!e.link),...O(_).filter(e=>!!e.link)].sort(m):O(v)).map((e,t)=>({...e,id:t})),[i,h,_,v]);return{allRows:y,rows:(0,s.useMemo)(()=>y.slice(0,r>0?r:void 0),[y,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var k,be=e((()=>{h(),c(),k={countries:`country`,devices:`device`,clients:`client`}}));function xe(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Se(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?_(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?ee(e.link):null;return{id:String(e.id),...se({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:y(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Ce(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function we({view:e,metric:t,showMap:n}){let{reportParams:r}=b(),i=d(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ye({postId:i,view:e,metric:t,max:10});return(0,j.jsx)(Ee,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function A({attributes:e={}}){return(0,j.jsx)(v,{attributes:e,children:(0,j.jsx)(we,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var j,Te,Ee,De=e((()=>{h(),ce(),i(),c(),n(),l(),ve(),be(),j=r(),Te={type:`number`,options:{useMultipliers:!0,decimals:0}},Ee=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:c=`opens`,isLoading:l=!1,isFetching:d=!1,isError:f=!1,hasEmail:p=!0,onRetry:m})=>{let h=(0,s.useMemo)(()=>Se(e,r),[e,r]),g=(0,s.useMemo)(()=>xe(n,c),[n,c]),[_,v]=(0,s.useState)(),y=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);v(t=>t===e?t:e)}}),b=i&&r===`countries`&&g.length>1&&(_??0)>=720;return(0,j.jsx)(`div`,{ref:y,className:D.root,children:(0,j.jsx)(oe,{isLoading:l,isFetching:d,isError:f,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]:void 0},empty:{icon:o,description:p?Ce(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsxs)(`div`,{className:b?D.locationContent:D.content,children:[(0,j.jsx)(re,{className:D.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:Te}),b&&(0,j.jsx)(`div`,{className:D.map,"data-testid":`email-breakdown-map`,children:(0,j.jsx)(u,{data:g})})]})})})}})),Oe,ke=e((()=>{l(),Oe={icon:o,attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),M,N,P,F,I,L,R,Ae=e((()=>{M=`jpa/email-breakdown`,N=`Email breakdown`,P=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,F={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({view:e,metric:t,showMap:n}){return(0,V.jsx)(A,{attributes:{reportParams:{...f(),post_id:U},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(A,{attributes:{reportParams:{...f(!1),post_id:e},view:`countries`,metric:`opens`}})}function je({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(pe,{...r,widgetType:fe(R,Oe),renderModule:H,renderComponent:A,attributes:{reportParams:{...f(!0),post_id:U},view:e,metric:t,showMap:n}})}var V,H,U,W,G,Me,K,Ne,q,J,Y,X,Z,Q,$,Pe;e((()=>{h(),ie(),ne(),de(),le(),me(),De(),ke(),Ae(),V=r(),ae(),H=`storybook/email-breakdown`,U=1234,W=[`countries`,`devices`,`clients`,`links`],G=[`opens`,`clicks`],Me=`802px`,K=(e,{args:t})=>(0,V.jsx)(ge,{width:t.showMap&&t.view===`countries`?Me:void 0,children:(0,V.jsx)(e,{})}),Ne={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:A,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[te]},q={render:z,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:z,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>B(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`loading`),()=>x(`stats/opens/emails`,null))},X={render:()=>B(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`error`),()=>x(`stats/opens/emails`,null))},Z={render:()=>B(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`empty`),()=>x(`stats/opens/emails`,null))},Q={render:()=>(0,V.jsx)(A,{attributes:{reportParams:f(!1),view:`countries`}}),decorators:[S]},$={render:e=>(0,V.jsx)(je,{...e}),args:{...he,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...ue,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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