"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5568,5853],{"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.mdx":(u,r,e)=>{e.r(r),e.d(r,{default:()=>d});var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),i=e.n(c),t=e("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_=e("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),p=e("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx");function b(s){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,c.useMDXComponents)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h_,{of:p}),`
`,(0,n.jsx)(o.h1,{id:"banner",children:"Banner"}),`
`,(0,n.jsx)(o.p,{children:"A banner to show a message, with loading state control and customizable icon and call-to-action."}),`
`,(0,n.jsx)(t.Xz,{withSource:"open",children:(0,n.jsx)(t.oG,{id:"packages-videopress-block-editor-banner--default"})}),`
`,(0,n.jsx)(o.h2,{id:"api",children:"API"}),`
`,(0,n.jsx)(o.h3,{id:"children",children:"children"}),`
`,(0,n.jsxs)(o.ul,{children:[`
`,(0,n.jsxs)(o.li,{children:["type: ",(0,n.jsx)(o.code,{children:"ReactNode"}),";"]}),`
`]}),`
`,(0,n.jsx)(o.p,{children:"Component to render into the banner."}),`
`,(0,n.jsx)(o.h3,{id:"isloading",children:"isLoading"}),`
`,(0,n.jsxs)(o.ul,{children:[`
`,(0,n.jsxs)(o.li,{children:["type: ",(0,n.jsx)(o.code,{children:"boolean"})]}),`
`]}),`
`,(0,n.jsx)(o.p,{children:"It shows a spinner icon when true."}),`
`,(0,n.jsx)(o.h3,{id:"icon",children:"icon"}),`
`,(0,n.jsxs)(o.ul,{children:[`
`,(0,n.jsxs)(o.li,{children:["type: ",(0,n.jsx)(o.code,{children:"ReactNode"})]}),`
`,(0,n.jsxs)(o.li,{children:["default: ",(0,n.jsx)(o.code,{children:"warning"})," core icon"]}),`
`]}),`
`,(0,n.jsx)(o.p,{children:"An optional icon."}),`
`,(0,n.jsx)(o.h3,{id:"action",children:"action"}),`
`,(0,n.jsxs)(o.ul,{children:[`
`,(0,n.jsxs)(o.li,{children:["type: ",(0,n.jsx)(o.code,{children:"ReactNode"}),";"]}),`
`]}),`
`,(0,n.jsx)(o.p,{children:"Action component to render at the right of the banner. Usually, it's a button."})]})}function m(s={}){const{wrapper:o}=Object.assign({},(0,c.useMDXComponents)(),s.components);return o?(0,n.jsx)(o,Object.assign({},s,{children:(0,n.jsx)(b,s)})):b(s)}const d=m},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx":(u,r,e)=>{var h,g,x;e.r(r),e.d(r,{__namedExportsOrder:()=>j,_default:()=>o,default:()=>d});var l=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/index.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=`import { Button } from '@wordpress/components';
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
`,p={_default:{startLoc:{col:24,line:32},endLoc:{col:1,line:43},startBody:{col:24,line:32},endBody:{col:1,line:43}}};const{Icon:b,...m}=n,d={parameters:{storySource:{source:`import { Button } from '@wordpress/components';
import * as allIcons from '@wordpress/icons';
import React from 'react';
import Banner, { BlockBannerProps } from '..';


const {
  Icon,
  ...icons
} = allIcons;
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
const DefaultTemplate = (args: BannerStoryProps) => {
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
};
export const _default = DefaultTemplate.bind({});
_default.args = {
  children: 'Connect your site to WordPress.com to upload videos.',
  action: <Button variant="primary">Connect</Button>,
  isLoading: false
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "(args: BannerStoryProps) => {\\n  const props: BlockBannerProps = {\\n    children: args.children,\\n    isLoading: args.isLoading,\\n    action: args.action\\n  };\\n  const icon = args?.icon && args.icon !== 'none' ? icons[args.icon] : null;\\n  if (icon) {\\n    props.icon = icon;\\n  }\\n  return <Banner {...props} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:24,line:32},endLoc:{col:1,line:43},startBody:{col:24,line:32},endBody:{col:1,line:43}}}}},title:"Packages/VideoPress/Block Editor/Banner",component:i.Z,argTypes:{icon:{control:{type:"select"},options:["none",...Object.keys(m)]},action:{table:{disable:!0}}}},s=a=>{const k={children:a.children,isLoading:a.isLoading,action:a.action},y=a!=null&&a.icon&&a.icon!=="none"?m[a.icon]:null;return y&&(k.icon=y),(0,t.jsx)(i.Z,{...k})};s.displayName="DefaultTemplate";const o=s.bind({});o.args={children:"Connect your site to WordPress.com to upload videos.",action:(0,t.jsx)(l.ZP,{variant:"primary",children:"Connect"}),isLoading:!1},o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const j=["_default"]},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx":(u,r,e)=>{e.d(r,{Z:()=>s});var l=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(i),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss"),p={};p.insert="head",p.singleton=!1;var b=t()(_.Z,p);const m=_.Z.locals||{};var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function s({icon:o=n.Z,action:j,children:h,isLoading:g}){return(0,d.jsxs)("div",{className:"block-banner",children:[(0,d.jsx)(c.Z,{icon:o}),(0,d.jsx)("div",{className:"block-banner__content",children:h}),g&&(0,d.jsx)(l.ZP,{}),j&&(0,d.jsx)("div",{className:"block-banner__action",children:j})]})}s.displayName="BlockBanner";try{banner.displayName="banner",banner.__docgenInfo={description:"React component to render a banner above a block.",displayName:"banner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"})}catch(o){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss":(u,r,e)=>{e.d(r,{Z:()=>_});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(l),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(c),t=i()(n());t.push([u.id,".block-banner{display:flex;height:48px;font-size:14px;align-self:center;align-items:center;background:#f6f7f7;padding:0 16px}.block-banner .block-banner__content{color:#01283d;flex-grow:2;margin:0 8px}",""]);const _=t}}]);})();
