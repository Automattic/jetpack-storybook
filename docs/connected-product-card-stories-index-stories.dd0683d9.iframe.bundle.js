"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(A,r,t)=>{var D,C,c;t.r(r),t.d(r,{Default:()=>a,__namedExportsOrder:()=>u,default:()=>O});var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),d=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),n=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),o=t("../../packages/my-jetpack/_inc/state/store.js"),g=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),E=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),k=`/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ConnectedProductCard from '../';
import { initStore } from '../../../state/store';
import { PRODUCT_STATUSES } from '../../product-card';
import { getAllMockData, getProductSlugs } from '../../product-detail-card/stories/utils.js';

// Set myJetpackRest global var.
window.myJetpackRest = {};

const mockData = getAllMockData();

initStore();

export default {
	title: 'Packages/My Jetpack/Connected Product Card',
	component: ConnectedProductCard,
	argTypes: {
		slug: {
			options: getProductSlugs(),
			control: { type: 'select' },
		},
		status: {
			options: Object.values( PRODUCT_STATUSES ),
			control: { type: 'select' },
		},
	},
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <ConnectedProductCard { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );
Default.parameters = { mockData };
Default.args = {
	admin: false,
	slug: 'backup',
};
`,R={Default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}};window.myJetpackRest={};const l=(0,E.As)();(0,o.N)();const O={parameters:{storySource:{source:`

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ConnectedProductCard from '../';
import { initStore } from '../../../state/store';
import { PRODUCT_STATUSES } from '../../product-card';
import { getAllMockData, getProductSlugs } from '../../product-detail-card/stories/utils.js';

// Set myJetpackRest global var.
window.myJetpackRest = {};
const mockData = getAllMockData();
initStore();
export default {
  title: 'Packages/My Jetpack/Connected Product Card',
  component: ConnectedProductCard,
  argTypes: {
    slug: {
      options: getProductSlugs(),
      control: {
        type: 'select'
      }
    },
    status: {
      options: Object.values(PRODUCT_STATUSES),
      control: {
        type: 'select'
      }
    }
  }
};
const Template = args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>;
export const Default = Template.bind({});
Default.parameters = {
  mockData
};
Default.args = {
  admin: false,
  slug: 'backup'
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<ConnectedProductCard {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:17,line:36},startBody:{col:17,line:32},endBody:{col:17,line:36}}}}},title:"Packages/My Jetpack/Connected Product Card",component:n.Z,argTypes:{slug:{options:(0,E.h7)(),control:{type:"select"}},status:{options:Object.values(g.N),control:{type:"select"}}}},P=_=>(0,e.jsx)(p.UT,{children:(0,e.jsx)(d.Z5,{children:(0,e.jsx)(d.AW,{path:"/",element:(0,e.jsx)(n.Z,{..._})})})});P.displayName="Template";const a=P.bind({});a.parameters={mockData:l},a.args={admin:!1,slug:"backup"},a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(c=(C=a.parameters)==null?void 0:C.docs)==null?void 0:c.source}}};const u=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(A,r,t)=>{t.d(r,{Z:()=>O});var m=t("../components/components/icons/index.tsx"),p=t("../connection/components/use-connection/index.jsx"),d=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=t.n(d),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),E=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),e=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),k=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),R=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=P=>{let{admin:a,slug:u,children:D,showMenu:C=!1,menuItems:c=[]}=P;const{isRegistered:_,isUserConnected:j}=(0,p.Z)(),{detail:L,status:i,activate:v,deactivate:W,isFetching:K,installStandalonePlugin:h}=(0,E.i)(u),{name:N,description:H,manageUrl:f,requiresUserConnection:S,standalonePluginInfo:s}=L,[J,x]=(0,o.useState)(!1),M=(0,g.Z)("/connection"),Z=(0,g.Z)(`add-${u}`),T=s==null?void 0:s.hasStandalonePlugin,b=_&&j,y=s==null?void 0:s.isStandaloneInstalled,U=s==null?void 0:s.isStandaloneActive,F=i===e.N.ABSENT||i===e.N.ABSENT_WITH_PLAN,V=T&&(!y||!U),X=C&&!F&&i!==e.N.ERROR&&b&&(i===e.N.ACTIVE||(c==null?void 0:c.length)>0||V),Y=(0,o.useCallback)(()=>{window.location=f},[f]),$=(0,o.useCallback)(()=>{if((!_||!j)&&S){M();return}v()},[v,_,j,S,M]),I=(0,o.useCallback)(()=>{x(!0),h().then(()=>{var B;(B=window==null?void 0:window.location)==null||B.reload()}).catch(()=>{x(!1)})},[h]),z=(0,m.getIconBySlug)(u);return(0,R.jsx)(k.Z,{name:N,description:H,status:i,icon:(0,R.jsx)(z,{opacity:.4}),admin:a,isFetching:K,isInstallingStandalone:J,onDeactivate:W,slug:u,onActivate:$,onAdd:Z,onManage:Y,onFixConnection:M,showMenu:X,menuItems:c,showManageOption:i===e.N.ACTIVE,showActivateOption:T&&y&&!U,showInstallOption:T&&!y,onInstallStandalone:I,onActivateStandalone:I,children:D})};l.displayName="ConnectedProductCard",l.propTypes={children:n().node,admin:n().bool.isRequired,slug:n().string.isRequired},l.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{showMenu:{defaultValue:{value:"false",computed:!1},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const O=l},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(A,r,t)=>{t.d(r,{Z:()=>d});var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function d(n){const o=(0,p.s0)();return(0,m.useCallback)(()=>o(n),[o,n])}}}]);})();
