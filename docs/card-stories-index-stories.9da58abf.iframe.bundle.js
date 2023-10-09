(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1471],{"../../packages/my-jetpack/_inc/components/card/stories/index.stories.jsx":(l,a,e)=>{var _,v,h;"use strict";e.r(a),e.d(a,{Default:()=>d,__namedExportsOrder:()=>f,default:()=>u});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),i=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),n=e("../../packages/my-jetpack/_inc/components/card/index.jsx"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=`import React from 'react';
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
`,s={Default:{startLoc:{col:17,line:16},endLoc:{col:17,line:20},startBody:{col:17,line:16},endBody:{col:17,line:20}}};const u={parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:17,line:20},startBody:{col:17,line:16},endBody:{col:17,line:20}}}}},title:"Packages/My Jetpack/Card",component:n.Z},m={title:"Stats",headerRightContent:(0,t.jsx)("div",{children:"Right content"}),children:(0,t.jsxs)("p",{children:["Lorem ipsum dolor ",(0,t.jsx)("b",{children:"sit amet"}),", consectetur adipiscing elit. Cras rutrum neque odio, vel viverra lectus vulputate et."]})},o=j=>(0,t.jsx)(c.UT,{children:(0,t.jsx)(i.Z5,{children:(0,t.jsx)(i.AW,{path:"/",element:(0,t.jsx)(n.Z,{...j})})})});o.displayName="Template";const d=o.bind({});d.parameters={},d.args=m,d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<Card {...args} />} />
        </Routes>
    </HashRouter>`,...(h=(v=d.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const f=["Default"]},"../../packages/my-jetpack/_inc/components/card/index.jsx":(l,a,e)=>{"use strict";e.d(a,{Z:()=>h});var r=e("../components/components/text/index.tsx"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=e.n(c),n=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),t=e.n(n),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(s),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss"),o={};o.insert="head",o.singleton=!1;var d=u()(m.Z,o);const f=m.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=j=>{const{title:g,headerRightContent:x,className:R,children:E}=j,y=i()(f.container,R);return(0,_.jsxs)("div",{className:y,children:[(0,_.jsxs)("div",{className:f.title,children:[(0,_.jsx)("div",{className:f.name,children:(0,_.jsx)(r.ZP,{variant:"title-medium",children:g})}),x]}),E]})};v.displayName="Card",v.propTypes={children:t().node,title:t().string.isRequired,className:t().string,headerRightContent:t().node},v.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{description:"",type:{name:"node"},required:!1},title:{description:"",type:{name:"string"},required:!0},className:{description:"",type:{name:"string"},required:!1},headerRightContent:{description:"",type:{name:"node"},required:!1}}};const h=v},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(l,a)=>{var e,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,i="[native code]";function n(){for(var t=[],p=0;p<arguments.length;p++){var s=arguments[p];if(s){var u=typeof s;if(u==="string"||u==="number")t.push(s);else if(Array.isArray(s)){if(s.length){var m=n.apply(null,s);m&&t.push(m)}}else if(u==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){t.push(s.toString());continue}for(var o in s)c.call(s,o)&&s[o]&&t.push(o)}}}return t.join(" ")}l.exports?(n.default=n,l.exports=n):(e=[],r=function(){return n}.apply(a,e),r!==void 0&&(l.exports=r))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss":(l,a,e)=>{"use strict";e.d(a,{Z:()=>p});var r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(r),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),t=n()(c());t.push([l.id,".pecv05IGfM82FIHp9Q4E{padding:calc(var(--spacing-base)*3);background:var(--jp-white);border-radius:var(--jp-border-radius);box-shadow:0 0 40px rgba(0,0,0,.08);height:100%;display:flex;flex-direction:column;box-shadow:0 0 0 1px var(--jp-gray-10) inset,0px 0px 40px 0px rgba(0,0,0,.08)}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR{background:none;text-decoration:none;background-color:var(--jp-white-off);color:var(--jp-black-80)}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR:focus{box-shadow:0 0 0 1.5px var(--jp-black);background-color:var(--jp-white);outline:3px solid rgba(0,0,0,0)}.pecv05IGfM82FIHp9Q4E.Hv659vLLaZ8SaSWyxtAZ{box-shadow:0 0 0 1.5px var(--jp-red-60)}.i1rUritEO7pQO4fsj9PF{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:var(--spacing-base)}.i1rUritEO7pQO4fsj9PF h3{font-weight:700}.YP7299HZXBCUg1n1NUqU{display:flex;height:100%;gap:var(--spacing-base);align-items:center;flex-wrap:wrap-reverse}",""]),t.locals={container:"pecv05IGfM82FIHp9Q4E","is-link":"jgcGPDlYaLnB6QcRWSWR","has-error":"Hv659vLLaZ8SaSWyxtAZ",title:"i1rUritEO7pQO4fsj9PF",name:"YP7299HZXBCUg1n1NUqU"};const p=t}}]);})();
