"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9495],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.6.5/node_modules/@storybook/addon-actions/dist/index.mjs":(A,y,a)=>{a.d(y,{aD:()=>O});var d=a("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),f=a("@storybook/preview-api"),l=a("@storybook/global"),C=a("../../../node_modules/.pnpm/@storybook+core-events@7.6.5/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),T="actions",_="storybook/actions",h=`${_}/panel`,g=`${_}/action-event`,r=`${_}/action-clear`,V="$___storybook.isCyclic",i={depth:10,clearOnStoryChange:!0,limit:50},b=(o={})=>{Object.assign(i,o)},c=(o,e)=>{let t=Object.getPrototypeOf(o);return!t||e(t)?t:c(t,e)},p=o=>!!(typeof o=="object"&&o&&c(o,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof o.persist=="function"),j=o=>{if(p(o)){let e=Object.create(o.constructor.prototype,Object.getOwnPropertyDescriptors(o));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),n=t==null?void 0:t.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(n.constructor.prototype)}),e}return o},M=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,d.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function O(o,e={}){let t={...i,...e},n=function(...m){var P,v;if(e.implicit){let E=(P="__STORYBOOK_PREVIEW__"in l.global?l.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:P.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(E){let u=!((v=window==null?void 0:window.FEATURES)!=null&&v.disallowImplicitActionsInRenderV8),k=new C.is({phase:E.phase,name:o,deprecated:u});if(u)console.warn(k);else throw k}}let s=f.addons.getChannel(),R=M(),B=5,D=m.map(j),U=m.length>1?D:D[0],x={id:R,count:0,data:{name:o,args:U},options:{...t,maxDepth:B+(t.depth||3),allowFunction:t.allowFunction||!1}};s.emit(g,x)};return n.isAction=!0,n}var S=(...o)=>{let e=i,t=o;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(e={...i,...t.pop()});let n=t[0];(t.length!==1||typeof n=="string")&&(n={},t.forEach(s=>{n[s]=s}));let m={};return Object.keys(n).forEach(s=>{m[s]=O(n[s],e)}),m}},"../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx":(A,y,a)=>{var i,b,c;a.r(y),a.d(y,{__namedExportsOrder:()=>V,_default:()=>r,default:()=>h});var d=a("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.5/node_modules/@storybook/addon-actions/dist/index.mjs"),f=a("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),l=a("../../packages/videopress/src/client/admin/mock/index.ts"),C=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),T=`import { action } from '@storybook/addon-actions';
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
`,_={_default:{startLoc:{col:62,line:20},endLoc:{col:1,line:26},startBody:{col:62,line:20},endBody:{col:1,line:26}}};const h={title:"Packages/VideoPress/Video Card",component:f.cB,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
`,locationsMap:{default:{startLoc:{col:62,line:20},endLoc:{col:1,line:26},startBody:{col:62,line:20},endBody:{col:1,line:26}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...l.Pe,"none"]}}},g=p=>(p.thumbnail==="none"&&(p.thumbnail=null),(0,C.jsx)(f.cB,{...p}));g.displayName="Template";const r=g.bind({});r.args={title:"JPD Meetup - Barcelona",thumbnail:(0,l.u8)(),editable:!1,duration:(34*60+25)*1e3,plays:972,onVideoDetailsClick:(0,d.aD)("onVideoDetailsClick"),onUpdateVideoThumbnail:(0,d.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,d.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,d.aD)("onDeleteVideo"),showQuickActions:!0,loading:!1,uploading:!1,processing:!1},r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
}`,...(c=(b=r.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const V=["_default"]}}]);})();
