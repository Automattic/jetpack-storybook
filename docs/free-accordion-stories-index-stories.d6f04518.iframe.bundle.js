"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7723],{"../../plugins/protect/src/js/components/free-accordion/stories/index.stories.jsx":(g,o,e)=>{e.r(o),e.d(o,{Default:()=>P,__namedExportsOrder:()=>T,default:()=>E});var a=e("../components/components/text/index.tsx"),s=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),b=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(f),_=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/free-accordion/styles.module.scss"),j={};j.insert="head",j.singleton=!1;var w=h()(_.A,j);const m=_.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const p=(0,b.createContext)(),d=({id:u,title:A,label:C,icon:k,children:M,onOpen:I})=>{const U=(0,b.useContext)(p),S=U?.open===u,K=U?.setOpen,R=(0,l.A)(m["accordion-body"],{[m["accordion-body-open"]]:S,[m["accordion-body-close"]]:!S}),L=(0,b.useCallback)(()=>{S||I?.(),K(D=>D===u?null:u)},[S,I,K,u]);return(0,t.jsxs)("div",{className:m["accordion-item"],children:[(0,t.jsxs)("button",{className:m["accordion-header"],onClick:L,children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(a.Ay,{className:m["accordion-header-label"],mb:1,children:[(0,t.jsx)(n.A,{icon:k,className:m["accordion-header-label-icon"]}),C]}),(0,t.jsx)(a.Ay,{className:m["accordion-header-description"],variant:S?"title-small":"body",children:A})]}),(0,t.jsx)("div",{className:m["accordion-header-button"],children:(0,t.jsx)(n.A,{icon:S?r.A:i.A,size:38})})]}),(0,t.jsx)("div",{className:R,"aria-hidden":S?"false":"true",children:M})]})},v=({children:u})=>{const[A,C]=(0,b.useState)();return(0,t.jsx)(p.Provider,{value:{open:A,setOpen:C},children:(0,t.jsx)("div",{className:m.accordion,children:u})})},x=v;d.__docgenInfo={description:"",methods:[],displayName:"FreeAccordionItem"},v.__docgenInfo={description:"",methods:[],displayName:"FreeAccordion"};var y=`import { Text } from '@automattic/jetpack-components';
import { wordpress, plugins } from '@wordpress/icons';
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
`,W={Default:{startLoc:{col:23,line:20},endLoc:{col:2,line:117},startBody:{col:23,line:20},endBody:{col:2,line:117}}};const E={title:"Plugins/Protect/Free Accordion",component:x,parameters:{storySource:{source:`import { Text } from '@automattic/jetpack-components';
import { wordpress, plugins } from '@wordpress/icons';
import FreeAccordion, { FreeAccordionItem } from '..';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'Plugins/Protect/Free Accordion',
  component: FreeAccordion,
  parameters: {
    layout: 'centered'
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      width: 800
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};


export const Default = args => /*#__PURE__*/_jsxs(FreeAccordion, {
  children: [/*#__PURE__*/_jsxs(FreeAccordionItem, {
    id: "wordpress",
    label: "WordPress (5.9-5.9.1)",
    title: "Contributor+ Stored Cross-Site Scripting",
    icon: wordpress,
    children: [/*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "What is the problem?"
    }), /*#__PURE__*/_jsxs(Text, {
      mb: 5,
      children: ["Post authors are able to bypass KSES restrictions in WordPress ", '>', "= 5.9 (and or Gutenberg ", '>', "= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]
    }), /*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "How to fix it?"
    }), /*#__PURE__*/_jsx(Text, {
      children: "Update to WordPress 5.9.2"
    })]
  }), /*#__PURE__*/_jsxs(FreeAccordionItem, {
    id: "jetpack",
    label: "Jetpack < 9.8",
    title: "Carousel Module Non-Published Page/Post Attachment Comment Leak",
    icon: plugins,
    children: [/*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "What is the problem?"
    }), /*#__PURE__*/_jsxs(Text, {
      mb: 5,
      children: ["Post authors are able to bypass KSES restrictions in WordPress ", '>', "= 5.9 (and or Gutenberg ", '>', "= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]
    }), /*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "How to fix it?"
    }), /*#__PURE__*/_jsx(Text, {
      children: "Update to WordPress 5.9.2"
    })]
  }), /*#__PURE__*/_jsxs(FreeAccordionItem, {
    id: "jetpack-2",
    label: "Jetpack < 9.8",
    title: "Carousel Module Non-Published Page/Post Attachment Comment Leak",
    icon: plugins,
    children: [/*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "What is the problem?"
    }), /*#__PURE__*/_jsxs(Text, {
      mb: 5,
      children: ["Post authors are able to bypass KSES restrictions in WordPress ", '>', "= 5.9 (and or Gutenberg ", '>', "= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]
    }), /*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "How to fix it?"
    }), /*#__PURE__*/_jsx(Text, {
      children: "Update to WordPress 5.9.2"
    })]
  }), /*#__PURE__*/_jsxs(FreeAccordionItem, {
    id: "jetpack-3",
    label: "Jetpack < 9.8",
    title: "Carousel Module Non-Published Page/Post Attachment Comment Leak",
    icon: plugins,
    children: [/*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "What is the problem?"
    }), /*#__PURE__*/_jsxs(Text, {
      mb: 5,
      children: ["Post authors are able to bypass KSES restrictions in WordPress ", '>', "= 5.9 (and or Gutenberg ", '>', "= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]
    }), /*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "How to fix it?"
    }), /*#__PURE__*/_jsx(Text, {
      children: "Update to WordPress 5.9.2"
    })]
  }), /*#__PURE__*/_jsxs(FreeAccordionItem, {
    id: "jetpack-4",
    label: "Jetpack < 9.8",
    title: "Carousel Module Non-Published Page/Post Attachment Comment Leak",
    icon: plugins,
    children: [/*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "What is the problem?"
    }), /*#__PURE__*/_jsxs(Text, {
      mb: 5,
      children: ["Post authors are able to bypass KSES restrictions in WordPress ", '>', "= 5.9 (and or Gutenberg ", '>', "= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]
    }), /*#__PURE__*/_jsx(Text, {
      variant: "title-small",
      mb: 2,
      children: "How to fix it?"
    }), /*#__PURE__*/_jsx(Text, {
      children: "Update to WordPress 5.9.2"
    })]
  })]
});`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:2,line:117},startBody:{col:23,line:20},endBody:{col:2,line:117}}}},layout:"centered"},decorators:[u=>(0,t.jsx)("div",{style:{width:800},children:(0,t.jsx)(u,{})})]},P=u=>(0,t.jsxs)(x,{children:[(0,t.jsxs)(d,{id:"wordpress",label:"WordPress (5.9-5.9.1)",title:"Contributor+ Stored Cross-Site Scripting",icon:s.A,children:[(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(a.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(a.Ay,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(d,{id:"jetpack",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:c.A,children:[(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(a.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(a.Ay,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(d,{id:"jetpack-2",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:c.A,children:[(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(a.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(a.Ay,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(d,{id:"jetpack-3",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:c.A,children:[(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(a.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(a.Ay,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(d,{id:"jetpack-4",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:c.A,children:[(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(a.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(a.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(a.Ay,{children:"Update to WordPress 5.9.2"})]})]}),T=["Default"];P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <FreeAccordion>
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
    </FreeAccordion>`,...P.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(g,o,e)=>{e.d(o,{A:()=>c});var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function s({icon:n,size:r=24,...i},l){return(0,a.cloneElement)(n,{width:r,height:r,...i,ref:l})}const c=(0,a.forwardRef)(s)},"../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(g,o,e)=>{e.d(o,{A:()=>n});var a=e("../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,s.jsx)(a.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(a.wA,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(g,o,e)=>{e.d(o,{A:()=>n});var a=e("../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,s.jsx)(a.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)(a.wA,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js":(g,o,e)=>{e.d(o,{A:()=>n});var a=e("../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,s.jsx)(a.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(a.wA,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.25.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js":(g,o,e)=>{e.d(o,{A:()=>n});var a=e("../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,s.jsx)(a.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,s.jsx)(a.wA,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})})},"../../../node_modules/.pnpm/@wordpress+primitives@4.25.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(g,o,e)=>{e.d(o,{Ey:()=>_,G:()=>r,N1:()=>i,VG:()=>w,W4:()=>j,jl:()=>n,lA:()=>h,rw:()=>f,t4:()=>m,tS:()=>b,wA:()=>l});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=t=>(0,s.createElement)("circle",t),r=t=>(0,s.createElement)("g",t),i=t=>(0,s.createElement)("line",t),l=t=>(0,s.createElement)("path",t),b=t=>(0,s.createElement)("polygon",t),f=t=>(0,s.createElement)("rect",t),h=t=>(0,s.createElement)("defs",t),_=t=>(0,s.createElement)("radialGradient",t),j=t=>(0,s.createElement)("linearGradient",t),w=t=>(0,s.createElement)("stop",t),m=(0,s.forwardRef)(({className:t,isPressed:p,...d},v)=>{const x={...d,className:(0,a.A)(t,{"is-pressed":p})||void 0,"aria-hidden":!0,focusable:!1};return(0,c.jsx)("svg",{...x,ref:v})});m.displayName="SVG"},"../components/components/text/constants.ts":(g,o,e)=>{e.d(o,{Q:()=>a,Z:()=>s});const a={"headline-medium":"h1","headline-small":"h2","headline-small-regular":"h2","title-medium":"h3","title-medium-semi-bold":"h3","title-small":"h4",body:"p","body-small":"p","body-extra-small":"p","body-extra-small-bold":"p",label:"p"},s=["mt","mr","mb","ml","mx","my","m","pt","pr","pb","pl","px","py","p"]},"../components/components/text/index.tsx":(g,o,e)=>{e.d(o,{H2:()=>w,H3:()=>m,hE:()=>t,Ay:()=>j});var a=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../components/components/text/constants.ts"),n=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(n),i=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/text/style.module.scss"),l={};l.insert="head",l.singleton=!1;var b=r()(i.A,l);const f=i.A.locals||{};var h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _=(0,s.forwardRef)(({variant:p="body",children:d,component:v,className:x,...y},W)=>{const E=v||c.Q[p]||"span",P=(0,s.useMemo)(()=>c.Z.reduce((T,u)=>(typeof y[u]<"u"&&(T+=f[`${u}-${y[u]}`]+" ",delete y[u]),T),""),[y]);return(0,h.jsx)(E,{className:(0,a.A)(f.reset,f[p],x,P),...y,ref:W,children:d})});_.displayName="Text";const j=_,w=({children:p,...d})=>(0,h.jsx)(_,{variant:"headline-medium",mb:3,...d,children:p}),m=({children:p,weight:d="bold",...v})=>{const x=`headline-small${d==="bold"?"":`-${d}`}`;return(0,h.jsx)(_,{variant:x,mb:3,...v,children:p})},t=({children:p,size:d="medium",...v})=>(0,h.jsx)(_,{variant:`title-${d}`,mb:1,...v,children:p});try{_.displayName="Text",_.__docgenInfo={description:"Text component.",displayName:"Text",props:{variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"headline-small-regular"'},{value:'"title-medium"'},{value:'"title-medium-semi-bold"'},{value:'"title-small"'},{value:'"body"'},{value:'"body-small"'},{value:'"body-extra-small"'},{value:'"body-extra-small-bold"'},{value:'"label"'}]}},m:{defaultValue:null,description:"margin",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},mx:{defaultValue:null,description:"margin left and right",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},my:{defaultValue:null,description:"margin top and bottom",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},p:{defaultValue:null,description:"padding",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},px:{defaultValue:null,description:"padding left and right",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},py:{defaultValue:null,description:"padding top and bottom",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"}]}},className:{defaultValue:null,description:"HTML Class",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The text itself that will be rendered.",name:"children",required:!0,type:{name:"ReactNode"}},component:{defaultValue:null,description:"Force an specific tag (span, div) or use a custom component that will receive className and children",name:"component",required:!1,type:{name:"FC<{ [prop: string]: unknown; }> | ElementType"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/text/index.tsx#Text"]={docgenInfo:_.__docgenInfo,name:"Text",path:"../components/components/text/index.tsx#Text"})}catch{}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(g,o,e)=>{e.d(o,{A:()=>c});function a(n){var r,i,l="";if(typeof n=="string"||typeof n=="number")l+=n;else if(typeof n=="object")if(Array.isArray(n)){var b=n.length;for(r=0;r<b;r++)n[r]&&(i=a(n[r]))&&(l&&(l+=" "),l+=i)}else for(i in n)n[i]&&(l&&(l+=" "),l+=i);return l}function s(){for(var n,r,i=0,l="",b=arguments.length;i<b;i++)(n=arguments[i])&&(r=a(n))&&(l&&(l+=" "),l+=r);return l}const c=s},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../components/components/text/style.module.scss":(g,o,e)=>{e.d(o,{A:()=>i});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(c),r=n()(s());r.push([g.id,".RrzweonX2G7Xgr67dB2H{margin:0;padding:0}.av7S3fABXl9CoVWrHPjL{font-size:var(--font-headline-medium);font-weight:700;line-height:52px}.t3rLny7uLhJOSMunxpri{font-size:var(--font-headline-small);font-weight:700;line-height:40px}.r6XNQ24b67NmqoEJa0lQ{font-size:var(--font-headline-small);font-weight:400;line-height:40px}._z5QeCm2YqrB6LQuKGzB{font-size:var(--font-title-medium);font-weight:500;line-height:32px}.ONKKcjx9_v0Hit4VYhAX{font-size:var(--font-title-medium);font-weight:600;line-height:32px}.rSf1cEKjnUk9fZzArg9M{font-size:var(--font-title-small);font-weight:500;line-height:30px}.PrqOcNprgQSxXct7z27X{font-size:var(--font-body);font-weight:400;line-height:24px}.reEdfI392I8pwrbqXv82{font-size:var(--font-body-small);font-weight:400;line-height:24px}.txcHzaPOi_L3vUIa69H3{font-size:var(--font-body-extra-small);font-weight:400;line-height:20px}.cg3VIT3kJEpd9U45dKm5{font-size:var(--font-body-extra-small);font-weight:700;line-height:20px}.Bw8becNhHzVhe3yqezjL{font-size:var(--font-body-extra-small);font-weight:600;line-height:16px}.KtSlVYit4NJIwd565Qzg{margin:calc(var(--spacing-base)*0)}.aUs7ArcBzNiB4euVIPTK{margin-left:calc(var(--spacing-base)*0);margin-right:calc(var(--spacing-base)*0)}.EOfR5OK0_KUMT0pd6aDN{margin-top:calc(var(--spacing-base)*0);margin-bottom:calc(var(--spacing-base)*0)}.JeSGTmPMnRpmohOX9Npf{margin-top:calc(var(--spacing-base)*0)}.S1HHjkvB0iy8qv4OGPEW{margin-right:calc(var(--spacing-base)*0)}.fXqoWImN0WREEK6YKuGZ{margin-bottom:calc(var(--spacing-base)*0)}.ieYWuvAUQ_4pV7KvhzSN{margin-left:calc(var(--spacing-base)*0)}.sqQsDZYMWHIwDKpD8LFC{margin:calc(var(--spacing-base)*1)}.Yvy9o3eLo3GxvhsHfq8C{margin-left:calc(var(--spacing-base)*1);margin-right:calc(var(--spacing-base)*1)}.oJKoXlegFbtsZINB91MQ{margin-top:calc(var(--spacing-base)*1);margin-bottom:calc(var(--spacing-base)*1)}.rXIpDpEaaVdHeBz_mkbe{margin-top:calc(var(--spacing-base)*1)}.lPN_TVpVEICijBDrSmwI{margin-right:calc(var(--spacing-base)*1)}.XSkf4XziN27wLUFD_JK6{margin-bottom:calc(var(--spacing-base)*1)}.g02KQ8mVXHihkGrBHwdK{margin-left:calc(var(--spacing-base)*1)}.vNHGjQ81_FQwODlxcam_{margin:calc(var(--spacing-base)*2)}.eCbYNPqDgnjzDDx_u0tV{margin-left:calc(var(--spacing-base)*2);margin-right:calc(var(--spacing-base)*2)}.AGOCRIlKxTyIhfwntq25{margin-top:calc(var(--spacing-base)*2);margin-bottom:calc(var(--spacing-base)*2)}.UP2CFZlJ3uXPgHNT0ttT{margin-top:calc(var(--spacing-base)*2)}._sI07ga4QjbLdnDuTiqn{margin-right:calc(var(--spacing-base)*2)}.zsNeo9TBTmbLmxU_UmFt{margin-bottom:calc(var(--spacing-base)*2)}.qz6atbgCBwbKrnzp87cD{margin-left:calc(var(--spacing-base)*2)}.QeqcrOkvlqdZ7qvasKy9{margin:calc(var(--spacing-base)*3)}.UFjKZbayXJCB31O3zEDh{margin-left:calc(var(--spacing-base)*3);margin-right:calc(var(--spacing-base)*3)}.VWRO00hQe9DW7_iiVaBX{margin-top:calc(var(--spacing-base)*3);margin-bottom:calc(var(--spacing-base)*3)}.B11Ckb7tgobGC99dejdM{margin-top:calc(var(--spacing-base)*3)}.xxsR1rRr0z78d7I5lMVU{margin-right:calc(var(--spacing-base)*3)}.Jrt_3UgTJD8t3rWpQS3f{margin-bottom:calc(var(--spacing-base)*3)}.owqamFzTmmRS1Q0KfD9W{margin-left:calc(var(--spacing-base)*3)}.IyGCprtNvuxObBSI5oT5{margin:calc(var(--spacing-base)*4)}.elxhFCA2BZljv4Hokiz_{margin-left:calc(var(--spacing-base)*4);margin-right:calc(var(--spacing-base)*4)}.P1uJlf6jKIsPjzjRIjAA{margin-top:calc(var(--spacing-base)*4);margin-bottom:calc(var(--spacing-base)*4)}.Cwh3dErySZNkeTWFcxQR{margin-top:calc(var(--spacing-base)*4)}.K4TPpwlDR4XN6jGGu3tX{margin-right:calc(var(--spacing-base)*4)}.WyDfNrZEf3qW5J8oJQwW{margin-bottom:calc(var(--spacing-base)*4)}.cY28cCO9jFYi8AI7R8Iw{margin-left:calc(var(--spacing-base)*4)}.axKn0VTG612HDdTHI801{margin:calc(var(--spacing-base)*5)}.e4iwkmdIy8kSCYhbHMWQ{margin-left:calc(var(--spacing-base)*5);margin-right:calc(var(--spacing-base)*5)}.wNJaWMyj_SAMP21dF8Vy{margin-top:calc(var(--spacing-base)*5);margin-bottom:calc(var(--spacing-base)*5)}.b8L4nRx32z0rRNq5jxgP{margin-top:calc(var(--spacing-base)*5)}.AG11aODBbNpOGgevPI0d{margin-right:calc(var(--spacing-base)*5)}.iLxrEvLX4W4hUzFMjjIJ{margin-bottom:calc(var(--spacing-base)*5)}.rE2_cT9JHqwPBCPHPThF{margin-left:calc(var(--spacing-base)*5)}.Lm7DSlf5up6ITW6oe8yP{margin:calc(var(--spacing-base)*6)}.MZjZnL5dptXcLbx6irfw{margin-left:calc(var(--spacing-base)*6);margin-right:calc(var(--spacing-base)*6)}.o0oNshF__Yhyg8nSbtnQ{margin-top:calc(var(--spacing-base)*6);margin-bottom:calc(var(--spacing-base)*6)}.pfhkL_xzHiIULKu0eat7{margin-top:calc(var(--spacing-base)*6)}.SFxSvCIATFKc4V6ZXmcw{margin-right:calc(var(--spacing-base)*6)}.xNoZqjzsdSHX9wYUijC1{margin-bottom:calc(var(--spacing-base)*6)}.omqHIrUIi6WW5esUkSDu{margin-left:calc(var(--spacing-base)*6)}.EZxV3cAsqMP8a_mK6knS{margin:calc(var(--spacing-base)*7)}.maXQFvYunKxF_3_1Yzsh{margin-left:calc(var(--spacing-base)*7);margin-right:calc(var(--spacing-base)*7)}.Jm_nqQd5GtB2gRAzUkWn{margin-top:calc(var(--spacing-base)*7);margin-bottom:calc(var(--spacing-base)*7)}.gjkoRO29zlJJIYIeDfCm{margin-top:calc(var(--spacing-base)*7)}.pyVbQKU0x4VqSMSztx6q{margin-right:calc(var(--spacing-base)*7)}.otQxYwZnNwK3TuWHJJtZ{margin-bottom:calc(var(--spacing-base)*7)}.fCM1YnJkLSgaqcuKUFdp{margin-left:calc(var(--spacing-base)*7)}.yhF3QcdZzazqyWj9eCPg{margin:calc(var(--spacing-base)*8)}.W2JaDt6uLbI1Ut58MQ7m{margin-left:calc(var(--spacing-base)*8);margin-right:calc(var(--spacing-base)*8)}.baNwfUF5zVGKIckyZndZ{margin-top:calc(var(--spacing-base)*8);margin-bottom:calc(var(--spacing-base)*8)}.WQpKe8tM5OGVEivODxQ1{margin-top:calc(var(--spacing-base)*8)}.EljH3FntmSMQ7T0FzSnd{margin-right:calc(var(--spacing-base)*8)}.vaAHzi3Pt_NaTrRShQNy{margin-bottom:calc(var(--spacing-base)*8)}.ONNuwgfEFq6AaLlnb3Bk{margin-left:calc(var(--spacing-base)*8)}.I3WPh9a0bFA3PCza0C1F{padding:calc(var(--spacing-base)*0)}.Bo9Th3HSzIz9MLvIKDV7{padding-left:calc(var(--spacing-base)*0);padding-right:calc(var(--spacing-base)*0)}.xD4akgkVexKQIu7xTYC7{padding-top:calc(var(--spacing-base)*0);padding-bottom:calc(var(--spacing-base)*0)}.Tw6X2IsjKjG3T5S4xBsa{padding-top:calc(var(--spacing-base)*0)}.usxfjK4i6t5EPUUNbV3q{padding-right:calc(var(--spacing-base)*0)}.ap02YMlFojEdEv9R57_E{padding-bottom:calc(var(--spacing-base)*0)}.SUXaq43ZvVBO_WKzRNnC{padding-left:calc(var(--spacing-base)*0)}.y0X9Cpzkl1tsVC44OgVy{padding:calc(var(--spacing-base)*1)}.xEKaQY2mcBMbLAt90iRS{padding-left:calc(var(--spacing-base)*1);padding-right:calc(var(--spacing-base)*1)}.D5pYSMCA0UQInMwqOLOF{padding-top:calc(var(--spacing-base)*1);padding-bottom:calc(var(--spacing-base)*1)}.gfLuMcAWQ8ulRu7bvGq3{padding-top:calc(var(--spacing-base)*1)}.TWeDgz3pbqiqcnSzBnX1{padding-right:calc(var(--spacing-base)*1)}.shE8AEYtQUB8dRgalaVl{padding-bottom:calc(var(--spacing-base)*1)}.bUffO4T34apuVB_CQWy9{padding-left:calc(var(--spacing-base)*1)}.Cup6JdrTVTKRjNQ3YQy4{padding:calc(var(--spacing-base)*2)}.CZtcrsJRw1zM5QJNqVJS{padding-left:calc(var(--spacing-base)*2);padding-right:calc(var(--spacing-base)*2)}.PwifseBVfKsExlizrKDX{padding-top:calc(var(--spacing-base)*2);padding-bottom:calc(var(--spacing-base)*2)}.ooLjq9obWd_LjRGbSVGz{padding-top:calc(var(--spacing-base)*2)}.wSqNFThiG5mtyulgUvZ6{padding-right:calc(var(--spacing-base)*2)}.AOhaHk0PiH5umTWyv36v{padding-bottom:calc(var(--spacing-base)*2)}.MeStfh47gVnPo_pqSAYV{padding-left:calc(var(--spacing-base)*2)}.J79brrXnEwGxt6X_Rk0Z{padding:calc(var(--spacing-base)*3)}.mROh4kIYt9Gvhm4T7PKg{padding-left:calc(var(--spacing-base)*3);padding-right:calc(var(--spacing-base)*3)}.t2wrXZ0zLXAn9EgCYACM{padding-top:calc(var(--spacing-base)*3);padding-bottom:calc(var(--spacing-base)*3)}.e7RiWMsE_HhIlFw4Yv2Y{padding-top:calc(var(--spacing-base)*3)}.NYxlgrdKW7sY7B3SuLwa{padding-right:calc(var(--spacing-base)*3)}.BE62UwefMAFTIBFc1JN8{padding-bottom:calc(var(--spacing-base)*3)}.VFVSDdrTf9CGiUy9ta9y{padding-left:calc(var(--spacing-base)*3)}.ghar1wB2KsSxjDoUiOgG{padding:calc(var(--spacing-base)*4)}.CSi0SCb6JLLqwTBL5Ylu{padding-left:calc(var(--spacing-base)*4);padding-right:calc(var(--spacing-base)*4)}.DfA_LcGEJeKpZi9kManY{padding-top:calc(var(--spacing-base)*4);padding-bottom:calc(var(--spacing-base)*4)}.eqW8DcYjteitYdAgSGkK{padding-top:calc(var(--spacing-base)*4)}.BGwGSL2mmcz8bT8fZItP{padding-right:calc(var(--spacing-base)*4)}.cmgQUmff6dIDwSw_a_Es{padding-bottom:calc(var(--spacing-base)*4)}.K8xtpoyEIcE8Q8YCIGMS{padding-left:calc(var(--spacing-base)*4)}.qtkC6gWHpKnGY5sBEi9E{padding:calc(var(--spacing-base)*5)}.JTMzBZpZgam2U62HNS8s{padding-left:calc(var(--spacing-base)*5);padding-right:calc(var(--spacing-base)*5)}.Cp_Fd0Z5TtjMec59KWwu{padding-top:calc(var(--spacing-base)*5);padding-bottom:calc(var(--spacing-base)*5)}.ymcu2EIOq8UyFZELyRUb{padding-top:calc(var(--spacing-base)*5)}.A1Bq8uVtJzPMKKlsUgDm{padding-right:calc(var(--spacing-base)*5)}.XtPNiAInSOXJOWVh1Neg{padding-bottom:calc(var(--spacing-base)*5)}.ROmQmrnKBqi1ZNLNpqu1{padding-left:calc(var(--spacing-base)*5)}.Bs5EOenRfSq6Zfq0225P{padding:calc(var(--spacing-base)*6)}.MYMFPJRAGT6AKVlqqFh4{padding-left:calc(var(--spacing-base)*6);padding-right:calc(var(--spacing-base)*6)}.OZSrMLOxtms9uR40hqhx{padding-top:calc(var(--spacing-base)*6);padding-bottom:calc(var(--spacing-base)*6)}.njSj0AdfU0M_G18uE0ta{padding-top:calc(var(--spacing-base)*6)}.rYh75XoApE5pxN5IfghY{padding-right:calc(var(--spacing-base)*6)}.xXiRrDOVsZcgIZeHmGvn{padding-bottom:calc(var(--spacing-base)*6)}.lBgCzyZ05muXTdr_kEHL{padding-left:calc(var(--spacing-base)*6)}.Ut8YyAx2wBXXaek0xDWC{padding:calc(var(--spacing-base)*7)}.g94Hel7jdvdHJs0OmwWE{padding-left:calc(var(--spacing-base)*7);padding-right:calc(var(--spacing-base)*7)}.NR6BVawqapDUHtIP_BRR{padding-top:calc(var(--spacing-base)*7);padding-bottom:calc(var(--spacing-base)*7)}.flkSMPhHGhhYbjdG9kL6{padding-top:calc(var(--spacing-base)*7)}.Zkj3ld5CHgvwyi1TX_Kx{padding-right:calc(var(--spacing-base)*7)}.mG1OofDziqxkGWs4Dwfj{padding-bottom:calc(var(--spacing-base)*7)}.RnHH4tdWZks0U09QOvVw{padding-left:calc(var(--spacing-base)*7)}.J9k6rYXEzr2GcjLCSS13{padding:calc(var(--spacing-base)*8)}.N6xgcFlDJONPVWi4kO8P{padding-left:calc(var(--spacing-base)*8);padding-right:calc(var(--spacing-base)*8)}.LgvunnunY9N2x3GxYqgV{padding-top:calc(var(--spacing-base)*8);padding-bottom:calc(var(--spacing-base)*8)}.IsAIVnNwJ5YpVNcWLRKP{padding-top:calc(var(--spacing-base)*8)}.wtmkrcvFCBUp_RrzLyQN{padding-right:calc(var(--spacing-base)*8)}.NqV_vnVYi8xr7f89jXRP{padding-bottom:calc(var(--spacing-base)*8)}.RL2ZRBRjgmkR1DtAVGJp{padding-left:calc(var(--spacing-base)*8)}",""]),r.locals={reset:"RrzweonX2G7Xgr67dB2H","headline-medium":"av7S3fABXl9CoVWrHPjL","headline-small":"t3rLny7uLhJOSMunxpri","headline-small-regular":"r6XNQ24b67NmqoEJa0lQ","title-medium":"_z5QeCm2YqrB6LQuKGzB","title-medium-semi-bold":"ONKKcjx9_v0Hit4VYhAX","title-small":"rSf1cEKjnUk9fZzArg9M",body:"PrqOcNprgQSxXct7z27X","body-small":"reEdfI392I8pwrbqXv82","body-extra-small":"txcHzaPOi_L3vUIa69H3","body-extra-small-bold":"cg3VIT3kJEpd9U45dKm5",label:"Bw8becNhHzVhe3yqezjL","m-0":"KtSlVYit4NJIwd565Qzg","mx-0":"aUs7ArcBzNiB4euVIPTK","my-0":"EOfR5OK0_KUMT0pd6aDN","mt-0":"JeSGTmPMnRpmohOX9Npf","mr-0":"S1HHjkvB0iy8qv4OGPEW","mb-0":"fXqoWImN0WREEK6YKuGZ","ml-0":"ieYWuvAUQ_4pV7KvhzSN","m-1":"sqQsDZYMWHIwDKpD8LFC","mx-1":"Yvy9o3eLo3GxvhsHfq8C","my-1":"oJKoXlegFbtsZINB91MQ","mt-1":"rXIpDpEaaVdHeBz_mkbe","mr-1":"lPN_TVpVEICijBDrSmwI","mb-1":"XSkf4XziN27wLUFD_JK6","ml-1":"g02KQ8mVXHihkGrBHwdK","m-2":"vNHGjQ81_FQwODlxcam_","mx-2":"eCbYNPqDgnjzDDx_u0tV","my-2":"AGOCRIlKxTyIhfwntq25","mt-2":"UP2CFZlJ3uXPgHNT0ttT","mr-2":"_sI07ga4QjbLdnDuTiqn","mb-2":"zsNeo9TBTmbLmxU_UmFt","ml-2":"qz6atbgCBwbKrnzp87cD","m-3":"QeqcrOkvlqdZ7qvasKy9","mx-3":"UFjKZbayXJCB31O3zEDh","my-3":"VWRO00hQe9DW7_iiVaBX","mt-3":"B11Ckb7tgobGC99dejdM","mr-3":"xxsR1rRr0z78d7I5lMVU","mb-3":"Jrt_3UgTJD8t3rWpQS3f","ml-3":"owqamFzTmmRS1Q0KfD9W","m-4":"IyGCprtNvuxObBSI5oT5","mx-4":"elxhFCA2BZljv4Hokiz_","my-4":"P1uJlf6jKIsPjzjRIjAA","mt-4":"Cwh3dErySZNkeTWFcxQR","mr-4":"K4TPpwlDR4XN6jGGu3tX","mb-4":"WyDfNrZEf3qW5J8oJQwW","ml-4":"cY28cCO9jFYi8AI7R8Iw","m-5":"axKn0VTG612HDdTHI801","mx-5":"e4iwkmdIy8kSCYhbHMWQ","my-5":"wNJaWMyj_SAMP21dF8Vy","mt-5":"b8L4nRx32z0rRNq5jxgP","mr-5":"AG11aODBbNpOGgevPI0d","mb-5":"iLxrEvLX4W4hUzFMjjIJ","ml-5":"rE2_cT9JHqwPBCPHPThF","m-6":"Lm7DSlf5up6ITW6oe8yP","mx-6":"MZjZnL5dptXcLbx6irfw","my-6":"o0oNshF__Yhyg8nSbtnQ","mt-6":"pfhkL_xzHiIULKu0eat7","mr-6":"SFxSvCIATFKc4V6ZXmcw","mb-6":"xNoZqjzsdSHX9wYUijC1","ml-6":"omqHIrUIi6WW5esUkSDu","m-7":"EZxV3cAsqMP8a_mK6knS","mx-7":"maXQFvYunKxF_3_1Yzsh","my-7":"Jm_nqQd5GtB2gRAzUkWn","mt-7":"gjkoRO29zlJJIYIeDfCm","mr-7":"pyVbQKU0x4VqSMSztx6q","mb-7":"otQxYwZnNwK3TuWHJJtZ","ml-7":"fCM1YnJkLSgaqcuKUFdp","m-8":"yhF3QcdZzazqyWj9eCPg","mx-8":"W2JaDt6uLbI1Ut58MQ7m","my-8":"baNwfUF5zVGKIckyZndZ","mt-8":"WQpKe8tM5OGVEivODxQ1","mr-8":"EljH3FntmSMQ7T0FzSnd","mb-8":"vaAHzi3Pt_NaTrRShQNy","ml-8":"ONNuwgfEFq6AaLlnb3Bk","p-0":"I3WPh9a0bFA3PCza0C1F","px-0":"Bo9Th3HSzIz9MLvIKDV7","py-0":"xD4akgkVexKQIu7xTYC7","pt-0":"Tw6X2IsjKjG3T5S4xBsa","pr-0":"usxfjK4i6t5EPUUNbV3q","pb-0":"ap02YMlFojEdEv9R57_E","pl-0":"SUXaq43ZvVBO_WKzRNnC","p-1":"y0X9Cpzkl1tsVC44OgVy","px-1":"xEKaQY2mcBMbLAt90iRS","py-1":"D5pYSMCA0UQInMwqOLOF","pt-1":"gfLuMcAWQ8ulRu7bvGq3","pr-1":"TWeDgz3pbqiqcnSzBnX1","pb-1":"shE8AEYtQUB8dRgalaVl","pl-1":"bUffO4T34apuVB_CQWy9","p-2":"Cup6JdrTVTKRjNQ3YQy4","px-2":"CZtcrsJRw1zM5QJNqVJS","py-2":"PwifseBVfKsExlizrKDX","pt-2":"ooLjq9obWd_LjRGbSVGz","pr-2":"wSqNFThiG5mtyulgUvZ6","pb-2":"AOhaHk0PiH5umTWyv36v","pl-2":"MeStfh47gVnPo_pqSAYV","p-3":"J79brrXnEwGxt6X_Rk0Z","px-3":"mROh4kIYt9Gvhm4T7PKg","py-3":"t2wrXZ0zLXAn9EgCYACM","pt-3":"e7RiWMsE_HhIlFw4Yv2Y","pr-3":"NYxlgrdKW7sY7B3SuLwa","pb-3":"BE62UwefMAFTIBFc1JN8","pl-3":"VFVSDdrTf9CGiUy9ta9y","p-4":"ghar1wB2KsSxjDoUiOgG","px-4":"CSi0SCb6JLLqwTBL5Ylu","py-4":"DfA_LcGEJeKpZi9kManY","pt-4":"eqW8DcYjteitYdAgSGkK","pr-4":"BGwGSL2mmcz8bT8fZItP","pb-4":"cmgQUmff6dIDwSw_a_Es","pl-4":"K8xtpoyEIcE8Q8YCIGMS","p-5":"qtkC6gWHpKnGY5sBEi9E","px-5":"JTMzBZpZgam2U62HNS8s","py-5":"Cp_Fd0Z5TtjMec59KWwu","pt-5":"ymcu2EIOq8UyFZELyRUb","pr-5":"A1Bq8uVtJzPMKKlsUgDm","pb-5":"XtPNiAInSOXJOWVh1Neg","pl-5":"ROmQmrnKBqi1ZNLNpqu1","p-6":"Bs5EOenRfSq6Zfq0225P","px-6":"MYMFPJRAGT6AKVlqqFh4","py-6":"OZSrMLOxtms9uR40hqhx","pt-6":"njSj0AdfU0M_G18uE0ta","pr-6":"rYh75XoApE5pxN5IfghY","pb-6":"xXiRrDOVsZcgIZeHmGvn","pl-6":"lBgCzyZ05muXTdr_kEHL","p-7":"Ut8YyAx2wBXXaek0xDWC","px-7":"g94Hel7jdvdHJs0OmwWE","py-7":"NR6BVawqapDUHtIP_BRR","pt-7":"flkSMPhHGhhYbjdG9kL6","pr-7":"Zkj3ld5CHgvwyi1TX_Kx","pb-7":"mG1OofDziqxkGWs4Dwfj","pl-7":"RnHH4tdWZks0U09QOvVw","p-8":"J9k6rYXEzr2GcjLCSS13","px-8":"N6xgcFlDJONPVWi4kO8P","py-8":"LgvunnunY9N2x3GxYqgV","pt-8":"IsAIVnNwJ5YpVNcWLRKP","pr-8":"wtmkrcvFCBUp_RrzLyQN","pb-8":"NqV_vnVYi8xr7f89jXRP","pl-8":"RL2ZRBRjgmkR1DtAVGJp"};const i=r},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.3_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/protect/src/js/components/free-accordion/styles.module.scss":(g,o,e)=>{e.d(o,{A:()=>i});var a=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(a),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),n=e.n(c),r=n()(s());r.push([g.id,".YfHjrCMj6lFCYyu7MPdU{border-radius:var(--jp-border-radius);border:1px solid var(--jp-gray)}.YfHjrCMj6lFCYyu7MPdU>*:not(:last-child){border-bottom:1px solid var(--jp-gray)}.qU6h5EEU5dn32WebJHgd{background-color:var(--jp-white)}.ytIjWyDWLPSTnsy5Kenu{margin:0;display:grid;grid-template-columns:repeat(9, 1fr);cursor:pointer;box-sizing:border-box;background:none;border:none;width:100%;align-items:center;outline-color:var(--jp-black);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);text-align:start}.ytIjWyDWLPSTnsy5Kenu>:first-of-type{grid-column:1/8}.ytIjWyDWLPSTnsy5Kenu>:last-of-type{grid-column:9}.ytIjWyDWLPSTnsy5Kenu:hover{background:var(--jp-gray-0)}.lWA8bOkOU5PfCaab5JHq{display:flex;align-items:center;font-size:var(--font-body-small);font-weight:400}.DdTVQYtXd1JGSy4I7fsg{margin-right:var(--spacing-base)}.dfJyXPMf7kVYlUw3ufQs{font-weight:600;margin-left:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.RdVlbeJoB9D9PjyWiPzn{align-items:center}.ka7co2nIusSxn62swKSn{transform-origin:top center;overflow:hidden}.sDNed8tIGtJlWTAlcJLz{transition:all .1s;max-height:0;padding:0;transform:scaleY(0)}._MlcoJuh9_hL3_zBcTAJ{transition:max-height .3s,transform .2s;padding:calc(var(--spacing-base)*4) calc(var(--spacing-base)*7);max-height:1000px;transform:scaleY(1)}",""]),r.locals={accordion:"YfHjrCMj6lFCYyu7MPdU","accordion-item":"qU6h5EEU5dn32WebJHgd","accordion-header":"ytIjWyDWLPSTnsy5Kenu","accordion-header-label":"lWA8bOkOU5PfCaab5JHq","accordion-header-label-icon":"DdTVQYtXd1JGSy4I7fsg","accordion-header-description":"dfJyXPMf7kVYlUw3ufQs","accordion-header-button":"RdVlbeJoB9D9PjyWiPzn","accordion-body":"ka7co2nIusSxn62swKSn","accordion-body-close":"sDNed8tIGtJlWTAlcJLz","accordion-body-open":"_MlcoJuh9_hL3_zBcTAJ"};const i=r}}]);
