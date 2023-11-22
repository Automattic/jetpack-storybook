"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6867],{"../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":(R,d,e)=>{e.d(d,{Z:()=>c});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.43.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,n.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.y$,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(R,d,e)=>{e.d(d,{Z:()=>c});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.43.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,n.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../packages/my-jetpack/_inc/components/product-interstitial/stories/index.stories.jsx":(R,d,e)=>{var Je,Oe,Ne,we,He,Ue,Ze,We,Ke,Ve,Fe,ze,Ge,Xe,Qe,Ye,$e,qe,et,tt,st,at,nt,ot;e.r(d),e.d(d,{JetpackAntiSpam:()=>q,JetpackBackup:()=>ee,JetpackBoost:()=>te,JetpackCRM:()=>se,JetpackScan:()=>ae,JetpackSearch:()=>ne,JetpackVideoPress:()=>z,__namedExportsOrder:()=>ht,_default:()=>F,default:()=>kt});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),a=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),c=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),l=e("../components/components/admin-page/index.tsx"),m=e("../components/components/layout/container/index.tsx"),h=e("../components/components/layout/col/index.tsx"),C=e("../components/components/text/index.tsx"),_=e("../components/components/button/index.tsx"),Z=e("../../../node_modules/.pnpm/@wordpress+element@5.22.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),S=e("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),I=e.n(r),p=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js");function k({slug:s}){const{recordEvent:u}=(0,p.Z)();return{onClickGoBack:(0,n.useCallback)(f=>{s&&u("jetpack_myjetpack_product_interstitial_back_link_click",{product:s}),document.referrer.includes(window.location.host)&&(f.preventDefault(),history.back())},[u,s])}}var W=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),y=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),v=e("../../packages/my-jetpack/_inc/components/go-back-link/index.js"),P=e("../../packages/my-jetpack/_inc/components/product-detail-card/index.jsx"),E=e("../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx");const M=e.p+"static/media/boost.a5413748.png",D=e.p+"static/media/crm.7e7684ae.png",A=e.p+"static/media/extras.26daf365.png",J=e.p+"static/media/jetpack-ai.1a265a19.png";var K=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(K),N=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss"),w={};w.insert="head",w.singleton=!1;var ke=O()(N.Z,w);const b=N.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=S.__;function B({onClickGoBack:s=()=>{}}){const u=i("Do you need more requests for Jetpack AI Assistant?","jetpack-my-jetpack"),U=i("Allow us to assist you in discovering the optimal plan tailored to your requirements, ensuring you can continue using the most advanced AI technology Jetpack has to offer.","jetpack-my-jetpack"),f="support@jetpack.com",oe=encodeURIComponent("Jetpack AI - Inquiry about more requests"),re=`mailto:${f}?subject=${oe}`;return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(m.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsx)(h.Z,{className:b["product-interstitial__header"],children:(0,t.jsx)(v.Z,{onClick:s,reload:!1})}),(0,t.jsx)(h.Z,{children:(0,t.jsxs)(m.Z,{className:b.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(h.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)("div",{className:I()(b.card),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(C.H3,{children:u}),(0,t.jsx)(C.ZP,{mb:3,children:U}),(0,t.jsxs)("div",{className:b["buttons-row"],children:[(0,t.jsx)(_.Z,{href:re,children:i("Contact Us","jetpack-my-jetpack")}),(0,t.jsx)(o.rU,{to:"/",onClick:s,children:(0,t.jsx)(_.Z,{variant:"secondary",children:i("Back","jetpack-my-jetpack")})})]})]})})}),(0,t.jsx)(h.Z,{sm:4,md:4,lg:5,className:I()(b.imageContainer,b.aiImageContainer),children:(0,t.jsx)("img",{src:J,alt:"Jetpack AI"})})]})})]})})}B.displayName="JetpackAIInterstitialMoreRequests",B.__docgenInfo={description:`JetpackAIInterstitialMoreRequests component

@param {object} props                 - Component props.
@param {Function} props.onClickGoBack - onClick handler for the "Back" button.
@returns {object}                       JetpackAIInterstitialMoreRequests react component.`,methods:[],displayName:"JetpackAIInterstitialMoreRequests",props:{onClickGoBack:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const V=e.p+"static/media/search.f9756bd9.png";var H=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss"),le={};le.insert="head",le.singleton=!1;var ye=O()(H.Z,le);const L=H.Z.locals||{},je=e.p+"static/media/videopress.9591093a.png",G=S.__;function g({bundle:s,existingLicenseKeyUrl:u="admin.php?page=my-jetpack#/add-license",installsPlugin:U=!1,slug:f,supportingInfo:oe,preferProductName:re=!1,children:ve=null,imageContainerClassName:he="",ctaButtonLabel:Pe=null,hideTOS:ge=!1,quantity:ue=null,directCheckout:me=!1}){const{activate:_e,detail:gt}=(0,y.i)(f),{isUpgradableByBundle:be,tiers:rt}=gt,{recordEvent:ce}=(0,p.Z)(),{onClickGoBack:xt}=k({slug:f});(0,n.useEffect)(()=>{ce("jetpack_myjetpack_product_interstitial_view",{product:f})},[ce,f]);const ct=(0,n.useCallback)((T=null)=>{ce("jetpack_myjetpack_product_interstitial_add_link_click",{product:T!=null?T:f})},[ce,f]),Rt=(0,n.useCallback)(()=>{ce("jetpack_myjetpack_product_interstitial_add_link_click",{product:s})},[ce,s]),lt=(0,W.Z)("/"),xe=(0,n.useCallback)((T,j,Re)=>{if(j!=null&&j.isBundle||me){T==null||T();return}_e().finally(()=>{var dt,pt,ut,mt,_t;const it=j==null?void 0:j.postActivationUrl,yt=Re?(dt=j==null?void 0:j.hasRequiredTier)==null?void 0:dt[Re]:j==null?void 0:j.hasRequiredPlan;if(!(!(Re?(mt=(ut=(pt=j==null?void 0:j.pricingForUi)==null?void 0:pt.tiers)==null?void 0:ut[Re])==null?void 0:mt.isFree:(_t=j==null?void 0:j.pricingForUi)==null?void 0:_t.isFree)&&!yt)){if(it){window.location.href=it;return}return lt()}T==null||T()})},[me,_e,lt]);return(0,t.jsx)(l.Z,{showHeader:!1,showBackground:!1,children:(0,t.jsxs)(m.Z,{horizontalSpacing:3,horizontalGap:3,children:[(0,t.jsxs)(h.Z,{className:L["product-interstitial__header"],children:[(0,t.jsx)(v.Z,{onClick:xt}),u&&(0,t.jsx)(C.ZP,{variant:"body-small",children:(0,Z.Z)(G("Already have an existing plan or license key? <a>Get started</a>.","jetpack-my-jetpack"),{a:(0,t.jsx)(_.Z,{className:L["product-interstitial__license-activation-link"],href:u,variant:"link"})})})]}),(0,t.jsx)(h.Z,{children:rt&&rt.length?(0,t.jsx)(E.Z,{slug:f,clickHandler:xe,onProductButtonClick:xe,trackProductButtonClick:ct}):(0,t.jsxs)(m.Z,{className:be?null:L.container,horizontalSpacing:0,horizontalGap:0,fluid:!0,children:[(0,t.jsx)(h.Z,{sm:4,md:4,lg:7,children:(0,t.jsx)(P.Z,{slug:f,trackButtonClick:ct,onClick:U?xe:void 0,className:be?L.container:null,supportingInfo:oe,preferProductName:re,ctaButtonLabel:Pe,hideTOS:ge,quantity:ue})}),(0,t.jsx)(h.Z,{sm:4,md:4,lg:5,className:I()(L.imageContainer,he),children:s?(0,t.jsx)(P.Z,{slug:s,trackButtonClick:Rt,onClick:xe,className:be?L.container:null,quantity:ue}):ve})]})})]})})}g.displayName="ProductInterstitial";function X(){const s="anti-spam",{detail:u}=(0,y.i)(s),{isPluginActive:U}=u;return(0,t.jsx)(g,{slug:s,installsPlugin:!0,bundle:"security",existingLicenseKeyUrl:U?"admin.php?page=akismet-key-config":null,preferProductName:!0})}X.displayName="AntiSpamInterstitial";function Q(){return(0,t.jsx)(g,{slug:"backup",installsPlugin:!0,bundle:"security"})}Q.displayName="BackupInterstitial";function ie(){return(0,t.jsx)(g,{slug:"boost",installsPlugin:!0,children:(0,t.jsx)("img",{src:M,alt:"Boost"})})}ie.displayName="BoostInterstitial";function de(){return(0,t.jsx)(g,{slug:"crm",installsPlugin:!0,children:(0,t.jsx)("img",{src:D,alt:"CRM"})})}de.displayName="CRMInterstitial";function Y(){return(0,t.jsx)(g,{slug:"extras",installsPlugin:!0,children:(0,t.jsx)("img",{src:A,alt:"Extras"})})}Y.displayName="ExtrasInterstitial";function $(){var ge,ue,me,_e;const s="jetpack-ai",{detail:u}=(0,y.i)(s),{onClickGoBack:U}=k({slug:s}),f=(ue=(ge=u==null?void 0:u["ai-assistant-feature"])==null?void 0:ge["current-tier"])==null?void 0:ue.value,oe=(_e=(me=u==null?void 0:u["ai-assistant-feature"])==null?void 0:me["next-tier"])==null?void 0:_e.value,re=!!oe&&![1,500].includes(f),ve=re?oe:null;if(!re)return(0,t.jsx)(B,{onClickGoBack:U});const{hasRequiredPlan:he}=u,Pe=he?G("Upgrade Jetpack AI","jetpack-my-jetpack"):null;return(0,t.jsx)(g,{slug:"jetpack-ai",installsPlugin:!0,imageContainerClassName:L.aiImageContainer,ctaButtonLabel:Pe,hideTOS:!0,quantity:ve,directCheckout:he,children:(0,t.jsx)("img",{src:J,alt:"Jetpack AI"})})}$.displayName="JetpackAIInterstitial";function x(){return(0,t.jsx)(g,{slug:"protect",installsPlugin:!0})}x.displayName="ProtectInterstitial";function pe(){return(0,t.jsx)(g,{slug:"scan",installsPlugin:!0,bundle:"security"})}pe.displayName="ScanInterstitial";function Be(){return(0,t.jsx)(g,{slug:"social",installsPlugin:!0})}Be.displayName="SocialInterstitial";function fe(){var u;const{detail:s}=(0,y.i)("search");return(0,t.jsx)(g,{slug:"search",installsPlugin:!0,supportingInfo:((u=s==null?void 0:s.pricingForUi)!=null&&u.trialAvailable?G("Jetpack Search Free supports up to 5,000 records and 500 search requests per month for free. You will be asked to upgrade to a paid plan if you exceed these limits for three continuous months.","jetpack-my-jetpack"):"")+G("For the paid plan, pricing will automatically adjust based on the number of records in your search index. If you grow into a new pricing tier, we'll let you know before your next billing cycle.","jetpack-my-jetpack"),children:(0,t.jsx)("img",{src:V,alt:"Search"})})}fe.displayName="SearchInterstitial";function Ie(){return(0,t.jsx)(g,{slug:"videopress",installsPlugin:!0,children:(0,t.jsx)("img",{src:je,alt:"VideoPress"})})}Ie.displayName="VideoPressInterstitial",g.__docgenInfo={description:`Product Interstitial component.

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
@returns {object}                               ProductInterstitial react component.`,methods:[],displayName:"ProductInterstitial",props:{existingLicenseKeyUrl:{defaultValue:{value:"'admin.php?page=my-jetpack#/add-license'",computed:!1},required:!1},installsPlugin:{defaultValue:{value:"false",computed:!1},required:!1},preferProductName:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"null",computed:!1},required:!1},imageContainerClassName:{defaultValue:{value:"''",computed:!1},required:!1},ctaButtonLabel:{defaultValue:{value:"null",computed:!1},required:!1},hideTOS:{defaultValue:{value:"false",computed:!1},required:!1},quantity:{defaultValue:{value:"null",computed:!1},required:!1},directCheckout:{defaultValue:{value:"false",computed:!1},required:!1}}},X.__docgenInfo={description:`AntiSpamInterstitial component

@returns {object} AntiSpamInterstitial react component.`,methods:[],displayName:"AntiSpamInterstitial"},Q.__docgenInfo={description:`BackupInterstitial component

@returns {object} BackupInterstitial react component.`,methods:[],displayName:"BackupInterstitial"},ie.__docgenInfo={description:`BoostInterstitial component

@returns {object} BoostInterstitial react component.`,methods:[],displayName:"BoostInterstitial"},de.__docgenInfo={description:`CRMInterstitial component

@returns {object} CRMInterstitial react component.`,methods:[],displayName:"CRMInterstitial"},Y.__docgenInfo={description:`ExtrasInterstitial component

@returns {object} ExtrasInterstitial react component.`,methods:[],displayName:"ExtrasInterstitial"},$.__docgenInfo={description:`JetpackAIInterstitial component

@returns {object} JetpackAIInterstitial react component.`,methods:[],displayName:"JetpackAIInterstitial"},x.__docgenInfo={description:`ProtectInterstitial component

@returns {object} ProtectInterstitial react component.`,methods:[],displayName:"ProtectInterstitial"},pe.__docgenInfo={description:`ScanInterstitial component

@returns {object} ScanInterstitial react component.`,methods:[],displayName:"ScanInterstitial"},Be.__docgenInfo={description:`SocialInterstitial component

@returns {object} SocialInterstitial react component.`,methods:[],displayName:"SocialInterstitial"},fe.__docgenInfo={description:`SearchInterstitial component

@returns {object} SearchInterstitial react component.`,methods:[],displayName:"SearchInterstitial"},Ie.__docgenInfo={description:`VideoPressInterstitial component

@returns {object} VideoPressInterstitial react component.`,methods:[],displayName:"VideoPressInterstitial"};var ft=`/* eslint-disable react/react-in-jsx-scope */
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
`,It={_default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},JetpackAntiSpam:{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},JetpackBackup:{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},JetpackBoost:{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},JetpackCRM:{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},JetpackScan:{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},JetpackSearch:{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},JetpackVideoPress:{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}};const kt={parameters:{storySource:{source:`
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { getMockData } from '../../product-detail-card/stories/utils.js';
import ProductInterstitial, { AntiSpamInterstitial, BackupInterstitial, BoostInterstitial, CRMInterstitial, SearchInterstitial, ScanInterstitial, VideoPressInterstitial } from '../index.jsx';
export default {
  title: 'Packages/My Jetpack/Product Interstitial',
  component: ProductInterstitial
};
const DefaultArgs = {};
const DefaultBackupDetailCard = args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const _default = DefaultBackupDetailCard.bind({});
_default.parameters = {};
_default.args = DefaultArgs;
const AntiSpamTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackAntiSpam = AntiSpamTemplate.bind({});
JetpackAntiSpam.parameters = {
  mockData: getMockData('anti-spam')
};
const BackupTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackBackup = BackupTemplate.bind({});
JetpackBackup.parameters = {
  mockData: getMockData('backup')
};
const BoostTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackBoost = BoostTemplate.bind({});
JetpackBoost.parameters = {
  mockData: getMockData('boost')
};
const CRMTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackCRM = CRMTemplate.bind({});
JetpackCRM.parameters = {
  mockData: getMockData('crm')
};
const ScanTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackScan = ScanTemplate.bind({});
JetpackScan.parameters = {};
const SearchTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackSearch = SearchTemplate.bind({});
JetpackSearch.parameters = {
  mockData: getMockData('search')
};
const VideoPressTemplate = args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>;
export const JetpackVideoPress = VideoPressTemplate.bind({});
JetpackVideoPress.storyName = 'Jetpack VideoPress';
JetpackVideoPress.parameters = {
  mockData: getMockData('videopress')
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<BackupInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ..._default.parameters?.docs?.source
    }
  }
};
JetpackAntiSpam.parameters = {
  ...JetpackAntiSpam.parameters,
  docs: {
    ...JetpackAntiSpam.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<AntiSpamInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackAntiSpam.parameters?.docs?.source
    }
  }
};
JetpackBackup.parameters = {
  ...JetpackBackup.parameters,
  docs: {
    ...JetpackBackup.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<BackupInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackBackup.parameters?.docs?.source
    }
  }
};
JetpackBoost.parameters = {
  ...JetpackBoost.parameters,
  docs: {
    ...JetpackBoost.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<BoostInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackBoost.parameters?.docs?.source
    }
  }
};
JetpackCRM.parameters = {
  ...JetpackCRM.parameters,
  docs: {
    ...JetpackCRM.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<CRMInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackCRM.parameters?.docs?.source
    }
  }
};
JetpackScan.parameters = {
  ...JetpackScan.parameters,
  docs: {
    ...JetpackScan.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<ScanInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackScan.parameters?.docs?.source
    }
  }
};
JetpackSearch.parameters = {
  ...JetpackSearch.parameters,
  docs: {
    ...JetpackSearch.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<SearchInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackSearch.parameters?.docs?.source
    }
  }
};
JetpackVideoPress.parameters = {
  ...JetpackVideoPress.parameters,
  docs: {
    ...JetpackVideoPress.parameters?.docs,
    source: {
      originalSource: "args => <HashRouter>\\n        <Routes>\\n            <Route path=\\"/\\" element={<VideoPressInterstitial {...args} />} />\\n        </Routes>\\n    </HashRouter>",
      ...JetpackVideoPress.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:32,line:11},endLoc:{col:17,line:15},startBody:{col:32,line:11},endBody:{col:17,line:15}},"jetpack-anti-spam":{startLoc:{col:25,line:19},endLoc:{col:17,line:23},startBody:{col:25,line:19},endBody:{col:17,line:23}},"jetpack-backup":{startLoc:{col:23,line:28},endLoc:{col:17,line:32},startBody:{col:23,line:28},endBody:{col:17,line:32}},"jetpack-boost":{startLoc:{col:22,line:37},endLoc:{col:17,line:41},startBody:{col:22,line:37},endBody:{col:17,line:41}},"jetpack-crm":{startLoc:{col:20,line:46},endLoc:{col:17,line:50},startBody:{col:20,line:46},endBody:{col:17,line:50}},"jetpack-scan":{startLoc:{col:21,line:55},endLoc:{col:17,line:59},startBody:{col:21,line:55},endBody:{col:17,line:59}},"jetpack-search":{startLoc:{col:23,line:62},endLoc:{col:17,line:66},startBody:{col:23,line:62},endBody:{col:17,line:66}},"jetpack-video-press":{startLoc:{col:27,line:71},endLoc:{col:17,line:75},startBody:{col:27,line:71},endBody:{col:17,line:75}}}}},title:"Packages/My Jetpack/Product Interstitial",component:g},jt={},Se=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(Q,{...s})})})});Se.displayName="DefaultBackupDetailCard";const F=Se.bind({});F.parameters={},F.args=jt;const Ee=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(X,{...s})})})});Ee.displayName="AntiSpamTemplate";const q=Ee.bind({});q.parameters={mockData:(0,c.TN)("anti-spam")};const Te=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(Q,{...s})})})});Te.displayName="BackupTemplate";const ee=Te.bind({});ee.parameters={mockData:(0,c.TN)("backup")};const Ce=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(ie,{...s})})})});Ce.displayName="BoostTemplate";const te=Ce.bind({});te.parameters={mockData:(0,c.TN)("boost")};const Me=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(de,{...s})})})});Me.displayName="CRMTemplate";const se=Me.bind({});se.parameters={mockData:(0,c.TN)("crm")};const De=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(pe,{...s})})})});De.displayName="ScanTemplate";const ae=De.bind({});ae.parameters={};const Le=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(fe,{...s})})})});Le.displayName="SearchTemplate";const ne=Le.bind({});ne.parameters={mockData:(0,c.TN)("search")};const Ae=s=>(0,t.jsx)(o.UT,{children:(0,t.jsx)(a.Z5,{children:(0,t.jsx)(a.AW,{path:"/",element:(0,t.jsx)(Ie,{...s})})})});Ae.displayName="VideoPressTemplate";const z=Ae.bind({});z.storyName="Jetpack VideoPress",z.parameters={mockData:(0,c.TN)("videopress")},F.parameters={...F.parameters,docs:{...(Je=F.parameters)==null?void 0:Je.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ne=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}},q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<AntiSpamInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ue=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}},ee.parameters={...ee.parameters,docs:{...(Ze=ee.parameters)==null?void 0:Ze.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BackupInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Ke=(We=ee.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}},te.parameters={...te.parameters,docs:{...(Ve=te.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<BoostInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ze=(Fe=te.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}},se.parameters={...se.parameters,docs:{...(Ge=se.parameters)==null?void 0:Ge.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<CRMInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(Qe=(Xe=se.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}},ae.parameters={...ae.parameters,docs:{...(Ye=ae.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ScanInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(qe=($e=ae.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}},ne.parameters={...ne.parameters,docs:{...(et=ne.parameters)==null?void 0:et.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<SearchInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(st=(tt=ne.parameters)==null?void 0:tt.docs)==null?void 0:st.source}}},z.parameters={...z.parameters,docs:{...(at=z.parameters)==null?void 0:at.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<VideoPressInterstitial {...args} />} />
        </Routes>
    </HashRouter>`,...(ot=(nt=z.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};const ht=["_default","JetpackAntiSpam","JetpackBackup","JetpackBoost","JetpackCRM","JetpackScan","JetpackSearch","JetpackVideoPress"]},"../components/components/notice/index.tsx":(R,d,e)=>{e.d(d,{Z:()=>v});var n=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),h=e.n(m),C=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(_),S=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),r={};r.insert="head",r.singleton=!1;var I=Z()(S.Z,r);const p=S.Z.locals||{};var k=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const W=P=>{switch(P){case"error":return n.Z;case"warning":return n.Z;case"info":return o.Z;case"success":return a.Z;default:return n.Z}},y=({level:P,title:E,children:M,actions:D,hideCloseButton:A,onClose:J})=>{const K=h()(p.container,p[`is-${P}`]);return(0,k.jsxs)("div",{className:K,children:[(0,k.jsx)("div",{className:p["icon-wrapper"],children:(0,k.jsx)(c.Z,{icon:W(P),className:p.icon})}),(0,k.jsxs)("div",{className:p["main-content"],children:[(0,k.jsx)("div",{className:p.title,children:E}),M,D&&D.length>0&&(0,k.jsx)("div",{className:p["action-bar"],children:D.map((O,N)=>(0,k.jsx)("div",{className:p.action,children:O},N))})]}),!A&&(0,k.jsx)("button",{"aria-label":"close",className:p["close-button"],onClick:J,children:(0,k.jsx)(c.Z,{icon:l.Z})})]})};y.displayName="Notice",y.defaultProps={level:"info",hideCloseButton:!1};const v=y},"../../packages/my-jetpack/_inc/components/go-back-link/index.js":(R,d,e)=>{e.d(d,{Z:()=>k});var n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(m),C=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss"),_={};_.insert="head",_.singleton=!1;var Z=h()(C.Z,_);const S=C.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=n.__;function p({onClick:W,reload:y}){const v=y?"/?reload=true":"/";return(0,r.jsxs)(l.rU,{to:v,className:S.link,onClick:W,children:[(0,r.jsx)(o.Z,{icon:a.Z,className:S.icon}),I("Go back","jetpack-my-jetpack")]})}p.displayName="GoBackLink",p.defaultProps={onClick:()=>{}},p.__docgenInfo={description:`Simple component that renders a go back link

@param {object} props           - Component props.
@param {Function} props.onClick - A callback to execute on click
@param {boolean} props.reload   - Whether to reload the page after going back
@returns {object}                 GoBackLink component.`,methods:[],displayName:"GoBackLink",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const k=p},"../../packages/my-jetpack/_inc/components/product-detail-table/index.jsx":(R,d,e)=>{e.d(d,{Z:()=>W});var n=e("../components/components/pricing-table/index.tsx"),o=e("../components/components/product-price/index.tsx"),a=e("../components/components/button/index.tsx"),c=e("../components/components/notice/index.tsx"),l=e("../components/components/text/index.tsx"),m=e("../connection/hooks/use-product-checkout-workflow/index.jsx"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),C=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),_=e.n(C),Z=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=h.__,p=({cantInstallPlugin:y,onProductButtonClick:v,detail:P,tier:E,trackProductButtonClick:M})=>{var X;const{siteSuffix:D,myJetpackUrl:A}=(X=window==null?void 0:window.myJetpackInitialState)!=null?X:{},{featuresByTier:J=[],pricingForUi:{tiers:K},title:O,postActivationUrl:N}=P,{callToAction:w,currencyCode:ke,fullPrice:b,introductoryOffer:t,isFree:i,wpcomProductSlug:B}=K[E],{run:V,hasCheckoutStarted:H}=(0,m.Z)({from:"my-jetpack",productSlug:B,redirectUrl:N||A,siteSuffix:D}),le=(0,Z.useCallback)(()=>{M(),v==null||v(V,P,E)},[M,v,V,P,E]),ye=b?Math.ceil(b/12*100)/100:null,L=t!=null&&t.costPerInterval?Math.ceil(t.costPerInterval/12*100)/100:null,je=(t==null?void 0:t.intervalUnit)==="month"&&(t==null?void 0:t.intervalCount)===1,G=je?(0,h.gB)(I("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),ye):I("/month, paid yearly","jetpack-my-jetpack",0),g=w||(i?I("Start for Free","jetpack-my-jetpack"):(0,h.gB)(I("Get %s","jetpack-my-jetpack"),O,0));return(0,r.jsxs)(n.oK,{primary:!i,children:[(0,r.jsxs)(n.NE,{children:[i?(0,r.jsx)(o.Z,{price:0,legend:"",currency:"USD",hidePriceFraction:!0}):(0,r.jsx)(o.Z,{price:ye,offPrice:L,legend:G,currency:ke,hideDiscountLabel:je,hidePriceFraction:!0}),(0,r.jsx)(a.Z,{fullWidth:!0,variant:i?"secondary":"primary",onClick:le,isLoading:H,disabled:H||y,children:g})]}),J.map((Q,ie)=>{const{included:de,description:Y,struck_description:$,info:x}=Q.tiers[E],pe=$||Y?(0,r.jsxs)(r.Fragment,{children:[$?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("del",{children:$})," "]}):null,Y?(0,r.jsx)("strong",{children:Y}):null]}):null;return(0,r.jsx)(n.kF,{isIncluded:de,label:pe,tooltipTitle:x==null?void 0:x.title,tooltipInfo:x!=null&&x.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:x==null?void 0:x.content}}):null,tooltipClassName:x==null?void 0:x.class},ie)})]})};p.displayName="ProductDetailTableColumn",p.propTypes={cantInstallPlugin:_().bool.isRequired,onProductButtonClick:_().func.isRequired,detail:_().object.isRequired,tier:_().string.isRequired,trackProductButtonClick:_().func.isRequired};const k=({slug:y,onProductButtonClick:v,trackProductButtonClick:P})=>{var t;const{fileSystemWriteAccess:E}=(t=window==null?void 0:window.myJetpackInitialState)!=null?t:{},{detail:M}=(0,S.i)(y),{description:D,featuresByTier:A=[],pluginSlug:J,status:K,tiers:O=[],title:N}=M,w=K==="plugin_absent"&&E==="no",ke=w&&(0,r.jsx)(c.Z,{level:"error",hideCloseButton:!0,title:(0,r.jsx)(l.ZP,{children:(0,h.gB)(I("Due to your server settings, we can't automatically install the plugin for you. Please manually install the %s plugin.","jetpack-my-jetpack"),N)}),actions:[(0,r.jsx)(a.Z,{variant:"secondary",href:`https://wordpress.org/plugins/${J}`,isExternalLink:!0,children:I("Get plugin","jetpack-my-jetpack")})]}),b=(0,Z.useMemo)(()=>A.map(i=>{var B,V,H;return{name:i==null?void 0:i.name,tooltipTitle:(B=i==null?void 0:i.info)==null?void 0:B.title,tooltipInfo:(V=i==null?void 0:i.info)!=null&&V.content?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:(H=i==null?void 0:i.info)==null?void 0:H.content}}):null}}),[A]);return(0,r.jsxs)(r.Fragment,{children:[ke,(0,r.jsx)(n.ZP,{title:D,items:b,children:O.map((i,B)=>(0,r.jsx)(p,{tier:i,detail:M,onProductButtonClick:v,trackProductButtonClick:P,primary:B===0,cantInstallPlugin:w},B))})]})};k.propTypes={slug:_().string.isRequired,onProductButtonClick:_().func.isRequired,trackProductButtonClick:_().func.isRequired},k.__docgenInfo={description:`Product Detail Table component.

Displays a pricing table, with a column for each product tier.

@param {object}   props                         - Component props.
@param {string}   props.slug                    - Product slug.
@param {Function} props.onProductButtonClick    - Click handler for the product button.
@param {Function} props.trackProductButtonClick - Tracks click event for the product button.
@returns {object} - ProductDetailTable react component.`,methods:[],displayName:"ProductDetailTable",props:{slug:{description:"",type:{name:"string"},required:!0},onProductButtonClick:{description:"",type:{name:"func"},required:!0},trackProductButtonClick:{description:"",type:{name:"func"},required:!0}}};const W=k},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(R,d,e)=>{e.d(d,{Z:()=>a});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function a(c){const l=(0,o.s0)();return(0,n.useCallback)(()=>l(c),[l,c])}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(R,d,e)=>{e.d(d,{Z:()=>m});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(o());l.push([R.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),l.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const m=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/go-back-link/styles.module.scss":(R,d,e)=>{e.d(d,{Z:()=>m});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(o());l.push([R.id,".tudQSP9shpMQxXmCvUWX{width:16px;margin-right:4px}.ANq891IIrG1uno6xWtcw{--gray-70: #3C434A;font-size:14px;color:var(--gray-70);display:flex;text-decoration:none;align-items:center}",""]),l.locals={icon:"tudQSP9shpMQxXmCvUWX",link:"ANq891IIrG1uno6xWtcw"};const m=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/jetpack-ai/style.module.scss":(R,d,e)=>{e.d(d,{Z:()=>m});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(o());l.push([R.id,".tIJUUobcN4ksJLmwJvlU{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.L1bniMOysXtzsoauGan8{display:flex;align-items:center}.L1bniMOysXtzsoauGan8 img{-o-object-fit:cover;object-fit:cover;width:100%}.AqT7_if8PnJzi9Kj84yj{background-color:#f9f9f6}.RWnOYLV3pxAbuEpNxasX{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.POPEJ7WuOcjsPM3AXtqF{white-space:nowrap}.POPEJ7WuOcjsPM3AXtqF>span{font-size:var(--font-body-small)}.GLJtdRk1EY4_CuKJtjGZ{background-color:var(--jp-white);height:100%;padding:calc(var(--spacing-base)*8);position:relative}.fmw55E3tELNShHcGJfKN{display:flex;gap:calc(var(--spacing-base)*2)}",""]),l.locals={container:"tIJUUobcN4ksJLmwJvlU",imageContainer:"L1bniMOysXtzsoauGan8",aiImageContainer:"AqT7_if8PnJzi9Kj84yj","product-interstitial__header":"RWnOYLV3pxAbuEpNxasX","product-interstitial__license-activation-link":"POPEJ7WuOcjsPM3AXtqF",card:"GLJtdRk1EY4_CuKJtjGZ","buttons-row":"fmw55E3tELNShHcGJfKN"};const m=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-interstitial/style.module.scss":(R,d,e)=>{e.d(d,{Z:()=>m});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),l=c()(o());l.push([R.id,".YwiQRFEPVzpLe6eCLlra{--product-card-shadow: rgb(0 0 0 / 3%);background-color:var(--jp-white);border:1px solid var(--jp-gray);border-radius:var(--jp-border-radius);box-shadow:0 2px 6px var(--product-card-shadow),0 1px 2px var(--product-card-shadow)}.H13ULFVBOfVOpuu2CFq2{display:flex;align-items:center}.H13ULFVBOfVOpuu2CFq2 img{-o-object-fit:cover;object-fit:cover;width:100%}.j9W42kITgf1KSo5AYjF2{background-color:#f9f9f6}.wCPFgKLVZuGHBbqCJ9Jy{display:flex;flex-wrap:wrap;justify-content:space-between;gap:calc(var(--horizontal-spacing)*2)}.VDdTYSY4oy4YfIUUDpR1{white-space:nowrap}.VDdTYSY4oy4YfIUUDpR1>span{font-size:var(--font-body-small)}",""]),l.locals={container:"YwiQRFEPVzpLe6eCLlra",imageContainer:"H13ULFVBOfVOpuu2CFq2",aiImageContainer:"j9W42kITgf1KSo5AYjF2","product-interstitial__header":"wCPFgKLVZuGHBbqCJ9Jy","product-interstitial__license-activation-link":"VDdTYSY4oy4YfIUUDpR1"};const m=l}}]);})();
