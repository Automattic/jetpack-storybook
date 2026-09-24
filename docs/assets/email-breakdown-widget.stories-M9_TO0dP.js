import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{t as i,y as a}from"./build-module-BTtYwVLI.js";import{Ms as o,Uu as s,ju as c,t as l}from"./build-module-2iv4IIRq.js";import{m as u,v as d}from"./hooks-CoL__6GQ.js";import{t as f}from"./geo-chart-C7pOCaiL.js";import{$t as p,Mn as m,on as ee,t as h,v as g,y as te}from"./src-N7kxR1RU.js";import{Et as _,st as v}from"./helpers-Cm5ZV6e7.js";import{n as ne,t as re}from"./with-chart-theme-6iXqWyCu.js";import"./constants-B1kGztHF.js";import{r as ie}from"./leaderboard-skeleton-D4A1VzGH.js";import{c as y,i as ae,r as oe}from"./register-report-mocks-Bc1uuzDP.js";import{j as se}from"./report-metric-Ad5LWGgc.js";import{a as ce}from"./src-D_dm9-Xz.js";import{t as le}from"./widget-state-a0l-BqGx.js";import{t as ue}from"./src-BnLaj3c2.js";import{a as de,d as fe,f as pe,i as me,n as he,p as ge,r as b,t as _e,u as ve}from"./with-widget-canvas-D92XTD_i.js";var x,S,C,w,T,E,ye=e((()=>{x=`_root_g10fy_1`,S=`_content_g10fy_10`,C=`_locationContent_g10fy_20`,w=`_leaderboard_g10fy_29`,T=`_map_g10fy_36`,E={root:x,content:S,locationContent:C,leaderboard:w,map:T}}));function D(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function be({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:O[t],o=te(e,a,{enabled:!i&&n===`opens`}),c=g(e,a,{enabled:!i&&n===`clicks`}),l=g(e,`link`,{enabled:i}),u=g(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:o,f=i?[l,u]:[d],p=l.data,m=u.data,h=d.data,_=(0,s.useMemo)(()=>(i?[...D(p).filter(e=>!e.link),...D(m).filter(e=>!!e.link)].sort(ee):D(h)).map((e,t)=>({...e,id:t})),[i,p,m,h]);return{allRows:_,rows:(0,s.useMemo)(()=>_.slice(0,r>0?r:void 0),[_,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var O,xe=e((()=>{h(),c(),O={countries:`country`,devices:`device`,clients:`client`}}));function Se(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Ce(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?v(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?ce(e.link):null;return{id:String(e.id),...se({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:_(e.value,n),previousValue:0,previousShare:0,delta:0}})}function we(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Te({view:e,metric:t,showMap:n}){let{reportParams:r}=d(),i=m(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=be({postId:i,view:e,metric:t,max:10});return(0,A.jsx)(De,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function k({attributes:e={}}){return(0,A.jsx)(u,{attributes:e,children:(0,A.jsx)(Te,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var A,Ee,De,Oe=e((()=>{h(),ue(),i(),c(),n(),l(),ye(),xe(),A=r(),Ee={type:`number`,options:{useMultipliers:!0,decimals:0}},De=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:c=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:p=!0,onRetry:m})=>{let ee=(0,s.useMemo)(()=>Ce(e,r),[e,r]),h=(0,s.useMemo)(()=>Se(n,c),[n,c]),[g,te]=(0,s.useState)(),_=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);te(t=>t===e?t:e)}}),v=i&&r===`countries`&&h.length>1&&(g??0)>=720;return(0,A.jsx)(`div`,{ref:_,className:E.root,children:(0,A.jsx)(le,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]:void 0},empty:{icon:o,description:p?we(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsxs)(`div`,{className:v?E.locationContent:E.content,children:[(0,A.jsx)(ie,{className:E.leaderboard,data:ee,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:Ee}),v&&(0,A.jsx)(`div`,{className:E.map,"data-testid":`email-breakdown-map`,children:(0,A.jsx)(f,{data:h})})]})})})}})),ke,Ae=e((()=>{l(),ke={icon:o,attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),j,M,N,P,F,I,L,je=e((()=>{j=`jpa/email-breakdown`,M=`Email breakdown`,N=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,P={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},F=`stats`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R({view:e,metric:t,showMap:n}){return(0,B.jsx)(k,{attributes:{reportParams:{...p(),post_id:H},view:e,metric:t,showMap:n}})}function z(e){return(0,B.jsx)(k,{attributes:{reportParams:{...p(!1),post_id:e},view:`countries`,metric:`opens`}})}function Me({view:e,metric:t,showMap:n,...r}){return(0,B.jsx)(fe,{...r,widgetType:me(L,ke),renderModule:V,renderComponent:k,attributes:{reportParams:{...p(!0),post_id:H},view:e,metric:t,showMap:n}})}var B,V,H,U,W,G,K,Ne,q,J,Y,X,Z,Q,$,Pe;e((()=>{h(),oe(),re(),pe(),de(),he(),Oe(),Ae(),je(),B=r(),ae(),V=`storybook/email-breakdown`,H=1234,U=[`countries`,`devices`,`clients`,`links`],W=[`opens`,`clicks`],G=`802px`,K=(e,{args:t})=>(0,B.jsx)(_e,{width:t.showMap&&t.view===`countries`?G:void 0,children:(0,B.jsx)(e,{})}),Ne={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:k,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[ne]},q={render:R,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:R,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>z(5601),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`loading`),()=>y(`stats/opens/emails`,null))},X={render:()=>z(5602),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`error`),()=>y(`stats/opens/emails`,null))},Z={render:()=>z(5603),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`empty`),()=>y(`stats/opens/emails`,null))},Q={render:()=>(0,B.jsx)(k,{attributes:{reportParams:p(!1),view:`countries`}}),decorators:[b]},$={render:e=>(0,B.jsx)(Me,{...e}),args:{...ve,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...ge,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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