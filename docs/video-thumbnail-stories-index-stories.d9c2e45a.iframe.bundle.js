"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3260],{"../../packages/videopress/src/client/admin/components/video-thumbnail/stories/index.stories.tsx":(_,d,e)=>{e.r(d),e.d(d,{Default:()=>i,Placeholder:()=>m,VideoDropdown:()=>p,__namedExportsOrder:()=>A,default:()=>U});var s=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),a=e("../../packages/videopress/src/client/admin/components/video-thumbnail/index.tsx");const l=e.p+"static/media/poster-01.98a5201a.png",o=e.p+"static/media/poster-02.5155bdc8.png",n=e.p+"static/media/poster-03.5dba206d.png",t=e.p+"static/media/poster-04.6b4b101a.png",r=e.p+"static/media/poster-05.01897bd7.png",u=e.p+"static/media/poster-06.82c5e00a.png",j=e.p+"static/media/poster-square-01.e7274dcd.jpg",v=e.p+"static/media/poster-square-02.6d07b266.jpg",D=e.p+"static/media/poster-square-03.82f08de0.jpg",V=e.p+"static/media/poster-square-04.a8aa4f52.jpg",P=e.p+"static/media/poster-square-05.503472ee.jpg",w=e.p+"static/media/poster-square-06.fda4b13f.jpg",h=[l,o,n,t,r,u,j,v,D,V,P,w];function S(){const c=h.length-1,T=Math.floor(Math.random()*(c+1));return h[T]}const E=[{id:1,posterImage:l,videoTitle:"JPD Meetup - Barcelona",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:2,posterImage:o,videoTitle:"Dope Office Setup",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:3,posterImage:n,videoTitle:"Geneva Wheel",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:4,posterImage:t,videoTitle:"linear-x-02.mov",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:5,posterImage:r,videoTitle:"Random Objects",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:6,posterImage:u,videoTitle:"office-tour-experiment.mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"}],k=[{id:1,videoTitle:"time-clock-v2-05.mp4",uploadDate:"2022-08-15T21:16:59+0000"},{id:2,videoTitle:"Barcelona Tour",uploadDate:"2022-08-15T21:16:59+0000"},{id:3,videoTitle:"Mountain Dew Creative",uploadDate:"2022-08-15T21:16:59+0000"},{id:4,videoTitle:"2021 Reel",uploadDate:"2022-08-15T21:16:59+0000"}];var x=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(x),g=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-thumbnail/stories/style.module.scss"),b={};b.insert="head",b.singleton=!1;var B=O()(g.A,b);const I=g.A.locals||{};var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),F=`/**
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
`,L={Default:{startLoc:{col:31,line:34},endLoc:{col:1,line:45},startBody:{col:31,line:34},endBody:{col:1,line:45}},Placeholder:{startLoc:{col:31,line:34},endLoc:{col:1,line:45},startBody:{col:31,line:34},endBody:{col:1,line:45}},VideoDropdown:{startLoc:{col:39,line:63},endLoc:{col:61,line:63},startBody:{col:39,line:63},endBody:{col:61,line:63}}};const U={title:"Packages/VideoPress/Video Thumbnail",component:a.Ay,parameters:{storySource:{source:`/**
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
};`,locationsMap:{default:{startLoc:{col:31,line:34},endLoc:{col:1,line:45},startBody:{col:31,line:34},endBody:{col:1,line:45}},placeholder:{startLoc:{col:31,line:34},endLoc:{col:1,line:45},startBody:{col:31,line:34},endBody:{col:1,line:45}},"video-dropdown":{startLoc:{col:39,line:63},endLoc:{col:61,line:63},startBody:{col:39,line:63},endBody:{col:61,line:63}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...h,"none"]}},decorators:[c=>(0,f.jsx)("div",{className:I.decorator,children:(0,f.jsx)(c,{})})]},y=({thumbnail:c,...T})=>(c==="none"&&(c=!1),(0,f.jsx)(a.Ay,{...T,thumbnail:c})),i=y.bind({});i.args={thumbnail:S(),onUseDefaultThumbnail:(0,s.XI)("onUseDefaultThumbnail"),onSelectFromVideo:(0,s.XI)("onSelectFromVideo"),onUploadImage:(0,s.XI)("onUploadImage"),editable:!0,loading:!1,uploading:!1,processing:!1,uploadProgress:.5};const m=y.bind({});m.args={...i.args,thumbnail:"none"};const p=a.t6.bind({});p.args={onUseDefaultThumbnail:(0,s.XI)("onUseDefaultThumbnail"),onSelectFromVideo:(0,s.XI)("onSelectFromVideo"),onUploadImage:(0,s.XI)("onUploadImage")};const A=["Default","Placeholder","VideoDropdown"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...i.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...m.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"VideoThumbnailDropdown",...p.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.21.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(_,d,e)=>{e.d(d,{Ay:()=>l});var s=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.21.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function a(o,n){if(o===n)return!0;if(o.length!==n.length)return!1;for(let t=0,r=o.length;t<r;t++)if(o[t]!==n[t])return!1;return!0}function l(o,n){if(o&&n){if(o.constructor===Object&&n.constructor===Object)return(0,s.A)(o,n);if(Array.isArray(o)&&Array.isArray(n))return a(o,n)}return o===n}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.21.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(_,d,e)=>{e.d(d,{A:()=>s});function s(a,l){if(a===l)return!0;const o=Object.keys(a),n=Object.keys(l);if(o.length!==n.length)return!1;let t=0;for(;t<o.length;){const r=o[t],u=a[r];if(u===void 0&&!l.hasOwnProperty(r)||u!==l[r])return!1;t++}return!0}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-thumbnail/stories/style.module.scss":(_,d,e)=>{e.d(d,{A:()=>t});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(s),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(l),n=o()(a());n.push([_.id,".xFjebifkCPiywcVGbJUF{width:100vw;max-width:500px;min-height:250px;position:relative}",""]),n.locals={decorator:"xFjebifkCPiywcVGbJUF"};const t=n}}]);
