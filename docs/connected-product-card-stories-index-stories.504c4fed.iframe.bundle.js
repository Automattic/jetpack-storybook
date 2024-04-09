"use strict";(()=>{var q=(u,o,e)=>{if(!o.has(u))throw TypeError("Cannot "+e)};var s=(u,o,e)=>(q(u,o,"read from private field"),e?e.call(u):o.get(u)),x=(u,o,e)=>{if(o.has(u))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(u):o.set(u,e)},D=(u,o,e,r)=>(q(u,o,"write to private field"),r?r.call(u,e):o.set(u,e),e);var A=(u,o,e)=>(q(u,o,"access private method"),e);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5462],{"../../packages/my-jetpack/_inc/components/connected-product-card/stories/index.stories.jsx":(u,o,e)=>{var l,c,f;e.r(o),e.d(o,{Default:()=>_,__namedExportsOrder:()=>i,default:()=>T});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/react-router-dom@6.6.2_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js"),h=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js"),d=e("../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx"),M=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),E=e("../../packages/my-jetpack/_inc/components/product-detail-card/stories/utils.js"),k=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");window.myJetpackRest={};const R=(0,E.As)(),T={title:"Packages/My Jetpack/Connected Product Card",component:d.Z,argTypes:{slug:{options:(0,E.h7)(),control:{type:"select"}},status:{options:Object.values(M.N),control:{type:"select"}}}},_=(y=>(0,k.jsx)(m.UT,{children:(0,k.jsx)(h.Z5,{children:(0,k.jsx)(h.AW,{path:"/",element:(0,k.jsx)(d.Z,{...y})})})})).bind({});_.parameters={mockData:R},_.args={admin:!1,slug:"backup"},_.parameters={..._.parameters,docs:{...(l=_.parameters)==null?void 0:l.docs,source:{originalSource:`args => <HashRouter>
        <Routes>
            <Route path="/" element={<ConnectedProductCard {...args} />} />
        </Routes>
    </HashRouter>`,...(f=(c=_.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const i=["Default"]},"../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js":(u,o,e)=>{var i,l,c,f,y,w,J,S,P,p,j,L,Q,I,tt,V;e.d(o,{D:()=>b});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=(J=class extends null{constructor(t){super();x(this,y);x(this,i,void 0);x(this,l,void 0);x(this,c,void 0);x(this,f,void 0);this.mutationId=t.mutationId,D(this,l,t.defaultOptions),D(this,c,t.mutationCache),D(this,i,[]),this.state=t.state||h(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...s(this,l),...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){s(this,i).includes(t)||(s(this,i).push(t),this.clearGcTimeout(),s(this,c).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){D(this,i,s(this,i).filter(a=>a!==t)),this.scheduleGc(),s(this,c).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){s(this,i).length||(this.state.status==="pending"?this.scheduleGc():s(this,c).remove(this))}continue(){var t,a;return(a=(t=s(this,f))==null?void 0:t.continue())!=null?a:this.execute(this.state.variables)}async execute(t){var g,U,C,K,Z,F,O,B,$,Y,H,X,et,st,nt,ot,at,it,rt,dt;const a=()=>{var v;return D(this,f,createRetryer({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(z,ut)=>{A(this,y,w).call(this,{type:"failed",failureCount:z,error:ut})},onPause:()=>{A(this,y,w).call(this,{type:"pause"})},onContinue:()=>{A(this,y,w).call(this,{type:"continue"})},retry:(v=this.options.retry)!=null?v:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),s(this,f).promise},n=this.state.status==="pending";try{if(!n){A(this,y,w).call(this,{type:"pending",variables:t}),await((U=(g=s(this,c).config).onMutate)==null?void 0:U.call(g,t,this));const z=await((K=(C=this.options).onMutate)==null?void 0:K.call(C,t));z!==this.state.context&&A(this,y,w).call(this,{type:"pending",context:z,variables:t})}const v=await a();return await((F=(Z=s(this,c).config).onSuccess)==null?void 0:F.call(Z,v,t,this.state.context,this)),await((B=(O=this.options).onSuccess)==null?void 0:B.call(O,v,t,this.state.context)),await((Y=($=s(this,c).config).onSettled)==null?void 0:Y.call($,v,null,this.state.variables,this.state.context,this)),await((X=(H=this.options).onSettled)==null?void 0:X.call(H,v,null,t,this.state.context)),A(this,y,w).call(this,{type:"success",data:v}),v}catch(v){try{throw await((st=(et=s(this,c).config).onError)==null?void 0:st.call(et,v,t,this.state.context,this)),await((ot=(nt=this.options).onError)==null?void 0:ot.call(nt,v,t,this.state.context)),await((it=(at=s(this,c).config).onSettled)==null?void 0:it.call(at,void 0,v,this.state.variables,this.state.context,this)),await((dt=(rt=this.options).onSettled)==null?void 0:dt.call(rt,void 0,v,t,this.state.context)),v}finally{A(this,y,w).call(this,{type:"error",error:v})}}}},i=new WeakMap,l=new WeakMap,c=new WeakMap,f=new WeakMap,y=new WeakSet,w=function(t){const a=n=>{switch(t.type){case"failed":return{...n,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!canFetch(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...n,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:t.error,failureCount:n.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=a(this.state),notifyManager.batch(()=>{s(this,i).forEach(n=>{n.onMutationUpdate(t)}),s(this,c).notify({mutation:this,type:"updated",action:t})})},J);function h(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var d=e("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js"),M=e("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/subscribable.js"),E=e("../../../node_modules/.pnpm/@tanstack+query-core@5.20.5/node_modules/@tanstack/query-core/build/modern/utils.js"),k=(V=class extends M.l{constructor(t,a){super();x(this,L);x(this,I);x(this,S,void 0);x(this,P,void 0);x(this,p,void 0);x(this,j,void 0);D(this,S,t),this.setOptions(a),this.bindMethods(),A(this,L,Q).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const a=this.options;this.options=s(this,S).defaultMutationOptions(t),(0,E.VS)(a,this.options)||s(this,S).getMutationCache().notify({type:"observerOptionsUpdated",mutation:s(this,p),observer:this}),a!=null&&a.mutationKey&&this.options.mutationKey&&(0,E.Ym)(a.mutationKey)!==(0,E.Ym)(this.options.mutationKey)?this.reset():(n=s(this,p))==null||n.setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=s(this,p))==null||t.removeObserver(this)}onMutationUpdate(t){A(this,L,Q).call(this),A(this,I,tt).call(this,t)}getCurrentResult(){return s(this,P)}reset(){var t;(t=s(this,p))==null||t.removeObserver(this),D(this,p,void 0),A(this,L,Q).call(this),A(this,I,tt).call(this)}mutate(t,a){var n;return D(this,j,a),(n=s(this,p))==null||n.removeObserver(this),D(this,p,s(this,S).getMutationCache().build(s(this,S),this.options)),s(this,p).addObserver(this),s(this,p).execute(t)}},S=new WeakMap,P=new WeakMap,p=new WeakMap,j=new WeakMap,L=new WeakSet,Q=function(){var a,n;const t=(n=(a=s(this,p))==null?void 0:a.state)!=null?n:h();D(this,P,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},I=new WeakSet,tt=function(t){d.V.batch(()=>{var a,n,g,U,C,K,Z,F;if(s(this,j)&&this.hasListeners()){const O=s(this,P).variables,B=s(this,P).context;(t==null?void 0:t.type)==="success"?((n=(a=s(this,j)).onSuccess)==null||n.call(a,t.data,O,B),(U=(g=s(this,j)).onSettled)==null||U.call(g,t.data,null,O,B)):(t==null?void 0:t.type)==="error"&&((K=(C=s(this,j)).onError)==null||K.call(C,t.error,O,B),(F=(Z=s(this,j)).onSettled)==null||F.call(Z,void 0,t.error,O,B))}this.listeners.forEach(O=>{O(s(this,P))})})},V),R=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),T=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/utils.js");function b(W,t){const a=(0,R.NL)(t),[n]=r.useState(()=>new k(a,W));r.useEffect(()=>{n.setOptions(W)},[n,W]);const g=r.useSyncExternalStore(r.useCallback(C=>n.subscribe(d.V.batchCalls(C)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),U=r.useCallback((C,K)=>{n.mutate(C,K).catch(_)},[n]);if(g.error&&(0,T.L)(n.options.throwOnError,[g.error]))throw g.error;return{...g,mutate:U,mutateAsync:g.mutate}}function _(){}},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(u,o,e)=>{e.d(o,{Z:()=>d});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,r.createElement)(m.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(m.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(u,o,e)=>{e.d(o,{Z:()=>d});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,r.createElement)(m.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(m.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../packages/my-jetpack/_inc/components/connected-product-card/index.jsx":(u,o,e)=>{e.d(o,{Z:()=>S});var r=e("../components/components/text/index.tsx"),m=e("../connection/components/use-connection/index.jsx"),h=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),d=e.n(h),M=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),E=e("../../packages/my-jetpack/_inc/constants.ts"),k=e("../../packages/my-jetpack/_inc/data/products/use-activate.ts"),R=e("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js"),T=e("../../packages/my-jetpack/_inc/data/constants.ts"),b=e("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),_=e("../../packages/my-jetpack/_inc/data/products/use-product.ts");const i=R.__,c=P=>{const{detail:p,refetch:j}=(0,_.Z)(P),{mutate:L,isPending:G}=(0,b.Z)({name:T.yv,query:{path:`${T.Jk}/${P}/install-standalone`,method:"POST"},options:{onSuccess:j},errorMessage:(0,R.gB)(i("Failed to install standalone plugin for %1$s. Please try again","jetpack-my-jetpack"),p.name)});return{install:L,isPending:G}};var f=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.ts"),y=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),N=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const J=({admin:P,slug:p,children:j,isDataLoading:L,Description:G=null,additionalActions:I=null,secondaryAction:ct=null,upgradeInInterstitial:V=!1,primaryActionOverride:W})=>{const{isRegistered:t,isUserConnected:a}=(0,m.Z)(),{install:n,isPending:g}=c(p),{activate:U,isPending:C}=(0,k.Z)(p),{detail:K}=(0,_.Z)(p),{name:Z,description:F,requiresUserConnection:O,status:B}=K,$=(0,f.Z)(E.xB.Connection),Y=(0,M.useCallback)(()=>{if((!t||!a)&&O){$();return}U()},[U,t,a,O,$]),H=()=>{const X=F.replace(/\s(?=[^\s]*$)/,"\xA0");return(0,N.jsx)(r.ZP,{variant:"body-small",style:{flexGrow:1},children:X})};return(0,N.jsx)(y.ZP,{name:Z,Description:G||H,status:B,admin:P,isFetching:C||g,isDataLoading:L,isInstallingStandalone:g,additionalActions:I,primaryActionOverride:W,secondaryAction:ct,slug:p,onActivate:Y,onInstallStandalone:n,onActivateStandalone:n,upgradeInInterstitial:V,children:j})};J.propTypes={children:d().node,admin:d().bool.isRequired,slug:d().string.isRequired,isDataLoading:d().bool,additionalActions:d().array,primaryActionOverride:d().object,secondaryAction:d().object};const S=J;J.__docgenInfo={description:"",methods:[],displayName:"ConnectedProductCard",props:{Description:{defaultValue:{value:"null",computed:!1},required:!1},additionalActions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},secondaryAction:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1},upgradeInInterstitial:{defaultValue:{value:"false",computed:!1},required:!1},children:{description:"",type:{name:"node"},required:!1},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},isDataLoading:{description:"",type:{name:"bool"},required:!1},primaryActionOverride:{description:"",type:{name:"object"},required:!1}}}},"../../packages/my-jetpack/_inc/constants.ts":(u,o,e)=>{e.d(o,{f6:()=>m,w6:()=>r,xB:()=>d});const r="my-jetpack-my-plans-manage",m="my-jetpack-my-plans-purchase",h="my-jetpack-product-checkout",d={Home:"/",Connection:"/connection",AddAkismet:"/add-akismet",AddAntiSpam:"/add-anti-spam",AddBackup:"/add-backup",AddBoost:"/add-boost",AddCRM:"/add-crm",AddCreator:"/add-creator",AddJetpackAI:"/add-jetpack-ai",AddExtras:"/add-extras",AddProtect:"/add-protect",AddScan:"/add-scan",AddSocial:"/add-social",AddSearch:"/add-search",AddVideoPress:"/add-videopress",AddStats:"/add-stats",AddLicense:"/add-license",RedeemToken:"/redeem-token"}},"../../packages/my-jetpack/_inc/data/products/use-activate.ts":(u,o,e)=>{e.d(o,{Z:()=>_});var r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.55.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../packages/my-jetpack/_inc/hooks/use-analytics/index.ts"),h=e("../../packages/my-jetpack/_inc/data/constants.ts"),d=e("../../packages/my-jetpack/_inc/data/use-simple-mutation.ts"),M=e("../../packages/my-jetpack/_inc/data/utils/get-my-jetpack-window-state.ts"),E=e("../../packages/my-jetpack/_inc/data/products/use-product.ts");const k=r.__,R=i=>{var c;const{items:l}=(0,M.$9)("products");(c=l[i])!=null&&c.standalone_plugin_info.has_standalone_plugin&&(window.myJetpackInitialState.products.items[i].standalone_plugin_info.is_standalone_active=!0,window.myJetpackInitialState.products.items[i].standalone_plugin_info.is_standalone_installed=!0)},T=i=>{const{standalonePluginInfo:l,isPluginActive:c}=i;return l!=null&&l.hasStandalonePlugin?l==null?void 0:l.isStandaloneActive:c},_=i=>{const{detail:l,refetch:c}=(0,E.Z)(i),{recordEvent:f}=(0,m.Z)(),{mutate:y,isPending:N}=(0,d.Z)({name:h.iG,query:{path:`${h.Jk}/${i}`,method:"POST"},options:{onSuccess:()=>{T(l)||(f("jetpack_myjetpack_product_activated",{product:i}),R(i)),c()}},errorMessage:(0,r.gB)(k("Failed to activate %1$s. Please try again","jetpack-my-jetpack"),l.name)});return{activate:y,isPending:N}}},"../../packages/my-jetpack/_inc/data/use-simple-mutation.ts":(u,o,e)=>{e.d(o,{Z:()=>M});var r=e("../../../node_modules/.pnpm/@tanstack+react-query@5.20.5_react@18.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js"),m=e("../../../node_modules/.pnpm/@wordpress+api-fetch@6.52.0/node_modules/@wordpress/api-fetch/build-module/index.js"),h=e("../../packages/my-jetpack/_inc/data/notices/use-fetching-error-notice.ts");const M=({name:E,query:k,options:R,errorMessage:T})=>{const b=(0,r.D)({mutationKey:[E],mutationFn:()=>(0,m.Z)(k),...R}),{isError:_,isPending:i}=b;return(0,h.o)({infoName:E,isError:!i&&_,overrideMessage:T}),b}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-navigate/index.ts":(u,o,e)=>{e.d(o,{Z:()=>h});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/react-router@6.6.2_react@18.2.0/node_modules/react-router/dist/index.js");function h(d){const M=(0,m.s0)();return(0,r.useCallback)(E=>M(d,E),[M,d])}}}]);})();