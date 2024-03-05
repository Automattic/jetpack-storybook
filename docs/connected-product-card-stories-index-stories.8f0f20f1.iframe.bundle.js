"use strict";(()=>{var ot=Object.defineProperty;var ct=(m,n,e)=>n in m?ot(m,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):m[n]=e;var tt=(m,n,e)=>(ct(m,typeof n!="symbol"?n+"":n,e),e);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(m,n,e)=>{var A,f,D;e.r(n),e.d(n,{Default:()=>r,__namedExportsOrder:()=>k,default:()=>S});var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),u=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),a=e("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),p=e("../../packages/my-jetpack/_inc/state/store.js"),y=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),g=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),E=`/* eslint-disable react/react-in-jsx-scope */

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
`,c={Default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}};window.myJetpackRest={};const d=(0,g.As)();(0,p.N)();const S={parameters:{storySource:{source:`

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
`,locationsMap:{default:{startLoc:{col:17,line:32},endLoc:{col:1,line:38},startBody:{col:17,line:32},endBody:{col:1,line:38}}}}},title:"Packages/My Jetpack/Connected Product Card",component:a.Z,argTypes:{slug:{options:(0,g.h7)(),control:{type:"select"}},status:{options:Object.values(y.N),control:{type:"select"}}}},h=i=>(0,o.jsx)(_.UT,{children:(0,o.jsx)(u.Z5,{children:(0,o.jsx)(u.AW,{path:"/",element:(0,o.jsx)(a.Z,{...i})})})});h.displayName="Template";const r=h.bind({});r.parameters={mockData:d},r.args={admin:!1,slug:"backup"},r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(D=(f=r.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const k=["Default"]},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(m,n,e)=>{e.d(n,{Z:()=>D});var l=e("../components/components/text/index.tsx"),_=e("../connection/components/use-connection/index.jsx"),u=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),a=e.n(u),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=e("../../packages/my-jetpack/_inc/data/products/use-activate.ts"),g=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../packages/my-jetpack/_inc/data/constants.ts"),E=e("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),c=e("../../packages/my-jetpack/_inc/data/products/use-product.ts");const d=g.__,h=i=>{const{detail:P,refetch:T}=(0,c.Z)(i),{mutate:L,isPending:I}=(0,E.Z)("installPlugin",{path:`${o.Jk}/${i}/install-standalone`,method:"POST"},{onSuccess:T},null,(0,g.gB)(d("Failed to install standalone plugin for %1$s. Please try again","jetpack-my-jetpack"),P.name));return{install:L,isPending:I}};var r=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js"),k=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),A=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=({admin:i,slug:P,children:T,isDataLoading:L,Description:I=null,additionalActions:$=null,secondaryAction:z=null,upgradeInInterstitial:G=!1,primaryActionOverride:R})=>{const{isRegistered:b,isUserConnected:B}=(0,_.Z)(),{install:M,isPending:x}=h(P),{activate:N,isPending:J}=(0,y.Z)(P),{detail:Y}=(0,c.Z)(P),{name:Z,description:j,requiresUserConnection:U,status:X}=Y,F=(0,r.Z)("/connection"),H=(0,p.useCallback)(()=>{if((!b||!B)&&U){F();return}N()},[N,b,B,U,F]),K=()=>{const Q=j.replace(/\s(?=[^\s]*$)/,"\xA0");return(0,A.jsx)(l.ZP,{variant:"body-small",style:{flexGrow:1},children:Q})};return(0,A.jsx)(k.ZP,{name:Z,Description:I||K,status:X,admin:i,isFetching:J||x,isDataLoading:L,isInstallingStandalone:x,additionalActions:$,primaryActionOverride:R,secondaryAction:z,slug:P,onActivate:H,onInstallStandalone:M,onActivateStandalone:M,upgradeInInterstitial:G,children:T})};f.displayName="ConnectedProductCard",f.propTypes={children:a().node,admin:a().bool.isRequired,slug:a().string.isRequired,isDataLoading:a().bool,additionalActions:a().array,primaryActionOverride:a().object,secondaryAction:a().object};const D=f;f.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},secondaryAction:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1},upgradeInInterstitial:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1},primaryActionOverride:{description:"",type:{name:"object"},required:!1}}}},"../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js":(m,n,e)=>{e.d(n,{As:()=>S,TN:()=>d,h7:()=>h});const c={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function d(r){const A=r.constructor===Array?r:[r],f=A.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"GET",status:200,response:c[i]})),D=A.map(i=>({url:`my-jetpack/v1/site/products/${i}?_locale=user`,method:"POST",status:200,response:{...c[i],status:c[i].status==="active"?"inactive":"active"}}));return[...f,...D]}function S(){return d([...Object.keys(c)])}function h(){return["anti-spam","backup","boost","crm","extras","scan","search","videopress"]}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.js":(m,n,e)=>{e.d(n,{Z:()=>u});var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function u(a){const p=(0,_.s0)();return(0,l.useCallback)(()=>p(a),[p,a])}},"../../packages/my-jetpack/_inc/state/store.js":(m,n,e)=>{e.d(n,{t:()=>q,N:()=>at});var l=e("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js");const _="my-jetpack/v1",u="jetpack/v4/stats-app",a=`${_}/site/dismiss-welcome-banner`,p=t=>`${u}/sites/${t}/stats/highlights`,y="SET_AVAILABLE_LICENSES_IS_FETCHING",g="FETCH_AVAILABLE_LICENSES",o="SET_AVAILABLE_LICENSES",E="SET_STATS_COUNTS_IS_FETCHING",c="SET_STATS_COUNTS",d="SET_DISMISSED_WELCOME_BANNER_IS_FETCHING",S="SET_DISMISSED_WELCOME_BANNER",h="SET_GLOBAL_NOTICE",r="CLEAN_GLOBAL_NOTICE",k=t=>({type:E,isFetching:t}),A=t=>({type:y,isFetching:t}),f=()=>({type:g}),D=t=>({type:o,availableLicenses:t}),i=t=>({type:c,statsCounts:t}),P=t=>({type:d,isFetching:t}),T=t=>({type:S,hasBeenDismissed:t}),G={setAvailableLicensesIsFetching:A,fetchAvailableLicenses:f,setAvailableLicenses:D,setStatsCounts:i,setStatsCountsIsFetching:k,dismissWelcomeBanner:()=>async t=>{const{dispatch:s}=t;return s(P(!0)),(0,l.Z)({path:a,method:"POST"}).then(()=>{s(T(!0))}).finally(()=>{s(P(!1))})},...{setGlobalNotice:(t,s)=>({type:"SET_GLOBAL_NOTICE",message:t,options:s}),cleanGlobalNotice:()=>({type:"CLEAN_GLOBAL_NOTICE"})}};var R=e("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const b=(t={},s)=>{switch(s.type){case y:return{...t,isFetching:s.isFetching};case o:return{...t,items:(s==null?void 0:s.availableLicenses)||[]};default:return t}},B=(t={global:{}},s)=>{switch(s.type){case h:{const{message:v,options:C}=s;return{...t,global:{message:v,options:C}}}case r:return{...t,global:{}};default:return t}},M=(t={})=>t,x=(t={},s)=>{switch(s.type){case E:return{...t,isFetching:s.isFetching};case c:return{...t,data:(s==null?void 0:s.statsCounts)||{}};default:return t}},N=(t={},s)=>{switch(s.type){case d:return{...t,isFetching:s.isFetching};case S:return{...t,hasBeenDismissed:s.hasBeenDismissed};default:return t}},J=(t={},s)=>{switch(s.type){default:return t}},Z=(0,R.UY)({availableLicenses:b,notices:B,plugins:M,statsCounts:x,welcomeBanner:N,lifecycleStats:J});var j=e("../api/index.jsx"),U=e("../connection/state/store.jsx");const F={...{getAvailableLicenses:()=>async({dispatch:t})=>{t.setAvailableLicensesIsFetching(!0);try{const{apiRoot:s,apiNonce:v}=(window==null?void 0:window.myJetpackRest)||{};j.ZP.setApiRoot(s),j.ZP.setApiNonce(v);const C=await j.ZP.getUserLicenses();C&&C.items?t.setAvailableLicenses(C.items.filter(({attached_at:w,revoked_at:V})=>w===null&&V===null)):t.setAvailableLicenses([])}catch(s){t.setAvailableLicenses([])}finally{t.setAvailableLicensesIsFetching(!1)}},getStatsCounts:()=>async t=>{const{dispatch:s,registry:v}=t;s.setStatsCountsIsFetching(!0);const C=v.select(U.t).getBlogId();try{s.setStatsCounts(await(0,l.Z)({path:p(C)})),s.setStatsCountsIsFetching(!1)}catch(w){s.setStatsCountsIsFetching(!1)}}}},H=t=>{var s;return(s=t.statsCounts)==null?void 0:s.data},K=t=>t.lifecycleStats,et={...{getStatsCounts:H,isFetchingStatsCounts:t=>{var s;return((s=t.statsCounts)==null?void 0:s.isFetching)||!1}},...{getGlobalNotice:t=>{var s;return(s=t.notices)==null?void 0:s.global}},getWelcomeBannerHasBeenDismissed:t=>{var s;return(s=t.welcomeBanner)==null?void 0:s.hasBeenDismissed},getGuessedSiteLifecycleStatus:t=>{const{modules:s,purchases:v,plugins:C,isSiteConnected:w,isUserConnected:V}=K(t);return v.length===0&&s.length<3?(!V||!w)&&s.length===0&&C.length===1?"brand-new":"new":v.length===1&&s.length<10?"settling-in":"established"}};var st=e("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const O=class{static mayBeInit(s,v){O.store===null&&(O.store=(0,st.Z)(s,v),(0,R.z2)(O.store))}};let W=O;tt(W,"store",null);const nt=W,q="my-jetpack";function at(){nt.mayBeInit(q,{__experimentalUseThunks:!0,reducer:Z,actions:G,selectors:et,resolvers:F,initialState:window.myJetpackInitialState||{}})}},"../../packages/my-jetpack/_inc/data/products/use-activate.ts":(m,n,e)=>{e.d(n,{Z:()=>g});var l=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),_=e("../../packages/my-jetpack/_inc/data/constants.ts"),u=e("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),a=e("../../packages/my-jetpack/_inc/data/products/use-product.ts");const p=l.__,g=o=>{const{detail:E,refetch:c}=(0,a.Z)(o),{mutate:d,isPending:S}=(0,u.Z)("activateProduct",{path:`${_.Jk}/${o}`,method:"POST"},{onSuccess:c},null,(0,l.gB)(p("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),E.name));return{activate:d,isPending:S}}},"../../packages/my-jetpack/_inc/data/use-simple-mutation.ts":(m,n,e)=>{e.d(n,{Z:()=>p});var l=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js"),_=e("../../../node_modules/.pnpm/@wordpress+api-fetch@6.49.0/node_modules/@wordpress/api-fetch/build-module/index.js"),u=e("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const p=(y,g,o,E,c)=>{const d=(0,l.D)({mutationKey:[y,E],mutationFn:()=>(0,_.Z)(g),...o}),{isError:S,isPending:h}=d;return(0,u.o)({infoName:y,isError:!h&&S,overrideMessage:c}),d}}}]);})();
