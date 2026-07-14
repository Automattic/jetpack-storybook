import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{Ts as s,n as c}from"./build-module-Bt8gOW8e.js";import{M as l,T as u,cn as ee,d,in as f,j as p,s as m}from"./hooks-CuFQtcHB.js";import{t as h,u as g}from"./build-module-BAze1CUO.js";import{n as _,t as te}from"./with-chart-theme-D8intJPc.js";import{g as ne}from"./chart-tooltip-BbgnR7_k.js";import{t as re}from"./leaderboard-chart-C-5XAZ-c.js";import{i as v,n as ie,t as ae}from"./register-report-mocks-BVUAUf2H.js";import{p as oe}from"./report-metric-CPnCbk24.js";import{t as se}from"./widget-state-2XCprEt0.js";import{S as ce,b as le,t as ue,x as de,y}from"./src-DgQNROIn.js";var b,x,S,C,w,T,E,D=e((()=>{b=`_root_ssfjg_1`,x=`_leaderboard_ssfjg_10`,S=`_label_ssfjg_19`,C=`_flag_ssfjg_33`,w=`_labelText_ssfjg_40`,T=`_labelLink_ssfjg_52`,E={root:b,leaderboard:x,label:S,flag:C,labelText:w,labelLink:T}}));function O(e){return(e?.data?.[0]?.items??[]).map(e=>({label:String(e.label??``),value:e.value,countryCode:e.countryCode,countryFull:e.countryFull?String(e.countryFull):void 0,link:e.link}))}function fe({postId:e,view:t,metric:n,max:r}){let i=t===`links`,o=i?`country`:k[t],s=l(e,o,{enabled:!i&&n===`opens`}),c=p(e,o,{enabled:!i&&n===`clicks`}),u=p(e,`link`,{enabled:i}),d=p(e,`user-content-link`,{enabled:i}),f=n===`clicks`?c:s,m=i?[u,d]:[f],h=u.data,g=d.data,_=f.data;return{rows:(0,a.useMemo)(()=>(i?[...O(h).filter(e=>!e.link),...O(g).filter(e=>!!e.link)].sort(ee):O(_)).slice(0,r>0?r:void 0).map((e,t)=>({...e,id:t})),[i,h,g,_,r]),isLoading:m.some(e=>e.isLoading),isFetching:m.some(e=>e.isFetching),isError:m.some(e=>e.isError&&e.data===void 0),refetch:()=>m.forEach(e=>e.refetch())}}var k,pe=e((()=>{u(),o(),k={countries:`country`,devices:`device`,clients:`client`}}));function me(e){if(!e)return null;try{let{protocol:t}=new URL(e);return t===`http:`||t===`https:`?e:null}catch{return null}}function he(e,n){let i=Math.max(...e.map(e=>e.value),0);return e.map(e=>{let a;if(n===`countries`){let n=e.countryCode?ne(e.countryCode):null;a=(0,j.jsx)(`div`,{className:E.label,children:(0,j.jsx)(oe,{label:e.label,imageUrl:n??void 0,imageAlt:r(t(`Flag of %s`,`jetpack-premium-analytics`),e.countryFull??e.label),imageClassName:E.flag})})}else if(n===`links`){let t=me(e.link);a=t?(0,j.jsx)(g,{className:E.labelLink,href:t,variant:`unstyled`,openInNewTab:!0,title:e.label,children:e.label}):(0,j.jsx)(`span`,{className:E.labelText,title:e.label,children:e.label})}else a=(0,j.jsx)(`span`,{className:E.labelText,title:e.label,children:e.label});return{id:String(e.id),label:a,currentValue:e.value,currentShare:i>0?e.value/i*100:0,previousValue:0,previousShare:0,delta:0}})}function ge(e){switch(e){case`devices`:return t(`No device data for this email yet.`,`jetpack-premium-analytics`);case`clients`:return t(`No email client data for this email yet.`,`jetpack-premium-analytics`);case`links`:return t(`No link clicks for this email yet.`,`jetpack-premium-analytics`);default:return t(`No country data for this email yet.`,`jetpack-premium-analytics`)}}function _e(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:0}function ve({view:e,metric:t,max:n}){let{reportParams:r}=d(),i=_e(r.post_id),{rows:a,isLoading:o,isFetching:s,isError:c,refetch:l}=fe({postId:i,view:e,metric:t,max:n});return(0,j.jsx)(N,{rows:a,view:e,isLoading:o,isFetching:s,isError:c,hasEmail:i>0,onRetry:l})}function A({attributes:e={}}){return(0,j.jsx)(m,{attributes:e,children:(0,j.jsx)(ve,{view:e.view??`countries`,metric:e.metric??`opens`,max:e.max??10})})}var j,M,N,P=e((()=>{ue(),o(),n(),c(),h(),D(),pe(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=({rows:e=[],view:n=`countries`,isLoading:r=!1,isFetching:i=!1,isError:o=!1,hasEmail:c=!0,onRetry:l})=>{let u=(0,a.useMemo)(()=>he(e,n),[e,n]);return(0,j.jsx)(`div`,{className:E.root,children:(0,j.jsx)(se,{isLoading:r,isFetching:i,isError:o,isEmpty:e.length===0,error:{description:t(`We couldn't load this email's breakdown. Please try again in a moment.`,`jetpack-premium-analytics`),actions:l?[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]:void 0},empty:{icon:s,description:c?ge(n):t(`Select an email to see its breakdown.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(re,{className:E.leaderboard,data:u,withComparison:!1,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})})}})),F,ye=e((()=>{n(),c(),F={name:`jpa/email-breakdown`,title:t(`Email breakdown`,`jetpack-premium-analytics`),help:{content:t(`Breaks a sent email down by countries, devices, email clients, or clicked links.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`view`,label:t(`Break down by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Countries`,`jetpack-premium-analytics`),value:`countries`},{label:t(`Devices`,`jetpack-premium-analytics`),value:`devices`},{label:t(`Email clients`,`jetpack-premium-analytics`),value:`clients`},{label:t(`Links`,`jetpack-premium-analytics`),value:`links`}],relevance:`high`},{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}],isVisible:({view:e})=>e!==`links`},{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{view:`countries`,metric:`opens`,max:10}}}}));function I(e){return F.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function L({withComparison:e,view:t,metric:n}){return(0,z.jsx)(A,{attributes:{reportParams:{...f(e),post_id:V},view:t,metric:n}})}function R(e){return(0,z.jsx)(A,{attributes:{reportParams:{...f(!1),post_id:e},view:`countries`,metric:`opens`}})}function be({withComparison:e,view:t,metric:n,...r}){return(0,z.jsx)(le,{...r,widgetType:{...F,presentation:`framed`},renderModule:B,renderComponent:A,attributes:{reportParams:{...f(e),post_id:V},view:t,metric:n}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),ae(),te(),de(),P(),ye(),z=i(),ie(),B=`storybook/email-breakdown`,V=1234,H=I(`view`),U=I(`metric`),W=e=>(0,z.jsx)(`div`,{style:{width:`100%`,height:`320px`},children:(0,z.jsx)(e,{})}),G={title:`Packages/Premium Analytics/Widgets/EmailBreakdown`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},view:{control:`select`,options:H},metric:{control:`select`,options:U}},parameters:{docs:{description:{component:"The \"Email breakdown\" widget. Breaks a single sent email down by countries, devices, email clients, or clicked links, rendered as a leaderboard. The `view` attribute (`relevance: 'high'`) is exposed as a control by the widget host; the `metric` attribute picks the opens or clicks breakdown for the dimension views, while `links` always reads the clicks breakdown (merging internal link types with clicked user-content links, like the Calypso links module). Scoped to one email via a mocked `reportParams.post_id`. These endpoints have no comparison period, so the widget renders without deltas even when the date picker injects comparison params."}}},decorators:[_]},K={render:L,args:{withComparison:!1,view:`countries`,metric:`opens`},decorators:[W]},q={render:L,args:{withComparison:!0,view:`countries`,metric:`opens`},decorators:[W]},J={render:()=>R(5601),tags:[`!autodocs`],decorators:[W],beforeEach:()=>(v(`stats/opens/emails`,`loading`),()=>v(`stats/opens/emails`,null))},Y={render:()=>R(5602),tags:[`!autodocs`],decorators:[W],beforeEach:()=>(v(`stats/opens/emails`,`error`),()=>v(`stats/opens/emails`,null))},X={render:()=>R(5603),tags:[`!autodocs`],decorators:[W],beforeEach:()=>(v(`stats/opens/emails`,`empty`),()=>v(`stats/opens/emails`,null))},Z={render:()=>(0,z.jsx)(A,{attributes:{reportParams:f(!1),view:`countries`}}),decorators:[W]},Q={render:e=>(0,z.jsx)(be,{...e}),args:{...y,withComparison:!0,view:`countries`,metric:`opens`},argTypes:{...ce,withComparison:{control:`boolean`},view:{control:`select`,options:H},metric:{control:`select`,options:U}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
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