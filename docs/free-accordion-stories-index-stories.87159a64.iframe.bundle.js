"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7723],{"../../plugins/protect/src/js/components/free-accordion/stories/index.stories.jsx":(m,a,e)=>{e.r(a),e.d(a,{Default:()=>b,__namedExportsOrder:()=>U,default:()=>W});var o=e("../components/components/text/index.tsx"),n=e("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js"),l=e("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js"),d=e("../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),w=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(w),P=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/free-accordion/styles.module.scss"),x={};x.insert="head",x.singleton=!1;var f=A()(P.A,x);const c=P.A.locals||{};var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=s.createContext(),p=({id:_,title:S,label:T,icon:k,children:M,onOpen:E})=>{const y=(0,s.useContext)(j),h=y?.open===_,C=y?.setOpen,I=(0,u.A)(c["accordion-body"],{[c["accordion-body-open"]]:h,[c["accordion-body-close"]]:!h}),R=(0,s.useCallback)(()=>{h||E?.(),C(D=>D===_?null:_)},[h,E,C,_]);return(0,t.jsxs)("div",{className:c["accordion-item"],children:[(0,t.jsxs)("button",{className:c["accordion-header"],onClick:R,children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(o.Ay,{className:c["accordion-header-label"],mb:1,children:[(0,t.jsx)(r.A,{icon:k,className:c["accordion-header-label-icon"]}),T]}),(0,t.jsx)(o.Ay,{className:c["accordion-header-description"],variant:h?"title-small":"body",children:S})]}),(0,t.jsx)("div",{className:c["accordion-header-button"],children:(0,t.jsx)(r.A,{icon:h?i.A:d.A,size:38})})]}),(0,t.jsx)("div",{className:I,"aria-hidden":h?"false":"true",children:M})]})},g=({children:_})=>{const[S,T]=(0,s.useState)();return(0,t.jsx)(j.Provider,{value:{open:S,setOpen:T},children:(0,t.jsx)("div",{className:c.accordion,children:_})})},v=g;p.__docgenInfo={description:"",methods:[],displayName:"FreeAccordionItem"},g.__docgenInfo={description:"",methods:[],displayName:"FreeAccordion"};var L=`import { Text } from '@automattic/jetpack-components';
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
`,F={Default:{startLoc:{col:23,line:21},endLoc:{col:2,line:118},startBody:{col:23,line:21},endBody:{col:2,line:118}}};const W={title:"Plugins/Protect/Free Accordion",component:v,parameters:{storySource:{source:`import { Text } from '@automattic/jetpack-components';
import { wordpress, plugins } from '@wordpress/icons';
import React from 'react';
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
});`,locationsMap:{default:{startLoc:{col:23,line:21},endLoc:{col:2,line:118},startBody:{col:23,line:21},endBody:{col:2,line:118}}}},layout:"centered"},decorators:[_=>(0,t.jsx)("div",{style:{width:800},children:(0,t.jsx)(_,{})})]},b=_=>(0,t.jsxs)(v,{children:[(0,t.jsxs)(p,{id:"wordpress",label:"WordPress (5.9-5.9.1)",title:"Contributor+ Stored Cross-Site Scripting",icon:n.A,children:[(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.Ay,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(p,{id:"jetpack",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:l.A,children:[(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.Ay,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(p,{id:"jetpack-2",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:l.A,children:[(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.Ay,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(p,{id:"jetpack-3",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:l.A,children:[(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.Ay,{children:"Update to WordPress 5.9.2"})]}),(0,t.jsxs)(p,{id:"jetpack-4",label:"Jetpack < 9.8",title:"Carousel Module Non-Published Page/Post Attachment Comment Leak",icon:l.A,children:[(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"What is the problem?"}),(0,t.jsxs)(o.Ay,{mb:5,children:["Post authors are able to bypass KSES restrictions in WordPress ",">","= 5.9 (and or Gutenberg ",">","= 9.8.0) due to the order filters are executed, which could allow them to perform to Stored Cross-Site Scripting attacks"]}),(0,t.jsx)(o.Ay,{variant:"title-small",mb:2,children:"How to fix it?"}),(0,t.jsx)(o.Ay,{children:"Update to WordPress 5.9.2"})]})]}),U=["Default"];b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <FreeAccordion>
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
    </FreeAccordion>`,...b.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(m,a,e)=>{e.d(a,{A:()=>l});var o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function n({icon:s,size:r=24,...i},d){return(0,o.cloneElement)(s,{width:r,height:r,...i,ref:d})}const l=(0,o.forwardRef)(n)},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js":(m,a,e)=>{e.d(a,{A:()=>s});var o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,n.jsx)(o.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(o.wA,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js":(m,a,e)=>{e.d(a,{A:()=>s});var o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,n.jsx)(o.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(o.wA,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js":(m,a,e)=>{e.d(a,{A:()=>s});var o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,n.jsx)(o.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(o.wA,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.22.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js":(m,a,e)=>{e.d(a,{A:()=>s});var o=e("../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,n.jsx)(o.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,n.jsx)(o.wA,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})})},"../../../node_modules/.pnpm/@wordpress+primitives@4.22.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(m,a,e)=>{e.d(a,{Ey:()=>P,G:()=>r,N1:()=>i,VG:()=>f,W4:()=>x,jl:()=>s,lA:()=>A,rw:()=>w,t4:()=>c,tS:()=>u,wA:()=>d});var o=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=t=>(0,n.createElement)("circle",t),r=t=>(0,n.createElement)("g",t),i=t=>(0,n.createElement)("line",t),d=t=>(0,n.createElement)("path",t),u=t=>(0,n.createElement)("polygon",t),w=t=>(0,n.createElement)("rect",t),A=t=>(0,n.createElement)("defs",t),P=t=>(0,n.createElement)("radialGradient",t),x=t=>(0,n.createElement)("linearGradient",t),f=t=>(0,n.createElement)("stop",t),c=(0,n.forwardRef)(({className:t,isPressed:j,...p},g)=>{const v={...p,className:(0,o.A)(t,{"is-pressed":j})||void 0,"aria-hidden":!0,focusable:!1};return(0,l.jsx)("svg",{...v,ref:g})});c.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(m,a,e)=>{e.d(a,{A:()=>l});function o(s){var r,i,d="";if(typeof s=="string"||typeof s=="number")d+=s;else if(typeof s=="object")if(Array.isArray(s)){var u=s.length;for(r=0;r<u;r++)s[r]&&(i=o(s[r]))&&(d&&(d+=" "),d+=i)}else for(i in s)s[i]&&(d&&(d+=" "),d+=i);return d}function n(){for(var s,r,i=0,d="",u=arguments.length;i<u;i++)(s=arguments[i])&&(r=o(s))&&(d&&(d+=" "),d+=r);return d}const l=n},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.47_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js!../../plugins/protect/src/js/components/free-accordion/styles.module.scss":(m,a,e)=>{e.d(a,{A:()=>i});var o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(o),l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),s=e.n(l),r=s()(n());r.push([m.id,".YfHjrCMj6lFCYyu7MPdU{border-radius:var(--jp-border-radius);border:1px solid var(--jp-gray)}.YfHjrCMj6lFCYyu7MPdU>*:not(:last-child){border-bottom:1px solid var(--jp-gray)}.qU6h5EEU5dn32WebJHgd{background-color:var(--jp-white)}.ytIjWyDWLPSTnsy5Kenu{margin:0;display:grid;grid-template-columns:repeat(9, 1fr);cursor:pointer;box-sizing:border-box;background:none;border:none;width:100%;align-items:center;outline-color:var(--jp-black);padding:calc(var(--spacing-base)*2) calc(var(--spacing-base)*3);text-align:start}.ytIjWyDWLPSTnsy5Kenu>:first-of-type{grid-column:1/8}.ytIjWyDWLPSTnsy5Kenu>:last-of-type{grid-column:9}.ytIjWyDWLPSTnsy5Kenu:hover{background:var(--jp-gray-0)}.lWA8bOkOU5PfCaab5JHq{display:flex;align-items:center;font-size:var(--font-body-small);font-weight:400}.DdTVQYtXd1JGSy4I7fsg{margin-right:var(--spacing-base)}.dfJyXPMf7kVYlUw3ufQs{font-weight:600;margin-left:calc(var(--spacing-base)*4);margin-bottom:var(--spacing-base)}.RdVlbeJoB9D9PjyWiPzn{align-items:center}.ka7co2nIusSxn62swKSn{transform-origin:top center;overflow:hidden}.sDNed8tIGtJlWTAlcJLz{transition:all .1s;max-height:0;padding:0;transform:scaleY(0)}._MlcoJuh9_hL3_zBcTAJ{transition:max-height .3s,transform .2s;padding:calc(var(--spacing-base)*4) calc(var(--spacing-base)*7);max-height:1000px;transform:scaleY(1)}",""]),r.locals={accordion:"YfHjrCMj6lFCYyu7MPdU","accordion-item":"qU6h5EEU5dn32WebJHgd","accordion-header":"ytIjWyDWLPSTnsy5Kenu","accordion-header-label":"lWA8bOkOU5PfCaab5JHq","accordion-header-label-icon":"DdTVQYtXd1JGSy4I7fsg","accordion-header-description":"dfJyXPMf7kVYlUw3ufQs","accordion-header-button":"RdVlbeJoB9D9PjyWiPzn","accordion-body":"ka7co2nIusSxn62swKSn","accordion-body-close":"sDNed8tIGtJlWTAlcJLz","accordion-body-open":"_MlcoJuh9_hL3_zBcTAJ"};const i=r}}]);
