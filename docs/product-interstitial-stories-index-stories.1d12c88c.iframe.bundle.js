"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(g,i,e)=>{e.d(i,{Z:()=>r});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(g,i,e)=>{var ce,le,ie,de,pe,ue,me,_e,ke,ge,he,Re,je,ye,xe,fe,Ie,Se,Be,Pe,ve,be,Je,Ce;e.r(i),e.d(i,{JetpackAntiSpam:()=>f,JetpackBackup:()=>I,JetpackBoost:()=>S,JetpackCRM:()=>B,JetpackScan:()=>P,JetpackSearch:()=>v,JetpackVideoPress:()=>R,__namedExportsOrder:()=>Fe,_default:()=>h,default:()=>Ze});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),r=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),c=e("../components/components/admin-page/index.tsx"),_=e("../components/components/layout/container/index.tsx"),j=e("../components/components/layout/col/index.tsx"),C=e("../components/components/text/index.tsx"),b=e("../components/components/button/index.tsx"),Y=e("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+element@5.7.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),D=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),A=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),y=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),J=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),L=e("../../packages/my-jetpack/_inc/state/store.js"),E=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),G=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx");const Le=e.p+"static/media/boost.a5413748.png",Ee=e.p+"static/media/crm.7e7684ae.png",Ne=e.p+"static/media/extras.26daf365.png",Ve=e.p+"static/media/search.f9756bd9.png";var Oe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Ue=e.n(Oe),z=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),N={};N.insert="head",N.singleton=!1;var st=Ue()(z.Z,N);const x=z.Z.locals||{},we=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const V=D.__;function l(a){let{bundle:d,existingLicenseKeyUrl:H="admin.php?page=my-jetpack#/add-license",installsPlugin:Ke=!1,slug:u,supportingInfo:Ye,preferProductName:Ge=!1,children:ze=null}=a;const{activate:Te,detail:Xe}=(0,J.i)(u),{isUpgradableByBundle:K}=Xe,{recordEvent:k}=(0,A.Z)();(0,o.useEffect)(()=>{k("jetpack_myjetpack_product_interstitial_view",{product:u})},[k,u]);const Qe=(0,o.useCallback)(function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;k("jetpack_myjetpack_product_interstitial_add_link_click",{product:p!=null?p:u})},[k,u]),$e=(0,o.useCallback)(()=>{k("jetpack_myjetpack_product_interstitial_add_link_click",{product:d})},[k,d]),De=(0,y.Z)("/"),Me=(0,o.useCallback)(p=>{(()=>d?Promise.resolve():Te())().finally(()=>{var Ae;const m=(0,Y.Ys)(L.t).getProduct(u);if(d){p==null||p();return}const He=m==null?void 0:m.postActivationUrl,et=m==null?void 0:m.hasRequiredPlan,tt=!((Ae=m==null?void 0:m.pricingForUi)==null?void 0:Ae.isFree)&&!et;if(He){window.location.href=He;return}if(!tt)return De();p==null||p()})},[De,Te,d,u]),qe=(0,o.useCallback)(p=>{u&&k("jetpack_myjetpack_product_interstitial_back_link_click",{product:u}),document.referrer.includes(window.location.host)&&(p.preventDefault(),history.back())},[k,u]);return(0,t.jsx)(c.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(_.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(j.Z,{className:x["product-interstitial__header"],children:[(0,t.jsx)(E.Z,{onClick:qe}),H&&(0,t.jsx)(C.ZP,{variant:"body-small",children:(0,T.Z)(V("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(b.Z,{className:x["product-interstitial__license-activation-link"],href:H,variant:"link"})})})]}),(0,t.jsx)(j.Z,{children:(0,t.jsxs)(_.Z,{className:K?null:x.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(j.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(G.Z,{slug:u,trackButtonClick:Qe,onClick:Ke?Me:void 0,className:K?x.container:null,supportingInfo:Ye,preferProductName:Ge})}),(0,t.jsx)(j.Z,{sm:4,md:4,lg:5,className:x.imageContainer,children:d?(0,t.jsx)(G.Z,{slug:d,trackButtonClick:$e,onClick:Me,className:K?x.container:null}):ze})]})})]})})}l.displayName="ProductInterstitial";function O(){const a="anti-spam",{detail:d}=(0,J.i)(a),{isPluginActive:H}=d;return(0,t.jsx)(l,{slug:a,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:H?"admin.php?page=akismet-key-config":null,preferProductName:!0})}O.displayName="AntiSpamInterstitial";function M(){return(0,t.jsx)(l,{slug:"backup",installsPlugin:!0,bundle:"security"})}M.displayName="BackupInterstitial";function U(){return(0,t.jsx)(l,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:Le,alt:"Boost"})})}U.displayName="BoostInterstitial";function w(){return(0,t.jsx)(l,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:Ee,alt:"CRM"})})}w.displayName="CRMInterstitial";function X(){return(0,t.jsx)(l,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:Ne,alt:"Extras"})})}X.displayName="ExtrasInterstitial";function Q(){return(0,t.jsx)(l,{slug:"protect",installsPlugin:!0,bundle:"security"})}Q.displayName="ProtectInterstitial";function Z(){return(0,t.jsx)(l,{slug:"scan",installsPlugin:!0,bundle:"security"})}Z.displayName="ScanInterstitial";function $(){return(0,t.jsx)(l,{slug:"social",installsPlugin:!0})}$.displayName="SocialInterstitial";function W(){var d;const{detail:a}=(0,J.i)("search");return(0,t.jsx)(l,{slug:"search",installsPlugin:!0,supportingInfo:((d=a==null?void 0:a.pricingForUi)!=null&&d.trialAvailable?V("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+V("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:Ve,alt:"Search"})})}W.displayName="SearchInterstitial";function F(){return(0,t.jsx)(l,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:we,alt:"VideoPress"})})}F.displayName="VideoPressInterstitial",l.__docgenInfo={description:`Product Interstitial component.

