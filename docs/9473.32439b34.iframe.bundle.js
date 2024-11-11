"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9473],{"../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js":(W,x,i)=>{i.d(x,{A:()=>$});var p=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=i("../../../node_modules/.pnpm/@wordpress+compose@7.11.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),f=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),j=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),Y=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js"),G=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),le=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w(we,J){return`${we}-${J}-option-description`}function H(we,J){return`${we}-${J}`}function Ie(we){return`${we}__help`}function je(we){const{label:J,className:be,selected:k,help:Z,onChange:V,hideLabelFromVision:q,options:Oe=[],id:Ve,...Q}=we,ie=(0,l.A)(je,"inspector-radio-control",Ve),fe=Se=>V(Se.target.value);return Oe!=null&&Oe.length?(0,le.jsxs)("fieldset",{id:ie,className:(0,p.A)(be,"components-radio-control"),"aria-describedby":Z?Ie(ie):void 0,children:[q?(0,le.jsx)(G.A,{as:"legend",children:J}):(0,le.jsx)(f.Ay.VisualLabel,{as:"legend",children:J}),(0,le.jsx)(j.A,{spacing:3,className:(0,p.A)("components-radio-control__group-wrapper",{"has-help":!!Z}),children:Oe.map((Se,Me)=>(0,le.jsxs)("div",{className:"components-radio-control__option",children:[(0,le.jsx)("input",{id:H(ie,Me),className:"components-radio-control__input",type:"radio",name:ie,value:Se.value,onChange:fe,checked:Se.value===k,"aria-describedby":Se.description?w(ie,Me):void 0,...Q}),(0,le.jsx)("label",{className:"components-radio-control__label",htmlFor:H(ie,Me),children:Se.label}),Se.description?(0,le.jsx)(Y.te,{__nextHasNoMarginBottom:!0,id:w(ie,Me),className:"components-radio-control__option-description",children:Se.description}):null]},H(ie,Me)))}),!!Z&&(0,le.jsx)(Y.te,{__nextHasNoMarginBottom:!0,id:Ie(ie),className:"components-base-control__help",children:Z})]}):null}const $=je},"../../../node_modules/.pnpm/@wordpress+data@10.11.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js":(W,x,i)=>{i.d(x,{Ay:()=>le,ob:()=>f});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=i("../../../node_modules/.pnpm/@wordpress+data@10.11.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");const f=(0,p.createContext)(l.A),{Consumer:j,Provider:Y}=f,G=null,le=Y},"../../../node_modules/.pnpm/@wordpress+data@10.11.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js":(W,x,i)=>{i.d(x,{A:()=>f});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=i("../../../node_modules/.pnpm/@wordpress+data@10.11.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js");function f(){return(0,p.useContext)(l.ob)}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.7.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js":(W,x,i)=>{i.d(x,{A:()=>oo});var p=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.7.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/constants.js");const Y=(0,l.createContext)({view:{type:f.Ad},onChangeView:()=>{},fields:[],data:[],paginationInfo:{totalItems:0,totalPages:0},selection:[],onChangeSelection:()=>{},setOpenedFilter:()=>{},openedFilter:null,getItemId:t=>t.id,density:0});var G=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),le=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/funnel.js"),w=i("../../../node_modules/.pnpm/@wordpress+i18n@5.11.0/node_modules/@wordpress/i18n/build-module/index.js"),H=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),Ie=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/component.js"),je=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js"),$=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/index.js"),we=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),J=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js"),be=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),k=i("../../../node_modules/.pnpm/@wordpress+element@6.11.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),Z=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),V=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/APGXEJ2Q.js"),q=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7FZLUSKW.js"),Oe=(0,l.createContext)(null),Ve=(0,l.createContext)(null),Q=(0,q.B0)([V.ws],[V.aN]),ie=Q.useContext,fe=Q.useScopedContext,Se=Q.useProviderContext,Me=Q.ContextProvider,Qe=Q.ScopedContextProvider,$e=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/OIB4PV4M.js"),Qt=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CO7ZDQU2.js"),Ue=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CTKPPFRS.js"),K=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HNHAUIIY.js"),ee=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),qe=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/IJ6VFLJG.js"),At=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js"),_e=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js"),de=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),lt=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/3VBK76MS.js"),De=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js"),Et=(0,lt.nr)()&&(0,lt.CN)();function dt(t={}){var e=t,{tag:o}=e,s=(0,De.YG)(e,["tag"]);const a=(0,_e.od)(s.store,(0,_e.Up)(o,["value","rtl"]));(0,_e.UE)(s,a);const d=o==null?void 0:o.getState(),r=a==null?void 0:a.getState(),u=(0,de.Jh)(s.activeId,r==null?void 0:r.activeId,s.defaultActiveId,null),m=(0,qe.z)((0,De.ko)((0,De.IA)({},s),{activeId:u,includesBaseElement:(0,de.Jh)(s.includesBaseElement,r==null?void 0:r.includesBaseElement,!0),orientation:(0,de.Jh)(s.orientation,r==null?void 0:r.orientation,"vertical"),focusLoop:(0,de.Jh)(s.focusLoop,r==null?void 0:r.focusLoop,!0),focusWrap:(0,de.Jh)(s.focusWrap,r==null?void 0:r.focusWrap,!0),virtualFocus:(0,de.Jh)(s.virtualFocus,r==null?void 0:r.virtualFocus,!0)})),c=(0,At.N)((0,De.ko)((0,De.IA)({},s),{placement:(0,de.Jh)(s.placement,r==null?void 0:r.placement,"bottom-start")})),_=(0,de.Jh)(s.value,r==null?void 0:r.value,s.defaultValue,""),b=(0,de.Jh)(s.selectedValue,r==null?void 0:r.selectedValue,d==null?void 0:d.values,s.defaultSelectedValue,""),h=Array.isArray(b),P=(0,De.ko)((0,De.IA)((0,De.IA)({},m.getState()),c.getState()),{value:_,selectedValue:b,resetValueOnSelect:(0,de.Jh)(s.resetValueOnSelect,r==null?void 0:r.resetValueOnSelect,h),resetValueOnHide:(0,de.Jh)(s.resetValueOnHide,r==null?void 0:r.resetValueOnHide,h&&!o),activeValue:r==null?void 0:r.activeValue}),E=(0,_e.y$)(P,m,c,a);return Et&&(0,_e.mj)(E,()=>(0,_e.OH)(E,["virtualFocus"],()=>{E.setState("virtualFocus",!1)})),(0,_e.mj)(E,()=>{if(o)return(0,de.cy)((0,_e.OH)(E,["selectedValue"],C=>{Array.isArray(C.selectedValue)&&o.setValues(C.selectedValue)}),(0,_e.OH)(o,["values"],C=>{E.setState("selectedValue",C.values)}))}),(0,_e.mj)(E,()=>(0,_e.OH)(E,["resetValueOnHide","mounted"],C=>{C.resetValueOnHide&&(C.mounted||E.setState("value",_))})),(0,_e.mj)(E,()=>(0,_e.OH)(E,["open"],C=>{C.open||(E.setState("activeId",u),E.setState("moves",0))})),(0,_e.mj)(E,()=>(0,_e.OH)(E,["moves","activeId"],(C,D)=>{C.moves===D.moves&&E.setState("activeValue",void 0)})),(0,_e.mj)(E,()=>(0,_e.vA)(E,["moves","renderedItems"],(C,D)=>{if(C.moves===D.moves)return;const{activeId:I}=E.getState(),S=m.item(I);E.setState("activeValue",S==null?void 0:S.value)})),(0,De.ko)((0,De.IA)((0,De.IA)((0,De.IA)({},c),m),E),{tag:o,setValue:C=>E.setState("value",C),resetValue:()=>E.setState("value",P.value),setSelectedValue:C=>E.setState("selectedValue",C)})}function N(t,e,o){return(0,K.w5)(e,[o.tag]),(0,Ue.Tz)(t,o,"value","setValue"),(0,Ue.Tz)(t,o,"selectedValue","setSelectedValue"),(0,Ue.Tz)(t,o,"resetValueOnHide"),(0,Ue.Tz)(t,o,"resetValueOnSelect"),Object.assign((0,$e.Y)((0,Qt.o)(t,e,o),e,o),{tag:o.tag})}function qt(t={}){const e=ie();t=(0,ee.ko)((0,ee.IA)({},t),{tag:t.tag!==void 0?t.tag:e});const[o,s]=(0,Ue.Pj)(dt,t);return N(o,s,t)}var Ce=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3LH6HMTR.js"),n=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function Ct(t={}){const e=qt(t);return(0,n.jsx)(Ce.CE,{value:e,children:t.children})}var Pt="label",st=(0,q.ab)(function(e){var o=e,{store:s}=o,a=(0,ee.YG)(o,["store"]);const d=(0,Ce.PV)();s=s||d,(0,de.V1)(s,!1);const r=s.useState(u=>{var m;return(m=u.baseElement)==null?void 0:m.id});return a=(0,ee.IA)({htmlFor:r},a),(0,de.HR)(a)}),ct=(0,q.ph)((0,q.Rf)(function(e){const o=st(e);return(0,q.n)(Pt,o)})),ut=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NWYOIOBE.js"),Ot=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IKLZZMLE.js"),Le=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/PQP5VPTV.js"),Ge=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/utils/events.js"),Xe=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/utils/focus.js"),Mt="input";function mt(t,e,o){if(!o)return!1;const s=t.find(a=>!a.disabled&&a.value);return(s==null?void 0:s.value)===e}function pt(t,e){return!e||t==null?!1:(t=(0,de.J2)(t),e.length>t.length&&e.toLowerCase().indexOf(t.toLowerCase())===0)}function _t(t){return t.type==="input"}function vt(t){return t==="inline"||t==="list"||t==="both"||t==="none"}function es(t){const e=t.find(o=>{var s;return o.disabled?!1:((s=o.element)==null?void 0:s.getAttribute("role"))!=="tab"});return e==null?void 0:e.id}var Dt=(0,q.ab)(function(e){var o=e,{store:s,focusable:a=!0,autoSelect:d=!1,getAutoSelectId:r,setValueOnChange:u,showMinLength:m=0,showOnChange:c,showOnMouseDown:_,showOnClick:b=_,showOnKeyDown:h,showOnKeyPress:P=h,blurActiveItemOnClick:E,setValueOnClick:C=!0,moveOnKeyPress:D=!0,autoComplete:I="list"}=o,S=(0,ee.YG)(o,["store","focusable","autoSelect","getAutoSelectId","setValueOnChange","showMinLength","showOnChange","showOnMouseDown","showOnClick","showOnKeyDown","showOnKeyPress","blurActiveItemOnClick","setValueOnClick","moveOnKeyPress","autoComplete"]);const te=(0,Ce.PV)();s=s||te,(0,de.V1)(s,!1);const T=(0,l.useRef)(null),[z,B]=(0,K.CH)(),X=(0,l.useRef)(!1),U=(0,l.useRef)(!1),ae=s.useState(A=>A.virtualFocus&&d),O=I==="inline"||I==="both",[oe,ue]=(0,l.useState)(O);(0,K.Kp)(()=>{O&&ue(!0)},[O]);const R=s.useState("value"),pe=(0,l.useRef)();(0,l.useEffect)(()=>(0,_e.OH)(s,["selectedValue","activeId"],(A,se)=>{pe.current=se.selectedValue}),[]);const ve=s.useState(A=>{var se;if(O&&oe&&!(A.activeValue&&Array.isArray(A.selectedValue)&&(A.selectedValue.includes(A.activeValue)||(se=pe.current)!=null&&se.includes(A.activeValue))))return A.activeValue}),Je=s.useState("renderedItems"),Fe=s.useState("open"),He=s.useState("contentElement"),yt=(0,l.useMemo)(()=>{if(!O||!oe)return R;if(mt(Je,ve,ae)){if(pt(R,ve)){const se=(ve==null?void 0:ve.slice(R.length))||"";return R+se}return R}return ve||R},[O,oe,Je,ve,ae,R]);(0,l.useEffect)(()=>{const A=T.current;if(!A)return;const se=()=>ue(!0);return A.addEventListener("combobox-item-move",se),()=>{A.removeEventListener("combobox-item-move",se)}},[]),(0,l.useEffect)(()=>{if(!O||!oe||!ve||!mt(Je,ve,ae)||!pt(R,ve))return;let se=de.lQ;return queueMicrotask(()=>{const ge=T.current;if(!ge)return;const{start:xe,end:Re}=(0,Le.Zy)(ge),ze=R.length,Ee=ve.length;(0,Le.eG)(ge,ze,Ee),se=()=>{if(!(0,Xe.AJ)(ge))return;const{start:Ze,end:bo}=(0,Le.Zy)(ge);Ze===ze&&bo===Ee&&(0,Le.eG)(ge,xe,Re)}}),()=>se()},[z,O,oe,ve,Je,ae,R]);const io=(0,l.useRef)(null),Ss=(0,K._q)(r),Ls=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(!Fe||!He)return;const A=(0,Le.qj)(He);if(!A)return;io.current=A;const se=()=>{X.current=!1},ge=()=>{if(!s||!X.current)return;const{activeId:Re}=s.getState();Re!==null&&Re!==Ls.current&&(X.current=!1)},xe={passive:!0,capture:!0};return A.addEventListener("wheel",se,xe),A.addEventListener("touchmove",se,xe),A.addEventListener("scroll",ge,xe),()=>{A.removeEventListener("wheel",se,!0),A.removeEventListener("touchmove",se,!0),A.removeEventListener("scroll",ge,!0)}},[Fe,He,s]),(0,K.UQ)(()=>{R&&(U.current||(X.current=!0))},[R]),(0,K.UQ)(()=>{ae!=="always"&&Fe||(X.current=Fe)},[ae,Fe]);const Rs=s.useState("resetValueOnSelect");(0,K.w5)(()=>{var A,se;const ge=X.current;if(!s||!Fe||(!ae||!ge)&&!Rs)return;const{baseElement:xe,contentElement:Re,activeId:ze}=s.getState();if(!(xe&&!(0,Xe.AJ)(xe))){if(Re!=null&&Re.hasAttribute("data-placing")){const Ee=new MutationObserver(B);return Ee.observe(Re,{attributeFilter:["data-placing"]}),()=>Ee.disconnect()}if(ae&&ge){const Ee=Ss(Je),Ze=Ee!==void 0?Ee:(A=es(Je))!=null?A:s.first();Ls.current=Ze,s.move(Ze!=null?Ze:null)}else{const Ee=(se=s.item(ze))==null?void 0:se.element;Ee&&"scrollIntoView"in Ee&&Ee.scrollIntoView({block:"nearest",inline:"nearest"})}}},[s,Fe,z,R,ae,Rs,Ss,Je]),(0,l.useEffect)(()=>{if(!O)return;const A=T.current;if(!A)return;const se=[A,He].filter(xe=>!!xe),ge=xe=>{se.every(Re=>(0,Ge.aG)(xe,Re))&&(s==null||s.setValue(yt))};for(const xe of se)xe.addEventListener("focusout",ge);return()=>{for(const xe of se)xe.removeEventListener("focusout",ge)}},[O,He,s,yt]);const Zt=A=>A.currentTarget.value.length>=m,ks=S.onChange,ro=(0,K.O4)(c!=null?c:Zt),ao=(0,K.O4)(u!=null?u:!s.tag),lo=(0,K._q)(A=>{if(ks==null||ks(A),A.defaultPrevented||!s)return;const se=A.currentTarget,{value:ge,selectionStart:xe,selectionEnd:Re}=se,ze=A.nativeEvent;if(X.current=!0,_t(ze)&&(ze.isComposing&&(X.current=!1,U.current=!0),O)){const Ee=ze.inputType==="insertText"||ze.inputType==="insertCompositionText",Ze=xe===ge.length;ue(Ee&&Ze)}if(ao(A)){const Ee=ge===s.getState().value;s.setValue(ge),queueMicrotask(()=>{(0,Le.eG)(se,xe,Re)}),O&&ae&&Ee&&B()}ro(A)&&s.show(),(!ae||!X.current)&&s.setActiveId(null)}),Vs=S.onCompositionEnd,co=(0,K._q)(A=>{X.current=!0,U.current=!1,Vs==null||Vs(A),!A.defaultPrevented&&ae&&B()}),Bs=S.onMouseDown,uo=(0,K.O4)(E!=null?E:()=>!!(s!=null&&s.getState().includesBaseElement)),mo=(0,K.O4)(C),po=(0,K.O4)(b!=null?b:Zt),_o=(0,K._q)(A=>{Bs==null||Bs(A),!A.defaultPrevented&&(A.button||A.ctrlKey||s&&(uo(A)&&s.setActiveId(null),mo(A)&&s.setValue(yt),po(A)&&(0,Ge.nz)(A.currentTarget,"mouseup",s.show)))}),Ns=S.onKeyDown,vo=(0,K.O4)(P!=null?P:Zt),wo=(0,K._q)(A=>{if(Ns==null||Ns(A),A.repeat||(X.current=!1),A.defaultPrevented||A.ctrlKey||A.altKey||A.shiftKey||A.metaKey||!s)return;const{open:se}=s.getState();se||(A.key==="ArrowUp"||A.key==="ArrowDown")&&vo(A)&&(A.preventDefault(),s.show())}),zs=S.onBlur,fo=(0,K._q)(A=>{X.current=!1,zs==null||zs(A),A.defaultPrevented}),ho=(0,K.Bi)(S.id),go=vt(I)?I:void 0,xo=s.useState(A=>A.activeId===null);return S=(0,ee.ko)((0,ee.IA)({id:ho,role:"combobox","aria-autocomplete":go,"aria-haspopup":(0,Le.Tc)(He,"listbox"),"aria-expanded":Fe,"aria-controls":He==null?void 0:He.id,"data-active-item":xo||void 0,value:yt},S),{ref:(0,K.SV)(T,S.ref),onChange:lo,onCompositionEnd:co,onMouseDown:_o,onKeyDown:wo,onBlur:fo}),S=(0,Ot.T)((0,ee.ko)((0,ee.IA)({store:s,focusable:a},S),{moveOnKeyPress:A=>(0,de.zO)(D,A)?!1:(O&&ue(!0),!0)})),S=(0,ut.E)((0,ee.IA)({store:s},S)),(0,ee.IA)({autoComplete:"off"},S)}),nt=(0,q.Rf)(function(e){const o=Dt(e);return(0,q.n)(Mt,o)}),It=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UYRBEP7M.js"),Tt="div",St=(0,q.ab)(function(e){var o=e,{store:s,alwaysVisible:a}=o,d=(0,ee.YG)(o,["store","alwaysVisible"]);const r=(0,Ce.UW)(!0),u=(0,Ce.Ay)();s=s||u;const m=!!s&&s===r;(0,de.V1)(s,!1);const c=(0,l.useRef)(null),_=(0,K.Bi)(d.id),b=s.useState("mounted"),h=(0,It.dK)(b,d.hidden,a),P=h?(0,ee.ko)((0,ee.IA)({},d.style),{display:"none"}):d.style,E=s.useState(B=>Array.isArray(B.selectedValue)),C=(0,K.Cy)(c,"role",d.role),I=(C==="listbox"||C==="tree"||C==="grid")&&E||void 0,[S,te]=(0,l.useState)(!1),T=s.useState("contentElement");(0,K.UQ)(()=>{if(!b)return;const B=c.current;if(!B||T!==B)return;const X=()=>{te(!!B.querySelector("[role='listbox']"))},U=new MutationObserver(X);return U.observe(B,{subtree:!0,childList:!0,attributeFilter:["role"]}),X(),()=>U.disconnect()},[b,T]),S||(d=(0,ee.IA)({role:"listbox","aria-multiselectable":I},d)),d=(0,K.w7)(d,B=>(0,n.jsx)(Ce.Ky,{value:s,children:(0,n.jsx)(Ce.Hf.Provider,{value:C,children:B})}),[s,C]);const z=_&&(!r||!m)?s.setContentElement:null;return d=(0,ee.ko)((0,ee.IA)({id:_,hidden:h},d),{ref:(0,K.SV)(z,c,d.ref),style:P}),(0,de.HR)(d)}),Lt=(0,q.Rf)(function(e){const o=St(e);return(0,q.n)(Tt,o)}),Rt=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/L63MOBXC.js"),kt=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NSB34BGG.js"),Vt="div";function Bt(t,e){if(e!=null)return t==null?!1:Array.isArray(t)?t.includes(e):t===e}function wt(t){var e;return(e={menu:"menuitem",listbox:"option",tree:"treeitem"}[t])!=null?e:"option"}var Nt=(0,q.ab)(function(e){var o=e,{store:s,value:a,hideOnClick:d,setValueOnClick:r,selectValueOnClick:u=!0,resetValueOnSelect:m,focusOnHover:c=!1,moveOnKeyPress:_=!0,getItem:b}=o,h=(0,ee.YG)(o,["store","value","hideOnClick","setValueOnClick","selectValueOnClick","resetValueOnSelect","focusOnHover","moveOnKeyPress","getItem"]),P;const E=(0,Ce.UW)();s=s||E,(0,de.V1)(s,!1);const C=(0,l.useCallback)(R=>{const pe=(0,ee.ko)((0,ee.IA)({},R),{value:a});return b?b(pe):pe},[a,b]),D=s.useState(R=>Array.isArray(R.selectedValue)),I=s.useState(R=>Bt(R.selectedValue,a)),S=s.useState("resetValueOnSelect");r=r!=null?r:!D,d=d!=null?d:a!=null&&!D;const te=h.onClick,T=(0,K.O4)(r),z=(0,K.O4)(u),B=(0,K.O4)((P=m!=null?m:S)!=null?P:D),X=(0,K.O4)(d),U=(0,K._q)(R=>{te==null||te(R),!R.defaultPrevented&&((0,Ge.RN)(R)||(0,Ge.$b)(R)||(a!=null&&(z(R)&&(B(R)&&(s==null||s.resetValue()),s==null||s.setSelectedValue(pe=>Array.isArray(pe)?pe.includes(a)?pe.filter(ve=>ve!==a):[...pe,a]:a)),T(R)&&(s==null||s.setValue(a))),X(R)&&(s==null||s.hide())))}),ae=h.onKeyDown,O=(0,K._q)(R=>{if(ae==null||ae(R),R.defaultPrevented)return;const pe=s==null?void 0:s.getState().baseElement;if(!pe||(0,Xe.AJ)(pe))return;(R.key.length===1||R.key==="Backspace"||R.key==="Delete")&&(queueMicrotask(()=>pe.focus()),(0,Le.mB)(pe)&&(s==null||s.setValue(pe.value)))});D&&I!=null&&(h=(0,ee.IA)({"aria-selected":I},h)),h=(0,K.w7)(h,R=>(0,n.jsx)(Ce.L7.Provider,{value:a,children:(0,n.jsx)(Ce.Hh.Provider,{value:I!=null?I:!1,children:R})}),[a,I]);const oe=(0,l.useContext)(Ce.Hf);h=(0,ee.ko)((0,ee.IA)({role:wt(oe),children:a},h),{onClick:U,onKeyDown:O});const ue=(0,K.O4)(_);return h=(0,kt.k)((0,ee.ko)((0,ee.IA)({store:s},h),{getItem:C,moveOnKeyPress:R=>{if(!ue(R))return!1;const pe=new Event("combobox-item-move"),ve=s==null?void 0:s.getState().baseElement;return ve==null||ve.dispatchEvent(pe),!0}})),h=(0,Rt.T)((0,ee.IA)({store:s,focusOnHover:c},h)),h}),ot=(0,q.ph)((0,q.Rf)(function(e){const o=Nt(e);return(0,q.n)(Vt,o)})),ft=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js"),ts="span";function g(t){return(0,de.J2)(t).toLowerCase()}function v(t,e){const o=[];for(const s of e){let a=0;const d=s.length;for(;t.indexOf(s,a)!==-1;){const r=t.indexOf(s,a);r!==-1&&o.push([r,d]),a=r+1}}return o}function y(t){return t.filter(([e,o],s,a)=>!a.some(([d,r],u)=>u!==s&&d<=e&&d+r>=e+o))}function M(t){return t.sort(([e],[o])=>e-o)}function L(t,e){if(!t||!e)return t;const o=(0,ft.$r)(e).filter(Boolean).map(g),s=[],a=(m,c=!1)=>(0,n.jsx)("span",{"data-autocomplete-value":c?"":void 0,"data-user-value":c?void 0:"",children:m},s.length),d=M(y(v(g(t),new Set(o))));if(!d.length)return s.push(a(t,!0)),s;const[r]=d[0];return[t.slice(0,r),...d.flatMap(([m,c],_)=>{var b;const h=t.slice(m,m+c),P=(b=d[_+1])==null?void 0:b[0],E=t.slice(m+c,P);return[h,E]})].forEach((m,c)=>{m&&s.push(a(m,c%2===0))}),s}var F=(0,q.ab)(function(e){var o=e,{store:s,value:a,userValue:d}=o,r=(0,ee.YG)(o,["store","value","userValue"]);const u=(0,Ce.UW)();s=s||u;const m=(0,l.useContext)(Ce.L7),c=a!=null?a:m,_=(0,Ue.O$)(s,h=>d!=null?d:h==null?void 0:h.value),b=(0,l.useMemo)(()=>{if(c)return _?L(c,_):c},[c,_]);return r=(0,ee.IA)({children:b},r),(0,de.HR)(r)}),ne=(0,q.Rf)(function(e){const o=F(e);return(0,q.n)(ts,o)}),re=i("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),he=i.n(re),ye=i("../../../node_modules/.pnpm/@wordpress+compose@7.11.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),me=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/composite/index.js"),Be=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),We=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),Te=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js"),ce=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");const Ae=(0,n.jsx)(ce.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(ce.jl,{cx:12,cy:12,r:3})});function ke(t=""){return he()(t.trim().toLowerCase())}const Ke=[],ht=(t,e)=>t.singleSelection?e==null?void 0:e.value:Array.isArray(e==null?void 0:e.value)?e.value:!Array.isArray(e==null?void 0:e.value)&&(e!=null&&e.value)?[e.value]:Ke,zt=(t,e,o)=>t.singleSelection?o:Array.isArray(e==null?void 0:e.value)?e.value.includes(o)?e.value.filter(s=>s!==o):[...e.value,o]:[o];function gt(t,e){return`${t}-${e}`}function Ne({view:t,filter:e,onChangeView:o}){var m,c;const s=(0,ye.A)(Ne,"dataviews-filter-list-box"),[a,d]=(0,l.useState)(((m=e.operators)==null?void 0:m.length)===1?void 0:null),r=(c=t.filters)==null?void 0:c.find(_=>_.field===e.field),u=ht(e,r);return(0,n.jsx)(me.e,{virtualFocus:!0,focusLoop:!0,activeId:a,setActiveId:d,role:"listbox",className:"dataviews-filters__search-widget-listbox","aria-label":(0,w.nv)((0,w.__)("List of: %1$s"),e.name),onFocusVisible:()=>{!a&&e.elements.length&&d(gt(s,e.elements[0].value))},render:(0,n.jsx)(me.e.Typeahead,{}),children:e.elements.map(_=>(0,n.jsxs)(me.e.Hover,{render:(0,n.jsx)(me.e.Item,{id:gt(s,_.value),render:(0,n.jsx)("div",{"aria-label":_.label,role:"option",className:"dataviews-filters__search-widget-listitem"}),onClick:()=>{var b,h;const P=r?[...((b=t.filters)!==null&&b!==void 0?b:[]).map(E=>E.field===e.field?{...E,operator:r.operator||e.operators[0],value:zt(e,r,_.value)}:E)]:[...(h=t.filters)!==null&&h!==void 0?h:[],{field:e.field,operator:e.operators[0],value:zt(e,r,_.value)}];o({...t,page:1,filters:P})}}),children:[(0,n.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[e.singleSelection&&u===_.value&&(0,n.jsx)(J.A,{icon:Ae}),!e.singleSelection&&u.includes(_.value)&&(0,n.jsx)(J.A,{icon:We.A})]}),(0,n.jsx)("span",{children:_.label})]},_.value))})}function Ye({view:t,filter:e,onChangeView:o}){var c;const[s,a]=(0,l.useState)(""),d=(0,l.useDeferredValue)(s),r=(c=t.filters)==null?void 0:c.find(_=>_.field===e.field),u=ht(e,r),m=(0,l.useMemo)(()=>{const _=ke(d);return e.elements.filter(b=>ke(b.label).includes(_))},[e.elements,d]);return(0,n.jsxs)(Ct,{selectedValue:u,setSelectedValue:_=>{var b,h;const P=r?[...((b=t.filters)!==null&&b!==void 0?b:[]).map(E=>E.field===e.field?{...E,operator:r.operator||e.operators[0],value:_}:E)]:[...(h=t.filters)!==null&&h!==void 0?h:[],{field:e.field,operator:e.operators[0],value:_}];o({...t,page:1,filters:P})},setValue:a,children:[(0,n.jsxs)("div",{className:"dataviews-filters__search-widget-filter-combobox__wrapper",children:[(0,n.jsx)(ct,{render:(0,n.jsx)(Be.A,{children:(0,w.__)("Search items")}),children:(0,w.__)("Search items")}),(0,n.jsx)(nt,{autoSelect:"always",placeholder:(0,w.__)("Search"),className:"dataviews-filters__search-widget-filter-combobox__input"}),(0,n.jsx)("div",{className:"dataviews-filters__search-widget-filter-combobox__icon",children:(0,n.jsx)(J.A,{icon:Te.A})})]}),(0,n.jsxs)(Lt,{className:"dataviews-filters__search-widget-filter-combobox-list",alwaysVisible:!0,children:[m.map(_=>(0,n.jsxs)(ot,{resetValueOnSelect:!1,value:_.value,className:"dataviews-filters__search-widget-listitem",hideOnClick:!1,setValueOnClick:!1,focusOnHover:!0,children:[(0,n.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[e.singleSelection&&u===_.value&&(0,n.jsx)(J.A,{icon:Ae}),!e.singleSelection&&u.includes(_.value)&&(0,n.jsx)(J.A,{icon:We.A})]}),(0,n.jsxs)("span",{children:[(0,n.jsx)(ne,{className:"dataviews-filters__search-widget-filter-combobox-item-value",value:_.label}),!!_.description&&(0,n.jsx)("span",{className:"dataviews-filters__search-widget-listitem-description",children:_.description})]})]},_.value)),!m.length&&(0,n.jsx)("p",{children:(0,w.__)("No results found")})]})]})}function et(t){const e=t.filter.elements.length>10?Ye:Ne;return(0,n.jsx)(e,{...t})}const Ut="Enter",Wt=" ",xt=({activeElements:t,filterInView:e,filter:o})=>{if(t===void 0||t.length===0)return o.name;const s={Name:(0,n.jsx)("span",{className:"dataviews-filters__summary-filter-text-name"}),Value:(0,n.jsx)("span",{className:"dataviews-filters__summary-filter-text-value"})};return(e==null?void 0:e.operator)===f.ld?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is any: </Name><Value>%2$s</Value>"),o.name,t.map(a=>a.label).join(", ")),s):(e==null?void 0:e.operator)===f.Vw?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is none: </Name><Value>%2$s</Value>"),o.name,t.map(a=>a.label).join(", ")),s):(e==null?void 0:e.operator)===f.y5?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is all: </Name><Value>%2$s</Value>"),o.name,t.map(a=>a.label).join(", ")),s):(e==null?void 0:e.operator)===f.UX?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is not all: </Name><Value>%2$s</Value>"),o.name,t.map(a=>a.label).join(", ")),s):(e==null?void 0:e.operator)===f.gm?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),o.name,t[0].label),s):(e==null?void 0:e.operator)===f._k?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),o.name,t[0].label),s):(0,w.nv)((0,w.__)("Unknown status for %1$s"),o.name)};function Us({filter:t,view:e,onChangeView:o}){var r,u;const s=(r=t.operators)==null?void 0:r.map(m=>{var c;return{value:m,label:(c=f.we[m])==null?void 0:c.label}}),a=(u=e.filters)==null?void 0:u.find(m=>m.field===t.field),d=(a==null?void 0:a.operator)||t.operators[0];return s.length>1&&(0,n.jsxs)(p.A,{spacing:2,justify:"flex-start",className:"dataviews-filters__summary-operators-container",children:[(0,n.jsx)(Ie.A,{className:"dataviews-filters__summary-operators-filter-name",children:t.name}),(0,n.jsx)(je.A,{label:(0,w.__)("Conditions"),value:d,options:s,onChange:m=>{var c,_;const b=m,h=a?[...((c=e.filters)!==null&&c!==void 0?c:[]).map(P=>P.field===t.field?{...P,operator:b}:P)]:[...(_=e.filters)!==null&&_!==void 0?_:[],{field:t.field,operator:b,value:void 0}];o({...e,page:1,filters:h})},size:"small",__nextHasNoMarginBottom:!0,hideLabelFromVision:!0})]})}function Ws({addFilterRef:t,openedFilter:e,...o}){var h;const s=(0,l.useRef)(null),{filter:a,view:d,onChangeView:r}=o,u=(h=d.filters)==null?void 0:h.find(P=>P.field===a.field),m=a.elements.filter(P=>{var E;return a.singleSelection?P.value===(u==null?void 0:u.value):(E=u==null?void 0:u.value)==null?void 0:E.includes(P.value)}),c=a.isPrimary,_=(u==null?void 0:u.value)!==void 0,b=!c||_;return(0,n.jsx)($.A,{defaultOpen:e===a.field,contentClassName:"dataviews-filters__summary-popover",popoverProps:{placement:"bottom-start",role:"dialog"},onClose:()=>{var P;(P=s.current)==null||P.focus()},renderToggle:({isOpen:P,onToggle:E})=>(0,n.jsxs)("div",{className:"dataviews-filters__summary-chip-container",children:[(0,n.jsx)(we.Ay,{text:(0,w.nv)((0,w.__)("Filter by: %1$s"),a.name.toLowerCase()),placement:"top",children:(0,n.jsx)("div",{className:(0,H.A)("dataviews-filters__summary-chip",{"has-reset":b,"has-values":_}),role:"button",tabIndex:0,onClick:E,onKeyDown:C=>{[Ut,Wt].includes(C.key)&&(E(),C.preventDefault())},"aria-pressed":P,"aria-expanded":P,ref:s,children:(0,n.jsx)(xt,{activeElements:m,filterInView:u,filter:a})})}),b&&(0,n.jsx)(we.Ay,{text:c?(0,w.__)("Reset"):(0,w.__)("Remove"),placement:"top",children:(0,n.jsx)("button",{className:(0,H.A)("dataviews-filters__summary-chip-remove",{"has-values":_}),onClick:()=>{var C,D,I;r({...d,page:1,filters:(C=d.filters)==null?void 0:C.filter(S=>S.field!==a.field)}),c?(I=s.current)==null||I.focus():(D=t.current)==null||D.focus()},children:(0,n.jsx)(J.A,{icon:Z.A})})})]}),renderContent:()=>(0,n.jsxs)(be.A,{spacing:0,justify:"flex-start",children:[(0,n.jsx)(Us,{...o}),(0,n.jsx)(et,{...o})]})})}var it=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/private-apis.js"),Ks=i("../../../node_modules/.pnpm/@wordpress+private-apis@1.11.0/node_modules/@wordpress/private-apis/build-module/implementation.js");const{lock:jo,unlock:rt}=(0,Ks.yf)("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.","@wordpress/dataviews"),{Menu:Kt}=rt(it.j);function ss({filters:t,view:e,onChangeView:o,setOpenedFilter:s,trigger:a}){const d=t.filter(r=>!r.isVisible);return(0,n.jsx)(Kt,{trigger:a,children:d.map(r=>(0,n.jsx)(Kt.Item,{onClick:()=>{s(r.field),o({...e,page:1,filters:[...e.filters||[],{field:r.field,value:void 0,operator:r.operators[0]}]})},children:(0,n.jsx)(Kt.ItemLabel,{children:r.name})},r.field))})}function Fs({filters:t,view:e,onChangeView:o,setOpenedFilter:s},a){if(!t.length||t.every(({isPrimary:r})=>r))return null;const d=t.filter(r=>!r.isVisible);return(0,n.jsx)(ss,{trigger:(0,n.jsx)(G.Ay,{accessibleWhenDisabled:!0,size:"compact",className:"dataviews-filters-button",variant:"tertiary",disabled:!d.length,ref:a,children:(0,w.__)("Add filter")}),filters:t,view:e,onChangeView:o,setOpenedFilter:s})}const Hs=(0,l.forwardRef)(Fs);function $s({filters:t,view:e,onChangeView:o}){var d;const s=r=>t.some(u=>u.field===r&&u.isPrimary),a=!e.search&&!((d=e.filters)!=null&&d.some(r=>r.value!==void 0||!s(r.field)));return(0,n.jsx)(G.Ay,{disabled:a,accessibleWhenDisabled:!0,size:"compact",variant:"tertiary",className:"dataviews-filters__reset-button",onClick:()=>{o({...e,page:1,search:"",filters:[]})},children:(0,w.__)("Reset")})}function ns(t){var o;let e=(o=t.filterBy)==null?void 0:o.operators;return(!e||!Array.isArray(e))&&(e=[f.ld,f.Vw]),e=e.filter(s=>f.CD.includes(s)),(e.includes(f.gm)||e.includes(f._k))&&(e=e.filter(s=>[f.gm,f._k].includes(s))),e}function os(t,e){return(0,l.useMemo)(()=>{const o=[];return t.forEach(s=>{var r,u,m;if(!((r=s.elements)!=null&&r.length))return;const a=ns(s);if(a.length===0)return;const d=!!((u=s.filterBy)!=null&&u.isPrimary);o.push({field:s.id,name:s.label,elements:s.elements,singleSelection:a.some(c=>[f.gm,f._k].includes(c)),operators:a,isVisible:d||!!((m=e.filters)!=null&&m.some(c=>c.field===s.id&&f.CD.includes(c.operator))),isPrimary:d})}),o.sort((s,a)=>s.isPrimary&&!a.isPrimary?-1:!s.isPrimary&&a.isPrimary?1:s.name.localeCompare(a.name)),o},[t,e])}function Gs({filters:t,view:e,onChangeView:o,setOpenedFilter:s,isShowingFilter:a,setIsShowingFilter:d}){var c,_;const r=(0,l.useCallback)(b=>{o(b),d(!0)},[o,d]),m=!!t.filter(b=>b.isVisible).length;return t.length===0?null:m?(0,n.jsxs)("div",{className:"dataviews-filters__container-visibility-toggle",children:[(0,n.jsx)(G.Ay,{className:"dataviews-filters__visibility-toggle",size:"compact",icon:le.A,label:(0,w._x)("Filter","verb"),onClick:()=>{a||s(null),d(!a)},isPressed:a,"aria-expanded":a}),m&&!!((c=e.filters)!=null&&c.length)&&(0,n.jsx)("span",{className:"dataviews-filters-toggle__count",children:(_=e.filters)==null?void 0:_.length})]}):(0,n.jsx)(ss,{filters:t,view:e,onChangeView:r,setOpenedFilter:s,trigger:(0,n.jsx)(G.Ay,{className:"dataviews-filters__visibility-toggle",size:"compact",icon:le.A,label:(0,w.__)("Add filter"),isPressed:!1,"aria-expanded":!1})})}function Xs(){const{fields:t,view:e,onChangeView:o,openedFilter:s,setOpenedFilter:a}=(0,l.useContext)(Y),d=(0,l.useRef)(null),r=os(t,e),u=(0,n.jsx)(Hs,{filters:r,view:e,onChangeView:o,ref:d,setOpenedFilter:a},"add-filter"),m=r.filter(_=>_.isVisible);if(m.length===0)return null;const c=[...m.map(_=>(0,n.jsx)(Ws,{filter:_,view:e,onChangeView:o,addFilterRef:d,openedFilter:s},_.field)),u];return c.push((0,n.jsx)($s,{filters:r,view:e,onChangeView:o},"reset-filters")),(0,n.jsx)(p.A,{justify:"flex-start",style:{width:"fit-content"},className:"dataviews-filters__container",wrap:!0,children:c})}const Ys=(0,l.memo)(Xs);var Js=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/block-table.js"),Zs=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/category.js"),Qs=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js"),qs=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets.js"),Ft=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),is=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/checkbox-control/index.js");function rs({selection:t,onChangeSelection:e,item:o,getItemId:s,primaryField:a,disabled:d}){const r=s(o),u=!d&&t.includes(r);let m;return a!=null&&a.getValue&&o?m=(0,w.nv)(u?(0,w.__)("Deselect item: %s"):(0,w.__)("Select item: %s"),a.getValue({item:o})):m=u?(0,w.__)("Select a new item"):(0,w.__)("Deselect item"),(0,n.jsx)(is.A,{className:"dataviews-selection-checkbox",__nextHasNoMarginBottom:!0,"aria-label":m,"aria-disabled":d,checked:u,onChange:()=>{d||e(t.includes(r)?t.filter(c=>r!==c):[...t,r])}})}var en=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js"),as=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/more-vertical.js"),bt=i("../../../node_modules/.pnpm/@wordpress+data@10.11.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const{Menu:jt,kebabCase:tn}=rt(it.j);function ls({action:t,onClick:e,items:o}){const s=typeof t.label=="string"?t.label:t.label(o);return(0,n.jsx)(G.Ay,{label:s,icon:t.icon,isDestructive:t.isDestructive,size:"compact",onClick:e})}function ds({action:t,onClick:e,items:o}){const s=typeof t.label=="string"?t.label:t.label(o);return(0,n.jsx)(jt.Item,{onClick:e,hideOnClick:!("RenderModal"in t),children:(0,n.jsx)(jt.ItemLabel,{children:s})})}function cs({action:t,items:e,closeModal:o}){const s=typeof t.label=="string"?t.label:t.label(e);return(0,n.jsx)(en.A,{title:t.modalHeader||s,__experimentalHideHeader:!!t.hideModalHeader,onRequestClose:o!=null?o:()=>{},focusOnMount:"firstContentElement",size:"small",overlayClassName:`dataviews-action-modal dataviews-action-modal__${tn(t.id)}`,children:(0,n.jsx)(t.RenderModal,{items:e,closeModal:o})})}function Ht({action:t,items:e,ActionTrigger:o,isBusy:s}){const[a,d]=(0,l.useState)(!1),r={action:t,onClick:()=>{d(!0)},items:e,isBusy:s};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{...r}),a&&(0,n.jsx)(cs,{action:t,items:e,closeModal:()=>d(!1)})]})}function us({actions:t,item:e}){const o=(0,bt.A)();return(0,n.jsx)(jt.Group,{children:t.map(s=>"RenderModal"in s?(0,n.jsx)(Ht,{action:s,items:[e],ActionTrigger:ds},s.id):(0,n.jsx)(ds,{action:s,onClick:()=>{s.callback([e],{registry:o})},items:[e]},s.id))})}function ms({item:t,actions:e,isCompact:o}){const s=(0,bt.A)(),{primaryActions:a,eligibleActions:d}=(0,l.useMemo)(()=>{const r=e.filter(m=>!m.isEligible||m.isEligible(t));return{primaryActions:r.filter(m=>m.isPrimary&&!!m.icon),eligibleActions:r}},[e,t]);return o?(0,n.jsx)(ps,{item:t,actions:d}):(0,n.jsxs)(p.A,{spacing:1,justify:"flex-end",className:"dataviews-item-actions",style:{flexShrink:"0",width:"auto"},children:[!!a.length&&a.map(r=>"RenderModal"in r?(0,n.jsx)(Ht,{action:r,items:[t],ActionTrigger:ls},r.id):(0,n.jsx)(ls,{action:r,onClick:()=>{r.callback([t],{registry:s})},items:[t]},r.id)),(0,n.jsx)(ps,{item:t,actions:d})]})}function ps({item:t,actions:e}){return(0,n.jsx)(jt,{trigger:(0,n.jsx)(G.Ay,{size:"compact",icon:as.A,label:(0,w.__)("Actions"),accessibleWhenDisabled:!0,disabled:!e.length,className:"dataviews-all-actions-button"}),placement:"bottom-end",children:(0,n.jsx)(us,{actions:e,item:t})})}function _s(t,e){return(0,l.useMemo)(()=>t.some(o=>o.supportsBulk&&(!o.isEligible||o.isEligible(e))),[t,e])}function vs(t,e){return(0,l.useMemo)(()=>e.some(o=>t.some(s=>s.supportsBulk&&(!s.isEligible||s.isEligible(o)))),[t,e])}function ws({selection:t,onChangeSelection:e,data:o,actions:s,getItemId:a}){const d=(0,l.useMemo)(()=>o.filter(m=>s.some(c=>c.supportsBulk&&(!c.isEligible||c.isEligible(m)))),[o,s]),r=o.filter(m=>t.includes(a(m))&&d.includes(m)),u=r.length===d.length;return(0,n.jsx)(is.A,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:u,indeterminate:!u&&!!r.length,onChange:()=>{e(u?[]:d.map(m=>a(m)))},"aria-label":u?(0,w.__)("Deselect all"):(0,w.__)("Select all")})}function fs({action:t,onClick:e,isBusy:o,items:s}){const a=typeof t.label=="string"?t.label:t.label(s);return(0,n.jsx)(G.Ay,{disabled:o,accessibleWhenDisabled:!0,label:a,icon:t.icon,isDestructive:t.isDestructive,size:"compact",onClick:e,isBusy:o,tooltipPosition:"top"})}const hs=[];function sn({action:t,selectedItems:e,actionInProgress:o,setActionInProgress:s}){const a=(0,bt.A)(),d=(0,l.useMemo)(()=>e.filter(r=>!t.isEligible||t.isEligible(r)),[t,e]);return"RenderModal"in t?(0,n.jsx)(Ht,{action:t,items:d,ActionTrigger:fs},t.id):(0,n.jsx)(fs,{action:t,onClick:async()=>{s(t.id),await t.callback(e,{registry:a}),s(null)},items:d,isBusy:o===t.id},t.id)}function gs(t,e,o,s,a,d,r,u,m){const c=d.length>0?(0,w.nv)((0,w._n)("%d Item selected","%d Items selected",d.length),d.length):(0,w.nv)((0,w._n)("%d Item","%d Items",t.length),t.length);return(0,n.jsxs)(p.A,{expanded:!1,className:"dataviews-bulk-actions-footer__container",spacing:3,children:[(0,n.jsx)(ws,{selection:s,onChangeSelection:m,data:t,actions:e,getItemId:o}),(0,n.jsx)("span",{className:"dataviews-bulk-actions-footer__item-count",children:c}),(0,n.jsxs)(p.A,{className:"dataviews-bulk-actions-footer__action-buttons",expanded:!1,spacing:1,children:[a.map(_=>(0,n.jsx)(sn,{action:_,selectedItems:d,actionInProgress:r,setActionInProgress:u},_.id)),d.length>0&&(0,n.jsx)(G.Ay,{icon:Z.A,showTooltip:!0,tooltipPosition:"top",size:"compact",label:(0,w.__)("Cancel"),disabled:!!r,accessibleWhenDisabled:!1,onClick:()=>{m(hs)}})]})]})}function nn({selection:t,actions:e,onChangeSelection:o,data:s,getItemId:a}){const[d,r]=(0,l.useState)(null),u=(0,l.useRef)(null),m=(0,l.useMemo)(()=>e.filter(h=>h.supportsBulk),[e]),c=(0,l.useMemo)(()=>s.filter(h=>m.some(P=>!P.isEligible||P.isEligible(h))),[s,m]),_=(0,l.useMemo)(()=>s.filter(h=>t.includes(a(h))&&c.includes(h)),[t,s,a,c]),b=(0,l.useMemo)(()=>e.filter(h=>h.supportsBulk&&h.icon&&_.some(P=>!h.isEligible||h.isEligible(P))),[e,_]);if(d)u.current||(u.current=gs(s,e,a,t,b,_,d,r,o));else return u.current&&(u.current=null),gs(s,e,a,t,b,_,d,r,o);return u.current}function on(){const{data:t,selection:e,actions:o=hs,onChangeSelection:s,getItemId:a}=(0,l.useContext)(Y);return(0,n.jsx)(nn,{selection:e,onChangeSelection:s,data:t,actions:o,getItemId:a})}var rn=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),an=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),xs=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js");const{Menu:Pe}=rt(it.j);function ln({children:t}){return l.Children.toArray(t).filter(Boolean).map((e,o)=>(0,n.jsxs)(l.Fragment,{children:[o>0&&(0,n.jsx)(Pe.Separator,{}),e]},o))}const dn=(0,l.forwardRef)(function({fieldId:e,view:o,fields:s,onChangeView:a,onHide:d,setOpenedFilter:r},u){var S,te,T,z,B,X;const m=tt(o,s),c=m==null?void 0:m.indexOf(e),_=((S=o.sort)==null?void 0:S.field)===e;let b=!1,h=!1,P=!1,E,C=[];const D=(T=(te=o.layout)==null?void 0:te.combinedFields)==null?void 0:T.find(U=>U.id===e),I=s.find(U=>U.id===e);if(D)E=D.header||D.label;else{if(!I)return null;b=I.enableHiding!==!1,h=I.enableSorting!==!1,E=I.header,C=ns(I),P=!((z=o.filters)!=null&&z.some(U=>e===U.field))&&!!((B=I.elements)!=null&&B.length)&&!!C.length&&!((X=I.filterBy)!=null&&X.isPrimary)}return(0,n.jsx)(Pe,{align:"start",trigger:(0,n.jsxs)(G.Ay,{size:"compact",className:"dataviews-view-table-header-button",ref:u,variant:"tertiary",children:[E,o.sort&&_&&(0,n.jsx)("span",{"aria-hidden":"true",children:f.vI[o.sort.direction]})]}),style:{minWidth:"240px"},children:(0,n.jsxs)(ln,{children:[h&&(0,n.jsx)(Pe.Group,{children:f.GJ.map(U=>{const ae=o.sort&&_&&o.sort.direction===U,O=`${e}-${U}`;return(0,n.jsx)(Pe.RadioItem,{name:"view-table-sorting",value:O,checked:ae,onChange:()=>{a({...o,sort:{field:e,direction:U}})},children:(0,n.jsx)(Pe.ItemLabel,{children:f.CL[U]})},O)})}),P&&(0,n.jsx)(Pe.Group,{children:(0,n.jsx)(Pe.Item,{prefix:(0,n.jsx)(J.A,{icon:le.A}),onClick:()=>{r(e),a({...o,page:1,filters:[...o.filters||[],{field:e,value:void 0,operator:C[0]}]})},children:(0,n.jsx)(Pe.ItemLabel,{children:(0,w.__)("Add filter")})})}),(0,n.jsxs)(Pe.Group,{children:[(0,n.jsx)(Pe.Item,{prefix:(0,n.jsx)(J.A,{icon:rn.A}),disabled:c<1,onClick:()=>{var U;a({...o,fields:[...(U=m.slice(0,c-1))!==null&&U!==void 0?U:[],e,m[c-1],...m.slice(c+1)]})},children:(0,n.jsx)(Pe.ItemLabel,{children:(0,w.__)("Move left")})}),(0,n.jsx)(Pe.Item,{prefix:(0,n.jsx)(J.A,{icon:an.A}),disabled:c>=m.length-1,onClick:()=>{var U;a({...o,fields:[...(U=m.slice(0,c))!==null&&U!==void 0?U:[],m[c+1],e,...m.slice(c+2)]})},children:(0,n.jsx)(Pe.ItemLabel,{children:(0,w.__)("Move right")})}),b&&I&&(0,n.jsx)(Pe.Item,{prefix:(0,n.jsx)(J.A,{icon:xs.A}),onClick:()=>{d(I),a({...o,fields:m.filter(U=>U!==e)})},children:(0,n.jsx)(Pe.ItemLabel,{children:(0,w.__)("Hide column")})})]})]})})});function bs({column:t,fields:e,view:o,...s}){var r,u;const a=e.find(m=>m.id===t);if(a)return(0,n.jsx)(cn,{...s,field:a});const d=(u=(r=o.layout)==null?void 0:r.combinedFields)==null?void 0:u.find(m=>m.id===t);return d?(0,n.jsx)(un,{...s,fields:e,view:o,field:d}):null}function cn({primaryField:t,item:e,field:o}){return(0,n.jsx)("div",{className:(0,H.A)("dataviews-view-table__cell-content-wrapper",{"dataviews-view-table__primary-field":(t==null?void 0:t.id)===o.id}),children:(0,n.jsx)(o.render,{item:e})})}function un({field:t,...e}){const o=t.children.map(s=>(0,n.jsx)(bs,{...e,column:s},s));return t.direction==="horizontal"?(0,n.jsx)(p.A,{spacing:3,children:o}):(0,n.jsx)(be.A,{spacing:0,children:o})}function mn({hasBulkActions:t,item:e,actions:o,fields:s,id:a,view:d,primaryField:r,selection:u,getItemId:m,onChangeSelection:c}){const _=_s(o,e),b=_&&u.includes(a),[h,P]=(0,l.useState)(!1),E=()=>{P(!0)},C=()=>{P(!1)},D=(0,l.useRef)(!1),I=tt(d,s);return(0,n.jsxs)("tr",{className:(0,H.A)("dataviews-view-table__row",{"is-selected":_&&b,"is-hovered":h,"has-bulk-actions":_}),onMouseEnter:E,onMouseLeave:C,onTouchStart:()=>{D.current=!0},onClick:()=>{var S;_&&!D.current&&((S=document.getSelection())==null?void 0:S.type)!=="Range"&&c(u.includes(a)?u.filter(te=>a!==te):[a])},children:[t&&(0,n.jsx)("td",{className:"dataviews-view-table__checkbox-column",style:{width:"1%"},children:(0,n.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,n.jsx)(rs,{item:e,selection:u,onChangeSelection:c,getItemId:m,primaryField:r,disabled:!_})})}),I.map(S=>{var X,U;var te;const{width:T,maxWidth:z,minWidth:B}=(te=(U=(X=d.layout)==null?void 0:X.styles)==null?void 0:U[S])!==null&&te!==void 0?te:{};return(0,n.jsx)("td",{style:{width:T,maxWidth:z,minWidth:B},children:(0,n.jsx)(bs,{primaryField:r,fields:s,item:e,column:S,view:d})},S)}),!!(o!=null&&o.length)&&(0,n.jsx)("td",{className:"dataviews-view-table__actions-column",onClick:S=>S.stopPropagation(),children:(0,n.jsx)(ms,{item:e,actions:o})})]})}function pn({actions:t,data:e,fields:o,getItemId:s,isLoading:a=!1,onChangeView:d,onChangeSelection:r,selection:u,setOpenedFilter:m,view:c}){const _=(0,l.useRef)(new Map),b=(0,l.useRef)(),[h,P]=(0,l.useState)(),E=vs(t,e);(0,l.useEffect)(()=>{b.current&&(b.current.focus(),b.current=void 0)});const C=(0,l.useId)();if(h){b.current=h,P(void 0);return}const D=T=>{const z=_.current.get(T.id),B=z?_.current.get(z.fallback):void 0;P(B==null?void 0:B.node)},I=tt(c,o),S=!!(e!=null&&e.length),te=o.find(T=>{var z;return T.id===((z=c.layout)==null?void 0:z.primaryField)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("table",{className:"dataviews-view-table","aria-busy":a,"aria-describedby":C,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"dataviews-view-table__row",children:[E&&(0,n.jsx)("th",{className:"dataviews-view-table__checkbox-column",style:{width:"1%"},scope:"col",children:(0,n.jsx)(ws,{selection:u,onChangeSelection:r,data:e,actions:t,getItemId:s})}),I.map((T,z)=>{var O,oe,ue;var B;const{width:X,maxWidth:U,minWidth:ae}=(B=(oe=(O=c.layout)==null?void 0:O.styles)==null?void 0:oe[T])!==null&&B!==void 0?B:{};return(0,n.jsx)("th",{style:{width:X,maxWidth:U,minWidth:ae},"aria-sort":((ue=c.sort)==null?void 0:ue.field)===T?f.LW[c.sort.direction]:void 0,scope:"col",children:(0,n.jsx)(dn,{ref:R=>{R?_.current.set(T,{node:R,fallback:I[z>0?z-1:1]}):_.current.delete(T)},fieldId:T,view:c,fields:o,onChangeView:d,onHide:D,setOpenedFilter:m})},T)}),!!(t!=null&&t.length)&&(0,n.jsx)("th",{className:"dataviews-view-table__actions-column",children:(0,n.jsx)("span",{className:"dataviews-view-table-header",children:(0,w.__)("Actions")})})]})}),(0,n.jsx)("tbody",{children:S&&e.map((T,z)=>(0,n.jsx)(mn,{item:T,hasBulkActions:E,actions:t,fields:o,id:s(T)||z.toString(),view:c,primaryField:te,selection:u,getItemId:s,onChangeSelection:r},s(T)))})]}),(0,n.jsx)("div",{className:(0,H.A)({"dataviews-loading":a,"dataviews-no-results":!S&&!a}),id:C,children:!S&&(0,n.jsx)("p",{children:a?(0,n.jsx)(Ft.Ay,{}):(0,w.__)("No results")})})]})}const _n=pn;var vn=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/component.js"),$t=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js");function wn({selection:t,onChangeSelection:e,getItemId:o,item:s,actions:a,mediaField:d,primaryField:r,visibleFields:u,badgeFields:m,columnFields:c}){const _=_s(a,s),b=o(s),h=t.includes(b),P=d!=null&&d.render?(0,n.jsx)(d.render,{item:s}):null,E=r!=null&&r.render?(0,n.jsx)(r.render,{item:s}):null;return(0,n.jsxs)(be.A,{spacing:0,className:(0,H.A)("dataviews-view-grid__card",{"is-selected":_&&h}),onClickCapture:C=>{if(C.ctrlKey||C.metaKey){if(C.stopPropagation(),C.preventDefault(),!_)return;e(t.includes(b)?t.filter(D=>b!==D):[...t,b])}},children:[(0,n.jsx)("div",{className:"dataviews-view-grid__media",children:P}),(0,n.jsx)(rs,{item:s,selection:t,onChangeSelection:e,getItemId:o,primaryField:r,disabled:!_}),(0,n.jsxs)(p.A,{justify:"space-between",className:"dataviews-view-grid__title-actions",children:[(0,n.jsx)(p.A,{className:"dataviews-view-grid__primary-field",children:E}),(0,n.jsx)(ms,{item:s,actions:a,isCompact:!0})]}),!!(m!=null&&m.length)&&(0,n.jsx)(p.A,{className:"dataviews-view-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:m.map(C=>(0,n.jsx)(Ie.A,{className:"dataviews-view-grid__field-value",children:(0,n.jsx)(C.render,{item:s})},C.id))}),!!(u!=null&&u.length)&&(0,n.jsx)(be.A,{className:"dataviews-view-grid__fields",spacing:1,children:u.map(C=>(0,n.jsx)(vn.A,{className:(0,H.A)("dataviews-view-grid__field",c!=null&&c.includes(C.id)?"is-column":"is-row"),gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:c!=null&&c.includes(C.id)?"column":"row",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ie.A,{className:"dataviews-view-grid__field-name",children:C.header}),(0,n.jsx)(Ie.A,{className:"dataviews-view-grid__field-value",style:{maxHeight:"none"},children:(0,n.jsx)(C.render,{item:s})})]})},C.id))})]},b)}function fn({actions:t,data:e,fields:o,getItemId:s,isLoading:a,onChangeSelection:d,selection:r,view:u,density:m}){const c=o.find(D=>{var I;return D.id===((I=u.layout)==null?void 0:I.mediaField)}),_=o.find(D=>{var I;return D.id===((I=u.layout)==null?void 0:I.primaryField)}),b=u.fields||o.map(D=>D.id),{visibleFields:h,badgeFields:P}=o.reduce((D,I)=>{var te,T,z,B;if(!b.includes(I.id)||[(te=u.layout)==null?void 0:te.mediaField,(T=u==null?void 0:u.layout)==null?void 0:T.primaryField].includes(I.id))return D;const S=(B=(z=u.layout)==null?void 0:z.badgeFields)!=null&&B.includes(I.id)?"badgeFields":"visibleFields";return D[S].push(I),D},{visibleFields:[],badgeFields:[]}),E=!!(e!=null&&e.length),C=m?{gridTemplateColumns:`repeat(${m}, minmax(0, 1fr))`}:{};return(0,n.jsxs)(n.Fragment,{children:[E&&(0,n.jsx)($t.A,{gap:8,columns:2,alignment:"top",className:"dataviews-view-grid",style:C,"aria-busy":a,children:e.map(D=>{var I;return(0,n.jsx)(wn,{selection:r,onChangeSelection:d,getItemId:s,item:D,actions:t,mediaField:c,primaryField:_,visibleFields:h,badgeFields:P,columnFields:(I=u.layout)==null?void 0:I.columnFields},s(D))})}),!E&&(0,n.jsx)("div",{className:(0,H.A)({"dataviews-loading":a,"dataviews-no-results":!a}),children:(0,n.jsx)("p",{children:a?(0,n.jsx)(Ft.Ay,{}):(0,w.__)("No results")})})]})}var hn=i("../../../node_modules/.pnpm/@wordpress+compose@7.11.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js");const{Menu:gn}=rt(it.j);function Gt(t){return`${t}-item-wrapper`}function xn(t,e){return`${t}-primary-action-${e}`}function Xt(t){return`${t}-dropdown`}function bn({idPrefix:t,primaryAction:e,item:o}){const s=(0,bt.A)(),[a,d]=(0,l.useState)(!1),r=xn(t,e.id),u=typeof e.label=="string"?e.label:e.label([o]);return"RenderModal"in e?(0,n.jsx)("div",{role:"gridcell",children:(0,n.jsx)(me.e.Item,{id:r,render:(0,n.jsx)(G.Ay,{label:u,icon:e.icon,isDestructive:e.isDestructive,size:"small",onClick:()=>d(!0)}),children:a&&(0,n.jsx)(cs,{action:e,items:[o],closeModal:()=>d(!1)})})},e.id):(0,n.jsx)("div",{role:"gridcell",children:(0,n.jsx)(me.e.Item,{id:r,render:(0,n.jsx)(G.Ay,{label:u,icon:e.icon,isDestructive:e.isDestructive,size:"small",onClick:()=>{e.callback([o],{registry:s})}})})},e.id)}function jn({actions:t,idPrefix:e,isSelected:o,item:s,mediaField:a,onSelect:d,primaryField:r,visibleFields:u,onDropdownTriggerKeyDown:m}){const c=(0,l.useRef)(null),_=`${e}-label`,b=`${e}-description`,[h,P]=(0,l.useState)(!1),E=({type:T})=>{P(T==="mouseenter")};(0,l.useEffect)(()=>{var T;o&&((T=c.current)==null||T.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"}))},[o]);const{primaryAction:C,eligibleActions:D}=(0,l.useMemo)(()=>{const T=t.filter(B=>!B.isEligible||B.isEligible(s)),z=T.filter(B=>B.isPrimary&&!!B.icon);return{primaryAction:z==null?void 0:z[0],eligibleActions:T}},[t,s]),I=a!=null&&a.render?(0,n.jsx)("div",{className:"dataviews-view-list__media-wrapper",children:(0,n.jsx)(a.render,{item:s})}):null,S=r!=null&&r.render?(0,n.jsx)(r.render,{item:s}):null,te=(D==null?void 0:D.length)>0&&(0,n.jsxs)(p.A,{spacing:3,className:"dataviews-view-list__item-actions",children:[C&&(0,n.jsx)(bn,{idPrefix:e,primaryAction:C,item:s}),(0,n.jsx)("div",{role:"gridcell",children:(0,n.jsx)(gn,{trigger:(0,n.jsx)(me.e.Item,{id:Xt(e),render:(0,n.jsx)(G.Ay,{size:"small",icon:as.A,label:(0,w.__)("Actions"),accessibleWhenDisabled:!0,disabled:!t.length,onKeyDown:m})}),placement:"bottom-end",children:(0,n.jsx)(us,{actions:D,item:s})})})]});return(0,n.jsx)(me.e.Row,{ref:c,render:(0,n.jsx)("li",{}),role:"row",className:(0,H.A)({"is-selected":o,"is-hovered":h}),onMouseEnter:E,onMouseLeave:E,children:(0,n.jsxs)(p.A,{className:"dataviews-view-list__item-wrapper",spacing:0,children:[(0,n.jsx)("div",{role:"gridcell",children:(0,n.jsx)(me.e.Item,{id:Gt(e),"aria-pressed":o,"aria-labelledby":_,"aria-describedby":b,className:"dataviews-view-list__item",onClick:()=>d(s)})}),(0,n.jsxs)(p.A,{spacing:3,justify:"start",alignment:"flex-start",children:[I,(0,n.jsxs)(be.A,{spacing:1,className:"dataviews-view-list__field-wrapper",children:[(0,n.jsxs)(p.A,{spacing:0,children:[(0,n.jsx)("div",{className:"dataviews-view-list__primary-field",id:_,children:S}),te]}),(0,n.jsx)("div",{className:"dataviews-view-list__fields",id:b,children:u.map(T=>(0,n.jsxs)("div",{className:"dataviews-view-list__field",children:[(0,n.jsx)(Be.A,{as:"span",className:"dataviews-view-list__field-label",children:T.label}),(0,n.jsx)("span",{className:"dataviews-view-list__field-value",children:(0,n.jsx)(T.render,{item:s})})]},T.id))})]})]})]})})}function js(t){const{actions:e,data:o,fields:s,getItemId:a,isLoading:d,onChangeSelection:r,selection:u,view:m}=t,c=(0,ye.A)(js,"view-list"),_=o==null?void 0:o.findLast(O=>u.includes(a(O))),b=s.find(O=>{var oe;return O.id===((oe=m.layout)==null?void 0:oe.mediaField)}),h=s.find(O=>{var oe;return O.id===((oe=m.layout)==null?void 0:oe.primaryField)}),P=m.fields||s.map(O=>O.id),E=s.filter(O=>{var oe,ue;return P.includes(O.id)&&![(oe=m.layout)==null?void 0:oe.primaryField,(ue=m.layout)==null?void 0:ue.mediaField].includes(O.id)}),C=O=>r([a(O)]),D=(0,l.useCallback)(O=>`${c}-${a(O)}`,[c,a]),I=(0,l.useCallback)((O,oe)=>oe.startsWith(D(O)),[D]),[S,te]=(0,l.useState)(void 0);(0,l.useEffect)(()=>{_&&te(Gt(D(_)))},[_,D]);const T=o.findIndex(O=>I(O,S!=null?S:"")),z=(0,hn.A)(T),B=T!==-1,X=(0,l.useCallback)((O,oe)=>{var ve;const ue=Math.min(o.length-1,Math.max(0,O));if(!o[ue])return;const R=D(o[ue]),pe=oe(R);te(pe),(ve=document.getElementById(pe))==null||ve.focus()},[o,D]);(0,l.useEffect)(()=>{!B&&(z!==void 0&&z!==-1)&&X(z,Gt)},[B,X,z]);const U=(0,l.useCallback)(O=>{O.key==="ArrowDown"&&(O.preventDefault(),X(T+1,Xt)),O.key==="ArrowUp"&&(O.preventDefault(),X(T-1,Xt))},[X,T]),ae=o==null?void 0:o.length;return ae?(0,n.jsx)(me.e,{id:c,render:(0,n.jsx)("ul",{}),className:"dataviews-view-list",role:"grid",activeId:S,setActiveId:te,children:o.map(O=>{const oe=D(O);return(0,n.jsx)(jn,{idPrefix:oe,actions:e,item:O,isSelected:O===_,onSelect:C,mediaField:b,primaryField:h,visibleFields:E,onDropdownTriggerKeyDown:U},oe)})}):(0,n.jsx)("div",{className:(0,H.A)({"dataviews-loading":d,"dataviews-no-results":!ae&&!d}),children:!ae&&(0,n.jsx)("p",{children:d?(0,n.jsx)(Ft.Ay,{}):(0,w.__)("No results")})})}const Yt=[{type:f.Ad,label:(0,w.__)("Table"),component:_n,icon:Js.A},{type:f.Ul,label:(0,w.__)("Grid"),component:fn,icon:Zs.A},{type:f.mA,label:(0,w.__)("List"),component:js,icon:(0,w.V8)()?Qs.A:qs.A}];function yn(t){var o,s,a,d,r,u,m;if(t.type==="table"){var e;return[(o=t.layout)==null?void 0:o.primaryField].concat((e=(a=(s=t.layout)==null?void 0:s.combinedFields)==null?void 0:a.flatMap(c=>c.children))!==null&&e!==void 0?e:[]).filter(c=>!!c)}return t.type==="grid"?[(d=t.layout)==null?void 0:d.primaryField,(r=t.layout)==null?void 0:r.mediaField].filter(c=>!!c):t.type==="list"?[(u=t.layout)==null?void 0:u.primaryField,(m=t.layout)==null?void 0:m.mediaField].filter(c=>!!c):[]}function ys(t){var o;const e=[];return t.type===f.Ad&&((o=t.layout)!=null&&o.combinedFields)&&t.layout.combinedFields.forEach(s=>{e.push(...s.children)}),e}function tt(t,e){var a;const o=ys(t);if(t.fields)return t.fields.filter(d=>!o.includes(d));const s=[];return t.type===f.Ad&&((a=t.layout)!=null&&a.combinedFields)&&s.push(...t.layout.combinedFields.map(({id:d})=>d)),s.push(...e.filter(({id:d})=>!o.includes(d)).map(({id:d})=>d)),s}function An(t,e){var s,a,d,r;const o=[...ys(t),...tt(t,e)];return t.type===f.Ul&&((s=t.layout)!=null&&s.mediaField)&&o.push((a=t.layout)==null?void 0:a.mediaField),t.type===f.mA&&((d=t.layout)!=null&&d.mediaField)&&o.push((r=t.layout)==null?void 0:r.mediaField),e.filter(({id:u,enableHiding:m})=>!o.includes(u)&&m).map(({id:u})=>u)}function En(){var h;const{actions:t=[],data:e,fields:o,getItemId:s,isLoading:a,view:d,onChangeView:r,selection:u,onChangeSelection:m,setOpenedFilter:c,density:_}=(0,l.useContext)(Y),b=(h=Yt.find(P=>P.type===d.type))==null?void 0:h.component;return(0,n.jsx)(b,{actions:t,data:e,fields:o,getItemId:s,isLoading:a,onChangeView:r,onChangeSelection:m,selection:u,setOpenedFilter:c,view:d,density:_})}var As=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/next.js"),Es=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/previous.js");function Cn(){var t;const{view:e,onChangeView:o,paginationInfo:{totalItems:s=0,totalPages:a}}=(0,l.useContext)(Y);if(!s||!a)return null;const d=(t=e.page)!==null&&t!==void 0?t:1,r=Array.from(Array(a)).map((u,m)=>{const c=m+1;return{value:c.toString(),label:c.toString(),"aria-label":d===c?(0,w.nv)((0,w.__)("Page %1$s of %2$s"),d,a):c.toString()}});return!!s&&a!==1&&(0,n.jsxs)(p.A,{expanded:!1,className:"dataviews-pagination",justify:"end",spacing:6,children:[(0,n.jsx)(p.A,{justify:"flex-start",expanded:!1,spacing:1,className:"dataviews-pagination__page-select",children:(0,k.A)((0,w.nv)((0,w._x)("<div>Page</div>%1$s<div>of %2$s</div>","paging"),"<CurrentPage />",a),{div:(0,n.jsx)("div",{"aria-hidden":!0}),CurrentPage:(0,n.jsx)(je.A,{"aria-label":(0,w.__)("Current page"),value:d.toString(),options:r,onChange:u=>{o({...e,page:+u})},size:"small",__nextHasNoMarginBottom:!0,variant:"minimal"})})}),(0,n.jsxs)(p.A,{expanded:!1,spacing:1,children:[(0,n.jsx)(G.Ay,{onClick:()=>o({...e,page:d-1}),disabled:d===1,accessibleWhenDisabled:!0,label:(0,w.__)("Previous page"),icon:(0,w.V8)()?As.A:Es.A,showTooltip:!0,size:"compact",tooltipPosition:"top"}),(0,n.jsx)(G.Ay,{onClick:()=>o({...e,page:d+1}),disabled:d>=a,accessibleWhenDisabled:!0,label:(0,w.__)("Next page"),icon:(0,w.V8)()?Es.A:As.A,showTooltip:!0,size:"compact",tooltipPosition:"top"})]})]})}const Pn=(0,l.memo)(Cn),On=[];function Mn(){const{view:t,paginationInfo:{totalItems:e=0,totalPages:o},data:s,actions:a=On}=(0,l.useContext)(Y),d=vs(a,s)&&[f.Ad,f.Ul].includes(t.type);return!e||!o||o<=1&&!d?null:!!e&&(0,n.jsxs)(p.A,{expanded:!1,justify:"end",className:"dataviews-footer",children:[d&&(0,n.jsx)(on,{}),(0,n.jsx)(Pn,{})]})}var Dn=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/search-control/index.js"),In=i("../../../node_modules/.pnpm/@wordpress+compose@7.11.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounced-input/index.js");const Tn=(0,l.memo)(function({label:e}){const{view:o,onChangeView:s}=(0,l.useContext)(Y),[a,d,r]=(0,In.A)(o.search);(0,l.useEffect)(()=>{var _;d((_=o.search)!==null&&_!==void 0?_:"")},[o.search,d]);const u=(0,l.useRef)(s),m=(0,l.useRef)(o);(0,l.useEffect)(()=>{u.current=s,m.current=o},[s,o]),(0,l.useEffect)(()=>{var _;r!==((_=m.current)==null?void 0:_.search)&&u.current({...m.current,page:1,search:r})},[r]);const c=e||(0,w.__)("Search");return(0,n.jsx)(Dn.A,{className:"dataviews-search",__nextHasNoMarginBottom:!0,onChange:d,value:a,label:c,placeholder:c,size:"compact"})});var Cs=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js"),Sn=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js"),Ln=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js"),Rn=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item/component.js"),Ps=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item-group/component.js"),kn=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),Vn=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/heading/component.js"),Bn=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),Nn=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/dropdown-content-wrapper.js"),zn=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),Un=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),Wn=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js"),Kn=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cog.js"),Os=i("../../../node_modules/.pnpm/@wordpress+warning@3.11.0/node_modules/@wordpress/warning/build-module/index.js"),Fn=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),at=i("../../../node_modules/.pnpm/@wordpress+compose@7.11.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js");const Ms={xhuge:{min:3,max:6,default:5},huge:{min:2,max:4,default:4},xlarge:{min:2,max:3,default:3},large:{min:1,max:2,default:2},mobile:{min:1,max:2,default:2}};function Hn(){const t=(0,at.A)("xhuge",">="),e=(0,at.A)("huge",">="),o=(0,at.A)("xlarge",">="),s=(0,at.A)("large",">="),a=(0,at.A)("mobile",">=");return t?"xhuge":e?"huge":o?"xlarge":s?"large":a?"mobile":null}function $n({density:t,setDensity:e}){const o=Hn();(0,l.useEffect)(()=>{e(r=>{if(!o||!r)return 0;const u=Ms[o];return r<u.min?u.min:r>u.max?u.max:r})},[e,o]);const s=Ms[o||"mobile"],a=t||s.default,d=(0,l.useMemo)(()=>Array.from({length:s.max-s.min+1},(r,u)=>({value:s.min+u})),[s]);return o?(0,n.jsx)(Fn.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,showTooltip:!1,label:(0,w.__)("Preview size"),value:s.max+s.min-a,marks:d,min:s.min,max:s.max,withInputField:!1,onChange:(r=0)=>{e(s.max+s.min-r)},step:1}):null}const{Menu:Jt}=rt(it.j),Gn={placement:"bottom-end",offset:9};function Xn({defaultLayouts:t={list:{},grid:{},table:{}}}){const{view:e,onChangeView:o}=(0,l.useContext)(Y),s=Object.keys(t);if(s.length<=1)return null;const a=Yt.find(d=>e.type===d.type);return(0,n.jsx)(Jt,{trigger:(0,n.jsx)(G.Ay,{size:"compact",icon:a==null?void 0:a.icon,label:(0,w.__)("Layout")}),children:s.map(d=>{const r=Yt.find(u=>u.type===d);return r?(0,n.jsx)(Jt.RadioItem,{value:d,name:"view-actions-available-view",checked:d===e.type,hideOnClick:!0,onChange:u=>{switch(u.target.value){case"list":case"grid":case"table":return o({...e,type:u.target.value,...t[u.target.value]})}globalThis.SCRIPT_DEBUG===!0&&(0,Os.A)("Invalid dataview")},children:(0,n.jsx)(Jt.ItemLabel,{children:r.label})},d):null})})}function Yn(){var a;const{view:t,fields:e,onChangeView:o}=(0,l.useContext)(Y),s=(0,l.useMemo)(()=>e.filter(r=>r.enableSorting!==!1).map(r=>({label:r.label,value:r.id})),[e]);return(0,n.jsx)(je.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,w.__)("Sort by"),value:(a=t.sort)==null?void 0:a.field,options:s,onChange:d=>{var r;o({...t,sort:{direction:((r=t==null?void 0:t.sort)==null?void 0:r.direction)||"desc",field:d}})}})}function Jn(){var d,r;const{view:t,fields:e,onChangeView:o}=(0,l.useContext)(Y);if(e.filter(u=>u.enableSorting!==!1).length===0)return null;let a=(d=t.sort)==null?void 0:d.direction;return!a&&((r=t.sort)!=null&&r.field)&&(a="desc"),(0,n.jsx)(Cs.A,{className:"dataviews-view-config__sort-direction",__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,w.__)("Order"),value:a,onChange:u=>{var m,c;if(u==="asc"||u==="desc"){o({...t,sort:{direction:u,field:((m=t.sort)==null?void 0:m.field)||((c=e.find(_=>_.enableSorting!==!1))==null?void 0:c.id)||""}});return}globalThis.SCRIPT_DEBUG===!0&&(0,Os.A)("Invalid direction")},children:f.GJ.map(u=>(0,n.jsx)(Sn.A,{value:u,icon:f.ls[u],label:f.CL[u]},u))})}const Zn=[10,20,50,100];function Qn(){var o;const{view:t,onChangeView:e}=(0,l.useContext)(Y);return(0,n.jsx)(Cs.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,w.__)("Items per page"),value:t.perPage||10,disabled:!((o=t==null?void 0:t.sort)!=null&&o.field),onChange:s=>{const a=typeof s=="number"||s===void 0?s:parseInt(s,10);e({...t,perPage:a,page:1})},children:Zn.map(s=>(0,n.jsx)(Ln.A,{value:s,label:s.toString()},s))})}function Ds({field:{id:t,label:e,index:o,isVisible:s,isHidable:a},fields:d,view:r,onChangeView:u}){const m=tt(r,d);return(0,n.jsx)(Rn.A,{children:(0,n.jsxs)(p.A,{expanded:!0,className:`dataviews-field-control__field dataviews-field-control__field-${t}`,children:[(0,n.jsx)("span",{children:e}),(0,n.jsxs)(p.A,{justify:"flex-end",expanded:!1,className:"dataviews-field-control__actions",children:[r.type===f.Ad&&s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(G.Ay,{disabled:o<1,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{var c;u({...r,fields:[...(c=m.slice(0,o-1))!==null&&c!==void 0?c:[],t,m[o-1],...m.slice(o+1)]})},icon:zn.A,label:(0,w.nv)((0,w.__)("Move %s up"),e)}),(0,n.jsx)(G.Ay,{disabled:o>=m.length-1,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{var c;u({...r,fields:[...(c=m.slice(0,o))!==null&&c!==void 0?c:[],m[o+1],t,...m.slice(o+2)]})},icon:Un.A,label:(0,w.nv)((0,w.__)("Move %s down"),e)})," "]}),(0,n.jsx)(G.Ay,{className:"dataviews-field-control__field-visibility-button",disabled:!a,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{u({...r,fields:s?m.filter(c=>c!==t):[...m,t]}),setTimeout(()=>{const c=document.querySelector(`.dataviews-field-control__field-${t} .dataviews-field-control__field-visibility-button`);c instanceof HTMLElement&&c.focus()},50)},icon:s?xs.A:Wn.A,label:s?(0,w.nv)((0,w._x)("Hide %s","field"),e):(0,w.nv)((0,w._x)("Show %s","field"),e)})]})]})},t)}function qn(){var m;const{view:t,fields:e,onChangeView:o}=(0,l.useContext)(Y),s=(0,l.useMemo)(()=>tt(t,e),[t,e]),a=(0,l.useMemo)(()=>An(t,e),[t,e]),d=(0,l.useMemo)(()=>yn(t),[t]),r=e.filter(({id:c})=>s.includes(c)).map(({id:c,label:_,enableHiding:b})=>({id:c,label:_,index:s.indexOf(c),isVisible:!0,isHidable:d.includes(c)?!1:b}));t.type===f.Ad&&((m=t.layout)!=null&&m.combinedFields)&&t.layout.combinedFields.forEach(({id:c,label:_})=>{r.push({id:c,label:_,index:s.indexOf(c),isVisible:!0,isHidable:d.includes(c)})}),r.sort((c,_)=>c.index-_.index);const u=e.filter(({id:c})=>a.includes(c)).map(({id:c,label:_,enableHiding:b},h)=>({id:c,label:_,index:h,isVisible:!1,isHidable:b}));return!(r!=null&&r.length)&&!(u!=null&&u.length)?null:(0,n.jsxs)(be.A,{spacing:6,className:"dataviews-field-control",children:[!!(r!=null&&r.length)&&(0,n.jsx)(Ps.A,{isBordered:!0,isSeparated:!0,children:r.map(c=>(0,n.jsx)(Ds,{field:c,fields:e,view:t,onChangeView:o},c.id))}),!!(u!=null&&u.length)&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(be.A,{spacing:4,children:[(0,n.jsx)(kn.Ay.VisualLabel,{style:{margin:0},children:(0,w.__)("Hidden")}),(0,n.jsx)(Ps.A,{isBordered:!0,isSeparated:!0,children:u.map(c=>(0,n.jsx)(Ds,{field:c,fields:e,view:t,onChangeView:o},c.id))})]})})]})}function Is({title:t,description:e,children:o}){return(0,n.jsxs)($t.A,{columns:12,className:"dataviews-settings-section",gap:4,children:[(0,n.jsxs)("div",{className:"dataviews-settings-section__sidebar",children:[(0,n.jsx)(Vn.A,{level:2,className:"dataviews-settings-section__title",children:t}),e&&(0,n.jsx)(Bn.A,{variant:"muted",className:"dataviews-settings-section__description",children:e})]}),(0,n.jsx)($t.A,{columns:8,gap:4,className:"dataviews-settings-section__content",children:o})]})}function eo({density:t,setDensity:e}){const{view:o}=(0,l.useContext)(Y),s=(0,ye.A)(Ts,"dataviews-view-config-dropdown");return(0,n.jsx)($.A,{popoverProps:{...Gn,id:s},renderToggle:({onToggle:a,isOpen:d})=>(0,n.jsx)(G.Ay,{size:"compact",icon:Kn.A,label:(0,w._x)("View options","View is used as a noun"),onClick:a,"aria-expanded":d?"true":"false","aria-controls":s}),renderContent:()=>(0,n.jsx)(Nn.A,{paddingSize:"medium",children:(0,n.jsxs)(be.A,{className:"dataviews-view-config",spacing:6,children:[(0,n.jsxs)(Is,{title:(0,w.__)("Appearance"),children:[(0,n.jsxs)(p.A,{expanded:!0,className:"is-divided-in-two",children:[(0,n.jsx)(Yn,{}),(0,n.jsx)(Jn,{})]}),o.type===f.Ul&&(0,n.jsx)($n,{density:t,setDensity:e}),(0,n.jsx)(Qn,{})]}),(0,n.jsx)(Is,{title:(0,w.__)("Properties"),children:(0,n.jsx)(qn,{})})]})})})}function Ts({density:t,setDensity:e,defaultLayouts:o={list:{},grid:{},table:{}}}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Xn,{defaultLayouts:o}),(0,n.jsx)(eo,{density:t,setDensity:e})]})}const to=(0,l.memo)(Ts);var so=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.7.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js");const no=t=>t.id;function oo({view:t,onChangeView:e,fields:o,search:s=!0,searchLabel:a=void 0,actions:d=[],data:r,getItemId:u=no,isLoading:m=!1,paginationInfo:c,defaultLayouts:_,selection:b,onChangeSelection:h,header:P}){const[E,C]=(0,l.useState)([]),[D,I]=(0,l.useState)(0),S=b===void 0||h===void 0,te=S?E:b,[T,z]=(0,l.useState)(null);function B(ue){const R=typeof ue=="function"?ue(te):ue;S&&C(R),h&&h(R)}const X=(0,l.useMemo)(()=>(0,so.t)(o),[o]),U=(0,l.useMemo)(()=>te.filter(ue=>r.some(R=>u(R)===ue)),[te,r,u]),ae=os(X,t),[O,oe]=(0,l.useState)(()=>(ae||[]).some(ue=>ue.isPrimary));return(0,n.jsx)(Y.Provider,{value:{view:t,onChangeView:e,fields:X,actions:d,data:r,isLoading:m,paginationInfo:c,selection:U,onChangeSelection:B,openedFilter:T,setOpenedFilter:z,getItemId:u,density:D},children:(0,n.jsxs)("div",{className:"dataviews-wrapper",children:[(0,n.jsxs)(p.A,{alignment:"top",justify:"space-between",className:"dataviews__view-actions",spacing:1,children:[(0,n.jsxs)(p.A,{justify:"start",expanded:!1,className:"dataviews__search",children:[s&&(0,n.jsx)(Tn,{label:a}),(0,n.jsx)(Gs,{filters:ae,view:t,onChangeView:e,setOpenedFilter:z,setIsShowingFilter:oe,isShowingFilter:O})]}),(0,n.jsxs)(p.A,{spacing:1,expanded:!1,style:{flexShrink:0},children:[(0,n.jsx)(to,{defaultLayouts:_,density:D,setDensity:I}),P]})]}),O&&(0,n.jsx)(Ys,{}),(0,n.jsx)(En,{}),(0,n.jsx)(Mn,{})]})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.7.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/constants.js":(W,x,i)=>{i.d(x,{Ad:()=>Z,CD:()=>Ie,CL:()=>be,GJ:()=>$,LW:()=>J,UX:()=>H,Ul:()=>V,Vw:()=>le,_k:()=>Y,gm:()=>j,ld:()=>G,ls:()=>k,mA:()=>q,vI:()=>we,we:()=>je,y5:()=>w});var p=i("../../../node_modules/.pnpm/@wordpress+i18n@5.11.0/node_modules/@wordpress/i18n/build-module/index.js"),l=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),f=i("../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-down.js");const j="is",Y="isNot",G="isAny",le="isNone",w="isAll",H="isNotAll",Ie=[j,Y,G,le,w,H],je={[j]:{key:"is-filter",label:(0,p.__)("Is")},[Y]:{key:"is-not-filter",label:(0,p.__)("Is not")},[G]:{key:"is-any-filter",label:(0,p.__)("Is any")},[le]:{key:"is-none-filter",label:(0,p.__)("Is none")},[w]:{key:"is-all-filter",label:(0,p.__)("Is all")},[H]:{key:"is-not-all-filter",label:(0,p.__)("Is not all")}},$=["asc","desc"],we={asc:"\u2191",desc:"\u2193"},J={asc:"ascending",desc:"descending"},be={asc:(0,p.__)("Sort ascending"),desc:(0,p.__)("Sort descending")},k={asc:l.A,desc:f.A},Z="table",V="grid",q="list"},"../../../node_modules/.pnpm/@wordpress+dataviews@4.7.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/filter-and-sort-data-view.js":(W,x,i)=>{i.d(x,{P:()=>le});var p=i("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),l=i.n(p),f=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.7.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/constants.js"),j=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.7.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js");function Y(w=""){return l()(w.trim().toLowerCase())}const G=[];function le(w,H,Ie){var be;if(!w)return{data:G,paginationInfo:{totalItems:0,totalPages:0}};const je=(0,j.t)(Ie);let $=[...w];if(H.search){const k=Y(H.search);$=$.filter(Z=>je.filter(V=>V.enableGlobalSearch).map(V=>Y(V.getValue({item:Z}))).some(V=>V.includes(k)))}if(H.filters&&((be=H.filters)==null?void 0:be.length)>0&&H.filters.forEach(k=>{var V,q,Oe,Ve;const Z=je.find(Q=>Q.id===k.field);Z&&(k.operator===f.ld&&((V=k==null?void 0:k.value)==null?void 0:V.length)>0?$=$.filter(Q=>{const ie=Z.getValue({item:Q});return Array.isArray(ie)?k.value.some(fe=>ie.includes(fe)):typeof ie=="string"?k.value.includes(ie):!1}):k.operator===f.Vw&&((q=k==null?void 0:k.value)==null?void 0:q.length)>0?$=$.filter(Q=>{const ie=Z.getValue({item:Q});return Array.isArray(ie)?!k.value.some(fe=>ie.includes(fe)):typeof ie=="string"?!k.value.includes(ie):!1}):k.operator===f.y5&&((Oe=k==null?void 0:k.value)==null?void 0:Oe.length)>0?$=$.filter(Q=>k.value.every(ie=>{var fe;return(fe=Z.getValue({item:Q}))==null?void 0:fe.includes(ie)})):k.operator===f.UX&&((Ve=k==null?void 0:k.value)==null?void 0:Ve.length)>0?$=$.filter(Q=>k.value.every(ie=>{var fe;return!((fe=Z.getValue({item:Q}))!=null&&fe.includes(ie))})):k.operator===f.gm?$=$.filter(Q=>k.value===Z.getValue({item:Q})):k.operator===f._k&&($=$.filter(Q=>k.value!==Z.getValue({item:Q}))))}),H.sort){const k=H.sort.field,Z=je.find(V=>V.id===k);Z&&$.sort((V,q)=>{var Ve;var Oe;return Z.sort(V,q,(Oe=(Ve=H.sort)==null?void 0:Ve.direction)!==null&&Oe!==void 0?Oe:"desc")})}let we=$.length,J=1;if(H.page!==void 0&&H.perPage!==void 0){const k=(H.page-1)*H.perPage;we=($==null?void 0:$.length)||0,J=Math.ceil(we/H.perPage),$=$==null?void 0:$.slice(k,k+H.perPage)}return{data:$,paginationInfo:{totalItems:we,totalPages:J}}}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.7.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js":(W,x,i)=>{i.d(x,{t:()=>ft});function p(g,v,y){return y==="asc"?g-v:v-g}function l(g,v){return!(g===""||!Number.isInteger(Number(g))||v!=null&&v.elements&&!(v==null?void 0:v.elements.map(M=>M.value)).includes(Number(g)))}const f={sort:p,isValid:l,Edit:"integer"};function j(g,v,y){return y==="asc"?g.localeCompare(v):v.localeCompare(g)}function Y(g,v){var y;return!(v!=null&&v.elements&&!((y=v==null?void 0:v.elements)==null?void 0:y.map(L=>L.value)).includes(g))}const G={sort:j,isValid:Y,Edit:"text"};function le(g,v,y){const M=new Date(g).getTime(),L=new Date(v).getTime();return y==="asc"?M-L:L-M}function w(g,v){return!(v!=null&&v.elements&&!(v==null?void 0:v.elements.map(M=>M.value)).includes(g))}const H={sort:le,isValid:w,Edit:"datetime"};function Ie(g){return g==="integer"?f:g==="text"?G:g==="datetime"?H:{sort:(v,y,M)=>typeof v=="number"&&typeof y=="number"?M==="asc"?v-y:y-v:M==="asc"?v.localeCompare(y):y.localeCompare(v),isValid:(v,y)=>{var M;return!(y!=null&&y.elements&&!((M=y==null?void 0:y.elements)==null?void 0:M.map(F=>F.value)).includes(v))},Edit:()=>null}}var je=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),$=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),we=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMinute.mjs"),J=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.mjs"),be=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/set.mjs"),k=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs"),Z=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),V=i("../../../node_modules/.pnpm/@wordpress+i18n@5.11.0/node_modules/@wordpress/i18n/build-module/index.js"),q=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js"),Oe=i("../../../node_modules/.pnpm/@wordpress+date@5.11.0/node_modules/@wordpress/date/build-module/index.js"),Ve=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),Q=i("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.3_@types+react@18.3.12_react@18.3.1__@types+react@18.3.12_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),ie=i("../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.12_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),fe=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),Se=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js"),Me=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),Qe=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js"),$e=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/number-control/index.js");function Qt(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const Ue=(0,Q.A)("div",{target:"evcr2319"})("box-sizing:border-box;font-size:",fe.A.fontSize,";"),K=(0,Q.A)("fieldset",{target:"evcr2318"})("border:0;margin:0 0 ",(0,Me.x)(2*2)," 0;padding:0;&:last-child{margin-bottom:0;}"),ee=(0,Q.A)("div",{target:"evcr2317"})({name:"pd0mhc",styles:"direction:ltr;display:flex"}),qe=(0,ie.AH)("&&& ",Qe.pd,"{padding-left:",(0,Me.x)(2),";padding-right:",(0,Me.x)(2),";text-align:center;}",""),At=(0,Q.A)($e.A,{target:"evcr2316"})(qe," width:",(0,Me.x)(9),";&&& ",Qe.pd,"{padding-right:0;}&&& ",Qe.Hr,"{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;}"),_e=(0,Q.A)("span",{target:"evcr2315"})("border-top:",fe.A.borderWidth," solid ",Se.l.gray[700],";border-bottom:",fe.A.borderWidth," solid ",Se.l.gray[700],";font-size:",fe.A.fontSize,`;line-height:calc(
		`,fe.A.controlHeight," - ",fe.A.borderWidth,` * 2
	);display:inline-block;`),de=(0,Q.A)($e.A,{target:"evcr2314"})(qe," width:",(0,Me.x)(9),";&&& ",Qe.pd,"{padding-left:0;}&&& ",Qe.Hr,"{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0;}"),lt=(0,Q.A)("div",{target:"evcr2313"})({name:"1ff36h2",styles:"flex-grow:1"}),De=(0,Q.A)($e.A,{target:"evcr2312"})(qe," width:",(0,Me.x)(9),";"),Et=(0,Q.A)($e.A,{target:"evcr2311"})(qe," width:",(0,Me.x)(14),";"),dt=(0,Q.A)("div",{target:"evcr2310"})({name:"ebu3jh",styles:"text-decoration:underline dotted"});var N=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Ce=()=>{const{timezone:g}=(0,Oe.mt)(),v=-1*(new Date().getTimezoneOffset()/60);if(Number(g.offset)===v)return null;const y=Number(g.offset)>=0?"+":"",M=g.abbr!==""&&isNaN(Number(g.abbr))?g.abbr:`UTC${y}${g.offsetFormatted}`,L=g.string.replace("_"," "),F=g.string==="UTC"?(0,V.__)("Coordinated Universal Time"):`(${M}) ${L}`;return L.trim().length===0?(0,N.jsx)(dt,{className:"components-datetime__timezone",children:M}):(0,N.jsx)(Ve.Ay,{placement:"top",text:F,children:(0,N.jsx)(dt,{className:"components-datetime__timezone",children:M})})};var n=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),Ct=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spacer/component.js"),Pt=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs"),st=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js");function ct(g){return typeof g=="string"?new Date(g):(0,Pt.a)(g)}function ut(g,v){return v?(g%12+12)%24:g%12}function Ot(g){return g%12||12}function Le(g){return(v,y)=>{const M={...v};return(y.type===st.cJ||y.type===st.wX||y.type===st.r7)&&M.value!==void 0&&(M.value=M.value.toString().padStart(g,"0")),M}}function Ge(g){var M,L;var v;const y=(v=(L=(M=g.target)==null?void 0:M.ownerDocument.defaultView)==null?void 0:L.HTMLInputElement)!==null&&v!==void 0?v:HTMLInputElement;return g.target instanceof y?g.target.validity.valid:!1}const Xe="yyyy-MM-dd'T'HH:mm:ss";var Mt=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),mt=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),pt=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js"),_t=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js");function vt({value:g,defaultValue:v,is12Hour:y,label:M,minutesProps:L,onChange:F}){const[ne={hours:new Date().getHours(),minutes:new Date().getMinutes()},re]=(0,mt.j)({value:g,onChange:F,defaultValue:v}),he=We(ne.hours),ye=Ot(ne.hours),me=ce=>(Ae,{event:ke})=>{if(!Ge(ke))return;const Ke=Number(Ae);re({...ne,[ce]:ce==="hours"&&y?ut(Ke,he==="PM"):Ke})},Be=ce=>()=>{he!==ce&&re({...ne,hours:ut(ye,ce==="PM")})};function We(ce){return ce<12?"AM":"PM"}const Te=M?K:Z.Fragment;return(0,N.jsxs)(Te,{children:[M&&(0,N.jsx)(je.Ay.VisualLabel,{as:"legend",children:M}),(0,N.jsxs)(n.A,{alignment:"left",expanded:!1,children:[(0,N.jsxs)(ee,{className:"components-datetime__time-field components-datetime__time-field-time",children:[(0,N.jsx)(At,{className:"components-datetime__time-field-hours-input",label:(0,V.__)("Hours"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:String(y?ye:ne.hours).padStart(2,"0"),step:1,min:y?1:0,max:y?12:23,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:me("hours"),__unstableStateReducer:Le(2)}),(0,N.jsx)(_e,{className:"components-datetime__time-separator","aria-hidden":"true",children:":"}),(0,N.jsx)(de,{className:(0,Mt.A)("components-datetime__time-field-minutes-input",L==null?void 0:L.className),label:(0,V.__)("Minutes"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:String(ne.minutes).padStart(2,"0"),step:1,min:0,max:59,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:(...ce)=>{var Ae;me("minutes")(...ce),(Ae=L==null?void 0:L.onChange)==null||Ae.call(L,...ce)},__unstableStateReducer:Le(2),...L})]}),y&&(0,N.jsxs)(pt.A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:(0,V.__)("Select AM or PM"),hideLabelFromVision:!0,value:he,onChange:ce=>{Be(ce)()},children:[(0,N.jsx)(_t.A,{value:"AM",label:(0,V.__)("AM")}),(0,N.jsx)(_t.A,{value:"PM",label:(0,V.__)("PM")})]})]})]})}const es=null,Dt=["dmy","mdy","ymd"];function nt({is12Hour:g,currentTime:v,onChange:y,dateOrder:M,hideLabelFromVision:L=!1}){const[F,ne]=(0,Z.useState)(()=>v?(0,we.c)(ct(v)):new Date);(0,Z.useEffect)(()=>{ne(v?(0,we.c)(ct(v)):new Date)},[v]);const re=[{value:"01",label:(0,V.__)("January")},{value:"02",label:(0,V.__)("February")},{value:"03",label:(0,V.__)("March")},{value:"04",label:(0,V.__)("April")},{value:"05",label:(0,V.__)("May")},{value:"06",label:(0,V.__)("June")},{value:"07",label:(0,V.__)("July")},{value:"08",label:(0,V.__)("August")},{value:"09",label:(0,V.__)("September")},{value:"10",label:(0,V.__)("October")},{value:"11",label:(0,V.__)("November")},{value:"12",label:(0,V.__)("December")}],{day:he,month:ye,year:me,minutes:Be,hours:We}=(0,Z.useMemo)(()=>({day:(0,J.GP)(F,"dd"),month:(0,J.GP)(F,"MM"),year:(0,J.GP)(F,"yyyy"),minutes:(0,J.GP)(F,"mm"),hours:(0,J.GP)(F,"HH"),am:(0,J.GP)(F,"a")}),[F]),Te=Ne=>(et,{event:Ut})=>{if(!Ge(Ut))return;const Wt=Number(et),xt=(0,be.h)(F,{[Ne]:Wt});ne(xt),y==null||y((0,J.GP)(xt,Xe))},ce=({hours:Ne,minutes:Ye})=>{const et=(0,be.h)(F,{hours:Ne,minutes:Ye});ne(et),y==null||y((0,J.GP)(et,Xe))},Ae=(0,N.jsx)(De,{className:"components-datetime__time-field components-datetime__time-field-day",label:(0,V.__)("Day"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:he,step:1,min:1,max:31,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:Te("date")},"day"),ke=(0,N.jsx)(lt,{children:(0,N.jsx)(q.A,{className:"components-datetime__time-field components-datetime__time-field-month",label:(0,V.__)("Month"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,value:ye,options:re,onChange:Ne=>{const Ye=(0,k.Z)(F,Number(Ne)-1);ne(Ye),y==null||y((0,J.GP)(Ye,Xe))}})},"month"),Ke=(0,N.jsx)(Et,{className:"components-datetime__time-field components-datetime__time-field-year",label:(0,V.__)("Year"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:me,step:1,min:1,max:9999,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:Te("year"),__unstableStateReducer:Le(4)},"year"),ht=g?"mdy":"dmy",gt=(M&&Dt.includes(M)?M:ht).split("").map(Ne=>{switch(Ne){case"d":return Ae;case"m":return ke;case"y":return Ke;default:return null}});return(0,N.jsxs)(Ue,{className:"components-datetime__time",children:[(0,N.jsxs)(K,{children:[L?(0,N.jsx)($.A,{as:"legend",children:(0,V.__)("Time")}):(0,N.jsx)(je.Ay.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,V.__)("Time")}),(0,N.jsxs)(n.A,{className:"components-datetime__time-wrapper",children:[(0,N.jsx)(vt,{value:{hours:Number(We),minutes:Number(Be)},is12Hour:g,onChange:ce}),(0,N.jsx)(Ct.A,{}),(0,N.jsx)(Ce,{})]})]}),(0,N.jsxs)(K,{children:[L?(0,N.jsx)($.A,{as:"legend",children:(0,V.__)("Date")}):(0,N.jsx)(je.Ay.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,V.__)("Date")}),(0,N.jsx)(n.A,{className:"components-datetime__time-wrapper",children:gt})]})]})}nt.TimeInput=vt,Object.assign(nt.TimeInput,{displayName:"TimePicker.TimeInput"});const It=nt;function Tt({data:g,field:v,onChange:y,hideLabelFromVision:M}){const{id:L,label:F}=v,ne=v.getValue({item:g}),re=(0,Z.useCallback)(he=>y({[L]:he}),[L,y]);return(0,N.jsxs)("fieldset",{className:"dataviews-controls__datetime",children:[!M&&(0,N.jsx)(je.Ay.VisualLabel,{as:"legend",children:F}),M&&(0,N.jsx)($.A,{as:"legend",children:F}),(0,N.jsx)(It,{currentTime:ne,onChange:re,hideLabelFromVision:!0})]})}function St({data:g,field:v,onChange:y,hideLabelFromVision:M}){var L;const{id:F,label:ne,description:re}=v,he=(L=v.getValue({item:g}))!==null&&L!==void 0?L:"",ye=(0,Z.useCallback)(me=>y({[F]:Number(me)}),[F,y]);return(0,N.jsx)($e.A,{label:ne,help:re,value:he,onChange:ye,__next40pxDefaultSize:!0,hideLabelFromVision:M})}var Lt=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js");function Rt({data:g,field:v,onChange:y,hideLabelFromVision:M}){const{id:L,label:F}=v,ne=v.getValue({item:g}),re=(0,Z.useCallback)(he=>y({[L]:he}),[L,y]);return v.elements?(0,N.jsx)(Lt.A,{label:F,onChange:re,options:v.elements,selected:ne,hideLabelFromVision:M}):null}function kt({data:g,field:v,onChange:y,hideLabelFromVision:M}){var L,F;const{id:ne,label:re}=v,he=(L=v.getValue({item:g}))!==null&&L!==void 0?L:"",ye=(0,Z.useCallback)(Be=>y({[ne]:Be}),[ne,y]),me=[{label:(0,V.__)("Select item"),value:""},...(F=v==null?void 0:v.elements)!==null&&F!==void 0?F:[]];return(0,N.jsx)(q.A,{label:re,value:he,options:me,onChange:ye,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:M})}var Vt=i("../../../node_modules/.pnpm/@wordpress+components@28.11.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js");function Bt({data:g,field:v,onChange:y,hideLabelFromVision:M}){const{id:L,label:F,placeholder:ne}=v,re=v.getValue({item:g}),he=(0,Z.useCallback)(ye=>y({[L]:ye}),[L,y]);return(0,N.jsx)(Vt.A,{label:F,placeholder:ne,value:re!=null?re:"",onChange:he,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:M})}const wt={datetime:Tt,integer:St,radio:Rt,select:kt,text:Bt};function Nt(g,v){return typeof g.Edit=="function"?g.Edit:typeof g.Edit=="string"?ot(g.Edit):g.elements?ot("select"):typeof v.Edit=="string"?ot(v.Edit):v.Edit}function ot(g){if(Object.keys(wt).includes(g))return wt[g];throw"Control "+g+" not found"}function ft(g){return g.map(v=>{var y,M,L,F;const ne=Ie(v.type),re=v.getValue||(({item:Te})=>Te[v.id]),he=(y=v.sort)!==null&&y!==void 0?y:function(ce,Ae,ke){return ne.sort(re({item:ce}),re({item:Ae}),ke)},ye=(M=v.isValid)!==null&&M!==void 0?M:function(ce,Ae){return ne.isValid(re({item:ce}),Ae)},me=Nt(v,ne),Be=({item:Te})=>{var Ae,ke;const ce=re({item:Te});return((ke=(Ae=v==null?void 0:v.elements)==null?void 0:Ae.find(Ke=>Ke.value===ce))==null?void 0:ke.label)||re({item:Te})},We=v.render||(v.elements?Be:re);return{...v,label:v.label||v.id,header:v.header||v.label||v.id,getValue:re,render:We,sort:he,isValid:ye,Edit:me,enableHiding:(L=v.enableHiding)!==null&&L!==void 0?L:!0,enableSorting:(F=v.enableSorting)!==null&&F!==void 0?F:!0}})}function ts(g,v){return g.map(y=>({...y,Edit:DataFormCombinedEdit,fields:ft(y.children.map(M=>v.find(({id:L})=>L===M)).filter(M=>!!M))}))}},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(W,x,i)=>{i.d(x,{A:()=>f});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function l({icon:j,size:Y=24,...G},le){return(0,p.cloneElement)(j,{width:Y,height:Y,...G,ref:le})}const f=(0,p.forwardRef)(l)},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-down.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/block-table.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/category.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right-small.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/code.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cog.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/color.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/funnel.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/next.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/previous.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/shield.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M20.7 12.7s0-.1-.1-.2c0-.2-.2-.4-.4-.6-.3-.5-.9-1.2-1.6-1.8-.7-.6-1.5-1.3-2.6-1.8l-.6 1.4c.9.4 1.6 1 2.1 1.5.6.6 1.1 1.2 1.4 1.6.1.2.3.4.3.5v.1l.7-.3.7-.3Zm-5.2-9.3-1.8 4c-.5-.1-1.1-.2-1.7-.2-3 0-5.2 1.4-6.6 2.7-.7.7-1.2 1.3-1.6 1.8-.2.3-.3.5-.4.6 0 0 0 .1-.1.2s0 0 .7.3l.7.3V13c0-.1.2-.3.3-.5.3-.4.7-1 1.4-1.6 1.2-1.2 3-2.3 5.5-2.3H13v.3c-.4 0-.8-.1-1.1-.1-1.9 0-3.5 1.6-3.5 3.5s.6 2.3 1.6 2.9l-2 4.4.9.4 7.6-16.2-.9-.4Zm-3 12.6c1.7-.2 3-1.7 3-3.5s-.2-1.4-.6-1.9L12.4 16Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.11.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js":(W,x,i)=>{i.d(x,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,l.jsx)(p.wA,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@4.7.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-style/style.css":(W,x,i)=>{i.d(x,{A:()=>G});var p=i("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=i.n(p),f=i("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),j=i.n(f),Y=j()(l());Y.push([W.id,`/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
