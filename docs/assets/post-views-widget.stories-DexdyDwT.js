import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{j as a,t as o}from"./build-module-Dxhc9xxH.js";import{In as s,Pn as c,bn as l,en as u,p as ee,t as d}from"./src-BVv1R588.js";import{c as f,h as te,o as p,t as m}from"./src-CFLkDNMV.js";import{It as ne,Kt as re,R as h,Ut as g,W as _,m as ie,wt as ae}from"./charts-provider-DVBrFPaa.js";import{t as v}from"./widget-state-CqPm5upe.js";import{i as y}from"./with-story-router-Buc1zMFG.js";import{t as b}from"./chart-empty-state-a7XVUn1s.js";import{n as x,r as oe}from"./register-report-mocks-Dzl9RUVR.js";import{r as se,t as ce}from"./metric-tabs-chart-skeleton-s6MNywiJ.js";import{a as le,c as ue,i as S,l as de,o as fe,r as pe,s as me,u as he}from"./with-widget-canvas-BqMy9p20.js";import{n as ge,t as _e}from"./preset-for-story-interval-DmnDq_Gy.js";import{n as ve,r as ye,t as be}from"./with-site-time-zone-Bh39N5LR.js";var C,w,T=e((()=>{C=`_root_10isw_1`,w={root:C}}));function E(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=p(e.from),r=p(e.to),i=n.get(e.date)??0;return t?[r?{date:t,endDate:r,value:i}:{date:t,value:i}]:[]})}function D(e,t,n){let{data:r,isLoading:i,isFetching:o,isError:s,isPlaceholderData:c,refetch:l}=u({postId:e,fields:[`data`,`like_count`,`post`]});return{current:(0,a.useMemo)(()=>{let e=r?.data??[],i=g(t.from,t.to);return E(e,i?f(i,n):[])},[r,n,t.from,t.to]),postType:r?.post?.post_type,isLoading:i,isFetching:o,isError:s,isPlaceholderData:c,hasData:!!r,refetch:l}}var O=e((()=>{d(),m(),y(),o()}));function k({chartType:e}){let{reportParams:r}=_(),i=c(r.post_id),o=ee(r.interval,l),{current:s,postType:u,isLoading:d,isFetching:f,isError:p,isPlaceholderData:m,refetch:h}=D(i,r,o),g=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),value:s.reduce((e,t)=>e+t.value,0),current:s}],[s]);return ie({csv:{...(0,a.useMemo)(()=>ne(s.some(e=>e.value>0)?g:[],{zone:te(),withTime:!1,dateLabel:t(`Date`,`jetpack-premium-analytics-pkg`)}),[s,g]),filenamePrefix:`post-${i}-views`,range:{from:r.from,to:r.to},status:{isLoading:d,isError:p,isPlaceholderData:m}}}),(0,j.jsx)(`div`,{className:w.root,children:(0,j.jsx)(v,{isLoading:d,isFetching:f,isError:p,isEmpty:i<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ce,{}),children:(0,j.jsx)(se,{metrics:g,dataFormat:ae,chartType:e,tickResolution:o,chartTitle:re(u).views,empty:(0,j.jsx)(b,{}),hideSingleMetricLabel:!0})})})}function A({attributes:e={}}){return(0,j.jsx)(h,{attributes:e,children:(0,j.jsx)(k,{chartType:e?.chartType===`line`?`line`:`bar`})})}var j,M=e((()=>{d(),m(),y(),o(),r(),T(),O(),j=i()})),N,xe=e((()=>{N={example:{attributes:{chartType:`bar`}}}})),P,F,I,L,R,z,B,V,H,Se=e((()=>{P=`jpa/post-views`,F=`jpa/seen`,I=`Post views`,L=`The view trend of the post or page being viewed over the selected period.`,R={content:`The view trend of the post or page being viewed over the selected period.`},z=`stats`,B=`framed`,V=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],H={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,attributes:V}}));function U({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...s(r,ge(t)),interval:t,...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(A,{attributes:U(e)})}function G({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(ue,{...r,widgetType:le(H,N),renderModule:J,renderComponent:A,attributes:U({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{d(),x(),de(),fe(),_e(),pe(),be(),M(),xe(),Se(),K=i(),oe(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:A,tags:[`autodocs`],decorators:[ye],argTypes:{...ve,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a bar chart by default. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:W,args:{hasPostScope:!0,interval:`day`,chartType:`bar`},decorators:[S]},Z={render:W,args:{hasPostScope:!1,interval:`day`,chartType:`bar`},decorators:[S]},Q={tags:[`widget-dashboard`],render:e=>(0,K.jsx)(G,{...e}),args:{...me,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{...he,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},$=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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