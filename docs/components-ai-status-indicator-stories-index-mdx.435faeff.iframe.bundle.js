(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9869,2471,7946],{"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js":(g,u,e)=>{"use strict";e.d(u,{Z:()=>t});function t(){return t=Object.assign?Object.assign.bind():function(s){for(var o=1;o<arguments.length;o++){var d=arguments[o];for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&(s[a]=d[a])}return s},t.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(g,u,e)=>{"use strict";var t;e.d(u,{L:()=>a,j:()=>i});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(r){return r()},d=(t||(t=e.t(s,2)))["useInsertionEffect"]?(t||(t=e.t(s,2)))["useInsertionEffect"]:!1,a=d||o,i=d||s.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(g,u,e)=>{"use strict";e.r(u),e.d(u,{MDXContext:()=>s,MDXProvider:()=>i,useMDXComponents:()=>d,withMDXComponents:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=t.createContext({});function o(n){return r;function r(c){const l=d(c.components);return t.createElement(n,{...c,allComponents:l})}}function d(n){const r=t.useContext(s);return t.useMemo(()=>typeof n=="function"?n(r):{...r,...n},[r,n])}const a={};function i({components:n,children:r,disableParentContext:c}){let l;return c?l=typeof n=="function"?n({}):n||a:l=d(n),t.createElement(s.Provider,{value:l},r)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(g,u,e)=>{"use strict";var t=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,a=(c,l,_,p)=>{if(l&&typeof l=="object"||typeof l=="function")for(let S of o(l))!d.call(c,S)&&S!==_&&t(c,S,{get:()=>l[S],enumerable:!(p=s(l,S))||p.enumerable});return c},i=(c,l,_)=>(a(c,l,"default"),_&&a(_,l,"default")),n=c=>a(t({},"__esModule",{value:!0}),c),r={};g.exports=n(r),i(r,e("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),g.exports)},"../ai-client/src/components/ai-status-indicator/stories/index.mdx":(g,u,e)=>{"use strict";e.r(u),e.d(u,{default:()=>l});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),d=e.n(o),a=e("../../../node_modules/.pnpm/@storybook+blocks@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),i=e("../ai-client/src/components/ai-status-indicator/index.tsx"),n=e("../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx");function r(_){const p=Object.assign({h1:"h1",h2:"h2",h3:"h3"},(0,o.useMDXComponents)(),_.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h_,{of:n}),`
`,(0,s.jsx)(p.h1,{id:"aistatusindicator",children:"AiStatusIndicator"}),`
`,(0,s.jsx)(p.h2,{id:"requesting-states",children:"Requesting states"}),`
`,(0,s.jsx)(p.h3,{id:"init",children:"Init"}),`
`,(0,s.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--init"}),`
`,(0,s.jsx)(p.h3,{id:"requesting",children:"Requesting"}),`
`,(0,s.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--requesting"}),`
`,(0,s.jsx)(p.h3,{id:"suggesting",children:"Suggesting"}),`
`,(0,s.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--suggesting"}),`
`,(0,s.jsx)(p.h3,{id:"done",children:"Done"}),`
`,(0,s.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--done"}),`
`,(0,s.jsx)(p.h3,{id:"error",children:"Error"}),`
`,(0,s.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--error"})]})}function c(_={}){const{wrapper:p}=Object.assign({},(0,o.useMDXComponents)(),_.components);return p?(0,s.jsx)(p,Object.assign({},_,{children:(0,s.jsx)(r,_)})):r(_)}const l=c},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js":(g,u,e)=>{"use strict";e.d(u,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s({icon:d,className:a,size:i=20,style:n={},...r}){const c=["dashicon","dashicons","dashicons-"+d,a].filter(Boolean).join(" "),_={...i!=20?{fontSize:`${i}px`,width:`${i}px`,height:`${i}px`}:{},...n};return(0,t.createElement)("span",{className:c,style:_,...r})}const o=s},"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js":(g,u,e)=>{"use strict";e.d(u,{Z:()=>a});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js");function d({icon:i=null,size:n=typeof i=="string"?20:24,...r}){if(typeof i=="string")return(0,t.createElement)(o.Z,{icon:i,size:n,...r});if((0,t.isValidElement)(i)&&o.Z===i.type)return(0,t.cloneElement)(i,{...r});if(typeof i=="function")return(0,t.createElement)(i,{size:n,...r});if(i&&(i.type==="svg"||i.type===s.Wj)){const c={...i.props,width:n,height:n,...r};return(0,t.createElement)(s.Wj,{...c})}return(0,t.isValidElement)(i)?(0,t.cloneElement)(i,{size:n,...r}):i}const a=d},"../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(g,u,e)=>{"use strict";e.d(u,{Cd:()=>d,G:()=>a,UL:()=>c,Wj:()=>E,mg:()=>r,y$:()=>n});var t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=e.n(t),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const d=m=>(0,o.createElement)("circle",m),a=m=>(0,o.createElement)("g",m),i=m=>createElement("line",m),n=m=>(0,o.createElement)("path",m),r=m=>(0,o.createElement)("polygon",m),c=m=>(0,o.createElement)("rect",m),l=m=>createElement("defs",m),_=m=>createElement("radialGradient",m),p=m=>createElement("linearGradient",m),S=m=>createElement("stop",m),E=({className:m,isPressed:y,...f})=>{const I={...f,className:s()(m,{"is-pressed":y})||void 0,"aria-hidden":!0,focusable:!1};return(0,o.createElement)("svg",{...I})}},"../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx":(g,u,e)=>{var y,f,I,j,A,x,P,T,v,D,R,L,h,O,C,M,b,B;"use strict";e.r(u),e.d(u,{Done:()=>E,Error:()=>S,Init:()=>l,Requesting:()=>_,Suggesting:()=>p,__namedExportsOrder:()=>m,_default:()=>c,default:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../ai-client/src/components/ai-status-indicator/index.tsx"),o=e("../ai-client/src/types.ts"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`/*
 * External Dependencies
 */
import React from 'react';
/*
 * Internal Dependencies
 */
import AiStatusIndicator, { AiStatusIndicatorProps } from '..';
import { REQUESTING_STATES } from '../../../types';

type AiStatusIndicatoryStoryProps = AiStatusIndicatorProps & {
	icon: string;
	children?: React.ReactNode;
};

export default {
	title: 'JS Packages/AI Client/AiStatusIndicator',
	component: AiStatusIndicator,
	argTypes: {
		requestingState: {
			control: {
				type: 'select',
			},
			options: REQUESTING_STATES,
		},
		size: {
			control: {
				type: 'select',
			},
			options: [ 24, 32, 48, 64 ],
		},

		action: {
			table: {
				disable: true,
			},
		},
	},
};

const DefaultTemplate = ( args: AiStatusIndicatoryStoryProps ) => {
	const props: AiStatusIndicatorProps = {
		requestingState: args.requestingState,
		size: args.size,
	};

	return <AiStatusIndicator { ...props } />;
};

export const _default = DefaultTemplate.bind( {} );
_default.args = {
	requestingState: 'init',
	size: 24,
};

export const Init = DefaultTemplate.bind( {} );
Init.args = {
	requestingState: 'init',
	size: 48,
};

export const Requesting = DefaultTemplate.bind( {} );
Requesting.args = {
	requestingState: 'requesting',
	size: 48,
};

export const Suggesting = DefaultTemplate.bind( {} );
Suggesting.args = {
	requestingState: 'suggesting',
	size: 48,
};

export const Error = DefaultTemplate.bind( {} );
Error.args = {
	requestingState: 'error',
	size: 48,
};

export const Done = DefaultTemplate.bind( {} );
Done.args = {
	requestingState: 'done',
	size: 48,
};
`,i={_default:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Init:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Requesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Suggesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Error:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Done:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}}};const n={parameters:{storySource:{source:`/*
 * External Dependencies
 */
import React from 'react';
/*
 * Internal Dependencies
 */
import AiStatusIndicator, { AiStatusIndicatorProps } from '..';
import { REQUESTING_STATES } from '../../../types';
type AiStatusIndicatoryStoryProps = AiStatusIndicatorProps & {
  icon: string;
  children?: React.ReactNode;
};
export default {
  title: 'JS Packages/AI Client/AiStatusIndicator',
  component: AiStatusIndicator,
  argTypes: {
    requestingState: {
      control: {
        type: 'select'
      },
      options: REQUESTING_STATES
    },
    size: {
      control: {
        type: 'select'
      },
      options: [24, 32, 48, 64]
    },
    action: {
      table: {
        disable: true
      }
    }
  }
};
const DefaultTemplate = (args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    requestingState: args.requestingState,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
};
export const _default = DefaultTemplate.bind({});
_default.args = {
  requestingState: 'init',
  size: 24
};
export const Init = DefaultTemplate.bind({});
Init.args = {
  requestingState: 'init',
  size: 48
};
export const Requesting = DefaultTemplate.bind({});
Requesting.args = {
  requestingState: 'requesting',
  size: 48
};
export const Suggesting = DefaultTemplate.bind({});
Suggesting.args = {
  requestingState: 'suggesting',
  size: 48
};
export const Error = DefaultTemplate.bind({});
Error.args = {
  requestingState: 'error',
  size: 48
};
export const Done = DefaultTemplate.bind({});
Done.args = {
  requestingState: 'done',
  size: 48
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    requestingState: args.requestingState,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};
Init.parameters = {
  ...Init.parameters,
  docs: {
    ...Init.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    requestingState: args.requestingState,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Init.parameters?.docs?.source
    }
  }
};
Requesting.parameters = {
  ...Requesting.parameters,
  docs: {
    ...Requesting.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    requestingState: args.requestingState,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Requesting.parameters?.docs?.source
    }
  }
};
Suggesting.parameters = {
  ...Suggesting.parameters,
  docs: {
    ...Suggesting.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    requestingState: args.requestingState,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Suggesting.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    requestingState: args.requestingState,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
Done.parameters = {
  ...Done.parameters,
  docs: {
    ...Done.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    requestingState: args.requestingState,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Done.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},init:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},requesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},suggesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},error:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},done:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}}}}},title:"JS Packages/AI Client/AiStatusIndicator",component:s.Z,argTypes:{requestingState:{control:{type:"select"},options:o.mw},size:{control:{type:"select"},options:[24,32,48,64]},action:{table:{disable:!0}}}},r=w=>{const U={requestingState:w.requestingState,size:w.size};return(0,d.jsx)(s.Z,{...U})};r.displayName="DefaultTemplate";const c=r.bind({});c.args={requestingState:"init",size:24};const l=r.bind({});l.args={requestingState:"init",size:48};const _=r.bind({});_.args={requestingState:"requesting",size:48};const p=r.bind({});p.args={requestingState:"suggesting",size:48};const S=r.bind({});S.args={requestingState:"error",size:48};const E=r.bind({});E.args={requestingState:"done",size:48},c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    requestingState: args.requestingState,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(I=(f=c.parameters)==null?void 0:f.docs)==null?void 0:I.source}}},l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    requestingState: args.requestingState,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(x=(A=l.parameters)==null?void 0:A.docs)==null?void 0:x.source}}},_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    requestingState: args.requestingState,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(v=(T=_.parameters)==null?void 0:T.docs)==null?void 0:v.source}}},p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    requestingState: args.requestingState,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(L=(R=p.parameters)==null?void 0:R.docs)==null?void 0:L.source}}},S.parameters={...S.parameters,docs:{...(h=S.parameters)==null?void 0:h.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    requestingState: args.requestingState,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(C=(O=S.parameters)==null?void 0:O.docs)==null?void 0:C.source}}},E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    requestingState: args.requestingState,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(B=(b=E.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const m=["_default","Init","Requesting","Suggesting","Error","Done"]},"../ai-client/src/components/ai-status-indicator/index.tsx":(g,u,e)=>{"use strict";e.d(u,{Z:()=>p});var t=e("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),o=e.n(s),d=e("../ai-client/src/icons/index.ts"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(a),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss"),r={};r.insert="head",r.singleton=!1;var c=i()(n.Z,r);const l=n.Z.locals||{};var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function p(S){let{requestingState:E,size:m=24}=S;return(0,_.jsx)("div",{className:o()("jetpack-ai-status-indicator__icon-wrapper",{[`is-${E}`]:!0}),children:(0,_.jsx)(t.Z,{icon:d.aiAssistantIcon,size:m})})}p.displayName="AiStatusIndicator";try{aistatusindicator.displayName="aistatusindicator",aistatusindicator.__docgenInfo={description:"AiStatusIndicator component.",displayName:"aistatusindicator",props:{requestingState:{defaultValue:null,description:"",name:"requestingState",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"]={docgenInfo:aistatusindicator.__docgenInfo,name:"aistatusindicator",path:"../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"})}catch(S){}},"../ai-client/src/icons/index.ts":(g,u,e)=>{"use strict";e.r(u),e.d(u,{aiAssistantIcon:()=>a,origamiPlaneIcon:()=>n,speakToneIcon:()=>c});var t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a=(0,o.jsxs)(t.Wj,{viewBox:"0 0 32 32",width:"32",height:"32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"ai-assistant-icon",children:[(0,o.jsx)(t.y$,{className:"spark-first",d:"M9.33301 5.33325L10.4644 8.20188L13.333 9.33325L10.4644 10.4646L9.33301 13.3333L8.20164 10.4646L5.33301 9.33325L8.20164 8.20188L9.33301 5.33325Z"}),(0,o.jsx)(t.y$,{className:"spark-second",d:"M21.3333 5.33333L22.8418 9.15817L26.6667 10.6667L22.8418 12.1752L21.3333 16L19.8248 12.1752L16 10.6667L19.8248 9.15817L21.3333 5.33333Z"}),(0,o.jsx)(t.y$,{className:"spark-third",d:"M14.6667 13.3333L16.5523 18.1144L21.3333 20L16.5523 21.8856L14.6667 26.6667L12.781 21.8856L8 20L12.781 18.1144L14.6667 13.3333Z"})]}),n=(0,o.jsxs)(t.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/SVG",children:[(0,o.jsx)(t.y$,{d:"M13.5142 18.5098C14.1227 19.6569 14.5367 20.5899 14.5367 20.5899L18.7588 3.84402L4.05433 12.901C4.05433 12.901 5.10588 12.9894 6.41062 13.2114C7.97628 13.4777 9.90652 13.9362 10.8219 14.6646C11.7434 15.3979 12.7731 17.1127 13.5142 18.5098ZM14.0468 16.3975C13.8238 16.0255 13.5879 15.6537 13.3445 15.3013C12.8931 14.6478 12.3509 13.9643 11.7559 13.4909C11.1195 12.9844 10.2767 12.6409 9.51316 12.3968C9.11301 12.2689 8.69633 12.1567 8.28231 12.0585L16.4016 7.05758L14.0468 16.3975Z"}),(0,o.jsx)(t.y$,{d:"M18 5L11 14",stroke:"currentColor"})]}),c=(0,o.jsxs)(t.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)(t.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM16.75 21V19C16.75 17.4812 15.5188 16.25 14 16.25L6 16.25C4.48122 16.25 3.25 17.4812 3.25 19V21H4.75L4.75 19C4.75 18.3096 5.30964 17.75 6 17.75L14 17.75C14.6904 17.75 15.25 18.3096 15.25 19V21H16.75Z",fill:"currentColor"}),(0,o.jsx)(t.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M19.976 16.3599C21.2507 14.5642 22.0001 12.3695 22.0001 9.99969C22.0001 7.63128 21.2515 5.43769 19.9782 3.64258L18.754 4.50967C19.8537 6.05996 20.5001 7.95434 20.5001 9.99969C20.5001 12.0464 19.8528 13.9419 18.7519 15.4928L19.976 16.3599ZM17.3357 14.4897C18.2357 13.222 18.7648 11.6727 18.7648 9.99969C18.7648 8.32808 18.2365 6.77984 17.3379 5.51279L16.1137 6.37988C16.8387 7.4021 17.2648 8.65114 17.2648 9.99969C17.2648 11.3496 16.8378 12.5998 16.1116 13.6226L17.3357 14.4897Z",fill:"currentColor"})]})},"../ai-client/src/types.ts":(g,u,e)=>{"use strict";e.d(u,{mw:()=>p});const t="error_service_unavailable",s="error_quota_exceeded",o="error_moderation",d="error_network",a="error_unclear_prompt",i="error_response",p=["init","requesting","suggesting","done","error"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(g,u)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var s={}.hasOwnProperty,o="[native code]";function d(){for(var a=[],i=0;i<arguments.length;i++){var n=arguments[i];if(n){var r=typeof n;if(r==="string"||r==="number")a.push(n);else if(Array.isArray(n)){if(n.length){var c=d.apply(null,n);c&&a.push(c)}}else if(r==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){a.push(n.toString());continue}for(var l in n)s.call(n,l)&&n[l]&&a.push(l)}}}return a.join(" ")}g.exports?(d.default=d,g.exports=d):(e=[],t=function(){return d}.apply(u,e),t!==void 0&&(g.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss":(g,u,e)=>{"use strict";e.d(u,{Z:()=>i});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(o),a=d()(s());a.push([g.id,".jetpack-ai-status-indicator__icon-wrapper{color:var(--jp-green-60);height:24px}.jetpack-ai-status-indicator__icon-wrapper.is-init{color:var(--jp-green-60)}.jetpack-ai-status-indicator__icon-wrapper.is-requesting{color:var(--jp-green-40);animation:fade 800ms linear infinite}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting{color:var(--jp-green-30)}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting .ai-assistant-icon>path{animation:fadingSpark 300ms ease-in-out alternate infinite}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting .ai-assistant-icon>path.spark-first{animation-delay:.2s}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting .ai-assistant-icon>path.spark-second{animation-delay:.6s}.jetpack-ai-status-indicator__icon-wrapper.is-done{color:var(--jp-green-40)}.jetpack-ai-status-indicator__icon-wrapper.is-error{color:var(--jp-yellow-30)}@keyframes fadingSpark{to{opacity:.3}}@keyframes fade{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}",""]);const i=a}}]);})();
