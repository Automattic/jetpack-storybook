"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3553],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(O,c,e)=>{e.d(c,{XI:()=>b});var i=e("storybook/internal/preview-api"),_=e("storybook/internal/preview-errors"),r=e("@storybook/global"),l=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),m=Object.defineProperty,y=(t,n)=>{for(var o in n)m(t,o,{get:n[o],enumerable:!0})},E="actions",x="storybook/actions",u=null,k=`${x}/action-event`,h=null,f="$___storybook.isCyclic",j={depth:10,clearOnStoryChange:!0,limit:50},P=(t={})=>{Object.assign(j,t)},g=(t,n)=>{let o=Object.getPrototypeOf(t);return!o||n(o)?o:g(o,n)},C=t=>!!(typeof t=="object"&&t&&g(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),D=t=>{if(C(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let o=Object.getOwnPropertyDescriptor(n,"view"),a=o?.value;return typeof a=="object"&&a?.constructor.name==="Window"&&Object.defineProperty(n,"view",{...o,value:Object.create(a.constructor.prototype)}),n}return t},R=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,l.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(t,n={}){let o={...j,...n},a=function(...d){if(n.implicit){let w=("__STORYBOOK_PREVIEW__"in r.global?r.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(v=>v.phase==="playing"||v.phase==="rendering");if(w){let v=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,L=new _.ImplicitActionsDuringRendering({phase:w.phase,name:t,deprecated:v});if(v)console.warn(L);else throw L}}let s=i.addons.getChannel(),p=R(),A=5,T=d.map(D),N=d.length>1?T:T[0],G={id:p,count:0,data:{name:t,args:N},options:{...o,maxDepth:A+(o.depth||3),allowFunction:o.allowFunction||!1}};s.emit(k,G)};return a.isAction=!0,a.implicit=n.implicit,a}var Y=(...t)=>{let n=j,o=t;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(n={...j,...o.pop()});let a=o[0];(o.length!==1||typeof a=="string")&&(a={},o.forEach(s=>{a[s]=s}));let d={};return Object.keys(a).forEach(s=>{d[s]=b(a[s],n)}),d},M={};y(M,{argsEnhancers:()=>K,loaders:()=>W});var S=(t,n)=>typeof n[t]>"u"&&!(t in n),B=t=>{let{initialArgs:n,argTypes:o,id:a,parameters:{actions:d}}=t;if(!d||d.disable||!d.argTypesRegex||!o)return{};let s=new RegExp(d.argTypesRegex);return Object.entries(o).filter(([p])=>!!s.test(p)).reduce((p,[A,T])=>(S(A,n)&&(p[A]=b(A,{implicit:!0,id:a})),p),{})},F=t=>{let{initialArgs:n,argTypes:o,parameters:{actions:a}}=t;return a?.disable||!o?{}:Object.entries(o).filter(([d,s])=>!!s.action).reduce((d,[s,p])=>(S(s,n)&&(d[s]=b(typeof p.action=="string"?p.action:s)),d),{})},K=[F,B],I=!1,U=t=>{let{parameters:{actions:n}}=t;if(!n?.disable&&!I&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in r.global&&typeof r.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=r.global.__STORYBOOK_TEST_ON_MOCK_CALL__;o((a,d)=>{let s=a.getMockName();s!=="spy"&&(!/^next\/.*::/.test(s)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(p=>s.startsWith(p)))&&b(s)(d)}),I=!0}},W=[U],V=()=>definePreview(M)},"../ai-client/src/components/ai-modal-footer/stories/index.stories.tsx":(O,c,e)=>{e.r(c),e.d(c,{Default:()=>u,__namedExportsOrder:()=>k,default:()=>E});var i=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../ai-client/src/components/ai-modal-footer/index.tsx"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`/*
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
`,y={Default:{startLoc:{col:24,line:22},endLoc:{col:1,line:27},startBody:{col:24,line:22},endBody:{col:1,line:27}}};const E={parameters:{storySource:{source:`/*
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
export const Default = DefaultTemplate.bind({});`,locationsMap:{default:{startLoc:{col:24,line:22},endLoc:{col:1,line:27},startBody:{col:24,line:22},endBody:{col:1,line:27}}}}},title:"JS Packages/AI Client/AiModalFooter",component:r.A,decorators:[h=>(0,l.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,l.jsx)(h,{})})]},u=(()=>(0,l.jsx)(r.A,{onGuidelinesClick:(0,i.XI)("onGuidelinesClick"),onFeedbackClick:(0,i.XI)("onFeedbackClick")})).bind({}),k=["Default"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <AiModalFooter onGuidelinesClick={action('onGuidelinesClick')} onFeedbackClick={action('onFeedbackClick')} />;
}`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(O,c,e)=>{e.d(c,{A:()=>r});var i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _({icon:l,size:m=24,...y},E){return(0,i.cloneElement)(l,{width:m,height:m,...y,ref:E})}const r=(0,i.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js":(O,c,e)=>{e.d(c,{A:()=>l});var i=e("../../../node_modules/.pnpm/@wordpress+primitives@4.21.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const l=(0,_.jsx)(i.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)(i.wA,{fillRule:"evenodd",clipRule:"evenodd",d:"M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4v1.5h-1.5V8h1.5Zm0 8v-5h-1.5v5h1.5Z"})})},"../ai-client/src/components/ai-modal-footer/index.tsx":(O,c,e)=>{e.d(c,{A:()=>P});var i=e("../../../node_modules/.pnpm/@wordpress+components@29.7.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@5.21.0/node_modules/@wordpress/i18n/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@10.21.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(y),x=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-modal-footer/style.scss"),u={};u.insert="head",u.singleton=!1;var k=E()(x.A,u);const h=x.A.locals||{};var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=r.__;function P({onGuidelinesClick:g,onFeedbackClick:C}){const D=(0,_.useCallback)(()=>{g?.()},[g]),R=(0,_.useCallback)(()=>{C?.()},[C]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"ai-image-modal__footer-disclaimer",children:[(0,f.jsx)(l.A,{icon:m.A}),(0,f.jsx)("span",{children:j("Generated images could be inaccurate, biased or include text.","jetpack-ai-client")}),(0,f.jsx)(i.Ay,{variant:"link",className:"ai-image-modal__guidelines-button",href:"https://jetpack.com/redirect/?source=ai-guidelines",target:"_blank",onClick:D,children:(0,f.jsxs)("span",{children:[j("Guidelines","jetpack-ai-client")," \u2197"]})})]}),(0,f.jsx)(i.Ay,{variant:"link",className:"ai-image-modal__feedback-button",href:"https://jetpack.com/redirect/?source=jetpack-ai-feedback",target:"_blank",onClick:R,children:(0,f.jsxs)("span",{children:[j("Give feedback","jetpack-ai-client")," \u2197"]})})]})}try{aimodalfooter.displayName="aimodalfooter",aimodalfooter.__docgenInfo={description:"AiModalFooter component.",displayName:"aimodalfooter",props:{onGuidelinesClick:{defaultValue:null,description:"",name:"onGuidelinesClick",required:!1,type:{name:"() => void"}},onFeedbackClick:{defaultValue:null,description:"",name:"onFeedbackClick",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-modal-footer/index.tsx#aimodalfooter"]={docgenInfo:aimodalfooter.__docgenInfo,name:"aimodalfooter",path:"../ai-client/src/components/ai-modal-footer/index.tsx#aimodalfooter"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-modal-footer/style.scss":(O,c,e)=>{e.d(c,{A:()=>y});var i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(i),r=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),l=e.n(r),m=l()(_());m.push([O.id,".ai-image-modal__footer-disclaimer{display:flex;align-items:center;gap:4px;color:var(--jp-gray-50);fill:var(--jp-gray-50)}.ai-image-modal__footer-disclaimer .components-button.is-link{color:var(--jp-gray-50)}.ai-image-modal__feedback-button.components-button.is-link{text-decoration:none}",""]);const y=m}}]);
