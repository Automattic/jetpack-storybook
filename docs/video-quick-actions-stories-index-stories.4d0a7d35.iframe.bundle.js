"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2623],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs":(D,u,i)=>{i.d(u,{aD:()=>k});var c=i("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),m=i("@storybook/preview-api"),y=i("@storybook/global"),V=i("../../../node_modules/.pnpm/@storybook+core-events@7.6.17/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),T="actions",d="storybook/actions",f=`${d}/panel`,r=`${d}/action-event`,b=`${d}/action-clear`,g="$___storybook.isCyclic",a={depth:10,clearOnStoryChange:!0,limit:50},O=(t={})=>{Object.assign(a,t)},_=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:_(o,e)},j=t=>!!(typeof t=="object"&&t&&_(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),C=t=>{if(j(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),n=o==null?void 0:o.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(n.constructor.prototype)}),e}return t},R=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,c.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function k(t,e={}){let o={...a,...e},n=function(...l){var v,E;if(e.implicit){let h=(v="__STORYBOOK_PREVIEW__"in y.global?y.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:v.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(h){let p=!((E=window==null?void 0:window.FEATURES)!=null&&E.disallowImplicitActionsInRenderV8),P=new V.is({phase:h.phase,name:t,deprecated:p});if(p)console.warn(P);else throw P}}let s=m.addons.getChannel(),U=R(),S=5,A=l.map(C),x=l.length>1?A:A[0],I={id:U,count:0,data:{name:t,args:x},options:{...o,maxDepth:S+(o.depth||3),allowFunction:o.allowFunction||!1}};s.emit(r,I)};return n.isAction=!0,n}var L=(...t)=>{let e=a,o=t;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(e={...a,...o.pop()});let n=o[0];(o.length!==1||typeof n=="string")&&(n={},o.forEach(s=>{n[s]=s}));let l={};return Object.keys(n).forEach(s=>{l[s]=k(n[s],e)}),l}},"../../packages/videopress/src/client/admin/components/video-quick-actions/stories/index.stories.tsx":(D,u,i)=>{var g,a,O;i.r(u),i.d(u,{__namedExportsOrder:()=>b,_default:()=>r,default:()=>d});var c=i("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),m=i("../../packages/videopress/src/client/admin/components/video-quick-actions/index.tsx"),y=i("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),V=`import { action } from '@storybook/addon-actions';
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
`,T={_default:{startLoc:{col:61,line:13},endLoc:{col:1,line:15},startBody:{col:61,line:13},endBody:{col:1,line:15}}};const d={title:"Packages/VideoPress/Video Quick Actions",component:m.Z,parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
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
`,locationsMap:{default:{startLoc:{col:61,line:13},endLoc:{col:1,line:15},startBody:{col:61,line:13},endBody:{col:1,line:15}}}},layout:"centered"}},f=_=>(0,y.jsx)(m.Z,{..._});f.displayName="Template";const r=f.bind({});r.args={onUpdateVideoThumbnail:(0,c.aD)("onUpdateVideoThumbnail"),onUpdateVideoPrivacy:(0,c.aD)("onUpdateVideoPrivacy"),onDeleteVideo:(0,c.aD)("onDeleteVideo")},r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <VideoQuickActions {...args} />;
}`,...(O=(a=r.parameters)==null?void 0:a.docs)==null?void 0:O.source}}};const b=["_default"]}}]);})();
