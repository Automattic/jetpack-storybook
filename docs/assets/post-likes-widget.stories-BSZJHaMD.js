import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{O as o,n as s}from"./build-module-DmVuor49.js";import{A as c,t as l}from"./src-B3le4dug.js";import{g as u,t as d}from"./src-DN9VFS2M.js";import{$n as f,mn as p,ut as m}from"./chart-tooltip-C4NUtjXe.js";import{F as h,T as g,c as _,j as v,w as y}from"./report-metric-DerWADBf.js";import{t as b}from"./widget-state-B76seV2w.js";import{C as x,S,T as C,b as w,t as T,w as E,x as D}from"./src-0WK5HJj0.js";var O,k,A=e((()=>{O=`_root_c0d23_3`,k={root:O}}));function j(){let{reportParams:e}=h(),n=Number(e.post_id),r=Number.isInteger(n)&&n>0?n:0,{data:a,isLoading:o,isFetching:s,isError:l,refetch:d}=p({postId:r,number:P}),f=(0,i.useMemo)(()=>(a?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:u(e.date_liked)})),[a]),m=a?.found??0,g=r<=0||!!a&&f.length===0;return(0,N.jsx)(`div`,{className:k.root,children:(0,N.jsx)(b,{isLoading:o&&!a,isFetching:s,isError:!a&&l,isEmpty:g,error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:c,description:t(r<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(_,{items:f,moreCount:Math.max(0,m-f.length)})})})}function M({attributes:e={}}){return(0,N.jsx)(v,{attributes:e,children:(0,N.jsx)(j,{})})}var N,P,F=e((()=>{m(),d(),l(),T(),a(),n(),A(),N=r(),P=10})),I,L=e((()=>{n(),s(),I={name:`jpa/post-likes`,title:t(`Latest likes`,`jetpack-premium-analytics`),help:{content:t(`The people who liked the post or page being viewed.`,`jetpack-premium-analytics`)},icon:o,attributes:[],example:{attributes:{}}}}));function R({hasPostScope:e}){return{reportParams:{...f(!1),...e?{post_id:H}:{}}}}function z(e){return(0,V.jsx)(M,{attributes:R(e)})}function B({hasPostScope:e,...t}){return(0,V.jsx)(x,{...t,widgetType:{...I,presentation:`framed`},renderModule:U,renderComponent:M,attributes:R({hasPostScope:e})})}var V,H,U,W,G,K,q,J;e((()=>{m(),y(),E(),w(),F(),L(),V=r(),g(),H=779,U=`storybook/post-likes`,W={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:M,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},G={render:z,args:{hasPostScope:!0},decorators:[D]},K={render:z,args:{hasPostScope:!1},decorators:[D]},q={render:e=>(0,V.jsx)(B,{...e}),args:{...S,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...C,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default — the scoped post's likers with the "N more" footer.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a request.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Mirrors the production placement (1 column × 2 rows). The fixture's ten
rows exceed that tile height, so this story also demonstrates the roster
scrolling inside the widget frame's content viewport.`,...q.parameters?.docs?.description}}},J=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{G as Default,K as NoPostScope,q as WidgetDashboardWithWidget,J as __namedExportsOrder,W as default};