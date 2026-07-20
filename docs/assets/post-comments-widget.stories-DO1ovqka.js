import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{an as o,n as s}from"./build-module-DmVuor49.js";import{A as c,t as l}from"./src-B3le4dug.js";import{g as u,t as d}from"./src-DN9VFS2M.js";import{_n as f,dt as p,er as m,yr as h}from"./chart-tooltip-BIxX_c4Z.js";import{H as g,M as _,R as v,j as y,m as b}from"./report-metric-UkRuSErp.js";import{t as x}from"./widget-state-BobjQcpY.js";import{C as S,S as C,T as w,b as T,t as E,w as D,x as O}from"./src-vImT1NbK.js";var k,A,j=e((()=>{k=`_root_c0d23_3`,A={root:k}}));function M(){let{reportParams:e}=g(),n=h(e.post_id),{data:r,isLoading:a,isFetching:o,isError:s,refetch:l}=f({postId:n,number:F}),d=(0,i.useMemo)(()=>(r?.comments??[]).map(e=>({id:e.ID,name:e.name,avatarUrl:e.avatar_URL,href:e.URL,secondaryText:u(e.date)})),[r]),p=r?.found??0,m=n<=0||!!r&&d.length===0;return(0,P.jsx)(`div`,{className:A.root,children:(0,P.jsx)(x,{isLoading:a&&!r,isFetching:o,isError:!r&&s,isEmpty:m,error:{description:t(`We couldn't load these comments. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:c,description:t(n<=0?`Open a post or page report to see its comments here.`:`There are no comments yet.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(b,{items:d,moreCount:Math.max(0,p-d.length)})})})}function N({attributes:e={}}){return(0,P.jsx)(v,{attributes:e,children:(0,P.jsx)(M,{})})}var P,F,I=e((()=>{p(),d(),l(),E(),a(),n(),j(),P=r(),F=10})),L,R=e((()=>{n(),s(),L={name:`jpa/post-comments`,title:t(`Latest comments`,`jetpack-premium-analytics`),help:{content:t(`The latest comments on the post or page being viewed.`,`jetpack-premium-analytics`)},icon:o,attributes:[],example:{attributes:{}}}}));function z({hasPostScope:e}){return{reportParams:{...m(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(N,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(S,{...t,widgetType:{...L,presentation:`framed`},renderModule:W,renderComponent:N,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y;e((()=>{p(),y(),D(),T(),I(),R(),H=r(),_(),U=779,W=`storybook/post-comments`,G={title:`Packages/Premium Analytics/Widgets/PostComments`,component:N,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}},parameters:{docs:{description:{component:`The "Latest comments" widget: recent commenters on the scoped post, with an avatar, relative time, comment link, and "N more" footer.`}}}},K={render:B,args:{hasPostScope:!0},decorators:[O]},q={render:B,args:{hasPostScope:!1},decorators:[O]},J={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...w,hasPostScope:{control:`boolean`,description:"Include the post detail page's `post_id` report parameter."}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostComments,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{K as Default,q as NoPostScope,J as WidgetDashboardWithWidget,Y as __namedExportsOrder,G as default};