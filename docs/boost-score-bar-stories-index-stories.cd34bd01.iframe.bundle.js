"use strict";(()=>{var I=Object.defineProperty;var R=(d,c,s)=>c in d?I(d,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[c]=s;var L=(d,c,s)=>(R(d,typeof c!="symbol"?c+"":c,s),s);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9845],{"../components/components/boost-score-bar/stories/index.stories.tsx":(d,c,s)=>{var g,y,x;s.r(c),s.d(c,{__namedExportsOrder:()=>k,_default:()=>h,default:()=>j});var p=s("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),_=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=s("../components/components/gridicon/index.tsx"),o=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(o),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/boost-score-bar/style.scss"),r={};r.insert="head",r.singleton=!1;var b=a()(t.Z,r);const C=t.Z.locals||{};var e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=p.__,m=({score:i,isLoading:M,showPrevScores:E,active:T,prevScore:w=0,scoreBarType:z,noBoostScoreTooltip:V})=>{if(!T)return null;const O=w/i*100,H=n("Desktop score","jetpack"),B=n("Mobile score","jetpack"),P=()=>z==="desktop"?(0,e.jsx)(u.Z,{icon:"computer",size:24}):(0,e.jsx)(u.Z,{icon:"phone",size:24}),A=()=>M&&!i?"fill-loading":i>70?"fill-good":i>50?"fill-mediocre":"fill-bad";return(0,e.jsxs)("div",{className:(0,_.Z)("jb-score-bar",`jb-score-bar--${z}`),children:[(0,e.jsxs)("div",{className:"jb-score-bar__label",children:[P(),(0,e.jsx)("div",{children:z==="desktop"?H:B})]}),(0,e.jsx)("div",{className:"jb-score-bar__bounds",children:(0,e.jsxs)("div",{className:(0,_.Z)("jb-score-bar__filler",A()),style:{width:`${i}%`},children:[M?(0,e.jsx)("div",{className:"jb-score-bar__loading",children:(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 128 128",children:(0,e.jsxs)("g",{children:[(0,e.jsx)("path",{d:"M64 0a7 7 0 11-7 7 7 7 0 017-7zm29.86 12.2a2.8 2.8 0 11-3.83 1.02 2.8 2.8 0 013.83-1.02zm22.16 21.68a3.15 3.15 0 11-4.3-1.15 3.15 3.15 0 014.3 1.15zm.87 60.53a4.2 4.2 0 11-1.57-5.7 4.2 4.2 0 011.54 5.73zm7.8-30.5a3.85 3.85 0 11-3.85-3.85 3.85 3.85 0 013.85 3.84zm-30 53.2a4.55 4.55 0 111.66-6.23 4.55 4.55 0 01-1.67 6.22zM64 125.9a4.9 4.9 0 114.9-4.9 4.9 4.9 0 01-4.9 4.9zm-31.06-8.22a5.25 5.25 0 117.17-1.93 5.25 5.25 0 01-7.14 1.93zM9.9 95.1a5.6 5.6 0 117.65 2.06A5.6 5.6 0 019.9 95.1zM1.18 63.9a5.95 5.95 0 115.95 5.94 5.95 5.95 0 01-5.96-5.94zm8.1-31.6a6.3 6.3 0 112.32 8.6 6.3 6.3 0 01-2.3-8.6zM32.25 8.87a6.65 6.65 0 11-2.44 9.1 6.65 6.65 0 012.46-9.1z"}),(0,e.jsx)("animateTransform",{attributeName:"transform",type:"rotate",values:"0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64",calcMode:"discrete",dur:"1080ms",repeatCount:"indefinite"})]})})}):(0,e.jsx)("div",{className:"jb-score-bar__score",children:i}),E&&!!w&&w<i&&(0,e.jsxs)("div",{className:"jb-score-bar__no_boost_score",style:{left:`min(${O}%, calc( 100% - var(--clearance-space))`},children:[w,V&&(0,e.jsx)("div",{role:"tooltip",className:"jb-score-bar__no_boost_score_tooltip",children:V})]})]})})]})},f=m;try{m.displayName="BoostScoreBar",m.__docgenInfo={description:"",displayName:"BoostScoreBar",props:{score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"number"}},prevScore:{defaultValue:{value:"0"},description:"",name:"prevScore",required:!1,type:{name:"number"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},showPrevScores:{defaultValue:null,description:"",name:"showPrevScores",required:!0,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},scoreBarType:{defaultValue:null,description:"",name:"scoreBarType",required:!0,type:{name:"enum",value:[{value:'"desktop"'},{value:'"mobile"'}]}},noBoostScoreTooltip:{defaultValue:null,description:"",name:"noBoostScoreTooltip",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/boost-score-bar/index.tsx#BoostScoreBar"]={docgenInfo:m.__docgenInfo,name:"BoostScoreBar",path:"../components/components/boost-score-bar/index.tsx#BoostScoreBar"})}catch(i){}try{boostscorebar.displayName="boostscorebar",boostscorebar.__docgenInfo={description:"",displayName:"boostscorebar",props:{score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"number"}},prevScore:{defaultValue:{value:"0"},description:"",name:"prevScore",required:!1,type:{name:"number"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},showPrevScores:{defaultValue:null,description:"",name:"showPrevScores",required:!0,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},scoreBarType:{defaultValue:null,description:"",name:"scoreBarType",required:!0,type:{name:"enum",value:[{value:'"desktop"'},{value:'"mobile"'}]}},noBoostScoreTooltip:{defaultValue:null,description:"",name:"noBoostScoreTooltip",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/boost-score-bar/index.tsx#boostscorebar"]={docgenInfo:boostscorebar.__docgenInfo,name:"boostscorebar",path:"../components/components/boost-score-bar/index.tsx#boostscorebar"})}catch(i){}const S={title:"JS Packages/Components/Boost Score Bar",component:f,argTypes:{score:{control:"range",min:0,max:100,defaultValue:80},prevScore:{control:"range",min:0,max:100},isLoading:{control:"boolean"},showPrevScores:{control:"boolean"},active:{control:"boolean"},scoreBarType:{control:"radio",options:["desktop","mobile"]},noBoostScoreTooltip:{control:"text"}},decorators:[i=>(0,e.jsx)("div",{style:{width:"80%",maxWidth:"1320px",margin:"200px auto",fontSize:"16px"},children:(0,e.jsx)(i,{})})]},l={score:80,prevScore:70,isLoading:!1,showPrevScores:!0,active:!0,scoreBarType:"desktop",noBoostScoreTooltip:"No boost score"},j=S,h=(i=>(0,e.jsx)(f,{...i})).bind({});h.args=l,h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:"args => <BoostScoreBar {...args} />",...(x=(y=h.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const k=["_default"]},"../components/components/gridicon/index.tsx":(d,c,s)=>{s.d(c,{Z:()=>f});var p=s("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),_=s("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),u=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(o),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/gridicon/style.scss"),r={};r.insert="head",r.singleton=!1;var b=a()(t.Z,r);const C=t.Z.locals||{};var e=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=p.__;class m extends u.Component{needsOffset(l,j){return["gridicons-arrow-left","gridicons-arrow-right","gridicons-calendar","gridicons-cart","gridicons-folder","gridicons-info","gridicons-info-outline","gridicons-posts","gridicons-star-outline","gridicons-star"].indexOf(l)>=0?j%18===0:!1}getSVGDescription(l){if("description"in this.props)return this.props.description;switch(l){default:return"";case"gridicons-audio":return n("Has audio.","jetpack");case"gridicons-arrow-left":return n("Arrow left","jetpack");case"gridicons-arrow-right":return n("Arrow right","jetpack");case"gridicons-calendar":return n("Is an event.","jetpack");case"gridicons-cart":return n("Is a product.","jetpack");case"chevron-down":return n("Show filters","jetpack");case"gridicons-comment":return n("Matching comment.","jetpack");case"gridicons-cross":return n("Close.","jetpack");case"gridicons-filter":return n("Toggle search filters.","jetpack");case"gridicons-folder":return n("Category","jetpack");case"gridicons-info":case"gridicons-info-outline":return n("Information.","jetpack");case"gridicons-image-multiple":return n("Has multiple images.","jetpack");case"gridicons-image":return n("Has an image.","jetpack");case"gridicons-page":return n("Page","jetpack");case"gridicons-post":return n("Post","jetpack");case"gridicons-jetpack-search":case"gridicons-search":return n("Magnifying Glass","jetpack");case"gridicons-tag":return n("Tag","jetpack");case"gridicons-video":return n("Has a video.","jetpack")}}renderIcon(l){switch(l){default:return null;case"gridicons-audio":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M8 4v10.184C7.686 14.072 7.353 14 7 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7h7v4.184c-.314-.112-.647-.184-1-.184-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4H8z"})});case"gridicons-arrow-left":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})});case"gridicons-arrow-right":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})});case"gridicons-block":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z"})});case"gridicons-calendar":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z"})});case"gridicons-cart":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5c.937 0 1.75-.65 1.952-1.566L21 5H7V4c0-1.105-.895-2-2-2H3v2h2v11c0 1.105.895 2 2 2h12c0-1.105-.895-2-2-2H7v-2h10.396z"})});case"gridicons-checkmark":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"})});case"gridicons-chevron-left":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M16.443 7.41L15.0399 6L9.06934 12L15.0399 18L16.443 16.59L11.8855 12L16.443 7.41Z"})});case"gridicons-chevron-right":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M10.2366 6L8.8335 7.41L13.391 12L8.8335 16.59L10.2366 18L16.2072 12L10.2366 6Z"})});case"gridicons-chevron-down":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"})});case"gridicons-comment":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M3 6v9c0 1.105.895 2 2 2h9v5l5.325-3.804c1.05-.75 1.675-1.963 1.675-3.254V6c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2z"})});case"gridicons-computer":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 2H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm0 14H4V4h16v12z"})});case"gridicons-cross":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"})});case"gridicons-filter":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z"})});case"gridicons-folder":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"})});case"gridicons-image":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M13 9.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM22 6v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2zm-2 0H4v7.444L8 9l5.895 6.55 1.587-1.85c.798-.932 2.24-.932 3.037 0L20 15.426V6z"})});case"gridicons-image-multiple":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5zM4 20h14c0 1.105-.895 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.105.895-2 2-2v14zM22 4v12c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zM8 4v6.333L11 7l4.855 5.395.656-.73c.796-.886 2.183-.886 2.977 0l.513.57V4H8z"})});case"gridicons-info":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})});case"gridicons-info-outline":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"})});case"gridicons-jetpack-search":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M0 9.257C0 4.15 4.151 0 9.257 0c5.105 0 9.256 4.151 9.256 9.257a9.218 9.218 0 01-2.251 6.045l.034.033h1.053L24 22.01l-1.986 1.989-6.664-6.662v-1.055l-.033-.033a9.218 9.218 0 01-6.06 2.264C4.15 18.513 0 14.362 0 9.257zm4.169 1.537h4.61V1.82l-4.61 8.973zm5.547-3.092v8.974l4.61-8.974h-4.61z"})});case"gridicons-phone":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M16 2H8c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z"})});case"gridicons-pages":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z"})});case"gridicons-posts":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"})});case"gridicons-search":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"})});case"gridicons-star-outline":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z"})});case"gridicons-star":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304"})});case"gridicons-tag":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"})});case"gridicons-video":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M20 4v2h-2V4H6v2H4V4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2v-2h2v2h12v-2h2v2c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM6 16H4v-3h2v3zm0-5H4V8h2v3zm4 4V9l4.5 3-4.5 3zm10 1h-2v-3h2v3zm0-5h-2V8h2v3z"})});case"gridicons-lock":return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("g",{id:"lock",children:(0,e.jsx)("path",{d:"M18,8h-1V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H6c-1.105,0-2,0.895-2,2v10c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V10 C20,8.895,19.105,8,18,8z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M13,15.723V18h-2v-2.277c-0.595-0.346-1-0.984-1-1.723 c0-1.105,0.895-2,2-2s2,0.895,2,2C14,14.738,13.595,15.376,13,15.723z"})}),(0,e.jsx)("g",{id:"Layer_1"})]});case"gridicons-external":return(0,e.jsx)("g",{children:(0,e.jsx)("path",{d:"M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})})}}render(){const{size:l=24,className:j=""}=this.props,v=this.props.height||l,h=this.props.width||l,k=this.props.style||{height:v,width:h},g="gridicons-"+this.props.icon,y=(0,_.Z)("gridicon",g,j,{"needs-offset":this.needsOffset(g,l)}),x=this.getSVGDescription(g);return(0,e.jsxs)("svg",{className:y,focusable:this.props.focusable,height:v,onClick:this.props.onClick,style:k,viewBox:"0 0 24 24",width:h,xmlns:"http://www.w3.org/2000/svg","aria-hidden":this.props["aria-hidden"],children:[x?(0,e.jsx)("desc",{children:x}):null,this.renderIcon(g)]})}}L(m,"defaultProps",{"aria-hidden":"false",focusable:"true"});const f=m;try{m.displayName="Gridicon",m.__docgenInfo={description:"",displayName:"Gridicon",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"HTML class name",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Description for SVG for screen readers",name:"description",required:!1,type:{name:"string"}},focusable:{defaultValue:{value:"true"},description:"Whether SVG is focussable",name:"focusable",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"SVG height",name:"height",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"VoidFunction"}},size:{defaultValue:null,description:"SVG width and height",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"SVG style",name:"style",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:null,description:"SVG width",name:"width",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/gridicon/index.tsx#Gridicon"]={docgenInfo:m.__docgenInfo,name:"Gridicon",path:"../components/components/gridicon/index.tsx#Gridicon"})}catch(S){}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(d,c,s)=>{s.d(c,{Z:()=>u});function p(o){var a,t,r="";if(typeof o=="string"||typeof o=="number")r+=o;else if(typeof o=="object")if(Array.isArray(o)){var b=o.length;for(a=0;a<b;a++)o[a]&&(t=p(o[a]))&&(r&&(r+=" "),r+=t)}else for(t in o)o[t]&&(r&&(r+=" "),r+=t);return r}function _(){for(var o,a,t=0,r="",b=arguments.length;t<b;t++)(o=arguments[t])&&(a=p(o))&&(r&&(r+=" "),r+=a);return r}const u=_},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/boost-score-bar/style.scss":(d,c,s)=>{s.d(c,{Z:()=>t});var p=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(p),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),o=s.n(u),a=o()(_());a.push([d.id,'.jb-score-bar__score,.jb-score-bar__label,.jb-score-bar__loading{background-color:#fff;border-radius:42px;height:42px;display:flex;align-items:center;border:2px solid rgba(0,0,0,0)}.jb-score-bar{width:100%;display:flex;color:var(--jp-gray-70)}.jb-score-bar--mobile{margin-bottom:1.5rem}@media(max-width: 767px){.jb-score-bar{flex-direction:column}.jb-score-bar__label{background-color:rgba(0,0,0,0)}}.jb-score-bar__loading{width:42px;display:flex;align-items:center;justify-content:center}.jb-score-bar__label{display:grid;grid-template-columns:24px 1fr;grid-column-gap:10px;justify-content:center;font-size:14px;position:relative}@media(min-width: 768px){.jb-score-bar__label{padding-left:15px;padding-right:15px;width:200px;z-index:50}}.jb-score-bar__score{border-radius:100%;font-weight:700;width:42px;justify-content:center;position:absolute;right:-1px;height:42px}.jb-score-bar__bounds{background-color:#f1f1f1;border-radius:21px;display:flex;height:42px;width:100%;max-width:100%;position:relative;z-index:40}@media(min-width: 768px){.jb-score-bar__bounds{width:calc(100% + 21px);margin-left:-21px}}.jb-score-bar__filler{display:flex;min-width:85px;justify-content:flex-end;border-radius:0 42px 42px 0;transition:width 300ms ease-in-out;will-change:width;width:0;position:relative}@media(max-width: 767px){.jb-score-bar__filler{min-width:43px;border-radius:inherit}}.jb-score-bar__no_boost_score{--clearance-space: 74px;position:absolute;background:#fff;border-radius:50%;padding:3px;top:6px;width:28px;height:28px;line-height:1.625;font-size:.7em;text-align:center;cursor:pointer;z-index:2;border:2px solid rgba(0,0,0,0);background-clip:padding-box}.jb-score-bar__no_boost_score:hover{border:2px solid rgba(255,255,255,.5)}.jb-score-bar__no_boost_score::after{content:" ";width:0;height:0;border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-bottom:6px solid #fff;position:absolute;top:28px;left:6px}.jb-score-bar__no_boost_score_tooltip{box-shadow:0 0 20px 0 rgba(170,170,170,.28);position:absolute;top:-62px;left:-10em;width:20em;background:#fff;padding:16px;border-radius:4px;margin:0 16px;display:none}.jb-score-bar__no_boost_score_tooltip::after{content:" ";width:0;height:0;border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid #fff;position:absolute;bottom:-6px;left:10em;margin:0 -10px}.jb-score-bar__no_boost_score:hover .jb-score-bar__no_boost_score_tooltip{display:block}.jb-score-bar .fill-loading{background-color:var(--jp-white)}.jb-score-bar .fill-good{background-color:var(--jp-green)}.jb-score-bar .fill-mediocre{background-color:var(--jp-orange-20)}.jb-score-bar .fill-bad{background-color:var(--jp-red-50)}',""]);const t=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/gridicon/style.scss":(d,c,s)=>{s.d(c,{Z:()=>t});var p=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=s.n(p),u=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),o=s.n(u),a=o()(_());a.push([d.id,".gridicon{fill:currentColor;display:inline-block}.gridicon.needs-offset g{transform:translate(1px, 1px)}.gridicon.needs-offset-x g{transform:translate(1px, 0)}.gridicon.needs-offset-y g{transform:translate(0, 1px)}",""]);const t=a}}]);})();
