"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1638],{"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/card/card/component.js":(E,_,t)=>{t.d(_,{C:()=>to});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.74_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),c=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-system-provider.js"),b=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),a=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js"),s=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js");function v(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const S={name:"12ip69d",styles:"background:transparent;display:block;margin:0!important;pointer-events:none;position:absolute;will-change:box-shadow"};var u=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),R=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/reduce-motion.js"),P=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),h=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/values.js");function D(r){const n=`rgba(0, 0, 0, ${r/20})`;return`0 ${r}px ${r*2}px 0
	${n}`}function Z(r){const{active:n,borderRadius:i="inherit",className:l,focus:d,hover:m,isInteractive:f=!1,offset:p=0,value:g=0,...x}=(0,s.y)(r,"Elevation"),w=(0,P.I)(),j=(0,e.useMemo)(()=>{let B=(0,h.Jf)(m)?m:g*2,$=(0,h.Jf)(n)?n:g/2;f||(B=(0,h.Jf)(m)?m:void 0,$=(0,h.Jf)(n)?n:void 0);const no=`box-shadow ${u.Z.transitionDuration} ${u.Z.transitionTimingFunction}`,y={};return y.Base=(0,o.iv)({borderRadius:i,bottom:p,boxShadow:D(g),opacity:u.Z.elevationIntensity,left:p,right:p,top:p,transition:no},(0,R.r)("transition"),"",""),(0,h.Jf)(B)&&(y.hover=(0,o.iv)("*:hover>&{box-shadow:",D(B),";}","")),(0,h.Jf)($)&&(y.active=(0,o.iv)("*:active>&{box-shadow:",D($),";}","")),(0,h.Jf)(d)&&(y.focus=(0,o.iv)("*:focus>&{box-shadow:",D(d),";}","")),w(S,y.Base,y.hover,y.focus,y.active,l)},[n,i,l,w,d,m,f,p,g]);return{...x,className:j,"aria-hidden":!0}}function T(r,n){const i=Z(r);return(0,e.createElement)(a.Z,{...i,ref:n})}const k=(0,b.Iq)(T,"Elevation");var C=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/card/styles.js"),O=t("../../../node_modules/.pnpm/@wordpress+deprecated@3.55.0/node_modules/@wordpress/deprecated/build-module/index.js"),I=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const z=(0,o.iv)("background-color:",u.Z.surfaceColor,";color:",I.D.gray[900],";position:relative;",""),so=(0,o.iv)("background-color:",u.Z.surfaceBackgroundColor,";","");function F({borderBottom:r,borderLeft:n,borderRight:i,borderTop:l}){const d=`1px solid ${u.Z.surfaceBorderColor}`;return(0,o.iv)({borderBottom:r?d:void 0,borderLeft:n?d:void 0,borderRight:i?d:void 0,borderTop:l?d:void 0},"","")}const L=(0,o.iv)("",""),H=(0,o.iv)("background:",u.Z.surfaceBackgroundTintColor,";",""),W=(0,o.iv)("background:",u.Z.surfaceBackgroundTertiaryColor,";",""),M=r=>[r,r].join(" "),G=r=>["90deg",[u.Z.surfaceBackgroundColor,r].join(" "),"transparent 1%"].join(","),A=r=>[[u.Z.surfaceBackgroundColor,r].join(" "),"transparent 1%"].join(","),U=r=>[`linear-gradient( ${G(r)} ) center`,`linear-gradient( ${A(r)} ) center`,u.Z.surfaceBorderBoldColor].join(","),X=(r,n)=>(0,o.iv)("background:",U(n),";background-size:",M(r),";",""),V=[`${u.Z.surfaceBorderSubtleColor} 1px`,"transparent 1px"].join(","),J=["90deg",`${u.Z.surfaceBorderSubtleColor} 1px`,"transparent 1px"].join(","),K=[`linear-gradient( ${V} )`,`linear-gradient( ${J} )`].join(","),Y=r=>(0,o.iv)("background:",u.Z.surfaceBackgroundColor,";background-image:",K,";background-size:",M(r),";",""),Q=(r,n,i)=>{switch(r){case"dotted":return X(n,i);case"grid":return Y(n);case"primary":return L;case"secondary":return H;case"tertiary":return W}};function q(r){const{backgroundSize:n=12,borderBottom:i=!1,borderLeft:l=!1,borderRight:d=!1,borderTop:m=!1,className:f,variant:p="primary",...g}=(0,s.y)(r,"Surface"),x=(0,P.I)(),w=(0,e.useMemo)(()=>{const j={borders:F({borderBottom:i,borderLeft:l,borderRight:d,borderTop:m})};return x(z,j.borders,Q(p,`${n}px`,`${n-1}px`),f)},[n,i,l,d,m,f,x,p]);return{...g,className:w}}function oo({elevation:r,isElevated:n,...i}){const l={...i};let d=r;if(n){var m;(0,O.Z)("Card isElevated prop",{since:"5.9",alternative:"elevation"}),(m=d)!==null&&m!==void 0||(d=2)}return typeof d!="undefined"&&(l.elevation=d),l}function eo(r){const{className:n,elevation:i=0,isBorderless:l=!1,isRounded:d=!0,size:m="medium",...f}=(0,s.y)(oo(r),"Card"),p=(0,P.I)(),g=(0,e.useMemo)(()=>p(C.Zb,l&&C.fW,d&&C.eP,n),[n,p,l,d]);return{...q({...f,className:g}),elevation:i,isBorderless:l,isRounded:d,size:m}}function ro(r,n){const{children:i,elevation:l,isBorderless:d,isRounded:m,size:f,...p}=eo(r),g=m?u.Z.cardBorderRadius:0,x=(0,P.I)(),w=(0,e.useMemo)(()=>x((0,o.iv)({borderRadius:g},"","")),[x,g]),j=(0,e.useMemo)(()=>{const B={size:f,isBorderless:d};return{CardBody:B,CardHeader:B,CardFooter:B}},[d,f]);return(0,e.createElement)(c.G8,{value:j},(0,e.createElement)(a.Z,{...p,ref:n},(0,e.createElement)(a.Z,{className:x(C.VY)},i),(0,e.createElement)(k,{className:w,isInteractive:!1,value:l?1:0}),(0,e.createElement)(k,{className:w,isInteractive:!1,value:l})))}const to=(0,b.Iq)(ro,"Card")},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/card/styles.js":(E,_,t)=>{t.d(_,{E0:()=>D,F0:()=>O,VY:()=>u,Zb:()=>s,eP:()=>k,fW:()=>T,mT:()=>I,uT:()=>R});var e=t("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.74_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),c=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function b(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const a=`calc(${o.Z.cardBorderRadius} - 1px)`,s=(0,e.iv)("box-shadow:0 0 0 1px ",o.Z.surfaceBorderColor,";outline:none;",""),v={name:"1showjb",styles:"border-bottom:1px solid;box-sizing:border-box;&:last-child{border-bottom:none;}"},S={name:"14n5oej",styles:"border-top:1px solid;box-sizing:border-box;&:first-of-type{border-top:none;}"},u={name:"13udsys",styles:"height:100%"},R={name:"6ywzd",styles:"box-sizing:border-box;height:auto;max-height:100%"},P={name:"dq805e",styles:"box-sizing:border-box;overflow:hidden;&>img,&>iframe{display:block;height:auto;max-width:100%;width:100%;}"},h={name:"c990dr",styles:"box-sizing:border-box;display:block;width:100%"},D=(0,e.iv)("&:first-of-type{border-top-left-radius:",a,";border-top-right-radius:",a,";}&:last-of-type{border-bottom-left-radius:",a,";border-bottom-right-radius:",a,";}",""),Z=(0,e.iv)("border-color:",o.Z.colorDivider,";",""),T={name:"1t90u8d",styles:"box-shadow:none"},N={name:"1e1ncky",styles:"border:none"},k=(0,e.iv)("border-radius:",a,";",""),C=(0,e.iv)("padding:",o.Z.cardPaddingXSmall,";",""),O={large:(0,e.iv)("padding:",o.Z.cardPaddingLarge,";",""),medium:(0,e.iv)("padding:",o.Z.cardPaddingMedium,";",""),small:(0,e.iv)("padding:",o.Z.cardPaddingSmall,";",""),xSmall:C,extraSmall:C},I=(0,e.iv)("background-color:",c.D.ui.backgroundDisabled,";","")},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(E,_,t)=>{t.d(_,{Z:()=>v});var e=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),o=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const c="36px",b="12px",a={controlSurfaceColor:o.D.white,controlTextActiveColor:o.D.theme.accent,controlPaddingX:b,controlPaddingXLarge:`calc(${b} * 1.3334)`,controlPaddingXSmall:`calc(${b} / 1.3334)`,controlBackgroundColor:o.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${o.D.theme.accent}`,controlDestructiveBorderColor:o.D.alert.red,controlHeight:c,controlHeightXSmall:`calc( ${c} * 0.6 )`,controlHeightSmall:`calc( ${c} * 0.8 )`,controlHeightLarge:`calc( ${c} * 1.2 )`,controlHeightXLarge:`calc( ${c} * 1.4 )`},s={toggleGroupControlBackgroundColor:a.controlBackgroundColor,toggleGroupControlBorderColor:o.D.ui.border,toggleGroupControlBackdropBackgroundColor:a.controlSurfaceColor,toggleGroupControlBackdropBorderColor:o.D.ui.border,toggleGroupControlButtonColorActive:a.controlBackgroundColor},v=Object.assign({},a,s,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,e.D)(2)}`,cardPaddingSmall:`${(0,e.D)(4)}`,cardPaddingMedium:`${(0,e.D)(4)} ${(0,e.D)(6)}`,cardPaddingLarge:`${(0,e.D)(6)} ${(0,e.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:o.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:o.D.white,surfaceColor:o.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/reduce-motion.js":(E,_,t)=>{t.d(_,{r:()=>e});function e(o="transition"){let c;switch(o){case"transition":c="transition-duration: 0ms;";break;case"animation":c="animation-duration: 1ms;";break;default:c=`
				animation-duration: 1ms;
				transition-duration: 0ms;
			`}return`
		@media ( prefers-reduced-motion: reduce ) {
			${c};
		}
	`}},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/values.js":(E,_,t)=>{t.d(_,{Jf:()=>e,Me:()=>c,Wx:()=>o,q9:()=>a});function e(s){return s!=null}function o(s){const v=s==="";return!e(s)||v}function c(s=[],v){var S;return(S=s.find(e))!==null&&S!==void 0?S:v}const b=s=>parseFloat(s),a=s=>typeof s=="string"?b(s):s},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(E,_,t)=>{t.d(_,{Z:()=>c});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({icon:b,size:a=24,...s},v){return(0,e.cloneElement)(b,{width:a,height:a,...s,ref:v})}const c=(0,e.forwardRef)(o)}}]);})();