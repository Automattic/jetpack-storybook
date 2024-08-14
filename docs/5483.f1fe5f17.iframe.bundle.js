"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5483],{"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/external-link/index.js":(C,l,e)=>{e.d(l,{Z:()=>a});var t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n(g,E){const{href:p,children:u,className:v,rel:j="",...T}=g,B=[...new Set([...j.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),i=(0,t.Z)("components-external-link",v),_=!!(p!=null&&p.startsWith("#")),x=f=>{_&&f.preventDefault(),g.onClick&&g.onClick(f)};return(0,r.jsxs)("a",{...T,className:i,href:p,onClick:x,target:"_blank",rel:B,ref:E,children:[(0,r.jsx)("span",{className:"components-external-link__contents",children:u}),(0,r.jsx)("span",{className:"components-external-link__icon","aria-label":(0,o.__)("(opens in a new tab)"),children:"\u2197"})]})}const a=(0,s.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js":(C,l,e)=>{e.d(l,{Z:()=>K});var t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js"),g=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),E=e("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js"),u=e("../../../node_modules/.pnpm/@wordpress+dom@4.5.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js");const v=new Set(["alert","status","log","marquee","timer"]),j=[];function T(y){const D=Array.from(document.body.children),R=[];j.push(R);for(const A of D)A!==y&&B(A)&&(A.setAttribute("aria-hidden","true"),R.push(A))}function B(y){const D=y.getAttribute("role");return!(y.tagName==="SCRIPT"||y.hasAttribute("aria-hidden")||y.hasAttribute("aria-live")||D&&v.has(D))}function i(){const y=j.pop();if(y)for(const D of y)D.removeAttribute("aria-hidden")}var _=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/style-provider/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=(0,o.createContext)(new Set),h=new Map;function P(y,D){const{bodyOpenClassName:R="modal-open",role:A="dialog",title:z=null,focusOnMount:k=!0,shouldCloseOnEsc:re=!0,shouldCloseOnClickOutside:de=!0,isDismissible:le=!0,aria:Q={labelledby:void 0,describedby:void 0},onRequestClose:L,icon:Y,closeButtonLabel:ae,children:ce,style:ue,overlayClassName:ie,className:me,contentLabel:J,onKeyDown:pe,isFullScreen:_e=!1,size:F,headerActions:fe=null,__experimentalHideHeader:q=!1}=y,ee=(0,o.useRef)(),he=(0,r.Z)(O),oe=z?`components-modal-header-${he}`:Q.labelledby,se=(0,n.Z)(k==="firstContentElement"?"firstElement":k),ge=(0,c.Z)(),xe=(0,a.Z)(),I=(0,o.useRef)(null),U=(0,o.useRef)(null),[W,ne]=(0,o.useState)(!1),[H,te]=(0,o.useState)(!1);let $;_e||F==="fill"?$="is-full-screen":F&&($=`has-size-${F}`);const X=(0,o.useCallback)(()=>{if(!I.current)return;const m=(0,u.Z)(I.current);I.current===m?te(!0):te(!1)},[I]);(0,o.useEffect)(()=>(T(ee.current),()=>i()),[]);const Z=(0,o.useRef)();(0,o.useEffect)(()=>{Z.current=L},[L]);const N=(0,o.useContext)(b),[G]=(0,o.useState)(()=>new Set);(0,o.useEffect)(()=>{var m;N.add(Z);for(const w of N)w!==Z&&((m=w.current)==null||m.call(w));return()=>{var w;for(const S of G)(w=S.current)==null||w.call(S);N.delete(Z)}},[N,G]),(0,o.useEffect)(()=>{var m;const w=R,S=1+((m=h.get(w))!==null&&m!==void 0?m:0);return h.set(w,S),document.body.classList.add(R),()=>{const M=h.get(w)-1;M===0?(document.body.classList.remove(w),h.delete(w)):h.set(w,M)}},[R]),(0,o.useLayoutEffect)(()=>{if(!window.ResizeObserver||!U.current)return;const m=new ResizeObserver(X);return m.observe(U.current),X(),()=>{m.disconnect()}},[X,U]);function be(m){re&&(m.code==="Escape"||m.key==="Escape")&&!m.defaultPrevented&&(m.preventDefault(),L&&L(m))}const we=(0,o.useCallback)(m=>{var M;var w;const S=(w=(M=m==null?void 0:m.currentTarget)==null?void 0:M.scrollTop)!==null&&w!==void 0?w:-1;!W&&S>0?ne(!0):W&&S<=0&&ne(!1)},[W]);let V=null;const ve={onPointerDown:m=>{m.target===m.currentTarget&&(V=m.target,m.preventDefault())},onPointerUp:({target:m,button:w})=>{const S=m===V;V=null,w===0&&S&&L()}},Ee=(0,d.jsx)("div",{ref:(0,g.Z)([ee,D]),className:(0,t.Z)("components-modal__screen-overlay",ie),onKeyDown:(0,f.U)(be),...de?ve:{},children:(0,d.jsx)(x.Z,{document,children:(0,d.jsx)("div",{className:(0,t.Z)("components-modal__frame",$,me),style:ue,ref:(0,g.Z)([ge,xe,k!=="firstContentElement"?se:null]),role:A,"aria-label":J,"aria-labelledby":J?void 0:oe,"aria-describedby":Q.describedby,tabIndex:-1,onKeyDown:pe,children:(0,d.jsxs)("div",{className:(0,t.Z)("components-modal__content",{"hide-header":q,"is-scrollable":H,"has-scrolled-content":W}),role:"document",onScroll:we,ref:I,"aria-label":H?(0,E.__)("Scrollable section"):void 0,tabIndex:H?0:void 0,children:[!q&&(0,d.jsxs)("div",{className:"components-modal__header",children:[(0,d.jsxs)("div",{className:"components-modal__header-heading-container",children:[Y&&(0,d.jsx)("span",{className:"components-modal__icon-container","aria-hidden":!0,children:Y}),z&&(0,d.jsx)("h1",{id:oe,className:"components-modal__header-heading",children:z})]}),fe,le&&(0,d.jsx)(_.ZP,{onClick:L,icon:p.Z,label:ae||(0,E.__)("Close")})]}),(0,d.jsx)("div",{ref:(0,g.Z)([U,k==="firstContentElement"?se:null]),children:ce})]})})})});return(0,s.createPortal)((0,d.jsx)(b.Provider,{value:G,children:Ee}),document.body)}const O=(0,o.forwardRef)(P),K=O},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(C,l,e)=>{e.d(l,{ZP:()=>i});var t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),s=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function c(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const a=s.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,g=(0,o.Z)("svg",{target:"ea4tfvq2"})("width:",r.Z.spinnerSize,"px;height:",r.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",n.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),E={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},p=(0,o.Z)("circle",{target:"ea4tfvq1"})(E,";stroke:",n.D.gray[300],";"),u=(0,o.Z)("path",{target:"ea4tfvq0"})(E,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",a,";");var v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function T({className:_,...x},f){return(0,j.jsxs)(g,{className:(0,t.Z)("components-spinner",_),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...x,ref:f,children:[(0,j.jsx)(p,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,j.jsx)(u,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const i=(0,v.forwardRef)(T)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/style-provider/index.js":(C,l,e)=>{e.d(l,{V:()=>g,Z:()=>E});var t=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js"),o=e("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),s=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=new Set,c=new WeakMap,a=p=>{if(c.has(p))return c.get(p);let u=s.Z().replace(/[0-9]/g,"");for(;n.has(u);)u=s.Z().replace(/[0-9]/g,"");n.add(u);const v=(0,o.Z)({container:p,key:u});return c.set(p,v),v};function g(p){const{children:u,document:v}=p;if(!v)return null;const j=a(v.head);return(0,r.jsx)(t.C,{value:j,children:u})}const E=g},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js":(C,l,e)=>{e.d(l,{Z:()=>a});var t=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");const s="36px",r="12px",n={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:r,controlPaddingXLarge:`calc(${r} * 1.3334)`,controlPaddingXSmall:`calc(${r} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:s,controlHeightXSmall:`calc( ${s} * 0.6 )`,controlHeightSmall:`calc( ${s} * 0.8 )`,controlHeightLarge:`calc( ${s} * 1.2 )`,controlHeightXLarge:`calc( ${s} * 1.4 )`},c={toggleGroupControlBackgroundColor:n.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:n.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:n.controlBackgroundColor},a=Object.assign({},n,c,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusXSmall:"1px",radiusSmall:"2px",radiusMedium:"4px",radiusLarge:"8px",radiusFull:"9999px",radiusRound:"50%",radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js":(C,l,e)=>{e.d(l,{U:()=>t});function t(o){return s=>{const{isComposing:r}="nativeEvent"in s?s.nativeEvent:s;r||s.keyCode===229||o(s)}}},"../../../node_modules/.pnpm/@wordpress+dom@4.5.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js":(C,l,e)=>{e.d(l,{Z:()=>o});var t=e("../../../node_modules/.pnpm/@wordpress+dom@4.5.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");function o(s){return(0,t.c)(s.ownerDocument.defaultView,"element.ownerDocument.defaultView"),s.ownerDocument.defaultView.getComputedStyle(s)}},"../../../node_modules/.pnpm/@wordpress+dom@4.5.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js":(C,l,e)=>{e.d(l,{Z:()=>o});var t=e("../../../node_modules/.pnpm/@wordpress+dom@4.5.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");function o(s,r="vertical"){if(s){if((r==="vertical"||r==="all")&&s.scrollHeight>s.clientHeight){const{overflowY:n}=(0,t.Z)(s);if(/(auto|scroll)/.test(n))return s}if((r==="horizontal"||r==="all")&&s.scrollWidth>s.clientWidth){const{overflowX:n}=(0,t.Z)(s);if(/(auto|scroll)/.test(n))return s}return s.ownerDocument===s.parentNode?s:o(s.parentNode,r)}}},"../../../node_modules/.pnpm/@wordpress+dom@4.5.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js":(C,l,e)=>{e.d(l,{c:()=>t});function t(o,s){}},"../../../node_modules/.pnpm/@wordpress+element@6.5.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(C,l,e)=>{e.d(l,{Z:()=>B});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o,s,r,n;const c=/<(\/)?(\w+)\s*(\/)?>/g;function a(i,_,x,f,d){return{element:i,tokenStart:_,tokenLength:x,prevOffset:f,leadingTextStart:d,children:[]}}const g=(i,_)=>{if(o=i,s=0,r=[],n=[],c.lastIndex=0,!E(_))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(p(_));return(0,t.createElement)(t.Fragment,null,...r)},E=i=>{const _=typeof i=="object",x=_&&Object.values(i);return _&&x.length&&x.every(f=>(0,t.isValidElement)(f))};function p(i){const _=u(),[x,f,d,b]=_,h=n.length,P=d>s?s:null;if(!i[f])return v(),!1;switch(x){case"no-more-tokens":if(h!==0){const{leadingTextStart:D,tokenStart:R}=n.pop();r.push(o.substr(D,R))}return v(),!1;case"self-closed":return h===0?(P!==null&&r.push(o.substr(P,d-P)),r.push(i[f]),s=d+b,!0):(j(a(i[f],d,b)),s=d+b,!0);case"opener":return n.push(a(i[f],d,b,d+b,P)),s=d+b,!0;case"closer":if(h===1)return T(d),s=d+b,!0;const O=n.pop(),K=o.substr(O.prevOffset,d-O.prevOffset);O.children.push(K),O.prevOffset=d+b;const y=a(O.element,O.tokenStart,O.tokenLength,d+b);return y.children=O.children,j(y),s=d+b,!0;default:return v(),!1}}function u(){const i=c.exec(o);if(i===null)return["no-more-tokens"];const _=i.index,[x,f,d,b]=i,h=x.length;return b?["self-closed",d,_,h]:f?["closer",d,_,h]:["opener",d,_,h]}function v(){const i=o.length-s;i!==0&&r.push(o.substr(s,i))}function j(i){const{element:_,tokenStart:x,tokenLength:f,prevOffset:d,children:b}=i,h=n[n.length-1],P=o.substr(h.prevOffset,x-h.prevOffset);P&&h.children.push(P),h.children.push((0,t.cloneElement)(_,null,...b)),h.prevOffset=d||x+f}function T(i){const{element:_,leadingTextStart:x,prevOffset:f,tokenStart:d,children:b}=n.pop(),h=i?o.substr(f,i-f):o.substr(f);h&&b.push(h),x!==null&&r.push(o.substr(x,d-x)),r.push((0,t.cloneElement)(_,null,...b))}const B=g},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(C,l,e)=>{e.d(l,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({icon:r,size:n=24,...c},a){return(0,t.cloneElement)(r,{width:n,height:n,...c,ref:a})}const s=(0,t.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(C,l,e)=>{e.d(l,{Z:()=>r});var t=e("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsx)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(t.y$,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(C,l,e)=>{e.d(l,{Z:()=>r});var t=e("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,o.jsx)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(t.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+url@4.5.0/node_modules/@wordpress/url/build-module/add-query-args.js":(C,l,e)=>{e.d(l,{f:()=>s});var t=e("../../../node_modules/.pnpm/@wordpress+url@4.5.0/node_modules/@wordpress/url/build-module/get-query-args.js"),o=e("../../../node_modules/.pnpm/@wordpress+url@4.5.0/node_modules/@wordpress/url/build-module/build-query-string.js");function s(r="",n){if(!n||!Object.keys(n).length)return r;let c=r;const a=r.indexOf("?");return a!==-1&&(n=Object.assign((0,t.w)(r),n),c=c.substr(0,a)),c+"?"+(0,o.I)(n)}},"../../../node_modules/.pnpm/@wordpress+url@4.5.0/node_modules/@wordpress/url/build-module/build-query-string.js":(C,l,e)=>{e.d(l,{I:()=>t});function t(o){let s="";const r=Object.entries(o);let n;for(;n=r.shift();){let[c,a]=n;if(Array.isArray(a)||a&&a.constructor===Object){const E=Object.entries(a).reverse();for(const[p,u]of E)r.unshift([`${c}[${p}]`,u])}else a!==void 0&&(a===null&&(a=""),s+="&"+[c,a].map(encodeURIComponent).join("="))}return s.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@4.5.0/node_modules/@wordpress/url/build-module/get-query-args.js":(C,l,e)=>{e.d(l,{w:()=>r});function t(n){try{return decodeURIComponent(n)}catch(c){return n}}var o=e("../../../node_modules/.pnpm/@wordpress+url@4.5.0/node_modules/@wordpress/url/build-module/get-query-string.js");function s(n,c,a){const g=c.length,E=g-1;for(let p=0;p<g;p++){let u=c[p];!u&&Array.isArray(n)&&(u=n.length.toString()),u=["__proto__","constructor","prototype"].includes(u)?u.toUpperCase():u;const v=!isNaN(Number(c[p+1]));n[u]=p===E?a:n[u]||(v?[]:{}),Array.isArray(n[u])&&!v&&(n[u]={...n[u]}),n=n[u]}}function r(n){return((0,o.W)(n)||"").replace(/\+/g,"%20").split("&").reduce((c,a)=>{const[g,E=""]=a.split("=").filter(Boolean).map(t);if(g){const p=g.replace(/\]/g,"").split("[");s(c,p,E)}return c},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@4.5.0/node_modules/@wordpress/url/build-module/get-query-string.js":(C,l,e)=>{e.d(l,{W:()=>t});function t(o){let s;try{s=new URL(o,"http://example.com").search.substring(1)}catch(r){}if(s)return s}}}]);})();
