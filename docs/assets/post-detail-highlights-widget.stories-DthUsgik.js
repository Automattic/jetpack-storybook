import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{I as o,O as s,an as c,n as l}from"./build-module-DmVuor49.js";import{A as u,t as d}from"./src-B3le4dug.js";import{dt as f,er as p,yn as m}from"./chart-tooltip-DkADXAGL.js";import{t as h}from"./metric-tile-grid-Ce9xZEQa.js";import{F as g,T as _,j as v,w as y}from"./report-metric-DZlvK0Ux.js";import{t as b}from"./widget-state-CzcLY4pG.js";import{C as x,S,T as C,b as w,t as T,w as ee,x as E}from"./src-DjcTvcly.js";var D,O,k=e((()=>{D=`_root_12rzq_1`,O={root:D}}));function A(e){let t=e?.slice(0,10);return t&&/^\d{4}-\d{2}-\d{2}$/.test(t)?t:void 0}function j(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function M(e,t){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=m({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,i.useMemo)(()=>{let e=n?.data??[],r=A(t.from),i=A(t.to),a=A(t.compare_from),o=A(t.compare_to),s=t.comp===`1`,c=r&&i?j(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?j(e,a,o):null),{views:c,viewsPrevious:l,comments:Number(n?.post?.comment_count)||0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:a,isError:o,hasData:!!n,refetch:s}}var N=e((()=>{f(),a()}));function P(){let{reportParams:e}=g(),n=Number(e.post_id)||0,{views:r,viewsPrevious:a,comments:l,likes:d,hasComparison:f,isLoading:p,isFetching:m,isError:_,hasData:v,refetch:y}=M(n,e),x=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics`),icon:o,value:r,previousValue:a,note:t(`Views in the selected date range.`,`jetpack-premium-analytics`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics`),icon:s,value:d,previousValue:f?null:void 0,note:R()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics`),icon:c,value:l,previousValue:f?null:void 0,note:R()}],[r,a,l,d,f]);return(0,I.jsx)(`div`,{className:O.root,children:(0,I.jsx)(b,{isLoading:p&&!v,isFetching:m,isError:!v&&_,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:y}]},empty:{icon:u,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(h,{tiles:x,dataFormat:L})})})}function F({attributes:e={}}){return(0,I.jsx)(v,{attributes:e,children:(0,I.jsx)(P,{})})}var I,L,R,z=e((()=>{d(),T(),a(),n(),l(),k(),N(),I=r(),L={type:`number`,options:{useMultipliers:!0,decimals:0}},R=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics`)})),B,V=e((()=>{n(),l(),B={name:`jpa/post-detail-highlights`,title:t(`Post highlights`,`jetpack-premium-analytics`),help:{content:t(`Views, comments, and likes for the post or page being viewed.`,`jetpack-premium-analytics`)},icon:s,attributes:[],example:{attributes:{}}}}));function H({withComparison:e,hasPostScope:t}){return{reportParams:{...p(e),...t?{post_id:K}:{}}}}function U(e){return(0,G.jsx)(F,{attributes:H(e)})}function W({withComparison:e,hasPostScope:t,...n}){return(0,G.jsx)(x,{...n,widgetType:{...B,presentation:`framed`},renderModule:q,renderComponent:F,attributes:H({withComparison:e,hasPostScope:t})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),y(),ee(),w(),z(),V(),G=r(),_(),K=779,q=`storybook/post-detail-highlights`,J={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:F,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:U,args:{withComparison:!1,hasPostScope:!0},decorators:[E]},X={render:U,args:{withComparison:!0,hasPostScope:!0},decorators:[E]},Z={render:U,args:{withComparison:!1,hasPostScope:!1},decorators:[E]},Q={render:e=>(0,G.jsx)(W,{...e}),args:{...S,widgetWidth:4,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...C,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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