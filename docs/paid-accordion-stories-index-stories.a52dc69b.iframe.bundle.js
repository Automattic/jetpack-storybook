"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2462],{"../../plugins/protect/src/js/components/paid-accordion/stories/index.stories.jsx":(h,l,e)=>{var D,U,G;e.r(l),e.d(l,{Default:()=>y,__namedExportsOrder:()=>H,default:()=>z});var o=e("../components/components/text/index.tsx"),d=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/wordpress.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/plugins.js"),n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../components/components/layout/use-breakpoint-match/index.ts"),c=e("../components/components/spinner/index.jsx"),_=e("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),S=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/check.js"),x=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),m=e("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),r=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=e.n(r),p=e("../../plugins/protect/src/js/state/store.js"),P=e("../../plugins/protect/src/js/components/severity/index.jsx"),T=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(T),k=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss"),W={};W.insert="head",W.singleton=!1;var L=g()(k.Z,W);const u=k.Z.locals||{};var t=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const O=j.__,E=n.createContext(),v=A=>{let{id:f,title:Z,label:M,icon:J,fixable:F,severity:X,children:V,onOpen:I}=A;const C=(0,n.useContext)(E),w=(C==null?void 0:C.open)===f,B=C==null?void 0:C.setOpen,Y=(0,_.Z)(N=>N(p.t).getThreatsAreFixing()),Q=a()(u["accordion-body"],{[u["accordion-body-open"]]:w,[u["accordion-body-close"]]:!w}),$=(0,n.useCallback)(()=>{w||I==null||I(),B(N=>N===f?null:f)},[w,I,B,f]),[q]=(0,s.Z)(["sm","lg"],[null,"<"]);return(0,t.jsxs)("div",{className:u["accordion-item"],children:[(0,t.jsxs)("button",{className:u["accordion-header"],onClick:$,children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(o.ZP,{className:u["accordion-header-label"],mb:1,children:[(0,t.jsx)(b.Z,{icon:J,className:u["accordion-header-label-icon"]}),M]}),(0,t.jsx)(o.ZP,{className:u["accordion-header-description"],variant:w?"title-small":"body",children:Z})]}),(0,t.jsx)("div",{children:(0,t.jsx)(P.Z,{severity:X})}),(0,t.jsx)("div",{children:F&&(0,t.jsxs)(t.Fragment,{children:[Y.indexOf(f)>=0?(0,t.jsx)(c.Z,{color:"black"}):(0,t.jsx)(b.Z,{icon:S.Z,className:u["icon-check"],size:28}),q&&(0,t.jsx)("span",{children:O("Auto-fix","jetpack-protect")})]})}),(0,t.jsx)("div",{className:u["accordion-header-button"],children:(0,t.jsx)(b.Z,{icon:w?x.Z:m.Z,size:38})})]}),(0,t.jsx)("div",{className:Q,"aria-hidden":w?"false":"true",children:V})]})};v.displayName="PaidAccordionItem";const K=A=>{let{children:f}=A;const[Z,M]=(0,n.useState)();return(0,t.jsx)(E.Provider,{value:{open:Z,setOpen:M},children:(0,t.jsx)("div",{className:u.accordion,children:f})})};K.displayName="PaidAccordion",K.__docgenInfo={description:"",methods:[],displayName:"PaidAccordion"};const R=K;v.__docgenInfo={description:"",methods:[],displayName:"PaidAccordionItem"};var ee=`import { Text } from '@automattic/jetpack-components';
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
`,te={Default:{startLoc:{col:23,line:19},endLoc:{col:20,line:90},startBody:{col:23,line:19},endBody:{col:20,line:90}}};const z={title:"Plugins/Protect/Paid Accordion",component:R,parameters:{storySource:{source:`import { Text } from '@automattic/jetpack-components';
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
};`,locationsMap:{default:{startLoc:{col:23,line:19},endLoc:{col:20,line:90},startBody:{col:23,line:19},endBody:{col:20,line:90}}}},layout:"centered"},decorators:[A=>(0,t.jsx)("div",{style:{width:800},children:(0,t.jsx)(A,{})})]},y=A=>(0,t.jsxs)(R,{children:[(0,t.jsxs)(v,{id:"wordpress",label:"WordPress (5.9-5.9.1)",title:"Contributor+ Stored Cross-Site Scripting",icon:d.Z,children:[(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(v,{id:"jetpack",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:i.Z,children:[(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(v,{id:"jetpack-2",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:i.Z,children:[(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(v,{id:"jetpack-3",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:i.Z,children:[(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(v,{id:"jetpack-4",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:i.Z,children:[(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.ZP,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.ZP,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.ZP,{children:"Update to WordPress 5.9.2"})]})]});y.displayName="Default",y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`args => <PaidAccordion>
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
    </PaidAccordion>`,...(G=(U=y.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const H=["Default"];y.__docgenInfo={description:"",methods:[],displayName:"Default"}},"../components/components/layout/use-breakpoint-match/index.ts":(h,l,e)=>{e.d(l,{Z:()=>x});var o=e("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(d),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),s={};s.insert="head",s.singleton=!1;var c=i()(n.Z,s);const _=n.Z.locals||{},j=["sm","md","lg"],b=(m,r,a)=>{const p=j.indexOf(m),P=p+1,T=r.includes("=");let g=[];return r.startsWith("<")&&(g=j.slice(0,T?P:p)),r.startsWith(">")&&(g=j.slice(T?p:P)),g!=null&&g.length?g.some(k=>a[k]):a[m]},x=(m,r)=>{const a=Array.isArray(m)?m:[m],p=Array.isArray(r)?r:[r],[P,T,g]=j,k=(0,o.Z)(_[P]),W=(0,o.Z)(_[T]),L=(0,o.Z)(_[g]),u={sm:k,md:W,lg:L};return a.map((t,O)=>{const E=p[O];return E?b(t,E,u):u[t]})}},"../components/components/spinner/index.jsx":(h,l,e)=>{e.d(l,{Z:()=>m});var o=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),d=e.n(o),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(n),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss"),_={};_.insert="head",_.singleton=!1;var j=s()(c.Z,_);const b=c.Z.locals||{};var S=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const x=r=>{const a=r.className+" jp-components-spinner",p={width:r.size,height:r.size,fontSize:r.size,borderTopColor:r.color},P={borderTopColor:r.color,borderRightColor:r.color};return(0,S.jsx)("div",{className:a,children:(0,S.jsx)("div",{className:"jp-components-spinner__outer",style:p,children:(0,S.jsx)("div",{className:"jp-components-spinner__inner",style:P})})})};x.displayName="Spinner",x.propTypes={color:d().string,className:d().string,size:d().number},x.defaultProps={color:"#FFFFFF",className:"",size:20},x.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'#FFFFFF'",computed:!1},description:"The spinner color.",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"CSS class names.",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"The spinner size.",type:{name:"number"},required:!1}}};const m=x},"../../plugins/protect/src/js/components/severity/index.jsx":(h,l,e)=>{e.d(l,{Z:()=>r});var o=e("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),d=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(d),n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss"),s={};s.insert="head",s.singleton=!1;var c=i()(n.Z,s);const _=n.Z.locals||{};var j=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const b=o.__,S=a=>a>=5?"is-critical":a>=3&&a<5?"is-high":"is-low",x=a=>{const p=b("Critical","jetpack-protect"),P=b("High","jetpack-protect"),T=b("Low","jetpack-protect");return a>=5?p:a>=3&&a<5?P:T},m=a=>{let{severity:p}=a;return(0,j.jsx)("div",{className:`${_["threat-severity-badge"]} ${_[S(p)]}`,children:x(p)})};m.displayName="ThreatSeverityBadge",m.__docgenInfo={description:"",methods:[],displayName:"ThreatSeverityBadge"};const r=m},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(h,l,e)=>{e.d(l,{Z:()=>c});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),s=n()(d());s.push([h.id,"",""]),s.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const c=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/spinner/style.scss":(h,l,e)=>{e.d(l,{Z:()=>c});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),s=n()(d());s.push([h.id,"@keyframes rotate-spinner{100%{transform:rotate(360deg)}}.jp-components-spinner{display:flex;align-items:center}.jp-components-spinner__outer,.jp-components-spinner__inner{margin:auto;box-sizing:border-box;border:.1em solid rgba(0,0,0,0);border-radius:50%;animation:3s linear infinite;animation-name:rotate-spinner}.jp-components-spinner__outer{border-top-color:#fff}.jp-components-spinner__inner{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;opacity:.4}",""]);const c=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/paid-accordion/styles.module.scss":(h,l,e)=>{e.d(l,{Z:()=>c});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),s=n()(d());s.push([h.id,".NA4kI3fa4uwjBTGpt8UD{display:inline-block;width:100%;border-radius:var(--jp-border-radius);border:1px solid var(--jp-gray)}.NA4kI3fa4uwjBTGpt8UD>*:not(:last-child){border-bottom:1px solid var(--jp-gray)}.GIZwBlRJvZP2PaSr88T2{background-color:var(--jp-white)}._0yrw_XKvISg1aOziRkyw{margin:0;display:grid;grid-template-columns:repeat(9, 1fr);cursor:pointer;box-sizing:border-box;background:none;border:none;width:100%;align-items:center;outline-color:var(--jp-black);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);text-align:start}._0yrw_XKvISg1aOziRkyw>:first-of-type{grid-column:1/7}._0yrw_XKvISg1aOziRkyw>:last-of-type{grid-column:9}._0yrw_XKvISg1aOziRkyw>:not(:first-child){margin:auto}._0yrw_XKvISg1aOziRkyw:hover{background:var(--jp-gray-0)}.FjuHpgfVTecgiAhqqfw1{display:flex;align-items:center;font-size:var(--font-body-small);font-weight:normal}.gT_N0hPdjpwwK1nwJZEw{margin-right:var(--spacing-base)}.GtiTquGPXSf0jgFsKeSf{font-weight:600;margin-left:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.HbVrG5Wjn8LZQVJXRUiT{align-items:center}.R34WryNVdEOBR0Gn7jah{transform-origin:top center;overflow:hidden}.cHvNO4WbRaFpr2aWqF_7{transition:all .1s;max-height:0;padding:0;transform:scaleY(0)}.Aq3jxnJodyk48Lf1Egsi{transition:max-height .3s,transform .2s;padding:calc(var(--spacing-base)*4) calc(var(--spacing-base)*7);max-height:1000px;transform:scaleY(1)}.L31iwjpSlfBZtW2CTbrV{fill:var(--jp-green-40)}@media(max-width: 599px){._0yrw_XKvISg1aOziRkyw{display:grid;grid-auto-rows:minmax(auto, auto)}._0yrw_XKvISg1aOziRkyw>:first-child{grid-column:1/8;grid-row:1}._0yrw_XKvISg1aOziRkyw>:nth-child(2){padding-left:calc(var(--spacing-base)*4);grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3){grid-row:2}._0yrw_XKvISg1aOziRkyw>:nth-child(3) span{position:absolute;margin-top:var(--spacing-base)}._0yrw_XKvISg1aOziRkyw>:last-child{grid-column:10;grid-row:1/3}}",""]),s.locals={accordion:"NA4kI3fa4uwjBTGpt8UD","accordion-item":"GIZwBlRJvZP2PaSr88T2","accordion-header":"_0yrw_XKvISg1aOziRkyw","accordion-header-label":"FjuHpgfVTecgiAhqqfw1","accordion-header-label-icon":"gT_N0hPdjpwwK1nwJZEw","accordion-header-description":"GtiTquGPXSf0jgFsKeSf","accordion-header-button":"HbVrG5Wjn8LZQVJXRUiT","accordion-body":"R34WryNVdEOBR0Gn7jah","accordion-body-close":"cHvNO4WbRaFpr2aWqF_7","accordion-body-open":"Aq3jxnJodyk48Lf1Egsi","icon-check":"L31iwjpSlfBZtW2CTbrV"};const c=s},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/severity/styles.module.scss":(h,l,e)=>{e.d(l,{Z:()=>c});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(o),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),s=n()(d());s.push([h.id,".zxGKVKzezupGHaXbqzvL{border-radius:32px;flex-shrink:0;font-size:12px;font-style:normal;font-weight:600;line-height:16px;padding:calc(var(--spacing-base)/2);position:relative;text-align:center;width:60px}.ON74ROKby9KFKGzUM6hQ{background:var(--jp-red-5);color:var(--jp-red-60)}.qPVsjV8TZ_ZtYOqYJTUw{background:var(--jp-yellow-5);color:var(--jp-yellow-60)}._DIlMqD5CZwpdLHylkey{background:var(--jp-gray-0);color:var(--jp-gray-50)}",""]),s.locals={"threat-severity-badge":"zxGKVKzezupGHaXbqzvL","is-critical":"ON74ROKby9KFKGzUM6hQ","is-high":"qPVsjV8TZ_ZtYOqYJTUw","is-low":"_DIlMqD5CZwpdLHylkey"};const c=s}}]);})();
