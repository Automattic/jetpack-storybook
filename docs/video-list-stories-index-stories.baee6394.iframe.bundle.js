"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4552],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.0.4/node_modules/@storybook/addon-actions/dist/index.mjs":(K,g,s)=>{s.d(g,{aD:()=>h});var x=s("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),f=s("@storybook/preview-api"),j=s("@storybook/global"),P=s("@storybook/core-events/preview-errors"),m="actions",y="storybook/actions",T=`${y}/panel`,L=`${y}/action-event`,G=`${y}/action-clear`,N="$___storybook.isCyclic",d={depth:10,clearOnStoryChange:!0,limit:50},v=(e={})=>{Object.assign(d,e)},c=(e,l)=>{let t=Object.getPrototypeOf(e);return!t||l(t)?t:c(t,l)},u=e=>!!(typeof e=="object"&&e&&c(e,l=>/^Synthetic(?:Base)?Event$/.test(l.constructor.name))&&typeof e.persist=="function"),S=e=>{if(u(e)){let l=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));l.persist();let t=Object.getOwnPropertyDescriptor(l,"view"),i=t==null?void 0:t.value;return typeof i=="object"&&(i==null?void 0:i.constructor.name)==="Window"&&Object.defineProperty(l,"view",{...t,value:Object.create(i.constructor.prototype)}),l}return e},R=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,x.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function h(e,l={}){let t={...d,...l},i=function(...w){var n,E;if(l.implicit){let V=(n="__STORYBOOK_PREVIEW__"in j.global?j.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:n.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(V){let p=!((E=window==null?void 0:window.FEATURES)!=null&&E.disallowImplicitActionsInRenderV8),O=new P.ImplicitActionsDuringRendering({phase:V.phase,name:e,deprecated:p});if(p)console.warn(O);else throw O}}let b=f.addons.getChannel(),k=R(),z=5,M=w.map(S),Q=w.length>1?M:M[0],F={id:k,count:0,data:{name:e,args:Q},options:{...t,maxDepth:z+(t.depth||3),allowFunction:t.allowFunction||!1}};b.emit(L,F)};return i.isAction=!0,i.implicit=l.implicit,i}var r=(...e)=>{let l=d,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(l={...d,...t.pop()});let i=t[0];(t.length!==1||typeof i=="string")&&(i={},t.forEach(b=>{i[b]=b}));let w={};return Object.keys(i).forEach(b=>{w[b]=h(i[b],l)}),w}},"../../packages/videopress/src/client/admin/components/video-list/stories/index.stories.tsx":(K,g,s)=>{var M,Q,F;s.r(g),s.d(g,{__namedExportsOrder:()=>z,_default:()=>k,default:()=>w});var x=s("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.4/node_modules/@storybook/addon-actions/dist/index.mjs"),f=s("../components/components/layout/use-breakpoint-match/index.ts"),j=s("../components/components/text/index.tsx"),P=s("../../../node_modules/.pnpm/@wordpress+i18n@4.54.0/node_modules/@wordpress/i18n/build-module/index.js"),m=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),y=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=s("../../packages/videopress/src/client/state/constants.js"),L=s("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),G=s("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),N=s("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),d=s("../../packages/videopress/src/client/admin/components/video-row/index.tsx"),v=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(v),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-list/style.module.scss"),S={};S.insert="head",S.singleton=!1;var R=c()(u.Z,S);const h=u.Z.locals||{};var r=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const e=P.__,l=({videos:n,hidePrivacy:E=!1,hideDuration:V=!1,hidePlays:p=!1,showActionButton:O=!0,showQuickActions:B=!0,loading:W=!1,onVideoDetailsClick:J})=>{const[D,C]=(0,y.useState)([]),[Z]=(0,f.Z)("sm"),H=(D==null?void 0:D.length)===(n==null?void 0:n.length),Y=!1,$=a=>{C(a?n.map((_,o)=>o):[])},X=(a,_)=>()=>{_==null||_(n[a])};return(0,r.jsxs)("div",{className:h.list,children:[(0,r.jsxs)("div",{className:h.header,children:[(0,r.jsxs)("div",{className:h["title-wrapper"],children:[Y&&(0,r.jsx)(N.Z,{checked:H,onChange:$}),(0,r.jsx)(j.ZP,{children:e("Title","jetpack-videopress-pkg")})]}),!Z&&(0,r.jsx)("div",{className:h["data-wrapper"],children:(0,r.jsx)(d.jk,{privacy:E?null:e("Privacy","jetpack-videopress-pkg"),duration:V?null:e("Duration","jetpack-videopress-pkg"),plays:p?null:e("Plays","jetpack-videopress-pkg"),upload:e("Upload date","jetpack-videopress-pkg")})})]}),n.map((a,_)=>{var A;const o=T.Vz[a.privacySetting]===T.UJ;return(0,r.jsx)(d.ZP,{id:a==null?void 0:a.id,checked:D.includes(_),title:a.title,thumbnail:a==null?void 0:a.posterImage,duration:V?null:a.duration,plays:p?null:a.plays,isPrivate:E?null:o,uploadDate:a.uploadDate,showQuickActions:!(a!=null&&a.uploading)&&B,showActionButton:!(a!=null&&a.uploading)&&O,showCheckbox:Y,className:h.row,onActionClick:X(_,J),loading:W,onSelect:I=>C(U=>{const q=U.indexOf(_);return I?[...U,_]:!I&&q>-1?[...U.slice(0,q),...U.slice(q+1)]:U})},(A=a==null?void 0:a.guid)!=null?A:a==null?void 0:a.id)})]})},t=({videos:n,showActionButton:E=!0,showQuickActions:V=!1,uploading:p=!1,onActionClick:O})=>{const[B,W]=useState([]),[J]=useBreakpointMatch("sm"),D=(B==null?void 0:B.length)===(n==null?void 0:n.length),C=!1,{hasVideoPressPurchase:Z}=usePlan(),{uploadedVideoCount:H,isFetching:Y}=useVideos(),$=H>0||Y||(p==null?void 0:p.length)>0,X=o=>{W(o?n.map((A,I)=>I):[])},a=o=>()=>{O==null||O(n[o])},_=o=>{if(o!=null&&o.isUploadedToVideoPress)return _jsx(Tooltip,{position:"top center",text:e("Video already uploaded to VideoPress","jetpack-videopress-pkg"),children:_jsx("div",{className:styles["title-adornment"],children:_jsx(Icon,{icon:info})})});if((o==null?void 0:o.readError)!=null){const A=e("Video cannot be read","jetpack-videopress-pkg"),I=e("Video has an unsupported file type","jetpack-videopress-pkg");return _jsx(Tooltip,{position:"top center",text:(o==null?void 0:o.readError)===LOCAL_VIDEO_ERROR_MIME_TYPE_NOT_SUPPORTED?I:A,children:_jsx("div",{className:classnames(styles["title-adornment"],styles.error),children:_jsx(Icon,{icon:warning})})})}return null};return _jsxs("div",{className:styles.list,children:[_jsxs("div",{className:styles.header,children:[_jsxs("div",{className:styles["title-wrapper"],children:[C&&_jsx(Checkbox,{checked:D,onChange:X}),_jsx(Text,{children:e("Title","jetpack-videopress-pkg")})]}),!J&&_jsx("div",{className:styles["data-wrapper"],children:_jsx(Stats,{privacy:"",duration:"",plays:"",upload:e("Upload date","jetpack-videopress-pkg")})})]}),n.map((o,A)=>o!=null&&o.id?_jsx(LocalVideoRow,{id:o.id,title:o.title,showActionButton:E,showQuickActions:V,showCheckbox:C,uploadDate:o.uploadDate,onActionClick:a(A),actionButtonLabel:e("Upload to VideoPress","jetpack-videopress-pkg"),disabled:(o==null?void 0:o.isUploadedToVideoPress)||(o==null?void 0:o.readError)!=null,disableActionButton:$&&!Z||p,titleAdornment:_(o)},`local-video-${o.id}`):null)]})},i=l;try{t.displayName="LocalVideoList",t.__docgenInfo={description:"",displayName:"LocalVideoList",props:{loading:{defaultValue:{value:"false"},description:"Loading mode.",name:"loading",required:!1,type:{name:"boolean"}},uploading:{defaultValue:{value:"false"},description:"Is Uploading.",name:"uploading",required:!1,type:{name:"boolean"}},showActionButton:{defaultValue:{value:"true"},description:"Show action button.",name:"showActionButton",required:!1,type:{name:"boolean"}},showQuickActions:{defaultValue:{value:"false"},description:"Show quick actions.",name:"showQuickActions",required:!1,type:{name:"boolean"}},hidePrivacy:{defaultValue:{value:"false"},description:"Hide privacy column.",name:"hidePrivacy",required:!1,type:{name:"boolean"}},hideDuration:{defaultValue:{value:"false"},description:"Hide duration column.",name:"hideDuration",required:!1,type:{name:"boolean"}},hidePlays:{defaultValue:{value:"false"},description:"Hide plays column.",name:"hidePlays",required:!1,type:{name:"boolean"}},videos:{defaultValue:null,description:"",name:"videos",required:!0,type:{name:"LocalVideo[]"}},onActionClick:{defaultValue:null,description:"",name:"onActionClick",required:!1,type:{name:"(video: LocalVideo) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-list/index.tsx#LocalVideoList"]={docgenInfo:t.__docgenInfo,name:"LocalVideoList",path:"../../packages/videopress/src/client/admin/components/video-list/index.tsx#LocalVideoList"})}catch(n){}try{videolist.displayName="videolist",videolist.__docgenInfo={description:"",displayName:"videolist",props:{videos:{defaultValue:null,description:"List of videos.",name:"videos",required:!0,type:{name:"VideoPressVideo[]"}},hidePrivacy:{defaultValue:{value:"false"},description:"Hide privacy column.",name:"hidePrivacy",required:!1,type:{name:"boolean"}},hideDuration:{defaultValue:{value:"false"},description:"Hide duration column.",name:"hideDuration",required:!1,type:{name:"boolean"}},hidePlays:{defaultValue:{value:"false"},description:"Hide plays column.",name:"hidePlays",required:!1,type:{name:"boolean"}},showActionButton:{defaultValue:{value:"true"},description:"Show action button.",name:"showActionButton",required:!1,type:{name:"boolean"}},showQuickActions:{defaultValue:{value:"false"},description:"Show quick actions.",name:"showQuickActions",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading mode.",name:"loading",required:!1,type:{name:"boolean"}},uploading:{defaultValue:{value:"false"},description:"Is Uploading.",name:"uploading",required:!1,type:{name:"boolean"}},onVideoDetailsClick:{defaultValue:null,description:"Callback to be invoked when clicking on the `Edit details` button.",name:"onVideoDetailsClick",required:!1,type:{name:"(video: VideoPressVideo) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-list/index.tsx#videolist"]={docgenInfo:videolist.__docgenInfo,name:"videolist",path:"../../packages/videopress/src/client/admin/components/video-list/index.tsx#videolist"})}catch(n){}const w={title:"Packages/VideoPress/Video List",component:i,parameters:{layout:"centered"},decorators:[n=>(0,r.jsx)("div",{style:{width:"95vw",maxWidth:1e3},children:(0,r.jsx)(n,{})})]},k=(n=>(0,r.jsx)(i,{...n})).bind({});k.args={onClickEdit:n=>{(0,x.aD)("onClickEdit")(n)},videos:[{id:1,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:2,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:3,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:4,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:5,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0}],hidePrivacy:!1,hideDuration:!1,hidePlays:!1,hideEditButton:!1,hideQuickActions:!1},k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <VideoList {...args} />;
}`,...(F=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:F.source}}};const z=["_default"]},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(K,g,s)=>{s.d(g,{g:()=>N});var x=s("../../../node_modules/.pnpm/@wordpress+data@9.24.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),f=s("../../packages/videopress/src/client/state/index.js");function j(d){return d.replace(/([-_][a-z])/gi,v=>v.toUpperCase().replace("_",""))}function P(d){return d.indexOf("_")!==-1}function m(d,v=!1){const c=Object.assign({},d);for(const u in c)c.hasOwnProperty(u)&&P(u)&&(c[j(u)]=c[u],v&&delete c[u]);return c}const{paidFeatures:y={},siteProductData:T={},productData:L={},productPrice:G={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},N=()=>{const d=m(T.pricing_for_ui,!0),v=m(L.introductory_offer,!0),c={...m(L,!0),introductoryOffer:v},{purchases:u,isFetchingPurchases:S}=(0,x.Z)(e=>({purchases:e(f.tT).getPurchases(),isFetchingPurchases:e(f.tT).isFetchingPurchases()}),[]),R=u.map(e=>m(e,!0));function h(e){return R.some(l=>l.productSlug===e)}const r=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(e=>h(e));return{features:y,siteProduct:{...m({...T},!0),pricingForUi:d},product:c,productPrice:G,purchases:R,hasVideoPressPurchase:r,isFetchingPurchases:S}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-list/style.module.scss":(K,g,s)=>{s.d(g,{Z:()=>y});var x=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=s.n(x),j=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),P=s.n(j),m=P()(f());m.push([K.id,".YHPOlLDVIbr_yO00ArYP{background-color:var(--jp-white)}.tjW16wKOwn44cr9MGow_{display:flex;align-items:center;padding:calc(var(--spacing-base)*2) var(--spacing-base);justify-content:space-between;gap:calc(var(--spacing-base)*2);border-bottom:1px solid var(--jp-gray-5)}.jWMIQVpkq9OpGQzFSMsb{display:flex;gap:calc(var(--spacing-base)*2)}.zKvAS0PJjwhcUV1AuSGd{border-bottom:1px solid var(--jp-gray-5)}.KkQO1dO5lSgu0_uaMUQc{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.KkQO1dO5lSgu0_uaMUQc.JbGGgCi8spwySJSNrbJh{fill:var(--jp-yellow-20)}",""]),m.locals={list:"YHPOlLDVIbr_yO00ArYP",header:"tjW16wKOwn44cr9MGow_","title-wrapper":"jWMIQVpkq9OpGQzFSMsb",row:"zKvAS0PJjwhcUV1AuSGd","title-adornment":"KkQO1dO5lSgu0_uaMUQc",error:"JbGGgCi8spwySJSNrbJh"};const y=m}}]);})();