"use strict";(()=>{var Ve=Object.defineProperty;var Je=(T,l,a)=>l in T?Ve(T,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):T[l]=a;var ue=(T,l,a)=>(Je(T,typeof l!="symbol"?l+"":l,a),a);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8519],{"../../plugins/protect/src/js/hooks/use-protect-data/index.js":(T,l,a)=>{a.d(l,{Z:()=>p});var U=a("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),S=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=a("../../plugins/protect/src/js/state/store.js");function p(){const{statusIsFetching:R,status:s,jetpackScan:A,hasRequiredPlan:y}=(0,U.Z)(r=>({statusIsFetching:r(o.t).getStatusIsFetching(),status:r(o.t).getStatus(),jetpackScan:r(o.t).getJetpackScan(),hasRequiredPlan:r(o.t).hasRequiredPlan()}));let _="error";R===!0?_="loading":s.status&&(_=s.status);const E=(0,S.useMemo)(()=>{var r,i;return((i=(r=s.core)==null?void 0:r.threats)==null?void 0:i.length)||0},[s.core]),g=(0,S.useMemo)(()=>(s.plugins||[]).reduce((r,i)=>r+i.threats.length,0),[s.plugins]),h=(0,S.useMemo)(()=>(s.themes||[]).reduce((r,i)=>r+i.threats.length,0),[s.themes]),I=(0,S.useMemo)(()=>{var r;return((r=s.files)==null?void 0:r.length)||0},[s.files]),f=(0,S.useMemo)(()=>{var r;return((r=s.database)==null?void 0:r.length)||0},[s.database]);return{numThreats:E+g+h+I+f,numCoreThreats:E,numPluginsThreats:g,numThemesThreats:h,numFilesThreats:I,numDatabaseThreats:f,lastChecked:s.lastChecked||null,errorCode:s.errorCode||null,errorMessage:s.errorMessage||null,core:s.core||{},plugins:s.plugins||[],themes:s.themes||[],files:{threats:s.files||[]},database:{threats:s.database||[]},currentStatus:_,hasUncheckedItems:s.hasUncheckedItems,jetpackScan:A,hasRequiredPlan:y}}},"../../plugins/protect/src/js/state/store.js":(T,l,a)=>{a.d(l,{t:()=>oe,N:()=>Ze});var U=a("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),S=a.n(U),o=a("../../../node_modules/.pnpm/@wordpress+api-fetch@6.50.0/node_modules/@wordpress/api-fetch/build-module/index.js"),p=a("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js");const R=p._n,s=p.__,A="SET_CREDENTIALS_STATE_IS_FETCHING",y="SET_CREDENTIALS_STATE",_="SET_STATUS",E="SET_STATUS_PROGRESS",g="START_SCAN_OPTIMISTICALLY",h="SET_STATUS_IS_FETCHING",I="SET_SCAN_IS_UNAVAILABLE",f="SET_SCAN_IS_ENQUEUING",k="SET_INSTALLED_PLUGINS",r="SET_INSTALLED_THEMES",i="SET_WP_VERSION",L="SET_JETPACK_SCAN",qe="SET_PRODUCT_DATA",G="SET_THREAT_IS_UPDATING",b="SET_THREATS_ARE_FIXING",v="SET_MODAL",x="SET_NOTICE",M="CLEAR_NOTICE",B="SET_HAS_REQUIRED_PLAN",H="SET_ONBOARDING_PROGRESS",Z="SET_WAF_IS_SEEN",V="SET_WAF_UPGRADE_IS_SEEN",J="SET_WAF_IS_ENABLED",q="SET_WAF_IS_UPDATING",z="SET_WAF_IS_TOGGLING",K="SET_WAF_CONFIG",$="SET_WAF_STATS",Q=e=>({type:_,status:e}),le=e=>({type:E,currentProgress:e}),Y=()=>({type:g}),ie=()=>({dispatch:e})=>{(0,o.Z)({path:"jetpack-protect/v1/check-plan",method:"GET"}).then(t=>e(re(t)))},X=e=>(0,o.Z)({path:`jetpack-protect/v1/status${e?"?hard_refresh=true":""}`,method:"GET"}),P=(e=!1)=>async({dispatch:t})=>(t(O(!0)),await new Promise((n,c)=>X(e).then(ee).then(u=>{t(se(u.status==="unavailable")),t(Q(S()(u))),n(u)}).catch(u=>{c(u)}).finally(()=>{t(O(!1))}))),ee=(e,t=0)=>new Promise((n,c)=>{e.status==="unavailable"&&t<3?X(!0).then(u=>{setTimeout(()=>{ee(u,t+1).then(C=>n(C)).catch(C=>c(C))},5e3)}).catch(c):n(e)}),Se=()=>async({dispatch:e})=>await new Promise((t,n)=>(e(F(!0)),(0,o.Z)({path:"jetpack-protect/v1/check-credentials",method:"POST"}).then(c=>{e(te(c)),t(c)}).catch(c=>{n(c)}).finally(()=>{e(F(!1))}))),F=e=>({type:A,isFetching:e}),te=e=>({type:y,credentials:e}),O=e=>({type:h,status:e}),se=e=>({type:I,status:e}),j=e=>({type:f,isEnqueuing:e}),de=e=>({type:k,plugins:e}),Te=e=>({type:r,themes:e}),_e=e=>({type:i,version:e}),pe=e=>({type:L,scan:e}),N=(e,t)=>({type:G,payload:{threatId:e,isUpdating:t}}),W=e=>({type:b,threatIds:e}),Ee=(e,t=()=>{})=>async({dispatch:n})=>(n(N(e,!0)),await new Promise(()=>(0,o.Z)({path:`jetpack-protect/v1/ignore-threat?threat_id=${e}`,method:"POST"}).then(()=>n(P())).then(()=>n(d({type:"success",message:s("Threat ignored","jetpack-protect")}))).catch(()=>n(d({type:"error",message:s("An error ocurred ignoring the threat.","jetpack-protect")}))).finally(()=>{n(N(e,!1)),t()}))),ne=e=>async({dispatch:t})=>{const n=e.reduce((c,u)=>`${c}threat_ids[]=${u}&`,"jetpack-protect/v1/fix-threats-status?");return t(W(e)),await(0,o.Z)({path:n,method:"GET"}).then(async c=>{const u=Object.values(c.threats);if(u.filter(D=>D.status==="in_progress").length>0)return await new Promise(()=>{setTimeout(()=>{t(ne(e))},1e3)});if(!u.filter(D=>D.status==="fixed").length===e.length)throw"Not all threats could be fixed."}).then(()=>{t(P()),t(d({type:"success",message:(0,p.gB)(R("%s threat was fixed successfully","%s threats were fixed successfully",e.length,"jetpack-protect"),e.length)}))}).catch(()=>{t(d({type:"error",message:s("Not all threats could be fixed. Please contact our support.","jetpack-protect")}))}).finally(()=>{t(W([]))})},ge=(e,t=()=>{})=>async({dispatch:n})=>(e.forEach(c=>{n(N(c,!0))}),await new Promise(()=>(0,o.Z)({path:`jetpack-protect/v1/fix-threats?threat_ids=${e}`,method:"POST",data:{threatIds:e}}).then(()=>n(d({type:"success",message:s("We're hard at work fixing this threat in the background. Please check back shortly.","jetpack-protect")}))).then(()=>{setTimeout(()=>n(ne(e)),1e3)}).catch(()=>n(d({type:"error",message:s("Error fixing threats. Please contact support.","jetpack-protect")}))).finally(()=>{e.forEach(c=>{n(N(c,!1))}),t()}))),he=(e=()=>{})=>async({dispatch:t})=>(t(j(!0)),await new Promise(()=>(0,o.Z)({path:"jetpack-protect/v1/scan",method:"POST"}).then(()=>{t(Y()),setTimeout(()=>t(P(!0)),5e3)}).catch(()=>t(d({type:"error",message:s("An error ocurred enqueuing the scan","jetpack-protect")}))).finally(()=>{t(j(!1)),e()}))),Ie=e=>({type:v,payload:e}),d=e=>({type:x,payload:e}),fe=()=>({type:M}),re=e=>({type:B,hasRequiredPlan:e}),ae={checkCredentials:Se,setCredentials:te,setCredentialsIsFetching:F,setStatus:Q,setStatusProgress:le,startScanOptimistically:Y,refreshStatus:P,setStatusIsFetching:O,setScanIsEnqueuing:j,setInstalledPlugins:de,setInstalledThemes:Te,setwpVersion:_e,setJetpackScan:pe,ignoreThreat:Ee,setModal:Ie,setNotice:d,clearNotice:fe,fixThreats:ge,scan:he,setThreatsAreFixing:W,refreshPlan:ie,setHasRequiredPlan:re,setScanIsUnavailable:se,setOnboardingProgress:e=>({type:H,progress:e}),setWafIsEnabled:e=>({type:J,isEnabled:e}),setWafIsSeen:e=>({type:Z,isSeen:e}),setWafUpgradeIsSeen:e=>({type:V,upgradeIsSeen:e}),setWafIsUpdating:e=>({type:q,isUpdating:e}),setWafIsToggling:e=>({type:z,isToggling:e}),setWafConfig:e=>({type:K,config:e}),setWafStats:e=>({type:$,stats:e})};var ce=a("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const me=(e=null,t)=>{switch(t.type){case y:return t.credentials}return e},Ae=(e=!1,t)=>{switch(t.type){case A:return t.isFetching}return e},ye=(e={},t)=>{switch(t.type){case _:return t.status;case E:return{...e,currentProgress:t.currentProgress};case g:return{...e,currentProgress:0,status:"optimistically_scanning"}}return e},Pe=(e=!1,t)=>{switch(t.type){case h:return t.status}return e},Ne=(e=!1,t)=>{switch(t.type){case I:return t.status}return e},we=(e=!1,t)=>{switch(t.type){case f:return t.isEnqueuing}return e},Ce=(e={},t)=>{switch(t.type){case k:return t.plugins}return e},Ue=(e={},t)=>{switch(t.type){case r:return t.themes}return e},Re=(e={},t)=>{switch(t.type){case i:return t.version}return e},ke=(e={},t)=>{switch(t.type){case L:return t.scan}return e},Fe=(e={},t)=>{switch(t.type){case G:return{...e,[t.payload.threatId]:t.payload.isUpdating}}return e},Oe=(e=[],t)=>{switch(t.type){case b:return t.threatIds}return e},je=(e={},t)=>{switch(t.type){case v:return{...e,...t.payload}}return e},We=(e={},t)=>{switch(t.type){case x:return{...e,...t.payload};case M:return{}}return e},De=(e=!1,t)=>{switch(t.type){case B:return t.hasRequiredPlan}return e},Le=(e=null,t)=>{switch(t.type){case H:return t.progress}return e},Ge={wafSupported:null,bruteForceSupported:null,isSeen:!1,upgradeIsSeen:!1,isEnabled:!1,isUpdating:!1,isToggling:!1,config:void 0,stats:void 0},be=(e=Ge,t)=>{switch(t.type){case Z:return{...e,isSeen:t.isSeen};case V:return{...e,upgradeIsSeen:t.upgradeIsSeen};case J:return{...e,isEnabled:t.isEnabled};case K:return{...e,config:t.config};case $:return{...e,stats:t.stats};case q:return{...e,isUpdating:t.isUpdating};case z:return{...e,isToggling:t.isToggling}}return e},ve=(0,ce.UY)({credentials:me,credentialsIsFetching:Ae,status:ye,statusIsFetching:Pe,scanIsUnavailable:Ne,scanIsEnqueuing:we,installedPlugins:Ce,installedThemes:Ue,wpVersion:Re,jetpackScan:ke,threatsUpdating:Fe,modal:je,notice:We,setThreatsFixing:Oe,hasRequiredPlan:De,onboardingProgress:Le,waf:be}),xe={getJetpackScan:{isFulfilled:e=>Object.keys(e==null?void 0:e.jetpackScan).length>0,fulfill:()=>async({dispatch:e})=>{const t=await(0,o.Z)({path:"/my-jetpack/v1/site/products/scan",method:"GET"});e(ae.setJetpackScan(t))}}},Me={getCredentials:e=>e.credentials||null,getCredentialsIsFetching:e=>e.credentialsIsFetching||!1,getInstalledPlugins:e=>e.installedPlugins||{},getInstalledThemes:e=>e.installedThemes||{},getStatus:e=>e.status||{},getStatusIsFetching:e=>e.statusIsFetching||!1,getScanIsUnavailable:e=>e.scanIsUnavailable||!1,getScanIsEnqueuing:e=>e.scanIsEnqueuing||!1,getWpVersion:e=>e.wpVersion||"",getJetpackScan:e=>e.jetpackScan||{},getThreatsUpdating:e=>e.threatsUpdating||{},getModalType:e=>{var t;return((t=e.modal)==null?void 0:t.type)||null},getModalProps:e=>{var t;return((t=e.modal)==null?void 0:t.props)||{}},getNotice:e=>e.notice||null,getThreatsAreFixing:e=>e.threatsAreFixing||[],hasRequiredPlan:e=>e.hasRequiredPlan||!1,getOnboardingProgress:e=>e.onboardingProgress||null,getWaf:e=>e.waf};var Be=a("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const m=class{static mayBeInit(t,n){m.store===null&&(m.store=(0,Be.Z)(t,n),(0,ce.z2)(m.store))}};let w=m;ue(w,"store",null);const He=w,oe="jetpack-protect";function Ze(){He.mayBeInit(oe,{__experimentalUseThunks:!0,reducer:ve,actions:ae,selectors:Me,resolvers:xe,initialState:S()(window.jetpackProtectInitialState)||{}})}}}]);})();