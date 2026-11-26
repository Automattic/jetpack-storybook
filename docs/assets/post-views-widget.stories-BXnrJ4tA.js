import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{j as a,t as o}from"./build-module-Dxhc9xxH.js";import{c as s,h as c,o as l,t as u}from"./src-CFLkDNMV.js";import{Mn as ee,Pn as d,en as f,p,t as m,vn as te}from"./src-CAeVry9S.js";import{It as ne,Kt as re,R as h,Ut as g,W as _,m as ie,wt as v}from"./charts-provider-CLTdq-Ei.js";import{t as ae}from"./widget-state-DErObxxB.js";import{i as y}from"./with-story-router-DvnbnZaC.js";import{t as b}from"./chart-empty-state-BRN22lIs.js";import{n as x,r as S}from"./register-report-mocks-DkiLvmPg.js";import{r as oe,t as se}from"./metric-tabs-chart-skeleton-DW_JvW7b.js";import{a as ce,c as le,i as C,l as ue,o as de,r as fe,s as pe,u as me}from"./with-widget-canvas-DmNPWDHb.js";import{n as he,t as ge}from"./preset-for-story-interval-DmnDq_Gy.js";import{n as _e,r as ve,t as ye}from"./with-site-time-zone-Bh39N5LR.js";var w,T,E=e((()=>{w=`_root_10isw_1`,T={root:w}}));function D(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=l(e.from),r=l(e.to),i=n.get(e.date)??0;return t?[r?{date:t,endDate:r,value:i}:{date:t,value:i}]:[]})}function O(e,t,n){let{data:r,isLoading:i,isFetching:o,isError:c,isPlaceholderData:l,refetch:u}=f({postId:e,fields:[`data`,`like_count`,`post`]});return{current:(0,a.useMemo)(()=>{let e=r?.data??[],i=g(t.from,t.to);return D(e,i?s(i,n):[])},[r,n,t.from,t.to]),postType:r?.post?.post_type,isLoading:i,isFetching:o,isError:c,isPlaceholderData:l,hasData:!!r,refetch:u}}var k=e((()=>{m(),u(),y(),o()}));function A({chartType:e}){let{reportParams:r}=_(),i=ee(r.post_id),o=p(r.interval,te),{current:s,postType:l,isLoading:u,isFetching:d,isError:f,isPlaceholderData:m,refetch:h}=O(i,r,o),g=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),value:s.reduce((e,t)=>e+t.value,0),current:s}],[s]);return ie({csv:{...(0,a.useMemo)(()=>ne(s.some(e=>e.value>0)?g:[],{zone:c(),withTime:!1,dateLabel:t(`Date`,`jetpack-premium-analytics-pkg`)}),[s,g]),filenamePrefix:`post-${i}-views`,range:{from:r.from,to:r.to},status:{isLoading:u,isFetching:d,isError:f,isPlaceholderData:m}}}),(0,M.jsx)(`div`,{className:T.root,children:(0,M.jsx)(ae,{isLoading:u,isFetching:d,isError:f,isEmpty:i<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(se,{}),children:(0,M.jsx)(oe,{metrics:g,dataFormat:v,chartType:e,tickResolution:o,chartTitle:re(l).views,empty:(0,M.jsx)(b,{}),hideSingleMetricLabel:!0})})})}function j({attributes:e={}}){return(0,M.jsx)(h,{attributes:e,children:(0,M.jsx)(A,{chartType:e?.chartType===`line`?`line`:`bar`})})}var M,N=e((()=>{m(),u(),y(),o(),r(),E(),k(),M=i()})),P,be=e((()=>{P={example:{attributes:{chartType:`bar`}}}})),F,I,L,R,z,B,V,H,U,xe=e((()=>{F=`jpa/post-views`,I=`jpa/seen`,L=`Post views`,R=`The view trend of the post or page being viewed over the selected period.`,z={content:`The view trend of the post or page being viewed over the selected period.`},B=`stats`,V=`framed`,H=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],U={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V,attributes:H}}));function W({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...d(r,he(t)),interval:t,...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(j,{attributes:W(e)})}function Se({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(le,{...r,widgetType:ce(U,P),renderModule:J,renderComponent:j,attributes:W({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{m(),x(),ue(),de(),ge(),fe(),ye(),N(),be(),xe(),K=i(),S(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:j,tags:[`autodocs`],decorators:[ve],argTypes:{..._e,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a bar chart by default. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,interval:`day`,chartType:`bar`},decorators:[C]},Z={render:G,args:{hasPostScope:!1,interval:`day`,chartType:`bar`},decorators:[C]},Q={tags:[`widget-dashboard`],render:e=>(0,K.jsx)(Se,{...e}),args:{...pe,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{...me,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},$=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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