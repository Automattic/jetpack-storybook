"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7194],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(g,u,e)=>{e.d(u,{aD:()=>m});var r="actions",s="storybook/actions",l=`${s}/panel`,t=`${s}/action-event`,o=`${s}/action-clear`,c="$___storybook.isCyclic",_=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),f=e("@storybook/preview-api"),A={depth:10,clearOnStoryChange:!0,limit:50},x=(a={})=>{Object.assign(A,a)},h=(a,i)=>{let n=Object.getPrototypeOf(a);return!n||i(n)?n:h(n,i)},j=a=>!!(typeof a=="object"&&a&&h(a,i=>/^Synthetic(?:Base)?Event$/.test(i.constructor.name))&&typeof a.persist=="function"),p=a=>{if(j(a)){let i=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));i.persist();let n=Object.getOwnPropertyDescriptor(i,"view"),d=n==null?void 0:n.value;return typeof d=="object"&&(d==null?void 0:d.constructor.name)==="Window"&&Object.defineProperty(i,"view",{...n,value:Object.create(d.constructor.prototype)}),i}return a};function m(a,i={}){let n={...A,...i},d=function(...y){let v=f.addons.getChannel(),w=(0,_.Z)(),E=5,S=y.map(p),O=y.length>1?S:S[0],P={id:w,count:0,data:{name:a,args:O},options:{...n,maxDepth:E+(n.depth||3),allowFunction:n.allowFunction||!1}};v.emit(t,P)};return d.isAction=!0,d}var b=(...a)=>{let i=config,n=a;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(i={...config,...n.pop()});let d=n[0];(n.length!==1||typeof d=="string")&&(d={},n.forEach(v=>{d[v]=v}));let y={};return Object.keys(d).forEach(v=>{y[v]=action(d[v],i)}),y}},"../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(g,u,e)=>{e.d(u,{ZP:()=>a});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(s),t=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),o=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function f(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const A=o.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,x=(0,t.Z)("svg",{target:"ea4tfvq2"})("width:",c.Z.spinnerSize,"px;height:",c.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",_.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),h={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},j=(0,t.Z)("circle",{target:"ea4tfvq1"})(h,";stroke:",_.D.gray[300],";"),p=(0,t.Z)("path",{target:"ea4tfvq0"})(h,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",A,";");function m({className:i,...n},d){return(0,r.createElement)(x,{className:l()("components-spinner",i),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...n,ref:d},(0,r.createElement)(j,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,r.createElement)(p,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const a=(0,r.forwardRef)(m)},"../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(g,u,e)=>{e.d(u,{Z:()=>_});var r=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const l="36px",t="12px",o={controlSurfaceColor:s.D.white,controlTextActiveColor:s.D.theme.accent,controlPaddingX:t,controlPaddingXLarge:`calc(${t} * 1.3334)`,controlPaddingXSmall:`calc(${t} / 1.3334)`,controlBackgroundColor:s.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${s.D.theme.accent}`,controlDestructiveBorderColor:s.D.alert.red,controlHeight:l,controlHeightXSmall:`calc( ${l} * 0.6 )`,controlHeightSmall:`calc( ${l} * 0.8 )`,controlHeightLarge:`calc( ${l} * 1.2 )`,controlHeightXLarge:`calc( ${l} * 1.4 )`},c={toggleGroupControlBackgroundColor:o.controlBackgroundColor,toggleGroupControlBorderColor:s.D.ui.border,toggleGroupControlBackdropBackgroundColor:o.controlSurfaceColor,toggleGroupControlBackdropBorderColor:s.D.ui.border,toggleGroupControlButtonColorActive:o.controlBackgroundColor},_=Object.assign({},o,c,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,r.D)(2)}`,cardPaddingSmall:`${(0,r.D)(4)}`,cardPaddingMedium:`${(0,r.D)(4)} ${(0,r.D)(6)}`,cardPaddingLarge:`${(0,r.D)(6)} ${(0,r.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:s.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:s.D.white,surfaceColor:s.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(g,u,e)=>{e.d(u,{Z:()=>l});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s({icon:t,size:o=24,...c},_){return(0,r.cloneElement)(t,{width:o,height:o,...c,ref:_})}const l=(0,r.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(g,u,e)=>{e.d(u,{Z:()=>t});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.43.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,r.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(s.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.45.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(g,u,e)=>{e.d(u,{ZP:()=>l});var r=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.45.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function s(t,o){if(t===o)return!0;if(t.length!==o.length)return!1;for(let c=0,_=t.length;c<_;c++)if(t[c]!==o[c])return!1;return!0}function l(t,o){if(t&&o){if(t.constructor===Object&&o.constructor===Object)return(0,r.Z)(t,o);if(Array.isArray(t)&&Array.isArray(o))return s(t,o)}return t===o}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.45.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(g,u,e)=>{e.d(u,{Z:()=>r});function r(s,l){if(s===l)return!0;const t=Object.keys(s),o=Object.keys(l);if(t.length!==o.length)return!1;let c=0;for(;c<t.length;){const _=t[c],f=s[_];if(f===void 0&&!l.hasOwnProperty(_)||f!==l[_])return!1;c++}return!0}},"../components/components/action-popover/stories/index.stories.jsx":(g,u,e)=>{var d,y,v,w,E,S;e.r(u),e.d(u,{WithSteps:()=>i,__namedExportsOrder:()=>n,_default:()=>a,default:()=>p});var r=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../components/components/action-popover/index.tsx"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(t),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss"),_={};_.insert="head",_.singleton=!1;var f=o()(c.Z,_);const A=c.Z.locals||{};var x=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=`/**
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
`,j={_default:{startLoc:{col:17,line:88},endLoc:{col:1,line:97},startBody:{col:17,line:88},endBody:{col:1,line:97}},WithSteps:{startLoc:{col:17,line:88},endLoc:{col:1,line:97},startBody:{col:17,line:88},endBody:{col:1,line:97}}};const p={parameters:{storySource:{source:`/**
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
      control: {
        type: 'boolean'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    children: {
      control: {
        type: 'text'
      }
    },
    step: {
      control: {
        type: 'number'
      }
    },
    totalSteps: {
      control: {
        type: 'number'
      }
    },
    buttonContent: {
      control: {
        type: 'text'
      }
    },
    buttonDisabled: {
      control: {
        type: 'boolean'
      }
    },
    buttonHref: {
      control: {
        type: 'text'
      }
    },
    buttonExternalLink: {
      control: {
        type: 'boolean'
      }
    },
    offset: {
      control: {
        type: 'number'
      }
    },
    position: {
      control: {
        type: 'select'
      },
      options: ['top left', 'top right', 'top center', 'middle left', 'middle right', 'middle center', 'bottom left', 'bottom right', 'bottom center']
    },
    noArrow: {
      control: {
        type: 'boolean'
      }
    },
    onClose: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
};
const Template = args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
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
  onClose: () => action('close')(),
  onClick: () => action('click')()
};
export const _default = Template.bind({});
_default.args = defaultArgs;
export const WithSteps = Template.bind({});
WithSteps.args = {
  ...defaultArgs,
  step: 1,
  totalSteps: 3
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [anchor, setAnchor] = useState(null);\\n  return <>\\n            <div className={styles.wrapper}>\\n                <div ref={setAnchor}>\\u2693</div>\\n            </div>\\n\\n            <ActionPopover {...args} anchor={anchor} />\\n        </>;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};
WithSteps.parameters = {
  ...WithSteps.parameters,
  docs: {
    ...WithSteps.parameters?.docs,
    source: {
      originalSource: "args => {\\n  const [anchor, setAnchor] = useState(null);\\n  return <>\\n            <div className={styles.wrapper}>\\n                <div ref={setAnchor}>\\u2693</div>\\n            </div>\\n\\n            <ActionPopover {...args} anchor={anchor} />\\n        </>;\\n}",
      ...WithSteps.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:88},endLoc:{col:1,line:97},startBody:{col:17,line:88},endBody:{col:1,line:97}},"with-steps":{startLoc:{col:17,line:88},endLoc:{col:1,line:97},startBody:{col:17,line:88},endBody:{col:1,line:97}}}}},title:"JS Packages/Components/Action Popover",component:l.Z,argTypes:{hideCloseButton:{control:{type:"boolean"}},title:{control:{type:"text"}},children:{control:{type:"text"}},step:{control:{type:"number"}},totalSteps:{control:{type:"number"}},buttonContent:{control:{type:"text"}},buttonDisabled:{control:{type:"boolean"}},buttonHref:{control:{type:"text"}},buttonExternalLink:{control:{type:"boolean"}},offset:{control:{type:"number"}},position:{control:{type:"select"},options:["top left","top right","top center","middle left","middle right","middle center","bottom left","bottom right","bottom center"]},noArrow:{control:{type:"boolean"}},onClose:{table:{disable:!0}},onClick:{table:{disable:!0}}}},m=O=>{const[P,C]=(0,s.useState)(null);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:A.wrapper,children:(0,x.jsx)("div",{ref:C,children:"\u2693"})}),(0,x.jsx)(l.Z,{...O,anchor:P})]})},b={hideCloseButton:!1,title:"Check this out",children:"Absque sudore et labore nullum opus perfectum est.",step:null,totalSteps:null,buttonContent:"Next",buttonDisabled:!1,offset:32,position:"top center",noArrow:!0,onClose:()=>(0,r.aD)("close")(),onClick:()=>(0,r.aD)("click")()},a=m.bind({});a.args=b;const i=m.bind({});i.args={...b,step:1,totalSteps:3},a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}},i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const n=["_default","WithSteps"]},"../components/components/action-popover/index.tsx":(g,u,e)=>{e.d(u,{Z:()=>i});var r=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),t=e("../components/components/button/index.tsx"),o=e("../components/components/layout/use-breakpoint-match/index.ts"),c=e("../components/components/text/index.tsx"),_=e("../components/components/theme-provider/index.tsx"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(f),x=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss"),h={};h.insert="head",h.singleton=!1;var j=A()(x.Z,h);const p=x.Z.locals||{};var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=s.__,a=({hideCloseButton:n=!1,title:d,children:y,step:v=null,totalSteps:w=null,buttonContent:E=null,buttonDisabled:S=!1,buttonHref:O=null,buttonExternalLink:P=!1,offset:C=32,onClose:k,onClick:I,...D})=>{const[R]=(0,o.Z)("sm");if(!d||!y||!E)return null;D.position||(D.position=R?"top center":"middle right");const T={...D,offset:C},B=Number.isFinite(v)&&Number.isFinite(w);let L=null;return B&&(L=(0,s.gB)(b("%1$d of %2$d","jetpack"),v,w)),(0,m.jsx)(r.ZP,{...T,children:(0,m.jsx)(_.ZP,{children:(0,m.jsxs)("div",{className:p.wrapper,children:[(0,m.jsxs)("div",{className:p.header,children:[(0,m.jsx)(c.ZP,{variant:"title-small",className:p.title,children:d}),!n&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(t.Z,{size:"small",variant:"tertiary","aria-label":"close",className:p["close-button"],icon:l.Z,iconSize:16,onClick:k})})]}),y,(0,m.jsxs)("div",{className:p.footer,children:[B&&(0,m.jsx)(c.ZP,{variant:"body",className:p.steps,children:L}),(0,m.jsx)(t.Z,{variant:"primary",className:p["action-button"],disabled:S,onClick:I,isExternalLink:P,href:O,children:E})]})]})})})};a.displayName="ActionPopover";const i=a;try{actionpopover.displayName="actionpopover",actionpopover.__docgenInfo={description:"",displayName:"actionpopover",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/action-popover/index.tsx#actionpopover"]={docgenInfo:actionpopover.__docgenInfo,name:"actionpopover",path:"../components/components/action-popover/index.tsx#actionpopover"})}catch(n){}},"../components/components/button/index.tsx":(g,u,e)=>{e.d(u,{Z:()=>a});var r=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=e.n(o),_=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(f),x=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),h={};h.insert="head",h.singleton=!1;var j=A()(x.Z,h);const p=x.Z.locals||{};var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=(0,_.forwardRef)((i,n)=>{var z,Z;const{children:d,variant:y="primary",size:v="normal",weight:w="bold",icon:E,iconSize:S,disabled:O,isDestructive:P,isLoading:C,isExternalLink:k,className:I,text:D,fullWidth:R,...T}=i,B=c()(p.button,I,{[p.normal]:v==="normal",[p.small]:v==="small",[p.icon]:!!E,[p.loading]:C,[p.regular]:w==="regular",[p["full-width"]]:R,[p["is-icon-button"]]:!!E&&!d});T.ref=n;const L=v==="normal"?20:16,M=k&&(0,m.jsx)(l.Z,{size:L,icon:t.Z,className:p["external-icon"]}),N=k?"_blank":void 0,G=(d==null?void 0:d[0])&&d[0]!==null&&((Z=(z=d==null?void 0:d[0])==null?void 0:z.props)==null?void 0:Z.className)!=="components-tooltip";return(0,m.jsxs)(r.ZP,{target:N,variant:y,className:c()(B,{"has-text":!!E&&G}),icon:k?void 0:E,iconSize:S,disabled:O,"aria-disabled":O,isDestructive:P,text:D,...T,children:[C&&(0,m.jsx)(s.ZP,{}),(0,m.jsx)("span",{children:d}),M]})});b.displayName="Button";const a=b;try{b.displayName="Button",b.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:b.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(i){}},"../components/components/layout/use-breakpoint-match/index.ts":(g,u,e)=>{e.d(u,{Z:()=>h});var r=e("../../../node_modules/.pnpm/@wordpress+compose@6.22.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(s),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),o={};o.insert="head",o.singleton=!1;var c=l()(t.Z,o);const _=t.Z.locals||{},f=["sm","md","lg"],A=(j,p,m)=>{const b=f.indexOf(j),a=b+1,i=p.includes("=");let n=[];return p.startsWith("<")&&(n=f.slice(0,i?a:b)),p.startsWith(">")&&(n=f.slice(i?b:a)),n!=null&&n.length?n.some(d=>m[d]):m[j]},h=(j,p)=>{const m=Array.isArray(j)?j:[j],b=Array.isArray(p)?p:[p],[a,i,n]=f,d=(0,r.Z)(_[a]),y=(0,r.Z)(_[i]),v=(0,r.Z)(_[n]),w={sm:d,md:y,lg:v};return m.map((E,S)=>{const O=b[S];return O?A(E,O,w):w[E]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss":(g,u,e)=>{e.d(u,{Z:()=>c});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(l),o=t()(s());o.push([g.id,".Q1oJzpv72A3qA3rxPWXH{height:100vh;display:flex;justify-content:center;align-items:center;background-color:var(--jp-gray-off)}",""]),o.locals={wrapper:"Q1oJzpv72A3qA3rxPWXH"};const c=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss":(g,u,e)=>{e.d(u,{Z:()=>c});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(l),o=t()(s());o.push([g.id,".NidP1i2lvrpfvfeGChEt{width:304px;min-height:230px;padding:calc(var(--spacing-base)*3);display:flex;flex-direction:column}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef{display:flex;margin-bottom:calc(var(--spacing-base)*2);justify-content:space-between}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .ssAftE7JlTecvZzOCECK{max-width:226px}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf{height:calc(var(--spacing-base)*3);width:calc(var(--spacing-base)*3);min-width:unset;color:var(--jp-gray-90);background-color:var(--jp-white);flex-shrink:0}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf:hover:not(:focus){box-shadow:none}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx{height:calc(var(--spacing-base)*6);margin-top:calc(var(--spacing-base)*2);display:flex;justify-content:flex-end;align-items:flex-end;flex-grow:1}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .RWBK5tUndDBm422LHBob{color:var(--jp-gray-60);flex-grow:1;margin-bottom:var(--spacing-base)}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .AXWmqtwsKkCRskgrHGk3{flex-shrink:0}",""]),o.locals={wrapper:"NidP1i2lvrpfvfeGChEt",header:"UTIyZro4jdbYcbzEjmef",title:"ssAftE7JlTecvZzOCECK","close-button":"L2Dg1h8zaUSMGAfzPcGf",footer:"STbKUV67LZ2WuhX54mbx",steps:"RWBK5tUndDBm422LHBob","action-button":"AXWmqtwsKkCRskgrHGk3"};const c=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(g,u,e)=>{e.d(u,{Z:()=>c});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(l),o=t()(s());o.push([g.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),o.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const c=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(g,u,e)=>{e.d(u,{Z:()=>c});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(l),o=t()(s());o.push([g.id,"",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const c=o}}]);})();
