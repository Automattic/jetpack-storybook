import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{t as s,x as c}from"./build-module-Nbr4nybP.js";import{Zt as l,n as u}from"./build-module-DmVuor49.js";import{t as d}from"./geo-chart-B9xYfdii.js";import{t as f,u as p}from"./build-module-DokNvSv5.js";import{$n as m,Yn as h,_ as g,_t as ee,gt as _,ut as v}from"./chart-tooltip-B-p4R1ne.js";import{n as y,t as te}from"./with-chart-theme-CJ3r9ucp.js";import{t as ne}from"./leaderboard-chart-BMWgogS0.js";import{C as re,N as ie,S as ae,T as b,g as oe,k as se}from"./report-metric-BEx9Ox4P.js";import{t as ce}from"./widget-state-jmx0JXRV.js";import{S as le,b as ue,t as de,x as fe,y as pe}from"./src-bT7CpZTu.js";import{n as me,r as x}from"./with-widget-canvas-Dz43KNHY.js";import{n as S,t as he}from"./src-BXRTsm-6.js";var C,w,T,E,D,O,k,A,j,M,ge=e((()=>{C=`_root_1np1d_1`,w=`_content_1np1d_10`,T=`_locationContent_1np1d_20`,E=`_leaderboard_1np1d_29`,D=`_map_1np1d_36`,O=`_label_1np1d_58`,k=`_flag_1np1d_72`,A=`_labelText_1np1d_79`,j=`_labelLink_1np1d_91`,M={root:C,content:w,locationContent:T,leaderboard:E,map:D,label:O,flag:k,labelText:A,labelLink:j}}));function N(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link}))}function _e({postId:e,view:t,metric:n,max:r}){let i=t===`links`,o=i?`country`:P[t],s=ee(e,o,{enabled:!i&&n===`opens`}),c=_(e,o,{enabled:!i&&n===`clicks`}),l=_(e,`link`,{enabled:i}),u=_(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:s,f=i?[l,u]:[d],p=l.data,h=u.data,g=d.data,v=(0,a.useMemo)(()=>(i?[...N(p).filter(e=>!e.link),...N(h).filter(e=>!!e.link)].sort(m):N(g)).map((e,t)=>({...e,id:t})),[i,p,h,g]);return{allRows:v,rows:(0,a.useMemo)(()=>v.slice(0,r>0?r:void 0),[v,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var P,ve=e((()=>{v(),o(),P={countries:`country`,devices:`device`,clients:`client`}}));function ye(e,t){return[[n(`Country`,`jetpack-premium-analytics`),n(t===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function be(e){if(!e)return null;try{let{protocol:t}=new URL(e);return t===`http:`||t===`https:`?e:null}catch{return null}}function xe(e,r){let i=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let a;if(r===`countries`){let r=e.countryCode?g(e.countryCode):null;a=(0,I.jsx)(`div`,{className:M.label,children:(0,I.jsx)(oe,{label:e.label,imageUrl:r??void 0,imageAlt:t(n(`Flag of %s`,`jetpack-premium-analytics`),e.countryFull??e.label),imageClassName:M.flag})})}else if(r===`links`){let t=be(e.link);a=t?(0,I.jsx)(p,{className:M.labelLink,href:t,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,I.jsx)(`span`,{className:M.labelText,title:e.label,children:e.label})}else a=(0,I.jsx)(`span`,{className:M.labelText,title:e.label,children:e.label});return{id:String(e.id),label:a,currentValue:e.value,currentShare:i>0?e.value/i*100:0,previousValue:0,previousShare:0,delta:0}})}function Se(e){switch(e){case`devices`:return n(`No device data for this email yet.`,`jetpack-premium-analytics`);case`clients`:return n(`No email client data for this email yet.`,`jetpack-premium-analytics`);case`links`:return n(`No link clicks for this email yet.`,`jetpack-premium-analytics`);default:return n(`No country data for this email yet.`,`jetpack-premium-analytics`)}}function Ce(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:0}function we({view:e,metric:t,max:n,showMap:r}){let{reportParams:i}=ie(),a=Ce(i.post_id),{allRows:o,rows:s,isLoading:c,isFetching:l,isError:u,refetch:d}=_e({postId:a,view:e,metric:t,max:n});return(0,I.jsx)(Ee,{rows:s,mapRows:o,view:e,showMap:r,metric:t,isLoading:c,isFetching:l,isError:u,hasEmail:a>0,onRetry:d})}function F({attributes:e={}}){return(0,I.jsx)(se,{attributes:e,children:(0,I.jsx)(we,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10,showMap:e.showMap??!1})})}var I,L,Te,Ee,De=e((()=>{de(),s(),o(),r(),u(),f(),ge(),ve(),I=i(),L={type:`number`,options:{useMultipliers:!0,decimals:0}},Te=720,Ee=({rows:e=[],mapRows:t=e,view:r=`countries`,showMap:i=!1,metric:o=`opens`,isLoading:s=!1,isFetching:u=!1,isError:f=!1,hasEmail:p=!0,onRetry:m})=>{let h=(0,a.useMemo)(()=>xe(e,r),[e,r]),g=(0,a.useMemo)(()=>ye(t,o),[t,o]),[ee,_]=(0,a.useState)(),v=c(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);_(t=>t===e?t:e)}}),y=i&&r===`countries`&&g.length>1&&(ee??0)>=Te;return(0,I.jsx)(`div`,{ref:v,className:M.root,children:(0,I.jsx)(ce,{isLoading:s,isFetching:u,isError:f,isEmpty:e.length===0,error:{description:n(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics`),actions:m?[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:m}]:void 0},empty:{icon:l,description:p?Se(r):n(`Select an email to see its breakdown.`,`jetpack-premium-analytics`)},children:(0,I.jsxs)(`div`,{className:y?M.locationContent:M.content,children:[(0,I.jsx)(ne,{className:M.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:L}),y&&(0,I.jsx)(`div`,{className:M.map,"data-testid":`email-breakdown-map`,children:(0,I.jsx)(d,{data:g})})]})})})}})),R,Oe=e((()=>{r(),u(),he(),R={name:`jpa/email-breakdown`,title:n(`Email breakdown`,`jetpack-premium-analytics`),help:{content:n(`Breaks a sent email down by countries, devices, email clients, or clicked links.`,`jetpack-premium-analytics`)},icon:l,attributes:[{id:`view`,label:n(`Break down by`,`jetpack-premium-analytics`),type:`text`,Edit:S,elements:[{label:n(`Countries`,`jetpack-premium-analytics`),value:`countries`},{label:n(`Devices`,`jetpack-premium-analytics`),value:`devices`},{label:n(`Email clients`,`jetpack-premium-analytics`),value:`clients`},{label:n(`Links`,`jetpack-premium-analytics`),value:`links`}]},{id:`metric`,label:n(`Metric`,`jetpack-premium-analytics`),type:`text`,Edit:S,elements:[{label:n(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:n(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}}));function ke(e){return R.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function z({withComparison:e,view:t,metric:n,showMap:r}){return(0,V.jsx)(F,{attributes:{reportParams:{...h(e),post_id:H},view:t,metric:n,showMap:r}})}function B(e){return(0,V.jsx)(F,{attributes:{reportParams:{...h(!1),post_id:e},view:`countries`,metric:`opens`}})}function Ae({withComparison:e,view:t,metric:n,showMap:r,...i}){return(0,V.jsx)(ue,{...i,widgetType:{...R,presentation:`framed`},renderModule:je,renderComponent:F,attributes:{reportParams:{...h(e),post_id:H},view:t,metric:n,showMap:r}})}var V,je,H,U,W,Me,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),ae(),te(),fe(),me(),De(),Oe(),V=i(),re(),je=`storybook/email-breakdown`,H=1234,U=ke(`view`),W=ke(`metric`),Me={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. These endpoints have no comparison period, so the widget renders without deltas even when the date picker injects comparison params."}}},decorators:[y]},G={render:z,args:{withComparison:!1,view:`countries`,metric:`opens`,showMap:!1},decorators:[x]},K={render:z,args:{withComparison:!1,view:`countries`,metric:`clicks`,showMap:!0},decorators:[x]},q={render:z,args:{withComparison:!0,view:`countries`,metric:`opens`,showMap:!1},decorators:[x]},J={render:()=>B(5601),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`loading`),()=>b(`stats/opens/emails`,null))},Y={render:()=>B(5602),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`error`),()=>b(`stats/opens/emails`,null))},X={render:()=>B(5603),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`empty`),()=>b(`stats/opens/emails`,null))},Z={render:()=>(0,V.jsx)(F,{attributes:{reportParams:h(!1),view:`countries`}}),decorators:[x]},Q={render:e=>(0,V.jsx)(Ae,{...e}),args:{...pe,withComparison:!0,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...le,withComparison:{control:`boolean`},view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    withComparison: false,
    view: 'countries',
    metric: 'opens',
    showMap: false
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default populated state — the selected email broken down by country.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    withComparison: false,
    view: 'countries',
    metric: 'clicks',
    showMap: true
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`The wide Location clicks card used by the fixed Email clicks composition.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    withComparison: true,
    view: 'countries',
    metric: 'opens',
    showMap: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:"Comparison `reportParams` from the date picker. The breakdown endpoints return\nno comparison rows, so the widget renders normally without deltas.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
    withComparison: true,
    view: 'countries',
    metric: 'opens',
    showMap: false
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`LocationClicksWithMap`,`WithComparison`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{G as Default,X as Empty,Y as Error,J as Loading,K as LocationClicksWithMap,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Me as default};