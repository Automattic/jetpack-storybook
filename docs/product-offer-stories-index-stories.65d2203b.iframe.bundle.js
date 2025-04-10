"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4202],{"../components/components/product-offer/stories/index.stories.tsx":(m,c,a)=>{a.r(c),a.d(c,{IconsCardStory:()=>e,JetpackBackup:()=>n,JetpackProtect:()=>r,SecurityBundle:()=>t,__namedExportsOrder:()=>p,default:()=>l});var u=a("../components/components/product-offer/icons-card.tsx"),i=a("../components/components/product-offer/index.tsx"),d=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),f=`import { IconsCard } from '../icons-card.tsx';
import ProductOffer from '../index.tsx';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta< typeof ProductOffer > = {
	title: 'JS Packages/Components/Product Offer',
	component: ProductOffer,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		layout: 'centered',
	},
};

export default meta;

const Template: StoryFn< typeof ProductOffer > = args => <ProductOffer { ...args } />;

export const SecurityBundle = Template.bind( {} );
SecurityBundle.parameters = {};
SecurityBundle.args = {
	slug: 'security',
	icon: '',
	name: 'Security',
	title: 'Security',
	subTitle: '',
	description: 'Comprehensive site security, including Backup, Scan, and Anti-spam.',
	isBundle: true,
	isCard: true,
	supportedProducts: [ 'backup', 'scan', 'anti-spam' ],
	features: [
		'Real-time cloud backups with 10GB storage',
		'Automated real-time malware scan',
		'One-click fixes for most threats',
		'Comment & form spam protection',
	],
	pricing: {
		currency: 'USD',
		price: 24.92,
		offPrice: 12.42,
	},
	buttonText: '',
	addProductUrl: '',
	hasRequiredPlan: false,
	isLoading: false,
	error: '',
};

export const JetpackBackup = Template.bind( {} );
JetpackBackup.parameters = {};
JetpackBackup.args = {
	slug: 'backup',
	icon: '',
	name: 'Backup',
	title: 'Jepack Backup',
	subTitle: '',
	description:
		'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.',
	features: [
		'Real-time cloud backups',
		'10GB of backup storage',
		'30-day archive & activity log',
		'One-click restores',
	],
	isBundle: false,
	isCard: true,
	pricing: {
		currency: 'USD',
		price: 9.66,
		offPrice: 3.95,
	},
	addProductUrl: '',
	hasRequiredPlan: false,
	isLoading: false,
};

export const JetpackProtect = Template.bind( {} );
JetpackProtect.parameters = {};
JetpackProtect.args = {
	slug: 'protect',
	icon: 'jetpack',
	title: 'Protect',
	subTitle: 'Protect your site and scan for security vulnerabilities listed in our database.',
	features: [
		'Over 20,000 listed vulnerabilities',
		'Daily automatic scans',
		'Check plugin and theme version status',
		'Easy to navigate and use',
	],
	isBundle: false,
	isCard: true,
	pricing: {
		isFree: true,
	},
	addProductUrl: '',
	hasRequiredPlan: false,
	isLoading: false,
};

const IconsCardTemplate: StoryFn< typeof IconsCard > = args => <IconsCard { ...args } />;

