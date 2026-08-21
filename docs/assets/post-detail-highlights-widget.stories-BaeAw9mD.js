import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{Ht as o,On as s,_c as c,ll as l,n as u}from"./build-module-CDRs4YxF.js";import{$ as d,G as f,K as p,rt as ee}from"./report-metric-eqkdVAO6.js";import{M as te,t as m}from"./src-BKLK-O8P.js";import{ft as h,hn as g,qt as _,t as v}from"./src-CK8duJl6.js";import{v as y}from"./chart-tooltip-4eI9fOJc.js";import{r as ne,t as re}from"./metric-tile-grid-skeleton-CQzgyp3r.js";import{t as ie}from"./widget-state-Cmw63AzH.js";import{C as b,D as ae,E as oe,S as se,T as x,b as S,t as C,w as ce,x as w}from"./src-qPkjkupB.js";var T,E,D=e((()=>{T=`_root_owpvf_1`,E={root:T}}));function O(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function k(e,t){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=h({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,i.useMemo)(()=>{let e=n?.data??[],r=y(t.from),i=y(t.to),a=y(t.compare_from),o=y(t.compare_to),s=t.comp===`1`,c=r&&i?O(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?O(e,a,o):null),{views:c,viewsPrevious:l,comments:n?.post?.comment_count??0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:a,isError:o,hasData:!!n,refetch:s}}var A=e((()=>{v(),C(),a()}));function le(){let{reportParams:e}=ee(),n=g(e.post_id),{views:r,viewsPrevious:a,comments:l,likes:u,hasComparison:d,isLoading:f,isFetching:p,isError:m,hasData:h,refetch:_}=k(n,e),v=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),icon:s,value:r,previousValue:a,note:t(`Views in the selected date range.`,`jetpack-premium-analytics-pkg`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`),icon:o,value:u,previousValue:d?null:void 0,note:P()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`),icon:c,value:l,previousValue:d?null:void 0,note:P()}],[r,a,l,u,d]);return(0,M.jsx)(`div`,{className:E.root,children:(0,M.jsx)(ie,{isLoading:f,isFetching:p,isError:!h&&m,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{icon:te,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(re,{tiles:v.length}),children:(0,M.jsx)(ne,{tiles:v,dataFormat:N})})})}function j({attributes:e={}}){return(0,M.jsx)(d,{attributes:e,children:(0,M.jsx)(le,{})})}var M,N,P,ue=e((()=>{v(),m(),C(),a(),n(),u(),D(),A(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics-pkg`)})),F,de=e((()=>{u(),F={icon:l,attributes:[],example:{attributes:{}}}})),I,L,R,z,B,V,H,fe=e((()=>{I=`jpa/post-detail-highlights`,L=`Post highlights`,R=`Views, comments, and likes for the post or page being viewed.`,z={content:`Views, comments, and likes for the post or page being viewed.`},B=`stats`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U({withComparison:e,hasPostScope:t}){return{reportParams:{..._(e),...t?{post_id:K}:{}}}}function W(e){return(0,G.jsx)(j,{attributes:U(e)})}function pe({withComparison:e,hasPostScope:t,...n}){return(0,G.jsx)(x,{...n,widgetType:se(H,F),renderModule:q,renderComponent:j,attributes:U({withComparison:e,hasPostScope:t})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),f(),oe(),b(),S(),ue(),de(),fe(),G=r(),p(),K=779,q=`storybook/post-detail-highlights`,J={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:W,args:{withComparison:!1,hasPostScope:!0},decorators:[w]},X={render:W,args:{withComparison:!0,hasPostScope:!0},decorators:[w]},Z={render:W,args:{withComparison:!1,hasPostScope:!1},decorators:[w]},Q={render:e=>(0,G.jsx)(pe,{...e}),args:{...ce,widgetWidth:4,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...ae,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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