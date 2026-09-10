import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{f as ee,n as r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Dn as te,t as s}from"./build-module-zwSmKorH.js";import{X as ne,t as c}from"./date-fns-BSWzdn8-.js";import{C as l,En as re,L as u,Tn as d,c as ie,st as ae,y as f}from"./wp-date-settings-BS7pnBwD.js";import{n as oe}from"./heatmap-chart-BvV5ovSd.js";import{t as p,u as m}from"./src-D_gpVFWl.js";import{s as h,t as g}from"./src-DZEUVpRM.js";import{R as _,Tn as se,en as v,i as y}from"./date-filters-panel-CuHAY5Vs.js";import{t as b}from"./adaptive-calendar-heatmap-DPl8zUPj.js";import{r as ce}from"./metric-sparkline-skeleton-BFU3AYsS.js";import{D as x,J as S,Z as C,k as w,q as T}from"./report-metric-xm9mDg10.js";import{t as le}from"./widget-state-BjaTst1P.js";import{C as ue,D as de,E as fe,S as pe,T as me,b as he,t as ge,w as _e,x as E}from"./src-D4xVTRht.js";function ve({value:e,cellLabel:t}){return(0,k.jsx)(x,{value:e,cellLabel:t,emptyLabel:r(`No views`,`jetpack-premium-analytics-pkg`),formatValue:u})}function ye(){let{reportParams:e}=l(),t=re(ie()),n=ne(new Date,`yyyy-MM-dd`),i=(0,O.useMemo)(()=>d(e,{maxDays:t},n),[e,t,n]),a=(0,O.useMemo)(()=>d(e,{},n),[e,n]).startDate<i.startDate,{primary:o,isLoading:s,isFetching:c,isError:u,error:f,refetch:p}=_((0,O.useMemo)(()=>se({...e,from:i.startDate,to:i.endDate,period:`day`,stat_fields:`views`}),[e,i])),g=o.data,v=(0,O.useMemo)(()=>new Map((g?.data??[]).map(e=>{let t=Number(e.views??0);return[String(e.time_interval),t>0?t:null]})),[g]),y=(g?.data??[]).some(e=>{let t=String(e.time_interval);return Number(e.views??0)>0&&t>=i.startDate&&t<=i.endDate}),x=m(i.startDate),S=m(i.endDate),C=a&&x&&S?ee(r(`No views between %1$s and %2$s.`,`jetpack-premium-analytics-pkg`),h(x,`compact`),h(S,`compact`)):r(`No views in this period.`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(b,{valueByDay:v,period:i,children:(e,t)=>(0,k.jsx)(le,{isLoading:s,isFetching:c,isError:u&&!y,isEmpty:!y,error:ae(f,{retryDescription:r(`We couldn't load your traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:te,description:C},renderLoading:(0,k.jsx)(ce,{}),children:(0,k.jsx)(w,{pager:t,children:(0,k.jsx)(oe,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:ve})})})})}function D({attributes:e={}}){return(0,k.jsx)(f,{attributes:e,children:(0,k.jsx)(ye,{})})}var O,k,A=t((()=>{y(),p(),g(),ge(),i(),s(),c(),O=e(n(),1),k=a()})),j,M=t((()=>{s(),j={icon:o}})),N,P,F,I,L,R,z,be=t((()=>{N=`jpa/traffic-views-activity`,P=`Traffic views activity`,F=`Daily views across the whole site, as a calendar heatmap.`,I={content:`Your daily views, shown as a heatmap to help you spot busy days and quieter stretches.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e=G){return(0,H.jsx)(D,{attributes:{reportParams:v(!1,e)}})}function V(e){return C(U,e),()=>{C(U,null)}}function xe(e){return(0,H.jsx)(me,{...e,widgetType:pe(z,j),renderModule:W,renderComponent:D,attributes:{reportParams:v(!0,G)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{y(),T(),ue(),fe(),he(),A(),M(),be(),H=a(),S(),U=`stats/visits`,W=`storybook/traffic-views-activity`,G=`last-365-days`,K={title:`Packages/Premium Analytics/Widgets/TrafficViewsActivity`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Traffic views activity" widget shows daily site views as a calendar heatmap. Days without views are blank, and older weeks are hidden when space is limited.`}}}},q={render:()=>B(),decorators:[E]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`loading`)},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error`)},X={render:()=>B(`last-30-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error-retryable`)},Z={render:()=>B(`today`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{..._e,widgetWidth:3,widgetHeight:1,rowHeight:200},argTypes:{...de}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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