"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6279],{"../../packages/my-jetpack/_inc/components/go-back-link/stories/index.stories.jsx":(p,l,e)=>{e.r(l),e.d(l,{__namedExportsOrder:()=>P,_default:()=>u,default:()=>x});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.30.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),_=e("../../../node_modules/.pnpm/react-router@6.30.0_react@18.3.1/node_modules/react-router/dist/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+i18n@5.24.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(d),j=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var R=m()(j.A,i);const f=j.A.locals||{};var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const k=n.__;function s({onClick:g=()=>{},reload:h}){const L=h?"/?reload=true":"/";return(0,c.jsxs)(o.N_,{to:L,className:f.link,onClick:g,children:[(0,c.jsx)(t.A,{icon:r.A,className:f.icon}),k("Go back","jetpack-my-jetpack")]})}const E=s;s.__docgenInfo={description:`Simple component that renders a go back link

@param {object}   props         - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean}  props.reload  - Whether to reload the page after going back
@return {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};var A=`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
`,y={_default:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}};const x={parameters:{storySource:{source:`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}}}},title:"Packages/My Jetpack/GoBackLink",component:E},v={},u=(g=>(0,c.jsx)(o.I9,{children:(0,c.jsx)(_.BV,{children:(0,c.jsx)(_.qh,{path:"/",element:(0,c.jsx)(E,{...g})})})})).bind({});u.parameters={},u.args=v;const P=["_default"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<GoBackLink {...args} />} />
        </Routes>
    </HashRouter>`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(p,l,e)=>{e.d(l,{A:()=>_});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({icon:n,size:t=24,...r},d){return(0,a.cloneElement)(n,{width:t,height:t,...r,ref:d})}const _=(0,a.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@10.24.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(p,l,e)=>{e.d(l,{A:()=>n});var a=e("../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,o.jsx)(a.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(a.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+primitives@4.24.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(p,l,e)=>{e.d(l,{Ey:()=>R,G:()=>t,N1:()=>r,VG:()=>c,W4:()=>f,jl:()=>n,lA:()=>i,rw:()=>j,t4:()=>k,tS:()=>m,wA:()=>d});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=s=>(0,o.createElement)("circle",s),t=s=>(0,o.createElement)("g",s),r=s=>(0,o.createElement)("line",s),d=s=>(0,o.createElement)("path",s),m=s=>(0,o.createElement)("polygon",s),j=s=>(0,o.createElement)("rect",s),i=s=>(0,o.createElement)("defs",s),R=s=>(0,o.createElement)("radialGradient",s),f=s=>(0,o.createElement)("linearGradient",s),c=s=>(0,o.createElement)("stop",s),k=(0,o.forwardRef)(({className:s,isPressed:E,...A},y)=>{const x={...A,className:(0,a.A)(s,{"is-pressed":E})||void 0,"aria-hidden":!0,focusable:!1};return(0,_.jsx)("svg",{...x,ref:y})});k.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(p,l,e)=>{e.d(l,{A:()=>_});function a(n){var t,r,d="";if(typeof n=="string"||typeof n=="number")d+=n;else if(typeof n=="object")if(Array.isArray(n)){var m=n.length;for(t=0;t<m;t++)n[t]&&(r=a(n[t]))&&(d&&(d+=" "),d+=r)}else for(r in n)n[r]&&(d&&(d+=" "),d+=r);return d}function o(){for(var n,t,r=0,d="",m=arguments.length;r<m;r++)(n=arguments[r])&&(t=a(n))&&(d&&(d+=" "),d+=t);return d}const _=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(p,l,e)=>{e.d(l,{A:()=>r});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),_=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(_),t=n()(o());t.push([p.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),t.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const r=t}}]);
