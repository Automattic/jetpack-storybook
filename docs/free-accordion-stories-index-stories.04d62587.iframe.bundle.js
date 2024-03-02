(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1749],{"../../plugins/protect/src/js/components/free-accordion/stories/index.stories.jsx":(c,d,t)=>{var C,k,M;"use strict";t.r(d),t.d(d,{Default:()=>P,__namedExportsOrder:()=>L,default:()=>F});var e=t("../components/components/text/index.tsx"),r=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/wordpress.js"),a=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plugins.js"),n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),m=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),i=t("../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),h=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),x=t.n(h),b=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=t.n(b),w=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/free-accordion/styles.module.scss"),S={};S.insert="head",S.singleton=!1;var j=A()(w.Z,S);const s=w.Z.locals||{};var o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const f=n.createContext(),p=({id:u,title:E,label:y,icon:D,children:U,onOpen:g})=>{const T=(0,n.useContext)(f),_=(T==null?void 0:T.open)===u,I=T==null?void 0:T.setOpen,K=x()(s["accordion-body"],{[s["accordion-body-open"]]:_,[s["accordion-body-close"]]:!_}),O=(0,n.useCallback)(()=>{_||g==null||g(),I(Z=>Z===u?null:u)},[_,g,I,u]);return(0,o.jsxs)("div",{className:s["accordion-item"],children:[(0,o.jsxs)("button",{className:s["accordion-header"],onClick:O,children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)(e.ZP,{className:s["accordion-header-label"],mb:1,children:[(0,o.jsx)(l.Z,{icon:D,className:s["accordion-header-label-icon"]}),y]}),(0,o.jsx)(e.ZP,{className:s["accordion-header-description"],variant:_?"title-small":"body",children:E})]}),(0,o.jsx)("div",{className:s["accordion-header-button"],children:(0,o.jsx)(l.Z,{icon:_?m.Z:i.Z,size:38})})]}),(0,o.jsx)("div",{className:K,"aria-hidden":_?"false":"true",children:U})]})};p.displayName="FreeAccordionItem";const v=({children:u})=>{const[E,y]=(0,n.useState)();return(0,o.jsx)(f.Provider,{value:{open:E,setOpen:y},children:(0,o.jsx)("div",{className:s.accordion,children:u})})};v.displayName="FreeAccordion";const W=v;p.__docgenInfo={description:"",methods:[],displayName:"FreeAccordionItem"},v.__docgenInfo={description:"",methods:[],displayName:"FreeAccordion"};var N=`import { Text } from '@automattic/jetpack-components';
import { wordpress, plugins } from '@wordpress/icons';
import React from 'react';
import FreeAccordion, { FreeAccordionItem } from '..';

export default {
	title: 'Plugins/Protect/Free Accordion',
	component: FreeAccordion,
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
	<FreeAccordion>
		<FreeAccordionItem
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
		</FreeAccordionItem>
		<FreeAccordionItem
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
		</FreeAccordionItem>
		<FreeAccordionItem
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
		</FreeAccordionItem>
		<FreeAccordionItem
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
		</FreeAccordionItem>
		<FreeAccordionItem
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
		</FreeAccordionItem>
	</FreeAccordion>
);
`,B={Default:{startLoc:{col:23,line:22},endLoc:{col:1,line:120},startBody:{col:23,line:22},endBody:{col:1,line:120}}};const F={title:"Plugins/Protect/Free Accordion",component:W,parameters:{storySource:{source:`import { Text } from '@automattic/jetpack-components';
import { wordpress, plugins } from '@wordpress/icons';
import React from 'react';
import FreeAccordion, { FreeAccordionItem } from '..';

export default {
	title: 'Plugins/Protect/Free Accordion',
	component: FreeAccordion,
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
	<FreeAccordion>
		<FreeAccordionItem
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
		</FreeAccordionItem>
		<FreeAccordionItem
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
		</FreeAccordionItem>
		<FreeAccordionItem
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
		</FreeAccordionItem>
		<FreeAccordionItem
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
		</FreeAccordionItem>
		<FreeAccordionItem
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
		</FreeAccordionItem>
	</FreeAccordion>
);
`,locationsMap:{default:{startLoc:{col:23,line:22},endLoc:{col:1,line:120},startBody:{col:23,line:22},endBody:{col:1,line:120}}}},layout:"centered"},decorators:[u=>(0,o.jsx)("div",{style:{width:800},children:(0,o.jsx)(u,{})})]},P=u=>(0,o.jsxs)(W,{children:[(0,o.jsxs)(p,{id:"wordpress",label:"WordPress (5.9-5.9.1)",title:"Contributor+ Stored Cross-Site Scripting",icon:r.Z,children:[(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,o.jsxs)(e.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,o.jsx)(e.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,o.jsxs)(p,{id:"jetpack",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,o.jsxs)(e.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,o.jsx)(e.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,o.jsxs)(p,{id:"jetpack-2",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,o.jsxs)(e.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,o.jsx)(e.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,o.jsxs)(p,{id:"jetpack-3",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,o.jsxs)(e.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,o.jsx)(e.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,o.jsxs)(p,{id:"jetpack-4",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:a.Z,children:[(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,o.jsxs)(e.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,o.jsx)(e.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,o.jsx)(e.ZP,{children:"Update to WordPress 5.9.2"})]})]});P.displayName="Default",P.parameters={...P.parameters,docs:{...(C=P.parameters)==null?void 0:C.docs,source:{originalSource:`args => <FreeAccordion>
        <FreeAccordionItem id="wordpress" label="WordPress (5.9-5.9.1)" title="Contributor+ Stored Cross-Site Scripting" icon={wordpress}>
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
        </FreeAccordionItem>
        <FreeAccordionItem id="jetpack" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
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
        </FreeAccordionItem>
        <FreeAccordionItem id="jetpack-2" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
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
        </FreeAccordionItem>
        <FreeAccordionItem id="jetpack-3" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
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
        </FreeAccordionItem>
        <FreeAccordionItem id="jetpack-4" label="Jetpack < 9.8" title="Carousel Module Non-Published Page/Post Attachment Comment Leak" icon={plugins}>
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
        </FreeAccordionItem>
    </FreeAccordion>`,...(M=(k=P.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const L=["Default"]},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(c,d,t)=>{"use strict";t.d(d,{Z:()=>a});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r({icon:n,size:l=24,...m},i){return(0,e.cloneElement)(n,{width:l,height:l,...m,ref:i})}const a=(0,e.forwardRef)(r)},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(c,d,t)=>{"use strict";t.d(d,{Z:()=>n});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,e.createElement)(r.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(r.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(c,d,t)=>{"use strict";t.d(d,{Z:()=>n});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,e.createElement)(r.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(r.y$,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/plugins.js":(c,d,t)=>{"use strict";t.d(d,{Z:()=>n});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,e.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(r.y$,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/wordpress.js":(c,d,t)=>{"use strict";t.d(d,{Z:()=>n});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,e.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,e.createElement)(r.y$,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(c,d,t)=>{"use strict";t.d(d,{Cd:()=>n,G:()=>l,UL:()=>x,Wj:()=>j,mg:()=>h,y$:()=>i});var e=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),r=t.n(e),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const n=s=>(0,a.createElement)("circle",s),l=s=>(0,a.createElement)("g",s),m=s=>createElement("line",s),i=s=>(0,a.createElement)("path",s),h=s=>(0,a.createElement)("polygon",s),x=s=>(0,a.createElement)("rect",s),b=s=>createElement("defs",s),A=s=>createElement("radialGradient",s),w=s=>createElement("linearGradient",s),S=s=>createElement("stop",s),j=(0,a.forwardRef)(({className:s,isPressed:o,...f},p)=>{const v={...f,className:r()(s,{"is-pressed":o})||void 0,"aria-hidden":!0,focusable:!1};return(0,a.createElement)("svg",{...v,ref:p})});j.displayName="SVG"},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(c,d)=>{var t,e;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var r={}.hasOwnProperty,a="[native code]";function n(){for(var l=[],m=0;m<arguments.length;m++){var i=arguments[m];if(i){var h=typeof i;if(h==="string"||h==="number")l.push(i);else if(Array.isArray(i)){if(i.length){var x=n.apply(null,i);x&&l.push(x)}}else if(h==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){l.push(i.toString());continue}for(var b in i)r.call(i,b)&&i[b]&&l.push(b)}}}return l.join(" ")}c.exports?(n.default=n,c.exports=n):(t=[],e=function(){return n}.apply(d,t),e!==void 0&&(c.exports=e))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/free-accordion/styles.module.scss":(c,d,t)=>{"use strict";t.d(d,{Z:()=>m});var e=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(e),a=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=t.n(a),l=n()(r());l.push([c.id,".YfHjrCMj6lFCYyu7MPdU{border-radius:var(--jp-border-radius);border:1px solid var(--jp-gray)}.YfHjrCMj6lFCYyu7MPdU>*:not(:last-child){border-bottom:1px solid var(--jp-gray)}.qU6h5EEU5dn32WebJHgd{background-color:var(--jp-white)}.ytIjWyDWLPSTnsy5Kenu{margin:0;display:grid;grid-template-columns:repeat(9, 1fr);cursor:pointer;box-sizing:border-box;background:none;border:none;width:100%;align-items:center;outline-color:var(--jp-black);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);text-align:start}.ytIjWyDWLPSTnsy5Kenu>:first-of-type{grid-column:1/8}.ytIjWyDWLPSTnsy5Kenu>:last-of-type{grid-column:9}.ytIjWyDWLPSTnsy5Kenu:hover{background:var(--jp-gray-0)}.lWA8bOkOU5PfCaab5JHq{display:flex;align-items:center;font-size:var(--font-body-small);font-weight:normal}.DdTVQYtXd1JGSy4I7fsg{margin-right:var(--spacing-base)}.dfJyXPMf7kVYlUw3ufQs{font-weight:600;margin-left:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.RdVlbeJoB9D9PjyWiPzn{align-items:center}.ka7co2nIusSxn62swKSn{transform-origin:top center;overflow:hidden}.sDNed8tIGtJlWTAlcJLz{transition:all .1s;max-height:0;padding:0;transform:scaleY(0)}._MlcoJuh9_hL3_zBcTAJ{transition:max-height .3s,transform .2s;padding:calc(var(--spacing-base)*4) calc(var(--spacing-base)*7);max-height:1000px;transform:scaleY(1)}",""]),l.locals={accordion:"YfHjrCMj6lFCYyu7MPdU","accordion-item":"qU6h5EEU5dn32WebJHgd","accordion-header":"ytIjWyDWLPSTnsy5Kenu","accordion-header-label":"lWA8bOkOU5PfCaab5JHq","accordion-header-label-icon":"DdTVQYtXd1JGSy4I7fsg","accordion-header-description":"dfJyXPMf7kVYlUw3ufQs","accordion-header-button":"RdVlbeJoB9D9PjyWiPzn","accordion-body":"ka7co2nIusSxn62swKSn","accordion-body-close":"sDNed8tIGtJlWTAlcJLz","accordion-body-open":"_MlcoJuh9_hL3_zBcTAJ"};const m=l}}]);})();
