"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9753],{"../components/components/dialog/stories/index.stories.tsx":(i,r,t)=>{var u,_,b,g,f,v;t.r(r),t.d(r,{JetpackBackup:()=>c,JetpackBoost:()=>d,__namedExportsOrder:()=>B,default:()=>P});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../components/components/dialog/index.tsx"),s=t("../components/components/product-offer/index.tsx");const n=t.p+"static/media/boost.a5413748.png";var a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Dialog from '..';
import ProductOffer from '../../product-offer';
import BoostImage from './boost.png';

export default {
	title: 'JS Packages/Components/Dialog',
	component: Dialog,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		layout: 'centered',
	},
	argTypes: {
		primary: {
			table: {
				disable: true,
			},
		},
		secondary: {
			table: {
				disable: true,
			},
		},
		isTwoSections: {
			table: {
				disable: true,
			},
		},
	},
};

const Template = args => <Dialog { ...args } />;

export const JetpackBoost = Template.bind( {} );
JetpackBoost.parameters = {};
JetpackBoost.args = {
	primary: (
		<ProductOffer
			slug="boost"
			name="Boost"
			title="Jepack Boost"
			description="Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required."
			features={ [
				'Check your site performance',
				'Enable improvements in one click',
				'Standalone free plugin for those focused on speed',
			] }
			pricing={ {
				isFree: true,
			} }
			className={ '' }
			isCard={ false }
			supportedProducts={ [] }
			hasRequiredPlan={ false }
			addProductUrl={ '' }
		/>
	),
	secondary: <img src={ BoostImage } alt="Boost" />,
	isTwoSections: false,
};

export const JetpackBackup = Template.bind( {} );
JetpackBackup.parameters = {};
JetpackBackup.args = {
	primary: (
		<ProductOffer
			slug={ 'backup' }
			name={ 'Backup' }
			title={ 'Jepack Backup' }
			description={
				'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.'
			}
			features={ [
				'Real-time cloud backups',
				'10GB of backup storage',
				'30-day archive & activity log',
				'One-click restores',
			] }
			pricing={ {
				currency: 'USD',
				price: 24.92,
				offPrice: 12.42,
			} }
			isCard={ true }
			className={ '' }
			supportedProducts={ [] }
			hasRequiredPlan={ false }
			addProductUrl={ '' }
		/>
	),
	secondary: (
		<ProductOffer
			name="Security"
			title="Security"
			description="Comprehensive site security, including Backup, Scan, and Anti-spam."
			isBundle={ true }
			supportedProducts={ [ 'backup', 'scan', 'anti-spam' ] }
			features={ [
				'Real time cloud backups with 10GB storage',
				'Automated real-time malware scan',
				'One click fixes for most threats',
				'Comment & form spam protection',
			] }
			pricing={ {
				currency: 'USD',
				price: 24.92,
				offPrice: 12.42,
			} }
			hasRequiredPlan={ false }
			isLoading={ false }
			className={ '' }
			isCard={ false }
			addProductUrl={ '' }
		/>
	),
	isTwoSections: true,
};
`,p={JetpackBoost:{startLoc:{col:17,line:33},endLoc:{col:47,line:33},startBody:{col:17,line:33},endBody:{col:47,line:33}},JetpackBackup:{startLoc:{col:17,line:33},endLoc:{col:47,line:33},startBody:{col:17,line:33},endBody:{col:47,line:33}}};const P={title:"JS Packages/Components/Dialog",component:e.Z,parameters:{storySource:{source:`
import React from 'react';
import Dialog from '..';
import ProductOffer from '../../product-offer';
import BoostImage from './boost.png';

export default {
	title: 'JS Packages/Components/Dialog',
	component: Dialog,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		layout: 'centered',
	},
	argTypes: {
		primary: {
			table: {
				disable: true,
			},
		},
		secondary: {
			table: {
				disable: true,
			},
		},
		isTwoSections: {
			table: {
				disable: true,
			},
		},
	},
};

const Template = args => <Dialog { ...args } />;

export const JetpackBoost = Template.bind( {} );
JetpackBoost.parameters = {};
JetpackBoost.args = {
	primary: (
		<ProductOffer
			slug="boost"
			name="Boost"
			title="Jepack Boost"
			description="Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required."
			features={ [
				'Check your site performance',
				'Enable improvements in one click',
				'Standalone free plugin for those focused on speed',
			] }
			pricing={ {
				isFree: true,
			} }
			className={ '' }
			isCard={ false }
			supportedProducts={ [] }
			hasRequiredPlan={ false }
			addProductUrl={ '' }
		/>
	),
	secondary: <img src={ BoostImage } alt="Boost" />,
	isTwoSections: false,
};