:root {
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color--rgb: 0, 124, 186;
  --wp-admin-theme-color-darker-10: #006ba1;
  --wp-admin-theme-color-darker-10--rgb: 0, 107, 161;
  --wp-admin-theme-color-darker-20: #005a87;
  --wp-admin-theme-color-darker-20--rgb: 0, 90, 135;
  --wp-admin-border-width-focus: 2px;
  --wp-block-synced-color: #7a00df;
  --wp-block-synced-color--rgb: 122, 0, 223;
  --wp-bound-block-color: var(--wp-block-synced-color);
}
@media (min-resolution: 192dpi) {
  :root {
    --wp-admin-border-width-focus: 1.5px;
  }
}

.dataviews-wrapper {
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  scroll-padding-bottom: 64px;
  /* stylelint-disable-next-line property-no-unknown -- '@container' not globally permitted */
  container: dataviews-wrapper/inline-size;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 1.4;
}

.dataviews__view-actions,
.dataviews-filters__container {
  box-sizing: border-box;
  padding: 16px 48px;
  flex-shrink: 0;
  position: sticky;
  left: 0;
  transition: padding ease-out 0.1s;
}
@media (prefers-reduced-motion: reduce) {
  .dataviews__view-actions,
.dataviews-filters__container {
    transition-duration: 0s;
    transition-delay: 0s;
  }
}

