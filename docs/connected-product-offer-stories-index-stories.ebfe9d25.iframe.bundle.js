(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9414],{"../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/defineProperty.js":(e,a,t)=>{var s=t("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toPropertyKey.js");function i(o,n,r){return n=s(n),n in o?Object.defineProperty(o,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[n]=r,o}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toPrimitive.js":(e,a,t)=>{var s=t("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js").default;function i(o,n){if(s(o)!=="object"||o===null)return o;var r=o[Symbol.toPrimitive];if(r!==void 0){var g=r.call(o,n||"default");if(s(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(o)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toPropertyKey.js":(e,a,t)=>{var s=t("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js").default,i=t("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toPrimitive.js");function o(n){var r=i(n,"string");return s(r)==="symbol"?r:String(r)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},"../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js":e=>{function a(t){return e.exports=a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},e.exports.__esModule=!0,e.exports.default=e.exports,a(t)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},"../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(e,a,t)=>{"use strict";t.d(a,{Z:()=>o});var s=t("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const o=n=>{const{dispatch:r}=(0,s.Z)();return n===void 0?r:r(n)}},"../../packages/my-jetpack/_inc/components/connected-product-offer/stories/index.stories.jsx":(e,a,t)=>{var v,D,x;"use strict";t.r(a),t.d(a,{Default:()=>f,__namedExportsOrder:()=>B,default:()=>M});var s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=t("../components/components/product-offer/index.tsx"),o=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),n=t.n(o),r=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js"),g=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js");function k(d,m){const{siteSuffix:u,myJetpackUrl:_}=(window==null?void 0:window.myJetpackInitialState)||{},P=new URL("https://wordpress.com/checkout/"),c=new URL(`${P}${u}/${d}`);return c.searchParams.set("redirect_to",_),m||c.searchParams.set("unlinked",1),c.searchParams.set("site",u),c.toString()}var b=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=d=>{let{slug:m,onClick:u,trackButtonClick:_,...P}=d;const{detail:c,isFetching:E}=(0,g.i)(m),{title:F,longDescription:R,features:T,pricingForUi:J,isBundle:L,supportedProducts:W,hasRequiredPlan:C}=c,{isFree:S,fullPricePerMonth:K,currencyCode:Z,discountPricePerMonth:I,wpcomProductSlug:O}=J,{isUserConnected:H}=(0,r.Z)(),G=!S&&!C&&O?k(O,H):null,N=(0,s.useCallback)(()=>{_(),u&&u()},[u,_]);return(0,b.jsx)(i.Z,{slug:m,title:F,description:R,features:T,pricing:{isFree:S,price:K,offPrice:I,currency:Z},isBundle:L,supportedProducts:W,hasRequiredPlan:C,onAdd:N,addProductUrl:u?void 0:G,isLoading:E,...P})};l.displayName="ConnectedProductOffer",l.propTypes={slug:n().string.isRequired},l.defaultProps={trackButtonClick:()=>{}},l.__docgenInfo={description:`Product Detail component.
ToDo: rename event handler properties.

@param {object} props                    - Component props.
@param {string} props.slug               - Product slug
@param {Function} props.onClick          - Callback for Call To Action button click
@param {Function} props.trackButtonClick - Function to call for tracking clicks on Call To Action button
@returns {object}                          ConnectedProductOffer react component.`,methods:[],displayName:"ConnectedProductOffer",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},slug:{description:"",type:{name:"string"},required:!0}}};const p=l,y={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function j(d){const u=d.constructor===Array?d:[d],_=u.map(c=>({url:`my-jetpack/v1/site/products/${c}?_locale=user`,method:"GET",status:200,response:y[c]})),P=u.map(c=>({url:`my-jetpack/v1/site/products/${c}?_locale=user`,method:"POST",status:200,response:{...y[c],status:y[c].status==="active"?"inactive":"active"}}));return[..._,...P]}function w(){return j([...Object.keys(y)])}function A(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const m=Object.keys(y);return d?m:m.filter(u=>!y[u].is_bundle)}var oe=`/* eslint-disable react/react-in-jsx-scope */
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
`,re={Default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}};const M={title:"Packages/My Jetpack/Connected Product Offer",component:p,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}}},layout:"centered"},argTypes:{slug:{control:{type:"select"},options:A(!0)},isCard:{control:{type:"boolean"}}}},U=w(),h=d=>(0,b.jsx)(p,{...d});h.displayName="DefaultDefaultProductOffer";const f=h.bind({});f.parameters={mockData:U},f.args={slug:"backup",isCard:!1},f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ConnectedProductOffer {...args} />",...(x=(D=f.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const B=["Default"]},"../../packages/my-jetpack/_inc/hooks/use-product/index.js":(e,a,t)=>{"use strict";t.d(a,{i:()=>n});var s=t("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),i=t("../../../node_modules/.pnpm/@wordpress+data@9.0.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),o=t("../../packages/my-jetpack/_inc/state/store.js");function n(r){const{activateProduct:g,deactivateProduct:k,installStandalonePluginForProduct:b}=(0,s.Z)(o.t),l=(0,i.Z)(p=>p(o.t).getProduct(r));return{activate:()=>g(r),deactivate:()=>k(r),installStandalonePlugin:()=>b(r),productsList:(0,i.Z)(p=>p(o.t).getProducts()),detail:l,isActive:l.status==="active",isFetching:(0,i.Z)(p=>p(o.t).isFetching(r)),status:l.status}}}}]);})();
