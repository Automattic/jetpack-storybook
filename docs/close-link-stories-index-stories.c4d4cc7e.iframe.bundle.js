"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2493],{"../../packages/my-jetpack/_inc/components/close-link/stories/index.stories.jsx":(u,a,e)=>{e.r(a),e.d(a,{__namedExportsOrder:()=>v,_default:()=>i,default:()=>f});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react-router-dom@6.28.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),_=e("../../../node_modules/.pnpm/react-router@6.28.1_react@18.3.1/node_modules/react-router/dist/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(d),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/close-link/styles.module.scss"),p={};p.insert="head",p.singleton=!1;var P=c()(E.A,p);const x=E.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=({className:g,accessibleName:L})=>(0,m.jsx)(n.N_,{to:"/",className:(0,l.A)(x.link,g),"aria-label":L||null,children:(0,m.jsx)(o.A,{icon:t.A,className:x.icon})}),s=j;j.__docgenInfo={description:"",methods:[],displayName:"CloseLink"};var y=`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CloseLink from '..';

export default {
	title: 'Packages/My Jetpack/CloseLink',
	component: CloseLink,
};

const DefaultArgs = {};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <CloseLink { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const _default = Template.bind( {} );
_default.parameters = {};
_default.args = DefaultArgs;
`,A={_default:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}};const f={parameters:{storySource:{source:`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CloseLink from '..';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Packages/My Jetpack/CloseLink',
  component: CloseLink
};
const DefaultArgs = {};
const Template = args => /*#__PURE__*/_jsx(HashRouter, {
  children: /*#__PURE__*/_jsx(Routes, {
    children: /*#__PURE__*/_jsx(Route, {
      path: "/",
      element: /*#__PURE__*/_jsx(CloseLink, {
        ...args
      })
    })
  })
});
export const _default = Template.bind({});
_default.parameters = {};
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:19},startBody:{col:17,line:10},endBody:{col:2,line:19}}}}},title:"Packages/My Jetpack/CloseLink",component:s},R={},i=(g=>(0,m.jsx)(n.I9,{children:(0,m.jsx)(_.BV,{children:(0,m.jsx)(_.qh,{path:"/",element:(0,m.jsx)(s,{...g})})})})).bind({});i.parameters={},i.args=R;const v=["_default"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CloseLink {...args} />} />
        </Routes>
    </HashRouter>`,...i.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(u,a,e)=>{e.d(a,{A:()=>_});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n({icon:o,size:t=24,...l},d){return(0,r.cloneElement)(o,{width:t,height:t,...l,ref:d})}const _=(0,r.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js":(u,a,e)=>{e.d(a,{A:()=>o});var r=e("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,n.jsx)(r.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(r.wA,{d:"m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z"})})},"../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(u,a,e)=>{e.d(a,{G:()=>t,jl:()=>o,lA:()=>p,rw:()=>E,t4:()=>j,tS:()=>c,wA:()=>d});var r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=s=>(0,n.createElement)("circle",s),t=s=>(0,n.createElement)("g",s),l=s=>createElement("line",s),d=s=>(0,n.createElement)("path",s),c=s=>(0,n.createElement)("polygon",s),E=s=>(0,n.createElement)("rect",s),p=s=>(0,n.createElement)("defs",s),P=s=>createElement("radialGradient",s),x=s=>createElement("linearGradient",s),m=s=>createElement("stop",s),j=(0,n.forwardRef)(({className:s,isPressed:y,...A},f)=>{const R={...A,className:(0,r.A)(s,{"is-pressed":y})||void 0,"aria-hidden":!0,focusable:!1};return(0,_.jsx)("svg",{...R,ref:f})});j.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(u,a,e)=>{e.d(a,{A:()=>_});function r(o){var t,l,d="";if(typeof o=="string"||typeof o=="number")d+=o;else if(typeof o=="object")if(Array.isArray(o)){var c=o.length;for(t=0;t<c;t++)o[t]&&(l=r(o[t]))&&(d&&(d+=" "),d+=l)}else for(l in o)o[l]&&(d&&(d+=" "),d+=l);return d}function n(){for(var o,t,l=0,d="",c=arguments.length;l<c;l++)(o=arguments[l])&&(t=r(o))&&(d&&(d+=" "),d+=t);return d}const _=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/close-link/styles.module.scss":(u,a,e)=>{e.d(a,{A:()=>l});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(r),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(_),t=o()(n());t.push([u.id,".ObIcQSmxDv91Nj5rgOpJ{--gray-90: #1E1E1E;fill:var(--gray-90);width:24px}.jJJPTXA5yQQ8yWmUdGxT{display:flex;text-decoration:none;align-items:center}",""]),t.locals={icon:"ObIcQSmxDv91Nj5rgOpJ",link:"jJJPTXA5yQQ8yWmUdGxT"};const l=t}}]);
