"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5548],{"../../packages/videopress/src/client/admin/components/video-thumbnail/stories/index.stories.tsx":(T,r,e)=>{var V,v,j,P,S,x,U,O,I;e.r(r),e.d(r,{Default:()=>t,Placeholder:()=>i,VideoDropdown:()=>a,__namedExportsOrder:()=>k,default:()=>u});var o=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),n=e("../../packages/videopress/src/client/admin/components/video-thumbnail/index.tsx"),d=e("../../packages/videopress/src/client/admin/mock/index.ts"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(m),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-thumbnail/stories/style.module.scss"),p={};p.insert="head",p.singleton=!1;var g=s()(l.Z,p);const _=l.Z.locals||{};var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
/**
 * Internal dependencies
 */
import VideoThumbnail, { VideoThumbnailDropdown } from '..';
import { postersArray, randomPoster } from '../../../mock';
import styles from './style.module.scss';
/**
 * Types
 */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Thumbnail',
	component: VideoThumbnail,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		thumbnail: {
			control: { type: 'select' },
			options: [ ...postersArray, 'none' ],
		},
	},
	decorators: [
		Story => (
			<div className={ styles.decorator }>
				<Story />
			</div>
		),
	],
} as ComponentMeta< typeof VideoThumbnail >;

const VideoThumbnailTemplate: ComponentStory< typeof VideoThumbnail > = ( {
	thumbnail,
	...args
} ) => {
	if ( thumbnail === 'none' ) {
		thumbnail = false;
	}

	return <VideoThumbnail { ...args } thumbnail={ thumbnail } />;
};

export const Default = VideoThumbnailTemplate.bind( {} );
Default.args = {
	thumbnail: randomPoster(),
	onUseDefaultThumbnail: action( 'onUseDefaultThumbnail' ),
	onSelectFromVideo: action( 'onSelectFromVideo' ),
	onUploadImage: action( 'onUploadImage' ),
	editable: true,
	loading: false,
	uploading: false,
	processing: false,
	uploadProgress: 0.5,
};

export const Placeholder = VideoThumbnailTemplate.bind( {} );
Placeholder.args = {
	...Default.args,
	thumbnail: 'none',
};

const VideoThumbnailDropdownTemplate: ComponentStory< typeof VideoThumbnailDropdown > =
	VideoThumbnailDropdown;

