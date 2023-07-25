"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9414],{"../../../node_modules/.pnpm/@wordpress+url@3.38.0/node_modules/@wordpress/url/build-module/add-query-args.js":(h,i,t)=>{t.d(i,{f:()=>o});var l=t("../../../node_modules/.pnpm/@wordpress+url@3.38.0/node_modules/@wordpress/url/build-module/get-query-args.js"),p=t("../../../node_modules/.pnpm/@wordpress+url@3.38.0/node_modules/@wordpress/url/build-module/build-query-string.js");function o(s="",e){if(!e||!Object.keys(e).length)return s;let n=s;const r=s.indexOf("?");return r!==-1&&(e=Object.assign((0,l.w)(s),e),n=n.substr(0,r)),n+"?"+(0,p.I)(e)}},"../../../node_modules/.pnpm/@wordpress+url@3.38.0/node_modules/@wordpress/url/build-module/build-query-string.js":(h,i,t)=>{t.d(i,{I:()=>l});function l(p){let o="";const s=Object.entries(p);let e;for(;e=s.shift();){let[n,r]=e;if(Array.isArray(r)||r&&r.constructor===Object){const m=Object.entries(r).reverse();for(const[u,a]of m)s.unshift([`${n}[${u}]`,a])}else r!==void 0&&(r===null&&(r=""),o+="&"+[n,r].map(encodeURIComponent).join("="))}return o.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@3.38.0/node_modules/@wordpress/url/build-module/get-query-args.js":(h,i,t)=>{t.d(i,{w:()=>s});function l(e){try{return decodeURIComponent(e)}catch(n){return e}}var p=t("../../../node_modules/.pnpm/@wordpress+url@3.38.0/node_modules/@wordpress/url/build-module/get-query-string.js");function o(e,n,r){const g=n.length,m=g-1;for(let u=0;u<g;u++){let a=n[u];!a&&Array.isArray(e)&&(a=e.length.toString()),a=["__proto__","constructor","prototype"].includes(a)?a.toUpperCase():a;const b=!isNaN(Number(n[u+1]));e[a]=u===m?r:e[a]||(b?[]:{}),Array.isArray(e[a])&&!b&&(e[a]={...e[a]}),e=e[a]}}function s(e){return((0,p.W)(e)||"").replace(/\+/g,"%20").split("&").reduce((n,r)=>{const[g,m=""]=r.split("=").filter(Boolean).map(l);if(g){const u=g.replace(/\]/g,"").split("[");o(n,u,m)}return n},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@3.38.0/node_modules/@wordpress/url/build-module/get-query-string.js":(h,i,t)=>{t.d(i,{W:()=>l});function l(p){let o;try{o=new URL(p,"http://example.com").search.substring(1)}catch(s){}if(o)return o}},"../../packages/my-jetpack/_inc/components/connected-product-offer/stories/index.stories.jsx":(h,i,t)=>{var v,S,O;t.r(i),t.d(i,{Default:()=>k,__namedExportsOrder:()=>I,default:()=>M});var l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=t("../components/components/product-offer/index.tsx"),o=t("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),s=t.n(o),e=t("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js"),n=t("../../packages/my-jetpack/_inc/hooks/use-product/index.js");function r(f,y){const{siteSuffix:d,myJetpackUrl:P}=(window==null?void 0:window.myJetpackInitialState)||{},D=new URL("https://wordpress.com/checkout/"),c=new URL(`${D}${d}/${f}`);return c.searchParams.set("redirect_to",P),y||c.searchParams.set("unlinked",1),c.searchParams.set("site",d),c.toString()}var g=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const m=f=>{let{slug:y,onClick:d,trackButtonClick:P,...D}=f;const{detail:c,isFetching:J}=(0,n.i)(y),{title:E,longDescription:F,features:T,pricingForUi:L,isBundle:N,supportedProducts:q,hasRequiredPlan:x}=c,{isFree:w,fullPricePerMonth:W,currencyCode:$,discountPricePerMonth:H,wpcomProductSlug:j}=L,{isUserConnected:G}=(0,e.Z)(),z=!w&&!x&&j?r(j,G):null,K=(0,l.useCallback)(()=>{P(),d&&d()},[d,P]);return(0,g.jsx)(p.Z,{slug:y,title:E,description:F,features:T,pricing:{isFree:w,price:W,offPrice:H,currency:$},isBundle:N,supportedProducts:q,hasRequiredPlan:x,onAdd:K,addProductUrl:d?void 0:z,isLoading:J,...D})};m.displayName="ConnectedProductOffer",m.propTypes={slug:s().string.isRequired},m.defaultProps={trackButtonClick:()=>{}},m.__docgenInfo={description:`Product Detail component.
ToDo: rename event handler properties.

@param {object} props                    - Component props.
@param {string} props.slug               - Product slug
@param {Function} props.onClick          - Callback for Call To Action button click
@param {Function} props.trackButtonClick - Function to call for tracking clicks on Call To Action button
@returns {object}                          ConnectedProductOffer react component.`,methods:[],displayName:"ConnectedProductOffer",props:{trackButtonClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},slug:{description:"",type:{name:"string"},required:!0}}};const u=m,_={"anti-spam":{slug:"anti-spam",name:"Anti-Spam",title:"Jepack Anti-Spam",description:"Stop comment and form spam",is_upgradable_by_bundle:["security"],long_description:"Save time and get better responses by automatically blocking spam from your comments and forms.",status:"active",features:["Comment and form spam protection","Powered by Akismet","Block spam without CAPTCHAs","Advanced stats"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},backup:{slug:"backup",name:"Backup",title:"Jepack Backup",description:"Save every change",is_upgradable_by_bundle:["security"],long_description:"Never lose a word, image, page, or time worrying about your site with automated backups & one-click restores.",status:"active",features:["Real-time cloud backups","10GB of backup storage","30-day archive & activity log","One-click restores"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},boost:{slug:"boost",name:"Boost",title:"Jepack Boost",description:"Instant speed and SEO",long_description:"Jetpack Boost gives your site the same performance advantages as the world\u2019s leading websites, no developer required.",status:"inactive",features:["Check your site performance","Enable improvements in one click","Standalone free plugin for those focused on speed"],pricingForUi:{available:!0,is_free:!0}},crm:{slug:"crm",name:"CRM",title:"Jetpack CRM",description:"Connect with your people",long_description:"All of your contacts in one place. Build better relationships with your customers and clients.",status:"inactive",features:["Manage unlimited contacts","Manage billing and create invoices","Fully integrated with WordPress & WooCommerce","Infinitely customizable with integrations and extensions"],pricingForUi:{available:!0,is_free:!0}},extras:{slug:"extras",name:"Extras",title:"Jetpack Extras",description:"Basic tools for a successful site",long_description:"Secure and speed up your site for free with Jetpack's powerful WordPress tools.",status:"active",features:["Measure your impact with beautiful stats","Speed up your site with optimized images","Protect your site against bot attacks","Get notifications if your site goes offline","Enhance your site with dozens of other features"],pricingForUi:{available:!0,is_free:!0}},scan:{slug:"scan",name:"Scan",title:"Jepack Scan",description:"Stay one step ahead of threats",is_upgradable_by_bundle:["security"],long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",status:"inactive",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}},search:{slug:"search",name:"Search",title:"Jetpack Search",description:"Help them find what they need",long_description:"Help your site visitors find answers instantly so they keep reading and buying. Great for sites with a lot of content.",status:"inactive",features:["Instant search and indexing","Powerful filtering","Supports 38 languages","Spelling correction"],pricingForUi:{currency_code:"USD",full_price:59.95,discount_price:29.975,coupon_discount:50}},security:{slug:"security",name:"Security",title:"Security",description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",long_description:"Comprehensive site security, including Backup, Scan, and Anti-spam.",status:"inactive",is_bundle:!0,supportedProducts:["backup","scan","anti-spam"],features:["Real-time cloud backups with 10GB storage","Automated real-time malware scan","One-click fixes for most threats","Comment & form spam protection"],pricingForUi:{currency_code:"USD",full_price:299,discount_price:149}},videopress:{slug:"videopress",name:"VideoPress",title:"Jetpack Site VideoPress",description:"High quality, ad-free video",long_description:"High-quality, ad-free video built specifically for WordPress.",status:"inactive",features:["1TB of storage","Built into WordPress editor","Ad-free and customizable player","Unlimited users"],pricingForUi:{currency_code:"USD",full_price:119,discount_price:59}}};function A(f){const d=f.constructor===Array?f:[f],P=d.map(c=>({url:`my-jetpack/v1/site/products/${c}?_locale=user`,method:"GET",status:200,response:_[c]})),D=d.map(c=>({url:`my-jetpack/v1/site/products/${c}?_locale=user`,method:"POST",status:200,response:{..._[c],status:_[c].status==="active"?"inactive":"active"}}));return[...P,...D]}function U(){return A([...Object.keys(_)])}function B(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const y=Object.keys(_);return f?y:y.filter(d=>!_[d].is_bundle)}var ne=`/* eslint-disable react/react-in-jsx-scope */
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
`,re={Default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}};const M={title:"Packages/My Jetpack/Connected Product Offer",component:u,parameters:{storySource:{source:`
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
};`,locationsMap:{default:{startLoc:{col:35,line:26},endLoc:{col:78,line:26},startBody:{col:35,line:26},endBody:{col:78,line:26}}}},layout:"centered"},argTypes:{slug:{control:{type:"select"},options:B(!0)},isCard:{control:{type:"boolean"}}}},R=U(),C=f=>(0,g.jsx)(u,{...f});C.displayName="DefaultDefaultProductOffer";const k=C.bind({});k.parameters={mockData:R},k.args={slug:"backup",isCard:!1},k.parameters={...k.parameters,docs:{...(v=k.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ConnectedProductOffer {...args} />",...(O=(S=k.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const I=["Default"]},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(h,i,t)=>{t.d(i,{Z:()=>p});var l=t("../connection/components/use-connection/index.jsx");function p(){const{apiRoot:o,apiNonce:s}=myJetpackRest,{topJetpackMenuItemUrl:e}=myJetpackInitialState,n=(0,l.Z)({apiRoot:o,apiNonce:s}),r=n.isRegistered;return{apiNonce:s,apiRoot:o,...n,isSiteConnected:r,topJetpackMenuItemUrl:e}}}}]);})();
