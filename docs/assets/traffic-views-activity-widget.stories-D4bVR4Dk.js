import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{f as ee,n as r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Dn as te,t as s}from"./build-module-zwSmKorH.js";import{X as ne,t as c}from"./date-fns-BSWzdn8-.js";import{C as re,En as ie,L as l,Tn as u,c as d,st as ae,y as f}from"./wp-date-settings-CSSX6Nn8.js";import{n as oe}from"./heatmap-chart-CA-YdM5Q.js";import{p,t as m,u as h}from"./src-D_gpVFWl.js";import{s as g,t as _}from"./src-B8DpQCYU.js";import{R as se,Tn as ce,en as v,i as y}from"./date-filters-panel-B7tJy0vF.js";import{t as b}from"./adaptive-calendar-heatmap-DHkQPwbr.js";import{r as x}from"./metric-sparkline-skeleton-B5_9Okpv.js";import{D as S,J as C,Z as w,k as le,q as ue}from"./report-metric-DoRCQYKk.js";import{t as de}from"./widget-state-I-uVTyYw.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as ve,w as ye,x as T}from"./src-8UpDLETB.js";function be({value:e,cellLabel:t}){return(0,O.jsx)(S,{value:e,cellLabel:t,emptyLabel:r(`No views`,`jetpack-premium-analytics-pkg`),formatValue:l})}function xe(){let{reportParams:e}=re(),t=ie(d()),n=ne(p(),`yyyy-MM-dd`),i=(0,D.useMemo)(()=>u(e,{maxDays:t},n),[e,t,n]),a=(0,D.useMemo)(()=>u(e,{},n),[e,n]).startDate<i.startDate,{primary:o,isLoading:s,isFetching:c,isError:l,error:f,refetch:m}=se((0,D.useMemo)(()=>ce({...e,from:i.startDate,to:i.endDate,period:`day`,stat_fields:`views`}),[e,i])),_=o.data,v=(0,D.useMemo)(()=>new Map((_?.data??[]).map(e=>{let t=Number(e.views??0);return[String(e.time_interval),t>0?t:null]})),[_]),y=(_?.data??[]).some(e=>{let t=String(e.time_interval);return Number(e.views??0)>0&&t>=i.startDate&&t<=i.endDate}),S=h(i.startDate),C=h(i.endDate),w=a&&S&&C?ee(r(`No views between %1$s and %2$s.`,`jetpack-premium-analytics-pkg`),g(S,`compact`),g(C,`compact`)):r(`No views in this period.`,`jetpack-premium-analytics-pkg`);return(0,O.jsx)(b,{valueByDay:v,period:i,children:(e,t)=>(0,O.jsx)(de,{isLoading:s,isFetching:c,isError:l&&!y,isEmpty:!y,error:ae(f,{retryDescription:r(`We couldn't load your traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}),empty:{icon:te,description:w},renderLoading:(0,O.jsx)(x,{}),children:(0,O.jsx)(le,{pager:t,children:(0,O.jsx)(oe,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:be})})})})}function E({attributes:e={}}){return(0,O.jsx)(f,{attributes:e,children:(0,O.jsx)(xe,{})})}var D,O,k=t((()=>{y(),m(),_(),ve(),i(),s(),c(),D=e(n(),1),O=a()})),A,j=t((()=>{s(),A={icon:o}})),M,N,P,F,I,L,R,Se=t((()=>{M=`jpa/traffic-views-activity`,N=`Traffic views activity`,P=`Daily views across the whole site, as a calendar heatmap.`,F={content:`Your daily views, shown as a heatmap to help you spot busy days and quieter stretches.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z(e=G){return(0,H.jsx)(E,{attributes:{reportParams:v(!1,e)}})}function B(e){return w(U,e),()=>{w(U,null)}}function V(e){return(0,H.jsx)(ge,{...e,widgetType:he(R,A),renderModule:W,renderComponent:E,attributes:{reportParams:v(!0,G)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{y(),ue(),fe(),me(),_e(),k(),j(),Se(),H=a(),C(),U=`stats/visits`,W=`storybook/traffic-views-activity`,G=`last-365-days`,K={title:`Packages/Premium Analytics/Widgets/TrafficViewsActivity`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Traffic views activity" widget shows daily site views as a calendar heatmap. Days without views are blank, and older weeks are hidden when space is limited.`}}}},q={render:()=>z(),decorators:[T]},J={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`loading`)},Y={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`error`)},X={render:()=>z(`last-30-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`error-retryable`)},Z={render:()=>z(`today`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>B(`empty`)},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...ye,widgetWidth:3,widgetHeight:1,rowHeight:200},argTypes:{...pe}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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