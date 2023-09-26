"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(A,a,e)=>{e.d(a,{Z:()=>i});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=e.n(o),r=e("../../../node_modules/.pnpm/@wordpress+compose@6.18.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),d=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.41.0/node_modules/@wordpress/deprecated/build-module/index.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/use-context-system.js"),I=e("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-connect.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@25.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");function W(l,s){const[c,g]=(0,n.useState)(l);return[c,m=>{g(m),s&&s(m)}]}const u=(l,s)=>{const{renderContent:c,renderToggle:g,className:m,contentClassName:D,expandOnMobile:f,headerTitle:w,focusOnMount:M,popoverProps:t,onClose:T,onToggle:p,style:O,position:S,variant:U}=(0,E.y)(l,"Dropdown");S!==void 0&&(0,d.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[R,C]=(0,n.useState)(null),P=(0,n.useRef)(),[v,B]=W(!1,p);(0,n.useEffect)(()=>()=>{p&&v&&p(!1)},[p,v]);function F(){B(!v)}function k(){var N;if(!P.current)return;const{ownerDocument:x}=P.current,L=(N=x==null?void 0:x.activeElement)==null?void 0:N.closest('[role="dialog"]');!P.current.contains(x.activeElement)&&(!L||L.contains(P.current))&&y()}function y(){T&&T(),B(!1)}const j={isOpen:v,onToggle:F,onClose:y},K=!!(t!=null&&t.anchor)||!!(t!=null&&t.anchorRef)||!!(t!=null&&t.getAnchorRect)||!!(t!=null&&t.anchorRect);return(0,n.createElement)("div",{className:m,ref:(0,r.Z)([P,s,C]),tabIndex:-1,style:O},g(j),v&&(0,n.createElement)(b.ZP,{position:S,onClose:y,onFocusOutside:k,expandOnMobile:f,headerTitle:w,focusOnMount:M,offset:13,anchor:K?void 0:R,variant:U,...t,className:_()("components-dropdown__content",t==null?void 0:t.className,D)},c(j)))},i=(0,I.Iq)(u,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(A,a,e)=>{e.d(a,{Z:()=>r});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,n.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/download.js":(A,a,e)=>{e.d(a,{Z:()=>r});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,n.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(A,a,e)=>{e.d(a,{Z:()=>r});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,n.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(A,a,e)=>{var m,D,f,w,M,t,T,p,O,S,U,R;e.r(a),e.d(a,{Default:()=>i,WithChildren:()=>l,WithMenu:()=>s,WithMenuForStandalone:()=>c,__namedExportsOrder:()=>g,default:()=>W});var n=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../packages/my-jetpack/_inc/state/store.js"),r=e("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),d=e("../../packages/my-jetpack/_inc/components/product-card/action-button.jsx"),E=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),I=`/* eslint-disable react/react-in-jsx-scope */
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
`,b={Default:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},WithChildren:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},WithMenu:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},WithMenuForStandalone:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}}};window.myJetpackRest={},(0,_.N)();const W={title:"Packages/My Jetpack/Product Card",component:r.ZP,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},"with-children":{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},"with-menu":{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},"with-menu-for-standalone":{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[C=>(0,E.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,E.jsx)(C,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[d.N.ACTIVE,d.N.INACTIVE,d.N.ERROR,d.N.ABSENT,d.N.ABSENT_WITH_PLAN,d.N.NEEDS_PURCHASE,d.N.NEEDS_PURCHASE_OR_FREE]}}},u=C=>(0,E.jsx)(r.ZP,{...C});u.displayName="Template";const h={name:"Backup",description:"Save every change",status:d.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},i=u.bind({});i.args=h;const l=u.bind({});l.args={...h,children:(0,E.jsx)("div",{children:"Card Children"})};const s=u.bind({});s.args={...h,showMenu:!0,menuItems:[{label:"Upload",icon:n.Z}]};const c=u.bind({});c.args={...h,showMenu:!0,menuItems:[{label:"Upload",icon:n.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"args => <ProductCard {...args} />",...(f=(D=i.parameters)==null?void 0:D.docs)==null?void 0:f.source}}},l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:"args => <ProductCard {...args} />",...(t=(M=l.parameters)==null?void 0:M.docs)==null?void 0:t.source}}},s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:"args => <ProductCard {...args} />",...(O=(p=s.parameters)==null?void 0:p.docs)==null?void 0:O.source}}},c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"args => <ProductCard {...args} />",...(R=(U=c.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};const g=["Default","WithChildren","WithMenu","WithMenuForStandalone"]}}]);})();
