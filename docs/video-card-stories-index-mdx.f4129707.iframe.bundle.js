(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2952,9495],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs":(g,r,e)=>{"use strict";e.d(r,{aD:()=>v});var d=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),i=e("@storybook/preview-api"),c=e("@storybook/global"),b=e("../../../node_modules/.pnpm/@storybook+core-events@7.6.17/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),O="actions",u="storybook/actions",E=`${u}/panel`,p=`${u}/action-event`,l=`${u}/action-clear`,D="$___storybook.isCyclic",s={depth:10,clearOnStoryChange:!0,limit:50},m=(t={})=>{Object.assign(s,t)},y=(t,n)=>{let o=Object.getPrototypeOf(t);return!o||n(o)?o:y(o,n)},f=t=>!!(typeof t=="object"&&t&&y(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),M=t=>{if(f(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let o=Object.getOwnPropertyDescriptor(n,"view"),a=o==null?void 0:o.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...o,value:Object.create(a.constructor.prototype)}),n}return t},T=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,d.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function v(t,n={}){let o={...s,...n},a=function(...h){var V,k;if(n.implicit){let j=(V="__STORYBOOK_PREVIEW__"in c.global?c.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:V.storyRenders.find(C=>C.phase==="playing"||C.phase==="rendering");if(j){let C=!((k=window==null?void 0:window.FEATURES)!=null&&k.disallowImplicitActionsInRenderV8),x=new b.is({phase:j.phase,name:t,deprecated:C});if(C)console.warn(x);else throw x}}let _=i.addons.getChannel(),A=T(),R=5,P=h.map(M),U=h.length>1?P:P[0],B={id:A,count:0,data:{name:t,args:U},options:{...o,maxDepth:R+(o.depth||3),allowFunction:o.allowFunction||!1}};_.emit(p,B)};return a.isAction=!0,a}var L=(...t)=>{let n=s,o=t;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(n={...s,...o.pop()});let a=o[0];(o.length!==1||typeof a=="string")&&(a={},o.forEach(_=>{a[_]=_}));let h={};return Object.keys(a).forEach(_=>{h[_]=v(a[_],n)}),h}},"../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx":(g,r,e)=>{var s,m,y;"use strict";e.r(r),e.d(r,{__namedExportsOrder:()=>D,_default:()=>l,default:()=>E});var d=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),i=e("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),c=e("../../packages/videopress/src/client/admin/mock/index.ts"),b=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=`import { action } from '@storybook/addon-actions';
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
`,u={_default:{startLoc:{col:62,line:20},endLoc:{col:1,line:26},startBody:{col:62,line:20},endBody:{col:1,line:26}}};const E={title:"Packages/VideoPress/Video Card",component:i.cB,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
`,locationsMap:{default:{startLoc:{col:62,line:20},endLoc:{col:1,line:26},startBody:{col:62,line:20},endBody:{col:1,line:26}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...c.Pe,"none"]}}},p=f=>(f.thumbnail==="none"&&(f.thumbnail=null),(0,b.jsx)(i.cB,{...f}));p.displayName="Template";const l=p.bind({});l.args={title:"JPD Meetup - Barcelona",thumbnail:(0,c.u8)(),editable:!1,duration:(34*60+25)*1e3,plays:972,onVideoDetailsClick:(0,d.aD)("onVideoDetailsClick"),onUpdateVideoThumbnail:(0,d.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,d.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,d.aD)("onDeleteVideo"),showQuickActions:!0,loading:!1,uploading:!1,processing:!1},l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
}`,...(y=(m=l.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const D=["_default"]},"../../packages/videopress/src/client/admin/components/video-card/stories/index.mdx":(g,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>D});var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.17_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),b=e.n(c),O=e("../../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.2.14_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),u=e("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),E=e("../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx");function p(s){const m=Object.assign({h1:"h1",p:"p"},(0,c.useMDXComponents)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(O.h_,{of:E}),`
`,(0,i.jsx)(m.h1,{id:"videocard",children:"VideoCard"}),`
`,(0,i.jsx)(m.p,{children:`React component that shows a card with details about the given video. It is possible to change it via the edit button.
It is composed of two simpler components: VideoThumbnail and VideoDetails components.`}),`
`,(0,i.jsx)(O.oG,{id:"packages-videopress-video-card--default"})]})}function l(s={}){const{wrapper:m}=Object.assign({},(0,c.useMDXComponents)(),s.components);return m?(0,i.jsx)(m,Object.assign({},s,{children:(0,i.jsx)(p,s)})):p(s)}const D=l},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":g=>{function r(e){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}r.keys=()=>[],r.resolve=r,r.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",g.exports=r}}]);})();
