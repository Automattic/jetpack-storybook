import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i,u as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Dn as ee,t as c}from"./build-module-zwSmKorH.js";import{X as te,t as l}from"./date-fns-D7Rx6aVe.js";import{D as u,K as ne,a as d,b as re,bn as ie,g as f,yn as p}from"./hooks-DYiDAF02.js";import{n as ae}from"./heatmap-chart-CCCWDbTP.js";import{P as m,t as h}from"./src-CsItV6ru.js";import{s as g,t as _}from"./src-BviJNTlP.js";import{R as v,Tn as oe,en as y,i as b}from"./date-filters-panel-RFPF4lxM.js";import{t as x}from"./adaptive-calendar-heatmap-DInuLmdR.js";import{r as se}from"./metric-sparkline-skeleton-BzRlWhaX.js";import{D as S,G as C,K as w,Y as T,k as ce}from"./report-metric-D-5bURFE.js";import{t as le}from"./widget-state-B7_ZN7vq.js";import{C as ue,D as de,E as fe,S as pe,T as me,b as he,t as ge,w as _e,x as E}from"./src-BlbqYgAB.js";function ve({value:e,cellLabel:t}){return(0,k.jsx)(S,{value:e,cellLabel:t,emptyLabel:r(`No views`,`jetpack-premium-analytics-pkg`),formatValue:u})}function ye(){let{reportParams:e}=re(),t=ie(d()),n=te(new Date,`yyyy-MM-dd`),i=(0,O.useMemo)(()=>p(e,{maxDays:t},n),[e,t,n]),o=(0,O.useMemo)(()=>p(e,{},n),[e,n]).startDate<i.startDate,{primary:s,isLoading:c,isFetching:l,isError:u,error:f,refetch:h}=v((0,O.useMemo)(()=>oe({...e,from:i.startDate,to:i.endDate,period:`day`,stat_fields:`views`}),[e,i])),_=s.data,y=(0,O.useMemo)(()=>new Map((_?.data??[]).map(e=>{let t=Number(e.views??0);return[String(e.time_interval),t>0?t:null]})),[_]),b=(_?.data??[]).some(e=>{let t=String(e.time_interval);return Number(e.views??0)>0&&t>=i.startDate&&t<=i.endDate}),S=m(i.startDate),C=m(i.endDate),w=o&&S&&C?a(r(`No views between %1$s and %2$s.`,`jetpack-premium-analytics-pkg`),g(S,`compact`),g(C,`compact`)):r(`No views in this period.`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(x,{valueByDay:y,period:i,children:(e,t)=>(0,k.jsx)(le,{isLoading:c,isFetching:l,isError:u&&!b,isEmpty:!b,error:ne(f,{retryDescription:r(`We couldn't load your traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),empty:{icon:ee,description:w},renderLoading:(0,k.jsx)(se,{}),children:(0,k.jsx)(ce,{pager:t,children:(0,k.jsx)(ae,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:ve})})})})}function D({attributes:e={}}){return(0,k.jsx)(f,{attributes:e,children:(0,k.jsx)(ye,{})})}var O,k,A=t((()=>{b(),h(),_(),ge(),i(),c(),l(),O=e(n(),1),k=o()})),j,M=t((()=>{c(),j={icon:s}})),N,P,F,I,L,R,z,be=t((()=>{N=`jpa/traffic-views-activity`,P=`Traffic views activity`,F=`Daily views across the whole site, as a calendar heatmap.`,I={content:`Your daily views, shown as a heatmap to help you spot busy days and quieter stretches.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e=G){return(0,H.jsx)(D,{attributes:{reportParams:y(!1,e)}})}function V(e){return T(U,e),()=>{T(U,null)}}function xe(e){return(0,H.jsx)(me,{...e,widgetType:pe(z,j),renderModule:W,renderComponent:D,attributes:{reportParams:y(!0,G)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{b(),C(),ue(),fe(),he(),A(),M(),be(),H=o(),w(),U=`stats/visits`,W=`storybook/traffic-views-activity`,G=`last-365-days`,K={title:`Packages/Premium Analytics/Widgets/TrafficViewsActivity`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Traffic views activity" widget shows daily site views as a calendar heatmap. Days without views are blank, and older weeks are hidden when space is limited.`}}}},q={render:()=>B(),decorators:[E]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`loading`)},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error`)},X={render:()=>B(`last-30-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error-retryable`)},Z={render:()=>B(`today`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{..._e,widgetWidth:4,widgetHeight:1,rowHeight:200},argTypes:{...de}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    widgetWidth: 4,
    widgetHeight: 1,
    rowHeight: 200
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:"The widget at its production size: full width and one row. Raise `widgetHeight`\nto 2 to see it switch from compact squares to labelled cells.",...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};