"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5548],{"../../packages/videopress/src/client/admin/components/video-thumbnail/stories/index.stories.tsx":(h,i,e)=>{var v,j,P,S,x,w,U,O,I;e.r(i),e.d(i,{Default:()=>n,Placeholder:()=>r,VideoDropdown:()=>s,__namedExportsOrder:()=>k,default:()=>u});var o=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),t=e("../../packages/videopress/src/client/admin/components/video-thumbnail/index.tsx"),l=e("../../packages/videopress/src/client/admin/mock/index.ts"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(m),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-thumbnail/stories/style.module.scss"),p={};p.insert="head",p.singleton=!1;var f=a()(d.Z,p);const T=d.Z.locals||{};var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=`/**
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
`,D={Default:{startLoc:{col:70,line:33},endLoc:{col:1,line:41},startBody:{col:70,line:33},endBody:{col:1,line:41}},Placeholder:{startLoc:{col:70,line:33},endLoc:{col:1,line:41},startBody:{col:70,line:33},endBody:{col:1,line:41}},VideoDropdown:{startLoc:{col:86,line:59},endLoc:{col:108,line:59},startBody:{col:86,line:59},endBody:{col:108,line:59}}};const u={title:"Packages/VideoPress/Video Thumbnail",component:t.ZP,parameters:{storySource:{source:`/**
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
export default ({
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
  decorators: [Story => <div className={styles.decorator}>
                <Story />
            </div>]
} as ComponentMeta<typeof VideoThumbnail>);
const VideoThumbnailTemplate: ComponentStory<typeof VideoThumbnail> = ({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
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
const VideoThumbnailDropdownTemplate: ComponentStory<typeof VideoThumbnailDropdown> = VideoThumbnailDropdown;
export const VideoDropdown = VideoThumbnailDropdownTemplate.bind({});
VideoDropdown.args = {
  onUseDefaultThumbnail: action('onUseDefaultThumbnail'),
  onSelectFromVideo: action('onSelectFromVideo'),
  onUploadImage: action('onUploadImage')
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "({\\n  thumbnail,\\n  ...args\\n}) => {\\n  if (thumbnail === 'none') {\\n    thumbnail = false;\\n  }\\n  return <VideoThumbnail {...args} thumbnail={thumbnail} />;\\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
Placeholder.parameters = {
  ...Placeholder.parameters,
  docs: {
    ...Placeholder.parameters?.docs,
    source: {
      originalSource: "({\\n  thumbnail,\\n  ...args\\n}) => {\\n  if (thumbnail === 'none') {\\n    thumbnail = false;\\n  }\\n  return <VideoThumbnail {...args} thumbnail={thumbnail} />;\\n}",
      ...Placeholder.parameters?.docs?.source
    }
  }
};
VideoDropdown.parameters = {
  ...VideoDropdown.parameters,
  docs: {
    ...VideoDropdown.parameters?.docs,
    source: {
      originalSource: "VideoThumbnailDropdown",
      ...VideoDropdown.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:70,line:33},endLoc:{col:1,line:41},startBody:{col:70,line:33},endBody:{col:1,line:41}},placeholder:{startLoc:{col:70,line:33},endLoc:{col:1,line:41},startBody:{col:70,line:33},endBody:{col:1,line:41}},"video-dropdown":{startLoc:{col:86,line:59},endLoc:{col:108,line:59},startBody:{col:86,line:59},endBody:{col:108,line:59}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...l.Pe,"none"]}},decorators:[_=>(0,c.jsx)("div",{className:T.decorator,children:(0,c.jsx)(_,{})})]},b=_=>{let{thumbnail:g,...B}=_;return g==="none"&&(g=!1),(0,c.jsx)(t.ZP,{...B,thumbnail:g})};b.displayName="VideoThumbnailTemplate";const n=b.bind({});n.args={thumbnail:(0,l.u8)(),onUseDefaultThumbnail:(0,o.aD)("onUseDefaultThumbnail"),onSelectFromVideo:(0,o.aD)("onSelectFromVideo"),onUploadImage:(0,o.aD)("onUploadImage"),editable:!0,loading:!1,uploading:!1,processing:!1,uploadProgress:.5};const r=b.bind({});r.args={...n.args,thumbnail:"none"};const s=t.VJ.bind({});s.args={onUseDefaultThumbnail:(0,o.aD)("onUseDefaultThumbnail"),onSelectFromVideo:(0,o.aD)("onSelectFromVideo"),onUploadImage:(0,o.aD)("onUploadImage")},n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...(P=(j=n.parameters)==null?void 0:j.docs)==null?void 0:P.source}}},r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  thumbnail,
  ...args
}) => {
  if (thumbnail === 'none') {
    thumbnail = false;
  }
  return <VideoThumbnail {...args} thumbnail={thumbnail} />;
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}},s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:"VideoThumbnailDropdown",...(I=(O=s.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const k=["Default","Placeholder","VideoDropdown"]},"../../packages/videopress/src/client/admin/mock/index.ts":(h,i,e)=>{e.d(i,{Pe:()=>u,u8:()=>b,Ls:()=>n});const o=e.p+"static/media/poster-01.e425b62f.png",t=e.p+"static/media/poster-02.4d95eeca.png",l=e.p+"static/media/poster-03.67dd0ba6.png",m=e.p+"static/media/poster-04.00d054fc.png",a=e.p+"static/media/poster-05.65d90662.png",d=e.p+"static/media/poster-06.f1998769.png",p=e.p+"static/media/poster-square-01.e57fbdc5.jpg",f=e.p+"static/media/poster-square-02.5838ae36.jpg",T=e.p+"static/media/poster-square-03.4b398263.jpg",c=e.p+"static/media/poster-square-04.27e08295.jpg",y=e.p+"static/media/poster-square-05.acebfa62.jpg",D=e.p+"static/media/poster-square-06.941b0f4d.jpg",u=[o,t,l,m,a,d,p,f,T,c,y,D];function b(){const V=u.length-1,s=Math.floor(Math.random()*(V+1));return u[s]}const n=[{id:1,posterImage:o,videoTitle:"JPD Meetup - Barcelona",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:2,posterImage:t,videoTitle:"Dope Office Setup",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:3,posterImage:l,videoTitle:"Geneva Wheel",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:4,posterImage:m,videoTitle:"linear-x-02.mov",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:5,posterImage:a,videoTitle:"Random Objects",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"},{id:6,posterImage:d,videoTitle:"office-tour-experiment.mp4",duration:158633,plays:200,uploadDate:"2022-08-15T21:16:59+0000",isPrivate:!0,url:"https://videos.files.wordpress.com/uz1Bk7rV/protect-navigation-9.mp4"}],r=[{id:1,videoTitle:"time-clock-v2-05.mp4",uploadDate:"2022-08-15T21:16:59+0000"},{id:2,videoTitle:"Barcelona Tour",uploadDate:"2022-08-15T21:16:59+0000"},{id:3,videoTitle:"Mountain Dew Creative",uploadDate:"2022-08-15T21:16:59+0000"},{id:4,videoTitle:"2021 Reel",uploadDate:"2022-08-15T21:16:59+0000"}]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/video-thumbnail/stories/style.module.scss":(h,i,e)=>{e.d(i,{Z:()=>d});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(o),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=e.n(l),a=m()(t());a.push([h.id,".xFjebifkCPiywcVGbJUF{width:100vw;max-width:500px;min-height:250px;position:relative}",""]),a.locals={decorator:"xFjebifkCPiywcVGbJUF"};const d=a}}]);})();
