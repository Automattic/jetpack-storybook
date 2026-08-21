import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as ee,n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{On as te,n as o,w as s}from"./build-module-CDRs4YxF.js";import{et as ne,t as c}from"./date-fns-Bm9dQUxr.js";import{$ as l,G as u,K as d,Y as f,k as p,rt as m}from"./report-metric-J4TO8HRA.js";import{n as re}from"./heatmap-chart-BGLNgSel.js";import{I as h,t as g}from"./src-BNSVSo09.js";import{O as ie,pn as ae,qt as _,t as v}from"./src-nMZqQzNJ.js";import{l as y,t as b}from"./src-C80Pc2Jl.js";import{i as oe,r as x}from"./calendar-heatmap-window-CaAcWVNB.js";import{a as S}from"./hooks-ygJRSNEp.js";import{t as C}from"./adaptive-calendar-heatmap-BUvWxDEO.js";import{r as w,x as T}from"./chart-tooltip-CjR5Uh7U.js";import{r as se}from"./metric-sparkline-skeleton-xAH8HJvw.js";import{t as ce}from"./widget-state-JY18mPiB.js";import{C as le,D as ue,E as de,S as fe,T as pe,b as me,t as he,w as ge,x as E}from"./src-CiTPqeAH.js";function _e({value:e,cellLabel:t}){return(0,k.jsx)(p,{value:e,cellLabel:t,emptyLabel:r(`No views`,`jetpack-premium-analytics-pkg`),formatValue:w})}function ve(){let{reportParams:e}=m(),t=oe(S()),n=ne(new Date,`yyyy-MM-dd`),i=(0,O.useMemo)(()=>x(e,{minDays:t,maxDays:t},n),[e,t,n]),a=(0,O.useMemo)(()=>x(e,{},n),[e,n]).startDate<i.startDate,{primary:o,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=ie((0,O.useMemo)(()=>ae({...e,from:i.startDate,to:i.endDate,period:`day`,stat_fields:`views`}),[e,i])),f=o.data,p=(0,O.useMemo)(()=>new Map((f?.data??[]).map(e=>{let t=Number(e.views??0);return[String(e.time_interval),t>0?t:null]})),[f]),g=(f?.data??[]).some(e=>Number(e.views??0)>0),_=h(i.startDate),v=h(i.endDate),b=a&&_&&v?ee(r(`No views between %1$s and %2$s.`,`jetpack-premium-analytics-pkg`),y(_,`compact`),y(v,`compact`)):r(`No views in this period.`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(C,{valueByDay:p,period:i,children:e=>(0,k.jsx)(ce,{isLoading:s,isFetching:c,isError:l&&!g,isEmpty:!g,error:T(u,{retryDescription:r(`We couldn't load your traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:{icon:te,description:b},renderLoading:(0,k.jsx)(se,{}),children:(0,k.jsx)(re,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:_e})})})}function D({attributes:e={}}){return(0,k.jsx)(l,{attributes:e,children:(0,k.jsx)(ve,{})})}var O,k,A=t((()=>{v(),g(),b(),he(),i(),o(),c(),O=e(n(),1),k=a()})),j,M=t((()=>{o(),j={icon:s}})),N,P,F,I,L,R,z,ye=t((()=>{N=`jpa/traffic-views-activity`,P=`Traffic views activity`,F=`Daily views across the whole site, as a calendar heatmap.`,I={content:`Your daily views, shown as a heatmap to help you spot busy days and quieter stretches.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e=G){return(0,H.jsx)(D,{attributes:{reportParams:_(!1,e)}})}function V(e){return f(U,e),()=>{f(U,null)}}function be(e){return(0,H.jsx)(pe,{...e,widgetType:fe(z,j),renderModule:W,renderComponent:D,attributes:{reportParams:_(!0,G)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),u(),le(),de(),me(),A(),M(),ye(),H=a(),d(),U=`stats/visits`,W=`storybook/traffic-views-activity`,G=`last-365-days`,K={title:`Packages/Premium Analytics/Widgets/TrafficViewsActivity`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Traffic views activity" widget shows daily site views as a calendar heatmap. Days without views are blank, and older weeks are hidden when space is limited.`}}}},q={render:()=>B(),decorators:[E]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`loading`)},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error`)},X={render:()=>B(`last-30-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error-retryable`)},Z={render:()=>B(`today`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(be,{...e}),args:{...ge,widgetWidth:4,widgetHeight:1,rowHeight:200},argTypes:{...ue}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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