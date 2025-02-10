"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4076],{"../components/components/dialog/stories/index.stories.tsx":(u,s,t)=>{t.r(s),t.d(s,{JetpackBackup:()=>n,JetpackBoost:()=>e,__namedExportsOrder:()=>l,default:()=>p});var m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=t("../components/components/dialog/index.tsx"),o=t("../components/components/product-offer/index.tsx");const i=t.p+"static/media/boost.9e9a227e.png";var a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=`import React from 'react';
import Dialog from '..';
import ProductOffer from '../../product-offer';
import BoostImage from './boost.png';

export default {
	title: 'JS Packages/Components/Dialog',
	component: Dialog,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		layout: 'centered',
	},
	argTypes: {
		primary: {
			table: {
				disable: true,
			},
		},
		secondary: {
			table: {
				disable: true,
			},
		},
		isTwoSections: {
			table: {
				disable: true,
			},
		},
	},
};

const Template = args => <Dialog { ...args } />;

export const JetpackBoost = Template.bind( {} );
JetpackBoost.parameters = {};
JetpackBoost.args = {
	primary: (
		<ProductOffer
			slug="boost"
			name="Boost"
			title="Jepack Boost"
			description="Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required."
			features={ [
				'Check your site performance',
				'Enable improvements in one click',
				'Standalone free plugin for those focused on speed',
			] }
			pricing={ {
				isFree: true,
			} }
			className={ '' }
			isCard={ false }
			supportedProducts={ [] }
			hasRequiredPlan={ false }
			addProductUrl={ '' }
		/>
	),
	secondary: <img src={ BoostImage } alt="Boost" />,
	isTwoSections: false,
};

