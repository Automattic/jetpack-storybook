"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1179],{"../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js":(H,x,n)=>{n.d(x,{ZP:()=>t});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=n("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),j=n.n(S),h=n("../../../node_modules/.pnpm/@floating-ui+core@1.6.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),p=n("../../../node_modules/.pnpm/@floating-ui+dom@1.6.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_=n("../../../node_modules/.pnpm/@floating-ui+react-dom@2.0.8_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),Z=n("../../../node_modules/.pnpm/framer-motion@10.18.0_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),R=n("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),M=n("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js"),f=n("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js"),w=n("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),F=n("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js"),W=n("../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),O=n("../../../node_modules/.pnpm/@wordpress+deprecated@3.55.0/node_modules/@wordpress/deprecated/build-module/index.js"),$=n("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),oe=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js");let z=0;function Y(o){const s=document.scrollingElement||document.body;o&&(z=s.scrollTop);const r=o?"add":"remove";s.classList[r]("lockscroll"),document.documentElement.classList[r]("lockscroll"),o||(s.scrollTop=z)}let D=0;function B(){return(0,e.useEffect)(()=>(D===0&&Y(!0),++D,()=>{D===1&&Y(!1),--D}),[]),null}const te=B;var ne=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),A=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js"),L=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js"),se=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),re=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js");function le(){return[{name:"overlay",fn({rects:o}){return o.reference}},(0,p.dp)({apply({rects:o,elements:s}){var r;const{firstElementChild:u}=(r=s.floating)!==null&&r!==void 0?r:{};u instanceof HTMLElement&&Object.assign(u.style,{width:`${o.reference.width}px`,height:`${o.reference.height}px`})}})]}var de=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");const G="Popover",ie=()=>(0,e.createElement)($.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"components-popover__triangle",role:"presentation"},(0,e.createElement)($.y$,{className:"components-popover__triangle-bg",d:"M 0 0 L 50 50 L 100 0"}),(0,e.createElement)($.y$,{className:"components-popover__triangle-border",d:"M 0 0 L 50 50 L 100 0",vectorEffect:"non-scaling-stroke"})),I=(0,e.createContext)(void 0),X="components-popover__fallback-container",J=()=>{let o=document.body.querySelector("."+X);return o||(o=document.createElement("div"),o.className=X,document.body.append(o)),o},ce=(o,s)=>{const{animate:r=!0,headerTitle:u,constrainTabbing:v,onClose:a,children:d,className:m,noArrow:l=!0,position:c,placement:C="bottom-start",offset:i=0,focusOnMount:g="firstElement",anchor:y,expandOnMobile:Q,onFocusOutside:V,__unstableSlotName:Re=G,flip:Me=!0,resize:Le=!0,shift:Oe=!1,inline:_e=!1,variant:Ue,__unstableForcePosition:me,anchorRef:E,anchorRect:k,getAnchorRect:ae,isAlternate:ge,...Ze}=(0,se.y)(o,"Popover");let Ee=Me,he=Le;me!==void 0&&((0,O.Z)("`__unstableForcePosition` prop in wp.components.Popover",{since:"6.1",version:"6.3",alternative:"`flip={ false }` and  `resize={ false }`"}),Ee=!me,he=!me),E!==void 0&&(0,O.Z)("`anchorRef` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),k!==void 0&&(0,O.Z)("`anchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"}),ae!==void 0&&(0,O.Z)("`getAnchorRect` prop in wp.components.Popover",{since:"6.1",alternative:"`anchor` prop"});const pe=ge?"toolbar":Ue;ge!==void 0&&(0,O.Z)("`isAlternate` prop in wp.components.Popover",{since:"6.2",alternative:"`variant` prop with the `'toolbar'` value"});const be=(0,e.useRef)(null),[Se,De]=(0,e.useState)(null),Ae=(0,e.useCallback)(b=>{De(b)},[]),Te=(0,M.Z)("medium","<"),N=Q&&Te,Ne=!N&&!l,ye=c?(0,L.KF)(c):C,Ke=[...C==="overlay"?le():[],(0,h.cv)(i),Ee&&(0,p.RR)(),he&&(0,p.dp)({apply(b){var U;const{firstElementChild:ee}=(U=q.floating.current)!==null&&U!==void 0?U:{};ee instanceof HTMLElement&&Object.assign(ee.style,{maxHeight:`${b.availableHeight}px`,overflow:"auto"})}}),Oe&&(0,p.uY)({crossAxis:!0,limiter:(0,p.dr)(),padding:1}),(0,_.x7)({element:be})],Pe=(0,e.useContext)(I)||Re,We=(0,ne.Z)(Pe);let fe;(a||V)&&(fe=(b,U)=>{b==="focus-outside"&&V?V(U):a&&a()});const[$e,Be]=(0,f.Z)({constrainTabbing:v,focusOnMount:g,__unstableOnClose:fe,onClose:fe}),{x:xe,y:we,refs:q,strategy:Ie,update:Fe,placement:ve,middlewareData:{arrow:P}}=(0,_.YF)({placement:ye==="overlay"?void 0:ye,middleware:Ke,whileElementsMounted:(b,U,ee)=>(0,p.Me)(b,U,ee,{layoutShift:!1,animationFrame:!0})}),Ve=(0,e.useCallback)(b=>{be.current=b,Fe()},[Fe]),He=E==null?void 0:E.top,ze=E==null?void 0:E.bottom,Ye=E==null?void 0:E.startContainer,Ge=E==null?void 0:E.current;(0,e.useLayoutEffect)(()=>{const b=(0,L.CK)({anchor:y,anchorRef:E,anchorRect:k,getAnchorRect:ae,fallbackReferenceElement:Se});q.setReference(b)},[y,E,He,ze,Ye,Ge,k,ae,Se,q]);const Xe=(0,w.Z)([q.setFloating,$e,s]),Ce=N?void 0:{position:Ie,top:0,left:0,x:(0,L.sw)(xe),y:(0,L.sw)(we)},Je=(0,F.Z)(),je=r&&!N&&!Je,[Qe,ke]=(0,e.useState)(!1),{style:qe,...eo}=(0,e.useMemo)(()=>(0,L.d9)(ve),[ve]),oo=je?{style:{...qe,...Ce},onAnimationComplete:()=>ke(!0),...eo}:{animate:!1,style:Ce},to=(!je||Qe)&&xe!==null&&we!==null;let K=(0,e.createElement)(Z.E.div,{className:j()(m,{"is-expanded":N,"is-positioned":to,[`is-${pe==="toolbar"?"alternate":pe}`]:pe}),...oo,...Ze,ref:Xe,...Be,tabIndex:-1},N&&(0,e.createElement)(te,null),N&&(0,e.createElement)("div",{className:"components-popover__header"},(0,e.createElement)("span",{className:"components-popover__header-title"},u),(0,e.createElement)(oe.ZP,{className:"components-popover__close",icon:W.Z,onClick:a})),(0,e.createElement)("div",{className:"components-popover__content"},d),Ne&&(0,e.createElement)("div",{ref:Ve,className:["components-popover__arrow",`is-${ve.split("-")[0]}`].join(" "),style:{left:typeof(P==null?void 0:P.x)!="undefined"&&Number.isFinite(P.x)?`${P.x}px`:"",top:typeof(P==null?void 0:P.y)!="undefined"&&Number.isFinite(P.y)?`${P.y}px`:""}},(0,e.createElement)(ie,null)));const no=We.ref&&!_e,so=E||k||y;return no?K=(0,e.createElement)(A.de,{name:Pe},K):_e||(K=(0,R.createPortal)((0,e.createElement)(de.V,{document},K),J())),so?K:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{ref:Ae}),K)},T=(0,re.Iq)(ce,"Popover");function ue({name:o=G},s){return(0,e.createElement)(A.g7,{bubblesVirtually:!0,name:o,className:"popover-slot",ref:s})}T.Slot=(0,e.forwardRef)(ue),T.__unstableSlotNameProvider=I.Provider;const t=T},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js":(H,x,n)=>{n.d(x,{Z:()=>_});var e=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),S=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=n("../../../node_modules/.pnpm/@wordpress+warning@2.55.0/node_modules/@wordpress/warning/build-module/index.js");const h={slots:(0,e.Yr)(),fills:(0,e.Yr)(),registerSlot:()=>{typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,j.Z)("Components must be wrapped within `SlotFillProvider`. See https://developer.wordpress.org/block-editor/components/slot-fill/")},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},isDefault:!0},_=(0,S.createContext)(h)},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js":(H,x,n)=>{n.d(x,{Z:()=>h});var e=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/index.js"),S=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function h(p){const _=(0,S.useContext)(j.Z),R=(0,e.RK)(_.slots,{sync:!0}).get(p),M=(0,S.useMemo)(()=>({updateSlot:f=>_.updateSlot(p,f),unregisterSlot:f=>_.unregisterSlot(p,f),registerFill:f=>_.registerFill(p,f),unregisterFill:f=>_.unregisterFill(p,f)}),[p,_]);return{...R,...M}}},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/index.js":(H,x,n)=>{n.d(x,{de:()=>I,zt:()=>ce,g7:()=>J,Es:()=>ue,up:()=>T});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const S={registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>[],subscribe:()=>()=>{}},h=(0,e.createContext)(S),_=t=>{const{getSlot:o,subscribe:s}=(0,e.useContext)(h);return(0,e.useSyncExternalStore)(s,()=>o(t),()=>o(t))};function Z({name:t,children:o}){const{registerFill:s,unregisterFill:r}=(0,e.useContext)(h),u=_(t),v=(0,e.useRef)({name:t,children:o});return(0,e.useLayoutEffect)(()=>{const a=v.current;return s(t,a),()=>r(t,a)},[]),(0,e.useLayoutEffect)(()=>{v.current.children=o,u&&u.forceUpdate()},[o]),(0,e.useLayoutEffect)(()=>{t!==v.current.name&&(r(v.current.name,v.current),v.current.name=t,s(t,v.current))},[t]),null}var R=n("../../../node_modules/.pnpm/@wordpress+element@5.32.0/node_modules/@wordpress/element/build-module/utils.js");function M(t){return typeof t=="function"}class f extends e.Component{constructor(o){super(o),this.isUnmounted=!1}componentDidMount(){const{registerSlot:o}=this.props;this.isUnmounted=!1,o(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:o}=this.props;this.isUnmounted=!0,o(this.props.name,this)}componentDidUpdate(o){const{name:s,unregisterSlot:r,registerSlot:u}=this.props;o.name!==s&&(r(o.name,this),u(s,this))}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){var o;const{children:s,name:r,fillProps:u={},getFills:v}=this.props,a=((o=v(r,this))!==null&&o!==void 0?o:[]).map(d=>{const m=M(d.children)?d.children(u):d.children;return e.Children.map(m,(l,c)=>{if(!l||typeof l=="string")return l;let C=c;return typeof l=="object"&&"key"in l&&(l!=null&&l.key)&&(C=l.key),(0,e.cloneElement)(l,{key:C})})}).filter(d=>!(0,R.V)(d));return(0,e.createElement)(e.Fragment,null,M(s)?s(a):a)}}const F=t=>(0,e.createElement)(h.Consumer,null,({registerSlot:o,unregisterSlot:s,getFills:r})=>(0,e.createElement)(f,{...t,registerSlot:o,unregisterSlot:s,getFills:r}));var W=n("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),O=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js"),$=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js");function oe(){const[,t]=(0,e.useState)({}),o=(0,e.useRef)(!0);return(0,e.useEffect)(()=>(o.current=!0,()=>{o.current=!1}),[]),()=>{o.current&&t({})}}function z(t){var o;const{name:s,children:r}=t,{registerFill:u,unregisterFill:v,...a}=(0,O.Z)(s),d=oe(),m=(0,e.useRef)({rerender:d});if((0,e.useEffect)(()=>(u(m),()=>{v(m)}),[u,v]),!a.ref||!a.ref.current)return null;const l=(0,e.createElement)($.Z,{document:a.ref.current.ownerDocument},typeof r=="function"?r((o=a.fillProps)!==null&&o!==void 0?o:{}):r);return(0,W.createPortal)(l,a.ref.current)}var Y=n("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),D=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),B=n("../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");function te(t,o){const{name:s,fillProps:r={},as:u,children:v,...a}=t,{registerSlot:d,unregisterSlot:m,...l}=(0,e.useContext)(B.Z),c=(0,e.useRef)(null);return(0,e.useLayoutEffect)(()=>(d(s,c,r),()=>{m(s,c)}),[d,m,s]),(0,e.useLayoutEffect)(()=>{l.updateSlot(s,r)}),(0,e.createElement)(D.Z,{as:u,ref:(0,Y.Z)([o,c]),...a})}const ne=(0,e.forwardRef)(te);var A=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/vanilla.js"),L=n("../../../node_modules/.pnpm/valtio@1.7.0_react@18.2.0/node_modules/valtio/esm/utils.js"),se=n("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.55.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js");function re(){const t=(0,L.Yr)(),o=(0,L.Yr)();return{slots:t,fills:o,registerSlot:(d,m,l)=>{const c=t.get(d);t.set(d,(0,A.iH)({...c,ref:m||(c==null?void 0:c.ref),fillProps:l||(c==null?void 0:c.fillProps)||{}}))},updateSlot:(d,m)=>{const l=t.get(d);if(!l||(0,se.ZP)(l.fillProps,m))return;l.fillProps=m;const c=o.get(d);c&&c.forEach(C=>C.current.rerender())},unregisterSlot:(d,m)=>{var l;((l=t.get(d))==null?void 0:l.ref)===m&&t.delete(d)},registerFill:(d,m)=>{o.set(d,(0,A.iH)([...o.get(d)||[],m]))},unregisterFill:(d,m)=>{const l=o.get(d);l&&o.set(d,(0,A.iH)(l.filter(c=>c!==m)))}}}function le({children:t}){const o=(0,e.useMemo)(re,[]);return(0,e.createElement)(B.Z.Provider,{value:o},t)}function de(){const t={},o={};let s=[];function r(i,g){const y=t[i];t[i]=g,c(),l(i),y&&y.forceUpdate()}function u(i,g){o[i]=[...o[i]||[],g],l(i)}function v(i,g){t[i]===g&&(delete t[i],c())}function a(i,g){var Q;var y;o[i]=(y=(Q=o[i])==null?void 0:Q.filter(V=>V!==g))!==null&&y!==void 0?y:[],l(i)}function d(i){return t[i]}function m(i,g){return t[i]!==g?[]:o[i]}function l(i){const g=d(i);g&&g.forceUpdate()}function c(){s.forEach(i=>i())}function C(i){return s.push(i),()=>{s=s.filter(g=>g!==i)}}return{registerSlot:r,unregisterSlot:v,registerFill:u,unregisterFill:a,getSlot:d,getFills:m,subscribe:C}}function G({children:t}){const o=(0,e.useMemo)(de,[]);return(0,e.createElement)(h.Provider,{value:o},t)}const ie=G;function I(t){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Z,{...t}),(0,e.createElement)(z,{...t}))}function X(t,o){const{bubblesVirtually:s,...r}=t;return s?(0,e.createElement)(ne,{...r,ref:o}):(0,e.createElement)(F,{...r})}const J=(0,e.forwardRef)(X);function ce({children:t,passthrough:o=!1}){return!(0,e.useContext)(B.Z).isDefault&&o?(0,e.createElement)(e.Fragment,null,t):(0,e.createElement)(ie,null,(0,e.createElement)(le,null,t))}function T(t){const o=typeof t=="symbol"?t.description:t,s=u=>(0,e.createElement)(I,{name:t,...u});s.displayName=`${o}Fill`;const r=u=>(0,e.createElement)(J,{name:t,...u});return r.displayName=`${o}Slot`,r.__unstableName=t,{Fill:s,Slot:r}}const ue=t=>{const o=Symbol(t),s=T(o);return{privateKey:o,...s}}},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/style-provider/index.js":(H,x,n)=>{n.d(x,{V:()=>R,Z:()=>M});var e=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=n("../../../node_modules/.pnpm/@emotion+react@11.11.4_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js"),j=n("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),h=n("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js");const p=new Set,_=new WeakMap,Z=f=>{if(_.has(f))return _.get(f);let w=h.Z().replace(/[0-9]/g,"");for(;p.has(w);)w=h.Z().replace(/[0-9]/g,"");p.add(w);const F=(0,j.Z)({container:f,key:w});return _.set(f,F),F};function R(f){const{children:w,document:F}=f;if(!F)return null;const W=Z(F.head);return(0,e.createElement)(S.C,{value:W},w)}const M=R}}]);})();
