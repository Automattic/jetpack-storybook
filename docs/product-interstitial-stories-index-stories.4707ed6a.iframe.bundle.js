"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(R,p,e)=>{var Ee,De,Me,Le,Ae,Oe,Ne,Je,Ue,we,He,Ze,We,Ke,Ve,Fe,ze,Qe,Ge,Xe,Ye,$e,qe,et;e.r(p),e.d(p,{JetpackAntiSpam:()=>X,JetpackBackup:()=>Y,JetpackBoost:()=>$,JetpackCRM:()=>q,JetpackScan:()=>ee,JetpackSearch:()=>te,JetpackVideoPress:()=>K,__namedExportsOrder:()=>gt,_default:()=>u,default:()=>ye});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),c=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),d=e("../components/components/admin-page/index.tsx"),k=e("../components/components/layout/container/index.tsx"),y=e("../components/components/layout/col/index.tsx"),w=e("../components/components/text/index.tsx"),h=e("../components/components/button/index.tsx"),A=e("../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),C=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),B=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=e.n(B),i=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function _({slug:a}){const{recordEvent:T}=(0,i.Z)();return{onClickGoBack:(0,o.useCallback)(I=>{a&&T("jetpack_myjetpack_product_interstitial_back_link_click",{product:a}),document.referrer.includes(window.location.host)&&(I.preventDefault(),history.back())},[T,a])}}var E=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),v=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),D=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),j=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),M=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const O=e.p+"static/media/boost.a5413748.png",f=e.p+"static/media/crm.7e7684ae.png",N=e.p+"static/media/extras.26daf365.png",H=e.p+"static/media/search.f9756bd9.png",L=e.p+"static/media/social.e3fb80b2.png",Z=e.p+"static/media/stats.98023808.png";var W=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),oe=e.n(W),J=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),U={};U.insert="head",U.singleton=!1;var ue=oe()(J.Z,U);const b=J.Z.locals||{},g=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const x=C.__;function m({bundle:a,existingLicenseKeyUrl:T="admin.php?page=my-jetpack#/add-license",installsPlugin:ke=!1,slug:I,supportingInfo:kt,preferProductName:jt=!1,children:xt=null,imageContainerClassName:yt="",ctaButtonLabel:ft=null,hideTOS:Rt=!1,quantity:tt=null,directCheckout:st=!1,highlightLastFeature:nt=!1}){var ct;const{activate:ot,detail:It}=(0,v.i)(I),{isUpgradableByBundle:fe,tiers:at,pricingForUi:se}=It,{recordEvent:ne}=(0,i.Z)(),{onClickGoBack:Pt}=_({slug:I}),{myJetpackCheckoutUri:Re}=(ct=window==null?void 0:window.myJetpackInitialState)!=null?ct:{};(0,o.useEffect)(()=>{ne("jetpack_myjetpack_product_interstitial_view",{product:I})},[ne,I]);const je=(0,o.useCallback)((P=!1)=>{var n,V;return P?"":I==="crm"?"jetpack-crm":(V=(n=se==null?void 0:se.tiers)==null?void 0:n.upgraded)!=null&&V.wpcomProductSlug?se.tiers.upgraded.wpcomProductSlug:se.wpcomProductSlug},[I,se]),rt=(0,o.useCallback)((P=!1,n=null)=>{ne("jetpack_myjetpack_product_interstitial_add_link_click",{product:n!=null?n:I,productSlug:je(P)})},[ne,I,je]),vt=(0,o.useCallback)((P=!1)=>{ne("jetpack_myjetpack_product_interstitial_add_link_click",{product:a,productSlug:je(P)})},[ne,a,je]),lt=(0,E.Z)("/"),xe=(0,o.useCallback)((P,n,V)=>{let it=n!=null&&n.postCheckoutUrl?n==null?void 0:n.postCheckoutUrl:Re;if(n!=null&&n.isBundle||st){P==null||P();return}ot().then(F=>{it=F!=null&&F.post_checkout_url?F.post_checkout_url:Re}).finally(()=>{var pt,mt,ut,_t,ht;const F=n==null?void 0:n.postActivationUrl,dt=V?(pt=n==null?void 0:n.hasRequiredTier)==null?void 0:pt[V]:n==null?void 0:n.hasRequiredPlan,bt=!(V?(_t=(ut=(mt=n==null?void 0:n.pricingForUi)==null?void 0:mt.tiers)==null?void 0:ut[V])==null?void 0:_t.isFree:(ht=n==null?void 0:n.pricingForUi)==null?void 0:ht.isFree)&&!dt;if(n.pluginSlug==="zero-bs-crm"&&!dt){window.location.href="https://jetpackcrm.com/pricing/";return}if(!bt){if(F){window.location.href=F;return}return lt()}P==null||P(null,it)})},[st,ot,lt,Re]);return(0,t.jsx)(d.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(k.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(y.Z,{className:b["product-interstitial__header"],children:[(0,t.jsx)(D.Z,{onClick:Pt}),T&&(0,t.jsx)(w.ZP,{variant:"body-small",children:(0,A.Z)(x("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(h.Z,{className:b["product-interstitial__license-activation-link"],href:T,variant:"link"})})})]}),(0,t.jsx)(y.Z,{children:at&&at.length?(0,t.jsx)(M.Z,{slug:I,clickHandler:xe,onProductButtonClick:xe,trackProductButtonClick:rt}):(0,t.jsxs)(k.Z,{className:fe?null:b.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(y.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(j.Z,{slug:I,trackButtonClick:rt,onClick:ke?xe:void 0,className:fe?b.container:null,supportingInfo:kt,preferProductName:jt,ctaButtonLabel:ft,hideTOS:Rt,quantity:tt,highlightLastFeature:nt})}),(0,t.jsx)(y.Z,{sm:4,md:4,lg:5,className:l()(b.imageContainer,yt),children:a?(0,t.jsx)(j.Z,{slug:a,trackButtonClick:vt,onClick:xe,className:fe?b.container:null,quantity:tt,highlightLastFeature:nt}):xt})]})})]})})}m.displayName="ProductInterstitial";function S(){const a="anti-spam",{detail:T}=(0,v.i)(a),{isPluginActive:ke}=T;return(0,t.jsx)(m,{slug:a,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:ke?"admin.php?page=akismet-key-config":null,preferProductName:!0})}S.displayName="AntiSpamInterstitial";function ae(){return(0,t.jsx)(m,{slug:"backup",installsPlugin:!0,bundle:"security"})}ae.displayName="BackupInterstitial";function re(){return(0,t.jsx)(m,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:O,alt:"Boost"})})}re.displayName="BoostInterstitial";function le(){return(0,t.jsx)(m,{slug:"creator",installsPlugin:!0})}le.displayName="CreatorInterstitial";function z(){return(0,t.jsx)(m,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:f,alt:"CRM"})})}z.displayName="CRMInterstitial";function _e(){return(0,t.jsx)(m,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:N,alt:"Extras"})})}_e.displayName="ExtrasInterstitial";function ce(){return(0,t.jsx)(m,{slug:"protect",installsPlugin:!0})}ce.displayName="ProtectInterstitial";function ie(){return(0,t.jsx)(m,{slug:"scan",installsPlugin:!0,bundle:"security"})}ie.displayName="ScanInterstitial";function de(){return(0,t.jsx)(m,{slug:"social",installsPlugin:!0,children:(0,t.jsx)("img",{src:L,alt:x("Image displaying logos of social media platforms supported by Jetpack Social.","jetpack-my-jetpack")})})}de.displayName="SocialInterstitial";function pe(){var T;const{detail:a}=(0,v.i)("search");return(0,t.jsx)(m,{slug:"search",installsPlugin:!0,supportingInfo:((T=a==null?void 0:a.pricingForUi)!=null&&T.trialAvailable?x("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+x("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:H,alt:"Search"})})}pe.displayName="SearchInterstitial";function he(){return(0,t.jsx)(m,{slug:"stats",directCheckout:!0,installsPlugin:!0,ctaButtonLabel:x("Get Stats","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:Z,alt:x("Illustration showing the Stats feature, highlighting important statistics for your site.","jetpack-my-jetpack")})})}he.displayName="StatsInterstitial";function Q(){return(0,t.jsx)(m,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:g,alt:"VideoPress"})})}Q.displayName="VideoPressInterstitial",m.__docgenInfo={description:`Product Interstitial component.

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
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1},highlightLastFeature:{defaultValue:{value:"false",computed:!1},required:!1}}},S.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},ae.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},re.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},le.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},z.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},_e.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},ce.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},ie.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},de.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},pe.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},he.__docgenInfo={description:`StatsInterstitial component

@returns {object} StatsInterstitial react component.`,methods:[],displayName:"StatsInterstitial"},Q.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var Ie=`/* eslint-disable react/react-in-jsx-scope */
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
`,Pe={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const ye={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:m},me={},G=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ae,{...a})})})});G.displayName="DefaultBackupDetailCard";const u=G.bind({});u.parameters={},u.args=me;const ge=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(S,{...a})})})});ge.displayName="AntiSpamTemplate";const X=ge.bind({});X.parameters={mockData:(0,c.TN)("anti-spam")};const ve=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ae,{...a})})})});ve.displayName="BackupTemplate";const Y=ve.bind({});Y.parameters={mockData:(0,c.TN)("backup")};const be=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(re,{...a})})})});be.displayName="BoostTemplate";const $=be.bind({});$.parameters={mockData:(0,c.TN)("boost")};const Be=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(z,{...a})})})});Be.displayName="CRMTemplate";const q=Be.bind({});q.parameters={mockData:(0,c.TN)("crm")};const Se=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ie,{...a})})})});Se.displayName="ScanTemplate";const ee=Se.bind({});ee.parameters={};const Te=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(pe,{...a})})})});Te.displayName="SearchTemplate";const te=Te.bind({});te.parameters={mockData:(0,c.TN)("search")};const Ce=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(Q,{...a})})})});Ce.displayName="VideoPressTemplate";const K=Ce.bind({});K.storyName="Jetpack VideoPress",K.parameters={mockData:(0,c.TN)("videopress")},u.parameters={...u.parameters,docs:{...(Ee=u.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Me=(De=u.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}},X.parameters={...X.parameters,docs:{...(Le=X.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Oe=(Ae=X.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}},Y.parameters={...Y.parameters,docs:{...(Ne=Y.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ue=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}},$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ze=(He=$.parameters)==null?void 0:He.docs)==null?void 0:Ze.source}}},q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ve=(Ke=q.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}},ee.parameters={...ee.parameters,docs:{...(Fe=ee.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Qe=(ze=ee.parameters)==null?void 0:ze.docs)==null?void 0:Qe.source}}},te.parameters={...te.parameters,docs:{...(Ge=te.parameters)==null?void 0:Ge.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ye=(Xe=te.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}},K.parameters={...K.parameters,docs:{...($e=K.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(et=(qe=K.parameters)==null?void 0:qe.docs)==null?void 0:et.source}}};const gt=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(R,p,e)=>{e.d(p,{Z:()=>c});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(R,p,e)=>{e.d(p,{Z:()=>c});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,o.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(r.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(R,p,e)=>{e.d(p,{Z:()=>_});var o=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),k=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(k),w=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),h={};h.insert="head",h.singleton=!1;var A=y()(w.Z,h);const C=w.Z.locals||{};var B=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=o.__;function i({onClick:E,reload:v}){const D=v?"/?reload=true":"/";return(0,B.jsxs)(d.rU,{to:D,className:C.link,onClick:E,children:[(0,B.jsx)(r.Z,{icon:s.Z,className:C.icon}),l("Go back","jetpack-my-jetpack")]})}i.displayName="GoBackLink",i.defaultProps={onClick:()=>{}};const _=i;i.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(R,p,e)=>{e.d(p,{Z:()=>v});var o=e("../components/components/pricing-table/index.tsx"),r=e("../components/components/product-price/index.tsx"),s=e("../components/components/button/index.tsx"),c=e("../components/components/notice/index.tsx"),d=e("../components/components/text/index.tsx"),k=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),y=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),w=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),h=e.n(w),A=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),B=e("../../packages/my-jetpack/_inc/hooks/use-redirect-to-referrer/index.js"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=y.__,_=({cantInstallPlugin:D,onProductButtonClick:j,detail:M,isFetching:O,tier:f,trackProductButtonClick:N})=>{var Q;const{siteSuffix:H,myJetpackCheckoutUri:L}=(Q=window==null?void 0:window.myJetpackInitialState)!=null?Q:{},{featuresByTier:Z=[],pricingForUi:{tiers:W},title:oe,postCheckoutUrl:J}=M,{callToAction:U,currencyCode:ue,fullPrice:b,introductoryOffer:g,isFree:t,wpcomProductSlug:x,quantity:m=null}=W[f],S=(0,B.a)(),re=(0,A.useCallback)(()=>J||S||L,[J,S,L])(),{run:le,hasCheckoutStarted:z}=(0,k.Z)({from:"my-jetpack",productSlug:x,redirectUrl:re,connectAfterCheckout:!0,siteSuffix:H,useBlogIdSuffix:!0,quantity:m}),_e=(0,A.useCallback)(()=>{N(t),j==null||j(le,M,f)},[N,j,le,M,f,t]),ce=b?Math.round(b/12*100)/100:null,ie=g!=null&&g.costPerInterval?Math.round(g.costPerInterval/12*100)/100:null,de=(g==null?void 0:g.intervalUnit)==="month"&&(g==null?void 0:g.intervalCount)===1,pe=de?(0,y.gB)(i("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),ce):i("/month, paid yearly","jetpack-my-jetpack",0),he=U||(t?i("Start for Free","jetpack-my-jetpack"):(0,y.gB)(i("Get %s","jetpack-my-jetpack"),oe,0));return(0,l.jsxs)(o.oK,{primary:!t,children:[(0,l.jsxs)(o.NE,{children:[t?(0,l.jsx)(r.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,l.jsx)(r.Z,{price:ce,offPrice:ie,legend:pe,currency:ue,hideDiscountLabel:de,hidePriceFraction:!0}),(0,l.jsx)(s.Z,{fullWidth:!0,variant:t?"secondary":"primary",onClick:_e,isLoading:z||O,disabled:z||D||O,children:he})]}),Z.map((Ie,Pe)=>{const{included:ye,description:me,struck_description:G,info:u}=Ie.tiers[f],ge=G||me?(0,l.jsxs)(l.Fragment,{children:[G?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("del",{children:G})," "]}):null,me?(0,l.jsx)("strong",{children:me}):null]}):null;return(0,l.jsx)(o.kF,{isIncluded:ye,label:ge,tooltipTitle:u==null?void 0:u.title,tooltipInfo:u!=null&&u.content?(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:u==null?void 0:u.content}}):null,tooltipClassName:u==null?void 0:u.class},Pe)})]})};_.displayName="ProductDetailTableColumn",_.propTypes={cantInstallPlugin:h().bool.isRequired,onProductButtonClick:h().func.isRequired,detail:h().object.isRequired,tier:h().string.isRequired,trackProductButtonClick:h().func.isRequired};const E=({slug:D,onProductButtonClick:j,trackProductButtonClick:M})=>{var g;const{fileSystemWriteAccess:O}=(g=window==null?void 0:window.myJetpackInitialState)!=null?g:{},{detail:f,isFetching:N}=(0,C.i)(D),{description:H,featuresByTier:L=[],pluginSlug:Z,status:W,tiers:oe=[],title:J}=f,U=W==="plugin_absent"&&O==="no",ue=U&&(0,l.jsx)(c.Z,{level:"error",hideCloseButton:!0,title:(0,l.jsx)(d.ZP,{children:(0,y.gB)(i("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),J)}),actions:[(0,l.jsx)(s.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${Z}`,isExternalLink:!0,children:i("Get plugin","jetpack-my-jetpack")})]}),b=(0,A.useMemo)(()=>L.map(t=>{var x,m,S;return{name:t==null?void 0:t.name,tooltipTitle:(x=t==null?void 0:t.info)==null?void 0:x.title,tooltipInfo:(m=t==null?void 0:t.info)!=null&&m.content?(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:(S=t==null?void 0:t.info)==null?void 0:S.content}}):null}}),[L]);return(0,l.jsxs)(l.Fragment,{children:[ue,(0,l.jsx)(o.ZP,{title:H,items:b,children:oe.map((t,x)=>(0,l.jsx)(_,{tier:t,detail:f,isFetching:N,onProductButtonClick:j,trackProductButtonClick:M,primary:x===0,cantInstallPlugin:U},x))})]})};E.propTypes={slug:h().string.isRequired,onProductButtonClick:h().func.isRequired,trackProductButtonClick:h().func.isRequired};const v=E;E.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(R,p,e)=>{e.d(p,{Z:()=>s});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(c){const d=(0,r.s0)();return(0,o.useCallback)(()=>d(c),[d,c])}},"../components/components/notice/index.tsx":(R,p,e)=>{e.d(p,{Z:()=>D});var o=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),k=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),y=e.n(k),w=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(h),C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),B={};B.insert="head",B.singleton=!1;var l=A()(C.Z,B);const i=C.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const E=j=>{switch(j){case"error":return o.Z;case"warning":return o.Z;case"info":return r.Z;case"success":return s.Z;default:return o.Z}},v=({level:j,title:M,children:O,actions:f,hideCloseButton:N,onClose:H})=>{const L=y()(i.container,i[`is-${j}`]);return(0,_.jsxs)("div",{className:L,children:[(0,_.jsx)("div",{className:i["icon-wrapper"],children:(0,_.jsx)(c.Z,{icon:E(j),className:i.icon})}),(0,_.jsxs)("div",{className:i["main-content"],children:[(0,_.jsx)("div",{className:i.title,children:M}),O,f&&f.length>0&&(0,_.jsx)("div",{className:i["action-bar"],children:f.map((Z,W)=>(0,_.jsx)("div",{className:i.action,children:Z},W))})]}),!N&&(0,_.jsx)("button",{"aria-label":"close",className:i["close-button"],onClick:H,children:(0,_.jsx)(c.Z,{icon:d.Z})})]})};v.displayName="Notice",v.defaultProps={level:"info",hideCloseButton:!1};const D=v},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(R,p,e)=>{e.d(p,{Z:()=>k});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(s),d=c()(r());d.push([R.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),d.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const k=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(R,p,e)=>{e.d(p,{Z:()=>k});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(s),d=c()(r());d.push([R.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),d.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const k=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(R,p,e)=>{e.d(p,{Z:()=>k});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(s),d=c()(r());d.push([R.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),d.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const k=d}}]);})();
