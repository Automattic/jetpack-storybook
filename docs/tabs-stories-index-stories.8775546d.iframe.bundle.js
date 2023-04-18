"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4793],{"../../plugins/protect/src/js/components/tabs/stories/index.stories.jsx":(b,n,e)=>{var f,g,h;e.r(n),e.d(n,{Default:()=>s,__namedExportsOrder:()=>y,default:()=>x});var j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.2.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(_),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/tabs/styles.module.scss"),t={};t.insert="head",t.singleton=!1;var O=m()(a.Z,t);const d=a.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=l=>{let{children:u,className:p=""}=l;return(0,o.jsx)("nav",{className:`${d.tabs} ${p}`,children:u})};i.displayName="Tabs";const c=l=>{let{label:u,link:p}=l;return(0,o.jsx)(r.OL,{to:p,className:v=>{let{isActive:E}=v;return E?`${d.tab} ${d["tab--active"]}`:d.tab},children:u})};c.displayName="Tab",i.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const T=i;c.__docgenInfo={description:"",methods:[],displayName:"Tab"};var k=`import React from 'react';
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
`,S={Default:{startLoc:{col:23,line:8},endLoc:{col:17,line:13},startBody:{col:23,line:8},endBody:{col:17,line:13}}};const x={parameters:{storySource:{source:`import React from 'react';
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
};`,locationsMap:{default:{startLoc:{col:23,line:8},endLoc:{col:17,line:13},startBody:{col:23,line:8},endBody:{col:17,line:13}}}}},title:"Plugins/Protect/Tabs",component:T},s=l=>(0,o.jsx)(r.UT,{children:(0,o.jsxs)(T,{...l,children:[(0,o.jsx)(c,{link:"/",label:"Scan"}),(0,o.jsx)(c,{link:"/firewall",label:"Firewall"})]})});s.displayName="Default",s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => <HashRouter>
        <Tabs {...args}>
            <Tab link="/" label="Scan" />
            <Tab link="/firewall" label="Firewall" />
        </Tabs>
    </HashRouter>`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const y=["Default"];s.__docgenInfo={description:"",methods:[],displayName:"Default"}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/tabs/styles.module.scss":(b,n,e)=>{e.d(n,{Z:()=>t});var j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(j),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(_),a=m()(r());a.push([b.id,".WTmNI0eRhHyE66BBOYFl{display:flex}.OWXE0itj487xm944c06G{color:var(--jp-black);font-size:var(--font-body);line-height:1.5;text-decoration:none;padding:var(--spacing-base) 0;margin-right:calc(var(--spacing-base)*4)}.OWXE0itj487xm944c06G:last-child{margin-right:0}.OWXE0itj487xm944c06G:hover,.OWXE0itj487xm944c06G:focus{box-shadow:none;color:var(--jp-green);border-bottom-color:var(--jp-green)}.P33apZBeOs7HBQ1q8x08{border-bottom:1px solid var(--jp-black)}",""]),a.locals={tabs:"WTmNI0eRhHyE66BBOYFl",tab:"OWXE0itj487xm944c06G","tab--active":"P33apZBeOs7HBQ1q8x08"};const t=a}}]);})();
