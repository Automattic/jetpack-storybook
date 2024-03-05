"use strict";(()=>{var Tt=(_,o,t)=>{if(!o.has(_))throw TypeError("Cannot "+t)};var i=(_,o,t)=>(Tt(_,o,"read from private field"),t?t.call(_):o.get(_)),F=(_,o,t)=>{if(o.has(_))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(_):o.set(_,t)},z=(_,o,t,n)=>(Tt(_,o,"write to private field"),n?n.call(_,t):o.set(_,t),t);var W=(_,o,t)=>(Tt(_,o,"access private method"),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(_,o,t)=>{var Jt,Zt,Wt,Ht,Kt,Ft,Vt,zt,Qt,Gt,Xt,Yt,$t,qt,te,ee,se,ne,oe,ae,re,ie,ce,le;t.r(o),t.d(o,{JetpackAntiSpam:()=>_t,JetpackBackup:()=>ht,JetpackBoost:()=>gt,JetpackCRM:()=>kt,JetpackScan:()=>jt,JetpackSearch:()=>yt,JetpackVideoPress:()=>ut,__namedExportsOrder:()=>Se,_default:()=>tt,default:()=>S});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),r=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),h=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),k=t("../components/components/admin-page/index.tsx"),v=t("../components/components/layout/container/index.tsx"),C=t("../components/components/layout/col/index.tsx"),N=t("../components/components/text/index.tsx"),R=t("../components/components/button/index.tsx"),U=t("../../../node_modules/.pnpm/@wordpress+element@5.29.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),L=t("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),x=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=t.n(x),c=t("../../packages/my-jetpack/_inc/data/products/use-activate.ts"),f=t("../../packages/my-jetpack/_inc/data/products/use-product.ts"),B=t("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function Y({slug:g}){const{recordEvent:X}=(0,B.Z)();return{onClickGoBack:(0,n.useCallback)(w=>{g&&X("jetpack_myjetpack_product_interstitial_back_link_click",{product:g}),document.referrer.includes(window.location.host)&&(w.preventDefault(),history.back())},[X,g])}}var H=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),P=t("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),E=t("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),I=t("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const b=t.p+"static/media/boost.a5413748.png",O=t.p+"static/media/crm.7e7684ae.png",ct=t.p+"static/media/extras.26daf365.png",A=t.p+"static/media/search.f9756bd9.png",lt=t.p+"static/media/social.e3fb80b2.png",Q=t.p+"static/media/stats.98023808.png";var V=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=t.n(V),p=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),a={};a.insert="head",a.singleton=!1;var T=e()(p.Z,a);const j=p.Z.locals||{},u=t.p+"static/media/videopress.9591093a.png";var s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const M=L.__;function y({bundle:g,existingLicenseKeyUrl:X="admin.php?page=my-jetpack#/add-license",installsPlugin:Pt=!1,slug:w,supportingInfo:Be,preferProductName:Ce=!1,children:Ee=null,imageContainerClassName:Te="",ctaButtonLabel:Me=null,hideTOS:De=!1,quantity:de=null,directCheckout:pe=!1,highlightLastFeature:ue=!1}){var je;const{detail:Le}=(0,f.Z)(w),{activate:me,isPending:_e}=(0,c.Z)(w),{isUpgradableByBundle:Ct,tiers:he,pricingForUi:ft}=Le,{recordEvent:xt}=(0,B.Z)(),{onClickGoBack:Oe}=Y({slug:w}),{myJetpackCheckoutUri:Et}=(je=window==null?void 0:window.myJetpackInitialState)!=null?je:{};(0,n.useEffect)(()=>{xt("jetpack_myjetpack_product_interstitial_view",{product:w})},[xt,w]);const It=(0,n.useCallback)((K=!1)=>{var m,mt;return K?"":w==="crm"?"jetpack-crm":(mt=(m=ft==null?void 0:ft.tiers)==null?void 0:m.upgraded)!=null&&mt.wpcomProductSlug?ft.tiers.upgraded.wpcomProductSlug:ft.wpcomProductSlug},[w,ft]),ge=(0,n.useCallback)((K=!1,m=null)=>{xt("jetpack_myjetpack_product_interstitial_add_link_click",{product:m!=null?m:w,productSlug:It(K)})},[xt,w,It]),Ae=(0,n.useCallback)((K=!1)=>{xt("jetpack_myjetpack_product_interstitial_add_link_click",{product:g,productSlug:It(K)})},[xt,g,It]),ke=(0,H.Z)("/"),bt=(0,n.useCallback)((K,m,mt)=>{let ye=m!=null&&m.postCheckoutUrl?m==null?void 0:m.postCheckoutUrl:Et;if(m!=null&&m.isBundle||pe){K==null||K();return}me({productId:w},{onSettled:({productId:St})=>{var Re,ve,Pe,Ie,be;ye=St!=null&&St.post_checkout_url?St.post_checkout_url:Et;const fe=m==null?void 0:m.postActivationUrl,xe=mt?(Re=m==null?void 0:m.hasRequiredTier)==null?void 0:Re[mt]:m==null?void 0:m.hasRequiredPlan,we=!(mt?(Ie=(Pe=(ve=m==null?void 0:m.pricingForUi)==null?void 0:ve.tiers)==null?void 0:Pe[mt])==null?void 0:Ie.isFree:(be=m==null?void 0:m.pricingForUi)==null?void 0:be.isFree)&&!xe;if(m.pluginSlug==="zero-bs-crm"&&!xe){window.location.href="https://jetpackcrm.com/pricing/";return}if(!we){if(fe){window.location.href=fe;return}return ke()}K==null||K(null,ye)}})},[pe,me,ke,w,Et]);return(0,s.jsx)(k.Z,{showHeader:!1,showBackground:!1,children:(0,s.jsxs)(v.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,s.jsxs)(C.Z,{className:j["product-interstitial__header"],children:[(0,s.jsx)(P.Z,{onClick:Oe}),X&&(0,s.jsx)(N.ZP,{variant:"body-small",children:(0,U.Z)(M("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,s.jsx)(R.Z,{className:j["product-interstitial__license-activation-link"],href:X,variant:"link"})})})]}),(0,s.jsx)(C.Z,{children:he&&he.length?(0,s.jsx)(I.Z,{slug:w,clickHandler:bt,onProductButtonClick:bt,trackProductButtonClick:ge}):(0,s.jsxs)(v.Z,{className:Ct?null:j.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,s.jsx)(C.Z,{sm:4,md:4,lg:7,children:(0,s.jsx)(E.Z,{slug:w,trackButtonClick:ge,onClick:Pt?bt:void 0,className:Ct?j.container:null,supportingInfo:Be,preferProductName:Ce,ctaButtonLabel:Me,hideTOS:De,quantity:de,highlightLastFeature:ue,isFetching:_e})}),(0,s.jsx)(C.Z,{sm:4,md:4,lg:5,className:d()(j.imageContainer,Te),children:g?(0,s.jsx)(E.Z,{slug:g,trackButtonClick:Ae,onClick:bt,className:Ct?j.container:null,quantity:de,highlightLastFeature:ue,isFetching:_e}):Ee})]})})]})})}y.displayName="ProductInterstitial";function J(){const g="anti-spam",{detail:X}=(0,f.Z)(g),{isPluginActive:Pt}=X;return(0,s.jsx)(y,{slug:g,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:Pt?"admin.php?page=akismet-key-config":null,preferProductName:!0})}J.displayName="AntiSpamInterstitial";function Z(){return(0,s.jsx)(y,{slug:"backup",installsPlugin:!0,bundle:"security"})}Z.displayName="BackupInterstitial";function $(){return(0,s.jsx)(y,{slug:"boost",installsPlugin:!0,children:(0,s.jsx)("img",{src:b,alt:"Boost"})})}$.displayName="BoostInterstitial";function et(){return(0,s.jsx)(y,{slug:"creator",installsPlugin:!0})}et.displayName="CreatorInterstitial";function st(){return(0,s.jsx)(y,{slug:"crm",installsPlugin:!0,children:(0,s.jsx)("img",{src:O,alt:"CRM"})})}st.displayName="CRMInterstitial";function nt(){return(0,s.jsx)(y,{slug:"extras",installsPlugin:!0,children:(0,s.jsx)("img",{src:ct,alt:"Extras"})})}nt.displayName="ExtrasInterstitial";function dt(){return(0,s.jsx)(y,{slug:"protect",installsPlugin:!0})}dt.displayName="ProtectInterstitial";function q(){return(0,s.jsx)(y,{slug:"scan",installsPlugin:!0,bundle:"security"})}q.displayName="ScanInterstitial";function pt(){return(0,s.jsx)(y,{slug:"social",installsPlugin:!0,children:(0,s.jsx)("img",{src:lt,alt:M("Image displaying logos of social media platforms supported by Jetpack Social.","jetpack-my-jetpack")})})}pt.displayName="SocialInterstitial";function ot(){var X;const{detail:g}=(0,f.Z)("search");return(0,s.jsx)(y,{slug:"search",installsPlugin:!0,supportingInfo:((X=g==null?void 0:g.pricingForUi)!=null&&X.trialAvailable?M("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+M("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,s.jsx)("img",{src:A,alt:"Search"})})}ot.displayName="SearchInterstitial";function at(){return(0,s.jsx)(y,{slug:"stats",directCheckout:!0,installsPlugin:!0,ctaButtonLabel:M("Get Stats","jetpack-my-jetpack"),children:(0,s.jsx)("img",{src:Q,alt:M("Illustration showing the Stats feature, highlighting important statistics for your site.","jetpack-my-jetpack")})})}at.displayName="StatsInterstitial";function rt(){return(0,s.jsx)(y,{slug:"videopress",installsPlugin:!0,children:(0,s.jsx)("img",{src:u,alt:"VideoPress"})})}rt.displayName="VideoPressInterstitial",y.__docgenInfo={description:`Product Interstitial component.

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
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1},highlightLastFeature:{defaultValue:{value:"false",computed:!1},required:!1}}},J.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},Z.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},$.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},et.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},st.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},nt.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},dt.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},q.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},pt.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},ot.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},at.__docgenInfo={description:`StatsInterstitial component

@returns {object} StatsInterstitial react component.`,methods:[],displayName:"StatsInterstitial"},rt.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var Rt=`/* eslint-disable react/react-in-jsx-scope */
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
`,vt={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const S={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:y},G={},D=g=>(0,s.jsx)(l.UT,{children:(0,s.jsx)(r.Z5,{children:(0,s.jsx)(r.AW,{path:"/",element:(0,s.jsx)(Z,{...g})})})});D.displayName="DefaultBackupDetailCard";const tt=D.bind({});tt.parameters={},tt.args=G;const Dt=g=>(0,s.jsx)(l.UT,{children:(0,s.jsx)(r.Z5,{children:(0,s.jsx)(r.AW,{path:"/",element:(0,s.jsx)(J,{...g})})})});Dt.displayName="AntiSpamTemplate";const _t=Dt.bind({});_t.parameters={mockData:(0,h.TN)("anti-spam")};const Lt=g=>(0,s.jsx)(l.UT,{children:(0,s.jsx)(r.Z5,{children:(0,s.jsx)(r.AW,{path:"/",element:(0,s.jsx)(Z,{...g})})})});Lt.displayName="BackupTemplate";const ht=Lt.bind({});ht.parameters={mockData:(0,h.TN)("backup")};const Ot=g=>(0,s.jsx)(l.UT,{children:(0,s.jsx)(r.Z5,{children:(0,s.jsx)(r.AW,{path:"/",element:(0,s.jsx)($,{...g})})})});Ot.displayName="BoostTemplate";const gt=Ot.bind({});gt.parameters={mockData:(0,h.TN)("boost")};const At=g=>(0,s.jsx)(l.UT,{children:(0,s.jsx)(r.Z5,{children:(0,s.jsx)(r.AW,{path:"/",element:(0,s.jsx)(st,{...g})})})});At.displayName="CRMTemplate";const kt=At.bind({});kt.parameters={mockData:(0,h.TN)("crm")};const wt=g=>(0,s.jsx)(l.UT,{children:(0,s.jsx)(r.Z5,{children:(0,s.jsx)(r.AW,{path:"/",element:(0,s.jsx)(q,{...g})})})});wt.displayName="ScanTemplate";const jt=wt.bind({});jt.parameters={};const Nt=g=>(0,s.jsx)(l.UT,{children:(0,s.jsx)(r.Z5,{children:(0,s.jsx)(r.AW,{path:"/",element:(0,s.jsx)(ot,{...g})})})});Nt.displayName="SearchTemplate";const yt=Nt.bind({});yt.parameters={mockData:(0,h.TN)("search")};const Ut=g=>(0,s.jsx)(l.UT,{children:(0,s.jsx)(r.Z5,{children:(0,s.jsx)(r.AW,{path:"/",element:(0,s.jsx)(rt,{...g})})})});Ut.displayName="VideoPressTemplate";const ut=Ut.bind({});ut.storyName="Jetpack VideoPress",ut.parameters={mockData:(0,h.TN)("videopress")},tt.parameters={...tt.parameters,docs:{...(Jt=tt.parameters)==null?void 0:Jt.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Wt=(Zt=tt.parameters)==null?void 0:Zt.docs)==null?void 0:Wt.source}}},_t.parameters={..._t.parameters,docs:{...(Ht=_t.parameters)==null?void 0:Ht.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ft=(Kt=_t.parameters)==null?void 0:Kt.docs)==null?void 0:Ft.source}}},ht.parameters={...ht.parameters,docs:{...(Vt=ht.parameters)==null?void 0:Vt.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Qt=(zt=ht.parameters)==null?void 0:zt.docs)==null?void 0:Qt.source}}},gt.parameters={...gt.parameters,docs:{...(Gt=gt.parameters)==null?void 0:Gt.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Yt=(Xt=gt.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}},kt.parameters={...kt.parameters,docs:{...($t=kt.parameters)==null?void 0:$t.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(te=(qt=kt.parameters)==null?void 0:qt.docs)==null?void 0:te.source}}},jt.parameters={...jt.parameters,docs:{...(ee=jt.parameters)==null?void 0:ee.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ne=(se=jt.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}},yt.parameters={...yt.parameters,docs:{...(oe=yt.parameters)==null?void 0:oe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(re=(ae=yt.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}},ut.parameters={...ut.parameters,docs:{...(ie=ut.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(le=(ce=ut.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Se=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js":(_,o,t)=>{var x,d,c,f,B,it,H,P,E,I,b,O,Bt,A,Mt,Q;t.d(o,{D:()=>U});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=(H=class extends null{constructor(e){super();F(this,B);F(this,x,void 0);F(this,d,void 0);F(this,c,void 0);F(this,f,void 0);this.mutationId=e.mutationId,z(this,d,e.defaultOptions),z(this,c,e.mutationCache),z(this,x,[]),this.state=e.state||r(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...i(this,d),...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){i(this,x).includes(e)||(i(this,x).push(e),this.clearGcTimeout(),i(this,c).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){z(this,x,i(this,x).filter(p=>p!==e)),this.scheduleGc(),i(this,c).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){i(this,x).length||(this.state.status==="pending"?this.scheduleGc():i(this,c).remove(this))}continue(){var e,p;return(p=(e=i(this,f))==null?void 0:e.continue())!=null?p:this.execute(this.state.variables)}async execute(e){var T,j,u,s,M,y,J,Z,$,et,st,nt,dt,q,pt,ot,at,rt,Rt,vt;const p=()=>{var S;return z(this,f,createRetryer({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(G,D)=>{W(this,B,it).call(this,{type:"failed",failureCount:G,error:D})},onPause:()=>{W(this,B,it).call(this,{type:"pause"})},onContinue:()=>{W(this,B,it).call(this,{type:"continue"})},retry:(S=this.options.retry)!=null?S:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),i(this,f).promise},a=this.state.status==="pending";try{if(!a){W(this,B,it).call(this,{type:"pending",variables:e}),await((j=(T=i(this,c).config).onMutate)==null?void 0:j.call(T,e,this));const G=await((s=(u=this.options).onMutate)==null?void 0:s.call(u,e));G!==this.state.context&&W(this,B,it).call(this,{type:"pending",context:G,variables:e})}const S=await p();return await((y=(M=i(this,c).config).onSuccess)==null?void 0:y.call(M,S,e,this.state.context,this)),await((Z=(J=this.options).onSuccess)==null?void 0:Z.call(J,S,e,this.state.context)),await((et=($=i(this,c).config).onSettled)==null?void 0:et.call($,S,null,this.state.variables,this.state.context,this)),await((nt=(st=this.options).onSettled)==null?void 0:nt.call(st,S,null,e,this.state.context)),W(this,B,it).call(this,{type:"success",data:S}),S}catch(S){try{throw await((q=(dt=i(this,c).config).onError)==null?void 0:q.call(dt,S,e,this.state.context,this)),await((ot=(pt=this.options).onError)==null?void 0:ot.call(pt,S,e,this.state.context)),await((rt=(at=i(this,c).config).onSettled)==null?void 0:rt.call(at,void 0,S,this.state.variables,this.state.context,this)),await((vt=(Rt=this.options).onSettled)==null?void 0:vt.call(Rt,void 0,S,e,this.state.context)),S}finally{W(this,B,it).call(this,{type:"error",error:S})}}}},x=new WeakMap,d=new WeakMap,c=new WeakMap,f=new WeakMap,B=new WeakSet,it=function(e){const p=a=>{switch(e.type){case"failed":return{...a,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!canFetch(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...a,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:e.error,failureCount:a.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=p(this.state),notifyManager.batch(()=>{i(this,x).forEach(a=>{a.onMutationUpdate(e)}),i(this,c).notify({mutation:this,type:"updated",action:e})})},H);function r(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var h=t("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js"),k=t("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/subscribable.js"),v=t("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/utils.js"),C=(Q=class extends k.l{constructor(e,p){super();F(this,O);F(this,A);F(this,P,void 0);F(this,E,void 0);F(this,I,void 0);F(this,b,void 0);z(this,P,e),this.setOptions(p),this.bindMethods(),W(this,O,Bt).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var a;const p=this.options;this.options=i(this,P).defaultMutationOptions(e),(0,v.VS)(p,this.options)||i(this,P).getMutationCache().notify({type:"observerOptionsUpdated",mutation:i(this,I),observer:this}),p!=null&&p.mutationKey&&this.options.mutationKey&&(0,v.Ym)(p.mutationKey)!==(0,v.Ym)(this.options.mutationKey)?this.reset():(a=i(this,I))==null||a.setOptions(this.options)}onUnsubscribe(){var e;this.hasListeners()||(e=i(this,I))==null||e.removeObserver(this)}onMutationUpdate(e){W(this,O,Bt).call(this),W(this,A,Mt).call(this,e)}getCurrentResult(){return i(this,E)}reset(){var e;(e=i(this,I))==null||e.removeObserver(this),z(this,I,void 0),W(this,O,Bt).call(this),W(this,A,Mt).call(this)}mutate(e,p){var a;return z(this,b,p),(a=i(this,I))==null||a.removeObserver(this),z(this,I,i(this,P).getMutationCache().build(i(this,P),this.options)),i(this,I).addObserver(this),i(this,I).execute(e)}},P=new WeakMap,E=new WeakMap,I=new WeakMap,b=new WeakMap,O=new WeakSet,Bt=function(){var p,a;const e=(a=(p=i(this,I))==null?void 0:p.state)!=null?a:r();z(this,E,{...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset})},A=new WeakSet,Mt=function(e){h.V.batch(()=>{var p,a,T,j,u,s,M,y;if(i(this,b)&&this.hasListeners()){const J=i(this,E).variables,Z=i(this,E).context;(e==null?void 0:e.type)==="success"?((a=(p=i(this,b)).onSuccess)==null||a.call(p,e.data,J,Z),(j=(T=i(this,b)).onSettled)==null||j.call(T,e.data,null,J,Z)):(e==null?void 0:e.type)==="error"&&((s=(u=i(this,b)).onError)==null||s.call(u,e.error,J,Z),(y=(M=i(this,b)).onSettled)==null||y.call(M,void 0,e.error,J,Z))}this.listeners.forEach(J=>{J(i(this,E))})})},Q),N=t("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),R=t("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/utils.js");function U(V,e){const p=(0,N.NL)(e),[a]=n.useState(()=>new C(p,V));n.useEffect(()=>{a.setOptions(V)},[a,V]);const T=n.useSyncExternalStore(n.useCallback(u=>a.subscribe(h.V.batchCalls(u)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),j=n.useCallback((u,s)=>{a.mutate(u,s).catch(L)},[a]);if(T.error&&(0,R.L)(a.options.throwOnError,[T.error]))throw T.error;return{...T,mutate:j,mutateAsync:T.mutate}}function L(){}},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(_,o,t)=>{t.d(o,{Z:()=>h});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,n.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(l.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(_,o,t)=>{t.d(o,{Z:()=>h});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,n.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(l.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(_,o,t)=>{t.d(o,{Z:()=>f});var n=t("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),h=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),v=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=t.n(v),N=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),R={};R.insert="head",R.singleton=!1;var U=C()(N.Z,R);const L=N.Z.locals||{};var x=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=n.__;function c({onClick:B,reload:Y}){const H=Y?"/?reload=true":"/";return(0,x.jsxs)(k.rU,{to:H,className:L.link,onClick:B,children:[(0,x.jsx)(l.Z,{icon:r.Z,className:L.icon}),d("Go back","jetpack-my-jetpack")]})}c.displayName="GoBackLink",c.defaultProps={onClick:()=>{}};const f=c;c.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(_,o,t)=>{t.d(o,{Z:()=>Y});var n=t("../components/components/pricing-table/index.tsx"),l=t("../components/components/product-price/index.tsx"),r=t("../components/components/button/index.tsx"),h=t("../components/components/notice/index.tsx"),k=t("../components/components/text/index.tsx"),v=t("../connection/hooks/use-product-checkout-workflow/index.jsx"),C=t("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),N=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),R=t.n(N),U=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),L=t("../../packages/my-jetpack/_inc/data/products/use-product.ts"),x=t("../../packages/my-jetpack/_inc/hooks/use-redirect-to-referrer/index.js"),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c=C.__,f=({cantInstallPlugin:H,onProductButtonClick:P,detail:E,isFetching:I,tier:b,trackProductButtonClick:O})=>{var at;const{siteSuffix:ct,myJetpackCheckoutUri:A}=(at=window==null?void 0:window.myJetpackInitialState)!=null?at:{},{featuresByTier:lt=[],pricingForUi:{tiers:Q},title:V,postCheckoutUrl:e}=E,{callToAction:p,currencyCode:a,fullPrice:T,introductoryOffer:j,isFree:u,wpcomProductSlug:s,quantity:M=null}=Q[b],y=(0,x.a)(),Z=(0,U.useCallback)(()=>e||y||A,[e,y,A])(),{run:$,hasCheckoutStarted:et}=(0,v.Z)({from:"my-jetpack",productSlug:s,redirectUrl:Z,connectAfterCheckout:!0,siteSuffix:ct,useBlogIdSuffix:!0,quantity:M}),st=(0,U.useCallback)(()=>{O(u),P==null||P($,E,b)},[O,P,$,E,b,u]),nt=T?Math.round(T/12*100)/100:null,dt=j!=null&&j.costPerInterval?Math.round(j.costPerInterval/12*100)/100:null,q=(j==null?void 0:j.intervalUnit)==="month"&&(j==null?void 0:j.intervalCount)===1,pt=q?(0,C.gB)(c("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),nt):c("/month, paid yearly","jetpack-my-jetpack",0),ot=p||(u?c("Start for Free","jetpack-my-jetpack"):(0,C.gB)(c("Get %s","jetpack-my-jetpack"),V,0));return(0,d.jsxs)(n.oK,{primary:!u,children:[(0,d.jsxs)(n.NE,{children:[u?(0,d.jsx)(l.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,d.jsx)(l.Z,{price:nt,offPrice:dt,legend:pt,currency:a,hideDiscountLabel:q,hidePriceFraction:!0}),(0,d.jsx)(r.Z,{fullWidth:!0,variant:u?"secondary":"primary",onClick:st,isLoading:et||I,disabled:et||H||I,children:ot})]}),lt.map((rt,Rt)=>{const{included:vt,description:S,struck_description:G,info:D}=rt.tiers[b],tt=G||S?(0,d.jsxs)(d.Fragment,{children:[G?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("del",{children:G})," "]}):null,S?(0,d.jsx)("strong",{children:S}):null]}):null;return(0,d.jsx)(n.kF,{isIncluded:vt,label:tt,tooltipTitle:D==null?void 0:D.title,tooltipInfo:D!=null&&D.content?(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:D==null?void 0:D.content}}):null,tooltipClassName:D==null?void 0:D.class},Rt)})]})};f.displayName="ProductDetailTableColumn",f.propTypes={cantInstallPlugin:R().bool.isRequired,onProductButtonClick:R().func.isRequired,detail:R().object.isRequired,tier:R().string.isRequired,trackProductButtonClick:R().func.isRequired};const B=({slug:H,onProductButtonClick:P,trackProductButtonClick:E,isFetching:I})=>{var j;const{fileSystemWriteAccess:b}=(j=window==null?void 0:window.myJetpackInitialState)!=null?j:{},{detail:O}=(0,L.Z)(H),{description:ct,featuresByTier:A=[],pluginSlug:lt,status:Q,tiers:V=[],title:e}=O,p=Q==="plugin_absent"&&b==="no",a=p&&(0,d.jsx)(h.Z,{level:"error",hideCloseButton:!0,title:(0,d.jsx)(k.ZP,{children:(0,C.gB)(c("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),e)}),actions:[(0,d.jsx)(r.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${lt}`,isExternalLink:!0,children:c("Get plugin","jetpack-my-jetpack")})]}),T=(0,U.useMemo)(()=>A.map(u=>{var s,M,y;return{name:u==null?void 0:u.name,tooltipTitle:(s=u==null?void 0:u.info)==null?void 0:s.title,tooltipInfo:(M=u==null?void 0:u.info)!=null&&M.content?(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:(y=u==null?void 0:u.info)==null?void 0:y.content}}):null}}),[A]);return(0,d.jsxs)(d.Fragment,{children:[a,(0,d.jsx)(n.ZP,{title:ct,items:T,children:V.map((u,s)=>(0,d.jsx)(f,{tier:u,detail:O,isFetching:I,onProductButtonClick:P,trackProductButtonClick:E,primary:s===0,cantInstallPlugin:p},s))})]})};B.propTypes={slug:R().string.isRequired,onProductButtonClick:R().func.isRequired,trackProductButtonClick:R().func.isRequired,isFetching:R().bool.isRequired};const Y=B;B.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@param {boolean}  props.isFetching              - True if there is a pending request to load the product.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0},isFetching:{description:"",type:{name:"bool"},required:!0}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(_,o,t)=>{t.d(o,{Z:()=>r});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function r(h){const k=(0,l.s0)();return(0,n.useCallback)(()=>k(h),[k,h])}},"../components/components/notice/index.tsx":(_,o,t)=>{t.d(o,{Z:()=>H});var n=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),l=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),h=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),k=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),v=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),C=t.n(v),N=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),R=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=t.n(R),L=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),x={};x.insert="head",x.singleton=!1;var d=U()(L.Z,x);const c=L.Z.locals||{};var f=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const B=P=>{switch(P){case"error":return n.Z;case"warning":return n.Z;case"info":return l.Z;case"success":return r.Z;default:return n.Z}},Y=({level:P,title:E,children:I,actions:b,hideCloseButton:O,onClose:ct})=>{const A=C()(c.container,c[`is-${P}`]);return(0,f.jsxs)("div",{className:A,children:[(0,f.jsx)("div",{className:c["icon-wrapper"],children:(0,f.jsx)(h.Z,{icon:B(P),className:c.icon})}),(0,f.jsxs)("div",{className:c["main-content"],children:[(0,f.jsx)("div",{className:c.title,children:E}),I,b&&b.length>0&&(0,f.jsx)("div",{className:c["action-bar"],children:b.map((lt,Q)=>(0,f.jsx)("div",{className:c.action,children:lt},Q))})]}),!O&&(0,f.jsx)("button",{"aria-label":"close",className:c["close-button"],onClick:ct,children:(0,f.jsx)(h.Z,{icon:k.Z})})]})};Y.displayName="Notice",Y.defaultProps={level:"info",hideCloseButton:!1};const H=Y},"../../packages/my-jetpack/_inc/data/products/use-activate.ts":(_,o,t)=>{t.d(o,{Z:()=>C});var n=t("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),l=t("../../packages/my-jetpack/_inc/data/constants.ts"),r=t("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),h=t("../../packages/my-jetpack/_inc/data/products/use-product.ts");const k=n.__,C=N=>{const{detail:R,refetch:U}=(0,h.Z)(N),{mutate:L,isPending:x}=(0,r.Z)("activateProduct",{path:`${l.Jk}/${N}`,method:"POST"},{onSuccess:U},null,(0,n.gB)(k("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),R.name));return{activate:L,isPending:x}}},"../../packages/my-jetpack/_inc/data/use-simple-mutation.ts":(_,o,t)=>{t.d(o,{Z:()=>k});var n=t("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js"),l=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js"),r=t("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const k=(v,C,N,R,U)=>{const L=(0,n.D)({mutationKey:[v,R],mutationFn:()=>(0,l.Z)(C),...N}),{isError:x,isPending:d}=L;return(0,r.o)({infoName:v,isError:!d&&x,overrideMessage:U}),L}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(_,o,t)=>{t.d(o,{Z:()=>v});var n=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(n),r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),h=t.n(r),k=h()(l());k.push([_.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),k.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const v=k},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(_,o,t)=>{t.d(o,{Z:()=>v});var n=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(n),r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),h=t.n(r),k=h()(l());k.push([_.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),k.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const v=k},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(_,o,t)=>{t.d(o,{Z:()=>v});var n=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(n),r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),h=t.n(r),k=h()(l());k.push([_.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),k.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const v=k}}]);})();
