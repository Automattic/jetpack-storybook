(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2462],{"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/defineProperty.js":(i,s,e)=>{var t=e("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPropertyKey.js");function d(n,o,a){return o=t(o),o in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,n}i.exports=d,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPrimitive.js":(i,s,e)=>{var t=e("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js").default;function d(n,o){if(t(n)!=="object"||n===null)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var m=a.call(n,o||"default");if(t(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}i.exports=d,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPropertyKey.js":(i,s,e)=>{var t=e("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js").default,d=e("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/toPrimitive.js");function n(o){var a=d(o,"string");return t(a)==="symbol"?a:String(a)}i.exports=n,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js":i=>{function s(e){"@babel/helpers - typeof";return i.exports=s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i.exports.__esModule=!0,i.exports.default=i.exports,s(e)}i.exports=s,i.exports.__esModule=!0,i.exports.default=i.exports},"../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(i,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function d(o){return o&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(o):null}function n(o){const a=(0,t.useMemo)(()=>{const m=d(o);return{subscribe(p){return m?(m.addEventListener("change",p),()=>{m.removeEventListener("change",p)}):()=>{}},getValue(){var p;return(p=m==null?void 0:m.matches)!==null&&p!==void 0?p:!1}}},[o]);return(0,t.useSyncExternalStore)(a.subscribe,a.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js":(i,s,e)=>{"use strict";e.d(s,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function d({icon:o,size:a=24,...m}){return(0,t.cloneElement)(o,{width:a,height:a,...m})}const n=d},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/check.js":(i,s,e)=>{"use strict";e.d(s,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,t.createElement)(d.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(d.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(i,s,e)=>{"use strict";e.d(s,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,t.createElement)(d.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(d.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(i,s,e)=>{"use strict";e.d(s,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,t.createElement)(d.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(d.y$,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/plugins.js":(i,s,e)=>{"use strict";e.d(s,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,t.createElement)(d.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(d.y$,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/wordpress.js":(i,s,e)=>{"use strict";e.d(s,{Z:()=>o});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,t.createElement)(d.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(d.y$,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(i,s,e)=>{"use strict";e.d(s,{Cd:()=>o,G:()=>a,UL:()=>_,Wj:()=>u,mg:()=>r,y$:()=>p});var t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(t),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=c=>(0,n.createElement)("circle",c),a=c=>(0,n.createElement)("g",c),m=c=>createElement("line",c),p=c=>(0,n.createElement)("path",c),r=c=>(0,n.createElement)("polygon",c),_=c=>(0,n.createElement)("rect",c),h=c=>createElement("defs",c),x=c=>createElement("radialGradient",c),f=c=>createElement("linearGradient",c),b=c=>createElement("stop",c),u=({className:c,isPressed:P,...j})=>{const g={...j,className:d()(c,{"is-pressed":P})||void 0,"aria-hidden":!0,focusable:!1};return(0,n.createElement)("svg",{...g})}},"../../plugins/protect/src/js/components/paid-accordion/stories/index.stories.jsx":(i,s,e)=>{var Z,N,B;"use strict";e.r(s),e.d(s,{Default:()=>y,__namedExportsOrder:()=>H,default:()=>z});var t=e("../components/components/text/index.tsx"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/wordpress.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/plugins.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../components/components/layout/use-breakpoint-match/index.ts"),m=e("../components/components/spinner/index.jsx"),p=e("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/check.js"),x=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),f=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),b=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=e.n(b),c=e("../../plugins/protect/src/js/state/store.js"),P=e("../../plugins/protect/src/js/components/severity/index.jsx"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(j),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss"),k={};k.insert="head",k.singleton=!1;var R=g()(E.Z,k);const v=E.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=r.__,W=o.createContext(),w=A=>{let{id:T,title:K,label:D,icon:F,fixable:X,severity:J,children:V,onOpen:O}=A;const C=(0,o.useContext)(W),S=(C==null?void 0:C.open)===T,G=C==null?void 0:C.setOpen,$=(0,p.Z)(L=>L(c.t).getThreatsAreFixing()),Q=u()(v["accordion-body"],{[v["accordion-body-open"]]:S,[v["accordion-body-close"]]:!S}),Y=(0,o.useCallback)(()=>{S||O==null||O(),G(L=>L===T?null:T)},[S,O,G,T]),[q]=(0,a.Z)(["sm","lg"],[null,"<"]);return(0,l.jsxs)("div",{className:v["accordion-item"],children:[(0,l.jsxs)("button",{className:v["accordion-header"],onClick:Y,children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)(t.ZP,{className:v["accordion-header-label"],mb:1,children:[(0,l.jsx)(_.Z,{icon:F,className:v["accordion-header-label-icon"]}),D]}),(0,l.jsx)(t.ZP,{className:v["accordion-header-description"],variant:S?"title-small":"body",children:K})]}),(0,l.jsx)("div",{children:(0,l.jsx)(P.Z,{severity:J})}),(0,l.jsx)("div",{children:X&&(0,l.jsxs)(l.Fragment,{children:[$.indexOf(T)>=0?(0,l.jsx)(m.Z,{color:"black"}):(0,l.jsx)(_.Z,{icon:h.Z,className:v["icon-check"],size:28}),q&&(0,l.jsx)("span",{children:I("Auto-fix","jetpack-protect")})]})}),(0,l.jsx)("div",{className:v["accordion-header-button"],children:(0,l.jsx)(_.Z,{icon:S?x.Z:f.Z,size:38})})]}),(0,l.jsx)("div",{className:Q,"aria-hidden":S?"false":"true",children:V})]})};w.displayName="PaidAccordionItem";const M=A=>{let{children:T}=A;const[K,D]=(0,o.useState)();return(0,l.jsx)(W.Provider,{value:{open:K,setOpen:D},children:(0,l.jsx)("div",{className:v.accordion,children:T})})};M.displayName="PaidAccordion",M.__docgenInfo={description:"",methods:[],displayName:"PaidAccordion"};const U=M;w.__docgenInfo={description:"",methods:[],displayName:"PaidAccordionItem"};var ee=`import { Text } from '@automattic/jetpack-components';
import { wordpress, plugins } from '@wordpress/icons';
import React from 'react';
import PaidAccordion, { PaidAccordionItem } from '..';

export default {
	title: 'Plugins/Protect/Paid Accordion',
	component: PaidAccordion,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		Story => (
			<div style={ { width: 800 } }>
				<Story />
			</div>
		),
	],
};

// eslint-disable-next-line no-unused-vars
export const Default = args => (
	<PaidAccordion>
		<PaidAccordionItem
			id="wordpress"
			label="WordPress (5.9-5.9.1)"
			title="Contributor+ Stored Cross-Site Scripting"
			icon={ wordpress }
		>
			<Text variant="title-small" mb={ 2 }>
				What is the problem?
			</Text>
			<Text mb={ 5 }>
				Post authors are able to bypass KSES restrictions in WordPress { '>' }= 5.9 (and or
				Gutenberg { '>' }= 9.8.0) due to the order filters are executed, which could allow them to
				perform to Stored Cross-Site Scripting attacks
			</Text>
			<Text variant="title-small" mb={ 2 }>
				How to fix it?
			</Text>
			<Text>Update to WordPress 5.9.2</Text>
		</PaidAccordionItem>
		<PaidAccordionItem
			id="jetpack"
			label="Jetpack < 9.8"
			title="Carousel Module Non-Published Page/Post Attachment Comment Leak"
			icon={ plugins }
		>
			<Text variant="title-small" mb={ 2 }>
				What is the problem?
			</Text>
			<Text mb={ 5 }>
				Post authors are able to bypass KSES restrictions in WordPress { '>' }= 5.9 (and or
				Gutenberg { '>' }= 9.8.0) due to the order filters are executed, which could allow them to
				perform to Stored Cross-Site Scripting attacks
			</Text>
			<Text variant="title-small" mb={ 2 }>
				How to fix it?
			</Text>
			<Text>Update to WordPress 5.9.2</Text>
		</PaidAccordionItem>
		<PaidAccordionItem
			id="jetpack-2"
			label="Jetpack < 9.8"
			title="Carousel Module Non-Published Page/Post Attachment Comment Leak"
			icon={ plugins }
		>
			<Text variant="title-small" mb={ 2 }>
				What is the problem?
			</Text>
			<Text mb={ 5 }>
				Post authors are able to bypass KSES restrictions in WordPress { '>' }= 5.9 (and or
				Gutenberg { '>' }= 9.8.0) due to the order filters are executed, which could allow them to
				perform to Stored Cross-Site Scripting attacks
			</Text>
			<Text variant="title-small" mb={ 2 }>
				How to fix it?
			</Text>
			<Text>Update to WordPress 5.9.2</Text>
		</PaidAccordionItem>
		<PaidAccordionItem
			id="jetpack-3"
			label="Jetpack < 9.8"
			title="Carousel Module Non-Published Page/Post Attachment Comment Leak"
			icon={ plugins }
		>
			<Text variant="title-small" mb={ 2 }>
				What is the problem?
			</Text>
			<Text mb={ 5 }>
				Post authors are able to bypass KSES restrictions in WordPress { '>' }= 5.9 (and or
				Gutenberg { '>' }= 9.8.0) due to the order filters are executed, which could allow them to
				perform to Stored Cross-Site Scripting attacks
			</Text>
			<Text variant="title-small" mb={ 2 }>
				How to fix it?
			</Text>
			<Text>Update to WordPress 5.9.2</Text>
		</PaidAccordionItem>
		<PaidAccordionItem
			id="jetpack-4"
			label="Jetpack < 9.8"
			title="Carousel Module Non-Published Page/Post Attachment Comment Leak"
			icon={ plugins }
		>
			<Text variant="title-small" mb={ 2 }>
				What is the problem?
			</Text>
			<Text mb={ 5 }>
				Post authors are able to bypass KSES restrictions in WordPress { '>' }= 5.9 (and or
				Gutenberg { '>' }= 9.8.0) due to the order filters are executed, which could allow them to
				perform to Stored Cross-Site Scripting attacks
			</Text>
			<Text variant="title-small" mb={ 2 }>
				How to fix it?
			</Text>
			<Text>Update to WordPress 5.9.2</Text>
		</PaidAccordionItem>
	</PaidAccordion>
);
`,te={Default:{startLoc:{col:23,line:19},endLoc:{col:20,line:90},startBody:{col:23,line:19},endBody:{col:20,line:90}}};const z={title:"Plugins/Protect/Paid Accordion",component:U,parameters:{storySource:{source:`import { Text } from '@automattic/jetpack-components';
import { wordpress, plugins } from '@wordpress/icons';
import React from 'react';
import PaidAccordion, { PaidAccordionItem } from '..';
export default {
  title: 'Plugins/Protect/Paid Accordion',
  component: PaidAccordion,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => <div style={{
    width: 800
  }}>
                <Story />
            </div>]
};


export const Default = args => <PaidAccordion>
        <PaidAccordionItem id="wordpress" label="WordPress (5.9-5.9.1)" title="Contributor+ Stored Cross-Site Scripting" icon={wordpress}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack-2" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack-3" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack-4" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
    </PaidAccordion>;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <PaidAccordion>\\n        <PaidAccordionItem id=\\"wordpress\\" label=\\"WordPress (5.9-5.9.1)\\" title=\\"Contributor+ Stored Cross-Site Scripting\\" icon={wordpress}>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                What is the problem?\\n            </Text>\\n            <Text mb={5}>\\n                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or\\n                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to\\n                perform to Stored Cross-Site Scripting attacks\\n            </Text>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                How to fix it?\\n            </Text>\\n            <Text>Update to WordPress 5.9.2</Text>\\n        </PaidAccordionItem>\\n        <PaidAccordionItem id=\\"jetpack\\" label=\\"Jetpack < 9.8\\" title=\\"Carousel Module Non-Published Page/Post Attachment Comment Leak\\" icon={plugins}>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                What is the problem?\\n            </Text>\\n            <Text mb={5}>\\n                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or\\n                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to\\n                perform to Stored Cross-Site Scripting attacks\\n            </Text>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                How to fix it?\\n            </Text>\\n            <Text>Update to WordPress 5.9.2</Text>\\n        </PaidAccordionItem>\\n        <PaidAccordionItem id=\\"jetpack-2\\" label=\\"Jetpack < 9.8\\" title=\\"Carousel Module Non-Published Page/Post Attachment Comment Leak\\" icon={plugins}>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                What is the problem?\\n            </Text>\\n            <Text mb={5}>\\n                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or\\n                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to\\n                perform to Stored Cross-Site Scripting attacks\\n            </Text>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                How to fix it?\\n            </Text>\\n            <Text>Update to WordPress 5.9.2</Text>\\n        </PaidAccordionItem>\\n        <PaidAccordionItem id=\\"jetpack-3\\" label=\\"Jetpack < 9.8\\" title=\\"Carousel Module Non-Published Page/Post Attachment Comment Leak\\" icon={plugins}>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                What is the problem?\\n            </Text>\\n            <Text mb={5}>\\n                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or\\n                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to\\n                perform to Stored Cross-Site Scripting attacks\\n            </Text>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                How to fix it?\\n            </Text>\\n            <Text>Update to WordPress 5.9.2</Text>\\n        </PaidAccordionItem>\\n        <PaidAccordionItem id=\\"jetpack-4\\" label=\\"Jetpack < 9.8\\" title=\\"Carousel Module Non-Published Page/Post Attachment Comment Leak\\" icon={plugins}>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                What is the problem?\\n            </Text>\\n            <Text mb={5}>\\n                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or\\n                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to\\n                perform to Stored Cross-Site Scripting attacks\\n            </Text>\\n            <Text variant=\\"title-small\\" mb={2}>\\n                How to fix it?\\n            </Text>\\n            <Text>Update to WordPress 5.9.2</Text>\\n        </PaidAccordionItem>\\n    </PaidAccordion>",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:20,line:90},startBody:{col:23,line:19},endBody:{col:20,line:90}}}},layout:"centered"},decorators:[A=>(0,l.jsx)("div",{style:{width:800},children:(0,l.jsx)(A,{})})]},y=A=>(0,l.jsxs)(U,{children:[(0,l.jsxs)(w,{id:"wordpress",label:"WordPress (5.9-5.9.1)",title:"Contributor+ Stored Cross-Site Scripting",icon:d.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,l.jsxs)(w,{id:"jetpack",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:n.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,l.jsxs)(w,{id:"jetpack-2",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:n.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,l.jsxs)(w,{id:"jetpack-3",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:n.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,l.jsxs)(w,{id:"jetpack-4",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:n.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]})]});y.displayName="Default",y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <PaidAccordion>
        <PaidAccordionItem id="wordpress" label="WordPress (5.9-5.9.1)" title="Contributor+ Stored Cross-Site Scripting" icon={wordpress}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack-2" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack-3" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
        <PaidAccordionItem id="jetpack-4" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
            <Text variant="title-small" mb={2}>
                What is the problem?
            </Text>
            <Text mb={5}>
                Post authors are able to bypass KSES restrictions in WordPress {'>'}= 5.9 (and or
                Gutenberg {'>'}= 9.8.0) due to the order filters are executed, which could allow them to
                perform to Stored Cross-Site Scripting attacks
            </Text>
            <Text variant="title-small" mb={2}>
                How to fix it?
            </Text>
            <Text>Update to WordPress 5.9.2</Text>
        </PaidAccordionItem>
    </PaidAccordion>`,...(B=(N=y.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const H=["Default"];y.__docgenInfo={description:"",methods:[],displayName:"Default"}},"../components/components/layout/use-breakpoint-match/index.ts":(i,s,e)=>{"use strict";e.d(s,{Z:()=>x});var t=e("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(d),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),a={};a.insert="head",a.singleton=!1;var m=n()(o.Z,a);const p=o.Z.locals||{},r=["sm","md","lg"],_=(f,b,u)=>{const c=r.indexOf(f),P=c+1,j=b.includes("=");let g=[];return b.startsWith("<")&&(g=r.slice(0,j?P:c)),b.startsWith(">")&&(g=r.slice(j?c:P)),g!=null&&g.length?g.some(E=>u[E]):u[f]},x=(f,b)=>{const u=Array.isArray(f)?f:[f],c=Array.isArray(b)?b:[b],[P,j,g]=r,E=(0,t.Z)(p[P]),k=(0,t.Z)(p[j]),R=(0,t.Z)(p[g]),v={sm:E,md:k,lg:R};return u.map((l,I)=>{const W=c[I];return W?_(l,W,v):v[l]})}},"../components/components/spinner/index.jsx":(i,s,e)=>{"use strict";e.d(s,{Z:()=>f});var t=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),d=e.n(t),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(o),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),p={};p.insert="head",p.singleton=!1;var r=a()(m.Z,p);const _=m.Z.locals||{};var h=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const x=b=>{const u=b.className+" jp-components-spinner",c={width:b.size,height:b.size,fontSize:b.size,borderTopColor:b.color},P={borderTopColor:b.color,borderRightColor:b.color};return(0,h.jsx)("div",{className:u,children:(0,h.jsx)("div",{className:"jp-components-spinner__outer",style:c,children:(0,h.jsx)("div",{className:"jp-components-spinner__inner",style:P})})})};x.displayName="Spinner",x.propTypes={color:d().string,className:d().string,size:d().number},x.defaultProps={color:"#FFFFFF",className:"",size:20},x.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}};const f=x},"../../plugins/protect/src/js/components/severity/index.jsx":(i,s,e)=>{"use strict";e.d(s,{Z:()=>b});var t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(d),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss"),a={};a.insert="head",a.singleton=!1;var m=n()(o.Z,a);const p=o.Z.locals||{};var r=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=t.__,h=u=>u>=5?"is-critical":u>=3&&u<5?"is-high":"is-low",x=u=>{const c=_("Critical","jetpack-protect"),P=_("High","jetpack-protect"),j=_("Low","jetpack-protect");return u>=5?c:u>=3&&u<5?P:j},f=u=>{let{severity:c}=u;return(0,r.jsx)("div",{className:`${p["threat-severity-badge"]} ${p[h(c)]}`,children:x(c)})};f.displayName="ThreatSeverityBadge",f.__docgenInfo={description:"",methods:[],displayName:"ThreatSeverityBadge"};const b=f},"../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js":i=>{"use strict";i.exports=function(r){return typeof r=="string"?e(r):s(r)};function s(r){return!r||typeof r!="object"||d(r)||n(r)?r:t(r)?m(r,s):p(a(r),function(_,h){var x=e(h);return _[x]=s(r[h]),_},{})}function e(r){return r.replace(/[_.-](\w|$)/g,function(_,h){return h.toUpperCase()})}var t=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"},d=function(r){return Object.prototype.toString.call(r)==="[object Date]"},n=function(r){return Object.prototype.toString.call(r)==="[object RegExp]"},o=Object.prototype.hasOwnProperty,a=Object.keys||function(r){var _=[];for(var h in r)o.call(r,h)&&_.push(h);return _};function m(r,_){if(r.map)return r.map(_);for(var h=[],x=0;x<r.length;x++)h.push(_(r[x],x));return h}function p(r,_,h){if(r.reduce)return r.reduce(_,h);for(var x=0;x<r.length;x++)h=_(h,r[x],x);return h}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(i,s)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty,n="[native code]";function o(){for(var a=[],m=0;m<arguments.length;m++){var p=arguments[m];if(p){var r=typeof p;if(r==="string"||r==="number")a.push(p);else if(Array.isArray(p)){if(p.length){var _=o.apply(null,p);_&&a.push(_)}}else if(r==="object"){if(p.toString!==Object.prototype.toString&&!p.toString.toString().includes("[native code]")){a.push(p.toString());continue}for(var h in p)d.call(p,h)&&p[h]&&a.push(h)}}}return a.join(" ")}i.exports?(o.default=o,i.exports=o):(e=[],t=function(){return o}.apply(s,e),t!==void 0&&(i.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(i,s,e)=>{"use strict";e.d(s,{Z:()=>m});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(n),a=o()(d());a.push([i.id,"",""]),a.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const m=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(i,s,e)=>{"use strict";e.d(s,{Z:()=>m});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(n),a=o()(d());a.push([i.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const m=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss":(i,s,e)=>{"use strict";e.d(s,{Z:()=>m});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(n),a=o()(d());a.push([i.id,".NA4kI3fa4uwjBTGpt8UD{display:inline-block;width:100%;border-radius:var(--jp-border-radius);border:1px solid var(--jp-gray)}.NA4kI3fa4uwjBTGpt8UD>*:not(:last-child){border-bottom:1px solid var(--jp-gray)}.GIZwBlRJvZP2PaSr88T2{background-color:var(--jp-white)}._0yrw_XKvISg1aOziRkyw{margin:0;display:grid;grid-template-columns:repeat(9, 1fr);cursor:pointer;box-sizing:border-box;background:none;border:none;width:100%;align-items:center;outline-color:var(--jp-black);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);text-align:start}._0yrw_XKvISg1aOziRkyw>:first-of-type{grid-column:1/7}._0yrw_XKvISg1aOziRkyw>:last-of-type{grid-column:9}._0yrw_XKvISg1aOziRkyw>:not(:first-child){margin:auto}._0yrw_XKvISg1aOziRkyw:hover{background:var(--jp-gray-0)}.FjuHpgfVTecgiAhqqfw1{display:flex;align-items:center;font-size:var(--font-body-small);font-weight:normal}.gT_N0hPdjpwwK1nwJZEw{margin-right:var(--spacing-base)}.GtiTquGPXSf0jgFsKeSf{font-weight:600;margin-left:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.HbVrG5Wjn8LZQVJXRUiT{align-items:center}.R34WryNVdEOBR0Gn7jah{transform-origin:top center;overflow:hidden}.cHvNO4WbRaFpr2aWqF_7{transition:all .1s;max-height:0;padding:0;transform:scaleY(0)}.Aq3jxnJodyk48Lf1Egsi{transition:max-height .3s,transform .2s;padding:calc(var(--spacing-base)*4) calc(var(--spacing-base)*7);max-height:1000px;transform:scaleY(1)}.L31iwjpSlfBZtW2CTbrV{fill:var(--jp-green-40)}@media(max-width: 599px){._0yrw_XKvISg1aOziRkyw{display:grid;grid-auto-rows:minmax(auto, auto)}._0yrw_XKvISg1aOziRkyw>:first-child{grid-column:1/8;grid-row:1}._0yrw_XKvISg1aOziRkyw>:nth-child(2){padding-left:calc(var(--spacing-base)*4);grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3){grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3) span{position:absolute;margin-top:var(--spacing-base)}._0yrw_XKvISg1aOziRkyw>:last-child{grid-column:10;grid-row:1/3}}",""]),a.locals={accordion:"NA4kI3fa4uwjBTGpt8UD","accordion-item":"GIZwBlRJvZP2PaSr88T2","accordion-header":"_0yrw_XKvISg1aOziRkyw","accordion-header-label":"FjuHpgfVTecgiAhqqfw1","accordion-header-label-icon":"gT_N0hPdjpwwK1nwJZEw","accordion-header-description":"GtiTquGPXSf0jgFsKeSf","accordion-header-button":"HbVrG5Wjn8LZQVJXRUiT","accordion-body":"R34WryNVdEOBR0Gn7jah","accordion-body-close":"cHvNO4WbRaFpr2aWqF_7","accordion-body-open":"Aq3jxnJodyk48Lf1Egsi","icon-check":"L31iwjpSlfBZtW2CTbrV"};const m=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss":(i,s,e)=>{"use strict";e.d(s,{Z:()=>m});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),o=e.n(n),a=o()(d());a.push([i.id,".zxGKVKzezupGHaXbqzvL{border-radius:32px;flex-shrink:0;font-size:12px;font-style:normal;font-weight:600;line-height:16px;padding:calc(var(--spacing-base)/2);position:relative;text-align:center;width:60px}.ON74ROKby9KFKGzUM6hQ{background:var(--jp-red-5);color:var(--jp-red-60)}.qPVsjV8TZ_ZtYOqYJTUw{background:var(--jp-yellow-5);color:var(--jp-yellow-60)}._DIlMqD5CZwpdLHylkey{background:var(--jp-gray-0);color:var(--jp-gray-50)}",""]),a.locals={"threat-severity-badge":"zxGKVKzezupGHaXbqzvL","is-critical":"ON74ROKby9KFKGzUM6hQ","is-high":"qPVsjV8TZ_ZtYOqYJTUw","is-low":"_DIlMqD5CZwpdLHylkey"};const m=a},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(i,s,e)=>{"use strict";e.d(s,{P:()=>d});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function t(n){return Object.prototype.toString.call(n)==="[object Object]"}function d(n){var o,a;return t(n)===!1?!1:(o=n.constructor,o===void 0?!0:(a=o.prototype,!(t(a)===!1||a.hasOwnProperty("isPrototypeOf")===!1)))}},"../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js":i=>{var s=i.exports={},e,t;function d(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=d}catch(u){e=d}try{typeof clearTimeout=="function"?t=clearTimeout:t=n}catch(u){t=n}})();function o(u){if(e===setTimeout)return setTimeout(u,0);if((e===d||!e)&&setTimeout)return e=setTimeout,setTimeout(u,0);try{return e(u,0)}catch(c){try{return e.call(null,u,0)}catch(P){return e.call(this,u,0)}}}function a(u){if(t===clearTimeout)return clearTimeout(u);if((t===n||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(u);try{return t(u)}catch(c){try{return t.call(null,u)}catch(P){return t.call(this,u)}}}var m=[],p=!1,r,_=-1;function h(){!p||!r||(p=!1,r.length?m=r.concat(m):_=-1,m.length&&x())}function x(){if(!p){var u=o(h);p=!0;for(var c=m.length;c;){for(r=m,m=[];++_<c;)r&&r[_].run();_=-1,c=m.length}r=null,p=!1,a(u)}}s.nextTick=function(u){var c=new Array(arguments.length-1);if(arguments.length>1)for(var P=1;P<arguments.length;P++)c[P-1]=arguments[P];m.push(new f(u,c)),m.length===1&&!p&&o(x)};function f(u,c){this.fun=u,this.array=c}f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={};function b(){}s.on=b,s.addListener=b,s.once=b,s.off=b,s.removeListener=b,s.removeAllListeners=b,s.emit=b,s.prependListener=b,s.prependOnceListener=b,s.listeners=function(u){return[]},s.binding=function(u){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(u){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}}}]);})();
