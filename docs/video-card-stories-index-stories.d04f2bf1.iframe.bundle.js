"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9495],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(y,r,e)=>{e.d(r,{aD:()=>a.aD});var a=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),d=(...l)=>{let c=config,o=l;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(c={...config,...o.pop()});let t=o[0];(o.length!==1||typeof t=="string")&&(t={},o.forEach(n=>{t[n]=n}));let s={};return Object.keys(t).forEach(n=>{s[n]=action(t[n],c)}),s},i=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx":(y,r,e)=>{var p,u,_;e.r(r),e.d(r,{__namedExportsOrder:()=>f,_default:()=>n,default:()=>t});var a=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),d=e("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),i=e("../../packages/videopress/src/client/admin/mock/index.ts"),l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import { action } from '@storybook/addon-actions';
import { VideoCard as VideoCardComponent } from '..';
import { postersArray, randomPoster } from '../../../mock';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Card',
	component: VideoCardComponent,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		thumbnail: {
			control: { type: 'select' },
			options: [ ...postersArray, 'none' ],
		},
	},
} as ComponentMeta< typeof VideoCardComponent >;

const Template: ComponentStory< typeof VideoCardComponent > = args => {
	if ( args.thumbnail === 'none' ) {
		args.thumbnail = null;
	}

	return <VideoCardComponent { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	title: 'JPD Meetup - Barcelona',
	thumbnail: randomPoster(),
	editable: false,
	duration: ( 34 * 60 + 25 ) * 1000, // 34 minutes and 25 seconds
	plays: 972,
	onVideoDetailsClick: action( 'onVideoDetailsClick' ),
	onUpdateVideoThumbnail: action( 'onUpdateVideoThumbnail' ),
	onUpdateVideoPrivacy: action( 'onUpdateVideoPrivacy' ),
	onDeleteVideo: action( 'onDeleteVideo' ),
	showQuickActions: true,
	loading: false,
	uploading: false,
	processing: false,
};
`,o={_default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}};const t={title:"Packages/VideoPress/Video Card",component:d.cB,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import { VideoCard as VideoCardComponent } from '..';
import { postersArray, randomPoster } from '../../../mock';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Video Card',
  component: VideoCardComponent,
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
  }
} as ComponentMeta<typeof VideoCardComponent>);
const Template: ComponentStory<typeof VideoCardComponent> = args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
};
export const _default = Template.bind({});
_default.args = {
  title: 'JPD Meetup - Barcelona',
  thumbnail: randomPoster(),
  editable: false,
  duration: (34 * 60 + 25) * 1000,
  // 34 minutes and 25 seconds
  plays: 972,
  onVideoDetailsClick: action('onVideoDetailsClick'),
  onUpdateVideoThumbnail: action('onUpdateVideoThumbnail'),
  onUpdateVideoPrivacy: action('onUpdateVideoPrivacy'),
  onDeleteVideo: action('onDeleteVideo'),
  showQuickActions: true,
  loading: false,
  uploading: false,
  processing: false
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  if (args.thumbnail === 'none') {\\n    args.thumbnail = null;\\n  }\\n  return <VideoCardComponent {...args} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...i.Pe,"none"]}}},s=m=>(m.thumbnail==="none"&&(m.thumbnail=null),(0,l.jsx)(d.cB,{...m}));s.displayName="Template";const n=s.bind({});n.args={title:"JPD Meetup - Barcelona",thumbnail:(0,i.u8)(),editable:!1,duration:(34*60+25)*1e3,plays:972,onVideoDetailsClick:(0,a.aD)("onVideoDetailsClick"),onUpdateVideoThumbnail:(0,a.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,a.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,a.aD)("onDeleteVideo"),showQuickActions:!0,loading:!1,uploading:!1,processing:!1},n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
}`,...(_=(u=n.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const f=["_default"]}}]);})();
