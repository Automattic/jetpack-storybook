"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1379],{"../components/components/zendesk-chat/stories/index.stories.tsx":(g,o,s)=>{var i,l,m;s.r(o),s.d(o,{__namedExportsOrder:()=>C,_default:()=>n,default:()=>h});var d=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const f="d729d42c-b547-4750-a6f6-8b30534a5f12";var c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const t=a=>{let{jwt_token:u}=a;const k=(0,d.useCallback)(()=>{typeof window!="undefined"&&typeof window.zE=="function"&&window.zE("messenger","loginUser",function(e){e(u)})},[u]);return(0,d.useEffect)(()=>{const e=document.createElement("script"),_=document.getElementById("zendesk-chat-container");e.src="https://static.zdassets.com/ekr/snippet.js?key="+encodeURIComponent(f),e.type="text/javascript",e.id="ze-snippet",e.onload=()=>{k()},_&&_.appendChild(e)},[k]),(0,c.jsx)("div",{"data-testid":"zendesk-chat-container",id:"zendesk-chat-container"})};t.displayName="ZendeskChat";const r=t;try{t.displayName="ZendeskChat",t.__docgenInfo={description:"",displayName:"ZendeskChat",props:{jwt_token:{defaultValue:null,description:"",name:"jwt_token",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/zendesk-chat/index.tsx#ZendeskChat"]={docgenInfo:t.__docgenInfo,name:"ZendeskChat",path:"../components/components/zendesk-chat/index.tsx#ZendeskChat"})}catch(a){}try{zendeskchat.displayName="zendeskchat",zendeskchat.__docgenInfo={description:"",displayName:"zendeskchat",props:{jwt_token:{defaultValue:null,description:"",name:"jwt_token",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/zendesk-chat/index.tsx#zendeskchat"]={docgenInfo:zendeskchat.__docgenInfo,name:"zendeskchat",path:"../components/components/zendesk-chat/index.tsx#zendeskchat"})}catch(a){}var y=`import ZendeskChat from '../index';

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
`,x={_default:{startLoc:{col:17,line:11},endLoc:{col:50,line:11},startBody:{col:17,line:11},endBody:{col:50,line:11}}};const h={title:"JS Packages/Components/Zendesk Chat",component:r,parameters:{storySource:{source:`import ZendeskChat from '../index';
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
};`,locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:50,line:11},startBody:{col:17,line:11},endBody:{col:50,line:11}}}},backgrounds:{default:"dark"}}},p=a=>(0,c.jsx)(r,{...a});p.displayName="Template";const n=p.bind({});n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"args => <ZendeskChat {...args} />",...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const C=["_default"]}}]);})();
