import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{C as o,X as s,bt as c,gt as l,mn as u,nn as d,t as f,vt as p}from"./date-fns-B2pKki1V.js";import{I as ee,n as te}from"./build-module-DoJYX5DX.js";import{$ as ne,H as re,U as ie,Y as ae}from"./report-metric-B88CITdf.js";import{A as oe,t as se}from"./src-B3le4dug.js";import{i as ce,t as le}from"./src-D-FMgVnL.js";import{a as m}from"./hooks--raYj3Tk.js";import{jr as ue,kn as de,kr as fe,ur as pe,xt as h}from"./chart-tooltip-DYeL-Ebj.js";import{t as me}from"./comparative-line-chart-wIwvYyj5.js";import{t as g}from"./widget-state-D2kmnSNs.js";import{C as _,D as v,E as y,S as he,T as ge,b as _e,t as ve,w as ye,x as b}from"./src-DuJJqcEZ.js";import{n as be,t as xe}from"./src-CV-dL0bh.js";var x,S,C,Se=e((()=>{x=`_root_gxrb3_3`,S=`_chart_gxrb3_12`,C={root:x,chart:S}}));function w(e){let t=e?.slice(0,10);if(!(!t||!/^\d{4}-\d{2}-\d{2}$/.test(t)||Number.isNaN(o(t).getTime())))return t}function T(e,t){let n=w(e),r=w(t);if(!(!n||!r))return{from:n,to:r}}function E(e,t){if(e.from>e.to)return[];let n={start:o(e.from),end:o(e.to)},r=c(n);return t===`week`?r=l(n,{weekStartsOn:1}):t===`month`&&(r=p(n)),r.map((t,n)=>{let i=s(t,`yyyy-MM-dd`),a=r[n+1],o=a?s(u(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function D(e,t,n){let r=o(e.from),i=o(t.from),a=n.map(e=>s(u(i,d(o(e.from),r)),`yyyy-MM-dd`));return a.map((e,n)=>{let r=n<a.length-1?s(u(o(a[n+1]),-1),`yyyy-MM-dd`):t.to;return{date:e,from:e,to:r>t.to?t.to:r}})}function O(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.map(e=>({date:ue(e.date),value:n.get(e.date)??0}))}function k(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=de({postId:e,fields:[`data`]}),{current:l,previous:u}=(0,i.useMemo)(()=>{let e=r?.data??[],i=T(t.from,t.to),a=T(t.compare_from,t.compare_to),o=i?E(i,n):[],s=O(e,o),c;i&&a&&(c=n===`day`?E(a,n):D(i,a,o));let l=c?O(e,c):void 0;return{current:s,previous:l?.length?l:void 0}},[r,n,t.from,t.to,t.compare_from,t.compare_to]);return{current:l,previous:u,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var A=e((()=>{h(),a(),f()}));function j(e){let t=e[0],n=e[e.length-1];return t&&n?ce({from:t.date,to:n.date}):``}function Ce({granularity:e}){let{reportParams:n}=ne(),r=fe(n.post_id),{current:a,previous:o,isLoading:s,isFetching:c,isError:l,hasData:u,refetch:d}=k(r,n,e),f=(0,i.useMemo)(()=>a.length?o?.length?[{label:j(a),group:`views`,data:a},{label:j(o),group:`views`,data:o,options:{type:`comparison`,gradient:{from:`transparent`,to:`transparent`,fromOpacity:0,toOpacity:0}}}]:[{label:t(`Views`,`jetpack-premium-analytics-pkg`),group:`views`,data:a}]:[],[a,o]),p=m(f);return(0,N.jsx)(`div`,{className:C.root,children:(0,N.jsx)(g,{isLoading:s&&!u,isFetching:c,isError:l,isEmpty:r<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:oe,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsx)(me,{className:C.chart,series:f,styles:p,dataFormat:P})})})}function M({attributes:e={}}){let t=e?.granularity;return(0,N.jsx)(ae,{attributes:e,children:(0,N.jsx)(Ce,{granularity:t===`week`||t===`month`?t:`day`})})}var N,P,we=e((()=>{h(),le(),se(),ve(),a(),n(),Se(),A(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,Te=e((()=>{n(),te(),xe(),F={icon:ee,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:be,elements:[{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`}],example:{attributes:{granularity:`day`}}}})),I,L,R,z,B,V,H,Ee=e((()=>{I=`jpa/post-views`,L=`Post views`,R=`The view trend of the post or page being viewed over the selected period.`,z={content:`The view trend of the post or page being viewed over the selected period.`},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U({withComparison:e,hasPostScope:t,granularity:n}){return{granularity:n,reportParams:{...pe(e),...t?{post_id:K}:{}}}}function W(e){return(0,G.jsx)(M,{attributes:U(e)})}function De({withComparison:e,hasPostScope:t,granularity:n,...r}){return(0,G.jsx)(ge,{...r,widgetType:he(H,F),renderModule:q,renderComponent:M,attributes:U({withComparison:e,hasPostScope:t,granularity:n})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),re(),y(),_(),_e(),we(),Te(),Ee(),G=r(),ie(),K=779,q=`storybook/post-views`,J={title:`Packages/Premium Analytics/Widgets/PostViews`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a comparative line chart — the legacy Calypso post summary chart. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side per the host-rendered "Group by" control, with the comparison window sliced from the same request. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:W,args:{withComparison:!1,hasPostScope:!0,granularity:`day`},decorators:[b]},X={render:W,args:{withComparison:!0,hasPostScope:!0,granularity:`day`},decorators:[b]},Z={render:W,args:{withComparison:!1,hasPostScope:!1,granularity:`day`},decorators:[b]},Q={render:e=>(0,G.jsx)(De,{...e}),args:{...ye,widgetWidth:2,widgetHeight:2,withComparison:!0,hasPostScope:!0,granularity:`day`},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    withComparison: false,
    hasPostScope: true,
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source},description:{story:`Default — the scoped post's views for the primary period only: a single
"Views" line with no overlay.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    withComparison: true,
    hasPostScope: true,
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`WithComparison — the previous-period comparison from the date range picker;
the chart adds a dashed previous-period overlay and the legend switches to
date-range labels.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostViews,
  args: {
    withComparison: false,
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
    withComparison: true,
    hasPostScope: true,
    granularity: 'day'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params.'
    },
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Z as NoPostScope,Q as WidgetDashboardWithWidget,X as WithComparison,$ as __namedExportsOrder,J as default};