export const JetpackBackup = Template.bind( {} );
JetpackBackup.parameters = {};
JetpackBackup.args = {
	primary: (
		<ProductOffer
			slug={ 'backup' }
			name={ 'Backup' }
			title={ 'Jepack Backup' }
			description={
				'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.'
			}
			features={ [
				'Real-time cloud backups',
				'10GB of backup storage',
				'30-day archive & activity log',
				'One-click restores',
			] }
			pricing={ {
				currency: 'USD',
				price: 24.92,
				offPrice: 12.42,
			} }
			isCard={ true }
			className={ '' }
			supportedProducts={ [] }
			hasRequiredPlan={ false }
			addProductUrl={ '' }
		/>
	),
	secondary: (
		<ProductOffer
			name="Security"
			title="Security"
			description="Comprehensive site security, including Backup, Scan, and Anti-spam."
			isBundle={ true }
			supportedProducts={ [ 'backup', 'scan', 'anti-spam' ] }
			features={ [
				'Real time cloud backups with 10GB storage',
				'Automated real-time malware scan',
				'One click fixes for most threats',
				'Comment & form spam protection',
			] }
			pricing={ {
				currency: 'USD',
				price: 24.92,
				offPrice: 12.42,
			} }
			hasRequiredPlan={ false }
			isLoading={ false }
			className={ '' }
			isCard={ false }
			addProductUrl={ '' }
		/>
	),
	isTwoSections: true,
};
`,g={JetpackBoost:{startLoc:{col:17,line:33},endLoc:{col:2,line:35},startBody:{col:17,line:33},endBody:{col:2,line:35}},JetpackBackup:{startLoc:{col:17,line:33},endLoc:{col:2,line:35},startBody:{col:17,line:33},endBody:{col:2,line:35}}};const p={title:"JS Packages/Components/Dialog",component:r.A,parameters:{storySource:{source:`import React from 'react';
import Dialog from '..';
import ProductOffer from '../../product-offer';
import BoostImage from './boost.png';
import { jsx as _jsx } from "react/jsx-runtime";
export default {
  title: 'JS Packages/Components/Dialog',
  component: Dialog,
  parameters: {
    actions: {
      argTypesRegex: '^on.*'
    },
    layout: 'centered'
  },
  argTypes: {
    primary: {
      table: {
        disable: true
      }
    },
    secondary: {
      table: {
        disable: true
      }
    },
    isTwoSections: {
      table: {
        disable: true
      }
    }
  }
};
const Template = args => /*#__PURE__*/_jsx(Dialog, {
  ...args
});
export const JetpackBoost = Template.bind({});
JetpackBoost.parameters = {};
JetpackBoost.args = {
  primary: /*#__PURE__*/_jsx(ProductOffer, {
    slug: "boost",
    name: "Boost",
    title: "Jepack Boost",
    description: "Jetpack Boost gives your site the same performance advantages as the world\\u2019s leading websites, no developer required.",
    features: ['Check your site performance', 'Enable improvements in one click', 'Standalone free plugin for those focused on speed'],
    pricing: {
      isFree: true
    },
    className: '',
    isCard: false,
    supportedProducts: [],
    hasRequiredPlan: false,
    addProductUrl: ''
  }),
  secondary: /*#__PURE__*/_jsx("img", {
    src: BoostImage,
    alt: "Boost"
  }),
  isTwoSections: false
};
export const JetpackBackup = Template.bind({});
JetpackBackup.parameters = {};
JetpackBackup.args = {
  primary: /*#__PURE__*/_jsx(ProductOffer, {
    slug: 'backup',
    name: 'Backup',
    title: 'Jepack Backup',
    description: 'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.',
    features: ['Real-time cloud backups', '10GB of backup storage', '30-day archive & activity log', 'One-click restores'],
    pricing: {
      currency: 'USD',
      price: 24.92,
      offPrice: 12.42
    },
    isCard: true,
    className: '',
    supportedProducts: [],
    hasRequiredPlan: false,
    addProductUrl: ''
  }),
  secondary: /*#__PURE__*/_jsx(ProductOffer, {
    name: "Security",
    title: "Security",
    description: "Comprehensive site security, including Backup, Scan, and Anti-spam.",
    isBundle: true,
    supportedProducts: ['backup', 'scan', 'anti-spam'],
    features: ['Real time cloud backups with 10GB storage', 'Automated real-time malware scan', 'One click fixes for most threats', 'Comment & form spam protection'],
    pricing: {
      currency: 'USD',
      price: 24.92,
      offPrice: 12.42
    },
    hasRequiredPlan: false,
    isLoading: false,
    className: '',
    isCard: false,
    addProductUrl: ''
  }),
  isTwoSections: true
};`,locationsMap:{"jetpack-boost":{startLoc:{col:17,line:33},endLoc:{col:2,line:35},startBody:{col:17,line:33},endBody:{col:2,line:35}},"jetpack-backup":{startLoc:{col:17,line:33},endLoc:{col:2,line:35},startBody:{col:17,line:33},endBody:{col:2,line:35}}}},actions:{argTypesRegex:"^on.*"},layout:"centered"},argTypes:{primary:{table:{disable:!0}},secondary:{table:{disable:!0}},isTwoSections:{table:{disable:!0}}}},c=d=>(0,a.jsx)(r.A,{...d}),e=c.bind({});e.parameters={},e.args={primary:(0,a.jsx)(o.A,{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricing:{isFree:!0},className:"",isCard:!1,supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,a.jsx)("img",{src:i,alt:"Boost"}),isTwoSections:!1};const n=c.bind({});n.parameters={},n.args={primary:(0,a.jsx)(o.A,{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricing:{currency:"USD",price:24.92,offPrice:12.42},isCard:!0,className:"",supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,a.jsx)(o.A,{name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",isBundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real time cloud backups with 10GB storage","Automated real-time malware scan","One click fixes for most threats","Comment & form spam protection"],pricing:{currency:"USD",price:24.92,offPrice:12.42},hasRequiredPlan:!1,isLoading:!1,className:"",isCard:!1,addProductUrl:""}),isTwoSections:!0};const l=["JetpackBoost","JetpackBackup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Dialog {...args} />",...e.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <Dialog {...args} />",...n.parameters?.docs?.source}}}}}]);
