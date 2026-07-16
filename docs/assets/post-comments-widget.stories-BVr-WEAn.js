import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{an as o,n as s}from"./build-module-DmVuor49.js";import{A as c,t as l}from"./src-B3le4dug.js";import{g as u,t as d}from"./src-DN9VFS2M.js";import{Yn as f,pn as p,ut as m}from"./chart-tooltip-D391HsEs.js";import{C as h,N as g,S as _,k as v,o as y}from"./report-metric-rOGqqN_8.js";import{t as b}from"./widget-state-CzHLjliM.js";import{S as x,b as S,t as C,x as w,y as T}from"./src-Cv7mlpCY.js";var E,D,O=e((()=>{E=`_root_c0d23_3`,D={root:E}}));function k(){let{reportParams:e}=g(),n=Number(e.post_id),r=Number.isInteger(n)&&n>0?n:0,{data:a,isLoading:o,isFetching:s,isError:l,refetch:d}=p({postId:r,number:M}),f=(0,i.useMemo)(()=>(a?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:u(e.date)})),[a]),m=a?.found??0,h=r<=0||!!a&&f.length===0;return(0,j.jsx)(`div`,{className:D.root,children:(0,j.jsx)(b,{isLoading:o&&!a,isFetching:s,isError:!a&&l,isEmpty:h,error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:c,description:t(r<=0?`Open a post or page report to see its comments here.`:`There are no comments yet.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(y,{items:f,moreCount:Math.max(0,m-f.length)})})})}function A({attributes:e={}}){return(0,j.jsx)(v,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{m(),d(),l(),C(),a(),n(),O(),j=r(),M=10})),P,F=e((()=>{n(),s(),P={name:`jpa/post-comments`,title:t(`Latest comments`,`jetpack-premium-analytics`),help:{content:t(`The latest comments on the post or page being viewed.`,`jetpack-premium-analytics`)},icon:o,attributes:[],example:{attributes:{}}}}));function I({hasPostScope:e}){return{reportParams:{...f(!1),...e?{post_id:B}:{}}}}function L(e){return(0,z.jsx)(A,{attributes:I(e)})}function R({hasPostScope:e,...t}){return(0,z.jsx)(S,{...t,widgetType:{...P,presentation:`framed`},renderModule:V,renderComponent:A,attributes:I({hasPostScope:e})})}var z,B,V,H,U,W,G,K,q;e((()=>{m(),_(),w(),N(),F(),z=r(),h(),B=779,V=`storybook/post-comments`,H=e=>(0,z.jsx)(`div`,{style:{width:`360px`,height:`480px`},children:(0,z.jsx)(e,{})}),U={title:`Packages/Premium Analytics/Widgets/PostComments`,component:A,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},W={render:L,args:{hasPostScope:!0},decorators:[H]},G={render:L,args:{hasPostScope:!1},decorators:[H]},K={render:e=>(0,z.jsx)(R,{...e}),args:{...T,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...x,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{W as Default,G as NoPostScope,K as WidgetDashboardWithWidget,q as __namedExportsOrder,U as default};