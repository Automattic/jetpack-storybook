"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(R,p,e)=>{var He,We,Ke,Ve,Fe,ze,Ge,Xe,Qe,Ye,$e,qe,et,tt,st,nt,at,ot,rt,ct,lt,it,dt,pt;e.r(p),e.d(p,{JetpackAntiSpam:()=>ee,JetpackBackup:()=>te,JetpackBoost:()=>se,JetpackCRM:()=>ne,JetpackScan:()=>ae,JetpackSearch:()=>oe,JetpackVideoPress:()=>Y,__namedExportsOrder:()=>Bt,_default:()=>Q,default:()=>Pt});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),l=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),i=e("../components/components/admin-page/index.tsx"),_=e("../components/components/layout/container/index.tsx"),k=e("../components/components/layout/col/index.tsx"),M=e("../components/components/text/index.tsx"),j=e("../components/components/button/index.tsx"),K=e("../connection/components/use-connection/index.jsx"),L=e("../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),B=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=e.n(B),m=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function N({slug:s}){const{recordEvent:g}=(0,m.Z)();return{onClickGoBack:(0,a.useCallback)(x=>{s&&g("jetpack_myjetpack_product_interstitial_back_link_click",{product:s}),document.referrer.includes(window.location.host)&&(x.preventDefault(),history.back())},[g,s])}}var S=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),f=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),v=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),C=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),D=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const A=e.p+"static/media/boost.a5413748.png",w=e.p+"static/media/crm.7e7684ae.png",V=e.p+"static/media/extras.26daf365.png";var F=e("../components/tools/jp-redirect/index.ts");const Z=e.p+"static/media/jetpack-ai.1a265a19.png";var z=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(z),q=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss"),U={};U.insert="head",U.singleton=!1;var I=G()(q.Z,U);const c=q.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const E=r.__;function O({onClickGoBack:s=()=>{}}){const g=E("Do you need more requests for Jetpack AI Assistant?","jetpack-my-jetpack"),W=E("Allow us to assist you in discovering the optimal plan tailored to your requirements, ensuring you can continue using the most advanced AI technology Jetpack has to offer.","jetpack-my-jetpack"),x=(0,F.Z)("jetpack-ai-tiers-more-requests-contact"),{recordEvent:P}=(0,m.Z)(),re=(0,a.useCallback)(()=>{P("jetpack_ai_upgrade_contact_us",{placement:"insterstitial"})},[P]);return(0,t.jsx)(i.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(_.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsx)(k.Z,{className:c["product-interstitial__header"],children:(0,t.jsx)(v.Z,{onClick:s,reload:!1})}),(0,t.jsx)(k.Z,{children:(0,t.jsxs)(_.Z,{className:c.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(k.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)("div",{className:u()(c.card),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(M.H3,{children:g}),(0,t.jsx)(M.ZP,{mb:3,children:W}),(0,t.jsxs)("div",{className:c["buttons-row"],children:[(0,t.jsx)(j.Z,{href:x,onClick:re,children:E("Contact Us","jetpack-my-jetpack")}),(0,t.jsx)(o.rU,{to:"/",onClick:s,children:(0,t.jsx)(j.Z,{variant:"secondary",children:E("Back","jetpack-my-jetpack")})})]})]})})}),(0,t.jsx)(k.Z,{sm:4,md:4,lg:5,className:u()(c.imageContainer,c.aiImageContainer),children:(0,t.jsx)("img",{src:Z,alt:"Jetpack AI"})})]})})]})})}O.displayName="JetpackAIInterstitialMoreRequests",O.__docgenInfo={description:`JetpackAIInterstitialMoreRequests component

