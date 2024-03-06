"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5997],{"../components/components/product-offer/stories/index.stories.tsx":(v,c,a)=>{var l,p,m,f,y,g,k,P,C,B,b,S;a.r(c),a.d(c,{IconsCardStory:()=>t,JetpackBackup:()=>n,JetpackProtect:()=>r,SecurityBundle:()=>e,__namedExportsOrder:()=>h,default:()=>O});var i=a("../components/components/product-offer/index.tsx"),T=a("../components/components/product-offer/icons-card.tsx"),d=a("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),I=`import ProductOffer from '..';
import { IconsCard } from '../icons-card';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Product Offer',
	component: ProductOffer,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		layout: 'centered',
	},
} as ComponentMeta< typeof ProductOffer >;

const Template: ComponentStory< typeof ProductOffer > = args => <ProductOffer { ...args } />;

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

const IconsCardTemplate: ComponentStory< typeof IconsCard > = args => <IconsCard { ...args } />;

export const IconsCardStory = IconsCardTemplate.bind( {} );
IconsCardStory.parameters = {};
IconsCardStory.args = {
	products: [ 'backup', 'scan', 'anti-spam' ],
};
IconsCardStory.storyName = 'Icons Card';
`,_={SecurityBundle:{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},JetpackBackup:{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},JetpackProtect:{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},IconsCardStory:{startLoc:{col:62,line:97},endLoc:{col:95,line:97},startBody:{col:62,line:97},endBody:{col:95,line:97}}};const O={title:"JS Packages/Components/Product Offer",component:i.Z,parameters:{storySource:{source:`import ProductOffer from '..';
import { IconsCard } from '../icons-card';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Product Offer',
	component: ProductOffer,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
		layout: 'centered',
	},
} as ComponentMeta< typeof ProductOffer >;

const Template: ComponentStory< typeof ProductOffer > = args => <ProductOffer { ...args } />;

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

const IconsCardTemplate: ComponentStory< typeof IconsCard > = args => <IconsCard { ...args } />;

export const IconsCardStory = IconsCardTemplate.bind( {} );
IconsCardStory.parameters = {};
IconsCardStory.args = {
	products: [ 'backup', 'scan', 'anti-spam' ],
};
IconsCardStory.storyName = 'Icons Card';
`,locationsMap:{"security-bundle":{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},"jetpack-backup":{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},"jetpack-protect":{startLoc:{col:56,line:14},endLoc:{col:92,line:14},startBody:{col:56,line:14},endBody:{col:92,line:14}},"icons-card-story":{startLoc:{col:62,line:97},endLoc:{col:95,line:97},startBody:{col:62,line:97},endBody:{col:95,line:97}}}},actions:{argTypesRegex:"^on.*"},layout:"centered"}},o=s=>(0,d.jsx)(i.Z,{...s});o.displayName="Template";const e=o.bind({});e.parameters={},e.args={slug:"security",icon:"",name:"Security",title:"Security",subTitle:"",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",isBundle:!0,isCard:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricing:{currency:"USD",price:24.92,offPrice:12.42},buttonText:"",addProductUrl:"",hasRequiredPlan:!1,isLoading:!1,error:""};const n=o.bind({});n.parameters={},n.args={slug:"backup",icon:"",name:"Backup",title:"Jepack Backup",subTitle:"",description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],isBundle:!1,isCard:!0,pricing:{currency:"USD",price:9.66,offPrice:3.95},addProductUrl:"",hasRequiredPlan:!1,isLoading:!1};const r=o.bind({});r.parameters={},r.args={slug:"protect",icon:"jetpack",title:"Protect",subTitle:"Protect your site and scan for security vulnerabilities listed in our database.",features:["Over 20,000 listed vulnerabilities","Daily automatic scans","Check plugin and theme version status","Easy to navigate and use"],isBundle:!1,isCard:!0,pricing:{isFree:!0},addProductUrl:"",hasRequiredPlan:!1,isLoading:!1};const u=s=>(0,d.jsx)(T.T,{...s});u.displayName="IconsCardTemplate";const t=u.bind({});t.parameters={},t.args={products:["backup","scan","anti-spam"]},t.storyName="Icons Card",e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"args => <ProductOffer {...args} />",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}},n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"args => <ProductOffer {...args} />",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}},r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:"args => <ProductOffer {...args} />",...(C=(P=r.parameters)==null?void 0:P.docs)==null?void 0:C.source}}},t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:"args => <IconsCard {...args} />",...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const h=["SecurityBundle","JetpackBackup","JetpackProtect","IconsCardStory"]}}]);})();
