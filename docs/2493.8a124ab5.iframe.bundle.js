"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2493],{"../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js":(H,P,n)=>{n.d(P,{ZP:()=>o});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),F=n.n(b),h=n("../../../node_modules/.pnpm/@floating-ui+core@1.6.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),p=n("../../../node_modules/.pnpm/@floating-ui+dom@1.6.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_=n("../../../node_modules/.pnpm/@floating-ui+react-dom@2.0.8_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),U=n("../../../node_modules/.pnpm/framer-motion@10.18.0_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs"),j=n("../../../node_modules/.pnpm/framer-motion@10.18.0_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),M=n("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),f=n("../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js"),x=n("../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js"),w=n("../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),K=n("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),L=n("../../../node_modules/.pnpm/@wordpress+deprecated@3.53.0/node_modules/@wordpress/deprecated/build-module/index.js"),W=n("../../../node_modules/.pnpm/@wordpress+primitives@3.51.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),oe=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js");let z=0;function Y(s){const r=document.scrollingElement||document.body;s&&(z=r.scrollTop);const c=s?"add":"remove";r.classList[c]("lockscroll"),document.documentElement.classList[c]("lockscroll"),s||(r.scrollTop=z)}let Z=0;function $(){return(0,e.useEffect)(()=>(Z===0&&Y(!0),++Z,()=>{Z===1&&Y(!1),--Z}),[]),null}const te=$;var ne=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),A=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js"),R=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js"),se=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),re=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-system-provider.js"),le=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js");function de(){return[{name:"overlay",fn({rects:s}){return s.reference}},(0,p.dp)({apply({rects:s,elements:r}){var c;const{firstElementChild:a}=(c=r.floating)!==null&&c!==void 0?c:{};a instanceof HTMLElement&&Object.assign(a.style,{width:`${s.reference.width}px`,height:`${s.reference.height}px`})}})]}var ie=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");const G="Popover",X=()=>(0,e.createElement)(W.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"components-popover__triangle",role:"presentation"},(0,e.createElement)(W.y$,{className:"components-popover__triangle-bg",d:"M 0 0 L 50 50 L 100 0"}),(0,e.createElement)(W.y$,{className:"components-popover__triangle-border",d:"M 0 0 L 50 50 L 100 0",vectorEffect:"non-scaling-stroke"})),J=(0,e.createContext)(void 0),I="components-popover__fallback-container",ce=()=>{let s=document.body.querySelector("."+I);return s||(s=document.createElement("div"),s.className=I,document.body.append(s)),s},Q=(s,r)=>{const{animate:c=!0,headerTitle:a,constrainTabbing:v,onClose:l,children:m,className:d,noArrow:u=!0,position:C,placement:i="bottom-start",offset:g=0,focusOnMount:D="firstElement",anchor:N,expandOnMobile:ue,onFocusOutside:me,__unstableSlotName:De=G,flip:Le=!0,resize:Oe=!0,shift:Ue=!1,inline:Ee=!1,variant:Ze,__unstableForcePosition:ae,anchorRef:E,anchorRect:k,getAnchorRect:pe,isAlternate:he,...Ae}=(0,se.y)(s,"Popover");let Se=Le,be=Oe;ae!==void 0&&((0,L.Z)("`__unstableForcePosition` prop in wp.components.Popover",{since:"6.1",version:"6.3",alternative:"`flip={ false }` and  `resize={ false }`"}),Se=!ae,be=!ae),E!==void 0&&(0,L.Z)("`anchorRef` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),k!==void 0&&(0,L.Z)("`anchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),pe!==void 0&&(0,L.Z)("`getAnchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"});const fe=he?"toolbar":Ze;he!==void 0&&(0,L.Z)("`isAlternate` prop in wp.components.Popover",{since:"6.2",alternative:"`variant` prop with the `'toolbar'` value"});const ye=(0,e.useRef)(null),[Pe,Ne]=(0,e.useState)(null),Te=(0,e.useCallback)(S=>{Ne(S)},[]),Be=(0,f.Z)("medium","<"),T=ue&&Be,Ke=!T&&!u,xe=C?(0,R.KF)(C):i,We=[...i==="overlay"?de():[],(0,h.cv)(g),Se&&(0,p.RR)(),be&&(0,p.dp)({apply(S){var O;const{firstElementChild:ee}=(O=q.floating.current)!==null&&O!==void 0?O:{};ee instanceof HTMLElement&&Object.assign(ee.style,{maxHeight:`${S.availableHeight}px`,overflow:"auto"})}}),Ue&&(0,p.uY)({crossAxis:!0,limiter:(0,p.dr)(),padding:1}),(0,_.x7)({element:ye})],we=(0,e.useContext)(J)||De,$e=(0,ne.Z)(we);let ve;(l||me)&&(ve=(S,O)=>{S==="focus-outside"&&me?me(O):l&&l()});const[Ie,Ve]=(0,x.Z)({constrainTabbing:v,focusOnMount:D,__unstableOnClose:ve,onClose:ve}),{x:Ce,y:Fe,refs:q,strategy:He,update:je,placement:_e,middlewareData:{arrow:y}}=(0,_.YF)({placement:xe==="overlay"?void 0:xe,middleware:We,whileElementsMounted:(S,O,ee)=>(0,p.Me)(S,O,ee,{layoutShift:!1,animationFrame:!0})}),ze=(0,e.useCallback)(S=>{ye.current=S,je()},[je]),Ye=E==null?void 0:E.top,Ge=E==null?void 0:E.bottom,Xe=E==null?void 0:E.startContainer,Je=E==null?void 0:E.current;(0,e.useLayoutEffect)(()=>{const S=(0,R.CK)({anchor:N,anchorRef:E,anchorRect:k,getAnchorRect:pe,fallbackReferenceElement:Pe});q.setReference(S)},[N,E,Ye,Ge,Xe,Je,k,pe,Pe,q]);const Qe=(0,w.Z)([q.setFloating,Ie,r]),Me=T?void 0:{position:He,top:0,left:0,x:(0,R.sw)(Ce),y:(0,R.sw)(Fe)},ke=(0,U.J)(),Re=c&&!T&&!ke,[qe,eo]=(0,e.useState)(!1),{style:oo,...to}=(0,e.useMemo)(()=>(0,R.d9)(_e),[_e]),no=Re?{style:{...oo,...Me},onAnimationComplete:()=>eo(!0),...to}:{animate:!1,style:Me},so=(!Re||qe)&&Ce!==null&&Fe!==null,[ro,ge]=(0,e.useState)(!1),lo=(0,e.useMemo)(()=>({ColorPicker:{onPickerDragStart(){ge(!0)},onPickerDragEnd(){ge(!1)}}}),[]);let B=(0,e.createElement)(e.Fragment,null,ro&&(0,e.createElement)("div",{className:"components-popover-pointer-events-trap","aria-hidden":"true",onClick:()=>ge(!1)}),(0,e.createElement)(j.E.div,{className:F()("components-popover",d,{"is-expanded":T,"is-positioned":so,[`is-${fe==="toolbar"?"alternate":fe}`]:fe}),...no,...Ae,ref:Qe,...Ve,tabIndex:-1},T&&(0,e.createElement)(te,null),T&&(0,e.createElement)("div",{className:"components-popover__header"},(0,e.createElement)("span",{className:"components-popover__header-title"},a),(0,e.createElement)(oe.ZP,{className:"components-popover__close",icon:K.Z,onClick:l})),(0,e.createElement)("div",{className:"components-popover__content"},(0,e.createElement)(re.G8,{value:lo},m)),Ke&&(0,e.createElement)("div",{ref:ze,className:["components-popover__arrow",`is-${_e.split("-")[0]}`].join(" "),style:{left:typeof(y==null?void 0:y.x)!="undefined"&&Number.isFinite(y.x)?`${y.x}px`:"",top:typeof(y==null?void 0:y.y)!="undefined"&&Number.isFinite(y.y)?`${y.y}px`:""}},(0,e.createElement)(X,null))));const io=$e.ref&&!Ee,co=E||k||N;return io?B=(0,e.createElement)(A.de,{name:we},B):Ee||(B=(0,M.createPortal)((0,e.createElement)(ie.V,{document},B),ce())),co?B:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{ref:Te}),B)},V=(0,le.Iq)(Q,"Popover");function t({name:s=G},r){return(0,e.createElement)(A.g7,{bubblesVirtually:!0,name:s,className:"popover-slot",ref:r})}V.Slot=(0,e.forwardRef)(t),V.__unstableSlotNameProvider=J.Provider;const o=V},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js":(H,P,n)=>{n.d(P,{Z:()=>_});var e=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),b=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),F=n("../../../node_modules/.pnpm/@wordpress+warning@2.53.0/node_modules/@wordpress/warning/build-module/index.js");const h={slots:(0,e.Yr)(),fills:(0,e.Yr)(),registerSlot:()=>{typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,F.Z)("Components must be wrapped within `SlotFillProvider`. See https://developer.wordpress.org/block-editor/components/slot-fill/")},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},isDefault:!0},_=(0,b.createContext)(h)},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js":(H,P,n)=>{n.d(P,{Z:()=>h});var e=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/index.js"),b=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),F=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function h(p){const _=(0,b.useContext)(F.Z),j=(0,e.RK)(_.slots,{sync:!0}).get(p),M=(0,b.useMemo)(()=>({updateSlot:f=>_.updateSlot(p,f),unregisterSlot:f=>_.unregisterSlot(p,f),registerFill:f=>_.registerFill(p,f),unregisterFill:f=>_.unregisterFill(p,f)}),[p,_]);return{...j,...M}}},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js":(H,P,n)=>{n.d(P,{de:()=>X,zt:()=>ce,g7:()=>I,Es:()=>V,up:()=>Q});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const b={registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>[],subscribe:()=>()=>{}},h=(0,e.createContext)(b),_=t=>{const{getSlot:o,subscribe:s}=(0,e.useContext)(h);return(0,e.useSyncExternalStore)(s,()=>o(t),()=>o(t))};function U({name:t,children:o}){const{registerFill:s,unregisterFill:r}=(0,e.useContext)(h),c=_(t),a=(0,e.useRef)({name:t,children:o});return(0,e.useLayoutEffect)(()=>{const v=a.current;return s(t,v),()=>r(t,v)},[]),(0,e.useLayoutEffect)(()=>{a.current.children=o,c&&c.forceUpdate()},[o]),(0,e.useLayoutEffect)(()=>{t!==a.current.name&&(r(a.current.name,a.current),a.current.name=t,s(t,a.current))},[t]),null}var j=n("../../../node_modules/.pnpm/@wordpress+element@5.30.0/node_modules/@wordpress/element/build-module/utils.js");function M(t){return typeof t=="function"}class f extends e.Component{constructor(o){super(o),this.isUnmounted=!1}componentDidMount(){const{registerSlot:o}=this.props;this.isUnmounted=!1,o(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:o}=this.props;this.isUnmounted=!0,o(this.props.name,this)}componentDidUpdate(o){const{name:s,unregisterSlot:r,registerSlot:c}=this.props;o.name!==s&&(r(o.name,this),c(s,this))}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){var o;const{children:s,name:r,fillProps:c={},getFills:a}=this.props,v=((o=a(r,this))!==null&&o!==void 0?o:[]).map(l=>{const m=M(l.children)?l.children(c):l.children;return e.Children.map(m,(d,u)=>{if(!d||typeof d=="string")return d;let C=u;return typeof d=="object"&&"key"in d&&(d!=null&&d.key)&&(C=d.key),(0,e.cloneElement)(d,{key:C})})}).filter(l=>!(0,j.V)(l));return(0,e.createElement)(e.Fragment,null,M(s)?s(v):v)}}const w=t=>(0,e.createElement)(h.Consumer,null,({registerSlot:o,unregisterSlot:s,getFills:r})=>(0,e.createElement)(f,{...t,registerSlot:o,unregisterSlot:s,getFills:r}));var K=n("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),L=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),W=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");function oe(){const[,t]=(0,e.useState)({}),o=(0,e.useRef)(!0);return(0,e.useEffect)(()=>(o.current=!0,()=>{o.current=!1}),[]),()=>{o.current&&t({})}}function z(t){var o;const{name:s,children:r}=t,{registerFill:c,unregisterFill:a,...v}=(0,L.Z)(s),l=oe(),m=(0,e.useRef)({rerender:l});if((0,e.useEffect)(()=>(c(m),()=>{a(m)}),[c,a]),!v.ref||!v.ref.current)return null;const d=(0,e.createElement)(W.Z,{document:v.ref.current.ownerDocument},typeof r=="function"?r((o=v.fillProps)!==null&&o!==void 0?o:{}):r);return(0,K.createPortal)(d,v.ref.current)}var Y=n("../../../node_modules/.pnpm/@wordpress+compose@6.30.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),Z=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),$=n("../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function te(t,o){const{name:s,fillProps:r={},as:c,children:a,...v}=t,{registerSlot:l,unregisterSlot:m,...d}=(0,e.useContext)($.Z),u=(0,e.useRef)(null);return(0,e.useLayoutEffect)(()=>(l(s,u,r),()=>{m(s,u)}),[l,m,s]),(0,e.useLayoutEffect)(()=>{d.updateSlot(s,r)}),(0,e.createElement)(Z.Z,{as:c,ref:(0,Y.Z)([o,u]),...v})}const ne=(0,e.forwardRef)(te);var A=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/vanilla.js"),R=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),se=n("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.53.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js");function re(){const t=(0,R.Yr)(),o=(0,R.Yr)();return{slots:t,fills:o,registerSlot:(l,m,d)=>{const u=t.get(l);t.set(l,(0,A.iH)({...u,ref:m||(u==null?void 0:u.ref),fillProps:d||(u==null?void 0:u.fillProps)||{}}))},updateSlot:(l,m)=>{const d=t.get(l);if(!d||(0,se.ZP)(d.fillProps,m))return;d.fillProps=m;const u=o.get(l);u&&u.forEach(C=>C.current.rerender())},unregisterSlot:(l,m)=>{var d;((d=t.get(l))==null?void 0:d.ref)===m&&t.delete(l)},registerFill:(l,m)=>{o.set(l,(0,A.iH)([...o.get(l)||[],m]))},unregisterFill:(l,m)=>{const d=o.get(l);d&&o.set(l,(0,A.iH)(d.filter(u=>u!==m)))}}}function le({children:t}){const o=(0,e.useMemo)(re,[]);return(0,e.createElement)($.Z.Provider,{value:o},t)}function de(){const t={},o={};let s=[];function r(i,g){const D=t[i];t[i]=g,u(),d(i),D&&D.forceUpdate()}function c(i,g){o[i]=[...o[i]||[],g],d(i)}function a(i,g){t[i]===g&&(delete t[i],u())}function v(i,g){var N;var D;o[i]=(D=(N=o[i])==null?void 0:N.filter(ue=>ue!==g))!==null&&D!==void 0?D:[],d(i)}function l(i){return t[i]}function m(i,g){return t[i]!==g?[]:o[i]}function d(i){const g=l(i);g&&g.forceUpdate()}function u(){s.forEach(i=>i())}function C(i){return s.push(i),()=>{s=s.filter(g=>g!==i)}}return{registerSlot:r,unregisterSlot:a,registerFill:c,unregisterFill:v,getSlot:l,getFills:m,subscribe:C}}function ie({children:t}){const o=(0,e.useMemo)(de,[]);return(0,e.createElement)(h.Provider,{value:o},t)}const G=ie;function X(t){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(U,{...t}),(0,e.createElement)(z,{...t}))}function J(t,o){const{bubblesVirtually:s,...r}=t;return s?(0,e.createElement)(ne,{...r,ref:o}):(0,e.createElement)(w,{...r})}const I=(0,e.forwardRef)(J);function ce({children:t,passthrough:o=!1}){return!(0,e.useContext)($.Z).isDefault&&o?(0,e.createElement)(e.Fragment,null,t):(0,e.createElement)(G,null,(0,e.createElement)(le,null,t))}function Q(t){const o=typeof t=="symbol"?t.description:t,s=c=>(0,e.createElement)(X,{name:t,...c});s.displayName=`${o}Fill`;const r=c=>(0,e.createElement)(I,{name:t,...c});return r.displayName=`${o}Slot`,r.__unstableName=t,{Fill:s,Slot:r}}const V=t=>{const o=Symbol(t),s=Q(o);return{privateKey:o,...s}}},"../../../node_modules/.pnpm/@wordpress+components@27.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js":(H,P,n)=>{n.d(P,{V:()=>j,Z:()=>M});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=n("../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),F=n("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),h=n("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js");const p=new Set,_=new WeakMap,U=f=>{if(_.has(f))return _.get(f);let x=h.Z().replace(/[0-9]/g,"");for(;p.has(x);)x=h.Z().replace(/[0-9]/g,"");p.add(x);const w=(0,F.Z)({container:f,key:x});return _.set(f,w),w};function j(f){const{children:x,document:w}=f;if(!w)return null;const K=U(w.head);return(0,e.createElement)(b.C,{value:K},x)}const M=j}}]);})();
