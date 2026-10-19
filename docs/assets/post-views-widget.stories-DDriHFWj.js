import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{H as s,Pt as c,Sn as l,W as u,cn as d,t as ee,y as f}from"./date-fns-CHwAqcMr.js";import{d as te,t as ne}from"./src-BGYQLfcD.js";import{It as re,Xt as ie,dn as p,ln as ae,o as m,t as h}from"./src-D7-VhuOI.js";import{ct as oe,m as se,pt as g,v as ce}from"./charts-provider-BWv7gyHZ.js";import{t as le}from"./chart-empty-state-BTJ2hMl-.js";import{n as ue,r as _}from"./register-report-mocks-Db5-HplF.js";import{t as de}from"./widget-state-CalSvwWb.js";import{r as fe,t as pe}from"./metric-tabs-chart-skeleton-CDmyoC-j.js";import{t as v}from"./src-BXeDK0Ye.js";import{a as me,g as he,h as ge,i as _e,m as ve,n as ye,p as be,r as y}from"./with-widget-canvas-DZcPnQ3S.js";import{n as xe,t as Se}from"./preset-for-story-interval-y5q-zHTU.js";import{n as b,r as x,t as S}from"./with-site-time-zone-Cv62QLkb.js";var C,w,T=e((()=>{C=`_root_10isw_1`,w={root:C}}));function E(e,t){let n=g(e),r=g(t);if(!(!n||!r))return{from:n,to:r}}function D(e,t){if(e.from>e.to)return[];let n={start:f(e.from),end:f(e.to)},r=u(n);return t===`week`?r=s(n,{weekStartsOn:1}):t===`month`&&(r=d(n)),r.map((t,n)=>{let i=c(t,`yyyy-MM-dd`),a=r[n+1],o=a?c(l(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function O(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=te(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function k(e,t,n){let{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=re({postId:e,fields:[`data`]});return{current:(0,a.useMemo)(()=>{let e=r?.data??[],i=E(t.from,t.to);return O(e,i?D(i,n):[])},[r,n,t.from,t.to]),isLoading:i,isFetching:o,isError:s,hasData:!!r,refetch:c}}var A=e((()=>{h(),ne(),v(),o(),ee()}));function j({chartType:e}){let{reportParams:r}=ce(),i=ae(r.post_id),{current:o,isLoading:s,isFetching:c,isError:l,refetch:u}=k(i,r,m(r.interval,ie)),d=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),value:o.reduce((e,t)=>e+t.value,0),current:o}],[o]);return(0,N.jsx)(`div`,{className:w.root,children:(0,N.jsx)(de,{isLoading:s,isFetching:c,isError:l,isEmpty:i<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(pe,{}),children:(0,N.jsx)(fe,{metrics:d,dataFormat:P,chartType:e,chartTitle:t(`Post views`,`jetpack-premium-analytics-pkg`),empty:(0,N.jsx)(le,{}),hideSingleMetricLabel:!0})})})}function M({attributes:e={}}){return(0,N.jsx)(se,{attributes:e,children:(0,N.jsx)(j,{chartType:e?.chartType===`line`?`line`:`bar`})})}var N,P,Ce=e((()=>{h(),v(),o(),r(),T(),A(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,we=e((()=>{r(),v(),F={attributes:[{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:oe,relevance:`high`}],example:{attributes:{chartType:`bar`}}}})),I,L,R,z,B,V,H,U,Te=e((()=>{I=`jpa/post-views`,L=`jpa/seen`,R=`Post views`,z=`The view trend of the post or page being viewed over the selected period.`,B={content:`The view trend of the post or page being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:I,icon:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...p(r,xe(t)),interval:t,...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(M,{attributes:W(e)})}function Ee({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(ve,{...r,widgetType:_e(U,F),renderModule:J,renderComponent:M,attributes:W({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{h(),ue(),ge(),me(),Se(),ye(),S(),Ce(),we(),Te(),K=i(),_(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:M,tags:[`autodocs`],decorators:[x],argTypes:{...b,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a bar chart by default. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,interval:`day`,chartType:`bar`},decorators:[y]},Z={render:G,args:{hasPostScope:!1,interval:`day`,chartType:`bar`},decorators:[y]},Q={render:e=>(0,K.jsx)(Ee,{...e}),args:{...be,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{...he,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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