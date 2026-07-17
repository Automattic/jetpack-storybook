import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{C as o,X as s,bt as c,gt as l,ht as u,sn as d,t as f,vt as p}from"./date-fns-B2pKki1V.js";import{Nn as m,n as h}from"./build-module-DmVuor49.js";import{a as g}from"./hooks-Dy_f3LQW.js";import{A as ee,t as te}from"./src-B3le4dug.js";import{i as ne,t as re}from"./src-3Lv7Etdm.js";import{$n as ie,_r as ae,ut as _,vn as v}from"./chart-tooltip-Dlx-EoLb.js";import{t as oe}from"./comparative-line-chart-Ds5ld7u_.js";import{C as y,N as b,S as x,k as S}from"./report-metric-Bh4yj25D.js";import{t as C}from"./widget-state-Dx4QMqsU.js";import{C as w,S as T,T as E,b as se,t as ce,w as le,x as D}from"./src-BQdFjPxU.js";import{n as ue,t as de}from"./src-B06dgEKz.js";var O,k,A,j=e((()=>{O=`_root_gxrb3_3`,k=`_chart_gxrb3_12`,A={root:O,chart:k}}));function M(e){let t=e?.slice(0,10);if(!(!t||!/^\d{4}-\d{2}-\d{2}$/.test(t)||Number.isNaN(o(t).getTime())))return t}function N(e,t){let n=M(e),r=M(t);if(!(!n||!r))return{from:n,to:r}}function P(e,t,n){if(t.from>t.to)return[];let r=e=>n===`day`?e:s(n===`week`?d(o(e)):u(o(e)),`yyyy-MM-dd`),i={start:o(t.from),end:o(t.to)},a=c(i);n===`week`?a=l(i,{weekStartsOn:1}):n===`month`&&(a=p(i));let f=new Map(a.map(e=>[s(e,`yyyy-MM-dd`),0]));for(let n of e){if(n.date<t.from||n.date>t.to)continue;let e=r(n.date);f.set(e,(f.get(e)??0)+n.views)}return Array.from(f.entries()).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({date:ae(e),value:t}))}function F(e,t,n){let{data:r,isLoading:a,isFetching:o,isError:s,refetch:c}=v({postId:e,fields:[`data`]}),{current:l,previous:u}=(0,i.useMemo)(()=>{let e=r?.data??[],i=N(t.from,t.to),a=N(t.compare_from,t.compare_to),o=i?P(e,i,n):[],s=a?P(e,a,n):void 0;return{current:o,previous:s?.length?s:void 0}},[r,n,t.from,t.to,t.compare_from,t.compare_to]);return{current:l,previous:u,isLoading:a,isFetching:o,isError:s,hasData:!!r,refetch:c}}var I=e((()=>{_(),a(),f()}));function L(e){let t=e[0],n=e[e.length-1];return t&&n?ne({from:t.date,to:n.date}):``}function R({granularity:e}){let{reportParams:n}=b(),r=Number(n.post_id)||0,{current:a,previous:o,isLoading:s,isFetching:c,isError:l,hasData:u,refetch:d}=F(r,n,e),f=(0,i.useMemo)(()=>a.length?o?.length?[{label:L(a),group:`views`,data:a},{label:L(o),group:`views`,data:o,options:{type:`comparison`,gradient:{from:`transparent`,to:`transparent`,fromOpacity:0,toOpacity:0}}}]:[{label:t(`Views`,`jetpack-premium-analytics`),group:`views`,data:a}]:[],[a,o]),p=g(f);return(0,B.jsx)(`div`,{className:A.root,children:(0,B.jsx)(C,{isLoading:s&&!u,isFetching:c,isError:l,isEmpty:r<=0,error:{description:t(`We couldn't load this post's views. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:ee,description:t(`Open a post or page report to see its views here.`,`jetpack-premium-analytics`)},children:(0,B.jsx)(oe,{className:A.chart,series:f,styles:p,dataFormat:V})})})}function z({attributes:e={}}){let t=e?.granularity;return(0,B.jsx)(S,{attributes:e,children:(0,B.jsx)(R,{granularity:t===`week`||t===`month`?t:`day`})})}var B,V,fe=e((()=>{re(),te(),ce(),a(),n(),j(),I(),B=r(),V={type:`number`,options:{useMultipliers:!0,decimals:0}}})),H,pe=e((()=>{n(),h(),de(),H={name:`jpa/post-views`,title:t(`Post views`,`jetpack-premium-analytics`),help:{content:t(`The view trend of the post or page being viewed over the selected period.`,`jetpack-premium-analytics`)},icon:m,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:ue,elements:[{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`}],relevance:`high`}],example:{attributes:{granularity:`day`}}}}));function U({withComparison:e,hasPostScope:t,granularity:n}){return{granularity:n,reportParams:{...ie(e),...t?{post_id:K}:{}}}}function W(e){return(0,G.jsx)(z,{attributes:U(e)})}function me({withComparison:e,hasPostScope:t,granularity:n,...r}){return(0,G.jsx)(w,{...r,widgetType:{...H,presentation:`framed`},renderModule:q,renderComponent:z,attributes:U({withComparison:e,hasPostScope:t,granularity:n})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),x(),le(),se(),fe(),pe(),G=r(),y(),K=779,q=`storybook/post-views`,J={title:`Packages/Premium Analytics/Widgets/PostViews`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}},parameters:{docs:{description:{component:`The "Post views" widget: the scoped post's view trend over the dashboard date range as a comparative line chart — the legacy Calypso post summary chart. The view series comes from \`stats/post\`'s full daily history, zero-filled and bucketed client-side per the host-rendered "Group by" control, with the comparison window sliced from the same request. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:W,args:{withComparison:!1,hasPostScope:!0,granularity:`day`},decorators:[D]},X={render:W,args:{withComparison:!0,hasPostScope:!0,granularity:`day`},decorators:[D]},Z={render:W,args:{withComparison:!1,hasPostScope:!1,granularity:`day`},decorators:[D]},Q={render:e=>(0,G.jsx)(me,{...e}),args:{...T,widgetWidth:2,widgetHeight:2,withComparison:!0,hasPostScope:!0,granularity:`day`},argTypes:{...E,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."},granularity:{control:`radio`,options:[`day`,`week`,`month`],description:`The "Group by" toolbar attribute rendered by the widget host.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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