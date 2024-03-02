"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8444],{"../ai-client/src/components/ai-control/stories/index.stories.tsx":(k,m,e)=>{var Q,q,ee;e.r(m),e.d(m,{Default:()=>h,__namedExportsOrder:()=>je,default:()=>ge});var l=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+block-editor@12.19.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/block-editor/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button-group/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-keyboard-shortcut/index.js"),f=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),I=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js"),R=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),T=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/trash.js"),O=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/reusable-block.js"),Y=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),oe=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),se=e.n(oe),ae=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),re=e.n(ae),F=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-control/style.scss"),V={};V.insert="head",V.singleton=!1;var Ae=re()(F.Z,V);const Ee=F.Z.locals||{};var le=e("../ai-client/src/components/ai-status-indicator/index.tsx"),pe=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js"),G=e("../../../node_modules/.pnpm/@wordpress+element@5.28.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js"),de=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js"),ie=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js"),ce=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const z=f.__,W="warning",H="error",X="success",M="info",Ie=[W,H,X,M],me={[W]:de.Z,[H]:ie.Z,[X]:Y.Z,[M]:ce.Z};function U({severity:o=null,icon:t=null,children:C}){return(0,n.jsxs)("div",{className:"jetpack-ai-assistant__message",children:[(o||t)&&(0,n.jsx)(c.Z,{icon:me[o]||t}),(0,n.jsx)("div",{className:"jetpack-ai-assistant__message-content",children:C})]})}U.displayName="Message";function S(){return(0,n.jsx)(U,{severity:M,children:(0,G.Z)(z("AI-generated content could be inaccurate or biased. <link>Learn more</link>","jetpack-ai-client"),{link:(0,n.jsx)(pe.Z,{href:"https://automattic.com/ai-guidelines"})})})}S.displayName="GuidelineMessage";function Z({requestsRemaining:o,onUpgradeClick:t}){return(0,n.jsx)(U,{severity:M,children:(0,G.Z)((0,f.gB)(z("You have %1$d free requests remaining. <link>Upgrade</link> and avoid interruptions","jetpack-ai-client"),o),{link:(0,n.jsx)(a.ZP,{variant:"link",onClick:t})})})}Z.displayName="UpgradeMessage";try{message.displayName="message",message.__docgenInfo={description:"React component to render a block message.",displayName:"message",props:{icon:{defaultValue:{value:"null"},description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}},severity:{defaultValue:{value:"null"},description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/message.tsx#message"]={docgenInfo:message.__docgenInfo,name:"message",path:"../ai-client/src/components/ai-control/message.tsx#message"})}catch(o){}try{S.displayName="GuidelineMessage",S.__docgenInfo={description:"React component to render a guideline message.",displayName:"GuidelineMessage",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/message.tsx#GuidelineMessage"]={docgenInfo:S.__docgenInfo,name:"GuidelineMessage",path:"../ai-client/src/components/ai-control/message.tsx#GuidelineMessage"})}catch(o){}try{Z.displayName="UpgradeMessage",Z.__docgenInfo={description:"React component to render a upgrade message.",displayName:"UpgradeMessage",props:{requestsRemaining:{defaultValue:null,description:"",name:"requestsRemaining",required:!0,type:{name:"number"}},onUpgradeClick:{defaultValue:null,description:"",name:"onUpgradeClick",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/message.tsx#UpgradeMessage"]={docgenInfo:Z.__docgenInfo,name:"UpgradeMessage",path:"../ai-client/src/components/ai-control/message.tsx#UpgradeMessage"})}catch(o){}const r=f.__,D=()=>{};function w({disabled:o=!1,value:t="",placeholder:C="",showAccept:v=!1,acceptLabel:A=r("Accept","jetpack-ai-client"),showButtonLabels:u=!0,isTransparent:N=!1,state:E="init",showGuideLine:fe=!1,customFooter:xe=null,onChange:x=D,onSend:b=D,onStop:ye=D,onAccept:P=D,onDiscard:B=null,showRemove:he=!1,bannerComponent:be=null,errorComponent:ke=null},Se){const y=(0,s.useRef)(null),K=E==="requesting"||E==="suggesting",[_,L]=s.useState(!1),[p,we]=s.useState(t||null);(0,s.useEffect)(()=>{var g;_&&((g=y==null?void 0:y.current)==null||g.focus()),!_&&p!==null&&t!==p&&(x==null||x(p))},[_,p,t]);const ne=(0,s.useCallback)(()=>{we(t),L(!1),b==null||b(t)},[t]),Ce=(0,s.useCallback)(g=>{x==null||x(g),E!=="init"&&L(p?g!==p:g.length>0)},[p,E]),te=(0,s.useCallback)(()=>{B==null||B()},[]),ve=(0,s.useCallback)(()=>{x(p||""),L(!1)},[p]);return(0,s.useImperativeHandle)(Se,()=>y.current),(0,i.Z)("mod+enter",()=>{v&&(P==null||P())},{target:y}),(0,i.Z)("enter",g=>{g.preventDefault(),ne()},{target:y}),(0,n.jsxs)("div",{className:"jetpack-components-ai-control__container-wrapper",children:[ke,(0,n.jsxs)("div",{className:"jetpack-components-ai-control__container",children:[be,(0,n.jsxs)("div",{className:se()("jetpack-components-ai-control__wrapper",{"is-transparent":N}),children:[(0,n.jsx)(le.Z,{state:E}),(0,n.jsx)("div",{className:"jetpack-components-ai-control__input-wrapper",children:(0,n.jsx)(j.f3,{value:t,onChange:Ce,placeholder:C,className:"jetpack-components-ai-control__input",disabled:K||o,ref:y})}),(!v||_)&&(0,n.jsx)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:K?(0,n.jsx)(a.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:ye,variant:"secondary",label:r("Stop request","jetpack-ai-client"),children:u?r("Stop","jetpack-ai-client"):(0,n.jsx)(c.Z,{icon:I.Z})}):(0,n.jsxs)(n.Fragment,{children:[_&&(0,n.jsx)(a.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:ve,variant:"secondary",label:r("Cancel","jetpack-ai-client"),children:u?r("Cancel","jetpack-ai-client"):(0,n.jsx)(c.Z,{icon:I.Z})}),he&&!_&&!(t!=null&&t.length)&&B&&(0,n.jsx)(a.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:te,variant:"secondary",label:r("Cancel","jetpack-ai-client"),children:u?r("Cancel","jetpack-ai-client"):(0,n.jsx)(c.Z,{icon:I.Z})}),(t==null?void 0:t.length)>0&&(0,n.jsx)(a.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:ne,variant:"primary",disabled:!(t!=null&&t.length)||o,label:r("Send request","jetpack-ai-client"),children:u?r("Generate","jetpack-ai-client"):(0,n.jsx)(c.Z,{icon:R.Z})})]})}),v&&!_&&(0,n.jsxs)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:[((t==null?void 0:t.length)>0||p===null)&&(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(a.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:r("Discard","jetpack-ai-client"),onClick:te,tooltipPosition:"top",children:(0,n.jsx)(c.Z,{icon:T.Z})}),(0,n.jsx)(a.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:r("Regenerate","jetpack-ai-client"),onClick:()=>b==null?void 0:b(t),tooltipPosition:"top",disabled:!(t!=null&&t.length)||t===null||o,children:(0,n.jsx)(c.Z,{icon:O.Z})})]}),(0,n.jsx)(a.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:P,variant:"primary",label:A,children:u?A:(0,n.jsx)(c.Z,{icon:Y.Z})})]})]}),fe&&!K&&!_&&(xe||(0,n.jsx)(S,{}))]})]})}w.displayName="AIControl";const J=(0,s.forwardRef)(w);try{w.displayName="AIControl",w.__docgenInfo={description:"AI Control component.",displayName:"AIControl",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/index.tsx#AIControl"]={docgenInfo:w.__docgenInfo,name:"AIControl",path:"../ai-client/src/components/ai-control/index.tsx#AIControl"})}catch(o){}var Re=`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useState } from '@wordpress/element';
import React from 'react';
/**
 * Internal dependencies
 */
