"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3553],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs":(j,c,e)=>{e.d(c,{XI:()=>x});var r=e("storybook/internal/preview-api"),l=e("storybook/internal/preview-errors"),d=e("@storybook/global"),p=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),m=Object.defineProperty,y=(t,n)=>{for(var o in n)m(t,o,{get:n[o],enumerable:!0})},b="actions",u="storybook/actions",E=null,k=`${u}/action-event`,L=null,f="$___storybook.isCyclic",O={depth:10,clearOnStoryChange:!0,limit:50},R=(t={})=>{Object.assign(O,t)},g=(t,n)=>{let o=Object.getPrototypeOf(t);return!o||n(o)?o:g(o,n)},C=t=>!!(typeof t=="object"&&t&&g(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),h=t=>{if(C(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let o=Object.getOwnPropertyDescriptor(n,"view"),a=o?.value;return typeof a=="object"&&a?.constructor.name==="Window"&&Object.defineProperty(n,"view",{...o,value:Object.create(a.constructor.prototype)}),n}return t},D=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,p.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function x(t,n={}){let o={...O,...n},a=function(...i){if(n.implicit){let I=("__STORYBOOK_PREVIEW__"in d.global?d.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(v=>v.phase==="playing"||v.phase==="rendering");if(I){let v=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,w=new l.ImplicitActionsDuringRendering({phase:I.phase,name:t,deprecated:v});if(v)console.warn(w);else throw w}}let s=r.addons.getChannel(),_=D(),A=5,T=i.map(h),N=i.length>1?T:T[0],G={id:_,count:0,data:{name:t,args:N},options:{...o,maxDepth:A+(o.depth||3),allowFunction:o.allowFunction||!1}};s.emit(k,G)};return a.isAction=!0,a.implicit=n.implicit,a}var Y=(...t)=>{let n=O,o=t;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(n={...O,...o.pop()});let a=o[0];(o.length!==1||typeof a=="string")&&(a={},o.forEach(s=>{a[s]=s}));let i={};return Object.keys(a).forEach(s=>{i[s]=x(a[s],n)}),i},S={};y(S,{argsEnhancers:()=>K,loaders:()=>W});var P=(t,n)=>typeof n[t]>"u"&&!(t in n),F=t=>{let{initialArgs:n,argTypes:o,id:a,parameters:{actions:i}}=t;if(!i||i.disable||!i.argTypesRegex||!o)return{};let s=new RegExp(i.argTypesRegex);return Object.entries(o).filter(([_])=>!!s.test(_)).reduce((_,[A,T])=>(P(A,n)&&(_[A]=x(A,{implicit:!0,id:a})),_),{})},B=t=>{let{initialArgs:n,argTypes:o,parameters:{actions:a}}=t;return a?.disable||!o?{}:Object.entries(o).filter(([i,s])=>!!s.action).reduce((i,[s,_])=>(P(s,n)&&(i[s]=x(typeof _.action=="string"?_.action:s)),i),{})},K=[B,F],M=!1,U=t=>{let{parameters:{actions:n}}=t;if(!n?.disable&&!M&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in d.global&&typeof d.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=d.global.__STORYBOOK_TEST_ON_MOCK_CALL__;o((a,i)=>{let s=a.getMockName();s!=="spy"&&(!/^next\/.*::/.test(s)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(_=>s.startsWith(_)))&&x(s)(i)}),M=!0}},W=[U],V=()=>definePreview(S)},"../ai-client/src/components/ai-modal-footer/stories/index.stories.tsx":(j,c,e)=>{e.r(c),e.d(c,{Default:()=>u,__namedExportsOrder:()=>E,default:()=>y});var r=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.6.7_storybook@8.6.7/node_modules/@storybook/addon-actions/dist/index.mjs"),l=e("../ai-client/src/components/ai-modal-footer/index.tsx"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),p=`/*
 * External Dependencies
 */
import { action } from '@storybook/addon-actions';
/*
 * Internal Dependencies
 */
import AiModalFooter from '../index.tsx';

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
`,m={Default:{startLoc:{col:24,line:21},endLoc:{col:1,line:26},startBody:{col:24,line:21},endBody:{col:1,line:26}}};const y={parameters:{storySource:{source:`/*
 * External Dependencies
 */
import { action } from '@storybook/addon-actions';
/*
 * Internal Dependencies
 */
import AiModalFooter from '../index.tsx';
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
export const Default = DefaultTemplate.bind({});`,locationsMap:{default:{startLoc:{col:24,line:21},endLoc:{col:1,line:26},startBody:{col:24,line:21},endBody:{col:1,line:26}}}}},title:"JS Packages/AI Client/AiModalFooter",component:l.A,decorators:[k=>(0,d.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,d.jsx)(k,{})})]},u=(()=>(0,d.jsx)(l.A,{onGuidelinesClick:(0,r.XI)("onGuidelinesClick"),onFeedbackClick:(0,r.XI)("onFeedbackClick")})).bind({}),E=["Default"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <AiModalFooter onGuidelinesClick={action('onGuidelinesClick')} onFeedbackClick={action('onFeedbackClick')} />;
}`,...u.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(j,c,e)=>{e.d(c,{A:()=>d});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function l({icon:p,size:m=24,...y},b){return(0,r.cloneElement)(p,{width:m,height:m,...y,ref:b})}const d=(0,r.forwardRef)(l)},"../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js":(j,c,e)=>{e.d(c,{A:()=>p});var r=e("../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=(0,l.jsx)(r.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(r.wA,{fillRule:"evenodd",clipRule:"evenodd",d:"M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4v1.5h-1.5V8h1.5Zm0 8v-5h-1.5v5h1.5Z"})})},"../ai-client/src/components/ai-modal-footer/index.tsx":(j,c,e)=>{e.d(c,{A:()=>R});var r=e("../../../node_modules/.pnpm/@wordpress+components@29.11.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+i18n@5.25.0/node_modules/@wordpress/i18n/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(y),u=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../ai-client/src/components/ai-modal-footer/style.scss"),E={};E.insert="head",E.singleton=!1;var k=b()(u.A,E);const L=u.A.locals||{};var f=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const O=d.__;function R({onGuidelinesClick:g,onFeedbackClick:C}){const h=(0,l.useCallback)(()=>{g?.()},[g]),D=(0,l.useCallback)(()=>{C?.()},[C]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"ai-image-modal__footer-disclaimer",children:[(0,f.jsx)(p.A,{icon:m.A}),(0,f.jsx)("span",{children:O("Generated images could be inaccurate, biased or include text.","jetpack-ai-client")}),(0,f.jsx)(r.Ay,{variant:"link",className:"ai-image-modal__guidelines-button",href:"https://jetpack.com/redirect/?source=ai-guidelines",target:"_blank",onClick:h,children:(0,f.jsxs)("span",{children:[O("Guidelines","jetpack-ai-client")," \u2197"]})})]}),(0,f.jsx)(r.Ay,{variant:"link",className:"ai-image-modal__feedback-button",href:"https://jetpack.com/redirect/?source=jetpack-ai-feedback",target:"_blank",onClick:D,children:(0,f.jsxs)("span",{children:[O("Give feedback","jetpack-ai-client")," \u2197"]})})]})}try{aimodalfooter.displayName="aimodalfooter",aimodalfooter.__docgenInfo={description:"AiModalFooter component.",displayName:"aimodalfooter",props:{onGuidelinesClick:{defaultValue:null,description:"",name:"onGuidelinesClick",required:!1,type:{name:"() => void"}},onFeedbackClick:{defaultValue:null,description:"",name:"onFeedbackClick",required:!1,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-modal-footer/index.tsx#aimodalfooter"]={docgenInfo:aimodalfooter.__docgenInfo,name:"aimodalfooter",path:"../ai-client/src/components/ai-modal-footer/index.tsx#aimodalfooter"})}catch{}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../ai-client/src/components/ai-modal-footer/style.scss":(j,c,e)=>{e.d(c,{A:()=>y});var r=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(r),d=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(d),m=p()(l());m.push([j.id,".ai-image-modal__footer-disclaimer{display:flex;align-items:center;gap:4px;color:var(--jp-gray-50);fill:var(--jp-gray-50)}.ai-image-modal__footer-disclaimer .components-button.is-link{color:var(--jp-gray-50)}.ai-image-modal__feedback-button.components-button.is-link{text-decoration:none}",""]);const y=m}}]);
