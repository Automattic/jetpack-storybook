import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{t as o,x as s}from"./build-module-Nbr4nybP.js";import{o as c}from"./build-module-BbXL3uS6.js";import{Zt as l,n as u}from"./build-module-DmVuor49.js";import{t as d}from"./geo-chart-BqUcE-WL.js";import{Cr as f,S as p,Tt as m,V as h,cr as g,ht as _,ir as v,wt as y}from"./chart-tooltip-BvKnA4Ej.js";import{n as b,t as ee}from"./with-chart-theme-BBeqq-4-.js";import{t as te}from"./leaderboard-chart-TIHSX7P7.js";import{F as x,M as ne,N as re,U as ie,w as ae,z as oe}from"./report-metric-BBgOiYJZ.js";import{t as se}from"./widget-state-Dq0PZ7To.js";import{C as ce,S as le,T as ue,b as de,t as fe,w as pe,x as S}from"./src-Vd2hm5Bb.js";import{n as C,t as me}from"./src-CPsF629a.js";var w,T,E,D,O,k,he=e((()=>{w=`_root_g10fy_1`,T=`_content_g10fy_10`,E=`_locationContent_g10fy_20`,D=`_leaderboard_g10fy_29`,O=`_map_g10fy_36`,k={root:w,content:T,locationContent:E,leaderboard:D,map:O}}));function A(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function ge({postId:e,view:t,metric:n,max:r}){let a=t===`links`,o=a?`country`:j[t],s=m(e,o,{enabled:!a&&n===`opens`}),c=y(e,o,{enabled:!a&&n===`clicks`}),l=y(e,`link`,{enabled:a}),u=y(e,`user-content-link`,{enabled:a}),d=n===`clicks`?c:s,f=a?[l,u]:[d],p=l.data,h=u.data,_=d.data,v=(0,i.useMemo)(()=>(a?[...A(p).filter(e=>!e.link),...A(h).filter(e=>!!e.link)].sort(g):A(_)).map((e,t)=>({...e,id:t})),[a,p,h,_]);return{allRows:v,rows:(0,i.useMemo)(()=>v.slice(0,r>0?r:void 0),[v,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var j,_e=e((()=>{_(),a(),j={countries:`country`,devices:`device`,clients:`client`}}));function ve(e,n){return[[t(`Country`,`jetpack-premium-analytics`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function ye(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?p(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?c(e.link):null;return{id:String(e.id),...ae({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:h(e.value,n),previousValue:0,previousShare:0,delta:0}})}function be(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics`)}}function xe({view:e,metric:t,max:n,showMap:r}){let{reportParams:i}=ie(),a=f(i.post_id),{allRows:o,rows:s,isLoading:c,isFetching:l,isError:u,refetch:d}=ge({postId:a,view:e,metric:t,max:n});return(0,N.jsx)(I,{rows:s,mapRows:o,view:e,showMap:r,metric:t,isLoading:c,isFetching:l,isError:u,hasEmail:a>0,onRetry:d})}function M({attributes:e={}}){return(0,N.jsx)(oe,{attributes:e,children:(0,N.jsx)(xe,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10,showMap:e.showMap??!1})})}var N,P,F,I,Se=e((()=>{_(),fe(),o(),a(),n(),u(),he(),_e(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F=720,I=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:a=!1,metric:o=`opens`,isLoading:c=!1,isFetching:u=!1,isError:f=!1,hasEmail:p=!0,onRetry:m})=>{let h=(0,i.useMemo)(()=>ye(e,r),[e,r]),g=(0,i.useMemo)(()=>ve(n,o),[n,o]),[_,v]=(0,i.useState)(),y=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);v(t=>t===e?t:e)}}),b=a&&r===`countries`&&g.length>1&&(_??0)>=F;return(0,N.jsx)(`div`,{ref:y,className:k.root,children:(0,N.jsx)(se,{isLoading:c,isFetching:u,isError:f,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:m}]:void 0},empty:{icon:l,description:p?be(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics`)},children:(0,N.jsxs)(`div`,{className:b?k.locationContent:k.content,children:[(0,N.jsx)(te,{className:k.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:P}),b&&(0,N.jsx)(`div`,{className:k.map,"data-testid":`email-breakdown-map`,children:(0,N.jsx)(d,{data:g})})]})})})}})),L,Ce=e((()=>{n(),u(),me(),L={name:`jpa/email-breakdown`,title:t(`Email breakdown`,`jetpack-premium-analytics`),help:{content:t(`Breaks a sent email down by countries, devices, email clients, or clicked links.`,`jetpack-premium-analytics`)},icon:l,attributes:[{id:`view`,label:t(`Break down by`,`jetpack-premium-analytics`),type:`text`,Edit:C,elements:[{label:t(`Countries`,`jetpack-premium-analytics`),value:`countries`},{label:t(`Devices`,`jetpack-premium-analytics`),value:`devices`},{label:t(`Email clients`,`jetpack-premium-analytics`),value:`clients`},{label:t(`Links`,`jetpack-premium-analytics`),value:`links`}]},{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics`),type:`text`,Edit:C,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}}));function R(e){return L.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function z({view:e,metric:t,showMap:n}){return(0,V.jsx)(M,{attributes:{reportParams:{...v(),post_id:U},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(M,{attributes:{reportParams:{...v(!1),post_id:e},view:`countries`,metric:`opens`}})}function we({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(ce,{...r,widgetType:{...L,presentation:`framed`},renderModule:H,renderComponent:M,attributes:{reportParams:{...v(!0),post_id:U},view:e,metric:t,showMap:n}})}var V,H,U,W,G,Te,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ne(),ee(),pe(),de(),Se(),Ce(),V=r(),re(),H=`storybook/email-breakdown`,U=1234,W=R(`view`),G=R(`metric`),Te={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:M,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas."}}},decorators:[b]},K={render:z,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[S]},q={render:z,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[S]},J={render:()=>B(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`loading`),()=>x(`stats/opens/emails`,null))},Y={render:()=>B(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`error`),()=>x(`stats/opens/emails`,null))},X={render:()=>B(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`empty`),()=>x(`stats/opens/emails`,null))},Z={render:()=>(0,V.jsx)(M,{attributes:{reportParams:v(!1),view:`countries`}}),decorators:[S]},Q={render:e=>(0,V.jsx)(we,{...e}),args:{...le,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...ue,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,q as LocationClicksWithMap,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Te as default};