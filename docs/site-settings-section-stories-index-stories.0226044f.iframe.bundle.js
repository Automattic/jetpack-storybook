"use strict";(()=>{var ve=Object.defineProperty;var ke=(I,r,e)=>r in I?ve(I,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):I[r]=e;var ue=(I,r,e)=>(ke(I,typeof r!="symbol"?r+"":r,e),e);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3556],{"../../packages/videopress/src/client/admin/components/site-settings-section/stories/index.stories.tsx":(I,r,e)=>{var q,$,ee;e.r(r),e.d(r,{__namedExportsOrder:()=>oe,_default:()=>B,default:()=>ae});var S=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs"),T=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=e("../components/components/layout/container/index.tsx"),a=e("../components/components/layout/col/index.tsx"),t=e("../components/components/text/index.tsx"),c=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),E=e("../../packages/videopress/src/client/admin/hooks/use-permission/index.ts"),R=e("../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js"),x=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=(0,l.jsxs)(f.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)(f.UL,{x:"5",y:"7",width:"14",height:"1.5"}),(0,l.jsx)(f.UL,{x:"7",y:"11.25",width:"10",height:"1.5"}),(0,l.jsx)(f.UL,{x:"9",y:"15.5",width:"6",height:"1.5"})]}),j=null;var P=e("../../packages/videopress/src/client/state/constants.js");function U(){const o=useSelect(y=>y(STORE_ID).getUsers()),w=useSelect(y=>y(STORE_ID).getUsersPagination());return{items:o,...w}}var d=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),N=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),b=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=e.n(b),L=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss"),V={};V.insert="head",V.singleton=!1;var Z=Y()(L.Z,V);const D=L.Z.locals||{},k=null,M=o=>{const{isActive:w,...y}=o;return _jsx(Button,{variant:w?"primary":"secondary",className:classnames(styles["filter-button"],{[styles["is-active"]]:w}),icon:filterIcon,weight:"regular",...y,children:k("Filters","jetpack-videopress-pkg")})},J=o=>(0,l.jsx)(_.ZP,{position:"middle center",text:o.message,children:(0,l.jsx)("span",{className:D["title-adornment"],children:(0,l.jsx)(i.Z,{icon:h.Z})})}),O=o=>(0,l.jsxs)("label",{htmlFor:o.for,className:D["checkbox-container"],children:[(0,l.jsx)(N.Z,{id:o.for,className:D.checkbox,onChange:o.onChange,checked:o.checked,disabled:o.disabled}),(0,l.jsx)("span",{className:D["checkbox-checkmark"]}),(0,l.jsx)(t.ZP,{variant:"body-small",children:o.label}),o.disabledReason&&(0,l.jsx)(J,{message:o.disabledReason})]}),v=o=>{const[w]=useBreakpointMatch("sm"),y=(u,p)=>{var A,W;return((W=(A=o==null?void 0:o.filter)==null?void 0:A[u])==null?void 0:W[p])===!0};return _jsx("div",{className:classnames(styles["filters-section"],o.className),children:_jsxs(Container,{horizontalSpacing:w?2:4,horizontalGap:2,children:[_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:k("Uploader","jetpack-videopress-pkg")}),o.uploaders.map(u=>_jsx(O,{label:u.name,for:`uploader-${u.id}`,onChange:p=>{var A;return(A=o.onChange)==null?void 0:A.call(o,VIDEO_FILTER_UPLOADER,u.id,p)},checked:y(VIDEO_FILTER_UPLOADER,u.id)},u.id))]}),_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:k("Privacy","jetpack-videopress-pkg")}),_jsx(O,{for:"filter-public",label:k("Public","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PUBLIC),u)},checked:y(VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PUBLIC))}),_jsx(O,{for:"filter-private",label:k("Private","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PRIVATE),u)},checked:y(VIDEO_FILTER_PRIVACY,VIDEO_PRIVACY_LEVELS.indexOf(VIDEO_PRIVACY_LEVEL_PRIVATE))})]}),_jsxs(Col,{sm:4,md:4,lg:4,children:[_jsx(Text,{variant:"body-extra-small-bold",weight:"bold",children:k("Rating","jetpack-videopress-pkg")}),_jsx(O,{for:"filter-g",label:k("G","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_G,u)},checked:y(VIDEO_FILTER_RATING,VIDEO_RATING_G)}),_jsx(O,{for:"filter-pg-13",label:k("PG-13","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_PG_13,u)},checked:y(VIDEO_FILTER_RATING,VIDEO_RATING_PG_13)}),_jsx(O,{for:"filter-r",label:k("R","jetpack-videopress-pkg"),onChange:u=>{var p;return(p=o.onChange)==null?void 0:p.call(o,VIDEO_FILTER_RATING,VIDEO_RATING_R_17,u)},checked:y(VIDEO_FILTER_RATING,VIDEO_RATING_R_17)})]})]})})},G=o=>{const{setFilter:w,filter:y}=useVideos(),u=useSearchParams(),p=(...W)=>{u.deleteParam("page"),u.update(),w(...W)},{items:A}=useUsers();return _jsx(v,{...o,onChange:p,uploaders:A,filter:y})};try{M.displayName="FilterButton",M.__docgenInfo={description:"",displayName:"FilterButton",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"]={docgenInfo:M.__docgenInfo,name:"FilterButton",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"})}catch(o){}try{O.displayName="CheckboxCheckmark",O.__docgenInfo={description:"",displayName:"CheckboxCheckmark",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},for:{defaultValue:null,description:"",name:"for",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},disabledReason:{defaultValue:null,description:"",name:"disabledReason",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"]={docgenInfo:O.__docgenInfo,name:"CheckboxCheckmark",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"})}catch(o){}try{v.displayName="FilterSection",v.__docgenInfo={description:"",displayName:"FilterSection",props:{uploaders:{defaultValue:null,description:"",name:"uploaders",required:!0,type:{name:"{ id: number; name: string; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'(filter: "uploader" | "privacy" | "rating", value: number | "PG-13" | "G" | "R-17", checked: boolean) => void'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"FilterObject"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"]={docgenInfo:v.__docgenInfo,name:"FilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"})}catch(o){}try{G.displayName="ConnectFilterSection",G.__docgenInfo={description:"",displayName:"ConnectFilterSection",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"]={docgenInfo:G.__docgenInfo,name:"ConnectFilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"})}catch(o){}const de="atomic",H="simple",ce="jetpack",X=c.__,K=({videoPressVideosPrivateForSite:o,siteIsPrivate:w,siteType:y,onPrivacyChange:u})=>{const{canPerformAction:p}=(0,E.g)(),A=w&&y===de,W=!p||A,ne=A?X("You cannot change this setting because your site is private. You can only choose the video privacy default on public sites.","jetpack-videopress-pkg"):null;return(0,l.jsxs)(g.Z,{horizontalSpacing:0,horizontalGap:0,children:[(0,l.jsx)(a.Z,{children:(0,l.jsx)(t.ZP,{variant:"headline-small",mb:1,children:X("Settings","jetpack-videopress-pkg")})}),(0,l.jsx)(a.Z,{sm:12,md:12,lg:12,children:(0,l.jsx)(O,{for:"settings-site-privacy",label:X("Video Privacy: Restrict views to members of this site","jetpack-videopress-pkg"),onChange:u,checked:o,disabled:W,disabledReason:ne})})]})},le=()=>{const{settings:o,onUpdate:w}=useVideoPressSettings(),{videoPressVideosPrivateForSite:y,siteIsPrivate:u,siteType:p}=o;return _jsx(K,{videoPressVideosPrivateForSite:y,siteIsPrivate:u,siteType:p,onPrivacyChange:A=>{w({videoPressVideosPrivateForSite:A})}})},Q=K,ae={title:"Packages/VideoPress/Site Settings",component:Q,argTypes:{}},B=(o=>(0,l.jsx)(Q,{...o})).bind({});B.args={onPrivacyChange:(0,S.aD)("onPrivacyChange")},B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:"args => <SettingsSection {...args} />",...(ee=($=B.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const oe=["_default"]},"../connection/state/store.jsx":(I,r,e)=>{e.d(r,{t:()=>K});var S=e("../api/index.jsx");const T="SET_CONNECTION_STATUS",g="SET_CONNECTION_STATUS_IS_FETCHING",a="FETCH_CONNECTION_STATUS",t="SET_SITE_IS_REGISTERING",c="SET_USER_IS_CONNECTING",E="SET_REGISTRATION_ERROR",R="CLEAR_REGISTRATION_ERROR",_="REGISTER_SITE",i="SET_AUTHORIZATION_URL",h="CONNECT_USER",x="DISCONNECT_USER_SUCCESS",f="FETCH_AUTHORIZATION_URL",l="SET_CONNECTED_PLUGINS",m="REFRESH_CONNECTED_PLUGINS",j="SET_CONNECTION_ERRORS",P="SET_IS_OFFLINE_MODE",U=s=>({type:T,connectionStatus:s}),d=s=>({type:g,isFetching:s}),N=()=>({type:a}),b=s=>({type:t,isRegistering:s}),Y=s=>({type:c,isConnecting:s}),L=()=>({type:x}),V=s=>({type:E,registrationError:s}),Z=()=>({type:R}),D=s=>({type:i,authorizationUrl:s}),k=s=>({type:f,redirectUri:s}),M=s=>({type:l,connectedPlugins:s}),J=s=>({type:j,connectionErrors:s}),O=s=>({type:P,isOfflineMode:s});function*v({from:s,redirectFunc:n,redirectUri:C}={}){yield Y(!0),yield{type:h,from:s,redirectFunc:n,redirectUri:C}}function*G({registrationNonce:s,redirectUri:n,from:C=""}){yield Z(),yield b(!0);try{const F=yield{type:_,registrationNonce:s,redirectUri:n,from:C};return yield U({isRegistered:!0}),yield D(F.authorizeUrl),yield b(!1),Promise.resolve(F)}catch(F){return yield V(F),yield b(!1),Promise.reject(F)}}const H={setConnectionStatus:U,setConnectionStatusIsFetching:d,fetchConnectionStatus:N,fetchAuthorizationUrl:k,setSiteIsRegistering:b,setUserIsConnecting:Y,setRegistrationError:V,clearRegistrationError:Z,setAuthorizationUrl:D,registerSite:G,connectUser:v,disconnectUserSuccess:L,setConnectedPlugins:M,refreshConnectedPlugins:()=>async({dispatch:s})=>await new Promise(n=>S.ZP.fetchConnectedPlugins().then(C=>{s(M(C)),n(C)})),setConnectionErrors:J,setIsOfflineMode:O};var ce=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/factory.js");const K="jetpack-connection",le=({registrationNonce:s,redirectUri:n,from:C})=>S.ZP.registerSite(s,n,C),Q=(0,ce.R)(({resolveSelect:s})=>({from:n,redirectFunc:C,redirectUri:F}={})=>new Promise((Te,xe)=>{s(K).getAuthorizationUrl(F).then(te=>{const Ce=C||(ye=>window.location.assign(ye)),_e=new URL(te);n&&_e.searchParams.set("from",encodeURIComponent(n));const me=_e.toString();Ce(me),Te(me)}).catch(te=>{xe(te)})})),ie={FETCH_AUTHORIZATION_URL:({redirectUri:s})=>S.ZP.fetchAuthorizationUrl(s),REGISTER_SITE:le,CONNECT_USER:Q};var B=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");const oe=(s={},n)=>{switch(n.type){case T:return{...s,...n.connectionStatus};case x:return{...s,isUserConnected:!1}}return s},q=(s={},n)=>{switch(n.type){case l:return n.connectedPlugins}return s},$=(s=!1,n)=>{switch(n.type){case g:return n.isFetching}return s},ee=(s=!1,n)=>{switch(n.type){case t:return n.isRegistering}return s},o=(s=!1,n)=>{switch(n.type){case c:return n.isConnecting}return s},w=(s,n)=>{switch(n.type){case R:return!1;case E:return n.registrationError;default:return s}},y=(s,n)=>{switch(n.type){case i:return n.authorizationUrl;default:return s}},u=(s,n)=>{switch(n.type){default:return s}},p=(s={},n)=>{switch(n.type){case j:return n.connectionErrors}return s},A=(s=!1,n)=>{switch(n.type){case P:return n.isConnecting}return s},ne=(0,B.UY)({connectionStatus:oe,connectionStatusIsFetching:$,siteIsRegistering:ee,userIsConnecting:o,registrationError:w,authorizationUrl:y,userConnectionData:u,connectedPlugins:q,connectionErrors:p,isOfflineMode:A});var pe=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js"),ge=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");const Ee={...{getAuthorizationUrl:{isFulfilled:(s,...n)=>{const C=!!s.authorizationUrl,F=(0,pe.Y)(K).hasFinishedResolution("getAuthorizationUrl",n);return C&&!F&&(0,ge.W)(K).finishResolution("getAuthorizationUrl",n),C},*fulfill(s){const n=yield H.fetchAuthorizationUrl(s);yield H.setAuthorizationUrl(n.authorizeUrl)}}}},Se={...{getConnectionStatus:s=>s.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:s=>s.siteIsRegistering||!1,getUserIsConnecting:s=>s.userIsConnecting||!1,getRegistrationError:s=>s.registrationError||!1,getAuthorizationUrl:s=>s.authorizationUrl||!1,getUserConnectionData:s=>s.userConnectionData||!1,getConnectedPlugins:s=>s.connectedPlugins||[],getConnectionErrors:s=>s.connectionErrors||[],getIsOfflineMode:s=>s.isOfflineMode||!1,getWpcomUser:s=>{var n,C;return(C=(n=s==null?void 0:s.userConnectionData)==null?void 0:n.currentUser)==null?void 0:C.wpcomUser},getBlogId:s=>{var n,C;return(C=(n=s==null?void 0:s.userConnectionData)==null?void 0:n.currentUser)==null?void 0:C.blogId}}};var he=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");const z=class{static mayBeInit(n,C){z.store===null&&(z.store=(0,he.Z)(n,C),(0,B.z2)(z.store))}};let se=z;ue(se,"store",null);const Ie=se,re=window.JP_CONNECTION_INITIAL_STATE;re||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),Ie.mayBeInit(K,{__experimentalUseThunks:!0,reducer:ne,actions:H,selectors:Se,resolvers:Ee,controls:ie,initialState:re||{}})},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(I,r,e)=>{var S=e("../../packages/videopress/src/client/state/constants.js");function T(){const t=useSelect(d=>d(STORE_ID).getVideos()),c=useSelect(d=>d(STORE_ID).getUploadingVideos()),E=c.length>0,R="",_=useSelect(d=>d(STORE_ID).getUploadedVideoCount()),i=useSelect(d=>d(STORE_ID).getIsFetching()),h=useSelect(d=>d(STORE_ID).getIsFetchingUploadedVideoCount()),x=useSelect(d=>d(STORE_ID).getFirstUploadedVideoId()),f=useSelect(d=>d(STORE_ID).getFirstVideoProcessed()),l=useSelect(d=>d(STORE_ID).getDismissedFirstVideoPopover()),m=useSelect(d=>d(STORE_ID).getVideosQuery()||{}),j=useSelect(d=>d(STORE_ID).getPagination()),P=useSelect(d=>d(STORE_ID).getStorageUsed(),[]),U=useSelect(d=>d(STORE_ID).getVideosFilter());return{items:t,uploading:c,isUploading:E,search:R,filter:U,uploadedVideoCount:_,isFetching:i,isFetchingUploadedVideoCount:h,firstUploadedVideoId:x,firstVideoProcessed:f,dismissedFirstVideoPopover:l,...m,...j,...P,setPage:d=>dispatch(STORE_ID).setVideosQuery({page:d}),setSearch:d=>dispatch(STORE_ID).setVideosQuery({search:d}),setFilter:dispatch(STORE_ID).setVideosFilter}}const g=()=>{const t=useSelect(i=>i(STORE_ID).getLocalVideos()),c=useSelect(i=>i(STORE_ID).getUploadedLocalVideoCount()),E=useSelect(i=>i(STORE_ID).getIsFetchingLocalVideos()),R=useSelect(i=>i(STORE_ID).getLocalVideosQuery()||{}),_=useSelect(i=>i(STORE_ID).getLocalPagination());return{items:t,uploadedLocalVideoCount:c,isFetching:E,...R,..._,setPage:i=>dispatch(STORE_ID).setLocalVideosQuery({page:i})}},a=()=>useSelect(c=>c(STORE_ID).getVideosQuery()||{})},"../components/components/layout/col/index.tsx":(I,r,e)=>{e.d(r,{Z:()=>l});var S=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),T=e.n(S),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),E={};E.insert="head",E.singleton=!1;var R=t()(c.Z,E);const _=c.Z.locals||{},i=Number(_.smCols),h=Number(_.mdCols),x=Number(_.lgCols),l=m=>{const{children:j,tagName:P="div",className:U}=m,d=Math.min(i,typeof m.sm=="number"?m.sm:i),N=Math.min(i,typeof m.sm=="object"?m.sm.start:0),b=Math.min(i,typeof m.sm=="object"?m.sm.end:0),Y=Math.min(h,typeof m.md=="number"?m.md:h),L=Math.min(h,typeof m.md=="object"?m.md.start:0),V=Math.min(h,typeof m.md=="object"?m.md.end:0),Z=Math.min(x,typeof m.lg=="number"?m.lg:x),D=Math.min(x,typeof m.lg=="object"?m.lg.start:0),k=Math.min(x,typeof m.lg=="object"?m.lg.end:0),M=T()(U,{[_[`col-sm-${d}`]]:!(N&&b),[_[`col-sm-${N}-start`]]:N>0,[_[`col-sm-${b}-end`]]:b>0,[_[`col-md-${Y}`]]:!(L&&V),[_[`col-md-${L}-start`]]:L>0,[_[`col-md-${V}-end`]]:V>0,[_[`col-lg-${Z}`]]:!(D&&k),[_[`col-lg-${D}-start`]]:D>0,[_[`col-lg-${k}-end`]]:k>0});return(0,g.createElement)(P,{className:M},j)}},"../components/components/layout/container/index.tsx":(I,r,e)=>{e.d(r,{Z:()=>h});var S=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),T=e.n(S),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),E={};E.insert="head",E.singleton=!1;var R=t()(c.Z,E);const _=c.Z.locals||{},h=({children:x,fluid:f=!1,tagName:l="div",className:m,horizontalGap:j=1,horizontalSpacing:P=1})=>{const U=(0,g.useMemo)(()=>{const N=`calc( var(--horizontal-spacing) * ${P} )`,b=`calc( var(--horizontal-spacing) * ${j} )`;return{paddingTop:N,paddingBottom:N,rowGap:b}},[j,P]),d=T()(m,_.container,{[_.fluid]:f});return(0,g.createElement)(l,{className:d,style:U},x)}},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(I,r,e)=>{e.d(r,{Z:()=>x});var S=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),T=e.n(S),g=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),E={};E.insert="head",E.singleton=!1;var R=t()(c.Z,E);const _=c.Z.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const h=(0,g.forwardRef)(({checked:f,onChange:l,className:m,...j},P)=>{const U=d=>{l==null||l(d.target.checked)};return(0,i.jsx)("input",{...j,ref:P,type:"checkbox",checked:f,className:T()(m,_.checkbox),onChange:U})});h.displayName="Checkbox";const x=h;try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:h.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch(f){}},"../../packages/videopress/src/client/admin/hooks/use-permission/index.ts":(I,r,e)=>{e.d(r,{g:()=>R});var S=e("../api/index.jsx"),T=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),g=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=e("../connection/state/store.jsx");const c=window!=null&&window.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},E=({registrationNonce:_=c.registrationNonce,apiRoot:i=c.apiRoot,apiNonce:h=c.apiNonce,redirectUri:x,autoTrigger:f,from:l,skipUserConnection:m}={})=>{const{registerSite:j,connectUser:P,refreshConnectedPlugins:U}=(0,T.Z)(t.t),d=(0,g.Z)(v=>v(t.t).getRegistrationError()),{siteIsRegistering:N,userIsConnecting:b,userConnectionData:Y,connectedPlugins:L,connectionErrors:V,isRegistered:Z,isUserConnected:D,hasConnectedOwner:k,isOfflineMode:M}=(0,g.Z)(v=>({siteIsRegistering:v(t.t).getSiteIsRegistering(),userIsConnecting:v(t.t).getUserIsConnecting(),userConnectionData:v(t.t).getUserConnectionData(),connectedPlugins:v(t.t).getConnectedPlugins(),connectionErrors:v(t.t).getConnectionErrors(),isOfflineMode:v(t.t).getIsOfflineMode(),...v(t.t).getConnectionStatus()})),J=()=>{if(m){if(x)return window.location=x,Promise.resolve(x)}else return P({from:l,redirectUri:x});return Promise.resolve()},O=v=>(v&&v.preventDefault(),Z?J():j({registrationNonce:_,redirectUri:x,from:l}).then(()=>J()));return(0,a.useEffect)(()=>{S.ZP.setApiRoot(i),S.ZP.setApiNonce(h)},[i,h]),(0,a.useEffect)(()=>{f&&!N&&!b&&O()},[]),{handleRegisterSite:O,handleConnectUser:J,refreshConnectedPlugins:U,isRegistered:Z,isUserConnected:D,siteIsRegistering:N,userIsConnecting:b,registrationError:d,userConnectionData:Y,hasConnectedOwner:k,connectedPlugins:L,connectionErrors:V,isOfflineMode:M}},R=()=>{const{isRegistered:_,hasConnectedOwner:i,isUserConnected:h}=E();return{isRegistered:_,hasConnectedOwner:i,isUserConnected:h,canPerformAction:_&&i&&h}}},"../../packages/videopress/src/client/admin/hooks/use-videopress-settings/index.ts":(I,r,e)=>{var S=e("../../packages/videopress/src/client/state/index.js");const T=()=>{var t,c,E;const g=useDispatch(STORE_ID),a=useSelect(R=>R(STORE_ID).getVideoPressSettings(),[]);return{settings:{videoPressVideosPrivateForSite:(t=a==null?void 0:a.videoPressVideosPrivateForSite)!=null?t:!1,siteIsPrivate:(c=a==null?void 0:a.siteIsPrivate)!=null?c:!1,siteType:(E=a==null?void 0:a.siteType)!=null?E:SITE_TYPE_JETPACK},onUpdate:R=>g.updateVideoPressSettings(R)}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(I,r,e)=>{e.d(r,{Z:()=>c});var S=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=e.n(S),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(g),t=a()(T());t.push([I.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),t.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const c=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(I,r,e)=>{e.d(r,{Z:()=>c});var S=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=e.n(S),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(g),t=a()(T());t.push([I.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),t.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const c=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(I,r,e)=>{e.d(r,{Z:()=>c});var S=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=e.n(S),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(g),t=a()(T());t.push([I.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),t.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const c=t},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss":(I,r,e)=>{e.d(r,{Z:()=>c});var S=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=e.n(S),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(g),t=a()(T());t.push([I.id,'.jEvjz2gQtT1vCRZpq0FJ{flex-shrink:0}.jEvjz2gQtT1vCRZpq0FJ.K7BZwOItK4opz_tJl_6z>svg{fill:var(--jp-white)}.lSp75nRVCANyLynkFAYK{background-color:var(--jp-gray-0)}.lSp75nRVCANyLynkFAYK .euRiK9kFl5U0j6nnVsB1:last-child{margin-bottom:0}.euRiK9kFl5U0j6nnVsB1{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;height:20px;line-height:20px;margin-top:var(--spacing-base)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]{border:1px solid var(--jp-green-40);padding:0 !important;margin-right:10px}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:checked::before{background:var(--jp-green-40)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:not(:checked)+.E5TxkJXJoBCg5Bzotc0i{display:none}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i{position:absolute;top:-1px;left:-1px;height:20px;width:20px;box-sizing:border-box}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i::after{position:absolute;left:8px;top:3px;width:5px;height:11px;border:solid var(--jp-white);border-width:0 1.5px 1.5px 0;transform:rotate(37deg);content:""}.EHwqpGExaCKP8e60NoBX{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.EHwqpGExaCKP8e60NoBX .components-tooltip.components-popover .components-popover__content{min-width:auto;max-width:256px;width:256px;white-space:break-spaces}',""]),t.locals={"filter-button":"jEvjz2gQtT1vCRZpq0FJ","is-active":"K7BZwOItK4opz_tJl_6z","filters-section":"lSp75nRVCANyLynkFAYK","checkbox-container":"euRiK9kFl5U0j6nnVsB1",checkbox:"V0bWOZcP_klJCyrbsp7R","checkbox-checkmark":"E5TxkJXJoBCg5Bzotc0i","title-adornment":"EHwqpGExaCKP8e60NoBX"};const c=t}}]);})();
