import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{t as o,y as s}from"./build-module-BShXUI3N.js";import{js as c,n as l}from"./build-module-CDRs4YxF.js";import{$ as u,K as d,M as f,Y as p,q as m,rt as h}from"./report-metric-S-I1z2Xc.js";import{t as g}from"./geo-chart-CO11Qb7H.js";import{n as ee,t as _}from"./with-chart-theme-ng3rBqgf.js";import{A as te,Ct as v,Mt as y,Nt as ne,Y as re,_r as ie,jr as ae,pr as b}from"./chart-tooltip-11ffJEW5.js";import{t as oe}from"./leaderboard-chart-046pSWAA.js";import{r as se}from"./src-6ZEvv3co.js";import{C as ce,D as le,E as ue,S as de,T as fe,b as pe,t as me,w as he,x}from"./src-Ch3Grdxe.js";import{t as ge}from"./widget-state-Ci_-LVaS.js";import{n as _e,t as ve}from"./src-Bkg8YjmB.js";var S,C,w,T,E,D,ye=e((()=>{S=`_root_g10fy_1`,C=`_content_g10fy_10`,w=`_locationContent_g10fy_20`,T=`_leaderboard_g10fy_29`,E=`_map_g10fy_36`,D={root:S,content:C,locationContent:w,leaderboard:T,map:E}}));function O(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function be({postId:e,view:t,metric:n,max:r}){let a=t===`links`,o=a?`country`:k[t],s=ne(e,o,{enabled:!a&&n===`opens`}),c=y(e,o,{enabled:!a&&n===`clicks`}),l=y(e,`link`,{enabled:a}),u=y(e,`user-content-link`,{enabled:a}),d=n===`clicks`?c:s,f=a?[l,u]:[d],p=l.data,m=u.data,h=d.data,g=(0,i.useMemo)(()=>(a?[...O(p).filter(e=>!e.link),...O(m).filter(e=>!!e.link)].sort(ie):O(h)).map((e,t)=>({...e,id:t})),[a,p,m,h]);return{allRows:g,rows:(0,i.useMemo)(()=>g.slice(0,r>0?r:void 0),[g,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var k,xe=e((()=>{v(),a(),k={countries:`country`,devices:`device`,clients:`client`}}));function Se(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Ce(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?te(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?se(e.link):null;return{id:String(e.id),...f({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:re(e.value,n),previousValue:0,previousShare:0,delta:0}})}function we(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Te({view:e,metric:t,max:n,showMap:r}){let{reportParams:i}=h(),a=ae(i.post_id),{allRows:o,rows:s,isLoading:c,isFetching:l,isError:u,refetch:d}=be({postId:a,view:e,metric:t,max:n});return(0,j.jsx)(P,{rows:s,mapRows:o,view:e,showMap:r,metric:t,isLoading:c,isFetching:l,isError:u,hasEmail:a>0,onRetry:d})}function A({attributes:e={}}){return(0,j.jsx)(u,{attributes:e,children:(0,j.jsx)(Te,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10,showMap:e.showMap??!1})})}var j,M,N,P,Ee=e((()=>{v(),me(),o(),a(),n(),l(),ye(),xe(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=720,P=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:a=!1,metric:o=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:f=!0,onRetry:p})=>{let m=(0,i.useMemo)(()=>Ce(e,r),[e,r]),h=(0,i.useMemo)(()=>Se(n,o),[n,o]),[ee,_]=(0,i.useState)(),te=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);_(t=>t===e?t:e)}}),v=a&&r===`countries`&&h.length>1&&(ee??0)>=N;return(0,j.jsx)(`div`,{ref:te,className:D.root,children:(0,j.jsx)(ge,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:p?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:p}]:void 0},empty:{icon:c,description:f?we(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,j.jsxs)(`div`,{className:v?D.locationContent:D.content,children:[(0,j.jsx)(oe,{className:D.leaderboard,data:m,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:M}),v&&(0,j.jsx)(`div`,{className:D.map,"data-testid":`email-breakdown-map`,children:(0,j.jsx)(g,{data:h})})]})})})}})),F,De=e((()=>{n(),l(),ve(),F={icon:c,attributes:[{id:`view`,label:t(`Break down by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_e,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`countries`},{label:t(`Devices`,`jetpack-premium-analytics-pkg`),value:`devices`},{label:t(`Email clients`,`jetpack-premium-analytics-pkg`),value:`clients`},{label:t(`Links`,`jetpack-premium-analytics-pkg`),value:`links`}]},{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_e,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}})),I,L,R,z,Oe,ke,Ae,je=e((()=>{I=`jpa/email-breakdown`,L=`Email breakdown`,R=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,z={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},Oe=`stats`,ke=`framed`,Ae={name:I,title:L,description:R,help:z,category:Oe,presentation:ke}}));function Me(e){return F.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function Ne({view:e,metric:t,showMap:n}){return(0,V.jsx)(A,{attributes:{reportParams:{...b(),post_id:H},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(A,{attributes:{reportParams:{...b(!1),post_id:e},view:`countries`,metric:`opens`}})}function Pe({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(fe,{...r,widgetType:de(Ae,F),renderModule:Fe,renderComponent:A,attributes:{reportParams:{...b(!0),post_id:H},view:e,metric:t,showMap:n}})}var V,Fe,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),d(),_(),ue(),ce(),pe(),Ee(),De(),je(),V=r(),m(),Fe=`storybook/email-breakdown`,H=1234,U=Me(`view`),W=Me(`metric`),G={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:A,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas."}}},decorators:[ee]},K={render:Ne,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[x]},q={render:Ne,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[x]},J={render:()=>B(5601),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(p(`stats/opens/emails`,`loading`),()=>p(`stats/opens/emails`,null))},Y={render:()=>B(5602),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(p(`stats/opens/emails`,`error`),()=>p(`stats/opens/emails`,null))},X={render:()=>B(5603),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(p(`stats/opens/emails`,`empty`),()=>p(`stats/opens/emails`,null))},Z={render:()=>(0,V.jsx)(A,{attributes:{reportParams:b(!1),view:`countries`}}),decorators:[x]},Q={render:e=>(0,V.jsx)(Pe,{...e}),args:{...he,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...le,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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