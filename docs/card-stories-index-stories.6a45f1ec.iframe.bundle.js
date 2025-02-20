(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3298],{"../../packages/my-jetpack/_inc/components/card/stories/index.stories.jsx":(d,a,s)=>{"use strict";s.r(a),s.d(a,{Default:()=>i,__namedExportsOrder:()=>M,default:()=>S});var l=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=s("../../../node_modules/.pnpm/react-router-dom@6.28.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),c=s("../../../node_modules/.pnpm/react-router@6.28.1_react@18.3.1/node_modules/react-router/dist/index.js"),e=s("../components/components/text/index.tsx"),t=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),o=s.n(n),u=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=s.n(u),g=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss"),h={};h.insert="head",h.singleton=!1;var b=E()(g.A,h);const m=g.A.locals||{};var r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const P=_=>{const{children:v,className:x,onMouseEnter:f,onMouseLeave:y}=_,R=(0,t.A)(m.container,x);return(0,r.jsx)("div",{onMouseEnter:f,onMouseLeave:y,onFocus:f,onBlur:y,className:R,children:v})},j=_=>{const{title:v,headerRightContent:x,className:f,children:y,onMouseEnter:R,onMouseLeave:O,titleId:D}=_;return(0,r.jsxs)(P,{className:f,onMouseEnter:R,onMouseLeave:O,children:[(0,r.jsxs)("div",{className:m.title,children:[(0,r.jsx)("div",{className:m.name,children:(0,r.jsx)(e.Ay,{variant:"title-medium",id:D||null,children:v})}),x]}),y]})};j.propTypes={children:o().node,title:o().string.isRequired,className:o().string,headerRightContent:o().node,onMouseEnter:o().func,onMouseLeave:o().func,titleId:o().string};const C=j;P.__docgenInfo={description:"",methods:[],displayName:"CardWrapper"},j.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{description:"",type:{name:"node"},required:!1},title:{description:"",type:{name:"string"},required:!0},className:{description:"",type:{name:"string"},required:!1},headerRightContent:{description:"",type:{name:"node"},required:!1},onMouseEnter:{description:"",type:{name:"func"},required:!1},onMouseLeave:{description:"",type:{name:"func"},required:!1},titleId:{description:"",type:{name:"string"},required:!1}}};var k=`import React from 'react';
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
`,L={Default:{startLoc:{col:17,line:20},endLoc:{col:2,line:29},startBody:{col:17,line:20},endBody:{col:2,line:29}}};const S={parameters:{storySource:{source:`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Card from '..';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Packages/My Jetpack/Card',
  component: Card
};
const DefaultArgs = {
  title: 'Stats',
  headerRightContent: /*#__PURE__*/_jsx("div", {
    children: "Right content"
  }),
  children: /*#__PURE__*/_jsxs("p", {
    children: ["Lorem ipsum dolor ", /*#__PURE__*/_jsx("b", {
      children: "sit amet"
    }), ", consectetur adipiscing elit. Cras rutrum neque odio, vel viverra lectus vulputate et."]
  })
};
const Template = args => /*#__PURE__*/_jsx(HashRouter, {
  children: /*#__PURE__*/_jsx(Routes, {
    children: /*#__PURE__*/_jsx(Route, {
      path: "/",
      element: /*#__PURE__*/_jsx(Card, {
        ...args
      })
    })
  })
});
export const Default = Template.bind({});
Default.parameters = {};
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:20},endLoc:{col:2,line:29},startBody:{col:17,line:20},endBody:{col:2,line:29}}}}},title:"Packages/My Jetpack/Card",component:C},T={title:"Stats",headerRightContent:(0,r.jsx)("div",{children:"Right content"}),children:(0,r.jsxs)("p",{children:["Lorem ipsum dolor ",(0,r.jsx)("b",{children:"sit amet"}),", consectetur adipiscing elit. Cras rutrum neque odio, vel viverra lectus vulputate et."]})},i=(_=>(0,r.jsx)(p.I9,{children:(0,r.jsx)(c.BV,{children:(0,r.jsx)(c.qh,{path:"/",element:(0,r.jsx)(C,{..._})})})})).bind({});i.parameters={},i.args=T;const M=["Default"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<Card {...args} />} />
        </Routes>
    </HashRouter>`,...i.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(d,a,s)=>{"use strict";s.d(a,{A:()=>c});function l(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var u=e.length;for(t=0;t<u;t++)e[t]&&(n=l(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function p(){for(var e,t,n=0,o="",u=arguments.length;n<u;n++)(e=arguments[n])&&(t=l(e))&&(o&&(o+=" "),o+=t);return o}const c=p},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/card/style.module.scss":(d,a,s)=>{"use strict";s.d(a,{A:()=>n});var l=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=s.n(l),c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),e=s.n(c),t=e()(p());t.push([d.id,".pecv05IGfM82FIHp9Q4E{padding:calc(var(--spacing-base)*3);background:var(--jp-white);border:1px solid var(--jp-gray-5);border-radius:var(--jp-border-radius-rna);box-shadow:0 4px 12px 0px rgba(0,0,0,.06);height:100%;display:flex;flex-direction:column}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR{background:none;text-decoration:none;background-color:var(--jp-white-off);color:var(--jp-black-80)}.pecv05IGfM82FIHp9Q4E.jgcGPDlYaLnB6QcRWSWR:focus{box-shadow:0 0 0 1.5px var(--jp-black);background-color:var(--jp-white);outline:3px solid rgba(0,0,0,0)}.pecv05IGfM82FIHp9Q4E.Hv659vLLaZ8SaSWyxtAZ{box-shadow:0 0 0 1.5px var(--jp-red-60)}.i1rUritEO7pQO4fsj9PF{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:var(--spacing-base)}.i1rUritEO7pQO4fsj9PF h3{font-weight:700}.YP7299HZXBCUg1n1NUqU{display:flex;height:100%;gap:var(--spacing-base);align-items:center;flex-wrap:wrap-reverse}",""]),t.locals={container:"pecv05IGfM82FIHp9Q4E","is-link":"jgcGPDlYaLnB6QcRWSWR","has-error":"Hv659vLLaZ8SaSWyxtAZ",title:"i1rUritEO7pQO4fsj9PF",name:"YP7299HZXBCUg1n1NUqU"};const n=t},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(d,a,s)=>{"use strict";var l=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function p(){}function c(){}c.resetWarningCache=p,d.exports=function(){function e(o,u,E,g,h,b){if(b!==l){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:p};return n.PropTypes=n,n}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(d,a,s)=>{if(0)var l,p;else d.exports=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":d=>{"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";d.exports=a}}]);
