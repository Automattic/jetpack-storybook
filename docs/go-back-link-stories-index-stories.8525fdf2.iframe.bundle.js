"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6279],{"../../packages/my-jetpack/_inc/components/go-back-link/stories/index.stories.jsx":(u,l,e)=>{e.r(l),e.d(l,{__namedExportsOrder:()=>y,_default:()=>p,default:()=>E});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react-router@7.6.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router/dist/development/chunk-NL6KNZEE.mjs"),_=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var R=d()(c.A,i);const k=c.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=_.__;function j({onClick:g=()=>{},reload:v}){const P=v?"/?reload=true":"/";return(0,m.jsxs)(s.N_,{to:P,className:k.link,onClick:g,children:[(0,m.jsx)(n.A,{icon:t.A,className:k.icon}),f("Go back","jetpack-my-jetpack")]})}const o=j;j.__docgenInfo={description:`Simple component that renders a go back link

@param {object}   props         - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean}  props.reload  - Whether to reload the page after going back
@return {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};var A=`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router';
import GoBackLink from '..';

export default {
	title: 'Packages/My Jetpack/GoBackLink',
	component: GoBackLink,
};

const DefaultArgs = {};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <GoBackLink { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const _default = Template.bind( {} );
_default.parameters = {};
_default.args = DefaultArgs;
`,h={_default:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}};const E={parameters:{storySource:{source:`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router';
import GoBackLink from '..';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Packages/My Jetpack/GoBackLink',
  component: GoBackLink
};
const DefaultArgs = {};
const Template = args => /*#__PURE__*/_jsx(HashRouter, {
  children: /*#__PURE__*/_jsx(Routes, {
    children: /*#__PURE__*/_jsx(Route, {
      path: "/",
      element: /*#__PURE__*/_jsx(GoBackLink, {
        ...args
      })
    })
  })
});
export const _default = Template.bind({});
_default.parameters = {};
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}}}},title:"Packages/My Jetpack/GoBackLink",component:o},x={},p=(g=>(0,m.jsx)(s.I9,{children:(0,m.jsx)(s.BV,{children:(0,m.jsx)(s.qh,{path:"/",element:(0,m.jsx)(o,{...g})})})})).bind({});p.parameters={},p.args=x;const y=["_default"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<GoBackLink {...args} />} />
        </Routes>
    </HashRouter>`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(u,l,e)=>{e.d(l,{A:()=>_});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function s({icon:n,size:t=24,...a},d){return(0,r.cloneElement)(n,{width:t,height:t,...a,ref:d})}const _=(0,r.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(u,l,e)=>{e.d(l,{A:()=>n});var r=e("../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,s.jsx)(r.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(r.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(u,l,e)=>{e.d(l,{Ey:()=>k,G:()=>t,N1:()=>a,VG:()=>f,W4:()=>m,jl:()=>n,lA:()=>R,rw:()=>i,t4:()=>j,tS:()=>c,wA:()=>d});var r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=o=>(0,s.createElement)("circle",o),t=o=>(0,s.createElement)("g",o),a=o=>(0,s.createElement)("line",o),d=o=>(0,s.createElement)("path",o),c=o=>(0,s.createElement)("polygon",o),i=o=>(0,s.createElement)("rect",o),R=o=>(0,s.createElement)("defs",o),k=o=>(0,s.createElement)("radialGradient",o),m=o=>(0,s.createElement)("linearGradient",o),f=o=>(0,s.createElement)("stop",o),j=(0,s.forwardRef)(({className:o,isPressed:A,...h},E)=>{const x={...h,className:(0,r.A)(o,{"is-pressed":A})||void 0,"aria-hidden":!0,focusable:!1};return(0,_.jsx)("svg",{...x,ref:E})});j.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(u,l,e)=>{e.d(l,{A:()=>_});function r(n){var t,a,d="";if(typeof n=="string"||typeof n=="number")d+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(t=0;t<c;t++)n[t]&&(a=r(n[t]))&&(d&&(d+=" "),d+=a)}else for(a in n)n[a]&&(d&&(d+=" "),d+=a);return d}function s(){for(var n,t,a=0,d="",c=arguments.length;a<c;a++)(n=arguments[a])&&(t=r(n))&&(d&&(d+=" "),d+=t);return d}const _=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(u,l,e)=>{e.d(l,{A:()=>a});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(r),_=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(_),t=n()(s());t.push([u.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),t.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const a=t}}]);