export const VideoDropdown = VideoThumbnailDropdownTemplate.bind( {} );
VideoDropdown.args = {
	onUseDefaultThumbnail: action( 'onUseDefaultThumbnail' ),
	onSelectFromVideo: action( 'onSelectFromVideo' ),
	onUploadImage: action( 'onUploadImage' ),
};
`,y={Default:{startLoc:{col:72,line:37},endLoc:{col:1,line:46},startBody:{col:72,line:37},endBody:{col:1,line:46}},Placeholder:{startLoc:{col:72,line:37},endLoc:{col:1,line:46},startBody:{col:72,line:37},endBody:{col:1,line:46}},VideoDropdown:{startLoc:{col:1,line:68},endLoc:{col:23,line:68},startBody:{col:1,line:68},endBody:{col:23,line:68}}};const u={title:"Packages/VideoPress/Video Thumbnail",component:n.ZP,parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
/**
 * Internal dependencies
 */
import VideoThumbnail, { VideoThumbnailDropdown } from '..';
import { postersArray, randomPoster } from '../../../mock';
import styles from './style.module.scss';
/**
 * Types
 */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Thumbnail',
	component: VideoThumbnail,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		thumbnail: {
			control: { type: 'select' },
			options: [ ...postersArray, 'none' ],
		},
	},
	decorators: [
		Story => (
			<div className={ styles.decorator }>
				<Story />
			</div>
		),
	],
} as ComponentMeta< typeof VideoThumbnail >;

const VideoThumbnailTemplate: ComponentStory< typeof VideoThumbnail > = ( {
	thumbnail,
	...args
} ) => {
	if ( thumbnail === 'none' ) {
		thumbnail = false;
	}

	return <VideoThumbnail { ...args } thumbnail={ thumbnail } />;
};

export const Default = VideoThumbnailTemplate.bind( {} );
Default.args = {
	thumbnail: randomPoster(),
	onUseDefaultThumbnail: action( 'onUseDefaultThumbnail' ),
	onSelectFromVideo: action( 'onSelectFromVideo' ),
	onUploadImage: action( 'onUploadImage' ),
	editable: true,
	loading: false,
	uploading: false,
	processing: false,
	uploadProgress: 0.5,
};

export const Placeholder = VideoThumbnailTemplate.bind( {} );
Placeholder.args = {
	...Default.args,
	thumbnail: 'none',
};

const VideoThumbnailDropdownTemplate: ComponentStory< typeof VideoThumbnailDropdown > =
	VideoThumbnailDropdown;

export const VideoDropdown = VideoThumbnailDropdownTemplate.bind( {} );
VideoDropdown.args = {
	onUseDefaultThumbnail: action( 'onUseDefaultThumbnail' ),
	onSelectFromVideo: action( 'onSelectFromVideo' ),
	onUploadImage: action( 'onUploadImage' ),
};
`,locationsMap:{default:{startLoc:{col:72,line:37},endLoc:{col:1,line:46},startBody:{col:72,line:37},endBody:{col:1,line:46}},placeholder:{startLoc:{col:72,line:37},endLoc:{col:1,line:46},startBody:{col:72,line:37},endBody:{col:1,line:46}},"video-dropdown":{startLoc:{col:1,line:68},endLoc:{col:23,line:68},startBody:{col:1,line:68},endBody:{col:23,line:68}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...d.Pe,"none"]}},decorators:[h=>(0,c.jsx)("div",{className:_.decorator,children:(0,c.jsx)(h,{})})]},b=({thumbnail:h,...w})=>(h==="none"&&(h=!1),(0,c.jsx)(n.ZP,{...w,thumbnail:h}));b.displayName="VideoThumbnailTemplate";const t=b.bind({});t.args={thumbnail:(0,d.u8)(),onUseDefaultThumbnail:(0,o.aD)("onUseDefaultThumbnail"),onSelectFromVideo:(0,o.aD)("onSelectFromVideo"),onUploadImage:(0,o.aD)("onUploadImage"),editable:!0,loading:!1,uploading:!1,processing:!1,uploadProgress:.5};const i=b.bind({});i.args={...t.args,thumbnail:"none"};const a=n.VJ.bind({});a.args={onUseDefaultThumbnail:(0,o.aD)("onUseDefaultThumbnail"),onSelectFromVideo:(0,o.aD)("onSelectFromVideo"),onUploadImage:(0,o.aD)("onUploadImage")},t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}},i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}},a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:"VideoThumbnailDropdown",...(I=(O=a.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const k=["Default","Placeholder","VideoDropdown"]},"../../packages/videopress/src/client/admin/mock/index.ts":(T,r,e)=>{e.d(r,{Pe:()=>u,u8:()=>b,Ls:()=>t});const o=e.p+"static/media/poster-01.e425b62f.png",n=e.p+"static/media/poster-02.4d95eeca.png",d=e.p+"static/media/poster-03.67dd0ba6.png",m=e.p+"static/media/poster-04.00d054fc.png",s=e.p+"static/media/poster-05.65d90662.png",l=e.p+"static/media/poster-06.f1998769.png",p=e.p+"static/media/poster-square-01.e57fbdc5.jpg",g=e.p+"static/media/poster-square-02.5838ae36.jpg",_=e.p+"static/media/poster-square-03.4b398263.jpg",c=e.p+"static/media/poster-square-04.27e08295.jpg",f=e.p+"static/media/poster-square-05.acebfa62.jpg",y=e.p+"static/media/poster-square-06.941b0f4d.jpg",u=[o,n,d,m,s,l,p,g,_,c,f,y];function b(){const D=u.length-1,a=Math.floor(Math.random()*(D+1));return u[a]}const t=[{id:1,posterImage:o,videoTitle:"JPD Meetup - Barcelona",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:2,posterImage:n,videoTitle:"Dope Office Setup",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:3,posterImage:d,videoTitle:"Geneva Wheel",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:4,posterImage:m,videoTitle:"linear-x-02.mov",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:5,posterImage:s,videoTitle:"Random Objects",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:6,posterImage:l,videoTitle:"office-tour-experiment.mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"}],i=[{id:1,videoTitle:"time-clock-v2-05.mp4",uploadDate:"2022-08-15T21:16:59+0000"},{id:2,videoTitle:"Barcelona Tour",uploadDate:"2022-08-15T21:16:59+0000"},{id:3,videoTitle:"Mountain Dew Creative",uploadDate:"2022-08-15T21:16:59+0000"},{id:4,videoTitle:"2021 Reel",uploadDate:"2022-08-15T21:16:59+0000"}]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-thumbnail/stories/style.module.scss":(T,r,e)=>{e.d(r,{Z:()=>l});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),s=m()(n());s.push([T.id,".xFjebifkCPiywcVGbJUF{width:100vw;max-width:500px;min-height:250px;position:relative}",""]),s.locals={decorator:"xFjebifkCPiywcVGbJUF"};const l=s}}]);})();
