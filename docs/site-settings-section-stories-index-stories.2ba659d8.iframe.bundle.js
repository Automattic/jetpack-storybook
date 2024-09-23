"use strict";(()=>{var ve=Object.defineProperty;var Re=(T,l,e)=>l in T?ve(T,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):T[l]=e;var _e=(T,l,e)=>(Re(T,typeof l!="symbol"?l+"":l,e),e);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8577],{"../../packages/videopress/src/client/admin/components/site-settings-section/stories/index.stories.tsx":(T,l,e)=>{var Z,q,$;e.r(l),e.d(l,{__namedExportsOrder:()=>oe,_default:()=>G,default:()=>se});var u=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs"),E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../components/components/layout/container/index.tsx"),a=e("../components/components/layout/col/index.tsx"),d=e("../components/components/text/index.tsx"),n=e("../../../node_modules/.pnpm/@wordpress+i18n@5.7.0/node_modules/@wordpress/i18n/build-module/index.js"),g=e("../../packages/videopress/src/client/admin/hooks/use-permission/index.ts"),r=e("../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts"),x=e("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@10.7.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),k=e("../../../node_modules/.pnpm/@wordpress+icons@10.7.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js"),v=e("../../../node_modules/.pnpm/@wordpress+primitives@4.7.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=(0,i.jsxs)(v.t4,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)(v.rw,{x:"5",y:"7",width:"14",height:"1.5"}),(0,i.jsx)(v.rw,{x:"7",y:"11.25",width:"10",height:"1.5"}),(0,i.jsx)(v.rw,{x:"9",y:"15.5",width:"6",height:"1.5"})]}),f=null;var N=e("../../packages/videopress/src/client/state/constants.js");function D(){const o=useSelect(y=>y(STORE_ID).getUsers()),A=useSelect(y=>y(STORE_ID).getUsersPagination());return{items:o,...A}}var w=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),b=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=e.n(c),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss"),V={};V.insert="head",V.singleton=!1;var z=F()(j.A,V);const U=j.A.locals||{},C=null,L=o=>{const{isActive:A,...y}=o;return _jsx(Button,{variant:A?"primary":"secondary",className:clsx(styles["filter-button"],{[styles["is-active"]]:A}),icon:filterIcon,weight:"regular",...y,children:C("Filters","jetpack-videopress-pkg")})},H=o=>(0,i.jsx)(x.Ay,{position:"middle center",text:o.message,children:(0,i.jsx)("span",{className:U["title-adornment"],children:(0,i.jsx)(_.A,{icon:k.A})})}),O=o=>(0,i.jsxs)("label",{htmlFor:o.for,className:U["checkbox-container"],children:[(0,i.jsx)(b.A,{id:o.for,className:U.checkbox,onChange:o.onChange,checked:o.checked,disabled:o.disabled}),(0,i.jsx)("span",{className:U["checkbox-checkmark"]}),(0,i.jsx)(d.Ay,{variant:"body-small",children:o.label}),o.disabledReason&&(0,i.jsx)(H,{message:o.disabledReason})]}),M=o=>{const[A]=useBreakpointMatch("sm"),y=(S,h)=>{var P,J;return((J=(P=o==null?void 0:o.filter)==null?void 0:P[S])==null?void 0:J[h])===!0};return _jsx("div",{className:clsx(styles["filters-section"],o.className),children:_jsxs(Container,{horizontalSpacing:A?2:4,horizontalGap:2,children:[_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:C("Uploader","jetpack-videopress-pkg")}),o.uploaders.map(S=>_jsx(O,{label:S.name,for:`uploader-${S.id}`,onChange:h=>{var P;return(P=o.onChange)==null?void 0:P.call(o,VIDEO_FILTER_UPLOADER,S.id,h)},checked:y(VIDEO_FILTER_UPLOADER,S.id)},S.id))]}),_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:C("Privacy","jetpack-videopress-pkg")}),_jsx(O,{for:"filter-public",label:C("Public","jetpack-videopress-pkg"),onChange:S=>{var h;return(h=o.onChange)==null?void 0:h.call(o,VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PUBLIC),S)},checked:y(VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PUBLIC))}),_jsx(O,{for:"filter-private",label:C("Private","jetpack-videopress-pkg"),onChange:S=>{var h;return(h=o.onChange)==null?void 0:h.call(o,VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PRIVATE),S)},checked:y(VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PRIVATE))})]}),_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:C("Rating","jetpack-videopress-pkg")}),_jsx(O,{for:"filter-g",label:C("G","jetpack-videopress-pkg"),onChange:S=>{var h;return(h=o.onChange)==null?void 0:h.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_G,S)},checked:y(VIDEO_FILTER_RATING,VIDEO_RATING_G)}),_jsx(O,{for:"filter-pg-13",label:C("PG-13","jetpack-videopress-pkg"),onChange:S=>{var h;return(h=o.onChange)==null?void 0:h.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_PG_13,S)},checked:y(VIDEO_FILTER_RATING,VIDEO_RATING_PG_13)}),_jsx(O,{for:"filter-r",label:C("R","jetpack-videopress-pkg"),onChange:S=>{var h;return(h=o.onChange)==null?void 0:h.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_R_17,S)},checked:y(VIDEO_FILTER_RATING,VIDEO_RATING_R_17)})]})]})})},Y=o=>{const{setFilter:A,filter:y}=useVideos(),S=useSearchParams(),h=(...J)=>{S.deleteParam("page"),S.update(),A(...J)},{items:P}=useUsers();return _jsx(M,{...o,onChange:h,uploaders:P,filter:y})};try{L.displayName="FilterButton",L.__docgenInfo={description:"",displayName:"FilterButton",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"]={docgenInfo:L.__docgenInfo,name:"FilterButton",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"})}catch(o){}try{O.displayName="CheckboxCheckmark",O.__docgenInfo={description:"",displayName:"CheckboxCheckmark",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},for:{defaultValue:null,description:"",name:"for",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},disabledReason:{defaultValue:null,description:"",name:"disabledReason",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"]={docgenInfo:O.__docgenInfo,name:"CheckboxCheckmark",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"})}catch(o){}try{M.displayName="FilterSection",M.__docgenInfo={description:"",displayName:"FilterSection",props:{uploaders:{defaultValue:null,description:"",name:"uploaders",required:!0,type:{name:"{ id: number; name: string; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'(filter: "uploader" | "privacy" | "rating", value: number | "PG-13" | "G" | "R-17", checked: boolean) => void'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"FilterObject"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"]={docgenInfo:M.__docgenInfo,name:"FilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"})}catch(o){}try{Y.displayName="ConnectFilterSection",Y.__docgenInfo={description:"",displayName:"ConnectFilterSection",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"]={docgenInfo:Y.__docgenInfo,name:"ConnectFilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"})}catch(o){}const R="atomic",de="simple",me="jetpack",W=n.__,Q=({videoPressVideosPrivateForSite:o,siteIsPrivate:A,siteType:y,onPrivacyChange:S})=>{const{canPerformAction:h}=(0,g.J)(),P=A&&y===R,J=!h||P,te=P?W("You cannot change this setting because your site is private. You can only choose the video privacy default on public sites.","jetpack-videopress-pkg"):null;return(0,i.jsxs)(p.A,{horizontalSpacing:0,horizontalGap:0,children:[(0,i.jsx)(a.A,{children:(0,i.jsx)(d.Ay,{variant:"headline-small",mb:1,children:W("Settings","jetpack-videopress-pkg")})}),(0,i.jsx)(a.A,{sm:12,md:12,lg:12,children:(0,i.jsx)(O,{for:"settings-site-privacy",label:W("Video Privacy: Restrict views to members of this site","jetpack-videopress-pkg"),onChange:S,checked:o,disabled:J,disabledReason:te})})]})},ue=()=>{const{settings:o,onUpdate:A}=useVideoPressSettings(),{videoPressVideosPrivateForSite:y,siteIsPrivate:S,siteType:h}=o;return _jsx(Q,{videoPressVideosPrivateForSite:y,siteIsPrivate:S,siteType:h,onPrivacyChange:P=>{A({videoPressVideosPrivateForSite:P})}})},K=Q,se={title:"Packages/VideoPress/Site Settings",component:K,argTypes:{}},G=(o=>(0,i.jsx)(K,{...o})).bind({});G.args={onPrivacyChange:(0,u.XI)("onPrivacyChange")};const oe=["_default"];G.parameters={...G.parameters,docs:{...(Z=G.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <SettingsSection {...args} />",...($=(q=G.parameters)==null?void 0:q.docs)==null?void 0:$.source}}}},"../connection/components/use-connection/index.jsx":(T,l,e)=>{var x;e.d(l,{A:()=>r});var u=e("../api/index.jsx"),E=e("../script-data/src/utils.ts"),p=e("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),a=e("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../connection/state/store.jsx");const g=(window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)||((x=(0,E.au)())==null?void 0:x.connection)||{},r=({registrationNonce:_=g.registrationNonce,apiRoot:k=g.apiRoot,apiNonce:v=g.apiNonce,redirectUri:i,autoTrigger:m,from:f,skipUserConnection:N}={})=>{const{registerSite:D,connectUser:w,refreshConnectedPlugins:b}=(0,p.A)(n.a),c=(0,a.A)(R=>R(n.a).getRegistrationError()),{siteIsRegistering:F,userIsConnecting:j,userConnectionData:V,connectedPlugins:z,connectionErrors:U,isRegistered:C,isUserConnected:L,hasConnectedOwner:H,isOfflineMode:O}=(0,a.A)(R=>({siteIsRegistering:R(n.a).getSiteIsRegistering(),userIsConnecting:R(n.a).getUserIsConnecting(),userConnectionData:R(n.a).getUserConnectionData(),connectedPlugins:R(n.a).getConnectedPlugins(),connectionErrors:R(n.a).getConnectionErrors(),isOfflineMode:R(n.a).getIsOfflineMode(),...R(n.a).getConnectionStatus()})),M=()=>{if(N){if(i)return window.location=i,Promise.resolve(i)}else return w({from:f,redirectUri:i});return Promise.resolve()},Y=R=>(R&&R.preventDefault(),C?M():D({registrationNonce:_,redirectUri:i,from:f}).then(()=>M()));return(0,d.useEffect)(()=>{u.Ay.setApiRoot(k),u.Ay.setApiNonce(v)},[k,v]),(0,d.useEffect)(()=>{m&&!F&&!j&&Y()},[]),{handleRegisterSite:Y,handleConnectUser:M,refreshConnectedPlugins:b,isRegistered:C,isUserConnected:L,siteIsRegistering:F,userIsConnecting:j,registrationError:c,userConnectionData:V,hasConnectedOwner:H,connectedPlugins:z,connectionErrors:U,isOfflineMode:O}}},"../connection/state/store.jsx":(T,l,e)=>{var ie;e.d(l,{a:()=>K});var u=e("../script-data/src/utils.ts"),E=e("../api/index.jsx");const p="SET_CONNECTION_STATUS",a="SET_CONNECTION_STATUS_IS_FETCHING",d="FETCH_CONNECTION_STATUS",n="SET_SITE_IS_REGISTERING",g="SET_USER_IS_CONNECTING",r="SET_REGISTRATION_ERROR",x="CLEAR_REGISTRATION_ERROR",_="REGISTER_SITE",k="SET_AUTHORIZATION_URL",v="CONNECT_USER",i="DISCONNECT_USER_SUCCESS",m="FETCH_AUTHORIZATION_URL",f="SET_CONNECTED_PLUGINS",N="REFRESH_CONNECTED_PLUGINS",D="SET_CONNECTION_ERRORS",w="SET_IS_OFFLINE_MODE",b=s=>({type:p,connectionStatus:s}),c=s=>({type:a,isFetching:s}),F=()=>({type:d}),j=s=>({type:n,isRegistering:s}),V=s=>({type:g,isConnecting:s}),z=()=>({type:i}),U=s=>({type:r,registrationError:s}),C=()=>({type:x}),L=s=>({type:k,authorizationUrl:s}),H=s=>({type:m,redirectUri:s}),O=s=>({type:f,connectedPlugins:s}),M=s=>({type:D,connectionErrors:s}),Y=s=>({type:w,isOfflineMode:s});function*R({from:s,redirectFunc:t,redirectUri:I}={}){yield V(!0),yield{type:v,from:s,redirectFunc:t,redirectUri:I}}function*de({registrationNonce:s,redirectUri:t,from:I=""}){yield C(),yield j(!0);try{const B=yield{type:_,registrationNonce:s,redirectUri:t,from:I};return yield b({isRegistered:!0}),yield L(B.authorizeUrl),yield j(!1),Promise.resolve(B)}catch(B){return yield U(B),yield j(!1),Promise.reject(B)}}const W={setConnectionStatus:b,setConnectionStatusIsFetching:c,fetchConnectionStatus:F,fetchAuthorizationUrl:H,setSiteIsRegistering:j,setUserIsConnecting:V,setRegistrationError:U,clearRegistrationError:C,setAuthorizationUrl:L,registerSite:de,connectUser:R,disconnectUserSuccess:z,setConnectedPlugins:O,refreshConnectedPlugins:()=>async({dispatch:s})=>await new Promise(t=>E.Ay.fetchConnectedPlugins().then(I=>{s(O(I)),t(I)})),setConnectionErrors:M,setIsOfflineMode:Y};var Q=e("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");const K="jetpack-connection",se=({registrationNonce:s,redirectUri:t,from:I})=>E.Ay.registerSite(s,t,I),ce=(0,Q.b)(({resolveSelect:s})=>({from:t,redirectFunc:I,redirectUri:B}={})=>new Promise((Ie,ye)=>{s(K).getAuthorizationUrl(B).then(ne=>{const Ce=I||(ke=>window.location.assign(ke)),le=new URL(ne);t&&le.searchParams.set("from",encodeURIComponent(t));const re=le.toString();Ce(re),Ie(re)}).catch(ne=>{ye(ne)})})),oe={FETCH_AUTHORIZATION_URL:({redirectUri:s})=>E.Ay.fetchAuthorizationUrl(s),REGISTER_SITE:se,CONNECT_USER:ce};var Z=e("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const q=(s={},t)=>{switch(t.type){case p:return{...s,...t.connectionStatus};case i:return{...s,isUserConnected:!1}}return s},$=(s={},t)=>{switch(t.type){case f:return t.connectedPlugins}return s},o=(s=!1,t)=>{switch(t.type){case a:return t.isFetching}return s},A=(s=!1,t)=>{switch(t.type){case n:return t.isRegistering}return s},y=(s=!1,t)=>{switch(t.type){case g:return t.isConnecting}return s},S=(s,t)=>{switch(t.type){case x:return!1;case r:return t.registrationError;default:return s}},h=(s,t)=>{switch(t.type){case k:return t.authorizationUrl;default:return s}},P=(s,t)=>{switch(t.type){default:return s}},J=(s={},t)=>{switch(t.type){case D:return t.connectionErrors}return s},te=(s=!1,t)=>{switch(t.type){case w:return t.isConnecting}return s},pe=(0,Z.HY)({connectionStatus:q,connectionStatusIsFetching:o,siteIsRegistering:A,userIsConnecting:y,registrationError:S,authorizationUrl:h,userConnectionData:P,connectedPlugins:$,connectionErrors:J,isOfflineMode:te});var ge=e("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),Ee=e("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const Se={...{getAuthorizationUrl:{isFulfilled:(s,...t)=>{const I=!!s.authorizationUrl,B=(0,ge.L)(K).hasFinishedResolution("getAuthorizationUrl",t);return I&&!B&&(0,Ee.J)(K).finishResolution("getAuthorizationUrl",t),I},*fulfill(s){const t=yield W.fetchAuthorizationUrl(s);yield W.setAuthorizationUrl(t.authorizeUrl)}}}},he={...{getConnectionStatus:s=>s.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:s=>s.siteIsRegistering||!1,getUserIsConnecting:s=>s.userIsConnecting||!1,getRegistrationError:s=>s.registrationError||!1,getAuthorizationUrl:s=>s.authorizationUrl||!1,getUserConnectionData:s=>s.userConnectionData||!1,getConnectedPlugins:s=>s.connectedPlugins||[],getConnectionErrors:s=>s.connectionErrors||[],getIsOfflineMode:s=>s.isOfflineMode||!1,getWpcomUser:s=>{var t,I;return(I=(t=s==null?void 0:s.userConnectionData)==null?void 0:t.currentUser)==null?void 0:I.wpcomUser},getBlogId:s=>{var t,I;return(I=(t=s==null?void 0:s.userConnectionData)==null?void 0:t.currentUser)==null?void 0:I.blogId}}};var Te=e("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");const X=class{static mayBeInit(t,I){X.store===null&&(X.store=(0,Te.A)(t,I),(0,Z.kz)(X.store))}};let ee=X;_e(ee,"store",null);const xe=ee,ae=window.JP_CONNECTION_INITIAL_STATE||((ie=(0,u.au)())==null?void 0:ie.connection);ae||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),xe.mayBeInit(K,{__experimentalUseThunks:!0,reducer:pe,actions:W,selectors:he,resolvers:Se,controls:oe,initialState:ae||{}})},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(T,l,e)=>{var u=e("../../packages/videopress/src/client/state/constants.js");function E(){const d=useSelect(c=>c(STORE_ID).getVideos()),n=useSelect(c=>c(STORE_ID).getUploadingVideos()),g=n.length>0,r="",x=useSelect(c=>c(STORE_ID).getUploadedVideoCount()),_=useSelect(c=>c(STORE_ID).getIsFetching()),k=useSelect(c=>c(STORE_ID).getIsFetchingUploadedVideoCount()),v=useSelect(c=>c(STORE_ID).getFirstUploadedVideoId()),i=useSelect(c=>c(STORE_ID).getFirstVideoProcessed()),m=useSelect(c=>c(STORE_ID).getDismissedFirstVideoPopover()),f=useSelect(c=>c(STORE_ID).getVideosQuery()||{}),N=useSelect(c=>c(STORE_ID).getPagination()),D=useSelect(c=>c(STORE_ID).getStorageUsed(),[]),w=useSelect(c=>c(STORE_ID).getVideosFilter()),b=useSelect(c=>c(STORE_ID).getUploadErrorVideos());return{items:d,uploading:n,isUploading:g,search:r,filter:w,uploadedVideoCount:x,isFetching:_,isFetchingUploadedVideoCount:k,firstUploadedVideoId:v,firstVideoProcessed:i,dismissedFirstVideoPopover:m,...f,...N,...D,uploadErrors:b,setPage:c=>dispatch(STORE_ID).setVideosQuery({page:c}),setSearch:c=>dispatch(STORE_ID).setVideosQuery({search:c}),setFilter:dispatch(STORE_ID).setVideosFilter}}const p=()=>{const d=useSelect(_=>_(STORE_ID).getLocalVideos()),n=useSelect(_=>_(STORE_ID).getUploadedLocalVideoCount()),g=useSelect(_=>_(STORE_ID).getIsFetchingLocalVideos()),r=useSelect(_=>_(STORE_ID).getLocalVideosQuery()||{}),x=useSelect(_=>_(STORE_ID).getLocalPagination());return{items:d,uploadedLocalVideoCount:n,isFetching:g,...r,...x,setPage:_=>dispatch(STORE_ID).setLocalVideosQuery({page:_})}},a=()=>useSelect(n=>n(STORE_ID).getVideosQuery()||{})},"../components/components/layout/col/index.tsx":(T,l,e)=>{e.d(l,{A:()=>i});var u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(p),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),n={};n.insert="head",n.singleton=!1;var g=a()(d.A,n);const r=d.A.locals||{},x=Number(r.smCols),_=Number(r.mdCols),k=Number(r.lgCols),i=m=>{const{children:f,tagName:N="div",className:D}=m,w=Math.min(x,typeof m.sm=="number"?m.sm:x),b=Math.min(x,typeof m.sm=="object"?m.sm.start:0),c=Math.min(x,typeof m.sm=="object"?m.sm.end:0),F=Math.min(_,typeof m.md=="number"?m.md:_),j=Math.min(_,typeof m.md=="object"?m.md.start:0),V=Math.min(_,typeof m.md=="object"?m.md.end:0),z=Math.min(k,typeof m.lg=="number"?m.lg:k),U=Math.min(k,typeof m.lg=="object"?m.lg.start:0),C=Math.min(k,typeof m.lg=="object"?m.lg.end:0),L=(0,u.A)(D,{[r[`col-sm-${w}`]]:!(b&&c),[r[`col-sm-${b}-start`]]:b>0,[r[`col-sm-${c}-end`]]:c>0,[r[`col-md-${F}`]]:!(j&&V),[r[`col-md-${j}-start`]]:j>0,[r[`col-md-${V}-end`]]:V>0,[r[`col-lg-${z}`]]:!(U&&C),[r[`col-lg-${U}-start`]]:U>0,[r[`col-lg-${C}-end`]]:C>0});return(0,E.createElement)(N,{className:L},f)}},"../components/components/layout/container/index.tsx":(T,l,e)=>{e.d(l,{A:()=>_});var u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(p),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),n={};n.insert="head",n.singleton=!1;var g=a()(d.A,n);const r=d.A.locals||{},_=({children:k,fluid:v=!1,tagName:i="div",className:m,horizontalGap:f=1,horizontalSpacing:N=1})=>{const D=(0,E.useMemo)(()=>{const b=`calc( var(--horizontal-spacing) * ${N} )`,c=`calc( var(--horizontal-spacing) * ${f} )`;return{paddingTop:b,paddingBottom:b,rowGap:c}},[f,N]),w=(0,u.A)(m,r.container,{[r.fluid]:v});return(0,E.createElement)(i,{className:w,style:D},k)}},"../script-data/src/utils.ts":(T,l,e)=>{e.d(l,{au:()=>u});function u(){return window.JetpackScriptData}function E(){return u().site}function p(g=""){return`${u().site.admin_url}${g}`}function a(g=""){return p(`admin.php?page=jetpack${g}`)}function d(g=""){return p(`admin.php?page=my-jetpack${g}`)}function n(){var g,r,x;return(x=(r=(g=u().site.plan)==null?void 0:g.features)==null?void 0:r.active)!=null?x:[]}},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(T,l,e)=>{e.d(l,{A:()=>k});var u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(p),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),n={};n.insert="head",n.singleton=!1;var g=a()(d.A,n);const r=d.A.locals||{};var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=(0,E.forwardRef)(({checked:v,onChange:i,className:m,...f},N)=>{const D=w=>{i==null||i(w.target.checked)};return(0,x.jsx)("input",{...f,ref:N,type:"checkbox",checked:v,className:(0,u.A)(m,r.checkbox),onChange:D})});_.displayName="Checkbox";const k=_;try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:_.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch(v){}},"../../packages/videopress/src/client/admin/hooks/use-permission/index.ts":(T,l,e)=>{e.d(l,{J:()=>E});var u=e("../connection/components/use-connection/index.jsx");const E=()=>{const{isRegistered:p,hasConnectedOwner:a,isUserConnected:d}=(0,u.A)();return{isRegistered:p,hasConnectedOwner:a,isUserConnected:d,canPerformAction:p&&a&&d}}},"../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts":(T,l,e)=>{var u=e("../../packages/videopress/src/client/state/index.js");const E=()=>{var d,n,g;const p=useDispatch(STORE_ID),a=useSelect(r=>r(STORE_ID).getVideoPressSettings(),[]);return{settings:{videoPressVideosPrivateForSite:(d=a==null?void 0:a.videoPressVideosPrivateForSite)!=null?d:!1,siteIsPrivate:(n=a==null?void 0:a.siteIsPrivate)!=null?n:!1,siteType:(g=a==null?void 0:a.siteType)!=null?g:SITE_TYPE_JETPACK},onUpdate:r=>p.updateVideoPressSettings(r)}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(T,l,e)=>{e.d(l,{A:()=>n});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),E=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),d=a()(E());d.push([T.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),d.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const n=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(T,l,e)=>{e.d(l,{A:()=>n});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),E=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),d=a()(E());d.push([T.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),d.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const n=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(T,l,e)=>{e.d(l,{A:()=>n});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),E=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),d=a()(E());d.push([T.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),d.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const n=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss":(T,l,e)=>{e.d(l,{A:()=>n});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),E=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),d=a()(E());d.push([T.id,'.jEvjz2gQtT1vCRZpq0FJ{flex-shrink:0}.jEvjz2gQtT1vCRZpq0FJ.K7BZwOItK4opz_tJl_6z>svg{fill:var(--jp-white)}.lSp75nRVCANyLynkFAYK{background-color:var(--jp-gray-0)}.lSp75nRVCANyLynkFAYK .euRiK9kFl5U0j6nnVsB1:last-child{margin-bottom:0}.euRiK9kFl5U0j6nnVsB1{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;height:20px;line-height:20px;margin-top:var(--spacing-base)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]{border:1px solid var(--jp-green-40);padding:0 !important;margin-right:10px}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:checked::before{background:var(--jp-green-40)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:not(:checked)+.E5TxkJXJoBCg5Bzotc0i{display:none}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i{position:absolute;top:-1px;left:-1px;height:20px;width:20px;box-sizing:border-box}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i::after{position:absolute;left:8px;top:3px;width:5px;height:11px;border:solid var(--jp-white);border-width:0 1.5px 1.5px 0;transform:rotate(37deg);content:""}.EHwqpGExaCKP8e60NoBX{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.EHwqpGExaCKP8e60NoBX .components-tooltip.components-popover .components-popover__content{min-width:auto;max-width:256px;width:256px;white-space:break-spaces}',""]),d.locals={"filter-button":"jEvjz2gQtT1vCRZpq0FJ","is-active":"K7BZwOItK4opz_tJl_6z","filters-section":"lSp75nRVCANyLynkFAYK","checkbox-container":"euRiK9kFl5U0j6nnVsB1",checkbox:"V0bWOZcP_klJCyrbsp7R","checkbox-checkmark":"E5TxkJXJoBCg5Bzotc0i","title-adornment":"EHwqpGExaCKP8e60NoBX"};const n=d}}]);})();
