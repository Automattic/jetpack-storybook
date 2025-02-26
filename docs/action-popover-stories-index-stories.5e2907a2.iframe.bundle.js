"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6002],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs":(g,c,e)=>{e.d(c,{XI:()=>b});var r=e("storybook/internal/preview-api"),d=e("storybook/internal/preview-errors"),p=e("@storybook/global"),a=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),t="actions",v="storybook/actions",A=null,f=`${v}/action-event`,S=null,R="$___storybook.isCyclic",E={depth:10,clearOnStoryChange:!0,limit:50},h=(s={})=>{Object.assign(E,s)},_=(s,i)=>{let o=Object.getPrototypeOf(s);return!o||i(o)?o:_(o,i)},m=s=>!!(typeof s=="object"&&s&&_(s,i=>/^Synthetic(?:Base)?Event$/.test(i.constructor.name))&&typeof s.persist=="function"),l=s=>{if(m(s)){let i=Object.create(s.constructor.prototype,Object.getOwnPropertyDescriptors(s));i.persist();let o=Object.getOwnPropertyDescriptor(i,"view"),u=o?.value;return typeof u=="object"&&u?.constructor.name==="Window"&&Object.defineProperty(i,"view",{...o,value:Object.create(u.constructor.prototype)}),i}return s},n=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,a.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(s,i={}){let o={...E,...i},u=function(...y){if(i.implicit){let x=("__STORYBOOK_PREVIEW__"in p.global?p.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(k=>k.phase==="playing"||k.phase==="rendering");if(x){let k=!window?.FEATURES?.disallowImplicitActionsInRenderV8,C=new d.ImplicitActionsDuringRendering({phase:x.phase,name:s,deprecated:k});if(k)console.warn(C);else throw C}}let w=r.addons.getChannel(),P=n(),B=5,D=y.map(l),I=y.length>1?D:D[0],O={id:P,count:0,data:{name:s,args:I},options:{...o,maxDepth:B+(o.depth||3),allowFunction:o.allowFunction||!1}};w.emit(f,O)};return u.isAction=!0,u.implicit=i.implicit,u}var j=(...s)=>{let i=E,o=s;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(i={...E,...o.pop()});let u=o[0];(o.length!==1||typeof u=="string")&&(u={},o.forEach(w=>{u[w]=w}));let y={};return Object.keys(u).forEach(w=>{y[w]=b(u[w],i)}),y}},"../components/components/action-popover/stories/index.stories.jsx":(g,c,e)=>{e.r(c),e.d(c,{WithSteps:()=>x,__namedExportsOrder:()=>k,_default:()=>O,default:()=>B});var r=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js"),v=e("../components/components/button/index.tsx"),A=e("../components/components/layout/use-breakpoint-match/index.ts"),f=e("../components/components/text/index.tsx"),S=e("../components/components/theme-provider/index.tsx"),R=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(R),h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss"),_={};_.insert="head",_.singleton=!1;var m=E()(h.A,_);const l=h.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=a.__,s=({hideCloseButton:C=!1,title:L,children:T,step:z=null,totalSteps:M=null,buttonContent:N=null,buttonDisabled:V=!1,buttonHref:K=null,buttonExternalLink:Z=!1,offset:J=32,onClose:X,onClick:Y,...U})=>{const[F]=(0,A.A)("sm");if(!L||!T||!N)return null;U.position||(U.position=F?"top center":"middle right");const H={...U,offset:J,onClose:X},G=Number.isFinite(z)&&Number.isFinite(M);let W=null;return G&&(W=(0,a.nv)(b("%1$d of %2$d","jetpack-components"),z,M)),(0,n.jsx)(p.Ay,{...H,children:(0,n.jsx)(S.Ay,{children:(0,n.jsxs)("div",{className:l.wrapper,children:[(0,n.jsxs)("div",{className:l.header,children:[(0,n.jsx)(f.Ay,{variant:"title-small",className:l.title,children:L}),!C&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(v.A,{size:"small",variant:"tertiary","aria-label":"close",className:l["close-button"],icon:t.A,iconSize:16,onClick:X})})]}),T,(0,n.jsxs)("div",{className:l.footer,children:[G&&(0,n.jsx)(f.Ay,{variant:"body",className:l.steps,children:W}),(0,n.jsx)(v.A,{variant:"primary",className:l["action-button"],disabled:V,onClick:Y,isExternalLink:Z,href:K,children:N})]})]})})})};try{actionpopover.displayName="actionpopover",actionpopover.__docgenInfo={description:"",displayName:"actionpopover",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/action-popover/index.tsx#actionpopover"]={docgenInfo:actionpopover.__docgenInfo,name:"actionpopover",path:"../components/components/action-popover/index.tsx#actionpopover"})}catch{}var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss"),o={};o.insert="head",o.singleton=!1;var u=E()(i.A,o);const y=i.A.locals||{};var w=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
/**
 * Internal dependencies
 */
import ActionPopover from '../index.js';
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
import ActionPopover from '../index.js';
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
};`,locationsMap:{default:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}},"with-steps":{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}}}}},title:"JS Packages/Components/Action Popover",component:s,argTypes:{hideCloseButton:{control:{type:"boolean"}},title:{control:{type:"text"}},children:{control:{type:"text"}},step:{control:{type:"number"}},totalSteps:{control:{type:"number"}},buttonContent:{control:{type:"text"}},buttonDisabled:{control:{type:"boolean"}},buttonHref:{control:{type:"text"}},buttonExternalLink:{control:{type:"boolean"}},offset:{control:{type:"number"}},position:{control:{type:"select"},options:["top left","top right","top center","middle left","middle right","middle center","bottom left","bottom right","bottom center"]},noArrow:{control:{type:"boolean"}},onClose:{table:{disable:!0}},onClick:{table:{disable:!0}}}},D=C=>{const[L,T]=(0,d.useState)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:y.wrapper,children:(0,n.jsx)("div",{ref:T,children:"\u2693"})}),(0,n.jsx)(s,{...C,anchor:L})]})},I={hideCloseButton:!1,title:"Check this out",children:"Absque sudore et labore nullum opus perfectum est.",step:null,totalSteps:null,buttonContent:"Next",buttonDisabled:!1,offset:32,position:"top center",noArrow:!0,onClose:()=>(0,r.XI)("close")(),onClick:()=>(0,r.XI)("click")()},O=D.bind({});O.args=I;const x=D.bind({});x.args={...I,step:1,totalSteps:3};const k=["_default","WithSteps"];O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
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
}`,...x.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(g,c,e)=>{e.d(c,{Ay:()=>n});var r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),p=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function v(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const A=(0,p.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,f=(0,d.A)("svg",{target:"ea4tfvq2"})("width:",a.A.spinnerSize,"px;height:",a.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",t.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),S={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},R=(0,d.A)("circle",{target:"ea4tfvq1"})(S,";stroke:",t.l.gray[300],";"),E=(0,d.A)("path",{target:"ea4tfvq0"})(S,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",A,";");var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function m({className:b,...j},s){return(0,_.jsxs)(f,{className:(0,r.A)("components-spinner",b),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...j,ref:s,children:[(0,_.jsx)(R,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,_.jsx)(E,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const n=(0,h.forwardRef)(m)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(g,c,e)=>{e.d(c,{A:()=>p});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d({icon:a,size:t=24,...v},A){return(0,r.cloneElement)(a,{width:t,height:t,...v,ref:A})}const p=(0,r.forwardRef)(d)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(g,c,e)=>{e.d(c,{A:()=>a});var r=e("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=(0,d.jsx)(r.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(r.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../components/components/button/index.tsx":(g,c,e)=>{e.d(c,{A:()=>j});var r=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),v=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),A=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),S=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(S),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),h={};h.insert="head",h.singleton=!1;var _=R()(E.A,h);const m=E.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=a.__,b=(0,f.forwardRef)((s,i)=>{const{children:o,variant:u="primary",size:y="normal",weight:w="bold",icon:P,iconSize:B,disabled:D,isDestructive:I,isLoading:O,isExternalLink:x,className:k,text:C,fullWidth:L,...T}=s,z=(0,A.A)(m.button,k,{[m.normal]:y==="normal",[m.small]:y==="small",[m.icon]:!!P,[m.loading]:O,[m.regular]:w==="regular",[m["full-width"]]:L,[m["is-icon-button"]]:!!P&&!o});T.ref=i;const M=y==="normal"?20:16,N=x&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{size:M,icon:v.A,className:m["external-icon"]}),(0,l.jsx)(r.A,{as:"span",children:n("(opens in a new tab)","jetpack-components")})]}),V=x?"_blank":void 0,K=o?.[0]&&o[0]!==null&&o?.[0]?.props?.className!=="components-tooltip";return(0,l.jsxs)(d.Ay,{target:V,variant:u,className:(0,A.A)(z,{"has-text":!!P&&K}),icon:x?void 0:P,iconSize:B,disabled:D,"aria-disabled":D,isDestructive:I,text:C,...T,children:[O&&(0,l.jsx)(p.Ay,{}),(0,l.jsx)("span",{children:o}),N]})});b.displayName="Button";const j=b;try{b.displayName="Button",b.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:b.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../components/components/layout/use-breakpoint-match/index.ts":(g,c,e)=>{e.d(c,{A:()=>E});var r=e("../../../node_modules/.pnpm/@wordpress+compose@7.17.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(d),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),t={};t.insert="head",t.singleton=!1;var v=p()(a.A,t);const A=a.A.locals||{},f=["sm","md","lg"],S=(h,_,m)=>{const l=f.indexOf(h),n=l+1,b=_.includes("=");let j=[];return _.startsWith("<")&&(j=f.slice(0,b?n:l)),_.startsWith(">")&&(j=f.slice(b?l:n)),j?.length?j.some(s=>m[s]):m[h]},E=(h,_)=>{const m=Array.isArray(h)?h:[h],l=Array.isArray(_)?_:[_],[n,b,j]=f,s=(0,r.A)(A[n]),i=(0,r.A)(A[b]),o=(0,r.A)(A[j]),u={sm:s,md:i,lg:o};return m.map((y,w)=>{const P=l[w];return P?S(y,P,u):u[y]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss":(g,c,e)=>{e.d(c,{A:()=>v});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(r),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),t=a()(d());t.push([g.id,".Q1oJzpv72A3qA3rxPWXH{height:100vh;display:flex;justify-content:center;align-items:center;background-color:var(--jp-gray-off)}",""]),t.locals={wrapper:"Q1oJzpv72A3qA3rxPWXH"};const v=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss":(g,c,e)=>{e.d(c,{A:()=>v});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(r),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),t=a()(d());t.push([g.id,".NidP1i2lvrpfvfeGChEt{width:304px;min-height:230px;padding:calc(var(--spacing-base)*3);display:flex;flex-direction:column}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef{display:flex;margin-bottom:calc(var(--spacing-base)*2);justify-content:space-between}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .ssAftE7JlTecvZzOCECK{max-width:226px}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf{height:calc(var(--spacing-base)*3);width:calc(var(--spacing-base)*3);min-width:unset;color:var(--jp-gray-90);background-color:var(--jp-white);flex-shrink:0}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf:hover:not(:focus){box-shadow:none}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx{height:calc(var(--spacing-base)*6);margin-top:calc(var(--spacing-base)*2);display:flex;justify-content:flex-end;align-items:flex-end;flex-grow:1}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .RWBK5tUndDBm422LHBob{color:var(--jp-gray-60);flex-grow:1;margin-bottom:var(--spacing-base)}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .AXWmqtwsKkCRskgrHGk3{flex-shrink:0}",""]),t.locals={wrapper:"NidP1i2lvrpfvfeGChEt",header:"UTIyZro4jdbYcbzEjmef",title:"ssAftE7JlTecvZzOCECK","close-button":"L2Dg1h8zaUSMGAfzPcGf",footer:"STbKUV67LZ2WuhX54mbx",steps:"RWBK5tUndDBm422LHBob","action-button":"AXWmqtwsKkCRskgrHGk3"};const v=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(g,c,e)=>{e.d(c,{A:()=>v});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(r),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),t=a()(d());t.push([g.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),t.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const v=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(g,c,e)=>{e.d(c,{A:()=>v});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(r),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),t=a()(d());t.push([g.id,"",""]),t.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const v=t}}]);
