import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{C as o,X as s,bt as c,gt as l,mn as u,nn as d,t as f,vt as p}from"./date-fns-B2pKki1V.js";import{Nn as ee,n as te}from"./build-module-DmVuor49.js";import{a as ne}from"./hooks-ByI8BUwy.js";import{A as re,t as ie}from"./src-B3le4dug.js";import{i as m,t as h}from"./src-3Lv7Etdm.js";import{Cr as ae,dt as g,er as oe,yn as se,yr as _}from"./chart-tooltip-BOekm0Z5.js";import{t as v}from"./comparative-line-chart-DKLyVfFO.js";import{H as y,M as b,R as x,j as S}from"./report-metric-BwY4Mv0i.js";import{t as C}from"./widget-state-Bc82xo0x.js";import{C as w,S as ce,T as le,b as ue,t as de,w as fe,x as T}from"./src-DatP540Y.js";import{n as pe,t as me}from"./src-B6_j88EX.js";var E,D,O,k=e((()=>{E=`_root_gxrb3_3`,D=`_chart_gxrb3_12`,O={root:E,chart:D}}));function A(e){let t=e?.slice(0,10);if(!(!t||!/^\d{4}-\d{2}-\d{2}$/.test(t)||Number.isNaN(o(t).getTime())))return t}function j(e,t){let n=A(e),r=A(t);if(!(!n||!r))return{from:n,to:r}}function M(e,t){if(e.from>e.to)return[];let n={start:o(e.from),end:o(e.to)},r=c(n);return t===`week`?r=l(n,{weekStartsOn:1}):t===`month`&&(r=p(n)),r.map((t,n)=>{let i=s(t,`yyyy-MM-dd`),a=r[n+1],o=a?s(u(a,-1),`yyyy-MM-dd`):e.to;return{date:i,from:i<e.from?e.from:i,to:o>e.to?e.to:o}})}function N(e,t,n){let r=o(e.from),i=o(t.from),a=n.map(e=>s(u(i,d(o(e.from),r)),`yyyy-MM-dd`));return a.map((e,n)=>{let r=n<a.length-1?s(u(o(a[n+1]),-1),`yyyy-MM-dd`):t.to;return{date:e,from:e,to:r>t.to?t.to:r}})}function P(e,t){let n=new Map(t.map(e=>[e.date,0]));for(let r of e){let e=t.find(e=>r.date>=e.from&&r.date<=e.to);e&&n.set(e.date,(n.get(e.date)??0)+r.views)}return t.map(e=>({date:ae(e.date),value:n.get(e.date)??0}))}function F(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=se({postId:e,fields:[`data`]}),{current:l,previous:u}=(0,i.useMemo)(()=>{let e=r?.data??[],i=j(t.from,t.to),a=j(t.compare_from,t.compare_to),o=i?M(i,n):[],s=P(e,o),c;i&&a&&(c=n===`day`?M(a,n):N(i,a,o));let l=c?P(e,c):void 0;return{current:s,previous:l?.length?l:void 0}},[r,n,t.from,t.to,t.compare_from,t.compare_to]);return{current:l,previous:u,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var I=e((()=>{g(),a(),f()}));function L(e){let t=e[0],n=e[e.length-1];return t&&n?m({from:t.date,to:n.date}):``}function R({granularity:e}){let{reportParams:n}=y(),r=_(n.post_id),{current:a,previous:o,isLoading:s,isFetching:c,isError:l,hasData:u,refetch:d}=F(r,n,e),f=(0,i.useMemo)(()=>a.length?o?.length?[{label:L(a),group:`views`,data:a},{label:L(o),group:`views`,data:o,options:{type:`comparison`,gradient:{from:`transparent`,to:`transparent`,fromOpacity:0,toOpacity:0}}}]:[{label:t(`Views`,`jetpack-premium-analytics`),group:`views`,data:a}]:[],[a,o]),p=ne(f);return(0,B.jsx)(`div`,{className:O.root,children:(0,B.jsx)(C,{isLoading:s&&!u,isFetching:c,isError:l,isEmpty:r<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:re,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics`)},children:(0,B.jsx)(v,{className:O.chart,series:f,styles:p,dataFormat:V})})})}function z({attributes:e={}}){let t=e?.granularity;return(0,B.jsx)(x,{attributes:e,children:(0,B.jsx)(R,{granularity:t===`week`||t===`month`?t:`day`})})}var B,V,he=e((()=>{g(),h(),ie(),de(),a(),n(),k(),I(),B=r(),V={type:`number`,options:{useMultipliers:!0,decimals:0}}})),H,ge=e((()=>{n(),te(),me(),H={name:`jpa/post-views`,title:t(`Post views`,`jetpack-premium-analytics`),help:{content:t(`The view trend of the post or page being viewed over the selected period.`,`jetpack-premium-analytics`)},icon:ee,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:pe,elements:[{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`}],relevance:`high`}],example:{attributes:{granularity:`day`}}}}));function U({withComparison:e,hasPostScope:t,granularity:n}){return{granularity:n,reportParams:{...oe(e),...t?{post_id:K}:{}}}}function W(e){return(0,G.jsx)(z,{attributes:U(e)})}function _e({withComparison:e,hasPostScope:t,granularity:n,...r}){return(0,G.jsx)(w,{...r,widgetType:{...H,presentation:`framed`},renderModule:q,renderComponent:z,attributes:U({withComparison:e,hasPostScope:t,granularity:n})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),S(),fe(),ue(),he(),ge(),G=r(),b(),K=779,q=`storybook/post-views`,J={title:`Packages/Premium Analytics/Widgets/PostViews`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a comparative line chart — the legacy Calypso post summary chart. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side per the host-rendered "Group by" control, with the comparison window sliced from the same request. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:W,args:{withComparison:!1,hasPostScope:!0,granularity:`day`},decorators:[T]},X={render:W,args:{withComparison:!0,hasPostScope:!0,granularity:`day`},decorators:[T]},Z={render:W,args:{withComparison:!1,hasPostScope:!1,granularity:`day`},decorators:[T]},Q={render:e=>(0,G.jsx)(_e,{...e}),args:{...ce,widgetWidth:2,widgetHeight:2,withComparison:!0,hasPostScope:!0,granularity:`day`},argTypes:{...le,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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