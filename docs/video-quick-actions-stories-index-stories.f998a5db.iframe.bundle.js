"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2623],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(_,d,e)=>{e.d(d,{aD:()=>s.aD});var s=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs"),i=(...l)=>{let c=config,o=l;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(c={...config,...o.pop()});let n=o[0];(o.length!==1||typeof n=="string")&&(n={},o.forEach(a=>{n[a]=a}));let t={};return Object.keys(n).forEach(a=>{t[a]=action(n[a],c)}),t},r=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../packages/videopress/src/client/admin/components/video-quick-actions/stories/index.stories.tsx":(_,d,e)=>{var m,p,u;e.r(d),e.d(d,{__namedExportsOrder:()=>a,_default:()=>t,default:()=>o});var s=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),i=e("../../packages/videopress/src/client/admin/components/video-quick-actions/index.tsx"),r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=`import { action } from '@storybook/addon-actions';
import VideoQuickActions from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Packages/VideoPress/Video Quick Actions',
	component: VideoQuickActions,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta< typeof VideoQuickActions >;

const Template: ComponentStory< typeof VideoQuickActions > = args => {
	return <VideoQuickActions { ...args } />;
};

export const _default = Template.bind( {} );
_default.args = {
	onUpdateVideoThumbnail: action( 'onUpdateVideoThumbnail' ),
	onUpdateVideoPrivacy: action( 'onUpdateVideoPrivacy' ),
	onDeleteVideo: action( 'onDeleteVideo' ),
};
`,c={_default:{startLoc:{col:59,line:11},endLoc:{col:1,line:13},startBody:{col:59,line:11},endBody:{col:1,line:13}}};const o={title:"Packages/VideoPress/Video Quick Actions",component:i.Z,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import VideoQuickActions from '..';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'Packages/VideoPress/Video Quick Actions',
  component: VideoQuickActions,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof VideoQuickActions>);
const Template: ComponentStory<typeof VideoQuickActions> = args => {
  return <VideoQuickActions {...args} />;
};
export const _default = Template.bind({});
_default.args = {
  onUpdateVideoThumbnail: action('onUpdateVideoThumbnail'),
  onUpdateVideoPrivacy: action('onUpdateVideoPrivacy'),
  onDeleteVideo: action('onDeleteVideo')
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => {\\n  return <VideoQuickActions {...args} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:59,line:11},endLoc:{col:1,line:13},startBody:{col:59,line:11},endBody:{col:1,line:13}}}},layout:"centered"}},n=y=>(0,r.jsx)(i.Z,{...y});n.displayName="Template";const t=n.bind({});t.args={onUpdateVideoThumbnail:(0,s.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,s.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,s.aD)("onDeleteVideo")},t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <VideoQuickActions {...args} />;
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const a=["_default"]}}]);})();
