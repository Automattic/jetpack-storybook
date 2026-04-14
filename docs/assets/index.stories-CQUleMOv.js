import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{co as n,fr as r,ki as i,oi as a,pi as o,pr as s,rc as c,zh as l}from"./iframe-CCINO4Kw.js";var u=e((()=>{}));function d({icon:e=a,action:t,children:r,isLoading:i}){return(0,f.jsxs)(`div`,{className:`block-banner`,children:[e&&(0,f.jsx)(o,{icon:e}),(0,f.jsx)(`div`,{className:`block-banner__content`,children:r}),i&&(0,f.jsx)(n,{}),t&&(0,f.jsx)(`div`,{className:`block-banner__action`,children:t})]})}var f,p=e((()=>{i(),s(),u(),f=l()})),m=t({__namedExportsOrder:()=>x,_default:()=>b,default:()=>v}),h,g,_,v,y,b,x,S=e((()=>{i(),s(),p(),h=l(),{Icon:g,..._}=r,v={title:`Packages/VideoPress/Block Editor/Banner`,component:d,argTypes:{icon:{control:{type:`select`},options:[`none`,...Object.keys(_)]},action:{table:{disable:!0}}}},y=e=>{let t={children:e.children,isLoading:e.isLoading,action:e.action},n=e?.icon&&e.icon!==`none`?_[e.icon]:null;return n&&(t.icon=n),(0,h.jsx)(d,{...t})},b=y.bind({}),b.args={children:`Connect your site to WordPress.com to upload videos.`,action:(0,h.jsx)(c,{variant:`primary`,children:`Connect`}),isLoading:!1},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: BannerStoryProps) => {
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