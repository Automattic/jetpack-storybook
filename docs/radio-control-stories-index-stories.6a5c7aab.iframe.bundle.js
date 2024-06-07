(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2206],{"../components/components/radio-control/stories/index.stories.tsx":(_,r,e)=>{var D,M,T;"use strict";e.r(r),e.d(r,{Default:()=>h,__namedExportsOrder:()=>W,default:()=>I});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function o(b){const{label:g,className:S,selected:O,help:j,onChange:k,hideLabelFromVision:A,options:x=[],...L}=b,w=`inspector-radio-control-${(0,p.Z)(o)}`,N=C=>k(C.target.value);return x!=null&&x.length?(0,s.jsx)(t.ZP,{__nextHasNoMarginBottom:!0,label:g,id:w,hideLabelFromVision:A,help:j,className:(0,a.Z)(S,"components-radio-control"),children:(0,s.jsx)(n.Z,{spacing:1,children:x.map((C,P)=>(0,s.jsxs)("div",{className:"components-radio-control__option",children:[(0,s.jsx)("input",{id:`${w}-${P}`,className:"components-radio-control__input",type:"radio",name:w,value:C.value,onChange:N,checked:C.value===O,"aria-describedby":j?`${w}__help`:void 0,...L}),(0,s.jsx)("label",{className:"components-radio-control__label",htmlFor:`${w}-${P}`,children:C.label})]},`${w}-${P}`))})}):null}const l=o;var c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=e.n(c),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(m),y=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/radio-control/styles.module.scss"),v={};v.insert="head",v.singleton=!1;var V=u()(y.Z,v);const E=y.Z.locals||{},f=({selected:b,className:g,disabled:S,help:O,label:j,hideLabelFromVision:k,options:A,onChange:x})=>(0,s.jsx)(l,{selected:b,className:i()(E.radio,g),disabled:S,help:O,label:j,hideLabelFromVision:k,options:A,onChange:x});try{radiocontrol.displayName="radiocontrol",radiocontrol.__docgenInfo={description:"",displayName:"radiocontrol",props:{selected:{defaultValue:null,description:"The current value.",name:"selected",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the radio control is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the radio control.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"The label for the radio control.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:null,description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"A list of options to show.",name:"options",required:!0,type:{name:"{ label: string; value: string; }[]"}},onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/radio-control/index.tsx#radiocontrol"]={docgenInfo:radiocontrol.__docgenInfo,name:"radiocontrol",path:"../components/components/radio-control/index.tsx#radiocontrol"})}catch(b){}const I={title:"JS Packages/Components/Radio Control",component:f,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",defaultValue:!1,description:"Whether or not the radio control is currently disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},help:{control:"text",description:"Additional information to display below the radio control."},label:{control:"text",description:"The label for the radio control."},hideLabelFromVision:{control:"boolean",defaultValue:!1,description:"If true, the label will only be visible to screen readers.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},$=[{label:"One",value:"one"},{label:"Two",value:"two"}],h=b=>{const[g,S]=(0,d.useState)("one"),O=(0,d.useCallback)(j=>{S(j)},[]);return(0,s.jsx)(f,{...b,selected:g,options:$,onChange:O})};h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState('one');
  const handleChange = useCallback(value => {
    setSelected(value);
  }, []);
  return <RadioControl {...args} selected={selected} options={options} onChange={handleChange} />;
}`,...(T=(M=h.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const W=["Default"];try{h.displayName="Default",h.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/radio-control/stories/index.stories.tsx#Default"]={docgenInfo:h.__docgenInfo,name:"Default",path:"../components/components/radio-control/stories/index.stories.tsx#Default"})}catch(b){}},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>c});var d=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js");function n(i){const{expanded:m=!1,alignment:u="stretch",...y}=(0,p.y)(i,"VStack");return(0,t.R)({direction:"column",expanded:m,alignment:u,...y})}var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function o(i,m){const u=n(i);return(0,s.jsx)(a.Z,{...u,ref:m})}const c=(0,d.Iq)(o,"VStack")},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>l});var d=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const p={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var t=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function s(c,i){const{style:m,...u}=(0,d.y)(c,"VisuallyHidden");return(0,n.jsx)(t.Z,{ref:i,...u,style:{...p,...m||{}}})}const l=(0,a.Iq)(s,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>n});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const a=new WeakMap;function p(s){const o=a.get(s)||0;return a.set(s,o+1),o}function t(s,o,l){return(0,d.useMemo)(()=>{if(l)return l;const c=p(s);return o?`${o}-${c}`:c},[s,l,o])}const n=t},"../../../node_modules/.pnpm/@wordpress+deprecated@4.0.0/node_modules/@wordpress/deprecated/build-module/index.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>p});var d=e("../../../node_modules/.pnpm/@wordpress+hooks@4.0.0/node_modules/@wordpress/hooks/build-module/index.js");const a=Object.create(null);function p(t,n={}){const{since:s,version:o,alternative:l,plugin:c,link:i,hint:m}=n,u=c?` from ${c}`:"",y=s?` since version ${s}`:"",v=o?` and will be removed${u} in version ${o}`:"",V=l?` Please use ${l} instead.`:"",E=i?` See: ${i}`:"",R=m?` Note: ${m}`:"",f=`${t} is deprecated${y}${v}.${V}${E}${R}`;f in a||((0,d.Kw)("deprecated",t,n,f),console.warn(f),a[f]=!0)}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,r)=>{var e,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var a={}.hasOwnProperty,p="[native code]";function t(){for(var n=[],s=0;s<arguments.length;s++){var o=arguments[s];if(o){var l=typeof o;if(l==="string"||l==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var c=t.apply(null,o);c&&n.push(c)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var i in o)a.call(o,i)&&o[i]&&n.push(i)}}}return n.join(" ")}_.exports?(t.default=t,_.exports=t):(e=[],d=function(){return t}.apply(r,e),d!==void 0&&(_.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/radio-control/styles.module.scss":(_,r,e)=>{"use strict";e.d(r,{Z:()=>s});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(d),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),t=e.n(p),n=t()(a());n.push([_.id,".WBOHA4eO4_q0oWOa41tw .components-radio-control__input[type=radio]:checked{background:var(--jp-green-40);border-color:var(--jp-green-40)}.WBOHA4eO4_q0oWOa41tw .components-radio-control__input[type=radio]:focus{border-color:var(--jp-green-50);box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}",""]),n.locals={radio:"WBOHA4eO4_q0oWOa41tw"};const s=n}}]);})();