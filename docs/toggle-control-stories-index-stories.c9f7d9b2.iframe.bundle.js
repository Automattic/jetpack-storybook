(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9584],{"../components/components/toggle-control/stories/index.stories.tsx":(y,p,e)=>{var w,A,B,P,L,E,H,I,D,O,M,N,W,Z,F;"use strict";e.r(p),e.d(p,{Default:()=>S,Disabled:()=>C,HelpText:()=>g,Slow:()=>h,Small:()=>m,__namedExportsOrder:()=>R,default:()=>T});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js"),_=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(_),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(t),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),l={};l.insert="head",l.singleton=!1;var u=n()(o.Z,l);const a=o.Z.locals||{};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=({checked:f,className:i,disabled:k,help:x,toggling:v,label:K,size:$="normal",onChange:U})=>{const Y=v!==void 0?f&&!v||!f&&v:f,J=(0,s.useCallback)(V=>{v||U(V)},[v,U]);return(0,c.jsx)(r.Z,{checked:Y,className:d()(a.toggle,i,{[a["is-toggling"]]:v,[a["is-small"]]:$==="small",[a["no-label"]]:!K}),disabled:k,help:x,label:K,onChange:J})};try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(f){}const T={title:"JS Packages/Components/Toggle Control",component:b,parameters:{layout:"centered"}},S=f=>{const[i,k]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{k(!i)},[i]);return(0,c.jsx)(b,{checked:i,onChange:x,label:"Code is poetry."})},h=f=>{const[i,k]=(0,s.useState)(!1),[x,v]=(0,s.useState)(!1),K=(0,s.useCallback)(()=>{k(!0),setTimeout(()=>{k(!1),v(!x)},2e3)},[x]);return(0,c.jsx)(b,{checked:x,toggling:i,onChange:K,label:"Code is poetry."})},C=f=>{const[i,k]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{k(!i)},[i]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(b,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:x}),(0,c.jsx)(b,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:x})]})},m=f=>{const[i,k]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{k(!i)},[i]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(b,{checked:i,size:"small",label:"Code is poetry.",onChange:x})})},g=f=>{const[i,k]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{k(!i)},[i]);return(0,c.jsx)(b,{checked:i,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:x})};S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(B=(A=S.parameters)==null?void 0:A.docs)==null?void 0:B.source}}},h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChecked(!checked);
    }, 2000);
  }, [checked]);
  return <ToggleControl checked={checked} toggling={loading} onChange={handleChecked} label="Code is poetry." />;
}`,...(E=(L=h.parameters)==null?void 0:L.docs)==null?void 0:E.source}}},C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(D=(I=C.parameters)==null?void 0:I.docs)==null?void 0:D.source}}},m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}},g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(F=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};const R=["Default","Slow","Disabled","Small","HelpText"];try{S.displayName="Default",S.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:S.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(f){}try{h.displayName="Slow",h.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:h.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(f){}try{C.displayName="Disabled",C.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:C.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(f){}try{m.displayName="Small",m.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:m.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch(f){}try{g.displayName="HelpText",g.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:g.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(f){}},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(y,p,e)=>{"use strict";e.d(p,{Z:()=>u});var s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function t(a){const c=(0,_.y)(a,"FlexBlock");return(0,d.i)({isBlock:!0,...c})}var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function o(a,c){const j=t(a);return(0,n.jsx)(r.Z,{...j,ref:c})}const u=(0,s.Iq)(o,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js":(y,p,e)=>{"use strict";e.d(p,{Z:()=>o});var s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t(l,u){const a=(0,_.R)(l);return(0,d.jsx)(r.Z,{...a,ref:u})}const o=(0,s.Iq)(t,"HStack")},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js":(y,p,e)=>{"use strict";e.d(p,{Z:()=>S});var s=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),t=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=()=>{};function l(h,C){const{className:m,checked:g,id:R,disabled:w,onChange:A=o,...B}=h,P=(0,t.Z)("components-form-toggle",m,{"is-checked":g,"is-disabled":w});return(0,n.jsxs)("span",{className:P,children:[(0,n.jsx)("input",{className:"components-form-toggle__input",id:R,type:"checkbox",checked:g,onChange:A,disabled:w,...B,ref:C}),(0,n.jsx)("span",{className:"components-form-toggle__track"}),(0,n.jsx)("span",{className:"components-form-toggle__thumb"})]})}const u=(0,r.forwardRef)(l);var a=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),j=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js");function T({__nextHasNoMarginBottom:h,label:C,checked:m,help:g,className:R,onChange:w,disabled:A},B){function P(M){w(M.target.checked)}const E=`inspector-toggle-control-${(0,_.Z)(T)}`,I=(0,j.I)()("components-toggle-control",R,!h&&(0,s.iv)({marginBottom:(0,b.D)(3)},"",""));let D,O;return g&&(typeof g=="function"?m!==void 0&&(O=g(m)):O=g,O&&(D=E+"__help")),(0,n.jsx)(a.ZP,{id:E,help:O,className:I,__nextHasNoMarginBottom:!0,children:(0,n.jsxs)(c.Z,{justify:"flex-start",spacing:3,children:[(0,n.jsx)(u,{id:E,checked:m,onChange:P,"aria-describedby":D,disabled:A,ref:B}),(0,n.jsx)(d.Z,{as:"label",htmlFor:E,className:"components-toggle-control__label",children:C})]})})}const S=(0,r.forwardRef)(T)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(y,p,e)=>{"use strict";e.d(p,{Z:()=>l});var s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const _={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var d=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function n(u,a){const{style:c,...j}=(0,s.y)(u,"VisuallyHidden");return(0,t.jsx)(d.Z,{ref:a,...j,style:{..._,...c||{}}})}const l=(0,r.Iq)(n,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(y,p,e)=>{"use strict";e.d(p,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r=new WeakMap;function _(n){const o=r.get(n)||0;return r.set(n,o+1),o}function d(n,o,l){return(0,s.useMemo)(()=>{if(l)return l;const u=_(n);return o?`${o}-${u}`:u},[n,l,o])}const t=d},"../../../node_modules/.pnpm/@wordpress+deprecated@4.0.0/node_modules/@wordpress/deprecated/build-module/index.js":(y,p,e)=>{"use strict";e.d(p,{Z:()=>_});var s=e("../../../node_modules/.pnpm/@wordpress+hooks@4.0.0/node_modules/@wordpress/hooks/build-module/index.js");const r=Object.create(null);function _(d,t={}){const{since:n,version:o,alternative:l,plugin:u,link:a,hint:c}=t,j=u?` from ${u}`:"",b=n?` since version ${n}`:"",T=o?` and will be removed${j} in version ${o}`:"",S=l?` Please use ${l} instead.`:"",h=a?` See: ${a}`:"",C=c?` Note: ${c}`:"",m=`${d} is deprecated${b}${T}.${S}${h}${C}`;m in r||((0,s.Kw)("deprecated",d,t,m),console.warn(m),r[m]=!0)}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(y,p)=>{var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var r={}.hasOwnProperty,_="[native code]";function d(){for(var t=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var l=typeof o;if(l==="string"||l==="number")t.push(o);else if(Array.isArray(o)){if(o.length){var u=d.apply(null,o);u&&t.push(u)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){t.push(o.toString());continue}for(var a in o)r.call(o,a)&&o[a]&&t.push(a)}}}return t.join(" ")}y.exports?(d.default=d,y.exports=d):(e=[],s=function(){return d}.apply(p,e),s!==void 0&&(y.exports=s))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(y,p,e)=>{"use strict";e.d(p,{Z:()=>n});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(s),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(_),t=d()(r());t.push([y.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 )}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:calc(var(--base-width)*6);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),t.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const n=t}}]);})();