export const IconsCardStory = IconsCardTemplate.bind( {} );
IconsCardStory.parameters = {};
IconsCardStory.args = {
	products: [ 'backup', 'scan', 'anti-spam' ],
};
IconsCardStory.storyName = 'Icons Card';
`,y={SecurityBundle:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},JetpackBackup:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},JetpackProtect:{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},IconsCardStory:{startLoc:{col:26,line:80},endLoc:{col:2,line:82},startBody:{col:26,line:80},endBody:{col:2,line:82}}};const l={title:"JS Packages/Components/Product Offer",component:i.A,parameters:{storySource:{source:`import { IconsCard } from '../icons-card.tsx';
import ProductOffer from '../index.tsx';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'JS Packages/Components/Product Offer',
  component: ProductOffer,
  parameters: {
    actions: {
      argTypesRegex: '^on.*'
    },
    layout: 'centered'
  }
};
export default meta;
const Template = args => /*#__PURE__*/_jsx(ProductOffer, {
  ...args
});
export const SecurityBundle = Template.bind({});
SecurityBundle.parameters = {};
SecurityBundle.args = {
  slug: 'security',
  icon: '',
  name: 'Security',
  title: 'Security',
  subTitle: '',
  description: 'Comprehensive site security, including Backup, Scan, and Anti-spam.',
  isBundle: true,
  isCard: true,
  supportedProducts: ['backup', 'scan', 'anti-spam'],
  features: ['Real-time cloud backups with 10GB storage', 'Automated real-time malware scan', 'One-click fixes for most threats', 'Comment & form spam protection'],
  pricing: {
    currency: 'USD',
    price: 24.92,
    offPrice: 12.42
  },
  buttonText: '',
  addProductUrl: '',
  hasRequiredPlan: false,
  isLoading: false,
  error: ''
};
export const JetpackBackup = Template.bind({});
JetpackBackup.parameters = {};
JetpackBackup.args = {
  slug: 'backup',
  icon: '',
  name: 'Backup',
  title: 'Jepack Backup',
  subTitle: '',
  description: 'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.',
  features: ['Real-time cloud backups', '10GB of backup storage', '30-day archive & activity log', 'One-click restores'],
  isBundle: false,
  isCard: true,
  pricing: {
    currency: 'USD',
    price: 9.66,
    offPrice: 3.95
  },
  addProductUrl: '',
  hasRequiredPlan: false,
  isLoading: false
};
export const JetpackProtect = Template.bind({});
JetpackProtect.parameters = {};
JetpackProtect.args = {
  slug: 'protect',
  icon: 'jetpack',
  title: 'Protect',
  subTitle: 'Protect your site and scan for security vulnerabilities listed in our database.',
  features: ['Over 20,000 listed vulnerabilities', 'Daily automatic scans', 'Check plugin and theme version status', 'Easy to navigate and use'],
  isBundle: false,
  isCard: true,
  pricing: {
    isFree: true
  },
  addProductUrl: '',
  hasRequiredPlan: false,
  isLoading: false
};
const IconsCardTemplate = args => /*#__PURE__*/_jsx(IconsCard, {
  ...args
});
export const IconsCardStory = IconsCardTemplate.bind({});
IconsCardStory.parameters = {};
IconsCardStory.args = {
  products: ['backup', 'scan', 'anti-spam']
};
IconsCardStory.storyName = 'Icons Card';`,locationsMap:{"security-bundle":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"jetpack-backup":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"jetpack-protect":{startLoc:{col:17,line:15},endLoc:{col:2,line:17},startBody:{col:17,line:15},endBody:{col:2,line:17}},"icons-card-story":{startLoc:{col:26,line:80},endLoc:{col:2,line:82},startBody:{col:26,line:80},endBody:{col:2,line:82}}}},actions:{argTypesRegex:"^on.*"},layout:"centered"}},s=o=>(0,d.jsx)(i.A,{...o}),t=s.bind({});t.parameters={},t.args={slug:"security",icon:"",name:"Security",title:"Security",subTitle:"",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",isBundle:!0,isCard:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricing:{currency:"USD",price:24.92,offPrice:12.42},buttonText:"",addProductUrl:"",hasRequiredPlan:!1,isLoading:!1,error:""};const n=s.bind({});n.parameters={},n.args={slug:"backup",icon:"",name:"Backup",title:"Jepack Backup",subTitle:"",description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],isBundle:!1,isCard:!0,pricing:{currency:"USD",price:9.66,offPrice:3.95},addProductUrl:"",hasRequiredPlan:!1,isLoading:!1};const r=s.bind({});r.parameters={},r.args={slug:"protect",icon:"jetpack",title:"Protect",subTitle:"Protect your site and scan for security vulnerabilities listed in our database.",features:["Over 20,000 listed vulnerabilities","Daily automatic scans","Check plugin and theme version status","Easy to navigate and use"],isBundle:!1,isCard:!0,pricing:{isFree:!0},addProductUrl:"",hasRequiredPlan:!1,isLoading:!1};const e=(o=>(0,d.jsx)(u.l,{...o})).bind({});e.parameters={},e.args={products:["backup","scan","anti-spam"]},e.storyName="Icons Card";const p=["SecurityBundle","JetpackBackup","JetpackProtect","IconsCardStory"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <ProductOffer {...args} />",...t.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <ProductOffer {...args} />",...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <ProductOffer {...args} />",...r.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <IconsCard {...args} />",...e.parameters?.docs?.source}}}}}]);
