"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1379],{"../components/components/zendesk-chat/stories/index.stories.tsx":(C,o,s)=>{var i,l,m;s.r(o),s.d(o,{__namedExportsOrder:()=>h,_default:()=>a,default:()=>f});var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const _="d729d42c-b547-4750-a6f6-8b30534a5f12";var c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const n=({jwt_token:t})=>{const u=(0,d.useCallback)(()=>{typeof window!="undefined"&&typeof window.zE=="function"&&window.zE("messenger","loginUser",function(e){e(t)})},[t]);return(0,d.useEffect)(()=>{const e=document.createElement("script"),k=document.getElementById("zendesk-chat-container");e.src="https://static.zdassets.com/ekr/snippet.js?key="+encodeURIComponent(_),e.type="text/javascript",e.id="ze-snippet",e.onload=()=>{u()},k&&k.appendChild(e)},[u]),(0,c.jsx)("div",{"data-testid":"zendesk-chat-container",id:"zendesk-chat-container"})};n.displayName="ZendeskChat";const r=n;try{n.displayName="ZendeskChat",n.__docgenInfo={description:"",displayName:"ZendeskChat",props:{jwt_token:{defaultValue:null,description:"",name:"jwt_token",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/zendesk-chat/index.tsx#ZendeskChat"]={docgenInfo:n.__docgenInfo,name:"ZendeskChat",path:"../components/components/zendesk-chat/index.tsx#ZendeskChat"})}catch(t){}try{zendeskchat.displayName="zendeskchat",zendeskchat.__docgenInfo={description:"",displayName:"zendeskchat",props:{jwt_token:{defaultValue:null,description:"",name:"jwt_token",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/zendesk-chat/index.tsx#zendeskchat"]={docgenInfo:zendeskchat.__docgenInfo,name:"zendeskchat",path:"../components/components/zendesk-chat/index.tsx#zendeskchat"})}catch(t){}var g=`import ZendeskChat from '../index';

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
`,y={_default:{startLoc:{col:17,line:11},endLoc:{col:50,line:11},startBody:{col:17,line:11},endBody:{col:50,line:11}}};const f={title:"JS Packages/Components/Zendesk Chat",component:r,parameters:{storySource:{source:`import ZendeskChat from '../index';
export default {
  title: 'JS Packages/Components/Zendesk Chat',
  component: ZendeskChat,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};
const Template = args => <ZendeskChat {...args} />;
export const _default = Template.bind({});
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <ZendeskChat {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:50,line:11},startBody:{col:17,line:11},endBody:{col:50,line:11}}}},backgrounds:{default:"dark"}}},p=t=>(0,c.jsx)(r,{...t});p.displayName="Template";const a=p.bind({});a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"args => <ZendeskChat {...args} />",...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const h=["_default"]}}]);})();
