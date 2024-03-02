"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5853],{"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx":(g,r,n)=>{var u,b,B;n.r(r),n.d(r,{__namedExportsOrder:()=>m,_default:()=>o,default:()=>t});var c=n("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/index.js"),p=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),s=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import { Button } from '@wordpress/components';
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
`,_={_default:{startLoc:{col:24,line:32},endLoc:{col:1,line:45},startBody:{col:24,line:32},endBody:{col:1,line:45}}};const{Icon:P,...f}=d,t={parameters:{storySource:{source:`import { Button } from '@wordpress/components';
import * as allIcons from '@wordpress/icons';
import React from 'react';
import Banner, { BlockBannerProps } from '..';


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
`,locationsMap:{default:{startLoc:{col:24,line:32},endLoc:{col:1,line:45},startBody:{col:24,line:32},endBody:{col:1,line:45}}}}},title:"Packages/VideoPress/Block Editor/Banner",component:a.Z,argTypes:{icon:{control:{type:"select"},options:["none",...Object.keys(f)]},action:{table:{disable:!0}}}},i=e=>{const y={children:e.children,isLoading:e.isLoading,action:e.action},k=e!=null&&e.icon&&e.icon!=="none"?f[e.icon]:null;return k&&(y.icon=k),(0,s.jsx)(a.Z,{...y})};i.displayName="DefaultTemplate";const o=i.bind({});o.args={children:"Connect your site to WordPress.com to upload videos.",action:(0,s.jsx)(c.ZP,{variant:"primary",children:"Connect"}),isLoading:!1},o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const m=["_default"]},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx":(g,r,n)=>{n.d(r,{Z:()=>i});var c=n("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),p=n("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(a),l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss"),_={};_.insert="head",_.singleton=!1;var P=s()(l.Z,_);const f=l.Z.locals||{};var t=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function i({icon:o=d.Z,action:m,children:u,isLoading:b}){return(0,t.jsxs)("div",{className:"block-banner",children:[(0,t.jsx)(p.Z,{icon:o}),(0,t.jsx)("div",{className:"block-banner__content",children:u}),b&&(0,t.jsx)(c.ZP,{}),m&&(0,t.jsx)("div",{className:"block-banner__action",children:m})]})}i.displayName="BlockBanner";try{banner.displayName="banner",banner.__docgenInfo={description:"React component to render a banner above a block.",displayName:"banner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"})}catch(o){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss":(g,r,n)=>{n.d(r,{Z:()=>l});var c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=n.n(c),p=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=n.n(p),s=a()(d());s.push([g.id,".block-banner{display:flex;height:48px;font-size:14px;align-self:center;align-items:center;background:#f6f7f7;padding:0 16px}.block-banner .block-banner__content{color:#01283d;flex-grow:2;margin:0 8px}",""]);const l=s}}]);})();
