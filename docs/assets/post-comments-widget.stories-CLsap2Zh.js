import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{_c as a,n as o}from"./build-module-CDRs4YxF.js";import{b as te,g as s}from"./hooks-BPjrSlDf.js";import{M as ne,t as c}from"./src-BubuPiv_.js";import{W as re,t as l}from"./src-C787LlA0.js";import{qt as u,t as d,ut as f,vn as p}from"./src-CJaWYg77.js";import{K as m,q as h}from"./report-metric-BqjsaAo0.js";import{t as g}from"./widget-state-BK1sWm_H.js";import{r as _,t as v}from"./subscriber-list-skeleton-BmAsbPpP.js";import{C as y,D as b,E as x,S,T as C,b as w,t as T,w as ie,x as E}from"./src-D4NxAger.js";var D,O,ae=e((()=>{D=`_root_6wdsv_2`,O={root:D}}));function oe(){let{reportParams:e}=te(),n=p(e.post_id),{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=f({postId:n,number:j}),c=(0,ee.useMemo)(()=>(r?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:re(e.date)})),[r]),l=r?.found??0,u=n<=0||!!r&&c.length===0;return(0,A.jsx)(`div`,{className:O.root,children:(0,A.jsx)(g,{isLoading:i,isFetching:a,isError:!r&&o,isEmpty:u,renderLoading:(0,A.jsx)(v,{rows:j}),error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ne,description:t(n<=0?`Open a post or page report to see its comments here.`:`There are no comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(_,{items:c,moreCount:Math.max(0,l-c.length)})})})}function k({attributes:e={}}){return(0,A.jsx)(s,{attributes:e,children:(0,A.jsx)(oe,{})})}var A,j,M=e((()=>{d(),l(),c(),T(),i(),n(),ae(),A=r(),j=10})),N,P=e((()=>{o(),N={icon:a,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/post-comments`,I=`Latest comments`,L=`The latest comments on the post or page being viewed.`,R={content:`The latest comments on the post or page being viewed.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({hasPostScope:e}){return{reportParams:{...u(!1),...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(k,{attributes:U(e)})}function G({hasPostScope:e,...t}){return(0,K.jsx)(C,{...t,widgetType:S(V,N),renderModule:J,renderComponent:k,attributes:U({hasPostScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{d(),m(),x(),y(),w(),M(),P(),H(),K=r(),h(),q=779,J=`storybook/post-comments`,Y={title:`Packages/Premium Analytics/Widgets/PostComments`,component:k,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},X={render:W,args:{hasPostScope:!0},decorators:[E]},Z={render:W,args:{hasPostScope:!1},decorators:[E]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...ie,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...b,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PostCommentsDashboardStory {...args} />,
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
      description: "Include the post detail page's \`post_id\` report parameter."
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{X as Default,Z as NoPostScope,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Y as default};