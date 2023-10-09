(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7297],{"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>o});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function l({icon:d,size:n=24,...c}){return(0,a.cloneElement)(d,{width:n,height:n,...c})}const o=l},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/close.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>d});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,a.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(l.y$,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(_,r,e)=>{"use strict";e.d(r,{Cd:()=>d,G:()=>n,UL:()=>E,Wj:()=>m,mg:()=>u,x1:()=>c,y$:()=>t});var a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(a),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const d=s=>(0,o.createElement)("circle",s),n=s=>(0,o.createElement)("g",s),c=s=>(0,o.createElement)("line",s),t=s=>(0,o.createElement)("path",s),u=s=>(0,o.createElement)("polygon",s),E=s=>(0,o.createElement)("rect",s),i=s=>createElement("defs",s),f=s=>createElement("radialGradient",s),O=s=>createElement("linearGradient",s),v=s=>createElement("stop",s),m=({className:s,isPressed:j,...y})=>{const g={...y,className:l()(s,{"is-pressed":j})||void 0,"aria-hidden":!0,focusable:!1};return(0,o.createElement)("svg",{...g})}},"../../packages/my-jetpack/_inc/components/close-link/stories/index.stories.jsx":(_,r,e)=>{var h,P,L;"use strict";e.r(r),e.d(r,{__namedExportsOrder:()=>A,_default:()=>p,default:()=>C});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),o=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/close.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),t=e.n(c),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(u),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/close-link/styles.module.scss"),f={};f.insert="head",f.singleton=!1;var O=E()(i.Z,f);const v=i.Z.locals||{};var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=R=>{let{className:k}=R;return(0,m.jsx)(l.rU,{to:"/",className:t()(v.link,k),children:(0,m.jsx)(d.Z,{icon:n.Z,className:v.icon})})};s.displayName="CloseLink",s.__docgenInfo={description:"",methods:[],displayName:"CloseLink"};const j=s;var y=`import React from 'react';
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
`,g={_default:{startLoc:{col:17,line:9},endLoc:{col:17,line:13},startBody:{col:17,line:9},endBody:{col:17,line:13}}};const C={parameters:{storySource:{source:`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CloseLink from '..';
export default {
  title: 'Packages/My Jetpack/CloseLink',
  component: CloseLink
};
const DefaultArgs = {};
const Template = args => <HashRouter>
        <Routes>
            <Route path="/" element={<CloseLink {...args} />} />
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
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<CloseLink {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:17,line:13},startBody:{col:17,line:9},endBody:{col:17,line:13}}}}},title:"Packages/My Jetpack/CloseLink",component:j},D={},x=R=>(0,m.jsx)(l.UT,{children:(0,m.jsx)(o.Z5,{children:(0,m.jsx)(o.AW,{path:"/",element:(0,m.jsx)(j,{...R})})})});x.displayName="Template";const p=x.bind({});p.parameters={},p.args=D,p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CloseLink {...args} />} />
        </Routes>
    </HashRouter>`,...(L=(P=p.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const A=["_default"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,r)=>{var e,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var l={}.hasOwnProperty,o="[native code]";function d(){for(var n=[],c=0;c<arguments.length;c++){var t=arguments[c];if(t){var u=typeof t;if(u==="string"||u==="number")n.push(t);else if(Array.isArray(t)){if(t.length){var E=d.apply(null,t);E&&n.push(E)}}else if(u==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var i in t)l.call(t,i)&&t[i]&&n.push(i)}}}return n.join(" ")}_.exports?(d.default=d,_.exports=d):(e=[],a=function(){return d}.apply(r,e),a!==void 0&&(_.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/close-link/styles.module.scss":(_,r,e)=>{"use strict";e.d(r,{Z:()=>c});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(o),n=d()(l());n.push([_.id,".ObIcQSmxDv91Nj5rgOpJ{--gray-90: #1E1E1E;fill:var(--gray-90);width:24px}.jJJPTXA5yQQ8yWmUdGxT{display:flex;text-decoration:none;align-items:center}",""]),n.locals={icon:"ObIcQSmxDv91Nj5rgOpJ",link:"jJJPTXA5yQQ8yWmUdGxT"};const c=n}}]);})();
