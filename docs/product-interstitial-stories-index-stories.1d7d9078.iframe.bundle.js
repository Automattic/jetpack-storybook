"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(g,l,e)=>{e.d(l,{Z:()=>c});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,o.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(g,l,e)=>{var ue,me,_e,ke,ge,he,Re,je,ye,xe,Ie,Se,fe,Be,be,ve,Pe,Ce,Je,Te,Me,Ae,Ee,Le;e.r(l),e.d(l,{JetpackAntiSpam:()=>T,JetpackBackup:()=>M,JetpackBoost:()=>A,JetpackCRM:()=>E,JetpackScan:()=>L,JetpackSearch:()=>H,JetpackVideoPress:()=>P,__namedExportsOrder:()=>We,_default:()=>v,default:()=>Ue});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),c=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),r=e("../components/components/admin-page/index.tsx"),m=e("../components/components/layout/container/index.tsx"),h=e("../components/components/layout/col/index.tsx"),j=e("../components/components/text/index.tsx"),b=e("../components/components/button/index.tsx"),Z=e("../../../node_modules/.pnpm/@wordpress+element@5.7.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),C=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),_=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),k=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),d=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),y=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),x=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx");const f=e.p+"static/media/boost.a5413748.png",R=e.p+"static/media/crm.7e7684ae.png",D=e.p+"static/media/extras.26daf365.png",W=e.p+"static/media/search.f9756bd9.png";var K=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(K),O=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),N={};N.insert="head",N.singleton=!1;var F=w()(O.Z,N);const J=O.Z.locals||{},Ve=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const G=C.__;function p(a){let{bundle:I,existingLicenseKeyUrl:U="admin.php?page=my-jetpack#/add-license",installsPlugin:Ke=!1,slug:S,supportingInfo:Fe,preferProductName:Ge=!1,children:Ye=null}=a;const{activate:He,detail:Xe}=(0,d.i)(S),{isUpgradableByBundle:ee}=Xe,{recordEvent:B}=(0,_.Z)();(0,o.useEffect)(()=>{B("jetpack_myjetpack_product_interstitial_view",{product:S})},[B,S]);const ze=(0,o.useCallback)(function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;B("jetpack_myjetpack_product_interstitial_add_link_click",{product:u!=null?u:S})},[B,S]),Qe=(0,o.useCallback)(()=>{B("jetpack_myjetpack_product_interstitial_add_link_click",{product:I})},[B,I]),De=(0,k.Z)("/"),Oe=(0,o.useCallback)((u,i)=>{(()=>i!=null&&i.isBundle?Promise.resolve():He())().finally(()=>{var we;const Ne=i==null?void 0:i.postActivationUrl,qe=i==null?void 0:i.hasRequiredPlan,et=!((we=i==null?void 0:i.pricingForUi)==null?void 0:we.isFree)&&!qe;if(i!=null&&i.isBundle){u==null||u();return}if(Ne){window.location.href=Ne;return}if(!et)return De();u==null||u()})},[De,He]),$e=(0,o.useCallback)(u=>{S&&B("jetpack_myjetpack_product_interstitial_back_link_click",{product:S}),document.referrer.includes(window.location.host)&&(u.preventDefault(),history.back())},[B,S]);return(0,t.jsx)(r.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(m.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(h.Z,{className:J["product-interstitial__header"],children:[(0,t.jsx)(y.Z,{onClick:$e}),U&&(0,t.jsx)(j.ZP,{variant:"body-small",children:(0,Z.Z)(G("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(b.Z,{className:J["product-interstitial__license-activation-link"],href:U,variant:"link"})})})]}),(0,t.jsx)(h.Z,{children:(0,t.jsxs)(m.Z,{className:ee?null:J.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(h.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(x.Z,{slug:S,trackButtonClick:ze,onClick:Ke?Oe:void 0,className:ee?J.container:null,supportingInfo:Fe,preferProductName:Ge})}),(0,t.jsx)(h.Z,{sm:4,md:4,lg:5,className:J.imageContainer,children:I?(0,t.jsx)(x.Z,{slug:I,trackButtonClick:Qe,onClick:Oe,className:ee?J.container:null}):Ye})]})})]})})}p.displayName="ProductInterstitial";function Y(){const a="anti-spam",{detail:I}=(0,d.i)(a),{isPluginActive:U}=I;return(0,t.jsx)(p,{slug:a,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:U?"admin.php?page=akismet-key-config":null,preferProductName:!0})}Y.displayName="AntiSpamInterstitial";function V(){return(0,t.jsx)(p,{slug:"backup",installsPlugin:!0,bundle:"security"})}V.displayName="BackupInterstitial";function X(){return(0,t.jsx)(p,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:f,alt:"Boost"})})}X.displayName="BoostInterstitial";function z(){return(0,t.jsx)(p,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:R,alt:"CRM"})})}z.displayName="CRMInterstitial";function te(){return(0,t.jsx)(p,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:D,alt:"Extras"})})}te.displayName="ExtrasInterstitial";function se(){return(0,t.jsx)(p,{slug:"protect",installsPlugin:!0,bundle:"security"})}se.displayName="ProtectInterstitial";function Q(){return(0,t.jsx)(p,{slug:"scan",installsPlugin:!0,bundle:"security"})}Q.displayName="ScanInterstitial";function ae(){return(0,t.jsx)(p,{slug:"social",installsPlugin:!0})}ae.displayName="SocialInterstitial";function $(){var I;const{detail:a}=(0,d.i)("search");return(0,t.jsx)(p,{slug:"search",installsPlugin:!0,supportingInfo:((I=a==null?void 0:a.pricingForUi)!=null&&I.trialAvailable?G("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+G("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:W,alt:"Search"})})}$.displayName="SearchInterstitial";function q(){return(0,t.jsx)(p,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:Ve,alt:"VideoPress"})})}q.displayName="VideoPressInterstitial",p.__docgenInfo={description:`Product Interstitial component.