export const JetpackBackup = Template.bind( {} );
JetpackBackup.parameters = {};
JetpackBackup.args = {
	primary: (
		<ProductOffer
			slug={ 'backup' }
			name={ 'Backup' }
			title={ 'Jepack Backup' }
			description={
				'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.'
			}
			features={ [
				'Real-time cloud backups',
				'10GB of backup storage',
				'30-day archive & activity log',
				'One-click restores',
			] }
			pricing={ {
				currency: 'USD',
				price: 24.92,
				offPrice: 12.42,
			} }
			isCard={ true }
			className={ '' }
			supportedProducts={ [] }
			hasRequiredPlan={ false }
			addProductUrl={ '' }
		/>
	),
	secondary: (
		<ProductOffer
			name="Security"
			title="Security"
			description="Comprehensive site security, including Backup, Scan, and Anti-spam."
			isBundle={ true }
			supportedProducts={ [ 'backup', 'scan', 'anti-spam' ] }
			features={ [
				'Real time cloud backups with 10GB storage',
				'Automated real-time malware scan',
				'One click fixes for most threats',
				'Comment & form spam protection',
			] }
			pricing={ {
				currency: 'USD',
				price: 24.92,
				offPrice: 12.42,
			} }
			hasRequiredPlan={ false }
			isLoading={ false }
			className={ '' }
			isCard={ false }
			addProductUrl={ '' }
		/>
	),
	isTwoSections: true,
};
`,locationsMap:{"jetpack-boost":{startLoc:{col:17,line:33},endLoc:{col:47,line:33},startBody:{col:17,line:33},endBody:{col:47,line:33}},"jetpack-backup":{startLoc:{col:17,line:33},endLoc:{col:47,line:33},startBody:{col:17,line:33},endBody:{col:47,line:33}}}},actions:{argTypesRegex:"^on.*"},layout:"centered"},argTypes:{primary:{table:{disable:!0}},secondary:{table:{disable:!0}},isTwoSections:{table:{disable:!0}}}},m=w=>(0,a.jsx)(e.Z,{...w});m.displayName="Template";const d=m.bind({});d.parameters={},d.args={primary:(0,a.jsx)(s.Z,{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricing:{isFree:!0},className:"",isCard:!1,supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,a.jsx)("img",{src:n,alt:"Boost"}),isTwoSections:!1};const c=m.bind({});c.parameters={},c.args={primary:(0,a.jsx)(s.Z,{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricing:{currency:"USD",price:24.92,offPrice:12.42},isCard:!0,className:"",supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,a.jsx)(s.Z,{name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",isBundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real time cloud backups with 10GB storage","Automated real-time malware scan","One click fixes for most threats","Comment & form spam protection"],pricing:{currency:"USD",price:24.92,offPrice:12.42},hasRequiredPlan:!1,isLoading:!1,className:"",isCard:!1,addProductUrl:""}),isTwoSections:!0},d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Dialog {...args} />",...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}},c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Dialog {...args} />",...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const B=["JetpackBoost","JetpackBackup"]},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(i,r,t)=>{t.d(r,{ZP:()=>g});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=t.n(e),n=t("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=t("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),l=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),p=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function P(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const m=a.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,d=(0,n.Z)("svg",{target:"ea4tfvq2"})("width:",l.Z.spinnerSize,"px;height:",l.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",p.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),c={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},B=(0,n.Z)("circle",{target:"ea4tfvq1"})(c,";stroke:",p.D.gray[300],";"),u=(0,n.Z)("path",{target:"ea4tfvq0"})(c,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",m,";");function _({className:f,...v},w){return(0,o.createElement)(d,{className:s()("components-spinner",f),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...v,ref:w},(0,o.createElement)(B,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(u,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const g=(0,o.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(i,r,t)=>{t.d(r,{Z:()=>p});var o=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),e=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const s="36px",n="12px",a={controlSurfaceColor:e.D.white,controlTextActiveColor:e.D.theme.accent,controlPaddingX:n,controlPaddingXLarge:`calc(${n} * 1.3334)`,controlPaddingXSmall:`calc(${n} / 1.3334)`,controlBackgroundColor:e.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${e.D.theme.accent}`,controlDestructiveBorderColor:e.D.alert.red,controlHeight:s,controlHeightXSmall:`calc( ${s} * 0.6 )`,controlHeightSmall:`calc( ${s} * 0.8 )`,controlHeightLarge:`calc( ${s} * 1.2 )`,controlHeightXLarge:`calc( ${s} * 1.4 )`},l={toggleGroupControlBackgroundColor:a.controlBackgroundColor,toggleGroupControlBorderColor:e.D.ui.border,toggleGroupControlBackdropBackgroundColor:a.controlSurfaceColor,toggleGroupControlBackdropBorderColor:e.D.ui.border,toggleGroupControlButtonColorActive:a.controlBackgroundColor},p=Object.assign({},a,l,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,o.D)(2)}`,cardPaddingSmall:`${(0,o.D)(4)}`,cardPaddingMedium:`${(0,o.D)(4)} ${(0,o.D)(6)}`,cardPaddingLarge:`${(0,o.D)(6)} ${(0,o.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:e.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:e.D.white,surfaceColor:e.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(i,r,t)=>{t.d(r,{Z:()=>s});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function e({icon:n,size:a=24,...l},p){return(0,o.cloneElement)(n,{width:a,height:a,...l,ref:p})}const s=(0,o.forwardRef)(e)},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(i,r,t)=>{t.d(r,{Z:()=>n});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(e.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(i,r,t)=>{t.d(r,{Z:()=>n});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(e.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(i,r,t)=>{t.d(r,{Z:()=>n});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(e.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plus.js":(i,r,t)=>{t.d(r,{Z:()=>n});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(e.y$,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/star-filled.js":(i,r,t)=>{t.d(r,{Z:()=>n});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(e.y$,{d:"M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(i,r,t)=>{t.d(r,{Z:()=>n});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(e.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))}}]);})();
