import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Tn as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{$ as c,Ct as l,m as u,v as d}from"./hooks-CmaEnv-y.js";import{M as ee,t as f}from"./src-C-E2d-Lb.js";import{t as p,u as m}from"./src-CJGEmgc4.js";import{An as te,Mn as ne,a as h,it as g,r as _,tn as re,un as ie}from"./date-period-dropdown-CXsXQ5hf.js";import{r as ae,t as v}from"./metric-tabs-chart-skeleton-BspwUd74.js";import{i as y,r as b}from"./register-report-mocks-DT2h1hb1.js";import{t as x}from"./widget-state-B_vSyGmn.js";import{t as S}from"./src-CvWi0Vbo.js";import{a as C,c as oe,i as se,l as ce,n as le,o as ue,r as w,s as de}from"./with-widget-canvas-Di8ZnJ3p.js";import{n as fe,t as pe}from"./preset-for-story-interval-BNlf8FMF.js";var T,E,D=e((()=>{T=`_root_10isw_1`,E={root:T}}));function O(e,t,n){let{primary:r,isLoading:i,isFetching:o,isError:s,error:c,refetch:l}=g((0,a.useMemo)(()=>({...t,period:n,summarize:0,max:0}),[t,n]),{enabled:e>0});return{current:(0,a.useMemo)(()=>(r.data?.data??[]).flatMap(t=>{let n=m(t.time_interval);return n?[{date:n,value:te(t.items,e)?.views??0}]:[]}).sort((e,t)=>e.date.getTime()-t.date.getTime()),[r.data,e]),isLoading:i,isFetching:o,isError:s,error:c,hasData:!!r.data,refetch:l}}var k=e((()=>{_(),p(),o()}));function A({chartType:e}){let{reportParams:n}=d(),r=ne(n.author_id),{current:i,isLoading:o,isFetching:s,isError:c,error:u,hasData:f,refetch:p}=O(r,n,h(n.interval,ie)),m=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:i.reduce((e,t)=>e+t.value,0),current:i}],[i]);return(0,M.jsx)(`div`,{className:E.root,children:(0,M.jsx)(x,{isLoading:o,isFetching:s,isError:!f&&c,isEmpty:r<=0,error:l(u,{retryDescription:t(`We couldn't load this author's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:p}),empty:{icon:ee,description:t(`Open an author to see their views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(v,{}),children:(0,M.jsx)(ae,{metrics:m,dataFormat:N,chartType:e})})})}function j({attributes:e={}}){return(0,M.jsx)(u,{attributes:e,children:(0,M.jsx)(A,{chartType:e?.chartType===`line`?`line`:`bar`})})}var M,N,P=e((()=>{_(),f(),S(),o(),n(),D(),k(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I=e((()=>{s(),S(),F={icon:i,attributes:[c()],example:{attributes:{chartType:`bar`}}}})),L,R,z,B,V,H,U,me=e((()=>{L=`jpa/author-performance`,R=`Author performance`,z=`How the posts of the author being viewed performed over the selected period.`,B={content:`This author’s views over the selected period. Views come from the site’s 20 most viewed authors per period, so on a site with more authors, a period where this author ranks lower counts as zero.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasAuthorScope:e,interval:t,chartType:n}){return{chartType:n,reportParams:{...re(!1,fe(t)),interval:t,...e?{author_id:q}:{}}}}function G(e){return(0,K.jsx)(j,{attributes:W(e)})}function he({hasAuthorScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(de,{...r,widgetType:se(U,F),renderModule:J,renderComponent:j,attributes:W({hasAuthorScope:e,interval:t,chartType:n})})}var K,q,J,Y,X,Z,Q,$;e((()=>{_(),b(),oe(),C(),pe(),le(),P(),I(),me(),K=r(),y(),q=101,J=`storybook/author-performance`,Y={title:`Packages/Premium Analytics/Widgets/AuthorPerformance`,component:j,tags:[`autodocs`],argTypes:{hasAuthorScope:{control:`boolean`,description:"Include the `author_id` report param the author detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the endpoint buckets by. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:'The "Author performance" widget of the author detail page: the scoped author\'s views per chart interval from `stats/top-authors`, as a bar chart by default. Without an author scope the widget renders a scopeless empty state.'}}}},X={render:G,args:{hasAuthorScope:!0,interval:`day`,chartType:`bar`},decorators:[w]},Z={render:G,args:{hasAuthorScope:!1,interval:`day`,chartType:`bar`},decorators:[w]},Q={render:e=>(0,K.jsx)(he,{...e}),args:{...ue,widgetWidth:3,widgetHeight:2,hasAuthorScope:!0,interval:`day`,chartType:`bar`},argTypes:{...ce}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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