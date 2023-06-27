(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2952,9495,7946],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(y,l,e)=>{"use strict";e.r(l),e.d(l,{MDXContext:()=>s,MDXProvider:()=>d,useMDXComponents:()=>p,withMDXComponents:()=>m});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=r.createContext({});function m(n){return t;function t(o){const a=p(o.components);return r.createElement(n,{...o,allComponents:a})}}function p(n){const t=r.useContext(s);return r.useMemo(()=>typeof n=="function"?n(t):{...t,...n},[t,n])}const c={};function d({components:n,children:t,disableParentContext:o}){let a;return o?a=typeof n=="function"?n({}):n||c:a=p(n),r.createElement(s.Provider,{value:a},t)}},"../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(y,l,e)=>{"use strict";e.d(l,{aD:()=>r.aD});var r=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs"),s=(...p)=>{let c=config,d=p;d.length===1&&Array.isArray(d[0])&&([d]=d),d.length!==1&&typeof d[d.length-1]!="string"&&(c={...config,...d.pop()});let n=d[0];(d.length!==1||typeof n=="string")&&(n={},d.forEach(o=>{n[o]=o}));let t={};return Object.keys(n).forEach(o=>{t[o]=action(n[o],c)}),t},m=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(y,l,e)=>{var r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,c=(o,a,i,_)=>{if(a&&typeof a=="object"||typeof a=="function")for(let u of m(a))!p.call(o,u)&&u!==i&&r(o,u,{get:()=>a[u],enumerable:!(_=s(a,u))||_.enumerable});return o},d=(o,a,i)=>(c(o,a,"default"),i&&c(i,a,"default")),n=o=>c(r({},"__esModule",{value:!0}),o),t={};y.exports=n(t),d(t,e("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),y.exports)},"../../packages/videopress/src/client/admin/components/video-card/stories/index.mdx":(y,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>a});var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),p=e.n(m),c=e("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),d=e("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),n=e("../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx");function t(i){const _=Object.assign({h1:"h1",p:"p"},(0,m.useMDXComponents)(),i.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.h_,{of:n}),`
`,(0,s.jsx)(_.h1,{id:"videocard",children:"VideoCard"}),`
`,(0,s.jsx)(_.p,{children:`React component that shows a card with details about the given video. It is possible to change it via the edit button.
It is composed of two simpler components: VideoThumbnail and VideoDetails components.`}),`
`,(0,s.jsx)(c.oG,{id:"packages-videopress-video-card--default"})]})}function o(i={}){const{wrapper:_}=Object.assign({},(0,m.useMDXComponents)(),i.components);return _?(0,s.jsx)(_,Object.assign({},i,{children:(0,s.jsx)(t,i)})):t(i)}const a=o},"../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx":(y,l,e)=>{var i,_,u;"use strict";e.r(l),e.d(l,{__namedExportsOrder:()=>a,_default:()=>o,default:()=>n});var r=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),s=e("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),m=e("../../packages/videopress/src/client/admin/mock/index.ts"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=`import { action } from '@storybook/addon-actions';
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
`,d={_default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}};const n={title:"Packages/VideoPress/Video Card",component:s.cB,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...m.Pe,"none"]}}},t=C=>(C.thumbnail==="none"&&(C.thumbnail=null),(0,p.jsx)(s.cB,{...C}));t.displayName="Template";const o=t.bind({});o.args={title:"JPD Meetup - Barcelona",thumbnail:(0,m.u8)(),editable:!1,duration:(34*60+25)*1e3,plays:972,onVideoDetailsClick:(0,r.aD)("onVideoDetailsClick"),onUpdateVideoThumbnail:(0,r.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,r.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,r.aD)("onDeleteVideo"),showQuickActions:!0,loading:!1,uploading:!1,processing:!1},o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
}`,...(u=(_=o.parameters)==null?void 0:_.docs)==null?void 0:u.source}}};const a=["_default"]}}]);})();