@param {object} props                         - Component props.
@param {string} props.slug                    - Product slug
@param {string} props.bundle                  - Bundle including this product
@param {object} props.children                - Product additional content
@param {string} props.existingLicenseKeyUrl 	 - URL to enter an existing license key (e.g. Akismet)
@param {boolean} props.installsPlugin         - Whether the interstitial button installs a plugin*
@param {React.ReactNode} props.supportingInfo - Complementary links or support/legal text
@param {boolean} props.preferProductName      - Use product name instead of title
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1}}},Y.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},V.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},X.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},z.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},te.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},se.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},Q.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},ae.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},$.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},q.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var tt=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { getMockData } from '../../product-detail-card/stories/utils.js';
import ProductInterstitial, {
	AntiSpamInterstitial,
	BackupInterstitial,
	BoostInterstitial,
	CRMInterstitial,
	SearchInterstitial,
	ScanInterstitial,
	VideoPressInterstitial,
} from '../index.jsx';

export default {
	title: 'Packages/My Jetpack/Product Interstitial',
	component: ProductInterstitial,
};

const DefaultArgs = {};

const DefaultBackupDetailCard = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <BackupInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const _default = DefaultBackupDetailCard.bind( {} );
_default.parameters = {};
_default.args = DefaultArgs;

const AntiSpamTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <AntiSpamInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackAntiSpam = AntiSpamTemplate.bind( {} );
JetpackAntiSpam.parameters = {
	mockData: getMockData( 'anti-spam' ),
};

const BackupTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <BackupInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackBackup = BackupTemplate.bind( {} );
JetpackBackup.parameters = {
	mockData: getMockData( 'backup' ),
};

const BoostTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <BoostInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackBoost = BoostTemplate.bind( {} );
JetpackBoost.parameters = {
	mockData: getMockData( 'boost' ),
};

const CRMTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <CRMInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackCRM = CRMTemplate.bind( {} );
JetpackCRM.parameters = {
	mockData: getMockData( 'crm' ),
};

const ScanTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <ScanInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackScan = ScanTemplate.bind( {} );
JetpackScan.parameters = {};

const SearchTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <SearchInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackSearch = SearchTemplate.bind( {} );
JetpackSearch.parameters = {
	mockData: getMockData( 'search' ),
};

const VideoPressTemplate = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <VideoPressInterstitial { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const JetpackVideoPress = VideoPressTemplate.bind( {} );
JetpackVideoPress.storyName = 'Jetpack VideoPress';
JetpackVideoPress.parameters = {
	mockData: getMockData( 'videopress' ),
};
`,st={_default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},JetpackBackup:{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},JetpackBoost:{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},JetpackCRM:{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},JetpackScan:{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},JetpackSearch:{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},JetpackVideoPress:{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}};const Ue={parameters:{storySource:{source:`
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { getMockData } from '../../product-detail-card/stories/utils.js';
import ProductInterstitial, { AntiSpamInterstitial, BackupInterstitial, BoostInterstitial, CRMInterstitial, SearchInterstitial, ScanInterstitial, VideoPressInterstitial } from '../index.jsx';
export default {
  title: 'Packages/My Jetpack/Product Interstitial',
  component: ProductInterstitial
};
const DefaultArgs = {};
const DefaultBackupDetailCard = args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const _default = DefaultBackupDetailCard.bind({});
_default.parameters = {};
_default.args = DefaultArgs;
const AntiSpamTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackAntiSpam = AntiSpamTemplate.bind({});
JetpackAntiSpam.parameters = {
  mockData: getMockData('anti-spam')
};
const BackupTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackBackup = BackupTemplate.bind({});
JetpackBackup.parameters = {
  mockData: getMockData('backup')
};
const BoostTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackBoost = BoostTemplate.bind({});
JetpackBoost.parameters = {
  mockData: getMockData('boost')
};
const CRMTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackCRM = CRMTemplate.bind({});
JetpackCRM.parameters = {
  mockData: getMockData('crm')
};
const ScanTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackScan = ScanTemplate.bind({});
JetpackScan.parameters = {};
const SearchTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackSearch = SearchTemplate.bind({});
JetpackSearch.parameters = {
  mockData: getMockData('search')
};
const VideoPressTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackVideoPress = VideoPressTemplate.bind({});
JetpackVideoPress.storyName = 'Jetpack VideoPress';
JetpackVideoPress.parameters = {
  mockData: getMockData('videopress')
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<BackupInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ..._default.parameters?.docs?.source
    }
  }
};
JetpackAntiSpam.parameters = {
  ...JetpackAntiSpam.parameters,
  docs: {
    ...JetpackAntiSpam.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<AntiSpamInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackAntiSpam.parameters?.docs?.source
    }
  }
};
JetpackBackup.parameters = {
  ...JetpackBackup.parameters,
  docs: {
    ...JetpackBackup.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<BackupInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackBackup.parameters?.docs?.source
    }
  }
};
JetpackBoost.parameters = {
  ...JetpackBoost.parameters,
  docs: {
    ...JetpackBoost.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<BoostInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackBoost.parameters?.docs?.source
    }
  }
};
JetpackCRM.parameters = {
  ...JetpackCRM.parameters,
  docs: {
    ...JetpackCRM.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<CRMInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackCRM.parameters?.docs?.source
    }
  }
};
JetpackScan.parameters = {
  ...JetpackScan.parameters,
  docs: {
    ...JetpackScan.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<ScanInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackScan.parameters?.docs?.source
    }
  }
};
JetpackSearch.parameters = {
  ...JetpackSearch.parameters,
  docs: {
    ...JetpackSearch.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<SearchInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackSearch.parameters?.docs?.source
    }
  }
};
JetpackVideoPress.parameters = {
  ...JetpackVideoPress.parameters,
  docs: {
    ...JetpackVideoPress.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<VideoPressInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackVideoPress.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},"jetpack-backup":{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},"jetpack-boost":{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},"jetpack-crm":{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},"jetpack-scan":{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},"jetpack-search":{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},"jetpack-video-press":{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}}}},title:"Packages/My Jetpack/Product Interstitial",component:p},Ze={},ne=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(V,{...a})})})});ne.displayName="DefaultBackupDetailCard";const v=ne.bind({});v.parameters={},v.args=Ze;const oe=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(Y,{...a})})})});oe.displayName="AntiSpamTemplate";const T=oe.bind({});T.parameters={mockData:(0,c.TN)("anti-spam")};const re=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(V,{...a})})})});re.displayName="BackupTemplate";const M=re.bind({});M.parameters={mockData:(0,c.TN)("backup")};const ce=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(X,{...a})})})});ce.displayName="BoostTemplate";const A=ce.bind({});A.parameters={mockData:(0,c.TN)("boost")};const le=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(z,{...a})})})});le.displayName="CRMTemplate";const E=le.bind({});E.parameters={mockData:(0,c.TN)("crm")};const ie=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(Q,{...a})})})});ie.displayName="ScanTemplate";const L=ie.bind({});L.parameters={};const de=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)($,{...a})})})});de.displayName="SearchTemplate";const H=de.bind({});H.parameters={mockData:(0,c.TN)("search")};const pe=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(q,{...a})})})});pe.displayName="VideoPressTemplate";const P=pe.bind({});P.storyName="Jetpack VideoPress",P.parameters={mockData:(0,c.TN)("videopress")},v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(_e=(me=v.parameters)==null?void 0:me.docs)==null?void 0:_e.source}}},T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(he=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}},M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ye=(je=M.parameters)==null?void 0:je.docs)==null?void 0:ye.source}}},A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Se=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}},E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(be=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:be.source}}},L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ce=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}},H.parameters={...H.parameters,docs:{...(Je=H.parameters)==null?void 0:Je.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Me=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}},P.parameters={...P.parameters,docs:{...(Ae=P.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Le=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};const We=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../components/components/layout/use-breakpoint-match/index.ts":(g,l,e)=>{e.d(l,{Z:()=>C});var o=e("../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(n),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),r={};r.insert="head",r.singleton=!1;var m=s()(c.Z,r);const h=c.Z.locals||{},j=["sm","md","lg"],b=(_,k,d)=>{const y=j.indexOf(_),x=y+1,f=k.includes("=");let R=[];return k.startsWith("<")&&(R=j.slice(0,f?x:y)),k.startsWith(">")&&(R=j.slice(f?y:x)),R!=null&&R.length?R.some(D=>d[D]):d[_]},C=(_,k)=>{const d=Array.isArray(_)?_:[_],y=Array.isArray(k)?k:[k],[x,f,R]=j,D=(0,o.Z)(h[x]),W=(0,o.Z)(h[f]),K=(0,o.Z)(h[R]),w={sm:D,md:W,lg:K};return d.map((O,N)=>{const F=y[N];return F?b(O,F,w):w[O]})}},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(g,l,e)=>{e.d(l,{Z:()=>y});var o=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(m),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),b={};b.insert="head",b.singleton=!1;var Z=h()(j.Z,b);const C=j.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const k=o.__;function d(x){let{onClick:f}=x;return(0,_.jsxs)(r.rU,{to:"/",className:C.link,onClick:f,children:[(0,_.jsx)(n.Z,{icon:s.Z,className:C.icon}),k("Go back","jetpack-my-jetpack")]})}d.displayName="GoBackLink",d.defaultProps={onClick:()=>{}},d.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const y=d},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(g,l,e)=>{e.d(l,{Z:()=>s});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(c){const r=(0,n.s0)();return(0,o.useCallback)(()=>r(c),[r,c])}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(g,l,e)=>{e.d(l,{Z:()=>m});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(s),r=c()(n());r.push([g.id,"",""]),r.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const m=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(g,l,e)=>{e.d(l,{Z:()=>m});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(s),r=c()(n());r.push([g.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),r.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const m=r},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(g,l,e)=>{e.d(l,{Z:()=>m});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(s),r=c()(n());r.push([g.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),r.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const m=r}}]);})();
