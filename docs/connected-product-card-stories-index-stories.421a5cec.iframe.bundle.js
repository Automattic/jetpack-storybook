"use strict";(()=>{var st=Object.defineProperty;var nt=(_,n,t)=>n in _?st(_,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):_[n]=t;var Q=(_,n,t)=>(nt(_,typeof n!="symbol"?n+"":n,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(_,n,t)=>{var P,E,k;t.r(n),t.d(n,{Default:()=>o,__namedExportsOrder:()=>C,default:()=>S});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=t("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),u=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),a=t("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),l=t("../../packages/my-jetpack/_inc/state/store.js"),y=t("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),p=t("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=`/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ConnectedProductCard from '../';
import { initStore } from '../../../state/store';
import { PRODUCT_STATUSES } from '../../product-card';
import { getAllMockData, getProductSlugs } from '../../product-detail-card/stories/utils.js';

// Set myJetpackRest global var.
window.myJetpackRest = {};

const mockData = getAllMockData();

initStore();

export default {
	title: 'Packages/My Jetpack/Connected Product Card',
	component: ConnectedProductCard,
	argTypes: {
		slug: {
			options: getProductSlugs(),
			control: { type: 'select' },
		},
		status: {
			options: Object.values( PRODUCT_STATUSES ),
			control: { type: 'select' },
		},
	},
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <ConnectedProductCard { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );
Default.parameters = { mockData };
Default.args = {
	admin: false,
	slug: 'backup',
};
`,r={Default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}};window.myJetpackRest={};const m=(0,p.As)();(0,l.N)();const S={parameters:{storySource:{source:`

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ConnectedProductCard from '../';
import { initStore } from '../../../state/store';
import { PRODUCT_STATUSES } from '../../product-card';
import { getAllMockData, getProductSlugs } from '../../product-detail-card/stories/utils.js';

// Set myJetpackRest global var.
window.myJetpackRest = {};

const mockData = getAllMockData();

initStore();

export default {
	title: 'Packages/My Jetpack/Connected Product Card',
	component: ConnectedProductCard,
	argTypes: {
		slug: {
			options: getProductSlugs(),
			control: { type: 'select' },
		},
		status: {
			options: Object.values( PRODUCT_STATUSES ),
			control: { type: 'select' },
		},
	},
};

const Template = args => (
	<HashRouter>
		<Routes>
			<Route path="/" element={ <ConnectedProductCard { ...args } /> } />
		</Routes>
	</HashRouter>
);

export const Default = Template.bind( {} );
Default.parameters = { mockData };
Default.args = {
	admin: false,
	slug: 'backup',
};
`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}}}},title:"Packages/My Jetpack/Connected Product Card",component:a.Z,argTypes:{slug:{options:(0,p.h7)(),control:{type:"select"}},status:{options:Object.values(y.N),control:{type:"select"}}}},h=i=>(0,c.jsx)(g.UT,{children:(0,c.jsx)(u.Z5,{children:(0,c.jsx)(u.AW,{path:"/",element:(0,c.jsx)(a.Z,{...i})})})});h.displayName="Template";const o=h.bind({});o.parameters={mockData:m},o.args={admin:!1,slug:"backup"},o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(k=(E=o.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const C=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(_,n,t)=>{t.d(n,{Z:()=>k});var d=t("../components/components/text/index.tsx"),g=t("../connection/components/use-connection/index.jsx"),u=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=t.n(u),l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=t("../../packages/my-jetpack/_inc/data/products/use-activate.ts"),p=t("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),c=t("../../packages/my-jetpack/_inc/data/constants.ts"),f=t("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),r=t("../../packages/my-jetpack/_inc/data/products/use-product.ts");const m=p.__,h=i=>{const{detail:v,refetch:A}=(0,r.Z)(i),{mutate:O,isPending:T}=(0,f.Z)("installPlugin",{path:`${c.Jk}/${i}/install-standalone`,method:"POST"},{onSuccess:A},null,(0,p.gB)(m("Failed to install standalone plugin for %1$s. Please try again","jetpack-my-jetpack"),v.name));return{install:O,isPending:T}};var o=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),C=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),P=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const E=({admin:i,slug:v,children:A,isDataLoading:O,Description:T=null,additionalActions:U=null,secondaryAction:L=null,upgradeInInterstitial:N=!1,primaryActionOverride:Z})=>{const{isRegistered:B,isUserConnected:b}=(0,g.Z)(),{install:W,isPending:M}=h(v),{activate:x,isPending:F}=(0,y.Z)(v),{detail:H}=(0,r.Z)(v),{name:$,description:V,requiresUserConnection:w,status:z}=H,J=(0,o.Z)("/connection"),G=(0,l.useCallback)(()=>{if((!B||!b)&&w){J();return}x()},[x,B,b,w,J]),K=()=>{const j=V.replace(/\s(?=[^\s]*$)/,"\xA0");return(0,P.jsx)(d.ZP,{variant:"body-small",style:{flexGrow:1},children:j})};return(0,P.jsx)(C.ZP,{name:$,Description:T||K,status:z,admin:i,isFetching:F||M,isDataLoading:O,isInstallingStandalone:M,additionalActions:U,primaryActionOverride:Z,secondaryAction:L,slug:v,onActivate:G,onInstallStandalone:W,onActivateStandalone:W,upgradeInInterstitial:N,children:A})};E.displayName="ConnectedProductCard",E.propTypes={children:a().node,admin:a().bool.isRequired,slug:a().string.isRequired,isDataLoading:a().bool,additionalActions:a().array,primaryActionOverride:a().object,secondaryAction:a().object};const k=E;E.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},secondaryAction:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1},upgradeInInterstitial:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1},primaryActionOverride:{description:"",type:{name:"object"},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(_,n,t)=>{t.d(n,{As:()=>S,TN:()=>m,h7:()=>h});const r={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function m(o){const P=o.constructor===Array?o:[o],E=P.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"GET",status:200,response:r[i]})),k=P.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"POST",status:200,response:{...r[i],status:r[i].status==="active"?"inactive":"active"}}));return[...E,...k]}function S(){return m([...Object.keys(r)])}function h(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(_,n,t)=>{t.d(n,{Z:()=>u});var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=t("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function u(a){const l=(0,g.s0)();return(0,d.useCallback)(()=>l(a),[l,a])}},"../../packages/my-jetpack/_inc/state/store.js":(_,n,t)=>{t.d(n,{t:()=>Y,N:()=>tt});var d=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js");const g="my-jetpack/v1",u="jetpack/v4/stats-app",a=`${g}/site/dismiss-welcome-banner`,l=e=>`${u}/sites/${e}/stats/highlights`,y="SET_STATS_COUNTS_IS_FETCHING",p="SET_STATS_COUNTS",c="SET_DISMISSED_WELCOME_BANNER_IS_FETCHING",f="SET_DISMISSED_WELCOME_BANNER",r="SET_GLOBAL_NOTICE",m="CLEAN_GLOBAL_NOTICE",S=e=>({type:y,isFetching:e}),h=e=>({type:p,statsCounts:e}),o=e=>({type:c,isFetching:e}),C=e=>({type:f,hasBeenDismissed:e}),v={setStatsCounts:h,setStatsCountsIsFetching:S,dismissWelcomeBanner:()=>async e=>{const{dispatch:s}=e;return s(o(!0)),(0,d.Z)({path:a,method:"POST"}).then(()=>{s(C(!0))}).finally(()=>{s(o(!1))})},...{setGlobalNotice:(e,s)=>({type:"SET_GLOBAL_NOTICE",message:e,options:s}),cleanGlobalNotice:()=>({type:"CLEAN_GLOBAL_NOTICE"})}};var A=t("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const O=(e={global:{}},s)=>{switch(s.type){case r:{const{message:D,options:I}=s;return{...e,global:{message:D,options:I}}}case m:return{...e,global:{}};default:return e}},T=(e={})=>e,U=(e={},s)=>{switch(s.type){case y:return{...e,isFetching:s.isFetching};case p:return{...e,data:(s==null?void 0:s.statsCounts)||{}};default:return e}},L=(e={},s)=>{switch(s.type){case c:return{...e,isFetching:s.isFetching};case f:return{...e,hasBeenDismissed:s.hasBeenDismissed};default:return e}},N=(e={},s)=>{switch(s.type){default:return e}},B=(0,A.UY)({notices:O,plugins:T,statsCounts:U,welcomeBanner:L,lifecycleStats:N});var b=t("../connection/state/store.jsx");const M={...{getStatsCounts:()=>async e=>{const{dispatch:s,registry:D}=e;s.setStatsCountsIsFetching(!0);const I=D.select(b.t).getBlogId();try{s.setStatsCounts(await(0,d.Z)({path:l(I)})),s.setStatsCountsIsFetching(!1)}catch(X){s.setStatsCountsIsFetching(!1)}}}},x=e=>{var s;return(s=e.statsCounts)==null?void 0:s.data},F=e=>e.lifecycleStats,G={...{getStatsCounts:x,isFetchingStatsCounts:e=>{var s;return((s=e.statsCounts)==null?void 0:s.isFetching)||!1}},...{getGlobalNotice:e=>{var s;return(s=e.notices)==null?void 0:s.global}},getWelcomeBannerHasBeenDismissed:e=>{var s;return(s=e.welcomeBanner)==null?void 0:s.hasBeenDismissed},getGuessedSiteLifecycleStatus:e=>{const{modules:s,purchases:D,plugins:I,isSiteConnected:X,isUserConnected:et}=F(e);return D.length===0&&s.length<3?(!et||!X)&&s.length===0&&I.length===1?"brand-new":"new":D.length===1&&s.length<10?"settling-in":"established"}};var K=t("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const R=class{static mayBeInit(s,D){R.store===null&&(R.store=(0,K.Z)(s,D),(0,A.z2)(R.store))}};let j=R;Q(j,"store",null);const q=j,Y="my-jetpack";function tt(){q.mayBeInit(Y,{__experimentalUseThunks:!0,reducer:B,actions:v,selectors:G,resolvers:M,initialState:window.myJetpackInitialState||{}})}},"../../packages/my-jetpack/_inc/data/products/use-activate.ts":(_,n,t)=>{t.d(n,{Z:()=>p});var d=t("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),g=t("../../packages/my-jetpack/_inc/data/constants.ts"),u=t("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),a=t("../../packages/my-jetpack/_inc/data/products/use-product.ts");const l=d.__,p=c=>{const{detail:f,refetch:r}=(0,a.Z)(c),{mutate:m,isPending:S}=(0,u.Z)("activateProduct",{path:`${g.Jk}/${c}`,method:"POST"},{onSuccess:r},null,(0,d.gB)(l("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),f.name));return{activate:m,isPending:S}}},"../../packages/my-jetpack/_inc/data/use-simple-mutation.ts":(_,n,t)=>{t.d(n,{Z:()=>l});var d=t("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js"),g=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js"),u=t("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const l=(y,p,c,f,r)=>{const m=(0,d.D)({mutationKey:[y,f],mutationFn:()=>(0,g.Z)(p),...c}),{isError:S,isPending:h}=m;return(0,u.o)({infoName:y,isError:!h&&S,overrideMessage:r}),m}}}]);})();
