(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4468,6606],{"../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(c,t,e)=>{"use strict";e.d(t,{R:()=>d,x:()=>p});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const n={},l=o.createContext(n);function d(s){const r=o.useContext(l);return o.useMemo(function(){return typeof s=="function"?s(r):{...r,...s}},[r,s])}function p(s){let r;return s.disableParentContext?r=typeof s.components=="function"?s.components(n):s.components||n:r=d(s.components),o.createElement(l.Provider,{value:r},s.children)}},"../ai-client/src/components/ai-status-indicator/stories/index.mdx":(c,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>u});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),l=e("../../../node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.23_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),d=e("../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist/index.mjs"),p=e("../ai-client/src/components/ai-status-indicator/index.tsx"),s=e("../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx");function r(i){const a={h1:"h1",h2:"h2",h3:"h3",...(0,l.R)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.W8,{of:s}),`
`,(0,n.jsx)(a.h1,{id:"aistatusindicator",children:"AiStatusIndicator"}),`
`,(0,n.jsx)(a.h2,{id:"requesting-states",children:"Requesting states"}),`
`,(0,n.jsx)(a.h3,{id:"init",children:"Init"}),`
`,(0,n.jsx)(d.gG,{id:"js-packages-ai-client-aistatusindicator--init"}),`
`,(0,n.jsx)(a.h3,{id:"requesting",children:"Requesting"}),`
`,(0,n.jsx)(d.gG,{id:"js-packages-ai-client-aistatusindicator--requesting"}),`
`,(0,n.jsx)(a.h3,{id:"suggesting",children:"Suggesting"}),`
`,(0,n.jsx)(d.gG,{id:"js-packages-ai-client-aistatusindicator--suggesting"}),`
`,(0,n.jsx)(a.h3,{id:"done",children:"Done"}),`
`,(0,n.jsx)(d.gG,{id:"js-packages-ai-client-aistatusindicator--done"}),`
`,(0,n.jsx)(a.h3,{id:"error",children:"Error"}),`
`,(0,n.jsx)(d.gG,{id:"js-packages-ai-client-aistatusindicator--error"})]})}function u(i={}){const{wrapper:a}={...(0,l.R)(),...i.components};return a?(0,n.jsx)(a,{...i,children:(0,n.jsx)(r,{...i})}):r(i)}},"../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive":c=>{function t(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/@storybook+blocks@8.6.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.7/node_modules/@storybook/blocks/dist sync recursive",c.exports=t},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive":c=>{function t(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/components sync recursive",c.exports=t},"../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive":c=>{function t(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}t.keys=()=>[],t.resolve=t,t.id="../../../node_modules/.pnpm/@storybook+core@8.6.7_storybook@8.6.7/node_modules/@storybook/core/dist/theming sync recursive",c.exports=t},"../ai-client/src/components/ai-status-indicator/stories/index.stories.tsx":(c,t,e)=>{"use strict";e.r(t),e.d(t,{Done:()=>g,Error:()=>_,Init:()=>i,Requesting:()=>a,Suggesting:()=>m,__namedExportsOrder:()=>j,_default:()=>u,default:()=>s});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../ai-client/src/components/ai-status-indicator/index.tsx"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),d=`/*
 * External Dependencies
 */
import React from 'react';
/*
 * Internal Dependencies
 */
import AiStatusIndicator, { AiStatusIndicatorProps } from '../index.tsx';

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
`,p={_default:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},Init:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},Requesting:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},Suggesting:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},Error:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},Done:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}}};const s={parameters:{storySource:{source:`/*
 * External Dependencies
 */
import React from 'react';
/*
 * Internal Dependencies
 */
import AiStatusIndicator from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/AI Client/AiStatusIndicator',
  component: AiStatusIndicator,
  argTypes: {
    state: {
      control: {
        type: 'select'
      },
      options: ['init', 'requesting', 'suggesting', 'done', 'error']
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
const DefaultTemplate = args => {
  const props = {
    state: args.state,
    size: args.size
  };
  return /*#__PURE__*/_jsx(AiStatusIndicator, {
    ...props
  });
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
};`,locationsMap:{default:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},init:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},requesting:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},suggesting:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},error:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}},done:{startLoc:{col:24,line:33},endLoc:{col:1,line:41},startBody:{col:24,line:33},endBody:{col:1,line:41}}}}},title:"JS Packages/AI Client/AiStatusIndicator",component:n.A,argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},size:{control:{type:"select"},options:[24,32,48,64]},action:{table:{disable:!0}}}},r=y=>{const x={state:y.state,size:y.size};return(0,l.jsx)(n.A,{...x})},u=r.bind({});u.args={state:"init",size:24};const i=r.bind({});i.args={state:"init",size:48};const a=r.bind({});a.args={state:"requesting",size:48};const m=r.bind({});m.args={state:"suggesting",size:48};const _=r.bind({});_.args={state:"error",size:48};const g=r.bind({});g.args={state:"done",size:48};const j=["_default","Init","Requesting","Suggesting","Error","Done"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...u.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...a.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,..._.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: AiStatusIndicatoryStoryProps) => {
  const props: AiStatusIndicatorProps = {
    state: args.state,
    size: args.size
  };
  return <AiStatusIndicator {...props} />;
}`,...g.parameters?.docs?.source}}}},"../ai-client/src/components/ai-status-indicator/index.tsx":(c,t,e)=>{"use strict";e.d(t,{A:()=>a});var o=e("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),n=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(l),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../ai-client/src/components/ai-status-indicator/style.scss"),s={};s.insert="head",s.singleton=!1;var r=d()(p.A,s);const u=p.A.locals||{};var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a({state:m}){return(0,i.jsx)("div",{className:(0,n.A)("jetpack-ai-status-indicator__icon-wrapper",{[`is-${m}`]:!0}),children:(0,i.jsx)(o.Ay,{})})}try{aistatusindicator.displayName="aistatusindicator",aistatusindicator.__docgenInfo={description:"AiStatusIndicator component.",displayName:"aistatusindicator",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'},{value:'"error"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"]={docgenInfo:aistatusindicator.__docgenInfo,name:"aistatusindicator",path:"../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../ai-client/src/components/ai-status-indicator/style.scss":(c,t,e)=>{"use strict";e.d(t,{A:()=>s});var o=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),l=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(l),p=d()(n());p.push([c.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000;--jp-black-80: #2c3338;--jp-white: #fff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-yellow-40: #c08c00;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-mint: #D3F6D5;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}:where(body){min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover::after,.jp-cut:focus::after{transform:translateY(-50%) translateX(8px)}.jp-cut::after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jetpack-ai-status-indicator__icon-wrapper{transition:opacity .25s ease-in-out,width .25s;width:0;opacity:0;align-self:baseline}.jetpack-ai-status-indicator__icon-wrapper>svg{height:24px;width:24px;margin:6px 0 0}.jetpack-ai-status-indicator__icon-wrapper.is-requesting,.jetpack-ai-status-indicator__icon-wrapper.is-suggesting{opacity:1;width:24px}',""]);const s=p}}]);
