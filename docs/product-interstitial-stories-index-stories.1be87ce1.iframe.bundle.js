"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(I,_,e)=>{var Me,Le,Oe,Ae,Ne,Ue,Je,Ze,He,We,Ke,we,Fe,Ve,ze,Qe,Ge,Xe,Ye,$e,qe,et,tt,st;e.r(_),e.d(_,{JetpackAntiSpam:()=>X,JetpackBackup:()=>Y,JetpackBoost:()=>$,JetpackCRM:()=>q,JetpackScan:()=>ee,JetpackSearch:()=>te,JetpackVideoPress:()=>F,__namedExportsOrder:()=>yt,_default:()=>N,default:()=>ue});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),s=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),i=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../components/components/admin-page/index.tsx"),k=e("../components/components/layout/container/index.tsx"),j=e("../components/components/layout/col/index.tsx"),v=e("../components/components/text/index.tsx"),m=e("../components/components/button/index.tsx"),B=e("../../../node_modules/.pnpm/@wordpress+element@5.29.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),f=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),R=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=e.n(R),d=e("../../packages/my-jetpack/_inc/data/products/use-activate.ts"),g=e("../../packages/my-jetpack/_inc/data/products/use-product.ts"),C=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function M({slug:a}){const{recordEvent:D}=(0,C.Z)();return{onClickGoBack:(0,o.useCallback)(x=>{a&&D("jetpack_myjetpack_product_interstitial_back_link_click",{product:a}),document.referrer.includes(window.location.host)&&(x.preventDefault(),history.back())},[D,a])}}var L=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),P=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),E=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),U=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const b=e.p+"static/media/boost.a5413748.png",O=e.p+"static/media/crm.7e7684ae.png",J=e.p+"static/media/extras.26daf365.png",A=e.p+"static/media/search.f9756bd9.png",Z=e.p+"static/media/social.e3fb80b2.png",H=e.p+"static/media/stats.98023808.png";var ae=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(ae),K=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),w={};w.insert="head",w.singleton=!1;var oe=W()(K.Z,w);const h=K.Z.locals||{},p=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const T=f.__;function u({bundle:a,existingLicenseKeyUrl:D="admin.php?page=my-jetpack#/add-license",installsPlugin:ke=!1,slug:x,supportingInfo:xt,preferProductName:ft=!1,children:Rt=null,imageContainerClassName:Pt="",ctaButtonLabel:It=null,hideTOS:vt=!1,quantity:nt=null,directCheckout:at=!1,highlightLastFeature:ot=!1}){var dt;const{detail:Bt}=(0,g.Z)(x),{activate:rt,isPending:fe}=(0,d.Z)(x),{isUpgradableByBundle:Re,tiers:ct,pricingForUi:se}=Bt,{recordEvent:ne}=(0,C.Z)(),{onClickGoBack:bt}=M({slug:x}),{myJetpackCheckoutUri:Pe}=(dt=window==null?void 0:window.myJetpackInitialState)!=null?dt:{};(0,o.useEffect)(()=>{ne("jetpack_myjetpack_product_interstitial_view",{product:x})},[ne,x]);const je=(0,o.useCallback)((S=!1)=>{var n,V;return S?"":x==="crm"?"jetpack-crm":(V=(n=se==null?void 0:se.tiers)==null?void 0:n.upgraded)!=null&&V.wpcomProductSlug?se.tiers.upgraded.wpcomProductSlug:se.wpcomProductSlug},[x,se]),lt=(0,o.useCallback)((S=!1,n=null)=>{ne("jetpack_myjetpack_product_interstitial_add_link_click",{product:n!=null?n:x,productSlug:je(S)})},[ne,x,je]),St=(0,o.useCallback)((S=!1)=>{ne("jetpack_myjetpack_product_interstitial_add_link_click",{product:a,productSlug:je(S)})},[ne,a,je]),it=(0,L.Z)("/"),ye=(0,o.useCallback)((S,n,V)=>{let pt=n!=null&&n.postCheckoutUrl?n==null?void 0:n.postCheckoutUrl:Pe;if(n!=null&&n.isBundle||at){S==null||S();return}rt({productId:x},{onSettled:({productId:xe})=>{var _t,ht,gt,kt,jt;pt=xe!=null&&xe.post_checkout_url?xe.post_checkout_url:Pe;const ut=n==null?void 0:n.postActivationUrl,mt=V?(_t=n==null?void 0:n.hasRequiredTier)==null?void 0:_t[V]:n==null?void 0:n.hasRequiredPlan,Tt=!(V?(kt=(gt=(ht=n==null?void 0:n.pricingForUi)==null?void 0:ht.tiers)==null?void 0:gt[V])==null?void 0:kt.isFree:(jt=n==null?void 0:n.pricingForUi)==null?void 0:jt.isFree)&&!mt;if(n.pluginSlug==="zero-bs-crm"&&!mt){window.location.href="https://jetpackcrm.com/pricing/";return}if(!Tt){if(ut){window.location.href=ut;return}return it()}S==null||S(null,pt)}})},[at,rt,it,x,Pe]);return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(k.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(j.Z,{className:h["product-interstitial__header"],children:[(0,t.jsx)(P.Z,{onClick:bt}),D&&(0,t.jsx)(v.ZP,{variant:"body-small",children:(0,B.Z)(T("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(m.Z,{className:h["product-interstitial__license-activation-link"],href:D,variant:"link"})})})]}),(0,t.jsx)(j.Z,{children:ct&&ct.length?(0,t.jsx)(U.Z,{slug:x,clickHandler:ye,onProductButtonClick:ye,trackProductButtonClick:lt,isFetching:fe}):(0,t.jsxs)(k.Z,{className:Re?null:h.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(j.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(E.Z,{slug:x,trackButtonClick:lt,onClick:ke?ye:void 0,className:Re?h.container:null,supportingInfo:xt,preferProductName:ft,ctaButtonLabel:It,hideTOS:vt,quantity:nt,highlightLastFeature:ot,isFetching:fe})}),(0,t.jsx)(j.Z,{sm:4,md:4,lg:5,className:c()(h.imageContainer,Pt),children:a?(0,t.jsx)(E.Z,{slug:a,trackButtonClick:St,onClick:ye,className:Re?h.container:null,quantity:nt,highlightLastFeature:ot,isFetching:fe}):Rt})]})})]})})}u.displayName="ProductInterstitial";function _e(){const a="anti-spam",{detail:D}=(0,g.Z)(a),{isPluginActive:ke}=D;return(0,t.jsx)(u,{slug:a,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:ke?"admin.php?page=akismet-key-config":null,preferProductName:!0})}_e.displayName="AntiSpamInterstitial";function z(){return(0,t.jsx)(u,{slug:"backup",installsPlugin:!0,bundle:"security"})}z.displayName="BackupInterstitial";function Q(){return(0,t.jsx)(u,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:b,alt:"Boost"})})}Q.displayName="BoostInterstitial";function re(){return(0,t.jsx)(u,{slug:"creator",installsPlugin:!0})}re.displayName="CreatorInterstitial";function ce(){return(0,t.jsx)(u,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:O,alt:"CRM"})})}ce.displayName="CRMInterstitial";function le(){return(0,t.jsx)(u,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:J,alt:"Extras"})})}le.displayName="ExtrasInterstitial";function he(){return(0,t.jsx)(u,{slug:"protect",installsPlugin:!0})}he.displayName="ProtectInterstitial";function G(){return(0,t.jsx)(u,{slug:"scan",installsPlugin:!0,bundle:"security"})}G.displayName="ScanInterstitial";function ge(){return(0,t.jsx)(u,{slug:"social",installsPlugin:!0,children:(0,t.jsx)("img",{src:Z,alt:T("Image displaying logos of social media platforms supported by Jetpack Social.","jetpack-my-jetpack")})})}ge.displayName="SocialInterstitial";function ie(){var D;const{detail:a}=(0,g.Z)("search");return(0,t.jsx)(u,{slug:"search",installsPlugin:!0,supportingInfo:((D=a==null?void 0:a.pricingForUi)!=null&&D.trialAvailable?T("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+T("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:A,alt:"Search"})})}ie.displayName="SearchInterstitial";function de(){return(0,t.jsx)(u,{slug:"stats",directCheckout:!0,installsPlugin:!0,ctaButtonLabel:T("Get Stats","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:H,alt:T("Illustration showing the Stats feature, highlighting important statistics for your site.","jetpack-my-jetpack")})})}de.displayName="StatsInterstitial";function pe(){return(0,t.jsx)(u,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:p,alt:"VideoPress"})})}pe.displayName="VideoPressInterstitial",u.__docgenInfo={description:`Product Interstitial component.

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
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1},highlightLastFeature:{defaultValue:{value:"false",computed:!1},required:!1}}},_e.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},z.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},Q.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},re.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},ce.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},le.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},he.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},G.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},ge.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},ie.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},de.__docgenInfo={description:`StatsInterstitial component

@returns {object} StatsInterstitial react component.`,methods:[],displayName:"StatsInterstitial"},pe.__docgenInfo={description:`VideoPressInterstitial component

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
`,ve={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const ue={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:u},me={},y=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(z,{...a})})})});y.displayName="DefaultBackupDetailCard";const N=y.bind({});N.parameters={},N.args=me;const Be=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(_e,{...a})})})});Be.displayName="AntiSpamTemplate";const X=Be.bind({});X.parameters={mockData:(0,i.TN)("anti-spam")};const be=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(z,{...a})})})});be.displayName="BackupTemplate";const Y=be.bind({});Y.parameters={mockData:(0,i.TN)("backup")};const Se=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(Q,{...a})})})});Se.displayName="BoostTemplate";const $=Se.bind({});$.parameters={mockData:(0,i.TN)("boost")};const Te=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ce,{...a})})})});Te.displayName="CRMTemplate";const q=Te.bind({});q.parameters={mockData:(0,i.TN)("crm")};const Ce=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(G,{...a})})})});Ce.displayName="ScanTemplate";const ee=Ce.bind({});ee.parameters={};const Ee=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ie,{...a})})})});Ee.displayName="SearchTemplate";const te=Ee.bind({});te.parameters={mockData:(0,i.TN)("search")};const De=a=>(0,t.jsx)(r.UT,{children:(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(pe,{...a})})})});De.displayName="VideoPressTemplate";const F=De.bind({});F.storyName="Jetpack VideoPress",F.parameters={mockData:(0,i.TN)("videopress")},N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Oe=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}},X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ue=(Ne=X.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}},Y.parameters={...Y.parameters,docs:{...(Je=Y.parameters)==null?void 0:Je.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(He=(Ze=Y.parameters)==null?void 0:Ze.docs)==null?void 0:He.source}}},$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(we=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:we.source}}},q.parameters={...q.parameters,docs:{...(Fe=q.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ze=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}},ee.parameters={...ee.parameters,docs:{...(Qe=ee.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Xe=(Ge=ee.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source}}},te.parameters={...te.parameters,docs:{...(Ye=te.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(qe=($e=te.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}},F.parameters={...F.parameters,docs:{...(et=F.parameters)==null?void 0:et.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(st=(tt=F.parameters)==null?void 0:tt.docs)==null?void 0:st.source}}};const yt=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(I,_,e)=>{e.d(_,{Z:()=>g});var o=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),k=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(k),v=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),m={};m.insert="head",m.singleton=!1;var B=j()(v.Z,m);const f=v.Z.locals||{};var R=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c=o.__;function d({onClick:C,reload:M}){const L=M?"/?reload=true":"/";return(0,R.jsxs)(l.rU,{to:L,className:f.link,onClick:C,children:[(0,R.jsx)(r.Z,{icon:s.Z,className:f.icon}),c("Go back","jetpack-my-jetpack")]})}d.displayName="GoBackLink",d.defaultProps={onClick:()=>{}};const g=d;d.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(I,_,e)=>{e.d(_,{Z:()=>M});var o=e("../components/components/pricing-table/index.tsx"),r=e("../components/components/product-price/index.tsx"),s=e("../components/components/button/index.tsx"),i=e("../components/components/notice/index.tsx"),l=e("../components/components/text/index.tsx"),k=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),j=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),v=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),m=e.n(v),B=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("../../packages/my-jetpack/_inc/data/products/use-product.ts"),R=e("../../packages/my-jetpack/_inc/hooks/use-redirect-to-referrer/index.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=j.__,g=({cantInstallPlugin:L,onProductButtonClick:P,detail:E,isFetching:U,tier:b,trackProductButtonClick:O})=>{var de;const{siteSuffix:J,myJetpackCheckoutUri:A}=(de=window==null?void 0:window.myJetpackInitialState)!=null?de:{},{featuresByTier:Z=[],pricingForUi:{tiers:H},title:ae,postCheckoutUrl:W}=E,{callToAction:K,currencyCode:w,fullPrice:oe,introductoryOffer:h,isFree:p,wpcomProductSlug:t,quantity:T=null}=H[b],u=(0,R.a)(),z=(0,B.useCallback)(()=>W||u||A,[W,u,A])(),{run:Q,hasCheckoutStarted:re}=(0,k.Z)({from:"my-jetpack",productSlug:t,redirectUrl:z,connectAfterCheckout:!0,siteSuffix:J,useBlogIdSuffix:!0,quantity:T}),ce=(0,B.useCallback)(()=>{O(p),P==null||P(Q,E,b)},[O,P,Q,E,b,p]),le=oe?Math.round(oe/12*100)/100:null,he=h!=null&&h.costPerInterval?Math.round(h.costPerInterval/12*100)/100:null,G=(h==null?void 0:h.intervalUnit)==="month"&&(h==null?void 0:h.intervalCount)===1,ge=G?(0,j.gB)(d("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),le):d("/month, paid yearly","jetpack-my-jetpack",0),ie=K||(p?d("Start for Free","jetpack-my-jetpack"):(0,j.gB)(d("Get %s","jetpack-my-jetpack"),ae,0));return(0,c.jsxs)(o.oK,{primary:!p,children:[(0,c.jsxs)(o.NE,{children:[p?(0,c.jsx)(r.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,c.jsx)(r.Z,{price:le,offPrice:he,legend:ge,currency:w,hideDiscountLabel:G,hidePriceFraction:!0}),(0,c.jsx)(s.Z,{fullWidth:!0,variant:p?"secondary":"primary",onClick:ce,isLoading:re||U,disabled:re||L||U,children:ie})]}),Z.map((pe,Ie)=>{const{included:ve,description:ue,struck_description:me,info:y}=pe.tiers[b],N=me||ue?(0,c.jsxs)(c.Fragment,{children:[me?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("del",{children:me})," "]}):null,ue?(0,c.jsx)("strong",{children:ue}):null]}):null;return(0,c.jsx)(o.kF,{isIncluded:ve,label:N,tooltipTitle:y==null?void 0:y.title,tooltipInfo:y!=null&&y.content?(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:y==null?void 0:y.content}}):null,tooltipClassName:y==null?void 0:y.class},Ie)})]})};g.displayName="ProductDetailTableColumn",g.propTypes={cantInstallPlugin:m().bool.isRequired,onProductButtonClick:m().func.isRequired,detail:m().object.isRequired,tier:m().string.isRequired,trackProductButtonClick:m().func.isRequired};const C=({slug:L,onProductButtonClick:P,trackProductButtonClick:E,isFetching:U})=>{var h;const{fileSystemWriteAccess:b}=(h=window==null?void 0:window.myJetpackInitialState)!=null?h:{},{detail:O}=(0,f.Z)(L),{description:J,featuresByTier:A=[],pluginSlug:Z,status:H,tiers:ae=[],title:W}=O,K=H==="plugin_absent"&&b==="no",w=K&&(0,c.jsx)(i.Z,{level:"error",hideCloseButton:!0,title:(0,c.jsx)(l.ZP,{children:(0,j.gB)(d("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),W)}),actions:[(0,c.jsx)(s.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${Z}`,isExternalLink:!0,children:d("Get plugin","jetpack-my-jetpack")})]}),oe=(0,B.useMemo)(()=>A.map(p=>{var t,T,u;return{name:p==null?void 0:p.name,tooltipTitle:(t=p==null?void 0:p.info)==null?void 0:t.title,tooltipInfo:(T=p==null?void 0:p.info)!=null&&T.content?(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:(u=p==null?void 0:p.info)==null?void 0:u.content}}):null}}),[A]);return(0,c.jsxs)(c.Fragment,{children:[w,(0,c.jsx)(o.ZP,{title:J,items:oe,children:ae.map((p,t)=>(0,c.jsx)(g,{tier:p,detail:O,isFetching:U,onProductButtonClick:P,trackProductButtonClick:E,primary:t===0,cantInstallPlugin:K},t))})]})};C.propTypes={slug:m().string.isRequired,onProductButtonClick:m().func.isRequired,trackProductButtonClick:m().func.isRequired,isFetching:m().bool.isRequired};const M=C;C.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@param {boolean}  props.isFetching              - True if there is a pending request to load the product.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0},isFetching:{description:"",type:{name:"bool"},required:!0}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(I,_,e)=>{e.d(_,{Z:()=>s});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function s(i){const l=(0,r.s0)();return(0,o.useCallback)(()=>l(i),[l,i])}},"../components/components/notice/index.tsx":(I,_,e)=>{e.d(_,{Z:()=>L});var o=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),s=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),k=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),j=e.n(k),v=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),B=e.n(m),f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),R={};R.insert="head",R.singleton=!1;var c=B()(f.Z,R);const d=f.Z.locals||{};var g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const C=P=>{switch(P){case"error":return o.Z;case"warning":return o.Z;case"info":return r.Z;case"success":return s.Z;default:return o.Z}},M=({level:P,title:E,children:U,actions:b,hideCloseButton:O,onClose:J})=>{const A=j()(d.container,d[`is-${P}`]);return(0,g.jsxs)("div",{className:A,children:[(0,g.jsx)("div",{className:d["icon-wrapper"],children:(0,g.jsx)(i.Z,{icon:C(P),className:d.icon})}),(0,g.jsxs)("div",{className:d["main-content"],children:[(0,g.jsx)("div",{className:d.title,children:E}),U,b&&b.length>0&&(0,g.jsx)("div",{className:d["action-bar"],children:b.map((Z,H)=>(0,g.jsx)("div",{className:d.action,children:Z},H))})]}),!O&&(0,g.jsx)("button",{"aria-label":"close",className:d["close-button"],onClick:J,children:(0,g.jsx)(i.Z,{icon:l.Z})})]})};M.displayName="Notice",M.defaultProps={level:"info",hideCloseButton:!1};const L=M},"../../packages/my-jetpack/_inc/data/products/use-activate.ts":(I,_,e)=>{e.d(_,{Z:()=>j});var o=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../packages/my-jetpack/_inc/data/constants.ts"),s=e("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),i=e("../../packages/my-jetpack/_inc/data/products/use-product.ts");const l=o.__,j=v=>{const{detail:m,refetch:B}=(0,i.Z)(v),{mutate:f,isPending:R}=(0,s.Z)(r.iG,{path:`${r.Jk}/${v}`,method:"POST"},{onSuccess:B},null,(0,o.gB)(l("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),m.name));return{activate:f,isPending:R}}},"../../packages/my-jetpack/_inc/data/use-simple-mutation.ts":(I,_,e)=>{e.d(_,{Z:()=>l});var o=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js"),r=e("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js"),s=e("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const l=(k,j,v,m,B)=>{const f=(0,o.D)({mutationKey:[k,m],mutationFn:()=>(0,r.Z)(j),...v}),{isError:R,isPending:c}=f;return(0,s.o)({infoName:k,isError:!c&&R,overrideMessage:B}),f}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(I,_,e)=>{e.d(_,{Z:()=>k});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(s),l=i()(r());l.push([I.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),l.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const k=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(I,_,e)=>{e.d(_,{Z:()=>k});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(s),l=i()(r());l.push([I.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),l.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const k=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(I,_,e)=>{e.d(_,{Z:()=>k});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(o),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),i=e.n(s),l=i()(r());l.push([I.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),l.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const k=l}}]);})();
