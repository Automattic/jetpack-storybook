import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{an as o,n as s}from"./build-module-DmVuor49.js";import{A as c,t as l}from"./src-B3le4dug.js";import{g as u,t as d}from"./src-DN9VFS2M.js";import{_n as f,dt as p,er as m}from"./chart-tooltip-CtUAWvWt.js";import{H as h,M as g,R as _,j as v,m as y}from"./report-metric-DhmpTkeW.js";import{t as b}from"./widget-state-6DU05QGT.js";import{C as x,S,T as C,b as w,t as T,w as E,x as D}from"./src-W4cZO2BJ.js";var O,k,A=e((()=>{O=`_root_c0d23_3`,k={root:O}}));function j(){let{reportParams:e}=h(),n=Number(e.post_id),r=Number.isInteger(n)&&n>0?n:0,{data:a,isLoading:o,isFetching:s,isError:l,refetch:d}=f({postId:r,number:P}),p=(0,i.useMemo)(()=>(a?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:u(e.date)})),[a]),m=a?.found??0,g=r<=0||!!a&&p.length===0;return(0,N.jsx)(`div`,{className:k.root,children:(0,N.jsx)(b,{isLoading:o&&!a,isFetching:s,isError:!a&&l,isEmpty:g,error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:c,description:t(r<=0?`Open a post or page report to see its comments here.`:`There are no comments yet.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(y,{items:p,moreCount:Math.max(0,m-p.length)})})})}function M({attributes:e={}}){return(0,N.jsx)(_,{attributes:e,children:(0,N.jsx)(j,{})})}var N,P,F=e((()=>{p(),d(),l(),T(),a(),n(),A(),N=r(),P=10})),I,L=e((()=>{n(),s(),I={name:`jpa/post-comments`,title:t(`Latest comments`,`jetpack-premium-analytics`),help:{content:t(`The latest comments on the post or page being viewed.`,`jetpack-premium-analytics`)},icon:o,attributes:[],example:{attributes:{}}}}));function R({hasPostScope:e}){return{reportParams:{...m(!1),...e?{post_id:H}:{}}}}function z(e){return(0,V.jsx)(M,{attributes:R(e)})}function B({hasPostScope:e,...t}){return(0,V.jsx)(x,{...t,widgetType:{...I,presentation:`framed`},renderModule:U,renderComponent:M,attributes:R({hasPostScope:e})})}var V,H,U,W,G,K,q,J;e((()=>{p(),v(),E(),w(),F(),L(),V=r(),g(),H=779,U=`storybook/post-comments`,W={title:`Packages/Premium Analytics/Widgets/PostComments`,component:M,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},G={render:z,args:{hasPostScope:!0},decorators:[D]},K={render:z,args:{hasPostScope:!1},decorators:[D]},q={render:e=>(0,V.jsx)(B,{...e}),args:{...S,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...C,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{G as Default,K as NoPostScope,q as WidgetDashboardWithWidget,J as __namedExportsOrder,W as default};