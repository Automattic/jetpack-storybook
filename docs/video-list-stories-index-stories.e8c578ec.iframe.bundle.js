"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4552],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs":(O,_,e)=>{e.d(_,{aD:()=>V});var u=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),p=e("@storybook/preview-api"),v=e("@storybook/global"),y=e("../../../node_modules/.pnpm/@storybook+core-events@7.6.17/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),h="actions",j="storybook/actions",I=`${j}/panel`,E=`${j}/action-event`,U=`${j}/action-clear`,W="$___storybook.isCyclic",c={depth:10,clearOnStoryChange:!0,limit:50},P=(o={})=>{Object.assign(c,o)},m=(o,i)=>{let d=Object.getPrototypeOf(o);return!d||i(d)?d:m(d,i)},g=o=>!!(typeof o=="object"&&o&&m(o,i=>/^Synthetic(?:Base)?Event$/.test(i.constructor.name))&&typeof o.persist=="function"),T=o=>{if(g(o)){let i=Object.create(o.constructor.prototype,Object.getOwnPropertyDescriptors(o));i.persist();let d=Object.getOwnPropertyDescriptor(i,"view"),a=d==null?void 0:d.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(i,"view",{...d,value:Object.create(a.constructor.prototype)}),i}return o},w=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,u.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function V(o,i={}){let d={...c,...i},a=function(...s){var z,B;if(i.implicit){let b=(z="__STORYBOOK_PREVIEW__"in v.global?v.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:z.storyRenders.find(k=>k.phase==="playing"||k.phase==="rendering");if(b){let k=!((B=window==null?void 0:window.FEATURES)!=null&&B.disallowImplicitActionsInRenderV8),R=new y.is({phase:b.phase,name:o,deprecated:k});if(k)console.warn(R);else throw R}}let l=p.addons.getChannel(),Z=w(),A=5,M=s.map(T),oe=s.length>1?M:M[0],ne={id:Z,count:0,data:{name:o,args:oe},options:{...d,maxDepth:A+(d.depth||3),allowFunction:d.allowFunction||!1}};l.emit(E,ne)};return a.isAction=!0,a}var N=(...o)=>{let i=c,d=o;d.length===1&&Array.isArray(d[0])&&([d]=d),d.length!==1&&typeof d[d.length-1]!="string"&&(i={...c,...d.pop()});let a=d[0];(d.length!==1||typeof a=="string")&&(a={},d.forEach(l=>{a[l]=l}));let s={};return Object.keys(a).forEach(l=>{s[l]=V(a[l],i)}),s}},"../../packages/videopress/src/client/admin/components/video-list/stories/index.stories.tsx":(O,_,e)=>{var R,ae,de;e.r(_),e.d(_,{__namedExportsOrder:()=>k,_default:()=>b,default:()=>z});var u=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),p=e("../components/components/layout/use-breakpoint-match/index.ts"),v=e("../components/components/text/index.tsx"),y=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+i18n@4.52.0/node_modules/@wordpress/i18n/build-module/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),I=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),E=e("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),U=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),W=e.n(U),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=e("../../packages/videopress/src/client/state/constants.js"),m=e("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),g=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),T=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),w=e("../../packages/videopress/src/client/admin/components/video-row/index.tsx"),V=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(V),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-list/style.module.scss"),i={};i.insert="head",i.singleton=!1;var d=N()(o.Z,i);const a=o.Z.locals||{};var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=h.__,Z=({videos:r,hidePrivacy:Y=!1,hideDuration:G=!1,hidePlays:x=!1,showActionButton:Q=!0,showQuickActions:F=!0,loading:H=!1,onVideoDetailsClick:$})=>{const[D,L]=(0,c.useState)([]),[X]=(0,p.Z)("sm"),q=(D==null?void 0:D.length)===(r==null?void 0:r.length),J=!1,ee=n=>{L(n?r.map((f,t)=>t):[])},te=(n,f)=>()=>{f==null||f(r[n])};return(0,s.jsxs)("div",{className:a.list,children:[(0,s.jsxs)("div",{className:a.header,children:[(0,s.jsxs)("div",{className:a["title-wrapper"],children:[J&&(0,s.jsx)(T.Z,{checked:q,onChange:ee}),(0,s.jsx)(v.ZP,{children:l("Title","jetpack-videopress-pkg")})]}),!X&&(0,s.jsx)("div",{className:a["data-wrapper"],children:(0,s.jsx)(w.jk,{privacy:Y?null:l("Privacy","jetpack-videopress-pkg"),duration:G?null:l("Duration","jetpack-videopress-pkg"),plays:x?null:l("Plays","jetpack-videopress-pkg"),upload:l("Upload date","jetpack-videopress-pkg")})})]}),r.map((n,f)=>{var S;const t=P.Vz[n.privacySetting]===P.UJ;return(0,s.jsx)(w.ZP,{id:n==null?void 0:n.id,checked:D.includes(f),title:n.title,thumbnail:n==null?void 0:n.posterImage,duration:G?null:n.duration,plays:x?null:n.plays,isPrivate:Y?null:t,uploadDate:n.uploadDate,showQuickActions:!(n!=null&&n.uploading)&&F,showActionButton:!(n!=null&&n.uploading)&&Q,showCheckbox:J,className:a.row,onActionClick:te(f,$),loading:H,onSelect:C=>L(K=>{const se=K.indexOf(f);return C?[...K,f]:!C&&se>-1?[...K.slice(0,se),...K.slice(se+1)]:K})},(S=n==null?void 0:n.guid)!=null?S:n==null?void 0:n.id)})]})};Z.displayName="VideoList";const A=({videos:r,showActionButton:Y=!0,showQuickActions:G=!1,uploading:x=!1,onActionClick:Q})=>{const[F,H]=(0,c.useState)([]),[$]=(0,p.Z)("sm"),D=(F==null?void 0:F.length)===(r==null?void 0:r.length),L=!1,{hasVideoPressPurchase:X}=(0,m.g)(),{uploadedVideoCount:q,isFetching:J}=(0,g.ZP)(),ee=q>0||J||(x==null?void 0:x.length)>0,te=t=>{H(t?r.map((S,C)=>C):[])},n=t=>()=>{Q==null||Q(r[t])},f=t=>{if(t!=null&&t.isUploadedToVideoPress)return(0,s.jsx)(y.ZP,{position:"top center",text:l("Video already uploaded to VideoPress","jetpack-videopress-pkg"),children:(0,s.jsx)("div",{className:a["title-adornment"],children:(0,s.jsx)(j.Z,{icon:I.Z})})});if((t==null?void 0:t.readError)!=null){const S=l("Video cannot be read","jetpack-videopress-pkg"),C=l("Video has an unsupported file type","jetpack-videopress-pkg");return(0,s.jsx)(y.ZP,{position:"top center",text:(t==null?void 0:t.readError)===P.kH?C:S,children:(0,s.jsx)("div",{className:W()(a["title-adornment"],a.error),children:(0,s.jsx)(j.Z,{icon:E.Z})})})}return null};return(0,s.jsxs)("div",{className:a.list,children:[(0,s.jsxs)("div",{className:a.header,children:[(0,s.jsxs)("div",{className:a["title-wrapper"],children:[L&&(0,s.jsx)(T.Z,{checked:D,onChange:te}),(0,s.jsx)(v.ZP,{children:l("Title","jetpack-videopress-pkg")})]}),!$&&(0,s.jsx)("div",{className:a["data-wrapper"],children:(0,s.jsx)(w.jk,{privacy:"",duration:"",plays:"",upload:l("Upload date","jetpack-videopress-pkg")})})]}),r.map((t,S)=>t!=null&&t.id?(0,s.jsx)(w.nr,{id:t.id,title:t.title,showActionButton:Y,showQuickActions:G,showCheckbox:L,uploadDate:t.uploadDate,onActionClick:n(S),actionButtonLabel:l("Upload to VideoPress","jetpack-videopress-pkg"),disabled:(t==null?void 0:t.isUploadedToVideoPress)||(t==null?void 0:t.readError)!=null,disableActionButton:ee&&!X||x,titleAdornment:f(t)},`local-video-${t.id}`):null)]})};A.displayName="LocalVideoList";const M=Z;try{A.displayName="LocalVideoList",A.__docgenInfo={description:"",displayName:"LocalVideoList",props:{loading:{defaultValue:{value:"false"},description:"Loading mode.",name:"loading",required:!1,type:{name:"boolean"}},uploading:{defaultValue:{value:"false"},description:"Is Uploading.",name:"uploading",required:!1,type:{name:"boolean"}},showActionButton:{defaultValue:{value:"true"},description:"Show action button.",name:"showActionButton",required:!1,type:{name:"boolean"}},showQuickActions:{defaultValue:{value:"false"},description:"Show quick actions.",name:"showQuickActions",required:!1,type:{name:"boolean"}},hidePrivacy:{defaultValue:{value:"false"},description:"Hide privacy column.",name:"hidePrivacy",required:!1,type:{name:"boolean"}},hideDuration:{defaultValue:{value:"false"},description:"Hide duration column.",name:"hideDuration",required:!1,type:{name:"boolean"}},hidePlays:{defaultValue:{value:"false"},description:"Hide plays column.",name:"hidePlays",required:!1,type:{name:"boolean"}},videos:{defaultValue:null,description:"",name:"videos",required:!0,type:{name:"LocalVideo[]"}},onActionClick:{defaultValue:null,description:"",name:"onActionClick",required:!1,type:{name:"(video: LocalVideo) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-list/index.tsx#LocalVideoList"]={docgenInfo:A.__docgenInfo,name:"LocalVideoList",path:"../../packages/videopress/src/client/admin/components/video-list/index.tsx#LocalVideoList"})}catch(r){}try{videolist.displayName="videolist",videolist.__docgenInfo={description:"",displayName:"videolist",props:{videos:{defaultValue:null,description:"List of videos.",name:"videos",required:!0,type:{name:"VideoPressVideo[]"}},hidePrivacy:{defaultValue:{value:"false"},description:"Hide privacy column.",name:"hidePrivacy",required:!1,type:{name:"boolean"}},hideDuration:{defaultValue:{value:"false"},description:"Hide duration column.",name:"hideDuration",required:!1,type:{name:"boolean"}},hidePlays:{defaultValue:{value:"false"},description:"Hide plays column.",name:"hidePlays",required:!1,type:{name:"boolean"}},showActionButton:{defaultValue:{value:"true"},description:"Show action button.",name:"showActionButton",required:!1,type:{name:"boolean"}},showQuickActions:{defaultValue:{value:"false"},description:"Show quick actions.",name:"showQuickActions",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading mode.",name:"loading",required:!1,type:{name:"boolean"}},uploading:{defaultValue:{value:"false"},description:"Is Uploading.",name:"uploading",required:!1,type:{name:"boolean"}},onVideoDetailsClick:{defaultValue:null,description:"Callback to be invoked when clicking on the `Edit details` button.",name:"onVideoDetailsClick",required:!1,type:{name:"(video: VideoPressVideo) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-list/index.tsx#videolist"]={docgenInfo:videolist.__docgenInfo,name:"videolist",path:"../../packages/videopress/src/client/admin/components/video-list/index.tsx#videolist"})}catch(r){}var oe=`import { action } from '@storybook/addon-actions';
import VideoList from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video List',
	component: VideoList,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: '95vw', maxWidth: 1000 } }>
				<Story />
			</div>
		),
	],
} as ComponentMeta< typeof VideoList >;

const Template: ComponentStory< typeof VideoList > = args => {
	return <VideoList { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	onClickEdit: index => {
		action( 'onClickEdit' )( index );
	},
	videos: [
		{
			id: 1,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
		{
			id: 2,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
		{
			id: 3,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
		{
			id: 4,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
		{
			id: 5,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
	],
	hidePrivacy: false,
	hideDuration: false,
	hidePlays: false,
	hideEditButton: false,
	hideQuickActions: false,
};
`,ne={_default:{startLoc:{col:53,line:20},endLoc:{col:1,line:22},startBody:{col:53,line:20},endBody:{col:1,line:22}}};const z={title:"Packages/VideoPress/Video List",component:M,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import VideoList from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video List',
	component: VideoList,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: '95vw', maxWidth: 1000 } }>
				<Story />
			</div>
		),
	],
} as ComponentMeta< typeof VideoList >;

const Template: ComponentStory< typeof VideoList > = args => {
	return <VideoList { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	onClickEdit: index => {
		action( 'onClickEdit' )( index );
	},
	videos: [
		{
			id: 1,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
		{
			id: 2,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
		{
			id: 3,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
		{
			id: 4,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
		{
			id: 5,
			posterImage:
				'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
			videoTitle: 'videopress-upload-demo-7-mp4',
			duration: 158633,
			plays: 200,
			uploadDate: '2022-08-15T21:16:59+0000',
			isPrivate: true,
		},
	],
	hidePrivacy: false,
	hideDuration: false,
	hidePlays: false,
	hideEditButton: false,
	hideQuickActions: false,
};
`,locationsMap:{default:{startLoc:{col:53,line:20},endLoc:{col:1,line:22},startBody:{col:53,line:20},endBody:{col:1,line:22}}}},layout:"centered"},decorators:[r=>(0,s.jsx)("div",{style:{width:"95vw",maxWidth:1e3},children:(0,s.jsx)(r,{})})]},B=r=>(0,s.jsx)(M,{...r});B.displayName="Template";const b=B.bind({});b.args={onClickEdit:r=>{(0,u.aD)("onClickEdit")(r)},videos:[{id:1,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:2,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:3,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:4,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:5,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0}],hidePrivacy:!1,hideDuration:!1,hidePlays:!1,hideEditButton:!1,hideQuickActions:!1},b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <VideoList {...args} />;
}`,...(de=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};const k=["_default"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(O,_,e)=>{e.d(_,{Z:()=>y});var u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const y=(0,u.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(p.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(O,_,e)=>{e.d(_,{Z:()=>y});var u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const y=(0,u.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,u.createElement)(p.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(O,_,e)=>{e.d(_,{g:()=>W});var u=e("../../../node_modules/.pnpm/@wordpress+data@9.22.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),p=e("../../packages/videopress/src/client/state/index.js");function v(c){return c.replace(/([-_][a-z])/gi,P=>P.toUpperCase().replace("_",""))}function y(c){return c.indexOf("_")!==-1}function h(c,P=!1){const m=Object.assign({},c);for(const g in m)m.hasOwnProperty(g)&&y(g)&&(m[v(g)]=m[g],P&&delete m[g]);return m}const{paidFeatures:j={},siteProductData:I={},productData:E={},productPrice:U={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},W=()=>{const c=h(I.pricing_for_ui,!0),P=h(E.introductory_offer,!0),m={...h(E,!0),introductoryOffer:P},{purchases:g,isFetchingPurchases:T}=(0,u.Z)(o=>({purchases:o(p.tT).getPurchases(),isFetchingPurchases:o(p.tT).isFetchingPurchases()}),[]),w=g.map(o=>h(o,!0));function V(o){return w.some(i=>i.productSlug===o)}const N=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(o=>V(o));return{features:j,siteProduct:{...h({...I},!0),pricingForUi:c},product:m,productPrice:U,purchases:w,hasVideoPressPurchase:N,isFetchingPurchases:T}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-list/style.module.scss":(O,_,e)=>{e.d(_,{Z:()=>j});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(u),v=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),y=e.n(v),h=y()(p());h.push([O.id,".YHPOlLDVIbr_yO00ArYP{background-color:var(--jp-white)}.tjW16wKOwn44cr9MGow_{display:flex;align-items:center;padding:calc(var(--spacing-base)*2) var(--spacing-base);justify-content:space-between;gap:calc(var(--spacing-base)*2);border-bottom:1px solid var(--jp-gray-5)}.jWMIQVpkq9OpGQzFSMsb{display:flex;gap:calc(var(--spacing-base)*2)}.zKvAS0PJjwhcUV1AuSGd{border-bottom:1px solid var(--jp-gray-5)}.KkQO1dO5lSgu0_uaMUQc{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.KkQO1dO5lSgu0_uaMUQc.JbGGgCi8spwySJSNrbJh{fill:var(--jp-yellow-20)}",""]),h.locals={list:"YHPOlLDVIbr_yO00ArYP",header:"tjW16wKOwn44cr9MGow_","title-wrapper":"jWMIQVpkq9OpGQzFSMsb",row:"zKvAS0PJjwhcUV1AuSGd","title-adornment":"KkQO1dO5lSgu0_uaMUQc",error:"JbGGgCi8spwySJSNrbJh"};const j=h}}]);})();