.dataviews-view-list__primary-field,
.dataviews-view-grid__primary-field,
.dataviews-view-table__primary-field {
  font-size: 13px;
  font-weight: 500;
  color: #757575;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.dataviews-view-list__primary-field a,
.dataviews-view-grid__primary-field a,
.dataviews-view-table__primary-field a {
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  flex-grow: 0;
  color: #1e1e1e;
}
.dataviews-view-list__primary-field a:hover,
.dataviews-view-grid__primary-field a:hover,
.dataviews-view-table__primary-field a:hover {
  color: var(--wp-admin-theme-color);
}
.dataviews-view-list__primary-field a:focus,
.dataviews-view-grid__primary-field a:focus,
.dataviews-view-table__primary-field a:focus {
  color: var(--wp-admin-theme-color--rgb);
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color, #007cba);
  border-radius: 2px;
}
.dataviews-view-list__primary-field button.components-button.is-link,
.dataviews-view-grid__primary-field button.components-button.is-link,
.dataviews-view-table__primary-field button.components-button.is-link {
  text-decoration: none;
  font-weight: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  width: 100%;
  color: #1e1e1e;
}
.dataviews-view-list__primary-field button.components-button.is-link:hover,
.dataviews-view-grid__primary-field button.components-button.is-link:hover,
.dataviews-view-table__primary-field button.components-button.is-link:hover {
  color: var(--wp-admin-theme-color);
}

.dataviews-no-results,
.dataviews-loading {
  padding: 0 48px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: padding ease-out 0.1s;
}
@media (prefers-reduced-motion: reduce) {
  .dataviews-no-results,
.dataviews-loading {
    transition-duration: 0s;
    transition-delay: 0s;
  }
}

/* stylelint-disable-next-line scss/at-rule-no-unknown -- '@container' not globally permitted */
@container (max-width: 430px) {
  .dataviews__view-actions,
.dataviews-filters__container {
    padding: 12px 24px;
  }

  .dataviews-no-results,
.dataviews-loading {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.dataviews-bulk-actions-footer__item-count {
  color: #1e1e1e;
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
}

.dataviews-bulk-actions-footer__container {
  margin-right: auto;
  min-height: 32px;
}

.dataviews-filters__button {
  position: relative;
}

.dataviews-filters__container {
  padding-top: 0;
}

.dataviews-filters__reset-button.dataviews-filters__reset-button[aria-disabled=true], .dataviews-filters__reset-button.dataviews-filters__reset-button[aria-disabled=true]:hover {
  opacity: 0;
}
.dataviews-filters__reset-button.dataviews-filters__reset-button[aria-disabled=true]:focus {
  opacity: 1;
}

.dataviews-filters__summary-popover {
  font-size: 13px;
  line-height: 1.4;
}
.dataviews-filters__summary-popover .components-popover__content {
  width: 230px;
  border-radius: 4px;
}
.dataviews-filters__summary-popover.components-dropdown__content .components-popover__content {
  padding: 0;
}

.dataviews-filters__summary-operators-container {
  padding: 8px 8px 0;
}
.dataviews-filters__summary-operators-container:has(+ .dataviews-filters__search-widget-listbox) {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}
.dataviews-filters__summary-operators-container:empty {
  display: none;
}
.dataviews-filters__summary-operators-container .dataviews-filters__summary-operators-filter-name {
  color: #757575;
}

.dataviews-filters__summary-chip-container {
  position: relative;
  white-space: pre-wrap;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip {
  border-radius: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 4px 12px;
  min-height: 32px;
  background: #f0f0f0;
  color: #2f2f2f;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-reset {
  padding-inline-end: 28px;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:hover, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:focus-visible, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip[aria-expanded=true] {
  background: #e0e0e0;
  color: #1e1e1e;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-values {
  color: var(--wp-admin-theme-color);
  background: rgba(var(--wp-admin-theme-color--rgb), 0.04);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-values:hover, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-values[aria-expanded=true] {
  background: rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:focus-visible {
  outline: none;
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip .dataviews-filters-__summary-filter-text-name {
  font-weight: 500;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 0;
  padding: 0;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove svg {
  fill: #757575;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:hover, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:focus {
  background: #e0e0e0;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:hover svg, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:focus svg {
  fill: #1e1e1e;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove.has-values svg {
  fill: var(--wp-admin-theme-color);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove.has-values:hover {
  background: rgba(var(--wp-admin-theme-color--rgb), 0.08);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:focus-visible {
  outline: none;
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}

.dataviews-filters__search-widget-filter-combobox-list {
  max-height: 184px;
  padding: 4px;
  overflow: auto;
  border-top: 1px solid #e0e0e0;
}
.dataviews-filters__search-widget-filter-combobox-list .dataviews-filters__search-widget-filter-combobox-item-value [data-user-value] {
  font-weight: 600;
}

.dataviews-filters__search-widget-listbox {
  padding: 4px;
  overflow: auto;
}

.dataviews-filters__search-widget-listitem {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 8px 12px;
  cursor: default;
  margin-block-end: 2px;
}
.dataviews-filters__search-widget-listitem:last-child {
  margin-block-end: 0;
}
.dataviews-filters__search-widget-listitem:hover, .dataviews-filters__search-widget-listitem[data-active-item], .dataviews-filters__search-widget-listitem:focus {
  background-color: var(--wp-admin-theme-color);
  color: #fff;
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-check, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-check, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-check {
  fill: #fff;
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-description, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-description, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-description {
  color: #fff;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-check {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-description {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
}

.dataviews-filters__search-widget-filter-combobox__wrapper {
  position: relative;
  padding: 8px;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.1s linear;
  border-radius: 2px;
  border: 1px solid #949494;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
  display: block;
  padding: 0 32px 0 8px;
  background: #f0f0f0;
  border: none;
  width: 100%;
  height: 32px;
  margin-left: 0;
  margin-right: 0;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
}
@media (prefers-reduced-motion: reduce) {
  .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
    transition-duration: 0s;
    transition-delay: 0s;
  }
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
    font-size: 13px;
    /* Override core line-height. To be reviewed. */
    line-height: normal;
  }
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input:focus {
  border-color: var(--wp-admin-theme-color);
  box-shadow: 0 0 0 0.5px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-moz-placeholder {
  opacity: 1;
  color: rgba(30, 30, 30, 0.62);
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input:-ms-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
    font-size: 13px;
  }
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input:focus {
  background: #fff;
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::placeholder {
  color: #757575;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-decoration, .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-cancel-button, .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-results-button, .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
}

.dataviews-filters__container-visibility-toggle {
  position: relative;
  flex-shrink: 0;
}

.dataviews-filters-toggle__count {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background: var(--wp-admin-theme-color, #3858e9);
  height: 16px;
  min-width: 16px;
  line-height: 16px;
  padding: 0 4px;
  text-align: center;
  border-radius: 8px;
  font-size: 11px;
  outline: var(--wp-admin-border-width-focus) solid #fff;
  color: #fff;
  box-sizing: border-box;
}

.dataviews-search {
  width: -moz-fit-content;
  width: fit-content;
}

.dataviews-footer {
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 12px 48px;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
  transition: padding ease-out 0.1s;
  z-index: 2;
}
@media (prefers-reduced-motion: reduce) {
  .dataviews-footer {
    transition-duration: 0s;
    transition-delay: 0s;
  }
}

/* stylelint-disable-next-line scss/at-rule-no-unknown -- '@container' not globally permitted */
@container (max-width: 430px) {
  .dataviews-footer {
    padding: 12px 24px;
  }
}
/* stylelint-disable-next-line scss/at-rule-no-unknown -- '@container' not globally permitted */
@container (max-width: 560px) {
  .dataviews-footer {
    flex-direction: column !important;
  }
  .dataviews-footer .dataviews-bulk-actions-footer__container {
    width: 100%;
  }
  .dataviews-footer .dataviews-bulk-actions-footer__item-count {
    flex-grow: 1;
  }
  .dataviews-footer .dataviews-pagination {
    width: 100%;
    justify-content: space-between;
  }
}
.dataviews-pagination__page-select {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
}
@media (min-width: 600px) {
  .dataviews-pagination__page-select .components-select-control__input {
    font-size: 11px !important;
    font-weight: 500;
  }
}

.dataviews-action-modal {
  z-index: 1000001;
}

.dataviews-selection-checkbox {
  --checkbox-input-size: 24px;
  line-height: 0;
  flex-shrink: 0;
}
@media (min-width: 600px) {
  .dataviews-selection-checkbox {
    --checkbox-input-size: 16px;
  }
}
.dataviews-selection-checkbox .components-checkbox-control__input-container {
  margin: 0;
}

.dataviews-view-config {
  width: 320px;
  /* stylelint-disable-next-line property-no-unknown -- the linter needs to be updated to accepted the container-type property */
  container-type: inline-size;
  font-size: 13px;
  line-height: 1.4;
}

.dataviews-view-config__sort-direction .components-toggle-group-control-option-base {
  text-transform: uppercase;
}

.dataviews-settings-section__title.dataviews-settings-section__title {
  line-height: 24px;
  font-size: 15px;
}

.dataviews-settings-section__sidebar {
  grid-column: span 4;
}

.dataviews-settings-section__content,
.dataviews-settings-section__content > * {
  grid-column: span 8;
}

.dataviews-settings-section__content .is-divided-in-two {
  display: contents;
}
.dataviews-settings-section__content .is-divided-in-two > * {
  grid-column: span 4;
}

.dataviews-settings-section:has(.dataviews-settings-section__content:empty) {
  display: none;
}

/* stylelint-disable-next-line scss/at-rule-no-unknown -- '@container' not globally permitted */
@container (max-width: 500px) {
  .dataviews-settings-section.dataviews-settings-section {
    grid-template-columns: repeat(2, 1fr);
  }
  .dataviews-settings-section.dataviews-settings-section .dataviews-settings-section__sidebar {
    grid-column: span 2;
  }
  .dataviews-settings-section.dataviews-settings-section .dataviews-settings-section__content {
    grid-column: span 2;
  }
}
.dataviews-field-control__field {
  height: 32px;
}

.dataviews-field-control__actions {
  position: absolute;
  top: -9999em;
}

.dataviews-field-control__actions.dataviews-field-control__actions {
  gap: 4px;
}

.dataviews-field-control__field:hover .dataviews-field-control__actions,
.dataviews-field-control__field:focus-within .dataviews-field-control__actions {
  position: unset;
  top: unset;
}

.dataforms-layouts-panel__field-dropdown .dataforms-combined-edit {
  border: none;
  padding: 0;
}

.dataforms-combined-edit__field {
  flex: 1 1 auto;
}

.dataviews-view-grid {
  margin-bottom: auto;
  grid-template-rows: max-content;
  padding: 0 48px 24px;
  transition: padding ease-out 0.1s;
}
@media (prefers-reduced-motion: reduce) {
  .dataviews-view-grid {
    transition-duration: 0s;
    transition-delay: 0s;
  }
}
.dataviews-view-grid .dataviews-view-grid__card {
  height: 100%;
  justify-content: flex-start;
  position: relative;
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__title-actions {
  padding: 8px 0 4px;
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__primary-field {
  min-height: 32px;
}
.dataviews-view-grid .dataviews-view-grid__card.is-selected .dataviews-view-grid__fields .dataviews-view-grid__field .dataviews-view-grid__field-value {
  color: #1e1e1e;
}
.dataviews-view-grid .dataviews-view-grid__card.is-selected .dataviews-view-grid__media::after {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.08);
  box-shadow: inset 0 0 0 1px var(--wp-admin-theme-color);
}
.dataviews-view-grid .dataviews-view-grid__media {
  width: 100%;
  min-height: 200px;
  aspect-ratio: 1/1;
  background-color: #f0f0f0;
  border-radius: 4px;
  position: relative;
}
.dataviews-view-grid .dataviews-view-grid__media img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.dataviews-view-grid .dataviews-view-grid__media::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  pointer-events: none;
}
.dataviews-view-grid .dataviews-view-grid__fields {
  position: relative;
  font-size: 12px;
  line-height: 16px;
}
.dataviews-view-grid .dataviews-view-grid__fields:not(:empty) {
  padding: 0 0 12px;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field-value:not(:empty) {
  min-height: 24px;
  line-height: 20px;
  padding-top: 2px;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field {
  align-items: flex-start;
  min-height: 24px;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field:not(:has(.dataviews-view-grid__field-value:not(:empty))) {
  display: none;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field:not(.is-column) {
  align-items: center;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field:not(.is-column) .dataviews-view-grid__field-name {
  width: 35%;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field:not(.is-column) .dataviews-view-grid__field-value {
  width: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field.is-column + .is-row {
  margin-top: 4px;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field .dataviews-view-grid__field-name {
  color: #757575;
}
.dataviews-view-grid .dataviews-view-grid__badge-fields:not(:empty) {
  padding-bottom: 12px;
}
.dataviews-view-grid .dataviews-view-grid__badge-fields .dataviews-view-grid__field-value {
  width: -moz-fit-content;
  width: fit-content;
  background: #f0f0f0;
  padding: 0 8px;
  min-height: 24px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  font-size: 12px;
}

.dataviews-view-grid.dataviews-view-grid {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 480px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1080px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (min-width: 1440px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media (min-width: 1920px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

.dataviews-view-grid__field-value:empty,
.dataviews-view-grid__field:empty {
  display: none;
}

.dataviews-view-grid__card .dataviews-selection-checkbox {
  position: absolute;
  top: -9999em;
  left: 8px;
  z-index: 1;
}

.dataviews-view-grid__card:hover .dataviews-selection-checkbox,
.dataviews-view-grid__card:focus-within .dataviews-selection-checkbox,
.dataviews-view-grid__card.is-selected .dataviews-selection-checkbox {
  top: 8px;
}

/* stylelint-disable-next-line scss/at-rule-no-unknown -- '@container' not globally permitted */
@container (max-width: 430px) {
  .dataviews-view-grid {
    padding-left: 24px;
    padding-right: 24px;
  }
}
ul.dataviews-view-list {
  list-style-type: none;
}

.dataviews-view-list {
  margin: 0 0 auto;
}
.dataviews-view-list li {
  margin: 0;
  border-top: 1px solid #f0f0f0;
}
.dataviews-view-list li .dataviews-view-list__item-wrapper {
  position: relative;
  padding: 16px 24px;
}
.dataviews-view-list li .dataviews-view-list__item-actions {
  flex: 0;
  overflow: hidden;
}
.dataviews-view-list li .dataviews-view-list__item-actions > div {
  height: 24px;
}
.dataviews-view-list li .dataviews-view-list__item-actions .components-button {
  position: relative;
  z-index: 1;
  opacity: 0;
}
.dataviews-view-list li:where(.is-selected, .is-hovered, :focus-within) .dataviews-view-list__item-actions {
  flex-basis: min-content;
  overflow: unset;
  padding-inline-end: 4px;
}
.dataviews-view-list li:where(.is-selected, .is-hovered, :focus-within) .dataviews-view-list__item-actions .components-button {
  opacity: 1;
}
.dataviews-view-list li.is-selected.is-selected {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-list li.is-selected.is-selected + li {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-list li:not(.is-selected) .dataviews-view-list__primary-field {
  color: #1e1e1e;
}
.dataviews-view-list li:not(.is-selected):hover, .dataviews-view-list li:not(.is-selected).is-hovered, .dataviews-view-list li:not(.is-selected):focus-within {
  color: var(--wp-admin-theme-color);
  background-color: #f8f8f8;
}
.dataviews-view-list li:not(.is-selected):hover .dataviews-view-list__primary-field,
.dataviews-view-list li:not(.is-selected):hover .dataviews-view-list__fields, .dataviews-view-list li:not(.is-selected).is-hovered .dataviews-view-list__primary-field,
.dataviews-view-list li:not(.is-selected).is-hovered .dataviews-view-list__fields, .dataviews-view-list li:not(.is-selected):focus-within .dataviews-view-list__primary-field,
.dataviews-view-list li:not(.is-selected):focus-within .dataviews-view-list__fields {
  color: var(--wp-admin-theme-color);
}
.dataviews-view-list li.is-selected .dataviews-view-list__item-wrapper,
.dataviews-view-list li.is-selected:focus-within .dataviews-view-list__item-wrapper {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.04);
  color: #1e1e1e;
}
.dataviews-view-list li.is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__primary-field,
.dataviews-view-list li.is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__fields,
.dataviews-view-list li.is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__primary-field,
.dataviews-view-list li.is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__fields {
  color: var(--wp-admin-theme-color);
}
.dataviews-view-list .dataviews-view-list__item {
  position: absolute;
  z-index: 1;
  inset: 0;
  scroll-margin: 8px 0;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
.dataviews-view-list .dataviews-view-list__item:focus-visible {
  outline: none;
}
.dataviews-view-list .dataviews-view-list__item:focus-visible::before {
  position: absolute;
  content: "";
  inset: var(--wp-admin-border-width-focus);
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  border-radius: 2px;
  outline: 2px solid transparent;
}
.dataviews-view-list .dataviews-view-list__primary-field {
  flex: 1;
  min-height: 24px;
  line-height: 24px;
  overflow: hidden;
}
.dataviews-view-list .dataviews-view-list__primary-field:has(a, button) {
  z-index: 1;
}
.dataviews-view-list .dataviews-view-list__media-wrapper {
  width: 52px;
  height: 52px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background-color: #f0f0f0;
  border-radius: 4px;
}
.dataviews-view-list .dataviews-view-list__media-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dataviews-view-list .dataviews-view-list__media-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.dataviews-view-list .dataviews-view-list__field-wrapper {
  min-height: 52px;
  flex-grow: 1;
}
.dataviews-view-list .dataviews-view-list__fields {
  color: #757575;
  display: flex;
  gap: 12px;
  row-gap: 4px;
  flex-wrap: wrap;
  font-size: 12px;
}
.dataviews-view-list .dataviews-view-list__fields:empty {
  display: none;
}
.dataviews-view-list .dataviews-view-list__fields .dataviews-view-list__field:has(.dataviews-view-list__field-value:empty) {
  display: none;
}
.dataviews-view-list .dataviews-view-list__fields .dataviews-view-list__field-value {
  min-height: 24px;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.dataviews-view-list + .dataviews-pagination {
  justify-content: space-between;
}

.dataviews-view-table {
  width: 100%;
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
  position: relative;
  color: #757575;
  margin-bottom: auto;
}
.dataviews-view-table th {
  text-align: left;
  color: #1e1e1e;
  font-weight: normal;
  font-size: 13px;
}
.dataviews-view-table td,
.dataviews-view-table th {
  padding: 12px;
  white-space: nowrap;
}
.dataviews-view-table td.dataviews-view-table__actions-column,
.dataviews-view-table th.dataviews-view-table__actions-column {
  text-align: right;
}
.dataviews-view-table td.dataviews-view-table__checkbox-column,
.dataviews-view-table th.dataviews-view-table__checkbox-column {
  padding-right: 0;
}
.dataviews-view-table tr {
  border-top: 1px solid #f0f0f0;
}
.dataviews-view-table tr .dataviews-view-table-header-button {
  gap: 4px;
}
.dataviews-view-table tr td:first-child,
.dataviews-view-table tr th:first-child {
  padding-left: 48px;
}
.dataviews-view-table tr td:first-child .dataviews-view-table-header-button,
.dataviews-view-table tr td:first-child .dataviews-view-table-header,
.dataviews-view-table tr th:first-child .dataviews-view-table-header-button,
.dataviews-view-table tr th:first-child .dataviews-view-table-header {
  margin-left: -8px;
}
.dataviews-view-table tr td:last-child,
.dataviews-view-table tr th:last-child {
  padding-right: 48px;
}
.dataviews-view-table tr:last-child {
  border-bottom: 0;
}
.dataviews-view-table tr.is-hovered {
  background-color: #f8f8f8;
}
.dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input {
  opacity: 0;
}
.dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input:checked, .dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input:indeterminate, .dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input:focus {
  opacity: 1;
}
.dataviews-view-table tr .dataviews-item-actions .components-button:not(.dataviews-all-actions-button) {
  opacity: 0;
}
.dataviews-view-table tr:focus-within .components-checkbox-control__input,
.dataviews-view-table tr:focus-within .dataviews-item-actions .components-button:not(.dataviews-all-actions-button), .dataviews-view-table tr.is-hovered .components-checkbox-control__input,
.dataviews-view-table tr.is-hovered .dataviews-item-actions .components-button:not(.dataviews-all-actions-button), .dataviews-view-table tr:hover .components-checkbox-control__input,
.dataviews-view-table tr:hover .dataviews-item-actions .components-button:not(.dataviews-all-actions-button) {
  opacity: 1;
}
@media (hover: none) {
  .dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input,
.dataviews-view-table tr .dataviews-item-actions .components-button:not(.dataviews-all-actions-button) {
    opacity: 1;
  }
}
.dataviews-view-table tr.is-selected {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.04);
  color: #757575;
}
.dataviews-view-table tr.is-selected, .dataviews-view-table tr.is-selected + tr {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-table tr.is-selected:hover {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.08);
}
.dataviews-view-table thead {
  position: sticky;
  inset-block-start: 0;
  z-index: 1;
}
.dataviews-view-table thead tr {
  border: 0;
}
.dataviews-view-table thead th {
  background-color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
}
.dataviews-view-table thead th:has(.dataviews-view-table-header-button):not(:first-child) {
  padding-left: 4px;
}
.dataviews-view-table tbody td {
  vertical-align: top;
}
.dataviews-view-table tbody .dataviews-view-table__cell-content-wrapper {
  min-height: 32px;
  display: flex;
  align-items: center;
}
.dataviews-view-table tbody .components-v-stack > .dataviews-view-table__cell-content-wrapper:not(:first-child) {
  min-height: 0;
}
.dataviews-view-table .dataviews-view-table-header-button {
  padding: 4px 8px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
}
.dataviews-view-table .dataviews-view-table-header-button:not(:hover) {
  color: #1e1e1e;
}
.dataviews-view-table .dataviews-view-table-header-button span {
  speak: none;
}
.dataviews-view-table .dataviews-view-table-header-button span:empty {
  display: none;
}
.dataviews-view-table .dataviews-view-table-header {
  padding-left: 4px;
}
.dataviews-view-table .dataviews-view-table__actions-column {
  width: 1%;
}
.dataviews-view-table:has(tr.is-selected) .components-checkbox-control__input {
  opacity: 1;
}

/* stylelint-disable-next-line scss/at-rule-no-unknown -- '@container' not globally permitted */
@container (max-width: 430px) {
  .dataviews-view-table tr td:first-child,
.dataviews-view-table tr th:first-child {
    padding-left: 24px;
  }

  .dataviews-view-table tr td:last-child,
.dataviews-view-table tr th:last-child {
    padding-right: 24px;
  }
}
.dataviews-view-table-selection-checkbox {
  --checkbox-input-size: 24px;
}
@media (min-width: 600px) {
  .dataviews-view-table-selection-checkbox {
    --checkbox-input-size: 16px;
  }
}

.dataviews-controls__datetime {
  border: none;
  padding: 0;
}

.dataforms-layouts-panel__field {
  width: 100%;
  min-height: 32px;
  justify-content: flex-start !important;
  align-items: flex-start !important;
}

.dataforms-layouts-panel__field-label {
  width: 38%;
  flex-shrink: 0;
  min-height: 32px;
  display: flex;
  align-items: center;
  padding: 6px 0;
  line-height: 20px;
  hyphens: auto;
}

.dataforms-layouts-panel__field-control {
  flex-grow: 1;
  min-height: 32px;
  display: flex;
  align-items: center;
}
.dataforms-layouts-panel__field-control .components-button {
  max-width: 100%;
  text-align: left;
  white-space: normal;
  text-wrap: balance;
  text-wrap: pretty;
  min-height: 32px;
}
.dataforms-layouts-panel__field-control .components-dropdown {
  max-width: 100%;
}

.dataforms-layouts-panel__field-dropdown .components-popover__content {
  min-width: 320px;
  padding: 16px;
}

.dataforms-layouts-panel__dropdown-header {
  margin-bottom: 16px;
}`,""]);const G=Y}}]);})();
