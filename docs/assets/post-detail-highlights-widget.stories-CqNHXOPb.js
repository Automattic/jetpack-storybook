import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{I as o,O as s,an as c,n as l}from"./build-module-DmVuor49.js";import{A as u,t as d}from"./src-B3le4dug.js";import{Dn as f,Dr as ee,c as p,cr as m,yt as h}from"./chart-tooltip-Cd40q6p_.js";import{t as te}from"./metric-tile-grid-i-4YU92I.js";import{F as g,G as ne,P as _,V as v}from"./report-metric-B3b3UKzQ.js";import{t as re}from"./widget-state-b1jukbpw.js";import{C as ie,D as ae,E as oe,S as y,T as b,b as se,t as x,w as S,x as C}from"./src-B7W5WdVS.js";var w,T,ce=e((()=>{w=`_root_12rzq_1`,T={root:w}}));function E(e,t,n){let r=0;for(let i of e)i.date>=t&&i.date<=n&&(r+=i.views);return r}function le(e,t){let{data:n,isLoading:r,isFetching:a,isError:o,refetch:s}=f({postId:e,fields:[`data`,`like_count`,`post`]});return{...(0,i.useMemo)(()=>{let e=n?.data??[],r=p(t.from),i=p(t.to),a=p(t.compare_from),o=p(t.compare_to),s=t.comp===`1`,c=r&&i?E(e,r,i):e.reduce((e,t)=>e+t.views,0),l;return s&&(l=a&&o?E(e,a,o):null),{views:c,viewsPrevious:l,comments:Number(n?.post?.comment_count)||0,likes:n?.like_count??0,hasComparison:s}},[n,t.comp,t.from,t.to,t.compare_from,t.compare_to]),isLoading:r,isFetching:a,isError:o,hasData:!!n,refetch:s}}var D=e((()=>{h(),x(),a()}));function O(){let{reportParams:e}=ne(),n=ee(e.post_id),{views:r,viewsPrevious:a,comments:l,likes:d,hasComparison:f,isLoading:p,isFetching:m,isError:h,hasData:g,refetch:_}=le(n,e),v=(0,i.useMemo)(()=>[{key:`views`,label:t(`Views`,`jetpack-premium-analytics`),icon:o,value:r,previousValue:a,note:t(`Views in the selected date range.`,`jetpack-premium-analytics`)},{key:`likes`,label:t(`Likes`,`jetpack-premium-analytics`),icon:s,value:d,previousValue:f?null:void 0,note:M()},{key:`comments`,label:t(`Comments`,`jetpack-premium-analytics`),icon:c,value:l,previousValue:f?null:void 0,note:M()}],[r,a,l,d,f]);return(0,A.jsx)(`div`,{className:T.root,children:(0,A.jsx)(re,{isLoading:p&&!g,isFetching:m,isError:!g&&h,isEmpty:n<=0,error:{description:t(`We couldn't load this post's highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:_}]},empty:{icon:u,description:t(`Open a post or page report to see its highlights here.`,`jetpack-premium-analytics`)},children:(0,A.jsx)(te,{tiles:v,dataFormat:j})})})}function k({attributes:e={}}){return(0,A.jsx)(v,{attributes:e,children:(0,A.jsx)(O,{})})}var A,j,M,ue=e((()=>{h(),d(),x(),a(),n(),l(),ce(),D(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=()=>t(`All-time total — this metric has no per-post history.`,`jetpack-premium-analytics`)})),N,P=e((()=>{l(),N={icon:s,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/post-detail-highlights`,I=`Post highlights`,L=`Views, comments, and likes for the post or page being viewed.`,R={content:`Views, comments, and likes for the post or page being viewed.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({withComparison:e,hasPostScope:t}){return{reportParams:{...m(e),...t?{post_id:K}:{}}}}function W(e){return(0,G.jsx)(k,{attributes:U(e)})}function de({withComparison:e,hasPostScope:t,...n}){return(0,G.jsx)(b,{...n,widgetType:y(V,N),renderModule:q,renderComponent:k,attributes:U({withComparison:e,hasPostScope:t})})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),_(),oe(),ie(),se(),ue(),P(),H(),G=r(),g(),K=779,q=`storybook/post-detail-highlights`,J={title:`Packages/Premium Analytics/Widgets/PostDetailHighlights`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Post highlights" widget: the scoped post's views, comments, and likes as metric tiles — the post detail Traffic view's highlights card. Views is period-scoped and carries a delta when comparison is on; comments and likes are lifetime totals with no per-post history, so their tiles show a note instead of a delta. Without a post scope the widget renders a scopeless empty state.`}}}},Y={render:W,args:{withComparison:!1,hasPostScope:!0},decorators:[C]},X={render:W,args:{withComparison:!0,hasPostScope:!0},decorators:[C]},Z={render:W,args:{withComparison:!1,hasPostScope:!1},decorators:[C]},Q={render:e=>(0,G.jsx)(de,{...e}),args:{...S,widgetWidth:4,widgetHeight:1,withComparison:!0,hasPostScope:!0},argTypes:{...ae,withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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