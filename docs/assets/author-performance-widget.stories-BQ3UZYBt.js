import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Tn as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{$ as c,m as l,v as u,wt as d}from"./hooks-D1qZnH3R.js";import{M as f,t as p}from"./src-C-E2d-Lb.js";import{t as m,u as h}from"./src-CJGEmgc4.js";import{An as ee,Mn as te,a as g,it as _,r as v,tn as ne,un as re}from"./date-period-dropdown-C9fxDnd0.js";import{r as ie,t as y}from"./metric-tabs-chart-skeleton-BHvwHfX_.js";import{i as b,r as x}from"./register-report-mocks-X0p7n8EE.js";import{t as S}from"./widget-state-BaX56W5u.js";import{t as C}from"./src-Caz9VwDS.js";import{a as ae,c as oe,i as se,l as ce,n as le,o as ue,r as w,s as de}from"./with-widget-canvas-B4P8QcDF.js";import{n as fe,t as pe}from"./preset-for-story-interval-BNlf8FMF.js";var T,E,D=e((()=>{T=`_root_10isw_1`,E={root:T}}));function O(e,t,n){let{primary:r,isLoading:i,isFetching:o,isError:s,error:c,refetch:l}=_((0,a.useMemo)(()=>({...t,period:n,summarize:0,max:0}),[t,n]),{enabled:e>0});return{current:(0,a.useMemo)(()=>(r.data?.data??[]).flatMap(t=>{let n=h(t.time_interval);return n?[{date:n,value:ee(t.items,e)?.views??0}]:[]}).sort((e,t)=>e.date.getTime()-t.date.getTime()),[r.data,e]),isLoading:i,isFetching:o,isError:s,error:c,hasData:!!r.data,refetch:l}}var k=e((()=>{v(),m(),o()}));function A({chartType:e}){let{reportParams:n}=u(),r=te(n.author_id),{current:i,isLoading:o,isFetching:s,isError:c,error:l,hasData:p,refetch:m}=O(r,n,g(n.interval,re)),h=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:i.reduce((e,t)=>e+t.value,0),current:i}],[i]);return(0,M.jsx)(`div`,{className:E.root,children:(0,M.jsx)(S,{isLoading:o,isFetching:s,isError:!p&&c,isEmpty:r<=0,error:d(l,{retryDescription:t(`We couldn't load this author's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:m}),empty:{icon:f,description:t(`Open an author to see their views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(y,{}),children:(0,M.jsx)(ie,{metrics:h,dataFormat:N,chartType:e})})})}function j({attributes:e={}}){return(0,M.jsx)(l,{attributes:e,children:(0,M.jsx)(A,{chartType:e?.chartType===`line`?`line`:`bar`})})}var M,N,P=e((()=>{v(),p(),C(),o(),n(),D(),k(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I=e((()=>{s(),C(),F={icon:i,attributes:[c()],example:{attributes:{chartType:`bar`}}}})),L,R,z,B,V,H,U,me=e((()=>{L=`jpa/author-performance`,R=`Author performance`,z=`How the posts of the author being viewed performed over the selected period.`,B={content:`This author’s views over the selected period. Views come from the site’s 20 most viewed authors per period, so on a site with more authors, a period where this author ranks lower counts as zero.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasAuthorScope:e,interval:t,chartType:n}){return{chartType:n,reportParams:{...ne(!1,fe(t)),interval:t,...e?{author_id:q}:{}}}}function G(e){return(0,K.jsx)(j,{attributes:W(e)})}function he({hasAuthorScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(de,{...r,widgetType:se(U,F),renderModule:J,renderComponent:j,attributes:W({hasAuthorScope:e,interval:t,chartType:n})})}var K,q,J,Y,X,Z,Q,$;e((()=>{v(),x(),oe(),ae(),pe(),le(),P(),I(),me(),K=r(),b(),q=101,J=`storybook/author-performance`,Y={title:`Packages/Premium Analytics/Widgets/AuthorPerformance`,component:j,tags:[`autodocs`],argTypes:{hasAuthorScope:{control:`boolean`,description:"Include the `author_id` report param the author detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the endpoint buckets by. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:'The "Author performance" widget of the author detail page: the scoped author\'s views per chart interval from `stats/top-authors`, as a bar chart by default. Without an author scope the widget renders a scopeless empty state.'}}}},X={render:G,args:{hasAuthorScope:!0,interval:`day`,chartType:`bar`},decorators:[w]},Z={render:G,args:{hasAuthorScope:!1,interval:`day`,chartType:`bar`},decorators:[w]},Q={render:e=>(0,K.jsx)(he,{...e}),args:{...ue,widgetWidth:3,widgetHeight:2,hasAuthorScope:!0,interval:`day`,chartType:`bar`},argTypes:{...ce}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderAuthorPerformance,
  args: {
    hasAuthorScope: true,
    interval: 'day',
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderAuthorPerformance,
  args: {
    hasAuthorScope: false,
    interval: 'day',
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <AuthorPerformanceDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 3,
    widgetHeight: 2,
    hasAuthorScope: true,
    interval: 'day',
    chartType: 'bar'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoAuthorScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Z as NoAuthorScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};