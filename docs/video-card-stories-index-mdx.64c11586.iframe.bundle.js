"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2952,9495],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(D,c,e)=>{e.d(c,{aD:()=>y});var p="actions",t="storybook/actions",l=`${t}/panel`,C=`${t}/action-event`,h=`${t}/action-clear`,E="$___storybook.isCyclic",u=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),m=e("@storybook/preview-api"),d={depth:10,clearOnStoryChange:!0,limit:50},g=(n={})=>{Object.assign(d,n)},r=(n,a)=>{let o=Object.getPrototypeOf(n);return!o||a(o)?o:r(o,a)},i=n=>!!(typeof n=="object"&&n&&r(n,a=>/^Synthetic(?:Base)?Event$/.test(a.constructor.name))&&typeof n.persist=="function"),b=n=>{if(i(n)){let a=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));a.persist();let o=Object.getOwnPropertyDescriptor(a,"view"),s=o==null?void 0:o.value;return typeof s=="object"&&(s==null?void 0:s.constructor.name)==="Window"&&Object.defineProperty(a,"view",{...o,value:Object.create(s.constructor.prototype)}),a}return n};function y(n,a={}){let o={...d,...a},s=function(...f){let _=m.addons.getChannel(),O=(0,u.Z)(),v=5,P=f.map(b),k=f.length>1?P:P[0],V={id:O,count:0,data:{name:n,args:k},options:{...o,maxDepth:v+(o.depth||3),allowFunction:o.allowFunction||!1}};_.emit(C,V)};return s.isAction=!0,s}var j=(...n)=>{let a=config,o=n;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(a={...config,...o.pop()});let s=o[0];(o.length!==1||typeof s=="string")&&(s={},o.forEach(_=>{s[_]=_}));let f={};return Object.keys(s).forEach(_=>{f[_]=action(s[_],a)}),f}},"../../packages/videopress/src/client/admin/components/video-card/stories/index.mdx":(D,c,e)=>{e.r(c),e.d(c,{default:()=>g});var p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),C=e.n(l),h=e("../../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),E=e("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),u=e("../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx");function m(r){const i=Object.assign({h1:"h1",p:"p"},(0,l.useMDXComponents)(),r.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.h_,{of:u}),`
`,(0,t.jsx)(i.h1,{id:"videocard",children:"VideoCard"}),`
`,(0,t.jsx)(i.p,{children:`React component that shows a card with details about the given video. It is possible to change it via the edit button.
It is composed of two simpler components: VideoThumbnail and VideoDetails components.`}),`
`,(0,t.jsx)(h.oG,{id:"packages-videopress-video-card--default"})]})}function d(r={}){const{wrapper:i}=Object.assign({},(0,l.useMDXComponents)(),r.components);return i?(0,t.jsx)(i,Object.assign({},r,{children:(0,t.jsx)(m,r)})):m(r)}const g=d},"../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx":(D,c,e)=>{var r,i,b;e.r(c),e.d(c,{__namedExportsOrder:()=>g,_default:()=>d,default:()=>u});var p=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),t=e("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),l=e("../../packages/videopress/src/client/admin/mock/index.ts"),C=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=`import { action } from '@storybook/addon-actions';
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
`,E={_default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}};const u={title:"Packages/VideoPress/Video Card",component:t.cB,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...l.Pe,"none"]}}},m=y=>(y.thumbnail==="none"&&(y.thumbnail=null),(0,C.jsx)(t.cB,{...y}));m.displayName="Template";const d=m.bind({});d.args={title:"JPD Meetup - Barcelona",thumbnail:(0,l.u8)(),editable:!1,duration:(34*60+25)*1e3,plays:972,onVideoDetailsClick:(0,p.aD)("onVideoDetailsClick"),onUpdateVideoThumbnail:(0,p.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,p.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,p.aD)("onDeleteVideo"),showQuickActions:!0,loading:!1,uploading:!1,processing:!1},d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
}`,...(b=(i=d.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};const g=["_default"]}}]);})();
