"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3553],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs":(j,i,e)=>{e.d(i,{XI:()=>k});var s=e("storybook/internal/preview-api"),l=e("storybook/internal/preview-errors"),r=e("@storybook/global"),d=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),m="actions",p="storybook/actions",y=null,O=`${p}/action-event`,c=null,D="$___storybook.isCyclic",u={depth:10,clearOnStoryChange:!0,limit:50},_=(n={})=>{Object.assign(u,n)},E=(n,t)=>{let o=Object.getPrototypeOf(n);return!o||t(o)?o:E(o,t)},g=n=>!!(typeof n=="object"&&n&&E(n,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof n.persist=="function"),A=n=>{if(g(n)){let t=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));t.persist();let o=Object.getOwnPropertyDescriptor(t,"view"),a=o?.value;return typeof a=="object"&&a?.constructor.name==="Window"&&Object.defineProperty(t,"view",{...o,value:Object.create(a.constructor.prototype)}),t}return n},x=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,d.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function k(n,t={}){let o={...u,...t},a=function(...b){if(t.implicit){let R=("__STORYBOOK_PREVIEW__"in r.global?r.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(v=>v.phase==="playing"||v.phase==="rendering");if(R){let v=!window?.FEATURES?.disallowImplicitActionsInRenderV8,P=new l.ImplicitActionsDuringRendering({phase:R.phase,name:n,deprecated:v});if(v)console.warn(P);else throw P}}let f=s.addons.getChannel(),M=x(),S=5,h=b.map(A),T=b.length>1?h:h[0],I={id:M,count:0,data:{name:n,args:T},options:{...o,maxDepth:S+(o.depth||3),allowFunction:o.allowFunction||!1}};f.emit(O,I)};return a.isAction=!0,a.implicit=t.implicit,a}var C=(...n)=>{let t=u,o=n;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(t={...u,...o.pop()});let a=o[0];(o.length!==1||typeof a=="string")&&(a={},o.forEach(f=>{a[f]=f}));let b={};return Object.keys(a).forEach(f=>{b[f]=k(a[f],t)}),b}},"../ai-client/src/components/ai-modal-footer/stories/index.stories.tsx":(j,i,e)=>{e.r(i),e.d(i,{Default:()=>c,__namedExportsOrder:()=>D,default:()=>y});var s=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.5.8_storybook@8.5.8/node_modules/@storybook/addon-actions/dist/index.mjs"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../ai-client/src/components/ai-modal-footer/index.tsx"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`/*
 * External Dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
/*
 * Internal Dependencies
 */
import AiModalFooter from '../index.js';

export default {
	title: 'JS Packages/AI Client/AiModalFooter',
	component: AiModalFooter,
	decorators: [
		Story => (
			<div style={ { display: 'flex', justifyContent: 'space-between' } }>
				<Story />
			</div>
		),
	],
};

const DefaultTemplate = () => {
	return (
		<AiModalFooter
			onGuidelinesClick={ action( 'onGuidelinesClick' ) }
			onFeedbackClick={ action( 'onFeedbackClick' ) }
		/>
	);
};

export const Default = DefaultTemplate.bind( {} );
`,p={Default:{startLoc:{col:24,line:22},endLoc:{col:1,line:27},startBody:{col:24,line:22},endBody:{col:1,line:27}}};const y={parameters:{storySource:{source:`/*
 * External Dependencies
 */
import { action } from '@storybook/addon-actions';
import React from 'react';
/*
 * Internal Dependencies
 */
import AiModalFooter from '../index.js';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/AI Client/AiModalFooter',
  component: AiModalFooter,
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const DefaultTemplate = () => {
  return /*#__PURE__*/_jsx(AiModalFooter, {
    onGuidelinesClick: action('onGuidelinesClick'),
    onFeedbackClick: action('onFeedbackClick')
  });
};
export const Default = DefaultTemplate.bind({});`,locationsMap:{default:{startLoc:{col:24,line:22},endLoc:{col:1,line:27},startBody:{col:24,line:22},endBody:{col:1,line:27}}}}},title:"JS Packages/AI Client/AiModalFooter",component:r.A,decorators:[u=>(0,d.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,d.jsx)(u,{})})]},c=(()=>(0,d.jsx)(r.A,{onGuidelinesClick:(0,s.XI)("onGuidelinesClick"),onFeedbackClick:(0,s.XI)("onFeedbackClick")})).bind({}),D=["Default"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <AiModalFooter onGuidelinesClick={action('onGuidelinesClick')} onFeedbackClick={action('onFeedbackClick')} />;
}`,...c.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(j,i,e)=>{e.d(i,{A:()=>r});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function l({icon:d,size:m=24,...p},y){return(0,s.cloneElement)(d,{width:m,height:m,...p,ref:y})}const r=(0,s.forwardRef)(l)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js":(j,i,e)=>{e.d(i,{A:()=>d});var s=e("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,l.jsx)(s.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(s.wA,{fillRule:"evenodd",clipRule:"evenodd",d:"M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4v1.5h-1.5V8h1.5Zm0 8v-5h-1.5v5h1.5Z"})})},"../ai-client/src/components/ai-modal-footer/index.tsx":(j,i,e)=>{e.d(i,{A:()=>g});var s=e("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@5.17.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js"),p=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(p),O=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-modal-footer/style.scss"),c={};c.insert="head",c.singleton=!1;var D=y()(O.A,c);const u=O.A.locals||{};var _=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=r.__;function g({onGuidelinesClick:A,onFeedbackClick:x}){const k=(0,l.useCallback)(()=>{A?.()},[A]),C=(0,l.useCallback)(()=>{x?.()},[x]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"ai-image-modal__footer-disclaimer",children:[(0,_.jsx)(d.A,{icon:m.A}),(0,_.jsx)("span",{children:E("Generated images could be inaccurate, biased or include text.","jetpack-ai-client")}),(0,_.jsx)(s.Ay,{variant:"link",className:"ai-image-modal__guidelines-button",href:"https://jetpack.com/redirect/?source=ai-guidelines",target:"_blank",onClick:k,children:(0,_.jsxs)("span",{children:[E("Guidelines","jetpack-ai-client")," \u2197"]})})]}),(0,_.jsx)(s.Ay,{variant:"link",className:"ai-image-modal__feedback-button",href:"https://jetpack.com/redirect/?source=jetpack-ai-feedback",target:"_blank",onClick:C,children:(0,_.jsxs)("span",{children:[E("Give feedback","jetpack-ai-client")," \u2197"]})})]})}try{aimodalfooter.displayName="aimodalfooter",aimodalfooter.__docgenInfo={description:"AiModalFooter component.",displayName:"aimodalfooter",props:{onGuidelinesClick:{defaultValue:null,description:"",name:"onGuidelinesClick",required:!1,type:{name:"() => void"}},onFeedbackClick:{defaultValue:null,description:"",name:"onFeedbackClick",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-modal-footer/index.tsx#aimodalfooter"]={docgenInfo:aimodalfooter.__docgenInfo,name:"aimodalfooter",path:"../ai-client/src/components/ai-modal-footer/index.tsx#aimodalfooter"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-modal-footer/style.scss":(j,i,e)=>{e.d(i,{A:()=>p});var s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),m=d()(l());m.push([j.id,".ai-image-modal__footer-disclaimer{display:flex;align-items:center;gap:4px;color:var(--jp-gray-50);fill:var(--jp-gray-50)}.ai-image-modal__footer-disclaimer .components-button.is-link{color:var(--jp-gray-50)}.ai-image-modal__feedback-button.components-button.is-link{text-decoration:none}",""]);const p=m}}]);
