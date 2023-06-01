"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5568,5853],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(h,i,n)=>{n.d(i,{NF:()=>d,Zo:()=>p,ah:()=>a,pC:()=>o});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=r.createContext({});function d(s){return t;function t(l){const c=a(l.components);return r.createElement(s,{...l,allComponents:c})}}function a(s){const t=r.useContext(o);return r.useMemo(()=>typeof s=="function"?s(t):{...t,...s},[t,s])}const _={};function p({components:s,children:t,disableParentContext:l}){let c;return l?c=typeof s=="function"?s({}):s||_:c=a(s),r.createElement(o.Provider,{value:c},t)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(h,i,n)=>{n.d(i,{_:()=>a,r:()=>p});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/@storybook+react-dom-shim@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),d=n("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),a={code:d.bD,a:d.Ct,...d.lO},_=class extends r.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(s){let{showException:t}=this.props;t(s)}render(){let{hasError:s}=this.state,{children:t}=this.props;return s?null:t}},p=class{constructor(){this.render=async(s,t,l)=>{let c={...a,...t==null?void 0:t.components};return new Promise((m,e)=>{n.e(2002).then(n.bind(n,"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:b})=>(0,o.l)(r.createElement(_,{showException:e,key:Math.random()},r.createElement(b,{components:c},r.createElement(d.WI,{context:s,docsParameter:t}))),l)).then(m)})},this.unmount=s=>{(0,o.K)(s)}}}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs":(h,i,n)=>{n.d(i,{Hw:()=>d.Hw,Xz:()=>d.Xz,h_:()=>d.h_,oG:()=>d.oG});var r=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),o=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs"),d=n("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs")},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.mdx":(h,i,n)=>{n.r(i),n.d(i,{default:()=>t});var r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=n("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),a=n("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),_=n("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),p=n("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx");function s(l={}){const{wrapper:c}=Object.assign({},(0,d.ah)(),l.components);return c?(0,o.jsx)(c,Object.assign({},l,{children:(0,o.jsx)(m,{})})):m();function m(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,d.ah)(),l.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h_,{of:p}),`
`,(0,o.jsx)(e.h1,{id:"banner",children:"Banner"}),`
`,(0,o.jsx)(e.p,{children:"A banner to show a message, with loading state control and customizable icon and call-to-action."}),`
`,(0,o.jsx)(a.Xz,{withSource:"open",children:(0,o.jsx)(a.oG,{id:"packages-videopress-block-editor-banner--default"})}),`
`,(0,o.jsx)(e.h2,{id:"api",children:"API"}),`
`,(0,o.jsx)(e.h3,{id:"children",children:"children"}),`
`,(0,o.jsxs)(e.ul,{children:[`
`,(0,o.jsxs)(e.li,{children:["type: ",(0,o.jsx)(e.code,{children:"ReactNode"}),";"]}),`
`]}),`
`,(0,o.jsx)(e.p,{children:"Component to render into the banner."}),`
`,(0,o.jsx)(e.h3,{id:"isloading",children:"isLoading"}),`
`,(0,o.jsxs)(e.ul,{children:[`
`,(0,o.jsxs)(e.li,{children:["type: ",(0,o.jsx)(e.code,{children:"boolean"})]}),`
`]}),`
`,(0,o.jsx)(e.p,{children:"It shows a spinner icon when true."}),`
`,(0,o.jsx)(e.h3,{id:"icon",children:"icon"}),`
`,(0,o.jsxs)(e.ul,{children:[`
`,(0,o.jsxs)(e.li,{children:["type: ",(0,o.jsx)(e.code,{children:"ReactNode"})]}),`
`,(0,o.jsxs)(e.li,{children:["default: ",(0,o.jsx)(e.code,{children:"warning"})," core icon"]}),`
`]}),`
`,(0,o.jsx)(e.p,{children:"An optional icon."}),`
`,(0,o.jsx)(e.h3,{id:"action",children:"action"}),`
`,(0,o.jsxs)(e.ul,{children:[`
`,(0,o.jsxs)(e.li,{children:["type: ",(0,o.jsx)(e.code,{children:"ReactNode"}),";"]}),`
`]}),`
`,(0,o.jsx)(e.p,{children:"Action component to render at the right of the banner. Usually, it's a button."})]})}}const t=s},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/stories/index.stories.tsx":(h,i,n)=>{var j,x,E;n.r(i),n.d(i,{__namedExportsOrder:()=>b,_default:()=>e,default:()=>c});var r=n("../../../node_modules/.pnpm/@wordpress+components@25.0.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),o=n("../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/index.js"),d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=n("../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx"),_=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`import { Button } from '@wordpress/components';
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
`,s={_default:{startLoc:{col:24,line:32},endLoc:{col:1,line:43},startBody:{col:24,line:32},endBody:{col:1,line:43}}};const{Icon:t,...l}=o,c={parameters:{storySource:{source:`import { Button } from '@wordpress/components';
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
};`,locationsMap:{default:{startLoc:{col:24,line:32},endLoc:{col:1,line:43},startBody:{col:24,line:32},endBody:{col:1,line:43}}}}},title:"Packages/VideoPress/Block Editor/Banner",component:a.Z,argTypes:{icon:{control:{type:"select"},options:["none",...Object.keys(l)]},action:{table:{disable:!0}}}},m=u=>{const y={children:u.children,isLoading:u.isLoading,action:u.action},g=u!=null&&u.icon&&u.icon!=="none"?l[u.icon]:null;return g&&(y.icon=g),(0,_.jsx)(a.Z,{...y})};m.displayName="DefaultTemplate";const e=m.bind({});e.args={children:"Connect your site to WordPress.com to upload videos.",action:(0,_.jsx)(r.ZP,{variant:"primary",children:"Connect"}),isLoading:!1},e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`(args: BannerStoryProps) => {
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
}`,...(E=(x=e.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const b=["_default"]},"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx":(h,i,n)=>{n.d(i,{Z:()=>m});var r=n("../../../node_modules/.pnpm/@wordpress+components@25.0.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),o=n("../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/library/warning.js"),d=n("../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=n.n(a),p=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss"),s={};s.insert="head",s.singleton=!1;var t=_()(p.Z,s);const l=p.Z.locals||{};var c=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function m(e){let{icon:b=o.Z,action:j,children:x,isLoading:E}=e;return(0,c.jsxs)("div",{className:"block-banner",children:[(0,c.jsx)(d.Z,{icon:b}),(0,c.jsx)("div",{className:"block-banner__content",children:x}),E&&(0,c.jsx)(r.ZP,{}),j&&(0,c.jsx)("div",{className:"block-banner__action",children:j})]})}m.displayName="BlockBanner";try{banner.displayName="banner",banner.__docgenInfo={description:"React component to render a banner above a block.",displayName:"banner",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"../../packages/videopress/src/client/block-editor/blocks/video/components/banner/index.tsx#banner"})}catch(e){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/block-editor/blocks/video/components/banner/style.scss":(h,i,n)=>{n.d(i,{Z:()=>p});var r=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(r),d=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=n.n(d),_=a()(o());_.push([h.id,".block-banner{display:flex;height:48px;font-size:14px;align-self:center;align-items:center;background:#f6f7f7;padding:0 16px}.block-banner .block-banner__content{color:#01283d;flex-grow:2;margin:0 8px}",""]);const p=_}}]);})();
