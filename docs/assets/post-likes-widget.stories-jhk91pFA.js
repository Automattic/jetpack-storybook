import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as ee,t as i}from"./build-module-DrryaqBL.js";import{O as a,n as o}from"./build-module-DoJYX5DX.js";import{$ as s,H as c,U as l,Y as u,g as te}from"./report-metric-B88CITdf.js";import{A as d,t as f}from"./src-B3le4dug.js";import{k as p,t as m}from"./src-Ddlvl-_o.js";import{Tn as h,kr as ne,ur as re,xt as g}from"./chart-tooltip-DYeL-Ebj.js";import{t as _}from"./widget-state-D2kmnSNs.js";import{C as v,D as y,E as b,S as x,T as S,b as C,t as w,w as T,x as E}from"./src-DuJJqcEZ.js";var D,O,ie=e((()=>{D=`_root_c0d23_3`,O={root:D}}));function ae(){let{reportParams:e}=s(),n=ne(e.post_id),{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=h({postId:n,number:j}),l=(0,ee.useMemo)(()=>(r?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:p(e.date_liked)})),[r]),u=r?.found??0,f=n<=0||!!r&&l.length===0;return(0,A.jsx)(`div`,{className:O.root,children:(0,A.jsx)(_,{isLoading:i&&!r,isFetching:a,isError:!r&&o,isEmpty:f,error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:d,description:t(n<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(te,{items:l,moreCount:Math.max(0,u-l.length)})})})}function k({attributes:e={}}){return(0,A.jsx)(u,{attributes:e,children:(0,A.jsx)(ae,{})})}var A,j,M=e((()=>{g(),m(),f(),w(),i(),n(),ie(),A=r(),j=10})),N,P=e((()=>{o(),N={icon:a,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/post-likes`,I=`Latest likes`,L=`The people who liked the post or page being viewed.`,R={content:`The people who liked the post or page being viewed.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({hasPostScope:e}){return{reportParams:{...re(!1),...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(k,{attributes:U(e)})}function G({hasPostScope:e,...t}){return(0,K.jsx)(S,{...t,widgetType:x(V,N),renderModule:J,renderComponent:k,attributes:U({hasPostScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{g(),c(),b(),v(),C(),M(),P(),H(),K=r(),l(),q=779,J=`storybook/post-likes`,Y={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:k,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:W,args:{hasPostScope:!0},decorators:[E]},Z={render:W,args:{hasPostScope:!1},decorators:[E]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...T,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...y,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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