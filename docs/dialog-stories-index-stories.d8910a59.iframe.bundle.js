"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9753],{"../components/components/dialog/stories/index.stories.tsx":(B,r,t)=>{var i,p,l,d,u,m;t.r(r),t.d(r,{JetpackBackup:()=>n,JetpackBoost:()=>e,__namedExportsOrder:()=>k,default:()=>g});var b=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../components/components/dialog/index.tsx"),o=t("../components/components/product-offer/index.tsx");const f=t.p+"static/media/boost.a5413748.png";var a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
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
`,h={JetpackBoost:{startLoc:{col:17,line:33},endLoc:{col:47,line:33},startBody:{col:17,line:33},endBody:{col:47,line:33}},JetpackBackup:{startLoc:{col:17,line:33},endLoc:{col:47,line:33},startBody:{col:17,line:33},endBody:{col:47,line:33}}};const g={title:"JS Packages/Components/Dialog",component:c.Z,parameters:{storySource:{source:`
import React from 'react';
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
`,locationsMap:{"jetpack-boost":{startLoc:{col:17,line:33},endLoc:{col:47,line:33},startBody:{col:17,line:33},endBody:{col:47,line:33}},"jetpack-backup":{startLoc:{col:17,line:33},endLoc:{col:47,line:33},startBody:{col:17,line:33},endBody:{col:47,line:33}}}},actions:{argTypesRegex:"^on.*"},layout:"centered"},argTypes:{primary:{table:{disable:!0}},secondary:{table:{disable:!0}},isTwoSections:{table:{disable:!0}}}},s=y=>(0,a.jsx)(c.Z,{...y});s.displayName="Template";const e=s.bind({});e.parameters={},e.args={primary:(0,a.jsx)(o.Z,{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricing:{isFree:!0},className:"",isCard:!1,supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,a.jsx)("img",{src:f,alt:"Boost"}),isTwoSections:!1};const n=s.bind({});n.parameters={},n.args={primary:(0,a.jsx)(o.Z,{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricing:{currency:"USD",price:24.92,offPrice:12.42},isCard:!0,className:"",supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,a.jsx)(o.Z,{name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",isBundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real time cloud backups with 10GB storage","Automated real-time malware scan","One click fixes for most threats","Comment & form spam protection"],pricing:{currency:"USD",price:24.92,offPrice:12.42},hasRequiredPlan:!1,isLoading:!1,className:"",isCard:!1,addProductUrl:""}),isTwoSections:!0},e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Dialog {...args} />",...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}},n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Dialog {...args} />",...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const k=["JetpackBoost","JetpackBackup"]}}]);})();
