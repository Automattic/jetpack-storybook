(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7665],{"../../plugins/boost/app/assets/src/js/features/performance-history/stories/graph-component.stories.tsx":(I,v,e)=>{"use strict";e.r(v),e.d(v,{__namedExportsOrder:()=>is,_default:()=>ie,default:()=>cs});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../components/components/boost-score-graph/index.tsx"),m=e("../components/components/spinner/index.jsx"),a=e("../components/components/popover/index.tsx"),i=e("../components/components/gridicon/index.tsx"),_=e("../components/components/button/index.tsx"),C=e("../components/tools/jp-redirect/index.ts"),F=e("../components/components/product-price/index.tsx"),z=e("../../../node_modules/.pnpm/@tanstack+query-core@5.75.0/node_modules/@tanstack/query-core/build/modern/queryClient.js"),s=e("../../../node_modules/.pnpm/@tanstack+react-query@5.75.1_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),h=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),S=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js");const U="my-jetpack/v1",O="jetpack/v4/stats-app",P=null,j=null,T=null,k=null,R=`${U}/site/products`,f=null,x="videopress/v1/stats/featured",A=null,H=null,B=null,ee=null,X=null,te=null,re=null,pe=null,ae=t=>`${O}/sites/${t}/stats/highlights`,_e=t=>`${O}/sites/${t}/stats/visits`,w="product",He="product ownership",Be="activate product",ue="install product",Ke="videopress stats",Ye="available licenses",St="chat availability",ce="chat authentication",Ge="backup history",We="stats counts",jt="dismiss welcome banner",Ae="purchases",ke="evaluate site recommendations",Qe="save site evaluation result",Je="remove site evaluation result",$e="update historically active modules",Xe="get jetpack manage data",Ze="red bubble alerts",Re="get protect data",xe="get videopress data",qe="get oauth authorize url",et="stats visits",tt={ANTI_SPAM:"anti-spam",BACKUP:"backup",BOOST:"boost",BRUTE_FORCE:"brute-force",CRM:"crm",CREATOR:"creator",EXTRAS:"extras",JETPACK_AI:"jetpack-ai",NEWSLETTER:"newsletter",PROTECT:"protect",RELATED_POSTS:"related-posts",SCAN:"scan",SEARCH:"search",SITE_ACCELERATOR:"site-accelerator",SOCIAL:"social",STATS:"stats",VIDEOPRESS:"videopress",SECURITY:"security",GROWTH:"growth",COMPLETE:"complete"};var st=e("../../../node_modules/.pnpm/@tanstack+react-query@5.75.1_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js"),Ie=e("../../../node_modules/.pnpm/@wordpress+api-fetch@7.25.0/node_modules/@wordpress/api-fetch/build-module/index.js");const Oe=100,nt=200,yt=300;var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const be={message:"",title:null,options:{level:"info",priority:0}},Pe=(0,r.createContext)({currentNotice:be,setNotice:null,resetNotice:null}),bt=({children:t})=>{const[o,l]=useState(be),u=useCallback(()=>{l(be)},[]),g=useCallback((E,b)=>{if(!o.message||E.options.priority>o.options.priority){const y={...E.options,onClose:E.options?.onClose||(E.options?.hideCloseButton?void 0:b)};u(),l({...E,options:y})}},[o.message,o.options.priority,u]);return _jsx(Pe.Provider,{value:{currentNotice:o,setNotice:g,resetNotice:u},children:t})},vt=null;try{noticeContext.displayName="noticeContext",noticeContext.__docgenInfo={description:"",displayName:"noticeContext",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"]={docgenInfo:noticeContext.__docgenInfo,name:"noticeContext",path:"../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"})}catch{}const Ue=S.__,Ne=[Ae,Be,ue,Re,xe],se=({infoName:t,isError:o,overrideMessage:l})=>{const{setNotice:u}=(0,r.useContext)(Pe),g=l??(0,S.sprintf)(Ue("There was an error fetching your %s information. Check your site connectivity and try again.","jetpack-my-jetpack"),t);(0,r.useEffect)(()=>{o&&Ne.includes(t)&&u({message:g,options:{id:"fetching-error-notice",level:"error",priority:Oe}})},[g,u,o,t])},me=({name:t,query:o,options:l,errorMessage:u})=>{const g=(0,st.I)({queryKey:[t,o],queryFn:()=>(0,Ie.A)(o),refetchOnWindowFocus:!1,refetchIntervalInBackground:!1,...l}),{error:E,isError:b,isLoading:y}=g;return se({infoName:t,isError:!y&&b&&E.code!=="not_connected",overrideMessage:u}),g},n=t=>t?window?.myJetpackInitialState?.[t]??{}:window?.myJetpackInitialState,c=()=>window?.myJetpackRest??{},D=t=>t?window?.JP_CONNECTION_INITIAL_STATE?.[t]??{}:window?.JP_CONNECTION_INITIAL_STATE,V=t=>Array.isArray(t)?t.map(o=>V(o)):typeof t=="object"&&t!==null?Object.fromEntries(Object.entries(t).map(([o,l])=>[o.replace(/([-_][a-z])/gi,u=>u.toUpperCase().replace(/[-_]/g,"")),V(l)])):t,Le=V,we=t=>t.pricingForUi.productTerm==="year"?Math.round(t.pricingForUi.fullPrice/12*100)/100:t.pricingForUi.fullPrice,Me=t=>t.pricingForUi.productTerm==="year"?Math.round(t.pricingForUi.discountPrice/12*100)/100:t.pricingForUi.discountPrice,ge=t=>{const o=Le(t);return o.features=o.features||[],o.supportedProducts=o.supportedProducts||[],o.pricingForUi&&(o.pricingForUi.fullPricePerMonth=we(o),o.pricingForUi.discountPricePerMonth=Me(o)),o},De=()=>{const{items:t}=n("products"),{data:o,isLoading:l,isRefetching:u,isError:g,refetch:E}=me({name:`${w}`,query:{path:`${R}`},options:{enabled:!0}});if(!l&&!g)for(const[b,y]of Object.entries(t))o&&o[b]&&(t[b]={...y,...o[b]});return t?{data:Object.entries(t).reduce((b,[y,N])=>({...b,[y]:ge(N)}),{}),refetch:E,isLoading:l,isRefetching:u,isError:g}:{data:{},isLoading:!1,isError:!1,isRefetching:u,refetch:E}},he=t=>{const o=t&&t?.length?`?products=${t?.join(",")}`:"";return me({name:`${w}`,query:{path:`${R}${o}`},options:{enabled:!1}})},ve=async t=>{const{data:o,isError:l,isLoading:u}=await t(),g=window.myJetpackInitialState.products.items;l||u||Object.keys(o).forEach(E=>{window.myJetpackInitialState.products.items[E]={...g[E],...o[E]}})},Tt=t=>{const o=Array.isArray(t)?t:[t],{data:l,isLoading:u}=De(),g=o?.map(N=>l?.[N]),{refetch:E,isLoading:b,isRefetching:y}=he(o);return{products:g,refetch:(0,r.useCallback)(()=>ve(E),[E]),isLoading:b||u,isRefetching:y}},at=t=>{const{products:o,refetch:l,isLoading:u,isRefetching:g}=Tt([t]);return{detail:o[0],refetch:l,isLoading:u,isRefetching:g}};var ct=e("../analytics/index.jsx"),it=e("../connection/components/use-connection/index.jsx");const Ct=({skipUserConnection:t=!1,redirectUri:o=""}={})=>{const{apiRoot:l,apiNonce:u}=c(),{topJetpackMenuItemUrl:g,blogID:E}=n(),{registrationNonce:b}=D(),y=(0,it.A)({apiRoot:l,apiNonce:u,registrationNonce:b,skipUserConnection:t,from:"my-jetpack",redirectUri:o,autoTrigger:!1}),N=y.isRegistered,Y=y.isRegistered,W=y.hasConnectedOwner;return{apiNonce:u,apiRoot:l,blogID:E,registrationNonce:b,...y,isSiteConnected:N,siteIsRegistered:Y,topJetpackMenuItemUrl:g,hasConnectedOwner:W}},At=()=>{const{isUserConnected:t,isSiteConnected:o,connectedPlugins:l,userConnectionData:u={}}=Ct(),{login:g,ID:E}=u.currentUser?.wpcomUser||{},{myJetpackVersion:b=""}=n();(0,r.useEffect)(()=>{t&&E&&g&&ct.A.initialize(E,g)},[E,t,g]);const y=Object.keys(l||{}).sort().join(",").replaceAll("jetpack-","");return{recordEvent:(0,r.useCallback)((Y,W)=>{ct.A.tracks.recordEvent(Y,{version:b,is_site_connected:o,is_user_connected:t,referring_plugins:y,...W})},[])}};var kt=e("../../packages/my-jetpack/_inc/components/loading-block/index.tsx"),Rt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal.tsx"),dt=e("../api/index.jsx"),lt=e("../script-data/src/utils.ts"),xt=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),It=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),Ot=e("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js"),Pt=e.n(Ot);function Ut(){switch((typeof window<"u"&&window?.JP_CONNECTION_INITIAL_STATE||(0,lt.au)()?.connection)?.calypsoEnv){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var pt=e("../connection/state/store.jsx");const K=Pt()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:Nt,apiRoot:Lt,apiNonce:wt,siteSuffix:Mt}=window?.JP_CONNECTION_INITIAL_STATE||(0,lt.au)()?.connection||{},Dt=()=>typeof window<"u"?window?.myJetpackInitialState?.adminUrl:null;function Vt({productSlug:t,redirectUrl:o,siteSuffix:l=Mt,adminUrl:u=Dt(),connectAfterCheckout:g=!1,siteProductAvailabilityHandler:E=null,quantity:b=null,from:y,useBlogIdSuffix:N=!1}={}){K("productSlug is %s",t),K("redirectUrl is %s",o),K("siteSuffix is %s",l),K("from is %s",y);const[Y,W]=(0,r.useState)(!1),{registerSite:Se}=(0,xt.A)(pt.a),Q=(0,It.A)(L=>L(pt.a).getBlogId(),[]);K("blogID is %s",Q??"undefined"),N=N&&!!Q;const{isUserConnected:Z,isRegistered:q,handleConnectUser:de}=(0,it.A)({redirectUri:o,from:y}),M=(0,r.useMemo)(()=>{const L=Ut(),J=(!q||!Z)&&g,le=J?"checkout/jetpack/":`checkout/${N?Q.toString():l}/`,ye=b!=null?`:-q-${b}`:"",$=new URL(`${L}${le}${t}${ye}`);return J?($.searchParams.set("connect_after_checkout",!0),$.searchParams.set("admin_url",u),$.searchParams.set("from_site_slug",l)):$.searchParams.set("site",l),$.searchParams.set("source",y),$.searchParams.set("redirect_to",o),Z||$.searchParams.set("unlinked","1"),$},[q,Z,g,l,b,t,y,o,u,N,Q]);K("isRegistered is %s",q),K("isUserConnected is %s",Z),K("connectAfterCheckout is %s",g),K("checkoutUrl is %s",M);const G=(L=null)=>Promise.resolve(E&&E()).then(J=>{if(L&&M.searchParams.set("redirect_to",L),J)return K("handleAfterRegistration: Site has a product associated"),de();K("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",M),window.location.href=M}),oe=(L=null)=>{L&&M.searchParams.set("redirect_to",L),K("Redirecting to connectAfterCheckout flow: %s",M),window.location.href=M},je=(L,J=null)=>{if(L&&L.preventDefault(),W(!0),g)return oe(J);if(q)return G(J);Se({registrationNonce:Nt,redirectUri:o}).then(()=>G(J))};return(0,r.useEffect)(()=>{dt.Ay.setApiRoot(Lt),dt.Ay.setApiNonce(wt)},[]),{run:je,isRegistered:q,hasCheckoutStarted:Y}}function Ft(){const t=window.location.search;return new URLSearchParams(t).has("redirect_to_referrer","1")&&document.referrer!==""?document.referrer:null}var zt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/style.module.scss");const Ht=S.__,Bt=({slug:t,buttonLabel:o,disabled:l,isExternalLink:u,href:g})=>{const{siteSuffix:b="",adminUrl:y="",myJetpackCheckoutUri:N=""}=n(),{detail:Y,isLoading:W}=at(t),{pricingForUi:Se,postCheckoutUrl:Q}=Y,{wpcomProductSlug:Z,tiers:q}=Se||{},de=t!=="boost"?Z:q?.upgraded?.wpcomProductSlug,M=Ft(),oe=(0,r.useCallback)(()=>Q||M||N,[Q,M,N])(),{run:je,hasCheckoutStarted:L}=Vt({productSlug:de,redirectUrl:oe,siteSuffix:b,adminUrl:y,connectAfterCheckout:!0,from:"my-jetpack",quantity:null,useBlogIdSuffix:!0});return(0,d.jsx)(_.A,{variant:"primary",className:zt.A["action-button"],isLoading:W||L,onClick:je,isExternalLink:u,href:g,disabled:l||W,children:o||Ht("Upgrade","jetpack-my-jetpack")})};try{productinterstitialmodalcta.displayName="productinterstitialmodalcta",productinterstitialmodalcta.__docgenInfo={description:"",displayName:"productinterstitialmodalcta",props:{slug:{defaultValue:null,description:"",name:"slug",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isExternalLink:{defaultValue:null,description:"",name:"isExternalLink",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal-cta.tsx#productinterstitialmodalcta"]={docgenInfo:productinterstitialmodalcta.__docgenInfo,name:"productinterstitialmodalcta",path:"../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal-cta.tsx#productinterstitialmodalcta"})}catch{}var Kt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstifial-feature-list.tsx");const Ve=S.__,Yt=S._x,Gt=({slug:t,children:o,onOpen:l,onClose:u,description:g,features:E,...b})=>{const{recordEvent:y}=At(),{detail:N,isLoading:Y}=at(t),{title:W,longDescription:Se,features:Q,pricingForUi:Z}=N,q=g||Se,de=E||Q,M=t==="boost"?Z?.tiers?.upgraded:Z;let G,oe;t==="boost"?(G=M?.fullPrice/12,oe=M?.discountPrice/12):(G=M?.fullPricePerMonth,oe=M?.discountPricePerMonth);const{currencyCode:je,introductoryOffer:L,productTerm:J}=M||{};let le;L?.intervalUnit==="month"&&L?.intervalCount===1?le=(0,S.sprintf)(Ve("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),G):J==="year"?le=Ve("/month, paid yearly","jetpack-my-jetpack"):le=Yt("/month",'Price description representing "per month" price',"jetpack-my-jetpack");const ye=L?.reason?G:oe,$=Y?(0,d.jsx)(kt.A,{width:"100%",height:"100px"}):(0,d.jsx)(F.A,{currency:je,price:G,offPrice:ye,showNotOffPrice:G>ye,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:ye>=G,legend:le}),ds=(0,r.useCallback)(()=>{y("jetpack_modal_interstitial_open",{placement:"product-page",context:"my-jetpack",product_slug:t}),l?.()},[y,t,l]),ls=(0,r.useCallback)(()=>{y("jetpack_modal_interstitial_close",{placement:"product-page",context:"my-jetpack",product_slug:t}),u?.()},[y,t,u]);let Et=null;return t==="jetpack-ai"&&(Et=(0,d.jsx)("p",{children:(0,h.A)(Ve("* Limits apply for high request capacity. <link>Learn more about it here</link>.","jetpack-my-jetpack"),{link:(0,d.jsx)(_.A,{href:(0,C.A)("ai-assistant-fair-usage-policy"),variant:"link",weight:"regular",size:"small",target:"_blank"})})})),(0,d.jsx)(Rt.A,{title:W,description:q,priceComponent:$,modalMainButton:(0,d.jsx)(Bt,{slug:t}),onOpen:ds,onClose:ls,isLoading:Y,...b,children:(0,d.jsxs)(d.Fragment,{children:[(Y||de)&&(0,d.jsx)(Kt.A,{isLoading:Y,features:de}),Et,o]})})},Wt=t=>{const o=new z.E;return(0,d.jsx)(s.Ht,{client:o,children:(0,d.jsx)(Gt,{...t})})};try{productinterstitialmyjetpack.displayName="productinterstitialmyjetpack",productinterstitialmyjetpack.__docgenInfo={description:"",displayName:"productinterstitialmyjetpack",props:{children:{defaultValue:null,description:"Child elements to be rendered within the placement",name:"children",required:!1,type:{name:"ReactNode"}},slug:{defaultValue:null,description:"Product slug",name:"slug",required:!0,type:{name:"string"}},onOpen:{defaultValue:null,description:"Callback function to be called when the modal is opened",name:"onOpen",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Callback function to be called when the modal is closed",name:"onClose",required:!1,type:{name:"() => void"}},description:{defaultValue:null,description:"Optional description for the product that overwrites the description from the product details",name:"description",required:!1,type:{name:"string"}},features:{defaultValue:null,description:"Optional features for the product that overwrites the features from the product details",name:"features",required:!1,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-my-jetpack.tsx#productinterstitialmyjetpack"]={docgenInfo:productinterstitialmyjetpack.__docgenInfo,name:"productinterstitialmyjetpack",path:"../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-my-jetpack.tsx#productinterstitialmyjetpack"})}catch{}const Qt=e.p+"static/media/boost.9e9a227e.png";var Jt=e("../number-formatters/src/index.ts");const $t=()=>(0,d.jsx)("svg",{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M10.6953 16.3906L18.4062 8.60938L10.6953 0.828125L8.63281 2.98438L12.8516 7.10938H0.699219V10.1094H12.8516L8.63281 14.2344L10.6953 16.3906Z"})});var Xt=e("../../plugins/boost/app/assets/src/js/lib/utils/analytics.ts"),Zt=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_t=e.n(Zt),ut=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.module.scss"),Fe={};Fe.insert="head",Fe.singleton=!1;var fs=_t()(ut.A,Fe);const Te=ut.A.locals||{};var qt=e("../react-data-sync-client/src/index.ts"),fe=e("../../../node_modules/.pnpm/zod@3.22.3/node_modules/zod/lib/index.mjs");const es=fe.z.object({priceBefore:fe.z.number(),priceAfter:fe.z.number(),currencyCode:fe.z.string(),isIntroductoryOffer:fe.z.boolean()}).nullable(),ts=()=>{const[{data:t}]=(0,qt.Bt)("jetpack_boost_ds","pricing",es);return t},ss=S.__,ns=({description:t,identifier:o,onClick:l,eventName:u="upsell_cta_from_settings_page_in_plugin"})=>{if(!Jetpack_Boost.site.online)return null;const g=()=>{(0,Xt.n7)(u,{identifier:o}),l&&l()},E=ts(),b=E?(0,Jt.vA)(E.priceAfter/12,E.currencyCode):null,y=b?b.symbol+b.integer+b.fraction:"_";return(0,d.jsxs)("button",{className:Te["upgrade-cta"],onClick:g,children:[(0,d.jsxs)("div",{className:Te.body,children:[(0,d.jsx)("p",{children:t}),(0,d.jsx)("p",{className:Te["action-line"],children:(0,S.sprintf)(ss("Upgrade now only %s per month","jetpack-boost"),y)})]}),(0,d.jsx)("div",{className:Te.icon,children:(0,d.jsx)($t,{})})]})};try{upgradecta.displayName="upgradecta",upgradecta.__docgenInfo={description:"",displayName:"upgradecta",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},eventName:{defaultValue:{value:"upsell_cta_from_settings_page_in_plugin"},description:"",name:"eventName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.tsx#upgradecta"]={docgenInfo:upgradecta.__docgenInfo,name:"upgradecta",path:"../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.tsx#upgradecta"})}catch{}const ne=S.__,os=({description:t="",identifier:o,customModalTrigger:l})=>{const u=(0,C.A)("jetpack-boost-interstitial-modal-learn-more");return(0,d.jsx)(Wt,{slug:"boost",customModalTrigger:l??(0,d.jsx)(ns,{identifier:o,description:t}),buttonLabel:ne("Upgrade now","jetpack-boost"),isWithVideo:!1,secondaryColumn:(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:Qt,alt:"Boost"})}),secondaryButtonHref:u,description:ne("Unlock the full potential of Jetpack Boost with automated performance optimization tools and more.","jetpack-boost"),features:[ne("Automated Critical CSS Generation","jetpack-boost"),ne("Automated Image Scanning","jetpack-boost"),ne("In-depth Performance Insights","jetpack-boost"),ne("Customizable Image Optimization","jetpack-boost"),ne("Expert Support With Personal Assistance Available","jetpack-boost")]})};try{interstitialmodalcta.displayName="interstitialmodalcta",interstitialmodalcta.__docgenInfo={description:"",displayName:"interstitialmodalcta",props:{description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},customModalTrigger:{defaultValue:null,description:"",name:"customModalTrigger",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/upgrade-cta/interstitial-modal-cta.tsx#interstitialmodalcta"]={docgenInfo:interstitialmodalcta.__docgenInfo,name:"interstitialmodalcta",path:"../../plugins/boost/app/assets/src/js/features/upgrade-cta/interstitial-modal-cta.tsx#interstitialmodalcta"})}catch{}var mt=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss"),ze={};ze.insert="head",ze.singleton=!1;var js=_t()(mt.A,ze);const gt=mt.A.locals||{},Ee=S.__,ht=({children:t})=>(0,d.jsxs)("div",{className:gt.dummy,children:[t,(0,d.jsx)(p.A,{isPlaceholder:!0})]}),ft=({periods:t=[],annotations:o=[],startDate:l=0,endDate:u=0,needsUpgrade:g,handleUpgrade:E,isFreshStart:b,handleDismissFreshStart:y,isLoading:N})=>N?(0,d.jsx)("div",{className:gt.dummy,children:(0,d.jsx)(m.A,{color:"#000000"})}):g?(0,d.jsx)(ht,{children:(0,d.jsx)(a.A,{icon:(0,d.jsx)(i.A,{icon:"lock"}),action:(0,d.jsx)(os,{identifier:"historical-performance",customModalTrigger:(0,d.jsx)(_.A,{onClick:E,children:Ee("Upgrade now!","jetpack-boost")})}),children:(0,d.jsx)("p",{children:Ee("Upgrade and learn more about your site performance over time.","jetpack-boost")})})}):b?(0,d.jsx)(ht,{children:(0,d.jsx)(a.A,{icon:(0,d.jsx)(i.A,{icon:"checkmark"}),action:(0,d.jsx)(_.A,{onClick:y,children:Ee("Okay, got it!","jetpack-boost")}),children:(0,d.jsxs)("p",{children:[Ee("Hello there! Jetpack Boost premium has been activated.","jetpack-boost"),(0,d.jsx)("br",{}),Ee("Your scores will be recorded from now on.","jetpack-boost")]})})}):(0,d.jsx)(p.A,{periods:t,annotations:o,startDate:l,endDate:u});try{graphcomponent.displayName="graphcomponent",graphcomponent.__docgenInfo={description:"",displayName:"graphcomponent",props:{periods:{defaultValue:{value:"[]"},description:"",name:"periods",required:!1,type:{name:"Period[]"}},annotations:{defaultValue:{value:"[]"},description:"",name:"annotations",required:!1,type:{name:"Annotation[]"}},startDate:{defaultValue:{value:"0"},description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:{value:"0"},description:"",name:"endDate",required:!1,type:{name:"number"}},needsUpgrade:{defaultValue:null,description:"",name:"needsUpgrade",required:!0,type:{name:"boolean"}},handleUpgrade:{defaultValue:null,description:"",name:"handleUpgrade",required:!0,type:{name:"() => void"}},isFreshStart:{defaultValue:null,description:"",name:"isFreshStart",required:!0,type:{name:"boolean"}},handleDismissFreshStart:{defaultValue:null,description:"",name:"handleDismissFreshStart",required:!0,type:{name:"() => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"]={docgenInfo:graphcomponent.__docgenInfo,name:"graphcomponent",path:"../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"})}catch{}var bs=`import React, { useEffect } from 'react';
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
`,vs={_default:{startLoc:{col:17,line:197},endLoc:{col:1,line:217},startBody:{col:17,line:197},endBody:{col:1,line:217}}};const Ce={data:{_meta:{start:1689772803e3,end:1690647e6},periods:[{timestamp:1690636803e3,dimensions:{desktop_overall_score:86,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689859203e3,dimensions:{desktop_overall_score:72,mobile_overall_score:49,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689945603e3,dimensions:{desktop_overall_score:20,mobile_overall_score:30,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690032003e3,dimensions:{desktop_overall_score:72,mobile_overall_score:40,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690118403e3,dimensions:{desktop_overall_score:55,mobile_overall_score:45,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690204803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690291203e3,dimensions:{desktop_overall_score:70,mobile_overall_score:50,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690377603e3,dimensions:{desktop_overall_score:75,mobile_overall_score:90,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690464003e3,dimensions:{desktop_overall_score:80,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690550403e3,dimensions:{desktop_overall_score:85,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}],annotations:[{timestamp:1690291223e3,text:"Annotation text"},{timestamp:1689984e6,text:"Another Annotation text"}]}},rs={parameters:{storySource:{source:`import React, { useEffect } from 'react';
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
_default.args = defaultValues;`,locationsMap:{default:{startLoc:{col:17,line:197},endLoc:{col:1,line:217},startBody:{col:17,line:197},endBody:{col:1,line:217}}}}},title:"Plugins/Boost/Performance History Graph",component:ft,argTypes:{startDate:{control:"date"},endDate:{control:"date"},periods:{control:"object"},annotations:{control:"object"},isLoading:{control:"boolean"},needsUpgrade:{control:"boolean"},isFreshStart:{control:"boolean"}},decorators:[t=>(0,d.jsx)("div",{style:{maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,d.jsx)(t,{})})]},as={startDate:Ce.data._meta.start,endDate:Ce.data._meta.end,periods:Ce.data.periods,annotations:Ce.data.annotations,isLoading:!1,needsUpgrade:!1,isFreshStart:!1},cs=rs,ie=(t=>{const[o,l]=r.useState(t.isFreshStart),[u,g]=r.useState(t.needsUpgrade);return(0,r.useEffect)(()=>{l(t.isFreshStart),g(t.needsUpgrade)},[t.isFreshStart,t.needsUpgrade]),t.handleUpgrade=()=>{g(!1)},t.handleDismissFreshStart=()=>{l(!1)},(0,d.jsx)(ft,{...t,isFreshStart:o,needsUpgrade:u})}).bind({});ie.args=as;const is=["_default"];ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`args => {
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
}`,...ie.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(I,v,e)=>{"use strict";e.d(v,{A:()=>P});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let p,m,a,i;const _=/<(\/)?(\w+)\s*(\/)?>/g;function C(j,T,k,R,f){return{element:j,tokenStart:T,tokenLength:k,prevOffset:R,leadingTextStart:f,children:[]}}const F=(j,T)=>{if(p=j,m=0,a=[],i=[],_.lastIndex=0,!z(T))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(s(T));return(0,r.createElement)(r.Fragment,null,...a)},z=j=>{const T=typeof j=="object",k=T&&Object.values(j);return T&&k.length&&k.every(R=>(0,r.isValidElement)(R))};function s(j){const T=h(),[k,R,f,x]=T,A=i.length,H=f>m?m:null;if(!j[R])return S(),!1;switch(k){case"no-more-tokens":if(A!==0){const{leadingTextStart:te,tokenStart:re}=i.pop();a.push(p.substr(te,re))}return S(),!1;case"self-closed":return A===0?(H!==null&&a.push(p.substr(H,f-H)),a.push(j[R]),m=f+x,!0):(U(C(j[R],f,x)),m=f+x,!0);case"opener":return i.push(C(j[R],f,x,f+x,H)),m=f+x,!0;case"closer":if(A===1)return O(f),m=f+x,!0;const B=i.pop(),ee=p.substr(B.prevOffset,f-B.prevOffset);B.children.push(ee),B.prevOffset=f+x;const X=C(B.element,B.tokenStart,B.tokenLength,f+x);return X.children=B.children,U(X),m=f+x,!0;default:return S(),!1}}function h(){const j=_.exec(p);if(j===null)return["no-more-tokens"];const T=j.index,[k,R,f,x]=j,A=k.length;return x?["self-closed",f,T,A]:R?["closer",f,T,A]:["opener",f,T,A]}function S(){const j=p.length-m;j!==0&&a.push(p.substr(m,j))}function U(j){const{element:T,tokenStart:k,tokenLength:R,prevOffset:f,children:x}=j,A=i[i.length-1],H=p.substr(A.prevOffset,k-A.prevOffset);H&&A.children.push(H),A.children.push((0,r.cloneElement)(T,null,...x)),A.prevOffset=f||k+R}function O(j){const{element:T,leadingTextStart:k,prevOffset:R,tokenStart:f,children:x}=i.pop(),A=j?p.substr(R,j-R):p.substr(R);A&&x.push(A),k!==null&&a.push(p.substr(k,f-k)),a.push((0,r.cloneElement)(T,null,...x))}const P=F},"../components/components/spinner/index.jsx":(I,v,e)=>{"use strict";e.d(v,{A:()=>S});var r=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),p=e.n(r),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(a),_=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/spinner/style.scss"),C={};C.insert="head",C.singleton=!1;var F=i()(_.A,C);const z=_.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=({color:U="#FFFFFF",className:O="",size:P=20})=>{const j=O+" jp-components-spinner",T={width:P,height:P,fontSize:P,borderTopColor:U},k={borderTopColor:U,borderRightColor:U};return(0,s.jsx)("div",{className:j,children:(0,s.jsx)("div",{className:"jp-components-spinner__outer",style:T,children:(0,s.jsx)("div",{className:"jp-components-spinner__inner",style:k})})})};h.propTypes={color:p().string,className:p().string,size:p().number};const S=h;h.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}}},"../connection/components/use-connection/index.jsx":(I,v,e)=>{"use strict";e.d(v,{A:()=>F});var r=e("../api/index.jsx"),p=e("../script-data/src/utils.ts"),m=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),a=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../connection/state/store.jsx");const C=window?.JP_CONNECTION_INITIAL_STATE||(0,p.au)()?.connection||{};function F({registrationNonce:z=C.registrationNonce,apiRoot:s=C.apiRoot,apiNonce:h=C.apiNonce,redirectUri:S,autoTrigger:U,from:O,skipUserConnection:P,skipPricingPage:j}={}){const{registerSite:T,connectUser:k,refreshConnectedPlugins:R}=(0,m.A)(_.a),f=(0,a.A)(w=>w(_.a).getRegistrationError()),{siteIsRegistering:x,userIsConnecting:A,userConnectionData:H,connectedPlugins:B,connectionErrors:ee,isRegistered:X,isUserConnected:te,hasConnectedOwner:re,isOfflineMode:pe}=(0,a.A)(w=>({siteIsRegistering:w(_.a).getSiteIsRegistering(),userIsConnecting:w(_.a).getUserIsConnecting(),userConnectionData:w(_.a).getUserConnectionData(),connectedPlugins:w(_.a).getConnectedPlugins(),connectionErrors:w(_.a).getConnectionErrors(),isOfflineMode:w(_.a).getIsOfflineMode(),...w(_.a).getConnectionStatus()})),ae=()=>{if(P){if(S)return window.location=S,Promise.resolve(S)}else return k({from:O,redirectUri:S,skipPricingPage:j});return Promise.resolve()},_e=w=>(w&&w.preventDefault(),X?ae():T({registrationNonce:z,redirectUri:S,from:O}).then(()=>ae()));return(0,i.useEffect)(()=>{r.Ay.setApiRoot(s),r.Ay.setApiNonce(h)},[s,h]),(0,i.useEffect)(()=>{U&&!x&&!A&&_e()},[]),{handleRegisterSite:_e,handleConnectUser:ae,refreshConnectedPlugins:R,isRegistered:X,isUserConnected:te,siteIsRegistering:x,userIsConnecting:A,registrationError:f,userConnectionData:H,hasConnectedOwner:re,connectedPlugins:B,connectionErrors:ee,isOfflineMode:pe}}},"../connection/state/store.jsx":(I,v,e)=>{"use strict";e.d(v,{a:()=>ce});var r=e("../script-data/src/utils.ts"),p=e("../api/index.jsx");const m="SET_CONNECTION_STATUS",a="SET_CONNECTION_STATUS_IS_FETCHING",i="FETCH_CONNECTION_STATUS",_="SET_SITE_IS_REGISTERING",C="SET_USER_IS_CONNECTING",F="SET_REGISTRATION_ERROR",z="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",h="SET_AUTHORIZATION_URL",S="CONNECT_USER",U="DISCONNECT_USER_SUCCESS",O="FETCH_AUTHORIZATION_URL",P="SET_CONNECTED_PLUGINS",j="REFRESH_CONNECTED_PLUGINS",T="SET_CONNECTION_ERRORS",k="SET_IS_OFFLINE_MODE",R=n=>({type:m,connectionStatus:n}),f=n=>({type:a,isFetching:n}),x=()=>({type:i}),A=n=>({type:_,isRegistering:n}),H=n=>({type:C,isConnecting:n}),B=()=>({type:U}),ee=n=>({type:F,registrationError:n}),X=()=>({type:z}),te=n=>({type:h,authorizationUrl:n}),re=n=>({type:O,redirectUri:n}),pe=n=>({type:P,connectedPlugins:n}),ae=n=>({type:T,connectionErrors:n}),_e=n=>({type:k,isOfflineMode:n});function*w({from:n,redirectFunc:c,redirectUri:D,skipPricingPage:V}={}){yield H(!0),yield{type:S,from:n,redirectFunc:c,redirectUri:D,skipPricingPage:V}}function*He({registrationNonce:n,redirectUri:c,from:D=""}){yield X(),yield A(!0);try{const V=yield{type:s,registrationNonce:n,redirectUri:c,from:D};return yield R({isRegistered:!0}),yield te(V.authorizeUrl),yield A(!1),Promise.resolve(V)}catch(V){return yield ee(V),yield A(!1),Promise.reject(V)}}const ue={setConnectionStatus:R,setConnectionStatusIsFetching:f,fetchConnectionStatus:x,fetchAuthorizationUrl:re,setSiteIsRegistering:A,setUserIsConnecting:H,setRegistrationError:ee,clearRegistrationError:X,setAuthorizationUrl:te,registerSite:He,connectUser:w,disconnectUserSuccess:B,setConnectedPlugins:pe,refreshConnectedPlugins:()=>async({dispatch:n})=>await new Promise(c=>p.Ay.fetchConnectedPlugins().then(D=>{n(pe(D)),c(D)})),setConnectionErrors:ae,setIsOfflineMode:_e};var Ke=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");function Ye(n){return window.location.assign(n)}const ce="jetpack-connection",Ge=({redirectUri:n,from:c})=>p.Ay.registerSite(null,n,c),We=(0,Ke.b)(({resolveSelect:n})=>({from:c,redirectFunc:D,redirectUri:V,skipPricingPage:Le}={})=>new Promise((we,Me)=>{n(ce).getAuthorizationUrl(V).then(ge=>{const De=D||(rt=>Ye(rt)),he=new URL(ge);Le&&he.searchParams.set("skip_pricing","true"),c&&he.searchParams.set("from",encodeURIComponent(c));const ve=he.toString();De(ve),we(ve)}).catch(ge=>{Me(ge)})})),Ae={FETCH_AUTHORIZATION_URL:({redirectUri:n})=>p.Ay.fetchAuthorizationUrl(n),REGISTER_SITE:Ge,CONNECT_USER:We};var ke=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const Qe=(n={},c)=>{switch(c.type){case m:return{...n,...c.connectionStatus};case U:return{...n,isUserConnected:!1}}return n},Je=(n={},c)=>{switch(c.type){case P:return c.connectedPlugins}return n},$e=(n=!1,c)=>{switch(c.type){case a:return c.isFetching}return n},Xe=(n=!1,c)=>{switch(c.type){case _:return c.isRegistering}return n},Ze=(n=!1,c)=>{switch(c.type){case C:return c.isConnecting}return n},Re=(n,c)=>{switch(c.type){case z:return!1;case F:return c.registrationError;default:return n}},xe=(n,c)=>{switch(c.type){case h:return c.authorizationUrl;default:return n}},qe=(n,c)=>{switch(c.type){default:return n}},et=(n={},c)=>{switch(c.type){case T:return c.connectionErrors}return n},tt=(n=!1,c)=>{switch(c.type){case k:return c.isConnecting}return n},Ie=(0,ke.combineReducers)({connectionStatus:Qe,connectionStatusIsFetching:$e,siteIsRegistering:Xe,userIsConnecting:Ze,registrationError:Re,authorizationUrl:xe,userConnectionData:qe,connectedPlugins:Je,connectionErrors:et,isOfflineMode:tt});var Oe=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),nt=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const d={...{getAuthorizationUrl:{isFulfilled:(n,...c)=>{const D=!!n.authorizationUrl,V=(0,Oe.L)(ce).hasFinishedResolution("getAuthorizationUrl",c);return D&&!V&&(0,nt.J)(ce).finishResolution("getAuthorizationUrl",c),D},*fulfill(n){const c=yield ue.fetchAuthorizationUrl(n);yield ue.setAuthorizationUrl(c.authorizeUrl)}}}},Ue={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>n?.userConnectionData?.currentUser?.wpcomUser,getBlogId:n=>n?.userConnectionData?.currentUser?.blogId}};var Ne=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");class se{static store=null;static mayBeInit(c,D){se.store===null&&(se.store=(0,Ne.A)(c,D),(0,ke.register)(se.store))}}const ot=se,me=window.JP_CONNECTION_INITIAL_STATE||(0,r.au)()?.connection;me||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),ot.mayBeInit(ce,{__experimentalUseThunks:!0,reducer:Ie,actions:ue,selectors:Ue,resolvers:d,controls:Ae,initialState:me||{}})},"../components/components/gridicon/index.tsx":(I,v,e)=>{"use strict";e.d(v,{A:()=>U});var r=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(a),_=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/gridicon/style.scss"),C={};C.insert="head",C.singleton=!1;var F=i()(_.A,C);const z=_.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=r.__;class S extends m.Component{static defaultProps={"aria-hidden":"false",focusable:"true"};needsOffset(P,j){return["gridicons-arrow-left","gridicons-arrow-right","gridicons-calendar","gridicons-cart","gridicons-folder","gridicons-help-outline","gridicons-info","gridicons-info-outline","gridicons-posts","gridicons-star-outline","gridicons-star"].indexOf(P)>=0?j%18===0:!1}getSVGDescription(P){if("description"in this.props)return this.props.description;switch(P){default:return"";case"gridicons-audio":return h("Has audio.","jetpack-components");case"gridicons-arrow-left":return h("Arrow left","jetpack-components");case"gridicons-arrow-right":return h("Arrow right","jetpack-components");case"gridicons-calendar":return h("Is an event.","jetpack-components");case"gridicons-cart":return h("Is a product.","jetpack-components");case"chevron-down":return h("Show filters","jetpack-components");case"gridicons-comment":return h("Matching comment.","jetpack-components");case"gridicons-cross":return h("Close.","jetpack-components");case"gridicons-filter":return h("Toggle search filters.","jetpack-components");case"gridicons-folder":return h("Category","jetpack-components");case"gridicons-help-outline":return h("Help","jetpack-components");case"gridicons-info":case"gridicons-info-outline":return h("Information.","jetpack-components");case"gridicons-image-multiple":return h("Has multiple images.","jetpack-components");case"gridicons-image":return h("Has an image.","jetpack-components");case"gridicons-page":return h("Page","jetpack-components");case"gridicons-post":return h("Post","jetpack-components");case"gridicons-jetpack-search":case"gridicons-search":return h("Magnifying Glass","jetpack-components");case"gridicons-tag":return h("Tag","jetpack-components");case"gridicons-video":return h("Has a video.","jetpack-components")}}renderIcon(P){switch(P){default:return null;case"gridicons-audio":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M8 4v10.184C7.686 14.072 7.353 14 7 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7h7v4.184c-.314-.112-.647-.184-1-.184-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4H8z"})});case"gridicons-arrow-left":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})});case"gridicons-arrow-right":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})});case"gridicons-block":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z"})});case"gridicons-calendar":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z"})});case"gridicons-cart":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5c.937 0 1.75-.65 1.952-1.566L21 5H7V4c0-1.105-.895-2-2-2H3v2h2v11c0 1.105.895 2 2 2h12c0-1.105-.895-2-2-2H7v-2h10.396z"})});case"gridicons-checkmark":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"})});case"gridicons-chevron-left":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16.443 7.41L15.0399 6L9.06934 12L15.0399 18L16.443 16.59L11.8855 12L16.443 7.41Z"})});case"gridicons-chevron-right":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M10.2366 6L8.8335 7.41L13.391 12L8.8335 16.59L10.2366 18L16.2072 12L10.2366 6Z"})});case"gridicons-chevron-down":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"})});case"gridicons-comment":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M3 6v9c0 1.105.895 2 2 2h9v5l5.325-3.804c1.05-.75 1.675-1.963 1.675-3.254V6c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2z"})});case"gridicons-computer":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 2H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm0 14H4V4h16v12z"})});case"gridicons-cross":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"})});case"gridicons-filter":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z"})});case"gridicons-folder":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"})});case"gridicons-help-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-1.962-2v-.528c0-.4.082-.74.246-1.017.163-.276.454-.546.87-.808.333-.21.572-.397.717-.565.146-.168.22-.36.22-.577 0-.172-.078-.308-.234-.41-.156-.1-.358-.15-.608-.15-.62 0-1.34.22-2.168.658l-.854-1.67c1.02-.58 2.084-.872 3.194-.872.913 0 1.63.202 2.15.603.52.4.78.948.78 1.64 0 .495-.116.924-.347 1.287-.23.362-.6.705-1.11 1.03-.43.278-.7.48-.807.61-.108.13-.163.282-.163.458V13h-1.885z"})});case"gridicons-image":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M13 9.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM22 6v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2zm-2 0H4v7.444L8 9l5.895 6.55 1.587-1.85c.798-.932 2.24-.932 3.037 0L20 15.426V6z"})});case"gridicons-image-multiple":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5zM4 20h14c0 1.105-.895 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.105.895-2 2-2v14zM22 4v12c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zM8 4v6.333L11 7l4.855 5.395.656-.73c.796-.886 2.183-.886 2.977 0l.513.57V4H8z"})});case"gridicons-info":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})});case"gridicons-info-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"})});case"gridicons-jetpack-search":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M0 9.257C0 4.15 4.151 0 9.257 0c5.105 0 9.256 4.151 9.256 9.257a9.218 9.218 0 01-2.251 6.045l.034.033h1.053L24 22.01l-1.986 1.989-6.664-6.662v-1.055l-.033-.033a9.218 9.218 0 01-6.06 2.264C4.15 18.513 0 14.362 0 9.257zm4.169 1.537h4.61V1.82l-4.61 8.973zm5.547-3.092v8.974l4.61-8.974h-4.61z"})});case"gridicons-phone":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 2H8c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z"})});case"gridicons-pages":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z"})});case"gridicons-posts":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"})});case"gridicons-search":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"})});case"gridicons-star-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z"})});case"gridicons-star":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"})});case"gridicons-tag":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"})});case"gridicons-video":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 4v2h-2V4H6v2H4V4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2v-2h2v2h12v-2h2v2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM6 16H4v-3h2v3zm0-5H4V8h2v3zm4 4V9l4.5 3-4.5 3zm10 1h-2v-3h2v3zm0-5h-2V8h2v3z"})});case"gridicons-lock":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("g",{id:"lock",children:(0,s.jsx)("path",{d:"M18,8h-1V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H6c-1.105,0-2,0.895-2,2v10c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V10 C20,8.895,19.105,8,18,8z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M13,15.723V18h-2v-2.277c-0.595-0.346-1-0.984-1-1.723 c0-1.105,0.895-2,2-2s2,0.895,2,2C14,14.738,13.595,15.376,13,15.723z"})}),(0,s.jsx)("g",{id:"Layer_1"})]});case"gridicons-external":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})})}}render(){const{size:P=24,className:j=""}=this.props,T=this.props.height||P,k=this.props.width||P,R=this.props.style||{height:T,width:k},f="gridicons-"+this.props.icon,x=(0,p.A)("gridicon",f,j,{"needs-offset":this.needsOffset(f,P)}),A=this.getSVGDescription(f);return(0,s.jsxs)("svg",{className:x,focusable:this.props.focusable,height:T,onClick:this.props.onClick,style:R,viewBox:"0 0 24 24",width:k,xmlns:"http://www.w3.org/2000/svg","aria-hidden":this.props["aria-hidden"],children:[A?(0,s.jsx)("desc",{children:A}):null,this.renderIcon(f)]})}}const U=S;try{S.displayName="Gridicon",S.__docgenInfo={description:"",displayName:"Gridicon",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"HTML class name",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description for SVG for screen readers",name:"description",required:!1,type:{name:"string"}},focusable:{defaultValue:{value:"true"},description:"Whether SVG is focussable",name:"focusable",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"SVG height",name:"height",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"VoidFunction"}},size:{defaultValue:null,description:"SVG width and height",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"SVG style",name:"style",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:null,description:"SVG width",name:"width",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/gridicon/index.tsx#Gridicon"]={docgenInfo:S.__docgenInfo,name:"Gridicon",path:"../components/components/gridicon/index.tsx#Gridicon"})}catch{}},"../components/components/popover/index.tsx":(I,v,e)=>{"use strict";e.d(v,{A:()=>z});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/popover/style.scss"),a={};a.insert="head",a.singleton=!1;var i=p()(m.A,a);const _=m.A.locals||{};var C=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const z=({icon:s,children:h,action:S})=>(0,C.jsxs)("div",{className:"jp-popover",children:[(0,C.jsx)("div",{className:"jp-popover__icon",children:s}),(0,C.jsx)("div",{className:"jp-popover__body",children:h}),(0,C.jsx)("div",{className:"jp-popover__action",children:S})]});try{popover.displayName="popover",popover.__docgenInfo={description:"",displayName:"popover",props:{action:{defaultValue:null,description:"",name:"action",required:!0,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/popover/index.tsx#popover"]={docgenInfo:popover.__docgenInfo,name:"popover",path:"../components/components/popover/index.tsx#popover"})}catch{}},"../script-data/src/utils.ts":(I,v,e)=>{"use strict";e.d(v,{Sy:()=>F,au:()=>r,lI:()=>s});function r(){return window.JetpackScriptData}function p(){return r()?.site}function m(O=""){return`${r()?.site.admin_url}${O}`}function a(O=""){return m(`admin.php?page=jetpack${O}`)}function i(O=""){return m(`admin.php?page=my-jetpack${O}`)}function _(){return r()?.site.plan?.features?.active??[]}function C(O){return _().includes(O)}function F(){return r()?.site?.host==="wpcom"}function z(){return r()?.site?.host==="atomic"}function s(){return r()?.site?.host==="woa"}function h(){return r()?.site?.is_wpcom_platform}function S(){return r()?.site?.host==="unknown"}function U(O){return r()?.user.current_user.capabilities[O]}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/gridicon/style.scss":(I,v,e)=>{"use strict";e.d(v,{A:()=>_});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),i=a()(p());i.push([I.id,".gridicon{fill:currentColor;display:inline-block}.gridicon.needs-offset g{transform:translate(1px, 1px)}.gridicon.needs-offset-x g{transform:translate(1px, 0)}.gridicon.needs-offset-y g{transform:translate(0, 1px)}",""]);const _=i},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/popover/style.scss":(I,v,e)=>{"use strict";e.d(v,{A:()=>_});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),i=a()(p());i.push([I.id,'.jp-popover{width:600px;max-width:calc(100% - 32px);padding:16px;background-color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.06),0 4px 8px 0 rgba(0,0,0,.03);border:1px solid #dcdcde;border-radius:4px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.jp-popover>*{margin:16px;clear:both}.jp-popover__body p{font-weight:400;line-height:1.6em;font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}',""]);const _=i},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/spinner/style.scss":(I,v,e)=>{"use strict";e.d(v,{A:()=>_});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),i=a()(p());i.push([I.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const _=i},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss":(I,v,e)=>{"use strict";e.d(v,{A:()=>_});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),i=a()(p());i.push([I.id,".RWH4ytGzomJa_kl2YaAQ{position:relative;min-height:300px}.RWH4ytGzomJa_kl2YaAQ .jp-components-spinner{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",""]),i.locals={dummy:"RWH4ytGzomJa_kl2YaAQ"};const _=i},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.module.scss":(I,v,e)=>{"use strict";e.d(v,{A:()=>_});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(m),i=a()(p());i.push([I.id,":root{--light-border: #eee;--jetpack-green: #008710;--primary-black: #23282d;--primary-white: #fff;--primary-grey: #444;--secondary-grey: #888;--color_warning: #cc1818;--alt-white: #f9f9f6;--gray-0: #f6f7f7;--gray-5: #dcdcde;--gray-10: #c3c4c7;--gray-20: #a7aaad;--gray-30: #8c8f94;--gray-40: #787c82;--gray-50: #646970;--gray-60: #50575e;--gray-70: #3c434a;--gray-80: #2c3338;--gray-90: #1d2327;--gray-100: #101517;--gray: #646970;--blue-50: #2271b1;--blue-60: #135e96;--red-40: #e65054;--jetpack-green-0: #f0f2eb;--jetpack-green-5: #d0e6b8;--jetpack-green-10: #9dd977;--jetpack-green-20: #64ca43;--jetpack-green-30: #2fb41f;--jetpack-green-40: #069e08;--jetpack-green-50: #008710;--jetpack-green-60: #007117;--jetpack-green-70: #005b18;--jetpack-green-80: #004515;--jetpack-green-90: #003010;--jetpack-green-100: #001c09;--jp-yellow-20: #DEB100}.vkCjuesTxRrG7rjYKIHQ{width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 24px;margin:32px 0;border:2px solid #008710;border-radius:4px;background-color:#fff;text-align:left;cursor:pointer}.vkCjuesTxRrG7rjYKIHQ .vxEc8Z4qGda7Itz5UiMm p{margin:0}.vkCjuesTxRrG7rjYKIHQ .wcsiokDgpxboqLmIPdgN{font-weight:700}.vkCjuesTxRrG7rjYKIHQ .cAP12JGonXqBmbn0cHLx svg{fill:#008710}",""]),i.locals={"upgrade-cta":"vkCjuesTxRrG7rjYKIHQ",body:"vxEc8Z4qGda7Itz5UiMm","action-line":"wcsiokDgpxboqLmIPdgN",icon:"cAP12JGonXqBmbn0cHLx"};const _=i},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(I,v,e)=>{"use strict";var r=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function p(){}function m(){}m.resetWarningCache=p,I.exports=function(){function a(C,F,z,s,h,S){if(S!==r){var U=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw U.name="Invariant Violation",U}}a.isRequired=a;function i(){return a}var _={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:i,element:a,elementType:a,instanceOf:i,node:a,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:m,resetWarningCache:p};return _.PropTypes=_,_}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(I,v,e)=>{if(0)var r,p;else I.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":I=>{"use strict";var v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";I.exports=v}}]);
