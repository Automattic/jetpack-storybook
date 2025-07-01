"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4228],{"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx":(c,s,n)=>{n.r(s),n.d(s,{__namedExportsOrder:()=>p,_default:()=>a,default:()=>x});var e=n("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),o=n("../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),r=n("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=`import { Button } from '@wordpress/components';
import * as allIcons from '@wordpress/icons';
import Banner, { BlockBannerProps } from '..';
import type { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Icon, ...icons } = allIcons;

type BannerStoryProps = BlockBannerProps & {
	icon: string;
	children?: ReactNode;
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
`,_={_default:{startLoc:{col:24,line:27},endLoc:{col:1,line:40},startBody:{col:24,line:27},endBody:{col:1,line:40}}};const{Icon:m,...g}=o,x={parameters:{storySource:{source:`import { Button } from '@wordpress/components';
import * as allIcons from '@wordpress/icons';
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
};`,locationsMap:{default:{startLoc:{col:24,line:27},endLoc:{col:1,line:40},startBody:{col:24,line:27},endBody:{col:1,line:40}}}}},title:"Packages/VideoPress/Block Editor/Banner",component:r.A,argTypes:{icon:{control:{type:"select"},options:["none",...Object.keys(g)]},action:{table:{disable:!0}}}},a=(d=>{const u={children:d.children,isLoading:d.isLoading,action:d.action},b=d?.icon&&d.icon!=="none"?g[d.icon]:null;return b&&(u.icon=b),(0,t.jsx)(r.A,{...u})}).bind({});a.args={children:"Connect your site to WordPress.com to upload videos.",action:(0,t.jsx)(e.Ay,{variant:"primary",children:"Connect"}),isLoading:!1};const p=["_default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,...a.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(c,s,n)=>{n.d(s,{A:()=>t});var e=n("../../../node_modules/.pnpm/@wordpress+primitives@4.26.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(e.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js":(c,s,n)=>{n.d(s,{A:()=>t});var e=n("../../../node_modules/.pnpm/@wordpress+primitives@4.26.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(e.wA,{d:"m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plus.js":(c,s,n)=>{n.d(s,{A:()=>t});var e=n("../../../node_modules/.pnpm/@wordpress+primitives@4.26.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(e.wA,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reset.js":(c,s,n)=>{n.d(s,{A:()=>t});var e=n("../../../node_modules/.pnpm/@wordpress+primitives@4.26.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,o.jsx)(e.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(e.wA,{d:"M7 11.5h10V13H7z"})})},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx":(c,s,n)=>{n.d(s,{A:()=>a});var e=n("../../../node_modules/.pnpm/@wordpress+components@29.12.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),o=n("../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/caution-filled.js"),r=n("../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),t=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(t),_=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss"),m={};m.insert="head",m.singleton=!1;var g=l()(_.A,m);const x=_.A.locals||{};var i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a({icon:p=o.A,action:d,children:u,isLoading:b}){return(0,i.jsxs)("div",{className:"block-banner",children:[p&&(0,i.jsx)(r.A,{icon:p}),(0,i.jsx)("div",{className:"block-banner__content",children:u}),b&&(0,i.jsx)(e.Ay,{}),d&&(0,i.jsx)("div",{className:"block-banner__action",children:d})]})}try{banner.displayName="banner",banner.__docgenInfo={description:"React component to render a banner above a block.",displayName:"banner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss":(c,s,n)=>{n.d(s,{A:()=>_});var e=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(e),r=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=n.n(r),l=t()(o());l.push([c.id,".block-banner{display:flex;justify-content:space-between;font-size:14px;align-self:center;align-items:center;background:#000;border-radius:2px;padding:0 20px;box-shadow:0 0 1px inset #fff}.block-banner .block-banner__content{color:#fff;margin:10px 10px 10px 0}.block-banner .block-banner__action{padding:0}.block-banner .block-banner__action .components-button.is-primary{background:#fff;color:#000;font-weight:600;font-size:14px;padding:4px 8px;height:28px;margin:8px 0 8px auto}.block-banner .block-banner__action .components-button.is-primary:hover:not(:disabled){background:#f6f7f7}.block-banner .block-banner__action .components-button.is-primary.is-busy{background-size:100px 100%;background-image:linear-gradient(-45deg, #e34c84 28%, #ab235a 28%, #ab235a 72%, #e34c84 72%)}",""]);const _=l}}]);
