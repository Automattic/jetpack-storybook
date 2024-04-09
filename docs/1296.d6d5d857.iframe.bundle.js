"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1296],{"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button-group/index.js":(F,y,o)=>{o.d(y,{Z:()=>f});var s=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=o.n(h);function _(D,T){const{className:g,...O}=D,E=p()("components-button-group",g);return(0,s.createElement)("div",{ref:T,role:"group",className:E,...O})}const f=(0,s.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown-menu/index.js":(F,y,o)=>{o.d(y,{Z:()=>r});var s=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=o.n(h),_=o("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/menu.js"),v=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),f=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),D=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),T=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js"),g=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/navigable-container/menu.js");function O(t={},a={}){const i={...t,...a};return a.className&&t.className&&(i.className=p()(a.className,t.className)),i}function E(t){return typeof t=="function"}function l(t){const{children:a,className:i,controls:c,icon:u=_.Z,label:w,popoverProps:A,toggleProps:n,menuProps:M,disableOpenOnArrowDown:x=!1,text:B,noIcons:L,open:j,defaultOpen:K,onToggle:Z,variant:k}=(0,v.y)(t,"DropdownMenu");if(!(c!=null&&c.length)&&!E(a))return null;let C;c!=null&&c.length&&(C=c,Array.isArray(C[0])||(C=[c]));const I=O({className:"components-dropdown-menu__popover",variant:k},A);return(0,s.createElement)(T.Z,{className:i,popoverProps:I,renderToggle:({isOpen:b,onToggle:U})=>{var N;const R=P=>{x||!b&&P.code==="ArrowDown"&&(P.preventDefault(),U())},{as:d=D.ZP,...W}=n!=null?n:{},m=O({className:p()("components-dropdown-menu__toggle",{"is-opened":b})},W);return(0,s.createElement)(d,{...m,icon:u,onClick:P=>{U(),m.onClick&&m.onClick(P)},onKeyDown:P=>{R(P),m.onKeyDown&&m.onKeyDown(P)},"aria-haspopup":"true","aria-expanded":b,label:w,text:B,showTooltip:(N=n==null?void 0:n.showTooltip)!==null&&N!==void 0?N:!0},m.children)},renderContent:b=>{const U=O({"aria-label":w,className:p()("components-dropdown-menu__menu",{"no-icons":L})},M);return(0,s.createElement)(g.ZP,{...U,role:"menu"},E(a)?a(b):null,C==null?void 0:C.flatMap((N,R)=>N.map((d,W)=>(0,s.createElement)(D.ZP,{key:[R,W].join(),onClick:m=>{m.stopPropagation(),b.onClose(),d.onClick&&d.onClick()},className:p()("components-dropdown-menu__menu-item",{"has-separator":R>0&&W===0,"is-active":d.isActive,"is-icon-only":!d.title}),icon:d.icon,label:d.label,"aria-checked":d.role==="menuitemcheckbox"||d.role==="menuitemradio"?d.isActive:void 0,role:d.role==="menuitemcheckbox"||d.role==="menuitemradio"?d.role:"menuitem",disabled:d.isDisabled},d.title))))},open:j,defaultOpen:K,onToggle:Z})}const r=(0,f.Kc)(l,"DropdownMenu")},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(F,y,o)=>{o.d(y,{Z:()=>l});var s=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=o.n(h),_=o("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),v=o("../../../node_modules/.pnpm/@wordpress+deprecated@3.55.0/node_modules/@wordpress/deprecated/build-module/index.js"),f=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),D=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),T=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),g=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const O=(e,r)=>{const{renderContent:t,renderToggle:a,className:i,contentClassName:c,expandOnMobile:u,headerTitle:w,focusOnMount:A,popoverProps:n,onClose:M,onToggle:x,style:B,open:L,defaultOpen:j,position:K,variant:Z}=(0,f.y)(e,"Dropdown");K!==void 0&&(0,v.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[k,C]=(0,s.useState)(null),I=(0,s.useRef)(),[b,U]=(0,T.O)({defaultValue:j,value:L,onChange:x});function N(){var V;if(!I.current)return;const{ownerDocument:m}=I.current,P=(V=m==null?void 0:m.activeElement)==null?void 0:V.closest('[role="dialog"]');!I.current.contains(m.activeElement)&&(!P||P.contains(I.current))&&R()}function R(){M==null||M(),U(!1)}const d={isOpen:!!b,onToggle:()=>U(!b),onClose:R},W=!!(n!=null&&n.anchor)||!!(n!=null&&n.anchorRef)||!!(n!=null&&n.getAnchorRect)||!!(n!=null&&n.anchorRect);return(0,s.createElement)("div",{className:i,ref:(0,_.Z)([I,r,C]),tabIndex:-1,style:B},a(d),b&&(0,s.createElement)(g.ZP,{position:K,onClose:R,onFocusOutside:N,expandOnMobile:u,headerTitle:w,focusOnMount:A,offset:13,anchor:W?void 0:k,variant:Z,...n,className:p()("components-dropdown__content",n==null?void 0:n.className,c)},t(d)))},l=(0,D.Iq)(O,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/navigable-container/menu.js":(F,y,o)=>{o.d(y,{ZP:()=>E});var s=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=o("../../../node_modules/.pnpm/@wordpress+dom@3.55.0/node_modules/@wordpress/dom/build-module/index.js");const p=()=>{},_=["menuitem","menuitemradio","menuitemcheckbox"];function v(l,e,r){const t=l+r;return t<0?e+t:t>=e?t-e:t}class f extends s.Component{constructor(e){super(e),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container&&this.container.addEventListener("keydown",this.onKeyDown)}componentWillUnmount(){this.container&&this.container.removeEventListener("keydown",this.onKeyDown)}bindContainer(e){const{forwardedRef:r}=this.props;this.container=e,typeof r=="function"?r(e):r&&"current"in r&&(r.current=e)}getFocusableContext(e){if(!this.container)return null;const{onlyBrowserTabstops:r}=this.props,a=(r?h.T_.tabbable:h.T_.focusable).find(this.container),i=this.getFocusableIndex(a,e);return i>-1&&e?{index:i,target:e,focusables:a}:null}getFocusableIndex(e,r){return e.indexOf(r)}onKeyDown(e){var B,L,j;this.props.onKeyDown&&this.props.onKeyDown(e);const{getFocusableContext:r}=this,{cycle:t=!0,eventToOffset:a,onNavigate:i=p,stopNavigationEvents:c}=this.props,u=a(e);if(u!==void 0&&c){e.stopImmediatePropagation();const K=(B=e.target)==null?void 0:B.getAttribute("role");!!K&&_.includes(K)&&e.preventDefault()}if(!u)return;const w=(j=(L=e.target)==null?void 0:L.ownerDocument)==null?void 0:j.activeElement;if(!w)return;const A=r(w);if(!A)return;const{index:n,focusables:M}=A,x=t?v(n,M.length,u):n+u;x>=0&&x<M.length&&(M[x].focus(),i(x,M[x]),e.code==="Tab"&&e.preventDefault())}render(){const{children:e,stopNavigationEvents:r,eventToOffset:t,onNavigate:a,onKeyDown:i,cycle:c,onlyBrowserTabstops:u,forwardedRef:w,...A}=this.props;return(0,s.createElement)("div",{ref:this.bindContainer,...A},e)}}const D=(l,e)=>(0,s.createElement)(f,{...l,forwardedRef:e});D.displayName="NavigableContainer";const T=(0,s.forwardRef)(D);function g({role:l="menu",orientation:e="vertical",...r},t){const a=i=>{const{code:c}=i;let u=["ArrowDown"],w=["ArrowUp"];if(e==="horizontal"&&(u=["ArrowRight"],w=["ArrowLeft"]),e==="both"&&(u=["ArrowRight","ArrowDown"],w=["ArrowLeft","ArrowUp"]),u.includes(c))return 1;if(w.includes(c))return-1;if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(c))return 0};return(0,s.createElement)(T,{ref:t,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:l,"aria-orientation":l!=="presentation"&&(e==="vertical"||e==="horizontal")?e:void 0,eventToOffset:a,...r})}const E=(0,s.forwardRef)(g)},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(F,y,o)=>{o.d(y,{O:()=>h});var s=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function h({defaultValue:p,onChange:_,value:v}){const f=typeof v!="undefined",D=f?v:p,[T,g]=(0,s.useState)(D),O=f?v:T;let E;return f&&typeof _=="function"?E=_:!f&&typeof _=="function"?E=l=>{_(l),g(l)}:E=g,[O,E]}}}]);})();