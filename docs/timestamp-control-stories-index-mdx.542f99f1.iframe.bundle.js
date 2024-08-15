(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7875,9796],{"../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(v,s,o)=>{"use strict";o.d(s,{Z:()=>u,a:()=>t});var a=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const e={},h=a.createContext(e);function t(d){const l=a.useContext(h);return a.useMemo(function(){return typeof d=="function"?d(l):{...l,...d}},[l,d])}function u(d){let l;return d.disableParentContext?l=typeof d.components=="function"?d.components(e):d.components||e:l=t(d.components),a.createElement(h.Provider,{value:l},d.children)}},"../../packages/videopress/src/client/components/timestamp-control/stories/index.mdx":(v,s,o)=>{"use strict";o.r(s),o.d(s,{default:()=>x});var a=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),h=o("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),t=o("../../../node_modules/.pnpm/@storybook+blocks@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9/node_modules/@storybook/blocks/dist/index.mjs"),u=o("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),d=o("../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx");function l(f){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,h.a)(),...f.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h_,{of:d}),`
`,(0,e.jsx)(n.h1,{id:"timestamp-control",children:"Timestamp Control"}),`
`,(0,e.jsx)(n.p,{children:"React component to set a timestamp value."}),`
`,(0,e.jsx)(t.Xz,{withSource:"open",children:(0,e.jsx)(t.oG,{id:"packages-videopress-timestamp-control--default"})}),`
`,(0,e.jsx)(n.h2,{id:"timestampcontrol-api",children:"TimestampControl API"}),`
`,(0,e.jsx)(n.h3,{id:"value",children:"value"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type ",(0,e.jsx)(n.code,{children:"number"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"The timestamp value in milliseconds"}),`
`,(0,e.jsx)(n.h3,{id:"disabled",children:"disabled"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type ",(0,e.jsx)(n.code,{children:"boolean"})]}),`
`]}),`
`,(0,e.jsx)(t.Xz,{withSource:"false",children:(0,e.jsx)(t.oG,{id:"packages-videopress-timestamp-control--disabled"})}),`
`,(0,e.jsx)(n.h3,{id:"label",children:"label"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type ",(0,e.jsx)(n.code,{children:"ReactNode"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:`If this property is added, a label will be generated using label property as the content.
ReactNode`}),`
`,(0,e.jsx)(n.h3,{id:"help",children:"help"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type ",(0,e.jsx)(n.code,{children:"ReactNode"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"If this property is added, a help text will be added after the component using the help property as the content."}),`
`,(0,e.jsx)(n.h3,{id:"onchange",children:"onChange"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"Function"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Use this property to pass a callback function, where the API provides the selected time in milliseconds."}),`
`,(0,e.jsx)(n.h3,{id:"ondebouncechange",children:"onDebounceChange"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"Function"})]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:["Similar to ",(0,e.jsx)(n.code,{children:"onChange"})," property, but the call is debouncing in time according to the ",(0,e.jsx)(n.code,{children:"wait"})," property value."]}),`
`,(0,e.jsx)(n.h3,{id:"wait",children:"wait"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"Number"})]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:["Time, in milliseconds, that the ",(0,e.jsx)(n.code,{children:"onDebounceChange"})," function will be debounced."]}),`
`,(0,e.jsx)(n.h3,{id:""}),`
`,(0,e.jsx)(n.h3,{id:"max",children:"max"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"number"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:`Maximum time value, in milliseconds, expected by the component.
Also, if it's bigger than one hour, the hour input will be rendered into the Timestamp Input component.`}),`
`,(0,e.jsx)(n.h3,{id:"decimalplaces",children:"decimalPlaces"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"type: 1 | 2 | 3"}),`
`,(0,e.jsx)(n.li,{children:"optional"}),`
`]}),`
`,(0,e.jsx)(n.p,{children:`The decimalPlaces property is used to add fractions of a second.
This property allows the user to specify the number of digits to be displayed after the seconds separator,
thus allowpackages-videopress-timestamp-control--with-marksing for a customizable level of precision.`}),`
`,(0,e.jsx)(t.Xz,{withSource:"open",children:(0,e.jsx)(t.oG,{id:"packages-videopress-timestamp-control--decimal-places"})}),`
`,(0,e.jsx)(n.p,{children:"The example above shows how to configure two decimal places for the control. The max value is five seconds (5000)."}),`
`,(0,e.jsx)(n.h3,{id:"fineadjustment",children:"fineAdjustment"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"number"})]}),`
`,(0,e.jsxs)(n.li,{children:["default: ",(0,e.jsx)(n.code,{children:"50"})]}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Time, in milliseconds, for every step of the Range control."}),`
`,(0,e.jsx)(n.h3,{id:"autohidetimeinput",children:"autoHideTimeInput"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"boolean"})]}),`
`,(0,e.jsxs)(n.li,{children:["default: ",(0,e.jsx)(n.code,{children:"True"})]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"rendertooltip",children:"renderTooltip"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"function"})]}),`
`,(0,e.jsx)(n.li,{children:"optional"}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Optional option that when True renders a tooltip in the Range control, with a default time format."}),`
`,(0,e.jsx)(t.Xz,{children:(0,e.jsx)(t.oG,{id:"packages-videopress-timestamp-control--show-tooltip"})}),`
`,(0,e.jsx)(n.p,{children:"It also accepts a function. The example below shows how to customize what the tooltip shows."}),`
`,(0,e.jsx)(t.Xz,{children:(0,e.jsx)(t.oG,{id:"packages-videopress-timestamp-control--custom-tooltip"})}),`
`,(0,e.jsx)(n.h3,{id:"marksevery",children:"marksEvery"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["type: ",(0,e.jsx)(n.code,{children:"number"})]}),`
`,(0,e.jsx)(n.li,{children:"optional"}),`
`]}),`
`,(0,e.jsx)(n.p,{children:"Pass a time value, in milliseconds, to generate a mark set to add to the Range control."}),`
`,(0,e.jsx)(t.Xz,{children:(0,e.jsx)(t.oG,{id:"packages-videopress-timestamp-control--with-marks"})}),`
`,(0,e.jsx)(n.h2,{id:"handling-the-value-property",children:"Handling the value property"}),`
`,(0,e.jsxs)(n.p,{children:[`By default, the component will handle its value internally through a local state.
The `,(0,e.jsx)(n.code,{children:"value"}),` property will define its initial value.
It simplifies its usage since consumers
won't be concerned about storing and propagating the updated value.`]}),`
`,(0,e.jsxs)(n.p,{children:["However, updating the ",(0,e.jsx)(n.code,{children:"value"}),` property externally is possible if you need it.
The TimestampControl component will follow the new value provided.`]}),`
`,(0,e.jsx)(n.p,{children:`In the example below, it's possible to update the Timestamp value internally,
but also it's doable by using the additional range control.`}),`
`,(0,e.jsx)(t.Xz,{children:(0,e.jsx)(t.oG,{id:"packages-videopress-timestamp-control--changing-value-externally"})})]})}function x(f={}){const{wrapper:n}={...(0,h.a)(),...f.components};return n?(0,e.jsx)(n,{...f,children:(0,e.jsx)(l,{...f})}):l(f)}},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive":v=>{function s(o){var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components sync recursive",v.exports=s},"../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive":v=>{function s(o){var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming sync recursive",v.exports=s},"../../packages/videopress/src/client/components/timestamp-control/stories/index.stories.tsx":(v,s,o)=>{var c,U,I,P,k,L,R,K,B,M,z,D,V,H,r,m,p,i,j,_,b;"use strict";o.r(s),o.d(s,{__namedExportsOrder:()=>T,_default:()=>l,changingValueExternally:()=>w,customTooltip:()=>g,decimalPlaces:()=>x,default:()=>u,disabled:()=>f,showTooltip:()=>E,withMarks:()=>n});var a=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=o("../../packages/videopress/src/client/components/timestamp-control/index.tsx"),t=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u={title:"Packages/VideoPress/Timestamp Control",component:h.ZP},d=y=>(0,t.jsx)(h.ZP,{...y}),l=d.bind({});l.args={label:"Video frame",help:"Use the control to set timestamp of the video frame.",max:3600*1e3*2,value:236*1e3+125,wait:100,decimalPlaces:void 0,fineAdjustment:50,disabled:!1,autoHideTimeInput:!0,onChange:y=>{console.log({newTime:y})},onDebounceChange:y=>{console.log({newDebouncedTime:y})}},l.storyName="Timestamp Control";const x=d.bind({});x.args={value:3500,max:1e3*5,decimalPlaces:2};const f=d.bind({});f.args={max:3600*1e3*2,value:3600*1e3+15*60*1e3+43*1e3,disabled:!0};const n=d.bind({});n.args={value:3500,max:1e3*10,marksEvery:1e3,fineAdjustment:200};const E=d.bind({});E.args={value:8e4,max:1e3*100,renderTooltip:!0};const g=d.bind({});g.args={value:1e3*50,max:1e3*80,fineAdjustment:200,renderTooltip:y=>(0,t.jsxs)("span",{children:[y/1e3," seconds"]})};const w=(y=>{const[W,O]=(0,e.useState)(y.value);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.ZP,{...y,label:"TimestampControl component",help:"The value is handled internally by the component.",value:W,onDebounceChange:O}),(0,t.jsx)("br",{}),(0,t.jsx)(a.Z,{label:"RangeControl component",help:"The value is handled externally, and passed to the <TimestampControl /> above component.",value:W,onChange:O,max:y.max})]})}).bind({});w.args={value:3500,max:1e3*5,decimalPlaces:2,wait:100};const T=["_default","decimalPlaces","disabled","withMarks","showTooltip","customTooltip","changingValueExternally"];l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(I=(U=l.parameters)==null?void 0:U.docs)==null?void 0:I.source}}},x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(L=(k=x.parameters)==null?void 0:k.docs)==null?void 0:L.source}}},f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(B=(K=f.parameters)==null?void 0:K.docs)==null?void 0:B.source}}},n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.source}}},E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(r=(H=E.parameters)==null?void 0:H.docs)==null?void 0:r.source}}},g.parameters={...g.parameters,docs:{...(m=g.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <TimestampControl {...args} />;
}`,...(i=(p=g.parameters)==null?void 0:p.docs)==null?void 0:i.source}}},w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <>
            <TimestampControl {...args} label="TimestampControl component" help="The value is handled internally by the component." value={value} onDebounceChange={setValue} />
            <br />
            <RangeControl label="RangeControl component" help="The value is handled externally, and passed to the <TimestampControl /> above component." value={value} onChange={setValue} max={args.max} />
        </>;
}`,...(b=(_=w.parameters)==null?void 0:_.docs)==null?void 0:b.source}}}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/hooks.js":(v,s,o)=>{"use strict";o.d(s,{u:()=>h});var a=o("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js");function h(t){const{help:u,id:d,...l}=t,x=(0,a.Z)(e.ZP,"wp-components-base-control",d);return{baseControlProps:{id:x,help:u,...l},controlProps:{id:x,...u?{"aria-describedby":`${x}__help`}:{}}}}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js":(v,s,o)=>{"use strict";o.d(s,{Z:()=>x});var a=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),e=o("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),h=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function d(f,n){const{__nextHasNoMarginBottom:E,__next40pxDefaultSize:g=!1,label:N,hideLabelFromVision:w,value:T,help:c,id:U,className:I,onChange:P,type:k="text",...L}=f,R=(0,e.Z)(l,"inspector-text-control",U),K=B=>P(B.target.value);return(0,u.jsx)(t.ZP,{__nextHasNoMarginBottom:E,label:N,hideLabelFromVision:w,id:R,help:c,className:I,children:(0,u.jsx)("input",{className:(0,a.Z)("components-text-control__input",{"is-next-40px-default-size":g}),type:k,id:R,value:T,onChange:K,"aria-describedby":c?R+"__help":void 0,ref:n,...L})})}const l=(0,h.forwardRef)(d),x=l},"../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(v,s,o)=>{"use strict";o.d(s,{Z:()=>h});var a=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function e(t,u){typeof t=="function"?t(u):t&&t.hasOwnProperty("current")&&(t.current=u)}function h(t){const u=(0,a.useRef)(),d=(0,a.useRef)(!1),l=(0,a.useRef)(!1),x=(0,a.useRef)([]),f=(0,a.useRef)(t);return f.current=t,(0,a.useLayoutEffect)(()=>{l.current===!1&&d.current===!0&&t.forEach((n,E)=>{const g=x.current[E];n!==g&&(e(g,null),e(n,u.current))}),x.current=t},t),(0,a.useLayoutEffect)(()=>{l.current=!1}),(0,a.useCallback)(n=>{e(u,n),l.current=!0,d.current=n!==null;const E=n?f.current:x.current;for(const g of E)e(g,n)},[])}},"../../packages/videopress/src/client/components/timestamp-control/index.tsx":(v,s,o)=>{"use strict";o.d(s,{ZP:()=>H});var a=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/hooks.js"),h=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/number-control/index.js"),t=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/text-control/index.js"),u=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/range-control/index.js"),d=o("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");function f(r){const m=Math.floor(r/36e5),p=Math.floor(r/6e4)%60,i=Math.floor(r/1e3)%60,j=Math.floor(r/10)%100;return[m>0?m.toString().padStart(2,"0")+":":"",m>0||p>0?p.toString().padStart(2,"0")+":":"",i.toString().padStart(2,"0"),"."+j.toString().padStart(2,"0")].join("")}var n=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=o.n(n),g=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss"),N={};N.insert="head",N.singleton=!1;var w=E()(g.Z,N);const T=g.Z.locals||{};var c=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function U(r){const{help:m,id:p,...i}=r,j=(0,d.Z)(a.ZP,"wp-components-base-control",p),_=typeof m=="string"?"aria-describedby":"aria-details";return{baseControlProps:{id:j,help:m,...i},controlProps:{id:j,...m?{[_]:`${j}__help`}:{}}}}const I=e.u||U,P=r=>{if(h.Z)return(0,c.jsx)(h.Z,{...r});const m={...r};return["spinControls","isPressEnterToChange","isDragEnabled","isShiftStepEnabled","__unstableStateReducer"].forEach(p=>delete m[p]),(0,c.jsx)(t.Z,{...m})},k=({char:r=":"})=>(0,c.jsx)("span",{className:T["timestamp-control-divider"],children:r}),L="CHANGE",R="COMMIT",K="PRESS_DOWN",B="PRESS_UP",M=r=>(m,p)=>{const i={...m};return(p.type===R||p.type===B||p.type===K||p.type===L)&&i.value!==void 0&&(i.value=i.value.toString().padStart(r,"0")),i};function z(r,m,p){r>p&&(r=p);const i=Number.isNaN(r),j=i||typeof m=="undefined"?0:Math.floor(r%1e3/+`1e${3-m}`);return{hh:i?0:Math.floor(r/(1e3*60*60)%24),mm:i?0:Math.floor(r/(1e3*60)%60),ss:i?0:Math.floor(r/1e3%60),decimal:j}}const D=({onChange:r,disabled:m,value:p,max:i,autoHideTimeInput:j=!0,decimalPlaces:_})=>{const b={value:z(p,_,i)},y=i>60*60*1e3,W=i>60*1e3,O=A=>C=>{if(typeof C=="string"&&!isNaN(parseInt(C,10))&&(C=parseInt(C,10)),A==="hh"&&C>99||(A==="mm"||A==="ss")&&C>59||A==="decimal"&&C>+`1e${_}`-1||typeof C=="string")return;b.value={...z(p,_,i),[A]:C};const Z=b.value.decimal?b.value.decimal*+`1e${3-_}`:0;r==null||r((b.value.hh*3600+b.value.mm*60+b.value.ss)*1e3+Z)};return(0,c.jsxs)("div",{className:(0,x.Z)(T["timestamp-input-wrapper"],{[T["is-disabled"]]:m}),children:[(y||!j)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(P,{className:T["timestamp-control-input"],disabled:m,min:0,max:99,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(b.value.hh).padStart(2,"0"),onChange:O("hh")}),(0,c.jsx)(k,{})]}),(W||!j)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(P,{className:T["timestamp-control-input"],disabled:m,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(b.value.mm).padStart(2,"0"),onChange:O("mm")}),(0,c.jsx)(k,{})]}),(0,c.jsx)(P,{className:T["timestamp-control-input"],disabled:m,min:0,max:59,step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"00",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(2),value:String(b.value.ss).padStart(2,"0"),onChange:O("ss")}),_&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(k,{char:"."}),(0,c.jsx)(P,{className:T["timestamp-control-input"],style:{"--input-width":`${12*_}px`},disabled:m,min:0,max:Number("9".repeat(_)),step:1,hideLabelFromVision:!0,spinControls:"none",placeholder:"0".repeat(_),isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,__unstableStateReducer:M(_),value:String(b.value.decimal).padStart(_,"0"),onChange:O("decimal")})]})]})},V=r=>{const{disabled:m=!1,min:p=0,max:i=Number.MAX_SAFE_INTEGER,value:j,onChange:_,onDebounceChange:b,wait:y=1e3,fineAdjustment:W=50,autoHideTimeInput:O=!0,decimalPlaces:A,marksEvery:C,renderTooltip:Z}=r,X=(0,l.useRef)(),[F,G]=(0,l.useState)(j);(0,l.useEffect)(()=>{G(j)},[j]);const{baseControlProps:Y}=(I==null?void 0:I(r))||{},Q=(0,l.useCallback)(S=>{clearTimeout(X==null?void 0:X.current),S>i&&(S=i),S<p&&(S=p),G(S),_==null||_(S),X.current=setTimeout(b==null?void 0:b.bind(null,S),y)},[b,_,i,p,y]),J=[];if(C)for(let S=p;S<=i;S+=C)J.push({value:S,label:null});const $=typeof Z=="function"?Z:S=>f(S);return(0,c.jsx)(a.ZP,{...Y,children:(0,c.jsxs)("div",{className:T["timestamp-control__controls-wrapper"],children:[P&&(0,c.jsx)(D,{disabled:m,max:i,value:F,onChange:Q,autoHideTimeInput:O,decimalPlaces:A}),(0,c.jsx)(u.Z,{disabled:m,className:T["timestamp-range-control"],min:p,step:W,initialPosition:F,value:F,max:i,withInputField:!1,onChange:Q,marks:C?J:void 0,renderTooltipContent:$,...Z===!1?{showTooltip:!1}:{}})]})})},H=V;try{D.displayName="TimestampInput",D.__docgenInfo={description:"",displayName:"TimestampInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"]={docgenInfo:D.__docgenInfo,name:"TimestampInput",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampInput"})}catch(r){}try{V.displayName="TimestampControl",V.__docgenInfo={description:"TimestampControl component",displayName:"TimestampControl",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"]={docgenInfo:V.__docgenInfo,name:"TimestampControl",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#TimestampControl"})}catch(r){}try{timestampcontrol.displayName="timestampcontrol",timestampcontrol.__docgenInfo={description:"TimestampControl component",displayName:"timestampcontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},fineAdjustment:{defaultValue:null,description:"",name:"fineAdjustment",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(ms: number) => void"}},autoHideTimeInput:{defaultValue:{value:"true"},description:"",name:"autoHideTimeInput",required:!1,type:{name:"boolean"}},decimalPlaces:{defaultValue:null,description:"",name:"decimalPlaces",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},wait:{defaultValue:null,description:"",name:"wait",required:!1,type:{name:"number"}},marksEvery:{defaultValue:null,description:"",name:"marksEvery",required:!1,type:{name:"number"}},renderTooltip:{defaultValue:null,description:"",name:"renderTooltip",required:!1,type:{name:"boolean"}},onDebounceChange:{defaultValue:null,description:"",name:"onDebounceChange",required:!1,type:{name:"(ms: number) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"]={docgenInfo:timestampcontrol.__docgenInfo,name:"timestampcontrol",path:"../../packages/videopress/src/client/components/timestamp-control/index.tsx#timestampcontrol"})}catch(r){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/components/timestamp-control/style.module.scss":(v,s,o)=>{"use strict";o.d(s,{Z:()=>d});var a=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),e=o.n(a),h=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),t=o.n(h),u=t()(e());u.push([v.id,".zuO3RgAd20yV6c0cEjwU{--input-width: 24px;display:flex;align-items:center;gap:8px}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child{margin-bottom:0;flex-grow:2}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-base-control__field,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-base-control__field{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H .components-range-control__wrapper,.zuO3RgAd20yV6c0cEjwU .m7UQ82mfQtaGf0Uxn62H:last-child .components-range-control__wrapper{margin-bottom:0}.zuO3RgAd20yV6c0cEjwU .components-range-control__marks{top:13px}.xiVP4KSb56I10368tN0v{display:flex;align-items:center;border-color:#949494;background-color:#fff;border-style:solid;justify-content:space-around;border-width:1px;padding:0px}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr{padding:0 1px;margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr input{max-width:var(--input-width)}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field{margin-bottom:0}.xiVP4KSb56I10368tN0v .J6r6Ls3WNV_CSbuzeLyr .components-base-control__field .components-text-control__input{border:none;text-align:center;padding:0}.xiVP4KSb56I10368tN0v .components-input-control:last-child{margin-bottom:0}.xiVP4KSb56I10368tN0v .components-input-control__input{padding-left:0 !important;padding-right:0 !important;text-align:center}.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-outer-spin-button,.xiVP4KSb56I10368tN0v .components-input-control__input::-webkit-inner-spin-button{-webkit-appearance:none}.xiVP4KSb56I10368tN0v .components-input-control__input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.xiVP4KSb56I10368tN0v .components-input-control__backdrop{border-style:none !important}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ{background-color:#f0f0f0}.xiVP4KSb56I10368tN0v.XtdqGJfT1AOZ9KRjf1TZ .PjODCu3uI7wWSXk4MiIH{color:#949494}.PjODCu3uI7wWSXk4MiIH{font-weight:900}",""]),u.locals={"timestamp-control__controls-wrapper":"zuO3RgAd20yV6c0cEjwU","timestamp-range-control":"m7UQ82mfQtaGf0Uxn62H","timestamp-input-wrapper":"xiVP4KSb56I10368tN0v","timestamp-control-input":"J6r6Ls3WNV_CSbuzeLyr","is-disabled":"XtdqGJfT1AOZ9KRjf1TZ","timestamp-control-divider":"PjODCu3uI7wWSXk4MiIH"};const d=u},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":v=>{function s(o){var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",v.exports=s}}]);})();
