"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4228],{"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx":(u,a,n)=>{n.r(a),n.d(a,{__namedExportsOrder:()=>_,_default:()=>o,default:()=>t});var c=n("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=n("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),s=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),i=`import { Button } from '@wordpress/components';
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
`,p={_default:{startLoc:{col:24,line:29},endLoc:{col:1,line:42},startBody:{col:24,line:29},endBody:{col:1,line:42}}};const{Icon:k,...b}=d,t={parameters:{storySource:{source:`import { Button } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:24,line:29},endLoc:{col:1,line:42},startBody:{col:24,line:29},endBody:{col:1,line:42}}}}},title:"Packages/VideoPress/Block Editor/Banner",component:r.A,argTypes:{icon:{control:{type:"select"},options:["none",...Object.keys(b)]},action:{table:{disable:!0}}}},o=(e=>{const m={children:e.children,isLoading:e.isLoading,action:e.action},g=e?.icon&&e.icon!=="none"?b[e.icon]:null;return g&&(m.icon=g),(0,s.jsx)(r.A,{...m})}).bind({});o.args={children:"Connect your site to WordPress.com to upload videos.",action:(0,s.jsx)(c.Ay,{variant:"primary",children:"Connect"}),isLoading:!1};const _=["_default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,...o.parameters?.docs?.source}}}},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx":(u,a,n)=>{n.d(a,{A:()=>f});var c=n("../../../node_modules/.pnpm/@wordpress+components@29.8.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/caution-filled.js"),l=n("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),r=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(r),i=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss"),p={};p.insert="head",p.singleton=!1;var k=s()(i.A,p);const b=i.A.locals||{};var t=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function f({icon:o=d.A,action:_,children:e,isLoading:m}){return(0,t.jsxs)("div",{className:"block-banner",children:[o&&(0,t.jsx)(l.A,{icon:o}),(0,t.jsx)("div",{className:"block-banner__content",children:e}),m&&(0,t.jsx)(c.Ay,{}),_&&(0,t.jsx)("div",{className:"block-banner__action",children:_})]})}try{banner.displayName="banner",banner.__docgenInfo={description:"React component to render a banner above a block.",displayName:"banner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss":(u,a,n)=>{n.d(a,{A:()=>i});var c=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=n.n(c),l=n("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=n.n(l),s=r()(d());s.push([u.id,".block-banner{display:flex;justify-content:space-between;font-size:14px;align-self:center;align-items:center;background:#000;border-radius:2px;padding:0 20px;box-shadow:0 0 1px inset #fff}.block-banner .block-banner__content{color:#fff;margin:10px 10px 10px 0}.block-banner .block-banner__action{padding:0}.block-banner .block-banner__action .components-button.is-primary{background:#fff;color:#000;font-weight:600;font-size:14px;padding:4px 8px;height:28px;margin:8px 0 8px auto}.block-banner .block-banner__action .components-button.is-primary:hover:not(:disabled){background:#f6f7f7}.block-banner .block-banner__action .components-button.is-primary.is-busy{background-size:100px 100%;background-image:linear-gradient(-45deg, #e34c84 28%, #ab235a 28%, #ab235a 72%, #e34c84 72%)}",""]);const i=s}}]);
