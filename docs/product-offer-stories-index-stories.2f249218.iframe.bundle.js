"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5997],{"../components/components/product-offer/stories/index.stories.tsx":(i,r,e)=>{var g,B,f,y,P,v,E,w,k,x,h,S;e.r(r),e.d(r,{IconsCardStory:()=>d,JetpackBackup:()=>l,JetpackProtect:()=>p,SecurityBundle:()=>m,__namedExportsOrder:()=>C,default:()=>u});var t=e("../components/components/product-offer/index.tsx"),o=e("../components/components/product-offer/icons-card.tsx"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=`import ProductOffer from '..';
import { IconsCard } from '../icons-card';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Product Offer',
	component: ProductOffer,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		layout: 'centered',
	},
} as ComponentMeta< typeof ProductOffer >;

const Template: ComponentStory< typeof ProductOffer > = args => <ProductOffer { ...args } />;

export const SecurityBundle = Template.bind( {} );
SecurityBundle.parameters = {};
SecurityBundle.args = {
	slug: 'security',
	icon: '',
	name: 'Security',
	title: 'Security',
	subTitle: '',
	description: 'Comprehensive site security, including Backup, Scan, and Anti-spam.',
	isBundle: true,
	isCard: true,
	supportedProducts: [ 'backup', 'scan', 'anti-spam' ],
	features: [
		'Real-time cloud backups with 10GB storage',
		'Automated real-time malware scan',
		'One-click fixes for most threats',
		'Comment & form spam protection',
	],
	pricing: {
		currency: 'USD',
		price: 24.92,
		offPrice: 12.42,
	},
	buttonText: '',
	addProductUrl: '',
	hasRequiredPlan: false,
	isLoading: false,
	error: '',
};

export const JetpackBackup = Template.bind( {} );
JetpackBackup.parameters = {};
JetpackBackup.args = {
	slug: 'backup',
	icon: '',
	name: 'Backup',
	title: 'Jepack Backup',
	subTitle: '',
	description:
		'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.',
	features: [
		'Real-time cloud backups',
		'10GB of backup storage',
		'30-day archive & activity log',
		'One-click restores',
	],
	isBundle: false,
	isCard: true,
	pricing: {
		currency: 'USD',
		price: 9.66,
		offPrice: 3.95,
	},
	addProductUrl: '',
	hasRequiredPlan: false,
	isLoading: false,
};

export const JetpackProtect = Template.bind( {} );
JetpackProtect.parameters = {};
JetpackProtect.args = {
	slug: 'protect',
	icon: 'jetpack',
	title: 'Protect',
	subTitle: 'Protect your site and scan for security vulnerabilities listed in our database.',
	features: [
		'Over 20,000 listed vulnerabilities',
		'Daily automatic scans',
		'Check plugin and theme version status',
		'Easy to navigate and use',
	],
	isBundle: false,
	isCard: true,
	pricing: {
		isFree: true,
	},
	addProductUrl: '',
	hasRequiredPlan: false,
	isLoading: false,
};

const IconsCardTemplate: ComponentStory< typeof IconsCard > = args => <IconsCard { ...args } />;

export const IconsCardStory = IconsCardTemplate.bind( {} );
IconsCardStory.parameters = {};
IconsCardStory.args = {
	products: [ 'backup', 'scan', 'anti-spam' ],
};
IconsCardStory.storyName = 'Icons Card';
`,c={SecurityBundle:{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},JetpackBackup:{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},JetpackProtect:{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},IconsCardStory:{startLoc:{col:62,line:97},endLoc:{col:95,line:97},startBody:{col:62,line:97},endBody:{col:95,line:97}}};const u={title:"JS Packages/Components/Product Offer",component:t.Z,parameters:{storySource:{source:`import ProductOffer from '..';
import { IconsCard } from '../icons-card';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Product Offer',
	component: ProductOffer,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		layout: 'centered',
	},
} as ComponentMeta< typeof ProductOffer >;

const Template: ComponentStory< typeof ProductOffer > = args => <ProductOffer { ...args } />;

export const SecurityBundle = Template.bind( {} );
SecurityBundle.parameters = {};
SecurityBundle.args = {
	slug: 'security',
	icon: '',
	name: 'Security',
	title: 'Security',
	subTitle: '',
	description: 'Comprehensive site security, including Backup, Scan, and Anti-spam.',
	isBundle: true,
	isCard: true,
	supportedProducts: [ 'backup', 'scan', 'anti-spam' ],
	features: [
		'Real-time cloud backups with 10GB storage',
		'Automated real-time malware scan',
		'One-click fixes for most threats',
		'Comment & form spam protection',
	],
	pricing: {
		currency: 'USD',
		price: 24.92,
		offPrice: 12.42,
	},
	buttonText: '',
	addProductUrl: '',
	hasRequiredPlan: false,
	isLoading: false,
	error: '',
};

export const JetpackBackup = Template.bind( {} );
JetpackBackup.parameters = {};
JetpackBackup.args = {
	slug: 'backup',
	icon: '',
	name: 'Backup',
	title: 'Jepack Backup',
	subTitle: '',
	description:
		'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.',
	features: [
		'Real-time cloud backups',
		'10GB of backup storage',
		'30-day archive & activity log',
		'One-click restores',
	],
	isBundle: false,
	isCard: true,
	pricing: {
		currency: 'USD',
		price: 9.66,
		offPrice: 3.95,
	},
	addProductUrl: '',
	hasRequiredPlan: false,
	isLoading: false,
};

