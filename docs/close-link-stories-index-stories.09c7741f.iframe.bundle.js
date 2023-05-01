(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7297],{"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function l(t){let{icon:d,size:c=24,...o}=t;return(0,a.cloneElement)(d,{width:c,height:c,...o})}const n=l},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/close.js":(_,r,e)=>{"use strict";e.d(r,{Z:()=>t});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,a.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(l.y$,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(_,r,e)=>{"use strict";e.d(r,{Cd:()=>t,G:()=>d,UL:()=>E,Wj:()=>m,mg:()=>i,y$:()=>o});var a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(a),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const t=s=>(0,n.createElement)("circle",s),d=s=>(0,n.createElement)("g",s),c=s=>createElement("line",s),o=s=>(0,n.createElement)("path",s),i=s=>(0,n.createElement)("polygon",s),E=s=>(0,n.createElement)("rect",s),u=s=>createElement("defs",s),f=s=>createElement("radialGradient",s),C=s=>createElement("linearGradient",s),v=s=>createElement("stop",s),m=s=>{let{className:j,isPressed:g,...x}=s;const R={...x,className:l()(j,{"is-pressed":g})||void 0,"aria-hidden":!0,focusable:!1};return(0,n.createElement)("svg",R)}},"../../packages/my-jetpack/_inc/components/close-link/stories/index.stories.jsx":(_,r,e)=>{var P,L,O;"use strict";e.r(r),e.d(r,{__namedExportsOrder:()=>A,_default:()=>p,default:()=>R});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/close.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),o=e.n(c),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(i),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/close-link/styles.module.scss"),f={};f.insert="head",f.singleton=!1;var C=E()(u.Z,f);const v=u.Z.locals||{};var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=y=>{let{className:k}=y;return(0,m.jsx)(l.rU,{to:"/",className:o()(v.link,k),children:(0,m.jsx)(t.Z,{icon:d.Z,className:v.icon})})};s.displayName="CloseLink",s.__docgenInfo={description:"",methods:[],displayName:"CloseLink"};const j=s;var g=`import React from 'react';
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
`,x={_default:{startLoc:{col:17,line:9},endLoc:{col:17,line:13},startBody:{col:17,line:9},endBody:{col:17,line:13}}};const R={parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:17,line:13},startBody:{col:17,line:9},endBody:{col:17,line:13}}}}},title:"Packages/My Jetpack/CloseLink",component:j},D={},h=y=>(0,m.jsx)(l.UT,{children:(0,m.jsx)(n.Z5,{children:(0,m.jsx)(n.AW,{path:"/",element:(0,m.jsx)(j,{...y})})})});h.displayName="Template";const p=h.bind({});p.parameters={},p.args=D,p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CloseLink {...args} />} />
        </Routes>
    </HashRouter>`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const A=["_default"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,r)=>{var e,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var l={}.hasOwnProperty,n="[native code]";function t(){for(var d=[],c=0;c<arguments.length;c++){var o=arguments[c];if(o){var i=typeof o;if(i==="string"||i==="number")d.push(o);else if(Array.isArray(o)){if(o.length){var E=t.apply(null,o);E&&d.push(E)}}else if(i==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){d.push(o.toString());continue}for(var u in o)l.call(o,u)&&o[u]&&d.push(u)}}}return d.join(" ")}_.exports?(t.default=t,_.exports=t):(e=[],a=function(){return t}.apply(r,e),a!==void 0&&(_.exports=a))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/close-link/styles.module.scss":(_,r,e)=>{"use strict";e.d(r,{Z:()=>c});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),t=e.n(n),d=t()(l());d.push([_.id,".ObIcQSmxDv91Nj5rgOpJ{--gray-90: #1E1E1E;fill:var(--gray-90);width:24px}.jJJPTXA5yQQ8yWmUdGxT{display:flex;text-decoration:none;align-items:center}",""]),d.locals={icon:"ObIcQSmxDv91Nj5rgOpJ",link:"jJJPTXA5yQQ8yWmUdGxT"};const c=d}}]);})();
