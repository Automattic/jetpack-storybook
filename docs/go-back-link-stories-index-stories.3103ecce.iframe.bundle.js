(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6905],{"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(m,r,e)=>{"use strict";e.d(r,{Z:()=>t});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function l(a){let{icon:o,size:c=24,...n}=a;return(0,d.cloneElement)(o,{width:c,height:c,...n})}const t=l},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(m,r,e)=>{"use strict";e.d(r,{Z:()=>a});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const a=(0,d.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,d.createElement)(l.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(m,r,e)=>{"use strict";e.d(r,{Cd:()=>a,G:()=>o,UL:()=>i,Wj:()=>p,mg:()=>u,y$:()=>n});var d=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(d),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const a=s=>(0,t.createElement)("circle",s),o=s=>(0,t.createElement)("g",s),c=s=>createElement("line",s),n=s=>(0,t.createElement)("path",s),u=s=>(0,t.createElement)("polygon",s),i=s=>(0,t.createElement)("rect",s),E=s=>createElement("defs",s),_=s=>createElement("radialGradient",s),f=s=>createElement("linearGradient",s),k=s=>createElement("stop",s),p=s=>{let{className:j,isPressed:v,...R}=s;const P={...R,className:l()(j,{"is-pressed":v})||void 0,"aria-hidden":!0,focusable:!1};return(0,t.createElement)("svg",P)}},"../../packages/my-jetpack/_inc/components/go-back-link/stories/index.stories.jsx":(m,r,e)=>{var k,p,s;"use strict";e.r(r),e.d(r,{__namedExportsOrder:()=>f,_default:()=>_,default:()=>u});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),t=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),a=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import React from 'react';
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
`,n={_default:{startLoc:{col:17,line:9},endLoc:{col:17,line:13},startBody:{col:17,line:9},endBody:{col:17,line:13}}};const u={parameters:{storySource:{source:`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import GoBackLink from '..';
export default {
  title: 'Packages/My Jetpack/GoBackLink',
  component: GoBackLink
};
const DefaultArgs = {};
const Template = args => <HashRouter>
        <Routes>
            <Route path="/" element={<GoBackLink {...args} />} />
        </Routes>
    </HashRouter>;
export const _default = Template.bind({});
_default.parameters = {};
_default.args = DefaultArgs;
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<GoBackLink {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:17,line:13},startBody:{col:17,line:9},endBody:{col:17,line:13}}}}},title:"Packages/My Jetpack/GoBackLink",component:a.Z},i={},E=j=>(0,o.jsx)(l.UT,{children:(0,o.jsx)(t.Z5,{children:(0,o.jsx)(t.AW,{path:"/",element:(0,o.jsx)(a.Z,{...j})})})});E.displayName="Template";const _=E.bind({});_.parameters={},_.args=i,_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<GoBackLink {...args} />} />
        </Routes>
    </HashRouter>`,...(s=(p=_.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const f=["_default"]},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(m,r,e)=>{"use strict";e.d(r,{Z:()=>s});var d=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(c),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var E=n()(u.Z,i);const _=u.Z.locals||{};var f=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const k=d.__;function p(j){let{onClick:v}=j;return(0,f.jsxs)(o.rU,{to:"/",className:_.link,onClick:v,children:[(0,f.jsx)(l.Z,{icon:t.Z,className:_.icon}),k("Go back","jetpack-my-jetpack")]})}p.displayName="GoBackLink",p.defaultProps={onClick:()=>{}},p.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const s=p},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(m,r)=>{var e,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var l={}.hasOwnProperty,t="[native code]";function a(){for(var o=[],c=0;c<arguments.length;c++){var n=arguments[c];if(n){var u=typeof n;if(u==="string"||u==="number")o.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&o.push(i)}}else if(u==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){o.push(n.toString());continue}for(var E in n)l.call(n,E)&&n[E]&&o.push(E)}}}return o.join(" ")}m.exports?(a.default=a,m.exports=a):(e=[],d=function(){return a}.apply(r,e),d!==void 0&&(m.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(m,r,e)=>{"use strict";e.d(r,{Z:()=>c});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(d),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(t),o=a()(l());o.push([m.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),o.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const c=o}}]);})();
