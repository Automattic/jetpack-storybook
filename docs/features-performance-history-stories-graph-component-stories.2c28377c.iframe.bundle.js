"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7665],{"../../plugins/boost/app/assets/src/js/features/performance-history/stories/graph-component.stories.tsx":(k,b,e)=>{e.r(b),e.d(b,{__namedExportsOrder:()=>cs,_default:()=>ne,default:()=>as});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../components/components/boost-score-graph/index.tsx"),j=e("../components/components/spinner/index.jsx"),E=e("../components/components/popover/index.tsx"),m=e("../components/components/gridicon/index.tsx"),p=e("../components/components/button/index.tsx"),y=e("../components/tools/jp-redirect/index.ts"),L=e("../components/components/product-price/index.tsx"),M=e("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/queryClient.js"),s=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),u=e("../../../node_modules/.pnpm/@wordpress+element@6.21.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),g=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js");const P="my-jetpack/v1",v="jetpack/v4/stats-app",A="jetpack/v4",G=null,w=null,F=null,Q=null,D=`${P}/site/products`,$=null,V="videopress/v1/stats/featured",ae=null,je=null,ce=null,ee=null,ie=null,be=null,de=null,te=null,le=null,R=t=>`${v}/sites/${t}/stats/highlights`,ye="product",ft="product ownership",pe="activate product",ke="install product",Et="videopress stats",se="available licenses",Ge="chat availability",We="chat authentication",St="backup history",Je="stats counts",Re="dismiss welcome banner",Ie="purchases",Qe="evaluate site recommendations",$e="save site evaluation result",Ze="remove site evaluation result",Xe="update historically active modules",qe="get jetpack manage data",et="red bubble alerts",xe="get protect data",Pe="get videopress data",tt="get oauth authorize url",jt={ANTI_SPAM:"anti-spam",BACKUP:"backup",BOOST:"boost",BRUTE_FORCE:"brute-force",CRM:"crm",CREATOR:"creator",EXTRAS:"extras",JETPACK_AI:"jetpack-ai",NEWSLETTER:"newsletter",PROTECT:"protect",RELATED_POSTS:"related-posts",SCAN:"scan",SEARCH:"search",SITE_ACCELERATOR:"site-accelerator",SOCIAL:"social",STATS:"stats",VIDEOPRESS:"videopress",SECURITY:"security",GROWTH:"growth",COMPLETE:"complete"};var Oe=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js"),Ue=e("../../../node_modules/.pnpm/@wordpress+api-fetch@7.21.0/node_modules/@wordpress/api-fetch/build-module/index.js");const Ne=100,bt=200,st=300;var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ve={message:"",title:null,options:{level:"info",priority:0}},Le=(0,a.createContext)({currentNotice:ve,setNotice:null,resetNotice:null}),yt=({children:t})=>{const[o,i]=useState(ve),d=useCallback(()=>{i(ve)},[]),l=useCallback((_,S)=>{if(!o.message||_.options.priority>o.options.priority){const h={..._.options,onClose:_.options?.onClose||(_.options?.hideCloseButton?void 0:S)};d(),i({..._,options:h})}},[o.message,o.options.priority,d]);return _jsx(Le.Provider,{value:{currentNotice:o,setNotice:l,resetNotice:d},children:t})},nt=null;try{noticeContext.displayName="noticeContext",noticeContext.__docgenInfo={description:"",displayName:"noticeContext",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"]={docgenInfo:noticeContext.__docgenInfo,name:"noticeContext",path:"../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"})}catch{}const Me=g.__,Z=[Ie,pe,ke,xe,Pe],we=({infoName:t,isError:o,overrideMessage:i})=>{const{setNotice:d}=(0,a.useContext)(Le),l=i??(0,g.sprintf)(Me("There was an error fetching your %s information. Check your site connectivity and try again.","jetpack-my-jetpack"),t);(0,a.useEffect)(()=>{o&&Z.includes(t)&&d({message:l,options:{id:"fetching-error-notice",level:"error",priority:Ne}})},[l,d,o,t])},n=({name:t,query:o,options:i,errorMessage:d})=>{const l=(0,Oe.I)({queryKey:[t],queryFn:()=>(0,Ue.A)(o),refetchOnWindowFocus:!1,refetchIntervalInBackground:!1,...i}),{error:_,isError:S,isLoading:h}=l;return we({infoName:t,isError:!h&&S&&_.code!=="not_connected",overrideMessage:d}),l},r=t=>t?window?.myJetpackInitialState?.[t]??{}:window?.myJetpackInitialState,I=()=>window?.myJetpackRest??{},O=t=>t?window?.JP_CONNECTION_INITIAL_STATE?.[t]??{}:window?.JP_CONNECTION_INITIAL_STATE,_e=t=>Array.isArray(t)?t.map(o=>_e(o)):typeof t=="object"&&t!==null?Object.fromEntries(Object.entries(t).map(([o,i])=>[o.replace(/([-_][a-z])/gi,d=>d.toUpperCase().replace(/[-_]/g,"")),_e(i)])):t,Ve=_e,ze=t=>t.pricingForUi.productTerm==="year"?Math.round(t.pricingForUi.fullPrice/12*100)/100:t.pricingForUi.fullPrice,ue=t=>t.pricingForUi.productTerm==="year"?Math.round(t.pricingForUi.discountPrice/12*100)/100:t.pricingForUi.discountPrice,Fe=t=>{const o=Ve(t);return o.features=o.features||[],o.supportedProducts=o.supportedProducts||[],o.pricingForUi&&(o.pricingForUi.fullPricePerMonth=ze(o),o.pricingForUi.discountPricePerMonth=ue(o)),o},me=()=>{const{items:t}=r("products"),{data:o,isLoading:i,isError:d}=n({name:`${ye}`,query:{path:`${D}`},options:{enabled:!0}});if(!i&&!d)for(const[l,_]of Object.entries(t))o&&o[l]&&(t[l]={..._,...o[l]});return t?{data:Object.entries(t).reduce((l,[_,S])=>({...l,[_]:Fe(S)}),{}),isLoading:i,isError:d}:{data:{},isLoading:!1,isError:!1}},Ae=t=>{const o=t&&t?.length?`?products=${t?.join(",")}`:"";return n({name:`${ye}`,query:{path:`${D}${o}`},options:{enabled:!1}})},He=async t=>{const{data:o,isError:i,isLoading:d}=await t(),l=window.myJetpackInitialState.products.items;i||d||Object.keys(o).forEach(_=>{window.myJetpackInitialState.products.items[_]={...l[_],...o[_]}})},vt=t=>{const o=Array.isArray(t)?t:[t],{data:i,isLoading:d}=me(),l=o?.map(h=>i?.[h]),{refetch:_,isLoading:S}=Ae(o);return{products:l,refetch:(0,a.useCallback)(()=>He(_),[_]),isLoading:S||d}},ot=t=>{const{products:o,refetch:i,isLoading:d}=vt([t]);return{detail:o[0],refetch:i,isLoading:d}};var rt=e("../analytics/index.jsx"),at=e("../connection/components/use-connection/index.jsx");const At=({skipUserConnection:t=!1,redirectUri:o=""}={})=>{const{apiRoot:i,apiNonce:d}=I(),{topJetpackMenuItemUrl:l,blogID:_}=r(),{registrationNonce:S}=O(),h=(0,at.A)({apiRoot:i,apiNonce:d,registrationNonce:S,skipUserConnection:t,from:"my-jetpack",redirectUri:o,autoTrigger:!1}),x=h.isRegistered,N=h.isRegistered,H=h.hasConnectedOwner;return{apiNonce:d,apiRoot:i,blogID:_,registrationNonce:S,...h,isSiteConnected:x,siteIsRegistered:N,topJetpackMenuItemUrl:l,hasConnectedOwner:H}},Tt=()=>{const{isUserConnected:t,isSiteConnected:o,connectedPlugins:i,userConnectionData:d={}}=At(),{login:l,ID:_}=d.currentUser?.wpcomUser||{},{myJetpackVersion:S=""}=r();(0,a.useEffect)(()=>{t&&_&&l&&rt.A.initialize(_,l)},[_,t,l]);const h=Object.keys(i||{}).sort().join(",").replaceAll("jetpack-","");return{recordEvent:(0,a.useCallback)((N,H)=>{rt.A.tracks.recordEvent(N,{version:S,is_site_connected:o,is_user_connected:t,referring_plugins:h,...H})},[])}};var Ct=e("../../packages/my-jetpack/_inc/components/loading-block/index.tsx"),kt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal.tsx"),ct=e("../api/index.jsx"),it=e("../script-data/src/utils.ts"),Rt=e("../../../node_modules/.pnpm/@wordpress+data@10.21.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),It=e("../../../node_modules/.pnpm/@wordpress+data@10.21.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),xt=e("../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js"),Pt=e.n(xt);function Ot(){switch((typeof window<"u"&&window?.JP_CONNECTION_INITIAL_STATE||(0,it.au)()?.connection)?.calypsoEnv){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var dt=e("../connection/state/store.jsx");const U=Pt()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:Ut,apiRoot:Nt,apiNonce:Lt,siteSuffix:Mt}=window?.JP_CONNECTION_INITIAL_STATE||(0,it.au)()?.connection||{},wt=()=>typeof window<"u"?window?.myJetpackInitialState?.adminUrl:null;function Dt({productSlug:t,redirectUrl:o,siteSuffix:i=Mt,adminUrl:d=wt(),connectAfterCheckout:l=!1,siteProductAvailabilityHandler:_=null,quantity:S=null,from:h,useBlogIdSuffix:x=!1}={}){U("productSlug is %s",t),U("redirectUrl is %s",o),U("siteSuffix is %s",i),U("from is %s",h);const[N,H]=(0,a.useState)(!1),{registerSite:fe}=(0,Rt.A)(dt.a),B=(0,It.A)(T=>T(dt.a).getBlogId(),[]);U("blogID is %s",B??"undefined"),x=x&&!!B;const{isUserConnected:W,isRegistered:J,handleConnectUser:oe}=(0,at.A)({redirectUri:o,from:h}),C=(0,a.useMemo)(()=>{const T=Ot(),K=(!J||!W)&&l,re=K?"checkout/jetpack/":`checkout/${x?B.toString():i}/`,Se=S!=null?`:-q-${S}`:"",Y=new URL(`${T}${re}${t}${Se}`);return K?(Y.searchParams.set("connect_after_checkout",!0),Y.searchParams.set("admin_url",d),Y.searchParams.set("from_site_slug",i)):Y.searchParams.set("site",i),Y.searchParams.set("source",h),Y.searchParams.set("redirect_to",o),W||Y.searchParams.set("unlinked","1"),Y},[J,W,l,i,S,t,h,o,d,x,B]);U("isRegistered is %s",J),U("isUserConnected is %s",W),U("connectAfterCheckout is %s",l),U("checkoutUrl is %s",C);const z=(T=null)=>Promise.resolve(_&&_()).then(K=>{if(T&&C.searchParams.set("redirect_to",T),K)return U("handleAfterRegistration: Site has a product associated"),oe();U("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",C),window.location.href=C}),q=(T=null)=>{T&&C.searchParams.set("redirect_to",T),U("Redirecting to connectAfterCheckout flow: %s",C),window.location.href=C},Ee=(T,K=null)=>{if(T&&T.preventDefault(),H(!0),l)return q(K);if(J)return z(K);fe({registrationNonce:Ut,redirectUri:o}).then(()=>z(K))};return(0,a.useEffect)(()=>{ct.Ay.setApiRoot(Nt),ct.Ay.setApiNonce(Lt)},[]),{run:Ee,isRegistered:J,hasCheckoutStarted:N}}function Vt(){const t=window.location.search;return new URLSearchParams(t).has("redirect_to_referrer","1")&&document.referrer!==""?document.referrer:null}var zt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/style.module.scss");const Ft=g.__,Ht=({slug:t,buttonLabel:o,disabled:i,isExternalLink:d,href:l})=>{const{siteSuffix:S="",adminUrl:h="",myJetpackCheckoutUri:x=""}=r(),{detail:N,isLoading:H}=ot(t),{pricingForUi:fe,postCheckoutUrl:B}=N,{wpcomProductSlug:W,tiers:J}=fe||{},oe=t!=="boost"?W:J?.upgraded?.wpcomProductSlug,C=Vt(),q=(0,a.useCallback)(()=>B||C||x,[B,C,x])(),{run:Ee,hasCheckoutStarted:T}=Dt({productSlug:oe,redirectUrl:q,siteSuffix:S,adminUrl:h,connectAfterCheckout:!0,from:"my-jetpack",quantity:null,useBlogIdSuffix:!0});return(0,c.jsx)(p.A,{variant:"primary",className:zt.A["action-button"],isLoading:H||T,onClick:Ee,isExternalLink:d,href:l,disabled:i||H,children:o||Ft("Upgrade","jetpack-my-jetpack")})};try{productinterstitialmodalcta.displayName="productinterstitialmodalcta",productinterstitialmodalcta.__docgenInfo={description:"",displayName:"productinterstitialmodalcta",props:{slug:{defaultValue:null,description:"",name:"slug",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isExternalLink:{defaultValue:null,description:"",name:"isExternalLink",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal-cta.tsx#productinterstitialmodalcta"]={docgenInfo:productinterstitialmodalcta.__docgenInfo,name:"productinterstitialmodalcta",path:"../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal-cta.tsx#productinterstitialmodalcta"})}catch{}var Bt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstifial-feature-list.tsx");const Be=g.__,Kt=g._x,Yt=({slug:t,children:o,onOpen:i,onClose:d,description:l,features:_,...S})=>{const{recordEvent:h}=Tt(),{detail:x,isLoading:N}=ot(t),{title:H,longDescription:fe,features:B,pricingForUi:W}=x,J=l||fe,oe=_||B,C=t==="boost"?W?.tiers?.upgraded:W;let z,q;t==="boost"?(z=C?.fullPrice/12,q=C?.discountPrice/12):(z=C?.fullPricePerMonth,q=C?.discountPricePerMonth);const{currencyCode:Ee,introductoryOffer:T,productTerm:K}=C||{};let re;T?.intervalUnit==="month"&&T?.intervalCount===1?re=(0,g.sprintf)(Be("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),z):K==="year"?re=Be("/month, paid yearly","jetpack-my-jetpack"):re=Kt("/month",'Price description representing "per month" price',"jetpack-my-jetpack");const Se=T?.reason?z:q,Y=N?(0,c.jsx)(Ct.A,{width:"100%",height:"100px"}):(0,c.jsx)(L.A,{currency:Ee,price:z,offPrice:Se,showNotOffPrice:z>Se,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:Se>=z,legend:re}),is=(0,a.useCallback)(()=>{h("jetpack_modal_interstitial_open",{placement:"product-page",context:"my-jetpack",product_slug:t}),i?.()},[h,t,i]),ds=(0,a.useCallback)(()=>{h("jetpack_modal_interstitial_close",{placement:"product-page",context:"my-jetpack",product_slug:t}),d?.()},[h,t,d]);let ht=null;return t==="jetpack-ai"&&(ht=(0,c.jsx)("p",{children:(0,u.A)(Be("* Limits apply for high request capacity. <link>Learn more about it here</link>.","jetpack-my-jetpack"),{link:(0,c.jsx)(p.A,{href:(0,y.A)("ai-assistant-fair-usage-policy"),variant:"link",weight:"regular",size:"small",target:"_blank"})})})),(0,c.jsx)(kt.A,{title:H,description:J,priceComponent:Y,modalMainButton:(0,c.jsx)(Ht,{slug:t}),onOpen:is,onClose:ds,isLoading:N,...S,children:(0,c.jsxs)(c.Fragment,{children:[(N||oe)&&(0,c.jsx)(Bt.A,{isLoading:N,features:oe}),ht,o]})})},Gt=t=>{const o=new M.E;return(0,c.jsx)(s.Ht,{client:o,children:(0,c.jsx)(Yt,{...t})})};try{productinterstitialmyjetpack.displayName="productinterstitialmyjetpack",productinterstitialmyjetpack.__docgenInfo={description:"",displayName:"productinterstitialmyjetpack",props:{children:{defaultValue:null,description:"Child elements to be rendered within the placement",name:"children",required:!1,type:{name:"ReactNode"}},slug:{defaultValue:null,description:"Product slug",name:"slug",required:!0,type:{name:"string"}},onOpen:{defaultValue:null,description:"Callback function to be called when the modal is opened",name:"onOpen",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Callback function to be called when the modal is closed",name:"onClose",required:!1,type:{name:"() => void"}},description:{defaultValue:null,description:"Optional description for the product that overwrites the description from the product details",name:"description",required:!1,type:{name:"string"}},features:{defaultValue:null,description:"Optional features for the product that overwrites the features from the product details",name:"features",required:!1,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-my-jetpack.tsx#productinterstitialmyjetpack"]={docgenInfo:productinterstitialmyjetpack.__docgenInfo,name:"productinterstitialmyjetpack",path:"../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-my-jetpack.tsx#productinterstitialmyjetpack"})}catch{}const Wt=e.p+"static/media/boost.9e9a227e.png";var Jt=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js");const Qt=()=>(0,c.jsx)("svg",{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M10.6953 16.3906L18.4062 8.60938L10.6953 0.828125L8.63281 2.98438L12.8516 7.10938H0.699219V10.1094H12.8516L8.63281 14.2344L10.6953 16.3906Z"})});var $t=e("../../plugins/boost/app/assets/src/js/lib/utils/analytics.ts"),Zt=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),lt=e.n(Zt),pt=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.module.scss"),Ke={};Ke.insert="head",Ke.singleton=!1;var fs=lt()(pt.A,Ke);const Te=pt.A.locals||{};var Xt=e("../react-data-sync-client/src/index.ts"),ge=e("../../../node_modules/.pnpm/zod@3.22.3/node_modules/zod/lib/index.mjs");const qt=ge.z.object({priceBefore:ge.z.number(),priceAfter:ge.z.number(),currencyCode:ge.z.string(),isIntroductoryOffer:ge.z.boolean()}).nullable(),es=()=>{const[{data:t}]=(0,Xt.Bt)("jetpack_boost_ds","pricing",qt);return t},ts=g.__,ss=({description:t,identifier:o,onClick:i,eventName:d="upsell_cta_from_settings_page_in_plugin"})=>{if(!Jetpack_Boost.site.online)return null;const l=()=>{(0,$t.n7)(d,{identifier:o}),i&&i()},_=es(),S=_?(0,Jt.vA)(_.priceAfter/12,_.currencyCode):null,h=S?S.symbol+S.integer+S.fraction:"_";return(0,c.jsxs)("button",{className:Te["upgrade-cta"],onClick:l,children:[(0,c.jsxs)("div",{className:Te.body,children:[(0,c.jsx)("p",{children:t}),(0,c.jsx)("p",{className:Te["action-line"],children:(0,g.sprintf)(ts("Upgrade now only %s per month","jetpack-boost"),h)})]}),(0,c.jsx)("div",{className:Te.icon,children:(0,c.jsx)(Qt,{})})]})};try{upgradecta.displayName="upgradecta",upgradecta.__docgenInfo={description:"",displayName:"upgradecta",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},eventName:{defaultValue:{value:"upsell_cta_from_settings_page_in_plugin"},description:"",name:"eventName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.tsx#upgradecta"]={docgenInfo:upgradecta.__docgenInfo,name:"upgradecta",path:"../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.tsx#upgradecta"})}catch{}const X=g.__,ns=({description:t="",identifier:o,customModalTrigger:i})=>{const d=(0,y.A)("jetpack-boost-interstitial-modal-learn-more");return(0,c.jsx)(Gt,{slug:"boost",customModalTrigger:i??(0,c.jsx)(ss,{identifier:o,description:t}),buttonLabel:X("Upgrade now","jetpack-boost"),isWithVideo:!1,secondaryColumn:(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:Wt,alt:"Boost"})}),secondaryButtonHref:d,description:X("Unlock the full potential of Jetpack Boost with automated performance optimization tools and more.","jetpack-boost"),features:[X("Automated Critical CSS Generation","jetpack-boost"),X("Automated Image Scanning","jetpack-boost"),X("In-depth Performance Insights","jetpack-boost"),X("Customizable Image Optimization","jetpack-boost"),X("Expert Support With Personal Assistance Available","jetpack-boost")]})};try{interstitialmodalcta.displayName="interstitialmodalcta",interstitialmodalcta.__docgenInfo={description:"",displayName:"interstitialmodalcta",props:{description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},customModalTrigger:{defaultValue:null,description:"",name:"customModalTrigger",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/upgrade-cta/interstitial-modal-cta.tsx#interstitialmodalcta"]={docgenInfo:interstitialmodalcta.__docgenInfo,name:"interstitialmodalcta",path:"../../plugins/boost/app/assets/src/js/features/upgrade-cta/interstitial-modal-cta.tsx#interstitialmodalcta"})}catch{}var _t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss"),Ye={};Ye.insert="head",Ye.singleton=!1;var js=lt()(_t.A,Ye);const ut=_t.A.locals||{},he=g.__,mt=({children:t})=>(0,c.jsxs)("div",{className:ut.dummy,children:[t,(0,c.jsx)(f.A,{isPlaceholder:!0})]}),gt=({periods:t=[],annotations:o=[],startDate:i=0,endDate:d=0,needsUpgrade:l,handleUpgrade:_,isFreshStart:S,handleDismissFreshStart:h,isLoading:x})=>x?(0,c.jsx)("div",{className:ut.dummy,children:(0,c.jsx)(j.A,{color:"#000000"})}):l?(0,c.jsx)(mt,{children:(0,c.jsx)(E.A,{icon:(0,c.jsx)(m.A,{icon:"lock"}),action:(0,c.jsx)(ns,{identifier:"historical-performance",customModalTrigger:(0,c.jsx)(p.A,{onClick:_,children:he("Upgrade now!","jetpack-boost")})}),children:(0,c.jsx)("p",{children:he("Upgrade and learn more about your site performance over time.","jetpack-boost")})})}):S?(0,c.jsx)(mt,{children:(0,c.jsx)(E.A,{icon:(0,c.jsx)(m.A,{icon:"checkmark"}),action:(0,c.jsx)(p.A,{onClick:h,children:he("Okay, got it!","jetpack-boost")}),children:(0,c.jsxs)("p",{children:[he("Hello there! Jetpack Boost premium has been activated.","jetpack-boost"),(0,c.jsx)("br",{}),he("Your scores will be recorded from now on.","jetpack-boost")]})})}):(0,c.jsx)(f.A,{periods:t,annotations:o,startDate:i,endDate:d});try{graphcomponent.displayName="graphcomponent",graphcomponent.__docgenInfo={description:"",displayName:"graphcomponent",props:{periods:{defaultValue:{value:"[]"},description:"",name:"periods",required:!1,type:{name:"Period[]"}},annotations:{defaultValue:{value:"[]"},description:"",name:"annotations",required:!1,type:{name:"Annotation[]"}},startDate:{defaultValue:{value:"0"},description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:{value:"0"},description:"",name:"endDate",required:!1,type:{name:"number"}},needsUpgrade:{defaultValue:null,description:"",name:"needsUpgrade",required:!0,type:{name:"boolean"}},handleUpgrade:{defaultValue:null,description:"",name:"handleUpgrade",required:!0,type:{name:"() => void"}},isFreshStart:{defaultValue:null,description:"",name:"isFreshStart",required:!0,type:{name:"boolean"}},handleDismissFreshStart:{defaultValue:null,description:"",name:"handleDismissFreshStart",required:!0,type:{name:"() => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"]={docgenInfo:graphcomponent.__docgenInfo,name:"graphcomponent",path:"../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"})}catch{}var ys=`import React, { useEffect } from 'react';
import type { Meta } from '@storybook/react';
import GraphComponent from '../graph-component/graph-component';

const exampleRawResponse = {
	data: {
		_meta: {
			start: 1689772803000,
			end: 1690647000000,
		},
		periods: [
			{
				timestamp: 1690636803000,
				dimensions: {
					desktop_overall_score: 86,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689772803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689859203000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 49,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1689945603000,
				dimensions: {
					desktop_overall_score: 20,
					mobile_overall_score: 30,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690032003000,
				dimensions: {
					desktop_overall_score: 72,
					mobile_overall_score: 40,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690118403000,
				dimensions: {
					desktop_overall_score: 55,
					mobile_overall_score: 45,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690204803000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 52,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690291203000,
				dimensions: {
					desktop_overall_score: 70,
					mobile_overall_score: 50,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690377603000,
				dimensions: {
					desktop_overall_score: 75,
					mobile_overall_score: 90,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690464003000,
				dimensions: {
					desktop_overall_score: 80,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
			{
				timestamp: 1690550403000,
				dimensions: {
					desktop_overall_score: 85,
					mobile_overall_score: 60,
					desktop_cls: 0.088,
					desktop_lcp: 3.2,
					desktop_tbt: 0,
					mobile_cls: 0.088,
					mobile_lcp: 3.2,
					mobile_tbt: 0,
				},
			},
		],
		annotations: [
			{
				timestamp: 1690291223000,
				text: 'Annotation text',
			},
			{
				timestamp: 1689984000000,
				text: 'Another Annotation text',
			}
		]
	},
};

const meta: Meta< typeof GraphComponent > = {
	title: 'Plugins/Boost/Performance History Graph',
	component: GraphComponent,
	argTypes: {
		startDate: { control: 'date' },
		endDate: { control: 'date' },
		periods: { control: 'object' },
		annotations: { control: 'object' },
		isLoading: { control: 'boolean' },
		needsUpgrade: { control: 'boolean' },
		isFreshStart: { control: 'boolean' },
	},
	decorators: [
		Story => (
			<div style={ { maxWidth: '1320px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	startDate: exampleRawResponse.data._meta.start,
	endDate: exampleRawResponse.data._meta.end,
	periods: exampleRawResponse.data.periods,
	annotations: exampleRawResponse.data.annotations,
	isLoading: false,
	needsUpgrade: false,
	isFreshStart: false,
};

export default meta;

const Template = args => {
	const [isFreshStart, setIsFreshStart] = React.useState( args.isFreshStart );
	const [needsUpgrade, setNeedsUpgrade] = React.useState( args.needsUpgrade );

	// Update the state when the args change
	useEffect( () => {
		setIsFreshStart( args.isFreshStart );
		setNeedsUpgrade( args.needsUpgrade );
	}, [args.isFreshStart, args.needsUpgrade] );

	args.handleUpgrade = () => {
		setNeedsUpgrade( false );
	}
	args.handleDismissFreshStart = () => {
		setIsFreshStart( false );
	}
	return <GraphComponent { ...args } isFreshStart={isFreshStart} needsUpgrade={needsUpgrade} />
};
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,vs={_default:{startLoc:{col:17,line:197},endLoc:{col:1,line:217},startBody:{col:17,line:197},endBody:{col:1,line:217}}};const Ce={data:{_meta:{start:1689772803e3,end:1690647e6},periods:[{timestamp:1690636803e3,dimensions:{desktop_overall_score:86,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689859203e3,dimensions:{desktop_overall_score:72,mobile_overall_score:49,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689945603e3,dimensions:{desktop_overall_score:20,mobile_overall_score:30,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690032003e3,dimensions:{desktop_overall_score:72,mobile_overall_score:40,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690118403e3,dimensions:{desktop_overall_score:55,mobile_overall_score:45,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690204803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690291203e3,dimensions:{desktop_overall_score:70,mobile_overall_score:50,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690377603e3,dimensions:{desktop_overall_score:75,mobile_overall_score:90,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690464003e3,dimensions:{desktop_overall_score:80,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690550403e3,dimensions:{desktop_overall_score:85,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}],annotations:[{timestamp:1690291223e3,text:"Annotation text"},{timestamp:1689984e6,text:"Another Annotation text"}]}},os={parameters:{storySource:{source:`import React, { useEffect } from 'react';
import GraphComponent from '../graph-component/graph-component';
import { jsx as _jsx } from "react/jsx-runtime";
const exampleRawResponse = {
  data: {
    _meta: {
      start: 1689772803000,
      end: 1690647000000
    },
    periods: [{
      timestamp: 1690636803000,
      dimensions: {
        desktop_overall_score: 86,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689772803000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689859203000,
      dimensions: {
        desktop_overall_score: 72,
        mobile_overall_score: 49,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1689945603000,
      dimensions: {
        desktop_overall_score: 20,
        mobile_overall_score: 30,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690032003000,
      dimensions: {
        desktop_overall_score: 72,
        mobile_overall_score: 40,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690118403000,
      dimensions: {
        desktop_overall_score: 55,
        mobile_overall_score: 45,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690204803000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 52,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690291203000,
      dimensions: {
        desktop_overall_score: 70,
        mobile_overall_score: 50,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690377603000,
      dimensions: {
        desktop_overall_score: 75,
        mobile_overall_score: 90,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690464003000,
      dimensions: {
        desktop_overall_score: 80,
        mobile_overall_score: 60,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }, {
      timestamp: 1690550403000,
      dimensions: {
        desktop_overall_score: 85,
        mobile_overall_score: 60,
        desktop_cls: 0.088,
        desktop_lcp: 3.2,
        desktop_tbt: 0,
        mobile_cls: 0.088,
        mobile_lcp: 3.2,
        mobile_tbt: 0
      }
    }],
    annotations: [{
      timestamp: 1690291223000,
      text: 'Annotation text'
    }, {
      timestamp: 1689984000000,
      text: 'Another Annotation text'
    }]
  }
};
const meta = {
  title: 'Plugins/Boost/Performance History Graph',
  component: GraphComponent,
  argTypes: {
    startDate: {
      control: 'date'
    },
    endDate: {
      control: 'date'
    },
    periods: {
      control: 'object'
    },
    annotations: {
      control: 'object'
    },
    isLoading: {
      control: 'boolean'
    },
    needsUpgrade: {
      control: 'boolean'
    },
    isFreshStart: {
      control: 'boolean'
    }
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '1320px',
      margin: '200px auto',
      fontSize: '16px'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const defaultValues = {
  startDate: exampleRawResponse.data._meta.start,
  endDate: exampleRawResponse.data._meta.end,
  periods: exampleRawResponse.data.periods,
  annotations: exampleRawResponse.data.annotations,
  isLoading: false,
  needsUpgrade: false,
  isFreshStart: false
};
export default meta;
const Template = args => {
  const [isFreshStart, setIsFreshStart] = React.useState(args.isFreshStart);
  const [needsUpgrade, setNeedsUpgrade] = React.useState(args.needsUpgrade);

  // Update the state when the args change
  useEffect(() => {
    setIsFreshStart(args.isFreshStart);
    setNeedsUpgrade(args.needsUpgrade);
  }, [args.isFreshStart, args.needsUpgrade]);
  args.handleUpgrade = () => {
    setNeedsUpgrade(false);
  };
  args.handleDismissFreshStart = () => {
    setIsFreshStart(false);
  };
  return /*#__PURE__*/_jsx(GraphComponent, {
    ...args,
    isFreshStart: isFreshStart,
    needsUpgrade: needsUpgrade
  });
};
export const _default = Template.bind({});
_default.args = defaultValues;`,locationsMap:{default:{startLoc:{col:17,line:197},endLoc:{col:1,line:217},startBody:{col:17,line:197},endBody:{col:1,line:217}}}}},title:"Plugins/Boost/Performance History Graph",component:gt,argTypes:{startDate:{control:"date"},endDate:{control:"date"},periods:{control:"object"},annotations:{control:"object"},isLoading:{control:"boolean"},needsUpgrade:{control:"boolean"},isFreshStart:{control:"boolean"}},decorators:[t=>(0,c.jsx)("div",{style:{maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,c.jsx)(t,{})})]},rs={startDate:Ce.data._meta.start,endDate:Ce.data._meta.end,periods:Ce.data.periods,annotations:Ce.data.annotations,isLoading:!1,needsUpgrade:!1,isFreshStart:!1},as=os,ne=(t=>{const[o,i]=a.useState(t.isFreshStart),[d,l]=a.useState(t.needsUpgrade);return(0,a.useEffect)(()=>{i(t.isFreshStart),l(t.needsUpgrade)},[t.isFreshStart,t.needsUpgrade]),t.handleUpgrade=()=>{l(!1)},t.handleDismissFreshStart=()=>{i(!1)},(0,c.jsx)(gt,{...t,isFreshStart:o,needsUpgrade:d})}).bind({});ne.args=rs;const cs=["_default"];ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`args => {
  const [isFreshStart, setIsFreshStart] = React.useState(args.isFreshStart);
  const [needsUpgrade, setNeedsUpgrade] = React.useState(args.needsUpgrade);

  // Update the state when the args change
  useEffect(() => {
    setIsFreshStart(args.isFreshStart);
    setNeedsUpgrade(args.needsUpgrade);
  }, [args.isFreshStart, args.needsUpgrade]);
  args.handleUpgrade = () => {
    setNeedsUpgrade(false);
  };
  args.handleDismissFreshStart = () => {
    setIsFreshStart(false);
  };
  return <GraphComponent {...args} isFreshStart={isFreshStart} needsUpgrade={needsUpgrade} />;
}`,...ne.parameters?.docs?.source}}}},"../components/components/spinner/index.jsx":(k,b,e)=>{e.d(b,{A:()=>g});var a=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),f=e.n(a),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(E),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),y={};y.insert="head",y.singleton=!1;var L=m()(p.A,y);const M=p.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=({color:P="#FFFFFF",className:v="",size:A=20})=>{const G=v+" jp-components-spinner",w={width:A,height:A,fontSize:A,borderTopColor:P},F={borderTopColor:P,borderRightColor:P};return(0,s.jsx)("div",{className:G,children:(0,s.jsx)("div",{className:"jp-components-spinner__outer",style:w,children:(0,s.jsx)("div",{className:"jp-components-spinner__inner",style:F})})})};u.propTypes={color:f().string,className:f().string,size:f().number};const g=u;u.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}}},"../connection/components/use-connection/index.jsx":(k,b,e)=>{e.d(b,{A:()=>L});var a=e("../api/index.jsx"),f=e("../script-data/src/utils.ts"),j=e("../../../node_modules/.pnpm/@wordpress+data@10.21.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),E=e("../../../node_modules/.pnpm/@wordpress+data@10.21.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../connection/state/store.jsx");const y=window?.JP_CONNECTION_INITIAL_STATE||(0,f.au)()?.connection||{};function L({registrationNonce:M=y.registrationNonce,apiRoot:s=y.apiRoot,apiNonce:u=y.apiNonce,redirectUri:g,autoTrigger:P,from:v,skipUserConnection:A,skipPricingPage:G}={}){const{registerSite:w,connectUser:F,refreshConnectedPlugins:Q}=(0,j.A)(p.a),D=(0,E.A)(R=>R(p.a).getRegistrationError()),{siteIsRegistering:$,userIsConnecting:V,userConnectionData:ae,connectedPlugins:je,connectionErrors:ce,isRegistered:ee,isUserConnected:ie,hasConnectedOwner:be,isOfflineMode:de}=(0,E.A)(R=>({siteIsRegistering:R(p.a).getSiteIsRegistering(),userIsConnecting:R(p.a).getUserIsConnecting(),userConnectionData:R(p.a).getUserConnectionData(),connectedPlugins:R(p.a).getConnectedPlugins(),connectionErrors:R(p.a).getConnectionErrors(),isOfflineMode:R(p.a).getIsOfflineMode(),...R(p.a).getConnectionStatus()})),te=()=>{if(A){if(g)return window.location=g,Promise.resolve(g)}else return F({from:v,redirectUri:g,skipPricingPage:G});return Promise.resolve()},le=R=>(R&&R.preventDefault(),ee?te():w({registrationNonce:M,redirectUri:g,from:v}).then(()=>te()));return(0,m.useEffect)(()=>{a.Ay.setApiRoot(s),a.Ay.setApiNonce(u)},[s,u]),(0,m.useEffect)(()=>{P&&!$&&!V&&le()},[]),{handleRegisterSite:le,handleConnectUser:te,refreshConnectedPlugins:Q,isRegistered:ee,isUserConnected:ie,siteIsRegistering:$,userIsConnecting:V,registrationError:D,userConnectionData:ae,hasConnectedOwner:be,connectedPlugins:je,connectionErrors:ce,isOfflineMode:de}}},"../connection/state/store.jsx":(k,b,e)=>{e.d(b,{a:()=>se});var a=e("../script-data/src/utils.ts"),f=e("../api/index.jsx");const j="SET_CONNECTION_STATUS",E="SET_CONNECTION_STATUS_IS_FETCHING",m="FETCH_CONNECTION_STATUS",p="SET_SITE_IS_REGISTERING",y="SET_USER_IS_CONNECTING",L="SET_REGISTRATION_ERROR",M="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",u="SET_AUTHORIZATION_URL",g="CONNECT_USER",P="DISCONNECT_USER_SUCCESS",v="FETCH_AUTHORIZATION_URL",A="SET_CONNECTED_PLUGINS",G="REFRESH_CONNECTED_PLUGINS",w="SET_CONNECTION_ERRORS",F="SET_IS_OFFLINE_MODE",Q=n=>({type:j,connectionStatus:n}),D=n=>({type:E,isFetching:n}),$=()=>({type:m}),V=n=>({type:p,isRegistering:n}),ae=n=>({type:y,isConnecting:n}),je=()=>({type:P}),ce=n=>({type:L,registrationError:n}),ee=()=>({type:M}),ie=n=>({type:u,authorizationUrl:n}),be=n=>({type:v,redirectUri:n}),de=n=>({type:A,connectedPlugins:n}),te=n=>({type:w,connectionErrors:n}),le=n=>({type:F,isOfflineMode:n});function*R({from:n,redirectFunc:r,redirectUri:I,skipPricingPage:O}={}){yield ae(!0),yield{type:g,from:n,redirectFunc:r,redirectUri:I,skipPricingPage:O}}function*ye({registrationNonce:n,redirectUri:r,from:I=""}){yield ee(),yield V(!0);try{const O=yield{type:s,registrationNonce:n,redirectUri:r,from:I};return yield Q({isRegistered:!0}),yield ie(O.authorizeUrl),yield V(!1),Promise.resolve(O)}catch(O){return yield ce(O),yield V(!1),Promise.reject(O)}}const pe={setConnectionStatus:Q,setConnectionStatusIsFetching:D,fetchConnectionStatus:$,fetchAuthorizationUrl:be,setSiteIsRegistering:V,setUserIsConnecting:ae,setRegistrationError:ce,clearRegistrationError:ee,setAuthorizationUrl:ie,registerSite:ye,connectUser:R,disconnectUserSuccess:je,setConnectedPlugins:de,refreshConnectedPlugins:()=>async({dispatch:n})=>await new Promise(r=>f.Ay.fetchConnectedPlugins().then(I=>{n(de(I)),r(I)})),setConnectionErrors:te,setIsOfflineMode:le};var ke=e("../../../node_modules/.pnpm/@wordpress+data@10.21.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");const se="jetpack-connection",Ge=({redirectUri:n,from:r})=>f.Ay.registerSite(null,n,r),We=(0,ke.b)(({resolveSelect:n})=>({from:r,redirectFunc:I,redirectUri:O,skipPricingPage:_e}={})=>new Promise((Ve,ze)=>{n(se).getAuthorizationUrl(O).then(ue=>{const Fe=I||(He=>window.location.assign(He)),me=new URL(ue);_e&&me.searchParams.set("skip_pricing","true"),r&&me.searchParams.set("from",encodeURIComponent(r));const Ae=me.toString();Fe(Ae),Ve(Ae)}).catch(ue=>{ze(ue)})})),Je={FETCH_AUTHORIZATION_URL:({redirectUri:n})=>f.Ay.fetchAuthorizationUrl(n),REGISTER_SITE:Ge,CONNECT_USER:We};var Re=e("../../../node_modules/.pnpm/@wordpress+data@10.21.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const Ie=(n={},r)=>{switch(r.type){case j:return{...n,...r.connectionStatus};case P:return{...n,isUserConnected:!1}}return n},Qe=(n={},r)=>{switch(r.type){case A:return r.connectedPlugins}return n},$e=(n=!1,r)=>{switch(r.type){case E:return r.isFetching}return n},Ze=(n=!1,r)=>{switch(r.type){case p:return r.isRegistering}return n},Xe=(n=!1,r)=>{switch(r.type){case y:return r.isConnecting}return n},qe=(n,r)=>{switch(r.type){case M:return!1;case L:return r.registrationError;default:return n}},et=(n,r)=>{switch(r.type){case u:return r.authorizationUrl;default:return n}},xe=(n,r)=>{switch(r.type){default:return n}},Pe=(n={},r)=>{switch(r.type){case w:return r.connectionErrors}return n},tt=(n=!1,r)=>{switch(r.type){case F:return r.isConnecting}return n},Oe=(0,Re.combineReducers)({connectionStatus:Ie,connectionStatusIsFetching:$e,siteIsRegistering:Ze,userIsConnecting:Xe,registrationError:qe,authorizationUrl:et,userConnectionData:xe,connectedPlugins:Qe,connectionErrors:Pe,isOfflineMode:tt});var Ue=e("../../../node_modules/.pnpm/@wordpress+data@10.21.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),Ne=e("../../../node_modules/.pnpm/@wordpress+data@10.21.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const st={...{getAuthorizationUrl:{isFulfilled:(n,...r)=>{const I=!!n.authorizationUrl,O=(0,Ue.L)(se).hasFinishedResolution("getAuthorizationUrl",r);return I&&!O&&(0,Ne.J)(se).finishResolution("getAuthorizationUrl",r),I},*fulfill(n){const r=yield pe.fetchAuthorizationUrl(n);yield pe.setAuthorizationUrl(r.authorizeUrl)}}}},nt={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>n?.userConnectionData?.currentUser?.wpcomUser,getBlogId:n=>n?.userConnectionData?.currentUser?.blogId}};var Me=e("../../../node_modules/.pnpm/@wordpress+data@10.21.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");class Z{static store=null;static mayBeInit(r,I){Z.store===null&&(Z.store=(0,Me.A)(r,I),(0,Re.register)(Z.store))}}const we=Z,De=window.JP_CONNECTION_INITIAL_STATE||(0,a.au)()?.connection;De||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),we.mayBeInit(se,{__experimentalUseThunks:!0,reducer:Oe,actions:pe,selectors:nt,resolvers:st,controls:Je,initialState:De||{}})},"../components/components/gridicon/index.tsx":(k,b,e)=>{e.d(b,{A:()=>P});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),f=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(E),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/gridicon/style.scss"),y={};y.insert="head",y.singleton=!1;var L=m()(p.A,y);const M=p.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const u=a.__;class g extends j.Component{static defaultProps={"aria-hidden":"false",focusable:"true"};needsOffset(A,G){return["gridicons-arrow-left","gridicons-arrow-right","gridicons-calendar","gridicons-cart","gridicons-folder","gridicons-help-outline","gridicons-info","gridicons-info-outline","gridicons-posts","gridicons-star-outline","gridicons-star"].indexOf(A)>=0?G%18===0:!1}getSVGDescription(A){if("description"in this.props)return this.props.description;switch(A){default:return"";case"gridicons-audio":return u("Has audio.","jetpack-components");case"gridicons-arrow-left":return u("Arrow left","jetpack-components");case"gridicons-arrow-right":return u("Arrow right","jetpack-components");case"gridicons-calendar":return u("Is an event.","jetpack-components");case"gridicons-cart":return u("Is a product.","jetpack-components");case"chevron-down":return u("Show filters","jetpack-components");case"gridicons-comment":return u("Matching comment.","jetpack-components");case"gridicons-cross":return u("Close.","jetpack-components");case"gridicons-filter":return u("Toggle search filters.","jetpack-components");case"gridicons-folder":return u("Category","jetpack-components");case"gridicons-help-outline":return u("Help","jetpack-components");case"gridicons-info":case"gridicons-info-outline":return u("Information.","jetpack-components");case"gridicons-image-multiple":return u("Has multiple images.","jetpack-components");case"gridicons-image":return u("Has an image.","jetpack-components");case"gridicons-page":return u("Page","jetpack-components");case"gridicons-post":return u("Post","jetpack-components");case"gridicons-jetpack-search":case"gridicons-search":return u("Magnifying Glass","jetpack-components");case"gridicons-tag":return u("Tag","jetpack-components");case"gridicons-video":return u("Has a video.","jetpack-components")}}renderIcon(A){switch(A){default:return null;case"gridicons-audio":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M8 4v10.184C7.686 14.072 7.353 14 7 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7h7v4.184c-.314-.112-.647-.184-1-.184-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4H8z"})});case"gridicons-arrow-left":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})});case"gridicons-arrow-right":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})});case"gridicons-block":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z"})});case"gridicons-calendar":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z"})});case"gridicons-cart":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5c.937 0 1.75-.65 1.952-1.566L21 5H7V4c0-1.105-.895-2-2-2H3v2h2v11c0 1.105.895 2 2 2h12c0-1.105-.895-2-2-2H7v-2h10.396z"})});case"gridicons-checkmark":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"})});case"gridicons-chevron-left":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16.443 7.41L15.0399 6L9.06934 12L15.0399 18L16.443 16.59L11.8855 12L16.443 7.41Z"})});case"gridicons-chevron-right":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M10.2366 6L8.8335 7.41L13.391 12L8.8335 16.59L10.2366 18L16.2072 12L10.2366 6Z"})});case"gridicons-chevron-down":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"})});case"gridicons-comment":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M3 6v9c0 1.105.895 2 2 2h9v5l5.325-3.804c1.05-.75 1.675-1.963 1.675-3.254V6c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2z"})});case"gridicons-computer":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 2H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm0 14H4V4h16v12z"})});case"gridicons-cross":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"})});case"gridicons-filter":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z"})});case"gridicons-folder":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"})});case"gridicons-help-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-1.962-2v-.528c0-.4.082-.74.246-1.017.163-.276.454-.546.87-.808.333-.21.572-.397.717-.565.146-.168.22-.36.22-.577 0-.172-.078-.308-.234-.41-.156-.1-.358-.15-.608-.15-.62 0-1.34.22-2.168.658l-.854-1.67c1.02-.58 2.084-.872 3.194-.872.913 0 1.63.202 2.15.603.52.4.78.948.78 1.64 0 .495-.116.924-.347 1.287-.23.362-.6.705-1.11 1.03-.43.278-.7.48-.807.61-.108.13-.163.282-.163.458V13h-1.885z"})});case"gridicons-image":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M13 9.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM22 6v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2zm-2 0H4v7.444L8 9l5.895 6.55 1.587-1.85c.798-.932 2.24-.932 3.037 0L20 15.426V6z"})});case"gridicons-image-multiple":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5zM4 20h14c0 1.105-.895 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.105.895-2 2-2v14zM22 4v12c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zM8 4v6.333L11 7l4.855 5.395.656-.73c.796-.886 2.183-.886 2.977 0l.513.57V4H8z"})});case"gridicons-info":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})});case"gridicons-info-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"})});case"gridicons-jetpack-search":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M0 9.257C0 4.15 4.151 0 9.257 0c5.105 0 9.256 4.151 9.256 9.257a9.218 9.218 0 01-2.251 6.045l.034.033h1.053L24 22.01l-1.986 1.989-6.664-6.662v-1.055l-.033-.033a9.218 9.218 0 01-6.06 2.264C4.15 18.513 0 14.362 0 9.257zm4.169 1.537h4.61V1.82l-4.61 8.973zm5.547-3.092v8.974l4.61-8.974h-4.61z"})});case"gridicons-phone":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 2H8c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z"})});case"gridicons-pages":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z"})});case"gridicons-posts":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"})});case"gridicons-search":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"})});case"gridicons-star-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z"})});case"gridicons-star":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"})});case"gridicons-tag":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"})});case"gridicons-video":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 4v2h-2V4H6v2H4V4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2v-2h2v2h12v-2h2v2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM6 16H4v-3h2v3zm0-5H4V8h2v3zm4 4V9l4.5 3-4.5 3zm10 1h-2v-3h2v3zm0-5h-2V8h2v3z"})});case"gridicons-lock":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("g",{id:"lock",children:(0,s.jsx)("path",{d:"M18,8h-1V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H6c-1.105,0-2,0.895-2,2v10c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V10 C20,8.895,19.105,8,18,8z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M13,15.723V18h-2v-2.277c-0.595-0.346-1-0.984-1-1.723 c0-1.105,0.895-2,2-2s2,0.895,2,2C14,14.738,13.595,15.376,13,15.723z"})}),(0,s.jsx)("g",{id:"Layer_1"})]});case"gridicons-external":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})})}}render(){const{size:A=24,className:G=""}=this.props,w=this.props.height||A,F=this.props.width||A,Q=this.props.style||{height:w,width:F},D="gridicons-"+this.props.icon,$=(0,f.A)("gridicon",D,G,{"needs-offset":this.needsOffset(D,A)}),V=this.getSVGDescription(D);return(0,s.jsxs)("svg",{className:$,focusable:this.props.focusable,height:w,onClick:this.props.onClick,style:Q,viewBox:"0 0 24 24",width:F,xmlns:"http://www.w3.org/2000/svg","aria-hidden":this.props["aria-hidden"],children:[V?(0,s.jsx)("desc",{children:V}):null,this.renderIcon(D)]})}}const P=g;try{g.displayName="Gridicon",g.__docgenInfo={description:"",displayName:"Gridicon",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"HTML class name",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description for SVG for screen readers",name:"description",required:!1,type:{name:"string"}},focusable:{defaultValue:{value:"true"},description:"Whether SVG is focussable",name:"focusable",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"SVG height",name:"height",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"VoidFunction"}},size:{defaultValue:null,description:"SVG width and height",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"SVG style",name:"style",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:null,description:"SVG width",name:"width",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/gridicon/index.tsx#Gridicon"]={docgenInfo:g.__docgenInfo,name:"Gridicon",path:"../components/components/gridicon/index.tsx#Gridicon"})}catch{}},"../components/components/popover/index.tsx":(k,b,e)=>{e.d(b,{A:()=>M});var a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/popover/style.scss"),E={};E.insert="head",E.singleton=!1;var m=f()(j.A,E);const p=j.A.locals||{};var y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const M=({icon:s,children:u,action:g})=>(0,y.jsxs)("div",{className:"jp-popover",children:[(0,y.jsx)("div",{className:"jp-popover__icon",children:s}),(0,y.jsx)("div",{className:"jp-popover__body",children:u}),(0,y.jsx)("div",{className:"jp-popover__action",children:g})]});try{popover.displayName="popover",popover.__docgenInfo={description:"",displayName:"popover",props:{action:{defaultValue:null,description:"",name:"action",required:!0,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/popover/index.tsx#popover"]={docgenInfo:popover.__docgenInfo,name:"popover",path:"../components/components/popover/index.tsx#popover"})}catch{}},"../script-data/src/utils.ts":(k,b,e)=>{e.d(b,{au:()=>a});function a(){return window.JetpackScriptData}function f(){return a().site}function j(v=""){return`${a().site.admin_url}${v}`}function E(v=""){return j(`admin.php?page=jetpack${v}`)}function m(v=""){return j(`admin.php?page=my-jetpack${v}`)}function p(){return a().site.plan?.features?.active??[]}function y(v){return p().includes(v)}function L(){return a().site?.host==="wpcom"}function M(){return a().site?.host==="atomic"}function s(){return a().site?.host==="woa"}function u(){return L()||s()}function g(){return a()?.site?.host==="unknown"}function P(v){return a().user.current_user.capabilities[v]}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/gridicon/style.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),E=e.n(j),m=E()(f());m.push([k.id,".gridicon{fill:currentColor;display:inline-block}.gridicon.needs-offset g{transform:translate(1px, 1px)}.gridicon.needs-offset-x g{transform:translate(1px, 0)}.gridicon.needs-offset-y g{transform:translate(0, 1px)}",""]);const p=m},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/popover/style.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),E=e.n(j),m=E()(f());m.push([k.id,'.jp-popover{width:600px;max-width:calc(100% - 32px);padding:16px;background-color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.06),0 4px 8px 0 rgba(0,0,0,.03);border:1px solid #dcdcde;border-radius:4px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.jp-popover>*{margin:16px;clear:both}.jp-popover__body p{font-weight:400;line-height:1.6em;font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}',""]);const p=m},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),E=e.n(j),m=E()(f());m.push([k.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const p=m},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),E=e.n(j),m=E()(f());m.push([k.id,".RWH4ytGzomJa_kl2YaAQ{position:relative;min-height:300px}.RWH4ytGzomJa_kl2YaAQ .jp-components-spinner{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",""]),m.locals={dummy:"RWH4ytGzomJa_kl2YaAQ"};const p=m},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.module.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),E=e.n(j),m=E()(f());m.push([k.id,":root{--light-border: #eee;--jetpack-green: #008710;--primary-black: #23282d;--primary-white: #fff;--primary-grey: #444;--secondary-grey: #888;--color_warning: #cc1818;--alt-white: #f9f9f6;--gray-0: #f6f7f7;--gray-5: #dcdcde;--gray-10: #c3c4c7;--gray-20: #a7aaad;--gray-30: #8c8f94;--gray-40: #787c82;--gray-50: #646970;--gray-60: #50575e;--gray-70: #3c434a;--gray-80: #2c3338;--gray-90: #1d2327;--gray-100: #101517;--gray: #646970;--blue-50: #2271b1;--blue-60: #135e96;--red-40: #e65054;--jetpack-green-0: #f0f2eb;--jetpack-green-5: #d0e6b8;--jetpack-green-10: #9dd977;--jetpack-green-20: #64ca43;--jetpack-green-30: #2fb41f;--jetpack-green-40: #069e08;--jetpack-green-50: #008710;--jetpack-green-60: #007117;--jetpack-green-70: #005b18;--jetpack-green-80: #004515;--jetpack-green-90: #003010;--jetpack-green-100: #001c09;--jp-yellow-20: #DEB100}.vkCjuesTxRrG7rjYKIHQ{width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 24px;margin:32px 0;border:2px solid #008710;border-radius:4px;background-color:#fff;text-align:left;cursor:pointer}.vkCjuesTxRrG7rjYKIHQ .vxEc8Z4qGda7Itz5UiMm p{margin:0}.vkCjuesTxRrG7rjYKIHQ .wcsiokDgpxboqLmIPdgN{font-weight:700}.vkCjuesTxRrG7rjYKIHQ .cAP12JGonXqBmbn0cHLx svg{fill:#008710}",""]),m.locals={"upgrade-cta":"vkCjuesTxRrG7rjYKIHQ",body:"vxEc8Z4qGda7Itz5UiMm","action-line":"wcsiokDgpxboqLmIPdgN",icon:"cAP12JGonXqBmbn0cHLx"};const p=m}}]);
