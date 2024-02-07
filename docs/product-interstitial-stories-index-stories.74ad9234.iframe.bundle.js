"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(R,d,e)=>{var Ze,Ue,He,We,Ke,Ve,Fe,ze,Ge,Xe,Qe,Ye,$e,qe,et,tt,st,nt,at,ot,rt,ct,lt,it;e.r(d),e.d(d,{JetpackAntiSpam:()=>q,JetpackBackup:()=>ee,JetpackBoost:()=>te,JetpackCRM:()=>se,JetpackScan:()=>ne,JetpackSearch:()=>ae,JetpackVideoPress:()=>Y,__namedExportsOrder:()=>Pt,_default:()=>Q,default:()=>It});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),c=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../components/components/admin-page/index.tsx"),_=e("../components/components/layout/container/index.tsx"),k=e("../components/components/layout/col/index.tsx"),M=e("../components/components/text/index.tsx"),j=e("../components/components/button/index.tsx"),K=e("../connection/components/use-connection/index.jsx"),D=e("../../../node_modules/.pnpm/@wordpress+element@5.27.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.50.0/node_modules/@wordpress/i18n/build-module/index.js"),b=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(b),m=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function J({slug:s}){const{recordEvent:g}=(0,m.Z)();return{onClickGoBack:(0,a.useCallback)(f=>{s&&g("jetpack_myjetpack_product_interstitial_back_link_click",{product:s}),document.referrer.includes(window.location.host)&&(f.preventDefault(),history.back())},[g,s])}}var B=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),y=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),v=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),S=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),L=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const A=e.p+"static/media/boost.a5413748.png",N=e.p+"static/media/crm.7e7684ae.png",V=e.p+"static/media/extras.26daf365.png";var F=e("../components/tools/jp-redirect/index.ts");const w=e.p+"static/media/jetpack-ai.1a265a19.png";var z=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(z),$=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss"),Z={};Z.insert="head",Z.singleton=!1;var I=G()($.Z,Z);const i=$.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=r.__;function O({onClickGoBack:s=()=>{}}){const g=C("Do you need more requests for Jetpack AI Assistant?","jetpack-my-jetpack"),W=C("Allow us to assist you in discovering the optimal plan tailored to your requirements, ensuring you can continue using the most advanced AI technology Jetpack has to offer.","jetpack-my-jetpack"),f=(0,F.Z)("jetpack-ai-tiers-more-requests-contact"),{recordEvent:P}=(0,m.Z)(),oe=(0,a.useCallback)(()=>{P("jetpack_ai_upgrade_contact_us",{placement:"insterstitial"})},[P]);return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(_.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsx)(k.Z,{className:i["product-interstitial__header"],children:(0,t.jsx)(v.Z,{onClick:s,reload:!1})}),(0,t.jsx)(k.Z,{children:(0,t.jsxs)(_.Z,{className:i.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(k.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)("div",{className:p()(i.card),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(M.H3,{children:g}),(0,t.jsx)(M.ZP,{mb:3,children:W}),(0,t.jsxs)("div",{className:i["buttons-row"],children:[(0,t.jsx)(j.Z,{href:f,onClick:oe,children:C("Contact Us","jetpack-my-jetpack")}),(0,t.jsx)(o.rU,{to:"/",onClick:s,children:(0,t.jsx)(j.Z,{variant:"secondary",children:C("Back","jetpack-my-jetpack")})})]})]})})}),(0,t.jsx)(k.Z,{sm:4,md:4,lg:5,className:p()(i.imageContainer,i.aiImageContainer),children:(0,t.jsx)("img",{src:w,alt:"Jetpack AI"})})]})})]})})}O.displayName="JetpackAIInterstitialMoreRequests",O.__docgenInfo={description:`JetpackAIInterstitialMoreRequests component

