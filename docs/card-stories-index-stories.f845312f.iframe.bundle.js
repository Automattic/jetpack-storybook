(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1471],{"../../packages/my-jetpack/_inc/components/card/stories/index.stories.jsx":(c,a,e)=>{var l,v,f;"use strict";e.r(a),e.d(a,{Default:()=>d,__namedExportsOrder:()=>h,default:()=>m});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),p=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),n=e("../../packages/my-jetpack/_inc/components/card/index.jsx"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Card from '..';

export default {
	title: 'Packages/My Jetpack/Card',
	component: Card,
};

const DefaultArgs = {
	title: 'Stats',
	headerRightContent: <div>Right content</div>,
	children: (
		<p>
			Lorem ipsum dolor <b>sit amet</b>, consectetur adipiscing elit. Cras rutrum neque odio, vel
			viverra lectus vulputate et.
		</p>
	),
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <Card { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );
Default.parameters = {};
Default.args = DefaultArgs;
`,t={Default:{startLoc:{col:17,line:16},endLoc:{col:17,line:20},startBody:{col:17,line:16},endBody:{col:17,line:20}}};const m={parameters:{storySource:{source:`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Card from '..';
export default {
  title: 'Packages/My Jetpack/Card',
  component: Card
};
const DefaultArgs = {
  title: 'Stats',
  headerRightContent: <div>Right content</div>,
  children: <p>
            Lorem ipsum dolor <b>sit amet</b>, consectetur adipiscing elit. Cras rutrum neque odio, vel
            viverra lectus vulputate et.
        </p>
};
const Template = args => <HashRouter>
        <Routes>
            <Route path="/" element={<Card {...args} />} />
        </Routes>
    </HashRouter>;
export const Default = Template.bind({});
Default.parameters = {};
Default.args = DefaultArgs;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<Card {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:17,line:20},startBody:{col:17,line:16},endBody:{col:17,line:20}}}}},title:"Packages/My Jetpack/Card",component:n.Z},_={title:"Stats",headerRightContent:(0,s.jsx)("div",{children:"Right content"}),children:(0,s.jsxs)("p",{children:["Lorem ipsum dolor ",(0,s.jsx)("b",{children:"sit amet"}),", consectetur adipiscing elit. Cras rutrum neque odio, vel viverra lectus vulputate et."]})},o=j=>(0,s.jsx)(i.UT,{children:(0,s.jsx)(p.Z5,{children:(0,s.jsx)(p.AW,{path:"/",element:(0,s.jsx)(n.Z,{...j})})})});o.displayName="Template";const d=o.bind({});d.parameters={},d.args=_,d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<Card {...args} />} />
        </Routes>
    </HashRouter>`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const h=["Default"]},"../../packages/my-jetpack/_inc/components/card/index.jsx":(c,a,e)=>{"use strict";e.d(a,{U:()=>v,Z:()=>j});var r=e("../components/components/text/index.tsx"),i=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(i),n=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),s=e.n(n),u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(t),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss"),o={};o.insert="head",o.singleton=!1;var d=m()(_.Z,o);const h=_.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=g=>{const{children:R,className:x}=g,E=p()(h.container,x);return(0,l.jsx)("div",{className:E,children:R})};v.displayName="CardWrapper";const f=g=>{const{title:R,headerRightContent:x,className:E,children:y}=g;return(0,l.jsxs)(v,{className:E,children:[(0,l.jsxs)("div",{className:h.title,children:[(0,l.jsx)("div",{className:h.name,children:(0,l.jsx)(r.ZP,{variant:"title-medium",children:R})}),x]}),y]})};f.displayName="Card",f.propTypes={children:s().node,title:s().string.isRequired,className:s().string,headerRightContent:s().node},f.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{description:"",type:{name:"node"},required:!1},title:{description:"",type:{name:"string"},required:!0},className:{description:"",type:{name:"string"},required:!1},headerRightContent:{description:"",type:{name:"node"},required:!1}}};const j=f;v.__docgenInfo={description:"",methods:[],displayName:"CardWrapper"}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(c,a)=>{var e,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var i={}.hasOwnProperty,p="[native code]";function n(){for(var s=[],u=0;u<arguments.length;u++){var t=arguments[u];if(t){var m=typeof t;if(m==="string"||m==="number")s.push(t);else if(Array.isArray(t)){if(t.length){var _=n.apply(null,t);_&&s.push(_)}}else if(m==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){s.push(t.toString());continue}for(var o in t)i.call(t,o)&&t[o]&&s.push(o)}}}return s.join(" ")}c.exports?(n.default=n,c.exports=n):(e=[],r=function(){return n}.apply(a,e),r!==void 0&&(c.exports=r))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss":(c,a,e)=>{"use strict";e.d(a,{Z:()=>u});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(r),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(p),s=n()(i());s.push([c.id,".pecv05IGfM82FIHp9Q4E{padding:calc(var(--spacing-base)*3);background:var(--jp-white);border:1px solid var(--jp-gray-5);border-radius:var(--jp-border-radius-rna);box-shadow:0 4px 12px 0px rgba(0,0,0,.06);height:100%;display:flex;flex-direction:column}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR{background:none;text-decoration:none;background-color:var(--jp-white-off);color:var(--jp-black-80)}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR:focus{box-shadow:0 0 0 1.5px var(--jp-black);background-color:var(--jp-white);outline:3px solid rgba(0,0,0,0)}.pecv05IGfM82FIHp9Q4E.Hv659vLLaZ8SaSWyxtAZ{box-shadow:0 0 0 1.5px var(--jp-red-60)}.i1rUritEO7pQO4fsj9PF{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:var(--spacing-base)}.i1rUritEO7pQO4fsj9PF h3{font-weight:700}.YP7299HZXBCUg1n1NUqU{display:flex;height:100%;gap:var(--spacing-base);align-items:center;flex-wrap:wrap-reverse}",""]),s.locals={container:"pecv05IGfM82FIHp9Q4E","is-link":"jgcGPDlYaLnB6QcRWSWR","has-error":"Hv659vLLaZ8SaSWyxtAZ",title:"i1rUritEO7pQO4fsj9PF",name:"YP7299HZXBCUg1n1NUqU"};const u=s}}]);})();
