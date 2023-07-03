"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9414],{"../../packages/my-jetpack/_inc/components/connected-product-offer/stories/index.stories.jsx":(h,l,e)=>{var b,C,S;e.r(l),e.d(l,{Default:()=>d,__namedExportsOrder:()=>R,default:()=>M});var y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("../components/components/product-offer/index.tsx"),a=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),p=e.n(a),n=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js"),m=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js");function k(s,i){const{siteSuffix:o,myJetpackUrl:g}=(window==null?void 0:window.myJetpackInitialState)||{},_=new URL("https://wordpress.com/checkout/"),t=new URL(`${_}${o}/${s}`);return t.searchParams.set("redirect_to",g),i||t.searchParams.set("unlinked",1),t.searchParams.set("site",o),t.toString()}var D=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const u=s=>{let{slug:i,onClick:o,trackButtonClick:g,..._}=s;const{detail:t,isFetching:E}=(0,m.i)(i),{title:F,longDescription:J,features:T,pricingForUi:L,isBundle:W,supportedProducts:Z,hasRequiredPlan:O}=t,{isFree:x,fullPricePerMonth:I,currencyCode:H,discountPricePerMonth:N,wpcomProductSlug:j}=L,{isUserConnected:G}=(0,n.Z)(),$=!x&&!O&&j?k(j,G):null,z=(0,y.useCallback)(()=>{g(),o&&o()},[o,g]);return(0,D.jsx)(r.Z,{slug:i,title:F,description:J,features:T,pricing:{isFree:x,price:I,offPrice:N,currency:H},isBundle:W,supportedProducts:Z,hasRequiredPlan:O,onAdd:z,addProductUrl:o?void 0:$,isLoading:E,..._})};u.displayName="ConnectedProductOffer",u.propTypes={slug:p().string.isRequired},u.defaultProps={trackButtonClick:()=>{}},u.__docgenInfo={description:`Product Detail component.
ToDo: rename event handler properties.

@param {object} props                    - Component props.
@param {string} props.slug               - Product slug
@param {Function} props.onClick          - Callback for Call To Action button click
@param {Function} props.trackButtonClick - Function to call for tracking clicks on Call To Action button
@returns {object}                          ConnectedProductOffer react component.`,methods:[],displayName:"ConnectedProductOffer",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},slug:{description:"",type:{name:"string"},required:!0}}};const P=u,f={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function A(s){const o=s.constructor===Array?s:[s],g=o.map(t=>({url:`my-jetpack/v1/site/products/${t}?_locale=user`,method:"GET",status:200,response:f[t]})),_=o.map(t=>({url:`my-jetpack/v1/site/products/${t}?_locale=user`,method:"POST",status:200,response:{...f[t],status:f[t].status==="active"?"inactive":"active"}}));return[...g,..._]}function U(){return A([...Object.keys(f)])}function B(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const i=Object.keys(f);return s?i:i.filter(o=>!f[o].is_bundle)}var oe=`/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ConnectedProductOffer from '../index.jsx';
import { getAllMockData, getProductSlugs } from './utils.js';

export default {
	title: 'Packages/My Jetpack/Connected Product Offer',
	component: ConnectedProductOffer,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		slug: {
			control: { type: 'select' },
			options: getProductSlugs( true ),
		},
		isCard: {
			control: { type: 'boolean' },
		},
	},
};

const mockData = getAllMockData();

const DefaultDefaultProductOffer = args => <ConnectedProductOffer { ...args } />;

export const Default = DefaultDefaultProductOffer.bind( {} );
Default.parameters = { mockData };
Default.args = {
	slug: 'backup',
	isCard: false,
};
`,ne={Default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}};const M={title:"Packages/My Jetpack/Connected Product Offer",component:P,parameters:{storySource:{source:`
import React from 'react';
import ConnectedProductOffer from '../index.jsx';
import { getAllMockData, getProductSlugs } from './utils.js';
export default {
  title: 'Packages/My Jetpack/Connected Product Offer',
  component: ConnectedProductOffer,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    slug: {
      control: {
        type: 'select'
      },
      options: getProductSlugs(true)
    },
    isCard: {
      control: {
        type: 'boolean'
      }
    }
  }
};
const mockData = getAllMockData();
const DefaultDefaultProductOffer = args => <ConnectedProductOffer {...args} />;
export const Default = DefaultDefaultProductOffer.bind({});
Default.parameters = {
  mockData
};
Default.args = {
  slug: 'backup',
  isCard: false
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <ConnectedProductOffer {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}}},layout:"centered"},argTypes:{slug:{control:{type:"select"},options:B(!0)},isCard:{control:{type:"boolean"}}}},w=U(),v=s=>(0,D.jsx)(P,{...s});v.displayName="DefaultDefaultProductOffer";const d=v.bind({});d.parameters={mockData:w},d.args={slug:"backup",isCard:!1},d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"args => <ConnectedProductOffer {...args} />",...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const R=["Default"]},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(h,l,e)=>{e.d(l,{Z:()=>r});var y=e("../connection/components/use-connection/index.jsx");function r(){const{apiRoot:a,apiNonce:p}=myJetpackRest,{topJetpackMenuItemUrl:n}=myJetpackInitialState,m=(0,y.Z)({apiRoot:a,apiNonce:p}),k=m.isRegistered;return{apiNonce:p,apiRoot:a,...m,isSiteConnected:k,topJetpackMenuItemUrl:n}}},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(h,l,e)=>{e.d(l,{i:()=>p});var y=e("../../../node_modules/.pnpm/@wordpress+data@9.6.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),r=e("../../../node_modules/.pnpm/@wordpress+data@9.6.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),a=e("../../packages/my-jetpack/_inc/state/store.js");function p(n){const{activateProduct:m,deactivateProduct:k,installStandalonePluginForProduct:D,deactivateStandalonePluginForProduct:u}=(0,y.Z)(a.t),P=(0,r.Z)(c=>c(a.t).getProduct(n));return{activate:()=>m(n),deactivate:()=>k(n),deactivateStandalonePlugin:()=>u(n),installStandalonePlugin:()=>D(n),productsList:(0,r.Z)(c=>c(a.t).getProducts()),detail:P,isActive:P.status==="active",isFetching:(0,r.Z)(c=>c(a.t).isFetching(n)),stats:(0,r.Z)(c=>c(a.t).getProductStats(n))}}}}]);})();