import AIControl from '../index.js';
/**
 * Types
 */
import type { Meta } from '@storybook/react';

interface AIControlStoryMeta extends Meta< typeof AIControl > {
	title?: string;
	component?: React.ReactElement;
}

const meta: AIControlStoryMeta = {
	title: 'JS Packages/AI Client/AI Control',
	component: AIControl,
	decorators: [
		Story => (
			<div style={ { backgroundColor: 'white' } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		state: {
			control: {
				type: 'select',
			},
			options: [ 'init', 'requesting', 'suggesting', 'done', 'error' ],
		},
	},
	parameters: {
		controls: {
			exclude: /on[A-Z].*/,
		},
	},
} as Meta< typeof AIControl >;

const Template = args => {
	const [ value, setValue ] = useState( '' );

	const handleChange = ( newValue: string ) => {
		setValue( newValue );
		args?.onChange?.( newValue );
	};

	return <AIControl { ...args } onChange={ handleChange } value={ args?.value ?? value } />;
};

const DefaultArgs = {
	isTransparent: false,
	placeholder: '',
	state: 'init',
	showButtonLabels: true,
	showAccept: false,
	acceptLabel: 'Accept',
	onChange: action( 'onChange' ),
	onSend: action( 'onSend' ),
	onStop: action( 'onStop' ),
	onAccept: action( 'onAccept' ),
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export default meta;
`,Te={Default:{startLoc:{col:17,line:46},endLoc:{col:1,line:55},startBody:{col:17,line:46},endBody:{col:1,line:55}}};const ue={title:"JS Packages/AI Client/AI Control",component:J,decorators:[o=>(0,n.jsx)("div",{style:{backgroundColor:"white"},children:(0,n.jsx)(o,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]}},parameters:{storySource:{source:`/**
 * External dependencies
 */
import { action } from '@storybook/addon-actions';
import { useState } from '@wordpress/element';
import React from 'react';
/**
 * Internal dependencies
 */
import AIControl from '../index.js';
/**
 * Types
 */
import type { Meta } from '@storybook/react';

interface AIControlStoryMeta extends Meta< typeof AIControl > {
	title?: string;
	component?: React.ReactElement;
}

const meta: AIControlStoryMeta = {
	title: 'JS Packages/AI Client/AI Control',
	component: AIControl,
	decorators: [
		Story => (
			<div style={ { backgroundColor: 'white' } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		state: {
			control: {
				type: 'select',
			},
			options: [ 'init', 'requesting', 'suggesting', 'done', 'error' ],
		},
	},
	parameters: {
		controls: {
			exclude: /on[A-Z].*/,
		},
	},
} as Meta< typeof AIControl >;

const Template = args => {
	const [ value, setValue ] = useState( '' );

	const handleChange = ( newValue: string ) => {
		setValue( newValue );
		args?.onChange?.( newValue );
	};

	return <AIControl { ...args } onChange={ handleChange } value={ args?.value ?? value } />;
};

const DefaultArgs = {
	isTransparent: false,
	placeholder: '',
	state: 'init',
	showButtonLabels: true,
	showAccept: false,
	acceptLabel: 'Accept',
	onChange: action( 'onChange' ),
	onSend: action( 'onSend' ),
	onStop: action( 'onStop' ),
	onAccept: action( 'onAccept' ),
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export default meta;
`,locationsMap:{default:{startLoc:{col:17,line:46},endLoc:{col:1,line:55},startBody:{col:17,line:46},endBody:{col:1,line:55}}}},controls:{exclude:/on[A-Z].*/}}},$=o=>{var A;const[t,C]=(0,s.useState)(""),v=u=>{var N;C(u),(N=o==null?void 0:o.onChange)==null||N.call(o,u)};return(0,n.jsx)(J,{...o,onChange:v,value:(A=o==null?void 0:o.value)!=null?A:t})};$.displayName="Template";const _e={isTransparent:!1,placeholder:"",state:"init",showButtonLabels:!0,showAccept:!1,acceptLabel:"Accept",onChange:(0,l.aD)("onChange"),onSend:(0,l.aD)("onSend"),onStop:(0,l.aD)("onStop"),onAccept:(0,l.aD)("onAccept")},h=$.bind({});h.args=_e;const ge=ue;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
    args?.onChange?.(newValue);
  };
  return <AIControl {...args} onChange={handleChange} value={args?.value ?? value} />;
}`,...(ee=(q=h.parameters)==null?void 0:q.docs)==null?void 0:ee.source}}};const je=["Default"]},"../ai-client/src/components/ai-status-indicator/index.tsx":(k,m,e)=>{e.d(m,{Z:()=>T});var l=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),j=e.n(s),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(a),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss"),f={};f.insert="head",f.singleton=!1;var c=d()(i.Z,f);const I=i.Z.locals||{};var R=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function T({state:O}){return(0,R.jsx)("div",{className:j()("jetpack-ai-status-indicator__icon-wrapper",{[`is-${O}`]:!0}),children:(0,R.jsx)(l.ZP,{})})}T.displayName="AiStatusIndicator";try{aistatusindicator.displayName="aistatusindicator",aistatusindicator.__docgenInfo={description:"AiStatusIndicator component.",displayName:"aistatusindicator",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'},{value:'"error"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"]={docgenInfo:aistatusindicator.__docgenInfo,name:"aistatusindicator",path:"../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"})}catch(O){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-control/style.scss":(k,m,e)=>{e.d(m,{Z:()=>i});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(l),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(j),d=a()(s());d.push([k.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}.jetpack-components-ai-control__container-wrapper{position:sticky;bottom:16px}.jetpack-components-ai-control__container{color:var(--jp-gray-80);background-color:var(--jp-white);box-shadow:0px 12px 15px 0px rgba(0,0,0,.12),0px 3px 9px 0px rgba(0,0,0,.12),0px 1px 3px 0px rgba(0,0,0,.15);font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;border-radius:6px;border:1px solid var(--gutenberg-gray-400, #CCC)}.jetpack-components-ai-control__wrapper{display:flex;padding:8px 8px 8px var(--grid-unit-15, 12px);align-items:flex-end;box-sizing:border-box;border-radius:6px 6px 0 0;gap:6px}.jetpack-components-ai-control__wrapper.is-transparent{opacity:.4}.jetpack-components-ai-control__input-wrapper{display:flex;flex-grow:1;align-self:center;min-height:36px;align-items:center}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input{background-color:var(--jp-white);width:100%;min-height:20px;border-radius:2px;padding:6px 8px;resize:none !important;border:none;box-shadow:none;color:var(--jp-gray-80);font-size:16px;font-weight:400;line-height:20px;transition:box-shadow .1s linear 0s}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input:focus{box-shadow:none;color:var(--jp-gray-80)}@media(min-width: 600px){.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input{font-size:13px}}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input::-moz-placeholder{text-overflow:ellipsis;white-space:nowrap;opacity:.75}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input::placeholder{text-overflow:ellipsis;white-space:nowrap;opacity:.75}.jetpack-components-ai-control__controls-prompt_button_wrapper{text-transform:uppercase;font-size:11px;font-weight:600;line-height:1em;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap;display:flex;align-items:center;gap:8px}.jetpack-components-ai-control__controls-prompt_button_wrapper .components-button.is-small:not(.has-label){padding:0}.jetpack-components-ai-control__controls-prompt_button_wrapper .components-button-group .components-button{box-shadow:none;padding:6px 8px}.jetpack-components-ai-control__controls-prompt_button:disabled{opacity:.6;cursor:not-allowed}.jetpack-ai-assistant__message{display:flex;line-height:28px;font-size:12px;align-self:center;align-items:center;background-color:var(--jp-white-off);padding:0 12px;border-radius:0 0 6px 6px}.jetpack-ai-assistant__message>svg{fill:var(--jp-gray-40)}.jetpack-ai-assistant__message .jetpack-ai-assistant__message-content{flex-grow:2;margin:0 8px;color:var(--jp-gray-50);line-height:1.4em}.jetpack-ai-assistant__message .jetpack-ai-assistant__message-content .components-external-link{color:var(--jp-gray-50)}.jetpack-ai-assistant__message .jetpack-ai-assistant__message-content .components-button.is-link{padding:0}',""]);const i=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss":(k,m,e)=>{e.d(m,{Z:()=>i});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(l),j=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),a=e.n(j),d=a()(s());d.push([k.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}body{min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jetpack-ai-status-indicator__icon-wrapper{transition:opacity .25s ease-in-out,width .25s;width:0;opacity:0;align-self:baseline}.jetpack-ai-status-indicator__icon-wrapper>svg{height:24px;width:24px;margin:6px 0 0}.jetpack-ai-status-indicator__icon-wrapper.is-requesting,.jetpack-ai-status-indicator__icon-wrapper.is-suggesting{opacity:1;width:24px}',""]);const i=d}}]);})();
