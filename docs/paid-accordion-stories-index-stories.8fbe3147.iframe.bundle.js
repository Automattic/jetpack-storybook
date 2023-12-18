(()=>{var Fe=Object.defineProperty;var ze=(S,i,t)=>i in S?Fe(S,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):S[i]=t;var Se=(S,i,t)=>(ze(S,typeof i!="symbol"?i+"":i,t),t);(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2462],{"../../plugins/protect/src/js/components/paid-accordion/stories/index.stories.jsx":(S,i,t)=>{var q,z,ee;"use strict";t.r(i),t.d(i,{Default:()=>W,__namedExportsOrder:()=>Q,default:()=>Y});var o=t("../components/components/text/index.tsx"),c=t("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/wordpress.js"),a=t("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plugins.js"),r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../components/components/layout/use-breakpoint-match/index.ts"),u=t("../components/components/spinner/index.jsx"),p=t("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),n=t("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),_=t("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),h=t("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),g=t("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),f=t("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),P=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),T=t.n(P),m=t("../../plugins/protect/src/js/state/store.js"),E=t("../../plugins/protect/src/js/components/severity/index.jsx"),y=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=t.n(y),k=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss"),M={};M.insert="head",M.singleton=!1;var B=b()(k.Z,M);const v=k.Z.locals||{};var d=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const U=n.__,D=r.createContext(),I=({id:w,title:R,label:Z,icon:de,fixable:H,severity:te,children:V,onOpen:L})=>{const C=(0,r.useContext)(D),O=(C==null?void 0:C.open)===w,se=C==null?void 0:C.setOpen,ie=(0,p.Z)(J=>J(m.t).getThreatsAreFixing()),le=T()(v["accordion-body"],{[v["accordion-body-open"]]:O,[v["accordion-body-close"]]:!O}),G=(0,r.useCallback)(()=>{O||L==null||L(),se(J=>J===w?null:w)},[O,L,se,w]),[X]=(0,l.Z)(["sm","lg"],[null,"<"]);return(0,d.jsxs)("div",{className:v["accordion-item"],children:[(0,d.jsxs)("button",{className:v["accordion-header"],onClick:G,children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)(o.ZP,{className:v["accordion-header-label"],mb:1,children:[(0,d.jsx)(_.Z,{icon:de,className:v["accordion-header-label-icon"]}),Z]}),(0,d.jsx)(o.ZP,{className:v["accordion-header-description"],variant:O?"title-small":"body",children:R})]}),(0,d.jsx)("div",{children:(0,d.jsx)(E.Z,{severity:te})}),(0,d.jsx)("div",{children:H&&(0,d.jsxs)(d.Fragment,{children:[ie.indexOf(w)>=0?(0,d.jsx)(u.Z,{color:"black"}):(0,d.jsx)(_.Z,{icon:h.Z,className:v["icon-check"],size:28}),X&&(0,d.jsx)("span",{children:U("Auto-fix","jetpack-protect")})]})}),(0,d.jsx)("div",{className:v["accordion-header-button"],children:(0,d.jsx)(_.Z,{icon:O?g.Z:f.Z,size:38})})]}),(0,d.jsx)("div",{className:le,"aria-hidden":O?"false":"true",children:V})]})};I.displayName="PaidAccordionItem";const K=({children:w})=>{const[R,Z]=(0,r.useState)();return(0,d.jsx)(D.Provider,{value:{open:R,setOpen:Z},children:(0,d.jsx)("div",{className:v.accordion,children:w})})};K.displayName="PaidAccordion";const F=K;I.__docgenInfo={description:"",methods:[],displayName:"PaidAccordionItem"},K.__docgenInfo={description:"",methods:[],displayName:"PaidAccordion"};var re=`import { Text } from '@automattic/jetpack-components';
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
`,ae={Default:{startLoc:{col:23,line:22},endLoc:{col:1,line:120},startBody:{col:23,line:22},endBody:{col:1,line:120}}};const Y={title:"Plugins/Protect/Paid Accordion",component:F,parameters:{storySource:{source:`import { Text } from '@automattic/jetpack-components';
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
`,locationsMap:{default:{startLoc:{col:23,line:22},endLoc:{col:1,line:120},startBody:{col:23,line:22},endBody:{col:1,line:120}}}},layout:"centered"},decorators:[w=>(0,d.jsx)("div",{style:{width:800},children:(0,d.jsx)(w,{})})]},W=w=>(0,d.jsxs)(F,{children:[(0,d.jsxs)(I,{id:"wordpress",label:"WordPress (5.9-5.9.1)",title:"Contributor+ Stored Cross-Site Scripting",icon:c.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,d.jsxs)(I,{id:"jetpack",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,d.jsxs)(I,{id:"jetpack-2",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,d.jsxs)(I,{id:"jetpack-3",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,d.jsxs)(I,{id:"jetpack-4",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,d.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,d.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,d.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]})]});W.displayName="Default",W.parameters={...W.parameters,docs:{...(q=W.parameters)==null?void 0:q.docs,source:{originalSource:`args => <PaidAccordion>
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
    </PaidAccordion>`,...(ee=(z=W.parameters)==null?void 0:z.docs)==null?void 0:ee.source}}};const Q=["Default"]},"../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(S,i,t)=>{"use strict";t.d(i,{Z:()=>a});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function c(r){return r&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(r):null}function a(r){const l=(0,o.useMemo)(()=>{const u=c(r);return{subscribe(p){var n;return u?((n=u.addEventListener)==null||n.call(u,"change",p),()=>{var _;(_=u.removeEventListener)==null||_.call(u,"change",p)}):()=>{}},getValue(){var p;return(p=u==null?void 0:u.matches)!==null&&p!==void 0?p:!1}}},[r]);return(0,o.useSyncExternalStore)(l.subscribe,l.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+deprecated@3.47.0/node_modules/@wordpress/deprecated/build-module/index.js":(S,i,t)=>{"use strict";t.d(i,{Z:()=>a});var o=t("../../../node_modules/.pnpm/@wordpress+hooks@3.47.0/node_modules/@wordpress/hooks/build-module/index.js");const c=Object.create(null);function a(r,l={}){const{since:u,version:p,alternative:n,plugin:_,link:h,hint:g}=l,f=_?` from ${_}`:"",P=u?` since version ${u}`:"",T=p?` and will be removed${f} in version ${p}`:"",m=n?` Please use ${n} instead.`:"",E=h?` See: ${h}`:"",y=g?` Note: ${g}`:"",b=`${r} is deprecated${P}${T}.${m}${E}${y}`;b in c||((0,o.Kw)("deprecated",r,l,b),console.warn(b),c[b]=!0)}},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(S,i,t)=>{"use strict";t.d(i,{Z:()=>a});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function c({icon:r,size:l=24,...u},p){return(0,o.cloneElement)(r,{width:l,height:l,...u,ref:p})}const a=(0,o.forwardRef)(c)},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(S,i,t)=>{"use strict";t.d(i,{Z:()=>r});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(c.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(S,i,t)=>{"use strict";t.d(i,{Z:()=>r});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(c.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(c.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(S,i,t)=>{"use strict";t.d(i,{Z:()=>r});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(c.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(c.y$,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plugins.js":(S,i,t)=>{"use strict";t.d(i,{Z:()=>r});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(c.y$,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/wordpress.js":(S,i,t)=>{"use strict";t.d(i,{Z:()=>r});var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,o.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,o.createElement)(c.y$,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(S,i,t)=>{"use strict";t.d(i,{Cd:()=>r,G:()=>l,UL:()=>_,Wj:()=>T,mg:()=>n,x1:()=>u,y$:()=>p});var o=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=t.n(o),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const r=m=>(0,a.createElement)("circle",m),l=m=>(0,a.createElement)("g",m),u=m=>(0,a.createElement)("line",m),p=m=>(0,a.createElement)("path",m),n=m=>(0,a.createElement)("polygon",m),_=m=>(0,a.createElement)("rect",m),h=m=>createElement("defs",m),g=m=>createElement("radialGradient",m),f=m=>createElement("linearGradient",m),P=m=>createElement("stop",m),T=(0,a.forwardRef)(({className:m,isPressed:E,...y},b)=>{const k={...y,className:c()(m,{"is-pressed":E})||void 0,"aria-hidden":!0,focusable:!1};return(0,a.createElement)("svg",{...k,ref:b})});T.displayName="SVG"},"../components/components/spinner/index.jsx":(S,i,t)=>{"use strict";t.d(i,{Z:()=>f});var o=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),c=t.n(o),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(r),u=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),p={};p.insert="head",p.singleton=!1;var n=l()(u.Z,p);const _=u.Z.locals||{};var h=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const g=P=>{const T=P.className+" jp-components-spinner",m={width:P.size,height:P.size,fontSize:P.size,borderTopColor:P.color},E={borderTopColor:P.color,borderRightColor:P.color};return(0,h.jsx)("div",{className:T,children:(0,h.jsx)("div",{className:"jp-components-spinner__outer",style:m,children:(0,h.jsx)("div",{className:"jp-components-spinner__inner",style:E})})})};g.displayName="Spinner",g.propTypes={color:c().string,className:c().string,size:c().number},g.defaultProps={color:"#FFFFFF",className:"",size:20};const f=g;g.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}}},"../../plugins/protect/src/js/components/severity/index.jsx":(S,i,t)=>{"use strict";t.d(i,{Z:()=>P});var o=t("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js"),c=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=t.n(c),r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss"),l={};l.insert="head",l.singleton=!1;var u=a()(r.Z,l);const p=r.Z.locals||{};var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=o.__,h=T=>T>=5?"is-critical":T>=3&&T<5?"is-high":"is-low",g=T=>{const m=_("Critical","jetpack-protect"),E=_("High","jetpack-protect"),y=_("Low","jetpack-protect");return T>=5?m:T>=3&&T<5?E:y},f=({severity:T})=>(0,n.jsx)("div",{className:`${p["threat-severity-badge"]} ${p[h(T)]}`,children:g(T)});f.displayName="ThreatSeverityBadge";const P=f;f.__docgenInfo={description:"",methods:[],displayName:"ThreatSeverityBadge"}},"../../plugins/protect/src/js/state/store.js":(S,i,t)=>{"use strict";t.d(i,{t:()=>he,N:()=>Be});var o=t("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),c=t.n(o),a=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.44.0/node_modules/@wordpress/api-fetch/build-module/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+i18n@4.47.0/node_modules/@wordpress/i18n/build-module/index.js");const l=r._n,u=r.__,p="SET_CREDENTIALS_STATE_IS_FETCHING",n="SET_CREDENTIALS_STATE",_="SET_STATUS",h="SET_STATUS_PROGRESS",g="START_SCAN_OPTIMISTICALLY",f="SET_STATUS_IS_FETCHING",P="SET_SCAN_IS_UNAVAILABLE",T="SET_SCAN_IS_ENQUEUING",m="SET_INSTALLED_PLUGINS",E="SET_INSTALLED_THEMES",y="SET_WP_VERSION",b="SET_JETPACK_SCAN",k="SET_PRODUCT_DATA",M="SET_THREAT_IS_UPDATING",B="SET_THREATS_ARE_FIXING",v="SET_MODAL",d="SET_NOTICE",U="CLEAR_NOTICE",D="SET_HAS_REQUIRED_PLAN",I="SET_WAF_IS_SEEN",K="SET_WAF_UPGRADE_IS_SEEN",F="SET_WAF_IS_ENABLED",re="SET_WAF_IS_UPDATING",ae="SET_WAF_IS_TOGGLING",Y="SET_WAF_CONFIG",W="SET_WAF_STATS",Q=e=>({type:_,status:e}),q=e=>({type:h,currentProgress:e}),z=()=>({type:g}),ee=()=>({dispatch:e})=>{(0,a.Z)({path:"jetpack-protect/v1/check-plan",method:"GET"}).then(s=>e(pe(s)))},w=e=>(0,a.Z)({path:`jetpack-protect/v1/status${e?"?hard_refresh=true":""}`,method:"GET"}),R=(e=!1)=>async({dispatch:s})=>(s(V(!0)),await new Promise((x,j)=>w(e).then(Z).then(A=>{s(L(A.status==="unavailable")),s(Q(c()(A))),x(A)}).catch(A=>{j(A)}).finally(()=>{s(V(!1))}))),Z=(e,s=0)=>new Promise((x,j)=>{e.status==="unavailable"&&s<3?w(!0).then(A=>{setTimeout(()=>{Z(A,s+1).then(ne=>x(ne)).catch(ne=>j(ne))},5e3)}).catch(j):x(e)}),de=()=>async({dispatch:e})=>await new Promise((s,x)=>(e(H(!0)),(0,a.Z)({path:"jetpack-protect/v1/check-credentials",method:"POST"}).then(j=>{e(te(j)),s(j)}).catch(j=>{x(j)}).finally(()=>{e(H(!1))}))),H=e=>({type:p,isFetching:e}),te=e=>({type:n,credentials:e}),V=e=>({type:f,status:e}),L=e=>({type:P,status:e}),C=e=>({type:T,isEnqueuing:e}),O=e=>({type:m,plugins:e}),se=e=>({type:E,themes:e}),ie=e=>({type:y,version:e}),le=e=>({type:b,scan:e}),G=(e,s)=>({type:M,payload:{threatId:e,isUpdating:s}}),X=e=>({type:B,threatIds:e}),J=(e,s=()=>{})=>async({dispatch:x})=>(x(G(e,!0)),await new Promise(()=>(0,a.Z)({path:`jetpack-protect/v1/ignore-threat?threat_id=${e}`,method:"POST"}).then(()=>x(R())).then(()=>x(N({type:"success",message:u("Threat ignored","jetpack-protect")}))).catch(()=>x(N({type:"error",message:u("An error ocurred ignoring the threat.","jetpack-protect")}))).finally(()=>{x(G(e,!1)),s()}))),ue=e=>async({dispatch:s})=>{const x=e.reduce((j,A)=>`${j}threat_ids[]=${A}&`,"jetpack-protect/v1/fix-threats-status?");return s(X(e)),await(0,a.Z)({path:x,method:"GET"}).then(async j=>{const A=Object.values(j.threats);if(A.filter(ce=>ce.status==="in_progress").length>0)return await new Promise(()=>{setTimeout(()=>{s(ue(e))},1e3)});if(!A.filter(ce=>ce.status==="fixed").length===e.length)throw"Not all threats could be fixed."}).then(()=>{s(R()),s(N({type:"success",message:(0,r.gB)(l("%s threat was fixed successfully","%s threats were fixed successfully",e.length,"jetpack-protect"),e.length)}))}).catch(()=>{s(N({type:"error",message:u("Not all threats could be fixed. Please contact our support.","jetpack-protect")}))}).finally(()=>{s(X([]))})},ge=(e,s=()=>{})=>async({dispatch:x})=>(e.forEach(j=>{x(G(j,!0))}),await new Promise(()=>(0,a.Z)({path:`jetpack-protect/v1/fix-threats?threat_ids=${e}`,method:"POST",data:{threatIds:e}}).then(()=>x(N({type:"success",message:u("We're hard at work fixing this threat in the background. Please check back shortly.","jetpack-protect")}))).then(()=>{setTimeout(()=>x(ue(e)),1e3)}).catch(()=>x(N({type:"error",message:u("Error fixing threats. Please contact support.","jetpack-protect")}))).finally(()=>{e.forEach(j=>{x(G(j,!1))}),s()}))),Te=(e=()=>{})=>async({dispatch:s})=>(s(C(!0)),await new Promise(()=>(0,a.Z)({path:"jetpack-protect/v1/scan",method:"POST"}).then(()=>{s(z()),setTimeout(()=>s(R(!0)),5e3)}).catch(()=>s(N({type:"error",message:u("An error ocurred enqueuing the scan","jetpack-protect")}))).finally(()=>{s(C(!1)),e()}))),Pe=e=>({type:v,payload:e}),N=e=>({type:d,payload:e}),xe=()=>({type:U}),pe=e=>({type:D,hasRequiredPlan:e}),me={checkCredentials:de,setCredentials:te,setCredentialsIsFetching:H,setStatus:Q,setStatusProgress:q,startScanOptimistically:z,refreshStatus:R,setStatusIsFetching:V,setScanIsEnqueuing:C,setInstalledPlugins:O,setInstalledThemes:se,setwpVersion:ie,setJetpackScan:le,ignoreThreat:J,setModal:Pe,setNotice:N,clearNotice:xe,fixThreats:ge,scan:Te,setThreatsAreFixing:X,refreshPlan:ee,setHasRequiredPlan:pe,setScanIsUnavailable:L,setWafIsEnabled:e=>({type:F,isEnabled:e}),setWafIsSeen:e=>({type:I,isSeen:e}),setWafUpgradeIsSeen:e=>({type:K,upgradeIsSeen:e}),setWafIsUpdating:e=>({type:re,isUpdating:e}),setWafIsToggling:e=>({type:ae,isToggling:e}),setWafConfig:e=>({type:Y,config:e}),setWafStats:e=>({type:W,stats:e})};var _e=t("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js");const fe=(e=null,s)=>{switch(s.type){case n:return s.credentials}return e},be=(e=!1,s)=>{switch(s.type){case p:return s.isFetching}return e},Ee=(e={},s)=>{switch(s.type){case _:return s.status;case h:return{...e,currentProgress:s.currentProgress};case g:return{...e,currentProgress:0,status:"optimistically_scanning"}}return e},ve=(e=!1,s)=>{switch(s.type){case f:return s.status}return e},je=(e=!1,s)=>{switch(s.type){case P:return s.status}return e},ye=(e=!1,s)=>{switch(s.type){case T:return s.isEnqueuing}return e},we=(e={},s)=>{switch(s.type){case m:return s.plugins}return e},Ae=(e={},s)=>{switch(s.type){case E:return s.themes}return e},Ie=(e={},s)=>{switch(s.type){case y:return s.version}return e},Ce=(e={},s)=>{switch(s.type){case b:return s.scan}return e},ke=(e={},s)=>{switch(s.type){case M:return{...e,[s.payload.threatId]:s.payload.isUpdating}}return e},We=(e=[],s)=>{switch(s.type){case B:return s.threatIds}return e},Oe=(e={},s)=>{switch(s.type){case v:return{...e,...s.payload}}return e},Me=(e={},s)=>{switch(s.type){case d:return{...e,...s.payload};case U:return{}}return e},De=(e=!1,s)=>{switch(s.type){case D:return s.hasRequiredPlan}return e},Re={wafSupported:null,bruteForceSupported:null,isSeen:!1,upgradeIsSeen:!1,isEnabled:!1,isUpdating:!1,isToggling:!1,config:void 0,stats:void 0},Ne=(e=Re,s)=>{switch(s.type){case I:return{...e,isSeen:s.isSeen};case K:return{...e,upgradeIsSeen:s.upgradeIsSeen};case F:return{...e,isEnabled:s.isEnabled};case Y:return{...e,config:s.config};case W:return{...e,stats:s.stats};case re:return{...e,isUpdating:s.isUpdating};case ae:return{...e,isToggling:s.isToggling}}return e},Le=(0,_e.UY)({credentials:fe,credentialsIsFetching:be,status:Ee,statusIsFetching:ve,scanIsUnavailable:je,scanIsEnqueuing:ye,installedPlugins:we,installedThemes:Ae,wpVersion:Ie,jetpackScan:Ce,threatsUpdating:ke,modal:Oe,notice:Me,setThreatsFixing:We,hasRequiredPlan:De,waf:Ne}),Ue={getJetpackScan:{isFulfilled:e=>Object.keys(e==null?void 0:e.jetpackScan).length>0,fulfill:()=>async({dispatch:e})=>{const s=await(0,a.Z)({path:"/my-jetpack/v1/site/products/scan",method:"GET"});e(me.setJetpackScan(s))}}},Ke={getCredentials:e=>e.credentials||null,getCredentialsIsFetching:e=>e.credentialsIsFetching||!1,getInstalledPlugins:e=>e.installedPlugins||{},getInstalledThemes:e=>e.installedThemes||{},getStatus:e=>e.status||{},getStatusIsFetching:e=>e.statusIsFetching||!1,getScanIsUnavailable:e=>e.scanIsUnavailable||!1,getScanIsEnqueuing:e=>e.scanIsEnqueuing||!1,getWpVersion:e=>e.wpVersion||"",getJetpackScan:e=>e.jetpackScan||{},getThreatsUpdating:e=>e.threatsUpdating||{},getModalType:e=>{var s;return((s=e.modal)==null?void 0:s.type)||null},getModalProps:e=>{var s;return((s=e.modal)==null?void 0:s.props)||{}},getNotice:e=>e.notice||null,getThreatsAreFixing:e=>e.threatsAreFixing||[],hasRequiredPlan:e=>e.hasRequiredPlan||!1,getWaf:e=>e.waf};var Ze=t("../../../node_modules/.pnpm/@wordpress+data@9.17.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js");const $=class{static mayBeInit(s,x){$.store===null&&($.store=(0,Ze.Z)(s,x),(0,_e.z2)($.store))}};let oe=$;Se(oe,"store",null);const Ge=oe,he="jetpack-protect";function Be(){Ge.mayBeInit(he,{__experimentalUseThunks:!0,reducer:Le,actions:me,selectors:Ke,resolvers:Ue,initialState:c()(window.jetpackProtectInitialState)||{}})}},"../components/components/layout/use-breakpoint-match/index.ts":(S,i,t)=>{"use strict";t.d(i,{Z:()=>g});var o=t("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),c=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=t.n(c),r=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),l={};l.insert="head",l.singleton=!1;var u=a()(r.Z,l);const p=r.Z.locals||{},n=["sm","md","lg"],_=(f,P,T)=>{const m=n.indexOf(f),E=m+1,y=P.includes("=");let b=[];return P.startsWith("<")&&(b=n.slice(0,y?E:m)),P.startsWith(">")&&(b=n.slice(y?m:E)),b!=null&&b.length?b.some(k=>T[k]):T[f]},g=(f,P)=>{const T=Array.isArray(f)?f:[f],m=Array.isArray(P)?P:[P],[E,y,b]=n,k=(0,o.Z)(p[E]),M=(0,o.Z)(p[y]),B=(0,o.Z)(p[b]),v={sm:k,md:M,lg:B};return T.map((d,U)=>{const D=m[U];return D?_(d,D,v):v[d]})}},"../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js":S=>{"use strict";S.exports=function(n){return typeof n=="string"?t(n):i(n)};function i(n){return!n||typeof n!="object"||c(n)||a(n)?n:o(n)?u(n,i):p(l(n),function(_,h){var g=t(h);return _[g]=i(n[h]),_},{})}function t(n){return n.replace(/[_.-](\w|$)/g,function(_,h){return h.toUpperCase()})}var o=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"},c=function(n){return Object.prototype.toString.call(n)==="[object Date]"},a=function(n){return Object.prototype.toString.call(n)==="[object RegExp]"},r=Object.prototype.hasOwnProperty,l=Object.keys||function(n){var _=[];for(var h in n)r.call(n,h)&&_.push(h);return _};function u(n,_){if(n.map)return n.map(_);for(var h=[],g=0;g<n.length;g++)h.push(_(n[g],g));return h}function p(n,_,h){if(n.reduce)return n.reduce(_,h);for(var g=0;g<n.length;g++)h=_(h,n[g],g);return h}},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(S,i)=>{var t,o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,a="[native code]";function r(){for(var l=[],u=0;u<arguments.length;u++){var p=arguments[u];if(p){var n=typeof p;if(n==="string"||n==="number")l.push(p);else if(Array.isArray(p)){if(p.length){var _=r.apply(null,p);_&&l.push(_)}}else if(n==="object"){if(p.toString!==Object.prototype.toString&&!p.toString.toString().includes("[native code]")){l.push(p.toString());continue}for(var h in p)c.call(p,h)&&p[h]&&l.push(h)}}}return l.join(" ")}S.exports?(r.default=r,S.exports=r):(t=[],o=function(){return r}.apply(i,t),o!==void 0&&(S.exports=o))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(S,i,t)=>{"use strict";t.d(i,{Z:()=>u});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=t.n(o),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),l=r()(c());l.push([S.id,"",""]),l.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const u=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(S,i,t)=>{"use strict";t.d(i,{Z:()=>u});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=t.n(o),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),l=r()(c());l.push([S.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const u=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss":(S,i,t)=>{"use strict";t.d(i,{Z:()=>u});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=t.n(o),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),l=r()(c());l.push([S.id,".NA4kI3fa4uwjBTGpt8UD{display:inline-block;width:100%;border-radius:var(--jp-border-radius);border:1px solid var(--jp-gray)}.NA4kI3fa4uwjBTGpt8UD>*:not(:last-child){border-bottom:1px solid var(--jp-gray)}.GIZwBlRJvZP2PaSr88T2{background-color:var(--jp-white)}._0yrw_XKvISg1aOziRkyw{margin:0;display:grid;grid-template-columns:repeat(9, 1fr);cursor:pointer;box-sizing:border-box;background:none;border:none;width:100%;align-items:center;outline-color:var(--jp-black);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);text-align:start}._0yrw_XKvISg1aOziRkyw>:first-of-type{grid-column:1/7}._0yrw_XKvISg1aOziRkyw>:last-of-type{grid-column:9}._0yrw_XKvISg1aOziRkyw>:not(:first-child){margin:auto}._0yrw_XKvISg1aOziRkyw:hover{background:var(--jp-gray-0)}.FjuHpgfVTecgiAhqqfw1{display:flex;align-items:center;font-size:var(--font-body-small);font-weight:normal}.gT_N0hPdjpwwK1nwJZEw{margin-right:var(--spacing-base)}.GtiTquGPXSf0jgFsKeSf{font-weight:600;margin-left:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.HbVrG5Wjn8LZQVJXRUiT{align-items:center}.R34WryNVdEOBR0Gn7jah{transform-origin:top center;overflow:hidden}.cHvNO4WbRaFpr2aWqF_7{transition:all .1s;max-height:0;padding:0;transform:scaleY(0)}.Aq3jxnJodyk48Lf1Egsi{transition:max-height .3s,transform .2s;padding:calc(var(--spacing-base)*4) calc(var(--spacing-base)*7);max-height:1000px;transform:scaleY(1)}.L31iwjpSlfBZtW2CTbrV{fill:var(--jp-green-40)}@media(max-width: 599px){._0yrw_XKvISg1aOziRkyw{display:grid;grid-auto-rows:minmax(auto, auto)}._0yrw_XKvISg1aOziRkyw>:first-child{grid-column:1/8;grid-row:1}._0yrw_XKvISg1aOziRkyw>:nth-child(2){padding-left:calc(var(--spacing-base)*4);grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3){grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3) span{position:absolute;margin-top:var(--spacing-base)}._0yrw_XKvISg1aOziRkyw>:last-child{grid-column:10;grid-row:1/3}}",""]),l.locals={accordion:"NA4kI3fa4uwjBTGpt8UD","accordion-item":"GIZwBlRJvZP2PaSr88T2","accordion-header":"_0yrw_XKvISg1aOziRkyw","accordion-header-label":"FjuHpgfVTecgiAhqqfw1","accordion-header-label-icon":"gT_N0hPdjpwwK1nwJZEw","accordion-header-description":"GtiTquGPXSf0jgFsKeSf","accordion-header-button":"HbVrG5Wjn8LZQVJXRUiT","accordion-body":"R34WryNVdEOBR0Gn7jah","accordion-body-close":"cHvNO4WbRaFpr2aWqF_7","accordion-body-open":"Aq3jxnJodyk48Lf1Egsi","icon-check":"L31iwjpSlfBZtW2CTbrV"};const u=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss":(S,i,t)=>{"use strict";t.d(i,{Z:()=>u});var o=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=t.n(o),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=t.n(a),l=r()(c());l.push([S.id,".zxGKVKzezupGHaXbqzvL{border-radius:32px;flex-shrink:0;font-size:12px;font-style:normal;font-weight:600;line-height:16px;padding:calc(var(--spacing-base)/2);position:relative;text-align:center;width:60px}.ON74ROKby9KFKGzUM6hQ{background:var(--jp-red-5);color:var(--jp-red-60)}.qPVsjV8TZ_ZtYOqYJTUw{background:var(--jp-yellow-5);color:var(--jp-yellow-60)}._DIlMqD5CZwpdLHylkey{background:var(--jp-gray-0);color:var(--jp-gray-50)}",""]),l.locals={"threat-severity-badge":"zxGKVKzezupGHaXbqzvL","is-critical":"ON74ROKby9KFKGzUM6hQ","is-high":"qPVsjV8TZ_ZtYOqYJTUw","is-low":"_DIlMqD5CZwpdLHylkey"};const u=l},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(S,i,t)=>{"use strict";t.d(i,{P:()=>c});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function o(a){return Object.prototype.toString.call(a)==="[object Object]"}function c(a){var r,l;return o(a)===!1?!1:(r=a.constructor,r===void 0?!0:(l=r.prototype,!(o(l)===!1||l.hasOwnProperty("isPrototypeOf")===!1)))}}}]);})();
