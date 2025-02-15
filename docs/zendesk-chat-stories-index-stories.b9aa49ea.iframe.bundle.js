"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3471],{"../components/components/zendesk-chat/stories/index.stories.tsx":(k,a,s)=>{s.r(a),s.d(a,{__namedExportsOrder:()=>u,_default:()=>n,default:()=>m});var d=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const l="d729d42c-b547-4750-a6f6-8b30534a5f12";var c=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=({jwt_token:t})=>{const i=(0,d.useCallback)(()=>{typeof window<"u"&&typeof window.zE=="function"&&window.zE("messenger","loginUser",function(e){e(t)})},[t]);return(0,d.useEffect)(()=>{const e=document.createElement("script"),p=document.getElementById("zendesk-chat-container");e.src="https://static.zdassets.com/ekr/snippet.js?key="+encodeURIComponent(l),e.type="text/javascript",e.id="ze-snippet",e.onload=()=>{i()},p&&p.appendChild(e)},[i]),(0,c.jsx)("div",{"data-testid":"zendesk-chat-container",id:"zendesk-chat-container"})},r=o;try{o.displayName="ZendeskChat",o.__docgenInfo={description:"",displayName:"ZendeskChat",props:{jwt_token:{defaultValue:null,description:"",name:"jwt_token",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/zendesk-chat/index.tsx#ZendeskChat"]={docgenInfo:o.__docgenInfo,name:"ZendeskChat",path:"../components/components/zendesk-chat/index.tsx#ZendeskChat"})}catch{}try{zendeskchat.displayName="zendeskchat",zendeskchat.__docgenInfo={description:"",displayName:"zendeskchat",props:{jwt_token:{defaultValue:null,description:"",name:"jwt_token",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/zendesk-chat/index.tsx#zendeskchat"]={docgenInfo:zendeskchat.__docgenInfo,name:"zendeskchat",path:"../components/components/zendesk-chat/index.tsx#zendeskchat"})}catch{}var _=`import ZendeskChat from '../index.js';

export default {
	title: 'JS Packages/Components/Zendesk Chat',
	component: ZendeskChat,
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
};

const Template = args => <ZendeskChat { ...args } />;

export const _default = Template.bind( {} );
`,h={_default:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}}};const m={title:"JS Packages/Components/Zendesk Chat",component:r,parameters:{storySource:{source:`import ZendeskChat from '../index.js';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Zendesk Chat',
  component: ZendeskChat,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};
const Template = args => /*#__PURE__*/_jsx(ZendeskChat, {
  ...args
});
export const _default = Template.bind({});`,locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:2,line:14},startBody:{col:17,line:12},endBody:{col:2,line:14}}}},backgrounds:{default:"dark"}}},n=(t=>(0,c.jsx)(r,{...t})).bind({}),u=["_default"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <ZendeskChat {...args} />",...n.parameters?.docs?.source}}}}}]);
