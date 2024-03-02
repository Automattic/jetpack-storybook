"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7194],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs":(x,i,t)=>{t.d(i,{aD:()=>b});var e=t("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),o=t("@storybook/preview-api"),l=t("@storybook/global"),d=t("../../../node_modules/.pnpm/@storybook+core-events@7.6.17/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),s="actions",c="storybook/actions",h=`${c}/panel`,O=`${c}/action-event`,w=`${c}/action-clear`,j="$___storybook.isCyclic",E={depth:10,clearOnStoryChange:!0,limit:50},A=(a={})=>{Object.assign(E,a)},p=(a,u)=>{let n=Object.getPrototypeOf(a);return!n||u(n)?n:p(n,u)},_=a=>!!(typeof a=="object"&&a&&p(a,u=>/^Synthetic(?:Base)?Event$/.test(u.constructor.name))&&typeof a.persist=="function"),v=a=>{if(_(a)){let u=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));u.persist();let n=Object.getOwnPropertyDescriptor(u,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(u,"view",{...n,value:Object.create(r.constructor.prototype)}),u}return a},m=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,e.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(a,u={}){let n={...E,...u},r=function(...y){var D,T;if(u.implicit){let R=(D="__STORYBOOK_PREVIEW__"in l.global?l.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:D.storyRenders.find(C=>C.phase==="playing"||C.phase==="rendering");if(R){let C=!((T=window==null?void 0:window.FEATURES)!=null&&T.disallowImplicitActionsInRenderV8),B=new d.is({phase:R.phase,name:a,deprecated:C});if(C)console.warn(B);else throw B}}let f=o.addons.getChannel(),S=m(),P=5,k=y.map(v),L=y.length>1?k:k[0],I={id:S,count:0,data:{name:a,args:L},options:{...n,maxDepth:P+(n.depth||3),allowFunction:n.allowFunction||!1}};f.emit(O,I)};return r.isAction=!0,r}var g=(...a)=>{let u=E,n=a;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(u={...E,...n.pop()});let r=n[0];(n.length!==1||typeof r=="string")&&(r={},n.forEach(f=>{r[f]=f}));let y={};return Object.keys(r).forEach(f=>{y[f]=b(r[f],u)}),y}},"../components/components/action-popover/stories/index.stories.jsx":(x,i,t)=>{var a,u,n,r,y,f;t.r(i),t.d(i,{WithSteps:()=>b,__namedExportsOrder:()=>g,_default:()=>m,default:()=>p});var e=t("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../components/components/action-popover/index.tsx"),d=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(d),c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss"),h={};h.insert="head",h.singleton=!1;var O=s()(c.Z,h);const w=c.Z.locals||{};var j=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
/**
 * Internal dependencies
 */
import ActionPopover from '../index';
import styles from './styles.module.scss';

export default {
	title: 'JS Packages/Components/Action Popover',
	component: ActionPopover,
	argTypes: {
		hideCloseButton: {
			control: { type: 'boolean' },
		},
		title: {
			control: { type: 'text' },
		},
		children: {
			control: { type: 'text' },
		},
		step: {
			control: { type: 'number' },
		},
		totalSteps: {
			control: { type: 'number' },
		},
		buttonContent: {
			control: { type: 'text' },
		},
		buttonDisabled: {
			control: { type: 'boolean' },
		},
		buttonHref: {
			control: { type: 'text' },
		},
		buttonExternalLink: {
			control: { type: 'boolean' },
		},
		offset: {
			control: { type: 'number' },
		},
		position: {
			control: {
				type: 'select',
			},
			options: [
				'top left',
				'top right',
				'top center',
				'middle left',
				'middle right',
				'middle center',
				'bottom left',
				'bottom right',
				'bottom center',
			],
		},
		noArrow: {
			control: { type: 'boolean' },
		},
		onClose: {
			table: {
				disable: true,
			},
		},
		onClick: {
			table: {
				disable: true,
			},
		},
	},
};

const Template = args => {
	const [ anchor, setAnchor ] = useState( null );

	return (
		<>
			<div className={ styles.wrapper }>
				<div ref={ setAnchor }>\u2693</div>
			</div>

			<ActionPopover { ...args } anchor={ anchor } />
		</>
	);
};

const defaultArgs = {
	hideCloseButton: false,
	title: 'Check this out',
	children: 'Absque sudore et labore nullum opus perfectum est.',
	step: null,
	totalSteps: null,
	buttonContent: 'Next',
	buttonDisabled: false,
	offset: 32,
	position: 'top center',
	noArrow: true,
	onClose: () => action( 'close' )(),
	onClick: () => action( 'click' )(),
};

export const _default = Template.bind( {} );
_default.args = defaultArgs;

export const WithSteps = Template.bind( {} );
WithSteps.args = {
	...defaultArgs,
	step: 1,
	totalSteps: 3,
};
`,A={_default:{startLoc:{col:17,line:78},endLoc:{col:1,line:90},startBody:{col:17,line:78},endBody:{col:1,line:90}},WithSteps:{startLoc:{col:17,line:78},endLoc:{col:1,line:90},startBody:{col:17,line:78},endBody:{col:1,line:90}}};const p={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
/**
 * Internal dependencies
 */
import ActionPopover from '../index';
import styles from './styles.module.scss';

export default {
	title: 'JS Packages/Components/Action Popover',
	component: ActionPopover,
	argTypes: {
		hideCloseButton: {
			control: { type: 'boolean' },
		},
		title: {
			control: { type: 'text' },
		},
		children: {
			control: { type: 'text' },
		},
		step: {
			control: { type: 'number' },
		},
		totalSteps: {
			control: { type: 'number' },
		},
		buttonContent: {
			control: { type: 'text' },
		},
		buttonDisabled: {
			control: { type: 'boolean' },
		},
		buttonHref: {
			control: { type: 'text' },
		},
		buttonExternalLink: {
			control: { type: 'boolean' },
		},
		offset: {
			control: { type: 'number' },
		},
		position: {
			control: {
				type: 'select',
			},
			options: [
				'top left',
				'top right',
				'top center',
				'middle left',
				'middle right',
				'middle center',
				'bottom left',
				'bottom right',
				'bottom center',
			],
		},
		noArrow: {
			control: { type: 'boolean' },
		},
		onClose: {
			table: {
				disable: true,
			},
		},
		onClick: {
			table: {
				disable: true,
			},
		},
	},
};

const Template = args => {
	const [ anchor, setAnchor ] = useState( null );

	return (
		<>
			<div className={ styles.wrapper }>
				<div ref={ setAnchor }>\u2693</div>
			</div>

			<ActionPopover { ...args } anchor={ anchor } />
		</>
	);
};

const defaultArgs = {
	hideCloseButton: false,
	title: 'Check this out',
	children: 'Absque sudore et labore nullum opus perfectum est.',
	step: null,
	totalSteps: null,
	buttonContent: 'Next',
	buttonDisabled: false,
	offset: 32,
	position: 'top center',
	noArrow: true,
	onClose: () => action( 'close' )(),
	onClick: () => action( 'click' )(),
};

export const _default = Template.bind( {} );
_default.args = defaultArgs;

export const WithSteps = Template.bind( {} );
WithSteps.args = {
	...defaultArgs,
	step: 1,
	totalSteps: 3,
};
`,locationsMap:{default:{startLoc:{col:17,line:78},endLoc:{col:1,line:90},startBody:{col:17,line:78},endBody:{col:1,line:90}},"with-steps":{startLoc:{col:17,line:78},endLoc:{col:1,line:90},startBody:{col:17,line:78},endBody:{col:1,line:90}}}}},title:"JS Packages/Components/Action Popover",component:l.Z,argTypes:{hideCloseButton:{control:{type:"boolean"}},title:{control:{type:"text"}},children:{control:{type:"text"}},step:{control:{type:"number"}},totalSteps:{control:{type:"number"}},buttonContent:{control:{type:"text"}},buttonDisabled:{control:{type:"boolean"}},buttonHref:{control:{type:"text"}},buttonExternalLink:{control:{type:"boolean"}},offset:{control:{type:"number"}},position:{control:{type:"select"},options:["top left","top right","top center","middle left","middle right","middle center","bottom left","bottom right","bottom center"]},noArrow:{control:{type:"boolean"}},onClose:{table:{disable:!0}},onClick:{table:{disable:!0}}}},_=S=>{const[P,k]=(0,o.useState)(null);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:w.wrapper,children:(0,j.jsx)("div",{ref:k,children:"\u2693"})}),(0,j.jsx)(l.Z,{...S,anchor:P})]})},v={hideCloseButton:!1,title:"Check this out",children:"Absque sudore et labore nullum opus perfectum est.",step:null,totalSteps:null,buttonContent:"Next",buttonDisabled:!1,offset:32,position:"top center",noArrow:!0,onClose:()=>(0,e.aD)("close")(),onClick:()=>(0,e.aD)("click")()},m=_.bind({});m.args=v;const b=_.bind({});b.args={...v,step:1,totalSteps:3},m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...(n=(u=m.parameters)==null?void 0:u.docs)==null?void 0:n.source}}},b.parameters={...b.parameters,docs:{...(r=b.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...(f=(y=b.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const g=["_default","WithSteps"]},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(x,i,t)=>{t.d(i,{ZP:()=>m});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=t.n(o),d=t("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),s=t("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),c=t("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),h=t("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function O(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const w=s.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,j=(0,d.Z)("svg",{target:"ea4tfvq2"})("width:",c.Z.spinnerSize,"px;height:",c.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",h.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),E={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},A=(0,d.Z)("circle",{target:"ea4tfvq1"})(E,";stroke:",h.D.gray[300],";"),p=(0,d.Z)("path",{target:"ea4tfvq0"})(E,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",w,";");function _({className:b,...g},a){return(0,e.createElement)(j,{className:l()("components-spinner",b),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...g,ref:a},(0,e.createElement)(A,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,e.createElement)(p,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const m=(0,e.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(x,i,t)=>{t.d(i,{Z:()=>h});var e=t("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const l="36px",d="12px",s={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:d,controlPaddingXLarge:`calc(${d} * 1.3334)`,controlPaddingXSmall:`calc(${d} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:l,controlHeightXSmall:`calc( ${l} * 0.6 )`,controlHeightSmall:`calc( ${l} * 0.8 )`,controlHeightLarge:`calc( ${l} * 1.2 )`,controlHeightXLarge:`calc( ${l} * 1.4 )`},c={toggleGroupControlBackgroundColor:s.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:s.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:s.controlBackgroundColor},h=Object.assign({},s,c,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,e.D)(2)}`,cardPaddingSmall:`${(0,e.D)(4)}`,cardPaddingMedium:`${(0,e.D)(4)} ${(0,e.D)(6)}`,cardPaddingLarge:`${(0,e.D)(6)} ${(0,e.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(x,i,t)=>{t.d(i,{Z:()=>l});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({icon:d,size:s=24,...c},h){return(0,e.cloneElement)(d,{width:s,height:s,...c,ref:h})}const l=(0,e.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(x,i,t)=>{t.d(i,{Z:()=>d});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,e.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(o.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../components/components/action-popover/index.tsx":(x,i,t)=>{t.d(i,{Z:()=>b});var e=t("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js"),o=t("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),d=t("../components/components/button/index.tsx"),s=t("../components/components/layout/use-breakpoint-match/index.ts"),c=t("../components/components/text/index.tsx"),h=t("../components/components/theme-provider/index.tsx"),O=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=t.n(O),j=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss"),E={};E.insert="head",E.singleton=!1;var A=w()(j.Z,E);const p=j.Z.locals||{};var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=o.__,m=({hideCloseButton:g=!1,title:a,children:u,step:n=null,totalSteps:r=null,buttonContent:y=null,buttonDisabled:f=!1,buttonHref:S=null,buttonExternalLink:P=!1,offset:k=32,onClose:L,onClick:I,...D})=>{const[T]=(0,s.Z)("sm");if(!a||!u||!y)return null;D.position||(D.position=T?"top center":"middle right");const R={...D,offset:k},C=Number.isFinite(n)&&Number.isFinite(r);let B=null;return C&&(B=(0,o.gB)(v("%1$d of %2$d","jetpack"),n,r)),(0,_.jsx)(e.ZP,{...R,children:(0,_.jsx)(h.ZP,{children:(0,_.jsxs)("div",{className:p.wrapper,children:[(0,_.jsxs)("div",{className:p.header,children:[(0,_.jsx)(c.ZP,{variant:"title-small",className:p.title,children:a}),!g&&(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(d.Z,{size:"small",variant:"tertiary","aria-label":"close",className:p["close-button"],icon:l.Z,iconSize:16,onClick:L})})]}),u,(0,_.jsxs)("div",{className:p.footer,children:[C&&(0,_.jsx)(c.ZP,{variant:"body",className:p.steps,children:B}),(0,_.jsx)(d.Z,{variant:"primary",className:p["action-button"],disabled:f,onClick:I,isExternalLink:P,href:S,children:y})]})]})})})};m.displayName="ActionPopover";const b=m;try{actionpopover.displayName="actionpopover",actionpopover.__docgenInfo={description:"",displayName:"actionpopover",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/action-popover/index.tsx#actionpopover"]={docgenInfo:actionpopover.__docgenInfo,name:"actionpopover",path:"../components/components/action-popover/index.tsx#actionpopover"})}catch(g){}},"../components/components/button/index.tsx":(x,i,t)=>{t.d(i,{Z:()=>a});var e=t("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),d=t("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),s=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),h=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),O=t.n(h),w=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=t.n(j),A=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),p={};p.insert="head",p.singleton=!1;var _=E()(A.Z,p);const v=A.Z.locals||{};var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=d.__,g=(0,w.forwardRef)((u,n)=>{var Z,M;const{children:r,variant:y="primary",size:f="normal",weight:S="bold",icon:P,iconSize:k,disabled:L,isDestructive:I,isLoading:D,isExternalLink:T,className:R,text:C,fullWidth:B,...z}=u,G=O()(v.button,R,{[v.normal]:f==="normal",[v.small]:f==="small",[v.icon]:!!P,[v.loading]:D,[v.regular]:S==="regular",[v["full-width"]]:B,[v["is-icon-button"]]:!!P&&!r});z.ref=n;const N=f==="normal"?20:16,X=T&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.Z,{size:N,icon:c.Z,className:v["external-icon"]}),(0,m.jsx)(e.Z,{as:"span",children:b("(opens in a new tab)","jetpack")})]}),K=T?"_blank":void 0,V=(r==null?void 0:r[0])&&r[0]!==null&&((M=(Z=r==null?void 0:r[0])==null?void 0:Z.props)==null?void 0:M.className)!=="components-tooltip";return(0,m.jsxs)(o.ZP,{target:K,variant:y,className:O()(G,{"has-text":!!P&&V}),icon:T?void 0:P,iconSize:k,disabled:L,"aria-disabled":L,isDestructive:I,text:C,...z,children:[D&&(0,m.jsx)(l.ZP,{}),(0,m.jsx)("span",{children:r}),X]})});g.displayName="Button";const a=g;try{g.displayName="Button",g.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:g.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(u){}},"../components/components/layout/use-breakpoint-match/index.ts":(x,i,t)=>{t.d(i,{Z:()=>E});var e=t("../../../node_modules/.pnpm/@wordpress+compose@6.29.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),o=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(o),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),s={};s.insert="head",s.singleton=!1;var c=l()(d.Z,s);const h=d.Z.locals||{},O=["sm","md","lg"],w=(A,p,_)=>{const v=O.indexOf(A),m=v+1,b=p.includes("=");let g=[];return p.startsWith("<")&&(g=O.slice(0,b?m:v)),p.startsWith(">")&&(g=O.slice(b?v:m)),g!=null&&g.length?g.some(a=>_[a]):_[A]},E=(A,p)=>{const _=Array.isArray(A)?A:[A],v=Array.isArray(p)?p:[p],[m,b,g]=O,a=(0,e.Z)(h[m]),u=(0,e.Z)(h[b]),n=(0,e.Z)(h[g]),r={sm:a,md:u,lg:n};return _.map((y,f)=>{const S=v[f];return S?w(y,S,r):r[y]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss":(x,i,t)=>{t.d(i,{Z:()=>c});var e=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(e),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(l),s=d()(o());s.push([x.id,".Q1oJzpv72A3qA3rxPWXH{height:100vh;display:flex;justify-content:center;align-items:center;background-color:var(--jp-gray-off)}",""]),s.locals={wrapper:"Q1oJzpv72A3qA3rxPWXH"};const c=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss":(x,i,t)=>{t.d(i,{Z:()=>c});var e=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(e),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(l),s=d()(o());s.push([x.id,".NidP1i2lvrpfvfeGChEt{width:304px;min-height:230px;padding:calc(var(--spacing-base)*3);display:flex;flex-direction:column}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef{display:flex;margin-bottom:calc(var(--spacing-base)*2);justify-content:space-between}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .ssAftE7JlTecvZzOCECK{max-width:226px}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf{height:calc(var(--spacing-base)*3);width:calc(var(--spacing-base)*3);min-width:unset;color:var(--jp-gray-90);background-color:var(--jp-white);flex-shrink:0}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf:hover:not(:focus){box-shadow:none}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx{height:calc(var(--spacing-base)*6);margin-top:calc(var(--spacing-base)*2);display:flex;justify-content:flex-end;align-items:flex-end;flex-grow:1}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .RWBK5tUndDBm422LHBob{color:var(--jp-gray-60);flex-grow:1;margin-bottom:var(--spacing-base)}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .AXWmqtwsKkCRskgrHGk3{flex-shrink:0}",""]),s.locals={wrapper:"NidP1i2lvrpfvfeGChEt",header:"UTIyZro4jdbYcbzEjmef",title:"ssAftE7JlTecvZzOCECK","close-button":"L2Dg1h8zaUSMGAfzPcGf",footer:"STbKUV67LZ2WuhX54mbx",steps:"RWBK5tUndDBm422LHBob","action-button":"AXWmqtwsKkCRskgrHGk3"};const c=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(x,i,t)=>{t.d(i,{Z:()=>c});var e=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(e),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(l),s=d()(o());s.push([x.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),s.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const c=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(x,i,t)=>{t.d(i,{Z:()=>c});var e=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(e),l=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(l),s=d()(o());s.push([x.id,"",""]),s.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const c=s}}]);})();
