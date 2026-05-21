import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{Wc as n,Wo as r,cv as i,di as a,lr as o,ua as s,ur as c,yi as l}from"./iframe-CfD212hM.js";var u=e((()=>{}));function d({icon:e=a,action:t,children:n,isLoading:i}){return(0,f.jsxs)(`div`,{className:`block-banner`,children:[e&&(0,f.jsx)(l,{icon:e}),(0,f.jsx)(`div`,{className:`block-banner__content`,children:n}),i&&(0,f.jsx)(r,{}),t&&(0,f.jsx)(`div`,{className:`block-banner__action`,children:t})]})}var f,p=e((()=>{s(),c(),u(),f=i()})),m=t({__namedExportsOrder:()=>x,_default:()=>b,default:()=>v}),h,g,_,v,y,b,x,S=e((()=>{s(),c(),p(),h=i(),{Icon:g,..._}=o,v={title:`Packages/VideoPress/Block Editor/Banner`,component:d,argTypes:{icon:{control:{type:`select`},options:[`none`,...Object.keys(_)]},action:{table:{disable:!0}}}},y=e=>{let t={children:e.children,isLoading:e.isLoading,action:e.action},n=e?.icon&&e.icon!==`none`?_[e.icon]:null;return n&&(t.icon=n),(0,h.jsx)(d,{...t})},b=y.bind({}),b.args={children:`Connect your site to WordPress.com to upload videos.`,action:(0,h.jsx)(n,{variant:`primary`,children:`Connect`}),isLoading:!1},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: BannerStoryProps) => {
  const props: BlockBannerProps = {
    children: args.children,
    isLoading: args.isLoading,
    action: args.action
  };
  const icon = args?.icon && args.icon !== 'none' ? icons[args.icon] : null;
  if (icon) {
    props.icon = icon;
  }
  return <Banner {...props} />;
}`,...b.parameters?.docs?.source}}},x=[`_default`]}));S();export{x as __namedExportsOrder,b as _default,v as default,S as n,p as r,m as t};