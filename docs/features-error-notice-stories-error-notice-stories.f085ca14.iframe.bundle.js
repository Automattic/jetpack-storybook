"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5282],{"../../plugins/boost/app/assets/src/js/features/error-notice/stories/error-notice.stories.tsx":(g,d,e)=>{e.r(d),e.d(d,{__namedExportsOrder:()=>v,_default:()=>r,default:()=>S});var l=e("../../../node_modules/.pnpm/@wordpress+element@6.21.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js");function p(s,i){return s instanceof Error?s:typeof s=="string"||s instanceof String?new Error(s.toString()):s.message?new Error(s.message):i?new Error(i):new Error(JSON.stringify(s))}var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=s=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 24 24",...s,children:(0,o.jsx)("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z",style:{fill:"#d63638"}})});try{noticeoutline.displayName="noticeoutline",noticeoutline.__docgenInfo={description:"",displayName:"noticeoutline",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/svg/notice-outline.tsx#noticeoutline"]={docgenInfo:noticeoutline.__docgenInfo,name:"noticeoutline",path:"../../plugins/boost/app/assets/src/js/svg/notice-outline.tsx#noticeoutline"})}catch{}var u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(u),A=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/error-notice/error-notice.module.scss"),x={};x.insert="head",x.singleton=!1;var P=h()(A.A,x);const t=A.A.locals||{};var E=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");const n=({title:s,error:i=new Error(s),variant:k="normal",data:j,suggestion:y,vars:w={},children:f,actionButton:N})=>{const B=p(i).message;return(0,o.jsxs)("div",{className:(0,E.A)(t["error-notice"],{[t["variant-module"]]:k==="module"}),children:[(0,o.jsx)("div",{className:t["icon-wrapper"],children:(0,o.jsx)(a,{className:t.icon})}),(0,o.jsxs)("div",{className:t.offset,children:[(0,o.jsx)("div",{className:t.description,children:s}),(0,o.jsxs)("div",{className:t.message,children:[f||B,j&&(0,o.jsx)("pre",{className:t.data,children:j}),y&&(0,o.jsx)("p",{className:t.suggestion,children:(0,l.A)(y,w)})]})]}),(0,o.jsx)("div",{className:t["main-action"],children:N})]})};try{errornotice.displayName="errornotice",errornotice.__docgenInfo={description:"",displayName:"errornotice",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},error:{defaultValue:{value:"new Error( title )"},description:"",name:"error",required:!1,type:{name:"string | Error"}},variant:{defaultValue:{value:"normal"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"module"'}]}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"string"}},suggestion:{defaultValue:null,description:"",name:"suggestion",required:!1,type:{name:"string"}},vars:{defaultValue:{value:"{}"},description:"",name:"vars",required:!1,type:{name:"Record<string, ReactElement<any, string | JSXElementConstructor<any>>>"}},actionButton:{defaultValue:null,description:"",name:"actionButton",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/error-notice/error-notice.tsx#errornotice"]={docgenInfo:errornotice.__docgenInfo,name:"errornotice",path:"../../plugins/boost/app/assets/src/js/features/error-notice/error-notice.tsx#errornotice"})}catch{}var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),O=e("../components/components/button/index.tsx"),_=`import ErrorNotice from '../error-notice';
import type { Meta } from '@storybook/react';
import React from 'react';
import {Button} from '@automattic/jetpack-components'

const meta: Meta< typeof ErrorNotice > = {
	title: 'Plugins/Boost/ErrorNotice',
	component: ErrorNotice,
	argTypes: {
		title: { control: 'text' },
		error: { control: 'text' },
		variant: { control: 'select', options: [ 'normal', 'module' ] },
		data: { control: 'text' },
		description: { control: 'text' },
		suggestion: { control: 'text' },
	},
	decorators: [
		Story => (
			<div style={ { maxWidth: '1320px', padding: '0 100px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const Template = args => <ErrorNotice { ...args } />;
export const _default = Template.bind( {} );
_default.args = {
	title: 'Error',
	error: 'This is an error message',
	variant: 'normal',
	data: "{\\n\\t\\"errorData\\": \\"This is some more error data\\"\\n}",
	description: 'This is error description ErrorNotice is wrapping.',
	suggestion: 'Contact <support>support</support> for help.',
	vars: {
		support: <a href="#support" />,
		link: <a href="#link" />,
	},
	actionButton: <Button variant="secondary">
		Contact Support
	</Button>,
};
export default meta;
`,z={_default:{startLoc:{col:17,line:39},endLoc:{col:2,line:41},startBody:{col:17,line:39},endBody:{col:2,line:41}}};const b={parameters:{storySource:{source:`import ErrorNotice from '../error-notice';
import React from 'react';
import { Button } from '@automattic/jetpack-components';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'Plugins/Boost/ErrorNotice',
  component: ErrorNotice,
  argTypes: {
    title: {
      control: 'text'
    },
    error: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['normal', 'module']
    },
    data: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    suggestion: {
      control: 'text'
    }
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '1320px',
      padding: '0 100px',
      margin: '200px auto',
      fontSize: '16px'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const Template = args => /*#__PURE__*/_jsx(ErrorNotice, {
  ...args
});
export const _default = Template.bind({});
_default.args = {
  title: 'Error',
  error: 'This is an error message',
  variant: 'normal',
  data: "{\\n\\t\\"errorData\\": \\"This is some more error data\\"\\n}",
  description: 'This is error description ErrorNotice is wrapping.',
  suggestion: 'Contact <support>support</support> for help.',
  vars: {
    support: /*#__PURE__*/_jsx("a", {
      href: "#support"
    }),
    link: /*#__PURE__*/_jsx("a", {
      href: "#link"
    })
  },
  actionButton: /*#__PURE__*/_jsx(Button, {
    variant: "secondary",
    children: "Contact Support"
  })
};
export default meta;`,locationsMap:{default:{startLoc:{col:17,line:39},endLoc:{col:2,line:41},startBody:{col:17,line:39},endBody:{col:2,line:41}}}}},title:"Plugins/Boost/ErrorNotice",component:n,argTypes:{title:{control:"text"},error:{control:"text"},variant:{control:"select",options:["normal","module"]},data:{control:"text"},description:{control:"text"},suggestion:{control:"text"}},decorators:[s=>(0,o.jsx)("div",{style:{maxWidth:"1320px",padding:"0 100px",margin:"200px auto",fontSize:"16px"},children:(0,o.jsx)(s,{})})]},r=(s=>(0,o.jsx)(n,{...s})).bind({});r.args={title:"Error",error:"This is an error message",variant:"normal",data:`{
	"errorData": "This is some more error data"
}`,description:"This is error description ErrorNotice is wrapping.",suggestion:"Contact <support>support</support> for help.",vars:{support:(0,o.jsx)("a",{href:"#support"}),link:(0,o.jsx)("a",{href:"#link"})},actionButton:(0,o.jsx)(O.A,{variant:"secondary",children:"Contact Support"})};const S=b,v=["_default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <ErrorNotice {...args} />",...r.parameters?.docs?.source}}}},"../components/components/button/index.tsx":(g,d,e)=>{e.d(d,{A:()=>z});var l=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),A=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(x),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),E={};E.insert="head",E.singleton=!1;var I=P()(t.A,E);const n=t.A.locals||{};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const O=m.__,_=(0,A.forwardRef)((b,V)=>{const{children:r,variant:S="primary",size:v="normal",weight:s="bold",icon:i,iconSize:k,disabled:j,isDestructive:y,isLoading:w,isExternalLink:f,className:N,text:B,fullWidth:R,...T}=b,C=(0,h.A)(n.button,N,{[n.normal]:v==="normal",[n.small]:v==="small",[n.icon]:!!i,[n.loading]:w,[n.regular]:s==="regular",[n["full-width"]]:R,[n["is-icon-button"]]:!!i&&!r});T.ref=V;const L=v==="normal"?20:16,X=f&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.A,{size:L,icon:u.A,className:n["external-icon"]}),(0,c.jsx)(l.A,{as:"span",children:O("(opens in a new tab)","jetpack-components")})]}),K=f?"_blank":void 0,D=r?.[0]&&r[0]!==null&&r?.[0]?.props?.className!=="components-tooltip";return(0,c.jsxs)(p.Ay,{target:K,variant:S,className:(0,h.A)(C,{"has-text":!!i&&D}),icon:f?void 0:i,iconSize:k,disabled:j,"aria-disabled":j,isDestructive:y,text:B,...T,children:[w&&(0,c.jsx)(o.Ay,{}),(0,c.jsx)("span",{children:r}),X]})});_.displayName="Button";const z=_;try{_.displayName="Button",_.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:_.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(g,d,e)=>{e.d(d,{A:()=>u});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(l),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(o),a=m()(p());a.push([g.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),a.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const u=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/error-notice/error-notice.module.scss":(g,d,e)=>{e.d(d,{A:()=>u});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(l),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(o),a=m()(p());a.push([g.id,":root{--light-border: #eeeeee;--jetpack-green: #008710;--primary-black: #23282d;--primary-white: #ffffff;--primary-grey: #444444;--secondary-grey: #888888;--color_warning: #cc1818;--alt-white: #f9f9f6;--gray-0: #f6f7f7;--gray-5: #dcdcde;--gray-10: #c3c4c7;--gray-20: #a7aaad;--gray-30: #8c8f94;--gray-40: #787c82;--gray-50: #646970;--gray-60: #50575e;--gray-70: #3c434a;--gray-80: #2c3338;--gray-90: #1d2327;--gray-100: #101517;--gray: #646970;--blue-50: #2271b1;--blue-60: #135e96;--red-40: #e65054;--jetpack-green-0: #f0f2eb;--jetpack-green-5: #d0e6b8;--jetpack-green-10: #9dd977;--jetpack-green-20: #64ca43;--jetpack-green-30: #2fb41f;--jetpack-green-40: #069e08;--jetpack-green-50: #008710;--jetpack-green-60: #007117;--jetpack-green-70: #005b18;--jetpack-green-80: #004515;--jetpack-green-90: #003010;--jetpack-green-100: #001c09;--jp-yellow-20: #DEB100}.n5_IBrNKAu_i1p4ozwmF{position:relative;color:#d63638;display:block;margin:0;padding:0}@media(min-width: 768px){.n5_IBrNKAu_i1p4ozwmF{display:flex;align-items:flex-start;justify-content:left}}.n5_IBrNKAu_i1p4ozwmF .raw-error{color:#23282d}.n5_IBrNKAu_i1p4ozwmF pre{background-color:#f1f1f1;padding:25px;margin:20px 0;text-align:left;white-space:pre-wrap;color:#0f0f0f;border-radius:6px}.n5_IBrNKAu_i1p4ozwmF .u1WZyFCuHhCAJ0iSo6JJ{color:inherit;height:20px;width:20px;line-height:0}.n5_IBrNKAu_i1p4ozwmF.yYi3ZnOdZMpxj17OuDIw .dbFRrlW4rjTRqjTHx1LK{position:absolute;left:-65px;top:0;width:20px}.n5_IBrNKAu_i1p4ozwmF:not(.yYi3ZnOdZMpxj17OuDIw) .ntx17gG5KqeDP78A4J85{padding-left:.5em}.n5_IBrNKAu_i1p4ozwmF .UJ0NLShhV2A2g5ZFQeb8:not(:empty){margin-left:auto}.n5_IBrNKAu_i1p4ozwmF .UJ0NLShhV2A2g5ZFQeb8:not(:empty) button{margin-left:0}@media(min-width: 768px){.n5_IBrNKAu_i1p4ozwmF .UJ0NLShhV2A2g5ZFQeb8:not(:empty) button{margin-left:20px}}.n5_IBrNKAu_i1p4ozwmF .GQateQqkh4jqpvJcBKJw{color:#d63638;font-weight:bold;margin-bottom:.5em}.n5_IBrNKAu_i1p4ozwmF .VoVdAg6XFs58oQZosBNX{list-style-type:disc;color:#d63638}.n5_IBrNKAu_i1p4ozwmF .VoVdAg6XFs58oQZosBNX p{margin:.25em 0;color:#d63638}.n5_IBrNKAu_i1p4ozwmF .VoVdAg6XFs58oQZosBNX button{color:#23282d;font-size:16px;margin:16px auto}.n5_IBrNKAu_i1p4ozwmF .VoVdAg6XFs58oQZosBNX li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word}",""]),a.locals={"error-notice":"n5_IBrNKAu_i1p4ozwmF",icon:"u1WZyFCuHhCAJ0iSo6JJ","variant-module":"yYi3ZnOdZMpxj17OuDIw","icon-wrapper":"dbFRrlW4rjTRqjTHx1LK",offset:"ntx17gG5KqeDP78A4J85","main-action":"UJ0NLShhV2A2g5ZFQeb8",description:"GQateQqkh4jqpvJcBKJw",message:"VoVdAg6XFs58oQZosBNX"};const u=a}}]);
