import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{t as s,x as c}from"./build-module-Nbr4nybP.js";import{o as l}from"./build-module-BCLTotWY.js";import{Zt as u,n as d}from"./build-module-DmVuor49.js";import{t as f}from"./geo-chart-CY1xLCYv.js";import{t as p,u as m}from"./build-module-CjsR65VJ.js";import{L as h,bt as g,dt as _,er as v,ir as ee,v as y,xt as te,yr as ne}from"./chart-tooltip-DUEH-EBN.js";import{n as re,t as ie}from"./with-chart-theme-CLWmNFl7.js";import{t as ae}from"./leaderboard-chart-DrtBfHKO.js";import{H as oe,M as se,P as b,R as ce,j as le,w as ue}from"./report-metric-DT2EZwqu.js";import{t as de}from"./widget-state-CZCJOB7L.js";import{C as fe,S as pe,T as me,b as he,t as ge,w as _e,x}from"./src-_5yscEMX.js";import{n as ve,t as ye}from"./src-BBuFTi-d.js";var S,C,w,T,E,D,O,k,A,j,be=e((()=>{S=`_root_1np1d_1`,C=`_content_1np1d_10`,w=`_locationContent_1np1d_20`,T=`_leaderboard_1np1d_29`,E=`_map_1np1d_36`,D=`_label_1np1d_58`,O=`_flag_1np1d_72`,k=`_labelText_1np1d_79`,A=`_labelLink_1np1d_91`,j={root:S,content:C,locationContent:w,leaderboard:T,map:E,label:D,flag:O,labelText:k,labelLink:A}}));function M(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link}))}function xe({postId:e,view:t,metric:n,max:r}){let i=t===`links`,o=i?`country`:N[t],s=te(e,o,{enabled:!i&&n===`opens`}),c=g(e,o,{enabled:!i&&n===`clicks`}),l=g(e,`link`,{enabled:i}),u=g(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:s,f=i?[l,u]:[d],p=l.data,m=u.data,h=d.data,_=(0,a.useMemo)(()=>(i?[...M(p).filter(e=>!e.link),...M(m).filter(e=>!!e.link)].sort(ee):M(h)).map((e,t)=>({...e,id:t})),[i,p,m,h]);return{allRows:_,rows:(0,a.useMemo)(()=>_.slice(0,r>0?r:void 0),[_,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var N,Se=e((()=>{_(),o(),N={countries:`country`,devices:`device`,clients:`client`}}));function Ce(e,t){return[[n(`Country`,`jetpack-premium-analytics`),n(t===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function we(e,r){let i=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let a;if(r===`countries`){let r=e.countryCode?y(e.countryCode):null;a=(0,F.jsx)(`div`,{className:j.label,children:(0,F.jsx)(ue,{label:e.label,imageUrl:r??void 0,imageAlt:t(n(`Flag of %s`,`jetpack-premium-analytics`),e.countryFull??e.label),imageClassName:j.flag})})}else if(r===`links`){let t=l(e.link);a=t?(0,F.jsx)(m,{className:j.labelLink,href:t,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,F.jsx)(`span`,{className:j.labelText,title:e.label,children:e.label})}else a=(0,F.jsx)(`span`,{className:j.labelText,title:e.label,children:e.label});return{id:String(e.id),label:a,currentValue:e.value,currentShare:h(e.value,i),previousValue:0,previousShare:0,delta:0}})}function Te(e){switch(e){case`devices`:return n(`No device data for this email yet.`,`jetpack-premium-analytics`);case`clients`:return n(`No email client data for this email yet.`,`jetpack-premium-analytics`);case`links`:return n(`No link clicks for this email yet.`,`jetpack-premium-analytics`);default:return n(`No country data for this email yet.`,`jetpack-premium-analytics`)}}function Ee({view:e,metric:t,max:n,showMap:r}){let{reportParams:i}=oe(),a=ne(i.post_id),{allRows:o,rows:s,isLoading:c,isFetching:l,isError:u,refetch:d}=xe({postId:a,view:e,metric:t,max:n});return(0,F.jsx)(R,{rows:s,mapRows:o,view:e,showMap:r,metric:t,isLoading:c,isFetching:l,isError:u,hasEmail:a>0,onRetry:d})}function P({attributes:e={}}){return(0,F.jsx)(ce,{attributes:e,children:(0,F.jsx)(Ee,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10,showMap:e.showMap??!1})})}var F,I,L,R,De=e((()=>{_(),ge(),s(),o(),r(),d(),p(),be(),Se(),F=i(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L=720,R=({rows:e=[],mapRows:t=e,view:r=`countries`,showMap:i=!1,metric:o=`opens`,isLoading:s=!1,isFetching:l=!1,isError:d=!1,hasEmail:p=!0,onRetry:m})=>{let h=(0,a.useMemo)(()=>we(e,r),[e,r]),g=(0,a.useMemo)(()=>Ce(t,o),[t,o]),[_,v]=(0,a.useState)(),ee=c(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);v(t=>t===e?t:e)}}),y=i&&r===`countries`&&g.length>1&&(_??0)>=L;return(0,F.jsx)(`div`,{ref:ee,className:j.root,children:(0,F.jsx)(de,{isLoading:s,isFetching:l,isError:d,isEmpty:e.length===0,error:{description:n(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics`),actions:m?[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:m}]:void 0},empty:{icon:u,description:p?Te(r):n(`Select an email to see its breakdown.`,`jetpack-premium-analytics`)},children:(0,F.jsxs)(`div`,{className:y?j.locationContent:j.content,children:[(0,F.jsx)(ae,{className:j.leaderboard,data:h,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:I}),y&&(0,F.jsx)(`div`,{className:j.map,"data-testid":`email-breakdown-map`,children:(0,F.jsx)(f,{data:g})})]})})})}})),z,Oe=e((()=>{r(),d(),ye(),z={name:`jpa/email-breakdown`,title:n(`Email breakdown`,`jetpack-premium-analytics`),help:{content:n(`Breaks a sent email down by countries, devices, email clients, or clicked links.`,`jetpack-premium-analytics`)},icon:u,attributes:[{id:`view`,label:n(`Break down by`,`jetpack-premium-analytics`),type:`text`,Edit:ve,elements:[{label:n(`Countries`,`jetpack-premium-analytics`),value:`countries`},{label:n(`Devices`,`jetpack-premium-analytics`),value:`devices`},{label:n(`Email clients`,`jetpack-premium-analytics`),value:`clients`},{label:n(`Links`,`jetpack-premium-analytics`),value:`links`}]},{id:`metric`,label:n(`Metric`,`jetpack-premium-analytics`),type:`text`,Edit:ve,elements:[{label:n(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:n(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}}));function ke(e){return z.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function Ae({view:e,metric:t,showMap:n}){return(0,V.jsx)(P,{attributes:{reportParams:{...v(),post_id:U},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(P,{attributes:{reportParams:{...v(!1),post_id:e},view:`countries`,metric:`opens`}})}function je({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(fe,{...r,widgetType:{...z,presentation:`framed`},renderModule:H,renderComponent:P,attributes:{reportParams:{...v(!0),post_id:U},view:e,metric:t,showMap:n}})}var V,H,U,W,G,Me,K,q,J,Y,X,Z,Q,$;e((()=>{_(),le(),ie(),_e(),he(),De(),Oe(),V=i(),se(),H=`storybook/email-breakdown`,U=1234,W=ke(`view`),G=ke(`metric`),Me={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:P,tags:[`autodocs`],argTypes:{view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas."}}},decorators:[re]},K={render:Ae,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[x]},q={render:Ae,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[x]},J={render:()=>B(5601),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`loading`),()=>b(`stats/opens/emails`,null))},Y={render:()=>B(5602),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`error`),()=>b(`stats/opens/emails`,null))},X={render:()=>B(5603),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(b(`stats/opens/emails`,`empty`),()=>b(`stats/opens/emails`,null))},Z={render:()=>(0,V.jsx)(P,{attributes:{reportParams:v(!1),view:`countries`}}),decorators:[x]},Q={render:e=>(0,V.jsx)(je,{...e}),args:{...pe,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...me,view:{control:`select`,options:W},metric:{control:`select`,options:G},showMap:{control:`boolean`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,q as LocationClicksWithMap,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Me as default};