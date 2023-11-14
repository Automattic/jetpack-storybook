"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4552],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(E,m,e)=>{e.d(m,{aD:()=>f});var _="actions",l="storybook/actions",w=`${l}/panel`,h=`${l}/action-event`,y=`${l}/action-clear`,k="$___storybook.isCyclic",O=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),T=e("@storybook/preview-api"),V={depth:10,clearOnStoryChange:!0,limit:50},R=(d={})=>{Object.assign(V,d)},u=(d,r)=>{let s=Object.getPrototypeOf(d);return!s||r(s)?s:u(s,r)},g=d=>!!(typeof d=="object"&&d&&u(d,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof d.persist=="function"),v=d=>{if(g(d)){let r=Object.create(d.constructor.prototype,Object.getOwnPropertyDescriptors(d));r.persist();let s=Object.getOwnPropertyDescriptor(r,"view"),a=s==null?void 0:s.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...s,value:Object.create(a.constructor.prototype)}),r}return d};function f(d,r={}){let s={...V,...r},a=function(...j){let b=T.addons.getChannel(),p=(0,O.Z)(),n=5,c=j.map(v),U=j.length>1?c:c[0],A={id:p,count:0,data:{name:d,args:U},options:{...s,maxDepth:n+(s.depth||3),allowFunction:s.allowFunction||!1}};b.emit(h,A)};return a.isAction=!0,a}var M=(...d)=>{let r=config,s=d;s.length===1&&Array.isArray(s[0])&&([s]=s),s.length!==1&&typeof s[s.length-1]!="string"&&(r={...config,...s.pop()});let a=s[0];(s.length!==1||typeof a=="string")&&(a={},s.forEach(b=>{a[b]=b}));let j={};return Object.keys(a).forEach(b=>{j[b]=action(a[b],r)}),j}},"../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(E,m,e)=>{e.d(m,{Z:()=>h});var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+primitives@3.43.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,_.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_.createElement)(l.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(E,m,e)=>{e.d(m,{Z:()=>h});var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+primitives@3.43.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const h=(0,_.createElement)(l.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,_.createElement)(l.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../../packages/videopress/src/client/admin/components/video-list/stories/index.stories.tsx":(E,m,e)=>{var ee,te,se;e.r(m),e.d(m,{__namedExportsOrder:()=>ne,_default:()=>D,default:()=>oe});var _=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),l=e("../components/components/layout/use-breakpoint-match/index.ts"),w=e("../components/components/text/index.tsx"),h=e("../../../node_modules/.pnpm/@wordpress+components@25.11.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js"),y=e("../../../node_modules/.pnpm/@wordpress+i18n@4.45.0/node_modules/@wordpress/i18n/build-module/index.js"),k=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),O=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),T=e("../../../node_modules/.pnpm/@wordpress+icons@9.36.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),V=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),R=e.n(V),u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("../../packages/videopress/src/client/state/constants.js"),v=e("../../packages/videopress/src/client/admin/hooks/use-plan/index.ts"),f=e("../../packages/videopress/src/client/admin/hooks/use-videos/index.js"),M=e("../../packages/videopress/src/client/admin/components/checkbox/index.tsx"),d=e("../../packages/videopress/src/client/admin/components/video-row/index.tsx"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(r),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-list/style.module.scss"),j={};j.insert="head",j.singleton=!1;var b=s()(a.Z,j);const p=a.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const c=y.__,U=({videos:i,hidePrivacy:K=!1,hideDuration:N=!1,hidePlays:x=!1,showActionButton:B=!0,showQuickActions:Q=!0,loading:W=!1,onVideoDetailsClick:z})=>{const[C,L]=(0,u.useState)([]),[Y]=(0,l.Z)("sm"),G=(C==null?void 0:C.length)===(i==null?void 0:i.length),Z=!1,H=o=>{L(o?i.map((P,t)=>t):[])},J=(o,P)=>()=>{P==null||P(i[o])};return(0,n.jsxs)("div",{className:p.list,children:[(0,n.jsxs)("div",{className:p.header,children:[(0,n.jsxs)("div",{className:p["title-wrapper"],children:[Z&&(0,n.jsx)(M.Z,{checked:G,onChange:H}),(0,n.jsx)(w.ZP,{children:c("Title","jetpack-videopress-pkg")})]}),!Y&&(0,n.jsx)("div",{className:p["data-wrapper"],children:(0,n.jsx)(d.jk,{privacy:K?null:c("Privacy","jetpack-videopress-pkg"),duration:N?null:c("Duration","jetpack-videopress-pkg"),plays:x?null:c("Plays","jetpack-videopress-pkg"),upload:c("Upload date","jetpack-videopress-pkg")})})]}),i.map((o,P)=>{var S;const t=g.Vz[o.privacySetting]===g.UJ;return(0,n.jsx)(d.ZP,{id:o==null?void 0:o.id,checked:C.includes(P),title:o.title,thumbnail:o==null?void 0:o.posterImage,duration:N?null:o.duration,plays:x?null:o.plays,isPrivate:K?null:t,uploadDate:o.uploadDate,showQuickActions:!(o!=null&&o.uploading)&&Q,showActionButton:!(o!=null&&o.uploading)&&B,showCheckbox:Z,className:p.row,onActionClick:J(P,z),loading:W,onSelect:I=>L(F=>{const $=F.indexOf(P);return I?[...F,P]:!I&&$>-1?[...F.slice(0,$),...F.slice($+1)]:F})},(S=o==null?void 0:o.guid)!=null?S:o==null?void 0:o.id)})]})};U.displayName="VideoList";const A=({videos:i,showActionButton:K=!0,showQuickActions:N=!1,uploading:x=!1,onActionClick:B})=>{const[Q,W]=(0,u.useState)([]),[z]=(0,l.Z)("sm"),C=(Q==null?void 0:Q.length)===(i==null?void 0:i.length),L=!1,{hasVideoPressPurchase:Y}=(0,v.g)(),{uploadedVideoCount:G,isFetching:Z}=(0,f.ZP)(),H=G>0||Z||(x==null?void 0:x.length)>0,J=t=>{W(t?i.map((S,I)=>I):[])},o=t=>()=>{B==null||B(i[t])},P=t=>{if(t!=null&&t.isUploadedToVideoPress)return(0,n.jsx)(h.Z,{position:"top center",text:c("Video already uploaded to VideoPress","jetpack-videopress-pkg"),children:(0,n.jsx)("div",{className:p["title-adornment"],children:(0,n.jsx)(k.Z,{icon:O.Z})})});if((t==null?void 0:t.readError)!=null){const S=c("Video cannot be read","jetpack-videopress-pkg"),I=c("Video has an unsupported file type","jetpack-videopress-pkg");return(0,n.jsx)(h.Z,{position:"top center",text:(t==null?void 0:t.readError)===g.kH?I:S,children:(0,n.jsx)("div",{className:R()(p["title-adornment"],p.error),children:(0,n.jsx)(k.Z,{icon:T.Z})})})}return null};return(0,n.jsxs)("div",{className:p.list,children:[(0,n.jsxs)("div",{className:p.header,children:[(0,n.jsxs)("div",{className:p["title-wrapper"],children:[L&&(0,n.jsx)(M.Z,{checked:C,onChange:J}),(0,n.jsx)(w.ZP,{children:c("Title","jetpack-videopress-pkg")})]}),!z&&(0,n.jsx)("div",{className:p["data-wrapper"],children:(0,n.jsx)(d.jk,{privacy:"",duration:"",plays:"",upload:c("Upload date","jetpack-videopress-pkg")})})]}),i.map((t,S)=>t!=null&&t.id?(0,n.jsx)(d.nr,{id:t.id,title:t.title,showActionButton:K,showQuickActions:N,showCheckbox:L,uploadDate:t.uploadDate,onActionClick:o(S),actionButtonLabel:c("Upload to VideoPress","jetpack-videopress-pkg"),disabled:(t==null?void 0:t.isUploadedToVideoPress)||(t==null?void 0:t.readError)!=null,disableActionButton:H&&!Y||x,titleAdornment:P(t)},`local-video-${t.id}`):null)]})};A.displayName="LocalVideoList";const q=U;try{A.displayName="LocalVideoList",A.__docgenInfo={description:"",displayName:"LocalVideoList",props:{loading:{defaultValue:{value:"false"},description:"Loading mode.",name:"loading",required:!1,type:{name:"boolean"}},uploading:{defaultValue:{value:"false"},description:"Is Uploading.",name:"uploading",required:!1,type:{name:"boolean"}},showActionButton:{defaultValue:{value:"true"},description:"Show action button.",name:"showActionButton",required:!1,type:{name:"boolean"}},showQuickActions:{defaultValue:{value:"false"},description:"Show quick actions.",name:"showQuickActions",required:!1,type:{name:"boolean"}},hidePrivacy:{defaultValue:{value:"false"},description:"Hide privacy column.",name:"hidePrivacy",required:!1,type:{name:"boolean"}},hideDuration:{defaultValue:{value:"false"},description:"Hide duration column.",name:"hideDuration",required:!1,type:{name:"boolean"}},hidePlays:{defaultValue:{value:"false"},description:"Hide plays column.",name:"hidePlays",required:!1,type:{name:"boolean"}},videos:{defaultValue:null,description:"",name:"videos",required:!0,type:{name:"LocalVideo[]"}},onActionClick:{defaultValue:null,description:"",name:"onActionClick",required:!1,type:{name:"(video: LocalVideo) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-list/index.tsx#LocalVideoList"]={docgenInfo:A.__docgenInfo,name:"LocalVideoList",path:"../../packages/videopress/src/client/admin/components/video-list/index.tsx#LocalVideoList"})}catch(i){}try{videolist.displayName="videolist",videolist.__docgenInfo={description:"",displayName:"videolist",props:{videos:{defaultValue:null,description:"List of videos.",name:"videos",required:!0,type:{name:"VideoPressVideo[]"}},hidePrivacy:{defaultValue:{value:"false"},description:"Hide privacy column.",name:"hidePrivacy",required:!1,type:{name:"boolean"}},hideDuration:{defaultValue:{value:"false"},description:"Hide duration column.",name:"hideDuration",required:!1,type:{name:"boolean"}},hidePlays:{defaultValue:{value:"false"},description:"Hide plays column.",name:"hidePlays",required:!1,type:{name:"boolean"}},showActionButton:{defaultValue:{value:"true"},description:"Show action button.",name:"showActionButton",required:!1,type:{name:"boolean"}},showQuickActions:{defaultValue:{value:"false"},description:"Show quick actions.",name:"showQuickActions",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading mode.",name:"loading",required:!1,type:{name:"boolean"}},uploading:{defaultValue:{value:"false"},description:"Is Uploading.",name:"uploading",required:!1,type:{name:"boolean"}},onVideoDetailsClick:{defaultValue:null,description:"Callback to be invoked when clicking on the `Edit details` button.",name:"onVideoDetailsClick",required:!1,type:{name:"(video: VideoPressVideo) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/video-list/index.tsx#videolist"]={docgenInfo:videolist.__docgenInfo,name:"videolist",path:"../../packages/videopress/src/client/admin/components/video-list/index.tsx#videolist"})}catch(i){}var ae=`import { action } from '@storybook/addon-actions';
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
`,de={_default:{startLoc:{col:51,line:17},endLoc:{col:1,line:19},startBody:{col:51,line:17},endBody:{col:1,line:19}}};const oe={title:"Packages/VideoPress/Video List",component:q,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:51,line:17},endLoc:{col:1,line:19},startBody:{col:51,line:17},endBody:{col:1,line:19}}}},layout:"centered"},decorators:[i=>(0,n.jsx)("div",{style:{width:"95vw",maxWidth:1e3},children:(0,n.jsx)(i,{})})]},X=i=>(0,n.jsx)(q,{...i});X.displayName="Template";const D=X.bind({});D.args={onClickEdit:i=>{(0,_.aD)("onClickEdit")(i)},videos:[{id:1,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:2,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:3,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:4,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0},{id:5,posterImage:"https://videos.files.wordpress.com/PnQvSqdF/videopress-upload-demo-7_mp4_hd_1080p.original.jpg",videoTitle:"videopress-upload-demo-7-mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0}],hidePrivacy:!1,hideDuration:!1,hidePlays:!1,hideEditButton:!1,hideQuickActions:!1},D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  return <VideoList {...args} />;
}`,...(se=(te=D.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const ne=["_default"]},"../../packages/videopress/src/client/admin/hooks/use-plan/index.ts":(E,m,e)=>{e.d(m,{g:()=>R});var _=e("../../../node_modules/.pnpm/@wordpress+data@9.15.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),l=e("../../packages/videopress/src/client/state/index.js");function w(u){return u.replace(/([-_][a-z])/gi,g=>g.toUpperCase().replace("_",""))}function h(u){return u.indexOf("_")!==-1}function y(u,g=!1){const v=Object.assign({},u);for(const f in v)v.hasOwnProperty(f)&&h(f)&&(v[w(f)]=v[f],g&&delete v[f]);return v}const{paidFeatures:k={},siteProductData:O={},productData:T={},productPrice:V={}}=window&&window.jetpackVideoPressInitialState?window.jetpackVideoPressInitialState:{},R=()=>{const u=y(O.pricing_for_ui,!0),g=y(T.introductory_offer,!0),v={...y(T,!0),introductoryOffer:g},{purchases:f,isFetchingPurchases:M}=(0,_.Z)(a=>({purchases:a(l.tT).getPurchases(),isFetchingPurchases:a(l.tT).isFetchingPurchases()}),[]),d=f.map(a=>y(a,!0));function r(a){return d.some(j=>j.productSlug===a)}const s=["jetpack_videopress_bi_yearly","jetpack_videopress","jetpack_videopress_monthly","jetpack_complete_bi_yearly","jetpack_complete","jetpack_complete_monthly","jetpack_business","jetpack_business_monthly","jetpack_personal","jetpack_personal_monthly","jetpack_premium","jetpack_premium_monthly","videopress","videopress-pro","wp_p2_plus_monthly","bundle_pro","value_bundle","value_bundle_monthly","value_bundle-2y","value_bundle-3y","pro-plan","pro-plan-monthly","pro-plan-2y","business-bundle","business-bundle-monthly","business-bundle-2y","business-bundle-3y","wp_com_hundred_year_bundle_centennially","wp_bundle_migration_trial_monthly","wp_bundle_hosting_trial_monthly","ecommerce-bundle","ecommerce-bundle-monthly","ecommerce-bundle-2y","ecommerce-bundle-3y","ecommerce-trial-bundle-monthly","wooexpress-small-bundle-yearly","wooexpress-small-bundle-monthly","wooexpress-medium-bundle-yearly","wooexpress-medium-bundle-monthly"].some(a=>r(a));return{features:k,siteProduct:{...y({...O},!0),pricingForUi:u},product:v,productPrice:V,purchases:d,hasVideoPressPurchase:s,isFetchingPurchases:M}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-list/style.module.scss":(E,m,e)=>{e.d(m,{Z:()=>k});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(_),w=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),h=e.n(w),y=h()(l());y.push([E.id,".YHPOlLDVIbr_yO00ArYP{background-color:var(--jp-white)}.tjW16wKOwn44cr9MGow_{display:flex;align-items:center;padding:calc(var(--spacing-base)*2) var(--spacing-base);justify-content:space-between;gap:calc(var(--spacing-base)*2);border-bottom:1px solid var(--jp-gray-5)}.jWMIQVpkq9OpGQzFSMsb{display:flex;gap:calc(var(--spacing-base)*2)}.zKvAS0PJjwhcUV1AuSGd{border-bottom:1px solid var(--jp-gray-5)}.KkQO1dO5lSgu0_uaMUQc{fill:var(--jp-gray-10);margin-left:var(--spacing-base);display:inline-flex}.KkQO1dO5lSgu0_uaMUQc.JbGGgCi8spwySJSNrbJh{fill:var(--jp-yellow-20)}",""]),y.locals={list:"YHPOlLDVIbr_yO00ArYP",header:"tjW16wKOwn44cr9MGow_","title-wrapper":"jWMIQVpkq9OpGQzFSMsb",row:"zKvAS0PJjwhcUV1AuSGd","title-adornment":"KkQO1dO5lSgu0_uaMUQc",error:"JbGGgCi8spwySJSNrbJh"};const k=y}}]);})();
