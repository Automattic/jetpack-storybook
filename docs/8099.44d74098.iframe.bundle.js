"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8099],{"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/external-link/index.js":(E,l,e)=>{e.d(l,{Z:()=>c});var t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n(g,v){const{href:p,children:i,className:w,rel:j="",...B}=g,A=[...new Set([...j.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),m=(0,t.Z)("components-external-link",w),_=!!(p!=null&&p.startsWith("#")),b=f=>{_&&f.preventDefault(),g.onClick&&g.onClick(f)};return(0,r.jsxs)("a",{...B,className:m,href:p,onClick:b,target:"_blank",rel:A,ref:v,children:[(0,r.jsx)("span",{className:"components-external-link__contents",children:i}),(0,r.jsx)("span",{className:"components-external-link__icon","aria-label":(0,o.__)("(opens in a new tab)"),children:"\u2197"})]})}const c=(0,s.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js":(E,l,e)=>{e.d(l,{Z:()=>K});var t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),v=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js"),i=e("../../../node_modules/.pnpm/@wordpress+dom@4.0.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js");const w=new Set(["alert","status","log","marquee","timer"]),j=[];function B(C){const D=Array.from(document.body.children),S=[];j.push(S);for(const L of D)L!==C&&A(L)&&(L.setAttribute("aria-hidden","true"),S.push(L))}function A(C){const D=C.getAttribute("role");return!(C.tagName==="SCRIPT"||C.hasAttribute("aria-hidden")||C.hasAttribute("aria-live")||D&&w.has(D))}function m(){const C=j.pop();if(C)for(const D of C)D.removeAttribute("aria-hidden")}var _=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/style-provider/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const x=(0,o.createContext)([]),h=new Map;function P(C,D){const{bodyOpenClassName:S="modal-open",role:L="dialog",title:z=null,focusOnMount:k=!0,shouldCloseOnEsc:le=!0,shouldCloseOnClickOutside:ce=!0,isDismissible:ae=!0,aria:V={labelledby:void 0,describedby:void 0},onRequestClose:I,icon:Q,closeButtonLabel:ue,children:ie,style:me,overlayClassName:pe,className:_e,contentLabel:Y,onKeyDown:fe,isFullScreen:he=!1,size:H,headerActions:ge=null,__experimentalHideHeader:J=!1}=C,q=(0,o.useRef)(),be=(0,r.Z)(O),ee=z?`components-modal-header-${be}`:V.labelledby,oe=(0,n.Z)(k==="firstContentElement"?"firstElement":k),xe=(0,u.Z)(),we=(0,c.Z)(),M=(0,o.useRef)(null),U=(0,o.useRef)(null),[W,se]=(0,o.useState)(!1),[F,ne]=(0,o.useState)(!1);let $;he||H==="fill"?$="is-full-screen":H&&($=`has-size-${H}`);const X=(0,o.useCallback)(()=>{if(!M.current)return;const a=(0,i.Z)(M.current);M.current===a?ne(!0):ne(!1)},[M]);(0,o.useEffect)(()=>(B(q.current),()=>m()),[]);const te=(0,o.useRef)();(0,o.useEffect)(()=>{te.current=I},[I]);const Z=(0,o.useContext)(x),re=(0,o.useRef)([]);(0,o.useEffect)(()=>{var T;Z.push(te);const[a,y]=Z;y&&((T=a==null?void 0:a.current)==null||T.call(a));const R=re.current;return()=>{var N,de;(de=(N=R[0])==null?void 0:N.current)==null||de.call(N),Z.shift()}},[Z]),(0,o.useEffect)(()=>{var a;const y=S,R=1+((a=h.get(y))!==null&&a!==void 0?a:0);return h.set(y,R),document.body.classList.add(S),()=>{const T=h.get(y)-1;T===0?(document.body.classList.remove(y),h.delete(y)):h.set(y,T)}},[S]),(0,o.useLayoutEffect)(()=>{if(!window.ResizeObserver||!U.current)return;const a=new ResizeObserver(X);return a.observe(U.current),X(),()=>{a.disconnect()}},[X,U]);function ve(a){le&&(a.code==="Escape"||a.key==="Escape")&&!a.defaultPrevented&&(a.preventDefault(),I&&I(a))}const Ee=(0,o.useCallback)(a=>{var T;var y;const R=(y=(T=a==null?void 0:a.currentTarget)==null?void 0:T.scrollTop)!==null&&y!==void 0?y:-1;!W&&R>0?se(!0):W&&R<=0&&se(!1)},[W]);let G=null;const Ce={onPointerDown:a=>{a.target===a.currentTarget&&(G=a.target,a.preventDefault())},onPointerUp:({target:a,button:y})=>{const R=a===G;G=null,y===0&&R&&I()}},ye=(0,d.jsx)("div",{ref:(0,g.Z)([q,D]),className:(0,t.Z)("components-modal__screen-overlay",pe),onKeyDown:(0,f.U)(ve),...ce?Ce:{},children:(0,d.jsx)(b.Z,{document,children:(0,d.jsx)("div",{className:(0,t.Z)("components-modal__frame",$,_e),style:me,ref:(0,g.Z)([xe,we,k!=="firstContentElement"?oe:null]),role:L,"aria-label":Y,"aria-labelledby":Y?void 0:ee,"aria-describedby":V.describedby,tabIndex:-1,onKeyDown:fe,children:(0,d.jsxs)("div",{className:(0,t.Z)("components-modal__content",{"hide-header":J,"is-scrollable":F,"has-scrolled-content":W}),role:"document",onScroll:Ee,ref:M,"aria-label":F?(0,v.__)("Scrollable section"):void 0,tabIndex:F?0:void 0,children:[!J&&(0,d.jsxs)("div",{className:"components-modal__header",children:[(0,d.jsxs)("div",{className:"components-modal__header-heading-container",children:[Q&&(0,d.jsx)("span",{className:"components-modal__icon-container","aria-hidden":!0,children:Q}),z&&(0,d.jsx)("h1",{id:ee,className:"components-modal__header-heading",children:z})]}),ge,ae&&(0,d.jsx)(_.ZP,{onClick:I,icon:p.Z,label:ue||(0,v.__)("Close")})]}),(0,d.jsx)("div",{ref:(0,g.Z)([U,k==="firstContentElement"?oe:null]),children:ie})]})})})});return(0,s.createPortal)((0,d.jsx)(x.Provider,{value:re.current,children:ye}),document.body)}const O=(0,o.forwardRef)(P),K=O},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(E,l,e)=>{e.d(l,{ZP:()=>m});var t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1__@types+react@18.3.1_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),s=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function u(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const c=s.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,g=(0,o.Z)("svg",{target:"ea4tfvq2"})("width:",r.Z.spinnerSize,"px;height:",r.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",n.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),v={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},p=(0,o.Z)("circle",{target:"ea4tfvq1"})(v,";stroke:",n.D.gray[300],";"),i=(0,o.Z)("path",{target:"ea4tfvq0"})(v,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",c,";");var w=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function B({className:_,...b},f){return(0,j.jsxs)(g,{className:(0,t.Z)("components-spinner",_),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...b,ref:f,children:[(0,j.jsx)(p,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,j.jsx)(i,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const m=(0,w.forwardRef)(B)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/style-provider/index.js":(E,l,e)=>{e.d(l,{V:()=>g,Z:()=>v});var t=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js"),o=e("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),s=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=new Set,u=new WeakMap,c=p=>{if(u.has(p))return u.get(p);let i=s.Z().replace(/[0-9]/g,"");for(;n.has(i);)i=s.Z().replace(/[0-9]/g,"");n.add(i);const w=(0,o.Z)({container:p,key:i});return u.set(p,w),w};function g(p){const{children:i,document:w}=p;if(!w)return null;const j=c(w.head);return(0,r.jsx)(t.C,{value:j,children:i})}const v=g},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js":(E,l,e)=>{e.d(l,{Z:()=>c});var t=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");const s="36px",r="12px",n={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:r,controlPaddingXLarge:`calc(${r} * 1.3334)`,controlPaddingXSmall:`calc(${r} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:s,controlHeightXSmall:`calc( ${s} * 0.6 )`,controlHeightSmall:`calc( ${s} * 0.8 )`,controlHeightLarge:`calc( ${s} * 1.2 )`,controlHeightXLarge:`calc( ${s} * 1.4 )`},u={toggleGroupControlBackgroundColor:n.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:n.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:n.controlBackgroundColor},c=Object.assign({},n,u,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js":(E,l,e)=>{e.d(l,{U:()=>t});function t(o){return s=>{const{isComposing:r}="nativeEvent"in s?s.nativeEvent:s;r||s.keyCode===229||o(s)}}},"../../../node_modules/.pnpm/@wordpress+dom@4.0.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js":(E,l,e)=>{e.d(l,{Z:()=>o});var t=e("../../../node_modules/.pnpm/@wordpress+dom@4.0.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");function o(s){return(0,t.c)(s.ownerDocument.defaultView,"element.ownerDocument.defaultView"),s.ownerDocument.defaultView.getComputedStyle(s)}},"../../../node_modules/.pnpm/@wordpress+dom@4.0.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js":(E,l,e)=>{e.d(l,{Z:()=>o});var t=e("../../../node_modules/.pnpm/@wordpress+dom@4.0.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");function o(s,r="vertical"){if(s){if((r==="vertical"||r==="all")&&s.scrollHeight>s.clientHeight){const{overflowY:n}=(0,t.Z)(s);if(/(auto|scroll)/.test(n))return s}if((r==="horizontal"||r==="all")&&s.scrollWidth>s.clientWidth){const{overflowX:n}=(0,t.Z)(s);if(/(auto|scroll)/.test(n))return s}return s.ownerDocument===s.parentNode?s:o(s.parentNode,r)}}},"../../../node_modules/.pnpm/@wordpress+dom@4.0.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js":(E,l,e)=>{e.d(l,{c:()=>t});function t(o,s){}},"../../../node_modules/.pnpm/@wordpress+element@6.0.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(E,l,e)=>{e.d(l,{Z:()=>A});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o,s,r,n;const u=/<(\/)?(\w+)\s*(\/)?>/g;function c(m,_,b,f,d){return{element:m,tokenStart:_,tokenLength:b,prevOffset:f,leadingTextStart:d,children:[]}}const g=(m,_)=>{if(o=m,s=0,r=[],n=[],u.lastIndex=0,!v(_))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(p(_));return(0,t.createElement)(t.Fragment,null,...r)},v=m=>{const _=typeof m=="object",b=_&&Object.values(m);return _&&b.length&&b.every(f=>(0,t.isValidElement)(f))};function p(m){const _=i(),[b,f,d,x]=_,h=n.length,P=d>s?s:null;if(!m[f])return w(),!1;switch(b){case"no-more-tokens":if(h!==0){const{leadingTextStart:D,tokenStart:S}=n.pop();r.push(o.substr(D,S))}return w(),!1;case"self-closed":return h===0?(P!==null&&r.push(o.substr(P,d-P)),r.push(m[f]),s=d+x,!0):(j(c(m[f],d,x)),s=d+x,!0);case"opener":return n.push(c(m[f],d,x,d+x,P)),s=d+x,!0;case"closer":if(h===1)return B(d),s=d+x,!0;const O=n.pop(),K=o.substr(O.prevOffset,d-O.prevOffset);O.children.push(K),O.prevOffset=d+x;const C=c(O.element,O.tokenStart,O.tokenLength,d+x);return C.children=O.children,j(C),s=d+x,!0;default:return w(),!1}}function i(){const m=u.exec(o);if(m===null)return["no-more-tokens"];const _=m.index,[b,f,d,x]=m,h=b.length;return x?["self-closed",d,_,h]:f?["closer",d,_,h]:["opener",d,_,h]}function w(){const m=o.length-s;m!==0&&r.push(o.substr(s,m))}function j(m){const{element:_,tokenStart:b,tokenLength:f,prevOffset:d,children:x}=m,h=n[n.length-1],P=o.substr(h.prevOffset,b-h.prevOffset);P&&h.children.push(P),h.children.push((0,t.cloneElement)(_,null,...x)),h.prevOffset=d||b+f}function B(m){const{element:_,leadingTextStart:b,prevOffset:f,tokenStart:d,children:x}=n.pop(),h=m?o.substr(f,m-f):o.substr(f);h&&x.push(h),b!==null&&r.push(o.substr(b,d-b)),r.push((0,t.cloneElement)(_,null,...x))}const A=g},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(E,l,e)=>{e.d(l,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({icon:r,size:n=24,...u},c){return(0,t.cloneElement)(r,{width:n,height:n,...u,ref:c})}const s=(0,t.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(E,l,e)=>{e.d(l,{Z:()=>r});var t=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsx)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(t.y$,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(E,l,e)=>{e.d(l,{Z:()=>r});var t=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsx)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(t.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+url@4.0.0/node_modules/@wordpress/url/build-module/add-query-args.js":(E,l,e)=>{e.d(l,{f:()=>s});var t=e("../../../node_modules/.pnpm/@wordpress+url@4.0.0/node_modules/@wordpress/url/build-module/get-query-args.js"),o=e("../../../node_modules/.pnpm/@wordpress+url@4.0.0/node_modules/@wordpress/url/build-module/build-query-string.js");function s(r="",n){if(!n||!Object.keys(n).length)return r;let u=r;const c=r.indexOf("?");return c!==-1&&(n=Object.assign((0,t.w)(r),n),u=u.substr(0,c)),u+"?"+(0,o.I)(n)}},"../../../node_modules/.pnpm/@wordpress+url@4.0.0/node_modules/@wordpress/url/build-module/build-query-string.js":(E,l,e)=>{e.d(l,{I:()=>t});function t(o){let s="";const r=Object.entries(o);let n;for(;n=r.shift();){let[u,c]=n;if(Array.isArray(c)||c&&c.constructor===Object){const v=Object.entries(c).reverse();for(const[p,i]of v)r.unshift([`${u}[${p}]`,i])}else c!==void 0&&(c===null&&(c=""),s+="&"+[u,c].map(encodeURIComponent).join("="))}return s.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@4.0.0/node_modules/@wordpress/url/build-module/get-query-args.js":(E,l,e)=>{e.d(l,{w:()=>r});function t(n){try{return decodeURIComponent(n)}catch(u){return n}}var o=e("../../../node_modules/.pnpm/@wordpress+url@4.0.0/node_modules/@wordpress/url/build-module/get-query-string.js");function s(n,u,c){const g=u.length,v=g-1;for(let p=0;p<g;p++){let i=u[p];!i&&Array.isArray(n)&&(i=n.length.toString()),i=["__proto__","constructor","prototype"].includes(i)?i.toUpperCase():i;const w=!isNaN(Number(u[p+1]));n[i]=p===v?c:n[i]||(w?[]:{}),Array.isArray(n[i])&&!w&&(n[i]={...n[i]}),n=n[i]}}function r(n){return((0,o.W)(n)||"").replace(/\+/g,"%20").split("&").reduce((u,c)=>{const[g,v=""]=c.split("=").filter(Boolean).map(t);if(g){const p=g.replace(/\]/g,"").split("[");s(u,p,v)}return u},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@4.0.0/node_modules/@wordpress/url/build-module/get-query-string.js":(E,l,e)=>{e.d(l,{W:()=>t});function t(o){let s;try{s=new URL(o,"http://example.com").search.substring(1)}catch(r){}if(s)return s}}}]);})();