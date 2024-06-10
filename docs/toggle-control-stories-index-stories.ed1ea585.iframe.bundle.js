"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9584],{"../components/components/toggle-control/stories/index.stories.tsx":(j,m,e)=>{var T,v,B,P,R,H,E,L,I,D,O,M,W,N,Z;e.r(m),e.d(m,{Default:()=>x,Disabled:()=>g,HelpText:()=>d,Slow:()=>k,Small:()=>h,__namedExportsOrder:()=>S,default:()=>A});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js"),i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(p),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),t={};t.insert="head",t.singleton=!1;var u=l()(o.Z,t);const a=o.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=({checked:C,className:r,disabled:y,help:f,toggling:w,label:K,size:$="normal",onChange:U})=>{const F=w!==void 0?C&&!w||!C&&w:C,Y=(0,s.useCallback)(J=>{w||U(J)},[w,U]);return(0,n.jsx)(c.Z,{checked:F,className:(0,i.Z)(a.toggle,r,{[a["is-toggling"]]:w,[a["is-small"]]:$==="small",[a["no-label"]]:!K}),disabled:y,help:f,label:K,onChange:Y})};try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(C){}const A={title:"JS Packages/Components/Toggle Control",component:_,parameters:{layout:"centered"}},x=C=>{const[r,y]=(0,s.useState)(!1),f=(0,s.useCallback)(()=>{y(!r)},[r]);return(0,n.jsx)(_,{checked:r,onChange:f,label:"Code is poetry."})},k=C=>{const[r,y]=(0,s.useState)(!1),[f,w]=(0,s.useState)(!1),K=(0,s.useCallback)(()=>{y(!0),setTimeout(()=>{y(!1),w(!f)},2e3)},[f]);return(0,n.jsx)(_,{checked:f,toggling:r,onChange:K,label:"Code is poetry."})},g=C=>{const[r,y]=(0,s.useState)(!1),f=(0,s.useCallback)(()=>{y(!r)},[r]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:f}),(0,n.jsx)(_,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:f})]})},h=C=>{const[r,y]=(0,s.useState)(!1),f=(0,s.useCallback)(()=>{y(!r)},[r]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(_,{checked:r,size:"small",label:"Code is poetry.",onChange:f})})},d=C=>{const[r,y]=(0,s.useState)(!1),f=(0,s.useCallback)(()=>{y(!r)},[r]);return(0,n.jsx)(_,{checked:r,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:f})};x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(B=(v=x.parameters)==null?void 0:v.docs)==null?void 0:B.source}}},k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
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
}`,...(H=(R=k.parameters)==null?void 0:R.docs)==null?void 0:H.source}}},g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(I=(L=g.parameters)==null?void 0:L.docs)==null?void 0:I.source}}},h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(M=(O=h.parameters)==null?void 0:O.docs)==null?void 0:M.source}}},d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(Z=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Z.source}}};const S=["Default","Slow","Disabled","Small","HelpText"];try{x.displayName="Default",x.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:x.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(C){}try{k.displayName="Slow",k.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:k.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(C){}try{g.displayName="Disabled",g.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:g.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(C){}try{h.displayName="Small",h.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:h.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch(C){}try{d.displayName="HelpText",d.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:d.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(C){}},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(j,m,e)=>{e.d(m,{Z:()=>a});var s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function l(n){const b=(0,i.y)(n,"FlexBlock");return(0,p.i)({isBlock:!0,...b})}var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t(n,b){const _=l(n);return(0,o.jsx)(c.Z,{..._,ref:b})}const a=(0,s.Iq)(t,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js":(j,m,e)=>{e.d(m,{Z:()=>t});var s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function l(u,a){const n=(0,i.R)(u);return(0,p.jsx)(c.Z,{...n,ref:a})}const t=(0,s.Iq)(l,"HStack")},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js":(j,m,e)=>{e.d(m,{Z:()=>k});var s=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=()=>{};function u(g,h){const{className:d,checked:S,id:T,disabled:v,onChange:B=t,...P}=g,R=(0,l.Z)("components-form-toggle",d,{"is-checked":S,"is-disabled":v});return(0,o.jsxs)("span",{className:R,children:[(0,o.jsx)("input",{className:"components-form-toggle__input",id:T,type:"checkbox",checked:S,onChange:B,disabled:v,...P,ref:h}),(0,o.jsx)("span",{className:"components-form-toggle__track"}),(0,o.jsx)("span",{className:"components-form-toggle__thumb"})]})}const a=(0,c.forwardRef)(u);var n=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),A=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js");function x({__nextHasNoMarginBottom:g,label:h,checked:d,help:S,className:T,onChange:v,disabled:B},P){function R(M){v(M.target.checked)}const E=`inspector-toggle-control-${(0,i.Z)(x)}`,I=(0,_.I)()("components-toggle-control",T,!g&&(0,s.iv)({marginBottom:(0,A.D)(3)},"",""));let D,O;return S&&(typeof S=="function"?d!==void 0&&(O=S(d)):O=S,O&&(D=E+"__help")),(0,o.jsx)(n.ZP,{id:E,help:O,className:I,__nextHasNoMarginBottom:!0,children:(0,o.jsxs)(b.Z,{justify:"flex-start",spacing:3,children:[(0,o.jsx)(a,{id:E,checked:d,onChange:R,"aria-describedby":D,disabled:B,ref:P}),(0,o.jsx)(p.Z,{as:"label",htmlFor:E,className:"components-toggle-control__label",children:h})]})})}const k=(0,c.forwardRef)(x)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(j,m,e)=>{e.d(m,{Z:()=>u});var s=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const i={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var p=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function o(a,n){const{style:b,..._}=(0,s.y)(a,"VisuallyHidden");return(0,l.jsx)(p.Z,{ref:n,..._,style:{...i,...b||{}}})}const u=(0,c.Iq)(o,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(j,m,e)=>{e.d(m,{Z:()=>l});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const c=new WeakMap;function i(o){const t=c.get(o)||0;return c.set(o,t+1),t}function p(o,t,u){return(0,s.useMemo)(()=>{if(u)return u;const a=i(o);return t?`${t}-${a}`:a},[o,u,t])}const l=p},"../../../node_modules/.pnpm/@wordpress+deprecated@4.0.0/node_modules/@wordpress/deprecated/build-module/index.js":(j,m,e)=>{e.d(m,{Z:()=>i});var s=e("../../../node_modules/.pnpm/@wordpress+hooks@4.0.0/node_modules/@wordpress/hooks/build-module/index.js");const c=Object.create(null);function i(p,l={}){const{since:o,version:t,alternative:u,plugin:a,link:n,hint:b}=l,_=a?` from ${a}`:"",A=o?` since version ${o}`:"",x=t?` and will be removed${_} in version ${t}`:"",k=u?` Please use ${u} instead.`:"",g=n?` See: ${n}`:"",h=b?` Note: ${b}`:"",d=`${p} is deprecated${A}${x}.${k}${g}${h}`;d in c||((0,s.Kw)("deprecated",p,l,d),console.warn(d),c[d]=!0)}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(j,m,e)=>{e.d(m,{Z:()=>o});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(s),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(i),l=p()(c());l.push([j.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 )}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:calc(var(--base-width)*6);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),l.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const o=l}}]);})();
