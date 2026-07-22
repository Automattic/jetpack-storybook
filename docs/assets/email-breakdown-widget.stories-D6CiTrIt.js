import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{o as c}from"./build-module-C-T6SNvB.js";import{Zt as l,n as u}from"./build-module-DmVuor49.js";import{t as d}from"./geo-chart-C0vDyuVF.js";import{Dr as f,E as p,G as m,Ot as h,cr as g,fr as ee,kt as te,yt as _}from"./chart-tooltip-CzFmGXYY.js";import{n as v,t as ne}from"./with-chart-theme-8j02on0C.js";import{t as re}from"./leaderboard-chart-ccw3dqlN.js";import{E as ie,F as ae,G as oe,L as y,P as se,V as ce}from"./report-metric-DKtqeETY.js";import{t as le}from"./widget-state-BHDlAvDl.js";import{C as ue,D as de,E as fe,S as pe,T as me,b as he,t as ge,w as _e,x as b}from"./src-jwuoScz5.js";import{n as ve,t as ye}from"./src-CFWu1nXz.js";var x,S,C,w,T,E,be=e((()=>{x=`_root_g10fy_1`,S=`_content_g10fy_10`,C=`_locationContent_g10fy_20`,w=`_leaderboard_g10fy_29`,T=`_map_g10fy_36`,E={root:x,content:S,locationContent:C,leaderboard:w,map:T}}));function D(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function xe({postId:e,view:t,metric:n,max:r}){let a=t===`links`,o=a?`country`:O[t],s=te(e,o,{enabled:!a&&n===`opens`}),c=h(e,o,{enabled:!a&&n===`clicks`}),l=h(e,`link`,{enabled:a}),u=h(e,`user-content-link`,{enabled:a}),d=n===`clicks`?c:s,f=a?[l,u]:[d],p=l.data,m=u.data,g=d.data,_=(0,i.useMemo)(()=>(a?[...D(p).filter(e=>!e.link),...D(m).filter(e=>!!e.link)].sort(ee):D(g)).map((e,t)=>({...e,id:t})),[a,p,m,g]);return{allRows:_,rows:(0,i.useMemo)(()=>_.slice(0,r>0?r:void 0),[_,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var O,Se=e((()=>{_(),a(),O={countries:`country`,devices:`device`,clients:`client`}}));function Ce(e,n){return[[t(`Country`,`jetpack-premium-analytics`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function we(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?p(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?c(e.link):null;return{id:String(e.id),...ie({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:m(e.value,n),previousValue:0,previousShare:0,delta:0}})}function Te(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics`)}}function Ee({view:e,metric:t,max:n,showMap:r}){let{reportParams:i}=oe(),a=f(i.post_id),{allRows:o,rows:s,isLoading:c,isFetching:l,isError:u,refetch:d}=xe({postId:a,view:e,metric:t,max:n});return(0,A.jsx)(N,{rows:s,mapRows:o,view:e,showMap:r,metric:t,isLoading:c,isFetching:l,isError:u,hasEmail:a>0,onRetry:d})}function k({attributes:e={}}){return(0,A.jsx)(ce,{attributes:e,children:(0,A.jsx)(Ee,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10,showMap:e.showMap??!1})})}var A,j,M,N,De=e((()=>{_(),ge(),o(),a(),n(),u(),be(),Se(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=720,N=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:a=!1,metric:o=`opens`,isLoading:c=!1,isFetching:u=!1,isError:f=!1,hasEmail:p=!0,onRetry:m})=>{let h=(0,i.useMemo)(()=>we(e,r),[e,r]),g=(0,i.useMemo)(()=>Ce(n,o),[n,o]),[ee,te]=(0,i.useState)(),_=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);te(t=>t===e?t:e)}}),v=a&&r===`countries`&&g.length>1&&(ee??0)>=M;return(0,A.jsx)(`div`,{ref:_,className:E.root,children:(0,A.jsx)(le,{isLoading:c,isFetching:u,isError:f,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:m}]:void 0},empty:{icon:l,description:p?Te(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics`)},children:(0,A.jsxs)(`div`,{className:v?E.locationContent:E.content,children:[(0,A.jsx)(re,{className:E.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:j}),v&&(0,A.jsx)(`div`,{className:E.map,"data-testid":`email-breakdown-map`,children:(0,A.jsx)(d,{data:g})})]})})})}})),P,Oe=e((()=>{n(),u(),ye(),P={icon:l,attributes:[{id:`view`,label:t(`Break down by`,`jetpack-premium-analytics`),type:`text`,Edit:ve,elements:[{label:t(`Countries`,`jetpack-premium-analytics`),value:`countries`},{label:t(`Devices`,`jetpack-premium-analytics`),value:`devices`},{label:t(`Email clients`,`jetpack-premium-analytics`),value:`clients`},{label:t(`Links`,`jetpack-premium-analytics`),value:`links`}]},{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics`),type:`text`,Edit:ve,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}})),F,I,L,R,z,ke,Ae,je=e((()=>{F=`jpa/email-breakdown`,I=`Email breakdown`,L=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,R={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},z=`stats`,ke=`framed`,Ae={name:F,title:I,description:L,help:R,category:z,presentation:ke}}));function Me(e){return P.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function Ne({view:e,metric:t,showMap:n}){return(0,V.jsx)(k,{attributes:{reportParams:{...g(),post_id:H},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(k,{attributes:{reportParams:{...g(!1),post_id:e},view:`countries`,metric:`opens`}})}function Pe({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(me,{...r,widgetType:pe(Ae,P),renderModule:Fe,renderComponent:k,attributes:{reportParams:{...g(!0),post_id:H},view:e,metric:t,showMap:n}})}var V,Fe,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),se(),ne(),fe(),ue(),he(),De(),Oe(),je(),V=r(),ae(),Fe=`storybook/email-breakdown`,H=1234,U=Me(`view`),W=Me(`metric`),G={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:k,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas."}}},decorators:[v]},K={render:Ne,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[b]},q={render:Ne,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[b]},J={render:()=>B(5601),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`loading`),()=>y(`stats/opens/emails`,null))},Y={render:()=>B(5602),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`error`),()=>y(`stats/opens/emails`,null))},X={render:()=>B(5603),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`empty`),()=>y(`stats/opens/emails`,null))},Z={render:()=>(0,V.jsx)(k,{attributes:{reportParams:g(!1),view:`countries`}}),decorators:[b]},Q={render:e=>(0,V.jsx)(Pe,{...e}),args:{..._e,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...de,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`The wide Location clicks card used by the fixed Email clicks composition.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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