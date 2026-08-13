import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{js as c,n as l}from"./build-module-CDRs4YxF.js";import{J as u,P as d,Q as f,Y as p,nt as m,ot as h}from"./report-metric-aApf3fEZ.js";import{t as g}from"./geo-chart-ChY-rxrv.js";import{n as ee,t as _}from"./with-chart-theme-BYYadoUf.js";import{$ as v,Dt as y,Fr as te,It as b,Lt as ne,P as re,_r as x,xr as ie}from"./chart-tooltip-2PM2X2w-.js";import{t as ae}from"./leaderboard-chart-CPcgf3MO.js";import{r as oe}from"./src-BQZ2eT19.js";import{t as se}from"./widget-state-BY9OAfMP.js";import{C as ce,D as le,E as ue,S as de,T as fe,b as pe,t as me,w as he,x as S}from"./src-ZkTwF5EY.js";import{n as ge,t as _e}from"./src-DgGJMYYg.js";var C,w,T,E,D,O,ve=e((()=>{C=`_root_g10fy_1`,w=`_content_g10fy_10`,T=`_locationContent_g10fy_20`,E=`_leaderboard_g10fy_29`,D=`_map_g10fy_36`,O={root:C,content:w,locationContent:T,leaderboard:E,map:D}}));function k(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ye({postId:e,view:t,metric:n,max:r}){let a=t===`links`,o=a?`country`:A[t],s=ne(e,o,{enabled:!a&&n===`opens`}),c=b(e,o,{enabled:!a&&n===`clicks`}),l=b(e,`link`,{enabled:a}),u=b(e,`user-content-link`,{enabled:a}),d=n===`clicks`?c:s,f=a?[l,u]:[d],p=l.data,m=u.data,h=d.data,g=(0,i.useMemo)(()=>(a?[...k(p).filter(e=>!e.link),...k(m).filter(e=>!!e.link)].sort(ie):k(h)).map((e,t)=>({...e,id:t})),[a,p,m,h]);return{allRows:g,rows:(0,i.useMemo)(()=>g.slice(0,r>0?r:void 0),[g,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var A,be=e((()=>{y(),a(),A={countries:`country`,devices:`device`,clients:`client`}}));function xe(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Se(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?re(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?oe(e.link):null;return{id:String(e.id),...d({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:v(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Ce(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function we({view:e,metric:t,max:n,showMap:r}){let{reportParams:i}=h(),a=te(i.post_id),{allRows:o,rows:s,isLoading:c,isFetching:l,isError:u,refetch:d}=ye({postId:a,view:e,metric:t,max:n});return(0,M.jsx)(F,{rows:s,mapRows:o,view:e,showMap:r,metric:t,isLoading:c,isFetching:l,isError:u,hasEmail:a>0,onRetry:d})}function j({attributes:e={}}){return(0,M.jsx)(m,{attributes:e,children:(0,M.jsx)(we,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10,showMap:e.showMap??!1})})}var M,N,P,F,Te=e((()=>{y(),me(),o(),a(),n(),l(),ve(),be(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=720,F=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:a=!1,metric:o=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:p})=>{let m=(0,i.useMemo)(()=>Se(e,r),[e,r]),h=(0,i.useMemo)(()=>xe(n,o),[n,o]),[ee,_]=(0,i.useState)(),v=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);_(t=>t===e?t:e)}}),y=a&&r===`countries`&&h.length>1&&(ee??0)>=P;return(0,M.jsx)(`div`,{ref:v,className:O.root,children:(0,M.jsx)(se,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{icon:c,description:f?Ce(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsxs)(`div`,{className:y?O.locationContent:O.content,children:[(0,M.jsx)(ae,{className:O.leaderboard,data:m,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:N}),y&&(0,M.jsx)(`div`,{className:O.map,"data-testid":`email-breakdown-map`,children:(0,M.jsx)(g,{data:h})})]})})})}})),I,Ee=e((()=>{n(),l(),_e(),I={icon:c,attributes:[{id:`view`,label:t(`Break down by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ge,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`countries`},{label:t(`Devices`,`jetpack-premium-analytics-pkg`),value:`devices`},{label:t(`Email clients`,`jetpack-premium-analytics-pkg`),value:`clients`},{label:t(`Links`,`jetpack-premium-analytics-pkg`),value:`links`}]},{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ge,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}})),L,R,z,De,Oe,ke,Ae,je=e((()=>{L=`jpa/email-breakdown`,R=`Email breakdown`,z=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,De={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},Oe=`stats`,ke=`framed`,Ae={name:L,title:R,description:z,help:De,category:Oe,presentation:ke}}));function Me(e){return I.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function Ne({view:e,metric:t,showMap:n}){return(0,V.jsx)(j,{attributes:{reportParams:{...x(),post_id:H},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(j,{attributes:{reportParams:{...x(!1),post_id:e},view:`countries`,metric:`opens`}})}function Pe({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(fe,{...r,widgetType:de(Ae,I),renderModule:Fe,renderComponent:j,attributes:{reportParams:{...x(!0),post_id:H},view:e,metric:t,showMap:n}})}var V,Fe,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{y(),u(),_(),ue(),ce(),pe(),Te(),Ee(),je(),V=r(),p(),Fe=`storybook/email-breakdown`,H=1234,U=Me(`view`),W=Me(`metric`),G={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:j,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas."}}},decorators:[ee]},K={render:Ne,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[S]},q={render:Ne,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[S]},J={render:()=>B(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(f(`stats/opens/emails`,`loading`),()=>f(`stats/opens/emails`,null))},Y={render:()=>B(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(f(`stats/opens/emails`,`error`),()=>f(`stats/opens/emails`,null))},X={render:()=>B(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(f(`stats/opens/emails`,`empty`),()=>f(`stats/opens/emails`,null))},Z={render:()=>(0,V.jsx)(j,{attributes:{reportParams:x(!1),view:`countries`}}),decorators:[S]},Q={render:e=>(0,V.jsx)(Pe,{...e}),args:{...he,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...le,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'opens',
    showMap: false
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default populated state — the selected email broken down by country.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    view: 'countries',
    metric: 'clicks',
    showMap: true
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The optional map beside the countries leaderboard. No fixed composition
enables it anymore (the Email clicks Locations card is a plain leaderboard
per the design mocks); the story keeps the capability covered.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the envelope glyph
and the per-view "no data yet" copy).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,q as LocationClicksWithMap,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,G as default};