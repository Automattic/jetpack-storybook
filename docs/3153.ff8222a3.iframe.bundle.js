"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3153],{"../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js":(K,b,i)=>{i.d(b,{A:()=>G});var p=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=i("../../../node_modules/.pnpm/@wordpress+compose@7.12.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),f=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),y=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),J=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js"),X=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),ce=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w(we,Z){return`${we}-${Z}-option-description`}function $(we,Z){return`${we}-${Z}`}function De(we){return`${we}__help`}function je(we){const{label:Z,className:xe,selected:k,help:Q,onChange:R,hideLabelFromVision:te,options:Pe=[],id:Re,...q}=we,le=(0,l.A)(je,"inspector-radio-control",Re),fe=Te=>R(Te.target.value);return Pe!=null&&Pe.length?(0,ce.jsxs)("fieldset",{id:le,className:(0,p.A)(xe,"components-radio-control"),"aria-describedby":Q?De(le):void 0,children:[te?(0,ce.jsx)(X.A,{as:"legend",children:Z}):(0,ce.jsx)(f.Ay.VisualLabel,{as:"legend",children:Z}),(0,ce.jsx)(y.A,{spacing:3,className:(0,p.A)("components-radio-control__group-wrapper",{"has-help":!!Q}),children:Pe.map((Te,Oe)=>(0,ce.jsxs)("div",{className:"components-radio-control__option",children:[(0,ce.jsx)("input",{id:$(le,Oe),className:"components-radio-control__input",type:"radio",name:le,value:Te.value,onChange:fe,checked:Te.value===k,"aria-describedby":Te.description?w(le,Oe):void 0,...q}),(0,ce.jsx)("label",{className:"components-radio-control__label",htmlFor:$(le,Oe),children:Te.label}),Te.description?(0,ce.jsx)(J.te,{__nextHasNoMarginBottom:!0,id:w(le,Oe),className:"components-radio-control__option-description",children:Te.description}):null]},$(le,Oe)))}),!!Q&&(0,ce.jsx)(J.te,{__nextHasNoMarginBottom:!0,id:De(le),className:"components-base-control__help",children:Q})]}):null}const G=je},"../../../node_modules/.pnpm/@wordpress+data@10.12.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js":(K,b,i)=>{i.d(b,{Ay:()=>ce,ob:()=>f});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=i("../../../node_modules/.pnpm/@wordpress+data@10.12.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");const f=(0,p.createContext)(l.A),{Consumer:y,Provider:J}=f,X=null,ce=J},"../../../node_modules/.pnpm/@wordpress+data@10.12.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js":(K,b,i)=>{i.d(b,{A:()=>f});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=i("../../../node_modules/.pnpm/@wordpress+data@10.12.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js");function f(){return(0,p.useContext)(l.ob)}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.8.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js":(K,b,i)=>{i.d(b,{A:()=>lo});var p=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.8.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/constants.js");const J=(0,l.createContext)({view:{type:f.Ad},onChangeView:()=>{},fields:[],data:[],paginationInfo:{totalItems:0,totalPages:0},selection:[],onChangeSelection:()=>{},setOpenedFilter:()=>{},openedFilter:null,getItemId:t=>t.id,onClickItem:()=>{},isItemClickable:()=>!1,density:0});var X=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),ce=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/funnel.js"),w=i("../../../node_modules/.pnpm/@wordpress+i18n@5.12.0/node_modules/@wordpress/i18n/build-module/index.js"),$=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),De=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/component.js"),je=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js"),G=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/index.js"),we=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),Z=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js"),xe=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),k=i("../../../node_modules/.pnpm/@wordpress+element@6.12.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),Q=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),R=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/APGXEJ2Q.js"),te=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7FZLUSKW.js"),Pe=(0,l.createContext)(null),Re=(0,l.createContext)(null),q=(0,te.B0)([R.ws],[R.aN]),le=q.useContext,fe=q.useScopedContext,Te=q.useProviderContext,Oe=q.ContextProvider,Qe=q.ScopedContextProvider,He=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/OIB4PV4M.js"),ts=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CO7ZDQU2.js"),We=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CTKPPFRS.js"),F=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HNHAUIIY.js"),se=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),qe=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/IJ6VFLJG.js"),At=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js"),ve=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js"),ue=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),lt=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/3VBK76MS.js"),Me=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js"),Et=(0,lt.nr)()&&(0,lt.CN)();function dt(t={}){var e=t,{tag:o}=e,s=(0,Me.YG)(e,["tag"]);const r=(0,ve.od)(s.store,(0,ve.Up)(o,["value","rtl"]));(0,ve.UE)(s,r);const d=o==null?void 0:o.getState(),a=r==null?void 0:r.getState(),u=(0,ue.Jh)(s.activeId,a==null?void 0:a.activeId,s.defaultActiveId,null),m=(0,qe.z)((0,Me.ko)((0,Me.IA)({},s),{activeId:u,includesBaseElement:(0,ue.Jh)(s.includesBaseElement,a==null?void 0:a.includesBaseElement,!0),orientation:(0,ue.Jh)(s.orientation,a==null?void 0:a.orientation,"vertical"),focusLoop:(0,ue.Jh)(s.focusLoop,a==null?void 0:a.focusLoop,!0),focusWrap:(0,ue.Jh)(s.focusWrap,a==null?void 0:a.focusWrap,!0),virtualFocus:(0,ue.Jh)(s.virtualFocus,a==null?void 0:a.virtualFocus,!0)})),c=(0,At.N)((0,Me.ko)((0,Me.IA)({},s),{placement:(0,ue.Jh)(s.placement,a==null?void 0:a.placement,"bottom-start")})),_=(0,ue.Jh)(s.value,a==null?void 0:a.value,s.defaultValue,""),g=(0,ue.Jh)(s.selectedValue,a==null?void 0:a.selectedValue,d==null?void 0:d.values,s.defaultSelectedValue,""),h=Array.isArray(g),C=(0,Me.ko)((0,Me.IA)((0,Me.IA)({},m.getState()),c.getState()),{value:_,selectedValue:g,resetValueOnSelect:(0,ue.Jh)(s.resetValueOnSelect,a==null?void 0:a.resetValueOnSelect,h),resetValueOnHide:(0,ue.Jh)(s.resetValueOnHide,a==null?void 0:a.resetValueOnHide,h&&!o),activeValue:a==null?void 0:a.activeValue}),A=(0,ve.y$)(C,m,c,r);return Et&&(0,ve.mj)(A,()=>(0,ve.OH)(A,["virtualFocus"],()=>{A.setState("virtualFocus",!1)})),(0,ve.mj)(A,()=>{if(o)return(0,ue.cy)((0,ve.OH)(A,["selectedValue"],O=>{Array.isArray(O.selectedValue)&&o.setValues(O.selectedValue)}),(0,ve.OH)(o,["values"],O=>{A.setState("selectedValue",O.values)}))}),(0,ve.mj)(A,()=>(0,ve.OH)(A,["resetValueOnHide","mounted"],O=>{O.resetValueOnHide&&(O.mounted||A.setState("value",_))})),(0,ve.mj)(A,()=>(0,ve.OH)(A,["open"],O=>{O.open||(A.setState("activeId",u),A.setState("moves",0))})),(0,ve.mj)(A,()=>(0,ve.OH)(A,["moves","activeId"],(O,z)=>{O.moves===z.moves&&A.setState("activeValue",void 0)})),(0,ve.mj)(A,()=>(0,ve.vA)(A,["moves","renderedItems"],(O,z)=>{if(O.moves===z.moves)return;const{activeId:U}=A.getState(),M=m.item(U);A.setState("activeValue",M==null?void 0:M.value)})),(0,Me.ko)((0,Me.IA)((0,Me.IA)((0,Me.IA)({},c),m),A),{tag:o,setValue:O=>A.setState("value",O),resetValue:()=>A.setState("value",C.value),setSelectedValue:O=>A.setState("selectedValue",O)})}function W(t,e,o){return(0,F.w5)(e,[o.tag]),(0,We.Tz)(t,o,"value","setValue"),(0,We.Tz)(t,o,"selectedValue","setSelectedValue"),(0,We.Tz)(t,o,"resetValueOnHide"),(0,We.Tz)(t,o,"resetValueOnSelect"),Object.assign((0,He.Y)((0,ts.o)(t,e,o),e,o),{tag:o.tag})}function ss(t={}){const e=le();t=(0,se.ko)((0,se.IA)({},t),{tag:t.tag!==void 0?t.tag:e});const[o,s]=(0,We.Pj)(dt,t);return W(o,s,t)}var Ee=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3LH6HMTR.js"),n=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function Ct(t={}){const e=ss(t);return(0,n.jsx)(Ee.CE,{value:e,children:t.children})}var Pt="label",st=(0,te.ab)(function(e){var o=e,{store:s}=o,r=(0,se.YG)(o,["store"]);const d=(0,Ee.PV)();s=s||d,(0,ue.V1)(s,!1);const a=s.useState(u=>{var m;return(m=u.baseElement)==null?void 0:m.id});return r=(0,se.IA)({htmlFor:a},r),(0,ue.HR)(r)}),ct=(0,te.ph)((0,te.Rf)(function(e){const o=st(e);return(0,te.n)(Pt,o)})),ut=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NWYOIOBE.js"),Ot=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IKLZZMLE.js"),Se=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/PQP5VPTV.js"),$e=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/utils/events.js"),Ge=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/utils/focus.js"),Mt="input";function mt(t,e,o){if(!o)return!1;const s=t.find(r=>!r.disabled&&r.value);return(s==null?void 0:s.value)===e}function pt(t,e){return!e||t==null?!1:(t=(0,ue.J2)(t),e.length>t.length&&e.toLowerCase().indexOf(t.toLowerCase())===0)}function _t(t){return t.type==="input"}function vt(t){return t==="inline"||t==="list"||t==="both"||t==="none"}function ns(t){const e=t.find(o=>{var s;return o.disabled?!1:((s=o.element)==null?void 0:s.getAttribute("role"))!=="tab"});return e==null?void 0:e.id}var Dt=(0,te.ab)(function(e){var o=e,{store:s,focusable:r=!0,autoSelect:d=!1,getAutoSelectId:a,setValueOnChange:u,showMinLength:m=0,showOnChange:c,showOnMouseDown:_,showOnClick:g=_,showOnKeyDown:h,showOnKeyPress:C=h,blurActiveItemOnClick:A,setValueOnClick:O=!0,moveOnKeyPress:z=!0,autoComplete:U="list"}=o,M=(0,se.YG)(o,["store","focusable","autoSelect","getAutoSelectId","setValueOnChange","showMinLength","showOnChange","showOnMouseDown","showOnClick","showOnKeyDown","showOnKeyPress","blurActiveItemOnClick","setValueOnClick","moveOnKeyPress","autoComplete"]);const T=(0,Ee.PV)();s=s||T,(0,ue.V1)(s,!1);const S=(0,l.useRef)(null),[Y,L]=(0,F.CH)(),N=(0,l.useRef)(!1),V=(0,l.useRef)(!1),ie=s.useState(E=>E.virtualFocus&&d),D=U==="inline"||U==="both",[re,be]=(0,l.useState)(D);(0,F.Kp)(()=>{D&&be(!0)},[D]);const B=s.useState("value"),ee=(0,l.useRef)();(0,l.useEffect)(()=>(0,ve.OH)(s,["selectedValue","activeId"],(E,ne)=>{ee.current=ne.selectedValue}),[]);const ae=s.useState(E=>{var ne;if(D&&re&&!(E.activeValue&&Array.isArray(E.selectedValue)&&(E.selectedValue.includes(E.activeValue)||(ne=ee.current)!=null&&ne.includes(E.activeValue))))return E.activeValue}),Je=s.useState("renderedItems"),Ke=s.useState("open"),Fe=s.useState("contentElement"),yt=(0,l.useMemo)(()=>{if(!D||!re)return B;if(mt(Je,ae,ie)){if(pt(B,ae)){const ne=(ae==null?void 0:ae.slice(B.length))||"";return B+ne}return B}return ae||B},[D,re,Je,ae,ie,B]);(0,l.useEffect)(()=>{const E=S.current;if(!E)return;const ne=()=>be(!0);return E.addEventListener("combobox-item-move",ne),()=>{E.removeEventListener("combobox-item-move",ne)}},[]),(0,l.useEffect)(()=>{if(!D||!re||!ae||!mt(Je,ae,ie)||!pt(B,ae))return;let ne=ue.lQ;return queueMicrotask(()=>{const he=S.current;if(!he)return;const{start:ge,end:Le}=(0,Se.Zy)(he),Ue=B.length,Ae=ae.length;(0,Se.eG)(he,Ue,Ae),ne=()=>{if(!(0,Ge.AJ)(he))return;const{start:Ze,end:Eo}=(0,Se.Zy)(he);Ze===Ue&&Eo===Ae&&(0,Se.eG)(he,ge,Le)}}),()=>ne()},[Y,D,re,ae,Je,ie,B]);const co=(0,l.useRef)(null),Ls=(0,F._q)(a),Rs=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(!Ke||!Fe)return;const E=(0,Se.qj)(Fe);if(!E)return;co.current=E;const ne=()=>{N.current=!1},he=()=>{if(!s||!N.current)return;const{activeId:Le}=s.getState();Le!==null&&Le!==Rs.current&&(N.current=!1)},ge={passive:!0,capture:!0};return E.addEventListener("wheel",ne,ge),E.addEventListener("touchmove",ne,ge),E.addEventListener("scroll",he,ge),()=>{E.removeEventListener("wheel",ne,!0),E.removeEventListener("touchmove",ne,!0),E.removeEventListener("scroll",he,!0)}},[Ke,Fe,s]),(0,F.UQ)(()=>{B&&(V.current||(N.current=!0))},[B]),(0,F.UQ)(()=>{ie!=="always"&&Ke||(N.current=Ke)},[ie,Ke]);const Vs=s.useState("resetValueOnSelect");(0,F.w5)(()=>{var E,ne;const he=N.current;if(!s||!Ke||(!ie||!he)&&!Vs)return;const{baseElement:ge,contentElement:Le,activeId:Ue}=s.getState();if(!(ge&&!(0,Ge.AJ)(ge))){if(Le!=null&&Le.hasAttribute("data-placing")){const Ae=new MutationObserver(L);return Ae.observe(Le,{attributeFilter:["data-placing"]}),()=>Ae.disconnect()}if(ie&&he){const Ae=Ls(Je),Ze=Ae!==void 0?Ae:(E=ns(Je))!=null?E:s.first();Rs.current=Ze,s.move(Ze!=null?Ze:null)}else{const Ae=(ne=s.item(Ue))==null?void 0:ne.element;Ae&&"scrollIntoView"in Ae&&Ae.scrollIntoView({block:"nearest",inline:"nearest"})}}},[s,Ke,Y,B,ie,Vs,Ls,Je]),(0,l.useEffect)(()=>{if(!D)return;const E=S.current;if(!E)return;const ne=[E,Fe].filter(ge=>!!ge),he=ge=>{ne.every(Le=>(0,$e.aG)(ge,Le))&&(s==null||s.setValue(yt))};for(const ge of ne)ge.addEventListener("focusout",he);return()=>{for(const ge of ne)ge.removeEventListener("focusout",he)}},[D,Fe,s,yt]);const es=E=>E.currentTarget.value.length>=m,Bs=M.onChange,uo=(0,F.O4)(c!=null?c:es),mo=(0,F.O4)(u!=null?u:!s.tag),po=(0,F._q)(E=>{if(Bs==null||Bs(E),E.defaultPrevented||!s)return;const ne=E.currentTarget,{value:he,selectionStart:ge,selectionEnd:Le}=ne,Ue=E.nativeEvent;if(N.current=!0,_t(Ue)&&(Ue.isComposing&&(N.current=!1,V.current=!0),D)){const Ae=Ue.inputType==="insertText"||Ue.inputType==="insertCompositionText",Ze=ge===he.length;be(Ae&&Ze)}if(mo(E)){const Ae=he===s.getState().value;s.setValue(he),queueMicrotask(()=>{(0,Se.eG)(ne,ge,Le)}),D&&ie&&Ae&&L()}uo(E)&&s.show(),(!ie||!N.current)&&s.setActiveId(null)}),Ns=M.onCompositionEnd,_o=(0,F._q)(E=>{N.current=!0,V.current=!1,Ns==null||Ns(E),!E.defaultPrevented&&ie&&L()}),zs=M.onMouseDown,vo=(0,F.O4)(A!=null?A:()=>!!(s!=null&&s.getState().includesBaseElement)),wo=(0,F.O4)(O),fo=(0,F.O4)(g!=null?g:es),ho=(0,F._q)(E=>{zs==null||zs(E),!E.defaultPrevented&&(E.button||E.ctrlKey||s&&(vo(E)&&s.setActiveId(null),wo(E)&&s.setValue(yt),fo(E)&&(0,$e.nz)(E.currentTarget,"mouseup",s.show)))}),Us=M.onKeyDown,go=(0,F.O4)(C!=null?C:es),xo=(0,F._q)(E=>{if(Us==null||Us(E),E.repeat||(N.current=!1),E.defaultPrevented||E.ctrlKey||E.altKey||E.shiftKey||E.metaKey||!s)return;const{open:ne}=s.getState();ne||(E.key==="ArrowUp"||E.key==="ArrowDown")&&go(E)&&(E.preventDefault(),s.show())}),Ws=M.onBlur,bo=(0,F._q)(E=>{N.current=!1,Ws==null||Ws(E),E.defaultPrevented}),jo=(0,F.Bi)(M.id),yo=vt(U)?U:void 0,Ao=s.useState(E=>E.activeId===null);return M=(0,se.ko)((0,se.IA)({id:jo,role:"combobox","aria-autocomplete":yo,"aria-haspopup":(0,Se.Tc)(Fe,"listbox"),"aria-expanded":Ke,"aria-controls":Fe==null?void 0:Fe.id,"data-active-item":Ao||void 0,value:yt},M),{ref:(0,F.SV)(S,M.ref),onChange:po,onCompositionEnd:_o,onMouseDown:ho,onKeyDown:xo,onBlur:bo}),M=(0,Ot.T)((0,se.ko)((0,se.IA)({store:s,focusable:r},M),{moveOnKeyPress:E=>(0,ue.zO)(z,E)?!1:(D&&be(!0),!0)})),M=(0,ut.E)((0,se.IA)({store:s},M)),(0,se.IA)({autoComplete:"off"},M)}),nt=(0,te.Rf)(function(e){const o=Dt(e);return(0,te.n)(Mt,o)}),It=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UYRBEP7M.js"),Tt="div",St=(0,te.ab)(function(e){var o=e,{store:s,alwaysVisible:r}=o,d=(0,se.YG)(o,["store","alwaysVisible"]);const a=(0,Ee.UW)(!0),u=(0,Ee.Ay)();s=s||u;const m=!!s&&s===a;(0,ue.V1)(s,!1);const c=(0,l.useRef)(null),_=(0,F.Bi)(d.id),g=s.useState("mounted"),h=(0,It.dK)(g,d.hidden,r),C=h?(0,se.ko)((0,se.IA)({},d.style),{display:"none"}):d.style,A=s.useState(L=>Array.isArray(L.selectedValue)),O=(0,F.Cy)(c,"role",d.role),U=(O==="listbox"||O==="tree"||O==="grid")&&A||void 0,[M,T]=(0,l.useState)(!1),S=s.useState("contentElement");(0,F.UQ)(()=>{if(!g)return;const L=c.current;if(!L||S!==L)return;const N=()=>{T(!!L.querySelector("[role='listbox']"))},V=new MutationObserver(N);return V.observe(L,{subtree:!0,childList:!0,attributeFilter:["role"]}),N(),()=>V.disconnect()},[g,S]),M||(d=(0,se.IA)({role:"listbox","aria-multiselectable":U},d)),d=(0,F.w7)(d,L=>(0,n.jsx)(Ee.Ky,{value:s,children:(0,n.jsx)(Ee.Hf.Provider,{value:O,children:L})}),[s,O]);const Y=_&&(!a||!m)?s.setContentElement:null;return d=(0,se.ko)((0,se.IA)({id:_,hidden:h},d),{ref:(0,F.SV)(Y,c,d.ref),style:C}),(0,ue.HR)(d)}),kt=(0,te.Rf)(function(e){const o=St(e);return(0,te.n)(Tt,o)}),Lt=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/L63MOBXC.js"),Rt=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NSB34BGG.js"),Vt="div";function Bt(t,e){if(e!=null)return t==null?!1:Array.isArray(t)?t.includes(e):t===e}function wt(t){var e;return(e={menu:"menuitem",listbox:"option",tree:"treeitem"}[t])!=null?e:"option"}var Nt=(0,te.ab)(function(e){var o=e,{store:s,value:r,hideOnClick:d,setValueOnClick:a,selectValueOnClick:u=!0,resetValueOnSelect:m,focusOnHover:c=!1,moveOnKeyPress:_=!0,getItem:g}=o,h=(0,se.YG)(o,["store","value","hideOnClick","setValueOnClick","selectValueOnClick","resetValueOnSelect","focusOnHover","moveOnKeyPress","getItem"]),C;const A=(0,Ee.UW)();s=s||A,(0,ue.V1)(s,!1);const O=(0,l.useCallback)(B=>{const ee=(0,se.ko)((0,se.IA)({},B),{value:r});return g?g(ee):ee},[r,g]),z=s.useState(B=>Array.isArray(B.selectedValue)),U=s.useState(B=>Bt(B.selectedValue,r)),M=s.useState("resetValueOnSelect");a=a!=null?a:!z,d=d!=null?d:r!=null&&!z;const T=h.onClick,S=(0,F.O4)(a),Y=(0,F.O4)(u),L=(0,F.O4)((C=m!=null?m:M)!=null?C:z),N=(0,F.O4)(d),V=(0,F._q)(B=>{T==null||T(B),!B.defaultPrevented&&((0,$e.RN)(B)||(0,$e.$b)(B)||(r!=null&&(Y(B)&&(L(B)&&(s==null||s.resetValue()),s==null||s.setSelectedValue(ee=>Array.isArray(ee)?ee.includes(r)?ee.filter(ae=>ae!==r):[...ee,r]:r)),S(B)&&(s==null||s.setValue(r))),N(B)&&(s==null||s.hide())))}),ie=h.onKeyDown,D=(0,F._q)(B=>{if(ie==null||ie(B),B.defaultPrevented)return;const ee=s==null?void 0:s.getState().baseElement;if(!ee||(0,Ge.AJ)(ee))return;(B.key.length===1||B.key==="Backspace"||B.key==="Delete")&&(queueMicrotask(()=>ee.focus()),(0,Se.mB)(ee)&&(s==null||s.setValue(ee.value)))});z&&U!=null&&(h=(0,se.IA)({"aria-selected":U},h)),h=(0,F.w7)(h,B=>(0,n.jsx)(Ee.L7.Provider,{value:r,children:(0,n.jsx)(Ee.Hh.Provider,{value:U!=null?U:!1,children:B})}),[r,U]);const re=(0,l.useContext)(Ee.Hf);h=(0,se.ko)((0,se.IA)({role:wt(re),children:r},h),{onClick:V,onKeyDown:D});const be=(0,F.O4)(_);return h=(0,Rt.k)((0,se.ko)((0,se.IA)({store:s},h),{getItem:O,moveOnKeyPress:B=>{if(!be(B))return!1;const ee=new Event("combobox-item-move"),ae=s==null?void 0:s.getState().baseElement;return ae==null||ae.dispatchEvent(ee),!0}})),h=(0,Lt.T)((0,se.IA)({store:s,focusOnHover:c},h)),h}),ot=(0,te.ph)((0,te.Rf)(function(e){const o=Nt(e);return(0,te.n)(Vt,o)})),zt=i("../../../node_modules/.pnpm/@ariakit+core@0.4.12/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js"),ft="span";function Ut(t){return(0,ue.J2)(t).toLowerCase()}function x(t,e){const o=[];for(const s of e){let r=0;const d=s.length;for(;t.indexOf(s,r)!==-1;){const a=t.indexOf(s,r);a!==-1&&o.push([a,d]),r=a+1}}return o}function v(t){return t.filter(([e,o],s,r)=>!r.some(([d,a],u)=>u!==s&&d<=e&&d+a>=e+o))}function j(t){return t.sort(([e],[o])=>e-o)}function P(t,e){if(!t||!e)return t;const o=(0,zt.$r)(e).filter(Boolean).map(Ut),s=[],r=(m,c=!1)=>(0,n.jsx)("span",{"data-autocomplete-value":c?"":void 0,"data-user-value":c?void 0:"",children:m},s.length),d=j(v(x(Ut(t),new Set(o))));if(!d.length)return s.push(r(t,!0)),s;const[a]=d[0];return[t.slice(0,a),...d.flatMap(([m,c],_)=>{var g;const h=t.slice(m,m+c),C=(g=d[_+1])==null?void 0:g[0],A=t.slice(m+c,C);return[h,A]})].forEach((m,c)=>{m&&s.push(r(m,c%2===0))}),s}var I=(0,te.ab)(function(e){var o=e,{store:s,value:r,userValue:d}=o,a=(0,se.YG)(o,["store","value","userValue"]);const u=(0,Ee.UW)();s=s||u;const m=(0,l.useContext)(Ee.L7),c=r!=null?r:m,_=(0,We.O$)(s,h=>d!=null?d:h==null?void 0:h.value),g=(0,l.useMemo)(()=>{if(c)return _?P(c,_):c},[c,_]);return a=(0,se.IA)({children:g},a),(0,ue.HR)(a)}),H=(0,te.Rf)(function(e){const o=I(e);return(0,te.n)(ft,o)}),oe=i("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),de=i.n(oe),_e=i("../../../node_modules/.pnpm/@wordpress+compose@7.12.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),me=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/composite/index.js"),Ie=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),Ve=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),Xe=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js"),ke=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");const pe=(0,n.jsx)(ke.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(ke.jl,{cx:12,cy:12,r:3})});function ye(t=""){return de()(t.trim().toLowerCase())}const Be=[],Ne=(t,e)=>t.singleSelection?e==null?void 0:e.value:Array.isArray(e==null?void 0:e.value)?e.value:!Array.isArray(e==null?void 0:e.value)&&(e!=null&&e.value)?[e.value]:Be,ht=(t,e,o)=>t.singleSelection?o:Array.isArray(e==null?void 0:e.value)?e.value.includes(o)?e.value.filter(s=>s!==o):[...e.value,o]:[o];function Wt(t,e){return`${t}-${e}`}function gt({view:t,filter:e,onChangeView:o}){var m,c;const s=(0,_e.A)(gt,"dataviews-filter-list-box"),[r,d]=(0,l.useState)(((m=e.operators)==null?void 0:m.length)===1?void 0:null),a=(c=t.filters)==null?void 0:c.find(_=>_.field===e.field),u=Ne(e,a);return(0,n.jsx)(me.e,{virtualFocus:!0,focusLoop:!0,activeId:r,setActiveId:d,role:"listbox",className:"dataviews-filters__search-widget-listbox","aria-label":(0,w.nv)((0,w.__)("List of: %1$s"),e.name),onFocusVisible:()=>{!r&&e.elements.length&&d(Wt(s,e.elements[0].value))},render:(0,n.jsx)(me.e.Typeahead,{}),children:e.elements.map(_=>(0,n.jsxs)(me.e.Hover,{render:(0,n.jsx)(me.e.Item,{id:Wt(s,_.value),render:(0,n.jsx)("div",{"aria-label":_.label,role:"option",className:"dataviews-filters__search-widget-listitem"}),onClick:()=>{var g,h;const C=a?[...((g=t.filters)!==null&&g!==void 0?g:[]).map(A=>A.field===e.field?{...A,operator:a.operator||e.operators[0],value:ht(e,a,_.value)}:A)]:[...(h=t.filters)!==null&&h!==void 0?h:[],{field:e.field,operator:e.operators[0],value:ht(e,a,_.value)}];o({...t,page:1,filters:C})}}),children:[(0,n.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[e.singleSelection&&u===_.value&&(0,n.jsx)(Z.A,{icon:pe}),!e.singleSelection&&u.includes(_.value)&&(0,n.jsx)(Z.A,{icon:Ve.A})]}),(0,n.jsx)("span",{children:_.label})]},_.value))})}function ze({view:t,filter:e,onChangeView:o}){var c;const[s,r]=(0,l.useState)(""),d=(0,l.useDeferredValue)(s),a=(c=t.filters)==null?void 0:c.find(_=>_.field===e.field),u=Ne(e,a),m=(0,l.useMemo)(()=>{const _=ye(d);return e.elements.filter(g=>ye(g.label).includes(_))},[e.elements,d]);return(0,n.jsxs)(Ct,{selectedValue:u,setSelectedValue:_=>{var g,h;const C=a?[...((g=t.filters)!==null&&g!==void 0?g:[]).map(A=>A.field===e.field?{...A,operator:a.operator||e.operators[0],value:_}:A)]:[...(h=t.filters)!==null&&h!==void 0?h:[],{field:e.field,operator:e.operators[0],value:_}];o({...t,page:1,filters:C})},setValue:r,children:[(0,n.jsxs)("div",{className:"dataviews-filters__search-widget-filter-combobox__wrapper",children:[(0,n.jsx)(ct,{render:(0,n.jsx)(Ie.A,{children:(0,w.__)("Search items")}),children:(0,w.__)("Search items")}),(0,n.jsx)(nt,{autoSelect:"always",placeholder:(0,w.__)("Search"),className:"dataviews-filters__search-widget-filter-combobox__input"}),(0,n.jsx)("div",{className:"dataviews-filters__search-widget-filter-combobox__icon",children:(0,n.jsx)(Z.A,{icon:Xe.A})})]}),(0,n.jsxs)(kt,{className:"dataviews-filters__search-widget-filter-combobox-list",alwaysVisible:!0,children:[m.map(_=>(0,n.jsxs)(ot,{resetValueOnSelect:!1,value:_.value,className:"dataviews-filters__search-widget-listitem",hideOnClick:!1,setValueOnClick:!1,focusOnHover:!0,children:[(0,n.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[e.singleSelection&&u===_.value&&(0,n.jsx)(Z.A,{icon:pe}),!e.singleSelection&&u.includes(_.value)&&(0,n.jsx)(Z.A,{icon:Ve.A})]}),(0,n.jsxs)("span",{children:[(0,n.jsx)(H,{className:"dataviews-filters__search-widget-filter-combobox-item-value",value:_.label}),!!_.description&&(0,n.jsx)("span",{className:"dataviews-filters__search-widget-listitem-description",children:_.description})]})]},_.value)),!m.length&&(0,n.jsx)("p",{children:(0,w.__)("No results found")})]})]})}function Ye(t){const e=t.filter.elements.length>10?ze:gt;return(0,n.jsx)(e,{...t})}const et="Enter",Kt=" ",Ft=({activeElements:t,filterInView:e,filter:o})=>{if(t===void 0||t.length===0)return o.name;const s={Name:(0,n.jsx)("span",{className:"dataviews-filters__summary-filter-text-name"}),Value:(0,n.jsx)("span",{className:"dataviews-filters__summary-filter-text-value"})};return(e==null?void 0:e.operator)===f.ld?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is any: </Name><Value>%2$s</Value>"),o.name,t.map(r=>r.label).join(", ")),s):(e==null?void 0:e.operator)===f.Vw?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is none: </Name><Value>%2$s</Value>"),o.name,t.map(r=>r.label).join(", ")),s):(e==null?void 0:e.operator)===f.y5?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is all: </Name><Value>%2$s</Value>"),o.name,t.map(r=>r.label).join(", ")),s):(e==null?void 0:e.operator)===f.UX?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is not all: </Name><Value>%2$s</Value>"),o.name,t.map(r=>r.label).join(", ")),s):(e==null?void 0:e.operator)===f.gm?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),o.name,t[0].label),s):(e==null?void 0:e.operator)===f._k?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),o.name,t[0].label),s):(0,w.nv)((0,w.__)("Unknown status for %1$s"),o.name)};function xt({filter:t,view:e,onChangeView:o}){var a,u;const s=(a=t.operators)==null?void 0:a.map(m=>{var c;return{value:m,label:(c=f.we[m])==null?void 0:c.label}}),r=(u=e.filters)==null?void 0:u.find(m=>m.field===t.field),d=(r==null?void 0:r.operator)||t.operators[0];return s.length>1&&(0,n.jsxs)(p.A,{spacing:2,justify:"flex-start",className:"dataviews-filters__summary-operators-container",children:[(0,n.jsx)(De.A,{className:"dataviews-filters__summary-operators-filter-name",children:t.name}),(0,n.jsx)(je.A,{label:(0,w.__)("Conditions"),value:d,options:s,onChange:m=>{var c,_;const g=m,h=r?[...((c=e.filters)!==null&&c!==void 0?c:[]).map(C=>C.field===t.field?{...C,operator:g}:C)]:[...(_=e.filters)!==null&&_!==void 0?_:[],{field:t.field,operator:g,value:void 0}];o({...e,page:1,filters:h})},size:"small",__nextHasNoMarginBottom:!0,hideLabelFromVision:!0})]})}function Ks({addFilterRef:t,openedFilter:e,...o}){var h;const s=(0,l.useRef)(null),{filter:r,view:d,onChangeView:a}=o,u=(h=d.filters)==null?void 0:h.find(C=>C.field===r.field),m=r.elements.filter(C=>{var A;return r.singleSelection?C.value===(u==null?void 0:u.value):(A=u==null?void 0:u.value)==null?void 0:A.includes(C.value)}),c=r.isPrimary,_=(u==null?void 0:u.value)!==void 0,g=!c||_;return(0,n.jsx)(G.A,{defaultOpen:e===r.field,contentClassName:"dataviews-filters__summary-popover",popoverProps:{placement:"bottom-start",role:"dialog"},onClose:()=>{var C;(C=s.current)==null||C.focus()},renderToggle:({isOpen:C,onToggle:A})=>(0,n.jsxs)("div",{className:"dataviews-filters__summary-chip-container",children:[(0,n.jsx)(we.Ay,{text:(0,w.nv)((0,w.__)("Filter by: %1$s"),r.name.toLowerCase()),placement:"top",children:(0,n.jsx)("div",{className:(0,$.A)("dataviews-filters__summary-chip",{"has-reset":g,"has-values":_}),role:"button",tabIndex:0,onClick:A,onKeyDown:O=>{[et,Kt].includes(O.key)&&(A(),O.preventDefault())},"aria-pressed":C,"aria-expanded":C,ref:s,children:(0,n.jsx)(Ft,{activeElements:m,filterInView:u,filter:r})})}),g&&(0,n.jsx)(we.Ay,{text:c?(0,w.__)("Reset"):(0,w.__)("Remove"),placement:"top",children:(0,n.jsx)("button",{className:(0,$.A)("dataviews-filters__summary-chip-remove",{"has-values":_}),onClick:()=>{var O,z,U;a({...d,page:1,filters:(O=d.filters)==null?void 0:O.filter(M=>M.field!==r.field)}),c?(U=s.current)==null||U.focus():(z=t.current)==null||z.focus()},children:(0,n.jsx)(Z.A,{icon:Q.A})})})]}),renderContent:()=>(0,n.jsxs)(xe.A,{spacing:0,justify:"flex-start",children:[(0,n.jsx)(xt,{...o}),(0,n.jsx)(Ye,{...o})]})})}var it=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/private-apis.js"),Fs=i("../../../node_modules/.pnpm/@wordpress+private-apis@1.12.0/node_modules/@wordpress/private-apis/build-module/implementation.js");const{lock:Co,unlock:rt}=(0,Fs.yf)("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.","@wordpress/dataviews"),{Menu:Ht}=rt(it.j);function os({filters:t,view:e,onChangeView:o,setOpenedFilter:s,trigger:r}){const d=t.filter(a=>!a.isVisible);return(0,n.jsx)(Ht,{trigger:r,children:d.map(a=>(0,n.jsx)(Ht.Item,{onClick:()=>{s(a.field),o({...e,page:1,filters:[...e.filters||[],{field:a.field,value:void 0,operator:a.operators[0]}]})},children:(0,n.jsx)(Ht.ItemLabel,{children:a.name})},a.field))})}function Hs({filters:t,view:e,onChangeView:o,setOpenedFilter:s},r){if(!t.length||t.every(({isPrimary:a})=>a))return null;const d=t.filter(a=>!a.isVisible);return(0,n.jsx)(os,{trigger:(0,n.jsx)(X.Ay,{accessibleWhenDisabled:!0,size:"compact",className:"dataviews-filters-button",variant:"tertiary",disabled:!d.length,ref:r,children:(0,w.__)("Add filter")}),filters:t,view:e,onChangeView:o,setOpenedFilter:s})}const $s=(0,l.forwardRef)(Hs);function Gs({filters:t,view:e,onChangeView:o}){var d;const s=a=>t.some(u=>u.field===a&&u.isPrimary),r=!e.search&&!((d=e.filters)!=null&&d.some(a=>a.value!==void 0||!s(a.field)));return(0,n.jsx)(X.Ay,{disabled:r,accessibleWhenDisabled:!0,size:"compact",variant:"tertiary",className:"dataviews-filters__reset-button",onClick:()=>{o({...e,page:1,search:"",filters:[]})},children:(0,w.__)("Reset")})}function is(t){var o;let e=(o=t.filterBy)==null?void 0:o.operators;return(!e||!Array.isArray(e))&&(e=[f.ld,f.Vw]),e=e.filter(s=>f.CD.includes(s)),(e.includes(f.gm)||e.includes(f._k))&&(e=e.filter(s=>[f.gm,f._k].includes(s))),e}function rs(t,e){return(0,l.useMemo)(()=>{const o=[];return t.forEach(s=>{var a,u,m;if(!((a=s.elements)!=null&&a.length))return;const r=is(s);if(r.length===0)return;const d=!!((u=s.filterBy)!=null&&u.isPrimary);o.push({field:s.id,name:s.label,elements:s.elements,singleSelection:r.some(c=>[f.gm,f._k].includes(c)),operators:r,isVisible:d||!!((m=e.filters)!=null&&m.some(c=>c.field===s.id&&f.CD.includes(c.operator))),isPrimary:d})}),o.sort((s,r)=>s.isPrimary&&!r.isPrimary?-1:!s.isPrimary&&r.isPrimary?1:s.name.localeCompare(r.name)),o},[t,e])}function Xs({filters:t,view:e,onChangeView:o,setOpenedFilter:s,isShowingFilter:r,setIsShowingFilter:d}){var c,_;const a=(0,l.useCallback)(g=>{o(g),d(!0)},[o,d]),m=!!t.filter(g=>g.isVisible).length;return t.length===0?null:m?(0,n.jsxs)("div",{className:"dataviews-filters__container-visibility-toggle",children:[(0,n.jsx)(X.Ay,{className:"dataviews-filters__visibility-toggle",size:"compact",icon:ce.A,label:(0,w._x)("Filter","verb"),onClick:()=>{r||s(null),d(!r)},isPressed:r,"aria-expanded":r}),m&&!!((c=e.filters)!=null&&c.length)&&(0,n.jsx)("span",{className:"dataviews-filters-toggle__count",children:(_=e.filters)==null?void 0:_.length})]}):(0,n.jsx)(os,{filters:t,view:e,onChangeView:a,setOpenedFilter:s,trigger:(0,n.jsx)(X.Ay,{className:"dataviews-filters__visibility-toggle",size:"compact",icon:ce.A,label:(0,w.__)("Add filter"),isPressed:!1,"aria-expanded":!1})})}function Ys(){const{fields:t,view:e,onChangeView:o,openedFilter:s,setOpenedFilter:r}=(0,l.useContext)(J),d=(0,l.useRef)(null),a=rs(t,e),u=(0,n.jsx)($s,{filters:a,view:e,onChangeView:o,ref:d,setOpenedFilter:r},"add-filter"),m=a.filter(_=>_.isVisible);if(m.length===0)return null;const c=[...m.map(_=>(0,n.jsx)(Ks,{filter:_,view:e,onChangeView:o,addFilterRef:d,openedFilter:s},_.field)),u];return c.push((0,n.jsx)(Gs,{filters:a,view:e,onChangeView:o},"reset-filters")),(0,n.jsx)(p.A,{justify:"flex-start",style:{width:"fit-content"},className:"dataviews-filters__container",wrap:!0,children:c})}const Js=(0,l.memo)(Ys);var Zs=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/block-table.js"),Qs=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/category.js"),qs=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js"),en=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets.js"),$t=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),as=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/checkbox-control/index.js");function ls({selection:t,onChangeSelection:e,item:o,getItemId:s,primaryField:r,disabled:d}){const a=s(o),u=!d&&t.includes(a);let m;return r!=null&&r.getValue&&o?m=(0,w.nv)(u?(0,w.__)("Deselect item: %s"):(0,w.__)("Select item: %s"),r.getValue({item:o})):m=u?(0,w.__)("Select a new item"):(0,w.__)("Deselect item"),(0,n.jsx)(as.A,{className:"dataviews-selection-checkbox",__nextHasNoMarginBottom:!0,"aria-label":m,"aria-disabled":d,checked:u,onChange:()=>{d||e(t.includes(a)?t.filter(c=>a!==c):[...t,a])}})}var tn=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js"),ds=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/more-vertical.js"),bt=i("../../../node_modules/.pnpm/@wordpress+data@10.12.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const{Menu:jt,kebabCase:sn}=rt(it.j);function cs({action:t,onClick:e,items:o}){const s=typeof t.label=="string"?t.label:t.label(o);return(0,n.jsx)(X.Ay,{label:s,icon:t.icon,isDestructive:t.isDestructive,size:"compact",onClick:e})}function us({action:t,onClick:e,items:o}){const s=typeof t.label=="string"?t.label:t.label(o);return(0,n.jsx)(jt.Item,{onClick:e,hideOnClick:!("RenderModal"in t),children:(0,n.jsx)(jt.ItemLabel,{children:s})})}function ms({action:t,items:e,closeModal:o}){const s=typeof t.label=="string"?t.label:t.label(e);return(0,n.jsx)(tn.A,{title:t.modalHeader||s,__experimentalHideHeader:!!t.hideModalHeader,onRequestClose:o!=null?o:()=>{},focusOnMount:"firstContentElement",size:"small",overlayClassName:`dataviews-action-modal dataviews-action-modal__${sn(t.id)}`,children:(0,n.jsx)(t.RenderModal,{items:e,closeModal:o})})}function Gt({action:t,items:e,ActionTrigger:o,isBusy:s}){const[r,d]=(0,l.useState)(!1),a={action:t,onClick:()=>{d(!0)},items:e,isBusy:s};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{...a}),r&&(0,n.jsx)(ms,{action:t,items:e,closeModal:()=>d(!1)})]})}function ps({actions:t,item:e}){const o=(0,bt.A)();return(0,n.jsx)(jt.Group,{children:t.map(s=>"RenderModal"in s?(0,n.jsx)(Gt,{action:s,items:[e],ActionTrigger:us},s.id):(0,n.jsx)(us,{action:s,onClick:()=>{s.callback([e],{registry:o})},items:[e]},s.id))})}function _s({item:t,actions:e,isCompact:o}){const s=(0,bt.A)(),{primaryActions:r,eligibleActions:d}=(0,l.useMemo)(()=>{const a=e.filter(m=>!m.isEligible||m.isEligible(t));return{primaryActions:a.filter(m=>m.isPrimary&&!!m.icon),eligibleActions:a}},[e,t]);return o?(0,n.jsx)(vs,{item:t,actions:d}):(0,n.jsxs)(p.A,{spacing:1,justify:"flex-end",className:"dataviews-item-actions",style:{flexShrink:"0",width:"auto"},children:[!!r.length&&r.map(a=>"RenderModal"in a?(0,n.jsx)(Gt,{action:a,items:[t],ActionTrigger:cs},a.id):(0,n.jsx)(cs,{action:a,onClick:()=>{a.callback([t],{registry:s})},items:[t]},a.id)),(0,n.jsx)(vs,{item:t,actions:d})]})}function vs({item:t,actions:e}){return(0,n.jsx)(jt,{trigger:(0,n.jsx)(X.Ay,{size:"compact",icon:ds.A,label:(0,w.__)("Actions"),accessibleWhenDisabled:!0,disabled:!e.length,className:"dataviews-all-actions-button"}),placement:"bottom-end",children:(0,n.jsx)(ps,{actions:e,item:t})})}function ws(t,e){return(0,l.useMemo)(()=>t.some(o=>o.supportsBulk&&(!o.isEligible||o.isEligible(e))),[t,e])}function fs(t,e){return(0,l.useMemo)(()=>e.some(o=>t.some(s=>s.supportsBulk&&(!s.isEligible||s.isEligible(o)))),[t,e])}function hs({selection:t,onChangeSelection:e,data:o,actions:s,getItemId:r}){const d=(0,l.useMemo)(()=>o.filter(m=>s.some(c=>c.supportsBulk&&(!c.isEligible||c.isEligible(m)))),[o,s]),a=o.filter(m=>t.includes(r(m))&&d.includes(m)),u=a.length===d.length;return(0,n.jsx)(as.A,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:u,indeterminate:!u&&!!a.length,onChange:()=>{e(u?[]:d.map(m=>r(m)))},"aria-label":u?(0,w.__)("Deselect all"):(0,w.__)("Select all")})}function gs({action:t,onClick:e,isBusy:o,items:s}){const r=typeof t.label=="string"?t.label:t.label(s);return(0,n.jsx)(X.Ay,{disabled:o,accessibleWhenDisabled:!0,label:r,icon:t.icon,isDestructive:t.isDestructive,size:"compact",onClick:e,isBusy:o,tooltipPosition:"top"})}const xs=[];function nn({action:t,selectedItems:e,actionInProgress:o,setActionInProgress:s}){const r=(0,bt.A)(),d=(0,l.useMemo)(()=>e.filter(a=>!t.isEligible||t.isEligible(a)),[t,e]);return"RenderModal"in t?(0,n.jsx)(Gt,{action:t,items:d,ActionTrigger:gs},t.id):(0,n.jsx)(gs,{action:t,onClick:async()=>{s(t.id),await t.callback(e,{registry:r}),s(null)},items:d,isBusy:o===t.id},t.id)}function bs(t,e,o,s,r,d,a,u,m){const c=d.length>0?(0,w.nv)((0,w._n)("%d Item selected","%d Items selected",d.length),d.length):(0,w.nv)((0,w._n)("%d Item","%d Items",t.length),t.length);return(0,n.jsxs)(p.A,{expanded:!1,className:"dataviews-bulk-actions-footer__container",spacing:3,children:[(0,n.jsx)(hs,{selection:s,onChangeSelection:m,data:t,actions:e,getItemId:o}),(0,n.jsx)("span",{className:"dataviews-bulk-actions-footer__item-count",children:c}),(0,n.jsxs)(p.A,{className:"dataviews-bulk-actions-footer__action-buttons",expanded:!1,spacing:1,children:[r.map(_=>(0,n.jsx)(nn,{action:_,selectedItems:d,actionInProgress:a,setActionInProgress:u},_.id)),d.length>0&&(0,n.jsx)(X.Ay,{icon:Q.A,showTooltip:!0,tooltipPosition:"top",size:"compact",label:(0,w.__)("Cancel"),disabled:!!a,accessibleWhenDisabled:!1,onClick:()=>{m(xs)}})]})]})}function on({selection:t,actions:e,onChangeSelection:o,data:s,getItemId:r}){const[d,a]=(0,l.useState)(null),u=(0,l.useRef)(null),m=(0,l.useMemo)(()=>e.filter(h=>h.supportsBulk),[e]),c=(0,l.useMemo)(()=>s.filter(h=>m.some(C=>!C.isEligible||C.isEligible(h))),[s,m]),_=(0,l.useMemo)(()=>s.filter(h=>t.includes(r(h))&&c.includes(h)),[t,s,r,c]),g=(0,l.useMemo)(()=>e.filter(h=>h.supportsBulk&&h.icon&&_.some(C=>!h.isEligible||h.isEligible(C))),[e,_]);if(d)u.current||(u.current=bs(s,e,r,t,g,_,d,a,o));else return u.current&&(u.current=null),bs(s,e,r,t,g,_,d,a,o);return u.current}function rn(){const{data:t,selection:e,actions:o=xs,onChangeSelection:s,getItemId:r}=(0,l.useContext)(J);return(0,n.jsx)(on,{selection:e,onChangeSelection:s,data:t,actions:o,getItemId:r})}var an=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),ln=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),js=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js");const{Menu:Ce}=rt(it.j);function dn({children:t}){return l.Children.toArray(t).filter(Boolean).map((e,o)=>(0,n.jsxs)(l.Fragment,{children:[o>0&&(0,n.jsx)(Ce.Separator,{}),e]},o))}const cn=(0,l.forwardRef)(function({fieldId:e,view:o,fields:s,onChangeView:r,onHide:d,setOpenedFilter:a},u){var M,T,S,Y,L,N;const m=tt(o,s),c=m==null?void 0:m.indexOf(e),_=((M=o.sort)==null?void 0:M.field)===e;let g=!1,h=!1,C=!1,A,O=[];const z=(S=(T=o.layout)==null?void 0:T.combinedFields)==null?void 0:S.find(V=>V.id===e),U=s.find(V=>V.id===e);if(z)A=z.header||z.label;else{if(!U)return null;g=U.enableHiding!==!1,h=U.enableSorting!==!1,A=U.header,O=is(U),C=!((Y=o.filters)!=null&&Y.some(V=>e===V.field))&&!!((L=U.elements)!=null&&L.length)&&!!O.length&&!((N=U.filterBy)!=null&&N.isPrimary)}return(0,n.jsx)(Ce,{align:"start",trigger:(0,n.jsxs)(X.Ay,{size:"compact",className:"dataviews-view-table-header-button",ref:u,variant:"tertiary",children:[A,o.sort&&_&&(0,n.jsx)("span",{"aria-hidden":"true",children:f.vI[o.sort.direction]})]}),style:{minWidth:"240px"},children:(0,n.jsxs)(dn,{children:[h&&(0,n.jsx)(Ce.Group,{children:f.GJ.map(V=>{const ie=o.sort&&_&&o.sort.direction===V,D=`${e}-${V}`;return(0,n.jsx)(Ce.RadioItem,{name:"view-table-sorting",value:D,checked:ie,onChange:()=>{r({...o,sort:{field:e,direction:V}})},children:(0,n.jsx)(Ce.ItemLabel,{children:f.CL[V]})},D)})}),C&&(0,n.jsx)(Ce.Group,{children:(0,n.jsx)(Ce.Item,{prefix:(0,n.jsx)(Z.A,{icon:ce.A}),onClick:()=>{a(e),r({...o,page:1,filters:[...o.filters||[],{field:e,value:void 0,operator:O[0]}]})},children:(0,n.jsx)(Ce.ItemLabel,{children:(0,w.__)("Add filter")})})}),(0,n.jsxs)(Ce.Group,{children:[(0,n.jsx)(Ce.Item,{prefix:(0,n.jsx)(Z.A,{icon:an.A}),disabled:c<1,onClick:()=>{var V;r({...o,fields:[...(V=m.slice(0,c-1))!==null&&V!==void 0?V:[],e,m[c-1],...m.slice(c+1)]})},children:(0,n.jsx)(Ce.ItemLabel,{children:(0,w.__)("Move left")})}),(0,n.jsx)(Ce.Item,{prefix:(0,n.jsx)(Z.A,{icon:ln.A}),disabled:c>=m.length-1,onClick:()=>{var V;r({...o,fields:[...(V=m.slice(0,c))!==null&&V!==void 0?V:[],m[c+1],e,...m.slice(c+2)]})},children:(0,n.jsx)(Ce.ItemLabel,{children:(0,w.__)("Move right")})}),g&&U&&(0,n.jsx)(Ce.Item,{prefix:(0,n.jsx)(Z.A,{icon:js.A}),onClick:()=>{d(U),r({...o,fields:m.filter(V=>V!==e)})},children:(0,n.jsx)(Ce.ItemLabel,{children:(0,w.__)("Hide column")})})]})]})})});function Xt(t,e,o,s){return e(t)?{className:`${s} ${s}--clickable`,role:"button",tabIndex:0,onClick:()=>o(t),onKeyDown:r=>{(r.key==="Enter"||r.key==="")&&o(t)}}:{className:s}}function ys({column:t,fields:e,view:o,...s}){var a,u;const r=e.find(m=>m.id===t);if(r)return(0,n.jsx)(un,{...s,field:r});const d=(u=(a=o.layout)==null?void 0:a.combinedFields)==null?void 0:u.find(m=>m.id===t);return d?(0,n.jsx)(mn,{...s,fields:e,view:o,field:d}):null}function un({primaryField:t,item:e,field:o,isItemClickable:s,onClickItem:r}){const d=(t==null?void 0:t.id)===o.id,u=Xt(e,m=>s(m)&&d,r,"dataviews-view-table__cell-content");return(0,n.jsx)("div",{className:(0,$.A)("dataviews-view-table__cell-content-wrapper",{"dataviews-view-table__primary-field":d}),children:(0,n.jsx)("div",{...u,children:(0,n.jsx)(o.render,{item:e})})})}function mn({field:t,...e}){const o=t.children.map(s=>(0,n.jsx)(ys,{...e,column:s},s));return t.direction==="horizontal"?(0,n.jsx)(p.A,{spacing:3,children:o}):(0,n.jsx)(xe.A,{spacing:0,children:o})}function pn({hasBulkActions:t,item:e,actions:o,fields:s,id:r,view:d,primaryField:a,selection:u,getItemId:m,isItemClickable:c,onClickItem:_,onChangeSelection:g}){const h=ws(o,e),C=h&&u.includes(r),[A,O]=(0,l.useState)(!1),z=()=>{O(!0)},U=()=>{O(!1)},M=(0,l.useRef)(!1),T=tt(d,s);return(0,n.jsxs)("tr",{className:(0,$.A)("dataviews-view-table__row",{"is-selected":h&&C,"is-hovered":A,"has-bulk-actions":h}),onMouseEnter:z,onMouseLeave:U,onTouchStart:()=>{M.current=!0},onClick:()=>{var S;h&&!M.current&&((S=document.getSelection())==null?void 0:S.type)!=="Range"&&g(u.includes(r)?u.filter(Y=>r!==Y):[r])},children:[t&&(0,n.jsx)("td",{className:"dataviews-view-table__checkbox-column",style:{width:"1%"},children:(0,n.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,n.jsx)(ls,{item:e,selection:u,onChangeSelection:g,getItemId:m,primaryField:a,disabled:!h})})}),T.map(S=>{var ie,D;var Y;const{width:L,maxWidth:N,minWidth:V}=(Y=(D=(ie=d.layout)==null?void 0:ie.styles)==null?void 0:D[S])!==null&&Y!==void 0?Y:{};return(0,n.jsx)("td",{style:{width:L,maxWidth:N,minWidth:V},children:(0,n.jsx)(ys,{primaryField:a,isItemClickable:c,onClickItem:_,fields:s,item:e,column:S,view:d})},S)}),!!(o!=null&&o.length)&&(0,n.jsx)("td",{className:"dataviews-view-table__actions-column",onClick:S=>S.stopPropagation(),children:(0,n.jsx)(_s,{item:e,actions:o})})]})}function _n({actions:t,data:e,fields:o,getItemId:s,isLoading:r=!1,onChangeView:d,onChangeSelection:a,selection:u,setOpenedFilter:m,onClickItem:c,isItemClickable:_,view:g}){const h=(0,l.useRef)(new Map),C=(0,l.useRef)(),[A,O]=(0,l.useState)(),z=fs(t,e);(0,l.useEffect)(()=>{C.current&&(C.current.focus(),C.current=void 0)});const U=(0,l.useId)();if(A){C.current=A,O(void 0);return}const M=L=>{const N=h.current.get(L.id),V=N?h.current.get(N.fallback):void 0;O(V==null?void 0:V.node)},T=tt(g,o),S=!!(e!=null&&e.length),Y=o.find(L=>{var N;return L.id===((N=g.layout)==null?void 0:N.primaryField)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("table",{className:"dataviews-view-table","aria-busy":r,"aria-describedby":U,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"dataviews-view-table__row",children:[z&&(0,n.jsx)("th",{className:"dataviews-view-table__checkbox-column",style:{width:"1%"},scope:"col",children:(0,n.jsx)(hs,{selection:u,onChangeSelection:a,data:e,actions:t,getItemId:s})}),T.map((L,N)=>{var be,B,ee;var V;const{width:ie,maxWidth:D,minWidth:re}=(V=(B=(be=g.layout)==null?void 0:be.styles)==null?void 0:B[L])!==null&&V!==void 0?V:{};return(0,n.jsx)("th",{style:{width:ie,maxWidth:D,minWidth:re},"aria-sort":((ee=g.sort)==null?void 0:ee.field)===L?f.LW[g.sort.direction]:void 0,scope:"col",children:(0,n.jsx)(cn,{ref:ae=>{ae?h.current.set(L,{node:ae,fallback:T[N>0?N-1:1]}):h.current.delete(L)},fieldId:L,view:g,fields:o,onChangeView:d,onHide:M,setOpenedFilter:m})},L)}),!!(t!=null&&t.length)&&(0,n.jsx)("th",{className:"dataviews-view-table__actions-column",children:(0,n.jsx)("span",{className:"dataviews-view-table-header",children:(0,w.__)("Actions")})})]})}),(0,n.jsx)("tbody",{children:S&&e.map((L,N)=>(0,n.jsx)(pn,{item:L,hasBulkActions:z,actions:t,fields:o,id:s(L)||N.toString(),view:g,primaryField:Y,selection:u,getItemId:s,onChangeSelection:a,onClickItem:c,isItemClickable:_},s(L)))})]}),(0,n.jsx)("div",{className:(0,$.A)({"dataviews-loading":r,"dataviews-no-results":!S&&!r}),id:U,children:!S&&(0,n.jsx)("p",{children:r?(0,n.jsx)($t.Ay,{}):(0,w.__)("No results")})})]})}const vn=_n;var wn=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/component.js"),Yt=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js");function fn({selection:t,onChangeSelection:e,onClickItem:o,isItemClickable:s,getItemId:r,item:d,actions:a,mediaField:u,primaryField:m,visibleFields:c,badgeFields:_,columnFields:g}){const h=ws(a,d),C=r(d),A=t.includes(C),O=u!=null&&u.render?(0,n.jsx)(u.render,{item:d}):null,z=m!=null&&m.render?(0,n.jsx)(m.render,{item:d}):null,U=Xt(d,s,o,"dataviews-view-grid__media"),M=Xt(d,s,o,"dataviews-view-grid__primary-field");return(0,n.jsxs)(xe.A,{spacing:0,className:(0,$.A)("dataviews-view-grid__card",{"is-selected":h&&A}),onClickCapture:T=>{if(T.ctrlKey||T.metaKey){if(T.stopPropagation(),T.preventDefault(),!h)return;e(t.includes(C)?t.filter(S=>C!==S):[...t,C])}},children:[(0,n.jsx)("div",{...U,children:O}),(0,n.jsx)(ls,{item:d,selection:t,onChangeSelection:e,getItemId:r,primaryField:m,disabled:!h}),(0,n.jsxs)(p.A,{justify:"space-between",className:"dataviews-view-grid__title-actions",children:[(0,n.jsx)(p.A,{children:(0,n.jsx)("div",{...M,children:z})}),(0,n.jsx)(_s,{item:d,actions:a,isCompact:!0})]}),!!(_!=null&&_.length)&&(0,n.jsx)(p.A,{className:"dataviews-view-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:_.map(T=>(0,n.jsx)(De.A,{className:"dataviews-view-grid__field-value",children:(0,n.jsx)(T.render,{item:d})},T.id))}),!!(c!=null&&c.length)&&(0,n.jsx)(xe.A,{className:"dataviews-view-grid__fields",spacing:1,children:c.map(T=>(0,n.jsx)(wn.A,{className:(0,$.A)("dataviews-view-grid__field",g!=null&&g.includes(T.id)?"is-column":"is-row"),gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:g!=null&&g.includes(T.id)?"column":"row",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(De.A,{className:"dataviews-view-grid__field-name",children:T.header}),(0,n.jsx)(De.A,{className:"dataviews-view-grid__field-value",style:{maxHeight:"none"},children:(0,n.jsx)(T.render,{item:d})})]})},T.id))})]},C)}function hn({actions:t,data:e,fields:o,getItemId:s,isLoading:r,onChangeSelection:d,onClickItem:a,isItemClickable:u,selection:m,view:c,density:_}){const g=o.find(M=>{var T;return M.id===((T=c.layout)==null?void 0:T.mediaField)}),h=o.find(M=>{var T;return M.id===((T=c.layout)==null?void 0:T.primaryField)}),C=c.fields||o.map(M=>M.id),{visibleFields:A,badgeFields:O}=o.reduce((M,T)=>{var Y,L,N,V;if(!C.includes(T.id)||[(Y=c.layout)==null?void 0:Y.mediaField,(L=c==null?void 0:c.layout)==null?void 0:L.primaryField].includes(T.id))return M;const S=(V=(N=c.layout)==null?void 0:N.badgeFields)!=null&&V.includes(T.id)?"badgeFields":"visibleFields";return M[S].push(T),M},{visibleFields:[],badgeFields:[]}),z=!!(e!=null&&e.length),U=_?{gridTemplateColumns:`repeat(${_}, minmax(0, 1fr))`}:{};return(0,n.jsxs)(n.Fragment,{children:[z&&(0,n.jsx)(Yt.A,{gap:8,columns:2,alignment:"top",className:"dataviews-view-grid",style:U,"aria-busy":r,children:e.map(M=>{var T;return(0,n.jsx)(fn,{selection:m,onChangeSelection:d,onClickItem:a,isItemClickable:u,getItemId:s,item:M,actions:t,mediaField:g,primaryField:h,visibleFields:A,badgeFields:O,columnFields:(T=c.layout)==null?void 0:T.columnFields},s(M))})}),!z&&(0,n.jsx)("div",{className:(0,$.A)({"dataviews-loading":r,"dataviews-no-results":!r}),children:(0,n.jsx)("p",{children:r?(0,n.jsx)($t.Ay,{}):(0,w.__)("No results")})})]})}var gn=i("../../../node_modules/.pnpm/@wordpress+compose@7.12.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js");const{Menu:xn}=rt(it.j);function Jt(t){return`${t}-item-wrapper`}function bn(t,e){return`${t}-primary-action-${e}`}function Zt(t){return`${t}-dropdown`}function jn({idPrefix:t,primaryAction:e,item:o}){const s=(0,bt.A)(),[r,d]=(0,l.useState)(!1),a=bn(t,e.id),u=typeof e.label=="string"?e.label:e.label([o]);return"RenderModal"in e?(0,n.jsx)("div",{role:"gridcell",children:(0,n.jsx)(me.e.Item,{id:a,render:(0,n.jsx)(X.Ay,{label:u,icon:e.icon,isDestructive:e.isDestructive,size:"small",onClick:()=>d(!0)}),children:r&&(0,n.jsx)(ms,{action:e,items:[o],closeModal:()=>d(!1)})})},e.id):(0,n.jsx)("div",{role:"gridcell",children:(0,n.jsx)(me.e.Item,{id:a,render:(0,n.jsx)(X.Ay,{label:u,icon:e.icon,isDestructive:e.isDestructive,size:"small",onClick:()=>{e.callback([o],{registry:s})}})})},e.id)}function yn({actions:t,idPrefix:e,isSelected:o,item:s,mediaField:r,onSelect:d,primaryField:a,visibleFields:u,onDropdownTriggerKeyDown:m}){const c=(0,l.useRef)(null),_=`${e}-label`,g=`${e}-description`,[h,C]=(0,l.useState)(!1),A=({type:S})=>{C(S==="mouseenter")};(0,l.useEffect)(()=>{var S;o&&((S=c.current)==null||S.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"}))},[o]);const{primaryAction:O,eligibleActions:z}=(0,l.useMemo)(()=>{const S=t.filter(L=>!L.isEligible||L.isEligible(s)),Y=S.filter(L=>L.isPrimary&&!!L.icon);return{primaryAction:Y==null?void 0:Y[0],eligibleActions:S}},[t,s]),U=r!=null&&r.render?(0,n.jsx)("div",{className:"dataviews-view-list__media-wrapper",children:(0,n.jsx)(r.render,{item:s})}):null,M=a!=null&&a.render?(0,n.jsx)(a.render,{item:s}):null,T=(z==null?void 0:z.length)>0&&(0,n.jsxs)(p.A,{spacing:3,className:"dataviews-view-list__item-actions",children:[O&&(0,n.jsx)(jn,{idPrefix:e,primaryAction:O,item:s}),(0,n.jsx)("div",{role:"gridcell",children:(0,n.jsx)(xn,{trigger:(0,n.jsx)(me.e.Item,{id:Zt(e),render:(0,n.jsx)(X.Ay,{size:"small",icon:ds.A,label:(0,w.__)("Actions"),accessibleWhenDisabled:!0,disabled:!t.length,onKeyDown:m})}),placement:"bottom-end",children:(0,n.jsx)(ps,{actions:z,item:s})})})]});return(0,n.jsx)(me.e.Row,{ref:c,render:(0,n.jsx)("li",{}),role:"row",className:(0,$.A)({"is-selected":o,"is-hovered":h}),onMouseEnter:A,onMouseLeave:A,children:(0,n.jsxs)(p.A,{className:"dataviews-view-list__item-wrapper",spacing:0,children:[(0,n.jsx)("div",{role:"gridcell",children:(0,n.jsx)(me.e.Item,{id:Jt(e),"aria-pressed":o,"aria-labelledby":_,"aria-describedby":g,className:"dataviews-view-list__item",onClick:()=>d(s)})}),(0,n.jsxs)(p.A,{spacing:3,justify:"start",alignment:"flex-start",children:[U,(0,n.jsxs)(xe.A,{spacing:1,className:"dataviews-view-list__field-wrapper",children:[(0,n.jsxs)(p.A,{spacing:0,children:[(0,n.jsx)("div",{className:"dataviews-view-list__primary-field",id:_,children:M}),T]}),(0,n.jsx)("div",{className:"dataviews-view-list__fields",id:g,children:u.map(S=>(0,n.jsxs)("div",{className:"dataviews-view-list__field",children:[(0,n.jsx)(Ie.A,{as:"span",className:"dataviews-view-list__field-label",children:S.label}),(0,n.jsx)("span",{className:"dataviews-view-list__field-value",children:(0,n.jsx)(S.render,{item:s})})]},S.id))})]})]})]})})}function As(t){const{actions:e,data:o,fields:s,getItemId:r,isLoading:d,onChangeSelection:a,selection:u,view:m}=t,c=(0,_e.A)(As,"view-list"),_=o==null?void 0:o.findLast(D=>u.includes(r(D))),g=s.find(D=>{var re;return D.id===((re=m.layout)==null?void 0:re.mediaField)}),h=s.find(D=>{var re;return D.id===((re=m.layout)==null?void 0:re.primaryField)}),C=m.fields||s.map(D=>D.id),A=s.filter(D=>{var re,be;return C.includes(D.id)&&![(re=m.layout)==null?void 0:re.primaryField,(be=m.layout)==null?void 0:be.mediaField].includes(D.id)}),O=D=>a([r(D)]),z=(0,l.useCallback)(D=>`${c}-${r(D)}`,[c,r]),U=(0,l.useCallback)((D,re)=>re.startsWith(z(D)),[z]),[M,T]=(0,l.useState)(void 0);(0,l.useEffect)(()=>{_&&T(Jt(z(_)))},[_,z]);const S=o.findIndex(D=>U(D,M!=null?M:"")),Y=(0,gn.A)(S),L=S!==-1,N=(0,l.useCallback)((D,re)=>{var ae;const be=Math.min(o.length-1,Math.max(0,D));if(!o[be])return;const B=z(o[be]),ee=re(B);T(ee),(ae=document.getElementById(ee))==null||ae.focus()},[o,z]);(0,l.useEffect)(()=>{!L&&(Y!==void 0&&Y!==-1)&&N(Y,Jt)},[L,N,Y]);const V=(0,l.useCallback)(D=>{D.key==="ArrowDown"&&(D.preventDefault(),N(S+1,Zt)),D.key==="ArrowUp"&&(D.preventDefault(),N(S-1,Zt))},[N,S]),ie=o==null?void 0:o.length;return ie?(0,n.jsx)(me.e,{id:c,render:(0,n.jsx)("ul",{}),className:"dataviews-view-list",role:"grid",activeId:M,setActiveId:T,children:o.map(D=>{const re=z(D);return(0,n.jsx)(yn,{idPrefix:re,actions:e,item:D,isSelected:D===_,onSelect:O,mediaField:g,primaryField:h,visibleFields:A,onDropdownTriggerKeyDown:V},re)})}):(0,n.jsx)("div",{className:(0,$.A)({"dataviews-loading":d,"dataviews-no-results":!ie&&!d}),children:!ie&&(0,n.jsx)("p",{children:d?(0,n.jsx)($t.Ay,{}):(0,w.__)("No results")})})}const Qt=[{type:f.Ad,label:(0,w.__)("Table"),component:vn,icon:Zs.A},{type:f.Ul,label:(0,w.__)("Grid"),component:hn,icon:Qs.A},{type:f.mA,label:(0,w.__)("List"),component:As,icon:(0,w.V8)()?qs.A:en.A}];function An(t){var o,s,r,d,a,u,m;if(t.type==="table"){var e;return[(o=t.layout)==null?void 0:o.primaryField].concat((e=(r=(s=t.layout)==null?void 0:s.combinedFields)==null?void 0:r.flatMap(c=>c.children))!==null&&e!==void 0?e:[]).filter(c=>!!c)}return t.type==="grid"?[(d=t.layout)==null?void 0:d.primaryField,(a=t.layout)==null?void 0:a.mediaField].filter(c=>!!c):t.type==="list"?[(u=t.layout)==null?void 0:u.primaryField,(m=t.layout)==null?void 0:m.mediaField].filter(c=>!!c):[]}function Es(t){var o;const e=[];return t.type===f.Ad&&((o=t.layout)!=null&&o.combinedFields)&&t.layout.combinedFields.forEach(s=>{e.push(...s.children)}),e}function tt(t,e){var r;const o=Es(t);if(t.fields)return t.fields.filter(d=>!o.includes(d));const s=[];return t.type===f.Ad&&((r=t.layout)!=null&&r.combinedFields)&&s.push(...t.layout.combinedFields.map(({id:d})=>d)),s.push(...e.filter(({id:d})=>!o.includes(d)).map(({id:d})=>d)),s}function En(t,e){var s,r,d,a;const o=[...Es(t),...tt(t,e)];return t.type===f.Ul&&((s=t.layout)!=null&&s.mediaField)&&o.push((r=t.layout)==null?void 0:r.mediaField),t.type===f.mA&&((d=t.layout)!=null&&d.mediaField)&&o.push((a=t.layout)==null?void 0:a.mediaField),e.filter(({id:u,enableHiding:m})=>!o.includes(u)&&m).map(({id:u})=>u)}function Cn(){var A;const{actions:t=[],data:e,fields:o,getItemId:s,isLoading:r,view:d,onChangeView:a,selection:u,onChangeSelection:m,setOpenedFilter:c,density:_,onClickItem:g,isItemClickable:h}=(0,l.useContext)(J),C=(A=Qt.find(O=>O.type===d.type))==null?void 0:A.component;return(0,n.jsx)(C,{actions:t,data:e,fields:o,getItemId:s,isLoading:r,onChangeView:a,onChangeSelection:m,selection:u,setOpenedFilter:c,onClickItem:g,isItemClickable:h,view:d,density:_})}var Cs=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/next.js"),Ps=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/previous.js");function Pn(){var t;const{view:e,onChangeView:o,paginationInfo:{totalItems:s=0,totalPages:r}}=(0,l.useContext)(J);if(!s||!r)return null;const d=(t=e.page)!==null&&t!==void 0?t:1,a=Array.from(Array(r)).map((u,m)=>{const c=m+1;return{value:c.toString(),label:c.toString(),"aria-label":d===c?(0,w.nv)((0,w.__)("Page %1$s of %2$s"),d,r):c.toString()}});return!!s&&r!==1&&(0,n.jsxs)(p.A,{expanded:!1,className:"dataviews-pagination",justify:"end",spacing:6,children:[(0,n.jsx)(p.A,{justify:"flex-start",expanded:!1,spacing:1,className:"dataviews-pagination__page-select",children:(0,k.A)((0,w.nv)((0,w._x)("<div>Page</div>%1$s<div>of %2$s</div>","paging"),"<CurrentPage />",r),{div:(0,n.jsx)("div",{"aria-hidden":!0}),CurrentPage:(0,n.jsx)(je.A,{"aria-label":(0,w.__)("Current page"),value:d.toString(),options:a,onChange:u=>{o({...e,page:+u})},size:"small",__nextHasNoMarginBottom:!0,variant:"minimal"})})}),(0,n.jsxs)(p.A,{expanded:!1,spacing:1,children:[(0,n.jsx)(X.Ay,{onClick:()=>o({...e,page:d-1}),disabled:d===1,accessibleWhenDisabled:!0,label:(0,w.__)("Previous page"),icon:(0,w.V8)()?Cs.A:Ps.A,showTooltip:!0,size:"compact",tooltipPosition:"top"}),(0,n.jsx)(X.Ay,{onClick:()=>o({...e,page:d+1}),disabled:d>=r,accessibleWhenDisabled:!0,label:(0,w.__)("Next page"),icon:(0,w.V8)()?Ps.A:Cs.A,showTooltip:!0,size:"compact",tooltipPosition:"top"})]})]})}const On=(0,l.memo)(Pn),Mn=[];function Dn(){const{view:t,paginationInfo:{totalItems:e=0,totalPages:o},data:s,actions:r=Mn}=(0,l.useContext)(J),d=fs(r,s)&&[f.Ad,f.Ul].includes(t.type);return!e||!o||o<=1&&!d?null:!!e&&(0,n.jsxs)(p.A,{expanded:!1,justify:"end",className:"dataviews-footer",children:[d&&(0,n.jsx)(rn,{}),(0,n.jsx)(On,{})]})}var In=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/search-control/index.js"),Tn=i("../../../node_modules/.pnpm/@wordpress+compose@7.12.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounced-input/index.js");const Sn=(0,l.memo)(function({label:e}){const{view:o,onChangeView:s}=(0,l.useContext)(J),[r,d,a]=(0,Tn.A)(o.search);(0,l.useEffect)(()=>{var _;d((_=o.search)!==null&&_!==void 0?_:"")},[o.search,d]);const u=(0,l.useRef)(s),m=(0,l.useRef)(o);(0,l.useEffect)(()=>{u.current=s,m.current=o},[s,o]),(0,l.useEffect)(()=>{var _;a!==((_=m.current)==null?void 0:_.search)&&u.current({...m.current,page:1,search:a})},[a]);const c=e||(0,w.__)("Search");return(0,n.jsx)(In.A,{className:"dataviews-search",__nextHasNoMarginBottom:!0,onChange:d,value:r,label:c,placeholder:c,size:"compact"})});var Os=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js"),kn=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js"),Ln=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js"),Rn=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item/component.js"),Ms=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item-group/component.js"),Vn=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),Bn=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/heading/component.js"),Nn=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),zn=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/dropdown-content-wrapper.js"),Un=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),Wn=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),Kn=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js"),Fn=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cog.js"),Ds=i("../../../node_modules/.pnpm/@wordpress+warning@3.11.0/node_modules/@wordpress/warning/build-module/index.js"),Hn=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),at=i("../../../node_modules/.pnpm/@wordpress+compose@7.12.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js");const Is={xhuge:{min:3,max:6,default:5},huge:{min:2,max:4,default:4},xlarge:{min:2,max:3,default:3},large:{min:1,max:2,default:2},mobile:{min:1,max:2,default:2}};function $n(){const t=(0,at.A)("xhuge",">="),e=(0,at.A)("huge",">="),o=(0,at.A)("xlarge",">="),s=(0,at.A)("large",">="),r=(0,at.A)("mobile",">=");return t?"xhuge":e?"huge":o?"xlarge":s?"large":r?"mobile":null}function Gn({density:t,setDensity:e}){const o=$n();(0,l.useEffect)(()=>{e(a=>{if(!o||!a)return 0;const u=Is[o];return a<u.min?u.min:a>u.max?u.max:a})},[e,o]);const s=Is[o||"mobile"],r=t||s.default,d=(0,l.useMemo)(()=>Array.from({length:s.max-s.min+1},(a,u)=>({value:s.min+u})),[s]);return o?(0,n.jsx)(Hn.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,showTooltip:!1,label:(0,w.__)("Preview size"),value:s.max+s.min-r,marks:d,min:s.min,max:s.max,withInputField:!1,onChange:(a=0)=>{e(s.max+s.min-a)},step:1}):null}const{Menu:qt}=rt(it.j),Xn={placement:"bottom-end",offset:9};function Yn({defaultLayouts:t={list:{},grid:{},table:{}}}){const{view:e,onChangeView:o}=(0,l.useContext)(J),s=Object.keys(t);if(s.length<=1)return null;const r=Qt.find(d=>e.type===d.type);return(0,n.jsx)(qt,{trigger:(0,n.jsx)(X.Ay,{size:"compact",icon:r==null?void 0:r.icon,label:(0,w.__)("Layout")}),children:s.map(d=>{const a=Qt.find(u=>u.type===d);return a?(0,n.jsx)(qt.RadioItem,{value:d,name:"view-actions-available-view",checked:d===e.type,hideOnClick:!0,onChange:u=>{switch(u.target.value){case"list":case"grid":case"table":return o({...e,type:u.target.value,...t[u.target.value]})}globalThis.SCRIPT_DEBUG===!0&&(0,Ds.A)("Invalid dataview")},children:(0,n.jsx)(qt.ItemLabel,{children:a.label})},d):null})})}function Jn(){var r;const{view:t,fields:e,onChangeView:o}=(0,l.useContext)(J),s=(0,l.useMemo)(()=>e.filter(a=>a.enableSorting!==!1).map(a=>({label:a.label,value:a.id})),[e]);return(0,n.jsx)(je.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,w.__)("Sort by"),value:(r=t.sort)==null?void 0:r.field,options:s,onChange:d=>{var a;o({...t,sort:{direction:((a=t==null?void 0:t.sort)==null?void 0:a.direction)||"desc",field:d}})}})}function Zn(){var d,a;const{view:t,fields:e,onChangeView:o}=(0,l.useContext)(J);if(e.filter(u=>u.enableSorting!==!1).length===0)return null;let r=(d=t.sort)==null?void 0:d.direction;return!r&&((a=t.sort)!=null&&a.field)&&(r="desc"),(0,n.jsx)(Os.A,{className:"dataviews-view-config__sort-direction",__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,w.__)("Order"),value:r,onChange:u=>{var m,c;if(u==="asc"||u==="desc"){o({...t,sort:{direction:u,field:((m=t.sort)==null?void 0:m.field)||((c=e.find(_=>_.enableSorting!==!1))==null?void 0:c.id)||""}});return}globalThis.SCRIPT_DEBUG===!0&&(0,Ds.A)("Invalid direction")},children:f.GJ.map(u=>(0,n.jsx)(kn.A,{value:u,icon:f.ls[u],label:f.CL[u]},u))})}const Qn=[10,20,50,100];function qn(){var o;const{view:t,onChangeView:e}=(0,l.useContext)(J);return(0,n.jsx)(Os.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,w.__)("Items per page"),value:t.perPage||10,disabled:!((o=t==null?void 0:t.sort)!=null&&o.field),onChange:s=>{const r=typeof s=="number"||s===void 0?s:parseInt(s,10);e({...t,perPage:r,page:1})},children:Qn.map(s=>(0,n.jsx)(Ln.A,{value:s,label:s.toString()},s))})}function Ts({field:{id:t,label:e,index:o,isVisible:s,isHidable:r},fields:d,view:a,onChangeView:u}){const m=tt(a,d);return(0,n.jsx)(Rn.A,{children:(0,n.jsxs)(p.A,{expanded:!0,className:`dataviews-field-control__field dataviews-field-control__field-${t}`,children:[(0,n.jsx)("span",{children:e}),(0,n.jsxs)(p.A,{justify:"flex-end",expanded:!1,className:"dataviews-field-control__actions",children:[a.type===f.Ad&&s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(X.Ay,{disabled:o<1,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{var c;u({...a,fields:[...(c=m.slice(0,o-1))!==null&&c!==void 0?c:[],t,m[o-1],...m.slice(o+1)]})},icon:Un.A,label:(0,w.nv)((0,w.__)("Move %s up"),e)}),(0,n.jsx)(X.Ay,{disabled:o>=m.length-1,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{var c;u({...a,fields:[...(c=m.slice(0,o))!==null&&c!==void 0?c:[],m[o+1],t,...m.slice(o+2)]})},icon:Wn.A,label:(0,w.nv)((0,w.__)("Move %s down"),e)})," "]}),(0,n.jsx)(X.Ay,{className:"dataviews-field-control__field-visibility-button",disabled:!r,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{u({...a,fields:s?m.filter(c=>c!==t):[...m,t]}),setTimeout(()=>{const c=document.querySelector(`.dataviews-field-control__field-${t} .dataviews-field-control__field-visibility-button`);c instanceof HTMLElement&&c.focus()},50)},icon:s?js.A:Kn.A,label:s?(0,w.nv)((0,w._x)("Hide %s","field"),e):(0,w.nv)((0,w._x)("Show %s","field"),e)})]})]})},t)}function eo(){var m;const{view:t,fields:e,onChangeView:o}=(0,l.useContext)(J),s=(0,l.useMemo)(()=>tt(t,e),[t,e]),r=(0,l.useMemo)(()=>En(t,e),[t,e]),d=(0,l.useMemo)(()=>An(t),[t]),a=e.filter(({id:c})=>s.includes(c)).map(({id:c,label:_,enableHiding:g})=>({id:c,label:_,index:s.indexOf(c),isVisible:!0,isHidable:d.includes(c)?!1:g}));t.type===f.Ad&&((m=t.layout)!=null&&m.combinedFields)&&t.layout.combinedFields.forEach(({id:c,label:_})=>{a.push({id:c,label:_,index:s.indexOf(c),isVisible:!0,isHidable:d.includes(c)})}),a.sort((c,_)=>c.index-_.index);const u=e.filter(({id:c})=>r.includes(c)).map(({id:c,label:_,enableHiding:g},h)=>({id:c,label:_,index:h,isVisible:!1,isHidable:g}));return!(a!=null&&a.length)&&!(u!=null&&u.length)?null:(0,n.jsxs)(xe.A,{spacing:6,className:"dataviews-field-control",children:[!!(a!=null&&a.length)&&(0,n.jsx)(Ms.A,{isBordered:!0,isSeparated:!0,children:a.map(c=>(0,n.jsx)(Ts,{field:c,fields:e,view:t,onChangeView:o},c.id))}),!!(u!=null&&u.length)&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(xe.A,{spacing:4,children:[(0,n.jsx)(Vn.Ay.VisualLabel,{style:{margin:0},children:(0,w.__)("Hidden")}),(0,n.jsx)(Ms.A,{isBordered:!0,isSeparated:!0,children:u.map(c=>(0,n.jsx)(Ts,{field:c,fields:e,view:t,onChangeView:o},c.id))})]})})]})}function Ss({title:t,description:e,children:o}){return(0,n.jsxs)(Yt.A,{columns:12,className:"dataviews-settings-section",gap:4,children:[(0,n.jsxs)("div",{className:"dataviews-settings-section__sidebar",children:[(0,n.jsx)(Bn.A,{level:2,className:"dataviews-settings-section__title",children:t}),e&&(0,n.jsx)(Nn.A,{variant:"muted",className:"dataviews-settings-section__description",children:e})]}),(0,n.jsx)(Yt.A,{columns:8,gap:4,className:"dataviews-settings-section__content",children:o})]})}function to({density:t,setDensity:e}){const{view:o}=(0,l.useContext)(J),s=(0,_e.A)(ks,"dataviews-view-config-dropdown");return(0,n.jsx)(G.A,{popoverProps:{...Xn,id:s},renderToggle:({onToggle:r,isOpen:d})=>(0,n.jsx)(X.Ay,{size:"compact",icon:Fn.A,label:(0,w._x)("View options","View is used as a noun"),onClick:r,"aria-expanded":d?"true":"false","aria-controls":s}),renderContent:()=>(0,n.jsx)(zn.A,{paddingSize:"medium",children:(0,n.jsxs)(xe.A,{className:"dataviews-view-config",spacing:6,children:[(0,n.jsxs)(Ss,{title:(0,w.__)("Appearance"),children:[(0,n.jsxs)(p.A,{expanded:!0,className:"is-divided-in-two",children:[(0,n.jsx)(Jn,{}),(0,n.jsx)(Zn,{})]}),o.type===f.Ul&&(0,n.jsx)(Gn,{density:t,setDensity:e}),(0,n.jsx)(qn,{})]}),(0,n.jsx)(Ss,{title:(0,w.__)("Properties"),children:(0,n.jsx)(eo,{})})]})})})}function ks({density:t,setDensity:e,defaultLayouts:o={list:{},grid:{},table:{}}}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Yn,{defaultLayouts:o}),(0,n.jsx)(to,{density:t,setDensity:e})]})}const so=(0,l.memo)(ks);var no=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.8.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js");const oo=t=>t.id,io=()=>!1,ro=()=>{},ao=[];function lo({view:t,onChangeView:e,fields:o,search:s=!0,searchLabel:r=void 0,actions:d=ao,data:a,getItemId:u=oo,isLoading:m=!1,paginationInfo:c,defaultLayouts:_,selection:g,onChangeSelection:h,onClickItem:C=ro,isItemClickable:A=io,header:O}){const[z,U]=(0,l.useState)([]),[M,T]=(0,l.useState)(0),S=g===void 0||h===void 0,Y=S?z:g,[L,N]=(0,l.useState)(null);function V(ee){const ae=typeof ee=="function"?ee(Y):ee;S&&U(ae),h&&h(ae)}const ie=(0,l.useMemo)(()=>(0,no.t)(o),[o]),D=(0,l.useMemo)(()=>Y.filter(ee=>a.some(ae=>u(ae)===ee)),[Y,a,u]),re=rs(ie,t),[be,B]=(0,l.useState)(()=>(re||[]).some(ee=>ee.isPrimary));return(0,n.jsx)(J.Provider,{value:{view:t,onChangeView:e,fields:ie,actions:d,data:a,isLoading:m,paginationInfo:c,selection:D,onChangeSelection:V,openedFilter:L,setOpenedFilter:N,getItemId:u,isItemClickable:A,onClickItem:C,density:M},children:(0,n.jsxs)("div",{className:"dataviews-wrapper",children:[(0,n.jsxs)(p.A,{alignment:"top",justify:"space-between",className:"dataviews__view-actions",spacing:1,children:[(0,n.jsxs)(p.A,{justify:"start",expanded:!1,className:"dataviews__search",children:[s&&(0,n.jsx)(Sn,{label:r}),(0,n.jsx)(Xs,{filters:re,view:t,onChangeView:e,setOpenedFilter:N,setIsShowingFilter:B,isShowingFilter:be})]}),(0,n.jsxs)(p.A,{spacing:1,expanded:!1,style:{flexShrink:0},children:[(0,n.jsx)(so,{defaultLayouts:_,density:M,setDensity:T}),O]})]}),be&&(0,n.jsx)(Js,{}),(0,n.jsx)(Cn,{}),(0,n.jsx)(Dn,{})]})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.8.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/constants.js":(K,b,i)=>{i.d(b,{Ad:()=>Q,CD:()=>De,CL:()=>xe,GJ:()=>G,LW:()=>Z,UX:()=>$,Ul:()=>R,Vw:()=>ce,_k:()=>J,gm:()=>y,ld:()=>X,ls:()=>k,mA:()=>te,vI:()=>we,we:()=>je,y5:()=>w});var p=i("../../../node_modules/.pnpm/@wordpress+i18n@5.12.0/node_modules/@wordpress/i18n/build-module/index.js"),l=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),f=i("../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-down.js");const y="is",J="isNot",X="isAny",ce="isNone",w="isAll",$="isNotAll",De=[y,J,X,ce,w,$],je={[y]:{key:"is-filter",label:(0,p.__)("Is")},[J]:{key:"is-not-filter",label:(0,p.__)("Is not")},[X]:{key:"is-any-filter",label:(0,p.__)("Is any")},[ce]:{key:"is-none-filter",label:(0,p.__)("Is none")},[w]:{key:"is-all-filter",label:(0,p.__)("Is all")},[$]:{key:"is-not-all-filter",label:(0,p.__)("Is not all")}},G=["asc","desc"],we={asc:"\u2191",desc:"\u2193"},Z={asc:"ascending",desc:"descending"},xe={asc:(0,p.__)("Sort ascending"),desc:(0,p.__)("Sort descending")},k={asc:l.A,desc:f.A},Q="table",R="grid",te="list"},"../../../node_modules/.pnpm/@wordpress+dataviews@4.8.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/filter-and-sort-data-view.js":(K,b,i)=>{i.d(b,{P:()=>ce});var p=i("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),l=i.n(p),f=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.8.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/constants.js"),y=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.8.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js");function J(w=""){return l()(w.trim().toLowerCase())}const X=[];function ce(w,$,De){var xe;if(!w)return{data:X,paginationInfo:{totalItems:0,totalPages:0}};const je=(0,y.t)(De);let G=[...w];if($.search){const k=J($.search);G=G.filter(Q=>je.filter(R=>R.enableGlobalSearch).map(R=>J(R.getValue({item:Q}))).some(R=>R.includes(k)))}if($.filters&&((xe=$.filters)==null?void 0:xe.length)>0&&$.filters.forEach(k=>{var R,te,Pe,Re;const Q=je.find(q=>q.id===k.field);Q&&(k.operator===f.ld&&((R=k==null?void 0:k.value)==null?void 0:R.length)>0?G=G.filter(q=>{const le=Q.getValue({item:q});return Array.isArray(le)?k.value.some(fe=>le.includes(fe)):typeof le=="string"?k.value.includes(le):!1}):k.operator===f.Vw&&((te=k==null?void 0:k.value)==null?void 0:te.length)>0?G=G.filter(q=>{const le=Q.getValue({item:q});return Array.isArray(le)?!k.value.some(fe=>le.includes(fe)):typeof le=="string"?!k.value.includes(le):!1}):k.operator===f.y5&&((Pe=k==null?void 0:k.value)==null?void 0:Pe.length)>0?G=G.filter(q=>k.value.every(le=>{var fe;return(fe=Q.getValue({item:q}))==null?void 0:fe.includes(le)})):k.operator===f.UX&&((Re=k==null?void 0:k.value)==null?void 0:Re.length)>0?G=G.filter(q=>k.value.every(le=>{var fe;return!((fe=Q.getValue({item:q}))!=null&&fe.includes(le))})):k.operator===f.gm?G=G.filter(q=>k.value===Q.getValue({item:q})):k.operator===f._k&&(G=G.filter(q=>k.value!==Q.getValue({item:q}))))}),$.sort){const k=$.sort.field,Q=je.find(R=>R.id===k);Q&&G.sort((R,te)=>{var Re;var Pe;return Q.sort(R,te,(Pe=(Re=$.sort)==null?void 0:Re.direction)!==null&&Pe!==void 0?Pe:"desc")})}let we=G.length,Z=1;if($.page!==void 0&&$.perPage!==void 0){const k=($.page-1)*$.perPage;we=(G==null?void 0:G.length)||0,Z=Math.ceil(we/$.perPage),G=G==null?void 0:G.slice(k,k+$.perPage)}return{data:G,paginationInfo:{totalItems:we,totalPages:Z}}}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.8.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js":(K,b,i)=>{i.d(b,{t:()=>ft});function p(x,v,j){return j==="asc"?x-v:v-x}function l(x,v){return!(x===""||!Number.isInteger(Number(x))||v!=null&&v.elements&&!(v==null?void 0:v.elements.map(P=>P.value)).includes(Number(x)))}const f={sort:p,isValid:l,Edit:"integer"};function y(x,v,j){return j==="asc"?x.localeCompare(v):v.localeCompare(x)}function J(x,v){var j;return!(v!=null&&v.elements&&!((j=v==null?void 0:v.elements)==null?void 0:j.map(I=>I.value)).includes(x))}const X={sort:y,isValid:J,Edit:"text"};function ce(x,v,j){const P=new Date(x).getTime(),I=new Date(v).getTime();return j==="asc"?P-I:I-P}function w(x,v){return!(v!=null&&v.elements&&!(v==null?void 0:v.elements.map(P=>P.value)).includes(x))}const $={sort:ce,isValid:w,Edit:"datetime"};function De(x){return x==="integer"?f:x==="text"?X:x==="datetime"?$:{sort:(v,j,P)=>typeof v=="number"&&typeof j=="number"?P==="asc"?v-j:j-v:P==="asc"?v.localeCompare(j):j.localeCompare(v),isValid:(v,j)=>{var P;return!(j!=null&&j.elements&&!((P=j==null?void 0:j.elements)==null?void 0:P.map(H=>H.value)).includes(v))},Edit:()=>null}}var je=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),G=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),we=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMinute.mjs"),Z=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.mjs"),xe=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/set.mjs"),k=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs"),Q=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=i("../../../node_modules/.pnpm/@wordpress+i18n@5.12.0/node_modules/@wordpress/i18n/build-module/index.js"),te=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js"),Pe=i("../../../node_modules/.pnpm/@wordpress+date@5.12.0/node_modules/@wordpress/date/build-module/index.js"),Re=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),q=i("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.3_@types+react@18.3.12_react@18.3.1__@types+react@18.3.12_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),le=i("../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.12_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),fe=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),Te=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js"),Oe=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),Qe=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js"),He=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/number-control/index.js");function ts(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const We=(0,q.A)("div",{target:"evcr2319"})("box-sizing:border-box;font-size:",fe.A.fontSize,";"),F=(0,q.A)("fieldset",{target:"evcr2318"})("border:0;margin:0 0 ",(0,Oe.x)(2*2)," 0;padding:0;&:last-child{margin-bottom:0;}"),se=(0,q.A)("div",{target:"evcr2317"})({name:"pd0mhc",styles:"direction:ltr;display:flex"}),qe=(0,le.AH)("&&& ",Qe.pd,"{padding-left:",(0,Oe.x)(2),";padding-right:",(0,Oe.x)(2),";text-align:center;}",""),At=(0,q.A)(He.A,{target:"evcr2316"})(qe," width:",(0,Oe.x)(9),";&&& ",Qe.pd,"{padding-right:0;}&&& ",Qe.Hr,"{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;}"),ve=(0,q.A)("span",{target:"evcr2315"})("border-top:",fe.A.borderWidth," solid ",Te.l.gray[700],";border-bottom:",fe.A.borderWidth," solid ",Te.l.gray[700],";font-size:",fe.A.fontSize,`;line-height:calc(
		`,fe.A.controlHeight," - ",fe.A.borderWidth,` * 2
	);display:inline-block;`),ue=(0,q.A)(He.A,{target:"evcr2314"})(qe," width:",(0,Oe.x)(9),";&&& ",Qe.pd,"{padding-left:0;}&&& ",Qe.Hr,"{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0;}"),lt=(0,q.A)("div",{target:"evcr2313"})({name:"1ff36h2",styles:"flex-grow:1"}),Me=(0,q.A)(He.A,{target:"evcr2312"})(qe," width:",(0,Oe.x)(9),";"),Et=(0,q.A)(He.A,{target:"evcr2311"})(qe," width:",(0,Oe.x)(14),";"),dt=(0,q.A)("div",{target:"evcr2310"})({name:"ebu3jh",styles:"text-decoration:underline dotted"});var W=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Ee=()=>{const{timezone:x}=(0,Pe.mt)(),v=-1*(new Date().getTimezoneOffset()/60);if(Number(x.offset)===v)return null;const j=Number(x.offset)>=0?"+":"",P=x.abbr!==""&&isNaN(Number(x.abbr))?x.abbr:`UTC${j}${x.offsetFormatted}`,I=x.string.replace("_"," "),H=x.string==="UTC"?(0,R.__)("Coordinated Universal Time"):`(${P}) ${I}`;return I.trim().length===0?(0,W.jsx)(dt,{className:"components-datetime__timezone",children:P}):(0,W.jsx)(Re.Ay,{placement:"top",text:H,children:(0,W.jsx)(dt,{className:"components-datetime__timezone",children:P})})};var n=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),Ct=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spacer/component.js"),Pt=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs"),st=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js");function ct(x){return typeof x=="string"?new Date(x):(0,Pt.a)(x)}function ut(x,v){return v?(x%12+12)%24:x%12}function Ot(x){return x%12||12}function Se(x){return(v,j)=>{const P={...v};return(j.type===st.cJ||j.type===st.wX||j.type===st.r7)&&P.value!==void 0&&(P.value=P.value.toString().padStart(x,"0")),P}}function $e(x){var P,I;var v;const j=(v=(I=(P=x.target)==null?void 0:P.ownerDocument.defaultView)==null?void 0:I.HTMLInputElement)!==null&&v!==void 0?v:HTMLInputElement;return x.target instanceof j?x.target.validity.valid:!1}const Ge="yyyy-MM-dd'T'HH:mm:ss";var Mt=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),mt=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),pt=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js"),_t=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js");function vt({value:x,defaultValue:v,is12Hour:j,label:P,minutesProps:I,onChange:H}){const[oe={hours:new Date().getHours(),minutes:new Date().getMinutes()},de]=(0,mt.j)({value:x,onChange:H,defaultValue:v}),_e=Xe(oe.hours),me=Ot(oe.hours),Ie=pe=>(ye,{event:Be})=>{if(!$e(Be))return;const Ne=Number(ye);de({...oe,[pe]:pe==="hours"&&j?ut(Ne,_e==="PM"):Ne})},Ve=pe=>()=>{_e!==pe&&de({...oe,hours:ut(me,pe==="PM")})};function Xe(pe){return pe<12?"AM":"PM"}const ke=P?F:Q.Fragment;return(0,W.jsxs)(ke,{children:[P&&(0,W.jsx)(je.Ay.VisualLabel,{as:"legend",children:P}),(0,W.jsxs)(n.A,{alignment:"left",expanded:!1,children:[(0,W.jsxs)(se,{className:"components-datetime__time-field components-datetime__time-field-time",children:[(0,W.jsx)(At,{className:"components-datetime__time-field-hours-input",label:(0,R.__)("Hours"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:String(j?me:oe.hours).padStart(2,"0"),step:1,min:j?1:0,max:j?12:23,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:Ie("hours"),__unstableStateReducer:Se(2)}),(0,W.jsx)(ve,{className:"components-datetime__time-separator","aria-hidden":"true",children:":"}),(0,W.jsx)(ue,{className:(0,Mt.A)("components-datetime__time-field-minutes-input",I==null?void 0:I.className),label:(0,R.__)("Minutes"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:String(oe.minutes).padStart(2,"0"),step:1,min:0,max:59,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:(...pe)=>{var ye;Ie("minutes")(...pe),(ye=I==null?void 0:I.onChange)==null||ye.call(I,...pe)},__unstableStateReducer:Se(2),...I})]}),j&&(0,W.jsxs)(pt.A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:(0,R.__)("Select AM or PM"),hideLabelFromVision:!0,value:_e,onChange:pe=>{Ve(pe)()},children:[(0,W.jsx)(_t.A,{value:"AM",label:(0,R.__)("AM")}),(0,W.jsx)(_t.A,{value:"PM",label:(0,R.__)("PM")})]})]})]})}const ns=null,Dt=["dmy","mdy","ymd"];function nt({is12Hour:x,currentTime:v,onChange:j,dateOrder:P,hideLabelFromVision:I=!1}){const[H,oe]=(0,Q.useState)(()=>v?(0,we.c)(ct(v)):new Date);(0,Q.useEffect)(()=>{oe(v?(0,we.c)(ct(v)):new Date)},[v]);const de=[{value:"01",label:(0,R.__)("January")},{value:"02",label:(0,R.__)("February")},{value:"03",label:(0,R.__)("March")},{value:"04",label:(0,R.__)("April")},{value:"05",label:(0,R.__)("May")},{value:"06",label:(0,R.__)("June")},{value:"07",label:(0,R.__)("July")},{value:"08",label:(0,R.__)("August")},{value:"09",label:(0,R.__)("September")},{value:"10",label:(0,R.__)("October")},{value:"11",label:(0,R.__)("November")},{value:"12",label:(0,R.__)("December")}],{day:_e,month:me,year:Ie,minutes:Ve,hours:Xe}=(0,Q.useMemo)(()=>({day:(0,Z.GP)(H,"dd"),month:(0,Z.GP)(H,"MM"),year:(0,Z.GP)(H,"yyyy"),minutes:(0,Z.GP)(H,"mm"),hours:(0,Z.GP)(H,"HH"),am:(0,Z.GP)(H,"a")}),[H]),ke=ze=>(et,{event:Kt})=>{if(!$e(Kt))return;const Ft=Number(et),xt=(0,xe.h)(H,{[ze]:Ft});oe(xt),j==null||j((0,Z.GP)(xt,Ge))},pe=({hours:ze,minutes:Ye})=>{const et=(0,xe.h)(H,{hours:ze,minutes:Ye});oe(et),j==null||j((0,Z.GP)(et,Ge))},ye=(0,W.jsx)(Me,{className:"components-datetime__time-field components-datetime__time-field-day",label:(0,R.__)("Day"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:_e,step:1,min:1,max:31,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:ke("date")},"day"),Be=(0,W.jsx)(lt,{children:(0,W.jsx)(te.A,{className:"components-datetime__time-field components-datetime__time-field-month",label:(0,R.__)("Month"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,value:me,options:de,onChange:ze=>{const Ye=(0,k.Z)(H,Number(ze)-1);oe(Ye),j==null||j((0,Z.GP)(Ye,Ge))}})},"month"),Ne=(0,W.jsx)(Et,{className:"components-datetime__time-field components-datetime__time-field-year",label:(0,R.__)("Year"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:Ie,step:1,min:1,max:9999,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:ke("year"),__unstableStateReducer:Se(4)},"year"),ht=x?"mdy":"dmy",gt=(P&&Dt.includes(P)?P:ht).split("").map(ze=>{switch(ze){case"d":return ye;case"m":return Be;case"y":return Ne;default:return null}});return(0,W.jsxs)(We,{className:"components-datetime__time",children:[(0,W.jsxs)(F,{children:[I?(0,W.jsx)(G.A,{as:"legend",children:(0,R.__)("Time")}):(0,W.jsx)(je.Ay.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,R.__)("Time")}),(0,W.jsxs)(n.A,{className:"components-datetime__time-wrapper",children:[(0,W.jsx)(vt,{value:{hours:Number(Xe),minutes:Number(Ve)},is12Hour:x,onChange:pe}),(0,W.jsx)(Ct.A,{}),(0,W.jsx)(Ee,{})]})]}),(0,W.jsxs)(F,{children:[I?(0,W.jsx)(G.A,{as:"legend",children:(0,R.__)("Date")}):(0,W.jsx)(je.Ay.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,R.__)("Date")}),(0,W.jsx)(n.A,{className:"components-datetime__time-wrapper",children:gt})]})]})}nt.TimeInput=vt,Object.assign(nt.TimeInput,{displayName:"TimePicker.TimeInput"});const It=nt;function Tt({data:x,field:v,onChange:j,hideLabelFromVision:P}){const{id:I,label:H}=v,oe=v.getValue({item:x}),de=(0,Q.useCallback)(_e=>j({[I]:_e}),[I,j]);return(0,W.jsxs)("fieldset",{className:"dataviews-controls__datetime",children:[!P&&(0,W.jsx)(je.Ay.VisualLabel,{as:"legend",children:H}),P&&(0,W.jsx)(G.A,{as:"legend",children:H}),(0,W.jsx)(It,{currentTime:oe,onChange:de,hideLabelFromVision:!0})]})}function St({data:x,field:v,onChange:j,hideLabelFromVision:P}){var I;const{id:H,label:oe,description:de}=v,_e=(I=v.getValue({item:x}))!==null&&I!==void 0?I:"",me=(0,Q.useCallback)(Ie=>j({[H]:Number(Ie)}),[H,j]);return(0,W.jsx)(He.A,{label:oe,help:de,value:_e,onChange:me,__next40pxDefaultSize:!0,hideLabelFromVision:P})}var kt=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js");function Lt({data:x,field:v,onChange:j,hideLabelFromVision:P}){const{id:I,label:H}=v,oe=v.getValue({item:x}),de=(0,Q.useCallback)(_e=>j({[I]:_e}),[I,j]);return v.elements?(0,W.jsx)(kt.A,{label:H,onChange:de,options:v.elements,selected:oe,hideLabelFromVision:P}):null}function Rt({data:x,field:v,onChange:j,hideLabelFromVision:P}){var I,H;const{id:oe,label:de}=v,_e=(I=v.getValue({item:x}))!==null&&I!==void 0?I:"",me=(0,Q.useCallback)(Ve=>j({[oe]:Ve}),[oe,j]),Ie=[{label:(0,R.__)("Select item"),value:""},...(H=v==null?void 0:v.elements)!==null&&H!==void 0?H:[]];return(0,W.jsx)(te.A,{label:de,value:_e,options:Ie,onChange:me,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:P})}var Vt=i("../../../node_modules/.pnpm/@wordpress+components@28.12.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js");function Bt({data:x,field:v,onChange:j,hideLabelFromVision:P}){const{id:I,label:H,placeholder:oe}=v,de=v.getValue({item:x}),_e=(0,Q.useCallback)(me=>j({[I]:me}),[I,j]);return(0,W.jsx)(Vt.A,{label:H,placeholder:oe,value:de!=null?de:"",onChange:_e,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:P})}const wt={datetime:Tt,integer:St,radio:Lt,select:Rt,text:Bt};function Nt(x,v){return typeof x.Edit=="function"?x.Edit:typeof x.Edit=="string"?ot(x.Edit):x.elements?ot("select"):typeof v.Edit=="string"?ot(v.Edit):v.Edit}function ot(x){if(Object.keys(wt).includes(x))return wt[x];throw"Control "+x+" not found"}const zt=x=>({item:v})=>{const j=x.split(".");let P=v;for(const I of j)P.hasOwnProperty(I)?P=P[I]:P=void 0;return P};function ft(x){return x.map(v=>{var j,P,I,H;const oe=De(v.type),de=v.getValue||zt(v.id),_e=(j=v.sort)!==null&&j!==void 0?j:function(pe,ye,Be){return oe.sort(de({item:pe}),de({item:ye}),Be)},me=(P=v.isValid)!==null&&P!==void 0?P:function(pe,ye){return oe.isValid(de({item:pe}),ye)},Ie=Nt(v,oe),Ve=({item:ke})=>{var ye,Be;const pe=de({item:ke});return((Be=(ye=v==null?void 0:v.elements)==null?void 0:ye.find(Ne=>Ne.value===pe))==null?void 0:Be.label)||de({item:ke})},Xe=v.render||(v.elements?Ve:de);return{...v,label:v.label||v.id,header:v.header||v.label||v.id,getValue:de,render:Xe,sort:_e,isValid:me,Edit:Ie,enableHiding:(I=v.enableHiding)!==null&&I!==void 0?I:!0,enableSorting:(H=v.enableSorting)!==null&&H!==void 0?H:!0}})}function Ut(x,v){return x.map(j=>({...j,Edit:DataFormCombinedEdit,fields:ft(j.children.map(P=>v.find(({id:I})=>I===P)).filter(P=>!!P))}))}},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(K,b,i)=>{i.d(b,{A:()=>f});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function l({icon:y,size:J=24,...X},ce){return(0,p.cloneElement)(y,{width:J,height:J,...X,ref:ce})}const f=(0,p.forwardRef)(l)},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-down.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/block-table.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/category.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right-small.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/code.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cog.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/color.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/funnel.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/next.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/previous.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/shield.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.wA,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(p.wA,{d:"M20.7 12.7s0-.1-.1-.2c0-.2-.2-.4-.4-.6-.3-.5-.9-1.2-1.6-1.8-.7-.6-1.5-1.3-2.6-1.8l-.6 1.4c.9.4 1.6 1 2.1 1.5.6.6 1.1 1.2 1.4 1.6.1.2.3.4.3.5v.1l.7-.3.7-.3Zm-5.2-9.3-1.8 4c-.5-.1-1.1-.2-1.7-.2-3 0-5.2 1.4-6.6 2.7-.7.7-1.2 1.3-1.6 1.8-.2.3-.3.5-.4.6 0 0 0 .1-.1.2s0 0 .7.3l.7.3V13c0-.1.2-.3.3-.5.3-.4.7-1 1.4-1.6 1.2-1.2 3-2.3 5.5-2.3H13v.3c-.4 0-.8-.1-1.1-.1-1.9 0-3.5 1.6-3.5 3.5s.6 2.3 1.6 2.9l-2 4.4.9.4 7.6-16.2-.9-.4Zm-3 12.6c1.7-.2 3-1.7 3-3.5s-.2-1.4-.6-1.9L12.4 16Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.12.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js":(K,b,i)=>{i.d(b,{A:()=>y});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.12.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,l.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,l.jsx)(p.wA,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@4.8.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-style/style.css":(K,b,i)=>{i.d(b,{A:()=>X});var p=i("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=i.n(p),f=i("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),y=i.n(f),J=y()(l());J.push([K.id,`/**
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

.dataviews-view-list__primary-field--clickable,
.dataviews-view-grid__primary-field--clickable,
.dataviews-view-grid__media--clickable,
.dataviews-view-table__primary-field > .dataviews-view-table__cell-content--clickable {
  cursor: pointer;
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
.dataforms-combined-edit p.components-base-control__help:has(.components-checkbox-control__help) {
  margin-top: 4px;
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
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__primary-field--clickable {
  width: -moz-fit-content;
  width: fit-content;
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
}`,""]);const X=J}}]);})();
