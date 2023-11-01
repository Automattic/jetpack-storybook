"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9495],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(V,m,a)=>{a.d(m,{aD:()=>l});var d="actions",s="storybook/actions",f=`${s}/panel`,C=`${s}/action-event`,D=`${s}/action-clear`,P="$___storybook.isCyclic",g=a("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),u=a("@storybook/preview-api"),r={depth:10,clearOnStoryChange:!0,limit:50},b=(n={})=>{Object.assign(r,n)},c=(n,o)=>{let e=Object.getPrototypeOf(n);return!e||o(e)?e:c(e,o)},y=n=>!!(typeof n=="object"&&n&&c(n,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof n.persist=="function"),_=n=>{if(y(n)){let o=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));o.persist();let e=Object.getOwnPropertyDescriptor(o,"view"),t=e==null?void 0:e.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...e,value:Object.create(t.constructor.prototype)}),o}return n};function l(n,o={}){let e={...r,...o},t=function(...p){let i=u.addons.getChannel(),k=(0,g.Z)(),O=5,h=p.map(_),E=p.length>1?h:h[0],v={id:k,count:0,data:{name:n,args:E},options:{...e,maxDepth:O+(e.depth||3),allowFunction:e.allowFunction||!1}};i.emit(C,v)};return t.isAction=!0,t}var A=(...n)=>{let o=config,e=n;e.length===1&&Array.isArray(e[0])&&([e]=e),e.length!==1&&typeof e[e.length-1]!="string"&&(o={...config,...e.pop()});let t=e[0];(e.length!==1||typeof t=="string")&&(t={},e.forEach(i=>{t[i]=i}));let p={};return Object.keys(t).forEach(i=>{p[i]=action(t[i],o)}),p}},"../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx":(V,m,a)=>{var c,y,_;a.r(m),a.d(m,{__namedExportsOrder:()=>b,_default:()=>r,default:()=>g});var d=a("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),s=a("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),f=a("../../packages/videopress/src/client/admin/mock/index.ts"),C=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),D=`import { action } from '@storybook/addon-actions';
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
`,P={_default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}};const g={title:"Packages/VideoPress/Video Card",component:s.cB,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...f.Pe,"none"]}}},u=l=>(l.thumbnail==="none"&&(l.thumbnail=null),(0,C.jsx)(s.cB,{...l}));u.displayName="Template";const r=u.bind({});r.args={title:"JPD Meetup - Barcelona",thumbnail:(0,f.u8)(),editable:!1,duration:(34*60+25)*1e3,plays:972,onVideoDetailsClick:(0,d.aD)("onVideoDetailsClick"),onUpdateVideoThumbnail:(0,d.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,d.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,d.aD)("onDeleteVideo"),showQuickActions:!0,loading:!1,uploading:!1,processing:!1},r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
}`,...(_=(y=r.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const b=["_default"]}}]);})();