@param {object} props                         - Component props.
@param {string} props.slug                    - Product slug
@param {string} props.bundle                  - Bundle including this product
@param {object} props.children                - Product additional content
@param {string} props.existingLicenseKeyUrl 	 - URL to enter an existing license key (e.g. Akismet)
@param {boolean} props.installsPlugin         - Whether the interstitial button installs a plugin*
@param {React.ReactNode} props.supportingInfo - Complementary links or support/legal text
@param {boolean} props.preferProductName      - Use product name instead of title
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1}}},O.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},M.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},U.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},w.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},X.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},Q.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},Z.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},$.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},W.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},F.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var at=`/* eslint-disable react/react-in-jsx-scope */
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
`,nt={_default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},JetpackBackup:{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},JetpackBoost:{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},JetpackCRM:{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},JetpackScan:{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},JetpackSearch:{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},JetpackVideoPress:{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}};const Ze={parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},"jetpack-backup":{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},"jetpack-boost":{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},"jetpack-crm":{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},"jetpack-scan":{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},"jetpack-search":{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},"jetpack-video-press":{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}}}},title:"Packages/My Jetpack/Product Interstitial",component:l},We={},q=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(M,{...a})})})});q.displayName="DefaultBackupDetailCard";const h=q.bind({});h.parameters={},h.args=We;const ee=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(O,{...a})})})});ee.displayName="AntiSpamTemplate";const f=ee.bind({});f.parameters={mockData:(0,r.TN)("anti-spam")};const te=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(M,{...a})})})});te.displayName="BackupTemplate";const I=te.bind({});I.parameters={mockData:(0,r.TN)("backup")};const se=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(U,{...a})})})});se.displayName="BoostTemplate";const S=se.bind({});S.parameters={mockData:(0,r.TN)("boost")};const ae=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(w,{...a})})})});ae.displayName="CRMTemplate";const B=ae.bind({});B.parameters={mockData:(0,r.TN)("crm")};const ne=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(Z,{...a})})})});ne.displayName="ScanTemplate";const P=ne.bind({});P.parameters={};const oe=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(W,{...a})})})});oe.displayName="SearchTemplate";const v=oe.bind({});v.parameters={mockData:(0,r.TN)("search")};const re=a=>(0,t.jsx)(n.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(F,{...a})})})});re.displayName="VideoPressTemplate";const R=re.bind({});R.storyName="Jetpack VideoPress",R.parameters={mockData:(0,r.TN)("videopress")},h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ie=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}},f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ue=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}},I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ke=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}},S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Re=(he=S.parameters)==null?void 0:he.docs)==null?void 0:Re.source}}},B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(xe=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}},P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Se=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}},v.parameters={...v.parameters,docs:{...(Be=v.parameters)==null?void 0:Be.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ve=(Pe=v.parameters)==null?void 0:Pe.docs)==null?void 0:ve.source}}},R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ce=(Je=R.parameters)==null?void 0:Je.docs)==null?void 0:Ce.source}}};const Fe=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(g,i,e)=>{e.d(i,{Z:()=>J});var o=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(_),C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),b={};b.insert="head",b.singleton=!1;var Y=j()(C.Z,b);const T=C.Z.locals||{};var D=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const A=o.__;function y(L){let{onClick:E}=L;return(0,D.jsxs)(c.rU,{to:"/",className:T.link,onClick:E,children:[(0,D.jsx)(n.Z,{icon:s.Z,className:T.icon}),A("Go back","jetpack-my-jetpack")]})}y.displayName="GoBackLink",y.defaultProps={onClick:()=>{}},y.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const J=y},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(g,i,e)=>{e.d(i,{Z:()=>s});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(r){const c=(0,n.s0)();return(0,o.useCallback)(()=>c(r),[c,r])}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(g,i,e)=>{e.d(i,{Z:()=>_});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),c=r()(n());c.push([g.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),c.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const _=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(g,i,e)=>{e.d(i,{Z:()=>_});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),c=r()(n());c.push([g.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),c.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const _=c}}]);})();