@param {object} props                 - Component props.
@param {Function} props.onClickGoBack - onClick handler for the "Back" button.
@returns {object}                       JetpackAIInterstitialMoreRequests react component.`,methods:[],displayName:"JetpackAIInterstitialMoreRequests",props:{onClickGoBack:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const ke=e.p+"static/media/search.f9756bd9.png",ue=e.p+"static/media/social.e3fb80b2.png",ge=e.p+"static/media/stats.98023808.png";var ie=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),de={};de.insert="head",de.singleton=!1;var Se=G()(ie.Z,de);const T=ie.Z.locals||{},xe=e.p+"static/media/videopress.9591093a.png",J=r.__;function h({bundle:s,existingLicenseKeyUrl:g="admin.php?page=my-jetpack#/add-license",installsPlugin:W=!1,slug:x,supportingInfo:P,preferProductName:re=!1,children:ve=null,imageContainerClassName:_e="",ctaButtonLabel:Pe=null,hideTOS:be=!1,quantity:pe=null,directCheckout:ut=!1,highlightLastFeature:mt=!1}){const{activate:_t,detail:St}=(0,f.i)(x),{isUpgradableByBundle:Be,tiers:jt,pricingForUi:ce}=St,{recordEvent:le}=(0,m.Z)(),{onClickGoBack:Ct}=N({slug:x});(0,a.useEffect)(()=>{le("jetpack_myjetpack_product_interstitial_view",{product:x})},[le,x]);const je=(0,a.useCallback)((b=!1)=>{var d,$;return b?"":x==="crm"?"jetpack-crm":($=(d=ce==null?void 0:ce.tiers)==null?void 0:d.upgraded)!=null&&$.wpcomProductSlug?ce.tiers.upgraded.wpcomProductSlug:ce.wpcomProductSlug},[x,ce]),ht=(0,a.useCallback)((b=!1,d=null)=>{le("jetpack_myjetpack_product_interstitial_add_link_click",{product:d!=null?d:x,productSlug:je(b)})},[le,x,je]),Et=(0,a.useCallback)((b=!1)=>{le("jetpack_myjetpack_product_interstitial_add_link_click",{product:s,productSlug:je(b)})},[le,s,je]),kt=(0,S.Z)("/"),he=(0,a.useCallback)((b,d,$)=>{if(d!=null&&d.isBundle||ut){b==null||b();return}_t().finally(()=>{var yt,ft,Rt,It,vt;const gt=d==null?void 0:d.postActivationUrl,xt=$?(yt=d==null?void 0:d.hasRequiredTier)==null?void 0:yt[$]:d==null?void 0:d.hasRequiredPlan,Tt=!($?(It=(Rt=(ft=d==null?void 0:d.pricingForUi)==null?void 0:ft.tiers)==null?void 0:Rt[$])==null?void 0:It.isFree:(vt=d==null?void 0:d.pricingForUi)==null?void 0:vt.isFree)&&!xt;if(d.pluginSlug==="zero-bs-crm"&&!xt){window.location.href="https://jetpackcrm.com/pricing/";return}if(!Tt){if(gt){window.location.href=gt;return}return kt()}b==null||b()})},[ut,_t,kt]);return(0,t.jsx)(i.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(_.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(k.Z,{className:T["product-interstitial__header"],children:[(0,t.jsx)(v.Z,{onClick:Ct}),g&&(0,t.jsx)(M.ZP,{variant:"body-small",children:(0,L.Z)(J("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(j.Z,{className:T["product-interstitial__license-activation-link"],href:g,variant:"link"})})})]}),(0,t.jsx)(k.Z,{children:jt&&jt.length?(0,t.jsx)(D.Z,{slug:x,clickHandler:he,onProductButtonClick:he,trackProductButtonClick:ht}):(0,t.jsxs)(_.Z,{className:Be?null:T.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(k.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(C.Z,{slug:x,trackButtonClick:ht,onClick:W?he:void 0,className:Be?T.container:null,supportingInfo:P,preferProductName:re,ctaButtonLabel:Pe,hideTOS:be,quantity:pe,highlightLastFeature:mt})}),(0,t.jsx)(k.Z,{sm:4,md:4,lg:5,className:u()(T.imageContainer,_e),children:s?(0,t.jsx)(C.Z,{slug:s,trackButtonClick:Et,onClick:he,className:Be?T.container:null,quantity:pe,highlightLastFeature:mt}):ve})]})})]})})}h.displayName="ProductInterstitial";function X(){const s="anti-spam",{detail:g}=(0,f.i)(s),{isPluginActive:W}=g;return(0,t.jsx)(h,{slug:s,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:W?"admin.php?page=akismet-key-config":null,preferProductName:!0})}X.displayName="AntiSpamInterstitial";function H(){return(0,t.jsx)(h,{slug:"backup",installsPlugin:!0,bundle:"security"})}H.displayName="BackupInterstitial";function y(){return(0,t.jsx)(h,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:A,alt:"Boost"})})}y.displayName="BoostInterstitial";function me(){return(0,t.jsx)(h,{slug:"creator",installsPlugin:!0})}me.displayName="CreatorInterstitial";function ye(){return(0,t.jsx)(h,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:w,alt:"CRM"})})}ye.displayName="CRMInterstitial";function Ce(){return(0,t.jsx)(h,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:V,alt:"Extras"})})}Ce.displayName="ExtrasInterstitial";function Ee(){var pe;const s="jetpack-ai",{detail:g}=(0,f.i)(s),{onClickGoBack:W}=N({slug:s}),{isRegistered:x}=(0,K.Z)(),P=((pe=g==null?void 0:g["ai-assistant-feature"])==null?void 0:pe["next-tier"])||null;if(x&&!P)return(0,t.jsx)(O,{onClickGoBack:W});const{hasRequiredPlan:re}=g,ve=re?J("Upgrade Jetpack AI","jetpack-my-jetpack"):null,_e=x?P==null?void 0:P.value:100,Pe=_e!==1?_e:null,be=(P==null?void 0:P.value)!==1;return(0,t.jsx)(h,{slug:"jetpack-ai",installsPlugin:!0,imageContainerClassName:T.aiImageContainer,ctaButtonLabel:ve,hideTOS:!0,quantity:Pe,directCheckout:re,highlightLastFeature:be,children:(0,t.jsx)("img",{src:Z,alt:"Jetpack AI"})})}Ee.displayName="JetpackAIInterstitial";function Te(){return(0,t.jsx)(h,{slug:"protect",installsPlugin:!0})}Te.displayName="ProtectInterstitial";function fe(){return(0,t.jsx)(h,{slug:"scan",installsPlugin:!0,bundle:"security"})}fe.displayName="ScanInterstitial";function Me(){return(0,t.jsx)(h,{slug:"social",installsPlugin:!0,children:(0,t.jsx)("img",{src:ue,alt:J("Image displaying logos of social media platforms supported by Jetpack Social.","jetpack-my-jetpack")})})}Me.displayName="SocialInterstitial";function Re(){var g;const{detail:s}=(0,f.i)("search");return(0,t.jsx)(h,{slug:"search",installsPlugin:!0,supportingInfo:((g=s==null?void 0:s.pricingForUi)!=null&&g.trialAvailable?J("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+J("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:ke,alt:"Search"})})}Re.displayName="SearchInterstitial";function Le(){return(0,t.jsx)(h,{slug:"stats",directCheckout:!0,installsPlugin:!0,ctaButtonLabel:J("Get Stats","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:ge,alt:J("Illustration showing the Stats feature, highlighting important statistics for your site.","jetpack-my-jetpack")})})}Le.displayName="StatsInterstitial";function Ie(){return(0,t.jsx)(h,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:xe,alt:"VideoPress"})})}Ie.displayName="VideoPressInterstitial",h.__docgenInfo={description:`Product Interstitial component.

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

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},y.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},me.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},ye.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},Ce.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},Ee.__docgenInfo={description:`JetpackAIInterstitial component

@returns {object} JetpackAIInterstitial react component.`,methods:[],displayName:"JetpackAIInterstitial"},Te.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},fe.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},Me.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},Re.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},Le.__docgenInfo={description:`StatsInterstitial component

@returns {object} StatsInterstitial react component.`,methods:[],displayName:"StatsInterstitial"},Ie.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var Mt=`/* eslint-disable react/react-in-jsx-scope */
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
`,Lt={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const Pt={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:h},bt={},De=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(H,{...s})})})});De.displayName="DefaultBackupDetailCard";const Q=De.bind({});Q.parameters={},Q.args=bt;const Ae=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(X,{...s})})})});Ae.displayName="AntiSpamTemplate";const ee=Ae.bind({});ee.parameters={mockData:(0,l.TN)("anti-spam")};const Oe=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(H,{...s})})})});Oe.displayName="BackupTemplate";const te=Oe.bind({});te.parameters={mockData:(0,l.TN)("backup")};const Je=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(y,{...s})})})});Je.displayName="BoostTemplate";const se=Je.bind({});se.parameters={mockData:(0,l.TN)("boost")};const Ne=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(ye,{...s})})})});Ne.displayName="CRMTemplate";const ne=Ne.bind({});ne.parameters={mockData:(0,l.TN)("crm")};const we=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(fe,{...s})})})});we.displayName="ScanTemplate";const ae=we.bind({});ae.parameters={};const Ze=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(Re,{...s})})})});Ze.displayName="SearchTemplate";const oe=Ze.bind({});oe.parameters={mockData:(0,l.TN)("search")};const Ue=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(Ie,{...s})})})});Ue.displayName="VideoPressTemplate";const Y=Ue.bind({});Y.storyName="Jetpack VideoPress",Y.parameters={mockData:(0,l.TN)("videopress")},Q.parameters={...Q.parameters,docs:{...(He=Q.parameters)==null?void 0:He.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ke=(We=Q.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}},ee.parameters={...ee.parameters,docs:{...(Ve=ee.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ze=(Fe=ee.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}},te.parameters={...te.parameters,docs:{...(Ge=te.parameters)==null?void 0:Ge.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Qe=(Xe=te.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}},se.parameters={...se.parameters,docs:{...(Ye=se.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(qe=($e=se.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}},ne.parameters={...ne.parameters,docs:{...(et=ne.parameters)==null?void 0:et.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(st=(tt=ne.parameters)==null?void 0:tt.docs)==null?void 0:st.source}}},ae.parameters={...ae.parameters,docs:{...(nt=ae.parameters)==null?void 0:nt.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ot=(at=ae.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}},oe.parameters={...oe.parameters,docs:{...(rt=oe.parameters)==null?void 0:rt.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(lt=(ct=oe.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}},Y.parameters={...Y.parameters,docs:{...(it=Y.parameters)==null?void 0:it.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(pt=(dt=Y.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};const Bt=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(R,p,e)=>{e.d(p,{Z:()=>l});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(R,p,e)=>{e.d(p,{Z:()=>l});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,a.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(R,p,e)=>{e.d(p,{Z:()=>m});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(_),M=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),j={};j.insert="head",j.singleton=!1;var K=k()(M.Z,j);const L=M.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const B=a.__;function u({onClick:N,reload:S}){const f=S?"/?reload=true":"/";return(0,r.jsxs)(i.rU,{to:f,className:L.link,onClick:N,children:[(0,r.jsx)(o.Z,{icon:n.Z,className:L.icon}),B("Go back","jetpack-my-jetpack")]})}u.displayName="GoBackLink",u.defaultProps={onClick:()=>{}};const m=u;u.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(R,p,e)=>{e.d(p,{Z:()=>N});var a=e("../components/components/pricing-table/index.tsx"),o=e("../components/components/product-price/index.tsx"),n=e("../components/components/button/index.tsx"),l=e("../components/components/notice/index.tsx"),i=e("../components/components/text/index.tsx"),_=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),k=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),M=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),j=e.n(M),K=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),L=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const B=k.__,u=({cantInstallPlugin:S,onProductButtonClick:f,detail:v,tier:C,trackProductButtonClick:D})=>{var T;const{siteSuffix:A,myJetpackCheckoutUri:w}=(T=window==null?void 0:window.myJetpackInitialState)!=null?T:{},{featuresByTier:V=[],pricingForUi:{tiers:F},title:Z,postActivationUrl:z}=v,{callToAction:G,currencyCode:q,fullPrice:U,introductoryOffer:I,isFree:c,wpcomProductSlug:t}=F[C],{run:E,hasCheckoutStarted:O}=(0,_.Z)({from:"my-jetpack",productSlug:t,redirectUrl:z.replace(/(^.*\/wp-admin\/)/i,"")||w,connectAfterCheckout:!0,siteSuffix:A,useBlogIdSuffix:!0}),ke=(0,K.useCallback)(()=>{D(c),f==null||f(E,v,C)},[D,f,E,v,C,c]),ue=U?Math.round(U/12*100)/100:null,ge=I!=null&&I.costPerInterval?Math.round(I.costPerInterval/12*100)/100:null,ie=(I==null?void 0:I.intervalUnit)==="month"&&(I==null?void 0:I.intervalCount)===1,de=ie?(0,k.gB)(B("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),ue):B("/month, paid yearly","jetpack-my-jetpack",0),Se=G||(c?B("Start for Free","jetpack-my-jetpack"):(0,k.gB)(B("Get %s","jetpack-my-jetpack"),Z,0));return(0,r.jsxs)(a.oK,{primary:!c,children:[(0,r.jsxs)(a.NE,{children:[c?(0,r.jsx)(o.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,r.jsx)(o.Z,{price:ue,offPrice:ge,legend:de,currency:q,hideDiscountLabel:ie,hidePriceFraction:!0}),(0,r.jsx)(n.Z,{fullWidth:!0,variant:c?"secondary":"primary",onClick:ke,isLoading:O,disabled:O||S,children:Se})]}),V.map((xe,J)=>{const{included:h,description:X,struck_description:H,info:y}=xe.tiers[C],me=H||X?(0,r.jsxs)(r.Fragment,{children:[H?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("del",{children:H})," "]}):null,X?(0,r.jsx)("strong",{children:X}):null]}):null;return(0,r.jsx)(a.kF,{isIncluded:h,label:me,tooltipTitle:y==null?void 0:y.title,tooltipInfo:y!=null&&y.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:y==null?void 0:y.content}}):null,tooltipClassName:y==null?void 0:y.class},J)})]})};u.displayName="ProductDetailTableColumn",u.propTypes={cantInstallPlugin:j().bool.isRequired,onProductButtonClick:j().func.isRequired,detail:j().object.isRequired,tier:j().string.isRequired,trackProductButtonClick:j().func.isRequired};const m=({slug:S,onProductButtonClick:f,trackProductButtonClick:v})=>{var I;const{fileSystemWriteAccess:C}=(I=window==null?void 0:window.myJetpackInitialState)!=null?I:{},{detail:D}=(0,L.i)(S),{description:A,featuresByTier:w=[],pluginSlug:V,status:F,tiers:Z=[],title:z}=D,G=F==="plugin_absent"&&C==="no",q=G&&(0,r.jsx)(l.Z,{level:"error",hideCloseButton:!0,title:(0,r.jsx)(i.ZP,{children:(0,k.gB)(B("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),z)}),actions:[(0,r.jsx)(n.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${V}`,isExternalLink:!0,children:B("Get plugin","jetpack-my-jetpack")})]}),U=(0,K.useMemo)(()=>w.map(c=>{var t,E,O;return{name:c==null?void 0:c.name,tooltipTitle:(t=c==null?void 0:c.info)==null?void 0:t.title,tooltipInfo:(E=c==null?void 0:c.info)!=null&&E.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:(O=c==null?void 0:c.info)==null?void 0:O.content}}):null}}),[w]);return(0,r.jsxs)(r.Fragment,{children:[q,(0,r.jsx)(a.ZP,{title:A,items:U,children:Z.map((c,t)=>(0,r.jsx)(u,{tier:c,detail:D,onProductButtonClick:f,trackProductButtonClick:v,primary:t===0,cantInstallPlugin:G},t))})]})};m.propTypes={slug:j().string.isRequired,onProductButtonClick:j().func.isRequired,trackProductButtonClick:j().func.isRequired};const N=m;m.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(R,p,e)=>{e.d(p,{Z:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function n(l){const i=(0,o.s0)();return(0,a.useCallback)(()=>i(l),[i,l])}},"../components/components/notice/index.tsx":(R,p,e)=>{e.d(p,{Z:()=>f});var a=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),_=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),k=e.n(_),M=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(j),L=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),r={};r.insert="head",r.singleton=!1;var B=K()(L.Z,r);const u=L.Z.locals||{};var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const N=v=>{switch(v){case"error":return a.Z;case"warning":return a.Z;case"info":return o.Z;case"success":return n.Z;default:return a.Z}},S=({level:v,title:C,children:D,actions:A,hideCloseButton:w,onClose:V})=>{const F=k()(u.container,u[`is-${v}`]);return(0,m.jsxs)("div",{className:F,children:[(0,m.jsx)("div",{className:u["icon-wrapper"],children:(0,m.jsx)(l.Z,{icon:N(v),className:u.icon})}),(0,m.jsxs)("div",{className:u["main-content"],children:[(0,m.jsx)("div",{className:u.title,children:C}),D,A&&A.length>0&&(0,m.jsx)("div",{className:u["action-bar"],children:A.map((Z,z)=>(0,m.jsx)("div",{className:u.action,children:Z},z))})]}),!w&&(0,m.jsx)("button",{"aria-label":"close",className:u["close-button"],onClick:V,children:(0,m.jsx)(l.Z,{icon:i.Z})})]})};S.displayName="Notice",S.defaultProps={level:"info",hideCloseButton:!1};const f=S},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(R,p,e)=>{e.d(p,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),i=l()(o());i.push([R.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),i.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const _=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(R,p,e)=>{e.d(p,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),i=l()(o());i.push([R.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),i.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const _=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss":(R,p,e)=>{e.d(p,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),i=l()(o());i.push([R.id,".tIJUUobcN4ksJLmwJvlU{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.L1bniMOysXtzsoauGan8{display:flex;align-items:center}.L1bniMOysXtzsoauGan8 img{-o-object-fit:cover;object-fit:cover;width:100%}.AqT7_if8PnJzi9Kj84yj{background-color:#f9f9f6}.RWnOYLV3pxAbuEpNxasX{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.POPEJ7WuOcjsPM3AXtqF{white-space:nowrap}.POPEJ7WuOcjsPM3AXtqF>span{font-size:var(--font-body-small)}.GLJtdRk1EY4_CuKJtjGZ{background-color:var(--jp-white);height:100%;padding:calc(var(--spacing-base)*8);position:relative}.fmw55E3tELNShHcGJfKN{display:flex;gap:calc(var(--spacing-base)*2)}",""]),i.locals={container:"tIJUUobcN4ksJLmwJvlU",imageContainer:"L1bniMOysXtzsoauGan8",aiImageContainer:"AqT7_if8PnJzi9Kj84yj","product-interstitial__header":"RWnOYLV3pxAbuEpNxasX","product-interstitial__license-activation-link":"POPEJ7WuOcjsPM3AXtqF",card:"GLJtdRk1EY4_CuKJtjGZ","buttons-row":"fmw55E3tELNShHcGJfKN"};const _=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(R,p,e)=>{e.d(p,{Z:()=>_});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),i=l()(o());i.push([R.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),i.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const _=i}}]);})();
