"use strict";(()=>{var ke=Object.defineProperty;var ve=(x,m,e)=>m in x?ke(x,m,{enumerable:!0,configurable:!0,writable:!0,value:e}):x[m]=e;var re=(x,m,e)=>(ve(x,typeof m!="symbol"?m+"":m,e),e);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3556],{"../../packages/videopress/src/client/admin/components/site-settings-section/stories/index.stories.tsx":(x,m,e)=>{var q,$,ee;e.r(m),e.d(m,{__namedExportsOrder:()=>Q,_default:()=>Y,default:()=>te});var g=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.1.6/node_modules/@storybook/addon-actions/dist/index.mjs"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../components/components/layout/container/index.tsx"),i=e("../components/components/layout/col/index.tsx"),t=e("../components/components/text/index.tsx"),c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.2.0/node_modules/@wordpress/i18n/build-module/index.js"),R=e("../../packages/videopress/src/client/admin/hooks/use-permission/index.ts"),_=e("../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts"),T=e("../../../node_modules/.pnpm/@wordpress+components@28.2.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.2.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),C=e("../../../node_modules/.pnpm/@wordpress+icons@10.2.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js"),h=e("../../../node_modules/.pnpm/@wordpress+primitives@4.2.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,a.jsxs)(h.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)(h.UL,{x:"5",y:"7",width:"14",height:"1.5"}),(0,a.jsx)(h.UL,{x:"7",y:"11.25",width:"10",height:"1.5"}),(0,a.jsx)(h.UL,{x:"9",y:"15.5",width:"6",height:"1.5"})]}),U=null;var b=e("../../packages/videopress/src/client/state/constants.js");function w(){const o=useSelect(y=>y(STORE_ID).getUsers()),j=useSelect(y=>y(STORE_ID).getUsersPagination());return{items:o,...j}}var A=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),d=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),N=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(N),V=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss"),L={};L.insert="head",L.singleton=!1;var K=D()(V.Z,L);const O=V.Z.locals||{},k=null,M=o=>{const{isActive:j,...y}=o;return _jsx(Button,{variant:j?"primary":"secondary",className:clsx(styles["filter-button"],{[styles["is-active"]]:j}),icon:filterIcon,weight:"regular",...y,children:k("Filters","jetpack-videopress-pkg")})},J=o=>(0,a.jsx)(T.ZP,{position:"middle center",text:o.message,children:(0,a.jsx)("span",{className:O["title-adornment"],children:(0,a.jsx)(l.Z,{icon:C.Z})})}),f=o=>(0,a.jsxs)("label",{htmlFor:o.for,className:O["checkbox-container"],children:[(0,a.jsx)(d.Z,{id:o.for,className:O.checkbox,onChange:o.onChange,checked:o.checked,disabled:o.disabled}),(0,a.jsx)("span",{className:O["checkbox-checkmark"]}),(0,a.jsx)(t.ZP,{variant:"body-small",children:o.label}),o.disabledReason&&(0,a.jsx)(J,{message:o.disabledReason})]}),B=o=>{const[j]=useBreakpointMatch("sm"),y=(u,p)=>{var P,Z;return((Z=(P=o==null?void 0:o.filter)==null?void 0:P[u])==null?void 0:Z[p])===!0};return _jsx("div",{className:clsx(styles["filters-section"],o.className),children:_jsxs(Container,{horizontalSpacing:j?2:4,horizontalGap:2,children:[_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:k("Uploader","jetpack-videopress-pkg")}),o.uploaders.map(u=>_jsx(f,{label:u.name,for:`uploader-${u.id}`,onChange:p=>{var P;return(P=o.onChange)==null?void 0:P.call(o,VIDEO_FILTER_UPLOADER,u.id,p)},checked:y(VIDEO_FILTER_UPLOADER,u.id)},u.id))]}),_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:k("Privacy","jetpack-videopress-pkg")}),_jsx(f,{for:"filter-public",label:k("Public","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PUBLIC),u)},checked:y(VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PUBLIC))}),_jsx(f,{for:"filter-private",label:k("Private","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PRIVATE),u)},checked:y(VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PRIVATE))})]}),_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:k("Rating","jetpack-videopress-pkg")}),_jsx(f,{for:"filter-g",label:k("G","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_G,u)},checked:y(VIDEO_FILTER_RATING,VIDEO_RATING_G)}),_jsx(f,{for:"filter-pg-13",label:k("PG-13","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_PG_13,u)},checked:y(VIDEO_FILTER_RATING,VIDEO_RATING_PG_13)}),_jsx(f,{for:"filter-r",label:k("R","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_R_17,u)},checked:y(VIDEO_FILTER_RATING,VIDEO_RATING_R_17)})]})]})})},v=o=>{const{setFilter:j,filter:y}=useVideos(),u=useSearchParams(),p=(...Z)=>{u.deleteParam("page"),u.update(),j(...Z)},{items:P}=useUsers();return _jsx(B,{...o,onChange:p,uploaders:P,filter:y})};try{M.displayName="FilterButton",M.__docgenInfo={description:"",displayName:"FilterButton",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"]={docgenInfo:M.__docgenInfo,name:"FilterButton",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"})}catch(o){}try{f.displayName="CheckboxCheckmark",f.__docgenInfo={description:"",displayName:"CheckboxCheckmark",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},for:{defaultValue:null,description:"",name:"for",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},disabledReason:{defaultValue:null,description:"",name:"disabledReason",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"]={docgenInfo:f.__docgenInfo,name:"CheckboxCheckmark",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"})}catch(o){}try{B.displayName="FilterSection",B.__docgenInfo={description:"",displayName:"FilterSection",props:{uploaders:{defaultValue:null,description:"",name:"uploaders",required:!0,type:{name:"{ id: number; name: string; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'(filter: "uploader" | "privacy" | "rating", value: number | "PG-13" | "G" | "R-17", checked: boolean) => void'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"FilterObject"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"]={docgenInfo:B.__docgenInfo,name:"FilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"})}catch(o){}try{v.displayName="ConnectFilterSection",v.__docgenInfo={description:"",displayName:"ConnectFilterSection",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"]={docgenInfo:v.__docgenInfo,name:"ConnectFilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"})}catch(o){}const oe="atomic",_e="simple",H="jetpack",G=c.__,ne=({videoPressVideosPrivateForSite:o,siteIsPrivate:j,siteType:y,onPrivacyChange:u})=>{const{canPerformAction:p}=(0,R.g)(),P=j&&y===oe,Z=!p||P,ce=P?G("You cannot change this setting because your site is private. You can only choose the video privacy default on public sites.","jetpack-videopress-pkg"):null;return(0,a.jsxs)(E.Z,{horizontalSpacing:0,horizontalGap:0,children:[(0,a.jsx)(i.Z,{children:(0,a.jsx)(t.ZP,{variant:"headline-small",mb:1,children:G("Settings","jetpack-videopress-pkg")})}),(0,a.jsx)(i.Z,{sm:12,md:12,lg:12,children:(0,a.jsx)(f,{for:"settings-site-privacy",label:G("Video Privacy: Restrict views to members of this site","jetpack-videopress-pkg"),onChange:u,checked:o,disabled:Z,disabledReason:ce})})]})},W=()=>{const{settings:o,onUpdate:j}=useVideoPressSettings(),{videoPressVideosPrivateForSite:y,siteIsPrivate:u,siteType:p}=o;return _jsx(ne,{videoPressVideosPrivateForSite:y,siteIsPrivate:u,siteType:p,onPrivacyChange:P=>{j({videoPressVideosPrivateForSite:P})}})},X=ne,te={title:"Packages/VideoPress/Site Settings",component:X,argTypes:{}},Y=(o=>(0,a.jsx)(X,{...o})).bind({});Y.args={onPrivacyChange:(0,g.aD)("onPrivacyChange")},Y.parameters={...Y.parameters,docs:{...(q=Y.parameters)==null?void 0:q.docs,source:{originalSource:"args => <SettingsSection {...args} />",...(ee=($=Y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Q=["_default"]},"../connection/state/store.jsx":(x,m,e)=>{e.d(m,{t:()=>W});var g=e("../api/index.jsx");const S="SET_CONNECTION_STATUS",E="SET_CONNECTION_STATUS_IS_FETCHING",i="FETCH_CONNECTION_STATUS",t="SET_SITE_IS_REGISTERING",c="SET_USER_IS_CONNECTING",R="SET_REGISTRATION_ERROR",_="CLEAR_REGISTRATION_ERROR",T="REGISTER_SITE",l="SET_AUTHORIZATION_URL",C="CONNECT_USER",h="DISCONNECT_USER_SUCCESS",a="FETCH_AUTHORIZATION_URL",r="SET_CONNECTED_PLUGINS",U="REFRESH_CONNECTED_PLUGINS",b="SET_CONNECTION_ERRORS",w="SET_IS_OFFLINE_MODE",A=s=>({type:S,connectionStatus:s}),d=s=>({type:E,isFetching:s}),N=()=>({type:i}),D=s=>({type:t,isRegistering:s}),V=s=>({type:c,isConnecting:s}),L=()=>({type:h}),K=s=>({type:R,registrationError:s}),O=()=>({type:_}),k=s=>({type:l,authorizationUrl:s}),M=s=>({type:a,redirectUri:s}),J=s=>({type:r,connectedPlugins:s}),f=s=>({type:b,connectionErrors:s}),B=s=>({type:w,isOfflineMode:s});function*v({from:s,redirectFunc:n,redirectUri:I}={}){yield V(!0),yield{type:C,from:s,redirectFunc:n,redirectUri:I}}function*oe({registrationNonce:s,redirectUri:n,from:I=""}){yield O(),yield D(!0);try{const F=yield{type:T,registrationNonce:s,redirectUri:n,from:I};return yield A({isRegistered:!0}),yield k(F.authorizeUrl),yield D(!1),Promise.resolve(F)}catch(F){return yield K(F),yield D(!1),Promise.reject(F)}}const H={setConnectionStatus:A,setConnectionStatusIsFetching:d,fetchConnectionStatus:N,fetchAuthorizationUrl:M,setSiteIsRegistering:D,setUserIsConnecting:V,setRegistrationError:K,clearRegistrationError:O,setAuthorizationUrl:k,registerSite:oe,connectUser:v,disconnectUserSuccess:L,setConnectedPlugins:J,refreshConnectedPlugins:()=>async({dispatch:s})=>await new Promise(n=>g.ZP.fetchConnectedPlugins().then(I=>{s(J(I)),n(I)})),setConnectionErrors:f,setIsOfflineMode:B};var G=e("../../../node_modules/.pnpm/@wordpress+data@10.2.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");const W="jetpack-connection",X=({registrationNonce:s,redirectUri:n,from:I})=>g.ZP.registerSite(s,n,I),te=(0,G.R)(({resolveSelect:s})=>({from:n,redirectFunc:I,redirectUri:F}={})=>new Promise((Ie,Te)=>{s(W).getAuthorizationUrl(F).then(de=>{const Ce=I||(ye=>window.location.assign(ye)),ie=new URL(de);n&&ie.searchParams.set("from",encodeURIComponent(n));const ae=ie.toString();Ce(ae),Ie(ae)}).catch(de=>{Te(de)})})),Y={FETCH_AUTHORIZATION_URL:({redirectUri:s})=>g.ZP.fetchAuthorizationUrl(s),REGISTER_SITE:X,CONNECT_USER:te};var Q=e("../../../node_modules/.pnpm/@wordpress+data@10.2.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const q=(s={},n)=>{switch(n.type){case S:return{...s,...n.connectionStatus};case h:return{...s,isUserConnected:!1}}return s},$=(s={},n)=>{switch(n.type){case r:return n.connectedPlugins}return s},ee=(s=!1,n)=>{switch(n.type){case E:return n.isFetching}return s},o=(s=!1,n)=>{switch(n.type){case t:return n.isRegistering}return s},j=(s=!1,n)=>{switch(n.type){case c:return n.isConnecting}return s},y=(s,n)=>{switch(n.type){case _:return!1;case R:return n.registrationError;default:return s}},u=(s,n)=>{switch(n.type){case l:return n.authorizationUrl;default:return s}},p=(s,n)=>{switch(n.type){default:return s}},P=(s={},n)=>{switch(n.type){case b:return n.connectionErrors}return s},Z=(s=!1,n)=>{switch(n.type){case w:return n.isConnecting}return s},ue=(0,Q.UY)({connectionStatus:q,connectionStatusIsFetching:ee,siteIsRegistering:o,userIsConnecting:j,registrationError:y,authorizationUrl:u,userConnectionData:p,connectedPlugins:$,connectionErrors:P,isOfflineMode:Z});var pe=e("../../../node_modules/.pnpm/@wordpress+data@10.2.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),ge=e("../../../node_modules/.pnpm/@wordpress+data@10.2.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const Ee={...{getAuthorizationUrl:{isFulfilled:(s,...n)=>{const I=!!s.authorizationUrl,F=(0,pe.Y)(W).hasFinishedResolution("getAuthorizationUrl",n);return I&&!F&&(0,ge.W)(W).finishResolution("getAuthorizationUrl",n),I},*fulfill(s){const n=yield H.fetchAuthorizationUrl(s);yield H.setAuthorizationUrl(n.authorizeUrl)}}}},Se={...{getConnectionStatus:s=>s.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:s=>s.siteIsRegistering||!1,getUserIsConnecting:s=>s.userIsConnecting||!1,getRegistrationError:s=>s.registrationError||!1,getAuthorizationUrl:s=>s.authorizationUrl||!1,getUserConnectionData:s=>s.userConnectionData||!1,getConnectedPlugins:s=>s.connectedPlugins||[],getConnectionErrors:s=>s.connectionErrors||[],getIsOfflineMode:s=>s.isOfflineMode||!1,getWpcomUser:s=>{var n,I;return(I=(n=s==null?void 0:s.userConnectionData)==null?void 0:n.currentUser)==null?void 0:I.wpcomUser},getBlogId:s=>{var n,I;return(I=(n=s==null?void 0:s.userConnectionData)==null?void 0:n.currentUser)==null?void 0:I.blogId}}};var he=e("../../../node_modules/.pnpm/@wordpress+data@10.2.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");const z=class{static mayBeInit(n,I){z.store===null&&(z.store=(0,he.Z)(n,I),(0,Q.z2)(z.store))}};let se=z;re(se,"store",null);const xe=se,le=window.JP_CONNECTION_INITIAL_STATE;le||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),xe.mayBeInit(W,{__experimentalUseThunks:!0,reducer:ue,actions:H,selectors:Se,resolvers:Ee,controls:Y,initialState:le||{}})},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(x,m,e)=>{var g=e("../../packages/videopress/src/client/state/constants.js");function S(){const t=useSelect(d=>d(STORE_ID).getVideos()),c=useSelect(d=>d(STORE_ID).getUploadingVideos()),R=c.length>0,_="",T=useSelect(d=>d(STORE_ID).getUploadedVideoCount()),l=useSelect(d=>d(STORE_ID).getIsFetching()),C=useSelect(d=>d(STORE_ID).getIsFetchingUploadedVideoCount()),h=useSelect(d=>d(STORE_ID).getFirstUploadedVideoId()),a=useSelect(d=>d(STORE_ID).getFirstVideoProcessed()),r=useSelect(d=>d(STORE_ID).getDismissedFirstVideoPopover()),U=useSelect(d=>d(STORE_ID).getVideosQuery()||{}),b=useSelect(d=>d(STORE_ID).getPagination()),w=useSelect(d=>d(STORE_ID).getStorageUsed(),[]),A=useSelect(d=>d(STORE_ID).getVideosFilter());return{items:t,uploading:c,isUploading:R,search:_,filter:A,uploadedVideoCount:T,isFetching:l,isFetchingUploadedVideoCount:C,firstUploadedVideoId:h,firstVideoProcessed:a,dismissedFirstVideoPopover:r,...U,...b,...w,setPage:d=>dispatch(STORE_ID).setVideosQuery({page:d}),setSearch:d=>dispatch(STORE_ID).setVideosQuery({search:d}),setFilter:dispatch(STORE_ID).setVideosFilter}}const E=()=>{const t=useSelect(l=>l(STORE_ID).getLocalVideos()),c=useSelect(l=>l(STORE_ID).getUploadedLocalVideoCount()),R=useSelect(l=>l(STORE_ID).getIsFetchingLocalVideos()),_=useSelect(l=>l(STORE_ID).getLocalVideosQuery()||{}),T=useSelect(l=>l(STORE_ID).getLocalPagination());return{items:t,uploadedLocalVideoCount:c,isFetching:R,..._,...T,setPage:l=>dispatch(STORE_ID).setLocalVideosQuery({page:l})}},i=()=>useSelect(c=>c(STORE_ID).getVideosQuery()||{})},"../components/components/layout/col/index.tsx":(x,m,e)=>{e.d(m,{Z:()=>a});var g=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(E),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),c={};c.insert="head",c.singleton=!1;var R=i()(t.Z,c);const _=t.Z.locals||{},T=Number(_.smCols),l=Number(_.mdCols),C=Number(_.lgCols),a=r=>{const{children:U,tagName:b="div",className:w}=r,A=Math.min(T,typeof r.sm=="number"?r.sm:T),d=Math.min(T,typeof r.sm=="object"?r.sm.start:0),N=Math.min(T,typeof r.sm=="object"?r.sm.end:0),D=Math.min(l,typeof r.md=="number"?r.md:l),V=Math.min(l,typeof r.md=="object"?r.md.start:0),L=Math.min(l,typeof r.md=="object"?r.md.end:0),K=Math.min(C,typeof r.lg=="number"?r.lg:C),O=Math.min(C,typeof r.lg=="object"?r.lg.start:0),k=Math.min(C,typeof r.lg=="object"?r.lg.end:0),M=(0,g.Z)(w,{[_[`col-sm-${A}`]]:!(d&&N),[_[`col-sm-${d}-start`]]:d>0,[_[`col-sm-${N}-end`]]:N>0,[_[`col-md-${D}`]]:!(V&&L),[_[`col-md-${V}-start`]]:V>0,[_[`col-md-${L}-end`]]:L>0,[_[`col-lg-${K}`]]:!(O&&k),[_[`col-lg-${O}-start`]]:O>0,[_[`col-lg-${k}-end`]]:k>0});return(0,S.createElement)(b,{className:M},U)}},"../components/components/layout/container/index.tsx":(x,m,e)=>{e.d(m,{Z:()=>l});var g=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(E),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),c={};c.insert="head",c.singleton=!1;var R=i()(t.Z,c);const _=t.Z.locals||{},l=({children:C,fluid:h=!1,tagName:a="div",className:r,horizontalGap:U=1,horizontalSpacing:b=1})=>{const w=(0,S.useMemo)(()=>{const d=`calc( var(--horizontal-spacing) * ${b} )`,N=`calc( var(--horizontal-spacing) * ${U} )`;return{paddingTop:d,paddingBottom:d,rowGap:N}},[U,b]),A=(0,g.Z)(r,_.container,{[_.fluid]:h});return(0,S.createElement)(a,{className:A,style:w},C)}},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(x,m,e)=>{e.d(m,{Z:()=>C});var g=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(E),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),c={};c.insert="head",c.singleton=!1;var R=i()(t.Z,c);const _=t.Z.locals||{};var T=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(0,S.forwardRef)(({checked:h,onChange:a,className:r,...U},b)=>{const w=A=>{a==null||a(A.target.checked)};return(0,T.jsx)("input",{...U,ref:b,type:"checkbox",checked:h,className:(0,g.Z)(r,_.checkbox),onChange:w})});l.displayName="Checkbox";const C=l;try{l.displayName="Checkbox",l.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:l.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch(h){}},"../../packages/videopress/src/client/admin/hooks/use-permission/index.ts":(x,m,e)=>{e.d(m,{g:()=>_});var g=e("../api/index.jsx"),S=e("../../../node_modules/.pnpm/@wordpress+data@10.2.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),E=e("../../../node_modules/.pnpm/@wordpress+data@10.2.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../connection/state/store.jsx");const c=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},R=({registrationNonce:T=c.registrationNonce,apiRoot:l=c.apiRoot,apiNonce:C=c.apiNonce,redirectUri:h,autoTrigger:a,from:r,skipUserConnection:U}={})=>{const{registerSite:b,connectUser:w,refreshConnectedPlugins:A}=(0,S.Z)(t.t),d=(0,E.Z)(v=>v(t.t).getRegistrationError()),{siteIsRegistering:N,userIsConnecting:D,userConnectionData:V,connectedPlugins:L,connectionErrors:K,isRegistered:O,isUserConnected:k,hasConnectedOwner:M,isOfflineMode:J}=(0,E.Z)(v=>({siteIsRegistering:v(t.t).getSiteIsRegistering(),userIsConnecting:v(t.t).getUserIsConnecting(),userConnectionData:v(t.t).getUserConnectionData(),connectedPlugins:v(t.t).getConnectedPlugins(),connectionErrors:v(t.t).getConnectionErrors(),isOfflineMode:v(t.t).getIsOfflineMode(),...v(t.t).getConnectionStatus()})),f=()=>{if(U){if(h)return window.location=h,Promise.resolve(h)}else return w({from:r,redirectUri:h});return Promise.resolve()},B=v=>(v&&v.preventDefault(),O?f():b({registrationNonce:T,redirectUri:h,from:r}).then(()=>f()));return(0,i.useEffect)(()=>{g.ZP.setApiRoot(l),g.ZP.setApiNonce(C)},[l,C]),(0,i.useEffect)(()=>{a&&!N&&!D&&B()},[]),{handleRegisterSite:B,handleConnectUser:f,refreshConnectedPlugins:A,isRegistered:O,isUserConnected:k,siteIsRegistering:N,userIsConnecting:D,registrationError:d,userConnectionData:V,hasConnectedOwner:M,connectedPlugins:L,connectionErrors:K,isOfflineMode:J}},_=()=>{const{isRegistered:T,hasConnectedOwner:l,isUserConnected:C}=R();return{isRegistered:T,hasConnectedOwner:l,isUserConnected:C,canPerformAction:T&&l&&C}}},"../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts":(x,m,e)=>{var g=e("../../packages/videopress/src/client/state/index.js");const S=()=>{var t,c,R;const E=useDispatch(STORE_ID),i=useSelect(_=>_(STORE_ID).getVideoPressSettings(),[]);return{settings:{videoPressVideosPrivateForSite:(t=i==null?void 0:i.videoPressVideosPrivateForSite)!=null?t:!1,siteIsPrivate:(c=i==null?void 0:i.siteIsPrivate)!=null?c:!1,siteType:(R=i==null?void 0:i.siteType)!=null?R:SITE_TYPE_JETPACK},onUpdate:_=>E.updateVideoPressSettings(_)}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(x,m,e)=>{e.d(m,{Z:()=>c});var g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(g),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(E),t=i()(S());t.push([x.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),t.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const c=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(x,m,e)=>{e.d(m,{Z:()=>c});var g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(g),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(E),t=i()(S());t.push([x.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),t.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const c=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(x,m,e)=>{e.d(m,{Z:()=>c});var g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(g),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(E),t=i()(S());t.push([x.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),t.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const c=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss":(x,m,e)=>{e.d(m,{Z:()=>c});var g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(g),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(E),t=i()(S());t.push([x.id,'.jEvjz2gQtT1vCRZpq0FJ{flex-shrink:0}.jEvjz2gQtT1vCRZpq0FJ.K7BZwOItK4opz_tJl_6z>svg{fill:var(--jp-white)}.lSp75nRVCANyLynkFAYK{background-color:var(--jp-gray-0)}.lSp75nRVCANyLynkFAYK .euRiK9kFl5U0j6nnVsB1:last-child{margin-bottom:0}.euRiK9kFl5U0j6nnVsB1{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;height:20px;line-height:20px;margin-top:var(--spacing-base)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]{border:1px solid var(--jp-green-40);padding:0 !important;margin-right:10px}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:checked::before{background:var(--jp-green-40)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:not(:checked)+.E5TxkJXJoBCg5Bzotc0i{display:none}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i{position:absolute;top:-1px;left:-1px;height:20px;width:20px;box-sizing:border-box}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i::after{position:absolute;left:8px;top:3px;width:5px;height:11px;border:solid var(--jp-white);border-width:0 1.5px 1.5px 0;transform:rotate(37deg);content:""}.EHwqpGExaCKP8e60NoBX{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.EHwqpGExaCKP8e60NoBX .components-tooltip.components-popover .components-popover__content{min-width:auto;max-width:256px;width:256px;white-space:break-spaces}',""]),t.locals={"filter-button":"jEvjz2gQtT1vCRZpq0FJ","is-active":"K7BZwOItK4opz_tJl_6z","filters-section":"lSp75nRVCANyLynkFAYK","checkbox-container":"euRiK9kFl5U0j6nnVsB1",checkbox:"V0bWOZcP_klJCyrbsp7R","checkbox-checkmark":"E5TxkJXJoBCg5Bzotc0i","title-adornment":"EHwqpGExaCKP8e60NoBX"};const c=t}}]);})();