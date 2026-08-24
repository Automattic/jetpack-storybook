import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{On as o,n as s}from"./build-module-CDRs4YxF.js";import{C as c,Et as l,St as u,bn as ee,et as d,t as te,wt as f}from"./date-fns-Bm9dQUxr.js";import{J as p,at as m,q as h,tt as g}from"./report-metric-BywRn0bl.js";import{M as ne,t as re}from"./src-BKLK-O8P.js";import{I as ie,t as ae}from"./src-DMR5khFl.js";import{$t as oe,ft as se,gn as ce,qt as le,t as _}from"./src-BqoIAWGs.js";import{a as ue,h as de}from"./chart-tooltip-CBXJFs6e.js";import{r as fe,t as pe}from"./metric-tabs-chart-skeleton-BmjwUCuu.js";import{t as me}from"./widget-state-CCVIVgZN.js";import{C as he,D as ge,E as _e,S as ve,T as ye,b as be,t as v,w as xe,x as y}from"./src-CNbqXo4B.js";import{n as b,t as x}from"./preset-for-story-interval-DUVPf5NE.js";var S,C,w=e((()=>{S=`_root_12k0b_1`,C={root:S}}));function T(e){let t=e?.slice(0,10);if(!(!t||!/^\d{4}-\d{2}-\d{2}$/.test(t)||Number.isNaN(c(t).getTime())))return t}function E(e,t){let n=T(e),r=T(t);if(!(!n||!r))return{from:n,to:r}}function D(e,t){if(e.from>e.to)return[];let n={start:c(e.from),end:c(e.to)},r=l(n);return t===`week`?r=u(n,{weekStartsOn:1}):t===`month`&&(r=f(n)),r.map((t,n)=>{let i=d(t,`yyyy-MM-dd`),a=r[n+1],o=a?d(ee(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function O(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=ie(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function k(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=se({postId:e,fields:[`data`]});return{current:(0,i.useMemo)(()=>{let e=r?.data??[],i=E(t.from,t.to);return O(e,i?D(i,n):[])},[r,n,t.from,t.to]),isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var A=e((()=>{_(),ae(),a(),te()}));function j({chartType:e}){let{reportParams:n}=m(),r=ce(n.post_id),{current:a,isLoading:o,isFetching:s,isError:c,refetch:l}=k(r,n,de(n.interval,oe)),u=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:a.reduce((e,t)=>e+t.value,0),current:a}],[a]);return(0,N.jsx)(`div`,{className:C.root,children:(0,N.jsx)(me,{isLoading:o,isFetching:s,isError:c,isEmpty:r<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:ne,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(pe,{}),children:(0,N.jsx)(fe,{metrics:u,dataFormat:P,chartType:e})})})}function M({attributes:e={}}){return(0,N.jsx)(g,{attributes:e,children:(0,N.jsx)(j,{chartType:e?.chartType===`bar`?`bar`:`line`})})}var N,P,Se=e((()=>{_(),re(),v(),a(),n(),w(),A(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,Ce=e((()=>{s(),v(),F={icon:o,attributes:[ue()],example:{attributes:{chartType:`line`}}}})),I,L,R,z,B,V,H,we=e((()=>{I=`jpa/post-views`,L=`Post views`,R=`The view trend of the post or page being viewed over the selected period.`,z={content:`The view trend of the post or page being viewed over the selected period.`},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...le(r,b(t)),interval:t,...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(M,{attributes:U(e)})}function G({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(ye,{...r,widgetType:ve(H,F),renderModule:J,renderComponent:M,attributes:U({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{_(),h(),_e(),he(),x(),be(),Se(),Ce(),we(),K=r(),p(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:M,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a line chart — the legacy Calypso post summary chart. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:W,args:{hasPostScope:!0,interval:`day`,chartType:`line`},decorators:[y]},Z={render:W,args:{hasPostScope:!1,interval:`day`,chartType:`line`},decorators:[y]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...xe,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{...ge,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: true,
    interval: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped post's views for the selected period: a single
"Views" line.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: false,
    interval: 'day',
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