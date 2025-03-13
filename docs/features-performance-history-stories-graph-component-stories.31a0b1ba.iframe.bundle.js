"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7665],{"../../plugins/boost/app/assets/src/js/features/performance-history/stories/graph-component.stories.tsx":(k,b,e)=>{e.r(b),e.d(b,{__namedExportsOrder:()=>ns,_default:()=>ae,default:()=>ss});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../components/components/boost-score-graph/index.tsx"),j=e("../components/components/spinner/index.jsx"),f=e("../components/components/popover/index.tsx"),g=e("../components/components/gridicon/index.tsx"),p=e("../components/components/button/index.tsx"),y=e("../components/components/product-price/index.tsx"),L=e("../components/tools/jp-redirect/index.ts"),M=e("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/queryClient.js"),s=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_=e("../../../node_modules/.pnpm/@wordpress+element@6.19.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),E=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js");const O="my-jetpack/v1",v="jetpack/v4/stats-app",C=null,Y=null,w=null,F=null,G=`${O}/site/products`,W=null,X="videopress/v1/stats/featured",D=null,de=null,Se=null,le=null,te=null,pe=null,je=t=>`${v}/sites/${t}/stats/highlights`,Z="product",se="product ownership",ne="activate product",R="install product",Ke="videopress stats",ht="available licenses",be="chat availability",Ye="chat authentication",ft="backup history",oe="stats counts",Ge="dismiss welcome banner",Ie="purchases",Et="evaluate site recommendations",We="save site evaluation result",Oe="remove site evaluation result",Je="update historically active modules",Qe="get jetpack manage data",$e="red bubble alerts",Xe={ANTI_SPAM:"anti-spam",BACKUP:"backup",BOOST:"boost",BRUTE_FORCE:"brute-force",CRM:"crm",CREATOR:"creator",EXTRAS:"extras",JETPACK_AI:"jetpack-ai",NEWSLETTER:"newsletter",PROTECT:"protect",RELATED_POSTS:"related-posts",SCAN:"scan",SEARCH:"search",SITE_ACCELERATOR:"site-accelerator",SOCIAL:"social",STATS:"stats",VIDEOPRESS:"videopress",SECURITY:"security",GROWTH:"growth",COMPLETE:"complete"};var Pe=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js"),Ue=e("../../../node_modules/.pnpm/@wordpress+api-fetch@7.19.0/node_modules/@wordpress/api-fetch/build-module/index.js");const Ne=100,Ze=200,qe=300;var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const ye={message:"",title:null,options:{level:"info",priority:0}},ve=(0,a.createContext)({currentNotice:ye,setNotice:null,resetNotice:null}),et=({children:t})=>{const[o,i]=useState(ye),l=useCallback(()=>{i(ye)},[]),d=useCallback((u,S)=>{if(!o.message||u.options.priority>o.options.priority){const m={...u.options,onClose:u.options?.onClose||(u.options?.hideCloseButton?void 0:S)};l(),i({...u,options:m})}},[o.message,o.options.priority,l]);return _jsx(ve.Provider,{value:{currentNotice:o,setNotice:d,resetNotice:l},children:t})},tt=null;try{noticeContext.displayName="noticeContext",noticeContext.__docgenInfo={description:"",displayName:"noticeContext",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"]={docgenInfo:noticeContext.__docgenInfo,name:"noticeContext",path:"../../packages/my-jetpack/_inc/context/notices/noticeContext.tsx#noticeContext"})}catch{}const st=E.__,Le=[Ie,ne,R],nt=({infoName:t,isError:o,overrideMessage:i})=>{const{setNotice:l}=(0,a.useContext)(ve),d=i??(0,E.sprintf)(st("There was an error fetching your %s information. Check your site connectivity and try again.","jetpack-my-jetpack"),t);(0,a.useEffect)(()=>{o&&Le.includes(t)&&l({message:d,options:{id:"fetching-error-notice",level:"error",priority:Ne}})},[d,l,o,t])},Me=({name:t,query:o,options:i,errorMessage:l})=>{const d=(0,Pe.I)({queryKey:[t],queryFn:()=>(0,Ue.A)(o),refetchOnWindowFocus:!1,refetchIntervalInBackground:!1,...i}),{error:u,isError:S,isLoading:m}=d;return nt({infoName:t,isError:!m&&S&&u.code!=="not_connected",overrideMessage:l}),d},_e=t=>t?window?.myJetpackInitialState?.[t]??{}:window?.myJetpackInitialState,we=()=>window?.myJetpackRest??{},De=t=>t?window?.JP_CONNECTION_INITIAL_STATE?.[t]??{}:window?.JP_CONNECTION_INITIAL_STATE,J=t=>Array.isArray(t)?t.map(o=>J(o)):typeof t=="object"&&t!==null?Object.fromEntries(Object.entries(t).map(([o,i])=>[o.replace(/([-_][a-z])/gi,l=>l.toUpperCase().replace(/[-_]/g,"")),J(i)])):t,Ve=J,Ce=t=>t.pricingForUi.productTerm==="year"?Math.round(t.pricingForUi.fullPrice/12*100)/100:t.pricingForUi.fullPrice,n=t=>t.pricingForUi.productTerm==="year"?Math.round(t.pricingForUi.discountPrice/12*100)/100:t.pricingForUi.discountPrice,r=t=>{const o=Ve(t);return o.features=o.features||[],o.supportedProducts=o.supportedProducts||[],o.pricingForUi&&(o.pricingForUi.fullPricePerMonth=Ce(o),o.pricingForUi.discountPricePerMonth=n(o)),o},I=()=>{const{items:t}=_e("products"),{data:o,isLoading:i,isError:l}=Me({name:`${Z}`,query:{path:`${G}`},options:{enabled:!0}});if(!i&&!l)for(const[d,u]of Object.entries(t))o&&o[d]&&(t[d]={...u,...o[d]});return t?{data:Object.entries(t).reduce((d,[u,S])=>({...d,[u]:r(S)}),{}),isLoading:i,isError:l}:{data:{},isLoading:!1,isError:!1}},P=t=>{const o=t&&t?.length?`?products=${t?.join(",")}`:"";return Me({name:`${Z}`,query:{path:`${G}${o}`},options:{enabled:!1}})},Fe=async t=>{const{data:o,isError:i,isLoading:l}=await t(),d=window.myJetpackInitialState.products.items;i||l||Object.keys(o).forEach(u=>{window.myJetpackInitialState.products.items[u]={...d[u],...o[u]}})},ze=t=>{const o=Array.isArray(t)?t:[t],{data:i,isLoading:l}=I(),d=o?.map(m=>i?.[m]),{refetch:u,isLoading:S}=P(o);return{products:d,refetch:(0,a.useCallback)(()=>Fe(u),[u]),isLoading:S||l}},Ae=t=>{const{products:o,refetch:i,isLoading:l}=ze([t]);return{detail:o[0],refetch:i,isLoading:l}};var re=e("../analytics/index.jsx"),ue=e("../connection/components/use-connection/index.jsx");const jt=({skipUserConnection:t=!1,redirectUri:o=""}={})=>{const{apiRoot:i,apiNonce:l}=we(),{topJetpackMenuItemUrl:d,blogID:u}=_e(),{registrationNonce:S}=De(),m=(0,ue.A)({apiRoot:i,apiNonce:l,registrationNonce:S,skipUserConnection:t,from:"my-jetpack",redirectUri:o,autoTrigger:!1}),x=m.isRegistered,N=m.isRegistered,z=m.hasConnectedOwner;return{apiNonce:l,apiRoot:i,blogID:u,registrationNonce:S,...m,isSiteConnected:x,siteIsRegistered:N,topJetpackMenuItemUrl:d,hasConnectedOwner:z}},bt=()=>{const{isUserConnected:t,isSiteConnected:o,connectedPlugins:i,userConnectionData:l={}}=jt(),{login:d,ID:u}=l.currentUser?.wpcomUser||{},{myJetpackVersion:S=""}=_e();(0,a.useEffect)(()=>{t&&u&&d&&re.A.initialize(u,d)},[u,t,d]);const m=Object.keys(i||{}).sort().join(",").replaceAll("jetpack-","");return{recordEvent:(0,a.useCallback)((N,z)=>{re.A.tracks.recordEvent(N,{...z,version:S,is_site_connected:o,is_user_connected:t,referring_plugins:m})},[])}};var yt=e("../../packages/my-jetpack/_inc/components/loading-block/index.tsx"),vt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal.tsx"),at=e("../api/index.jsx"),ct=e("../script-data/src/utils.ts"),Ct=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),Tt=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),At=e("../../../node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js"),kt=e.n(At);function Rt(){switch((typeof window<"u"&&window?.JP_CONNECTION_INITIAL_STATE||(0,ct.au)()?.connection)?.calypsoEnv){case"development":return"http://calypso.localhost:3000/";case"wpcalypso":return"https://wpcalypso.wordpress.com/";case"horizon":return"https://horizon.wordpress.com/";default:return"https://wordpress.com/"}}var it=e("../connection/state/store.jsx");const U=kt()("jetpack:connection:useProductCheckoutWorkflow"),{registrationNonce:xt,apiRoot:It,apiNonce:Ot,siteSuffix:Pt}=window?.JP_CONNECTION_INITIAL_STATE||(0,ct.au)()?.connection||{},Ut=()=>typeof window<"u"?window?.myJetpackInitialState?.adminUrl:null;function Nt({productSlug:t,redirectUrl:o,siteSuffix:i=Pt,adminUrl:l=Ut(),connectAfterCheckout:d=!1,siteProductAvailabilityHandler:u=null,quantity:S=null,from:m,useBlogIdSuffix:x=!1}={}){U("productSlug is %s",t),U("redirectUrl is %s",o),U("siteSuffix is %s",i),U("from is %s",m);const[N,z]=(0,a.useState)(!1),{registerSite:he}=(0,Ct.A)(it.a),H=(0,Tt.A)(T=>T(it.a).getBlogId(),[]);U("blogID is %s",H??"undefined"),x=x&&!!H;const{isUserConnected:Q,isRegistered:$,handleConnectUser:ce}=(0,ue.A)({redirectUri:o,from:m}),A=(0,a.useMemo)(()=>{const T=Rt(),B=(!$||!Q)&&d,ie=B?"checkout/jetpack/":`checkout/${x?H.toString():i}/`,Ee=S!=null?`:-q-${S}`:"",K=new URL(`${T}${ie}${t}${Ee}`);return B?(K.searchParams.set("connect_after_checkout",!0),K.searchParams.set("admin_url",l),K.searchParams.set("from_site_slug",i)):K.searchParams.set("site",i),K.searchParams.set("source",m),K.searchParams.set("redirect_to",o),Q||K.searchParams.set("unlinked","1"),K},[$,Q,d,i,S,t,m,o,l,x,H]);U("isRegistered is %s",$),U("isUserConnected is %s",Q),U("connectAfterCheckout is %s",d),U("checkoutUrl is %s",A);const V=(T=null)=>Promise.resolve(u&&u()).then(B=>{if(T&&A.searchParams.set("redirect_to",T),B)return U("handleAfterRegistration: Site has a product associated"),ce();U("handleAfterRegistration: Site does not have a product associated. Redirecting to checkout %s",A),window.location.href=A}),ee=(T=null)=>{T&&A.searchParams.set("redirect_to",T),U("Redirecting to connectAfterCheckout flow: %s",A),window.location.href=A},fe=(T,B=null)=>{if(T&&T.preventDefault(),z(!0),d)return ee(B);if($)return V(B);he({registrationNonce:xt,redirectUri:o}).then(()=>V(B))};return(0,a.useEffect)(()=>{at.Ay.setApiRoot(It),at.Ay.setApiNonce(Ot)},[]),{run:fe,isRegistered:$,hasCheckoutStarted:N}}function Lt(){const t=window.location.search;return new URLSearchParams(t).has("redirect_to_referrer","1")&&document.referrer!==""?document.referrer:null}var Mt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/style.module.scss");const wt=E.__,Dt=({slug:t,buttonLabel:o,disabled:i,isExternalLink:l,href:d})=>{const{siteSuffix:S="",adminUrl:m="",myJetpackCheckoutUri:x=""}=_e(),{detail:N,isLoading:z}=Ae(t),{pricingForUi:he,postCheckoutUrl:H}=N,{wpcomProductSlug:Q,tiers:$}=he||{},ce=t!=="boost"?Q:$?.upgraded?.wpcomProductSlug,A=Lt(),ee=(0,a.useCallback)(()=>H||A||x,[H,A,x])(),{run:fe,hasCheckoutStarted:T}=Nt({productSlug:ce,redirectUrl:ee,siteSuffix:S,adminUrl:m,connectAfterCheckout:!0,from:"my-jetpack",quantity:null,useBlogIdSuffix:!0});return(0,c.jsx)(p.A,{variant:"primary",className:Mt.A["action-button"],isLoading:z||T,onClick:fe,isExternalLink:l,href:d,disabled:i||z,children:o||wt("Upgrade","jetpack-my-jetpack")})};try{productinterstitialmodalcta.displayName="productinterstitialmodalcta",productinterstitialmodalcta.__docgenInfo={description:"",displayName:"productinterstitialmodalcta",props:{slug:{defaultValue:null,description:"",name:"slug",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isExternalLink:{defaultValue:null,description:"",name:"isExternalLink",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal-cta.tsx#productinterstitialmodalcta"]={docgenInfo:productinterstitialmodalcta.__docgenInfo,name:"productinterstitialmodalcta",path:"../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-modal-cta.tsx#productinterstitialmodalcta"})}catch{}var Vt=e("../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstifial-feature-list.tsx");const ke=E.__,Ft=({slug:t,children:o,onOpen:i,onClose:l,description:d,features:u,...S})=>{const{recordEvent:m}=bt(),{detail:x,isLoading:N}=Ae(t),{title:z,longDescription:he,features:H,pricingForUi:Q}=x,$=d||he,ce=u||H,A=t==="boost"?Q?.tiers?.upgraded:Q;let V,ee;t==="boost"?(V=A?.fullPrice/12,ee=A?.discountPrice/12):(V=A?.fullPricePerMonth,ee=A?.discountPricePerMonth);const{currencyCode:fe,introductoryOffer:T,productTerm:B}=A||{};let ie;T?.intervalUnit==="month"&&T?.intervalCount===1?ie=(0,E.sprintf)(ke("trial for the first month, then $%s /month, billed yearly","jetpack-my-jetpack"),V):B==="year"?ie=ke("/month, paid yearly","jetpack-my-jetpack"):ie=ke("/month","jetpack-my-jetpack",0);const Ee=T?.reason?V:ee,K=N?(0,c.jsx)(yt.A,{width:"100%",height:"100px"}):(0,c.jsx)(y.A,{currency:fe,price:V,offPrice:Ee,showNotOffPrice:V>Ee,isNotConvenientPrice:!1,hidePriceFraction:!1,hideDiscountLabel:Ee>=V,legend:ie}),os=(0,a.useCallback)(()=>{m("jetpack_modal_interstitial_open",{placement:"product-page",context:"my-jetpack",product_slug:t}),i?.()},[m,t,i]),rs=(0,a.useCallback)(()=>{m("jetpack_modal_interstitial_close",{placement:"product-page",context:"my-jetpack",product_slug:t}),l?.()},[m,t,l]);let gt=null;return t==="jetpack-ai"&&(gt=(0,c.jsx)("p",{children:(0,_.A)(ke("* Limits apply for high request capacity. <link>Learn more about it here</link>.","jetpack-my-jetpack"),{link:(0,c.jsx)(p.A,{href:(0,L.A)("ai-assistant-fair-usage-policy"),variant:"link",weight:"regular",size:"small",target:"_blank"})})})),(0,c.jsx)(vt.A,{title:z,description:$,priceComponent:K,modalMainButton:(0,c.jsx)(Dt,{slug:t}),onOpen:os,onClose:rs,isLoading:N,...S,children:(0,c.jsxs)(c.Fragment,{children:[(N||ce)&&(0,c.jsx)(Vt.A,{isLoading:N,features:ce}),gt,o]})})},zt=t=>{const o=new M.E;return(0,c.jsx)(s.Ht,{client:o,children:(0,c.jsx)(Ft,{...t})})};try{productinterstitialmyjetpack.displayName="productinterstitialmyjetpack",productinterstitialmyjetpack.__docgenInfo={description:"",displayName:"productinterstitialmyjetpack",props:{children:{defaultValue:null,description:"Child elements to be rendered within the placement",name:"children",required:!1,type:{name:"ReactNode"}},slug:{defaultValue:null,description:"Product slug",name:"slug",required:!0,type:{name:"string"}},onOpen:{defaultValue:null,description:"Callback function to be called when the modal is opened",name:"onOpen",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"Callback function to be called when the modal is closed",name:"onClose",required:!1,type:{name:"() => void"}},description:{defaultValue:null,description:"Optional description for the product that overwrites the description from the product details",name:"description",required:!1,type:{name:"string"}},features:{defaultValue:null,description:"Optional features for the product that overwrites the features from the product details",name:"features",required:!1,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-my-jetpack.tsx#productinterstitialmyjetpack"]={docgenInfo:productinterstitialmyjetpack.__docgenInfo,name:"productinterstitialmyjetpack",path:"../../packages/my-jetpack/_inc/components/product-interstitial-modal/product-interstitial-my-jetpack.tsx#productinterstitialmyjetpack"})}catch{}const Ht=e.p+"static/media/boost.9e9a227e.png";var Bt=e("../../../node_modules/.pnpm/@automattic+format-currency@1.0.1/node_modules/@automattic/format-currency/dist/esm/index.js");const Kt=()=>(0,c.jsx)("svg",{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M10.6953 16.3906L18.4062 8.60938L10.6953 0.828125L8.63281 2.98438L12.8516 7.10938H0.699219V10.1094H12.8516L8.63281 14.2344L10.6953 16.3906Z"})});var Yt=e("../../plugins/boost/app/assets/src/js/lib/utils/analytics.ts"),Gt=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),dt=e.n(Gt),lt=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.module.scss"),He={};He.insert="head",He.singleton=!1;var ls=dt()(lt.A,He);const Re=lt.A.locals||{};var Wt=e("../react-data-sync-client/src/index.ts"),me=e("../../../node_modules/.pnpm/zod@3.22.3/node_modules/zod/lib/index.mjs");const Jt=me.z.object({priceBefore:me.z.number(),priceAfter:me.z.number(),currencyCode:me.z.string(),isIntroductoryOffer:me.z.boolean()}).nullable(),Qt=()=>{const[{data:t}]=(0,Wt.Bt)("jetpack_boost_ds","pricing",Jt);return t};var $t=e("../../../node_modules/.pnpm/react-router@6.28.1_react@18.3.1/node_modules/react-router/dist/index.js");const Xt=E.__,Zt=({description:t,identifier:o,onClick:i,eventName:l="upsell_cta_from_settings_page_in_plugin"})=>{if(!Jetpack_Boost.site.online)return null;const d=(0,$t.Zp)(),u=()=>{if((0,Yt.n7)(l,{identifier:o}),i){i();return}d("/upgrade")},S=Qt(),m=S?(0,Bt.vA)(S.priceAfter/12,S.currencyCode):null,x=m?m.symbol+m.integer+m.fraction:"_";return(0,c.jsxs)("button",{className:Re["upgrade-cta"],onClick:u,children:[(0,c.jsxs)("div",{className:Re.body,children:[(0,c.jsx)("p",{children:t}),(0,c.jsx)("p",{className:Re["action-line"],children:(0,E.sprintf)(Xt("Upgrade now only %s per month","jetpack-boost"),x)})]}),(0,c.jsx)("div",{className:Re.icon,children:(0,c.jsx)(Kt,{})})]})};try{upgradecta.displayName="upgradecta",upgradecta.__docgenInfo={description:"",displayName:"upgradecta",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},eventName:{defaultValue:{value:"upsell_cta_from_settings_page_in_plugin"},description:"",name:"eventName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.tsx#upgradecta"]={docgenInfo:upgradecta.__docgenInfo,name:"upgradecta",path:"../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.tsx#upgradecta"})}catch{}const q=E.__,qt=({description:t="",identifier:o,customModalTrigger:i})=>(0,c.jsx)(zt,{slug:"boost",customModalTrigger:i??(0,c.jsx)(Zt,{identifier:o,description:t}),buttonLabel:q("Upgrade now","jetpack-boost"),isWithVideo:!1,secondaryColumn:(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:Ht,alt:"Boost"})}),secondaryButtonHref:"https://jetpack.com/boost/",description:q("Unlock the full potential of Jetpack Boost with automated performance optimization tools and more.","jetpack-boost"),features:[q("Automated Critical CSS Generation","jetpack-boost"),q("Automated Image Scanning","jetpack-boost"),q("In-depth Performance Insights","jetpack-boost"),q("Customizable Image Optimization","jetpack-boost"),q("Expert Support With Personal Assistance Available","jetpack-boost")]});try{interstitialmodalcta.displayName="interstitialmodalcta",interstitialmodalcta.__docgenInfo={description:"",displayName:"interstitialmodalcta",props:{description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},customModalTrigger:{defaultValue:null,description:"",name:"customModalTrigger",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/upgrade-cta/interstitial-modal-cta.tsx#interstitialmodalcta"]={docgenInfo:interstitialmodalcta.__docgenInfo,name:"interstitialmodalcta",path:"../../plugins/boost/app/assets/src/js/features/upgrade-cta/interstitial-modal-cta.tsx#interstitialmodalcta"})}catch{}var pt=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss"),Be={};Be.insert="head",Be.singleton=!1;var us=dt()(pt.A,Be);const _t=pt.A.locals||{},ge=E.__,ut=({children:t})=>(0,c.jsxs)("div",{className:_t.dummy,children:[t,(0,c.jsx)(h.A,{isPlaceholder:!0})]}),mt=({periods:t=[],annotations:o=[],startDate:i=0,endDate:l=0,needsUpgrade:d,handleUpgrade:u,isFreshStart:S,handleDismissFreshStart:m,isLoading:x})=>x?(0,c.jsx)("div",{className:_t.dummy,children:(0,c.jsx)(j.A,{color:"#000000"})}):d?(0,c.jsx)(ut,{children:(0,c.jsx)(f.A,{icon:(0,c.jsx)(g.A,{icon:"lock"}),action:(0,c.jsx)(qt,{identifier:"historical-performance",customModalTrigger:(0,c.jsx)(p.A,{onClick:u,children:ge("Upgrade now!","jetpack-boost")})}),children:(0,c.jsx)("p",{children:ge("Upgrade and learn more about your site performance over time.","jetpack-boost")})})}):S?(0,c.jsx)(ut,{children:(0,c.jsx)(f.A,{icon:(0,c.jsx)(g.A,{icon:"checkmark"}),action:(0,c.jsx)(p.A,{onClick:m,children:ge("Okay, got it!","jetpack-boost")}),children:(0,c.jsxs)("p",{children:[ge("Hello there! Jetpack Boost premium has been activated.","jetpack-boost"),(0,c.jsx)("br",{}),ge("Your scores will be recorded from now on.","jetpack-boost")]})})}):(0,c.jsx)(h.A,{periods:t,annotations:o,startDate:i,endDate:l});try{graphcomponent.displayName="graphcomponent",graphcomponent.__docgenInfo={description:"",displayName:"graphcomponent",props:{periods:{defaultValue:{value:"[]"},description:"",name:"periods",required:!1,type:{name:"Period[]"}},annotations:{defaultValue:{value:"[]"},description:"",name:"annotations",required:!1,type:{name:"Annotation[]"}},startDate:{defaultValue:{value:"0"},description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:{value:"0"},description:"",name:"endDate",required:!1,type:{name:"number"}},needsUpgrade:{defaultValue:null,description:"",name:"needsUpgrade",required:!0,type:{name:"boolean"}},handleUpgrade:{defaultValue:null,description:"",name:"handleUpgrade",required:!0,type:{name:"() => void"}},isFreshStart:{defaultValue:null,description:"",name:"isFreshStart",required:!0,type:{name:"boolean"}},handleDismissFreshStart:{defaultValue:null,description:"",name:"handleDismissFreshStart",required:!0,type:{name:"() => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"]={docgenInfo:graphcomponent.__docgenInfo,name:"graphcomponent",path:"../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.tsx#graphcomponent"})}catch{}var gs=`import React, { useEffect } from 'react';
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
`,hs={_default:{startLoc:{col:17,line:197},endLoc:{col:1,line:217},startBody:{col:17,line:197},endBody:{col:1,line:217}}};const xe={data:{_meta:{start:1689772803e3,end:1690647e6},periods:[{timestamp:1690636803e3,dimensions:{desktop_overall_score:86,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689772803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689859203e3,dimensions:{desktop_overall_score:72,mobile_overall_score:49,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1689945603e3,dimensions:{desktop_overall_score:20,mobile_overall_score:30,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690032003e3,dimensions:{desktop_overall_score:72,mobile_overall_score:40,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690118403e3,dimensions:{desktop_overall_score:55,mobile_overall_score:45,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690204803e3,dimensions:{desktop_overall_score:75,mobile_overall_score:52,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690291203e3,dimensions:{desktop_overall_score:70,mobile_overall_score:50,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690377603e3,dimensions:{desktop_overall_score:75,mobile_overall_score:90,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690464003e3,dimensions:{desktop_overall_score:80,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}},{timestamp:1690550403e3,dimensions:{desktop_overall_score:85,mobile_overall_score:60,desktop_cls:.088,desktop_lcp:3.2,desktop_tbt:0,mobile_cls:.088,mobile_lcp:3.2,mobile_tbt:0}}],annotations:[{timestamp:1690291223e3,text:"Annotation text"},{timestamp:1689984e6,text:"Another Annotation text"}]}},es={parameters:{storySource:{source:`import React, { useEffect } from 'react';
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
_default.args = defaultValues;`,locationsMap:{default:{startLoc:{col:17,line:197},endLoc:{col:1,line:217},startBody:{col:17,line:197},endBody:{col:1,line:217}}}}},title:"Plugins/Boost/Performance History Graph",component:mt,argTypes:{startDate:{control:"date"},endDate:{control:"date"},periods:{control:"object"},annotations:{control:"object"},isLoading:{control:"boolean"},needsUpgrade:{control:"boolean"},isFreshStart:{control:"boolean"}},decorators:[t=>(0,c.jsx)("div",{style:{maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,c.jsx)(t,{})})]},ts={startDate:xe.data._meta.start,endDate:xe.data._meta.end,periods:xe.data.periods,annotations:xe.data.annotations,isLoading:!1,needsUpgrade:!1,isFreshStart:!1},ss=es,ae=(t=>{const[o,i]=a.useState(t.isFreshStart),[l,d]=a.useState(t.needsUpgrade);return(0,a.useEffect)(()=>{i(t.isFreshStart),d(t.needsUpgrade)},[t.isFreshStart,t.needsUpgrade]),t.handleUpgrade=()=>{d(!1)},t.handleDismissFreshStart=()=>{i(!1)},(0,c.jsx)(mt,{...t,isFreshStart:o,needsUpgrade:l})}).bind({});ae.args=ts;const ns=["_default"];ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`args => {
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
}`,...ae.parameters?.docs?.source}}}},"../components/components/spinner/index.jsx":(k,b,e)=>{e.d(b,{A:()=>E});var a=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),h=e.n(a),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(f),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),y={};y.insert="head",y.singleton=!1;var L=g()(p.A,y);const M=p.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=({color:O="#FFFFFF",className:v="",size:C=20})=>{const Y=v+" jp-components-spinner",w={width:C,height:C,fontSize:C,borderTopColor:O},F={borderTopColor:O,borderRightColor:O};return(0,s.jsx)("div",{className:Y,children:(0,s.jsx)("div",{className:"jp-components-spinner__outer",style:w,children:(0,s.jsx)("div",{className:"jp-components-spinner__inner",style:F})})})};_.propTypes={color:h().string,className:h().string,size:h().number};const E=_;_.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}}},"../connection/components/use-connection/index.jsx":(k,b,e)=>{e.d(b,{A:()=>L});var a=e("../api/index.jsx"),h=e("../script-data/src/utils.ts"),j=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),f=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../connection/state/store.jsx");const y=window?.JP_CONNECTION_INITIAL_STATE||(0,h.au)()?.connection||{},L=({registrationNonce:M=y.registrationNonce,apiRoot:s=y.apiRoot,apiNonce:_=y.apiNonce,redirectUri:E,autoTrigger:O,from:v,skipUserConnection:C,skipPricingPage:Y}={})=>{const{registerSite:w,connectUser:F,refreshConnectedPlugins:G}=(0,j.A)(p.a),W=(0,f.A)(R=>R(p.a).getRegistrationError()),{siteIsRegistering:X,userIsConnecting:D,userConnectionData:de,connectedPlugins:Se,connectionErrors:le,isRegistered:te,isUserConnected:pe,hasConnectedOwner:je,isOfflineMode:Z}=(0,f.A)(R=>({siteIsRegistering:R(p.a).getSiteIsRegistering(),userIsConnecting:R(p.a).getUserIsConnecting(),userConnectionData:R(p.a).getUserConnectionData(),connectedPlugins:R(p.a).getConnectedPlugins(),connectionErrors:R(p.a).getConnectionErrors(),isOfflineMode:R(p.a).getIsOfflineMode(),...R(p.a).getConnectionStatus()})),se=()=>{if(C){if(E)return window.location=E,Promise.resolve(E)}else return F({from:v,redirectUri:E,skipPricingPage:Y});return Promise.resolve()},ne=R=>(R&&R.preventDefault(),te?se():w({registrationNonce:M,redirectUri:E,from:v}).then(()=>se()));return(0,g.useEffect)(()=>{a.Ay.setApiRoot(s),a.Ay.setApiNonce(_)},[s,_]),(0,g.useEffect)(()=>{O&&!X&&!D&&ne()},[]),{handleRegisterSite:ne,handleConnectUser:se,refreshConnectedPlugins:G,isRegistered:te,isUserConnected:pe,siteIsRegistering:X,userIsConnecting:D,registrationError:W,userConnectionData:de,hasConnectedOwner:je,connectedPlugins:Se,connectionErrors:le,isOfflineMode:Z}}},"../connection/state/store.jsx":(k,b,e)=>{e.d(b,{a:()=>oe});var a=e("../script-data/src/utils.ts"),h=e("../api/index.jsx");const j="SET_CONNECTION_STATUS",f="SET_CONNECTION_STATUS_IS_FETCHING",g="FETCH_CONNECTION_STATUS",p="SET_SITE_IS_REGISTERING",y="SET_USER_IS_CONNECTING",L="SET_REGISTRATION_ERROR",M="CLEAR_REGISTRATION_ERROR",s="REGISTER_SITE",_="SET_AUTHORIZATION_URL",E="CONNECT_USER",O="DISCONNECT_USER_SUCCESS",v="FETCH_AUTHORIZATION_URL",C="SET_CONNECTED_PLUGINS",Y="REFRESH_CONNECTED_PLUGINS",w="SET_CONNECTION_ERRORS",F="SET_IS_OFFLINE_MODE",G=n=>({type:j,connectionStatus:n}),W=n=>({type:f,isFetching:n}),X=()=>({type:g}),D=n=>({type:p,isRegistering:n}),de=n=>({type:y,isConnecting:n}),Se=()=>({type:O}),le=n=>({type:L,registrationError:n}),te=()=>({type:M}),pe=n=>({type:_,authorizationUrl:n}),je=n=>({type:v,redirectUri:n}),Z=n=>({type:C,connectedPlugins:n}),se=n=>({type:w,connectionErrors:n}),ne=n=>({type:F,isOfflineMode:n});function*R({from:n,redirectFunc:r,redirectUri:I,skipPricingPage:P}={}){yield de(!0),yield{type:E,from:n,redirectFunc:r,redirectUri:I,skipPricingPage:P}}function*Ke({registrationNonce:n,redirectUri:r,from:I=""}){yield te(),yield D(!0);try{const P=yield{type:s,registrationNonce:n,redirectUri:r,from:I};return yield G({isRegistered:!0}),yield pe(P.authorizeUrl),yield D(!1),Promise.resolve(P)}catch(P){return yield le(P),yield D(!1),Promise.reject(P)}}const be={setConnectionStatus:G,setConnectionStatusIsFetching:W,fetchConnectionStatus:X,fetchAuthorizationUrl:je,setSiteIsRegistering:D,setUserIsConnecting:de,setRegistrationError:le,clearRegistrationError:te,setAuthorizationUrl:pe,registerSite:Ke,connectUser:R,disconnectUserSuccess:Se,setConnectedPlugins:Z,refreshConnectedPlugins:()=>async({dispatch:n})=>await new Promise(r=>h.Ay.fetchConnectedPlugins().then(I=>{n(Z(I)),r(I)})),setConnectionErrors:se,setIsOfflineMode:ne};var Ye=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");const oe="jetpack-connection",Ge=({redirectUri:n,from:r})=>h.Ay.registerSite(null,n,r),Ie=(0,Ye.b)(({resolveSelect:n})=>({from:r,redirectFunc:I,redirectUri:P,skipPricingPage:Fe}={})=>new Promise((ot,ze)=>{n(oe).getAuthorizationUrl(P).then(Te=>{const Ae=I||(rt=>window.location.assign(rt)),re=new URL(Te);Fe&&re.searchParams.set("skip_pricing","true"),r&&re.searchParams.set("from",encodeURIComponent(r));const ue=re.toString();Ae(ue),ot(ue)}).catch(Te=>{ze(Te)})})),We={FETCH_AUTHORIZATION_URL:({redirectUri:n})=>h.Ay.fetchAuthorizationUrl(n),REGISTER_SITE:Ge,CONNECT_USER:Ie};var Oe=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const Je=(n={},r)=>{switch(r.type){case j:return{...n,...r.connectionStatus};case O:return{...n,isUserConnected:!1}}return n},Qe=(n={},r)=>{switch(r.type){case C:return r.connectedPlugins}return n},$e=(n=!1,r)=>{switch(r.type){case f:return r.isFetching}return n},Xe=(n=!1,r)=>{switch(r.type){case p:return r.isRegistering}return n},Pe=(n=!1,r)=>{switch(r.type){case y:return r.isConnecting}return n},Ue=(n,r)=>{switch(r.type){case M:return!1;case L:return r.registrationError;default:return n}},Ne=(n,r)=>{switch(r.type){case _:return r.authorizationUrl;default:return n}},Ze=(n,r)=>{switch(r.type){default:return n}},qe=(n={},r)=>{switch(r.type){case w:return r.connectionErrors}return n},c=(n=!1,r)=>{switch(r.type){case F:return r.isConnecting}return n},ve=(0,Oe.combineReducers)({connectionStatus:Je,connectionStatusIsFetching:$e,siteIsRegistering:Xe,userIsConnecting:Pe,registrationError:Ue,authorizationUrl:Ne,userConnectionData:Ze,connectedPlugins:Qe,connectionErrors:qe,isOfflineMode:c});var et=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),tt=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const Le={...{getAuthorizationUrl:{isFulfilled:(n,...r)=>{const I=!!n.authorizationUrl,P=(0,et.L)(oe).hasFinishedResolution("getAuthorizationUrl",r);return I&&!P&&(0,tt.J)(oe).finishResolution("getAuthorizationUrl",r),I},*fulfill(n){const r=yield be.fetchAuthorizationUrl(n);yield be.setAuthorizationUrl(r.authorizeUrl)}}}},we={...{getConnectionStatus:n=>n.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:n=>n.siteIsRegistering||!1,getUserIsConnecting:n=>n.userIsConnecting||!1,getRegistrationError:n=>n.registrationError||!1,getAuthorizationUrl:n=>n.authorizationUrl||!1,getUserConnectionData:n=>n.userConnectionData||!1,getConnectedPlugins:n=>n.connectedPlugins||[],getConnectionErrors:n=>n.connectionErrors||[],getIsOfflineMode:n=>n.isOfflineMode||!1,getWpcomUser:n=>n?.userConnectionData?.currentUser?.wpcomUser,getBlogId:n=>n?.userConnectionData?.currentUser?.blogId}};var De=e("../../../node_modules/.pnpm/@wordpress+data@10.19.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");class J{static store=null;static mayBeInit(r,I){J.store===null&&(J.store=(0,De.A)(r,I),(0,Oe.register)(J.store))}}const Ve=J,Ce=window.JP_CONNECTION_INITIAL_STATE||(0,a.au)()?.connection;Ce||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ve.mayBeInit(oe,{__experimentalUseThunks:!0,reducer:ve,actions:be,selectors:we,resolvers:Le,controls:We,initialState:Ce||{}})},"../components/components/gridicon/index.tsx":(k,b,e)=>{e.d(b,{A:()=>O});var a=e("../../../node_modules/.pnpm/@wordpress+i18n@5.19.0/node_modules/@wordpress/i18n/build-module/index.js"),h=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),j=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(f),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/gridicon/style.scss"),y={};y.insert="head",y.singleton=!1;var L=g()(p.A,y);const M=p.A.locals||{};var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=a.__;class E extends j.Component{static defaultProps={"aria-hidden":"false",focusable:"true"};needsOffset(C,Y){return["gridicons-arrow-left","gridicons-arrow-right","gridicons-calendar","gridicons-cart","gridicons-folder","gridicons-help-outline","gridicons-info","gridicons-info-outline","gridicons-posts","gridicons-star-outline","gridicons-star"].indexOf(C)>=0?Y%18===0:!1}getSVGDescription(C){if("description"in this.props)return this.props.description;switch(C){default:return"";case"gridicons-audio":return _("Has audio.","jetpack-components");case"gridicons-arrow-left":return _("Arrow left","jetpack-components");case"gridicons-arrow-right":return _("Arrow right","jetpack-components");case"gridicons-calendar":return _("Is an event.","jetpack-components");case"gridicons-cart":return _("Is a product.","jetpack-components");case"chevron-down":return _("Show filters","jetpack-components");case"gridicons-comment":return _("Matching comment.","jetpack-components");case"gridicons-cross":return _("Close.","jetpack-components");case"gridicons-filter":return _("Toggle search filters.","jetpack-components");case"gridicons-folder":return _("Category","jetpack-components");case"gridicons-help-outline":return _("Help","jetpack-components");case"gridicons-info":case"gridicons-info-outline":return _("Information.","jetpack-components");case"gridicons-image-multiple":return _("Has multiple images.","jetpack-components");case"gridicons-image":return _("Has an image.","jetpack-components");case"gridicons-page":return _("Page","jetpack-components");case"gridicons-post":return _("Post","jetpack-components");case"gridicons-jetpack-search":case"gridicons-search":return _("Magnifying Glass","jetpack-components");case"gridicons-tag":return _("Tag","jetpack-components");case"gridicons-video":return _("Has a video.","jetpack-components")}}renderIcon(C){switch(C){default:return null;case"gridicons-audio":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M8 4v10.184C7.686 14.072 7.353 14 7 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7h7v4.184c-.314-.112-.647-.184-1-.184-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4H8z"})});case"gridicons-arrow-left":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})});case"gridicons-arrow-right":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})});case"gridicons-block":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z"})});case"gridicons-calendar":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z"})});case"gridicons-cart":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5c.937 0 1.75-.65 1.952-1.566L21 5H7V4c0-1.105-.895-2-2-2H3v2h2v11c0 1.105.895 2 2 2h12c0-1.105-.895-2-2-2H7v-2h10.396z"})});case"gridicons-checkmark":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"})});case"gridicons-chevron-left":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16.443 7.41L15.0399 6L9.06934 12L15.0399 18L16.443 16.59L11.8855 12L16.443 7.41Z"})});case"gridicons-chevron-right":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M10.2366 6L8.8335 7.41L13.391 12L8.8335 16.59L10.2366 18L16.2072 12L10.2366 6Z"})});case"gridicons-chevron-down":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"})});case"gridicons-comment":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M3 6v9c0 1.105.895 2 2 2h9v5l5.325-3.804c1.05-.75 1.675-1.963 1.675-3.254V6c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2z"})});case"gridicons-computer":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 2H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm0 14H4V4h16v12z"})});case"gridicons-cross":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"})});case"gridicons-filter":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z"})});case"gridicons-folder":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"})});case"gridicons-help-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-1.962-2v-.528c0-.4.082-.74.246-1.017.163-.276.454-.546.87-.808.333-.21.572-.397.717-.565.146-.168.22-.36.22-.577 0-.172-.078-.308-.234-.41-.156-.1-.358-.15-.608-.15-.62 0-1.34.22-2.168.658l-.854-1.67c1.02-.58 2.084-.872 3.194-.872.913 0 1.63.202 2.15.603.52.4.78.948.78 1.64 0 .495-.116.924-.347 1.287-.23.362-.6.705-1.11 1.03-.43.278-.7.48-.807.61-.108.13-.163.282-.163.458V13h-1.885z"})});case"gridicons-image":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M13 9.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM22 6v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2zm-2 0H4v7.444L8 9l5.895 6.55 1.587-1.85c.798-.932 2.24-.932 3.037 0L20 15.426V6z"})});case"gridicons-image-multiple":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5zM4 20h14c0 1.105-.895 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.105.895-2 2-2v14zM22 4v12c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zM8 4v6.333L11 7l4.855 5.395.656-.73c.796-.886 2.183-.886 2.977 0l.513.57V4H8z"})});case"gridicons-info":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})});case"gridicons-info-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"})});case"gridicons-jetpack-search":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M0 9.257C0 4.15 4.151 0 9.257 0c5.105 0 9.256 4.151 9.256 9.257a9.218 9.218 0 01-2.251 6.045l.034.033h1.053L24 22.01l-1.986 1.989-6.664-6.662v-1.055l-.033-.033a9.218 9.218 0 01-6.06 2.264C4.15 18.513 0 14.362 0 9.257zm4.169 1.537h4.61V1.82l-4.61 8.973zm5.547-3.092v8.974l4.61-8.974h-4.61z"})});case"gridicons-phone":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 2H8c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z"})});case"gridicons-pages":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z"})});case"gridicons-posts":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"})});case"gridicons-search":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"})});case"gridicons-star-outline":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z"})});case"gridicons-star":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"})});case"gridicons-tag":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"})});case"gridicons-video":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M20 4v2h-2V4H6v2H4V4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2v-2h2v2h12v-2h2v2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM6 16H4v-3h2v3zm0-5H4V8h2v3zm4 4V9l4.5 3-4.5 3zm10 1h-2v-3h2v3zm0-5h-2V8h2v3z"})});case"gridicons-lock":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("g",{id:"lock",children:(0,s.jsx)("path",{d:"M18,8h-1V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H6c-1.105,0-2,0.895-2,2v10c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V10 C20,8.895,19.105,8,18,8z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M13,15.723V18h-2v-2.277c-0.595-0.346-1-0.984-1-1.723 c0-1.105,0.895-2,2-2s2,0.895,2,2C14,14.738,13.595,15.376,13,15.723z"})}),(0,s.jsx)("g",{id:"Layer_1"})]});case"gridicons-external":return(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})})}}render(){const{size:C=24,className:Y=""}=this.props,w=this.props.height||C,F=this.props.width||C,G=this.props.style||{height:w,width:F},W="gridicons-"+this.props.icon,X=(0,h.A)("gridicon",W,Y,{"needs-offset":this.needsOffset(W,C)}),D=this.getSVGDescription(W);return(0,s.jsxs)("svg",{className:X,focusable:this.props.focusable,height:w,onClick:this.props.onClick,style:G,viewBox:"0 0 24 24",width:F,xmlns:"http://www.w3.org/2000/svg","aria-hidden":this.props["aria-hidden"],children:[D?(0,s.jsx)("desc",{children:D}):null,this.renderIcon(W)]})}}const O=E;try{E.displayName="Gridicon",E.__docgenInfo={description:"",displayName:"Gridicon",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"HTML class name",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description for SVG for screen readers",name:"description",required:!1,type:{name:"string"}},focusable:{defaultValue:{value:"true"},description:"Whether SVG is focussable",name:"focusable",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"SVG height",name:"height",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"VoidFunction"}},size:{defaultValue:null,description:"SVG width and height",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"SVG style",name:"style",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:null,description:"SVG width",name:"width",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/gridicon/index.tsx#Gridicon"]={docgenInfo:E.__docgenInfo,name:"Gridicon",path:"../components/components/gridicon/index.tsx#Gridicon"})}catch{}},"../components/components/popover/index.tsx":(k,b,e)=>{e.d(b,{A:()=>M});var a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/popover/style.scss"),f={};f.insert="head",f.singleton=!1;var g=h()(j.A,f);const p=j.A.locals||{};var y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const M=({icon:s,children:_,action:E})=>(0,y.jsxs)("div",{className:"jp-popover",children:[(0,y.jsx)("div",{className:"jp-popover__icon",children:s}),(0,y.jsx)("div",{className:"jp-popover__body",children:_}),(0,y.jsx)("div",{className:"jp-popover__action",children:E})]});try{popover.displayName="popover",popover.__docgenInfo={description:"",displayName:"popover",props:{action:{defaultValue:null,description:"",name:"action",required:!0,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/popover/index.tsx#popover"]={docgenInfo:popover.__docgenInfo,name:"popover",path:"../components/components/popover/index.tsx#popover"})}catch{}},"../script-data/src/utils.ts":(k,b,e)=>{e.d(b,{au:()=>a});function a(){return window.JetpackScriptData}function h(){return a().site}function j(v=""){return`${a().site.admin_url}${v}`}function f(v=""){return j(`admin.php?page=jetpack${v}`)}function g(v=""){return j(`admin.php?page=my-jetpack${v}`)}function p(){return a().site.plan?.features?.active??[]}function y(v){return p().includes(v)}function L(){return a().site?.host==="wpcom"}function M(){return a().site?.host==="atomic"}function s(){return a().site?.host==="woa"}function _(){return L()||s()}function E(){return a()?.site?.host==="unknown"}function O(v){return a().user.current_user.capabilities[v]}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/gridicon/style.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(j),g=f()(h());g.push([k.id,".gridicon{fill:currentColor;display:inline-block}.gridicon.needs-offset g{transform:translate(1px, 1px)}.gridicon.needs-offset-x g{transform:translate(1px, 0)}.gridicon.needs-offset-y g{transform:translate(0, 1px)}",""]);const p=g},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/popover/style.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(j),g=f()(h());g.push([k.id,'.jp-popover{width:600px;max-width:calc(100% - 32px);padding:16px;background-color:#fff;box-shadow:0px 1px 2px 0px rgba(0,0,0,.06),0px 4px 8px 0px rgba(0,0,0,.03);border:1px solid #dcdcde;border-radius:4px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.jp-popover>*{margin:16px;clear:both}.jp-popover__body p{font-weight:400;line-height:1.6em;font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}',""]);const p=g},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(j),g=f()(h());g.push([k.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const p=g},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/performance-history/graph-component/graph-component.module.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(j),g=f()(h());g.push([k.id,".RWH4ytGzomJa_kl2YaAQ{position:relative;min-height:300px}.RWH4ytGzomJa_kl2YaAQ .jp-components-spinner{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",""]),g.locals={dummy:"RWH4ytGzomJa_kl2YaAQ"};const p=g},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/upgrade-cta/upgrade-cta.module.scss":(k,b,e)=>{e.d(b,{A:()=>p});var a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(a),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(j),g=f()(h());g.push([k.id,":root{--light-border: #eeeeee;--jetpack-green: #008710;--primary-black: #23282d;--primary-white: #ffffff;--primary-grey: #444444;--secondary-grey: #888888;--color_warning: #cc1818;--alt-white: #f9f9f6;--gray-0: #f6f7f7;--gray-5: #dcdcde;--gray-10: #c3c4c7;--gray-20: #a7aaad;--gray-30: #8c8f94;--gray-40: #787c82;--gray-50: #646970;--gray-60: #50575e;--gray-70: #3c434a;--gray-80: #2c3338;--gray-90: #1d2327;--gray-100: #101517;--gray: #646970;--blue-50: #2271b1;--blue-60: #135e96;--red-40: #e65054;--jetpack-green-0: #f0f2eb;--jetpack-green-5: #d0e6b8;--jetpack-green-10: #9dd977;--jetpack-green-20: #64ca43;--jetpack-green-30: #2fb41f;--jetpack-green-40: #069e08;--jetpack-green-50: #008710;--jetpack-green-60: #007117;--jetpack-green-70: #005b18;--jetpack-green-80: #004515;--jetpack-green-90: #003010;--jetpack-green-100: #001c09;--jp-yellow-20: #DEB100}.vkCjuesTxRrG7rjYKIHQ{width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 24px;margin:32px 0;border:2px solid #008710;border-radius:4px;background-color:#fff;text-align:left;cursor:pointer}.vkCjuesTxRrG7rjYKIHQ .vxEc8Z4qGda7Itz5UiMm p{margin:0}.vkCjuesTxRrG7rjYKIHQ .wcsiokDgpxboqLmIPdgN{font-weight:bold}.vkCjuesTxRrG7rjYKIHQ .cAP12JGonXqBmbn0cHLx svg{fill:#008710}",""]),g.locals={"upgrade-cta":"vkCjuesTxRrG7rjYKIHQ",body:"vxEc8Z4qGda7Itz5UiMm","action-line":"wcsiokDgpxboqLmIPdgN",icon:"cAP12JGonXqBmbn0cHLx"};const p=g}}]);
