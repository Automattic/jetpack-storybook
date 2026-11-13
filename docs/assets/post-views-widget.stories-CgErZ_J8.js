import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{ou as a,vu as o}from"./build-module-D8x1-0PG.js";import{Bt as s,H as c,K as l,On as u,mn as d,t as f,y as p}from"./date-fns-CnA56WYe.js";import{o as ee,t as te}from"./src-BIdiSPkW.js";import{Ht as ne,_n as m,d as re,in as ie,t as h,yn as ae}from"./src-52cnEbCc.js";import{Ft as g,H as _,I as v,Rt as oe,_t as se}from"./charts-provider-QtJ9qbIH.js";import{t as ce}from"./widget-state-CIbtadTL.js";import{i as y}from"./with-story-router-C_tyrWZj.js";import{t as le}from"./chart-empty-state-MMP6K-F-.js";import{n as ue,r as de}from"./register-report-mocks-BlzsUi-e.js";import{r as fe,t as pe}from"./metric-tabs-chart-skeleton-9yq9cske.js";import{a as me,c as he,i as b,l as ge,o as _e,r as ve,s as ye,u as be}from"./with-widget-canvas-FKG_6qtM.js";import{n as xe,t as Se}from"./preset-for-story-interval-DwSIaNM6.js";import{n as x,r as S,t as C}from"./with-site-time-zone-RgAxKbai.js";var w,T,E=e((()=>{w=`_root_10isw_1`,T={root:w}}));function D(e,t){let n=g(e),r=g(t);if(!(!n||!r))return{from:n,to:r}}function O(e,t){if(e.from>e.to)return[];let n={start:p(e.from),end:p(e.to)},r=l(n);return t===`week`?r=c(n,{weekStartsOn:1}):t===`month`&&(r=d(n)),r.map((t,n)=>{let i=s(t,`yyyy-MM-dd`),a=r[n+1],o=a?s(u(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function k(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=ee(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function A(e,t,n){let{data:r,isLoading:i,isFetching:a,isError:s,refetch:c}=ne({postId:e,fields:[`data`,`like_count`,`post`]});return{current:(0,o.useMemo)(()=>{let e=r?.data??[],i=D(t.from,t.to);return k(e,i?O(i,n):[])},[r,n,t.from,t.to]),postType:r?.post?.post_type,isLoading:i,isFetching:a,isError:s,hasData:!!r,refetch:c}}var j=e((()=>{h(),te(),y(),a(),f()}));function Ce({chartType:e}){let{reportParams:r}=_(),i=m(r.post_id),{current:a,postType:s,isLoading:c,isFetching:l,isError:u,refetch:d}=A(i,r,re(r.interval,ie)),f=(0,o.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),value:a.reduce((e,t)=>e+t.value,0),current:a}],[a]);return(0,N.jsx)(`div`,{className:T.root,children:(0,N.jsx)(ce,{isLoading:c,isFetching:l,isError:u,isEmpty:i<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(pe,{}),children:(0,N.jsx)(fe,{metrics:f,dataFormat:se,chartType:e,chartTitle:oe(s).views,empty:(0,N.jsx)(le,{}),hideSingleMetricLabel:!0})})})}function M({attributes:e={}}){return(0,N.jsx)(v,{attributes:e,children:(0,N.jsx)(Ce,{chartType:e?.chartType===`line`?`line`:`bar`})})}var N,we=e((()=>{h(),y(),a(),r(),E(),j(),N=i()})),P,Te=e((()=>{P={example:{attributes:{chartType:`bar`}}}})),F,I,L,R,z,B,V,H,U,Ee=e((()=>{F=`jpa/post-views`,I=`jpa/seen`,L=`Post views`,R=`The view trend of the post or page being viewed over the selected period.`,z={content:`The view trend of the post or page being viewed over the selected period.`},B=`stats`,V=`framed`,H=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],U={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V,attributes:H}}));function W({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...ae(r,xe(t)),interval:t,...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(M,{attributes:W(e)})}function De({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(he,{...r,widgetType:me(U,P),renderModule:J,renderComponent:M,attributes:W({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{h(),ue(),ge(),_e(),Se(),ve(),C(),we(),Te(),Ee(),K=i(),de(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:M,tags:[`autodocs`],decorators:[S],argTypes:{...x,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a bar chart by default. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,interval:`day`,chartType:`bar`},decorators:[b]},Z={render:G,args:{hasPostScope:!1,interval:`day`,chartType:`bar`},decorators:[b]},Q={tags:[`widget-dashboard`],render:e=>(0,K.jsx)(De,{...e}),args:{...ye,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{...be,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},$=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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
}`,...Q.parameters?.docs?.source}}}}))();export{X as Default,Z as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};