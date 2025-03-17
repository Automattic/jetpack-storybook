"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3260],{"../../packages/videopress/src/client/admin/components/video-thumbnail/stories/index.stories.tsx":(h,i,e)=>{e.r(i),e.d(i,{Default:()=>n,Placeholder:()=>a,VideoDropdown:()=>d,__namedExportsOrder:()=>B,default:()=>w});var o=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),l=e("../../packages/videopress/src/client/admin/components/video-thumbnail/index.tsx");const r=e.p+"static/media/poster-01.98a5201a.png",m=e.p+"static/media/poster-02.5155bdc8.png",s=e.p+"static/media/poster-03.5dba206d.png",c=e.p+"static/media/poster-04.6b4b101a.png",T=e.p+"static/media/poster-05.01897bd7.png",g=e.p+"static/media/poster-06.82c5e00a.png",D=e.p+"static/media/poster-square-01.e7274dcd.jpg",v=e.p+"static/media/poster-square-02.6d07b266.jpg",V=e.p+"static/media/poster-square-03.82f08de0.jpg",j=e.p+"static/media/poster-square-04.a8aa4f52.jpg",P=e.p+"static/media/poster-square-05.503472ee.jpg",S=e.p+"static/media/poster-square-06.fda4b13f.jpg",p=[r,m,s,c,T,g,D,v,V,j,P,S];function x(){const t=p.length-1,b=Math.floor(Math.random()*(t+1));return p[b]}const E=[{id:1,posterImage:r,videoTitle:"JPD Meetup - Barcelona",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:2,posterImage:m,videoTitle:"Dope Office Setup",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:3,posterImage:s,videoTitle:"Geneva Wheel",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:4,posterImage:c,videoTitle:"linear-x-02.mov",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:5,posterImage:T,videoTitle:"Random Objects",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:6,posterImage:g,videoTitle:"office-tour-experiment.mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"}],k=[{id:1,videoTitle:"time-clock-v2-05.mp4",uploadDate:"2022-08-15T21:16:59+0000"},{id:2,videoTitle:"Barcelona Tour",uploadDate:"2022-08-15T21:16:59+0000"},{id:3,videoTitle:"Mountain Dew Creative",uploadDate:"2022-08-15T21:16:59+0000"},{id:4,videoTitle:"2021 Reel",uploadDate:"2022-08-15T21:16:59+0000"}];var I=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=e.n(I),f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-thumbnail/stories/style.module.scss"),u={};u.insert="head",u.singleton=!1;var F=U()(f.A,u);const O=f.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),A=`/**
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
import type { StoryFn, Meta } from '@storybook/react';

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
} as Meta< typeof VideoThumbnail >;

const VideoThumbnailTemplate: StoryFn< typeof VideoThumbnail > = ( { thumbnail, ...args } ) => {
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

const VideoThumbnailDropdownTemplate: StoryFn< typeof VideoThumbnailDropdown > =
	VideoThumbnailDropdown;

export const VideoDropdown = VideoThumbnailDropdownTemplate.bind( {} );
VideoDropdown.args = {
	onUseDefaultThumbnail: action( 'onUseDefaultThumbnail' ),
	onSelectFromVideo: action( 'onSelectFromVideo' ),
	onUploadImage: action( 'onUploadImage' ),
};
`,L={Default:{startLoc:{col:31,line:34},endLoc:{col:1,line:45},startBody:{col:31,line:34},endBody:{col:1,line:45}},Placeholder:{startLoc:{col:31,line:34},endLoc:{col:1,line:45},startBody:{col:31,line:34},endBody:{col:1,line:45}},VideoDropdown:{startLoc:{col:39,line:63},endLoc:{col:61,line:63},startBody:{col:39,line:63},endBody:{col:61,line:63}}};const w={title:"Packages/VideoPress/Video Thumbnail",component:l.Ay,parameters:{storySource:{source:`/**
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
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'Packages/VideoPress/Video Thumbnail',
  component: VideoThumbnail,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    thumbnail: {
      control: {
        type: 'select'
      },
      options: [...postersArray, 'none']
    }
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    className: styles.decorator,
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const VideoThumbnailTemplate = ({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return /*#__PURE__*/_jsx(VideoThumbnail, {
    ...args,
    thumbnail: thumbnail
  });
};
export const Default = VideoThumbnailTemplate.bind({});
Default.args = {
  thumbnail: randomPoster(),
  onUseDefaultThumbnail: action('onUseDefaultThumbnail'),
  onSelectFromVideo: action('onSelectFromVideo'),
  onUploadImage: action('onUploadImage'),
  editable: true,
  loading: false,
  uploading: false,
  processing: false,
  uploadProgress: 0.5
};
export const Placeholder = VideoThumbnailTemplate.bind({});
Placeholder.args = {
  ...Default.args,
  thumbnail: 'none'
};
const VideoThumbnailDropdownTemplate = VideoThumbnailDropdown;
export const VideoDropdown = VideoThumbnailDropdownTemplate.bind({});
VideoDropdown.args = {
  onUseDefaultThumbnail: action('onUseDefaultThumbnail'),
  onSelectFromVideo: action('onSelectFromVideo'),
  onUploadImage: action('onUploadImage')
};`,locationsMap:{default:{startLoc:{col:31,line:34},endLoc:{col:1,line:45},startBody:{col:31,line:34},endBody:{col:1,line:45}},placeholder:{startLoc:{col:31,line:34},endLoc:{col:1,line:45},startBody:{col:31,line:34},endBody:{col:1,line:45}},"video-dropdown":{startLoc:{col:39,line:63},endLoc:{col:61,line:63},startBody:{col:39,line:63},endBody:{col:61,line:63}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...p,"none"]}},decorators:[t=>(0,_.jsx)("div",{className:O.decorator,children:(0,_.jsx)(t,{})})]},y=({thumbnail:t,...b})=>(t==="none"&&(t=!1),(0,_.jsx)(l.Ay,{...b,thumbnail:t})),n=y.bind({});n.args={thumbnail:x(),onUseDefaultThumbnail:(0,o.XI)("onUseDefaultThumbnail"),onSelectFromVideo:(0,o.XI)("onSelectFromVideo"),onUploadImage:(0,o.XI)("onUploadImage"),editable:!0,loading:!1,uploading:!1,processing:!1,uploadProgress:.5};const a=y.bind({});a.args={...n.args,thumbnail:"none"};const d=l.t6.bind({});d.args={onUseDefaultThumbnail:(0,o.XI)("onUseDefaultThumbnail"),onSelectFromVideo:(0,o.XI)("onSelectFromVideo"),onUploadImage:(0,o.XI)("onUploadImage")};const B=["Default","Placeholder","VideoDropdown"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...n.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...a.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"VideoThumbnailDropdown",...d.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-thumbnail/stories/style.module.scss":(h,i,e)=>{e.d(i,{A:()=>c});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(o),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(r),s=m()(l());s.push([h.id,".xFjebifkCPiywcVGbJUF{width:100vw;max-width:500px;min-height:250px;position:relative}",""]),s.locals={decorator:"xFjebifkCPiywcVGbJUF"};const c=s}}]);
