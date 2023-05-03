"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9414],{"../../packages/my-jetpack/_inc/components/connected-product-offer/stories/index.stories.jsx":(D,l,e)=>{var v,b,C;e.r(l),e.d(l,{Default:()=>d,__namedExportsOrder:()=>w,default:()=>B});var y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../components/components/product-offer/index.tsx"),s=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),p=e.n(s),a=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js"),m=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js");function k(n,u){const{siteSuffix:o,myJetpackUrl:g}=(window==null?void 0:window.myJetpackInitialState)||{},P=new URL("https://wordpress.com/checkout/"),t=new URL(`${P}${o}/${n}`);return t.searchParams.set("redirect_to",g),u||t.searchParams.set("unlinked",1),t.searchParams.set("site",o),t.toString()}var _=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=n=>{let{slug:u,onClick:o,trackButtonClick:g,...P}=n;const{detail:t,isFetching:R}=(0,m.i)(u),{title:E,longDescription:F,features:J,pricingForUi:T,isBundle:L,supportedProducts:W,hasRequiredPlan:S}=t,{isFree:O,fullPricePerMonth:Z,currencyCode:I,discountPricePerMonth:H,wpcomProductSlug:x}=T,{isUserConnected:N}=(0,a.Z)(),G=!O&&!S&&x?k(x,N):null,$=(0,y.useCallback)(()=>{g(),o&&o()},[o,g]);return(0,_.jsx)(c.Z,{slug:u,title:E,description:F,features:J,pricing:{isFree:O,price:Z,offPrice:H,currency:I},isBundle:L,supportedProducts:W,hasRequiredPlan:S,onAdd:$,addProductUrl:o?void 0:G,isLoading:R,...P})};i.displayName="ConnectedProductOffer",i.propTypes={slug:p().string.isRequired},i.defaultProps={trackButtonClick:()=>{}},i.__docgenInfo={description:`Product Detail component.
ToDo: rename event handler properties.

@param {object} props                    - Component props.
@param {string} props.slug               - Product slug
@param {Function} props.onClick          - Callback for Call To Action button click
@param {Function} props.trackButtonClick - Function to call for tracking clicks on Call To Action button
@returns {object}                          ConnectedProductOffer react component.`,methods:[],displayName:"ConnectedProductOffer",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},slug:{description:"",type:{name:"string"},required:!0}}};const r=i,f={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function j(n){const o=n.constructor===Array?n:[n],g=o.map(t=>({url:`my-jetpack/v1/site/products/${t}?_locale=user`,method:"GET",status:200,response:f[t]})),P=o.map(t=>({url:`my-jetpack/v1/site/products/${t}?_locale=user`,method:"POST",status:200,response:{...f[t],status:f[t].status==="active"?"inactive":"active"}}));return[...g,...P]}function A(){return j([...Object.keys(f)])}function U(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const u=Object.keys(f);return n?u:u.filter(o=>!f[o].is_bundle)}var oe=`/* eslint-disable react/react-in-jsx-scope */
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
`,ne={Default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}};const B={title:"Packages/My Jetpack/Connected Product Offer",component:r,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}}},layout:"centered"},argTypes:{slug:{control:{type:"select"},options:U(!0)},isCard:{control:{type:"boolean"}}}},M=A(),h=n=>(0,_.jsx)(r,{...n});h.displayName="DefaultDefaultProductOffer";const d=h.bind({});d.parameters={mockData:M},d.args={slug:"backup",isCard:!1},d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ConnectedProductOffer {...args} />",...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const w=["Default"]},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(D,l,e)=>{e.d(l,{Z:()=>c});var y=e("../connection/components/use-connection/index.jsx");function c(){const{apiRoot:s,apiNonce:p}=myJetpackRest,{topJetpackMenuItemUrl:a}=myJetpackInitialState,m=(0,y.Z)({apiRoot:s,apiNonce:p}),k=m.isRegistered;return{apiNonce:p,apiRoot:s,...m,isSiteConnected:k,topJetpackMenuItemUrl:a}}},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(D,l,e)=>{e.d(l,{i:()=>p});var y=e("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),c=e("../../../node_modules/.pnpm/@wordpress+data@9.2.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),s=e("../../packages/my-jetpack/_inc/state/store.js");function p(a){const{activateProduct:m,deactivateProduct:k,installStandalonePluginForProduct:_}=(0,y.Z)(s.t),i=(0,c.Z)(r=>r(s.t).getProduct(a));return{activate:()=>m(a),deactivate:()=>k(a),installStandalonePlugin:()=>_(a),productsList:(0,c.Z)(r=>r(s.t).getProducts()),detail:i,isActive:i.status==="active",isFetching:(0,c.Z)(r=>r(s.t).isFetching(a)),stats:(0,c.Z)(r=>r(s.t).getProductStats(a))}}}}]);})();
