"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(f,m,e)=>{e.d(m,{Z:()=>c});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.30.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(f,m,e)=>{var Pe,Ie,fe,Be,ve,Se,be,Ce,Te,De,Me,Ee,Le,Je,Ae,Oe,He,Ne,Ue,Ze,we,We,Ve,Ke;e.r(m),e.d(m,{JetpackAntiSpam:()=>X,JetpackBackup:()=>G,JetpackBoost:()=>Y,JetpackCRM:()=>$,JetpackScan:()=>q,JetpackSearch:()=>ee,JetpackVideoPress:()=>K,__namedExportsOrder:()=>st,_default:()=>A,default:()=>oe});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),c=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../components/components/admin-page/index.tsx"),j=e("../components/components/layout/container/index.tsx"),x=e("../components/components/layout/col/index.tsx"),W=e("../components/components/text/index.tsx"),k=e("../components/components/button/index.tsx"),V=e("../../../node_modules/.pnpm/@wordpress+element@5.9.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),T=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),B=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),i=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),_=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),H=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),v=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const D=e.p+"static/media/boost.a5413748.png",R=e.p+"static/media/crm.7e7684ae.png",S=e.p+"static/media/extras.26daf365.png",b=e.p+"static/media/jetpack-ai.26daf365.png",M=e.p+"static/media/search.f9756bd9.png";var E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(E),U=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),L={};L.insert="head",L.singleton=!1;var F=N()(U.Z,L);const P=U.Z.locals||{},z=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=T.__;function d(r){let{bundle:O,existingLicenseKeyUrl:ie="admin.php?page=my-jetpack#/add-license",installsPlugin:nt=!1,slug:C,supportingInfo:at,preferProductName:ot=!1,children:rt=null}=r;const{activate:Fe,detail:ct}=(0,i.i)(C),{isUpgradableByBundle:ue,tiers:ze}=ct,{recordEvent:w}=(0,n.Z)();(0,a.useEffect)(()=>{w("jetpack_myjetpack_product_interstitial_view",{product:C})},[w,C]);const Qe=(0,a.useCallback)(function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;w("jetpack_myjetpack_product_interstitial_add_link_click",{product:I!=null?I:C})},[w,C]),lt=(0,a.useCallback)(()=>{w("jetpack_myjetpack_product_interstitial_add_link_click",{product:O})},[w,O]),Xe=(0,B.Z)("/"),de=(0,a.useCallback)((I,p,pe)=>{(()=>p!=null&&p.isBundle?Promise.resolve():Fe())().finally(()=>{var Ye,$e,qe,et,tt;if(p!=null&&p.isBundle){I==null||I();return}const Ge=p==null?void 0:p.postActivationUrl,dt=pe?(Ye=p==null?void 0:p.hasRequiredTier)==null?void 0:Ye[pe]:p==null?void 0:p.hasRequiredPlan;if(!(!(pe?(et=(qe=($e=p==null?void 0:p.pricingForUi)==null?void 0:$e.tiers)==null?void 0:qe[pe])==null?void 0:et.isFree:(tt=p==null?void 0:p.pricingForUi)==null?void 0:tt.isFree)&&!dt)){if(Ge){window.location.href=Ge;return}return Xe()}I==null||I()})},[Xe,Fe]),it=(0,a.useCallback)(I=>{C&&w("jetpack_myjetpack_product_interstitial_back_link_click",{product:C}),document.referrer.includes(window.location.host)&&(I.preventDefault(),history.back())},[w,C]);return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(j.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(x.Z,{className:P["product-interstitial__header"],children:[(0,t.jsx)(_.Z,{onClick:it}),ie&&(0,t.jsx)(W.ZP,{variant:"body-small",children:(0,V.Z)(g("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(k.Z,{className:P["product-interstitial__license-activation-link"],href:ie,variant:"link"})})})]}),(0,t.jsx)(x.Z,{children:ze&&ze.length?(0,t.jsx)(v.Z,{slug:C,clickHandler:de,onProductButtonClick:de,trackProductButtonClick:Qe}):(0,t.jsxs)(j.Z,{className:ue?null:P.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(x.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(H.Z,{slug:C,trackButtonClick:Qe,onClick:nt?de:void 0,className:ue?P.container:null,supportingInfo:at,preferProductName:ot})}),(0,t.jsx)(x.Z,{sm:4,md:4,lg:5,className:P.imageContainer,children:O?(0,t.jsx)(H.Z,{slug:O,trackButtonClick:lt,onClick:de,className:ue?P.container:null}):rt})]})})]})})}d.displayName="ProductInterstitial";function u(){const r="anti-spam",{detail:O}=(0,i.i)(r),{isPluginActive:ie}=O;return(0,t.jsx)(d,{slug:r,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:ie?"admin.php?page=akismet-key-config":null,preferProductName:!0})}u.displayName="AntiSpamInterstitial";function y(){return(0,t.jsx)(d,{slug:"backup",installsPlugin:!0,bundle:"security"})}y.displayName="BackupInterstitial";function J(){return(0,t.jsx)(d,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:D,alt:"Boost"})})}J.displayName="BoostInterstitial";function Z(){return(0,t.jsx)(d,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:R,alt:"CRM"})})}Z.displayName="CRMInterstitial";function te(){return(0,t.jsx)(d,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:S,alt:"Extras"})})}te.displayName="ExtrasInterstitial";function ce(){return(0,t.jsx)(d,{slug:"jetpack-ai",installsPlugin:!1,children:(0,t.jsx)("img",{src:b,alt:"Jetpack AI"})})}ce.displayName="JetpackAIInterstitial";function se(){return(0,t.jsx)(d,{slug:"protect",installsPlugin:!0})}se.displayName="ProtectInterstitial";function ne(){return(0,t.jsx)(d,{slug:"scan",installsPlugin:!0,bundle:"security"})}ne.displayName="ScanInterstitial";function le(){return(0,t.jsx)(d,{slug:"social",installsPlugin:!0})}le.displayName="SocialInterstitial";function Q(){var O;const{detail:r}=(0,i.i)("search");return(0,t.jsx)(d,{slug:"search",installsPlugin:!0,supportingInfo:((O=r==null?void 0:r.pricingForUi)!=null&&O.trialAvailable?g("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+g("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:M,alt:"Search"})})}Q.displayName="SearchInterstitial";function ae(){return(0,t.jsx)(d,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:z,alt:"VideoPress"})})}ae.displayName="VideoPressInterstitial",d.__docgenInfo={description:`Product Interstitial component.

@param {object} props                         - Component props.
@param {string} props.slug                    - Product slug
@param {string} props.bundle                  - Bundle including this product
@param {object} props.children                - Product additional content
@param {string} props.existingLicenseKeyUrl 	 - URL to enter an existing license key (e.g. Akismet)
@param {boolean} props.installsPlugin         - Whether the interstitial button installs a plugin*
@param {React.ReactNode} props.supportingInfo - Complementary links or support/legal text
@param {boolean} props.preferProductName      - Use product name instead of title
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1}}},u.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},y.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},J.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},Z.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},te.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},ce.__docgenInfo={description:`JetpackAIInterstitial component

@returns {object} JetpackAIInterstitial react component.`,methods:[],displayName:"JetpackAIInterstitial"},se.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},ne.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},le.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},Q.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},ae.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var me=`/* eslint-disable react/react-in-jsx-scope */
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
`,_e={_default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},JetpackBackup:{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},JetpackBoost:{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},JetpackCRM:{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},JetpackScan:{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},JetpackSearch:{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},JetpackVideoPress:{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}};const oe={parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},"jetpack-backup":{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},"jetpack-boost":{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},"jetpack-crm":{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},"jetpack-scan":{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},"jetpack-search":{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},"jetpack-video-press":{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}}}},title:"Packages/My Jetpack/Product Interstitial",component:d},re={},h=r=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(y,{...r})})})});h.displayName="DefaultBackupDetailCard";const A=h.bind({});A.parameters={},A.args=re;const ke=r=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(u,{...r})})})});ke.displayName="AntiSpamTemplate";const X=ke.bind({});X.parameters={mockData:(0,c.TN)("anti-spam")};const ge=r=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(y,{...r})})})});ge.displayName="BackupTemplate";const G=ge.bind({});G.parameters={mockData:(0,c.TN)("backup")};const he=r=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(J,{...r})})})});he.displayName="BoostTemplate";const Y=he.bind({});Y.parameters={mockData:(0,c.TN)("boost")};const je=r=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(Z,{...r})})})});je.displayName="CRMTemplate";const $=je.bind({});$.parameters={mockData:(0,c.TN)("crm")};const Re=r=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ne,{...r})})})});Re.displayName="ScanTemplate";const q=Re.bind({});q.parameters={};const xe=r=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(Q,{...r})})})});xe.displayName="SearchTemplate";const ee=xe.bind({});ee.parameters={mockData:(0,c.TN)("search")};const ye=r=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ae,{...r})})})});ye.displayName="VideoPressTemplate";const K=ye.bind({});K.storyName="Jetpack VideoPress",K.parameters={mockData:(0,c.TN)("videopress")},A.parameters={...A.parameters,docs:{...(Pe=A.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(fe=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:fe.source}}},X.parameters={...X.parameters,docs:{...(Be=X.parameters)==null?void 0:Be.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Se=(ve=X.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}},G.parameters={...G.parameters,docs:{...(be=G.parameters)==null?void 0:be.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Te=(Ce=G.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}},Y.parameters={...Y.parameters,docs:{...(De=Y.parameters)==null?void 0:De.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ee=(Me=Y.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}},$.parameters={...$.parameters,docs:{...(Le=$.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ae=(Je=$.parameters)==null?void 0:Je.docs)==null?void 0:Ae.source}}},q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ne=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}},ee.parameters={...ee.parameters,docs:{...(Ue=ee.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(we=(Ze=ee.parameters)==null?void 0:Ze.docs)==null?void 0:we.source}}},K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ke=(Ve=K.parameters)==null?void 0:Ve.docs)==null?void 0:Ke.source}}};const st=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../components/components/notice/index.tsx":(f,m,e)=>{e.d(m,{Z:()=>D});var a=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/warning.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/info.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/check.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/close.js"),j=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),x=e.n(j),W=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),V=e.n(k),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),n={};n.insert="head",n.singleton=!1;var B=V()(T.Z,n);const i=T.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const H=R=>{switch(R){case"error":return a.Z;case"warning":return a.Z;case"info":return o.Z;case"success":return s.Z;default:return a.Z}},v=R=>{let{level:S,title:b,children:M,actions:E,hideCloseButton:N,onClose:U}=R;const L=x()(i.container,i[`is-${S}`]);return(0,_.jsxs)("div",{className:L,children:[(0,_.jsx)("div",{className:i["icon-wrapper"],children:(0,_.jsx)(c.Z,{icon:H(S),className:i.icon})}),(0,_.jsxs)("div",{className:i["main-content"],children:[(0,_.jsx)("div",{className:i.title,children:b}),M,E&&E.length>0&&(0,_.jsx)("div",{className:i["action-bar"],children:E.map((F,P)=>(0,_.jsx)("div",{className:i.action,children:F},P))})]}),!N&&(0,_.jsx)("button",{"aria-label":"close",className:i["close-button"],onClick:U,children:(0,_.jsx)(c.Z,{icon:l.Z})})]})};v.displayName="Notice",v.defaultProps={level:"info",hideCloseButton:!1};const D=v},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(f,m,e)=>{e.d(m,{Z:()=>_});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(j),W=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),k={};k.insert="head",k.singleton=!1;var V=x()(W.Z,k);const T=W.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const B=a.__;function i(H){let{onClick:v,reload:D}=H;const R=D?"/?reload=true":"/";return(0,n.jsxs)(l.rU,{to:R,className:T.link,onClick:v,children:[(0,n.jsx)(o.Z,{icon:s.Z,className:T.icon}),B("Go back","jetpack-my-jetpack")]})}i.displayName="GoBackLink",i.defaultProps={onClick:()=>{}},i.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const _=i},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(f,m,e)=>{e.d(m,{Z:()=>H});var a=e("../components/components/pricing-table/index.tsx"),o=e("../components/components/product-price/index.tsx"),s=e("../components/components/button/index.tsx"),c=e("../components/components/notice/index.tsx"),l=e("../components/components/text/index.tsx"),j=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),x=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),W=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),k=e.n(W),V=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const B=x.__,i=v=>{var Q;let{cantInstallPlugin:D,onProductButtonClick:R,detail:S,tier:b,trackProductButtonClick:M}=v;const{siteSuffix:E,myJetpackUrl:N}=(Q=window==null?void 0:window.myJetpackInitialState)!=null?Q:{},{featuresByTier:U=[],pricingForUi:{tiers:L},title:F}=S,{callToAction:P,currencyCode:z,fullPrice:t,introductoryOffer:g,isFree:d,wpcomProductSlug:u}=L[b],{run:y,hasCheckoutStarted:J}=(0,j.Z)({from:"my-jetpack",productSlug:u,redirectUrl:N,siteSuffix:E}),Z=(0,V.useCallback)(()=>{M(),R==null||R(y,S,b)},[M,R,y,S,b]),te=t?Math.ceil(t/12*100)/100:null,ce=g!=null&&g.costPerInterval?Math.ceil(g.costPerInterval/12*100)/100:null,se=(g==null?void 0:g.intervalUnit)==="month"&&(g==null?void 0:g.intervalCount)===1,ne=se?(0,x.gB)(B("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),te):B("/month, paid yearly","jetpack-my-jetpack",0),le=P||(d?B("Start for Free","jetpack-my-jetpack"):(0,x.gB)(B("Get %s","jetpack-my-jetpack"),F,0));return(0,n.jsxs)(a.oK,{primary:!d,children:[(0,n.jsxs)(a.NE,{children:[d?(0,n.jsx)(o.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,n.jsx)(o.Z,{price:te,offPrice:ce,legend:ne,currency:z,hideDiscountLabel:se,hidePriceFraction:!0}),(0,n.jsx)(s.Z,{fullWidth:!0,variant:d?"secondary":"primary",onClick:Z,isLoading:J,disabled:J||D,children:le})]}),U.map((ae,me)=>{const{included:_e,description:oe,struck_description:re,info:h}=ae.tiers[b],A=re||oe?(0,n.jsxs)(n.Fragment,{children:[re?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("del",{children:re})," "]}):null,oe?(0,n.jsx)("strong",{children:oe}):null]}):null;return(0,n.jsx)(a.kF,{isIncluded:_e,label:A,tooltipTitle:h==null?void 0:h.title,tooltipInfo:h!=null&&h.content?(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:h==null?void 0:h.content}}):null,tooltipClassName:h==null?void 0:h.class},me)})]})};i.displayName="ProductDetailTableColumn",i.propTypes={cantInstallPlugin:k().bool.isRequired,onProductButtonClick:k().func.isRequired,detail:k().object.isRequired,tier:k().string.isRequired,trackProductButtonClick:k().func.isRequired};const _=v=>{var d;let{slug:D,onProductButtonClick:R,trackProductButtonClick:S}=v;const{fileSystemWriteAccess:b}=(d=window==null?void 0:window.myJetpackInitialState)!=null?d:{},{detail:M}=(0,T.i)(D),{description:E,featuresByTier:N=[],pluginSlug:U,status:L,tiers:F=[],title:P}=M,z=L==="plugin_absent"&&b==="no",t=z&&(0,n.jsx)(c.Z,{level:"error",hideCloseButton:!0,title:(0,n.jsx)(l.ZP,{children:(0,x.gB)(B("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),P)}),actions:[(0,n.jsx)(s.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${U}`,isExternalLink:!0,children:B("Get plugin","jetpack-my-jetpack")})]}),g=(0,V.useMemo)(()=>N.map(u=>{var y,J,Z;return{name:u==null?void 0:u.name,tooltipTitle:(y=u==null?void 0:u.info)==null?void 0:y.title,tooltipInfo:(J=u==null?void 0:u.info)!=null&&J.content?(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:(Z=u==null?void 0:u.info)==null?void 0:Z.content}}):null}}),[N]);return(0,n.jsxs)(n.Fragment,{children:[t,(0,n.jsx)(a.ZP,{title:E,items:g,children:F.map((u,y)=>(0,n.jsx)(i,{tier:u,detail:M,onProductButtonClick:R,trackProductButtonClick:S,primary:y===0,cantInstallPlugin:z},y))})]})};_.propTypes={slug:k().string.isRequired,onProductButtonClick:k().func.isRequired,trackProductButtonClick:k().func.isRequired},_.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}};const H=_},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(f,m,e)=>{e.d(m,{Z:()=>s});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(c){const l=(0,o.s0)();return(0,a.useCallback)(()=>l(c),[l,c])}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(f,m,e)=>{e.d(m,{Z:()=>j});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(s),l=c()(o());l.push([f.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:transparent;border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),l.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const j=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(f,m,e)=>{e.d(m,{Z:()=>j});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(s),l=c()(o());l.push([f.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),l.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const j=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(f,m,e)=>{e.d(m,{Z:()=>j});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(s),l=c()(o());l.push([f.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),l.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const j=l}}]);})();
