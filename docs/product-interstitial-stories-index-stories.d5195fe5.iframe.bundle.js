"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(R,m,e)=>{var Be,Se,Te,Ce,Ee,De,Me,Le,Ae,Oe,Ne,we,Je,He,Ue,Ze,We,Ke,Ve,Fe,ze,Qe,Ge,Xe;e.r(m),e.d(m,{JetpackAntiSpam:()=>Y,JetpackBackup:()=>$,JetpackBoost:()=>q,JetpackCRM:()=>ee,JetpackScan:()=>te,JetpackSearch:()=>se,JetpackVideoPress:()=>F,__namedExportsOrder:()=>ut,_default:()=>V,default:()=>pt});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),i=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),d=e("../components/components/admin-page/index.tsx"),g=e("../components/components/layout/container/index.tsx"),k=e("../components/components/layout/col/index.tsx"),O=e("../components/components/text/index.tsx"),h=e("../components/components/button/index.tsx"),N=e("../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),C=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),B=e.n(o),p=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function _({slug:a}){const{recordEvent:T}=(0,p.Z)();return{onClickGoBack:(0,n.useCallback)(v=>{a&&T("jetpack_myjetpack_product_interstitial_back_link_click",{product:a}),document.referrer.includes(window.location.host)&&(v.preventDefault(),history.back())},[T,a])}}var w=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),x=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),P=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),y=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),S=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const E=e.p+"static/media/boost.a5413748.png",D=e.p+"static/media/crm.7e7684ae.png",L=e.p+"static/media/extras.26daf365.png",J=e.p+"static/media/search.f9756bd9.png",H=e.p+"static/media/social.e3fb80b2.png",U=e.p+"static/media/stats.98023808.png";var Z=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Q=e.n(Z),G=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),A={};A.insert="head",A.singleton=!1;var j=Q()(G.Z,A);const l=G.Z.locals||{},M=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=C.__;function u({bundle:a,existingLicenseKeyUrl:T="admin.php?page=my-jetpack#/add-license",installsPlugin:_e=!1,slug:v,supportingInfo:_t,preferProductName:ht=!1,children:gt=null,imageContainerClassName:jt="",ctaButtonLabel:kt=null,hideTOS:xt=!1,quantity:Ye=null,directCheckout:$e=!1,highlightLastFeature:qe=!1}){const{activate:et,detail:yt}=(0,x.i)(v),{isUpgradableByBundle:je,tiers:tt,pricingForUi:ne}=yt,{recordEvent:ae}=(0,p.Z)(),{onClickGoBack:ft}=_({slug:v});(0,n.useEffect)(()=>{ae("jetpack_myjetpack_product_interstitial_view",{product:v})},[ae,v]);const he=(0,n.useCallback)((b=!1)=>{var c,z;return b?"":v==="crm"?"jetpack-crm":(z=(c=ne==null?void 0:ne.tiers)==null?void 0:c.upgraded)!=null&&z.wpcomProductSlug?ne.tiers.upgraded.wpcomProductSlug:ne.wpcomProductSlug},[v,ne]),st=(0,n.useCallback)((b=!1,c=null)=>{ae("jetpack_myjetpack_product_interstitial_add_link_click",{product:c!=null?c:v,productSlug:he(b)})},[ae,v,he]),Rt=(0,n.useCallback)((b=!1)=>{ae("jetpack_myjetpack_product_interstitial_add_link_click",{product:a,productSlug:he(b)})},[ae,a,he]),nt=(0,w.Z)("/"),ge=(0,n.useCallback)((b,c,z)=>{if(c!=null&&c.isBundle||$e){b==null||b();return}et().finally(()=>{var rt,lt,ct,it,dt;const at=c==null?void 0:c.postActivationUrl,ot=z?(rt=c==null?void 0:c.hasRequiredTier)==null?void 0:rt[z]:c==null?void 0:c.hasRequiredPlan,Pt=!(z?(it=(ct=(lt=c==null?void 0:c.pricingForUi)==null?void 0:lt.tiers)==null?void 0:ct[z])==null?void 0:it.isFree:(dt=c==null?void 0:c.pricingForUi)==null?void 0:dt.isFree)&&!ot;if(c.pluginSlug==="zero-bs-crm"&&!ot){window.location.href="https://jetpackcrm.com/pricing/";return}if(!Pt){if(at){window.location.href=at;return}return nt()}b==null||b()})},[$e,et,nt]);return(0,t.jsx)(d.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(g.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(k.Z,{className:l["product-interstitial__header"],children:[(0,t.jsx)(P.Z,{onClick:ft}),T&&(0,t.jsx)(O.ZP,{variant:"body-small",children:(0,N.Z)(I("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(h.Z,{className:l["product-interstitial__license-activation-link"],href:T,variant:"link"})})})]}),(0,t.jsx)(k.Z,{children:tt&&tt.length?(0,t.jsx)(S.Z,{slug:v,clickHandler:ge,onProductButtonClick:ge,trackProductButtonClick:st}):(0,t.jsxs)(g.Z,{className:je?null:l.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(k.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(y.Z,{slug:v,trackButtonClick:st,onClick:_e?ge:void 0,className:je?l.container:null,supportingInfo:_t,preferProductName:ht,ctaButtonLabel:kt,hideTOS:xt,quantity:Ye,highlightLastFeature:qe})}),(0,t.jsx)(k.Z,{sm:4,md:4,lg:5,className:B()(l.imageContainer,jt),children:a?(0,t.jsx)(y.Z,{slug:a,trackButtonClick:Rt,onClick:ge,className:je?l.container:null,quantity:Ye,highlightLastFeature:qe}):gt})]})})]})})}u.displayName="ProductInterstitial";function oe(){const a="anti-spam",{detail:T}=(0,x.i)(a),{isPluginActive:_e}=T;return(0,t.jsx)(u,{slug:a,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:_e?"admin.php?page=akismet-key-config":null,preferProductName:!0})}oe.displayName="AntiSpamInterstitial";function W(){return(0,t.jsx)(u,{slug:"backup",installsPlugin:!0,bundle:"security"})}W.displayName="BackupInterstitial";function re(){return(0,t.jsx)(u,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:E,alt:"Boost"})})}re.displayName="BoostInterstitial";function le(){return(0,t.jsx)(u,{slug:"creator",installsPlugin:!0})}le.displayName="CreatorInterstitial";function ce(){return(0,t.jsx)(u,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:D,alt:"CRM"})})}ce.displayName="CRMInterstitial";function me(){return(0,t.jsx)(u,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:L,alt:"Extras"})})}me.displayName="ExtrasInterstitial";function ie(){return(0,t.jsx)(u,{slug:"protect",installsPlugin:!0})}ie.displayName="ProtectInterstitial";function de(){return(0,t.jsx)(u,{slug:"scan",installsPlugin:!0,bundle:"security"})}de.displayName="ScanInterstitial";function ue(){return(0,t.jsx)(u,{slug:"social",installsPlugin:!0,children:(0,t.jsx)("img",{src:H,alt:I("Image displaying logos of social media platforms supported by Jetpack Social.","jetpack-my-jetpack")})})}ue.displayName="SocialInterstitial";function pe(){var T;const{detail:a}=(0,x.i)("search");return(0,t.jsx)(u,{slug:"search",installsPlugin:!0,supportingInfo:((T=a==null?void 0:a.pricingForUi)!=null&&T.trialAvailable?I("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+I("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:J,alt:"Search"})})}pe.displayName="SearchInterstitial";function X(){return(0,t.jsx)(u,{slug:"stats",directCheckout:!0,installsPlugin:!0,ctaButtonLabel:I("Get Stats","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:U,alt:I("Illustration showing the Stats feature, highlighting important statistics for your site.","jetpack-my-jetpack")})})}X.displayName="StatsInterstitial";function K(){return(0,t.jsx)(u,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:M,alt:"VideoPress"})})}K.displayName="VideoPressInterstitial",u.__docgenInfo={description:`Product Interstitial component.

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
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1},highlightLastFeature:{defaultValue:{value:"false",computed:!1},required:!1}}},oe.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},W.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},re.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},le.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},ce.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},me.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},ie.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},de.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},ue.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},pe.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},X.__docgenInfo={description:`StatsInterstitial component

@returns {object} StatsInterstitial react component.`,methods:[],displayName:"StatsInterstitial"},K.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var f=`/* eslint-disable react/react-in-jsx-scope */
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
`,ke={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const pt={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:u},mt={},xe=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(W,{...a})})})});xe.displayName="DefaultBackupDetailCard";const V=xe.bind({});V.parameters={},V.args=mt;const ye=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(oe,{...a})})})});ye.displayName="AntiSpamTemplate";const Y=ye.bind({});Y.parameters={mockData:(0,i.TN)("anti-spam")};const fe=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(W,{...a})})})});fe.displayName="BackupTemplate";const $=fe.bind({});$.parameters={mockData:(0,i.TN)("backup")};const Re=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(re,{...a})})})});Re.displayName="BoostTemplate";const q=Re.bind({});q.parameters={mockData:(0,i.TN)("boost")};const Pe=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ce,{...a})})})});Pe.displayName="CRMTemplate";const ee=Pe.bind({});ee.parameters={mockData:(0,i.TN)("crm")};const Ie=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(de,{...a})})})});Ie.displayName="ScanTemplate";const te=Ie.bind({});te.parameters={};const ve=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(pe,{...a})})})});ve.displayName="SearchTemplate";const se=ve.bind({});se.parameters={mockData:(0,i.TN)("search")};const be=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(K,{...a})})})});be.displayName="VideoPressTemplate";const F=be.bind({});F.storyName="Jetpack VideoPress",F.parameters={mockData:(0,i.TN)("videopress")},V.parameters={...V.parameters,docs:{...(Be=V.parameters)==null?void 0:Be.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Te=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}},Y.parameters={...Y.parameters,docs:{...(Ce=Y.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(De=(Ee=Y.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}},$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ae=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}},q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(we=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}},ee.parameters={...ee.parameters,docs:{...(Je=ee.parameters)==null?void 0:Je.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ue=(He=ee.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}},te.parameters={...te.parameters,docs:{...(Ze=te.parameters)==null?void 0:Ze.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ke=(We=te.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}},se.parameters={...se.parameters,docs:{...(Ve=se.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ze=(Fe=se.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}},F.parameters={...F.parameters,docs:{...(Qe=F.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Xe=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source}}};const ut=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(R,m,e)=>{e.d(m,{Z:()=>i});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,n.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(R,m,e)=>{e.d(m,{Z:()=>i});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,n.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(R,m,e)=>{e.d(m,{Z:()=>_});var n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),g=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(g),O=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),h={};h.insert="head",h.singleton=!1;var N=k()(O.Z,h);const C=O.Z.locals||{};var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const B=n.__;function p({onClick:w,reload:x}){const P=x?"/?reload=true":"/";return(0,o.jsxs)(d.rU,{to:P,className:C.link,onClick:w,children:[(0,o.jsx)(r.Z,{icon:s.Z,className:C.icon}),B("Go back","jetpack-my-jetpack")]})}p.displayName="GoBackLink",p.defaultProps={onClick:()=>{}};const _=p;p.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(R,m,e)=>{e.d(m,{Z:()=>w});var n=e("../components/components/pricing-table/index.tsx"),r=e("../components/components/product-price/index.tsx"),s=e("../components/components/button/index.tsx"),i=e("../components/components/notice/index.tsx"),d=e("../components/components/text/index.tsx"),g=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),k=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),O=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),h=e.n(O),N=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const B=k.__,p=({cantInstallPlugin:x,onProductButtonClick:P,detail:y,tier:S,trackProductButtonClick:E})=>{var ie;const{siteSuffix:D,myJetpackCheckoutUri:L}=(ie=window==null?void 0:window.myJetpackInitialState)!=null?ie:{},{featuresByTier:J=[],pricingForUi:{tiers:H},title:U,postActivationUrl:Z}=y,{callToAction:Q,currencyCode:G,fullPrice:A,introductoryOffer:j,isFree:l,wpcomProductSlug:M,quantity:t=null}=H[S],{run:I,hasCheckoutStarted:u}=(0,g.Z)({from:"my-jetpack",productSlug:M,redirectUrl:Z.replace(/(^.*\/wp-admin\/)/i,"")||L,connectAfterCheckout:!0,siteSuffix:D,useBlogIdSuffix:!0,quantity:t}),oe=(0,N.useCallback)(()=>{E(l),P==null||P(I,y,S)},[E,P,I,y,S,l]),W=A?Math.round(A/12*100)/100:null,re=j!=null&&j.costPerInterval?Math.round(j.costPerInterval/12*100)/100:null,le=(j==null?void 0:j.intervalUnit)==="month"&&(j==null?void 0:j.intervalCount)===1,ce=le?(0,k.gB)(B("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),W):B("/month, paid yearly","jetpack-my-jetpack",0),me=Q||(l?B("Start for Free","jetpack-my-jetpack"):(0,k.gB)(B("Get %s","jetpack-my-jetpack"),U,0));return(0,o.jsxs)(n.oK,{primary:!l,children:[(0,o.jsxs)(n.NE,{children:[l?(0,o.jsx)(r.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,o.jsx)(r.Z,{price:W,offPrice:re,legend:ce,currency:G,hideDiscountLabel:le,hidePriceFraction:!0}),(0,o.jsx)(s.Z,{fullWidth:!0,variant:l?"secondary":"primary",onClick:oe,isLoading:u,disabled:u||x,children:me})]}),J.map((de,ue)=>{const{included:pe,description:X,struck_description:K,info:f}=de.tiers[S],ke=K||X?(0,o.jsxs)(o.Fragment,{children:[K?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("del",{children:K})," "]}):null,X?(0,o.jsx)("strong",{children:X}):null]}):null;return(0,o.jsx)(n.kF,{isIncluded:pe,label:ke,tooltipTitle:f==null?void 0:f.title,tooltipInfo:f!=null&&f.content?(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:f==null?void 0:f.content}}):null,tooltipClassName:f==null?void 0:f.class},ue)})]})};p.displayName="ProductDetailTableColumn",p.propTypes={cantInstallPlugin:h().bool.isRequired,onProductButtonClick:h().func.isRequired,detail:h().object.isRequired,tier:h().string.isRequired,trackProductButtonClick:h().func.isRequired};const _=({slug:x,onProductButtonClick:P,trackProductButtonClick:y})=>{var j;const{fileSystemWriteAccess:S}=(j=window==null?void 0:window.myJetpackInitialState)!=null?j:{},{detail:E}=(0,C.i)(x),{description:D,featuresByTier:L=[],pluginSlug:J,status:H,tiers:U=[],title:Z}=E,Q=H==="plugin_absent"&&S==="no",G=Q&&(0,o.jsx)(i.Z,{level:"error",hideCloseButton:!0,title:(0,o.jsx)(d.ZP,{children:(0,k.gB)(B("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),Z)}),actions:[(0,o.jsx)(s.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${J}`,isExternalLink:!0,children:B("Get plugin","jetpack-my-jetpack")})]}),A=(0,N.useMemo)(()=>L.map(l=>{var M,t,I;return{name:l==null?void 0:l.name,tooltipTitle:(M=l==null?void 0:l.info)==null?void 0:M.title,tooltipInfo:(t=l==null?void 0:l.info)!=null&&t.content?(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:(I=l==null?void 0:l.info)==null?void 0:I.content}}):null}}),[L]);return(0,o.jsxs)(o.Fragment,{children:[G,(0,o.jsx)(n.ZP,{title:D,items:A,children:U.map((l,M)=>(0,o.jsx)(p,{tier:l,detail:E,onProductButtonClick:P,trackProductButtonClick:y,primary:M===0,cantInstallPlugin:Q},M))})]})};_.propTypes={slug:h().string.isRequired,onProductButtonClick:h().func.isRequired,trackProductButtonClick:h().func.isRequired};const w=_;_.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(R,m,e)=>{e.d(m,{Z:()=>s});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(i){const d=(0,r.s0)();return(0,n.useCallback)(()=>d(i),[d,i])}},"../components/components/notice/index.tsx":(R,m,e)=>{e.d(m,{Z:()=>P});var n=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),g=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),k=e.n(g),O=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(h),C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),o={};o.insert="head",o.singleton=!1;var B=N()(C.Z,o);const p=C.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const w=y=>{switch(y){case"error":return n.Z;case"warning":return n.Z;case"info":return r.Z;case"success":return s.Z;default:return n.Z}},x=({level:y,title:S,children:E,actions:D,hideCloseButton:L,onClose:J})=>{const H=k()(p.container,p[`is-${y}`]);return(0,_.jsxs)("div",{className:H,children:[(0,_.jsx)("div",{className:p["icon-wrapper"],children:(0,_.jsx)(i.Z,{icon:w(y),className:p.icon})}),(0,_.jsxs)("div",{className:p["main-content"],children:[(0,_.jsx)("div",{className:p.title,children:S}),E,D&&D.length>0&&(0,_.jsx)("div",{className:p["action-bar"],children:D.map((U,Z)=>(0,_.jsx)("div",{className:p.action,children:U},Z))})]}),!L&&(0,_.jsx)("button",{"aria-label":"close",className:p["close-button"],onClick:J,children:(0,_.jsx)(i.Z,{icon:d.Z})})]})};x.displayName="Notice",x.defaultProps={level:"info",hideCloseButton:!1};const P=x},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(R,m,e)=>{e.d(m,{Z:()=>g});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(s),d=i()(r());d.push([R.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),d.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const g=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(R,m,e)=>{e.d(m,{Z:()=>g});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(s),d=i()(r());d.push([R.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),d.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const g=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(R,m,e)=>{e.d(m,{Z:()=>g});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(n),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(s),d=i()(r());d.push([R.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),d.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const g=d}}]);})();
