"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4228],{"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx":(b,d,e)=>{e.r(d),e.d(d,{__namedExportsOrder:()=>f,_default:()=>c,default:()=>r});var p=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),s=`import { Button } from '@wordpress/components';
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
`,m={_default:{startLoc:{col:24,line:29},endLoc:{col:1,line:42},startBody:{col:24,line:29},endBody:{col:1,line:42}}};const{Icon:n,...u}=_,r={parameters:{storySource:{source:`import { Button } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:24,line:29},endLoc:{col:1,line:42},startBody:{col:24,line:29},endBody:{col:1,line:42}}}}},title:"Packages/VideoPress/Block Editor/Banner",component:a.A,argTypes:{icon:{control:{type:"select"},options:["none",...Object.keys(u)]},action:{table:{disable:!0}}}},c=(l=>{const g={children:l.children,isLoading:l.isLoading,action:l.action},x=l?.icon&&l.icon!=="none"?u[l.icon]:null;return x&&(g.icon=x),(0,o.jsx)(a.A,{...g})}).bind({});c.args={children:"Connect your site to WordPress.com to upload videos.",action:(0,o.jsx)(p.Ay,{variant:"primary",children:"Connect"}),isLoading:!1};const f=["_default"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,...c.parameters?.docs?.source}}}},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx":(b,d,e)=>{e.d(d,{A:()=>t});var p=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/caution-filled.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(a),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss"),m={};m.insert="head",m.singleton=!1;var n=o()(s.A,m);const u=s.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t({icon:c=_.A,action:f,children:l,isLoading:g}){return(0,r.jsxs)("div",{className:"block-banner",children:[c&&(0,r.jsx)(i.A,{icon:c}),(0,r.jsx)("div",{className:"block-banner__content",children:l}),g&&(0,r.jsx)(p.Ay,{}),f&&(0,r.jsx)("div",{className:"block-banner__action",children:f})]})}try{banner.displayName="banner",banner.__docgenInfo={description:"React component to render a banner above a block.",displayName:"banner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss":(b,d,e)=>{e.d(d,{A:()=>s});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(p),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(i),o=a()(_());o.push([b.id,".block-banner{display:flex;justify-content:space-between;font-size:14px;align-self:center;align-items:center;background:#000;border-radius:2px;padding:0 20px;box-shadow:0 0 1px inset #fff}.block-banner .block-banner__content{color:#fff;margin:10px 10px 10px 0}.block-banner .block-banner__action{padding:0}.block-banner .block-banner__action .components-button.is-primary{background:#fff;color:#000;font-weight:600;font-size:14px;padding:4px 8px;height:28px;margin:8px 0 8px auto}.block-banner .block-banner__action .components-button.is-primary:hover:not(:disabled){background:#f6f7f7}.block-banner .block-banner__action .components-button.is-primary.is-busy{background-size:100px 100%;background-image:linear-gradient(-45deg, #e34c84 28%, #ab235a 28%, #ab235a 72%, #e34c84 72%)}",""]);const s=o},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(b,d,e)=>{e.d(d,{A:()=>p});function p(_,i){var a=0,o,s;i=i||{};function m(){var n=o,u=arguments.length,r,t;n:for(;n;){if(n.args.length!==arguments.length){n=n.next;continue}for(t=0;t<u;t++)if(n.args[t]!==arguments[t]){n=n.next;continue n}return n!==o&&(n===s&&(s=n.prev),n.prev.next=n.next,n.next&&(n.next.prev=n.prev),n.next=o,n.prev=null,o.prev=n,o=n),n.val}for(r=new Array(u),t=0;t<u;t++)r[t]=arguments[t];return n={args:r,val:_.apply(null,r)},o?(o.prev=n,n.next=o):s=n,a===i.maxSize?(s=s.prev,s.next=null):a++,o=n,n.val}return m.clear=function(){o=null,s=null,a=0},m}}}]);
