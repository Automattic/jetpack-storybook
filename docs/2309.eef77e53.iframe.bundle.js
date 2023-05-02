"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2309],{"../components/components/button/index.tsx":(f,x,e)=>{e.d(x,{Z:()=>n});var c=e("../../../node_modules/.pnpm/@wordpress+components@23.9.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@23.9.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/icon/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/external.js"),d=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=e.n(d),y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(m),k=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),p={};p.insert="head",p.singleton=!1;var i=A()(k.Z,p);const s=k.Z.locals||{};var S=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=(0,y.forwardRef)((b,E)=>{var h,v;const{children:g,variant:P="primary",size:t="normal",weight:T="bold",icon:w,iconSize:Z,disabled:R,isDestructive:V,isLoading:z,isExternalLink:I,className:D,text:L,fullWidth:K,...C}=b,M=u()(s.button,D,{[s.normal]:t==="normal",[s.small]:t==="small",[s.icon]:!!w,[s.loading]:z,[s.regular]:T==="regular",[s["full-width"]]:K,[s["is-icon-button"]]:!!w&&!g});C.ref=E;const N=t==="normal"?20:16,o=I&&(0,S.jsx)(a.Z,{size:N,icon:_.Z,className:s["external-icon"]}),O=I?"_blank":void 0,j=(g==null?void 0:g[0])&&g[0]!==null&&((v=(h=g==null?void 0:g[0])==null?void 0:h.props)==null?void 0:v.className)!=="components-tooltip";return(0,S.jsxs)(c.ZP,{target:O,variant:P,className:u()(M,{"has-text":!!w&&j}),icon:I?void 0:w,iconSize:Z,disabled:R,"aria-disabled":R,isDestructive:V,text:L,...C,children:[z&&(0,S.jsx)(r.ZP,{}),(0,S.jsx)("span",{children:g}),o]})});l.displayName="Button";const n=l;try{l.displayName="Button",l.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:l.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(b){}},"../components/components/layout/col/index.tsx":(f,x,e)=>{e.d(x,{Z:()=>S});var c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(c),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(a),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),u={};u.insert="head",u.singleton=!1;var y=_()(d.Z,u);const m=d.Z.locals||{};var A=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const k=Number(m.smCols),p=Number(m.mdCols),i=Number(m.lgCols),s=l=>{const{children:n,className:b}=l,E=Math.min(k,typeof l.sm=="number"?l.sm:k),g=Math.min(k,typeof l.sm=="object"?l.sm.start:0),P=Math.min(k,typeof l.sm=="object"?l.sm.end:0),t=Math.min(p,typeof l.md=="number"?l.md:p),T=Math.min(p,typeof l.md=="object"?l.md.start:0),w=Math.min(p,typeof l.md=="object"?l.md.end:0),Z=Math.min(i,typeof l.lg=="number"?l.lg:i),R=Math.min(i,typeof l.lg=="object"?l.lg.start:0),V=Math.min(i,typeof l.lg=="object"?l.lg.end:0),z=r()(b,{[m[`col-sm-${E}`]]:!(g&&P),[m[`col-sm-${g}-start`]]:g>0,[m[`col-sm-${P}-end`]]:P>0,[m[`col-md-${t}`]]:!(T&&w),[m[`col-md-${T}-start`]]:T>0,[m[`col-md-${w}-end`]]:w>0,[m[`col-lg-${Z}`]]:!(R&&V),[m[`col-lg-${R}-start`]]:R>0,[m[`col-lg-${V}-end`]]:V>0});return(0,A.jsx)("div",{className:z,children:n})};s.displayName="Col";const S=s},"../components/components/layout/container/index.tsx":(f,x,e)=>{e.d(x,{Z:()=>i});var c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(c),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(_),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),y={};y.insert="head",y.singleton=!1;var m=d()(u.Z,y);const A=u.Z.locals||{};var k=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p=s=>{let{children:S,fluid:l=!1,className:n,horizontalGap:b=1,horizontalSpacing:E=1}=s;const g=(0,a.useMemo)(()=>{const t=`calc( var(--horizontal-spacing) * ${E} )`,T=`calc( var(--horizontal-spacing) * ${b} )`;return{paddingTop:t,paddingBottom:t,rowGap:T}},[b,E]),P=r()(n,A.container,{[A.fluid]:l});return(0,k.jsx)("div",{className:P,style:g,children:S})};p.displayName="Container";const i=p},"../components/components/layout/use-breakpoint-match/index.ts":(f,x,e)=>{e.d(x,{Z:()=>p});var c=e("../../../node_modules/.pnpm/@wordpress+compose@6.9.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(r),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),d={};d.insert="head",d.singleton=!1;var u=a()(_.Z,d);const y=_.Z.locals||{},m=["sm","md","lg"],A=(i,s,S)=>{const l=m.indexOf(i),n=l+1,b=s.includes("=");let E=[];return s.startsWith("<")&&(E=m.slice(0,b?n:l)),s.startsWith(">")&&(E=m.slice(b?l:n)),E!=null&&E.length?E.some(g=>S[g]):S[i]},p=(i,s)=>{const S=Array.isArray(i)?i:[i],l=Array.isArray(s)?s:[s],[n,b,E]=m,g=(0,c.Z)(y[n]),P=(0,c.Z)(y[b]),t=(0,c.Z)(y[E]),T={sm:g,md:P,lg:t};return S.map((w,Z)=>{const R=l[Z];return R?A(w,R,T):T[w]})}},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(f,x,e)=>{e.d(x,{Z:()=>i});var c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(c),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(_),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),y={};y.insert="head",y.singleton=!1;var m=d()(u.Z,y);const A=u.Z.locals||{};var k=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p=(0,a.forwardRef)((s,S)=>{let{checked:l,onChange:n,className:b,...E}=s;const g=P=>{n==null||n(P.target.checked)};return(0,k.jsx)("input",{...E,ref:S,type:"checkbox",checked:l,className:r()(b,A.checkbox),onChange:g})});p.displayName="Checkbox";const i=p;try{p.displayName="Checkbox",p.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:p.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch(s){}},"../../packages/videopress/src/client/admin/components/video-filter/index.tsx":(f,x,e)=>{e.d(x,{JC:()=>C,Lb:()=>L,Oy:()=>M});var c=e("../components/components/button/index.tsx"),r=e("../components/components/text/index.tsx"),a=e("../components/components/layout/use-breakpoint-match/index.ts"),_=e("../components/components/layout/container/index.tsx"),d=e("../components/components/layout/col/index.tsx"),u=e("../../../node_modules/.pnpm/@wordpress+components@23.9.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+i18n@4.32.0/node_modules/@wordpress/i18n/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/icon/index.js"),A=e("../../../node_modules/.pnpm/@wordpress+icons@9.23.0/node_modules/@wordpress/icons/build-module/library/info.js"),k=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=e.n(k),i=e("../../../node_modules/.pnpm/@wordpress+primitives@3.30.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=(0,s.jsxs)(i.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)(i.UL,{x:"5",y:"7",width:"14",height:"1.5"}),(0,s.jsx)(i.UL,{x:"7",y:"11.25",width:"10",height:"1.5"}),(0,s.jsx)(i.UL,{x:"9",y:"15.5",width:"6",height:"1.5"})]});var n=e("../../packages/videopress/src/client/state/constants.js"),b=e("../../../node_modules/.pnpm/react-router@5.3.4_react@18.2.0/node_modules/react-router/esm/react-router.js");const E=()=>{const o=(0,b.TH)(),O=(0,b.k6)(),j=new URLSearchParams(o.search);return{getParam:function(B){let W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return j.has(B)?j.get(B):W},setParam:function(B){let W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;j.set(B,W)},deleteParam:B=>{j.delete(B)},update:()=>{const B="?"+j.toString();B!==O.location.search&&O.push({search:B})},reset:()=>{O.location.search!==""&&O.replace({pathname:O.location.pathname,search:""})}}};var g=e("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js");function P(){const o=(0,g.Z)(j=>j(n.tT).getUsers()),O=(0,g.Z)(j=>j(n.tT).getUsersPagination());return{items:o,...O}}var t=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),T=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),w=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(w),R=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss"),V={};V.insert="head",V.singleton=!1;var z=Z()(R.Z,V);const I=R.Z.locals||{},D=y.__,L=o=>{const{isActive:O,...j}=o;return(0,s.jsx)(c.Z,{variant:O?"primary":"secondary",className:p()(I["filter-button"],{[I["is-active"]]:O}),icon:l,weight:"regular",...j,children:D("Filters","jetpack-videopress-pkg")})};L.displayName="FilterButton";const K=o=>(0,s.jsx)(u.Z,{position:"middle center",text:o.message,children:(0,s.jsx)("span",{className:I["title-adornment"],children:(0,s.jsx)(m.Z,{icon:A.Z})})});K.displayName="DisabledReasonTooltip";const C=o=>(0,s.jsxs)("label",{htmlFor:o.for,className:I["checkbox-container"],children:[(0,s.jsx)(T.Z,{id:o.for,className:I.checkbox,onChange:o.onChange,checked:o.checked,disabled:o.disabled}),(0,s.jsx)("span",{className:I["checkbox-checkmark"]}),(0,s.jsx)(r.ZP,{variant:"body-small",children:o.label}),o.disabledReason&&(0,s.jsx)(K,{message:o.disabledReason})]});C.displayName="CheckboxCheckmark";const M=o=>{const[O]=(0,a.Z)("sm"),j=(h,v)=>{var U,J;return((J=(U=o==null?void 0:o.filter)==null?void 0:U[h])==null?void 0:J[v])===!0};return(0,s.jsx)("div",{className:p()(I["filters-section"],o.className),children:(0,s.jsxs)(_.Z,{horizontalSpacing:O?2:4,horizontalGap:2,children:[(0,s.jsxs)(d.Z,{sm:4,md:4,lg:4,children:[(0,s.jsx)(r.ZP,{variant:"body-extra-small-bold",weight:"bold",children:D("Uploader","jetpack-videopress-pkg")}),o.uploaders.map(h=>(0,s.jsx)(C,{label:h.name,for:`uploader-${h.id}`,onChange:v=>{var U;return(U=o.onChange)==null?void 0:U.call(o,n.Z5,h.id,v)},checked:j(n.Z5,h.id)},h.id))]}),(0,s.jsxs)(d.Z,{sm:4,md:4,lg:4,children:[(0,s.jsx)(r.ZP,{variant:"body-extra-small-bold",weight:"bold",children:D("Privacy","jetpack-videopress-pkg")}),(0,s.jsx)(C,{for:"filter-public",label:D("Public","jetpack-videopress-pkg"),onChange:h=>{var v;return(v=o.onChange)==null?void 0:v.call(o,n.jc,n.Vz.indexOf(n.$A),h)},checked:j(n.jc,n.Vz.indexOf(n.$A))}),(0,s.jsx)(C,{for:"filter-private",label:D("Private","jetpack-videopress-pkg"),onChange:h=>{var v;return(v=o.onChange)==null?void 0:v.call(o,n.jc,n.Vz.indexOf(n.UJ),h)},checked:j(n.jc,n.Vz.indexOf(n.UJ))})]}),(0,s.jsxs)(d.Z,{sm:4,md:4,lg:4,children:[(0,s.jsx)(r.ZP,{variant:"body-extra-small-bold",weight:"bold",children:D("Rating","jetpack-videopress-pkg")}),(0,s.jsx)(C,{for:"filter-g",label:D("G","jetpack-videopress-pkg"),onChange:h=>{var v;return(v=o.onChange)==null?void 0:v.call(o,n.ah,n.x4,h)},checked:j(n.ah,n.x4)}),(0,s.jsx)(C,{for:"filter-pg-13",label:D("PG-13","jetpack-videopress-pkg"),onChange:h=>{var v;return(v=o.onChange)==null?void 0:v.call(o,n.ah,n.pf,h)},checked:j(n.ah,n.pf)}),(0,s.jsx)(C,{for:"filter-r",label:D("R","jetpack-videopress-pkg"),onChange:h=>{var v;return(v=o.onChange)==null?void 0:v.call(o,n.ah,n.Gr,h)},checked:j(n.ah,n.Gr)})]})]})})};M.displayName="FilterSection";const N=o=>{const{setFilter:O,filter:j}=(0,t.ZP)(),h=E(),v=function(){h.deleteParam("page"),h.update(),O(...arguments)},{items:U}=P();return(0,s.jsx)(M,{...o,onChange:v,uploaders:U,filter:j})};N.displayName="ConnectFilterSection";try{L.displayName="FilterButton",L.__docgenInfo={description:"",displayName:"FilterButton",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"]={docgenInfo:L.__docgenInfo,name:"FilterButton",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"})}catch(o){}try{C.displayName="CheckboxCheckmark",C.__docgenInfo={description:"",displayName:"CheckboxCheckmark",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},for:{defaultValue:null,description:"",name:"for",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},disabledReason:{defaultValue:null,description:"",name:"disabledReason",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"]={docgenInfo:C.__docgenInfo,name:"CheckboxCheckmark",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"})}catch(o){}try{M.displayName="FilterSection",M.__docgenInfo={description:"",displayName:"FilterSection",props:{uploaders:{defaultValue:null,description:"",name:"uploaders",required:!0,type:{name:"{ id: number; name: string; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'(filter: "uploader" | "privacy" | "rating", value: number | "PG-13" | "G" | "R-17", checked: boolean) => void'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"FilterObject"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"]={docgenInfo:M.__docgenInfo,name:"FilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"})}catch(o){}try{N.displayName="ConnectFilterSection",N.__docgenInfo={description:"",displayName:"ConnectFilterSection",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"]={docgenInfo:N.__docgenInfo,name:"ConnectFilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"})}catch(o){}},"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(f,x,e)=>{e.d(x,{ZP:()=>_});var c=e("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js"),a=e("../../packages/videopress/src/client/state/constants.js");function _(){const y=(0,c.Z)(t=>t(a.tT).getVideos()),m=(0,c.Z)(t=>t(a.tT).getUploadingVideos()),A=m.length>0,k="",p=(0,c.Z)(t=>t(a.tT).getUploadedVideoCount()),i=(0,c.Z)(t=>t(a.tT).getIsFetching()),s=(0,c.Z)(t=>t(a.tT).getIsFetchingUploadedVideoCount()),S=(0,c.Z)(t=>t(a.tT).getFirstUploadedVideoId()),l=(0,c.Z)(t=>t(a.tT).getFirstVideoProcessed()),n=(0,c.Z)(t=>t(a.tT).getDismissedFirstVideoPopover()),b=(0,c.Z)(t=>t(a.tT).getVideosQuery()||{}),E=(0,c.Z)(t=>t(a.tT).getPagination()),g=(0,c.Z)(t=>t(a.tT).getStorageUsed(),[]),P=(0,c.Z)(t=>t(a.tT).getVideosFilter());return{items:y,uploading:m,isUploading:A,search:k,filter:P,uploadedVideoCount:p,isFetching:i,isFetchingUploadedVideoCount:s,firstUploadedVideoId:S,firstVideoProcessed:l,dismissedFirstVideoPopover:n,...b,...E,...g,setPage:t=>(0,r.WI)(a.tT).setVideosQuery({page:t}),setSearch:t=>(0,r.WI)(a.tT).setVideosQuery({search:t}),setFilter:(0,r.WI)(a.tT).setVideosFilter}}const d=()=>{const y=useSelect(i=>i(STORE_ID).getLocalVideos()),m=useSelect(i=>i(STORE_ID).getUploadedLocalVideoCount()),A=useSelect(i=>i(STORE_ID).getIsFetchingLocalVideos()),k=useSelect(i=>i(STORE_ID).getLocalVideosQuery()||{}),p=useSelect(i=>i(STORE_ID).getLocalPagination());return{items:y,uploadedLocalVideoCount:m,isFetching:A,...k,...p,setPage:i=>dispatch(STORE_ID).setLocalVideosQuery({page:i})}},u=()=>useSelect(m=>m(STORE_ID).getVideosQuery()||{})},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(f,x,e)=>{e.d(x,{Z:()=>u});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(a),d=_()(r());d.push([f.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),d.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const u=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(f,x,e)=>{e.d(x,{Z:()=>u});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(a),d=_()(r());d.push([f.id,"",""]),d.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const u=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(f,x,e)=>{e.d(x,{Z:()=>u});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(a),d=_()(r());d.push([f.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),d.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const u=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(f,x,e)=>{e.d(x,{Z:()=>u});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(a),d=_()(r());d.push([f.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),d.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const u=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(f,x,e)=>{e.d(x,{Z:()=>u});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(a),d=_()(r());d.push([f.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),d.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const u=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss":(f,x,e)=>{e.d(x,{Z:()=>u});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=e.n(a),d=_()(r());d.push([f.id,'.jEvjz2gQtT1vCRZpq0FJ{flex-shrink:0}.jEvjz2gQtT1vCRZpq0FJ.K7BZwOItK4opz_tJl_6z>svg{fill:var(--jp-white)}.lSp75nRVCANyLynkFAYK{background-color:var(--jp-gray-0)}.lSp75nRVCANyLynkFAYK .euRiK9kFl5U0j6nnVsB1:last-child{margin-bottom:0}.euRiK9kFl5U0j6nnVsB1{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;height:20px;line-height:20px;margin-top:var(--spacing-base)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]{border:1px solid var(--jp-green-40);padding:0 !important;margin-right:10px}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:checked::before{background:var(--jp-green-40)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:not(:checked)+.E5TxkJXJoBCg5Bzotc0i{display:none}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i{position:absolute;top:-1px;left:-1px;height:20px;width:20px;box-sizing:border-box}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i::after{position:absolute;left:8px;top:3px;width:5px;height:11px;border:solid var(--jp-white);border-width:0 1.5px 1.5px 0;transform:rotate(37deg);content:""}.EHwqpGExaCKP8e60NoBX{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.EHwqpGExaCKP8e60NoBX .components-tooltip.components-popover .components-popover__content{min-width:auto;max-width:256px;width:256px;white-space:break-spaces}',""]),d.locals={"filter-button":"jEvjz2gQtT1vCRZpq0FJ","is-active":"K7BZwOItK4opz_tJl_6z","filters-section":"lSp75nRVCANyLynkFAYK","checkbox-container":"euRiK9kFl5U0j6nnVsB1",checkbox:"V0bWOZcP_klJCyrbsp7R","checkbox-checkmark":"E5TxkJXJoBCg5Bzotc0i","title-adornment":"EHwqpGExaCKP8e60NoBX"};const u=d}}]);})();
