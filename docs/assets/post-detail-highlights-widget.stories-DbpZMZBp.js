import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{Dn as o,Vt as s,cl as c,gc as l,t as u}from"./build-module-CR6EsQjA.js";import{b as ee,g as d}from"./hooks-Cs5xAI4e.js";import{M as te,t as f}from"./src-CldFJNXL.js";import{bn as ne,ft as p,qt as m,t as h}from"./src-DvcQwQzT.js";import{k as g}from"./chart-tooltip-D5YrBc4g.js";import{r as re,t as ie}from"./metric-tile-grid-skeleton-BT0uWwmq.js";import{G as _,K as ae}from"./report-metric-DGt_a2Rg.js";import{t as oe}from"./widget-state-9PpMooDZ.js";import{C as se,D as ce,E as v,S as y,T as le,b,t as x,w as ue,x as S}from"./src-DZFdWC_e.js";var C,w,T=e((()=>{C=`_root_owpvf_1`,w={root:C}}));function E(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function D(e,t){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=p({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,i.useMemo)(()=>{let e=n?.data??[],r=g(t.from),i=g(t.to),a=g(t.compare_from),o=g(t.compare_to),s=t.comp===`1`,c=r&&i?E(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?E(e,a,o):null),{views:c,viewsPrevious:l,comments:n?.post?.comment_count??0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:a,isError:o,hasData:!!n,refetch:s}}var O=e((()=>{h(),x(),a()}));function k(){let{reportParams:e}=ee(),n=ne(e.post_id),{views:r,viewsPrevious:a,comments:c,likes:u,hasComparison:d,isLoading:f,isFetching:p,isError:m,hasData:h,refetch:g}=D(n,e),_=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:o,value:r,previousValue:a,note:t(`Views in the selected date range.`,`jetpack-premium-analytics-pkg`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),icon:s,value:u,previousValue:d?null:void 0,note:N()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),icon:l,value:c,previousValue:d?null:void 0,note:N()}],[r,a,c,u,d]);return(0,j.jsx)(`div`,{className:w.root,children:(0,j.jsx)(oe,{isLoading:f,isFetching:p,isError:!h&&m,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},empty:{icon:te,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ie,{tiles:_.length}),children:(0,j.jsx)(re,{tiles:_,dataFormat:M})})})}function A({attributes:e={}}){return(0,j.jsx)(d,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N,de=e((()=>{h(),f(),x(),a(),n(),u(),T(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics-pkg`)})),P,F=e((()=>{u(),P={icon:c,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/post-detail-highlights`,L=`Post highlights`,R=`Views, comments, and likes for the post or page being viewed.`,z={content:`Views, comments, and likes for the post or page being viewed.`},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U({withComparison:e,hasPostScope:t}){return{reportParams:{...m(e),...t?{post_id:K}:{}}}}function W(e){return(0,G.jsx)(A,{attributes:U(e)})}function pe({withComparison:e,hasPostScope:t,...n}){return(0,G.jsx)(le,{...n,widgetType:y(H,P),renderModule:q,renderComponent:A,attributes:U({withComparison:e,hasPostScope:t})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),_(),v(),se(),b(),de(),F(),fe(),G=r(),ae(),K=779,q=`storybook/post-detail-highlights`,J={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:W,args:{withComparison:!1,hasPostScope:!0},decorators:[S]},X={render:W,args:{withComparison:!0,hasPostScope:!0},decorators:[S]},Z={render:W,args:{withComparison:!1,hasPostScope:!1},decorators:[S]},Q={render:e=>(0,G.jsx)(pe,{...e}),args:{...ue,widgetWidth:4,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...ce,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderPostDetailHighlights,
  args: {
    withComparison: false,
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source},description:{story:`Default — the scoped post's highlights for the primary period only; the
Views tile shows no delta.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostDetailHighlights,
  args: {
    withComparison: true,
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`WithComparison — the previous-period comparison from the date range picker;
the Views tile carries a delta while comments and likes keep the comparison
layout without a fabricated delta.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostDetailHighlights,
  args: {
    withComparison: false,
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a stats request.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostDetailHighlightsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 4,
    widgetHeight: 1,
    withComparison: true,
    hasPostScope: true
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
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{Y as Default,Z as NoPostScope,Q as WidgetDashboardWithWidget,X as WithComparison,$ as __namedExportsOrder,J as default};