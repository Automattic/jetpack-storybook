"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7936],{"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js":(te,T,o)=>{o.d(T,{ZP:()=>C,zx:()=>v});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),P=o.n(A),M=o("../../../node_modules/.pnpm/@wordpress+deprecated@3.37.0/node_modules/@wordpress/deprecated/build-module/index.js"),f=o("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),u=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js"),O=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js"),x=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js");const N=["onMouseDown","onClick"];function i({isDefault:B,isPrimary:W,isSecondary:R,isTertiary:c,isLink:m,isSmall:y,size:D,variant:I,...h}){let Y=D,E=I;if(y){var X;(X=Y)!==null&&X!==void 0||(Y="small")}if(W){var q;(q=E)!==null&&q!==void 0||(E="primary")}if(c){var V;(V=E)!==null&&V!==void 0||(E="tertiary")}if(R){var Z;(Z=E)!==null&&Z!==void 0||(E="secondary")}if(B){var w;(0,M.Z)("Button isDefault prop",{since:"5.4",alternative:'variant="secondary"',version:"6.2"}),(w=E)!==null&&w!==void 0||(E="secondary")}if(m){var z;(z=E)!==null&&z!==void 0||(E="link")}return{...h,size:Y,variant:E}}function s(B,W){var J,ce;const{__next40pxDefaultSize:R,isPressed:c,isBusy:m,isDestructive:y,className:D,disabled:I,icon:h,iconPosition:Y="left",iconSize:E,showTooltip:X,tooltipPosition:q,shortcut:V,label:Z,children:w,size:z="default",text:ue,variant:n,__experimentalIsFocusable:t,describedBy:r,...a}=i(B),{href:_,target:b,...l}="href"in a?a:{href:void 0,target:void 0,...a},d=(0,f.Z)(v,"components-button__description"),p=typeof w=="string"&&!!w||Array.isArray(w)&&(w==null?void 0:w[0])&&w[0]!==null&&((ce=(J=w==null?void 0:w[0])==null?void 0:J.props)==null?void 0:ce.className)!=="components-tooltip",g=P()("components-button",D,{"is-next-40px-default-size":R,"is-secondary":n==="secondary","is-primary":n==="primary","is-small":z==="small","is-compact":z==="compact","is-tertiary":n==="tertiary","is-pressed":c,"is-busy":m,"is-link":n==="link","is-destructive":y,"has-text":!!h&&p,"has-icon":!!h}),S=I&&!t,j=_!==void 0&&!S?"a":"button",G=j==="button"?{type:"button",disabled:S,"aria-pressed":c}:{},ee=j==="a"?{href:_,target:b}:{};if(I&&t){G["aria-disabled"]=!0,ee["aria-disabled"]=!0;for(const ne of N)l[ne]=re=>{re&&(re.stopPropagation(),re.preventDefault())}}const oe=!S&&(X&&Z||V||!!Z&&!(w!=null&&w.length)&&X!==!1),K=r?d:void 0,de=l["aria-describedby"]||K,U={className:g,"aria-label":l["aria-label"]||Z,"aria-describedby":de,ref:W},$=(0,e.createElement)(e.Fragment,null,h&&Y==="left"&&(0,e.createElement)(O.Z,{icon:h,size:E}),ue&&(0,e.createElement)(e.Fragment,null,ue),h&&Y==="right"&&(0,e.createElement)(O.Z,{icon:h,size:E}),w),se=j==="a"?(0,e.createElement)("a",{...ee,...l,...U},$):(0,e.createElement)("button",{...G,...l,...U},$);return oe?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(u.Z,{text:w!=null&&w.length&&r?r:Z,shortcut:V,position:q},se),r&&(0,e.createElement)(x.Z,null,(0,e.createElement)("span",{id:K},r))):(0,e.createElement)(e.Fragment,null,se,r&&(0,e.createElement)(x.Z,null,(0,e.createElement)("span",{id:K},r)))}const v=(0,e.forwardRef)(s),C=v},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js":(te,T,o)=>{o.d(T,{Z:()=>P});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function A({icon:M,className:f,size:u=20,style:O={},...x}){const N=["dashicon","dashicons","dashicons-"+M,f].filter(Boolean).join(" "),s={...u!=20?{fontSize:`${u}px`,width:`${u}px`,height:`${u}px`}:{},...O};return(0,e.createElement)("span",{className:N,style:s,...x})}const P=A},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js":(te,T,o)=>{o.d(T,{Z:()=>f});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=o("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),P=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js");function M({icon:u=null,size:O=typeof u=="string"?20:24,...x}){if(typeof u=="string")return(0,e.createElement)(P.Z,{icon:u,size:O,...x});if((0,e.isValidElement)(u)&&P.Z===u.type)return(0,e.cloneElement)(u,{...x});if(typeof u=="function")return(0,e.createElement)(u,{size:O,...x});if(u&&(u.type==="svg"||u.type===A.Wj)){const N={...u.props,width:O,height:O,...x};return(0,e.createElement)(A.Wj,{...N})}return(0,e.isValidElement)(u)?(0,e.cloneElement)(u,{size:O,...x}):u}const f=M},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js":(te,T,o)=>{o.d(T,{_X:()=>z,ZP:()=>b});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),P=o.n(A),M=o("../../../node_modules/.pnpm/@floating-ui+core@1.3.1/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),f=o("../../../node_modules/.pnpm/@floating-ui+react-dom@1.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),u=o("../../../node_modules/.pnpm/@floating-ui+dom@1.4.1/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),O=o("../../../node_modules/.pnpm/framer-motion@10.11.6_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs"),x=o("../../../node_modules/.pnpm/framer-motion@10.11.6_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),N=o("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js"),i=o("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js"),s=o("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),v=o("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/close.js"),C=o("../../../node_modules/.pnpm/@wordpress+deprecated@3.37.0/node_modules/@wordpress/deprecated/build-module/index.js"),B=o("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),W=o("../../../node_modules/.pnpm/@wordpress+dom@3.37.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js"),R=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js");let c=0;function m(l){const d=document.scrollingElement||document.body;l&&(c=d.scrollTop);const p=l?"add":"remove";d.classList[p]("lockscroll"),document.documentElement.classList[p]("lockscroll"),l||(d.scrollTop=c)}let y=0;function D(){return(0,e.useEffect)(()=>(y===0&&m(!0),++y,()=>{y===1&&m(!1),--y}),[]),null}const I=D;var h=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),Y=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js"),E=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js");function X(l){return l.split("-")[0]}function q(l){return["top","bottom"].includes(X(l))?"x":"y"}function V(l){return l==="x"?"y":"x"}const Z=(l={})=>({options:l,fn(d){var he,be,pe;const{x:p,y:g,placement:S,rects:j,middlewareData:G}=d,{offset:ee=0,mainAxis:oe=!0,crossAxis:K=!0}=l,de={x:p,y:g},U=q(S),$=V(U);let se=de[U],J=de[$];const ce=typeof ee=="function"?ee(d):ee,ne=typeof ce=="number"?{mainAxis:ce,crossAxis:0}:{mainAxis:0,crossAxis:0,...ce},re={x:0,y:0,...(he=G.frameOffset)==null?void 0:he.amount};if(oe){const F=U==="y"?"height":"width",Q=j.reference[U]-j.floating[F]+ne.mainAxis+re[U],le=j.reference[U]+j.reference[F]-ne.mainAxis+re[U];se<Q?se=Q:se>le&&(se=le)}if(K){var _e,ge;const F=U==="y"?"width":"height",Q=["top","left"].includes(X(S)),le=j.reference[$]-j.floating[F]+(Q&&(_e=(be=G.offset)==null?void 0:be[$])!==null&&_e!==void 0?_e:0)+(Q?0:ne.crossAxis)+re[$],Ee=j.reference[$]+j.reference[F]+(Q?0:(ge=(pe=G.offset)==null?void 0:pe[$])!==null&&ge!==void 0?ge:0)-(Q?ne.crossAxis:0)+re[$];J<le?J=le:J>Ee&&(J=Ee)}return{[U]:se,[$]:J}}});function w(){return[{name:"overlay",fn({rects:l}){return l.reference}},(0,M.dp)({apply({rects:l,elements:d}){var p;const{firstElementChild:g}=(p=d.floating)!==null&&p!==void 0?p:{};g instanceof HTMLElement&&Object.assign(g.style,{width:`${l.reference.width}px`,height:`${l.reference.height}px`})}})]}const z="Popover",ue=()=>(0,e.createElement)(B.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"components-popover__triangle",role:"presentation"},(0,e.createElement)(B.y$,{className:"components-popover__triangle-bg",d:"M 0 0 L 50 50 L 100 0"}),(0,e.createElement)(B.y$,{className:"components-popover__triangle-border",d:"M 0 0 L 50 50 L 100 0",vectorEffect:"non-scaling-stroke"})),n=(0,e.forwardRef)(({style:l,placement:d,shouldAnimate:p=!1,...g},S)=>{const j=(0,O.J)(),{style:G,...ee}=(0,e.useMemo)(()=>(0,E.d9)(d),[d]),oe=p&&!j?{style:{...G,...l},...ee}:{animate:!1,style:l};return(0,e.createElement)(x.E.div,{...oe,...g,ref:S})}),t=(0,e.createContext)(void 0),r=(l,d)=>{var Be,We;var p,g;const{animate:S=!0,headerTitle:j,onClose:G,children:ee,className:oe,noArrow:K=!0,position:de,placement:U="bottom-start",offset:$=0,focusOnMount:se="firstElement",anchor:J,expandOnMobile:ce,onFocusOutside:ne,__unstableSlotName:re=z,flip:_e=!0,resize:ge=!0,shift:he=!1,variant:be,__unstableForcePosition:pe,anchorRef:F,anchorRect:Q,getAnchorRect:le,isAlternate:Ee,...Ne}=l;let Me=_e,De=ge;pe!==void 0&&((0,C.Z)("`__unstableForcePosition` prop in wp.components.Popover",{since:"6.1",version:"6.3",alternative:"`flip={ false }` and  `resize={ false }`"}),Me=!pe,De=!pe),F!==void 0&&(0,C.Z)("`anchorRef` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),Q!==void 0&&(0,C.Z)("`anchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),le!==void 0&&(0,C.Z)("`getAnchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"});const xe=Ee?"toolbar":be;Ee!==void 0&&(0,C.Z)("`isAlternate` prop in wp.components.Popover",{since:"6.2",alternative:"`variant` prop with the `'toolbar'` value"});const Se=(0,e.useRef)(null),[ye,Re]=(0,e.useState)(null),[me,Ze]=(0,e.useState)(),$e=(0,e.useCallback)(L=>{Re(L)},[]),Xe=(0,N.Z)("medium","<"),fe=ce&&Xe,Ye=!fe&&!K,Fe=de?(0,E.KF)(de):U,ae=(0,e.useRef)((0,E.WK)(me)),ze=[...U==="overlay"?w():[],{name:"frameOffset",fn({x:L,y:H}){return ae.current?{x:L+ae.current.x,y:H+ae.current.y,data:{amount:ae.current}}:{x:L,y:H}}},(0,M.cv)($),Me?(0,M.RR)():void 0,De?(0,M.dp)({apply(L){var H;const{firstElementChild:k}=(H=Ce.floating.current)!==null&&H!==void 0?H:{};k instanceof HTMLElement&&Object.assign(k.style,{maxHeight:`${L.availableHeight}px`,overflow:"auto"})}}):void 0,he?(0,M.uY)({crossAxis:!0,limiter:Z(),padding:1}):void 0,(0,f.x7)({element:Se})].filter(L=>L!==void 0),Ae=(0,e.useContext)(t)||re,He=(0,h.Z)(Ae);let Oe;(G||ne)&&(Oe=(L,H)=>{L==="focus-outside"&&ne?ne(H):G&&G()});const[Ve,Ge]=(0,i.Z)({focusOnMount:se,__unstableOnClose:Oe,onClose:Oe}),{x:je,y:Te,reference:Le,floating:Je,refs:Ce,strategy:Qe,update:we,placement:Ue,middlewareData:{arrow:ie}}=(0,f.YF)({placement:Fe==="overlay"?void 0:Fe,middleware:ze,whileElementsMounted:(L,H,k)=>(0,u.Me)(L,H,k,{animationFrame:!0})}),ke=(0,e.useCallback)(L=>{Se.current=L,we()},[we]),qe=F==null?void 0:F.top,et=F==null?void 0:F.bottom,tt=F==null?void 0:F.startContainer,ot=F==null?void 0:F.current;(0,e.useLayoutEffect)(()=>{const L=(0,E.Eh)({anchor:J,anchorRef:F,anchorRect:Q,getAnchorRect:le,fallbackReferenceElement:ye,fallbackDocument:document}),H=(0,E.Sj)(L),k=(0,E.CK)({anchor:J,anchorRef:F,anchorRect:Q,getAnchorRect:le,fallbackReferenceElement:ye,scale:H});Le(k),Ze(L)},[J,F,qe,et,tt,ot,Q,le,ye,Le]),(0,e.useLayoutEffect)(()=>{var Ie,Ke;if(me===document||me===((Ie=Ce.floating.current)==null?void 0:Ie.ownerDocument)||!((Ke=me==null?void 0:me.defaultView)!=null&&Ke.frameElement)){ae.current=void 0;return}const{defaultView:L}=me,{frameElement:H}=L,k=H?(0,W.Z)(H):null,ve=()=>{ae.current=(0,E.WK)(me),we()};return L.addEventListener("resize",ve),k==null||k.addEventListener("scroll",ve),ve(),()=>{L.removeEventListener("resize",ve),k==null||k.removeEventListener("scroll",ve)}},[me,we,Ce.floating]);const st=(0,s.Z)([Je,Ve,d]);let Pe=(0,e.createElement)(n,{shouldAnimate:S&&!fe,placement:Ue,className:P()("components-popover",oe,{"is-expanded":fe,"is-positioned":je!==null&&Te!==null,[`is-${xe==="toolbar"?"alternate":xe}`]:xe}),...Ne,ref:st,...Ge,tabIndex:-1,style:fe?void 0:{position:Qe,top:0,left:0,x:(0,E.sw)(je),y:(0,E.sw)(Te)}},fe&&(0,e.createElement)(I,null),fe&&(0,e.createElement)("div",{className:"components-popover__header"},(0,e.createElement)("span",{className:"components-popover__header-title"},j),(0,e.createElement)(R.ZP,{className:"components-popover__close",icon:v.Z,onClick:G})),(0,e.createElement)("div",{className:"components-popover__content"},ee),Ye&&(0,e.createElement)("div",{ref:ke,className:["components-popover__arrow",`is-${Ue.split("-")[0]}`].join(" "),style:{left:typeof(ie==null?void 0:ie.x)!="undefined"&&Number.isFinite(ie.x)?`${ie.x+((p=(Be=ae.current)==null?void 0:Be.x)!==null&&p!==void 0?p:0)}px`:"",top:typeof(ie==null?void 0:ie.y)!="undefined"&&Number.isFinite(ie.y)?`${ie.y+((g=(We=ae.current)==null?void 0:We.y)!==null&&g!==void 0?g:0)}px`:""}},(0,e.createElement)(ue,null)));return He.ref&&(Pe=(0,e.createElement)(Y.de,{name:Ae},Pe)),F||Q||J?Pe:(0,e.createElement)("span",{ref:$e},Pe)},a=(0,e.forwardRef)(r);function _({name:l=z},d){return(0,e.createElement)(Y.g7,{bubblesVirtually:!0,name:l,className:"popover-slot",ref:d})}a.Slot=(0,e.forwardRef)(_),a.__unstableSlotNameProvider=t.Provider;const b=a},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js":(te,T,o)=>{o.d(T,{CK:()=>x,Eh:()=>O,KF:()=>A,Sj:()=>u,WK:()=>f,d9:()=>M,sw:()=>N});const e={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},A=i=>{var s;return(s=e[i])!==null&&s!==void 0?s:"bottom"},P={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},M=i=>{const s=i.startsWith("top")||i.startsWith("bottom")?"translateY":"translateX",v=i.startsWith("top")||i.startsWith("left")?1:-1;return{style:P[i],initial:{opacity:0,scale:0,[s]:`${2*v}em`},animate:{opacity:1,scale:1,[s]:0},transition:{duration:.1,ease:[0,0,.2,1]}}},f=i=>{var C;const s=(C=i==null?void 0:i.defaultView)==null?void 0:C.frameElement;if(!s)return;const v=s.getBoundingClientRect();return{x:v.left,y:v.top}},u=i=>{var C;const s=(C=i==null?void 0:i.defaultView)==null?void 0:C.frameElement;if(!s)return{x:1,y:1};const v=s.getBoundingClientRect();return{x:v.width/s.offsetWidth,y:v.height/s.offsetHeight}},O=({anchor:i,anchorRef:s,anchorRect:v,getAnchorRect:C,fallbackReferenceElement:B,fallbackDocument:W})=>{var m;var R;let c;return i?c=i.ownerDocument:s!=null&&s.top?c=s==null?void 0:s.top.ownerDocument:s!=null&&s.startContainer?c=s.startContainer.ownerDocument:s!=null&&s.current?c=s.current.ownerDocument:s?c=s.ownerDocument:v&&(v!=null&&v.ownerDocument)?c=v.ownerDocument:C&&(c=(m=C(B))==null?void 0:m.ownerDocument),(R=c)!==null&&R!==void 0?R:W},x=({anchor:i,anchorRef:s,anchorRect:v,getAnchorRect:C,fallbackReferenceElement:B,scale:W})=>{var R;let c=null;if(i?c=i:s!=null&&s.top?c={getBoundingClientRect(){const m=s.top.getBoundingClientRect(),y=s.bottom.getBoundingClientRect();return new window.DOMRect(m.x,m.y,m.width,y.bottom-m.top)}}:s!=null&&s.current?c=s.current:s?c=s:v?c={getBoundingClientRect(){return v}}:C?c={getBoundingClientRect(){var m,y,D,I;const h=C(B);return new window.DOMRect((m=h.x)!==null&&m!==void 0?m:h.left,(y=h.y)!==null&&y!==void 0?y:h.top,(D=h.width)!==null&&D!==void 0?D:h.right-h.left,(I=h.height)!==null&&I!==void 0?I:h.bottom-h.top)}}:B&&(c=B.parentElement),c&&(W.x!==1||W.y!==1)){const m=c.getBoundingClientRect();c={getBoundingClientRect(){return new window.DOMRect(m.x*W.x,m.y*W.y,m.width*W.x,m.height*W.y)}}}return(R=c)!==null&&R!==void 0?R:null},N=i=>i===null||Number.isNaN(i)?void 0:Math.round(i)},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js":(te,T,o)=>{o.d(T,{Z:()=>P});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function A(M){const{shortcut:f,className:u}=M;if(!f)return null;let O,x;return typeof f=="string"&&(O=f),f!==null&&typeof f=="object"&&(O=f.display,x=f.ariaLabel),(0,e.createElement)("span",{className:u,"aria-label":x},O)}const P=A},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js":(te,T,o)=>{o.d(T,{Z:()=>f});var e=o("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),A=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=o("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");const f=(0,A.createContext)({slots:(0,e.Yr)(),fills:(0,e.Yr)(),registerSlot:()=>{typeof P!="undefined"&&P.env},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{}})},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js":(te,T,o)=>{o.d(T,{Z:()=>M});var e=o("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/index.js"),A=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function M(f){const u=(0,A.useContext)(P.Z),x=(0,e.RK)(u.slots,{sync:!0}).get(f),N=(0,A.useMemo)(()=>({updateSlot:i=>u.updateSlot(f,i),unregisterSlot:i=>u.unregisterSlot(f,i),registerFill:i=>u.registerFill(f,i),unregisterFill:i=>u.unregisterFill(f,i)}),[f,u]);return{...x,...N}}},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js":(te,T,o)=>{o.d(T,{de:()=>V,zt:()=>w,g7:()=>Z,Es:()=>ue,up:()=>z});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const P=(0,e.createContext)({registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>{},subscribe:()=>{}}),f=n=>{const{getSlot:t,subscribe:r}=(0,e.useContext)(P);return(0,e.useSyncExternalStore)(r,()=>t(n),()=>t(n))};function u({name:n,children:t}){const{registerFill:r,unregisterFill:a}=(0,e.useContext)(P),_=f(n),b=(0,e.useRef)({name:n,children:t});return(0,e.useLayoutEffect)(()=>{const l=b.current;return r(n,l),()=>a(n,l)},[]),(0,e.useLayoutEffect)(()=>{b.current.children=t,_&&_.forceUpdate()},[t]),(0,e.useLayoutEffect)(()=>{n!==b.current.name&&(a(b.current.name,b.current),b.current.name=n,r(n,b.current))},[n]),null}var O=o("../../../node_modules/.pnpm/@wordpress+element@5.14.0/node_modules/@wordpress/element/build-module/utils.js");function x(n){return typeof n=="function"}class N extends e.Component{constructor(){super(...arguments),this.isUnmounted=!1}componentDidMount(){const{registerSlot:t}=this.props;this.isUnmounted=!1,t(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:t}=this.props;this.isUnmounted=!0,t(this.props.name,this)}componentDidUpdate(t){const{name:r,unregisterSlot:a,registerSlot:_}=this.props;t.name!==r&&(a(t.name),_(r,this))}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){var t;const{children:r,name:a,fillProps:_={},getFills:b}=this.props,l=((t=b(a,this))!==null&&t!==void 0?t:[]).map(d=>{const p=x(d.children)?d.children(_):d.children;return e.Children.map(p,(g,S)=>{if(!g||typeof g=="string")return g;const j=g.key||S;return(0,e.cloneElement)(g,{key:j})})}).filter(d=>!(0,O.V)(d));return(0,e.createElement)(e.Fragment,null,x(r)?r(l):l)}}const s=n=>(0,e.createElement)(P.Consumer,null,({registerSlot:t,unregisterSlot:r,getFills:a})=>(0,e.createElement)(N,{...n,registerSlot:t,unregisterSlot:r,getFills:a}));var v=o("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),C=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),B=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");function W(){const[,n]=(0,e.useState)({}),t=(0,e.useRef)(!0);return(0,e.useEffect)(()=>(t.current=!0,()=>{t.current=!1}),[]),()=>{t.current&&n({})}}function R({name:n,children:t}){const{registerFill:r,unregisterFill:a,..._}=(0,C.Z)(n),b=W(),l=(0,e.useRef)({rerender:b});if((0,e.useEffect)(()=>(r(l),()=>{a(l)}),[r,a]),!_.ref||!_.ref.current)return null;typeof t=="function"&&(t=t(_.fillProps));const d=(0,e.createElement)(B.Z,{document:_.ref.current.ownerDocument},t);return(0,v.createPortal)(d,_.ref.current)}var c=o("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),m=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function y({name:n,fillProps:t={},as:r="div",...a},_){const{registerSlot:b,unregisterSlot:l,...d}=(0,e.useContext)(m.Z),p=(0,e.useRef)();return(0,e.useLayoutEffect)(()=>(b(n,p,t),()=>{l(n,p)}),[b,l,n]),(0,e.useLayoutEffect)(()=>{d.updateSlot(n,t)}),(0,e.createElement)(r,{ref:(0,c.Z)([_,p]),...a})}const D=(0,e.forwardRef)(y);var I=o("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/vanilla.js"),h=o("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),Y=o("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.37.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js");function E(){const n=(0,h.Yr)(),t=(0,h.Yr)();function r(d,p,g){const S=n.get(d)||{};n.set(d,(0,I.iH)({...S,ref:p||S.ref,fillProps:g||S.fillProps||{}}))}function a(d,p){var g;((g=n.get(d))==null?void 0:g.ref)===p&&n.delete(d)}function _(d,p){const g=n.get(d);if(!g||(0,Y.ZP)(g.fillProps,p))return;g.fillProps=p;const S=t.get(d);S&&S.map(j=>j.current.rerender())}function b(d,p){t.set(d,(0,I.iH)([...t.get(d)||[],p]))}function l(d,p){const g=t.get(d);g&&t.set(d,(0,I.iH)(g.filter(S=>S!==p)))}return{slots:n,fills:t,registerSlot:r,updateSlot:_,unregisterSlot:a,registerFill:b,unregisterFill:l}}function X({children:n}){const[t]=(0,e.useState)(E);return(0,e.createElement)(m.Z.Provider,{value:t},n)}class q extends e.Component{constructor(){super(...arguments),this.registerSlot=this.registerSlot.bind(this),this.registerFill=this.registerFill.bind(this),this.unregisterSlot=this.unregisterSlot.bind(this),this.unregisterFill=this.unregisterFill.bind(this),this.getSlot=this.getSlot.bind(this),this.getFills=this.getFills.bind(this),this.subscribe=this.subscribe.bind(this),this.slots={},this.fills={},this.listeners=[],this.contextValue={registerSlot:this.registerSlot,unregisterSlot:this.unregisterSlot,registerFill:this.registerFill,unregisterFill:this.unregisterFill,getSlot:this.getSlot,getFills:this.getFills,subscribe:this.subscribe}}registerSlot(t,r){const a=this.slots[t];this.slots[t]=r,this.triggerListeners(),this.forceUpdateSlot(t),a&&a.forceUpdate()}registerFill(t,r){this.fills[t]=[...this.fills[t]||[],r],this.forceUpdateSlot(t)}unregisterSlot(t,r){this.slots[t]===r&&(delete this.slots[t],this.triggerListeners())}unregisterFill(t,r){var _;var a;this.fills[t]=(a=(_=this.fills[t])==null?void 0:_.filter(b=>b!==r))!==null&&a!==void 0?a:[],this.forceUpdateSlot(t)}getSlot(t){return this.slots[t]}getFills(t,r){return this.slots[t]!==r?[]:this.fills[t]}forceUpdateSlot(t){const r=this.getSlot(t);r&&r.forceUpdate()}triggerListeners(){this.listeners.forEach(t=>t())}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(r=>r!==t)}}render(){return(0,e.createElement)(P.Provider,{value:this.contextValue},this.props.children)}}function V(n){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(u,{...n}),(0,e.createElement)(R,{...n}))}const Z=(0,e.forwardRef)(({bubblesVirtually:n,...t},r)=>n?(0,e.createElement)(D,{...t,ref:r}):(0,e.createElement)(s,{...t}));function w({children:n,...t}){return(0,e.createElement)(q,{...t},(0,e.createElement)(X,null,n))}function z(n){const t=typeof n=="symbol"?n.description:n,r=_=>(0,e.createElement)(V,{name:n,..._});r.displayName=`${t}Fill`;const a=_=>(0,e.createElement)(Z,{name:n,..._});return a.displayName=`${t}Slot`,a.__unstableName=n,{Fill:r,Slot:a}}const ue=n=>{const t=Symbol(n),r=z(t);return{privateKey:t,...r}}},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js":(te,T,o)=>{o.d(T,{Z:()=>N});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=o("../../../node_modules/.pnpm/@emotion+react@11.11.1_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),P=o("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),M=o("../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js"),f=o("../../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js");const u=new Set,O=(0,M.Z)(i=>{let s=f.Z().replace(/[0-9]/g,"");for(;u.has(s);)s=f.Z().replace(/[0-9]/g,"");return u.add(s),(0,P.Z)({container:i,key:s})});function x(i){const{children:s,document:v}=i;if(!v)return null;const C=O(v.head);return(0,e.createElement)(A.C,{value:C},s)}const N=x},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js":(te,T,o)=>{o.d(T,{Z:()=>R});var e=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),P=o.n(A),M=o("../../../node_modules/.pnpm/@wordpress+element@5.14.0/node_modules/@wordpress/element/build-module/react.js"),f=o("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js"),u=o("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),O=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js"),x=o("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js");const N=700,i=(0,e.createElement)("div",{className:"event-catcher"}),s=({eventHandlers:c,child:m,childrenWithPopover:y,mergedRefs:D})=>(0,e.cloneElement)((0,e.createElement)("span",{className:"disabled-element-wrapper"},(0,e.cloneElement)(i,c),(0,e.cloneElement)(m,{children:y,ref:D})),{...c}),v=({child:c,eventHandlers:m,childrenWithPopover:y,mergedRefs:D})=>(0,e.cloneElement)(c,{...m,children:y,ref:D}),C=({anchor:c,grandchildren:m,isOver:y,offset:D,position:I,shortcut:h,text:Y,className:E,...X})=>(0,M.Qz)(m,y&&(0,e.createElement)(O.ZP,{focusOnMount:!1,position:I,className:P()("components-tooltip",E),"aria-hidden":"true",animate:!1,offset:D,anchor:c,shift:!0,...X},Y,(0,e.createElement)(x.Z,{className:"components-tooltip__shortcut",shortcut:h}))),B=(c,m,y)=>{if(e.Children.count(c)!==1)return;const D=e.Children.only(c);D.props.disabled||typeof D.props[m]=="function"&&D.props[m](y)};function W(c){var oe;const{children:m,position:y="bottom middle",text:D,shortcut:I,delay:h=N,...Y}=c,[E,X]=(0,e.useState)(!1),[q,V]=(0,e.useState)(!1),Z=(0,f.Z)(V,h),[w,z]=(0,e.useState)(null),ue=(oe=e.Children.toArray(m)[0])==null?void 0:oe.ref,n=(0,u.Z)([z,ue]),t=K=>{K.target.tagName!=="OPTION"&&(B(m,"onMouseDown",K),document.addEventListener("mouseup",_),X(!0))},r=K=>{K.target.tagName!=="OPTION"&&(B(m,"onMouseUp",K),document.removeEventListener("mouseup",_),X(!1))},a=K=>{if(K==="mouseUp")return r;if(K==="mouseDown")return t},_=a("mouseUp"),b=(K,de)=>U=>{if(B(m,K,U),U.currentTarget.disabled||U.type==="focus"&&E)return;Z.cancel();const $=["focus","mouseenter"].includes(U.type);$!==q&&(de?Z($):V($))},l=()=>{Z.cancel(),document.removeEventListener("mouseup",_)};if((0,e.useEffect)(()=>l,[]),e.Children.count(m)!==1)return m;const d={onMouseEnter:b("onMouseEnter",!0),onMouseLeave:b("onMouseLeave"),onClick:b("onClick"),onFocus:b("onFocus"),onBlur:b("onBlur"),onMouseDown:a("mouseDown")},p=e.Children.only(m),{children:g,disabled:S}=p.props,j=S?s:v,ee=C({grandchildren:g,...{anchor:w,isOver:q,offset:4,position:y,shortcut:I,text:D},...Y});return j({child:p,eventHandlers:d,childrenWithPopover:ee,mergedRefs:n})}const R=W}}]);})();
