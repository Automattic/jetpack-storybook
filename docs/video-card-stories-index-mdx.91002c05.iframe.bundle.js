"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2952,9495],{"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(p,c,o)=>{o.d(c,{NF:()=>a,Zo:()=>r,ah:()=>m,pC:()=>s});var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=d.createContext({});function a(n){return e;function e(t){const i=m(t.components);return d.createElement(n,{...t,allComponents:i})}}function m(n){const e=d.useContext(s);return d.useMemo(()=>typeof n=="function"?n(e):{...e,...n},[e,n])}const u={};function r({components:n,children:e,disableParentContext:t}){let i;return t?i=typeof n=="function"?n({}):n||u:i=m(n),d.createElement(s.Provider,{value:i},e)}},"../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(p,c,o)=>{o.d(c,{aD:()=>d.aD});var d=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs"),s=(...m)=>{let u=config,r=m;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(u={...config,...r.pop()});let n=r[0];(r.length!==1||typeof n=="string")&&(n={},r.forEach(t=>{n[t]=t}));let e={};return Object.keys(n).forEach(t=>{e[t]=action(n[t],u)}),e},a=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(p,c,o)=>{o.d(c,{_:()=>m,r:()=>r});var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/@storybook+react-dom-shim@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),a=o("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),m={code:a.bD,a:a.Ct,...a.lO},u=class extends d.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n){let{showException:e}=this.props;e(n)}render(){let{hasError:n}=this.state,{children:e}=this.props;return n?null:e}},r=class{constructor(){this.render=async(n,e,t)=>{let i={...m,...e==null?void 0:e.components};return new Promise((l,_)=>{o.e(2002).then(o.bind(o,"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:C})=>(0,s.l)(d.createElement(u,{showException:_,key:Math.random()},d.createElement(C,{components:i},d.createElement(a.WI,{context:n,docsParameter:e}))),t)).then(l)})},this.unmount=n=>{(0,s.K)(n)}}}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs":(p,c,o)=>{o.d(c,{Hw:()=>a.Hw,Xz:()=>a.Xz,h_:()=>a.h_,oG:()=>a.oG});var d=o("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),s=o("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs"),a=o("../../../node_modules/.pnpm/@storybook+blocks@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs")},"../../packages/videopress/src/client/admin/components/video-card/stories/index.mdx":(p,c,o)=>{o.r(c),o.d(c,{default:()=>t});var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=o("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),m=o("../../../node_modules/.pnpm/@storybook+addon-docs@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),u=o("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),r=o("../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx");function n(i){const l=Object.assign({h1:"h1",p:"p"},(0,a.ah)(),i.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.h_,{of:r}),`
`,(0,s.jsx)(l.h1,{id:"videocard",children:"VideoCard"}),`
`,(0,s.jsx)(l.p,{children:`React component that shows a card with details about the given video. It is possible to change it via the edit button.
It is composed of two simpler components: VideoThumbnail and VideoDetails components.`}),`
`,(0,s.jsx)(m.oG,{id:"packages-videopress-video-card--default"})]})}function e(i={}){const{wrapper:l}=Object.assign({},(0,a.ah)(),i.components);return l?(0,s.jsx)(l,Object.assign({},i,{children:(0,s.jsx)(n,i)})):n(i)}const t=e},"../../packages/videopress/src/client/admin/components/video-card/stories/index.stories.tsx":(p,c,o)=>{var l,_,C;o.r(c),o.d(c,{__namedExportsOrder:()=>i,_default:()=>t,default:()=>n});var d=o("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),s=o("../../packages/videopress/src/client/admin/components/video-card/index.tsx"),a=o("../../packages/videopress/src/client/admin/mock/index.ts"),m=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`import { action } from '@storybook/addon-actions';
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
`,r={_default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}};const n={title:"Packages/VideoPress/Video Card",component:s.cB,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:60,line:20},endLoc:{col:1,line:25},startBody:{col:60,line:20},endBody:{col:1,line:25}}}},layout:"centered"},argTypes:{thumbnail:{control:{type:"select"},options:[...a.Pe,"none"]}}},e=y=>(y.thumbnail==="none"&&(y.thumbnail=null),(0,m.jsx)(s.cB,{...y}));e.displayName="Template";const t=e.bind({});t.args={title:"JPD Meetup - Barcelona",thumbnail:(0,a.u8)(),editable:!1,duration:(34*60+25)*1e3,plays:972,onVideoDetailsClick:(0,d.aD)("onVideoDetailsClick"),onUpdateVideoThumbnail:(0,d.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,d.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,d.aD)("onDeleteVideo"),showQuickActions:!0,loading:!1,uploading:!1,processing:!1},t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  if (args.thumbnail === 'none') {
    args.thumbnail = null;
  }
  return <VideoCardComponent {...args} />;
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const i=["_default"]}}]);})();
