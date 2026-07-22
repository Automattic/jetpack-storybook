import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{O as o,n as s}from"./build-module-DmVuor49.js";import{A as c,t as l}from"./src-B3le4dug.js";import{g as u,t as d}from"./src-DN9VFS2M.js";import{dt as f,er as p,hn as m,yr as h}from"./chart-tooltip-Dp0VEc09.js";import{M as g,N as _,U as v,m as y,z as b}from"./report-metric-4C1kNKUT.js";import{t as x}from"./widget-state-CGtL2PSn.js";import{C as S,S as C,T as w,b as T,t as E,w as D,x as O}from"./src-B0pFHV8V.js";var k,A,j=e((()=>{k=`_root_c0d23_3`,A={root:k}}));function M(){let{reportParams:e}=v(),n=h(e.post_id),{data:r,isLoading:a,isFetching:o,isError:s,refetch:l}=m({postId:n,number:F}),d=(0,i.useMemo)(()=>(r?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:u(e.date_liked)})),[r]),f=r?.found??0,p=n<=0||!!r&&d.length===0;return(0,P.jsx)(`div`,{className:A.root,children:(0,P.jsx)(x,{isLoading:a&&!r,isFetching:o,isError:!r&&s,isEmpty:p,error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:c,description:t(n<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(y,{items:d,moreCount:Math.max(0,f-d.length)})})})}function N({attributes:e={}}){return(0,P.jsx)(b,{attributes:e,children:(0,P.jsx)(M,{})})}var P,F,I=e((()=>{f(),d(),l(),E(),a(),n(),j(),P=r(),F=10})),L,R=e((()=>{n(),s(),L={name:`jpa/post-likes`,title:t(`Latest likes`,`jetpack-premium-analytics`),help:{content:t(`The people who liked the post or page being viewed.`,`jetpack-premium-analytics`)},icon:o,attributes:[],example:{attributes:{}}}}));function z({hasPostScope:e}){return{reportParams:{...p(!1),...e?{post_id:U}:{}}}}function B(e){return(0,H.jsx)(N,{attributes:z(e)})}function V({hasPostScope:e,...t}){return(0,H.jsx)(S,{...t,widgetType:{...L,presentation:`framed`},renderModule:W,renderComponent:N,attributes:z({hasPostScope:e})})}var H,U,W,G,K,q,J,Y;e((()=>{f(),g(),D(),T(),I(),R(),H=r(),_(),U=779,W=`storybook/post-likes`,G={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:N,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},K={render:B,args:{hasPostScope:!0},decorators:[O]},q={render:B,args:{hasPostScope:!1},decorators:[O]},J={render:e=>(0,H.jsx)(V,{...e}),args:{...C,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...w,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Default — the scoped post's likers with the "N more" footer.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a request.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Mirrors the production placement (1 column × 2 rows). The fixture's ten
rows exceed that tile height, so this story also demonstrates the roster
scrolling inside the widget frame's content viewport.`,...J.parameters?.docs?.description}}},Y=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{K as Default,q as NoPostScope,J as WidgetDashboardWithWidget,Y as __namedExportsOrder,G as default};