import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{On as o,n as s}from"./build-module-CDRs4YxF.js";import{C as c,Et as l,St as u,bn as d,et as f,t as p,wt as m}from"./date-fns-Bm9dQUxr.js";import{$ as ee,K as te,q as ne,rt as re}from"./report-metric-DcvQRJSL.js";import{A as ie,t as h}from"./src-tEZrN6jJ.js";import{P as ae,t as g}from"./src-DhTT1cTw.js";import{s as oe}from"./hooks-CY71-iTM.js";import{Nr as se,Pn as _,Tt as v,hr as y}from"./chart-tooltip-JeJCERB4.js";import{t as b}from"./comparative-line-chart-DBDJLX2V.js";import{t as ce}from"./widget-state-Dkv6b-_W.js";import{C as le,D as ue,E as de,S as fe,T as pe,b as me,t as he,w as ge,x}from"./src-CatI5IZr.js";import{n as _e,t as ve}from"./src-Cfu7o9bH.js";var S,C,w,T=e((()=>{S=`_root_1uy8d_3`,C=`_chart_1uy8d_12`,w={root:S,chart:C}}));function E(e){let t=e?.slice(0,10);if(!(!t||!/^\d{4}-\d{2}-\d{2}$/.test(t)||Number.isNaN(c(t).getTime())))return t}function D(e,t){let n=E(e),r=E(t);if(!(!n||!r))return{from:n,to:r}}function O(e,t){if(e.from>e.to)return[];let n={start:c(e.from),end:c(e.to)},r=l(n);return t===`week`?r=u(n,{weekStartsOn:1}):t===`month`&&(r=m(n)),r.map((t,n)=>{let i=f(t,`yyyy-MM-dd`),a=r[n+1],o=a?f(d(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function k(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.flatMap(e=>{let t=ae(e.date);return t?[{date:t,value:n.get(e.date)??0}]:[]})}function A(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=_({postId:e,fields:[`data`]});return{current:(0,i.useMemo)(()=>{let e=r?.data??[],i=D(t.from,t.to);return k(e,i?O(i,n):[])},[r,n,t.from,t.to]),isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var j=e((()=>{v(),g(),a(),p()}));function M({granularity:e}){let{reportParams:n}=re(),r=se(n.post_id),{current:a,isLoading:o,isFetching:s,isError:c,hasData:l,refetch:u}=A(r,n,e),d=(0,i.useMemo)(()=>a.length?[{label:t(`Views`,`jetpack-premium-analytics-pkg`),group:`views`,data:a}]:[],[a]),f=oe(d);return(0,P.jsx)(`div`,{className:w.root,children:(0,P.jsx)(ce,{isLoading:o&&!l,isFetching:s,isError:c,isEmpty:r<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:ie,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsx)(b,{className:w.chart,series:d,styles:f,dataFormat:F})})})}function N({attributes:e={}}){let t=e?.granularity;return(0,P.jsx)(ee,{attributes:e,children:(0,P.jsx)(M,{granularity:t===`week`||t===`month`?t:`day`})})}var P,F,ye=e((()=>{v(),h(),he(),a(),n(),T(),j(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,be=e((()=>{n(),s(),ve(),I={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_e,elements:[{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`}],example:{attributes:{granularity:`day`}}}})),L,R,z,B,V,H,U,xe=e((()=>{L=`jpa/post-views`,R=`Post views`,z=`The view trend of the post or page being viewed over the selected period.`,B={content:`The view trend of the post or page being viewed over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W({hasPostScope:e,granularity:t},n=!1){return{granularity:t,reportParams:{...y(n),...e?{post_id:q}:{}}}}function G(e){return(0,K.jsx)(N,{attributes:W(e)})}function Se({hasPostScope:e,granularity:t,...n}){return(0,K.jsx)(pe,{...n,widgetType:fe(U,I),renderModule:J,renderComponent:N,attributes:W({hasPostScope:e,granularity:t},!0)})}var K,q,J,Y,X,Z,Q,$;e((()=>{v(),te(),de(),le(),me(),ye(),be(),xe(),K=r(),ne(),q=779,J=`storybook/post-views`,Y={title:`Packages/Premium Analytics/Widgets/PostViews`,component:N,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a line chart — the legacy Calypso post summary chart. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side per the host-rendered "Group by" control. The post detail page has no comparison control, so comparison report params are ignored. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:G,args:{hasPostScope:!0,granularity:`day`},decorators:[x]},Z={render:G,args:{hasPostScope:!1,granularity:`day`},decorators:[x]},Q={render:e=>(0,K.jsx)(Se,{...e}),args:{...ge,widgetWidth:2,widgetHeight:2,hasPostScope:!0,granularity:`day`},argTypes:{...ue,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: true,
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped post's views for the selected period: a single
"Views" line.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    hasPostScope: false,
    granularity: 'day'
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