"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6080],{"../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js":(U,v,e)=>{e.d(v,{$n:()=>E,Ay:()=>C});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),b=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.6.0/node_modules/@wordpress/deprecated/build-module/index.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),P=e("../../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=["onMouseDown","onClick"];function m({__experimentalIsFocusable:i,isDefault:_,isPrimary:x,isSecondary:D,isTertiary:T,isLink:l,isPressed:M,isSmall:B,size:A,variant:K,describedBy:W,...L}){let j=A,r=K;const w={accessibleWhenDisabled:i,"aria-pressed":M,description:W};if(B){var n;(n=j)!==null&&n!==void 0||(j="small")}if(x){var I;(I=r)!==null&&I!==void 0||(r="primary")}if(T){var O;(O=r)!==null&&O!==void 0||(r="tertiary")}if(D){var u;(u=r)!==null&&u!==void 0||(r="secondary")}if(_){var c;(0,b.A)("wp.components.Button `isDefault` prop",{since:"5.4",alternative:'variant="secondary"'}),(c=r)!==null&&c!==void 0||(r="secondary")}if(l){var y;(y=r)!==null&&y!==void 0||(r="link")}return{...w,...L,size:j,variant:r}}function p(i,_){var J,q;const{__next40pxDefaultSize:x,accessibleWhenDisabled:D,isBusy:T,isDestructive:l,className:M,disabled:B,icon:A,iconPosition:K="left",iconSize:W,showTooltip:L,tooltipPosition:j,shortcut:r,label:w,children:n,size:I="default",text:O,variant:u,description:c,...y}=m(i),{href:N,target:Y,"aria-checked":R,"aria-pressed":k,"aria-selected":tt,...X}="href"in y?y:{href:void 0,target:void 0,...y},et=(0,P.A)(E,"components-button__description"),ot=typeof n=="string"&&!!n||Array.isArray(n)&&(n==null?void 0:n[0])&&n[0]!==null&&((q=(J=n==null?void 0:n[0])==null?void 0:J.props)==null?void 0:q.className)!=="components-tooltip",st=[!0,"true","mixed"],nt=(0,a.A)("components-button",M,{"is-next-40px-default-size":x,"is-secondary":u==="secondary","is-primary":u==="primary","is-small":I==="small","is-compact":I==="compact","is-tertiary":u==="tertiary","is-pressed":st.includes(k),"is-pressed-mixed":k==="mixed","is-busy":T,"is-link":u==="link","is-destructive":l,"has-text":!!A&&(ot||O),"has-icon":!!A}),F=B&&!D,S=N!==void 0&&!B?"a":"button",G=S==="button"?{type:"button",disabled:F,"aria-checked":R,"aria-pressed":k,"aria-selected":tt}:{},z=S==="a"?{href:N,target:Y}:{},$={};if(B&&D){G["aria-disabled"]=!0,z["aria-disabled"]=!0;for(const at of s)$[at]=H=>{H&&(H.stopPropagation(),H.preventDefault())}}const rt=!F&&(L&&!!w||!!r||!!w&&!(n!=null&&n.length)&&L!==!1),Q=c?et:void 0,dt=X["aria-describedby"]||Q,Z={className:nt,"aria-label":X["aria-label"]||w,"aria-describedby":dt,ref:_},V=(0,t.jsxs)(t.Fragment,{children:[A&&K==="left"&&(0,t.jsx)(h.A,{icon:A,size:W}),O&&(0,t.jsx)(t.Fragment,{children:O}),n,A&&K==="right"&&(0,t.jsx)(h.A,{icon:A,size:W})]}),it=S==="a"?(0,t.jsx)("a",{...z,...X,...$,...Z,children:V}):(0,t.jsx)("button",{...G,...X,...$,...Z,children:V}),lt=rt?{text:n!=null&&n.length&&c?c:w,shortcut:r,placement:j&&(0,o.YK)(j)}:{};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Ay,{...lt,children:it}),c&&(0,t.jsx)(g.A,{children:(0,t.jsx)("span",{id:Q,children:c})})]})}const E=(0,f.forwardRef)(p),C=E},"../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js":(U,v,e)=>{e.d(v,{A:()=>g});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+primitives@4.6.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function P({icon:o,className:t,size:s=20,style:m={},...p}){const E=["dashicon","dashicons","dashicons-"+o,t].filter(Boolean).join(" "),i={...s!=20?{fontSize:`${s}px`,width:`${s}px`,height:`${s}px`}:{},...m};return(0,f.jsx)("span",{className:E,style:i,...p})}const d=P;function h({icon:o=null,size:t=typeof o=="string"?20:24,...s}){if(typeof o=="string")return(0,f.jsx)(d,{icon:o,size:t,...s});if((0,a.isValidElement)(o)&&d===o.type)return(0,a.cloneElement)(o,{...s});if(typeof o=="function")return(0,a.createElement)(o,{size:t,...s});if(o&&(o.type==="svg"||o.type===b.t4)){const m={...o.props,width:t,height:t,...s};return(0,f.jsx)(b.t4,{...m})}return(0,a.isValidElement)(o)?(0,a.cloneElement)(o,{size:t,...s}):o}const g=h},"../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js":(U,v,e)=>{e.d(v,{Vn:()=>P,WS:()=>o,YK:()=>b,_G:()=>g});const a={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},b=t=>{var s;return(s=a[t])!==null&&s!==void 0?s:"bottom"},f={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},P=t=>{const s=t.startsWith("top")||t.startsWith("bottom")?"translateY":"translateX",m=t.startsWith("top")||t.startsWith("left")?1:-1;return{style:f[t],initial:{opacity:0,scale:0,[s]:`${2*m}em`},animate:{opacity:1,scale:1,[s]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function d(t){return!!(t!=null&&t.top)}function h(t){return!!(t!=null&&t.current)}const g=({anchor:t,anchorRef:s,anchorRect:m,getAnchorRect:p,fallbackReferenceElement:E})=>{var C;let i=null;return t?i=t:d(s)?i={getBoundingClientRect(){const _=s.top.getBoundingClientRect(),x=s.bottom.getBoundingClientRect();return new window.DOMRect(_.x,_.y,_.width,x.bottom-_.top)}}:h(s)?i=s.current:s?i=s:m?i={getBoundingClientRect(){return m}}:p?i={getBoundingClientRect(){var _,x,D,T;const l=p(E);return new window.DOMRect((_=l.x)!==null&&_!==void 0?_:l.left,(x=l.y)!==null&&x!==void 0?x:l.top,(D=l.width)!==null&&D!==void 0?D:l.right-l.left,(T=l.height)!==null&&T!==void 0?T:l.bottom-l.top)}}:E&&(i=E.parentElement),(C=i)!==null&&C!==void 0?C:null},o=t=>t===null||Number.isNaN(t)?void 0:Math.round(t)},"../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js":(U,v,e)=>{e.d(v,{A:()=>f});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function b(P){const{shortcut:d,className:h}=P;if(!d)return null;let g,o;return typeof d=="string"&&(g=d),d!==null&&typeof d=="object"&&(g=d.display,o=d.ariaLabel),(0,a.jsx)("span",{className:h,"aria-label":o,children:g})}const f=b},"../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js":(U,v,e)=>{e.d(v,{Ay:()=>D});var a=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2D53SX6Q.js"),b=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js"),f=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),P=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),d=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),g=e("../../../node_modules/.pnpm/@wordpress+compose@7.6.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.6.0/node_modules/@wordpress/deprecated/build-module/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=(0,o.createContext)({isNestedInTooltip:!1}),C=700,i={isNestedInTooltip:!0};function _(T,l){const{children:M,className:B,delay:A=C,hideOnClick:K=!0,placement:W,position:L,shortcut:j,text:r,...w}=T,{isNestedInTooltip:n}=(0,o.useContext)(E),I=(0,g.A)(x,"tooltip"),O=r||j?I:void 0,u=o.Children.count(M)===1;let c;W!==void 0?c=W:L!==void 0&&(c=(0,m.YK)(L),(0,t.A)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),c=c||"bottom";const y=a._({placement:c,showTimeout:A}),N=(0,d.O$)(y,"mounted");if(n)return u?(0,p.jsx)(b.X,{...w,render:M}):M;function Y(R){return O&&N?(0,o.cloneElement)(R,{"aria-describedby":O}):R}return(0,p.jsxs)(E.Provider,{value:i,children:[(0,p.jsx)(f.f,{onClick:K?y.hide:void 0,store:y,render:u?Y(M):void 0,ref:l,children:u?void 0:M}),u&&(r||j)&&(0,p.jsxs)(P.m,{...w,className:(0,h.A)("components-tooltip",B),unmountOnHide:!0,gutter:4,id:O,overflowPadding:.5,store:y,children:[r,j&&(0,p.jsx)(s.A,{className:r?"components-tooltip__shortcut":"",shortcut:j})]})]})}const x=(0,o.forwardRef)(_),D=x},"../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(U,v,e)=>{e.d(v,{A:()=>o});var a=e("../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const f={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var P=e("../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function h(t,s){const{style:m,...p}=(0,a.A)(t,"VisuallyHidden");return(0,d.jsx)(P.A,{ref:s,...p,style:{...f,...m||{}}})}const o=(0,b.KZ)(h,"VisuallyHidden")}}]);})();
