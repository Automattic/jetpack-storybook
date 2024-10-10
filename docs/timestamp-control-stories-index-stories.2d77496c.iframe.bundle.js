"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2690],{"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(D,S,e)=>{var s,L,O,j,R,U,I,K,W,V,H,w,N,F,t,a,r,n,f,d,u;e.r(S),e.d(S,{__namedExportsOrder:()=>E,_default:()=>l,changingValueExternally:()=>P,customTooltip:()=>b,decimalPlaces:()=>c,default:()=>m,disabled:()=>v,showTooltip:()=>y,withMarks:()=>p});var i=e("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m={title:"Packages/VideoPress/Timestamp Control",component:h.Ay},_=g=>(0,o.jsx)(h.Ay,{...g}),l=_.bind({});l.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:g=>{console.log({newTime:g})},onDebounceChange:g=>{console.log({newDebouncedTime:g})}},l.storyName="Timestamp Control";const c=_.bind({});c.args={value:3500,max:1e3*5,decimalPlaces:2};const v=_.bind({});v.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const p=_.bind({});p.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const y=_.bind({});y.args={value:8e4,max:1e3*100,renderTooltip:!0};const b=_.bind({});b.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:g=>(0,o.jsxs)("span",{children:[g/1e3," seconds"]})};const P=(g=>{const[B,A]=(0,x.useState)(g.value);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Ay,{...g,label:"TimestampControl component",help:"The value is handled internally by the component.",value:B,onDebounceChange:A}),(0,o.jsx)("br",{}),(0,o.jsx)(i.A,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:B,onChange:A,max:g.max})]})}).bind({});P.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100};const E=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"];l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.source}}},c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}},v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(W=(K=v.parameters)==null?void 0:K.docs)==null?void 0:W.source}}},p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(w=(H=p.parameters)==null?void 0:H.docs)==null?void 0:w.source}}},y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(t=(F=y.parameters)==null?void 0:F.docs)==null?void 0:t.source}}},b.parameters={...b.parameters,docs:{...(a=b.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(n=(r=b.parameters)==null?void 0:r.docs)==null?void 0:n.source}}},P.parameters={...P.parameters,docs:{...(f=P.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(u=(d=P.parameters)==null?void 0:d.docs)==null?void 0:u.source}}}},"../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/hooks.js":(D,S,e)=>{e.d(S,{Y:()=>h});var i=e("../../../node_modules/.pnpm/@wordpress+compose@7.9.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js");function h(o){const{help:m,id:_,...l}=o,c=(0,i.A)(x.Ay,"wp-components-base-control",_);return{baseControlProps:{id:c,help:m,...l},controlProps:{id:c,...m?{"aria-describedby":`${c}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js":(D,S,e)=>{e.d(S,{A:()=>c});var i=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),x=e("../../../node_modules/.pnpm/@wordpress+compose@7.9.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _(v,p){const{__nextHasNoMarginBottom:y,__next40pxDefaultSize:b=!1,label:k,hideLabelFromVision:P,value:E,help:s,id:L,className:O,onChange:j,type:R="text",...U}=v,I=(0,x.A)(l,"inspector-text-control",L),K=W=>j(W.target.value);return(0,m.jsx)(o.Ay,{__nextHasNoMarginBottom:y,__associatedWPComponentName:"TextControl",label:k,hideLabelFromVision:P,id:I,help:s,className:O,children:(0,m.jsx)("input",{className:(0,i.A)("components-text-control__input",{"is-next-40px-default-size":b}),type:R,id:I,value:E,onChange:K,"aria-describedby":s?I+"__help":void 0,ref:p,...U})})}const l=(0,h.forwardRef)(_),c=l},"../../../node_modules/.pnpm/@wordpress+compose@7.9.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(D,S,e)=>{e.d(S,{A:()=>h});var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function x(o,m){typeof o=="function"?o(m):o&&o.hasOwnProperty("current")&&(o.current=m)}function h(o){const m=(0,i.useRef)(),_=(0,i.useRef)(!1),l=(0,i.useRef)(!1),c=(0,i.useRef)([]),v=(0,i.useRef)(o);return v.current=o,(0,i.useLayoutEffect)(()=>{l.current===!1&&_.current===!0&&o.forEach((p,y)=>{const b=c.current[y];p!==b&&(x(b,null),x(p,m.current))}),c.current=o},o),(0,i.useLayoutEffect)(()=>{l.current=!1}),(0,i.useCallback)(p=>{x(m,p),l.current=!0,_.current=p!==null;const y=p?v.current:c.current;for(const b of y)x(b,p)},[])}},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(D,S,e)=>{e.d(S,{Ay:()=>F});var i=e("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/hooks.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/number-control/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+compose@7.9.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");function v(t){const a=Math.floor(t/36e5),r=Math.floor(t/6e4)%60,n=Math.floor(t/1e3)%60,f=Math.floor(t/10)%100;return[a>0?a.toString().padStart(2,"0")+":":"",a>0||r>0?r.toString().padStart(2,"0")+":":"",n.toString().padStart(2,"0"),"."+f.toString().padStart(2,"0")].join("")}var p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(p),b=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),k={};k.insert="head",k.singleton=!1;var P=y()(b.A,k);const E=b.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function L(t){const{help:a,id:r,...n}=t,f=(0,_.A)(i.Ay,"wp-components-base-control",r),d=typeof a=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:f,help:a,...n},controlProps:{id:f,...a?{[d]:`${f}__help`}:{}}}}const O=x.Y||L,j=t=>{if(h.A)return(0,s.jsx)(h.A,{...t});const a={...t};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(r=>delete a[r]),(0,s.jsx)(o.A,{...a})},R=({char:t=":"})=>(0,s.jsx)("span",{className:E["timestamp-control-divider"],children:t}),U="CHANGE",I="COMMIT",K="PRESS_DOWN",W="PRESS_UP",V=t=>(a,r)=>{const n={...a};return(r.type===I||r.type===W||r.type===K||r.type===U)&&n.value!==void 0&&(n.value=n.value.toString().padStart(t,"0")),n};function H(t,a,r){t>r&&(t=r);const n=Number.isNaN(t),f=n||typeof a=="undefined"?0:Math.floor(t%1e3/+`1e${3-a}`);return{hh:n?0:Math.floor(t/(1e3*60*60)%24),mm:n?0:Math.floor(t/(1e3*60)%60),ss:n?0:Math.floor(t/1e3%60),decimal:f}}const w=({onChange:t,disabled:a,value:r,max:n,autoHideTimeInput:f=!0,decimalPlaces:d})=>{const u={value:H(r,d,n)},g=n>60*60*1e3,B=n>60*1e3,A=M=>T=>{if(typeof T=="string"&&!isNaN(parseInt(T,10))&&(T=parseInt(T,10)),M==="hh"&&T>99||(M==="mm"||M==="ss")&&T>59||M==="decimal"&&T>+`1e${d}`-1||typeof T=="string")return;u.value={...H(r,d,n),[M]:T};const z=u.value.decimal?u.value.decimal*+`1e${3-d}`:0;t==null||t((u.value.hh*3600+u.value.mm*60+u.value.ss)*1e3+z)};return(0,s.jsxs)("div",{className:(0,c.A)(E["timestamp-input-wrapper"],{[E["is-disabled"]]:a}),children:[(g||!f)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{className:E["timestamp-control-input"],disabled:a,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:V(2),value:String(u.value.hh).padStart(2,"0"),onChange:A("hh")}),(0,s.jsx)(R,{})]}),(B||!f)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{className:E["timestamp-control-input"],disabled:a,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:V(2),value:String(u.value.mm).padStart(2,"0"),onChange:A("mm")}),(0,s.jsx)(R,{})]}),(0,s.jsx)(j,{className:E["timestamp-control-input"],disabled:a,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:V(2),value:String(u.value.ss).padStart(2,"0"),onChange:A("ss")}),d&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R,{char:"."}),(0,s.jsx)(j,{className:E["timestamp-control-input"],style:{"--input-width":`${12*d}px`},disabled:a,min:0,max:Number("9".repeat(d)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(d),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:V(d),value:String(u.value.decimal).padStart(d,"0"),onChange:A("decimal")})]})]})},N=t=>{const{disabled:a=!1,min:r=0,max:n=Number.MAX_SAFE_INTEGER,value:f,onChange:d,onDebounceChange:u,wait:g=1e3,fineAdjustment:B=50,autoHideTimeInput:A=!0,decimalPlaces:M,marksEvery:T,renderTooltip:z}=t,Q=(0,l.useRef)(),[G,q]=(0,l.useState)(f);(0,l.useEffect)(()=>{q(f)},[f]);const{baseControlProps:Y}=(O==null?void 0:O(t))||{},X=(0,l.useCallback)(C=>{clearTimeout(Q==null?void 0:Q.current),C>n&&(C=n),C<r&&(C=r),q(C),d==null||d(C),Q.current=setTimeout(u==null?void 0:u.bind(null,C),g)},[u,d,n,r,g]),J=[];if(T)for(let C=r;C<=n;C+=T)J.push({value:C,label:null});const Z=typeof z=="function"?z:C=>v(C);return(0,s.jsx)(i.Ay,{...Y,children:(0,s.jsxs)("div",{className:E["timestamp-control__controls-wrapper"],children:[j&&(0,s.jsx)(w,{disabled:a,max:n,value:G,onChange:X,autoHideTimeInput:A,decimalPlaces:M}),(0,s.jsx)(m.A,{disabled:a,className:E["timestamp-range-control"],min:r,step:B,initialPosition:G,value:G,max:n,withInputField:!1,onChange:X,marks:T?J:void 0,renderTooltipContent:Z,...z===!1?{showTooltip:!1}:{}})]})})},F=N;try{w.displayName="TimestampInput",w.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:w.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(t){}try{N.displayName="TimestampControl",N.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:N.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(t){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(t){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(D,S,e)=>{e.d(S,{A:()=>_});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(i),h=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(h),m=o()(x());m.push([D.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),m.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const _=m}}]);})();