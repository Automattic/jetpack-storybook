"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(T,r,e)=>{e.d(r,{Z:()=>l});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=e.n(a),o=e("../../../node_modules/.pnpm/@wordpress+compose@6.24.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.47.0/node_modules/@wordpress/deprecated/build-module/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),P=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js"),D=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");const i=(m,p)=>{const{renderContent:_,renderToggle:y,className:A,contentClassName:C,expandOnMobile:f,headerTitle:O,focusOnMount:M,popoverProps:t,onClose:h,onToggle:w,style:U,open:R,defaultOpen:W,position:S,variant:g}=(0,d.y)(m,"Dropdown");S!==void 0&&(0,s.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[k,K]=(0,n.useState)(null),v=(0,n.useRef)(),[I,B]=(0,D.O)({defaultValue:W,value:R,onChange:w});function F(){var N;if(!v.current)return;const{ownerDocument:x}=v.current,L=(N=x==null?void 0:x.activeElement)==null?void 0:N.closest('[role="dialog"]');!v.current.contains(x.activeElement)&&(!L||L.contains(v.current))&&b()}function b(){h==null||h(),B(!1)}const j={isOpen:!!I,onToggle:()=>B(!I),onClose:b},V=!!(t!=null&&t.anchor)||!!(t!=null&&t.anchorRef)||!!(t!=null&&t.getAnchorRect)||!!(t!=null&&t.anchorRect);return(0,n.createElement)("div",{className:A,ref:(0,o.Z)([v,p,K]),tabIndex:-1,style:U},y(j),I&&(0,n.createElement)(E.ZP,{position:S,onClose:b,onFocusOutside:F,expandOnMobile:f,headerTitle:O,focusOnMount:M,offset:13,anchor:V?void 0:k,variant:g,...t,className:u()("components-dropdown__content",t==null?void 0:t.className,C)},_(j)))},l=(0,P.Iq)(i,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.13.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":(T,r,e)=>{e.d(r,{O:()=>a});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function a({defaultValue:u,onChange:o,value:s}){const d=typeof s!="undefined",P=d?s:u,[D,E]=(0,n.useState)(P),i=d?s:D;let c;return d&&typeof o=="function"?c=o:!d&&typeof o=="function"?c=l=>{o(l),E(l)}:c=E,[i,c]}},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(T,r,e)=>{e.d(r,{Z:()=>o});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,n.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/download.js":(T,r,e)=>{e.d(r,{Z:()=>o});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,n.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(T,r,e)=>{e.d(r,{Z:()=>o});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+primitives@3.45.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,n.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(T,r,e)=>{var A,C,f,O,M,t,h,w,U,R,W,S;e.r(r),e.d(r,{Default:()=>l,WithChildren:()=>m,WithMenu:()=>p,WithMenuForStandalone:()=>_,__namedExportsOrder:()=>y,default:()=>E});var n=e("../../../node_modules/.pnpm/@wordpress+icons@9.38.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../packages/my-jetpack/_inc/state/store.js"),o=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),s=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=`/* eslint-disable react/react-in-jsx-scope */
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import { initStore } from '../../../state/store';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};

initStore();

export default {
	title: 'Packages/My Jetpack/Product Card',
	component: ProductCard,
	parameters: {
		layout: 'centered',
		actions: {
			argTypesRegex: '^on.*',
		},
		controls: {
			exclude: '^on.*',
		},
		backgrounds: {
			default: 'light',
			values: [ { name: 'light', value: 'var(--jp-white-off)' } ],
		},
	},
	decorators: [
		Story => (
			<div style={ { width: '100vw', maxWidth: 400 } }>
				<Story />
			</div>
		),
	],
	argTypes: {
		menuItems: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
		slug: {
			control: 'select',
			options: [
				'anti-spam',
				'backup',
				'boost',
				'crm',
				'extras',
				'protect',
				'scan',
				'social',
				'search',
				'videopress',
			],
		},
		status: {
			control: 'select',
			options: [
				PRODUCT_STATUSES.ACTIVE,
				PRODUCT_STATUSES.INACTIVE,
				PRODUCT_STATUSES.ERROR,
				PRODUCT_STATUSES.ABSENT,
				PRODUCT_STATUSES.ABSENT_WITH_PLAN,
				PRODUCT_STATUSES.NEEDS_PURCHASE,
				PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE,
			],
		},
	},
};

const Template = args => <ProductCard { ...args } />;

const DefaultArgs = {
	name: 'Backup',
	description: 'Save every change',
	status: PRODUCT_STATUSES.ACTIVE,
	admin: true,
	slug: 'backup',
	isFetching: false,
	showMenu: false,
};

export const Default = Template.bind( {} );
Default.args = DefaultArgs;

export const WithChildren = Template.bind( {} );
WithChildren.args = {
	...DefaultArgs,
	children: <div>Card Children</div>,
};

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
};

export const WithMenuForStandalone = Template.bind( {} );
WithMenuForStandalone.args = {
	...DefaultArgs,
	showMenu: true,
	menuItems: [
		{
			label: 'Upload',
			icon: arrowUp,
		},
	],
	onInstallStandalone: () => alert( 'Installing standalone plugin' ),
	onActivateStandalone: () => alert( 'Activating standalone plugin' ),
	hasStandalonePlugin: true,
	isStandaloneInstalled: false,
	isStandaloneActive: false,
};
`,D={Default:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},WithChildren:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},WithMenu:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},WithMenuForStandalone:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}}};window.myJetpackRest={},(0,u.N)();const E={title:"Packages/My Jetpack/Product Card",component:o.ZP,parameters:{storySource:{source:`
import { arrowUp } from '@wordpress/icons';
import React from 'react';
import { initStore } from '../../../state/store';
import ProductCard, { PRODUCT_STATUSES } from '../index.jsx';

// Set myJetpackRest global var.
window.myJetpackRest = {};
initStore();
export default {
  title: 'Packages/My Jetpack/Product Card',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    actions: {
      argTypesRegex: '^on.*'
    },
    controls: {
      exclude: '^on.*'
    },
    backgrounds: {
      default: 'light',
      values: [{
        name: 'light',
        value: 'var(--jp-white-off)'
      }]
    }
  },
  decorators: [Story => <div style={{
    width: '100vw',
    maxWidth: 400
  }}>
                <Story />
            </div>],
  argTypes: {
    menuItems: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    slug: {
      control: 'select',
      options: ['anti-spam', 'backup', 'boost', 'crm', 'extras', 'protect', 'scan', 'social', 'search', 'videopress']
    },
    status: {
      control: 'select',
      options: [PRODUCT_STATUSES.ACTIVE, PRODUCT_STATUSES.INACTIVE, PRODUCT_STATUSES.ERROR, PRODUCT_STATUSES.ABSENT, PRODUCT_STATUSES.ABSENT_WITH_PLAN, PRODUCT_STATUSES.NEEDS_PURCHASE, PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE]
    }
  }
};
const Template = args => <ProductCard {...args} />;
const DefaultArgs = {
  name: 'Backup',
  description: 'Save every change',
  status: PRODUCT_STATUSES.ACTIVE,
  admin: true,
  slug: 'backup',
  isFetching: false,
  showMenu: false
};
export const Default = Template.bind({});
Default.args = DefaultArgs;
export const WithChildren = Template.bind({});
WithChildren.args = {
  ...DefaultArgs,
  children: <div>Card Children</div>
};
export const WithMenu = Template.bind({});
WithMenu.args = {
  ...DefaultArgs,
  showMenu: true,
  menuItems: [{
    label: 'Upload',
    icon: arrowUp
  }]
};
export const WithMenuForStandalone = Template.bind({});
WithMenuForStandalone.args = {
  ...DefaultArgs,
  showMenu: true,
  menuItems: [{
    label: 'Upload',
    icon: arrowUp
  }],
  onInstallStandalone: () => alert('Installing standalone plugin'),
  onActivateStandalone: () => alert('Activating standalone plugin'),
  hasStandalonePlugin: true,
  isStandaloneInstalled: false,
  isStandaloneActive: false
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <ProductCard {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
WithChildren.parameters = {
  ...WithChildren.parameters,
  docs: {
    ...WithChildren.parameters?.docs,
    source: {
      originalSource: "args => <ProductCard {...args} />",
      ...WithChildren.parameters?.docs?.source
    }
  }
};
WithMenu.parameters = {
  ...WithMenu.parameters,
  docs: {
    ...WithMenu.parameters?.docs,
    source: {
      originalSource: "args => <ProductCard {...args} />",
      ...WithMenu.parameters?.docs?.source
    }
  }
};
WithMenuForStandalone.parameters = {
  ...WithMenuForStandalone.parameters,
  docs: {
    ...WithMenuForStandalone.parameters?.docs,
    source: {
      originalSource: "args => <ProductCard {...args} />",
      ...WithMenuForStandalone.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},"with-children":{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},"with-menu":{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},"with-menu-for-standalone":{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[g=>(0,d.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,d.jsx)(g,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[s.N.ACTIVE,s.N.INACTIVE,s.N.ERROR,s.N.ABSENT,s.N.ABSENT_WITH_PLAN,s.N.NEEDS_PURCHASE,s.N.NEEDS_PURCHASE_OR_FREE]}}},i=g=>(0,d.jsx)(o.ZP,{...g});i.displayName="Template";const c={name:"Backup",description:"Save every change",status:s.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},l=i.bind({});l.args=c;const m=i.bind({});m.args={...c,children:(0,d.jsx)("div",{children:"Card Children"})};const p=i.bind({});p.args={...c,showMenu:!0,menuItems:[{label:"Upload",icon:n.Z}]};const _=i.bind({});_.args={...c,showMenu:!0,menuItems:[{label:"Upload",icon:n.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:"args => <ProductCard {...args} />",...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}},m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:"args => <ProductCard {...args} />",...(t=(M=m.parameters)==null?void 0:M.docs)==null?void 0:t.source}}},p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:"args => <ProductCard {...args} />",...(U=(w=p.parameters)==null?void 0:w.docs)==null?void 0:U.source}}},_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:"args => <ProductCard {...args} />",...(S=(W=_.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};const y=["Default","WithChildren","WithMenu","WithMenuForStandalone"]}}]);})();
