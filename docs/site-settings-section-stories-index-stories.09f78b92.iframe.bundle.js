"use strict";(()=>{var ve=Object.defineProperty;var fe=(h,u,e)=>u in h?ve(h,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[u]=e;var _e=(h,u,e)=>(fe(h,typeof u!="symbol"?u+"":u,e),e);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3556],{"../../packages/videopress/src/client/admin/components/site-settings-section/stories/index.stories.tsx":(h,u,e)=>{var X,$,ee;e.r(u),e.d(u,{__namedExportsOrder:()=>te,_default:()=>W,default:()=>oe});var m=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.1.6/node_modules/@storybook/addon-actions/dist/index.mjs"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../components/components/layout/container/index.tsx"),_=e("../components/components/layout/col/index.tsx"),c=e("../components/components/text/index.tsx"),n=e("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),C=e("../../packages/videopress/src/client/admin/hooks/use-permission/index.ts"),d=e("../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts"),x=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js"),y=e("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const r=(0,i.jsxs)(y.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)(y.UL,{x:"5",y:"7",width:"14",height:"1.5"}),(0,i.jsx)(y.UL,{x:"7",y:"11.25",width:"10",height:"1.5"}),(0,i.jsx)(y.UL,{x:"9",y:"15.5",width:"6",height:"1.5"})]}),O=null;var A=e("../../packages/videopress/src/client/state/constants.js");function U(){const o=useSelect(k=>k(STORE_ID).getUsers()),P=useSelect(k=>k(STORE_ID).getUsersPagination());return{items:o,...P}}var D=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),f=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(l),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss"),N={};N.insert="head",N.singleton=!1;var G=K()(j.Z,N);const V=j.Z.locals||{},v=null,L=o=>{const{isActive:P,...k}=o;return _jsx(Button,{variant:P?"primary":"secondary",className:clsx(styles["filter-button"],{[styles["is-active"]]:P}),icon:filterIcon,weight:"regular",...k,children:v("Filters","jetpack-videopress-pkg")})},H=o=>(0,i.jsx)(x.ZP,{position:"middle center",text:o.message,children:(0,i.jsx)("span",{className:V["title-adornment"],children:(0,i.jsx)(a.Z,{icon:T.Z})})}),R=o=>(0,i.jsxs)("label",{htmlFor:o.for,className:V["checkbox-container"],children:[(0,i.jsx)(f.Z,{id:o.for,className:V.checkbox,onChange:o.onChange,checked:o.checked,disabled:o.disabled}),(0,i.jsx)("span",{className:V["checkbox-checkmark"]}),(0,i.jsx)(c.ZP,{variant:"body-small",children:o.label}),o.disabledReason&&(0,i.jsx)(H,{message:o.disabledReason})]}),F=o=>{const[P]=useBreakpointMatch("sm"),k=(g,E)=>{var w,Z;return((Z=(w=o==null?void 0:o.filter)==null?void 0:w[g])==null?void 0:Z[E])===!0};return _jsx("div",{className:clsx(styles["filters-section"],o.className),children:_jsxs(Container,{horizontalSpacing:P?2:4,horizontalGap:2,children:[_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:v("Uploader","jetpack-videopress-pkg")}),o.uploaders.map(g=>_jsx(R,{label:g.name,for:`uploader-${g.id}`,onChange:E=>{var w;return(w=o.onChange)==null?void 0:w.call(o,VIDEO_FILTER_UPLOADER,g.id,E)},checked:k(VIDEO_FILTER_UPLOADER,g.id)},g.id))]}),_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:v("Privacy","jetpack-videopress-pkg")}),_jsx(R,{for:"filter-public",label:v("Public","jetpack-videopress-pkg"),onChange:g=>{var E;return(E=o.onChange)==null?void 0:E.call(o,VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PUBLIC),g)},checked:k(VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PUBLIC))}),_jsx(R,{for:"filter-private",label:v("Private","jetpack-videopress-pkg"),onChange:g=>{var E;return(E=o.onChange)==null?void 0:E.call(o,VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PRIVATE),g)},checked:k(VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PRIVATE))})]}),_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:v("Rating","jetpack-videopress-pkg")}),_jsx(R,{for:"filter-g",label:v("G","jetpack-videopress-pkg"),onChange:g=>{var E;return(E=o.onChange)==null?void 0:E.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_G,g)},checked:k(VIDEO_FILTER_RATING,VIDEO_RATING_G)}),_jsx(R,{for:"filter-pg-13",label:v("PG-13","jetpack-videopress-pkg"),onChange:g=>{var E;return(E=o.onChange)==null?void 0:E.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_PG_13,g)},checked:k(VIDEO_FILTER_RATING,VIDEO_RATING_PG_13)}),_jsx(R,{for:"filter-r",label:v("R","jetpack-videopress-pkg"),onChange:g=>{var E;return(E=o.onChange)==null?void 0:E.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_R_17,g)},checked:k(VIDEO_FILTER_RATING,VIDEO_RATING_R_17)})]})]})})},M=o=>{const{setFilter:P,filter:k}=useVideos(),g=useSearchParams(),E=(...Z)=>{g.deleteParam("page"),g.update(),P(...Z)},{items:w}=useUsers();return _jsx(F,{...o,onChange:E,uploaders:w,filter:k})};try{L.displayName="FilterButton",L.__docgenInfo={description:"",displayName:"FilterButton",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"]={docgenInfo:L.__docgenInfo,name:"FilterButton",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"})}catch(o){}try{R.displayName="CheckboxCheckmark",R.__docgenInfo={description:"",displayName:"CheckboxCheckmark",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},for:{defaultValue:null,description:"",name:"for",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},disabledReason:{defaultValue:null,description:"",name:"disabledReason",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"]={docgenInfo:R.__docgenInfo,name:"CheckboxCheckmark",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"})}catch(o){}try{F.displayName="FilterSection",F.__docgenInfo={description:"",displayName:"FilterSection",props:{uploaders:{defaultValue:null,description:"",name:"uploaders",required:!0,type:{name:"{ id: number; name: string; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'(filter: "uploader" | "privacy" | "rating", value: number | "PG-13" | "G" | "R-17", checked: boolean) => void'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"FilterObject"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"]={docgenInfo:F.__docgenInfo,name:"FilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"})}catch(o){}try{M.displayName="ConnectFilterSection",M.__docgenInfo={description:"",displayName:"ConnectFilterSection",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"]={docgenInfo:M.__docgenInfo,name:"ConnectFilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"})}catch(o){}const z="atomic",b="simple",ue="jetpack",J=n.__,q=({videoPressVideosPrivateForSite:o,siteIsPrivate:P,siteType:k,onPrivacyChange:g})=>{const{canPerformAction:E}=(0,C.g)(),w=P&&k===z,Z=!E||w,ne=w?J("You cannot change this setting because your site is private. You can only choose the video privacy default on public sites.","jetpack-videopress-pkg"):null;return(0,i.jsxs)(p.Z,{horizontalSpacing:0,horizontalGap:0,children:[(0,i.jsx)(_.Z,{children:(0,i.jsx)(c.ZP,{variant:"headline-small",mb:1,children:J("Settings","jetpack-videopress-pkg")})}),(0,i.jsx)(_.Z,{sm:12,md:12,lg:12,children:(0,i.jsx)(R,{for:"settings-site-privacy",label:J("Video Privacy: Restrict views to members of this site","jetpack-videopress-pkg"),onChange:g,checked:o,disabled:Z,disabledReason:ne})})]})},me=()=>{const{settings:o,onUpdate:P}=useVideoPressSettings(),{videoPressVideosPrivateForSite:k,siteIsPrivate:g,siteType:E}=o;return _jsx(q,{videoPressVideosPrivateForSite:k,siteIsPrivate:g,siteType:E,onPrivacyChange:w=>{P({videoPressVideosPrivateForSite:w})}})},Y=q,oe={title:"Packages/VideoPress/Site Settings",component:Y,argTypes:{}},W=(o=>(0,i.jsx)(Y,{...o})).bind({});W.args={onPrivacyChange:(0,m.aD)("onPrivacyChange")},W.parameters={...W.parameters,docs:{...(X=W.parameters)==null?void 0:X.docs,source:{originalSource:"args => <SettingsSection {...args} />",...(ee=($=W.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const te=["_default"]},"../connection/state/store.jsx":(h,u,e)=>{var ie;e.d(u,{t:()=>Y});var m=e("../script-data/src/utils.ts"),S=e("../api/index.jsx");const p="SET_CONNECTION_STATUS",_="SET_CONNECTION_STATUS_IS_FETCHING",c="FETCH_CONNECTION_STATUS",n="SET_SITE_IS_REGISTERING",C="SET_USER_IS_CONNECTING",d="SET_REGISTRATION_ERROR",x="CLEAR_REGISTRATION_ERROR",a="REGISTER_SITE",T="SET_AUTHORIZATION_URL",y="CONNECT_USER",i="DISCONNECT_USER_SUCCESS",r="FETCH_AUTHORIZATION_URL",O="SET_CONNECTED_PLUGINS",A="REFRESH_CONNECTED_PLUGINS",U="SET_CONNECTION_ERRORS",D="SET_IS_OFFLINE_MODE",f=s=>({type:p,connectionStatus:s}),l=s=>({type:_,isFetching:s}),K=()=>({type:c}),j=s=>({type:n,isRegistering:s}),N=s=>({type:C,isConnecting:s}),G=()=>({type:i}),V=s=>({type:d,registrationError:s}),v=()=>({type:x}),L=s=>({type:T,authorizationUrl:s}),H=s=>({type:r,redirectUri:s}),R=s=>({type:O,connectedPlugins:s}),F=s=>({type:U,connectionErrors:s}),M=s=>({type:D,isOfflineMode:s});function*z({from:s,redirectFunc:t,redirectUri:I}={}){yield N(!0),yield{type:y,from:s,redirectFunc:t,redirectUri:I}}function*b({registrationNonce:s,redirectUri:t,from:I=""}){yield v(),yield j(!0);try{const B=yield{type:a,registrationNonce:s,redirectUri:t,from:I};return yield f({isRegistered:!0}),yield L(B.authorizeUrl),yield j(!1),Promise.resolve(B)}catch(B){return yield V(B),yield j(!1),Promise.reject(B)}}const J={setConnectionStatus:f,setConnectionStatusIsFetching:l,fetchConnectionStatus:K,fetchAuthorizationUrl:H,setSiteIsRegistering:j,setUserIsConnecting:N,setRegistrationError:V,clearRegistrationError:v,setAuthorizationUrl:L,registerSite:b,connectUser:z,disconnectUserSuccess:G,setConnectedPlugins:R,refreshConnectedPlugins:()=>async({dispatch:s})=>await new Promise(t=>S.ZP.fetchConnectedPlugins().then(I=>{s(R(I)),t(I)})),setConnectionErrors:F,setIsOfflineMode:M};var q=e("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");const Y="jetpack-connection",oe=({registrationNonce:s,redirectUri:t,from:I})=>S.ZP.registerSite(s,t,I),ce=(0,q.R)(({resolveSelect:s})=>({from:t,redirectFunc:I,redirectUri:B}={})=>new Promise((Te,ye)=>{s(Y).getAuthorizationUrl(B).then(de=>{const ke=I||(Ce=>window.location.assign(Ce)),ae=new URL(de);t&&ae.searchParams.set("from",encodeURIComponent(t));const re=ae.toString();ke(re),Te(re)}).catch(de=>{ye(de)})})),te={FETCH_AUTHORIZATION_URL:({redirectUri:s})=>S.ZP.fetchAuthorizationUrl(s),REGISTER_SITE:oe,CONNECT_USER:ce};var X=e("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const $=(s={},t)=>{switch(t.type){case p:return{...s,...t.connectionStatus};case i:return{...s,isUserConnected:!1}}return s},ee=(s={},t)=>{switch(t.type){case O:return t.connectedPlugins}return s},o=(s=!1,t)=>{switch(t.type){case _:return t.isFetching}return s},P=(s=!1,t)=>{switch(t.type){case n:return t.isRegistering}return s},k=(s=!1,t)=>{switch(t.type){case C:return t.isConnecting}return s},g=(s,t)=>{switch(t.type){case x:return!1;case d:return t.registrationError;default:return s}},E=(s,t)=>{switch(t.type){case T:return t.authorizationUrl;default:return s}},w=(s,t)=>{switch(t.type){default:return s}},Z=(s={},t)=>{switch(t.type){case U:return t.connectionErrors}return s},ne=(s=!1,t)=>{switch(t.type){case D:return t.isConnecting}return s},pe=(0,X.UY)({connectionStatus:$,connectionStatusIsFetching:o,siteIsRegistering:P,userIsConnecting:k,registrationError:g,authorizationUrl:E,userConnectionData:w,connectedPlugins:ee,connectionErrors:Z,isOfflineMode:ne});var ge=e("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),Ee=e("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const Se={...{getAuthorizationUrl:{isFulfilled:(s,...t)=>{const I=!!s.authorizationUrl,B=(0,ge.Y)(Y).hasFinishedResolution("getAuthorizationUrl",t);return I&&!B&&(0,Ee.W)(Y).finishResolution("getAuthorizationUrl",t),I},*fulfill(s){const t=yield J.fetchAuthorizationUrl(s);yield J.setAuthorizationUrl(t.authorizeUrl)}}}},he={...{getConnectionStatus:s=>s.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:s=>s.siteIsRegistering||!1,getUserIsConnecting:s=>s.userIsConnecting||!1,getRegistrationError:s=>s.registrationError||!1,getAuthorizationUrl:s=>s.authorizationUrl||!1,getUserConnectionData:s=>s.userConnectionData||!1,getConnectedPlugins:s=>s.connectedPlugins||[],getConnectionErrors:s=>s.connectionErrors||[],getIsOfflineMode:s=>s.isOfflineMode||!1,getWpcomUser:s=>{var t,I;return(I=(t=s==null?void 0:s.userConnectionData)==null?void 0:t.currentUser)==null?void 0:I.wpcomUser},getBlogId:s=>{var t,I;return(I=(t=s==null?void 0:s.userConnectionData)==null?void 0:t.currentUser)==null?void 0:I.blogId}}};var xe=e("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");const Q=class{static mayBeInit(t,I){Q.store===null&&(Q.store=(0,xe.Z)(t,I),(0,X.z2)(Q.store))}};let se=Q;_e(se,"store",null);const Ie=se,le=window.JP_CONNECTION_INITIAL_STATE||((ie=(0,m.I4)())==null?void 0:ie.connection);le||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ie.mayBeInit(Y,{__experimentalUseThunks:!0,reducer:pe,actions:J,selectors:he,resolvers:Se,controls:te,initialState:le||{}})},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(h,u,e)=>{var m=e("../../packages/videopress/src/client/state/constants.js");function S(){const c=useSelect(l=>l(STORE_ID).getVideos()),n=useSelect(l=>l(STORE_ID).getUploadingVideos()),C=n.length>0,d="",x=useSelect(l=>l(STORE_ID).getUploadedVideoCount()),a=useSelect(l=>l(STORE_ID).getIsFetching()),T=useSelect(l=>l(STORE_ID).getIsFetchingUploadedVideoCount()),y=useSelect(l=>l(STORE_ID).getFirstUploadedVideoId()),i=useSelect(l=>l(STORE_ID).getFirstVideoProcessed()),r=useSelect(l=>l(STORE_ID).getDismissedFirstVideoPopover()),O=useSelect(l=>l(STORE_ID).getVideosQuery()||{}),A=useSelect(l=>l(STORE_ID).getPagination()),U=useSelect(l=>l(STORE_ID).getStorageUsed(),[]),D=useSelect(l=>l(STORE_ID).getVideosFilter()),f=useSelect(l=>l(STORE_ID).getUploadErrorVideos());return{items:c,uploading:n,isUploading:C,search:d,filter:D,uploadedVideoCount:x,isFetching:a,isFetchingUploadedVideoCount:T,firstUploadedVideoId:y,firstVideoProcessed:i,dismissedFirstVideoPopover:r,...O,...A,...U,uploadErrors:f,setPage:l=>dispatch(STORE_ID).setVideosQuery({page:l}),setSearch:l=>dispatch(STORE_ID).setVideosQuery({search:l}),setFilter:dispatch(STORE_ID).setVideosFilter}}const p=()=>{const c=useSelect(a=>a(STORE_ID).getLocalVideos()),n=useSelect(a=>a(STORE_ID).getUploadedLocalVideoCount()),C=useSelect(a=>a(STORE_ID).getIsFetchingLocalVideos()),d=useSelect(a=>a(STORE_ID).getLocalVideosQuery()||{}),x=useSelect(a=>a(STORE_ID).getLocalPagination());return{items:c,uploadedLocalVideoCount:n,isFetching:C,...d,...x,setPage:a=>dispatch(STORE_ID).setLocalVideosQuery({page:a})}},_=()=>useSelect(n=>n(STORE_ID).getVideosQuery()||{})},"../components/components/layout/col/index.tsx":(h,u,e)=>{e.d(u,{Z:()=>i});var m=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(p),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),n={};n.insert="head",n.singleton=!1;var C=_()(c.Z,n);const d=c.Z.locals||{},x=Number(d.smCols),a=Number(d.mdCols),T=Number(d.lgCols),i=r=>{const{children:O,tagName:A="div",className:U}=r,D=Math.min(x,typeof r.sm=="number"?r.sm:x),f=Math.min(x,typeof r.sm=="object"?r.sm.start:0),l=Math.min(x,typeof r.sm=="object"?r.sm.end:0),K=Math.min(a,typeof r.md=="number"?r.md:a),j=Math.min(a,typeof r.md=="object"?r.md.start:0),N=Math.min(a,typeof r.md=="object"?r.md.end:0),G=Math.min(T,typeof r.lg=="number"?r.lg:T),V=Math.min(T,typeof r.lg=="object"?r.lg.start:0),v=Math.min(T,typeof r.lg=="object"?r.lg.end:0),L=(0,m.Z)(U,{[d[`col-sm-${D}`]]:!(f&&l),[d[`col-sm-${f}-start`]]:f>0,[d[`col-sm-${l}-end`]]:l>0,[d[`col-md-${K}`]]:!(j&&N),[d[`col-md-${j}-start`]]:j>0,[d[`col-md-${N}-end`]]:N>0,[d[`col-lg-${G}`]]:!(V&&v),[d[`col-lg-${V}-start`]]:V>0,[d[`col-lg-${v}-end`]]:v>0});return(0,S.createElement)(A,{className:L},O)}},"../components/components/layout/container/index.tsx":(h,u,e)=>{e.d(u,{Z:()=>a});var m=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(p),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),n={};n.insert="head",n.singleton=!1;var C=_()(c.Z,n);const d=c.Z.locals||{},a=({children:T,fluid:y=!1,tagName:i="div",className:r,horizontalGap:O=1,horizontalSpacing:A=1})=>{const U=(0,S.useMemo)(()=>{const f=`calc( var(--horizontal-spacing) * ${A} )`,l=`calc( var(--horizontal-spacing) * ${O} )`;return{paddingTop:f,paddingBottom:f,rowGap:l}},[O,A]),D=(0,m.Z)(r,d.container,{[d.fluid]:y});return(0,S.createElement)(i,{className:D,style:U},T)}},"../script-data/src/utils.ts":(h,u,e)=>{e.d(u,{I4:()=>m});function m(){return window.JetpackScriptData}function S(){return m().site}function p(d=""){return`${m().site.admin_url}${d}`}function _(d=""){return p(`admin.php?page=jetpack${d}`)}function c(d=""){return p(`admin.php?page=my-jetpack${d}`)}function n(){var d,x,a;return(a=(x=(d=m().site.plan)==null?void 0:d.features)==null?void 0:x.active)!=null?a:[]}function C(d){return n().includes(d)}},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(h,u,e)=>{e.d(u,{Z:()=>T});var m=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(p),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),n={};n.insert="head",n.singleton=!1;var C=_()(c.Z,n);const d=c.Z.locals||{};var x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const a=(0,S.forwardRef)(({checked:y,onChange:i,className:r,...O},A)=>{const U=D=>{i==null||i(D.target.checked)};return(0,x.jsx)("input",{...O,ref:A,type:"checkbox",checked:y,className:(0,m.Z)(r,d.checkbox),onChange:U})});a.displayName="Checkbox";const T=a;try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:a.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch(y){}},"../../packages/videopress/src/client/admin/hooks/use-permission/index.ts":(h,u,e)=>{var a;e.d(u,{g:()=>x});var m=e("../api/index.jsx"),S=e("../script-data/src/utils.ts"),p=e("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),_=e("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../connection/state/store.jsx");const C=(window==null?void 0:window.JP_CONNECTION_INITIAL_STATE)||((a=(0,S.I4)())==null?void 0:a.connection)||{},d=({registrationNonce:T=C.registrationNonce,apiRoot:y=C.apiRoot,apiNonce:i=C.apiNonce,redirectUri:r,autoTrigger:O,from:A,skipUserConnection:U}={})=>{const{registerSite:D,connectUser:f,refreshConnectedPlugins:l}=(0,p.Z)(n.t),K=(0,_.Z)(b=>b(n.t).getRegistrationError()),{siteIsRegistering:j,userIsConnecting:N,userConnectionData:G,connectedPlugins:V,connectionErrors:v,isRegistered:L,isUserConnected:H,hasConnectedOwner:R,isOfflineMode:F}=(0,_.Z)(b=>({siteIsRegistering:b(n.t).getSiteIsRegistering(),userIsConnecting:b(n.t).getUserIsConnecting(),userConnectionData:b(n.t).getUserConnectionData(),connectedPlugins:b(n.t).getConnectedPlugins(),connectionErrors:b(n.t).getConnectionErrors(),isOfflineMode:b(n.t).getIsOfflineMode(),...b(n.t).getConnectionStatus()})),M=()=>{if(U){if(r)return window.location=r,Promise.resolve(r)}else return f({from:A,redirectUri:r});return Promise.resolve()},z=b=>(b&&b.preventDefault(),L?M():D({registrationNonce:T,redirectUri:r,from:A}).then(()=>M()));return(0,c.useEffect)(()=>{m.ZP.setApiRoot(y),m.ZP.setApiNonce(i)},[y,i]),(0,c.useEffect)(()=>{O&&!j&&!N&&z()},[]),{handleRegisterSite:z,handleConnectUser:M,refreshConnectedPlugins:l,isRegistered:L,isUserConnected:H,siteIsRegistering:j,userIsConnecting:N,registrationError:K,userConnectionData:G,hasConnectedOwner:R,connectedPlugins:V,connectionErrors:v,isOfflineMode:F}},x=()=>{const{isRegistered:T,hasConnectedOwner:y,isUserConnected:i}=d();return{isRegistered:T,hasConnectedOwner:y,isUserConnected:i,canPerformAction:T&&y&&i}}},"../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts":(h,u,e)=>{var m=e("../../packages/videopress/src/client/state/index.js");const S=()=>{var c,n,C;const p=useDispatch(STORE_ID),_=useSelect(d=>d(STORE_ID).getVideoPressSettings(),[]);return{settings:{videoPressVideosPrivateForSite:(c=_==null?void 0:_.videoPressVideosPrivateForSite)!=null?c:!1,siteIsPrivate:(n=_==null?void 0:_.siteIsPrivate)!=null?n:!1,siteType:(C=_==null?void 0:_.siteType)!=null?C:SITE_TYPE_JETPACK},onUpdate:d=>p.updateVideoPressSettings(d)}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(h,u,e)=>{e.d(u,{Z:()=>n});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(m),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(p),c=_()(S());c.push([h.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),c.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const n=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(h,u,e)=>{e.d(u,{Z:()=>n});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(m),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(p),c=_()(S());c.push([h.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),c.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const n=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(h,u,e)=>{e.d(u,{Z:()=>n});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(m),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(p),c=_()(S());c.push([h.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),c.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const n=c},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss":(h,u,e)=>{e.d(u,{Z:()=>n});var m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),S=e.n(m),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(p),c=_()(S());c.push([h.id,'.jEvjz2gQtT1vCRZpq0FJ{flex-shrink:0}.jEvjz2gQtT1vCRZpq0FJ.K7BZwOItK4opz_tJl_6z>svg{fill:var(--jp-white)}.lSp75nRVCANyLynkFAYK{background-color:var(--jp-gray-0)}.lSp75nRVCANyLynkFAYK .euRiK9kFl5U0j6nnVsB1:last-child{margin-bottom:0}.euRiK9kFl5U0j6nnVsB1{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;height:20px;line-height:20px;margin-top:var(--spacing-base)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]{border:1px solid var(--jp-green-40);padding:0 !important;margin-right:10px}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:checked::before{background:var(--jp-green-40)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:not(:checked)+.E5TxkJXJoBCg5Bzotc0i{display:none}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i{position:absolute;top:-1px;left:-1px;height:20px;width:20px;box-sizing:border-box}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i::after{position:absolute;left:8px;top:3px;width:5px;height:11px;border:solid var(--jp-white);border-width:0 1.5px 1.5px 0;transform:rotate(37deg);content:""}.EHwqpGExaCKP8e60NoBX{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.EHwqpGExaCKP8e60NoBX .components-tooltip.components-popover .components-popover__content{min-width:auto;max-width:256px;width:256px;white-space:break-spaces}',""]),c.locals={"filter-button":"jEvjz2gQtT1vCRZpq0FJ","is-active":"K7BZwOItK4opz_tJl_6z","filters-section":"lSp75nRVCANyLynkFAYK","checkbox-container":"euRiK9kFl5U0j6nnVsB1",checkbox:"V0bWOZcP_klJCyrbsp7R","checkbox-checkmark":"E5TxkJXJoBCg5Bzotc0i","title-adornment":"EHwqpGExaCKP8e60NoBX"};const n=c}}]);})();
