(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9869,2471],{"../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx":(u,s,t)=>{var S,y,x,f,T,I,A,R,D,O,h,P,b,v,L,B,z,M;"use strict";t.r(s),t.d(s,{Done:()=>E,Error:()=>_,Init:()=>i,Requesting:()=>o,Suggesting:()=>e,__namedExportsOrder:()=>j,_default:()=>c,default:()=>l});var p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../ai-client/src/components/ai-status-indicator/index.tsx"),d=t("../ai-client/src/types.ts"),m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`/*
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
`,g={_default:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},Init:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},Requesting:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},Suggesting:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},Error:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},Done:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}}};const l={parameters:{storySource:{source:`/*
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
`,locationsMap:{default:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},init:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},requesting:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},suggesting:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},error:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}},done:{startLoc:{col:24,line:41},endLoc:{col:1,line:48},startBody:{col:24,line:41},endBody:{col:1,line:48}}}}},title:"JS Packages/AI Client/AiStatusIndicator",component:n.Z,argTypes:{state:{control:{type:"select"},options:d.mw},size:{control:{type:"select"},options:[24,32,48,64]},action:{table:{disable:!0}}}},r=C=>{const U={state:C.state,size:C.size};return(0,m.jsx)(n.Z,{...U})};r.displayName="DefaultTemplate";const c=r.bind({});c.args={state:"init",size:24};const i=r.bind({});i.args={state:"init",size:48};const o=r.bind({});o.args={state:"requesting",size:48};const e=r.bind({});e.args={state:"suggesting",size:48};const _=r.bind({});_.args={state:"error",size:48};const E=r.bind({});E.args={state:"done",size:48},c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}},i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}},o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(D=(R=o.parameters)==null?void 0:R.docs)==null?void 0:D.source}}},e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(P=(h=e.parameters)==null?void 0:h.docs)==null?void 0:P.source}}},_.parameters={..._.parameters,docs:{...(b=_.parameters)==null?void 0:b.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(L=(v=_.parameters)==null?void 0:v.docs)==null?void 0:L.source}}},E.parameters={...E.parameters,docs:{...(B=E.parameters)==null?void 0:B.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(M=(z=E.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const j=["_default","Init","Requesting","Suggesting","Error","Done"]},"../ai-client/src/components/ai-status-indicator/stories/index.mdx":(u,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),m=t.n(d),a=t("../../../node_modules/.pnpm/@storybook+blocks@7.6.5_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),g=t("../ai-client/src/components/ai-status-indicator/index.tsx"),l=t("../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx");function r(o){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3"},(0,d.useMDXComponents)(),o.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h_,{of:l}),`
`,(0,n.jsx)(e.h1,{id:"aistatusindicator",children:"AiStatusIndicator"}),`
`,(0,n.jsx)(e.h2,{id:"requesting-states",children:"Requesting states"}),`
`,(0,n.jsx)(e.h3,{id:"init",children:"Init"}),`
`,(0,n.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--init"}),`
`,(0,n.jsx)(e.h3,{id:"requesting",children:"Requesting"}),`
`,(0,n.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--requesting"}),`
`,(0,n.jsx)(e.h3,{id:"suggesting",children:"Suggesting"}),`
`,(0,n.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--suggesting"}),`
`,(0,n.jsx)(e.h3,{id:"done",children:"Done"}),`
`,(0,n.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--done"}),`
`,(0,n.jsx)(e.h3,{id:"error",children:"Error"}),`
`,(0,n.jsx)(a.oG,{id:"js-packages-ai-client-aistatusindicator--error"})]})}function c(o={}){const{wrapper:e}=Object.assign({},(0,d.useMDXComponents)(),o.components);return e?(0,n.jsx)(e,Object.assign({},o,{children:(0,n.jsx)(r,o)})):r(o)}const i=c},"../ai-client/src/components/ai-status-indicator/index.tsx":(u,s,t)=>{"use strict";t.d(s,{Z:()=>o});var p=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),n=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=t.n(n),m=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=t.n(m),g=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss"),l={};l.insert="head",l.singleton=!1;var r=a()(g.Z,l);const c=g.Z.locals||{};var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function o({state:e}){return(0,i.jsx)("div",{className:d()("jetpack-ai-status-indicator__icon-wrapper",{[`is-${e}`]:!0}),children:(0,i.jsx)(p.ZP,{})})}o.displayName="AiStatusIndicator";try{aistatusindicator.displayName="aistatusindicator",aistatusindicator.__docgenInfo={description:"AiStatusIndicator component.",displayName:"aistatusindicator",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'},{value:'"error"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"]={docgenInfo:aistatusindicator.__docgenInfo,name:"aistatusindicator",path:"../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"})}catch(e){}},"../ai-client/src/types.ts":(u,s,t)=>{"use strict";t.d(s,{mw:()=>_});const p="error_service_unavailable",n="error_quota_exceeded",d="error_moderation",m="error_context_too_large",a="error_network",g="error_unclear_prompt",l="error_response",_=["init","requesting","suggesting","done","error"],E="gpt-3.5-turbo-16k",j="gpt-4"},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss":(u,s,t)=>{"use strict";t.d(s,{Z:()=>g});var p=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(p),d=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),m=t.n(d),a=m()(n());a.push([u.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jetpack-ai-status-indicator__icon-wrapper{transition:opacity .25s ease-in-out,width .25s;width:0;opacity:0;align-self:baseline}.jetpack-ai-status-indicator__icon-wrapper>svg{height:24px;width:24px;margin:6px 0 0}.jetpack-ai-status-indicator__icon-wrapper.is-requesting,.jetpack-ai-status-indicator__icon-wrapper.is-suggesting{opacity:1;width:24px}',""]);const g=a},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":u=>{function s(t){var p=new Error("Cannot find module '"+t+"'");throw p.code="MODULE_NOT_FOUND",p}s.keys=()=>[],s.resolve=s,s.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",u.exports=s}}]);})();
