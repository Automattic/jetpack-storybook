"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6002],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(E,u,e)=>{e.d(u,{XI:()=>h});var a=e("storybook/internal/preview-api"),c=e("storybook/internal/preview-errors"),p=e("@storybook/global"),_=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),n=Object.defineProperty,b=(o,s)=>{for(var t in s)n(o,t,{get:s[t],enumerable:!0})},j="actions",O="storybook/actions",R=null,D=`${O}/action-event`,P=null,x="$___storybook.isCyclic",v={depth:10,clearOnStoryChange:!0,limit:50},g=(o={})=>{Object.assign(v,o)},l=(o,s)=>{let t=Object.getPrototypeOf(o);return!t||s(t)?t:l(t,s)},r=o=>!!(typeof o=="object"&&o&&l(o,s=>/^Synthetic(?:Base)?Event$/.test(s.constructor.name))&&typeof o.persist=="function"),f=o=>{if(r(o)){let s=Object.create(o.constructor.prototype,Object.getOwnPropertyDescriptors(o));s.persist();let t=Object.getOwnPropertyDescriptor(s,"view"),d=t?.value;return typeof d=="object"&&d?.constructor.name==="Window"&&Object.defineProperty(s,"view",{...t,value:Object.create(d.constructor.prototype)}),s}return o},w=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,_.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function h(o,s={}){let t={...v,...s},d=function(...m){if(s.implicit){let X=("__STORYBOOK_PREVIEW__"in p.global?p.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(I=>I.phase==="playing"||I.phase==="rendering");if(X){let I=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,G=new c.ImplicitActionsDuringRendering({phase:X.phase,name:o,deprecated:I});if(I)console.warn(G);else throw G}}let i=a.addons.getChannel(),y=w(),T=5,z=m.map(f),U=m.length>1?z:z[0],W={id:y,count:0,data:{name:o,args:U},options:{...t,maxDepth:T+(t.depth||3),allowFunction:t.allowFunction||!1}};i.emit(D,W)};return d.isAction=!0,d.implicit=s.implicit,d}var B=(...o)=>{let s=v,t=o;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(s={...v,...t.pop()});let d=t[0];(t.length!==1||typeof d=="string")&&(d={},t.forEach(i=>{d[i]=i}));let m={};return Object.keys(d).forEach(i=>{m[i]=h(d[i],s)}),m},A={};b(A,{argsEnhancers:()=>C,loaders:()=>V});var L=(o,s)=>typeof s[o]>"u"&&!(o in s),S=o=>{let{initialArgs:s,argTypes:t,id:d,parameters:{actions:m}}=o;if(!m||m.disable||!m.argTypesRegex||!t)return{};let i=new RegExp(m.argTypesRegex);return Object.entries(t).filter(([y])=>!!i.test(y)).reduce((y,[T,z])=>(L(T,s)&&(y[T]=h(T,{implicit:!0,id:d})),y),{})},N=o=>{let{initialArgs:s,argTypes:t,parameters:{actions:d}}=o;return d?.disable||!t?{}:Object.entries(t).filter(([m,i])=>!!i.action).reduce((m,[i,y])=>(L(i,s)&&(m[i]=h(typeof y.action=="string"?y.action:i)),m),{})},C=[N,S],K=!1,M=o=>{let{parameters:{actions:s}}=o;if(!s?.disable&&!K&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in p.global&&typeof p.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=p.global.__STORYBOOK_TEST_ON_MOCK_CALL__;t((d,m)=>{let i=d.getMockName();i!=="spy"&&(!/^next\/.*::/.test(i)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(y=>i.startsWith(y)))&&h(i)(m)}),K=!0}},V=[M],k=()=>definePreview(A)},"../components/components/action-popover/stories/index.stories.jsx":(E,u,e)=>{e.r(u),e.d(u,{WithSteps:()=>o,__namedExportsOrder:()=>s,_default:()=>k,default:()=>K});var a=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js"),b=e("../components/components/button/index.tsx"),j=e("../components/components/layout/use-breakpoint-match/index.ts"),O=e("../components/components/text/index.tsx"),R=e("../components/components/theme-provider/index.tsx"),D=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(D),x=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss"),v={};v.insert="head",v.singleton=!1;var g=P()(x.A,v);const l=x.A.locals||{};var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=_.__,h=({hideCloseButton:t=!1,title:d,children:m,step:i=null,totalSteps:y=null,buttonContent:T=null,buttonDisabled:z=!1,buttonHref:U=null,buttonExternalLink:W=!1,offset:X=32,onClose:I,onClick:G,...Z})=>{const[F]=(0,j.A)("sm");if(!d||!m||!T)return null;Z.position||(Z.position=F?"top center":"middle right");const H={...Z,offset:X,onClose:I},J=Number.isFinite(i)&&Number.isFinite(y);let Y=null;return J&&(Y=(0,_.sprintf)(f("%1$d of %2$d","jetpack-components"),i,y)),(0,r.jsx)(p.Ay,{...H,children:(0,r.jsx)(R.Ay,{children:(0,r.jsxs)("div",{className:l.wrapper,children:[(0,r.jsxs)("div",{className:l.header,children:[(0,r.jsx)(O.Ay,{variant:"title-small",className:l.title,children:d}),!t&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.A,{size:"small",variant:"tertiary","aria-label":"close",className:l["close-button"],icon:n.A,iconSize:16,onClick:I})})]}),m,(0,r.jsxs)("div",{className:l.footer,children:[J&&(0,r.jsx)(O.Ay,{variant:"body",className:l.steps,children:Y}),(0,r.jsx)(b.A,{variant:"primary",className:l["action-button"],disabled:z,onClick:G,isExternalLink:W,href:U,children:T})]})]})})})};try{actionpopover.displayName="actionpopover",actionpopover.__docgenInfo={description:"",displayName:"actionpopover",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/action-popover/index.tsx#actionpopover"]={docgenInfo:actionpopover.__docgenInfo,name:"actionpopover",path:"../components/components/action-popover/index.tsx#actionpopover"})}catch{}var B=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss"),A={};A.insert="head",A.singleton=!1;var L=P()(B.A,A);const S=B.A.locals||{};var N=`/**
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
`,C={_default:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}},WithSteps:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}}};const K={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}},"with-steps":{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}}}}},title:"JS Packages/Components/Action Popover",component:h,argTypes:{hideCloseButton:{control:{type:"boolean"}},title:{control:{type:"text"}},children:{control:{type:"text"}},step:{control:{type:"number"}},totalSteps:{control:{type:"number"}},buttonContent:{control:{type:"text"}},buttonDisabled:{control:{type:"boolean"}},buttonHref:{control:{type:"text"}},buttonExternalLink:{control:{type:"boolean"}},offset:{control:{type:"number"}},position:{control:{type:"select"},options:["top left","top right","top center","middle left","middle right","middle center","bottom left","bottom right","bottom center"]},noArrow:{control:{type:"boolean"}},onClose:{table:{disable:!0}},onClick:{table:{disable:!0}}}},M=t=>{const[d,m]=(0,c.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:S.wrapper,children:(0,r.jsx)("div",{ref:m,children:"\u2693"})}),(0,r.jsx)(h,{...t,anchor:d})]})},V={hideCloseButton:!1,title:"Check this out",children:"Absque sudore et labore nullum opus perfectum est.",step:null,totalSteps:null,buttonContent:"Next",buttonDisabled:!1,offset:32,position:"top center",noArrow:!0,onClose:()=>(0,a.XI)("close")(),onClick:()=>(0,a.XI)("click")()},k=M.bind({});k.args=V;const o=M.bind({});o.args={...V,step:1,totalSteps:3};const s=["_default","WithSteps"];k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...k.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...o.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(E,u,e)=>{e.d(u,{Ay:()=>r});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=e("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),p=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function b(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const j=(0,p.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,O=(0,c.A)("svg",{target:"ea4tfvq2"})("width:",_.A.spinnerSize,"px;height:",_.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",n.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),R={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},D=(0,c.A)("circle",{target:"ea4tfvq1"})(R,";stroke:",n.l.gray[300],";"),P=(0,c.A)("path",{target:"ea4tfvq0"})(R,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",j,";");var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function g({className:f,...w},h){return(0,v.jsxs)(O,{className:(0,a.A)("components-spinner",f),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...w,ref:h,children:[(0,v.jsx)(D,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,v.jsx)(P,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const r=(0,x.forwardRef)(g)},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(E,u,e)=>{e.d(u,{A:()=>p});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function c({icon:_,size:n=24,...b},j){return(0,a.cloneElement)(_,{width:n,height:n,...b,ref:j})}const p=(0,a.forwardRef)(c)},"../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(E,u,e)=>{e.d(u,{A:()=>_});var a=e("../../../node_modules/.pnpm/@wordpress+primitives@4.19.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=(0,c.jsx)(a.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,c.jsx)(a.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../components/components/button/index.tsx":(E,u,e)=>{e.d(u,{A:()=>w});var a=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@29.5.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@10.19.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),j=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),O=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(R),P=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),x={};x.insert="head",x.singleton=!1;var v=D()(P.A,x);const g=P.A.locals||{};var l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=_.__,f=(0,O.forwardRef)((h,B)=>{const{children:A,variant:L="primary",size:S="normal",weight:N="bold",icon:C,iconSize:K,disabled:M,isDestructive:V,isLoading:k,isExternalLink:o,className:s,text:t,fullWidth:d,...m}=h,i=(0,j.A)(g.button,s,{[g.normal]:S==="normal",[g.small]:S==="small",[g.icon]:!!C,[g.loading]:k,[g.regular]:N==="regular",[g["full-width"]]:d,[g["is-icon-button"]]:!!C&&!A});m.ref=B;const y=S==="normal"?20:16,T=o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{size:y,icon:b.A,className:g["external-icon"]}),(0,l.jsx)(a.A,{as:"span",children:r("(opens in a new tab)","jetpack-components")})]}),z=o?"_blank":void 0,U=A?.[0]&&A[0]!==null&&A?.[0]?.props?.className!=="components-tooltip";return(0,l.jsxs)(c.Ay,{target:z,variant:L,className:(0,j.A)(i,{"has-text":!!C&&U}),icon:o?void 0:C,iconSize:K,disabled:M,"aria-disabled":M,isDestructive:V,text:t,...m,children:[k&&(0,l.jsx)(p.Ay,{}),(0,l.jsx)("span",{children:A}),T]})});f.displayName="Button";const w=f;try{f.displayName="Button",f.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:f.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../components/components/layout/use-breakpoint-match/index.ts":(E,u,e)=>{e.d(u,{A:()=>P});var a=e("../../../node_modules/.pnpm/@wordpress+compose@7.19.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(c),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),n={};n.insert="head",n.singleton=!1;var b=p()(_.A,n);const j=_.A.locals||{},O=["sm","md","lg"],R=(x,v,g)=>{const l=O.indexOf(x),r=l+1,f=v.includes("=");let w=[];return v.startsWith("<")&&(w=O.slice(0,f?r:l)),v.startsWith(">")&&(w=O.slice(f?l:r)),w?.length?w.some(h=>g[h]):g[x]},P=(x,v)=>{const g=Array.isArray(x)?x:[x],l=Array.isArray(v)?v:[v],[r,f,w]=O,h=(0,a.A)(j[r]),B=(0,a.A)(j[f]),A=(0,a.A)(j[w]),L={sm:h,md:B,lg:A};return g.map((S,N)=>{const C=l[N];return C?R(S,C,L):L[S]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss":(E,u,e)=>{e.d(u,{A:()=>b});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(p),n=_()(c());n.push([E.id,".Q1oJzpv72A3qA3rxPWXH{height:100vh;display:flex;justify-content:center;align-items:center;background-color:var(--jp-gray-off)}",""]),n.locals={wrapper:"Q1oJzpv72A3qA3rxPWXH"};const b=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss":(E,u,e)=>{e.d(u,{A:()=>b});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(p),n=_()(c());n.push([E.id,".NidP1i2lvrpfvfeGChEt{width:304px;min-height:230px;padding:calc(var(--spacing-base)*3);display:flex;flex-direction:column}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef{display:flex;margin-bottom:calc(var(--spacing-base)*2);justify-content:space-between}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .ssAftE7JlTecvZzOCECK{max-width:226px}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf{height:calc(var(--spacing-base)*3);width:calc(var(--spacing-base)*3);min-width:unset;color:var(--jp-gray-90);background-color:var(--jp-white);flex-shrink:0}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf:hover:not(:focus){box-shadow:none}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx{height:calc(var(--spacing-base)*6);margin-top:calc(var(--spacing-base)*2);display:flex;justify-content:flex-end;align-items:flex-end;flex-grow:1}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .RWBK5tUndDBm422LHBob{color:var(--jp-gray-60);flex-grow:1;margin-bottom:var(--spacing-base)}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .AXWmqtwsKkCRskgrHGk3{flex-shrink:0}",""]),n.locals={wrapper:"NidP1i2lvrpfvfeGChEt",header:"UTIyZro4jdbYcbzEjmef",title:"ssAftE7JlTecvZzOCECK","close-button":"L2Dg1h8zaUSMGAfzPcGf",footer:"STbKUV67LZ2WuhX54mbx",steps:"RWBK5tUndDBm422LHBob","action-button":"AXWmqtwsKkCRskgrHGk3"};const b=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(E,u,e)=>{e.d(u,{A:()=>b});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(p),n=_()(c());n.push([E.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),n.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const b=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(E,u,e)=>{e.d(u,{A:()=>b});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(p),n=_()(c());n.push([E.id,"",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const b=n}}]);
