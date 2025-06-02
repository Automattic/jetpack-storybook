"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6278],{"../publicize-components/src/components/tabbed-modal/stories/index.stories.tsx":(R,E,t)=>{t.r(E),t.d(E,{Default:()=>_,__namedExportsOrder:()=>i,default:()=>g});var j=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),u=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),M=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/modal/index.js"),y=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tab-panel/index.js"),b=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),C=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=t.n(C),D=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../publicize-components/src/components/tabbed-modal/style.module.scss"),P={};P.insert="head",P.singleton=!1;var w=c()(D.A,P);const f=D.A.locals||{};var n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function v({isOpen:T,onClose:S,title:m,tabs:O,className:p}){if(!T)return null;const a=O.map(s=>({name:s.name,title:s.title,className:`${f.tab} ${s.className||""}`}));return(0,n.jsx)(M.A,{title:m,onRequestClose:S,className:(0,b.A)(f.modal,p),children:(0,n.jsx)("div",{className:f.wrapper,children:(0,n.jsx)(y.A,{activeClass:f.active,tabs:a,children:s=>{const d=O.find(x=>x.name===s.name);return(0,n.jsx)("div",{className:f.tabContent,children:d?.content})}})})})}try{tabbedmodal.displayName="tabbedmodal",tabbedmodal.__docgenInfo={description:"TabbedModal component provides a modal dialog with tabs",displayName:"tabbedmodal",props:{isOpen:{defaultValue:null,description:"Whether the modal is open",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Function to call when the modal is closed",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"Modal title",name:"title",required:!0,type:{name:"string"}},tabs:{defaultValue:null,description:"Array of tabs to display",name:"tabs",required:!0,type:{name:"ModalTab[]"}},className:{defaultValue:null,description:"Optional className to add to the modal",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../publicize-components/src/components/tabbed-modal/index.tsx#tabbedmodal"]={docgenInfo:tabbedmodal.__docgenInfo,name:"tabbedmodal",path:"../publicize-components/src/components/tabbed-modal/index.tsx#tabbedmodal"})}catch{}var k=`import { Button } from '@wordpress/components';
import { useCallback, useState } from '@wordpress/element';
import TabbedModal, { ModalTab, TabbedModalProps } from '../index';
import type { StoryFn, Meta } from '@storybook/react';

export default {
	title: 'JS Packages/Publicize Components/Tabbed Modal',
	component: TabbedModal,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta< typeof TabbedModal >;

// Create interactive template with open/close functionality
const Template: StoryFn< typeof TabbedModal > = args => {
	const [ isOpen, setIsOpen ] = useState( false );

	const openModal = useCallback( () => setIsOpen( true ), [] );
	const closeModal = useCallback( () => setIsOpen( false ), [] );

	return (
		<>
			<Button variant="primary" onClick={ openModal }>
				Open Modal
			</Button>
			<TabbedModal { ...args } isOpen={ isOpen } onClose={ closeModal } />
		</>
	);
};

const sampleTabs: ModalTab[] = [
	{
		name: 'tab1',
		title: 'New Share',
		content: (
			<div>
				<h4>First Tab Content</h4>
				<p>This is the content of the first tab. You can put any React components here.</p>
			</div>
		),
	},
	{
		name: 'tab2',
		title: 'Scheduled',
		content: (
			<div>
				<h4>Second Tab Content</h4>
				<p>This is the content of the second tab with different components.</p>
				<Button variant="secondary">Example Button</Button>
			</div>
		),
	},
];

const DefaultArgs: TabbedModalProps = {
	isOpen: false,
	onClose: () => {},
	title: 'Share Post',
	tabs: sampleTabs,
};

// Export Default story
export const Default = Template.bind( {} );
Default.args = DefaultArgs;
`,I={Default:{startLoc:{col:17,line:14},endLoc:{col:1,line:29},startBody:{col:17,line:14},endBody:{col:1,line:29}}};const g={title:"JS Packages/Publicize Components/Tabbed Modal",component:v,parameters:{storySource:{source:`import { Button } from '@wordpress/components';
import { useCallback, useState } from '@wordpress/element';
import TabbedModal from '../index';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Publicize Components/Tabbed Modal',
  component: TabbedModal,
  parameters: {
    layout: 'centered'
  }
};

// Create interactive template with open/close functionality
const Template = args => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      variant: "primary",
      onClick: openModal,
      children: "Open Modal"
    }), /*#__PURE__*/_jsx(TabbedModal, {
      ...args,
      isOpen: isOpen,
      onClose: closeModal
    })]
  });
};
const sampleTabs = [{
  name: 'tab1',
  title: 'New Share',
  content: /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("h4", {
      children: "First Tab Content"
    }), /*#__PURE__*/_jsx("p", {
      children: "This is the content of the first tab. You can put any React components here."
    })]
  })
}, {
  name: 'tab2',
  title: 'Scheduled',
  content: /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("h4", {
      children: "Second Tab Content"
    }), /*#__PURE__*/_jsx("p", {
      children: "This is the content of the second tab with different components."
    }), /*#__PURE__*/_jsx(Button, {
      variant: "secondary",
      children: "Example Button"
    })]
  })
}];
const DefaultArgs = {
  isOpen: false,
  onClose: () => {},
  title: 'Share Post',
  tabs: sampleTabs
};

// Export Default story
export const Default = Template.bind({});
Default.args = DefaultArgs;`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:1,line:29},startBody:{col:17,line:14},endBody:{col:1,line:29}}}},layout:"centered"}},h=T=>{const[S,m]=(0,u.useState)(!1),O=(0,u.useCallback)(()=>m(!0),[]),p=(0,u.useCallback)(()=>m(!1),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.Ay,{variant:"primary",onClick:O,children:"Open Modal"}),(0,n.jsx)(v,{...T,isOpen:S,onClose:p})]})},B=[{name:"tab1",title:"New Share",content:(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:"First Tab Content"}),(0,n.jsx)("p",{children:"This is the content of the first tab. You can put any React components here."})]})},{name:"tab2",title:"Scheduled",content:(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:"Second Tab Content"}),(0,n.jsx)("p",{children:"This is the content of the second tab with different components."}),(0,n.jsx)(j.Ay,{variant:"secondary",children:"Example Button"})]})}],o={isOpen:!1,onClose:()=>{},title:"Share Post",tabs:B},_=h.bind({});_.args=o;const i=["Default"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  return <>
            <Button variant="primary" onClick={openModal}>
                Open Modal
            </Button>
            <TabbedModal {...args} isOpen={isOpen} onClose={closeModal} />
        </>;
}`,..._.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tab-panel/index.js":(R,E,t)=>{t.d(E,{A:()=>g});var j=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XS52RFEN.js"),u=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/YV4JVR4I.js"),M=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tab/tab-list.js"),y=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tab/tab.js"),b=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tab/tab-panel.js"),C=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),c=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),D=t("../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),P=t("../../../node_modules/.pnpm/@wordpress+compose@7.24.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js"),w=t("../../../node_modules/.pnpm/@wordpress+i18n@5.24.0/node_modules/@wordpress/i18n/build-module/index.js"),f=t("../../../node_modules/.pnpm/@wordpress+components@29.10.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),n=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v=h=>{if(!(typeof h>"u"||h===null))return h.match(/^tab-panel-[0-9]*-(.*)/)?.[1]},k=({className:h,children:B,tabs:o,selectOnMove:_=!0,initialTabName:i,orientation:T="horizontal",activeClass:S="is-active",onSelect:m},O)=>{const p=(0,D.A)(I,"tab-panel"),a=(0,c.useCallback)(e=>{if(!(typeof e>"u"))return`${p}-${e}`},[p]),s=j.W({setSelectedId:e=>{if(typeof e>"u"||e===null)return;const r=o.find(L=>a(L.name)===e);if(r?.disabled||r===l)return;const A=v(e);typeof A>"u"||m?.(A)},orientation:T,selectOnMove:_,defaultSelectedId:a(i),rtl:(0,w.isRTL)()}),d=v(u.O$(s,"selectedId")),x=(0,c.useCallback)(e=>{s.setState("selectedId",a(e))},[a,s]),l=o.find(({name:e})=>e===d),U=(0,P.A)(d);return(0,c.useEffect)(()=>{U!==d&&d===i&&d&&m?.(d)},[d,i,m,U]),(0,c.useLayoutEffect)(()=>{if(l)return;const e=o.find(r=>r.name===i);if(!(i&&!e))if(e&&!e.disabled)x(e.name);else{const r=o.find(A=>!A.disabled);r&&x(r.name)}},[o,l,i,p,x]),(0,c.useEffect)(()=>{if(!l?.disabled)return;const e=o.find(r=>!r.disabled);e&&x(e.name)},[o,l?.disabled,x,p]),(0,n.jsxs)("div",{className:h,ref:O,children:[(0,n.jsx)(M.w,{store:s,className:"components-tab-panel__tabs",children:o.map(e=>(0,n.jsx)(y.o,{id:a(e.name),className:(0,C.A)("components-tab-panel__tabs-item",e.className,{[S]:e.name===d}),disabled:e.disabled,"aria-controls":`${a(e.name)}-view`,render:(0,n.jsx)(f.Ay,{__next40pxDefaultSize:!0,icon:e.icon,label:e.icon&&e.title,showTooltip:!!e.icon}),children:!e.icon&&e.title},e.name))}),l&&(0,n.jsx)(b.K,{id:`${a(l.name)}-view`,store:s,tabId:a(l.name),className:"components-tab-panel__tab-content",children:B(l)})]})},I=(0,c.forwardRef)(k),g=I},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../publicize-components/src/components/tabbed-modal/style.module.scss":(R,E,t)=>{t.d(E,{A:()=>C});var j=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=t.n(j),M=t("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),y=t.n(M),b=y()(u());b.push([R.id,".bleLRRv1FJb8heeaQsAd .components-modal__header-heading{font-weight:400;font-size:24px}.PbTylKwtQ8456HXglxgA .components-tab-panel__tabs{height:48px;border-bottom:1px solid var(--jp-gray-10)}.jgEBpAUFcVIDKiJ8DxwQ{font-size:16px;font-weight:400}",""]),b.locals={modal:"bleLRRv1FJb8heeaQsAd",wrapper:"PbTylKwtQ8456HXglxgA",tab:"jgEBpAUFcVIDKiJ8DxwQ"};const C=b}}]);
