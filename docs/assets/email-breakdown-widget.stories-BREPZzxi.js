import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{D as i,a}from"./build-module-CPyY8_lO.js";import{ou as o,vu as s}from"./build-module-D8x1-0PG.js";import{t as c}from"./geo-chart-DHU7cBJ3.js";import{J as l,Sn as u,bn as d,q as f,rn as p,t as m}from"./src-BcILQ8ng.js";import{B as h,I as g,q as _,rn as v}from"./charts-provider-C5HA2SSg.js";import{a as y}from"./src-2y_BLceg.js";import{t as ee}from"./widget-state-DnbF8hrz.js";import{i as te}from"./with-story-router-C7WVHY_h.js";import{n as b,t as ne}from"./with-chart-theme-TeNfqQsf.js";import"./constants-JU419spr.js";import{r as re}from"./leaderboard-skeleton-_1NaYp8K.js";import{n as ie,r as ae,s as x}from"./register-report-mocks-DEKgkFm4.js";import{s as oe}from"./locations-geo-chart-BcxMoNtJ.js";import{a as se,c as ce,i as S,l as le,n as ue,o as de,r as fe,s as pe,t as me,u as he}from"./with-widget-canvas-DoZ3Ea1y.js";var ge,_e,ve,C,w,T,ye=e((()=>{ge=`_root_g10fy_1`,_e=`_content_g10fy_10`,ve=`_locationContent_g10fy_20`,C=`_leaderboard_g10fy_29`,w=`_map_g10fy_36`,T={root:ge,content:_e,locationContent:ve,leaderboard:C,map:w}}));function E(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function be({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:D[t],o=l(e,a,{enabled:!i&&n===`opens`}),c=f(e,a,{enabled:!i&&n===`clicks`}),u=f(e,`link`,{enabled:i}),d=f(e,`user-content-link`,{enabled:i}),m=n===`clicks`?c:o,h=i?[u,d]:[m],g=u.data,_=d.data,v=m.data,y=(0,s.useMemo)(()=>(i?[...E(g).filter(e=>!e.link),...E(_).filter(e=>!!e.link)].sort(p):E(v)).map((e,t)=>({...e,id:t})),[i,g,_,v]);return{allRows:y,rows:(0,s.useMemo)(()=>y.slice(0,r>0?r:void 0),[y,r]),isLoading:h.some(e=>e.isLoading),isFetching:h.some(e=>e.isFetching),isError:h.some(e=>e.isError&&e.data===void 0),refetch:()=>h.forEach(e=>e.refetch())}}var D,xe=e((()=>{m(),o(),D={countries:`country`,devices:`device`,clients:`client`}}));function Se(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Ce(e,t){return e.map(e=>{let n=t===`countries`?{kind:`flag`,url:e.countryCode?v(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},r=t===`links`?y(e.link):null;return{id:String(e.id),...oe({label:e.label,media:n,action:r?{kind:`link`,href:r}:{kind:`static`}}),currentValue:e.value}})}function we(e){switch(e){case`devices`:return t(`Devices`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`Email clients`,`jetpack-premium-analytics-pkg`);case`links`:return t(`Links`,`jetpack-premium-analytics-pkg`);default:return t(`Countries`,`jetpack-premium-analytics-pkg`)}}function Te(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Ee({view:e,metric:t,showMap:n}){let{reportParams:r}=h(),i=d(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=be({postId:i,view:e,metric:t,max:10});return(0,k.jsx)(j,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function O({attributes:e={}}){return(0,k.jsx)(g,{attributes:e,children:(0,k.jsx)(Ee,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var k,A,j,De=e((()=>{m(),te(),a(),o(),n(),ye(),xe(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:a=!1,metric:o=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:p})=>{let m=_(),h=(0,s.useMemo)(()=>Ce(e,r),[e,r]),g=(0,s.useMemo)(()=>Se(n,o),[n,o]),[v,y]=(0,s.useState)(),te=i(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);y(t=>t===e?t:e)}}),b=a&&r===`countries`&&g.length>1&&(v??0)>=720;return(0,k.jsx)(`div`,{ref:te,className:T.root,children:(0,k.jsx)(ee,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{description:f?Te(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsxs)(`div`,{className:b?T.locationContent:T.content,children:[(0,k.jsx)(re,{className:T.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:A,columns:{label:we(r),metric:r===`links`?`clicks`:o}}),b&&(0,k.jsx)(`div`,{className:T.map,"data-testid":`email-breakdown-map`,children:(0,k.jsx)(c,{data:g,ariaLabel:m})})]})})})}})),M,Oe=e((()=>{M={attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),N,P,F,I,L,R,z,B,ke=e((()=>{N=`jpa/email-breakdown`,P=`jpa/envelope`,F=`Email breakdown`,I=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,L={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function Ae({view:e,metric:t,showMap:n}){return(0,H.jsx)(O,{attributes:{reportParams:{...u(),post_id:U},view:e,metric:t,showMap:n}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:{...u(!1),post_id:e},view:`countries`,metric:`opens`}})}function je({view:e,metric:t,showMap:n,...r}){return(0,H.jsx)(ce,{...r,widgetType:se(B,M),renderModule:Me,renderComponent:O,attributes:{reportParams:{...u(!0),post_id:U},view:e,metric:t,showMap:n}})}var H,Me,U,W,G,Ne,K,Pe,q,J,Y,X,Z,Q,$,Fe;e((()=>{m(),ie(),ne(),le(),de(),fe(),De(),Oe(),ke(),H=r(),ae(),Me=`storybook/email-breakdown`,U=1234,W=[`countries`,`devices`,`clients`,`links`],G=[`opens`,`clicks`],Ne=`802px`,K=(e,t)=>(0,H.jsx)(me,{mode:ue(t),width:t.args.showMap&&t.args.view===`countries`?Ne:void 0,children:(0,H.jsx)(e,{})}),Pe={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:O,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[b]},q={render:Ae,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:Ae,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>V(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`loading`),()=>x(`stats/opens/emails`,null))},X={render:()=>V(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`error`),()=>x(`stats/opens/emails`,null))},Z={render:()=>V(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`empty`),()=>x(`stats/opens/emails`,null))},Q={render:()=>(0,H.jsx)(O,{attributes:{reportParams:u(!1),view:`countries`}}),decorators:[S]},$={tags:[`widget-dashboard`],render:e=>(0,H.jsx)(je,{...e}),args:{...pe,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...he,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},Fe=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as LocationClicksWithMap,Q as NoEmailSelected,$ as WidgetDashboardWithWidget,Fe as __namedExportsOrder,Pe as default};