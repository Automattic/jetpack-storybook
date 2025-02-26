"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6279],{"../../packages/my-jetpack/_inc/components/go-back-link/stories/index.stories.jsx":(u,l,e)=>{e.r(l),e.d(l,{__namedExportsOrder:()=>h,_default:()=>p,default:()=>x});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react-router-dom@6.28.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),_=e("../../../node_modules/.pnpm/react-router@6.28.1_react@18.3.1/node_modules/react-router/dist/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(d),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var v=c()(j.A,i);const E=j.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=o.__;function s({onClick:g=()=>{},reload:y}){const L=y?"/?reload=true":"/";return(0,m.jsxs)(n.N_,{to:L,className:E.link,onClick:g,children:[(0,m.jsx)(t.A,{icon:a.A,className:E.icon}),f("Go back","jetpack-my-jetpack")]})}const k=s;s.__docgenInfo={description:`Simple component that renders a go back link

@param {object}   props         - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean}  props.reload  - Whether to reload the page after going back
@return {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};var R=`import React from 'react';
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
`,A={_default:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}};const x={parameters:{storySource:{source:`import React from 'react';
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
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}}}},title:"Packages/My Jetpack/GoBackLink",component:k},P={},p=(g=>(0,m.jsx)(n.I9,{children:(0,m.jsx)(_.BV,{children:(0,m.jsx)(_.qh,{path:"/",element:(0,m.jsx)(k,{...g})})})})).bind({});p.parameters={},p.args=P;const h=["_default"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<GoBackLink {...args} />} />
        </Routes>
    </HashRouter>`,...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(u,l,e)=>{e.d(l,{A:()=>_});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n({icon:o,size:t=24,...a},d){return(0,r.cloneElement)(o,{width:t,height:t,...a,ref:d})}const _=(0,r.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(u,l,e)=>{e.d(l,{A:()=>o});var r=e("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,n.jsx)(r.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(r.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(u,l,e)=>{e.d(l,{G:()=>t,jl:()=>o,lA:()=>i,rw:()=>j,t4:()=>f,tS:()=>c,wA:()=>d});var r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=s=>(0,n.createElement)("circle",s),t=s=>(0,n.createElement)("g",s),a=s=>createElement("line",s),d=s=>(0,n.createElement)("path",s),c=s=>(0,n.createElement)("polygon",s),j=s=>(0,n.createElement)("rect",s),i=s=>(0,n.createElement)("defs",s),v=s=>createElement("radialGradient",s),E=s=>createElement("linearGradient",s),m=s=>createElement("stop",s),f=(0,n.forwardRef)(({className:s,isPressed:k,...R},A)=>{const x={...R,className:(0,r.A)(s,{"is-pressed":k})||void 0,"aria-hidden":!0,focusable:!1};return(0,_.jsx)("svg",{...x,ref:A})});f.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(u,l,e)=>{e.d(l,{A:()=>_});function r(o){var t,a,d="";if(typeof o=="string"||typeof o=="number")d+=o;else if(typeof o=="object")if(Array.isArray(o)){var c=o.length;for(t=0;t<c;t++)o[t]&&(a=r(o[t]))&&(d&&(d+=" "),d+=a)}else for(a in o)o[a]&&(d&&(d+=" "),d+=a);return d}function n(){for(var o,t,a=0,d="",c=arguments.length;a<c;a++)(o=arguments[a])&&(t=r(o))&&(d&&(d+=" "),d+=t);return d}const _=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(u,l,e)=>{e.d(l,{A:()=>a});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(r),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(_),t=o()(n());t.push([u.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),t.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const a=t}}]);
