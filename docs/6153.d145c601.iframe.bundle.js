"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6153],{"../../packages/videopress/src/client/admin/hooks/use-videos/index.js":(f,p,e)=>{e.d(p,{ZP:()=>u});var c=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js"),t=e("../../packages/videopress/src/client/state/constants.js");function u(){const x=(0,c.Z)(d=>d(t.tT).getVideos()),S=(0,c.Z)(d=>d(t.tT).getUploadingVideos()),_=S.length>0,A="",g=(0,c.Z)(d=>d(t.tT).getUploadedVideoCount()),i=(0,c.Z)(d=>d(t.tT).getIsFetching()),s=(0,c.Z)(d=>d(t.tT).getIsFetchingUploadedVideoCount()),b=(0,c.Z)(d=>d(t.tT).getFirstUploadedVideoId()),l=(0,c.Z)(d=>d(t.tT).getFirstVideoProcessed()),n=(0,c.Z)(d=>d(t.tT).getDismissedFirstVideoPopover()),k=(0,c.Z)(d=>d(t.tT).getVideosQuery()||{}),y=(0,c.Z)(d=>d(t.tT).getPagination()),h=(0,c.Z)(d=>d(t.tT).getStorageUsed(),[]),P=(0,c.Z)(d=>d(t.tT).getVideosFilter());return{items:x,uploading:S,isUploading:_,search:A,filter:P,uploadedVideoCount:g,isFetching:i,isFetchingUploadedVideoCount:s,firstUploadedVideoId:b,firstVideoProcessed:l,dismissedFirstVideoPopover:n,...k,...y,...h,setPage:d=>(0,r.W)(t.tT).setVideosQuery({page:d}),setSearch:d=>(0,r.W)(t.tT).setVideosQuery({search:d}),setFilter:(0,r.W)(t.tT).setVideosFilter}}const a=()=>{const x=useSelect(i=>i(STORE_ID).getLocalVideos()),S=useSelect(i=>i(STORE_ID).getUploadedLocalVideoCount()),_=useSelect(i=>i(STORE_ID).getIsFetchingLocalVideos()),A=useSelect(i=>i(STORE_ID).getLocalVideosQuery()||{}),g=useSelect(i=>i(STORE_ID).getLocalPagination());return{items:x,uploadedLocalVideoCount:S,isFetching:_,...A,...g,setPage:i=>dispatch(STORE_ID).setLocalVideosQuery({page:i})}},m=()=>useSelect(S=>S(STORE_ID).getVideosQuery()||{})},"../components/components/button/index.tsx":(f,p,e)=>{e.d(p,{Z:()=>n});var c=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=e.n(a),x=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(S),A=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),g={};g.insert="head",g.singleton=!1;var i=_()(A.Z,g);const s=A.Z.locals||{};var b=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=(0,x.forwardRef)((k,y)=>{var v,j;const{children:h,variant:P="primary",size:d="normal",weight:M="bold",icon:C,iconSize:I,disabled:D,isDestructive:V,isLoading:L,isExternalLink:T,className:R,text:N,fullWidth:J,...w}=k,U=m()(s.button,R,{[s.normal]:d==="normal",[s.small]:d==="small",[s.icon]:!!C,[s.loading]:L,[s.regular]:M==="regular",[s["full-width"]]:J,[s["is-icon-button"]]:!!C&&!h});w.ref=y;const z=d==="normal"?20:16,o=T&&(0,b.jsx)(t.Z,{size:z,icon:u.Z,className:s["external-icon"]}),O=T?"_blank":void 0,E=(h==null?void 0:h[0])&&h[0]!==null&&((j=(v=h==null?void 0:h[0])==null?void 0:v.props)==null?void 0:j.className)!=="components-tooltip";return(0,b.jsxs)(c.ZP,{target:O,variant:P,className:m()(U,{"has-text":!!C&&E}),icon:T?void 0:C,iconSize:I,disabled:D,"aria-disabled":D,isDestructive:V,text:N,...w,children:[L&&(0,b.jsx)(r.ZP,{}),(0,b.jsx)("span",{children:h}),o]})});l.displayName="Button";const n=l;try{l.displayName="Button",l.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:l.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(k){}},"../components/components/layout/col/index.tsx":(f,p,e)=>{e.d(p,{Z:()=>b});var c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(c),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(u),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),x={};x.insert="head",x.singleton=!1;var S=a()(m.Z,x);const _=m.Z.locals||{},A=Number(_.smCols),g=Number(_.mdCols),i=Number(_.lgCols),b=l=>{const{children:n,tagName:k="div",className:y}=l,h=Math.min(A,typeof l.sm=="number"?l.sm:A),P=Math.min(A,typeof l.sm=="object"?l.sm.start:0),d=Math.min(A,typeof l.sm=="object"?l.sm.end:0),M=Math.min(g,typeof l.md=="number"?l.md:g),C=Math.min(g,typeof l.md=="object"?l.md.start:0),I=Math.min(g,typeof l.md=="object"?l.md.end:0),D=Math.min(i,typeof l.lg=="number"?l.lg:i),V=Math.min(i,typeof l.lg=="object"?l.lg.start:0),L=Math.min(i,typeof l.lg=="object"?l.lg.end:0),T=r()(y,{[_[`col-sm-${h}`]]:!(P&&d),[_[`col-sm-${P}-start`]]:P>0,[_[`col-sm-${d}-end`]]:d>0,[_[`col-md-${M}`]]:!(C&&I),[_[`col-md-${C}-start`]]:C>0,[_[`col-md-${I}-end`]]:I>0,[_[`col-lg-${D}`]]:!(V&&L),[_[`col-lg-${V}-start`]]:V>0,[_[`col-lg-${L}-end`]]:L>0});return(0,t.createElement)(k,{className:T},n)}},"../components/components/layout/container/index.tsx":(f,p,e)=>{e.d(p,{Z:()=>g});var c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(c),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(u),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),x={};x.insert="head",x.singleton=!1;var S=a()(m.Z,x);const _=m.Z.locals||{},g=({children:i,fluid:s=!1,tagName:b="div",className:l,horizontalGap:n=1,horizontalSpacing:k=1})=>{const y=(0,t.useMemo)(()=>{const P=`calc( var(--horizontal-spacing) * ${k} )`,d=`calc( var(--horizontal-spacing) * ${n} )`;return{paddingTop:P,paddingBottom:P,rowGap:d}},[n,k]),h=r()(l,_.container,{[_.fluid]:s});return(0,t.createElement)(b,{className:h,style:y},i)}},"../components/components/layout/use-breakpoint-match/index.ts":(f,p,e)=>{e.d(p,{Z:()=>g});var c=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(r),u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),a={};a.insert="head",a.singleton=!1;var m=t()(u.Z,a);const x=u.Z.locals||{},S=["sm","md","lg"],_=(i,s,b)=>{const l=S.indexOf(i),n=l+1,k=s.includes("=");let y=[];return s.startsWith("<")&&(y=S.slice(0,k?n:l)),s.startsWith(">")&&(y=S.slice(k?l:n)),y!=null&&y.length?y.some(h=>b[h]):b[i]},g=(i,s)=>{const b=Array.isArray(i)?i:[i],l=Array.isArray(s)?s:[s],[n,k,y]=S,h=(0,c.Z)(x[n]),P=(0,c.Z)(x[k]),d=(0,c.Z)(x[y]),M={sm:h,md:P,lg:d};return b.map((C,I)=>{const D=l[I];return D?_(C,D,M):M[C]})}},"../../packages/videopress/src/client/admin/components/checkbox/index.tsx":(f,p,e)=>{e.d(p,{Z:()=>i});var c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(c),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(u),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss"),x={};x.insert="head",x.singleton=!1;var S=a()(m.Z,x);const _=m.Z.locals||{};var A=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=(0,t.forwardRef)(({checked:s,onChange:b,className:l,...n},k)=>{const y=h=>{b==null||b(h.target.checked)};return(0,A.jsx)("input",{...n,ref:k,type:"checkbox",checked:s,className:r()(l,_.checkbox),onChange:y})});g.displayName="Checkbox";const i=g;try{g.displayName="Checkbox",g.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"]={docgenInfo:g.__docgenInfo,name:"Checkbox",path:"../../packages/videopress/src/client/admin/components/checkbox/index.tsx#Checkbox"})}catch(s){}},"../../packages/videopress/src/client/admin/components/video-filter/index.tsx":(f,p,e)=>{e.d(p,{JC:()=>w,Lb:()=>N,Oy:()=>U});var c=e("../components/components/button/index.tsx"),r=e("../components/components/text/index.tsx"),t=e("../components/components/layout/use-breakpoint-match/index.ts"),u=e("../components/components/layout/container/index.tsx"),a=e("../components/components/layout/col/index.tsx"),m=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),S=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),A=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),g=e.n(A),i=e("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=(0,s.jsxs)(i.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)(i.UL,{x:"5",y:"7",width:"14",height:"1.5"}),(0,s.jsx)(i.UL,{x:"7",y:"11.25",width:"10",height:"1.5"}),(0,s.jsx)(i.UL,{x:"9",y:"15.5",width:"6",height:"1.5"})]});var n=e("../../packages/videopress/src/client/state/constants.js"),k=e("../../../node_modules/.pnpm/react-router@5.3.4_react@18.2.0/node_modules/react-router/esm/react-router.js");const y=()=>{const o=(0,k.TH)(),O=(0,k.k6)(),E=new URLSearchParams(o.search);return{getParam:(B,W=null)=>E.has(B)?E.get(B):W,setParam:(B,W=null)=>{E.set(B,W)},deleteParam:B=>{E.delete(B)},update:()=>{const B="?"+E.toString();B!==O.location.search&&O.push({search:B})},reset:()=>{O.location.search!==""&&O.replace({pathname:O.location.pathname,search:""})}}};var h=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js");function P(){const o=(0,h.Z)(E=>E(n.tT).getUsers()),O=(0,h.Z)(E=>E(n.tT).getUsersPagination());return{items:o,...O}}var d=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),M=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),C=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(C),D=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss"),V={};V.insert="head",V.singleton=!1;var L=I()(D.Z,V);const T=D.Z.locals||{},R=x.__,N=o=>{const{isActive:O,...E}=o;return(0,s.jsx)(c.Z,{variant:O?"primary":"secondary",className:g()(T["filter-button"],{[T["is-active"]]:O}),icon:l,weight:"regular",...E,children:R("Filters","jetpack-videopress-pkg")})};N.displayName="FilterButton";const J=o=>(0,s.jsx)(m.ZP,{position:"middle center",text:o.message,children:(0,s.jsx)("span",{className:T["title-adornment"],children:(0,s.jsx)(S.Z,{icon:_.Z})})});J.displayName="DisabledReasonTooltip";const w=o=>(0,s.jsxs)("label",{htmlFor:o.for,className:T["checkbox-container"],children:[(0,s.jsx)(M.Z,{id:o.for,className:T.checkbox,onChange:o.onChange,checked:o.checked,disabled:o.disabled}),(0,s.jsx)("span",{className:T["checkbox-checkmark"]}),(0,s.jsx)(r.ZP,{variant:"body-small",children:o.label}),o.disabledReason&&(0,s.jsx)(J,{message:o.disabledReason})]});w.displayName="CheckboxCheckmark";const U=o=>{const[O]=(0,t.Z)("sm"),E=(v,j)=>{var Z,K;return((K=(Z=o==null?void 0:o.filter)==null?void 0:Z[v])==null?void 0:K[j])===!0};return(0,s.jsx)("div",{className:g()(T["filters-section"],o.className),children:(0,s.jsxs)(u.Z,{horizontalSpacing:O?2:4,horizontalGap:2,children:[(0,s.jsxs)(a.Z,{sm:4,md:4,lg:4,children:[(0,s.jsx)(r.ZP,{variant:"body-extra-small-bold",weight:"bold",children:R("Uploader","jetpack-videopress-pkg")}),o.uploaders.map(v=>(0,s.jsx)(w,{label:v.name,for:`uploader-${v.id}`,onChange:j=>{var Z;return(Z=o.onChange)==null?void 0:Z.call(o,n.Z5,v.id,j)},checked:E(n.Z5,v.id)},v.id))]}),(0,s.jsxs)(a.Z,{sm:4,md:4,lg:4,children:[(0,s.jsx)(r.ZP,{variant:"body-extra-small-bold",weight:"bold",children:R("Privacy","jetpack-videopress-pkg")}),(0,s.jsx)(w,{for:"filter-public",label:R("Public","jetpack-videopress-pkg"),onChange:v=>{var j;return(j=o.onChange)==null?void 0:j.call(o,n.jc,n.Vz.indexOf(n.$A),v)},checked:E(n.jc,n.Vz.indexOf(n.$A))}),(0,s.jsx)(w,{for:"filter-private",label:R("Private","jetpack-videopress-pkg"),onChange:v=>{var j;return(j=o.onChange)==null?void 0:j.call(o,n.jc,n.Vz.indexOf(n.UJ),v)},checked:E(n.jc,n.Vz.indexOf(n.UJ))})]}),(0,s.jsxs)(a.Z,{sm:4,md:4,lg:4,children:[(0,s.jsx)(r.ZP,{variant:"body-extra-small-bold",weight:"bold",children:R("Rating","jetpack-videopress-pkg")}),(0,s.jsx)(w,{for:"filter-g",label:R("G","jetpack-videopress-pkg"),onChange:v=>{var j;return(j=o.onChange)==null?void 0:j.call(o,n.ah,n.x4,v)},checked:E(n.ah,n.x4)}),(0,s.jsx)(w,{for:"filter-pg-13",label:R("PG-13","jetpack-videopress-pkg"),onChange:v=>{var j;return(j=o.onChange)==null?void 0:j.call(o,n.ah,n.pf,v)},checked:E(n.ah,n.pf)}),(0,s.jsx)(w,{for:"filter-r",label:R("R","jetpack-videopress-pkg"),onChange:v=>{var j;return(j=o.onChange)==null?void 0:j.call(o,n.ah,n.Gr,v)},checked:E(n.ah,n.Gr)})]})]})})};U.displayName="FilterSection";const z=o=>{const{setFilter:O,filter:E}=(0,d.ZP)(),v=y(),j=(...K)=>{v.deleteParam("page"),v.update(),O(...K)},{items:Z}=P();return(0,s.jsx)(U,{...o,onChange:j,uploaders:Z,filter:E})};z.displayName="ConnectFilterSection";try{N.displayName="FilterButton",N.__docgenInfo={description:"",displayName:"FilterButton",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"]={docgenInfo:N.__docgenInfo,name:"FilterButton",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterButton"})}catch(o){}try{w.displayName="CheckboxCheckmark",w.__docgenInfo={description:"",displayName:"CheckboxCheckmark",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},for:{defaultValue:null,description:"",name:"for",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},disabledReason:{defaultValue:null,description:"",name:"disabledReason",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"]={docgenInfo:w.__docgenInfo,name:"CheckboxCheckmark",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#CheckboxCheckmark"})}catch(o){}try{U.displayName="FilterSection",U.__docgenInfo={description:"",displayName:"FilterSection",props:{uploaders:{defaultValue:null,description:"",name:"uploaders",required:!0,type:{name:"{ id: number; name: string; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'(filter: "uploader" | "privacy" | "rating", value: number | "PG-13" | "G" | "R-17", checked: boolean) => void'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"FilterObject"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"]={docgenInfo:U.__docgenInfo,name:"FilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#FilterSection"})}catch(o){}try{z.displayName="ConnectFilterSection",z.__docgenInfo={description:"",displayName:"ConnectFilterSection",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"]={docgenInfo:z.__docgenInfo,name:"ConnectFilterSection",path:"../../packages/videopress/src/client/admin/components/video-filter/index.tsx#ConnectFilterSection"})}catch(o){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(f,p,e)=>{e.d(p,{Z:()=>m});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(t),a=u()(r());a.push([f.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),a.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const m=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(f,p,e)=>{e.d(p,{Z:()=>m});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(t),a=u()(r());a.push([f.id,"",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const m=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(f,p,e)=>{e.d(p,{Z:()=>m});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(t),a=u()(r());a.push([f.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const m=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(f,p,e)=>{e.d(p,{Z:()=>m});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(t),a=u()(r());a.push([f.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const m=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/checkbox/style.module.scss":(f,p,e)=>{e.d(p,{Z:()=>m});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(t),a=u()(r());a.push([f.id,'.mX6yyxYktM6iYgvgkxWq[type=checkbox]{all:unset;border:1px solid var(--jp-black);position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:2px;margin:0;padding:2px !important}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before,.mX6yyxYktM6iYgvgkxWq[type=checkbox]::before{content:"";width:18px;height:18px;margin:0}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:checked::before{background:var(--jp-black)}.mX6yyxYktM6iYgvgkxWq[type=checkbox]:disabled{border:1px solid var(--jp-gray-10)}',""]),a.locals={checkbox:"mX6yyxYktM6iYgvgkxWq"};const m=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-filter/style.module.scss":(f,p,e)=>{e.d(p,{Z:()=>m});var c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(c),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=e.n(t),a=u()(r());a.push([f.id,'.jEvjz2gQtT1vCRZpq0FJ{flex-shrink:0}.jEvjz2gQtT1vCRZpq0FJ.K7BZwOItK4opz_tJl_6z>svg{fill:var(--jp-white)}.lSp75nRVCANyLynkFAYK{background-color:var(--jp-gray-0)}.lSp75nRVCANyLynkFAYK .euRiK9kFl5U0j6nnVsB1:last-child{margin-bottom:0}.euRiK9kFl5U0j6nnVsB1{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;height:20px;line-height:20px;margin-top:var(--spacing-base)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]{border:1px solid var(--jp-green-40);padding:0 !important;margin-right:10px}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:checked::before{background:var(--jp-green-40)}.euRiK9kFl5U0j6nnVsB1 .V0bWOZcP_klJCyrbsp7R[type=checkbox]:not(:checked)+.E5TxkJXJoBCg5Bzotc0i{display:none}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i{position:absolute;top:-1px;left:-1px;height:20px;width:20px;box-sizing:border-box}.euRiK9kFl5U0j6nnVsB1 .E5TxkJXJoBCg5Bzotc0i::after{position:absolute;left:8px;top:3px;width:5px;height:11px;border:solid var(--jp-white);border-width:0 1.5px 1.5px 0;transform:rotate(37deg);content:""}.EHwqpGExaCKP8e60NoBX{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.EHwqpGExaCKP8e60NoBX .components-tooltip.components-popover .components-popover__content{min-width:auto;max-width:256px;width:256px;white-space:break-spaces}',""]),a.locals={"filter-button":"jEvjz2gQtT1vCRZpq0FJ","is-active":"K7BZwOItK4opz_tJl_6z","filters-section":"lSp75nRVCANyLynkFAYK","checkbox-container":"euRiK9kFl5U0j6nnVsB1",checkbox:"V0bWOZcP_klJCyrbsp7R","checkbox-checkmark":"E5TxkJXJoBCg5Bzotc0i","title-adornment":"EHwqpGExaCKP8e60NoBX"};const m=a}}]);})();
