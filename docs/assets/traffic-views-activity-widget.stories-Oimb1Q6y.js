import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{S as ee,n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{On as te,n as o,w as s}from"./build-module-CDRs4YxF.js";import{et as ne,t as c}from"./date-fns-Bm9dQUxr.js";import{J as l,Z as u,at as re,j as d,q as f,tt as p}from"./report-metric-TMKCu6gf.js";import{n as ie}from"./heatmap-chart-eAV7zJqL.js";import{I as m,t as h}from"./src-CTZFYwrN.js";import{l as g,t as _}from"./src-CsA_y1X9.js";import{i as ae,r as v}from"./calendar-heatmap-window-BM8EG75J.js";import{a as oe}from"./hooks-BahXWPSJ.js";import{t as se}from"./adaptive-calendar-heatmap-b77PZ0V-.js";import{Cr as y,Nt as b,Vr as x,in as S,r as ce,x as C}from"./chart-tooltip-Be73Yb4J.js";import{t as w}from"./widget-state-C-TJKMCy.js";import{C as T,D as le,E as ue,S as de,T as fe,b as pe,t as me,w as he,x as E}from"./src-C9u1tQDw.js";function ge({value:e,cellLabel:t}){return(0,k.jsx)(d,{value:e,cellLabel:t,emptyLabel:r(`No views`,`jetpack-premium-analytics-pkg`),formatValue:ce})}function _e(){let{reportParams:e}=re(),t=ae(oe()),n=ne(new Date,`yyyy-MM-dd`),i=(0,O.useMemo)(()=>v(e,{minDays:t,maxDays:t},n),[e,t,n]),a=(0,O.useMemo)(()=>v(e,{},n),[e,n]).startDate<i.startDate,{primary:o,isLoading:s,isFetching:c,isError:l,error:u,refetch:d}=S((0,O.useMemo)(()=>x({...e,from:i.startDate,to:i.endDate,period:`day`,stat_fields:`views`}),[e,i])),f=o.data,p=(0,O.useMemo)(()=>new Map((f?.data??[]).map(e=>{let t=Number(e.views??0);return[String(e.time_interval),t>0?t:null]})),[f]),h=(f?.data??[]).some(e=>Number(e.views??0)>0),_=m(i.startDate),y=m(i.endDate),b=a&&_&&y?ee(r(`No views between %1$s and %2$s.`,`jetpack-premium-analytics-pkg`),g(_,`compact`),g(y,`compact`)):r(`No views in this period.`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(se,{valueByDay:p,period:i,children:e=>(0,k.jsx)(w,{isLoading:s,isFetching:c,isError:l&&!h,isEmpty:!h,error:C(u,{retryDescription:r(`We couldn't load your traffic activity. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:d}),empty:{icon:te,description:b},children:(0,k.jsx)(ie,{...e,primaryColor:`var(--wp-admin-theme-color, #3858e9)`,withTooltips:!0,renderTooltip:ge})})})}function D({attributes:e={}}){return(0,k.jsx)(p,{attributes:e,children:(0,k.jsx)(_e,{})})}var O,k,A=t((()=>{b(),h(),_(),me(),i(),o(),c(),O=e(n(),1),k=a()})),j,M=t((()=>{o(),j={icon:s}})),N,P,F,I,L,R,z,ve=t((()=>{N=`jpa/traffic-views-activity`,P=`Traffic views activity`,F=`Daily views across the whole site, as a calendar heatmap.`,I={content:`Your daily views, shown as a heatmap to help you spot busy days and quieter stretches.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e=G){return(0,H.jsx)(D,{attributes:{reportParams:y(!1,e)}})}function V(e){return u(U,e),()=>{u(U,null)}}function ye(e){return(0,H.jsx)(fe,{...e,widgetType:de(z,j),renderModule:W,renderComponent:D,attributes:{reportParams:y(!0,G)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{b(),f(),T(),ue(),pe(),A(),M(),ve(),H=a(),l(),U=`stats/visits`,W=`storybook/traffic-views-activity`,G=`last-365-days`,K={title:`Packages/Premium Analytics/Widgets/TrafficViewsActivity`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Traffic views activity" widget shows daily site views as a calendar heatmap. Days without views are blank, and older weeks are hidden when space is limited.`}}}},q={render:()=>B(),decorators:[E]},J={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`loading`)},Y={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error`)},X={render:()=>B(`last-30-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`error-retryable`)},Z={render:()=>B(`today`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(ye,{...e}),args:{...he,widgetWidth:4,widgetHeight:1,rowHeight:200},argTypes:{...le}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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