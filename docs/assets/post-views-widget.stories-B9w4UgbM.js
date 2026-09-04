import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-yGZutq_9.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Dn as i,Gu as a,Nu as o,t as s}from"./build-module-zwSmKorH.js";import{St as c,X as l,bt as u,t as d,vn as ee,vt as te,y as f}from"./date-fns-D7Rx6aVe.js";import{b as ne,g as re,k as ie}from"./hooks-D3eUZdyY.js";import{M as ae,t as p}from"./src-DFNM1k7F.js";import{p as oe,t as se}from"./src-B5nbkiw8.js";import{Dn as m,en as h,i as g,ln as _,o as ce,yt as le}from"./date-filters-panel-CrhNlv77.js";import{r as ue,t as de}from"./metric-tabs-chart-skeleton-Y2lTmlQe.js";import{G as fe,K as pe}from"./report-metric-BHr783uf.js";import{t as me}from"./widget-state-C_HSfUJR.js";import{C as he,D as ge,E as _e,S as ve,T as ye,b as be,t as v,w as xe,x as y}from"./src-C0GFaqdP.js";import{n as b,t as x}from"./preset-for-story-interval-DAUoecK2.js";import{n as S,r as C,t as w}from"./with-site-time-zone-CQY2F8be.js";var T,E,D=e((()=>{T=`_root_10isw_1`,E={root:T}}));function O(e){let t=e?.slice(0,10);if(!(!t||!/^\d{4}-\d{2}-\d{2}$/.test(t)||Number.isNaN(f(t).getTime())))return t}function k(e,t){let n=O(e),r=O(t);if(!(!n||!r))return{from:n,to:r}}function A(e,t){if(e.from>e.to)return[];let n={start:f(e.from),end:f(e.to)},r=c(n);return t===`week`?r=te(n,{weekStartsOn:1}):t===`month`&&(r=u(n)),r.map((t,n)=>{let i=l(t,`yyyy-MM-dd`),a=r[n+1],o=a?l(ee(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function j(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=oe(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function M(e,t,n){let{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=le({postId:e,fields:[`data`]});return{current:(0,a.useMemo)(()=>{let e=r?.data??[],i=k(t.from,t.to);return j(e,i?A(i,n):[])},[r,n,t.from,t.to]),isLoading:i,isFetching:o,isError:s,hasData:!!r,refetch:c}}var Se=e((()=>{g(),se(),o(),d()}));function Ce({chartType:e}){let{reportParams:n}=ne(),r=m(n.post_id),{current:i,isLoading:o,isFetching:s,isError:c,refetch:l}=M(r,n,ce(n.interval,_)),u=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:i.reduce((e,t)=>e+t.value,0),current:i}],[i]);return(0,P.jsx)(`div`,{className:E.root,children:(0,P.jsx)(me,{isLoading:o,isFetching:s,isError:c,isEmpty:r<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:ae,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(de,{}),children:(0,P.jsx)(ue,{metrics:u,dataFormat:F,chartType:e})})})}function N({attributes:e={}}){return(0,P.jsx)(re,{attributes:e,children:(0,P.jsx)(Ce,{chartType:e?.chartType===`bar`?`bar`:`line`})})}var P,F,we=e((()=>{g(),p(),v(),o(),n(),D(),Se(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,Te=e((()=>{s(),v(),I={icon:i,attributes:[ie()],example:{attributes:{chartType:`line`}}}})),L,R,z,B,V,H,U,Ee=e((()=>{L=`jpa/post-views`,R=`Post views`,z=`The view trend of the post or page being viewed over the selected period.`,B={content:`The view trend of the post or page being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...h(r,b(t)),interval:t,...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(N,{attributes:W(e)})}function De({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(ye,{...r,widgetType:ve(U,I),renderModule:J,renderComponent:N,attributes:W({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{g(),fe(),_e(),he(),x(),be(),w(),we(),Te(),Ee(),K=r(),pe(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:N,tags:[`autodocs`],decorators:[C],argTypes:{...S,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a line chart — the legacy Calypso post summary chart. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,interval:`day`,chartType:`line`},decorators:[y]},Z={render:G,args:{hasPostScope:!1,interval:`day`,chartType:`line`},decorators:[y]},Q={render:e=>(0,K.jsx)(De,{...e}),args:{...xe,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{...ge,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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