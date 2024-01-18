"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(R,d,e)=>{var Ze,Ue,He,We,Ke,Ve,Fe,ze,Ge,Xe,Qe,Ye,$e,qe,et,tt,st,nt,at,ot,rt,ct,lt,it;e.r(d),e.d(d,{JetpackAntiSpam:()=>q,JetpackBackup:()=>ee,JetpackBoost:()=>te,JetpackCRM:()=>se,JetpackScan:()=>ne,JetpackSearch:()=>ae,JetpackVideoPress:()=>Y,__namedExportsOrder:()=>vt,_default:()=>Q,default:()=>Rt});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),c=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../components/components/admin-page/index.tsx"),m=e("../components/components/layout/container/index.tsx"),k=e("../components/components/layout/col/index.tsx"),T=e("../components/components/text/index.tsx"),u=e("../components/components/button/index.tsx"),K=e("../connection/components/use-connection/index.jsx"),M=e("../../../node_modules/.pnpm/@wordpress+element@5.25.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),P=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(P),_=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function J({slug:s}){const{recordEvent:g}=(0,_.Z)();return{onClickGoBack:(0,a.useCallback)(f=>{s&&g("jetpack_myjetpack_product_interstitial_back_link_click",{product:s}),document.referrer.includes(window.location.host)&&(f.preventDefault(),history.back())},[g,s])}}var b=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),y=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),v=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),B=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),D=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const L=e.p+"static/media/boost.a5413748.png",N=e.p+"static/media/crm.7e7684ae.png",V=e.p+"static/media/extras.26daf365.png";var F=e("../components/tools/jp-redirect/index.ts");const w=e.p+"static/media/jetpack-ai.1a265a19.png";var z=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(z),$=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss"),Z={};Z.insert="head",Z.singleton=!1;var I=G()($.Z,Z);const i=$.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const S=r.__;function A({onClickGoBack:s=()=>{}}){const g=S("Do you need more requests for Jetpack AI Assistant?","jetpack-my-jetpack"),W=S("Allow us to assist you in discovering the optimal plan tailored to your requirements, ensuring you can continue using the most advanced AI technology Jetpack has to offer.","jetpack-my-jetpack"),f=(0,F.Z)("jetpack-ai-tiers-more-requests-contact");return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(m.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsx)(k.Z,{className:i["product-interstitial__header"],children:(0,t.jsx)(v.Z,{onClick:s,reload:!1})}),(0,t.jsx)(k.Z,{children:(0,t.jsxs)(m.Z,{className:i.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(k.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)("div",{className:p()(i.card),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(T.H3,{children:g}),(0,t.jsx)(T.ZP,{mb:3,children:W}),(0,t.jsxs)("div",{className:i["buttons-row"],children:[(0,t.jsx)(u.Z,{href:f,children:S("Contact Us","jetpack-my-jetpack")}),(0,t.jsx)(o.rU,{to:"/",onClick:s,children:(0,t.jsx)(u.Z,{variant:"secondary",children:S("Back","jetpack-my-jetpack")})})]})]})})}),(0,t.jsx)(k.Z,{sm:4,md:4,lg:5,className:p()(i.imageContainer,i.aiImageContainer),children:(0,t.jsx)("img",{src:w,alt:"Jetpack AI"})})]})})]})})}A.displayName="JetpackAIInterstitialMoreRequests",A.__docgenInfo={description:`JetpackAIInterstitialMoreRequests component

@param {object} props                 - Component props.
@param {Function} props.onClickGoBack - onClick handler for the "Back" button.
@returns {object}                       JetpackAIInterstitialMoreRequests react component.`,methods:[],displayName:"JetpackAIInterstitialMoreRequests",props:{onClickGoBack:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const je=e.p+"static/media/search.f9756bd9.png",ie=e.p+"static/media/social.e3fb80b2.png",he=e.p+"static/media/stats.98023808.png";var re=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),ce={};ce.insert="head",ce.singleton=!1;var be=G()(re.Z,ce);const E=re.Z.locals||{},ke=e.p+"static/media/videopress.9591093a.png",U=r.__;function j({bundle:s,existingLicenseKeyUrl:g="admin.php?page=my-jetpack#/add-license",installsPlugin:W=!1,slug:f,supportingInfo:O,preferProductName:pe=!1,children:Re=null,imageContainerClassName:me="",ctaButtonLabel:Ie=null,hideTOS:ve=!1,quantity:le=null,directCheckout:dt=!1,highlightLastFeature:pt=!1}){const{activate:mt,detail:Pt}=(0,y.i)(f),{isUpgradableByBundle:Pe,tiers:ut}=Pt,{recordEvent:oe}=(0,_.Z)(),{onClickGoBack:bt}=J({slug:f});(0,a.useEffect)(()=>{oe("jetpack_myjetpack_product_interstitial_view",{product:f})},[oe,f]);const _t=(0,a.useCallback)((C=null)=>{oe("jetpack_myjetpack_product_interstitial_add_link_click",{product:C!=null?C:f})},[oe,f]),Bt=(0,a.useCallback)(()=>{oe("jetpack_myjetpack_product_interstitial_add_link_click",{product:s})},[oe,s]),jt=(0,b.Z)("/"),ue=(0,a.useCallback)((C,h,_e)=>{if(h!=null&&h.isBundle||dt){C==null||C();return}mt().finally(()=>{var kt,gt,xt,yt,ft;const ht=h==null?void 0:h.postActivationUrl,St=_e?(kt=h==null?void 0:h.hasRequiredTier)==null?void 0:kt[_e]:h==null?void 0:h.hasRequiredPlan;if(!(!(_e?(yt=(xt=(gt=h==null?void 0:h.pricingForUi)==null?void 0:gt.tiers)==null?void 0:xt[_e])==null?void 0:yt.isFree:(ft=h==null?void 0:h.pricingForUi)==null?void 0:ft.isFree)&&!St)){if(ht){window.location.href=ht;return}return jt()}C==null||C()})},[dt,mt,jt]);return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(m.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(k.Z,{className:E["product-interstitial__header"],children:[(0,t.jsx)(v.Z,{onClick:bt}),g&&(0,t.jsx)(T.ZP,{variant:"body-small",children:(0,M.Z)(U("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(u.Z,{className:E["product-interstitial__license-activation-link"],href:g,variant:"link"})})})]}),(0,t.jsx)(k.Z,{children:ut&&ut.length?(0,t.jsx)(D.Z,{slug:f,clickHandler:ue,onProductButtonClick:ue,trackProductButtonClick:_t}):(0,t.jsxs)(m.Z,{className:Pe?null:E.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(k.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(B.Z,{slug:f,trackButtonClick:_t,onClick:W?ue:void 0,className:Pe?E.container:null,supportingInfo:O,preferProductName:pe,ctaButtonLabel:Ie,hideTOS:ve,quantity:le,highlightLastFeature:pt})}),(0,t.jsx)(k.Z,{sm:4,md:4,lg:5,className:p()(E.imageContainer,me),children:s?(0,t.jsx)(B.Z,{slug:s,trackButtonClick:Bt,onClick:ue,className:Pe?E.container:null,quantity:le,highlightLastFeature:pt}):Re})]})})]})})}j.displayName="ProductInterstitial";function X(){const s="anti-spam",{detail:g}=(0,y.i)(s),{isPluginActive:W}=g;return(0,t.jsx)(j,{slug:s,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:W?"admin.php?page=akismet-key-config":null,preferProductName:!0})}X.displayName="AntiSpamInterstitial";function H(){return(0,t.jsx)(j,{slug:"backup",installsPlugin:!0,bundle:"security"})}H.displayName="BackupInterstitial";function x(){return(0,t.jsx)(j,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:L,alt:"Boost"})})}x.displayName="BoostInterstitial";function de(){return(0,t.jsx)(j,{slug:"creator",installsPlugin:!0})}de.displayName="CreatorInterstitial";function ge(){return(0,t.jsx)(j,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:N,alt:"CRM"})})}ge.displayName="CRMInterstitial";function Be(){return(0,t.jsx)(j,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:V,alt:"Extras"})})}Be.displayName="ExtrasInterstitial";function Se(){var le;const s="jetpack-ai",{detail:g}=(0,y.i)(s),{onClickGoBack:W}=J({slug:s}),{isRegistered:f}=(0,K.Z)(),O=((le=g==null?void 0:g["ai-assistant-feature"])==null?void 0:le["next-tier"])||null;if(f&&!O)return(0,t.jsx)(A,{onClickGoBack:W});const{hasRequiredPlan:pe}=g,Re=pe?U("Upgrade Jetpack AI","jetpack-my-jetpack"):null,me=f?O==null?void 0:O.value:100,Ie=me!==1?me:null,ve=(O==null?void 0:O.value)!==1;return(0,t.jsx)(j,{slug:"jetpack-ai",installsPlugin:!0,imageContainerClassName:E.aiImageContainer,ctaButtonLabel:Re,hideTOS:!0,quantity:Ie,directCheckout:pe,highlightLastFeature:ve,children:(0,t.jsx)("img",{src:w,alt:"Jetpack AI"})})}Se.displayName="JetpackAIInterstitial";function Ee(){return(0,t.jsx)(j,{slug:"protect",installsPlugin:!0})}Ee.displayName="ProtectInterstitial";function xe(){return(0,t.jsx)(j,{slug:"scan",installsPlugin:!0,bundle:"security"})}xe.displayName="ScanInterstitial";function Ce(){return(0,t.jsx)(j,{slug:"social",installsPlugin:!0,children:(0,t.jsx)("img",{src:ie,alt:U("Image displaying logos of social media platforms supported by Jetpack Social.","jetpack-my-jetpack")})})}Ce.displayName="SocialInterstitial";function ye(){var g;const{detail:s}=(0,y.i)("search");return(0,t.jsx)(j,{slug:"search",installsPlugin:!0,supportingInfo:((g=s==null?void 0:s.pricingForUi)!=null&&g.trialAvailable?U("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+U("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:je,alt:"Search"})})}ye.displayName="SearchInterstitial";function Te(){return(0,t.jsx)(j,{slug:"stats",installsPlugin:!0,children:(0,t.jsx)("img",{src:he,alt:U("Illustration showing the Stats feature, highlighting important statistics for your site.","jetpack-my-jetpack")})})}Te.displayName="StatsInterstitial";function fe(){return(0,t.jsx)(j,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:ke,alt:"VideoPress"})})}fe.displayName="VideoPressInterstitial",j.__docgenInfo={description:`Product Interstitial component.

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
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1},highlightLastFeature:{defaultValue:{value:"false",computed:!1},required:!1}}},X.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},H.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},x.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},de.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},ge.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},Be.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},Se.__docgenInfo={description:`JetpackAIInterstitial component

@returns {object} JetpackAIInterstitial react component.`,methods:[],displayName:"JetpackAIInterstitial"},Ee.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},xe.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},Ce.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},ye.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},Te.__docgenInfo={description:`StatsInterstitial component

@returns {object} StatsInterstitial react component.`,methods:[],displayName:"StatsInterstitial"},fe.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var Et=`/* eslint-disable react/react-in-jsx-scope */
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
`,Ct={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const Rt={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:j},It={},Me=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(H,{...s})})})});Me.displayName="DefaultBackupDetailCard";const Q=Me.bind({});Q.parameters={},Q.args=It;const De=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(X,{...s})})})});De.displayName="AntiSpamTemplate";const q=De.bind({});q.parameters={mockData:(0,c.TN)("anti-spam")};const Le=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(H,{...s})})})});Le.displayName="BackupTemplate";const ee=Le.bind({});ee.parameters={mockData:(0,c.TN)("backup")};const Ae=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(x,{...s})})})});Ae.displayName="BoostTemplate";const te=Ae.bind({});te.parameters={mockData:(0,c.TN)("boost")};const Oe=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(ge,{...s})})})});Oe.displayName="CRMTemplate";const se=Oe.bind({});se.parameters={mockData:(0,c.TN)("crm")};const Je=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(xe,{...s})})})});Je.displayName="ScanTemplate";const ne=Je.bind({});ne.parameters={};const Ne=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(ye,{...s})})})});Ne.displayName="SearchTemplate";const ae=Ne.bind({});ae.parameters={mockData:(0,c.TN)("search")};const we=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(fe,{...s})})})});we.displayName="VideoPressTemplate";const Y=we.bind({});Y.storyName="Jetpack VideoPress",Y.parameters={mockData:(0,c.TN)("videopress")},Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(He=(Ue=Q.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}},q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ve=(Ke=q.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}},ee.parameters={...ee.parameters,docs:{...(Fe=ee.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ge=(ze=ee.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}},te.parameters={...te.parameters,docs:{...(Xe=te.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ye=(Qe=te.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}},se.parameters={...se.parameters,docs:{...($e=se.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(et=(qe=se.parameters)==null?void 0:qe.docs)==null?void 0:et.source}}},ne.parameters={...ne.parameters,docs:{...(tt=ne.parameters)==null?void 0:tt.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(nt=(st=ne.parameters)==null?void 0:st.docs)==null?void 0:nt.source}}},ae.parameters={...ae.parameters,docs:{...(at=ae.parameters)==null?void 0:at.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(rt=(ot=ae.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}},Y.parameters={...Y.parameters,docs:{...(ct=Y.parameters)==null?void 0:ct.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(it=(lt=Y.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};const vt=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(R,d,e)=>{e.d(d,{Z:()=>c});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(R,d,e)=>{e.d(d,{Z:()=>c});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(R,d,e)=>{e.d(d,{Z:()=>_});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(m),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),u={};u.insert="head",u.singleton=!1;var K=k()(T.Z,u);const M=T.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=a.__;function p({onClick:J,reload:b}){const y=b?"/?reload=true":"/";return(0,r.jsxs)(l.rU,{to:y,className:M.link,onClick:J,children:[(0,r.jsx)(o.Z,{icon:n.Z,className:M.icon}),P("Go back","jetpack-my-jetpack")]})}p.displayName="GoBackLink",p.defaultProps={onClick:()=>{}};const _=p;p.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(R,d,e)=>{e.d(d,{Z:()=>J});var a=e("../components/components/pricing-table/index.tsx"),o=e("../components/components/product-price/index.tsx"),n=e("../components/components/button/index.tsx"),c=e("../components/components/notice/index.tsx"),l=e("../components/components/text/index.tsx"),m=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),k=e("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),T=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),u=e.n(T),K=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),M=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=k.__,p=({cantInstallPlugin:b,onProductButtonClick:y,detail:v,tier:B,trackProductButtonClick:D})=>{var E;const{siteSuffix:L,myJetpackCheckoutUri:N}=(E=window==null?void 0:window.myJetpackInitialState)!=null?E:{},{featuresByTier:V=[],pricingForUi:{tiers:F},title:w,postActivationUrl:z}=v,{callToAction:G,currencyCode:$,fullPrice:Z,introductoryOffer:I,isFree:i,wpcomProductSlug:t}=F[B],{run:S,hasCheckoutStarted:A}=(0,m.Z)({from:"my-jetpack",productSlug:t,redirectUrl:z.replace(/(^.*\/wp-admin\/)/i,"")||N,siteSuffix:L,useBlogIdSuffix:!0}),je=(0,K.useCallback)(()=>{D(),y==null||y(S,v,B)},[D,y,S,v,B]),ie=Z?Math.ceil(Z/12*100)/100:null,he=I!=null&&I.costPerInterval?Math.ceil(I.costPerInterval/12*100)/100:null,re=(I==null?void 0:I.intervalUnit)==="month"&&(I==null?void 0:I.intervalCount)===1,ce=re?(0,k.gB)(P("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),ie):P("/month, paid yearly","jetpack-my-jetpack",0),be=G||(i?P("Start for Free","jetpack-my-jetpack"):(0,k.gB)(P("Get %s","jetpack-my-jetpack"),w,0));return(0,r.jsxs)(a.oK,{primary:!i,children:[(0,r.jsxs)(a.NE,{children:[i?(0,r.jsx)(o.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,r.jsx)(o.Z,{price:ie,offPrice:he,legend:ce,currency:$,hideDiscountLabel:re,hidePriceFraction:!0}),(0,r.jsx)(n.Z,{fullWidth:!0,variant:i?"secondary":"primary",onClick:je,isLoading:A,disabled:A||b,children:be})]}),V.map((ke,U)=>{const{included:j,description:X,struck_description:H,info:x}=ke.tiers[B],de=H||X?(0,r.jsxs)(r.Fragment,{children:[H?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("del",{children:H})," "]}):null,X?(0,r.jsx)("strong",{children:X}):null]}):null;return(0,r.jsx)(a.kF,{isIncluded:j,label:de,tooltipTitle:x==null?void 0:x.title,tooltipInfo:x!=null&&x.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:x==null?void 0:x.content}}):null,tooltipClassName:x==null?void 0:x.class},U)})]})};p.displayName="ProductDetailTableColumn",p.propTypes={cantInstallPlugin:u().bool.isRequired,onProductButtonClick:u().func.isRequired,detail:u().object.isRequired,tier:u().string.isRequired,trackProductButtonClick:u().func.isRequired};const _=({slug:b,onProductButtonClick:y,trackProductButtonClick:v})=>{var I;const{fileSystemWriteAccess:B}=(I=window==null?void 0:window.myJetpackInitialState)!=null?I:{},{detail:D}=(0,M.i)(b),{description:L,featuresByTier:N=[],pluginSlug:V,status:F,tiers:w=[],title:z}=D,G=F==="plugin_absent"&&B==="no",$=G&&(0,r.jsx)(c.Z,{level:"error",hideCloseButton:!0,title:(0,r.jsx)(l.ZP,{children:(0,k.gB)(P("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),z)}),actions:[(0,r.jsx)(n.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${V}`,isExternalLink:!0,children:P("Get plugin","jetpack-my-jetpack")})]}),Z=(0,K.useMemo)(()=>N.map(i=>{var t,S,A;return{name:i==null?void 0:i.name,tooltipTitle:(t=i==null?void 0:i.info)==null?void 0:t.title,tooltipInfo:(S=i==null?void 0:i.info)!=null&&S.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:(A=i==null?void 0:i.info)==null?void 0:A.content}}):null}}),[N]);return(0,r.jsxs)(r.Fragment,{children:[$,(0,r.jsx)(a.ZP,{title:L,items:Z,children:w.map((i,t)=>(0,r.jsx)(p,{tier:i,detail:D,onProductButtonClick:y,trackProductButtonClick:v,primary:t===0,cantInstallPlugin:G},t))})]})};_.propTypes={slug:u().string.isRequired,onProductButtonClick:u().func.isRequired,trackProductButtonClick:u().func.isRequired};const J=_;_.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(R,d,e)=>{e.d(d,{Z:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function n(c){const l=(0,o.s0)();return(0,a.useCallback)(()=>l(c),[l,c])}},"../components/components/notice/index.tsx":(R,d,e)=>{e.d(d,{Z:()=>y});var a=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),k=e.n(m),T=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(u),M=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),r={};r.insert="head",r.singleton=!1;var P=K()(M.Z,r);const p=M.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const J=v=>{switch(v){case"error":return a.Z;case"warning":return a.Z;case"info":return o.Z;case"success":return n.Z;default:return a.Z}},b=({level:v,title:B,children:D,actions:L,hideCloseButton:N,onClose:V})=>{const F=k()(p.container,p[`is-${v}`]);return(0,_.jsxs)("div",{className:F,children:[(0,_.jsx)("div",{className:p["icon-wrapper"],children:(0,_.jsx)(c.Z,{icon:J(v),className:p.icon})}),(0,_.jsxs)("div",{className:p["main-content"],children:[(0,_.jsx)("div",{className:p.title,children:B}),D,L&&L.length>0&&(0,_.jsx)("div",{className:p["action-bar"],children:L.map((w,z)=>(0,_.jsx)("div",{className:p.action,children:w},z))})]}),!N&&(0,_.jsx)("button",{"aria-label":"close",className:p["close-button"],onClick:V,children:(0,_.jsx)(c.Z,{icon:l.Z})})]})};b.displayName="Notice",b.defaultProps={level:"info",hideCloseButton:!1};const y=b},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(R,d,e)=>{e.d(d,{Z:()=>m});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([R.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),l.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const m=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(R,d,e)=>{e.d(d,{Z:()=>m});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([R.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),l.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const m=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss":(R,d,e)=>{e.d(d,{Z:()=>m});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([R.id,".tIJUUobcN4ksJLmwJvlU{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.L1bniMOysXtzsoauGan8{display:flex;align-items:center}.L1bniMOysXtzsoauGan8 img{-o-object-fit:cover;object-fit:cover;width:100%}.AqT7_if8PnJzi9Kj84yj{background-color:#f9f9f6}.RWnOYLV3pxAbuEpNxasX{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.POPEJ7WuOcjsPM3AXtqF{white-space:nowrap}.POPEJ7WuOcjsPM3AXtqF>span{font-size:var(--font-body-small)}.GLJtdRk1EY4_CuKJtjGZ{background-color:var(--jp-white);height:100%;padding:calc(var(--spacing-base)*8);position:relative}.fmw55E3tELNShHcGJfKN{display:flex;gap:calc(var(--spacing-base)*2)}",""]),l.locals={container:"tIJUUobcN4ksJLmwJvlU",imageContainer:"L1bniMOysXtzsoauGan8",aiImageContainer:"AqT7_if8PnJzi9Kj84yj","product-interstitial__header":"RWnOYLV3pxAbuEpNxasX","product-interstitial__license-activation-link":"POPEJ7WuOcjsPM3AXtqF",card:"GLJtdRk1EY4_CuKJtjGZ","buttons-row":"fmw55E3tELNShHcGJfKN"};const m=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(R,d,e)=>{e.d(d,{Z:()=>m});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([R.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),l.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const m=l}}]);})();