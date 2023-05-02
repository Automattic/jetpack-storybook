"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(I,m,e)=>{e.d(m,{Z:()=>l});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.30.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(I,m,e)=>{var xe,ye,Pe,Ie,fe,Be,ve,Se,be,Ce,Te,De,Me,Ee,Le,Je,Ae,Oe,He,Ne,Ue,Ze,we,We;e.r(m),e.d(m,{JetpackAntiSpam:()=>U,JetpackBackup:()=>G,JetpackBoost:()=>Y,JetpackCRM:()=>$,JetpackScan:()=>q,JetpackSearch:()=>ee,JetpackVideoPress:()=>z,__namedExportsOrder:()=>et,_default:()=>S,default:()=>de});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),l=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),i=e("../components/components/admin-page/index.tsx"),h=e("../components/components/layout/container/index.tsx"),j=e("../components/components/layout/col/index.tsx"),w=e("../components/components/text/index.tsx"),k=e("../components/components/button/index.tsx"),W=e("../../../node_modules/.pnpm/@wordpress+element@5.9.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),D=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),f=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),d=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),_=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),H=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),B=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const V=e.p+"static/media/boost.a5413748.png",R=e.p+"static/media/crm.7e7684ae.png",b=e.p+"static/media/extras.26daf365.png",C=e.p+"static/media/search.f9756bd9.png";var M=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(M),L=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),J={};J.insert="head",J.singleton=!1;var Q=E()(L.Z,J);const x=L.Z.locals||{},K=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const N=D.__;function r(c){let{bundle:O,existingLicenseKeyUrl:re="admin.php?page=my-jetpack#/add-license",installsPlugin:tt=!1,slug:T,supportingInfo:st,preferProductName:nt=!1,children:at=null}=c;const{activate:Ve,detail:ot}=(0,d.i)(T),{isUpgradableByBundle:ue,tiers:Ke}=ot,{recordEvent:Z}=(0,n.Z)();(0,a.useEffect)(()=>{Z("jetpack_myjetpack_product_interstitial_view",{product:T})},[Z,T]);const Fe=(0,a.useCallback)(function(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;Z("jetpack_myjetpack_product_interstitial_add_link_click",{product:P!=null?P:T})},[Z,T]),rt=(0,a.useCallback)(()=>{Z("jetpack_myjetpack_product_interstitial_add_link_click",{product:O})},[Z,O]),ze=(0,f.Z)("/"),ce=(0,a.useCallback)((P,u,le)=>{(()=>u!=null&&u.isBundle?Promise.resolve():Ve())().finally(()=>{var Xe,Ge,Ye,$e,qe;if(u!=null&&u.isBundle){P==null||P();return}const Qe=u==null?void 0:u.postActivationUrl,lt=le?(Xe=u==null?void 0:u.hasRequiredTier)==null?void 0:Xe[le]:u==null?void 0:u.hasRequiredPlan;if(!(!(le?($e=(Ye=(Ge=u==null?void 0:u.pricingForUi)==null?void 0:Ge.tiers)==null?void 0:Ye[le])==null?void 0:$e.isFree:(qe=u==null?void 0:u.pricingForUi)==null?void 0:qe.isFree)&&!lt)){if(Qe){window.location.href=Qe;return}return ze()}P==null||P()})},[ze,Ve]),ct=(0,a.useCallback)(P=>{T&&Z("jetpack_myjetpack_product_interstitial_back_link_click",{product:T}),document.referrer.includes(window.location.host)&&(P.preventDefault(),history.back())},[Z,T]);return(0,t.jsx)(i.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(h.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(j.Z,{className:x["product-interstitial__header"],children:[(0,t.jsx)(_.Z,{onClick:ct}),re&&(0,t.jsx)(w.ZP,{variant:"body-small",children:(0,W.Z)(N("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(k.Z,{className:x["product-interstitial__license-activation-link"],href:re,variant:"link"})})})]}),(0,t.jsx)(j.Z,{children:Ke&&Ke.length?(0,t.jsx)(B.Z,{slug:T,clickHandler:ce,onProductButtonClick:ce,trackProductButtonClick:Fe}):(0,t.jsxs)(h.Z,{className:ue?null:x.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(j.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(H.Z,{slug:T,trackButtonClick:Fe,onClick:tt?ce:void 0,className:ue?x.container:null,supportingInfo:st,preferProductName:nt})}),(0,t.jsx)(j.Z,{sm:4,md:4,lg:5,className:x.imageContainer,children:O?(0,t.jsx)(H.Z,{slug:O,trackButtonClick:rt,onClick:ce,className:ue?x.container:null}):at})]})})]})})}r.displayName="ProductInterstitial";function v(){const c="anti-spam",{detail:O}=(0,d.i)(c),{isPluginActive:re}=O;return(0,t.jsx)(r,{slug:c,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:re?"admin.php?page=akismet-key-config":null,preferProductName:!0})}v.displayName="AntiSpamInterstitial";function p(){return(0,t.jsx)(r,{slug:"backup",installsPlugin:!0,bundle:"security"})}p.displayName="BackupInterstitial";function y(){return(0,t.jsx)(r,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:V,alt:"Boost"})})}y.displayName="BoostInterstitial";function A(){return(0,t.jsx)(r,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:R,alt:"CRM"})})}A.displayName="CRMInterstitial";function F(){return(0,t.jsx)(r,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:b,alt:"Extras"})})}F.displayName="ExtrasInterstitial";function te(){return(0,t.jsx)(r,{slug:"protect",installsPlugin:!0})}te.displayName="ProtectInterstitial";function se(){return(0,t.jsx)(r,{slug:"scan",installsPlugin:!0,bundle:"security"})}se.displayName="ScanInterstitial";function ne(){return(0,t.jsx)(r,{slug:"social",installsPlugin:!0})}ne.displayName="SocialInterstitial";function ae(){var O;const{detail:c}=(0,d.i)("search");return(0,t.jsx)(r,{slug:"search",installsPlugin:!0,supportingInfo:((O=c==null?void 0:c.pricingForUi)!=null&&O.trialAvailable?N("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+N("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:C,alt:"Search"})})}ae.displayName="SearchInterstitial";function oe(){return(0,t.jsx)(r,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:K,alt:"VideoPress"})})}oe.displayName="VideoPressInterstitial",r.__docgenInfo={description:`Product Interstitial component.

@param {object} props                         - Component props.
@param {string} props.slug                    - Product slug
@param {string} props.bundle                  - Bundle including this product
@param {object} props.children                - Product additional content
@param {string} props.existingLicenseKeyUrl 	 - URL to enter an existing license key (e.g. Akismet)
@param {boolean} props.installsPlugin         - Whether the interstitial button installs a plugin*
@param {React.ReactNode} props.supportingInfo - Complementary links or support/legal text
@param {boolean} props.preferProductName      - Use product name instead of title
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1}}},v.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},p.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},y.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},A.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},F.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},te.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},se.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},ne.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},ae.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},oe.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var ie=`/* eslint-disable react/react-in-jsx-scope */
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
`,me={_default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},JetpackBackup:{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},JetpackBoost:{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},JetpackCRM:{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},JetpackScan:{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},JetpackSearch:{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},JetpackVideoPress:{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}};const de={parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},"jetpack-backup":{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},"jetpack-boost":{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},"jetpack-crm":{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},"jetpack-scan":{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},"jetpack-search":{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},"jetpack-video-press":{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}}}},title:"Packages/My Jetpack/Product Interstitial",component:r},pe={},X=c=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(p,{...c})})})});X.displayName="DefaultBackupDetailCard";const S=X.bind({});S.parameters={},S.args=pe;const g=c=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(v,{...c})})})});g.displayName="AntiSpamTemplate";const U=g.bind({});U.parameters={mockData:(0,l.TN)("anti-spam")};const _e=c=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(p,{...c})})})});_e.displayName="BackupTemplate";const G=_e.bind({});G.parameters={mockData:(0,l.TN)("backup")};const ke=c=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(y,{...c})})})});ke.displayName="BoostTemplate";const Y=ke.bind({});Y.parameters={mockData:(0,l.TN)("boost")};const ge=c=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(A,{...c})})})});ge.displayName="CRMTemplate";const $=ge.bind({});$.parameters={mockData:(0,l.TN)("crm")};const he=c=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(se,{...c})})})});he.displayName="ScanTemplate";const q=he.bind({});q.parameters={};const je=c=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ae,{...c})})})});je.displayName="SearchTemplate";const ee=je.bind({});ee.parameters={mockData:(0,l.TN)("search")};const Re=c=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(oe,{...c})})})});Re.displayName="VideoPressTemplate";const z=Re.bind({});z.storyName="Jetpack VideoPress",z.parameters={mockData:(0,l.TN)("videopress")},S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Pe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Pe.source}}},U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Be=(fe=U.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}},G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(be=(Se=G.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}},Y.parameters={...Y.parameters,docs:{...(Ce=Y.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(De=(Te=Y.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}},$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Le=(Ee=$.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}},q.parameters={...q.parameters,docs:{...(Je=q.parameters)==null?void 0:Je.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Oe=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}},ee.parameters={...ee.parameters,docs:{...(He=ee.parameters)==null?void 0:He.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ue=(Ne=ee.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}},z.parameters={...z.parameters,docs:{...(Ze=z.parameters)==null?void 0:Ze.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(We=(we=z.parameters)==null?void 0:we.docs)==null?void 0:We.source}}};const et=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../components/components/notice/index.tsx":(I,m,e)=>{e.d(m,{Z:()=>V});var a=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/warning.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/info.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/check.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/icon/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/close.js"),h=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),j=e.n(h),w=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(k),D=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),n={};n.insert="head",n.singleton=!1;var f=W()(D.Z,n);const d=D.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const H=R=>{switch(R){case"error":return a.Z;case"warning":return a.Z;case"info":return o.Z;case"success":return s.Z;default:return a.Z}},B=R=>{let{level:b,title:C,children:M,actions:E,hideCloseButton:L,onClose:J}=R;const Q=j()(d.container,d[`is-${b}`]);return(0,_.jsxs)("div",{className:Q,children:[(0,_.jsx)("div",{className:d["icon-wrapper"],children:(0,_.jsx)(l.Z,{icon:H(b),className:d.icon})}),(0,_.jsxs)("div",{className:d["main-content"],children:[(0,_.jsx)("div",{className:d.title,children:C}),M,E&&E.length>0&&(0,_.jsx)("div",{className:d["action-bar"],children:E.map((x,K)=>(0,_.jsx)("div",{className:d.action,children:x},K))})]}),!L&&(0,_.jsx)("button",{"aria-label":"close",className:d["close-button"],onClick:J,children:(0,_.jsx)(l.Z,{icon:i.Z})})]})};B.displayName="Notice",B.defaultProps={level:"info",hideCloseButton:!1};const V=B},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(I,m,e)=>{e.d(m,{Z:()=>_});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(h),w=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),k={};k.insert="head",k.singleton=!1;var W=j()(w.Z,k);const D=w.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=a.__;function d(H){let{onClick:B}=H;return(0,n.jsxs)(i.rU,{to:"/",className:D.link,onClick:B,children:[(0,n.jsx)(o.Z,{icon:s.Z,className:D.icon}),f("Go back","jetpack-my-jetpack")]})}d.displayName="GoBackLink",d.defaultProps={onClick:()=>{}},d.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const _=d},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(I,m,e)=>{e.d(m,{Z:()=>H});var a=e("../components/components/pricing-table/index.tsx"),o=e("../components/components/product-price/index.tsx"),s=e("../components/components/button/index.tsx"),l=e("../components/components/notice/index.tsx"),i=e("../components/components/text/index.tsx"),h=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),j=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),w=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),k=e.n(w),W=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),D=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=j.__,d=B=>{var ie;let{cantInstallPlugin:V,onProductButtonClick:R,detail:b,tier:C,trackProductButtonClick:M}=B;const{siteSuffix:E,myJetpackUrl:L}=(ie=window==null?void 0:window.myJetpackInitialState)!=null?ie:{},{featuresByTier:J=[],pricingForUi:{tiers:Q},title:x}=b,{callToAction:K,currencyCode:t,fullPrice:N,introductoryOffer:r,isFree:v,wpcomProductSlug:p}=Q[C],{run:y,hasCheckoutStarted:A}=(0,h.Z)({from:"my-jetpack",productSlug:p,redirectUrl:L,siteSuffix:E}),F=(0,W.useCallback)(()=>{M(),R==null||R(y,b,C)},[M,R,y,b,C]),te=N?Math.ceil(N/12*100)/100:null,se=r!=null&&r.costPerInterval?Math.ceil(r.costPerInterval/12*100)/100:null,ne=(r==null?void 0:r.intervalUnit)==="month"&&(r==null?void 0:r.intervalCount)===1,ae=ne?(0,j.gB)(f("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),te):f("/month, paid yearly","jetpack-my-jetpack",0),oe=K||(v?f("Start for Free","jetpack-my-jetpack"):(0,j.gB)(f("Get %s","jetpack-my-jetpack"),x,0));return(0,n.jsxs)(a.oK,{primary:!v,children:[(0,n.jsxs)(a.NE,{children:[v?(0,n.jsx)(o.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,n.jsx)(o.Z,{price:te,offPrice:se,legend:ae,currency:t,hideDiscountLabel:ne,hidePriceFraction:!0}),(0,n.jsx)(s.Z,{fullWidth:!0,variant:v?"secondary":"primary",onClick:F,isLoading:A,disabled:A||V,children:oe})]}),J.map((me,de)=>{const{included:pe,description:X,struck_description:S,info:g}=me.tiers[C],U=S||X?(0,n.jsxs)(n.Fragment,{children:[S?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("del",{children:S})," "]}):null,X?(0,n.jsx)("strong",{children:X}):null]}):null;return(0,n.jsx)(a.kF,{isIncluded:pe,label:U,tooltipTitle:g==null?void 0:g.title,tooltipInfo:g!=null&&g.content?(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:g==null?void 0:g.content}}):null,tooltipClassName:g==null?void 0:g.class},de)})]})};d.displayName="ProductDetailTableColumn",d.propTypes={cantInstallPlugin:k().bool.isRequired,onProductButtonClick:k().func.isRequired,detail:k().object.isRequired,tier:k().string.isRequired,trackProductButtonClick:k().func.isRequired};const _=B=>{var v;let{slug:V,onProductButtonClick:R,trackProductButtonClick:b}=B;const{fileSystemWriteAccess:C}=(v=window==null?void 0:window.myJetpackInitialState)!=null?v:{},{detail:M}=(0,D.i)(V),{description:E,featuresByTier:L=[],pluginSlug:J,status:Q,tiers:x=[],title:K}=M,t=Q==="plugin_absent"&&C==="no",N=t&&(0,n.jsx)(l.Z,{level:"error",hideCloseButton:!0,title:(0,n.jsx)(i.ZP,{children:(0,j.gB)(f("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),K)}),actions:[(0,n.jsx)(s.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${J}`,isExternalLink:!0,children:f("Get plugin","jetpack-my-jetpack")})]}),r=(0,W.useMemo)(()=>L.map(p=>{var y,A,F;return{name:p==null?void 0:p.name,tooltipTitle:(y=p==null?void 0:p.info)==null?void 0:y.title,tooltipInfo:(A=p==null?void 0:p.info)!=null&&A.content?(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:(F=p==null?void 0:p.info)==null?void 0:F.content}}):null}}),[L]);return(0,n.jsxs)(n.Fragment,{children:[N,(0,n.jsx)(a.ZP,{title:E,items:r,children:x.map((p,y)=>(0,n.jsx)(d,{tier:p,detail:M,onProductButtonClick:R,trackProductButtonClick:b,primary:y===0,cantInstallPlugin:t},y))})]})};_.propTypes={slug:k().string.isRequired,onProductButtonClick:k().func.isRequired,trackProductButtonClick:k().func.isRequired},_.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}};const H=_},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(I,m,e)=>{e.d(m,{Z:()=>s});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(l){const i=(0,o.s0)();return(0,a.useCallback)(()=>i(l),[i,l])}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(I,m,e)=>{e.d(m,{Z:()=>h});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(s),i=l()(o());i.push([I.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:transparent;border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),i.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const h=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(I,m,e)=>{e.d(m,{Z:()=>h});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(s),i=l()(o());i.push([I.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),i.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const h=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(I,m,e)=>{e.d(m,{Z:()=>h});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(s),i=l()(o());i.push([I.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),i.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const h=i}}]);})();
