"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5853],{"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx":(u,d,e)=>{var _,i,m;e.r(d),e.d(d,{__namedExportsOrder:()=>b,_default:()=>s,default:()=>j});var t=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/index.js"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const{Icon:l,...c}=r,j={title:"Packages/VideoPress/Block Editor/Banner",component:a.Z,argTypes:{icon:{control:{type:"select"},options:["none",...Object.keys(c)]},action:{table:{disable:!0}}}},s=(o=>{const E={children:o.children,isLoading:o.isLoading,action:o.action},k=o!=null&&o.icon&&o.icon!=="none"?c[o.icon]:null;return k&&(E.icon=k),(0,n.jsx)(a.Z,{...E})}).bind({});s.args={children:"Connect your site to WordPress.com to upload videos.",action:(0,n.jsx)(t.ZP,{variant:"primary",children:"Connect"}),isLoading:!1},s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const b=["_default"]},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx":(u,d,e)=>{e.d(d,{Z:()=>b});var t=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(a),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss"),c={};c.insert="head",c.singleton=!1;var j=n()(l.Z,c);const v=l.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function b({icon:_=r.Z,action:i,children:m,isLoading:o}){return(0,s.jsxs)("div",{className:"block-banner",children:[(0,s.jsx)(p.Z,{icon:_}),(0,s.jsx)("div",{className:"block-banner__content",children:m}),o&&(0,s.jsx)(t.ZP,{}),i&&(0,s.jsx)("div",{className:"block-banner__action",children:i})]})}try{banner.displayName="banner",banner.__docgenInfo={description:"React component to render a banner above a block.",displayName:"banner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"})}catch(_){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss":(u,d,e)=>{e.d(d,{Z:()=>l});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(t),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),n=a()(r());n.push([u.id,".block-banner{display:flex;height:48px;font-size:14px;align-self:center;align-items:center;background:#f6f7f7;padding:0 16px}.block-banner .block-banner__content{color:#01283d;flex-grow:2;margin:0 8px}",""]);const l=n}}]);})();
