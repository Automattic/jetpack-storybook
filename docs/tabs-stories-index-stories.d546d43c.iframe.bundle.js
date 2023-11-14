"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4793],{"../../plugins/protect/src/js/components/tabs/stories/index.stories.jsx":(u,l,s)=>{var T,f,g;s.r(l),s.d(l,{Default:()=>e,__namedExportsOrder:()=>x,default:()=>h});var b=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=s("../../../node_modules/.pnpm/react-router-dom@6.2.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/index.js"),_=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=s.n(_),a=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/tabs/styles.module.scss"),t={};t.insert="head",t.singleton=!1;var v=m()(a.Z,t);const d=a.Z.locals||{};var o=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=({children:n,className:p=""})=>(0,o.jsx)("nav",{className:`${d.tabs} ${p}`,children:n});i.displayName="Tabs";const c=({label:n,link:p})=>(0,o.jsx)(r.OL,{to:p,className:({isActive:y})=>y?`${d.tab} ${d["tab--active"]}`:d.tab,children:n});c.displayName="Tab",i.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const j=i;c.__docgenInfo={description:"",methods:[],displayName:"Tab"};var E=`import React from 'react';
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
`,O={Default:{startLoc:{col:23,line:8},endLoc:{col:17,line:13},startBody:{col:23,line:8},endBody:{col:17,line:13}}};const h={parameters:{storySource:{source:`import React from 'react';
import { HashRouter } from 'react-router-dom';
import Tabs, { Tab } from '..';
export default {
  title: 'Plugins/Protect/Tabs',
  component: Tabs
};
export const Default = args => <HashRouter>
        <Tabs {...args}>
            <Tab link="/" label="Scan" />
            <Tab link="/firewall" label="Firewall" />
        </Tabs>
    </HashRouter>;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Tabs {...args}>\\n            <Tab link=\\"/\\" label=\\"Scan\\" />\\n            <Tab link=\\"/firewall\\" label=\\"Firewall\\" />\\n        </Tabs>\\n    </HashRouter>",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:17,line:13},startBody:{col:23,line:8},endBody:{col:17,line:13}}}}},title:"Plugins/Protect/Tabs",component:j},e=n=>(0,o.jsx)(r.UT,{children:(0,o.jsxs)(j,{...n,children:[(0,o.jsx)(c,{link:"/",label:"Scan"}),(0,o.jsx)(c,{link:"/firewall",label:"Firewall"})]})});e.displayName="Default",e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`args => <HashRouter>
        <Tabs {...args}>
            <Tab link="/" label="Scan" />
            <Tab link="/firewall" label="Firewall" />
        </Tabs>
    </HashRouter>`,...(g=(f=e.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const x=["Default"];e.__docgenInfo={description:"",methods:[],displayName:"Default"}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/tabs/styles.module.scss":(u,l,s)=>{s.d(l,{Z:()=>t});var b=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=s.n(b),_=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=s.n(_),a=m()(r());a.push([u.id,".WTmNI0eRhHyE66BBOYFl{display:flex}.OWXE0itj487xm944c06G{color:var(--jp-black);font-size:var(--font-body);line-height:1.5;text-decoration:none;padding:var(--spacing-base) 0;margin-right:calc(var(--spacing-base)*4)}.OWXE0itj487xm944c06G:last-child{margin-right:0}.OWXE0itj487xm944c06G:hover,.OWXE0itj487xm944c06G:focus{box-shadow:none;color:var(--jp-green);border-bottom-color:var(--jp-green)}.P33apZBeOs7HBQ1q8x08{border-bottom:1px solid var(--jp-black)}",""]),a.locals={tabs:"WTmNI0eRhHyE66BBOYFl",tab:"OWXE0itj487xm944c06G","tab--active":"P33apZBeOs7HBQ1q8x08"};const t=a}}]);})();
