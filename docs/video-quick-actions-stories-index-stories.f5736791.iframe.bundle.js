"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2623],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(b,p,a)=>{a.d(p,{aD:()=>E});var l="actions",s="storybook/actions",k=`${s}/panel`,g=`${s}/action-event`,O=`${s}/action-clear`,V="$___storybook.isCyclic",u=a("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),i=a("@storybook/preview-api"),m={depth:10,clearOnStoryChange:!0,limit:50},y=(e={})=>{Object.assign(m,e)},c=(e,t)=>{let o=Object.getPrototypeOf(e);return!o||t(o)?o:c(o,t)},_=e=>!!(typeof e=="object"&&e&&c(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),f=e=>{if(_(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let o=Object.getOwnPropertyDescriptor(t,"view"),n=o==null?void 0:o.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...o,value:Object.create(n.constructor.prototype)}),t}return e};function E(e,t={}){let o={...m,...t},n=function(...d){let r=i.addons.getChannel(),P=(0,u.Z)(),v=5,A=d.map(f),h=d.length>1?A:A[0],D={id:P,count:0,data:{name:e,args:h},options:{...o,maxDepth:v+(o.depth||3),allowFunction:o.allowFunction||!1}};r.emit(g,D)};return n.isAction=!0,n}var C=(...e)=>{let t=config,o=e;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(t={...config,...o.pop()});let n=o[0];(o.length!==1||typeof n=="string")&&(n={},o.forEach(r=>{n[r]=r}));let d={};return Object.keys(n).forEach(r=>{d[r]=action(n[r],t)}),d}},"../../packages/videopress/src/client/admin/components/video-quick-actions/stories/index.stories.tsx":(b,p,a)=>{var y,c,_;a.r(p),a.d(p,{__namedExportsOrder:()=>m,_default:()=>i,default:()=>V});var l=a("../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),s=a("../../packages/videopress/src/client/admin/components/video-quick-actions/index.tsx"),k=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),g=`import { action } from '@storybook/addon-actions';
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
`,O={_default:{startLoc:{col:59,line:11},endLoc:{col:1,line:13},startBody:{col:59,line:11},endBody:{col:1,line:13}}};const V={title:"Packages/VideoPress/Video Quick Actions",component:s.Z,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
};`,locationsMap:{default:{startLoc:{col:59,line:11},endLoc:{col:1,line:13},startBody:{col:59,line:11},endBody:{col:1,line:13}}}},layout:"centered"}},u=f=>(0,k.jsx)(s.Z,{...f});u.displayName="Template";const i=u.bind({});i.args={onUpdateVideoThumbnail:(0,l.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,l.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,l.aD)("onDeleteVideo")},i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <VideoQuickActions {...args} />;
}`,...(_=(c=i.parameters)==null?void 0:c.docs)==null?void 0:_.source}}};const m=["_default"]}}]);})();
