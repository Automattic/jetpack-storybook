"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9414],{"../../packages/my-jetpack/_inc/components/connected-product-offer/stories/index.stories.jsx":(O,d,t)=>{var b,_,C;t.r(d),t.d(d,{Default:()=>a,__namedExportsOrder:()=>M,default:()=>B});var m=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=t("../components/components/product-offer/index.tsx"),l=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),p=t.n(l),y=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js"),f=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js");function k(o,s){const{siteSuffix:n,myJetpackUrl:c}=(window==null?void 0:window.myJetpackInitialState)||{},u=new URL("https://wordpress.com/checkout/"),e=new URL(`${u}${n}/${o}`);return e.searchParams.set("redirect_to",c),s||e.searchParams.set("unlinked",1),e.searchParams.set("site",n),e.toString()}var P=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const i=o=>{let{slug:s,onClick:n,trackButtonClick:c,...u}=o;const{detail:e,isFetching:J}=(0,f.i)(s),{title:R,longDescription:F,features:T,pricingForUi:E,isBundle:I,supportedProducts:L,hasRequiredPlan:v}=e,{isFree:S,fullPricePerMonth:H,currencyCode:N,discountPricePerMonth:W,wpcomProductSlug:x}=E,{isUserConnected:G}=(0,y.Z)(),$=!S&&!v&&x?k(x,G):null,z=(0,m.useCallback)(()=>{c(),n&&n()},[n,c]);return(0,P.jsx)(g.Z,{slug:s,title:R,description:F,features:T,pricing:{isFree:S,price:H,offPrice:W,currency:N},isBundle:I,supportedProducts:L,hasRequiredPlan:v,onAdd:z,addProductUrl:n?void 0:$,isLoading:J,...u})};i.displayName="ConnectedProductOffer",i.propTypes={slug:p().string.isRequired},i.defaultProps={trackButtonClick:()=>{}},i.__docgenInfo={description:`Product Detail component.
ToDo: rename event handler properties.

@param {object} props                    - Component props.
@param {string} props.slug               - Product slug
@param {Function} props.onClick          - Callback for Call To Action button click
@param {Function} props.trackButtonClick - Function to call for tracking clicks on Call To Action button
@returns {object}                          ConnectedProductOffer react component.`,methods:[],displayName:"ConnectedProductOffer",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},slug:{description:"",type:{name:"string"},required:!0}}};const h=i,r={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function j(o){const n=o.constructor===Array?o:[o],c=n.map(e=>({url:`my-jetpack/v1/site/products/${e}?_locale=user`,method:"GET",status:200,response:r[e]})),u=n.map(e=>({url:`my-jetpack/v1/site/products/${e}?_locale=user`,method:"POST",status:200,response:{...r[e],status:r[e].status==="active"?"inactive":"active"}}));return[...c,...u]}function U(){return j([...Object.keys(r)])}function A(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const s=Object.keys(r);return o?s:s.filter(n=>!r[n].is_bundle)}var ne=`/* eslint-disable react/react-in-jsx-scope */
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
`,oe={Default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}};const B={title:"Packages/My Jetpack/Connected Product Offer",component:h,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}}},layout:"centered"},argTypes:{slug:{control:{type:"select"},options:A(!0)},isCard:{control:{type:"boolean"}}}},w=U(),D=o=>(0,P.jsx)(h,{...o});D.displayName="DefaultDefaultProductOffer";const a=D.bind({});a.parameters={mockData:w},a.args={slug:"backup",isCard:!1},a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"args => <ConnectedProductOffer {...args} />",...(C=(_=a.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const M=["Default"]},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(O,d,t)=>{t.d(d,{Z:()=>g});var m=t("../connection/components/use-connection/index.jsx");function g(){const{apiRoot:l,apiNonce:p}=myJetpackRest,{topJetpackMenuItemUrl:y}=myJetpackInitialState,f=(0,m.Z)({apiRoot:l,apiNonce:p}),k=f.isRegistered;return{apiNonce:p,apiRoot:l,...f,isSiteConnected:k,topJetpackMenuItemUrl:y}}}}]);})();
