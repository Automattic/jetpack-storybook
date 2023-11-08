"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4552],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(E,m,e)=>{e.d(m,{aD:()=>f});var _="actions",r="storybook/actions",k=`${r}/panel`,h=`${r}/action-event`,v=`${r}/action-clear`,x="$___storybook.isCyclic",T=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),V=e("@storybook/preview-api"),A={depth:10,clearOnStoryChange:!0,limit:50},U=(d={})=>{Object.assign(A,d)},c=(d,i)=>{let s=Object.getPrototypeOf(d);return!s||i(s)?s:c(s,i)},g=d=>!!(typeof d=="object"&&d&&c(d,i=>/^Synthetic(?:Base)?Event$/.test(i.constructor.name))&&typeof d.persist=="function"),y=d=>{if(g(d)){let i=Object.create(d.constructor.prototype,Object.getOwnPropertyDescriptors(d));i.persist();let s=Object.getOwnPropertyDescriptor(i,"view"),a=s==null?void 0:s.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(i,"view",{...s,value:Object.create(a.constructor.prototype)}),i}return d};function f(d,i={}){let s={...A,...i},a=function(...j){let b=V.addons.getChannel(),l=(0,T.Z)(),n=5,p=j.map(y),K=j.length>1?p:p[0],C={id:l,count:0,data:{name:d,args:K},options:{...s,maxDepth:n+(s.depth||3),allowFunction:s.allowFunction||!1}};b.emit(h,C)};return a.isAction=!0,a}var B=(...d)=>{let i=config,s=d;s.length===1&&Array.isArray(s[0])&&([s]=s),s.length!==1&&typeof s[s.length-1]!="string"&&(i={...config,...s.pop()});let a=s[0];(s.length!==1||typeof a=="string")&&(a={},s.forEach(b=>{a[b]=b}));let j={};return Object.keys(a).forEach(b=>{j[b]=action(a[b],i)}),j}},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(E,m,e)=>{e.d(m,{Z:()=>h});var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,_.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_.createElement)(r.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(E,m,e)=>{e.d(m,{Z:()=>h});var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,_.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,_.createElement)(r.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../../packages/videopress/src/client/admin/components/video-list/stories/index.stories.tsx":(E,m,e)=>{var te,se,oe;e.r(m),e.d(m,{__namedExportsOrder:()=>ae,_default:()=>D,default:()=>ne});var _=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),r=e("../components/components/layout/use-breakpoint-match/index.ts"),k=e("../components/components/text/index.tsx"),h=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js"),v=e("../../../node_modules/.pnpm/@wordpress+i18n@4.44.0/node_modules/@wordpress/i18n/build-module/index.js"),x=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),V=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),A=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),U=e.n(A),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("../../packages/videopress/src/client/state/constants.js"),y=e("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),f=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),B=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),d=e("../../packages/videopress/src/client/admin/components/video-row/index.tsx"),i=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(i),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-list/style.module.scss"),j={};j.insert="head",j.singleton=!1;var b=s()(a.Z,j);const l=a.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p=v.__,K=P=>{let{videos:u,hidePrivacy:N=!1,hideDuration:W=!1,hidePlays:S=!1,showActionButton:Q=!0,showQuickActions:F=!0,loading:Z=!1,onVideoDetailsClick:Y}=P;const[L,I]=(0,c.useState)([]),[G]=(0,r.Z)("sm"),H=(L==null?void 0:L.length)===(u==null?void 0:u.length),z=!1,J=o=>{I(o?u.map((w,t)=>t):[])},$=(o,w)=>()=>{w==null||w(u[o])};return(0,n.jsxs)("div",{className:l.list,children:[(0,n.jsxs)("div",{className:l.header,children:[(0,n.jsxs)("div",{className:l["title-wrapper"],children:[z&&(0,n.jsx)(B.Z,{checked:H,onChange:J}),(0,n.jsx)(k.ZP,{children:p("Title","jetpack-videopress-pkg")})]}),!G&&(0,n.jsx)("div",{className:l["data-wrapper"],children:(0,n.jsx)(d.jk,{privacy:N?null:p("Privacy","jetpack-videopress-pkg"),duration:W?null:p("Duration","jetpack-videopress-pkg"),plays:S?null:p("Plays","jetpack-videopress-pkg"),upload:p("Upload date","jetpack-videopress-pkg")})})]}),u.map((o,w)=>{var O;const t=g.Vz[o.privacySetting]===g.UJ;return(0,n.jsx)(d.ZP,{id:o==null?void 0:o.id,checked:L.includes(w),title:o.title,thumbnail:o==null?void 0:o.posterImage,duration:W?null:o.duration,plays:S?null:o.plays,isPrivate:N?null:t,uploadDate:o.uploadDate,showQuickActions:!(o!=null&&o.uploading)&&F,showActionButton:!(o!=null&&o.uploading)&&Q,showCheckbox:z,className:l.row,onActionClick:$(w,Y),loading:Z,onSelect:M=>I(R=>{const q=R.indexOf(w);return M?[...R,w]:!M&&q>-1?[...R.slice(0,q),...R.slice(q+1)]:R})},(O=o==null?void 0:o.guid)!=null?O:o==null?void 0:o.id)})]})};K.displayName="VideoList";const C=P=>{let{videos:u,showActionButton:N=!0,showQuickActions:W=!1,uploading:S=!1,onActionClick:Q}=P;const[F,Z]=(0,c.useState)([]),[Y]=(0,r.Z)("sm"),L=(F==null?void 0:F.length)===(u==null?void 0:u.length),I=!1,{hasVideoPressPurchase:G}=(0,y.g)(),{uploadedVideoCount:H,isFetching:z}=(0,f.ZP)(),J=H>0||z||(S==null?void 0:S.length)>0,$=t=>{Z(t?u.map((O,M)=>M):[])},o=t=>()=>{Q==null||Q(u[t])},w=t=>{if(t!=null&&t.isUploadedToVideoPress)return(0,n.jsx)(h.Z,{position:"top center",text:p("Video already uploaded to VideoPress","jetpack-videopress-pkg"),children:(0,n.jsx)("div",{className:l["title-adornment"],children:(0,n.jsx)(x.Z,{icon:T.Z})})});if((t==null?void 0:t.readError)!=null){const O=p("Video cannot be read","jetpack-videopress-pkg"),M=p("Video has an unsupported file type","jetpack-videopress-pkg");return(0,n.jsx)(h.Z,{position:"top center",text:(t==null?void 0:t.readError)===g.kH?M:O,children:(0,n.jsx)("div",{className:U()(l["title-adornment"],l.error),children:(0,n.jsx)(x.Z,{icon:V.Z})})})}return null};return(0,n.jsxs)("div",{className:l.list,children:[(0,n.jsxs)("div",{className:l.header,children:[(0,n.jsxs)("div",{className:l["title-wrapper"],children:[I&&(0,n.jsx)(B.Z,{checked:L,onChange:$}),(0,n.jsx)(k.ZP,{children:p("Title","jetpack-videopress-pkg")})]}),!Y&&(0,n.jsx)("div",{className:l["data-wrapper"],children:(0,n.jsx)(d.jk,{privacy:"",duration:"",plays:"",upload:p("Upload date","jetpack-videopress-pkg")})})]}),u.map((t,O)=>t!=null&&t.id?(0,n.jsx)(d.nr,{id:t.id,title:t.title,showActionButton:N,showQuickActions:W,showCheckbox:I,uploadDate:t.uploadDate,onActionClick:o(O),actionButtonLabel:p("Upload to VideoPress","jetpack-videopress-pkg"),disabled:(t==null?void 0:t.isUploadedToVideoPress)||(t==null?void 0:t.readError)!=null,disableActionButton:J&&!G||S,titleAdornment:w(t)},`local-video-${t.id}`):null)]})};C.displayName="LocalVideoList";const X=K;try{C.displayName="LocalVideoList",C.__docgenInfo={description:"",displayName:"LocalVideoList",props:{loading:{defaultValue:{value:"false"},description:"Loading mode.",name:"loading",required:!1,type:{name:"boolean"}},showQuickActions:{defaultValue:{value:"false"},description:"Show quick actions.",name:"showQuickActions",required:!1,type:{name:"boolean"}},uploading:{defaultValue:{value:"false"},description:"Is Uploading.",name:"uploading",required:!1,type:{name:"boolean"}},showActionButton:{defaultValue:{value:"true"},description:"Show action button.",name:"showActionButton",required:!1,type:{name:"boolean"}},hidePrivacy:{defaultValue:{value:"false"},description:"Hide privacy column.",name:"hidePrivacy",required:!1,type:{name:"boolean"}},hideDuration:{defaultValue:{value:"false"},description:"Hide duration column.",name:"hideDuration",required:!1,type:{name:"boolean"}},hidePlays:{defaultValue:{value:"false"},description:"Hide plays column.",name:"hidePlays",required:!1,type:{name:"boolean"}},videos:{defaultValue:null,description:"",name:"videos",required:!0,type:{name:"LocalVideo[]"}},onActionClick:{defaultValue:null,description:"",name:"onActionClick",required:!1,type:{name:"(video: LocalVideo) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-list/index.tsx#LocalVideoList"]={docgenInfo:C.__docgenInfo,name:"LocalVideoList",path:"../../packages/videopress/src/client/admin/components/video-list/index.tsx#LocalVideoList"})}catch(P){}try{videolist.displayName="videolist",videolist.__docgenInfo={description:"",displayName:"videolist",props:{videos:{defaultValue:null,description:"List of videos.",name:"videos",required:!0,type:{name:"VideoPressVideo[]"}},hidePrivacy:{defaultValue:{value:"false"},description:"Hide privacy column.",name:"hidePrivacy",required:!1,type:{name:"boolean"}},hideDuration:{defaultValue:{value:"false"},description:"Hide duration column.",name:"hideDuration",required:!1,type:{name:"boolean"}},hidePlays:{defaultValue:{value:"false"},description:"Hide plays column.",name:"hidePlays",required:!1,type:{name:"boolean"}},showActionButton:{defaultValue:{value:"true"},description:"Show action button.",name:"showActionButton",required:!1,type:{name:"boolean"}},showQuickActions:{defaultValue:{value:"false"},description:"Show quick actions.",name:"showQuickActions",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading mode.",name:"loading",required:!1,type:{name:"boolean"}},uploading:{defaultValue:{value:"false"},description:"Is Uploading.",name:"uploading",required:!1,type:{name:"boolean"}},onVideoDetailsClick:{defaultValue:null,description:"Callback to be invoked when clicking on the `Edit details` button.",name:"onVideoDetailsClick",required:!1,type:{name:"(video: VideoPressVideo) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-list/index.tsx#videolist"]={docgenInfo:videolist.__docgenInfo,name:"videolist",path:"../../packages/videopress/src/client/admin/components/video-list/index.tsx#videolist"})}catch(P){}var de=`import { action } from '@storybook/addon-actions';
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
`,ie={_default:{startLoc:{col:51,line:17},endLoc:{col:1,line:19},startBody:{col:51,line:17},endBody:{col:1,line:19}}};const ne={title:"Packages/VideoPress/Video List",component:X,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import VideoList from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Video List',
  component: VideoList,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => <div style={{
    width: '95vw',
    maxWidth: 1000
  }}>
                <Story />
            </div>]
} as ComponentMeta<typeof VideoList>);
const Template: ComponentStory<typeof VideoList> = args => {
  return <VideoList {...args} />;
};
export const _default = Template.bind({});
_default.args = {
  onClickEdit: index => {
    action('onClickEdit')(index);
  },
  videos: [{
    id: 1,
    posterImage: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
    videoTitle: 'videopress-upload-demo-7-mp4',
    duration: 158633,
    plays: 200,
    uploadDate: '2022-08-15T21:16:59+0000',
    isPrivate: true
  }, {
    id: 2,
    posterImage: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
    videoTitle: 'videopress-upload-demo-7-mp4',
    duration: 158633,
    plays: 200,
    uploadDate: '2022-08-15T21:16:59+0000',
    isPrivate: true
  }, {
    id: 3,
    posterImage: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
    videoTitle: 'videopress-upload-demo-7-mp4',
    duration: 158633,
    plays: 200,
    uploadDate: '2022-08-15T21:16:59+0000',
    isPrivate: true
  }, {
    id: 4,
    posterImage: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
    videoTitle: 'videopress-upload-demo-7-mp4',
    duration: 158633,
    plays: 200,
    uploadDate: '2022-08-15T21:16:59+0000',
    isPrivate: true
  }, {
    id: 5,
    posterImage: 'https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg',
    videoTitle: 'videopress-upload-demo-7-mp4',
    duration: 158633,
    plays: 200,
    uploadDate: '2022-08-15T21:16:59+0000',
    isPrivate: true
  }],
  hidePrivacy: false,
  hideDuration: false,
  hidePlays: false,
  hideEditButton: false,
  hideQuickActions: false
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <VideoList {...args} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:51,line:17},endLoc:{col:1,line:19},startBody:{col:51,line:17},endBody:{col:1,line:19}}}},layout:"centered"},decorators:[P=>(0,n.jsx)("div",{style:{width:"95vw",maxWidth:1e3},children:(0,n.jsx)(P,{})})]},ee=P=>(0,n.jsx)(X,{...P});ee.displayName="Template";const D=ee.bind({});D.args={onClickEdit:P=>{(0,_.aD)("onClickEdit")(P)},videos:[{id:1,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:2,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:3,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:4,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:5,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0}],hidePrivacy:!1,hideDuration:!1,hidePlays:!1,hideEditButton:!1,hideQuickActions:!1},D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  return <VideoList {...args} />;
}`,...(oe=(se=D.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const ae=["_default"]},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(E,m,e)=>{e.d(m,{g:()=>U});var _=e("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),r=e("../../packages/videopress/src/client/state/index.js");function k(c){return c.replace(/([-_][a-z])/gi,g=>g.toUpperCase().replace("_",""))}function h(c){return c.indexOf("_")!==-1}function v(c){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const y=Object.assign({},c);for(const f in y)y.hasOwnProperty(f)&&h(f)&&(y[k(f)]=y[f],g&&delete y[f]);return y}const{paidFeatures:x={},siteProductData:T={},productData:V={},productPrice:A={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},U=()=>{const c=v(T.pricing_for_ui,!0),g=v(V.introductory_offer,!0),y={...v(V,!0),introductoryOffer:g},{purchases:f,isFetchingPurchases:B}=(0,_.Z)(a=>({purchases:a(r.tT).getPurchases(),isFetchingPurchases:a(r.tT).isFetchingPurchases()}),[]),d=f.map(a=>v(a,!0));function i(a){return d.some(j=>j.productSlug===a)}const s=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(a=>i(a));return{features:x,siteProduct:{...v({...T},!0),pricingForUi:c},product:y,productPrice:A,purchases:d,hasVideoPressPurchase:s,isFetchingPurchases:B}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-list/style.module.scss":(E,m,e)=>{e.d(m,{Z:()=>x});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(_),k=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(k),v=h()(r());v.push([E.id,".YHPOlLDVIbr_yO00ArYP{background-color:var(--jp-white)}.tjW16wKOwn44cr9MGow_{display:flex;align-items:center;padding:calc(var(--spacing-base)*2) var(--spacing-base);justify-content:space-between;gap:calc(var(--spacing-base)*2);border-bottom:1px solid var(--jp-gray-5)}.jWMIQVpkq9OpGQzFSMsb{display:flex;gap:calc(var(--spacing-base)*2)}.zKvAS0PJjwhcUV1AuSGd{border-bottom:1px solid var(--jp-gray-5)}.KkQO1dO5lSgu0_uaMUQc{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.KkQO1dO5lSgu0_uaMUQc.JbGGgCi8spwySJSNrbJh{fill:var(--jp-yellow-20)}",""]),v.locals={list:"YHPOlLDVIbr_yO00ArYP",header:"tjW16wKOwn44cr9MGow_","title-wrapper":"jWMIQVpkq9OpGQzFSMsb",row:"zKvAS0PJjwhcUV1AuSGd","title-adornment":"KkQO1dO5lSgu0_uaMUQc",error:"JbGGgCi8spwySJSNrbJh"};const x=v}}]);})();
