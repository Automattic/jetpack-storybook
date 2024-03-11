"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4584],{"../components/components/split-button/stories/index.stories.tsx":(j,w,e)=>{var g,M,n;e.r(w),e.d(w,{__namedExportsOrder:()=>b,_default:()=>s,default:()=>l});var t=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button-group/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown-menu/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(c),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/split-button/style.module.scss"),v={};v.insert="head",v.singleton=!1;var x=E()(m.Z,v);const D=m.Z.locals||{};var i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const y=()=>(0,i.jsx)("svg",{width:"15",height:"9",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"10 9 4 7",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.004 10.555-6.005 5.459-6.004-5.459 1.009-1.11 4.995 4.542 4.996-4.542 1.009 1.11Z"})});y.displayName="DownIcon";const _=({variant:h,controls:P,popoverProps:B,toggleProps:R,label:L,...A})=>(0,i.jsxs)(t.Z,{className:D["split-button"],children:[(0,i.jsx)(u.ZP,{variant:h,...A,className:D.button}),(0,i.jsx)(p.Z,{toggleProps:{variant:h,className:D.button,...R},popoverProps:{noArrow:!1,...B},icon:(0,i.jsx)(y,{}),disableOpenOnArrowDown:!0,controls:P,label:L})]});_.displayName="SplitButton";const o=_;var r=`import SplitButton from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Split Button',
	component: SplitButton,
	argTypes: {
		variant: { type: 'select', options: [ undefined, 'secondary', 'primary', 'tertiary', 'link' ] },
	},
	args: {
		controls: [
			{
				title: 'Add to cart',
				icon: null,
				onClick: () => null,
			},
			{
				title: 'Add to wishlist',
				icon: null,
				onClick: () => null,
			},
		],
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
} as ComponentMeta< typeof SplitButton >;

const Template: ComponentStory< typeof SplitButton > = args => (
	<SplitButton { ...args }>Buy now!</SplitButton>
);

export const _default = Template.bind( {} );
`,d={_default:{startLoc:{col:55,line:31},endLoc:{col:1,line:33},startBody:{col:55,line:31},endBody:{col:1,line:33}}};const l={title:"JS Packages/Components/Split Button",component:o,argTypes:{variant:{type:"select",options:[void 0,"secondary","primary","tertiary","link"]}},args:{controls:[{title:"Add to cart",icon:null,onClick:()=>null},{title:"Add to wishlist",icon:null,onClick:()=>null}]},parameters:{storySource:{source:`import SplitButton from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Split Button',
	component: SplitButton,
	argTypes: {
		variant: { type: 'select', options: [ undefined, 'secondary', 'primary', 'tertiary', 'link' ] },
	},
	args: {
		controls: [
			{
				title: 'Add to cart',
				icon: null,
				onClick: () => null,
			},
			{
				title: 'Add to wishlist',
				icon: null,
				onClick: () => null,
			},
		],
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
} as ComponentMeta< typeof SplitButton >;

const Template: ComponentStory< typeof SplitButton > = args => (
	<SplitButton { ...args }>Buy now!</SplitButton>
);

export const _default = Template.bind( {} );
`,locationsMap:{default:{startLoc:{col:55,line:31},endLoc:{col:1,line:33},startBody:{col:55,line:31},endBody:{col:1,line:33}}}},backgrounds:{default:"dark"}}},f=h=>(0,i.jsx)(o,{...h,children:"Buy now!"});f.displayName="Template";const s=f.bind({});s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"args => <SplitButton {...args}>Buy now!</SplitButton>",...(n=(M=s.parameters)==null?void 0:M.docs)==null?void 0:n.source}}};const b=["_default"]},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button-group/index.js":(j,w,e)=>{e.d(w,{Z:()=>m});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(u);function c(v,x){const{className:D,...i}=v,y=p()("components-button-group",D);return(0,t.createElement)("div",{ref:x,role:"group",className:y,...i})}const m=(0,t.forwardRef)(c)},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown-menu/index.js":(j,w,e)=>{e.d(w,{Z:()=>r});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(u),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/menu.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js"),D=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/navigable-container/menu.js");function i(d={},l={}){const f={...d,...l};return l.className&&d.className&&(f.className=p()(l.className,d.className)),f}function y(d){return typeof d=="function"}function _(d){const{children:l,className:f,controls:s,icon:b=c.Z,label:g,popoverProps:M,toggleProps:n,menuProps:h,disableOpenOnArrowDown:P=!1,text:B,noIcons:R,open:L,defaultOpen:A,onToggle:k,variant:F}=(0,E.y)(d,"DropdownMenu");if(!(s!=null&&s.length)&&!y(l))return null;let I;s!=null&&s.length&&(I=s,Array.isArray(I[0])||(I=[s]));const N=i({className:"components-dropdown-menu__popover",variant:F},M);return(0,t.createElement)(x.Z,{className:f,popoverProps:N,renderToggle:({isOpen:C,onToggle:U})=>{var K;const S=T=>{P||!C&&T.code==="ArrowDown"&&(T.preventDefault(),U())},{as:a=v.ZP,...W}=n!=null?n:{},O=i({className:p()("components-dropdown-menu__toggle",{"is-opened":C})},W);return(0,t.createElement)(a,{...O,icon:b,onClick:T=>{U(),O.onClick&&O.onClick(T)},onKeyDown:T=>{S(T),O.onKeyDown&&O.onKeyDown(T)},"aria-haspopup":"true","aria-expanded":C,label:g,text:B,showTooltip:(K=n==null?void 0:n.showTooltip)!==null&&K!==void 0?K:!0},O.children)},renderContent:C=>{const U=i({"aria-label":g,className:p()("components-dropdown-menu__menu",{"no-icons":R})},h);return(0,t.createElement)(D.ZP,{...U,role:"menu"},y(l)?l(C):null,I==null?void 0:I.flatMap((K,S)=>K.map((a,W)=>(0,t.createElement)(v.ZP,{key:[S,W].join(),onClick:O=>{O.stopPropagation(),C.onClose(),a.onClick&&a.onClick()},className:p()("components-dropdown-menu__menu-item",{"has-separator":S>0&&W===0,"is-active":a.isActive,"is-icon-only":!a.title}),icon:a.icon,label:a.label,"aria-checked":a.role==="menuitemcheckbox"||a.role==="menuitemradio"?a.isActive:void 0,role:a.role==="menuitemcheckbox"||a.role==="menuitemradio"?a.role:"menuitem",disabled:a.isDisabled},a.title))))},open:L,defaultOpen:A,onToggle:k})}const r=(0,m.Kc)(_,"DropdownMenu")},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(j,w,e)=>{e.d(w,{Z:()=>_});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(u),c=e("../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),E=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.53.0/node_modules/@wordpress/deprecated/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),x=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),D=e("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const i=(o,r)=>{const{renderContent:d,renderToggle:l,className:f,contentClassName:s,expandOnMobile:b,headerTitle:g,focusOnMount:M,popoverProps:n,onClose:h,onToggle:P,style:B,open:R,defaultOpen:L,position:A,variant:k}=(0,m.y)(o,"Dropdown");A!==void 0&&(0,E.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[F,I]=(0,t.useState)(null),N=(0,t.useRef)(),[C,U]=(0,x.O)({defaultValue:L,value:R,onChange:P});function K(){var Z;if(!N.current)return;const{ownerDocument:O}=N.current,T=(Z=O==null?void 0:O.activeElement)==null?void 0:Z.closest('[role="dialog"]');!N.current.contains(O.activeElement)&&(!T||T.contains(N.current))&&S()}function S(){h==null||h(),U(!1)}const a={isOpen:!!C,onToggle:()=>U(!C),onClose:S},W=!!(n!=null&&n.anchor)||!!(n!=null&&n.anchorRef)||!!(n!=null&&n.getAnchorRect)||!!(n!=null&&n.anchorRect);return(0,t.createElement)("div",{className:f,ref:(0,c.Z)([N,r,I]),tabIndex:-1,style:B},l(a),C&&(0,t.createElement)(D.ZP,{position:A,onClose:S,onFocusOutside:K,expandOnMobile:b,headerTitle:g,focusOnMount:M,offset:13,anchor:W?void 0:F,variant:k,...n,className:p()("components-dropdown__content",n==null?void 0:n.className,s)},d(a)))},_=(0,v.Iq)(i,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/navigable-container/menu.js":(j,w,e)=>{e.d(w,{ZP:()=>y});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+dom@3.53.0/node_modules/@wordpress/dom/build-module/index.js");const p=()=>{},c=["menuitem","menuitemradio","menuitemcheckbox"];function E(_,o,r){const d=_+r;return d<0?o+d:d>=o?d-o:d}class m extends t.Component{constructor(o){super(o),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container&&this.container.addEventListener("keydown",this.onKeyDown)}componentWillUnmount(){this.container&&this.container.removeEventListener("keydown",this.onKeyDown)}bindContainer(o){const{forwardedRef:r}=this.props;this.container=o,typeof r=="function"?r(o):r&&"current"in r&&(r.current=o)}getFocusableContext(o){if(!this.container)return null;const{onlyBrowserTabstops:r}=this.props,l=(r?u.T_.tabbable:u.T_.focusable).find(this.container),f=this.getFocusableIndex(l,o);return f>-1&&o?{index:f,target:o,focusables:l}:null}getFocusableIndex(o,r){return o.indexOf(r)}onKeyDown(o){var B,R,L;this.props.onKeyDown&&this.props.onKeyDown(o);const{getFocusableContext:r}=this,{cycle:d=!0,eventToOffset:l,onNavigate:f=p,stopNavigationEvents:s}=this.props,b=l(o);if(b!==void 0&&s){o.stopImmediatePropagation();const A=(B=o.target)==null?void 0:B.getAttribute("role");!!A&&c.includes(A)&&o.preventDefault()}if(!b)return;const g=(L=(R=o.target)==null?void 0:R.ownerDocument)==null?void 0:L.activeElement;if(!g)return;const M=r(g);if(!M)return;const{index:n,focusables:h}=M,P=d?E(n,h.length,b):n+b;P>=0&&P<h.length&&(h[P].focus(),f(P,h[P]),o.code==="Tab"&&o.preventDefault())}render(){const{children:o,stopNavigationEvents:r,eventToOffset:d,onNavigate:l,onKeyDown:f,cycle:s,onlyBrowserTabstops:b,forwardedRef:g,...M}=this.props;return(0,t.createElement)("div",{ref:this.bindContainer,...M},o)}}const v=(_,o)=>(0,t.createElement)(m,{..._,forwardedRef:o});v.displayName="NavigableContainer";const x=(0,t.forwardRef)(v);function D({role:_="menu",orientation:o="vertical",...r},d){const l=f=>{const{code:s}=f;let b=["ArrowDown"],g=["ArrowUp"];if(o==="horizontal"&&(b=["ArrowRight"],g=["ArrowLeft"]),o==="both"&&(b=["ArrowRight","ArrowDown"],g=["ArrowLeft","ArrowUp"]),b.includes(s))return 1;if(g.includes(s))return-1;if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(s))return 0};return(0,t.createElement)(x,{ref:d,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:_,"aria-orientation":_!=="presentation"&&(o==="vertical"||o==="horizontal")?o:void 0,eventToOffset:l,...r})}const y=(0,t.forwardRef)(D)},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(j,w,e)=>{e.d(w,{O:()=>u});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function u({defaultValue:p,onChange:c,value:E}){const m=typeof E!="undefined",v=m?E:p,[x,D]=(0,t.useState)(v),i=m?E:x;let y;return m&&typeof c=="function"?y=c:!m&&typeof c=="function"?y=_=>{c(_),D(_)}:y=D,[i,y]}},"../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/menu.js":(j,w,e)=>{e.d(w,{Z:()=>c});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,t.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(u.y$,{d:"M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"}))},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/split-button/style.module.scss":(j,w,e)=>{e.d(w,{Z:()=>m});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(t),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(p),E=c()(u());E.push([j.id,".LtrV_wYOdwb7dDaFAONw{--actions-size: 28px;display:flex;height:var(--actions-size);border-radius:var(--jp-border-radius)}.LtrV_wYOdwb7dDaFAONw>.IF9UNoGSlG2nG7LQhiCq:first-child{border-radius:var(--jp-border-radius) 0 0 var(--jp-border-radius)}.LtrV_wYOdwb7dDaFAONw>.components-dropdown>.IF9UNoGSlG2nG7LQhiCq{border-radius:0 var(--jp-border-radius) var(--jp-border-radius) 0}.IF9UNoGSlG2nG7LQhiCq{font-size:var(--font-body-extra-small);border-radius:var(--jp-border-radius);height:var(--actions-size);line-height:var(--actions-size)}",""]),E.locals={"split-button":"LtrV_wYOdwb7dDaFAONw",button:"IF9UNoGSlG2nG7LQhiCq"};const m=E}}]);})();