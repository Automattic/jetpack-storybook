import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{C as s,Et as c,Ot as l,Sn as u,nt as d,t as ee,wt as te}from"./date-fns-I6jayRk5.js";import{d as ne,t as re}from"./src-D_42x9vz.js";import{Nt as ie,cn as ae,on as oe,qt as f,r as se,t as p}from"./src-CELwEFpj.js";import{m as ce,nt as le,st as m,v as h}from"./charts-provider-skC4lbEj.js";import{t as ue}from"./chart-empty-state-CLqLVJWt.js";import{n as de,r as fe}from"./register-report-mocks-XooFP1Pl.js";import{t as pe}from"./widget-state-DzuMTX1R.js";import{r as me,t as he}from"./metric-tabs-chart-skeleton-BT85_2gU.js";import{t as g}from"./src-J5i9PPuP.js";import{a as ge,g as _e,h as ve,i as ye,m as be,n as xe,p as Se,r as _}from"./with-widget-canvas-vpPQKnpk.js";import{n as Ce,t as v}from"./preset-for-story-interval-Cz2ipKQr.js";import{n as y,r as b,t as x}from"./with-site-time-zone-rx7NXQ-3.js";var S,C,w=e((()=>{S=`_root_10isw_1`,C={root:S}}));function T(e,t){let n=m(e),r=m(t);if(!(!n||!r))return{from:n,to:r}}function E(e,t){if(e.from>e.to)return[];let n={start:s(e.from),end:s(e.to)},r=l(n);return t===`week`?r=te(n,{weekStartsOn:1}):t===`month`&&(r=c(n)),r.map((t,n)=>{let i=d(t,`yyyy-MM-dd`),a=r[n+1],o=a?d(u(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function D(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=ne(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function O(e,t,n){let{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=ie({postId:e,fields:[`data`]});return{current:(0,a.useMemo)(()=>{let e=r?.data??[],i=T(t.from,t.to);return D(e,i?E(i,n):[])},[r,n,t.from,t.to]),isLoading:i,isFetching:o,isError:s,hasData:!!r,refetch:c}}var k=e((()=>{p(),re(),g(),o(),ee()}));function A({chartType:e}){let{reportParams:r}=h(),i=oe(r.post_id),{current:o,isLoading:s,isFetching:c,isError:l,refetch:u}=O(i,r,se(r.interval,f)),d=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),value:o.reduce((e,t)=>e+t.value,0),current:o}],[o]);return(0,M.jsx)(`div`,{className:C.root,children:(0,M.jsx)(pe,{isLoading:s,isFetching:c,isError:l,isEmpty:i<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(he,{}),children:(0,M.jsx)(me,{metrics:d,dataFormat:N,chartType:e,empty:(0,M.jsx)(ue,{})})})})}function j({attributes:e={}}){return(0,M.jsx)(ce,{attributes:e,children:(0,M.jsx)(A,{chartType:e?.chartType===`line`?`line`:`bar`})})}var M,N,we=e((()=>{p(),g(),o(),r(),w(),k(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F=e((()=>{r(),g(),P={attributes:[{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:le,relevance:`high`}],example:{attributes:{chartType:`bar`}}}})),I,L,R,z,B,V,H,U,Te=e((()=>{I=`jpa/post-views`,L=`jpa/seen`,R=`Post views`,z=`The view trend of the post or page being viewed over the selected period.`,B={content:`The view trend of the post or page being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:I,icon:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...ae(r,Ce(t)),interval:t,...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(j,{attributes:W(e)})}function Ee({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(be,{...r,widgetType:ye(U,P),renderModule:J,renderComponent:j,attributes:W({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{p(),de(),ve(),ge(),v(),xe(),x(),we(),F(),Te(),K=i(),fe(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:j,tags:[`autodocs`],decorators:[b],argTypes:{...y,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a bar chart by default. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,interval:`day`,chartType:`bar`},decorators:[_]},Z={render:G,args:{hasPostScope:!1,interval:`day`,chartType:`bar`},decorators:[_]},Q={render:e=>(0,K.jsx)(Ee,{...e}),args:{...Se,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{..._e,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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