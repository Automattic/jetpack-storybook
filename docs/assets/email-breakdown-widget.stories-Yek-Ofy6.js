import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{t as s,x as c}from"./build-module-Nbr4nybP.js";import{o as l}from"./build-module-DUvA8H5L.js";import{Zt as u,n as d}from"./build-module-DmVuor49.js";import{t as f}from"./geo-chart-Dti2unWr.js";import{t as p,u as m}from"./build-module-B34MKSgB.js";import{_r as h,bt as g,dt as _,er as v,ir as y,v as b,xt as ee}from"./chart-tooltip-BXDnGPby.js";import{n as te,t as ne}from"./with-chart-theme-DRicrqWZ.js";import{t as re}from"./leaderboard-chart-BnCPTm77.js";import{H as ie,M as ae,P as x,R as oe,j as se,w as ce}from"./report-metric-HIq6UNa0.js";import{t as le}from"./widget-state-CJF1ZH55.js";import{C as ue,S as de,T as fe,b as pe,t as me,w as he,x as S}from"./src-CKZJ5Ebh.js";import{n as C,t as ge}from"./src-DgI-PPmw.js";var w,T,E,D,O,k,A,j,M,N,_e=e((()=>{w=`_root_1np1d_1`,T=`_content_1np1d_10`,E=`_locationContent_1np1d_20`,D=`_leaderboard_1np1d_29`,O=`_map_1np1d_36`,k=`_label_1np1d_58`,A=`_flag_1np1d_72`,j=`_labelText_1np1d_79`,M=`_labelLink_1np1d_91`,N={root:w,content:T,locationContent:E,leaderboard:D,map:O,label:k,flag:A,labelText:j,labelLink:M}}));function P(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link}))}function ve({postId:e,view:t,metric:n,max:r}){let i=t===`links`,o=i?`country`:F[t],s=ee(e,o,{enabled:!i&&n===`opens`}),c=g(e,o,{enabled:!i&&n===`clicks`}),l=g(e,`link`,{enabled:i}),u=g(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:s,f=i?[l,u]:[d],p=l.data,m=u.data,h=d.data,_=(0,a.useMemo)(()=>(i?[...P(p).filter(e=>!e.link),...P(m).filter(e=>!!e.link)].sort(y):P(h)).map((e,t)=>({...e,id:t})),[i,p,m,h]);return{allRows:_,rows:(0,a.useMemo)(()=>_.slice(0,r>0?r:void 0),[_,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var F,ye=e((()=>{_(),o(),F={countries:`country`,devices:`device`,clients:`client`}}));function be(e,t){return[[n(`Country`,`jetpack-premium-analytics`),n(t===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function xe(e,r){let i=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let a;if(r===`countries`){let r=e.countryCode?b(e.countryCode):null;a=(0,L.jsx)(`div`,{className:N.label,children:(0,L.jsx)(ce,{label:e.label,imageUrl:r??void 0,imageAlt:t(n(`Flag of %s`,`jetpack-premium-analytics`),e.countryFull??e.label),imageClassName:N.flag})})}else if(r===`links`){let t=l(e.link);a=t?(0,L.jsx)(m,{className:N.labelLink,href:t,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,L.jsx)(`span`,{className:N.labelText,title:e.label,children:e.label})}else a=(0,L.jsx)(`span`,{className:N.labelText,title:e.label,children:e.label});return{id:String(e.id),label:a,currentValue:e.value,currentShare:i>0?e.value/i*100:0,previousValue:0,previousShare:0,delta:0}})}function Se(e){switch(e){case`devices`:return n(`No device data for this email yet.`,`jetpack-premium-analytics`);case`clients`:return n(`No email client data for this email yet.`,`jetpack-premium-analytics`);case`links`:return n(`No link clicks for this email yet.`,`jetpack-premium-analytics`);default:return n(`No country data for this email yet.`,`jetpack-premium-analytics`)}}function Ce({view:e,metric:t,max:n,showMap:r}){let{reportParams:i}=ie(),a=h(i.post_id),{allRows:o,rows:s,isLoading:c,isFetching:l,isError:u,refetch:d}=ve({postId:a,view:e,metric:t,max:n});return(0,L.jsx)(we,{rows:s,mapRows:o,view:e,showMap:r,metric:t,isLoading:c,isFetching:l,isError:u,hasEmail:a>0,onRetry:d})}function I({attributes:e={}}){return(0,L.jsx)(oe,{attributes:e,children:(0,L.jsx)(Ce,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10,showMap:e.showMap??!1})})}var L,R,z,we,Te=e((()=>{_(),me(),s(),o(),r(),d(),p(),_e(),ye(),L=i(),R={type:`number`,options:{useMultipliers:!0,decimals:0}},z=720,we=({rows:e=[],mapRows:t=e,view:r=`countries`,showMap:i=!1,metric:o=`opens`,isLoading:s=!1,isFetching:l=!1,isError:d=!1,hasEmail:p=!0,onRetry:m})=>{let h=(0,a.useMemo)(()=>xe(e,r),[e,r]),g=(0,a.useMemo)(()=>be(t,o),[t,o]),[_,v]=(0,a.useState)(),y=c(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);v(t=>t===e?t:e)}}),b=i&&r===`countries`&&g.length>1&&(_??0)>=z;return(0,L.jsx)(`div`,{ref:y,className:N.root,children:(0,L.jsx)(le,{isLoading:s,isFetching:l,isError:d,isEmpty:e.length===0,error:{description:n(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics`),actions:m?[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:m}]:void 0},empty:{icon:u,description:p?Se(r):n(`Select an email to see its breakdown.`,`jetpack-premium-analytics`)},children:(0,L.jsxs)(`div`,{className:b?N.locationContent:N.content,children:[(0,L.jsx)(re,{className:N.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:R}),b&&(0,L.jsx)(`div`,{className:N.map,"data-testid":`email-breakdown-map`,children:(0,L.jsx)(f,{data:g})})]})})})}})),B,Ee=e((()=>{r(),d(),ge(),B={name:`jpa/email-breakdown`,title:n(`Email breakdown`,`jetpack-premium-analytics`),help:{content:n(`Breaks a sent email down by countries, devices, email clients, or clicked links.`,`jetpack-premium-analytics`)},icon:u,attributes:[{id:`view`,label:n(`Break down by`,`jetpack-premium-analytics`),type:`text`,Edit:C,elements:[{label:n(`Countries`,`jetpack-premium-analytics`),value:`countries`},{label:n(`Devices`,`jetpack-premium-analytics`),value:`devices`},{label:n(`Email clients`,`jetpack-premium-analytics`),value:`clients`},{label:n(`Links`,`jetpack-premium-analytics`),value:`links`}]},{id:`metric`,label:n(`Metric`,`jetpack-premium-analytics`),type:`text`,Edit:C,elements:[{label:n(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:n(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}}));function De(e){return B.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function Oe({view:e,metric:t,showMap:n}){return(0,H.jsx)(I,{attributes:{reportParams:{...v(),post_id:U},view:e,metric:t,showMap:n}})}function V(e){return(0,H.jsx)(I,{attributes:{reportParams:{...v(!1),post_id:e},view:`countries`,metric:`opens`}})}function ke({view:e,metric:t,showMap:n,...r}){return(0,H.jsx)(ue,{...r,widgetType:{...B,presentation:`framed`},renderModule:Ae,renderComponent:I,attributes:{reportParams:{...v(!0),post_id:U},view:e,metric:t,showMap:n}})}var H,Ae,U,W,G,je,K,q,J,Y,X,Z,Q,$;e((()=>{_(),se(),ne(),he(),pe(),Te(),Ee(),H=i(),ae(),Ae=`storybook/email-breakdown`,U=1234,W=De(`view`),G=De(`metric`),je={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:I,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas."}}},decorators:[te]},K={render:Oe,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[S]},q={render:Oe,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[S]},J={render:()=>V(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`loading`),()=>x(`stats/opens/emails`,null))},Y={render:()=>V(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`error`),()=>x(`stats/opens/emails`,null))},X={render:()=>V(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`empty`),()=>x(`stats/opens/emails`,null))},Z={render:()=>(0,H.jsx)(I,{attributes:{reportParams:v(!1),view:`countries`}}),decorators:[S]},Q={render:e=>(0,H.jsx)(ke,{...e}),args:{...de,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...fe,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,q as LocationClicksWithMap,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,je as default};