@param {object} props                 - Component props.
@param {Function} props.onClickGoBack - onClick handler for the "Back" button.
@returns {object}                       JetpackAIInterstitialMoreRequests react component.`,methods:[],displayName:"JetpackAIInterstitialMoreRequests",props:{onClickGoBack:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const je=e.p+"static/media/search.f9756bd9.png",de=e.p+"static/media/social.e3fb80b2.png",he=e.p+"static/media/stats.98023808.png";var ce=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),le={};le.insert="head",le.singleton=!1;var be=G()(ce.Z,le);const E=ce.Z.locals||{},ke=e.p+"static/media/videopress.9591093a.png",U=r.__;function h({bundle:s,existingLicenseKeyUrl:g="admin.php?page=my-jetpack#/add-license",installsPlugin:W=!1,slug:f,supportingInfo:P,preferProductName:oe=!1,children:Re=null,imageContainerClassName:me="",ctaButtonLabel:Ie=null,hideTOS:ve=!1,quantity:ie=null,directCheckout:dt=!1,highlightLastFeature:pt=!1}){const{activate:mt,detail:bt}=(0,y.i)(f),{isUpgradableByBundle:Pe,tiers:ut}=bt,{recordEvent:re}=(0,m.Z)(),{onClickGoBack:Bt}=J({slug:f});(0,a.useEffect)(()=>{re("jetpack_myjetpack_product_interstitial_view",{product:f})},[re,f]);const _t=(0,a.useCallback)((T=null)=>{re("jetpack_myjetpack_product_interstitial_add_link_click",{product:T!=null?T:f})},[re,f]),St=(0,a.useCallback)(()=>{re("jetpack_myjetpack_product_interstitial_add_link_click",{product:s})},[re,s]),jt=(0,B.Z)("/"),ue=(0,a.useCallback)((T,u,_e)=>{if(u!=null&&u.isBundle||dt){T==null||T();return}mt().finally(()=>{var gt,xt,yt,ft,Rt;const ht=u==null?void 0:u.postActivationUrl,kt=_e?(gt=u==null?void 0:u.hasRequiredTier)==null?void 0:gt[_e]:u==null?void 0:u.hasRequiredPlan,Ct=!(_e?(ft=(yt=(xt=u==null?void 0:u.pricingForUi)==null?void 0:xt.tiers)==null?void 0:yt[_e])==null?void 0:ft.isFree:(Rt=u==null?void 0:u.pricingForUi)==null?void 0:Rt.isFree)&&!kt;if(u.pluginSlug==="zero-bs-crm"&&!kt){window.location.href="https://jetpackcrm.com/pricing/";return}if(!Ct){if(ht){window.location.href=ht;return}return jt()}T==null||T()})},[dt,mt,jt]);return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(_.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(k.Z,{className:E["product-interstitial__header"],children:[(0,t.jsx)(v.Z,{onClick:Bt}),g&&(0,t.jsx)(M.ZP,{variant:"body-small",children:(0,D.Z)(U("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(j.Z,{className:E["product-interstitial__license-activation-link"],href:g,variant:"link"})})})]}),(0,t.jsx)(k.Z,{children:ut&&ut.length?(0,t.jsx)(L.Z,{slug:f,clickHandler:ue,onProductButtonClick:ue,trackProductButtonClick:_t}):(0,t.jsxs)(_.Z,{className:Pe?null:E.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(k.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(S.Z,{slug:f,trackButtonClick:_t,onClick:W?ue:void 0,className:Pe?E.container:null,supportingInfo:P,preferProductName:oe,ctaButtonLabel:Ie,hideTOS:ve,quantity:ie,highlightLastFeature:pt})}),(0,t.jsx)(k.Z,{sm:4,md:4,lg:5,className:p()(E.imageContainer,me),children:s?(0,t.jsx)(S.Z,{slug:s,trackButtonClick:St,onClick:ue,className:Pe?E.container:null,quantity:ie,highlightLastFeature:pt}):Re})]})})]})})}h.displayName="ProductInterstitial";function X(){const s="anti-spam",{detail:g}=(0,y.i)(s),{isPluginActive:W}=g;return(0,t.jsx)(h,{slug:s,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:W?"admin.php?page=akismet-key-config":null,preferProductName:!0})}X.displayName="AntiSpamInterstitial";function H(){return(0,t.jsx)(h,{slug:"backup",installsPlugin:!0,bundle:"security"})}H.displayName="BackupInterstitial";function x(){return(0,t.jsx)(h,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:A,alt:"Boost"})})}x.displayName="BoostInterstitial";function pe(){return(0,t.jsx)(h,{slug:"creator",installsPlugin:!0})}pe.displayName="CreatorInterstitial";function ge(){return(0,t.jsx)(h,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:N,alt:"CRM"})})}ge.displayName="CRMInterstitial";function Be(){return(0,t.jsx)(h,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:V,alt:"Extras"})})}Be.displayName="ExtrasInterstitial";function Se(){var ie;const s="jetpack-ai",{detail:g}=(0,y.i)(s),{onClickGoBack:W}=J({slug:s}),{isRegistered:f}=(0,K.Z)(),P=((ie=g==null?void 0:g["ai-assistant-feature"])==null?void 0:ie["next-tier"])||null;if(f&&!P)return(0,t.jsx)(O,{onClickGoBack:W});const{hasRequiredPlan:oe}=g,Re=oe?U("Upgrade Jetpack AI","jetpack-my-jetpack"):null,me=f?P==null?void 0:P.value:100,Ie=me!==1?me:null,ve=(P==null?void 0:P.value)!==1;return(0,t.jsx)(h,{slug:"jetpack-ai",installsPlugin:!0,imageContainerClassName:E.aiImageContainer,ctaButtonLabel:Re,hideTOS:!0,quantity:Ie,directCheckout:oe,highlightLastFeature:ve,children:(0,t.jsx)("img",{src:w,alt:"Jetpack AI"})})}Se.displayName="JetpackAIInterstitial";function Ce(){return(0,t.jsx)(h,{slug:"protect",installsPlugin:!0})}Ce.displayName="ProtectInterstitial";function xe(){return(0,t.jsx)(h,{slug:"scan",installsPlugin:!0,bundle:"security"})}xe.displayName="ScanInterstitial";function Ee(){return(0,t.jsx)(h,{slug:"social",installsPlugin:!0,children:(0,t.jsx)("img",{src:de,alt:U("Image displaying logos of social media platforms supported by Jetpack Social.","jetpack-my-jetpack")})})}Ee.displayName="SocialInterstitial";function ye(){var g;const{detail:s}=(0,y.i)("search");return(0,t.jsx)(h,{slug:"search",installsPlugin:!0,supportingInfo:((g=s==null?void 0:s.pricingForUi)!=null&&g.trialAvailable?U("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+U("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:je,alt:"Search"})})}ye.displayName="SearchInterstitial";function Te(){return(0,t.jsx)(h,{slug:"stats",installsPlugin:!0,children:(0,t.jsx)("img",{src:he,alt:U("Illustration showing the Stats feature, highlighting important statistics for your site.","jetpack-my-jetpack")})})}Te.displayName="StatsInterstitial";function fe(){return(0,t.jsx)(h,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:ke,alt:"VideoPress"})})}fe.displayName="VideoPressInterstitial",h.__docgenInfo={description:`Product Interstitial component.

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

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},pe.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},ge.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},Be.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},Se.__docgenInfo={description:`JetpackAIInterstitial component

@returns {object} JetpackAIInterstitial react component.`,methods:[],displayName:"JetpackAIInterstitial"},Ce.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},xe.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},Ee.__docgenInfo={description:`SocialInterstitial component

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
`,Tt={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const It={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:h},vt={},Me=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(H,{...s})})})});Me.displayName="DefaultBackupDetailCard";const Q=Me.bind({});Q.parameters={},Q.args=vt;const De=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(X,{...s})})})});De.displayName="AntiSpamTemplate";const q=De.bind({});q.parameters={mockData:(0,c.TN)("anti-spam")};const Le=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(H,{...s})})})});Le.displayName="BackupTemplate";const ee=Le.bind({});ee.parameters={mockData:(0,c.TN)("backup")};const Ae=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(x,{...s})})})});Ae.displayName="BoostTemplate";const te=Ae.bind({});te.parameters={mockData:(0,c.TN)("boost")};const Oe=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(ge,{...s})})})});Oe.displayName="CRMTemplate";const se=Oe.bind({});se.parameters={mockData:(0,c.TN)("crm")};const Je=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(xe,{...s})})})});Je.displayName="ScanTemplate";const ne=Je.bind({});ne.parameters={};const Ne=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(ye,{...s})})})});Ne.displayName="SearchTemplate";const ae=Ne.bind({});ae.parameters={mockData:(0,c.TN)("search")};const we=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(fe,{...s})})})});we.displayName="VideoPressTemplate";const Y=we.bind({});Y.storyName="Jetpack VideoPress",Y.parameters={mockData:(0,c.TN)("videopress")},Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`args => <HashRouter>
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
    </HashRouter>`,...(it=(lt=Y.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};const Pt=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(R,d,e)=>{e.d(d,{Z:()=>c});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.48.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(R,d,e)=>{e.d(d,{Z:()=>c});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.48.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(R,d,e)=>{e.d(d,{Z:()=>m});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.50.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(_),M=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),j={};j.insert="head",j.singleton=!1;var K=k()(M.Z,j);const D=M.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=a.__;function p({onClick:J,reload:B}){const y=B?"/?reload=true":"/";return(0,r.jsxs)(l.rU,{to:y,className:D.link,onClick:J,children:[(0,r.jsx)(o.Z,{icon:n.Z,className:D.icon}),b("Go back","jetpack-my-jetpack")]})}p.displayName="GoBackLink",p.defaultProps={onClick:()=>{}};const m=p;p.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(R,d,e)=>{e.d(d,{Z:()=>J});var a=e("../components/components/pricing-table/index.tsx"),o=e("../components/components/product-price/index.tsx"),n=e("../components/components/button/index.tsx"),c=e("../components/components/notice/index.tsx"),l=e("../components/components/text/index.tsx"),_=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),k=e("../../../node_modules/.pnpm/@wordpress+i18n@4.50.0/node_modules/@wordpress/i18n/build-module/index.js"),M=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),j=e.n(M),K=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),D=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=k.__,p=({cantInstallPlugin:B,onProductButtonClick:y,detail:v,tier:S,trackProductButtonClick:L})=>{var E;const{siteSuffix:A,myJetpackCheckoutUri:N}=(E=window==null?void 0:window.myJetpackInitialState)!=null?E:{},{featuresByTier:V=[],pricingForUi:{tiers:F},title:w,postActivationUrl:z}=v,{callToAction:G,currencyCode:$,fullPrice:Z,introductoryOffer:I,isFree:i,wpcomProductSlug:t}=F[S],{run:C,hasCheckoutStarted:O}=(0,_.Z)({from:"my-jetpack",productSlug:t,redirectUrl:z.replace(/(^.*\/wp-admin\/)/i,"")||N,connectAfterCheckout:!0,siteSuffix:A,useBlogIdSuffix:!0}),je=(0,K.useCallback)(()=>{L(),y==null||y(C,v,S)},[L,y,C,v,S]),de=Z?Math.round(Z/12*100)/100:null,he=I!=null&&I.costPerInterval?Math.round(I.costPerInterval/12*100)/100:null,ce=(I==null?void 0:I.intervalUnit)==="month"&&(I==null?void 0:I.intervalCount)===1,le=ce?(0,k.gB)(b("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),de):b("/month, paid yearly","jetpack-my-jetpack",0),be=G||(i?b("Start for Free","jetpack-my-jetpack"):(0,k.gB)(b("Get %s","jetpack-my-jetpack"),w,0));return(0,r.jsxs)(a.oK,{primary:!i,children:[(0,r.jsxs)(a.NE,{children:[i?(0,r.jsx)(o.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,r.jsx)(o.Z,{price:de,offPrice:he,legend:le,currency:$,hideDiscountLabel:ce,hidePriceFraction:!0}),(0,r.jsx)(n.Z,{fullWidth:!0,variant:i?"secondary":"primary",onClick:je,isLoading:O,disabled:O||B,children:be})]}),V.map((ke,U)=>{const{included:h,description:X,struck_description:H,info:x}=ke.tiers[S],pe=H||X?(0,r.jsxs)(r.Fragment,{children:[H?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("del",{children:H})," "]}):null,X?(0,r.jsx)("strong",{children:X}):null]}):null;return(0,r.jsx)(a.kF,{isIncluded:h,label:pe,tooltipTitle:x==null?void 0:x.title,tooltipInfo:x!=null&&x.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:x==null?void 0:x.content}}):null,tooltipClassName:x==null?void 0:x.class},U)})]})};p.displayName="ProductDetailTableColumn",p.propTypes={cantInstallPlugin:j().bool.isRequired,onProductButtonClick:j().func.isRequired,detail:j().object.isRequired,tier:j().string.isRequired,trackProductButtonClick:j().func.isRequired};const m=({slug:B,onProductButtonClick:y,trackProductButtonClick:v})=>{var I;const{fileSystemWriteAccess:S}=(I=window==null?void 0:window.myJetpackInitialState)!=null?I:{},{detail:L}=(0,D.i)(B),{description:A,featuresByTier:N=[],pluginSlug:V,status:F,tiers:w=[],title:z}=L,G=F==="plugin_absent"&&S==="no",$=G&&(0,r.jsx)(c.Z,{level:"error",hideCloseButton:!0,title:(0,r.jsx)(l.ZP,{children:(0,k.gB)(b("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),z)}),actions:[(0,r.jsx)(n.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${V}`,isExternalLink:!0,children:b("Get plugin","jetpack-my-jetpack")})]}),Z=(0,K.useMemo)(()=>N.map(i=>{var t,C,O;return{name:i==null?void 0:i.name,tooltipTitle:(t=i==null?void 0:i.info)==null?void 0:t.title,tooltipInfo:(C=i==null?void 0:i.info)!=null&&C.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:(O=i==null?void 0:i.info)==null?void 0:O.content}}):null}}),[N]);return(0,r.jsxs)(r.Fragment,{children:[$,(0,r.jsx)(a.ZP,{title:A,items:Z,children:w.map((i,t)=>(0,r.jsx)(p,{tier:i,detail:L,onProductButtonClick:y,trackProductButtonClick:v,primary:t===0,cantInstallPlugin:G},t))})]})};m.propTypes={slug:j().string.isRequired,onProductButtonClick:j().func.isRequired,trackProductButtonClick:j().func.isRequired};const J=m;m.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(R,d,e)=>{e.d(d,{Z:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function n(c){const l=(0,o.s0)();return(0,a.useCallback)(()=>l(c),[l,c])}},"../components/components/notice/index.tsx":(R,d,e)=>{e.d(d,{Z:()=>y});var a=e("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.41.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),_=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),k=e.n(_),M=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(j),D=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),r={};r.insert="head",r.singleton=!1;var b=K()(D.Z,r);const p=D.Z.locals||{};var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const J=v=>{switch(v){case"error":return a.Z;case"warning":return a.Z;case"info":return o.Z;case"success":return n.Z;default:return a.Z}},B=({level:v,title:S,children:L,actions:A,hideCloseButton:N,onClose:V})=>{const F=k()(p.container,p[`is-${v}`]);return(0,m.jsxs)("div",{className:F,children:[(0,m.jsx)("div",{className:p["icon-wrapper"],children:(0,m.jsx)(c.Z,{icon:J(v),className:p.icon})}),(0,m.jsxs)("div",{className:p["main-content"],children:[(0,m.jsx)("div",{className:p.title,children:S}),L,A&&A.length>0&&(0,m.jsx)("div",{className:p["action-bar"],children:A.map((w,z)=>(0,m.jsx)("div",{className:p.action,children:w},z))})]}),!N&&(0,m.jsx)("button",{"aria-label":"close",className:p["close-button"],onClick:V,children:(0,m.jsx)(c.Z,{icon:l.Z})})]})};B.displayName="Notice",B.defaultProps={level:"info",hideCloseButton:!1};const y=B},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(R,d,e)=>{e.d(d,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([R.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),l.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const _=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(R,d,e)=>{e.d(d,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([R.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),l.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const _=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss":(R,d,e)=>{e.d(d,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([R.id,".tIJUUobcN4ksJLmwJvlU{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.L1bniMOysXtzsoauGan8{display:flex;align-items:center}.L1bniMOysXtzsoauGan8 img{-o-object-fit:cover;object-fit:cover;width:100%}.AqT7_if8PnJzi9Kj84yj{background-color:#f9f9f6}.RWnOYLV3pxAbuEpNxasX{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.POPEJ7WuOcjsPM3AXtqF{white-space:nowrap}.POPEJ7WuOcjsPM3AXtqF>span{font-size:var(--font-body-small)}.GLJtdRk1EY4_CuKJtjGZ{background-color:var(--jp-white);height:100%;padding:calc(var(--spacing-base)*8);position:relative}.fmw55E3tELNShHcGJfKN{display:flex;gap:calc(var(--spacing-base)*2)}",""]),l.locals={container:"tIJUUobcN4ksJLmwJvlU",imageContainer:"L1bniMOysXtzsoauGan8",aiImageContainer:"AqT7_if8PnJzi9Kj84yj","product-interstitial__header":"RWnOYLV3pxAbuEpNxasX","product-interstitial__license-activation-link":"POPEJ7WuOcjsPM3AXtqF",card:"GLJtdRk1EY4_CuKJtjGZ","buttons-row":"fmw55E3tELNShHcGJfKN"};const _=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(R,d,e)=>{e.d(d,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(n),l=c()(o());l.push([R.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),l.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const _=l}}]);})();
