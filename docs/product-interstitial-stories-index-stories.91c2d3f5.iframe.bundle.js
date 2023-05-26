"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(I,_,e)=>{e.d(_,{Z:()=>l});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.30.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(I,_,e)=>{var Pe,Ie,fe,Be,ve,Se,be,Ce,Te,De,Me,Ee,Le,Je,Ae,Oe,He,Ne,Ue,Ze,we,We,Ve,Ke;e.r(_),e.d(_,{JetpackAntiSpam:()=>G,JetpackBackup:()=>Y,JetpackBoost:()=>$,JetpackCRM:()=>q,JetpackScan:()=>ee,JetpackSearch:()=>te,JetpackVideoPress:()=>V,__namedExportsOrder:()=>st,_default:()=>m,default:()=>ue});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),l=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),d=e("../components/components/admin-page/index.tsx"),h=e("../components/components/layout/container/index.tsx"),R=e("../components/components/layout/col/index.tsx"),w=e("../components/components/text/index.tsx"),g=e("../components/components/button/index.tsx"),W=e("../../../node_modules/.pnpm/@wordpress+element@5.9.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),C=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),f=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),p=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),k=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),O=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),B=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const T=e.p+"static/media/boost.a5413748.png",j=e.p+"static/media/crm.7e7684ae.png",v=e.p+"static/media/extras.26daf365.png",S=e.p+"static/media/jetpack-ai.d0095f84.png",D=e.p+"static/media/search.f9756bd9.png";var M=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),H=e.n(M),N=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),E={};E.insert="head",E.singleton=!1;var K=H()(N.Z,E);const x=N.Z.locals||{},F=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const U=C.__;function a(c){let{bundle:A,existingLicenseKeyUrl:ie="admin.php?page=my-jetpack#/add-license",installsPlugin:nt=!1,slug:b,supportingInfo:at,preferProductName:ot=!1,children:rt=null}=c;const{activate:Fe,detail:ct}=(0,p.i)(b),{isUpgradableByBundle:me,tiers:ze}=ct,{recordEvent:Z}=(0,n.Z)();(0,o.useEffect)(()=>{Z("jetpack_myjetpack_product_interstitial_view",{product:b})},[Z,b]);const Qe=(0,o.useCallback)(function(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;Z("jetpack_myjetpack_product_interstitial_add_link_click",{product:P!=null?P:b})},[Z,b]),lt=(0,o.useCallback)(()=>{Z("jetpack_myjetpack_product_interstitial_add_link_click",{product:A})},[Z,A]),Xe=(0,f.Z)("/"),de=(0,o.useCallback)((P,u,pe)=>{(()=>u!=null&&u.isBundle?Promise.resolve():Fe())().finally(()=>{var Ye,$e,qe,et,tt;if(u!=null&&u.isBundle){P==null||P();return}const Ge=u==null?void 0:u.postActivationUrl,dt=pe?(Ye=u==null?void 0:u.hasRequiredTier)==null?void 0:Ye[pe]:u==null?void 0:u.hasRequiredPlan;if(!(!(pe?(et=(qe=($e=u==null?void 0:u.pricingForUi)==null?void 0:$e.tiers)==null?void 0:qe[pe])==null?void 0:et.isFree:(tt=u==null?void 0:u.pricingForUi)==null?void 0:tt.isFree)&&!dt)){if(Ge){window.location.href=Ge;return}return Xe()}P==null||P()})},[Xe,Fe]),it=(0,o.useCallback)(P=>{b&&Z("jetpack_myjetpack_product_interstitial_back_link_click",{product:b}),document.referrer.includes(window.location.host)&&(P.preventDefault(),history.back())},[Z,b]);return(0,t.jsx)(d.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(h.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(R.Z,{className:x["product-interstitial__header"],children:[(0,t.jsx)(k.Z,{onClick:it}),ie&&(0,t.jsx)(w.ZP,{variant:"body-small",children:(0,W.Z)(U("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(g.Z,{className:x["product-interstitial__license-activation-link"],href:ie,variant:"link"})})})]}),(0,t.jsx)(R.Z,{children:ze&&ze.length?(0,t.jsx)(B.Z,{slug:b,clickHandler:de,onProductButtonClick:de,trackProductButtonClick:Qe}):(0,t.jsxs)(h.Z,{className:me?null:x.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(R.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(O.Z,{slug:b,trackButtonClick:Qe,onClick:nt?de:void 0,className:me?x.container:null,supportingInfo:at,preferProductName:ot})}),(0,t.jsx)(R.Z,{sm:4,md:4,lg:5,className:x.imageContainer,children:A?(0,t.jsx)(O.Z,{slug:A,trackButtonClick:lt,onClick:de,className:me?x.container:null}):rt})]})})]})})}a.displayName="ProductInterstitial";function i(){const c="anti-spam",{detail:A}=(0,p.i)(c),{isPluginActive:ie}=A;return(0,t.jsx)(a,{slug:c,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:ie?"admin.php?page=akismet-key-config":null,preferProductName:!0})}i.displayName="AntiSpamInterstitial";function y(){return(0,t.jsx)(a,{slug:"backup",installsPlugin:!0,bundle:"security"})}y.displayName="BackupInterstitial";function L(){return(0,t.jsx)(a,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:T,alt:"Boost"})})}L.displayName="BoostInterstitial";function J(){return(0,t.jsx)(a,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:j,alt:"CRM"})})}J.displayName="CRMInterstitial";function oe(){return(0,t.jsx)(a,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:v,alt:"Extras"})})}oe.displayName="ExtrasInterstitial";function se(){return(0,t.jsx)(a,{slug:"jetpack-ai",installsPlugin:!0,children:(0,t.jsx)("img",{src:S,alt:"Jetpack AI"})})}se.displayName="JetpackAIInterstitial";function re(){return(0,t.jsx)(a,{slug:"protect",installsPlugin:!0})}re.displayName="ProtectInterstitial";function z(){return(0,t.jsx)(a,{slug:"scan",installsPlugin:!0,bundle:"security"})}z.displayName="ScanInterstitial";function ce(){return(0,t.jsx)(a,{slug:"social",installsPlugin:!0})}ce.displayName="SocialInterstitial";function ne(){var A;const{detail:c}=(0,p.i)("search");return(0,t.jsx)(a,{slug:"search",installsPlugin:!0,supportingInfo:((A=c==null?void 0:c.pricingForUi)!=null&&A.trialAvailable?U("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+U("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:D,alt:"Search"})})}ne.displayName="SearchInterstitial";function Q(){return(0,t.jsx)(a,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:F,alt:"VideoPress"})})}Q.displayName="VideoPressInterstitial",a.__docgenInfo={description:`Product Interstitial component.

@param {object} props                         - Component props.
@param {string} props.slug                    - Product slug
@param {string} props.bundle                  - Bundle including this product
@param {object} props.children                - Product additional content
@param {string} props.existingLicenseKeyUrl 	 - URL to enter an existing license key (e.g. Akismet)
@param {boolean} props.installsPlugin         - Whether the interstitial button installs a plugin*
@param {React.ReactNode} props.supportingInfo - Complementary links or support/legal text
@param {boolean} props.preferProductName      - Use product name instead of title
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1}}},i.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},y.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},L.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},J.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},oe.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},se.__docgenInfo={description:`JetpackAIInterstitial component

@returns {object} JetpackAIInterstitial react component.`,methods:[],displayName:"JetpackAIInterstitial"},re.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},z.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},ce.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},ne.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},Q.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var _e=`/* eslint-disable react/react-in-jsx-scope */
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
`,ke={_default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},JetpackBackup:{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},JetpackBoost:{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},JetpackCRM:{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},JetpackScan:{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},JetpackSearch:{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},JetpackVideoPress:{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}};const ue={parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},"jetpack-backup":{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},"jetpack-boost":{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},"jetpack-crm":{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},"jetpack-scan":{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},"jetpack-search":{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},"jetpack-video-press":{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}}}},title:"Packages/My Jetpack/Product Interstitial",component:a},ae={},X=c=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(y,{...c})})})});X.displayName="DefaultBackupDetailCard";const m=X.bind({});m.parameters={},m.args=ae;const le=c=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(i,{...c})})})});le.displayName="AntiSpamTemplate";const G=le.bind({});G.parameters={mockData:(0,l.TN)("anti-spam")};const ge=c=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(y,{...c})})})});ge.displayName="BackupTemplate";const Y=ge.bind({});Y.parameters={mockData:(0,l.TN)("backup")};const he=c=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(L,{...c})})})});he.displayName="BoostTemplate";const $=he.bind({});$.parameters={mockData:(0,l.TN)("boost")};const je=c=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(J,{...c})})})});je.displayName="CRMTemplate";const q=je.bind({});q.parameters={mockData:(0,l.TN)("crm")};const Re=c=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(z,{...c})})})});Re.displayName="ScanTemplate";const ee=Re.bind({});ee.parameters={};const xe=c=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ne,{...c})})})});xe.displayName="SearchTemplate";const te=xe.bind({});te.parameters={mockData:(0,l.TN)("search")};const ye=c=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(Q,{...c})})})});ye.displayName="VideoPressTemplate";const V=ye.bind({});V.storyName="Jetpack VideoPress",V.parameters={mockData:(0,l.TN)("videopress")},m.parameters={...m.parameters,docs:{...(Pe=m.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(fe=(Ie=m.parameters)==null?void 0:Ie.docs)==null?void 0:fe.source}}},G.parameters={...G.parameters,docs:{...(Be=G.parameters)==null?void 0:Be.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Se=(ve=G.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}},Y.parameters={...Y.parameters,docs:{...(be=Y.parameters)==null?void 0:be.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Te=(Ce=Y.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}},$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ee=(Me=$.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}},q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ae=(Je=q.parameters)==null?void 0:Je.docs)==null?void 0:Ae.source}}},ee.parameters={...ee.parameters,docs:{...(Oe=ee.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ne=(He=ee.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}},te.parameters={...te.parameters,docs:{...(Ue=te.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(we=(Ze=te.parameters)==null?void 0:Ze.docs)==null?void 0:we.source}}},V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ke=(Ve=V.parameters)==null?void 0:Ve.docs)==null?void 0:Ke.source}}};const st=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../components/components/notice/index.tsx":(I,_,e)=>{e.d(_,{Z:()=>T});var o=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/warning.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/info.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/check.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/icon/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/close.js"),h=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),R=e.n(h),w=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(g),C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),n={};n.insert="head",n.singleton=!1;var f=W()(C.Z,n);const p=C.Z.locals||{};var k=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const O=j=>{switch(j){case"error":return o.Z;case"warning":return o.Z;case"info":return r.Z;case"success":return s.Z;default:return o.Z}},B=j=>{let{level:v,title:S,children:D,actions:M,hideCloseButton:H,onClose:N}=j;const E=R()(p.container,p[`is-${v}`]);return(0,k.jsxs)("div",{className:E,children:[(0,k.jsx)("div",{className:p["icon-wrapper"],children:(0,k.jsx)(l.Z,{icon:O(v),className:p.icon})}),(0,k.jsxs)("div",{className:p["main-content"],children:[(0,k.jsx)("div",{className:p.title,children:S}),D,M&&M.length>0&&(0,k.jsx)("div",{className:p["action-bar"],children:M.map((K,x)=>(0,k.jsx)("div",{className:p.action,children:K},x))})]}),!H&&(0,k.jsx)("button",{"aria-label":"close",className:p["close-button"],onClick:N,children:(0,k.jsx)(l.Z,{icon:d.Z})})]})};B.displayName="Notice",B.defaultProps={level:"info",hideCloseButton:!1};const T=B},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(I,_,e)=>{e.d(_,{Z:()=>k});var o=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(h),w=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),g={};g.insert="head",g.singleton=!1;var W=R()(w.Z,g);const C=w.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=o.__;function p(O){let{onClick:B,reload:T}=O;const j=T?"/?reload=true":"/";return(0,n.jsxs)(d.rU,{to:j,className:C.link,onClick:B,children:[(0,n.jsx)(r.Z,{icon:s.Z,className:C.icon}),f("Go back","jetpack-my-jetpack")]})}p.displayName="GoBackLink",p.defaultProps={onClick:()=>{}},p.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const k=p},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(I,_,e)=>{e.d(_,{Z:()=>O});var o=e("../components/components/pricing-table/index.tsx"),r=e("../components/components/product-price/index.tsx"),s=e("../components/components/button/index.tsx"),l=e("../components/components/notice/index.tsx"),d=e("../components/components/text/index.tsx"),h=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),R=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),w=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),g=e.n(w),W=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=R.__,p=B=>{var Q;let{cantInstallPlugin:T,onProductButtonClick:j,detail:v,tier:S,trackProductButtonClick:D}=B;const{siteSuffix:M,myJetpackUrl:H}=(Q=window==null?void 0:window.myJetpackInitialState)!=null?Q:{},{featuresByTier:N=[],pricingForUi:{tiers:E},title:K,postActivationUrl:x}=v,{callToAction:F,currencyCode:t,fullPrice:U,introductoryOffer:a,isFree:i,wpcomProductSlug:y}=E[S],{run:L,hasCheckoutStarted:J}=(0,h.Z)({from:"my-jetpack",productSlug:y,redirectUrl:x||H,siteSuffix:M}),oe=(0,W.useCallback)(()=>{D(),j==null||j(L,v,S)},[D,j,L,v,S]),se=U?Math.ceil(U/12*100)/100:null,re=a!=null&&a.costPerInterval?Math.ceil(a.costPerInterval/12*100)/100:null,z=(a==null?void 0:a.intervalUnit)==="month"&&(a==null?void 0:a.intervalCount)===1,ce=z?(0,R.gB)(f("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),se):f("/month, paid yearly","jetpack-my-jetpack",0),ne=F||(i?f("Start for Free","jetpack-my-jetpack"):(0,R.gB)(f("Get %s","jetpack-my-jetpack"),K,0));return(0,n.jsxs)(o.oK,{primary:!i,children:[(0,n.jsxs)(o.NE,{children:[i?(0,n.jsx)(r.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,n.jsx)(r.Z,{price:se,offPrice:re,legend:ce,currency:t,hideDiscountLabel:z,hidePriceFraction:!0}),(0,n.jsx)(s.Z,{fullWidth:!0,variant:i?"secondary":"primary",onClick:oe,isLoading:J,disabled:J||T,children:ne})]}),N.map((_e,ke)=>{const{included:ue,description:ae,struck_description:X,info:m}=_e.tiers[S],le=X||ae?(0,n.jsxs)(n.Fragment,{children:[X?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("del",{children:X})," "]}):null,ae?(0,n.jsx)("strong",{children:ae}):null]}):null;return(0,n.jsx)(o.kF,{isIncluded:ue,label:le,tooltipTitle:m==null?void 0:m.title,tooltipInfo:m!=null&&m.content?(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:m==null?void 0:m.content}}):null,tooltipClassName:m==null?void 0:m.class},ke)})]})};p.displayName="ProductDetailTableColumn",p.propTypes={cantInstallPlugin:g().bool.isRequired,onProductButtonClick:g().func.isRequired,detail:g().object.isRequired,tier:g().string.isRequired,trackProductButtonClick:g().func.isRequired};const k=B=>{var a;let{slug:T,onProductButtonClick:j,trackProductButtonClick:v}=B;const{fileSystemWriteAccess:S}=(a=window==null?void 0:window.myJetpackInitialState)!=null?a:{},{detail:D}=(0,C.i)(T),{description:M,featuresByTier:H=[],pluginSlug:N,status:E,tiers:K=[],title:x}=D,F=E==="plugin_absent"&&S==="no",t=F&&(0,n.jsx)(l.Z,{level:"error",hideCloseButton:!0,title:(0,n.jsx)(d.ZP,{children:(0,R.gB)(f("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),x)}),actions:[(0,n.jsx)(s.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${N}`,isExternalLink:!0,children:f("Get plugin","jetpack-my-jetpack")})]}),U=(0,W.useMemo)(()=>H.map(i=>{var y,L,J;return{name:i==null?void 0:i.name,tooltipTitle:(y=i==null?void 0:i.info)==null?void 0:y.title,tooltipInfo:(L=i==null?void 0:i.info)!=null&&L.content?(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:(J=i==null?void 0:i.info)==null?void 0:J.content}}):null}}),[H]);return(0,n.jsxs)(n.Fragment,{children:[t,(0,n.jsx)(o.ZP,{title:M,items:U,children:K.map((i,y)=>(0,n.jsx)(p,{tier:i,detail:D,onProductButtonClick:j,trackProductButtonClick:v,primary:y===0,cantInstallPlugin:F},y))})]})};k.propTypes={slug:g().string.isRequired,onProductButtonClick:g().func.isRequired,trackProductButtonClick:g().func.isRequired},k.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}};const O=k},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(I,_,e)=>{e.d(_,{Z:()=>s});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(l){const d=(0,r.s0)();return(0,o.useCallback)(()=>d(l),[d,l])}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(I,_,e)=>{e.d(_,{Z:()=>h});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(s),d=l()(r());d.push([I.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:transparent;border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),d.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const h=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(I,_,e)=>{e.d(_,{Z:()=>h});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(s),d=l()(r());d.push([I.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),d.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const h=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(I,_,e)=>{e.d(_,{Z:()=>h});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(s),d=l()(r());d.push([I.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),d.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const h=d}}]);})();
