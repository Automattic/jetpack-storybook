import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{H as s,Pt as c,Sn as l,W as u,cn as d,t as ee,y as f}from"./date-fns-CHwAqcMr.js";import{d as te,t as ne}from"./src-BGYQLfcD.js";import{Qt as re,Rt as p,c as ie,dn as ae,pn as m,t as h}from"./src-DDj1aBY-.js";import{m as oe,ut as g,v as _}from"./charts-provider-2mYnMhAK.js";import{t as v}from"./chart-empty-state-DelZHYcj.js";import{n as se,r as ce}from"./register-report-mocks-DdKF5Wr-.js";import{t as le}from"./widget-state-DDbRIDUZ.js";import{r as ue,t as de}from"./metric-tabs-chart-skeleton-CWdoSToW.js";import{t as y}from"./src-DAf8uf0f.js";import{a as fe,g as pe,h as me,i as he,m as ge,n as _e,p as ve,r as b}from"./with-widget-canvas-bPTYzmKS.js";import{n as ye,t as be}from"./preset-for-story-interval-y5q-zHTU.js";import{n as xe,r as Se,t as x}from"./with-site-time-zone-Cv62QLkb.js";var S,C,w=e((()=>{S=`_root_10isw_1`,C={root:S}}));function T(e,t){let n=g(e),r=g(t);if(!(!n||!r))return{from:n,to:r}}function E(e,t){if(e.from>e.to)return[];let n={start:f(e.from),end:f(e.to)},r=u(n);return t===`week`?r=s(n,{weekStartsOn:1}):t===`month`&&(r=d(n)),r.map((t,n)=>{let i=c(t,`yyyy-MM-dd`),a=r[n+1],o=a?c(l(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function D(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=te(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function O(e,t,n){let{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=p({postId:e,fields:[`data`]});return{current:(0,a.useMemo)(()=>{let e=r?.data??[],i=T(t.from,t.to);return D(e,i?E(i,n):[])},[r,n,t.from,t.to]),isLoading:i,isFetching:o,isError:s,hasData:!!r,refetch:c}}var k=e((()=>{h(),ne(),y(),o(),ee()}));function A({chartType:e}){let{reportParams:r}=_(),i=ae(r.post_id),{current:o,isLoading:s,isFetching:c,isError:l,refetch:u}=O(i,r,ie(r.interval,re)),d=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),value:o.reduce((e,t)=>e+t.value,0),current:o}],[o]);return(0,M.jsx)(`div`,{className:C.root,children:(0,M.jsx)(le,{isLoading:s,isFetching:c,isError:l,isEmpty:i<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(de,{}),children:(0,M.jsx)(ue,{metrics:d,dataFormat:N,chartType:e,chartTitle:t(`Post views`,`jetpack-premium-analytics-pkg`),empty:(0,M.jsx)(v,{}),hideSingleMetricLabel:!0})})})}function j({attributes:e={}}){return(0,M.jsx)(oe,{attributes:e,children:(0,M.jsx)(A,{chartType:e?.chartType===`line`?`line`:`bar`})})}var M,N,Ce=e((()=>{h(),y(),o(),r(),w(),k(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,we=e((()=>{P={example:{attributes:{chartType:`bar`}}}})),F,I,L,R,z,B,V,H,U,Te=e((()=>{F=`jpa/post-views`,I=`jpa/seen`,L=`Post views`,R=`The view trend of the post or page being viewed over the selected period.`,z={content:`The view trend of the post or page being viewed over the selected period.`},B=`stats`,V=`framed`,H=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],U={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V,attributes:H}}));function W({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...m(r,ye(t)),interval:t,...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(j,{attributes:W(e)})}function Ee({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(ge,{...r,widgetType:he(U,P),renderModule:J,renderComponent:j,attributes:W({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{h(),se(),me(),fe(),be(),_e(),x(),Ce(),we(),Te(),K=i(),ce(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:j,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a bar chart by default. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,interval:`day`,chartType:`bar`},decorators:[b]},Z={render:G,args:{hasPostScope:!1,interval:`day`,chartType:`bar`},decorators:[b]},Q={render:e=>(0,K.jsx)(Ee,{...e}),args:{...ve,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{...pe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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