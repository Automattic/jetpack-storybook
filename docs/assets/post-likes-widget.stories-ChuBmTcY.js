import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{Ht as o,n as s}from"./build-module-C6Ow06jV.js";import{A as c,t as l}from"./src-Bf8IXmOS.js";import{g as u,t as d}from"./src-AIpdnvxP.js";import{Yn as f,dn as p,ut as m}from"./chart-tooltip-BvA5_2yM.js";import{C as h,N as g,S as _,k as v,o as y}from"./report-metric-DCN8A8Hp.js";import{t as b}from"./widget-state-DxFYrYCq.js";import{S as x,b as S,t as C,x as w,y as T}from"./src-Bepsc1lm.js";var E,D,O=e((()=>{E=`_root_c0d23_3`,D={root:E}}));function k(){let{reportParams:e}=g(),n=Number(e.post_id),r=Number.isInteger(n)&&n>0?n:0,{data:a,isLoading:o,isFetching:s,isError:l,refetch:d}=p({postId:r,number:M}),f=(0,i.useMemo)(()=>(a?.likes??[]).map(e=>({id:e.ID,name:e.name||e.login,avatarUrl:e.avatar_URL,href:e.login?`https://wordpress.com/reader/users/${e.login}`:void 0,secondaryText:u(e.date_liked)})),[a]),m=a?.found??0,h=r<=0||!!a&&f.length===0;return(0,j.jsx)(`div`,{className:D.root,children:(0,j.jsx)(b,{isLoading:o&&!a,isFetching:s,isError:!a&&l,isEmpty:h,error:{description:t(`We couldn't load these likes. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:d}]},empty:{icon:c,description:t(r<=0?`Open a post or page report to see its likes here.`:`There are no likes yet.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(y,{items:f,moreCount:Math.max(0,m-f.length)})})})}function A({attributes:e={}}){return(0,j.jsx)(v,{attributes:e,children:(0,j.jsx)(k,{})})}var j,M,N=e((()=>{m(),d(),l(),C(),a(),n(),O(),j=r(),M=10})),P,F=e((()=>{n(),s(),P={name:`jpa/post-likes`,title:t(`Latest likes`,`jetpack-premium-analytics`),help:{content:t(`The people who liked the post or page being viewed.`,`jetpack-premium-analytics`)},icon:o,attributes:[],example:{attributes:{}}}}));function I({hasPostScope:e}){return{reportParams:{...f(!1),...e?{post_id:B}:{}}}}function L(e){return(0,z.jsx)(A,{attributes:I(e)})}function R({hasPostScope:e,...t}){return(0,z.jsx)(S,{...t,widgetType:{...P,presentation:`framed`},renderModule:V,renderComponent:A,attributes:I({hasPostScope:e})})}var z,B,V,H,U,W,G,K,q;e((()=>{m(),_(),w(),N(),F(),z=r(),h(),B=779,V=`storybook/post-likes`,H=e=>(0,z.jsx)(`div`,{style:{width:`360px`,height:`480px`},children:(0,z.jsx)(e,{})}),U={title:`Packages/Premium Analytics/Widgets/PostLikes`,component:A,tags:[`autodocs`],argTypes:{hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}},parameters:{docs:{description:{component:`The "Latest likes" widget: the scoped post's likers as an avatar roster with an "N more" footer — the post detail Traffic view's likes card. Each row carries the like's relative time. Without a post scope the widget renders a scopeless empty state.`}}}},W={render:L,args:{hasPostScope:!0},decorators:[H]},G={render:L,args:{hasPostScope:!1},decorators:[H]},K={render:e=>(0,z.jsx)(R,{...e}),args:{...T,widgetWidth:1,widgetHeight:2,hasPostScope:!0},argTypes:{...x,hasPostScope:{control:`boolean`,description:"Include the `post_id` report param the post detail page seeds from its URL."}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: true
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`Default — the scoped post's likers with the "N more" footer.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderPostLikes,
  args: {
    hasPostScope: false
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`NoPostScope — the widget without a \`post_id\` report param, as when added
outside a post detail page. Renders the scopeless empty state without
firing a request.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Mirrors the production placement (1 column × 2 rows). The fixture's ten
rows exceed that tile height, so this story also demonstrates the roster
scrolling inside the widget frame's content viewport.`,...K.parameters?.docs?.description}}},q=[`Default`,`NoPostScope`,`WidgetDashboardWithWidget`]}))();export{W as Default,G as NoPostScope,K as WidgetDashboardWithWidget,q as __namedExportsOrder,U as default};