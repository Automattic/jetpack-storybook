"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6002],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.4.7_storybook@8.4.7/node_modules/@storybook/addon-actions/dist/index.mjs":(g,c,e)=>{e.d(c,{XI:()=>h});var n=e("storybook/internal/preview-api"),r=e("storybook/internal/preview-errors"),a=e("@storybook/global"),t=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),o="actions",l="storybook/actions",u=null,f=`${l}/action-event`,S=null,R="$___storybook.isCyclic",E={depth:10,clearOnStoryChange:!0,limit:50},y=(d={})=>{Object.assign(E,d)},m=(d,_)=>{let s=Object.getPrototypeOf(d);return!s||_(s)?s:m(s,_)},v=d=>!!(typeof d=="object"&&d&&m(d,_=>/^Synthetic(?:Base)?Event$/.test(_.constructor.name))&&typeof d.persist=="function"),p=d=>{if(v(d)){let _=Object.create(d.constructor.prototype,Object.getOwnPropertyDescriptors(d));_.persist();let s=Object.getOwnPropertyDescriptor(_,"view"),b=s?.value;return typeof b=="object"&&b?.constructor.name==="Window"&&Object.defineProperty(_,"view",{...s,value:Object.create(b.constructor.prototype)}),_}return d},i=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,t.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function h(d,_={}){let s={...E,..._},b=function(...A){if(_.implicit){let x=("__STORYBOOK_PREVIEW__"in a.global?a.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(k=>k.phase==="playing"||k.phase==="rendering");if(x){let k=!window?.FEATURES?.disallowImplicitActionsInRenderV8,C=new r.ImplicitActionsDuringRendering({phase:x.phase,name:d,deprecated:k});if(k)console.warn(C);else throw C}}let w=n.addons.getChannel(),P=i(),B=5,D=A.map(p),I=A.length>1?D:D[0],O={id:P,count:0,data:{name:d,args:I},options:{...s,maxDepth:B+(s.depth||3),allowFunction:s.allowFunction||!1}};w.emit(f,O)};return b.isAction=!0,b.implicit=_.implicit,b}var j=(...d)=>{let _=E,s=d;s.length===1&&Array.isArray(s[0])&&([s]=s),s.length!==1&&typeof s[s.length-1]!="string"&&(_={...E,...s.pop()});let b=s[0];(s.length!==1||typeof b=="string")&&(b={},s.forEach(w=>{b[w]=w}));let A={};return Object.keys(b).forEach(w=>{A[w]=h(b[w],_)}),A}},"../components/components/action-popover/stories/index.stories.jsx":(g,c,e)=>{e.r(c),e.d(c,{WithSteps:()=>x,__namedExportsOrder:()=>k,_default:()=>O,default:()=>B});var n=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.4.7_storybook@8.4.7/node_modules/@storybook/addon-actions/dist/index.mjs"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js"),l=e("../components/components/button/index.tsx"),u=e("../components/components/layout/use-breakpoint-match/index.ts"),f=e("../components/components/text/index.tsx"),S=e("../components/components/theme-provider/index.tsx"),R=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(R),y=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss"),m={};m.insert="head",m.singleton=!1;var v=E()(y.A,m);const p=y.A.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=t.__,d=({hideCloseButton:C=!1,title:L,children:T,step:z=null,totalSteps:M=null,buttonContent:N=null,buttonDisabled:V=!1,buttonHref:K=null,buttonExternalLink:Z=!1,offset:J=32,onClose:X,onClick:Y,...U})=>{const[F]=(0,u.A)("sm");if(!L||!T||!N)return null;U.position||(U.position=F?"top center":"middle right");const H={...U,offset:J,onClose:X},G=Number.isFinite(z)&&Number.isFinite(M);let W=null;return G&&(W=(0,t.sprintf)(h("%1$d of %2$d","jetpack-components"),z,M)),(0,i.jsx)(a.Ay,{...H,children:(0,i.jsx)(S.Ay,{children:(0,i.jsxs)("div",{className:p.wrapper,children:[(0,i.jsxs)("div",{className:p.header,children:[(0,i.jsx)(f.Ay,{variant:"title-small",className:p.title,children:L}),!C&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.A,{size:"small",variant:"tertiary","aria-label":"close",className:p["close-button"],icon:o.A,iconSize:16,onClick:X})})]}),T,(0,i.jsxs)("div",{className:p.footer,children:[G&&(0,i.jsx)(f.Ay,{variant:"body",className:p.steps,children:W}),(0,i.jsx)(l.A,{variant:"primary",className:p["action-button"],disabled:V,onClick:Y,isExternalLink:Z,href:K,children:N})]})]})})})};try{actionpopover.displayName="actionpopover",actionpopover.__docgenInfo={description:"",displayName:"actionpopover",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/action-popover/index.tsx#actionpopover"]={docgenInfo:actionpopover.__docgenInfo,name:"actionpopover",path:"../components/components/action-popover/index.tsx#actionpopover"})}catch{}var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss"),s={};s.insert="head",s.singleton=!1;var b=E()(_.A,s);const A=_.A.locals||{};var w=`/**
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
`,P={_default:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}},WithSteps:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}}};const B={parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
/**
 * Internal dependencies
 */
import ActionPopover from '../index';
import styles from './styles.module.scss';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: styles.wrapper,
      children: /*#__PURE__*/_jsx("div", {
        ref: setAnchor,
        children: "\\u2693"
      })
    }), /*#__PURE__*/_jsx(ActionPopover, {
      ...args,
      anchor: anchor
    })]
  });
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
};`,locationsMap:{default:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}},"with-steps":{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}}}}},title:"JS Packages/Components/Action Popover",component:d,argTypes:{hideCloseButton:{control:{type:"boolean"}},title:{control:{type:"text"}},children:{control:{type:"text"}},step:{control:{type:"number"}},totalSteps:{control:{type:"number"}},buttonContent:{control:{type:"text"}},buttonDisabled:{control:{type:"boolean"}},buttonHref:{control:{type:"text"}},buttonExternalLink:{control:{type:"boolean"}},offset:{control:{type:"number"}},position:{control:{type:"select"},options:["top left","top right","top center","middle left","middle right","middle center","bottom left","bottom right","bottom center"]},noArrow:{control:{type:"boolean"}},onClose:{table:{disable:!0}},onClick:{table:{disable:!0}}}},D=C=>{const[L,T]=(0,r.useState)(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:A.wrapper,children:(0,i.jsx)("div",{ref:T,children:"\u2693"})}),(0,i.jsx)(d,{...C,anchor:L})]})},I={hideCloseButton:!1,title:"Check this out",children:"Absque sudore et labore nullum opus perfectum est.",step:null,totalSteps:null,buttonContent:"Next",buttonDisabled:!1,offset:32,position:"top center",noArrow:!0,onClose:()=>(0,n.XI)("close")(),onClick:()=>(0,n.XI)("click")()},O=D.bind({});O.args=I;const x=D.bind({});x.args={...I,step:1,totalSteps:3};const k=["_default","WithSteps"];O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...O.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...x.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(g,c,e)=>{e.d(c,{Ay:()=>i});var n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),r=e("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function l(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const u=(0,a.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,f=(0,r.A)("svg",{target:"ea4tfvq2"})("width:",t.A.spinnerSize,"px;height:",t.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",o.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),S={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},R=(0,r.A)("circle",{target:"ea4tfvq1"})(S,";stroke:",o.l.gray[300],";"),E=(0,r.A)("path",{target:"ea4tfvq0"})(S,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",u,";");var y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function v({className:h,...j},d){return(0,m.jsxs)(f,{className:(0,n.A)("components-spinner",h),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...j,ref:d,children:[(0,m.jsx)(R,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,m.jsx)(E,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const i=(0,y.forwardRef)(v)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(g,c,e)=>{e.d(c,{A:()=>a});var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function r({icon:t,size:o=24,...l},u){return(0,n.cloneElement)(t,{width:o,height:o,...l,ref:u})}const a=(0,n.forwardRef)(r)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(g,c,e)=>{e.d(c,{A:()=>t});var n=e("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,r.jsx)(n.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(n.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.17.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(g,c,e)=>{e.d(c,{Ay:()=>a});var n=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.17.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function r(t,o){if(t===o)return!0;if(t.length!==o.length)return!1;for(let l=0,u=t.length;l<u;l++)if(t[l]!==o[l])return!1;return!0}function a(t,o){if(t&&o){if(t.constructor===Object&&o.constructor===Object)return(0,n.A)(t,o);if(Array.isArray(t)&&Array.isArray(o))return r(t,o)}return t===o}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.17.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(g,c,e)=>{e.d(c,{A:()=>n});function n(r,a){if(r===a)return!0;const t=Object.keys(r),o=Object.keys(a);if(t.length!==o.length)return!1;let l=0;for(;l<t.length;){const u=t[l],f=r[u];if(f===void 0&&!a.hasOwnProperty(u)||f!==a[u])return!1;l++}return!0}},"../components/components/button/index.tsx":(g,c,e)=>{e.d(c,{A:()=>j});var n=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),S=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(S),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),y={};y.insert="head",y.singleton=!1;var m=R()(E.A,y);const v=E.A.locals||{};var p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i=t.__,h=(0,f.forwardRef)((d,_)=>{const{children:s,variant:b="primary",size:A="normal",weight:w="bold",icon:P,iconSize:B,disabled:D,isDestructive:I,isLoading:O,isExternalLink:x,className:k,text:C,fullWidth:L,...T}=d,z=(0,u.A)(v.button,k,{[v.normal]:A==="normal",[v.small]:A==="small",[v.icon]:!!P,[v.loading]:O,[v.regular]:w==="regular",[v["full-width"]]:L,[v["is-icon-button"]]:!!P&&!s});T.ref=_;const M=A==="normal"?20:16,N=x&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.A,{size:M,icon:l.A,className:v["external-icon"]}),(0,p.jsx)(n.A,{as:"span",children:i("(opens in a new tab)","jetpack-components")})]}),V=x?"_blank":void 0,K=s?.[0]&&s[0]!==null&&s?.[0]?.props?.className!=="components-tooltip";return(0,p.jsxs)(r.Ay,{target:V,variant:b,className:(0,u.A)(z,{"has-text":!!P&&K}),icon:x?void 0:P,iconSize:B,disabled:D,"aria-disabled":D,isDestructive:I,text:C,...T,children:[O&&(0,p.jsx)(a.Ay,{}),(0,p.jsx)("span",{children:s}),N]})});h.displayName="Button";const j=h;try{h.displayName="Button",h.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:h.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../components/components/layout/use-breakpoint-match/index.ts":(g,c,e)=>{e.d(c,{A:()=>E});var n=e("../../../node_modules/.pnpm/@wordpress+compose@7.17.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(r),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),o={};o.insert="head",o.singleton=!1;var l=a()(t.A,o);const u=t.A.locals||{},f=["sm","md","lg"],S=(y,m,v)=>{const p=f.indexOf(y),i=p+1,h=m.includes("=");let j=[];return m.startsWith("<")&&(j=f.slice(0,h?i:p)),m.startsWith(">")&&(j=f.slice(h?p:i)),j?.length?j.some(d=>v[d]):v[y]},E=(y,m)=>{const v=Array.isArray(y)?y:[y],p=Array.isArray(m)?m:[m],[i,h,j]=f,d=(0,n.A)(u[i]),_=(0,n.A)(u[h]),s=(0,n.A)(u[j]),b={sm:d,md:_,lg:s};return v.map((A,w)=>{const P=p[w];return P?S(A,P,b):b[A]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss":(g,c,e)=>{e.d(c,{A:()=>l});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(a),o=t()(r());o.push([g.id,".Q1oJzpv72A3qA3rxPWXH{height:100vh;display:flex;justify-content:center;align-items:center;background-color:var(--jp-gray-off)}",""]),o.locals={wrapper:"Q1oJzpv72A3qA3rxPWXH"};const l=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss":(g,c,e)=>{e.d(c,{A:()=>l});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(a),o=t()(r());o.push([g.id,".NidP1i2lvrpfvfeGChEt{width:304px;min-height:230px;padding:calc(var(--spacing-base)*3);display:flex;flex-direction:column}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef{display:flex;margin-bottom:calc(var(--spacing-base)*2);justify-content:space-between}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .ssAftE7JlTecvZzOCECK{max-width:226px}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf{height:calc(var(--spacing-base)*3);width:calc(var(--spacing-base)*3);min-width:unset;color:var(--jp-gray-90);background-color:var(--jp-white);flex-shrink:0}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf:hover:not(:focus){box-shadow:none}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx{height:calc(var(--spacing-base)*6);margin-top:calc(var(--spacing-base)*2);display:flex;justify-content:flex-end;align-items:flex-end;flex-grow:1}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .RWBK5tUndDBm422LHBob{color:var(--jp-gray-60);flex-grow:1;margin-bottom:var(--spacing-base)}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .AXWmqtwsKkCRskgrHGk3{flex-shrink:0}",""]),o.locals={wrapper:"NidP1i2lvrpfvfeGChEt",header:"UTIyZro4jdbYcbzEjmef",title:"ssAftE7JlTecvZzOCECK","close-button":"L2Dg1h8zaUSMGAfzPcGf",footer:"STbKUV67LZ2WuhX54mbx",steps:"RWBK5tUndDBm422LHBob","action-button":"AXWmqtwsKkCRskgrHGk3"};const l=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(g,c,e)=>{e.d(c,{A:()=>l});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(a),o=t()(r());o.push([g.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),o.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const l=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(g,c,e)=>{e.d(c,{A:()=>l});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(a),o=t()(r());o.push([g.id,"",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const l=o}}]);
