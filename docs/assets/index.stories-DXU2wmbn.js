import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-DVCOKQW8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Nr as a,ci as o,n as s,t as c}from"./build-module-BCDGTLIj.js";import{$n as l,Ft as u,t as d}from"./build-module-9XZnWKTV.js";var f=n((()=>{}));function p({icon:e=a,action:t,children:n,isLoading:r}){return(0,h.jsxs)(`div`,{className:`block-banner`,children:[(0,m.isValidElement)(e)&&(0,h.jsx)(o,{icon:e}),(0,h.jsx)(`div`,{className:`block-banner__content`,children:n}),r&&(0,h.jsx)(u,{}),t&&(0,h.jsx)(`div`,{className:`block-banner__action`,children:t})]})}var m,h,g=n((()=>{d(),s(),m=t(r()),f(),h=i()})),_=e({__namedExportsOrder:()=>w,_default:()=>C,default:()=>x}),v,y,b,x,S,C,w,T=n((()=>{d(),s(),g(),v=i(),{Icon:y,...b}=c,x={title:`Packages/VideoPress/Block Editor/Banner`,component:p,argTypes:{icon:{control:{type:`select`},options:[`none`,...Object.keys(b)]},action:{table:{disable:!0}}}},S=e=>{let t={children:e.children,isLoading:e.isLoading,action:e.action},n=e?.icon&&e.icon!==`none`?b[e.icon]:null;return n&&(t.icon=n),(0,v.jsx)(p,{...t})},C=S.bind({}),C.args={children:`Connect your site to WordPress.com to upload videos.`,action:(0,v.jsx)(l,{variant:`primary`,children:`Connect`}),isLoading:!1},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,...C.parameters?.docs?.source}}},w=[`_default`]}));T();export{w as __namedExportsOrder,C as _default,x as default,T as n,g as r,_ as t};