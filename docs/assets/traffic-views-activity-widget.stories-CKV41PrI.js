import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{f as r,n as i,t as a}from"./build-module-yGZutq_9.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Dn as ee,t as c}from"./build-module-zwSmKorH.js";import{X as te,t as l}from"./date-fns-BSWzdn8-.js";import{C as ne,En as re,L as u,Tn as d,c as ie,st as ae,y as f}from"./wp-date-settings-CG6Lwco7.js";import{n as oe}from"./heatmap-chart-CJHC-efI.js";import{t as p,u as m}from"./src-D_gpVFWl.js";import{s as h,t as g}from"./src-DWVfr5GW.js";import{R as se,Tn as ce,en as _,i as v}from"./date-filters-panel-DkhWwSMu.js";import{t as le}from"./adaptive-calendar-heatmap-DxPoz4xr.js";import{r as y}from"./metric-sparkline-skeleton-tNIQ72Q6.js";import{D as b,G as x,K as S,Y as C,k as w}from"./report-metric-Cz5vkpwR.js";import{t as T}from"./widget-state-0ABalMfe.js";import{C as ue,D as de,E as fe,S as pe,T as me,b as he,t as ge,w as _e,x as E}from"./src-gbelDm7s.js";function ve({value:e,cellLabel:t}){return(0,k.jsx)(b,{value:e,cellLabel:t,emptyLabel:i(`No views`,`jetpack-premium-analytics-pkg`),formatValue:u})}function ye(){let{reportParams:e}=ne(),t=re(ie()),n=te(new Date,`yyyy-MM-dd`),a=(0,O.useMemo)(()=>d(e,{maxDays:t},n),[e,t,n]),o=(0,O.useMemo)(()=>d(e,{},n),[e,n]).startDate<a.startDate,{primary:s,isLoading:c,isFetching:l,isError:u,error:f,refetch:p}=se((0,O.useMemo)(()=>ce({...e,from:a.startDate,to:a.endDate,period:`day`,stat_fields:`views`}),[e,a])),g=s.data,_=(0,O.useMemo)(()=>new Map((g?.data??[]).map(e=>{let t=Number(e.views??0);return[String(e.time_interval),t>0?t:null]})),[g]),v=(g?.data??[]).some(e=>{let t=String(e.time_interval);return Number(e.views??0)>0&&t>=a.startDate&&t<=a.endDate}),b=m(a.startDate),x=m(a.endDate),S=o&&b&&x?r(i(`No views between %1$s and %2$s.`,`jetpack-premium-analytics-pkg`),h(b,`compact`),h(x,`compact`)):i(`No views in this period.`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(le,{valueByDay:_,period:a,children:(e,t)=>(0,k.jsx)(T,{isLoading:c,isFetching:l,isError:u&&!v,isEmpty:!v,error:ae(f,{retryDescription:i(`We couldn't load your traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:ee,description:S},renderLoading:(0,k.jsx)(y,{}),children:(0,k.jsx)(w,{pager:t,children:(0,k.jsx)(oe,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:ve})})})})}function D({attributes:e={}}){return(0,k.jsx)(f,{attributes:e,children:(0,k.jsx)(ye,{})})}var O,k,A=t((()=>{v(),p(),g(),ge(),a(),c(),l(),O=e(n(),1),k=o()})),j,M=t((()=>{c(),j={icon:s}})),N,P,F,I,L,R,z,be=t((()=>{N=`jpa/traffic-views-activity`,P=`Traffic views activity`,F=`Daily views across the whole site, as a calendar heatmap.`,I={content:`Your daily views, shown as a heatmap to help you spot busy days and quieter stretches.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e=G){return(0,H.jsx)(D,{attributes:{reportParams:_(!1,e)}})}function V(e){return C(U,e),()=>{C(U,null)}}function xe(e){return(0,H.jsx)(me,{...e,widgetType:pe(z,j),renderModule:W,renderComponent:D,attributes:{reportParams:_(!0,G)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),x(),ue(),fe(),he(),A(),M(),be(),H=o(),S(),U=`stats/visits`,W=`storybook/traffic-views-activity`,G=`last-365-days`,K={title:`Packages/Premium Analytics/Widgets/TrafficViewsActivity`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Traffic views activity" widget shows daily site views as a calendar heatmap. Days without views are blank, and older weeks are hidden when space is limited.`}}}},q={render:()=>B(),decorators:[E]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`loading`)},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error`)},X={render:()=>B(`last-30-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error-retryable`)},Z={render:()=>B(`today`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{..._e,widgetWidth:3,widgetHeight:1,rowHeight:200},argTypes:{...de}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficViewsActivity(),
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`A year of daily views.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficViewsActivity('last-90-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceVisitsState('loading')
}`,...J.parameters?.docs?.source},description:{story:`The initial loading state.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficViewsActivity('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceVisitsState('error')
}`,...Y.parameters?.docs?.source},description:{story:`A permission error without a retry action.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficViewsActivity('last-30-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceVisitsState('error-retryable')
}`,...X.parameters?.docs?.source},description:{story:`A connection error with a retry action.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficViewsActivity('today'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceVisitsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`A period with no views.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TrafficViewsActivityDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 3,
    widgetHeight: 1,
    rowHeight: 200
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:"The widget at its production size: full width and one row. Raise `widgetHeight`\nto 2 to see it switch from compact squares to labelled cells.",...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};