(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6905],{"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js":(m,r,e)=>{"use strict";e.d(r,{Z:()=>n});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function l({icon:t,size:o=24,...c}){return(0,d.cloneElement)(t,{width:o,height:o,...c})}const n=l},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(m,r,e)=>{"use strict";e.d(r,{Z:()=>t});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,d.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,d.createElement)(l.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(m,r,e)=>{"use strict";e.d(r,{Cd:()=>t,G:()=>o,UL:()=>i,Wj:()=>p,mg:()=>u,y$:()=>a});var d=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(d),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const t=s=>(0,n.createElement)("circle",s),o=s=>(0,n.createElement)("g",s),c=s=>createElement("line",s),a=s=>(0,n.createElement)("path",s),u=s=>(0,n.createElement)("polygon",s),i=s=>(0,n.createElement)("rect",s),E=s=>createElement("defs",s),_=s=>createElement("radialGradient",s),f=s=>createElement("linearGradient",s),k=s=>createElement("stop",s),p=({className:s,isPressed:j,...g})=>{const v={...g,className:l()(s,{"is-pressed":j})||void 0,"aria-hidden":!0,focusable:!1};return(0,n.createElement)("svg",{...v})}},"../../packages/my-jetpack/_inc/components/go-back-link/stories/index.stories.jsx":(m,r,e)=>{var k,p,s;"use strict";e.r(r),e.d(r,{__namedExportsOrder:()=>f,_default:()=>_,default:()=>u});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),t=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import React from 'react';
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
`,a={_default:{startLoc:{col:17,line:9},endLoc:{col:17,line:13},startBody:{col:17,line:9},endBody:{col:17,line:13}}};const u={parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:17,line:13},startBody:{col:17,line:9},endBody:{col:17,line:13}}}}},title:"Packages/My Jetpack/GoBackLink",component:t.Z},i={},E=j=>(0,o.jsx)(l.UT,{children:(0,o.jsx)(n.Z5,{children:(0,o.jsx)(n.AW,{path:"/",element:(0,o.jsx)(t.Z,{...j})})})});E.displayName="Template";const _=E.bind({});_.parameters={},_.args=i,_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<GoBackLink {...args} />} />
        </Routes>
    </HashRouter>`,...(s=(p=_.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const f=["_default"]},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(m,r,e)=>{"use strict";e.d(r,{Z:()=>s});var d=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(c),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),i={};i.insert="head",i.singleton=!1;var E=a()(u.Z,i);const _=u.Z.locals||{};var f=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const k=d.__;function p(j){let{onClick:g,reload:v}=j;const R=v?"/?reload=true":"/";return(0,f.jsxs)(o.rU,{to:R,className:_.link,onClick:g,children:[(0,f.jsx)(l.Z,{icon:n.Z,className:_.icon}),k("Go back","jetpack-my-jetpack")]})}p.displayName="GoBackLink",p.defaultProps={onClick:()=>{}},p.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const s=p},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(m,r)=>{var e,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var l={}.hasOwnProperty,n="[native code]";function t(){for(var o=[],c=0;c<arguments.length;c++){var a=arguments[c];if(a){var u=typeof a;if(u==="string"||u==="number")o.push(a);else if(Array.isArray(a)){if(a.length){var i=t.apply(null,a);i&&o.push(i)}}else if(u==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){o.push(a.toString());continue}for(var E in a)l.call(a,E)&&a[E]&&o.push(E)}}}return o.join(" ")}m.exports?(t.default=t,m.exports=t):(e=[],d=function(){return t}.apply(r,e),d!==void 0&&(m.exports=d))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(m,r,e)=>{"use strict";e.d(r,{Z:()=>c});var d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(d),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(n),o=t()(l());o.push([m.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),o.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const c=o}}]);})();
