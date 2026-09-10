import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-yGZutq_9.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Dn as i,Gu as a,Nu as o,t as s}from"./build-module-zwSmKorH.js";import{St as c,X as l,bt as u,gn as ee,t as te,vt as ne,y as d}from"./date-fns-BSWzdn8-.js";import{C as re,it as f,y as ie,z as ae}from"./wp-date-settings-DLNINDS7.js";import{M as p,t as oe}from"./src-DFNM1k7F.js";import{t as se,u as m}from"./src-D_gpVFWl.js";import{Dn as h,en as g,i as _,ln as ce,o as le,yt as ue}from"./date-filters-panel-COo45nW1.js";import{r as de,t as fe}from"./metric-tabs-chart-skeleton-CMLwea1W.js";import{J as pe,q as me}from"./report-metric-DR_MK8Ct.js";import{t as he}from"./widget-state-D9eoMxI9.js";import{C as ge,D as _e,E as ve,S as ye,T as be,b as xe,t as v,w as y,x as b}from"./src-BD8QFf1n.js";import{n as x,t as S}from"./preset-for-story-interval-DMfO0IQ5.js";import{n as C,r as w,t as T}from"./with-site-time-zone-CQY2F8be.js";var E,D,O=e((()=>{E=`_root_10isw_1`,D={root:E}}));function k(e,t){let n=f(e),r=f(t);if(!(!n||!r))return{from:n,to:r}}function A(e,t){if(e.from>e.to)return[];let n={start:d(e.from),end:d(e.to)},r=c(n);return t===`week`?r=ne(n,{weekStartsOn:1}):t===`month`&&(r=u(n)),r.map((t,n)=>{let i=l(t,`yyyy-MM-dd`),a=r[n+1],o=a?l(ee(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function j(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=m(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function M(e,t,n){let{data:r,isLoading:i,isFetching:o,isError:s,refetch:c}=ue({postId:e,fields:[`data`]});return{current:(0,a.useMemo)(()=>{let e=r?.data??[],i=k(t.from,t.to);return j(e,i?A(i,n):[])},[r,n,t.from,t.to]),isLoading:i,isFetching:o,isError:s,hasData:!!r,refetch:c}}var Se=e((()=>{_(),se(),v(),o(),te()}));function Ce({chartType:e}){let{reportParams:n}=re(),r=h(n.post_id),{current:i,isLoading:o,isFetching:s,isError:c,refetch:l}=M(r,n,le(n.interval,ce)),u=(0,a.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),value:i.reduce((e,t)=>e+t.value,0),current:i}],[i]);return(0,P.jsx)(`div`,{className:D.root,children:(0,P.jsx)(he,{isLoading:o,isFetching:s,isError:c,isEmpty:r<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:p,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(fe,{}),children:(0,P.jsx)(de,{metrics:u,dataFormat:F,chartType:e})})})}function N({attributes:e={}}){return(0,P.jsx)(ie,{attributes:e,children:(0,P.jsx)(Ce,{chartType:e?.chartType===`bar`?`bar`:`line`})})}var P,F,we=e((()=>{_(),oe(),v(),o(),n(),O(),Se(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,Te=e((()=>{s(),v(),I={icon:i,attributes:[ae()],example:{attributes:{chartType:`line`}}}})),L,R,z,B,V,H,U,Ee=e((()=>{L=`jpa/post-views`,R=`Post views`,z=`The view trend of the post or page being viewed over the selected period.`,B={content:`The view trend of the post or page being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasPostScope:e,interval:t,chartType:n},r=!1){return{chartType:n,reportParams:{...g(r,x(t)),interval:t,...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(N,{attributes:W(e)})}function De({hasPostScope:e,interval:t,chartType:n,...r}){return(0,K.jsx)(be,{...r,widgetType:ye(U,I),renderModule:J,renderComponent:N,attributes:W({hasPostScope:e,interval:t,chartType:n},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{_(),me(),ve(),ge(),S(),xe(),T(),we(),Te(),Ee(),K=r(),pe(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:N,tags:[`autodocs`],decorators:[w],argTypes:{...C,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`},chartType:{control:`radio`,options:[`line`,`bar`],description:`The "Chart type" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a line chart — the legacy Calypso post summary chart. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side at the page's chart interval. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,interval:`day`,chartType:`line`},decorators:[b]},Z={render:G,args:{hasPostScope:!1,interval:`day`,chartType:`line`},decorators:[b]},Q={render:e=>(0,K.jsx)(De,{...e}),args:{...y,widgetWidth:2,widgetHeight:2,hasPostScope:!0,interval:`day`},argTypes:{..._e,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},interval:{control:`radio`,options:[`day`,`week`,`month`],description:`The page chart interval the widget buckets its daily history into. Monthly moves the story range to 90 days, the shortest preset that allows it.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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