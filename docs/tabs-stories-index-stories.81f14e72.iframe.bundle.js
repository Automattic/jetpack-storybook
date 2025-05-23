"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6984],{"../../plugins/protect/src/js/components/tabs/stories/index.stories.jsx":(p,l,s)=>{s.r(l),s.d(l,{Default:()=>a,__namedExportsOrder:()=>T,default:()=>x});var u=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/react-router-dom@6.30.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),_=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(_),e=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/tabs/styles.module.scss"),t={};t.insert="head",t.singleton=!1;var E=c()(e.A,t);const d=e.A.locals||{};var o=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=({children:n,className:i=""})=>(0,o.jsx)("nav",{className:`${d.tabs} ${i}`,children:n}),m=({label:n,link:i})=>(0,o.jsx)(r.k2,{to:i,className:({isActive:f})=>f?`${d.tab} ${d["tab--active"]}`:d.tab,children:n}),j=b;m.__docgenInfo={description:"",methods:[],displayName:"Tab"},b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};var g=`import React from 'react';
import { HashRouter } from 'react-router-dom';
import Tabs, { Tab } from '..';

export default {
	title: 'Plugins/Protect/Tabs',
	component: Tabs,
};

export const Default = args => (
	<HashRouter>
		<Tabs { ...args }>
			<Tab link="/" label="Scan" />
			<Tab link="/firewall" label="Firewall" />
		</Tabs>
	</HashRouter>
);
`,h={Default:{startLoc:{col:23,line:9},endLoc:{col:2,line:20},startBody:{col:23,line:9},endBody:{col:2,line:20}}};const x={parameters:{storySource:{source:`import React from 'react';
import { HashRouter } from 'react-router-dom';
import Tabs, { Tab } from '..';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Plugins/Protect/Tabs',
  component: Tabs
};
export const Default = args => /*#__PURE__*/_jsx(HashRouter, {
  children: /*#__PURE__*/_jsxs(Tabs, {
    ...args,
    children: [/*#__PURE__*/_jsx(Tab, {
      link: "/",
      label: "Scan"
    }), /*#__PURE__*/_jsx(Tab, {
      link: "/firewall",
      label: "Firewall"
    })]
  })
});`,locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:2,line:20},startBody:{col:23,line:9},endBody:{col:2,line:20}}}}},title:"Plugins/Protect/Tabs",component:j},a=n=>(0,o.jsx)(r.I9,{children:(0,o.jsxs)(j,{...n,children:[(0,o.jsx)(m,{link:"/",label:"Scan"}),(0,o.jsx)(m,{link:"/firewall",label:"Firewall"})]})}),T=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Tabs {...args}>
            <Tab link="/" label="Scan" />
            <Tab link="/firewall" label="Firewall" />
        </Tabs>
    </HashRouter>`,...a.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/tabs/styles.module.scss":(p,l,s)=>{s.d(l,{A:()=>t});var u=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=s.n(u),_=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),c=s.n(_),e=c()(r());e.push([p.id,".WTmNI0eRhHyE66BBOYFl{display:flex}.OWXE0itj487xm944c06G{color:var(--jp-black);font-size:var(--font-body);line-height:1.5;text-decoration:none;padding:var(--spacing-base) 0;margin-right:calc(var(--spacing-base)*4)}.OWXE0itj487xm944c06G:last-child{margin-right:0}.OWXE0itj487xm944c06G:hover,.OWXE0itj487xm944c06G:focus{box-shadow:none;color:var(--jp-green);border-bottom-color:var(--jp-green)}.P33apZBeOs7HBQ1q8x08{border-bottom:1px solid var(--jp-black)}",""]),e.locals={tabs:"WTmNI0eRhHyE66BBOYFl",tab:"OWXE0itj487xm944c06G","tab--active":"P33apZBeOs7HBQ1q8x08"};const t=e}}]);
