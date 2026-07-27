import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as ee,t as i}from"./build-module-DrryaqBL.js";import{O as a,n as o}from"./build-module-DmVuor49.js";import{A as s,t as c}from"./src-B3le4dug.js";import{_ as te,t as l}from"./src-BtA5IWfl.js";import{Ct as u,Dn as ne,fr as d,jr as f}from"./chart-tooltip-DtpKwzx7.js";import{I as p,L as re,U as ie,g as m,q as h}from"./report-metric-DxTYiy_c.js";import{t as g}from"./widget-state-C5_hcupx.js";import{C as _,D as v,E as y,S as b,T as x,b as S,t as C,w,x as T}from"./src-CAVpzJCG.js";var E,D,O=e((()=>{E=`_root_c0d23_3`,D={root:E}}));function ae(){let{reportParams:e}=h(),n=f(e.post_id),{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=ne({postId:n,number:j}),l=(0,ee.useMemo)(()=>(r?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:te(e.date_liked)})),[r]),u=r?.found??0,d=n<=0||!!r&&l.length===0;return(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(g,{isLoading:i&&!r,isFetching:a,isError:!r&&o,isEmpty:d,error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:c}]},empty:{icon:s,description:t(n<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics`)},children:(0,A.jsx)(m,{items:l,moreCount:Math.max(0,u-l.length)})})})}function k({attributes:e={}}){return(0,A.jsx)(ie,{attributes:e,children:(0,A.jsx)(ae,{})})}var A,j,M=e((()=>{u(),l(),c(),C(),i(),n(),O(),A=r(),j=10})),N,P=e((()=>{o(),N={icon:a,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/post-likes`,I=`Latest likes`,L=`The people who liked the post or page being viewed.`,R={content:`The people who liked the post or page being viewed.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({hasPostScope:e}){return{reportParams:{...d(!1),...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(k,{attributes:U(e)})}function G({hasPostScope:e,...t}){return(0,K.jsx)(x,{...t,widgetType:b(V,N),renderModule:J,renderComponent:k,attributes:U({hasPostScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{u(),p(),y(),_(),S(),M(),P(),H(),K=r(),re(),q=779,J=`storybook/post-likes`,Y={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:k,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:W,args:{hasPostScope:!0},decorators:[T]},Z={render:W,args:{hasPostScope:!1},decorators:[T]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...w,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...v,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source},description:{story:`Default — the scoped post's likers with the "N more" footer.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a request.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostLikesDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 1,
    widgetHeight: 2,
    hasPostScope: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    hasPostScope: {
      control: 'boolean',
      description: 'Include the \`post_id\` report param the post detail page seeds from its URL.'
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Mirrors the production placement (1 column × 2 rows). The fixture's ten
rows exceed that tile height, so this story also demonstrates the roster
scrolling inside the widget frame's content viewport.`,...Q.parameters?.docs?.description}}},$=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Z as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};