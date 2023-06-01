"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2110],{"../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js":(v,d,t)=>{t.d(d,{Z:()=>c});var s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=t("../../../node_modules/.pnpm/@wordpress+primitives@3.32.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,s.createElement)(p.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(p.y$,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"}))},"../../packages/my-jetpack/_inc/components/product-card/stories/index.stories.jsx":(v,d,t)=>{var _,g,h,T,E,C,A,P,U,D,R,f;t.r(d),t.d(d,{Default:()=>e,WithChildren:()=>a,WithMenu:()=>o,WithMenuForStandalone:()=>r,__namedExportsOrder:()=>y,default:()=>M});var s=t("../../../node_modules/.pnpm/@wordpress+icons@9.25.0/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),p=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=t("../../packages/my-jetpack/_inc/state/store.js"),c=t("../../packages/my-jetpack/_inc/components/product-card/index.jsx"),n=t("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),i=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),W=`/* eslint-disable react/react-in-jsx-scope */
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
`,x={Default:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},WithChildren:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},WithMenu:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},WithMenuForStandalone:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}}};window.myJetpackRest={},(0,S.N)();const M={title:"Packages/My Jetpack/Product Card",component:c.Z,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},"with-children":{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},"with-menu":{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}},"with-menu-for-standalone":{startLoc:{col:17,line:56},endLoc:{col:50,line:56},startBody:{col:17,line:56},endBody:{col:50,line:56}}}},layout:"centered",actions:{argTypesRegex:"^on.*"},controls:{exclude:"^on.*"},backgrounds:{default:"light",values:[{name:"light",value:"var(--jp-white-off)"}]}},decorators:[m=>(0,i.jsx)("div",{style:{width:"100vw",maxWidth:400},children:(0,i.jsx)(m,{})})],argTypes:{menuItems:{table:{disable:!0}},children:{table:{disable:!0}},slug:{control:"select",options:["anti-spam","backup","boost","crm","extras","protect","scan","social","search","videopress"]},status:{control:"select",options:[n.N.ACTIVE,n.N.INACTIVE,n.N.ERROR,n.N.ABSENT,n.N.ABSENT_WITH_PLAN,n.N.NEEDS_PURCHASE,n.N.NEEDS_PURCHASE_OR_FREE]}}},l=m=>(0,i.jsx)(c.Z,{...m});l.displayName="Template";const u={name:"Backup",description:"Save every change",status:n.N.ACTIVE,admin:!0,slug:"backup",isFetching:!1,showMenu:!1},e=l.bind({});e.args=u;const a=l.bind({});a.args={...u,children:(0,i.jsx)("div",{children:"Card Children"})};const o=l.bind({});o.args={...u,showMenu:!0,menuItems:[{label:"Upload",icon:s.Z}]};const r=l.bind({});r.args={...u,showMenu:!0,menuItems:[{label:"Upload",icon:s.Z}],onInstallStandalone:()=>alert("Installing standalone plugin"),onActivateStandalone:()=>alert("Activating standalone plugin"),hasStandalonePlugin:!0,isStandaloneInstalled:!1,isStandaloneActive:!1},e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:"args => <ProductCard {...args} />",...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}},a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:"args => <ProductCard {...args} />",...(C=(E=a.parameters)==null?void 0:E.docs)==null?void 0:C.source}}},o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:"args => <ProductCard {...args} />",...(U=(P=o.parameters)==null?void 0:P.docs)==null?void 0:U.source}}},r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:"args => <ProductCard {...args} />",...(f=(R=r.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const y=["Default","WithChildren","WithMenu","WithMenuForStandalone"]}}]);})();
