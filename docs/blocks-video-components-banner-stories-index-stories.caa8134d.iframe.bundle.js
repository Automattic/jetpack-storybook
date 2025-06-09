"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4228],{"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx":(p,d,e)=>{e.r(d),e.d(d,{__namedExportsOrder:()=>g,_default:()=>_,default:()=>l});var o=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),a=`import { Button } from '@wordpress/components';
import * as allIcons from '@wordpress/icons';
import React from 'react';
import Banner, { BlockBannerProps } from '..';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Icon, ...icons } = allIcons;

type BannerStoryProps = BlockBannerProps & {
	icon: string;
	children?: React.ReactNode;
};

export default {
	title: 'Packages/VideoPress/Block Editor/Banner',
	component: Banner,
	argTypes: {
		icon: {
			control: {
				type: 'select',
			},
			options: [ 'none', ...Object.keys( icons ) ],
		},
		action: {
			table: {
				disable: true,
			},
		},
	},
};

const DefaultTemplate = ( args: BannerStoryProps ) => {
	const props: BlockBannerProps = {
		children: args.children,
		isLoading: args.isLoading,
		action: args.action,
	};

	const icon = args?.icon && args.icon !== 'none' ? icons[ args.icon ] : null;
	if ( icon ) {
		props.icon = icon;
	}

	return <Banner { ...props } />;
};

export const _default = DefaultTemplate.bind( {} );
_default.args = {
	children: 'Connect your site to WordPress.com to upload videos.',
	action: <Button variant="primary">Connect</Button>,
	isLoading: false,
};
`,u={_default:{startLoc:{col:24,line:29},endLoc:{col:1,line:42},startBody:{col:24,line:29},endBody:{col:1,line:42}}};const{Icon:n,...b}=s,l={parameters:{storySource:{source:`import { Button } from '@wordpress/components';
import * as allIcons from '@wordpress/icons';
import React from 'react';
import Banner from '..';


import { jsx as _jsx } from "react/jsx-runtime";
const {
  Icon,
  ...icons
} = allIcons;
export default {
  title: 'Packages/VideoPress/Block Editor/Banner',
  component: Banner,
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: ['none', ...Object.keys(icons)]
    },
    action: {
      table: {
        disable: true
      }
    }
  }
};
const DefaultTemplate = args => {
  const props = {
    children: args.children,
    isLoading: args.isLoading,
    action: args.action
  };
  const icon = args?.icon && args.icon !== 'none' ? icons[args.icon] : null;
  if (icon) {
    props.icon = icon;
  }
  return /*#__PURE__*/_jsx(Banner, {
    ...props
  });
};
export const _default = DefaultTemplate.bind({});
_default.args = {
  children: 'Connect your site to WordPress.com to upload videos.',
  action: /*#__PURE__*/_jsx(Button, {
    variant: "primary",
    children: "Connect"
  }),
  isLoading: false
};`,locationsMap:{default:{startLoc:{col:24,line:29},endLoc:{col:1,line:42},startBody:{col:24,line:29},endBody:{col:1,line:42}}}}},title:"Packages/VideoPress/Block Editor/Banner",component:t.A,argTypes:{icon:{control:{type:"select"},options:["none",...Object.keys(b)]},action:{table:{disable:!0}}}},_=(m=>{const v={children:m.children,isLoading:m.isLoading,action:m.action},x=m?.icon&&m.icon!=="none"?b[m.icon]:null;return x&&(v.icon=x),(0,r.jsx)(t.A,{...v})}).bind({});_.args={children:"Connect your site to WordPress.com to upload videos.",action:(0,r.jsx)(o.Ay,{variant:"primary",children:"Connect"}),isLoading:!1};const g=["_default"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,..._.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(p,d,e)=>{e.d(d,{A:()=>t});var o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,s.jsx)(o.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(o.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js":(p,d,e)=>{e.d(d,{A:()=>t});var o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,s.jsx)(o.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(o.wA,{d:"m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plus.js":(p,d,e)=>{e.d(d,{A:()=>t});var o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,s.jsx)(o.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(o.wA,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reset.js":(p,d,e)=>{e.d(d,{A:()=>t});var o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,s.jsx)(o.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(o.wA,{d:"M7 11.5h10V13H7z"})})},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx":(p,d,e)=>{e.d(d,{A:()=>c});var o=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/caution-filled.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(t),a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss"),u={};u.insert="head",u.singleton=!1;var n=r()(a.A,u);const b=a.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function c({icon:_=s.A,action:g,children:m,isLoading:v}){return(0,l.jsxs)("div",{className:"block-banner",children:[_&&(0,l.jsx)(i.A,{icon:_}),(0,l.jsx)("div",{className:"block-banner__content",children:m}),v&&(0,l.jsx)(o.Ay,{}),g&&(0,l.jsx)("div",{className:"block-banner__action",children:g})]})}try{banner.displayName="banner",banner.__docgenInfo={description:"React component to render a banner above a block.",displayName:"banner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss":(p,d,e)=>{e.d(d,{A:()=>a});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(i),r=t()(s());r.push([p.id,".block-banner{display:flex;justify-content:space-between;font-size:14px;align-self:center;align-items:center;background:#000;border-radius:2px;padding:0 20px;box-shadow:0 0 1px inset #fff}.block-banner .block-banner__content{color:#fff;margin:10px 10px 10px 0}.block-banner .block-banner__action{padding:0}.block-banner .block-banner__action .components-button.is-primary{background:#fff;color:#000;font-weight:600;font-size:14px;padding:4px 8px;height:28px;margin:8px 0 8px auto}.block-banner .block-banner__action .components-button.is-primary:hover:not(:disabled){background:#f6f7f7}.block-banner .block-banner__action .components-button.is-primary.is-busy{background-size:100px 100%;background-image:linear-gradient(-45deg, #e34c84 28%, #ab235a 28%, #ab235a 72%, #e34c84 72%)}",""]);const a=r},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(p,d,e)=>{e.d(d,{A:()=>o});function o(s,i){var t=0,r,a;i=i||{};function u(){var n=r,b=arguments.length,l,c;e:for(;n;){if(n.args.length!==arguments.length){n=n.next;continue}for(c=0;c<b;c++)if(n.args[c]!==arguments[c]){n=n.next;continue e}return n!==r&&(n===a&&(a=n.prev),n.prev.next=n.next,n.next&&(n.next.prev=n.prev),n.next=r,n.prev=null,r.prev=n,r=n),n.val}for(l=new Array(b),c=0;c<b;c++)l[c]=arguments[c];return n={args:l,val:s.apply(null,l)},r?(r.prev=n,n.next=r):a=n,t===i.maxSize?(a=a.prev,a.next=null):t++,r=n,n.val}return u.clear=function(){r=null,a=null,t=0},u}}}]);
