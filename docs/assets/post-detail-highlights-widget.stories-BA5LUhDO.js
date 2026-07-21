import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{I as o,O as s,an as c,n as l}from"./build-module-DmVuor49.js";import{A as ee,t as u}from"./src-B3le4dug.js";import{dt as d,er as f,yn as p,yr as m}from"./chart-tooltip-BpbC1Ly_.js";import{t as h}from"./metric-tile-grid-C7mHZ7_f.js";import{H as te,M as g,R as _,j as v}from"./report-metric-DrX_Wimw.js";import{t as y}from"./widget-state-Cthq0GVH.js";import{C as b,S as x,T as S,b as C,t as w,w as T,x as E}from"./src-eTaSBNiP.js";var D,O,k=e((()=>{D=`_root_12rzq_1`,O={root:D}}));function A(e){let t=e?.slice(0,10);return t&&/^\d{4}-\d{2}-\d{2}$/.test(t)?t:void 0}function j(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function M(e,t){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=p({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,i.useMemo)(()=>{let e=n?.data??[],r=A(t.from),i=A(t.to),a=A(t.compare_from),o=A(t.compare_to),s=t.comp===`1`,c=r&&i?j(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?j(e,a,o):null),{views:c,viewsPrevious:l,comments:Number(n?.post?.comment_count)||0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:a,isError:o,hasData:!!n,refetch:s}}var N=e((()=>{d(),a()}));function P(){let{reportParams:e}=te(),n=m(e.post_id),{views:r,viewsPrevious:a,comments:l,likes:u,hasComparison:d,isLoading:f,isFetching:p,isError:g,hasData:_,refetch:v}=M(n,e),b=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics`),icon:o,value:r,previousValue:a,note:t(`Views in the selected date range.`,`jetpack-premium-analytics`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics`),icon:s,value:u,previousValue:d?null:void 0,note:R()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics`),icon:c,value:l,previousValue:d?null:void 0,note:R()}],[r,a,l,u,d]);return(0,I.jsx)(`div`,{className:O.root,children:(0,I.jsx)(y,{isLoading:f&&!_,isFetching:p,isError:!_&&g,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:v}]},empty:{icon:ee,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(h,{tiles:b,dataFormat:L})})})}function F({attributes:e={}}){return(0,I.jsx)(_,{attributes:e,children:(0,I.jsx)(P,{})})}var I,L,R,z=e((()=>{d(),u(),w(),a(),n(),l(),k(),N(),I=r(),L={type:`number`,options:{useMultipliers:!0,decimals:0}},R=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics`)})),B,V=e((()=>{n(),l(),B={name:`jpa/post-detail-highlights`,title:t(`Post highlights`,`jetpack-premium-analytics`),help:{content:t(`Views, comments, and likes for the post or page being viewed.`,`jetpack-premium-analytics`)},icon:s,attributes:[],example:{attributes:{}}}}));function H({withComparison:e,hasPostScope:t}){return{reportParams:{...f(e),...t?{post_id:K}:{}}}}function U(e){return(0,G.jsx)(F,{attributes:H(e)})}function W({withComparison:e,hasPostScope:t,...n}){return(0,G.jsx)(b,{...n,widgetType:{...B,presentation:`framed`},renderModule:q,renderComponent:F,attributes:H({withComparison:e,hasPostScope:t})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),v(),T(),C(),z(),V(),G=r(),g(),K=779,q=`storybook/post-detail-highlights`,J={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:U,args:{withComparison:!1,hasPostScope:!0},decorators:[E]},X={render:U,args:{withComparison:!0,hasPostScope:!0},decorators:[E]},Z={render:U,args:{withComparison:!1,hasPostScope:!1},decorators:[E]},Q={render:e=>(0,G.jsx)(W,{...e}),args:{...x,widgetWidth:4,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...S,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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