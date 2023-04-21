"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5997],{"../components/components/product-offer/stories/index.stories.tsx":(S,l,e)=>{var c,i,x,v,h,t,A,b,O,d,B,k;e.r(l),e.d(l,{IconsCardStory:()=>r,JetpackBackup:()=>o,JetpackProtect:()=>s,SecurityBundle:()=>a,__namedExportsOrder:()=>n,default:()=>g});var u=e("../components/components/product-offer/index.tsx"),_=e("../components/components/product-offer/icons-card.tsx"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),P=`import ProductOffer from '..';
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
`,m={SecurityBundle:{startLoc:{col:54,line:14},endLoc:{col:88,line:14},startBody:{col:54,line:14},endBody:{col:88,line:14}},JetpackBackup:{startLoc:{col:54,line:14},endLoc:{col:88,line:14},startBody:{col:54,line:14},endBody:{col:88,line:14}},JetpackProtect:{startLoc:{col:54,line:14},endLoc:{col:88,line:14},startBody:{col:54,line:14},endBody:{col:88,line:14}},IconsCardStory:{startLoc:{col:60,line:77},endLoc:{col:91,line:77},startBody:{col:60,line:77},endBody:{col:91,line:77}}};const g={title:"JS Packages/Components/Product Offer",component:u.Z,parameters:{storySource:{source:`import ProductOffer from '..';
import { IconsCard } from '../icons-card';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Product Offer',
  component: ProductOffer,
  parameters: {
    actions: {
      argTypesRegex: '^on.*'
    },
    layout: 'centered'
  }
} as ComponentMeta<typeof ProductOffer>);
const Template: ComponentStory<typeof ProductOffer> = args => <ProductOffer {...args} />;
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
const IconsCardTemplate: ComponentStory<typeof IconsCard> = args => <IconsCard {...args} />;
export const IconsCardStory = IconsCardTemplate.bind({});
IconsCardStory.parameters = {};
IconsCardStory.args = {
  products: ['backup', 'scan', 'anti-spam']
};
IconsCardStory.storyName = 'Icons Card';
SecurityBundle.parameters = {
  ...SecurityBundle.parameters,
  docs: {
    ...SecurityBundle.parameters?.docs,
    source: {
      originalSource: "args => <ProductOffer {...args} />",
      ...SecurityBundle.parameters?.docs?.source
    }
  }
};
JetpackBackup.parameters = {
  ...JetpackBackup.parameters,
  docs: {
    ...JetpackBackup.parameters?.docs,
    source: {
      originalSource: "args => <ProductOffer {...args} />",
      ...JetpackBackup.parameters?.docs?.source
    }
  }
};
JetpackProtect.parameters = {
  ...JetpackProtect.parameters,
  docs: {
    ...JetpackProtect.parameters?.docs,
    source: {
      originalSource: "args => <ProductOffer {...args} />",
      ...JetpackProtect.parameters?.docs?.source
    }
  }
};
IconsCardStory.parameters = {
  ...IconsCardStory.parameters,
  docs: {
    ...IconsCardStory.parameters?.docs,
    source: {
      originalSource: "args => <IconsCard {...args} />",
      ...IconsCardStory.parameters?.docs?.source
    }
  }
};`,locationsMap:{"security-bundle":{startLoc:{col:54,line:14},endLoc:{col:88,line:14},startBody:{col:54,line:14},endBody:{col:88,line:14}},"jetpack-backup":{startLoc:{col:54,line:14},endLoc:{col:88,line:14},startBody:{col:54,line:14},endBody:{col:88,line:14}},"jetpack-protect":{startLoc:{col:54,line:14},endLoc:{col:88,line:14},startBody:{col:54,line:14},endBody:{col:88,line:14}},"icons-card-story":{startLoc:{col:60,line:77},endLoc:{col:91,line:77},startBody:{col:60,line:77},endBody:{col:91,line:77}}}},actions:{argTypesRegex:"^on.*"},layout:"centered"}},y=E=>(0,p.jsx)(u.Z,{...E});y.displayName="Template";const a=y.bind({});a.parameters={},a.args={slug:"security",icon:"",name:"Security",title:"Security",subTitle:"",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",isBundle:!0,isCard:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricing:{currency:"USD",price:24.92,offPrice:12.42},buttonText:"",addProductUrl:"",hasRequiredPlan:!1,isLoading:!1,error:""};const o=y.bind({});o.parameters={},o.args={slug:"backup",icon:"",name:"Backup",title:"Jepack Backup",subTitle:"",description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],isBundle:!1,isCard:!0,pricing:{currency:"USD",price:9.66,offPrice:3.95},addProductUrl:"",hasRequiredPlan:!1,isLoading:!1};const s=y.bind({});s.parameters={},s.args={slug:"protect",icon:"jetpack",title:"Protect",subTitle:"Protect your site and scan for security vulnerabilities listed in our database.",features:["Over 20,000 listed vulnerabilities","Daily automatic scans","Check plugin and theme version status","Easy to navigate and use"],isBundle:!1,isCard:!0,pricing:{isFree:!0},addProductUrl:"",hasRequiredPlan:!1,isLoading:!1};const f=E=>(0,p.jsx)(_.T,{...E});f.displayName="IconsCardTemplate";const r=f.bind({});r.parameters={},r.args={products:["backup","scan","anti-spam"]},r.storyName="Icons Card",a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"args => <ProductOffer {...args} />",...(x=(i=a.parameters)==null?void 0:i.docs)==null?void 0:x.source}}},o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ProductOffer {...args} />",...(t=(h=o.parameters)==null?void 0:h.docs)==null?void 0:t.source}}},s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:"args => <ProductOffer {...args} />",...(O=(b=s.parameters)==null?void 0:b.docs)==null?void 0:O.source}}},r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"args => <IconsCard {...args} />",...(k=(B=r.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const n=["SecurityBundle","JetpackBackup","JetpackProtect","IconsCardStory"]},"../components/components/button/index.tsx":(S,l,e)=>{e.d(l,{Z:()=>x});var u=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),P=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js"),m=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),g=e.n(m),y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(a),s=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),f={};f.insert="head",f.singleton=!1;var r=o()(s.Z,f);const n=s.Z.locals||{};var c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=(0,y.forwardRef)((v,h)=>{var I,L;const{children:t,variant:A="primary",size:b="normal",weight:O="bold",icon:d,iconSize:B,disabled:k,isDestructive:E,isLoading:j,isExternalLink:C,className:T,text:V,fullWidth:J,...w}=v,R=g()(n.button,T,{[n.normal]:b==="normal",[n.small]:b==="small",[n.icon]:!!d,[n.loading]:j,[n.regular]:O==="regular",[n["full-width"]]:J,[n["is-icon-button"]]:!!d&&!t});w.ref=h;const z=b==="normal"?20:16,D=C&&(0,c.jsx)(p.Z,{size:z,icon:P.Z,className:n["external-icon"]}),G=C?"_blank":void 0,X=(t==null?void 0:t[0])&&t[0]!==null&&((L=(I=t==null?void 0:t[0])==null?void 0:I.props)==null?void 0:L.className)!=="components-tooltip";return(0,c.jsxs)(u.ZP,{target:G,variant:A,className:g()(R,{"has-text":!!d&&X}),icon:C?void 0:d,iconSize:B,disabled:k,"aria-disabled":k,isDestructive:E,text:V,...w,children:[j&&(0,c.jsx)(_.ZP,{}),(0,c.jsx)("span",{children:t}),D]})});i.displayName="Button";const x=i;try{i.displayName="Button",i.__docgenInfo={description:"Button component",displayName:"Button",props:{text:{defaultValue:null,description:`If provided, displays the given text inside the button. If the button
contains children elements, the text is displayed before them.`,name:"text",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"link"'},{value:'"tertiary"'}]}},className:{defaultValue:null,description:"An optional additional class name to apply to the rendered button.",name:"className",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}},isDestructive:{defaultValue:null,description:`Renders a red text-based button style to indicate destructive
behavior.`,name:"isDestructive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Renders a disabled button.",name:"disabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isExternalLink:{defaultValue:null,description:"",name:"isExternalLink",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:i.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(v){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(S,l,e)=>{e.d(l,{Z:()=>g});var u=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(u),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),P=e.n(p),m=P()(_());m.push([S.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),m.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const g=m}}]);})();
