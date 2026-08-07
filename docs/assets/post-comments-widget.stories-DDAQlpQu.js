import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as ee,t as i}from"./build-module-CbwHEf9N.js";import{_c as a,n as o}from"./build-module-CDRs4YxF.js";import{$ as s,K as c,g as te,q as l,rt as ne}from"./report-metric-DiRBnUDU.js";import{A as u,t as d}from"./src-q13B8HIT.js";import{M as f,t as p}from"./src-B-_HxovR.js";import{An as m,Ct as h,jr as re,pr as g}from"./chart-tooltip-BYhveXGm.js";import{C as _,D as v,E as y,S as b,T as x,b as S,t as C,w,x as T}from"./src-BfuDciLI.js";import{t as E}from"./widget-state-DjlnXa-b.js";var D,O,ie=e((()=>{D=`_root_c0d23_3`,O={root:D}}));function ae(){let{reportParams:e}=ne(),n=re(e.post_id),{data:r,isLoading:i,isFetching:a,isError:o,refetch:s}=m({postId:n,number:j}),c=(0,ee.useMemo)(()=>(r?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:f(e.date)})),[r]),l=r?.found??0,d=n<=0||!!r&&c.length===0;return(0,A.jsx)(`div`,{className:O.root,children:(0,A.jsx)(E,{isLoading:i&&!r,isFetching:a,isError:!r&&o,isEmpty:d,error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:u,description:t(n<=0?`Open a post or page report to see its comments here.`:`There are no comments yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(te,{items:c,moreCount:Math.max(0,l-c.length)})})})}function k({attributes:e={}}){return(0,A.jsx)(s,{attributes:e,children:(0,A.jsx)(ae,{})})}var A,j,M=e((()=>{h(),p(),d(),C(),i(),n(),ie(),A=r(),j=10})),N,P=e((()=>{o(),N={icon:a,attributes:[],example:{attributes:{}}}})),F,I,L,R,z,B,V,H=e((()=>{F=`jpa/post-comments`,I=`Latest comments`,L=`The latest comments on the post or page being viewed.`,R={content:`The latest comments on the post or page being viewed.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function U({hasPostScope:e}){return{reportParams:{...g(!1),...e?{post_id:q}:{}}}}function W(e){return(0,K.jsx)(k,{attributes:U(e)})}function G({hasPostScope:e,...t}){return(0,K.jsx)(x,{...t,widgetType:b(V,N),renderModule:J,renderComponent:k,attributes:U({hasPostScope:e})})}var K,q,J,Y,X,Z,Q,$;e((()=>{h(),c(),y(),_(),S(),M(),P(),H(),K=r(),l(),q=779,J=`storybook/post-comments`,Y={title:`Packages/Premium Analytics/Widgets/PostComments`,component:k,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},X={render:W,args:{hasPostScope:!0},decorators:[T]},Z={render:W,args:{hasPostScope:!1},decorators:[T]},Q={render:e=>(0,K.jsx)(G,{...e}),args:{...w,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...v,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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