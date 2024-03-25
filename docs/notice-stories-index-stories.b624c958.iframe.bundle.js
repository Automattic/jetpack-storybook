"use strict";(()=>{var Fe=Object.defineProperty;var Ke=(h,r,o)=>r in h?Fe(h,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):h[r]=o;var pe=(h,r,o)=>(Ke(h,typeof r!="symbol"?r+"":r,o),o);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1321],{"../components/components/notice/stories/index.stories.jsx":(h,r,o)=>{var T,y,_,t,d,P,f,A,O,w,n,j;o.r(r),o.d(r,{__namedExportsOrder:()=>k,_default:()=>v,default:()=>u,error:()=>x,success:()=>S,warning:()=>b});var p=o("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),m=o("../components/components/button/index.tsx"),c=o("../components/components/notice/index.tsx"),a=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const u={title:"JS Packages/Components/Notice",component:c.Z,argTypes:{level:{control:{type:"select"},options:["info","success","warning","error"]},hideCloseButton:{control:{type:"boolean"}}}},l=g=>(0,a.jsx)(c.Z,{...g}),v=l.bind({});v.args={level:"info",title:"Improve your hovercraft",children:"Make your hovercraft better with HoverPack; the best hovercraft upgrade kit on the market.",onClose:()=>alert("Close clicked"),actions:[(0,a.jsx)(m.Z,{isPrimary:!0,children:"Install now"},"install"),(0,a.jsx)(p.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const b=l.bind({});b.args={level:"warning",title:"Your hovercraft is full of eels.",children:(0,a.jsx)("div",{children:"Either your vehicle needs to be cleared, or some kind of translation error has occurred."}),actions:[(0,a.jsx)(m.Z,{isPrimary:!0,children:"Start Bailing"},"bail"),(0,a.jsx)(p.Z,{href:"https://en.wikipedia.org/wiki/Hovercraft",children:"Learn more"},"learn-more")],hideCloseButton:!1};const S=l.bind({});S.args={level:"success",title:"Your hovercraft has been upgraded.",children:"Please enjoy your newer, cooler hovercraft.",onClose:()=>alert("Close clicked"),actions:[(0,a.jsx)(m.Z,{isPrimary:!0,children:"Start crafting"},"start")],hideCloseButton:!1};const x=l.bind({});x.args={level:"error",title:"The eels have stolen your hovercraft.",children:"We were unable to remove the eels from your hovercraft. Please contact the authorities, as the eels are armed and dangerous.",onClose:()=>alert("Close clicked"),actions:[(0,a.jsx)(p.Z,{href:"https://en.wikipedia.org/wiki/Eel",children:"Learn more"},"learn-more")],hideCloseButton:!1},v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:"args => <Notice {...args} />",...(_=(y=v.parameters)==null?void 0:y.docs)==null?void 0:_.source}}},b.parameters={...b.parameters,docs:{...(t=b.parameters)==null?void 0:t.docs,source:{originalSource:"args => <Notice {...args} />",...(P=(d=b.parameters)==null?void 0:d.docs)==null?void 0:P.source}}},S.parameters={...S.parameters,docs:{...(f=S.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Notice {...args} />",...(O=(A=S.parameters)==null?void 0:A.docs)==null?void 0:O.source}}},x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Notice {...args} />",...(j=(n=x.parameters)==null?void 0:n.docs)==null?void 0:j.source}}};const k=["_default","warning","success","error"]},"../../plugins/protect/src/js/components/notice/stories/index.stories.jsx":(h,r,o)=>{var I,R,U,X,z,L,F,K,J;o.r(r),o.d(r,{Default:()=>n,Dismissable:()=>j,Duration:()=>g,__namedExportsOrder:()=>M,default:()=>O});var p=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=o("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),c=o("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),a=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),u=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),l=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),v=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),b=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),S=o("../../plugins/protect/src/js/state/store.js"),x=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=o.n(x),T=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss"),y={};y.insert="head",y.singleton=!1;var _=k()(T.Z,y);const t=T.Z.locals||{};var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=c.__,f=({dismissable:C=!1,duration:W=null,floating:Q=!1,message:H,type:D="success"})=>{const{clearNotice:Z}=(0,m.Z)(S.t);let G;switch(D){case"success":G=a.Z;break;case"error":G=u.Z;break;case"info":default:G=l.Z}const B=(0,p.useCallback)(()=>{Z()},[Z]);return(0,p.useEffect)(()=>{let Y;return W&&(Y=setTimeout(Z,W)),()=>clearTimeout(Y)},[Z,W,H]),(0,d.jsxs)("div",{className:`${t.notice} ${t[`notice--${D}`]} ${Q?t["notice--floating"]:""}`,children:[(0,d.jsx)("div",{className:t.notice__icon,children:(0,d.jsx)(v.Z,{icon:G})}),(0,d.jsx)("div",{className:t.notice__message,children:H}),C&&(0,d.jsx)("button",{className:t.notice__close,"aria-label":P("Dismiss notice.","jetpack-protect"),onClick:B,children:(0,d.jsx)(v.Z,{icon:b.Z})})]})},A=f;f.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{dismissable:{defaultValue:{value:"false",computed:!1},required:!1},duration:{defaultValue:{value:"null",computed:!1},required:!1},floating:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'success'",computed:!1},required:!1}}};const O={title:"Plugins/Protect/Notice",component:A,parameters:{layout:"centered"},decorators:[C=>(0,d.jsx)("div",{style:{width:250},children:(0,d.jsx)(C,{})})]},w=C=>(0,d.jsx)(A,{...C}),n=w.bind({});n.args={type:"success",message:"Code is poetry."};const j=w.bind({});j.args={type:"success",dismissable:!0,message:"Dismiss this notice by clicking the close icon."};const g=w.bind({});g.args={type:"success",duration:5e3,message:"This notice will self-destruct in five seconds."},n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Notice {...args} />",...(U=(R=n.parameters)==null?void 0:R.docs)==null?void 0:U.source}}},j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:"args => <Notice {...args} />",...(L=(z=j.parameters)==null?void 0:z.docs)==null?void 0:L.source}}},g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Notice {...args} />",...(J=(K=g.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};const M=["Default","Dismissable","Duration"]},"../../plugins/protect/src/js/state/store.js":(h,r,o)=>{o.d(r,{t:()=>ue,N:()=>Xe});var p=o("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),m=o.n(p),c=o("../../../node_modules/.pnpm/@wordpress+api-fetch@6.50.0/node_modules/@wordpress/api-fetch/build-module/index.js"),a=o("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js");const u=a._n,l=a.__,v="SET_CREDENTIALS_STATE_IS_FETCHING",b="SET_CREDENTIALS_STATE",S="SET_STATUS",x="SET_STATUS_PROGRESS",k="START_SCAN_OPTIMISTICALLY",T="SET_STATUS_IS_FETCHING",y="SET_SCAN_IS_UNAVAILABLE",_="SET_SCAN_IS_ENQUEUING",t="SET_INSTALLED_PLUGINS",d="SET_INSTALLED_THEMES",P="SET_WP_VERSION",f="SET_JETPACK_SCAN",A="SET_PRODUCT_DATA",O="SET_THREAT_IS_UPDATING",w="SET_THREATS_ARE_FIXING",n="SET_MODAL",j="SET_NOTICE",g="CLEAR_NOTICE",M="SET_HAS_REQUIRED_PLAN",I="SET_ONBOARDING_PROGRESS",R="SET_WAF_IS_SEEN",U="SET_WAF_UPGRADE_IS_SEEN",X="SET_WAF_IS_ENABLED",z="SET_WAF_IS_UPDATING",L="SET_WAF_IS_TOGGLING",F="SET_WAF_CONFIG",K="SET_WAF_STATS",J=e=>({type:S,status:e}),C=e=>({type:x,currentProgress:e}),W=()=>({type:k}),Q=()=>({dispatch:e})=>{(0,c.Z)({path:"jetpack-protect/v1/check-plan",method:"GET"}).then(s=>e(ce(s)))},H=e=>(0,c.Z)({path:`jetpack-protect/v1/status${e?"?hard_refresh=true":""}`,method:"GET"}),D=(e=!1)=>async({dispatch:s})=>(s(oe(!0)),await new Promise((i,E)=>H(e).then(Z).then(N=>{s(ae(N.status==="unavailable")),s(J(m()(N))),i(N)}).catch(N=>{E(N)}).finally(()=>{s(oe(!1))}))),Z=(e,s=0)=>new Promise((i,E)=>{e.status==="unavailable"&&s<3?H(!0).then(N=>{setTimeout(()=>{Z(N,s+1).then(se=>i(se)).catch(se=>E(se))},5e3)}).catch(E):i(e)}),G=()=>async({dispatch:e})=>await new Promise((s,i)=>(e(B(!0)),(0,c.Z)({path:"jetpack-protect/v1/check-credentials",method:"POST"}).then(E=>{e(Y(E)),s(E)}).catch(E=>{i(E)}).finally(()=>{e(B(!1))}))),B=e=>({type:v,isFetching:e}),Y=e=>({type:b,credentials:e}),oe=e=>({type:T,status:e}),ae=e=>({type:y,status:e}),te=e=>({type:_,isEnqueuing:e}),me=e=>({type:t,plugins:e}),_e=e=>({type:d,themes:e}),ge=e=>({type:P,version:e}),Ee=e=>({type:f,scan:e}),q=(e,s)=>({type:O,payload:{threatId:e,isUpdating:s}}),ne=e=>({type:w,threatIds:e}),he=(e,s=()=>{})=>async({dispatch:i})=>(i(q(e,!0)),await new Promise(()=>(0,c.Z)({path:`jetpack-protect/v1/ignore-threat?threat_id=${e}`,method:"POST"}).then(()=>i(D())).then(()=>i(V({type:"success",message:l("Threat ignored","jetpack-protect")}))).catch(()=>i(V({type:"error",message:l("An error ocurred ignoring the threat.","jetpack-protect")}))).finally(()=>{i(q(e,!1)),s()}))),de=e=>async({dispatch:s})=>{const i=e.reduce((E,N)=>`${E}threat_ids[]=${N}&`,"jetpack-protect/v1/fix-threats-status?");return s(ne(e)),await(0,c.Z)({path:i,method:"GET"}).then(async E=>{const N=Object.values(E.threats);if(N.filter(re=>re.status==="in_progress").length>0)return await new Promise(()=>{setTimeout(()=>{s(de(e))},1e3)});if(!N.filter(re=>re.status==="fixed").length===e.length)throw"Not all threats could be fixed."}).then(()=>{s(D()),s(V({type:"success",message:(0,a.gB)(u("%s threat was fixed successfully","%s threats were fixed successfully",e.length,"jetpack-protect"),e.length)}))}).catch(()=>{s(V({type:"error",message:l("Not all threats could be fixed. Please contact our support.","jetpack-protect")}))}).finally(()=>{s(ne([]))})},ve=(e,s=()=>{})=>async({dispatch:i})=>(e.forEach(E=>{i(q(E,!0))}),await new Promise(()=>(0,c.Z)({path:`jetpack-protect/v1/fix-threats?threat_ids=${e}`,method:"POST",data:{threatIds:e}}).then(()=>i(V({type:"success",message:l("We're hard at work fixing this threat in the background. Please check back shortly.","jetpack-protect")}))).then(()=>{setTimeout(()=>i(de(e)),1e3)}).catch(()=>i(V({type:"error",message:l("Error fixing threats. Please contact support.","jetpack-protect")}))).finally(()=>{e.forEach(E=>{i(q(E,!1))}),s()}))),fe=(e=()=>{})=>async({dispatch:s})=>(s(te(!0)),await new Promise(()=>(0,c.Z)({path:"jetpack-protect/v1/scan",method:"POST"}).then(()=>{s(W()),setTimeout(()=>s(D(!0)),5e3)}).catch(()=>s(V({type:"error",message:l("An error ocurred enqueuing the scan","jetpack-protect")}))).finally(()=>{s(te(!1)),e()}))),je=e=>({type:n,payload:e}),V=e=>({type:j,payload:e}),be=()=>({type:g}),ce=e=>({type:M,hasRequiredPlan:e}),le={checkCredentials:G,setCredentials:Y,setCredentialsIsFetching:B,setStatus:J,setStatusProgress:C,startScanOptimistically:W,refreshStatus:D,setStatusIsFetching:oe,setScanIsEnqueuing:te,setInstalledPlugins:me,setInstalledThemes:_e,setwpVersion:ge,setJetpackScan:Ee,ignoreThreat:he,setModal:je,setNotice:V,clearNotice:be,fixThreats:ve,scan:fe,setThreatsAreFixing:ne,refreshPlan:Q,setHasRequiredPlan:ce,setScanIsUnavailable:ae,setOnboardingProgress:e=>({type:I,progress:e}),setWafIsEnabled:e=>({type:X,isEnabled:e}),setWafIsSeen:e=>({type:R,isSeen:e}),setWafUpgradeIsSeen:e=>({type:U,upgradeIsSeen:e}),setWafIsUpdating:e=>({type:z,isUpdating:e}),setWafIsToggling:e=>({type:L,isToggling:e}),setWafConfig:e=>({type:F,config:e}),setWafStats:e=>({type:K,stats:e})};var ie=o("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const Se=(e=null,s)=>{switch(s.type){case b:return s.credentials}return e},xe=(e=!1,s)=>{switch(s.type){case v:return s.isFetching}return e},Te=(e={},s)=>{switch(s.type){case S:return s.status;case x:return{...e,currentProgress:s.currentProgress};case k:return{...e,currentProgress:0,status:"optimistically_scanning"}}return e},ye=(e=!1,s)=>{switch(s.type){case T:return s.status}return e},Ae=(e=!1,s)=>{switch(s.type){case y:return s.status}return e},we=(e=!1,s)=>{switch(s.type){case _:return s.isEnqueuing}return e},Pe=(e={},s)=>{switch(s.type){case t:return s.plugins}return e},Oe=(e={},s)=>{switch(s.type){case d:return s.themes}return e},Ie=(e={},s)=>{switch(s.type){case P:return s.version}return e},Ne=(e={},s)=>{switch(s.type){case f:return s.scan}return e},ke=(e={},s)=>{switch(s.type){case O:return{...e,[s.payload.threatId]:s.payload.isUpdating}}return e},Ce=(e=[],s)=>{switch(s.type){case w:return s.threatIds}return e},Re=(e={},s)=>{switch(s.type){case n:return{...e,...s.payload}}return e},Le=(e={},s)=>{switch(s.type){case j:return{...e,...s.payload};case g:return{}}return e},De=(e=!1,s)=>{switch(s.type){case M:return s.hasRequiredPlan}return e},Ze=(e=null,s)=>{switch(s.type){case I:return s.progress}return e},Ge={wafSupported:null,bruteForceSupported:null,isSeen:!1,upgradeIsSeen:!1,isEnabled:!1,isUpdating:!1,isToggling:!1,config:void 0,stats:void 0},Me=(e=Ge,s)=>{switch(s.type){case R:return{...e,isSeen:s.isSeen};case U:return{...e,upgradeIsSeen:s.upgradeIsSeen};case X:return{...e,isEnabled:s.isEnabled};case F:return{...e,config:s.config};case K:return{...e,stats:s.stats};case z:return{...e,isUpdating:s.isUpdating};case L:return{...e,isToggling:s.isToggling}}return e},Ue=(0,ie.UY)({credentials:Se,credentialsIsFetching:xe,status:Te,statusIsFetching:ye,scanIsUnavailable:Ae,scanIsEnqueuing:we,installedPlugins:Pe,installedThemes:Oe,wpVersion:Ie,jetpackScan:Ne,threatsUpdating:ke,modal:Re,notice:Le,setThreatsFixing:Ce,hasRequiredPlan:De,onboardingProgress:Ze,waf:Me}),ze={getJetpackScan:{isFulfilled:e=>Object.keys(e==null?void 0:e.jetpackScan).length>0,fulfill:()=>async({dispatch:e})=>{const s=await(0,c.Z)({path:"/my-jetpack/v1/site/products/scan",method:"GET"});e(le.setJetpackScan(s))}}},We={getCredentials:e=>e.credentials||null,getCredentialsIsFetching:e=>e.credentialsIsFetching||!1,getInstalledPlugins:e=>e.installedPlugins||{},getInstalledThemes:e=>e.installedThemes||{},getStatus:e=>e.status||{},getStatusIsFetching:e=>e.statusIsFetching||!1,getScanIsUnavailable:e=>e.scanIsUnavailable||!1,getScanIsEnqueuing:e=>e.scanIsEnqueuing||!1,getWpVersion:e=>e.wpVersion||"",getJetpackScan:e=>e.jetpackScan||{},getThreatsUpdating:e=>e.threatsUpdating||{},getModalType:e=>{var s;return((s=e.modal)==null?void 0:s.type)||null},getModalProps:e=>{var s;return((s=e.modal)==null?void 0:s.props)||{}},getNotice:e=>e.notice||null,getThreatsAreFixing:e=>e.threatsAreFixing||[],hasRequiredPlan:e=>e.hasRequiredPlan||!1,getOnboardingProgress:e=>e.onboardingProgress||null,getWaf:e=>e.waf};var Be=o("../../../node_modules/.pnpm/@wordpress+data@9.23.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const $=class{static mayBeInit(s,i){$.store===null&&($.store=(0,Be.Z)(s,i),(0,ie.z2)($.store))}};let ee=$;pe(ee,"store",null);const Ve=ee,ue="jetpack-protect";function Xe(){Ve.mayBeInit(ue,{__experimentalUseThunks:!0,reducer:Ue,actions:le,selectors:We,resolvers:ze,initialState:m()(window.jetpackProtectInitialState)||{}})}},"../components/components/button/index.tsx":(h,r,o)=>{o.d(r,{Z:()=>A});var p=o("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),m=o("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),c=o("../../../node_modules/.pnpm/@wordpress+components@27.1.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),a=o("../../../node_modules/.pnpm/@wordpress+i18n@4.53.0/node_modules/@wordpress/i18n/build-module/index.js"),u=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),l=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),v=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),b=o.n(v),S=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=o.n(x),T=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),y={};y.insert="head",y.singleton=!1;var _=k()(T.Z,y);const t=T.Z.locals||{};var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const P=a.__,f=(0,S.forwardRef)((O,w)=>{var G,B;const{children:n,variant:j="primary",size:g="normal",weight:M="bold",icon:I,iconSize:R,disabled:U,isDestructive:X,isLoading:z,isExternalLink:L,className:F,text:K,fullWidth:J,...C}=O,W=b()(t.button,F,{[t.normal]:g==="normal",[t.small]:g==="small",[t.icon]:!!I,[t.loading]:z,[t.regular]:M==="regular",[t["full-width"]]:J,[t["is-icon-button"]]:!!I&&!n});C.ref=w;const Q=g==="normal"?20:16,H=L&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Z,{size:Q,icon:l.Z,className:t["external-icon"]}),(0,d.jsx)(p.Z,{as:"span",children:P("(opens in a new tab)","jetpack")})]}),D=L?"_blank":void 0,Z=(n==null?void 0:n[0])&&n[0]!==null&&((B=(G=n==null?void 0:n[0])==null?void 0:G.props)==null?void 0:B.className)!=="components-tooltip";return(0,d.jsxs)(m.ZP,{target:D,variant:j,className:b()(W,{"has-text":!!I&&Z}),icon:L?void 0:I,iconSize:R,disabled:U,"aria-disabled":U,isDestructive:X,text:K,...C,children:[z&&(0,d.jsx)(c.ZP,{}),(0,d.jsx)("span",{children:n}),H]})});f.displayName="Button";const A=f;try{f.displayName="Button",f.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:f.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(O){}},"../components/components/notice/index.tsx":(h,r,o)=>{o.d(r,{Z:()=>f});var p=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),m=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),c=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),a=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),u=o("../../../node_modules/.pnpm/@wordpress+icons@9.44.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),l=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),v=o.n(l),b=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=o.n(S),k=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss"),T={};T.insert="head",T.singleton=!1;var y=x()(k.Z,T);const _=k.Z.locals||{};var t=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const d=A=>{switch(A){case"error":return p.Z;case"warning":return p.Z;case"info":return m.Z;case"success":return c.Z;default:return p.Z}},P=({level:A,title:O,children:w,actions:n,hideCloseButton:j,onClose:g})=>{const M=v()(_.container,_[`is-${A}`]);return(0,t.jsxs)("div",{className:M,children:[(0,t.jsx)("div",{className:_["icon-wrapper"],children:(0,t.jsx)(a.Z,{icon:d(A),className:_.icon})}),(0,t.jsxs)("div",{className:_["main-content"],children:[(0,t.jsx)("div",{className:_.title,children:O}),w,n&&n.length>0&&(0,t.jsx)("div",{className:_["action-bar"],children:n.map((I,R)=>(0,t.jsx)("div",{className:_.action,children:I},R))})]}),!j&&(0,t.jsx)("button",{"aria-label":"close",className:_["close-button"],onClick:g,children:(0,t.jsx)(a.Z,{icon:u.Z})})]})};P.defaultProps={level:"info",hideCloseButton:!1};const f=P},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(h,r,o)=>{o.d(r,{Z:()=>l});var p=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=o.n(p),c=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=o.n(c),u=a()(m());u.push([h.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),u.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const l=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/notice/style.module.scss":(h,r,o)=>{o.d(r,{Z:()=>l});var p=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=o.n(p),c=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=o.n(c),u=a()(m());u.push([h.id,".wRv91q7J3n8WPRO2bdQd{display:flex;align-items:flex-start;font-size:var(--font-body);border:1px solid var(--jp-black);border-radius:4px;border-color:var(--jp-gray-5);border-left-width:6px;padding:24px 31px 27px 18px}.eBBYWoT3DHzb2ETUB7gQ{margin-right:20px;width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3)}.f9rM_jFcQhzZdQ4aLP2t{width:calc(var(--spacing-base)*3);height:calc(var(--spacing-base)*3);background-color:rgba(0,0,0,0);border:none;cursor:pointer;outline:none}@media screen and (max-width: 600px){.wRv91q7J3n8WPRO2bdQd{position:relative;padding-top:68px;box-shadow:0px 4px 8px rgba(0,0,0,.03),0px 1px 2px rgba(0,0,0,.06)}.eBBYWoT3DHzb2ETUB7gQ{position:absolute;top:24px;left:24px}.f9rM_jFcQhzZdQ4aLP2t{position:absolute;top:24px;right:24px}}.mcA20ooHC80GFPcATa_5{flex-grow:1}.KoKOKW3_hFtFmlzWeoGZ{font-weight:600;margin-bottom:8px}.Qzd24EOL0Ihv756LLJ94{display:flex;align-items:center;margin-top:20px}.Qzd24EOL0Ihv756LLJ94 a,.Qzd24EOL0Ihv756LLJ94 a:hover,.Qzd24EOL0Ihv756LLJ94 a:active,.Qzd24EOL0Ihv756LLJ94 a:focus{color:var(--jp-black)}.Qzd24EOL0Ihv756LLJ94>*{margin-right:24px}.ZSksMKiSApMWzna8kNT6{border-left-color:var(--jp-red)}.ZSksMKiSApMWzna8kNT6 .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-red)}.MLZdCYxPeNOslt9ykmNf{border-left-color:var(--jp-yellow-20)}.MLZdCYxPeNOslt9ykmNf .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-yellow-20)}.V0UlZv19790uDOeNlFQB{border-left-color:var(--black)}.V0UlZv19790uDOeNlFQB .HXRf4rhVKerbrnTaNHiK{fill:var(--black)}.ERt0pZRX_su4Hkpwod3r{border-left-color:var(--jp-green)}.ERt0pZRX_su4Hkpwod3r .HXRf4rhVKerbrnTaNHiK{fill:var(--jp-green)}",""]),u.locals={container:"wRv91q7J3n8WPRO2bdQd","icon-wrapper":"eBBYWoT3DHzb2ETUB7gQ","close-button":"f9rM_jFcQhzZdQ4aLP2t","main-content":"mcA20ooHC80GFPcATa_5",title:"KoKOKW3_hFtFmlzWeoGZ","action-bar":"Qzd24EOL0Ihv756LLJ94","is-error":"ZSksMKiSApMWzna8kNT6",icon:"HXRf4rhVKerbrnTaNHiK","is-warning":"MLZdCYxPeNOslt9ykmNf","is-info":"V0UlZv19790uDOeNlFQB","is-success":"ERt0pZRX_su4Hkpwod3r"};const l=u},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/notice/styles.module.scss":(h,r,o)=>{o.d(r,{Z:()=>l});var p=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=o.n(p),c=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=o.n(c),u=a()(m());u.push([h.id,".keGwj300uXCpdtmxbmvn{background-color:var(--jp-gray-90);color:var(--jp-white);display:flex;border-radius:var(--jp-border-radius);overflow:hidden}.keGwj300uXCpdtmxbmvn.o13AMJHaz2vXJtfZ0NOx{border-left:4px solid var(--jp-yellow-20);margin-bottom:calc(var(--spacing-base)*3)}.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{position:fixed;top:calc(var(--spacing-base)*6);right:calc(var(--spacing-base)*3);margin-left:calc(var(--spacing-base)*3)}@media(max-width: 782px){.keGwj300uXCpdtmxbmvn.ENM5dFdT3ohImOolPN2y{top:calc(var(--spacing-base)*8)}}.keGwj300uXCpdtmxbmvn a,.keGwj300uXCpdtmxbmvn a:link,.keGwj300uXCpdtmxbmvn a:hover,.keGwj300uXCpdtmxbmvn a:visited,.keGwj300uXCpdtmxbmvn a:active{color:var(--jp-white)}.b9REdQg5Zw38up_ANEd9{background-color:var(--jp-yellow-30);fill:var(--jp-white);display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5)}.Zq9M6ZWCHEPDUIp8OIwP .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-green-50)}.JcRun8IMVE0UbNqNsfgJ .b9REdQg5Zw38up_ANEd9{background-color:var(--jp-red)}.o13AMJHaz2vXJtfZ0NOx .b9REdQg5Zw38up_ANEd9{fill:var(--jp-yellow-50);background-color:var(--jp-yellow-5)}.umTgW4mNmF7PspcK9oI2{font-size:14px;padding:calc(var(--spacing-base)*1.75)}.o13AMJHaz2vXJtfZ0NOx .umTgW4mNmF7PspcK9oI2{color:var(--jp-gray-90);background-color:var(--jp-yellow-5)}.Zxuq09jQJ2pmGrWmO5ji{fill:var(--jp-gray);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:calc(var(--spacing-base)*1.5);background:rgba(0,0,0,0);border:none}",""]),u.locals={notice:"keGwj300uXCpdtmxbmvn","notice--info":"o13AMJHaz2vXJtfZ0NOx","notice--floating":"ENM5dFdT3ohImOolPN2y",notice__icon:"b9REdQg5Zw38up_ANEd9","notice--success":"Zq9M6ZWCHEPDUIp8OIwP","notice--error":"JcRun8IMVE0UbNqNsfgJ",notice__message:"umTgW4mNmF7PspcK9oI2",notice__close:"Zxuq09jQJ2pmGrWmO5ji"};const l=u}}]);})();
