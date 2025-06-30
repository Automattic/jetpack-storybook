(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7665],{"../../plugins/boost/app/assets/src/js/features/performance-history/stories/graph-component.stories.tsx":(O,v,e)=>{"use strict";e.r(v),e.d(v,{__namedExportsOrder:()=>is,_default:()=>ie,default:()=>cs});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_=e("../components/components/boost-score-graph/index.tsx"),u=e("../components/components/spinner/index.jsx"),a=e("../components/components/popover/index.tsx"),c=e("../components/components/gridicon/index.tsx"),l=e("../components/components/button/index.tsx"),k=e("../components/tools/jp-redirect/index.ts"),z=e("../components/components/product-price/index.tsx"),L=e("../../../node_modules/.pnpm/@tanstack+query-core@5.75.0/node_modules/@tanstack/query-core/build/modern/queryClient.js"),s=e("../../../node_modules/.pnpm/@tanstack+react-query@5.75.1_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),f=e("../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js");const w="my-jetpack/v1",R="jetpack/v4/stats-app",P=null,j=null,T=null,I=null,A=`${w}/site/products`,E=null,x="videopress/v1/stats/featured",C=null,H=null,B=null,ee=null,X=null,te=null,re=null,pe=null,ae=t=>`${R}/sites/${t}/stats/highlights`,_e=t=>`${R}/sites/${t}/stats/visits`,M="product",He="product ownership",Be="activate product",ue="install product",Ke="videopress stats",Ye="available licenses",St="chat availability",ce="chat authentication",Ge="backup history",We="stats counts",jt="dismiss welcome banner",Ae="purchases",ke="evaluate site recommendations",Qe="save site evaluation result",Je="remove site evaluation result",$e="update historically active modules",Xe="get jetpack manage data",Ze="red bubble alerts",Re="get protect data",xe="get videopress data",qe="get oauth authorize url",et="stats visits",tt={ANTI_SPAM:"anti-spam",BACKUP:"backup",BOOST:"boost",BRUTE_FORCE:"brute-force",CRM:"crm",CREATOR:"creator",EXTRAS:"extras",JETPACK_AI:"jetpack-ai",NEWSLETTER:"newsletter",PROTECT:"protect",RELATED_POSTS:"related-posts",SCAN:"scan",SEARCH:"search",SITE_ACCELERATOR:"site-accelerator",SOCIAL:"social",STATS:"stats",VIDEOPRESS:"videopress",SECURITY:"security",GROWTH:"growth",COMPLETE:"complete"};var st=e("../../../node_modules/.pnpm/@tanstack+react-query@5.75.1_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js"),Ie=e("../../../node_modules/.pnpm/@wordpress+api-fetch@7.25.0/node_modules/@wordpress/api-fetch/build-module/index.js");const Oe=100,nt=200,yt=300;var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const be={message:"",title:null,options:{level:"info",priority:0}},Pe=(0,r.createContext)({currentNotice:be,setNotice:null,resetNotice:null}),bt=({children:t})=>{const[o,p]=useState(be),m=useCallback(()=>{p(be)},[]),g=useCallback((S,b)=>{if(!o.message||S.options.priority>o.options.priority){const y={...S.options,onClose:S.options?.onClose||(S.options?.hideCloseButton?void 0:b)};m(),p({...S,options:y})}},[o.message,o.options.priority,m]);return _jsx(Pe.Provider,{value:{currentNotice:o,setNotice:g,resetNotice:m},children:t})},vt=null;try{noticeContext.displayName="noticeContext",noticeContext.__docgenInfo={description:"",displayName:"noticeContext",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"]={docgenInfo:noticeContext.__docgenInfo,name:"noticeContext",path:"../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"})}catch{}const Ue=h.__,Ne=[Ae,Be,ue,Re,xe],se=({infoName:t,isError:o,overrideMessage:p})=>{const{setNotice:m}=(0,r.useContext)(Pe),g=p??(0,h.sprintf)(Ue("There was an error fetching your %s information. Check your site connectivity and try again.","jetpack-my-jetpack"),t);(0,r.useEffect)(()=>{o&&Ne.includes(t)&&m({message:g,options:{id:"fetching-error-notice",level:"error",priority:Oe}})},[g,m,o,t])},me=({name:t,query:o,options:p,errorMessage:m})=>{const g=(0,st.I)({queryKey:[t,o],queryFn:()=>(0,Ie.A)(o),refetchOnWindowFocus:!1,refetchIntervalInBackground:!1,...p}),{error:S,isError:b,isLoading:y}=g;return se({infoName:t,isError:!y&&b&&S.code!=="not_connected",overrideMessage:m}),g},n=t=>t?window?.myJetpackInitialState?.[t]??{}:window?.myJetpackInitialState,i=()=>window?.myJetpackRest??{},V=t=>t?window?.JP_CONNECTION_INITIAL_STATE?.[t]??{}:window?.JP_CONNECTION_INITIAL_STATE,F=t=>Array.isArray(t)?t.map(o=>F(o)):typeof t=="object"&&t!==null?Object.fromEntries(Object.entries(t).map(([o,p])=>[o.replace(/([-_][a-z])/gi,m=>m.toUpperCase().replace(/[-_]/g,"")),F(p)])):t,Le=F,we=t=>t.pricingForUi.productTerm==="year"?Math.round(t.pricingForUi.fullPrice/12*100)/100:t.pricingForUi.fullPrice,Me=t=>t.pricingForUi.productTerm==="year"?Math.round(t.pricingForUi.discountPrice/12*100)/100:t.pricingForUi.discountPrice,ge=t=>{const o=Le(t);return o.features=o.features||[],o.supportedProducts=o.supportedProducts||[],o.pricingForUi&&(o.pricingForUi.fullPricePerMonth=we(o),o.pricingForUi.discountPricePerMonth=Me(o)),o},De=()=>{const{items:t}=n("products"),{data:o,isLoading:p,isRefetching:m,isError:g,refetch:S}=me({name:`${M}`,query:{path:`${A}`},options:{enabled:!0}});if(!p&&!g)for(const[b,y]of Object.entries(t))o&&o[b]&&(t[b]={...y,...o[b]});return t?{data:Object.entries(t).reduce((b,[y,U])=>({...b,[y]:ge(U)}),{}),refetch:S,isLoading:p,isRefetching:m,isError:g}:{data:{},isLoading:!1,isError:!1,isRefetching:m,refetch:S}},he=t=>{const o=t&&t?.length?`?products=${t?.join(",")}`:"";return me({name:`${M}`,query:{path:`${A}${o}`},options:{enabled:!1}})},ve=async t=>{const{data:o,isError:p,isLoading:m}=await t(),g=window.myJetpackInitialState.products.items;p||m||Object.keys(o).forEach(S=>{window.myJetpackInitialState.products.items[S]={...g[S],...o[S]}})},Tt=t=>{const o=Array.isArray(t)?t:[t],{data:p,isLoading:m}=De(),g=o?.map(U=>p?.[U]),{refetch:S,isLoading:b,isRefetching:y}=he(o);return{products:g,refetch:(0,r.useCallback)(()=>ve(S),[S]),isLoading:b||m,isRefetching:y}},at=t=>{const{products:o,refetch:p,isLoading:m,isRefetching:g}=Tt([t]);return{detail:o[0],refetch:p,isLoading:m,isRefetching:g}};var ct=e("../analytics/index.jsx"),it=e("../connection/components/use-connection/index.jsx");const Ct=({skipUserConnection:t=!1,redirectUri:o=""}={})=>{const{apiRoot:p,apiNonce:m}=i(),{topJetpackMenuItemUrl:g,blogID:S}=n(),{registrationNonce:b}=V(),y=(0,it.A)({apiRoot:p,apiNonce:m,registrationNonce:b,skipUserConnection:t,from:"my-jetpack",redirectUri:o,autoTrigger:!1}),U=y.isRegistered,Y=y.isRegistered,W=y.hasConnectedOwner;return{apiNonce:m,apiRoot:p,blogID:S,registrationNonce:b,...y,isSiteConnected:U,siteIsRegistered:Y,topJetpackMenuItemUrl:g,hasConnectedOwner:W}},At=()=>{const{isUserConnected:t,isSiteConnected:o,connectedPlugins:p,userConnectionData:m={}}=Ct(),{login:g,ID:S}=m.currentUser?.wpcomUser||{},{myJetpackVersion:b=""}=n();(0,r.useEffect)(()=>{t&&S&&g&&ct.A.initialize(S,g)},[S,t,g]);const y=Object.keys(p||{}).sort().join(",").replaceAll("jetpack-","");return{recordEvent:(0,r.useCallback)((Y,W)=>{ct.A.tracks.recordEvent(Y,{version:b,is_site_connected:o,is_user_connected:t,referring_plugins:y,...W})},[])}};var kt=e("../../packages/my-jetpack/_inc/components/loading-block/index.tsx"),Rt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal.tsx"),dt=e("../api/index.jsx"),lt=e("../script-data/src/utils.ts"),xt=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),It=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),Ot=e("../../../node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/browser.js"),Pt=e.n(Ot);function Ut(){switch((typeof window<"u"&&window?.JP_CONNECTION_INITIAL_STATE||(0,lt.au)()?.connection)?.calypsoEnv){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var pt=e("../connection/state/store.jsx");const K=Pt()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:Nt,apiRoot:Lt,apiNonce:wt,siteSuffix:Mt}=window?.JP_CONNECTION_INITIAL_STATE||(0,lt.au)()?.connection||{},Dt=()=>typeof window<"u"?window?.myJetpackInitialState?.adminUrl:null;function Vt({productSlug:t,redirectUrl:o,siteSuffix:p=Mt,adminUrl:m=Dt(),connectAfterCheckout:g=!1,siteProductAvailabilityHandler:S=null,quantity:b=null,from:y,useBlogIdSuffix:U=!1}={}){K("productSlug is %s",t),K("redirectUrl is %s",o),K("siteSuffix is %s",p),K("from is %s",y);const[Y,W]=(0,r.useState)(!1),{registerSite:Se}=(0,xt.A)(pt.a),Q=(0,It.A)(N=>N(pt.a).getBlogId(),[]);K("blogID is %s",Q??"undefined"),U=U&&!!Q;const{isUserConnected:Z,isRegistered:q,handleConnectUser:de}=(0,it.A)({redirectUri:o,from:y}),D=(0,r.useMemo)(()=>{const N=Ut(),J=(!q||!Z)&&g,le=J?"checkout/jetpack/":`checkout/${U?Q.toString():p}/`,ye=b!=null?`:-q-${b}`:"",$=new URL(`${N}${le}${t}${ye}`);return J?($.searchParams.set("connect_after_checkout",!0),$.searchParams.set("admin_url",m),$.searchParams.set("from_site_slug",p)):$.searchParams.set("site",p),$.searchParams.set("source",y),$.searchParams.set("redirect_to",o),Z||$.searchParams.set("unlinked","1"),$},[q,Z,g,p,b,t,y,o,m,U,Q]);K("isRegistered is %s",q),K("isUserConnected is %s",Z),K("connectAfterCheckout is %s",g),K("checkoutUrl is %s",D);const G=(N=null)=>Promise.resolve(S&&S()).then(J=>{if(N&&D.searchParams.set("redirect_to",N),J)return K("handleAfterRegistration: Site has a product associated"),de();K("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",D),window.location.href=D}),oe=(N=null)=>{N&&D.searchParams.set("redirect_to",N),K("Redirecting to connectAfterCheckout flow: %s",D),window.location.href=D},je=(N,J=null)=>{if(N&&N.preventDefault(),W(!0),g)return oe(J);if(q)return G(J);Se({registrationNonce:Nt,redirectUri:o}).then(()=>G(J))};return(0,r.useEffect)(()=>{dt.Ay.setApiRoot(Lt),dt.Ay.setApiNonce(wt)},[]),{run:je,isRegistered:q,hasCheckoutStarted:Y}}function Ft(){const t=window.location.search;return new URLSearchParams(t).has("redirect_to_referrer","1")&&document.referrer!==""?document.referrer:null}var zt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/style.module.scss");const Ht=h.__,Bt=({slug:t,buttonLabel:o,disabled:p,isExternalLink:m,href:g})=>{const{siteSuffix:b="",adminUrl:y="",myJetpackCheckoutUri:U=""}=n(),{detail:Y,isLoading:W}=at(t),{pricingForUi:Se,postCheckoutUrl:Q}=Y,{wpcomProductSlug:Z,tiers:q}=Se||{},de=t!=="boost"?Z:q?.upgraded?.wpcomProductSlug,D=Ft(),oe=(0,r.useCallback)(()=>Q||D||U,[Q,D,U])(),{run:je,hasCheckoutStarted:N}=Vt({productSlug:de,redirectUrl:oe,siteSuffix:b,adminUrl:y,connectAfterCheckout:!0,from:"my-jetpack",quantity:null,useBlogIdSuffix:!0});return(0,d.jsx)(l.A,{variant:"primary",className:zt.A["action-button"],isLoading:W||N,onClick:je,isExternalLink:m,href:g,disabled:p||W,children:o||Ht("Upgrade","jetpack-my-jetpack")})};try{productinterstitialmodalcta.displayName="productinterstitialmodalcta",productinterstitialmodalcta.__docgenInfo={description:"",displayName:"productinterstitialmodalcta",props:{slug:{defaultValue:null,description:"",name:"slug",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isExternalLink:{defaultValue:null,description:"",name:"isExternalLink",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal-cta.tsx#productinterstitialmodalcta"]={docgenInfo:productinterstitialmodalcta.__docgenInfo,name:"productinterstitialmodalcta",path:"../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal-cta.tsx#productinterstitialmodalcta"})}catch{}var Kt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstifial-feature-list.tsx");const Ve=h.__,Yt=h._x,Gt=({slug:t,children:o,onOpen:p,onClose:m,description:g,features:S,...b})=>{const{recordEvent:y}=At(),{detail:U,isLoading:Y}=at(t),{title:W,longDescription:Se,features:Q,pricingForUi:Z}=U,q=g||Se,de=S||Q,D=t==="boost"?Z?.tiers?.upgraded:Z;let G,oe;t==="boost"?(G=D?.fullPrice/12,oe=D?.discountPrice/12):(G=D?.fullPricePerMonth,oe=D?.discountPricePerMonth);const{currencyCode:je,introductoryOffer:N,productTerm:J}=D||{};let le;N?.intervalUnit==="month"&&N?.intervalCount===1?le=(0,h.sprintf)(Ve("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),G):J==="year"?le=Ve("/month, paid yearly","jetpack-my-jetpack"):le=Yt("/month",'Price description representing "per month" price',"jetpack-my-jetpack");const ye=N?.reason?G:oe,$=Y?(0,d.jsx)(kt.A,{width:"100%",height:"100px"}):(0,d.jsx)(z.A,{currency:je,price:G,offPrice:ye,showNotOffPrice:G>ye,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:ye>=G,legend:le}),ds=(0,r.useCallback)(()=>{y("jetpack_modal_interstitial_open",{placement:"product-page",context:"my-jetpack",product_slug:t}),p?.()},[y,t,p]),ls=(0,r.useCallback)(()=>{y("jetpack_modal_interstitial_close",{placement:"product-page",context:"my-jetpack",product_slug:t}),m?.()},[y,t,m]);let Et=null;return t==="jetpack-ai"&&(Et=(0,d.jsx)("p",{children:(0,f.A)(Ve("* Limits apply for high request capacity. <link>Learn more about it here</link>.","jetpack-my-jetpack"),{link:(0,d.jsx)(l.A,{href:(0,k.A)("ai-assistant-fair-usage-policy"),variant:"link",weight:"regular",size:"small",target:"_blank"})})})),(0,d.jsx)(Rt.A,{title:W,description:q,priceComponent:$,modalMainButton:(0,d.jsx)(Bt,{slug:t}),onOpen:ds,onClose:ls,isLoading:Y,...b,children:(0,d.jsxs)(d.Fragment,{children:[(Y||de)&&(0,d.jsx)(Kt.A,{isLoading:Y,features:de}),Et,o]})})},Wt=t=>{const o=new L.E;return(0,d.jsx)(s.Ht,{client:o,children:(0,d.jsx)(Gt,{...t})})};try{productinterstitialmyjetpack.displayName="productinterstitialmyjetpack",productinterstitialmyjetpack.__docgenInfo={description:"",displayName:"productinterstitialmyjetpack",props:{children:{defaultValue:null,description:"Child elements to be rendered within the placement",name:"children",required:!1,type:{name:"ReactNode"}},slug:{defaultValue:null,description:"Product slug",name:"slug",required:!0,type:{name:"string"}},onOpen:{defaultValue:null,description:"Callback function to be called when the modal is opened",name:"onOpen",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Callback function to be called when the modal is closed",name:"onClose",required:!1,type:{name:"() => void"}},description:{defaultValue:null,description:"Optional description for the product that overwrites the description from the product details",name:"description",required:!1,type:{name:"string"}},features:{defaultValue:null,description:"Optional features for the product that overwrites the features from the product details",name:"features",required:!1,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-my-jetpack.tsx#productinterstitialmyjetpack"]={docgenInfo:productinterstitialmyjetpack.__docgenInfo,name:"productinterstitialmyjetpack",path:"../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-my-jetpack.tsx#productinterstitialmyjetpack"})}catch{}const Qt=e.p+"static/media/boost.9e9a227e.png";var Jt=e("../number-formatters/src/index.ts");const $t=()=>(0,d.jsx)("svg",{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M10.6953 16.3906L18.4062 8.60938L10.6953 0.828125L8.63281 2.98438L12.8516 7.10938H0.699219V10.1094H12.8516L8.63281 14.2344L10.6953 16.3906Z"})});var Xt=e("../../plugins/boost/app/assets/src/js/lib/utils/analytics.ts"),Zt=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_t=e.n(Zt),ut=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.module.scss"),Fe={};Fe.insert="head",Fe.singleton=!1;var fs=_t()(ut.A,Fe);const Te=ut.A.locals||{};var qt=e("../react-data-sync-client/src/index.ts"),fe=e("../../../node_modules/.pnpm/zod@3.22.3/node_modules/zod/lib/index.mjs");const es=fe.z.object({priceBefore:fe.z.number(),priceAfter:fe.z.number(),currencyCode:fe.z.string(),isIntroductoryOffer:fe.z.boolean()}).nullable(),ts=()=>{const[{data:t}]=(0,qt.Bt)("jetpack_boost_ds","pricing",es);return t},ss=h.__,ns=({description:t,identifier:o,onClick:p,eventName:m="upsell_cta_from_settings_page_in_plugin"})=>{if(!Jetpack_Boost.site.online)return null;const g=()=>{(0,Xt.n7)(m,{identifier:o}),p&&p()},S=ts(),b=S?(0,Jt.vA)(S.priceAfter/12,S.currencyCode):null,y=b?b.symbol+b.integer+b.fraction:"_";return(0,d.jsxs)("button",{className:Te["upgrade-cta"],onClick:g,children:[(0,d.jsxs)("div",{className:Te.body,children:[(0,d.jsx)("p",{children:t}),(0,d.jsx)("p",{className:Te["action-line"],children:(0,h.sprintf)(ss("Upgrade now only %s per month","jetpack-boost"),y)})]}),(0,d.jsx)("div",{className:Te.icon,children:(0,d.jsx)($t,{})})]})};try{upgradecta.displayName="upgradecta",upgradecta.__docgenInfo={description:"",displayName:"upgradecta",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},eventName:{defaultValue:{value:"upsell_cta_from_settings_page_in_plugin"},description:"",name:"eventName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.tsx#upgradecta"]={docgenInfo:upgradecta.__docgenInfo,name:"upgradecta",path:"../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.tsx#upgradecta"})}catch{}const ne=h.__,os=({description:t="",identifier:o,customModalTrigger:p})=>{const m=(0,k.A)("jetpack-boost-interstitial-modal-learn-more");return(0,d.jsx)(Wt,{slug:"boost",customModalTrigger:p??(0,d.jsx)(ns,{identifier:o,description:t}),buttonLabel:ne("Upgrade now","jetpack-boost"),isWithVideo:!1,secondaryColumn:(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:Qt,alt:"Boost"})}),secondaryButtonHref:m,description:ne("Unlock the full potential of Jetpack Boost with automated performance optimization tools and more.","jetpack-boost"),features:[ne("Automated Critical CSS Generation","jetpack-boost"),ne("Automated Image Scanning","jetpack-boost"),ne("In-depth Performance Insights","jetpack-boost"),ne("Customizable Image Optimization","jetpack-boost"),ne("Expert Support With Personal Assistance Available","jetpack-boost")]})};try{interstitialmodalcta.displayName="interstitialmodalcta",interstitialmodalcta.__docgenInfo={description:"",displayName:"interstitialmodalcta",props:{description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},customModalTrigger:{defaultValue:null,description:"",name:"customModalTrigger",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/upgrade-cta/interstitial-modal-cta.tsx#interstitialmodalcta"]={docgenInfo:interstitialmodalcta.__docgenInfo,name:"interstitialmodalcta",path:"../../plugins/boost/app/assets/src/js/features/upgrade-cta/interstitial-modal-cta.tsx#interstitialmodalcta"})}catch{}var mt=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss"),ze={};ze.insert="head",ze.singleton=!1;var js=_t()(mt.A,ze);const gt=mt.A.locals||{},Ee=h.__,ht=({children:t})=>(0,d.jsxs)("div",{className:gt.dummy,children:[t,(0,d.jsx)(_.A,{isPlaceholder:!0})]}),ft=({periods:t=[],annotations:o=[],startDate:p=0,endDate:m=0,needsUpgrade:g,handleUpgrade:S,isFreshStart:b,handleDismissFreshStart:y,isLoading:U})=>U?(0,d.jsx)("div",{className:gt.dummy,children:(0,d.jsx)(u.A,{color:"#000000"})}):g?(0,d.jsx)(ht,{children:(0,d.jsx)(a.A,{icon:(0,d.jsx)(c.A,{icon:"lock"}),action:(0,d.jsx)(os,{identifier:"historical-performance",customModalTrigger:(0,d.jsx)(l.A,{onClick:S,children:Ee("Upgrade now!","jetpack-boost")})}),children:(0,d.jsx)("p",{children:Ee("Upgrade and learn more about your site performance over time.","jetpack-boost")})})}):b?(0,d.jsx)(ht,{children:(0,d.jsx)(a.A,{icon:(0,d.jsx)(c.A,{icon:"checkmark"}),action:(0,d.jsx)(l.A,{onClick:y,children:Ee("Okay, got it!","jetpack-boost")}),children:(0,d.jsxs)("p",{children:[Ee("Hello there! Jetpack Boost premium has been activated.","jetpack-boost"),(0,d.jsx)("br",{}),Ee("Your scores will be recorded from now on.","jetpack-boost")]})})}):(0,d.jsx)(_.A,{periods:t,annotations:o,startDate:p,endDate:m});try{graphcomponent.displayName="graphcomponent",graphcomponent.__docgenInfo={description:"",displayName:"graphcomponent",props:{periods:{defaultValue:{value:"[]"},description:"",name:"periods",required:!1,type:{name:"Period[]"}},annotations:{defaultValue:{value:"[]"},description:"",name:"annotations",required:!1,type:{name:"Annotation[]"}},startDate:{defaultValue:{value:"0"},description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:{value:"0"},description:"",name:"endDate",required:!1,type:{name:"number"}},needsUpgrade:{defaultValue:null,description:"",name:"needsUpgrade",required:!0,type:{name:"boolean"}},handleUpgrade:{defaultValue:null,description:"",name:"handleUpgrade",required:!0,type:{name:"() => void"}},isFreshStart:{defaultValue:null,description:"",name:"isFreshStart",required:!0,type:{name:"boolean"}},handleDismissFreshStart:{defaultValue:null,description:"",name:"handleDismissFreshStart",required:!0,type:{name:"() => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"]={docgenInfo:graphcomponent.__docgenInfo,name:"graphcomponent",path:"../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"})}catch{}var bs=`import { useState, useEffect } from 'react';
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
	const [isFreshStart, setIsFreshStart] = useState( args.isFreshStart );
	const [needsUpgrade, setNeedsUpgrade] = useState( args.needsUpgrade );

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
`,vs={_default:{startLoc:{col:17,line:197},endLoc:{col:1,line:217},startBody:{col:17,line:197},endBody:{col:1,line:217}}};const Ce={data:{_meta:{start:1689772803e3,end:1690647e6},periods:[{timestamp:1690636803e3,dimensions:{desktop_overall_score:86,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689859203e3,dimensions:{desktop_overall_score:72,mobile_overall_score:49,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689945603e3,dimensions:{desktop_overall_score:20,mobile_overall_score:30,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690032003e3,dimensions:{desktop_overall_score:72,mobile_overall_score:40,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690118403e3,dimensions:{desktop_overall_score:55,mobile_overall_score:45,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690204803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690291203e3,dimensions:{desktop_overall_score:70,mobile_overall_score:50,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690377603e3,dimensions:{desktop_overall_score:75,mobile_overall_score:90,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690464003e3,dimensions:{desktop_overall_score:80,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690550403e3,dimensions:{desktop_overall_score:85,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}],annotations:[{timestamp:1690291223e3,text:"Annotation text"},{timestamp:1689984e6,text:"Another Annotation text"}]}},rs={parameters:{storySource:{source:`import { useState, useEffect } from 'react';
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
  const [isFreshStart, setIsFreshStart] = useState(args.isFreshStart);
  const [needsUpgrade, setNeedsUpgrade] = useState(args.needsUpgrade);

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
_default.args = defaultValues;`,locationsMap:{default:{startLoc:{col:17,line:197},endLoc:{col:1,line:217},startBody:{col:17,line:197},endBody:{col:1,line:217}}}}},title:"Plugins/Boost/Performance History Graph",component:ft,argTypes:{startDate:{control:"date"},endDate:{control:"date"},periods:{control:"object"},annotations:{control:"object"},isLoading:{control:"boolean"},needsUpgrade:{control:"boolean"},isFreshStart:{control:"boolean"}},decorators:[t=>(0,d.jsx)("div",{style:{maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,d.jsx)(t,{})})]},as={startDate:Ce.data._meta.start,endDate:Ce.data._meta.end,periods:Ce.data.periods,annotations:Ce.data.annotations,isLoading:!1,needsUpgrade:!1,isFreshStart:!1},cs=rs,ie=(t=>{const[o,p]=(0,r.useState)(t.isFreshStart),[m,g]=(0,r.useState)(t.needsUpgrade);return(0,r.useEffect)(()=>{p(t.isFreshStart),g(t.needsUpgrade)},[t.isFreshStart,t.needsUpgrade]),t.handleUpgrade=()=>{g(!1)},t.handleDismissFreshStart=()=>{p(!1)},(0,d.jsx)(ft,{...t,isFreshStart:o,needsUpgrade:m})}).bind({});ie.args=as;const is=["_default"];ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`args => {
  const [isFreshStart, setIsFreshStart] = useState(args.isFreshStart);
  const [needsUpgrade, setNeedsUpgrade] = useState(args.needsUpgrade);

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
}`,...ie.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+element@6.25.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(O,v,e)=>{"use strict";e.d(v,{A:()=>P});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let _,u,a,c;const l=/<(\/)?(\w+)\s*(\/)?>/g;function k(j,T,I,A,E){return{element:j,tokenStart:T,tokenLength:I,prevOffset:A,leadingTextStart:E,children:[]}}const z=(j,T)=>{if(_=j,u=0,a=[],c=[],l.lastIndex=0,!L(T))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(s(T));return(0,r.createElement)(r.Fragment,null,...a)},L=j=>{const T=typeof j=="object",I=T&&Object.values(j);return T&&I.length&&I.every(A=>(0,r.isValidElement)(A))};function s(j){const T=f(),[I,A,E,x]=T,C=c.length,H=E>u?u:null;if(!j[A])return h(),!1;switch(I){case"no-more-tokens":if(C!==0){const{leadingTextStart:te,tokenStart:re}=c.pop();a.push(_.substr(te,re))}return h(),!1;case"self-closed":return C===0?(H!==null&&a.push(_.substr(H,E-H)),a.push(j[A]),u=E+x,!0):(w(k(j[A],E,x)),u=E+x,!0);case"opener":return c.push(k(j[A],E,x,E+x,H)),u=E+x,!0;case"closer":if(C===1)return R(E),u=E+x,!0;const B=c.pop(),ee=_.substr(B.prevOffset,E-B.prevOffset);B.children.push(ee),B.prevOffset=E+x;const X=k(B.element,B.tokenStart,B.tokenLength,E+x);return X.children=B.children,w(X),u=E+x,!0;default:return h(),!1}}function f(){const j=l.exec(_);if(j===null)return["no-more-tokens"];const T=j.index,[I,A,E,x]=j,C=I.length;return x?["self-closed",E,T,C]:A?["closer",E,T,C]:["opener",E,T,C]}function h(){const j=_.length-u;j!==0&&a.push(_.substr(u,j))}function w(j){const{element:T,tokenStart:I,tokenLength:A,prevOffset:E,children:x}=j,C=c[c.length-1],H=_.substr(C.prevOffset,I-C.prevOffset);H&&C.children.push(H),C.children.push((0,r.cloneElement)(T,null,...x)),C.prevOffset=E||I+A}function R(j){const{element:T,leadingTextStart:I,prevOffset:A,tokenStart:E,children:x}=c.pop(),C=j?_.substr(A,j-A):_.substr(A);C&&x.push(C),I!==null&&a.push(_.substr(I,E-I)),a.push((0,r.cloneElement)(T,null,...x))}const P=z},"../components/components/spinner/index.jsx":(O,v,e)=>{"use strict";e.d(v,{A:()=>f});var r=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),_=e.n(r),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(u),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/spinner/style.scss"),l={};l.insert="head",l.singleton=!1;var k=a()(c.A,l);const z=c.A.locals||{};var L=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=({color:h="#FFFFFF",className:w="",size:R=20})=>{const P=w+" jp-components-spinner",j={width:R,height:R,fontSize:R,borderTopColor:h},T={borderTopColor:h,borderRightColor:h};return(0,L.jsx)("div",{className:P,children:(0,L.jsx)("div",{className:"jp-components-spinner__outer",style:j,children:(0,L.jsx)("div",{className:"jp-components-spinner__inner",style:T})})})};s.propTypes={color:_().string,className:_().string,size:_().number};const f=s;s.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}}},"../connection/components/use-connection/index.jsx":(O,v,e)=>{"use strict";e.d(v,{A:()=>z});var r=e("../api/index.jsx"),_=e("../script-data/src/utils.ts"),u=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),a=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../connection/state/store.jsx");const k=window?.JP_CONNECTION_INITIAL_STATE||(0,_.au)()?.connection||{};function z({registrationNonce:L=k.registrationNonce,apiRoot:s=k.apiRoot,apiNonce:f=k.apiNonce,redirectUri:h,autoTrigger:w,from:R,skipUserConnection:P,skipPricingPage:j}={}){const{registerSite:T,connectUser:I,refreshConnectedPlugins:A}=(0,u.A)(l.a),E=(0,a.A)(M=>M(l.a).getRegistrationError()),{siteIsRegistering:x,userIsConnecting:C,userConnectionData:H,connectedPlugins:B,connectionErrors:ee,isRegistered:X,isUserConnected:te,hasConnectedOwner:re,isOfflineMode:pe}=(0,a.A)(M=>({siteIsRegistering:M(l.a).getSiteIsRegistering(),userIsConnecting:M(l.a).getUserIsConnecting(),userConnectionData:M(l.a).getUserConnectionData(),connectedPlugins:M(l.a).getConnectedPlugins(),connectionErrors:M(l.a).getConnectionErrors(),isOfflineMode:M(l.a).getIsOfflineMode(),...M(l.a).getConnectionStatus()})),ae=()=>{if(P){if(h)return window.location=h,Promise.resolve(h)}else return I({from:R,redirectUri:h,skipPricingPage:j});return Promise.resolve()},_e=M=>(M&&M.preventDefault(),X?ae():T({registrationNonce:L,redirectUri:h,from:R}).then(()=>ae()));return(0,c.useEffect)(()=>{r.Ay.setApiRoot(s),r.Ay.setApiNonce(f)},[s,f]),(0,c.useEffect)(()=>{w&&!x&&!C&&_e()},[]),{handleRegisterSite:_e,handleConnectUser:ae,refreshConnectedPlugins:A,isRegistered:X,isUserConnected:te,siteIsRegistering:x,userIsConnecting:C,registrationError:E,userConnectionData:H,hasConnectedOwner:re,connectedPlugins:B,connectionErrors:ee,isOfflineMode:pe}}},"../connection/state/store.jsx":(O,v,e)=>{"use strict";e.d(v,{a:()=>ce});var r=e("../script-data/src/utils.ts"),_=e("../api/index.jsx");const u="SET_CONNECTION_STATUS",a="SET_CONNECTION_STATUS_IS_FETCHING",c="FETCH_CONNECTION_STATUS",l="SET_SITE_IS_REGISTERING",k="SET_USER_IS_CONNECTING",z="SET_REGISTRATION_ERROR",L="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",f="SET_AUTHORIZATION_URL",h="CONNECT_USER",w="DISCONNECT_USER_SUCCESS",R="FETCH_AUTHORIZATION_URL",P="SET_CONNECTED_PLUGINS",j="REFRESH_CONNECTED_PLUGINS",T="SET_CONNECTION_ERRORS",I="SET_IS_OFFLINE_MODE",A=n=>({type:u,connectionStatus:n}),E=n=>({type:a,isFetching:n}),x=()=>({type:c}),C=n=>({type:l,isRegistering:n}),H=n=>({type:k,isConnecting:n}),B=()=>({type:w}),ee=n=>({type:z,registrationError:n}),X=()=>({type:L}),te=n=>({type:f,authorizationUrl:n}),re=n=>({type:R,redirectUri:n}),pe=n=>({type:P,connectedPlugins:n}),ae=n=>({type:T,connectionErrors:n}),_e=n=>({type:I,isOfflineMode:n});function*M({from:n,redirectFunc:i,redirectUri:V,skipPricingPage:F}={}){yield H(!0),yield{type:h,from:n,redirectFunc:i,redirectUri:V,skipPricingPage:F}}function*He({registrationNonce:n,redirectUri:i,from:V=""}){yield X(),yield C(!0);try{const F=yield{type:s,registrationNonce:n,redirectUri:i,from:V};return yield A({isRegistered:!0}),yield te(F.authorizeUrl),yield C(!1),Promise.resolve(F)}catch(F){return yield ee(F),yield C(!1),Promise.reject(F)}}const ue={setConnectionStatus:A,setConnectionStatusIsFetching:E,fetchConnectionStatus:x,fetchAuthorizationUrl:re,setSiteIsRegistering:C,setUserIsConnecting:H,setRegistrationError:ee,clearRegistrationError:X,setAuthorizationUrl:te,registerSite:He,connectUser:M,disconnectUserSuccess:B,setConnectedPlugins:pe,refreshConnectedPlugins:()=>async({dispatch:n})=>await new Promise(i=>_.Ay.fetchConnectedPlugins().then(V=>{n(pe(V)),i(V)})),setConnectionErrors:ae,setIsOfflineMode:_e};var Ke=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");function Ye(n){return window.location.assign(n)}const ce="jetpack-connection",Ge=({redirectUri:n,from:i})=>_.Ay.registerSite(null,n,i),We=(0,Ke.b)(({resolveSelect:n})=>({from:i,redirectFunc:V,redirectUri:F,skipPricingPage:Le}={})=>new Promise((we,Me)=>{n(ce).getAuthorizationUrl(F).then(ge=>{const De=V||(rt=>Ye(rt)),he=new URL(ge);Le&&he.searchParams.set("skip_pricing","true"),i&&he.searchParams.set("from",encodeURIComponent(i));const ve=he.toString();De(ve),we(ve)}).catch(ge=>{Me(ge)})})),Ae={FETCH_AUTHORIZATION_URL:({redirectUri:n})=>_.Ay.fetchAuthorizationUrl(n),REGISTER_SITE:Ge,CONNECT_USER:We};var ke=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const Qe=(n={},i)=>{switch(i.type){case u:return{...n,...i.connectionStatus};case w:return{...n,isUserConnected:!1}}return n},Je=(n={},i)=>{switch(i.type){case P:return i.connectedPlugins}return n},$e=(n=!1,i)=>{switch(i.type){case a:return i.isFetching}return n},Xe=(n=!1,i)=>{switch(i.type){case l:return i.isRegistering}return n},Ze=(n=!1,i)=>{switch(i.type){case k:return i.isConnecting}return n},Re=(n,i)=>{switch(i.type){case L:return!1;case z:return i.registrationError;default:return n}},xe=(n,i)=>{switch(i.type){case f:return i.authorizationUrl;default:return n}},qe=(n,i)=>{switch(i.type){default:return n}},et=(n={},i)=>{switch(i.type){case T:return i.connectionErrors}return n},tt=(n=!1,i)=>{switch(i.type){case I:return i.isConnecting}return n},Ie=(0,ke.combineReducers)({connectionStatus:Qe,connectionStatusIsFetching:$e,siteIsRegistering:Xe,userIsConnecting:Ze,registrationError:Re,authorizationUrl:xe,userConnectionData:qe,connectedPlugins:Je,connectionErrors:et,isOfflineMode:tt});var Oe=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),nt=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const d={...{getAuthorizationUrl:{isFulfilled:(n,...i)=>{const V=!!n.authorizationUrl,F=(0,Oe.L)(ce).hasFinishedResolution("getAuthorizationUrl",i);return V&&!F&&(0,nt.J)(ce).finishResolution("getAuthorizationUrl",i),V},*fulfill(n){const i=yield ue.fetchAuthorizationUrl(n);yield ue.setAuthorizationUrl(i.authorizeUrl)}}}},Ue={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>n?.userConnectionData?.currentUser?.wpcomUser,getBlogId:n=>n?.userConnectionData?.currentUser?.blogId}};var Ne=e("../../../node_modules/.pnpm/@wordpress+data@10.25.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");class se{static store=null;static mayBeInit(i,V){se.store===null&&(se.store=(0,Ne.A)(i,V),(0,ke.register)(se.store))}}const ot=se,me=window.JP_CONNECTION_INITIAL_STATE||(0,r.au)()?.connection;me||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),ot.mayBeInit(ce,{__experimentalUseThunks:!0,reducer:Ie,actions:ue,selectors:Ue,resolvers:d,controls:Ae,initialState:me||{}})},"../components/components/gridicon/index.tsx":(O,v,e)=>{"use strict";e.d(v,{A:()=>w});var r=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(a),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/gridicon/style.scss"),k={};k.insert="head",k.singleton=!1;var z=c()(l.A,k);const L=l.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const f=r.__;class h extends u.Component{static defaultProps={"aria-hidden":"false",focusable:"true"};needsOffset(P,j){return["gridicons-arrow-left","gridicons-arrow-right","gridicons-calendar","gridicons-cart","gridicons-folder","gridicons-help-outline","gridicons-info","gridicons-info-outline","gridicons-posts","gridicons-star-outline","gridicons-star"].indexOf(P)>=0?j%18===0:!1}getSVGDescription(P){if("description"in this.props)return this.props.description;switch(P){default:return"";case"gridicons-audio":return f("Has audio.","jetpack-components");case"gridicons-arrow-left":return f("Arrow left","jetpack-components");case"gridicons-arrow-right":return f("Arrow right","jetpack-components");case"gridicons-calendar":return f("Is an event.","jetpack-components");case"gridicons-cart":return f("Is a product.","jetpack-components");case"chevron-down":return f("Show filters","jetpack-components");case"gridicons-comment":return f("Matching comment.","jetpack-components");case"gridicons-cross":return f("Close.","jetpack-components");case"gridicons-filter":return f("Toggle search filters.","jetpack-components");case"gridicons-folder":return f("Category","jetpack-components");case"gridicons-help-outline":return f("Help","jetpack-components");case"gridicons-info":case"gridicons-info-outline":return f("Information.","jetpack-components");case"gridicons-image-multiple":return f("Has multiple images.","jetpack-components");case"gridicons-image":return f("Has an image.","jetpack-components");case"gridicons-page":return f("Page","jetpack-components");case"gridicons-post":return f("Post","jetpack-components");case"gridicons-jetpack-search":case"gridicons-search":return f("Magnifying Glass","jetpack-components");case"gridicons-tag":return f("Tag","jetpack-components");case"gridicons-video":return f("Has a video.","jetpack-components")}}renderIcon(P){switch(P){default:return null;case"gridicons-audio":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M8 4v10.184C7.686 14.072 7.353 14 7 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7h7v4.184c-.314-.112-.647-.184-1-.184-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4H8z"})});case"gridicons-arrow-left":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})});case"gridicons-arrow-right":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})});case"gridicons-block":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z"})});case"gridicons-calendar":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z"})});case"gridicons-cart":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5c.937 0 1.75-.65 1.952-1.566L21 5H7V4c0-1.105-.895-2-2-2H3v2h2v11c0 1.105.895 2 2 2h12c0-1.105-.895-2-2-2H7v-2h10.396z"})});case"gridicons-checkmark":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"})});case"gridicons-chevron-left":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16.443 7.41L15.0399 6L9.06934 12L15.0399 18L16.443 16.59L11.8855 12L16.443 7.41Z"})});case"gridicons-chevron-right":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M10.2366 6L8.8335 7.41L13.391 12L8.8335 16.59L10.2366 18L16.2072 12L10.2366 6Z"})});case"gridicons-chevron-down":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"})});case"gridicons-comment":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M3 6v9c0 1.105.895 2 2 2h9v5l5.325-3.804c1.05-.75 1.675-1.963 1.675-3.254V6c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2z"})});case"gridicons-computer":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 2H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm0 14H4V4h16v12z"})});case"gridicons-cross":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"})});case"gridicons-filter":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z"})});case"gridicons-folder":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"})});case"gridicons-help-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-1.962-2v-.528c0-.4.082-.74.246-1.017.163-.276.454-.546.87-.808.333-.21.572-.397.717-.565.146-.168.22-.36.22-.577 0-.172-.078-.308-.234-.41-.156-.1-.358-.15-.608-.15-.62 0-1.34.22-2.168.658l-.854-1.67c1.02-.58 2.084-.872 3.194-.872.913 0 1.63.202 2.15.603.52.4.78.948.78 1.64 0 .495-.116.924-.347 1.287-.23.362-.6.705-1.11 1.03-.43.278-.7.48-.807.61-.108.13-.163.282-.163.458V13h-1.885z"})});case"gridicons-image":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M13 9.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM22 6v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2zm-2 0H4v7.444L8 9l5.895 6.55 1.587-1.85c.798-.932 2.24-.932 3.037 0L20 15.426V6z"})});case"gridicons-image-multiple":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5zM4 20h14c0 1.105-.895 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.105.895-2 2-2v14zM22 4v12c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zM8 4v6.333L11 7l4.855 5.395.656-.73c.796-.886 2.183-.886 2.977 0l.513.57V4H8z"})});case"gridicons-info":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})});case"gridicons-info-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"})});case"gridicons-jetpack-search":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M0 9.257C0 4.15 4.151 0 9.257 0c5.105 0 9.256 4.151 9.256 9.257a9.218 9.218 0 01-2.251 6.045l.034.033h1.053L24 22.01l-1.986 1.989-6.664-6.662v-1.055l-.033-.033a9.218 9.218 0 01-6.06 2.264C4.15 18.513 0 14.362 0 9.257zm4.169 1.537h4.61V1.82l-4.61 8.973zm5.547-3.092v8.974l4.61-8.974h-4.61z"})});case"gridicons-phone":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 2H8c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z"})});case"gridicons-pages":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z"})});case"gridicons-posts":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"})});case"gridicons-search":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"})});case"gridicons-star-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z"})});case"gridicons-star":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"})});case"gridicons-tag":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"})});case"gridicons-video":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 4v2h-2V4H6v2H4V4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2v-2h2v2h12v-2h2v2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM6 16H4v-3h2v3zm0-5H4V8h2v3zm4 4V9l4.5 3-4.5 3zm10 1h-2v-3h2v3zm0-5h-2V8h2v3z"})});case"gridicons-lock":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("g",{id:"lock",children:(0,s.jsx)("path",{d:"M18,8h-1V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H6c-1.105,0-2,0.895-2,2v10c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V10 C20,8.895,19.105,8,18,8z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M13,15.723V18h-2v-2.277c-0.595-0.346-1-0.984-1-1.723 c0-1.105,0.895-2,2-2s2,0.895,2,2C14,14.738,13.595,15.376,13,15.723z"})}),(0,s.jsx)("g",{id:"Layer_1"})]});case"gridicons-external":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})})}}render(){const{size:P=24,className:j=""}=this.props,T=this.props.height||P,I=this.props.width||P,A=this.props.style||{height:T,width:I},E="gridicons-"+this.props.icon,x=(0,_.A)("gridicon",E,j,{"needs-offset":this.needsOffset(E,P)}),C=this.getSVGDescription(E);return(0,s.jsxs)("svg",{className:x,focusable:this.props.focusable,height:T,onClick:this.props.onClick,style:A,viewBox:"0 0 24 24",width:I,xmlns:"http://www.w3.org/2000/svg","aria-hidden":this.props["aria-hidden"],children:[C?(0,s.jsx)("desc",{children:C}):null,this.renderIcon(E)]})}}const w=h;try{h.displayName="Gridicon",h.__docgenInfo={description:"",displayName:"Gridicon",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"HTML class name",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description for SVG for screen readers",name:"description",required:!1,type:{name:"string"}},focusable:{defaultValue:{value:"true"},description:"Whether SVG is focussable",name:"focusable",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"SVG height",name:"height",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"VoidFunction"}},size:{defaultValue:null,description:"SVG width and height",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"SVG style",name:"style",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:null,description:"SVG width",name:"width",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/gridicon/index.tsx#Gridicon"]={docgenInfo:h.__docgenInfo,name:"Gridicon",path:"../components/components/gridicon/index.tsx#Gridicon"})}catch{}},"../components/components/popover/index.tsx":(O,v,e)=>{"use strict";e.d(v,{A:()=>L});var r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(r),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/popover/style.scss"),a={};a.insert="head",a.singleton=!1;var c=_()(u.A,a);const l=u.A.locals||{};var k=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const L=({icon:s,children:f,action:h})=>(0,k.jsxs)("div",{className:"jp-popover",children:[(0,k.jsx)("div",{className:"jp-popover__icon",children:s}),(0,k.jsx)("div",{className:"jp-popover__body",children:f}),(0,k.jsx)("div",{className:"jp-popover__action",children:h})]});try{popover.displayName="popover",popover.__docgenInfo={description:"",displayName:"popover",props:{action:{defaultValue:null,description:"",name:"action",required:!0,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/popover/index.tsx#popover"]={docgenInfo:popover.__docgenInfo,name:"popover",path:"../components/components/popover/index.tsx#popover"})}catch{}},"../script-data/src/utils.ts":(O,v,e)=>{"use strict";e.d(v,{Sy:()=>z,au:()=>r,lI:()=>s});function r(){return window.JetpackScriptData}function _(){return r()?.site}function u(R=""){return`${r()?.site.admin_url}${R}`}function a(R=""){return u(`admin.php?page=jetpack${R}`)}function c(R=""){return u(`admin.php?page=my-jetpack${R}`)}function l(){return r()?.site.plan?.features?.active??[]}function k(R){return l().includes(R)}function z(){return r()?.site?.host==="wpcom"}function L(){return r()?.site?.host==="atomic"}function s(){return r()?.site?.host==="woa"}function f(){return r()?.site?.is_wpcom_platform}function h(){return r()?.site?.host==="unknown"}function w(R){return r()?.user.current_user.capabilities[R]}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/gridicon/style.scss":(O,v,e)=>{"use strict";e.d(v,{A:()=>l});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),c=a()(_());c.push([O.id,".gridicon{fill:currentColor;display:inline-block}.gridicon.needs-offset g{transform:translate(1px, 1px)}.gridicon.needs-offset-x g{transform:translate(1px, 0)}.gridicon.needs-offset-y g{transform:translate(0, 1px)}",""]);const l=c},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/popover/style.scss":(O,v,e)=>{"use strict";e.d(v,{A:()=>l});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),c=a()(_());c.push([O.id,'.jp-popover{width:600px;max-width:calc(100% - 32px);padding:16px;background-color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.06),0 4px 8px 0 rgba(0,0,0,.03);border:1px solid #dcdcde;border-radius:4px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.jp-popover>*{margin:16px;clear:both}.jp-popover__body p{font-weight:400;line-height:1.6em;font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}',""]);const l=c},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/spinner/style.scss":(O,v,e)=>{"use strict";e.d(v,{A:()=>l});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),c=a()(_());c.push([O.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const l=c},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss":(O,v,e)=>{"use strict";e.d(v,{A:()=>l});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),c=a()(_());c.push([O.id,".RWH4ytGzomJa_kl2YaAQ{position:relative;min-height:300px}.RWH4ytGzomJa_kl2YaAQ .jp-components-spinner{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",""]),c.locals={dummy:"RWH4ytGzomJa_kl2YaAQ"};const l=c},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.module.scss":(O,v,e)=>{"use strict";e.d(v,{A:()=>l});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),c=a()(_());c.push([O.id,":root{--light-border: #eee;--jetpack-green: #008710;--primary-black: #23282d;--primary-white: #fff;--primary-grey: #444;--secondary-grey: #888;--color_warning: #cc1818;--alt-white: #f9f9f6;--gray-0: #f6f7f7;--gray-5: #dcdcde;--gray-10: #c3c4c7;--gray-20: #a7aaad;--gray-30: #8c8f94;--gray-40: #787c82;--gray-50: #646970;--gray-60: #50575e;--gray-70: #3c434a;--gray-80: #2c3338;--gray-90: #1d2327;--gray-100: #101517;--gray: #646970;--blue-50: #2271b1;--blue-60: #135e96;--red-40: #e65054;--jetpack-green-0: #f0f2eb;--jetpack-green-5: #d0e6b8;--jetpack-green-10: #9dd977;--jetpack-green-20: #64ca43;--jetpack-green-30: #2fb41f;--jetpack-green-40: #069e08;--jetpack-green-50: #008710;--jetpack-green-60: #007117;--jetpack-green-70: #005b18;--jetpack-green-80: #004515;--jetpack-green-90: #003010;--jetpack-green-100: #001c09;--jp-yellow-20: #DEB100}.vkCjuesTxRrG7rjYKIHQ{width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 24px;margin:32px 0;border:2px solid #008710;border-radius:4px;background-color:#fff;text-align:left;cursor:pointer}.vkCjuesTxRrG7rjYKIHQ .vxEc8Z4qGda7Itz5UiMm p{margin:0}.vkCjuesTxRrG7rjYKIHQ .wcsiokDgpxboqLmIPdgN{font-weight:700}.vkCjuesTxRrG7rjYKIHQ .cAP12JGonXqBmbn0cHLx svg{fill:#008710}",""]),c.locals={"upgrade-cta":"vkCjuesTxRrG7rjYKIHQ",body:"vxEc8Z4qGda7Itz5UiMm","action-line":"wcsiokDgpxboqLmIPdgN",icon:"cAP12JGonXqBmbn0cHLx"};const l=c},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js":(O,v,e)=>{"use strict";var r=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");function _(){}function u(){}u.resetWarningCache=_,O.exports=function(){function a(k,z,L,s,f,h){if(h!==r){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}a.isRequired=a;function c(){return a}var l={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:c,element:a,elementType:a,instanceOf:c,node:a,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:_};return l.PropTypes=l,l}},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":(O,v,e)=>{if(0)var r,_;else O.exports=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":O=>{"use strict";var v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";O.exports=v}}]);
