"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(f,d,e)=>{var Le,Ae,Oe,Je,Ne,we,Ze,Ue,He,We,Ke,Ve,Fe,ze,Ge,Xe,Qe,Ye,$e,qe,et,tt,st,nt;e.r(d),e.d(d,{JetpackAntiSpam:()=>q,JetpackBackup:()=>ee,JetpackBoost:()=>te,JetpackCRM:()=>se,JetpackScan:()=>ne,JetpackSearch:()=>ae,JetpackVideoPress:()=>G,__namedExportsOrder:()=>xt,_default:()=>z,default:()=>kt});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),c=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../components/components/admin-page/index.tsx"),u=e("../components/components/layout/container/index.tsx"),g=e("../components/components/layout/col/index.tsx"),T=e("../components/components/text/index.tsx"),_=e("../components/components/button/index.tsx"),w=e("../../../node_modules/.pnpm/@wordpress+element@5.24.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),B=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),v=e.n(r),p=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function j({slug:s}){const{recordEvent:x}=(0,p.Z)();return{onClickGoBack:(0,a.useCallback)(i=>{s&&x("jetpack_myjetpack_product_interstitial_back_link_click",{product:s}),document.referrer.includes(window.location.host)&&(i.preventDefault(),history.back())},[x,s])}}var Z=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),R=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),I=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),P=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),E=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const M=e.p+"static/media/boost.a5413748.png",D=e.p+"static/media/crm.7e7684ae.png",A=e.p+"static/media/extras.26daf365.png";var U=e("../components/tools/jp-redirect/index.ts");const O=e.p+"static/media/jetpack-ai.1a265a19.png";var H=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),J=e.n(H),W=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss"),K={};K.insert="head",K.singleton=!1;var re=J()(W.Z,K);const m=W.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=B.__;function L({onClickGoBack:s=()=>{}}){const x=b("Do you need more requests for Jetpack AI Assistant?","jetpack-my-jetpack"),N=b("Allow us to assist you in discovering the optimal plan tailored to your requirements, ensuring you can continue using the most advanced AI technology Jetpack has to offer.","jetpack-my-jetpack"),i=(0,U.Z)("jetpack-ai-tiers-more-requests-contact");return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(u.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsx)(g.Z,{className:m["product-interstitial__header"],children:(0,t.jsx)(I.Z,{onClick:s,reload:!1})}),(0,t.jsx)(g.Z,{children:(0,t.jsxs)(u.Z,{className:m.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(g.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)("div",{className:v()(m.card),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(T.H3,{children:x}),(0,t.jsx)(T.ZP,{mb:3,children:N}),(0,t.jsxs)("div",{className:m["buttons-row"],children:[(0,t.jsx)(_.Z,{href:i,children:b("Contact Us","jetpack-my-jetpack")}),(0,t.jsx)(o.rU,{to:"/",onClick:s,children:(0,t.jsx)(_.Z,{variant:"secondary",children:b("Back","jetpack-my-jetpack")})})]})]})})}),(0,t.jsx)(g.Z,{sm:4,md:4,lg:5,className:v()(m.imageContainer,m.aiImageContainer),children:(0,t.jsx)("img",{src:O,alt:"Jetpack AI"})})]})})]})})}L.displayName="JetpackAIInterstitialMoreRequests",L.__docgenInfo={description:`JetpackAIInterstitialMoreRequests component

@param {object} props                 - Component props.
@param {Function} props.onClickGoBack - onClick handler for the "Back" button.
@returns {object}                       JetpackAIInterstitialMoreRequests react component.`,methods:[],displayName:"JetpackAIInterstitialMoreRequests",props:{onClickGoBack:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const V=e.p+"static/media/search.f9756bd9.png";var ie=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),X={};X.insert="head",X.singleton=!1;var ve=J()(ie.Z,X);const C=ie.Z.locals||{},je=e.p+"static/media/videopress.9591093a.png",Q=B.__;function h({bundle:s,existingLicenseKeyUrl:x="admin.php?page=my-jetpack#/add-license",installsPlugin:N=!1,slug:i,supportingInfo:pe,preferProductName:xe=!1,children:ye=null,imageContainerClassName:fe="",ctaButtonLabel:me=null,hideTOS:yt=!1,quantity:at=null,directCheckout:ot=!1,highlightLastFeature:rt=!1}){const{activate:ct,detail:ft}=(0,R.i)(i),{isUpgradableByBundle:Re,tiers:lt}=ft,{recordEvent:oe}=(0,p.Z)(),{onClickGoBack:Rt}=j({slug:i});(0,a.useEffect)(()=>{oe("jetpack_myjetpack_product_interstitial_view",{product:i})},[oe,i]);const it=(0,a.useCallback)((S=null)=>{oe("jetpack_myjetpack_product_interstitial_add_link_click",{product:S!=null?S:i})},[oe,i]),vt=(0,a.useCallback)(()=>{oe("jetpack_myjetpack_product_interstitial_add_link_click",{product:s})},[oe,s]),dt=(0,Z.Z)("/"),ue=(0,a.useCallback)((S,k,_e)=>{if(k!=null&&k.isBundle||ot){S==null||S();return}ct().finally(()=>{var mt,ut,_t,jt,ht;const pt=k==null?void 0:k.postActivationUrl,It=_e?(mt=k==null?void 0:k.hasRequiredTier)==null?void 0:mt[_e]:k==null?void 0:k.hasRequiredPlan;if(!(!(_e?(jt=(_t=(ut=k==null?void 0:k.pricingForUi)==null?void 0:ut.tiers)==null?void 0:_t[_e])==null?void 0:jt.isFree:(ht=k==null?void 0:k.pricingForUi)==null?void 0:ht.isFree)&&!It)){if(pt){window.location.href=pt;return}return dt()}S==null||S()})},[ot,ct,dt]);return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(u.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(g.Z,{className:C["product-interstitial__header"],children:[(0,t.jsx)(I.Z,{onClick:Rt}),x&&(0,t.jsx)(T.ZP,{variant:"body-small",children:(0,w.Z)(Q("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(_.Z,{className:C["product-interstitial__license-activation-link"],href:x,variant:"link"})})})]}),(0,t.jsx)(g.Z,{children:lt&&lt.length?(0,t.jsx)(E.Z,{slug:i,clickHandler:ue,onProductButtonClick:ue,trackProductButtonClick:it}):(0,t.jsxs)(u.Z,{className:Re?null:C.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(g.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(P.Z,{slug:i,trackButtonClick:it,onClick:N?ue:void 0,className:Re?C.container:null,supportingInfo:pe,preferProductName:xe,ctaButtonLabel:me,hideTOS:yt,quantity:at,highlightLastFeature:rt})}),(0,t.jsx)(g.Z,{sm:4,md:4,lg:5,className:v()(C.imageContainer,fe),children:s?(0,t.jsx)(P.Z,{slug:s,trackButtonClick:vt,onClick:ue,className:Re?C.container:null,quantity:at,highlightLastFeature:rt}):ye})]})})]})})}h.displayName="ProductInterstitial";function ce(){const s="anti-spam",{detail:x}=(0,R.i)(s),{isPluginActive:N}=x;return(0,t.jsx)(h,{slug:s,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:N?"admin.php?page=akismet-key-config":null,preferProductName:!0})}ce.displayName="AntiSpamInterstitial";function Y(){return(0,t.jsx)(h,{slug:"backup",installsPlugin:!0,bundle:"security"})}Y.displayName="BackupInterstitial";function le(){return(0,t.jsx)(h,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:M,alt:"Boost"})})}le.displayName="BoostInterstitial";function $(){return(0,t.jsx)(h,{slug:"creator",installsPlugin:!0})}$.displayName="CreatorInterstitial";function F(){return(0,t.jsx)(h,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:D,alt:"CRM"})})}F.displayName="CRMInterstitial";function y(){return(0,t.jsx)(h,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:A,alt:"Extras"})})}y.displayName="ExtrasInterstitial";function de(){var me;const s="jetpack-ai",{detail:x}=(0,R.i)(s),{onClickGoBack:N}=j({slug:s}),i=((me=x==null?void 0:x["ai-assistant-feature"])==null?void 0:me["next-tier"])||null;if(!i)return(0,t.jsx)(L,{onClickGoBack:N});const{hasRequiredPlan:pe}=x,xe=pe?Q("Upgrade Jetpack AI","jetpack-my-jetpack"):null,ye=(i==null?void 0:i.value)!==1?i==null?void 0:i.value:null,fe=(i==null?void 0:i.value)!==1;return(0,t.jsx)(h,{slug:"jetpack-ai",installsPlugin:!0,imageContainerClassName:C.aiImageContainer,ctaButtonLabel:xe,hideTOS:!0,quantity:ye,directCheckout:pe,highlightLastFeature:fe,children:(0,t.jsx)("img",{src:O,alt:"Jetpack AI"})})}de.displayName="JetpackAIInterstitial";function Ie(){return(0,t.jsx)(h,{slug:"protect",installsPlugin:!0})}Ie.displayName="ProtectInterstitial";function he(){return(0,t.jsx)(h,{slug:"scan",installsPlugin:!0,bundle:"security"})}he.displayName="ScanInterstitial";function Pe(){return(0,t.jsx)(h,{slug:"social",installsPlugin:!0})}Pe.displayName="SocialInterstitial";function ke(){var x;const{detail:s}=(0,R.i)("search");return(0,t.jsx)(h,{slug:"search",installsPlugin:!0,supportingInfo:((x=s==null?void 0:s.pricingForUi)!=null&&x.trialAvailable?Q("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+Q("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:V,alt:"Search"})})}ke.displayName="SearchInterstitial";function ge(){return(0,t.jsx)(h,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:je,alt:"VideoPress"})})}ge.displayName="VideoPressInterstitial",h.__docgenInfo={description:`Product Interstitial component.

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
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1},highlightLastFeature:{defaultValue:{value:"false",computed:!1},required:!1}}},ce.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},Y.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},le.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},$.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},F.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},y.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},de.__docgenInfo={description:`JetpackAIInterstitial component

@returns {object} JetpackAIInterstitial react component.`,methods:[],displayName:"JetpackAIInterstitial"},Ie.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},he.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},Pe.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},ke.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},ge.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var Pt=`/* eslint-disable react/react-in-jsx-scope */
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
`,bt={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const kt={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:h},gt={},be=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(Y,{...s})})})});be.displayName="DefaultBackupDetailCard";const z=be.bind({});z.parameters={},z.args=gt;const Be=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(ce,{...s})})})});Be.displayName="AntiSpamTemplate";const q=Be.bind({});q.parameters={mockData:(0,c.TN)("anti-spam")};const Ee=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(Y,{...s})})})});Ee.displayName="BackupTemplate";const ee=Ee.bind({});ee.parameters={mockData:(0,c.TN)("backup")};const Ce=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(le,{...s})})})});Ce.displayName="BoostTemplate";const te=Ce.bind({});te.parameters={mockData:(0,c.TN)("boost")};const Se=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(F,{...s})})})});Se.displayName="CRMTemplate";const se=Se.bind({});se.parameters={mockData:(0,c.TN)("crm")};const Te=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(he,{...s})})})});Te.displayName="ScanTemplate";const ne=Te.bind({});ne.parameters={};const Me=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(ke,{...s})})})});Me.displayName="SearchTemplate";const ae=Me.bind({});ae.parameters={mockData:(0,c.TN)("search")};const De=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(ge,{...s})})})});De.displayName="VideoPressTemplate";const G=De.bind({});G.storyName="Jetpack VideoPress",G.parameters={mockData:(0,c.TN)("videopress")},z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Oe=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}},q.parameters={...q.parameters,docs:{...(Je=q.parameters)==null?void 0:Je.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(we=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}},ee.parameters={...ee.parameters,docs:{...(Ze=ee.parameters)==null?void 0:Ze.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(He=(Ue=ee.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}},te.parameters={...te.parameters,docs:{...(We=te.parameters)==null?void 0:We.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ve=(Ke=te.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}},se.parameters={...se.parameters,docs:{...(Fe=se.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ge=(ze=se.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}},ne.parameters={...ne.parameters,docs:{...(Xe=ne.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ye=(Qe=ne.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}},ae.parameters={...ae.parameters,docs:{...($e=ae.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(et=(qe=ae.parameters)==null?void 0:qe.docs)==null?void 0:et.source}}},G.parameters={...G.parameters,docs:{...(tt=G.parameters)==null?void 0:tt.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(nt=(st=G.parameters)==null?void 0:st.docs)==null?void 0:nt.source}}};const xt=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(f,d,e)=>{e.d(d,{Z:()=>c});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(f,d,e)=>{e.d(d,{Z:()=>c});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(f,d,e)=>{e.d(d,{Z:()=>j});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(u),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),_={};_.insert="head",_.singleton=!1;var w=g()(T.Z,_);const B=T.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=a.__;function p({onClick:Z,reload:R}){const I=R?"/?reload=true":"/";return(0,r.jsxs)(l.rU,{to:I,className:B.link,onClick:Z,children:[(0,r.jsx)(o.Z,{icon:n.Z,className:B.icon}),v("Go back","jetpack-my-jetpack")]})}p.displayName="GoBackLink",p.defaultProps={onClick:()=>{}};const j=p;p.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(f,d,e)=>{e.d(d,{Z:()=>Z});var a=e("../components/components/pricing-table/index.tsx"),o=e("../components/components/product-price/index.tsx"),n=e("../components/components/button/index.tsx"),c=e("../components/components/notice/index.tsx"),l=e("../components/components/text/index.tsx"),u=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),g=e("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),T=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),_=e.n(T),w=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),B=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=g.__,p=({cantInstallPlugin:R,onProductButtonClick:I,detail:P,tier:E,trackProductButtonClick:M})=>{var h;const{siteSuffix:D,myJetpackUrl:A}=(h=window==null?void 0:window.myJetpackInitialState)!=null?h:{},{featuresByTier:U=[],pricingForUi:{tiers:O},title:H,postActivationUrl:J}=P,{callToAction:W,currencyCode:K,fullPrice:re,introductoryOffer:m,isFree:t,wpcomProductSlug:b}=O[E],{run:L,hasCheckoutStarted:V}=(0,u.Z)({from:"my-jetpack",productSlug:b,redirectUrl:J||A,siteSuffix:D}),ie=(0,w.useCallback)(()=>{M(),I==null||I(L,P,E)},[M,I,L,P,E]),X=re?Math.ceil(re/12*100)/100:null,ve=m!=null&&m.costPerInterval?Math.ceil(m.costPerInterval/12*100)/100:null,C=(m==null?void 0:m.intervalUnit)==="month"&&(m==null?void 0:m.intervalCount)===1,je=C?(0,g.gB)(v("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),X):v("/month, paid yearly","jetpack-my-jetpack",0),Q=W||(t?v("Start for Free","jetpack-my-jetpack"):(0,g.gB)(v("Get %s","jetpack-my-jetpack"),H,0));return(0,r.jsxs)(a.oK,{primary:!t,children:[(0,r.jsxs)(a.NE,{children:[t?(0,r.jsx)(o.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,r.jsx)(o.Z,{price:X,offPrice:ve,legend:je,currency:K,hideDiscountLabel:C,hidePriceFraction:!0}),(0,r.jsx)(n.Z,{fullWidth:!0,variant:t?"secondary":"primary",onClick:ie,isLoading:V,disabled:V||R,children:Q})]}),U.map((ce,Y)=>{const{included:le,description:$,struck_description:F,info:y}=ce.tiers[E],de=F||$?(0,r.jsxs)(r.Fragment,{children:[F?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("del",{children:F})," "]}):null,$?(0,r.jsx)("strong",{children:$}):null]}):null;return(0,r.jsx)(a.kF,{isIncluded:le,label:de,tooltipTitle:y==null?void 0:y.title,tooltipInfo:y!=null&&y.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:y==null?void 0:y.content}}):null,tooltipClassName:y==null?void 0:y.class},Y)})]})};p.displayName="ProductDetailTableColumn",p.propTypes={cantInstallPlugin:_().bool.isRequired,onProductButtonClick:_().func.isRequired,detail:_().object.isRequired,tier:_().string.isRequired,trackProductButtonClick:_().func.isRequired};const j=({slug:R,onProductButtonClick:I,trackProductButtonClick:P})=>{var m;const{fileSystemWriteAccess:E}=(m=window==null?void 0:window.myJetpackInitialState)!=null?m:{},{detail:M}=(0,B.i)(R),{description:D,featuresByTier:A=[],pluginSlug:U,status:O,tiers:H=[],title:J}=M,W=O==="plugin_absent"&&E==="no",K=W&&(0,r.jsx)(c.Z,{level:"error",hideCloseButton:!0,title:(0,r.jsx)(l.ZP,{children:(0,g.gB)(v("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),J)}),actions:[(0,r.jsx)(n.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${U}`,isExternalLink:!0,children:v("Get plugin","jetpack-my-jetpack")})]}),re=(0,w.useMemo)(()=>A.map(t=>{var b,L,V;return{name:t==null?void 0:t.name,tooltipTitle:(b=t==null?void 0:t.info)==null?void 0:b.title,tooltipInfo:(L=t==null?void 0:t.info)!=null&&L.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:(V=t==null?void 0:t.info)==null?void 0:V.content}}):null}}),[A]);return(0,r.jsxs)(r.Fragment,{children:[K,(0,r.jsx)(a.ZP,{title:D,items:re,children:H.map((t,b)=>(0,r.jsx)(p,{tier:t,detail:M,onProductButtonClick:I,trackProductButtonClick:P,primary:b===0,cantInstallPlugin:W},b))})]})};j.propTypes={slug:_().string.isRequired,onProductButtonClick:_().func.isRequired,trackProductButtonClick:_().func.isRequired};const Z=j;j.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(f,d,e)=>{e.d(d,{Z:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function n(c){const l=(0,o.s0)();return(0,a.useCallback)(()=>l(c),[l,c])}},"../components/components/notice/index.tsx":(f,d,e)=>{e.d(d,{Z:()=>I});var a=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=e.n(u),T=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(_),B=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),r={};r.insert="head",r.singleton=!1;var v=w()(B.Z,r);const p=B.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Z=P=>{switch(P){case"error":return a.Z;case"warning":return a.Z;case"info":return o.Z;case"success":return n.Z;default:return a.Z}},R=({level:P,title:E,children:M,actions:D,hideCloseButton:A,onClose:U})=>{const O=g()(p.container,p[`is-${P}`]);return(0,j.jsxs)("div",{className:O,children:[(0,j.jsx)("div",{className:p["icon-wrapper"],children:(0,j.jsx)(c.Z,{icon:Z(P),className:p.icon})}),(0,j.jsxs)("div",{className:p["main-content"],children:[(0,j.jsx)("div",{className:p.title,children:E}),M,D&&D.length>0&&(0,j.jsx)("div",{className:p["action-bar"],children:D.map((H,J)=>(0,j.jsx)("div",{className:p.action,children:H},J))})]}),!A&&(0,j.jsx)("button",{"aria-label":"close",className:p["close-button"],onClick:U,children:(0,j.jsx)(c.Z,{icon:l.Z})})]})};R.displayName="Notice",R.defaultProps={level:"info",hideCloseButton:!1};const I=R},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(f,d,e)=>{e.d(d,{Z:()=>u});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([f.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),l.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const u=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(f,d,e)=>{e.d(d,{Z:()=>u});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([f.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),l.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const u=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss":(f,d,e)=>{e.d(d,{Z:()=>u});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([f.id,".tIJUUobcN4ksJLmwJvlU{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.L1bniMOysXtzsoauGan8{display:flex;align-items:center}.L1bniMOysXtzsoauGan8 img{-o-object-fit:cover;object-fit:cover;width:100%}.AqT7_if8PnJzi9Kj84yj{background-color:#f9f9f6}.RWnOYLV3pxAbuEpNxasX{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.POPEJ7WuOcjsPM3AXtqF{white-space:nowrap}.POPEJ7WuOcjsPM3AXtqF>span{font-size:var(--font-body-small)}.GLJtdRk1EY4_CuKJtjGZ{background-color:var(--jp-white);height:100%;padding:calc(var(--spacing-base)*8);position:relative}.fmw55E3tELNShHcGJfKN{display:flex;gap:calc(var(--spacing-base)*2)}",""]),l.locals={container:"tIJUUobcN4ksJLmwJvlU",imageContainer:"L1bniMOysXtzsoauGan8",aiImageContainer:"AqT7_if8PnJzi9Kj84yj","product-interstitial__header":"RWnOYLV3pxAbuEpNxasX","product-interstitial__license-activation-link":"POPEJ7WuOcjsPM3AXtqF",card:"GLJtdRk1EY4_CuKJtjGZ","buttons-row":"fmw55E3tELNShHcGJfKN"};const u=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(f,d,e)=>{e.d(d,{Z:()=>u});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([f.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),l.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const u=l}}]);})();
