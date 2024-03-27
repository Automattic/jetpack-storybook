"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7483,3480],{"../../packages/videopress/src/client/admin/components/video-grid/stories/index.mdx":(p,c,s)=>{s.r(c),s.d(c,{default:()=>v});var i=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=s("../../../node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.2.67_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_=s("../../../node_modules/.pnpm/@storybook+blocks@8.0.4_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),o=s("../../packages/videopress/src/client/admin/components/video-grid/index.tsx"),t=s("../../packages/videopress/src/client/admin/components/video-grid/stories/index.stories.tsx");function r(e){const a={h1:"h1",...(0,m.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.h_,{of:t}),`
`,(0,n.jsx)(a.h1,{id:"videogrid",children:"VideoGrid"}),`
`,(0,n.jsx)(_.oG,{id:"packages-videopress-video-grid--default"})]})}function v(e={}){const{wrapper:a}={...(0,m.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},"../../packages/videopress/src/client/admin/components/video-grid/stories/index.stories.tsx":(p,c,s)=>{var r,v,e;s.r(c),s.d(c,{__namedExportsOrder:()=>t,_default:()=>o,default:()=>m});var i=s("../../packages/videopress/src/client/admin/components/video-grid/index.tsx"),n=s("../../packages/videopress/src/client/admin/mock/index.ts");const m={title:"Packages/VideoPress/Video Grid",component:i.Z},o=i.Z.bind({});o.args={videos:n.Ls.map(a=>({...a,title:a.videoTitle,duration:Math.floor(Math.random()*((3600+60*15)*1e3-25*1e3+1)+25*1e3),plays:Math.floor(Math.random()*1e6)})),count:6},o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"VideoGrid",...(e=(v=o.parameters)==null?void 0:v.docs)==null?void 0:e.source}}};const t=["_default"]},"../components/components/layout/col/index.tsx":(p,c,s)=>{s.d(c,{Z:()=>S});var i=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=s.n(i),m=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(_),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),r={};r.insert="head",r.singleton=!1;var v=o()(t.Z,r);const e=t.Z.locals||{},a=Number(e.smCols),E=Number(e.mdCols),g=Number(e.lgCols),S=d=>{const{children:y,tagName:D="div",className:M}=d,l=Math.min(a,typeof d.sm=="number"?d.sm:a),u=Math.min(a,typeof d.sm=="object"?d.sm.start:0),x=Math.min(a,typeof d.sm=="object"?d.sm.end:0),I=Math.min(E,typeof d.md=="number"?d.md:E),T=Math.min(E,typeof d.md=="object"?d.md.start:0),P=Math.min(E,typeof d.md=="object"?d.md.end:0),O=Math.min(g,typeof d.lg=="number"?d.lg:g),h=Math.min(g,typeof d.lg=="object"?d.lg.start:0),f=Math.min(g,typeof d.lg=="object"?d.lg.end:0),U=n()(M,{[e[`col-sm-${l}`]]:!(u&&x),[e[`col-sm-${u}-start`]]:u>0,[e[`col-sm-${x}-end`]]:x>0,[e[`col-md-${I}`]]:!(T&&P),[e[`col-md-${T}-start`]]:T>0,[e[`col-md-${P}-end`]]:P>0,[e[`col-lg-${O}`]]:!(h&&f),[e[`col-lg-${h}-start`]]:h>0,[e[`col-lg-${f}-end`]]:f>0});return(0,m.createElement)(D,{className:U},y)}},"../components/components/layout/container/index.tsx":(p,c,s)=>{s.d(c,{Z:()=>E});var i=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=s.n(i),m=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(_),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),r={};r.insert="head",r.singleton=!1;var v=o()(t.Z,r);const e=t.Z.locals||{},E=({children:g,fluid:j=!1,tagName:S="div",className:d,horizontalGap:y=1,horizontalSpacing:D=1})=>{const M=(0,m.useMemo)(()=>{const u=`calc( var(--horizontal-spacing) * ${D} )`,x=`calc( var(--horizontal-spacing) * ${y} )`;return{paddingTop:u,paddingBottom:u,rowGap:x}},[y,D]),l=n()(d,e.container,{[e.fluid]:j});return(0,m.createElement)(S,{className:l,style:M},g)}},"../../packages/videopress/src/client/admin/components/video-grid/index.tsx":(p,c,s)=>{s.d(c,{Z:()=>g});var i=s("../components/components/layout/container/index.tsx"),n=s("../components/components/layout/col/index.tsx"),m=s("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),_=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(_),t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-grid/style.module.scss"),r={};r.insert="head",r.singleton=!1;var v=o()(t.Z,r);const e=t.Z.locals||{};var a=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=({videos:j,count:S=6,onVideoDetailsClick:d,loading:y})=>{const D=j.slice(0,S),M=(l,u)=>()=>{u==null||u(j[l])};return(0,a.jsx)("div",{className:e.wrapper,children:(0,a.jsx)(i.Z,{fluid:!0,horizontalSpacing:0,horizontalGap:0,children:D.map((l,u)=>{var x;return(0,a.jsx)(n.Z,{sm:4,md:4,lg:4,children:(0,a.jsx)(m.ZP,{id:l==null?void 0:l.id,title:l.title,thumbnail:l==null?void 0:l.posterImage,duration:l.duration,plays:l.plays,onVideoDetailsClick:M(u,d),loading:y})},(x=l==null?void 0:l.guid)!=null?x:l==null?void 0:l.id)})})})};try{videogrid.displayName="videogrid",videogrid.__docgenInfo={description:"Video Grid component",displayName:"videogrid",props:{videos:{defaultValue:null,description:"Array of VideoPressVideo objects",name:"videos",required:!0,type:{name:"VideoPressVideo[]"}},onVideoDetailsClick:{defaultValue:null,description:"Callback to be called when click on Edit Details",name:"onVideoDetailsClick",required:!1,type:{name:"(video: VideoPressVideo) => void"}},count:{defaultValue:{value:"6"},description:"Count of videos to render into the grid",name:"count",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"Trigger loading state",name:"loading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-grid/index.tsx#videogrid"]={docgenInfo:videogrid.__docgenInfo,name:"videogrid",path:"../../packages/videopress/src/client/admin/components/video-grid/index.tsx#videogrid"})}catch(j){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(p,c,s)=>{s.d(c,{Z:()=>t});var i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=s.n(i),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=s.n(m),o=_()(n());o.push([p.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const t=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(p,c,s)=>{s.d(c,{Z:()=>t});var i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=s.n(i),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=s.n(m),o=_()(n());o.push([p.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const t=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-grid/style.module.scss":(p,c,s)=>{s.d(c,{Z:()=>t});var i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=s.n(i),m=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=s.n(m),o=_()(n());o.push([p.id,".GkpxtWzIwzGiI25ReVLN{--videopress-video-item-width: 360px;--videopress-video-item-gap: calc( var( --spacing-base ) * 3 );--videopress-video-grid: calc( var( --videopress-video-item-width ) * 3 + var( --videopress-video-item-gap ) * 2 );--videopress-video-grid: 100%;max-width:var(--videopress-video-grid)}",""]),o.locals={wrapper:"GkpxtWzIwzGiI25ReVLN"};const t=o}}]);})();