"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9414],{"../../packages/my-jetpack/_inc/components/connected-product-offer/stories/index.stories.jsx":(x,m,e)=>{var _,v,b;e.r(m),e.d(m,{Default:()=>i,__namedExportsOrder:()=>M,default:()=>B});var y=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("../components/components/product-offer/index.tsx"),u=e("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),P=e.n(u),c=e("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js"),k=e("../../packages/my-jetpack/_inc/hooks/use-product/index.js");function h(s,r){const{siteSuffix:o,myJetpackUrl:l}=(window==null?void 0:window.myJetpackInitialState)||{},f=new URL("https://wordpress.com/checkout/"),t=new URL(`${f}${o}/${s}`);return t.searchParams.set("redirect_to",l),r||t.searchParams.set("unlinked",1),t.searchParams.set("site",o),t.toString()}var g=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const n=s=>{let{slug:r,onClick:o,trackButtonClick:l,...f}=s;const{detail:t,isFetching:F}=(0,k.i)(r),{title:R,longDescription:E,features:T,pricingForUi:J,isBundle:L,supportedProducts:W,hasRequiredPlan:C}=t,{isFree:S,fullPricePerMonth:H,currencyCode:I,discountPricePerMonth:Z,wpcomProductSlug:O}=J,{isUserConnected:G}=(0,c.Z)(),N=!S&&!C&&O?h(O,G):null,$=(0,y.useCallback)(()=>{l(),o&&o()},[o,l]);return(0,g.jsx)(p.Z,{slug:r,title:R,description:E,features:T,pricing:{isFree:S,price:H,offPrice:Z,currency:I},isBundle:L,supportedProducts:W,hasRequiredPlan:C,onAdd:$,addProductUrl:o?void 0:N,isLoading:F,...f})};n.displayName="ConnectedProductOffer",n.propTypes={slug:P().string.isRequired},n.defaultProps={trackButtonClick:()=>{}},n.__docgenInfo={description:`Product Detail component.
ToDo: rename event handler properties.

@param {object} props                    - Component props.
@param {string} props.slug               - Product slug
@param {Function} props.onClick          - Callback for Call To Action button click
@param {Function} props.trackButtonClick - Function to call for tracking clicks on Call To Action button
@returns {object}                          ConnectedProductOffer react component.`,methods:[],displayName:"ConnectedProductOffer",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},slug:{description:"",type:{name:"string"},required:!0}}};const a=n,d={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function j(s){const o=s.constructor===Array?s:[s],l=o.map(t=>({url:`my-jetpack/v1/site/products/${t}?_locale=user`,method:"GET",status:200,response:d[t]})),f=o.map(t=>({url:`my-jetpack/v1/site/products/${t}?_locale=user`,method:"POST",status:200,response:{...d[t],status:d[t].status==="active"?"inactive":"active"}}));return[...l,...f]}function A(){return j([...Object.keys(d)])}function U(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const r=Object.keys(d);return s?r:r.filter(o=>!d[o].is_bundle)}var oe=`/* eslint-disable react/react-in-jsx-scope */
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
`,se={Default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}};const B={title:"Packages/My Jetpack/Connected Product Offer",component:a,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}}},layout:"centered"},argTypes:{slug:{control:{type:"select"},options:U(!0)},isCard:{control:{type:"boolean"}}}},w=A(),D=s=>(0,g.jsx)(a,{...s});D.displayName="DefaultDefaultProductOffer";const i=D.bind({});i.parameters={mockData:w},i.args={slug:"backup",isCard:!1},i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:"args => <ConnectedProductOffer {...args} />",...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const M=["Default"]},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(x,m,e)=>{e.d(m,{i:()=>P});var y=e("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),p=e("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),u=e("../../packages/my-jetpack/_inc/state/store.js");function P(c){const{activateProduct:k,deactivateProduct:h,installStandalonePluginForProduct:g}=(0,y.Z)(u.t),n=(0,p.Z)(a=>a(u.t).getProduct(c));return{activate:()=>k(c),deactivate:()=>h(c),installStandalonePlugin:()=>g(c),productsList:(0,p.Z)(a=>a(u.t).getProducts()),detail:n,isActive:n.status==="active",isFetching:(0,p.Z)(a=>a(u.t).isFetching(c)),status:n.status}}}}]);})();
