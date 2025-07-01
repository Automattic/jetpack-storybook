"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6279],{"../../packages/my-jetpack/_inc/components/go-back-link/stories/index.stories.jsx":(p,l,e)=>{e.r(l),e.d(l,{__namedExportsOrder:()=>y,_default:()=>u,default:()=>f});var a=e("../../../node_modules/.pnpm/react-router@7.6.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router/dist/development/chunk-NL6KNZEE.mjs"),o=e("../../../node_modules/.pnpm/@wordpress+i18n@5.26.0/node_modules/@wordpress/i18n/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(d),t=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),c={};c.insert="head",c.singleton=!1;var A=r()(t.A,c);const j=t.A.locals||{};var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=o.__;function k({onClick:g=()=>{},reload:P}){const v=P?"/?reload=true":"/";return(0,m.jsxs)(a.N_,{to:v,className:j.link,onClick:g,children:[(0,m.jsx)(_.A,{icon:s.A,className:j.icon}),E("Go back","jetpack-my-jetpack")]})}const i=k;k.__docgenInfo={description:`Simple component that renders a go back link

@param {object}   props         - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean}  props.reload  - Whether to reload the page after going back
@return {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};var n=`import { HashRouter, Routes, Route } from 'react-router';
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
`,R={_default:{startLoc:{col:17,line:9},endLoc:{col:2,line:18},startBody:{col:17,line:9},endBody:{col:2,line:18}}};const f={parameters:{storySource:{source:`import { HashRouter, Routes, Route } from 'react-router';
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
_default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:2,line:18},startBody:{col:17,line:9},endBody:{col:2,line:18}}}}},title:"Packages/My Jetpack/GoBackLink",component:i},x={},u=(g=>(0,m.jsx)(a.I9,{children:(0,m.jsx)(a.BV,{children:(0,m.jsx)(a.qh,{path:"/",element:(0,m.jsx)(i,{...g})})})})).bind({});u.parameters={},u.args=x;const y=["_default"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<GoBackLink {...args} />} />
        </Routes>
    </HashRouter>`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(p,l,e)=>{e.d(l,{A:()=>_});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({icon:s,size:d=24,...r},t){return(0,a.cloneElement)(s,{width:d,height:d,...r,ref:t})}const _=(0,a.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@10.26.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(p,l,e)=>{e.d(l,{A:()=>s});var a=e("../../../node_modules/.pnpm/@wordpress+primitives@4.26.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,o.jsx)(a.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(a.wA,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})})},"../../../node_modules/.pnpm/@wordpress+primitives@4.26.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(p,l,e)=>{e.d(l,{Ey:()=>m,G:()=>d,N1:()=>r,VG:()=>k,W4:()=>E,jl:()=>s,lA:()=>j,rw:()=>A,t4:()=>i,tS:()=>c,wA:()=>t});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=n=>(0,o.createElement)("circle",n),d=n=>(0,o.createElement)("g",n),r=n=>(0,o.createElement)("line",n),t=n=>(0,o.createElement)("path",n),c=n=>(0,o.createElement)("polygon",n),A=n=>(0,o.createElement)("rect",n),j=n=>(0,o.createElement)("defs",n),m=n=>(0,o.createElement)("radialGradient",n),E=n=>(0,o.createElement)("linearGradient",n),k=n=>(0,o.createElement)("stop",n),i=(0,o.forwardRef)(({className:n,isPressed:R,...f},x)=>{const h={...f,className:(0,a.A)(n,{"is-pressed":R})||void 0,"aria-hidden":!0,focusable:!1};return(0,_.jsx)("svg",{...h,ref:x})});i.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(p,l,e)=>{e.d(l,{A:()=>_});function a(s){var d,r,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var c=s.length;for(d=0;d<c;d++)s[d]&&(r=a(s[d]))&&(t&&(t+=" "),t+=r)}else for(r in s)s[r]&&(t&&(t+=" "),t+=r);return t}function o(){for(var s,d,r=0,t="",c=arguments.length;r<c;r++)(s=arguments[r])&&(d=a(s))&&(t&&(t+=" "),t+=d);return t}const _=o},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(p,l,e)=>{e.d(l,{A:()=>r});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),_=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(_),d=s()(o());d.push([p.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),d.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const r=d}}]);
