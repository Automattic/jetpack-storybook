import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as ee,t as i}from"./build-module-DuNGIx6S.js";import{Vt as a,t as o}from"./build-module-CR6EsQjA.js";import{b as s,g as c}from"./hooks-Zp2MMEJ1.js";import{M as l,t as u}from"./src-CldFJNXL.js";import{q as te,t as d}from"./src-PAio7L17.js";import{Sn as ne,ct as re,qt as f,t as p}from"./src-CmjYeYRK.js";import{G as m,K as h}from"./report-metric-CXfJr-7t.js";import{t as g}from"./widget-state-DyHPIj46.js";import{r as _,t as v}from"./subscriber-list-skeleton-DlYx2hsx.js";import{C as y,D as b,E as x,S,T as C,b as w,t as T,w as ie,x as E}from"./src-eO_8wQra.js";var D,O,ae=e((()=>{D=`_root_6wdsv_2`,O={root:D}}));function oe(){let{reportParams:e}=s(),n=ne(e.post_id),{data:r,isLoading:i,isFetching:a,isError:o,refetch:c}=re({postId:n,number:j}),u=(0,ee.useMemo)(()=>(r?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:te(e.date_liked)})),[r]),d=r?.found??0,f=n<=0||!!r&&u.length===0;return(0,A.jsx)(`div`,{className:O.root,children:(0,A.jsx)(g,{isLoading:i,isFetching:a,isError:!r&&o,isEmpty:f,renderLoading:(0,A.jsx)(v,{rows:j}),error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:l,description:t(n<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(_,{items:u,moreCount:Math.max(0,d-u.length)})})})}function k({attributes:e={}}){return(0,A.jsx)(c,{attributes:e,children:(0,A.jsx)(oe,{})})}var A,j,M=e((()=>{p(),d(),u(),T(),i(),n(),ae(),A=r(),j=10})),N,P=e((()=>{o(),N={icon:a,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/post-likes`,I=`Latest likes`,L=`The people who liked the post or page being viewed.`,R={content:`The people who liked the post or page being viewed.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({hasPostScope:e}){return{reportParams:{...f(!1),...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(k,{attributes:U(e)})}function G({hasPostScope:e,...t}){return(0,K.jsx)(C,{...t,widgetType:S(V,N),renderModule:J,renderComponent:k,attributes:U({hasPostScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{p(),m(),x(),y(),w(),M(),P(),H(),K=r(),h(),q=779,J=`storybook/post-likes`,Y={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:k,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},X={render:W,args:{hasPostScope:!0},decorators:[E]},Z={render:W,args:{hasPostScope:!1},decorators:[E]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...ie,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...b,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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