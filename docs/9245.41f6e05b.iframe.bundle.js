"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9245],{"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/context.js":(x,c,e)=>{e.d(c,{G:()=>s,f:()=>r});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const s=(0,o.createContext)({flexItemDisplay:void 0}),r=()=>(0,o.useContext)(s)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/component.js":(x,c,e)=>{e.d(c,{Z:()=>n});var o=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function d(l,f){const p=(0,r.i)(l);return(0,_.jsx)(s.Z,{...p,ref:f})}const n=(0,o.Iq)(d,"FlexItem")},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js":(x,c,e)=>{e.d(c,{i:()=>t});var o=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/context.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/styles.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");function t(n){const{className:l,display:f,isBlock:p=!1,...a}=(0,s.y)(n,"FlexItem"),m={},u=(0,r.f)().flexItemDisplay;m.Base=(0,o.iv)({display:f||u},"","");const i=(0,d.I)()(_.ck,m.Base,p&&_.Ge,l);return{...a,className:i}}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/hook.js":(x,c,e)=>{e.d(c,{k:()=>p});var o=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.5.0/node_modules/@wordpress/deprecated/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/styles.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");function f(a){const{isReversed:m,...u}=a;return typeof m!="undefined"?((0,r.Z)("Flex isReversed",{alternative:'Flex direction="row-reverse" or "column-reverse"',since:"5.9"}),{...u,direction:m?"row-reverse":"row"}):u}function p(a){const{align:m,className:u,direction:y="row",expanded:i=!0,gap:g=2,justify:j="space-between",wrap:v=!1,...I}=(0,_.y)(f(a),"Flex"),M=Array.isArray(y)?y:[y],E=(0,d.V)(M),w=typeof E=="string"&&!!E.includes("column"),P=(0,l.I)(),h=(0,s.useMemo)(()=>{const D=(0,o.iv)({alignItems:m!=null?m:w?"normal":"center",flexDirection:E,flexWrap:v?"wrap":void 0,gap:(0,t.D)(g),justifyContent:j,height:w&&i?"100%":void 0,width:!w&&i?"100%":void 0},"","");return P(n.kC,D,w?n.bg:n.h,u)},[m,u,P,E,i,g,w,j,v]);return{...I,className:h,isColumn:w}}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/styles.js":(x,c,e)=>{e.d(c,{Ge:()=>_,bg:()=>d,ck:()=>r,h:()=>t,kC:()=>s});function o(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const s={name:"zjik7",styles:"display:flex"},r={name:"qgaee5",styles:"display:block;max-height:100%;max-width:100%;min-height:0;min-width:0"},_={name:"82a6rk",styles:"flex:1"},d={name:"13nosa1",styles:">*{min-height:0;}"},t={name:"1pwxzk4",styles:">*{min-width:0;}"}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js":(x,c,e)=>{e.d(c,{R:()=>a});var o=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex/hook.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/values.js");const t={bottom:{align:"flex-end",justify:"center"},bottomLeft:{align:"flex-end",justify:"flex-start"},bottomRight:{align:"flex-end",justify:"flex-end"},center:{align:"center",justify:"center"},edge:{align:"center",justify:"space-between"},left:{align:"center",justify:"flex-start"},right:{align:"center",justify:"flex-end"},stretch:{align:"stretch"},top:{align:"flex-start",justify:"center"},topLeft:{align:"flex-start",justify:"flex-start"},topRight:{align:"flex-start",justify:"flex-end"}},n={bottom:{justify:"flex-end",align:"center"},bottomLeft:{justify:"flex-end",align:"flex-start"},bottomRight:{justify:"flex-end",align:"flex-end"},center:{justify:"center",align:"center"},edge:{justify:"space-between",align:"center"},left:{justify:"center",align:"flex-start"},right:{justify:"center",align:"flex-end"},stretch:{align:"stretch"},top:{justify:"flex-start",align:"center"},topLeft:{justify:"flex-start",align:"flex-start"},topRight:{justify:"flex-start",align:"flex-end"}};function l(m,u="row"){if(!(0,d.Jf)(m))return{};const i=u==="column"?n:t;return m in i?i[m]:{align:m}}var f=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/get-valid-children.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a(m){const{alignment:u="edge",children:y,direction:i,spacing:g=2,...j}=(0,o.y)(m,"HStack"),v=l(u,i),E={children:(0,f.W)(y).map((h,D)=>{if((0,s.H)(h,["Spacer"])){const O=h,b=O.key||`hstack-${D}`;return(0,p.jsx)(r.Z,{isBlock:!0,...O.props},b)}return h}),direction:i,justify:"center",...v,...j,gap:g},{isColumn:w,...P}=(0,_.k)(E);return P}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/get-valid-children.js":(x,c,e)=>{e.d(c,{W:()=>s});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function s(r){return typeof r=="string"?[r]:o.Children.toArray(r).filter(_=>(0,o.isValidElement)(_))}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js":(x,c,e)=>{e.d(c,{V:()=>_});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const s=["40em","52em","64em"],r=(d={})=>{const{defaultIndex:t=0}=d;if(typeof t!="number")throw new TypeError(`Default breakpoint index should be a number. Got: ${t}, ${typeof t}`);if(t<0||t>s.length-1)throw new RangeError(`Default breakpoint index out of range. Theme has ${s.length} breakpoints, got index ${t}`);const[n,l]=(0,o.useState)(t);return(0,o.useEffect)(()=>{const f=()=>s.filter(a=>typeof window!="undefined"?window.matchMedia(`screen and (min-width: ${a})`).matches:!1).length,p=()=>{const a=f();n!==a&&l(a)};return p(),typeof window!="undefined"&&window.addEventListener("resize",p),()=>{typeof window!="undefined"&&window.removeEventListener("resize",p)}},[n]),n};function _(d,t={}){const n=r(t);if(!Array.isArray(d)&&typeof d!="function")return d;const l=d||[];return l[n>=l.length?l.length-1:n]}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/values.js":(x,c,e)=>{e.d(c,{Jf:()=>o,Me:()=>r,Wx:()=>s,q9:()=>d});function o(t){return t!=null}function s(t){const n=t==="";return!o(t)||n}function r(t=[],n){var l;return(l=t.find(o))!==null&&l!==void 0?l:n}const _=t=>parseFloat(t),d=t=>typeof t=="string"?_(t):t}}]);})();