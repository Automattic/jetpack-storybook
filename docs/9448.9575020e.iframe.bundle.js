"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9448],{"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/external-link/index.js":(Q,j,e)=>{e.d(j,{A:()=>A});var h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/@wordpress+i18n@5.8.2/node_modules/@wordpress/i18n/build-module/index.js"),w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function b(a,x){const{href:p,children:g,className:E,rel:f="",...C}=a,P=[...new Set([...f.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),R=(0,h.A)("components-external-link",E),S=!!(p!=null&&p.startsWith("#")),N=v=>{S&&v.preventDefault(),a.onClick&&a.onClick(v)};return(0,u.jsxs)("a",{...C,className:R,href:p,onClick:N,target:"_blank",rel:P,ref:x,children:[(0,u.jsx)("span",{className:"components-external-link__contents",children:g}),(0,u.jsx)("span",{className:"components-external-link__icon","aria-label":(0,n.__)("(opens in a new tab)"),children:"\u2197"})]})}const A=(0,w.forwardRef)(b)},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js":(Q,j,e)=>{e.d(j,{A:()=>he});var h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=e("../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js"),H=e("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js"),A=e("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+i18n@5.8.2/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@10.8.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js"),g=e("../../../node_modules/.pnpm/@wordpress+dom@4.9.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js");const E=new Set(["alert","status","log","marquee","timer"]),f=[];function C(r){const d=Array.from(document.body.children),c=[];f.push(c);for(const i of d)i!==r&&P(i)&&(i.setAttribute("aria-hidden","true"),c.push(i))}function P(r){const d=r.getAttribute("role");return!(r.tagName==="SCRIPT"||r.hasAttribute("aria-hidden")||r.hasAttribute("aria-live")||d&&E.has(d))}function R(){const r=f.pop();if(r)for(const d of r)d.removeAttribute("aria-hidden")}var S=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),N=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/style-provider/index.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js"),ae=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spacer/component.js"),ce=e("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js"),Z=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),ie=e("../../../node_modules/.pnpm/@wordpress+warning@3.9.0/node_modules/@wordpress/warning/build-module/index.js");const me=Z.A.transitionDuration,ue=Number.parseInt(Z.A.transitionDuration),pe="components-modal__disappear-animation";function fe(){const r=(0,n.useRef)(),[d,c]=(0,n.useState)(!1),i=(0,ce.A)(),I=(0,n.useCallback)(()=>new Promise(_=>{const M=r.current;if(i){_();return}if(!M){globalThis.SCRIPT_DEBUG===!0&&(0,ie.A)("wp.components.Modal: the Modal component can't be closed with an exit animation because of a missing reference to the modal frame element."),_();return}let y;const F=()=>new Promise(m=>{y=k=>{k.animationName===pe&&m()},M.addEventListener("animationend",y),c(!0)}),L=()=>new Promise(m=>{setTimeout(()=>m(),ue*1.2)});Promise.race([F(),L()]).then(()=>{y&&M.removeEventListener("animationend",y),c(!1),_()})}),[i]);return{overlayClassname:d?"is-animating-out":void 0,frameRef:r,frameStyle:{"--modal-frame-animation-duration":`${me}`},closeModal:I}}var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const q=(0,n.createContext)(new Set),O=new Map;function _e(r,d){const{bodyOpenClassName:c="modal-open",role:i="dialog",title:I=null,focusOnMount:_=!0,shouldCloseOnEsc:M=!0,shouldCloseOnClickOutside:y=!0,isDismissible:F=!0,aria:L={labelledby:void 0,describedby:void 0},onRequestClose:m,icon:k,closeButtonLabel:xe,children:be,style:ve,overlayClassName:ye,className:je,contentLabel:oe,onKeyDown:we,isFullScreen:Ae=!1,size:W,headerActions:ge=null,__experimentalHideHeader:ne=!1}=r,se=(0,n.useRef)(),Ee=(0,u.A)(ee),te=I?`components-modal-header-${Ee}`:L.labelledby,re=(0,b.A)(_==="firstContentElement"?"firstElement":_),Ce=(0,H.A)(),Re=(0,A.A)(),T=(0,n.useRef)(null),B=(0,n.useRef)(null),[U,de]=(0,n.useState)(!1),[$,le]=(0,n.useState)(!1);let G;Ae||W==="fill"?G="is-full-screen":W&&(G=`has-size-${W}`);const X=(0,n.useCallback)(()=>{if(!T.current)return;const o=(0,g.A)(T.current);T.current===o?le(!0):le(!1)},[T]);(0,n.useEffect)(()=>(C(se.current),()=>R()),[]);const z=(0,n.useRef)();(0,n.useEffect)(()=>{z.current=m},[m]);const K=(0,n.useContext)(q),[Y]=(0,n.useState)(()=>new Set);(0,n.useEffect)(()=>{var o;K.add(z);for(const s of K)s!==z&&((o=s.current)==null||o.call(s));return()=>{var s;for(const l of Y)(s=l.current)==null||s.call(l);K.delete(z)}},[K,Y]),(0,n.useEffect)(()=>{var o;const s=c,l=1+((o=O.get(s))!==null&&o!==void 0?o:0);return O.set(s,l),document.body.classList.add(c),()=>{const D=O.get(s)-1;D===0?(document.body.classList.remove(s),O.delete(s)):O.set(s,D)}},[c]);const{closeModal:V,frameRef:Se,frameStyle:Ne,overlayClassname:Oe}=fe();(0,n.useLayoutEffect)(()=>{if(!window.ResizeObserver||!B.current)return;const o=new ResizeObserver(X);return o.observe(B.current),X(),()=>{o.disconnect()}},[X,B]);function Ie(o){M&&(o.code==="Escape"||o.key==="Escape")&&!o.defaultPrevented&&(o.preventDefault(),V().then(()=>m(o)))}const Me=(0,n.useCallback)(o=>{var D;var s;const l=(s=(D=o==null?void 0:o.currentTarget)==null?void 0:D.scrollTop)!==null&&s!==void 0?s:-1;!U&&l>0?de(!0):U&&l<=0&&de(!1)},[U]);let J=null;const Te={onPointerDown:o=>{o.target===o.currentTarget&&(J=o.target,o.preventDefault())},onPointerUp:({target:o,button:s})=>{const l=o===J;J=null,s===0&&l&&V().then(()=>m())}},De=(0,t.jsx)("div",{ref:(0,a.A)([se,d]),className:(0,h.A)("components-modal__screen-overlay",Oe,ye),onKeyDown:(0,v.n)(Ie),...y?Te:{},children:(0,t.jsx)(N.A,{document,children:(0,t.jsx)("div",{className:(0,h.A)("components-modal__frame",G,je),style:{...Ne,...ve},ref:(0,a.A)([Se,Ce,Re,_!=="firstContentElement"?re:null]),role:i,"aria-label":oe,"aria-labelledby":oe?void 0:te,"aria-describedby":L.describedby,tabIndex:-1,onKeyDown:we,children:(0,t.jsxs)("div",{className:(0,h.A)("components-modal__content",{"hide-header":ne,"is-scrollable":$,"has-scrolled-content":U}),role:"document",onScroll:Me,ref:T,"aria-label":$?(0,x.__)("Scrollable section"):void 0,tabIndex:$?0:void 0,children:[!ne&&(0,t.jsxs)("div",{className:"components-modal__header",children:[(0,t.jsxs)("div",{className:"components-modal__header-heading-container",children:[k&&(0,t.jsx)("span",{className:"components-modal__icon-container","aria-hidden":!0,children:k}),I&&(0,t.jsx)("h1",{id:te,className:"components-modal__header-heading",children:I})]}),ge,F&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ae.A,{marginBottom:0,marginLeft:3}),(0,t.jsx)(S.Ay,{size:"small",onClick:o=>V().then(()=>m(o)),icon:p.A,label:xe||(0,x.__)("Close")})]})]}),(0,t.jsx)("div",{ref:(0,a.A)([B,_==="firstContentElement"?re:null]),children:be})]})})})});return(0,w.createPortal)((0,t.jsx)(q.Provider,{value:Y,children:De}),document.body)}const ee=(0,n.forwardRef)(_e),he=ee},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(Q,j,e)=>{e.d(j,{Ay:()=>R});var h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),w=e("../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function H(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const A=(0,w.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,a=(0,n.A)("svg",{target:"ea4tfvq2"})("width:",u.A.spinnerSize,"px;height:",u.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",b.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),x={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},p=(0,n.A)("circle",{target:"ea4tfvq1"})(x,";stroke:",b.l.gray[300],";"),g=(0,n.A)("path",{target:"ea4tfvq0"})(x,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",A,";");var E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function C({className:S,...N},v){return(0,f.jsxs)(a,{className:(0,h.A)("components-spinner",S),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...N,ref:v,children:[(0,f.jsx)(p,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,f.jsx)(g,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const R=(0,E.forwardRef)(C)}}]);})();