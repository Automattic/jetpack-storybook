(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2462],{"../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(_,i,e)=>{"use strict";e.d(i,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r(s){return s&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(s):null}function d(s){const o=(0,t.useMemo)(()=>{const c=r(s);return{subscribe(l){return c?(c.addEventListener("change",l),()=>{c.removeEventListener("change",l)}):()=>{}},getValue(){var l;return(l=c==null?void 0:c.matches)!==null&&l!==void 0?l:!1}}},[s]);return(0,t.useSyncExternalStore)(o.subscribe,o.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+deprecated@3.41.0/node_modules/@wordpress/deprecated/build-module/index.js":(_,i,e)=>{"use strict";e.d(i,{Z:()=>d});var t=e("../../../node_modules/.pnpm/@wordpress+hooks@3.41.0/node_modules/@wordpress/hooks/build-module/index.js");const r=Object.create(null);function d(s,o={}){const{since:c,version:l,alternative:n,plugin:u,link:p,hint:h}=o,P=u?` from ${u}`:"",x=c?` since version ${c}`:"",b=l?` and will be removed${P} in version ${l}`:"",m=n?` Please use ${n} instead.`:"",v=p?` See: ${p}`:"",w=h?` Note: ${h}`:"",g=`${s} is deprecated${x}${b}.${m}${v}${w}`;g in r||((0,t.Kw)("deprecated",s,o,g),console.warn(g),r[g]=!0)}},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js":(_,i,e)=>{"use strict";e.d(i,{Z:()=>d});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({icon:s,size:o=24,...c}){return(0,t.cloneElement)(s,{width:o,height:o,...c})}const d=r},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/check.js":(_,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(r.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(_,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(r.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(_,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(r.y$,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/plugins.js":(_,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(r.y$,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/wordpress.js":(_,i,e)=>{"use strict";e.d(i,{Z:()=>s});var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const s=(0,t.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(r.y$,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.41.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(_,i,e)=>{"use strict";e.d(i,{ZP:()=>d});var t=e("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.41.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function r(s,o){if(s===o)return!0;if(s.length!==o.length)return!1;for(let c=0,l=s.length;c<l;c++)if(s[c]!==o[c])return!1;return!0}function d(s,o){if(s&&o){if(s.constructor===Object&&o.constructor===Object)return(0,t.Z)(s,o);if(Array.isArray(s)&&Array.isArray(o))return r(s,o)}return s===o}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@4.41.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(_,i,e)=>{"use strict";e.d(i,{Z:()=>t});function t(r,d){if(r===d)return!0;const s=Object.keys(r),o=Object.keys(d);if(s.length!==o.length)return!1;let c=0;for(;c<s.length;){const l=s[c],n=r[l];if(n===void 0&&!d.hasOwnProperty(l)||n!==d[l])return!1;c++}return!0}},"../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(_,i,e)=>{"use strict";e.d(i,{Cd:()=>s,G:()=>o,UL:()=>u,Wj:()=>b,mg:()=>n,x1:()=>c,y$:()=>l});var t=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=e.n(t),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=m=>(0,d.createElement)("circle",m),o=m=>(0,d.createElement)("g",m),c=m=>(0,d.createElement)("line",m),l=m=>(0,d.createElement)("path",m),n=m=>(0,d.createElement)("polygon",m),u=m=>(0,d.createElement)("rect",m),p=m=>createElement("defs",m),h=m=>createElement("radialGradient",m),P=m=>createElement("linearGradient",m),x=m=>createElement("stop",m),b=({className:m,isPressed:v,...w})=>{const g={...w,className:r()(m,{"is-pressed":v})||void 0,"aria-hidden":!0,focusable:!1};return(0,d.createElement)("svg",{...g})}},"../../plugins/protect/src/js/components/paid-accordion/stories/index.stories.jsx":(_,i,e)=>{var U,B,N;"use strict";e.r(i),e.d(i,{Default:()=>T,__namedExportsOrder:()=>H,default:()=>z});var t=e("../components/components/text/index.tsx"),r=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/wordpress.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/plugins.js"),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../components/components/layout/use-breakpoint-match/index.ts"),c=e("../components/components/spinner/index.jsx"),l=e("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/check.js"),h=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),P=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),x=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),b=e.n(x),m=e("../../plugins/protect/src/js/state/store.js"),v=e("../../plugins/protect/src/js/components/severity/index.jsx"),w=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(w),E=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss"),C={};C.insert="head",C.singleton=!1;var R=g()(E.Z,C);const j=E.Z.locals||{};var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const I=n.__,W=s.createContext(),f=A=>{let{id:S,title:D,label:K,icon:F,fixable:X,severity:J,children:V,onOpen:O}=A;const k=(0,s.useContext)(W),y=(k==null?void 0:k.open)===S,G=k==null?void 0:k.setOpen,$=(0,l.Z)(L=>L(m.t).getThreatsAreFixing()),Y=b()(j["accordion-body"],{[j["accordion-body-open"]]:y,[j["accordion-body-close"]]:!y}),Q=(0,s.useCallback)(()=>{y||O==null||O(),G(L=>L===S?null:S)},[y,O,G,S]),[q]=(0,o.Z)(["sm","lg"],[null,"<"]);return(0,a.jsxs)("div",{className:j["accordion-item"],children:[(0,a.jsxs)("button",{className:j["accordion-header"],onClick:Q,children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)(t.ZP,{className:j["accordion-header-label"],mb:1,children:[(0,a.jsx)(u.Z,{icon:F,className:j["accordion-header-label-icon"]}),K]}),(0,a.jsx)(t.ZP,{className:j["accordion-header-description"],variant:y?"title-small":"body",children:D})]}),(0,a.jsx)("div",{children:(0,a.jsx)(v.Z,{severity:J})}),(0,a.jsx)("div",{children:X&&(0,a.jsxs)(a.Fragment,{children:[$.indexOf(S)>=0?(0,a.jsx)(c.Z,{color:"black"}):(0,a.jsx)(u.Z,{icon:p.Z,className:j["icon-check"],size:28}),q&&(0,a.jsx)("span",{children:I("Auto-fix","jetpack-protect")})]})}),(0,a.jsx)("div",{className:j["accordion-header-button"],children:(0,a.jsx)(u.Z,{icon:y?h.Z:P.Z,size:38})})]}),(0,a.jsx)("div",{className:Y,"aria-hidden":y?"false":"true",children:V})]})};f.displayName="PaidAccordionItem";const M=A=>{let{children:S}=A;const[D,K]=(0,s.useState)();return(0,a.jsx)(W.Provider,{value:{open:D,setOpen:K},children:(0,a.jsx)("div",{className:j.accordion,children:S})})};M.displayName="PaidAccordion",M.__docgenInfo={description:"",methods:[],displayName:"PaidAccordion"};const Z=M;f.__docgenInfo={description:"",methods:[],displayName:"PaidAccordionItem"};var ee=`import { Text } from '@automattic/jetpack-components';
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
};`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:20,line:90},startBody:{col:23,line:19},endBody:{col:20,line:90}}}},layout:"centered"},decorators:[A=>(0,a.jsx)("div",{style:{width:800},children:(0,a.jsx)(A,{})})]},T=A=>(0,a.jsxs)(Z,{children:[(0,a.jsxs)(f,{id:"wordpress",label:"WordPress (5.9-5.9.1)",title:"Contributor+ Stored Cross-Site Scripting",icon:r.Z,children:[(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,a.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,a.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,a.jsxs)(f,{id:"jetpack",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:d.Z,children:[(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,a.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,a.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,a.jsxs)(f,{id:"jetpack-2",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:d.Z,children:[(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,a.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,a.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,a.jsxs)(f,{id:"jetpack-3",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:d.Z,children:[(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,a.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,a.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,a.jsxs)(f,{id:"jetpack-4",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:d.Z,children:[(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,a.jsxs)(t.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,a.jsx)(t.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,a.jsx)(t.ZP,{children:"Update to WordPress 5.9.2"})]})]});T.displayName="Default",T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`args => <PaidAccordion>
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
    </PaidAccordion>`,...(N=(B=T.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const H=["Default"];T.__docgenInfo={description:"",methods:[],displayName:"Default"}},"../components/components/layout/use-breakpoint-match/index.ts":(_,i,e)=>{"use strict";e.d(i,{Z:()=>h});var t=e("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(r),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),o={};o.insert="head",o.singleton=!1;var c=d()(s.Z,o);const l=s.Z.locals||{},n=["sm","md","lg"],u=(P,x,b)=>{const m=n.indexOf(P),v=m+1,w=x.includes("=");let g=[];return x.startsWith("<")&&(g=n.slice(0,w?v:m)),x.startsWith(">")&&(g=n.slice(w?m:v)),g!=null&&g.length?g.some(E=>b[E]):b[P]},h=(P,x)=>{const b=Array.isArray(P)?P:[P],m=Array.isArray(x)?x:[x],[v,w,g]=n,E=(0,t.Z)(l[v]),C=(0,t.Z)(l[w]),R=(0,t.Z)(l[g]),j={sm:E,md:C,lg:R};return b.map((a,I)=>{const W=m[I];return W?u(a,W,j):j[a]})}},"../components/components/spinner/index.jsx":(_,i,e)=>{"use strict";e.d(i,{Z:()=>P});var t=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),r=e.n(t),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(s),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),l={};l.insert="head",l.singleton=!1;var n=o()(c.Z,l);const u=c.Z.locals||{};var p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=x=>{const b=x.className+" jp-components-spinner",m={width:x.size,height:x.size,fontSize:x.size,borderTopColor:x.color},v={borderTopColor:x.color,borderRightColor:x.color};return(0,p.jsx)("div",{className:b,children:(0,p.jsx)("div",{className:"jp-components-spinner__outer",style:m,children:(0,p.jsx)("div",{className:"jp-components-spinner__inner",style:v})})})};h.displayName="Spinner",h.propTypes={color:r().string,className:r().string,size:r().number},h.defaultProps={color:"#FFFFFF",className:"",size:20},h.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}};const P=h},"../../plugins/protect/src/js/components/severity/index.jsx":(_,i,e)=>{"use strict";e.d(i,{Z:()=>x});var t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(r),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss"),o={};o.insert="head",o.singleton=!1;var c=d()(s.Z,o);const l=s.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const u=t.__,p=b=>b>=5?"is-critical":b>=3&&b<5?"is-high":"is-low",h=b=>{const m=u("Critical","jetpack-protect"),v=u("High","jetpack-protect"),w=u("Low","jetpack-protect");return b>=5?m:b>=3&&b<5?v:w},P=b=>{let{severity:m}=b;return(0,n.jsx)("div",{className:`${l["threat-severity-badge"]} ${l[p(m)]}`,children:h(m)})};P.displayName="ThreatSeverityBadge",P.__docgenInfo={description:"",methods:[],displayName:"ThreatSeverityBadge"};const x=P},"../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js":_=>{"use strict";_.exports=function(n){return typeof n=="string"?e(n):i(n)};function i(n){return!n||typeof n!="object"||r(n)||d(n)?n:t(n)?c(n,i):l(o(n),function(u,p){var h=e(p);return u[h]=i(n[p]),u},{})}function e(n){return n.replace(/[_.-](\w|$)/g,function(u,p){return p.toUpperCase()})}var t=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"},r=function(n){return Object.prototype.toString.call(n)==="[object Date]"},d=function(n){return Object.prototype.toString.call(n)==="[object RegExp]"},s=Object.prototype.hasOwnProperty,o=Object.keys||function(n){var u=[];for(var p in n)s.call(n,p)&&u.push(p);return u};function c(n,u){if(n.map)return n.map(u);for(var p=[],h=0;h<n.length;h++)p.push(u(n[h],h));return p}function l(n,u,p){if(n.reduce)return n.reduce(u,p);for(var h=0;h<n.length;h++)p=u(p,n[h],h);return p}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(_,i)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var r={}.hasOwnProperty,d="[native code]";function s(){for(var o=[],c=0;c<arguments.length;c++){var l=arguments[c];if(l){var n=typeof l;if(n==="string"||n==="number")o.push(l);else if(Array.isArray(l)){if(l.length){var u=s.apply(null,l);u&&o.push(u)}}else if(n==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){o.push(l.toString());continue}for(var p in l)r.call(l,p)&&l[p]&&o.push(p)}}}return o.join(" ")}_.exports?(s.default=s,_.exports=s):(e=[],t=function(){return s}.apply(i,e),t!==void 0&&(_.exports=t))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(_,i,e)=>{"use strict";e.d(i,{Z:()=>c});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),o=s()(r());o.push([_.id,"",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const c=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(_,i,e)=>{"use strict";e.d(i,{Z:()=>c});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),o=s()(r());o.push([_.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const c=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss":(_,i,e)=>{"use strict";e.d(i,{Z:()=>c});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),o=s()(r());o.push([_.id,".NA4kI3fa4uwjBTGpt8UD{display:inline-block;width:100%;border-radius:var(--jp-border-radius);border:1px solid var(--jp-gray)}.NA4kI3fa4uwjBTGpt8UD>*:not(:last-child){border-bottom:1px solid var(--jp-gray)}.GIZwBlRJvZP2PaSr88T2{background-color:var(--jp-white)}._0yrw_XKvISg1aOziRkyw{margin:0;display:grid;grid-template-columns:repeat(9, 1fr);cursor:pointer;box-sizing:border-box;background:none;border:none;width:100%;align-items:center;outline-color:var(--jp-black);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);text-align:start}._0yrw_XKvISg1aOziRkyw>:first-of-type{grid-column:1/7}._0yrw_XKvISg1aOziRkyw>:last-of-type{grid-column:9}._0yrw_XKvISg1aOziRkyw>:not(:first-child){margin:auto}._0yrw_XKvISg1aOziRkyw:hover{background:var(--jp-gray-0)}.FjuHpgfVTecgiAhqqfw1{display:flex;align-items:center;font-size:var(--font-body-small);font-weight:normal}.gT_N0hPdjpwwK1nwJZEw{margin-right:var(--spacing-base)}.GtiTquGPXSf0jgFsKeSf{font-weight:600;margin-left:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.HbVrG5Wjn8LZQVJXRUiT{align-items:center}.R34WryNVdEOBR0Gn7jah{transform-origin:top center;overflow:hidden}.cHvNO4WbRaFpr2aWqF_7{transition:all .1s;max-height:0;padding:0;transform:scaleY(0)}.Aq3jxnJodyk48Lf1Egsi{transition:max-height .3s,transform .2s;padding:calc(var(--spacing-base)*4) calc(var(--spacing-base)*7);max-height:1000px;transform:scaleY(1)}.L31iwjpSlfBZtW2CTbrV{fill:var(--jp-green-40)}@media(max-width: 599px){._0yrw_XKvISg1aOziRkyw{display:grid;grid-auto-rows:minmax(auto, auto)}._0yrw_XKvISg1aOziRkyw>:first-child{grid-column:1/8;grid-row:1}._0yrw_XKvISg1aOziRkyw>:nth-child(2){padding-left:calc(var(--spacing-base)*4);grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3){grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3) span{position:absolute;margin-top:var(--spacing-base)}._0yrw_XKvISg1aOziRkyw>:last-child{grid-column:10;grid-row:1/3}}",""]),o.locals={accordion:"NA4kI3fa4uwjBTGpt8UD","accordion-item":"GIZwBlRJvZP2PaSr88T2","accordion-header":"_0yrw_XKvISg1aOziRkyw","accordion-header-label":"FjuHpgfVTecgiAhqqfw1","accordion-header-label-icon":"gT_N0hPdjpwwK1nwJZEw","accordion-header-description":"GtiTquGPXSf0jgFsKeSf","accordion-header-button":"HbVrG5Wjn8LZQVJXRUiT","accordion-body":"R34WryNVdEOBR0Gn7jah","accordion-body-close":"cHvNO4WbRaFpr2aWqF_7","accordion-body-open":"Aq3jxnJodyk48Lf1Egsi","icon-check":"L31iwjpSlfBZtW2CTbrV"};const c=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss":(_,i,e)=>{"use strict";e.d(i,{Z:()=>c});var t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=e.n(t),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(d),o=s()(r());o.push([_.id,".zxGKVKzezupGHaXbqzvL{border-radius:32px;flex-shrink:0;font-size:12px;font-style:normal;font-weight:600;line-height:16px;padding:calc(var(--spacing-base)/2);position:relative;text-align:center;width:60px}.ON74ROKby9KFKGzUM6hQ{background:var(--jp-red-5);color:var(--jp-red-60)}.qPVsjV8TZ_ZtYOqYJTUw{background:var(--jp-yellow-5);color:var(--jp-yellow-60)}._DIlMqD5CZwpdLHylkey{background:var(--jp-gray-0);color:var(--jp-gray-50)}",""]),o.locals={"threat-severity-badge":"zxGKVKzezupGHaXbqzvL","is-critical":"ON74ROKby9KFKGzUM6hQ","is-high":"qPVsjV8TZ_ZtYOqYJTUw","is-low":"_DIlMqD5CZwpdLHylkey"};const c=o},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(_,i,e)=>{"use strict";e.d(i,{P:()=>r});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function t(d){return Object.prototype.toString.call(d)==="[object Object]"}function r(d){var s,o;return t(d)===!1?!1:(s=d.constructor,s===void 0?!0:(o=s.prototype,!(t(o)===!1||o.hasOwnProperty("isPrototypeOf")===!1)))}}}]);})();
