"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4076],{"../components/components/dialog/stories/index.stories.tsx":(u,s,n)=>{n.r(s),n.d(s,{JetpackBackup:()=>e,JetpackBoost:()=>t,__namedExportsOrder:()=>d,default:()=>p});var o=n("../components/components/product-offer/index.tsx"),r=n("../components/components/dialog/index.tsx");const l=n.p+"static/media/boost.9e9a227e.png";var a=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),m=`import ProductOffer from '../../product-offer/index.tsx';
import Dialog from '../index.tsx';
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
`,f={JetpackBoost:{startLoc:{col:17,line:32},endLoc:{col:2,line:34},startBody:{col:17,line:32},endBody:{col:2,line:34}},JetpackBackup:{startLoc:{col:17,line:32},endLoc:{col:2,line:34},startBody:{col:17,line:32},endBody:{col:2,line:34}}};const p={title:"JS Packages/Components/Dialog",component:r.A,parameters:{storySource:{source:`import ProductOffer from '../../product-offer/index.tsx';
import Dialog from '../index.tsx';
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
};`,locationsMap:{"jetpack-boost":{startLoc:{col:17,line:32},endLoc:{col:2,line:34},startBody:{col:17,line:32},endBody:{col:2,line:34}},"jetpack-backup":{startLoc:{col:17,line:32},endLoc:{col:2,line:34},startBody:{col:17,line:32},endBody:{col:2,line:34}}}},actions:{argTypesRegex:"^on.*"},layout:"centered"},argTypes:{primary:{table:{disable:!0}},secondary:{table:{disable:!0}},isTwoSections:{table:{disable:!0}}}},i=c=>(0,a.jsx)(r.A,{...c}),t=i.bind({});t.parameters={},t.args={primary:(0,a.jsx)(o.A,{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricing:{isFree:!0},className:"",isCard:!1,supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,a.jsx)("img",{src:l,alt:"Boost"}),isTwoSections:!1};const e=i.bind({});e.parameters={},e.args={primary:(0,a.jsx)(o.A,{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricing:{currency:"USD",price:24.92,offPrice:12.42},isCard:!0,className:"",supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,a.jsx)(o.A,{name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",isBundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real time cloud backups with 10GB storage","Automated real-time malware scan","One click fixes for most threats","Comment & form spam protection"],pricing:{currency:"USD",price:24.92,offPrice:12.42},hasRequiredPlan:!1,isLoading:!1,className:"",isCard:!1,addProductUrl:""}),isTwoSections:!0};const d=["JetpackBoost","JetpackBackup"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <Dialog {...args} />",...t.parameters?.docs?.source}}},e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Dialog {...args} />",...e.parameters?.docs?.source}}};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"Dialog component.",displayName:"Dialog",props:{primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"ReactNode"}},isTwoSections:{defaultValue:{value:"false"},description:"",name:"isTwoSections",required:!1,type:{name:"boolean"}},isCard:{defaultValue:null,description:"",name:"isCard",required:!1,type:{name:"boolean"}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!0,type:{name:"object"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../components/components/dialog/stories/index.stories.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"../components/components/dialog/stories/index.stories.tsx#Dialog"})}catch{}}}]);
