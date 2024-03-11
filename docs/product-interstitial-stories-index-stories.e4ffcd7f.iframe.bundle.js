"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(P,m,e)=>{var Le,Oe,Ae,Ne,Ue,Ze,Je,He,We,Ke,we,Fe,Ve,ze,Qe,Ge,Xe,Ye,$e,qe,et,tt,st,nt;e.r(m),e.d(m,{JetpackAntiSpam:()=>X,JetpackBackup:()=>Y,JetpackBoost:()=>$,JetpackCRM:()=>q,JetpackScan:()=>ee,JetpackSearch:()=>te,JetpackVideoPress:()=>w,__namedExportsOrder:()=>yt,_default:()=>K,default:()=>ue});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),n=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),d=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),i=e("../components/components/admin-page/index.tsx"),h=e("../components/components/layout/container/index.tsx"),g=e("../components/components/layout/col/index.tsx"),I=e("../components/components/text/index.tsx"),u=e("../components/components/button/index.tsx"),f=e("../../../node_modules/.pnpm/@wordpress+element@5.30.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),R=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),k=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),V=e.n(k),s=e("../../packages/my-jetpack/_inc/data/products/use-activate.ts"),p=e("../../packages/my-jetpack/_inc/data/products/use-product.ts"),L=e("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts"),v=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function N({slug:r}){const{recordEvent:M}=(0,v.Z)();return{onClickGoBack:(0,c.useCallback)(j=>{r&&M("jetpack_myjetpack_product_interstitial_back_link_click",{product:r}),document.referrer.includes(window.location.host)&&(j.preventDefault(),history.back())},[M,r])}}var S=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),T=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),C=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),E=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const D=e.p+"static/media/boost.a5413748.png",O=e.p+"static/media/crm.7e7684ae.png",U=e.p+"static/media/extras.26daf365.png",A=e.p+"static/media/search.f9756bd9.png",Z=e.p+"static/media/social.e3fb80b2.png",ae=e.p+"static/media/stats.98023808.png";var oe=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),J=e.n(oe),H=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),W={};W.insert="head",W.singleton=!1;var re=J()(H.Z,W);const a=H.Z.locals||{},y=e.p+"static/media/videopress.9591093a.png";var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=R.__;function _({bundle:r,existingLicenseKeyUrl:M="admin.php?page=my-jetpack#/add-license",installsPlugin:ye=!1,slug:j,supportingInfo:xt,preferProductName:ft=!1,children:Rt=null,imageContainerClassName:Pt="",ctaButtonLabel:It=null,hideTOS:vt=!1,quantity:at=null,directCheckout:ot=!1,highlightLastFeature:rt=!1}){const{detail:Bt}=(0,p.Z)(j),{activate:ct,isPending:Pe}=(0,s.Z)(j),{isUpgradableByBundle:Ie,tiers:lt,pricingForUi:se}=Bt,{recordEvent:ne}=(0,v.Z)(),{onClickGoBack:bt}=N({slug:j}),{myJetpackCheckoutUri:ve=""}=(0,L.Z)();(0,c.useEffect)(()=>{ne("jetpack_myjetpack_product_interstitial_view",{product:j})},[ne,j]);const xe=(0,c.useCallback)((B=!1)=>{var o,F;return B?"":j==="crm"?"jetpack-crm":(F=(o=se==null?void 0:se.tiers)==null?void 0:o.upgraded)!=null&&F.wpcomProductSlug?se.tiers.upgraded.wpcomProductSlug:se.wpcomProductSlug},[j,se]),it=(0,c.useCallback)((B=!1,o=null)=>{ne("jetpack_myjetpack_product_interstitial_add_link_click",{product:o!=null?o:j,productSlug:xe(B)})},[ne,j,xe]),St=(0,c.useCallback)((B=!1)=>{ne("jetpack_myjetpack_product_interstitial_add_link_click",{product:r,productSlug:xe(B)})},[ne,r,xe]),dt=(0,S.Z)("/"),fe=(0,c.useCallback)((B,o,F)=>{let pt=o!=null&&o.postCheckoutUrl?o==null?void 0:o.postCheckoutUrl:ve;if(o!=null&&o.isBundle||ot){B==null||B();return}ct({productId:j},{onSettled:({productId:Re})=>{var _t,ht,gt,kt,jt;pt=Re!=null&&Re.post_checkout_url?Re.post_checkout_url:ve;const ut=o==null?void 0:o.postActivationUrl,mt=F?(_t=o==null?void 0:o.hasRequiredTier)==null?void 0:_t[F]:o==null?void 0:o.hasRequiredPlan,Tt=!(F?(kt=(gt=(ht=o==null?void 0:o.pricingForUi)==null?void 0:ht.tiers)==null?void 0:gt[F])==null?void 0:kt.isFree:(jt=o==null?void 0:o.pricingForUi)==null?void 0:jt.isFree)&&!mt;if(o.pluginSlug==="zero-bs-crm"&&!mt){window.location.href="https://jetpackcrm.com/pricing/";return}if(!Tt){if(ut){window.location.href=ut;return}return dt()}B==null||B(null,pt)}})},[ot,ct,dt,j,ve]);return(0,t.jsx)(i.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(h.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(g.Z,{className:a["product-interstitial__header"],children:[(0,t.jsx)(T.Z,{onClick:bt}),M&&(0,t.jsx)(I.ZP,{variant:"body-small",children:(0,f.Z)(b("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(u.Z,{className:a["product-interstitial__license-activation-link"],href:M,variant:"link"})})})]}),(0,t.jsx)(g.Z,{children:lt&&lt.length?(0,t.jsx)(E.Z,{slug:j,clickHandler:fe,onProductButtonClick:fe,trackProductButtonClick:it,isFetching:Pe}):(0,t.jsxs)(h.Z,{className:Ie?null:a.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(g.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(C.Z,{slug:j,trackButtonClick:it,onClick:ye?fe:void 0,className:Ie?a.container:null,supportingInfo:xt,preferProductName:ft,ctaButtonLabel:It,hideTOS:vt,quantity:at,highlightLastFeature:rt,isFetching:Pe})}),(0,t.jsx)(g.Z,{sm:4,md:4,lg:5,className:V()(a.imageContainer,Pt),children:r?(0,t.jsx)(C.Z,{slug:r,trackButtonClick:St,onClick:fe,className:Ie?a.container:null,quantity:at,highlightLastFeature:rt,isFetching:Pe}):Rt})]})})]})})}_.displayName="ProductInterstitial";function me(){const r="anti-spam",{detail:M}=(0,p.Z)(r),{isPluginActive:ye}=M;return(0,t.jsx)(_,{slug:r,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:ye?"admin.php?page=akismet-key-config":null,preferProductName:!0})}me.displayName="AntiSpamInterstitial";function z(){return(0,t.jsx)(_,{slug:"backup",installsPlugin:!0,bundle:"security"})}z.displayName="BackupInterstitial";function Q(){return(0,t.jsx)(_,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:D,alt:"Boost"})})}Q.displayName="BoostInterstitial";function ce(){return(0,t.jsx)(_,{slug:"creator",installsPlugin:!0})}ce.displayName="CreatorInterstitial";function le(){return(0,t.jsx)(_,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:O,alt:"CRM"})})}le.displayName="CRMInterstitial";function ie(){return(0,t.jsx)(_,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:U,alt:"Extras"})})}ie.displayName="ExtrasInterstitial";function _e(){return(0,t.jsx)(_,{slug:"protect",installsPlugin:!0})}_e.displayName="ProtectInterstitial";function G(){return(0,t.jsx)(_,{slug:"scan",installsPlugin:!0,bundle:"security"})}G.displayName="ScanInterstitial";function he(){return(0,t.jsx)(_,{slug:"social",installsPlugin:!0,children:(0,t.jsx)("img",{src:Z,alt:b("Image displaying logos of social media platforms supported by Jetpack Social.","jetpack-my-jetpack")})})}he.displayName="SocialInterstitial";function de(){var M;const{detail:r}=(0,p.Z)("search");return(0,t.jsx)(_,{slug:"search",installsPlugin:!0,supportingInfo:((M=r==null?void 0:r.pricingForUi)!=null&&M.trialAvailable?b("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+b("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:A,alt:"Search"})})}de.displayName="SearchInterstitial";function ge(){return(0,t.jsx)(_,{slug:"stats",directCheckout:!0,installsPlugin:!0,ctaButtonLabel:b("Get Stats","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:ae,alt:b("Illustration showing the Stats feature, highlighting important statistics for your site.","jetpack-my-jetpack")})})}ge.displayName="StatsInterstitial";function pe(){return(0,t.jsx)(_,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:y,alt:"VideoPress"})})}pe.displayName="VideoPressInterstitial",_.__docgenInfo={description:`Product Interstitial component.

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
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1},highlightLastFeature:{defaultValue:{value:"false",computed:!1},required:!1}}},me.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},z.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},Q.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},ce.__docgenInfo={description:`CreatorInterstitial component

@returns {object} CreatorInterstitial react component.`,methods:[],displayName:"CreatorInterstitial"},le.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},ie.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},_e.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},G.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},he.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},de.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},ge.__docgenInfo={description:`StatsInterstitial component

@returns {object} StatsInterstitial react component.`,methods:[],displayName:"StatsInterstitial"},pe.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var Be=`/* eslint-disable react/react-in-jsx-scope */
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
`,ke={_default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},JetpackAntiSpam:{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},JetpackBackup:{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},JetpackBoost:{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},JetpackCRM:{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},JetpackScan:{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},JetpackSearch:{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},JetpackVideoPress:{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}};const ue={parameters:{storySource:{source:`
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
`,locationsMap:{default:{startLoc:{col:32,line:22},endLoc:{col:1,line:28},startBody:{col:32,line:22},endBody:{col:1,line:28}},"jetpack-anti-spam":{startLoc:{col:25,line:34},endLoc:{col:1,line:40},startBody:{col:25,line:34},endBody:{col:1,line:40}},"jetpack-backup":{startLoc:{col:23,line:47},endLoc:{col:1,line:53},startBody:{col:23,line:47},endBody:{col:1,line:53}},"jetpack-boost":{startLoc:{col:22,line:60},endLoc:{col:1,line:66},startBody:{col:22,line:60},endBody:{col:1,line:66}},"jetpack-crm":{startLoc:{col:20,line:73},endLoc:{col:1,line:79},startBody:{col:20,line:73},endBody:{col:1,line:79}},"jetpack-scan":{startLoc:{col:21,line:86},endLoc:{col:1,line:92},startBody:{col:21,line:86},endBody:{col:1,line:92}},"jetpack-search":{startLoc:{col:23,line:97},endLoc:{col:1,line:103},startBody:{col:23,line:97},endBody:{col:1,line:103}},"jetpack-video-press":{startLoc:{col:27,line:110},endLoc:{col:1,line:116},startBody:{col:27,line:110},endBody:{col:1,line:116}}}}},title:"Packages/My Jetpack/Product Interstitial",component:_},x={},je=r=>(0,t.jsx)(l.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(z,{...r})})})});je.displayName="DefaultBackupDetailCard";const K=je.bind({});K.parameters={},K.args=x;const be=r=>(0,t.jsx)(l.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(me,{...r})})})});be.displayName="AntiSpamTemplate";const X=be.bind({});X.parameters={mockData:(0,d.TN)("anti-spam")};const Se=r=>(0,t.jsx)(l.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(z,{...r})})})});Se.displayName="BackupTemplate";const Y=Se.bind({});Y.parameters={mockData:(0,d.TN)("backup")};const Te=r=>(0,t.jsx)(l.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(Q,{...r})})})});Te.displayName="BoostTemplate";const $=Te.bind({});$.parameters={mockData:(0,d.TN)("boost")};const Ce=r=>(0,t.jsx)(l.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(le,{...r})})})});Ce.displayName="CRMTemplate";const q=Ce.bind({});q.parameters={mockData:(0,d.TN)("crm")};const Ee=r=>(0,t.jsx)(l.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(G,{...r})})})});Ee.displayName="ScanTemplate";const ee=Ee.bind({});ee.parameters={};const De=r=>(0,t.jsx)(l.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(de,{...r})})})});De.displayName="SearchTemplate";const te=De.bind({});te.parameters={mockData:(0,d.TN)("search")};const Me=r=>(0,t.jsx)(l.UT,{children:(0,t.jsx)(n.Z5,{children:(0,t.jsx)(n.AW,{path:"/",element:(0,t.jsx)(pe,{...r})})})});Me.displayName="VideoPressTemplate";const w=Me.bind({});w.storyName="Jetpack VideoPress",w.parameters={mockData:(0,d.TN)("videopress")},K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ae=(Oe=K.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}},X.parameters={...X.parameters,docs:{...(Ne=X.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ze=(Ue=X.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.source}}},Y.parameters={...Y.parameters,docs:{...(Je=Y.parameters)==null?void 0:Je.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(We=(He=Y.parameters)==null?void 0:He.docs)==null?void 0:We.source}}},$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Fe=(we=$.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}},q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Qe=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:Qe.source}}},ee.parameters={...ee.parameters,docs:{...(Ge=ee.parameters)==null?void 0:Ge.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ye=(Xe=ee.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}},te.parameters={...te.parameters,docs:{...($e=te.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(et=(qe=te.parameters)==null?void 0:qe.docs)==null?void 0:et.source}}},w.parameters={...w.parameters,docs:{...(tt=w.parameters)==null?void 0:tt.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(nt=(st=w.parameters)==null?void 0:st.docs)==null?void 0:nt.source}}};const yt=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(P,m,e)=>{e.d(m,{Z:()=>p});var c=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),h=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(h),I=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),u={};u.insert="head",u.singleton=!1;var f=g()(I.Z,u);const R=I.Z.locals||{};var k=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const V=c.__;function s({onClick:L,reload:v}){const N=v?"/?reload=true":"/";return(0,k.jsxs)(i.rU,{to:N,className:R.link,onClick:L,children:[(0,k.jsx)(l.Z,{icon:n.Z,className:R.icon}),V("Go back","jetpack-my-jetpack")]})}s.displayName="GoBackLink",s.defaultProps={onClick:()=>{}};const p=s;s.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(P,m,e)=>{e.d(m,{Z:()=>N});var c=e("../components/components/pricing-table/index.tsx"),l=e("../components/components/product-price/index.tsx"),n=e("../components/components/button/index.tsx"),d=e("../components/components/notice/index.tsx"),i=e("../components/components/text/index.tsx"),h=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),g=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),I=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),u=e.n(I),f=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),R=e("../../packages/my-jetpack/_inc/data/products/use-product.ts"),k=e("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts"),V=e("../../packages/my-jetpack/_inc/hooks/use-redirect-to-referrer/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p=g.__,L=({cantInstallPlugin:S,onProductButtonClick:T,detail:C,isFetching:E,tier:D,trackProductButtonClick:O})=>{const{siteSuffix:U="",myJetpackCheckoutUri:A=""}=(0,k.Z)(),{featuresByTier:Z=[],pricingForUi:{tiers:ae},title:oe,postCheckoutUrl:J}=C,{callToAction:H,currencyCode:W,fullPrice:re,introductoryOffer:a,isFree:y,wpcomProductSlug:t,quantity:b=null}=ae[D],_=(0,V.a)(),z=(0,f.useCallback)(()=>J||_||A,[J,_,A])(),{run:Q,hasCheckoutStarted:ce}=(0,h.Z)({from:"my-jetpack",productSlug:t,redirectUrl:z,connectAfterCheckout:!0,siteSuffix:U,useBlogIdSuffix:!0,quantity:b}),le=(0,f.useCallback)(()=>{O(y),T==null||T(Q,C,D)},[O,T,Q,C,D,y]),ie=re?Math.round(re/12*100)/100:null,_e=a!=null&&a.costPerInterval?Math.round(a.costPerInterval/12*100)/100:null,G=(a==null?void 0:a.intervalUnit)==="month"&&(a==null?void 0:a.intervalCount)===1,he=G?(0,g.gB)(p("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),ie):p("/month, paid yearly","jetpack-my-jetpack",0),de=H||(y?p("Start for Free","jetpack-my-jetpack"):(0,g.gB)(p("Get %s","jetpack-my-jetpack"),oe,0));return(0,s.jsxs)(c.oK,{primary:!y,children:[(0,s.jsxs)(c.NE,{children:[y?(0,s.jsx)(l.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,s.jsx)(l.Z,{price:ie,offPrice:_e,legend:he,currency:W,hideDiscountLabel:G,hidePriceFraction:!0}),(0,s.jsx)(n.Z,{fullWidth:!0,variant:y?"secondary":"primary",onClick:le,isLoading:ce||E,disabled:ce||S||E,children:de})]}),Z.map((ge,pe)=>{const{included:Be,description:ke,struck_description:ue,info:x}=ge.tiers[D],je=ue||ke?(0,s.jsxs)(s.Fragment,{children:[ue?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("del",{children:ue})," "]}):null,ke?(0,s.jsx)("strong",{children:ke}):null]}):null;return(0,s.jsx)(c.kF,{isIncluded:Be,label:je,tooltipTitle:x==null?void 0:x.title,tooltipInfo:x!=null&&x.content?(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:x==null?void 0:x.content}}):null,tooltipClassName:x==null?void 0:x.class},pe)})]})};L.displayName="ProductDetailTableColumn",L.propTypes={cantInstallPlugin:u().bool.isRequired,onProductButtonClick:u().func.isRequired,detail:u().object.isRequired,tier:u().string.isRequired,trackProductButtonClick:u().func.isRequired};const v=({slug:S,onProductButtonClick:T,trackProductButtonClick:C,isFetching:E})=>{const{fileSystemWriteAccess:D="no"}=(0,k.Z)(),{detail:O}=(0,R.Z)(S),{description:U,featuresByTier:A=[],pluginSlug:Z,status:ae,tiers:oe=[],title:J}=O,H=ae==="plugin_absent"&&D==="no",W=H&&(0,s.jsx)(d.Z,{level:"error",hideCloseButton:!0,title:(0,s.jsx)(i.ZP,{children:(0,g.gB)(p("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),J)}),actions:[(0,s.jsx)(n.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${Z}`,isExternalLink:!0,children:p("Get plugin","jetpack-my-jetpack")})]}),re=(0,f.useMemo)(()=>A.map(a=>{var y,t,b;return{name:a==null?void 0:a.name,tooltipTitle:(y=a==null?void 0:a.info)==null?void 0:y.title,tooltipInfo:(t=a==null?void 0:a.info)!=null&&t.content?(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:(b=a==null?void 0:a.info)==null?void 0:b.content}}):null}}),[A]);return(0,s.jsxs)(s.Fragment,{children:[W,(0,s.jsx)(c.ZP,{title:U,items:re,children:oe.map((a,y)=>(0,s.jsx)(L,{tier:a,detail:O,isFetching:E,onProductButtonClick:T,trackProductButtonClick:C,primary:y===0,cantInstallPlugin:H},y))})]})};v.propTypes={slug:u().string.isRequired,onProductButtonClick:u().func.isRequired,trackProductButtonClick:u().func.isRequired,isFetching:u().bool.isRequired};const N=v;v.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@param {boolean}  props.isFetching              - True if there is a pending request to load the product.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0},isFetching:{description:"",type:{name:"bool"},required:!0}}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(P,m,e)=>{e.d(m,{Z:()=>n});var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function n(d){const i=(0,l.s0)();return(0,c.useCallback)(()=>i(d),[i,d])}},"../components/components/notice/index.tsx":(P,m,e)=>{e.d(m,{Z:()=>N});var c=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),h=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=e.n(h),I=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(u),R=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),k={};k.insert="head",k.singleton=!1;var V=f()(R.Z,k);const s=R.Z.locals||{};var p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const L=S=>{switch(S){case"error":return c.Z;case"warning":return c.Z;case"info":return l.Z;case"success":return n.Z;default:return c.Z}},v=({level:S,title:T,children:C,actions:E,hideCloseButton:D,onClose:O})=>{const U=g()(s.container,s[`is-${S}`]);return(0,p.jsxs)("div",{className:U,children:[(0,p.jsx)("div",{className:s["icon-wrapper"],children:(0,p.jsx)(d.Z,{icon:L(S),className:s.icon})}),(0,p.jsxs)("div",{className:s["main-content"],children:[(0,p.jsx)("div",{className:s.title,children:T}),C,E&&E.length>0&&(0,p.jsx)("div",{className:s["action-bar"],children:E.map((A,Z)=>(0,p.jsx)("div",{className:s.action,children:A},Z))})]}),!D&&(0,p.jsx)("button",{"aria-label":"close",className:s["close-button"],onClick:O,children:(0,p.jsx)(d.Z,{icon:i.Z})})]})};v.displayName="Notice",v.defaultProps={level:"info",hideCloseButton:!1};const N=v},"../../packages/my-jetpack/_inc/data/products/use-activate.ts":(P,m,e)=>{e.d(m,{Z:()=>g});var c=e("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../packages/my-jetpack/_inc/data/constants.ts"),n=e("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),d=e("../../packages/my-jetpack/_inc/data/products/use-product.ts");const i=c.__,g=I=>{const{detail:u,refetch:f}=(0,d.Z)(I),{mutate:R,isPending:k}=(0,n.Z)({name:l.iG,query:{path:`${l.Jk}/${I}`,method:"POST"},options:{onSuccess:f},errorMessage:(0,c.gB)(i("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),u.name)});return{activate:R,isPending:k}}},"../../packages/my-jetpack/_inc/data/use-simple-mutation.ts":(P,m,e)=>{e.d(m,{Z:()=>i});var c=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js"),l=e("../../../node_modules/.pnpm/@wordpress+api-fetch@6.50.0/node_modules/@wordpress/api-fetch/build-module/index.js"),n=e("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const i=({name:h,query:g,options:I,errorMessage:u})=>{const f=(0,c.D)({mutationKey:[h],mutationFn:()=>(0,l.Z)(g),...I}),{isError:R,isPending:k}=f;return(0,n.o)({infoName:h,isError:!k&&R,overrideMessage:u}),f}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(P,m,e)=>{e.d(m,{Z:()=>h});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(c),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),i=d()(l());i.push([P.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),i.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const h=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(P,m,e)=>{e.d(m,{Z:()=>h});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(c),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),i=d()(l());i.push([P.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),i.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const h=i},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(P,m,e)=>{e.d(m,{Z:()=>h});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(c),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),i=d()(l());i.push([P.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),i.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const h=i}}]);})();
