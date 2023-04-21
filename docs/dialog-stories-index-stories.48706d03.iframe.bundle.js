"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9753],{"../components/components/dialog/stories/index.stories.tsx":(k,c,e)=>{var t,d,r,b,g,v;e.r(c),e.d(c,{JetpackBackup:()=>a,JetpackBoost:()=>o,__namedExportsOrder:()=>A,default:()=>_});var f=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../components/components/dialog/index.tsx"),i=e("../components/components/product-offer/index.tsx");const p=e.p+"static/media/boost.a5413748.png";var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=`/* eslint-disable react/react-in-jsx-scope */
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
`,E={JetpackBoost:{startLoc:{col:17,line:33},endLoc:{col:45,line:33},startBody:{col:17,line:33},endBody:{col:45,line:33}},JetpackBackup:{startLoc:{col:17,line:33},endLoc:{col:45,line:33},startBody:{col:17,line:33},endBody:{col:45,line:33}}};const _={title:"JS Packages/Components/Dialog",component:l.Z,parameters:{storySource:{source:`
import React from 'react';
import Dialog from '..';
import ProductOffer from '../../product-offer';
import BoostImage from './boost.png';
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
const Template = args => <Dialog {...args} />;
export const JetpackBoost = Template.bind({});
JetpackBoost.parameters = {};
JetpackBoost.args = {
  primary: <ProductOffer slug="boost" name="Boost" title="Jepack Boost" description="Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required." features={['Check your site performance', 'Enable improvements in one click', 'Standalone free plugin for those focused on speed']} pricing={{
    isFree: true
  }} className={''} isCard={false} supportedProducts={[]} hasRequiredPlan={false} addProductUrl={''} />,
  secondary: <img src={BoostImage} alt="Boost" />,
  isTwoSections: false
};
export const JetpackBackup = Template.bind({});
JetpackBackup.parameters = {};
JetpackBackup.args = {
  primary: <ProductOffer slug={'backup'} name={'Backup'} title={'Jepack Backup'} description={'Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.'} features={['Real-time cloud backups', '10GB of backup storage', '30-day archive & activity log', 'One-click restores']} pricing={{
    currency: 'USD',
    price: 24.92,
    offPrice: 12.42
  }} isCard={true} className={''} supportedProducts={[]} hasRequiredPlan={false} addProductUrl={''} />,
  secondary: <ProductOffer name="Security" title="Security" description="Comprehensive site security, including Backup, Scan, and Anti-spam." isBundle={true} supportedProducts={['backup', 'scan', 'anti-spam']} features={['Real time cloud backups with 10GB storage', 'Automated real-time malware scan', 'One click fixes for most threats', 'Comment & form spam protection']} pricing={{
    currency: 'USD',
    price: 24.92,
    offPrice: 12.42
  }} hasRequiredPlan={false} isLoading={false} className={''} isCard={false} addProductUrl={''} />,
  isTwoSections: true
};
JetpackBoost.parameters = {
  ...JetpackBoost.parameters,
  docs: {
    ...JetpackBoost.parameters?.docs,
    source: {
      originalSource: "args => <Dialog {...args} />",
      ...JetpackBoost.parameters?.docs?.source
    }
  }
};
JetpackBackup.parameters = {
  ...JetpackBackup.parameters,
  docs: {
    ...JetpackBackup.parameters?.docs,
    source: {
      originalSource: "args => <Dialog {...args} />",
      ...JetpackBackup.parameters?.docs?.source
    }
  }
};`,locationsMap:{"jetpack-boost":{startLoc:{col:17,line:33},endLoc:{col:45,line:33},startBody:{col:17,line:33},endBody:{col:45,line:33}},"jetpack-backup":{startLoc:{col:17,line:33},endLoc:{col:45,line:33},startBody:{col:17,line:33},endBody:{col:45,line:33}}}},actions:{argTypesRegex:"^on.*"},layout:"centered"},argTypes:{primary:{table:{disable:!0}},secondary:{table:{disable:!0}},isTwoSections:{table:{disable:!0}}}},m=n=>(0,s.jsx)(l.Z,{...n});m.displayName="Template";const o=m.bind({});o.parameters={},o.args={primary:(0,s.jsx)(i.Z,{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricing:{isFree:!0},className:"",isCard:!1,supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,s.jsx)("img",{src:p,alt:"Boost"}),isTwoSections:!1};const a=m.bind({});a.parameters={},a.args={primary:(0,s.jsx)(i.Z,{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricing:{currency:"USD",price:24.92,offPrice:12.42},isCard:!0,className:"",supportedProducts:[],hasRequiredPlan:!1,addProductUrl:""}),secondary:(0,s.jsx)(i.Z,{name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",isBundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real time cloud backups with 10GB storage","Automated real-time malware scan","One click fixes for most threats","Comment & form spam protection"],pricing:{currency:"USD",price:24.92,offPrice:12.42},hasRequiredPlan:!1,isLoading:!1,className:"",isCard:!1,addProductUrl:""}),isTwoSections:!0},o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"args => <Dialog {...args} />",...(r=(d=o.parameters)==null?void 0:d.docs)==null?void 0:r.source}}},a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Dialog {...args} />",...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const A=["JetpackBoost","JetpackBackup"]},"../components/components/button/index.tsx":(k,c,e)=>{e.d(c,{Z:()=>b});var f=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@23.7.0_@types+react@18.0.27_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),u=e.n(s),E=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(_),o=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),a={};a.insert="head",a.singleton=!1;var A=m()(o.Z,a);const t=o.Z.locals||{};var d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const r=(0,E.forwardRef)((g,v)=>{var j,O;const{children:n,variant:S="primary",size:x="normal",weight:J="bold",icon:y,iconSize:V,disabled:P,isDestructive:z,isLoading:w,isExternalLink:h,className:R,text:C,fullWidth:D,...B}=g,L=u()(t.button,R,{[t.normal]:x==="normal",[t.small]:x==="small",[t.icon]:!!y,[t.loading]:w,[t.regular]:J==="regular",[t["full-width"]]:D,[t["is-icon-button"]]:!!y&&!n});B.ref=v;const T=x==="normal"?20:16,G=h&&(0,d.jsx)(i.Z,{size:T,icon:p.Z,className:t["external-icon"]}),N=h?"_blank":void 0,X=(n==null?void 0:n[0])&&n[0]!==null&&((O=(j=n==null?void 0:n[0])==null?void 0:j.props)==null?void 0:O.className)!=="components-tooltip";return(0,d.jsxs)(f.ZP,{target:N,variant:S,className:u()(L,{"has-text":!!y&&X}),icon:h?void 0:y,iconSize:V,disabled:P,"aria-disabled":P,isDestructive:z,text:C,...B,children:[w&&(0,d.jsx)(l.ZP,{}),(0,d.jsx)("span",{children:n}),G]})});r.displayName="Button";const b=r;try{r.displayName="Button",r.__docgenInfo={description:"Button component",displayName:"Button",props:{text:{defaultValue:null,description:`If provided, displays the given text inside the button. If the button
contains children elements, the text is displayed before them.`,name:"text",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"link"'},{value:'"tertiary"'}]}},className:{defaultValue:null,description:"An optional additional class name to apply to the rendered button.",name:"className",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}},isDestructive:{defaultValue:null,description:`Renders a red text-based button style to indicate destructive
behavior.`,name:"isDestructive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Renders a disabled button.",name:"disabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isExternalLink:{defaultValue:null,description:"",name:"isExternalLink",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:r.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(g){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(k,c,e)=>{e.d(c,{Z:()=>u});var f=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(f),i=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),p=e.n(i),s=p()(l());s.push([k.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),s.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const u=s}}]);})();
