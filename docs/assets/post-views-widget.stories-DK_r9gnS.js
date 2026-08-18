import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{On as o,n as s}from"./build-module-CDRs4YxF.js";import{C as c,Et as l,St as u,bn as d,et as f,t as ee,wt as te}from"./date-fns-Bm9dQUxr.js";import{J as ne,at as re,q as ie,tt as p}from"./report-metric-TMKCu6gf.js";import{M as ae,t as m}from"./src-BKLK-O8P.js";import{I as oe,t as se}from"./src-CTZFYwrN.js";import{Cr as ce,Hn as le,Nt as h,Ur as g,a as _,o as v}from"./chart-tooltip-Be73Yb4J.js";import{t as y}from"./metric-tabs-chart-AH8kEdLW.js";import{t as ue}from"./widget-state-C-TJKMCy.js";import{C as de,D as fe,E as pe,S as me,T as he,b as ge,t as b,w as _e,x}from"./src-C9u1tQDw.js";var S,C,w=e((()=>{S=`_root_1g0pq_3`,C={root:S}}));function T(e){let t=e?.slice(0,10);if(!(!t||!/^\d{4}-\d{2}-\d{2}$/.test(t)||Number.isNaN(c(t).getTime())))return t}function E(e,t){let n=T(e),r=T(t);if(!(!n||!r))return{from:n,to:r}}function D(e,t){if(e.from>e.to)return[];let n={start:c(e.from),end:c(e.to)},r=l(n);return t===`week`?r=u(n,{weekStartsOn:1}):t===`month`&&(r=te(n)),r.map((t,n)=>{let i=f(t,`yyyy-MM-dd`),a=r[n+1],o=a?f(d(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function O(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=oe(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function k(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=le({postId:e,fields:[`data`]});return{current:(0,i.useMemo)(()=>{let e=r?.data??[],i=E(t.from,t.to);return O(e,i?D(i,n):[])},[r,n,t.from,t.to]),isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var A=e((()=>{h(),se(),a(),ee()}));function j({granularity:e,chartType:n}){let{reportParams:r}=re(),a=g(r.post_id),{current:o,isLoading:s,isFetching:c,isError:l,hasData:u,refetch:d}=k(a,r,e),f=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:o.reduce((e,t)=>e+t.value,0),current:o}],[o]);return(0,N.jsx)(`div`,{className:C.root,children:(0,N.jsx)(ue,{isLoading:s&&!u,isError:l,isEmpty:a<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:ae,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsx)(y,{metrics:f,dataFormat:P,chartType:n,loading:c})})})}function M({attributes:e={}}){let t=e?.granularity;return(0,N.jsx)(p,{attributes:e,children:(0,N.jsx)(j,{granularity:t===`week`||t===`month`?t:`day`,chartType:e?.chartType===`bar`?`bar`:`line`})})}var N,P,F=e((()=>{h(),m(),b(),a(),n(),w(),A(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,ve=e((()=>{s(),b(),I={icon:o,attributes:[v([`day`,`week`,`month`]),_()],example:{attributes:{granularity:`day`,chartType:`line`}}}})),L,R,z,B,V,H,U,ye=e((()=>{L=`jpa/post-views`,R=`Post views`,z=`The view trend of the post or page being viewed over the selected period.`,B={content:`The view trend of the post or page being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasPostScope:e,granularity:t,chartType:n},r=!1){return{granularity:t,chartType:n,reportParams:{...ce(r),...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(M,{attributes:W(e)})}function be({hasPostScope:e,granularity:t,chartType:n,...r}){return(0,K.jsx)(he,{...r,widgetType:me(U,I),renderModule:J,renderComponent:M,attributes:W({hasPostScope:e,granularity:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{h(),ie(),pe(),de(),ge(),F(),ve(),ye(),K=r(),ne(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:M,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a line chart — the legacy Calypso post summary chart. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side per the host-rendered "Group by" control. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,granularity:`day`,chartType:`line`},decorators:[x]},Z={render:G,args:{hasPostScope:!1,granularity:`day`,chartType:`line`},decorators:[x]},Q={render:e=>(0,K.jsx)(be,{...e}),args:{..._e,widgetWidth:2,widgetHeight:2,hasPostScope:!0,granularity:`day`},argTypes:{...fe,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: true,
    granularity: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped post's views for the selected period: a single
"Views" line.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: false,
    granularity: 'day',
    chartType: 'line'
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
    granularity: 'day'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the post detail page seeds from its URL.'
    },
    granularity: {
      control: 'radio',
      options: ['day', 'week', 'month'],
      description: 'The "Group by" toolbar attribute rendered by the widget host.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Z as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};