export const JetpackProtect = Template.bind( {} );
JetpackProtect.parameters = {};
JetpackProtect.args = {
	slug: 'protect',
	icon: 'jetpack',
	title: 'Protect',
	subTitle: 'Protect your site and scan for security vulnerabilities listed in our database.',
	features: [
		'Over 20,000 listed vulnerabilities',
		'Daily automatic scans',
		'Check plugin and theme version status',
		'Easy to navigate and use',
	],
	isBundle: false,
	isCard: true,
	pricing: {
		isFree: true,
	},
	addProductUrl: '',
	hasRequiredPlan: false,
	isLoading: false,
};

const IconsCardTemplate: ComponentStory< typeof IconsCard > = args => <IconsCard { ...args } />;

export const IconsCardStory = IconsCardTemplate.bind( {} );
IconsCardStory.parameters = {};
IconsCardStory.args = {
	products: [ 'backup', 'scan', 'anti-spam' ],
};
IconsCardStory.storyName = 'Icons Card';
`,locationsMap:{"security-bundle":{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},"jetpack-backup":{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},"jetpack-protect":{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},"icons-card-story":{startLoc:{col:62,line:97},endLoc:{col:95,line:97},startBody:{col:62,line:97},endBody:{col:95,line:97}}}},actions:{argTypesRegex:"^on.*"},layout:"centered"}},a=b=>(0,s.jsx)(t.Z,{...b});a.displayName="Template";const m=a.bind({});m.parameters={},m.args={slug:"security",icon:"",name:"Security",title:"Security",subTitle:"",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",isBundle:!0,isCard:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricing:{currency:"USD",price:24.92,offPrice:12.42},buttonText:"",addProductUrl:"",hasRequiredPlan:!1,isLoading:!1,error:""};const l=a.bind({});l.parameters={},l.args={slug:"backup",icon:"",name:"Backup",title:"Jepack Backup",subTitle:"",description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],isBundle:!1,isCard:!0,pricing:{currency:"USD",price:9.66,offPrice:3.95},addProductUrl:"",hasRequiredPlan:!1,isLoading:!1};const p=a.bind({});p.parameters={},p.args={slug:"protect",icon:"jetpack",title:"Protect",subTitle:"Protect your site and scan for security vulnerabilities listed in our database.",features:["Over 20,000 listed vulnerabilities","Daily automatic scans","Check plugin and theme version status","Easy to navigate and use"],isBundle:!1,isCard:!0,pricing:{isFree:!0},addProductUrl:"",hasRequiredPlan:!1,isLoading:!1};const _=b=>(0,s.jsx)(o.T,{...b});_.displayName="IconsCardTemplate";const d=_.bind({});d.parameters={},d.args={products:["backup","scan","anti-spam"]},d.storyName="Icons Card",m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"args => <ProductOffer {...args} />",...(f=(B=m.parameters)==null?void 0:B.docs)==null?void 0:f.source}}},l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"args => <ProductOffer {...args} />",...(v=(P=l.parameters)==null?void 0:P.docs)==null?void 0:v.source}}},p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"args => <ProductOffer {...args} />",...(k=(w=p.parameters)==null?void 0:w.docs)==null?void 0:k.source}}},d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:"args => <IconsCard {...args} />",...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const C=["SecurityBundle","JetpackBackup","JetpackProtect","IconsCardStory"]},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(i,r,e)=>{e.d(r,{ZP:()=>f});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(o),n=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function m(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const l=c.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,p=(0,n.Z)("svg",{target:"ea4tfvq2"})("width:",u.Z.spinnerSize,"px;height:",u.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",a.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),_={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},d=(0,n.Z)("circle",{target:"ea4tfvq1"})(_,";stroke:",a.D.gray[300],";"),C=(0,n.Z)("path",{target:"ea4tfvq0"})(_,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",l,";");function g({className:y,...P},v){return(0,t.createElement)(p,{className:s()("components-spinner",y),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...P,ref:v},(0,t.createElement)(d,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(C,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const f=(0,t.forwardRef)(g)},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(i,r,e)=>{e.d(r,{Z:()=>a});var t=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const s="36px",n="12px",c={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:n,controlPaddingXLarge:`calc(${n} * 1.3334)`,controlPaddingXSmall:`calc(${n} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:s,controlHeightXSmall:`calc( ${s} * 0.6 )`,controlHeightSmall:`calc( ${s} * 0.8 )`,controlHeightLarge:`calc( ${s} * 1.2 )`,controlHeightXLarge:`calc( ${s} * 1.4 )`},u={toggleGroupControlBackgroundColor:c.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:c.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:c.controlBackgroundColor},a=Object.assign({},c,u,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(i,r,e)=>{e.d(r,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({icon:n,size:c=24,...u},a){return(0,t.cloneElement)(n,{width:c,height:c,...u,ref:a})}const s=(0,t.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(i,r,e)=>{e.d(r,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(i,r,e)=>{e.d(r,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(i,r,e)=>{e.d(r,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plus.js":(i,r,e)=>{e.d(r,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/star-filled.js":(i,r,e)=>{e.d(r,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.y$,{d:"M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(i,r,e)=>{e.d(r,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,t.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(o.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))}}]);})();
