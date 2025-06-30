"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6984],{"../../plugins/protect/src/js/components/tabs/stories/index.stories.jsx":(u,n,s)=>{s.r(n),s.d(n,{Default:()=>a,__namedExportsOrder:()=>x,default:()=>T});var l=s("../../../node_modules/.pnpm/react-router@7.6.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router/dist/development/chunk-NL6KNZEE.mjs"),_=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(_),r=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/tabs/styles.module.scss"),e={};e.insert="head",e.singleton=!1;var p=c()(r.A,e);const d=r.A.locals||{};var o=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=({children:t,className:m=""})=>(0,o.jsx)("nav",{className:`${d.tabs} ${m}`,children:t}),i=({label:t,link:m})=>(0,o.jsx)(l.k2,{to:m,className:({isActive:f})=>f?`${d.tab} ${d["tab--active"]}`:d.tab,children:t}),j=b;i.__docgenInfo={description:"",methods:[],displayName:"Tab"},b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};var E=`import { HashRouter } from 'react-router';
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
`,h={Default:{startLoc:{col:23,line:8},endLoc:{col:2,line:19},startBody:{col:23,line:8},endBody:{col:2,line:19}}};const T={parameters:{storySource:{source:`import { HashRouter } from 'react-router';
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
});`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:2,line:19},startBody:{col:23,line:8},endBody:{col:2,line:19}}}}},title:"Plugins/Protect/Tabs",component:j},a=t=>(0,o.jsx)(l.I9,{children:(0,o.jsxs)(j,{...t,children:[(0,o.jsx)(i,{link:"/",label:"Scan"}),(0,o.jsx)(i,{link:"/firewall",label:"Firewall"})]})}),x=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <HashRouter>
        <Tabs {...args}>
            <Tab link="/" label="Scan" />
            <Tab link="/firewall" label="Firewall" />
        </Tabs>
    </HashRouter>`,...a.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/tabs/styles.module.scss":(u,n,s)=>{s.d(n,{A:()=>p});var l=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(l),c=s("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(c),e=r()(_());e.push([u.id,".WTmNI0eRhHyE66BBOYFl{display:flex}.OWXE0itj487xm944c06G{color:var(--jp-black);font-size:var(--font-body);line-height:1.5;text-decoration:none;padding:var(--spacing-base) 0;margin-right:calc(var(--spacing-base)*4)}.OWXE0itj487xm944c06G:last-child{margin-right:0}.OWXE0itj487xm944c06G:hover,.OWXE0itj487xm944c06G:focus{box-shadow:none;color:var(--jp-green);border-bottom-color:var(--jp-green)}.P33apZBeOs7HBQ1q8x08{border-bottom:1px solid var(--jp-black)}",""]),e.locals={tabs:"WTmNI0eRhHyE66BBOYFl",tab:"OWXE0itj487xm944c06G","tab--active":"P33apZBeOs7HBQ1q8x08"};const p=e}}]);
