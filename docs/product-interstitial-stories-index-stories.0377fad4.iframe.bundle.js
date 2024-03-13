"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(f,p,e)=>{var Le,Oe,Ne,Ue,Je,Ze,He,We,Ke,we,Fe,Ve,ze,Qe,Ye,Ge,Xe,$e,qe,et,tt,st,nt,at;e.r(p),e.d(p,{JetpackAntiSpam:()=>$,JetpackBackup:()=>q,JetpackBoost:()=>ee,JetpackCRM:()=>te,JetpackScan:()=>se,JetpackSearch:()=>ne,JetpackVideoPress:()=>w,__namedExportsOrder:()=>xt,_default:()=>K,default:()=>x});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),l=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),i=e("../components/components/admin-page/index.tsx"),m=e("../components/components/layout/container/index.tsx"),h=e("../components/components/layout/col/index.tsx"),I=e("../components/components/text/index.tsx"),u=e("../components/components/button/index.tsx"),R=e("../../../node_modules/.pnpm/@wordpress+element@5.30.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),P=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),j=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),V=e.n(j),s=e("../../packages/my-jetpack/_inc/constants.ts"),_=e("../../packages/my-jetpack/_inc/data/products/use-activate.ts"),B=e("../../packages/my-jetpack/_inc/data/products/use-product.ts"),S=e("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts"),N=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.ts");function C({slug:r}){const{recordEvent:D}=(0,N.Z)();return{onClickGoBack:(0,a.useCallback)(y=>{r&&D("jetpack_myjetpack_product_interstitial_back_link_click",{product:r}),document.referrer.includes(window.location.host)&&(y.preventDefault(),history.back())},[D,r])}}var T=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.ts"),A=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),b=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),E=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const L=e.p+"static/media/boost.a5413748.png",J=e.p+"static/media/crm.7e7684ae.png",O=e.p+"static/media/extras.26daf365.png",Z=e.p+"static/media/search.f9756bd9.png",re=e.p+"static/media/social.e3fb80b2.png",ce=e.p+"static/media/stats.98023808.png";var H=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=e.n(H),Q=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),U={};U.insert="head",U.singleton=!1;var d=z()(Q.Z,U);const k=Q.Z.locals||{},Y=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const M=P.__;function g({bundle:r,existingLicenseKeyUrl:D="admin.php?page=my-jetpack#/add-license",installsPlugin:ye=!1,slug:y,supportingInfo:ft,preferProductName:Rt=!1,children:Pt=null,imageContainerClassName:It="",ctaButtonLabel:vt=null,hideTOS:Bt=!1,quantity:ot=null,directCheckout:rt=!1,highlightLastFeature:ct=!1}){const{detail:St}=(0,B.Z)(y),{activate:lt,isPending:Ie}=(0,_.Z)(y),{isUpgradableByBundle:ve,tiers:it,pricingForUi:ae}=St,{recordEvent:oe}=(0,N.Z)(),{onClickGoBack:bt}=C({slug:y}),{myJetpackCheckoutUri:Be=""}=(0,S.$9)();(0,a.useEffect)(()=>{oe("jetpack_myjetpack_product_interstitial_view",{product:y})},[oe,y]);const xe=(0,a.useCallback)((v=!1)=>{var o,F;return v?"":y==="crm"?"jetpack-crm":(F=(o=ae==null?void 0:ae.tiers)==null?void 0:o.upgraded)!=null&&F.wpcomProductSlug?ae.tiers.upgraded.wpcomProductSlug:ae.wpcomProductSlug},[y,ae]),dt=(0,a.useCallback)((v=!1,o=null)=>{oe("jetpack_myjetpack_product_interstitial_add_link_click",{product:o!=null?o:y,productSlug:xe(v)})},[oe,y,xe]),Ct=(0,a.useCallback)((v=!1)=>{oe("jetpack_myjetpack_product_interstitial_add_link_click",{product:r,productSlug:xe(v)})},[oe,r,xe]),pt=(0,T.Z)(s.xB.Home),fe=(0,a.useCallback)((v,o,F)=>{let ut=o!=null&&o.postCheckoutUrl?o==null?void 0:o.postCheckoutUrl:Be;if(o!=null&&o.isBundle||rt){v==null||v();return}lt({productId:y},{onSettled:({productId:Re})=>{var kt,ht,gt,jt,yt;ut=Re!=null&&Re.post_checkout_url?Re.post_checkout_url:Be;const mt=o==null?void 0:o.postActivationUrl,_t=F?(kt=o==null?void 0:o.hasRequiredTier)==null?void 0:kt[F]:o==null?void 0:o.hasRequiredPlan,Tt=!(F?(jt=(gt=(ht=o==null?void 0:o.pricingForUi)==null?void 0:ht.tiers)==null?void 0:gt[F])==null?void 0:jt.isFree:(yt=o==null?void 0:o.pricingForUi)==null?void 0:yt.isFree)&&!_t;if(o.pluginSlug==="zero-bs-crm"&&!_t){window.location.href="https://jetpackcrm.com/pricing/";return}if(!Tt){if(mt){window.location.href=mt;return}return pt()}v==null||v(null,ut)}})},[rt,lt,pt,y,Be]);return(0,t.jsx)(i.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(m.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(h.Z,{className:k["product-interstitial__header"],children:[(0,t.jsx)(A.Z,{onClick:bt}),D&&(0,t.jsx)(I.ZP,{variant:"body-small",children:(0,R.Z)(M("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(u.Z,{className:k["product-interstitial__license-activation-link"],href:D,variant:"link"})})})]}),(0,t.jsx)(h.Z,{children:it&&it.length?(0,t.jsx)(E.Z,{slug:y,clickHandler:fe,onProductButtonClick:fe,trackProductButtonClick:dt,isFetching:Ie}):(0,t.jsxs)(m.Z,{className:ve?null:k.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(h.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(b.Z,{slug:y,trackButtonClick:dt,onClick:ye?fe:void 0,className:ve?k.container:null,supportingInfo:ft,preferProductName:Rt,ctaButtonLabel:vt,hideTOS:Bt,quantity:ot,highlightLastFeature:ct,isFetching:Ie})}),(0,t.jsx)(h.Z,{sm:4,md:4,lg:5,className:V()(k.imageContainer,It),children:r?(0,t.jsx)(b.Z,{slug:r,trackButtonClick:Ct,onClick:fe,className:ve?k.container:null,quantity:ot,highlightLastFeature:ct,isFetching:Ie}):Pt})]})})]})})}g.displayName="ProductInterstitial";function le(){const r="anti-spam",{detail:D}=(0,B.Z)(r),{isPluginActive:ye}=D;return(0,t.jsx)(g,{slug:r,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:ye?"admin.php?page=akismet-key-config":null,preferProductName:!0})}le.displayName="AntiSpamInterstitial";function W(){return(0,t.jsx)(g,{slug:"backup",installsPlugin:!0,bundle:"security"})}W.displayName="BackupInterstitial";function G(){return(0,t.jsx)(g,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:L,alt:"Boost"})})}G.displayName="BoostInterstitial";function me(){return(0,t.jsx)(g,{slug:"creator",installsPlugin:!0})}me.displayName="CreatorInterstitial";function X(){return(0,t.jsx)(g,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:J,alt:"CRM"})})}X.displayName="CRMInterstitial";function _e(){return(0,t.jsx)(g,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:O,alt:"Extras"})})}_e.displayName="ExtrasInterstitial";function ie(){return(0,t.jsx)(g,{slug:"protect",installsPlugin:!0})}ie.displayName="ProtectInterstitial";function de(){return(0,t.jsx)(g,{slug:"scan",installsPlugin:!0,bundle:"security"})}de.displayName="ScanInterstitial";function ke(){return(0,t.jsx)(g,{slug:"social",installsPlugin:!0,children:(0,t.jsx)("img",{src:re,alt:M("Image displaying logos of social media platforms supported by Jetpack Social.","jetpack-my-jetpack")})})}ke.displayName="SocialInterstitial";function pe(){var D;const{detail:r}=(0,B.Z)("search");return(0,t.jsx)(g,{slug:"search",installsPlugin:!0,supportingInfo:((D=r==null?void 0:r.pricingForUi)!=null&&D.trialAvailable?M("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+M("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:Z,alt:"Search"})})}pe.displayName="SearchInterstitial";function he(){return(0,t.jsx)(g,{slug:"stats",directCheckout:!0,installsPlugin:!0,ctaButtonLabel:M("Get Stats","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:ce,alt:M("Illustration showing the Stats feature, highlighting important statistics for your site.","jetpack-my-jetpack")})})}he.displayName="StatsInterstitial";function ue(){return(0,t.jsx)(g,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:Y,alt:"VideoPress"})})}ue.displayName="VideoPressInterstitial",g.__docgenInfo={description:`Product Interstitial component.

@param {object} props                         - Component props.
@param {string} props.slug                    - Product slug
@param {string} props.bundle                  - Bundle including this product
@param {object} props.children                - Product additional content
@param {string} props.existingLicenseKeyUrl 	 - URL to enter an existing license key (e.g. Akismet)
@param {boolean} props.installsPlugin         - Whether the interstitial button installs a plugin*
@param {React.ReactNode} props.supportingInfo - Complementary links or support/legal text
@param {boolean} props.preferProductName      - Use product name instead of title
@param {string} props.imageContainerClassName - Append a class to the image container
@param {string} [props.ctaButtonLabel]        - The label for the Call To Action button
@param {boolean} [props.hideTOS]              - Whether to hide the Terms of Service text
@param {number} [props.quantity]              - The quantity of the product to purchase
@param {number} [props.directCheckout]        - Whether to go straight to the checkout page, e.g. for products with usage tiers
@param {boolean} [props.highlightLastFeature] - Whether to highlight the last feature in the list of features
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1},highlightLastFeature:{defaultValue:{value:"false",computed:!1},required:!1}}},le.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},W.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},G.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},me.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},X.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},_e.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},ie.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},de.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},ke.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},pe.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},he.__docgenInfo={description:`StatsInterstitial component

@returns {object} StatsInterstitial react component.`,methods:[],displayName:"StatsInterstitial"},ue.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var ge=`/* eslint-disable react/react-in-jsx-scope */
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
`,je={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const x={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:g},Pe={},Se=r=>(0,t.jsx)(c.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(W,{...r})})})});Se.displayName="DefaultBackupDetailCard";const K=Se.bind({});K.parameters={},K.args=Pe;const be=r=>(0,t.jsx)(c.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(le,{...r})})})});be.displayName="AntiSpamTemplate";const $=be.bind({});$.parameters={mockData:(0,l.TN)("anti-spam")};const Ce=r=>(0,t.jsx)(c.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(W,{...r})})})});Ce.displayName="BackupTemplate";const q=Ce.bind({});q.parameters={mockData:(0,l.TN)("backup")};const Te=r=>(0,t.jsx)(c.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(G,{...r})})})});Te.displayName="BoostTemplate";const ee=Te.bind({});ee.parameters={mockData:(0,l.TN)("boost")};const Ee=r=>(0,t.jsx)(c.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(X,{...r})})})});Ee.displayName="CRMTemplate";const te=Ee.bind({});te.parameters={mockData:(0,l.TN)("crm")};const Me=r=>(0,t.jsx)(c.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(de,{...r})})})});Me.displayName="ScanTemplate";const se=Me.bind({});se.parameters={};const De=r=>(0,t.jsx)(c.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(pe,{...r})})})});De.displayName="SearchTemplate";const ne=De.bind({});ne.parameters={mockData:(0,l.TN)("search")};const Ae=r=>(0,t.jsx)(c.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(ue,{...r})})})});Ae.displayName="VideoPressTemplate";const w=Ae.bind({});w.storyName="Jetpack VideoPress",w.parameters={mockData:(0,l.TN)("videopress")},K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ne=(Oe=K.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}},$.parameters={...$.parameters,docs:{...(Ue=$.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ze=(Je=$.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}},q.parameters={...q.parameters,docs:{...(He=q.parameters)==null?void 0:He.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ke=(We=q.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}},ee.parameters={...ee.parameters,docs:{...(we=ee.parameters)==null?void 0:we.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ve=(Fe=ee.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}},te.parameters={...te.parameters,docs:{...(ze=te.parameters)==null?void 0:ze.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ye=(Qe=te.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}},se.parameters={...se.parameters,docs:{...(Ge=se.parameters)==null?void 0:Ge.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...($e=(Xe=se.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}},ne.parameters={...ne.parameters,docs:{...(qe=ne.parameters)==null?void 0:qe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(tt=(et=ne.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}},w.parameters={...w.parameters,docs:{...(st=w.parameters)==null?void 0:st.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(at=(nt=w.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};const xt=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(f,p,e)=>{e.d(p,{Z:()=>_});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(m),I=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),u={};u.insert="head",u.singleton=!1;var R=h()(I.Z,u);const P=I.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const V=a.__;function s({onClick:B,reload:S}){const N=S?"/?reload=true":"/";return(0,j.jsxs)(i.rU,{to:N,className:P.link,onClick:B,children:[(0,j.jsx)(c.Z,{icon:n.Z,className:P.icon}),V("Go back","jetpack-my-jetpack")]})}s.displayName="GoBackLink",s.defaultProps={onClick:()=>{}};const _=s;s.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(f,p,e)=>{e.d(p,{Z:()=>N});var a=e("../components/components/pricing-table/index.tsx"),c=e("../components/components/product-price/index.tsx"),n=e("../components/components/button/index.tsx"),l=e("../components/components/notice/index.tsx"),i=e("../components/components/text/index.tsx"),m=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),I=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),u=e.n(I),R=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=e("../../packages/my-jetpack/_inc/data/products/use-product.ts"),j=e("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts"),V=e("../../packages/my-jetpack/_inc/hooks/use-redirect-to-referrer/index.ts"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=h.__,B=({cantInstallPlugin:C,onProductButtonClick:T,detail:A,isFetching:b,tier:E,trackProductButtonClick:L})=>{const{siteSuffix:J="",myJetpackCheckoutUri:O=""}=(0,j.$9)(),{featuresByTier:Z=[],pricingForUi:{tiers:re},title:ce,postCheckoutUrl:H}=A,{callToAction:z,currencyCode:Q,fullPrice:U,introductoryOffer:d,isFree:k,wpcomProductSlug:Y,quantity:t=null}=re[E],M=(0,V.a)(),le=(0,R.useCallback)(()=>H||M||O,[H,M,O])(),{run:W,hasCheckoutStarted:G}=(0,m.Z)({from:"my-jetpack",productSlug:Y,redirectUrl:le,connectAfterCheckout:!0,siteSuffix:J,useBlogIdSuffix:!0,quantity:t}),me=(0,R.useCallback)(()=>{L(k),T==null||T(W,A,E)},[L,T,W,A,E,k]),X=U?Math.round(U/12*100)/100:null,_e=d!=null&&d.costPerInterval?Math.round(d.costPerInterval/12*100)/100:null,ie=(d==null?void 0:d.intervalUnit)==="month"&&(d==null?void 0:d.intervalCount)===1,de=ie?(0,h.gB)(_("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),X):_("/month, paid yearly","jetpack-my-jetpack",0),ke=z||(k?_("Start for Free","jetpack-my-jetpack"):(0,h.gB)(_("Get %s","jetpack-my-jetpack"),ce,0));return(0,s.jsxs)(a.oK,{primary:!k,children:[(0,s.jsxs)(a.NE,{children:[k?(0,s.jsx)(c.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,s.jsx)(c.Z,{price:X,offPrice:_e,legend:de,currency:Q,hideDiscountLabel:ie,hidePriceFraction:!0}),(0,s.jsx)(n.Z,{fullWidth:!0,variant:k?"secondary":"primary",onClick:me,isLoading:G||b,disabled:G||C||b,children:ke})]}),Z.map((pe,he)=>{const{included:ue,description:ge,struck_description:je,info:x}=pe.tiers[E],Pe=je||ge?(0,s.jsxs)(s.Fragment,{children:[je?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("del",{children:je})," "]}):null,ge?(0,s.jsx)("strong",{children:ge}):null]}):null;return(0,s.jsx)(a.kF,{isIncluded:ue,label:Pe,tooltipTitle:x==null?void 0:x.title,tooltipInfo:x!=null&&x.content?(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:x==null?void 0:x.content}}):null,tooltipClassName:x==null?void 0:x.class},he)})]})};B.displayName="ProductDetailTableColumn",B.propTypes={cantInstallPlugin:u().bool.isRequired,onProductButtonClick:u().func.isRequired,detail:u().object.isRequired,tier:u().string.isRequired,trackProductButtonClick:u().func.isRequired};const S=({slug:C,onProductButtonClick:T,trackProductButtonClick:A,isFetching:b})=>{const{fileSystemWriteAccess:E="no"}=(0,j.$9)(),{detail:L}=(0,P.Z)(C),{description:J,featuresByTier:O=[],pluginSlug:Z,status:re,tiers:ce=[],title:H}=L,z=re==="plugin_absent"&&E==="no",Q=z&&(0,s.jsx)(l.Z,{level:"error",hideCloseButton:!0,title:(0,s.jsx)(i.ZP,{children:(0,h.gB)(_("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),H)}),actions:[(0,s.jsx)(n.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${Z}`,isExternalLink:!0,children:_("Get plugin","jetpack-my-jetpack")})]}),U=(0,R.useMemo)(()=>O.map(d=>{var k,Y,t;return{name:d==null?void 0:d.name,tooltipTitle:(k=d==null?void 0:d.info)==null?void 0:k.title,tooltipInfo:(Y=d==null?void 0:d.info)!=null&&Y.content?(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:(t=d==null?void 0:d.info)==null?void 0:t.content}}):null}}),[O]);return(0,s.jsxs)(s.Fragment,{children:[Q,(0,s.jsx)(a.ZP,{title:J,items:U,children:ce.map((d,k)=>(0,s.jsx)(B,{tier:d,detail:L,isFetching:b,onProductButtonClick:T,trackProductButtonClick:A,primary:k===0,cantInstallPlugin:z},k))})]})};S.propTypes={slug:u().string.isRequired,onProductButtonClick:u().func.isRequired,trackProductButtonClick:u().func.isRequired,isFetching:u().bool.isRequired};const N=S;S.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@param {boolean}  props.isFetching              - True if there is a pending request to load the product.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0},isFetching:{description:"",type:{name:"bool"},required:!0}}}},"../components/components/notice/index.tsx":(f,p,e)=>{e.d(p,{Z:()=>N});var a=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),h=e.n(m),I=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(u),P=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),j={};j.insert="head",j.singleton=!1;var V=R()(P.Z,j);const s=P.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const B=C=>{switch(C){case"error":return a.Z;case"warning":return a.Z;case"info":return c.Z;case"success":return n.Z;default:return a.Z}},S=({level:C,title:T,children:A,actions:b,hideCloseButton:E,onClose:L})=>{const J=h()(s.container,s[`is-${C}`]);return(0,_.jsxs)("div",{className:J,children:[(0,_.jsx)("div",{className:s["icon-wrapper"],children:(0,_.jsx)(l.Z,{icon:B(C),className:s.icon})}),(0,_.jsxs)("div",{className:s["main-content"],children:[(0,_.jsx)("div",{className:s.title,children:T}),A,b&&b.length>0&&(0,_.jsx)("div",{className:s["action-bar"],children:b.map((O,Z)=>(0,_.jsx)("div",{className:s.action,children:O},Z))})]}),!E&&(0,_.jsx)("button",{"aria-label":"close",className:s["close-button"],onClick:L,children:(0,_.jsx)(l.Z,{icon:i.Z})})]})};S.displayName="Notice",S.defaultProps={level:"info",hideCloseButton:!1};const N=S},"../../packages/my-jetpack/_inc/constants.ts":(f,p,e)=>{e.d(p,{f6:()=>c,w6:()=>a,xB:()=>l});const a="my-jetpack-my-plans-manage",c="my-jetpack-my-plans-purchase",n="my-jetpack-product-checkout",l={Home:"/",Connection:"/connection",AddAkismet:"/add-akismet",AddAntiSpam:"/add-anti-spam",AddBackup:"/add-backup",AddBoost:"/add-boost",AddCRM:"/add-crm",AddCreator:"/add-creator",AddJetpackAI:"/add-jetpack-ai",AddExtras:"/add-extras",AddProtect:"/add-protect",AddScan:"/add-scan",AddSocial:"/add-social",AddSearch:"/add-search",AddVideoPress:"/add-videopress",AddStats:"/add-stats",AddLicense:"/add-license",RedeemToken:"/redeem-token"}},"../../packages/my-jetpack/_inc/data/products/use-activate.ts":(f,p,e)=>{e.d(p,{Z:()=>h});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../packages/my-jetpack/_inc/data/constants.ts"),n=e("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),l=e("../../packages/my-jetpack/_inc/data/products/use-product.ts");const i=a.__,h=I=>{const{detail:u,refetch:R}=(0,l.Z)(I),{mutate:P,isPending:j}=(0,n.Z)({name:c.iG,query:{path:`${c.Jk}/${I}`,method:"POST"},options:{onSuccess:R},errorMessage:(0,a.gB)(i("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),u.name)});return{activate:P,isPending:j}}},"../../packages/my-jetpack/_inc/data/use-simple-mutation.ts":(f,p,e)=>{e.d(p,{Z:()=>i});var a=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js"),c=e("../../../node_modules/.pnpm/@wordpress+api-fetch@6.50.0/node_modules/@wordpress/api-fetch/build-module/index.js"),n=e("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const i=({name:m,query:h,options:I,errorMessage:u})=>{const R=(0,a.D)({mutationKey:[m],mutationFn:()=>(0,c.Z)(h),...I}),{isError:P,isPending:j}=R;return(0,n.o)({infoName:m,isError:!j&&P,overrideMessage:u}),R}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.ts":(f,p,e)=>{e.d(p,{Z:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function n(l){const i=(0,c.s0)();return(0,a.useCallback)(m=>i(l,m),[i,l])}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(f,p,e)=>{e.d(p,{Z:()=>m});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),i=l()(c());i.push([f.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),i.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const m=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(f,p,e)=>{e.d(p,{Z:()=>m});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),i=l()(c());i.push([f.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),i.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const m=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(f,p,e)=>{e.d(p,{Z:()=>m});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),i=l()(c());i.push([f.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),i.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const m=i}}]);})();
