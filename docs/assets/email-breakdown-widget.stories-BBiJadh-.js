import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{t as i,y as a}from"./build-module-CT-mI-B8.js";import{Mu as o,bu as s}from"./build-module-BI3_PVVO.js";import{$ as c,B as l,I as u,hn as d}from"./charts-provider-D6OKzkvv.js";import{t as f}from"./geo-chart-COiVtcvS.js";import{$t as ee,G as p,K as m,gn as h,t as g,vn as _}from"./src-BIvck5w8.js";import{a as v}from"./src-DLsgqff_.js";import{t as te}from"./widget-state-BygCceVJ.js";import{i as y}from"./with-story-router-B1BxcZ6u.js";import{n as b,t as ne}from"./with-chart-theme-BNl1tQD3.js";import"./constants-B9OTkkI1.js";import{r as re}from"./leaderboard-skeleton-Cwkv6Nvj.js";import{n as ie,r as ae,s as x}from"./register-report-mocks-CHPOiMpA.js";import{s as oe}from"./locations-geo-chart-DeRwkkX5.js";import{a as se,g as ce,h as le,i as ue,m as de,n as fe,p as pe,r as S,t as me}from"./with-widget-canvas-Bty13YgO.js";var he,ge,_e,C,w,T,ve=e((()=>{he=`_root_g10fy_1`,ge=`_content_g10fy_10`,_e=`_locationContent_g10fy_20`,C=`_leaderboard_g10fy_29`,w=`_map_g10fy_36`,T={root:he,content:ge,locationContent:_e,leaderboard:C,map:w}}));function E(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ye({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:D[t],s=m(e,a,{enabled:!i&&n===`opens`}),c=p(e,a,{enabled:!i&&n===`clicks`}),l=p(e,`link`,{enabled:i}),u=p(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:s,f=i?[l,u]:[d],h=l.data,g=u.data,_=d.data,v=(0,o.useMemo)(()=>(i?[...E(h).filter(e=>!e.link),...E(g).filter(e=>!!e.link)].sort(ee):E(_)).map((e,t)=>({...e,id:t})),[i,h,g,_]);return{allRows:v,rows:(0,o.useMemo)(()=>v.slice(0,r>0?r:void 0),[v,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var D,be=e((()=>{g(),s(),D={countries:`country`,devices:`device`,clients:`client`}}));function xe(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Se(e,t){return e.map(e=>{let n=t===`countries`?{kind:`flag`,url:e.countryCode?d(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},r=t===`links`?v(e.link):null;return{id:String(e.id),...oe({label:e.label,media:n,action:r?{kind:`link`,href:r}:{kind:`static`}}),currentValue:e.value}})}function Ce(e){switch(e){case`devices`:return t(`Devices`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`Email clients`,`jetpack-premium-analytics-pkg`);case`links`:return t(`Links`,`jetpack-premium-analytics-pkg`);default:return t(`Countries`,`jetpack-premium-analytics-pkg`)}}function we(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Te({view:e,metric:t,showMap:n}){let{reportParams:r}=l(),i=h(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:u,refetch:d}=ye({postId:i,view:e,metric:t,max:10});return(0,k.jsx)(j,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:u,hasEmail:i>0,onRetry:d})}function O({attributes:e={}}){return(0,k.jsx)(u,{attributes:e,children:(0,k.jsx)(Te,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var k,A,j,Ee=e((()=>{g(),y(),i(),s(),n(),ve(),be(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:s=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:ee=!0,onRetry:p})=>{let m=t(`Email breakdown`,`jetpack-premium-analytics-pkg`),h=(0,o.useMemo)(()=>Se(e,r),[e,r]),g=(0,o.useMemo)(()=>xe(n,s),[n,s]),[_,v]=(0,o.useState)(),y=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);v(t=>t===e?t:e)}}),b=i&&r===`countries`&&g.length>1&&(_??0)>=720;return(0,k.jsx)(`div`,{ref:y,className:T.root,children:(0,k.jsx)(te,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{description:ee?we(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsxs)(`div`,{className:b?T.locationContent:T.content,children:[(0,k.jsx)(re,{className:T.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:Ce(r),metric:r===`links`?`clicks`:s},chartTitle:m}),b&&(0,k.jsx)(`div`,{className:T.map,"data-testid":`email-breakdown-map`,children:(0,k.jsx)(f,{data:g,ariaLabel:c(m)})})]})})})}})),M,De=e((()=>{M={attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),N,P,F,I,L,R,z,B,Oe=e((()=>{N=`jpa/email-breakdown`,P=`jpa/envelope`,F=`Email breakdown`,I=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,L={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function ke({view:e,metric:t,showMap:n}){return(0,H.jsx)(O,{attributes:{reportParams:{..._(),post_id:U},view:e,metric:t,showMap:n}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:{..._(!1),post_id:e},view:`countries`,metric:`opens`}})}function Ae({view:e,metric:t,showMap:n,...r}){return(0,H.jsx)(de,{...r,widgetType:ue(B,M),renderModule:je,renderComponent:O,attributes:{reportParams:{..._(!0),post_id:U},view:e,metric:t,showMap:n}})}var H,je,U,W,G,Me,K,Ne,q,J,Y,X,Z,Q,$,Pe;e((()=>{g(),ie(),ne(),le(),se(),fe(),Ee(),De(),Oe(),H=r(),ae(),je=`storybook/email-breakdown`,U=1234,W=[`countries`,`devices`,`clients`,`links`],G=[`opens`,`clicks`],Me=`802px`,K=(e,{args:t})=>(0,H.jsx)(me,{width:t.showMap&&t.view===`countries`?Me:void 0,children:(0,H.jsx)(e,{})}),Ne={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:O,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[b]},q={render:ke,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:ke,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>V(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`loading`),()=>x(`stats/opens/emails`,null))},X={render:()=>V(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`error`),()=>x(`stats/opens/emails`,null))},Z={render:()=>V(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`empty`),()=>x(`stats/opens/emails`,null))},Q={render:()=>(0,H.jsx)(O,{attributes:{reportParams:_(!1),view:`countries`}}),decorators:[S]},$={render:e=>(0,H.jsx)(Ae,{...e}),args:{...pe,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...ce,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},Pe=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as LocationClicksWithMap,Q as NoEmailSelected,$ as WidgetDashboardWithWidget,Pe as __namedExportsOrder,Ne as default};