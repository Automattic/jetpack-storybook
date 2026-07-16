import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{Ht as o,On as s,n as c,pc as l}from"./build-module-C6Ow06jV.js";import{A as u,t as d}from"./src-Bf8IXmOS.js";import{Yn as f,hn as p,ut as m}from"./chart-tooltip-BvA5_2yM.js";import{t as h}from"./metric-tile-grid-vuR1TfjP.js";import{C as g,N as _,S as v,k as y}from"./report-metric-DCN8A8Hp.js";import{t as b}from"./widget-state-DxFYrYCq.js";import{S as x,b as S,t as C,x as w,y as T}from"./src-Bepsc1lm.js";var E,D,O=e((()=>{E=`_root_12rzq_1`,D={root:E}}));function k(e){let t=e?.slice(0,10);return t&&/^\d{4}-\d{2}-\d{2}$/.test(t)?t:void 0}function A(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function j(e,t){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=p({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,i.useMemo)(()=>{let e=n?.data??[],r=k(t.from),i=k(t.to),a=k(t.compare_from),o=k(t.compare_to),s=t.comp===`1`,c=r&&i?A(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?A(e,a,o):null),{views:c,viewsPrevious:l,comments:Number(n?.post?.comment_count)||0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:a,isError:o,hasData:!!n,refetch:s}}var M=e((()=>{m(),a()}));function N(){let{reportParams:e}=_(),n=Number(e.post_id)||0,{views:r,viewsPrevious:a,comments:c,likes:d,hasComparison:f,isLoading:p,isFetching:m,isError:g,hasData:v,refetch:y}=j(n,e),x=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics`),icon:s,value:r,previousValue:a,note:t(`Views in the selected date range.`,`jetpack-premium-analytics`)},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics`),icon:l,value:c,previousValue:f?null:void 0,note:L()},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics`),icon:o,value:d,previousValue:f?null:void 0,note:L()}],[r,a,c,d,f]);return(0,F.jsx)(`div`,{className:D.root,children:(0,F.jsx)(b,{isLoading:p&&!v,isFetching:m,isError:!v&&g,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:y}]},empty:{icon:u,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(h,{tiles:x,dataFormat:I})})})}function P({attributes:e={}}){return(0,F.jsx)(y,{attributes:e,children:(0,F.jsx)(N,{})})}var F,I,L,R=e((()=>{d(),C(),a(),n(),c(),O(),M(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics`)})),z,B=e((()=>{n(),c(),z={name:`jpa/post-detail-highlights`,title:t(`Post highlights`,`jetpack-premium-analytics`),help:{content:t(`Views, comments, and likes for the post or page being viewed.`,`jetpack-premium-analytics`)},icon:o,attributes:[],example:{attributes:{}}}}));function V({withComparison:e,hasPostScope:t}){return{reportParams:{...f(e),...t?{post_id:G}:{}}}}function H(e){return(0,W.jsx)(P,{attributes:V(e)})}function U({withComparison:e,hasPostScope:t,...n}){return(0,W.jsx)(S,{...n,widgetType:{...z,presentation:`framed`},renderModule:K,renderComponent:P,attributes:V({withComparison:e,hasPostScope:t})})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),v(),w(),R(),B(),W=r(),g(),G=779,K=`storybook/post-detail-highlights`,q=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`160px`},children:(0,W.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:H,args:{withComparison:!1,hasPostScope:!0},decorators:[q]},X={render:H,args:{withComparison:!0,hasPostScope:!0},decorators:[q]},Z={render:H,args:{withComparison:!1,hasPostScope:!1},decorators:[q]},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...T,widgetWidth:4,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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