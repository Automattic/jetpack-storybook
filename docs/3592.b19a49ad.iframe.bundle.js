"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3592],{"../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js":(F,b,i)=>{i.d(b,{A:()=>Y});var p=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),a=i("../../../node_modules/.pnpm/@wordpress+compose@7.14.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),f=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),j=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),$=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js"),J=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),de=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function w(ve,Z){return`${ve}-${Z}-option-description`}function G(ve,Z){return`${ve}-${Z}`}function Se(ve){return`${ve}__help`}function ye(ve){const{label:Z,className:xe,selected:k,help:Q,onChange:L,hideLabelFromVision:te,options:Pe=[],id:Ne,...q}=ve,ie=(0,a.A)(ye,"inspector-radio-control",Ne),we=Te=>L(Te.target.value);return Pe!=null&&Pe.length?(0,de.jsxs)("fieldset",{id:ie,className:(0,p.A)(xe,"components-radio-control"),"aria-describedby":Q?Se(ie):void 0,children:[te?(0,de.jsx)(J.A,{as:"legend",children:Z}):(0,de.jsx)(f.Ay.VisualLabel,{as:"legend",children:Z}),(0,de.jsx)(j.A,{spacing:3,className:(0,p.A)("components-radio-control__group-wrapper",{"has-help":!!Q}),children:Pe.map((Te,Oe)=>(0,de.jsxs)("div",{className:"components-radio-control__option",children:[(0,de.jsx)("input",{id:G(ie,Oe),className:"components-radio-control__input",type:"radio",name:ie,value:Te.value,onChange:we,checked:Te.value===k,"aria-describedby":Te.description?w(ie,Oe):void 0,...q}),(0,de.jsx)("label",{className:"components-radio-control__label",htmlFor:G(ie,Oe),children:Te.label}),Te.description?(0,de.jsx)($.te,{__nextHasNoMarginBottom:!0,id:w(ie,Oe),className:"components-radio-control__option-description",children:Te.description}):null]},G(ie,Oe)))}),!!Q&&(0,de.jsx)($.te,{__nextHasNoMarginBottom:!0,id:Se(ie),className:"components-base-control__help",children:Q})]}):null}const Y=ye},"../../../node_modules/.pnpm/@wordpress+data@10.14.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js":(F,b,i)=>{i.d(b,{Ay:()=>de,ob:()=>f});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=i("../../../node_modules/.pnpm/@wordpress+data@10.14.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");const f=(0,p.createContext)(a.A),{Consumer:j,Provider:$}=f,J=null,de=$},"../../../node_modules/.pnpm/@wordpress+data@10.14.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js":(F,b,i)=>{i.d(b,{A:()=>f});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=i("../../../node_modules/.pnpm/@wordpress+data@10.14.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js");function f(){return(0,p.useContext)(a.ob)}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.9.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js":(F,b,i)=>{i.d(b,{A:()=>vo});var p=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.9.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/constants.js");const $=(0,a.createContext)({view:{type:f.Ad},onChangeView:()=>{},fields:[],data:[],paginationInfo:{totalItems:0,totalPages:0},selection:[],onChangeSelection:()=>{},setOpenedFilter:()=>{},openedFilter:null,getItemId:e=>e.id,onClickItem:()=>{},isItemClickable:()=>!1});var J=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),de=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/funnel.js"),w=i("../../../node_modules/.pnpm/@wordpress+i18n@5.14.0/node_modules/@wordpress/i18n/build-module/index.js"),G=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),Se=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/component.js"),ye=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js"),Y=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/index.js"),ve=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),Z=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js"),xe=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),k=i("../../../node_modules/.pnpm/@wordpress+element@6.14.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),Q=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),L=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/P7GR5CS5.js"),te=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/LMDWO4NN.js"),Pe=(0,a.createContext)(null),Ne=(0,a.createContext)(null),q=(0,te.B0)([L.ws],[L.aN]),ie=q.useContext,we=q.useScopedContext,Te=q.useProviderContext,Oe=q.ContextProvider,Ze=q.ScopedContextProvider,He=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4CMBR7SL.js"),nn=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/O2PQ2652.js"),We=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/YV4JVR4I.js"),H=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ABQUS43J.js"),ne=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),Qe=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/__chunks/AJZ4BYF3.js"),At=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/__chunks/ME2CUF3F.js"),_e=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/__chunks/BCALMBPZ.js"),le=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),ct=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/__chunks/QAGXQEUG.js"),Me=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js"),Ct=(0,ct.nr)()&&(0,ct.CN)();function ut(e={}){var t=e,{tag:o}=t,n=(0,Me.YG)(t,["tag"]);const r=(0,_e.od)(n.store,(0,_e.Up)(o,["value","rtl"]));(0,_e.UE)(n,r);const d=o==null?void 0:o.getState(),l=r==null?void 0:r.getState(),u=(0,le.Jh)(n.activeId,l==null?void 0:l.activeId,n.defaultActiveId,null),m=(0,Qe.z)((0,Me.ko)((0,Me.IA)({},n),{activeId:u,includesBaseElement:(0,le.Jh)(n.includesBaseElement,l==null?void 0:l.includesBaseElement,!0),orientation:(0,le.Jh)(n.orientation,l==null?void 0:l.orientation,"vertical"),focusLoop:(0,le.Jh)(n.focusLoop,l==null?void 0:l.focusLoop,!0),focusWrap:(0,le.Jh)(n.focusWrap,l==null?void 0:l.focusWrap,!0),virtualFocus:(0,le.Jh)(n.virtualFocus,l==null?void 0:l.virtualFocus,!0)})),c=(0,At.N)((0,Me.ko)((0,Me.IA)({},n),{placement:(0,le.Jh)(n.placement,l==null?void 0:l.placement,"bottom-start")})),_=(0,le.Jh)(n.value,l==null?void 0:l.value,n.defaultValue,""),g=(0,le.Jh)(n.selectedValue,l==null?void 0:l.selectedValue,d==null?void 0:d.values,n.defaultSelectedValue,""),h=Array.isArray(g),E=(0,Me.ko)((0,Me.IA)((0,Me.IA)({},m.getState()),c.getState()),{value:_,selectedValue:g,resetValueOnSelect:(0,le.Jh)(n.resetValueOnSelect,l==null?void 0:l.resetValueOnSelect,h),resetValueOnHide:(0,le.Jh)(n.resetValueOnHide,l==null?void 0:l.resetValueOnHide,h&&!o),activeValue:l==null?void 0:l.activeValue}),y=(0,_e.y$)(E,m,c,r);return Ct&&(0,_e.mj)(y,()=>(0,_e.OH)(y,["virtualFocus"],()=>{y.setState("virtualFocus",!1)})),(0,_e.mj)(y,()=>{if(o)return(0,le.cy)((0,_e.OH)(y,["selectedValue"],M=>{Array.isArray(M.selectedValue)&&o.setValues(M.selectedValue)}),(0,_e.OH)(o,["values"],M=>{y.setState("selectedValue",M.values)}))}),(0,_e.mj)(y,()=>(0,_e.OH)(y,["resetValueOnHide","mounted"],M=>{M.resetValueOnHide&&(M.mounted||y.setState("value",_))})),(0,_e.mj)(y,()=>(0,_e.OH)(y,["open"],M=>{M.open||(y.setState("activeId",u),y.setState("moves",0))})),(0,_e.mj)(y,()=>(0,_e.OH)(y,["moves","activeId"],(M,z)=>{M.moves===z.moves&&y.setState("activeValue",void 0)})),(0,_e.mj)(y,()=>(0,_e.vA)(y,["moves","renderedItems"],(M,z)=>{if(M.moves===z.moves)return;const{activeId:B}=y.getState(),V=m.item(B);y.setState("activeValue",V==null?void 0:V.value)})),(0,Me.ko)((0,Me.IA)((0,Me.IA)((0,Me.IA)({},c),m),y),{tag:o,setValue:M=>y.setState("value",M),resetValue:()=>y.setState("value",E.value),setSelectedValue:M=>y.setState("selectedValue",M)})}function K(e){const t=ie();return e=(0,ne.ko)((0,ne.IA)({},e),{tag:e.tag!==void 0?e.tag:t}),(0,He.YC)(e)}function sn(e,t,o){return(0,H.w5)(t,[o.tag]),(0,We.Tz)(e,o,"value","setValue"),(0,We.Tz)(e,o,"selectedValue","setSelectedValue"),(0,We.Tz)(e,o,"resetValueOnHide"),(0,We.Tz)(e,o,"resetValueOnSelect"),Object.assign((0,He.YO)((0,nn.o)(e,t,o),t,o),{tag:o.tag})}function Et(e={}){e=K(e);const[t,o]=(0,We.Pj)(ut,e);return sn(t,o,e)}var je=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/VEVQD5MH.js"),s=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function Pt(e={}){const t=Et(e);return(0,s.jsx)(je.CE,{value:t,children:e.children})}var tt="label",mt=(0,te.ab)(function(t){var o=t,{store:n}=o,r=(0,ne.YG)(o,["store"]);const d=(0,je.PV)();n=n||d,(0,le.V1)(n,!1);const l=n.useState(u=>{var m;return(m=u.baseElement)==null?void 0:m.id});return r=(0,ne.IA)({htmlFor:l},r),(0,le.HR)(r)}),pt=(0,te.ph)((0,te.Rf)(function(t){const o=mt(t);return(0,te.n)(tt,o)})),Ot=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/OMU7RWRV.js"),nt=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ITI7HKP4.js"),Le=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/__chunks/DTR5TSDJ.js"),$e=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/utils/events.js"),st=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/utils/focus.js"),Mt="input";function _t(e,t,o){if(!o)return!1;const n=e.find(r=>!r.disabled&&r.value);return(n==null?void 0:n.value)===t}function ot(e,t){return!t||e==null?!1:(e=(0,le.J2)(e),t.length>e.length&&t.toLowerCase().indexOf(e.toLowerCase())===0)}function vt(e){return e.type==="input"}function on(e){return e==="inline"||e==="list"||e==="both"||e==="none"}function Dt(e){const t=e.find(o=>{var n;return o.disabled?!1:((n=o.element)==null?void 0:n.getAttribute("role"))!=="tab"});return t==null?void 0:t.id}var it=(0,te.ab)(function(t){var o=t,{store:n,focusable:r=!0,autoSelect:d=!1,getAutoSelectId:l,setValueOnChange:u,showMinLength:m=0,showOnChange:c,showOnMouseDown:_,showOnClick:g=_,showOnKeyDown:h,showOnKeyPress:E=h,blurActiveItemOnClick:y,setValueOnClick:M=!0,moveOnKeyPress:z=!0,autoComplete:B="list"}=o,V=(0,ne.YG)(o,["store","focusable","autoSelect","getAutoSelectId","setValueOnChange","showMinLength","showOnChange","showOnMouseDown","showOnClick","showOnKeyDown","showOnKeyPress","blurActiveItemOnClick","setValueOnClick","moveOnKeyPress","autoComplete"]);const U=(0,je.PV)();n=n||U,(0,le.V1)(n,!1);const T=(0,a.useRef)(null),[I,ee]=(0,H.CH)(),N=(0,a.useRef)(!1),D=(0,a.useRef)(!1),W=n.useState(C=>C.virtualFocus&&d),P=B==="inline"||B==="both",[re,pe]=(0,a.useState)(P);(0,H.Kp)(()=>{P&&pe(!0)},[P]);const R=n.useState("value"),ce=(0,a.useRef)();(0,a.useEffect)(()=>(0,_e.OH)(n,["selectedValue","activeId"],(C,se)=>{ce.current=se.selectedValue}),[]);const ue=n.useState(C=>{var se;if(P&&re&&!(C.activeValue&&Array.isArray(C.selectedValue)&&(C.selectedValue.includes(C.activeValue)||(se=ce.current)!=null&&se.includes(C.activeValue))))return C.activeValue}),Ue=n.useState("renderedItems"),Be=n.useState("open"),Ye=n.useState("contentElement"),jt=(0,a.useMemo)(()=>{if(!P||!re)return R;if(_t(Ue,ue,W)){if(ot(R,ue)){const se=(ue==null?void 0:ue.slice(R.length))||"";return R+se}return R}return ue||R},[P,re,Ue,ue,W,R]);(0,a.useEffect)(()=>{const C=T.current;if(!C)return;const se=()=>pe(!0);return C.addEventListener("combobox-item-move",se),()=>{C.removeEventListener("combobox-item-move",se)}},[]),(0,a.useEffect)(()=>{if(!P||!re||!ue||!_t(Ue,ue,W)||!ot(R,ue))return;let se=le.lQ;return queueMicrotask(()=>{const he=T.current;if(!he)return;const{start:ge,end:Re}=(0,Le.Zy)(he),Fe=R.length,Ce=ue.length;(0,Le.eG)(he,Fe,Ce),se=()=>{if(!(0,st.AJ)(he))return;const{start:Je,end:Io}=(0,Le.Zy)(he);Je===Fe&&Io===Ce&&(0,Le.eG)(he,ge,Re)}}),()=>se()},[I,P,re,ue,Ue,W,R]);const wo=(0,a.useRef)(null),Bn=(0,H._q)(l),Nn=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!Be||!Ye)return;const C=(0,Le.qj)(Ye);if(!C)return;wo.current=C;const se=()=>{N.current=!1},he=()=>{if(!n||!N.current)return;const{activeId:Re}=n.getState();Re!==null&&Re!==Nn.current&&(N.current=!1)},ge={passive:!0,capture:!0};return C.addEventListener("wheel",se,ge),C.addEventListener("touchmove",se,ge),C.addEventListener("scroll",he,ge),()=>{C.removeEventListener("wheel",se,!0),C.removeEventListener("touchmove",se,!0),C.removeEventListener("scroll",he,!0)}},[Be,Ye,n]),(0,H.UQ)(()=>{R&&(D.current||(N.current=!0))},[R]),(0,H.UQ)(()=>{W!=="always"&&Be||(N.current=Be)},[W,Be]);const zn=n.useState("resetValueOnSelect");(0,H.w5)(()=>{var C,se;const he=N.current;if(!n||!Be||!he&&!zn)return;const{baseElement:ge,contentElement:Re,activeId:Fe}=n.getState();if(!(ge&&!(0,st.AJ)(ge))){if(Re!=null&&Re.hasAttribute("data-placing")){const Ce=new MutationObserver(ee);return Ce.observe(Re,{attributeFilter:["data-placing"]}),()=>Ce.disconnect()}if(W&&he){const Ce=Bn(Ue),Je=Ce!==void 0?Ce:(C=Dt(Ue))!=null?C:n.first();Nn.current=Je,n.move(Je!=null?Je:null)}else{const Ce=(se=n.item(Fe||n.first()))==null?void 0:se.element;Ce&&"scrollIntoView"in Ce&&Ce.scrollIntoView({block:"nearest",inline:"nearest"})}}},[n,Be,I,R,W,zn,Bn,Ue]),(0,a.useEffect)(()=>{if(!P)return;const C=T.current;if(!C)return;const se=[C,Ye].filter(ge=>!!ge),he=ge=>{se.every(Re=>(0,$e.aG)(ge,Re))&&(n==null||n.setValue(jt))};for(const ge of se)ge.addEventListener("focusout",he);return()=>{for(const ge of se)ge.removeEventListener("focusout",he)}},[P,Ye,n,jt]);const tn=C=>C.currentTarget.value.length>=m,Un=V.onChange,fo=(0,H.O4)(c!=null?c:tn),ho=(0,H.O4)(u!=null?u:!n.tag),go=(0,H._q)(C=>{if(Un==null||Un(C),C.defaultPrevented||!n)return;const se=C.currentTarget,{value:he,selectionStart:ge,selectionEnd:Re}=se,Fe=C.nativeEvent;if(N.current=!0,vt(Fe)&&(Fe.isComposing&&(N.current=!1,D.current=!0),P)){const Ce=Fe.inputType==="insertText"||Fe.inputType==="insertCompositionText",Je=ge===he.length;pe(Ce&&Je)}if(ho(C)){const Ce=he===n.getState().value;n.setValue(he),queueMicrotask(()=>{(0,Le.eG)(se,ge,Re)}),P&&W&&Ce&&ee()}fo(C)&&n.show(),(!W||!N.current)&&n.setActiveId(null)}),Wn=V.onCompositionEnd,xo=(0,H._q)(C=>{N.current=!0,D.current=!1,Wn==null||Wn(C),!C.defaultPrevented&&W&&ee()}),Kn=V.onMouseDown,bo=(0,H.O4)(y!=null?y:()=>!!(n!=null&&n.getState().includesBaseElement)),yo=(0,H.O4)(M),jo=(0,H.O4)(g!=null?g:tn),Ao=(0,H._q)(C=>{Kn==null||Kn(C),!C.defaultPrevented&&(C.button||C.ctrlKey||n&&(bo(C)&&n.setActiveId(null),yo(C)&&n.setValue(jt),jo(C)&&(0,$e.nz)(C.currentTarget,"mouseup",n.show)))}),Fn=V.onKeyDown,Co=(0,H.O4)(E!=null?E:tn),Eo=(0,H._q)(C=>{if(Fn==null||Fn(C),C.repeat||(N.current=!1),C.defaultPrevented||C.ctrlKey||C.altKey||C.shiftKey||C.metaKey||!n)return;const{open:se}=n.getState();se||(C.key==="ArrowUp"||C.key==="ArrowDown")&&Co(C)&&(C.preventDefault(),n.show())}),Hn=V.onBlur,Po=(0,H._q)(C=>{N.current=!1,Hn==null||Hn(C),C.defaultPrevented}),Oo=(0,H.Bi)(V.id),Mo=on(B)?B:void 0,Do=n.useState(C=>C.activeId===null);return V=(0,ne.ko)((0,ne.IA)({id:Oo,role:"combobox","aria-autocomplete":Mo,"aria-haspopup":(0,Le.Tc)(Ye,"listbox"),"aria-expanded":Be,"aria-controls":Ye==null?void 0:Ye.id,"data-active-item":Do||void 0,value:jt},V),{ref:(0,H.SV)(T,V.ref),onChange:go,onCompositionEnd:xo,onMouseDown:Ao,onKeyDown:Eo,onBlur:Po}),V=(0,nt.T)((0,ne.ko)((0,ne.IA)({store:n,focusable:r},V),{moveOnKeyPress:C=>(0,le.zO)(z,C)?!1:(P&&pe(!0),!0)})),V=(0,Ot.E)((0,ne.IA)({store:n},V)),(0,ne.IA)({autoComplete:"off"},V)}),It=(0,te.Rf)(function(t){const o=it(t);return(0,te.n)(Mt,o)}),St=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/VGCJ63VH.js"),Tt="div",kt=(0,te.ab)(function(t){var o=t,{store:n,alwaysVisible:r}=o,d=(0,ne.YG)(o,["store","alwaysVisible"]);const l=(0,je.UW)(!0),u=(0,je.Ay)();n=n||u;const m=!!n&&n===l;(0,le.V1)(n,!1);const c=(0,a.useRef)(null),_=(0,H.Bi)(d.id),g=n.useState("mounted"),h=(0,St.dK)(g,d.hidden,r),E=h?(0,ne.ko)((0,ne.IA)({},d.style),{display:"none"}):d.style,y=n.useState(ee=>Array.isArray(ee.selectedValue)),M=(0,H.Cy)(c,"role",d.role),B=(M==="listbox"||M==="tree"||M==="grid")&&y||void 0,[V,U]=(0,a.useState)(!1),T=n.useState("contentElement");(0,H.UQ)(()=>{if(!g)return;const ee=c.current;if(!ee||T!==ee)return;const N=()=>{U(!!ee.querySelector("[role='listbox']"))},D=new MutationObserver(N);return D.observe(ee,{subtree:!0,childList:!0,attributeFilter:["role"]}),N(),()=>D.disconnect()},[g,T]),V||(d=(0,ne.IA)({role:"listbox","aria-multiselectable":B},d)),d=(0,H.w7)(d,ee=>(0,s.jsx)(je.Ky,{value:n,children:(0,s.jsx)(je.Hf.Provider,{value:M,children:ee})}),[n,M]);const I=_&&(!l||!m)?n.setContentElement:null;return d=(0,ne.ko)((0,ne.IA)({id:_,hidden:h},d),{ref:(0,H.SV)(I,c,d.ref),style:E}),(0,le.HR)(d)}),Rt=(0,te.Rf)(function(t){const o=kt(t);return(0,te.n)(Tt,o)}),Lt=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UQQRIHDV.js"),Vt=i("../../../node_modules/.pnpm/@ariakit+react-core@0.4.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/P2CTZE2T.js"),Bt="div";function wt(e,t){if(t!=null)return e==null?!1:Array.isArray(e)?e.includes(t):e===t}function Nt(e){var t;return(t={menu:"menuitem",listbox:"option",tree:"treeitem"}[e])!=null?t:"option"}var rt=(0,te.ab)(function(t){var o=t,{store:n,value:r,hideOnClick:d,setValueOnClick:l,selectValueOnClick:u=!0,resetValueOnSelect:m,focusOnHover:c=!1,moveOnKeyPress:_=!0,getItem:g}=o,h=(0,ne.YG)(o,["store","value","hideOnClick","setValueOnClick","selectValueOnClick","resetValueOnSelect","focusOnHover","moveOnKeyPress","getItem"]),E;const y=(0,je.UW)();n=n||y,(0,le.V1)(n,!1);const{resetValueOnSelectState:M,multiSelectable:z,selected:B}=(0,We.PX)(n,{resetValueOnSelectState:"resetValueOnSelect",multiSelectable(R){return Array.isArray(R.selectedValue)},selected(R){return wt(R.selectedValue,r)}}),V=(0,a.useCallback)(R=>{const ce=(0,ne.ko)((0,ne.IA)({},R),{value:r});return g?g(ce):ce},[r,g]);l=l!=null?l:!z,d=d!=null?d:r!=null&&!z;const U=h.onClick,T=(0,H.O4)(l),I=(0,H.O4)(u),ee=(0,H.O4)((E=m!=null?m:M)!=null?E:z),N=(0,H.O4)(d),D=(0,H._q)(R=>{U==null||U(R),!R.defaultPrevented&&((0,$e.RN)(R)||(0,$e.$b)(R)||(r!=null&&(I(R)&&(ee(R)&&(n==null||n.resetValue()),n==null||n.setSelectedValue(ce=>Array.isArray(ce)?ce.includes(r)?ce.filter(ue=>ue!==r):[...ce,r]:r)),T(R)&&(n==null||n.setValue(r))),N(R)&&(n==null||n.hide())))}),W=h.onKeyDown,P=(0,H._q)(R=>{if(W==null||W(R),R.defaultPrevented)return;const ce=n==null?void 0:n.getState().baseElement;if(!ce||(0,st.AJ)(ce))return;(R.key.length===1||R.key==="Backspace"||R.key==="Delete")&&(queueMicrotask(()=>ce.focus()),(0,Le.mB)(ce)&&(n==null||n.setValue(ce.value)))});z&&B!=null&&(h=(0,ne.IA)({"aria-selected":B},h)),h=(0,H.w7)(h,R=>(0,s.jsx)(je.L7.Provider,{value:r,children:(0,s.jsx)(je.Hh.Provider,{value:B!=null?B:!1,children:R})}),[r,B]);const re=(0,a.useContext)(je.Hf);h=(0,ne.ko)((0,ne.IA)({role:Nt(re),children:r},h),{onClick:D,onKeyDown:P});const pe=(0,H.O4)(_);return h=(0,Vt.k)((0,ne.ko)((0,ne.IA)({store:n},h),{getItem:V,moveOnKeyPress:R=>{if(!pe(R))return!1;const ce=new Event("combobox-item-move"),ue=n==null?void 0:n.getState().baseElement;return ue==null||ue.dispatchEvent(ce),!0}})),h=(0,Lt.T)((0,ne.IA)({store:n,focusOnHover:c},h)),h}),zt=(0,te.ph)((0,te.Rf)(function(t){const o=rt(t);return(0,te.n)(Bt,o)})),Ut=i("../../../node_modules/.pnpm/@ariakit+core@0.4.14/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js"),x="span";function v(e){return(0,le.J2)(e).toLowerCase()}function A(e,t){const o=[];for(const n of t){let r=0;const d=n.length;for(;e.indexOf(n,r)!==-1;){const l=e.indexOf(n,r);l!==-1&&o.push([l,d]),r=l+1}}return o}function O(e){return e.filter(([t,o],n,r)=>!r.some(([d,l],u)=>u!==n&&d<=t&&d+l>=t+o))}function S(e){return e.sort(([t],[o])=>t-o)}function X(e,t){if(!e||!t)return e;const o=(0,Ut.$r)(t).filter(Boolean).map(v),n=[],r=(m,c=!1)=>(0,s.jsx)("span",{"data-autocomplete-value":c?"":void 0,"data-user-value":c?void 0:"",children:m},n.length),d=S(O(A(v(e),new Set(o))));if(!d.length)return n.push(r(e,!0)),n;const[l]=d[0];return[e.slice(0,l),...d.flatMap(([m,c],_)=>{var g;const h=e.slice(m,m+c),E=(g=d[_+1])==null?void 0:g[0],y=e.slice(m+c,E);return[h,y]})].forEach((m,c)=>{m&&n.push(r(m,c%2===0))}),n}var oe=(0,te.ab)(function(t){var o=t,{store:n,value:r,userValue:d}=o,l=(0,ne.YG)(o,["store","value","userValue"]);const u=(0,je.UW)();n=n||u;const m=(0,a.useContext)(je.L7),c=r!=null?r:m,_=(0,We.O$)(n,h=>d!=null?d:h==null?void 0:h.value),g=(0,a.useMemo)(()=>{if(c)return _?X(c,_):c},[c,_]);return l=(0,ne.IA)({children:g},l),(0,le.HR)(l)}),ae=(0,te.Rf)(function(t){const o=oe(t);return(0,te.n)(x,o)}),fe=i("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),De=i.n(fe),Ie=i("../../../node_modules/.pnpm/@wordpress+compose@7.14.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),be=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/composite/index.js"),Ge=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),ke=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),me=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js"),Ae=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");const Ve=(0,s.jsx)(Ae.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(Ae.jl,{cx:12,cy:12,r:3})});function Ke(e=""){return De()(e.trim().toLowerCase())}const Wt=[],Kt=(e,t)=>e.singleSelection?t==null?void 0:t.value:Array.isArray(t==null?void 0:t.value)?t.value:!Array.isArray(t==null?void 0:t.value)&&(t!=null&&t.value)?[t.value]:Wt,ft=(e,t,o)=>e.singleSelection?o:Array.isArray(t==null?void 0:t.value)?t.value.includes(o)?t.value.filter(n=>n!==o):[...t.value,o]:[o];function ze(e,t){return`${e}-${t}`}function Xe({view:e,filter:t,onChangeView:o}){var m,c;const n=(0,Ie.A)(Xe,"dataviews-filter-list-box"),[r,d]=(0,a.useState)(((m=t.operators)==null?void 0:m.length)===1?void 0:null),l=(c=e.filters)==null?void 0:c.find(_=>_.field===t.field),u=Kt(t,l);return(0,s.jsx)(be.e,{virtualFocus:!0,focusLoop:!0,activeId:r,setActiveId:d,role:"listbox",className:"dataviews-filters__search-widget-listbox","aria-label":(0,w.nv)((0,w.__)("List of: %1$s"),t.name),onFocusVisible:()=>{!r&&t.elements.length&&d(ze(n,t.elements[0].value))},render:(0,s.jsx)(be.e.Typeahead,{}),children:t.elements.map(_=>(0,s.jsxs)(be.e.Hover,{render:(0,s.jsx)(be.e.Item,{id:ze(n,_.value),render:(0,s.jsx)("div",{"aria-label":_.label,role:"option",className:"dataviews-filters__search-widget-listitem"}),onClick:()=>{var g,h;const E=l?[...((g=e.filters)!==null&&g!==void 0?g:[]).map(y=>y.field===t.field?{...y,operator:l.operator||t.operators[0],value:ft(t,l,_.value)}:y)]:[...(h=e.filters)!==null&&h!==void 0?h:[],{field:t.field,operator:t.operators[0],value:ft(t,l,_.value)}];o({...e,page:1,filters:E})}}),children:[(0,s.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[t.singleSelection&&u===_.value&&(0,s.jsx)(Z.A,{icon:Ve}),!t.singleSelection&&u.includes(_.value)&&(0,s.jsx)(Z.A,{icon:ke.A})]}),(0,s.jsx)("span",{children:_.label})]},_.value))})}function qe({view:e,filter:t,onChangeView:o}){var c;const[n,r]=(0,a.useState)(""),d=(0,a.useDeferredValue)(n),l=(c=e.filters)==null?void 0:c.find(_=>_.field===t.field),u=Kt(t,l),m=(0,a.useMemo)(()=>{const _=Ke(d);return t.elements.filter(g=>Ke(g.label).includes(_))},[t.elements,d]);return(0,s.jsxs)(Pt,{selectedValue:u,setSelectedValue:_=>{var g,h;const E=l?[...((g=e.filters)!==null&&g!==void 0?g:[]).map(y=>y.field===t.field?{...y,operator:l.operator||t.operators[0],value:_}:y)]:[...(h=e.filters)!==null&&h!==void 0?h:[],{field:t.field,operator:t.operators[0],value:_}];o({...e,page:1,filters:E})},setValue:r,children:[(0,s.jsxs)("div",{className:"dataviews-filters__search-widget-filter-combobox__wrapper",children:[(0,s.jsx)(pt,{render:(0,s.jsx)(Ge.A,{children:(0,w.__)("Search items")}),children:(0,w.__)("Search items")}),(0,s.jsx)(It,{autoSelect:"always",placeholder:(0,w.__)("Search"),className:"dataviews-filters__search-widget-filter-combobox__input"}),(0,s.jsx)("div",{className:"dataviews-filters__search-widget-filter-combobox__icon",children:(0,s.jsx)(Z.A,{icon:me.A})})]}),(0,s.jsxs)(Rt,{className:"dataviews-filters__search-widget-filter-combobox-list",alwaysVisible:!0,children:[m.map(_=>(0,s.jsxs)(zt,{resetValueOnSelect:!1,value:_.value,className:"dataviews-filters__search-widget-listitem",hideOnClick:!1,setValueOnClick:!1,focusOnHover:!0,children:[(0,s.jsxs)("span",{className:"dataviews-filters__search-widget-listitem-check",children:[t.singleSelection&&u===_.value&&(0,s.jsx)(Z.A,{icon:Ve}),!t.singleSelection&&u.includes(_.value)&&(0,s.jsx)(Z.A,{icon:ke.A})]}),(0,s.jsxs)("span",{children:[(0,s.jsx)(ae,{className:"dataviews-filters__search-widget-filter-combobox-item-value",value:_.label}),!!_.description&&(0,s.jsx)("span",{className:"dataviews-filters__search-widget-listitem-description",children:_.description})]})]},_.value)),!m.length&&(0,s.jsx)("p",{children:(0,w.__)("No results found")})]})]})}function Ft(e){const t=e.filter.elements.length>10?qe:Xe;return(0,s.jsx)(t,{...e})}const Ht="Enter",ht=" ",$n=({activeElements:e,filterInView:t,filter:o})=>{if(e===void 0||e.length===0)return o.name;const n={Name:(0,s.jsx)("span",{className:"dataviews-filters__summary-filter-text-name"}),Value:(0,s.jsx)("span",{className:"dataviews-filters__summary-filter-text-value"})};return(t==null?void 0:t.operator)===f.ld?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is any: </Name><Value>%2$s</Value>"),o.name,e.map(r=>r.label).join(", ")),n):(t==null?void 0:t.operator)===f.Vw?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is none: </Name><Value>%2$s</Value>"),o.name,e.map(r=>r.label).join(", ")),n):(t==null?void 0:t.operator)===f.y5?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is all: </Name><Value>%2$s</Value>"),o.name,e.map(r=>r.label).join(", ")),n):(t==null?void 0:t.operator)===f.UX?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is not all: </Name><Value>%2$s</Value>"),o.name,e.map(r=>r.label).join(", ")),n):(t==null?void 0:t.operator)===f.gm?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),o.name,e[0].label),n):(t==null?void 0:t.operator)===f._k?(0,k.A)((0,w.nv)((0,w.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),o.name,e[0].label),n):(0,w.nv)((0,w.__)("Unknown status for %1$s"),o.name)};function Gn({filter:e,view:t,onChangeView:o}){var l,u;const n=(l=e.operators)==null?void 0:l.map(m=>{var c;return{value:m,label:(c=f.we[m])==null?void 0:c.label}}),r=(u=t.filters)==null?void 0:u.find(m=>m.field===e.field),d=(r==null?void 0:r.operator)||e.operators[0];return n.length>1&&(0,s.jsxs)(p.A,{spacing:2,justify:"flex-start",className:"dataviews-filters__summary-operators-container",children:[(0,s.jsx)(Se.A,{className:"dataviews-filters__summary-operators-filter-name",children:e.name}),(0,s.jsx)(ye.A,{label:(0,w.__)("Conditions"),value:d,options:n,onChange:m=>{var c,_;const g=m,h=r?[...((c=t.filters)!==null&&c!==void 0?c:[]).map(E=>E.field===e.field?{...E,operator:g}:E)]:[...(_=t.filters)!==null&&_!==void 0?_:[],{field:e.field,operator:g,value:void 0}];o({...t,page:1,filters:h})},size:"small",__nextHasNoMarginBottom:!0,hideLabelFromVision:!0})]})}function Xn({addFilterRef:e,openedFilter:t,...o}){var h;const n=(0,a.useRef)(null),{filter:r,view:d,onChangeView:l}=o,u=(h=d.filters)==null?void 0:h.find(E=>E.field===r.field),m=r.elements.filter(E=>{var y;return r.singleSelection?E.value===(u==null?void 0:u.value):(y=u==null?void 0:u.value)==null?void 0:y.includes(E.value)}),c=r.isPrimary,_=(u==null?void 0:u.value)!==void 0,g=!c||_;return(0,s.jsx)(Y.A,{defaultOpen:t===r.field,contentClassName:"dataviews-filters__summary-popover",popoverProps:{placement:"bottom-start",role:"dialog"},onClose:()=>{var E;(E=n.current)==null||E.focus()},renderToggle:({isOpen:E,onToggle:y})=>(0,s.jsxs)("div",{className:"dataviews-filters__summary-chip-container",children:[(0,s.jsx)(ve.Ay,{text:(0,w.nv)((0,w.__)("Filter by: %1$s"),r.name.toLowerCase()),placement:"top",children:(0,s.jsx)("div",{className:(0,G.A)("dataviews-filters__summary-chip",{"has-reset":g,"has-values":_}),role:"button",tabIndex:0,onClick:y,onKeyDown:M=>{[Ht,ht].includes(M.key)&&(y(),M.preventDefault())},"aria-pressed":E,"aria-expanded":E,ref:n,children:(0,s.jsx)($n,{activeElements:m,filterInView:u,filter:r})})}),g&&(0,s.jsx)(ve.Ay,{text:c?(0,w.__)("Reset"):(0,w.__)("Remove"),placement:"top",children:(0,s.jsx)("button",{className:(0,G.A)("dataviews-filters__summary-chip-remove",{"has-values":_}),onClick:()=>{var M,z,B;l({...d,page:1,filters:(M=d.filters)==null?void 0:M.filter(V=>V.field!==r.field)}),c?(B=n.current)==null||B.focus():(z=e.current)==null||z.focus()},children:(0,s.jsx)(Z.A,{icon:Q.A})})})]}),renderContent:()=>(0,s.jsxs)(xe.A,{spacing:0,justify:"flex-start",children:[(0,s.jsx)(Gn,{...o}),(0,s.jsx)(Ft,{...o})]})})}var at=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/private-apis.js"),Yn=i("../../../node_modules/.pnpm/@wordpress+private-apis@1.14.0/node_modules/@wordpress/private-apis/build-module/implementation.js");const{lock:So,unlock:lt}=(0,Yn.yf)("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.","@wordpress/dataviews"),{Menu:$t}=lt(at.j);function rn({filters:e,view:t,onChangeView:o,setOpenedFilter:n,trigger:r}){const d=e.filter(l=>!l.isVisible);return(0,s.jsx)($t,{trigger:r,children:d.map(l=>(0,s.jsx)($t.Item,{onClick:()=>{n(l.field),o({...t,page:1,filters:[...t.filters||[],{field:l.field,value:void 0,operator:l.operators[0]}]})},children:(0,s.jsx)($t.ItemLabel,{children:l.name})},l.field))})}function Jn({filters:e,view:t,onChangeView:o,setOpenedFilter:n},r){if(!e.length||e.every(({isPrimary:l})=>l))return null;const d=e.filter(l=>!l.isVisible);return(0,s.jsx)(rn,{trigger:(0,s.jsx)(J.Ay,{accessibleWhenDisabled:!0,size:"compact",className:"dataviews-filters-button",variant:"tertiary",disabled:!d.length,ref:r,children:(0,w.__)("Add filter")}),filters:e,view:t,onChangeView:o,setOpenedFilter:n})}const Zn=(0,a.forwardRef)(Jn);function Qn({filters:e,view:t,onChangeView:o}){var d;const n=l=>e.some(u=>u.field===l&&u.isPrimary),r=!t.search&&!((d=t.filters)!=null&&d.some(l=>l.value!==void 0||!n(l.field)));return(0,s.jsx)(J.Ay,{disabled:r,accessibleWhenDisabled:!0,size:"compact",variant:"tertiary",className:"dataviews-filters__reset-button",onClick:()=>{o({...t,page:1,search:"",filters:[]})},children:(0,w.__)("Reset")})}function an(e){var o;let t=(o=e.filterBy)==null?void 0:o.operators;return(!t||!Array.isArray(t))&&(t=[f.ld,f.Vw]),t=t.filter(n=>f.CD.includes(n)),(t.includes(f.gm)||t.includes(f._k))&&(t=t.filter(n=>[f.gm,f._k].includes(n))),t}function ln(e,t){return(0,a.useMemo)(()=>{const o=[];return e.forEach(n=>{var l,u,m;if(!((l=n.elements)!=null&&l.length))return;const r=an(n);if(r.length===0)return;const d=!!((u=n.filterBy)!=null&&u.isPrimary);o.push({field:n.id,name:n.label,elements:n.elements,singleSelection:r.some(c=>[f.gm,f._k].includes(c)),operators:r,isVisible:d||!!((m=t.filters)!=null&&m.some(c=>c.field===n.id&&f.CD.includes(c.operator))),isPrimary:d})}),o.sort((n,r)=>n.isPrimary&&!r.isPrimary?-1:!n.isPrimary&&r.isPrimary?1:n.name.localeCompare(r.name)),o},[e,t])}function qn({filters:e,view:t,onChangeView:o,setOpenedFilter:n,isShowingFilter:r,setIsShowingFilter:d}){var E;const l=(0,a.useRef)(null),u=(0,a.useCallback)(y=>{o(y),d(!0)},[o,d]),c=!!e.filter(y=>y.isVisible).length;if(e.length===0)return null;const _={label:(0,w.__)("Add filter"),"aria-expanded":!1,isPressed:!1},g={label:(0,w._x)("Filter","verb"),"aria-expanded":r,isPressed:r,onClick:()=>{r||n(null),d(!r)}},h=(0,s.jsx)(J.Ay,{ref:l,className:"dataviews-filters__visibility-toggle",size:"compact",icon:de.A,...c?g:_});return(0,s.jsx)("div",{className:"dataviews-filters__container-visibility-toggle",children:c?(0,s.jsx)(es,{buttonRef:l,filtersCount:(E=t.filters)==null?void 0:E.length,children:h}):(0,s.jsx)(rn,{filters:e,view:t,onChangeView:u,setOpenedFilter:n,trigger:h})})}function es({buttonRef:e,filtersCount:t,children:o}){return(0,a.useEffect)(()=>()=>{var n;(n=e.current)==null||n.focus()},[e]),(0,s.jsxs)(s.Fragment,{children:[o,!!t&&(0,s.jsx)("span",{className:"dataviews-filters-toggle__count",children:t})]})}function ts(){const{fields:e,view:t,onChangeView:o,openedFilter:n,setOpenedFilter:r}=(0,a.useContext)($),d=(0,a.useRef)(null),l=ln(e,t),u=(0,s.jsx)(Zn,{filters:l,view:t,onChangeView:o,ref:d,setOpenedFilter:r},"add-filter"),m=l.filter(_=>_.isVisible);if(m.length===0)return null;const c=[...m.map(_=>(0,s.jsx)(Xn,{filter:_,view:t,onChangeView:o,addFilterRef:d,openedFilter:n},_.field)),u];return c.push((0,s.jsx)(Qn,{filters:l,view:t,onChangeView:o},"reset-filters")),(0,s.jsx)(p.A,{justify:"flex-start",style:{width:"fit-content"},className:"dataviews-filters__container",wrap:!0,children:c})}const ns=(0,a.memo)(ts);var ss=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/block-table.js"),os=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/category.js"),is=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js"),rs=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets.js"),Gt=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),dn=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/checkbox-control/index.js");function cn({selection:e,onChangeSelection:t,item:o,getItemId:n,primaryField:r,disabled:d}){const l=n(o),u=!d&&e.includes(l);let m;return r!=null&&r.getValue&&o?m=(0,w.nv)(u?(0,w.__)("Deselect item: %s"):(0,w.__)("Select item: %s"),r.getValue({item:o})):m=u?(0,w.__)("Select a new item"):(0,w.__)("Deselect item"),(0,s.jsx)(dn.A,{className:"dataviews-selection-checkbox",__nextHasNoMarginBottom:!0,"aria-label":m,"aria-disabled":d,checked:u,onChange:()=>{d||t(e.includes(l)?e.filter(c=>l!==c):[...e,l])}})}var as=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js"),un=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/more-vertical.js"),gt=i("../../../node_modules/.pnpm/@wordpress+data@10.14.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const{Menu:xt,kebabCase:ls}=lt(at.j);function mn({action:e,onClick:t,items:o}){const n=typeof e.label=="string"?e.label:e.label(o);return(0,s.jsx)(J.Ay,{label:n,icon:e.icon,isDestructive:e.isDestructive,size:"compact",onClick:t})}function pn({action:e,onClick:t,items:o}){const n=typeof e.label=="string"?e.label:e.label(o);return(0,s.jsx)(xt.Item,{onClick:t,hideOnClick:!("RenderModal"in e),children:(0,s.jsx)(xt.ItemLabel,{children:n})})}function _n({action:e,items:t,closeModal:o}){const n=typeof e.label=="string"?e.label:e.label(t);return(0,s.jsx)(as.A,{title:e.modalHeader||n,__experimentalHideHeader:!!e.hideModalHeader,onRequestClose:o!=null?o:()=>{},focusOnMount:"firstContentElement",size:"small",overlayClassName:`dataviews-action-modal dataviews-action-modal__${ls(e.id)}`,children:(0,s.jsx)(e.RenderModal,{items:t,closeModal:o})})}function Xt({action:e,items:t,ActionTrigger:o,isBusy:n}){const[r,d]=(0,a.useState)(!1),l={action:e,onClick:()=>{d(!0)},items:t,isBusy:n};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{...l}),r&&(0,s.jsx)(_n,{action:e,items:t,closeModal:()=>d(!1)})]})}function vn({actions:e,item:t}){const o=(0,gt.A)();return(0,s.jsx)(xt.Group,{children:e.map(n=>"RenderModal"in n?(0,s.jsx)(Xt,{action:n,items:[t],ActionTrigger:pn},n.id):(0,s.jsx)(pn,{action:n,onClick:()=>{n.callback([t],{registry:o})},items:[t]},n.id))})}function ds(e,t){return e.length===1&&t.length===1}function wn({item:e,actions:t,isCompact:o}){const n=(0,gt.A)(),{primaryActions:r,eligibleActions:d}=(0,a.useMemo)(()=>{const l=t.filter(m=>!m.isEligible||m.isEligible(e));return{primaryActions:l.filter(m=>m.isPrimary&&!!m.icon),eligibleActions:l}},[t,e]);return o?(0,s.jsx)(fn,{item:e,actions:d,isSmall:!0}):ds(r,t)?(0,s.jsx)(hn,{item:e,actions:r,registry:n}):(0,s.jsxs)(p.A,{spacing:1,justify:"flex-end",className:"dataviews-item-actions",style:{flexShrink:"0",width:"auto"},children:[(0,s.jsx)(hn,{item:e,actions:r,registry:n}),(0,s.jsx)(fn,{item:e,actions:d})]})}function fn({item:e,actions:t,isSmall:o}){return(0,s.jsx)(xt,{trigger:(0,s.jsx)(J.Ay,{size:o?"small":"compact",icon:un.A,label:(0,w.__)("Actions"),accessibleWhenDisabled:!0,disabled:!t.length,className:"dataviews-all-actions-button"}),placement:"bottom-end",children:(0,s.jsx)(vn,{actions:t,item:e})})}function hn({item:e,actions:t,registry:o}){return!Array.isArray(t)||t.length===0?null:t.map(n=>"RenderModal"in n?(0,s.jsx)(Xt,{action:n,items:[e],ActionTrigger:mn},n.id):(0,s.jsx)(mn,{action:n,onClick:()=>{n.callback([e],{registry:o})},items:[e]},n.id))}function gn(e,t){return(0,a.useMemo)(()=>e.some(o=>o.supportsBulk&&(!o.isEligible||o.isEligible(t))),[e,t])}function xn(e,t){return(0,a.useMemo)(()=>t.some(o=>e.some(n=>n.supportsBulk&&(!n.isEligible||n.isEligible(o)))),[e,t])}function bn({selection:e,onChangeSelection:t,data:o,actions:n,getItemId:r}){const d=(0,a.useMemo)(()=>o.filter(m=>n.some(c=>c.supportsBulk&&(!c.isEligible||c.isEligible(m)))),[o,n]),l=o.filter(m=>e.includes(r(m))&&d.includes(m)),u=l.length===d.length;return(0,s.jsx)(dn.A,{className:"dataviews-view-table-selection-checkbox",__nextHasNoMarginBottom:!0,checked:u,indeterminate:!u&&!!l.length,onChange:()=>{t(u?[]:d.map(m=>r(m)))},"aria-label":u?(0,w.__)("Deselect all"):(0,w.__)("Select all")})}function yn({action:e,onClick:t,isBusy:o,items:n}){const r=typeof e.label=="string"?e.label:e.label(n);return(0,s.jsx)(J.Ay,{disabled:o,accessibleWhenDisabled:!0,label:r,icon:e.icon,isDestructive:e.isDestructive,size:"compact",onClick:t,isBusy:o,tooltipPosition:"top"})}const jn=[];function cs({action:e,selectedItems:t,actionInProgress:o,setActionInProgress:n}){const r=(0,gt.A)(),d=(0,a.useMemo)(()=>t.filter(l=>!e.isEligible||e.isEligible(l)),[e,t]);return"RenderModal"in e?(0,s.jsx)(Xt,{action:e,items:d,ActionTrigger:yn},e.id):(0,s.jsx)(yn,{action:e,onClick:async()=>{n(e.id),await e.callback(t,{registry:r}),n(null)},items:d,isBusy:o===e.id},e.id)}function An(e,t,o,n,r,d,l,u,m){const c=d.length>0?(0,w.nv)((0,w._n)("%d Item selected","%d Items selected",d.length),d.length):(0,w.nv)((0,w._n)("%d Item","%d Items",e.length),e.length);return(0,s.jsxs)(p.A,{expanded:!1,className:"dataviews-bulk-actions-footer__container",spacing:3,children:[(0,s.jsx)(bn,{selection:n,onChangeSelection:m,data:e,actions:t,getItemId:o}),(0,s.jsx)("span",{className:"dataviews-bulk-actions-footer__item-count",children:c}),(0,s.jsxs)(p.A,{className:"dataviews-bulk-actions-footer__action-buttons",expanded:!1,spacing:1,children:[r.map(_=>(0,s.jsx)(cs,{action:_,selectedItems:d,actionInProgress:l,setActionInProgress:u},_.id)),d.length>0&&(0,s.jsx)(J.Ay,{icon:Q.A,showTooltip:!0,tooltipPosition:"top",size:"compact",label:(0,w.__)("Cancel"),disabled:!!l,accessibleWhenDisabled:!1,onClick:()=>{m(jn)}})]})]})}function us({selection:e,actions:t,onChangeSelection:o,data:n,getItemId:r}){const[d,l]=(0,a.useState)(null),u=(0,a.useRef)(null),m=(0,a.useMemo)(()=>t.filter(h=>h.supportsBulk),[t]),c=(0,a.useMemo)(()=>n.filter(h=>m.some(E=>!E.isEligible||E.isEligible(h))),[n,m]),_=(0,a.useMemo)(()=>n.filter(h=>e.includes(r(h))&&c.includes(h)),[e,n,r,c]),g=(0,a.useMemo)(()=>t.filter(h=>h.supportsBulk&&h.icon&&_.some(E=>!h.isEligible||h.isEligible(E))),[t,_]);if(d)u.current||(u.current=An(n,t,r,e,g,_,d,l,o));else return u.current&&(u.current=null),An(n,t,r,e,g,_,d,l,o);return u.current}function ms(){const{data:e,selection:t,actions:o=jn,onChangeSelection:n,getItemId:r}=(0,a.useContext)($);return(0,s.jsx)(us,{selection:t,onChangeSelection:n,data:e,actions:o,getItemId:r})}var ps=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),_s=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js"),Cn=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js");const{Menu:Ee}=lt(at.j);function vs({children:e}){return a.Children.toArray(e).filter(Boolean).map((t,o)=>(0,s.jsxs)(a.Fragment,{children:[o>0&&(0,s.jsx)(Ee.Separator,{}),t]},o))}const ws=(0,a.forwardRef)(function({fieldId:t,view:o,fields:n,onChangeView:r,onHide:d,setOpenedFilter:l},u){var V,U,T,I,ee,N;const m=et(o,n),c=m==null?void 0:m.indexOf(t),_=((V=o.sort)==null?void 0:V.field)===t;let g=!1,h=!1,E=!1,y,M=[];const z=(T=(U=o.layout)==null?void 0:U.combinedFields)==null?void 0:T.find(D=>D.id===t),B=n.find(D=>D.id===t);if(z)y=z.header||z.label;else{if(!B)return null;g=B.enableHiding!==!1,h=B.enableSorting!==!1,y=B.header,M=an(B),E=!((I=o.filters)!=null&&I.some(D=>t===D.field))&&!!((ee=B.elements)!=null&&ee.length)&&!!M.length&&!((N=B.filterBy)!=null&&N.isPrimary)}return(0,s.jsx)(Ee,{align:"start",trigger:(0,s.jsxs)(J.Ay,{size:"compact",className:"dataviews-view-table-header-button",ref:u,variant:"tertiary",children:[y,o.sort&&_&&(0,s.jsx)("span",{"aria-hidden":"true",children:f.vI[o.sort.direction]})]}),style:{minWidth:"240px"},children:(0,s.jsxs)(vs,{children:[h&&(0,s.jsx)(Ee.Group,{children:f.GJ.map(D=>{const W=o.sort&&_&&o.sort.direction===D,P=`${t}-${D}`;return(0,s.jsx)(Ee.RadioItem,{name:"view-table-sorting",value:P,checked:W,onChange:()=>{r({...o,sort:{field:t,direction:D}})},children:(0,s.jsx)(Ee.ItemLabel,{children:f.CL[D]})},P)})}),E&&(0,s.jsx)(Ee.Group,{children:(0,s.jsx)(Ee.Item,{prefix:(0,s.jsx)(Z.A,{icon:de.A}),onClick:()=>{l(t),r({...o,page:1,filters:[...o.filters||[],{field:t,value:void 0,operator:M[0]}]})},children:(0,s.jsx)(Ee.ItemLabel,{children:(0,w.__)("Add filter")})})}),(0,s.jsxs)(Ee.Group,{children:[(0,s.jsx)(Ee.Item,{prefix:(0,s.jsx)(Z.A,{icon:ps.A}),disabled:c<1,onClick:()=>{var D;r({...o,fields:[...(D=m.slice(0,c-1))!==null&&D!==void 0?D:[],t,m[c-1],...m.slice(c+1)]})},children:(0,s.jsx)(Ee.ItemLabel,{children:(0,w.__)("Move left")})}),(0,s.jsx)(Ee.Item,{prefix:(0,s.jsx)(Z.A,{icon:_s.A}),disabled:c>=m.length-1,onClick:()=>{var D;r({...o,fields:[...(D=m.slice(0,c))!==null&&D!==void 0?D:[],m[c+1],t,...m.slice(c+2)]})},children:(0,s.jsx)(Ee.ItemLabel,{children:(0,w.__)("Move right")})}),g&&B&&(0,s.jsx)(Ee.Item,{prefix:(0,s.jsx)(Z.A,{icon:Cn.A}),onClick:()=>{d(B),r({...o,fields:m.filter(D=>D!==t)})},children:(0,s.jsx)(Ee.ItemLabel,{children:(0,w.__)("Hide column")})})]})]})})});function Yt(e,t,o,n){return t(e)?{className:`${n} ${n}--clickable`,role:"button",tabIndex:0,onClick:()=>o(e),onKeyDown:r=>{(r.key==="Enter"||r.key==="")&&o(e)}}:{className:n}}function En({column:e,fields:t,view:o,...n}){var l,u;const r=t.find(m=>m.id===e);if(r)return(0,s.jsx)(fs,{...n,field:r});const d=(u=(l=o.layout)==null?void 0:l.combinedFields)==null?void 0:u.find(m=>m.id===e);return d?(0,s.jsx)(hs,{...n,fields:t,view:o,field:d}):null}function fs({primaryField:e,item:t,field:o,isItemClickable:n,onClickItem:r}){const d=(e==null?void 0:e.id)===o.id,u=Yt(t,m=>n(m)&&d,r,"dataviews-view-table__cell-content");return(0,s.jsx)("div",{className:(0,G.A)("dataviews-view-table__cell-content-wrapper",{"dataviews-view-table__primary-field":d}),children:(0,s.jsx)("div",{...u,children:(0,s.jsx)(o.render,{item:t})})})}function hs({field:e,...t}){const o=e.children.map(n=>(0,s.jsx)(En,{...t,column:n},n));return e.direction==="horizontal"?(0,s.jsx)(p.A,{spacing:3,justify:"flex-start",children:o}):(0,s.jsx)(xe.A,{spacing:0,children:o})}function gs({hasBulkActions:e,item:t,actions:o,fields:n,id:r,view:d,primaryField:l,selection:u,getItemId:m,isItemClickable:c,onClickItem:_,onChangeSelection:g}){const h=gn(o,t),E=h&&u.includes(r),[y,M]=(0,a.useState)(!1),z=()=>{M(!0)},B=()=>{M(!1)},V=(0,a.useRef)(!1),U=et(d,n);return(0,s.jsxs)("tr",{className:(0,G.A)("dataviews-view-table__row",{"is-selected":h&&E,"is-hovered":y,"has-bulk-actions":h}),onMouseEnter:z,onMouseLeave:B,onTouchStart:()=>{V.current=!0},onClick:()=>{var T;h&&!V.current&&((T=document.getSelection())==null?void 0:T.type)!=="Range"&&g(u.includes(r)?u.filter(I=>r!==I):[r])},children:[e&&(0,s.jsx)("td",{className:"dataviews-view-table__checkbox-column",style:{width:"1%"},children:(0,s.jsx)("div",{className:"dataviews-view-table__cell-content-wrapper",children:(0,s.jsx)(cn,{item:t,selection:u,onChangeSelection:g,getItemId:m,primaryField:l,disabled:!h})})}),U.map(T=>{var W,P;var I;const{width:ee,maxWidth:N,minWidth:D}=(I=(P=(W=d.layout)==null?void 0:W.styles)==null?void 0:P[T])!==null&&I!==void 0?I:{};return(0,s.jsx)("td",{style:{width:ee,maxWidth:N,minWidth:D},children:(0,s.jsx)(En,{primaryField:l,isItemClickable:c,onClickItem:_,fields:n,item:t,column:T,view:d})},T)}),!!(o!=null&&o.length)&&(0,s.jsx)("td",{className:"dataviews-view-table__actions-column",onClick:T=>T.stopPropagation(),children:(0,s.jsx)(wn,{item:t,actions:o})})]})}function xs({actions:e,data:t,fields:o,getItemId:n,isLoading:r=!1,onChangeView:d,onChangeSelection:l,selection:u,setOpenedFilter:m,onClickItem:c,isItemClickable:_,view:g}){var ee,N;const h=(0,a.useRef)(new Map),E=(0,a.useRef)(),[y,M]=(0,a.useState)(),z=xn(e,t);(0,a.useEffect)(()=>{E.current&&(E.current.focus(),E.current=void 0)});const B=(0,a.useId)();if(y){E.current=y,M(void 0);return}const V=D=>{const W=h.current.get(D.id),P=W?h.current.get(W.fallback):void 0;M(P==null?void 0:P.node)},U=et(g,o),T=!!(t!=null&&t.length),I=o.find(D=>{var W;return D.id===((W=g.layout)==null?void 0:W.primaryField)});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("table",{className:(0,G.A)("dataviews-view-table",{[`has-${(ee=g.layout)==null?void 0:ee.density}-density`]:((N=g.layout)==null?void 0:N.density)&&["compact","comfortable"].includes(g.layout.density)}),"aria-busy":r,"aria-describedby":B,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"dataviews-view-table__row",children:[z&&(0,s.jsx)("th",{className:"dataviews-view-table__checkbox-column",style:{width:"1%"},scope:"col",children:(0,s.jsx)(bn,{selection:u,onChangeSelection:l,data:t,actions:e,getItemId:n})}),U.map((D,W)=>{var ce,ue,Ue;var P;const{width:re,maxWidth:pe,minWidth:R}=(P=(ue=(ce=g.layout)==null?void 0:ce.styles)==null?void 0:ue[D])!==null&&P!==void 0?P:{};return(0,s.jsx)("th",{style:{width:re,maxWidth:pe,minWidth:R},"aria-sort":((Ue=g.sort)==null?void 0:Ue.field)===D?f.LW[g.sort.direction]:void 0,scope:"col",children:(0,s.jsx)(ws,{ref:Be=>{Be?h.current.set(D,{node:Be,fallback:U[W>0?W-1:1]}):h.current.delete(D)},fieldId:D,view:g,fields:o,onChangeView:d,onHide:V,setOpenedFilter:m})},D)}),!!(e!=null&&e.length)&&(0,s.jsx)("th",{className:"dataviews-view-table__actions-column",children:(0,s.jsx)("span",{className:"dataviews-view-table-header",children:(0,w.__)("Actions")})})]})}),(0,s.jsx)("tbody",{children:T&&t.map((D,W)=>(0,s.jsx)(gs,{item:D,hasBulkActions:z,actions:e,fields:o,id:n(D)||W.toString(),view:g,primaryField:I,selection:u,getItemId:n,onChangeSelection:l,onClickItem:c,isItemClickable:_},n(D)))})]}),(0,s.jsx)("div",{className:(0,G.A)({"dataviews-loading":r,"dataviews-no-results":!T&&!r}),id:B,children:!T&&(0,s.jsx)("p",{children:r?(0,s.jsx)(Gt.Ay,{}):(0,w.__)("No results")})})]})}const bs=xs;var ys=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/component.js"),Jt=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/grid/component.js"),js=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),dt=i("../../../node_modules/.pnpm/@wordpress+compose@7.14.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js");const Pn={xhuge:{min:3,max:6,default:5},huge:{min:2,max:4,default:4},xlarge:{min:2,max:3,default:3},large:{min:1,max:2,default:2},mobile:{min:1,max:2,default:2}};function On(){const e=(0,dt.A)("xhuge",">="),t=(0,dt.A)("huge",">="),o=(0,dt.A)("xlarge",">="),n=(0,dt.A)("large",">="),r=(0,dt.A)("mobile",">=");return e?"xhuge":t?"huge":o?"xlarge":n?"large":r?"mobile":null}function As(){const e=On(),t=(0,a.useContext)($).view;return(0,a.useMemo)(()=>{var d;const o=(d=t.layout)==null?void 0:d.previewSize;let n;if(!e||!o)return;const r=Pn[e];return o<r.min&&(n=r.min),o>r.max&&(n=r.max),n},[e,t])}function Cs(){var l;const e=On(),t=(0,a.useContext)($),o=t.view,n=Pn[e||"mobile"],r=((l=o.layout)==null?void 0:l.previewSize)||n.default,d=(0,a.useMemo)(()=>Array.from({length:n.max-n.min+1},(u,m)=>({value:n.min+m})),[n]);return e?(0,s.jsx)(js.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,showTooltip:!1,label:(0,w.__)("Preview size"),value:n.max+n.min-r,marks:d,min:n.min,max:n.max,withInputField:!1,onChange:(u=0)=>{t.onChangeView({...o,layout:{...o.layout,previewSize:n.max+n.min-u}})},step:1}):null}function Es({selection:e,onChangeSelection:t,onClickItem:o,isItemClickable:n,getItemId:r,item:d,actions:l,mediaField:u,primaryField:m,visibleFields:c,badgeFields:_,columnFields:g}){const h=gn(l,d),E=r(d),y=e.includes(E),M=u!=null&&u.render?(0,s.jsx)(u.render,{item:d}):null,z=m!=null&&m.render?(0,s.jsx)(m.render,{item:d}):null,B=Yt(d,n,o,"dataviews-view-grid__media"),V=Yt(d,n,o,"dataviews-view-grid__primary-field");return(0,s.jsxs)(xe.A,{spacing:0,className:(0,G.A)("dataviews-view-grid__card",{"is-selected":h&&y}),onClickCapture:U=>{if(U.ctrlKey||U.metaKey){if(U.stopPropagation(),U.preventDefault(),!h)return;t(e.includes(E)?e.filter(T=>E!==T):[...e,E])}},children:[(0,s.jsx)("div",{...B,children:M}),(0,s.jsx)(cn,{item:d,selection:e,onChangeSelection:t,getItemId:r,primaryField:m,disabled:!h}),(0,s.jsxs)(p.A,{justify:"space-between",className:"dataviews-view-grid__title-actions",children:[(0,s.jsx)("div",{...V,children:z}),(0,s.jsx)(wn,{item:d,actions:l,isCompact:!0})]}),!!(_!=null&&_.length)&&(0,s.jsx)(p.A,{className:"dataviews-view-grid__badge-fields",spacing:2,wrap:!0,alignment:"top",justify:"flex-start",children:_.map(U=>(0,s.jsx)(Se.A,{className:"dataviews-view-grid__field-value",children:(0,s.jsx)(U.render,{item:d})},U.id))}),!!(c!=null&&c.length)&&(0,s.jsx)(xe.A,{className:"dataviews-view-grid__fields",spacing:1,children:c.map(U=>(0,s.jsx)(ys.A,{className:(0,G.A)("dataviews-view-grid__field",g!=null&&g.includes(U.id)?"is-column":"is-row"),gap:1,justify:"flex-start",expanded:!0,style:{height:"auto"},direction:g!=null&&g.includes(U.id)?"column":"row",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Se.A,{className:"dataviews-view-grid__field-name",children:U.header}),(0,s.jsx)(Se.A,{className:"dataviews-view-grid__field-value",style:{maxHeight:"none"},children:(0,s.jsx)(U.render,{item:d})})]})},U.id))})]},E)}function Ps({actions:e,data:t,fields:o,getItemId:n,isLoading:r,onChangeSelection:d,onClickItem:l,isItemClickable:u,selection:m,view:c}){var U;const _=o.find(T=>{var I;return T.id===((I=c.layout)==null?void 0:I.mediaField)}),g=o.find(T=>{var I;return T.id===((I=c.layout)==null?void 0:I.primaryField)}),h=c.fields||o.map(T=>T.id),{visibleFields:E,badgeFields:y}=o.reduce((T,I)=>{var N,D,W,P;if(!h.includes(I.id)||[(N=c.layout)==null?void 0:N.mediaField,(D=c==null?void 0:c.layout)==null?void 0:D.primaryField].includes(I.id))return T;const ee=(P=(W=c.layout)==null?void 0:W.badgeFields)!=null&&P.includes(I.id)?"badgeFields":"visibleFields";return T[ee].push(I),T},{visibleFields:[],badgeFields:[]}),M=!!(t!=null&&t.length),B=As()||((U=c.layout)==null?void 0:U.previewSize),V=B?{gridTemplateColumns:`repeat(${B}, minmax(0, 1fr))`}:{};return(0,s.jsxs)(s.Fragment,{children:[M&&(0,s.jsx)(Jt.A,{gap:8,columns:2,alignment:"top",className:"dataviews-view-grid",style:V,"aria-busy":r,children:t.map(T=>{var I;return(0,s.jsx)(Es,{selection:m,onChangeSelection:d,onClickItem:l,isItemClickable:u,getItemId:n,item:T,actions:e,mediaField:_,primaryField:g,visibleFields:E,badgeFields:y,columnFields:(I=c.layout)==null?void 0:I.columnFields},n(T))})}),!M&&(0,s.jsx)("div",{className:(0,G.A)({"dataviews-loading":r,"dataviews-no-results":!r}),children:(0,s.jsx)("p",{children:r?(0,s.jsx)(Gt.Ay,{}):(0,w.__)("No results")})})]})}var Os=i("../../../node_modules/.pnpm/@wordpress+compose@7.14.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js");const{Menu:Ms}=lt(at.j);function Zt(e){return`${e}-item-wrapper`}function Ds(e,t){return`${e}-primary-action-${t}`}function Qt(e){return`${e}-dropdown`}function Is({idPrefix:e,primaryAction:t,item:o}){const n=(0,gt.A)(),[r,d]=(0,a.useState)(!1),l=Ds(e,t.id),u=typeof t.label=="string"?t.label:t.label([o]);return"RenderModal"in t?(0,s.jsx)("div",{role:"gridcell",children:(0,s.jsx)(be.e.Item,{id:l,render:(0,s.jsx)(J.Ay,{label:u,icon:t.icon,isDestructive:t.isDestructive,size:"small",onClick:()=>d(!0)}),children:r&&(0,s.jsx)(_n,{action:t,items:[o],closeModal:()=>d(!1)})})},t.id):(0,s.jsx)("div",{role:"gridcell",children:(0,s.jsx)(be.e.Item,{id:l,render:(0,s.jsx)(J.Ay,{label:u,icon:t.icon,isDestructive:t.isDestructive,size:"small",onClick:()=>{t.callback([o],{registry:n})}})})},t.id)}function Ss({actions:e,idPrefix:t,isSelected:o,item:n,mediaField:r,onSelect:d,primaryField:l,visibleFields:u,onDropdownTriggerKeyDown:m}){const c=(0,a.useRef)(null),_=`${t}-label`,g=`${t}-description`,[h,E]=(0,a.useState)(!1),y=({type:I})=>{E(I==="mouseenter")};(0,a.useEffect)(()=>{var I;o&&((I=c.current)==null||I.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"}))},[o]);const{primaryAction:M,eligibleActions:z}=(0,a.useMemo)(()=>{const I=e.filter(N=>!N.isEligible||N.isEligible(n));return{primaryAction:I.filter(N=>N.isPrimary&&!!N.icon)[0],eligibleActions:I}},[e,n]),B=M&&e.length===1,V=r!=null&&r.render?(0,s.jsx)("div",{className:"dataviews-view-list__media-wrapper",children:(0,s.jsx)(r.render,{item:n})}):null,U=l!=null&&l.render?(0,s.jsx)(l.render,{item:n}):null,T=(z==null?void 0:z.length)>0&&(0,s.jsxs)(p.A,{spacing:3,className:"dataviews-view-list__item-actions",children:[M&&(0,s.jsx)(Is,{idPrefix:t,primaryAction:M,item:n}),!B&&(0,s.jsx)("div",{role:"gridcell",children:(0,s.jsx)(Ms,{trigger:(0,s.jsx)(be.e.Item,{id:Qt(t),render:(0,s.jsx)(J.Ay,{size:"small",icon:un.A,label:(0,w.__)("Actions"),accessibleWhenDisabled:!0,disabled:!e.length,onKeyDown:m})}),placement:"bottom-end",children:(0,s.jsx)(vn,{actions:z,item:n})})})]});return(0,s.jsx)(be.e.Row,{ref:c,render:(0,s.jsx)("li",{}),role:"row",className:(0,G.A)({"is-selected":o,"is-hovered":h}),onMouseEnter:y,onMouseLeave:y,children:(0,s.jsxs)(p.A,{className:"dataviews-view-list__item-wrapper",spacing:0,children:[(0,s.jsx)("div",{role:"gridcell",children:(0,s.jsx)(be.e.Item,{id:Zt(t),"aria-pressed":o,"aria-labelledby":_,"aria-describedby":g,className:"dataviews-view-list__item",onClick:()=>d(n)})}),(0,s.jsxs)(p.A,{spacing:3,justify:"start",alignment:"flex-start",children:[V,(0,s.jsxs)(xe.A,{spacing:1,className:"dataviews-view-list__field-wrapper",children:[(0,s.jsxs)(p.A,{spacing:0,children:[(0,s.jsx)("div",{className:"dataviews-view-list__primary-field",id:_,children:U}),T]}),(0,s.jsx)("div",{className:"dataviews-view-list__fields",id:g,children:u.map(I=>(0,s.jsxs)("div",{className:"dataviews-view-list__field",children:[(0,s.jsx)(Ge.A,{as:"span",className:"dataviews-view-list__field-label",children:I.label}),(0,s.jsx)("span",{className:"dataviews-view-list__field-value",children:(0,s.jsx)(I.render,{item:n})})]},I.id))})]})]})]})})}function Mn(e){const{actions:t,data:o,fields:n,getItemId:r,isLoading:d,onChangeSelection:l,selection:u,view:m}=e,c=(0,Ie.A)(Mn,"view-list"),_=o==null?void 0:o.findLast(P=>u.includes(r(P))),g=n.find(P=>{var re;return P.id===((re=m.layout)==null?void 0:re.mediaField)}),h=n.find(P=>{var re;return P.id===((re=m.layout)==null?void 0:re.primaryField)}),E=m.fields||n.map(P=>P.id),y=n.filter(P=>{var re,pe;return E.includes(P.id)&&![(re=m.layout)==null?void 0:re.primaryField,(pe=m.layout)==null?void 0:pe.mediaField].includes(P.id)}),M=P=>l([r(P)]),z=(0,a.useCallback)(P=>`${c}-${r(P)}`,[c,r]),B=(0,a.useCallback)((P,re)=>re.startsWith(z(P)),[z]),[V,U]=(0,a.useState)(void 0);(0,a.useEffect)(()=>{_&&U(Zt(z(_)))},[_,z]);const T=o.findIndex(P=>B(P,V!=null?V:"")),I=(0,Os.A)(T),ee=T!==-1,N=(0,a.useCallback)((P,re)=>{var ue;const pe=Math.min(o.length-1,Math.max(0,P));if(!o[pe])return;const R=z(o[pe]),ce=re(R);U(ce),(ue=document.getElementById(ce))==null||ue.focus()},[o,z]);(0,a.useEffect)(()=>{!ee&&(I!==void 0&&I!==-1)&&N(I,Zt)},[ee,N,I]);const D=(0,a.useCallback)(P=>{P.key==="ArrowDown"&&(P.preventDefault(),N(T+1,Qt)),P.key==="ArrowUp"&&(P.preventDefault(),N(T-1,Qt))},[N,T]),W=o==null?void 0:o.length;return W?(0,s.jsx)(be.e,{id:c,render:(0,s.jsx)("ul",{}),className:"dataviews-view-list",role:"grid",activeId:V,setActiveId:U,children:o.map(P=>{const re=z(P);return(0,s.jsx)(Ss,{idPrefix:re,actions:t,item:P,isSelected:P===_,onSelect:M,mediaField:g,primaryField:h,visibleFields:y,onDropdownTriggerKeyDown:D},re)})}):(0,s.jsx)("div",{className:(0,G.A)({"dataviews-loading":d,"dataviews-no-results":!W&&!d}),children:!W&&(0,s.jsx)("p",{children:d?(0,s.jsx)(Gt.Ay,{}):(0,w.__)("No results")})})}var qt=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js"),bt=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js");function Ts(){var o;const e=(0,a.useContext)($),t=e.view;return(0,s.jsxs)(qt.A,{__nextHasNoMarginBottom:!0,size:"__unstable-large",label:(0,w.__)("Density"),value:((o=t.layout)==null?void 0:o.density)||"balanced",onChange:n=>{e.onChangeView({...t,layout:{...t.layout,density:n}})},isBlock:!0,children:[(0,s.jsx)(bt.A,{value:"comfortable",label:(0,w._x)("Comfortable","Density option for DataView layout")},"comfortable"),(0,s.jsx)(bt.A,{value:"balanced",label:(0,w._x)("Balanced","Density option for DataView layout")},"balanced"),(0,s.jsx)(bt.A,{value:"compact",label:(0,w._x)("Compact","Density option for DataView layout")},"compact")]})}const yt=[{type:f.Ad,label:(0,w.__)("Table"),component:bs,icon:ss.A,viewConfigOptions:Ts},{type:f.Ul,label:(0,w.__)("Grid"),component:Ps,icon:os.A,viewConfigOptions:Cs},{type:f.mA,label:(0,w.__)("List"),component:Mn,icon:(0,w.V8)()?is.A:rs.A}];function ks(e){var o,n,r,d,l,u,m;if(e.type==="table"){var t;return[(o=e.layout)==null?void 0:o.primaryField].concat((t=(r=(n=e.layout)==null?void 0:n.combinedFields)==null?void 0:r.flatMap(c=>c.children))!==null&&t!==void 0?t:[]).filter(c=>!!c)}return e.type==="grid"?[(d=e.layout)==null?void 0:d.primaryField,(l=e.layout)==null?void 0:l.mediaField].filter(c=>!!c):e.type==="list"?[(u=e.layout)==null?void 0:u.primaryField,(m=e.layout)==null?void 0:m.mediaField].filter(c=>!!c):[]}function Dn(e){var o;const t=[];return e.type===f.Ad&&((o=e.layout)!=null&&o.combinedFields)&&e.layout.combinedFields.forEach(n=>{t.push(...n.children)}),t}function et(e,t){var r;const o=Dn(e);if(e.fields)return e.fields.filter(d=>!o.includes(d));const n=[];return e.type===f.Ad&&((r=e.layout)!=null&&r.combinedFields)&&n.push(...e.layout.combinedFields.map(({id:d})=>d)),n.push(...t.filter(({id:d})=>!o.includes(d)).map(({id:d})=>d)),n}function Rs(e,t){var n,r,d,l;const o=[...Dn(e),...et(e,t)];return e.type===f.Ul&&((n=e.layout)!=null&&n.mediaField)&&o.push((r=e.layout)==null?void 0:r.mediaField),e.type===f.mA&&((d=e.layout)!=null&&d.mediaField)&&o.push((l=e.layout)==null?void 0:l.mediaField),t.filter(({id:u,enableHiding:m})=>!o.includes(u)&&m).map(({id:u})=>u)}function Ls(){var E;const{actions:e=[],data:t,fields:o,getItemId:n,isLoading:r,view:d,onChangeView:l,selection:u,onChangeSelection:m,setOpenedFilter:c,onClickItem:_,isItemClickable:g}=(0,a.useContext)($),h=(E=yt.find(y=>y.type===d.type))==null?void 0:E.component;return(0,s.jsx)(h,{actions:e,data:t,fields:o,getItemId:n,isLoading:r,onChangeView:l,onChangeSelection:m,selection:u,setOpenedFilter:c,onClickItem:_,isItemClickable:g,view:d})}var In=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/next.js"),Sn=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/previous.js");function Vs(){var e;const{view:t,onChangeView:o,paginationInfo:{totalItems:n=0,totalPages:r}}=(0,a.useContext)($);if(!n||!r)return null;const d=(e=t.page)!==null&&e!==void 0?e:1,l=Array.from(Array(r)).map((u,m)=>{const c=m+1;return{value:c.toString(),label:c.toString(),"aria-label":d===c?(0,w.nv)((0,w.__)("Page %1$s of %2$s"),d,r):c.toString()}});return!!n&&r!==1&&(0,s.jsxs)(p.A,{expanded:!1,className:"dataviews-pagination",justify:"end",spacing:6,children:[(0,s.jsx)(p.A,{justify:"flex-start",expanded:!1,spacing:1,className:"dataviews-pagination__page-select",children:(0,k.A)((0,w.nv)((0,w._x)("<div>Page</div>%1$s<div>of %2$s</div>","paging"),"<CurrentPage />",r),{div:(0,s.jsx)("div",{"aria-hidden":!0}),CurrentPage:(0,s.jsx)(ye.A,{"aria-label":(0,w.__)("Current page"),value:d.toString(),options:l,onChange:u=>{o({...t,page:+u})},size:"small",__nextHasNoMarginBottom:!0,variant:"minimal"})})}),(0,s.jsxs)(p.A,{expanded:!1,spacing:1,children:[(0,s.jsx)(J.Ay,{onClick:()=>o({...t,page:d-1}),disabled:d===1,accessibleWhenDisabled:!0,label:(0,w.__)("Previous page"),icon:(0,w.V8)()?In.A:Sn.A,showTooltip:!0,size:"compact",tooltipPosition:"top"}),(0,s.jsx)(J.Ay,{onClick:()=>o({...t,page:d+1}),disabled:d>=r,accessibleWhenDisabled:!0,label:(0,w.__)("Next page"),icon:(0,w.V8)()?Sn.A:In.A,showTooltip:!0,size:"compact",tooltipPosition:"top"})]})]})}const Bs=(0,a.memo)(Vs),Ns=[];function zs(){const{view:e,paginationInfo:{totalItems:t=0,totalPages:o},data:n,actions:r=Ns}=(0,a.useContext)($),d=xn(r,n)&&[f.Ad,f.Ul].includes(e.type);return!t||!o||o<=1&&!d?null:!!t&&(0,s.jsxs)(p.A,{expanded:!1,justify:"end",className:"dataviews-footer",children:[d&&(0,s.jsx)(ms,{}),(0,s.jsx)(Bs,{})]})}var Us=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/search-control/index.js"),Ws=i("../../../node_modules/.pnpm/@wordpress+compose@7.14.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounced-input/index.js");const Ks=(0,a.memo)(function({label:t}){const{view:o,onChangeView:n}=(0,a.useContext)($),[r,d,l]=(0,Ws.A)(o.search);(0,a.useEffect)(()=>{var _;d((_=o.search)!==null&&_!==void 0?_:"")},[o.search,d]);const u=(0,a.useRef)(n),m=(0,a.useRef)(o);(0,a.useEffect)(()=>{u.current=n,m.current=o},[n,o]),(0,a.useEffect)(()=>{var _;l!==((_=m.current)==null?void 0:_.search)&&u.current({...m.current,page:1,search:l})},[l]);const c=t||(0,w.__)("Search");return(0,s.jsx)(Us.A,{className:"dataviews-search",__nextHasNoMarginBottom:!0,onChange:d,value:r,label:c,placeholder:c,size:"compact"})});var Fs=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-icon/component.js"),Hs=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item/component.js"),Tn=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/item-group/item-group/component.js"),$s=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),Gs=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/heading/component.js"),Xs=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text/component.js"),Ys=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dropdown/dropdown-content-wrapper.js"),Js=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),Zs=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),Qs=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js"),qs=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cog.js"),kn=i("../../../node_modules/.pnpm/@wordpress+warning@3.13.0/node_modules/@wordpress/warning/build-module/index.js");const{Menu:en}=lt(at.j),eo={placement:"bottom-end",offset:9};function to({defaultLayouts:e={list:{},grid:{},table:{}}}){const{view:t,onChangeView:o}=(0,a.useContext)($),n=Object.keys(e);if(n.length<=1)return null;const r=yt.find(d=>t.type===d.type);return(0,s.jsx)(en,{trigger:(0,s.jsx)(J.Ay,{size:"compact",icon:r==null?void 0:r.icon,label:(0,w.__)("Layout")}),children:n.map(d=>{const l=yt.find(u=>u.type===d);return l?(0,s.jsx)(en.RadioItem,{value:d,name:"view-actions-available-view",checked:d===t.type,hideOnClick:!0,onChange:u=>{switch(u.target.value){case"list":case"grid":case"table":return o({...t,type:u.target.value,...e[u.target.value]})}globalThis.SCRIPT_DEBUG===!0&&(0,kn.A)("Invalid dataview")},children:(0,s.jsx)(en.ItemLabel,{children:l.label})},d):null})})}function no(){var r;const{view:e,fields:t,onChangeView:o}=(0,a.useContext)($),n=(0,a.useMemo)(()=>t.filter(l=>l.enableSorting!==!1).map(l=>({label:l.label,value:l.id})),[t]);return(0,s.jsx)(ye.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:(0,w.__)("Sort by"),value:(r=e.sort)==null?void 0:r.field,options:n,onChange:d=>{var l;o({...e,sort:{direction:((l=e==null?void 0:e.sort)==null?void 0:l.direction)||"desc",field:d}})}})}function so(){var d,l;const{view:e,fields:t,onChangeView:o}=(0,a.useContext)($);if(t.filter(u=>u.enableSorting!==!1).length===0)return null;let r=(d=e.sort)==null?void 0:d.direction;return!r&&((l=e.sort)!=null&&l.field)&&(r="desc"),(0,s.jsx)(qt.A,{className:"dataviews-view-config__sort-direction",__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,w.__)("Order"),value:r,onChange:u=>{var m,c;if(u==="asc"||u==="desc"){o({...e,sort:{direction:u,field:((m=e.sort)==null?void 0:m.field)||((c=t.find(_=>_.enableSorting!==!1))==null?void 0:c.id)||""}});return}globalThis.SCRIPT_DEBUG===!0&&(0,kn.A)("Invalid direction")},children:f.GJ.map(u=>(0,s.jsx)(Fs.A,{value:u,icon:f.ls[u],label:f.CL[u]},u))})}const oo=[10,20,50,100];function io(){var o;const{view:e,onChangeView:t}=(0,a.useContext)($);return(0,s.jsx)(qt.A,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,isBlock:!0,label:(0,w.__)("Items per page"),value:e.perPage||10,disabled:!((o=e==null?void 0:e.sort)!=null&&o.field),onChange:n=>{const r=typeof n=="number"||n===void 0?n:parseInt(n,10);t({...e,perPage:r,page:1})},children:oo.map(n=>(0,s.jsx)(bt.A,{value:n,label:n.toString()},n))})}function Rn({field:{id:e,label:t,index:o,isVisible:n,isHidable:r},fields:d,view:l,onChangeView:u}){const m=et(l,d);return(0,s.jsx)(Hs.A,{children:(0,s.jsxs)(p.A,{expanded:!0,className:`dataviews-field-control__field dataviews-field-control__field-${e}`,children:[(0,s.jsx)("span",{children:t}),(0,s.jsxs)(p.A,{justify:"flex-end",expanded:!1,className:"dataviews-field-control__actions",children:[l.type===f.Ad&&n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(J.Ay,{disabled:o<1,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{var c;u({...l,fields:[...(c=m.slice(0,o-1))!==null&&c!==void 0?c:[],e,m[o-1],...m.slice(o+1)]})},icon:Js.A,label:(0,w.nv)((0,w.__)("Move %s up"),t)}),(0,s.jsx)(J.Ay,{disabled:o>=m.length-1,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{var c;u({...l,fields:[...(c=m.slice(0,o))!==null&&c!==void 0?c:[],m[o+1],e,...m.slice(o+2)]})},icon:Zs.A,label:(0,w.nv)((0,w.__)("Move %s down"),t)})," "]}),(0,s.jsx)(J.Ay,{className:"dataviews-field-control__field-visibility-button",disabled:!r,accessibleWhenDisabled:!0,size:"compact",onClick:()=>{u({...l,fields:n?m.filter(c=>c!==e):[...m,e]}),setTimeout(()=>{const c=document.querySelector(`.dataviews-field-control__field-${e} .dataviews-field-control__field-visibility-button`);c instanceof HTMLElement&&c.focus()},50)},icon:n?Cn.A:Qs.A,label:n?(0,w.nv)((0,w._x)("Hide %s","field"),t):(0,w.nv)((0,w._x)("Show %s","field"),t)})]})]})},e)}function ro(){var m;const{view:e,fields:t,onChangeView:o}=(0,a.useContext)($),n=(0,a.useMemo)(()=>et(e,t),[e,t]),r=(0,a.useMemo)(()=>Rs(e,t),[e,t]),d=(0,a.useMemo)(()=>ks(e),[e]),l=t.filter(({id:c})=>n.includes(c)).map(({id:c,label:_,enableHiding:g})=>({id:c,label:_,index:n.indexOf(c),isVisible:!0,isHidable:d.includes(c)?!1:g}));e.type===f.Ad&&((m=e.layout)!=null&&m.combinedFields)&&e.layout.combinedFields.forEach(({id:c,label:_})=>{l.push({id:c,label:_,index:n.indexOf(c),isVisible:!0,isHidable:d.includes(c)})}),l.sort((c,_)=>c.index-_.index);const u=t.filter(({id:c})=>r.includes(c)).map(({id:c,label:_,enableHiding:g},h)=>({id:c,label:_,index:h,isVisible:!1,isHidable:g}));return!(l!=null&&l.length)&&!(u!=null&&u.length)?null:(0,s.jsxs)(xe.A,{spacing:6,className:"dataviews-field-control",children:[!!(l!=null&&l.length)&&(0,s.jsx)(Tn.A,{isBordered:!0,isSeparated:!0,children:l.map(c=>(0,s.jsx)(Rn,{field:c,fields:t,view:e,onChangeView:o},c.id))}),!!(u!=null&&u.length)&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(xe.A,{spacing:4,children:[(0,s.jsx)($s.Ay.VisualLabel,{style:{margin:0},children:(0,w.__)("Hidden")}),(0,s.jsx)(Tn.A,{isBordered:!0,isSeparated:!0,children:u.map(c=>(0,s.jsx)(Rn,{field:c,fields:t,view:e,onChangeView:o},c.id))})]})})]})}function Ln({title:e,description:t,children:o}){return(0,s.jsxs)(Jt.A,{columns:12,className:"dataviews-settings-section",gap:4,children:[(0,s.jsxs)("div",{className:"dataviews-settings-section__sidebar",children:[(0,s.jsx)(Gs.A,{level:2,className:"dataviews-settings-section__title",children:e}),t&&(0,s.jsx)(Xs.A,{variant:"muted",className:"dataviews-settings-section__description",children:t})]}),(0,s.jsx)(Jt.A,{columns:8,gap:4,className:"dataviews-settings-section__content",children:o})]})}function ao(){const{view:e}=(0,a.useContext)($),t=(0,Ie.A)(Vn,"dataviews-view-config-dropdown"),o=yt.find(n=>n.type===e.type);return(0,s.jsx)(Y.A,{popoverProps:{...eo,id:t},renderToggle:({onToggle:n,isOpen:r})=>(0,s.jsx)(J.Ay,{size:"compact",icon:qs.A,label:(0,w._x)("View options","View is used as a noun"),onClick:n,"aria-expanded":r?"true":"false","aria-controls":t}),renderContent:()=>(0,s.jsx)(Ys.A,{paddingSize:"medium",children:(0,s.jsxs)(xe.A,{className:"dataviews-view-config",spacing:6,children:[(0,s.jsxs)(Ln,{title:(0,w.__)("Appearance"),children:[(0,s.jsxs)(p.A,{expanded:!0,className:"is-divided-in-two",children:[(0,s.jsx)(no,{}),(0,s.jsx)(so,{})]}),!!(o!=null&&o.viewConfigOptions)&&(0,s.jsx)(o.viewConfigOptions,{}),(0,s.jsx)(io,{})]}),(0,s.jsx)(Ln,{title:(0,w.__)("Properties"),children:(0,s.jsx)(ro,{})})]})})})}function Vn({defaultLayouts:e={list:{},grid:{},table:{}}}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(to,{defaultLayouts:e}),(0,s.jsx)(ao,{})]})}const lo=(0,a.memo)(Vn);var co=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.9.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js");const uo=e=>e.id,mo=()=>!1,po=()=>{},_o=[];function vo({view:e,onChangeView:t,fields:o,search:n=!0,searchLabel:r=void 0,actions:d=_o,data:l,getItemId:u=uo,isLoading:m=!1,paginationInfo:c,defaultLayouts:_,selection:g,onChangeSelection:h,onClickItem:E=po,isItemClickable:y=mo,header:M}){const[z,B]=(0,a.useState)([]),V=g===void 0||h===void 0,U=V?z:g,[T,I]=(0,a.useState)(null);function ee(pe){const R=typeof pe=="function"?pe(U):pe;V&&B(R),h&&h(R)}const N=(0,a.useMemo)(()=>(0,co.t)(o),[o]),D=(0,a.useMemo)(()=>U.filter(pe=>l.some(R=>u(R)===pe)),[U,l,u]),W=ln(N,e),[P,re]=(0,a.useState)(()=>(W||[]).some(pe=>pe.isPrimary));return(0,s.jsx)($.Provider,{value:{view:e,onChangeView:t,fields:N,actions:d,data:l,isLoading:m,paginationInfo:c,selection:D,onChangeSelection:ee,openedFilter:T,setOpenedFilter:I,getItemId:u,isItemClickable:y,onClickItem:E},children:(0,s.jsxs)("div",{className:"dataviews-wrapper",children:[(0,s.jsxs)(p.A,{alignment:"top",justify:"space-between",className:"dataviews__view-actions",spacing:1,children:[(0,s.jsxs)(p.A,{justify:"start",expanded:!1,className:"dataviews__search",children:[n&&(0,s.jsx)(Ks,{label:r}),(0,s.jsx)(qn,{filters:W,view:e,onChangeView:t,setOpenedFilter:I,setIsShowingFilter:re,isShowingFilter:P})]}),(0,s.jsxs)(p.A,{spacing:1,expanded:!1,style:{flexShrink:0},children:[(0,s.jsx)(lo,{defaultLayouts:_}),M]})]}),P&&(0,s.jsx)(ns,{}),(0,s.jsx)(Ls,{}),(0,s.jsx)(zs,{})]})})}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.9.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/constants.js":(F,b,i)=>{i.d(b,{Ad:()=>Q,CD:()=>Se,CL:()=>xe,GJ:()=>Y,LW:()=>Z,UX:()=>G,Ul:()=>L,Vw:()=>de,_k:()=>$,gm:()=>j,ld:()=>J,ls:()=>k,mA:()=>te,vI:()=>ve,we:()=>ye,y5:()=>w});var p=i("../../../node_modules/.pnpm/@wordpress+i18n@5.14.0/node_modules/@wordpress/i18n/build-module/index.js"),a=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),f=i("../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-down.js");const j="is",$="isNot",J="isAny",de="isNone",w="isAll",G="isNotAll",Se=[j,$,J,de,w,G],ye={[j]:{key:"is-filter",label:(0,p.__)("Is")},[$]:{key:"is-not-filter",label:(0,p.__)("Is not")},[J]:{key:"is-any-filter",label:(0,p.__)("Is any")},[de]:{key:"is-none-filter",label:(0,p.__)("Is none")},[w]:{key:"is-all-filter",label:(0,p.__)("Is all")},[G]:{key:"is-not-all-filter",label:(0,p.__)("Is not all")}},Y=["asc","desc"],ve={asc:"\u2191",desc:"\u2193"},Z={asc:"ascending",desc:"descending"},xe={asc:(0,p.__)("Sort ascending"),desc:(0,p.__)("Sort descending")},k={asc:a.A,desc:f.A},Q="table",L="grid",te="list"},"../../../node_modules/.pnpm/@wordpress+dataviews@4.9.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/filter-and-sort-data-view.js":(F,b,i)=>{i.d(b,{P:()=>de});var p=i("../../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js"),a=i.n(p),f=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.9.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/constants.js"),j=i("../../../node_modules/.pnpm/@wordpress+dataviews@4.9.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js");function $(w=""){return a()(w.trim().toLowerCase())}const J=[];function de(w,G,Se){var xe;if(!w)return{data:J,paginationInfo:{totalItems:0,totalPages:0}};const ye=(0,j.t)(Se);let Y=[...w];if(G.search){const k=$(G.search);Y=Y.filter(Q=>ye.filter(L=>L.enableGlobalSearch).map(L=>$(L.getValue({item:Q}))).some(L=>L.includes(k)))}if(G.filters&&((xe=G.filters)==null?void 0:xe.length)>0&&G.filters.forEach(k=>{var L,te,Pe,Ne;const Q=ye.find(q=>q.id===k.field);Q&&(k.operator===f.ld&&((L=k==null?void 0:k.value)==null?void 0:L.length)>0?Y=Y.filter(q=>{const ie=Q.getValue({item:q});return Array.isArray(ie)?k.value.some(we=>ie.includes(we)):typeof ie=="string"?k.value.includes(ie):!1}):k.operator===f.Vw&&((te=k==null?void 0:k.value)==null?void 0:te.length)>0?Y=Y.filter(q=>{const ie=Q.getValue({item:q});return Array.isArray(ie)?!k.value.some(we=>ie.includes(we)):typeof ie=="string"?!k.value.includes(ie):!1}):k.operator===f.y5&&((Pe=k==null?void 0:k.value)==null?void 0:Pe.length)>0?Y=Y.filter(q=>k.value.every(ie=>{var we;return(we=Q.getValue({item:q}))==null?void 0:we.includes(ie)})):k.operator===f.UX&&((Ne=k==null?void 0:k.value)==null?void 0:Ne.length)>0?Y=Y.filter(q=>k.value.every(ie=>{var we;return!((we=Q.getValue({item:q}))!=null&&we.includes(ie))})):k.operator===f.gm?Y=Y.filter(q=>k.value===Q.getValue({item:q})):k.operator===f._k&&(Y=Y.filter(q=>k.value!==Q.getValue({item:q}))))}),G.sort){const k=G.sort.field,Q=ye.find(L=>L.id===k);Q&&Y.sort((L,te)=>{var Ne;var Pe;return Q.sort(L,te,(Pe=(Ne=G.sort)==null?void 0:Ne.direction)!==null&&Pe!==void 0?Pe:"desc")})}let ve=Y.length,Z=1;if(G.page!==void 0&&G.perPage!==void 0){const k=(G.page-1)*G.perPage;ve=(Y==null?void 0:Y.length)||0,Z=Math.ceil(ve/G.perPage),Y=Y==null?void 0:Y.slice(k,k+G.perPage)}return{data:Y,paginationInfo:{totalItems:ve,totalPages:Z}}}},"../../../node_modules/.pnpm/@wordpress+dataviews@4.9.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js":(F,b,i)=>{i.d(b,{t:()=>Ut});function p(x,v,A){return A==="asc"?x-v:v-x}function a(x,v){return!(x===""||!Number.isInteger(Number(x))||v!=null&&v.elements&&!(v==null?void 0:v.elements.map(O=>O.value)).includes(Number(x)))}const f={sort:p,isValid:a,Edit:"integer"};function j(x,v,A){return A==="asc"?x.localeCompare(v):v.localeCompare(x)}function $(x,v){var A;return!(v!=null&&v.elements&&!((A=v==null?void 0:v.elements)==null?void 0:A.map(S=>S.value)).includes(x))}const J={sort:j,isValid:$,Edit:"text"};function de(x,v,A){const O=new Date(x).getTime(),S=new Date(v).getTime();return A==="asc"?O-S:S-O}function w(x,v){return!(v!=null&&v.elements&&!(v==null?void 0:v.elements.map(O=>O.value)).includes(x))}const G={sort:de,isValid:w,Edit:"datetime"};function Se(x){return x==="integer"?f:x==="text"?J:x==="datetime"?G:{sort:(v,A,O)=>typeof v=="number"&&typeof A=="number"?O==="asc"?v-A:A-v:O==="asc"?v.localeCompare(A):A.localeCompare(v),isValid:(v,A)=>{var O;return!(A!=null&&A.elements&&!((O=A==null?void 0:A.elements)==null?void 0:O.map(X=>X.value)).includes(v))},Edit:()=>null}}var ye=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),Y=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),ve=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMinute.mjs"),Z=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.mjs"),xe=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/set.mjs"),k=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs"),Q=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),L=i("../../../node_modules/.pnpm/@wordpress+i18n@5.14.0/node_modules/@wordpress/i18n/build-module/index.js"),te=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/select-control/index.js"),Pe=i("../../../node_modules/.pnpm/@wordpress+date@5.14.0/node_modules/@wordpress/date/build-module/index.js"),Ne=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),q=i("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.12_react@18.3.1__@types+react@18.3.12_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),ie=i("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.12_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),we=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),Te=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js"),Oe=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),Ze=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js"),He=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/number-control/index.js");function nn(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const We=(0,q.A)("div",{target:"evcr2319"})("box-sizing:border-box;font-size:",we.A.fontSize,";"),H=(0,q.A)("fieldset",{target:"evcr2318"})("border:0;margin:0 0 ",(0,Oe.x)(2*2)," 0;padding:0;&:last-child{margin-bottom:0;}"),ne=(0,q.A)("div",{target:"evcr2317"})({name:"pd0mhc",styles:"direction:ltr;display:flex"}),Qe=(0,ie.AH)("&&& ",Ze.pd,"{padding-left:",(0,Oe.x)(2),";padding-right:",(0,Oe.x)(2),";text-align:center;}",""),At=(0,q.A)(He.A,{target:"evcr2316"})(Qe," width:",(0,Oe.x)(9),";&&& ",Ze.pd,"{padding-right:0;}&&& ",Ze.Hr,"{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;}"),_e=(0,q.A)("span",{target:"evcr2315"})("border-top:",we.A.borderWidth," solid ",Te.l.gray[700],";border-bottom:",we.A.borderWidth," solid ",Te.l.gray[700],";font-size:",we.A.fontSize,`;line-height:calc(
		`,we.A.controlHeight," - ",we.A.borderWidth,` * 2
	);display:inline-block;`),le=(0,q.A)(He.A,{target:"evcr2314"})(Qe," width:",(0,Oe.x)(9),";&&& ",Ze.pd,"{padding-left:0;}&&& ",Ze.Hr,"{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0;}"),ct=(0,q.A)("div",{target:"evcr2313"})({name:"1ff36h2",styles:"flex-grow:1"}),Me=(0,q.A)(He.A,{target:"evcr2312"})(Qe," width:",(0,Oe.x)(9),";"),Ct=(0,q.A)(He.A,{target:"evcr2311"})(Qe," width:",(0,Oe.x)(14),";"),ut=(0,q.A)("div",{target:"evcr2310"})({name:"ebu3jh",styles:"text-decoration:underline dotted"});var K=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Et=()=>{const{timezone:x}=(0,Pe.mt)(),v=-1*(new Date().getTimezoneOffset()/60);if(Number(x.offset)===v)return null;const A=Number(x.offset)>=0?"+":"",O=x.abbr!==""&&isNaN(Number(x.abbr))?x.abbr:`UTC${A}${x.offsetFormatted}`,S=x.string.replace("_"," "),X=x.string==="UTC"?(0,L.__)("Coordinated Universal Time"):`(${O}) ${S}`;return S.trim().length===0?(0,K.jsx)(ut,{className:"components-datetime__timezone",children:O}):(0,K.jsx)(Ne.Ay,{placement:"top",text:X,children:(0,K.jsx)(ut,{className:"components-datetime__timezone",children:O})})};var je=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),s=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spacer/component.js"),Pt=i("../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs"),tt=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js");function mt(x){return typeof x=="string"?new Date(x):(0,Pt.a)(x)}function pt(x,v){return v?(x%12+12)%24:x%12}function Ot(x){return x%12||12}function nt(x){return(v,A)=>{const O={...v};return(A.type===tt.cJ||A.type===tt.wX||A.type===tt.r7)&&O.value!==void 0&&(O.value=O.value.toString().padStart(x,"0")),O}}function Le(x){var O,S;var v;const A=(v=(S=(O=x.target)==null?void 0:O.ownerDocument.defaultView)==null?void 0:S.HTMLInputElement)!==null&&v!==void 0?v:HTMLInputElement;return x.target instanceof A?x.target.validity.valid:!1}const $e="yyyy-MM-dd'T'HH:mm:ss";var st=i("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),Mt=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),_t=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js"),ot=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js");function vt({value:x,defaultValue:v,is12Hour:A,label:O,minutesProps:S,onChange:X}){const[oe={hours:new Date().getHours(),minutes:new Date().getMinutes()},ae]=(0,Mt.j)({value:x,onChange:X,defaultValue:v}),fe=Ge(oe.hours),De=Ot(oe.hours),Ie=me=>(Ae,{event:Ve})=>{if(!Le(Ve))return;const Ke=Number(Ae);ae({...oe,[me]:me==="hours"&&A?pt(Ke,fe==="PM"):Ke})},be=me=>()=>{fe!==me&&ae({...oe,hours:pt(De,me==="PM")})};function Ge(me){return me<12?"AM":"PM"}const ke=O?H:Q.Fragment;return(0,K.jsxs)(ke,{children:[O&&(0,K.jsx)(ye.Ay.VisualLabel,{as:"legend",children:O}),(0,K.jsxs)(je.A,{alignment:"left",expanded:!1,children:[(0,K.jsxs)(ne,{className:"components-datetime__time-field components-datetime__time-field-time",children:[(0,K.jsx)(At,{className:"components-datetime__time-field-hours-input",label:(0,L.__)("Hours"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:String(A?De:oe.hours).padStart(2,"0"),step:1,min:A?1:0,max:A?12:23,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:Ie("hours"),__unstableStateReducer:nt(2)}),(0,K.jsx)(_e,{className:"components-datetime__time-separator","aria-hidden":"true",children:":"}),(0,K.jsx)(le,{className:(0,st.A)("components-datetime__time-field-minutes-input",S==null?void 0:S.className),label:(0,L.__)("Minutes"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:String(oe.minutes).padStart(2,"0"),step:1,min:0,max:59,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:(...me)=>{var Ae;Ie("minutes")(...me),(Ae=S==null?void 0:S.onChange)==null||Ae.call(S,...me)},__unstableStateReducer:nt(2),...S})]}),A&&(0,K.jsxs)(_t.A,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,isBlock:!0,label:(0,L.__)("Select AM or PM"),hideLabelFromVision:!0,value:fe,onChange:me=>{be(me)()},children:[(0,K.jsx)(ot.A,{value:"AM",label:(0,L.__)("AM")}),(0,K.jsx)(ot.A,{value:"PM",label:(0,L.__)("PM")})]})]})]})}const on=null,Dt=["dmy","mdy","ymd"];function it({is12Hour:x,currentTime:v,onChange:A,dateOrder:O,hideLabelFromVision:S=!1}){const[X,oe]=(0,Q.useState)(()=>v?(0,ve.c)(mt(v)):new Date);(0,Q.useEffect)(()=>{oe(v?(0,ve.c)(mt(v)):new Date)},[v]);const ae=[{value:"01",label:(0,L.__)("January")},{value:"02",label:(0,L.__)("February")},{value:"03",label:(0,L.__)("March")},{value:"04",label:(0,L.__)("April")},{value:"05",label:(0,L.__)("May")},{value:"06",label:(0,L.__)("June")},{value:"07",label:(0,L.__)("July")},{value:"08",label:(0,L.__)("August")},{value:"09",label:(0,L.__)("September")},{value:"10",label:(0,L.__)("October")},{value:"11",label:(0,L.__)("November")},{value:"12",label:(0,L.__)("December")}],{day:fe,month:De,year:Ie,minutes:be,hours:Ge}=(0,Q.useMemo)(()=>({day:(0,Z.GP)(X,"dd"),month:(0,Z.GP)(X,"MM"),year:(0,Z.GP)(X,"yyyy"),minutes:(0,Z.GP)(X,"mm"),hours:(0,Z.GP)(X,"HH"),am:(0,Z.GP)(X,"a")}),[X]),ke=ze=>(qe,{event:Ft})=>{if(!Le(Ft))return;const Ht=Number(qe),ht=(0,xe.h)(X,{[ze]:Ht});oe(ht),A==null||A((0,Z.GP)(ht,$e))},me=({hours:ze,minutes:Xe})=>{const qe=(0,xe.h)(X,{hours:ze,minutes:Xe});oe(qe),A==null||A((0,Z.GP)(qe,$e))},Ae=(0,K.jsx)(Me,{className:"components-datetime__time-field components-datetime__time-field-day",label:(0,L.__)("Day"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:fe,step:1,min:1,max:31,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:ke("date")},"day"),Ve=(0,K.jsx)(ct,{children:(0,K.jsx)(te.A,{className:"components-datetime__time-field components-datetime__time-field-month",label:(0,L.__)("Month"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,value:De,options:ae,onChange:ze=>{const Xe=(0,k.Z)(X,Number(ze)-1);oe(Xe),A==null||A((0,Z.GP)(Xe,$e))}})},"month"),Ke=(0,K.jsx)(Ct,{className:"components-datetime__time-field components-datetime__time-field-year",label:(0,L.__)("Year"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:Ie,step:1,min:1,max:9999,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:ke("year"),__unstableStateReducer:nt(4)},"year"),Wt=x?"mdy":"dmy",ft=(O&&Dt.includes(O)?O:Wt).split("").map(ze=>{switch(ze){case"d":return Ae;case"m":return Ve;case"y":return Ke;default:return null}});return(0,K.jsxs)(We,{className:"components-datetime__time",children:[(0,K.jsxs)(H,{children:[S?(0,K.jsx)(Y.A,{as:"legend",children:(0,L.__)("Time")}):(0,K.jsx)(ye.Ay.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,L.__)("Time")}),(0,K.jsxs)(je.A,{className:"components-datetime__time-wrapper",children:[(0,K.jsx)(vt,{value:{hours:Number(Ge),minutes:Number(be)},is12Hour:x,onChange:me}),(0,K.jsx)(s.A,{}),(0,K.jsx)(Et,{})]})]}),(0,K.jsxs)(H,{children:[S?(0,K.jsx)(Y.A,{as:"legend",children:(0,L.__)("Date")}):(0,K.jsx)(ye.Ay.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,L.__)("Date")}),(0,K.jsx)(je.A,{className:"components-datetime__time-wrapper",children:ft})]})]})}it.TimeInput=vt,Object.assign(it.TimeInput,{displayName:"TimePicker.TimeInput"});const It=it;function St({data:x,field:v,onChange:A,hideLabelFromVision:O}){const{id:S,label:X}=v,oe=v.getValue({item:x}),ae=(0,Q.useCallback)(fe=>A({[S]:fe}),[S,A]);return(0,K.jsxs)("fieldset",{className:"dataviews-controls__datetime",children:[!O&&(0,K.jsx)(ye.Ay.VisualLabel,{as:"legend",children:X}),O&&(0,K.jsx)(Y.A,{as:"legend",children:X}),(0,K.jsx)(It,{currentTime:oe,onChange:ae,hideLabelFromVision:!0})]})}function Tt({data:x,field:v,onChange:A,hideLabelFromVision:O}){var S;const{id:X,label:oe,description:ae}=v,fe=(S=v.getValue({item:x}))!==null&&S!==void 0?S:"",De=(0,Q.useCallback)(Ie=>A({[X]:Number(Ie)}),[X,A]);return(0,K.jsx)(He.A,{label:oe,help:ae,value:fe,onChange:De,__next40pxDefaultSize:!0,hideLabelFromVision:O})}var kt=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/radio-control/index.js");function Rt({data:x,field:v,onChange:A,hideLabelFromVision:O}){const{id:S,label:X}=v,oe=v.getValue({item:x}),ae=(0,Q.useCallback)(fe=>A({[S]:fe}),[S,A]);return v.elements?(0,K.jsx)(kt.A,{label:X,onChange:ae,options:v.elements,selected:oe,hideLabelFromVision:O}):null}function Lt({data:x,field:v,onChange:A,hideLabelFromVision:O}){var S,X;const{id:oe,label:ae}=v,fe=(S=v.getValue({item:x}))!==null&&S!==void 0?S:"",De=(0,Q.useCallback)(be=>A({[oe]:be}),[oe,A]),Ie=[{label:(0,L.__)("Select item"),value:""},...(X=v==null?void 0:v.elements)!==null&&X!==void 0?X:[]];return(0,K.jsx)(te.A,{label:ae,value:fe,options:Ie,onChange:De,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:O})}var Vt=i("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js");function Bt({data:x,field:v,onChange:A,hideLabelFromVision:O}){const{id:S,label:X,placeholder:oe}=v,ae=v.getValue({item:x}),fe=(0,Q.useCallback)(De=>A({[S]:De}),[S,A]);return(0,K.jsx)(Vt.A,{label:X,placeholder:oe,value:ae!=null?ae:"",onChange:fe,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,hideLabelFromVision:O})}const wt={datetime:St,integer:Tt,radio:Rt,select:Lt,text:Bt};function Nt(x,v){return typeof x.Edit=="function"?x.Edit:typeof x.Edit=="string"?rt(x.Edit):x.elements?rt("select"):typeof v.Edit=="string"?rt(v.Edit):v.Edit}function rt(x){if(Object.keys(wt).includes(x))return wt[x];throw"Control "+x+" not found"}const zt=x=>({item:v})=>{const A=x.split(".");let O=v;for(const S of A)O.hasOwnProperty(S)?O=O[S]:O=void 0;return O};function Ut(x){return x.map(v=>{var A,O,S,X;const oe=Se(v.type),ae=v.getValue||zt(v.id),fe=(A=v.sort)!==null&&A!==void 0?A:function(me,Ae,Ve){return oe.sort(ae({item:me}),ae({item:Ae}),Ve)},De=(O=v.isValid)!==null&&O!==void 0?O:function(me,Ae){return oe.isValid(ae({item:me}),Ae)},Ie=Nt(v,oe),be=({item:ke})=>{var Ae,Ve;const me=ae({item:ke});return((Ve=(Ae=v==null?void 0:v.elements)==null?void 0:Ae.find(Ke=>Ke.value===me))==null?void 0:Ve.label)||ae({item:ke})},Ge=v.render||(v.elements?be:ae);return{...v,label:v.label||v.id,header:v.header||v.label||v.id,getValue:ae,render:Ge,sort:fe,isValid:De,Edit:Ie,enableHiding:(S=v.enableHiding)!==null&&S!==void 0?S:!0,enableSorting:(X=v.enableSorting)!==null&&X!==void 0?X:!0}})}},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(F,b,i)=>{i.d(b,{A:()=>f});var p=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a({icon:j,size:$=24,...J},de){return(0,p.cloneElement)(j,{width:$,height:$,...J,ref:de})}const f=(0,p.forwardRef)(a)},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-down.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/block-table.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(p.wA,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/category.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(p.wA,{d:"M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(p.wA,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right-small.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(p.wA,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/code.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(p.wA,{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cog.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/color.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(p.wA,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/format-list-bullets.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/funnel.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(p.wA,{d:"M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/next.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/previous.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/seen.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(p.wA,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/shield.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(p.wA,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/unseen.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)(p.wA,{d:"M20.7 12.7s0-.1-.1-.2c0-.2-.2-.4-.4-.6-.3-.5-.9-1.2-1.6-1.8-.7-.6-1.5-1.3-2.6-1.8l-.6 1.4c.9.4 1.6 1 2.1 1.5.6.6 1.1 1.2 1.4 1.6.1.2.3.4.3.5v.1l.7-.3.7-.3Zm-5.2-9.3-1.8 4c-.5-.1-1.1-.2-1.7-.2-3 0-5.2 1.4-6.6 2.7-.7.7-1.2 1.3-1.6 1.8-.2.3-.3.5-.4.6 0 0 0 .1-.1.2s0 0 .7.3l.7.3V13c0-.1.2-.3.3-.5.3-.4.7-1 1.4-1.6 1.2-1.2 3-2.3 5.5-2.3H13v.3c-.4 0-.8-.1-1.1-.1-1.9 0-3.5 1.6-3.5 3.5s.6 2.3 1.6 2.9l-2 4.4.9.4 7.6-16.2-.9-.4Zm-3 12.6c1.7-.2 3-1.7 3-3.5s-.2-1.4-.6-1.9L12.4 16Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.14.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js":(F,b,i)=>{i.d(b,{A:()=>j});var p=i("../../../node_modules/.pnpm/@wordpress+primitives@4.14.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=i("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,a.jsx)(p.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,a.jsx)(p.wA,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@4.9.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-style/style.css":(F,b,i)=>{i.d(b,{A:()=>J});var p=i("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=i.n(p),f=i("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),j=i.n(f),$=j()(a());$.push([F.id,`/**
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
  min-height: 24px;
  display: flex;
  align-items: center;
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
.dataviews-view-table.has-compact-density thead th:has(.dataviews-view-table-header-button):not(:first-child) {
  padding-left: 0;
}
.dataviews-view-table.has-compact-density td,
.dataviews-view-table.has-compact-density th {
  padding: 4px 8px;
}
.dataviews-view-table.has-comfortable-density td,
.dataviews-view-table.has-comfortable-density th {
  padding: 16px 12px;
}
.dataviews-view-table.has-compact-density td.dataviews-view-table__checkbox-column,
.dataviews-view-table.has-compact-density th.dataviews-view-table__checkbox-column, .dataviews-view-table.has-comfortable-density td.dataviews-view-table__checkbox-column,
.dataviews-view-table.has-comfortable-density th.dataviews-view-table__checkbox-column {
  padding-right: 0;
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
}

.components-popover.components-dropdown__content.dataforms-layouts-panel__field-dropdown {
  z-index: 159990;
}

.dataforms-layouts-regular__field {
  width: 100%;
  min-height: 32px;
  justify-content: flex-start !important;
  align-items: flex-start !important;
}

.dataforms-layouts-regular__field .components-base-control__label {
  font-size: inherit;
  font-weight: normal;
  text-transform: none;
}

.dataforms-layouts-regular__field-label {
  width: 38%;
  flex-shrink: 0;
  min-height: 32px;
  display: flex;
  align-items: center;
  padding: 6px 0;
  line-height: 20px;
  hyphens: auto;
}

.dataforms-layouts-regular__field-control {
  flex-grow: 1;
  min-height: 32px;
  display: flex;
  align-items: center;
}`,""]);const J=$}}]);})();
