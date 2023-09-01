(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2462],{"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/defineProperty.js":(a,i,e)=>{var t=e("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPropertyKey.js");function r(n,s,o){return s=t(s),s in n?Object.defineProperty(n,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[s]=o,n}a.exports=r,a.exports.__esModule=!0,a.exports.default=a.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPrimitive.js":(a,i,e)=>{var t=e("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/typeof.js").default;function r(n,s){if(t(n)!=="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var c=o.call(n,s||"default");if(t(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(n)}a.exports=r,a.exports.__esModule=!0,a.exports.default=a.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPropertyKey.js":(a,i,e)=>{var t=e("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/typeof.js").default,r=e("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPrimitive.js");function n(s){var o=r(s,"string");return t(o)==="symbol"?o:String(o)}a.exports=n,a.exports.__esModule=!0,a.exports.default=a.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/typeof.js":a=>{function i(e){"@babel/helpers - typeof";return a.exports=i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a.exports.__esModule=!0,a.exports.default=a.exports,i(e)}a.exports=i,a.exports.__esModule=!0,a.exports.default=a.exports},"../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(a,i,e)=>{"use strict";e.d(i,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r(s){return s&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(s):null}function n(s){const o=(0,t.useMemo)(()=>{const c=r(s);return{subscribe(m){return c?(c.addEventListener("change",m),()=>{c.removeEventListener("change",m)}):()=>{}},getValue(){var m;return(m=c==null?void 0:c.matches)!==null&&m!==void 0?m:!1}}},[s]);return(0,t.useSyncExternalStore)(o.subscribe,o.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+deprecated@3.41.0/node_modules/@wordpress/deprecated/build-module/index.js":(a,i,e)=>{"use strict";e.d(i,{Z:()=>n});var t=e("../../../node_modules/.pnpm/@wordpress+hooks@3.41.0/node_modules/@wordpress/hooks/build-module/index.js");const r=Object.create(null);function n(s,o={}){const{since:c,version:m,alternative:d,plugin:_,link:u,hint:h}=o,P=_?` from ${_}`:"",b=c?` since version ${c}`:"",x=m?` and will be removed${P} in version ${m}`:"",p=d?` Please use ${d} instead.`:"",v=u?` See: ${u}`:"",j=h?` Note: ${h}`:"",f=`${s} is deprecated${b}${x}.${p}${v}${j}`;f in r||((0,t.Kw)("deprecated",s,o,f),console.warn(f),r[f]=!0)}},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js":(a,i,e)=>{"use strict";e.d(i,{Z:()=>n});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({icon:s,size:o=24,...c}){return(0,t.cloneElement)(s,{width:o,height:o,...c})}const n=r},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/check.js":(a,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(r.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(a,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(r.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(a,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(r.y$,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/plugins.js":(a,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(r.y$,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/wordpress.js":(a,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(r.y$,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.41.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(a,i,e)=>{"use strict";e.d(i,{ZP:()=>n});var t=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.41.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function r(s,o){if(s===o)return!0;if(s.length!==o.length)return!1;for(let c=0,m=s.length;c<m;c++)if(s[c]!==o[c])return!1;return!0}function n(s,o){if(s&&o){if(s.constructor===Object&&o.constructor===Object)return(0,t.Z)(s,o);if(Array.isArray(s)&&Array.isArray(o))return r(s,o)}return s===o}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.41.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(a,i,e)=>{"use strict";e.d(i,{Z:()=>t});function t(r,n){if(r===n)return!0;const s=Object.keys(r),o=Object.keys(n);if(s.length!==o.length)return!1;let c=0;for(;c<s.length;){const m=s[c],d=r[m];if(d===void 0&&!n.hasOwnProperty(m)||d!==n[m])return!1;c++}return!0}},"../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(a,i,e)=>{"use strict";e.d(i,{Cd:()=>s,G:()=>o,UL:()=>_,Wj:()=>x,mg:()=>d,x1:()=>c,y$:()=>m});var t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(t),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=p=>(0,n.createElement)("circle",p),o=p=>(0,n.createElement)("g",p),c=p=>(0,n.createElement)("line",p),m=p=>(0,n.createElement)("path",p),d=p=>(0,n.createElement)("polygon",p),_=p=>(0,n.createElement)("rect",p),u=p=>createElement("defs",p),h=p=>createElement("radialGradient",p),P=p=>createElement("linearGradient",p),b=p=>createElement("stop",p),x=({className:p,isPressed:v,...j})=>{const f={...j,className:r()(p,{"is-pressed":v})||void 0,"aria-hidden":!0,focusable:!1};return(0,n.createElement)("svg",{...f})}},"../../plugins/protect/src/js/components/paid-accordion/stories/index.stories.jsx":(a,i,e)=>{var U,B,N;"use strict";e.r(i),e.d(i,{Default:()=>y,__namedExportsOrder:()=>H,default:()=>z});var t=e("../components/components/text/index.tsx"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/wordpress.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/plugins.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../components/components/layout/use-breakpoint-match/index.ts"),c=e("../components/components/spinner/index.jsx"),m=e("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/check.js"),h=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),P=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),b=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),x=e.n(b),p=e("../../plugins/protect/src/js/state/store.js"),v=e("../../plugins/protect/src/js/components/severity/index.jsx"),j=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(j),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss"),C={};C.insert="head",C.singleton=!1;var R=f()(E.Z,C);const g=E.Z.locals||{};var l=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const M=d.__,W=s.createContext(),w=A=>{let{id:S,title:K,label:D,icon:F,fixable:X,severity:J,children:V,onOpen:O}=A;const k=(0,s.useContext)(W),T=(k==null?void 0:k.open)===S,G=k==null?void 0:k.setOpen,$=(0,m.Z)(L=>L(p.t).getThreatsAreFixing()),Y=x()(g["accordion-body"],{[g["accordion-body-open"]]:T,[g["accordion-body-close"]]:!T}),Q=(0,s.useCallback)(()=>{T||O==null||O(),G(L=>L===S?null:S)},[T,O,G,S]),[q]=(0,o.Z)(["sm","lg"],[null,"<"]);return(0,l.jsxs)("div",{className:g["accordion-item"],children:[(0,l.jsxs)("button",{className:g["accordion-header"],onClick:Q,children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)(t.ZP,{className:g["accordion-header-label"],mb:1,children:[(0,l.jsx)(_.Z,{icon:F,className:g["accordion-header-label-icon"]}),D]}),(0,l.jsx)(t.ZP,{className:g["accordion-header-description"],variant:T?"title-small":"body",children:K})]}),(0,l.jsx)("div",{children:(0,l.jsx)(v.Z,{severity:J})}),(0,l.jsx)("div",{children:X&&(0,l.jsxs)(l.Fragment,{children:[$.indexOf(S)>=0?(0,l.jsx)(c.Z,{color:"black"}):(0,l.jsx)(_.Z,{icon:u.Z,className:g["icon-check"],size:28}),q&&(0,l.jsx)("span",{children:M("Auto-fix","jetpack-protect")})]})}),(0,l.jsx)("div",{className:g["accordion-header-button"],children:(0,l.jsx)(_.Z,{icon:T?h.Z:P.Z,size:38})})]}),(0,l.jsx)("div",{className:Y,"aria-hidden":T?"false":"true",children:V})]})};w.displayName="PaidAccordionItem";const I=A=>{let{children:S}=A;const[K,D]=(0,s.useState)();return(0,l.jsx)(W.Provider,{value:{open:K,setOpen:D},children:(0,l.jsx)("div",{className:g.accordion,children:S})})};I.displayName="PaidAccordion",I.__docgenInfo={description:"",methods:[],displayName:"PaidAccordion"};const Z=I;w.__docgenInfo={description:"",methods:[],displayName:"PaidAccordionItem"};var ee=`import { Text } from '@automattic/jetpack-components';
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
`,te={Default:{startLoc:{col:23,line:19},endLoc:{col:20,line:90},startBody:{col:23,line:19},endBody:{col:20,line:90}}};const z={title:"Plugins/Protect/Paid Accordion",component:Z,parameters:{storySource:{source:`import { Text } from '@automattic/jetpack-components';
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
};`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:20,line:90},startBody:{col:23,line:19},endBody:{col:20,line:90}}}},layout:"centered"},decorators:[A=>(0,l.jsx)("div",{style:{width:800},children:(0,l.jsx)(A,{})})]},y=A=>(0,l.jsxs)(Z,{children:[(0,l.jsxs)(w,{id:"wordpress",label:"WordPress (5.9-5.9.1)",title:"Contributor+ Stored Cross-Site Scripting",icon:r.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,l.jsxs)(w,{id:"jetpack",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:n.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,l.jsxs)(w,{id:"jetpack-2",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:n.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,l.jsxs)(w,{id:"jetpack-3",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:n.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,l.jsxs)(w,{id:"jetpack-4",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:n.Z,children:[(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,l.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,l.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,l.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]})]});y.displayName="Default",y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`args => <PaidAccordion>
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
    </PaidAccordion>`,...(N=(B=y.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const H=["Default"];y.__docgenInfo={description:"",methods:[],displayName:"Default"}},"../components/components/layout/use-breakpoint-match/index.ts":(a,i,e)=>{"use strict";e.d(i,{Z:()=>h});var t=e("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(r),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),o={};o.insert="head",o.singleton=!1;var c=n()(s.Z,o);const m=s.Z.locals||{},d=["sm","md","lg"],_=(P,b,x)=>{const p=d.indexOf(P),v=p+1,j=b.includes("=");let f=[];return b.startsWith("<")&&(f=d.slice(0,j?v:p)),b.startsWith(">")&&(f=d.slice(j?p:v)),f!=null&&f.length?f.some(E=>x[E]):x[P]},h=(P,b)=>{const x=Array.isArray(P)?P:[P],p=Array.isArray(b)?b:[b],[v,j,f]=d,E=(0,t.Z)(m[v]),C=(0,t.Z)(m[j]),R=(0,t.Z)(m[f]),g={sm:E,md:C,lg:R};return x.map((l,M)=>{const W=p[M];return W?_(l,W,g):g[l]})}},"../components/components/spinner/index.jsx":(a,i,e)=>{"use strict";e.d(i,{Z:()=>P});var t=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),r=e.n(t),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(s),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),m={};m.insert="head",m.singleton=!1;var d=o()(c.Z,m);const _=c.Z.locals||{};var u=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=b=>{const x=b.className+" jp-components-spinner",p={width:b.size,height:b.size,fontSize:b.size,borderTopColor:b.color},v={borderTopColor:b.color,borderRightColor:b.color};return(0,u.jsx)("div",{className:x,children:(0,u.jsx)("div",{className:"jp-components-spinner__outer",style:p,children:(0,u.jsx)("div",{className:"jp-components-spinner__inner",style:v})})})};h.displayName="Spinner",h.propTypes={color:r().string,className:r().string,size:r().number},h.defaultProps={color:"#FFFFFF",className:"",size:20},h.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}};const P=h},"../../plugins/protect/src/js/components/severity/index.jsx":(a,i,e)=>{"use strict";e.d(i,{Z:()=>b});var t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(r),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss"),o={};o.insert="head",o.singleton=!1;var c=n()(s.Z,o);const m=s.Z.locals||{};var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=t.__,u=x=>x>=5?"is-critical":x>=3&&x<5?"is-high":"is-low",h=x=>{const p=_("Critical","jetpack-protect"),v=_("High","jetpack-protect"),j=_("Low","jetpack-protect");return x>=5?p:x>=3&&x<5?v:j},P=x=>{let{severity:p}=x;return(0,d.jsx)("div",{className:`${m["threat-severity-badge"]} ${m[u(p)]}`,children:h(p)})};P.displayName="ThreatSeverityBadge",P.__docgenInfo={description:"",methods:[],displayName:"ThreatSeverityBadge"};const b=P},"../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js":a=>{"use strict";a.exports=function(d){return typeof d=="string"?e(d):i(d)};function i(d){return!d||typeof d!="object"||r(d)||n(d)?d:t(d)?c(d,i):m(o(d),function(_,u){var h=e(u);return _[h]=i(d[u]),_},{})}function e(d){return d.replace(/[_.-](\w|$)/g,function(_,u){return u.toUpperCase()})}var t=Array.isArray||function(d){return Object.prototype.toString.call(d)==="[object Array]"},r=function(d){return Object.prototype.toString.call(d)==="[object Date]"},n=function(d){return Object.prototype.toString.call(d)==="[object RegExp]"},s=Object.prototype.hasOwnProperty,o=Object.keys||function(d){var _=[];for(var u in d)s.call(d,u)&&_.push(u);return _};function c(d,_){if(d.map)return d.map(_);for(var u=[],h=0;h<d.length;h++)u.push(_(d[h],h));return u}function m(d,_,u){if(d.reduce)return d.reduce(_,u);for(var h=0;h<d.length;h++)u=_(u,d[h],h);return u}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(a,i)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var r={}.hasOwnProperty,n="[native code]";function s(){for(var o=[],c=0;c<arguments.length;c++){var m=arguments[c];if(m){var d=typeof m;if(d==="string"||d==="number")o.push(m);else if(Array.isArray(m)){if(m.length){var _=s.apply(null,m);_&&o.push(_)}}else if(d==="object"){if(m.toString!==Object.prototype.toString&&!m.toString.toString().includes("[native code]")){o.push(m.toString());continue}for(var u in m)r.call(m,u)&&m[u]&&o.push(u)}}}return o.join(" ")}a.exports?(s.default=s,a.exports=s):(e=[],t=function(){return s}.apply(i,e),t!==void 0&&(a.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(a,i,e)=>{"use strict";e.d(i,{Z:()=>c});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(t),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(n),o=s()(r());o.push([a.id,"",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const c=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(a,i,e)=>{"use strict";e.d(i,{Z:()=>c});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(t),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(n),o=s()(r());o.push([a.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const c=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss":(a,i,e)=>{"use strict";e.d(i,{Z:()=>c});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(t),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(n),o=s()(r());o.push([a.id,".NA4kI3fa4uwjBTGpt8UD{display:inline-block;width:100%;border-radius:var(--jp-border-radius);border:1px solid var(--jp-gray)}.NA4kI3fa4uwjBTGpt8UD>*:not(:last-child){border-bottom:1px solid var(--jp-gray)}.GIZwBlRJvZP2PaSr88T2{background-color:var(--jp-white)}._0yrw_XKvISg1aOziRkyw{margin:0;display:grid;grid-template-columns:repeat(9, 1fr);cursor:pointer;box-sizing:border-box;background:none;border:none;width:100%;align-items:center;outline-color:var(--jp-black);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);text-align:start}._0yrw_XKvISg1aOziRkyw>:first-of-type{grid-column:1/7}._0yrw_XKvISg1aOziRkyw>:last-of-type{grid-column:9}._0yrw_XKvISg1aOziRkyw>:not(:first-child){margin:auto}._0yrw_XKvISg1aOziRkyw:hover{background:var(--jp-gray-0)}.FjuHpgfVTecgiAhqqfw1{display:flex;align-items:center;font-size:var(--font-body-small);font-weight:normal}.gT_N0hPdjpwwK1nwJZEw{margin-right:var(--spacing-base)}.GtiTquGPXSf0jgFsKeSf{font-weight:600;margin-left:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.HbVrG5Wjn8LZQVJXRUiT{align-items:center}.R34WryNVdEOBR0Gn7jah{transform-origin:top center;overflow:hidden}.cHvNO4WbRaFpr2aWqF_7{transition:all .1s;max-height:0;padding:0;transform:scaleY(0)}.Aq3jxnJodyk48Lf1Egsi{transition:max-height .3s,transform .2s;padding:calc(var(--spacing-base)*4) calc(var(--spacing-base)*7);max-height:1000px;transform:scaleY(1)}.L31iwjpSlfBZtW2CTbrV{fill:var(--jp-green-40)}@media(max-width: 599px){._0yrw_XKvISg1aOziRkyw{display:grid;grid-auto-rows:minmax(auto, auto)}._0yrw_XKvISg1aOziRkyw>:first-child{grid-column:1/8;grid-row:1}._0yrw_XKvISg1aOziRkyw>:nth-child(2){padding-left:calc(var(--spacing-base)*4);grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3){grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3) span{position:absolute;margin-top:var(--spacing-base)}._0yrw_XKvISg1aOziRkyw>:last-child{grid-column:10;grid-row:1/3}}",""]),o.locals={accordion:"NA4kI3fa4uwjBTGpt8UD","accordion-item":"GIZwBlRJvZP2PaSr88T2","accordion-header":"_0yrw_XKvISg1aOziRkyw","accordion-header-label":"FjuHpgfVTecgiAhqqfw1","accordion-header-label-icon":"gT_N0hPdjpwwK1nwJZEw","accordion-header-description":"GtiTquGPXSf0jgFsKeSf","accordion-header-button":"HbVrG5Wjn8LZQVJXRUiT","accordion-body":"R34WryNVdEOBR0Gn7jah","accordion-body-close":"cHvNO4WbRaFpr2aWqF_7","accordion-body-open":"Aq3jxnJodyk48Lf1Egsi","icon-check":"L31iwjpSlfBZtW2CTbrV"};const c=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss":(a,i,e)=>{"use strict";e.d(i,{Z:()=>c});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(t),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(n),o=s()(r());o.push([a.id,".zxGKVKzezupGHaXbqzvL{border-radius:32px;flex-shrink:0;font-size:12px;font-style:normal;font-weight:600;line-height:16px;padding:calc(var(--spacing-base)/2);position:relative;text-align:center;width:60px}.ON74ROKby9KFKGzUM6hQ{background:var(--jp-red-5);color:var(--jp-red-60)}.qPVsjV8TZ_ZtYOqYJTUw{background:var(--jp-yellow-5);color:var(--jp-yellow-60)}._DIlMqD5CZwpdLHylkey{background:var(--jp-gray-0);color:var(--jp-gray-50)}",""]),o.locals={"threat-severity-badge":"zxGKVKzezupGHaXbqzvL","is-critical":"ON74ROKby9KFKGzUM6hQ","is-high":"qPVsjV8TZ_ZtYOqYJTUw","is-low":"_DIlMqD5CZwpdLHylkey"};const c=o},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(a,i,e)=>{"use strict";e.d(i,{P:()=>r});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function t(n){return Object.prototype.toString.call(n)==="[object Object]"}function r(n){var s,o;return t(n)===!1?!1:(s=n.constructor,s===void 0?!0:(o=s.prototype,!(t(o)===!1||o.hasOwnProperty("isPrototypeOf")===!1)))}}}]);})();
