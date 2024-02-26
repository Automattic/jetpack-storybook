(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9869,2471],{"../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx":(m,o,t)=>{var j,y,x,f,S,E,I,A,h,D,P,b,v,O,T,L,z,B;"use strict";t.r(o),t.d(o,{Done:()=>_,Error:()=>e,Init:()=>l,Requesting:()=>i,Suggesting:()=>s,__namedExportsOrder:()=>R,_default:()=>d,default:()=>u});var p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../ai-client/src/components/ai-status-indicator/index.tsx"),c=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),g=`/*
 * External Dependencies
 */
import React from 'react';
/*
 * Internal Dependencies
 */
import AiStatusIndicator, { AiStatusIndicatorProps } from '../index.js';

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
			options: [ 'init', 'requesting', 'suggesting', 'done', 'error' ],
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
`,r={_default:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},Init:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},Requesting:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},Suggesting:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},Error:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},Done:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}}};const u={parameters:{storySource:{source:`/*
 * External Dependencies
 */
import React from 'react';
/*
 * Internal Dependencies
 */
import AiStatusIndicator, { AiStatusIndicatorProps } from '../index.js';

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
			options: [ 'init', 'requesting', 'suggesting', 'done', 'error' ],
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
`,locationsMap:{default:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},init:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},requesting:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},suggesting:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},error:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}},done:{startLoc:{col:24,line:40},endLoc:{col:1,line:47},startBody:{col:24,line:40},endBody:{col:1,line:47}}}}},title:"JS Packages/AI Client/AiStatusIndicator",component:n.Z,argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},size:{control:{type:"select"},options:[24,32,48,64]},action:{table:{disable:!0}}}},a=k=>{const M={state:k.state,size:k.size};return(0,c.jsx)(n.Z,{...M})};a.displayName="DefaultTemplate";const d=a.bind({});d.args={state:"init",size:24};const l=a.bind({});l.args={state:"init",size:48};const i=a.bind({});i.args={state:"requesting",size:48};const s=a.bind({});s.args={state:"suggesting",size:48};const e=a.bind({});e.args={state:"error",size:48};const _=a.bind({});_.args={state:"done",size:48},d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}},l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}},i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(h=(A=i.parameters)==null?void 0:A.docs)==null?void 0:h.source}}},s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(b=(P=s.parameters)==null?void 0:P.docs)==null?void 0:b.source}}},e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(T=(O=e.parameters)==null?void 0:O.docs)==null?void 0:T.source}}},_.parameters={..._.parameters,docs:{...(L=_.parameters)==null?void 0:L.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...(B=(z=_.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const R=["_default","Init","Requesting","Suggesting","Error","Done"]},"../ai-client/src/components/ai-status-indicator/stories/index.mdx":(m,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>i});var p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=t("../../../node_modules/.pnpm/@storybook+addon-docs@7.6.17_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),g=t.n(c),r=t("../../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),u=t("../ai-client/src/components/ai-status-indicator/index.tsx"),a=t("../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx");function d(s){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3"},(0,c.useMDXComponents)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h_,{of:a}),`
`,(0,n.jsx)(e.h1,{id:"aistatusindicator",children:"AiStatusIndicator"}),`
`,(0,n.jsx)(e.h2,{id:"requesting-states",children:"Requesting states"}),`
`,(0,n.jsx)(e.h3,{id:"init",children:"Init"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--init"}),`
`,(0,n.jsx)(e.h3,{id:"requesting",children:"Requesting"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--requesting"}),`
`,(0,n.jsx)(e.h3,{id:"suggesting",children:"Suggesting"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--suggesting"}),`
`,(0,n.jsx)(e.h3,{id:"done",children:"Done"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--done"}),`
`,(0,n.jsx)(e.h3,{id:"error",children:"Error"}),`
`,(0,n.jsx)(r.oG,{id:"js-packages-ai-client-aistatusindicator--error"})]})}function l(s={}){const{wrapper:e}=Object.assign({},(0,c.useMDXComponents)(),s.components);return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(d,s)})):d(s)}const i=l},"../ai-client/src/components/ai-status-indicator/index.tsx":(m,o,t)=>{"use strict";t.d(o,{Z:()=>s});var p=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),n=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=t.n(n),g=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(g),u=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss"),a={};a.insert="head",a.singleton=!1;var d=r()(u.Z,a);const l=u.Z.locals||{};var i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function s({state:e}){return(0,i.jsx)("div",{className:c()("jetpack-ai-status-indicator__icon-wrapper",{[`is-${e}`]:!0}),children:(0,i.jsx)(p.ZP,{})})}s.displayName="AiStatusIndicator";try{aistatusindicator.displayName="aistatusindicator",aistatusindicator.__docgenInfo={description:"AiStatusIndicator component.",displayName:"aistatusindicator",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"]={docgenInfo:aistatusindicator.__docgenInfo,name:"aistatusindicator",path:"../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"})}catch(e){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss":(m,o,t)=>{"use strict";t.d(o,{Z:()=>u});var p=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(p),c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),g=t.n(c),r=g()(n());r.push([m.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jetpack-ai-status-indicator__icon-wrapper{transition:opacity .25s ease-in-out,width .25s;width:0;opacity:0;align-self:baseline}.jetpack-ai-status-indicator__icon-wrapper>svg{height:24px;width:24px;margin:6px 0 0}.jetpack-ai-status-indicator__icon-wrapper.is-requesting,.jetpack-ai-status-indicator__icon-wrapper.is-suggesting{opacity:1;width:24px}',""]);const u=r},"../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":m=>{function o(t){var p=new Error("Cannot find module '"+t+"'");throw p.code="MODULE_NOT_FOUND",p}o.keys=()=>[],o.resolve=o,o.id="../../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",m.exports=o}}]);})();
