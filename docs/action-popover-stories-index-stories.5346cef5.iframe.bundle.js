"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6002],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(y,p,e)=>{e.d(p,{XI:()=>f});var a=e("storybook/internal/preview-api"),l=e("storybook/internal/preview-errors"),d=e("@storybook/global"),s=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),t=Object.defineProperty,i=(n,r)=>{for(var o in r)t(n,o,{get:r[o],enumerable:!0})},h="actions",A="storybook/actions",R=null,D=`${A}/action-event`,P=null,x="$___storybook.isCyclic",b={depth:10,clearOnStoryChange:!0,limit:50},g=(n={})=>{Object.assign(b,n)},u=(n,r)=>{let o=Object.getPrototypeOf(n);return!o||r(o)?o:u(o,r)},c=n=>!!(typeof n=="object"&&n&&u(n,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof n.persist=="function"),E=n=>{if(c(n)){let r=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));r.persist();let o=Object.getOwnPropertyDescriptor(r,"view"),_=o?.value;return typeof _=="object"&&_?.constructor.name==="Window"&&Object.defineProperty(r,"view",{...o,value:Object.create(_.constructor.prototype)}),r}return n},w=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,s.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function f(n,r={}){let o={...b,...r},_=function(...v){if(r.implicit){let X=("__STORYBOOK_PREVIEW__"in d.global?d.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(I=>I.phase==="playing"||I.phase==="rendering");if(X){let I=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,G=new l.ImplicitActionsDuringRendering({phase:X.phase,name:n,deprecated:I});if(I)console.warn(G);else throw G}}let m=a.addons.getChannel(),j=w(),T=5,z=v.map(E),U=v.length>1?z:z[0],W={id:j,count:0,data:{name:n,args:U},options:{...o,maxDepth:T+(o.depth||3),allowFunction:o.allowFunction||!1}};m.emit(D,W)};return _.isAction=!0,_.implicit=r.implicit,_}var B=(...n)=>{let r=b,o=n;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(r={...b,...o.pop()});let _=o[0];(o.length!==1||typeof _=="string")&&(_={},o.forEach(m=>{_[m]=m}));let v={};return Object.keys(_).forEach(m=>{v[m]=f(_[m],r)}),v},O={};i(O,{argsEnhancers:()=>k,loaders:()=>V});var L=(n,r)=>typeof r[n]>"u"&&!(n in r),S=n=>{let{initialArgs:r,argTypes:o,id:_,parameters:{actions:v}}=n;if(!v||v.disable||!v.argTypesRegex||!o)return{};let m=new RegExp(v.argTypesRegex);return Object.entries(o).filter(([j])=>!!m.test(j)).reduce((j,[T,z])=>(L(T,r)&&(j[T]=f(T,{implicit:!0,id:_})),j),{})},K=n=>{let{initialArgs:r,argTypes:o,parameters:{actions:_}}=n;return _?.disable||!o?{}:Object.entries(o).filter(([v,m])=>!!m.action).reduce((v,[m,j])=>(L(m,r)&&(v[m]=f(typeof j.action=="string"?j.action:m)),v),{})},k=[K,S],N=!1,M=n=>{let{parameters:{actions:r}}=n;if(!r?.disable&&!N&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in d.global&&typeof d.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=d.global.__STORYBOOK_TEST_ON_MOCK_CALL__;o((_,v)=>{let m=_.getMockName();m!=="spy"&&(!/^next\/.*::/.test(m)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(j=>m.startsWith(j)))&&f(m)(v)}),N=!0}},V=[M],C=()=>definePreview(O)},"../components/components/action-popover/stories/index.stories.jsx":(y,p,e)=>{e.r(p),e.d(p,{WithSteps:()=>n,__namedExportsOrder:()=>r,_default:()=>C,default:()=>N});var a=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js"),i=e("../components/components/button/index.tsx"),h=e("../components/components/layout/use-breakpoint-match/index.ts"),A=e("../components/components/text/index.tsx"),R=e("../components/components/theme-provider/index.tsx"),D=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(D),x=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss"),b={};b.insert="head",b.singleton=!1;var g=P()(x.A,b);const u=x.A.locals||{};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=s.__,f=({hideCloseButton:o=!1,title:_,children:v,step:m=null,totalSteps:j=null,buttonContent:T=null,buttonDisabled:z=!1,buttonHref:U=null,buttonExternalLink:W=!1,offset:X=32,onClose:I,onClick:G,...Z})=>{const[F]=(0,h.A)("sm");if(!_||!v||!T)return null;Z.position||(Z.position=F?"top center":"middle right");const H={...Z,offset:X,onClose:I},J=Number.isFinite(m)&&Number.isFinite(j);let Y=null;return J&&(Y=(0,s.sprintf)(E("%1$d of %2$d","jetpack-components"),m,j)),(0,c.jsx)(d.Ay,{...H,children:(0,c.jsx)(R.Ay,{children:(0,c.jsxs)("div",{className:u.wrapper,children:[(0,c.jsxs)("div",{className:u.header,children:[(0,c.jsx)(A.Ay,{variant:"title-small",className:u.title,children:_}),!o&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.A,{size:"small",variant:"tertiary","aria-label":"close",className:u["close-button"],icon:t.A,iconSize:16,onClick:I})})]}),v,(0,c.jsxs)("div",{className:u.footer,children:[J&&(0,c.jsx)(A.Ay,{variant:"body",className:u.steps,children:Y}),(0,c.jsx)(i.A,{variant:"primary",className:u["action-button"],disabled:z,onClick:G,isExternalLink:W,href:U,children:T})]})]})})})};try{actionpopover.displayName="actionpopover",actionpopover.__docgenInfo={description:"",displayName:"actionpopover",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/action-popover/index.tsx#actionpopover"]={docgenInfo:actionpopover.__docgenInfo,name:"actionpopover",path:"../components/components/action-popover/index.tsx#actionpopover"})}catch{}var B=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss"),O={};O.insert="head",O.singleton=!1;var L=P()(B.A,O);const S=B.A.locals||{};var K=`/**
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
`,k={_default:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}},WithSteps:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}}};const N={parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}},"with-steps":{startLoc:{col:17,line:89},endLoc:{col:1,line:103},startBody:{col:17,line:89},endBody:{col:1,line:103}}}}},title:"JS Packages/Components/Action Popover",component:f,argTypes:{hideCloseButton:{control:{type:"boolean"}},title:{control:{type:"text"}},children:{control:{type:"text"}},step:{control:{type:"number"}},totalSteps:{control:{type:"number"}},buttonContent:{control:{type:"text"}},buttonDisabled:{control:{type:"boolean"}},buttonHref:{control:{type:"text"}},buttonExternalLink:{control:{type:"boolean"}},offset:{control:{type:"number"}},position:{control:{type:"select"},options:["top left","top right","top center","middle left","middle right","middle center","bottom left","bottom right","bottom center"]},noArrow:{control:{type:"boolean"}},onClose:{table:{disable:!0}},onClick:{table:{disable:!0}}}},M=o=>{const[_,v]=(0,l.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:S.wrapper,children:(0,c.jsx)("div",{ref:v,children:"\u2693"})}),(0,c.jsx)(f,{...o,anchor:_})]})},V={hideCloseButton:!1,title:"Check this out",children:"Absque sudore et labore nullum opus perfectum est.",step:null,totalSteps:null,buttonContent:"Next",buttonDisabled:!1,offset:32,position:"top center",noArrow:!0,onClose:()=>(0,a.XI)("close")(),onClick:()=>(0,a.XI)("click")()},C=M.bind({});C.args=V;const n=M.bind({});n.args={...V,step:1,totalSteps:3};const r=["_default","WithSteps"];C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...C.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [anchor, setAnchor] = useState(null);
  return <>
            <div className={styles.wrapper}>
                <div ref={setAnchor}>\u2693</div>
            </div>

            <ActionPopover {...args} anchor={anchor} />
        </>;
}`,...n.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(y,p,e)=>{e.d(p,{Ay:()=>c});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),d=e("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function i(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const h=(0,d.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,A=(0,l.A)("svg",{target:"ea4tfvq2"})("width:",s.A.spinnerSize,"px;height:",s.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",t.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),R={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},D=(0,l.A)("circle",{target:"ea4tfvq1"})(R,";stroke:",t.l.gray[300],";"),P=(0,l.A)("path",{target:"ea4tfvq0"})(R,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",h,";");var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function g({className:E,...w},f){return(0,b.jsxs)(A,{className:(0,a.A)("components-spinner",E),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...w,ref:f,children:[(0,b.jsx)(D,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,b.jsx)(P,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const c=(0,x.forwardRef)(g)},"../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(y,p,e)=>{e.d(p,{A:()=>d});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function l({icon:s,size:t=24,...i},h){return(0,a.cloneElement)(s,{width:t,height:t,...i,ref:h})}const d=(0,a.forwardRef)(l)},"../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(y,p,e)=>{e.d(p,{A:()=>s});var a=e("../../../node_modules/.pnpm/@wordpress+primitives@4.21.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,l.jsx)(a.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(a.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.21.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(y,p,e)=>{e.d(p,{Ay:()=>d});var a=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.21.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function l(s,t){if(s===t)return!0;if(s.length!==t.length)return!1;for(let i=0,h=s.length;i<h;i++)if(s[i]!==t[i])return!1;return!0}function d(s,t){if(s&&t){if(s.constructor===Object&&t.constructor===Object)return(0,a.A)(s,t);if(Array.isArray(s)&&Array.isArray(t))return l(s,t)}return s===t}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.21.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(y,p,e)=>{e.d(p,{A:()=>a});function a(l,d){if(l===d)return!0;const s=Object.keys(l),t=Object.keys(d);if(s.length!==t.length)return!1;let i=0;for(;i<s.length;){const h=s[i],A=l[h];if(A===void 0&&!d.hasOwnProperty(h)||A!==d[h])return!1;i++}return!0}},"../components/components/button/index.tsx":(y,p,e)=>{e.d(p,{A:()=>w});var a=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),A=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(R),P=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),x={};x.insert="head",x.singleton=!1;var b=D()(P.A,x);const g=P.A.locals||{};var u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c=s.__,E=(0,A.forwardRef)((f,B)=>{const{children:O,variant:L="primary",size:S="normal",weight:K="bold",icon:k,iconSize:N,disabled:M,isDestructive:V,isLoading:C,isExternalLink:n,className:r,text:o,fullWidth:_,...v}=f,m=(0,h.A)(g.button,r,{[g.normal]:S==="normal",[g.small]:S==="small",[g.icon]:!!k,[g.loading]:C,[g.regular]:K==="regular",[g["full-width"]]:_,[g["is-icon-button"]]:!!k&&!O});v.ref=B;const j=S==="normal"?20:16,T=n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.A,{size:j,icon:i.A,className:g["external-icon"]}),(0,u.jsx)(a.A,{as:"span",children:c("(opens in a new tab)","jetpack-components")})]}),z=n?"_blank":void 0,U=O?.[0]&&O[0]!==null&&O?.[0]?.props?.className!=="components-tooltip";return(0,u.jsxs)(l.Ay,{target:z,variant:L,className:(0,h.A)(m,{"has-text":!!k&&U}),icon:n?void 0:k,iconSize:N,disabled:M,"aria-disabled":M,isDestructive:V,text:o,...v,children:[C&&(0,u.jsx)(d.Ay,{}),(0,u.jsx)("span",{children:O}),T]})});E.displayName="Button";const w=E;try{E.displayName="Button",E.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:E.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch{}},"../components/components/layout/use-breakpoint-match/index.ts":(y,p,e)=>{e.d(p,{A:()=>P});var a=e("../../../node_modules/.pnpm/@wordpress+compose@7.21.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(l),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),t={};t.insert="head",t.singleton=!1;var i=d()(s.A,t);const h=s.A.locals||{},A=["sm","md","lg"],R=(x,b,g)=>{const u=A.indexOf(x),c=u+1,E=b.includes("=");let w=[];return b.startsWith("<")&&(w=A.slice(0,E?c:u)),b.startsWith(">")&&(w=A.slice(E?u:c)),w?.length?w.some(f=>g[f]):g[x]},P=(x,b)=>{const g=Array.isArray(x)?x:[x],u=Array.isArray(b)?b:[b],[c,E,w]=A,f=(0,a.A)(h[c]),B=(0,a.A)(h[E]),O=(0,a.A)(h[w]),L={sm:f,md:B,lg:O};return g.map((S,K)=>{const k=u[K];return k?R(S,k,L):L[S]})}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/stories/styles.module.scss":(y,p,e)=>{e.d(p,{A:()=>i});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),t=s()(l());t.push([y.id,".Q1oJzpv72A3qA3rxPWXH{height:100vh;display:flex;justify-content:center;align-items:center;background-color:var(--jp-gray-off)}",""]),t.locals={wrapper:"Q1oJzpv72A3qA3rxPWXH"};const i=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/action-popover/styles.module.scss":(y,p,e)=>{e.d(p,{A:()=>i});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),t=s()(l());t.push([y.id,".NidP1i2lvrpfvfeGChEt{width:304px;min-height:230px;padding:calc(var(--spacing-base)*3);display:flex;flex-direction:column}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef{display:flex;margin-bottom:calc(var(--spacing-base)*2);justify-content:space-between}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .ssAftE7JlTecvZzOCECK{max-width:226px}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf{height:calc(var(--spacing-base)*3);width:calc(var(--spacing-base)*3);min-width:unset;color:var(--jp-gray-90);background-color:var(--jp-white);flex-shrink:0}.NidP1i2lvrpfvfeGChEt .UTIyZro4jdbYcbzEjmef .L2Dg1h8zaUSMGAfzPcGf:hover:not(:focus){box-shadow:none}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx{height:calc(var(--spacing-base)*6);margin-top:calc(var(--spacing-base)*2);display:flex;justify-content:flex-end;align-items:flex-end;flex-grow:1}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .RWBK5tUndDBm422LHBob{color:var(--jp-gray-60);flex-grow:1;margin-bottom:var(--spacing-base)}.NidP1i2lvrpfvfeGChEt .STbKUV67LZ2WuhX54mbx .AXWmqtwsKkCRskgrHGk3{flex-shrink:0}",""]),t.locals={wrapper:"NidP1i2lvrpfvfeGChEt",header:"UTIyZro4jdbYcbzEjmef",title:"ssAftE7JlTecvZzOCECK","close-button":"L2Dg1h8zaUSMGAfzPcGf",footer:"STbKUV67LZ2WuhX54mbx",steps:"RWBK5tUndDBm422LHBob","action-button":"AXWmqtwsKkCRskgrHGk3"};const i=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(y,p,e)=>{e.d(p,{A:()=>i});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),t=s()(l());t.push([y.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),t.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const i=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(y,p,e)=>{e.d(p,{A:()=>i});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),t=s()(l());t.push([y.id,"",""]),t.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const i=t}}]);
