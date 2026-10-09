import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{C as s,Et as c,Ot as l,Sn as u,nt as d,t as ee,wt as te}from"./date-fns-I6jayRk5.js";import{P as ne}from"./library-DTloIBum.js";import{t as re}from"./src-fQR6rGKL.js";import{t as ie,u as ae}from"./src-rrY7vAoW.js";import{En as oe,Nt as se,On as ce,pn as le,r as f,t as p}from"./src-EFVFQWJ1.js";import{_ as m,ct as h,rt as g,x as ue}from"./charts-provider-BcXi6Auj.js";import{t as de}from"./chart-empty-state-BNVI4QY7.js";import{n as fe,r as pe}from"./register-report-mocks-ByCR7QC_.js";import{t as me}from"./widget-state-DFLDEYqh.js";import{r as he,t as ge}from"./metric-tabs-chart-skeleton-DdPwb9x6.js";import{t as _}from"./src-CCU8io4M.js";import{a as _e,g as ve,h as ye,i as be,m as xe,n as Se,p as Ce,r as v}from"./with-widget-canvas-CuaJpnBg.js";import{n as y,t as b}from"./preset-for-story-interval-BxZLK6jB.js";import{n as x,r as S,t as C}from"./with-site-time-zone-rx7NXQ-3.js";var w,T,E=e((()=>{w=`_root_10isw_1`,T={root:w}}));function D(e,t){let n=h(e),r=h(t);if(!(!n||!r))return{from:n,to:r}}function O(e,t){if(e.from>e.to)return[];let n={start:s(e.from),end:s(e.to)},r=l(n);return t===`week`?r=te(n,{weekStartsOn:1}):t===`month`&&(r=c(n)),r.map((t,n)=>{let i=d(t,`yyyy-MM-dd`),a=r[n+1],o=a?d(u(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function k(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=ae(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function A(e,t,n){let{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=se({postId:e,fields:[`data`]});return{current:(0,a.useMemo)(()=>{let e=r?.data??[],i=D(t.from,t.to);return k(e,i?O(i,n):[])},[r,n,t.from,t.to]),isLoading:i,isFetching:o,isError:s,hasData:!!r,refetch:c}}var j=e((()=>{p(),ie(),_(),o(),ee()}));function we({chartType:e}){let{reportParams:r}=ue(),i=oe(r.post_id),{current:o,isLoading:s,isFetching:c,isError:l,refetch:u}=A(i,r,f(r.interval,le)),d=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),value:o.reduce((e,t)=>e+t.value,0),current:o}],[o]);return(0,N.jsx)(`div`,{className:T.root,children:(0,N.jsx)(me,{isLoading:s,isFetching:c,isError:l,isEmpty:i<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:ne,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(ge,{}),children:(0,N.jsx)(he,{metrics:d,dataFormat:P,chartType:e,empty:(0,N.jsx)(de,{})})})})}function M({attributes:e={}}){return(0,N.jsx)(m,{attributes:e,children:(0,N.jsx)(we,{chartType:e?.chartType===`line`?`line`:`bar`})})}var N,P,Te=e((()=>{p(),re(),_(),o(),r(),E(),j(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,Ee=e((()=>{r(),_(),F={attributes:[{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:g,relevance:`high`}],example:{attributes:{chartType:`bar`}}}})),I,L,R,z,B,V,H,U,De=e((()=>{I=`jpa/post-views`,L=`jpa/seen`,R=`Post views`,z=`The view trend of the post or page being viewed over the selected period.`,B={content:`The view trend of the post or page being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:I,icon:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...ce(r,y(t)),interval:t,...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(M,{attributes:W(e)})}function Oe({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(xe,{...r,widgetType:be(U,F),renderModule:J,renderComponent:M,attributes:W({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{p(),fe(),ye(),_e(),b(),Se(),C(),Te(),Ee(),De(),K=i(),pe(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:M,tags:[`autodocs`],decorators:[S],argTypes:{...x,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a bar chart by default. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,interval:`day`,chartType:`bar`},decorators:[v]},Z={render:G,args:{hasPostScope:!1,interval:`day`,chartType:`bar`},decorators:[v]},Q={render:e=>(0,K.jsx)(Oe,{...e}),args:{...Ce,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{...ve,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: true,
    interval: 'day',
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped post's views for the selected period as bars.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: false,
    interval: 'day',
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostViewsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 2,
    widgetHeight: 2,
    hasPostScope: true,
    interval: 'day'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the post detail page seeds from its URL.'
    },
    interval: {
      control: 'radio',
      options: ['day', 'week', 'month'],
      description: 'The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Z as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};