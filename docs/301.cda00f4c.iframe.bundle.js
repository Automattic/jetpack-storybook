(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[301],{"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js":(E,a,o)=>{"use strict";o.d(a,{Z:()=>m});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=o.n(s),e=o("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js"),d=o("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),p=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),f=o("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.2.74_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),i=o("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js");function l(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const c=(0,f.Z)(i.Z,{target:"esh4a730"})({name:"rvs7bx",styles:"width:1em;height:1em;margin:0;vertical-align:middle;fill:currentColor"});function u(w,P){const{href:_,children:g,className:h,rel:v="",...C}=w,x=[...new Set([...v.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),y=t()("components-external-link",h),S=!!(_!=null&&_.startsWith("#")),F=R=>{S&&R.preventDefault(),w.onClick&&w.onClick(R)};return(0,n.createElement)("a",{...C,className:y,href:_,onClick:F,target:"_blank",rel:x,ref:P},g,(0,n.createElement)(p.Z,{as:"span"},(0,e.__)("(opens in a new tab)")),(0,n.createElement)(c,{icon:d.Z,className:"components-external-link__icon"}))}const m=(0,n.forwardRef)(u)},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/modal/index.js":(E,a,o)=>{"use strict";o.d(a,{Z:()=>R});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=o.n(s),e=o("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),d=o("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js"),f=o("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js"),i=o("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js"),l=o("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),c=o("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js"),u=o("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),r=o("../../../node_modules/.pnpm/@wordpress+dom@3.55.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js");const m=new Set(["alert","status","log","marquee","timer"]),w=[];function P(O){const j=Array.from(document.body.children),A=[];w.push(A);for(const k of j)k!==O&&_(k)&&(k.setAttribute("aria-hidden","true"),A.push(k))}function _(O){const j=O.getAttribute("role");return!(O.tagName==="SCRIPT"||O.hasAttribute("aria-hidden")||O.hasAttribute("aria-live")||j&&m.has(j))}function g(){const O=w.pop();if(O)for(const j of O)j.removeAttribute("aria-hidden")}var h=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),v=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js"),C=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js");const x=(0,n.createContext)([]),y=new Map;function S(O,j){const{bodyOpenClassName:A="modal-open",role:k="dialog",title:z=null,focusOnMount:M=!0,shouldCloseOnEsc:le=!0,shouldCloseOnClickOutside:ae=!0,isDismissible:ce=!0,aria:V={labelledby:void 0,describedby:void 0},onRequestClose:B,icon:Q,closeButtonLabel:ue,children:ie,style:me,overlayClassName:pe,className:fe,contentLabel:Y,onKeyDown:_e,isFullScreen:ge=!1,size:K,headerActions:he=null,__experimentalHideHeader:J=!1}=O,q=(0,n.useRef)(),Ce=(0,d.Z)(F),ee=z?`components-modal-header-${Ce}`:V.labelledby,oe=(0,p.Z)(M==="firstContentElement"?"firstElement":M),be=(0,f.Z)(),we=(0,i.Z)(),L=(0,n.useRef)(null),N=(0,n.useRef)(null),[Z,ne]=(0,n.useState)(!1),[$,te]=(0,n.useState)(!1);let H;ge||K==="fill"?H="is-full-screen":K&&(H=`has-size-${K}`);const X=(0,n.useCallback)(()=>{if(!L.current)return;const b=(0,r.Z)(L.current);L.current===b?te(!0):te(!1)},[L]);(0,n.useEffect)(()=>(P(q.current),()=>g()),[]);const se=(0,n.useRef)();(0,n.useEffect)(()=>{se.current=B},[B]);const U=(0,n.useContext)(x),re=(0,n.useRef)([]);(0,n.useEffect)(()=>{var I;U.push(se);const[b,D]=U;D&&((I=b==null?void 0:b.current)==null||I.call(b));const T=re.current;return()=>{var W,de;(de=(W=T[0])==null?void 0:W.current)==null||de.call(W),U.shift()}},[U]),(0,n.useEffect)(()=>{var b;const D=A,T=1+((b=y.get(D))!==null&&b!==void 0?b:0);return y.set(D,T),document.body.classList.add(A),()=>{const I=y.get(D)-1;I===0?(document.body.classList.remove(D),y.delete(D)):y.set(D,I)}},[A]),(0,n.useLayoutEffect)(()=>{if(!window.ResizeObserver||!N.current)return;const b=new ResizeObserver(X);return b.observe(N.current),X(),()=>{b.disconnect()}},[X,N]);function ve(b){le&&(b.code==="Escape"||b.key==="Escape")&&!b.defaultPrevented&&(b.preventDefault(),B&&B(b))}const ye=(0,n.useCallback)(b=>{var I;var D;const T=(D=(I=b==null?void 0:b.currentTarget)==null?void 0:I.scrollTop)!==null&&D!==void 0?D:-1;!Z&&T>0?ne(!0):Z&&T<=0&&ne(!1)},[Z]);let G=null;const Ee={onPointerDown:b=>{b.target===b.currentTarget&&(G=b.target,b.preventDefault())},onPointerUp:({target:b,button:D})=>{const T=b===G;G=null,D===0&&T&&B()}},xe=(0,n.createElement)("div",{ref:(0,l.Z)([q,j]),className:t()("components-modal__screen-overlay",pe),onKeyDown:(0,C.U)(ve),...ae?Ee:{}},(0,n.createElement)(v.Z,{document},(0,n.createElement)("div",{className:t()("components-modal__frame",H,fe),style:me,ref:(0,l.Z)([be,we,M!=="firstContentElement"?oe:null]),role:k,"aria-label":Y,"aria-labelledby":Y?void 0:ee,"aria-describedby":V.describedby,tabIndex:-1,onKeyDown:_e},(0,n.createElement)("div",{className:t()("components-modal__content",{"hide-header":J,"is-scrollable":$,"has-scrolled-content":Z}),role:"document",onScroll:ye,ref:L,"aria-label":$?(0,c.__)("Scrollable section"):void 0,tabIndex:$?0:void 0},!J&&(0,n.createElement)("div",{className:"components-modal__header"},(0,n.createElement)("div",{className:"components-modal__header-heading-container"},Q&&(0,n.createElement)("span",{className:"components-modal__icon-container","aria-hidden":!0},Q),z&&(0,n.createElement)("h1",{id:ee,className:"components-modal__header-heading"},z)),he,ce&&(0,n.createElement)(h.ZP,{onClick:B,icon:u.Z,label:ue||(0,c.__)("Close")})),(0,n.createElement)("div",{ref:(0,l.Z)([N,M==="firstContentElement"?oe:null])},ie)))));return(0,e.createPortal)((0,n.createElement)(x.Provider,{value:re.current},xe),document.body)}const F=(0,n.forwardRef)(S),R=F},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(E,a,o)=>{"use strict";o.d(a,{ZP:()=>_});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=o.n(s),e=o("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.2.74_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),d=o("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.74_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),p=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),f=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function i(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const l=d.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,c=(0,e.Z)("svg",{target:"ea4tfvq2"})("width:",p.Z.spinnerSize,"px;height:",p.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",f.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),u={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},r=(0,e.Z)("circle",{target:"ea4tfvq1"})(u,";stroke:",f.D.gray[300],";"),m=(0,e.Z)("path",{target:"ea4tfvq0"})(u,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",l,";");function w({className:g,...h},v){return(0,n.createElement)(c,{className:t()("components-spinner",g),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...h,ref:v},(0,n.createElement)(r,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,n.createElement)(m,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const _=(0,n.forwardRef)(w)},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js":(E,a,o)=>{"use strict";o.d(a,{V:()=>i,Z:()=>l});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.74_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js"),t=o("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),e=o("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js");const d=new Set,p=new WeakMap,f=c=>{if(p.has(c))return p.get(c);let u=e.Z().replace(/[0-9]/g,"");for(;d.has(u);)u=e.Z().replace(/[0-9]/g,"");d.add(u);const r=(0,t.Z)({container:c,key:u});return p.set(c,r),r};function i(c){const{children:u,document:r}=c;if(!r)return null;const m=f(r.head);return(0,n.createElement)(s.C,{value:m},u)}const l=i},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(E,a,o)=>{"use strict";o.d(a,{Z:()=>f});var n=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),s=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const t="36px",e="12px",d={controlSurfaceColor:s.D.white,controlTextActiveColor:s.D.theme.accent,controlPaddingX:e,controlPaddingXLarge:`calc(${e} * 1.3334)`,controlPaddingXSmall:`calc(${e} / 1.3334)`,controlBackgroundColor:s.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${s.D.theme.accent}`,controlDestructiveBorderColor:s.D.alert.red,controlHeight:t,controlHeightXSmall:`calc( ${t} * 0.6 )`,controlHeightSmall:`calc( ${t} * 0.8 )`,controlHeightLarge:`calc( ${t} * 1.2 )`,controlHeightXLarge:`calc( ${t} * 1.4 )`},p={toggleGroupControlBackgroundColor:d.controlBackgroundColor,toggleGroupControlBorderColor:s.D.ui.border,toggleGroupControlBackdropBackgroundColor:d.controlSurfaceColor,toggleGroupControlBackdropBorderColor:s.D.ui.border,toggleGroupControlButtonColorActive:d.controlBackgroundColor},f=Object.assign({},d,p,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,n.D)(2)}`,cardPaddingSmall:`${(0,n.D)(4)}`,cardPaddingMedium:`${(0,n.D)(4)} ${(0,n.D)(6)}`,cardPaddingLarge:`${(0,n.D)(6)} ${(0,n.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:s.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:s.D.white,surfaceColor:s.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js":(E,a,o)=>{"use strict";o.d(a,{U:()=>n});function n(s){return t=>{const{isComposing:e}="nativeEvent"in t?t.nativeEvent:t;e||t.keyCode===229||s(t)}}},"../../../node_modules/.pnpm/@wordpress+dom@3.55.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js":(E,a,o)=>{"use strict";o.d(a,{Z:()=>s});var n=o("../../../node_modules/.pnpm/@wordpress+dom@3.55.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");function s(t){return(0,n.c)(t.ownerDocument.defaultView,"element.ownerDocument.defaultView"),t.ownerDocument.defaultView.getComputedStyle(t)}},"../../../node_modules/.pnpm/@wordpress+dom@3.55.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js":(E,a,o)=>{"use strict";o.d(a,{Z:()=>s});var n=o("../../../node_modules/.pnpm/@wordpress+dom@3.55.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");function s(t,e="vertical"){if(t){if((e==="vertical"||e==="all")&&t.scrollHeight>t.clientHeight){const{overflowY:d}=(0,n.Z)(t);if(/(auto|scroll)/.test(d))return t}if((e==="horizontal"||e==="all")&&t.scrollWidth>t.clientWidth){const{overflowX:d}=(0,n.Z)(t);if(/(auto|scroll)/.test(d))return t}return t.ownerDocument===t.parentNode?t:s(t.parentNode,e)}}},"../../../node_modules/.pnpm/@wordpress+dom@3.55.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js":(E,a,o)=>{"use strict";o.d(a,{c:()=>n});function n(s,t){}},"../../../node_modules/.pnpm/@wordpress+element@5.32.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(E,a,o)=>{"use strict";o.d(a,{Z:()=>P});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let s,t,e,d;const p=/<(\/)?(\w+)\s*(\/)?>/g;function f(_,g,h,v,C){return{element:_,tokenStart:g,tokenLength:h,prevOffset:v,leadingTextStart:C,children:[]}}const i=(_,g)=>{if(s=_,t=0,e=[],d=[],p.lastIndex=0,!l(g))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(c(g));return(0,n.createElement)(n.Fragment,null,...e)},l=_=>{const g=typeof _=="object",h=g&&Object.values(_);return g&&h.length&&h.every(v=>(0,n.isValidElement)(v))};function c(_){const g=u(),[h,v,C,x]=g,y=d.length,S=C>t?t:null;if(!_[v])return r(),!1;switch(h){case"no-more-tokens":if(y!==0){const{leadingTextStart:j,tokenStart:A}=d.pop();e.push(s.substr(j,A))}return r(),!1;case"self-closed":return y===0?(S!==null&&e.push(s.substr(S,C-S)),e.push(_[v]),t=C+x,!0):(m(f(_[v],C,x)),t=C+x,!0);case"opener":return d.push(f(_[v],C,x,C+x,S)),t=C+x,!0;case"closer":if(y===1)return w(C),t=C+x,!0;const F=d.pop(),R=s.substr(F.prevOffset,C-F.prevOffset);F.children.push(R),F.prevOffset=C+x;const O=f(F.element,F.tokenStart,F.tokenLength,C+x);return O.children=F.children,m(O),t=C+x,!0;default:return r(),!1}}function u(){const _=p.exec(s);if(_===null)return["no-more-tokens"];const g=_.index,[h,v,C,x]=_,y=h.length;return x?["self-closed",C,g,y]:v?["closer",C,g,y]:["opener",C,g,y]}function r(){const _=s.length-t;_!==0&&e.push(s.substr(t,_))}function m(_){const{element:g,tokenStart:h,tokenLength:v,prevOffset:C,children:x}=_,y=d[d.length-1],S=s.substr(y.prevOffset,h-y.prevOffset);S&&y.children.push(S),y.children.push((0,n.cloneElement)(g,null,...x)),y.prevOffset=C||h+v}function w(_){const{element:g,leadingTextStart:h,prevOffset:v,tokenStart:C,children:x}=d.pop(),y=_?s.substr(v,_-v):s.substr(v);y&&x.push(y),h!==null&&e.push(s.substr(h,C-h)),e.push((0,n.cloneElement)(g,null,...x))}const P=i},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(E,a,o)=>{"use strict";o.d(a,{Z:()=>t});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s({icon:e,size:d=24,...p},f){return(0,n.cloneElement)(e,{width:d,height:d,...p,ref:f})}const t=(0,n.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(E,a,o)=>{"use strict";o.d(a,{Z:()=>e});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,n.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.y$,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(E,a,o)=>{"use strict";o.d(a,{Z:()=>e});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const e=(0,n.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/add-query-args.js":(E,a,o)=>{"use strict";o.d(a,{f:()=>t});var n=o("../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/get-query-args.js"),s=o("../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/build-query-string.js");function t(e="",d){if(!d||!Object.keys(d).length)return e;let p=e;const f=e.indexOf("?");return f!==-1&&(d=Object.assign((0,n.w)(e),d),p=p.substr(0,f)),p+"?"+(0,s.I)(d)}},"../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/build-query-string.js":(E,a,o)=>{"use strict";o.d(a,{I:()=>n});function n(s){let t="";const e=Object.entries(s);let d;for(;d=e.shift();){let[p,f]=d;if(Array.isArray(f)||f&&f.constructor===Object){const l=Object.entries(f).reverse();for(const[c,u]of l)e.unshift([`${p}[${c}]`,u])}else f!==void 0&&(f===null&&(f=""),t+="&"+[p,f].map(encodeURIComponent).join("="))}return t.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/get-query-args.js":(E,a,o)=>{"use strict";o.d(a,{w:()=>e});function n(d){try{return decodeURIComponent(d)}catch(p){return d}}var s=o("../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/get-query-string.js");function t(d,p,f){const i=p.length,l=i-1;for(let c=0;c<i;c++){let u=p[c];!u&&Array.isArray(d)&&(u=d.length.toString()),u=["__proto__","constructor","prototype"].includes(u)?u.toUpperCase():u;const r=!isNaN(Number(p[c+1]));d[u]=c===l?f:d[u]||(r?[]:{}),Array.isArray(d[u])&&!r&&(d[u]={...d[u]}),d=d[u]}}function e(d){return((0,s.W)(d)||"").replace(/\+/g,"%20").split("&").reduce((p,f)=>{const[i,l=""]=f.split("=").filter(Boolean).map(n);if(i){const c=i.replace(/\]/g,"").split("[");t(p,c,l)}return p},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@3.56.0/node_modules/@wordpress/url/build-module/get-query-string.js":(E,a,o)=>{"use strict";o.d(a,{W:()=>n});function n(s){let t;try{t=new URL(s,"http://example.com").search.substring(1)}catch(e){}if(t)return t}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(E,a,o)=>{var n=o("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");a.formatArgs=t,a.save=e,a.load=d,a.useColors=s,a.storage=p(),a.destroy=(()=>{let i=!1;return()=>{i||(i=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),a.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function s(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function t(i){if(i[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+i[0]+(this.useColors?"%c ":" ")+"+"+E.exports.humanize(this.diff),!this.useColors)return;const l="color: "+this.color;i.splice(1,0,l,"color: inherit");let c=0,u=0;i[0].replace(/%[a-zA-Z%]/g,r=>{r!=="%%"&&(c++,r==="%c"&&(u=c))}),i.splice(u,0,l)}a.log=console.debug||console.log||(()=>{});function e(i){try{i?a.storage.setItem("debug",i):a.storage.removeItem("debug")}catch(l){}}function d(){let i;try{i=a.storage.getItem("debug")}catch(l){}return!i&&typeof n!="undefined"&&"env"in n&&(i=n.env.DEBUG),i}function p(){try{return localStorage}catch(i){}}E.exports=o("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(a);const{formatters:f}=E.exports;f.j=function(i){try{return JSON.stringify(i)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(E,a,o)=>{function n(s){e.debug=e,e.default=e,e.coerce=c,e.disable=f,e.enable=p,e.enabled=i,e.humanize=o("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),e.destroy=u,Object.keys(s).forEach(r=>{e[r]=s[r]}),e.names=[],e.skips=[],e.formatters={};function t(r){let m=0;for(let w=0;w<r.length;w++)m=(m<<5)-m+r.charCodeAt(w),m|=0;return e.colors[Math.abs(m)%e.colors.length]}e.selectColor=t;function e(r){let m,w=null,P,_;function g(...h){if(!g.enabled)return;const v=g,C=Number(new Date),x=C-(m||C);v.diff=x,v.prev=m,v.curr=C,m=C,h[0]=e.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");let y=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,(F,R)=>{if(F==="%%")return"%";y++;const O=e.formatters[R];if(typeof O=="function"){const j=h[y];F=O.call(v,j),h.splice(y,1),y--}return F}),e.formatArgs.call(v,h),(v.log||e.log).apply(v,h)}return g.namespace=r,g.useColors=e.useColors(),g.color=e.selectColor(r),g.extend=d,g.destroy=e.destroy,Object.defineProperty(g,"enabled",{enumerable:!0,configurable:!1,get:()=>w!==null?w:(P!==e.namespaces&&(P=e.namespaces,_=e.enabled(r)),_),set:h=>{w=h}}),typeof e.init=="function"&&e.init(g),g}function d(r,m){const w=e(this.namespace+(typeof m=="undefined"?":":m)+r);return w.log=this.log,w}function p(r){e.save(r),e.namespaces=r,e.names=[],e.skips=[];let m;const w=(typeof r=="string"?r:"").split(/[\s,]+/),P=w.length;for(m=0;m<P;m++)w[m]&&(r=w[m].replace(/\*/g,".*?"),r[0]==="-"?e.skips.push(new RegExp("^"+r.slice(1)+"$")):e.names.push(new RegExp("^"+r+"$")))}function f(){const r=[...e.names.map(l),...e.skips.map(l).map(m=>"-"+m)].join(",");return e.enable(""),r}function i(r){if(r[r.length-1]==="*")return!0;let m,w;for(m=0,w=e.skips.length;m<w;m++)if(e.skips[m].test(r))return!1;for(m=0,w=e.names.length;m<w;m++)if(e.names[m].test(r))return!0;return!1}function l(r){return r.toString().substring(2,r.toString().length-2).replace(/\.\*\?$/,"*")}function c(r){return r instanceof Error?r.stack||r.message:r}function u(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}E.exports=n},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":E=>{var a=1e3,o=a*60,n=o*60,s=n*24,t=s*7,e=s*365.25;E.exports=function(l,c){c=c||{};var u=typeof l;if(u==="string"&&l.length>0)return d(l);if(u==="number"&&isFinite(l))return c.long?f(l):p(l);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(l))};function d(l){if(l=String(l),!(l.length>100)){var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);if(c){var u=parseFloat(c[1]),r=(c[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return u*e;case"weeks":case"week":case"w":return u*t;case"days":case"day":case"d":return u*s;case"hours":case"hour":case"hrs":case"hr":case"h":return u*n;case"minutes":case"minute":case"mins":case"min":case"m":return u*o;case"seconds":case"second":case"secs":case"sec":case"s":return u*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function p(l){var c=Math.abs(l);return c>=s?Math.round(l/s)+"d":c>=n?Math.round(l/n)+"h":c>=o?Math.round(l/o)+"m":c>=a?Math.round(l/a)+"s":l+"ms"}function f(l){var c=Math.abs(l);return c>=s?i(l,c,s,"day"):c>=n?i(l,c,n,"hour"):c>=o?i(l,c,o,"minute"):c>=a?i(l,c,a,"second"):l+" ms"}function i(l,c,u,r){var m=c>=u*1.5;return Math.round(l/u)+" "+r+(m?"s":"")}}}]);})();