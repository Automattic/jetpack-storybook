"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6905],{"../../packages/my-jetpack/_inc/components/go-back-link/stories/index.stories.jsx":(i,l,e)=>{var b,y,P;e.r(l),e.d(l,{__namedExportsOrder:()=>O,_default:()=>p,default:()=>f});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.3.1/node_modules/react-router/dist/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(d),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),j={};j.insert="head",j.singleton=!1;var h=c()(u.Z,j);const x=u.Z.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const k=o.__;function s({onClick:g=()=>{},reload:A}){const D=A?"/?reload=true":"/";return(0,m.jsxs)(t.rU,{to:D,className:x.link,onClick:g,children:[(0,m.jsx)(n.Z,{icon:a.Z,className:x.icon}),k("Go back","jetpack-my-jetpack")]})}const E=s;s.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const f={title:"Packages/My Jetpack/GoBackLink",component:E},w={},p=(g=>(0,m.jsx)(t.UT,{children:(0,m.jsx)(r.Z5,{children:(0,m.jsx)(r.AW,{path:"/",element:(0,m.jsx)(E,{...g})})})})).bind({});p.parameters={},p.args=w,p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<GoBackLink {...args} />} />
        </Routes>
    </HashRouter>`,...(P=(y=p.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const O=["_default"]},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(i,l,e)=>{e.d(l,{Z:()=>r});var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function t({icon:o,size:n=24,...a},d){return(0,_.cloneElement)(o,{width:n,height:n,...a,ref:d})}const r=(0,_.forwardRef)(t)},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(i,l,e)=>{e.d(l,{Z:()=>o});var _=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,t.jsx)(_.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(_.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(i,l,e)=>{e.d(l,{Cd:()=>o,G:()=>n,UL:()=>u,Wj:()=>k,mg:()=>c,y$:()=>d});var _=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=s=>(0,t.createElement)("circle",s),n=s=>(0,t.createElement)("g",s),a=s=>createElement("line",s),d=s=>(0,t.createElement)("path",s),c=s=>(0,t.createElement)("polygon",s),u=s=>(0,t.createElement)("rect",s),j=s=>createElement("defs",s),h=s=>createElement("radialGradient",s),x=s=>createElement("linearGradient",s),m=s=>createElement("stop",s),k=(0,t.forwardRef)(({className:s,isPressed:E,...f},w)=>{const v={...f,className:(0,_.Z)(s,{"is-pressed":E})||void 0,"aria-hidden":!0,focusable:!1};return(0,r.jsx)("svg",{...v,ref:w})});k.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(i,l,e)=>{e.d(l,{Z:()=>r});function _(o){var n,a,d="";if(typeof o=="string"||typeof o=="number")d+=o;else if(typeof o=="object")if(Array.isArray(o)){var c=o.length;for(n=0;n<c;n++)o[n]&&(a=_(o[n]))&&(d&&(d+=" "),d+=a)}else for(a in o)o[a]&&(d&&(d+=" "),d+=a);return d}function t(){for(var o,n,a=0,d="",c=arguments.length;a<c;a++)(o=arguments[a])&&(n=_(o))&&(d&&(d+=" "),d+=n);return d}const r=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(i,l,e)=>{e.d(l,{Z:()=>a});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(_),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(r),n=o()(t());n.push([i.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),n.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const a=n}}]);})();
