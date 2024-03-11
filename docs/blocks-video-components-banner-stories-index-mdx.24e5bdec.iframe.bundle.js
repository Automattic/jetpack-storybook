(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5568,5853],{"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx":(_,s,o)=>{var h,x,y;"use strict";o.r(s),o.d(s,{__namedExportsOrder:()=>j,_default:()=>e,default:()=>c});var r=o("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),n=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/index.js"),a=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=o("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`import { Button } from '@wordpress/components';
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
`,m={_default:{startLoc:{col:24,line:32},endLoc:{col:1,line:45},startBody:{col:24,line:32},endBody:{col:1,line:45}}};const{Icon:b,...u}=n,c={parameters:{storySource:{source:`import { Button } from '@wordpress/components';
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
`,locationsMap:{default:{startLoc:{col:24,line:32},endLoc:{col:1,line:45},startBody:{col:24,line:32},endBody:{col:1,line:45}}}}},title:"Packages/VideoPress/Block Editor/Banner",component:l.Z,argTypes:{icon:{control:{type:"select"},options:["none",...Object.keys(u)]},action:{table:{disable:!0}}}},t=i=>{const g={children:i.children,isLoading:i.isLoading,action:i.action},k=i!=null&&i.icon&&i.icon!=="none"?u[i.icon]:null;return k&&(g.icon=k),(0,d.jsx)(l.Z,{...g})};t.displayName="DefaultTemplate";const e=t.bind({});e.args={children:"Connect your site to WordPress.com to upload videos.",action:(0,d.jsx)(r.ZP,{variant:"primary",children:"Connect"}),isLoading:!1},e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,...(y=(x=e.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const j=["_default"]},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.mdx":(_,s,o)=>{"use strict";o.r(s),o.d(s,{default:()=>c});var r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=o("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.17_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),l=o.n(a),d=o("../../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.2.19_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),p=o("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),m=o("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx");function b(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,a.useMDXComponents)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h_,{of:m}),`
`,(0,n.jsx)(e.h1,{id:"banner",children:"Banner"}),`
`,(0,n.jsx)(e.p,{children:"A banner to show a message, with loading state control and customizable icon and call-to-action."}),`
`,(0,n.jsx)(d.Xz,{withSource:"open",children:(0,n.jsx)(d.oG,{id:"packages-videopress-block-editor-banner--default"})}),`
`,(0,n.jsx)(e.h2,{id:"api",children:"API"}),`
`,(0,n.jsx)(e.h3,{id:"children",children:"children"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsxs)(e.li,{children:["type: ",(0,n.jsx)(e.code,{children:"ReactNode"}),";"]}),`
`]}),`
`,(0,n.jsx)(e.p,{children:"Component to render into the banner."}),`
`,(0,n.jsx)(e.h3,{id:"isloading",children:"isLoading"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsxs)(e.li,{children:["type: ",(0,n.jsx)(e.code,{children:"boolean"})]}),`
`]}),`
`,(0,n.jsx)(e.p,{children:"It shows a spinner icon when true."}),`
`,(0,n.jsx)(e.h3,{id:"icon",children:"icon"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsxs)(e.li,{children:["type: ",(0,n.jsx)(e.code,{children:"ReactNode"})]}),`
`,(0,n.jsxs)(e.li,{children:["default: ",(0,n.jsx)(e.code,{children:"warning"})," core icon"]}),`
`]}),`
`,(0,n.jsx)(e.p,{children:"An optional icon."}),`
`,(0,n.jsx)(e.h3,{id:"action",children:"action"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsxs)(e.li,{children:["type: ",(0,n.jsx)(e.code,{children:"ReactNode"}),";"]}),`
`]}),`
`,(0,n.jsx)(e.p,{children:"Action component to render at the right of the banner. Usually, it's a button."})]})}function u(t={}){const{wrapper:e}=Object.assign({},(0,a.useMDXComponents)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(b,t)})):b(t)}const c=u},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx":(_,s,o)=>{"use strict";o.d(s,{Z:()=>t});var r=o("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),n=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),a=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=o.n(l),p=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss"),m={};m.insert="head",m.singleton=!1;var b=d()(p.Z,m);const u=p.Z.locals||{};var c=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function t({icon:e=n.Z,action:j,children:h,isLoading:x}){return(0,c.jsxs)("div",{className:"block-banner",children:[(0,c.jsx)(a.Z,{icon:e}),(0,c.jsx)("div",{className:"block-banner__content",children:h}),x&&(0,c.jsx)(r.ZP,{}),j&&(0,c.jsx)("div",{className:"block-banner__action",children:j})]})}t.displayName="BlockBanner";try{banner.displayName="banner",banner.__docgenInfo={description:"React component to render a banner above a block.",displayName:"banner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"})}catch(e){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss":(_,s,o)=>{"use strict";o.d(s,{Z:()=>p});var r=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(r),a=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=o.n(a),d=l()(n());d.push([_.id,".block-banner{display:flex;height:48px;font-size:14px;align-self:center;align-items:center;background:#f6f7f7;padding:0 16px}.block-banner .block-banner__content{color:#01283d;flex-grow:2;margin:0 8px}",""]);const p=d},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":_=>{function s(o){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",_.exports=s}}]);})();
