import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{t as o,y as s}from"./build-module-BcmRfNb-.js";import{As as c,t as l}from"./build-module-CR6EsQjA.js";import{b as u,g as d}from"./hooks-7KqDI4S5.js";import{t as f}from"./geo-chart-BZ7xPhIY.js";import{Sn as p,m,nn as ee,p as h,qt as g,t as _}from"./src-BjZ54zgU.js";import{n as v,t as y}from"./with-chart-theme-1lBX188D.js";import"./constants-B1kGztHF.js";import{Y as te,f as ne,mt as re,p as b}from"./chart-tooltip-C5TWg7Oz.js";import{r as ie}from"./src-BHEYtkTl2.js";import{r as ae}from"./leaderboard-skeleton-B4J2iQ2E.js";import{G as oe,K as se,N as ce,Y as x}from"./report-metric-C25Xf5Nx.js";import{t as le}from"./widget-state-KX6fpgAN.js";import{C as ue,D as de,E as fe,S as pe,T as me,b as he,t as ge,w as _e,x as S,y as ve}from"./src-DnbRbU6q.js";var C,w,T,E,D,O,ye=e((()=>{C=`_root_g10fy_1`,w=`_content_g10fy_10`,T=`_locationContent_g10fy_20`,E=`_leaderboard_g10fy_29`,D=`_map_g10fy_36`,O={root:C,content:w,locationContent:T,leaderboard:E,map:D}}));function k(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link,isOther:e.isOther}))}function be({postId:e,view:t,metric:n,max:r}){let a=t===`links`,o=a?`country`:A[t],s=m(e,o,{enabled:!a&&n===`opens`}),c=h(e,o,{enabled:!a&&n===`clicks`}),l=h(e,`link`,{enabled:a}),u=h(e,`user-content-link`,{enabled:a}),d=n===`clicks`?c:s,f=a?[l,u]:[d],p=l.data,g=u.data,_=d.data,v=(0,i.useMemo)(()=>(a?[...k(p).filter(e=>!e.link),...k(g).filter(e=>!!e.link)].sort(ee):k(_)).map((e,t)=>({...e,id:t})),[a,p,g,_]);return{allRows:v,rows:(0,i.useMemo)(()=>v.slice(0,r>0?r:void 0),[v,r]),isLoading:f.some(e=>e.isLoading),isFetching:f.some(e=>e.isFetching),isError:f.some(e=>e.isError&&e.data===void 0),refetch:()=>f.forEach(e=>e.refetch())}}var A,xe=e((()=>{_(),a(),A={countries:`country`,devices:`device`,clients:`client`}}));function Se(e,n){return[[t(`Country`,`jetpack-premium-analytics-pkg`),t(n===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)],...e.filter(e=>!!e.countryCode).map(e=>[e.countryCode,e.value])]}function Ce(e,t){let n=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let r=t===`countries`?{kind:`flag`,url:e.countryCode?te(e.countryCode)??void 0:void 0,country:e.countryFull??e.label}:{kind:`none`},i=t===`links`?ie(e.link):null;return{id:String(e.id),...ce({label:e.label,media:r,action:i?{kind:`link`,href:i}:{kind:`static`}}),currentValue:e.value,currentShare:re(e.value,n),previousValue:0,previousShare:0,delta:0}})}function we(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics-pkg`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics-pkg`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics-pkg`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics-pkg`)}}function Te({view:e,metric:t,showMap:n}){let{reportParams:r}=u(),i=p(r.post_id),{allRows:a,rows:o,isLoading:s,isFetching:c,isError:l,refetch:d}=be({postId:i,view:e,metric:t,max:10});return(0,M.jsx)(P,{rows:o,mapRows:a,view:e,showMap:n,metric:t,isLoading:s,isFetching:c,isError:l,hasEmail:i>0,onRetry:d})}function j({attributes:e={}}){return(0,M.jsx)(d,{attributes:e,children:(0,M.jsx)(Te,{view:e.view??`countries`,metric:e.metric??`opens`,showMap:e.showMap??!1})})}var M,N,P,Ee=e((()=>{_(),ge(),o(),a(),n(),l(),ye(),xe(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=({rows:e=[],mapRows:n=e,view:r=`countries`,showMap:a=!1,metric:o=`opens`,isLoading:l=!1,isFetching:u=!1,isError:d=!1,hasEmail:p=!0,onRetry:m})=>{let ee=(0,i.useMemo)(()=>Ce(e,r),[e,r]),h=(0,i.useMemo)(()=>Se(n,o),[n,o]),[g,_]=(0,i.useState)(),v=s(e=>{let t=e[0]?.contentRect;if(t){let e=Math.round(t.width);_(t=>t===e?t:e)}}),y=a&&r===`countries`&&h.length>1&&(g??0)>=720;return(0,M.jsx)(`div`,{ref:v,className:O.root,children:(0,M.jsx)(le,{isLoading:l,isFetching:u,isError:d,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:m?[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:m}]:void 0},empty:{icon:c,description:p?we(r):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics-pkg`)},children:(0,M.jsxs)(`div`,{className:y?O.locationContent:O.content,children:[(0,M.jsx)(ae,{className:O.leaderboard,data:ee,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:N}),y&&(0,M.jsx)(`div`,{className:O.map,"data-testid":`email-breakdown-map`,children:(0,M.jsx)(f,{data:h})})]})})})}})),F,De=e((()=>{n(),l(),ne(),F={icon:c,attributes:[{id:`view`,label:t(`Break down by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:b,elements:[{label:t(`Countries`,`jetpack-premium-analytics-pkg`),value:`countries`},{label:t(`Devices`,`jetpack-premium-analytics-pkg`),value:`devices`},{label:t(`Email clients`,`jetpack-premium-analytics-pkg`),value:`clients`},{label:t(`Links`,`jetpack-premium-analytics-pkg`),value:`links`}]},{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:b,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}],isVisible:({view:e})=>e!==`links`}],example:{attributes:{view:`countries`,metric:`opens`}}}})),I,Oe,L,R,z,ke,Ae,je=e((()=>{I=`jpa/email-breakdown`,Oe=`Email breakdown`,L=`Breaks a sent email down by countries, devices, email clients, or clicked links.`,R={content:`Breaks a sent email down by countries, devices, email clients, or clicked links.`},z=`stats`,ke=`framed`,Ae={name:I,title:Oe,description:L,help:R,category:z,presentation:ke}}));function Me(e){return F.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function Ne({view:e,metric:t,showMap:n}){return(0,V.jsx)(j,{attributes:{reportParams:{...g(),post_id:H},view:e,metric:t,showMap:n}})}function B(e){return(0,V.jsx)(j,{attributes:{reportParams:{...g(!1),post_id:e},view:`countries`,metric:`opens`}})}function Pe({view:e,metric:t,showMap:n,...r}){return(0,V.jsx)(me,{...r,widgetType:pe(Ae,F),renderModule:Fe,renderComponent:j,attributes:{reportParams:{...g(!0),post_id:H},view:e,metric:t,showMap:n}})}var V,Fe,H,U,W,G,K,Ie,q,J,Y,X,Z,Q,$,Le;e((()=>{_(),oe(),y(),fe(),ue(),he(),Ee(),De(),je(),V=r(),se(),Fe=`storybook/email-breakdown`,H=1234,U=Me(`view`),W=Me(`metric`),G=`802px`,K=(e,{args:t})=>(0,V.jsx)(ve,{width:t.showMap&&t.view===`countries`?G:void 0,children:(0,V.jsx)(e,{})}),Ie={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:j,tags:[`autodocs`],argTypes:{view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. The email breakdown endpoints have no comparison period, so the widget renders without deltas."}}},decorators:[v]},q={render:Ne,args:{view:`countries`,metric:`opens`,showMap:!1},decorators:[K]},J={render:Ne,args:{view:`countries`,metric:`clicks`,showMap:!0},decorators:[K]},Y={render:()=>B(5601),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`loading`),()=>x(`stats/opens/emails`,null))},X={render:()=>B(5602),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`error`),()=>x(`stats/opens/emails`,null))},Z={render:()=>B(5603),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(x(`stats/opens/emails`,`empty`),()=>x(`stats/opens/emails`,null))},Q={render:()=>(0,V.jsx)(j,{attributes:{reportParams:g(!1),view:`countries`}}),decorators:[S]},$={render:e=>(0,V.jsx)(Pe,{...e}),args:{..._e,view:`countries`,metric:`opens`,showMap:!1},argTypes:{...de,view:{control:`select`,options:U},metric:{control:`select`,options:W},showMap:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Le=[`Default`,`LocationClicksWithMap`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,J as LocationClicksWithMap,Q as NoEmailSelected,$ as WidgetDashboardWithWidget,Le as __namedExportsOrder,Ie as default};