(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9869,2471,7946],{"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js":(g,p,e)=>{"use strict";e.d(p,{Z:()=>t});function t(){return t=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r])}return n},t.apply(this,arguments)}},"../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(g,p,e)=>{"use strict";var t;e.d(p,{L:()=>r,j:()=>i});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=function(a){return a()},c=(t||(t=e.t(n,2)))["useInsertionEffect"]?(t||(t=e.t(n,2)))["useInsertionEffect"]:!1,r=c||o,i=c||n.useLayoutEffect},"../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js":(g,p,e)=>{"use strict";e.r(p),e.d(p,{MDXContext:()=>n,MDXProvider:()=>i,useMDXComponents:()=>c,withMDXComponents:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const n=t.createContext({});function o(s){return a;function a(d){const l=c(d.components);return t.createElement(s,{...d,allComponents:l})}}function c(s){const a=t.useContext(n);return t.useMemo(()=>typeof s=="function"?s(a):{...a,...s},[a,s])}const r={};function i({components:s,children:a,disableParentContext:d}){let l;return d?l=typeof s=="function"?s({}):s||r:l=c(s),t.createElement(n.Provider,{value:l},a)}},"../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":(g,p,e)=>{"use strict";var t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,r=(d,l,m,u)=>{if(l&&typeof l=="object"||typeof l=="function")for(let E of o(l))!c.call(d,E)&&E!==m&&t(d,E,{get:()=>l[E],enumerable:!(u=n(l,E))||u.enumerable});return d},i=(d,l,m)=>(r(d,l,"default"),m&&r(m,l,"default")),s=d=>r(t({},"__esModule",{value:!0}),d),a={};g.exports=s(a),i(a,e("../../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/index.js"),g.exports)},"../ai-client/src/components/ai-status-indicator/stories/index.mdx":(g,p,e)=>{"use strict";e.r(p),e.d(p,{default:()=>l});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("../../../node_modules/.pnpm/@storybook+addon-docs@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),c=e.n(o),r=e("../../../node_modules/.pnpm/@storybook+blocks@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),i=e("../ai-client/src/components/ai-status-indicator/index.tsx"),s=e("../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx");function a(m){const u=Object.assign({h1:"h1",h2:"h2",h3:"h3"},(0,o.useMDXComponents)(),m.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h_,{of:s}),`
`,(0,n.jsx)(u.h1,{id:"aistatusindicator",children:"AiStatusIndicator"}),`
`,(0,n.jsx)(u.h2,{id:"requesting-states",children:"Requesting states"}),`
`,(0,n.jsx)(u.h3,{id:"init",children:"Init"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--init"}),`
`,(0,n.jsx)(u.h3,{id:"requesting",children:"Requesting"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--requesting"}),`
`,(0,n.jsx)(u.h3,{id:"suggesting",children:"Suggesting"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--suggesting"}),`
`,(0,n.jsx)(u.h3,{id:"done",children:"Done"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--done"}),`
`,(0,n.jsx)(u.h3,{id:"error",children:"Error"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--error"})]})}function d(m={}){const{wrapper:u}=Object.assign({},(0,o.useMDXComponents)(),m.components);return u?(0,n.jsx)(u,Object.assign({},m,{children:(0,n.jsx)(a,m)})):a(m)}const l=d},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js":(g,p,e)=>{"use strict";e.d(p,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function n({icon:c,className:r,size:i=20,style:s={},...a}){const d=["dashicon","dashicons","dashicons-"+c,r].filter(Boolean).join(" "),m={...i!=20?{fontSize:`${i}px`,width:`${i}px`,height:`${i}px`}:{},...s};return(0,t.createElement)("span",{className:d,style:m,...a})}const o=n},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js":(g,p,e)=>{"use strict";e.d(p,{Z:()=>r});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js");function c({icon:i=null,size:s=typeof i=="string"?20:24,...a}){if(typeof i=="string")return(0,t.createElement)(o.Z,{icon:i,size:s,...a});if((0,t.isValidElement)(i)&&o.Z===i.type)return(0,t.cloneElement)(i,{...a});if(typeof i=="function")return(0,t.createElement)(i,{size:s,...a});if(i&&(i.type==="svg"||i.type===n.Wj)){const d={...i.props,width:s,height:s,...a};return(0,t.createElement)(n.Wj,{...d})}return(0,t.isValidElement)(i)?(0,t.cloneElement)(i,{size:s,...a}):i}const r=c},"../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(g,p,e)=>{"use strict";e.d(p,{Cd:()=>c,G:()=>r,UL:()=>d,Wj:()=>j,mg:()=>a,y$:()=>s});var t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=e.n(t),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const c=_=>(0,o.createElement)("circle",_),r=_=>(0,o.createElement)("g",_),i=_=>createElement("line",_),s=_=>(0,o.createElement)("path",_),a=_=>(0,o.createElement)("polygon",_),d=_=>(0,o.createElement)("rect",_),l=_=>createElement("defs",_),m=_=>createElement("radialGradient",_),u=_=>createElement("linearGradient",_),E=_=>createElement("stop",_),j=({className:_,isPressed:f,...y})=>{const S={...y,className:n()(_,{"is-pressed":f})||void 0,"aria-hidden":!0,focusable:!1};return(0,o.createElement)("svg",{...S})}},"../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx":(g,p,e)=>{var f,y,S,x,I,A,h,v,P,T,D,R,C,L,O,b,M,w;"use strict";e.r(p),e.d(p,{Done:()=>j,Error:()=>E,Init:()=>l,Requesting:()=>m,Suggesting:()=>u,__namedExportsOrder:()=>_,_default:()=>d,default:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../ai-client/src/components/ai-status-indicator/index.tsx"),o=e("../ai-client/src/types.ts"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=`/*
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
		state: {
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
		state: args.state,
		size: args.size,
	};

	return <AiStatusIndicator { ...props } />;
};

export const _default = DefaultTemplate.bind( {} );
_default.args = {
	state: 'init',
	size: 24,
};

export const Init = DefaultTemplate.bind( {} );
Init.args = {
	state: 'init',
	size: 48,
};

export const Requesting = DefaultTemplate.bind( {} );
Requesting.args = {
	state: 'requesting',
	size: 48,
};

export const Suggesting = DefaultTemplate.bind( {} );
Suggesting.args = {
	state: 'suggesting',
	size: 48,
};

export const Error = DefaultTemplate.bind( {} );
Error.args = {
	state: 'error',
	size: 48,
};

export const Done = DefaultTemplate.bind( {} );
Done.args = {
	state: 'done',
	size: 48,
};
`,i={_default:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Init:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Requesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Suggesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Error:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Done:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}}};const s={parameters:{storySource:{source:`/*
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
    state: {
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
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
};
export const _default = DefaultTemplate.bind({});
_default.args = {
  state: 'init',
  size: 24
};
export const Init = DefaultTemplate.bind({});
Init.args = {
  state: 'init',
  size: 48
};
export const Requesting = DefaultTemplate.bind({});
Requesting.args = {
  state: 'requesting',
  size: 48
};
export const Suggesting = DefaultTemplate.bind({});
Suggesting.args = {
  state: 'suggesting',
  size: 48
};
export const Error = DefaultTemplate.bind({});
Error.args = {
  state: 'error',
  size: 48
};
export const Done = DefaultTemplate.bind({});
Done.args = {
  state: 'done',
  size: 48
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    state: args.state,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ..._default.parameters?.docs?.source
    }
  }
};
Init.parameters = {
  ...Init.parameters,
  docs: {
    ...Init.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    state: args.state,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Init.parameters?.docs?.source
    }
  }
};
Requesting.parameters = {
  ...Requesting.parameters,
  docs: {
    ...Requesting.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    state: args.state,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Requesting.parameters?.docs?.source
    }
  }
};
Suggesting.parameters = {
  ...Suggesting.parameters,
  docs: {
    ...Suggesting.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    state: args.state,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Suggesting.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    state: args.state,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
Done.parameters = {
  ...Done.parameters,
  docs: {
    ...Done.parameters?.docs,
    source: {
      originalSource: "(args: AiStatusIndicatoryStoryProps) => {\\n  const props: AiStatusIndicatorProps = {\\n    state: args.state,\\n    size: args.size\\n  };\\n  return <AiStatusIndicator {...props} />;\\n}",
      ...Done.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},init:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},requesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},suggesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},error:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},done:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}}}}},title:"JS Packages/AI Client/AiStatusIndicator",component:n.Z,argTypes:{state:{control:{type:"select"},options:o.mw},size:{control:{type:"select"},options:[24,32,48,64]},action:{table:{disable:!0}}}},a=B=>{const U={state:B.state,size:B.size};return(0,c.jsx)(n.Z,{...U})};a.displayName="DefaultTemplate";const d=a.bind({});d.args={state:"init",size:24};const l=a.bind({});l.args={state:"init",size:48};const m=a.bind({});m.args={state:"requesting",size:48};const u=a.bind({});u.args={state:"suggesting",size:48};const E=a.bind({});E.args={state:"error",size:48};const j=a.bind({});j.args={state:"done",size:48},d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}},l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(A=(I=l.parameters)==null?void 0:I.docs)==null?void 0:A.source}}},m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(P=(v=m.parameters)==null?void 0:v.docs)==null?void 0:P.source}}},u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}},E.parameters={...E.parameters,docs:{...(C=E.parameters)==null?void 0:C.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(O=(L=E.parameters)==null?void 0:L.docs)==null?void 0:O.source}}},j.parameters={...j.parameters,docs:{...(b=j.parameters)==null?void 0:b.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(w=(M=j.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};const _=["_default","Init","Requesting","Suggesting","Error","Done"]},"../ai-client/src/components/ai-status-indicator/index.tsx":(g,p,e)=>{"use strict";e.d(p,{Z:()=>u});var t=e("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),o=e.n(n),c=e("../ai-client/src/icons/index.ts"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(r),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss"),a={};a.insert="head",a.singleton=!1;var d=i()(s.Z,a);const l=s.Z.locals||{};var m=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function u(E){let{state:j,size:_=24}=E;return(0,m.jsx)("div",{className:o()("jetpack-ai-status-indicator__icon-wrapper",{[`is-${j}`]:!0}),children:(0,m.jsx)(t.Z,{icon:c.aiAssistantIcon,size:_})})}u.displayName="AiStatusIndicator";try{aistatusindicator.displayName="aistatusindicator",aistatusindicator.__docgenInfo={description:"AiStatusIndicator component.",displayName:"aistatusindicator",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"]={docgenInfo:aistatusindicator.__docgenInfo,name:"aistatusindicator",path:"../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"})}catch(E){}},"../ai-client/src/icons/index.ts":(g,p,e)=>{"use strict";e.r(p),e.d(p,{aiAssistantIcon:()=>r,origamiPlaneIcon:()=>s,speakToneIcon:()=>d});var t=e("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=(0,o.jsxs)(t.Wj,{viewBox:"0 0 32 32",width:"32",height:"32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"ai-assistant-icon",children:[(0,o.jsx)(t.y$,{className:"spark-first",d:"M9.33301 5.33325L10.4644 8.20188L13.333 9.33325L10.4644 10.4646L9.33301 13.3333L8.20164 10.4646L5.33301 9.33325L8.20164 8.20188L9.33301 5.33325Z"}),(0,o.jsx)(t.y$,{className:"spark-second",d:"M21.3333 5.33333L22.8418 9.15817L26.6667 10.6667L22.8418 12.1752L21.3333 16L19.8248 12.1752L16 10.6667L19.8248 9.15817L21.3333 5.33333Z"}),(0,o.jsx)(t.y$,{className:"spark-third",d:"M14.6667 13.3333L16.5523 18.1144L21.3333 20L16.5523 21.8856L14.6667 26.6667L12.781 21.8856L8 20L12.781 18.1144L14.6667 13.3333Z"})]}),s=(0,o.jsxs)(t.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/SVG",children:[(0,o.jsx)(t.y$,{d:"M13.5142 18.5098C14.1227 19.6569 14.5367 20.5899 14.5367 20.5899L18.7588 3.84402L4.05433 12.901C4.05433 12.901 5.10588 12.9894 6.41062 13.2114C7.97628 13.4777 9.90652 13.9362 10.8219 14.6646C11.7434 15.3979 12.7731 17.1127 13.5142 18.5098ZM14.0468 16.3975C13.8238 16.0255 13.5879 15.6537 13.3445 15.3013C12.8931 14.6478 12.3509 13.9643 11.7559 13.4909C11.1195 12.9844 10.2767 12.6409 9.51316 12.3968C9.11301 12.2689 8.69633 12.1567 8.28231 12.0585L16.4016 7.05758L14.0468 16.3975Z"}),(0,o.jsx)(t.y$,{d:"M18 5L11 14",stroke:"currentColor"})]}),d=(0,o.jsxs)(t.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)(t.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM16.75 21V19C16.75 17.4812 15.5188 16.25 14 16.25L6 16.25C4.48122 16.25 3.25 17.4812 3.25 19V21H4.75L4.75 19C4.75 18.3096 5.30964 17.75 6 17.75L14 17.75C14.6904 17.75 15.25 18.3096 15.25 19V21H16.75Z",fill:"currentColor"}),(0,o.jsx)(t.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M19.976 16.3599C21.2507 14.5642 22.0001 12.3695 22.0001 9.99969C22.0001 7.63128 21.2515 5.43769 19.9782 3.64258L18.754 4.50967C19.8537 6.05996 20.5001 7.95434 20.5001 9.99969C20.5001 12.0464 19.8528 13.9419 18.7519 15.4928L19.976 16.3599ZM17.3357 14.4897C18.2357 13.222 18.7648 11.6727 18.7648 9.99969C18.7648 8.32808 18.2365 6.77984 17.3379 5.51279L16.1137 6.37988C16.8387 7.4021 17.2648 8.65114 17.2648 9.99969C17.2648 11.3496 16.8378 12.5998 16.1116 13.6226L17.3357 14.4897Z",fill:"currentColor"})]})},"../ai-client/src/types.ts":(g,p,e)=>{"use strict";e.d(p,{mw:()=>u});const t="error_service_unavailable",n="error_quota_exceeded",o="error_moderation",c="error_network",r="error_unclear_prompt",i="error_response",u=["init","requesting","suggesting","done","error"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(g,p)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var n={}.hasOwnProperty,o="[native code]";function c(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var a=typeof s;if(a==="string"||a==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var d=c.apply(null,s);d&&r.push(d)}}else if(a==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)n.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}g.exports?(c.default=c,g.exports=c):(e=[],t=function(){return c}.apply(p,e),t!==void 0&&(g.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss":(g,p,e)=>{"use strict";e.d(p,{Z:()=>i});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(t),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),c=e.n(o),r=c()(n());r.push([g.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jetpack-ai-status-indicator__icon-wrapper{color:var(--jp-green-60);height:24px}.jetpack-ai-status-indicator__icon-wrapper.is-init{color:var(--jp-green-60)}.jetpack-ai-status-indicator__icon-wrapper.is-requesting{color:var(--jp-green-40);animation:fade 800ms linear infinite}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting{color:var(--jp-green-30)}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting .ai-assistant-icon>path{animation:fadingSpark 300ms ease-in-out alternate infinite}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting .ai-assistant-icon>path.spark-first{animation-delay:.2s}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting .ai-assistant-icon>path.spark-second{animation-delay:.6s}.jetpack-ai-status-indicator__icon-wrapper.is-done{color:var(--jp-green-40)}.jetpack-ai-status-indicator__icon-wrapper.is-error{color:var(--jp-yellow-30)}@keyframes fadingSpark{to{opacity:.3}}@keyframes fade{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}',""]);const i=r}}]);})();
