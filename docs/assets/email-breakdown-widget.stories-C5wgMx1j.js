import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-DQe4AOzJ.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{t as i,y as a}from"./build-module-CT-mI-B8.js";import{Mu as o,bu as s}from"./build-module-BI3_PVVO.js";import{F as c,Q as l,gn as u,in as d,z as f}from"./charts-provider-CXD9czsp.js";import{t as p}from"./geo-chart-CUeyWtHa.js";import{G as m,K as h,Xt as g,hn as _,pn as v,t as y}from"./src-BEwaewMJ.js";import{a as b}from"./src-Ojbc_lr1.js";import{t as ee}from"./widget-state-BHtIizq9.js";import{i as x}from"./with-story-router-DxdHc1hO.js";import{n as te,t as ne}from"./with-chart-theme-DdqtgIuA.js";import"./constants-B9OTkkI1.js";import{r as re}from"./leaderboard-skeleton-BSMHFXct.js";import{n as ie,r as ae,s as S}from"./register-report-mocks-D47Rougd.js";import{s as oe}from"./locations-geo-chart-BROEMqI_.js";import{a as se,g as ce,h as le,i as ue,m as de,n as fe,p as pe,r as C,t as me}from"./with-widget-canvas-DLx8XNU3.js";var w,T,E,D,O,k,he=e((()=>{w=`_root_g10fy_1`,T=`_content_g10fy_10`,E=`_locationContent_g10fy_20`,D=`_leaderboard_g10fy_29`,O=`_map_g10fy_36`,k={root:w,content:T,locationContent:E,leaderboard:D,map:O}}));function A(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ge({postId:e,view:t,metric:n,max:r}){let i=t===`links`,a=i?`country`:j[t],s=h(e,a,{enabled:!i&&n===`opens`}),c=m(e,a,{enabled:!i&&n===`clicks`}),l=m(e,`link`,{enabled:i}),u=m(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:s,f=i?[l,u]:[d],p=l.data,_=u.data,v=d.data,y=(0,o.useMemo)(()=>(i?[...A(p).filter(e=>!e.link),...A(_).filter(e=>!!e.link)].sort(g):A(v)).map((e,t)=>({...e,id:t})),[i,p,_,v]);return{allRows:y,rows:(0,o.useMemo)(()=>y.slice(0,r>0?r:void 0),[y,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var j,_e=e((()=>{y(),s(),j={countries:`country`,devices:`device`,clients:`client`}}));function ve(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function ye(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?u(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?b(e.link):null;return{id:String(e.id),...oe({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:d(e.value,n),previousValue:0,previousShare:0,delta:0}})}function be(e){switch(e){case`devices`:return t(`Devices`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`Email clients`,`jetpack-premium-analytics-pkg`);case`links`:return t(`Links`,`jetpack-premium-analytics-pkg`);default:return t(`Countries`,`jetpack-premium-analytics-pkg`)}}function xe(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Se({view:e,metric:t,showMap:n}){let{reportParams:r}=f(),i=v(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ge({postId:i,view:e,metric:t,max:10});return(0,N.jsx)(F,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:u})}function M({attributes:e={}}){return(0,N.jsx)(c,{attributes:e,children:(0,N.jsx)(Se,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var N,P,F,Ce=e((()=>{y(),x(),i(),s(),n(),he(),_e(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:i=!1,metric:s=`opens`,isLoading:c=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:m})=>{let h=t(`Email breakdown`,`jetpack-premium-analytics-pkg`),g=(0,o.useMemo)(()=>ye(e,r),[e,r]),_=(0,o.useMemo)(()=>ve(n,s),[n,s]),[v,y]=(0,o.useState)(),b=a(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);y(t=>t===e?t:e)}}),x=i&&r===`countries`&&_.length>1&&(v??0)>=720;return(0,N.jsx)(`div`,{ref:b,className:k.root,children:(0,N.jsx)(ee,{isLoading:c,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]:void 0},empty:{description:f?xe(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsxs)(`div`,{className:x?k.locationContent:k.content,children:[(0,N.jsx)(re,{className:k.leaderboard,data:g,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:P,columns:{label:be(r),metric:r===`links`?`clicks`:s},chartTitle:h}),x&&(0,N.jsx)(`div`,{className:k.map,"data-testid":`email-breakdown-map`,children:(0,N.jsx)(p,{data:_,ariaLabel:l(h)})})]})})})}})),I,we=e((()=>{I={attributes:[],example:{attributes:{view:`countries`,metric:`opens`}}}})),L,R,z,Te,Ee,De,Oe,ke,Ae=e((()=>{L=`jpa/email-breakdown`,R=`jpa/envelope`,z=`Email breakdown`,Te=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,Ee={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},De=`stats`,Oe=`framed`,ke={name:L,icon:R,title:z,description:Te,help:Ee,category:De,presentation:Oe}}));function je({view:e,metric:t,showMap:n}){return(0,V.jsx)(M,{attributes:{reportParams:{..._(),post_id:H},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(M,{attributes:{reportParams:{..._(!1),post_id:e},view:`countries`,metric:`opens`}})}function Me({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(de,{...r,widgetType:ue(ke,I),renderModule:Ne,renderComponent:M,attributes:{reportParams:{..._(!0),post_id:H},view:e,metric:t,showMap:n}})}var V,Ne,H,U,W,Pe,G,Fe,K,q,J,Y,X,Z,Q,$;e((()=>{y(),ie(),ne(),le(),se(),fe(),Ce(),we(),Ae(),V=r(),ae(),Ne=`storybook/email-breakdown`,H=1234,U=[`countries`,`devices`,`clients`,`links`],W=[`opens`,`clicks`],Pe=`802px`,G=(e,{args:t})=>(0,V.jsx)(me,{width:t.showMap&&t.view===`countries`?Pe:void 0,children:(0,V.jsx)(e,{})}),Fe={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:M,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:'The "Email breakdown" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. Neither `view` nor `metric` is user-editable — the post detail page pins both per card, so the host renders no settings affordance. The `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas.'}}},decorators:[te]},K={render:je,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[G]},q={render:je,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[G]},J={render:()=>B(5601),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(`stats/opens/emails`,`loading`),()=>S(`stats/opens/emails`,null))},Y={render:()=>B(5602),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(`stats/opens/emails`,`error`),()=>S(`stats/opens/emails`,null))},X={render:()=>B(5603),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(S(`stats/opens/emails`,`empty`),()=>S(`stats/opens/emails`,null))},Z={render:()=>(0,V.jsx)(M,{attributes:{reportParams:_(!1),view:`countries`}}),decorators:[C]},Q={render:e=>(0,V.jsx)(Me,{...e}),args:{...pe,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...ce,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},$=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'opens',
    showMap: false
  },
  decorators: [withMapAwareWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default populated state — the selected email broken down by country.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'clicks',
    showMap: true
  },
  decorators: [withMapAwareWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The country map beside the countries leaderboard, as the two-column
"Locations" card on the post detail Email clicks tab renders it. The
widget only mounts the map at container widths of 720px and up, so the canvas
widens to a two-column card while \`showMap\` is on for the countries view.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailBreakdownForState(5601),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'loading');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailBreakdownForState(5602),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'error');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailBreakdownForState(5603),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'empty');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <EmailBreakdownRender attributes={{
    reportParams: getDefaultQueryParams(false),
    view: 'countries'
  }} />,
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:'No email selected: `reportParams.post_id` is unset, so no request is made and\nthe empty state prompts to select an email instead of "no data yet".',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,X as Empty,Y as Error,J as Loading,q as LocationClicksWithMap,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Fe as default};