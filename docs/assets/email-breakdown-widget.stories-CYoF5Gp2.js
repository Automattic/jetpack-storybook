import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{Ts as s,n as c}from"./build-module-Bt8gOW8e.js";import{t as l,u}from"./build-module-BAze1CUO.js";import{Kn as d,Xn as ee,_t as te,gt as f,ut as p,y as m}from"./chart-tooltip-Cd6R28vB.js";import{n as h,t as g}from"./with-chart-theme-hMJqwUpU.js";import{t as ne}from"./leaderboard-chart-D4uyqD7q.js";import{C as re,N as _,S as v,T as y,g as ie,k as ae}from"./report-metric-BSkCvVUy.js";import{t as oe}from"./widget-state-CqW7LysR.js";import{S as se,b as ce,t as le,x as ue,y as de}from"./src-ZlSzubd8.js";import{n as fe,r as b}from"./with-widget-canvas-Dz43KNHY.js";var x,S,C,w,T,E,D,O=e((()=>{x=`_root_ssfjg_1`,S=`_leaderboard_ssfjg_10`,C=`_label_ssfjg_19`,w=`_flag_ssfjg_33`,T=`_labelText_ssfjg_40`,E=`_labelLink_ssfjg_52`,D={root:x,leaderboard:S,label:C,flag:w,labelText:T,labelLink:E}}));function k(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link}))}function pe({postId:e,view:t,metric:n,max:r}){let i=t===`links`,o=i?`country`:A[t],s=te(e,o,{enabled:!i&&n===`opens`}),c=f(e,o,{enabled:!i&&n===`clicks`}),l=f(e,`link`,{enabled:i}),u=f(e,`user-content-link`,{enabled:i}),d=n===`clicks`?c:s,p=i?[l,u]:[d],m=l.data,h=u.data,g=d.data;return{rows:(0,a.useMemo)(()=>(i?[...k(m).filter(e=>!e.link),...k(h).filter(e=>!!e.link)].sort(ee):k(g)).slice(0,r>0?r:void 0).map((e,t)=>({...e,id:t})),[i,m,h,g,r]),isLoading:p.some(e=>e.isLoading),isFetching:p.some(e=>e.isFetching),isError:p.some(e=>e.isError&&e.data===void 0),refetch:()=>p.forEach(e=>e.refetch())}}var A,me=e((()=>{p(),o(),A={countries:`country`,devices:`device`,clients:`client`}}));function he(e){if(!e)return null;try{let{protocol:t}=new URL(e);return t===`http:`||t===`https:`?e:null}catch{return null}}function ge(e,n){let i=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let a;if(n===`countries`){let n=e.countryCode?m(e.countryCode):null;a=(0,N.jsx)(`div`,{className:D.label,children:(0,N.jsx)(ie,{label:e.label,imageUrl:n??void 0,imageAlt:r(t(`Flag of %s`,`jetpack-premium-analytics`),e.countryFull??e.label),imageClassName:D.flag})})}else if(n===`links`){let t=he(e.link);a=t?(0,N.jsx)(u,{className:D.labelLink,href:t,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,N.jsx)(`span`,{className:D.labelText,title:e.label,children:e.label})}else a=(0,N.jsx)(`span`,{className:D.labelText,title:e.label,children:e.label});return{id:String(e.id),label:a,currentValue:e.value,currentShare:i>0?e.value/i*100:0,previousValue:0,previousShare:0,delta:0}})}function _e(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics`)}}function ve(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:0}function j({view:e,metric:t,max:n}){let{reportParams:r}=_(),i=ve(r.post_id),{rows:a,isLoading:o,isFetching:s,isError:c,refetch:l}=pe({postId:i,view:e,metric:t,max:n});return(0,N.jsx)(F,{rows:a,view:e,isLoading:o,isFetching:s,isError:c,hasEmail:i>0,onRetry:l})}function M({attributes:e={}}){return(0,N.jsx)(ae,{attributes:e,children:(0,N.jsx)(j,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10})})}var N,P,F,ye=e((()=>{le(),o(),n(),c(),l(),O(),me(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F=({rows:e=[],view:n=`countries`,isLoading:r=!1,isFetching:i=!1,isError:o=!1,hasEmail:c=!0,onRetry:l})=>{let u=(0,a.useMemo)(()=>ge(e,n),[e,n]);return(0,N.jsx)(`div`,{className:D.root,children:(0,N.jsx)(oe,{isLoading:r,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics`),actions:l?[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]:void 0},empty:{icon:s,description:c?_e(n):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(ne,{className:D.leaderboard,data:u,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:P})})})}})),I,be=e((()=>{n(),c(),I={name:`jpa/email-breakdown`,title:t(`Email breakdown`,`jetpack-premium-analytics`),help:{content:t(`Breaks a sent email down by countries, devices, email clients, or clicked links.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`view`,label:t(`Break down by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Countries`,`jetpack-premium-analytics`),value:`countries`},{label:t(`Devices`,`jetpack-premium-analytics`),value:`devices`},{label:t(`Email clients`,`jetpack-premium-analytics`),value:`clients`},{label:t(`Links`,`jetpack-premium-analytics`),value:`links`}],relevance:`high`},{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}}));function L(e){return I.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function R({withComparison:e,view:t,metric:n}){return(0,B.jsx)(M,{attributes:{reportParams:{...d(e),post_id:H},view:t,metric:n}})}function z(e){return(0,B.jsx)(M,{attributes:{reportParams:{...d(!1),post_id:e},view:`countries`,metric:`opens`}})}function xe({withComparison:e,view:t,metric:n,...r}){return(0,B.jsx)(ce,{...r,widgetType:{...I,presentation:`framed`},renderModule:V,renderComponent:M,attributes:{reportParams:{...d(e),post_id:H},view:t,metric:n}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),v(),g(),ue(),fe(),ye(),be(),B=i(),re(),V=`storybook/email-breakdown`,H=1234,U=L(`view`),W=L(`metric`),G={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},view:{control:`select`,options:U},metric:{control:`select`,options:W}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. These endpoints have no comparison period, so the widget renders without deltas even when the date picker injects comparison params."}}},decorators:[h]},K={render:R,args:{withComparison:!1,view:`countries`,metric:`opens`},decorators:[b]},q={render:R,args:{withComparison:!0,view:`countries`,metric:`opens`},decorators:[b]},J={render:()=>z(5601),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`loading`),()=>y(`stats/opens/emails`,null))},Y={render:()=>z(5602),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`error`),()=>y(`stats/opens/emails`,null))},X={render:()=>z(5603),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(y(`stats/opens/emails`,`empty`),()=>y(`stats/opens/emails`,null))},Z={render:()=>(0,B.jsx)(M,{attributes:{reportParams:d(!1),view:`countries`}}),decorators:[b]},Q={render:e=>(0,B.jsx)(xe,{...e}),args:{...de,withComparison:!0,view:`countries`,metric:`opens`},argTypes:{...se,withComparison:{control:`boolean`},view:{control:`select`,options:U},metric:{control:`select`,options:W}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    withComparison: false,
    view: 'countries',
    metric: 'opens'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default populated state — the selected email broken down by country.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailBreakdown,
  args: {
    withComparison: true,
    view: 'countries',
    metric: 'opens'
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
    metric: 'opens'
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
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};