"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3480],{"../../packages/videopress/src/client/admin/components/video-grid/stories/index.stories.tsx":(v,a,o)=>{var d,i,u;o.r(a),o.d(a,{__namedExportsOrder:()=>M,_default:()=>t,default:()=>n});var c=o("../../packages/videopress/src/client/admin/components/video-grid/index.tsx"),m=o("../../packages/videopress/src/client/admin/mock/index.ts"),r=`import VideoGrid from '..';
import { videos } from '../../../mock';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Grid',
	component: VideoGrid,
} as ComponentMeta< typeof VideoGrid >;

const Template: ComponentStory< typeof VideoGrid > = VideoGrid;

export const _default = Template.bind( {} );
_default.args = {
	videos: videos.map( video => ( {
		...video,
		title: video.videoTitle,
		duration: Math.floor(
			Math.random() * ( ( 3600 + 60 * 15 ) * 1000 - 25 * 1000 + 1 ) + 25 * 1000
		), // 25 seconds to 1 hour and 15 minutes
		plays: Math.floor( Math.random() * 1000000 ),
	} ) ),
	count: 6,
};
`,_={_default:{startLoc:{col:53,line:10},endLoc:{col:62,line:10},startBody:{col:53,line:10},endBody:{col:62,line:10}}};const n={parameters:{storySource:{source:`import VideoGrid from '..';
import { videos } from '../../../mock';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Grid',
	component: VideoGrid,
} as ComponentMeta< typeof VideoGrid >;

const Template: ComponentStory< typeof VideoGrid > = VideoGrid;

