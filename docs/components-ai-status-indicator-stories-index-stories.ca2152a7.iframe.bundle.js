(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2471],{"../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js":(m,c,t)=>{"use strict";t.d(c,{Z:()=>n});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function p({icon:d,className:i,size:s=20,style:o={},...a}){const l=["dashicon","dashicons","dashicons-"+d,i].filter(Boolean).join(" "),_={...s!=20?{fontSize:`${s}px`,width:`${s}px`,height:`${s}px`}:{},...o};return(0,e.createElement)("span",{className:l,style:_,...a})}const n=p},"../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js":(m,c,t)=>{"use strict";t.d(c,{Z:()=>i});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=t("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dashicon/index.js");function d({icon:s=null,size:o=typeof s=="string"?20:24,...a}){if(typeof s=="string")return(0,e.createElement)(n.Z,{icon:s,size:o,...a});if((0,e.isValidElement)(s)&&n.Z===s.type)return(0,e.cloneElement)(s,{...a});if(typeof s=="function")return(0,e.createElement)(s,{size:o,...a});if(s&&(s.type==="svg"||s.type===p.Wj)){const l={...s.props,width:o,height:o,...a};return(0,e.createElement)(p.Wj,{...l})}return(0,e.isValidElement)(s)?(0,e.cloneElement)(s,{size:o,...a}):s}const i=d},"../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(m,c,t)=>{"use strict";t.d(c,{Cd:()=>d,G:()=>i,UL:()=>l,Wj:()=>E,mg:()=>a,y$:()=>o});var e=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=t.n(e),n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const d=r=>(0,n.createElement)("circle",r),i=r=>(0,n.createElement)("g",r),s=r=>createElement("line",r),o=r=>(0,n.createElement)("path",r),a=r=>(0,n.createElement)("polygon",r),l=r=>(0,n.createElement)("rect",r),u=r=>createElement("defs",r),_=r=>createElement("radialGradient",r),g=r=>createElement("linearGradient",r),S=r=>createElement("stop",r),E=({className:r,isPressed:I,...y})=>{const A={...y,className:p()(r,{"is-pressed":I})||void 0,"aria-hidden":!0,focusable:!1};return(0,n.createElement)("svg",{...A})}},"../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx":(m,c,t)=>{var I,y,A,f,T,R,L,j,v,P,D,x,C,O,h,z,B,M;"use strict";t.r(c),t.d(c,{Done:()=>E,Error:()=>S,Init:()=>u,Requesting:()=>_,Suggesting:()=>g,__namedExportsOrder:()=>r,_default:()=>l,default:()=>o});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=t("../ai-client/src/components/ai-status-indicator/index.tsx"),n=t("../ai-client/src/types.ts"),d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=`/*
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
`,s={_default:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Init:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Requesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Suggesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Error:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},Done:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}}};const o={parameters:{storySource:{source:`/*
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
};`,locationsMap:{default:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},init:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},requesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},suggesting:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},error:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}},done:{startLoc:{col:24,line:37},endLoc:{col:1,line:43},startBody:{col:24,line:37},endBody:{col:1,line:43}}}}},title:"JS Packages/AI Client/AiStatusIndicator",component:p.Z,argTypes:{state:{control:{type:"select"},options:n.mw},size:{control:{type:"select"},options:[24,32,48,64]},action:{table:{disable:!0}}}},a=w=>{const N={state:w.state,size:w.size};return(0,d.jsx)(p.Z,{...N})};a.displayName="DefaultTemplate";const l=a.bind({});l.args={state:"init",size:24};const u=a.bind({});u.args={state:"init",size:48};const _=a.bind({});_.args={state:"requesting",size:48};const g=a.bind({});g.args={state:"suggesting",size:48};const S=a.bind({});S.args={state:"error",size:48};const E=a.bind({});E.args={state:"done",size:48},l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source}}},u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(R=(T=u.parameters)==null?void 0:T.docs)==null?void 0:R.source}}},_.parameters={..._.parameters,docs:{...(L=_.parameters)==null?void 0:L.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(v=(j=_.parameters)==null?void 0:j.docs)==null?void 0:v.source}}},g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(x=(D=g.parameters)==null?void 0:D.docs)==null?void 0:x.source}}},S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(h=(O=S.parameters)==null?void 0:O.docs)==null?void 0:h.source}}},E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(M=(B=E.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const r=["_default","Init","Requesting","Suggesting","Error","Done"]},"../ai-client/src/components/ai-status-indicator/index.tsx":(m,c,t)=>{"use strict";t.d(c,{Z:()=>g});var e=t("../../../node_modules/.pnpm/@wordpress+components@25.4.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/icon/index.js"),p=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=t.n(p),d=t("../ai-client/src/icons/index.ts"),i=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(i),o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss"),a={};a.insert="head",a.singleton=!1;var l=s()(o.Z,a);const u=o.Z.locals||{};var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function g(S){let{state:E,size:r=24}=S;return(0,_.jsx)("div",{className:n()("jetpack-ai-status-indicator__icon-wrapper",{[`is-${E}`]:!0}),children:(0,_.jsx)(e.Z,{icon:d.aiAssistantIcon,size:r})})}g.displayName="AiStatusIndicator";try{aistatusindicator.displayName="aistatusindicator",aistatusindicator.__docgenInfo={description:"AiStatusIndicator component.",displayName:"aistatusindicator",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"]={docgenInfo:aistatusindicator.__docgenInfo,name:"aistatusindicator",path:"../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"})}catch(S){}},"../ai-client/src/icons/index.ts":(m,c,t)=>{"use strict";t.r(c),t.d(c,{aiAssistantIcon:()=>i,origamiPlaneIcon:()=>o,speakToneIcon:()=>l});var e=t("../../../node_modules/.pnpm/@wordpress+primitives@3.36.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=(0,n.jsxs)(e.Wj,{viewBox:"0 0 32 32",width:"32",height:"32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"ai-assistant-icon",children:[(0,n.jsx)(e.y$,{className:"spark-first",d:"M9.33301 5.33325L10.4644 8.20188L13.333 9.33325L10.4644 10.4646L9.33301 13.3333L8.20164 10.4646L5.33301 9.33325L8.20164 8.20188L9.33301 5.33325Z"}),(0,n.jsx)(e.y$,{className:"spark-second",d:"M21.3333 5.33333L22.8418 9.15817L26.6667 10.6667L22.8418 12.1752L21.3333 16L19.8248 12.1752L16 10.6667L19.8248 9.15817L21.3333 5.33333Z"}),(0,n.jsx)(e.y$,{className:"spark-third",d:"M14.6667 13.3333L16.5523 18.1144L21.3333 20L16.5523 21.8856L14.6667 26.6667L12.781 21.8856L8 20L12.781 18.1144L14.6667 13.3333Z"})]}),o=(0,n.jsxs)(e.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/SVG",children:[(0,n.jsx)(e.y$,{d:"M13.5142 18.5098C14.1227 19.6569 14.5367 20.5899 14.5367 20.5899L18.7588 3.84402L4.05433 12.901C4.05433 12.901 5.10588 12.9894 6.41062 13.2114C7.97628 13.4777 9.90652 13.9362 10.8219 14.6646C11.7434 15.3979 12.7731 17.1127 13.5142 18.5098ZM14.0468 16.3975C13.8238 16.0255 13.5879 15.6537 13.3445 15.3013C12.8931 14.6478 12.3509 13.9643 11.7559 13.4909C11.1195 12.9844 10.2767 12.6409 9.51316 12.3968C9.11301 12.2689 8.69633 12.1567 8.28231 12.0585L16.4016 7.05758L14.0468 16.3975Z"}),(0,n.jsx)(e.y$,{d:"M18 5L11 14",stroke:"currentColor"})]}),l=(0,n.jsxs)(e.Wj,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)(e.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10ZM14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10ZM16.75 21V19C16.75 17.4812 15.5188 16.25 14 16.25L6 16.25C4.48122 16.25 3.25 17.4812 3.25 19V21H4.75L4.75 19C4.75 18.3096 5.30964 17.75 6 17.75L14 17.75C14.6904 17.75 15.25 18.3096 15.25 19V21H16.75Z",fill:"currentColor"}),(0,n.jsx)(e.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"M19.976 16.3599C21.2507 14.5642 22.0001 12.3695 22.0001 9.99969C22.0001 7.63128 21.2515 5.43769 19.9782 3.64258L18.754 4.50967C19.8537 6.05996 20.5001 7.95434 20.5001 9.99969C20.5001 12.0464 19.8528 13.9419 18.7519 15.4928L19.976 16.3599ZM17.3357 14.4897C18.2357 13.222 18.7648 11.6727 18.7648 9.99969C18.7648 8.32808 18.2365 6.77984 17.3379 5.51279L16.1137 6.37988C16.8387 7.4021 17.2648 8.65114 17.2648 9.99969C17.2648 11.3496 16.8378 12.5998 16.1116 13.6226L17.3357 14.4897Z",fill:"currentColor"})]})},"../ai-client/src/types.ts":(m,c,t)=>{"use strict";t.d(c,{mw:()=>g});const e="error_service_unavailable",p="error_quota_exceeded",n="error_moderation",d="error_network",i="error_unclear_prompt",s="error_response",g=["init","requesting","suggesting","done","error"]},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(m,c)=>{var t,e;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty,n="[native code]";function d(){for(var i=[],s=0;s<arguments.length;s++){var o=arguments[s];if(o){var a=typeof o;if(a==="string"||a==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var l=d.apply(null,o);l&&i.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){i.push(o.toString());continue}for(var u in o)p.call(o,u)&&o[u]&&i.push(u)}}}return i.join(" ")}m.exports?(d.default=d,m.exports=d):(t=[],e=function(){return d}.apply(c,t),e!==void 0&&(m.exports=e))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss":(m,c,t)=>{"use strict";t.d(c,{Z:()=>s});var e=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=t.n(e),n=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(n),i=d()(p());i.push([m.id,".jetpack-ai-status-indicator__icon-wrapper{color:var(--jp-green-60);height:24px}.jetpack-ai-status-indicator__icon-wrapper.is-init{color:var(--jp-green-60)}.jetpack-ai-status-indicator__icon-wrapper.is-requesting{color:var(--jp-green-40);animation:fade 800ms linear infinite}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting{color:var(--jp-green-30)}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting .ai-assistant-icon>path{animation:fadingSpark 300ms ease-in-out alternate infinite}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting .ai-assistant-icon>path.spark-first{animation-delay:.2s}.jetpack-ai-status-indicator__icon-wrapper.is-suggesting .ai-assistant-icon>path.spark-second{animation-delay:.6s}.jetpack-ai-status-indicator__icon-wrapper.is-done{color:var(--jp-green-40)}.jetpack-ai-status-indicator__icon-wrapper.is-error{color:var(--jp-yellow-30)}@keyframes fadingSpark{to{opacity:.3}}@keyframes fade{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}",""]);const s=i}}]);})();
