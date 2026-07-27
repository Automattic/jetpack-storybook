import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{I as o,O as s,an as c,n as l}from"./build-module-DmVuor49.js";import{A as ee,t as u}from"./src-B3le4dug.js";import{Ct as d,c as f,fr as p,jn as m,jr as te}from"./chart-tooltip-DtpKwzx7.js";import{t as ne}from"./metric-tile-grid-vIXyMKqj.js";import{I as h,L as g,U as _,q as re}from"./report-metric-DxTYiy_c.js";import{t as ie}from"./widget-state-C5_hcupx.js";import{C as ae,D as oe,E as v,S as se,T as y,b,t as x,w as S,x as C}from"./src-CAVpzJCG.js";var w,T,ce=e((()=>{w=`_root_12rzq_1`,T={root:w}}));function E(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function D(e,t){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=m({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,i.useMemo)(()=>{let e=n?.data??[],r=f(t.from),i=f(t.to),a=f(t.compare_from),o=f(t.compare_to),s=t.comp===`1`,c=r&&i?E(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?E(e,a,o):null),{views:c,viewsPrevious:l,comments:Number(n?.post?.comment_count)||0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:a,isError:o,hasData:!!n,refetch:s}}var O=e((()=>{d(),x(),a()}));function k(){let{reportParams:e}=re(),n=te(e.post_id),{views:r,viewsPrevious:a,comments:l,likes:u,hasComparison:d,isLoading:f,isFetching:p,isError:m,hasData:h,refetch:g}=D(n,e),_=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics`),icon:o,value:r,previousValue:a,note:t(`Views in the selected date range.`,`jetpack-premium-analytics`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics`),icon:s,value:u,previousValue:d?null:void 0,note:N()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics`),icon:c,value:l,previousValue:d?null:void 0,note:N()}],[r,a,l,u,d]);return(0,j.jsx)(`div`,{className:T.root,children:(0,j.jsx)(ie,{isLoading:f&&!h,isFetching:p,isError:!h&&m,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:g}]},empty:{icon:ee,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(ne,{tiles:_,dataFormat:M})})})}function A({attributes:e={}}){return(0,j.jsx)(_,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N,le=e((()=>{d(),u(),x(),a(),n(),l(),ce(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics`)})),P,ue=e((()=>{l(),P={icon:s,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/post-detail-highlights`,I=`Post highlights`,L=`Views, comments, and likes for the post or page being viewed.`,R={content:`Views, comments, and likes for the post or page being viewed.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({withComparison:e,hasPostScope:t}){return{reportParams:{...p(e),...t?{post_id:K}:{}}}}function W(e){return(0,G.jsx)(A,{attributes:U(e)})}function de({withComparison:e,hasPostScope:t,...n}){return(0,G.jsx)(y,{...n,widgetType:se(V,P),renderModule:q,renderComponent:A,attributes:U({withComparison:e,hasPostScope:t})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),h(),v(),ae(),b(),le(),ue(),H(),G=r(),g(),K=779,q=`storybook/post-detail-highlights`,J={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:W,args:{withComparison:!1,hasPostScope:!0},decorators:[C]},X={render:W,args:{withComparison:!0,hasPostScope:!0},decorators:[C]},Z={render:W,args:{withComparison:!1,hasPostScope:!1},decorators:[C]},Q={render:e=>(0,G.jsx)(de,{...e}),args:{...S,widgetWidth:4,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...oe,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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