export const _default = Template.bind( {} );
_default.args = {
	videos: videos.map( video => ( {
		...video,
		title: video.videoTitle,
		duration: Math.floor(
			Math.random() * ( ( 3600 + 60 * 15 ) * 1000 - 25 * 1000 + 1 ) + 25 * 1000
		), // 25 seconds to 1 hour and 15 minutes
		plays: Math.floor( Math.random() * 1000000 ),
	} ) ),
	count: 6,
};
`,locationsMap:{default:{startLoc:{col:53,line:10},endLoc:{col:62,line:10},startBody:{col:53,line:10},endBody:{col:62,line:10}}}}},title:"Packages/VideoPress/Video Grid",component:c.Z},t=c.Z.bind({});t.args={videos:m.Ls.map(g=>({...g,title:g.videoTitle,duration:Math.floor(Math.random()*((3600+60*15)*1e3-25*1e3+1)+25*1e3),plays:Math.floor(Math.random()*1e6)})),count:6},t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"VideoGrid",...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const M=["_default"]},"../components/components/layout/col/index.tsx":(v,a,o)=>{o.d(a,{Z:()=>j});var c=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=o.n(c),r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=o.n(_),l=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss"),t={};t.insert="head",t.singleton=!1;var M=n()(l.Z,t);const d=l.Z.locals||{},i=Number(d.smCols),u=Number(d.mdCols),g=Number(d.lgCols),j=e=>{const{children:E,tagName:S="div",className:T}=e,s=Math.min(i,typeof e.sm=="number"?e.sm:i),p=Math.min(i,typeof e.sm=="object"?e.sm.start:0),y=Math.min(i,typeof e.sm=="object"?e.sm.end:0),I=Math.min(u,typeof e.md=="number"?e.md:u),f=Math.min(u,typeof e.md=="object"?e.md.start:0),h=Math.min(u,typeof e.md=="object"?e.md.end:0),A=Math.min(g,typeof e.lg=="number"?e.lg:g),D=Math.min(g,typeof e.lg=="object"?e.lg.start:0),P=Math.min(g,typeof e.lg=="object"?e.lg.end:0),U=m()(T,{[d[`col-sm-${s}`]]:!(p&&y),[d[`col-sm-${p}-start`]]:p>0,[d[`col-sm-${y}-end`]]:y>0,[d[`col-md-${I}`]]:!(f&&h),[d[`col-md-${f}-start`]]:f>0,[d[`col-md-${h}-end`]]:h>0,[d[`col-lg-${A}`]]:!(D&&P),[d[`col-lg-${D}-start`]]:D>0,[d[`col-lg-${P}-end`]]:P>0});return(0,r.createElement)(S,{className:U},E)}},"../components/components/layout/container/index.tsx":(v,a,o)=>{o.d(a,{Z:()=>u});var c=o("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),m=o.n(c),r=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=o.n(_),l=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss"),t={};t.insert="head",t.singleton=!1;var M=n()(l.Z,t);const d=l.Z.locals||{},u=({children:g,fluid:x=!1,tagName:j="div",className:e,horizontalGap:E=1,horizontalSpacing:S=1})=>{const T=(0,r.useMemo)(()=>{const p=`calc( var(--horizontal-spacing) * ${S} )`,y=`calc( var(--horizontal-spacing) * ${E} )`;return{paddingTop:p,paddingBottom:p,rowGap:y}},[E,S]),s=m()(e,d.container,{[d.fluid]:x});return(0,r.createElement)(j,{className:s,style:T},g)}},"../../packages/videopress/src/client/admin/components/video-grid/index.tsx":(v,a,o)=>{o.d(a,{Z:()=>g});var c=o("../components/components/layout/container/index.tsx"),m=o("../components/components/layout/col/index.tsx"),r=o("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),_=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=o.n(_),l=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-grid/style.module.scss"),t={};t.insert="head",t.singleton=!1;var M=n()(l.Z,t);const d=l.Z.locals||{};var i=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const u=({videos:x,count:j=6,onVideoDetailsClick:e,loading:E})=>{const S=x.slice(0,j),T=(s,p)=>()=>{p==null||p(x[s])};return(0,i.jsx)("div",{className:d.wrapper,children:(0,i.jsx)(c.Z,{fluid:!0,horizontalSpacing:0,horizontalGap:0,children:S.map((s,p)=>{var y;return(0,i.jsx)(m.Z,{sm:4,md:4,lg:4,children:(0,i.jsx)(r.ZP,{id:s==null?void 0:s.id,title:s.title,thumbnail:s==null?void 0:s.posterImage,duration:s.duration,plays:s.plays,onVideoDetailsClick:T(p,e),loading:E})},(y=s==null?void 0:s.guid)!=null?y:s==null?void 0:s.id)})})})};u.displayName="VideoGrid";const g=u;try{videogrid.displayName="videogrid",videogrid.__docgenInfo={description:"Video Grid component",displayName:"videogrid",props:{videos:{defaultValue:null,description:"Array of VideoPressVideo objects",name:"videos",required:!0,type:{name:"VideoPressVideo[]"}},onVideoDetailsClick:{defaultValue:null,description:"Callback to be called when click on Edit Details",name:"onVideoDetailsClick",required:!1,type:{name:"(video: VideoPressVideo) => void"}},count:{defaultValue:{value:"6"},description:"Count of videos to render into the grid",name:"count",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"Trigger loading state",name:"loading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-grid/index.tsx#videogrid"]={docgenInfo:videogrid.__docgenInfo,name:"videogrid",path:"../../packages/videopress/src/client/admin/components/video-grid/index.tsx#videogrid"})}catch(x){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/col/style.module.scss":(v,a,o)=>{o.d(a,{Z:()=>l});var c=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=o.n(c),r=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=o.n(r),n=_()(m());n.push([v.id,"@media(max-width: 599px){.TNVxw_ZOJEEynDiM2QYM{grid-column-end:span 1}.Ks8DhEoe0M2rg7i8Qcos{grid-column-start:1}.hPWQqxgVUkTp5NQqrfIn{grid-column-end:2}.H1CbUDrI72aXZoHz2P6C{grid-column-end:span 2}.xyTGpD3bVBInLbgP2lMK{grid-column-start:2}.pEBM8SUyhDj4XyIAYiAq{grid-column-end:3}.xbDPzcogSD2JnGmDyiWZ{grid-column-end:span 3}.fooSursJQahboNx68m3R{grid-column-start:3}.ufTVtUIEIdl9sKOoDgNi{grid-column-end:4}.dwPTqpku444IkQCTeDyr{grid-column-end:span 4}.TpMbkMlo3BQATa8vlznp{grid-column-start:4}.WqNt7hKsjzie3UHqUDJ3{grid-column-end:5}}@media(min-width: 600px)and (max-width: 959px){.FIPb1cviSpE3bfv7tgh7{grid-column-end:span 1}.gJ3mUUPEUQSOLyVyzgLR{grid-column-start:1}.heLAMmYtuFGNteEBNd_K{grid-column-end:2}._Z6bV0ViNirPwmUfTUPc{grid-column-end:span 2}.TtipIIkNLkoby9hzkg2g{grid-column-start:2}.eZ7EWTzJ0eyiwaX80vF7{grid-column-end:3}.BPB1lJYdD9ZF06iU4JqN{grid-column-end:span 3}.mqdtFrxVPqGF69R0ve5t{grid-column-start:3}.W2xRsVUNx4v0bnLZkmLf{grid-column-end:4}.brzzMXJ7uTSUxLhuHlvO{grid-column-end:span 4}.Ua3ENGWSij5OPxJjU4YQ{grid-column-start:4}.Lege9ZfULqw4bTPSEzBT{grid-column-end:5}.R7e1X1OppSwNk7pM_UsU{grid-column-end:span 5}.RXH55oeqA0tzBC268Vvn{grid-column-start:5}.yUqSSBRI2Ba4GULTKEo5{grid-column-end:6}.zgIeYtocCoyRpWMLoA8j{grid-column-end:span 6}.SJgsi7ohYrB9Suu2lwKQ{grid-column-start:6}.evXJXU4ZVmaU3fHbNShw{grid-column-end:7}.OvJtAyKa4CnaJTxrWULN{grid-column-end:span 7}.Tdncikb2MHUB9M8_pzrz{grid-column-start:7}.SznBcu1iExeI62bDI2fv{grid-column-end:8}.dMfdjRo9r2UqnWUO7K7j{grid-column-end:span 8}.RZ8AuwBi2INOYbA3GNes{grid-column-start:8}.gd_tTH3gswBbD0luK4cg{grid-column-end:9}}@media(min-width: 960px){.xOPnT0A5q3l85vlYlB4Z{grid-column-end:span 1}.fYBJDNQ9E5_5wrdSOMHV{grid-column-start:1}.CuviEyxy4A5nI6ZgqQWU{grid-column-end:2}.zir7Y2inBNCuoM331HQS{grid-column-end:span 2}.hneE2V6DFFUK7Z2VlP1k{grid-column-start:2}.JdqTodnmzgM8fNPWGYsD{grid-column-end:3}.pfCLtxtdyfzqKtptYkey{grid-column-end:span 3}.qdvpCh5XwqZBTSQZriSu{grid-column-start:3}.EdkicJW5QtuFGwEtbRrD{grid-column-end:4}.VBsWJStlfQs3FFFuLJgp{grid-column-end:span 4}.TMMxlyKjw7uAASuXktdd{grid-column-start:4}.yOdXvT2PcHRSEAb64oQ5{grid-column-end:5}.k4m90rwEinnOv4X9wCUo{grid-column-end:span 5}.vRMTlNglaIKviScEPcj2{grid-column-start:5}.HJr5rbm2AYnx5iq6yjYw{grid-column-end:6}.f3Wlyk_5EPtXwRmju9bu{grid-column-end:span 6}.DuySSESVIp5ulLCI7gDZ{grid-column-start:6}.YxyyciwGy6DD9y7D7_RA{grid-column-end:7}.T09hcaBcvJppEI8fkeob{grid-column-end:span 7}.sfHLOAucQPyThoatcJlb{grid-column-start:7}.ugj03iSq_LpMPjktSIwW{grid-column-end:8}.O5lpDYm2qg9VuumTrrEw{grid-column-end:span 8}.TLrJVaWtw1Dsta_v5JcP{grid-column-start:8}.OqZ0YRgBvvTNJjsWS7pb{grid-column-end:9}.qr94d82SNkd1ExXHZPJq{grid-column-end:span 9}.H7dCJfM9V64l4aJI2aYD{grid-column-start:9}.xgcnaSvEwWA7naPdo1Q7{grid-column-end:10}.joclYxhsEaNNF4bUW_ue{grid-column-end:span 10}.DKuepavoRxT2sWRScNUO{grid-column-start:10}.LeArlDExZKDiDVBz9j2H{grid-column-end:11}.jhzmR1UDav7Cr1C83NGQ{grid-column-end:span 11}.qeM8lIjXYZiST414vxJk{grid-column-start:11}.sHBullB2KBN_dcAHo02k{grid-column-end:12}.UasosPijxHsKZnWpd0mT{grid-column-end:span 12}.pPlntrGl3JYhJi4XVrGp{grid-column-start:12}.hLgosun56kR2j4m1OdkM{grid-column-end:13}}",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",smCols:"4",mdCols:"8",lgCols:"12","col-sm-1":"TNVxw_ZOJEEynDiM2QYM","col-sm-1-start":"Ks8DhEoe0M2rg7i8Qcos","col-sm-1-end":"hPWQqxgVUkTp5NQqrfIn","col-sm-2":"H1CbUDrI72aXZoHz2P6C","col-sm-2-start":"xyTGpD3bVBInLbgP2lMK","col-sm-2-end":"pEBM8SUyhDj4XyIAYiAq","col-sm-3":"xbDPzcogSD2JnGmDyiWZ","col-sm-3-start":"fooSursJQahboNx68m3R","col-sm-3-end":"ufTVtUIEIdl9sKOoDgNi","col-sm-4":"dwPTqpku444IkQCTeDyr","col-sm-4-start":"TpMbkMlo3BQATa8vlznp","col-sm-4-end":"WqNt7hKsjzie3UHqUDJ3","col-md-1":"FIPb1cviSpE3bfv7tgh7","col-md-1-start":"gJ3mUUPEUQSOLyVyzgLR","col-md-1-end":"heLAMmYtuFGNteEBNd_K","col-md-2":"_Z6bV0ViNirPwmUfTUPc","col-md-2-start":"TtipIIkNLkoby9hzkg2g","col-md-2-end":"eZ7EWTzJ0eyiwaX80vF7","col-md-3":"BPB1lJYdD9ZF06iU4JqN","col-md-3-start":"mqdtFrxVPqGF69R0ve5t","col-md-3-end":"W2xRsVUNx4v0bnLZkmLf","col-md-4":"brzzMXJ7uTSUxLhuHlvO","col-md-4-start":"Ua3ENGWSij5OPxJjU4YQ","col-md-4-end":"Lege9ZfULqw4bTPSEzBT","col-md-5":"R7e1X1OppSwNk7pM_UsU","col-md-5-start":"RXH55oeqA0tzBC268Vvn","col-md-5-end":"yUqSSBRI2Ba4GULTKEo5","col-md-6":"zgIeYtocCoyRpWMLoA8j","col-md-6-start":"SJgsi7ohYrB9Suu2lwKQ","col-md-6-end":"evXJXU4ZVmaU3fHbNShw","col-md-7":"OvJtAyKa4CnaJTxrWULN","col-md-7-start":"Tdncikb2MHUB9M8_pzrz","col-md-7-end":"SznBcu1iExeI62bDI2fv","col-md-8":"dMfdjRo9r2UqnWUO7K7j","col-md-8-start":"RZ8AuwBi2INOYbA3GNes","col-md-8-end":"gd_tTH3gswBbD0luK4cg","col-lg-1":"xOPnT0A5q3l85vlYlB4Z","col-lg-1-start":"fYBJDNQ9E5_5wrdSOMHV","col-lg-1-end":"CuviEyxy4A5nI6ZgqQWU","col-lg-2":"zir7Y2inBNCuoM331HQS","col-lg-2-start":"hneE2V6DFFUK7Z2VlP1k","col-lg-2-end":"JdqTodnmzgM8fNPWGYsD","col-lg-3":"pfCLtxtdyfzqKtptYkey","col-lg-3-start":"qdvpCh5XwqZBTSQZriSu","col-lg-3-end":"EdkicJW5QtuFGwEtbRrD","col-lg-4":"VBsWJStlfQs3FFFuLJgp","col-lg-4-start":"TMMxlyKjw7uAASuXktdd","col-lg-4-end":"yOdXvT2PcHRSEAb64oQ5","col-lg-5":"k4m90rwEinnOv4X9wCUo","col-lg-5-start":"vRMTlNglaIKviScEPcj2","col-lg-5-end":"HJr5rbm2AYnx5iq6yjYw","col-lg-6":"f3Wlyk_5EPtXwRmju9bu","col-lg-6-start":"DuySSESVIp5ulLCI7gDZ","col-lg-6-end":"YxyyciwGy6DD9y7D7_RA","col-lg-7":"T09hcaBcvJppEI8fkeob","col-lg-7-start":"sfHLOAucQPyThoatcJlb","col-lg-7-end":"ugj03iSq_LpMPjktSIwW","col-lg-8":"O5lpDYm2qg9VuumTrrEw","col-lg-8-start":"TLrJVaWtw1Dsta_v5JcP","col-lg-8-end":"OqZ0YRgBvvTNJjsWS7pb","col-lg-9":"qr94d82SNkd1ExXHZPJq","col-lg-9-start":"H7dCJfM9V64l4aJI2aYD","col-lg-9-end":"xgcnaSvEwWA7naPdo1Q7","col-lg-10":"joclYxhsEaNNF4bUW_ue","col-lg-10-start":"DKuepavoRxT2sWRScNUO","col-lg-10-end":"LeArlDExZKDiDVBz9j2H","col-lg-11":"jhzmR1UDav7Cr1C83NGQ","col-lg-11-start":"qeM8lIjXYZiST414vxJk","col-lg-11-end":"sHBullB2KBN_dcAHo02k","col-lg-12":"UasosPijxHsKZnWpd0mT","col-lg-12-start":"pPlntrGl3JYhJi4XVrGp","col-lg-12-end":"hLgosun56kR2j4m1OdkM"};const l=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/container/style.module.scss":(v,a,o)=>{o.d(a,{Z:()=>l});var c=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=o.n(c),r=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=o.n(r),n=_()(m());n.push([v.id,".lAAWDY3GAoGI8Yz2Iot3{--max-container-width: 1128px;--vertical-gutter: 24px;--horizontal-spacing: 8px;display:grid;column-gap:var(--vertical-gutter);max-width:var(--max-container-width);margin:0 auto;width:100%}@media(max-width: 599px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 16px;grid-template-columns:repeat(4, minmax(0, 1fr))}}@media(min-width: 600px)and (max-width: 959px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 18px;grid-template-columns:repeat(8, minmax(0, 1fr))}}@media(min-width: 960px){.lAAWDY3GAoGI8Yz2Iot3{padding:0 24px;grid-template-columns:repeat(12, minmax(0, 1fr))}}.lAAWDY3GAoGI8Yz2Iot3.ZUqObxyT7MTULMSxNKnV{max-width:none;padding:unset}",""]),n.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)",container:"lAAWDY3GAoGI8Yz2Iot3",fluid:"ZUqObxyT7MTULMSxNKnV"};const l=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-grid/style.module.scss":(v,a,o)=>{o.d(a,{Z:()=>l});var c=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=o.n(c),r=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),_=o.n(r),n=_()(m());n.push([v.id,".GkpxtWzIwzGiI25ReVLN{--videopress-video-item-width: 360px;--videopress-video-item-gap: calc( var( --spacing-base ) * 3 );--videopress-video-grid: calc( var( --videopress-video-item-width ) * 3 + var( --videopress-video-item-gap ) * 2 );--videopress-video-grid: 100%;max-width:var(--videopress-video-grid)}",""]),n.locals={wrapper:"GkpxtWzIwzGiI25ReVLN"};const l=n}}]);})();
