"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7976],{"../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(_,d,e)=>{e.d(d,{Z:()=>x});var n=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(l),c=e("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),E=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.35.0/node_modules/@wordpress/deprecated/build-module/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");function O(i,f){const[b,v]=(0,s.useState)(i);return[b,p=>{v(p),f&&f(p)}]}function T({renderContent:i,renderToggle:f,className:b,contentClassName:v,expandOnMobile:p,headerTitle:h,focusOnMount:C,popoverProps:o,onClose:j,onToggle:D,style:U,position:w},W){w!==void 0&&(0,E.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[L,N]=(0,s.useState)(null),r=(0,s.useRef)(),[m,u]=O(!1,D);(0,s.useEffect)(()=>()=>{D&&m&&D(!1)},[D,m]);function F(){u(!m)}function M(){var y;if(!r.current)return;const{ownerDocument:R}=r.current,Z=(y=R==null?void 0:R.activeElement)==null?void 0:y.closest('[role="dialog"]');!r.current.contains(R.activeElement)&&(!Z||Z.contains(r.current))&&A()}function A(){j&&j(),u(!1)}const P={isOpen:m,onToggle:F,onClose:A},H=!!(o!=null&&o.anchor)||!!(o!=null&&o.anchorRef)||!!(o!=null&&o.getAnchorRect)||!!(o!=null&&o.anchorRect);return(0,s.createElement)("div",{className:t()("components-dropdown",b),ref:(0,c.Z)([r,W,N]),tabIndex:-1,style:U},f(P),m&&(0,s.createElement)(g.ZP,(0,n.Z)({position:w,onClose:A,onFocusOutside:M,expandOnMobile:p,headerTitle:h,focusOnMount:C,offset:13,anchor:H?void 0:L},o,{className:t()("components-dropdown__content",o==null?void 0:o.className,v)}),i(P)))}const x=(0,s.forwardRef)(T)},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/modal/index.js":(_,d,e)=>{e.d(d,{Z:()=>N});var n=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(l),c=e("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),E=e("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js"),O=e("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js"),S=e("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+compose@6.12.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+i18n@4.35.0/node_modules/@wordpress/i18n/build-module/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/close.js"),b=e("../../../node_modules/.pnpm/@wordpress+dom@3.35.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js");const v=new Set(["alert","status","log","marquee","timer"]);let p=[],h=!1;function C(r){if(h)return;Array.from(document.body.children).forEach(u=>{u!==r&&o(u)&&(u.setAttribute("aria-hidden","true"),p.push(u))}),h=!0}function o(r){const m=r.getAttribute("role");return!(r.tagName==="SCRIPT"||r.hasAttribute("aria-hidden")||r.hasAttribute("aria-live")||m&&v.has(m))}function j(){h&&(p.forEach(r=>{r.removeAttribute("aria-hidden")}),p=[],h=!1)}var D=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),U=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");let w=0;function W(r,m){const{bodyOpenClassName:u="modal-open",role:F="dialog",title:M=null,focusOnMount:A=!0,shouldCloseOnEsc:P=!0,shouldCloseOnClickOutside:H=!0,isDismissible:R=!0,aria:Z={labelledby:void 0,describedby:void 0},onRequestClose:y,icon:$,closeButtonLabel:oe,children:ne,style:de,overlayClassName:te,className:re,contentLabel:Y,onKeyDown:le,isFullScreen:ae=!1,__experimentalHideHeader:G=!1}=r,k=(0,s.useRef)(),ce=(0,E.Z)(L),J=M?`components-modal-header-${ce}`:Z.labelledby,me=(0,g.Z)(A),ue=(0,O.Z)(),ie=(0,T.Z)(),pe=(0,S.Z)(y),I=(0,s.useRef)(null),B=(0,s.useRef)(null),[K,Q]=(0,s.useState)(!1),[z,q]=(0,s.useState)(!1),V=(0,s.useCallback)(()=>{if(!I.current)return;const a=(0,b.Z)(I.current);I.current===a?q(!0):q(!1)},[I]);(0,s.useEffect)(()=>(w++,w===1&&(C(k.current),document.body.classList.add(u)),()=>{w--,w===0&&(document.body.classList.remove(u),j())}),[u]),(0,s.useLayoutEffect)(()=>{if(!window.ResizeObserver||!B.current)return;const a=new ResizeObserver(V);return a.observe(B.current),V(),()=>{a.disconnect()}},[V,B]);function _e(a){a.nativeEvent.isComposing||a.keyCode===229||P&&a.code==="Escape"&&!a.defaultPrevented&&(a.preventDefault(),y&&y(a))}const fe=(0,s.useCallback)(a=>{var se;var X;const ee=(X=(se=a==null?void 0:a.currentTarget)==null?void 0:se.scrollTop)!==null&&X!==void 0?X:-1;!K&&ee>0?Q(!0):K&&ee<=0&&Q(!1)},[K]);return(0,c.createPortal)((0,s.createElement)("div",{ref:(0,x.Z)([k,m]),className:t()("components-modal__screen-overlay",te),onKeyDown:_e},(0,s.createElement)(U.Z,{document},(0,s.createElement)("div",(0,n.Z)({className:t()("components-modal__frame",re,{"is-full-screen":ae}),style:de,ref:(0,x.Z)([ue,ie,me]),role:F,"aria-label":Y,"aria-labelledby":Y?void 0:J,"aria-describedby":Z.describedby,tabIndex:-1},H?pe:{},{onKeyDown:le}),(0,s.createElement)("div",{className:t()("components-modal__content",{"hide-header":G,"is-scrollable":z,"has-scrolled-content":K}),role:"document",onScroll:fe,ref:I,"aria-label":z?(0,i.__)("Scrollable section"):void 0,tabIndex:z?0:void 0},!G&&(0,s.createElement)("div",{className:"components-modal__header"},(0,s.createElement)("div",{className:"components-modal__header-heading-container"},$&&(0,s.createElement)("span",{className:"components-modal__icon-container","aria-hidden":!0},$),M&&(0,s.createElement)("h1",{id:J,className:"components-modal__header-heading"},M)),R&&(0,s.createElement)(D.ZP,{onClick:y,icon:f.Z,label:oe||(0,i.__)("Close")})),(0,s.createElement)("div",{ref:B},ne))))),document.body)}const L=(0,s.forwardRef)(W),N=L},"../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(_,d,e)=>{e.d(d,{ZP:()=>h});var n=e("../../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(l),c=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.0_@types+react@18.0.27_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),E=e("../../../node_modules/.pnpm/@emotion+react@11.11.0_@types+react@18.0.27_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),g=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@25.1.0_@types+react-dom@18.0.10_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function T(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const S=E.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,x=(0,c.Z)("svg",{target:"ea4tfvq2"})("width:",g.Z.spinnerSize,"px;height:",g.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",O.D.ui.theme,";overflow:visible;opacity:1;background-color:transparent;"),i={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},f=(0,c.Z)("circle",{target:"ea4tfvq1"})(i,";stroke:",O.D.gray[300],";"),b=(0,c.Z)("path",{target:"ea4tfvq0"})(i,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",S,";");function v({className:C,...o},j){return(0,s.createElement)(x,(0,n.Z)({className:t()("components-spinner",C),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false"},o,{ref:j}),(0,s.createElement)(f,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,s.createElement)(b,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const h=(0,s.forwardRef)(v)},"../../../node_modules/.pnpm/@wordpress+data@9.5.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(_,d,e)=>{e.d(d,{Z:()=>l});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.5.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const l=t=>{const{dispatch:c}=(0,n.Z)();return t===void 0?c:c(t)}},"../../../node_modules/.pnpm/@wordpress+data@9.5.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(_,d,e)=>{e.d(d,{W:()=>s});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.5.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function s(l){return n.Z.dispatch(l)}},"../../../node_modules/.pnpm/@wordpress+data@9.5.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(_,d,e)=>{e.d(d,{Y:()=>s});var n=e("../../../node_modules/.pnpm/@wordpress+data@9.5.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function s(l){return n.Z.select(l)}},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,d,e)=>{e.d(d,{Z:()=>l});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s({icon:t,size:c=24,...E}){return(0,n.cloneElement)(t,{width:c,height:c,...E})}const l=s},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/external.js":(_,d,e)=>{e.d(d,{Z:()=>t});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,n.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.26.0/node_modules/@wordpress/icons/build-module/library/image.js":(_,d,e)=>{e.d(d,{Z:()=>t});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.33.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,n.createElement)(s.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(s.y$,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"}))}}]);})();
