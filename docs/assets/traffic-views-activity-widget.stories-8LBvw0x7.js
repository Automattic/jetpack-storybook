import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as r,n as i,r as a,t as o}from"./build-module-DyKOxfM8.js";import{t as s}from"./jsx-runtime-D2pHJD-r.js";import{On as ee,n as c,w as l}from"./build-module-CDRs4YxF.js";import{et as te,t as u}from"./date-fns-Bm9dQUxr.js";import{K as d,X as f,et as p,it as ne,q as m}from"./report-metric-DykAMe7x.js";import{n as re}from"./heatmap-chart-B9emwLZK.js";import{P as h,t as g}from"./src-DhTT1cTw.js";import{d as _,n as v,t as y}from"./src-CaR1T9Ff.js";import{i as ie,r as b}from"./calendar-heatmap-window-DvbbwhP3.js";import{a as x}from"./hooks-Dc550GPX.js";import{t as ae}from"./adaptive-calendar-heatmap-BJvXcEyh.js";import{Tt as S,Xt as oe,hr as C,i as se,p as ce}from"./chart-tooltip-KET-sEal.js";import{t as le}from"./widget-state-BlpU-WUj.js";import{C as ue,D as w,E as T,S as E,T as de,b as fe,t as pe,w as me,x as D}from"./src-Bhzo9Aci.js";function he({value:e,cellLabel:t}){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`strong`,{children:e===null?i(`No views`,`jetpack-premium-analytics-pkg`):r(a(`%s view`,`%s views`,e,`jetpack-premium-analytics-pkg`),v(e,`number`,{decimals:0}))}),(0,A.jsx)(`div`,{children:t})]})}function ge(){let{reportParams:e}=ne(),t=ie(x()),n=te(new Date,`yyyy-MM-dd`),a=(0,k.useMemo)(()=>b(e,{minDays:t,maxDays:t},n),[e,t,n]),o=(0,k.useMemo)(()=>b(e,{},n),[e,n]).startDate<a.startDate,{primary:s,isLoading:c,isFetching:l,isError:u,error:d,refetch:f}=oe((0,k.useMemo)(()=>se({...e,from:a.startDate,to:a.endDate,period:`day`,stat_fields:`views`}),[e,a])),p=s.data,m=(0,k.useMemo)(()=>new Map((p?.data??[]).map(e=>{let t=Number(e.views??0);return[String(e.time_interval),t>0?t:null]})),[p]),g=(p?.data??[]).some(e=>Number(e.views??0)>0),v=h(a.startDate),y=h(a.endDate),S=o&&v&&y?r(i(`No views between %1$s and %2$s.`,`jetpack-premium-analytics-pkg`),_(v,`compact`),_(y,`compact`)):i(`No views in this period.`,`jetpack-premium-analytics-pkg`);return(0,A.jsx)(ae,{valueByDay:m,period:a,children:e=>(0,A.jsx)(le,{isLoading:c,isFetching:l,isError:u&&!g,isEmpty:!g,error:ce(d,{retryDescription:i(`We couldn't load your traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:f}),empty:{icon:ee,description:S},children:(0,A.jsx)(re,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:he})})})}function O({attributes:e={}}){return(0,A.jsx)(p,{attributes:e,children:(0,A.jsx)(ge,{})})}var k,A,_e=t((()=>{S(),g(),y(),pe(),o(),c(),u(),k=e(n(),1),A=s()})),j,M=t((()=>{c(),j={icon:l}})),N,P,F,I,L,R,z,ve=t((()=>{N=`jpa/traffic-views-activity`,P=`Traffic views activity`,F=`Daily views across the whole site, as a calendar heatmap.`,I={content:`Your daily views, shown as a heatmap to help you spot busy days and quieter stretches.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e=G){return(0,H.jsx)(O,{attributes:{reportParams:C(!1,e)}})}function V(e){return f(U,e),()=>{f(U,null)}}function ye(e){return(0,H.jsx)(de,{...e,widgetType:E(z,j),renderModule:W,renderComponent:O,attributes:{reportParams:C(!0,G)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{S(),d(),ue(),T(),fe(),_e(),M(),ve(),H=s(),m(),U=`stats/visits`,W=`storybook/traffic-views-activity`,G=`last-365-days`,K={title:`Packages/Premium Analytics/Widgets/TrafficViewsActivity`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Traffic views activity" widget shows daily site views as a calendar heatmap. Days without views are blank, and older weeks are hidden when space is limited.`}}}},q={render:()=>B(),decorators:[D]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>V(`loading`)},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>V(`error`)},X={render:()=>B(`last-30-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>V(`error-retryable`)},Z={render:()=>B(`today`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(ye,{...e}),args:{...me,widgetWidth:4,widgetHeight:1,rowHeight:200},argTypes:{...w}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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